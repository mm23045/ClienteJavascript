const { Client } = require('pg');

// Configuración de la conexión
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'cine_prn335',
    password: 'abc123',
    port: 5432, // Puerto por defecto de PostgreSQL
});

// Conectar a la base de datos
client.connect()
    .then(() => console.log('Conexión exitosa a PostgreSQL'))
    .catch(err => console.error('Error al conectar a PostgreSQL:', err))
    .finally(() => client.end());

