const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pedidosSchema = new Schema({
    empleado: {
        type: Schema.ObjectId,
        ref: 'Empleados'
    }, local: {
        type: Schema.ObjectId,
        ref: 'Locales'
    },
    fecha:{
        type: String
    },
    aclaraciones:{
        type: String
    },
    lista: [{
        insumos: {
            type: Schema.ObjectId,
            ref: 'Insumos'
        },
        medida:{
            type: Schema.ObjectId,
            ref:'Medidas'
        },
        cantidad: Number
    }]
});
module.exports = mongoose.model('Pedidos', pedidosSchema);
