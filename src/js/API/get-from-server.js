import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { CONSTS } from '../models/consts';

function generateOption(addURL, params) {
  return {
    method: 'GET',
    url: `${CONSTS.URL}/${addURL}`,
    params,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${CONSTS.BEARER}`
    }
  }
}

async function axiosGet(options) {
  await axios.request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (err) {
      console.error(err);
      Notify.failure(err.message);

    });
}

//additional functions
export async function getLanguages() {
  const options = generateOption('configuration/languages', { language: 'en' });
  return axiosGet(options);
}


//============================================================================
export async function getTrendingAllDay() {
  const options = generateOption('trending/all/day', { language: 'en-US' });
  return axiosGet(options);
}

export async function getTrendingAllWeek() {
  const options = generateOption('trending/all/week', { language: 'en-US' });
  return axiosGet(options);
}

export async function getMovieUpcoming(page) {
  const options = generateOption('movie/upcoming', { language: 'en-US', page });
  return axiosGet(options);
}

//!!! query must not be empty
export async function getSearchMovie({ query = 'qqq', include_adult = false, primary_release_year, page = 1, region, year }) {
  const options = generateOption('search/movie', { language: 'en-US', query, include_adult, primary_release_year, page, region, year });
  return axiosGet(options);
}

export async function getMovieVideos(movie_id) {
  const options = generateOption(`movie/${movie_id}/videos`, { language: 'en-US' });
  return axiosGet(options);
}

export function getGenreMovieList() {
  const options = generateOption('genre/movie/list', { language: 'en' });
  return axiosGet(options);
}
