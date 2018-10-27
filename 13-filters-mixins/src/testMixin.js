export const testMixin = {
  computed: {
    reverseText() {
      return this.test.split("").reverse().join("");
    },
    textCounted() {
      return this.test.length;
    }
  }
}