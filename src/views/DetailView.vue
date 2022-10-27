<script>
import { mapStores } from "pinia";
import { useAuthenticationStore } from "../stores/authentication";
import { useDatabaseStore } from "../stores/database";

import BookDetail from "../components/Books/BookDetail.vue";

export default {
  components: {
    BookDetail,
  },

  data() {
    return {
      currentProduct: {},
      currentUser: null,
    };
  },

  computed: {
    ...mapStores(useAuthenticationStore),
    ...mapStores(useDatabaseStore),

    bookInfo() {
      return (this.currentProduct = this.databaseStore.getBookById(
        this.$route.params.productId
      ));
    },

    getUser() {
      return this.authenticationStore.loadCurrentUser();
    },
  },

  watch: {
    getUser(newChanges, oldChanges) {
      if (newChanges != null) {
        //console.log(newChanges, "cambio");
        this.currentUser = newChanges;
      } else {
        this.currentUser = null;
        //console.log(newChanges, "NO cambio");
      }
    },
  },

  mounted() {
    this.currentUser = this.authenticationStore.loadCurrentUser();

    this.currentProduct = this.databaseStore.getBookById(
      this.$route.params.productId
    );
  },
};
</script>

<template>
  <div class="container">
    <img src="/images/WebElements/detailVector.png" />

    <BookDetail
      v-if="this.bookInfo"
      :currentBook="currentProduct"
      :currentUser="currentUser"
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