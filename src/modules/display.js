import getShows from './api.js';

const movieContainer = document.querySelector('.movie-list');

// displayshows function
const displayShows = () => {
  getShows().then((data) => {
    const shows = data.map((show) => `
          <div class="movie-card">
              <img src="${show.image.medium}" alt="${show.name}">
              <h3 class="movie-title">${show.name}</h3>
              <div class="interactions">
                  <button class="comments">comment</button>
                  <i class="like fa-regular fa-heart"></i>
              </div>
          </div>
          `).join('');

    movieContainer.innerHTML = shows;
  });
};

export default displayShows;