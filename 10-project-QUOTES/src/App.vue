<template>
    <div class="container">
        <app-header :qouteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @qouteDeleted="deleteQuote"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Kliknutím smažete QUOTE</div>
            </div>
        </div>
    </div>
</template>

<script>
  import QuoteGrid from './components/QuoteGrid';
  import NewQuote from './components/NewQuote';
  import Header from './components/Header'

  export default {
    data: function () {
      return {
        quotes: [
          'Just quote to something',
        ],
        maxQuotes: 10
      };
    },
    methods: {
      newQuote(quote) {
        if(this.quotes.length >= this.maxQuotes) {
          return alert('Please delete Quotes first!');
        }
        this.quotes.push(quote);
      },
      deleteQuote(index) {
        this.quotes.splice(index, 1)
      }
    },
    components: {
      appQuoteGrid: QuoteGrid,
      appNewQuote: NewQuote,
      appHeader: Header
    }
  }
</script>

<style>
</style>
