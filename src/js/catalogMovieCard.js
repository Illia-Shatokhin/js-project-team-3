import { errorCatalogMarkup, renderError } from './errortrailer';
import {
  movieCardMarkup,
  movieCardMarkupLocalStorage,
} from './markups/movieCardMaurkup';
import { getMovie } from './modalWindow';
import { refs } from './models/refs';
import CreatePagination from './services/pagination';


function getReleaseYear(film) {
  let releaseYear = 'No date';
  const { release_date } = film;
  if (release_date) releaseYear = release_date.split('-')[0];
  return releaseYear;
}

export default async function createMovieCard(func, elem, count, arg) {
  try {
    let data;

    //для запиту на allDay & allWeek
    if (!arg) {
      data = await func();
      // let releaseYear = 'No date';
      for (let index = 0; index < count; index++) {
        // releaseYear = data.results[index].release_date.split('-')[0];
        const releaseYear = getReleaseYear(data.results[index]);
        const markup = movieCardMarkup(data.results[index], releaseYear);
        elem.insertAdjacentHTML('beforeend', markup);
      }

      // TODO:  fix pagination functionality
      const watchedPagination = new CreatePagination(data);
      watchedPagination.activatePagination();

      //для запиту на getMovieDetails
    } else if (!isNaN(arg)) {
      data = await func(arg);
      for (let index = 0; index < count; index++) {
        // releaseYear = data.results[index].release_date.split('-')[0];
        const releaseYear = getReleaseYear(data.results[index]);
        const markup = movieCardMarkupLocalStorage(data, releaseYear);
        elem.insertAdjacentHTML('beforeend', markup);
      }

      // TODO:  fix pagination functionality
      const watchedPagination = new CreatePagination(data);
      watchedPagination.activatePagination();

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
        // releaseYear = data.results[index].release_date.split('-')[0];
        const releaseYear = getReleaseYear(data.results[index]);
        const markup = movieCardMarkup(data.results[index], releaseYear);
        elem.insertAdjacentHTML('beforeend', markup);
      }

      // TODO:  fix pagination functionality
      const watchedPagination = new CreatePagination(data);
      watchedPagination.activatePagination();

    }
  } catch (error) {
    console.log(error);
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
