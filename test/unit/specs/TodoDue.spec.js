import TodoDue from '@/TodoDue'

const now = new Date()

const todos = {
  dueYesterday: {
    title: 'due yesterday',
    done: false,
    dueDate: (() => {
      const date = new Date()
      date.setDate(now.getDate() - 1)
      return date
    })()
  },
  dueToday: {
    title: 'due today',
    done: false,
    dueDate: now
  },
  dueTomorrow: {
    title: 'due tomorrow',
    done: false,
    dueDate: (() => {
      const date = new Date()
      date.setDate(now.getDate() + 1)
      return date
    })()
  },
  dueNextMonth: {
    title: 'due next month',
    done: false,
    dueDate: (() => {
      const date = new Date()
      date.setMonth(now.getMonth() + 1)
      return date
    })()
  },
}

describe('TodoDue.overdue', () => {
  it ('returns true if the todo was due yesterday', () => {
    expect(TodoDue.overdue(todos.dueYesterday)).toBe(true)
  })
  it ('returns false if the todo is due today', () => {
    expect(TodoDue.overdue(todos.dueToday)).toBe(false)
  })
  it('returns false if the todo is due tomorrow', () => {
    expect(TodoDue.overdue(todos.dueTomorrow)).toBe(false)
  })
  it('returns false if the todo is due in a month', () => {
    expect(TodoDue.overdue(todos.dueNextMonth)).toBe(false)
  })
})

describe('TodoDue.dueToday', () => {
  it ('returns false if the todo was due yesterday', () => {
    expect(TodoDue.dueToday(todos.dueYesterday)).toBe(false)
  })
  it ('returns true if the todo is due today', () => {
    expect(TodoDue.dueToday(todos.dueToday)).toBe(true)
  })
  it('returns false if the todo is due tomorrow', () => {
    expect(TodoDue.dueToday(todos.dueTomorrow)).toBe(false)
  })
  it('returns false if the todo is due in a month', () => {
    expect(TodoDue.dueToday(todos.dueNextMonth)).toBe(false)
  })
})

describe('TodoDue.dueTomorrow', () => {
  it ('returns false if the todo was due yesterday', () => {
    expect(TodoDue.dueTomorrow(todos.dueYesterday)).toBe(false)
  })
  it ('returns false if the todo is due today', () => {
    expect(TodoDue.dueTomorrow(todos.dueToday)).toBe(false)
  })
  it('returns true if the todo is due tomorrow', () => {
    expect(TodoDue.dueTomorrow(todos.dueTomorrow)).toBe(true)
  })
  it('returns false if the todo is due in a month', () => {
    expect(TodoDue.dueTomorrow(todos.dueNextMonth)).toBe(false)
  })
})

describe('TodoDue.dueInTheFuture', () => {
  it ('returns false if the todo was due yesterday', () => {
    expect(TodoDue.dueInTheFuture(todos.dueYesterday)).toBe(false)
  })
  it('returns false if the todo is due today', () => {
    expect(TodoDue.dueInTheFuture(todos.dueToday)).toBe(false)
  })
  it('returns false if the todo is due tomorrow', () => {
    expect(TodoDue.dueInTheFuture(todos.dueTomorrow)).toBe(false)
  })
  it('returns true if the todo is due in a month', () => {
    expect(TodoDue.dueInTheFuture(todos.dueNextMonth)).toBe(true)
  })
})