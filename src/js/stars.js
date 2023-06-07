// Клас для виклику зірочок

// import ReviewStars from './js/stars';
// const stars = new ReviewStars({
//   totalStars: 5,
//   averageRating: 3.8,
//   size: 24,
//   filled: false,
//   insertTo: {
//     element: document.querySelector('.weekly-section').firstElementChild,
//     position: "afterbegin"
//   }
// });
// document.addEventListener("click", () => stars.restart());
// setTimeout(() => stars.restart(), 1000);

export default class ReviewStars {
  /**
   * Create a group of SVG stars.
   * @param {Number} totalStars
   * @param {Number} averageRating
   * @param {Boolean} filled
   * @param {String} insertTo.position - "beforebegin" | "afterbegin" | "beforeend" | "afterend"
   * @param {HTMLElement} insertTo.element
   */
  constructor({
    totalStars = 5,
    averageRating = 3.5,
    filled = true,
    size = 16,
    stagger = 0.005,
    insertTo = {
      element: document.body,
      position: 'afterbegin',
    },
  } = {}) {
    this.stagger = stagger;
    this.filled = filled;
    this.totalStars = totalStars;
    this.averageRating = averageRating;
    this.size = size;
    this.el = this.createStars();
    this.append(insertTo);
  }

  /**
   *  Append the start to a DOM location.
   */
  append({ element, position }) {
    if (element && position) {
      element.insertAdjacentElement(position, this.el);
    } else {
      console.warn(
        `RatingStars did not append to the DOM. Check element or position.`
      );
    }
  }

  /**
   * Split the ratings at the decimal point.
   * Example: 4.25 returns ['4', '25']
   * @returns {number[]} - A two dimensional array.
   */
  get ratingsSplit() {
    const [integer, percent] = this.averageRating.toFixed(2).split('.');
    return [Number(integer || 0), Number(percent || 0)];
  }

  /**
   * Create stars.
   * @returns {string[]}
   */
  createStars() {
    const stars = document.createElement('div');
    const [nthChild, percent] = this.ratingsSplit;

    // Create an array of stars. HTML string template.
    for (let idx = 0; idx < this.totalStars; idx++) {
      // Crop the star with CSS clip-path.
      const cropStar = `clip-path: inset(0 ${100 - Number(percent)}% 0 0)`;

      // Identify the star to crop
      const isNthStar = nthChild === idx;

      // Apply crop style or empty string
      const styles = isNthStar ? cropStar : '';

      // Identify where the last rated star is located by index.
      const isAfterNth = !Boolean(nthChild < idx);

      stars.innerHTML += this.oneStarHTML(styles, idx, isAfterNth);
    }

    stars.classList.add('review-stars');
    stars.style.setProperty('--size', `${this.size}px`);

    return stars;
  }

  /**
   * SVG star icon.
   * @param {String} styles
   * @param {Boolean} isAfterNth - To toggle the start "on" or "off" based on the average rating.
   * @returns {String}
   */
  oneStarHTML(styles, idx, isAfterNth) {
    /**
     * Place 2 stars, stacked on each other, same path for both.
     * "on" - The stars are filled.
     * "off" - The stars are empty.
     */
    const starPath =
      'M8,0.4c0.3,0,0.5,0.2,0.7,0.4L10.7,5l4.6,0.7c0.3,0,0.5,0.2,0.6,0.5c0.1,0.3,0,0.6-0.2,0.7l-3.4,3.3l0.8,4.6 c0,0.3-0.1,0.5-0.3,0.7c-0.2,0.2-0.5,0.2-0.8,0.1L8,13.4l-4.2,2.2c-0.2,0.1-0.5,0.1-0.8-0.1c-0.2-0.2-0.3-0.4-0.3-0.7l0.8-4.6 L0.2,6.9C0,6.7,0,6.4,0,6.1c0.1-0.3,0.3-0.5,0.6-0.5L5.3,5l2.1-4.2C7.5,0.5,7.7,0.4,8,0.4z';
    return `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="review-star ${this.filled ? 'filled' : ''}"
        data-review-star="${idx}"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <path
          class="star off"
          d="${starPath}"
        />
        <path
          class="star ${isAfterNth ? 'on' : 'off'}"
          style="${styles}"
          d="${starPath}"
        />
        <circle
          cx="8"
          cy="8"
          r="7.5"
        />
      </svg>
    `;
  }

  /**
   * Animate the stars in.
   * @returns {Promise<Number>}
   */
  async animate() {
    if (this.filled) {
      return Promise.resolve(0);
    }

    let duration = 0;
    const stars = Array.from(this.el.children);

    return new Promise(resolve => {
      stars.forEach((star, idx) => {
        // Stagger the stars with a delay
        const delay = this.el.children.length * idx * this.stagger * 1000;
        setTimeout(() => star.classList.add('animate-star'), delay);

        // Let the last delay be the duration.
        duration = delay;
      });

      // When complete, resolve a callback.
      setTimeout(() => resolve(duration), duration);
    });
  }

  /**
   * Function for debugging.
   * @returns {Promise<Number>}
   */
  async restart() {
    Array.from(this.el.children).forEach((star, idx) =>
      star.classList.remove('animate-star')
    );

    return new Promise(resolve => {
      setTimeout(() => {
        this.animate().then(d => resolve(d));
      }, 250);
    });
  }
}

// -----------------------------------------------------------------------------
// Usage
// -----------------------------------------------------------------------------

export function addHeroStars(elementLink, screen) {
  let size = 0;
  screen <= 767 ? (size = 16) : (size = 20);
  screen > 1279 ? (size = 24) : 0;
  const rating = Number(elementLink.innerText) / 2;
  elementLink.innerText = '';
  const stars = new ReviewStars({
    totalStars: 5,
    averageRating: rating,
    size: size,
    filled: false,
    insertTo: {
      element: elementLink,
      position: 'afterbegin',
    },
  });
  stars.restart();
}
