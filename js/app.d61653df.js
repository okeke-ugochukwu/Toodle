(function(e){function t(t){for(var a,c,o=t[0],l=t[1],i=t[2],u=0,g=[];u<o.length;u++)c=o[u],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&g.push(n[c][0]),n[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(g.length)g.shift()();return r.push.apply(r,i||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,c=1;c<s.length;c++){var l=s[c];0!==n[l]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},n={app:0},r=[];function c(e){return o.p+"js/"+({notesApp:"notesApp"}[e]||e)+"."+{notesApp:"fa2edf8c"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(e){var t=[],s=n[e];if(0!==s)if(s)t.push(s[2]);else{var a=new Promise((function(t,a){s=n[e]=[t,a]}));t.push(s[2]=a);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=c(e);var i=new Error;r=function(t){l.onerror=l.onload=null,clearTimeout(u);var s=n[e];if(0!==s){if(s){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",i.name="ChunkLoadError",i.type=a,i.request=r,s[1](i)}n[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/Toodle/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=i;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"00c1":function(e,t,s){"use strict";var a=s("7a23"),n={class:"colorSwitch"};function r(e,t,s,r,c,o){var l=Object(a["B"])("menu-icon"),i=Object(a["B"])("moon-stars-icon");return Object(a["u"])(),Object(a["f"])("header",null,[Object(a["g"])("div",{class:"hamburger",onClick:t[0]||(t[0]=function(){return o.toggleSideBarStatus&&o.toggleSideBarStatus.apply(o,arguments)})},[Object(a["i"])(l,{class:"icons menu-icon"})]),Object(a["g"])("div",n,[Object(a["i"])(i,{class:"icons dark-mode-icon"})])])}var c={name:"mobileHeader",data:function(){return{}},methods:{toggleSideBarStatus:function(){this.$store.commit("toggleSideBar")}}},o=s("6b0d"),l=s.n(o);const i=l()(c,[["render",r]]);t["a"]=i},"4b2d":function(e,t,s){e.exports=s.p+"img/avatar.08bd14f4.png"},"53b4":function(e,t,s){"use strict";s("e517")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("7a23");function n(e,t,s,n,r,c){var o=Object(a["B"])("sideBar"),l=Object(a["B"])("router-view");return Object(a["u"])(),Object(a["f"])(a["a"],null,[Object(a["i"])(o),Object(a["g"])("div",{class:Object(a["p"])(["toodleApps",{sideBarShown:c.sideBarStatus}])},[Object(a["i"])(l)],2)],64)}var r={class:"sideBar"};function c(e,t,s,n,c,o){var l=Object(a["B"])("chevron-left-icon"),i=Object(a["B"])("userStats"),u=Object(a["B"])("navBar");return Object(a["u"])(),Object(a["f"])("div",r,[Object(a["g"])("div",null,[Object(a["g"])("div",null,[Object(a["g"])("button",{class:"close_btn",onClick:t[0]||(t[0]=function(e){return o.toggleSideBarStatus()})},[Object(a["i"])(l,{class:"icons chevron-left-icon"})])]),Object(a["g"])("nav",null,[Object(a["i"])(i),Object(a["i"])(u)])])])}var o=s("4b2d"),l=s.n(o),i={class:"userStats"},u=Object(a["g"])("div",{class:"userProgressBar"},[Object(a["g"])("div",{class:"userProgressBar_level"},[Object(a["g"])("div",{class:"user_avatar"},[Object(a["g"])("img",{src:l.a,alt:"user_avatar"})])])],-1),d={class:"user_name"};function g(e,t,s,n,r,c){return Object(a["u"])(),Object(a["f"])("div",i,[u,Object(a["g"])("h2",d,Object(a["D"])(this.$store.state.username),1)])}var b={name:"userStats"},f=s("6b0d"),k=s.n(f);const m=k()(b,[["render",g]]);var h=m,p=Object(a["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icons icon-tabler icon-tabler-checklist",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[Object(a["g"])("desc",null,"Download more icon variants from https://tabler-icons.io/i/checklist"),Object(a["g"])("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),Object(a["g"])("path",{d:"M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8"}),Object(a["g"])("path",{d:"M14 19l2 2l4 -4"}),Object(a["g"])("path",{d:"M9 8h4"}),Object(a["g"])("path",{d:"M9 12h2"})],-1),O=Object(a["h"])(" Todos "),j=Object(a["h"])(" Notes ");function v(e,t,s,n,r,c){var o=Object(a["B"])("router-link"),l=Object(a["B"])("news-icon");return Object(a["u"])(),Object(a["f"])("nav",null,[Object(a["g"])("ul",null,[Object(a["g"])("li",null,[Object(a["i"])(o,{to:"/todos"},{default:Object(a["I"])((function(){return[p,O]})),_:1})]),Object(a["g"])("li",null,[Object(a["i"])(o,{to:"/notes"},{default:Object(a["I"])((function(){return[Object(a["i"])(l,{class:"icons"}),j]})),_:1})])])])}var T={name:"navBar"};const C=k()(T,[["render",v]]);var y=C,B={name:"sideBar",components:{userStats:h,navBar:y},methods:{toggleSideBarStatus:function(){this.$store.commit("toggleSideBar")}}};const S=k()(B,[["render",c]]);var w=S,_={name:"App",components:{sideBar:w},computed:{sideBarStatus:function(){return this.$store.state.sideBarStatus}}};s("8f41");const P=k()(_,[["render",n]]);var M=P,$=(s("b64b"),s("d3b7"),s("159b"),s("a434"),s("99af"),s("07ac"),s("5502")),N=Object($["a"])({state:function(){return{allTasksContainer:{allTasks:{Toodle:[{id:1,descr:"Fetch design file",category:"Toodle",status:!1,editStatus:!1,editButtonStatus:!0,errorMessageStatus:!1},{id:2,descr:"Make new comprehensive comments",category:"Toodle",status:!1,editStatus:!1,editButtonStatus:!0,errorMessageStatus:!1}],Fun:[{id:1,descr:"Go swimming",category:"Fun",status:!1,editStatus:!1,editButtonStatus:!0,errorMessageStatus:!1},{id:2,descr:"Make new comprehensive comments",category:"Fun",status:!1,editStatus:!1,editButtonStatus:!0,errorMessageStatus:!1}]}},tasksCatgColors:{catgs:{Toodle:"rgb(123, 123, 412)",Fun:"rgb(123, 3, 412)"}},colorGen:function(){for(var e=[],t=0;t<3;t++)e.push(Math.floor(255*Math.random()));return e},selectedCatg:null,percentageComplete:null,modalStatus:!1,sideBarStatus:!1,username:"Ugoo"}},actions:{initializeTaskDeletion:function(e,t){var s=e.getters,a=e.commit,n=s.allTasksNoCatgs,r={allTasksNoCatgs:n,taskToBeDeleted:t};a("deleteTask",r)}},mutations:{addNewTask:function(e,t){if(0==Object.keys(e.allTasksContainer.allTasks).length){var s=e.allTasksContainer.allTasks=Object.defineProperty({},t.category,{value:new Array(t),configurable:!0,enumerable:!0,writable:!0});e.allTasksContainer=Object.defineProperty({},"allTasks",{value:s,configurable:!0,enumerable:!0,writable:!0});var a=e.colorGen(),n=e.tasksCatgColors.catgs=Object.defineProperty({},t.category,{value:"rgb("+a[0]+","+a[1]+","+a[2]+")",configurable:!0,enumerable:!0,writable:!0});e.tasksCatgColors=Object.defineProperty({},"catgs",{value:n,configurable:!0,enumerable:!0,writable:!0})}else for(var r in e.allTasksContainer.allTasks){if(e.allTasksContainer.allTasks.hasOwnProperty.call(e.allTasksContainer.allTasks,t.category)){var c=t.category;e.allTasksContainer.allTasks[c].push(t),console.log(r);break}var o=e.allTasksContainer.allTasks;Object.defineProperty(o,t.category,{value:new Array(t),configurable:!0,enumerable:!0,writable:!0}),e.allTasksContainer=Object.defineProperty({},"allTasks",{value:o,configurable:!0,enumerable:!0,writable:!0});var l=e.colorGen(),i=e.tasksCatgColors.catgs;Object.defineProperty(i,t.category,{value:"rgb("+l[0]+","+l[1]+","+l[2]+")",configurable:!0,enumerable:!0,writable:!0}),e.tasksCatgColors=Object.defineProperty({},"catgs",{value:i,configurable:!0,enumerable:!0,writable:!0});break}},deleteTask:function(e,t){var s=t.taskToBeDeleted.category;e.allTasksContainer.allTasks[s].forEach((function(a){if(a.descr==t.taskToBeDeleted.descr){var n=e.allTasksContainer.allTasks[s].indexOf(a);e.allTasksContainer.allTasks[s].splice(n,1),0==e.allTasksContainer.allTasks[s].length&&delete e.allTasksContainer.allTasks[s]}}))},setselectedCatgFilter:function(e,t){e.selectedCatg=t},setPercentageComplete:function(e,t){e.percentageComplete=t},toggleModal:function(e){!1===e.modalStatus?e.modalStatus=!0:e.modalStatus=!1},toggleSideBar:function(e){!1===e.sideBarStatus?e.sideBarStatus=!0:e.sideBarStatus=!1}},getters:{allTasksNoCatgs:function(e){return[].concat.apply([],Object.values(e.allTasksContainer.allTasks))},completedTasks:function(e,t){console.log(e);var s=0;return t.allTasksNoCatgs.forEach((function(e){1==e.status&&s++})),s},uncompletedTasks:function(e,t){console.log(e);var s=0;return t.allTasksNoCatgs.forEach((function(e){0==e.status&&s++})),s}}}),x=N,A=s("5bda"),D=(s("3ca3"),s("ddb0"),s("6c02"));function U(e,t,s,n,r,c){var o=Object(a["B"])("mobileHeader"),l=Object(a["B"])("helloSection"),i=Object(a["B"])("catgSection"),u=Object(a["B"])("taskSection"),d=Object(a["B"])("newTaskModal"),g=Object(a["B"])("newTaskBtn");return Object(a["u"])(),Object(a["f"])(a["a"],null,[Object(a["i"])(o),Object(a["i"])(l),Object(a["i"])(i),Object(a["i"])(u),Object(a["i"])(d),Object(a["i"])(g)],64)}var E=s("00c1"),F={class:"helloSection"},I={class:"mainHeadings"};function V(e,t,s,n,r,c){return Object(a["u"])(),Object(a["f"])("section",F,[Object(a["g"])("h1",I," What's up, "+Object(a["D"])(r.username)+"! ",1)])}var H={name:"helloSection",data:function(){return{username:"Ugoo"}}};const G=k()(H,[["render",V]]);var J=G,q=(s("4fad"),{key:0,class:"catg"}),z=Object(a["g"])("div",{class:"catg_title sec_title"},[Object(a["g"])("h4",null," CATEGORIES ")],-1),L={class:"catg_scroll"},W={class:"catg_slide"},K={class:"catg_card__tskNum"},R=Object(a["g"])("div",{class:"catg_card__tskDescr"},[Object(a["g"])("h5",{class:"mainHeadings"}," All tasks ")],-1),Y={class:"catg_card__tskNum"},Q=Object(a["g"])("div",{class:"catg_card__tskDescr"},[Object(a["g"])("h5",{class:"mainHeadings"}," Completed ")],-1),X={class:"catg_card__tskNum"},Z=Object(a["g"])("div",{class:"catg_card__tskDescr"},[Object(a["g"])("h5",{class:"mainHeadings"}," Uncompleted ")],-1),ee=["onClick"],te={class:"catg_card__tskNum"},se={class:"catg_card__tskDescr"},ae={class:"mainHeadings"};function ne(e,t,s,n,r,c){var o=this,l=Object(a["B"])("progressBarAll"),i=Object(a["B"])("progressBarUncompleted"),u=Object(a["B"])("progressBar");return c.tasks?(Object(a["u"])(),Object(a["f"])("section",q,[z,Object(a["g"])("div",L,[Object(a["g"])("div",W,[Object(a["g"])("div",{class:"catg_card",onClick:t[0]||(t[0]=function(e){return c.sendCatgoryFilter("all",o.tasksNoCatgs)})},[Object(a["g"])("div",K,Object(a["D"])(this.tasksNoCatgs.length)+" tasks ",1),R,Object(a["i"])(l)]),Object(a["g"])("div",{class:"catg_card",onClick:t[1]||(t[1]=function(e){return c.sendCatgoryFilter(!0,o.tasksNoCatgs)})},[Object(a["g"])("div",Y,Object(a["D"])(this.completedTasks)+" tasks ",1),Q,Object(a["i"])(l)]),Object(a["g"])("div",{class:"catg_card",onClick:t[2]||(t[2]=function(e){return c.sendCatgoryFilter("false",o.tasksNoCatgs)})},[Object(a["g"])("div",X,Object(a["D"])(this.uncompletedTasks)+" tasks ",1),Z,Object(a["i"])(i)]),(Object(a["u"])(!0),Object(a["f"])(a["a"],null,Object(a["A"])(Object.entries(this.tasks),(function(e){return Object(a["u"])(),Object(a["f"])("div",{class:"catg_card",key:e.id,ref_for:!0,ref:"taskCategories",onClick:function(t){return c.sendCatgoryFilter(e[0],e)}},[Object(a["g"])("div",te,Object(a["D"])(e[1].length)+" tasks ",1),Object(a["g"])("div",se,[Object(a["g"])("h5",ae,Object(a["D"])(e[0][0].toUpperCase()+e[0].substring(1).toLowerCase()),1)]),Object(a["i"])(u,{tasksInView:e},null,8,["tasksInView"])],8,ee)})),128))])])])):Object(a["e"])("",!0)}var re={class:"progress"},ce=["value"],oe={class:"dummyProgressBar"},le={class:"dummyProgressBar_level",ref:"dummyProgressBar_level"};function ie(e,t,s,n,r,c){return Object(a["u"])(),Object(a["f"])("div",re,[Object(a["g"])("progress",{max:"100",value:c.percentageComplete},null,8,ce),Object(a["g"])("div",oe,[Object(a["g"])("div",le,null,512)])])}var ue={name:"progressBarAll",data:function(){return{uncompletedTasks:0,temp:null}},computed:{tasks:function(){return this.$store.getters.allTasksNoCatgs},numberOfTasks:function(){return this.tasks.length},completedTasks:function(){return this.numberOfTasks-this.uncompletedTasks},percentageComplete:function(){return Math.ceil(this.completedTasks/this.numberOfTasks*100)}},watch:{tasks:{handler:function(e){this.countUncompletedTasks(e)},deep:!0,immediate:!0},percentageComplete:{handler:function(){switch(this.percentageComplete){case 0:this.$refs.dummyProgressBar_level.style.width="6%";break;default:this.$refs.dummyProgressBar_level.style.width=this.percentageComplete+"%"}}}},methods:{countUncompletedTasks:function(e){var t=this,s=0;e.forEach((function(e){!1===e.status?(++s,t.uncompletedTasks=s):t.uncompletedTasks=s})),this.sendPercentageCompleted()},sendPercentageCompleted:function(){this.$store.commit("setPercentageComplete",this.percentageComplete)},calPercentageComplete:function(){this.completedTasks,this.numberOfTasks}}};s("e6bc");const de=k()(ue,[["render",ie],["__scopeId","data-v-716ecfc2"]]);var ge=de,be={class:"progress"},fe=["value"],ke={class:"dummyProgressBar"},me={class:"dummyProgressBar_level",ref:"dummyProgressBar_level"};function he(e,t,s,n,r,c){return Object(a["u"])(),Object(a["f"])("div",be,[Object(a["g"])("progress",{max:"100",value:c.percentageComplete},null,8,fe),Object(a["g"])("div",ke,[Object(a["g"])("div",me,null,512)])])}var pe={name:"progressBarUncompleted",data:function(){return{uncompletedTasks:void 0,temp:null}},computed:{tasks:function(){return this.$store.getters.allTasksNoCatgs},numberOfTasks:function(){return this.tasks.length},completedTasks:function(){return this.$store.getters.uncompletedTasks},percentageComplete:function(){return Math.ceil(this.uncompletedTasks/this.numberOfTasks*100)}},watch:{tasks:{handler:function(e){this.countUncompletedTasks(e)},deep:!0,immediate:!0},percentageComplete:{handler:function(){switch(this.percentageComplete){case 0:this.$refs.dummyProgressBar_level.style.width="6%";break;default:this.$refs.dummyProgressBar_level.style.width=this.percentageComplete+"%"}}}},methods:{countUncompletedTasks:function(e){var t=this,s=0;e.forEach((function(e){!1===e.status?(++s,t.uncompletedTasks=s):t.uncompletedTasks=s})),this.sendPercentageCompleted()},sendPercentageCompleted:function(){this.$store.commit("setPercentageComplete",this.percentageComplete)}}};s("da6d");const Oe=k()(pe,[["render",he],["__scopeId","data-v-cc6a47dc"]]);var je=Oe,ve={class:"progress"},Te=["value"],Ce={class:"dummyProgressBar"};function ye(e,t,s,n,r,c){return Object(a["u"])(),Object(a["f"])("div",ve,[Object(a["g"])("progress",{max:"100",value:c.percentageComplete},null,8,Te),Object(a["g"])("div",Ce,[Object(a["g"])("div",{class:"dummyProgressBar_level",ref:"dummyProgressBar_level",style:Object(a["q"])(c.getColorCode())},[Object(a["g"])("div",{class:"dummyProgressBar_indc",style:Object(a["q"])(c.getColorCode())},null,4)],4)])])}var Be={name:"progressBar",data:function(){return{uncompletedTasks:null}},props:{tasksInView:{type:Array,default:function(){return[]}}},computed:{tasks:function(){return[].concat.apply([],Object.values(this.tasksInView[1]))},tasksColors:function(){return this.$store.state.tasksCatgColors.catgs},numberOfTasks:function(){return this.tasks.length},completedTasks:function(){return this.numberOfTasks-this.uncompletedTasks},percentageComplete:function(){return Math.ceil(this.completedTasks/this.numberOfTasks*100)}},watch:{tasks:{handler:function(e){this.countUncompletedTasks(e)},deep:!0,immediate:!0},percentageComplete:{handler:function(){switch(this.percentageComplete){case 0:this.$refs.dummyProgressBar_level.style.width="6%";break;default:this.$refs.dummyProgressBar_level.style.width=this.percentageComplete+"%"}}}},methods:{countUncompletedTasks:function(e){var t=this,s=0;e.forEach((function(e){!1===e.status?(++s,t.uncompletedTasks=s):t.uncompletedTasks=s}))},getColorCode:function(){return"background: "+this.tasksColors[this.tasksInView[0]]}}};s("53b4");const Se=k()(Be,[["render",ye],["__scopeId","data-v-3f5f6143"]]);var we=Se,_e={name:"catgSection",components:{progressBarAll:ge,progressBarUncompleted:je,progressBar:we},data:function(){return{taskCategory:null}},props:{},computed:{tasks:function(){return this.$store.state.allTasksContainer.allTasks},tasksNoCatgs:function(){return this.$store.getters.allTasksNoCatgs},completedTasks:function(){return this.$store.getters.completedTasks},uncompletedTasks:function(){return this.$store.getters.uncompletedTasks}},methods:{sendCatgoryFilter:function(e,t){this.$store.commit("setselectedCatgFilter",e),this.setTasksCategory(t)},setTasksCategory:function(e){this.taskCategory=e}}};const Pe=k()(_e,[["render",ne]]);var Me=Pe,$e={key:0,class:"tasks"},Ne=Object(a["g"])("div",{class:"tasks_title sec_title"},[Object(a["g"])("h4",null," TASKS ")],-1),xe={class:"tasks_bars"},Ae={key:0,class:"tasks_bars__field___noEdit"},De=["onClick"],Ue=["onClick"],Ee={key:1,class:"tasks_bars__field___edit"},Fe=["onUpdate:modelValue"],Ie={key:0,class:"error_message"},Ve=Object(a["h"])(" You need to fill in a task "),He=Object(a["g"])("br",null,null,-1),Ge=Object(a["h"])(" or delete the field entirely "),Je=[Ve,He,Ge];function qe(e,t,s,n,r,c){var o=Object(a["B"])("check-icon"),l=Object(a["B"])("edit-icon"),i=Object(a["B"])("trash-icon"),u=Object(a["B"])("device-floppy-icon");return c.selectedCatg?(Object(a["u"])(),Object(a["f"])("section",$e,[Object(a["h"])(Object(a["D"])(e.tasks)+" ",1),Ne,Object(a["g"])("div",xe,[(Object(a["u"])(!0),Object(a["f"])(a["a"],null,Object(a["A"])(this.filteredTasks,(function(e){return Object(a["u"])(),Object(a["f"])("div",{class:Object(a["p"])(["tasks_bars__field",{completedBar:e.status}]),key:e.id},[0==e.editStatus?(Object(a["u"])(),Object(a["f"])("div",Ae,[Object(a["g"])("label",{class:"checkBox",style:Object(a["q"])(c.getColorCode(e.category))},[Object(a["g"])("div",{class:Object(a["p"])(["checkBox_inner",{completedCheckBox:e.status}])},null,2),Object(a["g"])("input",{type:"checkbox",name:"checkBox",id:"checkBox",onClick:function(t){return c.checkTask(e)}},null,8,De),Object(a["i"])(o,{class:Object(a["p"])(["header-icons check-icon",{completedCheck:e.status}])},null,8,["class"])],4),Object(a["g"])("div",{class:Object(a["p"])(["checkText",{completedTxt:e.status}]),onClick:function(t){return c.checkTask(e)}},Object(a["D"])(e.descr),11,Ue),Object(a["g"])("div",null,[e.editButtonStatus?(Object(a["u"])(),Object(a["d"])(l,{key:0,class:"icons header-icons",onClick:function(t){return c.showEditField(e)}},null,8,["onClick"])):Object(a["e"])("",!0)])])):Object(a["e"])("",!0),e.editStatus?(Object(a["u"])(),Object(a["f"])("div",Ee,[Object(a["g"])("div",null,[Object(a["i"])(i,{class:"icons header-icons",onClick:function(t){return c.deleteTask(e)}},null,8,["onClick"])]),Object(a["g"])("div",null,[Object(a["J"])(Object(a["g"])("input",{type:"text",name:"",id:"","onUpdate:modelValue":function(t){return e.descr=t}},null,8,Fe),[[a["G"],e.descr]])]),Object(a["g"])("div",null,[Object(a["i"])(u,{class:"icons header-icons",onClick:function(t){return c.verifyChange(e)}},null,8,["onClick"])]),e.errorMessageStatus?(Object(a["u"])(),Object(a["f"])("div",Ie,Je)):Object(a["e"])("",!0)])):Object(a["e"])("",!0)],2)})),128))])])):Object(a["e"])("",!0)}s("4de4");function ze(e,t){switch(e){case!e:return;case"all":return t;case!0:return t.filter((function(e){return 1==e.status}));case"false":return t.filter((function(e){return 0==e.status}));default:return t.filter((function(t){return t.category===e}))}}var Le=ze,We={name:"taskSection",data:function(){return{errorMssgStatus:!1,modalStatus:!1}},computed:{tasksColors:function(){return this.$store.state.tasksCatgColors.catgs},tasksNoCatgs:function(){return this.$store.getters.allTasksNoCatgs},selectedCatg:function(){return this.$store.state.selectedCatg},filteredTasks:function(){return Le(this.selectedCatg,this.tasksNoCatgs)}},methods:{checkTask:function(e){switch(e.status){case!1:e.status=!0,e.editButtonStatus=!1;break;case!0:e.status=!1,e.editButtonStatus=!0;break;default:break}},verifyChange:function(e){null==e.descr||""==e.descr||" "==e.descr?e.errorMessageStatus=!0:(this.toggleEditStatus(e),e.errorMessageStatus=!1)},showEditField:function(e){this.toggleEditStatus(e)},toggleEditStatus:function(e){0==e.editStatus?e.editStatus=!0:e.editStatus=!1},deleteTask:function(e){this.$store.dispatch("initializeTaskDeletion",e)},getColorCode:function(e){return"background: "+this.tasksColors[e]}}};const Ke=k()(We,[["render",qe]]);var Re=Ke,Ye={key:0,class:"newTaskModal"},Qe=Object(a["g"])("button",{class:"close_btn modal_close_btn"},[Object(a["g"])("div",{class:"ham-line"}),Object(a["g"])("div",{class:"ham-line"})],-1),Xe=[Qe],Ze={key:0,class:"error_message"},et={key:1},tt=Object(a["g"])("option",{value:""}," Select Category ",-1),st=["value"];function at(e,t,s,n,r,c){var o=this;return!0===c.modalStatus?(Object(a["u"])(),Object(a["f"])("div",Ye,[Object(a["g"])("div",{onClick:t[0]||(t[0]=function(e){return c.toggleModalStats()})},Xe),Object(a["g"])("div",null,[Object(a["J"])(Object(a["g"])("input",{autocomplete:"off",autofocus:"on",type:"text",name:"task-name",id:"task_name",placeholder:"What do you need to do?","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.newTask.descr=e}),ref:"taskName",onKeydown:t[2]||(t[2]=function(e){return o.erroMssgStatus=!1})},null,544),[[a["G"],r.newTask.descr]]),r.erroMssgStatus?(Object(a["u"])(),Object(a["f"])("div",Ze," This field is kinda required ")):Object(a["e"])("",!0),Object(a["J"])(Object(a["g"])("input",{type:"text",name:"task-catg",id:"task-catg",placeholder:"Add Category Eg.Personal","onUpdate:modelValue":t[3]||(t[3]=function(e){return r.newTask.category=e}),ref:"taskCategory"},null,512),[[a["G"],r.newTask.category]]),c.tasksNoCatgs[0]?(Object(a["u"])(),Object(a["f"])("div",et,[Object(a["J"])(Object(a["g"])("select",{name:"",id:"","onUpdate:modelValue":t[4]||(t[4]=function(e){return o.newTask.category=e})},[tt,(Object(a["u"])(!0),Object(a["f"])(a["a"],null,Object(a["A"])(Object.entries(this.tasks),(function(e){return Object(a["u"])(),Object(a["f"])("option",{key:e.id,value:e[0]},Object(a["D"])(e[0][0].toUpperCase()+e[0].substring(1)),9,st)})),128))],512),[[a["F"],this.newTask.category]])])):Object(a["e"])("",!0)]),Object(a["g"])("div",null,[Object(a["g"])("button",{type:"sumbit",onClick:t[5]||(t[5]=function(e){return c.verifyInput()})}," New task ")])])):Object(a["e"])("",!0)}s("ac1f"),s("5319");var nt={name:"newTaskModal",data:function(){return{erroMssgStatus:!1,newTask:{descr:null,category:null,status:!1}}},computed:{tasks:function(){return this.$store.state.allTasksContainer.allTasks},tasksNoCatgs:function(){return this.$store.getters.allTasksNoCatgs},modalStatus:function(){return this.$store.state.modalStatus}},methods:{toggleModalStats:function(){this.erroMssgStatus=!1,this.$store.commit("toggleModal"),this.resetNewTaskObject()},resetNewTaskObject:function(){this.newTask.descr=null,this.newTask.category=null},focusInput:function(){this.$refs.taskName.focus()},verifyInput:function(){if(null==this.newTask.descr||""==this.newTask.descr||" "==this.newTask.descr)return this.erroMssgStatus=!0,void this.focusInput();null!==this.newTask.category&&""!=this.newTask.category||(this.newTask.category="uncategorized");var e={descr:this.newTask.descr,category:this.newTask.category.toLowerCase().replace(" ",""),status:!1,editStatus:!1,editButtonStatus:!0,errorMessageStatus:!1};this.$store.commit("addNewTask",e),this.$store.commit("toggleModal"),this.resetNewTaskObject()}}};const rt=k()(nt,[["render",at]]);var ct=rt;function ot(e,t,s,n,r,c){var o=Object(a["B"])("plus-icon");return Object(a["u"])(),Object(a["f"])("button",{class:"newTaskBtn",onClick:t[0]||(t[0]=function(e){return c.toggleModalStatus()})},[Object(a["i"])(o,{class:"icons"})])}var lt={name:"newTaskBtn",methods:{toggleModalStatus:function(){this.$store.commit("toggleModal")}}};const it=k()(lt,[["render",ot]]);var ut=it,dt={name:"todos",components:{mobileHeader:E["a"],helloSection:J,catgSection:Me,taskSection:Re,newTaskModal:ct,newTaskBtn:ut},data:function(){return{username:"User"}},computed:{sideBarStatus:function(){return this.$store.state.sideBarStatus},allTasks:function(){return this.$store.state.allTasks},allTasksWithoutCatg:function(){return[].concat.apply([],Object.values(this.allTasks[0]))}},methods:{showSideBar:function(){screen.width<450&&(0==this.sideBarStatus?this.sideBarStatus=!0:this.sideBarStatus=!1)},hideSideBar:function(){screen.width<450&&(0==this.sideBarStatus||1==this.sideBarStatus)&&(this.sideBarStatus=!1)},setSelectedCatg:function(e){this.selectedCatg=e},createNewAllTasksData:function(){this.newAllTasksData=[].concat.apply([],Object.values(this.allTasks[0]))}}};const gt=k()(dt,[["render",U]]);var bt=gt,ft=[{path:"/",redirect:"/todos"},{path:"/todos",name:"Todos",component:bt},{path:"/notes",name:"Notes",component:function(){return s.e("notesApp").then(s.bind(null,"d250"))}}],kt=Object(D["a"])({history:Object(D["b"])("/Toodle/"),routes:ft}),mt=kt;Object(a["c"])(M).use(mt).use(x).use(A["a"]).mount("#app")},"59ba":function(e,t,s){},"8f41":function(e,t,s){"use strict";s("c326")},c326:function(e,t,s){},d20a:function(e,t,s){},da6d:function(e,t,s){"use strict";s("59ba")},e517:function(e,t,s){},e6bc:function(e,t,s){"use strict";s("d20a")}});
//# sourceMappingURL=app.d61653df.js.map