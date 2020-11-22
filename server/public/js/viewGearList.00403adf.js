(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["viewGearList"],{"03c6":function(t,e,n){t.exports=n("e9c6")},"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"0fc9":function(t,e,n){var i=n("3a38"),a=Math.max,o=Math.min;t.exports=function(t,e){return t=i(t),t<0?a(t+e,0):o(t,e)}},"13c8":function(t,e,n){var i=n("c3a1"),a=n("36c3"),o=n("355d").f;t.exports=function(t){return function(e){var n,r=a(e),s=i(r),c=s.length,l=0,u=[];while(c>l)o.call(r,n=s[l++])&&u.push(t?[n,r[n]]:r[n]);return u}}},1691:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"16e2":function(t,e,n){"use strict";var i=n("bc3a"),a=n.n(i),o=a.a.create({baseURL:"/api",withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json"}});e["a"]={createNewGearList:function(t){return o.post("/gear-list",t)},getAllGearListsForUser:function(){return o.get("/gear-list")},attachOneItemToManyLists:function(t){return o.post("/gear-list/attach",t)},attachManyItemsToOneList:function(t){return o.post("/gear-list/attach/many-items",t)},removeGearItemFromList:function(t){return o.post("/gear-list/remove/item",t)},findListsWithItem:function(t){return o.get("/gear-list/find-item?gearItemId=".concat(t))},getListAndItems:function(t){return o.get("/gear-list/find-list?gearListId=".concat(t))},getListAndItemCompletions:function(t){return o.post("/gear-list/find-list",t)},updateGearList:function(t){return o.post("/gear-list/update",t)},deleteGearList:function(t){return o.get("/gear-list/delete?gearListId=".concat(t))}}},"1bc3":function(t,e,n){var i=n("f772");t.exports=function(t,e){if(!i(t))return t;var n,a;if(e&&"function"==typeof(n=t.toString)&&!i(a=n.call(t)))return a;if("function"==typeof(n=t.valueOf)&&!i(a=n.call(t)))return a;if(!e&&"function"==typeof(n=t.toString)&&!i(a=n.call(t)))return a;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,n){var i=n("f772"),a=n("e53d").document,o=i(a)&&i(a.createElement);t.exports=function(t){return o?a.createElement(t):{}}},"25eb":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"335c":function(t,e,n){var i=n("6b4c");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},"355d":function(t,e){e.f={}.propertyIsEnumerable},"35e8":function(t,e,n){var i=n("d9f6"),a=n("aebd");t.exports=n("8e60")?function(t,e,n){return i.f(t,e,a(1,n))}:function(t,e,n){return t[e]=n,t}},"36c3":function(t,e,n){var i=n("335c"),a=n("25eb");t.exports=function(t){return i(a(t))}},"3a38":function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},"4ede":function(t,e,n){"use strict";var i=n("03c6"),a=n.n(i),o={totalGrossOz:function(t){return t.reduce((function(t,e){return t+e}))},totalGrossLbs:function(t){if(t.length<1)return 0;var e=this.totalGrossOz(t),n=e/16;return n=this.roundToAtMostTwoDecimalPlaces(n),n},roundToAtMostTwoDecimalPlaces:function(t){return Math.round(100*t+a.a)/100}};e["a"]=o},"521d":function(t,e,n){},5505:function(t,e,n){"use strict";var i=n("5c54"),a=n.n(i);a.a},5559:function(t,e,n){var i=n("dbdb")("keys"),a=n("62a0");t.exports=function(t){return i[t]||(i[t]=a(t))}},5741:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mu-container",{staticClass:"padding-all-md"},[n("mu-flex",{staticClass:"margin-top margin-left-sm",attrs:{"justify-content":"center"}},[n("mu-icon",{staticClass:"margin-right-md margin-top-sm",attrs:{color:"purpleA700",value:"terrain",size:"73","justify-content":"before"}}),n("h1",[t._v(t._s(t.listTitle))])],1),n("mu-divider"),n("mu-row",{staticClass:"margin-top-md padding-bottom-lg",attrs:{gutter:""}},[n("mu-col",{attrs:{span:"12"}},[Object.keys(this.itemCompletionData).length>0?n("div",[n("mu-list",{staticClass:"dashboard-list",attrs:{textline:"three-line"}},t._l(t.itemCompletionData,(function(e){return n("mu-list-item",{key:e._id,attrs:{button:""},on:{click:function(n){t.updateCompleteStatus(e.gearItem,t.listId,!e.completed)}}},[n("mu-list-item-action",[n("mu-icon",{staticClass:"margin-right-md",attrs:{size:"42",value:e.completed?"check_box":"check_box_outline_blank",color:e.completed?"#494949":"purpleA700"}})],1),n("mu-list-item-content",{class:e.completed?"gear-item-list-item completed-gear-item":"gear-item-list-item"},[n("mu-list-item-title",[t._v("\n                  "+t._s(e.gearItem.title)+"\n                ")]),n("mu-list-item-sub-title",[t._v("\n                  "+t._s(e.gearItem.weight)+" oz.\n                ")])],1),n("mu-list-item-action",[n("mu-button",{attrs:{icon:"",color:"purpleA400",placement:"bottom-end"},on:{click:function(n){t.removeItemFromList(e.gearItem._id)}}},[n("mu-icon",{attrs:{value:"clear",size:"36"}})],1)],1)],1)})),1),n("mu-divider",{staticClass:"margin-bottom"}),n("mu-flex",{attrs:{"justify-content":"center",fill:""}},[n("h2",{staticClass:"gear-list-total-weight-header"},[t._v("\n              Weight Packed:\n              "),n("mu-chip",{staticClass:"margin-left-sm total-weight-chip",attrs:{color:"purpleA700","text-color":"white"}},[t._v(t._s(t.totalPackedLbs))]),n("span",{staticClass:"margin-left-sm"},[t._v("of "+t._s(t.totalGrossLbs)+" lbs.")]),n("span",{staticClass:"list-weight-sub-units margin-left-sm margin-top-md"},[t._v("\n                "+t._s(t.totalPackedOz)+" of "+t._s(t.totalGrossOz)+" oz.")])],1)])],1):n("div",[n("mu-flex",{staticClass:"margin-top",attrs:{"justify-content":"center"}},[n("h3",[t._v("Add some Gear Items, this list is empty!")]),n("mu-icon",{staticClass:"margin-left-sm empty-list",attrs:{color:"purpleA700",value:"offline_bolt",size:"36","justify-content":"end"}})],1)],1),n("AttachManyItemsToSingleList",{attrs:{openAlert:this.showAttachItemsDialog,watchGearListToAttachListView:this.gearListToQuickAttachListView,watchRefreshListItems:this.refreshListItems},on:{successMessage:t.updateSuccessMessage,failureMessage:t.updateFailureMessage,closeAttachItemsDialog:t.closeAttachItemsDialog}})],1)],1),Object.keys(this.itemCompletionData).length>0?n("mu-divider"):t._e(),n("mu-row",{attrs:{gutter:""}},[n("mu-col",{attrs:{span:"12",sm:"12",md:"12",lg:"6",xl:"6"}},[n("mu-flex",{staticClass:"margin-top",attrs:{"justify-content":"center"}},[n("mu-button",{staticClass:"margin-left-sm",attrs:{large:"",round:"","full-width":"",color:"purpleA700"},on:{click:this.showAttachItemsToListDialog}},[n("mu-icon",{attrs:{left:"",value:"attach_file"}}),t._v("Attach Items\n          ")],1)],1)],1),n("mu-col",{attrs:{span:"12",sm:"12",md:"12",lg:"6",xl:"6"}},[n("mu-flex",{staticClass:"margin-top margin-left-sm",attrs:{"justify-content":"center"}},[n("mu-button",{attrs:{large:"","full-width":"",flat:"",color:"primary"},on:{click:function(e){t.$router.push({name:"dashboard"})}}},[n("mu-icon",{attrs:{left:"",value:"arrow_back"}}),t._v("Back to Dashboard\n          ")],1)],1)],1)],1)],1)],1)},a=[],o=n("03c6"),r=n.n(o),s=(n("ac6a"),n("d721")),c=n("16e2"),l=n("67ad"),u=n("4ede"),m={name:"ViewGearList",components:{AttachManyItemsToSingleList:s["a"]},data:function(){return{errors:{},listTitle:"",showAttachItemsDialog:!1,gearListToQuickAttachListView:"",listId:null,refreshListItems:!1,totalPackedOz:0,totalPackedLbs:0,itemCompletionData:[{completed:!1,gearItem:{}}]}},watch:{watchUpdateGearListsAfterAttach:function(t){!0===t&&this.getGearListAndItemCompletions(this.listId)}},computed:{totalGrossOz:function(){var t=this.itemCompletionData.map((function(t){return t.gearItem.weight}));return u["a"].totalGrossOz(t)},totalGrossLbs:function(){var t=this.itemCompletionData.map((function(t){return t.gearItem.weight}));return u["a"].totalGrossLbs(t)}},created:function(){this.updatePrimaryNav(),this.getGearListAndItemCompletions(this.$route.params.id)},methods:{updatePrimaryNav:function(){this.$emit("updateNav")},getGearListAndItemCompletions:function(t){var e=this;c["a"].getListAndItemCompletions({gearListId:t}).then((function(t){e.itemCompletionData=t.data.itemCompletions,e.listTitle=t.data.listName,e.listId=t.data.listId,e.getTotalPackedWeight(),e.resetRefreshItems()})).catch((function(t){console.log("Fetching item completion data failed: ",t)}))},getTotalPackedWeight:function(){var t=0,e=0;this.itemCompletionData.forEach((function(e){e.completed&&(t+=e.gearItem.weight)})),e=t/16,this.totalPackedLbs=this.roundToAtMostTwoDecimalPlaces(e),this.totalPackedOz=t},showAttachItemsToListDialog:function(){this.gearListToQuickAttachListView=this.listId,this.showAttachItemsDialog=!0},updateCompleteStatus:function(t,e,n){var i=this;if(n)this.totalPackedOz+=t.weight;else{var a=this.totalPackedOz-=t.weight;this.totalPackedOz=a>0?a:0}l["a"].changeCompleteStatus(t._id,e,n).then((function(){i.getGearListAndItemCompletions(i.$route.params.id)})).catch((function(t){console.log("Marking complete failed...",t)}))},roundToAtMostTwoDecimalPlaces:function(t){return Math.round(100*t+r.a)/100},closeAttachItemsDialog:function(){this.showAttachItemsDialog=!1},removeItemFromList:function(t){var e=this,n={listId:this.listId,itemId:t};c["a"].removeGearItemFromList(n).then((function(){e.refreshItems(),e.getGearListAndItemCompletions(n.listId)})).catch((function(t){console.log(t)}))},refreshItems:function(){this.refreshListItems=!0},resetRefreshItems:function(){this.refreshListItems=!1},updateSuccessMessage:function(t){console.log(t),this.closeAttachItemsDialog(),this.getGearListAndItemCompletions(this.listId)},updateFailureMessage:function(t){console.log(t),this.closeAttachItemsDialog()}}},f=m,d=(n("737d"),n("2877")),h=Object(d["a"])(f,i,a,!1,null,null,null);e["default"]=h.exports},"584a":function(t,e){var n=t.exports={version:"2.6.2"};"number"==typeof __e&&(__e=n)},"5b4e":function(t,e,n){var i=n("36c3"),a=n("b447"),o=n("0fc9");t.exports=function(t){return function(e,n,r){var s,c=i(e),l=a(c.length),u=o(r,l);if(t&&n!=n){while(l>u)if(s=c[u++],s!=s)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===n)return t||u||0;return!t&&-1}}},"5c54":function(t,e,n){},"62a0":function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},"63b6":function(t,e,n){var i=n("e53d"),a=n("584a"),o=n("d864"),r=n("35e8"),s=n("07e3"),c="prototype",l=function(t,e,n){var u,m,f,d=t&l.F,h=t&l.G,p=t&l.S,g=t&l.P,v=t&l.B,I=t&l.W,L=h?a:a[e]||(a[e]={}),b=L[c],w=h?i:p?i[e]:(i[e]||{})[c];for(u in h&&(n=e),n)m=!d&&w&&void 0!==w[u],m&&s(L,u)||(f=m?w[u]:n[u],L[u]=h&&"function"!=typeof w[u]?n[u]:v&&m?o(f,i):I&&w[u]==f?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e[c]=t[c],e}(f):g&&"function"==typeof f?o(Function.call,f):f,g&&((L.virtual||(L.virtual={}))[u]=f,t&l.R&&b&&!b[u]&&r(b,u,f)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},"67ad":function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d");var i=n("bc3a"),a=n.n(i),o=a.a.create({baseURL:"/api",withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json"}});e["a"]={createNewGearItem:function(t){return o.post("/gear-item",t)},getAllGearItemsForUser:function(){return o.get("/gear-item")},getItem:function(t){return o.get("/gear-item/find-item?gearItemId=".concat(t))},updateGearItem:function(t){return o.post("/gear-item/update",t)},deleteGearItem:function(t){return o.get("/gear-item/delete?gearItemId=".concat(t))},changeCompleteStatus:function(t,e,n){return o.get("/gear-item/complete?gearItemId=".concat(t,"&gearListId=").concat(e,"&gearCompletedStatus=").concat(n))}}},"6b4c":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},"737d":function(t,e,n){"use strict";var i=n("521d"),a=n.n(i);a.a},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")((function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a}))},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"7d6d":function(t,e,n){var i=n("63b6"),a=n("13c8")(!1);i(i.S,"Object",{values:function(t){return a(t)}})},"87a4":function(t,e,n){var i=n("63b6");i(i.S,"Number",{EPSILON:Math.pow(2,-52)})},"8e60":function(t,e,n){t.exports=!n("294c")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},"9e1c":function(t,e,n){n("7d6d"),t.exports=n("584a").Object.values},ac6a:function(t,e,n){for(var i=n("cadf"),a=n("0d58"),o=n("2aba"),r=n("7726"),s=n("32e9"),c=n("84f2"),l=n("2b4c"),u=l("iterator"),m=l("toStringTag"),f=c.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=a(d),p=0;p<h.length;p++){var g,v=h[p],I=d[v],L=r[v],b=L&&L.prototype;if(b&&(b[u]||s(b,u,f),b[m]||s(b,m,v),c[v]=f,I))for(g in i)b[g]||o(b,g,i[g],!0)}},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},b447:function(t,e,n){var i=n("3a38"),a=Math.min;t.exports=function(t){return t>0?a(i(t),9007199254740991):0}},b8e3:function(t,e){t.exports=!0},c3a1:function(t,e,n){var i=n("e6f3"),a=n("1691");t.exports=Object.keys||function(t){return i(t,a)}},d721:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mu-form",{ref:"attachGearItemForm",attrs:{model:t.gearItemSelections}},[n("mu-dialog",{staticClass:"itemAttachDialog",attrs:{title:this.gearListTitle+" Items",width:"600","max-width":"100%","overlay-color":"#000","lock-scroll":!0,"esc-press-close":!0,"overlay-close":!1,open:t.openAlert,transition:"slide-bottom",scrollable:""},on:{"update:open":function(e){t.openAlert=e}}},[n("mu-col",{attrs:{span:"12",lg:"12",sm:"12"}},[n("mu-form-item",{attrs:{prop:"selections"}},[n("mu-select",{staticClass:"add-to-gear-list-drop-down",attrs:{filterable:"",multiple:"",chips:"",prop:"selections","max-height":"60%",textline:"two-line"},model:{value:t.gearItemSelections.values,callback:function(e){t.$set(t.gearItemSelections,"values",e)},expression:"gearItemSelections.values"}},t._l(this.allUserItems,(function(t,e){return n("mu-option",{key:e,staticClass:"gear-list-dropdown-attach-selections",attrs:{label:t.title,value:t._id,prop:"selections"}})})),1)],1)],1),n("mu-button",{attrs:{slot:"actions",flat:"",color:"rgb(181, 181, 181)"},on:{click:t.closeAlertDialog},slot:"actions"},[t._v("Nevermind")]),n("mu-button",{attrs:{slot:"actions",flat:"",color:"primary"},on:{click:t.attachItemsToGearList},slot:"actions"},[t._v("Update")])],1)],1)],1)},a=[],o=(n("ac6a"),n("db0c")),r=n.n(o),s=n("16e2"),c=n("67ad"),l={name:"AttachManyItemsToSingleList",props:{gearItems:{type:Array},openAlert:{type:Boolean},watchGearListToAttachDashboard:{type:String},watchGearListToAttachListView:{type:String},watchRefreshListItems:{type:Boolean}},data:function(){return{gearItemSelections:{values:[]},gearListId:"",gearListTitle:"",allUserItems:{},errors:{}}},watch:{watchGearListToAttachDashboard:function(t){this.gearListId=t,this.getAllItemsBelongingToUser(t)},watchGearListToAttachListView:function(t){this.gearListId=t,this.getAllItemsBelongingToUser(t)},watchRefreshListItems:function(){console.log("Refresh detected"),this.getAllItemsBelongingToUser(this.gearListId)}},methods:{closeAlertDialog:function(){this.$emit("closeAttachItemsDialog")},getAllItemsBelongingToUser:function(t){var e=this;c["a"].getAllGearItemsForUser().then((function(n){e.allUserItems=r()(n.data.gearItems),s["a"].getListAndItems(t).then((function(t){e.gearListTitle=t.data.title;var n=t.data.items.map((function(t){return t._id}));e.gearItemSelections.values=n})).catch((function(t){console.log("Something's gone wrong with server side routing.: ",t)}))})).catch((function(t){console.log("Something's gone wrong with server side routing.: ",t)}))},attachItemsToGearList:function(){var t=this;s["a"].attachManyItemsToOneList({gearListId:this.gearListId,selectedListIds:this.gearItemSelections.values}).then((function(e){e.data.success?(t.$emit("successMessage",e.data.successMessage),t.closeAlertDialog()):(t.$emit("updateFailureMessage",e.data.errors),t.closeAlertDialog())})).catch((function(t){console.log(t)}))}}},u=l,m=(n("5505"),n("2877")),f=Object(m["a"])(u,i,a,!1,null,null,null);e["a"]=f.exports},d864:function(t,e,n){var i=n("79aa");t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,a){return t.call(e,n,i,a)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,n){var i=n("e4ae"),a=n("794b"),o=n("1bc3"),r=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),a)try{return r(t,e,n)}catch(s){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},db0c:function(t,e,n){t.exports=n("9e1c")},dbdb:function(t,e,n){var i=n("584a"),a=n("e53d"),o="__core-js_shared__",r=a[o]||(a[o]={});(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:i.version,mode:n("b8e3")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},e4ae:function(t,e,n){var i=n("f772");t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},e6f3:function(t,e,n){var i=n("07e3"),a=n("36c3"),o=n("5b4e")(!1),r=n("5559")("IE_PROTO");t.exports=function(t,e){var n,s=a(t),c=0,l=[];for(n in s)n!=r&&i(s,n)&&l.push(n);while(e.length>c)i(s,n=e[c++])&&(~o(l,n)||l.push(n));return l}},e9c6:function(t,e,n){n("87a4"),t.exports=Math.pow(2,-52)},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}}}]);
//# sourceMappingURL=viewGearList.00403adf.js.map