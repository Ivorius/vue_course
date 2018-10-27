<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select server</p>
        <p v-else>Server #{{ server.id }} - status {{ server.status }}</p>
        <hr>
        <button v-if="server" @click="changeStatus">Change status to normal</button>
    </div>

</template>

<script>
  import {serverBus} from '../../main.js'

  export default {
    data: function() {
      return {
        server: null
      }
    },
    methods: {
      changeStatus() {
        this.server.status = 'Normal';
      }
    },
    created() {
      serverBus.$on('serverSelectEvent',  (server) => {
        this.server = server
      });
    }
  };
</script>

<style>

</style>
