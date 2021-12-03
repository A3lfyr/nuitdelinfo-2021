const express = require('express')
const router = new express.Router()
const Sauvetage = require('../models/Sauvetage.model')
const cors = require('cors')

router.options('*', cors())
router.use(cors())

router.get('/sauvetage/:id', (req, res) => {
    Sauvetage.findOne({ _id: req.params.id })
        .then(sauvetage => res.status(200).json(sauvetage))
        .catch(error => res.status(404).json({ error }));
});

router.get('/sauvetages', (req, res, next) => {
    Sauvetage.find()
      .then(sauvetages => res.status(200).json(sauvetages))
      .catch(error => res.status(400).json({ error }));
});

router.post('/sauvetage', (req, res) => {
    delete req.body._id;
    const sauvetage = new Sauvetage({
      ...req.body
    });
    sauvetage.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
});

router.put('/sauvetage/:id', (req, res, next) => {
    Sauvetage.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
});

router.delete('/sauvetage/:id', (req, res, next) => {
    Sauvetage.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
});

module.exports = router