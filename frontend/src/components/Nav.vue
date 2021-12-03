<template>
  <div class="navContainer">
    <div class="left">
      <div class="navItem">
        <i class="bi bi-house"></i>
        <router-link to="/" >Accueil</router-link>
      </div>
      <div class="navItem">
        <i class="bi bi-plus-lg"></i>
        <router-link to="/">Nouveau</router-link>
      </div>
      <div class="navItem">
        <i class="bi bi-journal-bookmark"></i>
        <router-link to="/docu">Documentation</router-link>

      </div>
    </div>
    <div class="right">
      <div class="navItem">
        <router-link to="/connexion">Connexion</router-link>
        <i class="bi bi-person"></i>
      </div>
      <div class="navItem">
        <img src="../assets/img/flags/FR.png" alt="">
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'Nav',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  max-width: 70%;
  height: 100%;
  margin: auto;
  padding: .5em 0;
}

.right {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 3em;
}

.left {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 3em;
}

img {
  width: 1em;
}


</style>
