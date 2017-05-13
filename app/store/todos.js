import { TODOS_ADD as ADD, TODOS_TOGGLE as TOGGLE, TODOS_LIST as LIST } from './mutation-types.js'

export const state = {
  list: []
}

export const actions = {
  [ADD] ({ commit }, text) {
    // if you need async processes, you write these in action. (not in mutation)
    commit(ADD, { text })
  }
}

export const mutations = {
  [ADD] (state, { text }) {
    state.list.push({
      text,
      done: false
    })
  },
  [TOGGLE] (state, todo) {
    todo.done = !todo.done
  }
}

export const getters = {
  [LIST] (state) {
    return state.list
  }
}
