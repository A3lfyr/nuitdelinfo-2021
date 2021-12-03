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
  let arraySearch = req.params.search.split(' ')
  for (let index = 0; index < arraySearch.length; index++) {
    let array = arraySearch[index]
    array = array.toLowerCase()
    arraySearch[index] = array
  }
  console.log(arraySearch)
  Personne.find(
    {
      $or:[
        {Nom_lowercase: {$in: arraySearch}},
        {Prenom_lowercase: {$in: arraySearch}}
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

module.exports = router