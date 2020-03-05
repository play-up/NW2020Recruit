<template>
  <transition name="starry-text-fade">
    <div id="starry-text" v-if="StarryTextShow && starryCurrent===0 && !isSubmitShow"><!--  -->
      <div class="text-box">
        <p class="starry-text1">
          <span>欢</span>
          <span>迎</span>
          <span>进</span>
          <span>入</span>
          <span>N</span>
          <span>i</span>
          <span>g</span>
          <span>h</span>
          <span>t</span>
          <span>'</span>
          <span>&ensp;</span>
          <span class="text-s">s</span>
          <span>W</span>
          <span>a</span>
          <span>t</span>
          <span>c</span>
          <span>h</span>
          <span>星</span>
          <span>系</span>
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapMutations,mapState } from 'vuex'

export default {
  name: 'StarryText',
  data() {
    return {
      StarryTextShow: true,
      isCome: false,
      isDrop: false,
      isTyping: false,
    }
  },
  computed: {
    ...mapState(['starryCurrent','isSubmitShow']),
  },
  watch: {
    starryCurrent (val) {
      if(val==0) {
        let come = setTimeout(()=>{
          this.isCome = true
          clearTimeout(come)
        },30)
        let TextNone = setTimeout(()=>{
          this.StarryTextShow = false
          clearTimeout(TextNone)
        },1500)
        let nextCurrent = setTimeout(()=>{
          this.starryNext()//进入下一个状态 
          clearTimeout(nextCurrent)
        },3000)
      }
    }
  },
  methods: {
    ...mapMutations(['starryNext']),
    come() {
      
      this.isCome = true
      console.log(this.isCome);
      
    },
  },
  mounted() {
  },
}
</script>

<style>
#starry-text {
    width: 100%;
    position: absolute;
    top: 52%;
    transform: translateY(-120px);
}
#starry-text .text-box {
    font-size: 0;
    font-family: "Microsoft YaHei" sans-serif;
    color: #ffffff;
    
}
#starry-text .text-box p {
  overflow: hidden;
  white-space: nowrap;
  font-size: 0;
  margin: 0 auto;
}
#starry-text .text-box p span {
  display: inline-block;
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 0.2vw;
  text-shadow: 1px 0px 1.5px wheat;
}
#starry-text .text-box p .text-s {
  letter-spacing: 0.9vw;
}
/* 欢迎进入NW星球*/
.starry-text1 {
  width: 418px;
}

/* 整个组件淡入淡出 */
.starry-text-fade-enter,.starry-text-fade-leave-to {
  opacity: 0;
}
.starry-text-fade-leave,.starry-text-fade-enter-to {
  opacity: 1;
}
.starry-text-fade-enter-active {
  transition: all 2s ease;
}

.starry-text-fade-leave-active {
  transition: all 2s ease;
}
</style>
