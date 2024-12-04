const db = require('../../db.js');

// Obtener un rango de reservas
const findRange = async (first, max) => {
    return await db.Reserva.findAll({
        offset: first,
        limit: max,
    });
};

// Buscar una reserva por ID
const findById = async (id) => {
    return await db.Reserva.findByPk(id);
};

// Crear una nueva reserva
const create = async (reserva) => {
    return await db.Reserva.create(reserva);
};

// Contar todas las reservas
const count = async () => {
    return await db.Reserva.count();
};

module.exports = {
    findRange,
    findById,
    create,
    count,
};
