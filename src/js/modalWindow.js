// const axios = require('axios').default;
import axios from 'axios';
import * as basicLightbox from 'basiclightbox';

const KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzgzN2Q4ZThiOWY1YjkyODFlNGYzODM2ZjQwZmMzMiIsInN1YiI6IjY0NzhmMTllMGUyOWEyMDBkY2I5YmFkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gm8FRVhZa5JYfHHhkK7gHuf4DwF_mvLWBXC6uzMdhLk';
//  const URL_DETAIL = `https://api.themoviedb.org/3/movie/${movie_id}`;
//  const URL_DETAIL = 'https://api.themoviedb.org/3/discover/movie';
const API_KEY = '5788acd6bec4b8c2fc2e238d02649a74';

const options = {
  method: 'GET',
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
  headers: {
    Authorization: `Bearer ${KEY}`,
    accept: 'application/json',
  },
};

// const backdropEl = document.querySelector('.modal-backdrop');
// console.log(backdropEl)

/*--------отримує дані з бекенду про фільм-------------*/

async function fetchMovieDetails(movie_id) {
  try {
    const URL_DETAIL = `https://api.themoviedb.org/3/movie/${movie_id}`;
    const response = await axios.get(URL_DETAIL, options);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log('Помилка запиту:', error);
  }
}

// const movie_id =  603654;
// const movie_id =  605579;

/*---------------------створює розмітку мадального вікна з інфо про фільм---------------------*/
function renderModalMovieMarkup(data) {
  const genreList = data.genres.map(genre => genre.name).join(', ');
  const vote = data.vote_average.toFixed(1);
  const populatity = data.popularity.toFixed(1);
  const voteCount = data.vote_count.toFixed(1);
  const posterUrl = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
  return `
<div class="modal-film-window">
  <button class="modal-close-btn">
     <svg class="modal-close-icon" width="100%" height="100%" >
        <use href="../img/symbols.svg#close" width="100%" height="100%"></use>
     </svg>
 </button>
 <img class="film-poster-img"  src="${posterUrl}" alt="poster of the selected film">
 <div class="about-film-wrapper">
 <h2 class="film-tittle">${data.original_title}</h2>
 <div class="film-list-wrapper">
 <ul class="first-about-film-list">
 <li class="about-film-item"> Vote / Votes</li>
 <li class="about-film-item">Popularity</li>
 <li class="about-film-item">Genre</li>
 </ul >
 <ul class="second-about-film-list">
     <li class="about-film-item"> ${vote} / ${voteCount}</li>
     <li class="about-film-item">${populatity}</li>
     <li class="about-film-item">${genreList}</li>
 </ul>
 </div>
 <p class="about-film-tittle">About </p>
 <p class="about-film-story">${data.overview} </p>
 <button class=" button btn-border-dark add-film-btn button-library">Add to my library</button>
 </div>
</div>`;
}

/*--------------отримує і відображає фільм в модальному вікні----------------*/
let instance;
async function getMovie(id) {
  const data = await fetchMovieDetails(id);
  const markup = renderModalMovieMarkup(data);
  instance = basicLightbox.create(markup, {
    closable: true,
    onShow: instance => {
      instance
        .element()
        .querySelector('.modal-close-btn')
        .addEventListener('click', () => {
          instance.close();
        });
      document.addEventListener('keydown', closeModalOnKeyPress);
    },
    onClose: instance => {
      instance
        .element()
        .querySelector('.modal-close-btn')
        .removeEventListener('click', () => {
          instance.close();
        });
      document.removeEventListener('keydown', closeModalOnKeyPress);
    },
  });

  instance.show();

  document.querySelector('.button-library').addEventListener('click', event => {
    console.log(event);
    onAddToMovieLibraryClick(data);
  });

  // onAddToMovieLibraryClick(data)
  // onRemuveFromLibraryClick(data)
  // updateMovieModal(markup);
}

function closeModalOnKeyPress(e) {
  if (e.code !== 'Escape') {
    return;
  }
  instance.close();
  document.removeEventListener('keydown', closeModalOnKeyPress);
}

document.querySelector('.modal-open').onclick = getMovie;

const movie_id = 605575;

// getMovie()

export { getMovie };

/*--------------Робота з LocalStorage ----------------*/

// const libraryBtn = document.querySelector('.button-library');
// libraryBtn.addEventListener('click', onAddToMovieLibraryClick);
// const key = 'movie-details';
// document.querySelector('.button-library').addEventListener('click', onAddToMovieLibraryClick);

function onAddToMovieLibraryClick(data) {
  const key = 'movie-details';
  const movie = JSON.stringify(data.id);
  localStorage.setItem(key, movie);
  const libraryBtn = document.querySelector('.button-library');

  document.querySelector('.button-library').textContent =
    'Remove from my library';
}

function clickListener(event) {
  console.log(event);
  onAddToMovieLibraryClick(data);
}

//  function onRemuveFromLibraryClick(){
//   const key = 'movie-details';
//   // const libraryBtn = document.querySelector('.button-library');
//   localStorage.removeItem(key);
//   document.querySelector('.button-library').textContent = 'Add to my library';
//  }
//  onRemuveFromLibraryClick()

/*--------------завантажує розмітку в бекдроп ----------------*/
// function updateMovieModal(markup) {
//   backdropEl.innerHTML = markup;
// }
