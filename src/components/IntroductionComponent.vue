<template>
  <section class="introduction">
    <!-- <div class="introduction__body"> -->
    <img class="background" src="../assets/images/sunset.jpg" alt="" />
    <h1 class="header">Hello, I'm <span>IRYNA KRYVOKHYZHA</span></h1>
    <h2 class="subheader">I'm a frontend developer</h2>
    <div class="icon">
      <font-awesome-icon
        @click="scroll('about')"
        :icon="['fas', 'angles-down']"
      />
    </div>
    <!-- </div> -->
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
  height: 100vh;
  font-family: "Open Sans";
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  transform-style: preserve-3d;
  z-index: -1;
}
.background {
  transform: translateZ(-10px) scale(2.5);
  height: 100%;
}
.foreground {
  transform: translateZ(-5px) scale(1.5);
}
.background,
.foreground {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  z-index: -1;
}

.header,
.subheader,
.icon {
  font-size: 48px;
  font-weight: 900;
  color: white;
  text-shadow: 0 0 5px rgb(0, 0, 0);
}
.header {
  font-weight: 700;
  padding-bottom: 30px;
  line-height: 1.5;
}
.subheader {
  padding-bottom: 30px;
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
