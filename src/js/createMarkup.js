import cardTemplate from '../templates/menu-cards.hbs';
import menuItems from '../menu.json';

const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', cardTemplate(menuItems));
