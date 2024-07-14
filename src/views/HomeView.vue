<template>
  <div id="home" class="home">
    <nav-component />
    <introduction-component />
    <about-component />
    <portfolio-component />
  </div>
</template>

<script>
import AboutComponent from "../components/AboutComponent.vue";
// @ is an alias to /src

import IntroductionComponent from "../components/IntroductionComponent.vue";
import NavComponent from "../components/NavComponent.vue";
import PortfolioComponent from "../components/PortfolioComponent.vue";

export default {
  name: "HomeView",
  components: {
    IntroductionComponent,
    NavComponent,
    AboutComponent,
    PortfolioComponent,
  },
};
</script>
