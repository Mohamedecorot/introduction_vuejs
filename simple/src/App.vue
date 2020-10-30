<template>
  <div id="app">
    <img src="./assets/logo.png">
    <alert></alert>
  </div>
</template>

<script>
import alert from './alert.vue'
export default {
  components: { alert },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>