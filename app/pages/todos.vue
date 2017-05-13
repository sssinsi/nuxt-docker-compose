<template>
  <div>
    <h2>Todos</h2>
    <ul>
      <li v-for="todo in todos">
        <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
      </li>
      <li>
        <input placeholder="What needs to be done?" @keyup.enter="addTodo">
      </li>
    </ul>
    <nuxt-link to="/">Home</nuxt-link>
  </div>
</template>

<script>
  import { mapMutations, mapGetters, mapActions } from 'vuex'
  import { TODOS_ADD, TODOS_TOGGLE, TODOS_LIST } from '../store/mutation-types.js'
  const PREFIX = 'todos/'
  const ADD = PREFIX + TODOS_ADD
  const TOGGLE = PREFIX + TODOS_TOGGLE
  const LIST = PREFIX + TODOS_LIST

  export default {
    computed: mapGetters({
      todos: LIST
    }),
    methods: {
      ...mapActions({
        add: ADD
      }),
      ...mapMutations({
        toggle: TOGGLE
      }),
      addTodo (e) {
        const text = e.target.value.trim()
        text && this.add(text)
        e.target.value = ''
      }
    }
  }
</script>

<style>
  .done {
    text-decoration: line-through;
  }
</style>
