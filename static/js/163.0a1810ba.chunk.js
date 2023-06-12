"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[163],{5163:function(n,e,r){r.r(e),r.d(e,{default:function(){return E}});var t,a,i,d,s,o,p,u,c,x,l,h,m=r(9439),f=r(2791),b=r(9434),Z=r(168),g=r(6444),j=g.ZP.div(t||(t=(0,Z.Z)(["\n  display: flex;\n  width: 100%;\n  max-width: 400px;\n  gap: 8px;\n  margin-bottom: 20px;\n  padding: 8px;\n  border: 1px solid #2a2a2a;\n  border-radius: 4px;\n"]))),v=g.ZP.div(a||(a=(0,Z.Z)([""]))),w=g.ZP.div(i||(i=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n"]))),P=g.ZP.p(d||(d=(0,Z.Z)(["\n  font-size: 20px;\n  font-weight: 600;\n  padding: 5px;\n  margin: 0;\n"]))),k=g.ZP.input(s||(s=(0,Z.Z)(["\nborder-radius: 4px;\n\n  :focus {\n    box-shadow: 2px -2px 5px 2px #2196f3;\n  }\n"]))),y=g.ZP.button(o||(o=(0,Z.Z)(["\n  margin-top: 20px;\n  padding: 4px 8px;\n  cursor: pointer;\n  border-radius: 4px;\n  box-shadow: 4px 1px 4px -1px rgb(0 0 0 / 40%);\n  border-width: 0;\n  background-color: #fff;\n"]))),C=r(7638),A=r(184),z=function(n){n.onSubmit;var e=(0,f.useState)(""),r=(0,m.Z)(e,2),t=r[0],a=r[1],i=(0,f.useState)(""),d=(0,m.Z)(i,2),s=d[0],o=d[1],p=(0,b.I0)(),u=function(n){console.log(n.target);var e=n.target,r=e.name,t=e.value;switch(r){case"name":a(t);break;case"number":o(t);break;default:return}};return(0,A.jsx)(j,{children:(0,A.jsxs)("form",{onSubmit:function(n){n.preventDefault(),p((0,C.uK)({name:t,number:s})),a(""),o("")},children:[(0,A.jsx)(v,{children:(0,A.jsxs)(w,{htmlFor:"name",children:[(0,A.jsx)(P,{children:"Name"}),(0,A.jsx)(k,{id:"name",type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:u})]})}),(0,A.jsx)(v,{children:(0,A.jsxs)(w,{htmlFor:"phone",children:[(0,A.jsx)(P,{children:" Number"}),(0,A.jsx)(k,{id:"phone",type:"tel",name:"number",value:s,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:u})]})}),(0,A.jsx)(y,{type:"submit",children:"Add contact"})]})})},F=g.ZP.ul(p||(p=(0,Z.Z)(["\n  margin-left: 40px;\n  padding: 0;\n"]))),S=function(n){return n.contacts.items},_=function(n){return n.filter},I=g.ZP.li(u||(u=(0,Z.Z)(["\n  list-style: disc;\n  padding: 10px 0px;\n"]))),N=g.ZP.div(c||(c=(0,Z.Z)(["\n  display: flex;\n"]))),q=g.ZP.div(x||(x=(0,Z.Z)(["\n  padding-right: 10px;\n"]))),K=g.ZP.span(l||(l=(0,Z.Z)([""]))),L=g.ZP.button(h||(h=(0,Z.Z)(["\n cursor: pointer;\n  border-radius: 4px;\n  box-shadow: 4px 1px 4px -1px rgb(0 0 0 / 40%);\n  border-width: 0;\n  background-color: #fff;"]))),B=function(n){var e=n.name,r=n.number,t=n.id,a=(0,b.I0)();return(0,A.jsx)(I,{children:(0,A.jsxs)(N,{children:[(0,A.jsxs)(q,{children:[(0,A.jsxs)(K,{children:[" ",e]}),(0,A.jsx)(K,{children:r})]}),(0,A.jsx)(L,{type:"button",onClick:function(){return a((0,C.GK)(t))},children:"delete"})]})})},D=function(){var n=(0,b.v9)(S),e=(0,b.v9)(_),r=(0,b.I0)();return(0,f.useEffect)((function(){r((0,C.yF)())}),[r]),(0,A.jsx)(F,{children:n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})).map((function(n){var e=n.id,r=n.name,t=n.number;return(0,A.jsx)("div",{children:(0,A.jsx)(B,{id:e,name:r,number:t})},e)}))})},E=function(){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(z,{}),(0,A.jsx)(D,{})]})}}}]);
//# sourceMappingURL=163.0a1810ba.chunk.js.map