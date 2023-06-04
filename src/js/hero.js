import { getTrendingAllDay } from './API/get-from-server.js';

const heroRef = document.querySelector('.hero');

const gradient320 =
  'linear-gradient(86.47deg, #111111 33.63%, rgba(17, 17, 17, 0) 76.86%)';
const gradient768 =
  'linear-gradient(81.57deg, #111111 12.76%, rgba(17, 17, 17, 0) 72.65%)';
const gradient1280 =
  'linear-gradient(83.06deg, #111111 11.91%, rgba(17, 17, 17, 0) 73.11%)';

// const gradient320HomeStub =
//   'linear-gradient(86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%)';
// const gradient768HomeStub =
//   'linear-gradient(82.55deg, #111111 39.6%, rgba(17, 17, 17, 0) 72.95%)';
// const gradient1280HomeStub =
//   'linear-gradient(83.16deg, #111111 36.85%, rgba(17, 17, 17, 0) 60.05%)';

// const gradient320LibStub =
//   'linear-gradient(79.49deg, #111111 34.1%, rgba(17, 17, 17, 0) 64.67%)';
// const gradient768LibStub =
//   'linear-gradient(77.77deg, #111111 33.58%, rgba(17, 17, 17, 0) 71.57%)';
// const gradient1280LibStub =
//   'linear-gradient(79.39deg, #111111 32.37%, rgba(17, 17, 17, 0) 72.02%)';

export function createHero() {
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

  if (!data) {
    addHeroBackgroundStub();
    heroRef.innerHTML = creatHeroMarkupStub(
      overview,
      original_title,
      vote_average
    );
  } else {
    addHeroBackground(backdrop_path);
    heroRef.innerHTML = creatHeroMarkup(overview, original_title, vote_average);
  }
}

function creatHeroMarkup(overview, original_title, vote_average) {
  return `
    <div class="container hero-container">
      <h2 class="hero-title">${original_title}</h2>
      <p class="reting-stars">${vote_average.toFixed(1)}</p>
      <div class="overview">
        <p class="overview-text">${overview}</p>
      </div>
      <div class="thumb-hero-btn">
        <button class="button btn-gradient hero-btn">Watch trailer</button>
        <button class="button btn-transparent-dark hero-btn">More details</button>
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
//! Перевірити адресу картинки
function addHeroBackgroundStub() {
  if (window.innerWidth <= 320) {
    heroRef.style.backgroundImage = `${gradient320HomeStub},
    url(./public/img/hero.mob.jpeg})`;
  }

  if (window.innerWidth >= 321 && window.innerWidth <= 768) {
    heroRef.style.backgroundImage = `${gradient768},
    url(https://www.themoviedb.org/t/p/original/${backdrop_path})`;
  }

  if (window.innerWidth >= 769) {
    heroRef.style.backgroundImage = `${gradient1280},
    url(https://www.themoviedb.org/t/p/original/${backdrop_path})`;
  }
}

function creatHeroMarkupStub() {
  return `
    <div class="container hero-container">
      <h2 class="hero-title">Let’s Make Your Own Cinema</h2>
      <div class="overview">
        <p overview-text>Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers. Decorate your space, choose your films, and stock up on snacks for the full experience.</p>
      </div>
      <div class="thumb-hero-btn">
        <button class="button btn-gradient hero-btn">Get Started</button>
      </div>
    </div>`;
}
