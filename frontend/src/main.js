import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import Accueil from './components/Accueil.vue'
import PageSauveteur from './components/PageSauveteur.vue'
import PageSauvetage from './components/PageSauvetage.vue'
const router = VueRouter.createRouter({
history: VueRouter.createWebHistory(),
routes: [
    {
    path: '/',
    name: 'accueil',
    component: Accueil
    },
    {
      path:'/personne/:id',
      name:'personne',
      component: PageSauveteur
    },
    {
      path:'/sauvetage/:id',
      name:'sauvetage',
      component: PageSauvetage
    }
  ]
})

const app = createApp(App)
app.use(router).mount('#app')
app.mount('app')
