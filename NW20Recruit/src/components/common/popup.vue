<template>
  <div class="popup-container">
    <!-- 外层遮罩 -->
    <div class="popup" v-if="remindShow">
      <div class="content">
        <div class="text">
          <!-- 弹窗的提示信息 -->
          <slot name="main">提示信息</slot>
        </div>
        <div class="yes" @touchstart="yes1($event)" @touchend="yes2($event)">
          <slot name="yes">确认按钮</slot>
        </div>
        <div class="no"  @touchstart="no1($event)" @touchend="no2($event)">
          <slot name="no">取消按钮</slot>
        </div>
      </div>
      <!-- <div class="filter" v-show="isFilterShow"></div> -->
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import store from "@/store";
export default {
  name: "popup",
  props: {
    remindShow: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  data() {
    return {
      // isFilterShow:true
    };
  },
  methods: {
    yes() {
      var that = this;
      $(".yes")
        .on("touchstart", function() {
          $(this).addClass("yes2");
          that.$store.commit("isFilterShow", true);
        })
        .on("touchend", function() {
          $(this).removeClass("yes2");
          that.$store.commit("isFilterShow", false);
          setTimeout(() => {
            that.$emit("yes");
          }, 300);
        });
    },
    yes1(e){
      var that = this;
      $(".yes").addClass("yes2");
         that.$store.commit("isFilterShow", true);
      e.stopPropagation();
    },
    yes2(e){
      e.stopPropagation();
      var that = this;
      $(".yes").removeClass("yes2");
          that.$store.commit("isFilterShow", false);
          setTimeout(() => {
            that.$emit("yes");
          }, 300);
    },
    no1(e){
      e.stopPropagation();
    },
    no2(e){
      e.stopPropagation();
       this.$emit("no");
    },
    no() {
      this.$emit("no");
    }
  }
};
</script>

<style scoped>
.test {
  background: red;
  position: relative;
  z-index: 10000;
}
.popup {
  background: url("http://recruit.zqyy.site/cancelBg.png") no-repeat;
  background-size: 100% 100%;
  width: 78vw;
  height: 78vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #333333;
}
.content {
  text-align: center;
}
.text {
  transform: translateY(20vw);
  font-size: 28px;
  letter-spacing: 1px;
  width: 68%;
  margin: 0 auto;
}
.text p {
  line-height: 8vw;
}
.yes {
  width: 26vw;
  border-radius: 34px;
  padding:1vw 1.4vw;
  padding-left: 1.6vw;
  background: #665bb8;
  border: .5px solid #37315f;
  color: white;
  /* font-size: 34px; */
  font-size: 0;
  margin: 0 auto;
  transform: translateY(26vw);
  box-shadow: 5px 3px, 5px 3px 0 .5px #37315f;
  position: relative;
  height: 7vw;
}
.yes div{
  line-height: 7vw
}
.yes2 {
  background: white;
  color: #665bb8;
  box-shadow: #665bb8 5px 3px, 5px 3px .5px #37315f;
}
.no {
  font-size: 22px;
  color: #666666;
  transform: translateY(30vw);
}
/* .filter{
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
} */
</style>