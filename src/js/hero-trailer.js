import axios from 'axios';
import * as basicLightbox from 'basiclightbox'
const BASE_URL = 'https://api.themoviedb.org/3'
const KEY ='2d1d8e2963579243d8e1859d5054f040';

const trailerBtn = document.getElementById('trailer-btn');
const id = 635587;
trailerBtn.addEventListener('click', getTrailer)

async function getTrailer() { 
    
      try {
        const videos = await getVideos(id);
        console.log(videos)
        if (videos.length===0) { throw new Error('Trailer not found')
      }
        const myKey = videos.find(el => el.key)?.key
                       
        const instance = basicLightbox.create(`
        <iframe class="iframe" src="https://www.youtube.com/embed/${myKey}" width="560" height="315" frameborder="0" allowfullscreen></iframe>`);

        instance.show(() => console.log('lightbox now visible'));
      } catch (error) {
     
      }
    }

   async function getVideos(id) {
        const url = `${BASE_URL}/movie/${id}/videos?api_key=${KEY}&language=en-US`;
        return await axios
          .get(url)
          .then(response => {
            return response.data.results;
          })
          .catch(error => {console.log('error')});
      }

      