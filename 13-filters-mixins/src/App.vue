<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUppercase | to-lowercase }}</p>
                <p>{{ text | myFilter }}</p>
                <hr>
                <button @click="fruits.push('Berries')">Add new Item</button>
                <input v-model="filterText"> Použije se filterText který je duplikován z mixins ve fruitMixins.js
                <ul>
                    <li v-for="fruit in filteredFruits">{{ fruit }}</li>
                </ul>

                <app-list></app-list>

                <app-test></app-test>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './List';
    import { fruitMixin } from "./fruitMixin";
    import Test from './Test';

    export default {
        mixins: [fruitMixin],
        data() {
            return {
                text: 'Hello there!',
            }
        },
      //lokální filtry
        filters: {
            toUppercase(value) {
                return value.toUpperCase();
            },
            myFilter(value) {
              return value + ' ' + 'Dodaný text z filtru';
            }
        },
        components: {
          appList: List,
          appTest: Test,
        }
    }
</script>

<style>
</style>
