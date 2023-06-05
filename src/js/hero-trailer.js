import axios from 'axios'
import * as basicLightbox from 'basiclightbox';
import { errorTrailerMarkup } from './errortrailer';
const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '2d1d8e2963579243d8e1859d5054f040';

const trailerBtn = document.getElementById('trailer-btn');
const id = 635585;
trailerBtn.addEventListener('click', getVideos);;


// async function getTrailer(id) {
//   try {
//     const videos = await getVideos(id);
//     const myKey = videos.find(el => el.key)?.key;

//     const instance = basicLightbox.create(succesTrailerMarkup(myKey), {
//       onShow: instance => {
//         trailerBtn.addEventListener('keydown', closeModalOnEsc);
//       },
//       onClose: instance => {
//         trailerBtn.removeEventListener('keydown', closeModalOnEsc);
//       },
//     });

//     instance.show(() => console.log('lightbox now visible'));
//     window.addEventListener('keydown', closeModalOnEsc);
//     function closeModalOnEsc(event) {
//       if (event.code === 'Escape') {
//         instance.close();
//       }
//     }
//   } catch (error) {
//     const instance = basicLightbox.create(errorTrailerMarkup(), {
//       onShow: instance => {
//         window.addEventListener('keydown', closeModalOnEsc) 
//       },
//       onClose: instance => {
//         window.removeEventListener('keydown', closeModalOnEsc) 
//       },
//     });
//     instance.show(() => console.log("Lightbox now visible"));
//     window.addEventListener('keydown', closeModalOnEsc);
//     function closeModalOnEsc(event) {
//       if (event.code === 'Escape') { 
//         instance.close();
//         console.log(event)
//       }
//     }
//     instance.element().addEventListener('click', closeModalOnBtn);
//     function closeModalOnBtn(event) {
//       const target = event.target;
//       console.log(target);
//       if (target.classList.contains('select-icon') || target.closest('.icon')) {
//         instance.close();
//       }
//     }
//   }
// }

// function succesTrailerMarkup(myKey) {
//   return `
// <iframe class="iframe" src="https://www.youtube.com/embed/${myKey}" width="560" height="315" frameborder="0" allowfullscreen></iframe>`;
// }

async function getVideos(id) {
  const url = `${BASE_URL}/movie/${id}/videos?api_key=${KEY}&language=en-US`;
  return await axios
    .get(url)
    .then(response => {
      return response.data.results;
    })
    .catch(error => {
      console.log('error');
    });
}
