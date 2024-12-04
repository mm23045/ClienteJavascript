const { Sequelize } = require('sequelize');

// Configuración de la base de datos
const sequelize = new Sequelize('cine_prn335', 'postgres', 'abc123', {
    host: 'localhost',
    dialect: 'postgres',
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importar modelos
db.Reserva = require('./reserva')(sequelize, Sequelize);
db.PeliculaCaracteristica = require('./peliculaCaracteristica')(sequelize, Sequelize);

// Relación entre tablas
db.Reserva.hasMany(db.PeliculaCaracteristica, { foreignKey: 'idReserva' });

module.exports = db;
