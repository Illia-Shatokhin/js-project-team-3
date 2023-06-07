import { errorCatalogMarkup, renderError } from './errortrailer';
import { movieCardMarkup } from './markups/movieCardMaurkup';
import { getMovie } from './modalWindow';
import { refs } from './models/refs';
import { getGenreMovieList, getTrendingAllWeek } from './API/get-from-server';
import CreatePagination from './services/pagination';

const ratingArray = [];
//================================================================
function getReleaseYear(film) {
  let releaseYear = '2023';
  const { release_date } = film;
  if (release_date) releaseYear = release_date.split('-')[0];
  return releaseYear;
}

function getMovieTitle(film) {
  let originalTitle = 'No Title';
  const { original_title } = film;
  if (original_title) originalTitle = original_title;
  return originalTitle;
}
//================================================================
async function getGenreIds(getGenreMovieList) {
  const genreMovieList = await getGenreMovieList();
  const genreIds = genreMovieList.genres;
  return genreIds;
}

//================================================================
export default async function createMovieCard(data, elem, count) {
  const genreIds = await getGenreIds(getGenreMovieList);
  let markup = '';
  for (let index = 0; index < count; index++) {
    ratingArray.push(data[index].vote_average ? data[index].vote_average : 0);

    const releaseYear = getReleaseYear(data[index]);
    const originalTitle = getMovieTitle(data[index]);
    const movieGenres = genreIds.filter(genre =>
      data[index].genre_ids.includes(genre.id)
    );
    const genreNames = movieGenres
      .map(genre => genre.name)
      .slice(0, 2)
      .join(', ');

    if (data)
      markup += movieCardMarkup(
        data[index],
        releaseYear,
        originalTitle,
        genreNames
      );
  }
  elem.innerHTML = markup;
  addStars([...document.querySelectorAll('.catalog-card-rating')]);
}

//================================================================
import ReviewStars from './stars';

export function addStars(data) {
  data.map(el => {
    const stars = new ReviewStars({
      totalStars: 5,
      averageRating: ratingArray.shift() / 2,
      size: 14,
      filled: false,
      insertTo: {
        element: el,
        position: 'afterbegin',
      },
    });
    stars.restart();
  });
}

//================================================================
export async function weeklyTrendsList(page = 1) {
  try {
    const data = await getTrendingAllWeek(page);
    screen.width <= 767
      ? createMovieCard(data.results, refs.catalogList, 10)
      : createMovieCard(data.results, refs.catalogList, 20);

    const watchedPagination = new CreatePagination(data, weeklyTrendsList);
    watchedPagination.activatePagination();
    addStars();
  } catch (error) {
    renderError(refs.catalogList, errorCatalogMarkup);
  }
  refs.catalogList.addEventListener('click', openFilmDetails);
}

//================================================================
export async function openFilmDetails(e) {
  const clickedElement = e.target;
  if (clickedElement.tagName === 'LI') {
    const movieId = clickedElement.id;
    await getMovie(movieId);
  }
}
