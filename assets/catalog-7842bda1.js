import{g as o}from"./hero-9b4766c2.js";function l(t,a){return`
<li class="catalog-item" style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 63.48%, rgba(0, 0, 0, 0.9) 92.16%), url(https://image.tmdb.org/t/p/w500${t.poster_path})" id="${t.id}">

<div class="catalog-card-info-container">
    <h4 class="catalog-card-title">${t.original_title}</h4>

  <div class="film-info-container">
    <p class="catalog-card-description">${t.genre_ids} | ${a}
    </p>
    <div class="rating">${t.vote_average.toFixed(1)}</div>
</div>
</div>
</li>
`}async function n(t,a){try{const e=await t();if(!e)return"function from Dima";let r="No date";screen.width<=767&&(e.results=e.results.slice(0,10));const s=e.results.map(i=>(console.log(e.results),i.release_date&&(r=i.release_date.split("-")[0]),l(i,r))).join("");e.page===1?a.innerHTML=s:a.insertAdjacentHTML("beforeend",s)}catch(e){console.error(e)}}const c=document.querySelector(".catalog-list");n(o,c);
