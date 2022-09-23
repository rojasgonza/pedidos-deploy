const Insumos = require('../models/Insumos');

//Crear Insumos
exports.nuevoInsumo = async (req,res,next) => {
    const insumo = new Insumos(req.body);
    try {
        await insumo.save();
        res.json({mensaje: "El insumo se creo correctamente"});
    } catch (error) {
        console.log(error);
        next();
    }
}

// Mostrar Insumos
exports.mostrarInsumos = async (req,res,next)=>{
  try {
    const insumos = await Insumos.find({});
    res.json(insumos);
  } catch (error) {
      console.log(error);
      next();
  }
} 
//mostrar insumo
exports.mostrarInsumo = async (req,res,next) =>{
    
    const insumo = await Insumos.findById(req.params.idInsumo)
    if (!insumo) {
        res.json({mensaje: "No existe insumo"});
        next();
    }
    res.json(insumo)
}

//Actualizar Productos
exports.actualizarInsumo = async (req,res,next) =>{
   try {
    const insumo = await Insumos.findByIdAndUpdate({_id: req.params.idInsumo},req.body,{
        new: true,
    });
    res.json(insumo)
   } catch (error) {
       console.log(error);
       next();
   }
}
exports.borrarInsumo = async (req, res,next)=>{
    try {
        const insumo = await Insumos.findByIdAndDelete({_id: req.params.idInsumo});
        res.json({mensaje: "El insumo se borro correctamente"})
    } catch (error) {
        console.log(error);
        next();
    }
}