<template>
  <div id="stars">
      <div class="design-star star" @click="starClick(1)">
          <!-- <tip-r 
          :text="designText"  
          :tipWidth="designWidth"
          v-show="designShow"
          /> -->
          <transition name="next-text" >
              <p 
              class="next-status-text"
              v-if="starryCurrent === 2 && !isLetterShow"
              >前往第一站</p>
          </transition>
            <p class="can-click can-click-design" v-if="isLetterShow">可以</p>
          <img src="http://recruit.zqyy.site/design-star.png" 
          alt="" 
          :class="{'star-light': starryCurrent === 2}"
          >
          <div :class="{'bling1 ':chooseNum==1&&isBlingShow}" ></div>
      </div>
      <div class="back-star star" @click="starClick(2)">
          <!-- <tip-r 
          :text="backText" 
          starTip="back-star-tip"
          tipShowWay="back-show"
          tipWidth="9ch"
          v-show="backShow" /> -->
              <p class="can-click can-click-back" v-if="isLetterShow">点击</p>
          <img src="http://recruit.zqyy.site/back-star.png" 
          alt="" >
          <div :class="{'bling2 ':chooseNum==2&&isBlingShow}"></div>
      </div>
      <div class="front-star star"  @click="starClick(3)">
          <!-- <tip-r 
          :text="frontText" 
          starTip="front-star-tip" 
          tipShowWay="front-show"
          tipWidth="6ch"
          v-show="frontShow"
          /> -->
              <p class="can-click can-click-front" v-if="isLetterShow">我们</p>
          <img src="http://recruit.zqyy.site/front-star.png" 
          alt="" >
          <div :class="{'bling3 ':chooseNum==3&&isBlingShow}"></div>
      </div>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'

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
  computed: {
      ...mapState(['starryCurrent','chooseNum','isBlingShow','isPass','isLetterShow'])
  },
  watch: {
  },
  methods: {
      ...mapMutations(['starryNext']),
      starClick (star) {
          
          if(star == 1) {
            if(this.starryCurrent == 2) {
                this.starryNext()
            }
            if(this.starryCurrent >= 2 || this.isLetterShow) {
                this.$router.replace('/design')
            }
          } else if ( star == 2) {
              if(this.isLetterShow == true) {
                this.$router.replace("/backend");
              }
          } else if (star == 3) {
            if(this.isLetterShow == true) {
                this.$router.replace("/frontend");
            }
          }

      }
  },
}
</script>

<style>
#stars .star{
    position: absolute;
    z-index: 2;
}
.design-star {
    /* top: 50%;
    transform: translateY(-303px); */
    left: 23vw;
    top: 28%;
}
.next-status-text {
    font-size: 20px;
    color: white;
    white-space: nowrap;
    position: absolute;
    top: -20px;
    left: 60px;
    /* transform-origin: left; */
    animation: text-beat 2s linear 2s infinite reverse;
}
.next-text-enter,.next-text-leave-to {
  opacity: 0;
}
.next-text-leave,.next-text-enter-to {
  opacity: 1;
}
.next-text-enter-active,.next-text-leave-active {
  transition: all 2s ease .5s;
}
@keyframes text-beat {
    0% {
        transform:  rotate(0deg)
    }
    10% {
        transform:  rotate(2deg)
    }
    20% {
        transform:  rotate(-2deg)
    }
    30% {
        transform:  rotate(2deg)
    }
    40% {
        transform:  rotate(-2deg)
    }
    50% {
        transform:  rotate(0deg)
    }
    100% {
        transform:  rotate(0deg)
    }
}
/* 星球点击 */
.can-click {
    color: #ffffff;
    white-space: nowrap;
    text-shadow: .5px 0px .5px wheat;
    position: absolute;
    z-index: -1;
}
.can-click-design {
    font-size: 23px;
    top: -28px;
    left: -18px;
    animation: star-text-jump 2s ease 3s infinite reverse;
}
.can-click-back {
    font-size: 20px;
    top: -28px;
    left: 18px;
    animation: star-text-jump 1.5s ease 2s infinite reverse;
}
.can-click-front {
    font-size: 15px;
    top: -25px;
    left: -28px;
    animation: star-text-jump 1s ease 1s infinite reverse;
}
@keyframes star-text-jump {
    0% {
        transform: translateY(0px)
    }
    25% {
        transform: translateY(-1px)
    }
    50% {
        transform: translateY(1px)
    }
    75% {
        transform: translateY(-0.5px)
    }
    100% {
        transform: translateY(0px)
    }
}

.back-star {
    /* top: 50%;
    transform: translateY(-30px); */
    left: 66vw;
    top: 47.5%
}
.front-star {
    /* top: 50%;
    transform: translateY(100px); */
    left: 18vw;
    top: 57.5%;
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
.bling1,
.bling2,
.bling3 {
  background-image: url("~assets/shine.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  width: 5vw;
  height: 7vw;
  right: 0.5vw;
  top: 5.067vw;
  position: absolute;
  animation: opacity-change 1s ease-in-out forwards;
}
@keyframes opacity-change {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.bling2 {
  width: 4vw;
  height: 6vw;
  right: 1.5vw;
  top: 2vw;
}
.bling3 {
  width: 3vw;
  height: 4vw;
  right: 0vw;
  top: 1vw;
}
@keyframes star-light {
    0% {
        -webkit-filter: drop-shadow(0 0 0.1px white) brightness(100%);
        filter: drop-shadow(0 0 0.1px white) brightness(100%);
    }
    25% {
        -webkit-filter: drop-shadow(0 0 0.7px white) brightness(102%);
        filter: drop-shadow(0 0 0.7px white) brightness(102%);
    }
    50% {
        -webkit-filter: drop-shadow(0 0 1.5px white) brightness(103%);
        filter: drop-shadow(0 0 1.5px white) brightness(103%);
    }
    75% {
        -webkit-filter: drop-shadow(0 0 0.7px white) brightness(102%);
        filter: drop-shadow(0 0 0.7px white) brightness(102%);
    }
    100% {
        -webkit-filter: drop-shadow(0 0 0.1px white) brightness(101%);
        filter: drop-shadow(0 0 0.1px white) brightness(101%);
    }
}
</style>
