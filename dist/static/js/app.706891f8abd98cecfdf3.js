webpackJsonp([1],{"+Hjy":function(t,e){},0:function(t,e){},"74v7":function(t,e){e.login_form={name:"",password:"",token:""},e.register_form={name:"",age:"",sex:"",address:"",imgArr:"",phone:"",password:"",token:""},e.items=[{href:"",name:"粉丝",count:0},{href:"",name:"关注",count:0},{href:"",name:"获赞",count:0}],e.cards=[],e.works=[],e.like_form={type:"",workId:"",username:""},e.upload_form={data:"",content:"",name:""}},DtUW:function(t,e){},EVpF:function(t,e){t.exports={REGISTER:"http://118.89.233.211:3000/api/register",LOGIN:"http://118.89.233.211:3000/api/login",UPLOAD:"http://118.89.233.211:3000/api/upload",GETWORKLIST:"http://118.89.233.211:3000/api/getWorkList",GETCARDLIST:"http://118.89.233.211:3000/api/getCardList",LIKE:"http://118.89.233.211:3000/api/like"}},N0TA:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("MVMM"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=s("vSla")({name:"App"},n,!1,function(t){s("nvz3")},null,null).exports,i=s("zO6J"),r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:"http://localhost:3001/images/1528790274581_0078gZ5Egy1fran1e86flj316o1kwn9x.jpg"}}),t._v(" "),t._v("\n        Core Docs\n      ")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var l=s("vSla")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},r,!1,function(t){s("SBKo")},"data-v-2d5e9f27",null).exports,c=s("4YfN"),d=s.n(c),p=s("3cXf"),u=s.n(p),h=function(t){return void 0===t||null==t||""==t},m=s("HVJf"),_=s("74v7"),f=s("EVpF"),v=s.n(f),g={name:"HomePage",components:{toolbar:s("djO7").default},data:function(){return{default_user_img:"./static/imgs/avatar.jpg",show_snap:!0,type:"success",snap_text:"欢迎来到微笑明信片，让我们一起分享快乐吧 φ(゜▽゜*)♪",user_action:"注册",user_action_ctrl:"登陆",input_name:"",input_pwd:"",register_form:_.register_form,login_form:_.login_form}},computed:d()({},Object(m.c)({isLogin:"isLogin",username:"username",token:"token"})),methods:d()({},Object(m.b)(["RECORD_USERINFO"]),{switchUserAction:function(){this.user_action="登陆"==this.user_action_ctrl?"登陆":"注册",this.user_action_ctrl="登陆"==this.user_action_ctrl?"注册":"登陆"},showSnap:function(t,e){var s=this;this.show_snap=!0,this.type=t,this.snap_text=e,window.setTimeout(function(){s.show_snap=!1},800)},clickButton:function(){"登陆"==this.user_action?this.login():this.register()},register:function(){var t=this;this.register_form.name=this.input_name,this.register_form.password=this.input_pwd,h(this.input_name)||h(this.input_pwd)?t.showSnap("error","输入格式错误"):this.$http.post(v.a.REGISTER,this.register_form).then(function(e){e.ok&&(h(e.body.data.name)||h(e.body.data.password)?t.showSnap("success","响应格式错误"):"201"==e.body.code?t.showSnap("warning",e.body.message):(t.showSnap("success",e.body.message),t.login_form.name=e.body.data.name,t.login_form.password=e.body.data.password,t.login_form.token=e.body.data.token,t.login()))},function(){t.showSnap("error","注册失败，请检查网络连接")})},goHome:function(){console.log(this),this.$router.push({path:"/home"})},login:function(){var t=this,e=this;this.login_form.name=this.input_name,this.login_form.password=this.input_pwd,this.login_form.token=this.token,h(this.input_name)||h(this.input_pwd)?(e.showSnap("error","输入格式错误"),console.log("112")):this.$http.post(v.a.LOGIN,this.login_form).then(function(s){s.ok?h(s.body.data.token)?e.showSnap("error",s.body.message):(e.showSnap("success",s.body.message),t.RECORD_USERINFO({username:s.body.data.username,token:s.body.data.token,isLogin:!0,imgArr:s.body.data.imgArr}),e.goHome(),console.log(function(t){if(t)return window.localStorage.getItem(t)}("token"))):e.showSnap("error","登陆失败")},function(){e.showSnap("error","登陆失败")})}})},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"home"}},[s("toolbar"),t._v(" "),s("div",{attrs:{id:"user_info_area"}},[s("el-input",{attrs:{id:"input_name",placeholder:"昵称/手机号","suffix-icon":"el-icon-mobile-phone"},model:{value:t.input_name,callback:function(e){t.input_name=e},expression:"input_name"}}),t._v(" "),s("el-input",{attrs:{id:"input_pwd",placeholder:"密码","suffix-icon":"el-icon-view"},model:{value:t.input_pwd,callback:function(e){t.input_pwd=e},expression:"input_pwd"}}),t._v(" "),s("h6",{staticStyle:{"margin-left":"10px"}},[t._v("内个，我们写一张明信片吧！")]),t._v(" "),s("el-button",{staticClass:"user_action",attrs:{type:"primary"},on:{click:t.clickButton}},[t._v(t._s(t.user_action))]),t._v(" "),s("div",{staticClass:"user_action_ctrl"},[t._v("\n      已有帐号？\n      "),s("span",{on:{click:t.switchUserAction}},[t._v(t._s(t.user_action_ctrl))])])],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.show_snap,expression:"show_snap"}],attrs:{id:"snap"}},["success"===t.type?s("el-alert",{attrs:{title:t.snap_text,type:"success",center:""}}):"info"===t.type?s("el-alert",{attrs:{title:t.snap_text,type:"info",center:""}}):"warning"===t.type?s("el-alert",{attrs:{title:t.snap_text,type:"warning",center:""}}):"error"===t.type?s("el-alert",{attrs:{title:t.snap_text,type:"error",center:""}}):t._e()],1)],1)},staticRenderFns:[]};var k=s("vSla")(g,w,!1,function(t){s("zqOr")},null,null).exports,y={name:"HomePage",components:{toolbar:s("djO7").default,workDialog:s("deIM").default,imgUpload:s("ThOg").default},data:function(){return{default_user_img:"./static/imgs/avatar.jpg",show_snap:!1,type:"success",snap_text:"欢迎来到微笑明信片，让我们一起分享快乐吧 φ(゜▽゜*)♪",upload_form:_.upload_form,items:_.items,cards:_.cards,works:_.works,isShowWorkArea:!1,surplus:140,start_pos:0,showFloatBall:!0,dest_x:0,dest_y:0,like_form:_.like_form}},computed:d()({},Object(m.c)({isLogin:"isLogin",username:"username",token:"token"})),mounted:function(){window.addEventListener("scroll",this.handleScroll),this.dest_x=document.getElementById("float-ball").offsetLeft+30,this.dest_y=document.getElementById("float-ball").offsetTop+30,console.log("x:"+this.dest_x+"         y:"+this.dest_y),this.initWorks(),this.initCards()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll),this.start_pos=0},methods:d()({},Object(m.b)(["RECORD_USERINFO"]),{initWorks:function(){var t=this;console.log("HHH"),this.$http.post(v.a.GETWORKLIST,{name:this.username}).then(function(e){e.ok&&"201"==e.code?t.showSnap("error","获取失败"):(console.log(e.body),t.works=e.body.data)},function(){t.showSnap("error","获取失败")})},initCards:function(){var t=this;console.log("HHH"),this.$http.post(v.a.GETCARDLIST,{name:this.username,max:"100"}).then(function(e){e.ok&&"201"==e.code?t.showSnap("error","获取失败"):(console.log(e.body),t.cards=e.body.data,t.showSnap("success","获取成功"))},function(){t.showSnap("error","获取失败")})},handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;document.querySelector("#float-ball").offsetTop;t>this.start_pos?this.showFloatBall=!1:this.showFloatBall=!0,this.start_pos=t},showSnap:function(t,e){var s=this;this.show_snap=!0,this.type=t,this.snap_text=e,window.setTimeout(function(){s.show_snap=!1},800)},goPersonalPage:function(){console.log(this),this.$router.push({path:"/personal"})},showUploadWorkDialog:function(){this.isShowWorkArea=!0},closeDialog:function(){this.isShowWorkArea=!1},secelted:function(t){console.log(t),this.upload_form.data=t},upload:function(){var t=this;if(this.upload_form.name=this.username,console.log(this.upload_form.data),console.log(this.upload_form.name),console.log(this.upload_form.content),h(this.upload_form.name)||h(this.upload_form.content)||h(this.upload_form.data))t.showSnap("error","请保证您的明信片完整");else{var e=new window.FormData;e.append("image",this.upload_form.data,".jpg"),e.append("name",this.upload_form.name),e.append("content",this.upload_form.content),this.$http.post(v.a.UPLOAD,e).then(function(e){e.ok&&"201"==e.body.code?t.showSnap("error","上传失败"):(t.showSnap("success",e.body.message),t.closeDialog(),t.works.splice(0,0,{_id:e.body.data._id,username:e.body.data.username,content:e.body.data.content,imgurl:e.body.data.imgurl,like:e.body.data.like,share:e.body.data.share,isLike:e.body.data.isLike}),console.log(e.body),console.log(t.works),t.upload_form.data="",t.upload_form.content="",t.upload_form.name="")},function(){t.showSnap("error","上传失败")})}},descArea:function(){var t=this.upload_form.content.length;this.surplus=140-t},like:function(t){console.log("like"+this.works[t].like+"isLike"+this.works[t].isLike);var e=this;this.like_form.type=this.works[t].isLike?"0":"1",console.log("type:"+this.like_form.type),this.like_form.workId=this.works[t]._id,this.like_form.username=this.username,this.$http.post(v.a.LIKE,_.like_form).then(function(s){s.ok&&"201"==s.code?e.showSnap("error",s.body.message):(console.log(s.body),e.showSnap("success",s.body.message),e.works[t].like=e.works[t].isLike?parseInt(e.works[t].like)-1:parseInt(e.works[t].like)+1,e.works[t].isLike=!e.works[t].isLike,console.log("like"+e.works[t].like+"isLike"+e.works[t].isLike))},function(){e.showSnap("error","点赞失败")})},likeForCards:function(t){console.log("cards - like"+this.cards[t].like+"cards -isLike"+this.cards[t].isLike);var e=this;this.like_form.type=this.cards[t].isLike?"0":"1",this.like_form.workId=this.cards[t]._id,this.like_form.username=this.username,this.$http.post(v.a.LIKE,_.like_form).then(function(s){s.ok&&"201"==s.code?e.showSnap("error",s.body.message):(console.log(s.body),e.showSnap("success",s.body.message),e.cards[t].like=e.cards[t].isLike?parseInt(e.cards[t].like)-1:parseInt(e.cards[t].like)+1,e.cards[t].isLike=!e.cards[t].isLike,console.log("like"+e.cards[t].like+"isLike"+e.cards[t].isLike))},function(){e.showSnap("error","点赞失败")})}})},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"home"}},[s("toolbar"),t._v(" "),s("div",{attrs:{id:"user_info"}},[s("div",{staticClass:"hat"}),t._v(" "),s("div",{staticClass:"header"},[s("div",{staticClass:"head-avatar"},[s("img",{staticStyle:{width:"90px"},attrs:{src:t.default_user_img},on:{click:t.goPersonalPage}})]),t._v(" "),s("div",{staticClass:"head-name"},[s("span",{staticStyle:{"font-size":"16px","font-weight":"900",color:"#444","margin-right":"10px"}},[t._v(t._s(""!=t.username?t.username:"微笑"))])]),t._v(" "),t._m(0),t._v(" "),s("i",{staticClass:"el-icon-edit",attrs:{id:"edit-mine-info"},on:{click:t.goPersonalPage}})]),t._v(" "),s("div",{staticClass:"tail-nav"},t._l(t.items,function(e,a){return s("div",{key:a,staticClass:"nav-item"},[s("a",{staticClass:"Item",attrs:{href:e.href,role:"tab",title:e.name}},[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),s("div",{staticClass:"Counter"},[t._v("\n          "+t._s(e.count)+"\n        ")])])}))]),t._v(" "),s("h4",{directives:[{name:"show",rawName:"v-show",value:t.works.length>0,expression:"works.length>0"}],staticStyle:{background:"#fff","margin-top":"30px","margin-left":"20%"}},[t._v("我的作品")]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.works.length>0,expression:"works.length>0"}],staticClass:"card-list"},t._l(t.works,function(e,a){return s("div",{key:a,staticClass:"card-item"},[s("img",{staticClass:"card-item-img",attrs:{src:e.imgurl}}),t._v(" "),s("div",{staticClass:"card-item-content"},[t._v("\n        "+t._s(e.content)+"\n      ")]),t._v(" "),s("p",{staticClass:"card-item-operator"},[s("span",{staticClass:"like",attrs:{title:"喜欢"},on:{click:function(e){t.like(a)}}},[s("i",{staticClass:"like-icon",class:[e.isLike?"likeafter":"likebefore"]}),t._v(t._s(e.like))]),t._v(" "),s("span",{staticClass:"share",attrs:{title:"分享"}},[s("i",{staticClass:"share-icon"}),t._v(t._s(e.share))])])])})),t._v(" "),s("h4",{directives:[{name:"show",rawName:"v-show",value:t.cards.length>0,expression:"cards.length>0"}],staticStyle:{background:"#fff","margin-top":"30px","margin-left":"20%"}},[t._v("热门推荐")]),t._v(" "),s("div",{staticClass:"card-list"},t._l(t.cards,function(e,a){return s("div",{key:a,staticClass:"card-item"},[s("img",{staticClass:"card-item-img",attrs:{src:e.imgurl}}),t._v(" "),s("div",{staticClass:"card-item-userinfo"},[t._v("\n        "+t._s(e.username)+"\n      ")]),t._v(" "),s("div",{staticClass:"card-item-content"},[t._v("\n        "+t._s(e.content)+"\n      ")]),t._v(" "),s("div",{staticClass:"card-item-operator"},[s("span",{staticClass:"like",attrs:{title:"喜欢"},on:{click:function(e){t.likeForCards(a)}}},[s("i",{class:[e.isLike?"likeafter":"likebefore"]}),t._v(t._s(e.like))]),t._v(" "),s("span",{staticClass:"share",attrs:{title:"分享"}},[s("i",{staticClass:"share-icon"}),t._v(t._s(e.share))])])])})),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.show_snap,expression:"show_snap"}],attrs:{id:"snap"}},["success"===t.type?s("el-alert",{attrs:{title:t.snap_text,type:"success",center:""}}):"info"===t.type?s("el-alert",{attrs:{title:t.snap_text,type:"info",center:""}}):"warning"===t.type?s("el-alert",{attrs:{title:t.snap_text,type:"warning",center:""}}):"error"===t.type?s("el-alert",{attrs:{title:t.snap_text,type:"error",center:""}}):t._e()],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showFloatBall,expression:"showFloatBall"}],attrs:{id:"float-ball"},on:{click:t.showUploadWorkDialog}}),t._v(" "),s("work-dialog",{attrs:{"is-show":t.isShowWorkArea},on:{"on-close":t.closeDialog}},[s("div",{staticClass:"dialog_upload_header",attrs:{slot:"header"},slot:"header"},[t._v("\n      我的明信片:D\n    ")]),t._v(" "),s("div",{staticClass:"dialog_upload_main",attrs:{slot:"main"},slot:"main"},[s("imgUpload",{on:{"select-complete":t.secelted}}),t._v(" "),s("div",{staticClass:"work-content"},[s("div",{staticClass:"work-username"},[t._v("\n          作者："+t._s(t.username)+"\n        ")]),t._v(" "),s("div",{staticClass:"edit-content"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.upload_form.content,expression:"upload_form.content"}],staticClass:"card-add-content",attrs:{name:"text",rows:"3",placeholder:"这里写下你想说的话（*＾-＾*）",maxlength:140},domProps:{value:t.upload_form.content},on:{input:[function(e){e.target.composing||t.$set(t.upload_form,"content",e.target.value)},t.descArea]}}),t._v(" "),s("span",{staticStyle:{"font-size":"10px",float:"right",color:"#409eff"}},[t._v("剩余字数 "+t._s(t.surplus)+"/140")])]),t._v(" "),s("el-button",{attrs:{id:"publish",size:"small",type:"primary"},on:{click:t.upload}},[t._v("点击上传")])],1)],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"head-desc"},[e("span",{staticStyle:{"margin-left":"10px",height:"60px",width:"360px","font-size":"13px","font-weight":"500",color:"#444",display:"inline-block"}},[this._v("这个人很懒 ~ 暂无简介")])])}]};var S=s("vSla")(y,b,!1,function(t){s("tSS4")},null,null).exports,x={data:function(){return{title:"我的主页",show_snap:!1,type:"success",snap_text:"欢迎来到微笑明信片，让我们一起分享快乐吧 φ(゜▽゜*)♪"}},methods:{showSnap:function(t,e){var s=this;this.show_snap=!0,this.type=t,this.snap_text=e,window.setTimeout(function(){s.show_snap=!1},800)}}},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"personal"}},[s("h3",[t._v(t._s(t.title))]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.show_snap,expression:"show_snap"}],attrs:{id:"snap"}},["success"===t.type?s("el-alert",{attrs:{title:t.snap_text,type:"success",center:""}}):"info"===t.type?s("el-alert",{attrs:{title:t.snap_text,type:"info",center:""}}):"warning"===t.type?s("el-alert",{attrs:{title:t.snap_text,type:"warning",center:""}}):"error"===t.type?s("el-alert",{attrs:{title:t.snap_text,type:"error",center:""}}):t._e()],1)])},staticRenderFns:[]};var L=s("vSla")(x,C,!1,function(t){s("DtUW")},null,null).exports,E=s("djO7"),I={name:"snapbar",data:function(){return{show_snap:!0,type:"success",snap_text:"欢迎来到微笑明信片，让我们一起分享快乐吧 φ(゜▽゜*)♪"}},methods:{showSnap:function(t,e){var s=this;this.show_snap=!0,this.type=t,this.snap_text=e,window.setTimeout(function(){s.show_snap=!1},800)}}},R={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.show_snap,expression:"show_snap"}],attrs:{id:"snap"}},["success"===t.type?s("el-alert",{attrs:{title:t.snap_text,type:"success",center:""}}):"info"===t.type?s("el-alert",{attrs:{title:t.snap_text,type:"info",center:""}}):"warning"===t.type?s("el-alert",{attrs:{title:t.snap_text,type:"warning",center:""}}):"error"===t.type?s("el-alert",{attrs:{title:t.snap_text,type:"error",center:""}}):t._e()],1)},staticRenderFns:[]};var O=s("vSla")(I,R,!1,function(t){s("N0TA")},null,null).exports;a.default.use(i.a);var j,A=new i.a({mode:"history",routes:[{path:"/",name:"login",component:k},{path:"/home",name:"home",component:S},{path:"/personal",name:"personal",component:L},{path:"/toolbar",name:"toolbar",component:E.default},{path:"/hello",name:"HelloWorld",component:l},{path:"/snapbar",name:"snapbar",component:O}]}),N=s("xB4m"),D=s.n(N),T=(s("l4ih"),s("OolZ")),F=s("a3Yh"),$=s.n(F),B=(j={},$()(j,"RECORD_USERINFO",function(t,e){var s,a;h.userInfo||(t.username=e.username,t.token=e.token,t.isLogin=e.isLogin,t.imgArr=e.imgArr,s="token",a=t.token,s&&("string"!=typeof a&&(a=u()(a)),window.localStorage.setItem(s,a)))}),$()(j,"CLEAR_USERINFO",function(t){var e;(e="token")&&window.localStorage.removeItem(e),t.token="",t.isLogin=!1,t.imgArr=""}),j);a.default.use(m.a);var H=new m.a.Store({state:{username:"",token:"",isLogin:!1,imgArr:""},getters:{},actions:{},mutations:B});a.default.config.productionTip=!1,a.default.use(D.a),a.default.use(T.a),new a.default({el:"#app",router:A,store:H,components:{App:o},template:"<App/>"})},SBKo:function(t,e){},ThOg:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("vvLd"),n=s.n(a),o={data:function(){return{imgSrc:""}},props:["model"],created:function(){},ready:function(){},methods:{handle:function(t){var e=this.model,s=this;Array.prototype.slice.call(t.target.files).forEach(function(t,a){var o;if(/\/(?:jpeg|png|gif)/i.test(t.type)){n.a.getData(t,function(){o=n.a.getTag(this,"Orientation")});var i=new FileReader;i.onload=function(){var a=this.result;s.imgSrc=a,s.getImgData(this.result,o,function(a){var n=new Image;function o(){var a=s.compress(n);s.upload(a,t.type,t.name,e)}n.src=a,n.complete?o():n.onload=o})},i.readAsDataURL(t)}})},compress:function(t){var e,s,a=document.createElement("canvas"),n=a.getContext("2d"),o=document.createElement("canvas"),i=o.getContext("2d"),r=t.src.length,l=t.naturalWidth,c=t.naturalHeight;if(c=200*c/l,l=200,console.log("w:"+l+"h:"+c),(e=l*c/4e6)>1?(l/=e=Math.sqrt(e),c/=e):e=1,a.width=2*l,a.height=2*c,n.fillStyle="#fff",n.fillRect(0,0,a.width,a.height),(s=l*c/1e6)>1){var d=~~(l/(s=~~(Math.sqrt(s)+1))),p=~~(c/s);o.width=d,o.height=p;for(var u=0;u<s;u++)for(var h=0;h<s;h++)i.drawImage(t,u*d*e,h*p*e,d*e*2,p*e*2,0,0,d,p),n.drawImage(o,u*d,h*p,2*d,2*p)}else n.drawImage(t,0,0,2*l,2*c);var m=a.toDataURL("image/jpeg/jpg/png",.9);return console.log("压缩前："+r),console.log("压缩后："+m.length),console.log("压缩率："+~~(100*(r-m.length)/r)+"%"),m},upload:function(t,e,s,a){for(var n=window.atob(t.split(",")[1]),o=new ArrayBuffer(n.length),i=new Uint8Array(o),r=0;r<n.length;r++)i[r]=n.charCodeAt(r);var l=window.WebKitBlobBuilder||window.MozBlobBuilder,c=void 0;if(l){var d=new l;d.append(o),c=d.getBlob(e)}else c=new window.Blob([o],{type:e});this.$emit("select-complete",c)},getImgData:function(t,e,s){var a=new Image;a.onload=function(){var t,a,n,o,i=0;t=this.naturalWidth,a=this.naturalHeight;var r=Math.max(t,a);if(r>1024){var l=Math.min(t,a);l=l/r*1024,r=1024,t>a?(t=r,a=l):(t=l,a=r)}var c=document.createElement("canvas");c.width=n=t,c.height=o=a;var d=c.getContext("2d");switch(e){case 3:i=180,t=-n,a=-o;break;case 6:c.width=o,c.height=n,i=90,t=n,a=-o;break;case 8:c.width=o,c.height=n,i=270,t=-n,a=o}d.rotate(i*Math.PI/180),d.drawImage(this,0,0,t,a),s(c.toDataURL("image/jpeg/jpg/png",.4))},a.src=t}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"upload"},[s("input",{attrs:{type:"file",name:"model",accept:"image/*"},on:{change:function(e){t.handle(e)}}}),t._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:t.imgSrc,expression:"imgSrc"}],attrs:{src:t.imgSrc,alt:"",name:t.model}})])},staticRenderFns:[]};var r=s("vSla")(o,i,!1,function(t){s("xt1G")},"data-v-680e2918",null);e.default=r.exports},deIM:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"dialogComponent",props:{isShow:{type:Boolean,default:!1,required:!0},widNum:{type:Number,default:86.5},leftSite:{type:Number,default:6.5},topDistance:{type:Number,default:18},pdt:{type:Number,default:30},pdb:{type:Number,default:30}},methods:{closeMyself:function(){this.$emit("on-close")}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dialog"},[t.isShow?s("div",{staticClass:"dialog-cover back",on:{click:t.closeMyself}}):t._e(),t._v(" "),t.isShow?s("div",{staticClass:"dialog-content",style:{top:t.topDistance+"%",width:t.widNum+"%",left:t.leftSite+"%"}},[s("div",{staticClass:"dialog_head back "},[t._t("header",[t._v("header")])],2),t._v(" "),s("div",{staticClass:"dialog_main ",style:{paddingTop:t.pdt+"px",paddingBottom:t.pdb+"px"}},[t._t("main",[t._v("body")])],2),t._v(" "),s("div",{staticClass:"foot_close ",on:{click:t.closeMyself}})]):t._e()])},staticRenderFns:[]};var o=s("vSla")(a,n,!1,function(t){s("+Hjy")},"data-v-b59ca1bc",null);e.default=o.exports},djO7:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"toolbar"}},[e("h3",[this._v(this._s(this.title))]),this._v(" "),e("h5",[this._v(this._s(this.desc))])])},staticRenderFns:[]};var n=s("vSla")({data:function(){return{title:"微笑明信片  ：)",desc:"书不成字，纸短情长 一生只够爱一个人"}},methods:{}},a,!1,function(t){s("eP2z")},null,null);e.default=n.exports},eP2z:function(t,e){},l4ih:function(t,e){},nvz3:function(t,e){},tSS4:function(t,e){},xt1G:function(t,e){},zqOr:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.706891f8abd98cecfdf3.js.map