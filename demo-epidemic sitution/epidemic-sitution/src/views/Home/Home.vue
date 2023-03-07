<template>
  <div class="home">
    <img src="../../assets/images/header.png" alt="" width="100%">
    <button class="btn" @click="click">{{city}}</button>
    <Info :news='news'></Info>
    <Navs></Navs>
    <CovNumber :covData='covData'></CovNumber>
    <ChinaMap></ChinaMap>
    <Swiper></Swiper>
  </div>

</template>
<script>
import Info from './../Info/Info.vue'
import api from '../../api/index.js'
import Navs from '../navs/navs.vue'
import CovNumber from '../CovNumber/CovNumber.vue'
import ChinaMap from '../Map/ChinaMap.vue'
import Swiper from '../Swiper/Swiper.vue'
export default {
  name: 'Home',
  data() {
    return {
      news: [],
      covData: {},
      city: '国内疫情'
    }
  },
  components: {
    Info,
    Navs,
    CovNumber,
    ChinaMap,
    Swiper
  },
  created() {
    api.getCovInfo().then(res => {
      console.log(res.data)
      //疫情热点
      this.news = res.data.newslist[0].news
      //全国疫情数据统计信息
      let data = res.data.newslist[0].desc
      this.covData = {
        currentConfirmedCount: data.currentConfirmedCount,
        currentConfirmedIncr: data.currentConfirmedIncr,
        suspectedCount: data.suspectedCount,
        suspectedIncr: data.suspectedIncr,
        seriousCount: data.seriousCount,
        seriousIncr: data.seriousIncr,
        confirmedCount: data.confirmedCount,
        confirmedIncr: data.confirmedIncr,
        deadCount: data.deadCount,
        deadIncr: data.deadIncr,
        curedCount: data.curedCount,
        curedIncr: data.curedIncr,
        modifyTime: data.modifyTime
      }
    })
    let city = localStorage.getItem('city')
    if (city) {
      this.city = city + '疫情'
    }
  },
  methods: {
    click() {
      this.$router.push('/SelectCitys')
    }
  }
}
</script>

<style lang='less' scoped>
.box {
  width: 2rem;
  height: 2rem;
  background-color: pink;
}
.btn {
  position: absolute;
  right: 0.25rem;
  top: 0.2rem;
  border: white;
  border-radius: 0.4rem;
  width: 2.2rem;
  height: 0.5rem;
  font-size: 0.06rem;
  background-color: rgba(19, 15, 133, 0.5);
  color: white;
}
</style>
