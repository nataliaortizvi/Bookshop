<script>
  import { RouterLink, RouterView } from 'vue-router';

  export default {
    components: {
      RouterLink, RouterView
    }
  }
</script>
  
  
<template>

   <!-----------------------------GLOBAL HEADER------------------------------->
  <header>
    <section class="leftItems">
      <img src="/images/WebElements/logopeque.png" class="imageLogo">
  
      <nav>
        <RouterLink to="/" class="links --darkBlack" class-active="active">Home</RouterLink>
        <RouterLink to="/books" class="links --darkBlack" class-active="active">Books</RouterLink>
        <RouterLink to="/community" class="links --darkBlack" class-active="active">Community</RouterLink>
        <RouterLink to="/login" class="links --darkBlack" class-active="active">Login</RouterLink>
      </nav>
    </section>
      
    <!---ICON LIBRARY--->
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css">
  
    <section class="RightItems">
      <span class="icon"><i class="fa fa-search"></i></span>
      <input id="search" placeholder="Search..."/>
      <!--input type="search" id="search" placeholder="Search..."/-->
    </section>
        
  </header>
  

   <!---------------------------------BODY------------------------------------>
  <RouterView/>


   <!-----------------------------GLOBAL FOOTER------------------------------->
  <footer>
    <img src="/images/WebElements/logoCircle.png">
    <nav>
      <RouterLink to="/" class="links" class-active="active">Home</RouterLink>
      <RouterLink to="/books" class="links" class-active="active">Books</RouterLink>
      <RouterLink to="/community" class="links" class-active="active">Community</RouterLink>
      <RouterLink to="/login" class="links" class-active="active">Login</RouterLink>
    </nav>
    <a class="normalText">© Bookie, 2022. Bookie Bookshop Limited. Registered in Colombia. Company number 00010095. </a>
  </footer>

</template>
  
  
  <!-----------------------------STYLES------------------------------->
<style lang="scss">

    //----STYLE RESET-----
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

</style>
  