<template>
  <div class="wrap">
    <div v-for="film in allFilms" :key="film.id" class="item">
      <div class="img-wrp">
        <img class="item__image" :src="film.image.medium" :alt="film.name">
        <span class="item__desc">{{ film.summary.replace(/<(.|\n)*?>/g, '') }}</span>
      </div>
      <span class="item__name">{{film.name}}</span>
      <router-link class="item__link" :to="'/about/' + film.id">Подробнее</router-link>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'CatalogFilm',
  computed: mapGetters(['allFilms']),
  methods:  mapActions(['getFilms']),
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
  width: 95%;
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
  max-width: 200px;
  min-width: 0;
  &__name {
    font-family: RubikMedium;
    font-weight: 500;
    font-size: 20px;
    margin: 20px 0 15px;
  }
  &__image {
    display: block;
    width: 100%;
  }
  &__link {
    text-decoration: none;
    margin-bottom: 10px;
    color: #333333;
    font-size: 14px;
    transition: color .2s ease;
    &:hover {
      color: #E5261E;
    }
  }
  &__desc {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    color: #ffffff;
    font-size: 14px;
    background-color: rgba(51, 51, 51, 0.7);
    opacity: 0;
    overflow: hidden;
    transition: all .3s ease;
    transform: scale(0);
    padding: 10px 5px;
    text-align: left;
  }
}
.img-wrp {
  cursor: pointer;
  position: relative;
  &:hover .item__desc {
    opacity: 1;
    transform: scale(1);
  }
}
</style>