
import axios from 'axios';
import * as basicLightbox from 'basiclightbox';
// import { refs } from './models/refs.js';
import { refs } from './models/refs';

const KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzgzN2Q4ZThiOWY1YjkyODFlNGYzODM2ZjQwZmMzMiIsInN1YiI6IjY0NzhmMTllMGUyOWEyMDBkY2I5YmFkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gm8FRVhZa5JYfHHhkK7gHuf4DwF_mvLWBXC6uzMdhLk';
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

/*--------отримує дані з бекенду про фільм-------------*/

const bodyElement = document.querySelector('body'); 

async function fetchMovieDetails(movie_id) {
  try {
    const URL_DETAIL = `https://api.themoviedb.org/3/movie/${movie_id}`;
    const response = await axios.get(URL_DETAIL, options);
    const data = response.data;
    // console.log(data);
    return data;
  } catch (error) {
    console.log('Помилка запиту:', error);
  }
}


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
          <use href="./img/symbols.svg#close" width="100%" height="100%"></use>
       </svg>
   </button>
   <img class="film-poster-img"  src="${posterUrl}" alt="Movie poster" width="375" height="478">
   <div class="about-film-wrapper">
   <h2 class="film-tittle">${data.original_title}</h2>
   <div class="film-list-wrapper">
   <ul class="first-about-film-list">
   <li class="about-film-item"> Vote / Votes</li>
   <li class="about-film-item">Popularity</li>
   <li class="about-film-item">Genre</li>
   </ul >
   <ul class="second-about-film-list">
       <li class="about-film-item"> <span class ="vote-span">${vote}</span> / <span class ="vote-span">${voteCount}</span></li>
       <li class="about-film-item">${populatity}</li>
       <li class="about-film-item">${genreList}</li>
   </ul>
   </div>
   <p class="about-film-tittle">About </p>
   <p class="about-film-story">${data.overview} </p>
   <button class=" button btn-border-dark add-film-btn button-library-active">Add to my library</button>
   </div>
  </div>`;
}

/*--------------отримує і відображає фільм в модальному вікні----------------*/
let instance;
async function getMovie(movie_id) {
  try {
  const data = await fetchMovieDetails(movie_id);
  const markup = renderModalMovieMarkup(data);
  instance = basicLightbox.create(markup, {
    closable: true,
    onShow: instance => {
      instance
        .element()
        .querySelector('.modal-close-btn')
        .addEventListener('click', () => {
          instance.close();
          bodyElement.style.overflow = 'auto';
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
  const libraryBtn = document.querySelector('.add-film-btn');
  libraryBtn.addEventListener('click', () => {
    toggleLibraryStatus(data);
  });
  updateLibraryButtonStatus(data.id);
  bodyElement.style.overflow = 'hidden';
} catch (error) {
  console.log('Помилка отримання даних про фільм:', error);
}
}
/*--------------перевірка чи натиснута клавіша Escape із акриття модалки------------*/
function closeModalOnKeyPress(e) {
  if (e.code !== 'Escape') {
    return;
  }
  instance.close();
  bodyElement.style.overflow = 'auto';
  document.removeEventListener('keydown', closeModalOnKeyPress);
 
}



/*--------------перевіряє чи є фільм у сховищі, записує та видаляє фільм зі сховища;----*/
function toggleLibraryStatus(movieData) {
  const libraryMovies = getLibraryMovies();
  const movieIndex = libraryMovies.findIndex(movie => movie.id === movieData.id);
  
  if (movieIndex === -1) {
    libraryMovies.push(movieData);
  } else {
    libraryMovies.splice(movieIndex, 1);
  }

  localStorage.setItem('myLibrary', JSON.stringify(libraryMovies));
  updateLibraryButtonStatus(movieData.id);
}

/*-------------- отримує фільми зі сховища бібліотеки--------*/
function getLibraryMovies() {
  const storedMovies = localStorage.getItem('myLibrary');
  return storedMovies ? JSON.parse(storedMovies) : [];
}

// function saveLibraryMovies(movies) {
//   localStorage.setItem('myLibrary', JSON.stringify(movies));
// }


/*-------------- змінює статус кнопки відносно потреби додавання, або видалення зі сховища--------*/
function updateLibraryButtonStatus(movieId) {
  const libraryBtn = document.querySelector('.add-film-btn');
  const libraryMovies = getLibraryMovies();
  
  if (libraryMovies.some(movie => movie.id === movieId)) {
    libraryBtn.textContent = 'Remove from my library';
    // libraryBtn.classList.add('button-library-active');
  } else {
    libraryBtn.textContent = 'Add to my library';
    // libraryBtn.classList.remove('button-library-active');
  }
}

export { getMovie };

/*--------------Робота з LocalStorage ----------------*/

