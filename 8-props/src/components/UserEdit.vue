<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{ userAge }}</p>
        <p>User hair: {{ hair }}</p>
        <p>User hand: {{ hand }}</p>
        <button @click="editAge">Edit age</button>
        <button @click="changeJobFn()">Change job</button>
        <button @click="changeHair">Change hair</button>
        <button @click="changeHand">Change hand</button>
    </div>
</template>

<script>
  import { eventBus } from "../main";

    export default {
      props: {
        userAge: Number,
        changeJobFn: Function
      },
      data: function() {
          return {
            hair: 'blond',
            hand: 'right',
          }
      },
      methods: {
        editAge() {
          this.userAge = 40;
          this.$emit('ageWasEdited', this.userAge);
        },
        changeHair() {
          this.hair = 'dark';
          //předání dat přes eventBus z main.js přímo do jiné komponenty,
          eventBus.$emit('hairWasEdited', this.hair);
        },
        changeHand() {
            this.hand = 'left';
            //předání dat přes metodu eventBus, která teprve vysílá signál
            eventBus.changeHand(this.hand);
        }
      }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
