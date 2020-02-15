<template>
  <div id="stars">
      <div class="design-star star">
          <tip-r 
          :text="designText"  
          :tipWidth="designWidth"
          v-show="designShow"
          />
          <img src="~assets/design-star.png" 
          alt="" 
          :class="{'star-light': starryCurrent >= 2}"
          @click="starClick(2,'design')">
      </div>
      <div class="back-star star">
          <tip-r 
          :text="backText" 
          starTip="back-star-tip"
          tipShowWay="back-show"
          tipWidth="9ch"
          v-show="backShow" />
          <img src="~assets/back-star.png" 
          alt="" 
          :class="{'star-light': starryCurrent >= 3}"
          @click="starClick(3,'back')">
      </div>
      <div class="front-star star">
          <tip-r 
          :text="frontText" 
          starTip="front-star-tip" 
          tipShowWay="front-show"
          tipWidth="6ch"
          v-show="frontShow"
          />
          <img src="~assets/front-star.png" 
          alt="" 
          :class="{'star-light': starryCurrent >= 4}"
          @click="starClick(4,'front')">
      </div>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'

import TipR from 'components/common/TipR'
export default {
  name: 'Stars',
  data() {
      return {
          designText: 'Click me',
          backText: '到我了到我了',
          designWidth: '10ch',
          frontText: 'Come on',
          designShow: false,
          backShow: false,
          frontShow: false,
          clickTimes: 0, //定义当前状态下第几次点击
          timer1: {}, //定义两个定时器
          timer2: {}
      }
  },
  components: {
      TipR,
  },
  computed: {
      ...mapState(['starryCurrent'])
  },
  watch: {
      starryCurrent (val) {
          if(val ===2) {
              this.showTip()
          }
      }
  },
  methods: {
      ...mapMutations(['starryNext']),
      starClick(starNumber,clickStar) {
          console.log(this.starryCurrent);
          
            clearTimeout(this.timer1)//清除2个定时器
            clearTimeout(this.timer2)

          //每一次新的点击都把他们给false掉
              this.designShow = false
              this.backShow = false
              this.frontShow = false
          if(this.starryCurrent === starNumber) {
              this.clickTimes = 0 //进入下一个状态 点击次数清零
              clearTimeout(this.timer1)
              clearTimeout(this.timer2)
              this.starryNext()
          }else if (this.starryCurrent === 2) { //2状态是设计的状态
              if(clickStar == 'back' || clickStar == 'front') {
                  if(this.clickTimes === 0) {//还没有点击过,这是第一次点击
                    this.clickTimes++
                    this.designText = '先点我,我才是老大'
                    this.designWidth = '10ch'
                    this.designShow = true
                    this.timer1 = setTimeout(()=>{
                        this.backText = '先点我,先点我'
                        this.backShow = true
                        this.designShow = false
                    },2500) //定义3秒后执行 1秒显示 1秒退出 1秒展示
                    this.timer2 = setTimeout(()=>{
                        this.frontText = '.....'
                        this.frontShow = true
                        this.backShow = false
                    },5000)
                    this.timer1 = setTimeout(()=>{
                        console.log('frontnoshow');
                        this.frontShow = false
                    },7000) //定义3秒后执行 1秒显示 1秒退出 1秒展示
                  } else if (this.clickTimes >= 1){ //已经点过至少一次了
                    this.designText = '😠'
                    this.designWidth = '6ch'
                    this.designShow = true
                    this.timer1 = setTimeout(()=>{
                        this.designShow = false
                    },2500) //定义3秒后执行 1秒显示 1秒退出 1秒展示
                  }
              }
          } else if (this.starryCurrent === 3 ){ //后台的状态
              if(clickStar == 'design') {
                  if(this.clickTimes === 0) {//还没有点击过,这是第一次点击
                    this.clickTimes++
                    this.backText = '干嘛?到我了啊'
                    this.backShow = true
                    this.timer1 = setTimeout(()=>{
                        this.designText = '哈哈'
                        this.designWidth = '6ch'
                        this.designShow = true
                        this.backShow = false
                    },2500) //定义3秒后执行 1秒显示 1秒退出 1秒展示
                    this.timer2 = setTimeout(()=>{
                        this.designShow = false
                        clearTimeout(this.timer1)
                    },5000)
                  } else if (this.clickTimes >= 1){ //已经点过至少一次了
                    this.designText = '😘'
                    this.designWidth = '6ch'
                    this.designShow = true
                    this.timer1 = setTimeout(()=>{
                        this.backText = '请给我个面子'
                        this.backShow = true
                        this.designShow = false
                    },2500) //定义3秒后执行 1秒显示 1秒退出 1秒展示
                    this.timer2 = setTimeout(()=>{
                        this.backShow = false
                        clearTimeout(this.timer1)
                    },5000)
                  }
              } else if (clickStar == 'front') {
                  if(this.clickTimes === 0) {//还没有点击过,这是第一次点击
                    this.clickTimes++
                    this.backText = '干嘛?到我了啊'
                    this.backShow = true
                    this.timer1 = setTimeout(()=>{
                        this.frontText = '嘻嘻'
                        this.frontShow = true
                        this.backShow = false
                    },2500) //定义3秒后执行 1秒显示 1秒退出 1秒展示
                    this.timer2 = setTimeout(()=>{
                        this.frontShow = false
                        clearTimeout(this.timer1)
                    },5000)
                  } else if (this.clickTimes >= 1){ //已经点过至少一次了
                    this.frontText = '😘'
                    this.frontShow = true
                    this.timer1 = setTimeout(()=>{
                        this.backText = '请给我个面子'
                        this.backShow = true
                        this.frontShow = false
                    },2500) //定义3秒后执行 1秒显示 1秒退出 1秒展示
                    this.timer2 = setTimeout(()=>{
                        this.backShow = false
                        clearTimeout(this.timer1)
                    },5000)
                  }
              }
          } else if (this.starryCurrent === 4 ) {//前端的状态
              if(clickStar == 'design') {
                  if(this.clickTimes === 0) {//还没有点击过,这是第一次点击
                    this.clickTimes++
                    this.designText = '😳'
                    this.designWidth = '6ch'
                    this.designShow = true
                    this.timer1 = setTimeout(()=>{
                        this.frontText = '嘿嘿'
                        this.frontShow = true
                        this.designShow = false
                    },2500) //定义3秒后执行 1秒显示 1秒退出 1秒展示
                    this.timer2 = setTimeout(()=>{
                        this.frontShow = false
                        clearTimeout(this.timer1)
                    },5000)
                  } else if (this.clickTimes >= 1){ //已经点过至少一次了
                    this.designText = 'i了i了'
                    this.designWidth = '6ch'
                    this.designShow = true
                    this.timer1 = setTimeout(()=>{
                        this.frontText = '😭'
                        this.frontShow = true
                        this.designShow = false
                    },2500) //定义3秒后执行 1秒显示 1秒退出 1秒展示
                    this.timer2 = setTimeout(()=>{
                        this.frontShow = false
                        clearTimeout(this.timer1)
                    },5000)
                  }
              } else if (clickStar == 'back') {
                  if(this.clickTimes === 0) {//还没有点击过,这是第一次点击
                    this.clickTimes++
                    this.backText = '😲'
                    this.backShow = true
                    this.timer1 = setTimeout(()=>{
                        this.frontText = '嘿嘿'
                        this.frontShow = true
                        this.backShow = false
                    },2500) //定义3秒后执行 1秒显示 1秒退出 1秒展示
                    this.timer2 = setTimeout(()=>{
                        this.frontShow = false
                        clearTimeout(this.timer1)
                    },5000)
                  } else if (this.clickTimes >= 1){ //已经点过至少一次了
                    this.backText = 'i了i了'
                    this.backShow = true
                    this.timer1 = setTimeout(()=>{
                        this.frontText = '😭'
                        this.frontShow = true
                        this.backShow = false
                    },2500) //定义3秒后执行 1秒显示 1秒退出 1秒展示
                    this.timer2 = setTimeout(()=>{
                        this.frontShow = false
                        clearTimeout(this.timer1)
                    },5000)
                  }
              }
          } else if(this.starryCurrent >= 5) { //5状态及以后

          }
      },
      showTip () {
          if( this.starryCurrent === 2) {
            this.designText = 'Click me'
            this.designWidth = '10ch'
            this.designShow = true
            this.timer1 = setTimeout(()=>{
                this.designShow = false
                this.backText = '略略略略略😛'
                this.backShow = true
            },2000)
            this.timer2 = setTimeout(()=>{
                this.backShow = false
                this.frontText = '哼'
                this.frontShow = true
            },4000)
            this.timer1 = setTimeout(()=>{
                this.frontShow = false
            },5500)
          }
      }
  },
  mounted() {
  },
}
</script>

<style>
#stars .star{
    position: absolute;
}
.design-star {
    top: 47vw;
    left: 23vw;
}
.back-star {
    top: 87vw;
    left: 66vw;
}
.front-star {
    top: 103vw;
    left: 18vw;
}
.design-star img {
    width: 156px;
}

.back-star img {
    width: 122px;
}
.front-star img {
    width: 65px;
}
.star-light {
    animation: star-light 2s ease 0.5s infinite alternate;
}
@keyframes star-light {
    0% {
        -webkit-filter: drop-shadow(0 0 0.2px white) brightness(100%);
        filter: drop-shadow(0 0 0.2px white) brightness(100%);
    }
    25% {
        -webkit-filter: drop-shadow(0 0 0.5px white) brightness(102%);
        filter: drop-shadow(0 0 0.5px white) brightness(102%);
    }
    50% {
        -webkit-filter: drop-shadow(0 0 0.8px white) brightness(105%);
        filter: drop-shadow(0 0 0.8px white) brightness(105%);
    }
    75% {
        -webkit-filter: drop-shadow(0 0 0.5px white) brightness(102%);
        filter: drop-shadow(0 0 0.5px white) brightness(102%);
    }
    100% {
        -webkit-filter: drop-shadow(0 0 0.2px white) brightness(101%);
        filter: drop-shadow(0 0 0.2px white) brightness(101%);
    }
}
</style>
