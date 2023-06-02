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
  
          const filmImage = document.createElement('img');
          filmImage.className = 'film-image';
          filmImage.src = `https://image.tmdb.org/t/p/original/${randomFilm.backdrop_path}`;
          filmCard.appendChild(filmImage);
  
          const filmTitle = document.createElement('h2');
          filmTitle.className = 'film-title';
          filmTitle.textContent = randomFilm.title;
          filmCard.appendChild(filmTitle);
  
          const filmReleaseDate = document.createElement('p');
          filmReleaseDate.className = 'film-release-date';
          filmReleaseDate.textContent = `Release Date: ${randomFilm.release_date}`;
          filmCard.appendChild(filmReleaseDate);
  
          const filmRating = document.createElement('p');
          filmRating.className = 'film-rating';
          filmRating.textContent = `Rating: ${randomFilm.vote_average}`;
          filmCard.appendChild(filmRating);
  
          const filmDescription = document.createElement('p');
          filmDescription.className = 'film-description';
          filmDescription.textContent = randomFilm.overview;
          filmCard.appendChild(filmDescription);
  
          const libraryButton = document.createElement('button');
          libraryButton.className = 'library-button';
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