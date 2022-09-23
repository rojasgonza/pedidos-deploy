const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empleadosSchema = new Schema({
   nombre: {
       type: String,
       trim: true
   },
   apellido: {
       type: String,
       trim: true
   },
   cargo: {
       type: String,
       trim:true
   },
   email: {
       type: String,
       unique: true
   }

});
module.exports = mongoose.model('Empleados', empleadosSchema);