<template>
  <div>
    <h3>This is CatalogSerials</h3>
    <div v-for="serial in allSerials" :key="serial.id">
      <div>{{serial.name}}</div>
      <img :src="serial.show.image.medium">
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