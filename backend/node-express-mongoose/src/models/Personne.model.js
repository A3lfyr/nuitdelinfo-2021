const { ObjectId } = require('mongoose')
const mongoose = require('mongoose')

const personneSchema = new mongoose.Schema({
    Nom: {
        type: String
    },
    Prenom: {
        type: String
    },
    Nom_lowercase: {
        type: String
    },
    Prenom_lowercase: {
        type: String
    },
    Titre: {
        type: String
    },
    Sauveteur: {
        type: Boolean
    },
    EtatCivil: {
        DateNaissance: {
            type: Date
        },
        DateDeces: {
            type: Date
        }
    },
    Photo: {
        type: String
    },
    Genealogie: {
        Parent1:{
            type: String
        },
        Parent2: {
            type: String
        },
        DateMariage: {
            type: Date
        },
        Conjoint: {
            type: String
        },
        Descendance: {
            type: Array
        }
    },
    Temoignage: {
        Date: {
            type: Date
        },
        Text: {
            type: Object
        },
        Sauvetage: {
            type: ObjectId
        }
    },
    Description: {
        type: String
    },
    Sources: {
        type: Array
    }
}, {
    timestamps: true
})

const Personne = mongoose.model('Personne', personneSchema)

module.exports = Personne