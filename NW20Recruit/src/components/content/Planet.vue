<template>
  <div class="Planet">
    <div class="bigPlanet-box">
      <div class="bigPlanet"></div>
    </div>
    <div class="orbit">
      <div class="smallPlanet-box">
        <div class="smallPlanet"></div>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "Planet"
};
</script>

<style scoped>
.Planet {
  transform-style: preserve-3d;
}
.bigPlanet-box {
  height: 480px;
  width: 480px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
.bigPlanet {
  height: 100%;
  width: 100%;
  background-image: url(/static/img/bigPlanet.png);
  background-position: center center;
  background-size: cover;
}
.orbit {
  height: 450px;
  width: 450px;
  position: relative;
  border: 6px solid rgba(145, 184, 184, 0.5);
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: orbitRotate 3s linear 0s normal none infinite;
}
.smallPlanet-box {
  height: 30px;
  width: 30px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform-style: preserve-3d;
  transform: translateX(-50%) translateY(50%) rotateX(-90deg) rotateY(0deg);
}
.smallPlanet {
  height: 100%;
  width: 100%;
  background-image: url(~assets/smallPlanet.png);
  background-position: center center;
  background-size: cover;
  animation: planetrotate 3s linear 0s normal none infinite;
}
@keyframes orbitRotate {
  from {
    transform: rotateX(75deg) rotateY(25deg) rotateZ(0deg);
  }

  to {
    transform: rotateX(75deg) rotateY(25deg) rotateZ(-360deg);
  }
}
@keyframes planetrotate {
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(-360deg);
  }
}
</style>