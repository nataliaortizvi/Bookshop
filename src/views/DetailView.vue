<script>
import { mapStores } from "pinia";
import { useDatabaseStore } from "../stores/database";

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
    ...mapStores(useDatabaseStore),

    bookInfo() {
      return this.currentProduct = this.databaseStore.getBookById(
        this.$route.params.productId);
    },
  },
  mounted() {
    this.currentProduct = this.databaseStore.getBookById(
      this.$route.params.productId
    );
  },

  methods: {
    prueba() {
      console.log("yohoooo ", this.currentProduct);
    },
  },
};
</script>

<template>
  <div class="container">
    <img src="/images/WebElements/detailVector.png" />

    <BookDetail v-if="this.bookInfo"
      :title="currentProduct.title"
      :author="currentProduct.author"
      :price="currentProduct.price"
      :notLike="currentProduct.notLike"
      :image="currentProduct.image"
      :stars="currentProduct.stars"
      :about="currentProduct.about"
      @click="prueba"
    ></BookDetail>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/main.scss";

.container {
  position: relative;
  width: 100%;
  height: 90vh;

  img {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -5;
    width: 500px;
    height: 300px;
  }
}
</style>