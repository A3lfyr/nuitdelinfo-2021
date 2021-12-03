<template>
<div id="card">
  <img v-if="lienPhoto.length!=0" :src="lienPhoto" alt ="photo de profil"/>
  <p id="name" v-if="prenom.length !=0 || nom.length != 0 " >{{prenom}} {{nom}}</p>
  <p id="role" v-if="role.length!=0">{{role}}</p>
  <p v-if="description.length != 0"> {{description}} </p>
  <div id="flexBottom">
  <p>{{sauvetages}} <br> sauvetages</p>
  <p>{{personnes}} <br> personnes</p>
</div>
</div>
</template>

<script>
export default {
  name: 'CardPersonne',
  props: {
    lienPhoto:{
      type:String,
      default:""
    },
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
    },
    role:{
      type: String,
      default: ""
    },
    sauvetages:{
      type: Number,
      default: 0
    },
    personnes:{
      type:Number,
      default:0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#card
{
  color: #162036;
  font-size: 1.1em;
  font-weight: bold;
  border-radius: 15px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
}
#name {
  font-size: 1.1em;
}
#role{
  background-color: #162036;
  color:#D7BE27;
}
#flexBottom
{
  background-color: #D7BE27;
  color: #000000;
  font-weight: bold;
  display:flex;
  flex-direction: row;
  align-items: stretch;
  justify-content:space-around;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
img{
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  max-height: 50%;
  max-width: 100%;
}
</style>
