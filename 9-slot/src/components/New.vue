<template>
    <div>
        <h3>New quote</h3>
        <button @click="counter++">Increase</button>
        <p>{{ counter }}</p>
    </div>
</template>

<script>
  export default {
    name: "New",
    data: function() {
      return {
        counter: 0
      };
    },
    destroyed() {
      console.log('destroyed! Only without keep-alive');
    },
    deactivated() {
      console.log('deactivated');
    },
    activated() {
      console.log('ativated');
    }
  }
</script>

<style scoped>

</style>