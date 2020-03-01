import Vue from 'vue'
import Router from 'vue-router'
import StarryHome from "@/views/StarryHome";
import design from '@/views/design'
import Boolean from '@/components/content/Boolean'
import sBoolean from '@/components/content/sBoolean'
import Backend from '@/views/Backend'
import Frontend from '@/views/Frontend'

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
      component: design,
      children: [{
        path: 'boolean',
        name: "Boolean",
        component: Boolean
      }, {
        path: 'sBoolean',
        name: 'sBoolean',
        component: sBoolean
      }]
    }, {
      path: "/backend",
      name: "Backend",
      component: Backend
    }, {
      path: "/frontend",
      name: "Frontend",
      component: Frontend
    }
  ]
});