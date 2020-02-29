<template>
  <div id="submitPage">
    <card></card>
  </div>
</template>

<script>
import moonStar from 'components/content/moonStar'
import StrarryHome from './StarryHome'
import card from 'components/content/card'
export default {
  name:'submit',
  components:{
    moonStar,
    card,
    StrarryHome
  },
  data(){
    return{
    }
  },
  mounted(){
     document.getElementsByTagName("body")[0].style.height = window.innerHeight+'px';

  }


}
</script>

<style>
#submitPage {
  width: 100%;
  /* height: 100%; */
  min-height:100%;
  /* background: url("~assets/starry-back.png") no-repeat; */
  /* background-size: 100% 100%; */
  position: absolute;
  z-index: 11;
  letter-spacing: 0.5px
}
</style>