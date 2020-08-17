(this.webpackJsonptimetabler=this.webpackJsonptimetabler||[]).push([[0],{117:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(44);"development"===n.n(c).a.env.NODE_ENV&&r.a.lazy((function(){return n.e(2).then(n.t.bind(null,315,7))}))(r.a,{trackAllPureComponents:!0});var u=n(161),l=n(12),i=n.n(l),o=(n(96),n(10)),s=n(13),f=n(155),m=n(166),d=n(158),b=n(159),p=n(160),v=n(81),j=n(11),h=n(162),E=n(22),O=n(35),y=function(e){var t=[];return e.forEach((function(e){e.classes.forEach((function(e){e.sessions.forEach((function(e){var n=e.teacher;t.includes(n)||t.push(n)}))}))})),t},g=Object(a.createContext)(void 0);function x(e){var t=e.children,n=Object(a.useState)([]),c=Object(s.a)(n,2),u=c[0],l=c[1],i=Object(a.useState)(Object(E.a)(Array(13)).map((function(){return Array(6).fill(0)}))),o=Object(s.a)(i,2),f=o[0],m=o[1],d=Object(a.useState)([]),b=Object(s.a)(d,2),p=b[0],v=b[1],j=Object(a.useState)([]),h=Object(s.a)(j,2),x=h[0],k=h[1],S=Object(a.useState)(13),w=Object(s.a)(S,2),N=w[0],P=w[1],T=Object(a.useState)(0),M=Object(s.a)(T,2),A=M[0],C=M[1],I=Object(a.useState)(0),z=Object(s.a)(I,2),B=z[0],J=z[1],W=Object(a.useState)([]),D=Object(s.a)(W,2),F=D[0],q=D[1],R=Object(O.b)(y),G=Object(s.a)(R,1)[0];return Object(a.useEffect)((function(){G(u).then((function(e){v(e),k([])}))}),[G,u]),r.a.createElement(g.Provider,{value:{subjects:u,week:f,allTeachers:p,maxPeriods:N,minPeriods:A,maxBreaks:B,selectedTeachers:x,timetables:F,setSubjects:l,setMaxPeriods:P,setMinPeriods:C,setMaxBreaks:J,setSelectedTeachers:k,setWeek:m,setTimetables:q}},t)}var k=function(){return Object(a.useContext)(g)},S=function(){var e=k(),t=e.maxBreaks,n=e.setMaxBreaks;return r.a.createElement(h.a,{fullWidth:!0,inputProps:{min:0,max:11},label:"Max breaks",type:"number",value:t,variant:"outlined",onChange:function(e){n(+e.target.value)}})},w={min:0,max:13},N=function(){var e=k(),t=e.minPeriods,n=e.maxPeriods,a=e.setMaxPeriods;var c=n<t?"Max periods must be bigger than or equal to Min periods":"";return r.a.createElement(h.a,{fullWidth:!0,error:n<t,helperText:c,inputProps:w,label:"Max periods per day",type:"number",value:n,variant:"outlined",onChange:function(e){a(+e.target.value)}})},P={min:0,max:13};function T(){var e=k(),t=e.maxPeriods,n=e.minPeriods,a=e.setMinPeriods;var c=t<n?"Min periods must be smaller than or equal to Max periods":"";return r.a.createElement(h.a,{fullWidth:!0,error:t<n,helperText:c,inputProps:P,label:"Min periods per day",type:"number",value:n,variant:"outlined",onChange:function(e){a(+e.target.value)}})}var M=n(52);function A(e){return"number"===typeof e}function C(e){return"string"===typeof e}function I(e){var t=e,n=t.day,a=t.start,r=t.length,c=t.room,u=t.teacher;return A(n)&&A(a)&&A(r)&&C(c)&&C(u)}function z(e){var t=e,n=t.group,a=t.max,r=t.empty,c=t.sessions;return C(n)&&A(a)&&A(r)&&function(e){if(!Array.isArray(e))return!1;var t,n=Object(M.a)(e);try{for(n.s();!(t=n.n()).done;){if(!I(t.value))return!1}}catch(a){n.e(a)}finally{n.f()}return!0}(c)}function B(e){var t=e,n=t.subjectId,a=t.subjectName,r=t.credits,c=t.classes;return C(n)&&C(a)&&A(r)&&function(e){if(!Array.isArray(e))return!1;var t,n=Object(M.a)(e);try{for(n.s();!(t=n.n()).done;){if(!z(t.value))return!1}}catch(a){n.e(a)}finally{n.f()}return!0}(c)}var J=function(){var e=k().setSubjects;return r.a.createElement(f.a,{component:"label",variant:"outlined"},"Input subjects",r.a.createElement("input",{hidden:!0,accept:".json",type:"file",value:void 0,onChange:function(t){if(t.target.files){var n=t.target.files[0];if(n.type.endsWith("json")){var a=new FileReader;a.onload=function(t){var n;if(null===(n=t.target)||void 0===n?void 0:n.result){var a=JSON.parse(t.target.result);!function(e){if(!Array.isArray(e))return!1;var t,n=Object(M.a)(e);try{for(n.s();!(t=n.n()).done;){if(!B(t.value))return!1}}catch(a){n.e(a)}finally{n.f()}return!0}(a)?console.log("Invalid file data."):e(a)}},a.readAsText(n),t.target.value=""}}}}))},W=n(165),D=n(71),F=n.n(D),q=n(70),R=n.n(q),G=n(163);function U(){var e=Object(o.a)(["\n  margin-right: 8px;\n"]);return U=function(){return e},e}var V=function(e){return r.a.createElement(h.a,Object.assign({},e,{label:"Teachers to avoid",variant:"outlined"}))},_=r.a.createElement(R.a,{fontSize:"small"}),H=r.a.createElement(F.a,{fontSize:"small"}),K=Object(j.a)(W.a)(U()),L=function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,{checked:t.selected,checkedIcon:H,icon:_}),e)},Q=function(){var e=k(),t=e.allTeachers,n=e.selectedTeachers,a=e.setSelectedTeachers;return r.a.createElement(G.a,{disableCloseOnSelect:!0,fullWidth:!0,multiple:!0,id:"teachers-select",noOptionsText:"Subjects input required",options:t,renderInput:V,renderOption:L,value:n,onChange:function(e,t){a(t)}})},X=n(76),Y=n.n(X);function Z(){var e=Object(o.a)(["\n  height: ","px !important;\n"]);return Z=function(){return e},e}function $(){var e=Object(o.a)(["\n  width: ","px;\n  height: ","px;\n  display: flex;\n  border: solid black;\n  border-width: 0 1px 1px 0;\n  align-items: center;\n  justify-content: center;\n  user-select: none;\n  text-align: center;\n"]);return $=function(){return e},e}function ee(){var e=Object(o.a)(["\n  display: flex;\n"]);return ee=function(){return e},e}function te(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  border: solid black;\n  border-width: 1px 0 0 1px;\n  width: fit-content;\n"]);return te=function(){return e},e}var ne=j.a.div(te()),ae=j.a.div(ee()),re=j.a.div($(),48,48),ce=Object(j.a)(Y.a)(Z(),336),ue=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(1),l=Object(s.a)(u,2),i=l[0],o=l[1],f=k(),m=f.week,d=f.setWeek;function b(e,t,n){var a=JSON.parse(JSON.stringify(m));a[e][t]=n,d(a)}return Object(a.useEffect)((function(){return document.body.onmousedown=function(){return c(!0)},document.body.onmouseup=function(){return c(!1)},function(){document.body.onmousedown=null,document.body.onmouseup=null}}),[]),r.a.createElement(ne,null,r.a.createElement(ae,null,r.a.createElement(re,null),Object(E.a)(Array(6)).map((function(e,t){return r.a.createElement(re,{key:t},"Th\u1ee9 ",r.a.createElement("br",null)," ",t+2)}))),r.a.createElement(ce,null,Object(E.a)(Array(13)).map((function(e,t){return r.a.createElement(ae,{key:t},r.a.createElement(re,null,"Ti\u1ebft ",r.a.createElement("br",null)," ",t+1),Object(E.a)(Array(6)).map((function(e,a){return r.a.createElement(re,{key:a,onMouseDown:function(){return function(e,t){var n=1-m[e][t];o(n),b(e,t,n)}(t,a)},onMouseOver:function(){return e=t,r=a,void(n&&b(e,r,i));var e,r}},!!m[t][a]&&"\u274c")})))}))))};function le(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: ","px;\n"]);return le=function(){return e},e}function ie(){var e=Object(o.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  row-gap: ","px;\n"]);return ie=function(){return e},e}var oe=Object(v.a)(),se=j.a.div(ie(),oe.spacing(3)),fe=j.a.div(le(),337),me=function(){return r.a.createElement(se,null,r.a.createElement(fe,null,r.a.createElement(J,null)),r.a.createElement(fe,null,r.a.createElement(Q,null)),r.a.createElement(fe,null,"Periods to avoid",r.a.createElement(ue,null)),r.a.createElement(fe,null,r.a.createElement(N,null)),r.a.createElement(fe,null,r.a.createElement(T,null)),r.a.createElement(fe,null,r.a.createElement(S,null)))},de=n(53),be=n.n(de),pe=n(77),ve=n(157),je=n(82),he=function(e){var t=e.subjects,n=e.selectedTeachers,a=e.week,r=e.maxBreaks,c=e.maxPeriods,u=e.minPeriods,l=[],i=JSON.parse(JSON.stringify(a)),o=[];function s(e,t){e.sessions.forEach((function(e){for(var n=e.day,a=e.start,r=e.length,c=a;c<a+r;c++)i[c-1][n-2]=t}))}return function e(a){a!==t.length?t[a].classes.forEach((function(r){r.sessions.forEach((function(e){var t=e.day,a=e.start,r=e.length,c=e.teacher;if(n.includes(c))return!1;for(var u=a;u<a+r;u++)if(0!==i[u-1][t-2])return!1})),function(e,t){var n=t.subjectId,a=t.subjectName;o.push(Object(je.a)({subjectId:n,subjectName:a},e)),s(e,2)}(r,t[a]),e(a+1),s(o.pop(),0)})):function(){for(var e=0;e<6;e++){for(var t=0,n=0,a=-1,l=0;l<13;l++)2===i[l][e]&&(++t>1&&(n=Math.max(l-a-1,n)),a=l);if(n>r||t>0&&(t<u||t>c))return!1}return!0}()&&l.push(JSON.parse(JSON.stringify(o)))}(0),l};function Ee(){var e=Object(o.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -","px;\n  margin-left: -","px;\n"]);return Ee=function(){return e},e}function Oe(){var e=Object(o.a)(["\n  position: relative;\n"]);return Oe=function(){return e},e}var ye=j.a.div(Oe()),ge=Object(j.a)(ve.a).attrs((function(e){return{halfsize:e.size/2}}))(Ee(),(function(e){return e.halfsize}),(function(e){return e.halfsize})),xe=function(e){var t=e.closeDialog,n=k(),a=n.subjects,c=n.selectedTeachers,u=n.week,l=n.maxBreaks,i=n.maxPeriods,o=n.minPeriods,m=n.setTimetables,d=Object(O.b)(he),b=Object(s.a)(d,2),p=b[0],v=b[1].status;function j(){return(j=Object(pe.a)(be.a.mark((function e(){var n;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p({subjects:a,selectedTeachers:c,week:u,maxBreaks:l,maxPeriods:i,minPeriods:o});case 2:n=e.sent,console.log("Timetables:",n),m(n),t();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(ye,null,r.a.createElement(f.a,{color:"primary",disabled:v===O.a.RUNNING,onClick:function(){return j.apply(this,arguments)}},"Build timetables"),v===O.a.RUNNING&&r.a.createElement(ge,{size:24}))},ke=n(156),Se=n(118),we=n(78),Ne=n.n(we);function Pe(){var e=Object(o.a)(["\n  position: absolute;\n  right: ","px;\n  top: ","px;\n  color: ",";\n"]);return Pe=function(){return e},e}var Te=Object(v.a)(),Me=Object(j.a)(ke.a)(Pe(),Te.spacing(1),Te.spacing(1),Te.palette.grey[500]),Ae=function(e){var t=e.closeDialog;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Se.a,{variant:"h6"},"Input"),r.a.createElement(Me,{onClick:t},r.a.createElement(Ne.a,null)))},Ce=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];function u(){c(!1)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{color:"primary",variant:"contained",onClick:function(){c(!0)}},"Open dialog"),r.a.createElement(m.a,{open:n,scroll:"body",onClose:u},r.a.createElement(d.a,{disableTypography:!0},r.a.createElement(Ae,{closeDialog:u})),r.a.createElement(b.a,{dividers:!0},r.a.createElement(me,null)),r.a.createElement(p.a,null,r.a.createElement(xe,{closeDialog:u}))))};function Ie(){var e=Object(o.a)(["\n  width: 144px;\n  height: 40px;\n  border: 1px solid black;\n  vertical-align: top;\n  padding: 9px;\n"]);return Ie=function(){return e},e}function ze(){var e=Object(o.a)(["\n  border: 1px solid black;\n  border-collapse: collapse;\n  table-layout: fixed;\n  user-select: none;\n"]);return ze=function(){return e},e}var Be=j.a.table(ze()),Je=j.a.td(Ie()),We=function(e){return Object(E.a)(Array(14)).map((function(t,n){return Object(E.a)(Array(7)).map((function(t,a){return!n&&a?"Th\u1ee9 "+(a+1):n&&!a?"Ti\u1ebft "+n:n||a?"":""+(e+1)}))}))},De=function(e){var t=e.index,n=Object(a.useState)(We(t)),c=Object(s.a)(n,2),u=c[0],l=c[1],i=k().timetables;return Object(a.useEffect)((function(){var e,n=We(t);null===(e=i[t])||void 0===e||e.forEach((function(e){var t=e.subjectId,a=e.subjectName,r=e.group;e.sessions.forEach((function(e){var c=e.day,u=e.start,l=e.length;n[u][c-1]={length:l,subjectId:t,subjectName:a,group:r};for(var i=1;i<l;i++)n[u+i][c-1]=null}))})),l(n)}),[t,i]),r.a.createElement(Be,null,r.a.createElement("tbody",null,u.map((function(e,t){return r.a.createElement("tr",{key:t},e.map((function(e,t){return null!==e&&("object"===typeof e?r.a.createElement(Je,{key:t,rowSpan:e.length},e.subjectId,r.a.createElement("br",null),e.subjectName,r.a.createElement("br",null),"Nh\xf3m "+e.group):r.a.createElement(Je,{key:t},e))})))}))))},Fe=n(79),qe=n.n(Fe),Re=n(80),Ge=n.n(Re);function Ue(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  width: 100%;\n  align-items: center;\n"]);return Ue=function(){return e},e}function Ve(){var e=Object(o.a)(["\n  font-size: 60px;\n"]);return Ve=function(){return e},e}function _e(){var e=Object(o.a)(["\n  font-size: 60px;\n"]);return _e=function(){return e},e}var He=Object(j.a)(qe.a)(_e()),Ke=Object(j.a)(Ge.a)(Ve()),Le=j.a.div(Ue()),Qe=function(){var e=Object(a.useState)(0),t=Object(s.a)(e,2),n=t[0],c=t[1],u=k().timetables;return Object(a.useEffect)((function(){c(0)}),[u]),r.a.createElement(Le,null,r.a.createElement(ke.a,{color:"primary",disabled:!n,onClick:function(){return c(n-1)}},r.a.createElement(He,null)),r.a.createElement(De,{index:n}),r.a.createElement(ke.a,{color:"primary",disabled:!u.length||n===u.length-1,onClick:function(){return c(n+1)}},r.a.createElement(Ke,null)))};function Xe(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n  justify-content: space-evenly;\n"]);return Xe=function(){return e},e}var Ye=j.a.div(Xe()),Ze=function(){return r.a.createElement(x,null,r.a.createElement(Ye,null,r.a.createElement(Ce,null),r.a.createElement(Qe,null)))};i.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null),r.a.createElement(Ze,null)),document.getElementById("root"))},91:function(e,t,n){e.exports=n(117)}},[[91,1,3]]]);
//# sourceMappingURL=main.53bdb6cf.chunk.js.map