<template>
    <li
            class="list-group-item"
            style="cursor:pointer"
            @click="serverSelected"
    >
        Server #{{ server.id }} - status {{ server.status }}
    </li>

</template>

<script>
    import {serverBus} from '../../main.js'

  export default {
    props: ['server'],
    methods: {
      serverSelected() {
        serverBus.$emit('serverSelectEvent', this.server);
      }
    }
  }
</script>

<style scoped>

</style>