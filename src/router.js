import { createRouter, createWebHistory } from 'vue-router'

// Import components
import Lageplan from './components/Lageplan.vue'
import Anreise from './components/Anreise.vue'
import Programm from './components/Programm.vue'
import Packliste from './components/Packliste.vue'
import Verkoestigung from './components/Verkoestigung.vue'
import Finanzierung from './components/Finanzierung.vue'

const routes = [
  { path: '/', component: Lageplan }, // Default route
  { path: '/anreise', component: Anreise },
  { path: '/programm', component: Programm },
  { path: '/packliste', component: Packliste },
  { path: '/verkoestigung', component: Verkoestigung },
  { path: '/finanzierung', component: Finanzierung },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router