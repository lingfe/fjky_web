(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-addPage-addmedicalRecords-index"],{"090b":function(e,t,n){"use strict";n.r(t);var i=n("bb60"),a=n("f0b2");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("45a1");var s,r=n("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"283e3323",null,!1,i["a"],s);t["default"]=u.exports},"2c46":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".content[data-v-283e3323]{letter-spacing:.1rem;font-size:.8rem!important}.content[data-v-283e3323]{border-top:1px solid #eee}.saveBtn[data-v-283e3323]{margin:10%;text-align:center;padding:.5rem 0;background-color:#00d193;color:#fff;-webkit-border-radius:1rem;border-radius:1rem}uni-input[data-v-283e3323],uni-textarea[data-v-283e3323]{background-color:#f5f5f5;margin:-.5rem 1.5rem;height:1.5rem;\n\t/* border: 1px solid red; */padding:.5rem .5rem;-webkit-border-radius:.5rem;border-radius:.5rem}uni-textarea[data-v-283e3323]{height:5rem!important}.title[data-v-283e3323]{\n\t/* border: 1px solid red; */font-size:1rem;padding:1.3rem;margin-left:.2rem;font-size:.9rem;font-weight:bolder}",""]),e.exports=t},"45a1":function(e,t,n){"use strict";var i=n("4a3e"),a=n.n(i);a.a},"4a3e":function(e,t,n){var i=n("2c46");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("63f69ba5",i,!0,{sourceMap:!1,shadowMode:!1})},ac57:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={appUserId:function(){var e="";return e="032b6006-9a21-4dad-aa8c-c25f6a0687d0",e},appToken:function(){var e="";return e="032b6006-9a21-4dad-aa8c-c25f6a0687d0",e}};t.default=i},b38c:function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("ffe8")),o=i(n("ead7")),s=i(n("ac57")),r={data:function(){return{time:"",hospital:"",sectionRoom:"",section:"",ReasonsTreatment:""}},methods:{addPhysicalExaminationRecord:function(){a.default.goto("../addPhysicalExaminationRecord/index")},app_melred_save:function(){if(""!=this.time&&""!=this.hospital&&""!=this.sectionRoom&&""!=this.ReasonsTreatment&&""!=this.section){var e={mr_datetime:this.time,mr_hospital:this.hospital,mr_department:this.sectionRoom,mr_type:this.section,mr_result:this.ReasonsTreatment,ess_id:s.default.appUserId()};o.default.Post("sys_fkcy/app_melreds/save.app",e,(function(e){uni.showToast({title:e.msg,icon:"none",success:function(){var e=setInterval((function(){clearInterval(e),uni.navigateBack()}),1e3)}})}))}else uni.showToast({title:"数据不能为空",icon:"none"})}},mounted:function(){}};t.default=r},bb60:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",[e._v("就诊时间")])],1),n("v-uni-view",{staticClass:"insertInfo"},[n("v-uni-input",{attrs:{type:"text"},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}})],1)],1),n("v-uni-view",[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",[e._v("就诊医院/门诊")])],1),n("v-uni-view",{staticClass:"insertInfo"},[n("v-uni-input",{attrs:{type:"text"},model:{value:e.hospital,callback:function(t){e.hospital=t},expression:"hospital"}})],1)],1),n("v-uni-view",[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",[e._v("就诊科室")])],1),n("v-uni-view",{staticClass:"insertInfo"},[n("v-uni-input",{attrs:{type:"text"},model:{value:e.sectionRoom,callback:function(t){e.sectionRoom=t},expression:"sectionRoom"}})],1)],1),n("v-uni-view",[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",[e._v("就诊类别")])],1),n("v-uni-view",{staticClass:"insertInfo"},[n("v-uni-input",{attrs:{type:"text"},model:{value:e.section,callback:function(t){e.section=t},expression:"section"}})],1)],1),n("v-uni-view",[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",[e._v("就诊原因")])],1),n("v-uni-view",{staticClass:"insertInfo"},[n("v-uni-textarea",{attrs:{row:"10",type:"text"},model:{value:e.ReasonsTreatment,callback:function(t){e.ReasonsTreatment=t},expression:"ReasonsTreatment"}})],1)],1),n("v-uni-view",{staticClass:"saveBtn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.app_melred_save()}}},[n("v-uni-text",[e._v("保存")])],1)],1)},o=[]},ead7:function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("ac57")),o={Get:function(e,t,n){uni.showLoading({title:"加载中",iocn:"none"}),uni.request({url:e,method:"GET",data:t,header:{"content-type":"application/x-www-form-urlencoded;charset=UTF-8",token:a.default.appToken()},timeout:1e3,success:function(t){uni.hideLoading(),0==t.data.code?n(t.data):uni.showToast({title:t.msg||e+"请求失败",duration:2e3,icon:"none"})},fail:function(e){console.log(e),uni.showToast({title:e.msg,duration:1e3}),uni.hideLoading()},complete:function(){uni.hideLoading()}})},Post:function(e,t,n){uni.showLoading({title:"加载中",iocn:"none"}),uni.request({url:e,method:"POST",data:t,timeout:1e3,header:{"content-type":"application/x-www-form-urlencoded;charset=UTF-8",token:a.default.appToken()},success:function(e){uni.hideLoading(),0==e.data.code?n(e.data):uni.showToast({title:e.msg,duration:1e3,icon:"none"})},complete:function(){uni.hideLoading()}})}};t.default=o},f0b2:function(e,t,n){"use strict";n.r(t);var i=n("b38c"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},ffe8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={goto:function(e){uni.navigateTo({url:e})},getNumber:function(){return Math.ceil(10*Math.random())},transformTime:function(e){if(e){var t=new Date(e),n=t.getFullYear(),i=t.getMonth()+1,a=t.getDate(),o=t.getHours(),s=t.getMinutes(),r=t.getSeconds();return n+"-"+i+"-"+a+" "+o+":"+s+":"+r}return""}};t.default=i}}]);