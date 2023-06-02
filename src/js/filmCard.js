import axios from 'axios';

function createMovieCardMarkup({ data }) {
  console.log(data);
  let releaseYear = 'No data available';
  if (!!data.release_date) {
    releaseYear = data.release_date.split('-')[0];
  }
  return `    
  <li class="catalog-item" id="${data.results.id}">
  <img class="catalog-card-img" href="${data.results.backdrop_path}"></img>

  <div class="catalog-card-info-container">
    <h4 class="catalog-card-title">${data.results.title}</h4>
    <pcatalog-card-description><span class="card-info-span">${data.results.genre_ids}</span> | <span
        class="card-info-span">${releaseYear}</span>
    </p>
    <div class="rating">${data}</div>
  </div>
</li>
`;
}

function getWeeklyTrands() {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/all/week',
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGE4NzU4ZWI0MGUyMjEwMTM3MDlkNjMwNzlmZDljNCIsInN1YiI6IjY0NzlhODg5ZTMyM2YzMDBhN2Q0ZGYzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X0uZkuPOvO6LdN-fYieV72t0jFMKCqqFgnPHTxpIpdg',
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      response.data.results.map(el => {
        console.log(el);
        createMovieCardMarkup(el);
      });
    })
    .catch(function (error) {
      console.error(error);
    });
}

getWeeklyTrands();
