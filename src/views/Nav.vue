<template>
  <nav>
    
       <div class="left">
      <button id="left-button" @click="swipeLeft">&#8592;</button>
    </div>
      <div class="center" id="content" ref="content">
      <div class="internal" v-for="route in routes" :key="route.path">
        <router-link :to="route.to" :class="{ active: isActive(route.to) }">{{route.text}}</router-link>
      </div>
       </div>
    <div class="right">
    <button id="right-button" @click="swipeRight">
       &#8594;
      </button>
    </div>
  </nav>
</template>
<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const routes = [
      { to: "/", text: "bylucas" },
      { to: "/javascript", text: "JavaScript" },
      { to: "/php", text: "Php" },
      { to: "/scss", text: "Scss" },
      { to: "/terminal", text: "Terminal" },
      { to: "/wordpress", text: "WordPress" }
    ];
    const router = useRouter();
    const activeRoute = computed(() => router.currentRoute.value.path);
    const isActive = path => path === activeRoute.value
    return { isActive, routes };
  },
   methods: {
/**
 * scrollTo - Horizontal Scrolling
 * @param {(HTMLElement ref)} element - Scroll Container
 * @param {number} scrollPixels - pixel to scroll
 * @param {number} duration -  Duration of scrolling animation in millisec
 */
    scrollTo(element, scrollPixels, duration) {
      const scrollPos = element.scrollLeft;
      // Condition to check if scrolling is required
      if ( !( (scrollPos === 0 || scrollPixels > 0) && (element.clientWidth + scrollPos === element.scrollWidth || scrollPixels < 0))) 
      {
        // Get the start timestamp
        const startTime =
          "now" in window.performance
            ? performance.now()
            : new Date().getTime();
           
        function scroll(timestamp) {
          //Calculate the timeelapsed
          const timeElapsed = timestamp - startTime;
          //Calculate progress 
          const progress = Math.min(timeElapsed / duration, 1);
          //Set the scrolleft
          element.scrollLeft = scrollPos + scrollPixels * progress;
          //Check if elapsed time is less then duration then call the requestAnimation, otherwise exit
          if (timeElapsed < duration) {
            //Request for animation
            window.requestAnimationFrame(scroll);
          } else {
            return;  
          }
        }
        //Call requestAnimationFrame on scroll function first time
        window.requestAnimationFrame(scroll);
      }
    },
    swipeLeft() {
      const content = this.$refs.content;
      this.scrollTo(content, -300, 800);
      document.querySelector('#left-button').style.display = "none";
      document.querySelector('#right-button').style.display = "block";
    },
    swipeRight() {
      const content = this.$refs.content;
      this.scrollTo(content, 300, 800);
      document.querySelector('#right-button').style.display = "none";
      document.querySelector('#left-button').style.display = "block";
    }
  }
};
</script>