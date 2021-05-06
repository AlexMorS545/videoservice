<template>
  <div>
    <h3 class="title-page">Каталог сериалов</h3>
    <div class="wrap">
      <div v-for="serial in allSerials" :key="serial.id" class="item">
        <span class="item__name">{{serial.name}}</span>
        <img class="item__image" :src="serial.show.image.medium">
      </div>
    </div>
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
.title-page {

}
.wrap {

}
.item {

  &__name {

  }

  &__image {

  }
}
</style>