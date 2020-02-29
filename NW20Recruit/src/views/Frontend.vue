<template>
  <div class="frontend">
    <div class="steamBox">
      <steam class="steam"></steam>
    </div>
    <div class="title" v-if="showText">
      <img src="~assets/frontend2.png" />
      <img src="~assets/frontend1.png" />
    </div>
    <div class="content" v-if="showText">{{content}}</div>
    <div class="mask"></div>
  </div>
</template>

<script>
import Steam from "@/components/content/Steam";
export default {
  name: "Frontend",
  components: {
    Steam
  },
  data() {
    return {
      content:
        "驱动器的前端驱动器的前端驱动器的前端驱动器的前端驱动器的前端驱动器的前端驱动器的前端驱动器的前端我好饿啊我好饿啊我好饿啊我好饿啊我好饿啊我好饿啊我好饿啊我好饿啊我好饿啊",
      showText: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.showText = true;
    }, 5000);
  }
};
</script>

<style scoped>
.frontend {
  height: 100%;
  width: 100%;
  background-image: url("~assets/frontend.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
}
.steamBox {
  height: 70%;
  width: 100%;
  position: absolute;
  bottom: 34.5%;
  right: 28%;
  overflow: hidden;
  animation: steamFade 2s linear backwards;
  animation-delay: 1s;
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
  top: 20%;
  right: 100px;
}
.title img {
  height: 96px;
}
.content {
  font-size: 40px;
  font-family: "微软雅黑";
  color: white;
  line-height: 50px;
  position: absolute;
  top: 40%;
  margin: 0 60px;
}
.mask {
  height: 100%;
  width: 100%;
  background: #00000055;
  position: fixed;
  animation: maskFade 1s linear both;
  animation-delay: 4s;
}
@keyframes maskFade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>