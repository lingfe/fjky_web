(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-detailPage-detailPhysicalExaminationRecord-index"],{"0de9":function(e,t,n){"use strict";function i(e){var t=Object.prototype.toString.call(e);return t.substring(8,t.length-1)}function a(){return"string"===typeof __channelId__&&__channelId__}function o(e,t){switch(i(t)){case"Function":return"function() { [native code] }";default:return t}}function r(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];console[e].apply(console,n)}function u(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.shift();if(a())return t.push(t.pop().replace("at ","uni-app:///")),console[r].apply(console,t);var u=t.map((function(e){var t=Object.prototype.toString.call(e).toLowerCase();if("[object object]"===t||"[object array]"===t)try{e="---BEGIN:JSON---"+JSON.stringify(e,o)+"---END:JSON---"}catch(a){e=t}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var n=i(e).toUpperCase();e="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+e+"---END:"+n+"---":String(e)}return e})),d="";if(u.length>1){var c=u.pop();d=u.join("---COMMA---"),0===c.indexOf(" at ")?d+=c:d+="---COMMA---"+c}else d=u[0];console[r](d)}n.r(t),n.d(t,"log",(function(){return r})),n.d(t,"default",(function(){return u}))},a222:function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("ffe8")),o=i(n("ead7")),r={data:function(){return{items:[1,2],cId:"",obj:{}}},methods:{addPhysicalExaminationRecord:function(){a.default.goto("../addPhysicalExaminationRecord/index")},getDetail:function(){var e=this;o.default.Post("/sys_fkcy/app_phyexa/getWhereId.app",{id:this.cId},(function(t){e.obj=t.data}))},deleteRecord:function(){var e=this;uni.showModal({title:"确定删除记录内容？",content:"备注：删除后不可修复",success:function(t){t.confirm&&o.default.Post("sys_fkcy/app_phyexa/deleteWhereId.app",{id:e.cId},(function(e){uni.showToast({title:e.msg,icon:"none",success:function(){var e=setInterval((function(){clearInterval(e),uni.navigateBack()}),1e3)}})}))}})}},mounted:function(){this.getDetail()},onLoad:function(e){this.cId=e.id}};t.default=r},a3cb:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".content[data-v-af694e34]{letter-spacing:.1rem;font-size:.8rem!important}.deletBtn[data-v-af694e34]{position:absolute;width:100%;text-align:center;padding:1rem 0;bottom:8rem}.deletBtn>uni-text[data-v-af694e34]{border:1px solid red;padding:.5rem 5rem;color:red;-webkit-border-radius:2.5rem;border-radius:2.5rem}.content[data-v-af694e34]{border-top:1px solid #eee}.saveBtn[data-v-af694e34]{margin:10%;text-align:center;padding:.5rem 0;background-color:#00d193;color:#fff;-webkit-border-radius:1rem;border-radius:1rem}uni-input[data-v-af694e34],uni-textarea[data-v-af694e34]{background-color:#f5f5f5;margin:-.5rem 1.5rem;height:1.5rem;\n\t/* border: 1px solid red; */padding:.5rem .5rem;-webkit-border-radius:.5rem;border-radius:.5rem;color:#666;font-size:.8rem}uni-textarea[data-v-af694e34]{height:5rem!important}.title[data-v-af694e34]{\n\t/* border: 1px solid red; */font-size:1rem;padding:1.3rem;margin-left:.2rem;font-size:.9rem;font-weight:bolder}",""]),e.exports=t},ab7b:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",[e._v("体检时间")])],1),n("v-uni-view",{staticClass:"insertInfo"},[n("v-uni-input",{attrs:{disabled:"true",type:"text",value:e.obj.pex_datetime}})],1)],1),n("v-uni-view",[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",[e._v("体检医院")])],1),n("v-uni-view",{staticClass:"insertInfo"},[n("v-uni-input",{attrs:{disabled:"true",type:"text",value:e.obj.pex_hospital}})],1)],1),n("v-uni-view",[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",[e._v("体检项目")])],1),n("v-uni-view",{staticClass:"insertInfo"},[n("v-uni-input",{attrs:{disabled:"true",type:"text",value:e.obj.pex_project}})],1)],1),n("v-uni-view",[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",[e._v("结果分析")])],1),n("v-uni-view",{staticClass:"insertInfo"},[n("v-uni-textarea",{attrs:{disabled:"true",value:e.obj.pex_result,row:"10",type:"text"}})],1)],1),n("v-uni-view",{staticClass:"deletBtn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.deleteRecord()}}},[n("v-uni-text",[e._v("删除")])],1)],1)},o=[]},ac57:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={appUserId:function(){var e="";return e=appNative.getUserId(),e},appToken:function(){var e="";return e=appNative.getUserToken(),e}};t.default=i},ad4d:function(e,t,n){var i=n("a3cb");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("40e1d28e",i,!0,{sourceMap:!1,shadowMode:!1})},c07f:function(e,t,n){"use strict";n.r(t);var i=n("a222"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},d957:function(e,t,n){"use strict";n.r(t);var i=n("ab7b"),a=n("c07f");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("fd00");var r,u=n("f0c5"),d=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"af694e34",null,!1,i["a"],r);t["default"]=d.exports},ead7:function(e,t,n){"use strict";(function(e){var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("ac57")),o={Get:function(t,n,i){uni.showLoading({title:"加载中",iocn:"none"}),uni.request({url:t,method:"GET",data:n,header:{"content-type":"application/x-www-form-urlencoded;charset=UTF-8",token:a.default.appToken()},timeout:1e3,success:function(e){uni.hideLoading(),0==e.data.code?i(e.data):uni.showToast({title:e.msg||t+"请求失败",duration:2e3,icon:"none"})},fail:function(t){e("log",t," at util/tool/http.js:34"),uni.showToast({title:t.msg,duration:1e3}),uni.hideLoading()},complete:function(){uni.hideLoading()}})},Post:function(e,t,n){uni.showLoading({title:"加载中",iocn:"none"}),uni.request({url:e,method:"POST",data:t,timeout:1e3,header:{"content-type":"application/x-www-form-urlencoded;charset=UTF-8",token:a.default.appToken()},success:function(e){uni.hideLoading(),0==e.data.code?n(e.data):uni.showToast({title:e.msg,duration:1e3,icon:"none"})},complete:function(){uni.hideLoading()}})}};t.default=o}).call(this,n("0de9")["log"])},fd00:function(e,t,n){"use strict";var i=n("ad4d"),a=n.n(i);a.a},ffe8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={goto:function(e){uni.navigateTo({url:e})},getNumber:function(){return Math.ceil(10*Math.random())},transformTime:function(e){if(e){var t=new Date(e),n=t.getFullYear(),i=t.getMonth()+1,a=t.getDate(),o=t.getHours(),r=t.getMinutes(),u=t.getSeconds();return n+"-"+i+"-"+a+" "+o+":"+r+":"+u}return""}};t.default=i}}]);