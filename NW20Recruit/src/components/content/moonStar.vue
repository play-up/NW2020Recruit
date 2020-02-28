<template>
  <div class="container">
    <div class="moon_box">
      <img src="~assets/moon.png" class="moon" />
      <img src="~assets/line.png" class="line_moon" />
    </div>
    <!-- 星球分布 -->
    <div id="stars">
      <div class="design_star star">
        <div :class="{'bling1 ':isBling==1}"></div>
        <!-- <div class="bling1"></div> -->
        <img src="~assets/design-star.png" />
      </div>
      <div class="back_star star">
        <div :class="{'bling2 ':isBling==2}"></div>
        <!-- <div class="bling2"></div> -->
        <img src="~assets/back-star.png" />
      </div>
      <div class="front_star star">
        <div :class="{'bling3 ':isBling==3}"></div>
        <!-- <div class="bling3"></div> -->
        <img src="~assets/front-star.png" />
      </div>
    </div>
    <!-- <div class="filter"></div> -->
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "moonStar",
  data() {
    return {
      // isBling:0
    };
  },
  computed: {
    isBling() {
      return this.$store.state.chooseNum;
    }
  }
};
</script>

<style scoped>
/* .bling1,
.bling2,
.bling3 {
  position: absolute;
  width: 2vw;
  height: 2vw;
  transform: rotate(45deg);
  background: white;
  right: 3vw;
  top: 5.067vw;
  box-shadow: 1px 1px 1px #ffffff;
  animation: bling 1s;
} */
.bling1,
.bling2,
.bling3 {
  background-image: url('~assets/shine.png');
  background-size:100% 100%; 
  background-repeat: no-repeat;
  background-position: center;
  width: 5vw;
    height: 7vw;
    right: 0.5vw;
  top: 5.067vw;
  position: absolute;
  animation: opacity-change 1s ease-in-out forwards;
}
@keyframes opacity-change {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.bling2 {
  width: 4vw;
    height: 6vw;
    right: 1.5vw;
    top: 2vw;
}
.bling3 {
  width: 3vw;
    height: 4vw;
    right: 0vw;
    top: 1vw;
}
@keyframes bling {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.container {
  /* position: absolute; */
  width: 100vw;
  margin: 0 auto;
}
.moon_box {
  width: 200px;
  height: 250px;
  /* position: relative; */
  position: absolute;
  /* top: -98.667vw; */
  /* width: 100%; */
  /* width: 100%; */
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  margin: 0 auto;
}
.line_moon {
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
.moon_shine {
  animation: moonlight 1.5s infinite reverse;
}
.star {
  position: absolute;
}
.design_star {
  top: 47vw;
  left: 23vw;
}
.back_star {
  top: 87vw;
  left: 66vw;
}
.front_star {
  top: 103vw;
  left: 18vw;
}
.design_star img {
  width: 156px;
}

.back_star img {
  width: 122px;
}
.front_star img {
  width: 65px;
}
.filter {
  background: #000000;
  filter: opacity(25%);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}
@keyframes moonlight {
  0% {
    -webkit-filter: drop-shadow(0px 0px 0px white) brightness(100%); /* Chrome, Safari, Opera */
    filter: drop-shadow(0px 0px 1px white) brightness(120%);
  }
  25% {
    -webkit-filter: drop-shadow(0.3px 0.3px 1px white) brightness(130%); /* Chrome, Safari, Opera */
    filter: drop-shadow(0.3px 0.3px 1px white) brightness(130%);
  }
  50% {
    -webkit-filter: drop-shadow(0.5px 0.5px 2px white) brightness(140%); /* Chrome, Safari, Opera */
    filter: drop-shadow(0.5px 0.5px 2px white) brightness(140%);
  }
  75% {
    -webkit-filter: drop-shadow(0.3px 0.3px 1px white) brightness(130%); /* Chrome, Safari, Opera */
    filter: drop-shadow(0.3px 0.3px 1px white) brightness(130%);
  }
  100% {
    -webkit-filter: drop-shadow(0px 0px 1px white) brightness(120%); /* Chrome, Safari, Opera */
    filter: drop-shadow(0px 0px 1px white) brightness(120%);
  }
}
</style>