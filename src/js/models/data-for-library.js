import axios from 'axios';
import Notiflix from 'notiflix';
import { getMovieDetails } from '../API/get-from-server';


const filmsOfLocalStorage = document.querySelector('.my-library-films');
const libraryIdsArr = localStorage.getItem('my_fake_library') ? JSON.parse(localStorage.getItem('my_fake_library')) : [];
const libraryArr = [];

console.log('lol', libraryIdsArr);


async function getFromLocalStorage() {
  for (let i = 0; i < libraryIdsArr.length; i++) {
    const el = libraryIdsArr[i];
    console.log(el);
    try {
      const resp = await getMovieDetails(el)
      console.log("🚀 ~ file: data-for-library.js:19 ~ getFromLocalStorage ~ resp:", resp)

      libraryArr.push(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
      Notiflix.Report.warning('Error', 'Not working');
    }
  };
}

if (libraryArr.length == 0) {
  //Here must be Dimas function "OOOps....."
  console.log('No libraries found')
} else {
  console.log('lol');
}
//   createCatalogCardFilms(arr)
//   return `
// <li class="catalog-item" style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 63.48%, rgba(0, 0, 0, 0.9) 92.16%), url(https://image.tmdb.org/t/p/w500${card.poster_path
//     })" id="${card.id}">

// <div class="catalog-card-info-container">
//     <h4 class="catalog-card-title">${card.original_title}</h4>

//   <div class="film-info-container">
//     <p class="catalog-card-description">${card.genre_ids} | ${releaseYear}
//     </p>
//     <div class="rating">${card.vote_average.toFixed(1)}</div>
// </div>
// </div>
// </li>
// `
// }


getFromLocalStorage()


