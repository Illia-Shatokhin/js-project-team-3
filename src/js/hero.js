import { getTrendingAllDay } from './API/get-from-server.js';

const heroRef = document.querySelector('.hero');

export default function createHero() {
  getDataHero();
}

async function getDataHero() {
  try {
    const data = await getTrendingAllDay();
    renderHero(data.results);
    console.log(data.results);
  } catch (error) {
    error => console.log(error);
  }
}

function renderHero(data) {
  const index = getRandomIndex();
  const { id, overview, original_title, vote_average, backdrop_path } =
    data[index];
  // heroRef.setAttribute('id', `${id}`);
  console.log(backdrop_path);

  heroRef.style.backgroundImage = `linear-gradient(86.47deg, #111111 33.63%, rgba(17, 17, 17, 0) 76.86%), 
    url(https://www.themoviedb.org/t/p/original/${backdrop_path})`;

  // heroRef.innerHTML = creatHeroMarkup(overview, original_title, vote_average);

  const a = `
    <div class="container">
      <h2 class="hero-title">${original_title}</h2>
      <p class="reting-stars">${vote_average.toFixed(1)}</p>

      <div class="overview">
        <p overview-text> ${overview} </p>
      </div>
      <div class="thumb-hero-btn">
        <button class="button btn-gradient" >Watch trailer</button>
        button class="button">More details</button>
      </div>
    </div>`;
  console.log(a);
  heroRef.innerHTML = a;
}

function creatHeroMarkup(overview, original_title, vote_average) {
  return `
    <div class="container">
      <h2 class="hero-title">${original_title}</h2>
      <p class="reting-stars">${vote_average.toFixed(1)}</p>
      <div class="overview">
        <p overview-text> ${overview} </p>
      </div>
      <div class="thumb-hero-btn">
        <button class="button btn-gradient">Watch trailer</button>
        <button class="button">More details</button>
      </div>
    </div>`;
}

// function getRandomIndex() {
//   return Math.floor(Math.random() * 20);
// }

// // export default function createHero() {}
// // const data = getTrendingAllDay().then();

// // const { overview, original_title, vote_average, backdrop_path } = data;

// // console.log(data);

// // const KEY =
// //   'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzgzN2Q4ZThiOWY1YjkyODFlNGYzODM2ZjQwZmMzMiIsInN1YiI6IjY0NzhmMTllMGUyOWEyMDBkY2I5YmFkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gm8FRVhZa5JYfHHhkK7gHuf4DwF_mvLWBXC6uzMdhLk';
// // const time_window = 'day';
// // const URL_TREND = `https://api.themoviedb.org/3/trending/movie/${time_window}?language=en-US`;

// const options = {
//   method: 'GET',
//   headers: {
//     Authorization: `Bearer ${KEY}`,
//     accept: 'application/json',
//   },
// };

// fetchTrendingMovie();

// function fetchTrendingMovie() {
//   try {
//     fetch(URL_TREND, options)
//       .then(response => response.json())
//       .then(response => {
//         return renderHero(response);
//       });
//   } catch (error) {
//     console.error(error);
//   }
// }

// function renderHero(data) {
//   const index = Math.floor(Math.random() * 20);
//   const { overview, original_title, vote_average, backdrop_path } =
//     data.results[index];
//   heroRef.style.backgroundImage = `url(https://www.themoviedb.org/t/p/original${backdrop_path})`;

//   const a = `
//     <div class="container">
//     <h2 class="hero-title">${original_title}</h2>
//    <p class="reting-stars">${vote_average.toFixed(1)}</p>

//     <div class="overview">
//     <p overview-text> ${overview} </p>
//     </div>
//     <div class="thumb-hero-btn">
//     <button class="button btn-gradient" >Watch trailer</button>
//     <button class="button">More details</button>
//     </div>
//   </div>`;
//   heroRef.innerHTML = a;
// }
