const express = require('express')
const router = new express.Router()
const Sauvetage = require('../models/Sauvetage.model')

// Create user / Signup
router.get('/sauvetage', async (req, res) => {

    try {
        await new Sauvetage({ random: Math.random() }).save()
        const randoms = await Sauvetage.find({})
        return res.status(201).send(randoms.map(random => random.random))
    } catch (error) {
        res.status(400).send({error: 'Oh no! An error!', error: error.message})
    }
})

module.exports = router