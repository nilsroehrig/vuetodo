<template>
  <li
    v-bind:key="todo.id"
    class="todo"
    v-bind:class="{ done: todo.done }">
      <Checkbox class="todo-checkbox" @click.native="$emit('todoClick')" v-bind:tick="todo.done" />
      <span @click="$emit('todoClick')" class="title">{{todo.title}}</span>
      <Delete class="todo-delete" @click.native="$emit('deleteClick')" />
  </li>
</template>

<script>
import Checkbox from './Checkbox'
import Delete from './Delete'

export default {
  components: { Checkbox, Delete },
  props: {
    todo: Object
  }
}
</script>

<style scoped>
  .todo {
    display: flex;
    width: 100%;
    align-items: center;
  }

  .title {
    flex: 100%;
    margin: 0 0.25em;
  }

  .todo-checkbox, .title, .todo-delete {
    cursor: pointer;
  }
</style>
