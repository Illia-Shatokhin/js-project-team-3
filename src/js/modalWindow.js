// const axios = require('axios').default;
import axios from 'axios';

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
    // append_to_response: 'images',
  },
  headers: {
    Authorization: `Bearer ${KEY}`,
    accept: 'application/json',
  },
};

const backdropEl = document.querySelector('.modal-backdrop');
console.log(backdropEl)
/*--------отримує дані з бекенду про фільм-------------*/

 async function fetchMovieDetails(movie_id) {
   try {
    const URL_DETAIL = `https://api.themoviedb.org/3/movie/${movie_id}`;
     const response = await axios.get(URL_DETAIL, options);
     const data = response.data;
    //  const { poster_path, original_title, vote_average, vote_count, popularity, genre_ids } = data;;
   
    console.log(data)
// return { poster_path, original_title, vote_average, vote_count, popularity, genre_ids };
return data;
   } catch (error) {
     console.error('Помилка запиту:', error);
   }
}


const movie_id =  603654;
// const movie_id =  605579;

/*---------------------створює розмітку мадального вікна з інфо про фільм---------------------*/
 function renderModalMovieMarkup(data){
   const genreList =data.genres.map(genre => genre.name).join(', ');
   const vote =  data.vote_average.toFixed(1);
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
 <button class=" button btn-border-dark add-film-btn">Add to my library</button>
 </div>
</div>`
 }

/*--------------отримує і відображає вільм в модальному вікні----------------*/
async function getMovie(){
  const data = await fetchMovieDetails(movie_id);
  const markup = renderModalMovieMarkup(data);
  updateMovieModal(markup)
}
getMovie()

// const backdropEl = document.querySelector('.modal-backdrop');
// console.log(backdropEl)

/*--------------завантажує розмітку в бекдроп ----------------*/
function updateMovieModal(markup) {
  backdropEl.innerHTML = markup;
}


