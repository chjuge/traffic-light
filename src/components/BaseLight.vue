<template>
    <div class = "round" />
</template>

<script>
export default {
    name: 'BaseLight',
}
</script>

<style> 
.round {
  width: 10em;
  height: 10em;
  border-radius: 50%;
  line-height: 10em;  /* подробнее про line-height */
  text-align: center;  /* выравнять текст по середине по горизонтали */
}

.containter {
 border: black solid 2px;
}

.red {
 background: rgba(255,0,0,1);
}
.red-off {
 background: rgba(255,0,0,.3);
}

.yellow {
 background: rgba(255,255,0,1)
}
.yellow-off {
 background: rgba(255,255,0,.3)
}
.green {
  background: rgba(0,255,0,1);
}
.green-off {
  background: rgba(0,255,0,.5);
}

</style>
