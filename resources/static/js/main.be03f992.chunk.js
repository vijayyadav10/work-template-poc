(this["webpackJsonpentando-mf-template"]=this["webpackJsonpentando-mf-template"]||[]).push([[0],{54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(21),c=n(22),r=n(23),s=n(26),d=n(27),o=n(24),i=n.n(o),l=n(2),b=n(3),u=n.n(b),p=n(7),j=n(5),h=n(10),x=n(6),m=n.n(x),O="".concat("http://localhost:1337"),g="".concat("/entando-template-api/api","/template/searchby/"),v=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n,a=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"code",n=a.length>1?a[1]:void 0,e.next=4,m.a.get("".concat(g).concat(t,"/").concat(n));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat("/entando-template-api/api","/template/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n,a,c,r,s=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:"banner",n=s.length>1?s[1]:void 0,t&&n||console.error(t,n),a="".concat(O,"/content-manager/collection-types/api::","banner",".","banner","/").concat(n),e.next=6,m.a.get(a,T({},"EntKcToken"));case 6:return c=e.sent,r=c.data,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(e){var t=window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:"";return t?{headers:{Authorization:"".concat(e," ").concat(t)}}:"EntKcToken"===e?{headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUxNjY2ODY3LCJleHAiOjE2NTQyNTg4Njd9.HDMO-g89iRacB-9m8yQ39w4Rh4wNOR9xCL1dH1whPSE")}}:{}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Bearer",n=y(t);return Object(p.a)(Object(p.a)({},e),n)},k=n(25),C=n(0);function I(e){var t=e.css,n=e.template,a=e.data;return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(k.a,{template:n,data:a,css:t})})}n(54);var A="http://localhost:1337";var N=function(e){var t=e.name,n=e.nameTwo,a=e.templateId,c=e.contentId,r=e.contentName;console.log("NAME, NAMETWO, TEMPLATEID, CONTENTID -1",t,n,a,c),t||(t="test data transfer"),n||(n=n='[{"name":"customer 1","email":"customer1@entando.com","address":"San Jose, CA","createdAt":"2022-03-14T18:41:51.579Z","updatedAt":"2022-03-14T18:49:55.562Z","publishedAt":"2022-03-14T18:49:55.559Z","id":1,"selected":true}]');var s=JSON.parse(decodeURIComponent(n)),d=JSON.parse(decodeURIComponent(n))[0];a||(a=48),c||(c="1"),console.log("NAME, NAMETWO, TEMPLATEID, CONTENTID static data - ",t,n,a,c);var o=Object(l.useState)("#header {\n          background:red;\n          padding:10px;\n        }"),i=Object(h.a)(o,1)[0],b=Object(l.useState)('\n      <div id="wrapper">\n        <h1 className="title">{{name}}</h1>\n      </div>\n      '),x=Object(h.a)(b,2),O=x[0],g=x[1],y=Object(l.useState)({name:"Static",bold:function(){return function(e,t){}},bannerType:"wideBanner"}),T=Object(h.a)(y,2),k=T[0],N=T[1];return Object(l.useEffect)((function(){Object(j.a)(u.a.mark((function e(){var t,n,s,d,o,i,l,b;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(48);case 2:return t=e.sent,e.next=5,w(r,c);case 5:return n=e.sent,console.log("dataTemplateId",t),console.log("dataContentById",n),e.next=10,v("code",a);case 10:return s=e.sent,d=s.data,e.next=14,m.a.get("".concat(A,"/api/projects?populate=img"));case 14:o=e.sent,i=o.data,console.log("core Data",i.data),console.log("STRAPIDATA",i.data[0].attributes),console.log("just for now",d),l="".concat(d[0].contentshape),console.log("HBR",l),g(l),b="".concat(A).concat(i.data[0].attributes.img.data.attributes.url),console.log(A+i.data[0].attributes.img.data.attributes.url),N({content:Object(p.a)(Object(p.a)({},i.data[0].attributes),{},{img:b})});case 25:case"end":return e.stop()}}),e)})))()}),[]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("h1",{children:"DummyTEXT"}),Object(C.jsx)("div",{children:Object(C.jsx)(I,{css:i,template:O,data:k})}),Object(C.jsx)("hr",{}),Object(C.jsxs)("table",{style:{backgroundColor:"#FFFFCC",borderCollapse:"collapse",border:"1px solid #FFCC00",color:"#000000",width:"100%",padding:"10px"},cellPadding:"3",cellSpacing:"3",className:"table table-bordered table-datatable table-hover table-striped Contents__table-element",children:[Object(C.jsx)("thead",{children:Object(C.jsx)("tr",{children:Object.keys(d).map((function(e,t){return Object(C.jsx)("th",{children:e},t)}))})}),Object(C.jsx)("tbody",{children:Object(C.jsx)("tr",{children:Object.keys(d)&&Object.keys(d).map((function(e,t){if(d.hasOwnProperty(e))return Object(C.jsx)("td",{children:d[e]},t)}))})})]}),Object(C.jsx)("hr",{}),s&&s.map((function(e){return Object(C.jsxs)("div",{style:{boxShadow:"3px 12px 14px 0px #838383",height:"25rem",width:"20rem"},children:[Object(C.jsx)("div",{className:"cardHeader",style:{boxShadow:"inset 1px -1px 20px 6px #aeced2",borderBottom:"1px solid black"},children:Object(C.jsxs)("div",{style:{padding:"1rem"},children:[Object(C.jsx)("div",{children:Object(C.jsxs)("strong",{children:["ID #: ",e.id]})}),Object(C.jsxs)("div",{children:[Object(C.jsx)("strong",{children:"Name: "}),e.name,e.version]})]})}),Object(C.jsx)("div",{style:{boxShadow:"rgb(210 174 174) 1px -1px 20px 6px inset"},children:Object(C.jsx)("div",{style:{padding:"1rem"},children:Object(C.jsxs)("div",{children:[Object(C.jsx)("strong",{children:"Email: "}),e.email]})})}),Object(C.jsx)("div",{style:{boxShadow:"rgb(210 174 174) 1px -1px 20px 6px inset"},children:Object(C.jsx)("div",{style:{padding:"1rem"},children:Object(C.jsxs)("div",{children:[Object(C.jsx)("strong",{children:"Address: "}),e.address]})})}),Object(C.jsx)("div",{style:{boxShadow:"rgb(210 174 174) 1px -1px 20px 6px inset"},children:Object(C.jsx)("div",{style:{padding:"1rem"},children:Object(C.jsxs)("div",{children:[Object(C.jsx)("strong",{children:"Created at: "}),e.createdAt]})})}),Object(C.jsx)("div",{style:{boxShadow:"rgb(210 174 174) 1px -1px 20px 6px inset"},children:Object(C.jsx)("div",{style:{padding:"1rem"},children:Object(C.jsxs)("div",{children:[Object(C.jsx)("strong",{children:"updated at: "}),e.updatedAt]})})}),Object(C.jsx)("div",{style:{boxShadow:"rgb(210 174 174) 1px -1px 20px 6px inset"},children:Object(C.jsx)("div",{style:{padding:"1rem"},children:Object(C.jsxs)("div",{children:[Object(C.jsx)("strong",{children:"Published at: "}),e.publishedAt]})})})]},e.id)}))]})},E={name:"name",nameTwo:"nameTwo",selectedTemplateId:"selectedTemplateId",selectedContentId:"selectedContentId",selectedContentName:"selectedContentName"},S=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"attributeChangedCallback",value:function(e,t,n){if(!Object.values(E).includes(e))throw new Error("Untracked changed attribute: ".concat(e));this.mountPoint&&n!==t&&this.render()}},{key:"connectedCallback",value:function(){this.mountPoint=document.createElement("div"),this.appendChild(this.mountPoint),this.render()}},{key:"render",value:function(){var e=this.getAttribute(E.name),t=this.getAttribute(E.nameTwo),n=this.getAttribute(E.selectedTemplateId),a=this.getAttribute(E.selectedContentId),c=this.getAttribute(E.selectedContentName);i.a.render(Object(C.jsx)(N,{name:e,nameTwo:t,templateId:n,contentId:a,contentName:c}),this.mountPoint)}}],[{key:"observedAttributes",get:function(){return Object.values(E)}}]),n}(Object(d.a)(HTMLElement));customElements.define("my-widget",S)}},[[55,1,2]]]);
//# sourceMappingURL=main.be03f992.chunk.js.map