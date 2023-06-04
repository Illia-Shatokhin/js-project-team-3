import{n as f,g as m,a as d}from"./hero-2a043042.js";import{g as y}from"./modalWindow-f285fa5e.js";const p=document.getElementById("search-form"),n=document.querySelector(".catalog-button-reset"),v=document.querySelector(".catalog-search-button");p.addEventListener("submit",b);async function b(e){e.preventDefault();const s=e.currentTarget.elements.searchQuery.value.trim();s===""?f.exports.Notify.failure("No value!"):((await h(s)).length?alert("Ф-я рендер Каті"):alert("Заглушка"),L()),n.addEventListener("click",o=>{p.reset(),M()})}async function h(e){try{return await(await m({query:e,include_adult:!1,page:1})).results}catch(t){console.error(t)}}function L(){n.classList.remove("hidden"),n.classList.add("active"),v.disabled=!0}function M(){n.classList.remove("active"),n.classList.add("hidden"),v.disabled=!1}function _(e,t){e.insertAdjacentHTML("beforeend",t())}function k(){return`
       <div class="error">
        <p class="errortext">OOPS...</p>
        <p class="errortext">We are very sorry!</p>
        <p class="errortext">We don’t have any results matching your search.</p>
      </div>`}function g(e,t){return`
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
`}function $(e,t){return`
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
`}const l={catalogList:document.querySelector(".catalog-list")};async function u(e,t,s,o){try{let r;if(o)if(isNaN(o)){const i={query:o,include_adult:!1,primary_release_year,page:1,region,year};r=await e(i);for(let a=0;a<s;a++){releaseYear=r.results[a].release_date.split("-")[0];const c=g(r.results[a],releaseYear);t.insertAdjacentHTML("beforeend",c)}}else{r=await e(o);for(let i=0;i<s;i++){releaseYear=r.results[i].release_date.split("-")[0];const a=$(r,releaseYear);t.insertAdjacentHTML("beforeend",a)}}else{r=await e();let i="No date";for(let a=0;a<s;a++){i=r.results[a].release_date.split("-")[0];const c=g(r.results[a],i);t.insertAdjacentHTML("beforeend",c)}}}catch{_(l.catalogList,k)}}screen.width<=767?u(d,l.catalogList,10):u(d,l.catalogList,20);l.catalogList.addEventListener("click",async e=>{const t=e.target;if(t.tagName==="LI"){const s=t.id;await y(s)}});
