(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-addPage-addAllergicHistory-index"],{"06f1":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",[t._v("发现时间")])],1),n("v-uni-view",{staticClass:"insertInfo"},[n("v-uni-input",{attrs:{type:"text"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1)],1),n("v-uni-view",[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",[t._v("过敏食物/药品")])],1),n("v-uni-view",{staticClass:"insertInfo"},[n("v-uni-input",{attrs:{type:"text"},model:{value:t.medical,callback:function(e){t.medical=e},expression:"medical"}})],1)],1),n("v-uni-view",[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",[t._v("过敏症状")])],1),n("v-uni-view",{staticClass:"insertInfo"},[n("v-uni-textarea",{attrs:{row:"10",type:"text"},model:{value:t.outShow,callback:function(e){t.outShow=e},expression:"outShow"}})],1)],1),n("v-uni-view",{staticClass:"saveBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saveData()}}},[n("v-uni-text",[t._v("保存")])],1)],1)},o=[]},"0de9":function(t,e,n){"use strict";function i(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function a(){return"string"===typeof __channelId__&&__channelId__}function o(t,e){switch(i(e)){case"Function":return"function() { [native code] }";default:return e}}function r(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];console[t].apply(console,n)}function u(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e.shift();if(a())return e.push(e.pop().replace("at ","uni-app:///")),console[r].apply(console,e);var u=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,o)+"---END:JSON---"}catch(a){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=i(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),c="";if(u.length>1){var s=u.pop();c=u.join("---COMMA---"),0===s.indexOf(" at ")?c+=s:c+="---COMMA---"+s}else c=u[0];console[r](c)}n.r(e),n.d(e,"log",(function(){return r})),n.d(e,"default",(function(){return u}))},3266:function(t,e,n){"use strict";n.r(e);var i=n("06f1"),a=n("d45d");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("fa20");var r,u=n("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"512cf687",null,!1,i["a"],r);e["default"]=c.exports},"45a8":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("ffe8")),o=i(n("ead7")),r=i(n("ac57")),u={data:function(){return{items:[1,2],time:"",outShow:"",medical:""}},methods:{addPhysicalExaminationRecord:function(){a.default.goto("../addPhysicalExaminationRecord/index")},saveData:function(){if(""!=this.time&&""!=this.outShow&&""!=this.medical){var t={ess_id:r.default.appUserId(),dh_type:0,dh_type_state:0,dh_datetime:this.time,dh_allergy_drugs:this.medical,dh_allergy_symptom:this.outShow};o.default.Post("/sys_fkcy/app_dishis/save.app",t,(function(t){uni.showToast({title:t.msg,icon:"none",success:function(){var t=setInterval((function(){clearInterval(t),uni.navigateBack()}),1e3)}})}))}else uni.showToast({title:"数据不能为空",icon:"none"})}},mounted:function(){}};e.default=u},"96e6":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".content[data-v-512cf687]{letter-spacing:.1rem;font-size:.8rem!important}.content[data-v-512cf687]{border-top:1px solid #eee}.saveBtn[data-v-512cf687]{margin:10%;text-align:center;padding:.5rem 0;background-color:#00d193;color:#fff;-webkit-border-radius:1rem;border-radius:1rem}uni-input[data-v-512cf687],uni-textarea[data-v-512cf687]{background-color:#f5f5f5;margin:-.5rem 1.5rem;height:1.5rem;\n\t/* border: 1px solid red; */padding:.5rem .5rem;-webkit-border-radius:.5rem;border-radius:.5rem}uni-textarea[data-v-512cf687]{height:5rem!important}.title[data-v-512cf687]{\n\t/* border: 1px solid red; */font-size:.9rem;padding:1.3rem;margin-left:.2rem;font-size:.9rem;font-weight:bolder}",""]),t.exports=e},a2f0:function(t,e,n){var i=n("96e6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("79e19260",i,!0,{sourceMap:!1,shadowMode:!1})},ac57:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={appUserId:function(){var t="";return t="0204e3ab-9be7-4b28-9157-4f287631f6e8",t},appToken:function(){var t="";return t="0204e3ab-9be7-4b28-9157-4f287631f6e8",t}};e.default=i},d45d:function(t,e,n){"use strict";n.r(e);var i=n("45a8"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},ead7:function(t,e,n){"use strict";(function(t){var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("ac57")),o={Get:function(e,n,i){uni.showLoading({title:"加载中",iocn:"none"}),uni.request({url:e,method:"GET",data:n,header:{"content-type":"application/x-www-form-urlencoded;charset=UTF-8",token:a.default.appToken()},timeout:1e3,success:function(t){uni.hideLoading(),0==t.data.code?i(t.data):uni.showToast({title:t.msg||e+"请求失败",duration:2e3,icon:"none"})},fail:function(e){t("log",e," at util/tool/http.js:34"),uni.showToast({title:e.msg,duration:1e3}),uni.hideLoading()},complete:function(){uni.hideLoading()}})},Post:function(t,e,n){uni.showLoading({title:"加载中",iocn:"none"}),uni.request({url:t,method:"POST",data:e,timeout:1e3,header:{"content-type":"application/x-www-form-urlencoded;charset=UTF-8",token:a.default.appToken()},success:function(t){uni.hideLoading(),0==t.data.code?n(t.data):uni.showToast({title:t.msg,duration:1e3,icon:"none"})},complete:function(){uni.hideLoading()}})}};e.default=o}).call(this,n("0de9")["log"])},fa20:function(t,e,n){"use strict";var i=n("a2f0"),a=n.n(i);a.a},ffe8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={goto:function(t){uni.navigateTo({url:t})},getNumber:function(){return Math.ceil(10*Math.random())},transformTime:function(t){if(t){var e=new Date(t),n=e.getFullYear(),i=e.getMonth()+1,a=e.getDate(),o=e.getHours(),r=e.getMinutes(),u=e.getSeconds();return n+"-"+i+"-"+a+" "+o+":"+r+":"+u}return""}};e.default=i}}]);