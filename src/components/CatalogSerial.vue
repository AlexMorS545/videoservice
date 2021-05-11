<template>
  <div class="wrap">
    <a v-for="serial in allSerials" :key="serial.id" class="item">
      <img class="item__image" :src="serial.show.image.medium">
      <span class="item__name">{{serial.show.name}}</span>
      <a class="item__link" :href="`${serial.show.officialSite}`" target="_blank">Перейти на страницу</a>
    </a>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'CatalogSerial',
  computed: mapGetters(['allSerials']),
  methods: mapActions(['getSerials']),
  async mounted() {
    this.getSerials()
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
  align-items: center;
  justify-content: space-around;
  width: 100%;
  border: 1px solid #333333;
  background-color: #f2f2f2;
  border-radius: 5px;
  margin-bottom: 20px;
  cursor: pointer;
  padding: 10px;

  &__name {
    font-family: RubikMedium;
    font-weight: 500;
    font-size: 2rem;
  }

  &__image {
    width: 70px;
  }

  &__link {
    text-decoration: none;
    color: #333333;
  }
}
</style>