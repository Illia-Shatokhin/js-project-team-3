import { getTrendingAllDay } from './API/get-from-server.js';
import { getTrailer } from './hero-trailer.js';
import { getMovie } from './modalWindow.js';

const heroRef = document.querySelector('.hero');

const gradient320 =
  'linear-gradient(86.47deg, #111111 33.63%, rgba(17, 17, 17, 0) 76.86%)';
const gradient768 =
  'linear-gradient(81.57deg, #111111 12.76%, rgba(17, 17, 17, 0) 72.65%)';
const gradient1280 =
  'linear-gradient(83.06deg, #111111 11.91%, rgba(17, 17, 17, 0) 73.11%)';

let currentId;

export function createHero() {
  getDataHero();
}

async function getDataHero() {
  try {
    const data = await getTrendingAllDay();
    renderHero(data.results);
    // !------------------
    // console.log('Ламаю запит');
    // !--------------
  } catch (error) {
    error => console.log(error);
  }

  // * Це ще в експеременті------------------
  const watchTrailerHeroBtn = document.getElementById('trailer-hero-btn');
  watchTrailerHeroBtn.addEventListener('click', () => {
    getTrailer(currentId);
  });

  const showDetailsHeroBtn = document.getElementById('details-hero-btn');
  showDetailsHeroBtn.addEventListener('click', () => {
    getMovie(currentId);
  });

  // *---------------------------
}

function renderHero(data) {
  const index = getRandomIndex();

  const { id, overview, title, vote_average, backdrop_path } = data[index];

  console.log(data[index]);
  // heroRef.setAttribute('id', `${id}`);
  currentId = id;
  // ?---------------------тест заглушки----------------
  // addHeroBackgroundStub();
  // heroRef.innerHTML = creatHeroMarkupStub(overview, title, vote_average);
  // ?----------------------------------

  if (!data) {
    addHeroBackgroundStub();
    heroRef.innerHTML = creatHeroMarkupStub(overview, title, vote_average);
  } else {
    // !----------Перевірка на погану карточку - якщо не всі дані перезапускаємо функцію знову, шукаємо іншу-------
    if (
      id === undefined ||
      title === undefined ||
      overview === undefined ||
      vote_average === undefined ||
      backdrop_path === undefined
    ) {
      return createHero();
    }
    // !-----------------------------------------------------------------

    addHeroBackground(backdrop_path);
    heroRef.innerHTML = creatHeroMarkup(overview, title, vote_average);
  }
}

function creatHeroMarkup(overview, title, vote_average) {
  return `
    <div class="container hero-container">
      <h2 class="hero-title">${title}</h2>
      <p class="reting-stars">${vote_average.toFixed(1)}</p>
      <div class="overview">
        <p class="overview-text">${overview}</p>
      </div>
      <div class="thumb-hero-btn">
        <button class="button btn-gradient hero-btn" id="trailer-hero-btn">Watch trailer</button>
        <button class="button btn-transparent-dark hero-btn" id="details-hero-btn">More details</button>
      </div>
    </div>`;
}

function getRandomIndex() {
  return Math.floor(Math.random() * 20);
}

function addHeroBackground(backdrop_path) {
  if (document.documentElement.clientWidth <= 767) {
    heroRef.style.backgroundImage = `${gradient320},
    url(https://www.themoviedb.org/t/p/original/${backdrop_path})`;
  }

  if (
    document.documentElement.clientWidth >= 768 &&
    window.innerWidth <= 1279
  ) {
    heroRef.style.backgroundImage = `${gradient768},
    url(https://www.themoviedb.org/t/p/original/${backdrop_path})`;
  }

  if (document.documentElement.clientWidth >= 1280) {
    heroRef.style.backgroundImage = `${gradient1280},
    url(https://www.themoviedb.org/t/p/original/${backdrop_path})`;
  }
}

function addHeroBackgroundStub() {
  heroRef.classList.add('hero-stub');
}

function creatHeroMarkupStub() {
  let overviewTextStub = '';

  if (document.documentElement.clientWidth <= 767) {
    overviewTextStub =
      "Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers.";
  }

  if (document.documentElement.clientWidth >= 768) {
    overviewTextStub =
      "Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers. Decorate your space, choose your films, and stock up on snacks for the full experience.";
  }

  return `
    <div class="container hero-container">
      <h2 class="hero-title hero-title-stub">Let’s Make Your Own Cinema</h2>
      <div class="overview">
        <p class="overview-text-stub">${overviewTextStub}</p>
      </div>
      <div class="thumb-hero-btn">
        <a href="./my-library.html" class="button btn-gradient hero-btn">Get Started</a>
      </div>
    </div>`;
}
