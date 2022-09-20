<script>
import Landing from "../components/Home/Landing.vue";
import SlideCarousel from "../components/Home/SlideCarousel.vue";
import SlideFade from "../components/Home/SlideFade.vue";
import Subscribe from "../components/Home/Subscribe.vue";

export default {
  components: {
    Landing,
    SlideCarousel,
    SlideFade,
    Subscribe,
  },
};
</script>

<template>
  <Landing></Landing>

  <div class="category">
    <h1 class="titleText --pink">Shop by categories</h1>
    <section class="carouselContainer">
      <SlideCarousel
        :slides="[
          {
            title: 'Romance',
            image: 'src/assets/img/Books/love.png',
          },
          {
            title: 'Kids',
            image: 'src/assets/img/Books/kids.png',
          },
          {
            title: 'Fiction',
            image: 'src/assets/img/Books/fiction.jpg',
          },
          {
            title: 'Biographies',
            image: 'src/assets/img/Books/man.jpg',
          },
          {
            title: 'History',
            image: 'src/assets/img/Books/history.jpg',
          },
          {
            title: 'Mystery',
            image: 'src/assets/img/Books/mystery.png',
          },
          {
            title: 'Food',
            image: 'src/assets/img/Books/food.jpg',
          },
          {
            title: 'Classics',
            image: 'src/assets/img/Books/classic.jpg',
          },
          {
            title: 'Educational',
            image: 'src/assets/img/Books/educational.jpg',
          },
          {
            title: 'Kids',
            image: 'src/assets/img/Books/kids.png',
          },
        ]"
      ></SlideCarousel>
    </section>
  </div>

  <h2 class="subtitleText --quote">
    “A reader lives a thousand lives before he dies . . .<br />The man who never
    reads lives only one.” George R.R. Martin
  </h2>

  <div class="bestSellers">
    <h1 class="titleText --white">Best Sellers</h1>
    <SlideFade
      :slides="[
        {
          title: 'Fairy Tale',
          author: 'Stephen King',
          image: 'src/assets/img/Books/stephenBook.png',
          description:
            'Legendary storyteller Stephen King goes into the deepest well of his imagination in this spellbinding novel about a seventeen-year-old boy who inherits the keys to a parallel world where good and evil are at war, and the stakes could not be higher—for that world or ours',
        },
        {
          title: 'Belladonna',
          author: 'Adalyn Grace',
          image: 'src/assets/img/Books/adalynBook.png',
          description:
            'New York bestselling author Adalyn Grace brings to life a highly romantic, Gothic-infused world of wealth, desire, and betrayal.',
        },
        {
          title: 'The Ballad of Never After',
          author: 'Stephanie Garber',
          image: 'src/assets/img/Books/garberBook.png',
          description:
            'Stephanie Garbers The Ballad of Never After is the fiercely-anticipated sequel to the #1 New York Times bestseller Once Upon a Broken Heart, starring Evangeline Fox and the Prince of Hearts on a new journey of magic, mystery, and heartbreak',
        },
        {
          title: 'The Marriage Portrait',
          author: 'Maggie O Farrell',
          image: 'src/assets/img/Books/hamnetBook.png',
          description:
            'Brings the world of Renaissance Italy to jewel-bright life in this unforgettable fictional portrait of the captivating young duchess Lucrezia de´ Medici as she makes her way in a troubled court.',
        },
        {
          title: 'The First to Die at the End',
          author: 'Adam Silvera',
          image: 'src/assets/img/Books/silveraBook.jpg',
          description:
            'In this prequel to number one New York Times bestselling phenomenon They Both Die at the End, two new strangers spend a life-changing day together after Death-Cast first makes their fateful calls.',
        },
      ]"
    ></SlideFade>
  </div>

  <Subscribe></Subscribe>
</template>


<style lang="scss" scoped>
@import "src/assets/main.scss";

.category {
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 50px;
  margin-bottom: 0px;
  position: relative;
  padding: 0px;

  .titleText {
    margin-right: 200px;
  }
  .carouselContainer {
    width: 100%;
    z-index: 50;
    background: $background;
  }
}

.--quote {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 350px;
  color: $background;
  font-family: $fontTitle;
  font-style: italic;
  font-weight: 100;
  font-size: 25px;
  padding: 50px 850px 50px 100px;
  background-image: url("src/assets/img/WebElements/fotoquote.png");
}
.bestSellers {
  background: linear-gradient($gradientBlue);
  width: 100%;
  height: 80vh;
  padding: 20px;

  .titleText {
    display: block;
    text-align: center;
  }
}
</style>