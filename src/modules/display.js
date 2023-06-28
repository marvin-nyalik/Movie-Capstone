import { getShows } from './api.js';
import handleLikeButtonClick from './likes.js';
import displayLikes from './getlikes.js';

const movieContainer = document.querySelector('.movie-list');

// displayshows function
const displayShows = () => {
  getShows().then((data) => {
    data.splice(50);
    const shows = data.map((show) => `
      <div class="movie-card">
        <img src="${show.image.medium}" alt="${show.name}">
        <h3 class="movie-title">${show.name}</h3>
        <div class="interactions">
          <button class="comments">comment</button>
          <div>
            <i class="like fa-regular fa-heart" data-show-id="${show.name}"></i>
            <span class="likes" data-shows-id="${show.name}"></span>
          </div>
        </div>
      </div>
    `).join('');

    movieContainer.innerHTML = shows;
    const likeBtns = document.querySelectorAll('.like');
    const likes = document.querySelectorAll('.likes');

    likeBtns.forEach((btn, index) => {
      handleLikeButtonClick(btn, index, likes);
    });

    window.addEventListener('load', () => {
      displayLikes('.likes');
    });
  }).catch((err) => {
    movieContainer.innerHTML = `<h3 class="error">An error occurred: ${err}</h3>`;
  });
};

export default displayShows;