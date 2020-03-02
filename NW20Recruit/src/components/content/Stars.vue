<template>
  <div id="stars">
      <div class="design-star star" @click="starClick()">
          <!-- <tip-r 
          :text="designText"  
          :tipWidth="designWidth"
          v-show="designShow"
          /> -->
          <transition name="next-text">
              <p 
              class="next-status-text"
              v-if="starryCurrent === 2"
              >前往下一站</p>
          </transition>
          <img src="~assets/design-star.png" 
          alt="" 
          :class="{'star-light': starryCurrent === 2}"
          >
          <div :class="{'bling1 ':chooseNum==1&&isBlingShow}" ></div>
      </div>
      <div class="back-star star">
          <!-- <tip-r 
          :text="backText" 
          starTip="back-star-tip"
          tipShowWay="back-show"
          tipWidth="9ch"
          v-show="backShow" /> -->
          <img src="~assets/back-star.png" 
          alt="" >
          <div :class="{'bling2 ':chooseNum==2&&isBlingShow}"></div>
      </div>
      <div class="front-star star">
          <!-- <tip-r 
          :text="frontText" 
          starTip="front-star-tip" 
          tipShowWay="front-show"
          tipWidth="6ch"
          v-show="frontShow"
          /> -->
          <img src="~assets/front-star.png" 
          alt="" >
          <div :class="{'bling3 ':chooseNum==3&&isBlingShow}"></div>
      </div>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'

// import TipR from 'components/common/TipR'
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
      ...mapState(['starryCurrent','chooseNum','isBlingShow'])
  },
  watch: {
  },
  methods: {
      ...mapMutations(['starryNext']),
      starClick () {
          console.log(this.starryCurrent);
        this.$router.replace('/design')
      }
  },
}
</script>

<style>
#stars .star{
    position: absolute;
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
  transition: all 2s ease 2;
}
@keyframes text-beat {
    0% {
        transform:  rotate(0deg)
    }
    10% {
        transform:  rotate(1deg)
    }
    20% {
        transform:  rotate(-1deg)
    }
    30% {
        transform:  rotate(1deg)
    }
    40% {
        transform:  rotate(-1deg)
    }
    50% {
        transform:  rotate(0deg)
    }
    100% {
        transform:  rotate(0deg)
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
