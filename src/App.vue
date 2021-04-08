<template>
  <div id="app">
    <Red />
    <Yellow />
    <Green />
  </div>
</template>

<script>
import Green from './components/Green.vue'
import Red from './components/Red.vue'
import Yellow from './components/Yellow.vue'


export default {
  name: 'App',
  components: {
    Red,
    Yellow,
    Green
  }
}
</script>

<style>
#app {
  display: flex;
  justify-content: center;
}
</style>
