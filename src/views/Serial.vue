<template>
  <TopHeader/>
  <div id="nav">
    <router-link to="/">Главная</router-link>
    <router-link to="/film">Фильмы</router-link>
    <router-link to="/serial">Сериалы</router-link>
  </div>
  <div class="about">
    <h1>This is an serials page</h1>
  </div>
</template>
<script>
import TopHeader from '@/components/TopHeader.vue'

export default {
  name: 'Serial',
  components: {
    TopHeader
  }
}
</script>