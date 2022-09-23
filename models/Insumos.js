const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const insumosSchema = new Schema({
  codigoInsumo:{
      type: Number,
      unique: true
  },
    nombre: {
      type: String
  }
})
module.exports = mongoose.model('Insumos', insumosSchema);
