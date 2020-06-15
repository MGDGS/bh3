<template>
  <div class="news pt-92-px">
    <div class="news-wrap w-1240-px pb-35px">
      <div class="news-title">
        <span>作战资讯</span>
        /
        <span>NEWS</span>
      </div>
      <div class="news-content">
        <div class="news-content-wrap">
          <cates :cates="cates" size="l" @cateactive="active"></cates>
          <div class="news-list">
            <div>
              <a class="news-item" v-for="(list,index) in pagination" :key="index">
                <div class="news-item__img">
                  <img :src="list[1]" />
                </div>
                <div class="news-item_body">
                  <div class="news-item_title">
                    <div>{{list[2]}}</div>
                    <span>发布日期：{{list[3] | date}}</span>
                    <div class="base-line"></div>
                  </div>
                  <p class="news-item__intro">{{list[4]}}</p>
                </div>
              </a>
            </div>
            <div class="more-btn" @click="page++">查看更多</div>
          </div>
        </div>
      </div>
      <div class="top-arrow" v-show="topArrow" @click="toTop"></div>
    </div>
  </div>
</template>

<script>
import Cates from "../components/Cate";
import dayjs from "dayjs";
export default {
  filters: {
    date(val) {
      return dayjs(val).format("YYYY-MM-DD");
    }
  },
  data() {
    return {
      newsCates: ["最新", "动态", "公告", "活动", "补给"],
      cateList: [],
      cateActive: "最新",
      page: 0,
      topArrow: false
    };
  },
  computed: {
    cates() {
      return this.cateList.map(items => {
        return items.name;
      });
    },
    newsList() {
      let res = {};
      this.cateList.map(items => {
        res[items.name] = items.newsList.map(res => {
          return [
            res.categoryName,
            res.scover,
            res.title,
            res.updatedAt,
            res.label
          ];
        });
      });
      return res;
      //let pagination;
      // res[this.cateActive] !== undefined &&
      //   res[this.cateActive] !== null &&
      //   (pagination = res[this.cateActive].splice(0, this.page * 10 + 10));
      // return pagination;
    },
    pagination() {
      if (
        this.newsList[this.cateActive] !== undefined &&
        this.newsList[this.cateActive] !== null
      ) {
        return this.newsList[this.cateActive].slice(0, this.page * 10 + 10);
      }
      return "";
    }
  },
  methods: {
    async fetchNews() {
      const res = await this.$http.get("news");
      this.cateList = res.data;
    },
    active(data) {
      this.cateActive = data;
    },
    handleScroll() {
      // 页面滚动距顶部距离
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      scrollTop > 400 ? (this.topArrow = true) : (this.topArrow = false);
    },
    toTop() {
      window.scrollTo(0, 0);
    }
  },
  created() {
    this.fetchNews();
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
    // 监听（绑定）滚轮 滚动事件
  },
  components: {
    cates: Cates
  }
};
</script>

<style lang="scss">
@import "../assets/scss/news";
</style>