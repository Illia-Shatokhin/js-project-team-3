import{r as e,w as h,d as a,n as i,g as m,C as v,a as c,e as l,c as u,b as L,t as f}from"./button-to-header-ce4c4b4d.js";e.catalogForm.addEventListener("submit",b);async function y(r=1){try{i.Loading.standard("Loading...",{backgroundColor:"rgba(0,0,0,0.8)",svgColor:"rgb(248, 119, 25)"});const t={query:a.searchQuery,primary_release_year:a.searchYear,page:a.searchCurrentPage,region:a.searchRegion,year:a.searchYear},s=await m(t),n=s.results;new v(s,y).activatePagination(),n.length?(C(s),e.catalogForm.reset(),g(),e.tuiPaginationContainer.style.display="block"):(p(),d(),c(e.catalogList,l),e.tuiPaginationContainer.style.display="none"),e.buttonReset.addEventListener("click",M=>{e.catalogForm.reset(),g()})}catch(t){console.error(t),d(),c(e.catalogList,l)}i.Loading.remove()}async function b(r){r.preventDefault();const t=r.currentTarget,s=t.elements.searchQuery.value.trim(),n=t.elements.country.value,o=t.elements.year.value;s===""?h():(P(1,s,o,n),y())}function C(r){screen.width<=767?u(r.results,e.catalogList,10):u(r.results,e.catalogList,20)}function p(){e.buttonReset.classList.remove("hidden"),e.buttonReset.classList.add("active"),R()}function g(){e.buttonReset.classList.remove("active"),e.buttonReset.classList.add("hidden")}function d(){e.catalogList.innerHTML=""}function P(r,t,s,n){a.searchCurrentPage=r,a.searchQuery=t,a.searchYear=s,a.searchRegion=n}function R(){a.searchCurrentPage=0,a.searchQuery="",a.searchYear="",a.searchRegion=""}L("hero/catalog");h();f();