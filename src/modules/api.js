const getShows = () => fetch('https://api.tvmaze.com/shows').then((res) => 
res.json());

const getShowDetails = async (id) => {
    const baseUrl = 'https://api.tvmaze.com/lookup/shows?thetvdb=';
    const detailUrl = `${baseUrl + id}`;
    const response = await fetch(detailUrl).then(response => response.json());
    console.log(response);
    return response;
} 

export { getShows, getShowDetails };