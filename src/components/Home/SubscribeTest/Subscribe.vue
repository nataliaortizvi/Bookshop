<script>
</script>


<template>
  <section>
    <img src="/images/WebElements/pinkball.png" class="ball" />
    <div class="container">
      <h1 class="titleText --pink">Join our community!</h1>
      <div class="line"></div>
      <a class="normalText --small --lightBlack"
        >The community is where yoy can find other people who are also book
        lovers and share your likes and thoughts with them about the books you
        read or want to buy...</a
      >
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "src/assets/main.scss";

section {
  position: relative;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    text-align: center;

    .line {
      background: linear-gradient(to right, $gradientPink);
      width: 40vw;
      height: 10px;
      border-radius: 20px;
    }

    * {
      margin-bottom: 15px;
    }

    .normalText {
      width: 450px;
    }

    .button {
      margin: 0px;
    }
  }

  .ball {
    position: absolute;
    left: -80px;
    top: -100px;
    z-index: 50;
  }
}

@media screen and (max-width: 600px) {
  section {
    .container {
      .line {
        height: 8px;
      }

      .normalText {
        width: 300px;
      }
    }

    .ball {
      position: absolute;
      left: -80px;
      top: -100px;
      z-index: 50;
      width: 40%;
    }
  }
}
</style>