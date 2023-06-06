import axios from 'axios';
import Notiflix from 'notiflix';
import { getMovieDetails } from '../API/get-from-server';
import createMovieCard from './../catalogMovieCard';
import { errorLibraryMarkup, renderError } from './../errortrailer';

//add to css

const filmsOfLocalStorage = document.querySelector('.my-library-list');
filmsOfLocalStorage.style.cssText = ` display: flex;  
    flex-flow: row wrap;
    justify-content: center;
    gap: 15px;
  `;

const libraryFromLocal = localStorage.getItem('myLibrary')
  ? JSON.parse(localStorage.getItem('myLibrary'))
  : [];

if (libraryFromLocal.length == 0) {
  renderError(filmsOfLocalStorage, errorLibraryMarkup);
} else {
  createMovieCard(
    libraryFromLocal,
    filmsOfLocalStorage,
    libraryFromLocal.length < 9 ? libraryFromLocal.length : 9
  );
  //if libraryFromLocal.length > 9 create load more btn...
}
