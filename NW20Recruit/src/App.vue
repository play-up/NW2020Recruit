<template>
  <div id="app">
    <loading v-if="isLoading" />
    <h-screen v-if="isHscreen" />
    <transition name="router">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'

import Loading from 'components/common/Loading'
import HScreen from 'components/common/H-screen'


export default {
  name: 'App',
  components: {
    Loading,
    HScreen
  },
  data() {
    return {
      // isLoading: true,
      isHscreen: false
    }
  },
  watch: {
    $route: {
      handler (val,oldVal) {
        this.$nextTick(()=>{
            this.updateLoading({isLoading: false})
        })
      },
      deep: true
    }
  },
  computed: {
    ...mapState(['isLoading'])
  },
  methods: {
    ...mapMutations(['starryNext','updateLoading'])
  },
  mounted() {
    let that = this
    document.body.addEventListener('touchmove', function (e) {
      e.preventDefault(); 
    }, {passive: false});
    window.onload = () => {
      // this.isLoading = false
      this.starryNext()
    }
    
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
 function hengshuping() {
        if (window.orientation == 90 || window.orientation == -90) {
           //横屏
           
           that.isHscreen = true
        } 
        else {
            //竖屏
           that.isHscreen = false
          //  that.$router.go(0)
        }
    }
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
  font-size: 1vw;
}
#app {
  width: 100%;
  height: 100%;
  position: relative;
  background: black;
  user-select:none;
}
.router-enter {
  /* transform: translate3d(-100%,0,0); */
  opacity: 0
}
.router-leave-to {
  opacity: .1;
  /* transform: translate3d(100%,0,0); */
}
.router-leave,.router-enter-to {
  opacity: 1;
  /* transform: translate3d(0,0,0) scale(1); */
}
.router-enter-active, .router-leave-active {
  transition: opacity 3s ease;
  position: absolute !important;
}
</style>
