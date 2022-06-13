import { createApp } from "vue";
import App from "./App.vue";

import { createWebHistory, createRouter } from "vue-router";

import Home from "./components/Home.vue";
import Kpop from "./components/Kpop.vue";
import Kdrama from "./components/Kdrama.vue";
import Kbeauty from "./components/Kbeauty.vue";
import Entertaiment from "./components/Entertaiment.vue";
import Lifestyle from "./components/Lifestyle.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/kpop", name: "Kpop", component: Kpop },
    { path: "/kdrama", name: "Kdrama", component: Kdrama },
    { path: "/kbeauty", name: "Kbeauty", component: Kbeauty },
    { path: "/entertaiment", name: "Entertaiment", component: Entertaiment },
    { path: "/lifestyle", name: "Lifestyle", component: Lifestyle },
  ],

  base: "/",
});

const app = createApp(App);
app.use(router);
app.mount("#app");
