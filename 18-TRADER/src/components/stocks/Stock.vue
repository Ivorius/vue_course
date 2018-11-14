<template>
    <div class="col-sm-6 col-md-4">
        <div class="card">
            <div class="card-header  bg-success"> {{ stock.name }}
                <small>Price: {{ stock.price | currency }}</small>
            </div>
            <div class="card-body">
                <div class="float-left">
                    <input
                            type="number"
                            class="form-control"
                            placeholder="Quantity"
                            v-model.number="quantity"
                            :class="{danger: insufficientFunds}"
                    >
                </div>
                <div class="float-right">
                    <button
                        class="btn btn-success"
                        @click="buyStock"
                        :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)"
                    > {{ insufficientFunds ? 'Insufficient Funds' : 'Buy'}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Stock",
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      insufficientFunds() {
        return this.quantity * this.stock.price > this.funds
       },
      funds() {
        return this.$store.getters.funds;
      }
    },
    methods: {
      buyStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        this.$store.dispatch('buyStock', order);
        this.quantity = 0;
      }
    }
  }
</script>

<style scoped>
    .danger { border:1px solid red;}
</style>