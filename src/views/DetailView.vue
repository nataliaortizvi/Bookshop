<script>
import { mapStores } from "pinia";
import { useProductsStore } from "../stores/products";

import BookDetail from "../components/Books/BookDetail.vue";

export default {
  components: {
    BookDetail,
  },
  data() {
    return {
      currentProduct: {},
    };
  },
  computed: {
    ...mapStores(useProductsStore),
    allProducts() {
      return this.productsStore.getProducts;
    },
  },
  mounted() {
    this.currentProduct = this.productsStore.getProductById(
      this.$route.params.productId
    );

  },
};
</script>

<template>

  <div class="container">
    <img src="/images/WebElements/detailVector.png">

    <BookDetail
      :title="currentProduct.title"
      :author="currentProduct.author"
      :price="currentProduct.price"
      :notLike="currentProduct.notLike"
      :image="currentProduct.image"
      :stars="currentProduct.stars"
      :about="currentProduct.about"
    ></BookDetail>
  

  </div>

</template>

<style lang="scss" scoped>
@import "src/assets/main.scss";

.container {
  position: relative;
  width: 100%;
  height: 100%;

  img {
    position: absolute;
    bottom: 0;
    right:0;
    z-index: -5;
    width: 500px;
    height: 300px;
  }
}
</style>