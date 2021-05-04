<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/image/icon/fire.png"> -->
    <Index msg="My first project with vue-cli"/>
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
