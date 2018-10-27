<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <app-full-name v-model="fullName"></app-full-name>
                    <div class="form-group">
                        <label><input type="text" class="form-control" v-model="mail"> Mail</label>
                    </div>
                    <div class="form-group">
                        <label><input type="password" class="form-control" v-model="password"> Password</label>
                    </div>
                    <div class="form-group">
                        <label><input type="radio" value="Yes" v-model="storeData"> Yes</label>
                        <label><input type="radio" value="No" v-model="storeData"> No</label>
                    </div>

                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <button
                            type="submit"
                            @click.prevent="formSubmitted"
                            class="btn btn-primary">Submit</button>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }} </p>
                        <p>Mail: {{ mail }} </p>
                        <p>Password: {{ password }} </p>
                        <p>Store in Database?: {{ storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './FullName';
    export default {
      methods: {
        formSubmitted() {
          this.isSubmitted = true
        }
      },
      data: function() {
        return {

          isSubmitted: false,
          fullName: '',
          password: '',
          mail: '',
          storeData: 'Yes'
        };
      },
      components: {
        appFullName: FullName
      }
    }
</script>

<style>
</style>
