(() => {
  const menus = Array.from(document.querySelectorAll('.menu'));

  const getSubmenu = item => Array.from(item.children).find(
    element => element.classList && element.classList.contains('menu_sub')
  );

  const closeOtherSubmenus = currentSubmenu => {
    document.querySelectorAll('.menu_sub.menu_active').forEach(submenu => {
      if (submenu !== currentSubmenu) {
        submenu.classList.remove('menu_active');
      }
    });
  };

  menus.forEach(menu => {
    menu.querySelectorAll('.menu__link').forEach(link => {
      link.addEventListener('click', event => {
        const item = link.closest('.menu__item');
        if (!item) {
          return;
        }

        const submenu = getSubmenu(item);
        if (!submenu) {
          return;
        }

        event.preventDefault();
        const isOpen = submenu.classList.contains('menu_active');
        closeOtherSubmenus(submenu);
        submenu.classList.toggle('menu_active', !isOpen);
      });
    });
  });
})();
