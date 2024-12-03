const ReservaService = require('../services/reservaServices');

const findRange = async (req, res) => {
    const { first = 0, max = 50 } = req.query;

    if (first < 0 || max <= 0 || max > 50) {
        return res.status(422).json({ error: 'Parámetros inválidos' });
    }

    try{
        const data = await ReservaService.findRange(Number(first), Number(max));
        const totalRecords = await ReservaService.count();
        res.header('Total-Records', totalRecords).json(data);
    } catch (err) {
        console.error('Error en findRange:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const findById = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(422).json({ error: 'ID inválido' });
    }
    try {
        const reserva = await ReservaService.findById(Number(id));
        if (reserva) {
            res.json(reserva);
        } else {
            res.status(404).json({ error: `Reserva con ID ${id} no encontrada` });
        }
    } catch (err) {
        console.error('Error en findById:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const create = async (req, res) => {
    const { body } = req;

    if (!body || body.idReserva) {
        return res.status(422).json({ error: 'Datos inválidos' });
    }

    try {
        const newReserva = await ReservaService.create(body);
        res.status(201).json(newReserva);
    } catch (err) {
        console.error('Error en create:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports = {
    findRange,
    findById,
    create,
};
