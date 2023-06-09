import{h as z,c as A,r as k,o as B,a as F,e as Y,n as j,t as V,b as U,f as H}from"./footer-modal-834fb52e.js";async function Q(){try{const e=await z();A(e.results,k.weeklyLinks,3),k.weeklyLinks.addEventListener("click",B)}catch(e){console.error(e),F(k.weeklyLinks,Y)}}localStorage.getItem("myLibrary")||localStorage.setItem("myLibrary",JSON.stringify([]));const G=new Date;G.getMonth();const D={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzcwNGY3NWVjYTA3MmEwNGFiODBiNzBjOTQ5ZWZjMiIsInN1YiI6IjY0Nzg0ZWFkY2Y0YjhiMDEwMzFjZWZjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HGp4SG4w1Ow4nxzAlMDbe5phup9IwpC6GqyzdUZE9ZM"}};fetch("https://api.themoviedb.org/3/genre/movie/list?language=en",D).then(e=>e.json()).then(e=>{j.Loading.standard("Loading...",{backgroundColor:"rgba(0,0,0,0.8)",svgColor:"rgb(248, 119, 25)"});const a={};e.genres.forEach(t=>{a[t.id]=t.name}),fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",D).then(t=>t.json()).then(t=>{const c=t.results;if(c.length===0){const l=document.createElement("p");l.textContent="No upcoming films found.",document.getElementById("film-container").appendChild(l)}else{const l=G.getMonth()+1,m=[];if(c.forEach(i=>{new Date(i.release_date).getMonth()+1===l&&m.push(i)}),m.length>0){let T=function(M){const S=new Date(M),R=String(S.getDate()).padStart(2,"0"),Z=String(S.getMonth()+1).padStart(2,"0"),$=S.getFullYear();return`${R}.${Z}.${$}`};const i=Math.floor(Math.random()*m.length),n=m[i],r=document.createElement("div");r.className="film-card";const J=document.querySelector(".upcoming-film-image-container"),d=document.createElement("img");d.className="film-image",d.src=screen.width>=768?`https://image.tmdb.org/t/p/original/${n.backdrop_path}`:`https://image.tmdb.org/t/p/original/${n.poster_path}`,d.alt=`${n.original_title}`,J.appendChild(d);const u=document.createElement("h2");u.className="film-title",u.textContent=n.title.toUpperCase(),r.appendChild(u);const s=document.createElement("div");s.className="film-wrap",r.appendChild(s);const p=document.createElement("div");p.className="film-release-wrap",s.appendChild(p);const y=document.createElement("p");y.className="film-release-text",y.textContent="Release Date",p.appendChild(y);const C=document.createElement("p");C.className="film-release-date";const _=T(n.release_date);C.textContent=_,p.appendChild(C);const g=document.createElement("div");g.className="film-vote-wrap",s.appendChild(g);const b=document.createElement("p");b.className="film-vote-text",b.textContent="Vote / Votes",g.appendChild(b);const E=document.createElement("p");E.className="film-votes",E.innerHTML=`<span class="vote-average">${n.vote_average}</span> / <span class="vote-count">${n.vote_count}</span>`,g.appendChild(E);const f=document.createElement("div");f.className="film-popularity-wrap",s.appendChild(f);const N=document.createElement("p");N.className="film-rating-text",N.textContent="Popularity",f.appendChild(N);const v=document.createElement("p");v.className="film-rating",v.textContent=`${n.popularity.toFixed(1)}`,f.appendChild(v);const h=document.createElement("div");h.className="film-genre-wrap",s.appendChild(h);const x=document.createElement("p");x.className="film-genre-text",x.textContent="Genre",h.appendChild(x);const L=document.createElement("p");L.className="film-genre";const O=n.genre_ids.map(M=>a[M]);L.textContent=`${O.join(", ")}`,h.appendChild(L);const I=document.createElement("p");I.className="film-about",I.textContent="ABOUT",r.appendChild(I);const w=document.createElement("p");w.className="film-description",w.textContent=n.overview,r.appendChild(w);const o=document.createElement("button");o.className="library-button button btn-gradient",W(n.id)?(o.textContent="Remove from My Library",o.classList.remove("btn-gradient")):(o.textContent="Add to My Library",o.classList.add("btn-gradient")),o.addEventListener("click",()=>q(n,o)),r.appendChild(o),document.getElementById("film-container").appendChild(r)}else{const i=document.createElement("p");i.textContent="No upcoming films found for this month.",document.getElementById("film-container").appendChild(i)}}})});j.Loading.remove();function W(e){return JSON.parse(localStorage.getItem("myLibrary")).some(t=>t.id===e)}function q(e,a){const t=JSON.parse(localStorage.getItem("myLibrary")),c=t.findIndex(l=>l.id===e.id);c===-1?t.push(e):t.splice(c,1),localStorage.setItem("myLibrary",JSON.stringify(t)),W(e.id)?(a.textContent="Remove from My Library",a.classList.remove("btn-gradient"),a.style.background="white",a.style.color="orange"):(a.textContent="Add to My Library",a.classList.add("btn-gradient"),a.style.background="var(--basic-gradient)",a.style.color="black")}V();U("hero/catalog");Q();H();