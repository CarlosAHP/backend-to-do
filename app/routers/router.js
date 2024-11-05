const express = require('express');
const router = express.Router();
const proyectos = require('../controllers/proyecto.controller.js');  // Controlador de Proyecto


// Ruta para enviar el correo de confirmación
router.post('/send-email', async (req, res) => {
    const { to, subject, htmlContent } = req.body;
  
    try {
      await sendEmail(to, subject, htmlContent);
      res.status(200).send('Correo enviado con éxito');
    } catch (error) {
      res.status(500).send('Error al enviar el correo');
    }
  });

  
// Rutas de autenticación
router.post('/login', authController.login);  // Login con correo y contraseña
router.post('/google-login', authController.googleLogin);  // Login con Google


const pagoController = require('../controllers/pagos.controller.js');
router.post('/pagos', pagoController.crearPago);  // Ruta para crear un nuevo pago
router.get('/pagos', pagoController.obtenerPagos);  // Ruta para obtener todos los pagos
router.put('/pagos', pagoController.actualizarPago);  // Ruta para actualizar un pago
router.delete('/pagos/:Pago_ID', pagoController.eliminarPago);  // Ruta para eliminar un pago
router.post('/crear-intencion', pagoController.crearIntencion);


// Rutas para Proyectos
router.post('/api/proyectos/create', proyectos.create);        // Crear un nuevo proyecto
router.get('/api/proyectos', proyectos.retrieveAll);           // Obtener todos los proyectos
router.get('/api/proyectos/:id', proyectos.getById);           // Obtener proyecto por ID
router.put('/api/proyectos/:id', proyectos.update);            // Actualizar un proyecto
router.delete('/api/proyectos/:id', proyectos.delete);         // Eliminar un proyecto

module.exports = router;
