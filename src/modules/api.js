const getShows = () => fetch('https://api.tvmaze.com/shows').then((res) => res.json());

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

export { getShows, postLike, getLikes };