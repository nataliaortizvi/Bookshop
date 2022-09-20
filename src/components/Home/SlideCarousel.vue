<script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from "swiper/vue";
    
    // Import Swiper styles
    import "swiper/css";
    import "swiper/css/pagination";
    import "swiper/css/navigation";
    
    // import required modules
    import { Pagination, Navigation, Mousewheel } from "swiper";
    
    export default {
      props: {
        slides: {
          type: Array,
          default: () => ["title", "image"],
        },
      },
    
      components: {
        Swiper,
        SwiperSlide,
      },
    
      setup() {
        return {
          modules: [Pagination, Navigation, Mousewheel],
        };
      },
    };
    </script>
          
    <template>
      <section>
        <swiper
          :slidesPerView="4"
          :centeredSlides="false"
          :spaceBetween="10"
          :direction="'horizontal'"
          :mousewheel="false"
          :loop="false"
          :pagination="{ clickable: true }"
          :navigation="true"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide v-for="slide in slides" :key="slide.title">
            <div class="card">
              <img :src="slide.image" />
              <a class="links --white">{{ slide.title }}</a>
            </div>
          </swiper-slide>
        </swiper>
      </section>
    </template>
    
    <style lang="scss" scoped>
    @import "src/assets/main.scss";
    
    .swiper {
      width: 100%;
      height: 100%;
      margin-top: 120px;
      padding: 20px;
      --swiper-theme-color: #ff8282;
      --swiper-navigation-size: 30px;
    }
    .swiper-slide {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0;
      padding: 0;
      text-align: center;
      margin-bottom: 50px;
      width: 220px;
    
      img {
        display: block;
        height: 330px;
        width: 220px;
        object-fit: fill;
        border-radius: 20px 20px 0px 0px;
      }
    
      a {
        margin-bottom: 5px;
      }
    }
    
    .card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: $blue;
      transition: 0.2s linear;
      box-shadow: 5px 5px 8px $blackDark;
      border-radius: 20px;
      height: 370px;
    
      &:hover {
        transform: scale(1.08);
      }
    }
    </style>