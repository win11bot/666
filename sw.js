if(!self.define){let e,r={};const s=(s,i)=>(s=new URL(s+".js",i).href,r[s]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=r,document.head.appendChild(e)}else e=s,importScripts(s),r()})).then((()=>{let e=r[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(r[c])return;let o={};const d=e=>s(e,c),f={module:{uri:c},exports:o,require:d};r[c]=Promise.all(i.map((e=>f[e]||d(e)))).then((e=>(n(...e),o)))}}define(["./workbox-3ea082d2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"84a663f376e4404c21d2e87eb42df68f"},{url:"assets/index.e94f21ed.css",revision:null},{url:"console.js",revision:"881e0ad096fabab4416bfe7a5c74f696"},{url:"dycalendar.css",revision:"3594089a743f177b03c8b3349ad71dba"},{url:"dycalendar.js",revision:"9aeeed69786117efbb0897a1be74bf66"},{url:"google5c2eff7d87cfc5e5.html",revision:"d75f50c2b120e507dc2ed8c92554f89c"},{url:"index.html",revision:"b2a61ea9eb679260bdb6af0572b4f9e8"},{url:"react-pwa.js",revision:"1861897db4a25fc90dbec39ab64f1b5e"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"script.js",revision:"190a20a86d9a4ac62459506002904b43"},{url:"serviceWorker.js",revision:"d5e14f679d1920d2ab5e51c8fb602540"},{url:"style.css",revision:"34741ec84f2c05e353fbe59ad370fc66"},{url:"manifest.webmanifest",revision:"d8801b9a9a617c0234933675774554fe"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
