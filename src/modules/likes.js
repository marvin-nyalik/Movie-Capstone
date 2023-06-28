import { postLike, getLikes } from './api.js';

function handleLikeButtonClick(btn, index, likes) {
  btn.addEventListener('click', () => {
    const showId = btn.getAttribute('data-show-id');

    postLike(showId, 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YtlVdwaqHwlRoGH1YCI2/likes/')
      .then(() => getLikes('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YtlVdwaqHwlRoGH1YCI2/likes'))
      .then((response) => response.json())
      .then((res) => {
        likes[index].textContent = res.find((item) => item.item_id === showId).likes;
      })
      .catch((err) => err);
  });
}

export default handleLikeButtonClick;