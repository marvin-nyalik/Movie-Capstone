const getShows = () => fetch('https://api.tvmaze.com/shows').then((res) => res.json());


const getShowDetails = async (id) => {
  const baseUrl = 'https://api.tvmaze.com/lookup/shows?thetvdb=';
  const detailUrl = `${baseUrl + id}`;
  const response = await fetch(detailUrl).then((response) => response.json());
  console.log(response);
  return response;
};

const apiKey = 'r2HqEF2mwpkxdwytyGER';

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
  getShows, postLike, getLikes, apiKey, getShowDetails 
};

