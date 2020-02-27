<template>
  <div class="postcard" @click.stop>
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
      <form @submit.prevent="submitForm($event)">
        <ul class="form">
          <li class="name">
            <label for="name">姓名</label>
            <div class="underline">
              <input type="text" id="name" v-model="formData.userName" required />
            </div>
            <div class="sex">
              <div :class="item.class" v-for="(item,index) in sexArr" :key="item.id">
                <label :for="item.id"></label>
                <input
                  type="radio"
                  :id="item.id"
                  ref="checkSex"
                  @click="choose('sex',index)"
                  required="required"
                  v-model="formData.sex"
                  :value="item.value"
                />
                <span :class="{'active':item.isRight}"></span>
              </div>
            </div>
          </li>
          <li v-for="item in propArr" :key="item.index">
            <label :for="item.prop">{{item.content}}</label>
            <div class="underline" :class="{'underline2':item.flag}">
              <input type="text" :id="item.prop" required="required" v-model="formData[item.prop]" />
            </div>
          </li>
          <li>
            <span class="dir">方向</span>
            <div class="direction-container">
              <div class="direction" v-for="(item,index) in dirArr" :key="item.id">
                <label :for="item.id">{{item.content}}</label>
                <input
                  type="radio"
                  :id="item.id"
                  name="direction"
                  ref="checkDir"
                  @click="choose('dir',index)"
                  required="required"
                  v-model="formData.direction"
                  :value="item.content"
                />
                <span :class="{'active':item.isRight}"></span>
              </div>
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
            <input
              type="sumbit"
              class="submit"
              @click="roll2();return false;"
              value="提交"
              readonly="readonly"
            />
            <!-- <input type="sumbit" class="submit"  @click="submit();return false;"  value="提交" readonly="readonly"/> -->
          </li>
        </ul>

        <div class="right">
          <div class="code">
            <img src="~assets/code.png" alt />
          </div>
          <div>
            <img src="~assets/seal.png" alt class="none" :class="{'seal':isSeel}" />
          </div>
        </div>
      </form>

      <p class="bottom">Night's Watch</p>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "postCard",
  props:{
    'isShow':Boolean
  },
  data() {
    return {
      formData: {
        stuNum: "",
        class: "",
        phoneNum: "", //学号，班级，电话
        userName: "", //姓名,
        sex: "", //性别
        direction: "" //方向
      },
      sexCheck: 0,
      propArr: [
        { prop: "stuNum", content: "学号", flag: 0 },
        { prop: "class", content: "专业班级", flag: 1 },
        { prop: "phoneNum", content: "手机号", flag: 0 }
      ],

      sexArr: [
        {
          class: "male",
          id: "male",
          isRight: 0,
          value: "男"
        },
        {
          class: "female",
          id: "female",
          isRight: 0,
          value: "女"
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
      isSmaller: 0,
      isSeel: 0, //是否盖章
      SexIndex: false,
      DirIndex: false,
      isLocal:false,
      isAlive:true

      // propModel: { stuNum: "", class: "", phoneNum: "" }, //学号，班级，电话
      // userName: "", //姓名,
      // sex: "", //性别
      // direction: "" //方向
    };
  },
  watch:{
  isAlive(){
    if(this.isAlive==false){
          document.body.removeEventListener("click", this._close)
    }
    
  }
  },
  methods: {
    // 整理数据
    collectingData() {},
    // 选择框（性别+方向）
    choose(el, index) {
      var arr;
      var Arr;
      if (el == "sex") {
        this.arr = this.$refs.checkSex;
        Arr = this.sexArr;
        for (let i = 0; i < Arr.length; i++) {
          Arr[i].isRight = false;
        }
        Arr[index].isRight = true;
        this.SexIndex = index;
      } else if (el == "dir") {
        arr = this.$refs.checkDir;
        Arr = this.dirArr;
        for (let i = 0; i < Arr.length; i++) {
          Arr[i].isRight = false;
        }
        Arr[index].isRight = true;
        // this.isSmaller=Arr[index].id
        this.DirIndex = index;
      }

    },
    // 点击后卡片翻转到背面
    roll() {
      let front = this.$refs.front;
      let back = this.$refs.back;
      this.isRoll = 1;
      // 传到父组件
      // this.$emit("rollNum", this.isRoll);
      // console.log(this.isRoll)
      // console.log(this.isRoll);
    },
    // 点击后盖章，卡片翻转到正面且向父组件传值，使卡片缩小且飞向指定位置
    roll2() {
      this.isSeel = 1;
      setTimeout(() => {
        this.isAlive=false;
        // 1s后卡片翻转
        this.isRoll = 0;
        // 再过1s之后卡片再变小
        // this.isSmaller = 1;
        this.isSmaller=this.dirArr[this.DirIndex].id
        setTimeout(() => {
          this.$emit("smaller", this.isSmaller);
          // console.log(this.isSmaller);
          
          setTimeout(() => {
            this.$store.commit("chooseNum", this.isSmaller);
            // console.log(this.$store.state.isBling);
            
          }, 3000);
        }, 1000);
      }, 1500);
      this.submitForm();
    },
    judgePhoneNo(phoneNo) {
      var reg = /^1[3-9][0-9]\d{8}$/;
      return reg.test(phoneNo);
    },
    judeName(name) {
      var reg = /^[\u4E00-\u9FA5A-Za-z]+$/;
      return reg.test(name);
    },
    // 判断是否都输入且是否输入合法
    judgeInsure() {
      if (this.userName == "") {
        alert("请输入名字");

        return true;
      } else if (!this.judeName(this.userName)) {
        console.log("请输入正确的姓名");
        return true;
      }
      if (this.sex == "") {
        console.log("请选择性别");
        return true;
      }
      for (var i = 0; i < this.propArr.length; i++) {
        let index = this.propArr[i].prop;
        if (this.propModel[index] == "") {
          console.log("请填写" + this.propArr[i].content);
          return true;
        } else if (
          index == "phoneNum" &&
          !this.judgePhoneNo(this.propModel[index])
        ) {
          console.log("请输入正确的手机号");
          return true;
        }
      }
      if (this.direction == "") {
        console.log("请选择方向！");

        return true;
      }
    },
    submit() {
      // this.judgeInsure();
      // 输入不合法时
      if (this.judgeInsure()) {
        return;
      } else {
        console.log("发送网络请求");

        this.submitForm();
        // 后台返回一个状态码，如果成功则先盖章后卡片翻转，不成功则提醒
        this.roll2();
      }
    },
    submitForm() {
      let formData = JSON.stringify(this.formData);
      let arr = this.formData;
      localStorage.setItem("formData", JSON.stringify(arr));

      localStorage.setItem("SexIndex", this.SexIndex);
      this.SexIndex = localStorage.getItem("SexIndex");

      localStorage.setItem("DirIndex", this.DirIndex);
      this.DirIndex = localStorage.getItem("DirIndex");

      localStorage.setItem('isLocal',true)

      //axios
      // axios.post('/user',formData).then(res => {
      //     // success callback
      // }).catch(err => {
      //     // error callback
      // });
    }
  },
  mounted() {
    this.isLocal = localStorage.getItem("isLocal");
    if(this.isLocal){
      this.formData = JSON.parse(localStorage.getItem("formData"));
      this.SexIndex = localStorage.getItem("SexIndex");
      this.DirIndex = localStorage.getItem("DirIndex");
      var sexArr = this.sexArr;
      // sexArr[this.SexIndex].isRight = true;
      // console.log(this.SexIndex);
      
      var dirArr = this.dirArr;
      dirArr[this.DirIndex].isRight = true;
      
      var sexArr = this.sexArr;
       sexArr[this.SexIndex].isRight = true;
      // console.log(this.formData);
    }
    // document.body.addEventListener('click',()=>{
    //         console.log('hahaha');
    //         this.$router.push({
    //       path:'/',
    //     })
            
    // },false)
        // document.addEventListener("click", ()=>{
        //   console.log('hahah');
          
        //   this.$router.push({
        //     path:'/'
        //   })
          
        // });

  },
  beforeMount() {
  this._close = e => {
    // 如果点击发生在当前组件内部，则不处理
    if (this.$el.contains(e.target)) {
      return;
    }
     console.log('hahah');
         this.$router.push({
            path:'/'
          })
  };  
  document.body.addEventListener('click', this._close);
},
  beforeDestroy(){
    document.body.removeEventListener("click", this._close)
    console.log('该组件');
  }
};
</script>

<style scoped>
ul {
  text-decoration: none;
  list-style: none;
}
.right {
  position: absolute;
  right: 0;
  top: 0;
  /* border: 1px solid red; */
  width: 28vw;
  height: 12vh;
}
.code {
  position: absolute;
  right: 3vw;
  top: 6vw;
}
.code img {
  width: 16vw;
}
.none {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.seal {
  position: absolute;
  right: 2vw;
  top: 12vw;
  width: 24vw;
  animation: fadeInBig 1s forwards;
  opacity: 0;
  z-index: 10;
}
@keyframes fadeInBig {
  from {
    opacity: 0;
    transform: scale(3);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.postcard {
  position: absolute;
  width: 90vw;
  /* height: 75vh; */
  height: 75%;
  /* height: 100vw; */
  /* right: 50%; */
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #282828;
}
.pic {
  width: 90%;
  height: 33vh;
  background: #4b4b4b;
  margin: 0 auto;
  transform: translateY(3vh);
}
.text {
  transform: translateY(13vh);
  display: inline-block;
  text-align: center;
  font-size: 12px;
}
input {
  color: #282828;
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
  background: url("../../assets/postcard.png") no-repeat;
  background-size: cover;
  backface-visibility: hidden;
}
.front {
  text-align: center;
  /* background: #c8d1e9; */
}
.back {
  /* background: url("../../assets/bg.png") no-repeat;
  background-size: cover; */
  transform: rotateY(180deg);
  padding: 3vw 6vw;
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
  height: 15vw;
  background: url("../../assets/nw2020.png") no-repeat;
  background-size: 100% 100%;
  margin-left: -2vw;
}
.bottom {
  bottom: 2vw;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.form {
}
.form li {
  box-sizing: border-box;
  padding-top: 3vw;
}
.form label {
  font-size: 2.933vw;
}
.form input[type="text"] {
  outline: none;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: transparent;
  padding-left: 24px;
  padding-right: 24px;
  font-size: 24px;
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 2px;
}
.underline {
  display: inline-block;
  position: relative;
  width: 16vw;
  margin-left: 2vw;
  padding-bottom: 2px;
}
.underline::after {
  position: absolute;
  content: "";
  background: url("../../assets/underline.png") no-repeat;
  background-size: 100% 100%;
  width: 16vw;
  height: 3px;
  bottom: 0;
  left: 0;
}
.underline2 {
  width: 38vw;
}
.underline2::after {
  background: url("../../assets/underline2.png") no-repeat;
  height: 4px;
  background-size: 100% 100%;
  width: 38vw;
}
.female,
.male,
.direction {
  position: relative;
  display: inline-block;
  height: 24px;
  line-height: 24px;
  margin-right: 8vw;
}
.sex label {
  display: block;
  height: 2.8vw;
  /* width: 24px; */
  width: 1.467vw;
  line-height: 24px;
  cursor: pointer;
  display: inline-block;
}
.sex {
  display: inline-block;
  margin-left: 7vw;
}
.sex span,
.direction span {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 2.4vw;
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
  left: 2.4vw;
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
  padding-top: 3vw;
  padding-bottom: 6vw;
  padding-left: 2vw;
  padding-right: 2vw;
}
.self textarea {
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  font-size: 22px;
  color: #282828;
}
.submit {
  border: none;
  outline: none;
  width: 21vw;
  height: 15vw;
  background: url("../../assets/submit.png") no-repeat;
  background-size: 100% 100%;
  font-size: 36px;
  float: right;
  transform: translateY(-3vw);
  text-align: center;
  cursor: pointer;
}
.direction-container {
  display: inline-block;
  margin-left: 5.4vw;
}
</style>