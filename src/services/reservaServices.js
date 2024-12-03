const data = []; // Datos simulados

const findRange = async (first, max) => {
    return data.slice(first, first + max);
};

const findById = async (id) => {
    return data.find((reserva) => reserva.idReserva === id);
};

const create = async (reserva) => {
    const newReserva = { idReserva: data.length + 1, ...reserva };
    data.push(newReserva);
    return newReserva;
};

const count = async () => {
    return data.length;
};

module.exports = {
    findRange,
    findById,
    create,
    count,
};
