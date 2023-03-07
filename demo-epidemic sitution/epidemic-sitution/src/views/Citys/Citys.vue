<template>
  <div>
    <van-index-bar :index-list="indexList">
      <template v-for="(item,name) in citylist">
        <van-index-anchor :index="name" :key="name" />
        <van-cell :title="i.name" v-for="i in item" :key="i.id" @click="click" />
      </template>
    </van-index-bar>
  </div>
</template>
</div>
</template>

<script>
import api from '../../api/index.js'
export default {
  name: 'Citys',
  data() {
    return {
      citylist: {},
      indexList: []
    }
  },
  created() {
    api.getCity().then(res => {
      console.log(res.data)
      this.citylist = res.data.result.citylist
      this.indexList = Object.keys(res.data.result.citylist)
    })
  },
  methods: {
    click(e) {
      this.$router.go(-1)
      localStorage.setItem('city', e.target.innerText)
    }
  }
}
</script>

<style>
</style>