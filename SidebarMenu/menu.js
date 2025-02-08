function toggleMenu() {
    const menu = document.getElementById('menu');
    const content = document.getElementById('content');
    menu.classList.toggle('open');
    content.classList.toggle('blur');
    // Close all submenus when the menu is closed
    const submenus = document.querySelectorAll('.submenu');
    submenus.forEach(submenu => submenu.classList.remove('open'));
    // Reset all dropdown icons
    const dropdownIcons = document.querySelectorAll('.menuItemDropdownIcon');
    dropdownIcons.forEach(icon => icon.classList.remove('rotate'));
}

function toggleSubmenu(submenuId, iconId) {
    const submenu = document.getElementById(submenuId);
    const icon = document.getElementById(iconId);
    submenu.classList.toggle('open');
    icon.classList.toggle('rotate');
}

document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const menuButton = document.getElementById('menuButton');
    const isClickInsideMenu = menu.contains(event.target);
    const isClickInsideButton = menuButton.contains(event.target);

    if (!isClickInsideMenu && !isClickInsideButton && menu.classList.contains('open')) {
        menu.classList.remove('open');

        content.classList.toggle('blur');
        
        // Close all submenus when the menu is closed
        const submenus = document.querySelectorAll('.submenu');
        submenus.forEach(submenu => submenu.classList.remove('open'));

        // Reset all dropdown icons
        const dropdownIcons = document.querySelectorAll('.menuItemDropdownIcon');
        dropdownIcons.forEach(icon => icon.classList.remove('rotate'));
    }
});
