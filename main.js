(()=>{"use strict";var t,e,n,r,i,o,a,c,s,d,l,p,f,u,h={958:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(81),i=n.n(r),o=n(645),a=n.n(o)()(i());a.push([t.id,"html,body{margin:0;padding:0;width:100vw;height:100vh;margin:0;display:flex}body{overflow-x:hidden}#container{width:100vw;height:500vh;background-color:#a4c2f4;position:relative}#bubble{right:0;top:0;width:40vw;height:40vw;border-radius:50%;background:radial-gradient(circle, rgb(164, 194, 244) 0%, rgb(110, 151, 220) 100%);position:absolute}#canvas{width:100%;height:100%;position:absolute}#overlay{position:absolute}a{color:#fff;text-decoration:none}#menu{display:inline-block;position:sticky;height:5vh;width:100vw;padding-left:2%;padding-right:2%;padding-top:2%;z-index:5}#title{display:inline-block;width:5vw;padding-right:2vw}#center{position:absolute;padding-left:10%;padding-top:5%;padding-right:15%}#intro{padding-top:0%;width:45%;color:#fff;font-size:40px;font-weight:200;font-family:Arial,Helvetica,sans-serif}#descr{padding-top:15%;text-align:center;padding-left:20% !important;padding-right:20% !important;font-size:20px;padding-right:30%;font-family:Arial,Helvetica,sans-serif;color:#fff}#txt{text-align:left}#consultancy{padding-top:10%;width:50vw;text-align:right;font-family:Arial,Helvetica,sans-serif;color:#fff}#middle{display:inline-block;width:100vw;align-items:center;text-align:center}.head{margin:0 auto;display:inline-block;padding-left:5%}#about{margin:0 auto;display:inline-block;padding-left:5%}#contact{margin:0 auto;display:inline-block;padding-left:5%}h1{text-transform:uppercase;font-size:small;font-family:Arial,Helvetica,sans-serif;color:#fff}h2{font-size:100px;font-family:Arial,Helvetica,sans-serif;color:#fff}@media only screen and (max-width: 600px){body{background-color:#add8e6}}@keyframes pulse{0%{opacity:100%}70%{opacity:70%}100%{opacity:100%}}body::-webkit-scrollbar{width:12px}body::-webkit-scrollbar-track{background:none}body::-webkit-scrollbar-thumb{background-color:rgba(255,255,255,.61);border-radius:20px;border:none}",""]);const c=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,i,o){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);r&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},a=[],c=0;c<t.length;c++){var s=t[c],d=r.base?s[0]+r.base:s[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var f=n(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(u);else{var h=i(u,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var o=r(t=t||[],i=i||{});return function(t){t=t||[];for(var a=0;a<o.length;a++){var c=n(o[a]);e[c].references--}for(var s=r(t,i),d=0;d<o.length;d++){var l=n(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=s}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},v={};function g(t){var e=v[t];if(void 0!==e)return e.exports;var n=v[t]={id:t,exports:{}};return h[t](n,n.exports,g),n.exports}g.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return g.d(e,{a:e}),e},g.d=(t,e)=>{for(var n in e)g.o(e,n)&&!g.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},g.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),g.nc=void 0,t=g(379),e=g.n(t),n=g(795),r=g.n(n),i=g(569),o=g.n(i),a=g(565),c=g.n(a),s=g(216),d=g.n(s),l=g(589),p=g.n(l),f=g(958),(u={}).styleTagTransform=p(),u.setAttributes=c(),u.insert=o().bind(null,"head"),u.domAPI=r(),u.insertStyleElement=d(),e()(f.Z,u),f.Z&&f.Z.locals&&f.Z.locals})();