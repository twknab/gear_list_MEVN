(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dashboard"],{"03c6":function(t,e,s){t.exports=s("e9c6")},"07e3":function(t,e){var s={}.hasOwnProperty;t.exports=function(t,e){return s.call(t,e)}},"0e9e":function(t,e,s){},"0fc9":function(t,e,s){var a=s("3a38"),r=Math.max,i=Math.min;t.exports=function(t,e){return t=a(t),t<0?r(t+e,0):i(t,e)}},"11e9":function(t,e,s){var a=s("52a7"),r=s("4630"),i=s("6821"),n=s("6a99"),o=s("69a8"),c=s("c69a"),l=Object.getOwnPropertyDescriptor;e.f=s("9e1e")?l:function(t,e){if(t=i(t),e=n(e,!0),c)try{return l(t,e)}catch(s){}if(o(t,e))return r(!a.f.call(t,e),t[e])}},"13c8":function(t,e,s){var a=s("c3a1"),r=s("36c3"),i=s("355d").f;t.exports=function(t){return function(e){var s,n=r(e),o=a(n),c=o.length,l=0,u=[];while(c>l)i.call(n,s=o[l++])&&u.push(t?[s,n[s]]:n[s]);return u}}},1691:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"16e2":function(t,e,s){"use strict";var a=s("bc3a"),r=s.n(a),i=r.a.create({baseURL:"/api",withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json"}});e["a"]={createNewGearList:function(t){return i.post("/gear-list",t)},getAllGearListsForUser:function(){return i.get("/gear-list")},attachOneItemToManyLists:function(t){return i.post("/gear-list/attach",t)},attachManyItemsToOneList:function(t){return i.post("/gear-list/attach/many-items",t)},removeGearItemFromList:function(t){return i.post("/gear-list/remove/item",t)},findListsWithItem:function(t){return i.get("/gear-list/find-item?gearItemId=".concat(t))},getListAndItems:function(t){return i.get("/gear-list/find-list?gearListId=".concat(t))},getListAndItemCompletions:function(t){return i.post("/gear-list/find-list",t)},updateGearList:function(t){return i.post("/gear-list/update",t)},deleteGearList:function(t){return i.get("/gear-list/delete?gearListId=".concat(t))}}},"1bc3":function(t,e,s){var a=s("f772");t.exports=function(t,e){if(!a(t))return t;var s,r;if(e&&"function"==typeof(s=t.toString)&&!a(r=s.call(t)))return r;if("function"==typeof(s=t.valueOf)&&!a(r=s.call(t)))return r;if(!e&&"function"==typeof(s=t.toString)&&!a(r=s.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,s){var a=s("f772"),r=s("e53d").document,i=a(r)&&a(r.createElement);t.exports=function(t){return i?r.createElement(t):{}}},"25eb":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"2b56":function(t,e,s){"use strict";var a=s("31f8"),r=s.n(a);r.a},"31f8":function(t,e,s){},"335c":function(t,e,s){var a=s("6b4c");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==a(t)?t.split(""):Object(t)}},"355d":function(t,e){e.f={}.propertyIsEnumerable},"35e8":function(t,e,s){var a=s("d9f6"),r=s("aebd");t.exports=s("8e60")?function(t,e,s){return a.f(t,e,r(1,s))}:function(t,e,s){return t[e]=s,t}},"36c3":function(t,e,s){var a=s("335c"),r=s("25eb");t.exports=function(t){return a(r(t))}},"3a38":function(t,e){var s=Math.ceil,a=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?a:s)(t)}},"4ede":function(t,e,s){"use strict";var a=s("03c6"),r=s.n(a),i={totalGrossOz:function(t){return t.reduce((function(t,e){return t+e}))},totalGrossLbs:function(t){if(t.length<1)return 0;var e=this.totalGrossOz(t),s=e/16;return s=this.roundToAtMostTwoDecimalPlaces(s),s},roundToAtMostTwoDecimalPlaces:function(t){return Math.round(100*t+r.a)/100}};e["a"]=i},"52a7":function(t,e){e.f={}.propertyIsEnumerable},5505:function(t,e,s){"use strict";var a=s("5c54"),r=s.n(a);r.a},5559:function(t,e,s){var a=s("dbdb")("keys"),r=s("62a0");t.exports=function(t){return a[t]||(a[t]=r(t))}},"584a":function(t,e){var s=t.exports={version:"2.6.2"};"number"==typeof __e&&(__e=s)},"5b4e":function(t,e,s){var a=s("36c3"),r=s("b447"),i=s("0fc9");t.exports=function(t){return function(e,s,n){var o,c=a(e),l=r(c.length),u=i(n,l);if(t&&s!=s){while(l>u)if(o=c[u++],o!=o)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===s)return t||u||0;return!t&&-1}}},"5c54":function(t,e,s){},"5dbc":function(t,e,s){var a=s("d3f4"),r=s("8b97").set;t.exports=function(t,e,s){var i,n=e.constructor;return n!==s&&"function"==typeof n&&(i=n.prototype)!==s.prototype&&a(i)&&r&&r(t,i),t}},"5f52":function(t,e,s){"use strict";var a=s("0e9e"),r=s.n(a);r.a},"62a0":function(t,e){var s=0,a=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++s+a).toString(36))}},"63b6":function(t,e,s){var a=s("e53d"),r=s("584a"),i=s("d864"),n=s("35e8"),o=s("07e3"),c="prototype",l=function(t,e,s){var u,m,f,d=t&l.F,p=t&l.G,h=t&l.S,g=t&l.P,v=t&l.B,b=t&l.W,L=p?r:r[e]||(r[e]={}),I=L[c],w=p?a:h?a[e]:(a[e]||{})[c];for(u in p&&(s=e),s)m=!d&&w&&void 0!==w[u],m&&o(L,u)||(f=m?w[u]:s[u],L[u]=p&&"function"!=typeof w[u]?s[u]:v&&m?i(f,a):b&&w[u]==f?function(t){var e=function(e,s,a){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,s)}return new t(e,s,a)}return t.apply(this,arguments)};return e[c]=t[c],e}(f):g&&"function"==typeof f?i(Function.call,f):f,g&&((L.virtual||(L.virtual={}))[u]=f,t&l.R&&I&&!I[u]&&n(I,u,f)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},6557:function(t,e){var s={gearList:"list",gearItem:"item"};t.exports=s},"67ad":function(t,e,s){"use strict";s("cadf"),s("551c"),s("097d");var a=s("bc3a"),r=s.n(a),i=r.a.create({baseURL:"/api",withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json"}});e["a"]={createNewGearItem:function(t){return i.post("/gear-item",t)},getAllGearItemsForUser:function(){return i.get("/gear-item")},getItem:function(t){return i.get("/gear-item/find-item?gearItemId=".concat(t))},updateGearItem:function(t){return i.post("/gear-item/update",t)},deleteGearItem:function(t){return i.get("/gear-item/delete?gearItemId=".concat(t))},changeCompleteStatus:function(t,e,s){return i.get("/gear-item/complete?gearItemId=".concat(t,"&gearListId=").concat(e,"&gearCompletedStatus=").concat(s))}}},"6b4c":function(t,e){var s={}.toString;t.exports=function(t){return s.call(t).slice(8,-1)}},7277:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("mu-container",{staticClass:"margin-top dashboard-wrapper"},[s("mu-flex",{attrs:{"justify-content":"end"}},[s("p",[t._v("\n        "+t._s(t.timeGreeting)+", "+t._s(t.user.firstName)+".\n        "),s("mu-button",{staticClass:"margin-left-sm",attrs:{small:"",flat:"",color:"primary"},on:{click:function(e){t.$router.push({name:"logout"})}}},[t._v("Logout")])],1)]),s("h1",[t._v("Gear Lists")]),s("GearLists",{attrs:{watchDeleteListConfirmation:t.watchDeleteListConfirmation,watchUpdateGearListsAfterAttach:t.triggerGlobalGearListUpdate},on:{updateAllGearLists:t.updateGearListsForUser,updateDashboardSuccessMessage:t.updateSuccessMessage,updateDashboardFailureMessage:t.updateFailureMessages,updateDashboardDeleteConfirmation:t.updateConfimDeleteMessage}}),s("mu-divider",{staticClass:"margin-top-xl"}),s("div",{staticClass:"margin-top-xl"},[s("h1",[t._v("Gear Items")]),s("mu-dialog",{staticClass:"notification-dialogue",attrs:{width:"600","max-width":"80%","esc-press-close":!0,"overlay-close":!0,open:t.showSuccessAlert,overlay:!0,"overlay-opacity":.8},on:{"update:open":function(e){t.showSuccessAlert=e}}},[t.showSuccessAlert?s("mu-alert",{staticClass:"custom-alert success-alert",attrs:{color:"success",delete:"",transition:"mu-scale-transition"},on:{delete:function(e){t.showSuccessAlert=!1}}},[s("mu-icon",{attrs:{left:"",size:"32",value:"check_circle"}}),s("p",[t._v(t._s(t.successMessage))])],1):t._e()],1),s("mu-dialog",{staticClass:"notification-dialogue",attrs:{width:"600","max-width":"80%","esc-press-close":!0,"overlay-close":!0,open:t.showFailureAlert,overlay:!0,"overlay-opacity":.8},on:{"update:open":function(e){t.showFailureAlert=e}}},[t.showFailureAlert?s("mu-alert",{staticClass:"custom-alert failure-alert",attrs:{color:"rgb(255, 200, 58)",transition:"mu-scale-transition"}},[s("mu-icon",{attrs:{left:"",size:"32",value:"warning"}}),s("h2",[t._v("Whoops, something went wrong:")]),s("mu-list",{attrs:{dense:!0}},t._l(t.failureMessages,(function(e,a,r){return s("mu-list-item",{key:r,staticClass:"failure-alert-text",attrs:{button:!1,ripple:!1}},[s("mu-list-item-action",{staticClass:"failure-alert-text"},[s("mu-icon",{attrs:{value:"error_outline"}})],1),s("mu-list-item-title",{staticClass:"failure-alert-text-title"},[s("em",[t._v(t._s(e))])])],1)})),1),s("div",{staticClass:"dismiss-button"},[s("mu-button",{attrs:{color:"rgba(79, 78, 78, 0.55)"},on:{click:function(e){t.showFailureAlert=!1}}},[t._v("OK, got it")])],1)],1):t._e()],1),s("mu-dialog",{staticClass:"error-dialogue",attrs:{width:"700","max-width":"100%","esc-press-close":!0,"overlay-close":!0,open:t.openDeleteDialogue,overlay:!0,"overlay-opacity":.8},on:{"update:open":function(e){t.openDeleteDialogue=e}}},[s("mu-icon",{attrs:{value:"delete_forever",size:"32",left:""}}),s("h2",{staticClass:"delete-dialogue-title"},[t._v("Totally Sure to Delete?")]),s("p",[t._v(t._s(t.deleteMessage))]),s("mu-row",{attrs:{gutter:""}},[s("mu-col",{attrs:{span:"12",sm:"12",md:"12",lg:"12",xl:"12"}},[s("mu-button",{staticClass:"margin-top",attrs:{color:"rgba(79, 78, 78, 0.55)","full-width":!0,large:"",round:""},on:{click:t.cancelDelete}},[s("mu-icon",{attrs:{value:"close"}}),s("span",{staticClass:"button-icon"},[t._v("Nevermind")])],1)],1)],1),s("mu-row",{attrs:{gutter:""}},[s("mu-col",{attrs:{span:"12",sm:"12",md:"12",lg:"12",xl:"12"}},[s("mu-button",{staticClass:"margin-top-md margin-bottom-md confirm-delete",attrs:{large:"","full-width":"",round:"",color:"#FA0D3F"},on:{click:t.confirmDelete}},[s("mu-icon",{attrs:{value:"delete_outline"}}),s("span",{staticClass:"button-icon"},[t._v("Yes, delete forever!")])],1)],1)],1)],1),s("GearItems",{attrs:{gearLists:t.gearLists,watchDeleteConfirmation:t.watchDeleteConfirmation},on:{updateDashboardGearLists:t.updateDashboardGearLists,updateDashboardSuccessMessage:t.updateSuccessMessage,updateDashboardFailureMessage:t.updateFailureMessages,updateDashboardDeleteConfirmation:t.updateConfimDeleteMessage}})],1)],1)],1)},r=[],i=s("db0c"),n=s.n(i),o=s("6bf5"),c=s.n(o),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("mu-row",{staticClass:"margin-bottom",attrs:{gutter:""}},[s("mu-col",{attrs:{span:"12",sm:"12",md:"12",lg:"12",xl:"12"}},[s("div",{staticClass:"margin-bottom"},[this.userGearLists.length>0?s("mu-list",{staticClass:"dashboard-list",attrs:{textline:"three-line"}},t._l(t.userGearLists.slice(0,this.limit),(function(e,a){return s("mu-list-item",{key:a,attrs:{avatar:"",button:"",ripple:!1}},[s("mu-list-item-content",[s("mu-list-item-title",{on:{click:function(s){t.viewGearList(e._id)}}},[t._v(t._s(e.title))]),e.totalWeightInLbs>0?s("mu-list-item-sub-title",[t._v("\n                Total Weight: "+t._s(e.totalWeightInLbs)+" lbs.\n              ")]):t._e()],1),s("mu-list-item-action",[s("mu-button",{attrs:{icon:""},on:{click:function(s){t.viewGearList(e._id)}}},[s("mu-icon",{attrs:{color:"purpleA400",value:"pageview",size:"40"}})],1)],1),s("mu-list-item-action",[s("mu-menu",{attrs:{cover:"",placement:"bottom-end","open-on-hover":!0}},[s("mu-button",{attrs:{icon:"",color:"purpleA400"}},[s("mu-icon",{attrs:{value:"more_vert",size:"36"}})],1),s("mu-list",{attrs:{slot:"content"},slot:"content"},[s("mu-list-item",{attrs:{button:""},on:{click:function(s){t.showAttachItemsToListDialog(e._id)}}},[s("mu-icon",{staticClass:"margin-right-sm margin-top-xsm",attrs:{size:"26",value:"attach_file",color:"#aa00ff"}}),t._v("\n                    Quick Attach")],1),s("mu-list-item",{attrs:{button:""},on:{click:function(s){t.editGearList(e._id)}}},[s("mu-icon",{staticClass:"margin-right-sm margin-top-xsm",attrs:{size:"26",value:"edit",color:"#aa00ff"}}),t._v("Edit List")],1),s("mu-list-item",{attrs:{button:""},on:{click:function(s){t.confirmDeleteList(e._id)}}},[s("mu-icon",{staticClass:"margin-right-sm margin-top-xsm",attrs:{size:"26",value:"delete",color:"#aa00ff"}}),t._v("Delete List")],1)],1)],1)],1)],1)})),1):s("div",[s("mu-flex",{staticClass:"margin-top margin-bottom",attrs:{"justify-content":"center"}},[s("h2",[t._v("Create a new Gear List!")]),s("mu-icon",{staticClass:"margin-left-md",attrs:{color:"purpleA700",value:"star",size:"56","justify-content":"end"}})],1)],1)],1),s("AttachManyItemsToSingleList",{attrs:{openAlert:this.showAttachItemsDialog,watchGearListToAttachDashboard:this.gearListToQuickAttachDashboard},on:{successMessage:t.updateSuccessMessage,failureMessage:t.updateFailureMessage,closeAttachItemsDialog:t.closeAttachItemsDialog}})],1)],1),t.isJustAFewLists?s("mu-row",{attrs:{gutter:""}},[s("mu-col",{attrs:{span:"12",sm:"12",md:"12",lg:"12",xl:"12"}},[s("AddGearListButton")],1)],1):s("mu-row",{attrs:{gutter:""}},[s("mu-col",{attrs:{span:"12",sm:"12",md:"12",lg:"6",xl:"6"}},[s("AddGearListButton")],1),s("mu-col",{attrs:{span:"12",sm:"12",md:"12",lg:"6",xl:"6"}},[s("mu-flex",{attrs:{"justify-content":"center"}},[s("SeeMoreButton",{attrs:{buttonText:"See More Lists",currentLimit:this.limit},on:{updateLimit:t.updateGearListsLimit}})],1)],1)],1)],1)},u=[],m=(s("ac6a"),s("16e2")),f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("mu-button",{staticClass:"margin-bottom-md",attrs:{"full-width":"",large:"",round:"",color:"purpleA400"},on:{click:function(e){t.$router.push({name:"addGearList"})}}},[s("mu-icon",{attrs:{value:"library_add"}}),s("span",{staticClass:"button-icon"},[t._v("New Gear List")])],1)},d=[],p={name:"AddGearListButton"},h=p,g=s("2877"),v=Object(g["a"])(h,f,d,!1,null,null,null),b=v.exports,L=s("d721"),I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("mu-button",{attrs:{"full-width":"",large:"",round:"",color:"grey800"},on:{click:t.increaseGearListLimit}},[s("mu-icon",{attrs:{left:"",value:"expand_more"}}),t._v("\n  "+t._s(t.buttonText)+"\n")],1)},w=[],G=(s("c5f6"),{name:"SeeMoreButton",props:{buttonText:{type:String,required:!0},currentLimit:{type:Number,required:!0}},methods:{increaseGearListLimit:function(){var t=this.currentLimit+4;this.$emit("updateLimit",t)}}}),A=G,y=Object(g["a"])(A,I,w,!1,null,null,null),_=y.exports,D=s("6557"),M=s.n(D),S=s("4ede"),x={name:"GearLists",props:{watchDeleteListConfirmation:{type:Object},watchUpdateGearListsAfterAttach:{type:Boolean}},components:{AddGearListButton:b,AttachManyItemsToSingleList:L["a"],SeeMoreButton:_},data:function(){return{limit:4,open:!1,userGearLists:[],showAttachItemsDialog:!1,gearListToQuickAttachDashboard:"",isJustAFewLists:!0,FILE_BUG:"Kindly file a bug report."}},watch:{watchDeleteListConfirmation:function(t){t.success&&this.actuallyForeverDeleteGearList(t.id)},watchUpdateGearListsAfterAttach:function(t){!0===t&&this.getAllUserGearLists()}},beforeMount:function(){this.getAllUserGearLists()},methods:{editGearList:function(t){this.$router.push({name:"editGearList",params:{id:t}})},showAttachItemsToListDialog:function(t){this.gearListToQuickAttachDashboard=t,this.showAttachItemsDialog=!0},viewGearList:function(t){this.$router.push({name:"viewGearList",params:{id:t}})},updateGearListsLimit:function(t){this.limit=t,this.getAllUserGearLists()},getAllUserGearLists:function(){var t=this;m["a"].getAllGearListsForUser().then((function(e){t.userGearLists=n()(e.data.gearLists),t.userGearLists.forEach((function(t){var e=t.items.map((function(t){return t.weight}));t.totalWeightInLbs=S["a"].totalGrossLbs(e)})),t.userGearLists.length<t.limit&&(t.limit=t.userGearLists.length),t.isJustAFewLists=t.userGearLists.length<=t.limit,t.$emit("updateAllGearLists",t.userGearLists)})).catch((function(e){console.log(e),t.errors=e}))},closeAttachItemsDialog:function(){this.showAttachItemsDialog=!1},confirmDeleteList:function(t){this.$emit("updateDashboardDeleteConfirmation","Are you sure you want to delete this list? It will be forever deleted and all containing items will be marked incomplete.",t,M.a.gearList)},actuallyForeverDeleteGearList:function(t){var e=this;m["a"].deleteGearList(t).then((function(t){e.updateSuccessMessage(t.data.successMessage),e.getAllUserGearLists()})).catch((function(t){console.log(t),e.updateFailureMessage(["Problem deleting list.",e.FILE_BUG])}))},updateSuccessMessage:function(t){this.$emit("updateDashboardSuccessMessage",t)},updateFailureMessage:function(t){this.$emit("updateDashboardFailureMessage",t)}}},C=x,T=Object(g["a"])(C,l,u,!1,null,null,null),F=T.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("mu-row",{staticClass:"margin-bottom",attrs:{gutter:""}},[s("mu-col",{attrs:{span:"12"}},[this.userGearItems.length>0?s("mu-list",{staticClass:"dashboard-list",attrs:{textline:"three-line"}},t._l(t.userGearItems.slice(0,this.limit),(function(e,a){return s("mu-list-item",{key:a,attrs:{avatar:"",button:"",ripple:!1}},[s("mu-list-item-content",[s("mu-list-item-title",[t._v(t._s(e.title))]),s("mu-list-item-sub-title",[t._v("Weight: "+t._s(e.weight)+" oz")])],1),s("AttachSingleItemToManyLists",{attrs:{gearItem:e,gearLists:t.gearLists},on:{refreshGearLists:t.refreshDashboardGearLists,successMessage:t.updateSuccessMessage,failureMessage:t.updateFailureMessage}}),s("mu-list-item-action",[s("mu-button",{attrs:{icon:""},on:{click:function(s){t.editGearItem(e._id)}}},[s("mu-icon",{attrs:{color:"purpleA400",value:"edit",size:"36"}})],1)],1),s("mu-list-item-action",[s("mu-button",{attrs:{icon:""},on:{click:function(s){t.confirmDeleteItem(e._id)}}},[s("mu-icon",{attrs:{color:"purpleA700",value:"delete",size:"36"}})],1)],1)],1)})),1):s("div",[s("mu-flex",{staticClass:"margin-top",attrs:{"justify-content":"center"}},[s("h2",[t._v("Add some Gear Items!")]),s("mu-icon",{staticClass:"margin-left-md",attrs:{color:"purpleA700",value:"terrain",size:"56","justify-content":"end"}})],1)],1)],1)],1),t.isJustAFewItems?s("mu-row",{attrs:{gutter:""}},[s("mu-col",{attrs:{span:"12",sm:"12",md:"12",lg:"12",xl:"12"}},[s("AddGearItemButton")],1)],1):s("mu-row",{attrs:{gutter:""}},[s("mu-col",{attrs:{span:"12",sm:"12",md:"12",lg:"6",xl:"6"}},[s("AddGearItemButton")],1),s("mu-col",{attrs:{span:"12",sm:"12",md:"12",lg:"6",xl:"6"}},[s("mu-flex",{attrs:{"justify-content":"center"}},[s("SeeMoreButton",{attrs:{buttonText:"See More Items",currentLimit:this.limit},on:{updateLimit:t.updateGearItemsLimit}})],1)],1)],1)],1)},k=[],E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("mu-list-item-action",[s("mu-button",{attrs:{icon:""},on:{click:t.openAlertDialog}},[s("mu-icon",{attrs:{color:"purpleA400",value:"attach_file",size:"36"}})],1)],1),s("mu-form",{ref:"GearItemForm",attrs:{model:t.gearListSelections}},[s("mu-dialog",{attrs:{title:"Attach "+t.gearItem.title+" to Lists",width:"600","max-width":"100%","overlay-color":"#000","lock-scroll":!0,"esc-press-close":!0,"overlay-close":!1,open:t.openAlert,transition:"slide-bottom",scrollable:""},on:{"update:open":function(e){t.openAlert=e}}},[s("mu-col",{attrs:{span:"12",lg:"12",sm:"12"}},[s("mu-form-item",{attrs:{prop:"selections"}},[s("mu-select",{staticClass:"add-to-gear-list-drop-down",attrs:{filterable:"",multiple:"",chips:"","full-width":"",prop:"selections","max-height":"60%",textline:"two-line"},model:{value:t.gearListSelections.values,callback:function(e){t.$set(t.gearListSelections,"values",e)},expression:"gearListSelections.values"}},t._l(t.gearLists,(function(t,e){return s("mu-option",{key:e,staticClass:"gear-list-dropdown--selections",attrs:{label:t.title,value:t._id,prop:"selections"}})})),1)],1)],1),s("mu-button",{attrs:{slot:"actions",flat:"",color:"rgb(181, 181, 181)"},on:{click:t.closeAlertDialog},slot:"actions"},[t._v("Nevermind")]),s("mu-button",{attrs:{slot:"actions",flat:"",color:"primary"},on:{click:t.AttachItemToGearLists},slot:"actions"},[t._v("Update")])],1)],1)],1)},U=[],j={name:"AttachSingleItemToManyLists",props:{gearItem:{type:Object},gearLists:{type:Array}},data:function(){return{openAlert:!1,gearListSelections:{values:[]},errors:{}}},methods:{openAlertDialog:function(){this.openAlert=!0,this.getItemLists()},closeAlertDialog:function(){this.openAlert=!1},getItemLists:function(){var t=this;m["a"].findListsWithItem(this.gearItem._id).then((function(e){t.gearListSelections.values=e.data.map((function(t){return t._id}))})).catch((function(t){console.log(t)}))},AttachItemToGearLists:function(){var t=this;m["a"].findListsWithItem(this.gearItem._id).then((function(e){m["a"].attachOneItemToManyLists({gearItemId:t.gearItem._id,itemSavedListsIds:e.data.map((function(t){return t._id})),itemSelectedListIds:t.gearListSelections.values}).then((function(e){e.data.success?(t.$emit("successMessage",e.data.successMessage),console.log("1. going to refresh list now"),t.$emit("refreshGearLists"),t.closeAlertGotoDashboard()):(t.$emit("failureMessage",e.data.errors),t.closeAlertGotoDashboard())})).catch((function(t){console.log(t)}))})).catch((function(t){console.log(t)}))},closeAlertGotoDashboard:function(){this.openAlert=!1,this.$router.push({name:"dashboard"})}}},N=j,$=(s("dbcd"),Object(g["a"])(N,E,U,!1,null,null,null)),B=$.exports,P=s("67ad"),z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("mu-button",{staticClass:"margin-bottom-md",attrs:{"full-width":"",large:"",round:"",color:"purpleA700"},on:{click:function(e){t.$router.push({name:"addGearItem"})}}},[s("mu-icon",{attrs:{value:"add"}}),s("span",{staticClass:"button-icon"},[t._v("Add Gear Item")])],1)},R=[],V={name:"AddGearItemButton"},W=V,J=Object(g["a"])(W,z,R,!1,null,null,null),H=J.exports,q={name:"GearItems",props:{gearLists:{type:Array},watchDeleteConfirmation:{type:Object}},components:{AttachSingleItemToManyLists:B,AddGearItemButton:H,SeeMoreButton:_},data:function(){return{limit:4,errors:{},userGearItems:[],isJustAFewItems:!0,FILE_BUG:"Kindly file a bug report."}},watch:{watchDeleteConfirmation:function(t){t.success&&this.actuallyForeverDeleteGearItem(t.id)}},beforeMount:function(){this.getAllUserGearItems()},methods:{editGearItem:function(t){this.$router.push({name:"editGearItem",params:{id:t}})},getAllUserGearItems:function(){var t=this;P["a"].getAllGearItemsForUser().then((function(e){t.userGearItems=n()(e.data.gearItems),t.userGearItems.length<t.limit&&(t.limit=t.userGearItems.length),t.isJustAFewItems=t.userGearItems.length<=t.limit})).catch((function(e){t.errors=e}))},updateGearItemsLimit:function(t){this.limit=t,this.getAllUserGearItems()},confirmDeleteItem:function(t){this.$emit("updateDashboardDeleteConfirmation","Are you sure you want to delete this item? It will be forever deleted and removed from all lists to which it belongs.",t,M.a.gearItem)},actuallyForeverDeleteGearItem:function(t){var e=this;P["a"].deleteGearItem(t).then((function(t){e.updateSuccessMessage(t.data.successMessage),e.getAllUserGearItems()})).catch((function(t){console.log(t),e.updateFailureMessage(["Problem deleting item.",e.FILE_BUG])}))},refreshDashboardGearLists:function(){this.$emit("updateDashboardGearLists")},updateSuccessMessage:function(t){this.$emit("updateDashboardSuccessMessage",t)},updateFailureMessage:function(t){this.$emit("updateDashboardFailureMessage",t)}}},Q=q,Y=(s("5f52"),Object(g["a"])(Q,O,k,!1,null,null,null)),K=Y.exports,X={name:"Dashboard",props:{user:{type:Object,required:!0}},components:{GearLists:F,GearItems:K},data:function(){return{navItems:c.a,gearLists:[],showSuccessAlert:!1,showFailureAlert:!1,successMessage:"",failureMessages:[],deleteMessage:"",triggerGlobalGearListUpdate:!1,openDeleteDialogue:!1,idToDelete:null,whatToDelete:null,watchDeleteConfirmation:{success:!1,id:null},watchDeleteListConfirmation:{success:!1,id:null}}},computed:{timeGreeting:function(){var t=(new Date).getHours(),e="";return e=0<=t&&t<=5?"You must be up late or up early":6>=t&&t<=11?"Good morning":12>=t&&t<=16?"Good afternoon":"Good evening",e}},beforeCreate:function(){this.$emit("updateNavigation",c.a),this.$emit("getGloballyLoggedInUser")},methods:{updateDashboardGearLists:function(){this.triggerGlobalGearListUpdate=!0},updateGearListsForUser:function(t){this.gearLists=n()(t),this.triggerGlobalGearListUpdate=!1},updateSuccessMessage:function(t){this.successMessage=t,this.showSuccessAlert=!0,this.updateDashboardGearLists()},updateFailureMessages:function(t){this.failureMessages=t,this.showFailureAlert=!0},updateConfimDeleteMessage:function(t,e,s){this.deleteMessage=t,this.idToDelete=e,this.whatToDelete=s,this.openDeleteDialogue=!0},confirmDelete:function(){this.whatToDelete===M.a.gearItem?this.watchDeleteConfirmation={success:!0,id:this.idToDelete}:this.whatToDelete===M.a.gearList&&(this.watchDeleteListConfirmation={success:!0,id:this.idToDelete}),this.openDeleteDialogue=!1},cancelDelete:function(){this.openDeleteDialogue=!1,this.idToDelete=null}}},Z=X,tt=(s("2b56"),Object(g["a"])(Z,a,r,!1,null,null,null));e["default"]=tt.exports},"794b":function(t,e,s){t.exports=!s("8e60")&&!s("294c")((function(){return 7!=Object.defineProperty(s("1ec9")("div"),"a",{get:function(){return 7}}).a}))},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"7d6d":function(t,e,s){var a=s("63b6"),r=s("13c8")(!1);a(a.S,"Object",{values:function(t){return r(t)}})},8281:function(t,e,s){},"87a4":function(t,e,s){var a=s("63b6");a(a.S,"Number",{EPSILON:Math.pow(2,-52)})},"8b97":function(t,e,s){var a=s("d3f4"),r=s("cb7c"),i=function(t,e){if(r(t),!a(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,a){try{a=s("9b43")(Function.call,s("11e9").f(Object.prototype,"__proto__").set,2),a(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,s){return i(t,s),e?t.__proto__=s:a(t,s),t}}({},!1):void 0),check:i}},"8e60":function(t,e,s){t.exports=!s("294c")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},9093:function(t,e,s){var a=s("ce10"),r=s("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,r)}},"9e1c":function(t,e,s){s("7d6d"),t.exports=s("584a").Object.values},aa77:function(t,e,s){var a=s("5ca1"),r=s("be13"),i=s("79e5"),n=s("fdef"),o="["+n+"]",c="​",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),m=function(t,e,s){var r={},o=i((function(){return!!n[t]()||c[t]()!=c})),l=r[t]=o?e(f):n[t];s&&(r[s]=l),a(a.P+a.F*o,"String",r)},f=m.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=m},ac6a:function(t,e,s){for(var a=s("cadf"),r=s("0d58"),i=s("2aba"),n=s("7726"),o=s("32e9"),c=s("84f2"),l=s("2b4c"),u=l("iterator"),m=l("toStringTag"),f=c.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=r(d),h=0;h<p.length;h++){var g,v=p[h],b=d[v],L=n[v],I=L&&L.prototype;if(I&&(I[u]||o(I,u,f),I[m]||o(I,m,v),c[v]=f,b))for(g in a)I[g]||i(I,g,a[g],!0)}},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},b447:function(t,e,s){var a=s("3a38"),r=Math.min;t.exports=function(t){return t>0?r(a(t),9007199254740991):0}},b8e3:function(t,e){t.exports=!0},c3a1:function(t,e,s){var a=s("e6f3"),r=s("1691");t.exports=Object.keys||function(t){return a(t,r)}},c5f6:function(t,e,s){"use strict";var a=s("7726"),r=s("69a8"),i=s("2d95"),n=s("5dbc"),o=s("6a99"),c=s("79e5"),l=s("9093").f,u=s("11e9").f,m=s("86cc").f,f=s("aa77").trim,d="Number",p=a[d],h=p,g=p.prototype,v=i(s("2aeb")(g))==d,b="trim"in String.prototype,L=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():f(e,3);var s,a,r,i=e.charCodeAt(0);if(43===i||45===i){if(s=e.charCodeAt(2),88===s||120===s)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+e}for(var n,c=e.slice(2),l=0,u=c.length;l<u;l++)if(n=c.charCodeAt(l),n<48||n>r)return NaN;return parseInt(c,a)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof p&&(v?c((function(){g.valueOf.call(s)})):i(s)!=d)?n(new h(L(e)),s,p):L(e)};for(var I,w=s("9e1e")?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),G=0;w.length>G;G++)r(h,I=w[G])&&!r(p,I)&&m(p,I,u(h,I));p.prototype=g,g.constructor=p,s("2aba")(a,d,p)}},d721:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("mu-form",{ref:"attachGearItemForm",attrs:{model:t.gearItemSelections}},[s("mu-dialog",{staticClass:"itemAttachDialog",attrs:{title:this.gearListTitle+" Items",width:"600","max-width":"100%","overlay-color":"#000","lock-scroll":!0,"esc-press-close":!0,"overlay-close":!1,open:t.openAlert,transition:"slide-bottom",scrollable:""},on:{"update:open":function(e){t.openAlert=e}}},[s("mu-col",{attrs:{span:"12",lg:"12",sm:"12"}},[s("mu-form-item",{attrs:{prop:"selections"}},[s("mu-select",{staticClass:"add-to-gear-list-drop-down",attrs:{filterable:"",multiple:"",chips:"",prop:"selections","max-height":"60%",textline:"two-line"},model:{value:t.gearItemSelections.values,callback:function(e){t.$set(t.gearItemSelections,"values",e)},expression:"gearItemSelections.values"}},t._l(this.allUserItems,(function(t,e){return s("mu-option",{key:e,staticClass:"gear-list-dropdown-attach-selections",attrs:{label:t.title,value:t._id,prop:"selections"}})})),1)],1)],1),s("mu-button",{attrs:{slot:"actions",flat:"",color:"rgb(181, 181, 181)"},on:{click:t.closeAlertDialog},slot:"actions"},[t._v("Nevermind")]),s("mu-button",{attrs:{slot:"actions",flat:"",color:"primary"},on:{click:t.attachItemsToGearList},slot:"actions"},[t._v("Update")])],1)],1)],1)},r=[],i=(s("ac6a"),s("db0c")),n=s.n(i),o=s("16e2"),c=s("67ad"),l={name:"AttachManyItemsToSingleList",props:{gearItems:{type:Array},openAlert:{type:Boolean},watchGearListToAttachDashboard:{type:String},watchGearListToAttachListView:{type:String},watchRefreshListItems:{type:Boolean}},data:function(){return{gearItemSelections:{values:[]},gearListId:"",gearListTitle:"",allUserItems:{},errors:{}}},watch:{watchGearListToAttachDashboard:function(t){this.gearListId=t,this.getAllItemsBelongingToUser(t)},watchGearListToAttachListView:function(t){this.gearListId=t,this.getAllItemsBelongingToUser(t)},watchRefreshListItems:function(){console.log("Refresh detected"),this.getAllItemsBelongingToUser(this.gearListId)}},methods:{closeAlertDialog:function(){this.$emit("closeAttachItemsDialog")},getAllItemsBelongingToUser:function(t){var e=this;c["a"].getAllGearItemsForUser().then((function(s){e.allUserItems=n()(s.data.gearItems),o["a"].getListAndItems(t).then((function(t){e.gearListTitle=t.data.title;var s=t.data.items.map((function(t){return t._id}));e.gearItemSelections.values=s})).catch((function(t){console.log("Something's gone wrong with server side routing.: ",t)}))})).catch((function(t){console.log("Something's gone wrong with server side routing.: ",t)}))},attachItemsToGearList:function(){var t=this;o["a"].attachManyItemsToOneList({gearListId:this.gearListId,selectedListIds:this.gearItemSelections.values}).then((function(e){e.data.success?(t.$emit("successMessage",e.data.successMessage),t.closeAlertDialog()):(t.$emit("updateFailureMessage",e.data.errors),t.closeAlertDialog())})).catch((function(t){console.log(t)}))}}},u=l,m=(s("5505"),s("2877")),f=Object(m["a"])(u,a,r,!1,null,null,null);e["a"]=f.exports},d864:function(t,e,s){var a=s("79aa");t.exports=function(t,e,s){if(a(t),void 0===e)return t;switch(s){case 1:return function(s){return t.call(e,s)};case 2:return function(s,a){return t.call(e,s,a)};case 3:return function(s,a,r){return t.call(e,s,a,r)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,s){var a=s("e4ae"),r=s("794b"),i=s("1bc3"),n=Object.defineProperty;e.f=s("8e60")?Object.defineProperty:function(t,e,s){if(a(t),e=i(e,!0),a(s),r)try{return n(t,e,s)}catch(o){}if("get"in s||"set"in s)throw TypeError("Accessors not supported!");return"value"in s&&(t[e]=s.value),t}},db0c:function(t,e,s){t.exports=s("9e1c")},dbcd:function(t,e,s){"use strict";var a=s("8281"),r=s.n(a);r.a},dbdb:function(t,e,s){var a=s("584a"),r=s("e53d"),i="__core-js_shared__",n=r[i]||(r[i]={});(t.exports=function(t,e){return n[t]||(n[t]=void 0!==e?e:{})})("versions",[]).push({version:a.version,mode:s("b8e3")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},e4ae:function(t,e,s){var a=s("f772");t.exports=function(t){if(!a(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var s=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=s)},e6f3:function(t,e,s){var a=s("07e3"),r=s("36c3"),i=s("5b4e")(!1),n=s("5559")("IE_PROTO");t.exports=function(t,e){var s,o=r(t),c=0,l=[];for(s in o)s!=n&&a(o,s)&&l.push(s);while(e.length>c)a(o,s=e[c++])&&(~i(l,s)||l.push(s));return l}},e9c6:function(t,e,s){s("87a4"),t.exports=Math.pow(2,-52)},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=dashboard.48b1b65b.js.map