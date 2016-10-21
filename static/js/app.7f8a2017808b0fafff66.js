webpackJsonp([1,0],[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var o=n(10),s=i(o),a=n(18),r=i(a),u=n(9),d=i(u),p=n(17),h=i(p),c=n(8),f=i(c);window.addEventListener("load",function(){f["default"].attach(document.body)}),s["default"].use(d["default"]);var m=new d["default"]({base:"/2048/",mode:"history",routes:h["default"]});new s["default"]({router:m,el:"#app",template:"<App/>",components:{App:r["default"]}})},function(t,e,n){var i,o;n(3),i=n(13);var s=n(24);o=i=i||{},"object"!=typeof i["default"]&&"function"!=typeof i["default"]||(o=i=i["default"]),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-2cd630c5",t.exports=i},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"app",components:{}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"about",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){for(var t=[0,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192],e=["#CCC0B3","#EEE3DA","#EDE0C8","#F2B179","#F59563","#f67c5f","#f65e3b","#edcf72","#edcc61","#9c0","#33b5e5","#09c","#a6c","#93c"],n={},i=0;i<t.length;i++)n[t[i]]=e[i];return{wid:126,unit:t,anim:300,ok:!0,isA:!0,map:[[[4,0,0],[0,0,0],[2,0,0],[0,0,0]],[[0,0,0],[0,0,0],[0,0,0],[2,0,0]],[[0,0,0],[4,0,0],[0,0,0],[0,0,0]],[[16,0,0],[8,0,0],[2,0,0],[0,0,0]]],fn:n}},created:function(){var t=arguments,e=this;document.onkeydown=function(){var n=window.event||t[0];37==n.keyCode?e.moveLeft():39==n.keyCode?e.moveRight():38==n.keyCode?e.moveTop():40==n.keyCode&&e.moveBottom()},console.log("123")},methods:{randCeil:function(){for(var t=[],e=!1,n=0;n<this.map.length;n++)for(var i=0;i<this.map[n].length;i++)0==this.map[n][i][0]&&t.push([n,i]);1==t.length&&(e=!0);var o=Math.floor(Math.random()*t.length);this.map[t[o][0]][t[o][1]][0]=10*Math.random()<1?4:2,this.map.splice(0,0),e&&this.gameOver()},gameOver:function(){for(var t=0;t<this.map.length;t++)for(var e=void 0,n=0;n<this.map[t].length;n++){if(this.map[t][n][0]==e)return;e=this.map[t][n][0]}for(var i=0;i<this.map[0].length;i++)for(var o=void 0,s=0;s<this.map.length;s++){if(this.map[s][i][0]==o)return;o=this.map[s][i][0]}console.log("game over!!")},repaintLt:function(){for(var t=0;t<this.map.length;t++)for(var e=0;e<this.map[t].length;e++){var n=this.map[t][e];0!=n[1]&&(this.map[t][e+n[1]][0]=n[0],this.map[t][e]=[0,0,0]),0!=n[2]&&(this.map[t+n[2]][e][0]=n[0],this.map[t][e]=[0,0,0])}this.isA=!1,this.map.splice(0,0),this.ok=!0,this.randCeil()},repaintRb:function(){for(var t=this.map.length-1;t>=0;t--)for(var e=this.map[t].length-1;e>=0;e--){var n=this.map[t][e];0!=n[1]&&(this.map[t][e+n[1]][0]=n[0],this.map[t][e]=[0,0,0]),0!=n[2]&&(this.map[t+n[2]][e][0]=n[0],this.map[t][e]=[0,0,0])}this.isA=!1,this.map.splice(0,0),this.ok=!0,this.randCeil()},moveRight:function(){var t=this;if(0!=this.ok){this.ok=!1,this.isA=!0;for(var e=!1,n=0;n<this.map.length;n++)for(var i=0,o=void 0,s=void 0,a=this.map[n].length-1;a>=0;a--)0==this.map[n][a][0]?i++:(this.map[n][a][0]==o&&(i++,this.map[n][a][0]=2*o),o=this.map[n][a][0],s=a,0!=i&&(e=!0,this.map[n][a][1]=i));this.map.splice(0,0),e?setTimeout(function(){return t.repaintRb()},this.anim):this.ok=!0}},moveLeft:function(){var t=this;if(0!=this.ok){this.ok=!1,this.isA=!0;for(var e=!1,n=0;n<this.map.length;n++)for(var i=0,o=void 0,s=void 0,a=0;a<this.map[n].length;a++)0==this.map[n][a][0]?i++:(this.map[n][a][0]==o&&(i++,this.map[n][a][0]=2*o),o=this.map[n][a][0],s=a,0!=i&&(e=!0,this.map[n][a][1]=-i));this.map.splice(0,0),e?setTimeout(function(){return t.repaintLt()},this.anim):this.ok=!0}},moveTop:function(){var t=this;if(0!=this.ok){this.ok=!1,this.isA=!0;for(var e=!1,n=0;n<this.map[0].length;n++)for(var i=0,o=void 0,s=void 0,a=0;a<this.map.length;a++)0==this.map[a][n][0]?i++:(this.map[a][n][0]==o&&(i++,this.map[a][n][0]=2*o),o=this.map[a][n][0],s=a,0!=i&&(e=!0,this.map[a][n][2]=-i));this.map.splice(0,0),e?setTimeout(function(){return t.repaintLt()},this.anim):this.ok=!0}},moveBottom:function(){var t=this;if(0!=this.ok){this.ok=!1,this.isA=!0;for(var e=!1,n=0;n<this.map[0].length;n++)for(var i=0,o=void 0,s=void 0,a=this.map.length-1;a>=0;a--)0==this.map[a][n][0]?i++:(this.map[a][n][0]==o&&(i++,this.map[a][n][0]=2*o),o=this.map[a][n][0],s=a,0!=i&&(e=!0,this.map[a][n][2]=i));this.map.splice(0,0),e?setTimeout(function(){return t.repaintRb()},this.anim):this.ok=!0}}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"error",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"settings",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"uindex",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=[{path:"/",name:"index",component:n(1)},{path:"/game",name:"game",component:n(1)},{path:"/about",name:"about",component:n(19)},{path:"/user",name:"user",component:n(22)},{path:"/user/:id",name:"usersetting",component:n(21)},{path:"*",name:"404",component:n(20)}]},function(t,e,n){var i,o;n(6),i=n(11);var s=n(27);o=i=i||{},"object"!=typeof i["default"]&&"function"!=typeof i["default"]||(o=i=i["default"]),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,t.exports=i},function(t,e,n){var i,o;n(4),i=n(12);var s=n(25);o=i=i||{},"object"!=typeof i["default"]&&"function"!=typeof i["default"]||(o=i=i["default"]),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-47acaaa7",t.exports=i},function(t,e,n){var i,o;n(5),i=n(14);var s=n(26);o=i=i||{},"object"!=typeof i["default"]&&"function"!=typeof i["default"]||(o=i=i["default"]),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-7111fe64",t.exports=i},function(t,e,n){var i,o;n(7),i=n(15);var s=n(28);o=i=i||{},"object"!=typeof i["default"]&&"function"!=typeof i["default"]||(o=i=i["default"]),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-bf55c61e",t.exports=i},function(t,e,n){var i,o;n(2),i=n(16);var s=n(23);o=i=i||{},"object"!=typeof i["default"]&&"function"!=typeof i["default"]||(o=i=i["default"]),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-0aba9694",t.exports=i},function(module,exports){module.exports={render:function(){with(this)return _m(0)},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"uindex"},["\n  user index\n"])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"hello"},[_h("div",{staticClass:"back"},[_l(16,function(t){return _h("div",{staticClass:"backceil"})})])," ",_h("div",{staticClass:"game"},[_l(map,function(t){return _h("div",{staticClass:"line"},[_l(t,function(t){return _h("div",{staticClass:"ceil","class":{trans:isA,visib:t[0],color:t[0]>8,font:t[0].toString().length>3},style:{background:fn[t[0]],transform:"translate3d("+t[1]*wid+"px, "+t[2]*wid+"px, 0)"}},[_s(t[0]!=unit[0]?t[0]:"")])})])})])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"about"},["\n  about\n  ",_h("router-link",{attrs:{to:"/user"}},["Go to user index!!!!"])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _m(0)},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"error"},["\n  error page\n"])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{attrs:{id:"app"}},[_m(0)," ",_h("ul",[_h("li",[_h("router-link",{attrs:{to:"/user"}},["Go to user index!!!!"])])," ",_h("li",[_h("router-link",{attrs:{to:"/about"}},["Go to about"])])," ",_h("li",[_h("router-link",{attrs:{to:"/game"}},["Go to game"])])])," "," ",_h("transition",{attrs:{name:"fade",mode:"out-in"}},[_h("router-view")])])},staticRenderFns:[function(){with(this)return _h("div",["标题栏"])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"settings"},["\n  settings\n  "+_s($route.params.id)+"\n"])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.7f8a2017808b0fafff66.js.map