(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-evaluationCenter-evaluations-cognitiveAbility-index"],{"0de9":function(t,e,n){"use strict";function i(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){return"string"===typeof __channelId__&&__channelId__}function a(t,e){switch(i(e)){case"Function":return"function() { [native code] }";default:return e}}function r(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];console[t].apply(console,n)}function c(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e.shift();if(o())return e.push(e.pop().replace("at ","uni-app:///")),console[r].apply(console,e);var c=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,a)+"---END:JSON---"}catch(o){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=i(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),s="";if(c.length>1){var l=c.pop();s=c.join("---COMMA---"),0===l.indexOf(" at ")?s+=l:s+="---COMMA---"+l}else s=c[0];console[r](s)}n.r(e),n.d(e,"log",(function(){return r})),n.d(e,"default",(function(){return c}))},"18a4":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".content[data-v-f72c0166]{letter-spacing:.1rem;font-size:.8rem!important}.wh100 .type[data-v-f72c0166]{text-align:center;font-size:.9rem;padding-bottom:.5rem;font-weight:600}.wh100 .type0[data-v-f72c0166]{color:#000!important;font-weight:600;padding-bottom:.5rem;text-align:center}.wh100 .type1[data-v-f72c0166]{color:grey!important;font-weight:100;font-size:.9rem;text-align:center}.wh100[data-v-f72c0166]{position:relative;width:100%;height:60vh;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.tabActive[data-v-f72c0166]{color:#00d193!important;border:1px solid #00d193!important}.items_answer[data-v-f72c0166]{\n\t/* border: 1px solid red; */text-align:center}.items_answer>uni-view[data-v-f72c0166]{padding:.5rem 1rem .5rem 1rem;border:1px solid #eee;width:80%;margin-left:5%;margin-top:5%}.nextBtn[data-v-f72c0166]{\n\t/* border: 1px solid red; */text-align:center;padding-top:.8rem;padding-bottom:.8rem;position:absolute;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;bottom:10%}.nextBtn uni-text[data-v-f72c0166]{padding-top:.5rem;padding-bottom:.5rem;padding-left:5rem;padding-right:5rem;background-color:#00d193;color:#fff;-webkit-border-radius:2.5rem;border-radius:2.5rem}.title_question[data-v-f72c0166]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:rows;flex-direction:rows;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;text-align:center;padding-top:.8rem;padding-bottom:.8rem;font-size:.9rem;color:#000;font-weight:600}",""]),t.exports=e},"23a9":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[t._l(t.items,(function(e,i){return e.show?n("v-uni-view",{staticClass:"subContent"},[n("v-uni-view",{staticClass:"title_question"},[n("v-uni-text",[t._v(t._s(e.title))])],1),t._l(e.subText,(function(e,i){return n("v-uni-view",{staticClass:"items_answer"},[n("v-uni-view",{class:[t.aTab=="aTab"+i?"tabActive":"tabNoActive"],attrs:{value:e.score},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.getChice(i,e.score)}}},[t._v(t._s(e.text))])],1)}))],2):t._e()})),t.now?n("v-uni-view",{staticClass:"nextBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.next()}}},[n("v-uni-text",[t._v("下一步")])],1):n("v-uni-view",{staticClass:"nextBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gotoBack()}}},[n("v-uni-text",[t._v("完成")])],1)],2)},a=[]},"294a":function(t,e,n){"use strict";n.r(e);var i=n("23a9"),o=n("6b77");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("4e76");var r,c=n("f0c5"),s=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"f72c0166",null,!1,i["a"],r);e["default"]=s.exports},"2b45":function(t,e,n){"use strict";(function(t){var i=n("4ea4");n("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("ead7")),a=i(n("ac57")),r={data:function(){return{abilityLevel:"",zTotal:0,cTotal:null,now:!0,aTab:"",items:[{show:!0,title:"您的文化程度是",subText:[{text:"大学程度（包括大专）",score:"10"},{text:"中学程度（包括中专）",score:"5"},{text:"小学程度",score:"3"},{text:"文盲",score:"0"}]},{show:!1,title:"今年是哪一年",subText:[{text:"2023年",score:"0"},{text:"2021年",score:"5"},{text:"2028年",score:"0"},{text:"2088年",score:"0"}]}]}},methods:{next:function(){for(var e=0;e<this.items.length;e++){if(e==this.items.length-1)return this.items[e].show=!1,this.now=!1,this.zTotal=this.zTotal+parseInt(this.cTotal),t("log","总分数："+this.zTotal," at pages/evaluationCenter-evaluations/cognitiveAbility/index.vue:105"),0==this.zTotal?this.abilityLevel="认知功能障碍":this.zTotal>0&&(this.abilityLevel="正常"),this.saveDataHttp(this.abilityLevel),uni.navigateTo({url:"../../evaluationCenter-evaluations/cognitiveAbilityResult/index?result="+this.abilityLevel}),!1;if(1==this.items[e].show)return null!=this.cTotal?(this.zTotal=this.zTotal+parseInt(this.cTotal),this.items[e].show=!1,this.items[e+1].show=!0,this.aTab="",this.cTotal=null,!1):(uni.showToast({title:"请选择内容",icon:"none",duration:1e3}),!1)}},getChice:function(e,n){this.aTab="aTab"+e,this.cTotal=n,t("log",this.cTotal," at pages/evaluationCenter-evaluations/cognitiveAbility/index.vue:147")},gotoBack:function(){uni.navigateTo({url:"../../evaluationCenter/index"})},saveDataHttp:function(e){var n={user_id:a.default.appUserId(),eva_rznl_res:e};o.default.Post("sys_fkcy/eva_res/setUserEvaRes",n,(function(e){t("log",e," at pages/evaluationCenter-evaluations/cognitiveAbility/index.vue:161"),uni.showToast({title:"您的数据已经保存",icon:"none"})}))}},mounted:function(){},onLoad:function(e){t("log",e.result," at pages/evaluationCenter-evaluations/cognitiveAbility/index.vue:171")}};e.default=r}).call(this,n("0de9")["log"])},"4e76":function(t,e,n){"use strict";var i=n("8284"),o=n.n(i);o.a},"6b77":function(t,e,n){"use strict";n.r(e);var i=n("2b45"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},8284:function(t,e,n){var i=n("18a4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("29735fc0",i,!0,{sourceMap:!1,shadowMode:!1})},ac57:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={appUserId:function(){var t="";return t="032b6006-9a21-4dad-aa8c-c25f6a0687d0",t},appToken:function(){var t="";return t="032b6006-9a21-4dad-aa8c-c25f6a0687d0",t}};e.default=i},ead7:function(t,e,n){"use strict";(function(t){var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("ac57")),a={Get:function(e,n,i){uni.showLoading({title:"加载中",iocn:"none"}),uni.request({url:e,method:"GET",data:n,header:{"content-type":"application/x-www-form-urlencoded;charset=UTF-8",token:o.default.appToken()},timeout:1e3,success:function(t){uni.hideLoading(),0==t.data.code?i(t.data):uni.showToast({title:t.msg||e+"请求失败",duration:2e3,icon:"none"})},fail:function(e){t("log",e," at util/tool/http.js:34"),uni.showToast({title:e.msg,duration:1e3}),uni.hideLoading()},complete:function(){uni.hideLoading()}})},Post:function(t,e,n){uni.showLoading({title:"加载中",iocn:"none"}),uni.request({url:t,method:"POST",data:e,timeout:1e3,header:{"content-type":"application/x-www-form-urlencoded;charset=UTF-8",token:o.default.appToken()},success:function(t){uni.hideLoading(),0==t.data.code?n(t.data):uni.showToast({title:t.msg,duration:1e3,icon:"none"})},complete:function(){uni.hideLoading()}})}};e.default=a}).call(this,n("0de9")["log"])}}]);