import { createStore } from "vuex";

export default createStore({
  state: {
    productsList: [
      {
        id: 1,
        title: "DR PromakeUp",
        description:
          "Website for professional makeup artist that realized her dream and created a makeup brush brand",
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
        description: "Play on drums game",
        link: "https://irynakryvokhyzha.github.io/Drum-kit/",
        image: require("@/assets/images/drum-image.jpg"),
      },
      {
        id: 4,
        title: "Dice",
        description: "Dice Game",
        link: "https://irynakryvokhyzha.github.io/Dice_Game/",
        image: require("@/assets/images/dice-image.jpg"),
      },
      {
        id: 5,
        title: "Truck Service",
        description: "In Progress...",
        link: "https:",
        image: require("@/assets/images/truck.jpg"),
      },
    ],
  },
  getters: {
    getProductsList: ({ productsList }) => productsList,
  },
  mutations: {},
  actions: {},
  modules: {},
});
