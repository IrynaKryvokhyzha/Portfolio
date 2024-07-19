import { createStore } from "vuex";

export default createStore({
  state: {
    productsList: [
      {
        id: 1,
        title: "DR PromakeUp",
        description:
          "Website for professional make-up artist that realized her dream and created a makeup brush brand",
        link: "https://dorinarotari.com/",
        image: require("@/assets/images/promakeup.webp"),
      },
      {
        id: 2,
        title: "Bean Scene",
        description:
          "A web app for a coffee café, allowing users to make payments via QR code",
        link: "https://bean-scene.com",
        image: require("@/assets/images/coffee_image.jpg"),
      },
      {
        id: 3,
        title: "Drum Kit",
        description:
          "Website for makeup artist that shows natural makeup brushes",
        link: "https://dr-brushes.web.app/#/",
        image: require("@/assets/images/paralax.webp"),
      },
      {
        id: 4,
        title: "DR PromakeUp",
        description:
          "Website for makeup artist that shows natural makeup brushes",
        link: "https://dr-brushes.web.app/#/",
        image: require("@/assets/images/promakeup.webp"),
      },
      {
        id: 5,
        title: "DR PromakeUp",
        description:
          "Website for professional make-up artist that realized her dream and created a makeup brush brand",
        link: "https://dr-brushes.web.app/#/",
        image: require("@/assets/images/promakeup.webp"),
      },
      {
        id: 6,
        title: "Bean Scene",
        description:
          "Website for makeup artist that shows natural makeup brushes",
        link: "https://dr-brushes.web.app/#/",
        image: require("@/assets/images/promakeup.webp"),
      },
      // {
      //   id: 7,
      //   title: "Drum Kit",
      //   description:
      //     "Website for makeup artist that shows natural makeup brushes",
      //   link: "https://dr-brushes.web.app/#/",
      //   image: require("@/assets/images/promakeup.webp"),
      // },
      // {
      //   id: 8,
      //   title: "DR PromakeUp",
      //   description:
      //     "Website for makeup artist that shows natural makeup brushes",
      //   link: "https://dr-brushes.web.app/#/",
      //   image: require("@/assets/images/promakeup.webp"),
      // },
    ],
  },
  getters: {
    getProductsList: ({ productsList }) => productsList,
  },
  mutations: {},
  actions: {},
  modules: {},
});
