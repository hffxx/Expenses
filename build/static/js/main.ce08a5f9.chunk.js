(this.webpackJsonpexpenses=this.webpackJsonpexpenses||[]).push([[0],{146:function(e,t,n){e.exports=n(169)},156:function(e,t,n){},157:function(e,t,n){},169:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(34),i=n.n(l),o=n(16),c=(n(156),n(157),n(97)),s=n(19),u=n(253),d=n(260),p=n(244),m=n(11),E=n(238),f=n(249),g=n(14),b=function(e,t,n){return n?e<t?1:-1:e>t?1:-1},x=function(e,t){var n=t.description,a=void 0===n?"":n,r=t.sortBy,l=t.startDate,i=t.endDate,o=t.expensesType;return e.filter((function(e){var t="number"!==typeof l||e.createdAt>=l,n="number"!==typeof i||e.createdAt<=i,r=e.description.toLowerCase().includes(a.toLowerCase()),c=""===o||"all"===o||o===e.expenseType;return t&&n&&r&&c})).sort((function(e,t){return["dateNew","dateOld"].indexOf(r)>-1?b(e.createdAt,t.createdAt,"dateNew"===r):["amountHigh","amountLow"].indexOf(r)>-1?b(e.amount,t.amount,"amountHigh"===r):void 0}))},v=n(114),h=n.n(v),y=function(e){var t={margin:"15px 0px 15px 0px",transition:"color 1s"};return e>0?Object(g.a)(Object(g.a)({},t),{},{color:"green"}):e<0?Object(g.a)(Object(g.a)({},t),{},{color:"red"}):Object(g.a)(Object(g.a)({},t),{},{color:"grey"})},O=function(){var e=Object(o.c)((function(e){return x(e.expenses.present,e.filters)})),t=Object(a.useMemo)((function(){return e.map((function(e){var t=e.expenseType,n=e.amount;return"Bill"===t?-Number(n):Number(n)})).reduce((function(e,t){return e+t}),0)}),[e]);return r.a.createElement(p.a,{variant:"h4",sx:y(t)},r.a.createElement(h.a,{end:t,preserveValue:!0,duration:1,prefix:"$",decimals:2,useEasing:!0}))},j=n(245),T=n(252),w=n(236),C=n(120),S=n.n(C),D=n(121),_=n.n(D),L=n(118),A=n.n(L),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:"REMOVE_EXPENSE",deleteList:e}},R=n(227),N=n(228),P=n(52),B=n.n(P),k=n(229),M=n(232),V=n(248),X=n(242),Y=n(251),F=n(234),H=n(241),J={inputModal:{margin:"5px",display:"flex",alignItems:"center",justifyContent:"center"},radio:{margin:"5px",display:"flex",alignItems:"center",justifyContent:"space-around"},btnAdd:{marginTop:"20px",display:"flex",alignItems:"center",justifyContent:"center"}};var W=function(e){var t=e.handleClose,n=e.expense,l=!!e.expense,i=Object(o.b)(),c=Object(s.f)(),u=Object(a.useState)(function(e){return{id:(null===e||void 0===e?void 0:e.id)||"",description:(null===e||void 0===e?void 0:e.description)||"",amount:(null===e||void 0===e?void 0:e.amount)||"",createdAt:(null===e||void 0===e?void 0:e.createdAt)||B()().valueOf(),note:(null===e||void 0===e?void 0:e.note)||"",expenseType:(null===e||void 0===e?void 0:e.expenseType)||"Bill"}}(n)),d=Object(m.a)(u,2),f=d[0],b=d[1],x=Object(a.useState)(""),v=Object(m.a)(x,2),h=v[0],y=v[1];return Object(a.useEffect)((function(){""===f.amount||/^\d+(\.\d{1,2})?$/.test(f.amount)?y(""):y("Number is not valid")}),[f.amount]),r.a.createElement(j.a,null,r.a.createElement(p.a,{gutterBottom:!0,variant:"h3",align:"center"},l?"Edit Expense":"Add Expense"),r.a.createElement(E.a,{container:!0,alignItems:"center",justifyContent:"center"},r.a.createElement(E.a,{item:!0,lg:6,sx:J.inputModal},r.a.createElement(M.a,{value:f.description,label:"Description",placeholder:"Enter an Description",variant:"outlined",onChange:function(e){return b(Object(g.a)(Object(g.a)({},f),{},{description:e.target.value}))},inputProps:{maxLength:10}})),r.a.createElement(E.a,{item:!0,lg:6,sx:J.inputModal},r.a.createElement(M.a,{label:"Amount",placeholder:"Enter an Amount",variant:"outlined",onChange:function(e){var t=e.target.value;!isNaN(t)&&b(Object(g.a)(Object(g.a)({},f),{},{amount:t}))},value:f.amount,error:!!h,inputProps:{maxLength:15},InputProps:{endAdornment:r.a.createElement("span",null,"$")}})),r.a.createElement(E.a,{item:!0,lg:6,sx:J.inputModal},r.a.createElement(M.a,{value:f.note,label:"Note",placeholder:"Enter a Note",variant:"outlined",onChange:function(e){return b(Object(g.a)(Object(g.a)({},f),{},{note:e.target.value}))},inputProps:{maxLength:15}})),r.a.createElement(E.a,{item:!0,lg:6,sx:J.inputModal},r.a.createElement(R.b,{dateAdapter:N.a},r.a.createElement(k.a,{value:f.createdAt,onChange:function(e){b(null!==e?Object(g.a)(Object(g.a)({},f),{},{createdAt:e.valueOf()}):Object(g.a)(Object(g.a)({},f),{},{createdAt:null}))},renderInput:function(e){return r.a.createElement(M.a,e)}}))),r.a.createElement(E.a,{item:!0,lg:6,sx:J.radio},r.a.createElement(V.a,{component:"fieldset"},r.a.createElement(X.a,{row:!0,"aria-label":"expenseType",name:"row-radio-buttons-group",value:f.expenseType,onChange:function(e){return b(Object(g.a)(Object(g.a)({},f),{},{expenseType:e.target.value}))}},r.a.createElement(Y.a,{value:"Bill",control:r.a.createElement(F.a,null),label:"Bill"}),r.a.createElement(Y.a,{value:"Earning",control:r.a.createElement(F.a,null),label:"Earning"})))),r.a.createElement(E.a,{item:!0,lg:6,sx:J.btnAdd},r.a.createElement(H.a,{onClick:function(){i(l?{type:"EDIT_EXPENSE",id:f.id,updates:f}:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.description,n=void 0===t?"":t,a=e.note,r=void 0===a?"":a,l=e.amount,i=void 0===l?0:l,o=e.createdAt,c=void 0===o?void 0:o,s=e.expenseType,u=void 0===s?"Bill":s;return{type:"ADD_EXPENSE",expense:{id:A()(),description:n,note:r,amount:i,createdAt:c,expenseType:u}}}(f)),t(),c.push("/")},variant:"contained",disabled:!!h||""===f.description||""===f.amount||!B()(f.createdAt).isValid(),size:"large"},l?"Edit Expense":"Add Expense"))))},$={modalForm:{position:"absolute",top:"35%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",outline:"none",boxShadow:24,p:4,borderRadius:"10px"},modal:{display:"flex",alignItems:"center",justifyContent:"center"},button:{background:"  #258e25",color:"white",transition:"0.5s","&:hover":{background:"#1a651a"}}},z=function(e){var t=e.expense,n=Object(a.useState)(!1),l=Object(m.a)(n,2),i=l[0],o=l[1],c=!!t;return r.a.createElement(j.a,{sx:c?$.modal:{}},c?r.a.createElement(S.a,{onClick:function(){return o(!0)}}):r.a.createElement(T.a,{disableRipple:!0,onClick:function(){return o(!0)},variant:"extended",sx:$.button},r.a.createElement(_.a,null),r.a.createElement(p.a,{variant:"string"},"Add")),r.a.createElement(w.a,{open:i,onClose:function(){return o(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description"},r.a.createElement(j.a,{sx:$.modalForm},r.a.createElement(W,{handleClose:function(){return o(!1)},expense:t}))))},U=n(122),q=n.n(U),G=n(123),K=n.n(G),Q=n(82),Z=n.n(Q),ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:"REMOVE_VISIBLE",visibleDeleteList:e}},te={undoRedo:{display:"flex",alignItems:"center",margin:"0px 10px 0px 10px",width:"50px",color:"White",background:"#6666ff",transition:"0.5s","&:hover":{background:"#3333ff"}}};var ne=function(e){var t=e.type,n=Object(o.b)(),a=Object(o.c)((function(e){return{expensesFuture:e.expenses.future,expensesPast:e.expenses.past}})),l=a.expensesFuture,i=a.expensesPast;return r.a.createElement(T.a,{disableRipple:!0,variant:"extended",sx:te.undoRedo,onClick:function(){n({type:"CLEAR_LIST"}),n(Q.ActionCreators[t]())},disabled:"undo"===t&&0===i.length||"redo"===t&&0===l.length},"undo"===t&&r.a.createElement(q.a,null)||"redo"===t&&r.a.createElement(K.a,null))},ae={container:{display:"flex",justifyContent:"center",alignItems:"center",margin:"10px"}};var re=function(){return r.a.createElement(u.a,{sx:ae.container},r.a.createElement(ne,{type:"undo"}),r.a.createElement(z,null),r.a.createElement(ne,{type:"redo"}))},le={sideMenu:{display:"flex",flexDirection:"column",borderRadius:"10px",justifyContent:"center",alignItems:"center",padding:"10px"}},ie=function(){return r.a.createElement(f.a,{sx:le.sideMenu,variant:"elevation",elevation:4},r.a.createElement(p.a,{variant:"h4"},"Total Balance"),r.a.createElement(O,null),r.a.createElement(re,null))},oe=function(){try{return JSON.parse(localStorage.getItem("expense")||"[]")}catch(e){console.error("err"),localStorage.setItem("expense","[]")}},ce=n(258),se=n(259),ue=n(254),de=n(255),pe=n(256),me=n(235),Ee=n(101),fe=n.n(Ee),ge=n(100),be=n.n(ge),xe=[{field:"title",headerName:"Title",align:"center",sort:!1},{field:"amount",headerName:"Amount",align:"center",sort:!0},{field:"note",headerName:"Note",align:"center",sort:!1},{field:"createdAt",headerName:"Created At",align:"center",sort:!0}],ve={amount:{amountLow:{component:be.a},amountHigh:{component:fe.a}},createdAt:{dateOld:{component:be.a},dateNew:{component:fe.a}}},he=function(e){return{type:"SET_END_DATE",endDate:e}},ye=function(e){return{type:"SET_START_DATE",startDate:e}},Oe=function(e){return{type:"SET_SORT_BY",sortBy:e}},je=n(83),Te=n.n(je),we=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return{deleteList:e.deleteList,visibleExpenses:x(e.expenses.present,e.filters)}})),n=t.deleteList,a=t.visibleExpenses.map((function(e){return e.id})),l=n.filter((function(e){return a.includes(e)}));return r.a.createElement(Te.a,{sx:{marginLeft:"10px",transition:"0.5s","&:hover":{color:"gray",cursor:"pointer"}},onClick:function(){e(ee(l)),e(I(l)),a.length===l.length&&e({type:"RESET"})}})},Ce=n(237),Se=n(221),De={button:{marginTop:"10px",color:"white",background:"#0066ff",transition:"0.5s","&:hover":{background:"#0047b3"}}};var _e=function(){var e=Object(o.b)();return r.a.createElement(T.a,{disableRipple:!0,sx:De.button,variant:"extended",onClick:function(){return e({type:"RESET"})}},r.a.createElement(p.a,{variant:"string"},"Reset Filters"))},Le={filterList:{display:"flex",margin:"5px",flexDirection:"column",alignItems:"center",justifyContent:"space-between",borderRadius:"10px"},filterListItem:{margin:"10px 0px 10px 0px"}},Ae=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.filters}));return r.a.createElement(j.a,{sx:Le.filterList,elevation:0},r.a.createElement(p.a,{gutterBottom:!0,variant:"h3",align:"center"},"Filters"),r.a.createElement(E.a,{item:!0,lg:6,sx:Le.filterListItem},r.a.createElement(V.a,{component:"fieldset"},r.a.createElement(Se.a,{component:"legend",disabled:!0,sx:{marginBottom:"10px"}},"Expenses Type"),r.a.createElement(X.a,{"aria-label":"expenseType",name:"radio-buttons-group",value:t.expensesType,onChange:function(t){return e({type:"SET_EXPENSES_TYPE",expensesType:t.target.value})}},r.a.createElement(Y.a,{sx:{margin:0},value:"all",control:r.a.createElement(F.a,null),label:"All"}),r.a.createElement(Y.a,{sx:{margin:0},value:"Bill",control:r.a.createElement(F.a,null),label:"Bill"}),r.a.createElement(Y.a,{sx:{margin:0},value:"Earning",control:r.a.createElement(F.a,null),label:"Earning"})))),r.a.createElement(E.a,{item:!0,lg:6,sx:Le.filterListItem},r.a.createElement(M.a,{sx:Le.filter,id:"outlined-basic",label:"Title filter",variant:"outlined",value:t.description,onChange:function(t){e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:"SET_TEXT_FILTER",description:e}}(t.target.value))}})),r.a.createElement(R.b,{dateAdapter:N.a},r.a.createElement(E.a,{item:!0,lg:6,sx:Le.filterListItem},r.a.createElement(k.a,{label:"Start Date",value:t.startDate,onChange:function(t){e(ye(t?t.startOf("day").valueOf():null))},renderInput:function(e){return r.a.createElement(M.a,e)},inputVariant:"outlined"})),r.a.createElement(E.a,{item:!0,lg:6,sx:Le.filterListItem},r.a.createElement(k.a,{label:"End Date",value:t.endDate,onChange:function(t){e(he(t?t.endOf("day").valueOf():null))},renderInput:function(e){return r.a.createElement(M.a,e)}}))),r.a.createElement(E.a,{item:!0,lg:6,sx:Le.filterListItem},r.a.createElement(_e,null)))},Ie=n(124),Re=n.n(Ie),Ne={description:"",sortBy:"",startDate:null,endDate:null,expensesType:"all"},Pe=[],Be={modalForm:{position:"absolute",top:"35%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",boxShadow:24,p:4,borderRadius:"10px",outline:"none"},modal:{display:"flex",alignItems:"center",justifyContent:"center"},button:{background:"  #258e25",color:"white",transition:"0.5s","&:hover":{background:"#1a651a"}},gear:{marginLeft:" 5px",transition:"0.5s","&:hover":{color:"gray",cursor:"pointer"}}};var ke=function(){var e=Object(o.c)((function(e){return e.filters})),t=Object(a.useState)(!1),n=Object(m.a)(t,2),l=n[0],i=n[1],c=function(){return JSON.stringify(Ne)===JSON.stringify(e)};return console.log(c()),r.a.createElement(j.a,{sx:Be.modal},r.a.createElement(Ce.a,{color:"primary",variant:"dot",invisible:c()},r.a.createElement(Re.a,{sx:Be.gear,onClick:function(){return i(!0)}})),r.a.createElement(w.a,{open:l,onClose:function(){return i(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description"},r.a.createElement(j.a,{sx:Be.modalForm},r.a.createElement(Ae,null))))},Me={firstRow:{"&:first-of-type":{width:"2rem"}},tableCells:{userSelect:"none","&:hover":{cursor:"pointer"},"&:last-of-type":{width:"4.1rem"}},settings:{display:"flex",justifyContent:"flex-end",alignItems:"center"},lastRow:{width:"20px"},typography:{display:"flex",alignItems:"center",justifyContent:"center"}};var Ve=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return{visibleExpenses:x(e.expenses.present,e.filters),deleteList:e.deleteList}})),n=t.visibleExpenses,a=t.deleteList,l=n.map((function(e){return e.id})),i=l.filter((function(e){return!a.includes(e)})),c=a.filter((function(e){return l.includes(e)})),s=Object(o.c)((function(e){return e.filters}));return r.a.createElement(ue.a,null,r.a.createElement(de.a,null,r.a.createElement(pe.a,{align:"center",sx:Me.firstRow},r.a.createElement(me.a,{onChange:function(){c.length===n.length?e(ee(c)):e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:"ADD_ALL",deleteList:e}}(i))},indeterminate:c.length>0&&c.length!==n.length,checked:c.length>0&&c.length===n.length})),xe.map((function(t){return r.a.createElement(pe.a,{key:t.field,align:t.align,sx:t.sort?Me.tableCells:{},onClick:function(){return t.sort&&function(t){switch(t){case"amount":return"amountLow"===s.sortBy?e(Oe("")):"amountHigh"===s.sortBy?e(Oe("amountLow")):e(Oe("amountHigh"));case"createdAt":return"dateOld"===s.sortBy?e(Oe("")):"dateNew"===s.sortBy?e(Oe("dateOld")):e(Oe("dateNew"));default:return}}(t.field)}},r.a.createElement(p.a,{variant:"h6",sx:Me.typography},t.headerName,function(e){var t,n,a=null===(t=ve[e])||void 0===t||null===(n=t[s.sortBy])||void 0===n?void 0:n.component;return a&&r.a.createElement(a,null)}(t.field)))})),r.a.createElement(pe.a,{align:"right",sx:Me.lastRow},r.a.createElement(j.a,{sx:Me.settings},c.length>0&&r.a.createElement(we,null),r.a.createElement(ke,null)))))},Xe=n(257),Ye={button:{marginLeft:"5px",color:"white",background:"#e84434",transition:"0.5s","&:hover":{background:"#a11e12"}}};var Fe=function(e){var t=e.id,n=Object(o.b)();return r.a.createElement(T.a,{disableRipple:!0,size:"small",sx:Ye.button,onClick:function(){n(ee(t)),n(I(t))}},r.a.createElement(Te.a,null))},He={button:{color:"white",background:"#0066ff",transition:"0.5s","&:hover":{background:"#0047b3"}}};var Je=function(e){var t=e.expense;return r.a.createElement(T.a,{disableRipple:!0,size:"small",sx:He.button,variant:"contained"},r.a.createElement(z,{expense:t}))},We={header:{background:""},table:{borderRadius:"10px"},button:{padding:"0px",minWidth:"30px",minHeight:"30px"},description:{fontWeight:"bold"},tableCell:{"&:first-of-type":{width:"0rem"}},tableCells:{"&:last-of-type":{width:"4.1rem"}},buttons:{display:"flex"}};var $e=function(e){var t=e.page,n=e.rowsPerPage,a=e.emptyRows,l=Object(o.b)(),i=Object(o.c)((function(e){return{visibleExpenses:x(e.expenses.present,e.filters),deleteList:e.deleteList}})),c=i.visibleExpenses,s=i.deleteList,u=c.slice(t*n,t*n+n);return r.a.createElement(Xe.a,null,u.map((function(e){return r.a.createElement(de.a,{key:e.id,hover:!0},r.a.createElement(pe.a,{align:"left"},r.a.createElement(me.a,{onChange:function(){var t;t=e.id,s.indexOf(t)<0?l(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:"ADD_BY_ID",id:e}}(t)):l(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:"REMOVE_BY_ID",id:e}}(t))},checked:(t=e.id,-1!==s.indexOf(t))})),r.a.createElement(pe.a,{align:"center"},r.a.createElement(p.a,{sx:We.description},e.description)),r.a.createElement(pe.a,{align:"center",sx:"Bill"===e.expenseType?{color:"red"}:{color:"green"}},r.a.createElement(p.a,{variant:"string"},"Bill"===e.expenseType?"- $".concat(e.amount):"+ $".concat(e.amount))),r.a.createElement(pe.a,{align:"center"},r.a.createElement(p.a,{variant:"string"},e.note)),r.a.createElement(pe.a,{align:"center"},r.a.createElement(p.a,{variant:"string"},B()(e.createdAt).format("MM/DD/YYYY"))),r.a.createElement(pe.a,{align:"right"},r.a.createElement(j.a,{sx:We.buttons},r.a.createElement(Je,{expense:e}),r.a.createElement(Fe,{id:e.id}))));var t})),a>0&&r.a.createElement(de.a,{style:{height:75*a}},r.a.createElement(pe.a,{colSpan:6})))},ze=n(231);var Ue=function(e){var t=e.rows,n=e.rowsPerPage,a=e.page,l=e.handleChangePage,i=e.handleChangeRowsPerPage;return r.a.createElement(ze.a,{rowsPerPageOptions:[5,10,25],component:f.a,count:t.length,rowsPerPage:n,page:a,onPageChange:l,onRowsPerPageChange:i})},qe={table:{borderRadius:"10px"}};var Ge=function(){var e=Object(o.c)((function(e){return x(e.expenses.present,e.filters)})),t=Object(a.useState)(0),n=Object(m.a)(t,2),l=n[0],i=n[1],c=Object(a.useState)(10),s=Object(m.a)(c,2),u=s[0],d=s[1],p=u-Math.min(u,e.length-l*u),E={page:l,setPage:i,rowsPerPage:u,handleChangeRowsPerPage:function(e){d(Number(e.target.value)),i(0)},emptyRows:p,rows:e,handleChangePage:function(e,t){i(t)}};return r.a.createElement(ce.a,{component:f.a,sx:qe.table,elevation:4},r.a.createElement(se.a,{sx:{minWidth:500}},r.a.createElement(Ve,null),r.a.createElement($e,E)),r.a.createElement(Ue,E))},Ke={display:{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:"0px"}},Qe=[{exact:!0,component:function(){var e=Object(a.useState)(!1),t=Object(m.a)(e,2),n=t[0],l=t[1],i=Object(o.c)((function(e){return e.expenses.present}));return Object(a.useEffect)((function(){var e;e=i,localStorage.setItem("expense",JSON.stringify(e))}),[i]),r.a.createElement(E.a,{container:!0,sx:Ke.display,spacing:2},r.a.createElement(E.a,{item:!0,xs:3},r.a.createElement(ie,{toggleView:l,isOpen:n})),r.a.createElement(E.a,{item:!0,xs:9},r.a.createElement(Ge,null)))},path:"/"},{component:function(){return r.a.createElement("div",null,"HelpPage")},path:"/help"}],Ze=function(){return r.a.createElement(r.a.Fragment,null,Qe.map((function(e,t){var n=e.path,a=e.exact,l=e.component;return r.a.createElement(s.a,{key:t,exact:!!a,path:n,component:l})})))},et={appBar:{flexDirection:"row",justifyContent:"center",margin:"10px 0",alignItems:"center",padding:"10px",borderRadius:"15px"},title:{marginLeft:"20px"}},tt=function(){return r.a.createElement(u.a,{maxWidth:"xl"},r.a.createElement(c.a,null,r.a.createElement(d.a,{sx:et.appBar,position:"static",color:"inherit"},r.a.createElement(p.a,{variant:"h2",sx:et.title},"Expenses Calculator")),r.a.createElement(s.c,null,r.a.createElement(Ze,null))))},nt=n(102),at=n(15),rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe(),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EXPENSE":return[].concat(Object(at.a)(e),[t.expense]);case"REMOVE_EXPENSE":return e.filter((function(e){return!t.deleteList.includes(e.id)}));case"EDIT_EXPENSE":return e.map((function(e){return e.id===t.id?Object(g.a)(Object(g.a)({},e),t.updates):Object(g.a)({},e)}));default:return e}},lt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TEXT_FILTER":return Object(g.a)(Object(g.a)({},e),{},{description:t.description});case"SET_START_DATE":return Object(g.a)(Object(g.a)({},e),{},{startDate:t.startDate});case"SET_END_DATE":return Object(g.a)(Object(g.a)({},e),{},{endDate:t.endDate});case"RESET":return Object(g.a)({},Ne);case"SET_SORT_BY":return Object(g.a)(Object(g.a)({},e),{},{sortBy:t.sortBy});case"SET_EXPENSES_TYPE":return Object(g.a)(Object(g.a)({},e),{},{expensesType:t.expensesType});default:return e}},it=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_BY_ID":return[].concat(Object(at.a)(e),[t.id]);case"REMOVE_BY_ID":return e.filter((function(e){return e!==t.id}));case"ADD_ALL":return[].concat(Object(at.a)(e),Object(at.a)(t.deleteList));case"REMOVE_VISIBLE":return e.filter((function(e){return!t.visibleDeleteList.includes(e)}));case"CLEAR_LIST":return[];default:return e}},ot=Object(nt.a)({expenses:Z()(rt),filters:lt,deleteList:it}),ct=Object(nt.b)(ot,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(r.a.createElement(o.a,{store:ct},r.a.createElement(tt,null)),document.getElementById("root"))}},[[146,1,2]]]);
//# sourceMappingURL=main.ce08a5f9.chunk.js.map