<template>
<div id="flex_cont">
  <CardPersonne id="card" :nom="personne.Nom" :prenom="personne.Prenom" :description="personne.Description" :role="personne.Titre" :photo="personne.Photo" />
  <div id="sous_flex">
  <p v-if="personne.Decoration != null">{{personne.Decoration}}</p>
  <p v-if="personne.EtatCivil != null"> {{personne.EtatCivil}} </p>
  <p v-if="personne.Genealogie !=null"> {{personne.Genealogie}} </p>
  <p v-if="personne.Temoignage != null"> {{personne.Temoignage}} </p>
</div>
</div>
</template>

<script>
import CardPersonne from '../components/CardPersonne.vue'

//var id ='61a9a79744c49a31f87038e6';

export default {
  name: 'PagePersonne',
  components:{
    CardPersonne
  },
  data:function(){
    return{
      personne: null
    }

  },
  async created() {
    var id = this.$route.params.id;
      fetch("http://192.168.31.54:44719/personne/" + id)
      .then(async response => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }

        this.personne = data;

      })
      .catch(error => {
        this.errorMessage = error;
        console.error("There was an error!", error);
      });
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#flex_cont{
  display:flex;
  flex-direction: row;
}
#card{
  margin: 3%;
  max-width: 30%;
}
#sous_flex{
  display:flex;
  flex-direction: column;
}
</style>
