import '/js/hero.js';
<<<<<<< HEAD:src/main.js
import '/js/models/data-for-library.js';

=======
>>>>>>> 99800c074ff732140af65742f40291a7ed87c08c:src/catalog.js
import createCatalogMovieCard from './js/catalogMovieCard';
import {
  getGenreMovieList,
  getTrendingAllWeek,
} from './js/API/get-from-server';

const catalogList = document.querySelector('.catalog-list');
// const weeklyTrendsData = await getTrendingAllWeek();
createCatalogMovieCard(getTrendingAllWeek, catalogList);
