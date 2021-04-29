<template>
<div class="wrapper">
  <BackTop text="Top" />
  <div class="nav-wrap">
  <Nav />
  </div>
  <router-view />
<Footer />
  </div>
</template>

<script>
import BackTop from './components/BackTop.vue'
import Nav from './views/Nav.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',

  components: {
    BackTop,
    Nav,
    Footer
  }
};
</script>
