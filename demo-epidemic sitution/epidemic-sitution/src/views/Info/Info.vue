<template>
  <div class="info">
    <div class="title">
      <div class="title_img"><img src="../../assets/images/yiqiredian.png"></div>
      <div class="more"><a href="#">查看更多></a></div>
    </div>
    <ul>
      <li v-for='item in news' :key='item.id' class="lis">
        <a href="#" class="lis">
          <p class="new_text">最新</p>
          <p class="text">{{item.title}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Info',
  props: {
    news: {
      type: Array,
      default: function() {
        return []
      }
    }
  }
}
</script>

<style lang='less' scoped>
.info {
  padding: 0.2rem;
  .title {
    height: 0.36rem;
    border-left: 0.08rem solid #4169e2;
    margin-left: 0.1rem;
    padding-left: 0.15rem;
    margin-bottom: 0.25rem;
    display: flex;
  }
  .title_img img {
    width: 1.35rem;
  }
  .more {
    position: absolute;
    left: 80%;
    a {
      color: #4169e2;
    }
  }
}
.lis {
  display: flex;
  margin-bottom: 0.2rem;
  padding: 0 0.15rem;
}
.new_text {
  font-size: 0.15rem;
  display: flex;
  height: 0.35rem;
  width: 0.55rem;
  border-radius: 8%;
  background-color: #f74c31;
  color: white;
}
.text {
  display: flex;
  font-size: 0.3rem;
  color: #1a1a1a;
  margin-left: 0.2rem;
  letter-spacing: 0.025rem;
}
</style>