<script>
//js

let x = document.querySelector(".imageLandingBook");
if (x != null) {
  var rect = x.getBoundingClientRect();
  console.log(x);
  console.log(rect.left);
}
</script>
    
    <template>
  <!--html-->
  <section class="landing">
    <div class="landingText">
      <h1 class="mainTitleText --blue">Welcome<br />to Bookie!</h1>
      <a class="subtitleText --blue"
        >The bookshop where you´ll<br />find the best books, and<br />lovers of
        them.</a
      >
      <RouterLink to="/books">
        <button class="button --blue">Start shopping</button>
      </RouterLink>
    </div>

    <img
      src="src/assets/img/WebElements/fondoLibros.png"
      class="imageLandingBook"
    />
    <img
      src="src/assets/img/WebElements/fondolanding.png"
      class="imageLanding"
    />
    <img
      src="src/assets/img/WebElements/fondolandingP.png"
      class="imageLandingP"
    />
  </section>
</template>
    
    
<style lang="scss" scoped>
@import "src/assets/main.scss";

.landing {
  display: flex;
  align-items: center;
  width: 100vw;
  height: 95vh;
  margin: 0px;
  padding: 0px;

  * {
    margin-top: 25px;
  }

  .landingText {
    padding-left: 200px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    .subtitleText {
      line-height: 35px;
      font-weight: 100;
    }
  }

  .imageLanding {
    align-self: flex-start;
    position: absolute;
    margin-top: 0px;
    width: 100%;
    height: 120%;
    object-fit: cover;
    z-index: -5;
  }

  .imageLandingP {
    display: none;
  }

  .imageLandingBook {
    position: absolute;
    z-index: -6;
    height: 125%;
    width: 100%;
    //margin: 0px;
    margin-left: 0%;
    object-fit: cover;
    animation: 5s alternate infinite slidein;
  }

  @keyframes slidein {
    from {
      top: 0px;
    }
    to {
      top: -150px;
    }
  }
}

@media screen and (max-width: 600px) {
  .landing {
    justify-content: flex-start;
    align-items: flex-start;

    * {
      margin-top: 0px;
    }
    .landingText {
      padding: 130px 0px 0px 40px;
      align-items: flex-start;
      text-align: start;
      gap: 10px;

      .mainTitleText {
        font-size: 55px;
      }

      .subtitleText {
        line-height: 30px;
        font-size: 23px;
      }
    }
    .imageLanding {
      display: none;
    }

    .imageLandingP {
      display: flex;
      align-self: flex-start;
      position: absolute;
      z-index: -5;
      width: 100%;
      height: 100%;
      object-fit: contain;
      margin-top: -1px;
    }
  }
}
</style>