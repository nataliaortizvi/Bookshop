<script>
import { mapStores } from "pinia";
import { useProductsStore } from "../stores/products";

export default {
  data() {
    return { 
        currentProduct: {} 
    };
  },
  computed: {
    ...mapStores(useProductsStore),
  },
  mounted() {
    this.currentProduct = this.productsStore.getProductById(
      this.$route.params.productId
    );
  },
};
</script>

<template>
  <div>
    <h1>Soy el detalle</h1>
    <p class="algo">Id del producto: {{ $route.params.productId }}</p>
    <p>Nombre Producto: {{ currentProduct.title }}</p>
    <p>autor del producto: {{ currentProduct.author }}</p>
  </div>
</template>

<style>
</style>