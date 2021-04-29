<template>
  <div class="outer-header">
  <lazyBackground
  :image-source="backgroundImage"
  loading-image="/loading2.gif"
  error-image="/error.jpg"
  image-class="cam-viewport"
  background-size=""
  :title="title"  />
  </div>
  <main>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, cumque. Totam molestiae incidunt velit repellat natus adipisci libero sapiente recusandae, dolorum necessitatibus maiores quo doloribus fugiat nihil sunt deserunt et!</p>

  <pre><code class="lang-scss">//@include border-radius(10px);no default radius

@mixin border-radius($radius) {  
    border-top-left-radius: $radius;  
    border-top-right-radius: $radius * 2;  
    border-bottom-left-radius: $radius + 15;  
    border-bottom-right-radius: $radius + 25;  
}
</code></pre>

<pre><code class="language-scss">.element {
@include margin(20px 3em 10vh null);
}
//CSS Output
.element {
margin-top: 20px;
margin-right: 3em;
margin-bottom: 10vh;
}
</code></pre>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fugit libero optio ullam sequi neque illum accusamus, distinctio aliquid inventore eius repudiandae omnis iusto corrupti molestias nihil, ut ducimus veniam.</p>
</main>
</template>
<script>
import lazyBackground from '../components/lazyBackground.vue'
export default {
  data() {
    return {
      backgroundImage: '/post-image.jpg',
      title: 'This is the Scss page'
    }
  },
  components: {
    lazyBackground
  },
  mounted() {
    Prism.highlightAll()
  }
 
};
</script>

<style scoped>
  .outer-header {
    background-color: #FEACED;
  }
</style>