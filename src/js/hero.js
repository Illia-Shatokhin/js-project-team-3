import { getTrendingAllDay } from './API/get-from-server.js';
import { getTrailer } from './hero-trailer.js';
import { getMovie } from './modalWindow.js';
import { refs } from './models/refs.js';
import { addHeroStars } from './stars';

const gradient320 =
  'linear-gradient(86.47deg, #111111 33.63%, rgba(17, 17, 17, 0) 76.86%)';
const gradient768 =
  'linear-gradient(81.57deg, #111111 12.76%, rgba(17, 17, 17, 0) 72.65%)';
const gradient1280 =
  'linear-gradient(83.06deg, #111111 11.91%, rgba(17, 17, 17, 0) 73.11%)';

let currentId;

export function createHero(currentPage) {
  getDataHero(currentPage);
}

async function getDataHero(currentPage) {
  try {
    const data = await getTrendingAllDay();
    renderHero(data.results, currentPage);

    error => console.log(error);
  } catch (error) {
    error => console.log(error);
  }
}

function renderHero(data, currentPage) {
  const index = getRandomIndex();

  if (!data) {
    if (currentPage === 'hero/catalog') {
      console.log(data, currentPage);
      addHomeHeroBackgroundStub();
      refs.heroRef.innerHTML = createHomeHeroMarkupStub();
    }

    if (currentPage === 'library') {
      addLibraryHeroBackgroundStub();
      refs.heroRef.innerHTML = createLibraryHeroMarkupStub();
    }
  } else {
    const { id, overview, title, vote_average, backdrop_path } = data[index];
    currentId = id;

    if (!id || !title || !overview || !vote_average || !backdrop_path) {
      return createHero();
    }

    addHeroBackground(backdrop_path);
    refs.heroRef.innerHTML = creatHeroMarkup(overview, title, vote_average);
    addHeroStars(document.querySelector('.reting-stars'), screen.width);
  }

  getElemAddListenersHeroBtn();
}

function getElemAddListenersHeroBtn() {
  const trailerHeroBtn = document.getElementById('trailer-hero-btn');
  trailerHeroBtn.addEventListener('click', () => {
    getTrailer(currentId);
  });

  const detailsHeroBtn = document.getElementById('details-hero-btn');
  detailsHeroBtn.addEventListener('click', () => {
    getMovie(currentId);
  });
}

function getRandomIndex() {
  return Math.floor(Math.random() * 20);
}

function creatHeroMarkup(overview, title, vote_average) {
  return `
    <div class="hero-background-img">1111</div>
    <div class="container hero-container">
     <div class="hero-text-thumb>
       <h2 class="hero-title">${title}</h2>
       <p class="reting-stars">${vote_average.toFixed(1)}</p>
       <div class="overview">
         <p class="overview-text">${overview}</p>
       </div>
       <div class="thumb-hero-btn">
          <button class="button btn-gradient hero-btn" id="trailer-hero-btn">Watch trailer</button>
          <button class="button btn-transparent-dark hero-btn" id="details-hero-btn">More details</button>
        </div>
      </div>
    </div>`;
}

function addHeroBackground(backdrop_path) {
  if (document.documentElement.clientWidth <= 767) {
    refs.heroRef.style.backgroundImage = `${gradient320},
    url(https://www.themoviedb.org/t/p/original/${backdrop_path})`;
  }

  if (
    document.documentElement.clientWidth >= 768 &&
    window.innerWidth <= 1279
  ) {
    refs.heroRef.style.backgroundImage = `${gradient768},
    url(https://www.themoviedb.org/t/p/original/${backdrop_path})`;
  }

  if (document.documentElement.clientWidth >= 1280) {
    refs.heroRef.style.backgroundImage = `${gradient1280},
    url(https://www.themoviedb.org/t/p/original/${backdrop_path})`;
  }
}

function addHomeHeroBackgroundStub() {
  refs.heroRef.classList.add('hero-stub');
}

function createHomeHeroMarkupStub() {
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

function addLibraryHeroBackgroundStub() {
  refs.heroRef.classList.add('hero-library-stub');
}

function createLibraryHeroMarkupStub() {
  return `
    <div class="container hero-container">
      <h2 class="hero-title hero-title-lib-stub">Create Your Dream Cinema</h2>
      <div class="hero-lib-text">
        <p class="overview-text-stub">Is a guide to designing a personalized movie theater experience with the right equipment, customized decor, and favorite films. This guide helps you bring the cinema experience into your own home with cozy seating, dim lighting, and movie theater snacks.</p>
      </div>
    </div>`;
}
