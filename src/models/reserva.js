module.exports = (sequelize, DataTypes) => {
    const Reserva = sequelize.define('Reserva', {
        idReserva: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        // Otros campos de la tabla
        campo1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        campo2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        tableName: 'Reserva',
        timestamps: false,
    });

    return Reserva;
};
