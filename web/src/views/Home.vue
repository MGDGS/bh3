<template>
  <div>
    <div class="page bg-info">
      <div class="page-banner ps-rel h-1386-px of-hid">
        <video loop="loop" class="page-banner-bg ps-ab t-50 l-50" autoplay="autoplay" muted="muted">
          <source src="../assets/videos/pcbanner_1572953849_6407.mp4" type="audio/mp4" />
        </video>
        <div class="logo ps-ab l-50 h-120-px t-112-px ml-356-px w-250-px">
          <img src="../assets/images/f0c3ebe.png" class="w-100" />
        </div>
        <div class="game16 ps-ab l-50 t-125-px ml-630-px w-120-px h-120-px"></div>
        <div class="download ps-ab d-flex ai-center l-50 b-430-px">
          <div class="pv d-flex ai-center ps-rel w-250-px p-5-px mr-20-px bg-alpha-4 radius">
            <video autoplay="autoplay" loop="loop" muted="muted" class="w-240-px h-130-px op-8">
              <source
                src="https://webstatic.mihoyo.com/upload/op-public/2020/05/25/8e028f28d10f4733f851f8c3abd79998_3891450561555862213.mp4"
                type="audio/mp4"
              />
            </video>
            <div class="pv-video-btn ps-ab w-65-px h-87-px l-50 t-50 pointer" @click="videoShow=true"></div>
          </div>
          <div
            class="download-box d-flex jc-between h-140-px w-390-px bg-alpha-8 radius px-10-px py-5-px"
          >
            <div class="qr d-flex jc-between w-166-px h-122-px text-info">
              <div class="qrimg ps-rel pt-6-px">
                <img
                  class="w-93-px h-93-px"
                  src="https://uploadstatic.mihoyo.com/bh3/upload/officialsites/201908/qrcode_1566960902_4545.png"
                />
                <div class="qr-line ps-ab w-114-px h-8-px t-5-px"></div>
              </div>
              <a href="#" class="pt-11-px pr-5-px">模拟器下载</a>
            </div>
            <div class="download-btns pt-5-px">
              <div
                class="pc-btn d-flex ai-center w-193-px h-50-px px-10-px mb-15-px radius text-white bg-info radius pointer"
              >
                <img
                  class="w-28-px mr-12-px"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlFNTMxQ0IzRDkyMjExRTk4MTNFQURFRDY4OEQ2NTc0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlFNTMxQ0I0RDkyMjExRTk4MTNFQURFRDY4OEQ2NTc0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUU1MzFDQjFEOTIyMTFFOTgxM0VBREVENjg4RDY1NzQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUU1MzFDQjJEOTIyMTFFOTgxM0VBREVENjg4RDY1NzQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz572aMLAAAA8ElEQVR42mL4//+/PRDf+U9/ALLTnhFIPGZgYJBhGBjwBOSA/1BOLRAfoZPFNkDcDGKwIAleAeIDdHKAAIzBxDDAYNQBow4YdcCoA0YdMOoA5NpQDIgV6GSvGIyB3B4YclHwD4jdofgfuYaAQuAnkGYjQ+8PIJaAsl8AMQcZZvwChcBUMh0PsvAaFHOQacZUUAgwAhmOQKxDQpToAnESmtg8IL5MQvSBmoD7GUBpkAwcgKWZHUCOWYOqHMAGlIBYDou4Dg6xD1jEHwHxPXy5AJccKIU/JDOHoKR0IJaH5hSSygEJKljOADVDApckQIABAFrvEOf1nN0SAAAAAElFTkSuQmCC"
                />
                崩坏3桌面版下载
              </div>
              <a
                href="#"
                class="and-btn d-flex ai-center w-193-px h-50-px px-10-px mb-15-px bg-green radius pointer"
              >
                <img
                  class="w-28-px mr-12-px"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIwMjBGMTRCRDkyMjExRTk4QzkyQTNCRjIzNTFDM0I3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIwMjBGMTRDRDkyMjExRTk4QzkyQTNCRjIzNTFDM0I3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjAyMEYxNDlEOTIyMTFFOThDOTJBM0JGMjM1MUMzQjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjAyMEYxNEFEOTIyMTFFOThDOTJBM0JGMjM1MUMzQjciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5MnJ+DAAABoklEQVR42uyXsUrDUBSGb9IU6hYoOOjW0UEQg1AHnbpKwUVHwQdQ8El8hbqIuIjg5KB06arg2KlgUQLtYMTaJv6BEzikSe6NuQWR/PDRw83JOX+a3vTECIJAKGoffIMbSd4eqIJrpaqhAUVMcAUsYIAG2CUatGZRjqla1xLq8sEtuAPrYDl2/A08gQ7lCt3fwDHwArk+wJFqXdXmZ0F+negysA1mVPQStDKatign1BRs6TDwwBq4oJdhoEc5ke5l9Q3JNlwFA1FMK+A17aApOXlDFNdm1sGkbbhGW+wR9MFpQQN9utAd2qovWdvQYffvArSD4mpTrUgO7xm/BQ6LD0BNwy2oUa2kHnMGqiyuaDRQSekh/REuXKWB0sCfM/DF4inwNPTwqFZSjzkDXZZwDiYaDEyoVtS8K5uI6jTjCY2PYkE16yozoUsI9llELvtTyj0ThvNCB/i/uHKfzjV0zIRLwI41eKY1m2Ium87RNpZ/ElwzMGIx16h8EC3KwJDF7ynxMFfFHG9GIYdgDAagydabtDamHOWaRo634//5G/gRYABBJmnjiZN47AAAAABJRU5ErkJggg=="
                />
                Android下载
              </a>
            </div>
          </div>
        </div>
        <div class="news ps-ab d-flex jc-between w-1246-px h-326-px b-54-px l-50">
          <div class="news-swiper w-640-px h-280-px">
            <swiper ref="mySwiper" :options="swiperOptions">
              <swiper-slide v-for="(items, index) in swiperImg" :key="index">
                <img :src="items.url" />
              </swiper-slide>

              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
          <div class="home-news-list w-530-px text-white">
            <cates :cates="cates" size="m" @cateactive="active"></cates>
            <div class="home-news-content mb-10-px h-180-px of-hid">
              <div v-for="(items, index) in newsList" :key="index" v-show="cateActive===index">
                <a
                  href="#"
                  class="home-news-content-item d-flex jc-between ai-center h-45-px pointer"
                  v-for="(list,index) in items"
                  :key="index"
                >
                  <div>[ {{list[0]}} ] {{list[1]}}</div>
                  <div>{{list[2] | date}}</div>
                </a>
              </div>
            </div>
            <div class="more d-flex jc-end">
              <a href="#" class="more-btn w-90-px h-35-px pointer text-dark">查看全部</a>
            </div>
          </div>
        </div>
      </div>
      <div class="roles ps-rel h-975-px">
        <div class="roles-wrap ps-rel w-1246-px">
          <div class="big-img ps-ab b-0 w-960-px">
            <img
              class="w-100"
              src="https://uploadstatic.mihoyo.com/contentweb/20200522/2020052215482977156.png"
            />
          </div>
          <div
            class="role-info ps-ab d-flex flex-column ai-end w-660-px r-0 t-0 pt-140-px text-white"
          >
            <div class="role-info__title mb-30-px">
              <h2 class="mb-10-px">德丽莎·阿波卡利斯</h2>
              <p>角色卡：朔夜观星</p>
            </div>
            <div class="role-info__weapon d-flex jc-end ai-center ps-rel w-460-px mb-20-px">
              <div class="ps-ab l-0 t-50">
                <div class="py-10-px">姓名：德丽莎·阿波卡利斯</div>
                <div class="py-10-px">装甲：朔夜观星</div>
                <div class="py-10-px">作战方式：十字架</div>
                <div class="py-10-px"></div>
              </div>
              <div class="weapon-video ps-rel h-135-px">
                <img
                  class="h-100"
                  src="https://uploadstatic.mihoyo.com/contentweb/20200522/2020052216192319553.png"
                />
                <div class="weapon-video-btn ps-ab w-65-px h-87-px l-50 t-50"></div>
              </div>
            </div>
            <div class="role-info__intro p-8-px mb-15-px w-460-px">
              <div class="p-20-px">
                <div class="title d-flex jc-between ai-end ps-rel mb-20-px">
                  <div class="line ps-ab w-385-px l-12-px h-1-px"></div>
                  <span>角色介绍</span>
                  <span>Role Introduction</span>
                </div>
                <p>生物属性的物理辅助角色，不需要登场即可释放QTE及必杀技</p>
              </div>
            </div>
          </div>
          <div class="role-action">
            <div class="role-action__btns"></div>
            <div class="role-action__more"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="video-modal-bg" v-if="videoShow" @click="videoShow=false">
      <div class="video-modal-content" @click.stop="">
        <div class="video-close" @click="videoShow=false"></div>
        <video
          src="https://webstatic.mihoyo.com/upload/op-public/2020/05/25/e5732d9455e0ae4599117927753d16e5_8735338734798242479.mp4"
          controls="controls"
          autoplay
        ></video>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import Cates from '../components/Cate'
export default {
  filters: {
    date(val) {
      return dayjs(val).format("YYYY-MM-DD");
    }
  },
  data() {
    return {
      swiperImg: [
        { url: require("@/assets/images/swiper1.jpg") },
        { url: require("@/assets/images/swiper2.jpg") },
        { url: require("@/assets/images/swiper3.jpg") },
        { url: require("@/assets/images/swiper4.png") },
        { url: require("@/assets/images/swiper5.png") },
        { url: require("@/assets/images/swiper6.png") }
      ],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        autoplay: {
          disableOnInteraction: false,
          delay: 5000
        }
      },
      cateActive: "最新",
      news: [],
      videoShow: false
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
    cates() {
      return this.news.map(items=> {
        return items.name
      })
    },
    newsList() {
      let res= {}
       this.news.map(items=> {
        res[items.name]= items.newsList.map(res=>{
          return[res.categoryName,res.title,res.updatedAt]
        })
      })
      return res
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("news");
      this.news = res.data;
    },
    active(data) {
      this.cateActive = data
    }
  },
  created() {
    this.fetch();
  },
  components: {
        cates: Cates
    }
};
</script>

<style lang="scss">
@import "../assets/scss/home";
</style>