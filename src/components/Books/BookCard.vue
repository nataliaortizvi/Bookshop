<script>
import LoveButton from "./LoveButton.vue";

export default {
  props: {
    title: String,
    author: String,
    price: Number,
    notLike: Boolean,
    image: String,
    stars: String,
    id: String,
  },

  components: {
    LoveButton,
  },
};
</script>

<template>
  <section class="cardContainer">
    <!--------------------like button-------------------->
    <LoveButton class="lovebtn" :notLike=true></LoveButton>


    <!--------------------card info-------------------->
    <RouterLink :to="`/details/${this.id}`">
      <img :src="this.image" />
    </RouterLink>

    <div class="cardContainer_info">
      <RouterLink :key="this.id" :to="`/details/${this.id}`">
        <h1 class="normalText --darkBlack --small">{{ this.title }}</h1>
      </RouterLink>

      <h2 class="normalText --lightBlack">{{ this.author }}</h2>

      <div class="cardContainer_elem">
        <a>{{ this.stars }}</a>
        <h1 class="normalText --darkBlack --big">$ {{ this.price }}</h1>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "src/assets/main.scss";

.cardContainer {
  height: 430px;
  width: 230px;
  background-color: $background;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2px 2px 8px $blackLight;
  position: relative;


  .lovebtn {
    position: absolute;
    z-index: 20;
    right: -10px;
    top: -10px;
  }

  img {
    height: 315px;
    width: 207px;
    border-radius: 15px 15px 0px 0px;
    margin-top: 10px;
    box-shadow: 0px 4px 5px $blackDark;
  }

  .cardContainer_info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 200px;
    margin: 15px 0px 20px 0px;
    line-height: 25px;

    h1 {
      font-weight: lighter;
    }

    h2 {
      font-weight: lighter;
      font-size: 16px;
    }

    .cardContainer_elem {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 200px;
      margin-top: 5px;

      h1 {
        font-weight: 500;
      }
    }
  }
}
</style>