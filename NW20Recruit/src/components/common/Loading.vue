<template>
    <div class="loading-wrap">
      <div class="circle-loader">
        <div class="circle circle-0"></div>
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-3"></div>
        <div class="circle circle-4"></div>
      </div> 
      <img class="ani" src="http://recruit.zqyy.site/load.gif" alt=""> 
    </div>
    
</template>

<script>
export default {
  name: 'Loading',
}
</script>

<style scoped>
.ani {
    width: 100%;
    /* height: 100px; */
    position: absolute;
    display: block;
    left: 0;
    right: 0;
    margin: auto;
    top: 300px;
}
@-webkit-keyframes rotate-animation {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@keyframes rotate-animation {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
.loading-wrap {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    background: black;
}
.circle-loader {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 8em;
    height: 8em;
    margin-left: -4em;
    margin-top: -4em;
}
.circle {
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -0.25em;
    -webkit-transform-origin: 0.25em 4em;
    transform-origin: 0.25em 4em;
    -webkit-animation: rotate-animation 2.5s infinite;
    animation: rotate-animation 2.5s infinite;
    width: 0.5em;
    height: 0.5em;
    border-radius: 0.25em;
    background-color: rgb(186, 247, 242);
    box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.5);
}
.circle-0 {
    -webkit-animation-timing-function: cubic-bezier(0, 0, 1, 1);
    animation-timing-function: cubic-bezier(0, 0, 1, 1);
}
.circle-1 {
    -webkit-animation-timing-function: cubic-bezier(0.1625, 0, 0.8375, 1);
    animation-timing-function: cubic-bezier(0.1625, 0, 0.8375, 1);
}
.circle-2 {
    -webkit-animation-timing-function: cubic-bezier(0.325, 0, 0.675, 1);
    animation-timing-function: cubic-bezier(0.325, 0, 0.675, 1);
}
.circle-3 {
    -webkit-animation-timing-function: cubic-bezier(0.4875, 0, 0.5125, 1);
    animation-timing-function: cubic-bezier(0.4875, 0, 0.5125, 1);
}
.circle-4 {
    -webkit-animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
    animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
}
</style>
