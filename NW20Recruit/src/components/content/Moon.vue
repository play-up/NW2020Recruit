<template>
  <div 
    id="moon-wrap" 
    :class="{'moon-wrap-down': drop==1,'moon-wrap-up': drop==0}"
    
  >
    <div class="moon-text" :class="{'text-show': drop == 1,'text-none':drop ==2}">
        <div class="run-around-wrap"><run-around :startRun="startRun" /></div>
        <div>
            <p >Night’s Watch 工作室成立于2017年初，前身是</p>
            <p >协同工作室前端组，目前主要分为设计组、前端组</p>
            <p >和后台组，工作室专注设计并开发Web项目、移动</p>
            <p >端网页及小程序，注重开源交流，特色独立项目为</p>
            <p >女生节的许愿墙。我们注重培养多方面、多技能的</p>
            <p >人才，增加自身竞争力。毕业的师兄师姐大多就职</p>
            <p >于阿里、腾讯、网易、唯品会等一线互联网公司。</p>
            <p >现工作室处在快速成长的阶段，仍有许多项目正在</p>
            <p >设计和开发中。</p>            
        </div>
    </div>
    <div class="moon-box" ref="moonbox">
        <img src="~assets/moon.png" 
        alt="dawdawdw" 
        class="moon" 
        :class="{'moon-shine': starryCurrent == 1 || drop == 1}"
        >
        <img src="~assets/line.png" alt="adawd" class="line-moon">
        <transition name="moon-notice-fade" >
            <span class="moon-notice" v-if="starryCurrent === 1&& drop==0">点击/下拉</span>
            <span class="moon-notice" v-if="starryCurrent === 1 && drop==1">点击/上拉</span>
        </transition>
    </div>
    
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'

import RunAround from '../common/RunAround'

export default {
  name: 'Moon',
  components: {
      RunAround,
  },
  data() {
      return {
          touchY: {},
          drop: 0,
          startRun: false
      }
  },
  computed: {
      ...mapState(['starryCurrent'])
  },
  watch: {
      drop (val) {
          let timer
          if(val == 0) {
             timer = setTimeout(()=>{
                  this.startRun = false
              },1000)
          }else if (val === 1) {
              clearTimeout(timer)
                this.startRun = true
          }
      }
  },
  methods: {
      ...mapMutations(['starryNext']),
    },
    mounted() {
        console.log(this.starryCurrent);
            let that = this
            this.$refs.moonbox.addEventListener('click',()=>{
                if(this.starryCurrent != 0) {
                    if(this.drop == 0) { //下拉
                            this.$emit('moonEvent',0)
                            this.drop = 1
                        }else if (this.drop == 1) { //上移
                            this.$emit('moonEvent',1)
                            this.drop = 0
                            if(this.starryCurrent === 1) {
                                this.starryNext()
                            }
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
                        if(this.drop == 0) {//下拉
                            this.$emit('moonEvent',0)
                            this.drop = 1
                        }
                    }
                    if(that.touchY.startY > that.touchY.endY) {
                        if (this.drop == 1) {//上移
                            this.$emit('moonEvent',1)
                            this.drop = 0
                            if(this.starryCurrent === 1) {
                                this.starryNext()
                            }
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
    top: -740px;
    z-index: 10;
    /* animation: box 1s linear 0 infinite normal;    cubic-bezier(0.165, 0.84, 0.44, 1)*/
    transition: transform 1s ease;
    /* transform: translate(0,0); */
}
.moon-wrap-down {
    transform: translate(0,810px); 
    /* animation:mymove 3s infinite; */
}
.moon-wrap-up {
    transform: translate(0,0); 
    /* animation:mymove 3s infinite; */
}
.moon-text {
    display: flex;
    /* align-content: center; */
    justify-content: center ;
    align-items: center;
    /* flex-direction: column; */
    /* flex-wrap: wrap; */
    flex-flow: column wrap;
    width: 720px;
    height: 720px;
    /* border-radius: 50% 50%; */
    /* padding-top: 10px; */
    margin: 0 auto;
    /* background: rgb(110, 104, 110); */
    background: url("~assets/moon-text-back.png") no-repeat ;
    background-size: cover;
    background-position: center center;
    font-size: 22px;
    font-weight: 550;
    line-height: 42px;
    position: relative;
    z-index: 10;
}
.run-around-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: inherit;
    height: inherit;
    position: absolute;
    top: 0;
}
.moon-text p {
    /* padding-left:68px; */
    color: transparent;
    -webkit-text-fill-color: transparent;/*制作流光文字要点：text-fill-color一般设置为transparent（透明色）*/
    background-image: linear-gradient(to left,rgb(158, 148, 158),rgb(236, 226, 236),white,white,rgb(110, 103, 110),rgb(110, 103, 110),rgb(110, 103, 110));
    -webkit-background-clip: text;   /*背景剪裁为文字，只将文字显示为背景*/
    background-clip: text;
    background-size: 300% 100%;    /*背景图片向水平方向扩大一倍，这样background-position才有移动与变化的空间*/
    transition: all 0s linear;
}
.moon-text p:nth-child(1) {
    transition-delay: 0.5s
}
.text-show p:nth-child(2) {
    transition-delay: 1.5s
}
.text-show p:nth-child(3) {
    transition-delay: 2.5s
}
.text-show p:nth-child(4) {
    transition-delay: 3.5s
}
.text-show p:nth-child(5) {
    transition-delay: 4.5s
}
.text-show p:nth-child(6) {
    transition-delay: 5.5s
}
.text-show p:nth-child(7) {
    transition-delay: 6.5s
}
.text-show p:nth-child(8) {
    transition-delay: 7.5s
}
.text-show p:nth-child(9) {
    transition-delay: 8.5s
}
.text-show p:nth-child(10) {
    transition-delay: 9.5s
}
.text-show p{
    will-change: background;
    transition: all 1s linear;
    background-position: -73% 0;
}
.text-none p {
    transition: all 0.5s linear;
    background-position: 0% 0;
}
.moon-box {
    width: 200px;
    height: 250px;
    position: relative;
    text-align: center;
    margin: 0 auto;
    background: transparent;
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
    animation:moonlight 2s infinite reverse;
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

@keyframes moonlight {
    0% {
        -webkit-filter: drop-shadow(0px 0px 1px white) brightness(100%); /* Chrome, Safari, Opera */
        filter: drop-shadow(0px 0px 1px white) brightness(120%);
    }
    25% {
        -webkit-filter: drop-shadow(0.2px 0.2px 1px white) brightness(130%); /* Chrome, Safari, Opera */
        filter: drop-shadow(0.2px 0.2px 1px white) brightness(130%);
    }
    50% {
        -webkit-filter: drop-shadow(0.4px 0.4px 2px white) brightness(140%); /* Chrome, Safari, Opera */
        filter: drop-shadow(0.4px 0.4px 2px white) brightness(140%);
    }   
    75% {
        -webkit-filter: drop-shadow(0.2px 0.2px 1px white) brightness(130%); /* Chrome, Safari, Opera */
        filter: drop-shadow(0.2px 0.2px 1px white) brightness(130%);
    }
    100% {
        -webkit-filter: drop-shadow(0px 0px 1px white) brightness(120%); /* Chrome, Safari, Opera */
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
