import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// Lista oficial dos 27 estados para garantir que apenas siglas válidas sejam tratadas como bio/linktree
const VALID_UFS = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
  'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
  'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      // Página de Parcerias Institucionais & Corporativas
      path: '/parcerias',
      name: 'partnerships',
      component: () => import('../views/PartnershipsView.vue'),
    },
    {
      // Rota de atalho para a seção do mapa na home
      path: '/mapa',
      name: 'map',
      redirect: '/#mapa-nucleos'
    },
    {
      // Rota dinâmica para os estados: apenas siglas de 2 letras que correspondam a estados brasileiros
      path: '/:uf([a-zA-Z]{2})',
      name: 'state-detail',
      component: () => import('../views/StateDetailView.vue'),
      beforeEnter: (to, from, next) => {
        const uf = (to.params.uf || '').toString().toUpperCase()
        if (VALID_UFS.includes(uf)) {
          next()
        } else {
          // Se for 2 letras mas não for estado brasileiro válido (ex: /xx, /zz), leva para 404
          next({ name: 'not-found', params: { pathMatch: to.path.substring(1).split('/') } })
        }
      }
    },
    {
      // Rota coringa (Catch-all) para qualquer endereço não mapeado: direciona para 404
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router
