import Vue from 'vue'
import Router from 'vue-router'
import StarryHome from "@/views/StarryHome";
import design from '@/views/design'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "StarryHome",
      component: StarryHome
    }, {
      path: "/design",
      name: "design",
      component: design
    }
  ]
});
