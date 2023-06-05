import{a as S,b as _}from"./header-6add048a.js";const h={catalogList:document.querySelector(".catalog-list"),weeklyLinks:document.querySelector(".weekly-links"),modalCloseBtn:document.querySelector(".modal-close-btn"),libraryBtn:document.querySelector(".button-library"),catalogForm:document.getElementById("search-form"),buttonReset:document.querySelector(".catalog-button-reset"),buttonSearchCatalog:document.querySelector(".catalog-search-button")};function I(e,o){e.insertAdjacentHTML("beforeend",o())}function N(){return`
       <div class="error">
        <p class="errortext">OOPS...</p>
        <p class="errortext">We are very sorry!</p>
        <p class="errortext">We don’t have any results matching your search.</p>
      </div>`}function q(e,o){return`
  <li class="catalog-item" style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 63.48%, rgba(0, 0, 0, 0.9) 92.16%), url(https://image.tmdb.org/t/p/w500${e.poster_path})" id="${e.id}">

<div class="catalog-card-info-container">
    <p class="catalog-card-title">${e.original_title}</p>

  <div class="film-info-container">
    <p class="catalog-card-description">${e.genre_ids} | ${o}
    </p>
    <div class="rating">${e.vote_average.toFixed(1)}</div>
</div>
</div>
</li>
`}function v(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var E={exports:{}};(function(e,o){(function(c){e.exports=c()})(function(){return function c(r,i,d){function m(n,s){if(!i[n]){if(!r[n]){var b=typeof v=="function"&&v;if(!s&&b)return b(n,!0);if(p)return p(n,!0);var f=new Error("Cannot find module '"+n+"'");throw f.code="MODULE_NOT_FOUND",f}var t=i[n]={exports:{}};r[n][0].call(t.exports,function(l){return m(r[n][1][l]||l)},t,t.exports,c,r,i,d)}return i[n].exports}for(var p=typeof v=="function"&&v,a=0;a<d.length;a++)m(d[a]);return m}({1:[function(c,r,i){Object.defineProperty(i,"__esModule",{value:!0}),i.create=i.visible=void 0;var d=function(a){var n=arguments.length>1&&arguments[1]!==void 0&&arguments[1],s=document.createElement("div");return s.innerHTML=a.trim(),n===!0?s.children:s.firstChild},m=function(a,n){var s=a.children;return s.length===1&&s[0].tagName===n},p=function(a){return(a=a||document.querySelector(".basicLightbox"))!=null&&a.ownerDocument.body.contains(a)===!0};i.visible=p,i.create=function(a,n){var s=function(t,l){var u=d(`
		<div class="basicLightbox `.concat(l.className,`">
			<div class="basicLightbox__placeholder" role="dialog"></div>
		</div>
	`)),g=u.querySelector(".basicLightbox__placeholder");t.forEach(function(C){return g.appendChild(C)});var x=m(g,"IMG"),k=m(g,"VIDEO"),M=m(g,"IFRAME");return x===!0&&u.classList.add("basicLightbox--img"),k===!0&&u.classList.add("basicLightbox--video"),M===!0&&u.classList.add("basicLightbox--iframe"),u}(a=function(t){var l=typeof t=="string",u=t instanceof HTMLElement==1;if(l===!1&&u===!1)throw new Error("Content must be a DOM element/node or string");return l===!0?Array.from(d(t,!0)):t.tagName==="TEMPLATE"?[t.content.cloneNode(!0)]:Array.from(t.children)}(a),n=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if((t=Object.assign({},t)).closable==null&&(t.closable=!0),t.className==null&&(t.className=""),t.onShow==null&&(t.onShow=function(){}),t.onClose==null&&(t.onClose=function(){}),typeof t.closable!="boolean")throw new Error("Property `closable` must be a boolean");if(typeof t.className!="string")throw new Error("Property `className` must be a string");if(typeof t.onShow!="function")throw new Error("Property `onShow` must be a function");if(typeof t.onClose!="function")throw new Error("Property `onClose` must be a function");return t}(n)),b=function(t){return n.onClose(f)!==!1&&function(l,u){return l.classList.remove("basicLightbox--visible"),setTimeout(function(){return p(l)===!1||l.parentElement.removeChild(l),u()},410),!0}(s,function(){if(typeof t=="function")return t(f)})};n.closable===!0&&s.addEventListener("click",function(t){t.target===s&&b()});var f={element:function(){return s},visible:function(){return p(s)},show:function(t){return n.onShow(f)!==!1&&function(l,u){return document.body.appendChild(l),setTimeout(function(){requestAnimationFrame(function(){return l.classList.add("basicLightbox--visible"),u()})},10),!0}(s,function(){if(typeof t=="function")return t(f)})},close:b};return f}},{}]},{},[1])(1)})})(E);const O="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzgzN2Q4ZThiOWY1YjkyODFlNGYzODM2ZjQwZmMzMiIsInN1YiI6IjY0NzhmMTllMGUyOWEyMDBkY2I5YmFkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gm8FRVhZa5JYfHHhkK7gHuf4DwF_mvLWBXC6uzMdhLk",T="5788acd6bec4b8c2fc2e238d02649a74",$={method:"GET",params:{api_key:T,language:"en-US"},headers:{Authorization:`Bearer ${O}`,accept:"application/json"}};async function j(e){try{const o=`https://api.themoviedb.org/3/movie/${e}`;return(await S.get(o,$)).data}catch(o){console.log("Помилка запиту:",o)}}function A(e){const o=e.genres.map(m=>m.name).join(", "),c=e.vote_average.toFixed(1),r=e.popularity.toFixed(1),i=e.vote_count.toFixed(1);return`
  <div class="modal-film-window">
    <button class="modal-close-btn">
       <svg class="modal-close-icon" width="100%" height="100%" >
          <use href="../img/symbols.svg#close" width="100%" height="100%"></use>
       </svg>
   </button>
   <img class="film-poster-img"  src="${`https://image.tmdb.org/t/p/w500${e.poster_path}`}" alt="Movie poster" width="375" height="478">
   <div class="about-film-wrapper">
   <h2 class="film-tittle">${e.original_title}</h2>
   <div class="film-list-wrapper">
   <ul class="first-about-film-list">
   <li class="about-film-item"> Vote / Votes</li>
   <li class="about-film-item">Popularity</li>
   <li class="about-film-item">Genre</li>
   </ul >
   <ul class="second-about-film-list">
       <li class="about-film-item"> <span class ="vote-span">${c}</span> / <span class ="vote-span">${i}</span></li>
       <li class="about-film-item">${r}</li>
       <li class="about-film-item">${o}</li>
   </ul>
   </div>
   <p class="about-film-tittle">About </p>
   <p class="about-film-story">${e.overview} </p>
   <button class=" button btn-border-dark add-film-btn button-library">Add to my library</button>
   </div>
  </div>`}let y;async function D(e){const o=await j(F),c=A(o);y=E.exports.create(c,{closable:!0,onShow:r=>{r.element().querySelector(".modal-close-btn").addEventListener("click",()=>{r.close()}),document.addEventListener("keydown",w)},onClose:r=>{r.element().querySelector(".modal-close-btn").removeEventListener("click",()=>{r.close()}),document.removeEventListener("keydown",w)}}),y.show(),document.querySelector(".button-library").addEventListener("click",r=>{Y(o)})}function w(e){e.code==="Escape"&&(y.close(),document.removeEventListener("keydown",w))}const F=605578;function Y(e){const o="movie-details",c=JSON.stringify(e.id);localStorage.setItem(o,c),h.libraryBtn.textContent="Remove from my library"}function L(e,o,c){let r="";for(let i=0;i<c;i++){let d=2e3;console.log(e),r+=q(e[i],d)}o.insertAdjacentHTML("beforeend",r)}async function P(){try{const e=await _();screen.width<=767?L(e.results,h.catalogList,10):L(e.results,h.catalogList,20)}catch{I(h.catalogList,N)}}async function z(e){const o=e.target;o.tagName==="LI"&&(o.id,await D())}export{I as a,L as c,N as e,z as o,h as r,P as w};
