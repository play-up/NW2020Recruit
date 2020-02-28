<template>
  <div id="starry-home">
    <moon v-if="true" 
    @moonEvent = "moonEv"
    />
    <transition name="moon-shadow">
      <div class="moon-down-shadow" 
      v-show="ShadowShow"
      ></div>
    </transition>
    <stars />
    <starry-text  />
  </div>
</template>

<script>
import Moon from 'components/content/Moon'
import Stars from 'components/content/Stars'
import StarryText from 'components/content/StarryText'
export default {
  name: 'StarryHome',
  components: {
    Moon,
    Stars,
    StarryText,
  },
  data() {
    return {
    ShadowShow: false
    }
  },
  methods: {
    moonEv (state) {
      if(state === 0) {
        this.ShadowShow = true
      } else if (state === 1) {
        this.ShadowShow = false
      }
    }
  },
  mounted() {

  },
}
</script>

<style scoped>
#starry-home {
  width: 100%;
  height: 100%;
  background: url('~assets/starry-back.png') no-repeat;
  background-size: 100% 100%;
  position: relative;
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
