import { getTrendingAllDay } from './API/get-from-server.js';

const heroRef = document.querySelector('.hero');
createHero();

const gradient1280 =
  'linear-gradient(83.06deg, #111111 11.91%, rgba(17, 17, 17, 0) 73.11%)';
const gradient768 =
  'linear-gradient(81.57deg, #111111 12.76%, rgba(17, 17, 17, 0) 72.65%)';
const gradient320 =
  'linear-gradient(86.47deg, #111111 33.63%, rgba(17, 17, 17, 0) 76.86%)';

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

  addHeroBackground(backdrop_path);

  heroRef.innerHTML = creatHeroMarkup(overview, original_title, vote_average);
}

function creatHeroMarkup(overview, original_title, vote_average) {
  return `
    <div class="container hero-container">
      <h2 class="hero-title">${original_title}</h2>
      <p class="reting-stars">${vote_average.toFixed(1)}</p>
      <div class="overview">
        <p overview-text> ${overview} </p>
      </div>
      <div class="thumb-hero-btn">
        <button class="button btn-gradient">Watch trailer</button>
        <button class="button btn-transparent-dark">More details</button>
         <button class="button btn-gradient">Get Started</button>
      </div>
    </div>`;
}

function getRandomIndex() {
  return Math.floor(Math.random() * 20);
}

function addHeroBackground(backdrop_path) {
  if (window.innerWidth <= 767) {
    heroRef.style.backgroundImage = `${gradient320},
    url(https://www.themoviedb.org/t/p/original/${backdrop_path})`;
  }

  if (window.innerWidth >= 768 && window.innerWidth <= 1279) {
    heroRef.style.backgroundImage = `${gradient768},
    url(https://www.themoviedb.org/t/p/original/${backdrop_path})`;
  }

  if (window.innerWidth >= 1280) {
    heroRef.style.backgroundImage = `${gradient1280},
    url(https://www.themoviedb.org/t/p/original/${backdrop_path})`;
  }
}
