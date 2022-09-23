<script>
import BookCard from "../components/Books/BookCard.vue";
export default {
  components: {
    BookCard,
  },
};
</script>

<template>

  <section class="booksContainer">
    <div class="filtersSide">
      <h1 class="titleText --pink">Books</h1>
      <h2 class="normalText --pink --big">Category</h2>
    </div>
    <div class="booksSide">
      <BookCard></BookCard>
    </div>
  </section>

</template>


<style lang="scss" scoped>
@import "src/assets/main.scss";

.booksContainer {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;

  .filtersSide {
    display: flex;
    flex-direction: column;
    width: 500px;
    padding: 100px 50px;
    
    .titleText {
      margin-bottom: 50px;
    }
    .normalText {
      font-weight: 100;
    }
    
  }

  .booksSide {
    background: linear-gradient($gradientBlue);
    display: flex;
    width: 100%;
    padding: 100px 50px;
  }
}
</style>