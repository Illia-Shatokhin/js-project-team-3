import axios from 'axios';
import debounce from 'lodash';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2MwNTQ2OTJhMjhhMGI4N2RjMjcxY2I3MjM1MGY5ZCIsInN1YiI6IjY0NzkwNDQ3MTc0OTczMDEzNTAwM2Q4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18CUpoY0xgepvezf35K1455pbEVdmHEuDU72vq0k1uQ';
let value;
const URL_Movie =
  'https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=1';

const options = {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${KEY}`,
    accept: 'application/json',
  },
};

const catalogForm = document.getElementById('search-form');
const buttonReset = document.querySelector('.catalog-button-reset');
// console.log(buttonReset);

async function fetchMovie() {
  try {
    const response = await axios.get(URL_Movie, options);
    const arrayMovies = response.data.results;
    console.log(arrayMovies);
    return arrayMovies;
  } catch (error) {
    console.error(error);
  }
}

catalogForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const value = form.elements.searchQuery.value.trim();
  //   const URL_Movie = 'https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=1';
  console.dir(value);

  if (value === '') Notify.failure('No value!');
  else {
    fetchMovie();
    renderBtnReset();
    buttonReset.addEventListener('click', (e) => {
        catalogForm.reset();
        hiddenBtnReset();
    })
    //     photoService.searchValue = value;
    //     photoService.resetPage();
    //     clearPhotoGallery();
    //     form.reset();
    //     getPhotoMarkup();
    //     window.addEventListener('scroll', handleScrollDeb);
    // loadMoreBtn.show();
  }
}

function renderBtnReset() {
    buttonReset.classList.remove('hidden');
    buttonReset.classList.add('active');
}
function hiddenBtnReset() {
    buttonReset.classList.remove('active');
    buttonReset.classList.add('hidden');
}