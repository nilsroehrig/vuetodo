<template>
  <form action="#" @submit.prevent="submitName">
    <p class="name-label">Hi! I'm vuedo, your friendly todo app! Please tell me your <label for="username">name</label>:</p>
    <div class="name-inputs">
      <input v-model="name" placeholder="Your name..." type="text" id="username" name="username" class="text-input">
      <button type="submit" class="submit-name">Continue</button>
    </div>
  </form>
</template>

<script>
import Store from '../Store'

export default {
  data: function () {
    return {
      name: ''
    }
  },
  methods: {
    submitName () {
      console.log(this.name)
      if (this.name.length < 2) {
        return
      }
      Store.setName(this.name)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.name-label {
  text-align: center;
}

.name-inputs {
  display: flex;
  justify-content: space-between;
}

.text-input {
  padding: .5em;
  background-color: #fff;
  color: #000;
  border: solid thin #DDD;
  font-family: Lato, sans-serif;
  font-size: calc(16em/20);
  border-radius: .5em;
  font-weight: 300;
  line-height: 1;
  width: calc(70% - 2em);
}

.submit-name {
  padding: .5em;
  font-size: calc(16em/20);
  background-color: #59a0db;
  color: #fff;
  border: solid thin #59a0db;
  border-radius: .5em;
  cursor: pointer;
  font-weight: regular;
  line-height: 1;
  width: 30%;
}
</style>
