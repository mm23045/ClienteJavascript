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
        // Otros campos de la tabla
        fechaReserva: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    }, {
        tableName: 'tipo_reserva', // Asegúrate que coincida con el nombre real de la tabla
        timestamps: false,
    });

    return Reserva;
};


