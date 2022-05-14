import { createRouter, createWebHistory } from 'vue-router'
import Todos from '../components/parents/todos.vue'


const routes = [
  {
    path: '/',
    redirect: '/todos'
  },

  {
    path: '/todos',
    name: 'Todos',
    component: Todos
  },

  {
    path: '/notes',
    name: 'Notes',
    component: () => import(/* webpackChunkName: "notesApp" */ '../components/parents/notes.vue')
  }



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
