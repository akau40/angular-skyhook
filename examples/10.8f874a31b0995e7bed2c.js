(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"O/wF":function(n,l,e){"use strict";e.d(l,"a",function(){return u}),e.d(l,"b",function(){return o});var t=e("LoAr"),u=(e("8dL6"),t["\u0275crt"]({encapsulation:0,styles:[".fab[_ngcontent-%COMP%] { color: black; }\n        p[_ngcontent-%COMP%] {\n            margin-top: 0;\n        }\n        a[_ngcontent-%COMP%] {\n            padding: 8px;\n            display: inline-block;\n            background: rgba(68, 72, 224, 0.14);\n            background: #e5e2fa;\n            background: #e2ecfa;\n            text-decoration: none;\n        }"],data:{}}));function o(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,2,"a",[["target","_blank"]],[[8,"href",4]],null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,0,"i",[["class","fab fa-github"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" View the source on GitHub "]))],null,function(n,l){n(l,1,0,l.component.link)})}},iqzz:function(n,l,e){"use strict";e.r(l);var t=e("LoAr"),u=function(){},o=e("C9Ky"),a=e("O/wF"),i=e("8dL6"),d=e("WT9V"),r=e("r6jt"),p=e("qBvv"),c=function(){function n(n){var l=this;this.dnd=n,this.droppedType=null,this.dropped=null,this.target=this.dnd.dropTarget(null,{drop:function(n){l.droppedType=n.getItemType();var e=n.getItem();if(n.getItemType()===p.NativeTypes.FILE){var t=e.files.map(function(n){return"File named "+n.name});l.dropped={files:t}}else l.dropped=e}})}return n.prototype.ngOnDestroy=function(){this.target.unsubscribe()},n}(),s=t["\u0275crt"]({encapsulation:0,styles:["[_nghost-%COMP%] {\n            min-width: 200px;\n        }\n        .target[_ngcontent-%COMP%] {\n            padding: 8px;\n            background: #ddd;\n            min-height: 140px;\n            min-width: 0;\n        }\n        pre[_ngcontent-%COMP%] { overflow-x: auto; min-width: 0; }"],data:{}});function f(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"pre",[],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,["",""])),t["\u0275pid"](0,d.JsonPipe,[])],null,function(n,l){var e=l.component;n(l,1,0,t["\u0275unv"](l,1,0,t["\u0275nov"](l,2).transform(e.dropped)))})}function g(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"div",[["class","target"]],null,null,null,null,null)),t["\u0275did"](1,671744,null,0,r.e,[t.ElementRef,t.NgZone],{dropTarget:[0,"dropTarget"],dropTargetTypes:[1,"dropTargetTypes"]},null),(n()(),t["\u0275eld"](2,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Accepts "])),(n()(),t["\u0275eld"](4,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](5,null,["",""])),t["\u0275ncd"](null,0),(n()(),t["\u0275and"](16777216,null,null,1,null,f)),t["\u0275did"](8,16384,null,0,d.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,1,0,e.target,e.type),n(l,8,0,e.dropped)},function(n,l){n(l,5,0,l.component.type)})}var m=function(){return function(){this.NativeTypes=p.NativeTypes}}(),v=t["\u0275crt"]({encapsulation:0,styles:[".flex[_ngcontent-%COMP%] {\n        display: flex;\n        flex-wrap: wrap;\n        margin: -8px;\n    }\n    .flex[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] { flex: 1; }\n    .flex[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] { margin: 8px; }"],data:{}});function y(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-example-link",[["path","html5/native-types"]],null,null,null,a.b,a.a)),t["\u0275did"](1,49152,null,0,i.a,[],{path:[0,"path"]},null),(n()(),t["\u0275eld"](2,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" When you are using the HTML5 backend, you can accept three native types: files, URLs, and text. "])),(n()(),t["\u0275eld"](4,0,null,null,12,"div",[["class","flex"]],null,null,null,null,null)),(n()(),t["\u0275eld"](5,0,null,null,3,"native-target",[],null,null,null,g,s)),t["\u0275did"](6,180224,null,0,c,[r.g],{type:[0,"type"]},null),(n()(),t["\u0275eld"](7,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Receives a list of native JavaScript File objects."])),(n()(),t["\u0275eld"](9,0,null,null,3,"native-target",[],null,null,null,g,s)),t["\u0275did"](10,180224,null,0,c,[r.g],{type:[0,"type"]},null),(n()(),t["\u0275eld"](11,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Receives a list of URLs as strings."])),(n()(),t["\u0275eld"](13,0,null,null,3,"native-target",[],null,null,null,g,s)),t["\u0275did"](14,180224,null,0,c,[r.g],{type:[0,"type"]},null),(n()(),t["\u0275eld"](15,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Receives a string of the text you dropped."]))],function(n,l){var e=l.component;n(l,1,0,"html5/native-types"),n(l,6,0,e.NativeTypes.FILE),n(l,10,0,e.NativeTypes.URL),n(l,14,0,e.NativeTypes.TEXT)},null)}var h=t["\u0275ccf"]("native-container",m,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"native-container",[],null,null,null,y,v)),t["\u0275did"](1,49152,null,0,m,[],null,null)],null,null)},{},{},[]),T=e("981U"),b=e("JqZp");e.d(l,"NativeTypesModuleNgFactory",function(){return C});var C=t["\u0275cmf"](u,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,h]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,d.NgLocalization,d.NgLocaleLocalization,[t.LOCALE_ID,[2,d["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](1073742336,d.CommonModule,d.CommonModule,[]),t["\u0275mpd"](1073742336,r.f,r.f,[]),t["\u0275mpd"](1073742336,T.n,T.n,[[2,T.t],[2,T.k]]),t["\u0275mpd"](1073742336,b.a,b.a,[]),t["\u0275mpd"](1073742336,u,u,[]),t["\u0275mpd"](1024,T.i,function(){return[[{path:"",component:m}]]},[])])})}}]);