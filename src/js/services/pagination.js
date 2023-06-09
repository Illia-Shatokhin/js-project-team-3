import Pagination from 'tui-pagination';
import { refs } from '../models/refs';
import { dataObj } from '../models/data';
// import 'tui-pagination/dist/tui-pagination.css';

export default class CreatePagination {
  // private Class`s methods
  #scrollUp() {
    window.scrollTo({
      top: 400,
      behavior: 'smooth',
    });
  }

  constructor(object, func, requestType = '') {
    this.object = object;
    this.func = func;
    this.options = {
      totalItems: object.total_results,
      itemsPerPage: object.results.length,
      visiblePages: 4,
      page: object.page,
      centerAlign: true,
      requestType: requestType,
      firstItemClassName: 'tui-first-child',
      lastItemClassName: 'tui-last-child',
      template: {
        page: '<a href="#" class="tui-page-btn" data-zero="0">{{page}}</a>',
        currentPage:
          '<strong class="tui-page-btn tui-is-selected" data-zero="0">{{page}}</strong>',
        moveButton:
          '<a href="#" class="tui-page-btn tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</a>',
        disabledMoveButton:
          '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</span>',
        moreButton:
          '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
          '<span class="tui-ico-ellip">...</span>' +
          '</a>',
      },
    };
  }

  activatePagination() {
    const pagination = new Pagination(
      refs.tuiPaginationContainer,
      this.options
    );
    pagination.on('afterMove', ({ page }) => {
      if (dataObj.searchQuery) dataObj.searchCurrentPage = page;
      this.func(page);
      this.#scrollUp();
    });
  }
}

export function addZeroPagination() {
  const allBtn = document.querySelectorAll('.tui-page-btn');
  allBtn.forEach(el => {
    if (el.textContent.length === 1) el.dataset.zero = '0';
    else el.dataset.zero = '';
  });
}
