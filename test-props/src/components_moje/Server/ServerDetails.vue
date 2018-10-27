<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select server</p>
        <p v-else>Server #{{ server.id }} selected, status {{ server.status }}</p>
        <hr>
        <button @click="changeStatus">Change status</button>
    </div>

</template>

<script>

  import {serverBus} from "../../main";

  export default {
    data: function() {
      return {
        server: null
      }
    },
    methods: {
      changeStatus() {
        this.server.status = 'normal';
      }
    },
    created() {
      serverBus.$on('serverSelected', (server) => {
        this.server = server;
      });
    }
  }

</script>

<style>

</style>
