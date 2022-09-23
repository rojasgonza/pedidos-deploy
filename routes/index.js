const express = require('express');
const router = express.Router();
const localesController = require('../controllers/localesController');
const insumosController = require('../controllers/insumosController');
const empleadosController = require('../controllers/empleadosController');
const pedidoController = require('../controllers/pedidoController');
const medidaController = require('../controllers/medidaController');

module.exports = function (){
// LOCALES // 
//Agregar local
router.post('/locales', localesController.nuevoLocal);
// Mostrar locales 
router.get('/locales', localesController.mostrarLocales);
// Mostrar solo 1 local
router.get('/locales/:idLocal', localesController.mostrarLocal);
//Actualizar Local
router.put('/locales/:idLocal', localesController.actualizarLocal);
//Borrar local
router.delete('/locales/:idLocal', localesController.borrarLocal);
// INSUMOS // 
// Agregar insumo
router.post('/insumos', insumosController.nuevoInsumo);
// Mostrar insumos
router.get('/insumos', insumosController.mostrarInsumos);
// Mostrar insumos
router.get('/insumos/:idInsumo', insumosController.mostrarInsumo);
// Modificar insumos 
router.put('/insumos/:idInsumo', insumosController.actualizarInsumo);
// Borrar insumo
router.delete('/insumos/:idInsumo', insumosController.borrarInsumo);

// EMPLEADOS //
// Nuevo Empleado
router.post('/empleados', empleadosController.nuevoEmpleado);
// Mostrar empleados
router.get('/empleados', empleadosController.mostrarEmpleados);
// Mostrar empleado 
router.get('/empleados/:idEmpleado', empleadosController.mostrarEmpleado);
// Modificar empleados
router.put('/empleados/:idEmpleado', empleadosController.actualizarEmpleado);
// Eliminar empleado
router.delete('/empleados/:idEmpleado', empleadosController.borrarEmpleado);

// PEDIDOS //
// Nuevo pedido 
router.post('/pedidos', pedidoController.nuevoPedido);
// Mostrar pedidos
router.get('/pedidos', pedidoController.mostrarPedidos);
// Mostrar pedido
router.get('/pedidos/:idPedido', pedidoController.mostrarPedido);
// Actualizar pedido
router.put('/pedidos/:idPedido', pedidoController.actualizarPedido);
// Borrar pedidos 8.47
router.delete('/pedidos/:idPedido', pedidoController.eliminarPedido);

// INSUMOS // 
// Agregar insumo
router.post('/medidas', medidaController.nuevaMedida);
// Mostrar insumos
router.get('/medidas', medidaController.mostrarMedidas);
// Mostrar insumos
router.get('/medidas/:idMedida', medidaController.mostrarMedida);
// Modificar insumos 
router.put('/medidas/:idMedida', medidaController.actualizarMedida);
// Borrar insumo
router.delete('/medidas/:idMedida', medidaController.borrarMedida);











return router;
}