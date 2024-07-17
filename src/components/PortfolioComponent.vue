<template>
  <div id="portfolio" class="portfolio">
    <div
      v-for="product in getProductsList"
      :key="product.id"
      class="portfolio-container"
    >
      <div class="image">
        <img :src="product.image" alt="image" />
        <div class="content">
          <h2 class="header">{{ product.title }}</h2>
          <p class="description">{{ product.description }}</p>
          <button class="button">
            <a :href="product.link" class="link">link </a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PortfolioComponent",
  computed: {
    ...mapGetters(["getProductsList"]),
  },
};
</script>

<style lang="scss" scoped>
.portfolio {
  max-width: 1230px;
  margin: 0 auto;
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  justify-content: center;
  align-items: center;
}
.portfolio-container {
  flex: 0 1 25%;
}

.image {
  position: relative;
  img {
    max-width: 100%;
  }
}
.content {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: rgb(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.5s ease;
  @media (any-hover: hover) {
    &:hover {
      opacity: 1;
    }
  }
}
.content > * {
  transform: translateY(100px);
  transition: transform 1s;
}
.content:hover > * {
  transform: translateY(0);
}

.header {
  font-size: 32px;
  color: yellow;
  font-weight: 800;
  text-shadow: 3px 0 black;
}
.description {
  font-size: 24px;
  color: white;
  line-height: 1.2;
}
.button {
  color: yellow;
  font-size: 24px;

  text-decoration: underline;
  text-transform: capitalize;
}
</style>
