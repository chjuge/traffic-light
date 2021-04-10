<template>
  <div class ="containter">
    <base-light :class="{ 'red': red, 'red-off': !red }"/>
    <base-light :class="{ 'yellow': yellow, 'yellow-off': !yellow }"/>
    <base-light :class="{ 'green': green, 'green-off': !green, 'green-flickering': flicking }"/>
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
  name: 'Green',

  beforeCreate() {

      this.$store.commit('setPrevLight');
      this.$store.commit('switchOff');
      this.$store.commit('switchOn', 'greenLight');
      this.$store.commit('setActiveLight');
      this.$store.commit('setNextLight');

      sessionStorage.getItem('activeLight') == 'greenLight' 
      && sessionStorage.getItem('timer') > 0 
      ? this.$store.commit('setRemainDurationFromStorage') 
      : this.$store.commit('setRemainDuration', 'greenLight');
  },

  mixins: [mixin],
}
</script>