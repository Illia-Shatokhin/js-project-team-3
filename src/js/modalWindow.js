// const axios = require('axios').default;
import axios from 'axios';
import * as basicLightbox from 'basiclightbox'

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
    console.log(data)
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
  const posterUrl = `https://image.tmdb.org/t/p/w500${data.poster_path}`
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
</div>`
}

/*--------------отримує і відображає фільм в модальному вікні----------------*/
let instance;
async function getMovie(id) {
  const data = await fetchMovieDetails(movie_id);
  const markup = renderModalMovieMarkup(data);
  instance = basicLightbox.create(markup, {
    closable: true,
    onShow: (instance) => {
      instance.element().querySelector('.modal-close-btn').addEventListener('click', () => {
        instance.close();
      });
      document.addEventListener('keydown', closeModalOnKeyPress)
    },
    onClose: (instance) => {
      instance.element().querySelector('.modal-close-btn').removeEventListener('click', () => {
        instance.close();
      });
      document.removeEventListener('keydown', closeModalOnKeyPress);
    }
  });

  instance.show();

  document.querySelector('.button-library').addEventListener('click', (event)=>{
    console.log(event)
    onAddToMovieLibraryClick(data)
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

// document.querySelector('.modal-open').onclick = getMovie;


const movie_id =  605578;


// getMovie()

export { getMovie } ;


/*--------------Робота з LocalStorage ----------------*/

function onAddToMovieLibraryClick(data) {
  const key = 'movie-details';
const movie = JSON.stringify(data.id)
localStorage.setItem(key, movie)
const libraryBtn = document.querySelector('.button-library');

document.querySelector('.button-library').textContent = 'Remove from my library';

}

// function clickListener(event){
//   console.log(event)
//   onAddToMovieLibraryClick(data)
// }

// let movie = {};
// let id = '';
// const movies = JSON.stringify([{"id":569094,"poster":"https://image.tmdb.org/t/p/w300/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg","originalTitle":"Spider-Man: Across the Spider-Verse","title":"Spider-Man: Across the Spider-Verse","overview":"After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.","genresMovie":"Action, Adventure, Animation, Science Fiction","popularity":"1963.2","voteAverage":"8.8","voteCount":336,"release_date":"2023-05-31"},{"id":961718,"poster":"https://image.tmdb.org/t/p/w300/jKFOQ5LNQuIWGLdB2WhVlSUcS6F.jpg","originalTitle":"Medellin","title":"Medellin","overview":"To save his little brother from the hands of dangerous narcos of the Medellín cartel, Reda has a plan that is as simple as it is totally insane: put together a team and raid Colombia. But this adventure is going to get completely out of control when he decides to kidnap the son of the cartel leader to exchange him for his brother's life.","genresMovie":"Action, Comedy","popularity":"71.0","voteAverage":"4.8","voteCount":21,"release_date":"2023-06-01"},{"id":603692,"poster":"https://image.tmdb.org/t/p/w300/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg","originalTitle":"John Wick: Chapter 4","title":"John Wick: Chapter 4","overview":"With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.","genresMovie":"Action, Thriller, Crime","popularity":"6036.3","voteAverage":"8.0","voteCount":2552,"release_date":"2023-03-22"},{"id":1016084,"poster":"https://image.tmdb.org/t/p/w300/neV35lK7em4rIY9QIoH1cruErPA.jpg","originalTitle":"BlackBerry","title":"BlackBerry","overview":"Two mismatched entrepreneurs – egghead innovator Mike Lazaridis and cut-throat businessman Jim Balsillie – joined forces in an endeavour that was to become a worldwide hit in little more than a decade. The story of the meteoric rise and catastrophic demise of the world's first smartphone.","genresMovie":"Comedy, Drama, History","popularity":"31.4","voteAverage":"7.8","voteCount":21,"release_date":"2023-05-11"}]);
// const key = 'movie';
// const movieArrStr = localStorage.getItem(key);

// let movieArray = JSON.parse(movieArrStr);

// localStorage.setItem(key, movies);
// console.log(movies);

// function removeMovie(id) {
//   const index = movieArray.findIndex(movie => movie.id === id);
//   console.log(index);
//   if (index !== -1) {
//     const del = movieArray.splice(index, 1);
//     console.log(del);
//   }
// }

//  removeMovie(603692);

// const updatedMovieArrStr = JSON.stringify(movieArray);
// localStorage.setItem(key, updatedMovieArrStr);
// console.log(movieArray);

 

  
//      const findBankById = (id, banks) => {
//   return banks.find(bank => bank.id === id)
// }
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