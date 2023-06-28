const involvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const apiKey = 'r2HqEF2mwpkxdwytyGER';
const baseAddCommentUrl = `${involvementAPI + apiKey}/comments/`;
const getCommentsBaseUrl = `${involvementAPI + apiKey}/comments?item_id=`;


const getShows = () => fetch('https://api.tvmaze.com/shows').then((res) => res.json());

const getShowDetails = async (id) => {
  const baseUrl = 'https://api.tvmaze.com/lookup/shows?thetvdb=';
  const detailUrl = `${baseUrl + id}`;
  const response = await fetch(detailUrl).then((response) => response.json());
  return response;
};

const addMovieComment = async (e) => {
  if (e.target.classList.contains('add-comment-button')) {
    const form = e.target.closest('form');
    const movieId = e.target.getAttribute('data-id');
    const name = form.querySelector('input').value;
    const comment = form.querySelector('textarea').value;
    const commentContainer = form.closest('.modal-cover')
      .querySelector('.comments')
      .querySelector('.user-comments');
    const commentCount = form.closest('.modal-cover')
      .querySelector('.comments').querySelector('#comment-count');

    const config = {
      method: 'POST',
      body: JSON.stringify(
        {
          item_id: movieId,
          username: name,
          comment,
        },
      ),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (name !== '' && comment !== '' && movieId !== '') {
      await fetch(baseAddCommentUrl, config);
      const commentsUrl = getCommentsBaseUrl + movieId;
      const allComments = await fetch(commentsUrl);
      const allCommentsData = await allComments.json();

      commentContainer.innerHTML = '';
      commentCount.innerHTML = `(${allCommentsData.length})`;
      allCommentsData.forEach((comment) => {
        const commentItem = `
        <div class="comment-item">
        <p>${`${comment.creation_date} : ${comment.username}`}</p>
        <p>${comment.comment}</p>
        </div>
        <br>
        `;
        commentContainer.innerHTML += commentItem;
      });

      form.querySelector('input').value = '';
      form.querySelector('textarea').value = '';
    }
  }
};

const getSingleMovieComments = async (movieId, commentsCont, count) => {
  const commentsUrl = getCommentsBaseUrl + movieId;
  const counter = count;

  try {
    const allComments = await fetch(commentsUrl).then();
    if (allComments.ok) {
      const allCommentsData = await allComments.json();
      counter.innerHTML = `(${allCommentsData.length})`;
      const commentContainer = commentsCont;
      commentContainer.innerHTML = '';
      if (allCommentsData.length > 0) {
        allCommentsData.forEach((comment) => {
          const commentItem = `
                <div class="comment-item">
                <p>${`${comment.creation_date} : ${comment.username}`}</p>
                <p>${comment.comment}</p>
                </div>
                <br>
                `;
          commentContainer.innerHTML += commentItem;
        });
      }
    } else {
      const error = new Error('No comments Yet');
      error.stack = undefined;
      throw error;
    }
  } catch (error) {
    if (error instanceof Error && error.message.includes('400')) {
      const contComm = commentsCont;
      contComm.innerHTML = error.message;
    }
  }

  window.addEventListener('unhandledrejection', (event) => {
    event.preventDefault();
  });
};

const postLike = async (id, url) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response;
};

const getLikes = async (url) => {
  const response = await fetch(url);
  return response;
};

export {
  getShows, postLike, getLikes, apiKey, getShowDetails, addMovieComment, getSingleMovieComments,
};
