(this["webpackJsonpentando-mf-template"]=this["webpackJsonpentando-mf-template"]||[]).push([[0],{51:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(21),c=n(22),r=n(23),o=n(25),i=n(26),s=n(24),u=n.n(s),d=n(3),l=n(1),h=n.n(l),p=n(5),b=n(11),m=n(12),f=n(8),w=n.n(f),j="".concat("http://localhost:1337"),O=("".concat("http://localhost:8081/api","/template/searchby/"),function(){var e=Object(p.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("".concat("http://localhost:8081/api","/template/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),v=function(){var e=Object(p.a)(h.a.mark((function e(){var t,n,a,c,r,o=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"banner",n=o.length>1?o[1]:void 0,t&&n||console.error(t,n),a="".concat(j,"/content-manager/collection-types/api::","banner",".","banner","/").concat(n),e.next=6,w.a.get(a,g({},"EntKcToken"));case 6:return c=e.sent,r=c.data,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(e){var t=window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:"";return t?{headers:{Authorization:"".concat(e," ").concat(t)}}:"EntKcToken"===e?{headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUxNjY2ODY3LCJleHAiOjE2NTQyNTg4Njd9.HDMO-g89iRacB-9m8yQ39w4Rh4wNOR9xCL1dH1whPSE")}}:{}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Bearer",n=k(t);return Object(m.a)(Object(m.a)({},e),n)},y=(n(51),n(2));var I=function(e){var t=e.name,n=e.nameTwo,a=e.templateId,c=e.contentId,r=Object(d.useState)(null),o=Object(b.a)(r,2),i=o[0],s=o[1],u=Object(d.useState)(null),l=Object(b.a)(u,2),m=l[0],f=l[1];return console.log(t,n,a,c),Object(d.useEffect)(Object(p.a)(h.a.mark((function e(){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(a);case 2:return n=e.sent,e.next=5,v(t,c);case 5:r=e.sent,s(n),f(r);case 8:case"end":return e.stop()}}),e)})))),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{children:i?JSON.stringify(i):"Loading OR Check Network"}),Object(y.jsx)("div",{children:i?JSON.stringify(m):"Loading OR Check Network"})]})},C={name:"name",nameTwo:"nameTwo",selectedTemplateId:"selectedTemplateId",selectedContentId:"selectedContentId",selectedContentName:"selectedContentName"},N=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"attributeChangedCallback",value:function(e,t,n){if(!Object.values(C).includes(e))throw new Error("Untracked changed attribute: ".concat(e));this.mountPoint&&n!==t&&this.render()}},{key:"connectedCallback",value:function(){this.mountPoint=document.createElement("div"),this.appendChild(this.mountPoint),this.render()}},{key:"render",value:function(){var e=this.getAttribute(C.name),t=this.getAttribute(C.nameTwo),n=this.getAttribute(C.selectedTemplateId),a=this.getAttribute(C.selectedContentId),c=this.getAttribute(C.selectedContentName);u.a.render(Object(y.jsx)(I,{name:e,nameTwo:t,templateId:n,contentId:a,contentName:c}),this.mountPoint)}}],[{key:"observedAttributes",get:function(){return Object.values(C)}}]),n}(Object(i.a)(HTMLElement));customElements.define("my-widget",N)}},[[53,1,2]]]);
//# sourceMappingURL=main.d4922e16.chunk.js.map