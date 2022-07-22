import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  { path: '/', name: 'signIn', component: LoginView, meta: { requiresAuth:false } },
  { path: '/home', name: 'home', component: HomeView, meta: { requiresAuth:true } },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from,  next) => {
  if (to.meta.requiresAuth && !localStorage.getItem('auth.accessToken')){
    next({ name: 'signIn'})
  } else if (to.meta.requiresAuth && localStorage.getItem('auth.accessToken')){
    next()
  } else if (!to.meta.requiresAuth && localStorage.getItem('auth.accessToken')){
    next({name: 'home'})
  } else next()
  }) 

export default router
