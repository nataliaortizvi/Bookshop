<script>
import LoveButton from "./LoveButton.vue";

export default {
  props: {
    title: String,
    author: String,
    price: Number,
    about: String,
    notLike: Boolean,
    image: String,
    stars: String,
  },

  components: {
    LoveButton,
  },

};
</script>

     
<template>
  <div class="detailContainer">
    <img :src="this.image" />
    <div class="detailInfo">
      <h1 class="titleText --blue">{{ this.title }}</h1>

      <div class="starsAuthor">
        <a class="normalText --blue --small">{{ this.author }}</a>
        <p class="normalText --blue --small">|</p>
        <a class="normalText --lightBlack --small">{{ this.stars }}</a>
      </div>

      <p class="normalText --lightBlack --small">
        {{ this.about }}
      </p>
      <p class="titleText --blue price">$ {{ this.price }}</p>
      <div class="btnlove">
        <button class="button --blue">Add to cart</button>
        <!------arreglar boton like------>
        <LoveButton class="lovebtn" :notLike=true></LoveButton>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "src/assets/main.scss";

.detailContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
  padding: 150px 40px 100px 40px;
  gap: 50px;

  img {
    width: 300px;
    height: 500px;
    border-radius: 20px;
    box-shadow: 2px 2px 5px $blackLight;
  }
  .detailInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    width: 400px;

    .btnlove {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;

      .lovebtn {
        position: absolute;
        z-index: 20;
        right: 150px;
        top: -5px;
      }
    }

    .starsAuthor {
      display: flex;
      flex-direction: row;
      align-content: center;
      line-height: 35px;
      gap: 20px;

      p {
        font-size: 25px;
      }
    }

    .price {
      font-size: 30px;
      margin: 10px 0px;
    }
  }
}
</style>