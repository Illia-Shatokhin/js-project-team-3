// import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getSearchMovie } from './API/get-from-server';
// import {createCatalogMovieCard} from './js/catalogMovieCard';

const catalogForm = document.getElementById('search-form');
const buttonReset = document.querySelector('.catalog-button-reset');
const buttonSearch = document.querySelector('.catalog-search-button');

catalogForm.addEventListener('submit', onSubmit);

export async function onSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const value = form.elements.searchQuery.value.trim();

  if (value === '') Notify.failure('No value!');
  else {
  const arrayMovies = await getArrayMovie(value);
  // console.dir(arrayMovies);
  const renderCards = arrayMovies.length?alert('Ф-я рендер Каті'):alert('Заглушка');
  //  ф-я Каті createCatalogMovieCard(getArrayMovie(value), catalogList)
  // return getArrayMovie(value);
  renderBtnReset();
 
  }
  buttonReset.addEventListener('click', e => {
    catalogForm.reset();
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
  buttonReset.classList.remove('hidden');
  buttonReset.classList.add('active');
  buttonSearch.disabled = true;
}
function hiddenBtnReset() {
  buttonReset.classList.remove('active');
  buttonReset.classList.add('hidden');
  buttonSearch.disabled = false;
}
