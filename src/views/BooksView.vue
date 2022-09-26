<script>
import BookCard from "../components/Books/BookCard.vue";
import { mapStores } from "pinia";
import { useProductsStore } from "../stores/products";

export default {
  components: {
    BookCard,
  },

  data() {
    return {
      currentProducts: {},
    };
  },

  computed: {
    ...mapStores(useProductsStore),
    allProducts() {
      return this.productsStore.getProducts;
    },
  },

  methods: {
    noFilter() {
      this.currentProducts = this.productsStore.getProducts;
    },

    placeFilter(p) {
      const theFilter = this.currentProducts.filter(
        (product) => product.place.toLowerCase() === p.toLowerCase()
      );
      this.currentProducts = theFilter;
    },
  },

  mounted() {
    this.currentProducts = this.productsStore.getProducts;
  },
};
</script>

<template>
  <section class="booksContainer">
    <div class="filtersSide">
      <h1 class="titleText --pink">Books</h1>
      <button
        class="button --linePink"
        @click="noFilter">
        Remove filters
      </button>

      <h2 class="normalText --pink --big">Category</h2>
      <h2 class="normalText --pink --big">Price</h2>
      <h2 class="normalText --pink --big">Year</h2>

      <h2 class="normalText --pink --big">Location</h2>
      <button
        class="button --pink"
        @click="
          () => {
            placeFilter('north america');
          }
        "
      >
        filter
      </button>

     
    </div>




    <div class="booksSide">
      <BookCard
        v-for="product in currentProducts"
        :key="product.title"
        class="bookCard"
        :title="product.title"
        :author="product.author"
        :price="product.price"
        :notLike="product.notLike"
        :image="product.image"
        :stars="product.stars"
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
      margin-bottom: 30px;
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