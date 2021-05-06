<template>
  <div>
    <h3 class="title-page">Каталог фильмов</h3>
    <div class="wrap">
      <div v-for="film in allFilms" :key="film.id" class="item">
        <img class="item__image" :src="film.image.medium">
        <span class="item__name">{{film.name}}</span>
      </div>
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
<style lang="less" scoped>
.title-page {
  font-size: 26px;
  margin: 0 auto;
}
.wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  height: 600px;
  overflow: auto;
  background-color: #dfdfdf;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #333333;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: #fdfdfd;
  }
}
.item {
  display: flex;
  flex-direction: column;
  border: 1px solid #333333;
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 20px;
  max-width: 180px;
  min-width: 0;
  cursor: pointer;

  &__name {
    margin: 20px 0;
  }

  &__image {
  }
}
</style>