import{a as S,b as I}from"./header-ed7c8514.js";function N(e,n){e.insertAdjacentHTML("beforeend",n())}function O(){return`
       <div class="error">
        <p class="errortext">OOPS...</p>
        <p class="errortext">We are very sorry!</p>
        <p class="errortext">We don’t have any results matching your search.</p>
      </div>`}function q(e,n){return`
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
`}function v(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var k={exports:{}};(function(e,n){(function(s){e.exports=s()})(function(){return function s(o,i,d){function m(r,l){if(!i[r]){if(!o[r]){var b=typeof v=="function"&&v;if(!l&&b)return b(r,!0);if(p)return p(r,!0);var f=new Error("Cannot find module '"+r+"'");throw f.code="MODULE_NOT_FOUND",f}var t=i[r]={exports:{}};o[r][0].call(t.exports,function(c){return m(o[r][1][c]||c)},t,t.exports,s,o,i,d)}return i[r].exports}for(var p=typeof v=="function"&&v,a=0;a<d.length;a++)m(d[a]);return m}({1:[function(s,o,i){Object.defineProperty(i,"__esModule",{value:!0}),i.create=i.visible=void 0;var d=function(a){var r=arguments.length>1&&arguments[1]!==void 0&&arguments[1],l=document.createElement("div");return l.innerHTML=a.trim(),r===!0?l.children:l.firstChild},m=function(a,r){var l=a.children;return l.length===1&&l[0].tagName===r},p=function(a){return(a=a||document.querySelector(".basicLightbox"))!=null&&a.ownerDocument.body.contains(a)===!0};i.visible=p,i.create=function(a,r){var l=function(t,c){var u=d(`
		<div class="basicLightbox `.concat(c.className,`">
			<div class="basicLightbox__placeholder" role="dialog"></div>
		</div>
	`)),g=u.querySelector(".basicLightbox__placeholder");t.forEach(function(_){return g.appendChild(_)});var x=m(g,"IMG"),M=m(g,"VIDEO"),C=m(g,"IFRAME");return x===!0&&u.classList.add("basicLightbox--img"),M===!0&&u.classList.add("basicLightbox--video"),C===!0&&u.classList.add("basicLightbox--iframe"),u}(a=function(t){var c=typeof t=="string",u=t instanceof HTMLElement==1;if(c===!1&&u===!1)throw new Error("Content must be a DOM element/node or string");return c===!0?Array.from(d(t,!0)):t.tagName==="TEMPLATE"?[t.content.cloneNode(!0)]:Array.from(t.children)}(a),r=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if((t=Object.assign({},t)).closable==null&&(t.closable=!0),t.className==null&&(t.className=""),t.onShow==null&&(t.onShow=function(){}),t.onClose==null&&(t.onClose=function(){}),typeof t.closable!="boolean")throw new Error("Property `closable` must be a boolean");if(typeof t.className!="string")throw new Error("Property `className` must be a string");if(typeof t.onShow!="function")throw new Error("Property `onShow` must be a function");if(typeof t.onClose!="function")throw new Error("Property `onClose` must be a function");return t}(r)),b=function(t){return r.onClose(f)!==!1&&function(c,u){return c.classList.remove("basicLightbox--visible"),setTimeout(function(){return p(c)===!1||c.parentElement.removeChild(c),u()},410),!0}(l,function(){if(typeof t=="function")return t(f)})};r.closable===!0&&l.addEventListener("click",function(t){t.target===l&&b()});var f={element:function(){return l},visible:function(){return p(l)},show:function(t){return r.onShow(f)!==!1&&function(c,u){return document.body.appendChild(c),setTimeout(function(){requestAnimationFrame(function(){return c.classList.add("basicLightbox--visible"),u()})},10),!0}(l,function(){if(typeof t=="function")return t(f)})},close:b};return f}},{}]},{},[1])(1)})})(k);const T="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzgzN2Q4ZThiOWY1YjkyODFlNGYzODM2ZjQwZmMzMiIsInN1YiI6IjY0NzhmMTllMGUyOWEyMDBkY2I5YmFkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gm8FRVhZa5JYfHHhkK7gHuf4DwF_mvLWBXC6uzMdhLk",$="5788acd6bec4b8c2fc2e238d02649a74",A={method:"GET",params:{api_key:$,language:"en-US"},headers:{Authorization:`Bearer ${T}`,accept:"application/json"}};async function j(e){try{const n=`https://api.themoviedb.org/3/movie/${e}`,o=(await S.get(n,A)).data;return console.log(o),o}catch(n){console.log("Помилка запиту:",n)}}function D(e){const n=e.genres.map(m=>m.name).join(", "),s=e.vote_average.toFixed(1),o=e.popularity.toFixed(1),i=e.vote_count.toFixed(1);return`
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
     <li class="about-film-item"> ${s} / ${i}</li>
     <li class="about-film-item">${o}</li>
     <li class="about-film-item">${n}</li>
 </ul>
 </div>
 <p class="about-film-tittle">About </p>
 <p class="about-film-story">${e.overview} </p>
 <button class=" button btn-border-dark add-film-btn button-library">Add to my library</button>
 </div>
</div>`}let y;async function E(e){const n=await j(e),s=D(n);y=k.exports.create(s,{closable:!0,onShow:o=>{o.element().querySelector(".modal-close-btn").addEventListener("click",()=>{o.close()}),document.addEventListener("keydown",w)},onClose:o=>{o.element().querySelector(".modal-close-btn").removeEventListener("click",()=>{o.close()}),document.removeEventListener("keydown",w)}}),y.show(),document.querySelector(".button-library").addEventListener("click",o=>{console.log(o),F(n)})}function w(e){e.code==="Escape"&&(y.close(),document.removeEventListener("keydown",w))}document.querySelector(".modal-open").onclick=E;function F(e){const n="movie-details",s=JSON.stringify(e.id);localStorage.setItem(n,s),document.querySelector(".button-library"),document.querySelector(".button-library").textContent="Remove from my library"}const h={catalogList:document.querySelector(".catalog-list"),weeklyLinks:document.querySelector(".weekly-links")};function L(e,n,s){let o="";for(let i=0;i<s;i++){let d=2e3;console.log(e),o+=q(e[i],d)}n.insertAdjacentHTML("beforeend",o)}async function J(){try{const e=await I();screen.width<=767?L(e.results,h.catalogList,10):L(e.results,h.catalogList,20)}catch{N(h.catalogList,O)}}async function P(e){const n=e.target;if(n.tagName==="LI"){const s=n.id;await E(s)}}export{L as c,P as o,h as r,J as w};
