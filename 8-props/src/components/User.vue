<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my name</button>
        <p>Name is {{ name }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail
                        :myName="name"
                        :resetFn="resetNameFromParent"
                        :userAge="age"
                        :job="job"
                        @nameWasReset="name = $event"
                        ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                        :userAge="age"
                        :changeJobFn="changeJob"
                        @ageWasEdited = "age = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
  import UserDetail from './UserDetail.vue';
  import UserEdit from './UserEdit.vue';

  export default {
    data: function () {
      return {
        name: 'Ivo',
        age: 33,
        job: 'teacher'
      }
    },
    methods: {
      changeName() {
          this.name = 'Eva';
      },
      resetNameFromParent() {
        this.name = 'Ivo resetovaný z parentu';
      },
      changeJob() {
        this.job = 'programmer';
      }
    },
    components: {
      appUserDetail: UserDetail,
      appUserEdit: UserEdit
    }
  }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
