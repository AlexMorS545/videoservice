<template>
    <TopHeader/>
    <div id="nav">
        <router-link to="/">Главная</router-link>
        <router-link to="/film">Фильмы</router-link>
        <router-link to="/serial">Сериалы</router-link>
    </div>
    <h1>Film page</h1>
    <ca/>
</template>

<script>
import TopHeader from '@/components/TopHeader.vue'

export default {
  name: 'Film',
  components: {
    TopHeader
  }
}
</script>