<template>
    <svg
    width="33vw" 
    height="7vw"
        >
          <text id="svg-text" 
          x="0" y="5.2vw"
          dy="-20 -25 -28 -31 -34 -37 -40 -43 -46 -49 -50 -53 -56"
          >Night'<tspan>s</tspan>Watch
          <animate
            id="drop1"
            attributeType = "XML"
            attributeName = "dy"
            from= "-20 -25 -28 -31 -34 -37 -40 -43 -46 -49 -50 -53 -56"
            to="0 0 -3 -6 -9 -12 -15 -18 -21 -24 -27 -30 -34 "
            dur="0.5s"
          ></animate>
        <animate
            id="drop2"
            attributeType = "XML"
            attributeName = "dy"
            begin="drop1.end"
            from= "0 0 -3 -6 -9 -12 -15 -18 -21 -24 -27 -30 -34 "
            to="0 0 0 0 0 -3 -6 -9 -12 -15 -18 -21 "
            dur="0.5s"
          ></animate>
        <animate
            id="drop3"
            attributeType = "XML"
            attributeName = "dy"
            begin="drop2.end"
            from= "0 0 0 0 0 -3 -6 -9 -12 -15 -18 -21 "
            to="0 0 0 0 0 0 0 0 -3 -6 -9 -12 -15 "
            dur="0.5s"
          ></animate>
        <animate
            id="drop4"
            attributeType = "XML"
            attributeName = "dy"
            begin="drop3.end"
            from= "0 0 0 0 0 0 0 0 -3 -6 -9 -12 -15 "
            to="0 0 0 0 0 0 0 0 0 0 0 -3 -6"
            dur="0.5s"
          ></animate>
        <animate
            id="drop5"
            attributeType = "XML"
            attributeName = "dy"
            begin="drop4.end"
            from= "0 0 0 0 0 0 0 0 0 0 0 -3 -6"
            to="0 0 0 0 0 0 0 0 0 0 0 0 0"
            dur="0.5s"
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
    font-size: 4.533vw;
}
#svg-text tspan {
    letter-spacing: 0.9vw;
}
</style>
