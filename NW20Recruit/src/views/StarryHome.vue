<template>
  <div id="starry-home">
    <img src="~assets/hill.png" alt="hill" class="hill">
    <loading v-if="loadingShow"/>
    <moon v-if="true" 
    @moonEvent = "moonEv"
    />
    <transition name="moon-shadow">
      <div class="moon-down-shadow" 
      v-show="ShadowShow"
      ></div>
    </transition>
    <stars />
    <starry-text v-if="true" />
    <submit v-show="isSubmitShow"></submit>
    <!-- 模拟取消后信封出现在首页 -->
    <div class="letter" v-if="isLetterShow" @click="showPostCard" @click.stop>这是信封</div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import Loading from 'components/common/Loading'
import Moon from 'components/content/Moon'
import Stars from 'components/content/Stars'
import StarryText from 'components/content/StarryText'
import submit from './submit'
import store from '@/store'
import { mapState,mapMutations } from 'vuex'

export default {
  name: 'StarryHome',
  components: {
    Moon,
    Stars,
    StarryText,
    submit,
    Loading,
  },
  data() {
    return {
    ShadowShow: false,
    loadingShow: true,
    }
  },
  methods: {
    ...mapMutations(['starryNext']),
    moonEv (state) {
      if(state === 0) {
        this.ShadowShow = true
      } else if (state === 1) {
        this.ShadowShow = false
      }
    },
    ...mapMutations({
      
    }),
    showPostCard(){
      //  console.log(this.isPostShow);
       this.$store.commit('isPostShow',true)
       this.$store.commit('isSubmitShow',true)
       this.$store.commit('isLetterShow',false)
       console.log('点击了');
       
    }
  },
  
  computed: {
      ...mapState(['isSubmitShow','isLetterShow'])
  },
  mounted() {
    window.onload = () => {
      this.loadingShow = false
      this.starryNext()
    }
  },
}
</script>

<style scoped>
.letter{
  position: absolute;
  width: 20vw;
  height: 10vw;
  color:white;
  bottom: 0
}
#starry-home {
  width: 100%;
  height: 100%;
  background: url('~assets/single-starry.png') no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.hill {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}
.moon-down-shadow {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background: rgba(20, 19, 28, .68);
}
.moon-shadow-enter,.moon-shadow-leave-to {
  opacity: 0;
}
.moon-shadow-leave,.moon-shadow-enter-to {
  opacity: 1;
}
.moon-shadow-enter-active,.moon-shadow-leave-active {
  transition: all 2s ease;
}
</style>
