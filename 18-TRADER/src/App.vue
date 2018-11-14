<template>
  <div id="app">
    <app-header></app-header>
    <transition name="slide" mode="out-in">
      <router-view/>
    </transition>

  </div>
</template>

<script>
  import Header from './components/Header';
  export default {
    components: {
      appHeader: Header
    },
    created() {
      this.$store.dispatch('initStocks');
    }
  }
</script>

<style>
  body {
    padding: 4.5rem 1.5rem;
    min-height: 75rem;
  }

  .slide-enter { transform: translateX(100%) }
  .slide-enter-to { transform: translateX(0) }
  .slide-enter-active { position: absolute }

  .slide-leave { transform: translateX(0) }
  .slide-leave-to { transform: translateX(-100%) }

  .slide-enter-active,
  .slide-leave-active { transition: all 250ms ease-in-out }
</style>
