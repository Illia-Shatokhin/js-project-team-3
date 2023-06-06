import { createHero } from './js/hero.js';
createHero('hero/catalog');

import '/js/catalogSearch.js';
import { onSubmit } from './js/catalogSearch.js';
import '/js/header.js';
import createCatalogMovieCard, {
  openFilmDetails,
  week,
} from './js/catalogMovieCard';

import { refs } from './js/models/refs';

week();
refs.catalogList.addEventListener('click', openFilmDetails);
