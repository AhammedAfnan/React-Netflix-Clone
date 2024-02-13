import {API_KEY} from './constants/constants'
export const originals = `discover/tv?api_key=${API_KEY}&with_networks=213`
export const trending = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
export const action = `/discover/movie?api_key=${API_KEY}&with_genres=28`
export const romance = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const horror = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`;

