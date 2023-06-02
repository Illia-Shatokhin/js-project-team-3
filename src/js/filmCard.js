import axios from 'axios';
import { CONSTS } from './consts';

const genres = getGenres();
console.log(genres);
const baerer =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGE4NzU4ZWI0MGUyMjEwMTM3MDlkNjMwNzlmZDljNCIsInN1YiI6IjY0NzlhODg5ZTMyM2YzMDBhN2Q0ZGYzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X0uZkuPOvO6LdN-fYieV72t0jFMKCqqFgnPHTxpIpdg';

async function getMoviesFromSearch(value) {
  // https://api.themoviedb.org/3/search/movie?query=value&include_adult=false&language=en-US&page=1
  const query = `${CONSTS.URL}serch/movie/search?query=${value}&include_adult=false&language=en-US&page=1`;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzgzN2Q4ZThiOWY1YjkyODFlNGYzODM2ZjQwZmMzMiIsInN1YiI6IjY0NzhmMTllMGUyOWEyMDBkY2I5YmFkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gm8FRVhZa5JYfHHhkK7gHuf4DwF_mvLWBXC6uzMdhLk',
    },
  };

  fetch(
    `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=1`,
    options
  )
    .then(response => response.json())
    .then(response => response.results[0])
    .catch(err => console.error(err));
}

getMoviesFromSearch('ghosted');

console.log('hello world');

function getGenres() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGE4NzU4ZWI0MGUyMjEwMTM3MDlkNjMwNzlmZDljNCIsInN1YiI6IjY0NzlhODg5ZTMyM2YzMDBhN2Q0ZGYzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X0uZkuPOvO6LdN-fYieV72t0jFMKCqqFgnPHTxpIpdg',
    },
  };

  fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}
