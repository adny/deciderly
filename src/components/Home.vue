<template>
  <div>
    Ask a Question!
    <input v-model="question">
  </div>
</template>

<script>
  import store from '@/store'

  export default {
    data () {
      return {
        question: ''
      }
    },
    store: store
  }
</script>

<style scoped>

</style>
