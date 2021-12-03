<template>
  <CardPersonne nom="Test" prenom="Test" role="test" description="Ceci est une description" lienPhoto="https://thumbs.dreamstime.com/b/photo-d-optimisme-exprimant-la-personne-joyeuse-faisant-main-de-participation-v-signe-sur-le-fond-gris-isolement-par-taille-154888614.jpg" sauvetages="10" personnes="5" > </CardPersonne>
</template>

<script>
import CardPersonne from './components/CardPersonne.vue'

export default {
  name: 'App',
  components: {
    CardPersonne
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
