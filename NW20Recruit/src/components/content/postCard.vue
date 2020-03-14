<template>
  <div class="postcard" @click.stop ref="all">
    <!-- 正面卡片 -->
    <div
      class="front"
      ref="front"
      :style="{'transform':(isRoll==1?'rotateY(180deg)':'rotateY(0deg)')}"
    >
      <img class="pic" src="http://recruit.zqyy.site/post-pic.jpg" />
      <img src="../../assets/post-text.png" alt class="post-text" />
      <img src="../../assets/post-name.png" alt class="post-name" />
      <!-- <p class="text">愿你找到属于自己的星球</p> -->
    </div>

    <!-- 背面卡片 -->
    <div
      class="back"
      ref="back"
      :style="{'transform':(isRoll==1?'rotateY(0deg)':'rotateY(180deg)')}"
    >
      <img class="top" src="http://recruit.zqyy.site/nw2020.png" />
      <!-- <p class="stop">你好，网上招新报名通道已经截止。<br/>若还想报名请加入QQ群1047381092私聊管理员谢谢！</p> -->
      <form @submit.prevent="submitForm($event)">
        <ul class="form">
          <li class="name">
            <div class="name-container">
              <label for="name">姓名</label>
              <div class="underline">
                <input type="text" id="name" v-model="formData.name" required />
              </div>
            </div>
                <!-- 原来的注释 -->
            <!-- <label for="name">姓名</label>
            <div class="underline">
              <input type="text" id="name" v-model="formData.name" required />
            </div>-->
            <div class="sex">
              <div :class="item.class" v-for="(item,index) in sexArr" :key="item.id">
                <!-- 原来的注释 -->
                <!-- <label :for="item.id"><img :src="item.src" alt=""></label> -->
                <img :src="item.src" alt />
                <!-- 原来的注释 -->
                <!-- <label for="item.id" style="font-family:KaiTi ">{{item.content}}</label> -->
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
                <label :for="item.id" onselectstart="return false;">{{item.content}}</label>
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
                id="myTextarea"
                cols="30"
                rows="10"
                v-model="formData.introduce"
                @touchmove="preventMove($event)"
                @touchstart="preventStart($event)"
                @touchend="preventEnd($event)"
              ></textarea>
            </div>
            <span class="remain">{{remainNum}}/200</span>
          </li>
          <li>
            <img
              src="http://recruit.zqyy.site/submit.png"
              alt
              @click="submit()"
              class="submit"
              @touchstart="preventStart($event)"
              @touchend="preventEnd($event)"
            />
          </li>
        </ul>

        <div class="right">
          <div class="code">
            <img src="http://recruit.zqyy.site/code.png" alt />
            <div class="code-text">招新咨询群</div>
          </div>
          <div>
            <img src="~assets/seal.png" alt class="none" :class="{'seal':isSeel}" />
          </div>
        </div>
      </form>

        <div class="right">
          <div class="code">
            <img src="http://recruit.zqyy.site/code.png" alt />
            <div class="code-text">招新咨询群</div>
          </div>
          <div>
            <img src="~assets/seal.png" alt class="none" :class="{'seal':isSeel}" />
          </div>
        </div>
      <p class="bottom">Night's Watch</p>
    </div>

    <div class="remind">
      <popup :remind-show="this.isRemindShow" @yes="yes" @no="no">
        <div slot="main">
          <p>{{remindArr[remindIndex].content1}}</p>
          <p>{{remindArr[remindIndex].content2}}</p>
        </div>
        <div slot="yes">
          <span class="next-text">{{remindArr[remindIndex].sureBtn}}</span>
          <span class="icon">></span>
        </div>
        <div slot="no">{{remindArr[remindIndex].rejectBtn}}</div>
      </popup>
    </div>
    <!-- 点击之后出现一个蒙版，导致组件不可以被点击 -->
    <div class="box" v-if="isBoxShow"></div>
  </div>
</template>

<script>
import store from "@/store";
import popup from "../common/popup";
import $ from "jquery";
import { mapState, mapMutations } from "vuex";

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
      remainNum: 0, //剩余字数
      isBoxShow: false,
      remindIndex: 0,
      remindArr: [
        {
          content1: "您的报名表尚未提交,",
          content2: "确认残忍离开吗QAQ",
          sureBtn: "继续报名",
          rejectBtn: "忍痛拒绝"
        },
        {
          content1: "您的报名表填写不完整,",
          content2: "请仔细检查哦",
          sureBtn: "继续报名"
        },
        {
          content1: "您的报名表已提交过一次了,",
          content2: "确认继续提交吗?",
          sureBtn: "继续提交",
          rejectBtn: "忍痛拒绝"
        },
        {
          content1: "提交信息未成功哦",
          content2: "重新提交QAQ",
          sureBtn: "继续报名"
        },
        {
          content1: "您的手机号未填写正确",
          content2: "不能提交哦QAQ",
          sureBtn: "继续填写"
        },
        {
          content1: "您的报名表已经修改且未提交",
          content2: "是否离开",
          sureBtn: "继续报名",
          rejectBtn: "忍痛离开"
        },
        {
          content1: "您的姓名尚未填写",
          content2: "不能提交哦QAQ",
          sureBtn: "继续报名"
        },
        {
          content1: "您的性别未勾选",
          content2: "不能提交哦QAQ",
          sureBtn: "继续报名"
        },
        {
          content1: "您的学号未填写",
          content2: "不能提交哦QAQ",
          sureBtn: "继续报名"
        },
        {
          content1: "您的专业班级未填写",
          content2: "不能提交哦QAQ",
          sureBtn: "继续报名"
        },
        {
          content1: "您的方向未选择",
          content2: "不能提交哦QAQ",
          sureBtn: "继续报名"
        },
        {
          content1: "您的自我介绍未填写",
          content2: "不能提交哦QAQ",
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
          value: "男",

          src: require("../../assets/male.png"),
          content: "♂"
        },
        {
          class: "female",
          id: "female",
          isRight: 0,
          value: "女",
          src: require("../../assets/female.png"),
          content: "♀"
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
      isRemindShow: false, //弹窗是否要出现
      count: 0,
      start: null,
      end: null
    };
  },
  watch: {
    "formData.introduce"() {
      let textLength = this.formData.introduce.length;
      if (textLength > 200) {
        this.formData.introduce = String(this.formData.introduce).slice(0, 200);
      } else {
        this.remainNum = textLength;
      }
    },
    formData: {
      handler(val) {
        if (val) {
          this.count++;
          console.log(this.count);
        }
      },
      deep: true
    },
    backStatus() {
      // 提交成功
      if (this.backStatus == 2) {
      }
    }
  },
  computed: {
    ...mapState(["isRoll"])
  },
  methods: {
    preventStart(e) {
      e.stopPropagation();
    },
    preventEnd(e) {
      e.stopPropagation();
    },
    preventMove(e) {
      e.stopPropagation();
    },
    // 整理数据
    collectingData() {
      let formData = JSON.stringify(this.formData);
      // 将学号，手机号转为数字型
      this.formData.studentid = parseInt(this.formData.studentid);
      this.formData.phone = parseInt(this.formData.phone);
      // this.formData.sex = 1;
      //  console.log(this.formData.studentid);
      // let arr = this.formData;
      // localStorage.setItem("formData", JSON.stringify(arr));

      // localStorage.setItem("SexIndex", this.SexIndex);
      // this.SexIndex = localStorage.getItem("SexIndex");

      // localStorage.setItem("DirIndex", this.DirIndex);
      // this.DirIndex = localStorage.getItem("DirIndex");

      // localStorage.setItem("isLocal", true);
    },
    // 存入localstoage
    takeInLocal() {
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
    // 点击后盖章，卡片翻转到正面且向父组件传值，使卡片缩小且飞向指定位置（之前的写法）
    roll2() {
      // 取消body上的监听事件
      document.body.removeEventListener("click", this._close);
      this.isSeel = 1;
      setTimeout(() => {
        // this.isAlive = false;
        // 1s后卡片翻转
        this.$store.commit("isRoll", false);
        this.isSmaller = this.dirArr[this.DirIndex].id;
        // this.$store.commit("isBlingShow", true);

        setTimeout(() => {
          this.$emit("smaller", this.isSmaller);
          // console.log(this.isSmaller);

          setTimeout(() => {
            this.$store.commit("chooseNum", this.isSmaller);
            this.$store.commit("isBlingShow", true);
            //动画执行完成后，报名表组件消失,所有动画清空
            setTimeout(() => {
              this.$emit("smaller", null);
              this.isSeel = 0;
              //  this.isAlive = true;
              this.$store.commit("isSubmitShow", false);
              this.$store.commit("isPostShow", false);
              setTimeout(() => {
                this.$store.commit("isLetterShow", true);
              }, 1000);
            });
          }, 3000);
        }, 1000);
      }, 1500);
    },
    //动画第一步——取消body上的监听事件+盖章
    takeSeel() {
      let that = this;
      return new Promise((resolve, reject) => {
        document.body.removeEventListener("click", this._close);
        this.removeSlide();
        this.isSeel = 1;
        resolve(1000);
        // resolve(800)
      });
    },
    // 第二步——卡片翻转并向vuex传值飞到哪个星球
    rollFly(ms) {
      let that = this;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.$store.commit("isRoll", false);
          this.isSmaller = this.dirArr[this.DirIndex].id;
          resolve(1000);
        }, ms);
      });
    },
    // 第三步——向父组件传值飞到哪个星球,3s后对应的星球才发亮，resolve(3000)
    flyStar(ms) {
      let that = this;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.$emit("smaller", this.isSmaller);
          resolve(3000);
        }, ms);
      });
    },
    // 第四步——对应的星球发亮
    starBling(ms) {
      let that = this;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.$store.commit("chooseNum", this.isSmaller);

          // 修改后如下
          // this.$emit("smaller", null);
          // this.$store.commit("isSubmitShow", false);
          // this.isSeel = 0;
          // this.$store.commit("isPostShow", false);
          // this.isBoxShow=false;
          this.$store.commit("isBlingShow", true);
          resolve(1000);
        }, ms);
      });
    },
    // 第五步——动画执行完成后，该组件消失
    destroyCom(ms) {
      let that = this;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.$emit("smaller", null);
          this.isSeel = 0;
          this.$store.commit("isSubmitShow", false);
          this.$store.commit("isPostShow", false);
          this.$store.commit("isBlingShow", false);
          resolve(300);
        }, ms);
      });
    },
    // 第六步——组件消失后，首页出现信封
    letterAppear(ms) {
      let that = this;
      return new Promise(() => {
        setTimeout(() => {
          //this.$store.commit("isBlingShow", false);
          this.$store.commit("isLetterShow", true);
          //  resolve();
        }, ms);
      });
    },
    // 定义动画全过程
    myAnimation() {
      this.takeSeel()
        .then(this.rollFly)
        .then(this.flyStar)
        .then(this.starBling)
        .then(this.destroyCom)
        .then(this.letterAppear);
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
      if (
        this.formData.name == "" ||
        this.formData.name.replace(/(^\s*)|(\s*$)/g, "") == ""
      ) {
        this.remindIndex = 6;
        return true;
      }
      if (this.formData.sex == "") {
        // console.log("请选择性别");
        this.remindIndex = 7;
        return true;
      }
      console.log(this.formData.studentid);

      if (
        this.formData.studentid == "" ||this.formData.studentid==null
      ) {
        this.remindIndex = 8;
        return true;
      }
      if (
        this.formData.college == "" ||
        this.formData.college.replace(/(^\s*)|(\s*$)/g, "") == ""
      ) {
        this.remindIndex = 9;
        return true;
      }
      if (!this.judgePhoneNo(this.formData.phone)) {
        // console.log("请输入正确的手机号");
        this.remindIndex = 4;
        return true;
      }
      if (this.formData.intention == "") {
        this.remindIndex = 10;
        // console.log("请选择方向！");

        return true;
      }
      if (
        this.formData.introduce == "" ||
        this.formData.introduce.replace(/(^\s*)|(\s*$)/g, "") == ""
      ) {
        this.remindIndex = 11;
        return true;
      }
    },
    submit() {
      // this.judgeInsure();
      // 输入不合法时,提示框出现，显示报名表是否填写完整
      console.log(this.judgeInsure());

      console.log(this.formData.sex);

      if (this.judgeInsure()) {
        // this.remindIndex = 1;
        this.isRemindShow = true;
      }
      // 当输入合法时，判断是第一次提交还是第二次以上提交
      else {
        this.submitForm();
        // 后台返回一个状态码，如果成功则先盖章后卡片翻转，不成功则提醒
      }
    },
    moreSubmit() {
      this.$axios.post("/update", this.formData).then(res => {
        this.backStatus = res.data.code;
        if (this.backStatus == 5) {
          // 当存入数据库失败时
          this.isRemindShow = true;
          this.remindIndex = 3;
        } else {
          // this.$store.commit("status",this.backStatus)
          localStorage.setItem("status", this.backStatus);
          this.isBoxShow = true;
          this.myAnimation();
          this.takeInLocal();
        }
        console.log(this.remindIndex);
      });
    },
    submitForm() {
      // 先整理数据
      this.collectingData();

      //axios
      this.$axios.post("/new", this.formData).then(res => {
        this.backStatus = res.data.code;
        if (this.backStatus == 2) {
          // this.$store.commit("status",this.backStatus)
          localStorage.setItem("status", this.backStatus);
          this.isBoxShow = true;
          this.myAnimation();
          this.takeInLocal();
        } else if (this.backStatus == 4) {
          // this.moreSubmit();
          this.isRemindShow = true;
          this.remindIndex = 2;
        } else if (this.backStatus == 5) {
          // 当存入数据库失败时
          this.isRemindShow = true;
          this.remindIndex = 3;
        }
        console.log(this.remindIndex);
      });
    },
    yes() {
      console.log(this.remindIndex);
      this.isRemindShow = false;
      if (this.remindIndex == 2) this.moreSubmit(); //如果是继续提交按钮被点击，则触发这个方法
    },
    no() {
      this.isRemindShow = false;
      console.log(this.remindIndex);

      // 修改了不保存+未提交不保存 点击拒绝，组件消失
      if (this.remindIndex == 0 || this.remindIndex == 5) {
        // 报名表这个组件消失
        this.$store.commit("isSubmitShow", false);
        this.$store.commit("isPostShow", false);
        this.$store.commit("isLetterShow", true);
        this.$store.commit("isRoll", 0);
      }
    },
    // 获取localstorge的值,渲染到表单上
    getLocal() {
      this.isLocal = localStorage.getItem("isLocal");
      if (this.isLocal) {
        this.formData = JSON.parse(localStorage.getItem("formData"));
        this.SexIndex = localStorage.getItem("SexIndex");
        this.DirIndex = localStorage.getItem("DirIndex");
        var sexArr = this.sexArr;
        sexArr[this.SexIndex].isRight = true;
        var dirArr = this.dirArr;
        dirArr[this.DirIndex].isRight = true;
      }
    },
    iosInput() {
      let ua = window.navigator.userAgent;
      let app = window.navigator.appVersion;
      //$alert('浏览器版本: ' + app + '\n' + '用户代理: ' + ua);
      if (!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        // alert('ios端');
        $("input,textarea").on("blur", function() {
          var currentPosition, timer;
          var speed = 1;
          timer = setInterval(function() {
            currentPosition =
              document.documentElement.scrollTop || document.body.scrollTop;
            currentPosition -= speed;
            window.scrollTo(0, currentPosition); //页面向上滚动
            currentPosition += speed;
            window.scrollTo(0, currentPosition); //页面向下滚动
            clearInterval(timer);
          }, 100);
        });
      } else if (ua.indexOf("Android") > -1 || ua.indexOf("Adr") > -1) {
        // alert('android端');
      }
    },
    InputStop() {
      $("input,textarea").on("touchstart,touchmove,touchend", function(event) {
        console.log("....");

        event.stopPropagation();
      });
    },
    showPopUp() {
      let status = localStorage.getItem("status");
      // 未提交时
      if (status != 2) {
        this.isRemindShow = true; //如果点击了则弹窗出现
        this.remindIndex = 0;
        return;
      }

      // 提交过后修改表单
      if (this.count > 1) {
        this.isRemindShow = true; //如果点击了则弹窗出现
        this.remindIndex = 5;
        return;
      }
      // 当提交成功时，点击外层组件直接消失
      if (status == 2 && this.count <= 1) {
        this.$store.commit("isSubmitShow", false);
        this.$store.commit("isPostShow", false);
        // this.isAlive=false;
        this.$store.commit("isLetterShow", true);
        this.$store.commit("isRoll", 0);
      }
      // this.$store.commit("isSubmitShow", false);
      // this.$store.commit("isPostShow", false);
      // // this.isAlive=false;
      // this.$store.commit("isLetterShow", true);
      // this.$store.commit("isRoll", 0);
    },
    slideCancel() {
      // let start, end;
      this._takeStart = e => {
        this.start = e.touches[0].clientY;
        console.log(e.touches[0]);
      };
      this._takeEnd = e => {
        this.end = e.touches[0].clientY;
        console.log(e.touches[0]);
      };

      // console.log(this.start);

      this._show = e => {
        if (
          this.start &&
          this.end &&
          (this.start - this.end > 30 || this.end - this.start > 30)
        ) {
          this.start = null;
          this.end = null;
          this.showPopUp();

          // console.log(this.start - this.end);
          // console.log(this.start - this.end);
        }
      };
      this.$refs.all.addEventListener("touchstart", this._takeStart);
      this.$refs.all.addEventListener("touchmove", this._takeEnd);
      this.$refs.all.addEventListener("touchend", this._show);
    },
    removeSlide() {
      this.$refs.all.removeEventListener("touchstart", this._takeStart);
      this.$refs.all.removeEventListener("touchmove", this._takeEnd);
      this.$refs.all.removeEventListener("touchend", this._show);
    }
  },
  mounted() {
    this.getLocal();
    this.iosInput();
    this.InputStop();
  },
  beforeMount() {
    this.InputStop();
    this._close = e => {
      // 如果点击发生在当前组件内部，则不处理
      if (this.$el.contains(e.target)) {
        return;
      }
      this.showPopUp();
    };

    // 两秒之后转到报名页面才监听事件
    setTimeout(() => {
      document.body.addEventListener("click", this._close);
      this.slideCancel();
    }, 2000);
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
.icon {
  font-size: 5.5vw;
  font-weight: 300;
  vertical-align: middle;
}
.next-text {
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
  /* opacity: 0; */
  display: none;
  cursor: pointer;
}
.seal {
  position: absolute;
  right: 2vw;
  top: 12vw;
  width: 27vw;
  display: block;
  /* animation: fadeInOpacity 0.3s forwards, fadeInBig 0.3s 0.3s forwards; */
  opacity: 0;
  animation: fadeSeal 0.6s forwards;
  z-index: 10;
}
@keyframes fadeSeal {
  0% {
    opacity: 0;
    transform: scale(1.6);
  }
  50% {
    opacity: 1;
    transform: scale(1.6);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes fadeInOpacity {
  0% {
    opacity: 0;
    transform: scale(1.6);
  }
  100% {
    opacity: 1;
    transform: scale(1.6);
  }
}
@keyframes fadeInBig {
  0% {
    transform: scale(1.6);
  }
  100% {
    transform: scale(1);
  }
}
.postcard {
  position: absolute;
  width: 90vw;
  height: 135vw;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #282828;
}
.pic {
  width: 90%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 4vw);
}
.post-text {
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 28vw);
}
.post-name {
  width: 21%;
  position: absolute;
  top: 50%;
  right: 6%;
  transform: translateY(36vw);
}
input {
  color: #282828;
  font-size: 24px;
}
.front,
.back {
  width: 100%;
  height: 135vw;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 1s;
  background: url("http://recruit.zqyy.site/postcard.png") no-repeat;
  background-size: 100% 100%;
  backface-visibility: hidden;
}
.front {
  z-index: 200;
}
.back {
  transform: rotateY(180deg);
  padding: 3vw 6vw;
  box-sizing: border-box;
}
.top {
  width: 36vw;
  margin-left: -10px;
}
.bottom {
  font-size: 20px;
  bottom: 2vw;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.form {
  /* transform: translateY(-8px); */
  position: relative;
  top: -8px;
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
  width: 20vw;
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
  /* height: 24px;
  line-height: 24px; */
  margin-right: 9vw;
}
.male img {
  width: 12.5px;
  display: inline-block;
  vertical-align: top;
}
.female img {
  width: 15px;
  display: inline-block;
  vertical-align: top;
}
.sex {
  display: inline-block;
  margin-left: 5vw;
  vertical-align: middle;
}
.name-container {
  display: inline-block;
  vertical-align: middle;
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
  border: 2px solid #4b3b36;
  border-radius: 50%;
  cursor: pointer;
  transform: scale(0.5);
  display: inline-block;
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
  cursor: pointer;
  outline: none;
  z-index: 3;
  transform: scale(0.5);
  display: inline-block;
  /* vertical-align: top; */
}
.direction label {
  display: inline-block;
  /* vertical-align: middle; */
}
.direction span,
.direction input {
  margin-left: 36px;
  display: inline-block;
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
  transform: scale(2);
  left: 2.2vw;
  top: 2vw;
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
  display: inline-block;
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
  position: relative;
}
.self textarea {
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  font-size: 22px;
  color: #282828;
  line-height: 28px;
  /* overflow: scroll; */
}
textarea ::-webkit-scrollbar {
  width: 30px;
}
.remain {
  position: absolute;
  right: 1vw;
  bottom: 1vw;
  font-size: 16px;
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
.submit:active {
  opacity: 0.9;
}
.direction-container {
  display: inline-block;
  margin-left: 5.4vw;
}
.box {
  width: 100%;
  height: 100%;
  z-index: 1000;
  position: absolute;
}
.stop {
  width: 70%;
  left: 0;
  right: 0;
  margin: auto;
  position: relative;
  top: 150px;
  font-size: 32px;
}
</style>