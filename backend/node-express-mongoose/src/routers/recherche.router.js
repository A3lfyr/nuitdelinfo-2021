const express = require('express')
const router = new express.Router()
const Sauvetage = require('../models/Sauvetage.model')
const Personne = require('../models/Personne.model')
const cors = require('cors')

router.options('*', cors())
router.use(cors())

/**
 * NOM
 * PRENOM
 * DESC
 * TITRE
 * SAUVETEUR
 */
router.get('/recherche/:search', (req, res) => {
  search = null;
  if(search) {
    console.log("Pourquoi search est pas null ??? :o")
  }
  let aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaarraySearch = req.params.search.split(' ')
  for (let aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa = 0; aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa < aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaarraySearch.length; aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa++) {
    let aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaarray = aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaarraySearch[aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa]
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaarray = pasUpperCase(aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaarray);
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaarraySearch[aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa] = aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaarray
  }
  console.log(aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaarraySearch)
  Personne.find(
    {
      $or:[
        {Nom_lowercase: {$in: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaarraySearch}},
        {Prenom_lowercase: {$in: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaarraySearch}}
      ]
    },
    {
        Prenom: 1,
        Nom: 1,
        Description:1,
        Titre:1,
        Sauveteur:1
    })
      .then(personnes => res.status(200).json(personnes))
      .catch(error => res.status(404).json({ error }));
});

function pasUpperCase(strrrrr){
  return strrrrr.toLowerCase()
}

module.exports = router