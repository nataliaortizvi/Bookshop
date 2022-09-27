<script>
import { mapStores } from "pinia";
import { useProductsStore } from "./stores/products";

import { RouterLink, RouterView } from "vue-router";

export default {
  components: {
    RouterLink,
    RouterView,
  },
  computed: {
    ...mapStores(useProductsStore),
  },

  mounted() {
    this.productsStore.loadProducts();
  },

  data() {
    return {
      menuResponsive: false,
    };
  },

  methods: {
    menuActive() {
      this.menuResponsive = !this.menuResponsive;
    },
  },
};
</script>
  
  
<template>
  <!-----------------------------GLOBAL HEADER------------------------------->
  <header>
    <section class="leftItems">
      <RouterLink to="/">
        <img src="/images/WebElements/logopeque.png" class="imageLogo" />
      </RouterLink>

      <nav>
        <RouterLink to="/" class="links --darkBlack" class-active="active"
          >Home</RouterLink
        >
        <RouterLink to="/books" class="links --darkBlack" class-active="active"
          >Books</RouterLink
        >
        <!--RouterLink to="/community" class="links --darkBlack" class-active="active">Community</RouterLink-->
        <!--RouterLink to="/login" class="links --darkBlack" class-active="active">Login</RouterLink-->
        <RouterLink
          to="/addbook"
          class="links --darkBlack"
          class-active="active"
          >Add book</RouterLink
        >
      </nav>
    </section>

    <!---ICON LIBRARY--->
    <link
      rel="stylesheet"
      href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
    />

    <section class="RightItems">
      <span class="icon"><i class="fa fa-search"></i></span>
      <input id="search" placeholder="Search..." />
      <!--input type="search" id="search" placeholder="Search..."/-->
    </section>

    <div class="hamburger" @click="menuActive" :class="{ is_active: !menuResponsive }">
      <div class="_layer -top"></div>
      <div class="_layer -mid"></div>
      <div class="_layer -bottom"></div>
    </div>

    <nav class="menuppal" :class="{ is_active: !menuResponsive }" @click="menuActive">
      <ul>
        <li><RouterLink class="links --pink" to="/">Home</RouterLink></li>
        <li><RouterLink class="links --pink" to="/books">Books</RouterLink></li>
        <li><RouterLink class="links --pink" to="/addbook">Add book</RouterLink></li>
      </ul>
    </nav>

  </header>

  <!---------------------------------BODY------------------------------------>
  <RouterView />

  <!-----------------------------GLOBAL FOOTER------------------------------->
  <footer>
    <img src="/images/WebElements/logoCircle.png" />
    <nav>
      <RouterLink to="/" class="links" class-active="active">Home</RouterLink>
      <RouterLink to="/books" class="links" class-active="active"
        >Books</RouterLink
      >
      <RouterLink to="/community" class="links" class-active="active"
        >Community</RouterLink
      >
      <RouterLink to="/login" class="links" class-active="active"
        >Login</RouterLink
      >
    </nav>
    <a class="normalText"
      >© Bookie, 2022. Bookie Bookshop Limited. Registered in Colombia. Company
      number 00010095.
    </a>
  </footer>
</template>
  
  
  <!-----------------------------STYLES------------------------------->
<style lang="scss">
//----STYLE RESET-----
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
}
</style>
  