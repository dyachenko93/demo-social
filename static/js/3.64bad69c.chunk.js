(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{101:function(t,e,r){"use strict";r.r(e);var n=r(1),a=r.n(n),o=r(7),i=r(10),c=r(4),l=r(33),u=r(86),s=r.n(u),f=r(89),m=r.n(f),p=function(t){var e=Object(n.useState)(!1),r=Object(c.a)(e,2),o=r[0],i=r[1],l=Object(n.useState)(t.status||"-----------"),u=Object(c.a)(l,2),s=u[0],f=u[1];Object(n.useEffect)(function(){f(t.status)},[t.status]);return a.a.createElement("div",{className:"teestestestr"},o?a.a.createElement("div",null,a.a.createElement("input",{onChange:function(t){f(t.currentTarget.value)},onBlur:function(){i(!1),t.updateStatus(s)},autoFocus:!0,value:s})):a.a.createElement("div",null,a.a.createElement("b",null,"Status: "),a.a.createElement("span",{onDoubleClick:function(){return i(!0)}},t.status||"No Status")))},d=r(43),A=r(32),E=r(28),v=function(t){var e=t.profile,r=t.onSubmit,n=t.submitError,o=Object(d.a)({initialValues:{fullName:e.fullName||"",lookingForAJob:e.lookingForAJob||!1,lookingForAJobDescription:e.lookingForAJobDescription||"",aboutMe:e.aboutMe||"",contacts:{github:e.contacts.github||"",vk:e.contacts.vk||"",facebook:e.contacts.facebook||"",instagram:e.contacts.instagram||"",twitter:e.contacts.twitter||"",website:e.contacts.website||"",youtube:e.contacts.youtube||"",mainLink:e.contacts.mainLink||""}},validate:function(t){var e=Object(A.b)(t.fullName)||Object(A.a)(25)(t.fullName);if(e)return{fullName:e}},onSubmit:r});return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:o.handleSubmit},a.a.createElement("div",null,a.a.createElement("b",null,"Full name:"),a.a.createElement(E.a,{name:"fullName",type:"text",placeholder:"Name",formik:o})),a.a.createElement("div",null,a.a.createElement("b",null,"Looking for a job:"),a.a.createElement(E.a,{name:"lookingForAJob",type:"checkbox",formik:o,label:"Need a job",checked:o.values.lookingForAJob})),a.a.createElement("div",null,a.a.createElement("b",null,"Professional skills:"),a.a.createElement(E.b,{name:"lookingForAJobDescription",type:"text",placeholder:"Skills",formik:o})),a.a.createElement("div",null,a.a.createElement("b",null,"About me:"),a.a.createElement(E.b,{name:"aboutMe",type:"text",placeholder:"About me",formik:o})),a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("b",null,"Contacts")),Object.keys(e.contacts).map(function(t){return a.a.createElement("div",{key:t},a.a.createElement("b",null,t),a.a.createElement(E.a,{name:"contacts."+t,type:"text",placeholder:t,formik:o,value:o.values.contacts[t]}))})),n&&a.a.createElement("div",{className:s.a.errorMessage},n),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"save"))))};function b(){b=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(B){l=function(t,e,r){return t[e]=r}}function u(t,e,r,a){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),c=new P(a||[]);return n(i,"_invoke",{value:I(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(B){return{type:"throw",arg:B}}}t.wrap=u;var f={};function m(){}function p(){}function d(){}var A={};l(A,o,function(){return this});var E=Object.getPrototypeOf,v=E&&E(E(j([])));v&&v!==e&&r.call(v,o)&&(A=v);var h=d.prototype=m.prototype=Object.create(A);function g(t){["next","throw","return"].forEach(function(e){l(t,e,function(t){return this._invoke(e,t)})})}function y(t,e){var a;n(this,"_invoke",{value:function(n,o){function i(){return new e(function(a,i){!function n(a,o,i,c){var l=s(t[a],t,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(f).then(function(t){u.value=t,i(u)},function(t){return n("throw",t,i,c)})}c(l.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function I(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return O()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function w(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=s(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,f;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=d,n(h,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=l(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,c,"GeneratorFunction")),t.prototype=Object.create(h),t},t.awrap=function(t){return{__await:t}},g(y.prototype),l(y.prototype,i,function(){return this}),t.AsyncIterator=y,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new y(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},g(h),l(h,c,"Generator"),l(h,o,function(){return this}),l(h,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(R),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),R(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;R(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var h=function(t){var e=t.profile,r=t.isOwner,n=t.goToEditMode;return a.a.createElement("div",null,r&&a.a.createElement("div",null,a.a.createElement("button",{onClick:n},"edit")),a.a.createElement("div",null,a.a.createElement("b",null,"Full name:")," ",e.fullName),a.a.createElement("div",null,a.a.createElement("b",null,"Looking for a job:")," ",e.lookingForAJob?"yes":"no"),e.lookingForAJob&&a.a.createElement("div",null,a.a.createElement("b",null,"My professional skils:")," ",e.lookingForAJobDescription),a.a.createElement("div",null,a.a.createElement("b",null,"About me:")," ",e.aboutMe),a.a.createElement("div",null,a.a.createElement("h3",null,"Contacts"),Object.keys(e.contacts).map(function(t){return a.a.createElement(g,{key:t,contactTitle:t,contactValue:e.contacts[t]})})))},g=function(t){var e=t.contactTitle,r=t.contactValue;return r?a.a.createElement("div",{className:s.a.contact},a.a.createElement("a",{href:r},e)):null},y=function(t){var e=t.profile,r=t.status,o=t.updateStatus,u=t.isOwner,f=t.savePhoto,d=t.saveProfile,A=Object(n.useState)(!1),E=Object(c.a)(A,2),g=E[0],y=E[1],I=Object(n.useState)(""),w=Object(c.a)(I,2),x=w[0],R=w[1];if(Object(n.useEffect)(function(){y(!1)},[e]),!e)return a.a.createElement(l.a,null);var P=function(){var t=Object(i.a)(b().mark(function t(e){return b().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:d(e).then(function(){y(!1)}).catch(function(t){R(t)});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement("div",{className:s.a.descriptionBlock},a.a.createElement("img",{className:s.a.profileImage,src:e.photos.large?e.photos.large:m.a,alt:"avatar"}),u&&a.a.createElement("input",{type:"file",onChange:function(t){t.target.files.length&&f(t.target.files[0])}}),a.a.createElement(p,{status:r,updateStatus:o}),g?a.a.createElement(v,{onSubmit:P,profile:e,submitError:x}):a.a.createElement(h,{profile:e,isOwner:u,goToEditMode:function(){return y(!0)}})))},I=r(44),w=r(13),x=r(90),R=r.n(x),P=r(92),j=r.n(P),O=function(t){var e=t.post,r=t.deletePost;return a.a.createElement("div",{className:j.a.item},a.a.createElement("img",{alt:"writer",src:"data:image/jpeg;base64,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"}),e.text,a.a.createElement("div",null,a.a.createElement("span",null,"like")," (",e.likesCount,")"),a.a.createElement("div",{onClick:function(){return r(e.id)},className:j.a.deleteButton}))},B=Object(A.a)(50),k=function(t){var e=Object(A.b)(t.newPost)||B(t.newPost);if(e)return{newPost:e}},L=function(t){return a.a.createElement("form",{onSubmit:t.formik.handleSubmit},a.a.createElement("div",null,a.a.createElement(E.b,{name:"newPost",id:"newPost",formik:t.formik,placeholder:"Post message"})),a.a.createElement("div",null,a.a.createElement("button",{disabled:!t.formik.dirty||!t.formik.isValid,type:"submit"},"Add post")))},Q=a.a.memo(function(t){var e=Object(d.a)({initialValues:{newPost:""},validate:k,onSubmit:function(r){t.addPost(r.newPost),e.resetForm()}}),r=Object(w.a)(t.posts).reverse().map(function(e,r){return a.a.createElement(O,{key:"post_"+r,post:e,deletePost:t.deletePost})});return a.a.createElement("div",{className:R.a.postsBlock},a.a.createElement("h3",null,"My posts"),a.a.createElement(L,{formik:e}),a.a.createElement("div",{className:R.a.posts},r))}),T=Object(o.b)(function(t){return{posts:t.profilePage.posts}},function(t){return{addPost:function(e){t(Object(I.a)(e))},deletePost:function(e){t(Object(I.c)(e))}}})(Q),N=function(t){return a.a.createElement("div",null,a.a.createElement(y,{isOwner:t.isOwner,profile:t.profile,status:t.status,updateStatus:t.updateStatus,savePhoto:t.savePhoto,saveProfile:t.saveProfile}),a.a.createElement(T,null))},M=r(0),V=r(8);e.default=Object(V.c)(Object(o.b)(function(t){return{authUserId:t.auth.userId,isAuth:t.auth.isAuth,profile:t.profilePage.profile,status:t.profilePage.status}},{getProfile:I.d,getStatus:I.e,updateStatus:I.h,savePhoto:I.f,saveProfile:I.g}))(function(t){var e=Object(M.m)(),r=Object(M.o)(),o=function(){var n=r.userId;n||(n=t.authUserId)||e("/login"),t.getProfile(n),t.getStatus(n)};return Object(n.useEffect)(function(){o()},[]),Object(n.useEffect)(function(){o()},[r.userId,t.authUserId]),a.a.createElement(N,Object.assign({},t,{isOwner:!r.userId,profile:t.profile,status:t.status,updateStatus:t.updateStatus,savePhoto:t.savePhoto}))})},86:function(t,e,r){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__x1umi",profileImage:"ProfileInfo_profileImage__3Uv5V",bgImg:"ProfileInfo_bgImg__1FRwf",contact:"ProfileInfo_contact__1_4PD",errorMessage:"ProfileInfo_errorMessage__34xAS"}},89:function(t,e,r){t.exports=r.p+"static/media/user.2aee7378.jpg"},90:function(t,e,r){t.exports={postsBlock:"MyPosts_postsBlock__2P4AF",posts:"MyPosts_posts__3nLGS"}},92:function(t,e,r){t.exports={item:"Post_item__3ZVk9",deleteButton:"Post_deleteButton__3pqKr"}}}]);
//# sourceMappingURL=3.64bad69c.chunk.js.map