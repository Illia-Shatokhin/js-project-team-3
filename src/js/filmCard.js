import axios from 'axios';
import createMovieCardMarkup from './movieCardMarkup';
import { getTrendingAllWeek } from './API/get-from-server';

// function getWeeklyTrands() {
//   const options = {
//     method: 'GET',
//     url: 'https://api.themoviedb.org/3/trending/all/week',
//     params: { language: 'en-US' },
//     headers: {
//       accept: 'application/json',
//       Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGE4NzU4ZWI0MGUyMjEwMTM3MDlkNjMwNzlmZDljNCIsInN1YiI6IjY0NzlhODg5ZTMyM2YzMDBhN2Q0ZGYzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X0uZkuPOvO6LdN-fYieV72t0jFMKCqqFgnPHTxpIpdg',
//     },
//   };

//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data, 'response');
//       createMovieCardMarkup(response, catalogCard);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// }

// getWeeklyTrands();
// const catalogCard = document.querySelector('.catalog-list');

const weeklyTrendsData = getTrendingAllWeek().then(data => {
  console.log(data);
});
createMovieCardMarkup(weeklyTrendsData, catalogCard);
export { catalogCard };
