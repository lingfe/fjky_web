(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-evaluationCenter-evaluations-mentalHealth-index"],{"0de9":function(t,e,o){"use strict";function i(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function n(){return"string"===typeof __channelId__&&__channelId__}function a(t,e){switch(i(e)){case"Function":return"function() { [native code] }";default:return e}}function s(t){for(var e=arguments.length,o=new Array(e>1?e-1:0),i=1;i<e;i++)o[i-1]=arguments[i];console[t].apply(console,o)}function r(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];var s=e.shift();if(n())return e.push(e.pop().replace("at ","uni-app:///")),console[s].apply(console,e);var r=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,a)+"---END:JSON---"}catch(n){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var o=i(t).toUpperCase();t="NUMBER"===o||"BOOLEAN"===o?"---BEGIN:"+o+"---"+t+"---END:"+o+"---":String(t)}return t})),c="";if(r.length>1){var l=r.pop();c=r.join("---COMMA---"),0===l.indexOf(" at ")?c+=l:c+="---COMMA---"+l}else c=r[0];console[s](c)}o.r(e),o.d(e,"log",(function(){return s})),o.d(e,"default",(function(){return r}))},"451c":function(t,e,o){"use strict";var i;o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"content"},[t._l(t.items,(function(e,i){return e.show?o("v-uni-view",{staticClass:"subContent"},[o("v-uni-view",{staticClass:"title_question"},[o("v-uni-text",[t._v(t._s(e.title))])],1),t._l(e.subText,(function(e,i){return o("v-uni-view",{staticClass:"items_answer"},[o("v-uni-view",{class:[t.aTab=="aTab"+i?"tabActive":"tabNoActive"],attrs:{value:e.score},on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.getChice(i,e.score)}}},[t._v(t._s(e.text))])],1)}))],2):t._e()})),t.now?t._e():o("v-uni-view",{staticClass:"wh100"},[o("v-uni-view",[o("v-uni-view",{staticClass:"type"},[t._v(t._s(t.zTotal))]),o("v-uni-view",{staticClass:"type0"},[t._v("恭喜您完成评估！")]),o("v-uni-view",{staticClass:"type1"},[t._v("您的心理健康评估是"+t._s(t.abilityLevel))])],1)],1),t.now?o("v-uni-view",{staticClass:"nextBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.next()}}},[o("v-uni-text",[t._v("下一步")])],1):o("v-uni-view",{staticClass:"nextBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gotoBack()}}},[o("v-uni-text",[t._v("完成")])],1)],2)},a=[]},"49df":function(t,e,o){"use strict";o.r(e);var i=o("a5a2"),n=o.n(i);for(var a in i)"default"!==a&&function(t){o.d(e,t,(function(){return i[t]}))}(a);e["default"]=n.a},"4d70":function(t,e,o){var i=o("f4b9");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=o("4f06").default;n("cbcc06cc",i,!0,{sourceMap:!1,shadowMode:!1})},8586:function(t,e,o){"use strict";var i=o("4d70"),n=o.n(i);n.a},a5a2:function(t,e,o){"use strict";(function(t){var i=o("4ea4");o("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(o("ead7")),a={data:function(){return{abilityLevel:"",zTotal:0,cTotal:null,now:!0,aTab:"",items:[{show:!0,title:"担心、担忧、感到最坏的事将要发生，容易惹怒",subText:[{text:"无",score:"0"},{text:"轻",score:"1"},{text:"中",score:"2"},{text:"重",score:"3"},{text:"极重",score:"4"}]},{show:!1,title:"紧张感，易疲劳，不能放松、情绪反应、易哭、颤抖、感到不安",subText:[{text:"无",score:"0"},{text:"轻",score:"1"},{text:"中",score:"2"},{text:"重",score:"3"},{text:"极重",score:"4"}]},{show:!1,title:"害怕黑暗、陌生人、一人独处、动物、乘车或旅行及人多的场合",subText:[{text:"无",score:"0"},{text:"轻",score:"1"},{text:"中",score:"2"},{text:"重",score:"3"},{text:"极重",score:"4"}]},{show:!1,title:"难以入睡，易醒，谁的不深，多梦，夜惊，醒后感疲劳",subText:[{text:"无",score:"0"},{text:"轻",score:"1"},{text:"中",score:"2"},{text:"重",score:"3"},{text:"极重",score:"4"}]},{show:!1,title:"记忆注意障碍，注意力不能集中，记忆力差",subText:[{text:"无",score:"0"},{text:"轻",score:"1"},{text:"中",score:"2"},{text:"重",score:"3"},{text:"极重",score:"4"}]},{show:!1,title:"丧失兴趣、对以往爱好缺乏快感、抑郁、早醒、昼重夜轻",subText:[{text:"无",score:"0"},{text:"轻",score:"1"},{text:"中",score:"2"},{text:"重",score:"3"},{text:"极重",score:"4"}]},{show:!1,title:"肌肉酸痛，活动不灵活、肌肉抽动、肢体抽动、牙齿打颤、声音发抖。",subText:[{text:"无",score:"0"},{text:"轻",score:"1"},{text:"中",score:"2"},{text:"重",score:"3"},{text:"极重",score:"4"}]},{show:!1,title:"视物模糊、发冷发热、软弱无力感、混身刺痛",subText:[{text:"无",score:"0"},{text:"轻",score:"1"},{text:"中",score:"2"},{text:"重",score:"3"},{text:"极重",score:"4"}]},{show:!1,title:"心动过速、心悸、胸痛、血管跳动感、昏倒感、心搏脱漏",subText:[{text:"无",score:"0"},{text:"轻",score:"1"},{text:"中",score:"2"},{text:"重",score:"3"},{text:"极重",score:"4"}]},{show:!1,title:"胸闷、窒息感、叹息、呼吸困难",subText:[{text:"无",score:"0"},{text:"轻",score:"1"},{text:"中",score:"2"},{text:"重",score:"3"},{text:"极重",score:"4"}]},{show:!1,title:"吞咽困难、嗳气、消化不良（进食后腹痛、腹胀、恶心、胃部饱感）、肠动感、肠鸣、腹泻、体重减轻、便秘",subText:[{text:"无",score:"0"},{text:"轻",score:"1"},{text:"中",score:"2"},{text:"重",score:"3"},{text:"极重",score:"4"}]},{show:!1,title:"尿意频数，尿急、停经、性冷淡、早泄、阳痿",subText:[{text:"无",score:"0"},{text:"轻",score:"1"},{text:"中",score:"2"},{text:"重",score:"3"},{text:"极重",score:"4"}]},{show:!1,title:"口干、潮红、苍白、易出汗、起鸡皮疙瘩、紧张性头痛、毛发竖起",subText:[{text:"无",score:"0"},{text:"轻",score:"1"},{text:"中",score:"2"},{text:"重",score:"3"},{text:"极重",score:"4"}]},{show:!1,title:"紧张不能松弛、忐忑不安、咬手指、紧紧握拳，摆弄手帕、面肌抽搐、不宁顿足、手发抖、皱眉、表情僵硬、肌张力高、面色苍白",subText:[{text:"无",score:"0"},{text:"轻",score:"1"},{text:"中",score:"2"},{text:"重",score:"3"},{text:"极重",score:"4"}]}]}},methods:{next:function(){for(var t=0;t<this.items.length;t++){if(t==this.items.length-1)return this.items[t].show=!1,this.now=!1,this.zTotal>29?this.abilityLevel="严重焦虑":29>this.zTotal>21?this.abilityLevel="明显焦虑":21>this.zTotal>14?this.abilityLevel="有焦虑":14>this.zTotal>7?this.abilityLevel="可能有焦虑":this.abilityLevel<7&&(this.abilityLevel="无焦虑"),this.saveDataHttp(this.abilityLevel),!1;if(1==this.items[t].show)return null!=this.cTotal?(this.zTotal=this.zTotal+parseInt(this.cTotal),this.items[t].show=!1,this.items[t+1].show=!0,this.aTab="",this.cTotal=null,!1):(uni.showToast({title:"请选择内容",icon:"none",duration:1e3}),!1)}},getChice:function(e,o){this.aTab="aTab"+e,this.cTotal=o,t("log",this.cTotal," at pages/evaluationCenter-evaluations/mentalHealth/index.vue:456")},gotoBack:function(){uni.navigateTo({url:"../../evaluationCenter/index"})},saveDataHttp:function(e){var o={user_id:"34f35165-b714-448c-8ede-cd8343a43b1a",eva_xljk_res:e};n.default.Post("sys_fkcy/eva_res/setUserEvaRes",o,(function(e){t("log",e," at pages/evaluationCenter-evaluations/mentalHealth/index.vue:470"),uni.showToast({title:"您的数据已经保存",icon:"none"})}))}},mounted:function(){},onLoad:function(e){t("log",e.result," at pages/evaluationCenter-evaluations/mentalHealth/index.vue:480")}};e.default=a}).call(this,o("0de9")["log"])},a8cf:function(t,e,o){"use strict";o.r(e);var i=o("451c"),n=o("49df");for(var a in n)"default"!==a&&function(t){o.d(e,t,(function(){return n[t]}))}(a);o("8586");var s,r=o("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"0f6675c7",null,!1,i["a"],s);e["default"]=c.exports},ac57:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={appUserId:function(){var t="";return t=appNative.getUserId()||"4c404454-0d30-475e-a4c5-57bfea958c96",t},appToken:function(){var t="";return t=appNative.getUserToken()||"3d9b2cf4-1de4-46ea-bb70-02c581303eb6",t}};e.default=i},ead7:function(t,e,o){"use strict";(function(t){var i=o("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(o("ac57")),a={Get:function(e,o,i){uni.showLoading({title:"加载中",iocn:"none"}),uni.request({url:e,method:"GET",data:o,header:{"content-type":"application/x-www-form-urlencoded;charset=UTF-8",token:n.default.appToken()},timeout:1e3,success:function(t){uni.hideLoading(),0==t.data.code?i(t.data):uni.showToast({title:t.msg||e+"请求失败",duration:2e3,icon:"none"})},fail:function(e){t("log",e," at util/tool/http.js:34"),uni.showToast({title:e.msg,duration:1e3}),uni.hideLoading()},complete:function(){uni.hideLoading()}})},Post:function(t,e,o){uni.showLoading({title:"加载中",iocn:"none"}),uni.request({url:t,method:"POST",data:e,timeout:1e3,header:{"content-type":"application/x-www-form-urlencoded;charset=UTF-8",token:n.default.appToken()},success:function(t){uni.hideLoading(),0==t.data.code?o(t.data):uni.showToast({title:t.msg,duration:1e3,icon:"none"})},complete:function(){uni.hideLoading()}})}};e.default=a}).call(this,o("0de9")["log"])},f4b9:function(t,e,o){var i=o("24fb");e=i(!1),e.push([t.i,".content[data-v-0f6675c7]{letter-spacing:.1rem;font-size:.8rem!important}.wh100 .type[data-v-0f6675c7]{text-align:center;font-size:.9rem;padding-bottom:.5rem;font-weight:600}.wh100 .type0[data-v-0f6675c7]{color:#000!important;font-weight:600;padding-bottom:.5rem;text-align:center}.wh100 .type1[data-v-0f6675c7]{color:grey!important;font-weight:100;font-size:.9rem;text-align:center}.wh100[data-v-0f6675c7]{position:relative;width:100%;height:60vh;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.tabActive[data-v-0f6675c7]{color:#00d193!important;border:1px solid #00d193!important}.items_answer[data-v-0f6675c7]{\n\t/* border: 1px solid red; */text-align:center}.items_answer>uni-view[data-v-0f6675c7]{padding:.5rem 1rem .5rem 1rem;border:1px solid #eee;width:80%;margin-left:5%;margin-top:5%}.nextBtn[data-v-0f6675c7]{\n\t/* border: 1px solid red; */text-align:center;padding-top:.8rem;padding-bottom:.8rem;position:absolute;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;bottom:10%}.nextBtn uni-text[data-v-0f6675c7]{padding-top:.5rem;padding-bottom:.5rem;padding-left:5rem;padding-right:5rem;background-color:#00d193;color:#fff;-webkit-border-radius:2.5rem;border-radius:2.5rem}.title_question[data-v-0f6675c7]{width:90%;margin-left:5%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:rows;flex-direction:rows;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;text-align:center;padding-top:.8rem;padding-bottom:.8rem;font-size:.9rem;color:#000;font-weight:600}",""]),t.exports=e}}]);