const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const reservaRoutes = require('./routes/reservaRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Rutas
app.use('/api/reserva', reservaRoutes);

// Sincronizar modelos y ejecutar servidor
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
});
