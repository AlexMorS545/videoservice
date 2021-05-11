<template>
  <div>
    <h3 class="title-page">Каталог фильмов</h3>
    <CatalogFilm />
  </div>
</template>

<script>
import CatalogFilm from '@/components/CatalogFilm'
export default {
  components: {
    CatalogFilm
  },
  name: 'Film'
}
</script>