<template>
  <div class="backend" ref="all">
    <div class="container">
      <div class="title">
        <transition-group name="titleAppear" @after-enter="afterEnter">
          <img
            class="titleImg1"
            src="http://recruit.zqyy.site/backend2.png"
            key="1"
            v-show="showTitle"
          />
          <img
            class="titleImg2"
            src="http://recruit.zqyy.site/backend1.png"
            key="2"
            v-show="showTitle"
          />
        </transition-group>
      </div>
      <div class="planet">
        <planet></planet>
      </div>
      <div id="content" v-show="showContent">
        <p
          v-for="(letter, index) in letters_content"
          :class="{'letters_content_1': index % 2 == 0,'letters_content_2': index % 2 != 0}"
          :style="`animation-delay:${index * 0.05}s`"
          :key="index"
        >{{letter}}</p>
      </div>
    </div>
    <div class="next" v-show="showIcon" @click="toNextPage">
      <img src="http://recruit.zqyy.site/frontend_next.png" @click="toStarryHome" />
    </div>
  </div>
</template>

<script>
import Planet from "@/components/content/Planet";
import store from "@/store";
import { mapState, mapMutations } from "vuex";

export default {
  name: "Backend",
  components: {
    Planet
  },
  data() {
    return {
      content:
        "后台组致力于使用java语言，专注于主流先进框架的学习与应用。致力于Web后端API开发。Java就是轮子多，在这里我们将要掌握多种“轮子”的使用方法，提高代码性能，搭建更加合理的架构。同时我们也会学习如何与服务器交互。",
      letters_title: [],
      letters_content: [],
      showTitle: false,
      showContent: false,
      showIcon: false
    };
  },
  computed: {
    ...mapState(["starryCurrent", "isPass"])
  },
  methods: {
    ...mapMutations(["starryNext"]),
    splitTexts(value) {
      return value.split("");
    },
    afterEnter() {
      setTimeout(() => {
        this.showContent = true;
      }, 500);
      setTimeout(() => {
        this.showIcon = true;
      }, 6000);
    },
    toStarryHome() {
      console.log(this.starryCurrent);
      // this.$store.commit("isSubmitShow", true);
      // this.$store.commit("isBlingShow", false);
      // this.$store.commit("isLetterShow", false);
      if (this.starryCurrent === 2) {
        this.starryNext();
        console.log(this.starryCurrent);
      }
    },
    toNextPage() {
      if(this.isPass==false){
      this.$store.commit("isSubmitShow", true);
      // this.$store.commit("isBlingShow", false);
      this.$store.commit("isLetterShow", false);
      }else{
         this.$store.commit("isSubmitShow", false);
      // this.$store.commit("isBlingShow", false);
      this.$store.commit("isLetterShow", true);
      }
      this.$router.replace("/");
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
            this.$store.commit("isSubmitShow", false);
      this.$store.commit("isLetterShow", true);
          } else {
            this.$router.replace("/frontend");
          }
        } else if (end < start && this.showIcon == true) {
          this.$router.replace("/");
        }
      });
    }
  },
  mounted() {
    this.goBack();
    this.letters_content = this.splitTexts(this.content);
    this.showTitle = !this.showTitle;
    let imgs = [
      "http://recruit.zqyy.site/postcard.png",
      "http://recruit.zqyy.site/cancelBg.png",
      "http://recruit.zqyy.site/code.png",
      "http://recruit.zqyy.site/post-pic.jpg",
      "http://recruit.zqyy.site/submit.png",
      "http://recruit.zqyy.site/nw2020.png"
    ];
    for (let img of imgs) {
      let image = new Image();
      image.src = img;
      image.onload = () => {
        console.log("预加载了");
      };
      image.onerror = () => {
        console.log("预加载失败");
      };
      for (let img of imgs) {
        let image = new Image();
        image.src = img;
        image.onload = () => {
          console.log("预加载了");
        };
        image.onerror = () => {
          console.log("预加载失败");
        };
      }
    }
  }
};
</script>

<style scoped>
.backend {
  height: 100%;
  width: 100%;
  background-image: url(http://recruit.zqyy.site/backend.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
}
.container {
  position: relative;
  top: 9%;
  transform: translateY(50%);
}
.title {
  position: absolute;
  top: 205px;
  left: 60px;
}
.title img {
  height: 96px;
}
.planet {
  position: absolute;
  right: 14px;
}
#content {
  width: 485px;
  font-size: 30px;
  font-family: "微软雅黑";
  color: white;
  line-height: 50px;
  position: absolute;
  top: 480px;
  right: 60px;
}
.letters_content_1 {
  display: inline-block;
  animation: landInTop_content 0.5s ease-out both;
}
.letters_content_2 {
  display: inline-block;
  animation: landInBottom_content 0.5s ease-out both;
}
@keyframes landInTop_content {
  from {
    opacity: 0;
    transform: translateX(80%) translateY(-40%);
  }

  to {
    opacity: 1;
    transform: translateX(0) translateY(0);
  }
}
@keyframes landInBottom_content {
  from {
    opacity: 0;
    transform: translateX(80%) translateY(40%);
  }

  to {
    opacity: 1;
    transform: translateX(0) translateY(0);
  }
}
.titleImg1 {
  animation: landInTop_title 1s ease-out both;
}
.titleImg2 {
  animation: landInBottom_title 1s ease-out both;
}
@keyframes landInTop_title {
  from {
    opacity: 0;
    transform: translateX(-200%) translateY(-100%);
  }

  to {
    opacity: 1;
    transform: translateX(0) translateY(0);
  }
}
@keyframes landInBottom_title {
  from {
    opacity: 0;
    transform: translateX(200%) translateY(100%);
  }

  to {
    opacity: 1;
    transform: translateX(0) translateY(0);
  }
}
.next {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  animation: float 1s linear infinite;
}
.next img {
  width: 48px;
}
@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(3px);
  }
  100% {
    transform: translateY(0);
  }
}
@media screen and (min-aspect-ratio: 375/667) and (max-aspect-ratio: 375/358) {
  #content {
    top: 49vw;
  }
  .title {
    top: 20vw;
  }
  .planet {
    top: -5vw;
  }
}
</style>
