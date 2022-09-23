<template>
  <h1>This is theee community!</h1>
</template>

<script>
export default {
    computed: {
        productId() {
            this.$route.params.productId
        }
    }
}
</script>

<style lang="scss" scoped>

</style>