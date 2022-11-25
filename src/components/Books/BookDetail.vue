<script>
import LoveButton from "./LoveButton.vue";
import Stars from "./Starts.vue";
import { mapStores } from "pinia";
import { useAuthenticationStore } from "../../stores/authTest/authentication";

export default {
  props: {
    currentBook: {},
    currentUser: {},
  },

  components: {
    LoveButton,
    Stars,
  },

  computed: {
    ...mapStores(useAuthenticationStore),

    userLog() {
      return this.currentUser;
    },
  },

  data() {
    return {
      votePosition: Number,
      rate: String,
      userIn: false,
      isNotLike: true,
    };
  },

  watch: {
    userLog(newChanges, oldChanges) {
      if (newChanges != null) {
        this.userIn = true;

        this.getPositionUpdate();

        let favBookPosition = this.currentUser.favorites.findIndex(
          (v) => v.id == this.currentBook.id
        );

        if (favBookPosition != -1) {
          this.isNotLike = false;
          //console.log("YA ESTA DE FAVORITO", favBookPosition);
        } else {
          this.isNotLike = true;
          //console.log("NO ESTA DE FAVORITO", favBookPosition);
        }

        //console.log("ALGUIEN", favBookPosition);
      } else {
        this.rate = "0";
        this.userIn = false;
        this.isNotLike = true;
        //console.log("NADIE", newChanges);
      }
    },
  },

  methods: {
    addRating(r) {
      //console.log(r);
      this.authenticationStore.addRating(r, this.currentBook);
      this.getPositionUpdate();
    },

    getPositionUpdate() {
      this.votePosition = this.currentBook.votes.findIndex(
        (v) => v.by == this.currentUser.id
      );
      if (this.votePosition != -1) {
        this.rate = this.currentBook.votes[this.votePosition].rate;
      } else {
        this.rate = "0";
      }
    },
  },
};
</script>

     
<template>
  <div class="detailContainer" v-if="this.currentBook.title">
    <img :src="this.currentBook.image.url" />
    <div class="detailInfo">
      <h1 class="titleText --blue" @click="prueba">
        {{ this.currentBook.title }}
      </h1>

      <div class="starsAuthor">
        <a class="normalText --blue --small">{{ this.currentBook.author }}</a>
        <p class="normalText --blue --small">|</p>
        <Stars :rate="this.rate" :userIn="this.userIn" @rating="addRating">
        </Stars>
        <p class="normalText --blue --small">|</p>
        <a class="normalText --lightBlack --small"
          ><span class="littleStar">★</span> {{ this.currentBook.stars }}</a
        >
      </div>

      <p class="normalText --lightBlack --small">
        {{ this.currentBook.about }}
      </p>
      <p class="titleText --blue price">$ {{ this.currentBook.price }}</p>
      <div class="btnlove">
        <button class="button --blue">Add to cart</button>
        <!------arreglar boton like------>
        <LoveButton
          class="lovebtn"
          :isNotLike="this.isNotLike"
          :currentBook="this.currentBook"
        ></LoveButton>
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
    object-fit: fill;
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

      .littleStar {
        color: #eecc5c;
      }
    }

    .price {
      font-size: 30px;
      margin: 10px 0px;
    }
  }
}

@media screen and (max-width: 600px) {
  .detailContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 30px 10px 50px 20px;

    img {
      width: 220px;
      height: 350px;
    }
    .detailInfo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0px 20px;
      text-align: center;
      gap: 10px;
      width: 90%;

      .btnlove {
        .lovebtn {
          display: none;
        }
      }
    }
  }
}
</style>