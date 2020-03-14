<template>
    <div>
        <div class="up"></div>
        <div class="down"></div>
    </div>
</template>

<script>
export default {
    name: "Boolean",
    data() {
        return {
            changeable: false
        }
    },
    methods: {
        change() {
            this.changeable = true;
        }
    },
    mounted() {
        setTimeout(() => {
            this.change();
        }, 3000);
    }
}
</script>

<style scoped>
.all{
    width: 485px;
    height: 695px;
    position: absolute;
    left: 135px;
    top: 150px;
    /* width: 265px;
    height: 379px;
    left: 60px;
    top: 140px; */
    /* width: 35%;
    height: 29%;
    left: 8%;
    top: 10%; */
    /* width: 65%;
    height: 50%;
    left: 18%;
    top: 19.5%; */
    /* width: 35.333rem;
    height: 50.533rem;
    left: 8rem;
    top: 18.667rem; */
    /* width: 64.667rem;
    height: 92.667rem;
    left: 18rem;
    top: 36rem; */
}
.change{
    /* width: 35.333rem;
    height: 50.533rem;
    left: 8rem;
    top: 18.667rem; */
    width: 230px;
    height: 322px;
    left: 40px;
    top: 40px;
    position: absolute;
    transition: width 3s, height 3s, left 3s, top 3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
.up{
    height: 24%;
    width: 39%;
    background-image: url('http://recruit.zqyy.site/letters.png');
    background-size: 100% 100%;
    position: relative;
    left: 32%;
    bottom: -1%;
    animation: boolean 4s linear infinite;
    pointer-events: none;
}
.down{
    height: 76%;
    width: 100%;
    background-image: url('http://recruit.zqyy.site/test-ball.png');
    background-size: 100% 100%;
    pointer-events: none;
}
@keyframes boolean {
    0%, 100% {
        transform: skewY(2deg);
        
    }
    50% {
        transform: skewY(-2deg);
    }
}
</style>