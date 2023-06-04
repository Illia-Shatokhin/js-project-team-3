import{n as c,a as l,g as d}from"./hero-6f4df1c0.js";const u="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2MwNTQ2OTJhMjhhMGI4N2RjMjcxY2I3MjM1MGY5ZCIsInN1YiI6IjY0NzkwNDQ3MTc0OTczMDEzNTAwM2Q4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18CUpoY0xgepvezf35K1455pbEVdmHEuDU72vq0k1uQ",g="https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=1",m={method:"GET",headers:{Authorization:`Bearer ${u}`,accept:"application/json"}},n=document.getElementById("search-form"),i=document.querySelector(".catalog-button-reset");async function f(){try{const t=(await l.get(g,m)).data.results;return console.log(t),t}catch(e){console.error(e)}}n.addEventListener("submit",v);function v(e){e.preventDefault(),e.currentTarget.elements.searchQuery.value.trim()===""?c.exports.Notify.failure("No value!"):(f(),h(),i.addEventListener("click",r=>{n.reset(),p()}))}function h(){i.classList.remove("hidden"),i.classList.add("active")}function p(){i.classList.remove("active"),i.classList.add("hidden")}function M(e,t){return`
<li class="catalog-item" style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 63.48%, rgba(0, 0, 0, 0.9) 92.16%), url(https://image.tmdb.org/t/p/w500${e.poster_path})" id="${e.id}">

<div class="catalog-card-info-container">
    <h4 class="catalog-card-title">${e.original_title}</h4>

  <div class="film-info-container">
    <p class="catalog-card-description">${e.genre_ids} | ${t}
    </p>
    <div class="rating">${e.vote_average.toFixed(1)}</div>
</div>
</div>
</li>
`}async function y(e,t){try{const a=await e();if(!a)return"function from Dima";let r="No date";screen.width<=767&&(a.results=a.results.slice(0,10));const s=a.results.map(o=>(o.release_date&&(r=o.release_date.split("-")[0]),M(o,r))).join("");a.page===1?t.innerHTML=s:t.insertAdjacentHTML("beforeend",s),document.querySelectorAll(".catalog-item").forEach(o=>{o.addEventListener("click",I)})}catch(a){console.error(a)}}function I(){console.log("Modal window")}const b=document.querySelector(".catalog-list");y(d,b);
