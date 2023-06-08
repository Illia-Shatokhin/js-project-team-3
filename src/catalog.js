import './js/services/get-default-data';

import '/js/hero.js';
import { onSubmit } from './js/catalogSearch.js';
import { createHero } from './js/hero.js';
import '/js/catalogSearch.js';
import '/js/header.js';
import { weeklyTrendsList } from './js/catalogMovieCard';
import { toHeaderUp } from './js/button-to-header';
createHero('hero/catalog');
weeklyTrendsList();
toHeaderUp();
