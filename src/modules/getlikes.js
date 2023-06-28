import { getLikes, apiKey } from './api.js';

const displayLikes = (element) => {
  getLikes(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/likes/`)
    .then((response) => response.json())
    .then((res) => {
      const likes = document.querySelectorAll(element);
      likes.forEach((like) => {
        const showId = like.getAttribute('data-shows-id');
        const showLikes = res.find((item) => item.item_id === showId);
        like.textContent = showLikes ? showLikes.likes : '0';
      });
    })
    .catch((err) => err);
};

export default displayLikes;