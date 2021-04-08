<template>
    <base-light />
</template>

<script>
import BaseLight from './BaseLight.vue'
export default {
  components: { 
      BaseLight 
      },
    name: 'Yellow',
    props: {
        data() {
            this.color = 'yellow';
        }
    },
}
</script>

<style scoped> 
.yellow {
 background: rgba(255,255,0,1)
}
.yellow-off {
 background: rgba(255,255,0,.3)
}
</style>