import { getTrendingAllWeek } from '../API/get-from-server';
import { refs } from './refs';

import createMovieCard from '../catalogMovieCard';

import { openFilmDetails } from '../catalogMovieCard';

export default async function weeklyTrends() {
  try {
    const data = await getTrendingAllWeek();

    screen.width <= 767
      ? createMovieCard(data.results, refs.weeklyLinks, 1)
      : createMovieCard(data.results, refs.weeklyLinks, 3);
    refs.weeklyLinks.addEventListener('click', openFilmDetails);
  } catch (error) {
    console.error(error);
  }
}


// Ratings
const filmCard = document.querySelector('.film-card');

function renderStars(rating, width, height) {
  const integer = Math.round(rating);
  const evenFullStars = integer % 2 === 0 ? integer / 2 : (integer - 1) / 2;
  const diff = Math.round(10 - rating);
  const evenEmptyStars = diff % 2 === 0 ? diff / 2 : (diff - 1) / 2;
  const halfStar = diff % 2 === 0 ? false : true;

  for (let index = 0; index < evenFullStars; index++) {
    filmCard.insertAdjacentHTML(
      'beforeend',
      starsMarkup('icon-star-outline', width, height)
    );
  }
  halfStar
    ? filmCard.insertAdjacentHTML(
        'beforeend',
        starsMarkup('close', width, height)
      )
    : 0;

  for (let index = 0; index < evenEmptyStars; index++) {
    filmCard.insertAdjacentHTML(
      'beforeend',
      starsMarkup('search', width, height)
    );
  }
}

renderStars(7.51, 40, 40);

function starsMarkup(whichStar, width, height) {
  return `<svg class="icon-star" width="${width}" height="${height}">
      <use href="./img/symbols.svg#${whichStar}"></use>
  </svg>`;
}

// const ratings = document.querySelectorAll('.rating');
// console.log(ratings);
// if (ratings.length > 0) {
//   initRatings();
// }

// // Main function
// function initRatings() {
//   let ratingActive, ratingValue;

//   // Бігаємо по всіх рейтингах на сторінці
//   for (let index = 0; index < ratings.length; index++) {
//     const rating = ratings[index];
//     initRating(rating);
//   }

//   // Ініціалізація конкретного рейтинга
//   function initRating(rating) {
//     initRatingVars(rating);

//     setRatingActiveWidth();

//     if (rating.classList.contains('rating_set')) {
//       setRating(rating);
//     }
//   }

//   // Ініціалізація змінних
//   function initRatingVars(rating) {
//     ratingActive = rating.querySelector('.rating_active');
//     ratingValue = rating.querySelector('.rating_value');
//   }

//   // Змінюємо ширину активних зірок

//   function setRatingActiveWidth() {
//     const ratingActiveWidth = (parseFloat(ratingValue.innerHTML) / 10) * 100;
//     ratingActive.style.width = `${ratingActiveWidth}%`;
//   }

//   // Можливість оцінювати

//   function setRating(rating) {
//     const ratingItems = rating.querySelectorAll('.rating_item');
//     for (let index = 0; index < ratingItems.length; index++) {
//       const ratingItem = ratingItems[index];
//       ratingItem.addEventListener('mouseenter', function (e) {
//         // Оновлення змінних
//         initRatingVars(rating);
//         // Оновлення активних зірок
//         setRatingActiveWidth();
//       });
//       ratingItem.addEventListener('mouseleave', function (e) {
//         // Оновлення активних зірок
//         setRatingActiveWidth();
//       });
//       ratingItem.addEventListener('click', function (e) {
//         // Оновлення змінних
//         initRatingVars(rating);

//         if (rating.dataset.ajax) {
//           // Відправка на сервер
//           setRatingValue(ratingItem.value, rating);
//         } else {
//           // Відображення вказаної оцінки
//           ratingindex = ratingValue.innerHTMLValue.innerHTML = index + 1;
//           setRatingActiveWidth();
//         }
//       });
//     }
//   }
// }

// function generateRatingMarkup() {
//   const ratingContainer = document.createElement('div');
//   ratingContainer.classList.add('simple-rating');

//   const ratingItemsContainer = document.createElement('div');
//   ratingItemsContainer.classList.add('simple-rating_items');

//   const ratings = [1, 2, 3, 4, 5];

//   ratings.forEach((rating) => {
//     const input = document.createElement('input');
//     input.id = `simple-rating_${rating}`;
//     input.type = 'radio';
//     input.classList.add('simple-rating_item');
//     input.name = 'simple-rating';
//     input.value = rating;

//     const label = document.createElement('label');
//     label.setAttribute('for', `simple-rating_${rating}`);
//     label.classList.add('simple-rating_label');

//     ratingItemsContainer.appendChild(input);
//     ratingItemsContainer.appendChild(label);
//   });

//   ratingContainer.appendChild(ratingItemsContainer);

//   return ratingContainer.outerHTML;
// }
