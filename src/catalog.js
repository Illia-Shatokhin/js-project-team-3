import '/js/hero.js';
import '/js/catalogSearch.js';
import '/js/header.js';
import createCatalogMovieCard, {
  openFilmDetails,
  week,
} from './js/catalogMovieCard';

import { refs } from './js/models/refs';

week();
refs.catalogList.addEventListener('click', openFilmDetails);
