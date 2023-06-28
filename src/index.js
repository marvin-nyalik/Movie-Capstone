import './styles/main.css';
import displayShows from './modules/display.js';
// eslint-disable-next-line
import filterMovies from './modules/genre.js';

const mobileMenu = document.querySelector('.mobile-menu');
const menuToggle = document.querySelector('.menu-toggle');

window.addEventListener('DOMContentLoaded', () => {
  displayShows();
  filterMovies();
});

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

export { mobileMenu, menuToggle };