<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    export default {
        computed: {
          counter() {
            //pokud to je ve store.js
            //return this.$store.getters.counter;

            //pokud je to v modulu
            return this.$store.getters['counter/getCounter'];
          }
        }
    }
</script>