<template>
<div class="wrapper">
  <BackTop text="Top" />
  <div class="nav-wrap">
  <Nav />
  </div>
   <Header />
  <router-view />
<Footer />
  </div>
</template>

<script>
import BackTop from './components/BackTop.vue'
import Nav from './views/Nav.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',

  components: {
    BackTop,
    Nav,
    Header,
    Footer
  }
};
</script>

<style>
.loaded {
  height: 180px;
  width: 100%;
}

.cam-viewport {
  height: 180px;
  display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
}

.title {
  color: rgb(245, 238, 238);
  font-size: 1.5rem;
  text-align: center;
  line-height: 1.2;
}
</style>
