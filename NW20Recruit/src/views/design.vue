<template>
    <div class="all" ref="all">
        <!-- <Loading v-if="loading"></Loading> -->
        <Boolean :class="[!isfly?'':'lsmall', 'cbig']"></Boolean>
        <div :class="['title', {'show':showTitle}]">
            <img class="word-img" src="http://recruit.zqyy.site/sheji.png" alt="">
            <!-- <img class="word-img" src="http://recruit.zqyy.site/ji.png" alt=""> -->
        </div>
        <div class="upBat"></div>
        <div class="word" v-if="showWord">
            <!-- <p 
                v-for="(word, index) in words" 
                :key="index"
                class="landin"
            >
                <span 
                    v-for="(letter, i) in letters[index]" 
                    :key="i"
                    :style="`animationDelay:${i * 0.02}s`"
                >{{letter}}</span>
            </p> -->
            <!-- <p 
                v-for="(word, index) in words" 
                :key="index"
                class="landin"
                :style="`animationDelay:${index * 0.03}s`"
            >{{word}}</p> -->
            <p class="para" v-for="(word, index) in words" :key="index">{{word}}</p>
        </div>
        <div class="downBat"></div>
        <div :class="['next', {'hide':!showArrow}]" @click="goNext">
            <img src="http://recruit.zqyy.site/pinkarrow.png" class="arrow"/>
        </div>
        <div class="bottom"></div>
    </div>
</template>

<script>
import Boolean from '@/components/content/Boolean'
import Loading from '@/components/common/Loading'
import {mapState} from "vuex"
export default {
    name: "design",
    components: {
        Boolean,
        Loading
    },
    data() {
        return {
            isfly: false,
            istitle: false,
            showTitle: false,
            // words: ['不同于传统画师，UI设计师除了要给用户带来最',
            //         '优的视觉效果，同时需要明确产品功能，安排界',
            //         '面布局，制定交互逻辑，创造流畅的动态效果，',
            //         '从而带来最佳的用户体验。',
            //         '当然，我们设计组并不局限于UI设计，还会涉及',
            //         '到平面，海报，插图设计等，从用笔纸作画，到',
            //         '用PhotoShop处理图像，Illustrator绘制图案，',
            //         'AfterEffect制定交互……工具多如繁星，只为实',
            //         '现你天马行空的绮梦。'
            // ],
            words: ['设计网页与App界面，需要明确产品功能，安排界面布局，制定交互逻辑，美化视觉效果并创造出流畅创新的动态效果，从而带来最佳的用户体验。','从用笔纸作画，到用Photoshop处理图像、Illustrator绘制图案、AfterEffect制作动效……工具多如繁星，只为实现你天马星空的灵感。'],
            showWord: false,
            letters: [],
            showArrow: false,
            imgUrl: [
                'http://recruit.zqyy.site/sheji.png',
                'http://recruit.zqyy.site/pinkarrow.png',
                'http://recruit.zqyy.site/test-bg.jpg',
                'http://recruit.zqyy.site/bat2.png',
                'http://recruit.zqyy.site/letters.png',
                'http://recruit.zqyy.site/test-ball.png'
            ],
            loading: true,
            nextImgUrl: [
                'http://recruit.zqyy.site/frontend2.png',
                'http://recruit.zqyy.site/frontend1.png',
                'http://recruit.zqyy.site/frontend.png',
                'http://recruit.zqyy.site/steam.png',
                'http://recruit.zqyy.site/steamPlanet.png'
            ]
        }
    },
    computed: {
        ...mapState(["isPass"])
    },
    methods: {
        //气球向上飞
        fly() {
            let that = this;
            return new Promise((resolve, reject) =>{
                setTimeout(() => {
                    that.isfly = true;
                    resolve(2000);
                }, 1500)
            })
        },
        //停顿留有动画时间
        rest(ms) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve();
                }, ms)
            })
        },
        //显现出标题
        typTitle(ms) {
            let that = this;
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    this.showTitle = true;
                    resolve(800);
                }, ms)
            });
        },
        //显示出正文
        typPara() {
            let that = this;
            return new Promise((resolve, reject) => {
                this.showWord = true;
                // if(typeof this.words === 'String'){
                //     this.words = this.words.split("");
                // }
                resolve();
            })
        },
        //返回上一页
        goBack() {
            let start, end;
            this.$refs.all.addEventListener('touchstart', (evt) => {
                start = evt.touches[0].clientY;
            })
            this.$refs.all.addEventListener('touchmove', evt => {
                end = evt.touches[0].clientY;
            })
            this.$refs.all.addEventListener('touchend', evt => {
                // 上滑减小，下滑增加
                if(end > start) {
                    this.$router.replace('/');
                } else if(end < start) {
                    if(this.isPass) {
                        this.$router.replace('/');
                    } else {
                        this.$router.replace('/frontend');
                    }
                }
            })
        },
        //进入下一个页面
        goNext() {
            if(this.isPass) {
                this.$router.replace('/');
            } else {
                this.$router.replace('/frontend');
            }
        },
        //加载图片资源
        addPromise(url) {
            return new Promise((reslove, reject) => {
                let img = new Image();
                img.src = url;
                img.onload = () => {
                    reslove(url);
                }
            })
        },
        //加载图片
        loadImg(url, anim) {
            let arr = [];
            for (let i = 0; i < url.length; i++) {
                arr.push(this.addPromise(url[i]));
            };
            Promise.all(arr)
            .then(() => {
                this.loading = false;
                if(anim) {
                    this.anim();
                }
            })
        },
        //动画
        anim() {
            this.fly()
                .then(this.typTitle)
                .then(this.rest)
                .then(this.typPara)
                .then(() => {
                    return new Promise((resolve, reject) => {
                        this.showArrow = true;
                        //滑动切换路由
                        this.goBack();
                        resolve();
                    })
                })
        },
        //加载下一页的动画
        loadNext() {
            this.loadImg(this.nextImgUrl, false);
        }
    },
    mounted() {
        //加载下一页的图片
        this.loadNext();
        //动画
        this.anim();
    }
}
</script>

<style scoped>
.all{
    width: 100%;
    height: 100%;
    background-image: url('http://recruit.zqyy.site/test-bg.jpg');
    background-size: 100% 100%;
    position: relative;
}
.upBat{
    background-image: url('http://recruit.zqyy.site/bat2.png');
    right: 0;
    top: 100px;  
}
.downBat{
    background-image: url('http://recruit.zqyy.site/bat2.png');
    left: 12%;
    bottom: 20%;
    z-index: 3;
    transform: rotateY(180deg);
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
    background-image: url('http://recruit.zqyy.site/castle.png');
    background-size: 100% 100%;
    position: absolute;
    bottom: 0;
    left: 0;
}
.title{
    font-size: 12rem;
    color: white;
    position: absolute;
    left: 330px;
    height: 120px;
    opacity: 0;
    top: 260px;
}
.title>span{
    white-space: nowrap;
}
.show{
    top: 230px;
    opacity: 1;
    transition: opacity 0.5s, top 0.5s linear;
}
.word{
    color: white;
    font-size: 4rem;
    top: 420px;
    position: relative;
    display: block;
    z-index: 4;
    width: 650px;
    left: 0;
    right: 0;
    margin: auto;
    font-family: '等线','微软雅黑';
}
.word>p{
    position: relative;
    left: 0;
    right: 0;
    font-family: '等线','微软雅黑';
    line-height: 49px;
    letter-spacing: 2px;
    margin-bottom: 20px;
}
.none{
    display: none;
    transition: display 3s;
}
.cbig{
    width: 485px;
    height: 695px;
    position: absolute;
    left: 135px;
    top: 150px;
}
.lsmall{
    /* width: 35.333rem;
    height: 50.533rem;
    left: 8rem;
    top: 18.667rem; */
    /* width: 255px;
    height: 350px; */
    /* left: 40px;
    top: 25px; */
    transform: scale(0.55) translate(-400px, -500px);
    transition: transform 2s linear;
    /* transition: width 3s, height 3s, left 3s, top 3s linear; */
}
.landin {
    /* display: flex; */
    /* flex-wrap: nowrap; */
    display: inline-block;
    margin: 0;
    color: white;
    animation: landIn 0.2s ease-out both;
}

.landin>span {
    animation: landIn 0.2s ease-out both;
    display: inline-block;
}
.para {
    animation: landIn 0.8s linear both;
    pointer-events: none;
}
@keyframes landIn {
  from {
    opacity: 0;
    transform: translate(0, 2vw);
  }

  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}
.next{
    width: 80px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    display: block;
    bottom: 100px;
    z-index: 10;
}
.arrow{
    width: 60%;
    display: block;
    position: relative;
    left: 0;
    right: 0;
    margin: auto;
    animation: jump 1s linear 0s infinite;
}
/* .shadow{
    height: 25px;
    background-color: rgba(20, 20, 20, 0.3);
    border-radius: 50%;
    position: relative;
    left: 0;
    right: 0;
    margin: auto;
    animation: shadow 1s linear 0s infinite;
} */
/* @keyframes shadow {
    0%, 100% {
        width: 60%;
        height: 10px;
    }
    50%{
        width: 35%;
        height: 8px;
    }
} */
@keyframes jump {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(3px);
    }
}
.hide{
    display: none;
}
.word-img {
    width: 220px;
    height: 100px;
    pointer-events: none;
}
</style>