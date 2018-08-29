function overdue (todo) {
  const dd = todo.dueDate
  const cd = new Date()
  cd.setUTCMilliseconds(0)
  cd.setUTCSeconds(0)
  cd.setUTCMinutes(0)
  cd.setUTCHours(0)

  return dd < cd
}
function dueToday (todo) {
  const dd = todo.dueDate
  const cd = new Date()
  return `${dd.getUTCDate()}.${dd.getUTCMonth()}.${dd.getUTCFullYear()}` === `${cd.getUTCDate()}.${cd.getUTCMonth()}.${cd.getUTCFullYear()}`
}
function dueTomorrow (todo) {
  const dd = todo.dueDate
  const td = new Date()
  td.setUTCDate(td.getUTCDate() + 1)
  return dd.getUTCDate() === td.getUTCDate()
}
function dueInTheFuture (todo) {
  const dd = todo.dueDate
  const td = new Date()
  td.setUTCDate(td.getUTCDate() + 1)
  return dd.getTime() > td.getTime()
}

export default { overdue, dueToday, dueTomorrow, dueInTheFuture }
