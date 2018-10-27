<template>
    <div class="quote">
        <div class="title">
            <slot name="title"></slot>
            <span style="color:#ccc;"><slot name="subtitle">Výchozí zpráva, pokud bude nějaký slot se subtitle předán, bude přepsáana</slot></span>
        </div>

        <hr>
        {{ mytext }}

        <hr>
        <slot name="content"></slot>

        <hr>
        <slot></slot>
    </div>
</template>

<script>
  export default {
    props: ['mytext'],
    name: "Quote"
  }
</script>

<style scoped>
    h2 {
        color: red;
    }
    div.quote {
        border: 1px solid #ccc;
        padding: 30px;
        margin: 30px auto;
        text-align:center;
    }

    .title {
        font-style: italic;
    }
</style>