import { getShows } from './api.js';
import showModal from './handlePopup.js';

const movieContainer = document.querySelector('.movie-list');

// displayshows function
const displayShows = () => {
  getShows().then((data) => {
    data.splice(1, 230);
    const shows = data.map((show, index) => `
          <div class="movie-card" data-id="${data[index].externals.thetvdb}">
              <img src="${show.image.medium}" alt="${show.name}">
              <h3 class="movie-title">${show.name}</h3>
              <div class="interactions">
                  <button class="comments" click="details">comment</button>
                  <i class="like fa-regular fa-heart"></i>
              </div>
            <div class="my-modal">
            </div>
         </div>
          `).join('');

    movieContainer.innerHTML = shows;
    movieContainer.addEventListener('click', (e) => showModal(e));
  });
};

export default displayShows;