import debounce from 'lodash.debounce';
import { refs } from './models/refs';

export function toHeaderUp() {
  window.addEventListener('scroll', scrollListener);
}

function scrollListener() {
  if (document.documentElement.scrollTop > 0) {
    refs.buttonToHeader.style.display = 'block';
    refs.buttonToHeader.addEventListener(
      'click',
      debounce(buttonScrollClickListener),
      600
    );
  } else {
    refs.buttonToHeader.style.display = 'none';
  }
}

function buttonScrollClickListener() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  refs.buttonToHeader.removeEventListener('scroll', buttonScrollClickListener);
}
