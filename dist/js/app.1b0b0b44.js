(function(t){function e(e){for(var o,i,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)i=s[l],a[i]&&d.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(o=!1)}o&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},i={app:0},a={app:0},r=[];function s(t){return c.p+"js/"+({about:"about",main:"main"}[t]||t)+"."+{about:"3a61ef71",main:"fddf2cef"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={main:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise(function(e,n){for(var o="css/"+({about:"about",main:"main"}[t]||t)+"."+{about:"31d6cfe0",main:"0e433876"}[t]+".css",a=c.p+o,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var u=r[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===a))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===o||l===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||a,r=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");r.request=o,delete i[t],f.parentNode.removeChild(f),n(r)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){i[t]=0}));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise(function(e,n){o=a[t]=[e,n]});e.push(o[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t),u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+o+": "+i+")");r.type=o,r.request=i,n[1](r)}a[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0651":function(t,e,n){"use strict";var o=n("c012"),i=n.n(o);i.a},1061:function(t,e,n){t.exports=n.p+"img/tok_negro.e2296ece.png"},4084:function(t,e,n){},"4fde":function(t,e,n){"use strict";var o=n("4084"),i=n.n(o);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("a026"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"app-content"},[n("router-view")],1)])},a=[],r=n("d4ec"),s=n("bee2"),c=n("8aa5"),u=n.n(c),l=function(){function t(){Object(r["a"])(this,t),this.email="",this.status=""}return Object(s["a"])(t,[{key:"doRecoveryPassword",value:function(t){var e=this;return new Promise(function(n,o){u.a.auth().sendPasswordResetEmail(t).then(function(t){e.$ga.event({eventCategory:"auth_recovery_password",eventAction:"successful",eventLabel:"ok"}),n(t)}).catch(function(t){e.$ga.event({eventCategory:"auth_recovery_password",eventAction:"error",eventLabel:"error"}),o(t)})})}},{key:"doCheckIsUserIsLogged",value:function(){return new Promise(function(t){u.a.auth().onAuthStateChanged(function(e){t(!!e)})})}},{key:"doLogging",value:function(t,e){return new Promise(function(n){u.a.auth().signInWithEmailAndPassword(t,e).then(function(t){return n({status:!0,message:t})}).catch(function(t){return n({status:!1,message:t})})})}}]),t}(),d=l,f={name:"App",methods:{},mounted:function(){var t=new d;t.doCheckIsUserIsLogged().then(function(t){0})},data:function(){return{}}},p=f,v=(n("7c55"),n("2877")),g=Object(v["a"])(p,i,a,!1,null,null,null);g.options.__file="App.vue";var m=g.exports,h=n("8c4f"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view login-view"},[n("div",{staticClass:"view-top"},[n("tok-cover-image",{attrs:{"is-loaded":!t.UI.isButtonLoaded}})],1),n("div",{staticClass:"view-bottom"},[n("tok-loading-bar",{on:{onLoaded:function(e){t.setIntroLoaded()}}}),t.UI.isLoaded?n("button",{staticClass:"button no-solid theme-light",class:{active:"SIGNIN"==t.UI.ActiveButton},on:{click:function(e){t.goToLoginView("SIGNIN")}}},[n("h2",{staticClass:"button-title x100"},[t._v("LOG IN")])]):t._e(),t.UI.isLoaded?n("button",{staticClass:"button no-solid theme-light",class:{active:"SIGNUP"==t.UI.ActiveButton},staticStyle:{color:"white"},on:{click:function(e){t.goToLoginView("SIGNUP")}}},[n("h2",{staticClass:"button-title x75"},[t._v("CREATE ACCOUNT")]),n("h3",{staticClass:"button-subtitle x25"},[t._v("I'M NEW IN TOK")])]):t._e()],1)])},I=[],w=n("0284"),L=n.n(w),E=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"cover-login"},[o("div",{staticClass:"cover content",class:{off:!t.isLoaded}},[o("img",{staticClass:"logo",class:{off:t.isLoaded},attrs:{alt:"TokPets Logo",src:n("1061")}})]),o("div",{staticClass:"cover background-top",class:{off:!t.isLoaded}},[o("img",{staticClass:"logo",class:{off:!t.isLoaded},attrs:{alt:"TokPets Logo",src:n("cfee")}})]),o("div",{staticClass:"cover background-bottom",class:{off:!t.isLoaded}})])},C=[],k={name:"TokCoverImage",methods:{},props:["isLoaded"],mounted:function(){},data:function(){return{isBgActive:!0}}},_=k,y=(n("0651"),Object(v["a"])(_,E,C,!1,null,null,null));y.options.__file="TokCoverImage.vue";var N=y.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.LEVEL<99?n("div",{staticClass:"progress-bar"},[n("div",{staticClass:"background"},[n("div",{staticClass:"level",style:{width:t.LEVEL+"%"}})])]):t._e()},T=[],A={name:"TokLoadingBar",methods:{},mounted:function(){var t=this;this.INTERVAL=setInterval(function(){var e=5*Math.random();t.LEVEL=t.LEVEL+e,t.LEVEL>99&&(clearInterval(t.INTERVAL),t.$emit("onLoaded"))},50)},data:function(){return{LEVEL:0,INTERVAL:{}}}},S=A,P=(n("f325"),Object(v["a"])(S,O,T,!1,null,null,null));P.options.__file="TokLoadingBar.vue";var U=P.exports,x={name:"login",components:{TokCoverImage:N,TokLoadingBar:U},methods:{track:function(){Object(w["page"])("/")},doShowModal:function(){this.$modal.show("modal-reset-password")},setIntroLoaded:function(){this.UI.isLoaded=!0},goToLoginView:function(t){var e=this;"SIGNIN"===t&&(this.UI.ActiveButton="SIGNIN",this.UI.isButtonLoaded=!0,setTimeout(function(){e.$router.push("login/signin")},1e3)),"SIGNUP"===t&&(this.UI.ActiveButton="SIGNUP",this.UI.isButtonLoaded=!0,setTimeout(function(){e.$router.push("login/signup")},1e3))}},created:function(){this.WINDOW.width=Math.max(.8*window.screen.width,250),this.WINDOW.height=Math.max(.3*window.screen.height,250)},mounted:function(){this.track()},data:function(){return{USER:{},ERROR:{},PET:{},WINDOW:{width:"",height:""},UI:{isLoaded:!1,isButtonLoaded:!1,ActiveButton:"SIGNIN"}}}},j=x,R=(n("4fde"),Object(v["a"])(j,b,I,!1,null,null,null));R.options.__file="Login.vue";var B=R.exports,V=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"view login-signin-view"},[o("img",{staticClass:"login-signin-view-logo",attrs:{src:n("1061")}}),o("form",[o("div",{staticClass:"input-group input-email"},[t._m(0),o("div",{staticClass:"input-group-wrapper"},[o("input",{staticClass:"input-email",attrs:{type:"text",placeholder:"E-mail"}}),o("img",{staticClass:"input-icon",attrs:{src:t.UI.EMAIL.ICON.src,alt:t.UI.EMAIL.ICON.alt}})])])]),o("div",{staticClass:"view-bottom"},[o("button",{staticClass:"button no-solid theme-dark active",on:{click:function(e){t.goToLoginView("SIGNIN")}}},[o("h2",{staticClass:"button-title x100"},[t._v("LOG IN")])]),o("button",{staticClass:"button no-solid theme-dark",staticStyle:{color:"black"},on:{click:function(e){t.goToLoginView("SIGNUP")}}},[o("h2",{staticClass:"button-title x75"},[t._v("CREATE ACCOUNT")]),o("h3",{staticClass:"button-subtitle x25"},[t._v("I'M NEW IN TOK")])])])])},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group-error"},[n("span",[t._v("Unregistred email")])])}],G={name:"signin",components:{},methods:{track:function(){Object(w["page"])("/")}},created:function(){},mounted:function(){this.track()},data:function(){return{USER:{},ERROR:{},PET:{},UI:{EMAIL:{ICON:{src:"../../assets/forms/check_negro.png",alt:"Email Tok Pets"}}}}}},M=G,W=(n("cc02"),Object(v["a"])(M,V,$,!1,null,null,null));W.options.__file="SignIn.vue";var K=W.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view login-signup-view"})},D=[],F={name:"login",components:{},methods:{track:function(){Object(w["page"])("/")}},created:function(){},mounted:function(){this.track()},data:function(){return{USER:{},ERROR:{},PET:{},WINDOW:{width:"",height:""},UI:{isLoaded:!1,isButtonLoaded:!1,ActiveButton:"SIGIN"}}}},J=F,Y=(n("d7d5"),Object(v["a"])(J,q,D,!1,null,null,null));Y.options.__file="SignUp.vue";var z=Y.exports;o["a"].use(h["a"]);var H=new h["a"]({mode:"history",base:"/",routes:[{path:"/",name:"login",component:B},{path:"/login/signin",name:"login/signin",component:K},{path:"/login/signup",name:"login/signup",component:z},{path:"/main",name:"main",component:function(){return n.e("main").then(n.bind(null,"cd56"))}},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/map",name:"map",component:function(){return n.e("main").then(n.bind(null,"4bb4"))}},{path:"/stats",name:"stats",component:function(){return n.e("main").then(n.bind(null,"ed93"))}}]}),X=n("2f62");o["a"].use(X["a"]);var Q=new X["a"].Store({state:{},mutations:{},actions:{}}),Z=n("1881"),tt=n.n(Z),et=n("755e"),nt=n("9483");Object(nt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var ot=n("bc3a"),it=n.n(ot),at={},rt=it.a.create(at);rt.interceptors.request.use(function(t){return t},function(t){return Promise.reject(t)}),rt.interceptors.response.use(function(t){return t},function(t){return Promise.reject(t)}),Plugin.install=function(t){t.axios=rt,window.axios=rt,Object.defineProperties(t.prototype,{axios:{get:function(){return rt}},$axios:{get:function(){return rt}}})},o["a"].use(Plugin);Plugin;o["a"].config.productionTip=!1;var st=n("59ca"),ct={apiKey:"AIzaSyC9SLLJvSLTKeX_ICLB1xQP4aXlo4TnUYA",authDomain:"dev-tokpets-pwa-c6c74.firebaseapp.com",databaseURL:"https://dev-tokpets-pwa-c6c74.firebaseio.com",projectId:"dev-tokpets-pwa-c6c74",storageBucket:"dev-tokpets-pwa-c6c74.appspot.com",messagingSenderId:"535510308350"};st.initializeApp(ct);var ut=st.firestore();ut.settings({timestampsInSnapshots:!0}),o["a"].use(tt.a),o["a"].use(L.a,{id:"UA-128950882-1",router:H}),o["a"].use(et,{load:{key:"REPLACE-THIS-WITH-YOUR-KEY-FROM-ABOVE",libraries:"places"}}),new o["a"]({router:H,store:Q,render:function(t){return t(m)}}).$mount("#app")},"5c48":function(t,e,n){},"76bf":function(t,e,n){},"7c55":function(t,e,n){"use strict";var o=n("5c48"),i=n.n(o);i.a},a10b:function(t,e,n){},c012:function(t,e,n){},cc02:function(t,e,n){"use strict";var o=n("76bf"),i=n.n(o);i.a},cfee:function(t,e,n){t.exports=n.p+"img/tok_blanco.76222f4b.png"},d7d5:function(t,e,n){"use strict";var o=n("a10b"),i=n.n(o);i.a},f325:function(t,e,n){"use strict";var o=n("fa27"),i=n.n(o);i.a},fa27:function(t,e,n){}});
//# sourceMappingURL=app.1b0b0b44.js.map