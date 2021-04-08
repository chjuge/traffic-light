<template>
    <base-light />
</template>

<script>
import BaseLight from './BaseLight.vue'
export default {
  components: { 
      BaseLight 
      },
    name: 'Red',
    props: {
        data() {
            this.color = 'red';
        }
    },
}
</script>

<style scoped> 
.red {
 background: rgba(255,0,0,1);
}
.red-off {
 background: rgba(255,0,0,.3);
}
</style>