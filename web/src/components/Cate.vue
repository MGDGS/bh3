<template>
  <div :class="catesStyle">
    <div
      class="cate pointer text-white"
      v-for="(items, index) in cates"
      :key="index"
      @click="cateActive=index,cateBtn(items)"
      :class="{'cate-active':cateActive==index}"
    >
      <span>{{items}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cates", "size", "active"],
  data() {
    return {
      cateActive: 0
    };
  },
  methods: {
      cateBtn(items) {
          this.$emit('cateactive',items)
      }
  },
  computed: {
    catesStyle() {
      let result;
      this.size == "m"
        ? (result = { mcates: true })
        : (result = { lcates: true });
      return result;
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/variables";
.mcates {
  display: flex;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  line-height: 40px;
  .cate {
    width: 100px;
    height: 40px;
    margin-right: 5px;
    border-radius: 6px;
    transform: skew(-20deg);
    background: map-get($map: $colors, $key: "info-1");
    span {
      display: inline-block;
      transform: skew(20deg);
    }
  }
  .cate-active {
    background: map-get($map: $colors, $key: "white") !important;
    color: map-get($map: $colors, $key: "info-1") !important;
  }
  .cate:hover {
    background: #33cbff;
  }
}

.lcates {
  display: flex;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 25px;
  padding-left: 10px;
  .cate {
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
      transform: skew(20deg);
    }
  }
  .cate-active {
    background: map-get($map: $colors, $key: "white") !important;
    color: map-get($map: $colors, $key: "info-1") !important;
  }
  .cate:hover {
    background: #33cbff;
  }
}
</style>