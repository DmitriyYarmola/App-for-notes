(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{138:function(e,t,n){e.exports=n(247)},143:function(e,t,n){},148:function(e,t,n){},149:function(e,t,n){},196:function(e,t){},199:function(e,t,n){},206:function(e,t,n){},246:function(e,t,n){},247:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(2),o=n.n(r),l=(n(143),n(13)),i=n(23),u=(n(148),n(248)),s=n(250),d=n(68),m=n.n(d),E=(n(102),n(149),u.a.Sider),f=function(){var e=Object(l.c)((function(e){return e.notesReducer.notes})).map((function(e){return c.a.createElement(s.a.Item,{key:e.id},c.a.createElement(i.b,{to:e.id,className:"note-item",activeClassName:"active"},e.title))}));return c.a.createElement(E,{style:{overflow:"auto",height:"100vh",position:"fixed",left:0}},c.a.createElement(s.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["4"]},c.a.createElement(s.a.Item,{key:m()()},c.a.createElement(i.b,{to:"/create",className:"create-note_item"},"Create New Note")),e))},p=n(5),b=n(25),O=n(251),v=function(e){var t=e.placeholder,n=e.className,a=e.onChange,r=e.value;return c.a.createElement(O.a,{placeholder:t,className:n,onChange:a,value:r,required:!0})},g=n(136),j=n(31),y=function(e){var t=e.type,n=e.onClick,a=e.content,r=Object(g.a)(e,["type","onClick","content"]);return c.a.createElement(j.a,Object.assign({type:t,onClick:n},r),a)},h=function(e,t,n){return{type:"ADD_NOTE",payload:{title:e,content:t,id:n}}},C=function(e,t,n){return{type:"SAVE_NOTE",payload:{title:e,content:t,id:n}}},N=function(e){return{type:"DELTE_NOTE",payload:{id:e}}},S=function(e){return{type:"GET_NOTES",payload:e}},k=n(124),T=n.n(k),D=function(e){var t=e.onChange,n=e.value;return c.a.createElement(T.a,{onChange:t,value:n,options:{autofocus:!0,spellChecker:!1}})},M=(n(198),n(199),n(252)),_=function(e){var t=e.isCreate,n=e.title,r=e.content,o=e.id,i=e.setEditMode,u=Object(a.useState)(n),s=Object(b.a)(u,2),d=s[0],E=s[1],f=Object(a.useState)(r),O=Object(b.a)(f,2),g=O[0],j=O[1],N=Object(l.b)(),S=Object(p.f)();return c.a.createElement(c.a.Fragment,null,c.a.createElement(v,{placeholder:"Title of note",className:"simple-input",onChange:function(e){E(e.currentTarget.value)},value:d}),c.a.createElement(D,{onChange:function(e){j(e)},value:g}),t?c.a.createElement(y,{type:"dashed",onClick:function(e){var t=m()();console.log(t),d&&g&&(N(h(d,g,t)),S.push(t),E(""),j(""),M.a.success("The note has been created"))},content:"Create",danger:!1}):c.a.createElement(y,{type:"dashed",onClick:function(){i(!1),N(C(d,g,o))},content:"Save",danger:!1}))},w=(n(206),n(249)),x=function(e){var t=e.visibleModal,n=e.setVisibleModal,a=e.title,r=e.contentModal,o=e.accessDelete;return c.a.createElement(w.a,{title:a,visible:t,onOk:o,onCancel:function(){return n(!1)}},c.a.createElement("p",null,r))},I=(n(246),function(e){var t=e.title,n=e.content,r=e.setEditMode,o=e.id,i=Object(a.useState)(!1),u=Object(b.a)(i,2),s=u[0],d=u[1],m=Object(a.useState)(""),E=Object(b.a)(m,2),f=E[0],O=E[1],v=Object(a.useState)(""),g=Object(b.a)(v,2),j=g[0],h=g[1],C=Object(p.f)(),S=Object(l.b)();return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"option-button"},c.a.createElement(y,{type:"primary",onClick:function(){O("Delete the note"),h("You want to delete this note?"),d(!0)},content:"Delete",danger:!0}),c.a.createElement(y,{type:"primary",onClick:function(){r(!0)},content:"Edit",danger:!1})),c.a.createElement("div",null,c.a.createElement("h1",null,t),c.a.createElement("div",{className:""},n)),c.a.createElement(x,{visibleModal:s,setVisibleModal:d,title:f,contentModal:j,accessDelete:function(){S(N(o)),d(!1),M.a.error("The note has been deleted"),C.goBack()}}))}),A=function(e){var t=e.title,n=e.content,r=e.id,o=Object(a.useState)(!1),l=Object(b.a)(o,2),i=l[0],u=l[1];return c.a.createElement(c.a.Fragment,null,i?c.a.createElement(_,{isCreate:!1,title:t,content:n,id:r,setEditMode:u}):c.a.createElement(I,{title:t,content:n,setEditMode:u,id:r}))},B=function(){var e=Object(l.c)((function(e){return e.notesReducer.notes}));console.log(e);var t=e.map((function(e){return c.a.createElement(p.a,{path:"/".concat(e.id),exact:!0,key:e.id,render:function(){return c.a.createElement(A,{title:e.title,content:e.content,id:e.id})}})}));return c.a.createElement(c.a.Fragment,null,t)},F=u.a.Content,J=function(){return c.a.createElement(u.a,null,c.a.createElement(u.a,{className:"site-layout",style:{marginLeft:200}},c.a.createElement(F,{style:{margin:"24px 16px 0",overflow:"initial"}},c.a.createElement("div",{className:"site-layout-background",style:{padding:24,textAlign:"center"}},c.a.createElement(p.c,null,c.a.createElement(p.a,{path:"/create",render:function(){return c.a.createElement(_,{isCreate:!0,title:"",content:""})}}),c.a.createElement(B,null))))))},R=function(){var e=Object(l.c)((function(e){return e.notesReducer.notes})),t=Object(l.b)();return Object(a.useEffect)((function(){var e=localStorage.getItem("notes")||"";t(S(JSON.parse(e)))}),[]),Object(a.useEffect)((function(){localStorage.setItem("notes",JSON.stringify(e))}),[e]),c.a.createElement("div",{className:""},c.a.createElement(f,null),c.a.createElement(J,null))};var V,L=function(){return c.a.createElement("div",{className:"wrapper"},c.a.createElement(R,null))},q=n(53),G=n(134),K=n(78),Y=n(26),z={notes:[]},H=Object(q.c)({notesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t.payload),t.type){case"GET_NOTES":return Object(Y.a)(Object(Y.a)({},e),{},{notes:t.payload});case"ADD_NOTE":return Object(Y.a)(Object(Y.a)({},e),{},{notes:[].concat(Object(K.a)(e.notes),[t.payload])});case"SAVE_NOTE":return Object(Y.a)(Object(Y.a)({},e),{},{notes:Object(K.a)(e.notes.map((function(e){return e.id===t.payload.id?t.payload:e})))});case"DELTE_NOTE":return Object(Y.a)(Object(Y.a)({},e),{},{notes:Object(K.a)(e.notes.filter((function(e){return e.id!==t.payload.id})))});default:return e}}}),P=Object(q.d)(H,Object(q.a)(G.a)),Q=indexedDB.open("myDB",1);Q.onupgradeneeded=function(e){(V=e.target.result).createObjectStore("notes",{autoIncrement:!0})},Q.onsuccess=function(e){V=e.target.result,U(V)},Q.onerror=function(e){alert("error opening database "+e.target.errorCode)};var U=function(e){var t=e.transaction(["notes"],"readonly").objectStore("notes").openCursor(),n=[];t.onsuccess=function(e){var t=e.target.result;null!=t&&(n.push(t.value),t.continue())},t.onerror=function(e){alert("error in cursor request "+e.target.errorCode)}};o.a.render(c.a.createElement(i.a,null,c.a.createElement(l.a,{store:P},c.a.createElement(L,null))),document.getElementById("root"))}},[[138,1,2]]]);
//# sourceMappingURL=main.1757c00a.chunk.js.map