import echarts from 'echarts'
import '../utils/map'

const install = function (Vue, options) {
  //添加实例方法
  //Vue.prototype.demo=function(){}
  Object.defineProperties(Vue.prototype, {
    $myChart: {
      get() {
        return {
          chinaMap(id, data) {
            var myChart = echarts.init(document.getElementById(id));
            var option = {
              tooltip: { //悬浮弹框
                triggerOn: 'click',   //提示框触发条件
                enterable: true,      //鼠标书否可进入提示框浮层中
                formatter(item) {
                  // /' + item.name + '
                  return '<a href="#/Citys/' + item.name + '" style="color:#fff">省份:' + item.name + '详细</a>'
                }
              },
              visualMap: [{ //映射高亮颜色
                orient: "horizontal",   //水平
                type: "piecewise",    //离散
                bottom: 0,
                pieces: [     //配置颜色区间
                  {
                    min: 0,
                    max: 0,
                    color: "#FFFFFF"
                  },
                  {
                    min: 1,
                    max: 100,
                    color: "#FDFDCF"
                  },
                  {
                    min: 100,
                    max: 1000,
                    color: "#FE9E83"
                  },
                  {
                    min: 1000,
                    max: 5000,
                    color: "#E55A4E"
                  },
                  {
                    min: 5000,
                    color: "#4F070D"
                  }
                ]
              }],
              series: [{
                name: "省",
                type: "map",
                map: "china",
                roam: false,
                zoom: 1.2,
                aspectScale: 0.75,
                top: 40,
                layoutCenter: ['5%', '5%'],
                label: {
                  normal: {
                    show: true,
                    textStyle: {
                      fontSize: 8
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    areaColor: 'rgba(0,255,236,0)',
                    borderColor: 'rgba(0,0,0,0.2)',
                  },
                  emphasis: {      //选中区域的颜色及阴影效果等
                    areaColor: 'rgba(255,180,0,0.8)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0
                  }
                },
                data
              }]
            }
            myChart.setOption(option)
          },
          cityMap(id, cityname, data) {
            var myEcharts = echarts.init(document.getElementById(id))
            var option = {
              tooltip: {
                formatter(data) {
                  return data.name
                }
              },
              visualMap: [{  // 映射-颜色值
                orient: "horizontal", // 分段方向:horizontal水平   垂直vertical
                type: "piecewise", // 分段
                pieces: [  // 配置颜色区间
                  { min: 0, max: 0, color: "#FFFFFF" },
                  { min: 1, max: 10, color: "#FDFDCF" },
                  { min: 10, max: 100, color: "#FE9E83" },
                  { min: 100, max: 500, color: "#E55A4E" },
                  { min: 500, max: 10000, color: "#4F070D" }
                ]
              }],
              series: [{
                name: "市",
                type: "map",  // 配置图表类型
                map: cityname, // 必须写中文
                roam: false,  // 是否允许自动缩放
                zoom: 1.2,    // 地图缩放比例
                label: {      // 配置字体
                  normal: {
                    show: true,
                    textStyle: {
                      fontSize: 8
                    }
                  }
                },
                itemStyle: {  // 配置地图样式
                  normal: {
                    areaColor: 'rgba(0,255,236,0)',
                    borderColor: 'rgba(0,0,0,0.2)',
                  },
                  emphasis: { // 选中的区域颜色及阴影效果等
                    areaColor: 'rgba(255,180,0,0.8)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0,
                  }
                },
                data
              }]
            }
            myEcharts.setOption(option);
          }
        }
      }
    }

  })
}

export default install