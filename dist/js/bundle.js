!function(e){var t={};function n(c){if(t[c])return t[c].exports;var o=t[c]={i:c,l:!1,exports:{}};return e[c].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(c,o,function(t){return e[t]}.bind(null,o));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2);document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".overlay"),t=document.body,n=document.body.clientWidth,c=(document.querySelector(".swiper").swiper,document.querySelector(".aside-menu")),o=document.querySelector(".btn__hamburger"),r=document.querySelectorAll(".aside-menu__close"),i=document.querySelector(".more"),s=document.querySelector(".show-brands"),l=document.querySelector(".show-repair"),a=document.querySelectorAll(".visibleRepair"),d=document.querySelectorAll(".visibleBrands"),u=document.querySelector(".services__min-width768"),f=document.querySelector(".services__min-width1120"),v=document.querySelector(".services__description-hidden"),m=document.querySelectorAll(".btn__chat"),y=document.querySelector(".feedback"),p=document.querySelectorAll(".btn__call"),L=document.querySelector(".call");function b(){e.style.display="block",t.style.overflow="hidden"}function S(){e.style.display="none",t.style.overflow="visible"}(i.addEventListener("click",(function(){i.classList.toggle("rotate-arrow")})),s.addEventListener("click",(function(){d.forEach((function(e){return e.classList.toggle("brandsHidden")})),s.classList.toggle("rotate-arrow")})),l.addEventListener("click",(function(){a.forEach((function(e){return e.classList.toggle("hiddenRepair")})),l.classList.toggle("rotate-arrow")})),i.addEventListener("click",(function(){u.classList.add("activeText"),f.classList.add("activeText"),v.classList.toggle("closeText")})),o.addEventListener("click",(function(){b(),c.classList.remove("close")})),r.forEach((function(e){e.addEventListener("click",(function(){S(),c.classList.add("close"),c.classList.remove("active"),y.classList.add("close"),y.classList.remove("active"),L.classList.add("close"),L.classList.remove("active")}))})),e.addEventListener("click",(function(e){e.target.className.includes("overlay")&&(S(),c.classList.add("close"),y.classList.add("close"),L.classList.add("close"))})),m.forEach((function(e){e.addEventListener("click",(function(){y.classList.remove("close"),b()}))})),p.forEach((function(e){e.addEventListener("click",(function(){b(),L.classList.remove("close")}))})),n<331)&&new Swiper(".swiper",{direction:"horizontal",initialSlide:0,spaceBetween:16,pagination:{el:".swiper-pagination",clickable:!0}}).slideNext()}))},function(e,t,n){}]);
//# sourceMappingURL=bundle.js.map