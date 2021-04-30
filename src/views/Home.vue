<template>
  <TopHeader/>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/image/icon/fire.png"> -->
    <div id="nav">
      <router-link to="/">Главная</router-link>
      <router-link to="/film">Фильмы</router-link>
      <router-link to="/serial">Сериалы</router-link>
    </div>
    <Index msg="My first project with vue-cli"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Index from '@/components/Index.vue'
import TopHeader from '@/components/TopHeader.vue'

export default {
  name: 'Home',
  components: {
    Index,
    TopHeader
  }
}
</script>
