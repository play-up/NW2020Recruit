<template>
  <div class="backend">
    <div class="container">
      <div class="title">
        <p
          v-for="(letter, index) in letters_title"
          :class="{'letters_title_1': index % 2 == 0,'letters_title_2': index % 2 != 0}"
          :style="`animation-delay:${index * 0.05}s`"
          :key="index"
        >{{letter}}</p>
      </div>
      <div class="planet">
        <planet></planet>
      </div>
      <div id="content">
        <p
          v-for="(letter, index) in letters_content"
          :class="{'letters_content_1': index % 2 == 0,'letters_content_2': index % 2 != 0}"
          :style="`animation-delay:${index * 0.05 + 1.5}s`"
          :key="index"
        >{{letter}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Planet from "@/components/content/Planet";
export default {
  name: "Backend",
  components: {
    Planet
  },
  data() {
    return {
      title: "后台",
      content:
        "后台组致力于使用java语言，专注于主流先进框架的学习与应用。致力于Web后端API开发。Java就是轮子多，在这里我们将要掌握多种“轮子”的使用方法，提高代码性能，搭建更加合理的架构。同时我们也会学习如何与服务器交互。",
      letters_title: [],
      letters_content: []
    };
  },
  methods: {
    splitTexts(value) {
      return value.split("");
    }
  },
  mounted() {
    this.letters_title = this.splitTexts(this.title);
    this.letters_content = this.splitTexts(this.content);
  }
};
</script>

<style scoped>
.backend {
  height: 100%;
  width: 100%;
  background-image: url("~assets/backend.png");
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
  font-size: 96px;
  font-family: "微软雅黑";
  color: white;
  position: absolute;
  /* top: 326px; */
  top: 205px;
  left: 60px;
}
.planet {
  position: absolute;
  /* top: 121px; */
  right: 14px;
}
#content {
  width: 485px;
  font-size: 30px;
  font-family: "微软雅黑";
  color: white;
  line-height: 50px;
  position: absolute;
  /* top: 600px; */
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
.letters_title_1 {
  display: inline-block;
  animation: landInTop_title 1s ease-out both;
}
.letters_title_2 {
  display: inline-block;
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
</style>
