<template>
    <base-light />
</template>

<script>
import BaseLight from './BaseLight.vue'
export default {
  components: { 
      BaseLight 
      },
    name: 'Green',
    props: {
        
    },
}
</script>

<style scoped> 
.green {
  background: rgba(0,255,0,1);
}
.green-off {
  background: rgba(0,255,0,.5);
}
</style>