import { THE_MOVIE_DB_KEY } from '@env';
import { AxiosAdapter } from './http/axios.adapter';


export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    // api_key: '20dd0a44fba97e07309e45362931b5b3',
    api_key: THE_MOVIE_DB_KEY ?? 'no-key',
    language: 'es'
  }
});