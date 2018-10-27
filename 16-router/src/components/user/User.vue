<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <!--<p>Loaded Id:{{ this.id }} </p>-->
        <button @click="navigateToHome" class="btn btn-primary">Go to home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {

      //STARA VERZE PODLE VIDEA
      // data() {
      //   return {
      //     id: this.$route.params.id
      //   }
      // },
      // watch: {
      //   '$route'(to, from) {
      //     this.id = to.params.id;
      //   }
      // },

      //NOVA VERZE S POUZITIM PROPS https://router.vuejs.org/guide/essentials/passing-props.html, která je nastavena v routes.js
      props: ["id"],

      methods: {
        navigateToHome() {
            this.$router.push( { name: 'home' } );
        }
      }
    }
</script>