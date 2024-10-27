document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Aquí podrías enviar los datos a un servidor o procesarlos como desees
    const responseMessage = `Gracias, ${name}! Hemos recibido tu mensaje.`;
    document.getElementById("responseMessage").textContent = responseMessage;

    // Limpiar el formulario
    this.reset();
});

function toggleMenu() {
    const menuItems = document.querySelector('.R'); // Cambié a 'R'
    if (menuItems.style.display === 'block') {
        menuItems.style.display = 'none'; // Oculta el menú
    } else {
        menuItems.style.display = 'block'; // Muestra el menú
    }
}
