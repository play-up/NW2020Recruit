<template>
  <div class="postcard" @click.stop>
    <!-- 正面卡片 -->
    <div
      class="front"
      ref="front"
      :style="{'transform':(isRoll==1?'rotateY(180deg)':'rotateY(0deg)')}"
    >
      <img class="pic" src="../../assets/post-pic.jpg" />
      <img src="../../assets/post-text.png" alt="" class="post-text">
      <img src="../../assets/post-name.png" alt="" class="post-name">
      <!-- <p class="text">愿你找到属于自己的星球</p> -->
    </div>

    <!-- 背面卡片 -->
    <div
      class="back"
      ref="back"
      :style="{'transform':(isRoll==1?'rotateY(0deg)':'rotateY(180deg)')}"
    >
      <img class="top" src="../../assets/nw2020.png" />
      <form @submit.prevent="submitForm($event)">
        <ul class="form">
          <li class="name">
            <label for="name">姓名</label>
            <div class="underline">
              <input type="text" id="name" v-model="formData.name" required />
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
          <li v-for="(item,index) in propArr" :key="index">
            <label :for="item.prop">{{item.content}}</label>
            <div :class="'underline'+item.num">
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
                  v-model="formData.intention"
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
              <textarea
                name
                id
                cols="30"
                rows="10"
                οnpaste="return true;"
                v-model="formData.introduce"
              ></textarea>
            </div>
          </li>
          <li>
            <!-- <input
              type="submit"
              class="submit"
              @click="submit();return false;"
              readonly="readonly"
              src="../../assets/submit.png"
            /> -->
            <img src="../../assets/submit.png" alt=""  @click="submit();return false;" class="submit">
          </li>
        </ul>

        <div class="right">
          <div class="code">
            <img src="~assets/code.png" alt />
            <div class="code-text">招新咨询群</div>
          </div>
          <div>
            <img src="~assets/seal.png" alt class="none" :class="{'seal':isSeel}" />
          </div>
        </div>
      </form>

      <p class="bottom">Night's Watch</p>
    </div>
    
    <div class="remind">
      <popup :remind-show="this.isRemindShow" @yes="yes" @no="no">
        <div slot="main">
          <p>{{remindArr[remindIndex].content1}}</p>
          <p>{{remindArr[remindIndex].content2}}</p>
        </div>
        <div slot="yes"><span class="next-text">{{remindArr[remindIndex].sureBtn}}</span> <span class="icon">></span> </div>
        <div slot="no">{{remindArr[remindIndex].rejectBtn}}</div>
      </popup>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import popup from "../common/popup";
import $ from 'jquery';
import { mapState,mapMutations } from 'vuex'

export default {
  name: "postCard",
  components: {
    popup
  },
  props: {
    isShow: Boolean //弹窗是否出现
  },
  data() {
    return {
      remindIndex: 0,
      remindArr: [
        {
          content1: "你的报名表尚未提交,",
          content2: "确认残忍离开吗QAQ",
          sureBtn: "继续报名",
          rejectBtn: "忍痛拒绝"
        },
        {
          content1: "你的报名表未填写完整,",
          content2: "不能提交哦QAQ",
          sureBtn: "继续报名"
        },
        {
          content1: "你的报名表已提交过一次了,",
          content2: "确认继续提交吗?",
          sureBtn: "继续提交",
          rejectBtn: "忍痛拒绝"
        },
        {
          content1: "提交信息未成功哦",
          content2: "请重新提交QAQ",
          sureBtn: "继续报名"
        }
      ],
      formData: {
        name: "", //名字
        sex: "", //性别
        studentid: null, //学号
        college: "", //学院班级
        phone: null, //电话号码
        intention: "", //方向
        introduce: "" //自我介绍
      },
      sexCheck: 0,
      propArr: [
        { prop: "studentid", content: "学号", flag: 0, num: 1 },
        { prop: "college", content: "专业班级", flag: 1, num: 2 },
        { prop: "phone", content: "手机号", flag: 0, num: 3 }
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
      // isRoll: 0,
      isSmaller: 0,
      isSeel: 0, //是否盖章
      SexIndex: false,
      DirIndex: false,
      isLocal: false, //是否已经客户端保存
      isAlive: true, //是否点击了提交，点击后点击外围不跳转到首页
      backStatus: null, //后台返回的状态
      isRemindShow: false //弹窗是否要出现
    };
  },
  watch: {
    // 当已经点击了提交并且成功后，不可以点击页面返回主页
    // isAlive() {
    //   if (this.isAlive == false) {
    //     document.body.removeEventListener("click", this._close);
    //   }else{
    //      document.body.addEventListener("click", this._close);
    //   }
    // }
  },
  computed:{
     ...mapState(['isRoll'])

  },
  methods: {
    // 整理数据
    collectingData() {
      let formData = JSON.stringify(this.formData);
      // 将学号，手机号专程数字型
      this.formData.studentid = parseInt(this.formData.studentid);
      this.formData.phone = parseInt(this.formData.phone);
      this.formData.sex = 1;
      //  console.log(this.formData.studentid);
      let arr = this.formData;
      localStorage.setItem("formData", JSON.stringify(arr));

      localStorage.setItem("SexIndex", this.SexIndex);
      this.SexIndex = localStorage.getItem("SexIndex");

      localStorage.setItem("DirIndex", this.DirIndex);
      this.DirIndex = localStorage.getItem("DirIndex");

      localStorage.setItem("isLocal", true);
    },
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
      // 当弹窗没有出来的时候，点击才可以翻转到背面
      if (this.isRemindShow == false) {
        this.isRoll = 1;
      }
    },
    // 点击后盖章，卡片翻转到正面且向父组件传值，使卡片缩小且飞向指定位置
    roll2() {
      
      document.body.removeEventListener("click", this._close);
      this.isSeel = 1;
      setTimeout(() => {
        // this.isAlive = false;
        // 1s后卡片翻转
        this.$store.commit("isRoll",false) ;
        // 再过1s之后卡片再变小
        // this.isSmaller = 1;
        this.isSmaller = this.dirArr[this.DirIndex].id;
        setTimeout(() => {
          this.$emit("smaller", this.isSmaller);
          // console.log(this.isSmaller);

          setTimeout(() => {
            this.$store.commit("chooseNum", this.isSmaller);

            //动画执行完成后，报名表组件消失,所有动画清空
            setTimeout(() => {
              this.$emit("smaller", null);
               this.isSeel = 0;
              //  this.isAlive = true;
              this.$store.commit("isSubmitShow", false);
              this.$store.commit("isPostShow", false);
              this.$store.commit('isLetterShow',true);
            });
          }, 3000);
        }, 1000);
      }, 1500);
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
      if (this.formData.name == "") {

        return true;
      } else if (!this.judeName(this.formData.name)) {
        // console.log("请输入正确的姓名");
        return true;
      }
      if (this.formData.sex == "") {
        // console.log("请选择性别");
        return true;
      }
      for (var i = 0; i < this.propArr.length; i++) {
        let index = this.propArr[i].prop;
        if (this.formData[index] == "") {
          // console.log("请填写" + this.propArr[i].content);
          return true;
        } else if (
          index == "phone" &&
          !this.judgePhoneNo(this.formData[index])
        ) {
          console.log("请输入正确的手机号");
          return true;
        }
      }
      if (this.formData.direction == "") {
        console.log("请选择方向！");

        return true;
      }
      if(this.formData.introduce==''){
        return true;
      }
    },
    submit() {
      // this.judgeInsure();
      // 输入不合法时
      if (this.judgeInsure()) {
        this.isRemindShow = true;
        this.remindIndex = 1;
      } else {
        this.submitForm();
        // 后台返回一个状态码，如果成功则先盖章后卡片翻转，不成功则提醒
      }
    },
    moreSubmit() {
      this.$axios.post("/update", this.formData).then(res => {
        this.backStatus = res.data.code;
        this.roll2();
      });
    },
    submitForm() {
      this.collectingData();

      //axios
      this.$axios.post("/new", this.formData).then(res => {
        this.backStatus = res.data.code;
        if (this.backStatus == 2) {
          this.roll2();
        } else if (this.backStatus == 4) {
          // this.moreSubmit();
          this.isRemindShow = true;
          this.remindIndex = 2;
        } else if (this.backStatus == 5) {
          // 当存入数据库失败时
          this.isRemindShow = true;
          this.remindIndex = 3;
        }
      });
    },
    yes() {
      this.isRemindShow = false;
      if (this.remindIndex == 2) this.moreSubmit(); //如果是继续提交按钮被点击，则触发这个方法
    },
    no() {
      this.isRemindShow = false;
      if (this.remindIndex == 0) {
        // 报名表这个组件消失
        this.$store.commit("isSubmitShow", false);
        this.$store.commit("isPostShow", false);
        // this.isAlive=false;
        this.$store.commit("isLetterShow", true);
        this.$store.commit('isRoll',0)
      }
    }
  },
  mounted() {
    this.isLocal = localStorage.getItem("isLocal");
    if (this.isLocal) {
      this.formData = JSON.parse(localStorage.getItem("formData"));
      this.SexIndex = localStorage.getItem("SexIndex");
      this.DirIndex = localStorage.getItem("DirIndex");
      var sexArr = this.sexArr;
      sexArr[this.SexIndex].isRight = true;
      // console.log(this.SexIndex);

      var dirArr = this.dirArr;
      dirArr[this.DirIndex].isRight = true;
    }

    // 解决安卓苹果输入框问题
    let ua = window.navigator.userAgent;
    let app = window.navigator.appVersion;
    //$alert('浏览器版本: ' + app + '\n' + '用户代理: ' + ua);
    if(!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
        // alert('ios端');
        $("input,textarea").on("blur",function () {
            var currentPosition,timer;
            var speed=1;
            timer=setInterval(function(){
                currentPosition=document.documentElement.scrollTop || document.body.scrollTop;
                currentPosition-=speed; 
                window.scrollTo(0,currentPosition);//页面向上滚动
                currentPosition+=speed;
                window.scrollTo(0,currentPosition);//页面向下滚动
                clearInterval(timer);
            },100);
        })
    }else if(ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1) {
        // alert('android端');
    }

    
  },
  beforeMount() {
    this._close = e => {
      // 如果点击发生在当前组件内部，则不处理
      if (this.$el.contains(e.target)) {
        return;
      }
      this.isRemindShow = true; //如果点击了则弹窗出现
      this.remindIndex = 0;
    };
    // 两秒之后转到报名页面才监听事件
    setTimeout(()=>{
      document.body.addEventListener("click", this._close);
    },1500)
  },
  beforeDestroy() {
    document.body.removeEventListener("click", this._close);
  }
};
</script>

<style scoped>
ul {
  text-decoration: none;
  list-style: none;
}
.icon{
  font-size: 5.5vw;
  font-weight: 300;
  vertical-align: middle;
}
.next-text{
      font-size: 4.55vw;
    vertical-align: middle;
    margin-left: 2px;
    font-weight: 300;
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
  text-align: center;
  font-size: 14px;
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
  height:135vw;
  /* height: 75%; */
  /* height: 100vw; */
  /* right: 50%; */
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #282828;
}
.pic {
     width: 90%;
    /* margin: 0 auto; */
    position: absolute;
    left: 50%;
    transform: translate(-50%,4vw);
}
.post-text{
      width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 28vw);
}
.post-name{
     width: 21%;
    position: absolute;
    top: 50%;
    right: 10%;
    transform: translateY(36vw);
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
  height: 135vw;;
  /* height: 140vw; */
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
}
.back {
  transform: rotateY(180deg);
  padding: 3vw 6vw;
  box-sizing: border-box;
}
.top {
  width: 36vw;
  /* height: 15vw;
  background: url("../../assets/nw2020.png") no-repeat;
  background-size: 100% 100%; */
  margin-left: -2vw;
}
.bottom {
  bottom: 2vw;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.form {
  transform: translateY(-8px)
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
.underline,
.underline1,
.underline2,
.underline3 {
  display: inline-block;
  position: relative;
  width: 16vw;
  margin-left: 2vw;
  padding-bottom: 2px;
}
.underline::after,
.underline1::after,
.underline2::after,
.underline3::after {
  position: absolute;
  content: "";
  background: url("../../assets/underline.png") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 4px;
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
}
.underline1 {
  width: 26vw;
}
.underline1::after {
  background: url("../../assets/underline1.png") no-repeat;
  height: 4px;
  background-size: 100% 100%;
}
.underline3 {
  width: 27vw;
}
.underline3::after {
  background: url("../../assets/underline3.png") no-repeat;
  height: 4px;
  background-size: 100% 100%;
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
        left: 0.8vw;
    margin: auto;
    display: block;
    width: 6.4vw;
    height: 6.4vw;
    border: 1px solid #4b3b36;
    border-radius: 50%;
    cursor: pointer;
    transform: scale(.5);
}

.sex input,
.direction input {
  position: absolute;
  top: 0;
  bottom: 0;
     left: 0.8vw;
  margin: auto; /* 这里及以上的定位，可以让该元素竖直居中。(top: 0; bottom: 0;) */
  opacity: 0;
  display: block;
  width: 6.4vw;
    height: 6.4vw;
    transform: scale(.5);
  cursor: pointer;
  outline: none;
  z-index: 3;
}
.direction span,
.direction input {
  left: 5.067vw;
    top: .1vw;
}
.dir {
  font-size: 2.933vw;
}
.active::after {
  background: url("../../assets/right.png") no-repeat;
  background-size: 100% 100%;
  width: 26px;
  height: 26px;
  content: "";
  position: absolute;
      transform: scale(2);
    left: 2.2vw;
    top: 2vw;
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
  width: 78vw;
  height: 40vw;
  background: url("../../assets/bgtext.png") no-repeat;
  background-size: 100% 100%;
  box-sizing: border-box;
  padding-top: 1.5vw;
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
  /* height: 15vw;
  background: url("../../assets/submit.png") no-repeat; */
  background-size: 100% 100%;
  font-size: 36px;
  float: right;
  opacity: 0.6;
  transform: translateY(-2vw);
  text-align: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.submit:active{
  opacity: 0.9;
}
.direction-container {
  display: inline-block;
  margin-left: 5.4vw;
}
</style>