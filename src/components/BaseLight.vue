<template>
    <div class = "round red yellow-off green-off"> {{ timer }}</div>
</template>

<script>
export default {
    name: 'BaseLight',
    props: {

    },
    data() {
        this.timer = "Таймер";
    }
}
</script>

<style> 
    .round {
  width: 15em;
  height: 15em;
  border-radius: 50%;
  line-height: 15em;  /* подробнее про line-height */
  text-align: center;  /* выравнять текст по середине по горизонтали */
}
</style>