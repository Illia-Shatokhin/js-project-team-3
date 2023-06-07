import * as basicLightbox from 'basiclightbox';
const teamLink = document.getElementById('our-team-btn');
import { errorTrailerMarkup } from './errortrailer.js';
// const teamBackdrop = document.querySelector('.team__backdrop');
// const teamCloseBtn = document.querySelector('.team__modal-close-btn');

teamLink.addEventListener('click', () =>  {onLinkClick()});

let instance;
function onLinkClick() {const instance = basicLightbox.create(errorTrailerMarkup (),
   {
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
    }}

instance.element().addEventListener('click', closeModalOnBtn);
function closeModalOnBtn(event) {
  const target = event.target;
  console.log(target);
  if (target.classList.contains('select-icon') || target.closest('.icon')) {
    instance.close();
  }
}
}

// function modalTeamMarkup() {return}