import{n as c,a as l,g as d}from"./hero-6f4df1c0.js";const u="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2MwNTQ2OTJhMjhhMGI4N2RjMjcxY2I3MjM1MGY5ZCIsInN1YiI6IjY0NzkwNDQ3MTc0OTczMDEzNTAwM2Q4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18CUpoY0xgepvezf35K1455pbEVdmHEuDU72vq0k1uQ",g="https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=1",f={method:"GET",headers:{Authorization:`Bearer ${u}`,accept:"application/json"}},n=document.getElementById("search-form"),o=document.querySelector(".catalog-button-reset");async function m(){try{const a=(await l.get(g,f)).data.results;return console.log(a),a}catch(e){console.error(e)}}n.addEventListener("submit",v);function v(e){e.preventDefault(),e.currentTarget.elements.searchQuery.value.trim()===""?c.exports.Notify.failure("No value!"):(m(),p(),o.addEventListener("click",i=>{n.reset(),h()}))}function p(){o.classList.remove("hidden"),o.classList.add("active")}function h(){o.classList.remove("active"),o.classList.add("hidden")}function M(e,a){return`
<li class="catalog-item" style="background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 63.48%, rgba(0, 0, 0, 0.9) 92.16%), url(https://image.tmdb.org/t/p/w500${e.poster_path})" id="${e.id}">

<div class="catalog-card-info-container">
    <h4 class="catalog-card-title">${e.original_title}</h4>

  <div class="film-info-container">
    <p class="catalog-card-description">${e.genre_ids} | ${a}
    </p>
    <div class="rating">${e.vote_average.toFixed(1)}</div>
</div>
</div>
</li>
`}async function y(e,a){try{const t=await e();if(!t)return"function from Dima";let i="No date";screen.width<=767&&(t.results=t.results.slice(0,10));const r=t.results.map(s=>(console.log(t.results),s.release_date&&(i=s.release_date.split("-")[0]),M(s,i))).join("");t.page===1?a.innerHTML=r:a.insertAdjacentHTML("beforeend",r)}catch(t){console.error(t)}}const I=document.querySelector(".catalog-list");y(d,I);
