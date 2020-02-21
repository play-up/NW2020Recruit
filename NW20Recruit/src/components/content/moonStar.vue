<template>
  <div class="container">
    <div class="moon-box">
      <img src="~assets/moon.png" class="moon" />
      <img src="~assets/line.png" class="line-moon" />
    </div>
    <!-- 星球分布 -->
    <div id="stars">
      <div class="design-star star">
        <img src="~assets/design-star.png" />
      </div>
      <div class="back-star star">
        <img src="~assets/back-star.png" />
      </div>
      <div class="front-star star">
        <img src="~assets/front-star.png" />
      </div>
    </div>
    <!-- <div class="filter"></div> -->
  </div>
</template>

<script>
export default {
  name: "moonStar"
};
</script>

<style scoped>
.container{
  position: absolute;
  width: 100vw;
  margin: 0 auto;
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
  animation: moonlight 1.5s infinite reverse;
}
#stars .star {
  position: absolute;
}
.design-star {
  top: 47vw;
  left: 23vw;
}
.back-star {
  top: 87vw;
  left: 66vw;
}
.front-star {
  top: 103vw;
  left: 18vw;
}
.design-star img {
  width: 156px;
}

.back-star img {
  width: 122px;
}
.front-star img {
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