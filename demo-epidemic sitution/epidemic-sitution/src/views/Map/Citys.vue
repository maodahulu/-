<template>
  <div>
    {{cityname}}城市地图
    <div id="main"></div>
  </div>
</template>

<script>
export default {
  name: 'Citys',
  props: ['cityname'],
  mounted() {
    this.$myChart.cityMap('main', this.cityname, [])
  }
}
</script>

<style lang="less" scoped>
#main {
  width: 7.5rem;
  height: 9rem;
  background: #f5f5f5;
}
</style>