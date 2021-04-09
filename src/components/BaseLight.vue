<template>
    <div 
    class = "round green" 
    :class = "{'red': red, 'red-off': !red, 'yellow': yellow, 'yellow-off': !yellow, 'green': green, 'green-off': !green }"
    > {{ timer }}</div>
</template>

<script>
export default {
    name: 'BaseLight',
}
</script>

<style> 
    .round {
  width: 15em;
  height: 15em;
  border-radius: 50%;
  border: black;
  line-height: 15em;  /* подробнее про line-height */
  text-align: center;  /* выравнять текст по середине по горизонтали */
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