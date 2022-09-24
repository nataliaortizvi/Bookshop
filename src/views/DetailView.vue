<script>
import { mapStores } from "pinia";
import { useProductsStore } from "../stores/products";

import BookDetail from "../components/Books/BookDetail.vue";
import LoveButton from "../components/Books/LoveButton.vue";

export default {
  components: {
    BookDetail,
    LoveButton,
  },
  data() {
    return { currentProduct: {} };
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
  <!--BookDetail
    :title="currentProduct.title"
    :author="currentProduct.author"
    :price="currentProduct.price"
    :notLike="currentProduct.notLike"
    :image="currentProduct.image"
    :stars="currentProduct.stars"
    :about="currentProduct.about"
  ></BookDetail-->

  <div class="detailContainer">
    <img :src="this.currentProduct.image" />
    <div class="detailInfo">
      <h1 class="titleText --blue">{{ this.currentProduct.title }}</h1>

      <div class="starsAuthor">
        <a class="normalText --blue --small">{{ this.currentProduct.author }}</a>
        <p class="normalText --blue --small">|</p>
        <a class="normalText --lightBlack --small">{{
          this.currentProduct.stars
        }}</a>
      </div>

      <p class="normalText --lightBlack --small">
        {{ this.currentProduct.about }}
      </p>
      <p class="titleText --blue price">$ {{ this.currentProduct.price }}</p>
      <div class="btnlove">
        <button class="button --blue">Add to cart</button>
        <!------arreglar boton like------>
        <LoveButton class="lovebtn" :notLike=true></LoveButton>
      </div>
    </div>
  </div>


</template>

<style lang="scss" scoped>
@import "src/assets/main.scss";


@import "src/assets/main.scss";

.detailContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
  padding: 150px 100px 100px 100px;
  background-color: rgb(234, 234, 234);
  gap: 50px;

  img {
    width: 300px;
    height: 500px;
    border-radius: 20px;
    box-shadow: 2px 2px 5px $blackLight;
  }
  .detailInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    width: 500px;

    .btnlove {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;

      .lovebtn {
        position: absolute;
        z-index: 20;
        right: 250px;
        top: -5px;
      }
    }

    .starsAuthor {
      display: flex;
      flex-direction: row;
      align-content: center;
      line-height: 35px;
      gap: 20px;

      p {
        font-size: 25px;
      }
    }

    .price {
      font-size: 30px;
      margin: 10px 0px;
    }
  }
}

</style>