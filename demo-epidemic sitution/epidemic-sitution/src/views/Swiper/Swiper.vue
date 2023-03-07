<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" ref="swiper">
      <van-swipe-item v-for="item in banner" :key="item.title">
        <img :src="item.image" alt="" width="100%" />
      </van-swipe-item>
    </van-swipe>
    <div class="checkedBox">
      <div class="checked" :data-index='index' @click="onChange" v-for="(item,index) in banner" :key="index">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
import api from '../../api/index.js'
export default {
  name: 'Swiper',
  data() {
    return {
      banner: [],
      indexes: ''
    }
  },
  mounted() {
    api.getSwiperBanner().then(res => {
      console.log('---轮播图---', res)
      this.banner = res.data.result
    })
  },
  methods: {
    onChange(e) {
      console.log(e)
      this.indexes = e.currentTarget.dataset.index
      this.$refs.swiper.swipeTo(this.indexes)
      console.log(this.$refs.swiper)
    }
  }
}
</script>

<style lang='less' scoped>
.my-swipe .van-swipe-item {
  height: 4.6rem;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #f5f5f5;
}
.checkedBox {
  display: flex;
  margin: 0 0.1rem 0 0.1rem;
}
.checked {
  background: #f5f5f5;
  text-align: center;
  color: #666;
  margin-left: 0.1rem;
}
.checked:hover {
  color: blue;
}
</style>