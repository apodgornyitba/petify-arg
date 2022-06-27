import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserProfileView from "@/views/UserProfileView";
import AdoptView from "@/views/AdoptView";
import InfoMascotaView from "@/views/InfoMascotaView";
import DonateView from "@/views/DonateView";
import GatosView from "@/views/GatosView";
import PerrosView from "@/views/PerrosView";
import RefugiosView from "@/views/RefugiosView";
import RegisterView from "@/views/RegisterView";
import SignInView from "@/views/SignInView";
import OlvideMiContrasena from "@/views/OlvideMiContrasena";
import PageNotFound from "@/views/PageNotFound";
import PruebaView from "@/views/PruebaView";
import ElijoUnPerroView from "@/views/ElijoUnPerroView";
import TransitosView from "@/views/TransitosView";
import RefugiosPerfilView from "@/views/RefugiosPerfilView";
import FormularioAdopcionView from "@/views/FormularioAdopcionView";
import NotificationsView from "@/views/NotificationsView";
import DenunciarView from "@/views/DenunciarView";
import FavView from "@/views/FavView";
import RefugiosAnswerView from "@/views/RefugiosAnswerView";
import RefugiosUserView from "@/views/RefugiosUserView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
    path: '/donaterefugio',
    name: 'donaterefugio',
    component: DonateView
  },
  {
    path: '/infoView',
    name: 'infoView',
    component: InfoMascotaView
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
    path: '/denunciar',
    name: 'denunciar',
    component: DenunciarView
  },
  {
    path: '/refugios',
    name: 'refugios',
    component: RefugiosView
  },
  {
    path: '/favoritos',
    name: 'favoritos',
    component: FavView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/recuperaciondecuenta',
    name: 'recuperaciondecuenta',
    component: OlvideMiContrasena
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignInView
  },
  {
    path:'/prueba',
    name:'prueba',
    component: PruebaView
  },
  {
    path:'/elijoPerro',
    name:'elijoPerro',
    component: ElijoUnPerroView
  },
  {
    path: '/transito',
    name: 'transito',
    component: TransitosView
  },
  {
    path:'/perfilRefugio',
    name:'perfilRefugio',
    component: RefugiosPerfilView
  },
  {
    path: '/FormularioAdopcion',
    name: 'FormularioAdopcion',
    component: FormularioAdopcionView
  },
  {
    path: '/Notificaciones',
    name: 'NotificacionesView',
    component: NotificationsView
  },
  {
    path: '/RefugiosAnswerView',
    name: 'RefugiosAswerView',
    component: RefugiosAnswerView
  },
  {
    path: '/RefugiosUserView',
    name: 'RefugiosUserView',
    component: RefugiosUserView
  },
  // 404: Not found
  {
    name: 'PageNotFound',
    path: '/:pathMatch(.*)*',
    component: PageNotFound
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
