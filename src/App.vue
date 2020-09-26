<template>
<div class="wrapper">
  <Header />
  <Nav />
  <router-view />
  <Footer />
  </div>
</template>

<script>
import Nav from './views/Nav.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Header,
    Footer
  }
};
</script>
