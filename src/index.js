import './styles/main.css';
import displayShows from './modules/display.js';
// eslint-disable-next-line
import filterShows from './modules/genre.js';

const mobileMenu = document.querySelector('.mobile-menu');
const menuToggle = document.querySelector('.menu-toggle');

window.addEventListener('DOMContentLoaded', () => {
  displayShows();
});

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

filterShows();

export { mobileMenu, menuToggle };