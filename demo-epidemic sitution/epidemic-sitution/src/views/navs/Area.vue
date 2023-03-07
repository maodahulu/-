<template>
  <div>
    <div class="img">
      <img src="../../assets/images/area.png" width="100%" />
      <button class="btn" @click="$router.back()">返回疫情动态</button>
    </div>
    <div class="content">
      <div class="top">全国风险地区总汇</div>
      <template v-if="high.length>0">
        <div class="title">
          <img src="../../assets/images/high.png" width="6%" alt="">
          <div class="num">高风险地区{{high.length}}个</div>
          <div class="time">截止至北京时间{{ time | time}}</div>
        </div>
        <ul>
          <li v-for="(item,index) in high" :key="index" class="area">
            <div class="head">{{ item | head }}</div>
            <div class="root">{{ item | foot }}</div>
          </li>
        </ul>
      </template>
      <template v-if="mid.length>0">
        <div class="title">
          <img src="../../assets/images/mid.png" width="6%" alt="">
          <div class="num">中风险地区{{mid.length}}个</div>
          <div class="time">截止至北京时间{{ time | time}}</div>
        </div>
        <li v-for="(item,index) in mid" :key="index" class="area">
          <div class="head">{{ item | head }}</div>
          <div class="root">{{ item | foot }}</div>
        </li>
      </template>
    </div>
  </div>
</template>

<script>
import api from '../../api/index.js'
export default {
  name: 'Area',
  data() {
    return {
      high: [],
      mid: [],
      time: ''
    }
  },
  // methods: {
  //   btn() {
  //     console.log('111')
  //   }
  // },
  filters: {
    time: function(time) {
      var date = new Date(time)
      var y = date.getFullYear()
      var M = date.getMonth() + 1
      var d = date.getDate()
      var h = date.getHours()
      var m = date.getMinutes()
      var s = date.getSeconds()
      return y + '-' + M + '-' + d + '   ' + h + ':' + m
    },
    head: function(head) {
      return head.slice(0, 2)
    },
    foot: function(foot) {
      return foot.slice(2, foot.length)
    }
  },
  created() {
    api.getCovInfo().then(res => {
      const area = res.data.newslist[0].riskarea
      this.high = area.high
      this.mid = area.mid
      this.time = res.data.newslist[0].desc.modifyTime
    })
  }
}
</script>

<style lang="less" scoped>
.img {
  margin-bottom: -44%;
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
.content {
  border: 0.01rem solid #0000002b;
  border-radius: 0.1rem;
  margin: 0 0.25rem 0 0.25rem;
  padding: 0.2rem;
}
.top {
  height: 0.36rem;
  border-left: 0.08rem solid #4169e2;
  margin-left: 0.1rem;
  padding-left: 0.15rem;
  margin-bottom: 0.5rem;
  font-size: 0.3rem;
  font-weight: bold;
}
.title {
  margin-bottom: 0.4rem;
  display: flex;
}
.num {
  margin: 0 0.3rem 0 0.2rem;
}
.time {
  font-size: 0.1rem;
  color: #999999;
}
ul {
  background-color: #f7f7f7;
}
.area {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.2rem;
  font-size: #333333;
  .head {
    margin-right: 0.2rem;
    margin-bottom: 0.2rem;
  }
  .root {
    width: 5rem;
    margin-left: 0.5rem;
  }
}
</style>