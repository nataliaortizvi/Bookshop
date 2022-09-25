<script>
import { mapStores } from "pinia";
import { useProductsStore } from "../stores/products";

export default {
  data() {
    return {
      title: "",
      author: "",
      about: "",
      category: [],
      price: "",
      year: "",
      place: "",
      image: "",
      notLike: true,
      stars: "⭐️⭐️⭐️",
    };
  },

  computed: {
    ...mapStores(useProductsStore),
    allProducts() {
      return this.productsStore.getProducts;
    },
  },

  methods: {
    createNewProduct() {
      const newProduct = {
        title: this.title,
        author: this.author,
        about: this.about,
      };
      this.productsStore.newProduct(newProduct);
      console.log(this.title);
      this.title = "";
      this.author = "";

    }
  },

  mounted(){
    //this.productsStore.loadProducts()
  }
};
</script>

    
<template>
  <section class="formContainer">
    <h1 class="titleText --pink">Add a new product</h1>
    <form>
      <label class="normalText --big --darkBlack">
        Title:
        <input
          class="normalText --small --lightBlack"
          placeholder="Write the book´s title"
          v-model="title"
          type="text"
          required
        />
      </label>

      <label class="normalText --big --darkBlack">
        Author:
        <input
          class="normalText --small --lightBlack"
          placeholder="Write the author´s name"
          v-model="author"
          type="text"
          required
        />
      </label>

      <label class="normalText --big --darkBlack">
        About:
        <input
          class="normalText --small --lightBlack"
          placeholder="Write about the book"
          v-model="about"
          type="text"
          required
        />
      </label>
    </form>

    <button class="button --pink" @click="(e) => createNewProduct()">
      Crear Nuevo
    </button>
  </section>
</template>



<style lang="scss" scoped>
@import "src/assets/main.scss";

.formContainer {
  width: 100%;
  height: 90vh;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;

  form {
    width: 420px;
    margin: 30px;
    box-shadow: 0px 0px 15px 2px rgba($blackDark, 0.3);
    background-color: $background;
    border-radius: 20px;
    padding: 40px;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-items: center;
  }

  label {
    display: inline-block;
    margin: 15px 0px;
    display: flex;
    flex-direction: row;
  }

  input {
    display: block;
    padding: 10px 10px;
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    background-color: $background;
    border: 1px solid rgb(211, 211, 211);
    border-radius: 20px;
    margin-left: 20px;

    &::placeholder {
      color: $blackLight;
    }
  }
}
</style>