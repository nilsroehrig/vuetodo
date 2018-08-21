<template>
  <div id="app">
    <router-view/>
    <div class="app-footer">
      <a href="https://dribbble.com/shots/2359452-To-do">Design</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-weight: 300;
  font-size: 1.25em;
}

.app-footer {
  margin: 0.5em 0;
  font-size: 0.75em;
}
</style>
