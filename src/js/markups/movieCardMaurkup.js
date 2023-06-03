export function movieCardMarkup(card, releaseYear) {
  console.log(card.title);
  return `
<li class="catalog-item" id="${card.id}">
<img class="catalog-card-img" src="https://image.tmdb.org/t/p/w500${
    card.poster_path
  }"></img>

<div class="catalog-card-info-container">
  <h4 class="catalog-card-title">${card.original_title}</h4>
  <pcatalog-card-description><span class="card-info-span">${
    card.genre_ids[0].name
  }</span> | <span
      class="card-info-span">${releaseYear}</span>
  </p>
  <div class="rating">${card.vote_average.toFixed(1)}</div>
</div>
</li>
`;
}
