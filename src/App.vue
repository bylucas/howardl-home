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
  height: 200px;
  width: 100%;
}

.cam-viewport {
  height: 200px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center center;
  max-width: 900px;
  margin: 0 auto;
}

.title {
  color: #fff;
  font-size: 1.8rem;
  text-align: center;
  line-height: 1.2;
}

@media screen and (min-width: 700px) {
  .title {
  font-size: 2.2rem;
}
}

@media screen and (min-width: 900px) {
  .title {
  font-size: 2.5rem;
}
}
</style>
