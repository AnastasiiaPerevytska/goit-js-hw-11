import{S as c,i as a}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u="44100586-6dae9d5f9d68e136096a0f58f",f="https://pixabay.com/api/";function p(n){const r=`${f}?key=${u}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(o=>o.json())}function d(n){const r=document.querySelector(".gallery"),o=n.map(e=>`
      <a class="gallery-item" href="${e.largeImageURL}">
        <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
        <div class="info">
          <p class="info-item"><span>Likes:</span> ${e.likes}</p>
          <p class="info-item"><span>Views:</span> ${e.views}</p>
          <p class="info-item"><span>Comments:</span> ${e.comments}</p>
          <p class="info-item"><span>Downloads:</span> ${e.downloads}</p>
        </div>
      </a>`).join("");r.innerHTML=o,new c(".gallery a",{navText:["&#5176;","&#5171;"],captionsData:"alt",captionDelay:250}).refresh()}function m(){const n=document.querySelector(".gallery");n.innerHTML=""}const y=document.querySelector(".search-form"),h=document.querySelector(".search-input");document.querySelector(".gallery");const l=document.querySelector(".loader");y.addEventListener("submit",g);function g(n){n.preventDefault();const r=h.value.trim();if(r===""){a.error({title:"Error",message:"Please enter a search query"});return}m(),L(),p(r).then(o=>{o.hits.length===0?a.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again."}):d(o.hits)}).catch(o=>{a.error({position:"topRight",message:"Error"})}).finally(()=>{S()})}function L(){l.style.display="block"}function S(){l.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
