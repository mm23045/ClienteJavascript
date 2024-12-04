const { Sequelize } = require('sequelize');

// Configuración de la base de datos
const sequelize = new Sequelize('cine_prn335', 'postgres', 'abc123', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false, // Deshabilita logs para mantener limpio el output
});

// Crear objeto `db`
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importar modelos
db.Reserva = require('./src/models/reserva')(sequelize, Sequelize);
db.PeliculaCaracteristica = require('./src/models/peliculaCaracteristica')(sequelize, Sequelize);

// Relación entre tablas
db.Reserva.hasMany(db.PeliculaCaracteristica, { foreignKey: 'idReserva' });
db.PeliculaCaracteristica.belongsTo(db.Reserva, { foreignKey: 'idReserva' }); // Relación inversa

// Sincronizar modelos con la base de datos
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión exitosa a PostgreSQL');
        await sequelize.sync({ alter: true }); // Actualiza tablas según modelos
        console.log('Modelos sincronizados');
    } catch (err) {
        console.error('Error al conectar o sincronizar:', err);
    }
})();

module.exports = db;
