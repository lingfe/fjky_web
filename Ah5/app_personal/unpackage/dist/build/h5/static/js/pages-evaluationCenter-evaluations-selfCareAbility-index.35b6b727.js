(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-evaluationCenter-evaluations-selfCareAbility-index"],{"0902":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".content[data-v-0d253706]{letter-spacing:.1rem;font-size:.8rem!important}.wh100 .type[data-v-0d253706]{text-align:center;font-size:.9rem;padding-bottom:.5rem;font-weight:600}.wh100 .type0[data-v-0d253706]{color:#000!important;font-weight:600;padding-bottom:.5rem;text-align:center}.wh100 .type1[data-v-0d253706]{color:grey!important;font-weight:100;font-size:.9rem;text-align:center}.wh100[data-v-0d253706]{position:relative;width:100%;height:60vh;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.tabActive[data-v-0d253706]{color:#00d193!important;border:1px solid #00d193!important}.items_answer[data-v-0d253706]{\n\t/* border: 1px solid red; */text-align:center}.items_answer>uni-view[data-v-0d253706]{padding:.5rem 1rem .5rem 1rem;border:1px solid #eee;width:80%;margin-left:5%;margin-top:5%}.nextBtn[data-v-0d253706]{\n\t/* border: 1px solid red; */text-align:center;padding-top:.8rem;padding-bottom:.8rem;position:absolute;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;bottom:10%}.nextBtn uni-text[data-v-0d253706]{padding-top:.5rem;padding-bottom:.5rem;padding-left:5rem;padding-right:5rem;background-color:#00d193;color:#fff;-webkit-border-radius:2.5rem;border-radius:2.5rem}.title_question[data-v-0d253706]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:rows;flex-direction:rows;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;text-align:center;padding-top:.8rem;padding-bottom:.8rem;font-size:.9rem;color:#000;font-weight:600}",""]),t.exports=e},"0bd1":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[t._l(t.items,(function(e,n){return e.show?i("v-uni-view",{staticClass:"subContent"},[i("v-uni-view",{staticClass:"title_question"},[i("v-uni-text",[t._v(t._s(e.title))])],1),t._l(e.subText,(function(e,n){return i("v-uni-view",{staticClass:"items_answer"},[i("v-uni-view",{class:[t.aTab=="aTab"+n?"tabActive":"tabNoActive"],attrs:{value:e.score},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.getChice(n,e.score)}}},[t._v(t._s(e.text))])],1)}))],2):t._e()})),t.now?t._e():i("v-uni-view",{staticClass:"wh100"},[i("v-uni-view",[i("v-uni-view",{staticClass:"type"},[t._v(t._s(t.zTotal))]),i("v-uni-view",{staticClass:"type0"},[t._v("恭喜您完成评估！")]),i("v-uni-view",{staticClass:"type1"},[t._v("您的认知能力等级是"+t._s(t.abilityLevel))])],1)],1),t.now?i("v-uni-view",{staticClass:"nextBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.next()}}},[i("v-uni-text",[t._v("下一步")])],1):i("v-uni-view",{staticClass:"nextBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gotoBack()}}},[i("v-uni-text",[t._v("完成")])],1)],2)},r=[]},"0de9":function(t,e,i){"use strict";function n(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){return"string"===typeof __channelId__&&__channelId__}function r(t,e){switch(n(e)){case"Function":return"function() { [native code] }";default:return e}}function a(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];console[t].apply(console,i)}function s(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];var a=e.shift();if(o())return e.push(e.pop().replace("at ","uni-app:///")),console[a].apply(console,e);var s=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,r)+"---END:JSON---"}catch(o){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var i=n(t).toUpperCase();t="NUMBER"===i||"BOOLEAN"===i?"---BEGIN:"+i+"---"+t+"---END:"+i+"---":String(t)}return t})),c="";if(s.length>1){var l=s.pop();c=s.join("---COMMA---"),0===l.indexOf(" at ")?c+=l:c+="---COMMA---"+l}else c=s[0];console[a](c)}i.r(e),i.d(e,"log",(function(){return a})),i.d(e,"default",(function(){return s}))},"2b35":function(t,e,i){"use strict";var n=i("6dc1"),o=i.n(n);o.a},"3aea":function(t,e,i){"use strict";(function(t){i("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{abilityLevel:"",zTotal:0,cTotal:null,now:!0,aTab:"",items:[{show:!0,title:"能否独立进食",subText:[{text:"可独立进食",score:"10"},{text:"需部分帮助",score:"5"},{text:"需极大帮助或完全依赖他人",score:"0"}]},{show:!1,title:"能否独立洗澡",subText:[{text:"准备好洗澡水后,可独立完成",score:"5"},{text:"在洗澡过程中需他人帮助",score:"0"}]},{show:!1,title:"能否独立洗脸、刷牙、梳头",subText:[{text:"可自己独立完成",score:"5"},{text:"需他人帮助",score:"0"}]},{show:!1,title:"能否独立穿衣",subText:[{text:"可独立完成",score:"10"},{text:"需部分帮助",score:"5"},{text:"需极大帮助或完全依赖他人",score:"0"}]},{show:!1,title:"能否控制大小便",subText:[{text:"可控制大便",score:"10"},{text:"偶尔失控，或需他人提醒",score:"5"},{text:"完全失控",score:"0"}]},{show:!1,title:"能否独立上厕所",subText:[{text:"可独立完成",score:"10"},{text:"需部分帮助",score:"5"},{text:"需极大帮助或完全依赖他人",score:"0"}]},{show:!1,title:"桌椅转移",subText:[{text:"可独立完成",score:"15"},{text:"需部分帮助",score:"10"},{text:"需极大帮助",score:"5"},{text:"完全依赖他人",score:"0"}]},{show:!1,title:"平地行走",subText:[{text:"可独立完成",score:"15"},{text:"需部分帮助",score:"10"},{text:"需极大帮助",score:"5"},{text:"完全依赖他人",score:"0"}]},{show:!1,title:"上下楼梯",subText:[{text:"完全独立",score:"15"},{text:"需部分帮助",score:"10"},{text:"需极大帮助",score:"0"}]}]}},methods:{next:function(){for(var t=0;t<this.items.length;t++){if(t==this.items.length-1)return this.items[t].show=!1,this.now=!1,this.zTotal<=40?this.abilityLevel="重度依赖,全部需要他人照护":41<this.zTotal<60?this.abilityLevel="中度依赖,大部分需要他人照护":61<this.zTotal<99?this.abilityLevel="轻度依赖，少部分需要他人照护":100==this.zTotal&&(this.abilityLevel="无需依赖，无需他人照护"),!1;if(1==this.items[t].show)return null!=this.cTotal?(this.zTotal=this.zTotal+parseInt(this.cTotal),this.items[t].show=!1,this.items[t+1].show=!0,this.aTab="",this.cTotal=null,!1):(uni.showToast({title:"请选择内容",icon:"none",duration:1e3}),!1)}},getChice:function(e,i){this.aTab="aTab"+e,this.cTotal=i,t("log",this.cTotal," at pages/evaluationCenter-evaluations/selfCareAbility/index.vue:257")},gotoBack:function(){uni.navigateTo({url:"../../evaluationCenter/index"})}},mounted:function(){}};e.default=n}).call(this,i("0de9")["log"])},"48b9":function(t,e,i){"use strict";i.r(e);var n=i("0bd1"),o=i("c101");for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("2b35");var a,s=i("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"0d253706",null,!1,n["a"],a);e["default"]=c.exports},"6dc1":function(t,e,i){var n=i("0902");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("3ee34115",n,!0,{sourceMap:!1,shadowMode:!1})},c101:function(t,e,i){"use strict";i.r(e);var n=i("3aea"),o=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a}}]);