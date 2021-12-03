<template>
    <a v-bind:href="'/person/'+ id" class="result">
        <h3><span v-if="prenom">{{prenom}} </span>{{nom}}</h3>
        <p v-if="description">{{description}}</p>
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

  .result:hover {
    filter: brightness(0.85);
    cursor: pointer;
  }
</style>
