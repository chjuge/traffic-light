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
import mixin from '../mixins/mixin.js'

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

      sessionStorage.getItem('activeLight') == 'yellowLight' 
      && sessionStorage.getItem('timer') > 0 
      ? this.$store.commit('setRemainDurationFromStorage') 
      : this.$store.commit('setRemainDuration', 'yellowLight');
  },

  mixins: [mixin],
}
</script>