<script>
import Landing from "../components/Home/LandingTest/Landing.vue";
import SlideCarousel from "../components/Home/SlideCarousel.vue";
import SlideFade from "../components/Home/SlideFadeTest/SlideFade.vue";
import Subscribe from "../components/Home/SubscribeTest/Subscribe.vue";

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
            image: 'images/books/love.png',
          },
          {
            title: 'Kids',
            image: 'images/books/kids.png',
          },
          {
            title: 'Fiction',
            image: 'images/books/fiction.jpg',
          },
          {
            title: 'Biographies',
            image: 'images/books/man.jpg',
          },
          {
            title: 'Horror',
            image: 'images/books/horror.jpg',
          },
          {
            title: 'History',
            image: 'images/books/history.jpg',
          },
          {
            title: 'Mystery',
            image: 'images/books/mystery.png',
          },
          {
            title: 'Food',
            image: 'images/books/food.jpg',
          },
          {
            title: 'Educational',
            image: 'images/books/educational.jpg',
          },
        ]"
      ></SlideCarousel>
    </section>
  </div>

  <h2 class="subtitleText --quote" style="background-image: url(images/WebElements/fotoquote.png)">
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
          image: 'images/books/stephenBook.png',
          description:
            'Legendary storyteller Stephen King goes into the deepest well of his imagination in this spellbinding novel about a seventeen-year-old boy who inherits the keys to a parallel world where good and evil are at war, and the stakes could not be higher—for that world or ours',
        },
        {
          title: 'Belladonna',
          author: 'Adalyn Grace',
          image: 'images/books/adalynBook.png',
          description:
            'New York bestselling author Adalyn Grace brings to life a highly romantic, Gothic-infused world of wealth, desire, and betrayal.',
        },
        {
          title: 'The Ballad of Never After',
          author: 'Stephanie Garber',
          image: 'images/books/garberBook.png',
          description:
            'Stephanie Garbers The Ballad of Never After is the fiercely-anticipated sequel to the #1 New York Times bestseller Once Upon a Broken Heart, starring Evangeline Fox and the Prince of Hearts on a new journey of magic, mystery, and heartbreak',
        },
        {
          title: 'The Marriage Portrait',
          author: 'Maggie O Farrell',
          image: 'images/books/hamnetBook.png',
          description:
            'Brings the world of Renaissance Italy to jewel-bright life in this unforgettable fictional portrait of the captivating young duchess Lucrezia de´ Medici as she makes her way in a troubled court.',
        },
        {
          title: 'The First to Die at the End',
          author: 'Adam Silvera',
          image: 'images/books/silveraBook.jpg',
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
  //background-image: url("/images/WebElements/fotoquote.png");
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

@media screen and (max-width: 600px) {
  .category {
    margin-bottom: 0px;
    background-color: $background;
    margin-top: 0px;

    .titleText {
      margin: 0px 0px 0px 0px;
      text-align: center;
    }
    .carouselContainer {
      width: 100%;
      z-index: 50;
      background: $background;
    }
  }

  .--quote {
    width: 100%;
    height: 350px;
    text-align: center;
    padding: 10px 50px;
    background-size: cover;
    background-position: -500px 0px;
    font-size: 20px;
    backdrop-filter: blur(3px);
  }


  .bestSellers {
  width: 100%;
  height: 100vh;
  padding: 20px;

}
}
</style>