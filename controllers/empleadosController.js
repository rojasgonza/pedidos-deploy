const Empleados = require('../models/Empleados');
// Nuevo empleado
exports.nuevoEmpleado = async (req,res,next) => {
    const empleado = new Empleados(req.body);
    try {
        await empleado.save();
        res.json({mensaje: "El empleado se creo correctamente"});
    } catch (error) {
        res.json(error);
        next();
    }
}
//Mostrar empleados
exports.mostrarEmpleados = async (req,res,next) => {
  try {
        const empleados = await Empleados.find({})
        res.json(empleados);
  } catch (error) {
        console.log(error);
        next();
  }
}
// Mostrar empleado
exports.mostrarEmpleado = async (req,res,next) =>{
    
    const empleado = await Empleados.findById(req.params.idEmpleado)
    if (!empleado) {
        res.json({mensaje: "No existe empleado"});
        next();
    }
    res.json(empleado)
}


// Actualizar Empleado
  exports.actualizarEmpleado = async (req, res, next) => {
    try {
        const empleado = await Empleados.findOneAndUpdate({ _id: req.params.idEmpleado},
            req.body, {
            new: true
        });
        res.json(empleado)
    } catch (error) {
        console.log(error);
        next();
    }
}
// Eliminar empleado
exports.borrarEmpleado = async (req, res,next)=>{
    try {
        const empleado = await Empleados.findByIdAndDelete({_id: req.params.idEmpleado});
        res.json({mensaje: "El empleado se borro correctamente"})
    } catch (error) {
        console.log(error);
        next();
    }
}