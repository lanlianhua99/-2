(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ad-index"],{"0486":function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.filterTime=void 0,e.formatTime=s,e.parseTime=u,n("ac1f"),n("00b4"),n("e25e"),n("5319"),n("4d63"),n("c607"),n("2c3e"),n("25f0"),n("d401"),n("d3b7"),n("4d90");var i=a(n("53ca"));function u(t,e){if(0===arguments.length||!t)return null;var n,a=e||"{y}-{m}-{d} {h}:{i}:{s}";"object"===(0,i.default)(t)?n=t:("string"===typeof t&&(t=/^[0-9]+$/.test(t)?parseInt(t):t.replace(new RegExp(/-/gm),"/")),"number"===typeof t&&10===t.toString().length&&(t*=1e3),n=new Date(t));var u={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()},s=a.replace(/{([ymdhisa])+}/g,(function(t,e){var n=u[e];return"a"===e?["日","一","二","三","四","五","六"][n]:n.toString().padStart(2,"0")}));return s}function s(t,e){t=10===(""+t).length?1e3*parseInt(t):+t;var n=new Date(t),a=Date.now(),i=(a-n)/1e3;return i<30?"刚刚":i<3600?Math.ceil(i/60)+"分钟前":i<86400?u(t,"{h}:{i}"):n.getFullYear()===(new Date).getFullYear()?u(t,"{m}-{d} {h}:{i}"):e?u(t,e):n.getFullYear()+"年"+(parseInt(n.getMonth())+1)+"月"+n.getDate()+"日"+n.getHours()+":"+n.getMinutes()}e.filterTime=function(t){return t?s(+new Date(t)):""}},"0ccb":function(t,e,n){var a=n("e330"),i=n("50c4"),u=n("577e"),s=n("1148"),r=n("1d80"),o=a(s),c=a("".slice),l=Math.ceil,f=function(t){return function(e,n,a){var s,f,d=u(r(e)),g=i(n),v=d.length,h=void 0===a?" ":u(a);return g<=v||""==h?d:(s=g-v,f=o(h,l(s/h.length)),f.length>s&&(f=c(f,0,s)),t?d+f:f+d)}};t.exports={start:f(!1),end:f(!0)}},1148:function(t,e,n){"use strict";var a=n("5926"),i=n("577e"),u=n("1d80"),s=RangeError;t.exports=function(t){var e=i(u(this)),n="",r=a(t);if(r<0||r==1/0)throw s("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(n+=e);return n}},3128:function(t,e,n){"use strict";var a=n("aad5"),i=n.n(a);i.a},"4d90":function(t,e,n){"use strict";var a=n("23e7"),i=n("0ccb").start,u=n("9a0c");a({target:"String",proto:!0,forced:u},{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"524f":function(t,e,n){"use strict";n.r(e);var a=n("73ab"),i=n.n(a);for(var u in a)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=i.a},5919:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}));var a={uniTag:n("ebcb").default,uniCard:n("bd10").default,uniPagination:n("63d3").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"status"},[n("div",{staticClass:"status-body"},t._l(t.statusRange,(function(e){return n("uni-tag",{key:e.value,attrs:{type:t.query.status==e.value?"primary":"default",text:e.text},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.statusChange(e)}}})})),1),n("v-uni-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goAdd.apply(void 0,arguments)}}},[t._v("新增")])],1),n("v-uni-view",{staticClass:"status",staticStyle:{"margin-top":"10px"}},t._l(t.setStatusList,(function(e,a){return n("v-uni-button",{key:a,attrs:{size:"mini",type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.quickSetStatus(e.value)}}},[t._v(t._s(e.text))])})),1),t.cardList.length>0?n("div",{staticClass:"content"},t._l(t.cardList,(function(e){return n("uni-card",{attrs:{title:"id:"+e.id,extra:"状态:"+(1==e.status?"上线中":"下线/审核中")},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goDetail(e)}},scopedSlots:t._u([{key:"title",fn:function(){return[n("div",{staticClass:"uni-card__header"},[n("v-uni-text",[t._v("链接id:"+t._s(e.id))]),n("v-uni-text",[t._v("用户名:"+t._s(e.userName))]),n("v-uni-text",[n("uni-tag",{attrs:{text:1==e.status?"上线中":0==e.status?"下线":"审核中",type:1==e.status?"primary":0==e.status?"danger":"warning"}})],1)],1)]},proxy:!0}],null,!0)},[n("p",[t._v("密码:"+t._s(e.password))]),n("p",[t._v("链接:"+t._s(e.panUrl))]),n("p",[t._v("访问次数:"+t._s(e.viewCount))]),n("p",[t._v("创建时间:"+t._s(t.filterTime(e.createAt)))])])})),1):n("v-uni-view",{staticClass:"empty-card"},[t._v("暂无数据")]),n("uni-pagination",{attrs:{total:t.totalCount,title:"标题文字",current:t.pageNum,pageSize:t.query.size},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.pageChange.apply(void 0,arguments)}}})],1)},u=[]},"73ab":function(t,e,n){"use strict";(function(t){n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("e9c4"),n("d401"),n("0eb6"),n("b7ef"),n("8bd4");var i=a(n("494d")),u=n("bf5c"),s=n("0486"),r={components:{UniDataSelect:i.default},data:function(){return{searchValue:"",cardList:[],statusRange:[{text:"全部",value:""},{text:"上线",value:"1"},{text:"下线",value:"0"}],query:{offset:0,size:10,status:"",userId:"",isAD:1},totalCount:0,userName:"",setStatusList:[{text:"全部上线",value:1},{text:"全部下线",value:0}]}},onLoad:function(e){var n=this;uni.$on("updateList",(function(){t.log("监听到事件来自 updateList"),n.getDataList()})),this.getDataList()},onShow:function(){t.log("onShow")},onUnload:function(){t.log("onUnload"),uni.$off("selectUser"),uni.$off("updateList")},computed:{pageNum:function(){return this.query.offset/this.query.size+1}},methods:{filterTime:s.filterTime,isADChange:function(){this.query.isAD?this.query.isAD="":this.query.isAD=1,this.getDataList()},goAdd:function(t){JSON.stringify(t);uni.navigateTo({url:"/pages/ad/detail/detail"})},resetQuery:function(){this.query={offset:0,size:10,status:"",userId:"",isAD:""},this.userName="",this.getDataList(),setTimeout((function(){uni.setNavigationBarTitle({title:"内容管理"})}),50)},search:function(t){this.$emit("search",t.value)},goDetail:function(t){var e=JSON.stringify(t);uni.navigateTo({url:"/pages/ad/detail/detail?item="+btoa(encodeURIComponent(e))})},statusChange:function(e){t.log("statusChange",e),this.query.offset=0,"广告"===e.text?this.query.isAD=1:this.query.status=e.value,this.getDataList()},getDataList:function(){var e=this;(0,u.getMomentList)(this.query).then((function(n){e.cardList=n.list,e.totalCount=n.count,t.log("getMomentList",n,e.pageNum)})).catch((function(e){t.log("getMomentList",e)}))},pageChange:function(e){this.query.offset=(e.current-1)*this.query.size,this.getDataList(),t.log("pageChange",e,this.query.offset)},quickSetStatus:function(e){var n=this;t.log("setAllStatus",e),uni.showModal({title:"提示",content:"确定要将所有内容设置为"+(1===e?"上线":"下线")+"吗？",success:function(a){a.confirm&&(0,u.setAllStatus)({status:e,isAD:1}).then((function(e){t.log(e),n.getDataList()})).catch((function(e){t.log(e)}))}})}},onHide:function(){}};e.default=r}).call(this,n("5a52")["default"])},"9a0c":function(t,e,n){var a=n("342f");t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(a)},aad5:function(t,e,n){var a=n("f008");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("70c33904",a,!0,{sourceMap:!1,shadowMode:!1})},f002:function(t,e,n){"use strict";n.r(e);var a=n("5919"),i=n("524f");for(var u in i)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(u);n("3128");var s=n("f0c5"),r=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"441c236a",null,!1,a["a"],void 0);e["default"]=r.exports},f008:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */.uni-card__header-extra[data-v-441c236a]{line-height:12px}uni-button[data-v-441c236a]{padding:5px 8px;line-height:1.5}',""]),t.exports=e}}]);