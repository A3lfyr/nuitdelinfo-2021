const express = require('express')
const router = new express.Router()
const Personne = require('../models/Personne.model')

// Create user / Signup
router.get('/personne', async (req, res) => {

    try {
        await new Personne({ random: Math.random() }).save()
        const randoms = await Personne.find({})
        return res.status(201).send(randoms.map(random => random.random))
    } catch (error) {
        res.status(400).send({error: 'Oh no! An error!', error: error.message})
    }
})

module.exports = router