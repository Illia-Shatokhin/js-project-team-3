import axios from 'axios';
import Notiflix from 'notiflix';
import { getMovieDetails } from '../API/get-from-server';
import createMovieCard, { openFilmDetails } from './../catalogMovieCard';
import { errorLibraryMarkup, renderError } from './../errortrailer';
import { getMovie } from '/js/modalWindow.js';




const filmsOfLocalStorage = document.querySelector('.my-library-list');

const btnLoadMore = document.getElementById('btn-load-more');
console.log(btnLoadMore);

const libraryFromLocal = localStorage.getItem('myLibrary') ? JSON.parse(localStorage.getItem('myLibrary')) : []

if (libraryFromLocal.length == 0) {
  renderError(filmsOfLocalStorage, errorLibraryMarkup)
} else {
  createMovieCard(libraryFromLocal, filmsOfLocalStorage, libraryFromLocal.length < 3 ? libraryFromLocal.length : 3);
}

if (libraryFromLocal.length > 3) {
  btnLoadMore.style.setProperty("display", "block");
}

filmsOfLocalStorage.addEventListener('click', openFilmDetails);

btnLoadMore.addEventListener('click', loadMore)


function loadMore() {

}

