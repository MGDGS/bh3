<template>
  <div>
    <div class="nav w-100 h-92-px ps-fixed t-0 l-0 d-flex ai-center">
      <div class="nav-wrap d-flex ai-center jc-between w-1240-px pr-10-px">
        <div class="nav-list ml-15-px ps-rel">
          <div
            class="nav-list-item"
            v-for="(items, index) in nav"
            :key="index"
            @click="navActive=index,goto(items.url)"
            :class="{'active':navActive==index}"
          >
            <div>{{items.title}}</div>
            <span>{{items.aka}}</span>
          </div>
        </div>
        <div class="nav-ft">
          <a class="nav-ft-item" @click="test">
            <div>成长关爱系统</div>
            <span>PROGRESS</span>
          </a>
          <a class="nav-ft-item">
            <div>米哈游通行证</div>
            <span>miHoYo PASS</span>
          </a>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        { title: "官网首页", aka: "HOME", url:'/' },
        { title: "作战资讯", aka: "NEWS", url: '/news' },
        { title: "女武神", aka: "VALKYRIES", url:'/'  },
        { title: "动画壁纸", aka: "WALLPAPERS", url:'/'  },
        { title: "周边商城", aka: "MERCH", url:'/'  },
        { title: "官方社区", aka: "FORUM" , url:'/' }
      ],
      navActive: 0
    }
  },
  methods: {
    async test() {
      const res = await this.$http.get('test')
      console.log(res.data)
    },
    goto(url) {
      this.$router.push(url)
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/variables";
.nav {
  background: rgba(0, 0, 0, 0.8);
  border-bottom: 2px solid rgba(64, 206, 255, 0.84);
  box-shadow: 0 2px 10px 0 rgba(1, 1, 1, 0.3);
  z-index: 998;
  .nav-wrap {
    margin: 0 auto;
    .nav-list {
      font-weight: bold;
      color: map-get($map: $colors, $key: "primary");
      display: flex;
      font-size: 19px;
      text-align: center;
      .nav-list-item {
        width: 130px;
        cursor: pointer;
        position: relative;
        line-height: 1.2;
        div {
          transform: skew(-11deg);
        }
      }
      .active,
      .nav-list-item:hover {
        color: map-get($map: $colors, $key: "white");
      }
      .nav-list-item::after {
        content: "";
        position: absolute;
        width: 25px;
        height: 50px;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAABQCAYAAACETVz/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYwN0Y3QkI5REVDMTExRTk5NzExRURGNTM2QTE0QkM0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYwN0Y3QkJBREVDMTExRTk5NzExRURGNTM2QTE0QkM0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjA3RjdCQjdERUMxMTFFOTk3MTFFREY1MzZBMTRCQzQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjA3RjdCQjhERUMxMTFFOTk3MTFFREY1MzZBMTRCQzQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6KBZ0SAAACwklEQVR42tSbC0/iQBSFp2UARV0kwtbft7/eio9lF3QR2q6TzCTXsyy2ZR7HmzSmmpQv3zx6bovZj/uNIqxMnuTqC5QmtShN1jk5IKVJlFazQaLFxh5UkAMwuWMb7txC/mORCVKDxTe2hWPghrBYKjbIMVjcsm1BBm4EFvdskBNYMK9st0UDdyb2xgoXDAPkBVjcsAUMA3cJc/GVDfIKLP6WmzcDpIGbirloLK7Z8uS13bydudUxiykgzb44E5t3bSGpkvkM5uLKZcYuITO0xRv7033uE1uPcw2ft8IgkRrSrOSFNegWyUPfniL0inbAPw8FiZSQzqLsYZandGchamozo5yLb2yQC7C67HqB0Avn2/txLs5/vR9/Tm3GfVchDJoq+3ZpIZPORJyvj8WxVCYLOC/7XiiUyQsItZtjyTuVSW8WQ5mc2L3R1Ytd1YrJ5C2c3/mITz7rDCxu24Ta2MN9qz4+Y7zzcVGfJsc2eUuLz2yQBVi8/6zBig1psuJcxLF9l1AbCxItlr4s+oLUEMf2feJYaMgCrlO2aVNjQg7AYuXbog/IBTT7y7ZtaizIHIJEfWqQCAE5hzvWQ5c2NQZkBkGi8XUL9Al5oz6+e3lU4jWb79I9LRZisw5qsS+keWQyEpDP6sALotSQ3+GWF9RiH0j3yKQ+pdkPDbkAi6WKUF0gL8Fi72Y/JOQcgsNSRaq2kOe2yWpEm/rCBjmD4PCoIlYbyLE1WYsGa8MGObXBwbUHTypy6RZ/lyt6F3MutoW8AosrlaD0J63BUFisYu2LXSDdYmmsybVKVPpIzhyKbaeJcY/uCjmCu0sywP9BZvb30uKWDVKDxZ1KXPqAxQG0Bns2SPeqtxHbTsMKSWMRIXOwViuSymE+KrGBV2yQmRhiKotyuDPWoXYm8cvnjSIrfQCMDvJL/INGzj7Upv4KMACACJsqvTNL7gAAAABJRU5ErkJggg==)
          center center no-repeat;
        background-size: 100% 100%;
        right: -12px;
        top: 50%;
        margin-top: -25px;
      }
    }
    .nav-ft {
      font-weight: bold;
      color: #62eaf5;
      display: flex;
      text-align: center;
      font-size: 14px;
      line-height: 1.4;
      .nav-ft-item {
        cursor: pointer;
        margin-left: 46px;
      }
      .nav-ft-item:hover {
        color: map-get($map: $colors, $key: "white");
      }
    }
  }
}
.nav .nav-list-item,
.nav .nav-ft-item {
  span {
    font-size: 12px;
    opacity: 0.3;
    transform: skew(-11deg);
    font-weight: bold;
  }
}
</style>