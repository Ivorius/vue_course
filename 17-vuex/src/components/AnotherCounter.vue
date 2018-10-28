<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by: 100, duration: 500})">Async Increment * 100</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 50, duration: 500})">Async Decrement * 50</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        methods: {

          //ručně
          // increment(by) {
          //   this.$store.dispatch('increment', by)
          // },

          //automaticky pořeší mapAcctionss
          ...mapActions([
            'asyncIncrement',
            'asyncDecrement'
          ])
        }

    }
</script>