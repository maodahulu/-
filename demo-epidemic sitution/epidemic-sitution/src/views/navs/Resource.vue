<template>
  <div>
    <div class="img">
      <img src="../../assets/images/resource-Top.png" alt="" width="100%">
      <button class="btn" @click="$router.back()">返回疫情动态</button>
    </div>
    <div class="content">
      <van-tabs :active="active" animated>
        <van-tab v-for="(item,index) in content" :key="index" :title="item.title">
          <div>
            <div class="title">消毒剂指南</div>
            <div v-for="(i,index) in item.img" :key="index">
              <img width="100%" :src="i.image" alt="">
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import disinfector_one from '../../assets/images/disinfector-one.png'
import disinfector_two from '../../assets/images/disinfector-two.png'
import disinfector_three from '../../assets/images/disinfector-three.png'
import mouthmask from '../../assets/images/mouthmask.png'
import sanitiser from '../../assets/images/sanitiser.png'
import thermometer from '../../assets/images/thermometer.png';
export default {
  name:'Resource',
  data(){
    return{
      active:0,
      content:[
        {
          title:'消毒剂',
          img:[
            {image:disinfector_one},
            {image:disinfector_two},
            {image:disinfector_three}
          ]
        },
        {
          title:'口罩',
          img:[{image:mouthmask}]
        },
        {
          title:'洗手液',
          img:[{image:sanitiser}]
        },
        {
          title:'温度计',
          img:[{image:thermometer}]
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.title{
  text-align: center;
  font-size: 0.5rem;
  color: #000000;
  margin-top: 0.2rem;
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
</style>