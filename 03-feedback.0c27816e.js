!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,y=function(){return d.Date.now()};function p(e,t,n){var r,i,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function S(e){return c=e,f=setTimeout(h,t),s?p(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function h(){var e=y();if(O(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function w(e){return f=void 0,v&&r?p(e):(r=i=void 0,u)}function T(){var e=y(),n=O(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return S(l);if(d)return f=setTimeout(h,t),p(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=j(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},T.flush=function(){return void 0===f?u:w(y())},T}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var S="feedback-form-state",O=document.querySelector(".feedback-form"),h=document.querySelector(".js-input"),w=document.querySelector(".js-message");O.addEventListener("input",e(t)((function(e){T[e.target.name]=e.target.value,localStorage.setItem(S,JSON.stringify(T))}),500)),O.addEventListener("submit",(function(e){e.preventDefault(),console.log("Відправлення форми");var t={email:h.value,message:w.value};console.log("Obj: ",t),h.value="",w.value="",T={},localStorage.removeItem(S)}));var T={},N=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}};localStorage.getItem(S)||localStorage.setItem(S,JSON.stringify(T)),N(S).email&&(h.value=N(S).email),N(S).message&&(w.value=N(S).message)}();
//# sourceMappingURL=03-feedback.0c27816e.js.map