<template>
  <div id="home" class="home">
    <nav-component @onScroll="scrollTo" />
    <introduction-component id="introduction" />
    <about-component />
    <portfolio-component />
    <div class="icon-up" @click="scrollTo('introduction')">
      <font-awesome-icon :icon="['fas', 'angles-up']" />
    </div>
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
  methods: {
    scrollTo(refName) {
      const element = document.getElementById(refName);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>
<style>
.home {
  position: relative;
}
.icon-up {
  position: sticky;
  bottom: 0;
  left: 0;
  color: yellow;
  width: 50px;
  z-index: 10;
  font-size: 48px;
  font-weight: 900;
  text-align: start;
  padding: 40px;
  transition: scale 0.5s ease;
  @media (any-hover: hover) {
    &:hover {
      scale: 2;
    }
  }
}
</style>
