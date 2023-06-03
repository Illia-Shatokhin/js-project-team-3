import '/js/hero.js';
import '/js/models/data-for-library.js';

import createCatalogMovieCard from './js/catalogMovieCard';
import {
  getGenreMovieList,
  getTrendingAllWeek,
} from './js/API/get-from-server';

const catalogList = document.querySelector('.catalog-list');
const weeklyTrendsData = await getTrendingAllWeek();
createCatalogMovieCard(weeklyTrendsData, catalogList);
