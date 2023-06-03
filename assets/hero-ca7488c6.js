(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzgzN2Q4ZThiOWY1YjkyODFlNGYzODM2ZjQwZmMzMiIsInN1YiI6IjY0NzhmMTllMGUyOWEyMDBkY2I5YmFkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gm8FRVhZa5JYfHHhkK7gHuf4DwF_mvLWBXC6uzMdhLk",a="day",d=`https://api.themoviedb.org/3/trending/movie/${a}?language=en-US`,u={method:"GET",headers:{Authorization:`Bearer ${l}`,accept:"application/json"}},c=document.querySelector(".hero");h();function h(){try{fetch(d,u).then(o=>o.json()).then(o=>f(o))}catch(o){console.error(o)}}function f(o){const r=Math.floor(Math.random()*20),{overview:s,original_title:i,vote_average:e,backdrop_path:t}=o.results[r];c.style.backgroundImage=`url(https://www.themoviedb.org/t/p/original${t})`;const n=`
    <div class="container">
    <h2 class="hero-title">${i}</h2>
   <p class="reting-stars">${e.toFixed(1)}</p>
   
    <div class="overview">
    <p overview-text> ${s} </p>
    </div>
    <div class="thumb-hero-btn">
    <button class="button btn-gradient" >Watch trailer</button>
    <button class="button">More details</button>
    </div>
  </div>`;c.innerHTML=n}
