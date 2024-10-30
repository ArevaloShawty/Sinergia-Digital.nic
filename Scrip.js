function toggleMenu() {
    const menuItems = document.querySelector('.R'); // Cambié a 'R'
    if (menuItems.style.display === 'block') {
        menuItems.style.display = 'none'; // Oculta el menú
    } else {
        menuItems.style.display = 'block'; // Muestra el menú
    }
}
