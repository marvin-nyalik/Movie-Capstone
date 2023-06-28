import { getShows } from './api.js';
import displayShows from './display.js';
// eslint-disable-next-line
import { mobileMenu, menuToggle } from '../index.js';

const allBtn = document.querySelector('#all');
const dramaBtn = document.querySelector('#drama');
const comedyBtn = document.querySelector('#comedy');
const actionBtn = document.querySelector('#action');
const romanceBtn = document.querySelector('#romance');
const movieList = document.querySelector('.movie-list');

// mobile menu links
const allBtnMobile = document.querySelector('#all-mobile');
const dramaBtnMobile = document.querySelector('#drama-mobile');
const comedyBtnMobile = document.querySelector('#comedy-mobile');
const actionBtnMobile = document.querySelector('#action-mobile');
const romanceBtnMobile = document.querySelector('#romance-mobile');

// function display movies based on action genre
const displayAction = () => {
  getShows().then((data) => {
    const shows = data.filter((show) => show.genres.includes('Action')).map((show) => `
                  <div class="movie-card">
        <img src="${show.image.medium}" alt="${show.name}">
        <h3 class="movie-title">${show.name}</h3>
        <div class="interactions">
          <button class="comments">comment</button>
          <div>
            <i class="like fa-regular fa-heart" data-show-id="${show.id}"></i>
            <span class="likes"></span>
          </div>
        </div>
      </div>
                  `).join('');
    movieList.innerHTML = shows;
  });
};

// function display movies based on drama genre
const displayDrama = () => {
  getShows().then((data) => {
    const shows = data.filter((show) => show.genres.includes('Drama')).map((show) => `
                  <div class="movie-card">
        <img src="${show.image.medium}" alt="${show.name}">
        <h3 class="movie-title">${show.name}</h3>
        <div class="interactions">
          <button class="comments">comment</button>
          <div>
            <i class="like fa-regular fa-heart" data-show-id="${show.id}"></i>
            <span class="likes"></span>
          </div>
        </div>
      </div>
                  `).join('');
    movieList.innerHTML = shows;
  });
};

// function display movies based on comedy genre
const displayComedy = () => {
  getShows().then((data) => {
    const shows = data.filter((show) => show.genres.includes('Comedy')).map((show) => `
                  <div class="movie-card">
        <img src="${show.image.medium}" alt="${show.name}">
        <h3 class="movie-title">${show.name}</h3>
        <div class="interactions">
          <button class="comments">comment</button>
          <div>
            <i class="like fa-regular fa-heart" data-show-id="${show.id}"></i>
            <span class="likes"></span>
          </div>
        </div>
      </div>
                  `).join('');
    movieList.innerHTML = shows;
  });
};

// function display movies based on romance genre
const displayRomance = () => {
  getShows().then((data) => {
    const shows = data.filter((show) => show.genres.includes('Romance')).map((show) => `
                      <div class="movie-card">
                          <img src="${show.image.medium}" alt="${show.name}">
                          <h3 class="movie-title">${show.name}</h3>
                          <div class="interactions">
                              <button class="comments">comment</button>
                              <i class="like fa-regular fa-heart"></i>
                          </div>
                      </div>
                      `).join('');
    movieList.innerHTML = shows;
  });
};

// function display all movies
allBtn.addEventListener('click', () => {
  displayShows();
});

dramaBtn.addEventListener('click', () => {
  displayDrama();
});

comedyBtn.addEventListener('click', () => {
  displayComedy();
});

romanceBtn.addEventListener('click', () => {
  displayRomance();
});

// function add eventlistener to actionBtn
actionBtn.addEventListener('click', () => {
  displayAction();
});

// function add eventlistener to mobile menu links
// function display all movies
allBtnMobile.addEventListener('click', () => {
  displayShows();
  mobileMenu.classList.remove('active');
  menuToggle.classList.remove('active');
});

dramaBtnMobile.addEventListener('click', () => {
  displayDrama();
  mobileMenu.classList.remove('active');
  menuToggle.classList.remove('active');
});

comedyBtnMobile.addEventListener('click', () => {
  displayComedy();
  mobileMenu.classList.remove('active');
  menuToggle.classList.remove('active');
});

romanceBtnMobile.addEventListener('click', () => {
  displayRomance();
  mobileMenu.classList.remove('active');
  menuToggle.classList.remove('active');
});

// function add eventlistener to actionBtn
actionBtnMobile.addEventListener('click', () => {
  displayAction();
  mobileMenu.classList.remove('active');
  menuToggle.classList.remove('active');
});

const filterShows = () => {
  displayShows();
  displayAction();
  displayDrama();
  displayComedy();
  displayRomance();
};

export default filterShows;