<template>
  <div class="todo-list">
    <div v-if="sharedState.todos.length === 0"><i>Everything's done :)</i></div>
    <template v-if="this.todosOverdue.length">
      <strong class="list-headline overdue">Overdue</strong>
      <ul class="todos overdue">
        <Todo
          v-bind:key="todo.id"
          v-bind:todo="todo"
          @todoClick="toggleTodo(todo)"
          @deleteClick="deleteTodo(todo)"
          v-for="todo in this.todosOverdue"
        />
      </ul>
    </template>
    <template v-if="this.todosToday.length">
      <strong class="list-headline">Today</strong>
      <ul class="todos">
        <Todo
          v-bind:key="todo.id"
          v-bind:todo="todo"
          @todoClick="toggleTodo(todo)"
          @deleteClick="deleteTodo(todo)"
          v-for="todo in this.todosToday"
        />
      </ul>
    </template>
    <template v-if="this.todosTomorrow.length">
      <strong class="list-headline">Tomorrow</strong>
      <ul class="todos">
        <Todo
          v-bind:key="todo.id"
          v-bind:todo="todo"
          @todoClick="toggleTodo(todo)"
          @deleteClick="deleteTodo(todo)"
          v-for="todo in this.todosTomorrow"
        />
      </ul>
    </template>
    <template v-if="this.todosInTheFuture.length">
      <strong class="list-headline">Someday</strong>
      <ul class="todos">
        <Todo
          v-bind:key="todo.id"
          v-bind:todo="todo"
          @todoClick="toggleTodo(todo)"
          @deleteClick="deleteTodo(todo)"
          v-for="todo in this.todosInTheFuture"
        />
      </ul>
    </template>
  </div>
</template>

<script>
import Store from '../Store'
import Todo from './Todo'

export default {
  components: { Todo },
  data () {
    return {
      sharedState: Store.state
    }
  },
  computed: {
    todosOverdue: function () {
      return this.sharedState.todos.filter(todo => (this.overdue(todo)))
    },
    todosToday: function () {
      return this.sharedState.todos.filter(todo => this.dueToday(todo))
    },
    todosTomorrow: function () {
      return this.sharedState.todos.filter(todo => this.dueTomorrow(todo))
    },
    todosInTheFuture: function () {
      return this.sharedState.todos.filter(todo => this.dueInTheFuture(todo))
    }
  },
  methods: {
    overdue (todo) {
      const dd = todo.dueDate
      const cd = new Date()
      cd.setUTCMilliseconds(0)
      cd.setUTCSeconds(0)
      cd.setUTCMinutes(0)
      cd.setUTCHours(0)

      return dd < cd
    },
    dueToday (todo) {
      const dd = todo.dueDate
      const cd = new Date()
      return `${dd.getUTCDate()}.${dd.getUTCMonth()}.${dd.getUTCFullYear}` === `${cd.getUTCDate()}.${cd.getUTCMonth()}.${cd.getUTCFullYear}`
    },
    dueTomorrow (todo) {
      const dd = todo.dueDate
      const td = new Date()
      td.setUTCDate(td.getUTCDate() + 1)
      return dd.getUTCDate() === td.getUTCDate()
    },
    dueInTheFuture (todo) {
      const dd = todo.dueDate
      const td = new Date()
      td.setUTCDate(td.getUTCDate() + 1)
      return dd.getUTCDate() > td.getUTCDate()
    },
    toggleTodo (todo) {
      Store.toggleTodo(todo)
    },
    deleteTodo (todo) {
      Store.deleteTodo(todo)
    }
  }
}
</script>

<style scoped>
  .list-headline {
    color: #999;
    text-transform: uppercase;
  }

  .todos {
    margin: 0 0 1em;
    padding: 0;
    list-style: none;
  }

  .overdue {
    color: hsl(374, 54%, 57%);
  }

  .todos:last-of-type {
    margin-bottom: 0;
  }
</style>
