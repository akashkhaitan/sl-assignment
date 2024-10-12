import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import DashboardPage from '../views/DashBoard/DashboardPage.vue'
import EmailCampaign from '../views/DashBoard/EmailCampaign.vue'
import MasterInbox from '@/views/DashBoard/MasterInbox.vue'
import AllLeads from '@/views/DashBoard/AllLeads.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/dashboard',
      component: DashboardPage,
      children: [
        {
          path: '',
          name: 'dashboard',
          redirect: { name: 'emailCampaign' }
        },
        {
          path: 'email-campaign',
          name: 'emailCampaign',
          component: EmailCampaign,
          props: (route) => ({ searchText: route.query.search })
        },
        {
          path: 'all-leads',
          name: 'allLeads',
          component: AllLeads
        },
        {
          path: 'master-inbox',
          name: 'masterInbox',
          component: MasterInbox
        }
      ]
    },
    {
      path: '/',
      redirect: '/login'
    }
  ]
})

export default router
