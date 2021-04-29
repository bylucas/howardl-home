<template>
<HeaderHome />
  <main>

  <section class="home-content">
  <div class="home-card">
		<div>
			<img src="/javascript-small.png" alt="Modern Javascript">
		</div>
		<div>
			<h2><router-link to="/javascript">Modern Javascript</router-link></h2>
			<p>A personal reference library for javascript. A quick reference guide, easily accessed on-line.</p>
		</div>
	</div>
	<h3 style="text-align: center;">Under Construction</h3>
  </section>
</main>

</template>
<script>
import HeaderHome from '../components/HeaderHome.vue'
export default {
  
  components: {
    HeaderHome
  }
 
}
</script>