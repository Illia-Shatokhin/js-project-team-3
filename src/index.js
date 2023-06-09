import { themeSwitcher } from './js/header';
themeSwitcher();
import './js/services/get-default-data';
import { createHero } from './js/hero.js';
createHero('hero/catalog');

import '/js/header.js';
import weeklyTrends from '/js/models/weeklyTrends.js';

// import { getMovie } from '/js/modalWindow.js';

import '/js/upcoming-films.js';
import { toHeaderUp } from './js/button-to-header';
import '/js/footer-modal.js';
weeklyTrends();
toHeaderUp();
