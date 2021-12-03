<template>
  <Accueil />
</template>

<script>
require('./assets/style/style.css');
import Accueil from './components/Accueil.vue'

export default {
  name: 'App',
  components: {
    Accueil
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
