<template>
  <div>
    <div>
      <van-field v-model="City" is-link readonly label="出发地点" placeholder="请选择所在地区" @click="show = true" />
      <van-popup v-model="show" round position="bottom">
        <van-cascader v-model="cascaderValue" title="请选择所在地区" :options="options" @close="show = false" @finish="Finish" />
      </van-popup>
    </div>
    <div class="search">
      <van-button type="primary" size="large" @click="search">查询</van-button>
    </div>
  </div>
</template>

<script>
import api from '../../api/index.js'
export default {
  name: 'checked',
  data() {
    return {
      City: '',
      show: false,
      cascaderValue: '',
      value: '',
      options: []
    }
  },
  methods: {
    Finish({ value, selectedOptions, tabIndex }) {
      this.show = false
      this.value = value
      this.City = selectedOptions.map(option => option.text).join('/')
    },
    search() {
      //接口失效
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

<style lang="less" scoped>
.search {
  margin: 0.2rem;
}
</style>