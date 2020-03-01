<template>
  <div id="app">
    <loading v-if="isLoading" />
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Loading from 'components/common/Loading'

export default {
  name: 'App',
  components: {
    Loading
  },
  computed: {
    ...mapState(['isLoading'])
  },
  mounted() {
    document.body.addEventListener('touchmove', function (e) {
      e.preventDefault(); 
    }, {passive: false});
    
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
}
</style>
