const res = require('express/lib/response');
const Pedidos = require('../models/Pedidos');

exports.nuevoPedido = async (req, res, next) => {
    const pedido = new Pedidos(req.body);
    try {
        await pedido.save();
        res.json({ mensaje: 'Se agregó un nuevo pedido' });
    } catch (error) {
        console.log(error);
        next();
    }
}

// mostrar pedidos 
exports.mostrarPedidos = async (req, res, next) => {
    try { // asi se muestran las relaciones

        const pedidos = await Pedidos.find({}).populate('empleado').populate({
            path: 'lista.insumos',
            model: 'Insumos'
        }).populate({ path: 'local', model: 'Locales' }).populate({ path: 'lista.medida', model: 'Medidas' });
        res.json(pedidos);
    } catch (error) {
        console.log(error);
        next();

    }
}
//mostrar pedido por id
exports.mostrarPedido = async (req, res, next) => {
    const pedido = await Pedidos.findById(req.params.idPedido).populate('empleado').populate({
        path: 'lista.insumos',
        model: 'Insumos'
    }).populate({ path: 'local', model: 'Locales' }).populate({ path: 'lista.medida', model: 'Medidas' });
    if (!pedido) {
        res.json({ mensaje: "ese pedido no existe" });
        return next();
    }
    //si existe mostrar pedido
    res.json(pedido);
}

exports.actualizarPedido = async (req, res, next) => {
    try {
        let pedido = await Pedidos.findOneAndUpdate({ _id: req.params.idPedido }, req.body, {
            new: true
        }).populate('empleado').populate({
            path: 'pedido.producto',
            model: 'Productos'
        });
        res.json(pedido);
    } catch (error) {
        console.log(error);
        next();
    }
}


exports.eliminarPedido = async (req, res, next) => {
    try {
        await Pedidos.findOneAndDelete({ _id: req.params.idPedido });
        res.json({ mensaje: 'El pedido fue eliminado correctamente' });

    } catch (error) {
        console.log(error);
        next();
    }
}
