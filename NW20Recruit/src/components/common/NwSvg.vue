<template>
    <svg
    width="13ch" 
        >
          <text id="svg-text" 
          x="0" y="4vw"
          dy="-20 -25 -28 -31 -34 -37 -40 -43 -46 -49 -50 -53 -56"
          >Night' sWatch
          <animate
            attributeType = "XML"
            attributeName = "dy"
            from= "-20 -25 -28 -31 -34 -37 -40 -43 -46 -49 -50 -53 -56"
            to="0 0 0 0 0 0 0 0 0 0 0 0 0 "
            dur="2s"
            fill="freeze"
          ></animate>
          </text>
    </svg>
</template>

<script>
export default {
  name: 'NwSvg',
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
    font-family: monospace;
}
</style>
