<script>
import { mapStores } from "pinia";
import { useAuthenticationStore } from "./stores/authentication";
import { useDatabaseStore } from "./stores/database";

import { RouterLink, RouterView } from "vue-router";

import Modal from "./components/Home/Modal.vue";
import LogIn from "./components/Home/LogIn.vue";

export default {
  components: {
    RouterLink,
    RouterView,
    Modal,
    LogIn,
  },

  computed: {
    ...mapStores(useAuthenticationStore),
    ...mapStores(useDatabaseStore),

    userIsLogged() {
      return this.authenticationStore.isUser !== null;
    },

    getUser() {
      if (this.authenticationStore.loadCurrentUser() != null) {
        return (this.currentUser =
          this.authenticationStore.loadCurrentUser().admin);
      }
    },
  },

  mounted() {
    this.databaseStore.updateBookStore();
  },

  data() {
    return {
      menuResponsive: false,
      showModal: false,
      currentUser: {},
    };
  },

  methods: {
    menuActive() {
      this.menuResponsive = !this.menuResponsive;
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    logOut() {
      this.authenticationStore.logOut();
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
        <RouterLink to="/" class="links --darkBlack" class-active="active">
          Home
        </RouterLink>

        <RouterLink to="/books" class="links --darkBlack" class-active="active">
          Books
        </RouterLink>

        <RouterLink
          v-if="!this.getUser && this.userIsLogged"
          class="links --darkBlack"
          class-active="active"
          to="/favorites"
        >
          Your Favorites
        </RouterLink>

        <RouterLink
          v-if="this.getUser"
          to="/addbook"
          class="links --darkBlack"
          class-active="active"
        >
          Add book
        </RouterLink>

        <a
          v-if="!this.userIsLogged"
          class="links --darkBlack logs"
          class-active="active"
          @click="openModal"
        >
          Log in
        </a>

        <a
          v-else
          class="links --darkBlack logs"
          class-active="active"
          @click="logOut"
        >
          Log Out 👋🏻
        </a>
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

    <div
      class="hamburger"
      @click="menuActive"
      :class="{ is_active: !menuResponsive }"
    >
      <div class="_layer -top"></div>
      <div class="_layer -mid"></div>
      <div class="_layer -bottom"></div>
    </div>

    <nav
      class="menuppal"
      :class="{ is_active: !menuResponsive }"
      @click="menuActive"
    >
      <ul>
        <li><RouterLink class="links --blue" to="/">Home</RouterLink></li>
        <li><RouterLink class="links --blue" to="/books">Books</RouterLink></li>

        <li>
          <RouterLink
            v-if="this.getUser"
            class="links --darkBlack"
            to="/addbook"
            >Add book</RouterLink
          >
        </li>

        <li>
          <RouterLink
            v-if="!this.getUser && this.userIsLogged"
            class="links --darkBlack"
            to="/favorites"
          >
            Your Favorites
          </RouterLink>
        </li>

        <li>
          <a v-if="!this.userIsLogged" class="links --blue"> Log in </a>
        </li>

        <li>
          <a
            v-if="this.userIsLogged"
            class="links --darkBlack logs"
            class-active="active"
            @click="logOut"
          >
            Log Out 👋🏻
          </a>
        </li>
      </ul>
    </nav>
  </header>

  <Modal :showButton="true" v-if="showModal" @close="closeModal">
    <LogIn></LogIn>
  </Modal>

  <!---------------------------------BODY------------------------------------>
  <RouterView />

  <!-----------------------------GLOBAL FOOTER------------------------------->
  <footer>
    <img src="/images/WebElements/logoCircle.png" />
    <nav>
      <RouterLink to="/" class="links" class-active="active">Home</RouterLink>
      <RouterLink class="links" to="/books">Books</RouterLink>

      <RouterLink
        v-if="!this.getUser && this.userIsLogged"
        class="links"
        class-active="active"
        to="/favorites"
      >
        Your Favorites
      </RouterLink>

      <RouterLink
        v-if="this.getUser"
        to="/addbook"
        class="links"
        class-active="active"
      >
        Add book
      </RouterLink>

      <a
        v-if="!this.userIsLogged"
        class="links"
        class-active="active"
        @click="openModal"
      >
        Log in
      </a>

      <a v-else class="links" class-active="active" @click="logOut">
        Log Out
      </a>
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
  