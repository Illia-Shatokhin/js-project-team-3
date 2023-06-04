import { getGenreMovieList, getTrendingAllWeek } from './API/get-from-server';
import { movieCardMarkup } from './markups/movieCardMaurkup';

// const genreMovieList = await getGenreMovieList();
// getGenreMovieFromList(genreMovieList, catalogCard);

// function getGenreMovieFromList(data) {
//   console.log(data.genres);
// }

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
        console.log(data.results);
        if (!!card.release_date) {
          releaseYear = card.release_date.split('-')[0];
        }

        return movieCardMarkup(card, releaseYear);
      })
      .join('');

    if (data.page === 1) catalogList.innerHTML = cardMarkup;
    else catalogList.insertAdjacentHTML('beforeend', cardMarkup);

    // getWatched.getFilms();
    const watchedPagination = new CreatePagination(func);
    watchedPagination.activatePagination();


  } catch (error) {
    console.error(error);
  }
}
