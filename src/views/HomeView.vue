<template>
  <MainMasterPage>
    <div class="home">
      <introduction-component id="home" />
      <about-component />
      <portfolio-component />
    </div>
  </MainMasterPage>
</template>

<script>
import AboutComponent from "../components/AboutComponent.vue";
// @ is an alias to /src

import IntroductionComponent from "../components/IntroductionComponent.vue";
import PortfolioComponent from "../components/PortfolioComponent.vue";
import MainMasterPage from "@/masterpages/MainMasterPage.vue";

export default {
  name: "HomeView",
  components: {
    IntroductionComponent,
    AboutComponent,
    PortfolioComponent,
    MainMasterPage,
  },
};
</script>
<style>
.home {
}
</style>
