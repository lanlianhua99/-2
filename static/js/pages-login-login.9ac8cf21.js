(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"0c47":function(t,e,n){var r=n("da84"),o=n("d44e");o(r.JSON,"JSON",!0)},"131a":function(t,e,n){var r=n("23e7"),o=n("d2bb");r({target:"Object",stat:!0},{setPrototypeOf:o})},"1da1":function(t,e,n){"use strict";function r(t,e,n,r,o,a,i){try{var u=t[a](i),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(r,o)}n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function u(t){r(i,o,a,u,c,"next",t)}function c(t){r(i,o,a,u,c,"throw",t)}u(void 0)}))}},n("d3b7")},"23dc":function(t,e,n){var r=n("d44e");r(Math,"Math",!0)},3410:function(t,e,n){var r=n("23e7"),o=n("d039"),a=n("7b0b"),i=n("e163"),u=n("e177"),c=o((function(){i(1)}));r({target:"Object",stat:!0,forced:c,sham:!u},{getPrototypeOf:function(t){return i(a(t))}})},"510a":function(t,e,n){"use strict";(function(t){n("7a82");var r=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.addMoment=function(t){return i({url:"/moment",data:t,method:"POST"})},e.baseUrl=void 0,e.checkOpenRegister=function(){return i({url:"/moment/checkOpenRegister"})},e.connectSocket=function(){return new Promise((function(e,n){uni.connectSocket({url:WEBSOCKET_Url+"/socket",success:function(t){e(t)},fail:function(e){t.log(e),n(e)}})}))},e.deleteMoment=function(t){return i({url:"/moment/".concat(t),method:"DELETE"})},e.getGroupList=function(t){return i({url:"/group",params:t})},e.getHomeAD=function(){return i({url:"/moment/homePage",data:{momentId:33}})},e.getMomentList=function(e){return t.log("getMomentList",e),i({url:"/moment",params:e})},e.getNotice=function(){return i({url:"/moment/notice"})},e.login=function(t){return i({method:"POST",url:"/login",data:t})},e.rankRole=function(t){return i({url:"/users/rankRole",data:t})},e.register=function(t){return i({url:"/users",data:t,method:"POST"})},e.request=i,e.setHomeAD=function(t){return u((0,o.default)((0,o.default)({},t),{},{momentId:33}))},e.setNotice=function(t){return i({url:"/moment/notice",data:t,method:"POST"})},e.updateMoment=u,e.uploadImg=function(t){var e=t.url,n=t.imgPath,r=void 0===n?"":n,o=t.name,i=void 0===o?"avatar":o,u=t.token;return new Promise((function(t,n){uni.getStorageSync("userInfo");uni.uploadFile({url:a+e,header:{Authorization:"Bearer ".concat(u)},fileType:"image",filePath:r,name:i,timeout:6e4,success:function(e){t(e)},fail:function(t){n(t)}})}))};var o=r(n("5530"));n("d3b7");var a="http://localhost:8000";function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=uni.getStorageSync("userInfo"),r=n.token;return new Promise((function(n,o){uni.request({url:a+t.url,method:t.method||"GET",header:{Authorization:e?"Bearer ".concat(r):""},data:t.data,success:function(t){200===t.statusCode?n(t.data):o(t.data)},fail:function(t){uni.showToast({title:t,icon:"none"}),o(t)}})}))}function u(t){return i({url:"/moment/admin/".concat(t.momentId),data:t,method:"POST"})}e.baseUrl="http://localhost:8000"}).call(this,n("5a52")["default"])},"62e8":function(t,e,n){"use strict";var r=n("7170"),o=n.n(r);o.a},"6e49":function(t,e,n){"use strict";n.r(e);var r=n("71f3"),o=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=o.a},7170:function(t,e,n){var r=n("a36b");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("4f06").default;o("dae37132",r,!0,{sourceMap:!1,shadowMode:!1})},"71f3":function(t,e,n){"use strict";(function(t){n("7a82");var r=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("14d9"),n("ac1f"),n("00b4");var o=r(n("c7eb")),a=r(n("1da1")),i=n("510a"),u={name:"login",data:function(){return{isLogin:!0,nicknameTip:"",usernameTip:"",passwordTip:"",showpwd:!1}},onLoad:function(){var e=uni.getStorageSync("userInfo");if(e){var n=e.token;t.log("token",n),n&&uni.switchTab({url:"/pages/index/index"})}},methods:{formSubmit:function(e){var n=this;return(0,a.default)((0,o.default)().mark((function r(){var a,u,c,s,l,d,f,h;return(0,o.default)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(a=e.detail.value,u=a.nickname,c=a.username,s=a.password,l=a.agree,0!==l.length){r.next=3;break}return r.abrupt("return",uni.showToast({title:"未同意用户协议",icon:"error"}));case 3:if(!n.isLogin){r.next=7;break}c?s?(uni.showLoading({title:"登录中..."}),(0,i.request)({url:"/login/admin",method:"POST",data:{name:c,password:s}}).then((function(e){t.log("res",e),e&&(uni.hideLoading(),uni.showToast({title:"登录成功"}),uni.setStorageSync("userInfo",e),n.$router.push("/pages/index/index"))})).catch((function(e){t.log("err",e),uni.hideLoading(),uni.showToast({title:e,icon:"error"})}))):n.passwordTip="密码为空":n.usernameTip="用户名为空",r.next=32;break;case 7:if(n.usernameTip="",n.passwordTip="",n.nicknameTip="",d=/^[a-zA-Z0-9]{4,16}$/,f=/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{4,16}$/,!(u.length<=0||u.length>10)){r.next=16;break}n.nicknameTip="昵称长度1-10",r.next=32;break;case 16:if(d.test(c)){r.next=20;break}n.usernameTip="账号长度4-16，数字或字母组成",r.next=32;break;case 20:if(f.test(s)){r.next=24;break}n.passwordTip="密码长度4-16，数字、英文、字符中的两种以上组成",r.next=32;break;case 24:return uni.showLoading({title:"注册中..."}),r.next=27,(0,i.request)({url:"/user",method:"POST",data:{nickname:u,username:c,password:s}});case 27:if(h=r.sent,200==h.statusCode){r.next=30;break}return r.abrupt("return",uni.showToast({title:h.data,icon:"error"}));case 30:uni.hideLoading(),uni.showToast({title:"注册成功！"});case 32:case"end":return r.stop()}}),r)})))()},showPwd:function(){this.showpwd=!this.showpwd},back:function(){uni.navigateBack()},readAgreement:function(){uni.navigateTo({url:"/pages/login/agreement"})},gozhuce:function(){this.isLogin=!this.isLogin},wangjimima:function(){uni.showModal({content:"忘记密码找作者，作者QQ：2389342251",showCancel:!1,confirmColor:"#000"})}}};e.default=u}).call(this,n("5a52")["default"])},"944a":function(t,e,n){var r=n("d066"),o=n("e065"),a=n("d44e");o("toStringTag"),a(r("Symbol"),"Symbol")},a36b:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".header[data-v-be100b62]{height:%?250?%;display:flex;align-items:flex-end;justify-content:space-between;padding:10px 20px 0;font-weight:600;color:#8a8a8a;position:relative}.title[data-v-be100b62]{color:#000;font-size:40px}.form[data-v-be100b62]{padding:20px}.form uni-input[data-v-be100b62]{height:36px;font-size:18px;background-color:#ededed;padding:5px 10px;border-radius:5px}.form uni-button[data-v-be100b62]{background-color:#000;color:#dfdfdf;font-weight:600}.tips[data-v-be100b62]{width:100%;display:inline-block;margin-bottom:10px;color:red;font-size:13px}.password[data-v-be100b62]{position:relative}.password uni-input[data-v-be100b62]{padding-right:40px}.password .iconfont[data-v-be100b62]{position:absolute;right:10px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);font-size:20px;color:#8a8a8a}.password .showpwd[data-v-be100b62]{color:#000}.user-agreement[data-v-be100b62]{margin:0 0 20px}.read[data-v-be100b62]{color:#8a8a8a}.agreement[data-v-be100b62]{color:#000;text-decoration:underline}\n[data-v-be100b62] .uni-checkbox-input{border-color:#d1d1d1;color:#fff!important;background-color:#fff!important}[data-v-be100b62] .uni-checkbox-input:hover{border-color:#ff9e01!important}[data-v-be100b62] .uni-checkbox-input-checked{border-color:#ff9e01!important;background-color:#ff9e01!important}\n.isLogin[data-v-be100b62]{text-align:center;margin:30px auto}",""]),t.exports=e},b636:function(t,e,n){var r=n("e065");r("asyncIterator")},c7eb:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
e.default=function(){return t};var t={},n=Object.prototype,o=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(j){l=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),u=new E(r||[]);return a(i,"_invoke",{value:L(t,n,u)}),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(j){return{type:"throw",arg:j}}}t.wrap=d;var h={};function p(){}function v(){}function m(){}var g={};l(g,u,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(S([])));w&&w!==n&&o.call(w,u)&&(g=w);var y=m.prototype=p.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){var n;a(this,"_invoke",{value:function(a,i){function u(){return new e((function(n,u){(function n(a,i,u,c){var s=f(t[a],t,i);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==(0,r.default)(d)&&o.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):e.resolve(d).then((function(t){l.value=t,u(l)}),(function(t){return n("throw",t,u,c)}))}c(s.arg)})(a,i,n,u)}))}return n=n?n.then(u,u):u()}})}function L(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return P()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var u=_(i,n);if(u){if(u===h)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=f(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function _(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator["return"]&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var o=f(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function S(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:P}}function P(){return{value:void 0,done:!0}}return v.prototype=m,a(y,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:v,configurable:!0}),v.displayName=l(m,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,s,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},x(k.prototype),l(k.prototype,c,(function(){return this})),t.AsyncIterator=k,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new k(d(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(y),l(y,s,"Generator"),l(y,u,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=S,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t},n("7a82"),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("b636"),n("944a"),n("0c47"),n("23dc"),n("3410"),n("d9e2"),n("d401"),n("14d9"),n("159b"),n("131a"),n("26e9"),n("fb6a");var r=function(t){return t&&t.__esModule?t:{default:t}}(n("53ca"))},d0c6:function(t,e,n){"use strict";n.r(e);var r=n("e987"),o=n("6e49");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("62e8");var i=n("f0c5"),u=Object(i["a"])(o["default"],r["b"],r["c"],!1,null,"be100b62",null,!1,r["a"],void 0);e["default"]=u.exports},e987:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"login"},[n("v-uni-view",{staticClass:"header"}),n("v-uni-form",{on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"form"},[t.isLogin?t._e():n("v-uni-view",[n("v-uni-input",{staticClass:"nickname",attrs:{type:"text",name:"nickname",placeholder:"昵称（1~10）",maxlength:"10"}}),n("v-uni-text",{staticClass:"tips"},[t._v(t._s(t.nicknameTip))])],1),n("v-uni-input",{attrs:{type:"text",name:"username",placeholder:"账号（4~16，英文或数字）",maxlength:"20"}}),n("v-uni-text",{staticClass:"tips"},[t._v(t._s(t.usernameTip))]),n("v-uni-view",{staticClass:"password"},[n("v-uni-input",{attrs:{type:"text",name:"password",password:!t.showpwd,placeholder:"密码(4~16,至少包含数字英文字符两种)",maxlength:"30"}}),n("v-uni-text",{staticClass:"iconfont icon-yanjing",class:{showpwd:t.showpwd},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPwd.apply(void 0,arguments)}}})],1),n("v-uni-text",{staticClass:"tips"},[t._v(t._s(t.passwordTip))]),n("v-uni-checkbox-group",{staticClass:"user-agreement",attrs:{name:"agree"}},[n("v-uni-label",[n("v-uni-checkbox"),n("v-uni-text",{staticClass:"read"},[t._v("已阅读并同意")])],1),n("v-uni-text",{staticClass:"agreement",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.readAgreement.apply(void 0,arguments)}}},[t._v("《用户协议》")])],1),n("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:t.isLogin,expression:"isLogin"}],attrs:{"form-type":"submit"}},[t._v("登 录")]),n("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:!t.isLogin,expression:"!isLogin"}],attrs:{"form-type":"submit"}},[t._v("注 册")])],1)],1)],1)},o=[]}}]);