<template>
  <div class="container">
    <div class="header">
      <Nav />
      <h1>WikiSafe</h1>
      <h2>Ceci est un sous-titre</h2>
    </div>
    <div class="searchContainer">
      <input type="text" placeholder="Rechercher une personne, un naufrage, etc..">
      <i class="bi bi-search" style="color: #162036;"></i>
    </div>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'

export default {
  name: 'Accueil',
  components: {
    Nav,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    flex:1;
    flex-direction: column;
    align-items: center;
  }
  .header {
    text-align: center;
    background-color: brown; /* Only for debug */
    background-image: url("../assets/img/background.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-top: 1px; /* Solve a issue with a blue band in the top of the screen :3 */ 
    padding-bottom: 6%;
  }
  h1 {
    margin-top: 6%; 
    font-family: 'Poppins', sans-serif; 
    font-weight: 300;
    margin-bottom: 0;
    font-size: 3.5em;
  }
  h2 {
    font-family: 'Poppins', sans-serif; 
    font-weight: 300;
    color: #D7BE27;
    margin-top: -.5em;
    font-size: 1.5em;
  }
  .searchBar {
    background-color: #eaebed;
    border-radius: 6px;  
    max-width: 60%;
    height: 2em;
    top: -1em;
    margin: auto;
    flex:1;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
  }
  .searchContainer {
    flex: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    background-color: #eaebed;
    border-radius: 6px;  
    max-width: 50%;
    height: 3em;
    padding : 0 1em;
    margin: auto;
    z-index: 2;
    margin-top: -1.5em;
  }
  input {
    border: none;
    background-color: #eaebed;
    border: none;
    height: 100%;
    width: 100%;
    font-size: 1em;
    height: 1.5em;
    margin: .15em;
  }
</style>
