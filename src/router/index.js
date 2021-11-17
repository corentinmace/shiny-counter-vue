import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Edit from '../views/Edit.vue'
import Login from '../views/Login.vue'
import AdminBoard from '../views/AdminBoard.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/create',
    name: 'Create',
    component: Login
  },
  {
    path: '/admin',
    name: 'AdminBoard',
    component: AdminBoard
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
