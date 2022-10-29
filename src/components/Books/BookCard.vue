<script>
export default {
  props: {
    currentBook: {},
  },

  data() {
    return {
      titleRoute: this.currentBook.title.replace(/ /g, ""),
    };
  },

  methods: {
    addFavorites() {
      this.$emit("favorites", this.rateOne);
    },
    prueba(){
      console.log(this.currentBook.image.url);
      
    }
  },
};
</script>

<template>
  <section class="cardContainer" @click="prueba">
    <!--------------------card info-------------------->
    <RouterLink :to="`/details/${this.titleRoute}`">
      <img :src="this.currentBook.image.url">
    </RouterLink>

    <div class="cardContainer_info">
      <RouterLink :key="this.titleRoute" :to="`/details/${this.titleRoute}`">
        <h1 class="normalText --darkBlack --small">
          {{ this.currentBook.title }}
        </h1>
      </RouterLink>

      <h2 class="normalText --lightBlack">
        {{ this.currentBook.author }} ({{ this.currentBook.year }})
      </h2>

      <div class="cardContainer_elem">
        <a class="normalText --lightBlack --small"
          ><span class="littleStar">★</span> {{ this.currentBook.stars }}</a
        >
        <h1 class="normalText --darkBlack --big">
          $ {{ this.currentBook.price }}
        </h1>
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
    object-fit: fill;
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
      .littleStar {
        color: #eecc5c;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .cardContainer {
    height: 380px;
    width: 160px;
    justify-content: flex-start;

    .lovebtn {
      position: absolute;
      z-index: 20;
      right: -10px;
      top: -10px;
    }

    img {
      height: 215px;
      width: 145px;
      margin-top: 6px;
    }

    .cardContainer_info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      width: 135px;
      line-height: 22px;
      margin-top: 5px;

      h1 {
        font-weight: lighter;
      }

      h2 {
        font-weight: lighter;
        font-size: 16px;
      }

      .cardContainer_elem {
        flex-direction: column;
        align-items: flex-start;
        width: 150px;

        h1 {
          font-weight: 500;
          margin-top: 2px;
          font-size: 18px;
        }
      }
    }
  }
}
</style>