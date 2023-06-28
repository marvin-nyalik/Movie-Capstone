import { getLikes } from './api.js';

// display likes on load function
const displayLikes = (element) => {
  getLikes('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YtlVdwaqHwlRoGH1YCI2/likes')
    .then((response) => response.json())
    .then((res) => {
      const likes = document.querySelectorAll(element);
      likes.forEach((like, index) => {
        like.textContent = res[index].likes;
      });
    })
    .catch((err) => err);
};

export default displayLikes;