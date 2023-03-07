<template>
  <div class="contain">
    <div class="img">
      <img src="../../assets/images/travel.png" width="100%">
    </div>
    <van-field v-model="fromCity" is-link readonly label="出发地点" placeholder="请选择所在地区" @click="show1 = true" />
    <van-popup v-model="show1" round position="bottom">
      <van-cascader v-model="cascaderValue1" title="请选择所在地区" :options="options" @close="show1 = false" @finish="goFinish" />
    </van-popup>
    <van-field v-model="toCity" is-link readonly label="到达地点" placeholder="请选择所在地区" @click="show2 = true" />
    <van-popup v-model="show2" round position="bottom">
      <van-cascader v-model="cascaderValue2" title="请选择所在地区" :options="options" @close="show2 = false" @finish="toFinish" />
    </van-popup>
    <div class="search">
      <van-button type="primary" size="large" @click="search">查询</van-button>
    </div>
    <div class="content">
      <div class="from">
        <div class="headFrom" v-if="from_info.city_name">{{from_info.city_name}}</div>
        <div class="area">{{from_info.out_desc}}</div>
        <div class="info">{{from_info.low_in_desc}}</div>
      </div>
      <div class="to">
        <div class="headTo" v-if="to_info.city_name">{{to_info.city_name}}</div>
        <div class="area">{{to_info.out_desc}}</div>
        <div class="info">{{to_info.low_in_desc}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../api/index.js'
export default {
  data() {
    return {
      show1: false,
      show2: false,
      fromCity: '',
      toCity: '',
      from: '',
      to: '',
      from_info: '',
      to_info: '',
      cascaderValue1: '',
      cascaderValue2: '',
      // 选项列表，children 代表子选项，支持多级嵌套
      options: []
    }
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    goFinish({ value, selectedOptions, tabIndex }) {
      this.show1 = false
      this.from = value
      this.fromCity = selectedOptions.map(option => option.text).join('/')
      console.log(value)
    },
    toFinish({ value, selectedOptions, tabIndex }) {
      this.show2 = false
      this.to = value
      this.toCity = selectedOptions.map(option => option.text).join('/')
    },
    search() {
      api
        .getTravelCity({
          from: this.from,
          to: this.to
        })
        .then(res => {
          console.log(res.data)
          this.from_info = res.data.result.from_info
          this.to_info = res.data.result.to_info
        })
    }
  },
  created() {
    api.getTravel().then(res => {
      console.log('城市', res.data.result)
      let result = res.data.result
      let arr = []
      result.forEach(element => {
        let obj = {}
        obj.text = element.province
        obj.province = element.province_id
        obj.children = []
        element.citys.forEach(item => {
          let child = {}
          child.text = item.city
          child.value = item.city_id
          obj.children.push(child)
        })
        arr.push(obj)
      })
      this.options = arr
    }),
      console.log(11, document.getElementsByClassName('headFrom'))
  }
}
</script>

<style lang='less' scoped>
.contain {
  padding: 0.2rem;
}
.img {
  margin-bottom: -20%;
}
.search {
  margin: 0.2rem;
}
.content {
  margin-top: 1rem;
  border: 0.01rem solid #0000002b;
  padding: 0.2rem;
}
.from {
  margin-bottom: 1rem;
}
.headFrom {
  width: 2rem;
  height: 0.5rem;
  background-color: #fbb046;
  color: white;
  border-radius: 0.1rem;
  text-align: center;
  margin-bottom: 0.2rem;
}
.area {
  margin-bottom: 1rem;
  background-color: #f2f3f5;
}
.info {
  margin-bottom: 1rem;
}
.to {
  margin-bottom: 1rem;
}
.headTo {
  width: 2rem;
  height: 0.5rem;
  background-color: #f57676;
  color: white;
  border-radius: 0.1rem;
}
</style>