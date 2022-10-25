<script>
import { mapStores } from "pinia";
import { useAuthenticationStore } from "../../stores/authentication";
import { useDatabaseStore } from "../../stores/database";

import { auth } from "../../firebase/config";

export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      newLog: false,

      theUser: {},
    };
  },

  computed: {
    ...mapStores(useAuthenticationStore),
    ...mapStores(useDatabaseStore),

    userIsLogged() {
      return auth.currentUser !== null;
    },
  },

  methods: {
    addUser() {
      theUser = {
        name: this.name,
        email: this.email,
        favorites: [],
      };
      this.databaseStore.user = user;
    },

    signIn(e) {
      e.preventDefault();
      this.authenticationStore.signIn(this.email, this.password);
    },

    signUp(e) {
      e.preventDefault();
      if (this.password === this.confirmPassword) {
        this.authenticationStore.signUp(this.email, this.password, this.name);
      } else {
        alert("Passwords do not match");
      }
    },

    switchNewLogShow() {
      this.newLog = !this.newLog;
    },
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
  

<template>
  <section class="loginFormContainer">
    <h1
      class="titleText --white switchNewLog"
      :class="{ showTitleNew: this.newLog == true }"
    >
      Join our community!
    </h1>
    <h1
      class="titleText --white switchNewLog"
      :class="{ showTitleOld: this.newLog == false }"
    >
      Welcome back!
    </h1>

    <section class="form">
      <div class="inputs">
        <label
          class="normalText --small --white switchNewLog"
          :class="{ showTitleNew: this.newLog == true }"
          for="name"
          >Name</label
        >
        <input
          class="normalText --small --darkBlack switchNewLog"
          :class="{ elinputNew: this.newLog == true }"
          type="text"
          name="name"
          id="name"
          v-model="name"
        />

        <label class="normalText --small --white" for="email">Email</label>
        <input
          class="normalText --small --darkBlack elinput"
          type="email"
          name="email"
          id="email"
          v-model="email"
        />

        <label class="normalText --small --white" for="password"
          >Password</label
        >
        <input
          class="normalText --small --darkBlack elinput"
          type="password"
          name="password"
          id="password"
          v-model="password"
        />

        <label
          class="normalText --small --white switchNewLog"
          :class="{ showTitleNew: this.newLog == true }"
          for="confirmPassword"
          >Confirm password</label
        >
        <input
          class="normalText --small --darkBlack switchNewLog"
          :class="{ elinputNew: this.newLog == true }"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          v-model="confirmPassword"
        />
      </div>

      <button
        class="button --white switchNewLog"
        @click="signIn"
        :class="{ showBtnOld: this.newLog == false }"
      >
        Log In
      </button>

      <button
        class="button --white switchNewLog"
        @click="signUp"
        :class="{ showBtnOld: this.newLog == true }"
      >
        Sign Up
      </button>

      <a
        class="normalText --small --white switchlink switchNewLog"
        :class="{ showTitleNew: this.newLog == false }"
        @click="switchNewLogShow"
        >Don't you have an account yet? Sign up Now!</a
      >
      <a
        class="normalText --small --white switchlink switchNewLog"
        :class="{ showTitleNew: this.newLog == true }"
        @click="switchNewLogShow"
        >Already have an account? Log in Now!</a
      >
    </section>
  </section>

  <section></section>
</template>
  


<style lang="scss" scoped>
@import "src/assets/main.scss";
.loginFormContainer {
  padding: 40px;
  background: linear-gradient($gradientPink);
  box-shadow: 2px 2px 5px $blackLight;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0px;
  border-radius: 20px;

  .switchNewLog {
    display: none;
  }
  .showTitleNew {
    display: flex;
  }
  .showTitleOld {
    display: flex;
  }

  .showBtnNew {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .showBtnOld {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .form {
    display: flex;
    flex-direction: column;
    border: 1px solid $background;
    border-radius: 20px;
    padding: 30px 30px 60px 30px;
    width: 400px;
    align-items: center;
    position: relative;
    margin-top: 30px;

    .inputs {
      width: 100%;
      text-align: left;

      .elinput {
        display: block;
        padding: 0px 10px;
        background-color: $background;
        border: 1px solid $background;
        border-radius: 20px;
        height: 40px;
        width: 100%;
        margin-bottom: 10px;
      }
      .elinputNew {
        display: block;
        padding: 0px 10px;
        background-color: $background;
        border: 1px solid $background;
        border-radius: 20px;
        height: 40px;
        width: 100%;
        margin-bottom: 10px;
      }
    }

    .switchlink {
      cursor: pointer;
      position: absolute;
      bottom: 8px;
      text-decoration: underline;
    }
  }
}
</style>