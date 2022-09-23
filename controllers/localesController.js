const Locales = require('../models/Locales');

//Agregra local

exports.nuevoLocal = async (req,res) => {
    const local = new Locales(req.body);
    try {
        //Almacenar
        await local.save();
        res.json({mensaje: "se guardo correctamente"})
    } catch (error) {
        console.log(error);
        next();
    }
}
exports.mostrarLocales = async (req,res,next) => {
    try {
        const locales = await Locales.find({});
        res.json(locales);
    } catch (error) {
        console.log(error);
        next();
    }
}
exports.mostrarLocal = async (req,res,next) =>{
    
        const local = await Locales.findById(req.params.idLocal)
        if (!local) {
            res.json({mensaje: "No existe local"});
            next();
        }
        res.json(local)
}

exports.actualizarLocal = async (req, res, next) => {
    try {
        const local = await Locales.findOneAndUpdate({ _id: req.params.idLocal},
            req.body, {
            new: true
        });
        res.json(local)
    } catch (error) {
        console.log(error);
        next();
    }
}
exports.borrarLocal = async (req, res,next)=>{
    try {
        const local = await Locales.findByIdAndDelete({_id: req.params.idLocal});
        res.json({mensaje: "El local se borro correctamente"})
    } catch (error) {
        console.log(error);
        next();
    }
}