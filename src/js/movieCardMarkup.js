export default function createMovieCardMarkup({ data }, catalogCard) {
  // console.log(data.results);
  let releaseYear = 'No data available';
  if (!!data.results.release_date) {
    releaseYear = data.results.release_date.split('-')[0];
  }
  const cardMarkup = data.results
    .map(
      card => `
      <li class="catalog-item" id="${card.id}">
      <img class="catalog-card-img" href="${card.backdrop_path}"></img>

      <div class="catalog-card-info-container">
        <h4 class="catalog-card-title">${card.title}</h4>
        <pcatalog-card-description><span class="card-info-span">${card.genre_ids}</span> | <span
            class="card-info-span">${releaseYear}</span>
        </p>
        <div class="rating">${card}</div>
      </div>
    </li>
    `
    )
    .join('');

  catalogCard.insertAdjacentHTML('beforeend', cardMarkup);
}
