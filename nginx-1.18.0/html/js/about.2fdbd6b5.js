(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0020":function(e,t,a){"use strict";a("fc29")},"0ae28":function(e,t,a){"use strict";a("74ce")},"1bde":function(e,t,a){},2532:function(e,t,a){"use strict";var o=a("23e7"),r=a("5a34"),l=a("1d80"),i=a("ab13");o({target:"String",proto:!0,forced:!i("includes")},{includes:function(e){return!!~String(l(this)).indexOf(r(e),arguments.length>1?arguments[1]:void 0)}})},"3f45":function(e,t,a){"use strict";a("1bde")},"44e7":function(e,t,a){var o=a("861d"),r=a("c6b6"),l=a("b622"),i=l("match");e.exports=function(e){var t;return o(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==r(e))}},"4ef5":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"setting"},[e._m(0),a("div",{staticClass:"btn_block"},[a("div",{staticClass:"upload_btn"},[a("el-upload",{staticClass:"upload-demo",attrs:{action:"#",accept:".xls, .xlsx","auto-upload":!1,"show-file-list":!0,"file-list":e.fileList,multiple:!1}},[a("el-button",{attrs:{type:"primary",loading:e.upload_loading}},[e._v("檔案上傳批次更新")])],1)],1),a("el-button",{attrs:{type:"primary"}},[e._v("修改勾選資料")]),a("el-button",{attrs:{type:"primary"}},[e._v("刪除勾選資料")]),a("span",{staticStyle:{"margin-left":"12px","vertical-align":"top",display:"inline-block"}},[a("excel-export",{attrs:{sheet:e.sheet_demo,filename:"Setting_Demo"}},[a("el-button",{attrs:{type:"primary"}},[e._v("下載樣板")])],1)],1)],1),a("div",{staticClass:"table_block"},[a("el-card",{staticClass:"box-card"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData.slice((e.currentPage-1)*e.pagesize,e.currentPage*e.pagesize)}},[a("el-table-column",{attrs:{type:"index",index:e.indexMethod,width:"40"}}),a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{prop:"code",label:"共同編碼"}}),a("el-table-column",{attrs:{prop:"category",label:"類別"}}),a("el-table-column",{attrs:{prop:"material",label:"標準材質"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"編輯",placement:"bottom"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"small",circle:""},on:{click:function(a){return e.EditRowDate(t.row)}}})],1),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"檢視紀錄",placement:"bottom"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-tickets",size:"small",circle:""},on:{click:function(a){return e.EditRowDate(t.row)}}})],1)]}}])})],1),a("div",{staticStyle:{"text-align":"center","margin-top":"15px"}},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.tableData.length},on:{"current-change":e.current_change}})],1)],1)],1),a("edit-dialog",{attrs:{dialogFormVisible:e.dialogFormVisible,form:e.dialogform,VisibleFunction:e.VisibleFunction}})],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page_title"},[a("h2",{staticClass:"title_text",staticStyle:{"margin-top":"15px"}},[e._v("材質對照表")]),a("div",{staticClass:"title_line"})])}],l=["code","category","material"],i=[{code:"共同編碼",category:"類別",material:"標準材質"}],n=a("810f"),c=a("6204"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"修改資料",visible:e.dialogFormVisible,width:"40%"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{attrs:{model:e.form,"label-width":"80px",size:"medium","label-position":"top"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"共同編碼"}},[a("el-input",{model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"標準材質"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.material,callback:function(t){e.$set(e.form,"material",t)},expression:"form.material"}})],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"類別"}},[a("el-select",{attrs:{placeholder:"請選擇類別"},model:{value:e.form.category,callback:function(t){e.$set(e.form,"category",t)},expression:"form.category"}},[a("el-option",{attrs:{label:"金屬板",value:"金屬板"}}),a("el-option",{attrs:{label:"金屬片",value:"金屬片"}}),a("el-option",{attrs:{label:"金屬管",value:"金屬管"}}),a("el-option",{attrs:{label:"金屬桿",value:"金屬桿"}})],1)],1)],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.VisibleFunction}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.VisibleFunction}},[e._v("確 定")])],1)],1)},d=[],u={name:"Editdialog",props:{dialogFormVisible:Boolean,VisibleFunction:Function,form:{code:String,material:String,category:String}}},p=u,m=a("2877"),f=Object(m["a"])(p,s,d,!1,null,null,null),g=f.exports,h={components:{ExcelExport:c["ExcelExport"],"edit-dialog":g},data:function(){return{tableData:n,fileList:[],upload_loading:!1,currentPage:1,pagesize:10,dialogFormVisible:!1,dialogform:{code:"",material:"",category:""},sheet_demo:[{tHeader:l,table:i,keys:l,sheetName:"Sheet1"}]}},methods:{current_change:function(e){this.currentPage=e},indexMethod:function(e){return 10*(this.currentPage-1)+e+1},EditRowDate:function(e){this.dialogform.code=e.code,this.dialogform.material=e.material,this.dialogform.category=e.category,this.dialogFormVisible=!0},VisibleFunction:function(){this.dialogFormVisible=!1}}},b=h,y=(a("0ae28"),Object(m["a"])(b,o,r,!1,null,null,null));t["default"]=y.exports},"5a34":function(e,t,a){var o=a("44e7");e.exports=function(e){if(o(e))throw TypeError("The method doesn't accept regular expressions");return e}},"5f43":function(e,t,a){e.exports=a.p+"img/AIDC_Taiwan_logo.67b9c2bc.svg"},"74ce":function(e,t,a){},"810f":function(e){e.exports=JSON.parse('[{"code":"7000","category":"金屬片","material":"7050-T7451"},{"code":"7000","category":"金屬片","material":"7075-T7351"},{"code":"7000","category":"金屬片","material":"7055-T7751"},{"code":"7000","category":"金屬片","material":"7075-T651"},{"code":"7000","category":"金屬片","material":"7475-T7351"},{"code":"7000","category":"金屬片","material":"7040-T7451"},{"code":"7000","category":"金屬片","material":"7075-O"},{"code":"7000","category":"金屬片","material":"7150-T7751"},{"code":"7000","category":"金屬片","material":"6061-T651"},{"code":"2000","category":"金屬片","material":"2024-T351"},{"code":"2000","category":"金屬片","material":"2124-T851"},{"code":"2000","category":"金屬片","material":"2024-T851"},{"code":"TI","category":"金屬片","material":"TI-6AL-4V"},{"code":"TI","category":"金屬片","material":"TI-6AL-6V-2SN-A"},{"code":"AMS","category":"金屬片","material":"AMS4900"},{"code":"AMS","category":"金屬片","material":"AMS4530"},{"code":"AMS","category":"金屬片","material":"AMS-DTL-22499/1,TY.I,CL.2"},{"code":"AMS","category":"金屬片","material":"AMS7721"},{"code":"AMS","category":"金屬片","material":"AMS-DTL-22499,CP.1,TY.I,CL.1"},{"code":"AMS","category":"金屬片","material":"AMS-DTL-22499,CP.6,TY.I,CL.2"},{"code":"AMS","category":"金屬片","material":"AMS-DTL-22499/1,TY.I,CL.1"},{"code":"AMS","category":"金屬片","material":"AMS4901"},{"code":"AMS","category":"金屬片","material":"AMS4902"},{"code":"M22499","category":"金屬片","material":"M22499/1-043"},{"code":"M22500","category":"金屬片","material":"M22499/1-013"},{"code":"M22501","category":"金屬片","material":"M22499/1-025"},{"code":"M22502","category":"金屬片","material":"M22499/1-031"},{"code":"M22503","category":"金屬片","material":"M22499/1-015"},{"code":"M22504","category":"金屬片","material":"M22499/1-001"},{"code":"M22505","category":"金屬片","material":"M22499/1-005"},{"code":"M22506","category":"金屬片","material":"M22499/1-033"},{"code":"M22507","category":"金屬片","material":"M22499/1-011"},{"code":"M22508","category":"金屬片","material":"M22499/1-057"},{"code":"M22509","category":"金屬片","material":"M22499/1-027"},{"code":"M22510","category":"金屬片","material":"M22499/1-023"},{"code":"M22511","category":"金屬片","material":"M22499/1-045"},{"code":"M22512","category":"金屬片","material":"M22499/1-055"},{"code":"M22513","category":"金屬片","material":"M22499/1"}]')},a9e3:function(e,t,a){"use strict";var o=a("83ab"),r=a("da84"),l=a("94ca"),i=a("6eeb"),n=a("5135"),c=a("c6b6"),s=a("7156"),d=a("c04e"),u=a("d039"),p=a("7c73"),m=a("241c").f,f=a("06cf").f,g=a("9bf2").f,h=a("58a8").trim,b="Number",y=r[b],_=y.prototype,v=c(p(_))==b,x=function(e){var t,a,o,r,l,i,n,c,s=d(e,!1);if("string"==typeof s&&s.length>2)if(s=h(s),t=s.charCodeAt(0),43===t||45===t){if(a=s.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(s.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+s}for(l=s.slice(2),i=l.length,n=0;n<i;n++)if(c=l.charCodeAt(n),c<48||c>r)return NaN;return parseInt(l,o)}return+s};if(l(b,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var w,S=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof S&&(v?u((function(){_.valueOf.call(a)})):c(a)!=b)?s(new y(x(t)),a,S):x(t)},M=o?m(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),T=0;M.length>T;T++)n(y,w=M[T])&&!n(S,w)&&g(S,w,f(y,w));S.prototype=_,_.constructor=S,i(r,b,S)}},ab13:function(e,t,a){var o=a("b622"),r=o("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[r]=!1,"/./"[e](t)}catch(o){}}return!1}},caad:function(e,t,a){"use strict";var o=a("23e7"),r=a("4d64").includes,l=a("44d2");o({target:"Array",proto:!0},{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),l("includes")},d241:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"body"},[a("div",{staticClass:"logincard"},[e._m(0),a("h3",{staticStyle:{"background-color":"black",color:"white","font-size":"30px"}},[e._v("AI BOM System")]),a("div",{staticClass:"formblock"},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-position":"left","label-width":"80px"}},[a("el-form-item",{attrs:{label:"帳號",prop:"account"}},[a("el-input",{attrs:{placeholder:"請輸入帳號",clearable:""},model:{value:e.form.account,callback:function(t){e.$set(e.form,"account",t)},expression:"form.account"}})],1),a("el-form-item",{attrs:{label:"密碼",prop:"password"}},[a("el-input",{attrs:{type:"password",placeholder:"請輸入密碼",clearable:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1)],1),a("button",{staticClass:"loginbtn",on:{click:function(t){return e.loginaction("form")}}},[e._v("登入")])],1),a("div",{staticStyle:{"padding-top":"5rem"}})])])},r=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{padding:"10px"}},[o("img",{staticStyle:{width:"200px",height:"240px",padding:"3px"},attrs:{src:a("5f43")}}),o("h1",{staticClass:"center",staticStyle:{"text-align":"center","font-family":"微軟正黑體","font-weight":"bold: center"}},[e._v(" 漢翔航空工業股份有限公司")]),o("h1",{staticClass:"center",staticStyle:{"text-align":"center","font-family":"微軟正黑體","font-weight":"bold: center"}},[e._v(" 報價預測系統")])])}],l=a("bc3a"),i=a.n(l),n={data:function(){return{form:{account:"",password:""},rules:{account:[{required:!0,message:"請輸入帳號",trigger:"blur"}],password:[{required:!0,message:"請輸入密碼",trigger:"change"}]}}},methods:{loginaction:function(e){var t=this;this.$refs[e].validate((function(e){e&&i()({method:"POST",url:"http://192.168.50.135:8000/accounts/login_api/",data:{username:t.form.account,password:t.form.password}}).then((function(e){console.log(e.data),"pass"===e.data.status?window.location.href="/Prediction_ROM":t.$alert("帳號或密碼錯誤","登入錯誤",{confirmButtonText:"確定"})})).catch((function(e){return console.log(e)}))}))}}},c=n,s=(a("3f45"),a("2877")),d=Object(s["a"])(c,o,r,!1,null,null,null);t["default"]=d.exports},da3c:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"prediction"},[e._m(0),a("div",{staticClass:"btn_block"},[a("div",{staticClass:"upload_btn"},[a("el-upload",{staticClass:"upload-demo",attrs:{action:"#","on-change":e.handleChange,accept:".xls, .xlsx","auto-upload":!1,"show-file-list":!0,"file-list":e.fileList}},[a("el-button",{attrs:{type:"primary",loading:e.upload_loading}},[e._v("檔案上傳")])],1)],1),a("el-button",{attrs:{disabled:e.tableData.length<=0,type:"primary"},on:{click:e.PredictionAction}},[e._v("開始預測")]),a("span",{staticStyle:{"margin-left":"12px","vertical-align":"top",display:"inline-block"}},[a("excel-export",{attrs:{sheet:e.sheet,filename:"PredictionHour_File"}},[a("el-button",{attrs:{type:"primary",disabled:!e.ChartShow}},[e._v("下載結果")])],1)],1),a("span",{staticStyle:{"margin-left":"12px","vertical-align":"top",display:"inline-block"}},[a("excel-export",{attrs:{sheet:e.sheet_demo,filename:"PredictionHour_Demo"}},[a("el-button",{attrs:{type:"primary"}},[e._v("下載樣板")])],1)],1)],1),a("div",{staticClass:"table_block"},[a("el-card",{staticClass:"box-card"},[a("TreeTable",{attrs:{col:e.column_model,data:e.tableData.slice((e.currentPage-1)*e.pagesize,e.currentPage*e.pagesize),loading:e.loading,show:e.tableshow,cellstyle:e.predictstyle}}),a("div",{staticStyle:{"text-align":"center","margin-top":"15px"}},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.tableData.length},on:{"current-change":e.current_change}})],1)],1)],1)])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page_title"},[a("h2",{staticClass:"title_text",staticStyle:{"margin-top":"15px"}},[e._v("工時預測")])])}],l=a("1da1"),i=(a("96cf"),a("fb6a"),a("159b"),a("d3b7"),a("498a"),a("c19f"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("caad"),a("2532"),a("8a09")),n=a("1146"),c=a.n(n),s=a("e133"),d=a("6204"),u=a("bc3a"),p=a.n(u),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"TreeTable"},[e.show?a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{"cell-style":e.cellstyle,data:e.data,"element-loading-text":"計算中..."}},[a("el-table-column",{attrs:{type:"index",index:e.indexMethod,label:"#"}}),e._l(e.col,(function(e,t){return a("TreeTableColumn",{key:t,attrs:{col:e}})}))],2):e._e()],1)},f=[],g=(a("a9e3"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.col.show?a("el-table-column",{key:e.col.key,attrs:{prop:e.col.prop,label:e.col.label,fixed:e.col.fixed}},[e._l(e.col.children,(function(e,t){return a("TreeTableColumn",{key:t,attrs:{col:e}})}))],2):e._e()}),h=[],b={name:"TreeTableColumn",props:{col:{type:Object}}},y=b,_=a("2877"),v=Object(_["a"])(y,g,h,!1,null,null,null),x=v.exports,w={components:{TreeTableColumn:x},props:{col:{type:Array},data:{type:Array},loading:{type:Boolean},indexMethod:{type:Number},show:{type:Boolean},cellstyle:{type:Function}}},S=w,M=Object(_["a"])(S,m,f,!1,null,null,null),T=M.exports,C=a("21a6"),A={components:{ExcelExport:d["ExcelExport"],TreeTable:T},data:function(){return{tableData:[],column_option:i["g"],option_model:i["f"],column_model:i["d"],fileList:[],tableHeader:[],currentPage:1,pagesize:10,upload_loading:!1,Boxtdata:s["a"],ChartShow:!1,loading:!1,tableshow:!0,sheet_demo:[{tHeader:i["f"].slice(0,8),table:i["e"],keys:i["f"].slice(0,8),sheetName:"Sheet1"}]}},computed:{sheet:function(){var e=[],t=[];this.column_option.forEach((function(a){e.push(a.label),t.push(a.prop)}));var a=[{tHeader:e,table:this.tableData,keys:t,sheetName:"Sheet1"}];return a}},methods:{handleChange:function(e,t){var a=this;return Object(l["a"])(regeneratorRuntime.mark((function o(){var r,l,i;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return t.length>1&&t.shift(),a.upload_loading=!0,r=e.raw,o.next=5,a.readFile(r);case 5:l=o.sent,i=c.a.read(l,{type:"binary"}),r=a.getDataRow(i.Sheets[i.SheetNames[0]]),r.forEach((function(e){e.predict_value="-",e.gen_count="-",e.gen_max="-",e.gen_mean="-",e.gen_min="-",e.comp_count="-",e.comp_max="-",e.comp_mean="-",e.comp_min="-"})),a.upload_loading=!1,a.tableData=r.slice(1);case 11:case"end":return o.stop()}}),o)})))()},readFile:function(e){return new Promise((function(t,a){var o=new FileReader;o.readAsBinaryString(e),o.onload=function(e){t(e.target.result)}}))},getDataRow:function(e){var t,a,o=[],r=c.a.utils.decode_range(e["!ref"]),l=r.s.r;for(a=r.s.r+1;a<=r.e.r;++a){var i={};for(t=r.s.c;t<=r.e.c;++t){var n=e[c.a.utils.encode_cell({c:t,r:l})],s=e[c.a.utils.encode_cell({c:t,r:a})],d="-",u="-";s&&s.t&&(d=c.a.utils.format_cell(s)),n&&n.t&&(u=c.a.utils.format_cell(n)),i[u.trim()]=d.trim()}o.push(i)}return o},getHeaderRow:function(e){var t,a=[],o=c.a.utils.decode_range(e["!ref"]),r=o.s.r;for(t=o.s.c;t<=o.e.c;++t){var l=e[c.a.utils.encode_cell({c:t,r:r})],i=e[c.a.utils.encode_cell({c:t,r:r+1})],n="UNKNOWN "+t,s="UNKNOWN "+t;l&&l.t&&(n=c.a.utils.format_cell(l)),i&&i.t&&(s=c.a.utils.format_cell(i));var d={label:s.trim(),prop:n.trim()};a.push(d)}return a},DownloadExcel:function(){var e={font:{name:"Verdana",sz:11,color:"FF00FF88"},fill:{fgColor:{rgb:"FFFFAA00"}}},t={bookType:"xlsx",bookSST:!1,type:"binary",defaultCellStyle:e,showGridLines:!1},a={SheetNames:["Sheet1"],Sheets:{},Props:{}},o=this.tableData;a.Sheets.Sheet1=c.a.utils.json_to_sheet(o);var r=new Blob([this.s2ab(c.a.write(a,t))],{type:"application/octet-stream"});C.saveAs(r,"Prediction_File.xls")},s2ab:function(e){if("undefined"!==typeof ArrayBuffer){for(var t=new ArrayBuffer(e.length),a=new Uint8Array(t),o=0;o!==e.length;o++)a[o]=255&e.charCodeAt(o);return t}for(var r=new Array(e.length),l=0;l!==e.length;o++)r[l]=255&e.charCodeAt(l);return r},current_change:function(e){this.currentPage=e},indexMethod:function(e){return 10*(this.currentPage-1)+e+1},PredictionAction:function(){var e=this;this.loading=!0,p()({method:"POST",url:"http://192.168.50.135:8000/work_hour_prediction_api",responseType:"json",data:{start_predict:"start_predict",data:this.tableData}}).then((function(t){console.log(t.data),e.tableData=t.data,e.loading=!1})).catch((function(e){return console.log(e)})),this.ChartShow=!0},SelectChange:function(e){this.tableshow=!1;var t=i["d"];t.forEach((function(t){"children"in t?t.children.forEach((function(t){console.log("child",t.prop),e.includes(t.prop)?(t.show=!0,console.log(!0)):(t.show=!1,console.log(!1))})):(console.log("not",t.prop),e.includes(t.prop)?(t.show=!0,console.log(!0)):(t.show=!1,console.log(!1)))})),console.log(t),this.column_model=t,this.tableshow=!0},predictstyle:function(e,t,a,o){if("predict_value"===e.column.property&&(console.log(e.row),e.row.predict_value>e.row.comp_max||e.row.predict_value<e.row.comp_min||e.row.predict_value>e.row.gen_max||e.row.predict_value<e.row.gen_min))return"color:#DF5E5E"}}},k=A,E=(a("0020"),Object(_["a"])(k,o,r,!1,null,null,null));t["default"]=E.exports},fc29:function(e,t,a){}}]);
//# sourceMappingURL=about.2fdbd6b5.js.map