document.addEventListener('DOMContentLoaded', () => {
    const leerMasBtn = document.getElementById('leerMasBtn');

    leerMasBtn.addEventListener('click', () => {
        window.location.href = '#institucional';
    });

    // Manejo del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Aquí podrías agregar código para enviar el formulario usando Fetch API o XMLHttpRequest
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        
        contactForm.reset(); // Reinicia el formulario después de enviar
    });
});

document.querySelector('.hamburger-menu').addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle('active');
});