const API_KEY = '523035a60f448d64fb44e36fddc972c8';

const request = {
    fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchNetflix: `/discover/tv/?api_key=${API_KEY}&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default request;