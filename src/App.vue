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

.round {
  width: 10em;
  height: 10em;
  border-radius: 50%;
  border: black solid 2px;
  line-height: 10em;  /* подробнее про line-height */
  text-align: center;  /* выравнять текст по середине по горизонтали */
}

.containter {
 border: black solid 2px;
}

@keyframes flickering-red {
 from { background: rgba(255,0,0,1); }
 50% { background: rgba(255,0,0,.2); }
 to { background: rgba(255,0,0,1); }
}
@keyframes flickering-yellow {
 from {  background: rgba(255,255,0,1); }
 50% {  background: rgba(255,255,0,.2); }
 to {  background: rgba(255,255,0,1); }
}
@keyframes flickering-green {
 from { background: rgba(0,255,0,1); }
 50% { background: rgba(255,255,0,.2) }
 to { background: rgba(0,255,0,1); }
}

.red {
 background: rgba(255,0,0,1);
}
.red-off {
 background: rgba(255,0,0,.2);
}
.red-flickering {
 animation-name: flickering-red;
 animation-duration: 480ms;
 animation-timing-function: linear;
 animation-iteration-count: infinite;
}

.yellow {
 background: rgba(255,255,0,1)
}
.yellow-off {
 background: rgba(255,255,0,.2)
}
.yellow-flickering {
 animation-name: flickering-yellow;
 animation-duration: 480ms;
 animation-timing-function: linear;
 animation-iteration-count: infinite;
}

.green {
  background: rgba(0,255,0,1);
}
.green-off {
  background: rgba(0,255,0,.2);
}
.green-flickering {
 animation-name: flickering-green;
 animation-duration: 480ms;
 animation-timing-function: linear;
 animation-iteration-count: infinite;
}

</style>
