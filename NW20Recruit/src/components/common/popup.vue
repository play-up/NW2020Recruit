<template>
  <div class="popup-container">
    <!-- 外层遮罩 -->
    <div class="popup" v-if="remindShow">
      <div class="content">
        <div class="text">
          <!-- 弹窗的提示信息 -->
          <slot name="main">提示信息</slot>
        </div>
        <div class="yes" @click="yes">
          <slot name="yes">确认按钮</slot>
        </div>
        <div class="no" @click="no">
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
  background: url("../../assets/cancelBg.png") no-repeat;
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
  width: 24vw;
  border-radius: 30px;
  padding: 6px;
  background: #665bb8;
  border: 1px solid #37315f;
  color: white;
  font-size: 30px;
  margin: 0 auto;
  transform: translateY(30vw);
  box-shadow: 4px 2px, 4px 2px 1px #37315f;
}
/* .yes:active {
  width: 24vw;
  border-radius: 30px;
  padding:6px;
  background: white;
  border: .5px solid #665bb8;
  color:#665bb8;
  font-size: 30px;
  margin: 0 auto;
  transform: translateY(30vw);
  box-shadow: #665bb8 4px 2px , 4px 2px 1px #37315f
  } */
.yes2 {
  width: 24vw;
  border-radius: 30px;
  padding: 6px;
  background: white;
  border: 0.5px solid #665bb8;
  color: #665bb8;
  font-size: 30px;
  margin: 0 auto;
  transform: translateY(30vw);
  box-shadow: #665bb8 4px 2px, 4px 2px 1px #37315f;
}
.no {
  font-size: 12px;
  color: gray;
  transform: translateY(32vw);
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