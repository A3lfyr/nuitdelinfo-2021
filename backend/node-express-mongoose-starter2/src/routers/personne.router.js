const express = require('express')
const router = new express.Router()
const Personne = require('../models/Personne.model')

// Create user / Signup

router.get('/personne/:id', (req, res) => {
    console.log(req.params.id)
    Personne.findOne({ _id: req.params.id })
        .then(personne => res.status(200).json(personne))
        .catch(error => res.status(404).json({ error }));
});

router.get('/personnes', (req, res, next) => {
    Personne.find()
      .then(personnes => res.status(200).json(personnes))
      .catch(error => res.status(400).json({ error }));
});

router.post('/personne', (req, res) => {
    delete req.body._id;
    const personne = new Personne({
      ...req.body
    });
    personne.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
});

router.put('/personne/:id', (req, res, next) => {
    Personne.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
});

router.delete('/personne/:id', (req, res, next) => {
    Personne.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
});

module.exports = router