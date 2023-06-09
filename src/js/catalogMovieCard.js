import { errorCatalogMarkup, renderError } from './errortrailer';
import { movieCardMarkup } from './markups/movieCardMaurkup';
import { getMovie } from './modalWindow';
import { refs } from './models/refs';
import { getGenreMovieList, getTrendingAllWeek } from './API/get-from-server';
import CreatePagination, { addZeroPagination } from './services/pagination';
import { addCardStars } from './stars';
import { Loading } from 'notiflix';
import debounce from 'lodash.debounce';

const ratingArray = [];

if (document.title === 'Catalog') refs.catalogList.addEventListener('click', debounce(openFilmDetails, 300));

//================================================================
function getReleaseYear(film) {
  let releaseYear = '2023';
  if (!film) return releaseYear;

  const { release_date } = film;
  if (release_date) releaseYear = release_date.split('-')[0];
  return releaseYear;
}

function getMovieTitle(film) {
  let originalTitle = 'No Title';
  if (!film) return originalTitle;

  const { original_title, original_name } = film;
  if (!original_title) {
    originalTitle = original_name;
  } else {
    originalTitle = original_title;
  }

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
  count = count > data.length ? data.length : count;
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
  elem.style.display = 'flex';
  elem.innerHTML = markup;
  addCardStars(
    [...document.querySelectorAll('.catalog-card-rating')],
    screen.width,
    ratingArray
  );

  addZeroPagination();
}

//================================================================
export async function weeklyTrendsList(page = 1) {
  try {
    Loading.standard('Loading...', {
      backgroundColor: 'rgba(0,0,0,0.8)',
      svgColor: 'rgb(248, 119, 25)',
    });
    const data = await getTrendingAllWeek(page);
    createMovieCard(data.results, refs.catalogList, 20);

    const watchedPagination = new CreatePagination(data, weeklyTrendsList);
    watchedPagination.activatePagination();
    addStars();
  } catch (error) {
    renderError(refs.catalogList, errorCatalogMarkup);
  }
  Loading.remove();
}

//================================================================
export async function openFilmDetails(e) {
  const clickedElement = e.target;
  if (clickedElement.tagName === 'LI') {
    const movieId = clickedElement.id;
    await getMovie(movieId);
  }
}
