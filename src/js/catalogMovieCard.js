import { movieCardMarkup } from './markups/movieCardMaurkup';

export default async function createCatalogMovieCard(func, catalogList, arg) {
  try {
    let data;
    if (arg === undefined) {
      data = await func();
    } else if (!isNaN(arg)) {
      data = await func(arg);
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
    }

    let releaseYear = 'No date';

    if (!data) {
      return 'function from Dima';
    }

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
