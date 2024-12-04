class Reservas {
    constructor() {
        this.tabs = document.querySelectorAll('.tab');
        this.tabContents = document.querySelectorAll('.tab-content');
        this.availableSeats = document.getElementById('availableSeats');
        this.selectedSeats = document.getElementById('selectedSeats');
        this.addSeatButton = document.getElementById('addSeat');
        this.removeSeatButton = document.getElementById('removeSeat');
        this.nextButton = document.getElementById('nextButton');
        this.fechaInput = document.getElementById('fechaInput');
        this.tipoReservaSelect = document.getElementById('tipoReserva');

        // Inicializar eventos
        this.init();
    }

    // Método para inicializar eventos
    init() {
        this.setupTabs();
        this.setupSeatMovement();
        this.setupNextButton();
    }

    // Configuración de las pestañas
    setupTabs() {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.getAttribute('data-tab');

                // Actualizar clases de pestañas
                this.tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                // Mostrar/ocultar contenido de las pestañas
                this.tabContents.forEach(content => {
                    if (content.id === target) {
                        content.classList.remove('hidden');
                    } else {
                        content.classList.add('hidden');
                    }
                });
            });
        });
    }

    // Configuración para mover asientos
    setupSeatMovement() {
        this.addSeatButton.addEventListener('click', () => {
            Array.from(this.availableSeats.selectedOptions).forEach(option => {
                this.selectedSeats.appendChild(option);
            });
        });

        this.removeSeatButton.addEventListener('click', () => {
            Array.from(this.selectedSeats.selectedOptions).forEach(option => {
                this.availableSeats.appendChild(option);
            });
        });
    }

    // Configuración del botón Next en la pestaña Fecha
    setupNextButton() {
        this.nextButton.addEventListener('click', () => {
            const fecha = this.fechaInput.value;
            const tipoReserva = this.tipoReservaSelect.value;

            // Validar que se hayan seleccionado ambos valores
            if (!fecha) {
                alert('Por favor seleccione una fecha.');
                return;
            }

            if (!tipoReserva) {
                alert('Por favor seleccione un tipo de reserva.');
                return;
            }

            // Simular cambio a la siguiente pestaña
            alert(`Fecha: ${fecha}\nTipo de Reserva: ${tipoReserva}`);
        });
    }
}

// Inicializar la clase cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    const reservas = new Reservas();
});
