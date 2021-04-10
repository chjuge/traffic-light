<template>
  <div class ="containter">
    <base-light :class="{ 'red':red, 'red-off': !red, 'red-flickering': flicking }"/>
    <base-light :class="{ 'yellow':yellow, 'yellow-off': !yellow }"/>
    <base-light :class="{ 'green':green, 'green-off': !green }"/>
    <div>{{timerDuration}}</div>
  </div>
</template>

<script>
import BaseLight from './BaseLight.vue'

export default {
  components: { 
      BaseLight 
      },
  name: 'Red',
 
  beforeCreate() {

      this.$store.commit('setPrevLight');
      this.$store.commit('switchOff');
      this.$store.commit('switchOn', 'redLight');
      this.$store.commit('setActiveLight');
      this.$store.commit('setNextLight');

      sessionStorage.getItem('activeLight') == 'redLight' &&
      sessionStorage.getItem('timer') > 0 ?
      this.$store.commit('setRemainDurationFromStorage') :
      this.$store.commit('setRemainDuration', 'redLight');

  },

  mounted() {
      this.$store.commit('timerCountDown');

  },

  updated() {
    if (this.timerDuration == 0) {
      this.$router.push(this.nextPath);
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