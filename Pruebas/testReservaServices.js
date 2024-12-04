const reservaService = require('../src/services/reservaServices');

(async () => {
    try {
        // Crear una nueva reserva
        const newReserva = await reservaService.create({
            campo1: 'Valor 1',
            campo2: 'Valor 2',
        });
        console.log('Reserva creada:', newReserva);

        // Buscar una reserva por ID
        const reserva = await reservaService.findById(newReserva.idReserva);
        console.log('Reserva encontrada:', reserva);

        // Contar reservas
        const totalReservas = await reservaService.count();
        console.log('Total de reservas:', totalReservas);

        // Obtener un rango de reservas
        const reservas = await reservaService.findRange(0, 10);
        console.log('Rango de reservas:', reservas);
    } catch (err) {
        console.error('Error durante pruebas:', err);
    }
})();