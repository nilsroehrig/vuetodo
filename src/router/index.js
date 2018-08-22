import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
