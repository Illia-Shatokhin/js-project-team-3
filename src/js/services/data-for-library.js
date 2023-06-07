import createMovieCard, { openFilmDetails } from '../catalogMovieCard';
import { errorLibraryMarkup, renderError } from '../errortrailer';


createLibraryFromLocalStorage();

//================================================================
function createLibraryFromLocalStorage() {
  const moviePerPage = 9;
  let currentPage = 1;

  const filmsOfLocalStorage = document.querySelector('.my-library-list');
  const btnLoadMore = document.getElementById('btn-load-more');

  const libraryFromLocal = localStorage.getItem('myLibrary')
    ? JSON.parse(localStorage.getItem('myLibrary'))
    : [];
  const libraryForPage = sliceIntoPart(libraryFromLocal, moviePerPage);

  if (libraryFromLocal.length == 0)
    renderError(filmsOfLocalStorage, errorLibraryMarkup);
  else {
    const count =
      libraryFromLocal.length < moviePerPage
        ? libraryFromLocal.length
        : moviePerPage;
    createMovieCard(libraryFromLocal, filmsOfLocalStorage, count);
  }

  if (libraryFromLocal.length > moviePerPage)
    btnLoadMore.style.setProperty('display', 'block');

  filmsOfLocalStorage.addEventListener('click', openFilmDetails);
  btnLoadMore.addEventListener('click', onBtnLoadMore);
}

//================================================================
function sliceIntoPart(arr, n) {
  const res = [];
  for (let i = 0; i < arr.length; i += n) {
    const part = arr.slice(i, i + n);
    res.push(part);
  }
  return res;
}

//================================================================
function onBtnLoadMore(event) {
  const count =
    libraryForPage[currentPage].length < moviePerPage
      ? libraryForPage[currentPage].length
      : moviePerPage;
  createMovieCard(libraryForPage[currentPage], filmsOfLocalStorage, count);
  currentPage++;
  if (currentPage >= libraryForPage.length)
    btnLoadMore.style.setProperty('display', 'none');
}
