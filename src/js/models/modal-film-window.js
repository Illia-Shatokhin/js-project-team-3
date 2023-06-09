
//============================================================================
function checkPoster(data) {
  if (data.poster_path) {
    return {
      posterURL: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
      imageClass: 'film-poster-img'
    };
  } else {
    return {
      // posterURL: './img/trailer-modal-tab.png',
      posterURL: './img/trailer-modal-desk@2x.png',
      imageClass: 'picture-class'
    };
  }
}

/*---------------------створює розмітку мадального вікна з інфо про фільм---------------------*/
export function renderModalMovieMarkup(data) {
  const genreList = data.genres.map(genre => genre.name).slice(0, 2).join(', ');
  const vote = data.vote_average.toFixed(1);
  const popularity = data.popularity.toFixed(1);
  const voteCount = data.vote_count.toFixed(1);
  const { posterURL, imageClass } = checkPoster(data);
  
  return `
  <div class="modal-film-window">
    <button class="modal-close-btn">
       <svg class="modal-close-icon" width="100%" height="100%" >
          <use href="./img/symbols.svg#close" width="100%" height="100%"></use>
       </svg>
   </button>
   <div class="film-poster-wrapper">
   <img class="${imageClass}"   src="${posterURL}" alt="Movie poster">
   </div>
   <div class="about-film-wrapper">
    <h2 class="film-tittle">${data.original_title}</h2>
    <div class="film-list-wrapper">
      <ul class="first-about-film-list">
        <li class="about-film-item"> Vote / Votes</li>
        <li class="about-film-item">Popularity</li>
        <li class="about-film-item">Genre</li>
      </ul >
      <ul class="second-about-film-list ">
       <li class="about-film-item "> <span class ="vote-span">${vote}</span> / <span class ="vote-span">${voteCount}</span></li>
       <li class="about-film-item">${popularity}</li>
       <li class="about-film-item">${genreList}</li>
      </ul>
    </div>
   <p class=" about-film-tittle">About </p>
   <p class="about-film-story ">${data.overview} </p>
   <button class=" button btn-border-dark add-film-btn">Add to my library</button>
   </div>
  </div>`;
}