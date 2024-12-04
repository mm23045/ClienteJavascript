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

// Obtener todos los tipos de reserva
const findAllTiposReserva = async () => {
    return await db.Reserva.findAll({
        attributes: ['campo1'], // Ajusta según el nombre del campo que contiene el tipo de reserva
        group: ['campo1']
    });
};

module.exports = {
    findRange,
    findById,
    create,
    count,
    findAllTiposReserva,
};
