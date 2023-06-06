import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getSearchMovie } from './API/get-from-server';
import { refs } from './models/refs';
import { renderError, errorCatalogMarkup } from './errortrailer';
import createMovieCard from './catalogMovieCard';
import { dataObj } from './models/data';
import CreatePagination from './services/pagination';

refs.catalogForm.addEventListener('submit', onSubmit);

export async function sendSearch(page) {
  try {
    const options = {
      query: dataObj.searchQuery,
      primary_release_year: dataObj.searchYear,
      page: dataObj.searchCurrentPage,
      region: dataObj.searchRegion,
      year: dataObj.searchYear,
    };
    const data = await getSearchMovie(options);
    const arrayMovies = await data.results;
    // console.dir(arrayMovies);

    if (arrayMovies.length) {
      catalogListReset();
      filterCreateMovieCard(data);
      refs.catalogForm.reset();
    } else {
      catalogListReset();
      renderBtnReset();
      renderError(refs.catalogList, errorCatalogMarkup);
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

  if (value === '') Notify.failure('No movie specified!');
  let page = 1;
  const options = setSearchParam(page, value, year, country);
 
  sendSearch((page));
  // TODO:  fix pagination functionality
  const searchPagination = new CreatePagination(response, sendSearch(page));
  searchPagination.activatePagination();

  // try {
  //   if (value === '') Notify.failure('No movie specified!');
  //   else {
  //     const options = setSearchParam(page, value, year, country);
  //     const response = await getSearchMovie(options);
  //     const arrayMovies = await response.results;
  //     console.dir(arrayMovies);

  //     if (arrayMovies.length) {
  //       catalogListReset();
  //       filterCreateMovieCard(response);
  //       refs.catalogForm.reset();
  //     } else {
  //       catalogListReset();
  //       renderBtnReset();
  //       renderError(refs.catalogList, errorCatalogMarkup);
  //     }
  //     // renderBtnReset();
  //   }
  //   refs.buttonReset.addEventListener('click', e => {
  //     refs.catalogForm.reset();
  //     hiddenBtnReset();
  //   });
  // } catch (error) {
  //   console.error(error);
  //   catalogListReset();
  //   renderError(refs.catalogList, errorCatalogMarkup);
  // }
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
function setSearchParam(page = 1, query, year, region) {
  dataObj.searchCurrentPage = page;
  dataObj.searchQuery = query;
  dataObj.searchYear = year;
  dataObj.searchRegion = region;
  const options = {
    query: query,
    primary_release_year: year,
    page,
    region,
    year,
  };
  return options;
}
//================================================================
function clearSearchParam() {
  dataObj.searchCurrentPage = 0;
  dataObj.searchQuery = '';
  dataObj.searchYear = '';
  dataObj.searchRegion = '';
}
