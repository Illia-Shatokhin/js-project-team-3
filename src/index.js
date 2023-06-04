// import { createHero } from './js/hero.js';

// createHero();

import '/js/hero.js';
import '/js/models/weeklyTrends.js';
import '/js/modalWindow.js';
import { getMovie } from '/js/modalWindow.js';
// document.querySelector('body').addEventListener('click', ()=>{
//     getMovie( 605575);
// })
import '/js/upcoming-films.js';
function renderStars(rating) {
  const integer = Math.round(rating);
  const even = integer % 2 === 0 ? integer : integer - 1;
  const diff = Math.round(10 - rating);
  console.log(diff);
}
renderStars(7.4);
