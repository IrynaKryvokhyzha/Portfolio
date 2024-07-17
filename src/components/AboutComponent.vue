<template>
  <section id="about" class="about">
    <div class="about__body body">
      <div class="image-ibg">
        <img src="../assets/images/photo.jpg" alt="my image" />
      </div>
      <div class="body-content">
        <span>ABOUT</span>
        <h2>{{ title }}</h2>
        <p class="description">
          I am Iryna , a dedicated frontend developer from Ukraine, currently
          living in California, USA. My expertise is developing attractive and
          user-friendly websites and web applications.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutComponent",
  data() {
    return {
      titles: ["Developer", "Problem Solver", "Team Player"],
      currenIndex: 0,
    };
  },
  computed: {
    title() {
      return this.titles[this.currenIndex];
    },
  },
  methods: {
    changeTitle() {
      this.currenIndex = (this.currenIndex + 1) % this.titles.length;
    },
  },
  mounted() {
    setInterval(this.changeTitle, 5000);
  },
};
</script>

<style lang="scss" scoped>
.about {
  height: 100svh;
  display: flex;
  font-family: "Open Sans";
  color: white;
  margin-bottom: 20px;

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
  position: relative;
  font-size: 58px;
  font-weight: 700;
  color: rgb(233, 233, 126);
}
h2::before {
  content: "";
  position: absolute;
  left: 100%;
  width: 120%;
  height: 120%;
  background: linear-gradient(90deg, transparent 0%, #372f2f 5%, #372f2f 100%);
  animation: animate 5s linear infinite;
}
@keyframes animate {
  0% {
    left: -10%;
  }
  50% {
    left: 110%;
  }
  100% {
    left: -10%;
  }
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
