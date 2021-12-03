<template>
  <div class="container">
    <div class="header">
      <Nav />
      <h1>WikiSafe</h1>
      <h2>Outil de recherche des Sauveteurs en Mer</h2>
    </div>
    <form class="searchContainer" method="GET" action="/">
      <input name="search" type="text" :value="search" placeholder="Rechercher une personne, un naufrage, etc.." >
      <i class="bi bi-search" style="color: #162036;"></i>
    </form>

    <div v-if="search" class="results">
      <p>Résultats de la recherche : <i>{{search}}</i></p>
        <SearchResult v-for="result of results" :key="result._id" :id="result._id" :nom="result.Nom" :prenom="result.Prenom" :titre="result.Titre" :sauveteur="result.Sauveteur" :description="result.Description" />
        <strong v-if="results.length < 1">Aucun résultat</strong>
    </div>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import SearchResult from '../components/SearchResult.vue'

let uri = window.location.search.substring(1); 
let params = new URLSearchParams(uri);
var search = params.get("search");

export default {
  name: 'Accueil',
  data: function () {
    return {
      search: search,
      results: []
    }
  },
  components: {
    Nav,
    SearchResult
  },
  async created() {
    if(search) {
      fetch("http://192.168.31.54:44719/recherche/" + search)
      .then(async response => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }

        this.results = data;
      })
      .catch(error => {
        this.errorMessage = error;
        console.error("There was an error!", error);
      });
    }
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
  .results {
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: .6em;
    margin-top: 3em;
  }
</style>
