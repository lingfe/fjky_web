(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-basicArchivesPage-bodyParametersInput-index"],{"0de9":function(t,e,n){"use strict";function i(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function a(){return"string"===typeof __channelId__&&__channelId__}function o(t,e){switch(i(e)){case"Function":return"function() { [native code] }";default:return e}}function c(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];console[t].apply(console,n)}function r(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var c=e.shift();if(a())return e.push(e.pop().replace("at ","uni-app:///")),console[c].apply(console,e);var r=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,o)+"---END:JSON---"}catch(a){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=i(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),s="";if(r.length>1){var u=r.pop();s=r.join("---COMMA---"),0===u.indexOf(" at ")?s+=u:s+="---COMMA---"+u}else s=r[0];console[c](s)}n.r(e),n.d(e,"log",(function(){return c})),n.d(e,"default",(function(){return r}))},"198c":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("ac57")),o=i(n("ead7")),c={data:function(){return{a:"0",b:"0",d:"0",e:"0"}},methods:{saveData:function(){if("0"!=this.a&&"0"!=this.b&&"0"!=this.c&&"0"!=this.d&&"0"!=this.e){var t={ess_stature:this.a,ess_weight:this.b,ess_bmi:this.c,ess_waistline:this.d,ess_hipline:this.e,appUserId:a.default.appUserId()};o.default.Post("sys_fkcy/appUser/setBody_parameters.app",t,(function(t){uni.showToast({title:t.msg,icon:"none",success:function(){var t=setInterval((function(){clearInterval(t),uni.navigateBack()}),1e3)}})}))}else uni.showToast({title:"数据不能为空",icon:"none"})}}};e.default=c},2905:function(t,e,n){"use strict";n.r(e);var i=n("198c"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"52d5":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".content[data-v-50f3cc03]{letter-spacing:.1rem;font-size:.8rem!important}.tab_item>uni-text[data-v-50f3cc03]:nth-child(1){color:#222}.tab_item>uni-input[data-v-50f3cc03]:nth-child(2){color:#666;width:30%;caret-color:#00d193;text-align:right}.tab_item[data-v-50f3cc03]{\n\t/* border: 1px solid red; */padding:1rem 1rem 1rem 1rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:1px solid #eee}.title[data-v-50f3cc03]{color:#000;font-weight:bolder;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:relative;padding-top:.8rem;padding-bottom:.8rem}.outOne[data-v-50f3cc03]{position:absolute;color:#00d193;right:1rem}",""]),t.exports=e},a115:function(t,e,n){var i=n("52d5");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("a949a8fe",i,!0,{sourceMap:!1,shadowMode:!1})},ac57:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={appUserId:function(){var t="";return t="4c404454-0d30-475e-a4c5-57bfea958c96",t},appToken:function(){var t="";return t="3d9b2cf4-1de4-46ea-bb70-02c581303eb6",t}};e.default=i},ae36:function(t,e,n){"use strict";n.r(e);var i=n("d140"),a=n("2905");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("d164");var c,r=n("f0c5"),s=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"50f3cc03",null,!1,i["a"],c);e["default"]=s.exports},d140:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content",staticStyle:{"border-top":"1px solid #eeeeee"}},[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",[t._v("身体基本参数")]),n("v-uni-text",{staticClass:"outOne",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saveData()}}},[t._v("保存")])],1),n("v-uni-view",[n("v-uni-view",{staticClass:"tab_item"},[n("v-uni-text",[t._v("身高（cm）")]),n("v-uni-input",{attrs:{type:"text","auto-focus":"ture"},model:{value:t.a,callback:function(e){t.a=e},expression:"a"}})],1),n("v-uni-view",{staticClass:"tab_item"},[n("v-uni-text",[t._v("体重（kg）")]),n("v-uni-input",{attrs:{type:"text"},model:{value:t.b,callback:function(e){t.b=e},expression:"b"}})],1),n("v-uni-view",{staticClass:"tab_item"},[n("v-uni-text",[t._v("腰围（cm）")]),n("v-uni-input",{attrs:{type:"text"},model:{value:t.d,callback:function(e){t.d=e},expression:"d"}})],1),n("v-uni-view",{staticClass:"tab_item"},[n("v-uni-text",[t._v("臀围（cm）")]),n("v-uni-input",{attrs:{type:"text"},model:{value:t.e,callback:function(e){t.e=e},expression:"e"}})],1)],1)],1)},o=[]},d164:function(t,e,n){"use strict";var i=n("a115"),a=n.n(i);a.a},ead7:function(t,e,n){"use strict";(function(t){var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("ac57")),o={Get:function(e,n,i){uni.showLoading({title:"加载中",iocn:"none"}),uni.request({url:e,method:"GET",data:n,header:{"content-type":"application/x-www-form-urlencoded;charset=UTF-8",token:a.default.appToken()},timeout:1e3,success:function(t){uni.hideLoading(),0==t.data.code?i(t.data):uni.showToast({title:t.msg||e+"请求失败",duration:2e3,icon:"none"})},fail:function(e){t("log",e," at util/tool/http.js:34"),uni.showToast({title:e.msg,duration:1e3}),uni.hideLoading()},complete:function(){uni.hideLoading()}})},Post:function(t,e,n){uni.showLoading({title:"加载中",iocn:"none"}),uni.request({url:t,method:"POST",data:e,timeout:1e3,header:{"content-type":"application/x-www-form-urlencoded;charset=UTF-8",token:a.default.appToken()},success:function(t){uni.hideLoading(),0==t.data.code?n(t.data):uni.showToast({title:t.msg,duration:1e3,icon:"none"})},complete:function(){uni.hideLoading()}})}};e.default=o}).call(this,n("0de9")["log"])}}]);