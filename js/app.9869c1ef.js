(function(t){function e(e){for(var n,s,r=e[0],l=e[1],c=e[2],f=0,u=[];f<r.length;f++)s=r[f],i[s]&&u.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(u.length)u.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},o=[];function s(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"23cbca33"}[t]+".js"}function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var e=[],a=i[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise(function(e,n){a=i[t]=[e,n]});e.push(a[2]=n);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=s(t),o=function(e){l.onerror=l.onload=null,clearTimeout(c);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+n+": "+o+")");s.type=n,s.request=o,a[1](s)}i[t]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:l})},12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),i=a.n(n);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("14c6"),a("08c1"),a("4842"),a("d9fc");var n,i=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],r=(a("034f"),a("2877")),l={},c=Object(r["a"])(l,o,s,!1,null,null,null),f=c.exports,d=a("8c4f"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[!0===t.dis?a("div",{staticStyle:{width:"100%",height:"97vh",display:"flex","flex-direction":"row"},attrs:{id:"loadinglogo"}},[a("svg",{staticStyle:{"align-self":"center"},attrs:{width:"100%",height:"100px",viewBox:"0 0 128 128","xml:space":"preserve"}},[a("g",[a("path",{attrs:{d:"M64 0L40.08 21.9a10.98 10.98 0 0 0-5.05 8.75C34.37 44.85 64 60.63 64 60.63V0z",fill:"#ffb118"}}),a("path",{attrs:{d:"M128 64l-21.88-23.9a10.97 10.97 0 0 0-8.75-5.05C83.17 34.4 67.4 64 67.4 64H128z",fill:"#80c141"}}),a("path",{attrs:{d:"M63.7 69.73a110.97 110.97 0 0 1-5.04-20.54c-1.16-8.7.68-14.17.68-14.17h38.03s-4.3-.86-14.47 10.1c-3.06 3.3-19.2 24.58-19.2 24.58z",fill:"#cadc28"}}),a("path",{attrs:{d:"M64 128l23.9-21.88a10.97 10.97 0 0 0 5.05-8.75C93.6 83.17 64 67.4 64 67.4V128z",fill:"#cf171f"}}),a("path",{attrs:{d:"M58.27 63.7a110.97 110.97 0 0 1 20.54-5.04c8.7-1.16 14.17.68 14.17.68v38.03s.86-4.3-10.1-14.47c-3.3-3.06-24.58-19.2-24.58-19.2z",fill:"#ec1b21"}}),a("path",{attrs:{d:"M0 64l21.88 23.9a10.97 10.97 0 0 0 8.75 5.05C44.83 93.6 60.6 64 60.6 64H0z",fill:"#018ed5"}}),a("path",{attrs:{d:"M64.3 58.27a110.97 110.97 0 0 1 5.04 20.54c1.16 8.7-.68 14.17-.68 14.17H30.63s4.3.86 14.47-10.1c3.06-3.3 19.2-24.58 19.2-24.58z",fill:"#00bbf2"}}),a("path",{attrs:{d:"M69.73 64.34a111.02 111.02 0 0 1-20.55 5.05c-8.7 1.14-14.15-.7-14.15-.7V30.65s-.86 4.3 10.1 14.5c3.3 3.05 24.6 19.2 24.6 19.2z",fill:"#f8f400"}}),a("circle",{attrs:{cx:"64",cy:"64",r:"2.03"}}),a("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 64 64",to:"-360 64 64",dur:"2100ms",repeatCount:"indefinite"}})],1)])]):t._e(),!1===t.dis?a("div",{staticStyle:{width:"100%",height:"auto",animation:"fadeIn 1s",position:"relative",top:"0",display:"flex","flex-direction":"column",left:"0",right:"0",border:"0px"}},[a("div",{staticClass:"home",attrs:{id:"first"}},[a("div",{staticStyle:{width:"80%",height:"100%","align-self":"center",display:"inline-flex","flex-direction":"row","webkit-backface-visibility":"hidden"}},[a("div",{ref:"dongtai",staticStyle:{width:"100%",height:"50%","align-self":"center","text-align":"right",transform:"translate3d(0px,0px,0px)"}},[t._m(0),a("button",{staticClass:"btn1",staticStyle:{animation:"fadeInUp 1s"}},[t._v("DISCOVER MORE")]),a("br"),a("ul",{staticStyle:{width:"280px",height:"50px",float:"right","margin-top":"20px"}},[a("li",{staticClass:"li1"},[a("font-awesome-icon",{staticStyle:{"margin-top":"23%"},attrs:{icon:["fab","instagram"]}})],1),a("li",{staticClass:"li1",staticStyle:{"margin-left":"20px"}},[a("font-awesome-icon",{staticStyle:{"margin-top":"23%"},attrs:{icon:["fab","weibo"]}})],1),a("li",{staticClass:"li1",staticStyle:{"margin-left":"20px"}},[a("font-awesome-icon",{staticStyle:{"margin-top":"23%"},attrs:{icon:["fab","instagram"]}})],1),a("li",{staticClass:"li1",staticStyle:{"margin-left":"20px"}},[a("font-awesome-icon",{staticStyle:{"margin-top":"23%"},attrs:{icon:["fab","github"]}})],1),a("li",{staticClass:"li1",staticStyle:{"margin-left":"20px"}},[a("font-awesome-icon",{staticStyle:{"margin-top":"23%"},attrs:{icon:["fab","facebook-f"]}})],1)])])])]),a("div",{staticStyle:{width:"100%",height:"auto",margin:"40px 0px"},attrs:{align:"center",id:"second"}},[a("div",{ref:"jieshaotest",staticStyle:{width:"80%",height:"90%",display:"flex","flex-direction":"column"}},[a("div",{ref:"s1"},[a("span",{staticStyle:{color:"black","font-size":"40px","font-family":"幼圆","font-weight":"bold"}},[t._v("我的技能介绍")]),t._m(1),a("br"),a("br"),a("span",[t._v("I've only know one thing， why I was so ignorant.")])]),a("div",{staticStyle:{width:"100%",height:"auto","margin-top":"20px",padding:"20px"}},[a("el-row",{staticClass:"zhi",attrs:{gutter:30}},[a("el-col",{attrs:{sm:12,md:6}},[a("div",{ref:"s2",staticClass:"hov",staticStyle:{"border-radius":"7px",padding:"70px 20px"}},[a("span",{staticStyle:{"font-size":"50px"}},[a("font-awesome-icon",{attrs:{icon:["fab","html5"]}})],1),a("br"),a("h2",[t._v("HTML5")]),t._v("\n                                按时大苏打国际爱护公司的京哈高速大使馆黑暗圣经快点哈可视电话卡机卡斯基和点卡是广大教师打瞌睡肯德基安徽省空间的哈萨克")])]),a("el-col",{attrs:{sm:12,md:6}},[a("div",{ref:"s3",staticClass:"hov",staticStyle:{"border-radius":"7px",background:"#2c3e50",color:"white",padding:"70px 20px"}},[a("span",{staticStyle:{"font-size":"50px",color:"white"}},[a("font-awesome-icon",{attrs:{icon:["fab","android"]}})],1),a("br"),a("h2",[t._v("Android")]),t._v("\n                              按时大苏打国际爱护公司的京哈高速大使馆黑暗圣经快点哈可视电话卡机卡斯基和点卡是广大教师打瞌睡肯德基安徽省空间的哈萨克")])]),a("el-col",{attrs:{sm:12,md:6}},[a("div",{ref:"s4",staticClass:"hov",staticStyle:{"border-radius":"7px",padding:"70px 20px"}},[a("span",{staticStyle:{"font-size":"50px"}},[a("font-awesome-icon",{attrs:{icon:["fab","css3"]}})],1),a("br"),a("h2",[t._v("CSS3")]),t._v("\n                              按时大苏打国际爱护公司的京哈高速大使馆黑暗圣经快点哈可视电话卡机卡斯基和点卡是广大教师打瞌睡肯德基安徽省空间的哈萨克")])]),a("el-col",{attrs:{sm:12,md:6}},[a("div",{ref:"s5",staticClass:"hov",staticStyle:{"border-radius":"7px",padding:"70px 20px"}},[a("span",{staticStyle:{"font-size":"50px"}},[a("font-awesome-icon",{attrs:{icon:["fas","coffee"]}})],1),a("br"),a("h2",[t._v("Java")]),t._v("\n                              按时大苏打国际爱护公司的京哈高速大使馆黑暗圣经快点哈可视电话卡机卡斯基和点卡是广大教师打瞌睡肯德基安徽省空间的哈萨克")])])],1)],1)])]),a("div",{staticStyle:{"text-align":"center","font-size":"20px",color:"darkgrey"}},[t._v("未完待续...")])]):t._e()])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticStyle:{color:"white","font-family":"华文宋体","font-size":"50px","font-weight":"bold",position:"relative",float:"right",width:"100%",animation:"fadeInUp 1s"}},[t._v("你好，我是赵阳。           "),a("br"),a("span",{staticStyle:{"font-size":"30px"}},[t._v("一名正在努力学习前端的大学狗。")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticStyle:{"font-size":"15px",color:"dimgrey"}},[a("br"),t._v("ps:只是懂一点点，还在学习当中")])}],h=a("bd86"),m=a("1157"),g=a.n(m),v=(n={name:"home",data:function(){return{loading:!0,dis:!0,time1:!1,time2:!1,bp:0,mouse:{x:0,y:0}}},created:function(){console.log(this.loading)},methods:{jiazai:function(){this.loading=!1,this.dis=!1},scroll:function(){var t=this;g()(window).mousemove(function(e){var a=-e.pageX/70,n=-e.pageY/70;t.$refs.dongtai.style.transform="translate3d("+a+"px,"+n+"px,0)"})},_getItemLength:function(){var t=this.$refs.jieshaotest.nextSibling;console.log(t)},scrollmove:function(){var t=parseInt(g()("#first").offset().top),e=parseInt(g()("#second").offset().top),a=this,n=parseInt(document.documentElement.scrollTop+document.documentElement.clientHeight);n>e&&(a.$refs.s1.style.animation="fadeInUp 0.5s ease-in-out 0s 1",a.$refs.s2.style.animation="fadeInUp 0.7s ease-in-out 0s 1",a.$refs.s3.style.animation="fadeInUp 0.9s ease-in-out 0s 1",a.$refs.s4.style.animation="fadeInUp 1.1s ease-in-out 0s 1",a.$refs.s5.style.animation="fadeInUp 1.4s ease-in-out 0s 1",this._getItemLength()),console.log(t+"..........."+e+"............."+n)}},beforeCreate:function(){console.log("页面加载前")}},Object(h["a"])(n,"created",function(){console.log("页面加载后")}),Object(h["a"])(n,"mounted",function(){var t=this;this.$nextTick(function(){t.jiazai()}),console.log("渲染完成"),this.scroll(),window.addEventListener("scroll",this.scrollmove,!0)}),n),b=v,y=(a("cccb"),Object(r["a"])(b,u,p,!1,null,null,null)),x=y.exports;i["default"].use(d["a"]);var w=new d["a"]({routes:[{path:"/",name:"home",component:x},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),S=a("5c96"),_=a.n(S),C=(a("0fae"),a("d731"),a("cb5b")),z=a("ad3d"),j=a("da3e"),I=a("faaa"),O=a("42b9"),M=a("caf9");i["default"].use(M["a"],{lazyComponent:!0,listenEvents:["scroll"]}),C["a"].library.add(j["a"]),C["a"].library.add(I["a"]),C["a"].library.add(O["a"]),i["default"].component("font-awesome-icon",z["a"]),i["default"].use(_.a),i["default"].config.productionTip=!1,new i["default"]({router:w,render:function(t){return t(f)}}).$mount("#app")},"64a9":function(t,e,a){},cccb:function(t,e,a){"use strict";var n=a("d563"),i=a.n(n);i.a},d563:function(t,e,a){},d731:function(t,e,a){}});
//# sourceMappingURL=app.9869c1ef.js.map