import"./hero-2a043042.js";import"./modalWindow-e4670b69.js";const c=document.querySelector(".film-card");function b(e){const i=Math.round(e),t=i%2===0?i/2:(i-1)/2,o=Math.round(10-e),a=o%2===0?o/2:(o-1)/2,r=o%2!==0;for(let n=0;n<t;n++)c.insertAdjacentHTML("beforeend",g(1));r&&c.insertAdjacentHTML("beforeend",g(.5));for(let n=0;n<a;n++)c.insertAdjacentHTML("beforeend",g(0))}b(10);console.log(c);function g(e){return`<p class="star-text" >${e}</p>`}localStorage.getItem("myLibrary")||localStorage.setItem("myLibrary",JSON.stringify([]));const h=new Date;h.getMonth();const C={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzcwNGY3NWVjYTA3MmEwNGFiODBiNzBjOTQ5ZWZjMiIsInN1YiI6IjY0Nzg0ZWFkY2Y0YjhiMDEwMzFjZWZjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HGp4SG4w1Ow4nxzAlMDbe5phup9IwpC6GqyzdUZE9ZM"}};fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",C).then(e=>e.json()).then(e=>{const i=e.results;if(i.length===0){const t=document.createElement("p");t.textContent="No upcoming films found.",document.getElementById("film-container").appendChild(t)}else{const t=h.getMonth()+1,o=[];if(i.forEach(a=>{new Date(a.release_date).getMonth()+1===t&&o.push(a)}),o.length>0){const a=Math.floor(Math.random()*o.length),r=o[a],n=document.createElement("div");n.className="film-card";const y=document.querySelector(".upcoming-film-image-container"),m=document.createElement("img");m.className="film-image",m.src=`https://image.tmdb.org/t/p/original/${r.backdrop_path}`,y.appendChild(m);const s=document.createElement("h2");s.className="film-title",s.textContent=r.title,n.appendChild(s);const d=document.createElement("p");d.className="film-release-date",d.textContent=`Release Date: ${r.release_date}`,n.appendChild(d);const f=document.createElement("p");f.className="film-rating",f.textContent=`Rating: ${r.vote_average}`,n.appendChild(f);const p=document.createElement("p");p.className="film-description",p.textContent=r.overview,n.appendChild(p);const l=document.createElement("button");l.className="library-button button btn-gradient",u(r.id)?l.textContent="Remove from My Library":l.textContent="Add to My Library",l.addEventListener("click",()=>I(r,l)),n.appendChild(l),document.getElementById("film-container").appendChild(n)}else{const a=document.createElement("p");a.textContent="No upcoming films found for this month.",document.getElementById("film-container").appendChild(a)}}});function u(e){return JSON.parse(localStorage.getItem("myLibrary")).some(t=>t.id===e)}function I(e,i){const t=JSON.parse(localStorage.getItem("myLibrary")),o=t.findIndex(a=>a.id===e.id);o===-1?t.push(e):t.splice(o,1),localStorage.setItem("myLibrary",JSON.stringify(t)),u(e.id)?i.textContent="Remove from My Library":i.textContent="Add to My Library"}
