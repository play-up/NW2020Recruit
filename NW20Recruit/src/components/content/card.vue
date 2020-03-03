<template>
  <div
    class="card"
    :style="{'background-color':(isSmaller==0? 'rgba(0,0,0,0.25)':' rgba(0,0,0,0)')}"

  >
    <div class="content" v-show="!isPostShow" @click.stop>
      <p class="text">你收到一张来自宇宙深处的明信片</p>
      <div class="image" @click="changeCom"></div>
    </div>

    <transition mode="out-in">
      <post-card v-if="isPostShow" 
      @smaller="smaller" 
      :isShow="isShow"
      :class="{'hover1':rotate==1,'smaller1':isSmaller==1,
              'hover2':rotate==2,'smaller2':isSmaller==2,
              'hover3':rotate==3,'smaller3':isSmaller==3}" 
      ></post-card>
    </transition>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
import store from "@/store";

import postCard from "./postCard";
export default {
  name: "card",
  components: {
    postCard
  },
  data() {
    return {
      isShow: false,
      isSmaller: 0,
      rotate: 0
    };
  },
  computed:{
 ...mapState(['isPostShow'])
  },
  methods: {
    changeCom() {
      this.isShow = !this.isShow;
      this.$store.commit('isPostShow',true)
      setTimeout(()=>{
        this.$store.commit('isRoll',1)
      },2000)
    },
    smaller(val) {
      this.rotate = val;
      
      setTimeout(() => {
        this.isSmaller = val;
      }, 1000);
    },
    // ...mapMutations(['isPostShow,true']),
  },
  mounted(){
    document.getElementsByClassName("card")[0].style.height = window.innerHeight+'px';
  }
};
</script>

<style  scoped>
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.7s;
}

.card {
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  perspective: 350;
  -webkit-perspective: 350; /* Safari 和 Chrome */
  /* background-color: rgba(0,0,0,0.25) */
}
.content {
  position: absolute;
  width: 100vw;
  text-align: center;
  top: 75vw;
}
.image {
  background: url("../../assets/letter.png") no-repeat;
  background-size: 100% 100%;
  display: inline-block;
  width: 7vw;
  height: 7vw;
  transform: translateY(50%);
  vertical-align: super;
  animation: shine 2s infinite reverse;
}
.text {
  font-size: 3vw;
  display: inline-block;
}
.hover1 {
  /* transform: rotateX(61deg) rotateY(-27deg) rotateZ(-2deg) !important; */
  transform:rotateX(61deg) rotateY(-27deg) rotateZ(-15deg) !important;
  transform-origin: 0 0;
  transition: transform 1s linear;
  top: 132vw !important;
}
.smaller1 {
  animation: smaller1 2.5s ease-out forwards;
  opacity: 0;
  transition: opacity 0.5s 1.5s linear;
}

.hover2 {
  transform: rotateX(66deg) rotateY(-12deg) rotateZ(36deg) !important;
  transform-origin: 0 0;
  transition: transform 1s linear;
  top: 113vw !important;
  left: 18vw!important;
}

.smaller2 {
  animation: smaller2 2.5s ease-out ;
  opacity: 0;
  transition: opacity 0.5s 1.5s linear;
}
@keyframes smaller2 {
  0% {
    transform:  rotateX(66deg) rotateY(-12deg) rotateZ(36deg);
  }
  40% {
    transform: rotateX(95deg) rotateY(-1deg) rotateZ(24deg)  scale(0.2);
  }
  100% {
    left: 77vw;
    top: 49%;
    transform: rotateX(58deg) rotateY(-12deg) rotateZ(36deg) scale(0.02);
  }
}
.hover3 {
  /* transform: rotateX(61deg) rotateY(-27deg) rotateZ(-2deg) !important; */
  transform:rotateX(50deg) rotateY(-68deg) rotateZ(-6deg)  !important;
  transform-origin: 0 0;
  transition: transform 1s linear;
  top: 148vw !important;
}
.smaller3 {
  animation: smaller3 2.5s ease-out forwards;
  /* opacity: 0; */
  /* transition: opacity 0.5s 1.5s linear; */
}
@keyframes smaller3 {
  0% {
    transform: rotateX(50deg) rotateY(-68deg) rotateZ(-6deg) ;
  }
  30% {
    transform: rotateX(86deg) rotateY(-73deg) rotateZ(-29deg) scale(0.3);
    opacity: 1;
  }
  80%{
    opacity: 1;
  }
  100% {
    left: 21vw;
    top: 60%;
    /* transform: rotateX(51deg) rotateY(-48deg) rotateZ(-43deg) scale(0.05); */
    transform: rotateX(43deg) rotateY(-42deg) rotateZ(-49deg) scale(0.03);
    opacity: 0;
  }
}
@keyframes smaller1 {
  0% {
    transform: rotateX(61deg) rotateY(-27deg) rotateZ(-15deg) ;
  }
  35% {
    /* transform: rotateX(84deg) rotateY(-24deg) rotateZ(-4deg) scale(0.3); */
    transform:rotateX(89deg) rotateY(-27deg) rotateZ(-2deg) scale(0.3);
  }
  100% {
    top: 30%;;
    left: 27vw;
    /* transform: rotateX(61deg) rotateY(-27deg) rotateZ(-2deg) scale(0.06); */
     transform: rotateX(40deg) rotateY(-14deg) rotateZ(-16deg) scale(0.06)  ;
  }
}


@keyframes shine {
   0% {
    filter: drop-shadow(0px 0px 1px white) brightness(100%);
  }
  50% {
    filter: drop-shadow(0 0 3px white) brightness(105%);
  }
  100% {
    filter: drop-shadow(0px 0px 1px white) brightness(100%);
  }
}
</style>