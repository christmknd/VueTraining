<script>
import Nav from './components/layout/Nav.vue';

export default {
  name : 'App',
  components: {Nav}
}
</script>

<template>
  <div id="app">
  <Nav/>
  <router-view/>
  </div>
</template>

<style scoped>
</style>
