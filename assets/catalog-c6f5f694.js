import{n as d,g as u,a as g}from"./hero-2a043042.js";const l=document.getElementById("search-form"),i=document.querySelector(".catalog-button-reset"),c=document.querySelector(".catalog-search-button");l.addEventListener("submit",f);async function f(e){e.preventDefault();const r=e.currentTarget.elements.searchQuery.value.trim();r===""?d.exports.Notify.failure("No value!"):((await m(r)).length?alert("Ф-я рендер Каті"):alert("Заглушка"),v()),i.addEventListener("click",t=>{l.reset(),p()})}async function m(e){try{return await(await u({query:e,include_adult:!1,page:1})).results}catch(a){console.error(a)}}function v(){i.classList.remove("hidden"),i.classList.add("active"),c.disabled=!0}function p(){i.classList.remove("active"),i.classList.add("hidden"),c.disabled=!1}function y(e,a){return`
  <li class="catalog-item" style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 63.48%, rgba(0, 0, 0, 0.9) 92.16%), url(https://image.tmdb.org/t/p/w500${e.poster_path})" id="${e.id}">

<div class="catalog-card-info-container">
    <p class="catalog-card-title">${e.original_title}</p>

  <div class="film-info-container">
    <p class="catalog-card-description">${e.genre_ids} | ${a}
    </p>
    <div class="rating">${e.vote_average.toFixed(1)}</div>
</div>
</div>
</li>
`}async function h(e,a,r){try{let t;if(r===void 0)t=await e();else if(!isNaN(r))t=await e(r);else{const o={query:r,include_adult:!1,primary_release_year,page:1,region,year};t=await e(o)}let s="No date";if(!t)return"function from Dima";screen.width<=767&&(t.results=t.results.slice(0,10));const n=t.results.map(o=>(o.release_date&&(s=o.release_date.split("-")[0]),y(o,s))).join("");t.page===1?a.innerHTML=n:a.insertAdjacentHTML("beforeend",n),document.querySelectorAll(".catalog-item").forEach(o=>{o.addEventListener("click",b)})}catch(t){console.error(t)}}function b(){console.log("Modal window")}const M={catalogList:document.querySelector(".catalog-list")};h(g,M.catalogList);
