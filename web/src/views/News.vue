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
          <cates :cates="newsCates" size="l"></cates>
          <div class="news-list"></div>
          <div class="more-btn">查看更多</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cates from '../components/Cate'
export default {
    data() {
        return{
            newsCates: ["最新","动态","公告","活动","补给"]
        }
    },
    components: {
        cates: Cates
    }
}
</script>

<style lang="scss">
@import "../assets/scss/variables";
.news {
  margin: 0 auto;
  background: map-get($map: $colors, $key: "news-bg")
    url(../assets/images/newsbg.jpg);
  .news-wrap {
    margin: 0 auto;
    .news-title {
      font-size: 60px;
      font-weight: bold;
      color: #9c9c9c;
      text-align: center;
      padding: 50px 0;
      span:first-child {
        color: #fff;
      }
      span:last-child {
        display: inline-block;
        -webkit-transform: skew(-11deg);
        -ms-transform: skew(-11deg);
        transform: skew(-11deg);
        font-size: 40px;
        margin-left: -15px;
      }
    }
    .news-content {
      border: 2px solid #646798;
      border-radius: 5px;
      .news-content-wrap {
        background: rgba(15, 20, 97, 0.9);
        border: 6px solid rgba(255, 255, 255, 0.2);
        padding: 18px 14px;
        .news-cates {
          display: flex;
          font-size: 30px;
          font-weight: bold;
          color: #fff;
          margin-bottom: 25px;
          padding-left: 10px;
          .news-cate {
            cursor: pointer;
            width: 170px;
            height: 60px;
            line-height: 60px;
            border-radius: 14px;
            text-align: center;
            background: #0097de;
            margin-right: 10px;
            transform: skew(-20deg);
            span {
              display: inline-block;
              -webkit-transform: skew(20deg);
              -ms-transform: skew(20deg);
              transform: skew(20deg);
            }
          }
        }
      }
    }
  }
}
</style>