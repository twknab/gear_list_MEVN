(function(e){function t(t){for(var n,a,s=t[0],u=t[1],l=t[2],c=0,d=[];c<s.length;c++)a=s[c],o[a]&&d.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);m&&m(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},o={app:0},i=[];function s(e){return u.p+"js/"+({about:"about",addNewGearItem:"addNewGearItem",addNewGearList:"addNewGearList",dashboard:"dashboard",editGearItem:"editGearItem",editGearList:"editGearList",logout:"logout",register:"register",viewGearList:"viewGearList"}[e]||e)+"."+{about:"85ac091a",addNewGearItem:"fd844d0e",addNewGearList:"8832f267",dashboard:"48b1b65b",editGearItem:"c64f7747",editGearList:"413b787a",logout:"b87778e8",register:"bbea8606",viewGearList:"00403adf"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={about:1,dashboard:1,register:1,viewGearList:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({about:"about",addNewGearItem:"addNewGearItem",addNewGearList:"addNewGearList",dashboard:"dashboard",editGearItem:"editGearItem",editGearList:"editGearList",logout:"logout",register:"register",viewGearList:"viewGearList"}[e]||e)+"."+{about:"05dabb02",addNewGearItem:"31d6cfe0",addNewGearList:"31d6cfe0",dashboard:"f065b15b",editGearItem:"31d6cfe0",editGearList:"31d6cfe0",logout:"31d6cfe0",register:"0fffb736",viewGearList:"16947431"}[e]+".css",o=u.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===n||c===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],c=l.getAttribute("data-href");if(c===n||c===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],m.parentNode.removeChild(m),r(i)},m.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=s(e),l=function(t){c.onerror=c.onload=null,clearTimeout(d);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+n+": "+a+")");i.type=n,i.request=a,r[1](i)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var m=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},2044:function(e,t,r){},"35ca":function(e,t,r){"use strict";r("cadf"),r("551c"),r("097d");var n=r("bc3a"),a=r.n(n),o=a.a.create({baseURL:"/api",withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json"}});t["a"]={registerNewUser:function(e){return o.post("/user",e)},loginExistingUser:function(e){return o.post("/user/login",e)},getLoggedInUser:function(){return o.get("/user")},logoffUser:function(){return o.get("/user/logout")}}},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Navigation",{attrs:{navigationItems:e.nav}}),r("router-view",{attrs:{user:e.loggedInUser},on:{updateNavigation:e.updateNav,getGloballyLoggedInUser:e.getGloballyLoggedInUser}})],1)},o=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("mu-appbar",{staticStyle:{width:"100%"},attrs:{color:"purpleA700"}},[r("mu-button",{attrs:{slot:"right",icon:""},on:{click:e.openBottomSheet},slot:"right"},[r("mu-icon",{attrs:{value:"menu"}})],1),r("a",{staticClass:"logo-link",on:{click:function(t){e.$router.push({name:"dashboard"})}}},[e._v("🎒 GearList")])],1),r("mu-container",[r("mu-bottom-sheet",{attrs:{open:e.open},on:{"update:open":function(t){e.open=t}}},[r("mu-list",{on:{"item-click":e.closeBottomSheet}},[r("mu-sub-header",[e._v("Where To Boss?")]),e._l(e.navigationItems,(function(t,n,a){return r("mu-list-item",{key:a,attrs:{button:""},on:{click:function(r){e.$router.push({name:t.route})}}},[r("mu-list-item-action",[r("mu-icon",{attrs:{value:t.icon,color:t.color}})],1),r("mu-list-item-title",[e._v(e._s(t.title))])],1)}))],2)],1)],1)],1)},s=[],u=r("f3b5"),l=r.n(u),c={name:"Navigation",props:{navigationItems:{type:Object,default:function(){return l.a}}},data:function(){return{open:!1}},created:function(){},methods:{closeBottomSheet:function(){this.open=!1},openBottomSheet:function(){this.open=!0}}},d=c,m=(r("9028"),r("2877")),p=Object(m["a"])(d,i,s,!1,null,null,null),f=p.exports,g=r("6bf5"),h=r.n(g),b=r("35ca"),v={name:"App",components:{Navigation:f},data:function(){return{loggedInUser:{},open:!1,nav:{}}},methods:{updateNav:function(e){e||(this.nav=h.a),this.nav=e},getGloballyLoggedInUser:function(){var e=this;b["a"].getLoggedInUser().then((function(t){e.loggedInUser=t.data})).catch((function(){e.$router.push({name:"home"})}))}}},w=v,G=Object(m["a"])(w,a,o,!1,null,null,null),L=G.exports,y=(r("6762"),r("8c4f")),x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("mu-container",[r("mu-row",{attrs:{gutter:""}},[r("mu-col",{staticClass:"margin-top-md",attrs:{span:"12",sm:"12",md:"12",lg:"12",xl:"6"}},[r("div",{staticClass:"grid-cell"},[r("WelcomeImage")],1)]),r("mu-col",{staticClass:"margin-top",attrs:{span:"12",sm:"12",md:"12",lg:"12",xl:"6"}},[r("div",{staticClass:"grid-cell"},[r("Login",{on:{updateGlobalUser:e.updateGlobalUser}})],1)])],1)],1)],1)},_=[],I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("mu-container",[n("mu-col",{attrs:{span:"12"}},[n("img",{staticClass:"image-center",attrs:{alt:"Welcome to GearList",src:r("97cf")}})])],1)],1)},U=[],N={name:"WelcomeImage",data:function(){return{}},methods:{}},k=N,C=Object(m["a"])(k,I,U,!1,null,"2ebcf173",null),E=C.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("mu-container",[r("mu-row",{attrs:{gutter:""}},[r("mu-col",{attrs:{span:"12"}},[r("h1",[e._v("Login")])])],1),r("mu-row",{attrs:{span:"12"}},[r("mu-form",{ref:"existingUserLogin",staticClass:"margin-bottom-xl",attrs:{model:e.existingUser}},[Object.keys(e.errors).length>=1?r("div",{staticClass:"server-errors"},[r("h2",[e._v("Whoops, there's a few issues...")]),r("ul",e._l(e.errors,(function(t,n,a){return r("li",{key:a},[e._v("\n              "+e._s(t.message)+"\n            ")])})),0)]):e._e(),r("mu-form-item",{attrs:{label:"Email",prop:"email",type:"email",rules:e.emailRules}},[r("mu-text-field",{attrs:{prop:"email",color:"primary"},model:{value:e.existingUser.email,callback:function(t){e.$set(e.existingUser,"email",t)},expression:"existingUser.email"}})],1),r("mu-form-item",{attrs:{label:"Password",prop:"password",rules:e.passwordRules}},[r("mu-text-field",{attrs:{type:"password",prop:"password",color:"primary"},model:{value:e.existingUser.password,callback:function(t){e.$set(e.existingUser,"password",t)},expression:"existingUser.password"}})],1),r("mu-button",{attrs:{"full-width":"",round:"",color:"purpleA400",large:""},on:{click:e.submit}},[r("mu-icon",{attrs:{value:"exit_to_app"}}),r("span",{staticClass:"button-icon"},[e._v("login")])],1),r("div",{staticClass:"margin-top-md"},[r("mu-button",{staticClass:"flat-full-width",attrs:{flat:"",color:"white",large:""},on:{click:e.goToRegister}},[r("mu-icon",{attrs:{value:"thumb_up"}}),r("span",{staticClass:"button-icon"},[e._v("Or sign up!")])],1)],1)],1)],1)],1)],1)},j=[],A={name:"Login",data:function(){return{errors:{},emailRules:[{validate:function(e){return!!e},message:"Email is required"},{validate:function(e){return e.length>=5&&e.length<=50},message:"Email must be 5-50 characters"}],passwordRules:[{validate:function(e){return!!e},message:"Password is required"},{validate:function(e){return e.length>=12&&e.length<=24},message:"Password must be 12-24 characters"}],existingUser:{email:"",password:""}}},methods:{submit:function(){var e=this;this.$refs.existingUserLogin.validate().then((function(t){t&&b["a"].loginExistingUser(e.existingUser).then((function(){e.$router.push({name:"dashboard"})})).catch((function(t){e.errors=t.response.data}))}))},goToRegister:function(){this.$router.push({name:"register"})}}},S=A,$=Object(m["a"])(S,O,j,!1,null,null,null),T=$.exports,P={name:"home",components:{WelcomeImage:E,Login:T},created:function(){this.$emit("updateNavigation")},methods:{updateGlobalUser:function(e){this.$emit("updateUser",e)}}},B=P,R=Object(m["a"])(B,x,_,!1,null,null,null),W=R.exports;n["a"].use(y["a"]);var q=["/","/about","/register","/login"],M=new y["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:W},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/register",name:"register",component:function(){return r.e("register").then(r.bind(null,"73cf"))}},{path:"/dashboard",name:"dashboard",component:function(){return r.e("dashboard").then(r.bind(null,"7277"))}},{path:"/gear/item",name:"addGearItem",component:function(){return r.e("addNewGearItem").then(r.bind(null,"e34e"))}},{path:"/gear/item/edit/:id",name:"editGearItem",component:function(){return r.e("editGearItem").then(r.bind(null,"b3c2"))}},{path:"/gear/list",name:"addGearList",component:function(){return r.e("addNewGearList").then(r.bind(null,"4e39"))}},{path:"/gear/list/:id",name:"viewGearList",component:function(){return r.e("viewGearList").then(r.bind(null,"5741"))}},{path:"/gear/list/edit/:id",name:"editGearList",component:function(){return r.e("editGearList").then(r.bind(null,"63f2"))}},{path:"/logout",name:"logout",component:function(){return r.e("logout").then(r.bind(null,"9527"))}}],scrollBehavior:function(){return{x:0,y:0}}});M.beforeEach((function(e,t,r){!1===q.includes(e.path)?b["a"].getLoggedInUser().then((function(){r()})).catch((function(e){r(e)})):r()})),M.onError((function(){M.push({name:"home"})}));var D=M,J=r("2f62");n["a"].use(J["a"]);var F=new J["a"].Store({state:{},mutations:{},actions:{}}),H=r("30f4"),K=(r("d6f6"),r("efa6")),z=r.n(K),Q=r("37b7");n["a"].config.productionTip=!1,n["a"].use(H["a"]),z.a.add("gearListTheme",{primary:Q["purple"],secondary:Q["purple900"],success:"#4caf50",warning:"#fdd835",info:Q["blue"],error:Q["amberA200"],track:"#bdbdbd",text:{primary:"#fff",secondary:"#fafafa",alternate:"#fff",disabled:"#e1e1e1",hint:"#e1e1e1"},divider:"#e1e1e1",background:{paper:"#212121",chip:"#e0e0e0",default:"#212121"}},"light"),z.a.use("gearListTheme"),new n["a"]({router:D,store:F,render:function(e){return e(L)}}).$mount("#app")},"6bf5":function(e,t){e.exports={dashboard:{icon:"dashboard",color:"purpleA700",title:"Dashboard",route:"dashboard"},addGearItem:{icon:"add_box",color:"purpleA400",title:"New Gear Item",route:"addGearItem"},addGearList:{icon:"library_add",color:"purpleA200",title:"New Gear List",route:"addGearList"},logout:{icon:"phonelink_off",color:"purpleA700",title:"Log Off",route:"logout"}}},9028:function(e,t,r){"use strict";var n=r("2044"),a=r.n(n);a.a},"97cf":function(e,t,r){e.exports=r.p+"img/tent.3a2268cd.png"},f3b5:function(e,t){e.exports={home:{icon:"face",color:"purpleA700",title:"Login / Sign Up",route:"home"},about:{icon:"chat",color:"purpleA400",title:"About / Reach Out",route:"about"}}}});
//# sourceMappingURL=app.09709dcb.js.map