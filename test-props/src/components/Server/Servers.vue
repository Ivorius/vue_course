<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <server-li v-for="server in servers" :server="server" :key="server.id"> {{ server.id }}</server-li>
        </ul>
    </div>
</template>

<script>
    import ServerLi from "./ServerLi"

    export default{
      components: {
        'server-li': ServerLi
      },
      data: function() {
        return {
            servers: [
              { id: 1, status: 'Normal' },
              { id: 2, status: 'Critical' },
              { id: 3, status: 'Unknown' },
              { id: 4, status: 'Super' },
              { id: 5, status: 'Normal' },
            ]
        };
      }
    }
</script>

<style>

</style>
