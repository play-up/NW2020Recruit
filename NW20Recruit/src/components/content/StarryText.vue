<template>
  <transition name="starry-text-fade">
    <div id="starry-text" v-if="StarryTextShow">
      <div class="text-box">
        <p class="starry-text1" :class="{'starry-text1-come': isCome}">
          <span>欢</span>
          <span>迎</span>
          <span>进</span>
          <span>入</span>
        </p>
        <p class="starry-text2" :class="{'starry-text2-drop': isDrop}">
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
        </p>
        <div class="typing-box">
          <p class="starry-text3" :class="{'starry-text3-typing': isTyping}" @click="drop" >
            <span>星</span>
            <span>系</span>
          </p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapMutations } from 'vuex'

import WelcomeSvg from 'components/common/WelcomeSvg'
import NwSvg from 'components/common/NwSvg'

export default {
  name: 'StarryText',
  components: {
    WelcomeSvg,
    NwSvg,
  },
  data() {
    return {
      StarryTextShow: true,
      isCome: false,
      isDrop: false,
      isTyping: false,
    }
  },
  methods: {
    ...mapMutations(['starryNext']),
    come() {
      console.log('aaaa');
      
      this.isCome = true
      console.log(this.isCome);
      
    },
        drop() {
      console.log('aaabbbba');
      
      this.isDrop = true      
    },

        typing() {
      console.log('aaabbbba');
      
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
    // this.letGo()
    // this.letGo().then(that=>{
    //       let drop = setTimeout(()=>{
    //         that.isDrop = true
    //         // clearTimeout(drop)
    //         return 2
    //       },1000)
    // }).then(result=>{
    //   console.log(result);
      
    //       let typing = setTimeout(()=>{
    //         that.isTyping = true
    //         clearTimeout(typing)
    //         return that
    //       },3200)
    // }).then(that=>{
    //       let nextCurrent = setTimeout(()=>{
    //         that.StarryTextShow = false
    //         that.starryNext()//进入下一个状态 
    //         clearTimeout(nextCurrent)
    //       },3000)
    // })
    let come = setTimeout(()=>{
      this.isCome = true
      clearTimeout(come)
    },30)
    let drop = setTimeout(()=>{
      this.isDrop = true
      clearTimeout(drop)
    },1000)
    let typing = setTimeout(()=>{
      this.isTyping = true
      clearTimeout(typing)
    },3200)
    let nextCurrent = setTimeout(()=>{
      this.StarryTextShow = false
      this.starryNext()//进入下一个状态 
      clearTimeout(nextCurrent)
    },7000)
  },
}
</script>

<style>
#starry-text {
    width: 100%;
    position: absolute;
    top: 550px;
    text-align: center;
}
#starry-text .text-box {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    font-size: 0;
    font-family: "Microsoft YaHei" sans-serif;
    font-weight: 400;
    color: #afaa95;
    transform: translateX(63px);
}
#starry-text .text-box p {
  overflow: hidden;
  white-space: nowrap;
}
#starry-text .text-box p span {
  display: inline-block;
  font-size: 34px;
  letter-spacing: 0.2vw;
}
#starry-text .text-box p .text-s {
  letter-spacing: 0.9vw;
}
/* 欢迎进入*/
.starry-text1 {
  width: 143px;
}
.starry-text1 span:nth-child(1) {
  transform: translateX(150px);
}
.starry-text1 span:nth-child(2) {
  transform: translateX(180px);
}
.starry-text1 span:nth-child(3) {
  transform: translateX(210px);
}
.starry-text1 span:nth-child(4) {
  transform: translateX(240px);
}
#starry-text .starry-text1-come span {/* 欢迎进入 优先级不够加了个id的 */
  transform: translateX(0px);
  transition: transform 1s ease;
}
/* Night's Watch */
.starry-text2 {
  width: 260px;
  margin-right: 7px;
  box-sizing: border-box;
}
.starry-text2 span {
  display:inline-block;
  transform: translateY(-48px);
  transition: transform 0.5s ease;
}
#starry-text .starry-text2-drop span {
  transform: translateY(0);
}
.starry-text2 span:nth-child(1) {
  transition-delay: 0s
}
.starry-text2 span:nth-child(2) {
  transition-delay: 0.1s
}
.starry-text2 span:nth-child(3) {
  transition-delay: 0.2s
}
.starry-text2 span:nth-child(4) {
  transition-delay: 0.3s
}
.starry-text2 span:nth-child(5) {
  transition-delay: 0.4s
}
.starry-text2 span:nth-child(6) {
  transition-delay: 0.5s
}
.starry-text2 span:nth-child(7) {
  transition-delay: 0.6s
}
.starry-text2 span:nth-child(8) {
  transition-delay: 0.7s
}
.starry-text2 span:nth-child(9) {
  transition-delay: 0.8s
}
.starry-text2 span:nth-child(10) {
  transition-delay: 0.9s
}
.starry-text2 span:nth-child(11) {
  transition-delay: 1s
}
.starry-text2 span:nth-child(12) {
  transition-delay: 1.1s
}
.starry-text2 span:nth-child(13) {
  transition-delay: 1.2s
}
/* 星球 */
.typing-box {
  position: relative;
  width: 68px;
}
.starry-text3 {
  position: absolute;
  left: 0;
  font-family: "Microsoft YaHei" sans-serif ;
  font-size: 0;
  animation: blink-caret .5s step-end infinite alternate;
}
.starry-text3 span{
  display: inline-block;
  /* width: 0;typing 2s steps(3,end) infinite, */
  width: 0;
  /* font-size: 34px; */
  transition: width 0.01s step-end;
}
.starry-text3 span:nth-child(1) {
  transition-delay: 1s;
}
.starry-text3 span:nth-child(2) {
  transition-delay: 2s;
}
.starry-text3-typing {
  border-right: 1.1px solid;
}
.starry-text3-typing span {
  width: 34px;
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
