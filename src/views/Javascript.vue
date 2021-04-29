<template>
  <div class="outer-header">
  <lazyBackground
  :image-source="backgroundImage"
  loading-image="/loading2.gif"
  error-image="/error.jpg"
  image-class="cam-viewport"
  background-size="cover"
  :title="title" />
  </div>
  <main>
    <h3 class="menu-title">MENU</h3>
    <div class="links-wrap">
      <div class="links-left">
    <router-link :class="{ active: isActive}" to="/variables">Variables</router-link>
    </div>
    <div class="links-right">
    <router-link to="/functions">Functions</router-link>
    </div>
    </div>
<section class="post-content">
  <router-view />
</section>
</main>
</template>

<script>
import ScrollLink from '../components/ScrollLink.vue'
import lazyBackground from '../components/lazyBackground.vue'
export default {
  
  data() {
    return {
      backgroundImage: '/javascript-header.png',
      title: 'Modern Javascript'
    }
  },

  components: {
    ScrollLink,
    lazyBackground
  },
   mounted() {
    Prism.highlightAll()
  }
 
};
</script>

<style scoped>
  .outer-header {
    background-color: rgb(247, 223, 49);
  }
</style>