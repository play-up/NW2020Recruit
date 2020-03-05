import Vue from 'vue'
import Router from 'vue-router'
// import StarryHome from "@/views/StarryHome";
import design from '@/views/design'
import Boolean from '@/components/content/Boolean'
import sBoolean from '@/components/content/sBoolean'
import Backend from '@/views/Backend'
import Frontend from '@/views/Frontend'

import store from "../store/index";

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: "/",
      name: "StarryHome",
      component: () => import("@/views/StarryHome")
    },
    {
      path: "/design",
      name: "design",
      component: design,
      children: [
        {
          path: "boolean",
          name: "Boolean",
          component: Boolean
        },
        {
          path: "sBoolean",
          name: "sBoolean",
          component: sBoolean
        }
      ]
    },
    {
      path: "/backend",
      name: "Backend",
      component: Backend
    },
    {
      path: "/frontend",
      name: "Frontend",
      component: Frontend
    }
  ]
});


router.beforeEach((to,from,next)=>{
    store.commit("updateLoading", { isLoading: true });
        // Vue.nextTick(() => {
        //   console.log("loading false");
        //   store.commit("updateLoading", { isLoading: false });
        // });
  next()
})
// router.afterEach((to,from)=>{
//     // 从后台到首页，往vuex传值，判断submit组件是否出现
//     store.commit("updateLoading", { isLoading: false });
//     
  
// })
export default router
