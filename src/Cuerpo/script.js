document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    const availableSeats = document.getElementById('availableSeats');
    const selectedSeats = document.getElementById('selectedSeats');
    const addSeatButton = document.getElementById('addSeat');
    const removeSeatButton = document.getElementById('removeSeat');

    // Cambiar entre pestañas
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');

            // Actualizar clases de pestañas
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Mostrar/ocultar contenido de las pestañas
            tabContents.forEach(content => {
                if (content.id === target) {
                    content.classList.remove('hidden');
                } else {
                    content.classList.add('hidden');
                }
            });
        });
    });

    // Mover asientos disponibles a seleccionados
    addSeatButton.addEventListener('click', () => {
        Array.from(availableSeats.selectedOptions).forEach(option => {
            selectedSeats.appendChild(option);
        });
    });

    // Mover asientos seleccionados a disponibles
    removeSeatButton.addEventListener('click', () => {
        Array.from(selectedSeats.selectedOptions).forEach(option => {
            availableSeats.appendChild(option);
        });
    });
});
