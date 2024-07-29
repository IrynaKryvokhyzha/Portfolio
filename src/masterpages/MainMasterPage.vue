<template>
  <div>
    <nav-component @onScroll="scrollTo" />
    <main class="main">
      <slot></slot>
    </main>
    <div class="icon-up" @click="scrollTo('introduction')">
      <font-awesome-icon :icon="['fas', 'angles-up']" />
    </div>
    <footer-component />
  </div>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "MainMasterPage",
  components: {
    NavComponent,
    FooterComponent,
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

<style lang="scss" scoped>
.wrapper {
}
.main {
  position: relative;
}
.icon-up {
  position: fixed;
  bottom: 20px;
  left: 20px;
  color: yellow;
  z-index: 999;
  font-size: 48px;
  font-weight: 900;
  text-align: start;
  padding: 10px;
  transition: scale 0.5s ease;
  @media (any-hover: hover) {
    &:hover {
      scale: 2;
    }
  }
}
</style>
