import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserProfileView from "@/views/UserProfileView";
import AdoptView from "@/views/AdoptView";
import DonateView from "@/views/DonateView";
import GatosView from "@/views/GatosView";
import PerrosView from "@/views/PerrosView";
import RefugiosView from "@/views/RefugiosView";
import RegisterView from "@/views/RegisterView";
import SignInView from "@/views/SignInView";
import UP_SobreMiView from "@/views/UP_SobreMiView";
import UP_AdopcionView from "@/views/UP_AdopcionView";
import UP_ConfiguracionView from "@/views/UP_ConfiguracionView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/userprofile',
    name: 'userprofile',
    component: UserProfileView
  },
  {
    path: '/adopt',
    name: 'adopt',
    component: AdoptView
  },
  {
    path: '/donate',
    name: 'donate',
    component: DonateView
  },
  {
    path: '/gatos',
    name: 'gatos',
    component: GatosView
  },
  {
    path: '/perros',
    name: 'perros',
    component: PerrosView
  },
  {
    path: '/refugios',
    name: 'refugios',
    component: RefugiosView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignInView
  },
  {
    path: '/sobremi',
    name: 'sobremi',
    component: UP_SobreMiView
  },
  {
    path: '/adopcion',
    name: 'adopcion',
    component: UP_AdopcionView
  },
  {
    path: '/configuracion',
    name: 'configuracion',
    component: UP_ConfiguracionView
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
