<template>
  <div id="starry-home">
    <loading v-if="isLoading" />
    <img src="http://recruit.zqyy.site/hill.png" alt="hill" class="hill" />
    <!-- 信封 -->
    <img
      src="http://recruit.zqyy.site/letter.png"
      alt
      class="letter"
      v-if="isLetterShow"
      @click="showPostCard"
      @click.stop
    />
    <moon @moonEvent="moonEv" />
    <transition name="moon-shadow">
      <div class="moon-down-shadow" v-show="ShadowShow"></div>
    </transition>
    <stars />
    <starry-text />
    <submit v-show="isSubmitShow"></submit>
  </div>
</template>

<script>
import Loading from 'components/common/Loading'
import Moon from 'components/content/Moon'
import Stars from 'components/content/Stars'
import StarryText from 'components/content/StarryText3'
import submit from './submit'
import store from '@/store'
import { mapState,mapMutations } from 'vuex'

export default {
  name: "StarryHome",
  components: {
    Moon,
    Stars,
    StarryText,
    submit,
    Loading
  },
  data() {
    return {
      ShadowShow: false,
      isLoading: true
    };
  },
  methods: {
    ...mapMutations(["starryNext","updateLoading"]),
    moonEv(state) {
      if (state === 0) {
        this.ShadowShow = true;
      } else if (state === 1) {
        this.ShadowShow = false;
      }
    },
    showPostCard() {
      this.$store.commit("isPostShow", true);
      this.$store.commit("isSubmitShow", true);
      this.$store.commit("isLetterShow", false);
      this.$store.commit("isBlingShow", false);
       setTimeout(()=>{
        this.$store.commit('isRoll',1)
      },1000)
    }
  },

  computed: {
    ...mapState(["isSubmitShow", "isLetterShow","starryCurrent"])
  },
  mounted() {
    
    let that = this 
    that.updateLoading({isLoading: true})
    let imgs = [
      "http://recruit.zqyy.site/design-star.png",
      "http://recruit.zqyy.site/front-star.png",
      "http://recruit.zqyy.site/back-star.png",
      "http://recruit.zqyy.site/single-starry.png",
      "http://recruit.zqyy.site/hill.png",
      "http://recruit.zqyy.site/d_background.png",
      "http://recruit.zqyy.site/bat1.png",
      "http://recruit.zqyy.site/bat2.png",
      "http://recruit.zqyy.site/castle.png",
      "http://recruit.zqyy.site/test-ball.png"
    ]
    let num = 0
    for( let img of imgs) {
      let image = new Image()
      image.src = img
      num++
      image.onload=()=>{
          if(that.starryCurrent == -1)that.starryNext()
          that.isLoading = false
      }
      image.onerror = () => {
        console.log('预加载失败');
      };
    }
  },
}
</script>

<style scoped>
.letter {
  position: absolute;
  width: 10vw;
  color: white;
  bottom: 39vw;
  left: 56vw;
  transform: rotate(-10deg);
  animation: letter-light 2.5s 1s ease infinite alternate,letter-opacity 1s forwards;

}
#starry-home {
  width: 100%;
  height: 100%;
  background: url("http://recruit.zqyy.site/single-starry.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.hill {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  pointer-events: none;
  /* 使得信封可以被穿透点击 */
}
.moon-down-shadow {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  background: rgba(20, 19, 28, 0.68);
}
@keyframes letter-light {
  0% {
    filter: drop-shadow(0px 0px 1px white) brightness(110%);
  }
  50% {
    filter: drop-shadow(0 0 4px white) brightness(120%);
  }
  100% {
    filter: drop-shadow(0px 0px 1px white) brightness(110%);
  }
}
@keyframes letter-opacity{
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
.moon-shadow-enter,
.moon-shadow-leave-to {
  opacity: 0;
}
.moon-shadow-leave,
.moon-shadow-enter-to {
  opacity: 1;
}
.moon-shadow-enter-active,
.moon-shadow-leave-active {
  transition: all 2s ease;
}
</style>
