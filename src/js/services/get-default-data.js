import { getGenreMovieList, getLanguages } from '../API/get-from-server';
import { dataObj } from '../models/data';

export async function getDefaultData() {
  try {
    // debugger
    const data1 = await getGenreMovieList();
    if (data1.genres) dataObj.genreMovieList = data1.genres;

    dataObj.configLanguages = await getLanguages();

    // console.log("🚀 ~ file: get-default-data.js:8 ~ getDefaultData ~ dataObj:", dataObj)
  } catch (error) {
    error => console.error(error);
  }
}

getDefaultData();
