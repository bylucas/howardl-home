<template>
  <lazyBackground
  :image-source="backgroundImage"
  loading-image="src/assets/img/loading.gif"
  error-image="src/assets/img/error.jpg"
  image-class="cam-viewport"
  background-size=""
  :title="title"  />
  <main>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, cumque. Totam molestiae incidunt velit repellat natus adipisci libero sapiente recusandae, dolorum necessitatibus maiores quo doloribus fugiat nihil sunt deserunt et!</p>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fugit libero optio ullam sequi neque illum accusamus, distinctio aliquid inventore eius repudiandae omnis iusto corrupti molestias nihil, ut ducimus veniam.</p>
</main>
</template>
<script>
import lazyBackground from '../components/lazyBackground.vue'
export default {
  data() {
    return {
      backgroundImage: 'src/assets/img/loading.gif',
      title: 'This is the Termonal page'
    }
  },
  components: {
    lazyBackground
  }
 
}
</script>