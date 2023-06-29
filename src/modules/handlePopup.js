import { getShowDetails, getSingleMovieComments, addMovieComment } from './api.js';

const showModal = async (e) => {
  if (e.target.classList.contains('comments')) {
    const btn = e.target;
    const movieCard = btn.closest('.movie-card');
    const id = movieCard.getAttribute('data-id');
    const modal = movieCard.querySelector('.my-modal');
    modal.style.display = 'block';

    document.querySelector('body').style.overflow = 'hidden';

    const details = await getShowDetails(id);
    const {
      name, type, language, summary,
      averageRuntime, image,
    } = details;

    modal.innerHTML = `
        <div class="headline">
                  <h3>IMovies</h3>
                  <h3 class="close">&times;</h3>
              </div>
              <div class="modal-cover">
                  <div class="desk-cont">
                  <div class="img-cover">
                      <img src="${image.original}">
                  </div>
                  <div class="body">
                  <h4> SUMMARY </h4>
                      <p>${summary}</p>
                  </div>
                  </div>
                  <div class="footer">
                    <div class="disp">
                      <p>TITLE: <span> ${name} </span></p>
                      <p>RUNTIME: <span> ${averageRuntime} </span>minutes</p>
                    </div>
                    <div class="disp">
                      <p>LANGUAGE: <span> ${language} </span> </p>
                      <p>TYPE: <span> ${type} </span> </p>
                    </div>
                  </div>
                  <div class="comments">
                      <h4>COMMENTS <span id="comment-count">0</span> </h4>
                      <div class="user-comments">
                      <p>No comment</p>
                      </div>

                  </div>
                  <div class="add-comment">
                      <h4>Add A Comment</h4>
                      <form action="#">
                          <input type="text" name="name" id="name" placeholder="Your name">
                          <textarea type="text" name="comment" id="add-comment" rows = "30"></textarea>
                          <button type="button" data-id=${id} class="add-comment-button" id="add-comment-button">Comment</button>
                      </form>
                  </div>
                </div>
        `;
    modal.addEventListener('click', (e) => addMovieComment(e));
    const modalImage = modal.querySelector('.img-cover img');

    modalImage.addEventListener('load', async () => {
      const commentsContainer = modal.querySelector('.user-comments');
      const commentCount = modal.querySelector('#comment-count');
      await getSingleMovieComments(id, commentsContainer, commentCount);
    });
  }

  if (e.target.classList.contains('close')) {
    const closingBtn = e.target;
    const modal = closingBtn.closest('.my-modal');
    modal.style.display = 'none';
    document.querySelector('body').style.overflow = 'scroll';

    e.stopPropagation();
  }
};

export default showModal;
