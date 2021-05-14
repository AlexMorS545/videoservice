<template>
  <div>
    <Index msg="Видеосервис с иформацией о фильме"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Index from '@/components/Index.vue'

export default {
  name: 'Home',
  props: ['films'],
  components: {
    Index
  }
}
</script>
