<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 33" width="34" height="33">
    <g>
      <path class="checkbox" d="M0,10v13c0,5.52 4.48,10 10,10h13c5.52,0 10,-4.48 10,-10v-13c0,-5.52 -4.48,-10 -10,-10h-13c-5.52,0 -10,4.48 -10,10z" />
      <path v-if="tick" class="tick" d="M27.25,12.25c0.48,-0.47 0.75,-1.1 0.75,-1.76c0,-0.66 -0.27,-1.29 -0.75,-1.76c-1,-0.97 -2.62,-0.97 -3.61,0l-9.04,8.81c-0.25,0.25 -0.66,0.25 -0.91,0l-3.34,-3.25c-1,-0.97 -2.62,-0.97 -3.61,0c-1,0.97 -1,2.55 0,3.52l5.6,5.46c1,0.97 2.62,0.97 3.61,0z" />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    tick: Boolean
  }
}
</script>

<style scoped>
  tspan { white-space:pre }
  .checkbox { fill: #ffffff;stroke: #e9e9e9;stroke-width: 3 }
  .tick { fill: #75cd57 }
</style>
