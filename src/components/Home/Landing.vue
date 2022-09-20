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
    </style>