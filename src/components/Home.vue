<template>
  <div>
    Ask a Question!
    <input :value="question">
    <button @click="addQuestion(question)">set</button>
  </div>
</template>

<script>
  import store from '@/store'
  import { mapState, mapActions } from 'vuex'

  export default {
    computed: mapState('question', [
      'question'
    ]),
    methods: mapActions('question', [
      'addQuestion'
    ]),
    store: store
  }
</script>

<style scoped>

</style>
