import './js/services/get-default-data';

import { createHero } from './js/hero.js';
createHero();

import '/js/header.js';
import weeklyTrends from '/js/models/weeklyTrends.js';

// import { getMovie } from '/js/modalWindow.js';

import '/js/upcoming-films.js';

weeklyTrends();
