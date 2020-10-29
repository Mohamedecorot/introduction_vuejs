<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <counter></counter>
  </div>
</template>

<script>
import counter from './Counter.vue'

export default {
  components: { counter },
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
