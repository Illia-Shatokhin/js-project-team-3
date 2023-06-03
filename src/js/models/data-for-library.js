import axios from 'axios';
import Notiflix from 'notiflix';

const filmsOfLocalStorage = document.querySelector('.films-gallery-of-LS');
const libraryIdsArr = localStorage.getItem('my_fake_library') ? JSON.parse(localStorage.getItem('my_fake_library')) : [];
const libraryArr = [];

console.log('lol', libraryIdsArr);


async function getFromLocalStorage(){
  for (let i = 0; i < libraryIdsArr.length; i++) {
    const el = libraryIdsArr[i];
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/'+ el,
      params: {language: 'en-US'},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDA1YjBiM2U3NTY1ZjNhMDExMzI5NGY4ZGY4MmU4MyIsInN1YiI6IjY0NzlhNGU2Y2Y0YjhiMDBhODc2ZDYyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aPbZXdUIg_F2N_WcjE96EjI194MyTtqSYooEr8JNIi8'
      }
    };

    /* await axios.request(options)
    .then(function (response) {
      Notiflix.Report.info(response.data);
      libraryArr.push(response.data);
      
    })
    .catch(function(err){
      Notiflix.Report.warning('Error', 'Not working');
    }) */

    try {
      const resp = await axios.request(options);
      console.log(resp.data);
      libraryArr.push(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
        Notiflix.Report.warning('Error', 'Not working');
    }

  }

if(libraryArr.length == 0){
    console.log('No libraries found')
}else{
    //MarkUpFilmsOfLocalStorage(libraryArr);
}
}
getFromLocalStorage()


