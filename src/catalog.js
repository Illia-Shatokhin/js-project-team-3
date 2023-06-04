import '/js/hero.js';
import '/js/catalogSearch.js';
import createCatalogMovieCard from './js/catalogMovieCard';
import {
  getGenreMovieList,
  getTrendingAllWeek,
} from './js/API/get-from-server';
import { refs } from './js/models/refs';

createCatalogMovieCard(getTrendingAllWeek, refs.catalogList);
