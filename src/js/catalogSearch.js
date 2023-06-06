import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getSearchMovie } from './API/get-from-server';
import { refs } from './models/refs';
import { renderError, errorCatalogMarkup } from './errortrailer';
import createMovieCard from './catalogMovieCard';
import { dataObj } from './models/data';

refs.catalogForm.addEventListener('submit', onSubmit);
// let page = 1;

export async function onSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const value = form.elements.searchQuery.value.trim();
  const country = form.elements.country.value;
  const year = form.elements.year.value;
  
  try {
    if (value === '') Notify.failure('No movie specified!');
    else {
      
      // const options = {
      //   query: value,
      //   include_adult: false,
      //   primary_release_year: year,
      //   page: 1,
      //   region: country,
      //   year: year,
      // };
      const options = setSearchParam(1, value, year, country);
      const response = await getSearchMovie(options);
      console.dir(response);
      const arrayMovies = await response.results;
      

      if (arrayMovies.length) {
        catalogListReset();
        filterCreateMovieCard(response);
        refs.catalogForm.reset();
      } else {
        catalogListReset();
        renderBtnReset();
        renderError(refs.catalogList, errorCatalogMarkup);
      }
      // renderBtnReset();
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

export function filterCreateMovieCard(response) {
  screen.width <= 767
    ? createMovieCard(response, refs.catalogList, 10)
    : createMovieCard(response, refs.catalogList, 20);

// TODO:  fix pagination functionality
 git
}
// ==========================================================================================
export function renderBtnReset() {
  refs.buttonReset.classList.remove('hidden');
  refs.buttonReset.classList.add('active');
  // refs.buttonSearchCatalog.disabled = true;
}
// =========================================================================================
export function hiddenBtnReset() {
  refs.buttonReset.classList.remove('active');
  refs.buttonReset.classList.add('hidden');
  // refs.buttonSearchCatalog.disabled = false;
}
// ==========================================================================================
export function catalogListReset() {
  refs.catalogList.innerHTML = '';
}
// ==========================================================================================
export function setSearchParam(page, query, year, region) {
  dataObj.searchCurrentPage = page + 1;
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
// {
//   query = 'qqq',
//   language = 'en-US',
//   include_adult = false,
//   primary_release_year = '',
//   page = 1,
//   region = '',
//   year = '',
// }
//================================================================
function clearSearchParam() {
  dataObj.searchCurrentPage = 0;
  dataObj.searchQuery = "";
  dataObj.searchYear = "";
  dataObj.searchRegion = "";
}