<template>
  <div class="postcard" >
    <!-- 正面卡片 -->
    <div
      class="front"
      ref="front"
      @click="roll"
      :style="{'transform':(isRoll==1?'rotateY(180deg)':'rotateY(0deg)')}"
    >
      <div class="pic"></div>
      <p class="text">愿你找到属于自己的星球</p>
    </div>

    <!-- 背面卡片 -->
    <div
      class="back"
      ref="back"
      :style="{'transform':(isRoll==1?'rotateY(0deg)':'rotateY(180deg)')}"
     
    >
      <div class="top"></div>
      <form action="" methods="post" ref="form" id="form">
        <ul class="form">
          <li class="name">
            <label for="name">姓名</label>
            <div class="underline">
              <input type="text" id="name" required="required"/>
            </div>
            <div class="sex">
              <div :class="item.class" v-for="item in sexArr" :key="item.id">
                <label :for="item.id"></label>
                <input type="radio" :id="item.id" name="sex" ref="checkSex" @click="choose('sex')" required="required"/>
                <span :class="{'active':item.isRight}"></span>
              </div>
            </div>
          </li>
          <li v-for="item in propArr" :key="item.index">
            <label :for="item.prop">{{item.content}}</label>
            <div class="underline" :class="{'underline2':item.flag}">
              <input type="text" :id="item.prop" required="required"/>
            </div>
          </li>
          <li>
            <span class="dir">方向</span>
            <div class="direction" v-for="item in dirArr" :key="item.id">
              <label :for="item.id">{{item.content}}</label>
              <input
                type="radio"
                :id="item.id"
                name="direction"
                ref="checkDir"
                @click="choose('dir')"
                required="required"
              />
              <span :class="{'active':item.isRight}"></span>
            </div>
          </li>
          <li class="decoration">
            <div class="star"></div>
            <div class="feather"></div>
          </li>
          <li class="introdution">
            <p class="i-text">自我介绍</p>
            <div class="self">
              <textarea name id cols="30" rows="10" οnpaste="return true;"></textarea>
            </div>
          </li>
          <li>
            <input type="sumbit" class="submit"  @click="roll2(),smaller();return false;"  value="提交" readonly="readonly"/>>
            <!-- <input type="sumbit" class="submit" value="提交"  @click="roll2(),smaller();"/> -->
          </li>
        </ul>
      </form>

      <p class="bottom">Night's Watch</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "postCard",
  data() {
    return {
      sexCheck: 0,
      propArr: [
        { prop: "stuNum", content: "学号", flag: 0 },
        { prop: "calss", content: "学院班级", flag: 1 },
        { prop: "phoneNum", content: "手机号", flag: 0 }
      ],
      sexArr: [
        {
          class: "female",
          id: "female",
          isRight: 0
        },
        {
          class: "male",
          id: "male",
          isRight: 0
        }
      ],
      dirArr: [
        {
          id: "1",
          content: "设计",
          isRight: 0
        },
        {
          id: "3",
          content: "前端",
          isRight: 0
        },
        {
          id: "2",
          content: "后台",
          isRight: 0
        }
      ],
      isRoll: 0,
      isSmaller: 0
    };
  },
  methods: {
    choose(el) {
      let arr;
      let Arr;
      if (el == "sex") {
        arr = this.$refs.checkSex;
        Arr = this.sexArr;
      } else if (el == "dir") {
        arr = this.$refs.checkDir;
        Arr = this.dirArr;
      }
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].checked == true) {Arr[i].isRight = 1;this.isSmaller=Arr[i].id}
        else Arr[i].isRight = 0;
      }
    },
    roll() {
      let front = this.$refs.front;
      let back = this.$refs.back;
      this.isRoll = 1;
      // console.log(this.isRoll);
    },
    roll2() {
      
      this.isRoll = 0;
      setTimeout(() => {
        // 1s之后卡片再变小
        // this.isSmaller = 1;
        this.$emit("smaller", this.isSmaller);
      }, 1000);
    },
    smaller() {
      // this.$emit('smaller',1);
      console.log("卡片被点击");
    }
  },
  mounted() {
    document.getElementsByTagName("body")[0].style.height =
      window.innerHeight + "px";
  }
};
</script>

<style scoped>

ul {
  text-decoration: none;
  list-style: none;
}
.postcard {
  position: absolute;
  width: 85vw;
  height: 75vh;
  /* height: 100vw; */
  position: absolute;
  /* right: 50%; */
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.pic {
  width: 90%;
  height: 33vh;
  background: #4b4b4b;
  margin: 0 auto;
  transform: translateY(3vh);
}
.text {
  color: #5b5d64;
  transform: translateY(13vh);
  display: inline-block;
  text-align: center;
  font-size: 12px;
}
.front,
.back {
  width: 100%;
  /* height: 75vh; */
  height: 140vw;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 1s;
  backface-visibility: hidden;
}
.front {
  text-align: center;
  background: #c8d1e9;
}
.back {
  background: url("../../assets/bg.png") no-repeat;
  background-size: cover;
  transform: rotateY(180deg);
  padding: 3vw;
  box-sizing: border-box;
}
/* .postcard:hover .back {
  transform: rotateY(0deg);
}
.postcard:hover .front {
  transform: rotateY(180deg);
} */

.top {
  width: 30vw;
  height: 17vw;
  background: url("../../assets/nw2020.png") no-repeat;
  background-size: 100% 100%;
}
.bottom {
  bottom: 2vw;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.form {
  color: #4b3b36;
}
.form li {
  box-sizing: border-box;
  padding-top: 3vw;
}
.form label {
  font-size: 24px;
}
.form input[type="text"] {
  outline: none;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: transparent;
  color: #4b3b36;
  padding-left: 24px;
  padding-right: 24px;
  font-size: 24px;
  width: 100%;
  box-sizing: border-box;
}
.underline {
  display: inline-block;
  position: relative;
  width: 26vw;
  margin-left: 2vw;
}
.underline::after {
  position: absolute;
  content: "";
  background: url("../../assets/underline.png") no-repeat;
  background-size: 100% 100%;
  width: 26vw;
  height: 2px;
  bottom: 0;
  left: 0;
}
.underline2 {
  width: 35vw;
}
.underline2::after {
  width: 35vw;
}
.female,
.male,
.direction {
  position: relative;
  display: inline-block;
  height: 24px;
  line-height: 24px;
  margin-left: 48px;
  margin-right: 15px;
}
.sex label {
  display: block;
  height: 24px;
  /* width: 24px; */
  width: 14px;
  line-height: 24px;
  cursor: pointer;
}
.sex {
  display: inline-block;
}
.sex span,
.direction span {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 24px;
  margin: auto;
  display: block;
  width: 24px;
  height: 24px;
  border: 0.5px solid #4b3b36;
  border-radius: 50%;
  cursor: pointer;
}

.sex input,
.direction input {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 24px;
  margin: auto; /* 这里及以上的定位，可以让该元素竖直居中。(top: 0; bottom: 0;) */
  opacity: 0;
  display: block;
  width: 24px;
  height: 24px;
  cursor: pointer;
  outline: none;
  z-index: 3;
}
.direction span,
.direction input {
  left: 53px;
}
.dir {
  font-size: 24px;
}
.active::after {
  background: url("../../assets/right.png") no-repeat;
  background-size: 100% 100%;
  width: 26px;
  height: 26px;
  content: "";
  position: absolute;
}
.female label {
  background: url("../../assets/female.png") no-repeat;
  background-size: 100% 100%;
}
.male label {
  background: url("../../assets/male.png") no-repeat;
  background-size: 100% 100%;
}
.decoration {
  position: relative;
}
.star {
  width: 75vw;
  height: 8vw;
  background: url("../../assets/stars.png") no-repeat;
  background-size: 100% 100%;
}
.feather {
  width: 10vw;
  height: 25vw;
  background: url("../../assets/feather.png") no-repeat;
  background-size: 100% 100%;
  position: absolute;
  right: 0;
  bottom: 2vw;
}
.introdution {
  transform: translateY(-3vw);
}
.i-text {
  font-size: 22px;
  padding-bottom: 2vw;
}
.self {
  width: 80vw;
  height: 40vw;
  background: url("../../assets/bgtext.png") no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
  padding-top: 6vw;
  padding-bottom: 6vw;
  padding-left: 4vw;
  padding-right: 4vw;
}
.self textarea {
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  color: #4b3b36;
}
.submit {
  border: none;
  outline: none;
  width: 18vw;
  height: 18vw;
  background: url("../../assets/submit.png") no-repeat;
  background-size: 100% 100%;
  font-size: 36px;
  float: right;
  transform: translateY(-3vw);
  text-align: center;
  cursor: pointer;
}
</style>