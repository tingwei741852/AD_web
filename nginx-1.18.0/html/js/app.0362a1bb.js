(function(e){function t(t){for(var n,r,l=t[0],i=t[1],c=t[2],d=0,u=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(u.length)u.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,r=1;r<a.length;r++){var l=a[r];0!==o[l]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o={app:0},s=[];function l(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"2fdbd6b5"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a={about:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"a5e152f1"}[e]+".css",o=i.p+n,s=document.getElementsByTagName("link"),l=0;l<s.length;l++){var c=s[l],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===n||d===o))return t()}var u=document.getElementsByTagName("style");for(l=0;l<u.length;l++){c=u[l],d=c.getAttribute("data-href");if(d===n||d===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[e],p.parentNode.removeChild(p),a(s)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=s);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=l(e);var u=new Error;c=function(t){d.onerror=d.onload=null,clearTimeout(p);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",u.name="ChunkLoadError",u.type=n,u.request=r,a[1](u)}o[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=d;s.push([1,"chunk-vendors"]),a()})({0:function(e,t){},1:function(e,t,a){e.exports=a("56d7")},2:function(e,t){},2435:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"prediction"},[e._m(0),a("div",{staticClass:"btn_block"},[a("div",{staticClass:"upload_btn"},[a("el-upload",{staticClass:"upload-demo",attrs:{action:"#","on-change":e.handleChange,accept:".xls, .xlsx","auto-upload":!1,"show-file-list":!0,"file-list":e.fileList}},[a("el-button",{attrs:{type:"primary",loading:e.upload_loading}},[e._v("檔案上傳")])],1)],1),a("el-button",{attrs:{disabled:e.tableData.length<=0,type:"primary"},on:{click:e.PredictionAction}},[e._v("開始預測")]),a("span",{staticStyle:{"margin-left":"12px","vertical-align":"top",display:"inline-block"}},[a("excel-export",{attrs:{sheet:e.sheet,filename:"Prediction_File"}},[a("el-button",{attrs:{type:"primary",disabled:!e.ChartShow}},[e._v("下載結果")])],1)],1),a("span",{staticStyle:{"margin-left":"12px","vertical-align":"top",display:"inline-block"}},[a("excel-export",{attrs:{sheet:e.sheet_demo,filename:"Prediction_Demo"}},[a("el-button",{attrs:{type:"primary"}},[e._v("下載樣板")])],1)],1)],1),a("div",{staticClass:"table_block"},[a("el-card",{staticClass:"box-card"},[a("div",{staticStyle:{float:"right","margin-bottom":"15px"}},[a("el-select",{attrs:{"value-key":"prop",multiple:"","collapse-tags":"",placeholder:"請選擇顯示欄位"},model:{value:e.column_model,callback:function(t){e.column_model=t},expression:"column_model"}},e._l(e.column_option,(function(e){return a("el-option",{key:e.prop,attrs:{label:e.label,value:e,disabled:e.disabled}})})),1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#f5f7fa"},"cell-style":e.predictstyle,"row-style":{height:"70px"},data:e.tableData.slice((e.currentPage-1)*e.pagesize,e.currentPage*e.pagesize),"element-loading-text":"計算中...",border:""}},[a("el-table-column",{attrs:{type:"index",index:e.indexMethod,label:"#"}}),e._l(e.column_model,(function(e){return a("af-table-column",{key:e.prop,attrs:{prop:e.prop,label:e.label,fixed:e.fixed}})}))],2),a("div",{staticStyle:{"text-align":"center","margin-top":"15px"}},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.tableData.length},on:{"current-change":e.current_change}})],1)],1)],1)])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page_title"},[a("h2",{staticClass:"title_text",staticStyle:{"margin-top":"15px"}},[e._v("報價預測")])])}],o=a("1da1"),s=(a("96cf"),a("159b"),a("fb6a"),a("d3b7"),a("498a"),a("c19f"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("8a09")),l=a("1146"),i=a.n(l),c=a("e133"),d=a("6204"),u=a("bc3a"),p=a.n(u),f=a("21a6"),b={components:{ExcelExport:d["ExcelExport"]},data:function(){return{tableData:[],column_option:s["b"],column_model:s["b"],fileList:[],tableHeader:[],currentPage:1,pagesize:10,upload_loading:!1,Boxtdata:c["a"],ChartShow:!1,loading:!1,sheet_demo:[{tHeader:s["c"],table:s["a"],keys:s["c"],sheetName:"Sheet1"}]}},computed:{sheet:function(){var e=[],t=[];this.column_option.forEach((function(a){e.push(a.label),t.push(a.prop)}));var a=[{tHeader:e,table:this.tableData,keys:t,sheetName:"Sheet1"}];return a}},methods:{handleChange:function(e,t){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,o,s,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.length>1&&t.shift(),a.upload_loading=!0,r=e.raw,n.next=5,a.readFile(r);case 5:o=n.sent,s=i.a.read(o,{type:"binary"}),r=a.getDataRow(s.Sheets[s.SheetNames[0]]),l=a.getHeaderRow(s.Sheets[s.SheetNames[0]]),a.tableData=r.slice(1),console.log(a.tableData),a.upload_loading=!1,a.column_option=l;case 13:case"end":return n.stop()}}),n)})))()},readFile:function(e){return new Promise((function(t,a){var n=new FileReader;n.readAsBinaryString(e),n.onload=function(e){t(e.target.result)}}))},getDataRow:function(e){var t,a,n=[],r=i.a.utils.decode_range(e["!ref"]),o=r.s.r;for(a=r.s.r+1;a<=r.e.r;++a){var s={};for(t=r.s.c;t<=r.e.c;++t){var l=e[i.a.utils.encode_cell({c:t,r:o})],c=e[i.a.utils.encode_cell({c:t,r:a})],d="-",u="-";c&&c.t&&(d=i.a.utils.format_cell(c)),l&&l.t&&(u=i.a.utils.format_cell(l)),s[u.trim()]=d.trim()}n.push(s)}return n},getHeaderRow:function(e){var t,a=[],n=i.a.utils.decode_range(e["!ref"]),r=n.s.r;for(t=n.s.c;t<=n.e.c;++t){var o=e[i.a.utils.encode_cell({c:t,r:r})],s=e[i.a.utils.encode_cell({c:t,r:r+1})],l="UNKNOWN "+t,c="UNKNOWN "+t;o&&o.t&&(l=i.a.utils.format_cell(o)),s&&s.t&&(c=i.a.utils.format_cell(s));var d={label:c.trim(),prop:l.trim()};a.push(d)}return a},DownloadExcel:function(){var e={font:{name:"Verdana",sz:11,color:"FF00FF88"},fill:{fgColor:{rgb:"FFFFAA00"}}},t={bookType:"xlsx",bookSST:!1,type:"binary",defaultCellStyle:e,showGridLines:!1},a={SheetNames:["Sheet1"],Sheets:{},Props:{}},n=this.tableData;a.Sheets.Sheet1=i.a.utils.json_to_sheet(n);var r=new Blob([this.s2ab(i.a.write(a,t))],{type:"application/octet-stream"});f.saveAs(r,"Prediction_File.xls")},s2ab:function(e){if("undefined"!==typeof ArrayBuffer){for(var t=new ArrayBuffer(e.length),a=new Uint8Array(t),n=0;n!==e.length;n++)a[n]=255&e.charCodeAt(n);return t}for(var r=new Array(e.length),o=0;o!==e.length;n++)r[o]=255&e.charCodeAt(o);return r},current_change:function(e){this.currentPage=e},indexMethod:function(e){return 10*(this.currentPage-1)+e+1},PredictionAction:function(){var e=this;this.loading=!0,p()({method:"POST",url:"http://192.168.50.135:8000/prediction_api",responseType:"json",data:{start_predict:"start_predict",data:this.tableData}}).then((function(t){console.log(t.data),e.tableData=t.data,e.loading=!1})).catch((function(e){return console.log(e)})),this.ChartShow=!0},predictstyle:function(e,t,a,n){if("predict_value"===e.column.property&&(e.row.predict_value>e.row.max||e.row.predict_value<e.row.min))return"color:#DF5E5E"}}},h=b,m=(a("8721"),a("2877")),g=Object(m["a"])(h,n,r,!1,null,null,null);t["default"]=g.exports},3:function(e,t){},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id="4678"},5672:function(e,t,a){e.exports=a.p+"img/logo.5f53542e.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("b0c0");var n=a("2b0e"),r=a("5c96"),o=a.n(r),s=(a("0fae"),a("15f5"),a("7051"),a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),l=a("2435"),i=a("bc3a"),c=a.n(i);n["default"].use(s["a"]);var d=[{path:"/",name:"index",component:l["default"]},{path:"/login",name:"Login",component:function(){return a.e("about").then(a.bind(null,"d241"))}},{path:"/prediction_rom",name:"Prediction_ROM",component:function(){return a.e("about").then(a.bind(null,"2435"))}},{path:"/prediction_hour",name:"Prediction_Hour",component:function(){return a.e("about").then(a.bind(null,"da3c"))}},{path:"/setting",name:"Setting",component:function(){return a.e("about").then(a.bind(null,"4ef5"))}}],u=new s["a"]({mode:"history",base:"/",routes:d});u.beforeEach((function(e,t,a){c()({method:"POST",url:"http://192.168.50.135:8000/accounts/checklogin_api/"}).then((function(t){"pass"===t.data.status?(a(),"/login"===e.path&&a("/")):"/login"!==e.path?a("/login"):a()})).catch((function(e){return console.log(e)}))}));var p=u,f=a("2f62");n["default"].use(f["a"]);var b=new f["a"].Store({state:{},mutations:{},actions:{},modules:{}}),h=(a("f689"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("div",[n("router-link",{attrs:{to:"/"}},[n("img",{staticStyle:{width:"30px","padding-bottom":"5px","padding-right":"5px"},attrs:{src:a("5672")}}),e._v(" AIDC預測系統")]),n("div",{staticClass:"avator"},[n("el-popover",{attrs:{placement:"top-start",width:"150",trigger:"hover"}},[n("p",{staticClass:"user_title"},[e._v("您好!")]),n("ul",{staticClass:"UserList"},[n("li",{on:{click:function(t){return e.logout()}}},[n("i",{staticClass:"fas fa-sign-out-alt",staticStyle:{"margin-right":"15px"}}),e._v("登出")])]),n("div",{staticClass:"avator",attrs:{slot:"reference"},slot:"reference"},[n("i",{staticClass:"fas fa-user-circle fa-2x"})])])],1),n("ul",{staticClass:"NavList",attrs:{id:"NavList"}},[n("router-link",{attrs:{to:"/setting"}},[n("li",[e._v(" SETTING ")])]),n("li",[n("el-dropdown",[n("span",{staticClass:"el-dropdown-link",staticStyle:{"font-weight":"bold"}},[e._v(" PREDICTION ")]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("router-link",{attrs:{to:"/Prediction_ROM"}},[n("el-dropdown-item",[e._v("ROM報價")])],1),n("router-link",{attrs:{to:"/Prediction_Hour"}},[n("el-dropdown-item",[e._v("工時預測")])],1)],1)],1)],1)],1)],1)]),n("router-view")],1)}),m=[],g={methods:{logout:function(){var e=this;console.log("aa"),c()({method:"POST",url:"http://192.168.50.135:8000/accounts/logout_api/"}).then((function(t){"notpass"===t.data.status?window.location.href="/":e.$alert("登出失敗","登出錯誤",{confirmButtonText:"確定"})})).catch((function(e){return console.log(e)}))}}},j=g,_=(a("5c0b"),a("2877")),v=Object(_["a"])(j,h,m,!1,null,null,null),y=v.exports,w=a("f23d"),x=(a("202f"),a("c87b")),k=a.n(x),S=a("b06b"),C=a.n(S),q=a("2106"),P=a.n(q),z=a("ffba"),O=a.n(z);n["default"].component(O.a.name,O.a),n["default"].use(C.a),n["default"].use(w["a"]),n["default"].config.productionTip=!1,n["default"].use(o.a,{locale:k.a}),n["default"].use(P.a,c.a),new n["default"]({router:p,store:b,render:function(e){return e(y)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0ce")},"6e66":function(e,t,a){},8721:function(e,t,a){"use strict";a("6e66")},"8a09":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"g",(function(){return r})),a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return l})),a.d(t,"f",(function(){return i})),a.d(t,"e",(function(){return c}));var n=[{label:"類別",prop:"category",width:"30px"},{label:"標準材質",prop:"std_mat"},{label:"標準規範",prop:"std_reg"},{label:"厚",prop:"thickness"},{label:"寬",prop:"width"},{label:"長",prop:"length"},{fixed:"right",label:"預測值",prop:"predict_value"},{fixed:"right",label:"單位",prop:"unit"},{fixed:"right",label:"最大值",prop:"max"},{fixed:"right",label:"Q3",prop:"q3"},{fixed:"right",label:"平均值",prop:"mean"},{fixed:"right",label:"Q1",prop:"q1"},{fixed:"right",label:"最小值",prop:"min"}],r=[{label:"類別",prop:"category"},{label:"標準材質",prop:"std_mat"},{label:"標準規範",prop:"std_reg"},{label:"厚",prop:"thickness"},{label:"寬",prop:"width"},{label:"長",prop:"length"},{label:"預測值",prop:"predict_value"},{label:"一般件筆數",prop:"gen_count"},{label:"複雜件筆數",prop:"comp_count"},{label:"一般件最大值",prop:"gen_max"},{label:"一般件平均值",prop:"gen_mean"},{label:"複雜件最大值",prop:"comp_max"},{label:"複雜件平均值",prop:"comp_mean"},{label:"複雜件最小值",prop:"comp_min"}],o=[{label:"類別",prop:"category",key:"category",show:!0},{label:"標準材質",prop:"std_mat",key:"std_mat",show:!0},{label:"標準規範",prop:"std_reg",key:"std_reg",show:!0},{label:"材質群組",prop:"mat_group",show:!0},{label:"厚",prop:"thickness",show:!0},{label:"寬",prop:"width",show:!0},{label:"長",prop:"length",show:!0},{label:"預測值",prop:"predict_value",key:"mat_group",show:!0},{label:"一般件",show:!0,children:[{fixed:"right",label:"筆數",prop:"gen_count",show:!0},{fixed:"right",label:"最大值",prop:"gen_max",show:!0},{fixed:"right",label:"平均值",prop:"gen_mean",show:!0},{fixed:"right",label:"最小值",prop:"gen_min",show:!0}]},{label:"複雜件",show:!0,children:[{fixed:"right",label:"筆數",prop:"comp_count",show:!0},{fixed:"right",label:"最大值",prop:"comp_max",show:!0},{fixed:"right",label:"平均值",prop:"comp_mean",show:!0},{fixed:"right",label:"最小值",prop:"comp_min",show:!0}]}],s=["category","std_mat","std_reg","thickness","width","length","reg_sup","predict_value","unit","max","q3","mean","q1","min"],l=[{category:"類別",std_mat:"標準材質",std_reg:"標準規範",thickness:"厚",width:"寬",length:"長",reg_sup:"規範附註",predict_value:"預測值",unit:"單位",min:"Lower Bound",q1:"Q1",mean:"Mean",q3:"Q3",max:"Upper Bound"}],i=["category","mat_group","std_mat","std_reg","thickness","width","length","reg_sup","predict_value","gen_count","gen_max","gen_mean","gen_min","comp_count","comp_max","comp_mean","comp_min"],c=[{category:"類別",mat_group:"製程類別",std_mat:"標準材質",std_reg:"標準規範",thickness:"厚",width:"寬",length:"長",reg_sup:"規範附註"}]},"9c0ce":function(e,t,a){},e133:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=[{profession:"TI-6AL-4V",min:265,q1:290,q2:331,q3:370,max:407},{profession:"7050-T7451",min:230,q1:301,q2:320,q3:360,max:390},{profession:"2024-T351",min:120,q1:189,q2:206,q3:250,max:308},{profession:"7075-T7351",min:224,q1:256,q2:290,q3:340,max:380},{profession:"2124-T851",min:221,q1:260,q2:320,q3:360,max:402},{profession:"7055-T7751",min:180,q1:220,q2:240,q3:260,max:280},{profession:"7075-T651",min:190,q1:225,q2:260,q3:356,max:412}]},f689:function(e,t,a){}});
//# sourceMappingURL=app.0362a1bb.js.map