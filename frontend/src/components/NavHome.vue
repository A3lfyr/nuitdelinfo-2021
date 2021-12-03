<template>
  <div class="navContainer">
    <div class="left">
      <router-link to="/"  class="navItem">
        <i class="bi bi-house"></i>
        Accueil
      </router-link>
      <router-link to="/" class="navItem">
        <i class="bi bi-plus-lg"></i>
        Nouveau
      </router-link>
      <a class="navItem" href="https://github.com/A3lfyr/nuitdelinfo-2021" target="_blank">
        <i class="bi bi-journal-bookmark"></i>
        Documentation
      </a>
    </div>
    <div class="right">
      <router-link to="/connexion" class="navItem">
        Connexion
        <i class="bi bi-person"></i>
      </router-link>
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
.navItem {
  text-decoration: none;
  color: #eaebed;
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
