const express = require('express')
require('./db/mongoose.connect') // Connect to DB

const personneRouter = require('./routers/personne.router')
const sauvetageRouter = require('./routers/sauvetage.router')
const rechercheRouter = require('./routers/recherche.router')

const app = express()
app.use(express.json())
app.use(personneRouter)
app.use(sauvetageRouter)
app.use(rechercheRouter)

module.exports = app