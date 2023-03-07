<template>
  <div>
    <div class="title">国内疫情地图</div>
    <van-tabs active="active" animated @click="change">
      <van-tab title="现存确诊">
        <div id="nowMain"></div>
      </van-tab>
      <van-tab title="累积确诊">
        <div id="main"></div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import api from '../../api/index.js'
export default {
  name: 'ChinaMap',
  data() {
    return {
      active: 0,
      totalArr: []
    }
  },
  mounted() {
    console.log('this', this)
    api.getChinaMap().then(res => {
      console.log(res)
      let citys = res.data.retdata
      let arr = []
      let totalArr = []
      for (let i = 0; i < citys.length; i++) {
        let obj = {}
        obj.name = citys[i].xArea
        obj.value = citys[i].curConfirm
        let total = {}
        total.name = citys[i].xArea
        total.value = citys[i].confirm
        arr.push(obj)
        totalArr.push(total)
      }
      this.totalArr = totalArr
      this.$nextTick(() => {
        this.$myChart.chinaMap('nowMain', arr)
        // this.$myChart.chinaMap('main', totalArr)
      })
    })
  },
  methods: {
    change(title) {
      if (title == 1) {
        this.$nextTick(() => {
          this.$myChart.chinaMap('main', this.totalArr)
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  margin-left: 0.25rem;
  height: 0.36rem;
  border-left: 0.08rem solid #4169e2;
  padding-left: 0.15rem;
  margin-bottom: 0.25rem;
  display: flex;
  font-size: 0.32rem;
}
#main {
  width: 7.5rem;
  height: 7rem;
  background: #f5f5f5;
}
#nowMain {
  width: 7.5rem;
  height: 7rem;
  background: #f5f5f5;
}
</style>>
