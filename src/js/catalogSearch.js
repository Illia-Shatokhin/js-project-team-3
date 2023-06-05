import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getSearchMovie } from './API/get-from-server';
import { refs } from './models/refs';
import { renderError, errorCatalogMarkup } from './errortrailer';
import createMovieCard from './catalogMovieCard';

refs.catalogForm.addEventListener('submit', onSubmit);

export async function onSubmit(event) {
  try {
    event.preventDefault();
    const form = event.currentTarget;
    const value = form.elements.searchQuery.value.trim();

    if (value === '') Notify.failure('No value!');
    else {
      const options = {
        query: value,
        include_adult: false,
        // primary_release_year,
        page: 1,
        // region,
        // year,
      };
      const response = await getSearchMovie(options);
      const arrayMovies = await response.results;
      console.dir(arrayMovies);

      if (arrayMovies.length) {
        catalogListReset();
        filterCreateMovieCard(arrayMovies);
      } else {
        catalogListReset();
        renderError(refs.catalogList, errorCatalogMarkup);
      }
      renderBtnReset();
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

export function filterCreateMovieCard(array) {
  screen.width <= 767
    ? createMovieCard(array, refs.catalogList, 10)
    : createMovieCard(array, refs.catalogList, 20);
}

export function renderBtnReset() {
  refs.buttonReset.classList.remove('hidden');
  refs.buttonReset.classList.add('active');
  refs.buttonSearchCatalog.disabled = true;
}

export function hiddenBtnReset() {
  refs.buttonReset.classList.remove('active');
  refs.buttonReset.classList.add('hidden');
  refs.buttonSearchCatalog.disabled = false;
}

export function catalogListReset() {
  refs.catalogList.innerHTML = '';
}