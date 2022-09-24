<script>
import BookCard from "../components/Books/BookCard.vue";
import { mapStores } from "pinia";
import { useProductsStore } from "../stores/products";

export default {
  components: {
    BookCard,
  },

  computed: {
    ...mapStores(useProductsStore),
    allProducts() {
      return this.productsStore.getProducts;
    },
  },
};
</script>

<template>
  <section class="booksContainer">
    <div class="filtersSide">
      <h1 class="titleText --pink">Books</h1>
      <h2 class="normalText --pink --big">Category</h2>
    </div>
    <div class="booksSide">
      <BookCard
        v-for="product in allProducts"
        :key="product.title"
        class="bookCard"
        :title="product.title"
        :author="product.author"
        :price="product.price"
        :notLike="product.notLike"
        :image="product.image"
        :stars="product.stars"
        :id="product.id"
      ></BookCard>

      <br />
      <br />
    </div>
  </section>
</template>


<style lang="scss" scoped>
@import "src/assets/main.scss";

.booksContainer {
  display: flex;
  flex-direction: row;
  width: 100%;
  

  .filtersSide {
    display: flex;
    flex-direction: column;
    width: 500px;
    padding: 100px 50px;

    .titleText {
      margin-bottom: 50px;
    }
    .normalText {
      font-weight: 100;
    }
  }

  .booksSide {
    background: linear-gradient($gradientBlue);
    width: 100%;
    padding: 120px 80px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    flex-grow: 1;
    gap: 90px;


  }
}
</style>