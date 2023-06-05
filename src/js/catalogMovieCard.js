import { getGenreMovieList, getTrendingAllWeek } from './API/get-from-server';
import { movieCardMarkup } from './markups/movieCardMaurkup';
import CreatePagination from './services/pagination';

export default async function createCatalogMovieCard(func, catalogList) {
  try {
    const data = await func();

    if (!data) {
      return 'function from Dima';
    }

    let releaseYear = 'No date';

    if (screen.width <= 767) {
      data.results = data.results.slice(0, 10);
    }

    const cardMarkup = data.results
      .map(card => {
        if (!!card.release_date) {
          releaseYear = card.release_date.split('-')[0];
        }
        return movieCardMarkup(card, releaseYear);
      })
      .join('');

    if (data.page === 1) catalogList.innerHTML = cardMarkup;
    else catalogList.insertAdjacentHTML('beforeend', cardMarkup);

    // TODO:  fix pagination functionality
    const watchedPagination = new CreatePagination(data);
    watchedPagination.activatePagination();


    const movieCards = document.querySelectorAll('.catalog-item');
    movieCards.forEach(card => {
      card.addEventListener('click', getMovie);
    });
  } catch (error) {
    console.error(error);
  }  
}

function getMovie() {
  console.log('Modal window');
}
