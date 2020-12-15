(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["editGearItem"],{"11e9":function(t,e,r){var n=r("52a7"),a=r("4630"),i=r("6821"),o=r("6a99"),c=r("69a8"),s=r("c69a"),u=Object.getOwnPropertyDescriptor;e.f=r("9e1e")?u:function(t,e){if(t=i(t),e=o(e,!0),s)try{return u(t,e)}catch(r){}if(c(t,e))return a(!n.f.call(t,e),t[e])}},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"5dbc":function(t,e,r){var n=r("d3f4"),a=r("8b97").set;t.exports=function(t,e,r){var i,o=e.constructor;return o!==r&&"function"==typeof o&&(i=o.prototype)!==r.prototype&&n(i)&&a&&a(t,i),t}},"67ad":function(t,e,r){"use strict";var n=r("bc3a"),a=r.n(n),i=a.a.create({baseURL:"/api",withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json"}});e["a"]={createNewGearItem:function(t){return i.post("/gear-item",t)},getAllGearItemsForUser:function(){return i.get("/gear-item")},getItem:function(t){return i.get("/gear-item/find-item?gearItemId=".concat(t))},updateGearItem:function(t){return i.post("/gear-item/update",t)},deleteGearItem:function(t){return i.get("/gear-item/delete?gearItemId=".concat(t))},changeCompleteStatus:function(t,e,r){return i.get("/gear-item/complete?gearItemId=".concat(t,"&gearListId=").concat(e,"&gearCompletedStatus=").concat(r))}}},"8b97":function(t,e,r){var n=r("d3f4"),a=r("cb7c"),i=function(t,e){if(a(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(a){e=!0}return function(t,r){return i(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:i}},9093:function(t,e,r){var n=r("ce10"),a=r("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,a)}},aa77:function(t,e,r){var n=r("5ca1"),a=r("be13"),i=r("79e5"),o=r("fdef"),c="["+o+"]",s="​",u=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),f=function(t,e,r){var a={},c=i((function(){return!!o[t]()||s[t]()!=s})),u=a[t]=c?e(p):o[t];r&&(a[r]=u),n(n.P+n.F*c,"String",a)},p=f.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=f},b3c2:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("mu-container",[r("mu-row",{attrs:{gutter:""}},[r("mu-col",{attrs:{span:"12"}},[r("h1",[t._v("Edit Gear Item")])])],1),r("mu-row",{attrs:{span:"12"}},[r("mu-form",{ref:"editGearItem",attrs:{model:t.gearItem}},[Object.keys(t.errors).length>=1?r("div",{staticClass:"server-errors"},[r("h2",[t._v("Whoops, there's a few issues...")]),r("ul",t._l(t.errors,(function(e,n,a){return r("li",{key:a},[t._v("\n              "+t._s(e.message)+"\n            ")])})),0)]):t._e(),r("mu-form-item",{attrs:{label:"Title",prop:"title",type:"text",rules:t.titleRules}},[r("mu-text-field",{attrs:{prop:"title",color:"primary"},model:{value:t.gearItem.title,callback:function(e){t.$set(t.gearItem,"title",e)},expression:"gearItem.title"}})],1),r("mu-form-item",{attrs:{label:"Weight (in Ounces)",prop:"weight",rules:t.weightRules}},[r("mu-text-field",{attrs:{type:"number",prop:"weight",color:"primary"},model:{value:t.gearItem.weight,callback:function(e){t.$set(t.gearItem,"weight",e)},expression:"gearItem.weight"}})],1),r("mu-button",{attrs:{"full-width":"",round:"",color:"purpleA700",large:""},on:{click:t.submit}},[r("mu-icon",{attrs:{value:"update"}}),r("span",{staticClass:"button-icon"},[t._v("Update Item")])],1),r("div",{staticClass:"margin-top-md"},[r("mu-button",{staticClass:"flat-full-width",attrs:{flat:"",color:"white",large:""},on:{click:function(e){t.$router.push({name:"dashboard"})}}},[r("mu-icon",{attrs:{value:"close"}}),r("span",{staticClass:"button-icon"},[t._v("Nevermind")])],1)],1)],1)],1)],1)],1)},a=[],i=(r("c5f6"),r("67ad")),o={name:"EditGearItem",props:{user:{type:Object,required:!0}},data:function(){return{errors:{},titleRules:[{validate:function(t){return!!t},message:"Title is required"},{validate:function(t){return t.length>=2&&t.length<=50},message:"Title must be 2-50 characters"}],weightRules:[{validate:function(t){return!!t},message:"Weight is required"},{validate:function(t){return Number(t)>=0&&Number(t)<=16e3},message:"Weight must be 0-16000 ounces"}],gearItem:{title:"",weight:"",gearItemOwner:""}}},created:function(){this.getGearItem(this.$route.params.id)},methods:{submit:function(){var t=this;this.$refs.editGearItem.validate().then((function(e){e&&i["a"].updateGearItem(t.gearItem).then((function(){t.$router.push({name:"dashboard"})})).catch((function(e){t.errors=e.response.data}))}))},getGearItem:function(t){var e=this;i["a"].getItem(t).then((function(t){e.gearItem=t.data})).catch((function(t){console.log("Something's gone wrong: ",t)}))}}},c=o,s=r("2877"),u=Object(s["a"])(c,n,a,!1,null,null,null);e["default"]=u.exports},c5f6:function(t,e,r){"use strict";var n=r("7726"),a=r("69a8"),i=r("2d95"),o=r("5dbc"),c=r("6a99"),s=r("79e5"),u=r("9093").f,l=r("11e9").f,f=r("86cc").f,p=r("aa77").trim,m="Number",g=n[m],d=g,h=g.prototype,I=i(r("2aeb")(h))==m,b="trim"in String.prototype,v=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():p(e,3);var r,n,a,i=e.charCodeAt(0);if(43===i||45===i){if(r=e.charCodeAt(2),88===r||120===r)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+e}for(var o,s=e.slice(2),u=0,l=s.length;u<l;u++)if(o=s.charCodeAt(u),o<48||o>a)return NaN;return parseInt(s,n)}}return+e};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof g&&(I?s((function(){h.valueOf.call(r)})):i(r)!=m)?o(new d(v(e)),r,g):v(e)};for(var _,w=r("9e1e")?u(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;w.length>y;y++)a(d,_=w[y])&&!a(g,_)&&f(g,_,l(d,_));g.prototype=h,h.constructor=g,r("2aba")(n,m,g)}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=editGearItem.7fd18f57.js.map