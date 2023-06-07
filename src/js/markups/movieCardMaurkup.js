function movieCardMarkup(card, releaseYear, originalTitle, genreNames) {
  let pic = `url(./img/trailer-modal-desk.png)`;
  let backgroundSize = '; background-size: contain;';

  if (card.poster_path) {
    pic = `url(https://image.tmdb.org/t/p/w500${card.poster_path})`;
    backgroundSize = '';
  }

  return `
  <li class="catalog-item" style="background-image: linear-gradient(180deg, 
    rgba(0, 0, 0, 0) 63.48%, 
    rgba(0, 0, 0, 0.9) 92.16%), 
    ${pic}${backgroundSize}" id="${card.id}">

    <div class="catalog-card-info-container">
      <p class="catalog-card-title">${originalTitle}</p>
      <div class="film-info-container">
        <p class="catalog-card-description">${genreNames} | ${releaseYear}</p>
        <div class="catalog-card-rating"></div>
      </div>
    </div>
  </li>
`;
}
export { movieCardMarkup };
