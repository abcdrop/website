function toggleMenu(element) {
    element.classList.toggle("opened");
}

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.stopPropagation();  // Prevents submenu from closing when clicked
    });
});
