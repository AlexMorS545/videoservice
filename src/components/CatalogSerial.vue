<template>
  <div class="wrap">
    <div v-for="serial in allSerials" :key="serial.id" class="item">
      <span class="item__name">{{serial.name}}</span>
      <img class="item__image" :src="serial.show.image.medium">
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
}
</style>