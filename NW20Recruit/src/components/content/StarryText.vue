<template>
  <transition name="starry-text-fade">
    <div id="starry-text" v-if="StarryTextShow" >
        <p>
            <welcome-svg />
          <!-- <span class="starry-text2">Night’ sWatch</span> -->
          <span>
            <nw-svg />
          </span>
          <span class="starry-text3">星系</span>
        </p>
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
      StarryTextShow: true
    }
  },
  methods: {
    ...mapMutations(['starryNext']),

  },
  mounted() {
    setTimeout(()=>{
      this.StarryTextShow = false
      this.starryNext()//进入下一个状态 
      
      
    },4000)
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
#starry-text p {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    font-size: 34px;
    font-family: monospace;
    color: #afaa95;
    padding-left: 63px;
}
#starry-text p span {
  overflow: hidden;
  /* border-right: .08em solid; */
  white-space: nowrap;
}
/* .starry-text1 {
  width: 8ch;
  animation: typing 2s steps(4,end) 2s,
            blink-caret 1s step-end infinite alternate;
}
.starry-text2 {
  width: 14ch;
    animation: typing 8s steps(14,end) 4s ,
            blink-caret .5s step-end infinite alternate;
} */
.starry-text3 {
  width: 6ch;
    animation: typing 2s steps(3,end) 13s,
            blink-caret .5s step-end infinite alternate;
}
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
