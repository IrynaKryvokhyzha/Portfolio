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
  height: 100svh;
  font-family: "Open Sans";
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  transform-style: preserve-3d;
  z-index: -1;
  padding: 30px;
}
.background {
  transform: translateZ(-10px) scale(2);
  height: 100%;
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  z-index: -1;
}
.content {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
  gap: 30px;
}
.header,
.subheader,
.icon {
  font-size: 48px;
  font-weight: 900;

  text-shadow: 0 0 5px rgb(0, 0, 0);
}
.header {
  font-weight: 700;
  color: white;
  line-height: 1.5;
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
      scale: 2;
    }
  }
}
</style>
