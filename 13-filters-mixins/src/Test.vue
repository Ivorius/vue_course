<template>
<div>
    <h1>Test na filtry a mixiny</h1>
    <input v-model="test">
    <!-- Exercise 1) -->
    <!-- Build a local Filter which reverses the Text it is applied on -->
    <p>{{ test | reverse }}</p>

    <!-- Exercise 2 -->
    <!-- Build a global Filter which counts the length of a word and it appends it -->
    <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
    <p>{{ test | countText }}</p>

    <!-- Exercise 3 -->
    <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
    <p>{{ reverseText }} ({{ textCounted }})</p>

    <!-- Exercise 4 -->
    <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->

</div>
</template>

<script>
    import { testMixin } from "./testMixin";

    export default {
    name: "Test",
    data() {
      return {
        test: 'Testovací text'
      }
    },
    mixins: [testMixin],
    filters: {
      reverse( value ) {
        return value.split("").reverse().join("");
      }
    }
  }
</script>
