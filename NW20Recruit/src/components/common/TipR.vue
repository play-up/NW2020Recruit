<template>
  <transition :name="tipShowWay">
    <div class="tip-box" 
    :class="[starTip]" 
    :style="`width: ${tipWidth}`"
    >
      <span class="tip-text">{{text}}</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'TipR',
  props: {
      text: {
        type: String,
        default: 'Click me'
      },
      borderColor: {
        type: String,
        default: 'rgb(228, 159, 171)'
      },
      starTip: {
        type: String,
        default: 'design-star-tip'
      },
      tipShowWay: {
        type: String,
        default: 'design-show'
      },
      tipWidth: String
  },
  data() {
    return {
      show: true
    }
  },
  methods: {
    //文字对话的,先放这里,因为不用了
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
                        this.backText = '略略略略略😜'
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
                this.backText = '先点我,先点我'
                this.backShow = true
            },1800)
            this.timer2 = setTimeout(()=>{
                this.backShow = false
                this.frontText = '.....'
                this.frontShow = true
            },3600)
            this.timer1 = setTimeout(()=>{
                this.frontShow = false
            },5000)
          }
      }
  },
}
</script>

<style scoped>
  
.tip-box {
  text-align: center;
  font-size: 14px;
  /* word-wrap: break-word; */
  /* line-height: 100%; */
  background: white;
  border-radius: 10px;
  position: absolute;
}
.tip-text {
  display: inline-block;
  padding: 8px 8px;
  position: relative;
  border-bottom: 1px solid white;
  border-top: none;
  border-radius: 13px;
  z-index: 2;
}

/* 设计 */ 

.design-star-tip{
  width: 10ch;
  top: -70px;
  right: 75px;
  border: 2px solid rgb(228, 159, 171);
  transform: rotateZ(-20deg);
  transform-origin: center 70px;
  animation: jump-design 1s ease infinite 1s;
}
.design-star-tip::before {
  content: '';
  width: 20px;
  height: 20px;
  background: white;
  position: absolute;
  transform: rotateZ(45deg)skew(30deg,30deg);
  bottom: -12px;
  left: 43%;
  border-right: 2px solid ;
  border-bottom: 2px solid ;
  border-color: rgb(228, 159, 171);
}

/* 后台 */

.back-star-tip {
  width: 9ch;
  top: -73px;
  right: -15px;
  border: 2px solid rgb(71, 217, 230);
  transform: rotateZ(30deg);
  transform-origin: center 112px;
  animation: swing-back 1s ease infinite 1s;
}
.back-star-tip::before {
  content: '';
  width: 20px;
  height: 20px;
  background: white;
  position: absolute;
  transform: rotateZ(45deg)skew(30deg,30deg);
  bottom: -12px;
  left: 43%;
  border-right: 2px solid ;
  border-bottom: 2px solid ;
  border-color: rgb(71, 217, 230);
}

/* 前端 */
.front-star-tip {
  width: 6ch;
  top: -53px;
  right: 40px;
  border: 2px solid rgb(225, 168, 113);
  transform: rotateZ(-30deg);
  transform-origin: center 52px;
  animation: scale-front infinite 1s ease 1s;
}
.front-star-tip::before {
  content: '';
  width: 20px;
  height: 20px;
  background: white;
  position: absolute;
  transform: rotateZ(45deg)skew(30deg,30deg);
  bottom: -12px;
  left: 43%;
  border-right: 2px solid ;
  border-bottom: 2px solid ;
  border-color: rgb(225, 168, 113);
}

/* 整个组件*/
/* 设计*/
.design-show-enter,.design-show-leave-to {
  opacity: 0;
  transform: scale(0)rotateZ(-20deg);
}
.design-show-enter-to,.design-show-leave {
  opacity: 1;
  transform: scale(1)rotateZ(-20deg);
}
.design-show-enter-active,.design-show-leave-active {
  transition: opacity 0.5s ease 0.2s,
            transform 0.5s ease 0.2s,
}
/* 后台 */
.back-show-enter,.back-show-leave-to {
  opacity: 0;
  transform: rotateZ(90deg);
}
.back-show-enter-to,.back-show-leave {
  opacity: 1;
  transform: rotateZ(30deg);
}
.back-show-enter-active,.back-show-leave-active {
  transition: opacity 0.5s ease 0.2s,
            transform 0.5s ease 0.2s,
}
/* 前端 */
.front-show-enter,.front-show-leave-to {
  transform: rotateZ(-30deg)rotateY(90deg);
}
.front-show-enter-to,.front-show-leave {
  transform: rotateZ(-30deg)rotateY(0);
}
.front-show-enter-active,.front-show-leave-active {
  transition: transform 0.5s ease 0.2s;
}
@keyframes scale-front {
  0% {
    transform: scale(1)rotateZ(-30deg);
  }
  25% {
    transform: scale(0.9)rotateZ(-30deg);
  }
  50% {
    transform: scale(1)rotateZ(-30deg);
  }
  75% {
    transform: scale(0.9)rotateZ(-30deg);
  }
  100% {
    transform: scale(1)rotateZ(-30deg);
  }
}
@keyframes swing-back {
  0% {
    transform: rotateZ(30deg);
  }
  25% {
    transform: rotateZ(28deg);
  }
  50% {
    transform: rotateZ(30deg);
  }
  75% {
    transform: rotateZ(32deg);
  }
  100% {
    transform: rotateZ(30deg);
  }
}
@keyframes jump-design {
  0% {
    transform: translate(0px,0px)rotateZ(-20deg);
  }
  25% {
    transform: translate(-1px,-3px)rotateZ(-20deg);
  }
  50% {
    transform: translate(0px,0px)rotateZ(-20deg);
  }
  75% {
    transform: translate(-1px,-3px)rotateZ(-20deg);
  }
  100% {
    transform: translate(0px,0px)rotateZ(-20deg);
  }
}
</style>
