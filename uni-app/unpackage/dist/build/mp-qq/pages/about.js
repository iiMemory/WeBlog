(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/about"],{"3df9":function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return r}),e.d(n,"b",function(){return u})},"6d48":function(t,n,e){"use strict";(function(t){e("e13f"),e("921b");r(e("66fd"));var n=r(e("fef1"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("a821")["createPage"])},7478:function(t,n,e){"use strict";var r=e("cc26"),u=e.n(r);u.a},"9b85":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(e("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function i(t,n,e,r,u,i,a){try{var o=t[i](a),c=o.value}catch(s){return void e(s)}o.done?n(c):Promise.resolve(c).then(r,u)}function a(t){return function(){var n=this,e=arguments;return new Promise(function(r,u){var a=t.apply(n,e);function o(t){i(a,r,u,o,c,"next",t)}function c(t){i(a,r,u,o,c,"throw",t)}o(void 0)})}}var o={data:function(){return{cid:null,isLoading:!0,Overview:{},postData:{}}},onLoad:function(){var t=a(r.default.mark(function t(n){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.getAboutcid();case 2:return this.cid=t.sent,t.next=5,this.$api.getPostBycid({cid:this.cid});case 5:return this.postData=t.sent,console.log("请求成功"),this.isLoading=!1,t.next=10,this.$api.getOverview();case 10:this.Overview=t.sent;case 11:case"end":return t.stop()}},t,this)}));function n(n){return t.apply(this,arguments)}return n}(),onShow:function(){}};n.default=o},cc26:function(t,n,e){},ea29:function(t,n,e){"use strict";e.r(n);var r=e("9b85"),u=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,function(){return r[t]})}(i);n["default"]=u.a},fef1:function(t,n,e){"use strict";e.r(n);var r=e("3df9"),u=e("ea29");for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);e("7478");var a=e("2877"),o=Object(a["a"])(u["default"],r["a"],r["b"],!1,null,null,null);n["default"]=o.exports}},[["6d48","common/runtime","common/vendor"]]]);