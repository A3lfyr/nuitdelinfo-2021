<template>
<div>
  <img src={{lienPhoto}} alt ="photo de profil"/>
  <p id="name" v-if="prenom.length !=0 || nom.length != 0 " >{{prenom}} {{nom}}</p>
  <p> </p>
  <p id="description"> {{description}} </p>
</div>
</template>

<script>

export default {
  name: 'CardPersonne',
  props: {
    lienPhoto: String,
    prenom:{
      type: String,
      default: ""
    },

    nom: {
      type: String,
      default: ""
    },
    description:{
      type:String,
      default: ""
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
