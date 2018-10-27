<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ myName }} a  obrácené to je:  {{ switchName() }} </p>
        <p>User age: {{ userAge }}</p>
        <p>User job: {{job}}</p>
        <p>User hair: {{ hair }}
         <p>User hand: {{ hand }}</p>
        <button @click="resetName">Reset name</button>
        <button @click="resetFn()">Reset name - jako callback z parentu</button>
    </div>
</template>

<script>
    import { eventBus } from "../main";

    export default {
      props: {
        myName: {
          type: String
        },
        job: String,
        resetFn: Function,
        userAge: Number,
      },
      data: function() {
        return {
          hair: 'unknown now',
          hand: '',
        }
      },
      methods: {
        switchName() {
          return this.myName.split("").reverse().join("");
        },
        resetName() {
          this.myName = 'Ivo resetovaný :)';
          this.$emit('nameWasReset', this.myName);
        }
      },
      created() {
        //event hook při vytvoření

        //zaregistruje listener
        eventBus.$on('hairWasEdited', (hair) => {
          this.hair = hair;
        });

        eventBus.$on('handWasEdited', (hand) => {
          this.hand = hand;
        });
      }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
