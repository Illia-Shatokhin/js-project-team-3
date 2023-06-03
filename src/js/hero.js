import { getTrendingAllDay } from './API/get-from-server.js';

const heroRef = document.querySelector('.hero');
createHero();

export default function createHero() {
  getDataHero();
}

async function getDataHero() {
  try {
    const data = await getTrendingAllDay();
    renderHero(data.results);
  } catch (error) {
    error => console.log(error);
  }
}

function renderHero(data) {
  const index = getRandomIndex();

  const { id, overview, original_title, vote_average, backdrop_path } =
    data[index];
  heroRef.setAttribute('id', `${id}`);

  heroRef.style.backgroundImage = `linear-gradient(86.47deg, #111111 33.63%, rgba(17, 17, 17, 0) 76.86%),
    url(https://www.themoviedb.org/t/p/original/${backdrop_path})`;

  heroRef.innerHTML = creatHeroMarkup(overview, original_title, vote_average);
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
        <button class="button btn-transparent-dark">More details</button>
      </div>
    </div>`;
}

function getRandomIndex() {
  return Math.floor(Math.random() * 20);
}
