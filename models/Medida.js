const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medidaSchema = new Schema({
    nombre: {
      type: String
  }
})
module.exports = mongoose.model('Medidas', medidaSchema);
