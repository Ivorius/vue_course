<template>
    <div>
        <p>2 * Counter is: {{ doubleCounter }}</p>
        <p>Number of clicks {{ stringCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
  export default {
    // Ručně mohu takto
    // computed: {
    //   doubleCounter() {
    //     return this.$store.getters.doubleCounter;
    //   },
    //   stringCounter() {
    //     return this.$store.getters.stringCounter;
    //   }
    // }

    //nebo použít helper z vuex
    computed: {
        //... spread operator
        ...mapGetters([ //umožnuje použít i vlastní pojmenování z objektu
          'doubleCounter', 'stringCounter'
        ])
    }
  }
</script>

<style scoped>

</style>