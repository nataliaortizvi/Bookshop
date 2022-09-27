<script>
import BookCard from "../components/Books/BookCard.vue";
import { mapStores } from "pinia";
import { useProductsStore } from "../stores/products";

export default {
  props: {
    cat: String,
  },

  components: {
    BookCard,
  },

  data() {
    return {
      currentProducts: [],
      normalProducts: [],
      arrayToShow: [],

      category: [],
      placeSelected: "",
      yearOrderSelected: "",
      priceOrderSelected: "",
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
      this.arrayToShow = this.normalProducts;
      this.category = "";
      this.placeSelected = "";
      this.yearOrderSelected = "";
      this.priceOrderSelected = "";
    },

    categoryFilter(c) {
      console.log(c.toString());

      const fil = this.currentProducts.filter((product) =>
        product.category
          .toString()
          .toLowerCase()
          .replace(/ /g, "")
          .includes(c.toString().toLowerCase().replace(/ /g, ""))
      );

      this.arrayToShow = fil;
    },

    placeFilter(p) {
      console.log(p);

      if (p != "") {
        const filtered = this.currentProducts.filter(
          (product) =>
            product.place.toLowerCase().replace(/ /g, "") ===
            p.toLowerCase().replace(/ /g, "")
        );

        this.arrayToShow = filtered;
      }
    },

    orderFilter(x) {
      console.log(x);
      switch (x) {
        case "":
          console.log("holawas");
          this.arrayToShow = this.normalProducts;
          break;
        case "Low to high":
          this.arrayToShow.sort((a, b) => a.price - b.price);
          break;
        case "High to low":
          this.arrayToShow.sort((b, a) => a.price - b.price);
          break;
        case "Old to new":
          this.arrayToShow.sort((a, b) => a.year - b.year);
          break;
        case "New to old":
          this.arrayToShow.sort((b, a) => a.year - b.year);
          break;
      }
    },

    createNewProduct() {
      const newProduct = {
        title: this.title,
        author: this.author,
        about: this.about,
        category: this.category,
        price: this.price,
        year: this.year,
        place: this.place,
        image: this.image,
        notLike: true,
        stars: "⭐️⭐️⭐️",
      };

      console.log(newProduct);
      this.productsStore.newProduct(newProduct);
      this.title = "";
      this.author = "";
      this.about = "";
      this.category = [];
      this.price = "";
      this.year = "";
      this.place = "";
      this.image = "";
    },
  },

  mounted() {
    this.normalProducts = this.productsStore.getProducts;
    this.currentProducts = JSON.parse(JSON.stringify(this.normalProducts));
    this.arrayToShow = this.currentProducts;

    console.log(this.cat);
  },
};
</script>

<template>
  <section class="booksContainer">
    <div class="filtersSide">
      <h1 class="titleText --pink">Books</h1>

      <label class="normalText --pink --big">Category</label>
      <div class="checkContainer" @change="() => categoryFilter(category)">
        <input
          class="checkbox"
          type="checkbox"
          value="romance"
          v-model="category"
          id="Romance"
        />
        <label class="normalText --small --lightBlack" for="Romance"
          >Romance</label
        >

        <input
          class="checkbox"
          type="checkbox"
          value="kids"
          v-model="category"
          id="Kids"
        />
        <label class="normalText --small --lightBlack" for="Kids">Kids</label>

        <input
          class="checkbox"
          type="checkbox"
          value="fiction"
          v-model="category"
          id="Fiction"
        />
        <label class="normalText --small --lightBlack" for="Fiction"
          >Fiction</label
        >

        <input
          class="checkbox"
          type="checkbox"
          value="biographies"
          v-model="category"
          id="Biographies"
        />
        <label class="normalText --small --lightBlack" for="Biographies"
          >Biographies</label
        >

        <input
          class="checkbox"
          type="checkbox"
          value="horror"
          v-model="category"
          id="Horror"
        />
        <label class="normalText --small --lightBlack" for="Horror"
          >Horror</label
        >

        <input
          class="checkbox"
          type="checkbox"
          value="history"
          v-model="category"
          id="History"
        />
        <label class="normalText --small --lightBlack" for="History"
          >History</label
        >

        <input
          class="checkbox"
          type="checkbox"
          value="mystery"
          v-model="category"
          id="Mystery"
        />
        <label class="normalText --small --lightBlack" for="Mystery"
          >Mystery</label
        >

        <input
          class="checkbox"
          type="checkbox"
          value="food"
          v-model="category"
          id="Food"
        />
        <label class="normalText --small --lightBlack" for="Food">Food</label>

        <input
          class="checkbox"
          type="checkbox"
          value="educational"
          v-model="category"
          id="Educational"
        />
        <label class="normalText --small --lightBlack" for="Educational"
          >Educational</label
        >
      </div>

      <label class="normalText --pink --big">Price</label>
      <select
        v-model="priceOrderSelected"
        @change="
          () => {
            orderFilter(priceOrderSelected);
          }
        "
      >
        <option value="">Select...</option>
        <option value="Low to high">Low to high</option>
        <option value="High to low">High to low</option>
      </select>

      <label class="normalText --pink --big">Year</label>
      <select
        v-model="yearOrderSelected"
        @change="
          () => {
            orderFilter(yearOrderSelected);
          }
        "
      >
        <option value="">Select...</option>
        <option value="Old to new">Old to new</option>
        <option value="New to old">New to old</option>
      </select>

      <label class="normalText --pink --big">Location</label>
      <select
        v-model="placeSelected"
        @change="
          () => {
            placeFilter(placeSelected);
          }
        "
      >
        <option value="">Select...</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Europe">Europe</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
      </select>

      <button class="button --linePink removebtn" @click="noFilter">
        Remove filters
      </button>
    </div>

    <div class="booksSide">
      <BookCard
        v-for="product in arrayToShow"
        :key="product.title"
        class="bookCard"
        :title="product.title"
        :author="product.author"
        :price="product.price"
        :notLike="product.notLike"
        :image="product.image"
        :stars="product.stars"
        :year="product.year"
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
  background: linear-gradient($gradientBlue);
  min-height: 90vh;

  .filtersSide {
    display: flex;
    flex-direction: column;
    width: 400px;
    padding: 100px 30px;
    background-color: $background;
    position: fixed;
    height: 100%;
    z-index: 10;

    .removebtn {
      margin-top: 30px;
    }

    .normalText {
      font-weight: 100;
    }

    select {
      border: 1px solid $blackLight;
      border-radius: 20px;
      color: $blackLight;
      background: transparent;
      height: 30px;
      padding-left: 10px;
    }

    label {
      display: inline-block;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin-top: 20px;
    }

    .checkContainer {
      display: grid;
      grid-template-columns: auto auto auto;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 300px;
      gap: 10px;

      .checkbox {
        opacity: 0; // hide it
        display: none;

        & + label {
          position: relative;
          cursor: pointer;
          padding: 0;
          height: 25px;
          margin-top: 0px;
        }

        // Box.
        & + label:before {
          content: "";
          margin-top: 0px;
          margin-right: 10px;
          width: 15px;
          height: 15px;
          border-radius: 5px;
          border: 1px solid $blackLight;
        }

        // Box checked
        &:checked + label:before {
          background: $pink;
          border: 1px solid $pink;
          border-radius: 5px;
        }

        // Checkmark. Could be replaced with an image
        &:checked + label:after {
          content: "x";
          top: -5;
          position: absolute;
          left: 4.5px;
          color: $background;
        }
      }
    }
  }

  .booksSide {
    width: 100%;
    padding: 120px 80px;
    display: grid;
    grid-template-columns: auto auto auto;
    flex-grow: 1;
    gap: 80px;
    margin-left: 400px;
  }
}
</style>