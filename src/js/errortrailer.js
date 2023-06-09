function renderError(elem, markup) {
  elem.style.display = 'block';
  elem.insertAdjacentHTML('beforeend', markup());
}

function errorLibraryMarkup() {
  return `
     <li class="error">
        <p class="errortext">OOPS...</p>
        <p class="errortext">We are very sorry!</p>
        <p class="errortext">You don’t have any movies at your library.</p>
      </li>`;
}

function errorCatalogMarkup() {
  return `
       <li class="error">
        <p class="errortext">OOPS...</p>
        <p class="errortext">We are very sorry!</p>
        <p class="errortext">We don’t have any results matching your search.</p>
      </li>`;
}

function errorTrailerMarkup() {
  return `
  <div class="errortrailer">
      <button class="select-icon" type="button">
        <svg class="icon" width="24" height="24">
          <use href="./img/symbols.svg#close"></use>
        </svg>
      </button>
      <div class="errortrailer-text">
        <p class="errortrailer-text-item">OOPS...</p>
        <p class="errortrailer-text-item">We are very sorry!</p>
        <p class="errortrailer-text-item">But we couldn’t find the trailer.</p>
      </div>
      <picture class="trailer-list-img">
        <source
          srcset="
            ./img/trailer-modal-desk.png    1x,
            ./img/trailer-modal-desk@2x.png 2x
          "
          media="(min-width: 1280px)"
          type="image/png"
          width="363"
        />
        <source
          srcset="
            ./img/trailer-modal-tab.png    1x,
            ./img/trailer-modal-tab@2x.png 2x
          "
          media="(min-width: 768px)"
          type="image/png"
          width="296"
        />
        <source
          srcset="
            ./img/trailer-modal-mob.png     1x,
            ./img/trailer-modal-mob-@2x.png 2x
          "
          media="(max-width: 767px)"
          type="image/png"
          width="159"
        />
        <img
          class="trailer-img"
          src="./img/trailer-modal-mob.png"
          alt="image"
          width="159"
        />
      </picture>
    </div>`;
}

export {
  renderError,
  errorLibraryMarkup,
  errorCatalogMarkup,
  errorTrailerMarkup,
};
