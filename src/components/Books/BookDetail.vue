<script>
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
        <a class="normalText --lightBlack --small">{{
          this.stars
        }}</a>
      </div>

      <p class="normalText --lightBlack --small">
        {{ this.about }}
      </p>
      <p class="titleText --blue price">$ {{ this.price }}</p>
      <div class="btnlove">
        <button class="button --blue">Add to cart</button>
        <!--LoveButton class="lovebtn" :notLike="this.notLike"></LoveButton-->
      </div>
    </div>
  </div>


</template>


<style lang="scss" scoped>
@import "src/assets/main.scss";

.detailContainer {
  display: flex;
  flex-direction: row;
  width: 700px;
  height: 90vh;
  padding: 100px;
  background-color: rgb(234, 234, 234);

  .detailInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    .btnlove {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;

      .lovebtn {
        position: absolute;
        z-index: 20;
        right: 230px;
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