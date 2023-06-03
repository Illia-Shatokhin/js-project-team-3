const axios = require('axios').default;

const URL_DETAIL = 'https://api.themoviedb.org/3/movie/movie_id';
const API_KEY = '5788acd6bec4b8c2fc2e238d02649a74';

const options = {
  method: 'GET',
  params: {
    api_key: API_KEY,
    language: 'en-US',
    append_to_response: 'images',
  },
  headers: {
    accept: 'application/json',
  },
};

async function fetchMovieDetails() {
  try {
    const response = await axios.get(URL_DETAIL, options);
    const { data } = response;
    console.log(data); // Вивести отримані дані в консоль
    return data;
  } catch (error) {
    console.error('Помилка запиту:', error);
  }
}

fetchMovieDetails();
// try {
//   const response = await axios(options);
//   const { data } = response;
//   // Отримання необхідних даних про фільм з об'єкта 'data'
//   const { details, genre, popularity, vote } = data;
//   // Використання отриманих даних
//   console.log('Деталі фільму:', details);
//   console.log('Жанр фільму:', genre);
//   console.log('Популярність фільму:', popularity);
//   console.log('Голосування фільму:', vote);
// } catch (error) {
//   console.error('Помилка запиту:', error);
// }
// export default class GalleryService {
//   constructor() {
//     this.URL = 'https://pixabay.com/api/';
//     this.API_KEY = '36443440-862a7ce0430fc541f34c4596c';
//     this.perPage = 40;
//     this.page = 1;
//     this.searchQuery = ''
//   }
//   async getImages() {
//     const params = {
//       key: this.API_KEY,
//       //  q: query,
//       q: this.searchQuery,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: true,
//        per_page: this.perPage,
//        page: this.page
//     }
//     try {
//       const response = await axios.get(`${this.URL}`, { params });
//       const { hits, totalHits } = response.data;
//       return { hits, totalHits };
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   resetPage() {
//     this.page = 1;
//   }

//   incrementPage() {
//     this.page += 1;
//   }
// }