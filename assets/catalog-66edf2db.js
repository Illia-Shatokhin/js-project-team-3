import{n as l,a as d,g as u}from"./hero-6f4df1c0.js";const f="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2MwNTQ2OTJhMjhhMGI4N2RjMjcxY2I3MjM1MGY5ZCIsInN1YiI6IjY0NzkwNDQ3MTc0OTczMDEzNTAwM2Q4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18CUpoY0xgepvezf35K1455pbEVdmHEuDU72vq0k1uQ",g="https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=1",m={method:"GET",headers:{Authorization:`Bearer ${f}`,accept:"application/json"}},c=document.getElementById("search-form"),s=document.querySelector(".catalog-button-reset");async function v(){try{const a=(await d.get(g,m)).data.results;return console.log(a),a}catch(e){console.error(e)}}c.addEventListener("submit",p);function p(e){e.preventDefault(),e.currentTarget.elements.searchQuery.value.trim()===""?l.exports.Notify.failure("No value!"):(v(),h(),s.addEventListener("click",t=>{c.reset(),y()}))}function h(){s.classList.remove("hidden"),s.classList.add("active")}function y(){s.classList.remove("active"),s.classList.add("hidden")}function M(e,a){return`
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
`}async function N(e,a,o){try{let t;if(o===void 0)t=await e();else if(!isNaN(o))t=await e(o);else{const i={query:o,include_adult:!1,primary_release_year,page:1,region,year};t=await e(i)}let r="No date";if(!t)return"function from Dima";screen.width<=767&&(t.results=t.results.slice(0,10));const n=t.results.map(i=>(i.release_date&&(r=i.release_date.split("-")[0]),M(i,r))).join("");t.page===1?a.innerHTML=n:a.insertAdjacentHTML("beforeend",n),document.querySelectorAll(".catalog-item").forEach(i=>{i.addEventListener("click",b)})}catch(t){console.error(t)}}function b(){console.log("Modal window")}const I={catalogList:document.querySelector(".catalog-list")};N(u,I.catalogList);
