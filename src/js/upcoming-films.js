if (!localStorage.getItem('myLibrary')) {
  localStorage.setItem('myLibrary', JSON.stringify([]));
}

// Fetch upcoming films
const today = new Date();
const thisMonth = today.getMonth();
const apiKey = '0c704f75eca072a04ab80b70c949efc2';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzcwNGY3NWVjYTA3MmEwNGFiODBiNzBjOTQ5ZWZjMiIsInN1YiI6IjY0Nzg0ZWFkY2Y0YjhiMDEwMzFjZWZjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HGp4SG4w1Ow4nxzAlMDbe5phup9IwpC6GqyzdUZE9ZM'
  }
};
fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
.then(response => response.json())
.then(genreData => {
// Створіть об'єкт зі списком жанрів, використовуючи ID як ключі і назви як значення
const genres = {};
genreData.genres.forEach(genre => {
  genres[genre.id] = genre.name;
});

fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)  
  .then(response => response.json())
  .then(data => {
    const films = data.results;

    if (films.length === 0) {
      const message = document.createElement('p');
      message.textContent = 'No upcoming films found.';
      document.getElementById('film-container').appendChild(message);
    } else {
      const currentMonth = today.getMonth() + 1;
      const filteredFilms = [];

      films.forEach(film => {
        const filmReleaseMonth = new Date(film.release_date).getMonth() + 1;
        if (filmReleaseMonth === currentMonth) {
          filteredFilms.push(film);
        }
      });

      if (filteredFilms.length > 0) {
        const randomFilmIndex = Math.floor(Math.random() * filteredFilms.length);
        const randomFilm = filteredFilms[randomFilmIndex];

        const filmCard = document.createElement('div');
        filmCard.className = 'film-card';

        const filmImgContainer = document.querySelector('.upcoming-film-image-container')
      //   const releaseDateWrap = document.querySelector('.release-date-wrap')

        const filmImage = document.createElement('img');
        filmImage.className = 'film-image';
        filmImage.src = `https://image.tmdb.org/t/p/original/${randomFilm.backdrop_path}`;
        filmImgContainer.appendChild(filmImage);

        const filmTitle = document.createElement('h2');
        filmTitle.className = 'film-title';
        filmTitle.textContent = randomFilm.title;
        filmCard.appendChild(filmTitle);

        const filmInfoTotalWrap = document.createElement('div');
        filmInfoTotalWrap.className = 'film-info-total-wrap';
        filmCard.appendChild(filmInfoTotalWrap)

        const filmReleaseWrap = document.createElement('div');
        filmReleaseWrap.className = 'film-release-wrap';
        filmInfoTotalWrap.appendChild(filmReleaseWrap);

        const filmReleaseDateText = document.createElement('p');
        filmReleaseDateText.className = 'film-release-text';
        filmReleaseDateText.textContent = "Release Date";
        filmReleaseWrap.appendChild(filmReleaseDateText);


        const filmReleaseDate = document.createElement('p');
        filmReleaseDate.className = 'film-release-date';
        filmReleaseDate.textContent = randomFilm.release_date;
        filmReleaseWrap.appendChild(filmReleaseDate);

        const filmVoteWrap = document.createElement('div');
        filmVoteWrap.className = 'film-vote-wrap';
        filmInfoTotalWrap.appendChild(filmVoteWrap);

        const filmVoteText = document.createElement('p');
        filmVoteText.className = 'film-vote-text';
        filmVoteText.textContent = "Vote / Votes";
        filmVoteWrap.appendChild(filmVoteText);

        const filmVotes = document.createElement('p');
        filmVotes.className = 'film-votes';
        filmVotes.textContent = `${randomFilm.vote_average} / ${randomFilm.vote_count}`;
        filmVoteWrap.appendChild(filmVotes);

        
        const filmPopularityWrap = document.createElement('div');
        filmPopularityWrap.className = 'film-popularity-wrap';
        filmInfoTotalWrap.appendChild(filmPopularityWrap);

        const filmRatingText = document.createElement('p');
        filmRatingText.className = 'film-rating-text';
        filmRatingText.textContent = "Popularity";
        filmPopularityWrap.appendChild(filmRatingText); 

        const filmRating = document.createElement('p');
        filmRating.className = 'film-rating';
        filmRating.textContent = `${randomFilm.popularity.toFixed(1)}`;
        filmPopularityWrap.appendChild(filmRating); 

        const filmGenreWrap = document.createElement('div');
        filmGenreWrap.className = 'film-genre-wrap';
        filmInfoTotalWrap.appendChild(filmGenreWrap);

        const filmGenreText = document.createElement('p');
        filmGenreText.className = 'film-genre-text';
        filmGenreText.textContent = "Genre"; 
        filmGenreWrap.appendChild(filmGenreText);

        const filmGenre = document.createElement('p');
        filmGenre.className = 'film-genre';
        const movieGenres = randomFilm.genre_ids.map(genreId => genres[genreId]);
        filmGenre.textContent = `${movieGenres.join(', ')}`; 
        filmGenreWrap.appendChild(filmGenre);

        const filmAbout = document.createElement('p');
        filmAbout.className = 'film-about';
        filmAbout.textContent = "ABOUT";
        filmCard.appendChild(filmAbout);

        const filmDescription = document.createElement('p');
        filmDescription.className = 'film-description';
        filmDescription.textContent = randomFilm.overview;
        filmCard.appendChild(filmDescription);

        const libraryButton = document.createElement('button');
        libraryButton.className = 'library-button button btn-gradient';
        if (isInLibrary(randomFilm.id)) {
          libraryButton.textContent = 'Remove from My Library';
        } else {
          libraryButton.textContent = 'Add to My Library';
        }
        libraryButton.addEventListener('click', () => toggleLibrary(randomFilm, libraryButton));
        filmCard.appendChild(libraryButton);

        document.getElementById('film-container').appendChild(filmCard);
      } else {
        const message = document.createElement('p');
        message.textContent = 'No upcoming films found for this month.';
        document.getElementById('film-container').appendChild(message);
      }
    }
  });
})
// Check if a film is in My Library
function isInLibrary(filmId) {
  const myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
  return myLibrary.some(film => film.id === filmId);
}

// Add or remove a film from My Library
function toggleLibrary(film, libraryButton) {
  const myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
  const index = myLibrary.findIndex(f => f.id === film.id);

  if (index === -1) {
    myLibrary.push(film);
  } else {
    myLibrary.splice(index, 1);
  }

  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));

  // Update library button text
  if (isInLibrary(film.id)) {
    libraryButton.textContent = 'Remove from My Library';
  } else {
    libraryButton.textContent = 'Add to My Library';
  }
}
