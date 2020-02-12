<template>
  <div id="starry-home">
    <moon />
    <div class="moon-down-shadow" v-show="false"></div>
    <stars />
    <starry-text />
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
  mounted() {
console.log('aaaaaa');

  },
}
</script>

<style>
#starry-home {
  width: 100%;
  height: 100%;
  background: url('~assets/starry-back.png') no-repeat;
  background-size: cover;
  position: relative;
}
.moon-down-shadow {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background: rgba(20, 19, 28, .68);
}
</style>
