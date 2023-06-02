const KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzgzN2Q4ZThiOWY1YjkyODFlNGYzODM2ZjQwZmMzMiIsInN1YiI6IjY0NzhmMTllMGUyOWEyMDBkY2I5YmFkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gm8FRVhZa5JYfHHhkK7gHuf4DwF_mvLWBXC6uzMdhLk';
const time_window = 'day';
const URL_TREND = `https://api.themoviedb.org/3/trending/movie/${time_window}?language=en-US`;

const options = {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${KEY}`,
    accept: 'application/json',
  },
};

const heroRef = document.querySelector('.hero');
console.log(heroRef);

fetchTrendingMovie();

function fetchTrendingMovie() {
  try {
    fetch(URL_TREND, options)
      .then(response => response.json())
      .then(response => {
        return renderHero(response);
      });
  } catch (error) {
    console.error(error);
  }
}

function renderHero(data) {
  const index = Math.floor(Math.random() * 20);
  const { overview, original_title, vote_average, backdrop_path } =
    data.results[index];
  // ! Питання по адресі картинки
  heroRef.style.backgroundImage = `url(https://www.themoviedb.org/t/p/original${backdrop_path})`;
  console.log(backdrop_path);
  const a = `
    <div class="container">
    <h2 class="hero-title">${original_title}</h2>
   <p>${vote_average.toFixed(1)}</p>
   
    <p class="overview">${overview}</p>
    <button>Watch trailer</button>
    <button>More details</button>
  </div>`;
  heroRef.innerHTML = a;
}
