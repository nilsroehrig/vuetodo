<template>
  <form action="#" method="post" class="add-todo-form" @submit.prevent="createTodo">
    <strong class="add-todo-headline">Create Todo</strong>
    <label class="add-todo-label" for="todo-title">Title: </label>
    <input v-model="title" class="add-todo-input" type="text" name="todo-title" id="todo-title" placeholder="Todo title...">
    <label class="add-todo-label" for="todo-date">Due date:</label>
    <input v-model="date" class="add-todo-input" type="date" name="todo-date" id="todo-date" v-bind:min="this.today">
    <router-link class="add-todo-cancel" to="/">Cancel</router-link>
    <button class="add-todo-submit" type="submit">Create</button>

  </form>
</template>

<script>
import Store from '../Store'
export default {
  data: function () {
    return {
      title: '',
      date: ''
    }
  },
  computed: {
    today: function () {
      const { day, month, year } = this.createDate()
      return `${year}-${month}-${day}`
    }
  },
  methods: {
    createTodo () {
      Store.addTodo({
        title: this.title,
        dueDate: new Date(Date.parse(this.date))
      })
      this.$router.push('/')
    },
    createDate (addYears = 0) {
      const date = new Date()
      date.setFullYear(date.getFullYear() + Number(addYears))
      const day = String(date.getDate()).padStart(2, '0')
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const year = date.getFullYear()
      return { date, day, month, year }
    }
  }
}
</script>

<style scoped>
  .add-todo-form {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 1em;
  }

  .add-todo-headline {
    grid-column: 1 / 3;
    color: #999;
    text-transform: uppercase;
  }

  .add-todo-label {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .add-todo-input {
    padding: .5em;
    background-color: #fff;
    color: #000;
    border: solid thin #DDD;
    font-family: Lato, sans-serif;
    font-size: calc(16em/20);
    border-radius: .5em;
    font-weight: 300;
    line-height: 1;
  }

  .add-todo-cancel {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 0.75em;
  }

  .add-todo-submit{
    padding: .5em;
    font-size: calc(16em/20);
    background-color: #59a0db;
    color: #fff;
    border: solid thin #59a0db;
    border-radius: .5em;
    cursor: pointer;
    font-weight: regular;
    line-height: 1;
  }

  .add-todo-submit::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
</style>
