(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(6),c=n.n(o),i=(n(17),n(1));n(2);var l=function(e){var t=e.onClick;return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("p",null,"Are you a Letterboxd user ",a.a.createElement("br",null)," with an undying need ",a.a.createElement("br",null)," to quantify your love for film? ",a.a.createElement("br",null)),a.a.createElement("button",{className:"button",onClick:t}," Absolutely. "),a.a.createElement("p",{className:"App-bottom"},"This product uses the TMDB API but is not endorsed or certified by TMDB.")))},u=n(4),s=n(7),f=n.n(s),h="2022",m="df1e67f460086cadab34f9c9bee0f3d6";n(3);var p=function(){var e=["Romcoms","Detective Films","Anime","Dramas","YA Dystopias","Cats: The Musical","Terrible Horror Films","Oscar Bait","Your Mom","Theater"],t=["#FF68A8","#64CFF7","#F7E752","#CA7CD8","#3968CB","#E3826F","#E4A9A4","#EFBA97","#F1CCBB","#E7D5C7"],n=Object(r.useState)(e[Math.floor(10*Math.random())]),o=Object(i.a)(n,2),c=o[0],l=o[1],u=Object(r.useState)(t[Math.floor(10*Math.random())]),s=Object(i.a)(u,2),f=s[0],h=s[1];return Object(r.useEffect)(function(){var n=setInterval(function(){l(e[Math.floor(10*Math.random())]),h(t[Math.floor(10*Math.random())])},1600);return function(){return clearInterval(n)}},[]),a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("p",null," Loading ",a.a.createElement("span",{style:{color:"".concat(f)}},"".concat(c)),"... ")))};function d(){d=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var o=t&&t.prototype instanceof h?t:h,c=Object.create(o.prototype),i=new L(a||[]);return r(c,"_invoke",{value:O(e,n,i)}),c}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(S){return{type:"throw",arg:S}}}e.wrap=u;var f={};function h(){}function m(){}function p(){}var v={};l(v,o,function(){return this});var g=Object.getPrototypeOf,y=g&&g(g(k([])));y&&y!==t&&n.call(y,o)&&(v=y);var b=p.prototype=h.prototype=Object.create(v);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var a;r(this,"_invoke",{value:function(r,o){function c(){return new t(function(a,c){!function r(a,o,c,i){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then(function(e){r("next",e,c,i)},function(e){r("throw",e,c,i)}):t.resolve(f).then(function(e){u.value=e,c(u)},function(e){return r("throw",e,c,i)})}i(l.arg)}(r,o,a,c)})}return a=a?a.then(c,c):c()}})}function O(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return A()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var i=j(c,n);if(i){if(i===f)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function j(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var a=s(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function k(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:A}}function A(){return{value:void 0,done:!0}}return m.prototype=p,r(b,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:m,configurable:!0}),m.displayName=l(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,i,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},E(w.prototype),l(w.prototype,c,function(){return this}),e.AsyncIterator=w,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var c=new w(u(t,n,r,a),o);return e.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},E(b),l(b,i,"Generator"),l(b,o,function(){return this}),l(b,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=k,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return c.type="throw",c.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;N(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:k(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}var v=function(e){var t=e.setPageIndex,n=e.setFilmDataObj,o=e.setErrorMessage,c=Object(r.useState)(null),l=Object(i.a)(c,2),s=l[0],v=l[1],g=Object(r.useState)(!1),y=Object(i.a)(g,2),b=y[0],E=y[1],w=Object(r.useState)(!1),O=Object(i.a)(w,2),j=O[0],x=O[1],N=Object(r.useState)(null),L=Object(i.a)(N,2),k=L[0],A=L[1];Object(r.useEffect)(function(){null!=s&&!1===b?(S(),x(!0)):!0===b&&!0===j?(console.log("all queries completed. final user data below"),console.log(s),n(s),x(!1),t(2)):null!=k&&t("error")});var S=function(){var e=Object(u.a)(d().mark(function e(){var t,n,r,a,o,c;return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=JSON.parse(JSON.stringify(s)),n=0;case 2:if(!(n<s.length)){e.next=16;break}return console.log("looking @ movie ".concat(n)),r=s[n],e.next=7,D(r.Name,r.Year);case 7:return a=e.sent,e.next=10,F(a);case 10:return o=e.sent,e.next=13,C(t,o,n);case 13:n++,e.next=2;break;case 16:console.log(t.length),c=t.filter(function(e){return"invalid media"!==e}),v(c),E(!0);case 20:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),C=function(e,t,n){return new Promise(function(r,a){if("invalid media"===t)e[n]="invalid media",r();else try{e[n].Runtime=t.runtime,e[n].Genres=t.genres,r()}catch(o){a(),A("Something has gone haywire. Sorry for the inconvience.")}})},D=function(){var e=Object(u.a)(d().mark(function e(t,n){return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,r){console.log("".concat(t," - ").concat(n)),fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(m,"&query=").concat(t,"&page=1&include_adult=true&year=").concat(n)).then(function(e){return e.json()}).then(function(r){console.log(r),0===r.results.length?(console.log("INVALID MEDIA IS ".concat(t," - ").concat(n)),e("invalid media")):e(r.results[0].id)},function(e){x(!1),A("There is an issue with retrieving data from the API. Please try again."),r()})}));case 1:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),F=function(){var e=Object(u.a)(d().mark(function e(t){return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,n){"invalid media"===t?e("invalid media"):fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(m,"&language=en-US")).then(function(e){return e.json()}).then(function(t){console.log("MOVIE DETAILED"),console.log(t),e(t)},function(e){x(!1),A("There is an issue with retrieving data from the API. Please try again."),n()})}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();if(!k)return!0===j?a.a.createElement(p,null):a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("p",null,"Directions For Use"),a.a.createElement("div",{className:"App-body"},a.a.createElement("p",null,"1. Log in to your account ",a.a.createElement("br",null),"2. Navigate to https://letterboxd.com/settings/ ",a.a.createElement("br",null),"3. Click \u201cImport & Export\u201d ",a.a.createElement("br",null),'4. Click "Export Your Data" ',a.a.createElement("br",null),'5. Unzip the folder and upload "diary.csv"')),a.a.createElement("div",{className:"mb-3"},a.a.createElement("input",{className:"form-control",type:"file",id:"csvFile",accept:".csv",onChange:function(e){f.a.parse(e.target.files[0],{header:!0,skipEmptyLines:!0,complete:function(t){if(console.log(e.target.files[0].name),"diary.csv"!==e.target.files[0].name)A("You might have attached the wrong file. Please try again.");else{var n=t.data,r=null;try{r=(r=n.filter(function(e){return e["Watched Date"].slice(0,4)===h})).filter(function(e,t,n){return t===n.findIndex(function(t){return t.Date===e.Date&&t.Name===e.Name&&t.Rating===e.Rating&&t.Rewatch===e.Rewatch&&t.Tags===e.Tags&&t.Tags===e.Tags&&t["Watched Date"]===e["Watched Date"]&&t.Year===e.Year})})}catch(a){A("You might have attached the wrong file. Please try again.")}v(r)}}})}})),a.a.createElement("br",null)));t("error"),o(k)};var g=function(e){var t=e.onClick,n=e.filmDataObj;return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"FilmsWatched-Header"},a.a.createElement("p",null," ","In ".concat(h,", you watched")," "),a.a.createElement("h1",null," ","".concat(n.length," films")," "),a.a.createElement("button",{className:"button",onClick:t}," Next ")))};var y=function(e){var t=e.onClick,n=e.filmDataObj,o=Object(r.useState)(null),c=Object(i.a)(o,2),l=c[0],u=c[1];return Object(r.useEffect)(function(){if(console.log("minutes effected!"),null===l){for(var e=0,t=0;t<n.length;t++)e+=n[t].Runtime;u(e.toLocaleString("en-US"))}}),a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("p",null," In fact, you consumed "),a.a.createElement("h1",null," ","".concat(l)," "),a.a.createElement("p",null," minutes of film this year. "),a.a.createElement("button",{className:"button",onClick:t}," Next ")))};var b=function(e){e.onClick;var t=e.filmDataObj,n=Object(r.useState)(null),o=Object(i.a)(n,2),c=o[0],l=o[1],u=Object(r.useState)(!0),s=Object(i.a)(u,2),f=s[0],h=s[1];return Object(r.useEffect)(function(){if(console.log("effected!"),null===c){for(var e={},n=0;n<t.length;n++)for(var r=0;r<t[n].Genres.length;r++){var a=t[n].Genres[r].name;e.hasOwnProperty(a)?e[a]=e[a]+1:e[a]=1}var o=Object.entries(e).sort(function(e,t){return t[1]-e[1]});l(o),console.log(o),h(!1)}}),!1===f&&c.length>=5?a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"FilmsWatched-Header"},a.a.createElement("h1",{className:"title"},"Your Top Genres "),a.a.createElement("p",null,"1. ".concat(c[0][0])),a.a.createElement("p",null,"2. ".concat(c[1][0])),a.a.createElement("p",null,"3. ".concat(c[2][0])),a.a.createElement("p",null,"4. ".concat(c[3][0])),a.a.createElement("p",null,"5. ".concat(c[4][0])))):!0===f?a.a.createElement(p,null):a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"FilmsWatched-Header"},a.a.createElement("p",null,"We hate to say it, but need to watch more movies. \n                    We only have (a bit of) information on ".concat(c.length," of the genres you like.")," ")))};var E=function(e){var t=e.errorMessage,n=e.onClick;return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("p",{className:"App-body"}," ","".concat(t)," "),a.a.createElement("button",{className:"button",onClick:n}," Go home. ")))};var w=function(){var e=Object(r.useState)(0),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(null),u=Object(i.a)(c,2),s=u[0],f=u[1],h=Object(r.useState)(null),m=Object(i.a)(h,2),p=m[0],d=m[1];return 0===n?a.a.createElement(l,{onClick:function(){return o(1)}}):1===n?a.a.createElement(v,{setPageIndex:o,setFilmDataObj:f,setErrorMessage:d}):2===n?a.a.createElement(g,{onClick:function(){return o(3)},filmDataObj:s}):3===n?a.a.createElement(y,{onClick:function(){return o(4)},filmDataObj:s}):4===n?a.a.createElement(b,{onClick:function(){return o(4)},filmDataObj:s}):"error"===n?a.a.createElement(E,{errorMessage:p,onClick:function(){return o(0)}}):void 0},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null))),O()},2:function(e,t,n){},3:function(e,t,n){},8:function(e,t,n){e.exports=n(18)}},[[8,1,2]]]);
//# sourceMappingURL=main.cc8358d2.chunk.js.map