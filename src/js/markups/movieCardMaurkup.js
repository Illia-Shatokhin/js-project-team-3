export function movieCardMarkup(card, releaseYear) {
  return `
  <li class="catalog-item" style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 63.48%, rgba(0, 0, 0, 0.9) 92.16%), url(https://image.tmdb.org/t/p/w500${
    card.poster_path
  })" id="${card.id}">

<div class="catalog-card-info-container">
    <p class="catalog-card-title">${card.original_title}</p>

  <div class="film-info-container">
    <p class="catalog-card-description">${card.genre_ids} | ${releaseYear}
    </p>
    <div class="rating">${card.vote_average.toFixed(1)}</div>
</div>
</div>
</li>
`;
}
