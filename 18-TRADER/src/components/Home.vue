<template>
  <div class="home">
    <h1>Tradde or view your portfolie</h1>
    <h5>You may save & load data</h5>
    <h6>Click on 'End day' to begin a New day!</h6>
    <hr>
    <p>Your Funds: {{ funds | currency }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
}
</script>
