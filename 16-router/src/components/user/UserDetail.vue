<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ $route.params.id }}</p>
        <!--<router-link-->
                <!--tag="button"-->
                <!--:to="{ name: 'userEdit', params: { id: $route.params.id }, query: { locale: 'cs', extra: 'query-parameter'} }"-->
                <!--class="btn btn-primary">Edit link-->
        <!--</router-link>-->

        <router-link
                tag="button"
                :to="link"
                class="btn btn-primary">Edit link
        </router-link>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        link: {
          name: 'userEdit',
          params: {
            id: this.$route.params.id
          },
          query: {
            locale: 'cs',
            extra: 'query-parameter'
          },
          hash: '#data'
        }
      }
    },

    beforeRouteEnter(to, from, next) {
      console.log('inside component: beforeRouteEnter')
      next();
    }
  }
</script>