<template>
  <div class="container">
    <div class="content">
      <div class="title">截至北京时间{{ covData.modifyTime | time }} </div>
      <ul class="warp">
        <li>
          <span class="compare">较昨日{{ covData.currentConfirmedIncr | number | symobl }}</span>
          <div class="bold">{{ covData.currentConfirmedCount | symobl }}</div>
          <strong>现存确诊</strong>
        </li>
        <li>
          <span class="compare">较昨日{{ covData.suspectedIncr | number | symobl }}</span>
          <div class="bold">{{ covData.suspectedCount | symobl }}</div>
          <strong>境外输入</strong>
        </li>
        <li>
          <span class="compare">较昨日{{ covData.seriousIncr | number | symobl }}</span>
          <div class="bold">{{ covData.seriousCount | symobl }}</div>
          <strong>现存无症状</strong>
        </li>
        <li>
          <span class="compare">较昨日{{ covData.confirmedIncr | number | symobl }}</span>
          <div class="bold">{{ covData.confirmedCount | symobl }}</div>
          <strong>累计确诊</strong>
        </li>
        <li>
          <span class="compare">较昨日{{ covData.deadIncr | number | symobl }}</span>
          <div class="bold">{{ covData.deadCount | symobl }}</div>
          <strong>累计死亡</strong>
        </li>
        <li>
          <span class="compare">较昨日{{ covData.curedIncr | number | symobl}}</span>
          <div class="bold">{{ covData.curedCount | symobl}}</div>
          <strong>累计治愈</strong>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CovNumber',
  props: ['covData'],
  filters: {
    number: function(num) {
      num = num > 0 ? '+' + num : num
      return num
    },
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
    symobl: function(symobl) {
      if (!symobl) {
        symobl = ''
      } else {
        symobl = parseInt(symobl.toString())
      }
      return symobl.toLocaleString()
    }
  }
}
</script>

<style lang='less' scoped>
.container {
  background-color: #f5f5f5;
  padding-top: 0.2rem;
  .content {
    background-color: #fff;
    border-radius: 0.2rem 0.2rem 0 0;
    padding: 0.2rem;
    .title {
      color: #666;
      margin-bottom: 0.2rem;
      font-size: 0.2rem;
    }
  }
  .warp {
    display: flex;
    flex-wrap: wrap;
    padding-top: 0.2rem;
    border-radius: 0.1rem;
    box-shadow: 0 0 3px 2px rgba(175, 175, 172, 20%);
    li {
      width: 33.333333%;
      text-align: center;
      margin-bottom: 0.2rem;
      color: #666;
      span {
        font-size: 0.1rem;
      }
      strong {
        color: #666;
      }
      .bold {
        font-weight: bold;
        font-size: 0.35rem;
      }
    }
    li:nth-child(1) .bold {
      color: rgb(247, 76, 49);
    }
    li:nth-child(1) .compare {
      color: rgb(247, 76, 49);
    }
    li:nth-child(2) .bold {
      color: rgb(247, 130, 7);
    }
    li:nth-child(2) .compare {
      color: rgb(247, 130, 7);
    }
    li:nth-child(3) .bold {
      color: rgb(162, 90, 78);
    }
    li:nth-child(3) .compare {
      color: rgb(162, 90, 78);
    }
    li:nth-child(4) .bold {
      color: rgb(174, 33, 44);
    }
    li:nth-child(4) .compare {
      color: rgb(174, 33, 44);
    }
    li:nth-child(5) .bold {
      color: rgb(93, 112, 146);
    }
    li:nth-child(5) .compare {
      color: rgb(93, 112, 146);
    }
    li:nth-child(6) .bold {
      color: rgb(40, 183, 163);
    }
    li:nth-child(6) .compare {
      color: rgb(40, 183, 163);
    }
  }
}
</style>