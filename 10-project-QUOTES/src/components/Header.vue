<template>
    <div class="row">

        <h3>Quotes addes</h3>
        <div class="progress">
            <div class="progress-bar" :style="{width: (qouteCount / maxQuotes) * 100 + '%'}">
                {{ qouteCount }} / {{ maxQuotes }}
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: ['qouteCount', 'maxQuotes']
  }
</script>

<style scoped>

</style>