function updateStorage (state) {
  window.localStorage.setItem('vuetodo_state', JSON.stringify(state))
}

function readStorage () {
  function reviver (k, v) {
    if (k === 'todos') {
      return v.map(todo => Object.assign({ ...todo }, {
        dueDate: new Date(todo.dueDate)
      }))
    } else {
      return v
    }
  }
  return JSON.parse(window.localStorage.getItem('vuetodo_state'), reviver)
}

let initialState = {
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
  }],
  activeFilter: 'all'
}

const fromStorage = readStorage()

if (fromStorage === null) {
  window.localStorage.setItem('vuetodo_state', JSON.stringify(initialState))
}

export default {
  state: fromStorage || initialState,
  addTodo ({ title = 'untitled', done = false, dueDate = new Date() }) {
    const id = this.state.todos.reduce((max, todo) => Math.max(todo.id, max), 0) + 1
    console.log(id)
    this.state.todos.push({ id, title, done, dueDate })
    updateStorage(this.state)
  },
  deleteTodo ({ id }) {
    this.state.todos = this.state.todos.filter(todo => todo.id !== id)
    updateStorage(this.state)
  },
  toggleTodo ({ id }) {
    this.state.todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done
      }
      return todo
    })
    updateStorage(this.state)
  },
  setFilter (filter) {
    if (!['all', 'open', 'closed'].includes(filter)) {
      throw new Error('Invalid filter')
    }
    this.state.activeFilter = filter
    updateStorage(this.state)
  }
}
