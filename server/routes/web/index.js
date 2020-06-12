module.exports = app => {
    const router = require('express').Router()
    const mongoose = require('mongoose')
    const Category = require('../../models/Category')
    const Article = require('../../models/Article')
    
    router.get('/news', async (req, res) => {
        const parent = await Category.findOne({
            name: '新闻分类'
        })
        const cats = await Category.aggregate([
            { $match: { parent: parent._id } },
            {
                $lookup: {
                    from: 'articles',
                    localField: '_id',
                    foreignField: 'categories',
                    as: 'newsList'
                }
            },
            {
                $addFields: {
                    newsList: { $slice: ['$newsList', 4] }
                }
            }
        ])
        const subCats = cats.map(v => v._id)
        cats.unshift({
            name: '最新',
            newsList: await Article.find().where({
                categories: { $in: subCats }
            }).populate('categories').limit(4).lean()
        })

        cats.map(cat => {
            cat.newsList.map(news => {
                news.categoryName = (cat.name === '最新')
                    ? news.categories[0].name : cat.name
                return news
            })
            return cat
        })
        res.send(cats)
    })
    app.use('/web/api', router)
}