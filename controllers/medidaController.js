const Medidas = require('../models/Medida');

//Crear Insumos
exports.nuevaMedida = async (req,res,next) => {
    const medida = new Medidas(req.body);
    try {
        await medida.save();
        res.json({mensaje: "La medida se creo correctamente"});
    } catch (error) {
        console.log(error);
        next();
    }
}

// Mostrar Insumos
exports.mostrarMedidas = async (req,res,next)=>{
  try {
    const medidas = await Medidas.find({});
    res.json(medidas);
  } catch (error) {
      console.log(error);
      next();
  }
} 
//mostrar insumo
exports.mostrarMedida= async (req,res,next) =>{
    
    const medida = await Medidas.findById(req.params.idMedida)
    if (!medida) {
        res.json({mensaje: "No existe insumo"});
        next();
    }
    res.json(medida)
}

//Actualizar Productos
exports.actualizarMedida = async (req,res,next) =>{
   try {
    const medida = await Medidas.findByIdAndUpdate({_id: req.params.idMedida},req.body,{
        new: true,
    });
    res.json(medida)
   } catch (error) {
       console.log(error);
       next();
   }
}
exports.borrarMedida = async (req, res,next)=>{
    try {
        const medida = await Medidas.findByIdAndDelete({_id: req.params.idMedida});
        res.json({mensaje: "La medidad borro correctamente"})
    } catch (error) {
        console.log(error);
        next();
    }
}