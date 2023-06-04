import axios from 'axios';
import Notiflix from 'notiflix';
import { getMovieDetails } from '../API/get-from-server';
// import createCatalogMovieCard from './../catalogMovieCard';



const filmsOfLocalStorage = document.querySelector('.my-library-films');
filmsOfLocalStorage.style.cssText =
  ` display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 15px;
  `;

const libraryIdsArr = localStorage.getItem('my_fake_library') ? JSON.parse(localStorage.getItem('my_fake_library')) : [];

// const nameValue = [569094];
// // recive item.id from btn-remove
// export function removeLibraryIdsArr() {

//   const getDatasLocalStorage = JSON.parse(localStorage.getItem("my_fake_library"));
//   const nameValue = getDatasLocalStorage.indexOf(nameValue);
//   if (nameValue !== -1) {
//     getDatasLocalStorage.splice(nameValue, 1);
//     localStorage.setItem("my_fake_library", JSON.stringify(getDatasLocalStorage));
//   }
// }

// removeLibraryIdsArr(nameValue);


const libraryArr = [];

console.log('lol', libraryIdsArr);


async function getFromLocalStorage() {
  for (let i = 0; i < libraryIdsArr.length; i++) {
    const el = libraryIdsArr[i];
    console.log(el);
    try {
      const resp = await getMovieDetails(el)
      console.log("🚀 ~ file: data-for-library.js:19 ~ getFromLocalStorage ~ resp:", resp)

      // createCatalogMovieCard(getMovieDetails, filmsOfLocalStorage, resp.id);

      libraryArr.push(resp.data);
    } catch (err) {

      console.error(err);
      Notiflix.Report.warning('Error', 'Not working');
    }
  };

  if (libraryArr.length == 0) {
    //Here must be Dimas function "OOOps....."
    console.log('No libraries found')
  } else {
    console.log('lol');
  }
}
getFromLocalStorage()


