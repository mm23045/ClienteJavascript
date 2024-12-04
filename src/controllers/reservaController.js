const db = require('../models');
const Reserva = db.Reserva;

// Obtener registros con paginación
exports.findRange = async (req, res) => {
    const { first = 0, max = 50 } = req.query;

    if (first >= 0 && max > 0 && max <= 50) {
        try {
            const reservas = await Reserva.findAll({ offset: parseInt(first), limit: parseInt(max) });
            const total = await Reserva.count();
            res.setHeader('Total-Records', total);
            res.json(reservas);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al obtener las reservas');
        }
    } else {
        res.status(422).send('Parámetros inválidos');
    }
};

// Obtener un registro por ID
exports.findById = async (req, res) => {
    const { id } = req.params;

    try {
        const reserva = await Reserva.findByPk(id);
        if (reserva) {
            res.json(reserva);
        } else {
            res.status(404).send('Reserva no encontrada');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error del servidor');
    }
};

// Crear una nueva reserva
exports.create = async (req, res) => {
    try {
        const nuevaReserva = await Reserva.create(req.body);
        res.status(201).json(nuevaReserva);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al crear la reserva');
    }
};
