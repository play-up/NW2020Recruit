<template>
  <div id="stars">
      <div class="design-star star">
          <!-- <tip-r 
          :text="designText"  
          :tipWidth="designWidth"
          v-show="designShow"
          /> -->
          <img src="~assets/design-star.png" 
          alt="" 
          :class="{'star-light': starryCurrent === 2}"
          @click="starClick()">
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
  },
  methods: {
      ...mapMutations(['starryNext']),
      starClick () {
          console.log(this.starryCurrent);
          
      }
  },
}
</script>

<style>
#stars .star{
    position: absolute;
}
.design-star {
    top: 50%;
    left: 23vw;
    transform: translateY(-303px);
}
.back-star {
    top: 50%;
    left: 66vw;
    transform: translateY(-30px);

}
.front-star {
    top: 50%;
    left: 18vw;
    transform: translateY(100px);
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
