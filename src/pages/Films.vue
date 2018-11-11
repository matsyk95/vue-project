<template>
  <div>
<!--    <films-options @update="updateOptions"></films-options>
    <films-list :films="films | title(options) | length(options)"></films-list> -->
    <h1> hellow </h1>
        <h2>Rezerwacje dla użytkownika: {{films}}</h2>
  </div>
</template>

<script>

export default {
  name: 'Films',
  data () {
    return {
      length: ''
    }
  },
  methods: {
    updateOptions (options) {
      this.options = options
    }
  },
  computed: {
    films () {
      return this.$store.getters.allFilms
    }
  },

  created () {
    if (this.films.length === 0) {
      this.$store.dispatch('allFilms')
    }
  }
}
</script>
