<template>
  <div id="starry-text">
      <p><span class="starry-text1">欢迎进入</span><span class="starry-text1">Night’s Watch </span><span class="starry-text1">星系</span></p>
  </div>
</template>

<script>
export default {
  name: 'StarryText',
}
</script>

<style>
#starry-text {
    width: 100%;
    position: absolute;
    top: 550px;
    text-align: center;
}
#starry-text p {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    font-size: 34px;
    color: #afaa95;
    padding-left: 63px;
}

</style>
