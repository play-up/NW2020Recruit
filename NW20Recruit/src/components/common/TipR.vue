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
  mounted() {
    setTimeout(()=>{
      this.show = false
    },2000)
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
