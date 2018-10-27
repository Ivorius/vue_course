<template>
    <div>

        <h3>Edit the User</h3>
        <p>Jazyk: {{ $route.query.locale }}</p>
        <p>Parameter: {{ $route.query.extra }}</p>
        <button class="btn btn-primary" @click="confirm = true">Confirm</button>
        <div style="height: 700px"></div>
        <p id="data">Some extra</p>

    </div>
</template>

<script>
  export default {
    data() {
      return {
        confirm: false
      }
    },
    beforeRouteLeave(to, from, next) {
      if(this.confirm) {
        next();
      } else {
        if(confirm('Are you sure?')) {
          next();
        } else {
          next(false);
        }
      }
    }
  }
</script>