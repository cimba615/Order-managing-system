/*! For license information please see 8.ab65811d.chunk.js.LICENSE.txt */
(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[8],{1053:function(e,t,r){"use strict";r.r(t);var a=r(37),n=r(0),o=r.n(n),i=r(21),c=r(36),l=r(87),s=r(965),u=r(895),m=r(950),p=r(984),f=r(979),d=r(534),h=r(955),v=r(936),g=r(928),y=r(308),b=r(108),E=r(50),w=r(3),x=r(970),j=r(971),O=r(177),L=r(946),S=r(929),N=r(107),k=["className","onSubmitSuccess","partner"];function C(){C=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(k){l=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof p?t:p,i=Object.create(o.prototype),c=new L(n||[]);return a(i,"_invoke",{value:w(e,r,c)}),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=s;var m={};function p(){}function f(){}function d(){}var h={};l(h,o,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(S([])));g&&g!==t&&r.call(g,o)&&(h=g);var y=d.prototype=p.prototype=Object.create(h);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var n;a(this,"_invoke",{value:function(a,o){function i(){return new t((function(n,i){!function a(n,o,i,c){var l=u(e[n],e,o);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&r.call(m,"__await")?t.resolve(m.__await).then((function(e){a("next",e,i,c)}),(function(e){a("throw",e,i,c)})):t.resolve(m).then((function(e){s.value=e,i(s)}),(function(e){return a("throw",e,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}})}function w(e,t,r){var a="suspendedStart";return function(n,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw o;return N()}for(r.method=n,r.arg=o;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var l=u(e,t,r);if("normal"===l.type){if(a=r.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a="completed",r.method="throw",r.arg=l.arg)}}}function x(e,t){var r=t.method,a=e.iterator[r];if(void 0===a)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var n=u(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,m;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,n=function t(){for(;++a<e.length;)if(r.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:N}}function N(){return{value:void 0,done:!0}}return f.prototype=d,a(y,"constructor",{value:d,configurable:!0}),a(d,"constructor",{value:f,configurable:!0}),f.displayName=l(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(E.prototype),l(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,a,n,o){void 0===o&&(o=Promise);var i=new E(s(t,r,a,n),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(y),l(y,c,"Generator"),l(y,o,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var a in t)r.push(a);return r.reverse(),function e(){for(;r.length;){var a=r.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=S,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(r,a){return i.type="throw",i.arg=e,t.next=r,a&&(t.method="next",t.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;O(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},e}var P=Object(u.a)((function(){return{root:{}}}));function B(e){var t=e.className,r=e.onSubmitSuccess,a=e.partner,n=Object(E.a)(e,k),c=P(),s=Object(O.b)().enqueueSnackbar,u=Object(i.i)().partnerId;return o.a.createElement(j.a,{initialValues:{username:a.username,location:a.location,email:a.email,password:"",percentage:a.percentage,payment:a.payment},validationSchema:x.b().shape({username:x.c().max(255).required("partner name is required"),location:x.c().max(255).required("location is required"),email:x.c().email("Must be a valid email").max(255).required("Email is required"),percentage:x.a().required("percentage is required"),payment:x.a().required("payment is required")}),onSubmit:function(){var e=Object(b.a)(C().mark((function e(t,a){var n,o,i,c,m,p,f,d,h,v;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.setErrors,o=a.setStatus,i=a.setSubmitting,e.prev=1,c=t.username,m=t.location,p=t.email,f=t.password,d=t.percentage,h=t.payment,v="",e.next=6,l.a.post(N.a+"partners/update",{id:u,username:c,location:m,email:p,password:f,percentage:d,payment:h}).then((function(e){v=e.data}));case 6:v.success?(o({success:!0}),i(!1),s(v.message,{variant:"success"})):s(v.message,{variant:"error"}),r(),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),o({success:!1}),n({submit:e.t0.message}),i(!1);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,r){return e.apply(this,arguments)}}()},(function(e){var r=e.errors,i=e.handleBlur,l=e.handleChange,s=e.handleSubmit,u=e.isSubmitting,m=e.touched,p=e.values;return o.a.createElement("form",Object.assign({className:Object(w.a)(c.root,t),onSubmit:s},n),o.a.createElement(L.a,{error:Boolean(m.username&&r.username),fullWidth:!0,helperText:m.username&&r.username,label:"Partner Name",margin:"normal",name:"username",onBlur:i,onChange:l,type:"username",value:p.username,variant:"outlined"}),o.a.createElement(L.a,{error:Boolean(m.location&&r.location),fullWidth:!0,helperText:m.location&&r.location,label:"Location(country or city)",margin:"normal",name:"location",onBlur:i,onChange:l,type:"location",value:p.location,variant:"outlined"}),o.a.createElement(L.a,{error:Boolean(m.email&&r.email),fullWidth:!0,helperText:m.email&&r.email,label:"Email Address",margin:"normal",name:"email",onBlur:i,onChange:l,type:"email",value:p.email,variant:"outlined"}),o.a.createElement(L.a,{error:Boolean(m.password&&r.password),fullWidth:!0,helperText:m.password&&r.password,label:"Password",margin:"normal",name:"password",onBlur:i,onChange:l,type:"password",value:p.password,variant:"outlined"}),"admin"!==a.role&&o.a.createElement(L.a,{error:Boolean(m.percentage&&r.percentage),fullWidth:!0,helperText:m.percentage&&r.percentage,label:"Percentage(%)",margin:"normal",name:"percentage",onBlur:i,onChange:l,type:"number",value:p.percentage,variant:"outlined"}),o.a.createElement(L.a,{error:Boolean(m.payment&&r.payment),fullWidth:!0,helperText:m.payment&&r.payment,label:"Payment($)",margin:"normal",name:"payment",onBlur:i,onChange:l,type:"number",value:p.payment,variant:"outlined"}),o.a.createElement(h.a,{mt:2},o.a.createElement(S.a,{color:"secondary",disabled:u,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Update")))}))}B.default={onSubmitSuccess:function(){}};var _=B,T=r(951),q=r(981),I=r(966),W=r.n(I),G=["className"],R=Object(u.a)((function(e){return{root:{marginTop:"15px",marginLeft:"10px"},actionIcon:{marginRight:e.spacing(1)}}}));var z=function(e){var t=e.className,r=Object(E.a)(e,G),a=R();return o.a.createElement(T.a,Object.assign({container:!0,spacing:3,justify:"space-between",className:Object(w.a)(a.root,t)},r),o.a.createElement(T.a,{item:!0},o.a.createElement(q.a,{separator:o.a.createElement(W.a,{fontSize:"small"}),"aria-label":"breadcrumb"},o.a.createElement(g.a,{variant:"body1",color:"inherit",to:"/app",component:c.a},"Dashboard"),o.a.createElement(d.a,{variant:"body1",color:"textPrimary"},"Partners"),o.a.createElement(d.a,{variant:"body1",color:"textPrimary"},"Edit Partner")),o.a.createElement(d.a,{variant:"h3",color:"textPrimary"},"Please edit your partners info!")))},M=Object(u.a)((function(e){return{root:{justifyContent:"center",backgroundColor:e.palette.background.dark,display:"flex",flexDirection:"column"}}}));t.default=function(){var e=M(),t=Object(i.g)(),r=Object(s.a)(),u=Object(n.useState)(null),b=Object(a.a)(u,2),E=b[0],w=b[1],x=Object(i.i)().partnerId,j=Object(n.useCallback)((function(){l.a.get(N.a+"partners/edit/"+x).then((function(e){r.current&&w(e.data.partner)}))}),[r]);return Object(n.useEffect)((function(){j()}),[j]),E?o.a.createElement(y.a,{className:e.root,title:"Partner edit"},o.a.createElement(z,null),o.a.createElement(m.a,{maxWidth:"sm"},o.a.createElement(p.a,null,o.a.createElement(f.a,null,o.a.createElement(d.a,{align:"center",variant:"h2",color:"textPrimary"},"Partner editing page"),o.a.createElement(h.a,{mt:3},o.a.createElement(_,{partner:E,onSubmitSuccess:function(){t.push("/app/partners/list")}})),o.a.createElement(h.a,{my:2},o.a.createElement(v.a,null)),o.a.createElement(g.a,{component:c.a,to:"/app/partners/list",variant:"body2",color:"textSecondary"},"go to partners list"))))):null}},965:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(0);function n(){var e=Object(a.useRef)(!0);return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),e}},966:function(e,t,r){"use strict";var a=r(234),n=r(235);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(0)),i=(0,a(r(236)).default)(o.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.default=i},979:function(e,t,r){"use strict";var a=r(1),n=r(2),o=r(0),i=r(3),c=r(6),l=o.forwardRef((function(e,t){var r=e.classes,c=e.className,l=e.component,s=void 0===l?"div":l,u=Object(n.a)(e,["classes","className","component"]);return o.createElement(s,Object(a.a)({className:Object(i.a)(r.root,c),ref:t},u))}));t.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(l)},981:function(e,t,r){"use strict";var a=r(1),n=r(70),o=r(2),i=r(0),c=(r(147),r(3)),l=r(6),s=r(534),u=r(22),m=r(122),p=Object(m.a)(i.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),f=r(307);var d=Object(l.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(u.c)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,r=Object(o.a)(e,["classes"]);return i.createElement(f.a,Object(a.a)({component:"li",className:t.root,focusRipple:!0},r),i.createElement(p,{className:t.icon}))}));var h=i.forwardRef((function(e,t){var r=e.children,l=e.classes,u=e.className,m=e.component,p=void 0===m?"nav":m,f=e.expandText,h=void 0===f?"Show path":f,v=e.itemsAfterCollapse,g=void 0===v?1:v,y=e.itemsBeforeCollapse,b=void 0===y?1:y,E=e.maxItems,w=void 0===E?8:E,x=e.separator,j=void 0===x?"/":x,O=Object(o.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),L=i.useState(!1),S=L[0],N=L[1],k=i.Children.toArray(r).filter((function(e){return i.isValidElement(e)})).map((function(e,t){return i.createElement("li",{className:l.li,key:"child-".concat(t)},e)}));return i.createElement(s.a,Object(a.a)({ref:t,component:p,color:"textSecondary",className:Object(c.a)(l.root,u)},O),i.createElement("ol",{className:l.ol},function(e,t,r){return e.reduce((function(a,n,o){return o<e.length-1?a=a.concat(n,i.createElement("li",{"aria-hidden":!0,key:"separator-".concat(o),className:t},r)):a.push(n),a}),[])}(S||w&&k.length<=w?k:function(e){return b+g>=e.length?e:[].concat(Object(n.a)(e.slice(0,b)),[i.createElement(d,{"aria-label":h,key:"ellipsis",onClick:function(e){N(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(n.a)(e.slice(e.length-g,e.length)))}(k),l.separator,j)))}));t.a=Object(l.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(h)}}]);
//# sourceMappingURL=8.ab65811d.chunk.js.map