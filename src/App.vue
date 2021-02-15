<template>
  <div id="app">
    <Header></Header>
    <router-view class="view"></router-view>
    <Footer></Footer>


    <!-- <Navbar :links="navigationLink" ></Navbar>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{currentPage}}
          </h1>
          <h2 class="subtitle">
            {{currentPage}} Page
          </h2>
          <router-view class="view"></router-view>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
// import Navbar from './components/Navbar.vue'
import Header from './components/layouts/Header.vue';
import Footer from './components/layouts/Footer.vue';

export default {
  name: 'app',
  components:{
    // Navbar, 
    Header,
    Footer
  },
  created(){
  },
  computed:{
    currentPage(){
      return this.$route.name.toLowerCase()
                        .split(' ')
                        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                        .join(' ');
    },
    navigationLink(){
      return this.$router.options.routes.map(i => {
          return {
              title:i.name,
              url:i.path,
              child:i.child? i.child : []
            }
        });
    },
    // getPublicCDN() {
    //   return window.env.PUBLIC_CDN;
    // }
  }
}
</script>

<style>

</style>
