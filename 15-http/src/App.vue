<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>jméno</label>
                    <input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                    <label>mail</label>
                    <input type="text" class="form-control" v-model="user.mail">
                </div>
                <button class="btn btn-primary" @click="submit">Save</button>
                <hr>
                Zvol si tabulku k načtení: <input type="text" v-model="node">
                <button class="btn btn-primary" @click="fetchData">Get data</button>
                <ul class="list-group">
                    <li class="list-group-item" v-for="u in users"> {{ u.username }} - {{u.mail}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          user: {
            username: '',
            mail: ''
          },
          users: [],
          resource: {},
          node: 'data'
        }
      },
      methods: {
        submit() {
          //$http využívá vue-resource

          // VARIANTA 1 - ruční poslání přes $http.post
          // this.$http.post('data.json', this.user)
          //   .then(response => {
          //     //promise na response
          //     console.log(response)
          //   }, error => {
          //     //nebo taky muze koncit chybou
          //     console.log(error)
          //   });

          //VARIANTA 2 - využití $resource.save()
          // this.resource.save({}, this.user);

          //VARIANTA 3 - vlastní custom resource
          this.resource.saveAlt(this.user);

        },
        fetchData() {
          //this.$http.get('https://vuejs-http-7fd02.firebaseio.com/data.json')

          // VARIANTA 1
          // this.$http.get('data.json')
          //   .then(response => {
          //     //.json() je helper vue-resource, ktera prevede json na js object
          //     return response.json();
          //   })
          //   .then(data => {
          //     const resultArray = [];
          //     for (let key in data) {
          //       resultArray.push(data[key]);
          //     }
          //     this.users = resultArray;
          //   });

          //VARIANTA 2 - načtení přes resource
          this.resource.getData({node: this.node})
            .then(response => {
              //.json() je helper vue-resource, ktera prevede json na js object
              return response.json();
            })
            .then(data => {
              const resultArray = [];
              for (let key in data) {
                resultArray.push(data[key]);
              }
              this.users = resultArray;
            });
        }
      },
      created() {
        const customActions = {
          saveAlt: {method: 'POST', url: 'alternative.json'},
          getData: {method: 'GET'}
        }
        this.resource = this.$resource('{node}.json', {}, customActions);
      }
    }
</script>

<style>
</style>
