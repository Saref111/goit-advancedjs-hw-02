import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as a}from"./assets/vendor-82f810ee.js";const i=document.querySelector(".form");function u(t,e){const o=Math.random()>.3;return new Promise((s,m)=>{setTimeout(()=>{o?s({position:t,delay:e}):m({position:t,delay:e})},e)})}function f(t){t.preventDefault();const e=new FormData(t.currentTarget),o=Number(e.get("amount")),s=Number(e.get("step")),m=Number(e.get("delay"));for(let r=0;r<o;r+=1)u(r,m+s*r).then(({position:n,delay:c})=>{a.success({title:"Success",message:`Promise ${n} resolved after ${c}ms`})}).catch(({position:n,delay:c})=>{a.error({title:"Error",message:`Promise ${n} rejected after ${c}ms`})})}i.addEventListener("submit",f);
//# sourceMappingURL=commonHelpers3.js.map