import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
import SetName from '@/components/SetName'
import Store from '../Store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/add',
      name: 'AddTodo',
      component: AddTodo
    },
    {
      path: '/set-name',
      name: 'SetName',
      component: SetName
    }
  ]
})

router.beforeResolve((_, __, next) => {
  if (Store.state.name === null) {
    next('/set-name')
  } else {
    next()
  }
})

export default router
