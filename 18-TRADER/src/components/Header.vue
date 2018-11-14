<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <router-link class="navbar-brand" :to="{name: 'home'}">Stock Trader</router-link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link :to="{name: 'home'}" exact class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'portfolio'}" class="nav-link">Portfolio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'stocks'}" class="nav-link">Stocks</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item"><a href="#" @click="endDay" class="nav-link">End day</a></li>
                    <li
                            class="nav-item dropdown"
                            :class="{show: isDropDownOpen}"
                            @click="isDropDownOpen = !isDropDownOpen"
                    >
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                           aria-haspopup="true" aria-expanded="false">Save & load</a>
                        <div class="dropdown-menu" :class="{show: isDropDownOpen}">
                            <a class="dropdown-item" href="#" @click.prevent="saveData">Save data</a>
                            <a class="dropdown-item" href="#" @click.prevent="loadData">Load data</a>
                        </div>
                    </li>
                </ul>
                <!--<form class="form-inline mt-2 mt-md-0">-->
                <!--<input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">-->
                <!--<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>-->
                <!--</form>-->
            </div>
            <strong class="text-white">Funds: {{ funds | currency }}</strong>

        </nav>

    </div>

</template>

<script>
  import {mapActions} from 'vuex';
  import axios from 'axios';

  export default {
    name: "Header",
    data() {
      return {
        isDropDownOpen: false
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    },
    methods: {
      ...mapActions({
        randomizeStocks: 'randomizeStocks',
        fetchData: 'loadData'
      }),
      endDay() {
        this.randomizeStocks();
      },
      saveData() {
            const data =  {
              funds: this.$store.getters.funds,
              stockPortfolio: this.$store.getters.stockPortfolio,
              stocks: this.$store.getters.stocks
            }
            axios.put('trader.json', data)
              .then(function (response) {
              console.log(response)
            });
      },
      loadData() {
        //viz namapování actions na loadData
        this.fetchData();
      }
    }
  }
</script>

<style scoped>

</style>