import{a as l,c as n,o as i,j as c,b as g}from"./header-a8294b75.js";s();function s(){const r=document.querySelector(".my-library-list"),t=document.getElementById("btn-load-more"),e=localStorage.getItem("myLibrary")?JSON.parse(localStorage.getItem("myLibrary")):[];if(P(e,9),e.length==0)l(r,c);else{const a=e.length<9?e.length:9;n(e,r,a)}e.length>9&&t.style.setProperty("display","block"),r.addEventListener("click",i),t.addEventListener("click",m)}function P(o,r){const t=[];for(let e=0;e<o.length;e+=r){const a=o.slice(e,e+r);t.push(a)}return t}function m(o){const r=libraryForPage[currentPage].length<moviePerPage?libraryForPage[currentPage].length:moviePerPage;n(libraryForPage[currentPage],filmsOfLocalStorage,r),currentPage++,currentPage>=libraryForPage.length&&btnLoadMore.style.setProperty("display","none")}g("library");