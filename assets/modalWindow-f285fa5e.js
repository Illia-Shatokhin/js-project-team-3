import{b as k}from"./hero-2a043042.js";function v(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var w={exports:{}};(function(t,a){(function(c){t.exports=c()})(function(){return function c(n,l,d){function m(o,i){if(!l[o]){if(!n[o]){var p=typeof v=="function"&&v;if(!i&&p)return p(o,!0);if(b)return b(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var e=l[o]={exports:{}};n[o][0].call(e.exports,function(s){return m(n[o][1][s]||s)},e,e.exports,c,n,l,d)}return l[o].exports}for(var b=typeof v=="function"&&v,r=0;r<d.length;r++)m(d[r]);return m}({1:[function(c,n,l){Object.defineProperty(l,"__esModule",{value:!0}),l.create=l.visible=void 0;var d=function(r){var o=arguments.length>1&&arguments[1]!==void 0&&arguments[1],i=document.createElement("div");return i.innerHTML=r.trim(),o===!0?i.children:i.firstChild},m=function(r,o){var i=r.children;return i.length===1&&i[0].tagName===o},b=function(r){return(r=r||document.querySelector(".basicLightbox"))!=null&&r.ownerDocument.body.contains(r)===!0};l.visible=b,l.create=function(r,o){var i=function(e,s){var u=d(`
		<div class="basicLightbox `.concat(s.className,`">
			<div class="basicLightbox__placeholder" role="dialog"></div>
		</div>
	`)),h=u.querySelector(".basicLightbox__placeholder");e.forEach(function(M){return h.appendChild(M)});var L=m(h,"IMG"),E=m(h,"VIDEO"),x=m(h,"IFRAME");return L===!0&&u.classList.add("basicLightbox--img"),E===!0&&u.classList.add("basicLightbox--video"),x===!0&&u.classList.add("basicLightbox--iframe"),u}(r=function(e){var s=typeof e=="string",u=e instanceof HTMLElement==1;if(s===!1&&u===!1)throw new Error("Content must be a DOM element/node or string");return s===!0?Array.from(d(e,!0)):e.tagName==="TEMPLATE"?[e.content.cloneNode(!0)]:Array.from(e.children)}(r),o=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if((e=Object.assign({},e)).closable==null&&(e.closable=!0),e.className==null&&(e.className=""),e.onShow==null&&(e.onShow=function(){}),e.onClose==null&&(e.onClose=function(){}),typeof e.closable!="boolean")throw new Error("Property `closable` must be a boolean");if(typeof e.className!="string")throw new Error("Property `className` must be a string");if(typeof e.onShow!="function")throw new Error("Property `onShow` must be a function");if(typeof e.onClose!="function")throw new Error("Property `onClose` must be a function");return e}(o)),p=function(e){return o.onClose(f)!==!1&&function(s,u){return s.classList.remove("basicLightbox--visible"),setTimeout(function(){return b(s)===!1||s.parentElement.removeChild(s),u()},410),!0}(i,function(){if(typeof e=="function")return e(f)})};o.closable===!0&&i.addEventListener("click",function(e){e.target===i&&p()});var f={element:function(){return i},visible:function(){return b(i)},show:function(e){return o.onShow(f)!==!1&&function(s,u){return document.body.appendChild(s),setTimeout(function(){requestAnimationFrame(function(){return s.classList.add("basicLightbox--visible"),u()})},10),!0}(i,function(){if(typeof e=="function")return e(f)})},close:p};return f}},{}]},{},[1])(1)})})(w);const C="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzgzN2Q4ZThiOWY1YjkyODFlNGYzODM2ZjQwZmMzMiIsInN1YiI6IjY0NzhmMTllMGUyOWEyMDBkY2I5YmFkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gm8FRVhZa5JYfHHhkK7gHuf4DwF_mvLWBXC6uzMdhLk",N="5788acd6bec4b8c2fc2e238d02649a74",I={method:"GET",params:{api_key:N,language:"en-US"},headers:{Authorization:`Bearer ${C}`,accept:"application/json"}};async function S(t){try{const a=`https://api.themoviedb.org/3/movie/${t}`,n=(await k.get(a,I)).data;return console.log(n),n}catch(a){console.log("Помилка запиту:",a)}}function _(t){const a=t.genres.map(m=>m.name).join(", "),c=t.vote_average.toFixed(1),n=t.popularity.toFixed(1),l=t.vote_count.toFixed(1);return`
<div class="modal-film-window">
  <button class="modal-close-btn">
     <svg class="modal-close-icon" width="100%" height="100%" >
        <use href="../img/symbols.svg#close" width="100%" height="100%"></use>
     </svg>
 </button>
 <img class="film-poster-img"  src="${`https://image.tmdb.org/t/p/w500${t.poster_path}`}" alt="poster of the selected film">
 <div class="about-film-wrapper">
 <h2 class="film-tittle">${t.original_title}</h2>
 <div class="film-list-wrapper">
 <ul class="first-about-film-list">
 <li class="about-film-item"> Vote / Votes</li>
 <li class="about-film-item">Popularity</li>
 <li class="about-film-item">Genre</li>
 </ul >
 <ul class="second-about-film-list">
     <li class="about-film-item"> ${c} / ${l}</li>
     <li class="about-film-item">${n}</li>
     <li class="about-film-item">${a}</li>
 </ul>
 </div>
 <p class="about-film-tittle">About </p>
 <p class="about-film-story">${t.overview} </p>
 <button class=" button btn-border-dark add-film-btn button-library">Add to my library</button>
 </div>
</div>`}let y;async function O(t){const a=await S(t),c=_(a);y=w.exports.create(c,{closable:!0,onShow:n=>{n.element().querySelector(".modal-close-btn").addEventListener("click",()=>{n.close()}),document.addEventListener("keydown",g)},onClose:n=>{n.element().querySelector(".modal-close-btn").removeEventListener("click",()=>{n.close()}),document.removeEventListener("keydown",g)}}),y.show(),document.querySelector(".button-library").addEventListener("click",n=>{console.log(n),q(a)})}function g(t){t.code==="Escape"&&(y.close(),document.removeEventListener("keydown",g))}document.querySelector(".modal-open").onclick=O;function q(t){const a="movie-details",c=JSON.stringify(t.id);localStorage.setItem(a,c),document.querySelector(".button-library"),document.querySelector(".button-library").textContent="Remove from my library"}export{O as g};
