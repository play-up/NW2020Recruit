<template>
  <div id="submitPage" >
    <card></card>
    <div v-show="isFilterShow" class="filter"></div>
  </div>
</template>

<script>
import moonStar from 'components/content/moonStar'
import StrarryHome from './StarryHome'
import card from 'components/content/card'
import { mapState,mapMutations } from 'vuex'

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
  computed:{
    ...mapState(['isFilterShow'])
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
.filter{
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
}
</style>