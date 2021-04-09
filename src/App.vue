<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    // this.$router.push("/red")
  },
  methods: {
    timer(duration, remainder) {
      remainder = duration;
      
      setTimeout(function tick() {
        if (remainder > 0) {
          // console.log(remainder);
          setTimeout(tick, 1000);
        }
        remainder--;
      }, 1000)
    }
  }
}
</script>

<style>
#app {
  display: flex;
  justify-content: center;
}
</style>
