import { getGenreMovieList, getTrendingAllWeek } from './API/get-from-server';
import { movieCardMarkup } from './markups/movieCardMaurkup';

// const catalogList = document.querySelector('.catalog-list');

// const weeklyTrendsData = await getTrendingAllWeek();
// export default createCatalogMovieCard(weeklyTrendsData, catalogList);

// const genreMovieList = await getGenreMovieList();
// getGenreMovieFromList(genreMovieList, catalogCard);

// function getGenreMovieFromList(data) {
//   console.log(data.genres);
// }

export default function createCatalogMovieCard(data, catalogList) {
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
}
