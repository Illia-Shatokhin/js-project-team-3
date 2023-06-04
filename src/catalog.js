import '/js/hero.js';
import '/js/catalogSearch.js';
import createMovieCard from './js/catalogMovieCard';
import {
  getMovieDetails,
  getGenreMovieList,
  getTrendingAllWeek,
} from './js/API/get-from-server';
import { refs } from './js/models/refs';

// createMovieCard(getMovieDetails, refs.catalogList, 1, 667538);
screen.width <= 767
  ? createMovieCard(getTrendingAllWeek, refs.catalogList, 10)
  : createMovieCard(getTrendingAllWeek, refs.catalogList, 20);
