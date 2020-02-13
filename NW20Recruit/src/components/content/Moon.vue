<template>
  <div 
    id="moon-wrap" 
    :class="{'moon-wrap-down': drop==1,'moon-wrap-up': drop==2}"
    
  >
    <div class="moon-text" :class="{'text-show': drop == 1}">
        <p >Night’s Watch 工作室成立于2017年初，</p>
        <p >前身是协同工作室前端组，目前主要分为设</p>
        <p >计组、前端组和后台组，工作室专注设计并</p>
        <p >开发Web项目、移动端网页及小程序，注重</p>
        <p >开源交流，特色独立项目为女生节的许愿墙</p>
        <p >。我们注重培养多方面、多技能的人才，增</p>
        <p >加自身竞争力。毕业的师兄师姐大多就职于</p>
        <p >阿里、腾讯、网易、唯品会等一线互联网公</p>
        <p >司。现工作室处在快速成长的阶段，仍有许</p>
        <p >多项目正在设计和开发中。</p>
    </div>
    <div class="moon-box" ref="moonbox">
        <img src="~assets/moon.png" 
        alt="dawdawdw" 
        class="moon" 
        :class="{'moon-shine': starryCurrent!=0}"
        >
        <img src="~assets/line.png" alt="adawd" class="line-moon">
        <transition name="moon-notice-fade" >
            <span class="moon-notice" v-if="starryCurrent === 1">点击/下拉</span>
        </transition>
    </div>
  </div>
</template>

<script>

import { mapState,mapMutations } from 'vuex'

export default {
  name: 'Moon',
  data() {
      return {
          touchY: {},
          drop: 0
      }
  },
  computed: {
      ...mapState(['starryCurrent'])
  },
  methods: {
      ...mapMutations(['starryNext']),
    },
    mounted() {
        console.log(this.starryCurrent);
            let that = this
            this.$refs.moonbox.addEventListener('click',()=>{
                if(this.starryCurrent != 0) {
                    if(this.drop == 0) {
                            this.drop = 1
                        }else if (this.drop == 1) {
                            this.drop = 2
                            this.starryNext()
                        }else {
                            this.drop = 0
                    }
                }
            })
            this.$refs.moonbox.addEventListener('touchstart', evt=>{
                that.touchY.startY = evt.touches[0].clientY
                that.touchY.endY = 0
            })
            this.$refs.moonbox.addEventListener('touchmove', evt=>{
                that.touchY.endY = evt.touches[0].clientY
            })
            this.$refs.moonbox.addEventListener('touchend', evt=>{
                if(this.starryCurrent != 0) {
                    if(!that.touchY.endY ) {//Math.abs(that.touchY.startY-that.touchY.endY) < 10
                        return
                    }
                    if (that.touchY.startY < that.touchY.endY) {
                        if(this.drop == 0) {
                            this.drop = 1
                        }else if (this.drop == 1) {
                            this.drop = 2
                            this.starryNext()
                        }else {
                            this.drop = 0
                        }
                    }
                }
            })
        
    }
}
</script>

<style>
#moon-wrap {
    width: 100%;
    color: white;
    position: absolute;
    top: -680px;
    z-index: 10;
    /* animation: box 1s linear 0 infinite normal;    cubic-bezier(0.165, 0.84, 0.44, 1)*/
    transition: all 1s ease;
    /* transform: translate(0,0); */
}
.moon-wrap-down {
    transform: translate(0,683px); 
    /* animation:mymove 3s infinite; */
}
.moon-wrap-up {
    transform: translate(0,0); 
    /* animation:mymove 3s infinite; */
}
.moon-text {
    display: flex;
    align-content: center;
    justify-content: flex-start ;
    /* flex-direction: column; */
    flex-wrap: wrap;
    width: 600px;
    height: 680px;
    border-radius: 50% 50%;
    margin: 0 auto;
    background: rgb(110, 104, 110);
    font-size: 25px;
    line-height: 42px;
}
.moon-text p {
    padding-left:68px;
    color: transparent;
    -webkit-text-fill-color: transparent;/*制作流光文字要点：text-fill-color一般设置为transparent（透明色）*/
    background-image: linear-gradient(to left,rgb(158, 148, 158),rgb(236, 226, 236),white,white,rgb(110, 103, 110),rgb(110, 103, 110),rgb(110, 103, 110));
    -webkit-background-clip: text;   /*背景剪裁为文字，只将文字显示为背景*/
    background-clip: text;
    background-size: 300% 100%;    /*背景图片向水平方向扩大一倍，这样background-position才有移动与变化的空间*/
    transition: all 3s linear;
}
.moon-text p:nth-child(1) {
    transition-delay: 1.5s
}
.moon-text p:nth-child(2) {
    transition-delay: 4.5s
}
.moon-text p:nth-child(3) {
    transition-delay: 7.5s
}
.moon-text p:nth-child(4) {
    transition-delay: 10.5s
}
.moon-text p:nth-child(5) {
    transition-delay: 13.5s
}
.moon-text p:nth-child(6) {
    transition-delay: 16.5s
}
.moon-text p:nth-child(7) {
    transition-delay: 19.5s
}
.moon-text p:nth-child(8) {
    transition-delay: 21.5s
}
.moon-text p:nth-child(9) {
    transition-delay: 24.5s
}
.moon-text p:nth-child(10) {
    transition-delay: 27.5s
}
.text-show p{
    background-position: -73% 0;
}
.moon-box {
    width: 200px;
    height: 250px;
    position: relative;
    text-align: center;
    margin: 0 auto;
}
.line-moon {
    width: 10%;
    height: 80%;
    position: absolute;
}
.moon {
    width: 30%;
    position: absolute;
    left: 74px;
    bottom: 49px;
}
.moon-shine {
    animation:moonlight 1.5s infinite reverse;
}
.moon-notice {
    font-size: 20px;
    position: absolute;
    bottom: 48px;
    right: -40px;
}
.moon-notice-fade-enter,.moon-notice-fade-leave-to {
  opacity: 0;
}
.moon-notice-fade-leave,.moon-notice-fade-enter-to {
  opacity: 1;
}
.moon-notice-fade-enter-active,.moon-notice-fade-leave-active {
  transition: all 2s ease;
}
.text-bounce {
    animation: textbounce 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
}
/* .text-bounce:nth-child(1) {
    opacity: 0;
    animation-delay: 0s;
}
.text-bounce :nth-child(2) {
    animation-delay: 0.01s;
}
.text-bounce :nth-child(3) {
    animation-delay: 0.02s;
}
.text-bounce :nth-child(4) {
    animation-delay: 0.03s;
}
.text-bounce :nth-child(5) {
    animation-delay: 0.04s;
}
.text-bounce :nth-child(6) {
    animation-delay: 0.05s;
}
.text-bounce :nth-child(7) {
    animation-delay: 0.06s;
}
.text-bounce :nth-child(8) {
    animation-delay: 0.07s;
}

.text-bounce :nth-child(9) {
    animation-delay: 0.08s;
}
.text-bounce :nth-child(10) {
    animation-delay: 0.09s;
}
.text-bounce :nth-child(11) {
    animation-delay: 0.1s;
}
.text-bounce :nth-child(12) {
    animation-delay: 0.11s;
}
.text-bounce :nth-child(13) {
    animation-delay: 0.12s;
}
.text-bounce :nth-child(14) {
    animation-delay: 0.13s;
}
.text-bounce :nth-child(15) {
    animation-delay: 0.14s;
}
.text-bounce :nth-child(16) {
    animation-delay: 0.03s;
}
.text-bounce :nth-child(17) {
    animation-delay: 0.03s;
}
.text-bounce :nth-child(18) {
    animation-delay: 0.03s;
}
.text-bounce :nth-child(19) {
    animation-delay: 0.03s;
}
.text-bounce :nth-child(20) {
    animation-delay: 0.03s;
}
.text-bounce :nth-child(21) {
    animation-delay: 0.03s;
}
.text-bounce :nth-child(22) {
    animation-delay: 0.03s;
}
.text-bounce :nth-child(23) {
    animation-delay: 0.03s;
}
.text-bounce :nth-child(24) {
    animation-delay: 0.03s;
}
.text-bounce :nth-child() {
    animation-delay: 0.03s;
}
.text-bounce :nth-child(25) {
    animation-delay: 0.03s;
}
.text-bounce :nth-child(26) {
    animation-delay: 0.03s;
} */

@keyframes mymove {
    0% {
        transform: translate(0,0);
    }
    50% {
        transform: translate(0,0.5vw);
    }
    100% {
        transform: translate(0,0);
    }
}
@keyframes moonlight {
    0% {
        -webkit-filter: drop-shadow(0px 0px 0px white) brightness(100%); /* Chrome, Safari, Opera */
        filter: drop-shadow(0px 0px 1px white) brightness(120%);
    }
    25% {
        -webkit-filter: drop-shadow(1px 1px 3px white) brightness(140%); /* Chrome, Safari, Opera */
        filter: drop-shadow(0.5px 0.5px 2px white) brightness(140%);
    }
    75% {
        -webkit-filter: drop-shadow(2px 2px 5px white) brightness(160%); /* Chrome, Safari, Opera */
        filter: drop-shadow(0.5px 0.5px 2px white) brightness(140%);
    }
    100% {
        -webkit-filter: drop-shadow(2px 2px 5px white) brightness(160%); /* Chrome, Safari, Opera */
        filter: drop-shadow(0px 0px 1px white) brightness(120%);
    }
}
@keyframes textbounce {
    0% {
        transform: translateY(0)
    }
    50% {
        transform: translateY(0.6vw)
    }
    100% {
        transform: translateY(0)
    }
}
@keyframes textshow {
    0% {
        background-position: -300% 0;   /*background-position 属性设置背景图像的起始位置。*/
    }
    100% {
        background-position: 0 0;
    }
}
</style>
