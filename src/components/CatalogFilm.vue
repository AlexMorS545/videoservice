<template>
  <div class="wrap">
    <div v-for="film in allFilms" :key="film.id" class="item">
      <img class="item__image" :src="film.image.medium">
      <span class="item__name">{{film.name}}</span>
      <router-link class="item__link" :to="{name: 'About', params:{id: film.id}}">Подробнее</router-link>
      <!-- <div>{{ film.summary }}</div> -->
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
.wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  height: 600px;
  overflow: auto;
  background-color: #ffffff;
  padding: 20px;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #BDBDBD;
    border-radius: 5px;
    border: 2px solid #f2f2f2;
  }
  &::-webkit-scrollbar-track {
    border-radius: 5px;
    background-color: #f2f2f2;
  }
}
.item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  &__link {
    text-decoration: none;
    margin-bottom: 10px;
    color: #333333;
    transition: color .2s ease;
    &:hover {
      color: #E5261E;
    }
  }
}
</style>