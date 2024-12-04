const express = require('express');
const router = express.Router();
const reservaServices = require('../src/services/reservaServices');
const reservaController = require('../controllers/reservaController');

router.get('/', reservaController.findRange);
router.get('/:id', reservaController.findById);
router.post('/', reservaController.create);

// Ruta para obtener los tipos de reserva
router.get('/tipos-reserva', async (req, res) => {
    try {
        const tiposReserva = await reservaServices.findAllTiposReserva();
        res.json(tiposReserva);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los tipos de reserva' });
    }
});

module.exports = router;
