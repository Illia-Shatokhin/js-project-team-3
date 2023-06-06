import * as basicLightbox from 'basiclightbox';
import { getMovieVideos } from './API/get-from-server.js';
import { errorTrailerMarkup } from './errortrailer.js';


async function getDataVideo(id) {
  try {
    const data = await getMovieVideos(id);
    return data.results;
  } catch (err) {
    console.log(err);
  }
}
export async function getTrailer(id) {
  try {
       const videos = await getDataVideo(id);
    const myKey = videos.find(el => el.key)?.key;

    const instance = basicLightbox.create(succesTrailerMarkup(myKey), {
      onShow: instance => {
        trailerBtn.addEventListener('keydown', closeModalOnEsc);
      },
      onClose: instance => {
        trailerBtn.removeEventListener('keydown', closeModalOnEsc);
      },
    });

    instance.show(() => console.log('lightbox now visible'));
    window.addEventListener('keydown', closeModalOnEsc);
    function closeModalOnEsc(event) {
      if (event.code === 'Escape') {
        instance.close();
      }
    }
  } catch (error) {
    const instance = basicLightbox.create(errorTrailerMarkup(), {
      onShow: instance => {
        window.addEventListener('keydown', closeModalOnEsc);
      },
      onClose: instance => {
        window.removeEventListener('keydown', closeModalOnEsc);
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
      }
    }
  }
}

function succesTrailerMarkup(myKey) {
  return `
<iframe class="iframe" src="https://www.youtube.com/embed/${myKey}" width="560" height="315" frameborder="0" allowfullscreen></iframe>`;
}
