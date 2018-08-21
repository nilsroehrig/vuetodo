<template>
  <section class="todo-list">
    <header class="header">
      Hello, {{name}}
      <button class="add-todo">Add</button>
    </header>
    <div class="body">
      <div v-if="todos.length === 0"><i>No Todos yet.</i></div>
      <template v-if="this.todosToday.length">
        <strong class="list-headline">Today</strong>
        <ul class="todos">
          <Todo
            v-bind:key="todo.id"
            v-bind:todo="todo"
            @todoClick="toggleTodo(todo.id)"
            @deleteClick="deleteTodo(todo.id)"
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
            @todoClick="toggleTodo(todo.id)"
            @deleteClick="deleteTodo(todo.id)"
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
            @todoClick="toggleTodo(todo.id)"
            @deleteClick="deleteTodo(todo.id)"
            v-for="todo in this.todosInTheFuture"
          />
        </ul>
      </template>
    </div>
  </section>
</template>

<script>
import Todo from './Todo'

export default {
  components: { Todo },
  data () {
    return {
      name: 'Nils',
      todos: [
        {
          id: 1,
          title: 'Due Today',
          done: false,
          dueDate: new Date()
        }, {
          id: 2,
          title: 'Due Tomorrow',
          done: false,
          dueDate: new Date(new Date().setTime(new Date().getTime() + 24 * 60 * 60 * 1000))
        }, {
          id: 3,
          title: 'Due The Day After',
          done: false,
          dueDate: new Date(new Date().setTime(new Date().getTime() + 48 * 60 * 60 * 1000))
        }, {
          id: 4,
          title: 'Due In The Future I',
          done: false,
          dueDate: new Date(new Date().setTime(new Date().getTime() + 72 * 60 * 60 * 1000))
        }, {
          id: 5,
          title: 'Due In The Future II',
          done: false,
          dueDate: new Date(new Date().setTime(new Date().getTime() + 96 * 60 * 60 * 1000))
        }
      ]
    }
  },
  computed: {
    todosToday: function () {
      return this.todos.filter(todo => this.dueToday(todo))
    },
    todosTomorrow: function () {
      return this.todos.filter(todo => this.dueTomorrow(todo))
    },
    todosInTheFuture: function () {
      return this.todos.filter(todo => this.dueInTheFuture(todo))
    }
  },
  methods: {
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
    toggleTodo (id) {
      this.todos = this.todos.map(todo => {
        if (todo.id === id) {
          todo.done = !todo.done
        }
        return todo
      })
    },
    deleteTodo (id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    }
  }
}
</script>

<style scoped>
  .todo-list {
    max-width: 400px;
    margin: 0 auto;
    border-radius: 1em;
    box-shadow: 1px 2px 5px 0 rgba(0,0,0,0.2);
    text-align: left;
  }

  .header {
    position: relative;
    padding: 1em;
    font-weight: bold;
    background-color: #76cd57;
    color: white;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
  }

  .add-todo {
    position: absolute;
    right: 0.5em;
    bottom: -1.5em;
    padding: 1em 1.5em;
    border: none;
    background-color: #fff;
    font-size: calc(16em/20);
    line-height: 1;
    border-radius: 1.5em;
    background-color: #59a0db;
    color: white;
    font-weight: bold;
    box-shadow: 1px 2px 5px 0 rgba(0,0,0,0.2);
  }

  .add-todo::before {
    content: "+ ";
    font-size: 1.5em;
    line-height: 0.5em;
    bottom: -3px;
    position: relative;
  }

  .body {
    padding: 1em;
  }

  .list-headline {
    color: #999;
    text-transform: uppercase;
  }

  .todos {
    margin: 0 0 1em;
    padding: 0;
    list-style: none;
  }

  .todos:last-of-type {
    margin-bottom: 0;
  }
</style>
