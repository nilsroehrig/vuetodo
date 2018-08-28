import Store from '@/Store'

describe('Store.js', () => {
  it('should contain a list of todos', () => {
    expect(Store.state.todos).toBeInstanceOf(Array)
  })

  it('should have a nulled name', () => {
    expect(Store.state.name).toBe(null)
  })

  it('should have an active filter of all', () => {
    expect(Store.state.activeFilter).toBe('all')
  })

  it('should update the name', () => {
    const name = 'Klaus'
    Store.setName(name)
    expect(Store.state.name).toBe(name)
  })

  it('should update the filter', () => {
    const filter = 'closed'
    Store.setFilter(filter)
    expect(Store.state.activeFilter).toBe(filter)
  })

  it('should delete given todo', () => {
    const todo = Store.state.todos[0]
    const length = Store.state.todos.length
    Store.deleteTodo(todo)
    expect(Store.state.todos[0]).not.toBe(todo)
    expect(Store.state.todoslength).not.toBe(length)
  })

  it('should add given todo', () => {
    const todo = {
      title: 'Do unit tests',
      dueDate: new Date(),
      done: false
    }
    Store.addTodo(todo)
    expect(Store.state.todos[Store.state.todos.length - 1].title).toBe(todo.title)
  })

  it('should toggle given todo', () => {
    const todo = Store.state.todos[0]
    const done = todo.done
    Store.toggleTodo(todo)
    expect(Store.state.todos[0].done).not.toBe(done)
  })
})