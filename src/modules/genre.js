import { getShows } from './api.js';
import displayShows from './display.js';
import displayLikes from './getlikes.js';
import handleLikeButtonClick from './likes.js';
// eslint-disable-next-line
import { mobileMenu, menuToggle } from '../index.js';

const movieList = document.querySelector('.movie-list');
const filterBtn = document.querySelectorAll('.btn');
const allMovies = document.querySelector('#all');
const allMoviesMobile = document.querySelector('#all-mobile');

const filterShows = () => {
  filterBtn.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      const { genre } = e.currentTarget.dataset;
      const shows = await getShows();
      const filteredShows = shows.filter((show) => show.genres.includes(genre));
      filteredShows.splice(50);
      const movies = filteredShows.map((show) => `<div class="movie-card">
      <img src="${show.image.medium}" alt="${show.name}">
      <h3 class="movie-title">${show.name}</h3>
      <div class="interactions">
        <button class="comments">comment</button>
        <div>
          <i class="like fa-regular fa-heart" data-show-id="${show.name}"></i>
          <span class="likes" data-shows-id="${show.name}"></span>
        </div>
      </div>
    </div>`).join('');
      movieList.innerHTML = movies;
      const likeBtns = document.querySelectorAll('.like');
      const likes = document.querySelectorAll('.likes');

      likeBtns.forEach((btn, index) => {
        handleLikeButtonClick(btn, index, likes);
      });
      displayLikes('.likes');
    });
  });
};

const filterMovies = () => {
  filterShows();
  allMovies.addEventListener('click', () => {
    displayShows();
    displayLikes('.likes');
  });
  allMoviesMobile.addEventListener('click', () => {
    displayShows();
    displayLikes('.likes');
    mobileMenu.classList.remove('active');
    menuToggle.classList.remove('active');
  });
};

if (window.innerWidth < 768) {
  filterBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
}

export default filterMovies;