import{i as F,c as D,r as h,o as Y,a as $,e as A,b as V}from"./header-90fe85a9.js";import"./get-default-data-6b58a0d1.js";async function _(){try{const e=await F();screen.width<=767?D(e.results,h.weeklyLinks,1):D(e.results,h.weeklyLinks,3),h.weeklyLinks.addEventListener("click",Y)}catch(e){console.error(e),$(h.weeklyLinks,A)}}localStorage.getItem("myLibrary")||localStorage.setItem("myLibrary",JSON.stringify([]));const G=new Date;G.getMonth();const j={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzcwNGY3NWVjYTA3MmEwNGFiODBiNzBjOTQ5ZWZjMiIsInN1YiI6IjY0Nzg0ZWFkY2Y0YjhiMDEwMzFjZWZjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HGp4SG4w1Ow4nxzAlMDbe5phup9IwpC6GqyzdUZE9ZM"}};fetch("https://api.themoviedb.org/3/genre/movie/list?language=en",j).then(e=>e.json()).then(e=>{const n={};e.genres.forEach(t=>{n[t.id]=t.name}),fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",j).then(t=>t.json()).then(t=>{const c=t.results;if(c.length===0){const l=document.createElement("p");l.textContent="No upcoming films found.",document.getElementById("film-container").appendChild(l)}else{const l=G.getMonth()+1,m=[];if(c.forEach(o=>{new Date(o.release_date).getMonth()+1===l&&m.push(o)}),m.length>0){let T=function(k){const S=new Date(k),Z=String(S.getDate()).padStart(2,"0"),z=String(S.getMonth()+1).padStart(2,"0"),B=S.getFullYear();return`${Z}.${z}.${B}`};const o=Math.floor(Math.random()*m.length),a=m[o],r=document.createElement("div");r.className="film-card";const J=document.querySelector(".upcoming-film-image-container"),u=document.createElement("img");u.className="film-image",u.src=screen.width>=768?`https://image.tmdb.org/t/p/original/${a.backdrop_path}`:`https://image.tmdb.org/t/p/original/${a.poster_path}`,J.appendChild(u);const y=document.createElement("h2");y.className="film-title",y.textContent=a.title.toUpperCase(),r.appendChild(y);const s=document.createElement("div");s.className="film-wrap",r.appendChild(s);const d=document.createElement("div");d.className="film-release-wrap",s.appendChild(d);const C=document.createElement("p");C.className="film-release-text",C.textContent="Release Date",d.appendChild(C);const E=document.createElement("p");E.className="film-release-date";const O=T(a.release_date);E.textContent=O,d.appendChild(E);const p=document.createElement("div");p.className="film-vote-wrap",s.appendChild(p);const N=document.createElement("p");N.className="film-vote-text",N.textContent="Vote / Votes",p.appendChild(N);const b=document.createElement("p");b.className="film-votes",b.innerHTML=`<span class="vote-average">${a.vote_average}</span> / <span class="vote-count">${a.vote_count}</span>`,p.appendChild(b);const g=document.createElement("div");g.className="film-popularity-wrap",s.appendChild(g);const v=document.createElement("p");v.className="film-rating-text",v.textContent="Popularity",g.appendChild(v);const x=document.createElement("p");x.className="film-rating",x.textContent=`${a.popularity.toFixed(1)}`,g.appendChild(x);const f=document.createElement("div");f.className="film-genre-wrap",s.appendChild(f);const L=document.createElement("p");L.className="film-genre-text",L.textContent="Genre",f.appendChild(L);const w=document.createElement("p");w.className="film-genre";const R=a.genre_ids.map(k=>n[k]);w.textContent=`${R.join(", ")}`,f.appendChild(w);const I=document.createElement("p");I.className="film-about",I.textContent="ABOUT",r.appendChild(I);const M=document.createElement("p");M.className="film-description",M.textContent=a.overview,r.appendChild(M);const i=document.createElement("button");i.className="library-button button btn-gradient",W(a.id)?(i.textContent="Remove from My Library",i.classList.remove("btn-gradient")):(i.textContent="Add to My Library",i.classList.add("btn-gradient")),i.addEventListener("click",()=>U(a,i)),r.appendChild(i),document.getElementById("film-container").appendChild(r)}else{const o=document.createElement("p");o.textContent="No upcoming films found for this month.",document.getElementById("film-container").appendChild(o)}}})});function W(e){return JSON.parse(localStorage.getItem("myLibrary")).some(t=>t.id===e)}function U(e,n){const t=JSON.parse(localStorage.getItem("myLibrary")),c=t.findIndex(l=>l.id===e.id);c===-1?t.push(e):t.splice(c,1),localStorage.setItem("myLibrary",JSON.stringify(t)),W(e.id)?(n.textContent="Remove from My Library",n.classList.remove("btn-gradient"),n.style.background="white",n.style.color="orange"):(n.textContent="Add to My Library",n.classList.add("btn-gradient"),n.style.background="var(--basic-gradient)",n.style.color="black")}V("hero/catalog");_();
