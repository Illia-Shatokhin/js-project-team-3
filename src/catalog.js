import '/js/hero.js';
import '/js/catalogSearch.js';
import createMovieCard from './js/catalogMovieCard';
import {
  getMovieDetails,
  getGenreMovieList,
  getTrendingAllWeek,
} from './js/API/get-from-server';
import { refs } from './js/models/refs';
import { getMovie } from './js/modalWindow';

screen.width <= 767
  ? createMovieCard(getTrendingAllWeek, refs.catalogList, 10)
  : createMovieCard(getTrendingAllWeek, refs.catalogList, 20);

refs.catalogList.addEventListener('click', async event => {
  const clickedElement = event.target;
  if (clickedElement.tagName === 'LI') {
    const movieId = clickedElement.id;
    await getMovie(movieId);
  }
});
