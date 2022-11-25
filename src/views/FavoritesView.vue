<script>
import { mapStores } from "pinia";
import { useAuthenticationStore } from "../stores/authTest/authentication";
import BookCard from "../components/Books/BookCard.vue";

export default {
  components: {
    BookCard,
  },

  computed: {
    ...mapStores(useAuthenticationStore),

    getUser() {
      return this.authenticationStore.loadCurrentUser();
    },
  },

  data() {
    return {
      currentUser: null,
      favoritesArray: [],
    };
  },

  watch: {
    getUser(newChanges, oldChanges) {
      if (newChanges != null) {
        this.currentUser = newChanges;
        this.chargeBooks();

        //console.log(newChanges, "cambio");
      } else {
        this.currentUser = null;
        this.favoritesArray = null;
        //console.log(newChanges, "NO cambio");
      }
    },
  },

  mounted() {
    this.currentUser = this.authenticationStore.loadCurrentUser();

    if (this.currentUser != null) {
      this.favoritesArray = this.currentUser.favorites;
    }
  },

  methods: {
    chargeBooks() {
      this.favoritesArray = this.currentUser.favorites;
    },
  },
};
</script>

<template>
  <section class="favoritesSection">
    <h1 class="titleText --blue" @click="prueba">Your Favorite Books!</h1>
    <div class="chart">
      <BookCard
        v-for="product in favoritesArray"
        :key="product"
        class="bookCard"
        :currentBook="product"
      ></BookCard>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "src/assets/main.scss";
.favoritesSection {
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 30px;
  }
  .chart {
    border-radius: 20px;
    padding: 30px 30px 0px 30px;
    width: 80vw;
    height: auto;
    box-shadow: 0px 0px 5px $blackLight;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 50px 0px;

    display: grid;
    grid-template-columns: auto auto auto;
    flex-grow: 4;
    gap: 50px;
  }
}
</style>