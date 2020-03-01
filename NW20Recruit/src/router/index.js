import Vue from 'vue'
import Router from 'vue-router'
import StarryHome from "@/views/StarryHome";
import design from '@/views/design'
import Boolean from '@/components/content/Boolean'
import sBoolean from '@/components/content/sBoolean'
import submit from '@/views/submit'
import Backend from '@/views/Backend'
import Frontend from '@/views/Frontend'

import store from "../store/index";

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: "/",
      name: "StarryHome",
      component: StarryHome
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
      path: "/submit",
      name: "submit",
      component: submit
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
  store.commit('updateLoading',{isLoading: true})
  Vue.nextTick(() => {
    console.log('loading false')
    store.commit("updateLoading", { isLoading: false });
  })
  console.log('loading true')
  next()
})

router.afterEach((to,from,next)=>{
  // Vue.nextTick(()=>{
  //   console.log('loading false')
  //   store.commit("updateLoading", { isLoading: false });
  // })
  // window.onload = () => {
  //   store.commit("updateLoading", { isLoading: false });
  // }
})
export default router