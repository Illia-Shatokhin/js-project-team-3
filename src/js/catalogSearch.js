
import { getSearchMovie } from './API/get-from-server';
import { refs } from './models/refs';
import { renderError, errorCatalogMarkup } from './errortrailer';
import createMovieCard from './catalogMovieCard';
import { weeklyTrendsList } from './catalogMovieCard';
import { dataObj } from './models/data';
import CreatePagination from './services/pagination';

refs.catalogForm.addEventListener('submit', onSubmit);

export async function sendSearch(page = 1) {
  try {
    const options = {
      query: dataObj.searchQuery,
      primary_release_year: dataObj.searchYear,
      page: dataObj.searchCurrentPage,
      region: dataObj.searchRegion,
      year: dataObj.searchYear,
    };
    const data = await getSearchMovie(options);
    const arrayMovies = data.results;

    const searchPagination = new CreatePagination(data, sendSearch);
    searchPagination.activatePagination();

    if (arrayMovies.length) {
      filterCreateMovieCard(data);
      refs.catalogForm.reset();
      hiddenBtnReset();
      refs.tuiPaginationContainer.style.display = 'block';
    } else {
      renderBtnReset();
      catalogListReset();
      renderError(refs.catalogList, errorCatalogMarkup);
      refs.tuiPaginationContainer.style.display = 'none';
    }

    refs.buttonReset.addEventListener('click', e => {
      refs.catalogForm.reset();
      hiddenBtnReset();
    });
  } catch (error) {
    console.error(error);
    catalogListReset();
    renderError(refs.catalogList, errorCatalogMarkup);
  }
}

export async function onSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const value = form.elements.searchQuery.value.trim();
  const country = form.elements.country.value;
  const year = form.elements.year.value;

  if (value === '') {weeklyTrendsList()}
  else {
    setSearchParam(1, value, year, country);
    sendSearch();
  }
}

function filterCreateMovieCard(data) {
  screen.width <= 767
    ? createMovieCard(data.results, refs.catalogList, 10)
    : createMovieCard(data.results, refs.catalogList, 20);
}
// ==========================================================================================
function renderBtnReset() {
  refs.buttonReset.classList.remove('hidden');
  refs.buttonReset.classList.add('active');
  // refs.buttonSearchCatalog.disabled = true;
  clearSearchParam();
}
// =========================================================================================
function hiddenBtnReset() {
  refs.buttonReset.classList.remove('active');
  refs.buttonReset.classList.add('hidden');
  // refs.buttonSearchCatalog.disabled = false;
}
// ==========================================================================================
function catalogListReset() {
  refs.catalogList.innerHTML = '';
}
// ==========================================================================================
function setSearchParam(page, query, year, region) {
  dataObj.searchCurrentPage = page;
  dataObj.searchQuery = query;
  dataObj.searchYear = year;
  dataObj.searchRegion = region;
}
//================================================================
function clearSearchParam() {
  dataObj.searchCurrentPage = 0;
  dataObj.searchQuery = '';
  dataObj.searchYear = '';
  dataObj.searchRegion = '';
}
