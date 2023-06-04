import { errorCatalogMarkup, renderError } from './errortrailer';
import {
  movieCardMarkup,
  movieCardMarkupLocalStorage,
} from './markups/movieCardMaurkup';
import { getMovie } from './modalWindow';
import { refs } from './models/refs';

export default async function createMovieCard(func, elem, count, arg) {
  try {
    let data;
    //для запиту на allDay & allWeek
    if (!arg) {
      data = await func();
      for (let index = 0; index < count; index++) {
        const markup = movieCardMarkup(data.results[index], 2014);
        elem.insertAdjacentHTML('beforeend', markup);
      }
      //для запиту на getMovieDetails
    } else if (!isNaN(arg)) {
      data = await func(arg);
      console.log(data);
      for (let index = 0; index < count; index++) {
        const markup = movieCardMarkupLocalStorage(data, 2014);
        elem.insertAdjacentHTML('beforeend', markup);
      }
      //для запиту на getSearchMovie
    } else {
      const obj = {
        query: arg,
        include_adult: false,
        primary_release_year,
        page: 1,
        region,
        year,
      };
      data = await func(obj);
      for (let index = 0; index < count; index++) {
        const markup = movieCardMarkup(data.results[index], 2014);
        elem.insertAdjacentHTML('beforeend', markup);
      }
    }
    let releaseYear = 'No date';
    console.log(data.results);
  } catch (error) {
    renderError(refs.catalogList, errorCatalogMarkup);
  }
}

// export default async function createCatalogMovieCard(func, catalogList, arg) {
//   try {
//     let data;
//     if (!arg) {
//       data = await func();
//     } else if (!isNaN(arg)) {
//       data = await func(arg);
//     } else {
//       const obj = {
//         query: arg,
//         include_adult: false,
//         primary_release_year,
//         page: 1,
//         region,
//         year,
//       };
//       data = await func(obj);
//     }

//     let releaseYear = 'No date';

// if (screen.width <= 767) {
//   data.results = data.results.slice(0, 10);
// }

//     // const cardMarkup = data.results
//     //   .map(card => {
//     //     if (!!card.release_date) {
//     //       releaseYear = card.release_date.split('-')[0];
//     //     }
//     //     return movieCardMarkup(card, releaseYear);
//     //   })
//     //   .join('');

//     const cardMarkup = data.results.reduce((markup, card) => {
//       if (!!card.release_date) {
//         releaseYear = card.release_date.split('-')[0];
//       }
//       const movieCard = movieCardMarkup(card, releaseYear);
//       return markup + movieCard;
//     }, '');

//     if (data.page === 1) catalogList.innerHTML = cardMarkup;
//     else catalogList.insertAdjacentHTML('beforeend', cardMarkup);

//     const movieCards = document.querySelectorAll('.catalog-item');
//     movieCards.forEach(card => {
//       card.addEventListener('click', getMovie);
//     });
//   } catch (error) {
//     renderError(refs.catalogList, errorCatalogMarkup);
//   }
// }

// // function getMovie() {
// //   console.log('Modal window');
// // }
