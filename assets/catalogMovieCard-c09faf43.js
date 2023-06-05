import{a as _,b as I}from"./header-ed7c8514.js";const h={catalogList:document.querySelector(".catalog-list"),weeklyLinks:document.querySelector(".weekly-links"),catalogForm:document.getElementById("search-form"),buttonReset:document.querySelector(".catalog-button-reset"),buttonSearchCatalog:document.querySelector(".catalog-search-button")};function N(e,n){e.insertAdjacentHTML("beforeend",n())}function q(){return`
       <div class="error">
        <p class="errortext">OOPS...</p>
        <p class="errortext">We are very sorry!</p>
        <p class="errortext">We don’t have any results matching your search.</p>
      </div>`}function O(e,n){return`
  <li class="catalog-item" style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 63.48%, rgba(0, 0, 0, 0.9) 92.16%), url(https://image.tmdb.org/t/p/w500${e.poster_path})" id="${e.id}">

<div class="catalog-card-info-container">
    <p class="catalog-card-title">${e.original_title}</p>

  <div class="film-info-container">
    <p class="catalog-card-description">${e.genre_ids} | ${n}
    </p>
    <div class="rating">${e.vote_average.toFixed(1)}</div>
</div>
</div>
</li>
`}function v(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var E={exports:{}};(function(e,n){(function(a){e.exports=a()})(function(){return function a(o,i,d){function m(r,l){if(!i[r]){if(!o[r]){var g=typeof v=="function"&&v;if(!l&&g)return g(r,!0);if(b)return b(r,!0);var f=new Error("Cannot find module '"+r+"'");throw f.code="MODULE_NOT_FOUND",f}var t=i[r]={exports:{}};o[r][0].call(t.exports,function(c){return m(o[r][1][c]||c)},t,t.exports,a,o,i,d)}return i[r].exports}for(var b=typeof v=="function"&&v,s=0;s<d.length;s++)m(d[s]);return m}({1:[function(a,o,i){Object.defineProperty(i,"__esModule",{value:!0}),i.create=i.visible=void 0;var d=function(s){var r=arguments.length>1&&arguments[1]!==void 0&&arguments[1],l=document.createElement("div");return l.innerHTML=s.trim(),r===!0?l.children:l.firstChild},m=function(s,r){var l=s.children;return l.length===1&&l[0].tagName===r},b=function(s){return(s=s||document.querySelector(".basicLightbox"))!=null&&s.ownerDocument.body.contains(s)===!0};i.visible=b,i.create=function(s,r){var l=function(t,c){var u=d(`
		<div class="basicLightbox `.concat(c.className,`">
			<div class="basicLightbox__placeholder" role="dialog"></div>
		</div>
	`)),p=u.querySelector(".basicLightbox__placeholder");t.forEach(function(S){return p.appendChild(S)});var x=m(p,"IMG"),M=m(p,"VIDEO"),C=m(p,"IFRAME");return x===!0&&u.classList.add("basicLightbox--img"),M===!0&&u.classList.add("basicLightbox--video"),C===!0&&u.classList.add("basicLightbox--iframe"),u}(s=function(t){var c=typeof t=="string",u=t instanceof HTMLElement==1;if(c===!1&&u===!1)throw new Error("Content must be a DOM element/node or string");return c===!0?Array.from(d(t,!0)):t.tagName==="TEMPLATE"?[t.content.cloneNode(!0)]:Array.from(t.children)}(s),r=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if((t=Object.assign({},t)).closable==null&&(t.closable=!0),t.className==null&&(t.className=""),t.onShow==null&&(t.onShow=function(){}),t.onClose==null&&(t.onClose=function(){}),typeof t.closable!="boolean")throw new Error("Property `closable` must be a boolean");if(typeof t.className!="string")throw new Error("Property `className` must be a string");if(typeof t.onShow!="function")throw new Error("Property `onShow` must be a function");if(typeof t.onClose!="function")throw new Error("Property `onClose` must be a function");return t}(r)),g=function(t){return r.onClose(f)!==!1&&function(c,u){return c.classList.remove("basicLightbox--visible"),setTimeout(function(){return b(c)===!1||c.parentElement.removeChild(c),u()},410),!0}(l,function(){if(typeof t=="function")return t(f)})};r.closable===!0&&l.addEventListener("click",function(t){t.target===l&&g()});var f={element:function(){return l},visible:function(){return b(l)},show:function(t){return r.onShow(f)!==!1&&function(c,u){return document.body.appendChild(c),setTimeout(function(){requestAnimationFrame(function(){return c.classList.add("basicLightbox--visible"),u()})},10),!0}(l,function(){if(typeof t=="function")return t(f)})},close:g};return f}},{}]},{},[1])(1)})})(E);const T="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzgzN2Q4ZThiOWY1YjkyODFlNGYzODM2ZjQwZmMzMiIsInN1YiI6IjY0NzhmMTllMGUyOWEyMDBkY2I5YmFkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gm8FRVhZa5JYfHHhkK7gHuf4DwF_mvLWBXC6uzMdhLk",$="5788acd6bec4b8c2fc2e238d02649a74",A={method:"GET",params:{api_key:$,language:"en-US"},headers:{Authorization:`Bearer ${T}`,accept:"application/json"}};async function j(e){try{const n=`https://api.themoviedb.org/3/movie/${e}`,o=(await _.get(n,A)).data;return console.log(o),o}catch(n){console.log("Помилка запиту:",n)}}function D(e){const n=e.genres.map(m=>m.name).join(", "),a=e.vote_average.toFixed(1),o=e.popularity.toFixed(1),i=e.vote_count.toFixed(1);return`
<div class="modal-film-window">
  <button class="modal-close-btn">
     <svg class="modal-close-icon" width="100%" height="100%" >
        <use href="../img/symbols.svg#close" width="100%" height="100%"></use>
     </svg>
 </button>
 <img class="film-poster-img"  src="${`https://image.tmdb.org/t/p/w500${e.poster_path}`}" alt="poster of the selected film">
 <div class="about-film-wrapper">
 <h2 class="film-tittle">${e.original_title}</h2>
 <div class="film-list-wrapper">
 <ul class="first-about-film-list">
 <li class="about-film-item"> Vote / Votes</li>
 <li class="about-film-item">Popularity</li>
 <li class="about-film-item">Genre</li>
 </ul >
 <ul class="second-about-film-list">
     <li class="about-film-item"> ${a} / ${i}</li>
     <li class="about-film-item">${o}</li>
     <li class="about-film-item">${n}</li>
 </ul>
 </div>
 <p class="about-film-tittle">About </p>
 <p class="about-film-story">${e.overview} </p>
 <button class=" button btn-border-dark add-film-btn button-library">Add to my library</button>
 </div>
</div>`}let y;async function k(e){const n=await j(e),a=D(n);y=E.exports.create(a,{closable:!0,onShow:o=>{o.element().querySelector(".modal-close-btn").addEventListener("click",()=>{o.close()}),document.addEventListener("keydown",w)},onClose:o=>{o.element().querySelector(".modal-close-btn").removeEventListener("click",()=>{o.close()}),document.removeEventListener("keydown",w)}}),y.show(),document.querySelector(".button-library").addEventListener("click",o=>{console.log(o),F(n)})}function w(e){e.code==="Escape"&&(y.close(),document.removeEventListener("keydown",w))}document.querySelector(".modal-open").onclick=k;function F(e){const n="movie-details",a=JSON.stringify(e.id);localStorage.setItem(n,a),document.querySelector(".button-library"),document.querySelector(".button-library").textContent="Remove from my library"}function L(e,n,a){let o="";for(let i=0;i<a;i++){let d=2e3;console.log(e),o+=O(e[i],d)}n.insertAdjacentHTML("beforeend",o)}async function J(){try{const e=await I();screen.width<=767?L(e.results,h.catalogList,10):L(e.results,h.catalogList,20)}catch{N(h.catalogList,q)}}async function P(e){const n=e.target;if(n.tagName==="LI"){const a=n.id;await k(a)}}export{N as a,L as c,q as e,P as o,h as r,J as w};
