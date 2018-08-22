export default {
  state: {
    todos: [{
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
    }, {
      id: 6,
      title: 'OVERDUE!',
      done: false,
      dueDate: new Date(new Date().setTime(new Date().getTime() - 96 * 60 * 60 * 1000))
    }]
  },
  addTodo ({ title = 'untitled', done = false, dueDate = new Date() }) {
    const id = this.state.todos.reduce((max, todo) => Math.max(todo.id, max), 0) + 1
    console.log(id)
    this.state.todos.push({ id, title, done, dueDate })
  },
  deleteTodo ({ id }) {
    this.state.todos = this.state.todos.filter(todo => todo.id !== id)
  },
  toggleTodo ({ id }) {
    this.state.todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done
      }
      return todo
    })
  }
}
