import * as basicLightbox from 'basiclightbox'
const BASE_URL = 'https://api.themoviedb.org/3'
const KEY ='2d1d8e2963579243d8e1859d5054f040';

const trailerBtn = document.getElementById('trailer-btn');
const id = 512478
trailerBtn.addEventListener('click', getTrailer)
async function getTrailer() { 
    console.log(getVideos(id))
      try {
        const videos = await getVideos(id);
        console.log(videos)
        const infoTrailer = videos.find(el => el.name === 'Official Trailer');

        if (!infoTrailer) {
          throw new Error('Trailer not found');
          
        }

        const keyTrailer = infoTrailer.key;
        const instance = basicLightbox.create(`
          <iframe class="iframe" src="https://www.youtube.com/embed/${keyTrailer}" width="560" height="315" frameborder="0"></iframe>
        `);

        instance.show(() => console.log('lightbox now visible'));
      } catch (error) {
    //     const instance = basicLightbox.create(`
    //       <div class="notification-trailer-fail">
    //         <p class="notification-trailer-fail-text">OOPS...<br/> We are very sorry!<br /> But we couldn’t find the trailer.</p>
    //         <button type="button" class="btn-close"><svg class="btn-close--svg" width=24 height=24>
    //         <use href='../../img/sprite.svg#icon-x-button'></use>
    //     </svg>
    //   </button>
    //         <div class="bg-box"></div>
    //       </div>
    //     `);

        // instance.show(() => console.log('lightbox now visible'));
      }
    }

    export async function getVideos(movie_id) {
        const url = `${BASE_URL}/movie/${movie_id}/videos?api_key=${KEY}&language=en-US`;
        return await axios
          .get(url)
          .then(response => {
            return response.data.results;
          })
          .catch(error => {});
      }
    