module.exports = (sequelize, DataTypes) => {
    const PeliculaCaracteristica = sequelize.define('PeliculaCaracteristica', {
        idCaracteristica: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        idPelicula: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        tableName: 'PeliculaCaracteristica',
        timestamps: false,
    });

    return PeliculaCaracteristica;
};
