import{d as A,c as G,r as w,o as D,b as J}from"./header-7c35e50d.js";async function Z(){try{const e=await A();screen.width<=767?G(e.results,w.weeklyLinks,1):G(e.results,w.weeklyLinks,3),w.weeklyLinks.addEventListener("click",D)}catch(e){console.error(e)}}const L=document.querySelector(".film-card");function z(e,a,n){const l=Math.round(e),s=l%2===0?l/2:(l-1)/2,t=Math.round(10-e),i=t%2===0?t/2:(t-1)/2,f=t%2!==0;for(let o=0;o<s;o++)L.insertAdjacentHTML("beforeend",j("icon-star-outline",a,n));f&&L.insertAdjacentHTML("beforeend",j("close",a,n));for(let o=0;o<i;o++)L.insertAdjacentHTML("beforeend",j("search",a,n))}z(7.51,40,40);function j(e,a,n){return`<svg class="icon-star" width="${a}" height="${n}">
      <use href="./img/symbols.svg#${e}"></use>
  </svg>`}localStorage.getItem("myLibrary")||localStorage.setItem("myLibrary",JSON.stringify([]));const S=new Date;S.getMonth();const F={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzcwNGY3NWVjYTA3MmEwNGFiODBiNzBjOTQ5ZWZjMiIsInN1YiI6IjY0Nzg0ZWFkY2Y0YjhiMDEwMzFjZWZjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HGp4SG4w1Ow4nxzAlMDbe5phup9IwpC6GqyzdUZE9ZM"}};fetch("https://api.themoviedb.org/3/genre/movie/list?language=en",F).then(e=>e.json()).then(e=>{const a=e.results;if(a.length===0){const n=document.createElement("p");n.textContent="No upcoming films found.",document.getElementById("film-container").appendChild(n)}else{const n=S.getMonth()+1,l=[];if(a.forEach(s=>{new Date(s.release_date).getMonth()+1===n&&l.push(s)}),l.length>0){const s=Math.floor(Math.random()*l.length),t=l[s],i=document.createElement("div");i.className="film-card";const f=document.querySelector(".upcoming-film-image-container"),o=document.createElement("img");o.className="film-image",o.src=`https://image.tmdb.org/t/p/original/${t.backdrop_path}`,f.appendChild(o);const u=document.createElement("h2");u.className="film-title",u.textContent=t.title,i.appendChild(u);const r=document.createElement("div");r.className="film-info-total-wrap",i.appendChild(r);const m=document.createElement("div");m.className="film-release-wrap",r.appendChild(m);const h=document.createElement("p");h.className="film-release-text",h.textContent="Release Date",m.appendChild(h);const g=document.createElement("p");g.className="film-release-date",g.textContent=t.release_date,m.appendChild(g);const c=document.createElement("div");c.className="film-vote-wrap",r.appendChild(c);const C=document.createElement("p");C.className="film-vote-text",C.textContent="Vote / Votes",c.appendChild(C);const y=document.createElement("p");y.className="film-votes",y.textContent=`${t.vote_average} / ${t.vote_count}`,c.appendChild(y);const d=document.createElement("div");d.className="film-popularity-wrap",r.appendChild(d);const N=document.createElement("p");N.className="film-rating-text",N.textContent="Popularity",d.appendChild(N);const E=document.createElement("p");E.className="film-rating",E.textContent=`${t.popularity.toFixed(1)}`,d.appendChild(E);const p=document.createElement("div");p.className="film-genre-wrap",r.appendChild(p);const x=document.createElement("p");x.className="film-genre-text",x.textContent="Genre",p.appendChild(x);const b=document.createElement("p");b.className="film-genre";const W=t.genre_ids.map(k=>genres[k]);b.textContent=`${W.join(", ")}`,p.appendChild(b);const v=document.createElement("p");v.className="film-about",v.textContent="ABOUT",i.appendChild(v);const M=document.createElement("p");M.className="film-description",M.textContent=t.overview,i.appendChild(M);const I=document.createElement("button");I.className="library-button button btn-gradient",R(t.id)?I.textContent="Remove from My Library":I.textContent="Add to My Library";const T=document.createElement("p");T.textContent="No upcoming films found for this month.",document.getElementById("film-container").appendChild(T)}}});function R(e){return JSON.parse(localStorage.getItem("myLibrary")).some(n=>n.id===e)}J();Z();
