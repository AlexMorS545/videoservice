<template>
  <div>
    <h3>This is CatalogFilm</h3>
    <div v-for="film in allFilms" :key="film.id">
      <div>{{film.name}}</div>
      <img :src="film.image.medium">
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'CatalogFilm',
  computed: mapGetters(['allFilms']),
  methods: mapActions(['getFilms']),
  async mounted() {
    this.getFilms()
  }
}
</script>