const db = require('../../db.js');

module.exports = (sequelize, DataTypes) => {
    const Reserva = sequelize.define('Reserva', {
        idReserva: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        campo1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        campo2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fechaReserva: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    }, {
        tableName: 'tipo_reserva',
        timestamps: false,
    });

    return Reserva;
};

// Ejemplo de creación de una reserva con fechaReserva
async function createReserva() {
    const Reserva = require('./path/to/your/model/Reserva'); // Ajusta la ruta según tu estructura de proyecto
    try {
        const nuevaReserva = await Reserva.create({
            fechaReserva: new Date(), // Proporciona una fecha válida
            campo1: 'valorCampo1', // Proporciona un valor válido para campo1
            campo2: 'valorCampo2', // Proporciona un valor válido para campo2
        });
        console.log('Reserva creada:', nuevaReserva);
    } catch (error) {
        console.error('Error durante la creación de la reserva:', error);
    }
}

createReserva();