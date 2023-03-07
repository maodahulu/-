<template>
  <div class="list">
    <div class="list-one">
      <router-link to='/Area'>
        <img src="../../assets/images/docter.png" alt="">
        <div>风险地区</div>
      </router-link>
    </div>
    <div class="list-one">
      <router-link to='/checked'>
        <img src="../../assets/images/checked.png" alt="">
        <div>核酸检测</div>
      </router-link>
    </div>
    <div class="list-one">
      <router-link to='/Resource'>
        <img src="../../assets/images/resource.png" alt="">
        <div>防疫物资</div>
      </router-link>
    </div>
    <div class="list-one">
      <router-link to='Travel'>
        <img src="../../assets/images/journey.png" alt="">
        <div>出行政策</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navs'
}
</script>

<style lang='less' scoped>
.list {
  display: flex;
}
.list-one {
  margin: 0 0.35rem;
  text-align: center;
  img {
    width: 0.8rem;
  }
}
</style>