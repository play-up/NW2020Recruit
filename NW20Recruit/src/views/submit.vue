<template>
  <div id="submitPage"> 
    <moon-star></moon-star>
    <card></card>
  </div>
</template>

<script>
import moonStar from 'components/content/moonStar'
import card from 'components/content/card'
export default {
  name:'submit',
  components:{
    moonStar,
    card
  }
}
</script>

<style>
#submitPage {
  width: 100%;
  height: 100%;
  background: url('~assets/starry-back.png') no-repeat;
  /* background-size: cover; */
  background-size:100% 100%; 
  position: relative;
}
</style>