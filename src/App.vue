<template>
  <div class="app">
    <section class="todo-app">
      <header class="app-header">
        Hello, {{name}}
        <router-link to="/add">
          <button class="add-todo">Add</button>
        </router-link>
      </header>
      <div class="app-body">
        <router-view />
      </div>
    </section>

    <div class="app-footer">
      <a href="https://dribbble.com/shots/2359452-To-do">Design</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      name: 'Nils'
    }
  }
}
</script>

<style>
  a {
    color: #59a0db;
    text-decoration: none;
  }

  .app {
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    font-weight: 300;
    font-size: 1.25em;
  }

  .todo-app {
    max-width: 400px;
    margin: 0 auto;
    border-radius: 1em;
    box-shadow: 1px 2px 5px 0 rgba(0,0,0,0.2);
    text-align: left;
  }

  .app-header {
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
    cursor: pointer;
  }

  .add-todo::before {
    content: "+ ";
    font-size: 1.5em;
    line-height: 0.5em;
    bottom: -3px;
    position: relative;
  }

  .app-body {
    padding: 1em;
  }

  .app-footer {
    margin: 0.5em 0;
    font-size: 0.75em;
  }
</style>
