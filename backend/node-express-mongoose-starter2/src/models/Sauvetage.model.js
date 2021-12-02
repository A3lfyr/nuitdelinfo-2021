const { ObjectId } = require('mongoose')
const mongoose = require('mongoose')

const sauvetageSchema = new mongoose.Schema({
    PatronID: {
        type: ObjectId
    },
    SousPatronID: {
        type: ObjectId
    },
    Armement: {
        type: Array
    },
    Naufrages: {
        type: Array
    },
    SauvteursDecedesID: {
        type: Array
    },
    NaufragesDecedesID: {
        type: Array
    },
    Localisation: {
        type: String
    },
    Date: {
        type: Date
    },
    DepartSauveteurs: {
        type: String
    },
    Description: {
        type: Object
    },
    Temoignage: {
        Date: {
            type: Date
        },
        Text: {
            type: String
        }
    },
    Sources: {
        type: Array
    }
}, {
    timestamps: true
})

const Sauvetage = mongoose.model('Sauvetage', sauvetageSchema)

module.exports = Sauvetage