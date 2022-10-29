<script>
import BookCard from "../components/Books/BookCard.vue";
import { mapStores } from "pinia";

import { useDatabaseStore } from "../stores/database";

export default {
  components: {
    BookCard,
  },

  data() {
    return {
      currentProducts: [],
      normalProducts: [],
      arrayToShow: [],

      categorySelected: [],
      placeSelected: "",
      yearOrderSelected: "",
      priceOrderSelected: "",
    };
  },

  computed: {
    ...mapStores(useDatabaseStore),

    allBooks() {
      return this.databaseStore.getBooks;
    },
  },

  mounted() {
    this.normalProducts = this.databaseStore.getBooks;
    this.currentProducts = JSON.parse(JSON.stringify(this.normalProducts));
    this.arrayToShow = this.currentProducts;
  },

  watch: {
    allBooks(newChanges, oldChanges) {
      if (newChanges.length !== 0) {
        this.getDatas();
        //console.log(newChanges, "cambio");
      } else {
        //console.log(newChanges, "NO cambio");
      }
    },
  },

  methods: {
    noFilter() {
      this.arrayToShow = this.normalProducts;
      this.categorySelected = [];
      this.placeSelected = "";
      this.yearOrderSelected = "";
      this.priceOrderSelected = "";
    },

    categoryFilter(c) {
      if (c != "") {
        this.arrayToShow = this.currentProducts.filter((product) => {
          let founded = 0;

          for (let i = 0; i < c.length; i++) {
            if (product.category.includes(c[i])) {
              founded++;
            }
          }

          return founded == c.length;
        });
      } else {
        this.arrayToShow = this.normalProducts;
      }
    },

    placeFilter(p) {
      console.log(p);

      if (p != "") {
        this.arrayToShow = this.currentProducts.filter(
          (product) =>
            product.place.toLowerCase().replace(/ /g, "") ===
            p.toLowerCase().replace(/ /g, "")
        );
      } else {
        this.arrayToShow = this.normalProducts;
      }
    },

    orderPriceFilter(p) {
      switch (p) {
        case "":
          console.log("hola PRICEE");
          this.arrayToShow = this.normalProducts;
          break;
        case "Low to high":
          this.arrayToShow.sort((a, b) => a.price - b.price);
          this.yearOrderSelected = "";
          break;
        case "High to low":
          this.arrayToShow.sort((b, a) => a.price - b.price);
          this.yearOrderSelected = "";
          break;
      }
    },

    orderYearFilter(y) {
      console.log(y);
      switch (y) {
        case "":
          console.log("hola YEARR");
          this.arrayToShow = this.normalProducts;
          break;
        case "Old to new":
          this.arrayToShow.sort((a, b) => a.year - b.year);
          this.priceOrderSelected = "";
          break;
        case "New to old":
          this.arrayToShow.sort((b, a) => a.year - b.year);
          this.priceOrderSelected = "";
          break;
      }
    },

    getDatas() {
      //console.log("metodoooo", this.allBooks);
      this.normalProducts = this.databaseStore.getBooks;
      this.currentProducts = JSON.parse(JSON.stringify(this.normalProducts));
      this.arrayToShow = this.currentProducts;
    },

  },
};
</script>

<template>
  <section class="booksContainer">
    <button class="btn button --white">Filters</button>

    <div class="filtersSide">
      <h1 class="titleText --pink" @click="getDatas">Books</h1>

      <label class="normalText --pink --big">Category</label>
      <div
        class="checkContainer"
        @change="() => categoryFilter(categorySelected)"
      >
        <input
          class="checkbox"
          type="checkbox"
          value="romance"
          v-model="categorySelected"
          id="Romance"
        />
        <label class="normalText --small --lightBlack" for="Romance"
          >Romance</label
        >

        <input
          class="checkbox"
          type="checkbox"
          value="kids"
          v-model="categorySelected"
          id="Kids"
        />
        <label class="normalText --small --lightBlack" for="Kids">Kids</label>

        <input
          class="checkbox"
          type="checkbox"
          value="fiction"
          v-model="categorySelected"
          id="Fiction"
        />
        <label class="normalText --small --lightBlack" for="Fiction"
          >Fiction</label
        >

        <input
          class="checkbox"
          type="checkbox"
          value="biographies"
          v-model="categorySelected"
          id="Biographies"
        />
        <label class="normalText --small --lightBlack" for="Biographies"
          >Biographies</label
        >

        <input
          class="checkbox"
          type="checkbox"
          value="horror"
          v-model="categorySelected"
          id="Horror"
        />
        <label class="normalText --small --lightBlack" for="Horror"
          >Horror</label
        >

        <input
          class="checkbox"
          type="checkbox"
          value="history"
          v-model="categorySelected"
          id="History"
        />
        <label class="normalText --small --lightBlack" for="History"
          >History</label
        >

        <input
          class="checkbox"
          type="checkbox"
          value="mystery"
          v-model="categorySelected"
          id="Mystery"
        />
        <label class="normalText --small --lightBlack" for="Mystery"
          >Mystery</label
        >

        <input
          class="checkbox"
          type="checkbox"
          value="food"
          v-model="categorySelected"
          id="Food"
        />
        <label class="normalText --small --lightBlack" for="Food">Food</label>

        <input
          class="checkbox"
          type="checkbox"
          value="educational"
          v-model="categorySelected"
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
            orderPriceFilter(priceOrderSelected);
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
            orderYearFilter(yearOrderSelected);
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

      <button
        class="button --linePink removebtn"
        @click="
          () => {
            noFilter();
          }
        "
      >
        Remove filters
      </button>
    </div>

    <div class="booksSide">
      <BookCard
        v-for="product in arrayToShow"
        :key="product"
        class="bookCard"
        :currentBook="product"
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

  .filtersbtn {
    display: none;
  }
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

@media screen and (max-width: 600px) {
  .booksContainer {
    flex-direction: column;

    .btn {
      display: show;
      margin: 30px 100px;
    }
    .filtersSide {
      display: none;
    }

    .booksSide {
      width: 100%;
      padding: 30px 10px 20px 10px;
      display: grid;
      justify-content: center;
      align-items: center;
      grid-template-columns: auto auto;
      gap: 20px;
      margin-left: 0px;
    }
  }
}
</style>