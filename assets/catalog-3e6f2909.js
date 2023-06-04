import{n as f,g as m,a as c}from"./hero-2a043042.js";import"./modalWindow-e4670b69.js";const u=document.getElementById("search-form"),n=document.querySelector(".catalog-button-reset"),p=document.querySelector(".catalog-search-button");u.addEventListener("submit",y);async function y(e){e.preventDefault();const o=e.currentTarget.elements.searchQuery.value.trim();o===""?f.exports.Notify.failure("No value!"):((await b(o)).length?alert("Ф-я рендер Каті"):alert("Заглушка"),h()),n.addEventListener("click",s=>{u.reset(),L()})}async function b(e){try{return await(await m({query:e,include_adult:!1,page:1})).results}catch(t){console.error(t)}}function h(){n.classList.remove("hidden"),n.classList.add("active"),p.disabled=!0}function L(){n.classList.remove("active"),n.classList.add("hidden"),p.disabled=!1}function M(e,t){e.insertAdjacentHTML("beforeend",t())}function $(){return`
       <div class="error">
        <p class="errortext">OOPS...</p>
        <p class="errortext">We are very sorry!</p>
        <p class="errortext">We don’t have any results matching your search.</p>
      </div>`}function d(e,t){return`
  <li class="catalog-item" style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 63.48%, rgba(0, 0, 0, 0.9) 92.16%), url(https://image.tmdb.org/t/p/w500${e.poster_path})" id="${e.id}">

<div class="catalog-card-info-container">
    <p class="catalog-card-title">${e.original_title}</p>

  <div class="film-info-container">
    <p class="catalog-card-description">${e.genre_ids} | ${t}
    </p>
    <div class="rating">${e.vote_average.toFixed(1)}</div>
</div>
</div>
</li>
`}function _(e,t){return`
  <li class="catalog-item" style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 63.48%, rgba(0, 0, 0, 0.9) 92.16%), url(https://image.tmdb.org/t/p/w500${e.poster_path})" id="${e.id}">

<div class="catalog-card-info-container">
    <p class="catalog-card-title">${e.original_title}</p>

  <div class="film-info-container">
    <p class="catalog-card-description">${e.genres[0].name} | ${t}
    </p>
    <div class="rating">${e.vote_average.toFixed(1)}</div>
</div>
</div>
</li>
`}const l={catalogList:document.querySelector(".catalog-list")};async function g(e,t,o,s){try{let a;if(s)if(isNaN(s)){const r={query:s,include_adult:!1,primary_release_year,page:1,region,year};a=await e(r);for(let i=0;i<o;i++){const v=d(a.results[i],2014);t.insertAdjacentHTML("beforeend",v)}}else{a=await e(s),console.log(a);for(let r=0;r<o;r++){const i=_(a,2014);t.insertAdjacentHTML("beforeend",i)}}else{a=await e();for(let r=0;r<o;r++){const i=d(a.results[r],2014);t.insertAdjacentHTML("beforeend",i)}}let k="No date";console.log(a.results)}catch{M(l.catalogList,$)}}screen.width<=767?g(c,l.catalogList,10):g(c,l.catalogList,20);
