<template>
  <transition name="starry-text-fade">
    <div id="starry-text" v-if="StarryTextShow && starryCurrent!=-1"><!--  -->
      <div class="text-box">
        <p class="starry-text1" :class="{'starry-text1-come': isCome}">
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
    ...mapState(['starryCurrent']),
  },
  watch: {
    starryCurrent (val) {
      console.log(val)
      if(val==0) {
        let come = setTimeout(()=>{
          this.isCome = true
          clearTimeout(come)
        },30)
        let nextCurrent = setTimeout(()=>{
          this.StarryTextShow = false
          this.starryNext()//进入下一个状态 
          clearTimeout(nextCurrent)
        },2000)
      }
    }
  },
  methods: {
    ...mapMutations(['starryNext']),
    come() {
      
      this.isCome = true
      console.log(this.isCome);
      
    },
        drop() {
      
      this.isDrop = true      
    },

        typing() {
      
      this.isTyping = true      
    },
    letGo() {
      let that = this
      
      let gogogo = function () {
        return new Promise((resolve,reject) => {
            let come = setTimeout(()=>{
              that.isCome = true
              resolve(that)
              clearTimeout(come)
            },30)
        })
      }
      gogogo().then(()=>{
            let drop = setTimeout(()=>{
              that.isDrop = true
              // clearTimeout(drop)
              return
            },1000)
      }).then(()=>{
            let typing = setTimeout(()=>{
              that.isTyping = true
              clearTimeout(typing)
              return
            },3200)
      }).then(()=>{
            let nextCurrent = setTimeout(()=>{
              that.StarryTextShow = false
              that.starryNext()//进入下一个状态 
              clearTimeout(nextCurrent)
            },3000)
      })
    }
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
  text-shadow: 1px 0px 2px wheat;
}
#starry-text .text-box p .text-s {
  letter-spacing: 0.9vw;
}
/* 欢迎进入NW星球*/
.starry-text1 {
  width: 411px;
}
.starry-text1 span:nth-child(1) {
  transform: translateX(420px);
}
.starry-text1 span:nth-child(2) {
  transform: translateX(450px);
}
.starry-text1 span:nth-child(3) {
  transform: translateX(480px);
}
.starry-text1 span:nth-child(4) {
  transform: translateX(510px);
}
.starry-text1 span:nth-child(5) {
  transform: translateX(540px);
}
.starry-text1 span:nth-child(6) {
  transform: translateX(570px);
}
.starry-text1 span:nth-child(7) {
  transform: translateX(600px);
}
.starry-text1 span:nth-child(8) {
  transform: translateX(630px);
}
.starry-text1 span:nth-child(9) {
  transform: translateX(670px);
}
.starry-text1 span:nth-child(10) {
  transform: translateX(700px);
}
.starry-text1 span:nth-child(11) {
  transform: translateX(730px);
}
.starry-text1 span:nth-child(12) {
  transform: translateX(760px);
}
.starry-text1 span:nth-child(13) {
  transform: translateX(790px);
}
.starry-text1 span:nth-child(14) {
  transform: translateX(820px);
}
.starry-text1 span:nth-child(15) {
  transform: translateX(850px);
}
.starry-text1 span:nth-child(16) {
  transform: translateX(880px);
}
.starry-text1 span:nth-child(17) {
  transform: translateX(910px);
}
.starry-text1 span:nth-child(18) {
  transform: translateX(940px);
}
.starry-text1 span:nth-child(19) {
  transform: translateX(970px);
}
.starry-text1 span:nth-child(20) {
  transform: translateX(1000px);
}
#starry-text .starry-text1-come span {/* 欢迎进入 优先级不够加了个id的 */
  transform: translateX(0px);
  transition: transform 1s ease;
}

/* 整个组件淡入淡出 */
.starry-text-fade-enter,.starry-text-fade-leave-to {
  opacity: 0;
}
.starry-text-fade-leave,.starry-text-fade-enter-to {
  opacity: 1;
}
.starry-text-fade-enter-active,.starry-text-fade-leave-active {
  transition: all 2s ease;
}

    /* .fade-enter, .fade-leave-to {
      opacity: 0
    }
    .fade-leave, .fade-enter-to {
      opacity: 1
    }
    .fade-enter-active, .fade-leave-active {
      transition: all .2s
    } */
@keyframes typing {
  from {
    width: 0;
  }
  to {}
}
@keyframes blink-caret {
  50% {
    border-color: transparent;
  }
}
</style>
