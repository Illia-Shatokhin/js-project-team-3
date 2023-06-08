import debounce from 'lodash.debounce';
import createMovieCard, { openFilmDetails } from '../catalogMovieCard';
import { errorLibraryMarkup, renderError } from '../errortrailer';
import { dataObj } from '../models/data';
import { refs } from '../models/refs';
import { getDefaultData } from './get-default-data';

if (document.title === 'My Library') {
  dataObj.selectGenre = "";
  createLibraryFromLocalStorage();
  refs.selectLibrary.addEventListener("change", debounce(onSelectForm, 100));
}

//================================================================
function onSelectForm(event) {
  //set attribute to filter 
  refs.selectLibrary.dataset.library = event.target.value;
  createLibraryFromLocalStorage();
  
  if (event.target.value)
    refs.btnLoadMore.style.setProperty('display', 'none');
}

//================================================================
function filterLibraryGenre(arr, idGenre) {
  if (!idGenre) return arr;
  return arr.filter(el => el.genre_ids.includes(+idGenre))
}

//================================================================
export function createLibraryFromLocalStorage() {
  dataObj.moviePerPage = 9;
  dataObj.currentPage = 1;

  dataObj.libraryFromLocal = localStorage.getItem('myLibrary')
    ? JSON.parse(localStorage.getItem('myLibrary'))
    : [];


  if (dataObj.libraryFromLocal.length == 0) { 
    refs.filmsOfLocalStorage.innerHTML = '';
    document.querySelector(".my-library-wrap-select").style.setProperty('display', 'none');
    renderError(refs.filmsOfLocalStorage, errorLibraryMarkup);
  }
    
  else {
    // filter 
    const idGenre = refs.selectLibrary.dataset.library;
    const filteredLibrary = filterLibraryGenre(dataObj.libraryFromLocal, idGenre)
    refs.selectLibrary.dataset.filter = filteredLibrary.length;

    const count = filteredLibrary.length < dataObj.moviePerPage ? filteredLibrary.length : dataObj.moviePerPage;
    
    document.querySelector(".my-library-wrap-select").style.setProperty('display', 'block');
    renderSelect();
    createMovieCard(filteredLibrary, refs.filmsOfLocalStorage, count);
  }

  if (dataObj.libraryFromLocal.length > dataObj.moviePerPage && refs.selectLibrary.dataset.filter > dataObj.moviePerPage)
    refs.btnLoadMore.style.setProperty('display', 'block');

  refs.filmsOfLocalStorage.addEventListener('click', openFilmDetails);
  refs.btnLoadMore.addEventListener('click', onBtnLoadMore);
}

//================================================================
function onBtnLoadMore(event) {
  const libraryForPage = sliceIntoPart(dataObj.libraryFromLocal, dataObj.moviePerPage);
  const count =
    libraryForPage[dataObj.currentPage].length < dataObj.moviePerPage
      ? libraryForPage[dataObj.currentPage].length
      : dataObj.moviePerPage;

  createMovieCard(libraryForPage[dataObj.currentPage], refs.filmsOfLocalStorage, count);

  dataObj.currentPage++;
  
  if (dataObj.currentPage >= libraryForPage.length && dataObj.moviePerPage >= refs.selectLibrary.dataset.filter)
    refs.btnLoadMore.style.setProperty('display', 'none');
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
async function renderSelect() {

  await getDefaultData();

  const defMarkUp = `<option class="placeholder" value="">--Genre--</option>`
  const markUp = defMarkUp + dataObj.genreMovieList.map(el => {
    let selected = refs.selectLibrary.dataset.library == el.id ? `selected` : ``;
    return `<option value="${el.id}" ${selected}>${el.name}</option>`
  }).join('');
  refs.selectLibrary.innerHTML = markUp;
}
