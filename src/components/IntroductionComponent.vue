<template>
  <section class="introduction">
    <img
      class="background"
      src="../assets/images/forest.jpg"
      alt="pines image"
    />
    <div class="content">
      <h1 class="header">Hello, I'm <span>IRYNA KRYVOKHYZHA</span></h1>
      <h2 class="subheader">I'm a frontend developer</h2>
      <div class="icon">
        <font-awesome-icon
          @click="scroll('about')"
          :icon="['fas', 'angles-down']"
          class="fa-solid fa-heart fa-beat"
          style="--fa-animation-duration: 1s;"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "IntroductionComponent",
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
.introduction {
  position: relative;
  height: 100svh;
  font-family: "Open Sans";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  z-index: -1;
  padding: 30px;
}
.background {
  transform: translateZ(-10px) scale(2);
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  z-index: -1;
  background-color: black;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.header,
.subheader,
.icon {
  font-size: 48px;
  font-weight: 900;
  text-shadow: 0 0 5px rgb(0, 0, 0);
  line-height: 1.5;

  @media (max-width: 460px) {
    font-size: 36px;
  }
  @media (max-width: 460px) {
    font-size: 28px;
  }
}
.header {
  font-weight: 700;
  color: white;
  text-align: center;
}
.subheader {
  flex: 1 1 auto;
  color: white;
}
span {
  font-family: "Coming Soon";
  color: yellow;
  letter-spacing: 5px;
}
.icon {
  transition: scale 0.5s ease;
  color: yellow;

  @media (any-hover: hover) {
    &:hover {
      scale: 1.8;
    }
  }
}
</style>
