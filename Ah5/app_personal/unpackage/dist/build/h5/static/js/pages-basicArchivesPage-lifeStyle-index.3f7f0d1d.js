(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-basicArchivesPage-lifeStyle-index"],{"0de9":function(t,e,n){"use strict";function i(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){return"string"===typeof __channelId__&&__channelId__}function a(t,e){switch(i(e)){case"Function":return"function() { [native code] }";default:return e}}function c(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];console[t].apply(console,n)}function s(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var c=e.shift();if(o())return e.push(e.pop().replace("at ","uni-app:///")),console[c].apply(console,e);var s=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,a)+"---END:JSON---"}catch(o){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=i(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),r="";if(s.length>1){var u=s.pop();r=s.join("---COMMA---"),0===u.indexOf(" at ")?r+=u:r+="---COMMA---"+u}else r=s[0];console[c](r)}n.r(e),n.d(e,"log",(function(){return c})),n.d(e,"default",(function(){return s}))},2053:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".content[data-v-1f3e2bb3]{letter-spacing:.1rem;font-size:.8rem!important}.stn[data-v-1f3e2bb3]{margin:20%;padding-top:2%;padding-bottom:2%;text-align:center;font-size:1rem;background-color:#00d193;color:#fff;-webkit-border-radius:1rem;border-radius:1rem}.option_tab[data-v-1f3e2bb3]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;text-align:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:.5rem}.option_tab>uni-text[data-v-1f3e2bb3]{padding:.5rem .8rem;border:1px solid #ddd;-webkit-border-radius:.5rem;border-radius:.5rem;margin:.4rem;color:#666;font-size:.7rem;width:40%}.option_active[data-v-1f3e2bb3]{color:#00d193!important;border:1px solid #00d193!important}.subTitle[data-v-1f3e2bb3]{color:#000;font-weight:600;font-size:.7rem;padding-bottom:.8rem}.content[data-v-1f3e2bb3]{padding:.8rem}.title[data-v-1f3e2bb3]{color:#000;font-weight:bolder;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:relative;padding:0;height:0;padding-top:.5rem}.outOne[data-v-1f3e2bb3]{position:absolute;color:#00d193}",""]),t.exports=e},"3bc6":function(t,e,n){"use strict";n.r(e);var i=n("e824"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"791f":function(t,e,n){"use strict";n.r(e);var i=n("a809"),o=n("3bc6");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("a63f");var c,s=n("f0c5"),r=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"1f3e2bb3",null,!1,i["a"],c);e["default"]=r.exports},"9e57":function(t,e,n){var i=n("2053");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("583e78f5",i,!0,{sourceMap:!1,shadowMode:!1})},a63f:function(t,e,n){"use strict";var i=n("9e57"),o=n.n(i);o.a},a809:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content",staticStyle:{"border-top":"1px solid #eeeeee"}},[n("v-uni-view",{staticClass:"title"},[n("v-uni-text",[t._v("生活方式")])],1),n("v-uni-view",{staticClass:"content"},[n("v-uni-view",[n("v-uni-view",{staticClass:"subTitle"},[n("v-uni-text",[t._v("锻炼情况")])],1),n("v-uni-view",{staticClass:"option_tab"},[n("v-uni-text",{class:"A0"==t.A?"option_active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeOption("A0")}}},[t._v("经常锻炼")]),n("v-uni-text",{class:"A1"==t.A?"option_active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeOption("A1")}}},[t._v("偶尔锻炼")]),n("v-uni-text",{class:"A2"==t.A?"option_active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeOption("A2")}}},[t._v("从不锻炼")])],1)],1),n("v-uni-view",[n("v-uni-view",{staticClass:"subTitle"},[n("v-uni-text",[t._v("喝酒情况")])],1),n("v-uni-view",{staticClass:"option_tab"},[n("v-uni-text",{class:"B0"==t.B?"option_active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeOption("B0")}}},[t._v("经常喝酒")]),n("v-uni-text",{class:"B1"==t.B?"option_active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeOption("B1")}}},[t._v("偶尔喝酒")]),n("v-uni-text",{class:"B2"==t.B?"option_active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeOption("B2")}}},[t._v("从不喝酒")])],1)],1),n("v-uni-view",[n("v-uni-view",{staticClass:"subTitle"},[n("v-uni-text",[t._v("吸烟情况")])],1),n("v-uni-view",{staticClass:"option_tab"},[n("v-uni-text",{class:"C0"==t.C?"option_active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeOption("C0")}}},[t._v("经常吸烟")]),n("v-uni-text",{class:"C1"==t.C?"option_active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeOption("C1")}}},[t._v("偶尔吸烟")]),n("v-uni-text",{class:"C2"==t.C?"option_active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeOption("C2")}}},[t._v("从不吸烟")])],1)],1)],1),n("v-uni-view",{staticClass:"stn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saveData()}}},[n("v-uni-text",[t._v("保存")])],1)],1)},a=[]},ac57:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={appUserId:function(){var t="";return t="4c404454-0d30-475e-a4c5-57bfea958c96",t},appToken:function(){var t="";return t="3d9b2cf4-1de4-46ea-bb70-02c581303eb6",t}};e.default=i},e824:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("ffe8")),a=i(n("ead7")),c=i(n("ac57")),s={data:function(){return{a:o.default,A:"A0",B:"B0",C:"C0",exercise_state:"0",drinking_state:"0",smoke_state:"0"}},methods:{changeOption:function(t){"A0"==t?(this.A=t,this.exercise_state="0"):"A1"==t?(this.A=t,this.exercise_state="1"):"A2"==t?(this.A=t,this.exercise_state="2"):"B0"==t?(this.B=t,thi.drinking_state="0"):"B1"==t?(this.B=t,thi.drinking_state="1"):"B2"==t?(this.B=t,thi.drinking_state="2"):"C0"==t?(this.C=t,this.smoke_state="0"):"C1"==t?(this.C=t,this.smoke_state="1"):"C2"==t&&(this.C=t,this.smoke_state="2")},saveData:function(){var t={exercise_state:this.exercise_state,drinking_state:this.drinking_state,smoke_state:this.smoke_state,user_id:c.default.appUserId()};a.default.Post("sys_fkcy/appUser/editLifeStyle",t,(function(t){uni.showToast({title:t.msg,icon:"none",success:function(){var t=setInterval((function(){clearInterval(t),uni.navigateBack()}),1e3)}})}))}},mounted:function(){}};e.default=s},ead7:function(t,e,n){"use strict";(function(t){var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("ac57")),a={Get:function(e,n,i){uni.showLoading({title:"加载中",iocn:"none"}),uni.request({url:e,method:"GET",data:n,header:{"content-type":"application/x-www-form-urlencoded;charset=UTF-8",token:o.default.appToken()},timeout:1e3,success:function(t){uni.hideLoading(),0==t.data.code?i(t.data):uni.showToast({title:t.msg||e+"请求失败",duration:2e3,icon:"none"})},fail:function(e){t("log",e," at util/tool/http.js:34"),uni.showToast({title:e.msg,duration:1e3}),uni.hideLoading()},complete:function(){uni.hideLoading()}})},Post:function(t,e,n){uni.showLoading({title:"加载中",iocn:"none"}),uni.request({url:t,method:"POST",data:e,timeout:1e3,header:{"content-type":"application/x-www-form-urlencoded;charset=UTF-8",token:o.default.appToken()},success:function(t){uni.hideLoading(),0==t.data.code?n(t.data):uni.showToast({title:t.msg,duration:1e3,icon:"none"})},complete:function(){uni.hideLoading()}})}};e.default=a}).call(this,n("0de9")["log"])},ffe8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={goto:function(t){uni.navigateTo({url:t})},getNumber:function(){return Math.ceil(10*Math.random())}};e.default=i}}]);