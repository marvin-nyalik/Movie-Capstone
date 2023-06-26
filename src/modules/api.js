const getShows = () => fetch('https://api.tvmaze.com/shows').then((res) => res.json());

export default getShows;