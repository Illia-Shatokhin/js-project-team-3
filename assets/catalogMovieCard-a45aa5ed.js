import{b as _}from"./header-64e4a2e9.js";function C(e,n){e.insertAdjacentHTML("beforeend",n())}function $(){return`
       <div class="error">
        <p class="errortext">OOPS...</p>
        <p class="errortext">We are very sorry!</p>
        <p class="errortext">We don’t have any results matching your search.</p>
      </div>`}function w(e,n){return`
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
`}function N(e,n){return`
  <li class="catalog-item" style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 63.48%, rgba(0, 0, 0, 0.9) 92.16%), url(https://image.tmdb.org/t/p/w500${e.poster_path})" id="${e.id}">

<div class="catalog-card-info-container">
    <p class="catalog-card-title">${e.original_title}</p>

  <div class="film-info-container">
    <p class="catalog-card-description">${e.genres[0].name} | ${n}
    </p>
    <div class="rating">${e.vote_average.toFixed(1)}</div>
</div>
</div>
</li>
`}function v(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var L={exports:{}};(function(e,n){(function(l){e.exports=l()})(function(){return function l(o,r,s){function i(a,u){if(!r[a]){if(!o[a]){var g=typeof v=="function"&&v;if(!u&&g)return g(a,!0);if(f)return f(a,!0);var p=new Error("Cannot find module '"+a+"'");throw p.code="MODULE_NOT_FOUND",p}var t=r[a]={exports:{}};o[a][0].call(t.exports,function(d){return i(o[a][1][d]||d)},t,t.exports,l,o,r,s)}return r[a].exports}for(var f=typeof v=="function"&&v,c=0;c<s.length;c++)i(s[c]);return i}({1:[function(l,o,r){Object.defineProperty(r,"__esModule",{value:!0}),r.create=r.visible=void 0;var s=function(c){var a=arguments.length>1&&arguments[1]!==void 0&&arguments[1],u=document.createElement("div");return u.innerHTML=c.trim(),a===!0?u.children:u.firstChild},i=function(c,a){var u=c.children;return u.length===1&&u[0].tagName===a},f=function(c){return(c=c||document.querySelector(".basicLightbox"))!=null&&c.ownerDocument.body.contains(c)===!0};r.visible=f,r.create=function(c,a){var u=function(t,d){var m=s(`
		<div class="basicLightbox `.concat(d.className,`">
			<div class="basicLightbox__placeholder" role="dialog"></div>
		</div>
	`)),b=m.querySelector(".basicLightbox__placeholder");t.forEach(function(M){return b.appendChild(M)});var x=i(b,"IMG"),k=i(b,"VIDEO"),E=i(b,"IFRAME");return x===!0&&m.classList.add("basicLightbox--img"),k===!0&&m.classList.add("basicLightbox--video"),E===!0&&m.classList.add("basicLightbox--iframe"),m}(c=function(t){var d=typeof t=="string",m=t instanceof HTMLElement==1;if(d===!1&&m===!1)throw new Error("Content must be a DOM element/node or string");return d===!0?Array.from(s(t,!0)):t.tagName==="TEMPLATE"?[t.content.cloneNode(!0)]:Array.from(t.children)}(c),a=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if((t=Object.assign({},t)).closable==null&&(t.closable=!0),t.className==null&&(t.className=""),t.onShow==null&&(t.onShow=function(){}),t.onClose==null&&(t.onClose=function(){}),typeof t.closable!="boolean")throw new Error("Property `closable` must be a boolean");if(typeof t.className!="string")throw new Error("Property `className` must be a string");if(typeof t.onShow!="function")throw new Error("Property `onShow` must be a function");if(typeof t.onClose!="function")throw new Error("Property `onClose` must be a function");return t}(a)),g=function(t){return a.onClose(p)!==!1&&function(d,m){return d.classList.remove("basicLightbox--visible"),setTimeout(function(){return f(d)===!1||d.parentElement.removeChild(d),m()},410),!0}(u,function(){if(typeof t=="function")return t(p)})};a.closable===!0&&u.addEventListener("click",function(t){t.target===u&&g()});var p={element:function(){return u},visible:function(){return f(u)},show:function(t){return a.onShow(p)!==!1&&function(d,m){return document.body.appendChild(d),setTimeout(function(){requestAnimationFrame(function(){return d.classList.add("basicLightbox--visible"),m()})},10),!0}(u,function(){if(typeof t=="function")return t(p)})},close:g};return p}},{}]},{},[1])(1)})})(L);const S="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzgzN2Q4ZThiOWY1YjkyODFlNGYzODM2ZjQwZmMzMiIsInN1YiI6IjY0NzhmMTllMGUyOWEyMDBkY2I5YmFkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gm8FRVhZa5JYfHHhkK7gHuf4DwF_mvLWBXC6uzMdhLk",q="5788acd6bec4b8c2fc2e238d02649a74",I={method:"GET",params:{api_key:q,language:"en-US"},headers:{Authorization:`Bearer ${S}`,accept:"application/json"}};async function O(e){try{const n=`https://api.themoviedb.org/3/movie/${e}`,o=(await _.get(n,I)).data;return console.log(o),o}catch(n){console.log("Помилка запиту:",n)}}function T(e){const n=e.genres.map(i=>i.name).join(", "),l=e.vote_average.toFixed(1),o=e.popularity.toFixed(1),r=e.vote_count.toFixed(1);return`
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
     <li class="about-film-item"> ${l} / ${r}</li>
     <li class="about-film-item">${o}</li>
     <li class="about-film-item">${n}</li>
 </ul>
 </div>
 <p class="about-film-tittle">About </p>
 <p class="about-film-story">${e.overview} </p>
 <button class=" button btn-border-dark add-film-btn button-library">Add to my library</button>
 </div>
</div>`}let y;async function j(e){const n=await O(e),l=T(n);y=L.exports.create(l,{closable:!0,onShow:o=>{o.element().querySelector(".modal-close-btn").addEventListener("click",()=>{o.close()}),document.addEventListener("keydown",h)},onClose:o=>{o.element().querySelector(".modal-close-btn").removeEventListener("click",()=>{o.close()}),document.removeEventListener("keydown",h)}}),y.show(),document.querySelector(".button-library").addEventListener("click",o=>{console.log(o),Y(n)})}function h(e){e.code==="Escape"&&(y.close(),document.removeEventListener("keydown",h))}document.querySelector(".modal-open").onclick=j;function Y(e){const n="movie-details",l=JSON.stringify(e.id);localStorage.setItem(n,l),document.querySelector(".button-library"),document.querySelector(".button-library").textContent="Remove from my library"}const A={catalogList:document.querySelector(".catalog-list"),weeklyLinks:document.querySelector(".weekly-links")};async function F(e,n,l,o){try{let r;if(o)if(isNaN(o)){const s={query:o,include_adult:!1,primary_release_year,page:1,region,year};r=await e(s);for(let i=0;i<l;i++){releaseYear=r.results[i].release_date.split("-")[0];const f=w(r.results[i],releaseYear);n.insertAdjacentHTML("beforeend",f)}}else{r=await e(o);for(let s=0;s<l;s++){releaseYear=r.results[s].release_date.split("-")[0];const i=N(r,releaseYear);n.insertAdjacentHTML("beforeend",i)}}else{r=await e();let s="No date";for(let i=0;i<l;i++){s=r.results[i].release_date.split("-")[0];const f=w(r.results[i],s);n.insertAdjacentHTML("beforeend",f)}}}catch{C(A.catalogList,$)}}export{F as c,j as g,A as r};
