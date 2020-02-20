<template>
  <div class="backend">
    <div class="title" ref="title">后台</div>
    <div class="planet">
      <planet></planet>
    </div>
    <transition name="fade">
      <div id="content">
        <p
          class="letter"
          v-for="(letter, index) in letters"
          :style="`animation-delay:${index * 0.05}s`"
          :key="index"
        >{{letter}}</p>
      </div>
    </transition>
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
      content:
        "后台组致力于使用java语言，专注于主流先进框架的学习与应用。致力于Web后端API开发。Java就是轮子多，在这里我们将要掌握多种“轮子”的使用方法，提高代码性能，搭建更加合理的架构。同时我们也会学习如何与服务器交互。",
      letters: []
    };
  },
  methods: {
    splitTexts() {
      this.letters = this.content.split("");
    }
  },
  mounted() {
    this.splitTexts();
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
.title {
  font-size: 96px;
  font-family: "微软雅黑";
  color: white;
  position: absolute;
  top: 326px;
  left: 60px;
}
.planet {
  position: absolute;
  top: 121px;
  right: 14px;
}
#content {
  width: 485px;
  font-size: 30px;
  font-family: "微软雅黑";
  color: white;
  line-height: 50px;
  position: absolute;
  top: 600px;
  right: 30px;
}
.letter {
  display: inline-block;
  animation: landIn 0.5s ease-out both;
}
@keyframes landIn {
  from {
    opacity: 0;
    transform: translateX(80%) translateY(-40%);
  }

  to {
    opacity: 1;
    transform: translateX(0) translateY(0);
  }
}
</style>
