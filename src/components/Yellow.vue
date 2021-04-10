<template>
  <div class ="containter">
    <base-light :class="{ 'red': red, 'red-off': !red }"/>
    <base-light :class="{ 'yellow': yellow, 'yellow-off': !yellow, 'yellow-flickering': flicking }"/>
    <base-light :class="{ 'green': green, 'green-off': !green }"/>
    <div>{{timerDuration}}</div>
  </div>
</template>

<script>
import BaseLight from './BaseLight.vue'

export default {
  components: { 
      BaseLight 
      },
  name: 'Yellow',

  beforeCreate() {

      this.$store.commit('setPrevLight');
      this.$store.commit('switchOff');
      this.$store.commit('switchOn', 'yellowLight');
      this.$store.commit('setActiveLight');
      this.$store.commit('setNextLight');

      sessionStorage.getItem('activeLight') == 'yellowLight' &&
      sessionStorage.getItem('timer') > 0 ?
      this.$store.commit('setRemainDurationFromStorage') :
      this.$store.commit('setRemainDuration', 'yellowLight');
  },

  mounted() {
      this.$store.commit('timerCountDown');

  },

  updated() {
    if (this.timerDuration == 0) {
      this.$router.push(this.nextPath)
    }
  },

  computed: {
      red() {
          return this.$store.getters.lightStatus('redLight')
      },
      green() {
          return this.$store.getters.lightStatus('greenLight')
      },
      yellow() {
          return this.$store.getters.lightStatus('yellowLight')
      },
      timerDuration() {
          return this.$store.getters.duration
      },
      nextPath() {
          return this.$store.getters.path
      },
      flicking() {
        return this.timerDuration <= 3
      }
  }  
}
</script>