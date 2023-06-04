export function errorTrailer() {
  return `
  <div class="errortrailer">
      <div class="errortrailer-text">
        <p class="errortrailer-text-item">OOPS...</p>
        <p class="errortrailer-text-item">We are very sorry!</p>
        <p class="errortrailer-text-item">But we couldn’t find the trailer.</p>
      </div>
      <picture class="trailer-list-img">
        <source
          srcset="
            ./public/img/trailer-modal-desk.png    1x,
            ./public/img/trailer-modal-desk@2x.png 2x
          "
          media="(min-width: 1280px)"
          type="image/png"
          width="363"
        />
        <source
          srcset="
            ./public/img/trailer-modal-tab.png    1x,
            ./public/img/trailer-modal-tab@2x.png 2x
          "
          media="(min-width: 768px)"
          type="image/png"
          width="296"
        />
        <source
          srcset="
            ./public/img/trailer-modal-mob.png     1x,
            ./public/img/trailer-modal-mob-@2x.png 2x
          "
          media="(max-width: 767px)"
          type="image/png"
          width="159"
        />
        <img
          class="trailer-img"
          src="./public/img/trailer-modal-mob.png"
          alt="image"
          width="159"
        />
      </picture>
      <span class="select-icon">
            <svg class="icon" width="24" height="24">
              <use href="./public/img/symbols.svg#close"></use>
            </svg>
          </span>

    </div>`;
}
