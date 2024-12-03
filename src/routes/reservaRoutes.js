const express = require('express');
const router = express.Router();
const ReservaController = require('../controllers/reservaController');

// Rutas para el recurso Reserva
router.get('/', ReservaController.findRange);
router.get('/:id', ReservaController.findById);
router.post('/', ReservaController.create);

module.exports = router;
