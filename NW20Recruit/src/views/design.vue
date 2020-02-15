<template>
    <div class="all">
        <Boolean></Boolean>
        <p class="title">设计组</p>
        <div class="upBat"></div>
        <div class="word">
            <p>不同于传统画师，UI设计师除了要给用户带来最</p>
            <p>优的视觉效果，同时需要明确产品功能，安排界</p>
            <p>面布局，制定交互逻辑，创造流畅的动态效果，</p>
            <p>从而带来最佳的用户体验。</p>
            <p>当然，我们设计组并不局限于UI设计，还会涉及</p>
            <p>到平面，海报，插图设计等，从用笔纸作画，到</p>
            <p>用PhotoShop处理图像，Illustrator绘制图案，</p>
            <p>AfterEffect制定交互……工具多如繁星，只为实</p>
            <p>现你天马行空的绮梦。</p>
        </div>
        <div class="downBat"></div>
        <div class="bottom"></div>
    </div>
</template>

<script>
import Boolean from '@/components/content/Boolean'
export default {
    name: "design",
    components: {
        Boolean
    }
}
</script>

<style scoped>
.all{
    width: 100%;
    height: 100%;
    background-image: url('~assets/d_background.png');
    background-size: 100% 100%;
    position: relative;
}
.upBat{
    background-image: url('~assets/bat2.png');
    right: 0;
    top: 100px;  
}
.downBat{
    background-image: url('~assets/bat1.png');
    left: 12%;
    bottom: 20%;
    z-index: 3;
}
.upBat, .downBat{
    width: 32%;
    height: 10%;
    background-size: 100% 100%;
    position: absolute;
}
.bottom{
    width: 100%;
    height: 23%;
    background-image: url('~assets/castle.png');
    background-size: 100% 100%;
    position: absolute;
    bottom: 0;
    left: 0;
}
.title{
    font-size: 12rem;
    color: white;
    position: absolute;
    top: 200px;
    left: 300px;
}
.word{
    color: white;
    font-size: 4rem;
    top: 380px;
    position: absolute;
    display: inline-block;
    z-index: 4;
}
.word>p{
    display: inline-block;
    position: relative;
    left: 0;
    right: 0;
    margin-left: 8vw;
}
.none{
    display: none;
    transition: display 3s;
}
</style>