(function(t){function e(e){for(var i,a,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)a=s[l],o[a]&&d.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(i=!1)}i&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},a={app:0},o={app:0},r=[];function s(t){return c.p+"js/"+({about:"about",main:"main"}[t]||t)+"."+{about:"3a61ef71",main:"f9bc09a2"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={main:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var i="css/"+({about:"about",main:"main"}[t]||t)+"."+{about:"31d6cfe0",main:"0e433876"}[t]+".css",o=c.p+i,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var u=r[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===i||l===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===i||l===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var i=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");r.request=i,delete a[t],p.parentNode.removeChild(p),n(r)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){a[t]=0}));var i=o[t];if(0!==i)if(i)e.push(i[2]);else{var r=new Promise(function(e,n){i=o[t]=[e,n]});e.push(i[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t),u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+i+": "+a+")");r.type=i,r.request=a,n[1](r)}o[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"041b":function(t,e,n){},"097d6":function(t,e,n){t.exports=n.p+"img/dog_normal.f0d6c195.png"},"12d4":function(t,e,n){"use strict";var i=n("a647"),a=n.n(i);a.a},"2e01":function(t,e,n){"use strict";var i=n("30b6"),a=n.n(i);a.a},"30b6":function(t,e,n){},3832:function(t,e,n){t.exports=n.p+"img/loading_spinner_gif.9b07cdec.gif"},4328:function(t,e,n){t.exports=n.p+"img/large_title_and_logo.ccd204ef.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("a026"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[t.LOADING?i("div",{staticClass:"app-loading"},[i("img",{attrs:{src:n("3832")}})]):t._e(),i("div",{staticClass:"app-content"},[i("router-view")],1)])},o=[],r=n("8aa5"),s=n.n(r),c={name:"App",methods:{},mounted:function(){var t=this;s.a.auth().onAuthStateChanged(function(e){e&&t.$router.push("main"),setTimeout(function(){t.LOADING=!1},500)})},data:function(){return{LOADING:!0}}},u=c,l=(n("7c55"),n("2877")),d=Object(l["a"])(u,a,o,!1,null,null,null);d.options.__file="App.vue";var p=d.exports,f=n("8c4f"),m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"view"},[i("img",{staticClass:"main-logo",attrs:{alt:"TokPets Logo",src:n("4328")}}),i("tabs",{staticClass:"tabs"},[i("tab",{attrs:{title:" - SIGN IN - ",active:"true"}},[i("form-sign-in"),i("a",{on:{click:function(e){t.doShowModal()}}},[t._v(" Forgot your password? ")])],1),i("tab",{attrs:{title:" - SIGN UP - "}},[i("form-sign-up")],1)],1),i("modal",{attrs:{name:"reset-password-modal",width:225,height:200,transition:"pop-out"}},[i("div",{staticClass:"modal-content"},[i("h1",[t._v("RESET PASSWORD")]),i("p",[t._v("We will send you an email to reset your password")]),i("form-recovery-password")],1)])],1)},v=[],h=n("0284"),g=n.n(h),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"tabs-header"},t._l(t.tabList,function(e,i){return n("li",t._b({key:i,staticClass:"tab-header",class:{active:t.isActive(i),disabled:e.disabled},on:{click:function(e){t.select(i)}}},"li",e.dataAttrs,!1),[t._v("\n      "+t._s(e.title)+"\n    ")])}),0),n("div",{staticClass:"tab-content"},[t._t("default")],2)])},A=[],E=(n("20d6"),{data:function(){return{tabList:[],activeTabIndex:0}},mounted:function(){var t=this;this.select(0),this.activeTabIndex=this.getInitialActiveTab(),this.$root.$on("select-tab",function(e){return t.select(e)})},methods:{isActive:function(t){return this.activeTabIndex===t},select:function(t){var e=this.tabList[t];e.isDisabled||(this.activeTabIndex=t),this.$emit("changed",e)},getInitialActiveTab:function(){var t=this.tabList.findIndex(function(t){return t.active});return-1===t?0:t}}}),S=E,y=(n("a0e6"),Object(l["a"])(S,b,A,!1,null,"1b634c22",null));y.options.__file="Tabs.vue";var w=y.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isActive?n("div",{class:{disabled:t.isDisabled}},[t._t("default")],2):t._e()},I=[],_={props:{title:{type:String,required:!0},active:{type:[Boolean,String],default:!1},disabled:{type:[Boolean,String],default:!1},dataAttrs:{type:Object}},data:function(){return{isActive:this.active,isDisabled:this.disabled}},created:function(){this.$parent.tabList.push(this)},computed:{index:function(){return this.$parent.tabList.indexOf(this)}},watch:{"$parent.activeTabIndex":function(t){this.isActive=this.index===t},disabled:function(){this.isDisabled=this.disabled}}},P=_,x=Object(l["a"])(P,R,I,!1,null,null,null);x.options.__file="Tab.vue";var T=x.exports,O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmitSignIn(e)}}},[i("div",{staticClass:"input-group email"},[i("img",{staticClass:"email",attrs:{src:n("90e7"),alt:"Email Icon"}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.USER.email,expression:"USER.email"}],attrs:{type:"email",placeholder:"Ingresa tu Email",required:"","aria-required":"true"},domProps:{value:t.USER.email},on:{input:function(e){e.target.composing||t.$set(t.USER,"email",e.target.value)}}})]),i("div",{staticClass:"input-group password"},[i("img",{staticClass:"password",attrs:{src:n("85e6"),alt:"Password Icon"}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.USER.password,expression:"USER.password"}],attrs:{type:"password",placeholder:"Ingresa tu Password",required:"","aria-required":"true"},domProps:{value:t.USER.password},on:{input:function(e){e.target.composing||t.$set(t.USER,"password",e.target.value)}}})]),i("input",{attrs:{type:"submit",value:"SIGN IN"}})])},k=[],C={name:"FormSignIn",components:{},methods:{onSubmitSignIn:function(){var t=this;s.a.auth().signInWithEmailAndPassword(this.USER.email,this.USER.password).then(function(e){t.$ga.event({eventCategory:"auth_sign_in",eventAction:"successful",eventLabel:"ok"}),t.$router.push("main")}).catch(function(e){t.$ga.event({eventCategory:"auth_sign_in",eventAction:"error",eventLabel:"error"})})}},mounted:function(){},data:function(){return{USER:{email:"",password:""}}}},U=C,N=(n("586d"),Object(l["a"])(U,O,k,!1,null,"2bd2553c",null));N.options.__file="FormSignIn.vue";var D=N.exports,L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{staticClass:"Form-Pet-Info",on:{submit:function(e){return e.preventDefault(),t.onSubmitSignUp(e)}}},[i("div",{staticClass:"form-group"},[i("h1",[t._v("PET INFORMATION")]),i("div",{staticClass:"pet-icons"},["dog"==t.PET.type?i("img",{staticClass:"pet-icon-dog",attrs:{src:n("097d6"),alt:"Dog Icon"},on:{click:function(e){t.PET.type="dog"}}}):t._e(),"dog"!=t.PET.type?i("img",{staticClass:"pet-icon-dog",attrs:{src:n("e46e"),alt:"Dog Icon"},on:{click:function(e){t.PET.type="dog"}}}):t._e(),"cat"==t.PET.type?i("img",{staticClass:"pet-icon-cat",attrs:{src:n("097d6"),alt:"Cat Icon"},on:{click:function(e){t.PET.type="cat"}}}):t._e(),"cat"!=t.PET.type?i("img",{staticClass:"pet-icon-cat",attrs:{src:n("e46e"),alt:"Cat Icon"},on:{click:function(e){t.PET.type="cat"}}}):t._e()]),t._l(t.PET_FIELDS,function(t){return i("div",{key:t.placeholder,staticClass:"input-group"},[i("img",{attrs:{alt:"",src:""}}),i("input",{attrs:{type:"text",placeholder:t.placeholder}})])})],2),i("div",{staticClass:"form-group"},[i("h1",[t._v("OWNER INFO")]),t._l(t.USER_FIELDS,function(t){return i("div",{key:t.placeholder,staticClass:"input-group"},[i("img",{attrs:{alt:"",src:""}}),i("input",{attrs:{type:"text",placeholder:t.placeholder}})])})],2),i("input",{attrs:{type:"submit",value:"SING UP"}})])},j=[],F=(n("ac6a"),n("456d"),n("d4ec")),M=function t(){Object(F["a"])(this,t),this.name="",this.birthday="",this.country="",this.city="",this.phone="",this.email=""},q=M,V=function t(){Object(F["a"])(this,t),this.name="",this.gender="",this.type="dog",this.birthday="",this.breed="",this.size="",this.country="",this.city="",this.trackerCode=""},B=V,K={name:"FormSignUp",components:{},methods:{onSubmitSignUp:function(){s.a.auth().createUserWithEmailAndPassword(this.USER.email,this.USER.password).then(function(t){console.warn("*** SIGN IN"),console.log(t)}).catch(function(t){console.error(t)})}},mounted:function(){var t=new q;this.USER=t;var e=new B;this.PET=e;var n=Object.keys(this.USER),i=Object.keys(this.PET);this.USER_FIELDS=n.map(function(t){return{placeholder:t}}),this.PET_FIELDS=i.map(function(t){return{placeholder:t}})},data:function(){return{USER:{},ERROR:{},PET:{},USER_FIELDS:[],PET_FIELDS:[]}}},J=K,W=(n("ce14"),Object(l["a"])(J,L,j,!1,null,"5e9cb3d7",null));W.options.__file="FormSignUp.vue";var G=W.exports,Y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.ERROR.PASSWORD_RESET?i("div",{staticClass:"error-message"},[t._v("\n    "+t._s(t.ERROR.PASSWORD_RESET)+"\n    ")]):t._e(),i("form",{staticClass:"dark-form",on:{submit:function(e){e.preventDefault(),t.onPasswordRecovery()}}},[i("div",{staticClass:"input-group email"},[i("img",{staticClass:"email",attrs:{src:n("90e7"),alt:"Email Icon"}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.USER.email,expression:"USER.email"}],attrs:{type:"email",placeholder:"Ingresa tu Email",required:""},domProps:{value:t.USER.email},on:{input:function(e){e.target.composing||t.$set(t.USER,"email",e.target.value)}}})]),i("input",{attrs:{type:"submit",value:"-SUBMIT-"}})])])},X=[],$=n("bee2"),Z=function(){function t(){Object(F["a"])(this,t),this.email="",this.status=""}return Object($["a"])(t,[{key:"doRecoveryPassword",value:function(t){var e=this;return new Promise(function(n,i){s.a.auth().sendPasswordResetEmail(t).then(function(t){e.$ga.event({eventCategory:"auth_recovery_password",eventAction:"successful",eventLabel:"ok"}),n(t)}).catch(function(t){e.$ga.event({eventCategory:"auth_recovery_password",eventAction:"error",eventLabel:"error"}),i(t)})})}}]),t}(),H=Z,z={name:"FormRecoveryPassword",components:{},methods:{onPasswordRecovery:function(){var t=this;this.AUTH.doRecoveryPassword(this.USER.email).then(function(e){t.$modal.hide("reset-password-modal")}).catch(function(e){"auth/invalid-email"==e.code&&(t.ERROR.PASSWORD_RESET=" Invalid Email ")})}},mounted:function(){this.AUTH=new H},data:function(){return{USER:{email:""},ERROR:{PASSWORD_RESET:""}}}},Q=z,tt=(n("2e01"),Object(l["a"])(Q,Y,X,!1,null,"73f4d7a9",null));tt.options.__file="FormRecoveryPassword.vue";var et=tt.exports,nt={name:"home",components:{Tabs:w,Tab:T,FormSignIn:D,FormSignUp:G,FormRecoveryPassword:et},methods:{track:function(){Object(h["page"])("/")},doShowModal:function(){this.$modal.show("reset-password-modal")}},created:function(){},mounted:function(){this.track()},data:function(){return{USER:{},ERROR:{},PET:{},USER_FIELDS:[],PET_FIELDS:[]}}},it=nt,at=(n("12d4"),Object(l["a"])(it,m,v,!1,null,"26f12f17",null));at.options.__file="Home.vue";var ot=at.exports;i["a"].use(f["a"]);var rt=new f["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:ot},{path:"/main",name:"main",component:function(){return n.e("main").then(n.bind(null,"cd56"))}},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/map",name:"map",component:function(){return n.e("main").then(n.bind(null,"4bb4"))}},{path:"/stats",name:"stats",component:function(){return n.e("main").then(n.bind(null,"ed93"))}}]}),st=n("2f62");i["a"].use(st["a"]);var ct=new st["a"].Store({state:{},mutations:{},actions:{}}),ut=n("1881"),lt=n.n(ut),dt=n("9483");Object(dt["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var pt=n("bc3a"),ft=n.n(pt),mt={},vt=ft.a.create(mt);vt.interceptors.request.use(function(t){return t},function(t){return Promise.reject(t)}),vt.interceptors.response.use(function(t){return t},function(t){return Promise.reject(t)}),Plugin.install=function(t){t.axios=vt,window.axios=vt,Object.defineProperties(t.prototype,{axios:{get:function(){return vt}},$axios:{get:function(){return vt}}})},i["a"].use(Plugin);Plugin;i["a"].config.productionTip=!1;var ht=n("59ca"),gt={apiKey:"AIzaSyBOt3k5zNJ34ii-pVyojeMvOTNt_D0tM34",authDomain:"web-gastroinnova.firebaseapp.com",databaseURL:"https://web-gastroinnova.firebaseio.com",projectId:"web-gastroinnova",storageBucket:"web-gastroinnova.appspot.com",messagingSenderId:"418551106596"};ht.initializeApp(gt);var bt=ht.firestore();bt.settings({timestampsInSnapshots:!0}),i["a"].use(lt.a),i["a"].use(g.a,{id:"UA-128950882-1",router:rt}),new i["a"]({router:rt,store:ct,render:function(t){return t(p)}}).$mount("#app")},"586d":function(t,e,n){"use strict";var i=n("041b"),a=n.n(i);a.a},"5c48":function(t,e,n){},6499:function(t,e,n){},"7c55":function(t,e,n){"use strict";var i=n("5c48"),a=n.n(i);a.a},"85e6":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAuCAYAAAA/SqkPAAAACXBIWXMAAAsSAAALEgHS3X78AAACzklEQVRYhc2YL28bQRDFfzkZ2KDAhg68klEMG1jD0MCSfoLC0uLS0HyFBgYmpFLDasNUQ2rYkEqxVFAfc8HtxnPn3fOt/6lPsmTvruftvNmZ2buT5XJJG4hIDxgBfSB3wwXwE5iq6qKVIYeTTcSO8BJ407CsAG5VdbIXYhEZAh+Abkt7c+ARmKnq41bEEVJv+Al4ppR8HNnYnFKF4AaCxE7ej5TxhFLKO1V9iKxtCsVNKAQx4gvgwgxdqepTxLDdQO4+b2vT16o6ayR2Bj6xku9eVe+bSAObOAfemaEC+GxPfhb438iQFqmkAE7aGzPUpaZCiNjGqnV6RMjtpsdOzXViERmwKg4Aa4cpEQ+UMkPp9YvtusfW25mqPu/C6mJqVRvGiC1mDXMpsJuPemxlbkyfBFgHch/nJo+Tin4MLv/nZmgE0Kmtsx6/EhH7e75DzB9ZpVMOTOrEFu/rAyKyDWlBNa1yMFK7pnAIdCkbiUdfRIbWYyvrH+B3zUDOdiiA71Rrf26JX5vvX0OdaFu4puPxF5hmbqIHnJnJfeVwyF6mqgsf45GZmG9qgamotcSuiAw8cd9MNF5ZdoAl74cKyF4KRwC2iAw98WlkwT5hi0/PE9vL2qE8rsAT28N0qEISJD6KlyHio6OpSVTgrkV9ylD0zNRimyrXinjTo4yInKrqlxTitlKfx0gdmh7ogvAeD8xY6KDZkz5llZMXgbVJxLZkbqrTE197a10nCV7qyhVnw3+CeW4v623Qcaf1BZF7ld3MpYhc1uZ/pL4RyKjKHOvD3zbYSe5oGVXpitAi15+vAhsrKA9bMnGHajH4FVvoyK9TCWLISDtYe0O9gOz0kLYL8dHw33SnsXtemlPK7juSxynxV0s2TPb0exuVB4I68RnV+/WhsMiAWyL5eyA8AdOT5XJp31H5YuIlLajm9oJwE7GXgx7r9dxLP/MN5h+P++5sHcE9ewAAAABJRU5ErkJggg=="},"90e7":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAjCAYAAADxG9hnAAAACXBIWXMAAAsSAAALEgHS3X78AAACNklEQVRYhe2YrXviQBDGf+VBgAQZGzVPT97J2p6svNhKTt4f08pWgqwstvbk3TMKeZEgieMEE5gsCc2mLZi+and2k7w773wkudhsNpwDIjIEUgBV/XNxDiIikgIZMDLT7CRERGQMXAJfzJQGWxZ92/gNuAKSD2fVgL6IJMCPcxEo0WPvrlMiBx69oW/GcNNUVUN7J5jHfwX3vycIgx6wDq5NgJ8W2e+BzI1XwL2qrgMiq17DxQNg8lYyIhImwNRIAAydfRkSWQGFm9+aa7uQSIDvzvSiqgs394c88MgSuHNkBkBmVTAWmV0P2wPOg/Wxf+6BNBakD86UANcxDETkmmZJSpRVFVVd1MaIudCf4EpEWqW5SeKJh5LUokfVRbv4UNU54G/QVqIwS0JJGomM3PxfsD6jGi83x24mIje8LkkjkUao6hJ4dqav1sDqSKRs+1WJeRtJWhExMi9Uq+9B4Jpkt86Um7St8SoRw5Mb13nFp2oBTGNItCZiLvZu3nVrS9VLt/bcpU/1qWbNscCaAxMbpxYTY6pS/TYpoxFmTeNJarySUc2inKqE0URiMHPjEdW4eGybqm8mYulclw13ttYZsR4pK+5fmxbALDY46yp0P5aIkXmwnlJ09ISvvovORIzMu7xKloiW5qPwSSTEJ5EQYdZMRKRuX8H+pSln35Nav2/Ark00Esk5/DoPMXB7On/rNBwS2Eoz50izOwEKgFb/R6yKlmW59MiQuN8Y4f6FkZiq6vo/XMjNZ9IyAwgAAAAASUVORK5CYII="},a0e6:function(t,e,n){"use strict";var i=n("6499"),a=n.n(i);a.a},a647:function(t,e,n){},b969:function(t,e,n){},ce14:function(t,e,n){"use strict";var i=n("b969"),a=n.n(i);a.a},e46e:function(t,e,n){t.exports=n.p+"img/dog_inverted.23ba2028.png"}});
//# sourceMappingURL=app.2c25c45c.js.map