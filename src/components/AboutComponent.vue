<template>
  <section id="about" class="about">
    <div class="about__body body">
      <div class="image-ibg">
        <img src="../assets/images/photo.jpg" alt="my image" />
      </div>
      <div class="body-content">
        <span>ABOUT</span>
        <h2>Developer</h2>
        <p class="description">
          I am Iryna , a dedicated frontend developer from Ukraine, currently
          living in California, USA. My expertise is developing user-friendly
          websites and web applications.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutComponent",
};
</script>

<style lang="scss" scoped>
.about {
  height: 100vh;
  display: flex;
  font-family: "Open Sans";
  color: white;

  // .about__body

  &__body {
  }
}
.body {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.image-ibg {
  flex: 0 1 50%;
  position: relative;
  width: 100%;
  img {
  }
}
.body-content {
  flex: 0 1 50%;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 50px;
  background-color: #372f2f;
}
h2 {
  font-size: 48px;
  font-weight: 700;
}
.description {
  text-align: start;
  line-height: 1.6;
  font-size: 24px;
}
span {
  border: white 1px solid;
  padding: 10px 20px;
  border-radius: 50%;
}
</style>
