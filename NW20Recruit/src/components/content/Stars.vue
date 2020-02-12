<template>
  <div id="stars">
      <div class="design-star">
          <img src="~assets/design-star.png" alt="">
      </div>
      <div class="back-star">
          <img src="~assets/back-star.png" alt="">
      </div>
      <div class="front-star">
          <img src="~assets/front-star.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
  name: 'Stars',
}
</script>

<style>
#stars div{
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
</style>
