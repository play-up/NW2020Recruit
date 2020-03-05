<template>
  <div id="app">
    <h-screen v-if="isHscreen" />
    <loading v-if="isLoading" />
    <transition name="router" v-show="phone">
      <router-view v-show="phone"/>
    </transition>
    <div class="cov" v-show="!phone">
      <img class="center qrcode" src="/static/img/qrcode.png">
      <p class="center">抱歉，当前不支持此设备查看网页<br/>请使用宽高比小于0.7的设备访问</p>
    </div>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'

import Loading from 'components/common/Loading'
import HScreen from 'components/common/H-screen'


export default {
  name: 'App',
  components: {
    Loading,
    HScreen
  },
  data() {
    return {
      // isLoading: true,
      isHscreen: false,
      phone: true
    }
  },
  // watch: {
  //   $route: {
  //     handler (val,oldVal) {
  //       this.$nextTick(()=>{
  //           this.updateLoading({isLoading: false})
  //       })
  //     },
  //     deep: true
  //   }
  // },
  computed: {
    ...mapState(['isLoading'])
  },
  methods: {
    ...mapMutations(['starryNext','updateLoading']),
    watchWH() {
      if(document.body.clientWidth/document.body.clientHeight > 0.7) {
          this.phone = false;
      } else {
        this.phone = true;
      }
      window.onresize = () => {
        console.log(document.body.clientWidth/document.body.clientHeight)
        if(document.body.clientWidth/document.body.clientHeight > 0.7) {
          this.phone = false;
        } else {
          this.phone = true;
        }
      } 
    }
  },
  mounted() {
    let that = this
    // 这里导致textarea不可以滑动。。。
    document.body.addEventListener('touchmove', function (e) {
      e.preventDefault(); 
    }, {passive: false});
    //监听window.onload加载
    window.onload = ()=>{
      let imgs = [
        "http://recruit.zqyy.site/design-star.png",
        "http://recruit.zqyy.site/front-star.png",
        "http://recruit.zqyy.site/back-star.png",
        "http://recruit.zqyy.site/single-starry.png",
        "http://recruit.zqyy.site/hill.png"
      ]
      let num = 0
      for( let img of imgs) {
        let image = new Image()
        image.src = img
        num++
        image.onload=()=>{
            if(that.starryCurrent == -1)that.starryNext()
        }
        image.onerror = () => {
          console.log('预加载失败');
        };
      }
      that.updateLoading({isLoading: false})
    }

    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
 function hengshuping() {
        if (window.orientation == 90 || window.orientation == -90) {
           //横屏
           
           that.isHscreen = true
        } 
        else {
            //竖屏
           that.isHscreen = false
           that.$router.go(0)
        }
    }
    this.watchWH();
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
  position: relative;
  background: black;
  user-select:none;
  /* pointer-events:none; */
}
.router-enter {
  /* transform: translate3d(-100%,0,0); */
  opacity: 0
}
.router-leave-to {
  opacity: .1;
  /* transform: translate3d(100%,0,0); */
}
.router-leave,.router-enter-to {
  opacity: 1;
  /* transform: translate3d(0,0,0) scale(1); */
}
.router-enter-active, .router-leave-active {
  transition: opacity 3s ease;
  position: absolute !important;
}
.cov {
  width: 100%;
  height: 100%;
  background-color: white;
  position: fixed;
  z-index: 300;
}
.center {
  position: relative;
  left: 0;
  right: 0;
  margin: auto;
}
.qrcode {
  display: block;
  width: 200px;
  height: 200px;
  margin-top: 20vh;
  background-color: black;
}
.cov p{
  text-align: center;
  margin-top: 20px;
}
</style>
