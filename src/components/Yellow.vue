<template>
  <div class ="containter">
    <base-light :class="{ 'red': red, 'red-off': !red }"/>
    <base-light :class="{ 'yellow': yellow, 'yellow-off': !yellow }"/>
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
          return this.$store.getters.duration('yellowLight')
      }
  }  
}
</script>