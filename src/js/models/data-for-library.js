import axios from 'axios';
import Notiflix from 'notiflix';
import { getMovieDetails } from '../API/get-from-server';
import createMovieCard, { openFilmDetails } from './../catalogMovieCard';
import { errorLibraryMarkup, renderError } from './../errortrailer';
import { getMovie } from '/js/modalWindow.js';


const moviePerPage = 3;

const filmsOfLocalStorage = document.querySelector('.my-library-list');

const btnLoadMore = document.getElementById('btn-load-more');
console.log(btnLoadMore);

const libraryFromLocal = localStorage.getItem('myLibrary') ? JSON.parse(localStorage.getItem('myLibrary')) : []

if (libraryFromLocal.length == 0) {
  renderError(filmsOfLocalStorage, errorLibraryMarkup);
} else {
  createMovieCard(libraryFromLocal, filmsOfLocalStorage, libraryFromLocal.length < moviePerPage ? libraryFromLocal.length : moviePerPage);
}

if (libraryFromLocal.length > moviePerPage) {
  btnLoadMore.style.setProperty("display", "block");
}

filmsOfLocalStorage.addEventListener('click', openFilmDetails);



let PAGE = 1

const libraryForPage = sliceIntoPart(libraryFromLocal, moviePerPage);

console.log('111', libraryForPage);

btnLoadMore.addEventListener('click', function () {

  createMovieCard(libraryForPage[PAGE], filmsOfLocalStorage, libraryForPage[PAGE].length < moviePerPage ? libraryForPage[PAGE].length : moviePerPage);

  console.log('load:', libraryForPage[PAGE]);

  PAGE++
  if ([PAGE] >= libraryForPage.length) { btnLoadMore.style.setProperty("display", "none"); }
});


function sliceIntoPart(arr, n) {
  const res = [];
  for (let i = 0; i < arr.length; i += n) {
    const part = arr.slice(i, i + n);
    res.push(part);
  }
  return res;
}
