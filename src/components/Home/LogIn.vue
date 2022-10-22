<script>
import { mapStores } from "pinia";
import { useAuthenticationStore } from "../../stores/authentication";

export default {
  data() {
    return {
      email: "",
      password: "",
      name: "",
      newLog: false,
    };
  },

  computed: {
    ...mapStores(useAuthenticationStore),
  },

  methods: {
    signIn(e) {
      e.preventDefault();
      this.authenticationStore.signIn(this.email, this.password);
    },
    switchNewLogShow() {
      this.newLog = !this.newLog;
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

    <form class="form">
      <div class="inputs">
        <label
          class="normalText --small --white switchNewLog"
          :class="{ showTitleNew: this.newLog == true }"
          for="email"
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
        @click="signIn"
        :class="{ showBtnNew: this.newLog == true }"
      >
        Sign Up
      </button>

      <a class="normalText --small --white switchlink" @click="switchNewLogShow"
        >Don't you have an account yet? Sign up Now!</a
      >
    </form>
  </section>

  <section></section>
</template>
  


<style lang="scss" scoped>
@import "src/assets/main.scss";
.loginFormContainer {
  padding: 50px;
  background: linear-gradient($gradientPink);
  box-shadow: 2px 2px 5px $blackLight;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
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
        margin-bottom: 20px;
      }
      .elinputNew {
        display: block;
        padding: 0px 10px;
        background-color: $background;
        border: 1px solid $background;
        border-radius: 20px;
        height: 40px;
        width: 100%;
        margin-bottom: 20px;
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