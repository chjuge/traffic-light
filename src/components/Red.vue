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
import mixin from '../mixins/mixin.js'

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

      sessionStorage.getItem('activeLight') == 'redLight' 
      && sessionStorage.getItem('timer') > 0 
      ? this.$store.commit('setRemainDurationFromStorage') 
      : this.$store.commit('setRemainDuration', 'redLight');
  },

  mixins: [mixin],
}
</script>