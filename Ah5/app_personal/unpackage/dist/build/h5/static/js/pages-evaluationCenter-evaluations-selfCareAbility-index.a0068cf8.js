(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-evaluationCenter-evaluations-selfCareAbility-index"],{"3aea":function(t,e,i){"use strict";var n=i("4ea4");i("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("ead7")),a=n(i("ac57")),s={data:function(){return{abilityLevel:"",zTotal:0,cTotal:null,now:!0,aTab:"",items:[{show:!0,title:"能否独立进食",subText:[{text:"可独立进食",score:"10"},{text:"需部分帮助",score:"5"},{text:"需极大帮助或完全依赖他人",score:"0"}]},{show:!1,title:"能否独立洗澡",subText:[{text:"准备好洗澡水后,可独立完成",score:"5"},{text:"在洗澡过程中需他人帮助",score:"0"}]},{show:!1,title:"能否独立洗脸、刷牙、梳头",subText:[{text:"可自己独立完成",score:"5"},{text:"需他人帮助",score:"0"}]},{show:!1,title:"能否独立穿衣",subText:[{text:"可独立完成",score:"10"},{text:"需部分帮助",score:"5"},{text:"需极大帮助或完全依赖他人",score:"0"}]},{show:!1,title:"能否控制大小便",subText:[{text:"可控制大便",score:"10"},{text:"偶尔失控，或需他人提醒",score:"5"},{text:"完全失控",score:"0"}]},{show:!1,title:"能否独立上厕所",subText:[{text:"可独立完成",score:"10"},{text:"需部分帮助",score:"5"},{text:"需极大帮助或完全依赖他人",score:"0"}]},{show:!1,title:"桌椅转移",subText:[{text:"可独立完成",score:"15"},{text:"需部分帮助",score:"10"},{text:"需极大帮助",score:"5"},{text:"完全依赖他人",score:"0"}]},{show:!1,title:"平地行走",subText:[{text:"可独立完成",score:"15"},{text:"需部分帮助",score:"10"},{text:"需极大帮助",score:"5"},{text:"完全依赖他人",score:"0"}]},{show:!1,title:"上下楼梯",subText:[{text:"完全独立",score:"15"},{text:"需部分帮助",score:"10"},{text:"需极大帮助",score:"0"}]}]}},methods:{next:function(){for(var t=0;t<this.items.length;t++){if(t==this.items.length-1)return this.items[t].show=!1,this.now=!1,parseInt(this.zTotal)<=40?this.abilityLevel="重度依赖,全部需要他人照护":40<parseInt(this.zTotal)<=60?this.abilityLevel="中度依赖,大部分需要他人照护":60<parseInt(this.zTotal)<=80?this.abilityLevel="轻度依赖，少部分需要他人照护":100==parseInt(this.zTotal)&&(this.abilityLevel="无需依赖，无需他人照护"),this.saveDataHttp(this.abilityLevel),uni.navigateTo({url:"../../evaluationCenter-evaluations/selfCareAbilityResult/index?result="+this.abilityLevel}),!1;if(1==this.items[t].show)return null!=this.cTotal?(this.zTotal=this.zTotal+parseInt(this.cTotal),this.items[t].show=!1,this.items[t+1].show=!0,this.aTab="",this.cTotal=null,!1):(uni.showToast({title:"请选择内容",icon:"none",duration:1e3}),!1)}},getChice:function(t,e){this.aTab="aTab"+t,this.cTotal=e,console.log(this.cTotal)},gotoBack:function(){uni.navigateTo({url:"../../evaluationCenter/index"})},saveDataHttp:function(t){var e={user_id:a.default.appUserId(),eva_zlnl_res:t};o.default.Post("sys_fkcy/eva_res/setUserEvaRes",e,(function(t){console.log(t),uni.showToast({title:"您的数据已经保存",icon:"none"})}))}},mounted:function(){},onLoad:function(t){console.log(t.result)}};e.default=s},"48b9":function(t,e,i){"use strict";i.r(e);var n=i("73a0"),o=i("c101");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("af4a");var s,r=i("f0c5"),c=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"3548fce9",null,!1,n["a"],s);e["default"]=c.exports},"73a0":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[t._l(t.items,(function(e,n){return e.show?i("v-uni-view",{staticClass:"subContent"},[i("v-uni-view",{staticClass:"title_question"},[i("v-uni-text",[t._v(t._s(e.title))])],1),t._l(e.subText,(function(e,n){return i("v-uni-view",{staticClass:"items_answer"},[i("v-uni-view",{class:[t.aTab=="aTab"+n?"tabActive":"tabNoActive"],attrs:{value:e.score},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.getChice(n,e.score)}}},[t._v(t._s(e.text))])],1)}))],2):t._e()})),t.now?i("v-uni-view",{staticClass:"nextBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.next()}}},[i("v-uni-text",[t._v("下一步")])],1):i("v-uni-view",{staticClass:"nextBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gotoBack()}}},[i("v-uni-text",[t._v("完成")])],1)],2)},a=[]},92997:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".content[data-v-3548fce9]{letter-spacing:.1rem;font-size:.8rem!important}.wh100 .type[data-v-3548fce9]{text-align:center;font-size:.9rem;padding-bottom:.5rem;font-weight:600}.wh100 .type0[data-v-3548fce9]{color:#000!important;font-weight:600;padding-bottom:.5rem;text-align:center}.wh100 .type1[data-v-3548fce9]{color:grey!important;font-weight:100;font-size:.9rem;text-align:center}.wh100[data-v-3548fce9]{position:relative;width:100%;height:60vh;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.tabActive[data-v-3548fce9]{color:#00d193!important;border:1px solid #00d193!important}.items_answer[data-v-3548fce9]{\n\t/* border: 1px solid red; */text-align:center}.items_answer>uni-view[data-v-3548fce9]{padding:.5rem 1rem .5rem 1rem;border:1px solid #eee;width:80%;margin-left:5%;margin-top:5%}.nextBtn[data-v-3548fce9]{\n\t/* border: 1px solid red; */text-align:center;padding-top:.8rem;padding-bottom:.8rem;position:absolute;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;bottom:10%}.nextBtn uni-text[data-v-3548fce9]{padding-top:.5rem;padding-bottom:.5rem;padding-left:5rem;padding-right:5rem;background-color:#00d193;color:#fff;-webkit-border-radius:2.5rem;border-radius:2.5rem}.title_question[data-v-3548fce9]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:rows;flex-direction:rows;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;text-align:center;padding-top:.8rem;padding-bottom:.8rem;font-size:.9rem;color:#000;font-weight:600}",""]),t.exports=e},ac57:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={appUserId:function(){var t="";return t="032b6006-9a21-4dad-aa8c-c25f6a0687d0",t},appToken:function(){var t="";return t="032b6006-9a21-4dad-aa8c-c25f6a0687d0",t}};e.default=n},af4a:function(t,e,i){"use strict";var n=i("d84a"),o=i.n(n);o.a},c101:function(t,e,i){"use strict";i.r(e);var n=i("3aea"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},d84a:function(t,e,i){var n=i("92997");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("76f8d742",n,!0,{sourceMap:!1,shadowMode:!1})},ead7:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("ac57")),a={Get:function(t,e,i){uni.showLoading({title:"加载中",iocn:"none"}),uni.request({url:t,method:"GET",data:e,header:{"content-type":"application/x-www-form-urlencoded;charset=UTF-8",token:o.default.appToken()},timeout:1e3,success:function(e){uni.hideLoading(),0==e.data.code?i(e.data):uni.showToast({title:e.msg||t+"请求失败",duration:2e3,icon:"none"})},fail:function(t){console.log(t),uni.showToast({title:t.msg,duration:1e3}),uni.hideLoading()},complete:function(){uni.hideLoading()}})},Post:function(t,e,i){uni.showLoading({title:"加载中",iocn:"none"}),uni.request({url:t,method:"POST",data:e,timeout:1e3,header:{"content-type":"application/x-www-form-urlencoded;charset=UTF-8",token:o.default.appToken()},success:function(t){uni.hideLoading(),0==t.data.code?i(t.data):uni.showToast({title:t.msg,duration:1e3,icon:"none"})},complete:function(){uni.hideLoading()}})}};e.default=a}}]);