<template>
    <svg
    height="7vw"
    width="18vw" 
    @click="bbbbbb" 
        >
          <text id="svg-text" 
          dx="130 40 30 20"
          x="0" y="5.2vw"
          >欢迎进入
          <animate
            attributeType = "XML"
            attributeName = "dx"
            from= "130 40 30 20 0"
            to="0 0 0 0 0"
            dur="1s"
            fill="freeze"
          ></animate>
          </text>
    </svg>
</template>

<script>
export default {
  name: 'WelcomeSvg',
  props: {
      aaaaaaa: false
  },
  data() {
      return {
          aaa: false,
          svgshow: false,
      }
  },
  methods: {
      bbbbbb () {
          console.log('aaaaa');
          
          this.aaa = true
      }
  },
  mounted() {
      setTimeout(()=> {
          this.svgshow = true
      },2000)
  },
}
</script>

<style scoped>
#svg-text {
    fill: #afaa95;
    /* dominant-baseline:middle; */
}
</style>
