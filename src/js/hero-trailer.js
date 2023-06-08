import * as basicLightbox from 'basiclightbox';
import { errorTrailerMarkup } from './errortrailer';
import { getMovieVideos } from './API/get-from-server.js';
import { Loading } from 'notiflix';

const bodyElement = document.querySelector('body');

async function getDataVideo(id) {
  try {
    const data = await getMovieVideos(id);
    return data.results[0];
  } catch (err) {
    console.log(err);
  }
}
export async function getTrailer(id) {
  try {
    Loading.standard('Loading...', {
      backgroundColor: 'rgba(0,0,0,0.8)',
      svgColor: 'rgb(248, 119, 25)',
    });

    const { key } = await getDataVideo(id);
    const instance = basicLightbox.create(succesTrailerMarkup(key), {
      onShow: instance => {
        window.addEventListener('keydown', closeModalOnEsc);
        bodyElement.style.overflow = 'hidden';
      },
      onClose: instance => {
        window.removeEventListener('keydown', closeModalOnEsc);
        bodyElement.style.overflow = 'auto';
      },
    });

    instance.show(() => console.log('lightbox now visible'));
    window.addEventListener('keydown', closeModalOnEsc);
    function closeModalOnEsc(event) {
      if (event.code === 'Escape') {
        instance.close();
        bodyElement.style.overflow = 'auto';
      }
    }
  } catch (error) {
    const instance = basicLightbox.create(errorTrailerMarkup(), {
      onShow: instance => {
        window.addEventListener('keydown', closeModalOnEsc);
        bodyElement.style.overflow = 'hidden';
      },
      onClose: instance => {
        window.removeEventListener('keydown', closeModalOnEsc);
        bodyElement.style.overflow = 'auto';
      },
    });
    instance.show(() => console.log('Lightbox now visible'));
    window.addEventListener('keydown', closeModalOnEsc);
    function closeModalOnEsc(event) {
      if (event.code === 'Escape') {
        instance.close();
        console.log(event);
      }
    }
    instance.element().addEventListener('click', closeModalOnBtn);
    function closeModalOnBtn(event) {
      const target = event.target;
      console.log(target);
      if (target.classList.contains('select-icon') || target.closest('.icon')) {
        instance.close();
        bodyElement.style.overflow = 'auto';
      }
    }
  }
  Loading.remove();
}
function succesTrailerMarkup(key) {
  return `
  <iframe class="iframe" src="https://www.youtube.com/embed/${key}" width="560" height="315" frameborder="0" allowfullscreen></iframe>`;
}
