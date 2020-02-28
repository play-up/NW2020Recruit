<template>
    <div class="all" ref="all">
        <Boolean :class="!isfly?'cbig':'lsmall'"></Boolean>
        <!-- <p :class="['title', {'show':showTitle}]">设计组</p> -->
        <div :class="['title', {'show':showTitle}]">
            <img class="word-img" src="@/assets/she.png" alt=""><img class="word-img" src="@/assets/ji.png" alt="">
        </div>
        <div class="upBat"></div>
        <div class="word">
            <p 
                v-for="(word, index) in words" 
                :key="index"
                class="landin"
            >
                <span 
                    v-for="(letter, i) in letters[index]" 
                    :key="i"
                    :style="`animationDelay:${i * 0.02}s`"
                >{{letter}}</span>
            </p>
        </div>
        <div class="downBat"></div>
        <div :class="['next', {'hide':!showArrow}]">
            <img src="@/assets/pinkarrow.png" class="arrow"/>
            <div class="shadow"></div>
        </div>
        <div class="bottom"></div>
    </div>
</template>

<script>
import Boolean from '@/components/content/Boolean'
export default {
    name: "design",
    components: {
        Boolean
    },
    data() {
        return {
            isfly: false,
            istitle: false,
            showTitle: false,
            words: ['不同于传统画师，UI设计师除了要给用户带来最',
                    '优的视觉效果，同时需要明确产品功能，安排界',
                    '面布局，制定交互逻辑，创造流畅的动态效果，',
                    '从而带来最佳的用户体验。',
                    '当然，我们设计组并不局限于UI设计，还会涉及',
                    '到平面，海报，插图设计等，从用笔纸作画，到',
                    '用PhotoShop处理图像，Illustrator绘制图案，',
                    'AfterEffect制定交互……工具多如繁星，只为实',
                    '现你天马行空的绮梦。'
            ],
            showWord: false,
            letters: [],
            showArrow: false
        }
    },
    methods: {
        //气球向上飞
        fly() {
            let that = this;
            return new Promise((resolve, reject) =>{
                setTimeout(() => {
                    that.isfly = true;
                    resolve(3000);
                }, 3000)
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
                    resolve(500);
                }, ms)
            });
        },
        //显示出正文
        typPara() {
            let that = this;
            let i = 0;
            return new Promise((resolve, reject) => {
                let showLetter = setInterval(() => {
                    let letter = this.words[i].split('');
                    that.letters.push([])
                    let j = 0;
                    //嵌套定时器
                    let sTimer = setInterval(() => {
                        that.letters[i].push(letter[j++]);
                        if(j == letter.length) {
                            i++;
                            clearInterval(sTimer);
                        }
                    }, 15);
                    if(i == that.words.length-1) {
                        clearInterval(showLetter)
                        resolve(1000);
                    }
                }, 1000);
            })
        },
        goBack() {
            let start, end;
            console.log('goBack');
            this.$refs.all.addEventListener('touchstart', (evt) => {
                start = evt.touches[0].clientY;
            })
            this.$refs.all.addEventListener('touchmove', evt => {
                end = evt.touches[0].clientY;
            })
            this.$refs.all.addEventListener('touchend', evt => {
                // 上滑减小，下滑增加
                if(end > start) {
                    this.$router.push('/');
                    console.log('返回首页');
                }
            })
        }
    },
    mounted() {
        this.fly()
            .then(this.typTitle)
            .then(this.rest)
            .then(this.typPara)
            .then(this.rest)
            .then(() => {
            this.showArrow = true;
        });
        this.goBack();
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
    left: 330px;
    height: 120px;
    opacity: 0;
    top: 260px;
}
.title>span{
    white-space: nowrap;
}
.show{
    top: 200px;
    opacity: 1;
    transition: opacity 0.5s, top 0.5s linear;
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
    /* display: inline-block; */
    position: relative;
    left: 0;
    right: 0;
    margin-left: 8vw;
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
    width: 255px;
    height: 350px;
    left: 40px;
    top: 25px;
    position: absolute;
    transition: width 3s, height 3s, left 3s, top 3s linear;
}
.landin {
    display: flex;
    flex-wrap: nowrap;
    color: white;
    align-items: center;
}

.landin>span {
    animation: landIn 0.2s ease-out both;
    display: inline-block;
}

@keyframes landIn {
  from {
    opacity: 0;
    transform: translate(0, -2vw);
  }

  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}
@-webkit-keyframes landIn {
  from {
    opacity: 0;
    -webkit-transform: translate(0, -2vw);
  }

  to {
    opacity: 1;
    -webkit-transform: translate(0, 0);
  }
}
.next{
    width: 80px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    display: block;
    bottom: 40px;
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
.shadow{
    height: 25px;
    background-color: rgba(20, 20, 20, 0.3);
    border-radius: 50%;
    position: relative;
    left: 0;
    right: 0;
    margin: auto;
    animation: shadow 1s linear 0s infinite;
}
@keyframes shadow {
    0%, 100% {
        width: 60%;
        height: 10px;
    }
    50%{
        width: 35%;
        height: 8px;
    }
}
@keyframes jump {
    0%, 100% {
        top: -3px;
    }
    50% {
        top: 0;
    }
}
.hide{
    bottom: -100px;
}
.word-img {
    width: 100px;
    height: 100px;
}
</style>