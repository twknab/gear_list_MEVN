(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["viewGearList"],{"03c6":function(t,e,n){t.exports=n("e9c6")},"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"16e2":function(t,e,n){"use strict";var i=n("bc3a"),r=n.n(i),a=r.a.create({baseURL:"/api",withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json"}});e["a"]={createNewGearList:function(t){return a.post("/gear-list",t)},getAllGearListsForUser:function(){return a.get("/gear-list")},attachOneItemToManyLists:function(t){return a.post("/gear-list/attach",t)},attachManyItemsToOneList:function(t){return a.post("/gear-list/attach/many-items",t)},removeGearItemFromList:function(t){return a.post("/gear-list/remove/item",t)},findListsWithItem:function(t){return a.get("/gear-list/find-item?gearItemId=".concat(t))},getListAndItems:function(t){return a.get("/gear-list/find-list?gearListId=".concat(t))},getListAndItemCompletions:function(t){return a.post("/gear-list/find-list",t)},updateGearList:function(t){return a.post("/gear-list/update",t)},deleteGearList:function(t){return a.get("/gear-list/delete?gearListId=".concat(t))}}},"1bc3":function(t,e,n){var i=n("f772");t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,n){var i=n("f772"),r=n("e53d").document,a=i(r)&&i(r.createElement);t.exports=function(t){return a?r.createElement(t):{}}},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"35e8":function(t,e,n){var i=n("d9f6"),r=n("aebd");t.exports=n("8e60")?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},"4ede":function(t,e,n){"use strict";var i=n("03c6"),r=n.n(i),a={totalGrossOz:function(t){return t.reduce((function(t,e){return t+e}))},totalGrossLbs:function(t){if(t.length<1)return 0;var e=this.totalGrossOz(t),n=e/16;return n=this.roundToAtMostTwoDecimalPlaces(n),n},roundToAtMostTwoDecimalPlaces:function(t){return Math.round(100*t+r.a)/100}};e["a"]=a},"521d":function(t,e,n){},5741:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mu-container",{staticClass:"padding-all-md"},[n("mu-flex",{staticClass:"margin-top margin-left-sm",attrs:{"justify-content":"center"}},[n("mu-icon",{staticClass:"margin-right-md margin-top-sm",attrs:{color:"purpleA700",value:"terrain",size:"73","justify-content":"before"}}),n("h1",[t._v(t._s(t.listTitle))])],1),n("mu-divider"),n("mu-row",{staticClass:"margin-top-md padding-bottom-lg",attrs:{gutter:""}},[n("mu-col",{attrs:{span:"12"}},[Object.keys(this.itemCompletionData).length>0?n("div",[n("mu-list",{staticClass:"dashboard-list",attrs:{textline:"three-line"}},t._l(t.itemCompletionData,(function(e){return n("mu-list-item",{key:e._id,attrs:{button:""},on:{click:function(n){t.updateCompleteStatus(e.gearItem,t.listId,!e.completed)}}},[n("mu-list-item-action",[n("mu-icon",{staticClass:"margin-right-md",attrs:{size:"42",value:e.completed?"check_box":"check_box_outline_blank",color:e.completed?"#494949":"purpleA700"}})],1),n("mu-list-item-content",{class:e.completed?"gear-item-list-item completed-gear-item":"gear-item-list-item"},[n("mu-list-item-title",[t._v("\n                  "+t._s(e.gearItem.title)+"\n                ")]),n("mu-list-item-sub-title",[t._v("\n                  "+t._s(e.gearItem.weight)+" oz.\n                ")])],1),n("mu-list-item-action",[n("mu-button",{attrs:{icon:"",color:"purpleA400",placement:"bottom-end"},on:{click:function(n){t.removeItemFromList(e.gearItem._id)}}},[n("mu-icon",{attrs:{value:"clear",size:"36"}})],1)],1)],1)})),1),n("mu-divider",{staticClass:"margin-bottom"}),n("mu-flex",{attrs:{"justify-content":"center",fill:""}},[n("h2",{staticClass:"gear-list-total-weight-header"},[t._v("\n              Weight Packed:\n              "),n("mu-chip",{staticClass:"margin-left-sm total-weight-chip",attrs:{color:"purpleA700","text-color":"white"}},[t._v(t._s(t.totalPackedLbs))]),n("span",{staticClass:"margin-left-sm"},[t._v("of "+t._s(t.totalGrossLbs)+" lbs.")]),n("span",{staticClass:"list-weight-sub-units margin-left-sm margin-top-md"},[t._v("\n                "+t._s(t.totalPackedOz)+" of "+t._s(t.totalGrossOz)+" oz.")])],1)])],1):n("div",[n("mu-flex",{staticClass:"margin-top",attrs:{"justify-content":"center"}},[n("h3",[t._v("Add some Gear Items, this list is empty!")]),n("mu-icon",{staticClass:"margin-left-sm empty-list",attrs:{color:"purpleA700",value:"offline_bolt",size:"36","justify-content":"end"}})],1)],1)])],1),Object.keys(this.itemCompletionData).length>0?n("mu-divider"):t._e(),n("mu-row",{attrs:{gutter:""}},[n("mu-col",{attrs:{span:"12",sm:"12",md:"12",lg:"6",xl:"6"}},[n("mu-flex",{staticClass:"margin-top",attrs:{"justify-content":"center"}},[n("mu-button",{staticClass:"margin-left-sm",attrs:{large:"",round:"","full-width":"",color:"purpleA700"},on:{click:this.attachManyItemsToList}},[n("mu-icon",{attrs:{left:"",value:"attach_file"}}),t._v("Attach Items\n          ")],1)],1)],1),n("mu-col",{attrs:{span:"12",sm:"12",md:"12",lg:"6",xl:"6"}},[n("mu-flex",{staticClass:"margin-top margin-left-sm",attrs:{"justify-content":"center"}},[n("mu-button",{attrs:{large:"","full-width":"",flat:"",color:"primary"},on:{click:function(e){t.$router.push({name:"dashboard"})}}},[n("mu-icon",{attrs:{left:"",value:"arrow_back"}}),t._v("Back to Dashboard\n          ")],1)],1)],1)],1)],1)],1)},r=[],a=n("03c6"),o=n.n(a),s=(n("ac6a"),n("16e2")),c=n("67ad"),u=n("4ede"),l={name:"ViewGearList",data:function(){return{errors:{},listTitle:"",showAttachItemsDialog:!1,gearListToQuickAttachListView:"",listId:null,refreshListItems:!1,totalPackedOz:0,totalPackedLbs:0,itemCompletionData:[{completed:!1,gearItem:{}}]}},computed:{totalGrossOz:function(){var t=this.itemCompletionData.map((function(t){return t.gearItem.weight}));return u["a"].totalGrossOz(t)},totalGrossLbs:function(){var t=this.itemCompletionData.map((function(t){return t.gearItem.weight}));return u["a"].totalGrossLbs(t)}},created:function(){this.updatePrimaryNav(),this.getGearListAndItemCompletions(this.$route.params.id)},methods:{updatePrimaryNav:function(){this.$emit("updateNav")},getGearListAndItemCompletions:function(t){var e=this;s["a"].getListAndItemCompletions({gearListId:t}).then((function(t){e.itemCompletionData=t.data.itemCompletions,e.listTitle=t.data.listName,e.listId=t.data.listId,e.getTotalPackedWeight(),e.resetRefreshItems()})).catch((function(t){console.log("Fetching item completion data failed: ",t)}))},getTotalPackedWeight:function(){var t=0,e=0;this.itemCompletionData.forEach((function(e){e.completed&&(t+=e.gearItem.weight)})),e=t/16,this.totalPackedLbs=this.roundToAtMostTwoDecimalPlaces(e),this.totalPackedOz=t},attachManyItemsToList:function(){this.$router.push({name:"attachItemsToGearList",params:{id:this.listId}})},updateCompleteStatus:function(t,e,n){var i=this;if(n)this.totalPackedOz+=t.weight;else{var r=this.totalPackedOz-=t.weight;this.totalPackedOz=r>0?r:0}c["a"].changeCompleteStatus(t._id,e,n).then((function(){i.getGearListAndItemCompletions(i.$route.params.id)})).catch((function(t){console.log("Marking complete failed...",t)}))},roundToAtMostTwoDecimalPlaces:function(t){return Math.round(100*t+o.a)/100},closeAttachItemsDialog:function(){this.showAttachItemsDialog=!1},removeItemFromList:function(t){var e=this,n={listId:this.listId,itemId:t};s["a"].removeGearItemFromList(n).then((function(){e.refreshItems(),e.getGearListAndItemCompletions(n.listId)})).catch((function(t){console.log(t)}))},refreshItems:function(){this.refreshListItems=!0},resetRefreshItems:function(){this.refreshListItems=!1}}},m=l,f=(n("737d"),n("2877")),d=Object(f["a"])(m,i,r,!1,null,null,null);e["default"]=d.exports},"584a":function(t,e){var n=t.exports={version:"2.6.2"};"number"==typeof __e&&(__e=n)},"63b6":function(t,e,n){var i=n("e53d"),r=n("584a"),a=n("d864"),o=n("35e8"),s=n("07e3"),c="prototype",u=function(t,e,n){var l,m,f,d=t&u.F,p=t&u.G,g=t&u.S,h=t&u.P,v=t&u.B,L=t&u.W,I=p?r:r[e]||(r[e]={}),b=I[c],y=p?i:g?i[e]:(i[e]||{})[c];for(l in p&&(n=e),n)m=!d&&y&&void 0!==y[l],m&&s(I,l)||(f=m?y[l]:n[l],I[l]=p&&"function"!=typeof y[l]?n[l]:v&&m?a(f,i):L&&y[l]==f?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e[c]=t[c],e}(f):h&&"function"==typeof f?a(Function.call,f):f,h&&((I.virtual||(I.virtual={}))[l]=f,t&u.R&&b&&!b[l]&&o(b,l,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},"67ad":function(t,e,n){"use strict";var i=n("bc3a"),r=n.n(i),a=r.a.create({baseURL:"/api",withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json"}});e["a"]={createNewGearItem:function(t){return a.post("/gear-item",t)},getAllGearItemsForUser:function(){return a.get("/gear-item")},getItem:function(t){return a.get("/gear-item/find-item?gearItemId=".concat(t))},updateGearItem:function(t){return a.post("/gear-item/update",t)},deleteGearItem:function(t){return a.get("/gear-item/delete?gearItemId=".concat(t))},changeCompleteStatus:function(t,e,n){return a.get("/gear-item/complete?gearItemId=".concat(t,"&gearListId=").concat(e,"&gearCompletedStatus=").concat(n))}}},"737d":function(t,e,n){"use strict";var i=n("521d"),r=n.n(i);r.a},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")((function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a}))},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"87a4":function(t,e,n){var i=n("63b6");i(i.S,"Number",{EPSILON:Math.pow(2,-52)})},"8e60":function(t,e,n){t.exports=!n("294c")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},ac6a:function(t,e,n){for(var i=n("cadf"),r=n("0d58"),a=n("2aba"),o=n("7726"),s=n("32e9"),c=n("84f2"),u=n("2b4c"),l=u("iterator"),m=u("toStringTag"),f=c.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=r(d),g=0;g<p.length;g++){var h,v=p[g],L=d[v],I=o[v],b=I&&I.prototype;if(b&&(b[l]||s(b,l,f),b[m]||s(b,m,v),c[v]=f,L))for(h in i)b[h]||a(b,h,i[h],!0)}},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},d864:function(t,e,n){var i=n("79aa");t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,n){var i=n("e4ae"),r=n("794b"),a=n("1bc3"),o=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(i(t),e=a(e,!0),i(n),r)try{return o(t,e,n)}catch(s){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},e4ae:function(t,e,n){var i=n("f772");t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},e9c6:function(t,e,n){n("87a4"),t.exports=Math.pow(2,-52)},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}}}]);
//# sourceMappingURL=viewGearList.4d9923d5.js.map