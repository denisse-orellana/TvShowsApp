const BASE_URL = "https://api.themoviedb.org/3/";
// const API_KEY_PARAM = "?api_key=ac10aeff4ac5680827739539df3f2d81";
const API_KEY_PARAM = import.meta.env.TMDB_API_KEY;
// const API_KEY_PARAM = `?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original";
const SMALL_IMG_COVER_BASE_URL = "https://image.tmdb.org/t/p/w300"

export { BASE_URL, API_KEY_PARAM, BACKDROP_BASE_URL, SMALL_IMG_COVER_BASE_URL };