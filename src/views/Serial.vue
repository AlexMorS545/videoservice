<template>
  <div>
    <h3 class="title-page">Каталог сериалов</h3>
    <CatalogSerial/>
  </div>
</template>
<script>
import CatalogSerial from '@/components/CatalogSerial'
export default {
  name: 'Serial',
  components: {
    CatalogSerial
  }
}
</script>