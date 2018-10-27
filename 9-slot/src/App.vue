<template>
    <div id="app" class="container">
        <div class="row">
            <div class="col-xs-12">

                <app-quote mytext="Nějaký text přes nedynamickou props (bez úvodní dvojtečky), ovšem pouze jako string bez html">

                    <h2 slot="title">Vložení celého html přes SLOT</h2>

                    <div slot="content">
                        <p>Tady je nějaký další text</p>
                        <h3> {{ quoteTitle }}</h3>
                    </div>

                    <p>Pokud je nějaký tag a jeho obsah bez pojmenovaní slotu, zobrazí se ve výchozím < slot>< /slot>  - bez názvu</p>
                </app-quote>

                <hr>
                <hr>
                <hr>

                <h2>Dynamické komponenty</h2>
                <button @click="selectedComponent = 'appNew'">New</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                {{ selectedComponent }}

                <component :is="selectedComponent">
                    Tohle půjde do defaultního slotu pokud některá z komponent ho má připraven
                </component>

                <h2>keep-alive Udrží komponentu na živu - vyzkoušej counter v NEW</h2>
                <keep-alive>
                    <component :is="selectedComponent"></component>
                </keep-alive>


            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote';
    import Author from './components/Author';
    import New from './components/New';


  export default {
    name: 'app',
    components:  {
      appQuote: Quote,
      appAuthor: Author,
      appNew: New,
    },
    data: function() {
      return {
        quoteTitle: 'Dynamicky připřazená proměnná',
        selectedComponent: 'appAuthor'
      }
    }
    }
</script>

<style scoped>
    h3 {
        color: blue;
    }
</style>
