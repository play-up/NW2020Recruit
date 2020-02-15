<template>
    <div class="all">
        <div class="up"></div>
        <div class="down"></div>
    </div>
</template>

<script>
export default {
    name: "sBoolean"
}
</script>

<style scoped>
.all{
    width: 265px;
    height: 379px;
    position: absolute;
    left: 60px;
    top: 140px;
}
.up{
    height: 24%;
    width: 39%;
    background-image: url('~assets/letters.png');
    background-size: 100% 100%;
    position: relative;
    left: 32%;
    bottom: -1%;
}
.down{
    height: 76%;
    width: 100%;
    background-image: url('~assets/boolean.png');
    background-size: 100% 100%;
}
</style>