<template>
  <!-- <div id="portfolio" class="portfolio">
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
  </div> -->
  <div id="portfolio" class="portfolio">
    <div class="slider">
      <div
        v-for="(product, index) in getProductsList"
        :key="product.id"
        class="item"
        :style="{ '--i': ++index, '--total': getProductsList.length }"
      >
        <a :href="product.link" class="link">
          <div class="image">
            <img :src="product.image" alt="image" />
            <div class="content">
              <h2 class="header">{{ product.title }}</h2>
              <p class="description">{{ product.description }}</p>
              <button class="button">
                link
              </button>
            </div>
          </div>
        </a>
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
/*.portfolio {
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
}*/

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.portfolio {
  background: linear-gradient(to right, #23b232, orange);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
  overflow: hidden;
}
.slider {
  position: relative;
  width: 300px;
  height: 300px;
  transform-style: preserve-3d;
  animation: rotate 30s linear infinite;
}
@keyframes rotate {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
.item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: center;
  transform-style: preserve-3d;
  transform: rotateY(calc(var(--i) * 360deg / var(--total))) translateZ(400px);
  transition: transform 0.2s;
  z-index: 1;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    transition: 2s ease-out;

    @media (any-hover: hover) {
      &:hover {
        transform: scale(1.2);
        z-index: 10;
      }
    }
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
  border-radius: 10px;
  background: rgb(0, 0, 0, 0.5);
  opacity: 0;
  transition: all 0.5s ease;
  @media (any-hover: hover) {
    &:hover {
      opacity: 1;
    }
  }
}
.content > * {
  transform: translateY(50px);
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
