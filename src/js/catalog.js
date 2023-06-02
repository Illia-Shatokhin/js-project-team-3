import axios from 'axios';
import debounce from 'lodash';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2MwNTQ2OTJhMjhhMGI4N2RjMjcxY2I3MjM1MGY5ZCIsInN1YiI6IjY0NzkwNDQ3MTc0OTczMDEzNTAwM2Q4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18CUpoY0xgepvezf35K1455pbEVdmHEuDU72vq0k1uQ';
let value = '1941';
const URL_Movie = 'https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=1';


const options = {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${KEY}`,
    accept: 'application/json',
  },
};

const catalogForm = document.getElementById('search-form');
// console.log(catalogForm);

fetchMovie();

function fetchMovie() {
  try {
    fetch(URL_Movie, options)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        return response;
      });
  } catch (error) {
    console.error(error);
  }
}

// catalogForm.addEventListener('submit', onSubmit);
// // loadMoreBtn.button.addEventListener('click', fetchPhotos);

// function onSubmit(event) {
//   event.preventDefault();
//   const form = event.currentTarget;
//   const value = form.elements.searchQuery.value.trim();

//   if (value === '') Notify.failure('No value!');
//   else {
//     photoService.searchValue = value;
//     photoService.resetPage();
//     clearPhotoGallery();
//     form.reset();
//     getPhotoMarkup();
//     window.addEventListener('scroll', handleScrollDeb);
//     // loadMoreBtn.show();
//   }
// }
