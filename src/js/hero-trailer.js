import * as basicLightbox from 'basiclightbox';
import { errorTrailerMarkup } from './errortrailer';
import { getMovieVideos } from './API/get-from-server.js';
import { Loading } from 'notiflix';
import { refs } from './models/refs';

refs.bodyElement = document.querySelector('body');

async function getDataVideo(id) {
  try {
    const data = await getMovieVideos(id);
    return data.results;
  } catch (err) {
    console.log(err);
  }
}

function createInstanceAndShowTrailer(key) {
  const instance = basicLightbox.create(succesTrailerMarkup(key), {
    onShow: instance => {
      window.addEventListener('keydown', closeModalOnEsc);
      refs.bodyElement.style.overflow = 'hidden';
    },
    onClose: instance => {
      window.removeEventListener('keydown', closeModalOnEsc);
      refs.bodyElement.style.overflow = 'auto';
    },
  });

  instance.show(() => {});

  window.addEventListener('keydown', closeModalOnEsc);

  function closeModalOnEsc(event) {
    if (event.code === 'Escape') {
      instance.close();
      refs.bodyElement.style.overflow = 'auto';
    }
  }
}

export async function getTrailer(id) {
  try {
    Loading.standard('Loading...', {
      backgroundColor: 'rgba(0,0,0,0.8)',
      svgColor: 'rgb(248, 119, 25)',
    });

    const video = await getDataVideo(id);
    const officialTrailer = video.find(el => el.name === "Official Trailer");
    const selectedTrailer = officialTrailer || video[0];
    const { key } = selectedTrailer;

    createInstanceAndShowTrailer(key);
  } catch (error) {
    const instance = basicLightbox.create(errorTrailerMarkup(), {
      onShow: instance => {
        window.addEventListener('keydown', closeModalOnEsc);
        refs.bodyElement.style.overflow = 'hidden';
      },
      onClose: instance => {
        window.removeEventListener('keydown', closeModalOnEsc);
        refs.bodyElement.style.overflow = 'auto';
      },
    });

    instance.show(() => {});

    window.addEventListener('keydown', closeModalOnEsc);

    function closeModalOnEsc(event) {
      if (event.code === 'Escape') {
        instance.close();
        // console.log(event);
      }
    }

    instance.element().addEventListener('click', closeModalOnBtn);

    function closeModalOnBtn(event) {
      const target = event.target;
      // console.log(target);
      if (target.classList.contains('select-icon') || target.closest('.icon')) {
        instance.close();
        refs.bodyElement.style.overflow = 'auto';
      }
    }
  }

  Loading.remove();
}

function succesTrailerMarkup(key) {
  return `
  <div class="watch-modal__content"> <iframe class="watch-modal__iframe" src="https://www.youtube.com/embed/${key}" frameborder="0" allowfullscreen></iframe></div>`;
}
