/*! For license information please see 13.d1a509ca.chunk.js.LICENSE.txt */
(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[13],{1052:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(36),i=r(21),c=r(895),l=r(950),s=r(984),u=r(979),m=r(534),p=r(955),f=r(936),h=r(928),d=r(308),v=r(108),g=r(50),y=r(3),b=r(970),w=r(971),E=r(87),x=r(107),j=r(177),O=r(946),L=r(929),S=["className","onSubmitSuccess"];function N(){N=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(C){l=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof p?t:p,i=Object.create(o.prototype),c=new L(n||[]);return a(i,"_invoke",{value:E(e,r,c)}),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(C){return{type:"throw",arg:C}}}e.wrap=s;var m={};function p(){}function f(){}function h(){}var d={};l(d,o,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(S([])));g&&g!==t&&r.call(g,o)&&(d=g);var y=h.prototype=p.prototype=Object.create(d);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var n;a(this,"_invoke",{value:function(a,o){function i(){return new t((function(n,i){!function a(n,o,i,c){var l=u(e[n],e,o);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&r.call(m,"__await")?t.resolve(m.__await).then((function(e){a("next",e,i,c)}),(function(e){a("throw",e,i,c)})):t.resolve(m).then((function(e){s.value=e,i(s)}),(function(e){return a("throw",e,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}})}function E(e,t,r){var a="suspendedStart";return function(n,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw o;return k()}for(r.method=n,r.arg=o;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var l=u(e,t,r);if("normal"===l.type){if(a=r.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a="completed",r.method="throw",r.arg=l.arg)}}}function x(e,t){var r=t.method,a=e.iterator[r];if(void 0===a)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var n=u(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,m;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,n=function t(){for(;++a<e.length;)if(r.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:k}}function k(){return{value:void 0,done:!0}}return f.prototype=h,a(y,"constructor",{value:h,configurable:!0}),a(h,"constructor",{value:f,configurable:!0}),f.displayName=l(h,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(w.prototype),l(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,a,n,o){void 0===o&&(o=Promise);var i=new w(s(t,r,a,n),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(y),l(y,c,"Generator"),l(y,o,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var a in t)r.push(a);return r.reverse(),function e(){for(;r.length;){var a=r.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=S,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(r,a){return i.type="throw",i.arg=e,t.next=r,a&&(t.method="next",t.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;O(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},e}var k=Object(c.a)((function(){return{root:{}}}));function C(e){var t=e.className,r=e.onSubmitSuccess,a=Object(g.a)(e,S),o=k(),i=Object(j.b)().enqueueSnackbar;return n.a.createElement(w.a,{initialValues:{username:"",location:"",email:"",password:"",percentage:"",payment:""},validationSchema:b.b().shape({username:b.c().max(255).required("partner name is required"),location:b.c().max(255).required("location is required"),email:b.c().email("Must be a valid email").max(255).required("Email is required"),password:b.c().min(5).max(255).required("Password is required"),percentage:b.a().required("percentage is required"),payment:b.a().required("payment is required")}),onSubmit:function(){var e=Object(v.a)(N().mark((function e(t,a){var n,o,c,l,s,u,m,p,f,h;return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.setErrors,o=a.setStatus,c=a.setSubmitting,e.prev=1,l=t.username,s=t.location,u=t.email,m=t.password,p=t.percentage,f=t.payment,h="",e.next=6,E.a.post(x.a+"signup",{username:l,location:s,email:u,password:m,percentage:p,payment:f}).then((function(e){h=e.data}));case 6:h.success?(o({success:!0}),c(!1),i(h.message,{variant:"success"})):i(h.message,{variant:"error"}),r(),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),o({success:!1}),n({submit:e.t0.message}),c(!1);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,r){return e.apply(this,arguments)}}()},(function(e){var r=e.errors,i=e.handleBlur,c=e.handleChange,l=e.handleSubmit,s=e.isSubmitting,u=e.touched,m=e.values;return n.a.createElement("form",Object.assign({className:Object(y.a)(o.root,t),onSubmit:l},a),n.a.createElement(O.a,{error:Boolean(u.username&&r.username),fullWidth:!0,helperText:u.username&&r.username,label:"Partner Name",margin:"normal",name:"username",onBlur:i,onChange:c,type:"username",value:m.username,variant:"outlined"}),n.a.createElement(O.a,{error:Boolean(u.location&&r.location),fullWidth:!0,helperText:u.location&&r.location,label:"Location(country or city)",margin:"normal",name:"location",onBlur:i,onChange:c,type:"location",value:m.location,variant:"outlined"}),n.a.createElement(O.a,{error:Boolean(u.email&&r.email),fullWidth:!0,helperText:u.email&&r.email,label:"Email Address",margin:"normal",name:"email",onBlur:i,onChange:c,type:"email",value:m.email,variant:"outlined"}),n.a.createElement(O.a,{error:Boolean(u.password&&r.password),fullWidth:!0,helperText:u.password&&r.password,label:"Password",margin:"normal",name:"password",onBlur:i,onChange:c,type:"password",value:m.password,variant:"outlined"}),n.a.createElement(O.a,{error:Boolean(u.percentage&&r.percentage),fullWidth:!0,helperText:u.percentage&&r.percentage,label:"Percentage(%)",margin:"normal",name:"percentage",onBlur:i,onChange:c,type:"number",value:m.percentage,variant:"outlined"}),n.a.createElement(O.a,{error:Boolean(u.payment&&r.payment),fullWidth:!0,helperText:u.payment&&r.payment,label:"Payment($)",margin:"normal",name:"payment",onBlur:i,onChange:c,type:"number",value:m.payment,variant:"outlined"}),n.a.createElement(p.a,{mt:2},n.a.createElement(L.a,{color:"secondary",disabled:s,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Create")))}))}C.default={onSubmitSuccess:function(){}};var P=C,B=r(951),_=r(981),T=r(966),q=r.n(T),W=["className"],G=Object(c.a)((function(e){return{root:{marginTop:"15px",marginLeft:"10px"},actionIcon:{marginRight:e.spacing(1)}}}));var z=function(e){var t=e.className,r=Object(g.a)(e,W),a=G();return n.a.createElement(B.a,Object.assign({container:!0,spacing:3,justify:"space-between",className:Object(y.a)(a.root,t)},r),n.a.createElement(B.a,{item:!0},n.a.createElement(_.a,{separator:n.a.createElement(q.a,{fontSize:"small"}),"aria-label":"breadcrumb"},n.a.createElement(h.a,{variant:"body1",color:"inherit",to:"/app",component:o.a},"Dashboard"),n.a.createElement(m.a,{variant:"body1",color:"textPrimary"},"Partners"),n.a.createElement(m.a,{variant:"body1",color:"textPrimary"},"Create Partner")),n.a.createElement(m.a,{variant:"h3",color:"textPrimary"},"Please create a new partner!")))},I=Object(c.a)((function(e){return{root:{justifyContent:"center",backgroundColor:e.palette.background.dark,display:"flex",flexDirection:"column"}}}));t.default=function(){var e=I(),t=Object(i.g)();return n.a.createElement(d.a,{className:e.root,title:"Partner creating"},n.a.createElement(z,null),n.a.createElement(l.a,{maxWidth:"sm"},n.a.createElement(s.a,null,n.a.createElement(u.a,null,n.a.createElement(m.a,{align:"center",variant:"h2",color:"textPrimary"},"Partner creating page"),n.a.createElement(p.a,{mt:3},n.a.createElement(P,{onSubmitSuccess:function(){t.push("/app/partners/list")}})),n.a.createElement(p.a,{my:2},n.a.createElement(f.a,null)),n.a.createElement(h.a,{component:o.a,to:"/app/partners/list",variant:"body2",color:"textSecondary"},"go to partners list")))))}},966:function(e,t,r){"use strict";var a=r(234),n=r(235);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r(0)),i=(0,a(r(236)).default)(o.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.default=i},979:function(e,t,r){"use strict";var a=r(1),n=r(2),o=r(0),i=r(3),c=r(6),l=o.forwardRef((function(e,t){var r=e.classes,c=e.className,l=e.component,s=void 0===l?"div":l,u=Object(n.a)(e,["classes","className","component"]);return o.createElement(s,Object(a.a)({className:Object(i.a)(r.root,c),ref:t},u))}));t.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(l)},981:function(e,t,r){"use strict";var a=r(1),n=r(70),o=r(2),i=r(0),c=(r(147),r(3)),l=r(6),s=r(534),u=r(22),m=r(122),p=Object(m.a)(i.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),f=r(307);var h=Object(l.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(u.c)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,r=Object(o.a)(e,["classes"]);return i.createElement(f.a,Object(a.a)({component:"li",className:t.root,focusRipple:!0},r),i.createElement(p,{className:t.icon}))}));var d=i.forwardRef((function(e,t){var r=e.children,l=e.classes,u=e.className,m=e.component,p=void 0===m?"nav":m,f=e.expandText,d=void 0===f?"Show path":f,v=e.itemsAfterCollapse,g=void 0===v?1:v,y=e.itemsBeforeCollapse,b=void 0===y?1:y,w=e.maxItems,E=void 0===w?8:w,x=e.separator,j=void 0===x?"/":x,O=Object(o.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),L=i.useState(!1),S=L[0],N=L[1],k=i.Children.toArray(r).filter((function(e){return i.isValidElement(e)})).map((function(e,t){return i.createElement("li",{className:l.li,key:"child-".concat(t)},e)}));return i.createElement(s.a,Object(a.a)({ref:t,component:p,color:"textSecondary",className:Object(c.a)(l.root,u)},O),i.createElement("ol",{className:l.ol},function(e,t,r){return e.reduce((function(a,n,o){return o<e.length-1?a=a.concat(n,i.createElement("li",{"aria-hidden":!0,key:"separator-".concat(o),className:t},r)):a.push(n),a}),[])}(S||E&&k.length<=E?k:function(e){return b+g>=e.length?e:[].concat(Object(n.a)(e.slice(0,b)),[i.createElement(h,{"aria-label":d,key:"ellipsis",onClick:function(e){N(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(n.a)(e.slice(e.length-g,e.length)))}(k),l.separator,j)))}));t.a=Object(l.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(d)}}]);
//# sourceMappingURL=13.d1a509ca.chunk.js.map