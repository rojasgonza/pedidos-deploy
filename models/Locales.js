const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const localesSchema = new Schema ({
    nombre: {
        type: String,
        trim: true,
        unique: true
    },
    direccion: {
        type: String,
        trim: true
    },
    telefono: {
        type: Number,
        trim: true
    }

});
module.exports = mongoose.model('Locales', localesSchema);