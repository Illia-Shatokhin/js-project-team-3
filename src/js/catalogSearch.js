import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getSearchMovie } from './API/get-from-server';
import { refs } from './models/refs';
// import {createCatalogMovieCard} from './js/catalogMovieCard';

refs.catalogForm.addEventListener('submit', onSubmit);

export async function onSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const value = form.elements.searchQuery.value.trim();

  if (value === '') Notify.failure('No value!');
  else {
    const arrayMovies = await getArrayMovie(value);
    // console.dir(arrayMovies);
    const renderCards = arrayMovies.length
      ? alert('Ф-я рендер Каті')
      : alert('Заглушка');
    //  ф-я Каті createCatalogMovieCard(getArrayMovie(value), catalogList)
    // return getArrayMovie(value);
    renderBtnReset();
  }
  refs.buttonReset.addEventListener('click', e => {
    refs.catalogForm.reset();
    hiddenBtnReset();
  });
}

async function getArrayMovie(value) {
  try {
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
    return arrayMovies;
  } catch (error) {
    console.error(error);
  }
}

function renderBtnReset() {
  refs.buttonReset.classList.remove('hidden');
  refs.buttonReset.classList.add('active');
  refs.buttonSearchCatalog.disabled = true;
}
function hiddenBtnReset() {
  refs.buttonReset.classList.remove('active');
  refs.buttonReset.classList.add('hidden');
  refs.buttonSearchCatalog.disabled = false;
}
