(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-addPage-addFamilyHistory-index"],{"0de9":function(e,t,n){"use strict";function a(e){var t=Object.prototype.toString.call(e);return t.substring(8,t.length-1)}function i(){return"string"===typeof __channelId__&&__channelId__}function o(e,t){switch(a(t)){case"Function":return"function() { [native code] }";default:return t}}function r(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];console[e].apply(console,n)}function u(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.shift();if(i())return t.push(t.pop().replace("at ","uni-app:///")),console[r].apply(console,t);var u=t.map((function(e){var t=Object.prototype.toString.call(e).toLowerCase();if("[object object]"===t||"[object array]"===t)try{e="---BEGIN:JSON---"+JSON.stringify(e,o)+"---END:JSON---"}catch(i){e=t}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var n=a(e).toUpperCase();e="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+e+"---END:"+n+"---":String(e)}return e})),d="";if(u.length>1){var c=u.pop();d=u.join("---COMMA---"),0===c.indexOf(" at ")?d+=c:d+="---COMMA---"+c}else d=u[0];console[r](d)}n.r(t),n.d(t,"log",(function(){return r})),n.d(t,"default",(function(){return u}))},1917:function(e,t,n){"use strict";(function(e){var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("ffe8")),o=a(n("ead7")),r=a(n("ac57")),u={data:function(){return{ron_:"",name_:"",relation_:""}},methods:{addPhysicalExaminationRecord:function(){i.default.goto("../addPhysicalExaminationRecord/index")},saveData:function(){if(""!=this.relation_&&""!=this.name_&&""!=this.relation_){var t={ess_id:r.default.appUserId(),dh_type:3,dh_type_state:3,dh_hd_name:this.name_,dh_hd_relation:this.relation_,dh_hd_is:this.ron_};o.default.Post("sys_fkcy/app_dishis/save.app",t,(function(t){e("log",t," at pages/addPage/addFamilyHistory/index.vue:62"),uni.showToast({title:t.msg,icon:"none",success:function(){var e=setInterval((function(){clearInterval(e),uni.navigateBack()}))}})}))}else uni.showToast({title:"数据不能为空",icon:"none"})}},mounted:function(){}};t.default=u}).call(this,n("0de9")["log"])},"64cf":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".content[data-v-3d41dbe9]{letter-spacing:.1rem;font-size:.8rem!important}.content[data-v-3d41dbe9]{border-top:1px solid #eee}.saveBtn[data-v-3d41dbe9]{margin:10%;text-align:center;padding:.5rem 0;background-color:#00d193;color:#fff;-webkit-border-radius:1rem;border-radius:1rem}uni-input[data-v-3d41dbe9],uni-textarea[data-v-3d41dbe9]{background-color:#f5f5f5;margin:-.5rem 1.5rem;height:1.5rem;\n\t/* border: 1px solid red; */padding:.5rem .5rem;-webkit-border-radius:.5rem;border-radius:.5rem}uni-textarea[data-v-3d41dbe9]{height:5rem!important}.title[data-v-3d41dbe9]{\n\t/* border: 1px solid red; */font-size:.9rem;padding:1.3rem;margin-left:.2rem;font-size:.9rem;font-weight:bolder}",""]),e.exports=t},"90b7":function(e,t,n){"use strict";n.r(t);var a=n("1917"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},a73e:function(e,t,n){var a=n("64cf");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("01c4af2a",a,!0,{sourceMap:!1,shadowMode:!1})},ac57:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={appUserId:function(){var e="";return e="032b6006-9a21-4dad-aa8c-c25f6a0687d0",e},appToken:function(){var e="";return e="032b6006-9a21-4dad-aa8c-c25f6a0687d0",e}};t.default=a},c060:function(e,t,n){"use strict";var a=n("a73e"),i=n.n(a);i.a},c83e:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",[e._v("遗传疾病名称")])],1),n("v-uni-view",{staticClass:"insertInfo"},[n("v-uni-input",{attrs:{type:"text"},model:{value:e.name_,callback:function(t){e.name_=t},expression:"name_"}})],1)],1),n("v-uni-view",[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",[e._v("患病亲属关系")])],1),n("v-uni-view",{staticClass:"insertInfo"},[n("v-uni-input",{attrs:{type:"text"},model:{value:e.relation_,callback:function(t){e.relation_=t},expression:"relation_"}})],1)],1),n("v-uni-view",[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",[e._v("是否遗传")])],1),n("v-uni-view",{staticClass:"insertInfo"},[n("v-uni-input",{attrs:{type:"text"},model:{value:e.ron_,callback:function(t){e.ron_=t},expression:"ron_"}})],1)],1),n("v-uni-view",{staticClass:"saveBtn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.saveData()}}},[n("v-uni-text",[e._v("保存")])],1)],1)},o=[]},dbff:function(e,t,n){"use strict";n.r(t);var a=n("c83e"),i=n("90b7");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("c060");var r,u=n("f0c5"),d=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"3d41dbe9",null,!1,a["a"],r);t["default"]=d.exports},ead7:function(e,t,n){"use strict";(function(e){var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("ac57")),o={Get:function(t,n,a){uni.showLoading({title:"加载中",iocn:"none"}),uni.request({url:t,method:"GET",data:n,header:{"content-type":"application/x-www-form-urlencoded;charset=UTF-8",token:i.default.appToken()},timeout:1e3,success:function(e){uni.hideLoading(),0==e.data.code?a(e.data):uni.showToast({title:e.msg||t+"请求失败",duration:2e3,icon:"none"})},fail:function(t){e("log",t," at util/tool/http.js:34"),uni.showToast({title:t.msg,duration:1e3}),uni.hideLoading()},complete:function(){uni.hideLoading()}})},Post:function(e,t,n){uni.showLoading({title:"加载中",iocn:"none"}),uni.request({url:e,method:"POST",data:t,timeout:1e3,header:{"content-type":"application/x-www-form-urlencoded;charset=UTF-8",token:i.default.appToken()},success:function(e){uni.hideLoading(),0==e.data.code?n(e.data):uni.showToast({title:e.msg,duration:1e3,icon:"none"})},complete:function(){uni.hideLoading()}})}};t.default=o}).call(this,n("0de9")["log"])},ffe8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={goto:function(e){uni.navigateTo({url:e})},getNumber:function(){return Math.ceil(10*Math.random())},transformTime:function(e){if(e){var t=new Date(e),n=t.getFullYear(),a=t.getMonth()+1,i=t.getDate(),o=t.getHours(),r=t.getMinutes(),u=t.getSeconds();return n+"-"+a+"-"+i+" "+o+":"+r+":"+u}return""}};t.default=a}}]);