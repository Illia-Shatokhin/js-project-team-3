import { getTrendingAllWeek } from '../API/get-from-server';
import { refs } from './refs';
import createMovieCard from '../catalogMovieCard';
import { openFilmDetails } from '../catalogMovieCard';
import { errorCatalogMarkup, renderError } from './../errortrailer';

export default async function weeklyTrends() {
  try {
    const data = await getTrendingAllWeek();

    screen.width <= 767
      ? createMovieCard(data.results, refs.weeklyLinks, 1)
      : createMovieCard(data.results, refs.weeklyLinks, 3);
    refs.weeklyLinks.addEventListener('click', openFilmDetails);
  } catch (error) {
    console.error(error);
    renderError(refs.weeklyLinks, errorCatalogMarkup);
  }
}
