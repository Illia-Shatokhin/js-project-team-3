import * as basicLightbox from 'basiclightbox';
const teamLink = document.querySelector('.footer-btn');
// const teamBackdrop = document.querySelector('.team__backdrop');
// const teamCloseBtn = document.querySelector('.team__modal-close-btn');

teamLink.addEventListener('click', onLinkClick);

function createLightboxWithEvents(content) {
  const instance = basicLightbox.create(content, {
    onShow: instance => {
      window.addEventListener('keydown', closeModalOnEsc);
    },
    onClose: instance => {
      window.removeEventListener('keydown', closeModalOnEsc);
    },
  });

  window.addEventListener('keydown', closeModalOnEsc);

  return instance;
}

function closeModalOnEsc(event) {
  if (event.code === 'Escape') {
    const instance = basicLightbox.get();
    if (instance) {
      instance.close();
    }
  }
}

function closeModalOnBtn(event) {
  const target = event.target;
  if (target.classList.contains('select-icon') || target.closest('.icon')) {
    const instance = basicLightbox.get();
    if (instance) {
      instance.close();
    }
  }
}
