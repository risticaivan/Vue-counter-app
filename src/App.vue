<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Counter />
  <History />
</template>

<script>
import Counter from './components/Counter.vue';
import History from './components/History.vue'

export default {
  components: { 
    Counter,
    History
  },
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

img {
  width: 120px;
  height: 120px;
}
</style>
