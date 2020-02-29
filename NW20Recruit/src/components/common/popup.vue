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
    </div>
  </div>
</template>

<script>
export default {
  name: "popup",
  props:{
    remindShow:{
      type:Boolean,
      default:false,
      required:true
    }
  },
  methods:{
    yes(){
      this.$emit("yes");
    },
    no(){
      this.$emit("no")
    }
  }
};
</script>

<style scoped>
.popup {
  background: url("../../assets/cancelBg.png") no-repeat;
  background-size: 100% 100%;
  width: 78vw;
    height: 78vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color:#333333;

}
.content{
  text-align: center;
  
}
.text{
      transform: translateY(20vw);
      font-size: 28px;
      letter-spacing: 1px;
      width: 68%;
      margin: 0 auto;
}
.text p{
  line-height: 8vw
}
.yes{
  width: 24vw;
  border-radius: 30px;
    padding:6px;
  background: #665bb8;
  border: 1px solid #37315f;
  color:white;
  font-size: 30px;
  margin: 0 auto;
  transform: translateY(30vw);
   box-shadow: 0px 9px 0px rgba(219, 31, 5, 1), 0px 9px 25px rgba(0, 0, 0, .7);

}
.no{
  font-size: 12px;
  color: gray;
  transform: translateY(32vw)
}
</style>