<template>
  <div class="frontend" ref="all">
    <div class="steamBox">
      <steam class="steam"></steam>
    </div>
    <div class="title title1" v-if="showTitle">
      <img src="http://recruit.zqyy.site/frontend2.png" />
      <img src="http://recruit.zqyy.site/frontend1.png" />
    </div>
    <div class="title title2" v-if="showTitle">
      <img src="http://recruit.zqyy.site/frontend2.png" />
      <img src="http://recruit.zqyy.site/frontend1.png" />
    </div>
    <div class="title title3" v-if="showTitle">
      <img src="http://recruit.zqyy.site/frontend2.png" />
      <img src="http://recruit.zqyy.site/frontend1.png" />
    </div>
    <div class="title title4" v-if="showTitle">
      <img src="http://recruit.zqyy.site/frontend2.png" />
      <img src="http://recruit.zqyy.site/frontend1.png" />
    </div>
    <div class="title title5" v-if="showTitle">
      <img src="http://recruit.zqyy.site/frontend2.png" />
      <img src="http://recruit.zqyy.site/frontend1.png" />
    </div>
    <div class="title title6" v-if="showTitle">
      <img src="http://recruit.zqyy.site/frontend2.png" />
      <img src="http://recruit.zqyy.site/frontend1.png" />
    </div>
    <div class="title title7" v-if="showTitle">
      <img src="http://recruit.zqyy.site/frontend2.png" />
      <img src="http://recruit.zqyy.site/frontend1.png" />
    </div>
    <div class="title title8" v-if="showTitle">
      <img src="http://recruit.zqyy.site/frontend2.png" />
      <img src="http://recruit.zqyy.site/frontend1.png" />
    </div>
    <div class="title title9" v-if="showTitle">
      <img src="http://recruit.zqyy.site/frontend2.png" />
      <img src="http://recruit.zqyy.site/frontend1.png" />
    </div>
    <div class="title title10" v-if="showTitle">
      <img src="http://recruit.zqyy.site/frontend2.png" />
      <img src="http://recruit.zqyy.site/frontend1.png" />
    </div>
    <div class="title completeTitle" v-if="showCompleteTitle">
      <img src="http://recruit.zqyy.site/frontend2.png" />
      <img src="http://recruit.zqyy.site/frontend1.png" />
    </div>
    <div class="contentBox">
      <div class="content" v-if="showContent">
        <!-- <p
        v-for="(letter, index) in content"
        class="letter"
        :style="`animation-delay:${index * 0.05}s`"
        :key="index"
        >{{letter}}</p>-->
        <p v-for="(letter, index) in content1" class="letter" :key="index">{{letter}}</p>
      </div>
      <div class="content" v-if="showContent">
        <!-- <p
        v-for="(letter, index) in content"
        class="letter"
        :style="`animation-delay:${index * 0.05}s`"
        :key="index"
        >{{letter}}</p>-->
        <p v-for="(letter, index) in content2" class="letter" :key="index">{{letter}}</p>
      </div>
    </div>
    <div class="next" @click="toNextPage" v-show="showIcon">
      <img src="http://recruit.zqyy.site/frontend_next.png" />
    </div>
  </div>
</template>

<script>
import Steam from "@/components/content/Steam";
import { mapState } from "vuex";
export default {
  name: "Frontend",
  components: {
    Steam
  },
  data() {
    return {
      content1:
        "前端开发者基于 CSS 、 HTML 、 JavaScript 三件套，使用 Vue 等框架开发各种各样的网页。前端一直在发展,我们一直在进步。",
      content2:
        "我们并不局限于前端，还要学会利用 Node.js 进行后台开发，利用 node express 实现高并发 http 中间件,最终走向全栈。",
      showTitle: false,
      showCompleteTitle: false,
      showContent: false,
      showIcon: false
    };
  },
  computed: {
    ...mapState(["isPass"])
  },
  methods: {
    async loadImg() {
      let imgs = [
        "http://recruit.zqyy.site/backend.png",
        "http://recruit.zqyy.site/bigPlanet.png",
        "http://recruit.zqyy.site/backend1.png",
        "http://recruit.zqyy.site/backend2.png",
        "http://recruit.zqyy.site/frontend_next.png"
      ];
      for (let img of imgs) {
        let image = new Image();
        image.src = img;
        image.onload = () => {};
      }
    },
    toNextPage() {
      if (this.isPass == true) {
        this.$router.replace("/");
      } else {
        this.$router.replace("/backend");
      }
    },
    goBack() {
      let start, end;
      this.$refs.all.addEventListener("touchstart", evt => {
        start = evt.touches[0].clientY;
      });
      this.$refs.all.addEventListener("touchmove", evt => {
        end = evt.touches[0].clientY;
      });
      this.$refs.all.addEventListener("touchend", evt => {
        // 上滑减小，下滑增加
        if (end > start && this.showIcon == true) {
          if (this.isPass == true) {
            this.$router.replace("/");
          } else {
            this.$router.replace("/design");
          }
        } else if (end < start && this.showIcon == true) {
          if (this.isPass == true) {
            this.$router.replace("/");
          } else {
            this.$router.replace("/backend");
          }
        }
      });
    }
  },
  mounted() {
    this.goBack();
    this.loadImg();
    setTimeout(() => {
      this.showTitle = true;
    }, 2000);
    setTimeout(() => {
      this.showCompleteTitle = true;
    }, 4600);
    setTimeout(() => {
      this.showContent = true;
      // setTimeout(() => {
      //   this.showIcon = true;
      // }, 7500);
      setTimeout(() => {
        this.showIcon = true;
      }, 1000);
    }, 4000);
  }
};
</script>

<style scoped>
.frontend {
  height: 100%;
  width: 100%;
  background-image: url(http://recruit.zqyy.site/frontend.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
}
.frontend img {
  pointer-events: none;
}
.frontend .next img {
  pointer-events: auto;
}
.steamBox {
  height: 70%;
  width: 100%;
  position: absolute;
  bottom: 34.5%;
  right: 28%;
  overflow: hidden;
  animation: steamFade 1s linear backwards;
  animation-delay: 1s;
  z-index: 0;
}
.steam {
  height: 540px;
  width: 370px;
  position: absolute;
  bottom: 0;
  right: 0;
}
@keyframes steamFade {
  from {
    height: 0;
  }
  to {
    height: 30%;
  }
}
.title {
  position: absolute;
  top: 23%;
  right: 100px;
  z-index: 1;
}
.completeTitle {
  opacity: 0.8;
}
/* cubic-bezier(0.36, 0.1, 0.16, 1) */
.title1 {
  clip-path: polygon(0 0, 25% 0, 12.5% 50%, 0 50%);
  animation: title1_animate 2s cubic-bezier(0.36, 0.1, 0.16, 1) forwards;
}
.title2 {
  clip-path: polygon(12.5% 50%, 0 50%, 0 100%);
  animation: title2_animate 2s cubic-bezier(0.36, 0.1, 0.16, 1) forwards;
}
.title3 {
  clip-path: polygon(25% 0, 50% 0, 37.5% 50%, 12.5% 50%);
  animation: title3_animate 2s cubic-bezier(0.36, 0.1, 0.16, 1) forwards;
}
.title4 {
  clip-path: polygon(37.5% 50%, 12.5% 50%, 0 100%, 25% 100%);
  animation: title4_animate 2s cubic-bezier(0.36, 0.1, 0.16, 1) forwards;
}
.title5 {
  clip-path: polygon(50% 0, 37.5% 50%, 62.5% 50%, 75% 0);
  animation: title5_animate 2s cubic-bezier(0.36, 0.1, 0.16, 1) forwards;
}
.title6 {
  clip-path: polygon(37.5% 50%, 62.5% 50%, 50% 100%, 25% 100%);
  animation: title6_animate 2s cubic-bezier(0.36, 0.1, 0.16, 1) forwards;
}
.title7 {
  clip-path: polygon(75% 0, 100% 0, 87.5% 50%, 62.5% 50%);
  animation: title7_animate 2s cubic-bezier(0.36, 0.1, 0.16, 1) forwards;
}
.title8 {
  clip-path: polygon(87.5% 50%, 62.5% 50%, 50% 100%, 75% 100%);
  animation: title8_animate 2s cubic-bezier(0.36, 0.1, 0.16, 1) forwards;
}
.title9 {
  clip-path: polygon(100% 0, 100% 50%, 87.5% 50%);
  animation: title9_animate 2s cubic-bezier(0.36, 0.1, 0.16, 1) forwards;
}
.title10 {
  clip-path: polygon(100% 50%, 87.5% 50%, 75% 100%, 100% 100%);
  animation: title10_animate 2s cubic-bezier(0.36, 0.1, 0.16, 1) forwards;
}
@keyframes title1_animate {
  0% {
    opacity: 0;
    transform: rotateX(-130deg) rotateY(-115deg) rotateZ(27deg)
      translateZ(331px);
  }
  10% {
    opacity: 0;
    transform: rotateX(-130deg) rotateY(-115deg) rotateZ(27deg)
      translateZ(331px);
  }
  90% {
    opacity: 1;
    transform: rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
  }
  100% {
    opacity: 1;
    transform: rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
  }
}
@keyframes title2_animate {
  0% {
    opacity: 0;
    transform: rotateX(291deg) rotateY(-371deg) rotateZ(473deg)
      translateZ(-43px);
  }
  10% {
    opacity: 0;
    transform: rotateX(291deg) rotateY(-371deg) rotateZ(473deg)
      translateZ(-43px);
  }
  90% {
    opacity: 1;
    transform: rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
  }
  100% {
    opacity: 1;
    transform: rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
  }
}
@keyframes title3_animate {
  0% {
    opacity: 0;
    transform: rotateX(132deg) rotateY(-304deg) rotateZ(181deg)
      translateZ(-1268px);
  }
  10% {
    opacity: 0;
    transform: rotateX(132deg) rotateY(-304deg) rotateZ(181deg)
      translateZ(-1268px);
  }
  90% {
    opacity: 1;
    transform: rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
  }
  100% {
    opacity: 1;
    transform: rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
  }
}
@keyframes title4_animate {
  0% {
    opacity: 0;
    transform: rotateX(233deg) rotateY(-182deg) rotateZ(-368deg)
      translateZ(88px);
  }
  10% {
    opacity: 0;
    transform: rotateX(233deg) rotateY(-182deg) rotateZ(-368deg)
      translateZ(88px);
  }
  90% {
    opacity: 1;
    transform: rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
  }
  100% {
    opacity: 1;
    transform: rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
  }
}
@keyframes title5_animate {
  0% {
    opacity: 0;
    transform: rotateX(72deg) rotateY(263deg) rotateZ(222deg)
      translateZ(-2301px);
  }
  10% {
    opacity: 0;
    transform: rotateX(72deg) rotateY(263deg) rotateZ(222deg)
      translateZ(-2301px);
  }
  90% {
    opacity: 1;
    transform: rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
  }
  100% {
    opacity: 1;
    transform: rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
  }
}
@keyframes title6_animate {
  0% {
    opacity: 0;
    transform: rotateX(-314deg) rotateY(9deg) rotateZ(488deg)
      translateZ(-1831px);
  }
  10% {
    opacity: 0;
    transform: rotateX(-314deg) rotateY(9deg) rotateZ(488deg)
      translateZ(-1831px);
  }
  90% {
    opacity: 1;
    transform: rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
  }
  100% {
    opacity: 1;
    transform: rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
  }
}
@keyframes title7_animate {
  0% {
    opacity: 0;
    transform: rotateX(-402deg) rotateY(-479deg) rotateZ(-370deg)
      translateZ(-1587px);
  }
  10% {
    opacity: 0;
    transform: rotateX(-402deg) rotateY(-479deg) rotateZ(-370deg)
      translateZ(-1587px);
  }
  90% {
    opacity: 1;
    transform: rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
  }
  100% {
    opacity: 1;
    transform: rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
  }
}
@keyframes title8_animate {
  0% {
    opacity: 0;
    transform: rotateX(311deg) rotateY(-218deg) rotateZ(97deg) translateZ(127px);
  }
  10% {
    opacity: 0;
    transform: rotateX(311deg) rotateY(-218deg) rotateZ(97deg) translateZ(127px);
  }
  90% {
    opacity: 1;
    transform: rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
  }
  100% {
    opacity: 1;
    transform: rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
  }
}
@keyframes title9_animate {
  0% {
    opacity: 0;
    transform: rotateX(249deg) rotateY(-60deg) rotateZ(-100deg)
      translateZ(307px);
  }
  10% {
    opacity: 0;
    transform: rotateX(249deg) rotateY(-60deg) rotateZ(-100deg)
      translateZ(307px);
  }
  90% {
    opacity: 1;
    transform: rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
  }
  100% {
    opacity: 1;
    transform: rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
  }
}
@keyframes title10_animate {
  0% {
    opacity: 0;
    transform: rotateX(30deg) rotateY(29deg) rotateZ(134deg) translateZ(-1405px);
  }
  10% {
    opacity: 0;
    transform: rotateX(30deg) rotateY(29deg) rotateZ(134deg) translateZ(-1405px);
  }
  90% {
    opacity: 1;
    transform: rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
  }
  100% {
    opacity: 1;
    transform: rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
  }
}
.title img {
  height: 96px;
  margin-right: 18px;
}
.contentBox {
  position: absolute;
  top: 40%;
  margin: 0 60px;
  z-index: 1;
}
.content {
  font-size: 30px;
  font-family: "微软雅黑";
  color: white;
  line-height: 50px;
  margin-bottom: 20px;
}
.letter {
  display: inline-block;
  min-width: 5px;
  animation: letterFade 2s linear both;
}
/* @keyframes letterFade {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
    transform: translate3d(0, -10px, 0);
  }
  25% {
    opacity: 1;
    transform: translate3d(0, -10px, 0);
  }
  30% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
} */
@keyframes letterFade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.next {
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  animation: float 1s linear infinite, fade 1s linear;
}
.next img {
  width: 48px;
}
@keyframes float {
  0% {
    transform: translateY(0) translateX(-50%);
  }
  50% {
    transform: translateY(3px) translateX(-50%);
  }
  100% {
    transform: translateY(0) translateX(-50%);
  }
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@media screen and (min-aspect-ratio: 375/666) and (max-aspect-ratio: 375/358) {
  .contentBox {
    top: 34%;
  }
  .title {
    top: 20%;
  }
}
</style>