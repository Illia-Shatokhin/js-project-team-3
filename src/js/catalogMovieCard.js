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

    let releaseYear = 'No data available';

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
  } catch (error) {
    console.error(error);
  }
}
