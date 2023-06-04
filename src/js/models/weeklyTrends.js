import { getTrendingAllWeek } from "../API/get-from-server";
// import createCatalogMovieCard  from "./../catalogMovieCard";

 
// // Приклад виклику API для отримання деталей фільму за ідентифікатором
// async function getMovieTrendWeek() {
//   try {
//     const movieDetails = await getTrendingAllWeek();
//     console.log("🚀 ~ file: weeklyTrends.js:8 ~ getMovieTrendWeek ~ movieDetails:", movieDetails)
    
//     // Обробка деталей фільму

//     createCatalogMovieCard()
    
//   } catch (error) {
//     console.error(error);
//   }
// }
// // // Приклад виклику функцій для використання бібліотеки фільмів
// getMovieTrendWeek();






// Ratings
const filmCard = document.querySelector('.film-card');

function renderStars(rating) {
  const integer = Math.round(rating);
  const evenFullStars = integer % 2 === 0 ? integer/2 : (integer - 1)/2;
  const diff = Math.round(10 - rating);
  const evenEmptyStars = diff % 2 === 0 ? diff/2 : (diff - 1)/2;
  const halfStar = diff % 2 === 0 ? false : true;

  for (let index = 0; index < evenFullStars; index++) {
    filmCard.insertAdjacentHTML('beforeend', starsMarkup(1));
    
  }
  halfStar ? filmCard.insertAdjacentHTML('beforeend', starsMarkup(0.5)) : 0;

    for (let index = 0; index < evenEmptyStars; index++) {
    filmCard.insertAdjacentHTML('beforeend', starsMarkup(0));
    
  }

}

renderStars(10);

console.log(filmCard);

function starsMarkup(whichStar) {
  return `<p class="star-text" >${whichStar}</p>`;
}



// const ratings = document.querySelectorAll('.rating');
// console.log(ratings);
// if (ratings.length > 0) {
//   initRatings();
// }

// // Main function
// function initRatings() {
//   let ratingActive, ratingValue;

//   // Бігаємо по всіх рейтингах на сторінці
//   for (let index = 0; index < ratings.length; index++) {
//     const rating = ratings[index];
//     initRating(rating);
//   }

//   // Ініціалізація конкретного рейтинга
//   function initRating(rating) {
//     initRatingVars(rating);

//     setRatingActiveWidth();

//     if (rating.classList.contains('rating_set')) {
//       setRating(rating);
//     }
//   }

//   // Ініціалізація змінних
//   function initRatingVars(rating) {
//     ratingActive = rating.querySelector('.rating_active');
//     ratingValue = rating.querySelector('.rating_value');
//   }

//   // Змінюємо ширину активних зірок

//   function setRatingActiveWidth() {
//     const ratingActiveWidth = (parseFloat(ratingValue.innerHTML) / 10) * 100;
//     ratingActive.style.width = `${ratingActiveWidth}%`;
//   }

//   // Можливість оцінювати

//   function setRating(rating) {
//     const ratingItems = rating.querySelectorAll('.rating_item');
//     for (let index = 0; index < ratingItems.length; index++) {
//       const ratingItem = ratingItems[index];
//       ratingItem.addEventListener('mouseenter', function (e) {
//         // Оновлення змінних
//         initRatingVars(rating);
//         // Оновлення активних зірок
//         setRatingActiveWidth();
//       });
//       ratingItem.addEventListener('mouseleave', function (e) {
//         // Оновлення активних зірок
//         setRatingActiveWidth();
//       });
//       ratingItem.addEventListener('click', function (e) {
//         // Оновлення змінних
//         initRatingVars(rating);

//         if (rating.dataset.ajax) {
//           // Відправка на сервер
//           setRatingValue(ratingItem.value, rating);
//         } else {
//           // Відображення вказаної оцінки
//           ratingindex = ratingValue.innerHTMLValue.innerHTML = index + 1;
//           setRatingActiveWidth();
//         }
//       });
//     }
//   }
// }
