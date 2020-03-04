<template>
    <div class="run-box" 
    :class="{'run': startRun}"
    :style="{width: widthBox,height: widthBox}"
    ></div>
</template>

<script>
export default {
  name: 'RunAround',
  props: {
      widthBox: '500px',
      startRun: false
  },
  data() {
    return {
    }
  },
}
</script>

<style scoped>
.run-box {
    width: 662px;
    height: 662px;
    border: 1px solid rgba(90, 83, 87, 0.9);
    border-radius: 100%;
    /* background: rgba(230, 165, 44, 0.5); */
    position: relative;
}
.run {
    animation: run-around 10s linear 1s infinite;
}
.run-box::before {
    content: '';
    width: 0.5px;
    height: 0.5px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 0 12px 9px white;
    filter: drop-shadow(0 0 15px #ffffff)  blur(1px);
    position: absolute;
    top:0;
    left: 48%;
}
@keyframes run-around {
    to {
        transform: rotate(-1turn);
    }
}
</style>
