import '/js/hero.js';
import '/js/catalogSearch.js';
import '/js/header.js';
import createCatalogMovieCard from './js/catalogMovieCard';
import {
  getGenreMovieList,
  getTrendingAllWeek,
} from './js/API/get-from-server';

const catalogList = document.querySelector('.catalog-list');
// const weeklyTrendsData = await getTrendingAllWeek();
createCatalogMovieCard(getTrendingAllWeek, catalogList);
