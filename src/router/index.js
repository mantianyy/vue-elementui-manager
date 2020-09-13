import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Template1 from "../components/Template1"
import Template2 from "../components/Template2"
import Template3 from "../components/Template3"
import Template4 from "../components/Template4"
import Template5 from "../components/Template5"
import Template6 from "../components/Template6"
import Template7 from "../components/Template7"
import Template8 from "../components/Template8"
import Template9 from "../components/Template9"
import Template10 from "../components/Template10"
import Template11 from "../components/Template11"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/Template1',
      name: 'Template1',
      component: Template1
    },{
      path: '/Template2',
      name: 'Template2',
      component: Template2
    },
    {
      path: '/Template3',
      name: 'Template3',
      component: Template3
    },
    {
      path: '/Template4',
      name: 'Template4',
      component: Template4
    },
    {
      path: '/Template5',
      name: 'Template5',
      component: Template5
    },
    {
      path: '/Template6',
      name: 'Template6',
      component: Template6
    },
    {
      path: '/Template7',
      name: 'Template7',
      component: Template7
    },
    {
      path: '/Template8',
      name: 'Template8',
      component: Template8
    },
    {
      path: '/Template9',
      name: 'Template9',
      component: Template9
    },
    {
      path: '/Template10',
      name: 'Template10',
      component: Template10
    },
    {
      path: '/Template11',
      name: 'Template11',
      component: Template11
    }
  ]
})
