<template>
    <div>
        <!--Bootstrap 4-->
        <!--<ul class="nav nav-pills">-->
        <!--<li role="presentation" class="nav-item">-->
        <!--<router-link to="/" class="nav-link" active-class="active">Home</router-link>-->
        <!--</li>-->
        <!--<li role="presentation" class="nav-item">-->
        <!--<router-link to="/user" class="nav-link" active-class="active">User</router-link>-->
        <!--</li>-->
        <!--</ul>-->
        <ul class="nav nav-pills">
            <router-link :to="{name: 'home'}" tag="li" active-class="active" exact><a>Home</a></router-link>
            <!--<router-link to="/user/1"  tag="li" active-class="active"><a>User 1</a></router-link>-->
            <!--<router-link to="/user/2"  tag="li" active-class="active"><a>User 2</a></router-link>-->
            <router-link to="/user"  tag="li" active-class="active"><a>User</a></router-link>
        </ul>
    </div>


</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>

</style>