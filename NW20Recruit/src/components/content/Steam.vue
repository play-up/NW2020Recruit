<template>
  <div>
    <div class="container">
      <div class="Steam">
        <img src="~assets/steam.png" />
      </div>
      <div class="steamPlanet">
        <img src="~assets/steamPlanet.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Steam",
  data() {
    return {};
  },
  mounted() {
  }
};
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  position: relative;
}
.Steam {
  height: 100%;
  position: absolute;
  right: 0;
}
.Steam img {
  height: 100%;
  width: 100%;
}
.steamPlanet {
  height: 432px;
  width: 296px;
  position: absolute;
  bottom: 57%;
  right: 55%;
  animation: planetFade 0.5s linear both;
  animation-delay: 2s;
}
.steamPlanet img {
  height: 100%;
}

@keyframes planetFade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.mask {
  height: 100%;
  width: 100%;
  background: #00000055;
}
</style>