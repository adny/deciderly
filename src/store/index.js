import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    question: {
      namespaced: true,
      state: {
        question: '',
        answers: []
      },
      actions: {
        addQuestion: ({ commit }, question) => commit('ADD_QUESTION_MUTATION', question),
        addAnswer: ({ commit }, answer) => commit('ADD_ANSWER_MUTATION', answer)
      },
      mutations: {
        ADD_QUESTION_MUTATION (state, question) { state.question = question },
        ADD_ANSWER_MUTATION (state, answer) { state.anwsers.push(answer) }
      }
    }
  }
})
