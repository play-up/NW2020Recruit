import Vue from 'vue'
import Router from 'vue-router'
import StarryHome from "@/views/StarryHome";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "StarryHome",
      component: StarryHome
    }
  ]
});
