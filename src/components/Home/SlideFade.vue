<script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from "swiper/vue";
    
    // Import Swiper styles
    import "swiper/css";
    import "swiper/css/navigation";
    
    // import required modules
    import { Navigation, Autoplay } from "swiper";
    
    export default {
      props: {
        slides: {
          type: Array,
          default: () => [],
        },
      },
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [Navigation, Autoplay],
        };
      },
    };
    </script>
    
    <template>
      <section>
        <swiper 
        :navigation="true" 
        :modules="modules" 
        :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
        class="mySwiper">
          <swiper-slide v-for="slide in slides" :key="slide">
            <div class="page">
              <img :src="slide.image" />
    
              <div class="pageInfo">
                <h1 class="titleText --blue name">{{ slide.title }}</h1>
                <h1 class="titleText --blue author">{{ slide.author }}</h1>
                <a class="normalText --small --blue info">{{ slide.description }}</a>
    
                <div class="pageButton">
                  <button class="button --blue">Add to cart</button>
                  <button class="button --lineBlue">More info</button>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </section>
    </template>
    
    
    
    <style lang="scss" scoped>
    @import "src/assets/main.scss";
    
    .swiper {
      width: 100%;
      --swiper-theme-color: #ff8282;
      --swiper-navigation-size: 40px;
      display: flex;
      justify-content: center;
    }
    
    .page {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin: 20px;
    
      img {
        width: 270px;
        height: 430px;
        margin-right: 50px;
        border-radius: 20px;
      }
      .pageInfo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    
        .name {
          font-weight: 1000;
          font-size: $textSizeSubtitle;
          margin: 5px 0px;
        }
        .author {
          font-weight: 600;
          font-size: $textSizeLetter;
          margin: 0px;
        }
        .info {
          display: block;
          width: 450px;
          margin: 20px 0px;
        }
        .pageButton {
          margin: 20px 0px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
    
          .button {
            margin: 10px;
          }
        }
      }
    }
    </style>