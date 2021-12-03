<template>
    <a v-bind:href="'/person/'+ id" class="result">
        <h3>
          <span v-if="prenom">{{prenom}} </span>
          <span v-if="nom">{{nom}} </span>
          <small v-if="titre || sauveteur"><span v-if="sauveteur">Sauveteur</span><span v-if="titre">- {{titre}} </span></small>
        </h3>
        <p >{{description}}</p>
    </a>
</template>

<script>

export default {
  name: 'SearchResult',
  props: {
    id: String,
    prenom:{
      type: String,
      default: ""
    },
    nom: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    titre: {
      type: String,
      default: ""
    },
    sauveteur: {
      type: String,
      default: ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .result {
    background-color: #eaebed;
    border-radius: 6px;
    width: 80%;
    padding: .5em;
    color: #162036;

    flex:1;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: baseline;
    gap: .6em;
    
    text-decoration: none;
  }
  .result * {
    margin: .3em;
  }
  small {
    font-size: .8em;
    color: #D7BE27;
  }

  .result:hover {
    filter: brightness(0.85);
    cursor: pointer;
  }
</style>
