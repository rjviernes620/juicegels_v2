function Gf(t,a){for(var o=0;o<a.length;o++){const r=a[o];if(typeof r!="string"&&!Array.isArray(r)){for(const c in r)if(c!=="default"&&!(c in t)){const p=Object.getOwnPropertyDescriptor(r,c);p&&Object.defineProperty(t,c,p.get?p:{enumerable:!0,get:()=>r[c]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const p of c)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&r(g)}).observe(document,{childList:!0,subtree:!0});function o(c){const p={};return c.integrity&&(p.integrity=c.integrity),c.referrerPolicy&&(p.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?p.credentials="include":c.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function r(c){if(c.ep)return;c.ep=!0;const p=o(c);fetch(c.href,p)}})();function Pf(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Su={exports:{}},on={},vu={exports:{}},Ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function Jf(){if(_p)return Ue;_p=1;var t=Symbol.for("react.element"),a=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),g=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),S=Symbol.iterator;function J(y){return y===null||typeof y!="object"?null:(y=S&&y[S]||y["@@iterator"],typeof y=="function"?y:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,A={};function q(y,B,ie){this.props=y,this.context=B,this.refs=A,this.updater=ie||U}q.prototype.isReactComponent={},q.prototype.setState=function(y,B){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,B,"setState")},q.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function D(){}D.prototype=q.prototype;function Q(y,B,ie){this.props=y,this.context=B,this.refs=A,this.updater=ie||U}var X=Q.prototype=new D;X.constructor=Q,H(X,q.prototype),X.isPureReactComponent=!0;var pe=Array.isArray,re=Object.prototype.hasOwnProperty,we={current:null},Le={key:!0,ref:!0,__self:!0,__source:!0};function C(y,B,ie){var de,xe={},me=null,Ge=null;if(B!=null)for(de in B.ref!==void 0&&(Ge=B.ref),B.key!==void 0&&(me=""+B.key),B)re.call(B,de)&&!Le.hasOwnProperty(de)&&(xe[de]=B[de]);var Be=arguments.length-2;if(Be===1)xe.children=ie;else if(1<Be){for(var Je=Array(Be),dl=0;dl<Be;dl++)Je[dl]=arguments[dl+2];xe.children=Je}if(y&&y.defaultProps)for(de in Be=y.defaultProps,Be)xe[de]===void 0&&(xe[de]=Be[de]);return{$$typeof:t,type:y,key:me,ref:Ge,props:xe,_owner:we.current}}function be(y,B){return{$$typeof:t,type:y.type,key:B,ref:y.ref,props:y.props,_owner:y._owner}}function ge(y){return typeof y=="object"&&y!==null&&y.$$typeof===t}function $e(y){var B={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(ie){return B[ie]})}var Ee=/\/+/g;function He(y,B){return typeof y=="object"&&y!==null&&y.key!=null?$e(""+y.key):B.toString(36)}function Pe(y,B,ie,de,xe){var me=typeof y;(me==="undefined"||me==="boolean")&&(y=null);var Ge=!1;if(y===null)Ge=!0;else switch(me){case"string":case"number":Ge=!0;break;case"object":switch(y.$$typeof){case t:case a:Ge=!0}}if(Ge)return Ge=y,xe=xe(Ge),y=de===""?"."+He(Ge,0):de,pe(xe)?(ie="",y!=null&&(ie=y.replace(Ee,"$&/")+"/"),Pe(xe,B,ie,"",function(dl){return dl})):xe!=null&&(ge(xe)&&(xe=be(xe,ie+(!xe.key||Ge&&Ge.key===xe.key?"":(""+xe.key).replace(Ee,"$&/")+"/")+y)),B.push(xe)),1;if(Ge=0,de=de===""?".":de+":",pe(y))for(var Be=0;Be<y.length;Be++){me=y[Be];var Je=de+He(me,Be);Ge+=Pe(me,B,ie,Je,xe)}else if(Je=J(y),typeof Je=="function")for(y=Je.call(y),Be=0;!(me=y.next()).done;)me=me.value,Je=de+He(me,Be++),Ge+=Pe(me,B,ie,Je,xe);else if(me==="object")throw B=String(y),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return Ge}function Se(y,B,ie){if(y==null)return y;var de=[],xe=0;return Pe(y,de,"","",function(me){return B.call(ie,me,xe++)}),de}function Fe(y){if(y._status===-1){var B=y._result;B=B(),B.then(function(ie){(y._status===0||y._status===-1)&&(y._status=1,y._result=ie)},function(ie){(y._status===0||y._status===-1)&&(y._status=2,y._result=ie)}),y._status===-1&&(y._status=0,y._result=B)}if(y._status===1)return y._result.default;throw y._result}var le={current:null},O={transition:null},V={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:O,ReactCurrentOwner:we};function K(){throw Error("act(...) is not supported in production builds of React.")}return Ue.Children={map:Se,forEach:function(y,B,ie){Se(y,function(){B.apply(this,arguments)},ie)},count:function(y){var B=0;return Se(y,function(){B++}),B},toArray:function(y){return Se(y,function(B){return B})||[]},only:function(y){if(!ge(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},Ue.Component=q,Ue.Fragment=o,Ue.Profiler=c,Ue.PureComponent=Q,Ue.StrictMode=r,Ue.Suspense=m,Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,Ue.act=K,Ue.cloneElement=function(y,B,ie){if(y==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+y+".");var de=H({},y.props),xe=y.key,me=y.ref,Ge=y._owner;if(B!=null){if(B.ref!==void 0&&(me=B.ref,Ge=we.current),B.key!==void 0&&(xe=""+B.key),y.type&&y.type.defaultProps)var Be=y.type.defaultProps;for(Je in B)re.call(B,Je)&&!Le.hasOwnProperty(Je)&&(de[Je]=B[Je]===void 0&&Be!==void 0?Be[Je]:B[Je])}var Je=arguments.length-2;if(Je===1)de.children=ie;else if(1<Je){Be=Array(Je);for(var dl=0;dl<Je;dl++)Be[dl]=arguments[dl+2];de.children=Be}return{$$typeof:t,type:y.type,key:xe,ref:me,props:de,_owner:Ge}},Ue.createContext=function(y){return y={$$typeof:g,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},y.Provider={$$typeof:p,_context:y},y.Consumer=y},Ue.createElement=C,Ue.createFactory=function(y){var B=C.bind(null,y);return B.type=y,B},Ue.createRef=function(){return{current:null}},Ue.forwardRef=function(y){return{$$typeof:f,render:y}},Ue.isValidElement=ge,Ue.lazy=function(y){return{$$typeof:k,_payload:{_status:-1,_result:y},_init:Fe}},Ue.memo=function(y,B){return{$$typeof:_,type:y,compare:B===void 0?null:B}},Ue.startTransition=function(y){var B=O.transition;O.transition={};try{y()}finally{O.transition=B}},Ue.unstable_act=K,Ue.useCallback=function(y,B){return le.current.useCallback(y,B)},Ue.useContext=function(y){return le.current.useContext(y)},Ue.useDebugValue=function(){},Ue.useDeferredValue=function(y){return le.current.useDeferredValue(y)},Ue.useEffect=function(y,B){return le.current.useEffect(y,B)},Ue.useId=function(){return le.current.useId()},Ue.useImperativeHandle=function(y,B,ie){return le.current.useImperativeHandle(y,B,ie)},Ue.useInsertionEffect=function(y,B){return le.current.useInsertionEffect(y,B)},Ue.useLayoutEffect=function(y,B){return le.current.useLayoutEffect(y,B)},Ue.useMemo=function(y,B){return le.current.useMemo(y,B)},Ue.useReducer=function(y,B,ie){return le.current.useReducer(y,B,ie)},Ue.useRef=function(y){return le.current.useRef(y)},Ue.useState=function(y){return le.current.useState(y)},Ue.useSyncExternalStore=function(y,B,ie){return le.current.useSyncExternalStore(y,B,ie)},Ue.useTransition=function(){return le.current.useTransition()},Ue.version="18.3.1",Ue}var jp;function Uu(){return jp||(jp=1,vu.exports=Jf()),vu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function zf(){if(Sp)return on;Sp=1;var t=Uu(),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function g(f,m,_){var k,S={},J=null,U=null;_!==void 0&&(J=""+_),m.key!==void 0&&(J=""+m.key),m.ref!==void 0&&(U=m.ref);for(k in m)r.call(m,k)&&!p.hasOwnProperty(k)&&(S[k]=m[k]);if(f&&f.defaultProps)for(k in m=f.defaultProps,m)S[k]===void 0&&(S[k]=m[k]);return{$$typeof:a,type:f,key:J,ref:U,props:S,_owner:c.current}}return on.Fragment=o,on.jsx=g,on.jsxs=g,on}var vp;function Uf(){return vp||(vp=1,Su.exports=zf()),Su.exports}var w=Uf(),b=Uu();const qf=Pf(b),Bf=Gf({__proto__:null,default:qf},[b]);/**
 * react-router v7.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var dd=t=>{throw TypeError(t)},gd=(t,a,o)=>a.has(t)||dd("Cannot "+o),Zl=(t,a,o)=>(gd(t,a,"read from private field"),o?o.call(t):a.get(t)),gn=(t,a,o)=>a.has(t)?dd("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(t):a.set(t,o),ws=(t,a,o,r)=>(gd(t,a,"write to private field"),a.set(t,o),o),wp="popstate";function xp(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function Af(t={}){function a(r,c){var _;let p=(_=c.state)==null?void 0:_.masked,{pathname:g,search:f,hash:m}=p||r.location;return hn("",{pathname:g,search:f,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default",p?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function o(r,c){return typeof c=="string"?c:ks(c)}return Hf(a,o,null,t)}function ze(t,a){if(t===!1||t===null||typeof t>"u")throw new Error(a)}function ul(t,a){if(!t){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function Mf(){return Math.random().toString(36).substring(2,10)}function yp(t,a){return{usr:t.state,key:t.key,idx:a,masked:t.mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function hn(t,a,o=null,r,c){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof a=="string"?bs(a):a,state:o,key:a&&a.key||r||Mf(),mask:c}}function ks({pathname:t="/",search:a="",hash:o=""}){return a&&a!=="?"&&(t+=a.charAt(0)==="?"?a:"?"+a),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function bs(t){let a={};if(t){let o=t.indexOf("#");o>=0&&(a.hash=t.substring(o),t=t.substring(0,o));let r=t.indexOf("?");r>=0&&(a.search=t.substring(r),t=t.substring(0,r)),t&&(a.pathname=t)}return a}function Hf(t,a,o,r={}){let{window:c=document.defaultView,v5Compat:p=!1}=r,g=c.history,f="POP",m=null,_=k();_==null&&(_=0,g.replaceState({...g.state,idx:_},""));function k(){return(g.state||{idx:null}).idx}function S(){f="POP";let q=k(),D=q==null?null:q-_;_=q,m&&m({action:f,location:A.location,delta:D})}function J(q,D){f="PUSH";let Q=xp(q)?q:hn(A.location,q,D);_=k()+1;let X=yp(Q,_),pe=A.createHref(Q.mask||Q);try{g.pushState(X,"",pe)}catch(re){if(re instanceof DOMException&&re.name==="DataCloneError")throw re;c.location.assign(pe)}p&&m&&m({action:f,location:A.location,delta:1})}function U(q,D){f="REPLACE";let Q=xp(q)?q:hn(A.location,q,D);_=k();let X=yp(Q,_),pe=A.createHref(Q.mask||Q);g.replaceState(X,"",pe),p&&m&&m({action:f,location:A.location,delta:0})}function H(q){return fd(c,q)}let A={get action(){return f},get location(){return t(c,g)},listen(q){if(m)throw new Error("A history only accepts one active listener");return c.addEventListener(wp,S),m=q,()=>{c.removeEventListener(wp,S),m=null}},createHref(q){return a(c,q)},createURL:H,encodeLocation(q){let D=H(q);return{pathname:D.pathname,search:D.search,hash:D.hash}},push:J,replace:U,go(q){return g.go(q)}};return A}function fd(t,a,o=!1){let r="http://localhost";t&&(r=t.location.origin!=="null"?t.location.origin:t.location.href),ze(r,"No window.location.(origin|href) available to create URL");let c=typeof a=="string"?a:ks(a);return c=c.replace(/ $/,"%20"),!o&&c.startsWith("//")&&(c=r+c),new URL(c,r)}var fn,Ep=class{constructor(t){if(gn(this,fn,new Map),t)for(let[a,o]of t)this.set(a,o)}get(t){if(Zl(this,fn).has(t))return Zl(this,fn).get(t);if(t.defaultValue!==void 0)return t.defaultValue;throw new Error("No value found for context")}set(t,a){Zl(this,fn).set(t,a)}};fn=new WeakMap;var Tf=new Set(["lazy","caseSensitive","path","id","index","children"]);function Rf(t){return Tf.has(t)}var Of=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function Nf(t){return Of.has(t)}function Ff(t){return t.index===!0}function _n(t,a,o=[],r={},c=!1){return t.map((p,g)=>{let f=[...o,String(g)],m=typeof p.id=="string"?p.id:f.join("-");if(ze(p.index!==!0||!p.children,"Cannot specify children on an index route"),ze(c||!r[m],`Found a route id collision on id "${m}".  Route id's must be globally unique within Data Router usages`),Ff(p)){let _={...p,id:m};return r[m]=kp(_,a(_)),_}else{let _={...p,id:m,children:void 0};return r[m]=kp(_,a(_)),p.children&&(_.children=_n(p.children,a,f,r,c)),_}})}function kp(t,a){return Object.assign(t,{...a,...typeof a.lazy=="object"&&a.lazy!=null?{lazy:{...t.lazy,...a.lazy}}:{}})}function md(t,a,o="/"){return gs(t,a,o,!1)}function gs(t,a,o,r,c){let p=typeof a=="string"?bs(a):a,g=ss(p.pathname||"/",o);if(g==null)return null;let f=c??Pa(t),m=null,_=im(g);for(let k=0;m==null&&k<f.length;++k)m=lm(f[k],_,r);return m}function Df(t,a){let{route:o,pathname:r,params:c}=t;return{id:o.id,pathname:r,params:c,data:a[o.id],loaderData:a[o.id],handle:o.handle}}function Pa(t){let a=hd(t);return Wf(a),a}function hd(t,a=[],o=[],r="",c=!1){let p=(g,f,m=c,_)=>{let k={relativePath:_===void 0?g.path||"":_,caseSensitive:g.caseSensitive===!0,childrenIndex:f,route:g};if(k.relativePath.startsWith("/")){if(!k.relativePath.startsWith(r)&&m)return;ze(k.relativePath.startsWith(r),`Absolute route path "${k.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),k.relativePath=k.relativePath.slice(r.length)}let S=ls([r,k.relativePath]),J=o.concat(k);g.children&&g.children.length>0&&(ze(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${S}".`),hd(g.children,a,J,S,m)),!(g.path==null&&!g.index)&&a.push({path:S,score:Zf(S,g.index),routesMeta:J})};return t.forEach((g,f)=>{var m;if(g.path===""||!((m=g.path)!=null&&m.includes("?")))p(g,f);else for(let _ of _d(g.path))p(g,f,!0,_)}),a}function _d(t){let a=t.split("/");if(a.length===0)return[];let[o,...r]=a,c=o.endsWith("?"),p=o.replace(/\?$/,"");if(r.length===0)return c?[p,""]:[p];let g=_d(r.join("/")),f=[];return f.push(...g.map(m=>m===""?p:[p,m].join("/"))),c&&f.push(...g),f.map(m=>t.startsWith("/")&&m===""?"/":m)}function Wf(t){t.sort((a,o)=>a.score!==o.score?o.score-a.score:em(a.routesMeta.map(r=>r.childrenIndex),o.routesMeta.map(r=>r.childrenIndex)))}var $f=/^:[\w-]+$/,Vf=3,Kf=2,Qf=1,Yf=10,Xf=-2,bp=t=>t==="*";function Zf(t,a){let o=t.split("/"),r=o.length;return o.some(bp)&&(r+=Xf),a&&(r+=Kf),o.filter(c=>!bp(c)).reduce((c,p)=>c+($f.test(p)?Vf:p===""?Qf:Yf),r)}function em(t,a){return t.length===a.length&&t.slice(0,-1).every((r,c)=>r===a[c])?t[t.length-1]-a[a.length-1]:0}function lm(t,a,o=!1){let{routesMeta:r}=t,c={},p="/",g=[];for(let f=0;f<r.length;++f){let m=r[f],_=f===r.length-1,k=p==="/"?a:a.slice(p.length)||"/",S=qa({path:m.relativePath,caseSensitive:m.caseSensitive,end:_},k),J=m.route;if(!S&&_&&o&&!r[r.length-1].route.index&&(S=qa({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},k)),!S)return null;Object.assign(c,S.params),g.push({params:c,pathname:ls([p,S.pathname]),pathnameBase:am(ls([p,S.pathnameBase])),route:J}),S.pathnameBase!=="/"&&(p=ls([p,S.pathnameBase]))}return g}function qa(t,a){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[o,r]=sm(t.path,t.caseSensitive,t.end),c=a.match(o);if(!c)return null;let p=c[0],g=p.replace(/(.)\/+$/,"$1"),f=c.slice(1);return{params:r.reduce((_,{paramName:k,isOptional:S},J)=>{if(k==="*"){let H=f[J]||"";g=p.slice(0,p.length-H.length).replace(/(.)\/+$/,"$1")}const U=f[J];return S&&!U?_[k]=void 0:_[k]=(U||"").replace(/%2F/g,"/"),_},{}),pathname:p,pathnameBase:g,pattern:t}}function sm(t,a=!1,o=!0){ul(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],c="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,f,m,_,k)=>{if(r.push({paramName:f,isOptional:m!=null}),m){let S=k.charAt(_+g.length);return S&&S!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(r.push({paramName:"*"}),c+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?c+="\\/*$":t!==""&&t!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,a?void 0:"i"),r]}function im(t){try{return t.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return ul(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),t}}function ss(t,a){if(a==="/")return t;if(!t.toLowerCase().startsWith(a.toLowerCase()))return null;let o=a.endsWith("/")?a.length-1:a.length,r=t.charAt(o);return r&&r!=="/"?null:t.slice(o)||"/"}function tm({basename:t,pathname:a}){return a==="/"?t:ls([t,a])}var jd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qu=t=>jd.test(t);function nm(t,a="/"){let{pathname:o,search:r="",hash:c=""}=typeof t=="string"?bs(t):t,p;return o?(o=Au(o),o.startsWith("/")?p=Cp(o.substring(1),"/"):p=Cp(o,a)):p=a,{pathname:p,search:om(r),hash:um(c)}}function Cp(t,a){let o=Ba(a).split("/");return t.split("/").forEach(c=>{c===".."?o.length>1&&o.pop():c!=="."&&o.push(c)}),o.length>1?o.join("/"):"/"}function wu(t,a,o,r){return`Cannot include a '${t}' character in a manually specified \`to.${a}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Sd(t){return t.filter((a,o)=>o===0||a.route.path&&a.route.path.length>0)}function Bu(t){let a=Sd(t);return a.map((o,r)=>r===a.length-1?o.pathname:o.pathnameBase)}function Aa(t,a,o,r=!1){let c;typeof t=="string"?c=bs(t):(c={...t},ze(!c.pathname||!c.pathname.includes("?"),wu("?","pathname","search",c)),ze(!c.pathname||!c.pathname.includes("#"),wu("#","pathname","hash",c)),ze(!c.search||!c.search.includes("#"),wu("#","search","hash",c)));let p=t===""||c.pathname==="",g=p?"/":c.pathname,f;if(g==null)f=o;else{let S=a.length-1;if(!r&&g.startsWith("..")){let J=g.split("/");for(;J[0]==="..";)J.shift(),S-=1;c.pathname=J.join("/")}f=S>=0?a[S]:"/"}let m=nm(c,f),_=g&&g!=="/"&&g.endsWith("/"),k=(p||g===".")&&o.endsWith("/");return!m.pathname.endsWith("/")&&(_||k)&&(m.pathname+="/"),m}var Au=t=>t.replace(/\/\/+/g,"/"),ls=t=>Au(t.join("/")),Ba=t=>t.replace(/\/+$/,""),am=t=>Ba(t).replace(/^\/*/,"/"),om=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,um=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,Sn=class{constructor(t,a,o,r=!1){this.status=t,this.statusText=a||"",this.internal=r,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}};function jn(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function vn(t){let a=t.map(o=>o.route.path).filter(Boolean);return ls(a)||"/"}var vd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function wd(t,a){let o=t;if(typeof o!="string"||!jd.test(o))return{absoluteURL:void 0,isExternal:!1,to:o};let r=o,c=!1;if(vd)try{let p=new URL(window.location.href),g=o.startsWith("//")?new URL(p.protocol+o):new URL(o),f=ss(g.pathname,a);g.origin===p.origin&&f!=null?o=f+g.search+g.hash:c=!0}catch{ul(!1,`<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:c,to:o}}var hi=Symbol("Uninstrumented");function rm(t,a){let o={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};t.forEach(c=>c({id:a.id,index:a.index,path:a.path,instrument(p){let g=Object.keys(o);for(let f of g)p[f]&&o[f].push(p[f])}}));let r={};if(typeof a.lazy=="function"&&o.lazy.length>0){let c=xt(o.lazy,a.lazy,()=>{});c&&(r.lazy=c)}if(typeof a.lazy=="object"){let c=a.lazy;["middleware","loader","action"].forEach(p=>{let g=c[p],f=o[`lazy.${p}`];if(typeof g=="function"&&f.length>0){let m=xt(f,g,()=>{});m&&(r.lazy=Object.assign(r.lazy||{},{[p]:m}))}})}return["loader","action"].forEach(c=>{let p=a[c];if(typeof p=="function"&&o[c].length>0){let g=p[hi]??p,f=xt(o[c],g,(...m)=>Ip(m[0]));f&&(c==="loader"&&g.hydrate===!0&&(f.hydrate=!0),f[hi]=g,r[c]=f)}}),a.middleware&&a.middleware.length>0&&o.middleware.length>0&&(r.middleware=a.middleware.map(c=>{let p=c[hi]??c,g=xt(o.middleware,p,(...f)=>Ip(f[0]));return g?(g[hi]=p,g):c})),r}function cm(t,a){let o={navigate:[],fetch:[]};if(a.forEach(r=>r({instrument(c){let p=Object.keys(c);for(let g of p)c[g]&&o[g].push(c[g])}})),o.navigate.length>0){let r=t.navigate[hi]??t.navigate,c=xt(o.navigate,r,(...p)=>{let[g,f]=p;return{to:typeof g=="number"||typeof g=="string"?g:g?ks(g):".",...Lp(t,f??{})}});c&&(c[hi]=r,t.navigate=c)}if(o.fetch.length>0){let r=t.fetch[hi]??t.fetch,c=xt(o.fetch,r,(...p)=>{let[g,,f,m]=p;return{href:f??".",fetcherKey:g,...Lp(t,m??{})}});c&&(c[hi]=r,t.fetch=c)}return t}function xt(t,a,o){return t.length===0?null:async(...r)=>{let c=await xd(t,o(...r),()=>a(...r),t.length-1);if(c.type==="error")throw c.value;return c.value}}async function xd(t,a,o,r){let c=t[r],p;if(c){let g,f=async()=>(g?console.error("You cannot call instrumented handlers more than once"):g=xd(t,a,o,r-1),p=await g,ze(p,"Expected a result"),p.type==="error"&&p.value instanceof Error?{status:"error",error:p.value}:{status:"success",error:void 0});try{await c(f,a)}catch(m){console.error("An instrumentation function threw an error:",m)}g||await f(),await g}else try{p={type:"success",value:await o()}}catch(g){p={type:"error",value:g}}return p||{type:"error",value:new Error("No result assigned in instrumentation chain.")}}function Ip(t){let{request:a,context:o,params:r,pattern:c}=t;return{request:pm(a),params:{...r},pattern:c,context:dm(o)}}function Lp(t,a){return{currentUrl:ks(t.state.location),..."formMethod"in a?{formMethod:a.formMethod}:{},..."formEncType"in a?{formEncType:a.formEncType}:{},..."formData"in a?{formData:a.formData}:{},..."body"in a?{body:a.body}:{}}}function pm(t){return{method:t.method,url:t.url,headers:{get:(...a)=>t.headers.get(...a)}}}function dm(t){if(fm(t)){let a={...t};return Object.freeze(a),a}else return{get:a=>t.get(a)}}var gm=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function fm(t){if(t===null||typeof t!="object")return!1;const a=Object.getPrototypeOf(t);return a===Object.prototype||a===null||Object.getOwnPropertyNames(a).sort().join("\0")===gm}var yd=["POST","PUT","PATCH","DELETE"],mm=new Set(yd),hm=["GET",...yd],_m=new Set(hm),Ed=new Set([301,302,303,307,308]),jm=new Set([307,308]),xu={state:"idle",location:void 0,matches:void 0,historyAction:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Sm={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},un={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},vm=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),kd="remix-router-transitions",bd=Symbol("ResetLoaderData"),qi,St,gi,vt,wm=class{constructor(t){gn(this,qi),gn(this,St),gn(this,gi),gn(this,vt),ws(this,qi,t),ws(this,St,Pa(t))}get stableRoutes(){return Zl(this,qi)}get activeRoutes(){return Zl(this,gi)??Zl(this,qi)}get branches(){return Zl(this,vt)??Zl(this,St)}get hasHMRRoutes(){return Zl(this,gi)!=null}setRoutes(t){ws(this,qi,t),ws(this,St,Pa(t))}setHmrRoutes(t){ws(this,gi,t),ws(this,vt,Pa(t))}commitHmrRoutes(){Zl(this,gi)&&(ws(this,qi,Zl(this,gi)),ws(this,St,Zl(this,vt)),ws(this,gi,void 0),ws(this,vt,void 0))}};qi=new WeakMap;St=new WeakMap;gi=new WeakMap;vt=new WeakMap;function xm(t){const a=t.window?t.window:typeof window<"u"?window:void 0,o=typeof a<"u"&&typeof a.document<"u"&&typeof a.document.createElement<"u";ze(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let r=t.hydrationRouteProperties||[],c=t.mapRouteProperties||vm,p=c;if(t.instrumentations){let j=t.instrumentations;p=x=>({...c(x),...rm(j.map(G=>G.route).filter(Boolean),x)})}let g={},f=new wm(_n(t.routes,p,void 0,g)),m=t.basename||"/";m.startsWith("/")||(m=`/${m}`);let _=t.dataStrategy||Cm,k={...t.future},S=null,J=new Set,U=null,H=null,A=null,q=null,D=t.hydrationData!=null,Q=gs(f.activeRoutes,t.history.location,m,!1,f.branches),X=!1,pe=null,re,we;if(Q==null&&!t.patchRoutesOnNavigation){let j=es(404,{pathname:t.history.location.pathname}),{matches:x,route:G}=Ca(f.activeRoutes);re=!0,we=!re,Q=x,pe={[G.id]:j}}else if(Q&&!t.hydrationData&&Ns(Q,f.activeRoutes,t.history.location.pathname).active&&(Q=null),Q)if(Q.some(j=>j.route.lazy))re=!1,we=!re;else if(!Q.some(j=>Mu(j.route)))re=!0,we=!re;else{let j=t.hydrationData?t.hydrationData.loaderData:null,x=t.hydrationData?t.hydrationData.errors:null,G=Q;if(x){let M=Q.findIndex(T=>x[T.route.id]!==void 0);G=G.slice(0,M+1)}we=!1,re=!0,G.forEach(M=>{let T=Cd(M.route,j,x);we=we||T.renderFallback,re=re&&!T.shouldLoad})}else{re=!1,we=!re,Q=[];let j=Ns(null,f.activeRoutes,t.history.location.pathname);j.active&&j.matches&&(X=!0,Q=j.matches)}let Le,C={historyAction:t.history.action,location:t.history.location,matches:Q,initialized:re,renderFallback:we,navigation:xu,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||pe,fetchers:new Map,blockers:new Map},be="POP",ge=null,$e=!1,Ee,He=!1,Pe=new Map,Se=null,Fe=!1,le=!1,O=new Set,V=new Map,K=0,y=-1,B=new Map,ie=new Set,de=new Map,xe=new Map,me=new Set,Ge=new Map,Be,Je=null;function dl(){if(S=t.history.listen(({action:j,location:x,delta:G})=>{if(Be){Be(),Be=void 0;return}ul(Ge.size===0||G!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let M=Ps({currentLocation:C.location,nextLocation:x,historyAction:j});if(M&&G!=null){let T=new Promise(ae=>{Be=ae});t.history.go(G*-1),ts(M,{state:"blocked",location:x,proceed(){ts(M,{state:"proceeding",proceed:void 0,reset:void 0,location:x}),T.then(()=>t.history.go(G))},reset(){let ae=new Map(C.blockers);ae.set(M,un),el({blockers:ae})}}),ge==null||ge.resolve(),ge=null;return}return Ml(j,x)}),o){Dm(a,Pe);let j=()=>Wm(a,Pe);a.addEventListener("pagehide",j),Se=()=>a.removeEventListener("pagehide",j)}return C.initialized||Ml("POP",C.location,{initialHydration:!0}),Le}function Ls(){S&&S(),Se&&Se(),J.clear(),Ee&&Ee.abort(),C.fetchers.forEach((j,x)=>Gs(C.fetchers,x)),C.blockers.forEach((j,x)=>Di(x))}function Mi(j){if(J.add(j),U){let{newErrors:x}=U;U=null,j(C,{deletedFetchers:[],newErrors:x,viewTransitionOpts:void 0,flushSync:!1})}return()=>J.delete(j)}function el(j,x={}){j.matches&&(j.matches=j.matches.map(T=>{let ae=g[T.route.id],oe=T.route;return oe.element!==ae.element||oe.errorElement!==ae.errorElement||oe.hydrateFallbackElement!==ae.hydrateFallbackElement?{...T,route:ae}:T})),C={...C,...j};let G=[],M=[];C.fetchers.forEach((T,ae)=>{T.state==="idle"&&(me.has(ae)?G.push(ae):M.push(ae))}),me.forEach(T=>{!C.fetchers.has(T)&&!V.has(T)&&G.push(T)}),J.size===0&&(U={newErrors:j.errors??null}),[...J].forEach(T=>T(C,{deletedFetchers:G,newErrors:j.errors??null,viewTransitionOpts:x.viewTransitionOpts,flushSync:x.flushSync===!0})),G.forEach(T=>Gs(C.fetchers,T)),M.forEach(T=>C.fetchers.delete(T))}function Wl(j,x,{flushSync:G}={}){var ve,Ie;let M=C.actionData!=null&&C.navigation.formMethod!=null&&kl(C.navigation.formMethod)&&C.navigation.state==="loading"&&((ve=j.state)==null?void 0:ve._isRedirect)!==!0,T;x.actionData?Object.keys(x.actionData).length>0?T=x.actionData:T=null:M?T=C.actionData:T=null;let ae=x.loaderData?Tp(C.loaderData,x.loaderData,x.matches||[],x.errors):C.loaderData,oe=C.blockers;oe.size>0&&(oe=new Map(oe),oe.forEach((ce,qe)=>oe.set(qe,un)));let ke=Fe?!1:bt(j,x.matches||C.matches),Y=$e===!0||C.navigation.formMethod!=null&&kl(C.navigation.formMethod)&&((Ie=j.state)==null?void 0:Ie._isRedirect)!==!0;f.commitHmrRoutes(),Fe||be==="POP"||(be==="PUSH"?t.history.push(j,j.state):be==="REPLACE"&&t.history.replace(j,j.state));let ue;if(be==="POP"){let ce=Pe.get(C.location.pathname);ce&&ce.has(j.pathname)?ue={currentLocation:C.location,nextLocation:j}:Pe.has(j.pathname)&&(ue={currentLocation:j,nextLocation:C.location})}else if(He){let ce=Pe.get(C.location.pathname);ce?ce.add(j.pathname):(ce=new Set([j.pathname]),Pe.set(C.location.pathname,ce)),ue={currentLocation:C.location,nextLocation:j}}el({...x,actionData:T,loaderData:ae,historyAction:be,location:j,initialized:!0,renderFallback:!1,navigation:xu,revalidation:"idle",restoreScrollPosition:ke,preventScrollReset:Y,blockers:oe},{viewTransitionOpts:ue,flushSync:G===!0}),be="POP",$e=!1,He=!1,Fe=!1,le=!1,ge==null||ge.resolve(),ge=null,Je==null||Je.resolve(),Je=null}async function Os(j,x){if(ge==null||ge.resolve(),ge=null,typeof j=="number"){ge||(ge=Fp());let Ne=ge.promise;return t.history.go(j),Ne}let G=Pu(C.location,C.matches,m,j,x==null?void 0:x.fromRouteId,x==null?void 0:x.relative),{path:M,submission:T,error:ae}=Gp(!1,G,x),oe;x!=null&&x.mask&&(oe={pathname:"",search:"",hash:"",...typeof x.mask=="string"?bs(x.mask):{...C.location.mask,...x.mask}});let ke=C.location,Y=hn(ke,M,x&&x.state,void 0,oe);Y={...Y,...t.history.encodeLocation(Y)};let ue=x&&x.replace!=null?x.replace:void 0,ve="PUSH";ue===!0?ve="REPLACE":ue===!1||T!=null&&kl(T.formMethod)&&T.formAction===C.location.pathname+C.location.search&&(ve="REPLACE");let Ie=x&&"preventScrollReset"in x?x.preventScrollReset===!0:void 0,ce=(x&&x.flushSync)===!0,qe=Ps({currentLocation:ke,nextLocation:Y,historyAction:ve});if(qe){ts(qe,{state:"blocked",location:Y,proceed(){ts(qe,{state:"proceeding",proceed:void 0,reset:void 0,location:Y}),Os(j,x)},reset(){let Ne=new Map(C.blockers);Ne.set(qe,un),el({blockers:Ne})}});return}await Ml(ve,Y,{submission:T,pendingError:ae,preventScrollReset:Ie,replace:x&&x.replace,enableViewTransition:x&&x.viewTransition,flushSync:ce,callSiteDefaultShouldRevalidate:x&&x.defaultShouldRevalidate})}function ji(){Je||(Je=Fp()),fe(),el({revalidation:"loading"});let j=Je.promise;return C.navigation.state==="submitting"?j:C.navigation.state==="idle"?(Ml(C.historyAction,C.location,{startUninterruptedRevalidation:!0}),j):(Ml(be||C.historyAction,C.navigation.location,{overrideNavigation:C.navigation,enableViewTransition:He===!0}),j)}async function Ml(j,x,G){Ee&&Ee.abort(),Ee=null,be=j,Fe=(G&&G.startUninterruptedRevalidation)===!0,kn(C.location,C.matches),$e=(G&&G.preventScrollReset)===!0,He=(G&&G.enableViewTransition)===!0;let M=f.activeRoutes,T=G!=null&&G.initialHydration&&C.matches&&C.matches.length>0&&!X?C.matches:gs(M,x,m,!1,f.branches),ae=(G&&G.flushSync)===!0;if(T&&C.initialized&&!le&&qm(C.location,x)&&!(G&&G.submission&&kl(G.submission.formMethod))){Wl(x,{matches:T},{flushSync:ae});return}let oe=Ns(T,M,x.pathname);if(oe.active&&oe.matches&&(T=oe.matches),!T){let{error:Qe,notFoundMatches:De,route:Ae}=Wi(x.pathname);Wl(x,{matches:De,loaderData:{},errors:{[Ae.id]:Qe}},{flushSync:ae});return}let ke=G&&G.overrideNavigation?{...G.overrideNavigation,matches:T,historyAction:j}:void 0;Ee=new AbortController;let Y=wt(t.history,x,Ee.signal,G&&G.submission),ue=t.getContext?await t.getContext():new Ep,ve;if(G&&G.pendingError)ve=[mi(T).route.id,{type:"error",error:G.pendingError}];else if(G&&G.submission&&kl(G.submission.formMethod)){let Qe=await Gl(Y,x,G.submission,T,j,ue,oe.active,G&&G.initialHydration===!0,{replace:G.replace,flushSync:ae});if(Qe.shortCircuited)return;if(Qe.pendingActionResult){let[De,Ae]=Qe.pendingActionResult;if(Dl(Ae)&&jn(Ae.error)&&Ae.error.status===404){Ee=null,Wl(x,{matches:Qe.matches,loaderData:{},errors:{[De]:Ae.error}});return}}T=Qe.matches||T,ve=Qe.pendingActionResult,ke=yu(x,T,j,G.submission),ae=!1,oe.active=!1,Y=wt(t.history,Y.url,Y.signal)}let{shortCircuited:Ie,matches:ce,loaderData:qe,errors:Ne,workingFetchers:nl}=await Si(Y,x,T,j,ue,oe.active,ke,G&&G.submission,G&&G.fetcherSubmission,G&&G.replace,G&&G.initialHydration===!0,ae,ve,G&&G.callSiteDefaultShouldRevalidate);Ie||(Ee=null,Wl(x,{matches:ce||T,...Rp(ve),loaderData:qe,errors:Ne,...nl?{fetchers:nl}:{}}))}async function Gl(j,x,G,M,T,ae,oe,ke,Y={}){fe();let ue=Nm(x,M,T,G);if(el({navigation:ue},{flushSync:Y.flushSync===!0}),oe){let ce=await wi(M,x.pathname,j.signal);if(ce.type==="aborted")return{shortCircuited:!0};if(ce.type==="error"){if(ce.partialMatches.length===0){let{matches:Ne,route:nl}=Ca(f.activeRoutes);return{matches:Ne,pendingActionResult:[nl.id,{type:"error",error:ce.error}]}}let qe=mi(ce.partialMatches).route.id;return{matches:ce.partialMatches,pendingActionResult:[qe,{type:"error",error:ce.error}]}}else if(ce.matches)M=ce.matches;else{let{notFoundMatches:qe,error:Ne,route:nl}=Wi(x.pathname);return{matches:qe,pendingActionResult:[nl.id,{type:"error",error:Ne}]}}}let ve,Ie=Ja(M,x);if(!Ie.route.action&&!Ie.route.lazy)ve={type:"error",error:es(405,{method:j.method,pathname:x.pathname,routeId:Ie.route.id})};else{let ce=yt(p,g,j,x,M,Ie,ke?[]:r,ae),qe=await he(j,x,ce,ae,null);if(ve=qe[Ie.route.id],!ve){for(let Ne of M)if(qe[Ne.route.id]){ve=qe[Ne.route.id];break}}if(j.signal.aborted)return{shortCircuited:!0}}if(Bi(ve)){let ce;return Y&&Y.replace!=null?ce=Y.replace:ce=Ap(ve.response.headers.get("Location"),new URL(j.url),m,t.history)===C.location.pathname+C.location.search,await $(j,ve,!0,{submission:G,replace:ce}),{shortCircuited:!0}}if(Dl(ve)){let ce=mi(M,Ie.route.id);return(Y&&Y.replace)!==!0&&(be="PUSH"),{matches:M,pendingActionResult:[ce.route.id,ve,Ie.route.id]}}return{matches:M,pendingActionResult:[Ie.route.id,ve]}}async function Si(j,x,G,M,T,ae,oe,ke,Y,ue,ve,Ie,ce,qe){let Ne=oe||yu(x,G,M,ke),nl=ke||Y||Np(Ne),Qe=!Fe&&!ve;if(ae){if(Qe){let vl=fs(ce);el({navigation:Ne,...vl!==void 0?{actionData:vl}:{}},{flushSync:Ie})}let Me=await wi(G,x.pathname,j.signal);if(Me.type==="aborted")return{shortCircuited:!0};if(Me.type==="error"){if(Me.partialMatches.length===0){let{matches:Cl,route:Pl}=Ca(f.activeRoutes);return{matches:Cl,loaderData:{},errors:{[Pl.id]:Me.error}}}let vl=mi(Me.partialMatches).route.id;return{matches:Me.partialMatches,loaderData:{},errors:{[vl]:Me.error}}}else if(Me.matches)G=Me.matches;else{let{error:vl,notFoundMatches:Cl,route:Pl}=Wi(x.pathname);return{matches:Cl,loaderData:{},errors:{[Pl.id]:vl}}}}let De=f.activeRoutes,{dsMatches:Ae,revalidatingFetchers:jl}=Pp(j,T,p,g,t.history,C,G,nl,x,ve?[]:r,ve===!0,le,O,me,de,ie,De,m,t.patchRoutesOnNavigation!=null,f.branches,ce,qe);if(y=++K,!t.dataStrategy&&!Ae.some(Me=>Me.shouldLoad)&&!Ae.some(Me=>Me.route.middleware&&Me.route.middleware.length>0)&&jl.length===0){let Me=new Map(C.fetchers),vl=Ni(Me);return Wl(x,{matches:G,loaderData:{},errors:ce&&Dl(ce[1])?{[ce[0]]:ce[1].error}:null,...Rp(ce),...vl?{fetchers:Me}:{}},{flushSync:Ie}),{shortCircuited:!0}}if(Qe){let Me={};if(!ae){Me.navigation=Ne;let vl=fs(ce);vl!==void 0&&(Me.actionData=vl)}jl.length>0&&(Me.fetchers=ms(jl)),el(Me,{flushSync:Ie})}jl.forEach(Me=>{Hl(Me.key),Me.controller&&V.set(Me.key,Me.controller)});let Js=()=>jl.forEach(Me=>Hl(Me.key));Ee&&Ee.signal.addEventListener("abort",Js);let{loaderResults:ns,fetcherResults:as}=await Ce(Ae,jl,j,x,T);if(j.signal.aborted)return{shortCircuited:!0};Ee&&Ee.signal.removeEventListener("abort",Js),jl.forEach(Me=>V.delete(Me.key));let hs=Ia(ns);if(hs)return await $(j,hs.result,!0,{replace:ue}),{shortCircuited:!0};if(hs=Ia(as),hs)return ie.add(hs.key),await $(j,hs.result,!0,{replace:ue}),{shortCircuited:!0};let Tl=new Map(C.fetchers),{loaderData:Ds,errors:rl}=Hp(C,G,ns,ce,jl,as,Tl);ve&&C.errors&&(rl={...C.errors,...rl});let $i=Ni(Tl),Sl=Fi(y,Tl),Vi=$i||Sl||jl.length>0;return{matches:G,loaderData:Ds,errors:rl,...Vi?{workingFetchers:Tl}:{}}}function fs(j){if(j&&!Dl(j[1]))return{[j[0]]:j[1].data};if(C.actionData)return Object.keys(C.actionData).length===0?null:C.actionData}function ms(j){let x=new Map(C.fetchers);return j.forEach(G=>{let M=x.get(G.key),T=rn(void 0,M?M.data:void 0);x.set(G.key,T)}),x}async function vi(j,x,G,M){Hl(j);let T=(M&&M.flushSync)===!0,ae=f.activeRoutes,oe=Pu(C.location,C.matches,m,G,x,M==null?void 0:M.relative),ke=gs(ae,oe,m,!1,f.branches),Y=Ns(ke,ae,oe);if(Y.active&&Y.matches&&(ke=Y.matches),!ke){il(j,x,es(404,{pathname:oe}),{flushSync:T});return}let{path:ue,submission:ve,error:Ie}=Gp(!0,oe,M);if(Ie){il(j,x,Ie,{flushSync:T});return}let ce=t.getContext?await t.getContext():new Ep,qe=(M&&M.preventScrollReset)===!0;if(ve&&kl(ve.formMethod)){await Hi(j,x,ue,ke,ce,Y.active,T,qe,ve,M&&M.defaultShouldRevalidate);return}de.set(j,{routeId:x,path:ue}),await L(j,x,ue,ke,ce,Y.active,T,qe,ve)}async function Hi(j,x,G,M,T,ae,oe,ke,Y,ue){fe(),de.delete(j);let ve=C.fetchers.get(j);Oe(j,Fm(Y,ve),{flushSync:oe});let Ie=new AbortController,ce=wt(t.history,G,Ie.signal,Y);if(ae){let Ve=await wi(M,new URL(ce.url).pathname,ce.signal,j);if(Ve.type==="aborted")return;if(Ve.type==="error"){il(j,x,Ve.error,{flushSync:oe});return}else if(Ve.matches)M=Ve.matches;else{il(j,x,es(404,{pathname:G}),{flushSync:oe});return}}let qe=Ja(M,G);if(!qe.route.action&&!qe.route.lazy){let Ve=es(405,{method:Y.formMethod,pathname:G,routeId:x});il(j,x,Ve,{flushSync:oe});return}V.set(j,Ie);let Ne=K,nl=yt(p,g,ce,G,M,qe,r,T),Qe=await he(ce,G,nl,T,j),De=Qe[qe.route.id];if(!De){for(let Ve of nl)if(Qe[Ve.route.id]){De=Qe[Ve.route.id];break}}if(ce.signal.aborted){V.get(j)===Ie&&V.delete(j);return}if(me.has(j)){if(Bi(De)||Dl(De)){Oe(j,Es(void 0));return}}else{if(Bi(De))if(V.delete(j),y>Ne){Oe(j,Es(void 0));return}else return ie.add(j),Oe(j,rn(Y)),$(ce,De,!1,{fetcherSubmission:Y,preventScrollReset:ke});if(Dl(De)){il(j,x,De.error);return}}let Ae=C.navigation.location||C.location,jl=wt(t.history,Ae,Ie.signal),Js=f.activeRoutes,ns=C.navigation.state!=="idle"?gs(Js,C.navigation.location,m,!1,f.branches):C.matches;ze(ns,"Didn't find any matches after fetcher action");let as=++K;B.set(j,as);let{dsMatches:hs,revalidatingFetchers:Tl}=Pp(jl,T,p,g,t.history,C,ns,Y,Ae,r,!1,le,O,me,de,ie,Js,m,t.patchRoutesOnNavigation!=null,f.branches,[qe.route.id,De],ue),Ds=rn(Y,De.data),rl=new Map(C.fetchers);rl.set(j,Ds),Tl.filter(Ve=>Ve.key!==j).forEach(Ve=>{let zs=Ve.key,Ki=rl.get(zs),bn=rn(void 0,Ki?Ki.data:void 0);rl.set(zs,bn),Hl(zs),Ve.controller&&V.set(zs,Ve.controller)}),el({fetchers:rl});let $i=()=>Tl.forEach(Ve=>Hl(Ve.key));Ie.signal.addEventListener("abort",$i);let{loaderResults:Sl,fetcherResults:Vi}=await Ce(hs,Tl,jl,Ae,T);if(Ie.signal.aborted)return;Ie.signal.removeEventListener("abort",$i),B.delete(j),V.delete(j),Tl.forEach(Ve=>V.delete(Ve.key));let Me=C.fetchers.has(j),vl=Ve=>{if(!Me)return Ve;let zs=new Map(Ve.fetchers);return zs.set(j,Es(De.data)),{...Ve,fetchers:zs}},Cl=Ia(Sl);if(Cl)return C=vl(C),$(jl,Cl.result,!1,{preventScrollReset:ke});if(Cl=Ia(Vi),Cl)return ie.add(Cl.key),C=vl(C),$(jl,Cl.result,!1,{preventScrollReset:ke});let Pl=new Map(C.fetchers);Me&&Pl.set(j,Es(De.data));let{loaderData:Ws,errors:$s}=Hp(C,ns,Sl,void 0,Tl,Vi,Pl);Fi(as,Pl),C.navigation.state==="loading"&&as>y?(ze(be,"Expected pending action"),Ee&&Ee.abort(),Wl(C.navigation.location,{matches:ns,loaderData:Ws,errors:$s,fetchers:Pl})):(el({errors:$s,loaderData:Tp(C.loaderData,Ws,ns,$s),fetchers:Pl}),le=!1)}async function L(j,x,G,M,T,ae,oe,ke,Y){let ue=C.fetchers.get(j);Oe(j,rn(Y,ue?ue.data:void 0),{flushSync:oe});let ve=new AbortController,Ie=wt(t.history,G,ve.signal);if(ae){let De=await wi(M,new URL(Ie.url).pathname,Ie.signal,j);if(De.type==="aborted")return;if(De.type==="error"){il(j,x,De.error,{flushSync:oe});return}else if(De.matches)M=De.matches;else{il(j,x,es(404,{pathname:G}),{flushSync:oe});return}}let ce=Ja(M,G);V.set(j,ve);let qe=K,Ne=yt(p,g,Ie,G,M,ce,r,T),nl=await he(Ie,G,Ne,T,j),Qe=nl[ce.route.id];if(!Qe){for(let De of M)if(nl[De.route.id]){Qe=nl[De.route.id];break}}if(V.get(j)===ve&&V.delete(j),!Ie.signal.aborted){if(me.has(j)){Oe(j,Es(void 0));return}if(Bi(Qe))if(y>qe){Oe(j,Es(void 0));return}else{ie.add(j),await $(Ie,Qe,!1,{preventScrollReset:ke});return}if(Dl(Qe)){il(j,x,Qe.error);return}Oe(j,Es(Qe.data))}}async function $(j,x,G,{submission:M,fetcherSubmission:T,preventScrollReset:ae,replace:oe}={}){G||(ge==null||ge.resolve(),ge=null),x.response.headers.has("X-Remix-Revalidate")&&(le=!0);let ke=x.response.headers.get("Location");ze(ke,"Expected a Location header on the redirect Response"),ke=Ap(ke,new URL(j.url),m,t.history);let Y=hn(C.location,ke,{_isRedirect:!0});if(o){let Ne=!1;if(x.response.headers.has("X-Remix-Reload-Document"))Ne=!0;else if(qu(ke)){const nl=fd(a,ke,!0);Ne=nl.origin!==a.location.origin||ss(nl.pathname,m)==null}if(Ne){oe?a.location.replace(ke):a.location.assign(ke);return}}Ee=null;let ue=oe===!0||x.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:ve,formAction:Ie,formEncType:ce}=C.navigation;!M&&!T&&ve&&Ie&&ce&&(M=Np(C.navigation));let qe=M||T;if(jm.has(x.response.status)&&qe&&kl(qe.formMethod))await Ml(ue,Y,{submission:{...qe,formAction:ke},preventScrollReset:ae||$e,enableViewTransition:G?He:void 0});else{let Ne=yu(Y,[],ue,M);await Ml(ue,Y,{overrideNavigation:Ne,fetcherSubmission:T,preventScrollReset:ae||$e,enableViewTransition:G?He:void 0})}}async function he(j,x,G,M,T){var ke;let ae,oe={};try{ae=await Lm(_,j,x,G,T,M,!1)}catch(Y){return G.filter(ue=>ue.shouldLoad).forEach(ue=>{oe[ue.route.id]={type:"error",error:Y}}),oe}if(j.signal.aborted)return oe;if(!kl(j.method))for(let Y of G){if(((ke=ae[Y.route.id])==null?void 0:ke.type)==="error")break;!ae.hasOwnProperty(Y.route.id)&&!C.loaderData.hasOwnProperty(Y.route.id)&&(!C.errors||!C.errors.hasOwnProperty(Y.route.id))&&Y.shouldCallHandler()&&(ae[Y.route.id]={type:"error",result:new Error(`No result returned from dataStrategy for route ${Y.route.id}`)})}for(let[Y,ue]of Object.entries(ae))if(Hm(ue)){let ve=ue.result;oe[Y]={type:"redirect",response:zm(ve,j,Y,G,m)}}else oe[Y]=await Jm(ue);return oe}async function Ce(j,x,G,M,T){let ae=he(G,M,j,T,null),oe=Promise.all(x.map(async ue=>{if(ue.matches&&ue.match&&ue.request&&ue.controller){let Ie=(await he(ue.request,ue.path,ue.matches,T,ue.key))[ue.match.route.id];return{[ue.key]:Ie}}else return Promise.resolve({[ue.key]:{type:"error",error:es(404,{pathname:ue.path})}})})),ke=await ae,Y=(await oe).reduce((ue,ve)=>Object.assign(ue,ve),{});return{loaderResults:ke,fetcherResults:Y}}function fe(){le=!0,de.forEach((j,x)=>{V.has(x)&&O.add(x),Hl(x)})}function Oe(j,x,G={}){let M=new Map(C.fetchers);M.set(j,x),el({fetchers:M},{flushSync:(G&&G.flushSync)===!0})}function il(j,x,G,M={}){let T=mi(C.matches,x),ae=new Map(C.fetchers);Gs(ae,j),el({errors:{[T.route.id]:G},fetchers:ae},{flushSync:(M&&M.flushSync)===!0})}function bl(j){return xe.set(j,(xe.get(j)||0)+1),me.has(j)&&me.delete(j),C.fetchers.get(j)||Sm}function Ti(j,x){Hl(j,x==null?void 0:x.reason),Oe(j,Es(null))}function Gs(j,x){let G=C.fetchers.get(x);V.has(x)&&!(G&&G.state==="loading"&&B.has(x))&&Hl(x),de.delete(x),B.delete(x),ie.delete(x),me.delete(x),O.delete(x),j.delete(x)}function Ri(j){let x=(xe.get(j)||0)-1;x<=0?(xe.delete(j),me.add(j)):xe.set(j,x),el({fetchers:new Map(C.fetchers)})}function Hl(j,x){let G=V.get(j);G&&(G.abort(x),V.delete(j))}function Oi(j,x){for(let G of j){let M=x.get(G);ze(M,`Expected fetcher: ${G}`);let T=Es(M.data);x.set(G,T)}}function Ni(j){let x=[],G=!1;for(let M of ie){let T=j.get(M);ze(T,`Expected fetcher: ${M}`),T.state==="loading"&&(ie.delete(M),x.push(M),G=!0)}return Oi(x,j),G}function Fi(j,x){let G=[];for(let[M,T]of B)if(T<j){let ae=x.get(M);ze(ae,`Expected fetcher: ${M}`),ae.state==="loading"&&(Hl(M),B.delete(M),G.push(M))}return Oi(G,x),G.length>0}function Et(j,x){let G=C.blockers.get(j)||un;return Ge.get(j)!==x&&Ge.set(j,x),G}function Di(j){C.blockers.delete(j),Ge.delete(j)}function ts(j,x){let G=C.blockers.get(j)||un;ze(G.state==="unblocked"&&x.state==="blocked"||G.state==="blocked"&&x.state==="blocked"||G.state==="blocked"&&x.state==="proceeding"||G.state==="blocked"&&x.state==="unblocked"||G.state==="proceeding"&&x.state==="unblocked",`Invalid blocker state transition: ${G.state} -> ${x.state}`);let M=new Map(C.blockers);M.set(j,x),el({blockers:M})}function Ps({currentLocation:j,nextLocation:x,historyAction:G}){if(Ge.size===0)return;Ge.size>1&&ul(!1,"A router only supports one blocker at a time");let M=Array.from(Ge.entries()),[T,ae]=M[M.length-1],oe=C.blockers.get(T);if(!(oe&&oe.state==="proceeding")&&ae({currentLocation:j,nextLocation:x,historyAction:G}))return T}function Wi(j){let x=es(404,{pathname:j}),G=f.activeRoutes,{matches:M,route:T}=Ca(G);return{notFoundMatches:M,route:T,error:x}}function En(j,x,G){if(H=j,q=x,A=G||null,!D&&C.navigation===xu){D=!0;let M=bt(C.location,C.matches);M!=null&&el({restoreScrollPosition:M})}return()=>{H=null,q=null,A=null}}function kt(j,x){return A&&A(j,x.map(M=>Df(M,C.loaderData)))||j.key}function kn(j,x){if(H&&q){let G=kt(j,x);H[G]=q()}}function bt(j,x){if(H){let G=kt(j,x),M=H[G];if(typeof M=="number")return M}return null}function Ns(j,x,G){if(t.patchRoutesOnNavigation){let M=f.branches;if(j){if(Object.keys(j[0].params).length>0)return{active:!0,matches:gs(x,G,m,!0,M)}}else return{active:!0,matches:gs(x,G,m,!0,M)||[]}}return{active:!1,matches:null}}async function wi(j,x,G,M){if(!t.patchRoutesOnNavigation)return{type:"success",matches:j};let T=j;for(;;){let ae=g;try{await t.patchRoutesOnNavigation({signal:G,path:x,matches:T,fetcherKey:M,patch:(ue,ve)=>{G.aborted||Jp(ue,ve,f,ae,p,!1)}})}catch(ue){return{type:"error",error:ue,partialMatches:T}}if(G.aborted)return{type:"aborted"};let oe=f.branches,ke=gs(f.activeRoutes,x,m,!1,oe),Y=null;if(ke){if(Object.keys(ke[0].params).length===0)return{type:"success",matches:ke};if(Y=gs(f.activeRoutes,x,m,!0,oe),!(Y&&T.length<Y.length&&Fs(T,Y.slice(0,T.length))))return{type:"success",matches:ke}}if(Y||(Y=gs(f.activeRoutes,x,m,!0,oe)),!Y||Fs(T,Y))return{type:"success",matches:null};T=Y}}function Fs(j,x){return j.length===x.length&&j.every((G,M)=>G.route.id===x[M].route.id)}function Ct(j){g={},f.setHmrRoutes(_n(j,p,void 0,g))}function xi(j,x,G=!1){Jp(j,x,f,g,p,G),f.hasHMRRoutes||el({})}return Le={get basename(){return m},get future(){return k},get state(){return C},get routes(){return f.stableRoutes},get branches(){return f.branches},get manifest(){return g},get window(){return a},initialize:dl,subscribe:Mi,enableScrollRestoration:En,navigate:Os,fetch:vi,revalidate:ji,createHref:j=>t.history.createHref(j),encodeLocation:j=>t.history.encodeLocation(j),getFetcher:bl,resetFetcher:Ti,deleteFetcher:Ri,dispose:Ls,getBlocker:Et,deleteBlocker:Di,patchRoutes:xi,_internalFetchControllers:V,_internalSetRoutes:Ct,_internalSetStateDoNotUseOrYouWillBreakYourApp(j){el(j)}},t.instrumentations&&(Le=cm(Le,t.instrumentations.map(j=>j.router).filter(Boolean))),Le}function ym(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Pu(t,a,o,r,c,p){let g,f;if(c){g=[];for(let _ of a)if(g.push(_),_.route.id===c){f=_;break}}else g=a,f=a[a.length-1];let m=Aa(r||".",Bu(g),ss(t.pathname,o)||t.pathname,p==="path");if(r==null&&(m.search=t.search,m.hash=t.hash),(r==null||r===""||r===".")&&f){let _=Tu(m.search);if(f.route.index&&!_)m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index";else if(!f.route.index&&_){let k=new URLSearchParams(m.search),S=k.getAll("index");k.delete("index"),S.filter(U=>U).forEach(U=>k.append("index",U));let J=k.toString();m.search=J?`?${J}`:""}}return o!=="/"&&(m.pathname=tm({basename:o,pathname:m.pathname})),ks(m)}function Gp(t,a,o){if(!o||!ym(o))return{path:a};if(o.formMethod&&!Om(o.formMethod))return{path:a,error:es(405,{method:o.formMethod})};let r=()=>({path:a,error:es(400,{type:"invalid-body"})}),p=(o.formMethod||"get").toUpperCase(),g=Ud(a);if(o.body!==void 0){if(o.formEncType==="text/plain"){if(!kl(p))return r();let S=typeof o.body=="string"?o.body:o.body instanceof FormData||o.body instanceof URLSearchParams?Array.from(o.body.entries()).reduce((J,[U,H])=>`${J}${U}=${H}
`,""):String(o.body);return{path:a,submission:{formMethod:p,formAction:g,formEncType:o.formEncType,formData:void 0,json:void 0,text:S}}}else if(o.formEncType==="application/json"){if(!kl(p))return r();try{let S=typeof o.body=="string"?JSON.parse(o.body):o.body;return{path:a,submission:{formMethod:p,formAction:g,formEncType:o.formEncType,formData:void 0,json:S,text:void 0}}}catch{return r()}}}ze(typeof FormData=="function","FormData is not available in this environment");let f,m;if(o.formData)f=zu(o.formData),m=o.formData;else if(o.body instanceof FormData)f=zu(o.body),m=o.body;else if(o.body instanceof URLSearchParams)f=o.body,m=Mp(f);else if(o.body==null)f=new URLSearchParams,m=new FormData;else try{f=new URLSearchParams(o.body),m=Mp(f)}catch{return r()}let _={formMethod:p,formAction:g,formEncType:o&&o.formEncType||"application/x-www-form-urlencoded",formData:m,json:void 0,text:void 0};if(kl(_.formMethod))return{path:a,submission:_};let k=bs(a);return t&&k.search&&Tu(k.search)&&f.append("index",""),k.search=`?${f}`,{path:ks(k),submission:_}}function Pp(t,a,o,r,c,p,g,f,m,_,k,S,J,U,H,A,q,D,Q,X,pe,re){var Fe;let we=pe?Dl(pe[1])?pe[1].error:pe[1].data:void 0,Le=c.createURL(p.location),C=c.createURL(m),be;if(k&&p.errors){let le=Object.keys(p.errors)[0];be=g.findIndex(O=>O.route.id===le)}else if(pe&&Dl(pe[1])){let le=pe[0];be=g.findIndex(O=>O.route.id===le)-1}let ge=pe?pe[1].statusCode:void 0,$e=ge&&ge>=400,Ee={currentUrl:Le,currentParams:((Fe=p.matches[0])==null?void 0:Fe.params)||{},nextUrl:C,nextParams:g[0].params,...f,actionResult:we,actionStatus:ge},He=vn(g),Pe=g.map((le,O)=>{let{route:V}=le,K=null;if(be!=null&&O>be)K=!1;else if(V.lazy)K=!0;else if(!Mu(V))K=!1;else if(k){let{shouldLoad:de}=Cd(V,p.loaderData,p.errors);K=de}else Em(p.loaderData,p.matches[O],le)&&(K=!0);if(K!==null)return Ju(o,r,t,m,He,le,_,a,K);let y=!1;typeof re=="boolean"?y=re:$e?y=!1:(S||Le.pathname+Le.search===C.pathname+C.search||Le.search!==C.search||km(p.matches[O],le))&&(y=!0);let B={...Ee,defaultShouldRevalidate:y},ie=mn(le,B);return Ju(o,r,t,m,He,le,_,a,ie,B,re)}),Se=[];return H.forEach((le,O)=>{if(k||!g.some(me=>me.route.id===le.routeId)||U.has(O))return;let V=p.fetchers.get(O),K=V&&V.state!=="idle"&&V.data===void 0,y=gs(q,le.path,D??"/",!1,X);if(!y){if(Q&&K)return;Se.push({key:O,routeId:le.routeId,path:le.path,matches:null,match:null,request:null,controller:null});return}if(A.has(O))return;let B=Ja(y,le.path),ie=new AbortController,de=wt(c,le.path,ie.signal),xe=null;if(J.has(O))J.delete(O),xe=yt(o,r,de,le.path,y,B,_,a);else if(K)S&&(xe=yt(o,r,de,le.path,y,B,_,a));else{let me;typeof re=="boolean"?me=re:$e?me=!1:me=S;let Ge={...Ee,defaultShouldRevalidate:me};mn(B,Ge)&&(xe=yt(o,r,de,le.path,y,B,_,a,Ge))}xe&&Se.push({key:O,routeId:le.routeId,path:le.path,matches:xe,match:B,request:de,controller:ie})}),{dsMatches:Pe,revalidatingFetchers:Se}}function Mu(t){return t.loader!=null||t.middleware!=null&&t.middleware.length>0}function Cd(t,a,o){if(t.lazy)return{shouldLoad:!0,renderFallback:!0};if(!Mu(t))return{shouldLoad:!1,renderFallback:!1};let r=a!=null&&t.id in a,c=o!=null&&o[t.id]!==void 0;if(!r&&c)return{shouldLoad:!1,renderFallback:!1};if(typeof t.loader=="function"&&t.loader.hydrate===!0)return{shouldLoad:!0,renderFallback:!r};let p=!r&&!c;return{shouldLoad:p,renderFallback:p}}function Em(t,a,o){let r=!a||o.route.id!==a.route.id,c=!t.hasOwnProperty(o.route.id);return r||c}function km(t,a){let o=t.route.path;return t.pathname!==a.pathname||o!=null&&o.endsWith("*")&&t.params["*"]!==a.params["*"]}function mn(t,a){if(t.route.shouldRevalidate){let o=t.route.shouldRevalidate(a);if(typeof o=="boolean")return o}return a.defaultShouldRevalidate}function Jp(t,a,o,r,c,p){let g;if(t){let _=r[t];ze(_,`No route found to patch children into: routeId = ${t}`),_.children||(_.children=[]),g=_.children}else g=o.activeRoutes;let f=[],m=[];if(a.forEach(_=>{let k=g.find(S=>Id(_,S));k?m.push({existingRoute:k,newRoute:_}):f.push(_)}),f.length>0){let _=_n(f,c,[t||"_","patch",String((g==null?void 0:g.length)||"0")],r);g.push(..._)}if(p&&m.length>0)for(let _=0;_<m.length;_++){let{existingRoute:k,newRoute:S}=m[_],J=k,[U]=_n([S],c,[],{},!0);Object.assign(J,{element:U.element?U.element:J.element,errorElement:U.errorElement?U.errorElement:J.errorElement,hydrateFallbackElement:U.hydrateFallbackElement?U.hydrateFallbackElement:J.hydrateFallbackElement})}o.hasHMRRoutes||o.setRoutes([...o.activeRoutes])}function Id(t,a){var o;return"id"in t&&"id"in a&&t.id===a.id?!0:t.index===a.index&&t.path===a.path&&t.caseSensitive===a.caseSensitive?(!t.children||t.children.length===0)&&(!a.children||a.children.length===0)?!0:((o=t.children)==null?void 0:o.every((r,c)=>{var p;return(p=a.children)==null?void 0:p.some(g=>Id(r,g))}))??!1:!1}var zp=new WeakMap,Ld=({key:t,route:a,manifest:o,mapRouteProperties:r})=>{let c=o[a.id];if(ze(c,"No route found in manifest"),!c.lazy||typeof c.lazy!="object")return;let p=c.lazy[t];if(!p)return;let g=zp.get(c);g||(g={},zp.set(c,g));let f=g[t];if(f)return f;let m=(async()=>{let _=Rf(t),S=c[t]!==void 0&&t!=="hasErrorBoundary";if(_)ul(!_,"Route property "+t+" is not a supported lazy route property. This property will be ignored."),g[t]=Promise.resolve();else if(S)ul(!1,`Route "${c.id}" has a static property "${t}" defined. The lazy property will be ignored.`);else{let J=await p();J!=null&&(Object.assign(c,{[t]:J}),Object.assign(c,r(c)))}typeof c.lazy=="object"&&(c.lazy[t]=void 0,Object.values(c.lazy).every(J=>J===void 0)&&(c.lazy=void 0))})();return g[t]=m,m},Up=new WeakMap;function bm(t,a,o,r,c){let p=o[t.id];if(ze(p,"No route found in manifest"),!t.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof t.lazy=="function"){let k=Up.get(p);if(k)return{lazyRoutePromise:k,lazyHandlerPromise:k};let S=(async()=>{ze(typeof t.lazy=="function","No lazy route function found");let J=await t.lazy(),U={};for(let H in J){let A=J[H];if(A===void 0)continue;let q=Nf(H),Q=p[H]!==void 0&&H!=="hasErrorBoundary";q?ul(!q,"Route property "+H+" is not a supported property to be returned from a lazy route function. This property will be ignored."):Q?ul(!Q,`Route "${p.id}" has a static property "${H}" defined but its lazy function is also returning a value for this property. The lazy route property "${H}" will be ignored.`):U[H]=A}Object.assign(p,U),Object.assign(p,{...r(p),lazy:void 0})})();return Up.set(p,S),S.catch(()=>{}),{lazyRoutePromise:S,lazyHandlerPromise:S}}let g=Object.keys(t.lazy),f=[],m;for(let k of g){if(c&&c.includes(k))continue;let S=Ld({key:k,route:t,manifest:o,mapRouteProperties:r});S&&(f.push(S),k===a&&(m=S))}let _=f.length>0?Promise.all(f).then(()=>{}):void 0;return _==null||_.catch(()=>{}),m==null||m.catch(()=>{}),{lazyRoutePromise:_,lazyHandlerPromise:m}}async function qp(t){let a=t.matches.filter(c=>c.shouldLoad),o={};return(await Promise.all(a.map(c=>c.resolve()))).forEach((c,p)=>{o[a[p].route.id]=c}),o}async function Cm(t){return t.matches.some(a=>a.route.middleware)?Gd(t,()=>qp(t)):qp(t)}function Gd(t,a){return Im(t,a,r=>{if(Rm(r))throw r;return r},Am,o);function o(r,c,p){if(p)return Promise.resolve(Object.assign(p.value,{[c]:{type:"error",result:r}}));{let{matches:g}=t,f=Math.min(Math.max(g.findIndex(_=>_.route.id===c),0),Math.max(g.findIndex(_=>_.shouldCallHandler()),0)),m=mi(g,g[f].route.id).route.id;return Promise.resolve({[m]:{type:"error",result:r}})}}}async function Im(t,a,o,r,c){let{matches:p,...g}=t,f=p.flatMap(_=>_.route.middleware?_.route.middleware.map(k=>[_.route.id,k]):[]);return await Pd(g,f,a,o,r,c)}async function Pd(t,a,o,r,c,p,g=0){let{request:f}=t;if(f.signal.aborted)throw f.signal.reason??new Error(`Request aborted: ${f.method} ${f.url}`);let m=a[g];if(!m)return await o();let[_,k]=m,S,J=async()=>{if(S)throw new Error("You may only call `next()` once per middleware");try{return S={value:await Pd(t,a,o,r,c,p,g+1)},S.value}catch(U){return S={value:await p(U,_,S)},S.value}};try{let U=await k(t,J),H=U!=null?r(U):void 0;return c(H)?H:S?H??S.value:(S={value:await J()},S.value)}catch(U){return await p(U,_,S)}}function Jd(t,a,o,r,c){let p=Ld({key:"middleware",route:r.route,manifest:a,mapRouteProperties:t}),g=bm(r.route,kl(o.method)?"action":"loader",a,t,c);return{middleware:p,route:g.lazyRoutePromise,handler:g.lazyHandlerPromise}}function Ju(t,a,o,r,c,p,g,f,m,_=null,k){let S=!1,J=Jd(t,a,o,p,g);return{...p,_lazyPromises:J,shouldLoad:m,shouldRevalidateArgs:_,shouldCallHandler(U){return S=!0,_?typeof k=="boolean"?mn(p,{..._,defaultShouldRevalidate:k}):typeof U=="boolean"?mn(p,{..._,defaultShouldRevalidate:U}):mn(p,_):m},resolve(U){let{lazy:H,loader:A,middleware:q}=p.route,D=S||m||U&&!kl(o.method)&&(H||A),Q=q&&q.length>0&&!A&&!H;return D&&(kl(o.method)||!Q)?Gm({request:o,path:r,pattern:c,match:p,lazyHandlerPromise:J==null?void 0:J.handler,lazyRoutePromise:J==null?void 0:J.route,handlerOverride:U,scopedContext:f}):Promise.resolve({type:"data",result:void 0})}}}function yt(t,a,o,r,c,p,g,f,m=null){return c.map(_=>_.route.id!==p.route.id?{..._,shouldLoad:!1,shouldRevalidateArgs:m,shouldCallHandler:()=>!1,_lazyPromises:Jd(t,a,o,_,g),resolve:()=>Promise.resolve({type:"data",result:void 0})}:Ju(t,a,o,r,vn(c),_,g,f,!0,m))}async function Lm(t,a,o,r,c,p,g){r.some(k=>{var S;return(S=k._lazyPromises)==null?void 0:S.middleware})&&await Promise.all(r.map(k=>{var S;return(S=k._lazyPromises)==null?void 0:S.middleware}));let f={request:a,url:zd(a,o),pattern:vn(r),params:r[0].params,context:p,matches:r},_=await t({...f,fetcherKey:c,runClientMiddleware:k=>{let S=f;return Gd(S,()=>k({...S,fetcherKey:c,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(r.flatMap(k=>{var S,J;return[(S=k._lazyPromises)==null?void 0:S.handler,(J=k._lazyPromises)==null?void 0:J.route]}))}catch{}return _}async function Gm({request:t,path:a,pattern:o,match:r,lazyHandlerPromise:c,lazyRoutePromise:p,handlerOverride:g,scopedContext:f}){let m,_,k=kl(t.method),S=k?"action":"loader",J=U=>{let H,A=new Promise((Q,X)=>H=X);_=()=>H(),t.signal.addEventListener("abort",_);let q=Q=>typeof U!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${S}" [routeId: ${r.route.id}]`)):U({request:t,url:zd(t,a),pattern:o,params:r.params,context:f},...Q!==void 0?[Q]:[]),D=(async()=>{try{return{type:"data",result:await(g?g(X=>q(X)):q())}}catch(Q){return{type:"error",result:Q}}})();return Promise.race([D,A])};try{let U=k?r.route.action:r.route.loader;if(c||p)if(U){let H,[A]=await Promise.all([J(U).catch(q=>{H=q}),c,p]);if(H!==void 0)throw H;m=A}else{await c;let H=k?r.route.action:r.route.loader;if(H)[m]=await Promise.all([J(H),p]);else if(S==="action"){let A=new URL(t.url),q=A.pathname+A.search;throw es(405,{method:t.method,pathname:q,routeId:r.route.id})}else return{type:"data",result:void 0}}else if(U)m=await J(U);else{let H=new URL(t.url),A=H.pathname+H.search;throw es(404,{pathname:A})}}catch(U){return{type:"error",result:U}}finally{_&&t.signal.removeEventListener("abort",_)}return m}async function Pm(t){let a=t.headers.get("Content-Type");return a&&/\bapplication\/json\b/.test(a)?t.body==null?null:t.json():t.text()}async function Jm(t){var r,c,p,g,f;let{result:a,type:o}=t;if(Hu(a)){let m;try{m=await Pm(a)}catch(_){return{type:"error",error:_}}return o==="error"?{type:"error",error:new Sn(a.status,a.statusText,m),statusCode:a.status,headers:a.headers}:{type:"data",data:m,statusCode:a.status,headers:a.headers}}return o==="error"?Op(a)?a.data instanceof Error?{type:"error",error:a.data,statusCode:(r=a.init)==null?void 0:r.status,headers:(c=a.init)!=null&&c.headers?new Headers(a.init.headers):void 0}:{type:"error",error:Bm(a),statusCode:jn(a)?a.status:void 0,headers:(p=a.init)!=null&&p.headers?new Headers(a.init.headers):void 0}:{type:"error",error:a,statusCode:jn(a)?a.status:void 0}:Op(a)?{type:"data",data:a.data,statusCode:(g=a.init)==null?void 0:g.status,headers:(f=a.init)!=null&&f.headers?new Headers(a.init.headers):void 0}:{type:"data",data:a}}function zm(t,a,o,r,c){let p=t.headers.get("Location");if(ze(p,"Redirects returned/thrown from loaders/actions must have a Location header"),!qu(p)){let g=r.slice(0,r.findIndex(f=>f.route.id===o)+1);p=Pu(new URL(a.url),g,c,p),t.headers.set("Location",p)}return t}var Bp=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Ap(t,a,o,r){if(qu(t)){let c=t,p=c.startsWith("//")?new URL(a.protocol+c):new URL(c);if(Bp.includes(p.protocol))throw new Error("Invalid redirect location");let g=ss(p.pathname,o)!=null;if(p.origin===a.origin&&g)return Au(p.pathname)+p.search+p.hash}try{let c=r.createURL(t);if(Bp.includes(c.protocol))throw new Error("Invalid redirect location")}catch{}return t}function wt(t,a,o,r){let c=t.createURL(Ud(a)).toString(),p={signal:o};if(r&&kl(r.formMethod)){let{formMethod:g,formEncType:f}=r;p.method=g.toUpperCase(),f==="application/json"?(p.headers=new Headers({"Content-Type":f}),p.body=JSON.stringify(r.json)):f==="text/plain"?p.body=r.text:f==="application/x-www-form-urlencoded"&&r.formData?p.body=zu(r.formData):p.body=r.formData}return new Request(c,p)}function zd(t,a){let o=new URL(t.url),r=typeof a=="string"?bs(a):a;if(o.pathname=r.pathname||"/",r.search){let c=new URLSearchParams(r.search),p=c.getAll("index");c.delete("index");for(let g of p.filter(Boolean))c.append("index",g);o.search=c.size?`?${c.toString()}`:""}else o.search="";return o.hash=r.hash||"",o}function zu(t){let a=new URLSearchParams;for(let[o,r]of t.entries())a.append(o,typeof r=="string"?r:r.name);return a}function Mp(t){let a=new FormData;for(let[o,r]of t.entries())a.append(o,r);return a}function Um(t,a,o,r=!1,c=!1){let p={},g=null,f,m=!1,_={},k=o&&Dl(o[1])?o[1].error:void 0;return t.forEach(S=>{if(!(S.route.id in a))return;let J=S.route.id,U=a[J];if(ze(!Bi(U),"Cannot handle redirect results in processLoaderData"),Dl(U)){let H=U.error;if(k!==void 0&&(H=k,k=void 0),g=g||{},c)g[J]=H;else{let A=mi(t,J);g[A.route.id]==null&&(g[A.route.id]=H)}r||(p[J]=bd),m||(m=!0,f=jn(U.error)?U.error.status:500),U.headers&&(_[J]=U.headers)}else p[J]=U.data,U.statusCode&&U.statusCode!==200&&!m&&(f=U.statusCode),U.headers&&(_[J]=U.headers)}),k!==void 0&&o&&(g={[o[0]]:k},o[2]&&(p[o[2]]=void 0)),{loaderData:p,errors:g,statusCode:f||200,loaderHeaders:_}}function Hp(t,a,o,r,c,p,g){let{loaderData:f,errors:m}=Um(a,o,r);return c.filter(_=>!_.matches||_.matches.some(k=>k.shouldLoad)).forEach(_=>{let{key:k,match:S,controller:J}=_;if(J&&J.signal.aborted)return;let U=p[k];if(ze(U,"Did not find corresponding fetcher result"),Dl(U)){let H=mi(t.matches,S==null?void 0:S.route.id);m&&m[H.route.id]||(m={...m,[H.route.id]:U.error}),g.delete(k)}else if(Bi(U))ze(!1,"Unhandled fetcher revalidation redirect");else{let H=Es(U.data);g.set(k,H)}}),{loaderData:f,errors:m}}function Tp(t,a,o,r){let c=Object.entries(a).filter(([,p])=>p!==bd).reduce((p,[g,f])=>(p[g]=f,p),{});for(let p of o){let g=p.route.id;if(!a.hasOwnProperty(g)&&t.hasOwnProperty(g)&&p.route.loader&&(c[g]=t[g]),r&&r.hasOwnProperty(g))break}return c}function Rp(t){return t?Dl(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function mi(t,a){return(a?t.slice(0,t.findIndex(r=>r.route.id===a)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function Ca(t){let a=t.length===1?t[0]:t.find(o=>o.index||!o.path||o.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:a}],route:a}}function es(t,{pathname:a,routeId:o,method:r,type:c,message:p}={}){let g="Unknown Server Error",f="Unknown @remix-run/router error";return t===400?(g="Bad Request",r&&a&&o?f=`You made a ${r} request to "${a}" but did not provide a \`loader\` for route "${o}", so there is no way to handle the request.`:c==="invalid-body"&&(f="Unable to encode submission body")):t===403?(g="Forbidden",f=`Route "${o}" does not match URL "${a}"`):t===404?(g="Not Found",f=`No route matches URL "${a}"`):t===405&&(g="Method Not Allowed",r&&a&&o?f=`You made a ${r.toUpperCase()} request to "${a}" but did not provide an \`action\` for route "${o}", so there is no way to handle the request.`:r&&(f=`Invalid request method "${r.toUpperCase()}"`)),new Sn(t||500,g,new Error(f),!0)}function Ia(t){let a=Object.entries(t);for(let o=a.length-1;o>=0;o--){let[r,c]=a[o];if(Bi(c))return{key:r,result:c}}}function Ud(t){let a=typeof t=="string"?bs(t):t;return ks({...a,hash:""})}function qm(t,a){return t.pathname!==a.pathname||t.search!==a.search?!1:t.hash===""?a.hash!=="":t.hash===a.hash?!0:a.hash!==""}function Bm(t){var a,o;return new Sn(((a=t.init)==null?void 0:a.status)??500,((o=t.init)==null?void 0:o.statusText)??"Internal Server Error",t.data)}function Am(t){return t!=null&&typeof t=="object"&&Object.entries(t).every(([a,o])=>typeof a=="string"&&Mm(o))}function Mm(t){return t!=null&&typeof t=="object"&&"type"in t&&"result"in t&&(t.type==="data"||t.type==="error")}function Hm(t){return Hu(t.result)&&Ed.has(t.result.status)}function Dl(t){return t.type==="error"}function Bi(t){return(t&&t.type)==="redirect"}function Op(t){return typeof t=="object"&&t!=null&&"type"in t&&"data"in t&&"init"in t&&t.type==="DataWithResponseInit"}function Hu(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function Tm(t){return Ed.has(t)}function Rm(t){return Hu(t)&&Tm(t.status)&&t.headers.has("Location")}function Om(t){return _m.has(t.toUpperCase())}function kl(t){return mm.has(t.toUpperCase())}function Tu(t){return new URLSearchParams(t).getAll("index").some(a=>a==="")}function Ja(t,a){let o=typeof a=="string"?bs(a).search:a.search;if(t[t.length-1].route.index&&Tu(o||""))return t[t.length-1];let r=Sd(t);return r[r.length-1]}function Np(t){let{formMethod:a,formAction:o,formEncType:r,text:c,formData:p,json:g}=t;if(!(!a||!o||!r)){if(c!=null)return{formMethod:a,formAction:o,formEncType:r,formData:void 0,json:void 0,text:c};if(p!=null)return{formMethod:a,formAction:o,formEncType:r,formData:p,json:void 0,text:void 0};if(g!==void 0)return{formMethod:a,formAction:o,formEncType:r,formData:void 0,json:g,text:void 0}}}function yu(t,a,o,r){return r?{state:"loading",location:t,matches:a,historyAction:o,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}:{state:"loading",location:t,matches:a,historyAction:o,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Nm(t,a,o,r){return{state:"submitting",location:t,matches:a,historyAction:o,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}}function rn(t,a){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:a}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:a}}function Fm(t,a){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:a?a.data:void 0}}function Es(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Dm(t,a){try{let o=t.sessionStorage.getItem(kd);if(o){let r=JSON.parse(o);for(let[c,p]of Object.entries(r||{}))p&&Array.isArray(p)&&a.set(c,new Set(p||[]))}}catch{}}function Wm(t,a){if(a.size>0){let o={};for(let[r,c]of a)o[r]=[...c];try{t.sessionStorage.setItem(kd,JSON.stringify(o))}catch(r){ul(!1,`Failed to save applied view transitions in sessionStorage (${r}).`)}}}function Fp(){let t,a,o=new Promise((r,c)=>{t=async p=>{r(p);try{await o}catch{}},a=async p=>{c(p);try{await o}catch{}}});return{promise:o,resolve:t,reject:a}}var Ai=b.createContext(null);Ai.displayName="DataRouter";var wn=b.createContext(null);wn.displayName="DataRouterState";var qd=b.createContext(!1);function Bd(){return b.useContext(qd)}var Ru=b.createContext({isTransitioning:!1});Ru.displayName="ViewTransition";var Ad=b.createContext(new Map);Ad.displayName="Fetchers";var $m=b.createContext(null);$m.displayName="Await";var is=b.createContext(null);is.displayName="Navigation";var Ma=b.createContext(null);Ma.displayName="Location";var Cs=b.createContext({outlet:null,matches:[],isDataRoute:!1});Cs.displayName="Route";var Ou=b.createContext(null);Ou.displayName="RouteError";var Md="REACT_ROUTER_ERROR",Vm="REDIRECT",Km="ROUTE_ERROR_RESPONSE";function Qm(t){if(t.startsWith(`${Md}:${Vm}:{`))try{let a=JSON.parse(t.slice(28));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.location=="string"&&typeof a.reloadDocument=="boolean"&&typeof a.replace=="boolean")return a}catch{}}function Ym(t){if(t.startsWith(`${Md}:${Km}:{`))try{let a=JSON.parse(t.slice(40));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string")return new Sn(a.status,a.statusText,a.data)}catch{}}function Xm(t,{relative:a}={}){ze(xn(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:r}=b.useContext(is),{hash:c,pathname:p,search:g}=yn(t,{relative:a}),f=p;return o!=="/"&&(f=p==="/"?o:ls([o,p])),r.createHref({pathname:f,search:g,hash:c})}function xn(){return b.useContext(Ma)!=null}function Is(){return ze(xn(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(Ma).location}var Hd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Td(t){b.useContext(is).static||b.useLayoutEffect(t)}function Rd(){let{isDataRoute:t}=b.useContext(Cs);return t?dh():Zm()}function Zm(){ze(xn(),"useNavigate() may be used only in the context of a <Router> component.");let t=b.useContext(Ai),{basename:a,navigator:o}=b.useContext(is),{matches:r}=b.useContext(Cs),{pathname:c}=Is(),p=JSON.stringify(Bu(r)),g=b.useRef(!1);return Td(()=>{g.current=!0}),b.useCallback((m,_={})=>{if(ul(g.current,Hd),!g.current)return;if(typeof m=="number"){o.go(m);return}let k=Aa(m,JSON.parse(p),c,_.relative==="path");t==null&&a!=="/"&&(k.pathname=k.pathname==="/"?a:ls([a,k.pathname])),(_.replace?o.replace:o.push)(k,_.state,_)},[a,o,p,c,t])}b.createContext(null);function eh(){let{matches:t}=b.useContext(Cs),a=t[t.length-1];return(a==null?void 0:a.params)??{}}function yn(t,{relative:a}={}){let{matches:o}=b.useContext(Cs),{pathname:r}=Is(),c=JSON.stringify(Bu(o));return b.useMemo(()=>Aa(t,JSON.parse(c),r,a==="path"),[t,c,r,a])}function lh(t,a,o){ze(xn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=b.useContext(is),{matches:c}=b.useContext(Cs),p=c[c.length-1],g=p?p.params:{},f=p?p.pathname:"/",m=p?p.pathnameBase:"/",_=p&&p.route;{let q=_&&_.path||"";Nd(f,!_||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let k=Is(),S;S=k;let J=S.pathname||"/",U=J;if(m!=="/"){let q=m.replace(/^\//,"").split("/");U="/"+J.replace(/^\//,"").split("/").slice(q.length).join("/")}let H=o&&o.state.matches.length?o.state.matches.map(q=>Object.assign(q,{route:o.manifest[q.route.id]||q.route})):md(t,{pathname:U});return ul(_||H!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),ul(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),ah(H&&H.map(q=>Object.assign({},q,{params:Object.assign({},g,q.params),pathname:ls([m,r.encodeLocation?r.encodeLocation(q.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?m:ls([m,r.encodeLocation?r.encodeLocation(q.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathnameBase])})),c,o)}function sh(){let t=ph(),a=jn(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),o=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:r},p={padding:"2px 4px",backgroundColor:r},g=null;return console.error("Error handled by React Router default ErrorBoundary:",t),g=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:p},"ErrorBoundary")," or"," ",b.createElement("code",{style:p},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},a),o?b.createElement("pre",{style:c},o):null,g)}var ih=b.createElement(sh,null),Od=class extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,a){return a.location!==t.location||a.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:a.error,location:a.location,revalidation:t.revalidation||a.revalidation}}componentDidCatch(t,a){this.props.onError?this.props.onError(t,a):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const o=Ym(t.digest);o&&(t=o)}let a=t!==void 0?b.createElement(Cs.Provider,{value:this.props.routeContext},b.createElement(Ou.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?b.createElement(th,{error:t},a):a}};Od.contextType=qd;var Eu=new WeakMap;function th({children:t,error:a}){let{basename:o}=b.useContext(is);if(typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){let r=Qm(a.digest);if(r){let c=Eu.get(a);if(c)throw c;let p=wd(r.location,o);if(vd&&!Eu.get(a))if(p.isExternal||r.reloadDocument)window.location.href=p.absoluteURL||p.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:r.replace}));throw Eu.set(a,g),g}return b.createElement("meta",{httpEquiv:"refresh",content:`0;url=${p.absoluteURL||p.to}`})}}return t}function nh({routeContext:t,match:a,children:o}){let r=b.useContext(Ai);return r&&r.static&&r.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=a.route.id),b.createElement(Cs.Provider,{value:t},o)}function ah(t,a=[],o){let r=o==null?void 0:o.state;if(t==null){if(!r)return null;if(r.errors)t=r.matches;else if(a.length===0&&!r.initialized&&r.matches.length>0)t=r.matches;else return null}let c=t,p=r==null?void 0:r.errors;if(p!=null){let k=c.findIndex(S=>S.route.id&&(p==null?void 0:p[S.route.id])!==void 0);ze(k>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),c=c.slice(0,Math.min(c.length,k+1))}let g=!1,f=-1;if(o&&r){g=r.renderFallback;for(let k=0;k<c.length;k++){let S=c[k];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(f=k),S.route.id){let{loaderData:J,errors:U}=r,H=S.route.loader&&!J.hasOwnProperty(S.route.id)&&(!U||U[S.route.id]===void 0);if(S.route.lazy||H){o.isStatic&&(g=!0),f>=0?c=c.slice(0,f+1):c=[c[0]];break}}}}let m=o==null?void 0:o.onError,_=r&&m?(k,S)=>{var J,U;m(k,{location:r.location,params:((U=(J=r.matches)==null?void 0:J[0])==null?void 0:U.params)??{},pattern:vn(r.matches),errorInfo:S})}:void 0;return c.reduceRight((k,S,J)=>{let U,H=!1,A=null,q=null;r&&(U=p&&S.route.id?p[S.route.id]:void 0,A=S.route.errorElement||ih,g&&(f<0&&J===0?(Nd("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),H=!0,q=null):f===J&&(H=!0,q=S.route.hydrateFallbackElement||null)));let D=a.concat(c.slice(0,J+1)),Q=()=>{let X;return U?X=A:H?X=q:S.route.Component?X=b.createElement(S.route.Component,null):S.route.element?X=S.route.element:X=k,b.createElement(nh,{match:S,routeContext:{outlet:k,matches:D,isDataRoute:r!=null},children:X})};return r&&(S.route.ErrorBoundary||S.route.errorElement||J===0)?b.createElement(Od,{location:r.location,revalidation:r.revalidation,component:A,error:U,children:Q(),routeContext:{outlet:null,matches:D,isDataRoute:!0},onError:_}):Q()},null)}function Nu(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function oh(t){let a=b.useContext(Ai);return ze(a,Nu(t)),a}function uh(t){let a=b.useContext(wn);return ze(a,Nu(t)),a}function rh(t){let a=b.useContext(Cs);return ze(a,Nu(t)),a}function Fu(t){let a=rh(t),o=a.matches[a.matches.length-1];return ze(o.route.id,`${t} can only be used on routes that contain a unique "id"`),o.route.id}function ch(){return Fu("useRouteId")}function ph(){var r;let t=b.useContext(Ou),a=uh("useRouteError"),o=Fu("useRouteError");return t!==void 0?t:(r=a.errors)==null?void 0:r[o]}function dh(){let{router:t}=oh("useNavigate"),a=Fu("useNavigate"),o=b.useRef(!1);return Td(()=>{o.current=!0}),b.useCallback(async(c,p={})=>{ul(o.current,Hd),o.current&&(typeof c=="number"?await t.navigate(c):await t.navigate(c,{fromRouteId:a,...p}))},[t,a])}var Dp={};function Nd(t,a,o){!a&&!Dp[t]&&(Dp[t]=!0,ul(!1,o))}var Wp={};function $p(t,a){!t&&!Wp[a]&&(Wp[a]=!0,console.warn(a))}var gh="useOptimistic",Vp=Bf[gh],fh=()=>{};function mh(t){return Vp?Vp(t):[t,fh]}function hh(t){let a={hasErrorBoundary:t.hasErrorBoundary||t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&(t.element&&ul(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(a,{element:b.createElement(t.Component),Component:void 0})),t.HydrateFallback&&(t.hydrateFallbackElement&&ul(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(a,{hydrateFallbackElement:b.createElement(t.HydrateFallback),HydrateFallback:void 0})),t.ErrorBoundary&&(t.errorElement&&ul(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(a,{errorElement:b.createElement(t.ErrorBoundary),ErrorBoundary:void 0})),a}var _h=["HydrateFallback","hydrateFallbackElement"],jh=class{constructor(){this.status="pending",this.promise=new Promise((t,a)=>{this.resolve=o=>{this.status==="pending"&&(this.status="resolved",t(o))},this.reject=o=>{this.status==="pending"&&(this.status="rejected",a(o))}})}};function Sh({router:t,flushSync:a,onError:o,useTransitions:r}){r=Bd()||r;let[p,g]=b.useState(t.state),[f,m]=mh(p),[_,k]=b.useState(),[S,J]=b.useState({isTransitioning:!1}),[U,H]=b.useState(),[A,q]=b.useState(),[D,Q]=b.useState(),X=b.useRef(new Map),pe=b.useCallback((C,{deletedFetchers:be,newErrors:ge,flushSync:$e,viewTransitionOpts:Ee})=>{ge&&o&&Object.values(ge).forEach(Pe=>{var Se;return o(Pe,{location:C.location,params:((Se=C.matches[0])==null?void 0:Se.params)??{},pattern:vn(C.matches)})}),C.fetchers.forEach((Pe,Se)=>{Pe.data!==void 0&&X.current.set(Se,Pe.data)}),be.forEach(Pe=>X.current.delete(Pe)),$p($e===!1||a!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let He=t.window!=null&&t.window.document!=null&&typeof t.window.document.startViewTransition=="function";if($p(Ee==null||He,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!Ee||!He){a&&$e?a(()=>g(C)):r===!1?g(C):b.startTransition(()=>{r===!0&&m(Pe=>Kp(Pe,C)),g(C)});return}if(a&&$e){a(()=>{A&&(U==null||U.resolve(),A.skipTransition()),J({isTransitioning:!0,flushSync:!0,currentLocation:Ee.currentLocation,nextLocation:Ee.nextLocation})});let Pe=t.window.document.startViewTransition(()=>{a(()=>g(C))});Pe.finished.finally(()=>{a(()=>{H(void 0),q(void 0),k(void 0),J({isTransitioning:!1})})}),a(()=>q(Pe));return}A?(U==null||U.resolve(),A.skipTransition(),Q({state:C,currentLocation:Ee.currentLocation,nextLocation:Ee.nextLocation})):(k(C),J({isTransitioning:!0,flushSync:!1,currentLocation:Ee.currentLocation,nextLocation:Ee.nextLocation}))},[t.window,a,A,U,r,m,o]);b.useLayoutEffect(()=>t.subscribe(pe),[t,pe]),b.useEffect(()=>{S.isTransitioning&&!S.flushSync&&H(new jh)},[S]),b.useEffect(()=>{if(U&&_&&t.window){let C=_,be=U.promise,ge=t.window.document.startViewTransition(async()=>{r===!1?g(C):b.startTransition(()=>{r===!0&&m($e=>Kp($e,C)),g(C)}),await be});ge.finished.finally(()=>{H(void 0),q(void 0),k(void 0),J({isTransitioning:!1})}),q(ge)}},[_,U,t.window,r,m]),b.useEffect(()=>{U&&_&&f.location.key===_.location.key&&U.resolve()},[U,A,f.location,_]),b.useEffect(()=>{!S.isTransitioning&&D&&(k(D.state),J({isTransitioning:!0,flushSync:!1,currentLocation:D.currentLocation,nextLocation:D.nextLocation}),Q(void 0))},[S.isTransitioning,D]);let re=b.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:C=>t.navigate(C),push:(C,be,ge)=>t.navigate(C,{state:be,preventScrollReset:ge==null?void 0:ge.preventScrollReset}),replace:(C,be,ge)=>t.navigate(C,{replace:!0,state:be,preventScrollReset:ge==null?void 0:ge.preventScrollReset})}),[t]),we=t.basename||"/",Le=b.useMemo(()=>({router:t,navigator:re,static:!1,basename:we,onError:o}),[t,re,we,o]);return b.createElement(b.Fragment,null,b.createElement(Ai.Provider,{value:Le},b.createElement(wn.Provider,{value:f},b.createElement(Ad.Provider,{value:X.current},b.createElement(Ru.Provider,{value:S},b.createElement(xh,{basename:we,location:f.location,navigationType:f.historyAction,navigator:re,useTransitions:r},b.createElement(vh,{routes:t.routes,manifest:t.manifest,future:t.future,state:f,isStatic:!1,onError:o})))))),null)}function Kp(t,a){return{...t,navigation:a.navigation.state!=="idle"?a.navigation:t.navigation,revalidation:a.revalidation!=="idle"?a.revalidation:t.revalidation,actionData:a.navigation.state!=="submitting"?a.actionData:t.actionData,fetchers:a.fetchers}}var vh=b.memo(wh);function wh({routes:t,manifest:a,future:o,state:r,isStatic:c,onError:p}){return lh(t,void 0,{manifest:a,state:r,isStatic:c,onError:p})}function xh({basename:t="/",children:a=null,location:o,navigationType:r="POP",navigator:c,static:p=!1,useTransitions:g}){ze(!xn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=t.replace(/^\/*/,"/"),m=b.useMemo(()=>({basename:f,navigator:c,static:p,useTransitions:g,future:{}}),[f,c,p,g]);typeof o=="string"&&(o=bs(o));let{pathname:_="/",search:k="",hash:S="",state:J=null,key:U="default",mask:H}=o,A=b.useMemo(()=>{let q=ss(_,f);return q==null?null:{location:{pathname:q,search:k,hash:S,state:J,key:U,mask:H},navigationType:r}},[f,_,k,S,J,U,r,H]);return ul(A!=null,`<Router basename="${f}"> is not able to match the URL "${_}${k}${S}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:b.createElement(is.Provider,{value:m},b.createElement(Ma.Provider,{children:a,value:A}))}var za="get",Ua="application/x-www-form-urlencoded";function Ha(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function yh(t){return Ha(t)&&t.tagName.toLowerCase()==="button"}function Eh(t){return Ha(t)&&t.tagName.toLowerCase()==="form"}function kh(t){return Ha(t)&&t.tagName.toLowerCase()==="input"}function bh(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Ch(t,a){return t.button===0&&(!a||a==="_self")&&!bh(t)}var La=null;function Ih(){if(La===null)try{new FormData(document.createElement("form"),0),La=!1}catch{La=!0}return La}var Lh=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ku(t){return t!=null&&!Lh.has(t)?(ul(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ua}"`),null):t}function Gh(t,a){let o,r,c,p,g;if(Eh(t)){let f=t.getAttribute("action");r=f?ss(f,a):null,o=t.getAttribute("method")||za,c=ku(t.getAttribute("enctype"))||Ua,p=new FormData(t)}else if(yh(t)||kh(t)&&(t.type==="submit"||t.type==="image")){let f=t.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=t.getAttribute("formaction")||f.getAttribute("action");if(r=m?ss(m,a):null,o=t.getAttribute("formmethod")||f.getAttribute("method")||za,c=ku(t.getAttribute("formenctype"))||ku(f.getAttribute("enctype"))||Ua,p=new FormData(f,t),!Ih()){let{name:_,type:k,value:S}=t;if(k==="image"){let J=_?`${_}.`:"";p.append(`${J}x`,"0"),p.append(`${J}y`,"0")}else _&&p.append(_,S)}}else{if(Ha(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=za,r=null,c=Ua,g=t}return p&&c==="text/plain"&&(g=p,p=void 0),{action:r,method:o.toLowerCase(),encType:c,formData:p,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Du(t,a){if(t===!1||t===null||typeof t>"u")throw new Error(a)}function Fd(t,a,o,r){let c=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return o?c.pathname.endsWith("/")?c.pathname=`${c.pathname}_.${r}`:c.pathname=`${c.pathname}.${r}`:c.pathname==="/"?c.pathname=`_root.${r}`:a&&ss(c.pathname,a)==="/"?c.pathname=`${Ba(a)}/_root.${r}`:c.pathname=`${Ba(c.pathname)}.${r}`,c}async function Ph(t,a){if(t.id in a)return a[t.id];try{let o=await import(t.module);return a[t.id]=o,o}catch(o){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Jh(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function zh(t,a,o){let r=await Promise.all(t.map(async c=>{let p=a.routes[c.route.id];if(p){let g=await Ph(p,o);return g.links?g.links():[]}return[]}));return Ah(r.flat(1).filter(Jh).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function Qp(t,a,o,r,c,p){let g=(m,_)=>o[_]?m.route.id!==o[_].route.id:!0,f=(m,_)=>{var k;return o[_].pathname!==m.pathname||((k=o[_].route.path)==null?void 0:k.endsWith("*"))&&o[_].params["*"]!==m.params["*"]};return p==="assets"?a.filter((m,_)=>g(m,_)||f(m,_)):p==="data"?a.filter((m,_)=>{var S;let k=r.routes[m.route.id];if(!k||!k.hasLoader)return!1;if(g(m,_)||f(m,_))return!0;if(m.route.shouldRevalidate){let J=m.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((S=o[0])==null?void 0:S.params)||{},nextUrl:new URL(t,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof J=="boolean")return J}return!0}):[]}function Uh(t,a,{includeHydrateFallback:o}={}){return qh(t.map(r=>{let c=a.routes[r.route.id];if(!c)return[];let p=[c.module];return c.clientActionModule&&(p=p.concat(c.clientActionModule)),c.clientLoaderModule&&(p=p.concat(c.clientLoaderModule)),o&&c.hydrateFallbackModule&&(p=p.concat(c.hydrateFallbackModule)),c.imports&&(p=p.concat(c.imports)),p}).flat(1))}function qh(t){return[...new Set(t)]}function Bh(t){let a={},o=Object.keys(t).sort();for(let r of o)a[r]=t[r];return a}function Ah(t,a){let o=new Set;return new Set(a),t.reduce((r,c)=>{let p=JSON.stringify(Bh(c));return o.has(p)||(o.add(p),r.push({key:p,link:c})),r},[])}function Wu(){let t=b.useContext(Ai);return Du(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Mh(){let t=b.useContext(wn);return Du(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var $u=b.createContext(void 0);$u.displayName="FrameworkContext";function Vu(){let t=b.useContext($u);return Du(t,"You must render this element inside a <HydratedRouter> element"),t}function Hh(t,a){let o=b.useContext($u),[r,c]=b.useState(!1),[p,g]=b.useState(!1),{onFocus:f,onBlur:m,onMouseEnter:_,onMouseLeave:k,onTouchStart:S}=a,J=b.useRef(null);b.useEffect(()=>{if(t==="render"&&g(!0),t==="viewport"){let A=D=>{D.forEach(Q=>{g(Q.isIntersecting)})},q=new IntersectionObserver(A,{threshold:.5});return J.current&&q.observe(J.current),()=>{q.disconnect()}}},[t]),b.useEffect(()=>{if(r){let A=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(A)}}},[r]);let U=()=>{c(!0)},H=()=>{c(!1),g(!1)};return o?t!=="intent"?[p,J,{}]:[p,J,{onFocus:cn(f,U),onBlur:cn(m,H),onMouseEnter:cn(_,U),onMouseLeave:cn(k,H),onTouchStart:cn(S,U)}]:[!1,J,{}]}function cn(t,a){return o=>{t&&t(o),o.defaultPrevented||a(o)}}function Th({page:t,...a}){let o=Bd(),{router:r}=Wu(),c=b.useMemo(()=>md(r.routes,t,r.basename),[r.routes,t,r.basename]);return c?o?b.createElement(Oh,{page:t,matches:c,...a}):b.createElement(Nh,{page:t,matches:c,...a}):null}function Rh(t){let{manifest:a,routeModules:o}=Vu(),[r,c]=b.useState([]);return b.useEffect(()=>{let p=!1;return zh(t,a,o).then(g=>{p||c(g)}),()=>{p=!0}},[t,a,o]),r}function Oh({page:t,matches:a,...o}){let r=Is(),{future:c}=Vu(),{basename:p}=Wu(),g=b.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let f=Fd(t,p,c.v8_trailingSlashAwareDataRequests,"rsc"),m=!1,_=[];for(let k of a)typeof k.route.shouldRevalidate=="function"?m=!0:_.push(k.route.id);return m&&_.length>0&&f.searchParams.set("_routes",_.join(",")),[f.pathname+f.search]},[p,c.v8_trailingSlashAwareDataRequests,t,r,a]);return b.createElement(b.Fragment,null,g.map(f=>b.createElement("link",{key:f,rel:"prefetch",as:"fetch",href:f,...o})))}function Nh({page:t,matches:a,...o}){let r=Is(),{future:c,manifest:p,routeModules:g}=Vu(),{basename:f}=Wu(),{loaderData:m,matches:_}=Mh(),k=b.useMemo(()=>Qp(t,a,_,p,r,"data"),[t,a,_,p,r]),S=b.useMemo(()=>Qp(t,a,_,p,r,"assets"),[t,a,_,p,r]),J=b.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let A=new Set,q=!1;if(a.forEach(Q=>{var pe;let X=p.routes[Q.route.id];!X||!X.hasLoader||(!k.some(re=>re.route.id===Q.route.id)&&Q.route.id in m&&((pe=g[Q.route.id])!=null&&pe.shouldRevalidate)||X.hasClientLoader?q=!0:A.add(Q.route.id))}),A.size===0)return[];let D=Fd(t,f,c.v8_trailingSlashAwareDataRequests,"data");return q&&A.size>0&&D.searchParams.set("_routes",a.filter(Q=>A.has(Q.route.id)).map(Q=>Q.route.id).join(",")),[D.pathname+D.search]},[f,c.v8_trailingSlashAwareDataRequests,m,r,p,k,a,t,g]),U=b.useMemo(()=>Uh(S,p),[S,p]),H=Rh(S);return b.createElement(b.Fragment,null,J.map(A=>b.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...o})),U.map(A=>b.createElement("link",{key:A,rel:"modulepreload",href:A,...o})),H.map(({key:A,link:q})=>b.createElement("link",{key:A,nonce:o.nonce,...q,crossOrigin:q.crossOrigin??o.crossOrigin})))}function Fh(...t){return a=>{t.forEach(o=>{typeof o=="function"?o(a):o!=null&&(o.current=a)})}}var Dh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Dh&&(window.__reactRouterVersion="7.17.0")}catch{}function Wh(t,a){return xm({basename:a==null?void 0:a.basename,getContext:a==null?void 0:a.getContext,future:a==null?void 0:a.future,history:Af({window:a==null?void 0:a.window}),hydrationData:$h(),routes:t,mapRouteProperties:hh,hydrationRouteProperties:_h,dataStrategy:a==null?void 0:a.dataStrategy,patchRoutesOnNavigation:a==null?void 0:a.patchRoutesOnNavigation,window:a==null?void 0:a.window,instrumentations:a==null?void 0:a.instrumentations}).initialize()}function $h(){let t=window==null?void 0:window.__staticRouterHydrationData;return t&&t.errors&&(t={...t,errors:Vh(t.errors)}),t}function Vh(t){if(!t)return null;let a=Object.entries(t),o={};for(let[r,c]of a)if(c&&c.__type==="RouteErrorResponse")o[r]=new Sn(c.status,c.statusText,c.data,c.internal===!0);else if(c&&c.__type==="Error"){if(c.__subType){let p=window[c.__subType];if(typeof p=="function")try{let g=new p(c.message);g.stack="",o[r]=g}catch{}}if(o[r]==null){let p=new Error(c.message);p.stack="",o[r]=p}}else o[r]=c;return o}var Dd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wd=b.forwardRef(function({onClick:a,discover:o="render",prefetch:r="none",relative:c,reloadDocument:p,replace:g,mask:f,state:m,target:_,to:k,preventScrollReset:S,viewTransition:J,defaultShouldRevalidate:U,...H},A){let{basename:q,navigator:D,useTransitions:Q}=b.useContext(is),X=typeof k=="string"&&Dd.test(k),pe=wd(k,q);k=pe.to;let re=Xm(k,{relative:c}),we=Is(),Le=null;if(f){let Se=Aa(f,[],we.mask?we.mask.pathname:"/",!0);q!=="/"&&(Se.pathname=Se.pathname==="/"?q:ls([q,Se.pathname])),Le=D.createHref(Se)}let[C,be,ge]=Hh(r,H),$e=Xh(k,{replace:g,mask:f,state:m,target:_,preventScrollReset:S,relative:c,viewTransition:J,defaultShouldRevalidate:U,useTransitions:Q});function Ee(Se){a&&a(Se),Se.defaultPrevented||$e(Se)}let He=!(pe.isExternal||p),Pe=b.createElement("a",{...H,...ge,href:(He?Le:void 0)||pe.absoluteURL||re,onClick:He?Ee:a,ref:Fh(A,be),target:_,"data-discover":!X&&o==="render"?"true":void 0});return C&&!X?b.createElement(b.Fragment,null,Pe,b.createElement(Th,{page:re})):Pe});Wd.displayName="Link";var Kh=b.forwardRef(function({"aria-current":a="page",caseSensitive:o=!1,className:r="",end:c=!1,style:p,to:g,viewTransition:f,children:m,..._},k){let S=yn(g,{relative:_.relative}),J=Is(),U=b.useContext(wn),{navigator:H,basename:A}=b.useContext(is),q=U!=null&&i_(S)&&f===!0,D=H.encodeLocation?H.encodeLocation(S).pathname:S.pathname,Q=J.pathname,X=U&&U.navigation&&U.navigation.location?U.navigation.location.pathname:null;o||(Q=Q.toLowerCase(),X=X?X.toLowerCase():null,D=D.toLowerCase()),X&&A&&(X=ss(X,A)||X);const pe=D!=="/"&&D.endsWith("/")?D.length-1:D.length;let re=Q===D||!c&&Q.startsWith(D)&&Q.charAt(pe)==="/",we=X!=null&&(X===D||!c&&X.startsWith(D)&&X.charAt(D.length)==="/"),Le={isActive:re,isPending:we,isTransitioning:q},C=re?a:void 0,be;typeof r=="function"?be=r(Le):be=[r,re?"active":null,we?"pending":null,q?"transitioning":null].filter(Boolean).join(" ");let ge=typeof p=="function"?p(Le):p;return b.createElement(Wd,{..._,"aria-current":C,className:be,ref:k,style:ge,to:g,viewTransition:f},typeof m=="function"?m(Le):m)});Kh.displayName="NavLink";var Qh=b.forwardRef(({discover:t="render",fetcherKey:a,navigate:o,reloadDocument:r,replace:c,state:p,method:g=za,action:f,onSubmit:m,relative:_,preventScrollReset:k,viewTransition:S,defaultShouldRevalidate:J,...U},H)=>{let{useTransitions:A}=b.useContext(is),q=l_(),D=s_(f,{relative:_}),Q=g.toLowerCase()==="get"?"get":"post",X=typeof f=="string"&&Dd.test(f),pe=re=>{if(m&&m(re),re.defaultPrevented)return;re.preventDefault();let we=re.nativeEvent.submitter,Le=(we==null?void 0:we.getAttribute("formmethod"))||g,C=()=>q(we||re.currentTarget,{fetcherKey:a,method:Le,navigate:o,replace:c,state:p,relative:_,preventScrollReset:k,viewTransition:S,defaultShouldRevalidate:J});A&&o!==!1?b.startTransition(()=>C()):C()};return b.createElement("form",{ref:H,method:Q,action:D,onSubmit:r?m:pe,...U,"data-discover":!X&&t==="render"?"true":void 0})});Qh.displayName="Form";function Yh(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $d(t){let a=b.useContext(Ai);return ze(a,Yh(t)),a}function Xh(t,{target:a,replace:o,mask:r,state:c,preventScrollReset:p,relative:g,viewTransition:f,defaultShouldRevalidate:m,useTransitions:_}={}){let k=Rd(),S=Is(),J=yn(t,{relative:g});return b.useCallback(U=>{if(Ch(U,a)){U.preventDefault();let H=o!==void 0?o:ks(S)===ks(J),A=()=>k(t,{replace:H,mask:r,state:c,preventScrollReset:p,relative:g,viewTransition:f,defaultShouldRevalidate:m});_?b.startTransition(()=>A()):A()}},[S,k,J,o,r,c,a,t,p,g,f,m,_])}var Zh=0,e_=()=>`__${String(++Zh)}__`;function l_(){let{router:t}=$d("useSubmit"),{basename:a}=b.useContext(is),o=ch(),r=t.fetch,c=t.navigate;return b.useCallback(async(p,g={})=>{let{action:f,method:m,encType:_,formData:k,body:S}=Gh(p,a);if(g.navigate===!1){let J=g.fetcherKey||e_();await r(J,o,g.action||f,{defaultShouldRevalidate:g.defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:k,body:S,formMethod:g.method||m,formEncType:g.encType||_,flushSync:g.flushSync})}else await c(g.action||f,{defaultShouldRevalidate:g.defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:k,body:S,formMethod:g.method||m,formEncType:g.encType||_,replace:g.replace,state:g.state,fromRouteId:o,flushSync:g.flushSync,viewTransition:g.viewTransition})},[r,c,a,o])}function s_(t,{relative:a}={}){let{basename:o}=b.useContext(is),r=b.useContext(Cs);ze(r,"useFormAction must be used inside a RouteContext");let[c]=r.matches.slice(-1),p={...yn(t||".",{relative:a})},g=Is();if(t==null){p.search=g.search;let f=new URLSearchParams(p.search),m=f.getAll("index");if(m.some(k=>k==="")){f.delete("index"),m.filter(S=>S).forEach(S=>f.append("index",S));let k=f.toString();p.search=k?`?${k}`:""}}return(!t||t===".")&&c.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(p.pathname=p.pathname==="/"?o:ls([o,p.pathname])),ks(p)}function i_(t,{relative:a}={}){let o=b.useContext(Ru);ze(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=$d("useViewTransitionState"),c=yn(t,{relative:a});if(!o.isTransitioning)return!1;let p=ss(o.currentLocation.pathname,r)||o.currentLocation.pathname,g=ss(o.nextLocation.pathname,r)||o.nextLocation.pathname;return qa(c.pathname,g)!=null||qa(c.pathname,p)!=null}var bu={exports:{}},Al={},Cu={exports:{}},Iu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function t_(){return Yp||(Yp=1,(function(t){function a(O,V){var K=O.length;O.push(V);e:for(;0<K;){var y=K-1>>>1,B=O[y];if(0<c(B,V))O[y]=V,O[K]=B,K=y;else break e}}function o(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var V=O[0],K=O.pop();if(K!==V){O[0]=K;e:for(var y=0,B=O.length,ie=B>>>1;y<ie;){var de=2*(y+1)-1,xe=O[de],me=de+1,Ge=O[me];if(0>c(xe,K))me<B&&0>c(Ge,xe)?(O[y]=Ge,O[me]=K,y=me):(O[y]=xe,O[de]=K,y=de);else if(me<B&&0>c(Ge,K))O[y]=Ge,O[me]=K,y=me;else break e}}return V}function c(O,V){var K=O.sortIndex-V.sortIndex;return K!==0?K:O.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;t.unstable_now=function(){return p.now()}}else{var g=Date,f=g.now();t.unstable_now=function(){return g.now()-f}}var m=[],_=[],k=1,S=null,J=3,U=!1,H=!1,A=!1,q=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function X(O){for(var V=o(_);V!==null;){if(V.callback===null)r(_);else if(V.startTime<=O)r(_),V.sortIndex=V.expirationTime,a(m,V);else break;V=o(_)}}function pe(O){if(A=!1,X(O),!H)if(o(m)!==null)H=!0,Fe(re);else{var V=o(_);V!==null&&le(pe,V.startTime-O)}}function re(O,V){H=!1,A&&(A=!1,D(C),C=-1),U=!0;var K=J;try{for(X(V),S=o(m);S!==null&&(!(S.expirationTime>V)||O&&!$e());){var y=S.callback;if(typeof y=="function"){S.callback=null,J=S.priorityLevel;var B=y(S.expirationTime<=V);V=t.unstable_now(),typeof B=="function"?S.callback=B:S===o(m)&&r(m),X(V)}else r(m);S=o(m)}if(S!==null)var ie=!0;else{var de=o(_);de!==null&&le(pe,de.startTime-V),ie=!1}return ie}finally{S=null,J=K,U=!1}}var we=!1,Le=null,C=-1,be=5,ge=-1;function $e(){return!(t.unstable_now()-ge<be)}function Ee(){if(Le!==null){var O=t.unstable_now();ge=O;var V=!0;try{V=Le(!0,O)}finally{V?He():(we=!1,Le=null)}}else we=!1}var He;if(typeof Q=="function")He=function(){Q(Ee)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,Se=Pe.port2;Pe.port1.onmessage=Ee,He=function(){Se.postMessage(null)}}else He=function(){q(Ee,0)};function Fe(O){Le=O,we||(we=!0,He())}function le(O,V){C=q(function(){O(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){H||U||(H=!0,Fe(re))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):be=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return J},t.unstable_getFirstCallbackNode=function(){return o(m)},t.unstable_next=function(O){switch(J){case 1:case 2:case 3:var V=3;break;default:V=J}var K=J;J=V;try{return O()}finally{J=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,V){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var K=J;J=O;try{return V()}finally{J=K}},t.unstable_scheduleCallback=function(O,V,K){var y=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?y+K:y):K=y,O){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=K+B,O={id:k++,callback:V,priorityLevel:O,startTime:K,expirationTime:B,sortIndex:-1},K>y?(O.sortIndex=K,a(_,O),o(m)===null&&O===o(_)&&(A?(D(C),C=-1):A=!0,le(pe,K-y))):(O.sortIndex=B,a(m,O),H||U||(H=!0,Fe(re))),O},t.unstable_shouldYield=$e,t.unstable_wrapCallback=function(O){var V=J;return function(){var K=J;J=V;try{return O.apply(this,arguments)}finally{J=K}}}})(Iu)),Iu}var Xp;function n_(){return Xp||(Xp=1,Cu.exports=t_()),Cu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function a_(){if(Zp)return Al;Zp=1;var t=Uu(),a=n_();function o(e){for(var l="https://reactjs.org/docs/error-decoder.html?invariant="+e,s=1;s<arguments.length;s++)l+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+e+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,c={};function p(e,l){g(e,l),g(e+"Capture",l)}function g(e,l){for(c[e]=l,e=0;e<l.length;e++)r.add(l[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,k={},S={};function J(e){return m.call(S,e)?!0:m.call(k,e)?!1:_.test(e)?S[e]=!0:(k[e]=!0,!1)}function U(e,l,s,i){if(s!==null&&s.type===0)return!1;switch(typeof l){case"function":case"symbol":return!0;case"boolean":return i?!1:s!==null?!s.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function H(e,l,s,i){if(l===null||typeof l>"u"||U(e,l,s,i))return!0;if(i)return!1;if(s!==null)switch(s.type){case 3:return!l;case 4:return l===!1;case 5:return isNaN(l);case 6:return isNaN(l)||1>l}return!1}function A(e,l,s,i,n,u,d){this.acceptsBooleans=l===2||l===3||l===4,this.attributeName=i,this.attributeNamespace=n,this.mustUseProperty=s,this.propertyName=e,this.type=l,this.sanitizeURL=u,this.removeEmptyString=d}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){q[e]=new A(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var l=e[0];q[l]=new A(l,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){q[e]=new A(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){q[e]=new A(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){q[e]=new A(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){q[e]=new A(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){q[e]=new A(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){q[e]=new A(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){q[e]=new A(e,5,!1,e.toLowerCase(),null,!1,!1)});var D=/[\-:]([a-z])/g;function Q(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var l=e.replace(D,Q);q[l]=new A(l,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var l=e.replace(D,Q);q[l]=new A(l,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var l=e.replace(D,Q);q[l]=new A(l,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){q[e]=new A(e,1,!1,e.toLowerCase(),null,!1,!1)}),q.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){q[e]=new A(e,1,!1,e.toLowerCase(),null,!0,!0)});function X(e,l,s,i){var n=q.hasOwnProperty(l)?q[l]:null;(n!==null?n.type!==0:i||!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(H(l,s,n,i)&&(s=null),i||n===null?J(l)&&(s===null?e.removeAttribute(l):e.setAttribute(l,""+s)):n.mustUseProperty?e[n.propertyName]=s===null?n.type===3?!1:"":s:(l=n.attributeName,i=n.attributeNamespace,s===null?e.removeAttribute(l):(n=n.type,s=n===3||n===4&&s===!0?"":""+s,i?e.setAttributeNS(i,l,s):e.setAttribute(l,s))))}var pe=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,re=Symbol.for("react.element"),we=Symbol.for("react.portal"),Le=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),be=Symbol.for("react.profiler"),ge=Symbol.for("react.provider"),$e=Symbol.for("react.context"),Ee=Symbol.for("react.forward_ref"),He=Symbol.for("react.suspense"),Pe=Symbol.for("react.suspense_list"),Se=Symbol.for("react.memo"),Fe=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),O=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=O&&e[O]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,y;function B(e){if(y===void 0)try{throw Error()}catch(s){var l=s.stack.trim().match(/\n( *(at )?)/);y=l&&l[1]||""}return`
`+y+e}var ie=!1;function de(e,l){if(!e||ie)return"";ie=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(l)if(l=function(){throw Error()},Object.defineProperty(l.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(l,[])}catch(z){var i=z}Reflect.construct(e,[],l)}else{try{l.call()}catch(z){i=z}e.call(l.prototype)}else{try{throw Error()}catch(z){i=z}e()}}catch(z){if(z&&i&&typeof z.stack=="string"){for(var n=z.stack.split(`
`),u=i.stack.split(`
`),d=n.length-1,h=u.length-1;1<=d&&0<=h&&n[d]!==u[h];)h--;for(;1<=d&&0<=h;d--,h--)if(n[d]!==u[h]){if(d!==1||h!==1)do if(d--,h--,0>h||n[d]!==u[h]){var v=`
`+n[d].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=d&&0<=h);break}}}finally{ie=!1,Error.prepareStackTrace=s}return(e=e?e.displayName||e.name:"")?B(e):""}function xe(e){switch(e.tag){case 5:return B(e.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return e=de(e.type,!1),e;case 11:return e=de(e.type.render,!1),e;case 1:return e=de(e.type,!0),e;default:return""}}function me(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Le:return"Fragment";case we:return"Portal";case be:return"Profiler";case C:return"StrictMode";case He:return"Suspense";case Pe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $e:return(e.displayName||"Context")+".Consumer";case ge:return(e._context.displayName||"Context")+".Provider";case Ee:var l=e.render;return e=e.displayName,e||(e=l.displayName||l.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Se:return l=e.displayName||null,l!==null?l:me(e.type)||"Memo";case Fe:l=e._payload,e=e._init;try{return me(e(l))}catch{}}return null}function Ge(e){var l=e.type;switch(e.tag){case 24:return"Cache";case 9:return(l.displayName||"Context")+".Consumer";case 10:return(l._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=l.render,e=e.displayName||e.name||"",l.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return l;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return me(l);case 8:return l===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof l=="function")return l.displayName||l.name||null;if(typeof l=="string")return l}return null}function Be(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Je(e){var l=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(l==="checkbox"||l==="radio")}function dl(e){var l=Je(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,l),i=""+e[l];if(!e.hasOwnProperty(l)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var n=s.get,u=s.set;return Object.defineProperty(e,l,{configurable:!0,get:function(){return n.call(this)},set:function(d){i=""+d,u.call(this,d)}}),Object.defineProperty(e,l,{enumerable:s.enumerable}),{getValue:function(){return i},setValue:function(d){i=""+d},stopTracking:function(){e._valueTracker=null,delete e[l]}}}}function Ls(e){e._valueTracker||(e._valueTracker=dl(e))}function Mi(e){if(!e)return!1;var l=e._valueTracker;if(!l)return!0;var s=l.getValue(),i="";return e&&(i=Je(e)?e.checked?"true":"false":e.value),e=i,e!==s?(l.setValue(e),!0):!1}function el(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wl(e,l){var s=l.checked;return K({},l,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??e._wrapperState.initialChecked})}function Os(e,l){var s=l.defaultValue==null?"":l.defaultValue,i=l.checked!=null?l.checked:l.defaultChecked;s=Be(l.value!=null?l.value:s),e._wrapperState={initialChecked:i,initialValue:s,controlled:l.type==="checkbox"||l.type==="radio"?l.checked!=null:l.value!=null}}function ji(e,l){l=l.checked,l!=null&&X(e,"checked",l,!1)}function Ml(e,l){ji(e,l);var s=Be(l.value),i=l.type;if(s!=null)i==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+s):e.value!==""+s&&(e.value=""+s);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}l.hasOwnProperty("value")?Si(e,l.type,s):l.hasOwnProperty("defaultValue")&&Si(e,l.type,Be(l.defaultValue)),l.checked==null&&l.defaultChecked!=null&&(e.defaultChecked=!!l.defaultChecked)}function Gl(e,l,s){if(l.hasOwnProperty("value")||l.hasOwnProperty("defaultValue")){var i=l.type;if(!(i!=="submit"&&i!=="reset"||l.value!==void 0&&l.value!==null))return;l=""+e._wrapperState.initialValue,s||l===e.value||(e.value=l),e.defaultValue=l}s=e.name,s!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,s!==""&&(e.name=s)}function Si(e,l,s){(l!=="number"||el(e.ownerDocument)!==e)&&(s==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+s&&(e.defaultValue=""+s))}var fs=Array.isArray;function ms(e,l,s,i){if(e=e.options,l){l={};for(var n=0;n<s.length;n++)l["$"+s[n]]=!0;for(s=0;s<e.length;s++)n=l.hasOwnProperty("$"+e[s].value),e[s].selected!==n&&(e[s].selected=n),n&&i&&(e[s].defaultSelected=!0)}else{for(s=""+Be(s),l=null,n=0;n<e.length;n++){if(e[n].value===s){e[n].selected=!0,i&&(e[n].defaultSelected=!0);return}l!==null||e[n].disabled||(l=e[n])}l!==null&&(l.selected=!0)}}function vi(e,l){if(l.dangerouslySetInnerHTML!=null)throw Error(o(91));return K({},l,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Hi(e,l){var s=l.value;if(s==null){if(s=l.children,l=l.defaultValue,s!=null){if(l!=null)throw Error(o(92));if(fs(s)){if(1<s.length)throw Error(o(93));s=s[0]}l=s}l==null&&(l=""),s=l}e._wrapperState={initialValue:Be(s)}}function L(e,l){var s=Be(l.value),i=Be(l.defaultValue);s!=null&&(s=""+s,s!==e.value&&(e.value=s),l.defaultValue==null&&e.defaultValue!==s&&(e.defaultValue=s)),i!=null&&(e.defaultValue=""+i)}function $(e){var l=e.textContent;l===e._wrapperState.initialValue&&l!==""&&l!==null&&(e.value=l)}function he(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ce(e,l){return e==null||e==="http://www.w3.org/1999/xhtml"?he(l):e==="http://www.w3.org/2000/svg"&&l==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fe,Oe=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(l,s,i,n){MSApp.execUnsafeLocalFunction(function(){return e(l,s,i,n)})}:e})(function(e,l){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=l;else{for(fe=fe||document.createElement("div"),fe.innerHTML="<svg>"+l.valueOf().toString()+"</svg>",l=fe.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;l.firstChild;)e.appendChild(l.firstChild)}});function il(e,l){if(l){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=l;return}}e.textContent=l}var bl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ti=["Webkit","ms","Moz","O"];Object.keys(bl).forEach(function(e){Ti.forEach(function(l){l=l+e.charAt(0).toUpperCase()+e.substring(1),bl[l]=bl[e]})});function Gs(e,l,s){return l==null||typeof l=="boolean"||l===""?"":s||typeof l!="number"||l===0||bl.hasOwnProperty(e)&&bl[e]?(""+l).trim():l+"px"}function Ri(e,l){e=e.style;for(var s in l)if(l.hasOwnProperty(s)){var i=s.indexOf("--")===0,n=Gs(s,l[s],i);s==="float"&&(s="cssFloat"),i?e.setProperty(s,n):e[s]=n}}var Hl=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oi(e,l){if(l){if(Hl[e]&&(l.children!=null||l.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(l.dangerouslySetInnerHTML!=null){if(l.children!=null)throw Error(o(60));if(typeof l.dangerouslySetInnerHTML!="object"||!("__html"in l.dangerouslySetInnerHTML))throw Error(o(61))}if(l.style!=null&&typeof l.style!="object")throw Error(o(62))}}function Ni(e,l){if(e.indexOf("-")===-1)return typeof l.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fi=null;function Et(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Di=null,ts=null,Ps=null;function Wi(e){if(e=Dt(e)){if(typeof Di!="function")throw Error(o(280));var l=e.stateNode;l&&(l=On(l),Di(e.stateNode,e.type,l))}}function En(e){ts?Ps?Ps.push(e):Ps=[e]:ts=e}function kt(){if(ts){var e=ts,l=Ps;if(Ps=ts=null,Wi(e),l)for(e=0;e<l.length;e++)Wi(l[e])}}function kn(e,l){return e(l)}function bt(){}var Ns=!1;function wi(e,l,s){if(Ns)return e(l,s);Ns=!0;try{return kn(e,l,s)}finally{Ns=!1,(ts!==null||Ps!==null)&&(bt(),kt())}}function Fs(e,l){var s=e.stateNode;if(s===null)return null;var i=On(s);if(i===null)return null;s=i[l];e:switch(l){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(o(231,l,typeof s));return s}var Ct=!1;if(f)try{var xi={};Object.defineProperty(xi,"passive",{get:function(){Ct=!0}}),window.addEventListener("test",xi,xi),window.removeEventListener("test",xi,xi)}catch{Ct=!1}function j(e,l,s,i,n,u,d,h,v){var z=Array.prototype.slice.call(arguments,3);try{l.apply(s,z)}catch(N){this.onError(N)}}var x=!1,G=null,M=!1,T=null,ae={onError:function(e){x=!0,G=e}};function oe(e,l,s,i,n,u,d,h,v){x=!1,G=null,j.apply(ae,arguments)}function ke(e,l,s,i,n,u,d,h,v){if(oe.apply(this,arguments),x){if(x){var z=G;x=!1,G=null}else throw Error(o(198));M||(M=!0,T=z)}}function Y(e){var l=e,s=e;if(e.alternate)for(;l.return;)l=l.return;else{e=l;do l=e,(l.flags&4098)!==0&&(s=l.return),e=l.return;while(e)}return l.tag===3?s:null}function ue(e){if(e.tag===13){var l=e.memoizedState;if(l===null&&(e=e.alternate,e!==null&&(l=e.memoizedState)),l!==null)return l.dehydrated}return null}function ve(e){if(Y(e)!==e)throw Error(o(188))}function Ie(e){var l=e.alternate;if(!l){if(l=Y(e),l===null)throw Error(o(188));return l!==e?null:e}for(var s=e,i=l;;){var n=s.return;if(n===null)break;var u=n.alternate;if(u===null){if(i=n.return,i!==null){s=i;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===s)return ve(n),e;if(u===i)return ve(n),l;u=u.sibling}throw Error(o(188))}if(s.return!==i.return)s=n,i=u;else{for(var d=!1,h=n.child;h;){if(h===s){d=!0,s=n,i=u;break}if(h===i){d=!0,i=n,s=u;break}h=h.sibling}if(!d){for(h=u.child;h;){if(h===s){d=!0,s=u,i=n;break}if(h===i){d=!0,i=u,s=n;break}h=h.sibling}if(!d)throw Error(o(189))}}if(s.alternate!==i)throw Error(o(190))}if(s.tag!==3)throw Error(o(188));return s.stateNode.current===s?e:l}function ce(e){return e=Ie(e),e!==null?qe(e):null}function qe(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var l=qe(e);if(l!==null)return l;e=e.sibling}return null}var Ne=a.unstable_scheduleCallback,nl=a.unstable_cancelCallback,Qe=a.unstable_shouldYield,De=a.unstable_requestPaint,Ae=a.unstable_now,jl=a.unstable_getCurrentPriorityLevel,Js=a.unstable_ImmediatePriority,ns=a.unstable_UserBlockingPriority,as=a.unstable_NormalPriority,hs=a.unstable_LowPriority,Tl=a.unstable_IdlePriority,Ds=null,rl=null;function $i(e){if(rl&&typeof rl.onCommitFiberRoot=="function")try{rl.onCommitFiberRoot(Ds,e,void 0,(e.current.flags&128)===128)}catch{}}var Sl=Math.clz32?Math.clz32:vl,Vi=Math.log,Me=Math.LN2;function vl(e){return e>>>=0,e===0?32:31-(Vi(e)/Me|0)|0}var Cl=64,Pl=4194304;function Ws(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $s(e,l){var s=e.pendingLanes;if(s===0)return 0;var i=0,n=e.suspendedLanes,u=e.pingedLanes,d=s&268435455;if(d!==0){var h=d&~n;h!==0?i=Ws(h):(u&=d,u!==0&&(i=Ws(u)))}else d=s&~n,d!==0?i=Ws(d):u!==0&&(i=Ws(u));if(i===0)return 0;if(l!==0&&l!==i&&(l&n)===0&&(n=i&-i,u=l&-l,n>=u||n===16&&(u&4194240)!==0))return l;if((i&4)!==0&&(i|=s&16),l=e.entangledLanes,l!==0)for(e=e.entanglements,l&=i;0<l;)s=31-Sl(l),n=1<<s,i|=e[s],l&=~n;return i}function Ve(e,l){switch(e){case 1:case 2:case 4:return l+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zs(e,l){for(var s=e.suspendedLanes,i=e.pingedLanes,n=e.expirationTimes,u=e.pendingLanes;0<u;){var d=31-Sl(u),h=1<<d,v=n[d];v===-1?((h&s)===0||(h&i)!==0)&&(n[d]=Ve(h,l)):v<=l&&(e.expiredLanes|=h),u&=~h}}function Ki(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bn(){var e=Cl;return Cl<<=1,(Cl&4194240)===0&&(Cl=64),e}function Ta(e){for(var l=[],s=0;31>s;s++)l.push(e);return l}function It(e,l,s){e.pendingLanes|=l,l!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,l=31-Sl(l),e[l]=s}function Qd(e,l){var s=e.pendingLanes&~l;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=l,e.mutableReadLanes&=l,e.entangledLanes&=l,l=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<s;){var n=31-Sl(s),u=1<<n;l[n]=0,i[n]=-1,e[n]=-1,s&=~u}}function Ra(e,l){var s=e.entangledLanes|=l;for(e=e.entanglements;s;){var i=31-Sl(s),n=1<<i;n&l|e[i]&l&&(e[i]|=l),s&=~n}}var We=0;function Ku(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Qu,Oa,Yu,Xu,Zu,Na=!1,Cn=[],Vs=null,Ks=null,Qs=null,Lt=new Map,Gt=new Map,Ys=[],Yd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function er(e,l){switch(e){case"focusin":case"focusout":Vs=null;break;case"dragenter":case"dragleave":Ks=null;break;case"mouseover":case"mouseout":Qs=null;break;case"pointerover":case"pointerout":Lt.delete(l.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gt.delete(l.pointerId)}}function Pt(e,l,s,i,n,u){return e===null||e.nativeEvent!==u?(e={blockedOn:l,domEventName:s,eventSystemFlags:i,nativeEvent:u,targetContainers:[n]},l!==null&&(l=Dt(l),l!==null&&Oa(l)),e):(e.eventSystemFlags|=i,l=e.targetContainers,n!==null&&l.indexOf(n)===-1&&l.push(n),e)}function Xd(e,l,s,i,n){switch(l){case"focusin":return Vs=Pt(Vs,e,l,s,i,n),!0;case"dragenter":return Ks=Pt(Ks,e,l,s,i,n),!0;case"mouseover":return Qs=Pt(Qs,e,l,s,i,n),!0;case"pointerover":var u=n.pointerId;return Lt.set(u,Pt(Lt.get(u)||null,e,l,s,i,n)),!0;case"gotpointercapture":return u=n.pointerId,Gt.set(u,Pt(Gt.get(u)||null,e,l,s,i,n)),!0}return!1}function lr(e){var l=yi(e.target);if(l!==null){var s=Y(l);if(s!==null){if(l=s.tag,l===13){if(l=ue(s),l!==null){e.blockedOn=l,Zu(e.priority,function(){Yu(s)});return}}else if(l===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function In(e){if(e.blockedOn!==null)return!1;for(var l=e.targetContainers;0<l.length;){var s=Da(e.domEventName,e.eventSystemFlags,l[0],e.nativeEvent);if(s===null){s=e.nativeEvent;var i=new s.constructor(s.type,s);Fi=i,s.target.dispatchEvent(i),Fi=null}else return l=Dt(s),l!==null&&Oa(l),e.blockedOn=s,!1;l.shift()}return!0}function sr(e,l,s){In(e)&&s.delete(l)}function Zd(){Na=!1,Vs!==null&&In(Vs)&&(Vs=null),Ks!==null&&In(Ks)&&(Ks=null),Qs!==null&&In(Qs)&&(Qs=null),Lt.forEach(sr),Gt.forEach(sr)}function Jt(e,l){e.blockedOn===l&&(e.blockedOn=null,Na||(Na=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Zd)))}function zt(e){function l(n){return Jt(n,e)}if(0<Cn.length){Jt(Cn[0],e);for(var s=1;s<Cn.length;s++){var i=Cn[s];i.blockedOn===e&&(i.blockedOn=null)}}for(Vs!==null&&Jt(Vs,e),Ks!==null&&Jt(Ks,e),Qs!==null&&Jt(Qs,e),Lt.forEach(l),Gt.forEach(l),s=0;s<Ys.length;s++)i=Ys[s],i.blockedOn===e&&(i.blockedOn=null);for(;0<Ys.length&&(s=Ys[0],s.blockedOn===null);)lr(s),s.blockedOn===null&&Ys.shift()}var Qi=pe.ReactCurrentBatchConfig,Ln=!0;function eg(e,l,s,i){var n=We,u=Qi.transition;Qi.transition=null;try{We=1,Fa(e,l,s,i)}finally{We=n,Qi.transition=u}}function lg(e,l,s,i){var n=We,u=Qi.transition;Qi.transition=null;try{We=4,Fa(e,l,s,i)}finally{We=n,Qi.transition=u}}function Fa(e,l,s,i){if(Ln){var n=Da(e,l,s,i);if(n===null)uo(e,l,i,Gn,s),er(e,i);else if(Xd(n,e,l,s,i))i.stopPropagation();else if(er(e,i),l&4&&-1<Yd.indexOf(e)){for(;n!==null;){var u=Dt(n);if(u!==null&&Qu(u),u=Da(e,l,s,i),u===null&&uo(e,l,i,Gn,s),u===n)break;n=u}n!==null&&i.stopPropagation()}else uo(e,l,i,null,s)}}var Gn=null;function Da(e,l,s,i){if(Gn=null,e=Et(i),e=yi(e),e!==null)if(l=Y(e),l===null)e=null;else if(s=l.tag,s===13){if(e=ue(l),e!==null)return e;e=null}else if(s===3){if(l.stateNode.current.memoizedState.isDehydrated)return l.tag===3?l.stateNode.containerInfo:null;e=null}else l!==e&&(e=null);return Gn=e,null}function ir(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jl()){case Js:return 1;case ns:return 4;case as:case hs:return 16;case Tl:return 536870912;default:return 16}default:return 16}}var Xs=null,Wa=null,Pn=null;function tr(){if(Pn)return Pn;var e,l=Wa,s=l.length,i,n="value"in Xs?Xs.value:Xs.textContent,u=n.length;for(e=0;e<s&&l[e]===n[e];e++);var d=s-e;for(i=1;i<=d&&l[s-i]===n[u-i];i++);return Pn=n.slice(e,1<i?1-i:void 0)}function Jn(e){var l=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&l===13&&(e=13)):e=l,e===10&&(e=13),32<=e||e===13?e:0}function zn(){return!0}function nr(){return!1}function Rl(e){function l(s,i,n,u,d){this._reactName=s,this._targetInst=n,this.type=i,this.nativeEvent=u,this.target=d,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(s=e[h],this[h]=s?s(u):u[h]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?zn:nr,this.isPropagationStopped=nr,this}return K(l.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=zn)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=zn)},persist:function(){},isPersistent:zn}),l}var Yi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$a=Rl(Yi),Ut=K({},Yi,{view:0,detail:0}),sg=Rl(Ut),Va,Ka,qt,Un=K({},Ut,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ya,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qt&&(qt&&e.type==="mousemove"?(Va=e.screenX-qt.screenX,Ka=e.screenY-qt.screenY):Ka=Va=0,qt=e),Va)},movementY:function(e){return"movementY"in e?e.movementY:Ka}}),ar=Rl(Un),ig=K({},Un,{dataTransfer:0}),tg=Rl(ig),ng=K({},Ut,{relatedTarget:0}),Qa=Rl(ng),ag=K({},Yi,{animationName:0,elapsedTime:0,pseudoElement:0}),og=Rl(ag),ug=K({},Yi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rg=Rl(ug),cg=K({},Yi,{data:0}),or=Rl(cg),pg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fg(e){var l=this.nativeEvent;return l.getModifierState?l.getModifierState(e):(e=gg[e])?!!l[e]:!1}function Ya(){return fg}var mg=K({},Ut,{key:function(e){if(e.key){var l=pg[e.key]||e.key;if(l!=="Unidentified")return l}return e.type==="keypress"?(e=Jn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ya,charCode:function(e){return e.type==="keypress"?Jn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hg=Rl(mg),_g=K({},Un,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ur=Rl(_g),jg=K({},Ut,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ya}),Sg=Rl(jg),vg=K({},Yi,{propertyName:0,elapsedTime:0,pseudoElement:0}),wg=Rl(vg),xg=K({},Un,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yg=Rl(xg),Eg=[9,13,27,32],Xa=f&&"CompositionEvent"in window,Bt=null;f&&"documentMode"in document&&(Bt=document.documentMode);var kg=f&&"TextEvent"in window&&!Bt,rr=f&&(!Xa||Bt&&8<Bt&&11>=Bt),cr=" ",pr=!1;function dr(e,l){switch(e){case"keyup":return Eg.indexOf(l.keyCode)!==-1;case"keydown":return l.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xi=!1;function bg(e,l){switch(e){case"compositionend":return gr(l);case"keypress":return l.which!==32?null:(pr=!0,cr);case"textInput":return e=l.data,e===cr&&pr?null:e;default:return null}}function Cg(e,l){if(Xi)return e==="compositionend"||!Xa&&dr(e,l)?(e=tr(),Pn=Wa=Xs=null,Xi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(l.ctrlKey||l.altKey||l.metaKey)||l.ctrlKey&&l.altKey){if(l.char&&1<l.char.length)return l.char;if(l.which)return String.fromCharCode(l.which)}return null;case"compositionend":return rr&&l.locale!=="ko"?null:l.data;default:return null}}var Ig={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fr(e){var l=e&&e.nodeName&&e.nodeName.toLowerCase();return l==="input"?!!Ig[e.type]:l==="textarea"}function mr(e,l,s,i){En(i),l=Hn(l,"onChange"),0<l.length&&(s=new $a("onChange","change",null,s,i),e.push({event:s,listeners:l}))}var At=null,Mt=null;function Lg(e){zr(e,0)}function qn(e){var l=it(e);if(Mi(l))return e}function Gg(e,l){if(e==="change")return l}var hr=!1;if(f){var Za;if(f){var eo="oninput"in document;if(!eo){var _r=document.createElement("div");_r.setAttribute("oninput","return;"),eo=typeof _r.oninput=="function"}Za=eo}else Za=!1;hr=Za&&(!document.documentMode||9<document.documentMode)}function jr(){At&&(At.detachEvent("onpropertychange",Sr),Mt=At=null)}function Sr(e){if(e.propertyName==="value"&&qn(Mt)){var l=[];mr(l,Mt,e,Et(e)),wi(Lg,l)}}function Pg(e,l,s){e==="focusin"?(jr(),At=l,Mt=s,At.attachEvent("onpropertychange",Sr)):e==="focusout"&&jr()}function Jg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qn(Mt)}function zg(e,l){if(e==="click")return qn(l)}function Ug(e,l){if(e==="input"||e==="change")return qn(l)}function qg(e,l){return e===l&&(e!==0||1/e===1/l)||e!==e&&l!==l}var os=typeof Object.is=="function"?Object.is:qg;function Ht(e,l){if(os(e,l))return!0;if(typeof e!="object"||e===null||typeof l!="object"||l===null)return!1;var s=Object.keys(e),i=Object.keys(l);if(s.length!==i.length)return!1;for(i=0;i<s.length;i++){var n=s[i];if(!m.call(l,n)||!os(e[n],l[n]))return!1}return!0}function vr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wr(e,l){var s=vr(e);e=0;for(var i;s;){if(s.nodeType===3){if(i=e+s.textContent.length,e<=l&&i>=l)return{node:s,offset:l-e};e=i}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=vr(s)}}function xr(e,l){return e&&l?e===l?!0:e&&e.nodeType===3?!1:l&&l.nodeType===3?xr(e,l.parentNode):"contains"in e?e.contains(l):e.compareDocumentPosition?!!(e.compareDocumentPosition(l)&16):!1:!1}function yr(){for(var e=window,l=el();l instanceof e.HTMLIFrameElement;){try{var s=typeof l.contentWindow.location.href=="string"}catch{s=!1}if(s)e=l.contentWindow;else break;l=el(e.document)}return l}function lo(e){var l=e&&e.nodeName&&e.nodeName.toLowerCase();return l&&(l==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||l==="textarea"||e.contentEditable==="true")}function Bg(e){var l=yr(),s=e.focusedElem,i=e.selectionRange;if(l!==s&&s&&s.ownerDocument&&xr(s.ownerDocument.documentElement,s)){if(i!==null&&lo(s)){if(l=i.start,e=i.end,e===void 0&&(e=l),"selectionStart"in s)s.selectionStart=l,s.selectionEnd=Math.min(e,s.value.length);else if(e=(l=s.ownerDocument||document)&&l.defaultView||window,e.getSelection){e=e.getSelection();var n=s.textContent.length,u=Math.min(i.start,n);i=i.end===void 0?u:Math.min(i.end,n),!e.extend&&u>i&&(n=i,i=u,u=n),n=wr(s,u);var d=wr(s,i);n&&d&&(e.rangeCount!==1||e.anchorNode!==n.node||e.anchorOffset!==n.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(l=l.createRange(),l.setStart(n.node,n.offset),e.removeAllRanges(),u>i?(e.addRange(l),e.extend(d.node,d.offset)):(l.setEnd(d.node,d.offset),e.addRange(l)))}}for(l=[],e=s;e=e.parentNode;)e.nodeType===1&&l.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<l.length;s++)e=l[s],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ag=f&&"documentMode"in document&&11>=document.documentMode,Zi=null,so=null,Tt=null,io=!1;function Er(e,l,s){var i=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;io||Zi==null||Zi!==el(i)||(i=Zi,"selectionStart"in i&&lo(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Tt&&Ht(Tt,i)||(Tt=i,i=Hn(so,"onSelect"),0<i.length&&(l=new $a("onSelect","select",null,l,s),e.push({event:l,listeners:i}),l.target=Zi)))}function Bn(e,l){var s={};return s[e.toLowerCase()]=l.toLowerCase(),s["Webkit"+e]="webkit"+l,s["Moz"+e]="moz"+l,s}var et={animationend:Bn("Animation","AnimationEnd"),animationiteration:Bn("Animation","AnimationIteration"),animationstart:Bn("Animation","AnimationStart"),transitionend:Bn("Transition","TransitionEnd")},to={},kr={};f&&(kr=document.createElement("div").style,"AnimationEvent"in window||(delete et.animationend.animation,delete et.animationiteration.animation,delete et.animationstart.animation),"TransitionEvent"in window||delete et.transitionend.transition);function An(e){if(to[e])return to[e];if(!et[e])return e;var l=et[e],s;for(s in l)if(l.hasOwnProperty(s)&&s in kr)return to[e]=l[s];return e}var br=An("animationend"),Cr=An("animationiteration"),Ir=An("animationstart"),Lr=An("transitionend"),Gr=new Map,Pr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zs(e,l){Gr.set(e,l),p(l,[e])}for(var no=0;no<Pr.length;no++){var ao=Pr[no],Mg=ao.toLowerCase(),Hg=ao[0].toUpperCase()+ao.slice(1);Zs(Mg,"on"+Hg)}Zs(br,"onAnimationEnd"),Zs(Cr,"onAnimationIteration"),Zs(Ir,"onAnimationStart"),Zs("dblclick","onDoubleClick"),Zs("focusin","onFocus"),Zs("focusout","onBlur"),Zs(Lr,"onTransitionEnd"),g("onMouseEnter",["mouseout","mouseover"]),g("onMouseLeave",["mouseout","mouseover"]),g("onPointerEnter",["pointerout","pointerover"]),g("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rt));function Jr(e,l,s){var i=e.type||"unknown-event";e.currentTarget=s,ke(i,l,void 0,e),e.currentTarget=null}function zr(e,l){l=(l&4)!==0;for(var s=0;s<e.length;s++){var i=e[s],n=i.event;i=i.listeners;e:{var u=void 0;if(l)for(var d=i.length-1;0<=d;d--){var h=i[d],v=h.instance,z=h.currentTarget;if(h=h.listener,v!==u&&n.isPropagationStopped())break e;Jr(n,h,z),u=v}else for(d=0;d<i.length;d++){if(h=i[d],v=h.instance,z=h.currentTarget,h=h.listener,v!==u&&n.isPropagationStopped())break e;Jr(n,h,z),u=v}}}if(M)throw e=T,M=!1,T=null,e}function Ye(e,l){var s=l[mo];s===void 0&&(s=l[mo]=new Set);var i=e+"__bubble";s.has(i)||(Ur(l,e,2,!1),s.add(i))}function oo(e,l,s){var i=0;l&&(i|=4),Ur(s,e,i,l)}var Mn="_reactListening"+Math.random().toString(36).slice(2);function Ot(e){if(!e[Mn]){e[Mn]=!0,r.forEach(function(s){s!=="selectionchange"&&(Tg.has(s)||oo(s,!1,e),oo(s,!0,e))});var l=e.nodeType===9?e:e.ownerDocument;l===null||l[Mn]||(l[Mn]=!0,oo("selectionchange",!1,l))}}function Ur(e,l,s,i){switch(ir(l)){case 1:var n=eg;break;case 4:n=lg;break;default:n=Fa}s=n.bind(null,l,s,e),n=void 0,!Ct||l!=="touchstart"&&l!=="touchmove"&&l!=="wheel"||(n=!0),i?n!==void 0?e.addEventListener(l,s,{capture:!0,passive:n}):e.addEventListener(l,s,!0):n!==void 0?e.addEventListener(l,s,{passive:n}):e.addEventListener(l,s,!1)}function uo(e,l,s,i,n){var u=i;if((l&1)===0&&(l&2)===0&&i!==null)e:for(;;){if(i===null)return;var d=i.tag;if(d===3||d===4){var h=i.stateNode.containerInfo;if(h===n||h.nodeType===8&&h.parentNode===n)break;if(d===4)for(d=i.return;d!==null;){var v=d.tag;if((v===3||v===4)&&(v=d.stateNode.containerInfo,v===n||v.nodeType===8&&v.parentNode===n))return;d=d.return}for(;h!==null;){if(d=yi(h),d===null)return;if(v=d.tag,v===5||v===6){i=u=d;continue e}h=h.parentNode}}i=i.return}wi(function(){var z=u,N=Et(s),F=[];e:{var R=Gr.get(e);if(R!==void 0){var Z=$a,se=e;switch(e){case"keypress":if(Jn(s)===0)break e;case"keydown":case"keyup":Z=hg;break;case"focusin":se="focus",Z=Qa;break;case"focusout":se="blur",Z=Qa;break;case"beforeblur":case"afterblur":Z=Qa;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=ar;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=tg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=Sg;break;case br:case Cr:case Ir:Z=og;break;case Lr:Z=wg;break;case"scroll":Z=sg;break;case"wheel":Z=yg;break;case"copy":case"cut":case"paste":Z=rg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=ur}var te=(l&4)!==0,al=!te&&e==="scroll",I=te?R!==null?R+"Capture":null:R;te=[];for(var E=z,P;E!==null;){P=E;var W=P.stateNode;if(P.tag===5&&W!==null&&(P=W,I!==null&&(W=Fs(E,I),W!=null&&te.push(Nt(E,W,P)))),al)break;E=E.return}0<te.length&&(R=new Z(R,se,null,s,N),F.push({event:R,listeners:te}))}}if((l&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",Z=e==="mouseout"||e==="pointerout",R&&s!==Fi&&(se=s.relatedTarget||s.fromElement)&&(yi(se)||se[Us]))break e;if((Z||R)&&(R=N.window===N?N:(R=N.ownerDocument)?R.defaultView||R.parentWindow:window,Z?(se=s.relatedTarget||s.toElement,Z=z,se=se?yi(se):null,se!==null&&(al=Y(se),se!==al||se.tag!==5&&se.tag!==6)&&(se=null)):(Z=null,se=z),Z!==se)){if(te=ar,W="onMouseLeave",I="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(te=ur,W="onPointerLeave",I="onPointerEnter",E="pointer"),al=Z==null?R:it(Z),P=se==null?R:it(se),R=new te(W,E+"leave",Z,s,N),R.target=al,R.relatedTarget=P,W=null,yi(N)===z&&(te=new te(I,E+"enter",se,s,N),te.target=P,te.relatedTarget=al,W=te),al=W,Z&&se)l:{for(te=Z,I=se,E=0,P=te;P;P=lt(P))E++;for(P=0,W=I;W;W=lt(W))P++;for(;0<E-P;)te=lt(te),E--;for(;0<P-E;)I=lt(I),P--;for(;E--;){if(te===I||I!==null&&te===I.alternate)break l;te=lt(te),I=lt(I)}te=null}else te=null;Z!==null&&qr(F,R,Z,te,!1),se!==null&&al!==null&&qr(F,al,se,te,!0)}}e:{if(R=z?it(z):window,Z=R.nodeName&&R.nodeName.toLowerCase(),Z==="select"||Z==="input"&&R.type==="file")var ne=Gg;else if(fr(R))if(hr)ne=Ug;else{ne=Jg;var _e=Pg}else(Z=R.nodeName)&&Z.toLowerCase()==="input"&&(R.type==="checkbox"||R.type==="radio")&&(ne=zg);if(ne&&(ne=ne(e,z))){mr(F,ne,s,N);break e}_e&&_e(e,R,z),e==="focusout"&&(_e=R._wrapperState)&&_e.controlled&&R.type==="number"&&Si(R,"number",R.value)}switch(_e=z?it(z):window,e){case"focusin":(fr(_e)||_e.contentEditable==="true")&&(Zi=_e,so=z,Tt=null);break;case"focusout":Tt=so=Zi=null;break;case"mousedown":io=!0;break;case"contextmenu":case"mouseup":case"dragend":io=!1,Er(F,s,N);break;case"selectionchange":if(Ag)break;case"keydown":case"keyup":Er(F,s,N)}var je;if(Xa)e:{switch(e){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else Xi?dr(e,s)&&(ye="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(ye="onCompositionStart");ye&&(rr&&s.locale!=="ko"&&(Xi||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Xi&&(je=tr()):(Xs=N,Wa="value"in Xs?Xs.value:Xs.textContent,Xi=!0)),_e=Hn(z,ye),0<_e.length&&(ye=new or(ye,e,null,s,N),F.push({event:ye,listeners:_e}),je?ye.data=je:(je=gr(s),je!==null&&(ye.data=je)))),(je=kg?bg(e,s):Cg(e,s))&&(z=Hn(z,"onBeforeInput"),0<z.length&&(N=new or("onBeforeInput","beforeinput",null,s,N),F.push({event:N,listeners:z}),N.data=je))}zr(F,l)})}function Nt(e,l,s){return{instance:e,listener:l,currentTarget:s}}function Hn(e,l){for(var s=l+"Capture",i=[];e!==null;){var n=e,u=n.stateNode;n.tag===5&&u!==null&&(n=u,u=Fs(e,s),u!=null&&i.unshift(Nt(e,u,n)),u=Fs(e,l),u!=null&&i.push(Nt(e,u,n))),e=e.return}return i}function lt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qr(e,l,s,i,n){for(var u=l._reactName,d=[];s!==null&&s!==i;){var h=s,v=h.alternate,z=h.stateNode;if(v!==null&&v===i)break;h.tag===5&&z!==null&&(h=z,n?(v=Fs(s,u),v!=null&&d.unshift(Nt(s,v,h))):n||(v=Fs(s,u),v!=null&&d.push(Nt(s,v,h)))),s=s.return}d.length!==0&&e.push({event:l,listeners:d})}var Rg=/\r\n?/g,Og=/\u0000|\uFFFD/g;function Br(e){return(typeof e=="string"?e:""+e).replace(Rg,`
`).replace(Og,"")}function Tn(e,l,s){if(l=Br(l),Br(e)!==l&&s)throw Error(o(425))}function Rn(){}var ro=null,co=null;function po(e,l){return e==="textarea"||e==="noscript"||typeof l.children=="string"||typeof l.children=="number"||typeof l.dangerouslySetInnerHTML=="object"&&l.dangerouslySetInnerHTML!==null&&l.dangerouslySetInnerHTML.__html!=null}var go=typeof setTimeout=="function"?setTimeout:void 0,Ng=typeof clearTimeout=="function"?clearTimeout:void 0,Ar=typeof Promise=="function"?Promise:void 0,Fg=typeof queueMicrotask=="function"?queueMicrotask:typeof Ar<"u"?function(e){return Ar.resolve(null).then(e).catch(Dg)}:go;function Dg(e){setTimeout(function(){throw e})}function fo(e,l){var s=l,i=0;do{var n=s.nextSibling;if(e.removeChild(s),n&&n.nodeType===8)if(s=n.data,s==="/$"){if(i===0){e.removeChild(n),zt(l);return}i--}else s!=="$"&&s!=="$?"&&s!=="$!"||i++;s=n}while(s);zt(l)}function ei(e){for(;e!=null;e=e.nextSibling){var l=e.nodeType;if(l===1||l===3)break;if(l===8){if(l=e.data,l==="$"||l==="$!"||l==="$?")break;if(l==="/$")return null}}return e}function Mr(e){e=e.previousSibling;for(var l=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(l===0)return e;l--}else s==="/$"&&l++}e=e.previousSibling}return null}var st=Math.random().toString(36).slice(2),_s="__reactFiber$"+st,Ft="__reactProps$"+st,Us="__reactContainer$"+st,mo="__reactEvents$"+st,Wg="__reactListeners$"+st,$g="__reactHandles$"+st;function yi(e){var l=e[_s];if(l)return l;for(var s=e.parentNode;s;){if(l=s[Us]||s[_s]){if(s=l.alternate,l.child!==null||s!==null&&s.child!==null)for(e=Mr(e);e!==null;){if(s=e[_s])return s;e=Mr(e)}return l}e=s,s=e.parentNode}return null}function Dt(e){return e=e[_s]||e[Us],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function it(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function On(e){return e[Ft]||null}var ho=[],tt=-1;function li(e){return{current:e}}function Xe(e){0>tt||(e.current=ho[tt],ho[tt]=null,tt--)}function Ke(e,l){tt++,ho[tt]=e.current,e.current=l}var si={},wl=li(si),Jl=li(!1),Ei=si;function nt(e,l){var s=e.type.contextTypes;if(!s)return si;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===l)return i.__reactInternalMemoizedMaskedChildContext;var n={},u;for(u in s)n[u]=l[u];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=n),n}function zl(e){return e=e.childContextTypes,e!=null}function Nn(){Xe(Jl),Xe(wl)}function Hr(e,l,s){if(wl.current!==si)throw Error(o(168));Ke(wl,l),Ke(Jl,s)}function Tr(e,l,s){var i=e.stateNode;if(l=l.childContextTypes,typeof i.getChildContext!="function")return s;i=i.getChildContext();for(var n in i)if(!(n in l))throw Error(o(108,Ge(e)||"Unknown",n));return K({},s,i)}function Fn(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||si,Ei=wl.current,Ke(wl,e),Ke(Jl,Jl.current),!0}function Rr(e,l,s){var i=e.stateNode;if(!i)throw Error(o(169));s?(e=Tr(e,l,Ei),i.__reactInternalMemoizedMergedChildContext=e,Xe(Jl),Xe(wl),Ke(wl,e)):Xe(Jl),Ke(Jl,s)}var qs=null,Dn=!1,_o=!1;function Or(e){qs===null?qs=[e]:qs.push(e)}function Vg(e){Dn=!0,Or(e)}function ii(){if(!_o&&qs!==null){_o=!0;var e=0,l=We;try{var s=qs;for(We=1;e<s.length;e++){var i=s[e];do i=i(!0);while(i!==null)}qs=null,Dn=!1}catch(n){throw qs!==null&&(qs=qs.slice(e+1)),Ne(Js,ii),n}finally{We=l,_o=!1}}return null}var at=[],ot=0,Wn=null,$n=0,$l=[],Vl=0,ki=null,Bs=1,As="";function bi(e,l){at[ot++]=$n,at[ot++]=Wn,Wn=e,$n=l}function Nr(e,l,s){$l[Vl++]=Bs,$l[Vl++]=As,$l[Vl++]=ki,ki=e;var i=Bs;e=As;var n=32-Sl(i)-1;i&=~(1<<n),s+=1;var u=32-Sl(l)+n;if(30<u){var d=n-n%5;u=(i&(1<<d)-1).toString(32),i>>=d,n-=d,Bs=1<<32-Sl(l)+n|s<<n|i,As=u+e}else Bs=1<<u|s<<n|i,As=e}function jo(e){e.return!==null&&(bi(e,1),Nr(e,1,0))}function So(e){for(;e===Wn;)Wn=at[--ot],at[ot]=null,$n=at[--ot],at[ot]=null;for(;e===ki;)ki=$l[--Vl],$l[Vl]=null,As=$l[--Vl],$l[Vl]=null,Bs=$l[--Vl],$l[Vl]=null}var Ol=null,Nl=null,Ze=!1,us=null;function Fr(e,l){var s=Xl(5,null,null,0);s.elementType="DELETED",s.stateNode=l,s.return=e,l=e.deletions,l===null?(e.deletions=[s],e.flags|=16):l.push(s)}function Dr(e,l){switch(e.tag){case 5:var s=e.type;return l=l.nodeType!==1||s.toLowerCase()!==l.nodeName.toLowerCase()?null:l,l!==null?(e.stateNode=l,Ol=e,Nl=ei(l.firstChild),!0):!1;case 6:return l=e.pendingProps===""||l.nodeType!==3?null:l,l!==null?(e.stateNode=l,Ol=e,Nl=null,!0):!1;case 13:return l=l.nodeType!==8?null:l,l!==null?(s=ki!==null?{id:Bs,overflow:As}:null,e.memoizedState={dehydrated:l,treeContext:s,retryLane:1073741824},s=Xl(18,null,null,0),s.stateNode=l,s.return=e,e.child=s,Ol=e,Nl=null,!0):!1;default:return!1}}function vo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wo(e){if(Ze){var l=Nl;if(l){var s=l;if(!Dr(e,l)){if(vo(e))throw Error(o(418));l=ei(s.nextSibling);var i=Ol;l&&Dr(e,l)?Fr(i,s):(e.flags=e.flags&-4097|2,Ze=!1,Ol=e)}}else{if(vo(e))throw Error(o(418));e.flags=e.flags&-4097|2,Ze=!1,Ol=e}}}function Wr(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ol=e}function Vn(e){if(e!==Ol)return!1;if(!Ze)return Wr(e),Ze=!0,!1;var l;if((l=e.tag!==3)&&!(l=e.tag!==5)&&(l=e.type,l=l!=="head"&&l!=="body"&&!po(e.type,e.memoizedProps)),l&&(l=Nl)){if(vo(e))throw $r(),Error(o(418));for(;l;)Fr(e,l),l=ei(l.nextSibling)}if(Wr(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,l=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"){if(l===0){Nl=ei(e.nextSibling);break e}l--}else s!=="$"&&s!=="$!"&&s!=="$?"||l++}e=e.nextSibling}Nl=null}}else Nl=Ol?ei(e.stateNode.nextSibling):null;return!0}function $r(){for(var e=Nl;e;)e=ei(e.nextSibling)}function ut(){Nl=Ol=null,Ze=!1}function xo(e){us===null?us=[e]:us.push(e)}var Kg=pe.ReactCurrentBatchConfig;function Wt(e,l,s){if(e=s.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(o(309));var i=s.stateNode}if(!i)throw Error(o(147,e));var n=i,u=""+e;return l!==null&&l.ref!==null&&typeof l.ref=="function"&&l.ref._stringRef===u?l.ref:(l=function(d){var h=n.refs;d===null?delete h[u]:h[u]=d},l._stringRef=u,l)}if(typeof e!="string")throw Error(o(284));if(!s._owner)throw Error(o(290,e))}return e}function Kn(e,l){throw e=Object.prototype.toString.call(l),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":e))}function Vr(e){var l=e._init;return l(e._payload)}function Kr(e){function l(I,E){if(e){var P=I.deletions;P===null?(I.deletions=[E],I.flags|=16):P.push(E)}}function s(I,E){if(!e)return null;for(;E!==null;)l(I,E),E=E.sibling;return null}function i(I,E){for(I=new Map;E!==null;)E.key!==null?I.set(E.key,E):I.set(E.index,E),E=E.sibling;return I}function n(I,E){return I=pi(I,E),I.index=0,I.sibling=null,I}function u(I,E,P){return I.index=P,e?(P=I.alternate,P!==null?(P=P.index,P<E?(I.flags|=2,E):P):(I.flags|=2,E)):(I.flags|=1048576,E)}function d(I){return e&&I.alternate===null&&(I.flags|=2),I}function h(I,E,P,W){return E===null||E.tag!==6?(E=gu(P,I.mode,W),E.return=I,E):(E=n(E,P),E.return=I,E)}function v(I,E,P,W){var ne=P.type;return ne===Le?N(I,E,P.props.children,W,P.key):E!==null&&(E.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===Fe&&Vr(ne)===E.type)?(W=n(E,P.props),W.ref=Wt(I,E,P),W.return=I,W):(W=Sa(P.type,P.key,P.props,null,I.mode,W),W.ref=Wt(I,E,P),W.return=I,W)}function z(I,E,P,W){return E===null||E.tag!==4||E.stateNode.containerInfo!==P.containerInfo||E.stateNode.implementation!==P.implementation?(E=fu(P,I.mode,W),E.return=I,E):(E=n(E,P.children||[]),E.return=I,E)}function N(I,E,P,W,ne){return E===null||E.tag!==7?(E=Ui(P,I.mode,W,ne),E.return=I,E):(E=n(E,P),E.return=I,E)}function F(I,E,P){if(typeof E=="string"&&E!==""||typeof E=="number")return E=gu(""+E,I.mode,P),E.return=I,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case re:return P=Sa(E.type,E.key,E.props,null,I.mode,P),P.ref=Wt(I,null,E),P.return=I,P;case we:return E=fu(E,I.mode,P),E.return=I,E;case Fe:var W=E._init;return F(I,W(E._payload),P)}if(fs(E)||V(E))return E=Ui(E,I.mode,P,null),E.return=I,E;Kn(I,E)}return null}function R(I,E,P,W){var ne=E!==null?E.key:null;if(typeof P=="string"&&P!==""||typeof P=="number")return ne!==null?null:h(I,E,""+P,W);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case re:return P.key===ne?v(I,E,P,W):null;case we:return P.key===ne?z(I,E,P,W):null;case Fe:return ne=P._init,R(I,E,ne(P._payload),W)}if(fs(P)||V(P))return ne!==null?null:N(I,E,P,W,null);Kn(I,P)}return null}function Z(I,E,P,W,ne){if(typeof W=="string"&&W!==""||typeof W=="number")return I=I.get(P)||null,h(E,I,""+W,ne);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case re:return I=I.get(W.key===null?P:W.key)||null,v(E,I,W,ne);case we:return I=I.get(W.key===null?P:W.key)||null,z(E,I,W,ne);case Fe:var _e=W._init;return Z(I,E,P,_e(W._payload),ne)}if(fs(W)||V(W))return I=I.get(P)||null,N(E,I,W,ne,null);Kn(E,W)}return null}function se(I,E,P,W){for(var ne=null,_e=null,je=E,ye=E=0,ml=null;je!==null&&ye<P.length;ye++){je.index>ye?(ml=je,je=null):ml=je.sibling;var Re=R(I,je,P[ye],W);if(Re===null){je===null&&(je=ml);break}e&&je&&Re.alternate===null&&l(I,je),E=u(Re,E,ye),_e===null?ne=Re:_e.sibling=Re,_e=Re,je=ml}if(ye===P.length)return s(I,je),Ze&&bi(I,ye),ne;if(je===null){for(;ye<P.length;ye++)je=F(I,P[ye],W),je!==null&&(E=u(je,E,ye),_e===null?ne=je:_e.sibling=je,_e=je);return Ze&&bi(I,ye),ne}for(je=i(I,je);ye<P.length;ye++)ml=Z(je,I,ye,P[ye],W),ml!==null&&(e&&ml.alternate!==null&&je.delete(ml.key===null?ye:ml.key),E=u(ml,E,ye),_e===null?ne=ml:_e.sibling=ml,_e=ml);return e&&je.forEach(function(di){return l(I,di)}),Ze&&bi(I,ye),ne}function te(I,E,P,W){var ne=V(P);if(typeof ne!="function")throw Error(o(150));if(P=ne.call(P),P==null)throw Error(o(151));for(var _e=ne=null,je=E,ye=E=0,ml=null,Re=P.next();je!==null&&!Re.done;ye++,Re=P.next()){je.index>ye?(ml=je,je=null):ml=je.sibling;var di=R(I,je,Re.value,W);if(di===null){je===null&&(je=ml);break}e&&je&&di.alternate===null&&l(I,je),E=u(di,E,ye),_e===null?ne=di:_e.sibling=di,_e=di,je=ml}if(Re.done)return s(I,je),Ze&&bi(I,ye),ne;if(je===null){for(;!Re.done;ye++,Re=P.next())Re=F(I,Re.value,W),Re!==null&&(E=u(Re,E,ye),_e===null?ne=Re:_e.sibling=Re,_e=Re);return Ze&&bi(I,ye),ne}for(je=i(I,je);!Re.done;ye++,Re=P.next())Re=Z(je,I,ye,Re.value,W),Re!==null&&(e&&Re.alternate!==null&&je.delete(Re.key===null?ye:Re.key),E=u(Re,E,ye),_e===null?ne=Re:_e.sibling=Re,_e=Re);return e&&je.forEach(function(Lf){return l(I,Lf)}),Ze&&bi(I,ye),ne}function al(I,E,P,W){if(typeof P=="object"&&P!==null&&P.type===Le&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case re:e:{for(var ne=P.key,_e=E;_e!==null;){if(_e.key===ne){if(ne=P.type,ne===Le){if(_e.tag===7){s(I,_e.sibling),E=n(_e,P.props.children),E.return=I,I=E;break e}}else if(_e.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===Fe&&Vr(ne)===_e.type){s(I,_e.sibling),E=n(_e,P.props),E.ref=Wt(I,_e,P),E.return=I,I=E;break e}s(I,_e);break}else l(I,_e);_e=_e.sibling}P.type===Le?(E=Ui(P.props.children,I.mode,W,P.key),E.return=I,I=E):(W=Sa(P.type,P.key,P.props,null,I.mode,W),W.ref=Wt(I,E,P),W.return=I,I=W)}return d(I);case we:e:{for(_e=P.key;E!==null;){if(E.key===_e)if(E.tag===4&&E.stateNode.containerInfo===P.containerInfo&&E.stateNode.implementation===P.implementation){s(I,E.sibling),E=n(E,P.children||[]),E.return=I,I=E;break e}else{s(I,E);break}else l(I,E);E=E.sibling}E=fu(P,I.mode,W),E.return=I,I=E}return d(I);case Fe:return _e=P._init,al(I,E,_e(P._payload),W)}if(fs(P))return se(I,E,P,W);if(V(P))return te(I,E,P,W);Kn(I,P)}return typeof P=="string"&&P!==""||typeof P=="number"?(P=""+P,E!==null&&E.tag===6?(s(I,E.sibling),E=n(E,P),E.return=I,I=E):(s(I,E),E=gu(P,I.mode,W),E.return=I,I=E),d(I)):s(I,E)}return al}var rt=Kr(!0),Qr=Kr(!1),Qn=li(null),Yn=null,ct=null,yo=null;function Eo(){yo=ct=Yn=null}function ko(e){var l=Qn.current;Xe(Qn),e._currentValue=l}function bo(e,l,s){for(;e!==null;){var i=e.alternate;if((e.childLanes&l)!==l?(e.childLanes|=l,i!==null&&(i.childLanes|=l)):i!==null&&(i.childLanes&l)!==l&&(i.childLanes|=l),e===s)break;e=e.return}}function pt(e,l){Yn=e,yo=ct=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&l)!==0&&(Ul=!0),e.firstContext=null)}function Kl(e){var l=e._currentValue;if(yo!==e)if(e={context:e,memoizedValue:l,next:null},ct===null){if(Yn===null)throw Error(o(308));ct=e,Yn.dependencies={lanes:0,firstContext:e}}else ct=ct.next=e;return l}var Ci=null;function Co(e){Ci===null?Ci=[e]:Ci.push(e)}function Yr(e,l,s,i){var n=l.interleaved;return n===null?(s.next=s,Co(l)):(s.next=n.next,n.next=s),l.interleaved=s,Ms(e,i)}function Ms(e,l){e.lanes|=l;var s=e.alternate;for(s!==null&&(s.lanes|=l),s=e,e=e.return;e!==null;)e.childLanes|=l,s=e.alternate,s!==null&&(s.childLanes|=l),s=e,e=e.return;return s.tag===3?s.stateNode:null}var ti=!1;function Io(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xr(e,l){e=e.updateQueue,l.updateQueue===e&&(l.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Hs(e,l){return{eventTime:e,lane:l,tag:0,payload:null,callback:null,next:null}}function ni(e,l,s){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Te&2)!==0){var n=i.pending;return n===null?l.next=l:(l.next=n.next,n.next=l),i.pending=l,Ms(e,s)}return n=i.interleaved,n===null?(l.next=l,Co(i)):(l.next=n.next,n.next=l),i.interleaved=l,Ms(e,s)}function Xn(e,l,s){if(l=l.updateQueue,l!==null&&(l=l.shared,(s&4194240)!==0)){var i=l.lanes;i&=e.pendingLanes,s|=i,l.lanes=s,Ra(e,s)}}function Zr(e,l){var s=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,s===i)){var n=null,u=null;if(s=s.firstBaseUpdate,s!==null){do{var d={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};u===null?n=u=d:u=u.next=d,s=s.next}while(s!==null);u===null?n=u=l:u=u.next=l}else n=u=l;s={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:i.shared,effects:i.effects},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=l:e.next=l,s.lastBaseUpdate=l}function Zn(e,l,s,i){var n=e.updateQueue;ti=!1;var u=n.firstBaseUpdate,d=n.lastBaseUpdate,h=n.shared.pending;if(h!==null){n.shared.pending=null;var v=h,z=v.next;v.next=null,d===null?u=z:d.next=z,d=v;var N=e.alternate;N!==null&&(N=N.updateQueue,h=N.lastBaseUpdate,h!==d&&(h===null?N.firstBaseUpdate=z:h.next=z,N.lastBaseUpdate=v))}if(u!==null){var F=n.baseState;d=0,N=z=v=null,h=u;do{var R=h.lane,Z=h.eventTime;if((i&R)===R){N!==null&&(N=N.next={eventTime:Z,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var se=e,te=h;switch(R=l,Z=s,te.tag){case 1:if(se=te.payload,typeof se=="function"){F=se.call(Z,F,R);break e}F=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=te.payload,R=typeof se=="function"?se.call(Z,F,R):se,R==null)break e;F=K({},F,R);break e;case 2:ti=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,R=n.effects,R===null?n.effects=[h]:R.push(h))}else Z={eventTime:Z,lane:R,tag:h.tag,payload:h.payload,callback:h.callback,next:null},N===null?(z=N=Z,v=F):N=N.next=Z,d|=R;if(h=h.next,h===null){if(h=n.shared.pending,h===null)break;R=h,h=R.next,R.next=null,n.lastBaseUpdate=R,n.shared.pending=null}}while(!0);if(N===null&&(v=F),n.baseState=v,n.firstBaseUpdate=z,n.lastBaseUpdate=N,l=n.shared.interleaved,l!==null){n=l;do d|=n.lane,n=n.next;while(n!==l)}else u===null&&(n.shared.lanes=0);Gi|=d,e.lanes=d,e.memoizedState=F}}function ec(e,l,s){if(e=l.effects,l.effects=null,e!==null)for(l=0;l<e.length;l++){var i=e[l],n=i.callback;if(n!==null){if(i.callback=null,i=s,typeof n!="function")throw Error(o(191,n));n.call(i)}}}var $t={},js=li($t),Vt=li($t),Kt=li($t);function Ii(e){if(e===$t)throw Error(o(174));return e}function Lo(e,l){switch(Ke(Kt,l),Ke(Vt,e),Ke(js,$t),e=l.nodeType,e){case 9:case 11:l=(l=l.documentElement)?l.namespaceURI:Ce(null,"");break;default:e=e===8?l.parentNode:l,l=e.namespaceURI||null,e=e.tagName,l=Ce(l,e)}Xe(js),Ke(js,l)}function dt(){Xe(js),Xe(Vt),Xe(Kt)}function lc(e){Ii(Kt.current);var l=Ii(js.current),s=Ce(l,e.type);l!==s&&(Ke(Vt,e),Ke(js,s))}function Go(e){Vt.current===e&&(Xe(js),Xe(Vt))}var ll=li(0);function ea(e){for(var l=e;l!==null;){if(l.tag===13){var s=l.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return l}else if(l.tag===19&&l.memoizedProps.revealOrder!==void 0){if((l.flags&128)!==0)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break;for(;l.sibling===null;){if(l.return===null||l.return===e)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var Po=[];function Jo(){for(var e=0;e<Po.length;e++)Po[e]._workInProgressVersionPrimary=null;Po.length=0}var la=pe.ReactCurrentDispatcher,zo=pe.ReactCurrentBatchConfig,Li=0,sl=null,cl=null,gl=null,sa=!1,Qt=!1,Yt=0,Qg=0;function xl(){throw Error(o(321))}function Uo(e,l){if(l===null)return!1;for(var s=0;s<l.length&&s<e.length;s++)if(!os(e[s],l[s]))return!1;return!0}function qo(e,l,s,i,n,u){if(Li=u,sl=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,la.current=e===null||e.memoizedState===null?ef:lf,e=s(i,n),Qt){u=0;do{if(Qt=!1,Yt=0,25<=u)throw Error(o(301));u+=1,gl=cl=null,l.updateQueue=null,la.current=sf,e=s(i,n)}while(Qt)}if(la.current=na,l=cl!==null&&cl.next!==null,Li=0,gl=cl=sl=null,sa=!1,l)throw Error(o(300));return e}function Bo(){var e=Yt!==0;return Yt=0,e}function Ss(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gl===null?sl.memoizedState=gl=e:gl=gl.next=e,gl}function Ql(){if(cl===null){var e=sl.alternate;e=e!==null?e.memoizedState:null}else e=cl.next;var l=gl===null?sl.memoizedState:gl.next;if(l!==null)gl=l,cl=e;else{if(e===null)throw Error(o(310));cl=e,e={memoizedState:cl.memoizedState,baseState:cl.baseState,baseQueue:cl.baseQueue,queue:cl.queue,next:null},gl===null?sl.memoizedState=gl=e:gl=gl.next=e}return gl}function Xt(e,l){return typeof l=="function"?l(e):l}function Ao(e){var l=Ql(),s=l.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=e;var i=cl,n=i.baseQueue,u=s.pending;if(u!==null){if(n!==null){var d=n.next;n.next=u.next,u.next=d}i.baseQueue=n=u,s.pending=null}if(n!==null){u=n.next,i=i.baseState;var h=d=null,v=null,z=u;do{var N=z.lane;if((Li&N)===N)v!==null&&(v=v.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),i=z.hasEagerState?z.eagerState:e(i,z.action);else{var F={lane:N,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};v===null?(h=v=F,d=i):v=v.next=F,sl.lanes|=N,Gi|=N}z=z.next}while(z!==null&&z!==u);v===null?d=i:v.next=h,os(i,l.memoizedState)||(Ul=!0),l.memoizedState=i,l.baseState=d,l.baseQueue=v,s.lastRenderedState=i}if(e=s.interleaved,e!==null){n=e;do u=n.lane,sl.lanes|=u,Gi|=u,n=n.next;while(n!==e)}else n===null&&(s.lanes=0);return[l.memoizedState,s.dispatch]}function Mo(e){var l=Ql(),s=l.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=e;var i=s.dispatch,n=s.pending,u=l.memoizedState;if(n!==null){s.pending=null;var d=n=n.next;do u=e(u,d.action),d=d.next;while(d!==n);os(u,l.memoizedState)||(Ul=!0),l.memoizedState=u,l.baseQueue===null&&(l.baseState=u),s.lastRenderedState=u}return[u,i]}function sc(){}function ic(e,l){var s=sl,i=Ql(),n=l(),u=!os(i.memoizedState,n);if(u&&(i.memoizedState=n,Ul=!0),i=i.queue,Ho(ac.bind(null,s,i,e),[e]),i.getSnapshot!==l||u||gl!==null&&gl.memoizedState.tag&1){if(s.flags|=2048,Zt(9,nc.bind(null,s,i,n,l),void 0,null),fl===null)throw Error(o(349));(Li&30)!==0||tc(s,l,n)}return n}function tc(e,l,s){e.flags|=16384,e={getSnapshot:l,value:s},l=sl.updateQueue,l===null?(l={lastEffect:null,stores:null},sl.updateQueue=l,l.stores=[e]):(s=l.stores,s===null?l.stores=[e]:s.push(e))}function nc(e,l,s,i){l.value=s,l.getSnapshot=i,oc(l)&&uc(e)}function ac(e,l,s){return s(function(){oc(l)&&uc(e)})}function oc(e){var l=e.getSnapshot;e=e.value;try{var s=l();return!os(e,s)}catch{return!0}}function uc(e){var l=Ms(e,1);l!==null&&ds(l,e,1,-1)}function rc(e){var l=Ss();return typeof e=="function"&&(e=e()),l.memoizedState=l.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:e},l.queue=e,e=e.dispatch=Zg.bind(null,sl,e),[l.memoizedState,e]}function Zt(e,l,s,i){return e={tag:e,create:l,destroy:s,deps:i,next:null},l=sl.updateQueue,l===null?(l={lastEffect:null,stores:null},sl.updateQueue=l,l.lastEffect=e.next=e):(s=l.lastEffect,s===null?l.lastEffect=e.next=e:(i=s.next,s.next=e,e.next=i,l.lastEffect=e)),e}function cc(){return Ql().memoizedState}function ia(e,l,s,i){var n=Ss();sl.flags|=e,n.memoizedState=Zt(1|l,s,void 0,i===void 0?null:i)}function ta(e,l,s,i){var n=Ql();i=i===void 0?null:i;var u=void 0;if(cl!==null){var d=cl.memoizedState;if(u=d.destroy,i!==null&&Uo(i,d.deps)){n.memoizedState=Zt(l,s,u,i);return}}sl.flags|=e,n.memoizedState=Zt(1|l,s,u,i)}function pc(e,l){return ia(8390656,8,e,l)}function Ho(e,l){return ta(2048,8,e,l)}function dc(e,l){return ta(4,2,e,l)}function gc(e,l){return ta(4,4,e,l)}function fc(e,l){if(typeof l=="function")return e=e(),l(e),function(){l(null)};if(l!=null)return e=e(),l.current=e,function(){l.current=null}}function mc(e,l,s){return s=s!=null?s.concat([e]):null,ta(4,4,fc.bind(null,l,e),s)}function To(){}function hc(e,l){var s=Ql();l=l===void 0?null:l;var i=s.memoizedState;return i!==null&&l!==null&&Uo(l,i[1])?i[0]:(s.memoizedState=[e,l],e)}function _c(e,l){var s=Ql();l=l===void 0?null:l;var i=s.memoizedState;return i!==null&&l!==null&&Uo(l,i[1])?i[0]:(e=e(),s.memoizedState=[e,l],e)}function jc(e,l,s){return(Li&21)===0?(e.baseState&&(e.baseState=!1,Ul=!0),e.memoizedState=s):(os(s,l)||(s=bn(),sl.lanes|=s,Gi|=s,e.baseState=!0),l)}function Yg(e,l){var s=We;We=s!==0&&4>s?s:4,e(!0);var i=zo.transition;zo.transition={};try{e(!1),l()}finally{We=s,zo.transition=i}}function Sc(){return Ql().memoizedState}function Xg(e,l,s){var i=ri(e);if(s={lane:i,action:s,hasEagerState:!1,eagerState:null,next:null},vc(e))wc(l,s);else if(s=Yr(e,l,s,i),s!==null){var n=Ll();ds(s,e,i,n),xc(s,l,i)}}function Zg(e,l,s){var i=ri(e),n={lane:i,action:s,hasEagerState:!1,eagerState:null,next:null};if(vc(e))wc(l,n);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=l.lastRenderedReducer,u!==null))try{var d=l.lastRenderedState,h=u(d,s);if(n.hasEagerState=!0,n.eagerState=h,os(h,d)){var v=l.interleaved;v===null?(n.next=n,Co(l)):(n.next=v.next,v.next=n),l.interleaved=n;return}}catch{}finally{}s=Yr(e,l,n,i),s!==null&&(n=Ll(),ds(s,e,i,n),xc(s,l,i))}}function vc(e){var l=e.alternate;return e===sl||l!==null&&l===sl}function wc(e,l){Qt=sa=!0;var s=e.pending;s===null?l.next=l:(l.next=s.next,s.next=l),e.pending=l}function xc(e,l,s){if((s&4194240)!==0){var i=l.lanes;i&=e.pendingLanes,s|=i,l.lanes=s,Ra(e,s)}}var na={readContext:Kl,useCallback:xl,useContext:xl,useEffect:xl,useImperativeHandle:xl,useInsertionEffect:xl,useLayoutEffect:xl,useMemo:xl,useReducer:xl,useRef:xl,useState:xl,useDebugValue:xl,useDeferredValue:xl,useTransition:xl,useMutableSource:xl,useSyncExternalStore:xl,useId:xl,unstable_isNewReconciler:!1},ef={readContext:Kl,useCallback:function(e,l){return Ss().memoizedState=[e,l===void 0?null:l],e},useContext:Kl,useEffect:pc,useImperativeHandle:function(e,l,s){return s=s!=null?s.concat([e]):null,ia(4194308,4,fc.bind(null,l,e),s)},useLayoutEffect:function(e,l){return ia(4194308,4,e,l)},useInsertionEffect:function(e,l){return ia(4,2,e,l)},useMemo:function(e,l){var s=Ss();return l=l===void 0?null:l,e=e(),s.memoizedState=[e,l],e},useReducer:function(e,l,s){var i=Ss();return l=s!==void 0?s(l):l,i.memoizedState=i.baseState=l,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=Xg.bind(null,sl,e),[i.memoizedState,e]},useRef:function(e){var l=Ss();return e={current:e},l.memoizedState=e},useState:rc,useDebugValue:To,useDeferredValue:function(e){return Ss().memoizedState=e},useTransition:function(){var e=rc(!1),l=e[0];return e=Yg.bind(null,e[1]),Ss().memoizedState=e,[l,e]},useMutableSource:function(){},useSyncExternalStore:function(e,l,s){var i=sl,n=Ss();if(Ze){if(s===void 0)throw Error(o(407));s=s()}else{if(s=l(),fl===null)throw Error(o(349));(Li&30)!==0||tc(i,l,s)}n.memoizedState=s;var u={value:s,getSnapshot:l};return n.queue=u,pc(ac.bind(null,i,u,e),[e]),i.flags|=2048,Zt(9,nc.bind(null,i,u,s,l),void 0,null),s},useId:function(){var e=Ss(),l=fl.identifierPrefix;if(Ze){var s=As,i=Bs;s=(i&~(1<<32-Sl(i)-1)).toString(32)+s,l=":"+l+"R"+s,s=Yt++,0<s&&(l+="H"+s.toString(32)),l+=":"}else s=Qg++,l=":"+l+"r"+s.toString(32)+":";return e.memoizedState=l},unstable_isNewReconciler:!1},lf={readContext:Kl,useCallback:hc,useContext:Kl,useEffect:Ho,useImperativeHandle:mc,useInsertionEffect:dc,useLayoutEffect:gc,useMemo:_c,useReducer:Ao,useRef:cc,useState:function(){return Ao(Xt)},useDebugValue:To,useDeferredValue:function(e){var l=Ql();return jc(l,cl.memoizedState,e)},useTransition:function(){var e=Ao(Xt)[0],l=Ql().memoizedState;return[e,l]},useMutableSource:sc,useSyncExternalStore:ic,useId:Sc,unstable_isNewReconciler:!1},sf={readContext:Kl,useCallback:hc,useContext:Kl,useEffect:Ho,useImperativeHandle:mc,useInsertionEffect:dc,useLayoutEffect:gc,useMemo:_c,useReducer:Mo,useRef:cc,useState:function(){return Mo(Xt)},useDebugValue:To,useDeferredValue:function(e){var l=Ql();return cl===null?l.memoizedState=e:jc(l,cl.memoizedState,e)},useTransition:function(){var e=Mo(Xt)[0],l=Ql().memoizedState;return[e,l]},useMutableSource:sc,useSyncExternalStore:ic,useId:Sc,unstable_isNewReconciler:!1};function rs(e,l){if(e&&e.defaultProps){l=K({},l),e=e.defaultProps;for(var s in e)l[s]===void 0&&(l[s]=e[s]);return l}return l}function Ro(e,l,s,i){l=e.memoizedState,s=s(i,l),s=s==null?l:K({},l,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var aa={isMounted:function(e){return(e=e._reactInternals)?Y(e)===e:!1},enqueueSetState:function(e,l,s){e=e._reactInternals;var i=Ll(),n=ri(e),u=Hs(i,n);u.payload=l,s!=null&&(u.callback=s),l=ni(e,u,n),l!==null&&(ds(l,e,n,i),Xn(l,e,n))},enqueueReplaceState:function(e,l,s){e=e._reactInternals;var i=Ll(),n=ri(e),u=Hs(i,n);u.tag=1,u.payload=l,s!=null&&(u.callback=s),l=ni(e,u,n),l!==null&&(ds(l,e,n,i),Xn(l,e,n))},enqueueForceUpdate:function(e,l){e=e._reactInternals;var s=Ll(),i=ri(e),n=Hs(s,i);n.tag=2,l!=null&&(n.callback=l),l=ni(e,n,i),l!==null&&(ds(l,e,i,s),Xn(l,e,i))}};function yc(e,l,s,i,n,u,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,u,d):l.prototype&&l.prototype.isPureReactComponent?!Ht(s,i)||!Ht(n,u):!0}function Ec(e,l,s){var i=!1,n=si,u=l.contextType;return typeof u=="object"&&u!==null?u=Kl(u):(n=zl(l)?Ei:wl.current,i=l.contextTypes,u=(i=i!=null)?nt(e,n):si),l=new l(s,u),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=aa,e.stateNode=l,l._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=u),l}function kc(e,l,s,i){e=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(s,i),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(s,i),l.state!==e&&aa.enqueueReplaceState(l,l.state,null)}function Oo(e,l,s,i){var n=e.stateNode;n.props=s,n.state=e.memoizedState,n.refs={},Io(e);var u=l.contextType;typeof u=="object"&&u!==null?n.context=Kl(u):(u=zl(l)?Ei:wl.current,n.context=nt(e,u)),n.state=e.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(Ro(e,l,u,s),n.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(l=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),l!==n.state&&aa.enqueueReplaceState(n,n.state,null),Zn(e,s,n,i),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308)}function gt(e,l){try{var s="",i=l;do s+=xe(i),i=i.return;while(i);var n=s}catch(u){n=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:l,stack:n,digest:null}}function No(e,l,s){return{value:e,source:null,stack:s??null,digest:l??null}}function Fo(e,l){try{console.error(l.value)}catch(s){setTimeout(function(){throw s})}}var tf=typeof WeakMap=="function"?WeakMap:Map;function bc(e,l,s){s=Hs(-1,s),s.tag=3,s.payload={element:null};var i=l.value;return s.callback=function(){ga||(ga=!0,nu=i),Fo(e,l)},s}function Cc(e,l,s){s=Hs(-1,s),s.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var n=l.value;s.payload=function(){return i(n)},s.callback=function(){Fo(e,l)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(s.callback=function(){Fo(e,l),typeof i!="function"&&(oi===null?oi=new Set([this]):oi.add(this));var d=l.stack;this.componentDidCatch(l.value,{componentStack:d!==null?d:""})}),s}function Ic(e,l,s){var i=e.pingCache;if(i===null){i=e.pingCache=new tf;var n=new Set;i.set(l,n)}else n=i.get(l),n===void 0&&(n=new Set,i.set(l,n));n.has(s)||(n.add(s),e=jf.bind(null,e,l,s),l.then(e,e))}function Lc(e){do{var l;if((l=e.tag===13)&&(l=e.memoizedState,l=l!==null?l.dehydrated!==null:!0),l)return e;e=e.return}while(e!==null);return null}function Gc(e,l,s,i,n){return(e.mode&1)===0?(e===l?e.flags|=65536:(e.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(l=Hs(-1,1),l.tag=2,ni(s,l,1))),s.lanes|=1),e):(e.flags|=65536,e.lanes=n,e)}var nf=pe.ReactCurrentOwner,Ul=!1;function Il(e,l,s,i){l.child=e===null?Qr(l,null,s,i):rt(l,e.child,s,i)}function Pc(e,l,s,i,n){s=s.render;var u=l.ref;return pt(l,n),i=qo(e,l,s,i,u,n),s=Bo(),e!==null&&!Ul?(l.updateQueue=e.updateQueue,l.flags&=-2053,e.lanes&=~n,Ts(e,l,n)):(Ze&&s&&jo(l),l.flags|=1,Il(e,l,i,n),l.child)}function Jc(e,l,s,i,n){if(e===null){var u=s.type;return typeof u=="function"&&!du(u)&&u.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(l.tag=15,l.type=u,zc(e,l,u,i,n)):(e=Sa(s.type,null,i,l,l.mode,n),e.ref=l.ref,e.return=l,l.child=e)}if(u=e.child,(e.lanes&n)===0){var d=u.memoizedProps;if(s=s.compare,s=s!==null?s:Ht,s(d,i)&&e.ref===l.ref)return Ts(e,l,n)}return l.flags|=1,e=pi(u,i),e.ref=l.ref,e.return=l,l.child=e}function zc(e,l,s,i,n){if(e!==null){var u=e.memoizedProps;if(Ht(u,i)&&e.ref===l.ref)if(Ul=!1,l.pendingProps=i=u,(e.lanes&n)!==0)(e.flags&131072)!==0&&(Ul=!0);else return l.lanes=e.lanes,Ts(e,l,n)}return Do(e,l,s,i,n)}function Uc(e,l,s){var i=l.pendingProps,n=i.children,u=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((l.mode&1)===0)l.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(mt,Fl),Fl|=s;else{if((s&1073741824)===0)return e=u!==null?u.baseLanes|s:s,l.lanes=l.childLanes=1073741824,l.memoizedState={baseLanes:e,cachePool:null,transitions:null},l.updateQueue=null,Ke(mt,Fl),Fl|=e,null;l.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=u!==null?u.baseLanes:s,Ke(mt,Fl),Fl|=i}else u!==null?(i=u.baseLanes|s,l.memoizedState=null):i=s,Ke(mt,Fl),Fl|=i;return Il(e,l,n,s),l.child}function qc(e,l){var s=l.ref;(e===null&&s!==null||e!==null&&e.ref!==s)&&(l.flags|=512,l.flags|=2097152)}function Do(e,l,s,i,n){var u=zl(s)?Ei:wl.current;return u=nt(l,u),pt(l,n),s=qo(e,l,s,i,u,n),i=Bo(),e!==null&&!Ul?(l.updateQueue=e.updateQueue,l.flags&=-2053,e.lanes&=~n,Ts(e,l,n)):(Ze&&i&&jo(l),l.flags|=1,Il(e,l,s,n),l.child)}function Bc(e,l,s,i,n){if(zl(s)){var u=!0;Fn(l)}else u=!1;if(pt(l,n),l.stateNode===null)ua(e,l),Ec(l,s,i),Oo(l,s,i,n),i=!0;else if(e===null){var d=l.stateNode,h=l.memoizedProps;d.props=h;var v=d.context,z=s.contextType;typeof z=="object"&&z!==null?z=Kl(z):(z=zl(s)?Ei:wl.current,z=nt(l,z));var N=s.getDerivedStateFromProps,F=typeof N=="function"||typeof d.getSnapshotBeforeUpdate=="function";F||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==i||v!==z)&&kc(l,d,i,z),ti=!1;var R=l.memoizedState;d.state=R,Zn(l,i,d,n),v=l.memoizedState,h!==i||R!==v||Jl.current||ti?(typeof N=="function"&&(Ro(l,s,N,i),v=l.memoizedState),(h=ti||yc(l,s,h,i,R,v,z))?(F||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(l.flags|=4194308)):(typeof d.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=i,l.memoizedState=v),d.props=i,d.state=v,d.context=z,i=h):(typeof d.componentDidMount=="function"&&(l.flags|=4194308),i=!1)}else{d=l.stateNode,Xr(e,l),h=l.memoizedProps,z=l.type===l.elementType?h:rs(l.type,h),d.props=z,F=l.pendingProps,R=d.context,v=s.contextType,typeof v=="object"&&v!==null?v=Kl(v):(v=zl(s)?Ei:wl.current,v=nt(l,v));var Z=s.getDerivedStateFromProps;(N=typeof Z=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==F||R!==v)&&kc(l,d,i,v),ti=!1,R=l.memoizedState,d.state=R,Zn(l,i,d,n);var se=l.memoizedState;h!==F||R!==se||Jl.current||ti?(typeof Z=="function"&&(Ro(l,s,Z,i),se=l.memoizedState),(z=ti||yc(l,s,z,i,R,se,v)||!1)?(N||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(i,se,v),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(i,se,v)),typeof d.componentDidUpdate=="function"&&(l.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof d.componentDidUpdate!="function"||h===e.memoizedProps&&R===e.memoizedState||(l.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&R===e.memoizedState||(l.flags|=1024),l.memoizedProps=i,l.memoizedState=se),d.props=i,d.state=se,d.context=v,i=z):(typeof d.componentDidUpdate!="function"||h===e.memoizedProps&&R===e.memoizedState||(l.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&R===e.memoizedState||(l.flags|=1024),i=!1)}return Wo(e,l,s,i,u,n)}function Wo(e,l,s,i,n,u){qc(e,l);var d=(l.flags&128)!==0;if(!i&&!d)return n&&Rr(l,s,!1),Ts(e,l,u);i=l.stateNode,nf.current=l;var h=d&&typeof s.getDerivedStateFromError!="function"?null:i.render();return l.flags|=1,e!==null&&d?(l.child=rt(l,e.child,null,u),l.child=rt(l,null,h,u)):Il(e,l,h,u),l.memoizedState=i.state,n&&Rr(l,s,!0),l.child}function Ac(e){var l=e.stateNode;l.pendingContext?Hr(e,l.pendingContext,l.pendingContext!==l.context):l.context&&Hr(e,l.context,!1),Lo(e,l.containerInfo)}function Mc(e,l,s,i,n){return ut(),xo(n),l.flags|=256,Il(e,l,s,i),l.child}var $o={dehydrated:null,treeContext:null,retryLane:0};function Vo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hc(e,l,s){var i=l.pendingProps,n=ll.current,u=!1,d=(l.flags&128)!==0,h;if((h=d)||(h=e!==null&&e.memoizedState===null?!1:(n&2)!==0),h?(u=!0,l.flags&=-129):(e===null||e.memoizedState!==null)&&(n|=1),Ke(ll,n&1),e===null)return wo(l),e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((l.mode&1)===0?l.lanes=1:e.data==="$!"?l.lanes=8:l.lanes=1073741824,null):(d=i.children,e=i.fallback,u?(i=l.mode,u=l.child,d={mode:"hidden",children:d},(i&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=d):u=va(d,i,0,null),e=Ui(e,i,s,null),u.return=l,e.return=l,u.sibling=e,l.child=u,l.child.memoizedState=Vo(s),l.memoizedState=$o,e):Ko(l,d));if(n=e.memoizedState,n!==null&&(h=n.dehydrated,h!==null))return af(e,l,d,i,h,n,s);if(u){u=i.fallback,d=l.mode,n=e.child,h=n.sibling;var v={mode:"hidden",children:i.children};return(d&1)===0&&l.child!==n?(i=l.child,i.childLanes=0,i.pendingProps=v,l.deletions=null):(i=pi(n,v),i.subtreeFlags=n.subtreeFlags&14680064),h!==null?u=pi(h,u):(u=Ui(u,d,s,null),u.flags|=2),u.return=l,i.return=l,i.sibling=u,l.child=i,i=u,u=l.child,d=e.child.memoizedState,d=d===null?Vo(s):{baseLanes:d.baseLanes|s,cachePool:null,transitions:d.transitions},u.memoizedState=d,u.childLanes=e.childLanes&~s,l.memoizedState=$o,i}return u=e.child,e=u.sibling,i=pi(u,{mode:"visible",children:i.children}),(l.mode&1)===0&&(i.lanes=s),i.return=l,i.sibling=null,e!==null&&(s=l.deletions,s===null?(l.deletions=[e],l.flags|=16):s.push(e)),l.child=i,l.memoizedState=null,i}function Ko(e,l){return l=va({mode:"visible",children:l},e.mode,0,null),l.return=e,e.child=l}function oa(e,l,s,i){return i!==null&&xo(i),rt(l,e.child,null,s),e=Ko(l,l.pendingProps.children),e.flags|=2,l.memoizedState=null,e}function af(e,l,s,i,n,u,d){if(s)return l.flags&256?(l.flags&=-257,i=No(Error(o(422))),oa(e,l,d,i)):l.memoizedState!==null?(l.child=e.child,l.flags|=128,null):(u=i.fallback,n=l.mode,i=va({mode:"visible",children:i.children},n,0,null),u=Ui(u,n,d,null),u.flags|=2,i.return=l,u.return=l,i.sibling=u,l.child=i,(l.mode&1)!==0&&rt(l,e.child,null,d),l.child.memoizedState=Vo(d),l.memoizedState=$o,u);if((l.mode&1)===0)return oa(e,l,d,null);if(n.data==="$!"){if(i=n.nextSibling&&n.nextSibling.dataset,i)var h=i.dgst;return i=h,u=Error(o(419)),i=No(u,i,void 0),oa(e,l,d,i)}if(h=(d&e.childLanes)!==0,Ul||h){if(i=fl,i!==null){switch(d&-d){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=(n&(i.suspendedLanes|d))!==0?0:n,n!==0&&n!==u.retryLane&&(u.retryLane=n,Ms(e,n),ds(i,e,n,-1))}return pu(),i=No(Error(o(421))),oa(e,l,d,i)}return n.data==="$?"?(l.flags|=128,l.child=e.child,l=Sf.bind(null,e),n._reactRetry=l,null):(e=u.treeContext,Nl=ei(n.nextSibling),Ol=l,Ze=!0,us=null,e!==null&&($l[Vl++]=Bs,$l[Vl++]=As,$l[Vl++]=ki,Bs=e.id,As=e.overflow,ki=l),l=Ko(l,i.children),l.flags|=4096,l)}function Tc(e,l,s){e.lanes|=l;var i=e.alternate;i!==null&&(i.lanes|=l),bo(e.return,l,s)}function Qo(e,l,s,i,n){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:i,tail:s,tailMode:n}:(u.isBackwards=l,u.rendering=null,u.renderingStartTime=0,u.last=i,u.tail=s,u.tailMode=n)}function Rc(e,l,s){var i=l.pendingProps,n=i.revealOrder,u=i.tail;if(Il(e,l,i.children,s),i=ll.current,(i&2)!==0)i=i&1|2,l.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=l.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tc(e,s,l);else if(e.tag===19)Tc(e,s,l);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===l)break e;for(;e.sibling===null;){if(e.return===null||e.return===l)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(Ke(ll,i),(l.mode&1)===0)l.memoizedState=null;else switch(n){case"forwards":for(s=l.child,n=null;s!==null;)e=s.alternate,e!==null&&ea(e)===null&&(n=s),s=s.sibling;s=n,s===null?(n=l.child,l.child=null):(n=s.sibling,s.sibling=null),Qo(l,!1,n,s,u);break;case"backwards":for(s=null,n=l.child,l.child=null;n!==null;){if(e=n.alternate,e!==null&&ea(e)===null){l.child=n;break}e=n.sibling,n.sibling=s,s=n,n=e}Qo(l,!0,s,null,u);break;case"together":Qo(l,!1,null,null,void 0);break;default:l.memoizedState=null}return l.child}function ua(e,l){(l.mode&1)===0&&e!==null&&(e.alternate=null,l.alternate=null,l.flags|=2)}function Ts(e,l,s){if(e!==null&&(l.dependencies=e.dependencies),Gi|=l.lanes,(s&l.childLanes)===0)return null;if(e!==null&&l.child!==e.child)throw Error(o(153));if(l.child!==null){for(e=l.child,s=pi(e,e.pendingProps),l.child=s,s.return=l;e.sibling!==null;)e=e.sibling,s=s.sibling=pi(e,e.pendingProps),s.return=l;s.sibling=null}return l.child}function of(e,l,s){switch(l.tag){case 3:Ac(l),ut();break;case 5:lc(l);break;case 1:zl(l.type)&&Fn(l);break;case 4:Lo(l,l.stateNode.containerInfo);break;case 10:var i=l.type._context,n=l.memoizedProps.value;Ke(Qn,i._currentValue),i._currentValue=n;break;case 13:if(i=l.memoizedState,i!==null)return i.dehydrated!==null?(Ke(ll,ll.current&1),l.flags|=128,null):(s&l.child.childLanes)!==0?Hc(e,l,s):(Ke(ll,ll.current&1),e=Ts(e,l,s),e!==null?e.sibling:null);Ke(ll,ll.current&1);break;case 19:if(i=(s&l.childLanes)!==0,(e.flags&128)!==0){if(i)return Rc(e,l,s);l.flags|=128}if(n=l.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Ke(ll,ll.current),i)break;return null;case 22:case 23:return l.lanes=0,Uc(e,l,s)}return Ts(e,l,s)}var Oc,Yo,Nc,Fc;Oc=function(e,l){for(var s=l.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===l)break;for(;s.sibling===null;){if(s.return===null||s.return===l)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Yo=function(){},Nc=function(e,l,s,i){var n=e.memoizedProps;if(n!==i){e=l.stateNode,Ii(js.current);var u=null;switch(s){case"input":n=Wl(e,n),i=Wl(e,i),u=[];break;case"select":n=K({},n,{value:void 0}),i=K({},i,{value:void 0}),u=[];break;case"textarea":n=vi(e,n),i=vi(e,i),u=[];break;default:typeof n.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Rn)}Oi(s,i);var d;s=null;for(z in n)if(!i.hasOwnProperty(z)&&n.hasOwnProperty(z)&&n[z]!=null)if(z==="style"){var h=n[z];for(d in h)h.hasOwnProperty(d)&&(s||(s={}),s[d]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(c.hasOwnProperty(z)?u||(u=[]):(u=u||[]).push(z,null));for(z in i){var v=i[z];if(h=n!=null?n[z]:void 0,i.hasOwnProperty(z)&&v!==h&&(v!=null||h!=null))if(z==="style")if(h){for(d in h)!h.hasOwnProperty(d)||v&&v.hasOwnProperty(d)||(s||(s={}),s[d]="");for(d in v)v.hasOwnProperty(d)&&h[d]!==v[d]&&(s||(s={}),s[d]=v[d])}else s||(u||(u=[]),u.push(z,s)),s=v;else z==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,h=h?h.__html:void 0,v!=null&&h!==v&&(u=u||[]).push(z,v)):z==="children"?typeof v!="string"&&typeof v!="number"||(u=u||[]).push(z,""+v):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(c.hasOwnProperty(z)?(v!=null&&z==="onScroll"&&Ye("scroll",e),u||h===v||(u=[])):(u=u||[]).push(z,v))}s&&(u=u||[]).push("style",s);var z=u;(l.updateQueue=z)&&(l.flags|=4)}},Fc=function(e,l,s,i){s!==i&&(l.flags|=4)};function en(e,l){if(!Ze)switch(e.tailMode){case"hidden":l=e.tail;for(var s=null;l!==null;)l.alternate!==null&&(s=l),l=l.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var i=null;s!==null;)s.alternate!==null&&(i=s),s=s.sibling;i===null?l||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function yl(e){var l=e.alternate!==null&&e.alternate.child===e.child,s=0,i=0;if(l)for(var n=e.child;n!==null;)s|=n.lanes|n.childLanes,i|=n.subtreeFlags&14680064,i|=n.flags&14680064,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)s|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=i,e.childLanes=s,l}function uf(e,l,s){var i=l.pendingProps;switch(So(l),l.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yl(l),null;case 1:return zl(l.type)&&Nn(),yl(l),null;case 3:return i=l.stateNode,dt(),Xe(Jl),Xe(wl),Jo(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Vn(l)?l.flags|=4:e===null||e.memoizedState.isDehydrated&&(l.flags&256)===0||(l.flags|=1024,us!==null&&(uu(us),us=null))),Yo(e,l),yl(l),null;case 5:Go(l);var n=Ii(Kt.current);if(s=l.type,e!==null&&l.stateNode!=null)Nc(e,l,s,i,n),e.ref!==l.ref&&(l.flags|=512,l.flags|=2097152);else{if(!i){if(l.stateNode===null)throw Error(o(166));return yl(l),null}if(e=Ii(js.current),Vn(l)){i=l.stateNode,s=l.type;var u=l.memoizedProps;switch(i[_s]=l,i[Ft]=u,e=(l.mode&1)!==0,s){case"dialog":Ye("cancel",i),Ye("close",i);break;case"iframe":case"object":case"embed":Ye("load",i);break;case"video":case"audio":for(n=0;n<Rt.length;n++)Ye(Rt[n],i);break;case"source":Ye("error",i);break;case"img":case"image":case"link":Ye("error",i),Ye("load",i);break;case"details":Ye("toggle",i);break;case"input":Os(i,u),Ye("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!u.multiple},Ye("invalid",i);break;case"textarea":Hi(i,u),Ye("invalid",i)}Oi(s,u),n=null;for(var d in u)if(u.hasOwnProperty(d)){var h=u[d];d==="children"?typeof h=="string"?i.textContent!==h&&(u.suppressHydrationWarning!==!0&&Tn(i.textContent,h,e),n=["children",h]):typeof h=="number"&&i.textContent!==""+h&&(u.suppressHydrationWarning!==!0&&Tn(i.textContent,h,e),n=["children",""+h]):c.hasOwnProperty(d)&&h!=null&&d==="onScroll"&&Ye("scroll",i)}switch(s){case"input":Ls(i),Gl(i,u,!0);break;case"textarea":Ls(i),$(i);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(i.onclick=Rn)}i=n,l.updateQueue=i,i!==null&&(l.flags|=4)}else{d=n.nodeType===9?n:n.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=he(s)),e==="http://www.w3.org/1999/xhtml"?s==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=d.createElement(s,{is:i.is}):(e=d.createElement(s),s==="select"&&(d=e,i.multiple?d.multiple=!0:i.size&&(d.size=i.size))):e=d.createElementNS(e,s),e[_s]=l,e[Ft]=i,Oc(e,l,!1,!1),l.stateNode=e;e:{switch(d=Ni(s,i),s){case"dialog":Ye("cancel",e),Ye("close",e),n=i;break;case"iframe":case"object":case"embed":Ye("load",e),n=i;break;case"video":case"audio":for(n=0;n<Rt.length;n++)Ye(Rt[n],e);n=i;break;case"source":Ye("error",e),n=i;break;case"img":case"image":case"link":Ye("error",e),Ye("load",e),n=i;break;case"details":Ye("toggle",e),n=i;break;case"input":Os(e,i),n=Wl(e,i),Ye("invalid",e);break;case"option":n=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},n=K({},i,{value:void 0}),Ye("invalid",e);break;case"textarea":Hi(e,i),n=vi(e,i),Ye("invalid",e);break;default:n=i}Oi(s,n),h=n;for(u in h)if(h.hasOwnProperty(u)){var v=h[u];u==="style"?Ri(e,v):u==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,v!=null&&Oe(e,v)):u==="children"?typeof v=="string"?(s!=="textarea"||v!=="")&&il(e,v):typeof v=="number"&&il(e,""+v):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(c.hasOwnProperty(u)?v!=null&&u==="onScroll"&&Ye("scroll",e):v!=null&&X(e,u,v,d))}switch(s){case"input":Ls(e),Gl(e,i,!1);break;case"textarea":Ls(e),$(e);break;case"option":i.value!=null&&e.setAttribute("value",""+Be(i.value));break;case"select":e.multiple=!!i.multiple,u=i.value,u!=null?ms(e,!!i.multiple,u,!1):i.defaultValue!=null&&ms(e,!!i.multiple,i.defaultValue,!0);break;default:typeof n.onClick=="function"&&(e.onclick=Rn)}switch(s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(l.flags|=4)}l.ref!==null&&(l.flags|=512,l.flags|=2097152)}return yl(l),null;case 6:if(e&&l.stateNode!=null)Fc(e,l,e.memoizedProps,i);else{if(typeof i!="string"&&l.stateNode===null)throw Error(o(166));if(s=Ii(Kt.current),Ii(js.current),Vn(l)){if(i=l.stateNode,s=l.memoizedProps,i[_s]=l,(u=i.nodeValue!==s)&&(e=Ol,e!==null))switch(e.tag){case 3:Tn(i.nodeValue,s,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Tn(i.nodeValue,s,(e.mode&1)!==0)}u&&(l.flags|=4)}else i=(s.nodeType===9?s:s.ownerDocument).createTextNode(i),i[_s]=l,l.stateNode=i}return yl(l),null;case 13:if(Xe(ll),i=l.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ze&&Nl!==null&&(l.mode&1)!==0&&(l.flags&128)===0)$r(),ut(),l.flags|=98560,u=!1;else if(u=Vn(l),i!==null&&i.dehydrated!==null){if(e===null){if(!u)throw Error(o(318));if(u=l.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[_s]=l}else ut(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;yl(l),u=!1}else us!==null&&(uu(us),us=null),u=!0;if(!u)return l.flags&65536?l:null}return(l.flags&128)!==0?(l.lanes=s,l):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(l.child.flags|=8192,(l.mode&1)!==0&&(e===null||(ll.current&1)!==0?pl===0&&(pl=3):pu())),l.updateQueue!==null&&(l.flags|=4),yl(l),null);case 4:return dt(),Yo(e,l),e===null&&Ot(l.stateNode.containerInfo),yl(l),null;case 10:return ko(l.type._context),yl(l),null;case 17:return zl(l.type)&&Nn(),yl(l),null;case 19:if(Xe(ll),u=l.memoizedState,u===null)return yl(l),null;if(i=(l.flags&128)!==0,d=u.rendering,d===null)if(i)en(u,!1);else{if(pl!==0||e!==null&&(e.flags&128)!==0)for(e=l.child;e!==null;){if(d=ea(e),d!==null){for(l.flags|=128,en(u,!1),i=d.updateQueue,i!==null&&(l.updateQueue=i,l.flags|=4),l.subtreeFlags=0,i=s,s=l.child;s!==null;)u=s,e=i,u.flags&=14680066,d=u.alternate,d===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=d.childLanes,u.lanes=d.lanes,u.child=d.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=d.memoizedProps,u.memoizedState=d.memoizedState,u.updateQueue=d.updateQueue,u.type=d.type,e=d.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),s=s.sibling;return Ke(ll,ll.current&1|2),l.child}e=e.sibling}u.tail!==null&&Ae()>ht&&(l.flags|=128,i=!0,en(u,!1),l.lanes=4194304)}else{if(!i)if(e=ea(d),e!==null){if(l.flags|=128,i=!0,s=e.updateQueue,s!==null&&(l.updateQueue=s,l.flags|=4),en(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Ze)return yl(l),null}else 2*Ae()-u.renderingStartTime>ht&&s!==1073741824&&(l.flags|=128,i=!0,en(u,!1),l.lanes=4194304);u.isBackwards?(d.sibling=l.child,l.child=d):(s=u.last,s!==null?s.sibling=d:l.child=d,u.last=d)}return u.tail!==null?(l=u.tail,u.rendering=l,u.tail=l.sibling,u.renderingStartTime=Ae(),l.sibling=null,s=ll.current,Ke(ll,i?s&1|2:s&1),l):(yl(l),null);case 22:case 23:return cu(),i=l.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(l.flags|=8192),i&&(l.mode&1)!==0?(Fl&1073741824)!==0&&(yl(l),l.subtreeFlags&6&&(l.flags|=8192)):yl(l),null;case 24:return null;case 25:return null}throw Error(o(156,l.tag))}function rf(e,l){switch(So(l),l.tag){case 1:return zl(l.type)&&Nn(),e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 3:return dt(),Xe(Jl),Xe(wl),Jo(),e=l.flags,(e&65536)!==0&&(e&128)===0?(l.flags=e&-65537|128,l):null;case 5:return Go(l),null;case 13:if(Xe(ll),e=l.memoizedState,e!==null&&e.dehydrated!==null){if(l.alternate===null)throw Error(o(340));ut()}return e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 19:return Xe(ll),null;case 4:return dt(),null;case 10:return ko(l.type._context),null;case 22:case 23:return cu(),null;case 24:return null;default:return null}}var ra=!1,El=!1,cf=typeof WeakSet=="function"?WeakSet:Set,ee=null;function ft(e,l){var s=e.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(i){tl(e,l,i)}else s.current=null}function Xo(e,l,s){try{s()}catch(i){tl(e,l,i)}}var Dc=!1;function pf(e,l){if(ro=Ln,e=yr(),lo(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var i=s.getSelection&&s.getSelection();if(i&&i.rangeCount!==0){s=i.anchorNode;var n=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{s.nodeType,u.nodeType}catch{s=null;break e}var d=0,h=-1,v=-1,z=0,N=0,F=e,R=null;l:for(;;){for(var Z;F!==s||n!==0&&F.nodeType!==3||(h=d+n),F!==u||i!==0&&F.nodeType!==3||(v=d+i),F.nodeType===3&&(d+=F.nodeValue.length),(Z=F.firstChild)!==null;)R=F,F=Z;for(;;){if(F===e)break l;if(R===s&&++z===n&&(h=d),R===u&&++N===i&&(v=d),(Z=F.nextSibling)!==null)break;F=R,R=F.parentNode}F=Z}s=h===-1||v===-1?null:{start:h,end:v}}else s=null}s=s||{start:0,end:0}}else s=null;for(co={focusedElem:e,selectionRange:s},Ln=!1,ee=l;ee!==null;)if(l=ee,e=l.child,(l.subtreeFlags&1028)!==0&&e!==null)e.return=l,ee=e;else for(;ee!==null;){l=ee;try{var se=l.alternate;if((l.flags&1024)!==0)switch(l.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var te=se.memoizedProps,al=se.memoizedState,I=l.stateNode,E=I.getSnapshotBeforeUpdate(l.elementType===l.type?te:rs(l.type,te),al);I.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var P=l.stateNode.containerInfo;P.nodeType===1?P.textContent="":P.nodeType===9&&P.documentElement&&P.removeChild(P.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(W){tl(l,l.return,W)}if(e=l.sibling,e!==null){e.return=l.return,ee=e;break}ee=l.return}return se=Dc,Dc=!1,se}function ln(e,l,s){var i=l.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var n=i=i.next;do{if((n.tag&e)===e){var u=n.destroy;n.destroy=void 0,u!==void 0&&Xo(l,s,u)}n=n.next}while(n!==i)}}function ca(e,l){if(l=l.updateQueue,l=l!==null?l.lastEffect:null,l!==null){var s=l=l.next;do{if((s.tag&e)===e){var i=s.create;s.destroy=i()}s=s.next}while(s!==l)}}function Zo(e){var l=e.ref;if(l!==null){var s=e.stateNode;switch(e.tag){case 5:e=s;break;default:e=s}typeof l=="function"?l(e):l.current=e}}function Wc(e){var l=e.alternate;l!==null&&(e.alternate=null,Wc(l)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(l=e.stateNode,l!==null&&(delete l[_s],delete l[Ft],delete l[mo],delete l[Wg],delete l[$g])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $c(e){return e.tag===5||e.tag===3||e.tag===4}function Vc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function eu(e,l,s){var i=e.tag;if(i===5||i===6)e=e.stateNode,l?s.nodeType===8?s.parentNode.insertBefore(e,l):s.insertBefore(e,l):(s.nodeType===8?(l=s.parentNode,l.insertBefore(e,s)):(l=s,l.appendChild(e)),s=s._reactRootContainer,s!=null||l.onclick!==null||(l.onclick=Rn));else if(i!==4&&(e=e.child,e!==null))for(eu(e,l,s),e=e.sibling;e!==null;)eu(e,l,s),e=e.sibling}function lu(e,l,s){var i=e.tag;if(i===5||i===6)e=e.stateNode,l?s.insertBefore(e,l):s.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(lu(e,l,s),e=e.sibling;e!==null;)lu(e,l,s),e=e.sibling}var hl=null,cs=!1;function ai(e,l,s){for(s=s.child;s!==null;)Kc(e,l,s),s=s.sibling}function Kc(e,l,s){if(rl&&typeof rl.onCommitFiberUnmount=="function")try{rl.onCommitFiberUnmount(Ds,s)}catch{}switch(s.tag){case 5:El||ft(s,l);case 6:var i=hl,n=cs;hl=null,ai(e,l,s),hl=i,cs=n,hl!==null&&(cs?(e=hl,s=s.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)):hl.removeChild(s.stateNode));break;case 18:hl!==null&&(cs?(e=hl,s=s.stateNode,e.nodeType===8?fo(e.parentNode,s):e.nodeType===1&&fo(e,s),zt(e)):fo(hl,s.stateNode));break;case 4:i=hl,n=cs,hl=s.stateNode.containerInfo,cs=!0,ai(e,l,s),hl=i,cs=n;break;case 0:case 11:case 14:case 15:if(!El&&(i=s.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){n=i=i.next;do{var u=n,d=u.destroy;u=u.tag,d!==void 0&&((u&2)!==0||(u&4)!==0)&&Xo(s,l,d),n=n.next}while(n!==i)}ai(e,l,s);break;case 1:if(!El&&(ft(s,l),i=s.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=s.memoizedProps,i.state=s.memoizedState,i.componentWillUnmount()}catch(h){tl(s,l,h)}ai(e,l,s);break;case 21:ai(e,l,s);break;case 22:s.mode&1?(El=(i=El)||s.memoizedState!==null,ai(e,l,s),El=i):ai(e,l,s);break;default:ai(e,l,s)}}function Qc(e){var l=e.updateQueue;if(l!==null){e.updateQueue=null;var s=e.stateNode;s===null&&(s=e.stateNode=new cf),l.forEach(function(i){var n=vf.bind(null,e,i);s.has(i)||(s.add(i),i.then(n,n))})}}function ps(e,l){var s=l.deletions;if(s!==null)for(var i=0;i<s.length;i++){var n=s[i];try{var u=e,d=l,h=d;e:for(;h!==null;){switch(h.tag){case 5:hl=h.stateNode,cs=!1;break e;case 3:hl=h.stateNode.containerInfo,cs=!0;break e;case 4:hl=h.stateNode.containerInfo,cs=!0;break e}h=h.return}if(hl===null)throw Error(o(160));Kc(u,d,n),hl=null,cs=!1;var v=n.alternate;v!==null&&(v.return=null),n.return=null}catch(z){tl(n,l,z)}}if(l.subtreeFlags&12854)for(l=l.child;l!==null;)Yc(l,e),l=l.sibling}function Yc(e,l){var s=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ps(l,e),vs(e),i&4){try{ln(3,e,e.return),ca(3,e)}catch(te){tl(e,e.return,te)}try{ln(5,e,e.return)}catch(te){tl(e,e.return,te)}}break;case 1:ps(l,e),vs(e),i&512&&s!==null&&ft(s,s.return);break;case 5:if(ps(l,e),vs(e),i&512&&s!==null&&ft(s,s.return),e.flags&32){var n=e.stateNode;try{il(n,"")}catch(te){tl(e,e.return,te)}}if(i&4&&(n=e.stateNode,n!=null)){var u=e.memoizedProps,d=s!==null?s.memoizedProps:u,h=e.type,v=e.updateQueue;if(e.updateQueue=null,v!==null)try{h==="input"&&u.type==="radio"&&u.name!=null&&ji(n,u),Ni(h,d);var z=Ni(h,u);for(d=0;d<v.length;d+=2){var N=v[d],F=v[d+1];N==="style"?Ri(n,F):N==="dangerouslySetInnerHTML"?Oe(n,F):N==="children"?il(n,F):X(n,N,F,z)}switch(h){case"input":Ml(n,u);break;case"textarea":L(n,u);break;case"select":var R=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!u.multiple;var Z=u.value;Z!=null?ms(n,!!u.multiple,Z,!1):R!==!!u.multiple&&(u.defaultValue!=null?ms(n,!!u.multiple,u.defaultValue,!0):ms(n,!!u.multiple,u.multiple?[]:"",!1))}n[Ft]=u}catch(te){tl(e,e.return,te)}}break;case 6:if(ps(l,e),vs(e),i&4){if(e.stateNode===null)throw Error(o(162));n=e.stateNode,u=e.memoizedProps;try{n.nodeValue=u}catch(te){tl(e,e.return,te)}}break;case 3:if(ps(l,e),vs(e),i&4&&s!==null&&s.memoizedState.isDehydrated)try{zt(l.containerInfo)}catch(te){tl(e,e.return,te)}break;case 4:ps(l,e),vs(e);break;case 13:ps(l,e),vs(e),n=e.child,n.flags&8192&&(u=n.memoizedState!==null,n.stateNode.isHidden=u,!u||n.alternate!==null&&n.alternate.memoizedState!==null||(tu=Ae())),i&4&&Qc(e);break;case 22:if(N=s!==null&&s.memoizedState!==null,e.mode&1?(El=(z=El)||N,ps(l,e),El=z):ps(l,e),vs(e),i&8192){if(z=e.memoizedState!==null,(e.stateNode.isHidden=z)&&!N&&(e.mode&1)!==0)for(ee=e,N=e.child;N!==null;){for(F=ee=N;ee!==null;){switch(R=ee,Z=R.child,R.tag){case 0:case 11:case 14:case 15:ln(4,R,R.return);break;case 1:ft(R,R.return);var se=R.stateNode;if(typeof se.componentWillUnmount=="function"){i=R,s=R.return;try{l=i,se.props=l.memoizedProps,se.state=l.memoizedState,se.componentWillUnmount()}catch(te){tl(i,s,te)}}break;case 5:ft(R,R.return);break;case 22:if(R.memoizedState!==null){ep(F);continue}}Z!==null?(Z.return=R,ee=Z):ep(F)}N=N.sibling}e:for(N=null,F=e;;){if(F.tag===5){if(N===null){N=F;try{n=F.stateNode,z?(u=n.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(h=F.stateNode,v=F.memoizedProps.style,d=v!=null&&v.hasOwnProperty("display")?v.display:null,h.style.display=Gs("display",d))}catch(te){tl(e,e.return,te)}}}else if(F.tag===6){if(N===null)try{F.stateNode.nodeValue=z?"":F.memoizedProps}catch(te){tl(e,e.return,te)}}else if((F.tag!==22&&F.tag!==23||F.memoizedState===null||F===e)&&F.child!==null){F.child.return=F,F=F.child;continue}if(F===e)break e;for(;F.sibling===null;){if(F.return===null||F.return===e)break e;N===F&&(N=null),F=F.return}N===F&&(N=null),F.sibling.return=F.return,F=F.sibling}}break;case 19:ps(l,e),vs(e),i&4&&Qc(e);break;case 21:break;default:ps(l,e),vs(e)}}function vs(e){var l=e.flags;if(l&2){try{e:{for(var s=e.return;s!==null;){if($c(s)){var i=s;break e}s=s.return}throw Error(o(160))}switch(i.tag){case 5:var n=i.stateNode;i.flags&32&&(il(n,""),i.flags&=-33);var u=Vc(e);lu(e,u,n);break;case 3:case 4:var d=i.stateNode.containerInfo,h=Vc(e);eu(e,h,d);break;default:throw Error(o(161))}}catch(v){tl(e,e.return,v)}e.flags&=-3}l&4096&&(e.flags&=-4097)}function df(e,l,s){ee=e,Xc(e)}function Xc(e,l,s){for(var i=(e.mode&1)!==0;ee!==null;){var n=ee,u=n.child;if(n.tag===22&&i){var d=n.memoizedState!==null||ra;if(!d){var h=n.alternate,v=h!==null&&h.memoizedState!==null||El;h=ra;var z=El;if(ra=d,(El=v)&&!z)for(ee=n;ee!==null;)d=ee,v=d.child,d.tag===22&&d.memoizedState!==null?lp(n):v!==null?(v.return=d,ee=v):lp(n);for(;u!==null;)ee=u,Xc(u),u=u.sibling;ee=n,ra=h,El=z}Zc(e)}else(n.subtreeFlags&8772)!==0&&u!==null?(u.return=n,ee=u):Zc(e)}}function Zc(e){for(;ee!==null;){var l=ee;if((l.flags&8772)!==0){var s=l.alternate;try{if((l.flags&8772)!==0)switch(l.tag){case 0:case 11:case 15:El||ca(5,l);break;case 1:var i=l.stateNode;if(l.flags&4&&!El)if(s===null)i.componentDidMount();else{var n=l.elementType===l.type?s.memoizedProps:rs(l.type,s.memoizedProps);i.componentDidUpdate(n,s.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var u=l.updateQueue;u!==null&&ec(l,u,i);break;case 3:var d=l.updateQueue;if(d!==null){if(s=null,l.child!==null)switch(l.child.tag){case 5:s=l.child.stateNode;break;case 1:s=l.child.stateNode}ec(l,d,s)}break;case 5:var h=l.stateNode;if(s===null&&l.flags&4){s=h;var v=l.memoizedProps;switch(l.type){case"button":case"input":case"select":case"textarea":v.autoFocus&&s.focus();break;case"img":v.src&&(s.src=v.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(l.memoizedState===null){var z=l.alternate;if(z!==null){var N=z.memoizedState;if(N!==null){var F=N.dehydrated;F!==null&&zt(F)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}El||l.flags&512&&Zo(l)}catch(R){tl(l,l.return,R)}}if(l===e){ee=null;break}if(s=l.sibling,s!==null){s.return=l.return,ee=s;break}ee=l.return}}function ep(e){for(;ee!==null;){var l=ee;if(l===e){ee=null;break}var s=l.sibling;if(s!==null){s.return=l.return,ee=s;break}ee=l.return}}function lp(e){for(;ee!==null;){var l=ee;try{switch(l.tag){case 0:case 11:case 15:var s=l.return;try{ca(4,l)}catch(v){tl(l,s,v)}break;case 1:var i=l.stateNode;if(typeof i.componentDidMount=="function"){var n=l.return;try{i.componentDidMount()}catch(v){tl(l,n,v)}}var u=l.return;try{Zo(l)}catch(v){tl(l,u,v)}break;case 5:var d=l.return;try{Zo(l)}catch(v){tl(l,d,v)}}}catch(v){tl(l,l.return,v)}if(l===e){ee=null;break}var h=l.sibling;if(h!==null){h.return=l.return,ee=h;break}ee=l.return}}var gf=Math.ceil,pa=pe.ReactCurrentDispatcher,su=pe.ReactCurrentOwner,Yl=pe.ReactCurrentBatchConfig,Te=0,fl=null,ol=null,_l=0,Fl=0,mt=li(0),pl=0,sn=null,Gi=0,da=0,iu=0,tn=null,ql=null,tu=0,ht=1/0,Rs=null,ga=!1,nu=null,oi=null,fa=!1,ui=null,ma=0,nn=0,au=null,ha=-1,_a=0;function Ll(){return(Te&6)!==0?Ae():ha!==-1?ha:ha=Ae()}function ri(e){return(e.mode&1)===0?1:(Te&2)!==0&&_l!==0?_l&-_l:Kg.transition!==null?(_a===0&&(_a=bn()),_a):(e=We,e!==0||(e=window.event,e=e===void 0?16:ir(e.type)),e)}function ds(e,l,s,i){if(50<nn)throw nn=0,au=null,Error(o(185));It(e,s,i),((Te&2)===0||e!==fl)&&(e===fl&&((Te&2)===0&&(da|=s),pl===4&&ci(e,_l)),Bl(e,i),s===1&&Te===0&&(l.mode&1)===0&&(ht=Ae()+500,Dn&&ii()))}function Bl(e,l){var s=e.callbackNode;zs(e,l);var i=$s(e,e===fl?_l:0);if(i===0)s!==null&&nl(s),e.callbackNode=null,e.callbackPriority=0;else if(l=i&-i,e.callbackPriority!==l){if(s!=null&&nl(s),l===1)e.tag===0?Vg(ip.bind(null,e)):Or(ip.bind(null,e)),Fg(function(){(Te&6)===0&&ii()}),s=null;else{switch(Ku(i)){case 1:s=Js;break;case 4:s=ns;break;case 16:s=as;break;case 536870912:s=Tl;break;default:s=as}s=pp(s,sp.bind(null,e))}e.callbackPriority=l,e.callbackNode=s}}function sp(e,l){if(ha=-1,_a=0,(Te&6)!==0)throw Error(o(327));var s=e.callbackNode;if(_t()&&e.callbackNode!==s)return null;var i=$s(e,e===fl?_l:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||l)l=ja(e,i);else{l=i;var n=Te;Te|=2;var u=np();(fl!==e||_l!==l)&&(Rs=null,ht=Ae()+500,Ji(e,l));do try{hf();break}catch(h){tp(e,h)}while(!0);Eo(),pa.current=u,Te=n,ol!==null?l=0:(fl=null,_l=0,l=pl)}if(l!==0){if(l===2&&(n=Ki(e),n!==0&&(i=n,l=ou(e,n))),l===1)throw s=sn,Ji(e,0),ci(e,i),Bl(e,Ae()),s;if(l===6)ci(e,i);else{if(n=e.current.alternate,(i&30)===0&&!ff(n)&&(l=ja(e,i),l===2&&(u=Ki(e),u!==0&&(i=u,l=ou(e,u))),l===1))throw s=sn,Ji(e,0),ci(e,i),Bl(e,Ae()),s;switch(e.finishedWork=n,e.finishedLanes=i,l){case 0:case 1:throw Error(o(345));case 2:zi(e,ql,Rs);break;case 3:if(ci(e,i),(i&130023424)===i&&(l=tu+500-Ae(),10<l)){if($s(e,0)!==0)break;if(n=e.suspendedLanes,(n&i)!==i){Ll(),e.pingedLanes|=e.suspendedLanes&n;break}e.timeoutHandle=go(zi.bind(null,e,ql,Rs),l);break}zi(e,ql,Rs);break;case 4:if(ci(e,i),(i&4194240)===i)break;for(l=e.eventTimes,n=-1;0<i;){var d=31-Sl(i);u=1<<d,d=l[d],d>n&&(n=d),i&=~u}if(i=n,i=Ae()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*gf(i/1960))-i,10<i){e.timeoutHandle=go(zi.bind(null,e,ql,Rs),i);break}zi(e,ql,Rs);break;case 5:zi(e,ql,Rs);break;default:throw Error(o(329))}}}return Bl(e,Ae()),e.callbackNode===s?sp.bind(null,e):null}function ou(e,l){var s=tn;return e.current.memoizedState.isDehydrated&&(Ji(e,l).flags|=256),e=ja(e,l),e!==2&&(l=ql,ql=s,l!==null&&uu(l)),e}function uu(e){ql===null?ql=e:ql.push.apply(ql,e)}function ff(e){for(var l=e;;){if(l.flags&16384){var s=l.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var i=0;i<s.length;i++){var n=s[i],u=n.getSnapshot;n=n.value;try{if(!os(u(),n))return!1}catch{return!1}}}if(s=l.child,l.subtreeFlags&16384&&s!==null)s.return=l,l=s;else{if(l===e)break;for(;l.sibling===null;){if(l.return===null||l.return===e)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function ci(e,l){for(l&=~iu,l&=~da,e.suspendedLanes|=l,e.pingedLanes&=~l,e=e.expirationTimes;0<l;){var s=31-Sl(l),i=1<<s;e[s]=-1,l&=~i}}function ip(e){if((Te&6)!==0)throw Error(o(327));_t();var l=$s(e,0);if((l&1)===0)return Bl(e,Ae()),null;var s=ja(e,l);if(e.tag!==0&&s===2){var i=Ki(e);i!==0&&(l=i,s=ou(e,i))}if(s===1)throw s=sn,Ji(e,0),ci(e,l),Bl(e,Ae()),s;if(s===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=l,zi(e,ql,Rs),Bl(e,Ae()),null}function ru(e,l){var s=Te;Te|=1;try{return e(l)}finally{Te=s,Te===0&&(ht=Ae()+500,Dn&&ii())}}function Pi(e){ui!==null&&ui.tag===0&&(Te&6)===0&&_t();var l=Te;Te|=1;var s=Yl.transition,i=We;try{if(Yl.transition=null,We=1,e)return e()}finally{We=i,Yl.transition=s,Te=l,(Te&6)===0&&ii()}}function cu(){Fl=mt.current,Xe(mt)}function Ji(e,l){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;if(s!==-1&&(e.timeoutHandle=-1,Ng(s)),ol!==null)for(s=ol.return;s!==null;){var i=s;switch(So(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Nn();break;case 3:dt(),Xe(Jl),Xe(wl),Jo();break;case 5:Go(i);break;case 4:dt();break;case 13:Xe(ll);break;case 19:Xe(ll);break;case 10:ko(i.type._context);break;case 22:case 23:cu()}s=s.return}if(fl=e,ol=e=pi(e.current,null),_l=Fl=l,pl=0,sn=null,iu=da=Gi=0,ql=tn=null,Ci!==null){for(l=0;l<Ci.length;l++)if(s=Ci[l],i=s.interleaved,i!==null){s.interleaved=null;var n=i.next,u=s.pending;if(u!==null){var d=u.next;u.next=n,i.next=d}s.pending=i}Ci=null}return e}function tp(e,l){do{var s=ol;try{if(Eo(),la.current=na,sa){for(var i=sl.memoizedState;i!==null;){var n=i.queue;n!==null&&(n.pending=null),i=i.next}sa=!1}if(Li=0,gl=cl=sl=null,Qt=!1,Yt=0,su.current=null,s===null||s.return===null){pl=1,sn=l,ol=null;break}e:{var u=e,d=s.return,h=s,v=l;if(l=_l,h.flags|=32768,v!==null&&typeof v=="object"&&typeof v.then=="function"){var z=v,N=h,F=N.tag;if((N.mode&1)===0&&(F===0||F===11||F===15)){var R=N.alternate;R?(N.updateQueue=R.updateQueue,N.memoizedState=R.memoizedState,N.lanes=R.lanes):(N.updateQueue=null,N.memoizedState=null)}var Z=Lc(d);if(Z!==null){Z.flags&=-257,Gc(Z,d,h,u,l),Z.mode&1&&Ic(u,z,l),l=Z,v=z;var se=l.updateQueue;if(se===null){var te=new Set;te.add(v),l.updateQueue=te}else se.add(v);break e}else{if((l&1)===0){Ic(u,z,l),pu();break e}v=Error(o(426))}}else if(Ze&&h.mode&1){var al=Lc(d);if(al!==null){(al.flags&65536)===0&&(al.flags|=256),Gc(al,d,h,u,l),xo(gt(v,h));break e}}u=v=gt(v,h),pl!==4&&(pl=2),tn===null?tn=[u]:tn.push(u),u=d;do{switch(u.tag){case 3:u.flags|=65536,l&=-l,u.lanes|=l;var I=bc(u,v,l);Zr(u,I);break e;case 1:h=v;var E=u.type,P=u.stateNode;if((u.flags&128)===0&&(typeof E.getDerivedStateFromError=="function"||P!==null&&typeof P.componentDidCatch=="function"&&(oi===null||!oi.has(P)))){u.flags|=65536,l&=-l,u.lanes|=l;var W=Cc(u,h,l);Zr(u,W);break e}}u=u.return}while(u!==null)}op(s)}catch(ne){l=ne,ol===s&&s!==null&&(ol=s=s.return);continue}break}while(!0)}function np(){var e=pa.current;return pa.current=na,e===null?na:e}function pu(){(pl===0||pl===3||pl===2)&&(pl=4),fl===null||(Gi&268435455)===0&&(da&268435455)===0||ci(fl,_l)}function ja(e,l){var s=Te;Te|=2;var i=np();(fl!==e||_l!==l)&&(Rs=null,Ji(e,l));do try{mf();break}catch(n){tp(e,n)}while(!0);if(Eo(),Te=s,pa.current=i,ol!==null)throw Error(o(261));return fl=null,_l=0,pl}function mf(){for(;ol!==null;)ap(ol)}function hf(){for(;ol!==null&&!Qe();)ap(ol)}function ap(e){var l=cp(e.alternate,e,Fl);e.memoizedProps=e.pendingProps,l===null?op(e):ol=l,su.current=null}function op(e){var l=e;do{var s=l.alternate;if(e=l.return,(l.flags&32768)===0){if(s=uf(s,l,Fl),s!==null){ol=s;return}}else{if(s=rf(s,l),s!==null){s.flags&=32767,ol=s;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pl=6,ol=null;return}}if(l=l.sibling,l!==null){ol=l;return}ol=l=e}while(l!==null);pl===0&&(pl=5)}function zi(e,l,s){var i=We,n=Yl.transition;try{Yl.transition=null,We=1,_f(e,l,s,i)}finally{Yl.transition=n,We=i}return null}function _f(e,l,s,i){do _t();while(ui!==null);if((Te&6)!==0)throw Error(o(327));s=e.finishedWork;var n=e.finishedLanes;if(s===null)return null;if(e.finishedWork=null,e.finishedLanes=0,s===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var u=s.lanes|s.childLanes;if(Qd(e,u),e===fl&&(ol=fl=null,_l=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||fa||(fa=!0,pp(as,function(){return _t(),null})),u=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||u){u=Yl.transition,Yl.transition=null;var d=We;We=1;var h=Te;Te|=4,su.current=null,pf(e,s),Yc(s,e),Bg(co),Ln=!!ro,co=ro=null,e.current=s,df(s),De(),Te=h,We=d,Yl.transition=u}else e.current=s;if(fa&&(fa=!1,ui=e,ma=n),u=e.pendingLanes,u===0&&(oi=null),$i(s.stateNode),Bl(e,Ae()),l!==null)for(i=e.onRecoverableError,s=0;s<l.length;s++)n=l[s],i(n.value,{componentStack:n.stack,digest:n.digest});if(ga)throw ga=!1,e=nu,nu=null,e;return(ma&1)!==0&&e.tag!==0&&_t(),u=e.pendingLanes,(u&1)!==0?e===au?nn++:(nn=0,au=e):nn=0,ii(),null}function _t(){if(ui!==null){var e=Ku(ma),l=Yl.transition,s=We;try{if(Yl.transition=null,We=16>e?16:e,ui===null)var i=!1;else{if(e=ui,ui=null,ma=0,(Te&6)!==0)throw Error(o(331));var n=Te;for(Te|=4,ee=e.current;ee!==null;){var u=ee,d=u.child;if((ee.flags&16)!==0){var h=u.deletions;if(h!==null){for(var v=0;v<h.length;v++){var z=h[v];for(ee=z;ee!==null;){var N=ee;switch(N.tag){case 0:case 11:case 15:ln(8,N,u)}var F=N.child;if(F!==null)F.return=N,ee=F;else for(;ee!==null;){N=ee;var R=N.sibling,Z=N.return;if(Wc(N),N===z){ee=null;break}if(R!==null){R.return=Z,ee=R;break}ee=Z}}}var se=u.alternate;if(se!==null){var te=se.child;if(te!==null){se.child=null;do{var al=te.sibling;te.sibling=null,te=al}while(te!==null)}}ee=u}}if((u.subtreeFlags&2064)!==0&&d!==null)d.return=u,ee=d;else e:for(;ee!==null;){if(u=ee,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:ln(9,u,u.return)}var I=u.sibling;if(I!==null){I.return=u.return,ee=I;break e}ee=u.return}}var E=e.current;for(ee=E;ee!==null;){d=ee;var P=d.child;if((d.subtreeFlags&2064)!==0&&P!==null)P.return=d,ee=P;else e:for(d=E;ee!==null;){if(h=ee,(h.flags&2048)!==0)try{switch(h.tag){case 0:case 11:case 15:ca(9,h)}}catch(ne){tl(h,h.return,ne)}if(h===d){ee=null;break e}var W=h.sibling;if(W!==null){W.return=h.return,ee=W;break e}ee=h.return}}if(Te=n,ii(),rl&&typeof rl.onPostCommitFiberRoot=="function")try{rl.onPostCommitFiberRoot(Ds,e)}catch{}i=!0}return i}finally{We=s,Yl.transition=l}}return!1}function up(e,l,s){l=gt(s,l),l=bc(e,l,1),e=ni(e,l,1),l=Ll(),e!==null&&(It(e,1,l),Bl(e,l))}function tl(e,l,s){if(e.tag===3)up(e,e,s);else for(;l!==null;){if(l.tag===3){up(l,e,s);break}else if(l.tag===1){var i=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(oi===null||!oi.has(i))){e=gt(s,e),e=Cc(l,e,1),l=ni(l,e,1),e=Ll(),l!==null&&(It(l,1,e),Bl(l,e));break}}l=l.return}}function jf(e,l,s){var i=e.pingCache;i!==null&&i.delete(l),l=Ll(),e.pingedLanes|=e.suspendedLanes&s,fl===e&&(_l&s)===s&&(pl===4||pl===3&&(_l&130023424)===_l&&500>Ae()-tu?Ji(e,0):iu|=s),Bl(e,l)}function rp(e,l){l===0&&((e.mode&1)===0?l=1:(l=Pl,Pl<<=1,(Pl&130023424)===0&&(Pl=4194304)));var s=Ll();e=Ms(e,l),e!==null&&(It(e,l,s),Bl(e,s))}function Sf(e){var l=e.memoizedState,s=0;l!==null&&(s=l.retryLane),rp(e,s)}function vf(e,l){var s=0;switch(e.tag){case 13:var i=e.stateNode,n=e.memoizedState;n!==null&&(s=n.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(o(314))}i!==null&&i.delete(l),rp(e,s)}var cp;cp=function(e,l,s){if(e!==null)if(e.memoizedProps!==l.pendingProps||Jl.current)Ul=!0;else{if((e.lanes&s)===0&&(l.flags&128)===0)return Ul=!1,of(e,l,s);Ul=(e.flags&131072)!==0}else Ul=!1,Ze&&(l.flags&1048576)!==0&&Nr(l,$n,l.index);switch(l.lanes=0,l.tag){case 2:var i=l.type;ua(e,l),e=l.pendingProps;var n=nt(l,wl.current);pt(l,s),n=qo(null,l,i,e,n,s);var u=Bo();return l.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(l.tag=1,l.memoizedState=null,l.updateQueue=null,zl(i)?(u=!0,Fn(l)):u=!1,l.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,Io(l),n.updater=aa,l.stateNode=n,n._reactInternals=l,Oo(l,i,e,s),l=Wo(null,l,i,!0,u,s)):(l.tag=0,Ze&&u&&jo(l),Il(null,l,n,s),l=l.child),l;case 16:i=l.elementType;e:{switch(ua(e,l),e=l.pendingProps,n=i._init,i=n(i._payload),l.type=i,n=l.tag=xf(i),e=rs(i,e),n){case 0:l=Do(null,l,i,e,s);break e;case 1:l=Bc(null,l,i,e,s);break e;case 11:l=Pc(null,l,i,e,s);break e;case 14:l=Jc(null,l,i,rs(i.type,e),s);break e}throw Error(o(306,i,""))}return l;case 0:return i=l.type,n=l.pendingProps,n=l.elementType===i?n:rs(i,n),Do(e,l,i,n,s);case 1:return i=l.type,n=l.pendingProps,n=l.elementType===i?n:rs(i,n),Bc(e,l,i,n,s);case 3:e:{if(Ac(l),e===null)throw Error(o(387));i=l.pendingProps,u=l.memoizedState,n=u.element,Xr(e,l),Zn(l,i,null,s);var d=l.memoizedState;if(i=d.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},l.updateQueue.baseState=u,l.memoizedState=u,l.flags&256){n=gt(Error(o(423)),l),l=Mc(e,l,i,s,n);break e}else if(i!==n){n=gt(Error(o(424)),l),l=Mc(e,l,i,s,n);break e}else for(Nl=ei(l.stateNode.containerInfo.firstChild),Ol=l,Ze=!0,us=null,s=Qr(l,null,i,s),l.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ut(),i===n){l=Ts(e,l,s);break e}Il(e,l,i,s)}l=l.child}return l;case 5:return lc(l),e===null&&wo(l),i=l.type,n=l.pendingProps,u=e!==null?e.memoizedProps:null,d=n.children,po(i,n)?d=null:u!==null&&po(i,u)&&(l.flags|=32),qc(e,l),Il(e,l,d,s),l.child;case 6:return e===null&&wo(l),null;case 13:return Hc(e,l,s);case 4:return Lo(l,l.stateNode.containerInfo),i=l.pendingProps,e===null?l.child=rt(l,null,i,s):Il(e,l,i,s),l.child;case 11:return i=l.type,n=l.pendingProps,n=l.elementType===i?n:rs(i,n),Pc(e,l,i,n,s);case 7:return Il(e,l,l.pendingProps,s),l.child;case 8:return Il(e,l,l.pendingProps.children,s),l.child;case 12:return Il(e,l,l.pendingProps.children,s),l.child;case 10:e:{if(i=l.type._context,n=l.pendingProps,u=l.memoizedProps,d=n.value,Ke(Qn,i._currentValue),i._currentValue=d,u!==null)if(os(u.value,d)){if(u.children===n.children&&!Jl.current){l=Ts(e,l,s);break e}}else for(u=l.child,u!==null&&(u.return=l);u!==null;){var h=u.dependencies;if(h!==null){d=u.child;for(var v=h.firstContext;v!==null;){if(v.context===i){if(u.tag===1){v=Hs(-1,s&-s),v.tag=2;var z=u.updateQueue;if(z!==null){z=z.shared;var N=z.pending;N===null?v.next=v:(v.next=N.next,N.next=v),z.pending=v}}u.lanes|=s,v=u.alternate,v!==null&&(v.lanes|=s),bo(u.return,s,l),h.lanes|=s;break}v=v.next}}else if(u.tag===10)d=u.type===l.type?null:u.child;else if(u.tag===18){if(d=u.return,d===null)throw Error(o(341));d.lanes|=s,h=d.alternate,h!==null&&(h.lanes|=s),bo(d,s,l),d=u.sibling}else d=u.child;if(d!==null)d.return=u;else for(d=u;d!==null;){if(d===l){d=null;break}if(u=d.sibling,u!==null){u.return=d.return,d=u;break}d=d.return}u=d}Il(e,l,n.children,s),l=l.child}return l;case 9:return n=l.type,i=l.pendingProps.children,pt(l,s),n=Kl(n),i=i(n),l.flags|=1,Il(e,l,i,s),l.child;case 14:return i=l.type,n=rs(i,l.pendingProps),n=rs(i.type,n),Jc(e,l,i,n,s);case 15:return zc(e,l,l.type,l.pendingProps,s);case 17:return i=l.type,n=l.pendingProps,n=l.elementType===i?n:rs(i,n),ua(e,l),l.tag=1,zl(i)?(e=!0,Fn(l)):e=!1,pt(l,s),Ec(l,i,n),Oo(l,i,n,s),Wo(null,l,i,!0,e,s);case 19:return Rc(e,l,s);case 22:return Uc(e,l,s)}throw Error(o(156,l.tag))};function pp(e,l){return Ne(e,l)}function wf(e,l,s,i){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xl(e,l,s,i){return new wf(e,l,s,i)}function du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xf(e){if(typeof e=="function")return du(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ee)return 11;if(e===Se)return 14}return 2}function pi(e,l){var s=e.alternate;return s===null?(s=Xl(e.tag,l,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=l,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&14680064,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,l=e.dependencies,s.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s}function Sa(e,l,s,i,n,u){var d=2;if(i=e,typeof e=="function")du(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case Le:return Ui(s.children,n,u,l);case C:d=8,n|=8;break;case be:return e=Xl(12,s,l,n|2),e.elementType=be,e.lanes=u,e;case He:return e=Xl(13,s,l,n),e.elementType=He,e.lanes=u,e;case Pe:return e=Xl(19,s,l,n),e.elementType=Pe,e.lanes=u,e;case le:return va(s,n,u,l);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ge:d=10;break e;case $e:d=9;break e;case Ee:d=11;break e;case Se:d=14;break e;case Fe:d=16,i=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return l=Xl(d,s,l,n),l.elementType=e,l.type=i,l.lanes=u,l}function Ui(e,l,s,i){return e=Xl(7,e,i,l),e.lanes=s,e}function va(e,l,s,i){return e=Xl(22,e,i,l),e.elementType=le,e.lanes=s,e.stateNode={isHidden:!1},e}function gu(e,l,s){return e=Xl(6,e,null,l),e.lanes=s,e}function fu(e,l,s){return l=Xl(4,e.children!==null?e.children:[],e.key,l),l.lanes=s,l.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},l}function yf(e,l,s,i,n){this.tag=l,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ta(0),this.expirationTimes=Ta(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ta(0),this.identifierPrefix=i,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function mu(e,l,s,i,n,u,d,h,v){return e=new yf(e,l,s,h,v),l===1?(l=1,u===!0&&(l|=8)):l=0,u=Xl(3,null,null,l),e.current=u,u.stateNode=e,u.memoizedState={element:i,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Io(u),e}function Ef(e,l,s){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:we,key:i==null?null:""+i,children:e,containerInfo:l,implementation:s}}function dp(e){if(!e)return si;e=e._reactInternals;e:{if(Y(e)!==e||e.tag!==1)throw Error(o(170));var l=e;do{switch(l.tag){case 3:l=l.stateNode.context;break e;case 1:if(zl(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break e}}l=l.return}while(l!==null);throw Error(o(171))}if(e.tag===1){var s=e.type;if(zl(s))return Tr(e,s,l)}return l}function gp(e,l,s,i,n,u,d,h,v){return e=mu(s,i,!0,e,n,u,d,h,v),e.context=dp(null),s=e.current,i=Ll(),n=ri(s),u=Hs(i,n),u.callback=l??null,ni(s,u,n),e.current.lanes=n,It(e,n,i),Bl(e,i),e}function wa(e,l,s,i){var n=l.current,u=Ll(),d=ri(n);return s=dp(s),l.context===null?l.context=s:l.pendingContext=s,l=Hs(u,d),l.payload={element:e},i=i===void 0?null:i,i!==null&&(l.callback=i),e=ni(n,l,d),e!==null&&(ds(e,n,d,u),Xn(e,n,d)),d}function xa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fp(e,l){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<l?s:l}}function hu(e,l){fp(e,l),(e=e.alternate)&&fp(e,l)}function kf(){return null}var mp=typeof reportError=="function"?reportError:function(e){console.error(e)};function _u(e){this._internalRoot=e}ya.prototype.render=_u.prototype.render=function(e){var l=this._internalRoot;if(l===null)throw Error(o(409));wa(e,l,null,null)},ya.prototype.unmount=_u.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var l=e.containerInfo;Pi(function(){wa(null,e,null,null)}),l[Us]=null}};function ya(e){this._internalRoot=e}ya.prototype.unstable_scheduleHydration=function(e){if(e){var l=Xu();e={blockedOn:null,target:e,priority:l};for(var s=0;s<Ys.length&&l!==0&&l<Ys[s].priority;s++);Ys.splice(s,0,e),s===0&&lr(e)}};function ju(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ea(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hp(){}function bf(e,l,s,i,n){if(n){if(typeof i=="function"){var u=i;i=function(){var z=xa(d);u.call(z)}}var d=gp(l,i,e,0,null,!1,!1,"",hp);return e._reactRootContainer=d,e[Us]=d.current,Ot(e.nodeType===8?e.parentNode:e),Pi(),d}for(;n=e.lastChild;)e.removeChild(n);if(typeof i=="function"){var h=i;i=function(){var z=xa(v);h.call(z)}}var v=mu(e,0,!1,null,null,!1,!1,"",hp);return e._reactRootContainer=v,e[Us]=v.current,Ot(e.nodeType===8?e.parentNode:e),Pi(function(){wa(l,v,s,i)}),v}function ka(e,l,s,i,n){var u=s._reactRootContainer;if(u){var d=u;if(typeof n=="function"){var h=n;n=function(){var v=xa(d);h.call(v)}}wa(l,d,e,n)}else d=bf(s,l,e,n,i);return xa(d)}Qu=function(e){switch(e.tag){case 3:var l=e.stateNode;if(l.current.memoizedState.isDehydrated){var s=Ws(l.pendingLanes);s!==0&&(Ra(l,s|1),Bl(l,Ae()),(Te&6)===0&&(ht=Ae()+500,ii()))}break;case 13:Pi(function(){var i=Ms(e,1);if(i!==null){var n=Ll();ds(i,e,1,n)}}),hu(e,1)}},Oa=function(e){if(e.tag===13){var l=Ms(e,134217728);if(l!==null){var s=Ll();ds(l,e,134217728,s)}hu(e,134217728)}},Yu=function(e){if(e.tag===13){var l=ri(e),s=Ms(e,l);if(s!==null){var i=Ll();ds(s,e,l,i)}hu(e,l)}},Xu=function(){return We},Zu=function(e,l){var s=We;try{return We=e,l()}finally{We=s}},Di=function(e,l,s){switch(l){case"input":if(Ml(e,s),l=s.name,s.type==="radio"&&l!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+l)+'][type="radio"]'),l=0;l<s.length;l++){var i=s[l];if(i!==e&&i.form===e.form){var n=On(i);if(!n)throw Error(o(90));Mi(i),Ml(i,n)}}}break;case"textarea":L(e,s);break;case"select":l=s.value,l!=null&&ms(e,!!s.multiple,l,!1)}},kn=ru,bt=Pi;var Cf={usingClientEntryPoint:!1,Events:[Dt,it,On,En,kt,ru]},an={findFiberByHostInstance:yi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},If={bundleType:an.bundleType,version:an.version,rendererPackageName:an.rendererPackageName,rendererConfig:an.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ce(e),e===null?null:e.stateNode},findFiberByHostInstance:an.findFiberByHostInstance||kf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ba=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ba.isDisabled&&ba.supportsFiber)try{Ds=ba.inject(If),rl=ba}catch{}}return Al.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cf,Al.createPortal=function(e,l){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ju(l))throw Error(o(200));return Ef(e,l,null,s)},Al.createRoot=function(e,l){if(!ju(e))throw Error(o(299));var s=!1,i="",n=mp;return l!=null&&(l.unstable_strictMode===!0&&(s=!0),l.identifierPrefix!==void 0&&(i=l.identifierPrefix),l.onRecoverableError!==void 0&&(n=l.onRecoverableError)),l=mu(e,1,!1,null,null,s,!1,i,n),e[Us]=l.current,Ot(e.nodeType===8?e.parentNode:e),new _u(l)},Al.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var l=e._reactInternals;if(l===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=ce(l),e=e===null?null:e.stateNode,e},Al.flushSync=function(e){return Pi(e)},Al.hydrate=function(e,l,s){if(!Ea(l))throw Error(o(200));return ka(null,e,l,!0,s)},Al.hydrateRoot=function(e,l,s){if(!ju(e))throw Error(o(405));var i=s!=null&&s.hydratedSources||null,n=!1,u="",d=mp;if(s!=null&&(s.unstable_strictMode===!0&&(n=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),l=gp(l,null,e,1,s??null,n,!1,u,d),e[Us]=l.current,Ot(e),i)for(e=0;e<i.length;e++)s=i[e],n=s._getVersion,n=n(s._source),l.mutableSourceEagerHydrationData==null?l.mutableSourceEagerHydrationData=[s,n]:l.mutableSourceEagerHydrationData.push(s,n);return new ya(l)},Al.render=function(e,l,s){if(!Ea(l))throw Error(o(200));return ka(null,e,l,!1,s)},Al.unmountComponentAtNode=function(e){if(!Ea(e))throw Error(o(40));return e._reactRootContainer?(Pi(function(){ka(null,null,e,!1,function(){e._reactRootContainer=null,e[Us]=null})}),!0):!1},Al.unstable_batchedUpdates=ru,Al.unstable_renderSubtreeIntoContainer=function(e,l,s,i){if(!Ea(s))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return ka(e,l,s,!1,i)},Al.version="18.3.1-next-f1338f8080-20240426",Al}var ed;function Vd(){if(ed)return bu.exports;ed=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(a){console.error(a)}}return t(),bu.exports=a_(),bu.exports}var o_=Vd();function u_(t){return b.createElement(Sh,{flushSync:o_.flushSync,...t})}var Ga={},ld;function r_(){if(ld)return Ga;ld=1;var t=Vd();return Ga.createRoot=t.createRoot,Ga.hydrateRoot=t.hydrateRoot,Ga}var c_=r_();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),d_=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,o,r)=>r?r.toUpperCase():o.toLowerCase()),sd=t=>{const a=d_(t);return a.charAt(0).toUpperCase()+a.slice(1)},Kd=(...t)=>t.filter((a,o,r)=>!!a&&a.trim()!==""&&r.indexOf(a)===o).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var g_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=b.forwardRef(({color:t="currentColor",size:a=24,strokeWidth:o=2,absoluteStrokeWidth:r,className:c="",children:p,iconNode:g,...f},m)=>b.createElement("svg",{ref:m,...g_,width:a,height:a,stroke:t,strokeWidth:r?Number(o)*24/Number(a):o,className:Kd("lucide",c),...f},[...g.map(([_,k])=>b.createElement(_,k)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i=(t,a)=>{const o=b.forwardRef(({className:r,...c},p)=>b.createElement(f_,{ref:p,iconNode:a,className:Kd(`lucide-${p_(sd(t))}`,`lucide-${t}`,r),...c}));return o.displayName=sd(t),o};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],id=_i("check",m_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],__=_i("chevron-left",h_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],td=_i("heart",j_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=[["path",{d:"M5 12h14",key:"1ays0h"}]],v_=_i("minus",S_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],x_=_i("plus",w_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]],nd=_i("shopping-bag",y_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],k_=_i("star",E_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],C_=_i("trash-2",b_),I_="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function pn(t){const[a,o]=b.useState(!1),r=()=>{o(!0)},{src:c,alt:p,style:g,className:f,...m}=t;return a?w.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${f??""}`,style:g,children:w.jsx("div",{className:"flex items-center justify-center w-full h-full",children:w.jsx("img",{src:I_,alt:"Error loading image",...m,"data-original-url":c})})}):w.jsx("img",{src:c,alt:p,className:f,style:g,...m,onError:r})}const L_=`id,TITLE,DESCRIPTION,PRICE,CURRENCY_CODE,QUANTITY,TAGS,MATERIALS,IMAGE1,IMAGE2,IMAGE3,IMAGE4,IMAGE5,IMAGE6,IMAGE7,IMAGE8,IMAGE9,IMAGE10,condition,availability,root links,item_group_id,shape,length\r
JUICEGELS-0001,Blooming Tips Set,"French tips with branches and 3d flowers with pearl centre

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/720675077_1035429542379937_2392530197766907696_n.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0001?shape=Square&length=Short,Juicegels_BloomingTipsSet,Square,Short\r
JUICEGELS-0002,Blooming Tips Set,"French tips with branches and 3d flowers with pearl centre

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/720675077_1035429542379937_2392530197766907696_n.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0001?shape=Square&length=Medium,Juicegels_BloomingTipsSet,Square,Medium\r
JUICEGELS-0003,Blooming Tips Set,"French tips with branches and 3d flowers with pearl centre

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/720675077_1035429542379937_2392530197766907696_n.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0001?shape=Square&length=Long,Juicegels_BloomingTipsSet,Square,Long\r
JUICEGELS-0004,Blooming Tips Set,"French tips with branches and 3d flowers with pearl centre

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/720675077_1035429542379937_2392530197766907696_n.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0001?shape=Oval&length=Short,Juicegels_BloomingTipsSet,Oval,Short\r
JUICEGELS-0005,Blooming Tips Set,"French tips with branches and 3d flowers with pearl centre

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/720675077_1035429542379937_2392530197766907696_n.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0001?shape=Oval&length=Medium,Juicegels_BloomingTipsSet,Oval,Medium\r
JUICEGELS-0006,Blooming Tips Set,"French tips with branches and 3d flowers with pearl centre

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/720675077_1035429542379937_2392530197766907696_n.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0001?shape=Oval&length=Long,Juicegels_BloomingTipsSet,Oval,Long\r
JUICEGELS-0007,Blooming Tips Set,"French tips with branches and 3d flowers with pearl centre

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/720675077_1035429542379937_2392530197766907696_n.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0001?shape=Stiletto&length=Short,Juicegels_BloomingTipsSet,Stiletto,Short\r
JUICEGELS-0008,Blooming Tips Set,"French tips with branches and 3d flowers with pearl centre

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/720675077_1035429542379937_2392530197766907696_n.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0001?shape=Stiletto&length=Medium,Juicegels_BloomingTipsSet,Stiletto,Medium\r
JUICEGELS-0009,Blooming Tips Set,"French tips with branches and 3d flowers with pearl centre

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/720675077_1035429542379937_2392530197766907696_n.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0001?shape=Stiletto&length=Long,Juicegels_BloomingTipsSet,Stiletto,Long\r
JUICEGELS-0010,Blooming Tips Set,"French tips with branches and 3d flowers with pearl centre

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/720675077_1035429542379937_2392530197766907696_n.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0001?shape=Coffin&length=Short,Juicegels_BloomingTipsSet,Coffin,Short\r
JUICEGELS-0011,Blooming Tips Set,"French tips with branches and 3d flowers with pearl centre

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/720675077_1035429542379937_2392530197766907696_n.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0001?shape=Coffin&length=Medium,Juicegels_BloomingTipsSet,Coffin,Medium\r
JUICEGELS-0012,Blooming Tips Set,"French tips with branches and 3d flowers with pearl centre

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/720675077_1035429542379937_2392530197766907696_n.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0001?shape=Coffin&length=Long,Juicegels_BloomingTipsSet,Coffin,Long\r
JUICEGELS-0013,Blooming Tips Set,"French tips with branches and 3d flowers with pearl centre

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/720675077_1035429542379937_2392530197766907696_n.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0001?shape=Almond&length=Short,Juicegels_BloomingTipsSet,Almond,Short\r
JUICEGELS-0014,Blooming Tips Set,"French tips with branches and 3d flowers with pearl centre

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/720675077_1035429542379937_2392530197766907696_n.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0001?shape=Almond&length=Medium,Juicegels_BloomingTipsSet,Almond,Medium\r
JUICEGELS-0015,Blooming Tips Set,"French tips with branches and 3d flowers with pearl centre

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/720675077_1035429542379937_2392530197766907696_n.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0001?shape=Almond&length=Long,Juicegels_BloomingTipsSet,Almond,Long\r
JUICEGELS-0016,Stellar Shine Set,"Clear glitter base with pearls, 3d bow and 3d silver planet charm.
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"clear_nails,silver_nails,gel_press_ons,press_on_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161299165_fx9v.jpg, https://juicegels.com/images/products/il_fullxfull.6603615867_gl83.jpg,https://juicegels.com/images/products/il_fullxfull.6555495342_gllx.jpg,https://juicegels.com/images/products/il_fullxfull.6603615869_4kcv.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0002?shape=Square&length=Short,Juicegels_StellarShineSet,Square,Short\r
JUICEGELS-0017,Stellar Shine Set,"Clear glitter base with pearls, 3d bow and 3d silver planet charm.
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"clear_nails,silver_nails,gel_press_ons,press_on_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161299165_fx9v.jpg, https://juicegels.com/images/products/il_fullxfull.6603615867_gl83.jpg,https://juicegels.com/images/products/il_fullxfull.6555495342_gllx.jpg,https://juicegels.com/images/products/il_fullxfull.6603615869_4kcv.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0002?shape=Square&length=Medium,Juicegels_StellarShineSet,Square,Medium\r
JUICEGELS-0018,Stellar Shine Set,"Clear glitter base with pearls, 3d bow and 3d silver planet charm.
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"clear_nails,silver_nails,gel_press_ons,press_on_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161299165_fx9v.jpg, https://juicegels.com/images/products/il_fullxfull.6603615867_gl83.jpg,https://juicegels.com/images/products/il_fullxfull.6555495342_gllx.jpg,https://juicegels.com/images/products/il_fullxfull.6603615869_4kcv.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0002?shape=Square&length=Long,Juicegels_StellarShineSet,Square,Long\r
JUICEGELS-0019,Stellar Shine Set,"Clear glitter base with pearls, 3d bow and 3d silver planet charm.
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"clear_nails,silver_nails,gel_press_ons,press_on_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161299165_fx9v.jpg, https://juicegels.com/images/products/il_fullxfull.6603615867_gl83.jpg,https://juicegels.com/images/products/il_fullxfull.6555495342_gllx.jpg,https://juicegels.com/images/products/il_fullxfull.6603615869_4kcv.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0002?shape=Oval&length=Short,Juicegels_StellarShineSet,Oval,Short\r
JUICEGELS-0020,Stellar Shine Set,"Clear glitter base with pearls, 3d bow and 3d silver planet charm.
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"clear_nails,silver_nails,gel_press_ons,press_on_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161299165_fx9v.jpg, https://juicegels.com/images/products/il_fullxfull.6603615867_gl83.jpg,https://juicegels.com/images/products/il_fullxfull.6555495342_gllx.jpg,https://juicegels.com/images/products/il_fullxfull.6603615869_4kcv.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0002?shape=Oval&length=Medium,Juicegels_StellarShineSet,Oval,Medium\r
JUICEGELS-0021,Stellar Shine Set,"Clear glitter base with pearls, 3d bow and 3d silver planet charm.
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"clear_nails,silver_nails,gel_press_ons,press_on_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161299165_fx9v.jpg, https://juicegels.com/images/products/il_fullxfull.6603615867_gl83.jpg,https://juicegels.com/images/products/il_fullxfull.6555495342_gllx.jpg,https://juicegels.com/images/products/il_fullxfull.6603615869_4kcv.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0002?shape=Oval&length=Long,Juicegels_StellarShineSet,Oval,Long\r
JUICEGELS-0022,Stellar Shine Set,"Clear glitter base with pearls, 3d bow and 3d silver planet charm.
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"clear_nails,silver_nails,gel_press_ons,press_on_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161299165_fx9v.jpg, https://juicegels.com/images/products/il_fullxfull.6603615867_gl83.jpg,https://juicegels.com/images/products/il_fullxfull.6555495342_gllx.jpg,https://juicegels.com/images/products/il_fullxfull.6603615869_4kcv.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0002?shape=Stiletto&length=Short,Juicegels_StellarShineSet,Stiletto,Short\r
JUICEGELS-0023,Stellar Shine Set,"Clear glitter base with pearls, 3d bow and 3d silver planet charm.
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"clear_nails,silver_nails,gel_press_ons,press_on_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161299165_fx9v.jpg, https://juicegels.com/images/products/il_fullxfull.6603615867_gl83.jpg,https://juicegels.com/images/products/il_fullxfull.6555495342_gllx.jpg,https://juicegels.com/images/products/il_fullxfull.6603615869_4kcv.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0002?shape=Stiletto&length=Medium,Juicegels_StellarShineSet,Stiletto,Medium\r
JUICEGELS-0024,Stellar Shine Set,"Clear glitter base with pearls, 3d bow and 3d silver planet charm.
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"clear_nails,silver_nails,gel_press_ons,press_on_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161299165_fx9v.jpg, https://juicegels.com/images/products/il_fullxfull.6603615867_gl83.jpg,https://juicegels.com/images/products/il_fullxfull.6555495342_gllx.jpg,https://juicegels.com/images/products/il_fullxfull.6603615869_4kcv.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0002?shape=Stiletto&length=Long,Juicegels_StellarShineSet,Stiletto,Long\r
JUICEGELS-0025,Stellar Shine Set,"Clear glitter base with pearls, 3d bow and 3d silver planet charm.
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"clear_nails,silver_nails,gel_press_ons,press_on_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161299165_fx9v.jpg, https://juicegels.com/images/products/il_fullxfull.6603615867_gl83.jpg,https://juicegels.com/images/products/il_fullxfull.6555495342_gllx.jpg,https://juicegels.com/images/products/il_fullxfull.6603615869_4kcv.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0002?shape=Coffin&length=Short,Juicegels_StellarShineSet,Coffin,Short\r
JUICEGELS-0026,Stellar Shine Set,"Clear glitter base with pearls, 3d bow and 3d silver planet charm.
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"clear_nails,silver_nails,gel_press_ons,press_on_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161299165_fx9v.jpg, https://juicegels.com/images/products/il_fullxfull.6603615867_gl83.jpg,https://juicegels.com/images/products/il_fullxfull.6555495342_gllx.jpg,https://juicegels.com/images/products/il_fullxfull.6603615869_4kcv.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0002?shape=Coffin&length=Medium,Juicegels_StellarShineSet,Coffin,Medium\r
JUICEGELS-0027,Stellar Shine Set,"Clear glitter base with pearls, 3d bow and 3d silver planet charm.
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"clear_nails,silver_nails,gel_press_ons,press_on_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161299165_fx9v.jpg, https://juicegels.com/images/products/il_fullxfull.6603615867_gl83.jpg,https://juicegels.com/images/products/il_fullxfull.6555495342_gllx.jpg,https://juicegels.com/images/products/il_fullxfull.6603615869_4kcv.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0002?shape=Coffin&length=Long,Juicegels_StellarShineSet,Coffin,Long\r
JUICEGELS-0028,Stellar Shine Set,"Clear glitter base with pearls, 3d bow and 3d silver planet charm.
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"clear_nails,silver_nails,gel_press_ons,press_on_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161299165_fx9v.jpg, https://juicegels.com/images/products/il_fullxfull.6603615867_gl83.jpg,https://juicegels.com/images/products/il_fullxfull.6555495342_gllx.jpg,https://juicegels.com/images/products/il_fullxfull.6603615869_4kcv.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0002?shape=Almond&length=Short,Juicegels_StellarShineSet,Almond,Short\r
JUICEGELS-0029,Stellar Shine Set,"Clear glitter base with pearls, 3d bow and 3d silver planet charm.
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"clear_nails,silver_nails,gel_press_ons,press_on_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161299165_fx9v.jpg, https://juicegels.com/images/products/il_fullxfull.6603615867_gl83.jpg,https://juicegels.com/images/products/il_fullxfull.6555495342_gllx.jpg,https://juicegels.com/images/products/il_fullxfull.6603615869_4kcv.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0002?shape=Almond&length=Medium,Juicegels_StellarShineSet,Almond,Medium\r
JUICEGELS-0030,Stellar Shine Set,"Clear glitter base with pearls, 3d bow and 3d silver planet charm.
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"clear_nails,silver_nails,gel_press_ons,press_on_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161299165_fx9v.jpg, https://juicegels.com/images/products/il_fullxfull.6603615867_gl83.jpg,https://juicegels.com/images/products/il_fullxfull.6555495342_gllx.jpg,https://juicegels.com/images/products/il_fullxfull.6603615869_4kcv.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0002?shape=Almond&length=Long,Juicegels_StellarShineSet,Almond,Long\r
JUICEGELS-0031,Kitty Stardust Set,"Pink base with silver metallic line art and 3d Hello Kitty charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18.5,GBP,20,"cute_press_on_nails,3d_gems,kawaii_nails,silver_nails,silver_nail_art,metallic_nails,hello_kitty,hello_kitty_nails,sanrio_nails,pink_nails",,https://juicegels.com/images/products/il_fullxfull.6638785981_4i6f.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0003?shape=Square&length=Short,Juicegels_KittyStardustSet,Square,Short\r
JUICEGELS-0032,Kitty Stardust Set,"Pink base with silver metallic line art and 3d Hello Kitty charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18.5,GBP,20,"cute_press_on_nails,3d_gems,kawaii_nails,silver_nails,silver_nail_art,metallic_nails,hello_kitty,hello_kitty_nails,sanrio_nails,pink_nails",,https://juicegels.com/images/products/il_fullxfull.6638785981_4i6f.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0003?shape=Square&length=Medium,Juicegels_KittyStardustSet,Square,Medium\r
JUICEGELS-0033,Kitty Stardust Set,"Pink base with silver metallic line art and 3d Hello Kitty charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18.5,GBP,20,"cute_press_on_nails,3d_gems,kawaii_nails,silver_nails,silver_nail_art,metallic_nails,hello_kitty,hello_kitty_nails,sanrio_nails,pink_nails",,https://juicegels.com/images/products/il_fullxfull.6638785981_4i6f.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0003?shape=Square&length=Long,Juicegels_KittyStardustSet,Square,Long\r
JUICEGELS-0034,Kitty Stardust Set,"Pink base with silver metallic line art and 3d Hello Kitty charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18.5,GBP,20,"cute_press_on_nails,3d_gems,kawaii_nails,silver_nails,silver_nail_art,metallic_nails,hello_kitty,hello_kitty_nails,sanrio_nails,pink_nails",,https://juicegels.com/images/products/il_fullxfull.6638785981_4i6f.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0003?shape=Oval&length=Short,Juicegels_KittyStardustSet,Oval,Short\r
JUICEGELS-0035,Kitty Stardust Set,"Pink base with silver metallic line art and 3d Hello Kitty charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18.5,GBP,20,"cute_press_on_nails,3d_gems,kawaii_nails,silver_nails,silver_nail_art,metallic_nails,hello_kitty,hello_kitty_nails,sanrio_nails,pink_nails",,https://juicegels.com/images/products/il_fullxfull.6638785981_4i6f.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0003?shape=Oval&length=Medium,Juicegels_KittyStardustSet,Oval,Medium\r
JUICEGELS-0036,Kitty Stardust Set,"Pink base with silver metallic line art and 3d Hello Kitty charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18.5,GBP,20,"cute_press_on_nails,3d_gems,kawaii_nails,silver_nails,silver_nail_art,metallic_nails,hello_kitty,hello_kitty_nails,sanrio_nails,pink_nails",,https://juicegels.com/images/products/il_fullxfull.6638785981_4i6f.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0003?shape=Oval&length=Long,Juicegels_KittyStardustSet,Oval,Long\r
JUICEGELS-0037,Kitty Stardust Set,"Pink base with silver metallic line art and 3d Hello Kitty charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18.5,GBP,20,"cute_press_on_nails,3d_gems,kawaii_nails,silver_nails,silver_nail_art,metallic_nails,hello_kitty,hello_kitty_nails,sanrio_nails,pink_nails",,https://juicegels.com/images/products/il_fullxfull.6638785981_4i6f.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0003?shape=Stiletto&length=Short,Juicegels_KittyStardustSet,Stiletto,Short\r
JUICEGELS-0038,Kitty Stardust Set,"Pink base with silver metallic line art and 3d Hello Kitty charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18.5,GBP,20,"cute_press_on_nails,3d_gems,kawaii_nails,silver_nails,silver_nail_art,metallic_nails,hello_kitty,hello_kitty_nails,sanrio_nails,pink_nails",,https://juicegels.com/images/products/il_fullxfull.6638785981_4i6f.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0003?shape=Stiletto&length=Medium,Juicegels_KittyStardustSet,Stiletto,Medium\r
JUICEGELS-0039,Kitty Stardust Set,"Pink base with silver metallic line art and 3d Hello Kitty charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18.5,GBP,20,"cute_press_on_nails,3d_gems,kawaii_nails,silver_nails,silver_nail_art,metallic_nails,hello_kitty,hello_kitty_nails,sanrio_nails,pink_nails",,https://juicegels.com/images/products/il_fullxfull.6638785981_4i6f.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0003?shape=Stiletto&length=Long,Juicegels_KittyStardustSet,Stiletto,Long\r
JUICEGELS-0040,Kitty Stardust Set,"Pink base with silver metallic line art and 3d Hello Kitty charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18.5,GBP,20,"cute_press_on_nails,3d_gems,kawaii_nails,silver_nails,silver_nail_art,metallic_nails,hello_kitty,hello_kitty_nails,sanrio_nails,pink_nails",,https://juicegels.com/images/products/il_fullxfull.6638785981_4i6f.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0003?shape=Coffin&length=Short,Juicegels_KittyStardustSet,Coffin,Short\r
JUICEGELS-0041,Kitty Stardust Set,"Pink base with silver metallic line art and 3d Hello Kitty charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18.5,GBP,20,"cute_press_on_nails,3d_gems,kawaii_nails,silver_nails,silver_nail_art,metallic_nails,hello_kitty,hello_kitty_nails,sanrio_nails,pink_nails",,https://juicegels.com/images/products/il_fullxfull.6638785981_4i6f.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0003?shape=Coffin&length=Medium,Juicegels_KittyStardustSet,Coffin,Medium\r
JUICEGELS-0042,Kitty Stardust Set,"Pink base with silver metallic line art and 3d Hello Kitty charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18.5,GBP,20,"cute_press_on_nails,3d_gems,kawaii_nails,silver_nails,silver_nail_art,metallic_nails,hello_kitty,hello_kitty_nails,sanrio_nails,pink_nails",,https://juicegels.com/images/products/il_fullxfull.6638785981_4i6f.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0003?shape=Coffin&length=Long,Juicegels_KittyStardustSet,Coffin,Long\r
JUICEGELS-0043,Kitty Stardust Set,"Pink base with silver metallic line art and 3d Hello Kitty charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18.5,GBP,20,"cute_press_on_nails,3d_gems,kawaii_nails,silver_nails,silver_nail_art,metallic_nails,hello_kitty,hello_kitty_nails,sanrio_nails,pink_nails",,https://juicegels.com/images/products/il_fullxfull.6638785981_4i6f.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0003?shape=Almond&length=Short,Juicegels_KittyStardustSet,Almond,Short\r
JUICEGELS-0044,Kitty Stardust Set,"Pink base with silver metallic line art and 3d Hello Kitty charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18.5,GBP,20,"cute_press_on_nails,3d_gems,kawaii_nails,silver_nails,silver_nail_art,metallic_nails,hello_kitty,hello_kitty_nails,sanrio_nails,pink_nails",,https://juicegels.com/images/products/il_fullxfull.6638785981_4i6f.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0003?shape=Almond&length=Medium,Juicegels_KittyStardustSet,Almond,Medium\r
JUICEGELS-0045,Kitty Stardust Set,"Pink base with silver metallic line art and 3d Hello Kitty charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18.5,GBP,20,"cute_press_on_nails,3d_gems,kawaii_nails,silver_nails,silver_nail_art,metallic_nails,hello_kitty,hello_kitty_nails,sanrio_nails,pink_nails",,https://juicegels.com/images/products/il_fullxfull.6638785981_4i6f.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0003?shape=Almond&length=Long,Juicegels_KittyStardustSet,Almond,Long\r
JUICEGELS-0046,Kuromi Stardust Set,"Black base with silver metallic line art and 3d kuromi charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18.5,GBP,20,"cute_press_on_nails,3d_gems,kawaii_nails,kuromi_nails,sanrio_nails,kuromi,black_nails,silver_nails,silver_nail_art,metallic_nails",,https://juicegels.com/images/products/il_fullxfull.6638779851_jsj5.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0004?shape=Square&length=Short,Juicegels_KuromiStardustSet,Square,Short\r
JUICEGELS-0047,Kuromi Stardust Set,"Black base with silver metallic line art and 3d kuromi charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18.5,GBP,20,"cute_press_on_nails,3d_gems,kawaii_nails,kuromi_nails,sanrio_nails,kuromi,black_nails,silver_nails,silver_nail_art,metallic_nails",,https://juicegels.com/images/products/il_fullxfull.6638779851_jsj5.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0004?shape=Square&length=Medium,Juicegels_KuromiStardustSet,Square,Medium\r
JUICEGELS-0048,Kuromi Stardust Set,"Black base with silver metallic line art and 3d kuromi charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18.5,GBP,20,"cute_press_on_nails,3d_gems,kawaii_nails,kuromi_nails,sanrio_nails,kuromi,black_nails,silver_nails,silver_nail_art,metallic_nails",,https://juicegels.com/images/products/il_fullxfull.6638779851_jsj5.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0004?shape=Square&length=Long,Juicegels_KuromiStardustSet,Square,Long\r
JUICEGELS-0049,Kuromi Stardust Set,"Black base with silver metallic line art and 3d kuromi charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18.5,GBP,20,"cute_press_on_nails,3d_gems,kawaii_nails,kuromi_nails,sanrio_nails,kuromi,black_nails,silver_nails,silver_nail_art,metallic_nails",,https://juicegels.com/images/products/il_fullxfull.6638779851_jsj5.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0004?shape=Oval&length=Short,Juicegels_KuromiStardustSet,Oval,Short\r
JUICEGELS-0050,Kuromi Stardust Set,"Black base with silver metallic line art and 3d kuromi charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18.5,GBP,20,"cute_press_on_nails,3d_gems,kawaii_nails,kuromi_nails,sanrio_nails,kuromi,black_nails,silver_nails,silver_nail_art,metallic_nails",,https://juicegels.com/images/products/il_fullxfull.6638779851_jsj5.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0004?shape=Oval&length=Medium,Juicegels_KuromiStardustSet,Oval,Medium\r
JUICEGELS-0051,Kuromi Stardust Set,"Black base with silver metallic line art and 3d kuromi charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18.5,GBP,20,"cute_press_on_nails,3d_gems,kawaii_nails,kuromi_nails,sanrio_nails,kuromi,black_nails,silver_nails,silver_nail_art,metallic_nails",,https://juicegels.com/images/products/il_fullxfull.6638779851_jsj5.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0004?shape=Oval&length=Long,Juicegels_KuromiStardustSet,Oval,Long\r
JUICEGELS-0052,Kuromi Stardust Set,"Black base with silver metallic line art and 3d kuromi charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18.5,GBP,20,"cute_press_on_nails,3d_gems,kawaii_nails,kuromi_nails,sanrio_nails,kuromi,black_nails,silver_nails,silver_nail_art,metallic_nails",,https://juicegels.com/images/products/il_fullxfull.6638779851_jsj5.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0004?shape=Stiletto&length=Short,Juicegels_KuromiStardustSet,Stiletto,Short\r
JUICEGELS-0053,Kuromi Stardust Set,"Black base with silver metallic line art and 3d kuromi charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18.5,GBP,20,"cute_press_on_nails,3d_gems,kawaii_nails,kuromi_nails,sanrio_nails,kuromi,black_nails,silver_nails,silver_nail_art,metallic_nails",,https://juicegels.com/images/products/il_fullxfull.6638779851_jsj5.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0004?shape=Stiletto&length=Medium,Juicegels_KuromiStardustSet,Stiletto,Medium\r
JUICEGELS-0054,Kuromi Stardust Set,"Black base with silver metallic line art and 3d kuromi charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18.5,GBP,20,"cute_press_on_nails,3d_gems,kawaii_nails,kuromi_nails,sanrio_nails,kuromi,black_nails,silver_nails,silver_nail_art,metallic_nails",,https://juicegels.com/images/products/il_fullxfull.6638779851_jsj5.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0004?shape=Stiletto&length=Long,Juicegels_KuromiStardustSet,Stiletto,Long\r
JUICEGELS-0055,Kuromi Stardust Set,"Black base with silver metallic line art and 3d kuromi charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18.5,GBP,20,"cute_press_on_nails,3d_gems,kawaii_nails,kuromi_nails,sanrio_nails,kuromi,black_nails,silver_nails,silver_nail_art,metallic_nails",,https://juicegels.com/images/products/il_fullxfull.6638779851_jsj5.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0004?shape=Coffin&length=Short,Juicegels_KuromiStardustSet,Coffin,Short\r
JUICEGELS-0056,Kuromi Stardust Set,"Black base with silver metallic line art and 3d kuromi charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18.5,GBP,20,"cute_press_on_nails,3d_gems,kawaii_nails,kuromi_nails,sanrio_nails,kuromi,black_nails,silver_nails,silver_nail_art,metallic_nails",,https://juicegels.com/images/products/il_fullxfull.6638779851_jsj5.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0004?shape=Coffin&length=Medium,Juicegels_KuromiStardustSet,Coffin,Medium\r
JUICEGELS-0057,Kuromi Stardust Set,"Black base with silver metallic line art and 3d kuromi charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18.5,GBP,20,"cute_press_on_nails,3d_gems,kawaii_nails,kuromi_nails,sanrio_nails,kuromi,black_nails,silver_nails,silver_nail_art,metallic_nails",,https://juicegels.com/images/products/il_fullxfull.6638779851_jsj5.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0004?shape=Coffin&length=Long,Juicegels_KuromiStardustSet,Coffin,Long\r
JUICEGELS-0058,Kuromi Stardust Set,"Black base with silver metallic line art and 3d kuromi charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18.5,GBP,20,"cute_press_on_nails,3d_gems,kawaii_nails,kuromi_nails,sanrio_nails,kuromi,black_nails,silver_nails,silver_nail_art,metallic_nails",,https://juicegels.com/images/products/il_fullxfull.6638779851_jsj5.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0004?shape=Almond&length=Short,Juicegels_KuromiStardustSet,Almond,Short\r
JUICEGELS-0059,Kuromi Stardust Set,"Black base with silver metallic line art and 3d kuromi charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18.5,GBP,20,"cute_press_on_nails,3d_gems,kawaii_nails,kuromi_nails,sanrio_nails,kuromi,black_nails,silver_nails,silver_nail_art,metallic_nails",,https://juicegels.com/images/products/il_fullxfull.6638779851_jsj5.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0004?shape=Almond&length=Medium,Juicegels_KuromiStardustSet,Almond,Medium\r
JUICEGELS-0060,Kuromi Stardust Set,"Black base with silver metallic line art and 3d kuromi charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18.5,GBP,20,"cute_press_on_nails,3d_gems,kawaii_nails,kuromi_nails,sanrio_nails,kuromi,black_nails,silver_nails,silver_nail_art,metallic_nails",,https://juicegels.com/images/products/il_fullxfull.6638779851_jsj5.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0004?shape=Almond&length=Long,Juicegels_KuromiStardustSet,Almond,Long\r
JUICEGELS-0061,Periwinkle Pearls Set,"Short almond Purple Set with French Tip Pearls and 3D Bow Charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"press_on_nails,purple_nails,gel_nails,gel_press_on_nails,coquette_nails,valentines_nails,cute_nails,pearl_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6580479228_th6r.jpg,https://juicegels.com/images/products/il_fullxfull.6628598655_8vj8.jpg,https://juicegels.com/images/products/il_fullxfull.6580479548_ffqd.jpg,https://juicegels.com/images/products/il_fullxfull.6628598665_2jp5.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0005?shape=Square&length=Short,Juicegels_PeriwinklePearlsSet,Square,Short\r
JUICEGELS-0062,Periwinkle Pearls Set,"Short almond Purple Set with French Tip Pearls and 3D Bow Charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"press_on_nails,purple_nails,gel_nails,gel_press_on_nails,coquette_nails,valentines_nails,cute_nails,pearl_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6580479228_th6r.jpg,https://juicegels.com/images/products/il_fullxfull.6628598655_8vj8.jpg,https://juicegels.com/images/products/il_fullxfull.6580479548_ffqd.jpg,https://juicegels.com/images/products/il_fullxfull.6628598665_2jp5.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0005?shape=Square&length=Medium,Juicegels_PeriwinklePearlsSet,Square,Medium\r
JUICEGELS-0063,Periwinkle Pearls Set,"Short almond Purple Set with French Tip Pearls and 3D Bow Charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"press_on_nails,purple_nails,gel_nails,gel_press_on_nails,coquette_nails,valentines_nails,cute_nails,pearl_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6580479228_th6r.jpg,https://juicegels.com/images/products/il_fullxfull.6628598655_8vj8.jpg,https://juicegels.com/images/products/il_fullxfull.6580479548_ffqd.jpg,https://juicegels.com/images/products/il_fullxfull.6628598665_2jp5.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0005?shape=Square&length=Long,Juicegels_PeriwinklePearlsSet,Square,Long\r
JUICEGELS-0064,Periwinkle Pearls Set,"Short almond Purple Set with French Tip Pearls and 3D Bow Charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"press_on_nails,purple_nails,gel_nails,gel_press_on_nails,coquette_nails,valentines_nails,cute_nails,pearl_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6580479228_th6r.jpg,https://juicegels.com/images/products/il_fullxfull.6628598655_8vj8.jpg,https://juicegels.com/images/products/il_fullxfull.6580479548_ffqd.jpg,https://juicegels.com/images/products/il_fullxfull.6628598665_2jp5.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0005?shape=Oval&length=Short,Juicegels_PeriwinklePearlsSet,Oval,Short\r
JUICEGELS-0065,Periwinkle Pearls Set,"Short almond Purple Set with French Tip Pearls and 3D Bow Charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"press_on_nails,purple_nails,gel_nails,gel_press_on_nails,coquette_nails,valentines_nails,cute_nails,pearl_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6580479228_th6r.jpg,https://juicegels.com/images/products/il_fullxfull.6628598655_8vj8.jpg,https://juicegels.com/images/products/il_fullxfull.6580479548_ffqd.jpg,https://juicegels.com/images/products/il_fullxfull.6628598665_2jp5.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0005?shape=Oval&length=Medium,Juicegels_PeriwinklePearlsSet,Oval,Medium\r
JUICEGELS-0066,Periwinkle Pearls Set,"Short almond Purple Set with French Tip Pearls and 3D Bow Charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"press_on_nails,purple_nails,gel_nails,gel_press_on_nails,coquette_nails,valentines_nails,cute_nails,pearl_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6580479228_th6r.jpg,https://juicegels.com/images/products/il_fullxfull.6628598655_8vj8.jpg,https://juicegels.com/images/products/il_fullxfull.6580479548_ffqd.jpg,https://juicegels.com/images/products/il_fullxfull.6628598665_2jp5.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0005?shape=Oval&length=Long,Juicegels_PeriwinklePearlsSet,Oval,Long\r
JUICEGELS-0067,Periwinkle Pearls Set,"Short almond Purple Set with French Tip Pearls and 3D Bow Charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"press_on_nails,purple_nails,gel_nails,gel_press_on_nails,coquette_nails,valentines_nails,cute_nails,pearl_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6580479228_th6r.jpg,https://juicegels.com/images/products/il_fullxfull.6628598655_8vj8.jpg,https://juicegels.com/images/products/il_fullxfull.6580479548_ffqd.jpg,https://juicegels.com/images/products/il_fullxfull.6628598665_2jp5.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0005?shape=Stiletto&length=Short,Juicegels_PeriwinklePearlsSet,Stiletto,Short\r
JUICEGELS-0068,Periwinkle Pearls Set,"Short almond Purple Set with French Tip Pearls and 3D Bow Charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"press_on_nails,purple_nails,gel_nails,gel_press_on_nails,coquette_nails,valentines_nails,cute_nails,pearl_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6580479228_th6r.jpg,https://juicegels.com/images/products/il_fullxfull.6628598655_8vj8.jpg,https://juicegels.com/images/products/il_fullxfull.6580479548_ffqd.jpg,https://juicegels.com/images/products/il_fullxfull.6628598665_2jp5.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0005?shape=Stiletto&length=Medium,Juicegels_PeriwinklePearlsSet,Stiletto,Medium\r
JUICEGELS-0069,Periwinkle Pearls Set,"Short almond Purple Set with French Tip Pearls and 3D Bow Charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"press_on_nails,purple_nails,gel_nails,gel_press_on_nails,coquette_nails,valentines_nails,cute_nails,pearl_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6580479228_th6r.jpg,https://juicegels.com/images/products/il_fullxfull.6628598655_8vj8.jpg,https://juicegels.com/images/products/il_fullxfull.6580479548_ffqd.jpg,https://juicegels.com/images/products/il_fullxfull.6628598665_2jp5.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0005?shape=Stiletto&length=Long,Juicegels_PeriwinklePearlsSet,Stiletto,Long\r
JUICEGELS-0070,Periwinkle Pearls Set,"Short almond Purple Set with French Tip Pearls and 3D Bow Charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"press_on_nails,purple_nails,gel_nails,gel_press_on_nails,coquette_nails,valentines_nails,cute_nails,pearl_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6580479228_th6r.jpg,https://juicegels.com/images/products/il_fullxfull.6628598655_8vj8.jpg,https://juicegels.com/images/products/il_fullxfull.6580479548_ffqd.jpg,https://juicegels.com/images/products/il_fullxfull.6628598665_2jp5.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0005?shape=Coffin&length=Short,Juicegels_PeriwinklePearlsSet,Coffin,Short\r
JUICEGELS-0071,Periwinkle Pearls Set,"Short almond Purple Set with French Tip Pearls and 3D Bow Charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"press_on_nails,purple_nails,gel_nails,gel_press_on_nails,coquette_nails,valentines_nails,cute_nails,pearl_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6580479228_th6r.jpg,https://juicegels.com/images/products/il_fullxfull.6628598655_8vj8.jpg,https://juicegels.com/images/products/il_fullxfull.6580479548_ffqd.jpg,https://juicegels.com/images/products/il_fullxfull.6628598665_2jp5.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0005?shape=Coffin&length=Medium,Juicegels_PeriwinklePearlsSet,Coffin,Medium\r
JUICEGELS-0072,Periwinkle Pearls Set,"Short almond Purple Set with French Tip Pearls and 3D Bow Charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"press_on_nails,purple_nails,gel_nails,gel_press_on_nails,coquette_nails,valentines_nails,cute_nails,pearl_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6580479228_th6r.jpg,https://juicegels.com/images/products/il_fullxfull.6628598655_8vj8.jpg,https://juicegels.com/images/products/il_fullxfull.6580479548_ffqd.jpg,https://juicegels.com/images/products/il_fullxfull.6628598665_2jp5.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0005?shape=Coffin&length=Long,Juicegels_PeriwinklePearlsSet,Coffin,Long\r
JUICEGELS-0073,Periwinkle Pearls Set,"Short almond Purple Set with French Tip Pearls and 3D Bow Charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"press_on_nails,purple_nails,gel_nails,gel_press_on_nails,coquette_nails,valentines_nails,cute_nails,pearl_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6580479228_th6r.jpg,https://juicegels.com/images/products/il_fullxfull.6628598655_8vj8.jpg,https://juicegels.com/images/products/il_fullxfull.6580479548_ffqd.jpg,https://juicegels.com/images/products/il_fullxfull.6628598665_2jp5.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0005?shape=Almond&length=Short,Juicegels_PeriwinklePearlsSet,Almond,Short\r
JUICEGELS-0074,Periwinkle Pearls Set,"Short almond Purple Set with French Tip Pearls and 3D Bow Charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"press_on_nails,purple_nails,gel_nails,gel_press_on_nails,coquette_nails,valentines_nails,cute_nails,pearl_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6580479228_th6r.jpg,https://juicegels.com/images/products/il_fullxfull.6628598655_8vj8.jpg,https://juicegels.com/images/products/il_fullxfull.6580479548_ffqd.jpg,https://juicegels.com/images/products/il_fullxfull.6628598665_2jp5.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0005?shape=Almond&length=Medium,Juicegels_PeriwinklePearlsSet,Almond,Medium\r
JUICEGELS-0075,Periwinkle Pearls Set,"Short almond Purple Set with French Tip Pearls and 3D Bow Charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"press_on_nails,purple_nails,gel_nails,gel_press_on_nails,coquette_nails,valentines_nails,cute_nails,pearl_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6580479228_th6r.jpg,https://juicegels.com/images/products/il_fullxfull.6628598655_8vj8.jpg,https://juicegels.com/images/products/il_fullxfull.6580479548_ffqd.jpg,https://juicegels.com/images/products/il_fullxfull.6628598665_2jp5.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0005?shape=Almond&length=Long,Juicegels_PeriwinklePearlsSet,Almond,Long\r
JUICEGELS-0076,Lover's Tips Set,"red french tips with reflective red heart and white 3d bow charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"valentines_nails,hearts_nails,gel_press_ons,valentines_press_ons,red_french_tip,press_on_nails",,https://juicegels.com/images/products/il_fullxfull.6628011079_sxnx.jpg,https://juicegels.com/images/products/il_fullxfull.6555521134_6psu.jpg,https://juicegels.com/images/products/il_fullxfull.6603641963_gyit.jpg,https://juicegels.com/images/products/il_fullxfull.6555521138_ki8l.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0006?shape=Square&length=Short,Juicegels_LoversTipsSet,Square,Short\r
JUICEGELS-0077,Lover's Tips Set,"red french tips with reflective red heart and white 3d bow charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"valentines_nails,hearts_nails,gel_press_ons,valentines_press_ons,red_french_tip,press_on_nails",,https://juicegels.com/images/products/il_fullxfull.6628011079_sxnx.jpg,https://juicegels.com/images/products/il_fullxfull.6555521134_6psu.jpg,https://juicegels.com/images/products/il_fullxfull.6603641963_gyit.jpg,https://juicegels.com/images/products/il_fullxfull.6555521138_ki8l.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0006?shape=Square&length=Medium,Juicegels_LoversTipsSet,Square,Medium\r
JUICEGELS-0078,Lover's Tips Set,"red french tips with reflective red heart and white 3d bow charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"valentines_nails,hearts_nails,gel_press_ons,valentines_press_ons,red_french_tip,press_on_nails",,https://juicegels.com/images/products/il_fullxfull.6628011079_sxnx.jpg,https://juicegels.com/images/products/il_fullxfull.6555521134_6psu.jpg,https://juicegels.com/images/products/il_fullxfull.6603641963_gyit.jpg,https://juicegels.com/images/products/il_fullxfull.6555521138_ki8l.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0006?shape=Square&length=Long,Juicegels_LoversTipsSet,Square,Long\r
JUICEGELS-0079,Lover's Tips Set,"red french tips with reflective red heart and white 3d bow charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"valentines_nails,hearts_nails,gel_press_ons,valentines_press_ons,red_french_tip,press_on_nails",,https://juicegels.com/images/products/il_fullxfull.6628011079_sxnx.jpg,https://juicegels.com/images/products/il_fullxfull.6555521134_6psu.jpg,https://juicegels.com/images/products/il_fullxfull.6603641963_gyit.jpg,https://juicegels.com/images/products/il_fullxfull.6555521138_ki8l.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0006?shape=Oval&length=Short,Juicegels_LoversTipsSet,Oval,Short\r
JUICEGELS-0080,Lover's Tips Set,"red french tips with reflective red heart and white 3d bow charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"valentines_nails,hearts_nails,gel_press_ons,valentines_press_ons,red_french_tip,press_on_nails",,https://juicegels.com/images/products/il_fullxfull.6628011079_sxnx.jpg,https://juicegels.com/images/products/il_fullxfull.6555521134_6psu.jpg,https://juicegels.com/images/products/il_fullxfull.6603641963_gyit.jpg,https://juicegels.com/images/products/il_fullxfull.6555521138_ki8l.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0006?shape=Oval&length=Medium,Juicegels_LoversTipsSet,Oval,Medium\r
JUICEGELS-0081,Lover's Tips Set,"red french tips with reflective red heart and white 3d bow charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"valentines_nails,hearts_nails,gel_press_ons,valentines_press_ons,red_french_tip,press_on_nails",,https://juicegels.com/images/products/il_fullxfull.6628011079_sxnx.jpg,https://juicegels.com/images/products/il_fullxfull.6555521134_6psu.jpg,https://juicegels.com/images/products/il_fullxfull.6603641963_gyit.jpg,https://juicegels.com/images/products/il_fullxfull.6555521138_ki8l.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0006?shape=Oval&length=Long,Juicegels_LoversTipsSet,Oval,Long\r
JUICEGELS-0082,Lover's Tips Set,"red french tips with reflective red heart and white 3d bow charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"valentines_nails,hearts_nails,gel_press_ons,valentines_press_ons,red_french_tip,press_on_nails",,https://juicegels.com/images/products/il_fullxfull.6628011079_sxnx.jpg,https://juicegels.com/images/products/il_fullxfull.6555521134_6psu.jpg,https://juicegels.com/images/products/il_fullxfull.6603641963_gyit.jpg,https://juicegels.com/images/products/il_fullxfull.6555521138_ki8l.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0006?shape=Stiletto&length=Short,Juicegels_LoversTipsSet,Stiletto,Short\r
JUICEGELS-0083,Lover's Tips Set,"red french tips with reflective red heart and white 3d bow charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"valentines_nails,hearts_nails,gel_press_ons,valentines_press_ons,red_french_tip,press_on_nails",,https://juicegels.com/images/products/il_fullxfull.6628011079_sxnx.jpg,https://juicegels.com/images/products/il_fullxfull.6555521134_6psu.jpg,https://juicegels.com/images/products/il_fullxfull.6603641963_gyit.jpg,https://juicegels.com/images/products/il_fullxfull.6555521138_ki8l.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0006?shape=Stiletto&length=Medium,Juicegels_LoversTipsSet,Stiletto,Medium\r
JUICEGELS-0084,Lover's Tips Set,"red french tips with reflective red heart and white 3d bow charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"valentines_nails,hearts_nails,gel_press_ons,valentines_press_ons,red_french_tip,press_on_nails",,https://juicegels.com/images/products/il_fullxfull.6628011079_sxnx.jpg,https://juicegels.com/images/products/il_fullxfull.6555521134_6psu.jpg,https://juicegels.com/images/products/il_fullxfull.6603641963_gyit.jpg,https://juicegels.com/images/products/il_fullxfull.6555521138_ki8l.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0006?shape=Stiletto&length=Long,Juicegels_LoversTipsSet,Stiletto,Long\r
JUICEGELS-0085,Lover's Tips Set,"red french tips with reflective red heart and white 3d bow charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"valentines_nails,hearts_nails,gel_press_ons,valentines_press_ons,red_french_tip,press_on_nails",,https://juicegels.com/images/products/il_fullxfull.6628011079_sxnx.jpg,https://juicegels.com/images/products/il_fullxfull.6555521134_6psu.jpg,https://juicegels.com/images/products/il_fullxfull.6603641963_gyit.jpg,https://juicegels.com/images/products/il_fullxfull.6555521138_ki8l.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0006?shape=Coffin&length=Short,Juicegels_LoversTipsSet,Coffin,Short\r
JUICEGELS-0086,Lover's Tips Set,"red french tips with reflective red heart and white 3d bow charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"valentines_nails,hearts_nails,gel_press_ons,valentines_press_ons,red_french_tip,press_on_nails",,https://juicegels.com/images/products/il_fullxfull.6628011079_sxnx.jpg,https://juicegels.com/images/products/il_fullxfull.6555521134_6psu.jpg,https://juicegels.com/images/products/il_fullxfull.6603641963_gyit.jpg,https://juicegels.com/images/products/il_fullxfull.6555521138_ki8l.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0006?shape=Coffin&length=Medium,Juicegels_LoversTipsSet,Coffin,Medium\r
JUICEGELS-0087,Lover's Tips Set,"red french tips with reflective red heart and white 3d bow charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"valentines_nails,hearts_nails,gel_press_ons,valentines_press_ons,red_french_tip,press_on_nails",,https://juicegels.com/images/products/il_fullxfull.6628011079_sxnx.jpg,https://juicegels.com/images/products/il_fullxfull.6555521134_6psu.jpg,https://juicegels.com/images/products/il_fullxfull.6603641963_gyit.jpg,https://juicegels.com/images/products/il_fullxfull.6555521138_ki8l.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0006?shape=Coffin&length=Long,Juicegels_LoversTipsSet,Coffin,Long\r
JUICEGELS-0088,Lover's Tips Set,"red french tips with reflective red heart and white 3d bow charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"valentines_nails,hearts_nails,gel_press_ons,valentines_press_ons,red_french_tip,press_on_nails",,https://juicegels.com/images/products/il_fullxfull.6628011079_sxnx.jpg,https://juicegels.com/images/products/il_fullxfull.6555521134_6psu.jpg,https://juicegels.com/images/products/il_fullxfull.6603641963_gyit.jpg,https://juicegels.com/images/products/il_fullxfull.6555521138_ki8l.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0006?shape=Almond&length=Short,Juicegels_LoversTipsSet,Almond,Short\r
JUICEGELS-0089,Lover's Tips Set,"red french tips with reflective red heart and white 3d bow charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"valentines_nails,hearts_nails,gel_press_ons,valentines_press_ons,red_french_tip,press_on_nails",,https://juicegels.com/images/products/il_fullxfull.6628011079_sxnx.jpg,https://juicegels.com/images/products/il_fullxfull.6555521134_6psu.jpg,https://juicegels.com/images/products/il_fullxfull.6603641963_gyit.jpg,https://juicegels.com/images/products/il_fullxfull.6555521138_ki8l.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0006?shape=Almond&length=Medium,Juicegels_LoversTipsSet,Almond,Medium\r
JUICEGELS-0090,Lover's Tips Set,"red french tips with reflective red heart and white 3d bow charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"valentines_nails,hearts_nails,gel_press_ons,valentines_press_ons,red_french_tip,press_on_nails",,https://juicegels.com/images/products/il_fullxfull.6628011079_sxnx.jpg,https://juicegels.com/images/products/il_fullxfull.6555521134_6psu.jpg,https://juicegels.com/images/products/il_fullxfull.6603641963_gyit.jpg,https://juicegels.com/images/products/il_fullxfull.6555521138_ki8l.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0006?shape=Almond&length=Long,Juicegels_LoversTipsSet,Almond,Long\r
JUICEGELS-0091,Soft Swirl set,"Nude base with blue straight tip and white graphic lining
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",8.5,GBP,20,"graphic_nails,gel_press_on_nails,gel_nails,press_on_nails,press_ons,nail_art",,https://juicegels.com/images/products/il_fullxfull.6555480732_g6qu.jpg,https://juicegels.com/images/products/il_fullxfull.6555480708_km34.jpg,https://juicegels.com/images/products/il_fullxfull.6555480704_fuyo.jpg,https://juicegels.com/images/products/il_fullxfull.6555480734_cj16.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0007?shape=Square&length=Short,Juicegels_SoftSwirlset,Square,Short\r
JUICEGELS-0092,Soft Swirl set,"Nude base with blue straight tip and white graphic lining
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",8.5,GBP,20,"graphic_nails,gel_press_on_nails,gel_nails,press_on_nails,press_ons,nail_art",,https://juicegels.com/images/products/il_fullxfull.6555480732_g6qu.jpg,https://juicegels.com/images/products/il_fullxfull.6555480708_km34.jpg,https://juicegels.com/images/products/il_fullxfull.6555480704_fuyo.jpg,https://juicegels.com/images/products/il_fullxfull.6555480734_cj16.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0007?shape=Square&length=Medium,Juicegels_SoftSwirlset,Square,Medium\r
JUICEGELS-0093,Soft Swirl set,"Nude base with blue straight tip and white graphic lining
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",8.5,GBP,20,"graphic_nails,gel_press_on_nails,gel_nails,press_on_nails,press_ons,nail_art",,https://juicegels.com/images/products/il_fullxfull.6555480732_g6qu.jpg,https://juicegels.com/images/products/il_fullxfull.6555480708_km34.jpg,https://juicegels.com/images/products/il_fullxfull.6555480704_fuyo.jpg,https://juicegels.com/images/products/il_fullxfull.6555480734_cj16.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0007?shape=Square&length=Long,Juicegels_SoftSwirlset,Square,Long\r
JUICEGELS-0094,Soft Swirl set,"Nude base with blue straight tip and white graphic lining
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",8.5,GBP,20,"graphic_nails,gel_press_on_nails,gel_nails,press_on_nails,press_ons,nail_art",,https://juicegels.com/images/products/il_fullxfull.6555480732_g6qu.jpg,https://juicegels.com/images/products/il_fullxfull.6555480708_km34.jpg,https://juicegels.com/images/products/il_fullxfull.6555480704_fuyo.jpg,https://juicegels.com/images/products/il_fullxfull.6555480734_cj16.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0007?shape=Oval&length=Short,Juicegels_SoftSwirlset,Oval,Short\r
JUICEGELS-0095,Soft Swirl set,"Nude base with blue straight tip and white graphic lining
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",8.5,GBP,20,"graphic_nails,gel_press_on_nails,gel_nails,press_on_nails,press_ons,nail_art",,https://juicegels.com/images/products/il_fullxfull.6555480732_g6qu.jpg,https://juicegels.com/images/products/il_fullxfull.6555480708_km34.jpg,https://juicegels.com/images/products/il_fullxfull.6555480704_fuyo.jpg,https://juicegels.com/images/products/il_fullxfull.6555480734_cj16.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0007?shape=Oval&length=Medium,Juicegels_SoftSwirlset,Oval,Medium\r
JUICEGELS-0096,Soft Swirl set,"Nude base with blue straight tip and white graphic lining
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",8.5,GBP,20,"graphic_nails,gel_press_on_nails,gel_nails,press_on_nails,press_ons,nail_art",,https://juicegels.com/images/products/il_fullxfull.6555480732_g6qu.jpg,https://juicegels.com/images/products/il_fullxfull.6555480708_km34.jpg,https://juicegels.com/images/products/il_fullxfull.6555480704_fuyo.jpg,https://juicegels.com/images/products/il_fullxfull.6555480734_cj16.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0007?shape=Oval&length=Long,Juicegels_SoftSwirlset,Oval,Long\r
JUICEGELS-0097,Soft Swirl set,"Nude base with blue straight tip and white graphic lining
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",8.5,GBP,20,"graphic_nails,gel_press_on_nails,gel_nails,press_on_nails,press_ons,nail_art",,https://juicegels.com/images/products/il_fullxfull.6555480732_g6qu.jpg,https://juicegels.com/images/products/il_fullxfull.6555480708_km34.jpg,https://juicegels.com/images/products/il_fullxfull.6555480704_fuyo.jpg,https://juicegels.com/images/products/il_fullxfull.6555480734_cj16.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0007?shape=Stiletto&length=Short,Juicegels_SoftSwirlset,Stiletto,Short\r
JUICEGELS-0098,Soft Swirl set,"Nude base with blue straight tip and white graphic lining
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",8.5,GBP,20,"graphic_nails,gel_press_on_nails,gel_nails,press_on_nails,press_ons,nail_art",,https://juicegels.com/images/products/il_fullxfull.6555480732_g6qu.jpg,https://juicegels.com/images/products/il_fullxfull.6555480708_km34.jpg,https://juicegels.com/images/products/il_fullxfull.6555480704_fuyo.jpg,https://juicegels.com/images/products/il_fullxfull.6555480734_cj16.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0007?shape=Stiletto&length=Medium,Juicegels_SoftSwirlset,Stiletto,Medium\r
JUICEGELS-0099,Soft Swirl set,"Nude base with blue straight tip and white graphic lining
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",8.5,GBP,20,"graphic_nails,gel_press_on_nails,gel_nails,press_on_nails,press_ons,nail_art",,https://juicegels.com/images/products/il_fullxfull.6555480732_g6qu.jpg,https://juicegels.com/images/products/il_fullxfull.6555480708_km34.jpg,https://juicegels.com/images/products/il_fullxfull.6555480704_fuyo.jpg,https://juicegels.com/images/products/il_fullxfull.6555480734_cj16.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0007?shape=Stiletto&length=Long,Juicegels_SoftSwirlset,Stiletto,Long\r
JUICEGELS-0100,Soft Swirl set,"Nude base with blue straight tip and white graphic lining
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",8.5,GBP,20,"graphic_nails,gel_press_on_nails,gel_nails,press_on_nails,press_ons,nail_art",,https://juicegels.com/images/products/il_fullxfull.6555480732_g6qu.jpg,https://juicegels.com/images/products/il_fullxfull.6555480708_km34.jpg,https://juicegels.com/images/products/il_fullxfull.6555480704_fuyo.jpg,https://juicegels.com/images/products/il_fullxfull.6555480734_cj16.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0007?shape=Coffin&length=Short,Juicegels_SoftSwirlset,Coffin,Short\r
JUICEGELS-0101,Soft Swirl set,"Nude base with blue straight tip and white graphic lining
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",8.5,GBP,20,"graphic_nails,gel_press_on_nails,gel_nails,press_on_nails,press_ons,nail_art",,https://juicegels.com/images/products/il_fullxfull.6555480732_g6qu.jpg,https://juicegels.com/images/products/il_fullxfull.6555480708_km34.jpg,https://juicegels.com/images/products/il_fullxfull.6555480704_fuyo.jpg,https://juicegels.com/images/products/il_fullxfull.6555480734_cj16.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0007?shape=Coffin&length=Medium,Juicegels_SoftSwirlset,Coffin,Medium\r
JUICEGELS-0102,Soft Swirl set,"Nude base with blue straight tip and white graphic lining
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",8.5,GBP,20,"graphic_nails,gel_press_on_nails,gel_nails,press_on_nails,press_ons,nail_art",,https://juicegels.com/images/products/il_fullxfull.6555480732_g6qu.jpg,https://juicegels.com/images/products/il_fullxfull.6555480708_km34.jpg,https://juicegels.com/images/products/il_fullxfull.6555480704_fuyo.jpg,https://juicegels.com/images/products/il_fullxfull.6555480734_cj16.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0007?shape=Coffin&length=Long,Juicegels_SoftSwirlset,Coffin,Long\r
JUICEGELS-0103,Soft Swirl set,"Nude base with blue straight tip and white graphic lining
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",8.5,GBP,20,"graphic_nails,gel_press_on_nails,gel_nails,press_on_nails,press_ons,nail_art",,https://juicegels.com/images/products/il_fullxfull.6555480732_g6qu.jpg,https://juicegels.com/images/products/il_fullxfull.6555480708_km34.jpg,https://juicegels.com/images/products/il_fullxfull.6555480704_fuyo.jpg,https://juicegels.com/images/products/il_fullxfull.6555480734_cj16.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0007?shape=Almond&length=Short,Juicegels_SoftSwirlset,Almond,Short\r
JUICEGELS-0104,Soft Swirl set,"Nude base with blue straight tip and white graphic lining
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",8.5,GBP,20,"graphic_nails,gel_press_on_nails,gel_nails,press_on_nails,press_ons,nail_art",,https://juicegels.com/images/products/il_fullxfull.6555480732_g6qu.jpg,https://juicegels.com/images/products/il_fullxfull.6555480708_km34.jpg,https://juicegels.com/images/products/il_fullxfull.6555480704_fuyo.jpg,https://juicegels.com/images/products/il_fullxfull.6555480734_cj16.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0007?shape=Almond&length=Medium,Juicegels_SoftSwirlset,Almond,Medium\r
JUICEGELS-0105,Soft Swirl set,"Nude base with blue straight tip and white graphic lining
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",8.5,GBP,20,"graphic_nails,gel_press_on_nails,gel_nails,press_on_nails,press_ons,nail_art",,https://juicegels.com/images/products/il_fullxfull.6555480732_g6qu.jpg,https://juicegels.com/images/products/il_fullxfull.6555480708_km34.jpg,https://juicegels.com/images/products/il_fullxfull.6555480704_fuyo.jpg,https://juicegels.com/images/products/il_fullxfull.6555480734_cj16.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0007?shape=Almond&length=Long,Juicegels_SoftSwirlset,Almond,Long\r
JUICEGELS-0106,Ballerina Blush Set,"Ballerina-inspired pale base with pearls, rose gold shimmer nail and 3d bow charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6555470178_rihh.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0008?shape=Square&length=Short,Juicegels_BallerinaBlushSet,Square,Short\r
JUICEGELS-0107,Ballerina Blush Set,"Ballerina-inspired pale base with pearls, rose gold shimmer nail and 3d bow charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6555470178_rihh.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0008?shape=Square&length=Medium,Juicegels_BallerinaBlushSet,Square,Medium\r
JUICEGELS-0108,Ballerina Blush Set,"Ballerina-inspired pale base with pearls, rose gold shimmer nail and 3d bow charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6555470178_rihh.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0008?shape=Square&length=Long,Juicegels_BallerinaBlushSet,Square,Long\r
JUICEGELS-0109,Ballerina Blush Set,"Ballerina-inspired pale base with pearls, rose gold shimmer nail and 3d bow charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6555470178_rihh.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0008?shape=Oval&length=Short,Juicegels_BallerinaBlushSet,Oval,Short\r
JUICEGELS-0110,Ballerina Blush Set,"Ballerina-inspired pale base with pearls, rose gold shimmer nail and 3d bow charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6555470178_rihh.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0008?shape=Oval&length=Medium,Juicegels_BallerinaBlushSet,Oval,Medium\r
JUICEGELS-0111,Ballerina Blush Set,"Ballerina-inspired pale base with pearls, rose gold shimmer nail and 3d bow charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6555470178_rihh.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0008?shape=Oval&length=Long,Juicegels_BallerinaBlushSet,Oval,Long\r
JUICEGELS-0112,Ballerina Blush Set,"Ballerina-inspired pale base with pearls, rose gold shimmer nail and 3d bow charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6555470178_rihh.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0008?shape=Stiletto&length=Short,Juicegels_BallerinaBlushSet,Stiletto,Short\r
JUICEGELS-0113,Ballerina Blush Set,"Ballerina-inspired pale base with pearls, rose gold shimmer nail and 3d bow charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6555470178_rihh.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0008?shape=Stiletto&length=Medium,Juicegels_BallerinaBlushSet,Stiletto,Medium\r
JUICEGELS-0114,Ballerina Blush Set,"Ballerina-inspired pale base with pearls, rose gold shimmer nail and 3d bow charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6555470178_rihh.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0008?shape=Stiletto&length=Long,Juicegels_BallerinaBlushSet,Stiletto,Long\r
JUICEGELS-0115,Ballerina Blush Set,"Ballerina-inspired pale base with pearls, rose gold shimmer nail and 3d bow charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6555470178_rihh.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0008?shape=Coffin&length=Short,Juicegels_BallerinaBlushSet,Coffin,Short\r
JUICEGELS-0116,Ballerina Blush Set,"Ballerina-inspired pale base with pearls, rose gold shimmer nail and 3d bow charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6555470178_rihh.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0008?shape=Coffin&length=Medium,Juicegels_BallerinaBlushSet,Coffin,Medium\r
JUICEGELS-0117,Ballerina Blush Set,"Ballerina-inspired pale base with pearls, rose gold shimmer nail and 3d bow charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6555470178_rihh.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0008?shape=Coffin&length=Long,Juicegels_BallerinaBlushSet,Coffin,Long\r
JUICEGELS-0118,Ballerina Blush Set,"Ballerina-inspired pale base with pearls, rose gold shimmer nail and 3d bow charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6555470178_rihh.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0008?shape=Almond&length=Short,Juicegels_BallerinaBlushSet,Almond,Short\r
JUICEGELS-0119,Ballerina Blush Set,"Ballerina-inspired pale base with pearls, rose gold shimmer nail and 3d bow charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6555470178_rihh.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0008?shape=Almond&length=Medium,Juicegels_BallerinaBlushSet,Almond,Medium\r
JUICEGELS-0120,Ballerina Blush Set,"Ballerina-inspired pale base with pearls, rose gold shimmer nail and 3d bow charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6555470178_rihh.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0008?shape=Almond&length=Long,Juicegels_BallerinaBlushSet,Almond,Long\r
JUICEGELS-0121,Bearly Blushing Set,"Clear coat, pink hearts, pearls, 3d pale pink bow, and 3d charm of a white bear
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.6603451077_fscj.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0009?shape=Square&length=Short,Juicegels_BearlyBlushingSet,Square,Short\r
JUICEGELS-0122,Bearly Blushing Set,"Clear coat, pink hearts, pearls, 3d pale pink bow, and 3d charm of a white bear
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.6603451077_fscj.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0009?shape=Square&length=Medium,Juicegels_BearlyBlushingSet,Square,Medium\r
JUICEGELS-0123,Bearly Blushing Set,"Clear coat, pink hearts, pearls, 3d pale pink bow, and 3d charm of a white bear
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.6603451077_fscj.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0009?shape=Square&length=Long,Juicegels_BearlyBlushingSet,Square,Long\r
JUICEGELS-0124,Bearly Blushing Set,"Clear coat, pink hearts, pearls, 3d pale pink bow, and 3d charm of a white bear
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.6603451077_fscj.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0009?shape=Oval&length=Short,Juicegels_BearlyBlushingSet,Oval,Short\r
JUICEGELS-0125,Bearly Blushing Set,"Clear coat, pink hearts, pearls, 3d pale pink bow, and 3d charm of a white bear
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.6603451077_fscj.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0009?shape=Oval&length=Medium,Juicegels_BearlyBlushingSet,Oval,Medium\r
JUICEGELS-0126,Bearly Blushing Set,"Clear coat, pink hearts, pearls, 3d pale pink bow, and 3d charm of a white bear
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.6603451077_fscj.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0009?shape=Oval&length=Long,Juicegels_BearlyBlushingSet,Oval,Long\r
JUICEGELS-0127,Bearly Blushing Set,"Clear coat, pink hearts, pearls, 3d pale pink bow, and 3d charm of a white bear
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.6603451077_fscj.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0009?shape=Stiletto&length=Short,Juicegels_BearlyBlushingSet,Stiletto,Short\r
JUICEGELS-0128,Bearly Blushing Set,"Clear coat, pink hearts, pearls, 3d pale pink bow, and 3d charm of a white bear
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.6603451077_fscj.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0009?shape=Stiletto&length=Medium,Juicegels_BearlyBlushingSet,Stiletto,Medium\r
JUICEGELS-0129,Bearly Blushing Set,"Clear coat, pink hearts, pearls, 3d pale pink bow, and 3d charm of a white bear
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.6603451077_fscj.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0009?shape=Stiletto&length=Long,Juicegels_BearlyBlushingSet,Stiletto,Long\r
JUICEGELS-0130,Bearly Blushing Set,"Clear coat, pink hearts, pearls, 3d pale pink bow, and 3d charm of a white bear
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.6603451077_fscj.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0009?shape=Coffin&length=Short,Juicegels_BearlyBlushingSet,Coffin,Short\r
JUICEGELS-0131,Bearly Blushing Set,"Clear coat, pink hearts, pearls, 3d pale pink bow, and 3d charm of a white bear
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.6603451077_fscj.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0009?shape=Coffin&length=Medium,Juicegels_BearlyBlushingSet,Coffin,Medium\r
JUICEGELS-0132,Bearly Blushing Set,"Clear coat, pink hearts, pearls, 3d pale pink bow, and 3d charm of a white bear
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.6603451077_fscj.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0009?shape=Coffin&length=Long,Juicegels_BearlyBlushingSet,Coffin,Long\r
JUICEGELS-0133,Bearly Blushing Set,"Clear coat, pink hearts, pearls, 3d pale pink bow, and 3d charm of a white bear
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.6603451077_fscj.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0009?shape=Almond&length=Short,Juicegels_BearlyBlushingSet,Almond,Short\r
JUICEGELS-0134,Bearly Blushing Set,"Clear coat, pink hearts, pearls, 3d pale pink bow, and 3d charm of a white bear
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.6603451077_fscj.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0009?shape=Almond&length=Medium,Juicegels_BearlyBlushingSet,Almond,Medium\r
JUICEGELS-0135,Bearly Blushing Set,"Clear coat, pink hearts, pearls, 3d pale pink bow, and 3d charm of a white bear
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",18,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.6603451077_fscj.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0009?shape=Almond&length=Long,Juicegels_BearlyBlushingSet,Almond,Long\r
JUICEGELS-0136,Modern Muse Set,"Cute abstract matte moment
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"modern_nails,art_nails,gel_press_ons,gel_nails,press_on_nails,cute_nails",,https://juicegels.com/images/products/il_fullxfull.6603378285_dlm0.jpg,https://juicegels.com/images/products/il_fullxfull.6555302746_9nm7.jpg,https://juicegels.com/images/products/il_fullxfull.6603423517_3e9n.jpg,https://juicegels.com/images/products/il_fullxfull.6555302744_b3nm.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0010?shape=Square&length=Short,Juicegels_ModernMuseSet,Square,Short\r
JUICEGELS-0137,Modern Muse Set,"Cute abstract matte moment
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"modern_nails,art_nails,gel_press_ons,gel_nails,press_on_nails,cute_nails",,https://juicegels.com/images/products/il_fullxfull.6603378285_dlm0.jpg,https://juicegels.com/images/products/il_fullxfull.6555302746_9nm7.jpg,https://juicegels.com/images/products/il_fullxfull.6603423517_3e9n.jpg,https://juicegels.com/images/products/il_fullxfull.6555302744_b3nm.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0010?shape=Square&length=Medium,Juicegels_ModernMuseSet,Square,Medium\r
JUICEGELS-0138,Modern Muse Set,"Cute abstract matte moment
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"modern_nails,art_nails,gel_press_ons,gel_nails,press_on_nails,cute_nails",,https://juicegels.com/images/products/il_fullxfull.6603378285_dlm0.jpg,https://juicegels.com/images/products/il_fullxfull.6555302746_9nm7.jpg,https://juicegels.com/images/products/il_fullxfull.6603423517_3e9n.jpg,https://juicegels.com/images/products/il_fullxfull.6555302744_b3nm.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0010?shape=Square&length=Long,Juicegels_ModernMuseSet,Square,Long\r
JUICEGELS-0139,Modern Muse Set,"Cute abstract matte moment
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"modern_nails,art_nails,gel_press_ons,gel_nails,press_on_nails,cute_nails",,https://juicegels.com/images/products/il_fullxfull.6603378285_dlm0.jpg,https://juicegels.com/images/products/il_fullxfull.6555302746_9nm7.jpg,https://juicegels.com/images/products/il_fullxfull.6603423517_3e9n.jpg,https://juicegels.com/images/products/il_fullxfull.6555302744_b3nm.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0010?shape=Oval&length=Short,Juicegels_ModernMuseSet,Oval,Short\r
JUICEGELS-0140,Modern Muse Set,"Cute abstract matte moment
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"modern_nails,art_nails,gel_press_ons,gel_nails,press_on_nails,cute_nails",,https://juicegels.com/images/products/il_fullxfull.6603378285_dlm0.jpg,https://juicegels.com/images/products/il_fullxfull.6555302746_9nm7.jpg,https://juicegels.com/images/products/il_fullxfull.6603423517_3e9n.jpg,https://juicegels.com/images/products/il_fullxfull.6555302744_b3nm.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0010?shape=Oval&length=Medium,Juicegels_ModernMuseSet,Oval,Medium\r
JUICEGELS-0141,Modern Muse Set,"Cute abstract matte moment
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"modern_nails,art_nails,gel_press_ons,gel_nails,press_on_nails,cute_nails",,https://juicegels.com/images/products/il_fullxfull.6603378285_dlm0.jpg,https://juicegels.com/images/products/il_fullxfull.6555302746_9nm7.jpg,https://juicegels.com/images/products/il_fullxfull.6603423517_3e9n.jpg,https://juicegels.com/images/products/il_fullxfull.6555302744_b3nm.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0010?shape=Oval&length=Long,Juicegels_ModernMuseSet,Oval,Long\r
JUICEGELS-0142,Modern Muse Set,"Cute abstract matte moment
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"modern_nails,art_nails,gel_press_ons,gel_nails,press_on_nails,cute_nails",,https://juicegels.com/images/products/il_fullxfull.6603378285_dlm0.jpg,https://juicegels.com/images/products/il_fullxfull.6555302746_9nm7.jpg,https://juicegels.com/images/products/il_fullxfull.6603423517_3e9n.jpg,https://juicegels.com/images/products/il_fullxfull.6555302744_b3nm.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0010?shape=Stiletto&length=Short,Juicegels_ModernMuseSet,Stiletto,Short\r
JUICEGELS-0143,Modern Muse Set,"Cute abstract matte moment
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"modern_nails,art_nails,gel_press_ons,gel_nails,press_on_nails,cute_nails",,https://juicegels.com/images/products/il_fullxfull.6603378285_dlm0.jpg,https://juicegels.com/images/products/il_fullxfull.6555302746_9nm7.jpg,https://juicegels.com/images/products/il_fullxfull.6603423517_3e9n.jpg,https://juicegels.com/images/products/il_fullxfull.6555302744_b3nm.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0010?shape=Stiletto&length=Medium,Juicegels_ModernMuseSet,Stiletto,Medium\r
JUICEGELS-0144,Modern Muse Set,"Cute abstract matte moment
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"modern_nails,art_nails,gel_press_ons,gel_nails,press_on_nails,cute_nails",,https://juicegels.com/images/products/il_fullxfull.6603378285_dlm0.jpg,https://juicegels.com/images/products/il_fullxfull.6555302746_9nm7.jpg,https://juicegels.com/images/products/il_fullxfull.6603423517_3e9n.jpg,https://juicegels.com/images/products/il_fullxfull.6555302744_b3nm.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0010?shape=Stiletto&length=Long,Juicegels_ModernMuseSet,Stiletto,Long\r
JUICEGELS-0145,Modern Muse Set,"Cute abstract matte moment
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"modern_nails,art_nails,gel_press_ons,gel_nails,press_on_nails,cute_nails",,https://juicegels.com/images/products/il_fullxfull.6603378285_dlm0.jpg,https://juicegels.com/images/products/il_fullxfull.6555302746_9nm7.jpg,https://juicegels.com/images/products/il_fullxfull.6603423517_3e9n.jpg,https://juicegels.com/images/products/il_fullxfull.6555302744_b3nm.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0010?shape=Coffin&length=Short,Juicegels_ModernMuseSet,Coffin,Short\r
JUICEGELS-0146,Modern Muse Set,"Cute abstract matte moment
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"modern_nails,art_nails,gel_press_ons,gel_nails,press_on_nails,cute_nails",,https://juicegels.com/images/products/il_fullxfull.6603378285_dlm0.jpg,https://juicegels.com/images/products/il_fullxfull.6555302746_9nm7.jpg,https://juicegels.com/images/products/il_fullxfull.6603423517_3e9n.jpg,https://juicegels.com/images/products/il_fullxfull.6555302744_b3nm.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0010?shape=Coffin&length=Medium,Juicegels_ModernMuseSet,Coffin,Medium\r
JUICEGELS-0147,Modern Muse Set,"Cute abstract matte moment
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"modern_nails,art_nails,gel_press_ons,gel_nails,press_on_nails,cute_nails",,https://juicegels.com/images/products/il_fullxfull.6603378285_dlm0.jpg,https://juicegels.com/images/products/il_fullxfull.6555302746_9nm7.jpg,https://juicegels.com/images/products/il_fullxfull.6603423517_3e9n.jpg,https://juicegels.com/images/products/il_fullxfull.6555302744_b3nm.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0010?shape=Coffin&length=Long,Juicegels_ModernMuseSet,Coffin,Long\r
JUICEGELS-0148,Modern Muse Set,"Cute abstract matte moment
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"modern_nails,art_nails,gel_press_ons,gel_nails,press_on_nails,cute_nails",,https://juicegels.com/images/products/il_fullxfull.6603378285_dlm0.jpg,https://juicegels.com/images/products/il_fullxfull.6555302746_9nm7.jpg,https://juicegels.com/images/products/il_fullxfull.6603423517_3e9n.jpg,https://juicegels.com/images/products/il_fullxfull.6555302744_b3nm.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0010?shape=Almond&length=Short,Juicegels_ModernMuseSet,Almond,Short\r
JUICEGELS-0149,Modern Muse Set,"Cute abstract matte moment
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"modern_nails,art_nails,gel_press_ons,gel_nails,press_on_nails,cute_nails",,https://juicegels.com/images/products/il_fullxfull.6603378285_dlm0.jpg,https://juicegels.com/images/products/il_fullxfull.6555302746_9nm7.jpg,https://juicegels.com/images/products/il_fullxfull.6603423517_3e9n.jpg,https://juicegels.com/images/products/il_fullxfull.6555302744_b3nm.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0010?shape=Almond&length=Medium,Juicegels_ModernMuseSet,Almond,Medium\r
JUICEGELS-0150,Modern Muse Set,"Cute abstract matte moment
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"modern_nails,art_nails,gel_press_ons,gel_nails,press_on_nails,cute_nails",,https://juicegels.com/images/products/il_fullxfull.6603378285_dlm0.jpg,https://juicegels.com/images/products/il_fullxfull.6555302746_9nm7.jpg,https://juicegels.com/images/products/il_fullxfull.6603423517_3e9n.jpg,https://juicegels.com/images/products/il_fullxfull.6555302744_b3nm.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0010?shape=Almond&length=Long,Juicegels_ModernMuseSet,Almond,Long\r
JUICEGELS-0151,Pink Bloom Set,"Pink Glitter Gel Press-On Nails with 3D Flower Charms

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the measuring method for true-to-fit sizes 
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"press_on_nails,gel_x_nails,pink_flower_nails,flower_nails,3dcharms",,https://juicegels.com/images/products/il_fullxfull.6551503786_402t.jpg,https://juicegels.com/images/products/il_fullxfull.6555240392_9bhe.jpg,https://juicegels.com/images/products/il_fullxfull.6555240538_cnmy.jpg,https://juicegels.com/images/products/il_fullxfull.6555240598_5fmt.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0011?shape=Square&length=Short,Juicegels_PinkBloomSet,Square,Short\r
JUICEGELS-0152,Pink Bloom Set,"Pink Glitter Gel Press-On Nails with 3D Flower Charms

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the measuring method for true-to-fit sizes 
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"press_on_nails,gel_x_nails,pink_flower_nails,flower_nails,3dcharms",,https://juicegels.com/images/products/il_fullxfull.6551503786_402t.jpg,https://juicegels.com/images/products/il_fullxfull.6555240392_9bhe.jpg,https://juicegels.com/images/products/il_fullxfull.6555240538_cnmy.jpg,https://juicegels.com/images/products/il_fullxfull.6555240598_5fmt.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0011?shape=Square&length=Medium,Juicegels_PinkBloomSet,Square,Medium\r
JUICEGELS-0153,Pink Bloom Set,"Pink Glitter Gel Press-On Nails with 3D Flower Charms

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the measuring method for true-to-fit sizes 
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"press_on_nails,gel_x_nails,pink_flower_nails,flower_nails,3dcharms",,https://juicegels.com/images/products/il_fullxfull.6551503786_402t.jpg,https://juicegels.com/images/products/il_fullxfull.6555240392_9bhe.jpg,https://juicegels.com/images/products/il_fullxfull.6555240538_cnmy.jpg,https://juicegels.com/images/products/il_fullxfull.6555240598_5fmt.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0011?shape=Square&length=Long,Juicegels_PinkBloomSet,Square,Long\r
JUICEGELS-0154,Pink Bloom Set,"Pink Glitter Gel Press-On Nails with 3D Flower Charms

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the measuring method for true-to-fit sizes 
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"press_on_nails,gel_x_nails,pink_flower_nails,flower_nails,3dcharms",,https://juicegels.com/images/products/il_fullxfull.6551503786_402t.jpg,https://juicegels.com/images/products/il_fullxfull.6555240392_9bhe.jpg,https://juicegels.com/images/products/il_fullxfull.6555240538_cnmy.jpg,https://juicegels.com/images/products/il_fullxfull.6555240598_5fmt.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0011?shape=Oval&length=Short,Juicegels_PinkBloomSet,Oval,Short\r
JUICEGELS-0155,Pink Bloom Set,"Pink Glitter Gel Press-On Nails with 3D Flower Charms

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the measuring method for true-to-fit sizes 
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"press_on_nails,gel_x_nails,pink_flower_nails,flower_nails,3dcharms",,https://juicegels.com/images/products/il_fullxfull.6551503786_402t.jpg,https://juicegels.com/images/products/il_fullxfull.6555240392_9bhe.jpg,https://juicegels.com/images/products/il_fullxfull.6555240538_cnmy.jpg,https://juicegels.com/images/products/il_fullxfull.6555240598_5fmt.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0011?shape=Oval&length=Medium,Juicegels_PinkBloomSet,Oval,Medium\r
JUICEGELS-0156,Pink Bloom Set,"Pink Glitter Gel Press-On Nails with 3D Flower Charms

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the measuring method for true-to-fit sizes 
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"press_on_nails,gel_x_nails,pink_flower_nails,flower_nails,3dcharms",,https://juicegels.com/images/products/il_fullxfull.6551503786_402t.jpg,https://juicegels.com/images/products/il_fullxfull.6555240392_9bhe.jpg,https://juicegels.com/images/products/il_fullxfull.6555240538_cnmy.jpg,https://juicegels.com/images/products/il_fullxfull.6555240598_5fmt.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0011?shape=Oval&length=Long,Juicegels_PinkBloomSet,Oval,Long\r
JUICEGELS-0157,Pink Bloom Set,"Pink Glitter Gel Press-On Nails with 3D Flower Charms

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the measuring method for true-to-fit sizes 
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"press_on_nails,gel_x_nails,pink_flower_nails,flower_nails,3dcharms",,https://juicegels.com/images/products/il_fullxfull.6551503786_402t.jpg,https://juicegels.com/images/products/il_fullxfull.6555240392_9bhe.jpg,https://juicegels.com/images/products/il_fullxfull.6555240538_cnmy.jpg,https://juicegels.com/images/products/il_fullxfull.6555240598_5fmt.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0011?shape=Stiletto&length=Short,Juicegels_PinkBloomSet,Stiletto,Short\r
JUICEGELS-0158,Pink Bloom Set,"Pink Glitter Gel Press-On Nails with 3D Flower Charms

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the measuring method for true-to-fit sizes 
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"press_on_nails,gel_x_nails,pink_flower_nails,flower_nails,3dcharms",,https://juicegels.com/images/products/il_fullxfull.6551503786_402t.jpg,https://juicegels.com/images/products/il_fullxfull.6555240392_9bhe.jpg,https://juicegels.com/images/products/il_fullxfull.6555240538_cnmy.jpg,https://juicegels.com/images/products/il_fullxfull.6555240598_5fmt.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0011?shape=Stiletto&length=Medium,Juicegels_PinkBloomSet,Stiletto,Medium\r
JUICEGELS-0159,Pink Bloom Set,"Pink Glitter Gel Press-On Nails with 3D Flower Charms

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the measuring method for true-to-fit sizes 
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"press_on_nails,gel_x_nails,pink_flower_nails,flower_nails,3dcharms",,https://juicegels.com/images/products/il_fullxfull.6551503786_402t.jpg,https://juicegels.com/images/products/il_fullxfull.6555240392_9bhe.jpg,https://juicegels.com/images/products/il_fullxfull.6555240538_cnmy.jpg,https://juicegels.com/images/products/il_fullxfull.6555240598_5fmt.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0011?shape=Stiletto&length=Long,Juicegels_PinkBloomSet,Stiletto,Long\r
JUICEGELS-0160,Pink Bloom Set,"Pink Glitter Gel Press-On Nails with 3D Flower Charms

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the measuring method for true-to-fit sizes 
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"press_on_nails,gel_x_nails,pink_flower_nails,flower_nails,3dcharms",,https://juicegels.com/images/products/il_fullxfull.6551503786_402t.jpg,https://juicegels.com/images/products/il_fullxfull.6555240392_9bhe.jpg,https://juicegels.com/images/products/il_fullxfull.6555240538_cnmy.jpg,https://juicegels.com/images/products/il_fullxfull.6555240598_5fmt.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0011?shape=Coffin&length=Short,Juicegels_PinkBloomSet,Coffin,Short\r
JUICEGELS-0161,Pink Bloom Set,"Pink Glitter Gel Press-On Nails with 3D Flower Charms

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the measuring method for true-to-fit sizes 
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"press_on_nails,gel_x_nails,pink_flower_nails,flower_nails,3dcharms",,https://juicegels.com/images/products/il_fullxfull.6551503786_402t.jpg,https://juicegels.com/images/products/il_fullxfull.6555240392_9bhe.jpg,https://juicegels.com/images/products/il_fullxfull.6555240538_cnmy.jpg,https://juicegels.com/images/products/il_fullxfull.6555240598_5fmt.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0011?shape=Coffin&length=Medium,Juicegels_PinkBloomSet,Coffin,Medium\r
JUICEGELS-0162,Pink Bloom Set,"Pink Glitter Gel Press-On Nails with 3D Flower Charms

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the measuring method for true-to-fit sizes 
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"press_on_nails,gel_x_nails,pink_flower_nails,flower_nails,3dcharms",,https://juicegels.com/images/products/il_fullxfull.6551503786_402t.jpg,https://juicegels.com/images/products/il_fullxfull.6555240392_9bhe.jpg,https://juicegels.com/images/products/il_fullxfull.6555240538_cnmy.jpg,https://juicegels.com/images/products/il_fullxfull.6555240598_5fmt.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0011?shape=Coffin&length=Long,Juicegels_PinkBloomSet,Coffin,Long\r
JUICEGELS-0163,Pink Bloom Set,"Pink Glitter Gel Press-On Nails with 3D Flower Charms

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the measuring method for true-to-fit sizes 
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"press_on_nails,gel_x_nails,pink_flower_nails,flower_nails,3dcharms",,https://juicegels.com/images/products/il_fullxfull.6551503786_402t.jpg,https://juicegels.com/images/products/il_fullxfull.6555240392_9bhe.jpg,https://juicegels.com/images/products/il_fullxfull.6555240538_cnmy.jpg,https://juicegels.com/images/products/il_fullxfull.6555240598_5fmt.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0011?shape=Almond&length=Short,Juicegels_PinkBloomSet,Almond,Short\r
JUICEGELS-0164,Pink Bloom Set,"Pink Glitter Gel Press-On Nails with 3D Flower Charms

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the measuring method for true-to-fit sizes 
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"press_on_nails,gel_x_nails,pink_flower_nails,flower_nails,3dcharms",,https://juicegels.com/images/products/il_fullxfull.6551503786_402t.jpg,https://juicegels.com/images/products/il_fullxfull.6555240392_9bhe.jpg,https://juicegels.com/images/products/il_fullxfull.6555240538_cnmy.jpg,https://juicegels.com/images/products/il_fullxfull.6555240598_5fmt.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0011?shape=Almond&length=Medium,Juicegels_PinkBloomSet,Almond,Medium\r
JUICEGELS-0165,Pink Bloom Set,"Pink Glitter Gel Press-On Nails with 3D Flower Charms

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the measuring method for true-to-fit sizes 
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"press_on_nails,gel_x_nails,pink_flower_nails,flower_nails,3dcharms",,https://juicegels.com/images/products/il_fullxfull.6551503786_402t.jpg,https://juicegels.com/images/products/il_fullxfull.6555240392_9bhe.jpg,https://juicegels.com/images/products/il_fullxfull.6555240538_cnmy.jpg,https://juicegels.com/images/products/il_fullxfull.6555240598_5fmt.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0011?shape=Almond&length=Long,Juicegels_PinkBloomSet,Almond,Long\r
JUICEGELS-0166,Love Dot Set,"White base with reflective hearts
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"valentines_nails,hearts_nails,vanetines_press_ons,gel_nails,heart_nails,heart_press_ons,cute_nails,press_on_nails",,https://juicegels.com/images/products/il_fullxfull.7169843447_8uol.jpg,https://juicegels.com/images/products/il_fullxfull.6603634427_4f3p.jpg,https://juicegels.com/images/products/il_fullxfull.6555513436_lwok.jpg,https://juicegels.com/images/products/il_fullxfull.6603634429_4r2h.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0012?shape=Square&length=Short,Juicegels_LoveDotSet,Square,Short\r
JUICEGELS-0167,Love Dot Set,"White base with reflective hearts
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"valentines_nails,hearts_nails,vanetines_press_ons,gel_nails,heart_nails,heart_press_ons,cute_nails,press_on_nails",,https://juicegels.com/images/products/il_fullxfull.7169843447_8uol.jpg,https://juicegels.com/images/products/il_fullxfull.6603634427_4f3p.jpg,https://juicegels.com/images/products/il_fullxfull.6555513436_lwok.jpg,https://juicegels.com/images/products/il_fullxfull.6603634429_4r2h.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0012?shape=Square&length=Medium,Juicegels_LoveDotSet,Square,Medium\r
JUICEGELS-0168,Love Dot Set,"White base with reflective hearts
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"valentines_nails,hearts_nails,vanetines_press_ons,gel_nails,heart_nails,heart_press_ons,cute_nails,press_on_nails",,https://juicegels.com/images/products/il_fullxfull.7169843447_8uol.jpg,https://juicegels.com/images/products/il_fullxfull.6603634427_4f3p.jpg,https://juicegels.com/images/products/il_fullxfull.6555513436_lwok.jpg,https://juicegels.com/images/products/il_fullxfull.6603634429_4r2h.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0012?shape=Square&length=Long,Juicegels_LoveDotSet,Square,Long\r
JUICEGELS-0169,Love Dot Set,"White base with reflective hearts
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"valentines_nails,hearts_nails,vanetines_press_ons,gel_nails,heart_nails,heart_press_ons,cute_nails,press_on_nails",,https://juicegels.com/images/products/il_fullxfull.7169843447_8uol.jpg,https://juicegels.com/images/products/il_fullxfull.6603634427_4f3p.jpg,https://juicegels.com/images/products/il_fullxfull.6555513436_lwok.jpg,https://juicegels.com/images/products/il_fullxfull.6603634429_4r2h.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0012?shape=Oval&length=Short,Juicegels_LoveDotSet,Oval,Short\r
JUICEGELS-0170,Love Dot Set,"White base with reflective hearts
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"valentines_nails,hearts_nails,vanetines_press_ons,gel_nails,heart_nails,heart_press_ons,cute_nails,press_on_nails",,https://juicegels.com/images/products/il_fullxfull.7169843447_8uol.jpg,https://juicegels.com/images/products/il_fullxfull.6603634427_4f3p.jpg,https://juicegels.com/images/products/il_fullxfull.6555513436_lwok.jpg,https://juicegels.com/images/products/il_fullxfull.6603634429_4r2h.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0012?shape=Oval&length=Medium,Juicegels_LoveDotSet,Oval,Medium\r
JUICEGELS-0171,Love Dot Set,"White base with reflective hearts
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"valentines_nails,hearts_nails,vanetines_press_ons,gel_nails,heart_nails,heart_press_ons,cute_nails,press_on_nails",,https://juicegels.com/images/products/il_fullxfull.7169843447_8uol.jpg,https://juicegels.com/images/products/il_fullxfull.6603634427_4f3p.jpg,https://juicegels.com/images/products/il_fullxfull.6555513436_lwok.jpg,https://juicegels.com/images/products/il_fullxfull.6603634429_4r2h.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0012?shape=Oval&length=Long,Juicegels_LoveDotSet,Oval,Long\r
JUICEGELS-0172,Love Dot Set,"White base with reflective hearts
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"valentines_nails,hearts_nails,vanetines_press_ons,gel_nails,heart_nails,heart_press_ons,cute_nails,press_on_nails",,https://juicegels.com/images/products/il_fullxfull.7169843447_8uol.jpg,https://juicegels.com/images/products/il_fullxfull.6603634427_4f3p.jpg,https://juicegels.com/images/products/il_fullxfull.6555513436_lwok.jpg,https://juicegels.com/images/products/il_fullxfull.6603634429_4r2h.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0012?shape=Stiletto&length=Short,Juicegels_LoveDotSet,Stiletto,Short\r
JUICEGELS-0173,Love Dot Set,"White base with reflective hearts
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"valentines_nails,hearts_nails,vanetines_press_ons,gel_nails,heart_nails,heart_press_ons,cute_nails,press_on_nails",,https://juicegels.com/images/products/il_fullxfull.7169843447_8uol.jpg,https://juicegels.com/images/products/il_fullxfull.6603634427_4f3p.jpg,https://juicegels.com/images/products/il_fullxfull.6555513436_lwok.jpg,https://juicegels.com/images/products/il_fullxfull.6603634429_4r2h.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0012?shape=Stiletto&length=Medium,Juicegels_LoveDotSet,Stiletto,Medium\r
JUICEGELS-0174,Love Dot Set,"White base with reflective hearts
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"valentines_nails,hearts_nails,vanetines_press_ons,gel_nails,heart_nails,heart_press_ons,cute_nails,press_on_nails",,https://juicegels.com/images/products/il_fullxfull.7169843447_8uol.jpg,https://juicegels.com/images/products/il_fullxfull.6603634427_4f3p.jpg,https://juicegels.com/images/products/il_fullxfull.6555513436_lwok.jpg,https://juicegels.com/images/products/il_fullxfull.6603634429_4r2h.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0012?shape=Stiletto&length=Long,Juicegels_LoveDotSet,Stiletto,Long\r
JUICEGELS-0175,Love Dot Set,"White base with reflective hearts
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"valentines_nails,hearts_nails,vanetines_press_ons,gel_nails,heart_nails,heart_press_ons,cute_nails,press_on_nails",,https://juicegels.com/images/products/il_fullxfull.7169843447_8uol.jpg,https://juicegels.com/images/products/il_fullxfull.6603634427_4f3p.jpg,https://juicegels.com/images/products/il_fullxfull.6555513436_lwok.jpg,https://juicegels.com/images/products/il_fullxfull.6603634429_4r2h.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0012?shape=Coffin&length=Short,Juicegels_LoveDotSet,Coffin,Short\r
JUICEGELS-0176,Love Dot Set,"White base with reflective hearts
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"valentines_nails,hearts_nails,vanetines_press_ons,gel_nails,heart_nails,heart_press_ons,cute_nails,press_on_nails",,https://juicegels.com/images/products/il_fullxfull.7169843447_8uol.jpg,https://juicegels.com/images/products/il_fullxfull.6603634427_4f3p.jpg,https://juicegels.com/images/products/il_fullxfull.6555513436_lwok.jpg,https://juicegels.com/images/products/il_fullxfull.6603634429_4r2h.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0012?shape=Coffin&length=Medium,Juicegels_LoveDotSet,Coffin,Medium\r
JUICEGELS-0177,Love Dot Set,"White base with reflective hearts
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"valentines_nails,hearts_nails,vanetines_press_ons,gel_nails,heart_nails,heart_press_ons,cute_nails,press_on_nails",,https://juicegels.com/images/products/il_fullxfull.7169843447_8uol.jpg,https://juicegels.com/images/products/il_fullxfull.6603634427_4f3p.jpg,https://juicegels.com/images/products/il_fullxfull.6555513436_lwok.jpg,https://juicegels.com/images/products/il_fullxfull.6603634429_4r2h.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0012?shape=Coffin&length=Long,Juicegels_LoveDotSet,Coffin,Long\r
JUICEGELS-0178,Love Dot Set,"White base with reflective hearts
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"valentines_nails,hearts_nails,vanetines_press_ons,gel_nails,heart_nails,heart_press_ons,cute_nails,press_on_nails",,https://juicegels.com/images/products/il_fullxfull.7169843447_8uol.jpg,https://juicegels.com/images/products/il_fullxfull.6603634427_4f3p.jpg,https://juicegels.com/images/products/il_fullxfull.6555513436_lwok.jpg,https://juicegels.com/images/products/il_fullxfull.6603634429_4r2h.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0012?shape=Almond&length=Short,Juicegels_LoveDotSet,Almond,Short\r
JUICEGELS-0179,Love Dot Set,"White base with reflective hearts
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"valentines_nails,hearts_nails,vanetines_press_ons,gel_nails,heart_nails,heart_press_ons,cute_nails,press_on_nails",,https://juicegels.com/images/products/il_fullxfull.7169843447_8uol.jpg,https://juicegels.com/images/products/il_fullxfull.6603634427_4f3p.jpg,https://juicegels.com/images/products/il_fullxfull.6555513436_lwok.jpg,https://juicegels.com/images/products/il_fullxfull.6603634429_4r2h.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0012?shape=Almond&length=Medium,Juicegels_LoveDotSet,Almond,Medium\r
JUICEGELS-0180,Love Dot Set,"White base with reflective hearts
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"valentines_nails,hearts_nails,vanetines_press_ons,gel_nails,heart_nails,heart_press_ons,cute_nails,press_on_nails",,https://juicegels.com/images/products/il_fullxfull.7169843447_8uol.jpg,https://juicegels.com/images/products/il_fullxfull.6603634427_4f3p.jpg,https://juicegels.com/images/products/il_fullxfull.6555513436_lwok.jpg,https://juicegels.com/images/products/il_fullxfull.6603634429_4r2h.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0012?shape=Almond&length=Long,Juicegels_LoveDotSet,Almond,Long\r
JUICEGELS-0181,BluePrint Set,"skin toned nail with blue graphic design and white outline
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",8.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6603541147_9xdr.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0013?shape=Square&length=Short,Juicegels_BluePrintSet,Square,Short\r
JUICEGELS-0182,BluePrint Set,"skin toned nail with blue graphic design and white outline
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",8.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6603541147_9xdr.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0013?shape=Square&length=Medium,Juicegels_BluePrintSet,Square,Medium\r
JUICEGELS-0183,BluePrint Set,"skin toned nail with blue graphic design and white outline
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",8.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6603541147_9xdr.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0013?shape=Square&length=Long,Juicegels_BluePrintSet,Square,Long\r
JUICEGELS-0184,BluePrint Set,"skin toned nail with blue graphic design and white outline
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",8.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6603541147_9xdr.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0013?shape=Oval&length=Short,Juicegels_BluePrintSet,Oval,Short\r
JUICEGELS-0185,BluePrint Set,"skin toned nail with blue graphic design and white outline
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",8.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6603541147_9xdr.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0013?shape=Oval&length=Medium,Juicegels_BluePrintSet,Oval,Medium\r
JUICEGELS-0186,BluePrint Set,"skin toned nail with blue graphic design and white outline
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",8.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6603541147_9xdr.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0013?shape=Oval&length=Long,Juicegels_BluePrintSet,Oval,Long\r
JUICEGELS-0187,BluePrint Set,"skin toned nail with blue graphic design and white outline
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",8.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6603541147_9xdr.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0013?shape=Stiletto&length=Short,Juicegels_BluePrintSet,Stiletto,Short\r
JUICEGELS-0188,BluePrint Set,"skin toned nail with blue graphic design and white outline
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",8.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6603541147_9xdr.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0013?shape=Stiletto&length=Medium,Juicegels_BluePrintSet,Stiletto,Medium\r
JUICEGELS-0189,BluePrint Set,"skin toned nail with blue graphic design and white outline
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",8.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6603541147_9xdr.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0013?shape=Stiletto&length=Long,Juicegels_BluePrintSet,Stiletto,Long\r
JUICEGELS-0190,BluePrint Set,"skin toned nail with blue graphic design and white outline
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",8.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6603541147_9xdr.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0013?shape=Coffin&length=Short,Juicegels_BluePrintSet,Coffin,Short\r
JUICEGELS-0191,BluePrint Set,"skin toned nail with blue graphic design and white outline
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",8.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6603541147_9xdr.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0013?shape=Coffin&length=Medium,Juicegels_BluePrintSet,Coffin,Medium\r
JUICEGELS-0192,BluePrint Set,"skin toned nail with blue graphic design and white outline
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",8.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6603541147_9xdr.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0013?shape=Coffin&length=Long,Juicegels_BluePrintSet,Coffin,Long\r
JUICEGELS-0193,BluePrint Set,"skin toned nail with blue graphic design and white outline
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",8.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6603541147_9xdr.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0013?shape=Almond&length=Short,Juicegels_BluePrintSet,Almond,Short\r
JUICEGELS-0194,BluePrint Set,"skin toned nail with blue graphic design and white outline
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",8.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6603541147_9xdr.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0013?shape=Almond&length=Medium,Juicegels_BluePrintSet,Almond,Medium\r
JUICEGELS-0195,BluePrint Set,"skin toned nail with blue graphic design and white outline
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",8.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6603541147_9xdr.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0013?shape=Almond&length=Long,Juicegels_BluePrintSet,Almond,Long\r
JUICEGELS-0196,Pearl Noir Set,"nude base nails with black french tips and black and pink bow accents with pearls

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"press_on_nails,gel_nails,black_coquette,dark_coquette_nails,black_pink_nails,bow_nails,lace_nails,black_french_tip,french_tip_nails",,https://juicegels.com/images/products/il_fullxfull.6938045689_5fbc.jpg,https://juicegels.com/images/products/il_fullxfull.6938045865_k4pr.jpg,https://juicegels.com/images/products/il_fullxfull.6890070012_iknk.jpg,https://juicegels.com/images/products/il_fullxfull.6938045883_ppzo.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0014?shape=Square&length=Short,Juicegels_PearlNoirSet,Square,Short\r
JUICEGELS-0197,Pearl Noir Set,"nude base nails with black french tips and black and pink bow accents with pearls

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"press_on_nails,gel_nails,black_coquette,dark_coquette_nails,black_pink_nails,bow_nails,lace_nails,black_french_tip,french_tip_nails",,https://juicegels.com/images/products/il_fullxfull.6938045689_5fbc.jpg,https://juicegels.com/images/products/il_fullxfull.6938045865_k4pr.jpg,https://juicegels.com/images/products/il_fullxfull.6890070012_iknk.jpg,https://juicegels.com/images/products/il_fullxfull.6938045883_ppzo.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0014?shape=Square&length=Medium,Juicegels_PearlNoirSet,Square,Medium\r
JUICEGELS-0198,Pearl Noir Set,"nude base nails with black french tips and black and pink bow accents with pearls

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"press_on_nails,gel_nails,black_coquette,dark_coquette_nails,black_pink_nails,bow_nails,lace_nails,black_french_tip,french_tip_nails",,https://juicegels.com/images/products/il_fullxfull.6938045689_5fbc.jpg,https://juicegels.com/images/products/il_fullxfull.6938045865_k4pr.jpg,https://juicegels.com/images/products/il_fullxfull.6890070012_iknk.jpg,https://juicegels.com/images/products/il_fullxfull.6938045883_ppzo.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0014?shape=Square&length=Long,Juicegels_PearlNoirSet,Square,Long\r
JUICEGELS-0199,Pearl Noir Set,"nude base nails with black french tips and black and pink bow accents with pearls

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"press_on_nails,gel_nails,black_coquette,dark_coquette_nails,black_pink_nails,bow_nails,lace_nails,black_french_tip,french_tip_nails",,https://juicegels.com/images/products/il_fullxfull.6938045689_5fbc.jpg,https://juicegels.com/images/products/il_fullxfull.6938045865_k4pr.jpg,https://juicegels.com/images/products/il_fullxfull.6890070012_iknk.jpg,https://juicegels.com/images/products/il_fullxfull.6938045883_ppzo.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0014?shape=Oval&length=Short,Juicegels_PearlNoirSet,Oval,Short\r
JUICEGELS-0200,Pearl Noir Set,"nude base nails with black french tips and black and pink bow accents with pearls

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"press_on_nails,gel_nails,black_coquette,dark_coquette_nails,black_pink_nails,bow_nails,lace_nails,black_french_tip,french_tip_nails",,https://juicegels.com/images/products/il_fullxfull.6938045689_5fbc.jpg,https://juicegels.com/images/products/il_fullxfull.6938045865_k4pr.jpg,https://juicegels.com/images/products/il_fullxfull.6890070012_iknk.jpg,https://juicegels.com/images/products/il_fullxfull.6938045883_ppzo.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0014?shape=Oval&length=Medium,Juicegels_PearlNoirSet,Oval,Medium\r
JUICEGELS-0201,Pearl Noir Set,"nude base nails with black french tips and black and pink bow accents with pearls

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"press_on_nails,gel_nails,black_coquette,dark_coquette_nails,black_pink_nails,bow_nails,lace_nails,black_french_tip,french_tip_nails",,https://juicegels.com/images/products/il_fullxfull.6938045689_5fbc.jpg,https://juicegels.com/images/products/il_fullxfull.6938045865_k4pr.jpg,https://juicegels.com/images/products/il_fullxfull.6890070012_iknk.jpg,https://juicegels.com/images/products/il_fullxfull.6938045883_ppzo.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0014?shape=Oval&length=Long,Juicegels_PearlNoirSet,Oval,Long\r
JUICEGELS-0202,Pearl Noir Set,"nude base nails with black french tips and black and pink bow accents with pearls

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"press_on_nails,gel_nails,black_coquette,dark_coquette_nails,black_pink_nails,bow_nails,lace_nails,black_french_tip,french_tip_nails",,https://juicegels.com/images/products/il_fullxfull.6938045689_5fbc.jpg,https://juicegels.com/images/products/il_fullxfull.6938045865_k4pr.jpg,https://juicegels.com/images/products/il_fullxfull.6890070012_iknk.jpg,https://juicegels.com/images/products/il_fullxfull.6938045883_ppzo.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0014?shape=Stiletto&length=Short,Juicegels_PearlNoirSet,Stiletto,Short\r
JUICEGELS-0203,Pearl Noir Set,"nude base nails with black french tips and black and pink bow accents with pearls

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"press_on_nails,gel_nails,black_coquette,dark_coquette_nails,black_pink_nails,bow_nails,lace_nails,black_french_tip,french_tip_nails",,https://juicegels.com/images/products/il_fullxfull.6938045689_5fbc.jpg,https://juicegels.com/images/products/il_fullxfull.6938045865_k4pr.jpg,https://juicegels.com/images/products/il_fullxfull.6890070012_iknk.jpg,https://juicegels.com/images/products/il_fullxfull.6938045883_ppzo.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0014?shape=Stiletto&length=Medium,Juicegels_PearlNoirSet,Stiletto,Medium\r
JUICEGELS-0204,Pearl Noir Set,"nude base nails with black french tips and black and pink bow accents with pearls

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"press_on_nails,gel_nails,black_coquette,dark_coquette_nails,black_pink_nails,bow_nails,lace_nails,black_french_tip,french_tip_nails",,https://juicegels.com/images/products/il_fullxfull.6938045689_5fbc.jpg,https://juicegels.com/images/products/il_fullxfull.6938045865_k4pr.jpg,https://juicegels.com/images/products/il_fullxfull.6890070012_iknk.jpg,https://juicegels.com/images/products/il_fullxfull.6938045883_ppzo.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0014?shape=Stiletto&length=Long,Juicegels_PearlNoirSet,Stiletto,Long\r
JUICEGELS-0205,Pearl Noir Set,"nude base nails with black french tips and black and pink bow accents with pearls

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"press_on_nails,gel_nails,black_coquette,dark_coquette_nails,black_pink_nails,bow_nails,lace_nails,black_french_tip,french_tip_nails",,https://juicegels.com/images/products/il_fullxfull.6938045689_5fbc.jpg,https://juicegels.com/images/products/il_fullxfull.6938045865_k4pr.jpg,https://juicegels.com/images/products/il_fullxfull.6890070012_iknk.jpg,https://juicegels.com/images/products/il_fullxfull.6938045883_ppzo.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0014?shape=Coffin&length=Short,Juicegels_PearlNoirSet,Coffin,Short\r
JUICEGELS-0206,Pearl Noir Set,"nude base nails with black french tips and black and pink bow accents with pearls

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"press_on_nails,gel_nails,black_coquette,dark_coquette_nails,black_pink_nails,bow_nails,lace_nails,black_french_tip,french_tip_nails",,https://juicegels.com/images/products/il_fullxfull.6938045689_5fbc.jpg,https://juicegels.com/images/products/il_fullxfull.6938045865_k4pr.jpg,https://juicegels.com/images/products/il_fullxfull.6890070012_iknk.jpg,https://juicegels.com/images/products/il_fullxfull.6938045883_ppzo.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0014?shape=Coffin&length=Medium,Juicegels_PearlNoirSet,Coffin,Medium\r
JUICEGELS-0207,Pearl Noir Set,"nude base nails with black french tips and black and pink bow accents with pearls

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"press_on_nails,gel_nails,black_coquette,dark_coquette_nails,black_pink_nails,bow_nails,lace_nails,black_french_tip,french_tip_nails",,https://juicegels.com/images/products/il_fullxfull.6938045689_5fbc.jpg,https://juicegels.com/images/products/il_fullxfull.6938045865_k4pr.jpg,https://juicegels.com/images/products/il_fullxfull.6890070012_iknk.jpg,https://juicegels.com/images/products/il_fullxfull.6938045883_ppzo.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0014?shape=Coffin&length=Long,Juicegels_PearlNoirSet,Coffin,Long\r
JUICEGELS-0208,Pearl Noir Set,"nude base nails with black french tips and black and pink bow accents with pearls

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"press_on_nails,gel_nails,black_coquette,dark_coquette_nails,black_pink_nails,bow_nails,lace_nails,black_french_tip,french_tip_nails",,https://juicegels.com/images/products/il_fullxfull.6938045689_5fbc.jpg,https://juicegels.com/images/products/il_fullxfull.6938045865_k4pr.jpg,https://juicegels.com/images/products/il_fullxfull.6890070012_iknk.jpg,https://juicegels.com/images/products/il_fullxfull.6938045883_ppzo.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0014?shape=Almond&length=Short,Juicegels_PearlNoirSet,Almond,Short\r
JUICEGELS-0209,Pearl Noir Set,"nude base nails with black french tips and black and pink bow accents with pearls

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"press_on_nails,gel_nails,black_coquette,dark_coquette_nails,black_pink_nails,bow_nails,lace_nails,black_french_tip,french_tip_nails",,https://juicegels.com/images/products/il_fullxfull.6938045689_5fbc.jpg,https://juicegels.com/images/products/il_fullxfull.6938045865_k4pr.jpg,https://juicegels.com/images/products/il_fullxfull.6890070012_iknk.jpg,https://juicegels.com/images/products/il_fullxfull.6938045883_ppzo.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0014?shape=Almond&length=Medium,Juicegels_PearlNoirSet,Almond,Medium\r
JUICEGELS-0210,Pearl Noir Set,"nude base nails with black french tips and black and pink bow accents with pearls

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"press_on_nails,gel_nails,black_coquette,dark_coquette_nails,black_pink_nails,bow_nails,lace_nails,black_french_tip,french_tip_nails",,https://juicegels.com/images/products/il_fullxfull.6938045689_5fbc.jpg,https://juicegels.com/images/products/il_fullxfull.6938045865_k4pr.jpg,https://juicegels.com/images/products/il_fullxfull.6890070012_iknk.jpg,https://juicegels.com/images/products/il_fullxfull.6938045883_ppzo.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0014?shape=Almond&length=Long,Juicegels_PearlNoirSet,Almond,Long\r
JUICEGELS-0211,Petal Flora Set,"pink nude french tip nails with 3d flower charms and heart charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"juice_gels,press_on_nails,press_ons,pink_nails,coquette_nails,cute_nails,flower_nails,pink_gel_nails,french_tip_nails",,https://juicegels.com/images/products/il_fullxfull.6890065478_rmd2.jpg,https://juicegels.com/images/products/il_fullxfull.6938040785_7t3v.jpg,https://juicegels.com/images/products/il_fullxfull.6890064702_10i7.jpg,https://juicegels.com/images/products/il_fullxfull.6890064706_s879.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0015?shape=Square&length=Short,Juicegels_PetalFloraSet,Square,Short\r
JUICEGELS-0212,Petal Flora Set,"pink nude french tip nails with 3d flower charms and heart charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"juice_gels,press_on_nails,press_ons,pink_nails,coquette_nails,cute_nails,flower_nails,pink_gel_nails,french_tip_nails",,https://juicegels.com/images/products/il_fullxfull.6890065478_rmd2.jpg,https://juicegels.com/images/products/il_fullxfull.6938040785_7t3v.jpg,https://juicegels.com/images/products/il_fullxfull.6890064702_10i7.jpg,https://juicegels.com/images/products/il_fullxfull.6890064706_s879.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0015?shape=Square&length=Medium,Juicegels_PetalFloraSet,Square,Medium\r
JUICEGELS-0213,Petal Flora Set,"pink nude french tip nails with 3d flower charms and heart charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"juice_gels,press_on_nails,press_ons,pink_nails,coquette_nails,cute_nails,flower_nails,pink_gel_nails,french_tip_nails",,https://juicegels.com/images/products/il_fullxfull.6890065478_rmd2.jpg,https://juicegels.com/images/products/il_fullxfull.6938040785_7t3v.jpg,https://juicegels.com/images/products/il_fullxfull.6890064702_10i7.jpg,https://juicegels.com/images/products/il_fullxfull.6890064706_s879.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0015?shape=Square&length=Long,Juicegels_PetalFloraSet,Square,Long\r
JUICEGELS-0214,Petal Flora Set,"pink nude french tip nails with 3d flower charms and heart charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"juice_gels,press_on_nails,press_ons,pink_nails,coquette_nails,cute_nails,flower_nails,pink_gel_nails,french_tip_nails",,https://juicegels.com/images/products/il_fullxfull.6890065478_rmd2.jpg,https://juicegels.com/images/products/il_fullxfull.6938040785_7t3v.jpg,https://juicegels.com/images/products/il_fullxfull.6890064702_10i7.jpg,https://juicegels.com/images/products/il_fullxfull.6890064706_s879.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0015?shape=Oval&length=Short,Juicegels_PetalFloraSet,Oval,Short\r
JUICEGELS-0215,Petal Flora Set,"pink nude french tip nails with 3d flower charms and heart charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"juice_gels,press_on_nails,press_ons,pink_nails,coquette_nails,cute_nails,flower_nails,pink_gel_nails,french_tip_nails",,https://juicegels.com/images/products/il_fullxfull.6890065478_rmd2.jpg,https://juicegels.com/images/products/il_fullxfull.6938040785_7t3v.jpg,https://juicegels.com/images/products/il_fullxfull.6890064702_10i7.jpg,https://juicegels.com/images/products/il_fullxfull.6890064706_s879.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0015?shape=Oval&length=Medium,Juicegels_PetalFloraSet,Oval,Medium\r
JUICEGELS-0216,Petal Flora Set,"pink nude french tip nails with 3d flower charms and heart charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"juice_gels,press_on_nails,press_ons,pink_nails,coquette_nails,cute_nails,flower_nails,pink_gel_nails,french_tip_nails",,https://juicegels.com/images/products/il_fullxfull.6890065478_rmd2.jpg,https://juicegels.com/images/products/il_fullxfull.6938040785_7t3v.jpg,https://juicegels.com/images/products/il_fullxfull.6890064702_10i7.jpg,https://juicegels.com/images/products/il_fullxfull.6890064706_s879.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0015?shape=Oval&length=Long,Juicegels_PetalFloraSet,Oval,Long\r
JUICEGELS-0217,Petal Flora Set,"pink nude french tip nails with 3d flower charms and heart charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"juice_gels,press_on_nails,press_ons,pink_nails,coquette_nails,cute_nails,flower_nails,pink_gel_nails,french_tip_nails",,https://juicegels.com/images/products/il_fullxfull.6890065478_rmd2.jpg,https://juicegels.com/images/products/il_fullxfull.6938040785_7t3v.jpg,https://juicegels.com/images/products/il_fullxfull.6890064702_10i7.jpg,https://juicegels.com/images/products/il_fullxfull.6890064706_s879.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0015?shape=Stiletto&length=Short,Juicegels_PetalFloraSet,Stiletto,Short\r
JUICEGELS-0218,Petal Flora Set,"pink nude french tip nails with 3d flower charms and heart charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"juice_gels,press_on_nails,press_ons,pink_nails,coquette_nails,cute_nails,flower_nails,pink_gel_nails,french_tip_nails",,https://juicegels.com/images/products/il_fullxfull.6890065478_rmd2.jpg,https://juicegels.com/images/products/il_fullxfull.6938040785_7t3v.jpg,https://juicegels.com/images/products/il_fullxfull.6890064702_10i7.jpg,https://juicegels.com/images/products/il_fullxfull.6890064706_s879.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0015?shape=Stiletto&length=Medium,Juicegels_PetalFloraSet,Stiletto,Medium\r
JUICEGELS-0219,Petal Flora Set,"pink nude french tip nails with 3d flower charms and heart charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"juice_gels,press_on_nails,press_ons,pink_nails,coquette_nails,cute_nails,flower_nails,pink_gel_nails,french_tip_nails",,https://juicegels.com/images/products/il_fullxfull.6890065478_rmd2.jpg,https://juicegels.com/images/products/il_fullxfull.6938040785_7t3v.jpg,https://juicegels.com/images/products/il_fullxfull.6890064702_10i7.jpg,https://juicegels.com/images/products/il_fullxfull.6890064706_s879.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0015?shape=Stiletto&length=Long,Juicegels_PetalFloraSet,Stiletto,Long\r
JUICEGELS-0220,Petal Flora Set,"pink nude french tip nails with 3d flower charms and heart charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"juice_gels,press_on_nails,press_ons,pink_nails,coquette_nails,cute_nails,flower_nails,pink_gel_nails,french_tip_nails",,https://juicegels.com/images/products/il_fullxfull.6890065478_rmd2.jpg,https://juicegels.com/images/products/il_fullxfull.6938040785_7t3v.jpg,https://juicegels.com/images/products/il_fullxfull.6890064702_10i7.jpg,https://juicegels.com/images/products/il_fullxfull.6890064706_s879.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0015?shape=Coffin&length=Short,Juicegels_PetalFloraSet,Coffin,Short\r
JUICEGELS-0221,Petal Flora Set,"pink nude french tip nails with 3d flower charms and heart charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"juice_gels,press_on_nails,press_ons,pink_nails,coquette_nails,cute_nails,flower_nails,pink_gel_nails,french_tip_nails",,https://juicegels.com/images/products/il_fullxfull.6890065478_rmd2.jpg,https://juicegels.com/images/products/il_fullxfull.6938040785_7t3v.jpg,https://juicegels.com/images/products/il_fullxfull.6890064702_10i7.jpg,https://juicegels.com/images/products/il_fullxfull.6890064706_s879.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0015?shape=Coffin&length=Medium,Juicegels_PetalFloraSet,Coffin,Medium\r
JUICEGELS-0222,Petal Flora Set,"pink nude french tip nails with 3d flower charms and heart charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"juice_gels,press_on_nails,press_ons,pink_nails,coquette_nails,cute_nails,flower_nails,pink_gel_nails,french_tip_nails",,https://juicegels.com/images/products/il_fullxfull.6890065478_rmd2.jpg,https://juicegels.com/images/products/il_fullxfull.6938040785_7t3v.jpg,https://juicegels.com/images/products/il_fullxfull.6890064702_10i7.jpg,https://juicegels.com/images/products/il_fullxfull.6890064706_s879.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0015?shape=Coffin&length=Long,Juicegels_PetalFloraSet,Coffin,Long\r
JUICEGELS-0223,Petal Flora Set,"pink nude french tip nails with 3d flower charms and heart charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"juice_gels,press_on_nails,press_ons,pink_nails,coquette_nails,cute_nails,flower_nails,pink_gel_nails,french_tip_nails",,https://juicegels.com/images/products/il_fullxfull.6890065478_rmd2.jpg,https://juicegels.com/images/products/il_fullxfull.6938040785_7t3v.jpg,https://juicegels.com/images/products/il_fullxfull.6890064702_10i7.jpg,https://juicegels.com/images/products/il_fullxfull.6890064706_s879.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0015?shape=Almond&length=Short,Juicegels_PetalFloraSet,Almond,Short\r
JUICEGELS-0224,Petal Flora Set,"pink nude french tip nails with 3d flower charms and heart charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"juice_gels,press_on_nails,press_ons,pink_nails,coquette_nails,cute_nails,flower_nails,pink_gel_nails,french_tip_nails",,https://juicegels.com/images/products/il_fullxfull.6890065478_rmd2.jpg,https://juicegels.com/images/products/il_fullxfull.6938040785_7t3v.jpg,https://juicegels.com/images/products/il_fullxfull.6890064702_10i7.jpg,https://juicegels.com/images/products/il_fullxfull.6890064706_s879.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0015?shape=Almond&length=Medium,Juicegels_PetalFloraSet,Almond,Medium\r
JUICEGELS-0225,Petal Flora Set,"pink nude french tip nails with 3d flower charms and heart charm

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"juice_gels,press_on_nails,press_ons,pink_nails,coquette_nails,cute_nails,flower_nails,pink_gel_nails,french_tip_nails",,https://juicegels.com/images/products/il_fullxfull.6890065478_rmd2.jpg,https://juicegels.com/images/products/il_fullxfull.6938040785_7t3v.jpg,https://juicegels.com/images/products/il_fullxfull.6890064702_10i7.jpg,https://juicegels.com/images/products/il_fullxfull.6890064706_s879.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0015?shape=Almond&length=Long,Juicegels_PetalFloraSet,Almond,Long\r
JUICEGELS-0226,Peach Blossom Set,"nude nails with cream french tips and 3d flowers and art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"korean_nails,press_on_nails,y2k_nails,flower_nails,peach_nails,summer_nails,gel_nails,juice_gels",,https://juicegels.com/images/products/il_fullxfull.6890059548_dukj.jpg,https://juicegels.com/images/products/il_fullxfull.6890059752_dmzw.jpg,https://juicegels.com/images/products/il_fullxfull.6890059758_g7hv.jpg,https://juicegels.com/images/products/il_fullxfull.6938035963_78ic.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0016?shape=Square&length=Short,Juicegels_PeachBlossomSet,Square,Short\r
JUICEGELS-0227,Peach Blossom Set,"nude nails with cream french tips and 3d flowers and art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"korean_nails,press_on_nails,y2k_nails,flower_nails,peach_nails,summer_nails,gel_nails,juice_gels",,https://juicegels.com/images/products/il_fullxfull.6890059548_dukj.jpg,https://juicegels.com/images/products/il_fullxfull.6890059752_dmzw.jpg,https://juicegels.com/images/products/il_fullxfull.6890059758_g7hv.jpg,https://juicegels.com/images/products/il_fullxfull.6938035963_78ic.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0016?shape=Square&length=Medium,Juicegels_PeachBlossomSet,Square,Medium\r
JUICEGELS-0228,Peach Blossom Set,"nude nails with cream french tips and 3d flowers and art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"korean_nails,press_on_nails,y2k_nails,flower_nails,peach_nails,summer_nails,gel_nails,juice_gels",,https://juicegels.com/images/products/il_fullxfull.6890059548_dukj.jpg,https://juicegels.com/images/products/il_fullxfull.6890059752_dmzw.jpg,https://juicegels.com/images/products/il_fullxfull.6890059758_g7hv.jpg,https://juicegels.com/images/products/il_fullxfull.6938035963_78ic.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0016?shape=Square&length=Long,Juicegels_PeachBlossomSet,Square,Long\r
JUICEGELS-0229,Peach Blossom Set,"nude nails with cream french tips and 3d flowers and art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"korean_nails,press_on_nails,y2k_nails,flower_nails,peach_nails,summer_nails,gel_nails,juice_gels",,https://juicegels.com/images/products/il_fullxfull.6890059548_dukj.jpg,https://juicegels.com/images/products/il_fullxfull.6890059752_dmzw.jpg,https://juicegels.com/images/products/il_fullxfull.6890059758_g7hv.jpg,https://juicegels.com/images/products/il_fullxfull.6938035963_78ic.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0016?shape=Oval&length=Short,Juicegels_PeachBlossomSet,Oval,Short\r
JUICEGELS-0230,Peach Blossom Set,"nude nails with cream french tips and 3d flowers and art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"korean_nails,press_on_nails,y2k_nails,flower_nails,peach_nails,summer_nails,gel_nails,juice_gels",,https://juicegels.com/images/products/il_fullxfull.6890059548_dukj.jpg,https://juicegels.com/images/products/il_fullxfull.6890059752_dmzw.jpg,https://juicegels.com/images/products/il_fullxfull.6890059758_g7hv.jpg,https://juicegels.com/images/products/il_fullxfull.6938035963_78ic.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0016?shape=Oval&length=Medium,Juicegels_PeachBlossomSet,Oval,Medium\r
JUICEGELS-0231,Peach Blossom Set,"nude nails with cream french tips and 3d flowers and art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"korean_nails,press_on_nails,y2k_nails,flower_nails,peach_nails,summer_nails,gel_nails,juice_gels",,https://juicegels.com/images/products/il_fullxfull.6890059548_dukj.jpg,https://juicegels.com/images/products/il_fullxfull.6890059752_dmzw.jpg,https://juicegels.com/images/products/il_fullxfull.6890059758_g7hv.jpg,https://juicegels.com/images/products/il_fullxfull.6938035963_78ic.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0016?shape=Oval&length=Long,Juicegels_PeachBlossomSet,Oval,Long\r
JUICEGELS-0232,Peach Blossom Set,"nude nails with cream french tips and 3d flowers and art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"korean_nails,press_on_nails,y2k_nails,flower_nails,peach_nails,summer_nails,gel_nails,juice_gels",,https://juicegels.com/images/products/il_fullxfull.6890059548_dukj.jpg,https://juicegels.com/images/products/il_fullxfull.6890059752_dmzw.jpg,https://juicegels.com/images/products/il_fullxfull.6890059758_g7hv.jpg,https://juicegels.com/images/products/il_fullxfull.6938035963_78ic.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0016?shape=Stiletto&length=Short,Juicegels_PeachBlossomSet,Stiletto,Short\r
JUICEGELS-0233,Peach Blossom Set,"nude nails with cream french tips and 3d flowers and art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"korean_nails,press_on_nails,y2k_nails,flower_nails,peach_nails,summer_nails,gel_nails,juice_gels",,https://juicegels.com/images/products/il_fullxfull.6890059548_dukj.jpg,https://juicegels.com/images/products/il_fullxfull.6890059752_dmzw.jpg,https://juicegels.com/images/products/il_fullxfull.6890059758_g7hv.jpg,https://juicegels.com/images/products/il_fullxfull.6938035963_78ic.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0016?shape=Stiletto&length=Medium,Juicegels_PeachBlossomSet,Stiletto,Medium\r
JUICEGELS-0234,Peach Blossom Set,"nude nails with cream french tips and 3d flowers and art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"korean_nails,press_on_nails,y2k_nails,flower_nails,peach_nails,summer_nails,gel_nails,juice_gels",,https://juicegels.com/images/products/il_fullxfull.6890059548_dukj.jpg,https://juicegels.com/images/products/il_fullxfull.6890059752_dmzw.jpg,https://juicegels.com/images/products/il_fullxfull.6890059758_g7hv.jpg,https://juicegels.com/images/products/il_fullxfull.6938035963_78ic.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0016?shape=Stiletto&length=Long,Juicegels_PeachBlossomSet,Stiletto,Long\r
JUICEGELS-0235,Peach Blossom Set,"nude nails with cream french tips and 3d flowers and art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"korean_nails,press_on_nails,y2k_nails,flower_nails,peach_nails,summer_nails,gel_nails,juice_gels",,https://juicegels.com/images/products/il_fullxfull.6890059548_dukj.jpg,https://juicegels.com/images/products/il_fullxfull.6890059752_dmzw.jpg,https://juicegels.com/images/products/il_fullxfull.6890059758_g7hv.jpg,https://juicegels.com/images/products/il_fullxfull.6938035963_78ic.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0016?shape=Coffin&length=Short,Juicegels_PeachBlossomSet,Coffin,Short\r
JUICEGELS-0236,Peach Blossom Set,"nude nails with cream french tips and 3d flowers and art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"korean_nails,press_on_nails,y2k_nails,flower_nails,peach_nails,summer_nails,gel_nails,juice_gels",,https://juicegels.com/images/products/il_fullxfull.6890059548_dukj.jpg,https://juicegels.com/images/products/il_fullxfull.6890059752_dmzw.jpg,https://juicegels.com/images/products/il_fullxfull.6890059758_g7hv.jpg,https://juicegels.com/images/products/il_fullxfull.6938035963_78ic.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0016?shape=Coffin&length=Medium,Juicegels_PeachBlossomSet,Coffin,Medium\r
JUICEGELS-0237,Peach Blossom Set,"nude nails with cream french tips and 3d flowers and art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"korean_nails,press_on_nails,y2k_nails,flower_nails,peach_nails,summer_nails,gel_nails,juice_gels",,https://juicegels.com/images/products/il_fullxfull.6890059548_dukj.jpg,https://juicegels.com/images/products/il_fullxfull.6890059752_dmzw.jpg,https://juicegels.com/images/products/il_fullxfull.6890059758_g7hv.jpg,https://juicegels.com/images/products/il_fullxfull.6938035963_78ic.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0016?shape=Coffin&length=Long,Juicegels_PeachBlossomSet,Coffin,Long\r
JUICEGELS-0238,Peach Blossom Set,"nude nails with cream french tips and 3d flowers and art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"korean_nails,press_on_nails,y2k_nails,flower_nails,peach_nails,summer_nails,gel_nails,juice_gels",,https://juicegels.com/images/products/il_fullxfull.6890059548_dukj.jpg,https://juicegels.com/images/products/il_fullxfull.6890059752_dmzw.jpg,https://juicegels.com/images/products/il_fullxfull.6890059758_g7hv.jpg,https://juicegels.com/images/products/il_fullxfull.6938035963_78ic.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0016?shape=Almond&length=Short,Juicegels_PeachBlossomSet,Almond,Short\r
JUICEGELS-0239,Peach Blossom Set,"nude nails with cream french tips and 3d flowers and art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"korean_nails,press_on_nails,y2k_nails,flower_nails,peach_nails,summer_nails,gel_nails,juice_gels",,https://juicegels.com/images/products/il_fullxfull.6890059548_dukj.jpg,https://juicegels.com/images/products/il_fullxfull.6890059752_dmzw.jpg,https://juicegels.com/images/products/il_fullxfull.6890059758_g7hv.jpg,https://juicegels.com/images/products/il_fullxfull.6938035963_78ic.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0016?shape=Almond&length=Medium,Juicegels_PeachBlossomSet,Almond,Medium\r
JUICEGELS-0240,Peach Blossom Set,"nude nails with cream french tips and 3d flowers and art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"korean_nails,press_on_nails,y2k_nails,flower_nails,peach_nails,summer_nails,gel_nails,juice_gels",,https://juicegels.com/images/products/il_fullxfull.6890059548_dukj.jpg,https://juicegels.com/images/products/il_fullxfull.6890059752_dmzw.jpg,https://juicegels.com/images/products/il_fullxfull.6890059758_g7hv.jpg,https://juicegels.com/images/products/il_fullxfull.6938035963_78ic.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0016?shape=Almond&length=Long,Juicegels_PeachBlossomSet,Almond,Long\r
JUICEGELS-0241,Pink Opulence Set,"Pink jelly almond nails with gold accents and 3d gold nail charms

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"press_on_nails,pink_nails,pink_gold_nails,almond_nails,y2k_nails,coquette_nails,press_ons,gel_nails,korean_nails",,https://juicegels.com/images/products/il_fullxfull.6890054642_m96u.jpg,https://juicegels.com/images/products/il_fullxfull.6938030955_spes.jpg,https://juicegels.com/images/products/il_fullxfull.6890054886_k3up.jpg,https://juicegels.com/images/products/il_fullxfull.6938030973_134d.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0017?shape=Square&length=Short,Juicegels_PinkOpulenceSet,Square,Short\r
JUICEGELS-0242,Pink Opulence Set,"Pink jelly almond nails with gold accents and 3d gold nail charms

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"press_on_nails,pink_nails,pink_gold_nails,almond_nails,y2k_nails,coquette_nails,press_ons,gel_nails,korean_nails",,https://juicegels.com/images/products/il_fullxfull.6890054642_m96u.jpg,https://juicegels.com/images/products/il_fullxfull.6938030955_spes.jpg,https://juicegels.com/images/products/il_fullxfull.6890054886_k3up.jpg,https://juicegels.com/images/products/il_fullxfull.6938030973_134d.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0017?shape=Square&length=Medium,Juicegels_PinkOpulenceSet,Square,Medium\r
JUICEGELS-0243,Pink Opulence Set,"Pink jelly almond nails with gold accents and 3d gold nail charms

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"press_on_nails,pink_nails,pink_gold_nails,almond_nails,y2k_nails,coquette_nails,press_ons,gel_nails,korean_nails",,https://juicegels.com/images/products/il_fullxfull.6890054642_m96u.jpg,https://juicegels.com/images/products/il_fullxfull.6938030955_spes.jpg,https://juicegels.com/images/products/il_fullxfull.6890054886_k3up.jpg,https://juicegels.com/images/products/il_fullxfull.6938030973_134d.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0017?shape=Square&length=Long,Juicegels_PinkOpulenceSet,Square,Long\r
JUICEGELS-0244,Pink Opulence Set,"Pink jelly almond nails with gold accents and 3d gold nail charms

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"press_on_nails,pink_nails,pink_gold_nails,almond_nails,y2k_nails,coquette_nails,press_ons,gel_nails,korean_nails",,https://juicegels.com/images/products/il_fullxfull.6890054642_m96u.jpg,https://juicegels.com/images/products/il_fullxfull.6938030955_spes.jpg,https://juicegels.com/images/products/il_fullxfull.6890054886_k3up.jpg,https://juicegels.com/images/products/il_fullxfull.6938030973_134d.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0017?shape=Oval&length=Short,Juicegels_PinkOpulenceSet,Oval,Short\r
JUICEGELS-0245,Pink Opulence Set,"Pink jelly almond nails with gold accents and 3d gold nail charms

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"press_on_nails,pink_nails,pink_gold_nails,almond_nails,y2k_nails,coquette_nails,press_ons,gel_nails,korean_nails",,https://juicegels.com/images/products/il_fullxfull.6890054642_m96u.jpg,https://juicegels.com/images/products/il_fullxfull.6938030955_spes.jpg,https://juicegels.com/images/products/il_fullxfull.6890054886_k3up.jpg,https://juicegels.com/images/products/il_fullxfull.6938030973_134d.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0017?shape=Oval&length=Medium,Juicegels_PinkOpulenceSet,Oval,Medium\r
JUICEGELS-0246,Pink Opulence Set,"Pink jelly almond nails with gold accents and 3d gold nail charms

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"press_on_nails,pink_nails,pink_gold_nails,almond_nails,y2k_nails,coquette_nails,press_ons,gel_nails,korean_nails",,https://juicegels.com/images/products/il_fullxfull.6890054642_m96u.jpg,https://juicegels.com/images/products/il_fullxfull.6938030955_spes.jpg,https://juicegels.com/images/products/il_fullxfull.6890054886_k3up.jpg,https://juicegels.com/images/products/il_fullxfull.6938030973_134d.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0017?shape=Oval&length=Long,Juicegels_PinkOpulenceSet,Oval,Long\r
JUICEGELS-0247,Pink Opulence Set,"Pink jelly almond nails with gold accents and 3d gold nail charms

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"press_on_nails,pink_nails,pink_gold_nails,almond_nails,y2k_nails,coquette_nails,press_ons,gel_nails,korean_nails",,https://juicegels.com/images/products/il_fullxfull.6890054642_m96u.jpg,https://juicegels.com/images/products/il_fullxfull.6938030955_spes.jpg,https://juicegels.com/images/products/il_fullxfull.6890054886_k3up.jpg,https://juicegels.com/images/products/il_fullxfull.6938030973_134d.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0017?shape=Stiletto&length=Short,Juicegels_PinkOpulenceSet,Stiletto,Short\r
JUICEGELS-0248,Pink Opulence Set,"Pink jelly almond nails with gold accents and 3d gold nail charms

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"press_on_nails,pink_nails,pink_gold_nails,almond_nails,y2k_nails,coquette_nails,press_ons,gel_nails,korean_nails",,https://juicegels.com/images/products/il_fullxfull.6890054642_m96u.jpg,https://juicegels.com/images/products/il_fullxfull.6938030955_spes.jpg,https://juicegels.com/images/products/il_fullxfull.6890054886_k3up.jpg,https://juicegels.com/images/products/il_fullxfull.6938030973_134d.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0017?shape=Stiletto&length=Medium,Juicegels_PinkOpulenceSet,Stiletto,Medium\r
JUICEGELS-0249,Pink Opulence Set,"Pink jelly almond nails with gold accents and 3d gold nail charms

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"press_on_nails,pink_nails,pink_gold_nails,almond_nails,y2k_nails,coquette_nails,press_ons,gel_nails,korean_nails",,https://juicegels.com/images/products/il_fullxfull.6890054642_m96u.jpg,https://juicegels.com/images/products/il_fullxfull.6938030955_spes.jpg,https://juicegels.com/images/products/il_fullxfull.6890054886_k3up.jpg,https://juicegels.com/images/products/il_fullxfull.6938030973_134d.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0017?shape=Stiletto&length=Long,Juicegels_PinkOpulenceSet,Stiletto,Long\r
JUICEGELS-0250,Pink Opulence Set,"Pink jelly almond nails with gold accents and 3d gold nail charms

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"press_on_nails,pink_nails,pink_gold_nails,almond_nails,y2k_nails,coquette_nails,press_ons,gel_nails,korean_nails",,https://juicegels.com/images/products/il_fullxfull.6890054642_m96u.jpg,https://juicegels.com/images/products/il_fullxfull.6938030955_spes.jpg,https://juicegels.com/images/products/il_fullxfull.6890054886_k3up.jpg,https://juicegels.com/images/products/il_fullxfull.6938030973_134d.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0017?shape=Coffin&length=Short,Juicegels_PinkOpulenceSet,Coffin,Short\r
JUICEGELS-0251,Pink Opulence Set,"Pink jelly almond nails with gold accents and 3d gold nail charms

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"press_on_nails,pink_nails,pink_gold_nails,almond_nails,y2k_nails,coquette_nails,press_ons,gel_nails,korean_nails",,https://juicegels.com/images/products/il_fullxfull.6890054642_m96u.jpg,https://juicegels.com/images/products/il_fullxfull.6938030955_spes.jpg,https://juicegels.com/images/products/il_fullxfull.6890054886_k3up.jpg,https://juicegels.com/images/products/il_fullxfull.6938030973_134d.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0017?shape=Coffin&length=Medium,Juicegels_PinkOpulenceSet,Coffin,Medium\r
JUICEGELS-0252,Pink Opulence Set,"Pink jelly almond nails with gold accents and 3d gold nail charms

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"press_on_nails,pink_nails,pink_gold_nails,almond_nails,y2k_nails,coquette_nails,press_ons,gel_nails,korean_nails",,https://juicegels.com/images/products/il_fullxfull.6890054642_m96u.jpg,https://juicegels.com/images/products/il_fullxfull.6938030955_spes.jpg,https://juicegels.com/images/products/il_fullxfull.6890054886_k3up.jpg,https://juicegels.com/images/products/il_fullxfull.6938030973_134d.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0017?shape=Coffin&length=Long,Juicegels_PinkOpulenceSet,Coffin,Long\r
JUICEGELS-0253,Pink Opulence Set,"Pink jelly almond nails with gold accents and 3d gold nail charms

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"press_on_nails,pink_nails,pink_gold_nails,almond_nails,y2k_nails,coquette_nails,press_ons,gel_nails,korean_nails",,https://juicegels.com/images/products/il_fullxfull.6890054642_m96u.jpg,https://juicegels.com/images/products/il_fullxfull.6938030955_spes.jpg,https://juicegels.com/images/products/il_fullxfull.6890054886_k3up.jpg,https://juicegels.com/images/products/il_fullxfull.6938030973_134d.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0017?shape=Almond&length=Short,Juicegels_PinkOpulenceSet,Almond,Short\r
JUICEGELS-0254,Pink Opulence Set,"Pink jelly almond nails with gold accents and 3d gold nail charms

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"press_on_nails,pink_nails,pink_gold_nails,almond_nails,y2k_nails,coquette_nails,press_ons,gel_nails,korean_nails",,https://juicegels.com/images/products/il_fullxfull.6890054642_m96u.jpg,https://juicegels.com/images/products/il_fullxfull.6938030955_spes.jpg,https://juicegels.com/images/products/il_fullxfull.6890054886_k3up.jpg,https://juicegels.com/images/products/il_fullxfull.6938030973_134d.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0017?shape=Almond&length=Medium,Juicegels_PinkOpulenceSet,Almond,Medium\r
JUICEGELS-0255,Pink Opulence Set,"Pink jelly almond nails with gold accents and 3d gold nail charms

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"press_on_nails,pink_nails,pink_gold_nails,almond_nails,y2k_nails,coquette_nails,press_ons,gel_nails,korean_nails",,https://juicegels.com/images/products/il_fullxfull.6890054642_m96u.jpg,https://juicegels.com/images/products/il_fullxfull.6938030955_spes.jpg,https://juicegels.com/images/products/il_fullxfull.6890054886_k3up.jpg,https://juicegels.com/images/products/il_fullxfull.6938030973_134d.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0017?shape=Almond&length=Long,Juicegels_PinkOpulenceSet,Almond,Long\r
JUICEGELS-0256,Chroma Muse Set,"Almond nails with gradient bases and graphic line art stickers

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.6938021717_65y6.jpg,https://juicegels.com/images/products/il_fullxfull.6938021957_89pr.jpg,https://juicegels.com/images/products/il_fullxfull.6890046076_hjfw.jpg,https://juicegels.com/images/products/il_fullxfull.6938021963_gwvj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0018?shape=Square&length=Short,Juicegels_ChromaMuseSet,Square,Short\r
JUICEGELS-0257,Chroma Muse Set,"Almond nails with gradient bases and graphic line art stickers

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.6938021717_65y6.jpg,https://juicegels.com/images/products/il_fullxfull.6938021957_89pr.jpg,https://juicegels.com/images/products/il_fullxfull.6890046076_hjfw.jpg,https://juicegels.com/images/products/il_fullxfull.6938021963_gwvj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0018?shape=Square&length=Medium,Juicegels_ChromaMuseSet,Square,Medium\r
JUICEGELS-0258,Chroma Muse Set,"Almond nails with gradient bases and graphic line art stickers

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.6938021717_65y6.jpg,https://juicegels.com/images/products/il_fullxfull.6938021957_89pr.jpg,https://juicegels.com/images/products/il_fullxfull.6890046076_hjfw.jpg,https://juicegels.com/images/products/il_fullxfull.6938021963_gwvj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0018?shape=Square&length=Long,Juicegels_ChromaMuseSet,Square,Long\r
JUICEGELS-0259,Chroma Muse Set,"Almond nails with gradient bases and graphic line art stickers

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.6938021717_65y6.jpg,https://juicegels.com/images/products/il_fullxfull.6938021957_89pr.jpg,https://juicegels.com/images/products/il_fullxfull.6890046076_hjfw.jpg,https://juicegels.com/images/products/il_fullxfull.6938021963_gwvj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0018?shape=Oval&length=Short,Juicegels_ChromaMuseSet,Oval,Short\r
JUICEGELS-0260,Chroma Muse Set,"Almond nails with gradient bases and graphic line art stickers

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.6938021717_65y6.jpg,https://juicegels.com/images/products/il_fullxfull.6938021957_89pr.jpg,https://juicegels.com/images/products/il_fullxfull.6890046076_hjfw.jpg,https://juicegels.com/images/products/il_fullxfull.6938021963_gwvj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0018?shape=Oval&length=Medium,Juicegels_ChromaMuseSet,Oval,Medium\r
JUICEGELS-0261,Chroma Muse Set,"Almond nails with gradient bases and graphic line art stickers

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.6938021717_65y6.jpg,https://juicegels.com/images/products/il_fullxfull.6938021957_89pr.jpg,https://juicegels.com/images/products/il_fullxfull.6890046076_hjfw.jpg,https://juicegels.com/images/products/il_fullxfull.6938021963_gwvj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0018?shape=Oval&length=Long,Juicegels_ChromaMuseSet,Oval,Long\r
JUICEGELS-0262,Chroma Muse Set,"Almond nails with gradient bases and graphic line art stickers

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.6938021717_65y6.jpg,https://juicegels.com/images/products/il_fullxfull.6938021957_89pr.jpg,https://juicegels.com/images/products/il_fullxfull.6890046076_hjfw.jpg,https://juicegels.com/images/products/il_fullxfull.6938021963_gwvj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0018?shape=Stiletto&length=Short,Juicegels_ChromaMuseSet,Stiletto,Short\r
JUICEGELS-0263,Chroma Muse Set,"Almond nails with gradient bases and graphic line art stickers

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.6938021717_65y6.jpg,https://juicegels.com/images/products/il_fullxfull.6938021957_89pr.jpg,https://juicegels.com/images/products/il_fullxfull.6890046076_hjfw.jpg,https://juicegels.com/images/products/il_fullxfull.6938021963_gwvj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0018?shape=Stiletto&length=Medium,Juicegels_ChromaMuseSet,Stiletto,Medium\r
JUICEGELS-0264,Chroma Muse Set,"Almond nails with gradient bases and graphic line art stickers

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.6938021717_65y6.jpg,https://juicegels.com/images/products/il_fullxfull.6938021957_89pr.jpg,https://juicegels.com/images/products/il_fullxfull.6890046076_hjfw.jpg,https://juicegels.com/images/products/il_fullxfull.6938021963_gwvj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0018?shape=Stiletto&length=Long,Juicegels_ChromaMuseSet,Stiletto,Long\r
JUICEGELS-0265,Chroma Muse Set,"Almond nails with gradient bases and graphic line art stickers

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.6938021717_65y6.jpg,https://juicegels.com/images/products/il_fullxfull.6938021957_89pr.jpg,https://juicegels.com/images/products/il_fullxfull.6890046076_hjfw.jpg,https://juicegels.com/images/products/il_fullxfull.6938021963_gwvj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0018?shape=Coffin&length=Short,Juicegels_ChromaMuseSet,Coffin,Short\r
JUICEGELS-0266,Chroma Muse Set,"Almond nails with gradient bases and graphic line art stickers

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.6938021717_65y6.jpg,https://juicegels.com/images/products/il_fullxfull.6938021957_89pr.jpg,https://juicegels.com/images/products/il_fullxfull.6890046076_hjfw.jpg,https://juicegels.com/images/products/il_fullxfull.6938021963_gwvj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0018?shape=Coffin&length=Medium,Juicegels_ChromaMuseSet,Coffin,Medium\r
JUICEGELS-0267,Chroma Muse Set,"Almond nails with gradient bases and graphic line art stickers

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.6938021717_65y6.jpg,https://juicegels.com/images/products/il_fullxfull.6938021957_89pr.jpg,https://juicegels.com/images/products/il_fullxfull.6890046076_hjfw.jpg,https://juicegels.com/images/products/il_fullxfull.6938021963_gwvj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0018?shape=Coffin&length=Long,Juicegels_ChromaMuseSet,Coffin,Long\r
JUICEGELS-0268,Chroma Muse Set,"Almond nails with gradient bases and graphic line art stickers

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.6938021717_65y6.jpg,https://juicegels.com/images/products/il_fullxfull.6938021957_89pr.jpg,https://juicegels.com/images/products/il_fullxfull.6890046076_hjfw.jpg,https://juicegels.com/images/products/il_fullxfull.6938021963_gwvj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0018?shape=Almond&length=Short,Juicegels_ChromaMuseSet,Almond,Short\r
JUICEGELS-0269,Chroma Muse Set,"Almond nails with gradient bases and graphic line art stickers

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.6938021717_65y6.jpg,https://juicegels.com/images/products/il_fullxfull.6938021957_89pr.jpg,https://juicegels.com/images/products/il_fullxfull.6890046076_hjfw.jpg,https://juicegels.com/images/products/il_fullxfull.6938021963_gwvj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0018?shape=Almond&length=Medium,Juicegels_ChromaMuseSet,Almond,Medium\r
JUICEGELS-0270,Chroma Muse Set,"Almond nails with gradient bases and graphic line art stickers

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.6938021717_65y6.jpg,https://juicegels.com/images/products/il_fullxfull.6938021957_89pr.jpg,https://juicegels.com/images/products/il_fullxfull.6890046076_hjfw.jpg,https://juicegels.com/images/products/il_fullxfull.6938021963_gwvj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0018?shape=Almond&length=Long,Juicegels_ChromaMuseSet,Almond,Long\r
JUICEGELS-0271,Peach Blossom Set,Nude base almond nails with 3d nail art and 3d gel art,19.5,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.7121887836_jhfw.jpg,https://juicegels.com/images/products/il_fullxfull.7121888064_hlml.jpg,https://juicegels.com/images/products/il_fullxfull.7169857831_f9ud.jpg,https://juicegels.com/images/products/il_fullxfull.7121888066_f6ej.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0019?shape=Square&length=Short,Juicegels_PeachBlossomSet,Square,Short\r
JUICEGELS-0272,Peach Blossom Set,Nude base almond nails with 3d nail art and 3d gel art,19.5,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.7121887836_jhfw.jpg,https://juicegels.com/images/products/il_fullxfull.7121888064_hlml.jpg,https://juicegels.com/images/products/il_fullxfull.7169857831_f9ud.jpg,https://juicegels.com/images/products/il_fullxfull.7121888066_f6ej.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0019?shape=Square&length=Medium,Juicegels_PeachBlossomSet,Square,Medium\r
JUICEGELS-0273,Peach Blossom Set,Nude base almond nails with 3d nail art and 3d gel art,19.5,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.7121887836_jhfw.jpg,https://juicegels.com/images/products/il_fullxfull.7121888064_hlml.jpg,https://juicegels.com/images/products/il_fullxfull.7169857831_f9ud.jpg,https://juicegels.com/images/products/il_fullxfull.7121888066_f6ej.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0019?shape=Square&length=Long,Juicegels_PeachBlossomSet,Square,Long\r
JUICEGELS-0274,Peach Blossom Set,Nude base almond nails with 3d nail art and 3d gel art,19.5,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.7121887836_jhfw.jpg,https://juicegels.com/images/products/il_fullxfull.7121888064_hlml.jpg,https://juicegels.com/images/products/il_fullxfull.7169857831_f9ud.jpg,https://juicegels.com/images/products/il_fullxfull.7121888066_f6ej.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0019?shape=Oval&length=Short,Juicegels_PeachBlossomSet,Oval,Short\r
JUICEGELS-0275,Peach Blossom Set,Nude base almond nails with 3d nail art and 3d gel art,19.5,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.7121887836_jhfw.jpg,https://juicegels.com/images/products/il_fullxfull.7121888064_hlml.jpg,https://juicegels.com/images/products/il_fullxfull.7169857831_f9ud.jpg,https://juicegels.com/images/products/il_fullxfull.7121888066_f6ej.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0019?shape=Oval&length=Medium,Juicegels_PeachBlossomSet,Oval,Medium\r
JUICEGELS-0276,Peach Blossom Set,Nude base almond nails with 3d nail art and 3d gel art,19.5,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.7121887836_jhfw.jpg,https://juicegels.com/images/products/il_fullxfull.7121888064_hlml.jpg,https://juicegels.com/images/products/il_fullxfull.7169857831_f9ud.jpg,https://juicegels.com/images/products/il_fullxfull.7121888066_f6ej.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0019?shape=Oval&length=Long,Juicegels_PeachBlossomSet,Oval,Long\r
JUICEGELS-0277,Peach Blossom Set,Nude base almond nails with 3d nail art and 3d gel art,19.5,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.7121887836_jhfw.jpg,https://juicegels.com/images/products/il_fullxfull.7121888064_hlml.jpg,https://juicegels.com/images/products/il_fullxfull.7169857831_f9ud.jpg,https://juicegels.com/images/products/il_fullxfull.7121888066_f6ej.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0019?shape=Stiletto&length=Short,Juicegels_PeachBlossomSet,Stiletto,Short\r
JUICEGELS-0278,Peach Blossom Set,Nude base almond nails with 3d nail art and 3d gel art,19.5,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.7121887836_jhfw.jpg,https://juicegels.com/images/products/il_fullxfull.7121888064_hlml.jpg,https://juicegels.com/images/products/il_fullxfull.7169857831_f9ud.jpg,https://juicegels.com/images/products/il_fullxfull.7121888066_f6ej.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0019?shape=Stiletto&length=Medium,Juicegels_PeachBlossomSet,Stiletto,Medium\r
JUICEGELS-0279,Peach Blossom Set,Nude base almond nails with 3d nail art and 3d gel art,19.5,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.7121887836_jhfw.jpg,https://juicegels.com/images/products/il_fullxfull.7121888064_hlml.jpg,https://juicegels.com/images/products/il_fullxfull.7169857831_f9ud.jpg,https://juicegels.com/images/products/il_fullxfull.7121888066_f6ej.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0019?shape=Stiletto&length=Long,Juicegels_PeachBlossomSet,Stiletto,Long\r
JUICEGELS-0280,Peach Blossom Set,Nude base almond nails with 3d nail art and 3d gel art,19.5,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.7121887836_jhfw.jpg,https://juicegels.com/images/products/il_fullxfull.7121888064_hlml.jpg,https://juicegels.com/images/products/il_fullxfull.7169857831_f9ud.jpg,https://juicegels.com/images/products/il_fullxfull.7121888066_f6ej.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0019?shape=Coffin&length=Short,Juicegels_PeachBlossomSet,Coffin,Short\r
JUICEGELS-0281,Peach Blossom Set,Nude base almond nails with 3d nail art and 3d gel art,19.5,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.7121887836_jhfw.jpg,https://juicegels.com/images/products/il_fullxfull.7121888064_hlml.jpg,https://juicegels.com/images/products/il_fullxfull.7169857831_f9ud.jpg,https://juicegels.com/images/products/il_fullxfull.7121888066_f6ej.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0019?shape=Coffin&length=Medium,Juicegels_PeachBlossomSet,Coffin,Medium\r
JUICEGELS-0282,Peach Blossom Set,Nude base almond nails with 3d nail art and 3d gel art,19.5,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.7121887836_jhfw.jpg,https://juicegels.com/images/products/il_fullxfull.7121888064_hlml.jpg,https://juicegels.com/images/products/il_fullxfull.7169857831_f9ud.jpg,https://juicegels.com/images/products/il_fullxfull.7121888066_f6ej.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0019?shape=Coffin&length=Long,Juicegels_PeachBlossomSet,Coffin,Long\r
JUICEGELS-0283,Peach Blossom Set,Nude base almond nails with 3d nail art and 3d gel art,19.5,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.7121887836_jhfw.jpg,https://juicegels.com/images/products/il_fullxfull.7121888064_hlml.jpg,https://juicegels.com/images/products/il_fullxfull.7169857831_f9ud.jpg,https://juicegels.com/images/products/il_fullxfull.7121888066_f6ej.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0019?shape=Almond&length=Short,Juicegels_PeachBlossomSet,Almond,Short\r
JUICEGELS-0284,Peach Blossom Set,Nude base almond nails with 3d nail art and 3d gel art,19.5,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.7121887836_jhfw.jpg,https://juicegels.com/images/products/il_fullxfull.7121888064_hlml.jpg,https://juicegels.com/images/products/il_fullxfull.7169857831_f9ud.jpg,https://juicegels.com/images/products/il_fullxfull.7121888066_f6ej.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0019?shape=Almond&length=Medium,Juicegels_PeachBlossomSet,Almond,Medium\r
JUICEGELS-0285,Peach Blossom Set,Nude base almond nails with 3d nail art and 3d gel art,19.5,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.7121887836_jhfw.jpg,https://juicegels.com/images/products/il_fullxfull.7121888064_hlml.jpg,https://juicegels.com/images/products/il_fullxfull.7169857831_f9ud.jpg,https://juicegels.com/images/products/il_fullxfull.7121888066_f6ej.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0019?shape=Almond&length=Long,Juicegels_PeachBlossomSet,Almond,Long\r
JUICEGELS-0286,Twinkle Wings Set,"White jelly base with silver star art, rhinestones and butterfly charms",17,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.7121885032_eakd.jpg,https://juicegels.com/images/products/il_fullxfull.7169853219_hn3v.jpg,https://juicegels.com/images/products/il_fullxfull.7169853221_ha7h.jpg,https://juicegels.com/images/products/il_fullxfull.7121883574_8gu6.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0020?shape=Square&length=Short,Juicegels_TwinkleWingsSet,Square,Short\r
JUICEGELS-0287,Twinkle Wings Set,"White jelly base with silver star art, rhinestones and butterfly charms",17,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.7121885032_eakd.jpg,https://juicegels.com/images/products/il_fullxfull.7169853219_hn3v.jpg,https://juicegels.com/images/products/il_fullxfull.7169853221_ha7h.jpg,https://juicegels.com/images/products/il_fullxfull.7121883574_8gu6.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0020?shape=Square&length=Medium,Juicegels_TwinkleWingsSet,Square,Medium\r
JUICEGELS-0288,Twinkle Wings Set,"White jelly base with silver star art, rhinestones and butterfly charms",17,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.7121885032_eakd.jpg,https://juicegels.com/images/products/il_fullxfull.7169853219_hn3v.jpg,https://juicegels.com/images/products/il_fullxfull.7169853221_ha7h.jpg,https://juicegels.com/images/products/il_fullxfull.7121883574_8gu6.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0020?shape=Square&length=Long,Juicegels_TwinkleWingsSet,Square,Long\r
JUICEGELS-0289,Twinkle Wings Set,"White jelly base with silver star art, rhinestones and butterfly charms",17,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.7121885032_eakd.jpg,https://juicegels.com/images/products/il_fullxfull.7169853219_hn3v.jpg,https://juicegels.com/images/products/il_fullxfull.7169853221_ha7h.jpg,https://juicegels.com/images/products/il_fullxfull.7121883574_8gu6.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0020?shape=Oval&length=Short,Juicegels_TwinkleWingsSet,Oval,Short\r
JUICEGELS-0290,Twinkle Wings Set,"White jelly base with silver star art, rhinestones and butterfly charms",17,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.7121885032_eakd.jpg,https://juicegels.com/images/products/il_fullxfull.7169853219_hn3v.jpg,https://juicegels.com/images/products/il_fullxfull.7169853221_ha7h.jpg,https://juicegels.com/images/products/il_fullxfull.7121883574_8gu6.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0020?shape=Oval&length=Medium,Juicegels_TwinkleWingsSet,Oval,Medium\r
JUICEGELS-0291,Twinkle Wings Set,"White jelly base with silver star art, rhinestones and butterfly charms",17,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.7121885032_eakd.jpg,https://juicegels.com/images/products/il_fullxfull.7169853219_hn3v.jpg,https://juicegels.com/images/products/il_fullxfull.7169853221_ha7h.jpg,https://juicegels.com/images/products/il_fullxfull.7121883574_8gu6.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0020?shape=Oval&length=Long,Juicegels_TwinkleWingsSet,Oval,Long\r
JUICEGELS-0292,Twinkle Wings Set,"White jelly base with silver star art, rhinestones and butterfly charms",17,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.7121885032_eakd.jpg,https://juicegels.com/images/products/il_fullxfull.7169853219_hn3v.jpg,https://juicegels.com/images/products/il_fullxfull.7169853221_ha7h.jpg,https://juicegels.com/images/products/il_fullxfull.7121883574_8gu6.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0020?shape=Stiletto&length=Short,Juicegels_TwinkleWingsSet,Stiletto,Short\r
JUICEGELS-0293,Twinkle Wings Set,"White jelly base with silver star art, rhinestones and butterfly charms",17,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.7121885032_eakd.jpg,https://juicegels.com/images/products/il_fullxfull.7169853219_hn3v.jpg,https://juicegels.com/images/products/il_fullxfull.7169853221_ha7h.jpg,https://juicegels.com/images/products/il_fullxfull.7121883574_8gu6.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0020?shape=Stiletto&length=Medium,Juicegels_TwinkleWingsSet,Stiletto,Medium\r
JUICEGELS-0294,Twinkle Wings Set,"White jelly base with silver star art, rhinestones and butterfly charms",17,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.7121885032_eakd.jpg,https://juicegels.com/images/products/il_fullxfull.7169853219_hn3v.jpg,https://juicegels.com/images/products/il_fullxfull.7169853221_ha7h.jpg,https://juicegels.com/images/products/il_fullxfull.7121883574_8gu6.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0020?shape=Stiletto&length=Long,Juicegels_TwinkleWingsSet,Stiletto,Long\r
JUICEGELS-0295,Twinkle Wings Set,"White jelly base with silver star art, rhinestones and butterfly charms",17,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.7121885032_eakd.jpg,https://juicegels.com/images/products/il_fullxfull.7169853219_hn3v.jpg,https://juicegels.com/images/products/il_fullxfull.7169853221_ha7h.jpg,https://juicegels.com/images/products/il_fullxfull.7121883574_8gu6.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0020?shape=Coffin&length=Short,Juicegels_TwinkleWingsSet,Coffin,Short\r
JUICEGELS-0296,Twinkle Wings Set,"White jelly base with silver star art, rhinestones and butterfly charms",17,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.7121885032_eakd.jpg,https://juicegels.com/images/products/il_fullxfull.7169853219_hn3v.jpg,https://juicegels.com/images/products/il_fullxfull.7169853221_ha7h.jpg,https://juicegels.com/images/products/il_fullxfull.7121883574_8gu6.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0020?shape=Coffin&length=Medium,Juicegels_TwinkleWingsSet,Coffin,Medium\r
JUICEGELS-0297,Twinkle Wings Set,"White jelly base with silver star art, rhinestones and butterfly charms",17,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.7121885032_eakd.jpg,https://juicegels.com/images/products/il_fullxfull.7169853219_hn3v.jpg,https://juicegels.com/images/products/il_fullxfull.7169853221_ha7h.jpg,https://juicegels.com/images/products/il_fullxfull.7121883574_8gu6.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0020?shape=Coffin&length=Long,Juicegels_TwinkleWingsSet,Coffin,Long\r
JUICEGELS-0298,Twinkle Wings Set,"White jelly base with silver star art, rhinestones and butterfly charms",17,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.7121885032_eakd.jpg,https://juicegels.com/images/products/il_fullxfull.7169853219_hn3v.jpg,https://juicegels.com/images/products/il_fullxfull.7169853221_ha7h.jpg,https://juicegels.com/images/products/il_fullxfull.7121883574_8gu6.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0020?shape=Almond&length=Short,Juicegels_TwinkleWingsSet,Almond,Short\r
JUICEGELS-0299,Twinkle Wings Set,"White jelly base with silver star art, rhinestones and butterfly charms",17,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.7121885032_eakd.jpg,https://juicegels.com/images/products/il_fullxfull.7169853219_hn3v.jpg,https://juicegels.com/images/products/il_fullxfull.7169853221_ha7h.jpg,https://juicegels.com/images/products/il_fullxfull.7121883574_8gu6.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0020?shape=Almond&length=Medium,Juicegels_TwinkleWingsSet,Almond,Medium\r
JUICEGELS-0300,Twinkle Wings Set,"White jelly base with silver star art, rhinestones and butterfly charms",17,GBP,20,,,https://juicegels.com/images/products/il_fullxfull.7121885032_eakd.jpg,https://juicegels.com/images/products/il_fullxfull.7169853219_hn3v.jpg,https://juicegels.com/images/products/il_fullxfull.7169853221_ha7h.jpg,https://juicegels.com/images/products/il_fullxfull.7121883574_8gu6.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0020?shape=Almond&length=Long,Juicegels_TwinkleWingsSet,Almond,Long\r
JUICEGELS-0301,Nail Sizing Guide,"Never second guess your nail sizes again! The Juice Gels Size Guide is your must-have tool to get a flawless, custom fit press-on set. Each guide comes with a full range of sizes (0–10) in your chosen nail shape (Almond, Square, or Coffin), along with simple instructions on how to measure.

✨ What’s included:
	•	A full set of sample nail tips in your selected shape (Almond / Square / Coffin)
	•	Step-by-step guide to measure & record your sizes
	•	Easy instructions for sending your sizes straight to Juice Gels when ordering

✨ Why you’ll love it:
	•	Ensures your custom press-ons fit perfectly
	•	Saves time + avoids mistakes when ordering
	•	Reusable for future Juice Gels sets
	•	Available in all Juice Gels signature shapes

✨How it works:
	1.	Place one nail tip on each finger, sidewall to sidewall, to find your perfect size.
	2.	Repeat this step for both hands & write down the number for each finger in the boxes provided.
	3.	If you’re stuck between two sizes, always go with the bigger size!
	4.	Once you’ve measured, simply send your nail sizes through:
	•	Instagram DM: @juicegels
	•	or Etsy message (when placing your order).

💡 Bonus: The £4 you spend on this guide will be deducted from your first custom nail set, so your size guide pays for itself!",4,GBP,20,"press_on_nails,nail_size_guide,press_on_size_guide,press_ons,gel_nails",,https://juicegels.com/images/products/il_fullxfull.7113406228_q6ac.jpg,,,,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0021?shape=Square&length=Short,Juicegels_NailSizingGuide,Square,Short\r
JUICEGELS-0302,Nail Sizing Guide,"Never second guess your nail sizes again! The Juice Gels Size Guide is your must-have tool to get a flawless, custom fit press-on set. Each guide comes with a full range of sizes (0–10) in your chosen nail shape (Almond, Square, or Coffin), along with simple instructions on how to measure.

✨ What’s included:
	•	A full set of sample nail tips in your selected shape (Almond / Square / Coffin)
	•	Step-by-step guide to measure & record your sizes
	•	Easy instructions for sending your sizes straight to Juice Gels when ordering

✨ Why you’ll love it:
	•	Ensures your custom press-ons fit perfectly
	•	Saves time + avoids mistakes when ordering
	•	Reusable for future Juice Gels sets
	•	Available in all Juice Gels signature shapes

✨How it works:
	1.	Place one nail tip on each finger, sidewall to sidewall, to find your perfect size.
	2.	Repeat this step for both hands & write down the number for each finger in the boxes provided.
	3.	If you’re stuck between two sizes, always go with the bigger size!
	4.	Once you’ve measured, simply send your nail sizes through:
	•	Instagram DM: @juicegels
	•	or Etsy message (when placing your order).

💡 Bonus: The £4 you spend on this guide will be deducted from your first custom nail set, so your size guide pays for itself!",4,GBP,20,"press_on_nails,nail_size_guide,press_on_size_guide,press_ons,gel_nails",,https://juicegels.com/images/products/il_fullxfull.7113406228_q6ac.jpg,,,,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0021?shape=Square&length=Medium,Juicegels_NailSizingGuide,Square,Medium\r
JUICEGELS-0303,Nail Sizing Guide,"Never second guess your nail sizes again! The Juice Gels Size Guide is your must-have tool to get a flawless, custom fit press-on set. Each guide comes with a full range of sizes (0–10) in your chosen nail shape (Almond, Square, or Coffin), along with simple instructions on how to measure.

✨ What’s included:
	•	A full set of sample nail tips in your selected shape (Almond / Square / Coffin)
	•	Step-by-step guide to measure & record your sizes
	•	Easy instructions for sending your sizes straight to Juice Gels when ordering

✨ Why you’ll love it:
	•	Ensures your custom press-ons fit perfectly
	•	Saves time + avoids mistakes when ordering
	•	Reusable for future Juice Gels sets
	•	Available in all Juice Gels signature shapes

✨How it works:
	1.	Place one nail tip on each finger, sidewall to sidewall, to find your perfect size.
	2.	Repeat this step for both hands & write down the number for each finger in the boxes provided.
	3.	If you’re stuck between two sizes, always go with the bigger size!
	4.	Once you’ve measured, simply send your nail sizes through:
	•	Instagram DM: @juicegels
	•	or Etsy message (when placing your order).

💡 Bonus: The £4 you spend on this guide will be deducted from your first custom nail set, so your size guide pays for itself!",4,GBP,20,"press_on_nails,nail_size_guide,press_on_size_guide,press_ons,gel_nails",,https://juicegels.com/images/products/il_fullxfull.7113406228_q6ac.jpg,,,,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0021?shape=Square&length=Long,Juicegels_NailSizingGuide,Square,Long\r
JUICEGELS-0304,Nail Sizing Guide,"Never second guess your nail sizes again! The Juice Gels Size Guide is your must-have tool to get a flawless, custom fit press-on set. Each guide comes with a full range of sizes (0–10) in your chosen nail shape (Almond, Square, or Coffin), along with simple instructions on how to measure.

✨ What’s included:
	•	A full set of sample nail tips in your selected shape (Almond / Square / Coffin)
	•	Step-by-step guide to measure & record your sizes
	•	Easy instructions for sending your sizes straight to Juice Gels when ordering

✨ Why you’ll love it:
	•	Ensures your custom press-ons fit perfectly
	•	Saves time + avoids mistakes when ordering
	•	Reusable for future Juice Gels sets
	•	Available in all Juice Gels signature shapes

✨How it works:
	1.	Place one nail tip on each finger, sidewall to sidewall, to find your perfect size.
	2.	Repeat this step for both hands & write down the number for each finger in the boxes provided.
	3.	If you’re stuck between two sizes, always go with the bigger size!
	4.	Once you’ve measured, simply send your nail sizes through:
	•	Instagram DM: @juicegels
	•	or Etsy message (when placing your order).

💡 Bonus: The £4 you spend on this guide will be deducted from your first custom nail set, so your size guide pays for itself!",4,GBP,20,"press_on_nails,nail_size_guide,press_on_size_guide,press_ons,gel_nails",,https://juicegels.com/images/products/il_fullxfull.7113406228_q6ac.jpg,,,,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0021?shape=Oval&length=Short,Juicegels_NailSizingGuide,Oval,Short\r
JUICEGELS-0305,Nail Sizing Guide,"Never second guess your nail sizes again! The Juice Gels Size Guide is your must-have tool to get a flawless, custom fit press-on set. Each guide comes with a full range of sizes (0–10) in your chosen nail shape (Almond, Square, or Coffin), along with simple instructions on how to measure.

✨ What’s included:
	•	A full set of sample nail tips in your selected shape (Almond / Square / Coffin)
	•	Step-by-step guide to measure & record your sizes
	•	Easy instructions for sending your sizes straight to Juice Gels when ordering

✨ Why you’ll love it:
	•	Ensures your custom press-ons fit perfectly
	•	Saves time + avoids mistakes when ordering
	•	Reusable for future Juice Gels sets
	•	Available in all Juice Gels signature shapes

✨How it works:
	1.	Place one nail tip on each finger, sidewall to sidewall, to find your perfect size.
	2.	Repeat this step for both hands & write down the number for each finger in the boxes provided.
	3.	If you’re stuck between two sizes, always go with the bigger size!
	4.	Once you’ve measured, simply send your nail sizes through:
	•	Instagram DM: @juicegels
	•	or Etsy message (when placing your order).

💡 Bonus: The £4 you spend on this guide will be deducted from your first custom nail set, so your size guide pays for itself!",4,GBP,20,"press_on_nails,nail_size_guide,press_on_size_guide,press_ons,gel_nails",,https://juicegels.com/images/products/il_fullxfull.7113406228_q6ac.jpg,,,,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0021?shape=Oval&length=Medium,Juicegels_NailSizingGuide,Oval,Medium\r
JUICEGELS-0306,Nail Sizing Guide,"Never second guess your nail sizes again! The Juice Gels Size Guide is your must-have tool to get a flawless, custom fit press-on set. Each guide comes with a full range of sizes (0–10) in your chosen nail shape (Almond, Square, or Coffin), along with simple instructions on how to measure.

✨ What’s included:
	•	A full set of sample nail tips in your selected shape (Almond / Square / Coffin)
	•	Step-by-step guide to measure & record your sizes
	•	Easy instructions for sending your sizes straight to Juice Gels when ordering

✨ Why you’ll love it:
	•	Ensures your custom press-ons fit perfectly
	•	Saves time + avoids mistakes when ordering
	•	Reusable for future Juice Gels sets
	•	Available in all Juice Gels signature shapes

✨How it works:
	1.	Place one nail tip on each finger, sidewall to sidewall, to find your perfect size.
	2.	Repeat this step for both hands & write down the number for each finger in the boxes provided.
	3.	If you’re stuck between two sizes, always go with the bigger size!
	4.	Once you’ve measured, simply send your nail sizes through:
	•	Instagram DM: @juicegels
	•	or Etsy message (when placing your order).

💡 Bonus: The £4 you spend on this guide will be deducted from your first custom nail set, so your size guide pays for itself!",4,GBP,20,"press_on_nails,nail_size_guide,press_on_size_guide,press_ons,gel_nails",,https://juicegels.com/images/products/il_fullxfull.7113406228_q6ac.jpg,,,,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0021?shape=Oval&length=Long,Juicegels_NailSizingGuide,Oval,Long\r
JUICEGELS-0307,Nail Sizing Guide,"Never second guess your nail sizes again! The Juice Gels Size Guide is your must-have tool to get a flawless, custom fit press-on set. Each guide comes with a full range of sizes (0–10) in your chosen nail shape (Almond, Square, or Coffin), along with simple instructions on how to measure.

✨ What’s included:
	•	A full set of sample nail tips in your selected shape (Almond / Square / Coffin)
	•	Step-by-step guide to measure & record your sizes
	•	Easy instructions for sending your sizes straight to Juice Gels when ordering

✨ Why you’ll love it:
	•	Ensures your custom press-ons fit perfectly
	•	Saves time + avoids mistakes when ordering
	•	Reusable for future Juice Gels sets
	•	Available in all Juice Gels signature shapes

✨How it works:
	1.	Place one nail tip on each finger, sidewall to sidewall, to find your perfect size.
	2.	Repeat this step for both hands & write down the number for each finger in the boxes provided.
	3.	If you’re stuck between two sizes, always go with the bigger size!
	4.	Once you’ve measured, simply send your nail sizes through:
	•	Instagram DM: @juicegels
	•	or Etsy message (when placing your order).

💡 Bonus: The £4 you spend on this guide will be deducted from your first custom nail set, so your size guide pays for itself!",4,GBP,20,"press_on_nails,nail_size_guide,press_on_size_guide,press_ons,gel_nails",,https://juicegels.com/images/products/il_fullxfull.7113406228_q6ac.jpg,,,,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0021?shape=Stiletto&length=Short,Juicegels_NailSizingGuide,Stiletto,Short\r
JUICEGELS-0308,Nail Sizing Guide,"Never second guess your nail sizes again! The Juice Gels Size Guide is your must-have tool to get a flawless, custom fit press-on set. Each guide comes with a full range of sizes (0–10) in your chosen nail shape (Almond, Square, or Coffin), along with simple instructions on how to measure.

✨ What’s included:
	•	A full set of sample nail tips in your selected shape (Almond / Square / Coffin)
	•	Step-by-step guide to measure & record your sizes
	•	Easy instructions for sending your sizes straight to Juice Gels when ordering

✨ Why you’ll love it:
	•	Ensures your custom press-ons fit perfectly
	•	Saves time + avoids mistakes when ordering
	•	Reusable for future Juice Gels sets
	•	Available in all Juice Gels signature shapes

✨How it works:
	1.	Place one nail tip on each finger, sidewall to sidewall, to find your perfect size.
	2.	Repeat this step for both hands & write down the number for each finger in the boxes provided.
	3.	If you’re stuck between two sizes, always go with the bigger size!
	4.	Once you’ve measured, simply send your nail sizes through:
	•	Instagram DM: @juicegels
	•	or Etsy message (when placing your order).

💡 Bonus: The £4 you spend on this guide will be deducted from your first custom nail set, so your size guide pays for itself!",4,GBP,20,"press_on_nails,nail_size_guide,press_on_size_guide,press_ons,gel_nails",,https://juicegels.com/images/products/il_fullxfull.7113406228_q6ac.jpg,,,,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0021?shape=Stiletto&length=Medium,Juicegels_NailSizingGuide,Stiletto,Medium\r
JUICEGELS-0309,Nail Sizing Guide,"Never second guess your nail sizes again! The Juice Gels Size Guide is your must-have tool to get a flawless, custom fit press-on set. Each guide comes with a full range of sizes (0–10) in your chosen nail shape (Almond, Square, or Coffin), along with simple instructions on how to measure.

✨ What’s included:
	•	A full set of sample nail tips in your selected shape (Almond / Square / Coffin)
	•	Step-by-step guide to measure & record your sizes
	•	Easy instructions for sending your sizes straight to Juice Gels when ordering

✨ Why you’ll love it:
	•	Ensures your custom press-ons fit perfectly
	•	Saves time + avoids mistakes when ordering
	•	Reusable for future Juice Gels sets
	•	Available in all Juice Gels signature shapes

✨How it works:
	1.	Place one nail tip on each finger, sidewall to sidewall, to find your perfect size.
	2.	Repeat this step for both hands & write down the number for each finger in the boxes provided.
	3.	If you’re stuck between two sizes, always go with the bigger size!
	4.	Once you’ve measured, simply send your nail sizes through:
	•	Instagram DM: @juicegels
	•	or Etsy message (when placing your order).

💡 Bonus: The £4 you spend on this guide will be deducted from your first custom nail set, so your size guide pays for itself!",4,GBP,20,"press_on_nails,nail_size_guide,press_on_size_guide,press_ons,gel_nails",,https://juicegels.com/images/products/il_fullxfull.7113406228_q6ac.jpg,,,,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0021?shape=Stiletto&length=Long,Juicegels_NailSizingGuide,Stiletto,Long\r
JUICEGELS-0310,Nail Sizing Guide,"Never second guess your nail sizes again! The Juice Gels Size Guide is your must-have tool to get a flawless, custom fit press-on set. Each guide comes with a full range of sizes (0–10) in your chosen nail shape (Almond, Square, or Coffin), along with simple instructions on how to measure.

✨ What’s included:
	•	A full set of sample nail tips in your selected shape (Almond / Square / Coffin)
	•	Step-by-step guide to measure & record your sizes
	•	Easy instructions for sending your sizes straight to Juice Gels when ordering

✨ Why you’ll love it:
	•	Ensures your custom press-ons fit perfectly
	•	Saves time + avoids mistakes when ordering
	•	Reusable for future Juice Gels sets
	•	Available in all Juice Gels signature shapes

✨How it works:
	1.	Place one nail tip on each finger, sidewall to sidewall, to find your perfect size.
	2.	Repeat this step for both hands & write down the number for each finger in the boxes provided.
	3.	If you’re stuck between two sizes, always go with the bigger size!
	4.	Once you’ve measured, simply send your nail sizes through:
	•	Instagram DM: @juicegels
	•	or Etsy message (when placing your order).

💡 Bonus: The £4 you spend on this guide will be deducted from your first custom nail set, so your size guide pays for itself!",4,GBP,20,"press_on_nails,nail_size_guide,press_on_size_guide,press_ons,gel_nails",,https://juicegels.com/images/products/il_fullxfull.7113406228_q6ac.jpg,,,,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0021?shape=Coffin&length=Short,Juicegels_NailSizingGuide,Coffin,Short\r
JUICEGELS-0311,Nail Sizing Guide,"Never second guess your nail sizes again! The Juice Gels Size Guide is your must-have tool to get a flawless, custom fit press-on set. Each guide comes with a full range of sizes (0–10) in your chosen nail shape (Almond, Square, or Coffin), along with simple instructions on how to measure.

✨ What’s included:
	•	A full set of sample nail tips in your selected shape (Almond / Square / Coffin)
	•	Step-by-step guide to measure & record your sizes
	•	Easy instructions for sending your sizes straight to Juice Gels when ordering

✨ Why you’ll love it:
	•	Ensures your custom press-ons fit perfectly
	•	Saves time + avoids mistakes when ordering
	•	Reusable for future Juice Gels sets
	•	Available in all Juice Gels signature shapes

✨How it works:
	1.	Place one nail tip on each finger, sidewall to sidewall, to find your perfect size.
	2.	Repeat this step for both hands & write down the number for each finger in the boxes provided.
	3.	If you’re stuck between two sizes, always go with the bigger size!
	4.	Once you’ve measured, simply send your nail sizes through:
	•	Instagram DM: @juicegels
	•	or Etsy message (when placing your order).

💡 Bonus: The £4 you spend on this guide will be deducted from your first custom nail set, so your size guide pays for itself!",4,GBP,20,"press_on_nails,nail_size_guide,press_on_size_guide,press_ons,gel_nails",,https://juicegels.com/images/products/il_fullxfull.7113406228_q6ac.jpg,,,,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0021?shape=Coffin&length=Medium,Juicegels_NailSizingGuide,Coffin,Medium\r
JUICEGELS-0312,Nail Sizing Guide,"Never second guess your nail sizes again! The Juice Gels Size Guide is your must-have tool to get a flawless, custom fit press-on set. Each guide comes with a full range of sizes (0–10) in your chosen nail shape (Almond, Square, or Coffin), along with simple instructions on how to measure.

✨ What’s included:
	•	A full set of sample nail tips in your selected shape (Almond / Square / Coffin)
	•	Step-by-step guide to measure & record your sizes
	•	Easy instructions for sending your sizes straight to Juice Gels when ordering

✨ Why you’ll love it:
	•	Ensures your custom press-ons fit perfectly
	•	Saves time + avoids mistakes when ordering
	•	Reusable for future Juice Gels sets
	•	Available in all Juice Gels signature shapes

✨How it works:
	1.	Place one nail tip on each finger, sidewall to sidewall, to find your perfect size.
	2.	Repeat this step for both hands & write down the number for each finger in the boxes provided.
	3.	If you’re stuck between two sizes, always go with the bigger size!
	4.	Once you’ve measured, simply send your nail sizes through:
	•	Instagram DM: @juicegels
	•	or Etsy message (when placing your order).

💡 Bonus: The £4 you spend on this guide will be deducted from your first custom nail set, so your size guide pays for itself!",4,GBP,20,"press_on_nails,nail_size_guide,press_on_size_guide,press_ons,gel_nails",,https://juicegels.com/images/products/il_fullxfull.7113406228_q6ac.jpg,,,,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0021?shape=Coffin&length=Long,Juicegels_NailSizingGuide,Coffin,Long\r
JUICEGELS-0313,Nail Sizing Guide,"Never second guess your nail sizes again! The Juice Gels Size Guide is your must-have tool to get a flawless, custom fit press-on set. Each guide comes with a full range of sizes (0–10) in your chosen nail shape (Almond, Square, or Coffin), along with simple instructions on how to measure.

✨ What’s included:
	•	A full set of sample nail tips in your selected shape (Almond / Square / Coffin)
	•	Step-by-step guide to measure & record your sizes
	•	Easy instructions for sending your sizes straight to Juice Gels when ordering

✨ Why you’ll love it:
	•	Ensures your custom press-ons fit perfectly
	•	Saves time + avoids mistakes when ordering
	•	Reusable for future Juice Gels sets
	•	Available in all Juice Gels signature shapes

✨How it works:
	1.	Place one nail tip on each finger, sidewall to sidewall, to find your perfect size.
	2.	Repeat this step for both hands & write down the number for each finger in the boxes provided.
	3.	If you’re stuck between two sizes, always go with the bigger size!
	4.	Once you’ve measured, simply send your nail sizes through:
	•	Instagram DM: @juicegels
	•	or Etsy message (when placing your order).

💡 Bonus: The £4 you spend on this guide will be deducted from your first custom nail set, so your size guide pays for itself!",4,GBP,20,"press_on_nails,nail_size_guide,press_on_size_guide,press_ons,gel_nails",,https://juicegels.com/images/products/il_fullxfull.7113406228_q6ac.jpg,,,,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0021?shape=Almond&length=Short,Juicegels_NailSizingGuide,Almond,Short\r
JUICEGELS-0314,Nail Sizing Guide,"Never second guess your nail sizes again! The Juice Gels Size Guide is your must-have tool to get a flawless, custom fit press-on set. Each guide comes with a full range of sizes (0–10) in your chosen nail shape (Almond, Square, or Coffin), along with simple instructions on how to measure.

✨ What’s included:
	•	A full set of sample nail tips in your selected shape (Almond / Square / Coffin)
	•	Step-by-step guide to measure & record your sizes
	•	Easy instructions for sending your sizes straight to Juice Gels when ordering

✨ Why you’ll love it:
	•	Ensures your custom press-ons fit perfectly
	•	Saves time + avoids mistakes when ordering
	•	Reusable for future Juice Gels sets
	•	Available in all Juice Gels signature shapes

✨How it works:
	1.	Place one nail tip on each finger, sidewall to sidewall, to find your perfect size.
	2.	Repeat this step for both hands & write down the number for each finger in the boxes provided.
	3.	If you’re stuck between two sizes, always go with the bigger size!
	4.	Once you’ve measured, simply send your nail sizes through:
	•	Instagram DM: @juicegels
	•	or Etsy message (when placing your order).

💡 Bonus: The £4 you spend on this guide will be deducted from your first custom nail set, so your size guide pays for itself!",4,GBP,20,"press_on_nails,nail_size_guide,press_on_size_guide,press_ons,gel_nails",,https://juicegels.com/images/products/il_fullxfull.7113406228_q6ac.jpg,,,,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0021?shape=Almond&length=Medium,Juicegels_NailSizingGuide,Almond,Medium\r
JUICEGELS-0315,Nail Sizing Guide,"Never second guess your nail sizes again! The Juice Gels Size Guide is your must-have tool to get a flawless, custom fit press-on set. Each guide comes with a full range of sizes (0–10) in your chosen nail shape (Almond, Square, or Coffin), along with simple instructions on how to measure.

✨ What’s included:
	•	A full set of sample nail tips in your selected shape (Almond / Square / Coffin)
	•	Step-by-step guide to measure & record your sizes
	•	Easy instructions for sending your sizes straight to Juice Gels when ordering

✨ Why you’ll love it:
	•	Ensures your custom press-ons fit perfectly
	•	Saves time + avoids mistakes when ordering
	•	Reusable for future Juice Gels sets
	•	Available in all Juice Gels signature shapes

✨How it works:
	1.	Place one nail tip on each finger, sidewall to sidewall, to find your perfect size.
	2.	Repeat this step for both hands & write down the number for each finger in the boxes provided.
	3.	If you’re stuck between two sizes, always go with the bigger size!
	4.	Once you’ve measured, simply send your nail sizes through:
	•	Instagram DM: @juicegels
	•	or Etsy message (when placing your order).

💡 Bonus: The £4 you spend on this guide will be deducted from your first custom nail set, so your size guide pays for itself!",4,GBP,20,"press_on_nails,nail_size_guide,press_on_size_guide,press_ons,gel_nails",,https://juicegels.com/images/products/il_fullxfull.7113406228_q6ac.jpg,,,,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0021?shape=Almond&length=Long,Juicegels_NailSizingGuide,Almond,Long\r
JUICEGELS-0316,Terra Flora Set,"Deep neutral based nails with flower embellishments and line art with French tip 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7113394194_w6gc.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0022?shape=Square&length=Short,Juicegels_TerraFloraSet,Square,Short\r
JUICEGELS-0317,Terra Flora Set,"Deep neutral based nails with flower embellishments and line art with French tip 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7113394194_w6gc.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0022?shape=Square&length=Medium,Juicegels_TerraFloraSet,Square,Medium\r
JUICEGELS-0318,Terra Flora Set,"Deep neutral based nails with flower embellishments and line art with French tip 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7113394194_w6gc.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0022?shape=Square&length=Long,Juicegels_TerraFloraSet,Square,Long\r
JUICEGELS-0319,Terra Flora Set,"Deep neutral based nails with flower embellishments and line art with French tip 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7113394194_w6gc.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0022?shape=Oval&length=Short,Juicegels_TerraFloraSet,Oval,Short\r
JUICEGELS-0320,Terra Flora Set,"Deep neutral based nails with flower embellishments and line art with French tip 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7113394194_w6gc.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0022?shape=Oval&length=Medium,Juicegels_TerraFloraSet,Oval,Medium\r
JUICEGELS-0321,Terra Flora Set,"Deep neutral based nails with flower embellishments and line art with French tip 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7113394194_w6gc.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0022?shape=Oval&length=Long,Juicegels_TerraFloraSet,Oval,Long\r
JUICEGELS-0322,Terra Flora Set,"Deep neutral based nails with flower embellishments and line art with French tip 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7113394194_w6gc.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0022?shape=Stiletto&length=Short,Juicegels_TerraFloraSet,Stiletto,Short\r
JUICEGELS-0323,Terra Flora Set,"Deep neutral based nails with flower embellishments and line art with French tip 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7113394194_w6gc.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0022?shape=Stiletto&length=Medium,Juicegels_TerraFloraSet,Stiletto,Medium\r
JUICEGELS-0324,Terra Flora Set,"Deep neutral based nails with flower embellishments and line art with French tip 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7113394194_w6gc.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0022?shape=Stiletto&length=Long,Juicegels_TerraFloraSet,Stiletto,Long\r
JUICEGELS-0325,Terra Flora Set,"Deep neutral based nails with flower embellishments and line art with French tip 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7113394194_w6gc.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0022?shape=Coffin&length=Short,Juicegels_TerraFloraSet,Coffin,Short\r
JUICEGELS-0326,Terra Flora Set,"Deep neutral based nails with flower embellishments and line art with French tip 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7113394194_w6gc.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0022?shape=Coffin&length=Medium,Juicegels_TerraFloraSet,Coffin,Medium\r
JUICEGELS-0327,Terra Flora Set,"Deep neutral based nails with flower embellishments and line art with French tip 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7113394194_w6gc.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0022?shape=Coffin&length=Long,Juicegels_TerraFloraSet,Coffin,Long\r
JUICEGELS-0328,Terra Flora Set,"Deep neutral based nails with flower embellishments and line art with French tip 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7113394194_w6gc.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0022?shape=Almond&length=Short,Juicegels_TerraFloraSet,Almond,Short\r
JUICEGELS-0329,Terra Flora Set,"Deep neutral based nails with flower embellishments and line art with French tip 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7113394194_w6gc.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0022?shape=Almond&length=Medium,Juicegels_TerraFloraSet,Almond,Medium\r
JUICEGELS-0330,Terra Flora Set,"Deep neutral based nails with flower embellishments and line art with French tip 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7113394194_w6gc.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0022?shape=Almond&length=Long,Juicegels_TerraFloraSet,Almond,Long\r
JUICEGELS-0331,Petal Pearl Set,"Neutral based white French tip nails with pearl embellishments and 3d flower gel

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161364849_dwm0.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0023?shape=Square&length=Short,Juicegels_PetalPearlSet,Square,Short\r
JUICEGELS-0332,Petal Pearl Set,"Neutral based white French tip nails with pearl embellishments and 3d flower gel

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161364849_dwm0.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0023?shape=Square&length=Medium,Juicegels_PetalPearlSet,Square,Medium\r
JUICEGELS-0333,Petal Pearl Set,"Neutral based white French tip nails with pearl embellishments and 3d flower gel

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161364849_dwm0.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0023?shape=Square&length=Long,Juicegels_PetalPearlSet,Square,Long\r
JUICEGELS-0334,Petal Pearl Set,"Neutral based white French tip nails with pearl embellishments and 3d flower gel

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161364849_dwm0.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0023?shape=Oval&length=Short,Juicegels_PetalPearlSet,Oval,Short\r
JUICEGELS-0335,Petal Pearl Set,"Neutral based white French tip nails with pearl embellishments and 3d flower gel

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161364849_dwm0.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0023?shape=Oval&length=Medium,Juicegels_PetalPearlSet,Oval,Medium\r
JUICEGELS-0336,Petal Pearl Set,"Neutral based white French tip nails with pearl embellishments and 3d flower gel

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161364849_dwm0.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0023?shape=Oval&length=Long,Juicegels_PetalPearlSet,Oval,Long\r
JUICEGELS-0337,Petal Pearl Set,"Neutral based white French tip nails with pearl embellishments and 3d flower gel

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161364849_dwm0.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0023?shape=Stiletto&length=Short,Juicegels_PetalPearlSet,Stiletto,Short\r
JUICEGELS-0338,Petal Pearl Set,"Neutral based white French tip nails with pearl embellishments and 3d flower gel

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161364849_dwm0.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0023?shape=Stiletto&length=Medium,Juicegels_PetalPearlSet,Stiletto,Medium\r
JUICEGELS-0339,Petal Pearl Set,"Neutral based white French tip nails with pearl embellishments and 3d flower gel

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161364849_dwm0.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0023?shape=Stiletto&length=Long,Juicegels_PetalPearlSet,Stiletto,Long\r
JUICEGELS-0340,Petal Pearl Set,"Neutral based white French tip nails with pearl embellishments and 3d flower gel

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161364849_dwm0.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0023?shape=Coffin&length=Short,Juicegels_PetalPearlSet,Coffin,Short\r
JUICEGELS-0341,Petal Pearl Set,"Neutral based white French tip nails with pearl embellishments and 3d flower gel

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161364849_dwm0.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0023?shape=Coffin&length=Medium,Juicegels_PetalPearlSet,Coffin,Medium\r
JUICEGELS-0342,Petal Pearl Set,"Neutral based white French tip nails with pearl embellishments and 3d flower gel

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161364849_dwm0.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0023?shape=Coffin&length=Long,Juicegels_PetalPearlSet,Coffin,Long\r
JUICEGELS-0343,Petal Pearl Set,"Neutral based white French tip nails with pearl embellishments and 3d flower gel

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161364849_dwm0.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0023?shape=Almond&length=Short,Juicegels_PetalPearlSet,Almond,Short\r
JUICEGELS-0344,Petal Pearl Set,"Neutral based white French tip nails with pearl embellishments and 3d flower gel

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161364849_dwm0.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0023?shape=Almond&length=Medium,Juicegels_PetalPearlSet,Almond,Medium\r
JUICEGELS-0345,Petal Pearl Set,"Neutral based white French tip nails with pearl embellishments and 3d flower gel

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161364849_dwm0.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0023?shape=Almond&length=Long,Juicegels_PetalPearlSet,Almond,Long\r
JUICEGELS-0346,Petal Tips Set,"pale pink ombre French tip with 3d gel art and 3d flower

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.7169848421_10v8.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0024?shape=Square&length=Short,Juicegels_PetalTipsSet,Square,Short\r
JUICEGELS-0347,Petal Tips Set,"pale pink ombre French tip with 3d gel art and 3d flower

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.7169848421_10v8.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0024?shape=Square&length=Medium,Juicegels_PetalTipsSet,Square,Medium\r
JUICEGELS-0348,Petal Tips Set,"pale pink ombre French tip with 3d gel art and 3d flower

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.7169848421_10v8.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0024?shape=Square&length=Long,Juicegels_PetalTipsSet,Square,Long\r
JUICEGELS-0349,Petal Tips Set,"pale pink ombre French tip with 3d gel art and 3d flower

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.7169848421_10v8.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0024?shape=Oval&length=Short,Juicegels_PetalTipsSet,Oval,Short\r
JUICEGELS-0350,Petal Tips Set,"pale pink ombre French tip with 3d gel art and 3d flower

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.7169848421_10v8.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0024?shape=Oval&length=Medium,Juicegels_PetalTipsSet,Oval,Medium\r
JUICEGELS-0351,Petal Tips Set,"pale pink ombre French tip with 3d gel art and 3d flower

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.7169848421_10v8.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0024?shape=Oval&length=Long,Juicegels_PetalTipsSet,Oval,Long\r
JUICEGELS-0352,Petal Tips Set,"pale pink ombre French tip with 3d gel art and 3d flower

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.7169848421_10v8.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0024?shape=Stiletto&length=Short,Juicegels_PetalTipsSet,Stiletto,Short\r
JUICEGELS-0353,Petal Tips Set,"pale pink ombre French tip with 3d gel art and 3d flower

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.7169848421_10v8.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0024?shape=Stiletto&length=Medium,Juicegels_PetalTipsSet,Stiletto,Medium\r
JUICEGELS-0354,Petal Tips Set,"pale pink ombre French tip with 3d gel art and 3d flower

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.7169848421_10v8.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0024?shape=Stiletto&length=Long,Juicegels_PetalTipsSet,Stiletto,Long\r
JUICEGELS-0355,Petal Tips Set,"pale pink ombre French tip with 3d gel art and 3d flower

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.7169848421_10v8.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0024?shape=Coffin&length=Short,Juicegels_PetalTipsSet,Coffin,Short\r
JUICEGELS-0356,Petal Tips Set,"pale pink ombre French tip with 3d gel art and 3d flower

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.7169848421_10v8.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0024?shape=Coffin&length=Medium,Juicegels_PetalTipsSet,Coffin,Medium\r
JUICEGELS-0357,Petal Tips Set,"pale pink ombre French tip with 3d gel art and 3d flower

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.7169848421_10v8.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0024?shape=Coffin&length=Long,Juicegels_PetalTipsSet,Coffin,Long\r
JUICEGELS-0358,Petal Tips Set,"pale pink ombre French tip with 3d gel art and 3d flower

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.7169848421_10v8.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0024?shape=Almond&length=Short,Juicegels_PetalTipsSet,Almond,Short\r
JUICEGELS-0359,Petal Tips Set,"pale pink ombre French tip with 3d gel art and 3d flower

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.7169848421_10v8.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0024?shape=Almond&length=Medium,Juicegels_PetalTipsSet,Almond,Medium\r
JUICEGELS-0360,Petal Tips Set,"pale pink ombre French tip with 3d gel art and 3d flower

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.7169848421_10v8.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0024?shape=Almond&length=Long,Juicegels_PetalTipsSet,Almond,Long\r
JUICEGELS-0361,Colour Pop Parade Set,"Multicoloured nail art with minimal 3d art  

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7161361001_1iou.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0025?shape=Square&length=Short,Juicegels_ColourPopParadeSet,Square,Short\r
JUICEGELS-0362,Colour Pop Parade Set,"Multicoloured nail art with minimal 3d art  

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7161361001_1iou.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0025?shape=Square&length=Medium,Juicegels_ColourPopParadeSet,Square,Medium\r
JUICEGELS-0363,Colour Pop Parade Set,"Multicoloured nail art with minimal 3d art  

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7161361001_1iou.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0025?shape=Square&length=Long,Juicegels_ColourPopParadeSet,Square,Long\r
JUICEGELS-0364,Colour Pop Parade Set,"Multicoloured nail art with minimal 3d art  

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7161361001_1iou.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0025?shape=Oval&length=Short,Juicegels_ColourPopParadeSet,Oval,Short\r
JUICEGELS-0365,Colour Pop Parade Set,"Multicoloured nail art with minimal 3d art  

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7161361001_1iou.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0025?shape=Oval&length=Medium,Juicegels_ColourPopParadeSet,Oval,Medium\r
JUICEGELS-0366,Colour Pop Parade Set,"Multicoloured nail art with minimal 3d art  

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7161361001_1iou.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0025?shape=Oval&length=Long,Juicegels_ColourPopParadeSet,Oval,Long\r
JUICEGELS-0367,Colour Pop Parade Set,"Multicoloured nail art with minimal 3d art  

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7161361001_1iou.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0025?shape=Stiletto&length=Short,Juicegels_ColourPopParadeSet,Stiletto,Short\r
JUICEGELS-0368,Colour Pop Parade Set,"Multicoloured nail art with minimal 3d art  

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7161361001_1iou.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0025?shape=Stiletto&length=Medium,Juicegels_ColourPopParadeSet,Stiletto,Medium\r
JUICEGELS-0369,Colour Pop Parade Set,"Multicoloured nail art with minimal 3d art  

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7161361001_1iou.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0025?shape=Stiletto&length=Long,Juicegels_ColourPopParadeSet,Stiletto,Long\r
JUICEGELS-0370,Colour Pop Parade Set,"Multicoloured nail art with minimal 3d art  

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7161361001_1iou.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0025?shape=Coffin&length=Short,Juicegels_ColourPopParadeSet,Coffin,Short\r
JUICEGELS-0371,Colour Pop Parade Set,"Multicoloured nail art with minimal 3d art  

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7161361001_1iou.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0025?shape=Coffin&length=Medium,Juicegels_ColourPopParadeSet,Coffin,Medium\r
JUICEGELS-0372,Colour Pop Parade Set,"Multicoloured nail art with minimal 3d art  

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7161361001_1iou.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0025?shape=Coffin&length=Long,Juicegels_ColourPopParadeSet,Coffin,Long\r
JUICEGELS-0373,Colour Pop Parade Set,"Multicoloured nail art with minimal 3d art  

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7161361001_1iou.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0025?shape=Almond&length=Short,Juicegels_ColourPopParadeSet,Almond,Short\r
JUICEGELS-0374,Colour Pop Parade Set,"Multicoloured nail art with minimal 3d art  

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7161361001_1iou.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0025?shape=Almond&length=Medium,Juicegels_ColourPopParadeSet,Almond,Medium\r
JUICEGELS-0375,Colour Pop Parade Set,"Multicoloured nail art with minimal 3d art  

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7161361001_1iou.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0025?shape=Almond&length=Long,Juicegels_ColourPopParadeSet,Almond,Long\r
JUICEGELS-0376,Blossom Tips Set,"French tips with branches and 3d flowers with pearl centre

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.7113384080_9gvi.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0026?shape=Square&length=Short,Juicegels_BlossomTipsSet,Square,Short\r
JUICEGELS-0377,Blossom Tips Set,"French tips with branches and 3d flowers with pearl centre

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.7113384080_9gvi.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0026?shape=Square&length=Medium,Juicegels_BlossomTipsSet,Square,Medium\r
JUICEGELS-0378,Blossom Tips Set,"French tips with branches and 3d flowers with pearl centre

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.7113384080_9gvi.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0026?shape=Square&length=Long,Juicegels_BlossomTipsSet,Square,Long\r
JUICEGELS-0379,Blossom Tips Set,"French tips with branches and 3d flowers with pearl centre

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.7113384080_9gvi.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0026?shape=Oval&length=Short,Juicegels_BlossomTipsSet,Oval,Short\r
JUICEGELS-0380,Blossom Tips Set,"French tips with branches and 3d flowers with pearl centre

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.7113384080_9gvi.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0026?shape=Oval&length=Medium,Juicegels_BlossomTipsSet,Oval,Medium\r
JUICEGELS-0381,Blossom Tips Set,"French tips with branches and 3d flowers with pearl centre

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.7113384080_9gvi.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0026?shape=Oval&length=Long,Juicegels_BlossomTipsSet,Oval,Long\r
JUICEGELS-0382,Blossom Tips Set,"French tips with branches and 3d flowers with pearl centre

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.7113384080_9gvi.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0026?shape=Stiletto&length=Short,Juicegels_BlossomTipsSet,Stiletto,Short\r
JUICEGELS-0383,Blossom Tips Set,"French tips with branches and 3d flowers with pearl centre

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.7113384080_9gvi.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0026?shape=Stiletto&length=Medium,Juicegels_BlossomTipsSet,Stiletto,Medium\r
JUICEGELS-0384,Blossom Tips Set,"French tips with branches and 3d flowers with pearl centre

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.7113384080_9gvi.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0026?shape=Stiletto&length=Long,Juicegels_BlossomTipsSet,Stiletto,Long\r
JUICEGELS-0385,Blossom Tips Set,"French tips with branches and 3d flowers with pearl centre

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.7113384080_9gvi.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0026?shape=Coffin&length=Short,Juicegels_BlossomTipsSet,Coffin,Short\r
JUICEGELS-0386,Blossom Tips Set,"French tips with branches and 3d flowers with pearl centre

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.7113384080_9gvi.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0026?shape=Coffin&length=Medium,Juicegels_BlossomTipsSet,Coffin,Medium\r
JUICEGELS-0387,Blossom Tips Set,"French tips with branches and 3d flowers with pearl centre

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.7113384080_9gvi.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0026?shape=Coffin&length=Long,Juicegels_BlossomTipsSet,Coffin,Long\r
JUICEGELS-0388,Blossom Tips Set,"French tips with branches and 3d flowers with pearl centre

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.7113384080_9gvi.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0026?shape=Almond&length=Short,Juicegels_BlossomTipsSet,Almond,Short\r
JUICEGELS-0389,Blossom Tips Set,"French tips with branches and 3d flowers with pearl centre

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.7113384080_9gvi.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0026?shape=Almond&length=Medium,Juicegels_BlossomTipsSet,Almond,Medium\r
JUICEGELS-0390,Blossom Tips Set,"French tips with branches and 3d flowers with pearl centre

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.7113384080_9gvi.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0026?shape=Almond&length=Long,Juicegels_BlossomTipsSet,Almond,Long\r
JUICEGELS-0391,Cobalt Crème Set,"Almond cobalt coloured designing with pale yellow art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7113381420_e5gj.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0027?shape=Square&length=Short,Juicegels_CobaltCrmeSet,Square,Short\r
JUICEGELS-0392,Cobalt Crème Set,"Almond cobalt coloured designing with pale yellow art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7113381420_e5gj.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0027?shape=Square&length=Medium,Juicegels_CobaltCrmeSet,Square,Medium\r
JUICEGELS-0393,Cobalt Crème Set,"Almond cobalt coloured designing with pale yellow art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7113381420_e5gj.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0027?shape=Square&length=Long,Juicegels_CobaltCrmeSet,Square,Long\r
JUICEGELS-0394,Cobalt Crème Set,"Almond cobalt coloured designing with pale yellow art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7113381420_e5gj.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0027?shape=Oval&length=Short,Juicegels_CobaltCrmeSet,Oval,Short\r
JUICEGELS-0395,Cobalt Crème Set,"Almond cobalt coloured designing with pale yellow art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7113381420_e5gj.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0027?shape=Oval&length=Medium,Juicegels_CobaltCrmeSet,Oval,Medium\r
JUICEGELS-0396,Cobalt Crème Set,"Almond cobalt coloured designing with pale yellow art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7113381420_e5gj.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0027?shape=Oval&length=Long,Juicegels_CobaltCrmeSet,Oval,Long\r
JUICEGELS-0397,Cobalt Crème Set,"Almond cobalt coloured designing with pale yellow art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7113381420_e5gj.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0027?shape=Stiletto&length=Short,Juicegels_CobaltCrmeSet,Stiletto,Short\r
JUICEGELS-0398,Cobalt Crème Set,"Almond cobalt coloured designing with pale yellow art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7113381420_e5gj.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0027?shape=Stiletto&length=Medium,Juicegels_CobaltCrmeSet,Stiletto,Medium\r
JUICEGELS-0399,Cobalt Crème Set,"Almond cobalt coloured designing with pale yellow art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7113381420_e5gj.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0027?shape=Stiletto&length=Long,Juicegels_CobaltCrmeSet,Stiletto,Long\r
JUICEGELS-0400,Cobalt Crème Set,"Almond cobalt coloured designing with pale yellow art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7113381420_e5gj.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0027?shape=Coffin&length=Short,Juicegels_CobaltCrmeSet,Coffin,Short\r
JUICEGELS-0401,Cobalt Crème Set,"Almond cobalt coloured designing with pale yellow art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7113381420_e5gj.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0027?shape=Coffin&length=Medium,Juicegels_CobaltCrmeSet,Coffin,Medium\r
JUICEGELS-0402,Cobalt Crème Set,"Almond cobalt coloured designing with pale yellow art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7113381420_e5gj.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0027?shape=Coffin&length=Long,Juicegels_CobaltCrmeSet,Coffin,Long\r
JUICEGELS-0403,Cobalt Crème Set,"Almond cobalt coloured designing with pale yellow art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7113381420_e5gj.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0027?shape=Almond&length=Short,Juicegels_CobaltCrmeSet,Almond,Short\r
JUICEGELS-0404,Cobalt Crème Set,"Almond cobalt coloured designing with pale yellow art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7113381420_e5gj.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0027?shape=Almond&length=Medium,Juicegels_CobaltCrmeSet,Almond,Medium\r
JUICEGELS-0405,Cobalt Crème Set,"Almond cobalt coloured designing with pale yellow art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7113381420_e5gj.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0027?shape=Almond&length=Long,Juicegels_CobaltCrmeSet,Almond,Long\r
JUICEGELS-0406,Tangerine Tips Set,"neutral based almond nails with French tips and orange detail and flower art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161350617_gptg.jpg,https://juicegels.com/images/products/il_fullxfull.7113376734_gknd.jpg,https://juicegels.com/images/products/il_fullxfull.7113376738_538h.jpg,https://juicegels.com/images/products/il_fullxfull.7113376730_j7pq.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0028?shape=Square&length=Short,Juicegels_TangerineTipsSet,Square,Short\r
JUICEGELS-0407,Tangerine Tips Set,"neutral based almond nails with French tips and orange detail and flower art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161350617_gptg.jpg,https://juicegels.com/images/products/il_fullxfull.7113376734_gknd.jpg,https://juicegels.com/images/products/il_fullxfull.7113376738_538h.jpg,https://juicegels.com/images/products/il_fullxfull.7113376730_j7pq.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0028?shape=Square&length=Medium,Juicegels_TangerineTipsSet,Square,Medium\r
JUICEGELS-0408,Tangerine Tips Set,"neutral based almond nails with French tips and orange detail and flower art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161350617_gptg.jpg,https://juicegels.com/images/products/il_fullxfull.7113376734_gknd.jpg,https://juicegels.com/images/products/il_fullxfull.7113376738_538h.jpg,https://juicegels.com/images/products/il_fullxfull.7113376730_j7pq.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0028?shape=Square&length=Long,Juicegels_TangerineTipsSet,Square,Long\r
JUICEGELS-0409,Tangerine Tips Set,"neutral based almond nails with French tips and orange detail and flower art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161350617_gptg.jpg,https://juicegels.com/images/products/il_fullxfull.7113376734_gknd.jpg,https://juicegels.com/images/products/il_fullxfull.7113376738_538h.jpg,https://juicegels.com/images/products/il_fullxfull.7113376730_j7pq.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0028?shape=Oval&length=Short,Juicegels_TangerineTipsSet,Oval,Short\r
JUICEGELS-0410,Tangerine Tips Set,"neutral based almond nails with French tips and orange detail and flower art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161350617_gptg.jpg,https://juicegels.com/images/products/il_fullxfull.7113376734_gknd.jpg,https://juicegels.com/images/products/il_fullxfull.7113376738_538h.jpg,https://juicegels.com/images/products/il_fullxfull.7113376730_j7pq.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0028?shape=Oval&length=Medium,Juicegels_TangerineTipsSet,Oval,Medium\r
JUICEGELS-0411,Tangerine Tips Set,"neutral based almond nails with French tips and orange detail and flower art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161350617_gptg.jpg,https://juicegels.com/images/products/il_fullxfull.7113376734_gknd.jpg,https://juicegels.com/images/products/il_fullxfull.7113376738_538h.jpg,https://juicegels.com/images/products/il_fullxfull.7113376730_j7pq.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0028?shape=Oval&length=Long,Juicegels_TangerineTipsSet,Oval,Long\r
JUICEGELS-0412,Tangerine Tips Set,"neutral based almond nails with French tips and orange detail and flower art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161350617_gptg.jpg,https://juicegels.com/images/products/il_fullxfull.7113376734_gknd.jpg,https://juicegels.com/images/products/il_fullxfull.7113376738_538h.jpg,https://juicegels.com/images/products/il_fullxfull.7113376730_j7pq.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0028?shape=Stiletto&length=Short,Juicegels_TangerineTipsSet,Stiletto,Short\r
JUICEGELS-0413,Tangerine Tips Set,"neutral based almond nails with French tips and orange detail and flower art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161350617_gptg.jpg,https://juicegels.com/images/products/il_fullxfull.7113376734_gknd.jpg,https://juicegels.com/images/products/il_fullxfull.7113376738_538h.jpg,https://juicegels.com/images/products/il_fullxfull.7113376730_j7pq.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0028?shape=Stiletto&length=Medium,Juicegels_TangerineTipsSet,Stiletto,Medium\r
JUICEGELS-0414,Tangerine Tips Set,"neutral based almond nails with French tips and orange detail and flower art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161350617_gptg.jpg,https://juicegels.com/images/products/il_fullxfull.7113376734_gknd.jpg,https://juicegels.com/images/products/il_fullxfull.7113376738_538h.jpg,https://juicegels.com/images/products/il_fullxfull.7113376730_j7pq.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0028?shape=Stiletto&length=Long,Juicegels_TangerineTipsSet,Stiletto,Long\r
JUICEGELS-0415,Tangerine Tips Set,"neutral based almond nails with French tips and orange detail and flower art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161350617_gptg.jpg,https://juicegels.com/images/products/il_fullxfull.7113376734_gknd.jpg,https://juicegels.com/images/products/il_fullxfull.7113376738_538h.jpg,https://juicegels.com/images/products/il_fullxfull.7113376730_j7pq.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0028?shape=Coffin&length=Short,Juicegels_TangerineTipsSet,Coffin,Short\r
JUICEGELS-0416,Tangerine Tips Set,"neutral based almond nails with French tips and orange detail and flower art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161350617_gptg.jpg,https://juicegels.com/images/products/il_fullxfull.7113376734_gknd.jpg,https://juicegels.com/images/products/il_fullxfull.7113376738_538h.jpg,https://juicegels.com/images/products/il_fullxfull.7113376730_j7pq.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0028?shape=Coffin&length=Medium,Juicegels_TangerineTipsSet,Coffin,Medium\r
JUICEGELS-0417,Tangerine Tips Set,"neutral based almond nails with French tips and orange detail and flower art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161350617_gptg.jpg,https://juicegels.com/images/products/il_fullxfull.7113376734_gknd.jpg,https://juicegels.com/images/products/il_fullxfull.7113376738_538h.jpg,https://juicegels.com/images/products/il_fullxfull.7113376730_j7pq.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0028?shape=Coffin&length=Long,Juicegels_TangerineTipsSet,Coffin,Long\r
JUICEGELS-0418,Tangerine Tips Set,"neutral based almond nails with French tips and orange detail and flower art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161350617_gptg.jpg,https://juicegels.com/images/products/il_fullxfull.7113376734_gknd.jpg,https://juicegels.com/images/products/il_fullxfull.7113376738_538h.jpg,https://juicegels.com/images/products/il_fullxfull.7113376730_j7pq.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0028?shape=Almond&length=Short,Juicegels_TangerineTipsSet,Almond,Short\r
JUICEGELS-0419,Tangerine Tips Set,"neutral based almond nails with French tips and orange detail and flower art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161350617_gptg.jpg,https://juicegels.com/images/products/il_fullxfull.7113376734_gknd.jpg,https://juicegels.com/images/products/il_fullxfull.7113376738_538h.jpg,https://juicegels.com/images/products/il_fullxfull.7113376730_j7pq.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0028?shape=Almond&length=Medium,Juicegels_TangerineTipsSet,Almond,Medium\r
JUICEGELS-0420,Tangerine Tips Set,"neutral based almond nails with French tips and orange detail and flower art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.7161350617_gptg.jpg,https://juicegels.com/images/products/il_fullxfull.7113376734_gknd.jpg,https://juicegels.com/images/products/il_fullxfull.7113376738_538h.jpg,https://juicegels.com/images/products/il_fullxfull.7113376730_j7pq.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0028?shape=Almond&length=Long,Juicegels_TangerineTipsSet,Almond,Long\r
JUICEGELS-0421,Tangerine Luxe Set,"Almond nails with orange hue gold line art and 3d gel art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7113372746_rjln.jpg,https://juicegels.com/images/products/il_fullxfull.7161346781_pdej.jpg,https://juicegels.com/images/products/il_fullxfull.7161346779_1asb.jpg,https://juicegels.com/images/products/il_fullxfull.7113372748_smbl.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0029?shape=Square&length=Short,Juicegels_TangerineLuxeSet,Square,Short\r
JUICEGELS-0422,Tangerine Luxe Set,"Almond nails with orange hue gold line art and 3d gel art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7113372746_rjln.jpg,https://juicegels.com/images/products/il_fullxfull.7161346781_pdej.jpg,https://juicegels.com/images/products/il_fullxfull.7161346779_1asb.jpg,https://juicegels.com/images/products/il_fullxfull.7113372748_smbl.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0029?shape=Square&length=Medium,Juicegels_TangerineLuxeSet,Square,Medium\r
JUICEGELS-0423,Tangerine Luxe Set,"Almond nails with orange hue gold line art and 3d gel art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7113372746_rjln.jpg,https://juicegels.com/images/products/il_fullxfull.7161346781_pdej.jpg,https://juicegels.com/images/products/il_fullxfull.7161346779_1asb.jpg,https://juicegels.com/images/products/il_fullxfull.7113372748_smbl.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0029?shape=Square&length=Long,Juicegels_TangerineLuxeSet,Square,Long\r
JUICEGELS-0424,Tangerine Luxe Set,"Almond nails with orange hue gold line art and 3d gel art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7113372746_rjln.jpg,https://juicegels.com/images/products/il_fullxfull.7161346781_pdej.jpg,https://juicegels.com/images/products/il_fullxfull.7161346779_1asb.jpg,https://juicegels.com/images/products/il_fullxfull.7113372748_smbl.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0029?shape=Oval&length=Short,Juicegels_TangerineLuxeSet,Oval,Short\r
JUICEGELS-0425,Tangerine Luxe Set,"Almond nails with orange hue gold line art and 3d gel art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7113372746_rjln.jpg,https://juicegels.com/images/products/il_fullxfull.7161346781_pdej.jpg,https://juicegels.com/images/products/il_fullxfull.7161346779_1asb.jpg,https://juicegels.com/images/products/il_fullxfull.7113372748_smbl.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0029?shape=Oval&length=Medium,Juicegels_TangerineLuxeSet,Oval,Medium\r
JUICEGELS-0426,Tangerine Luxe Set,"Almond nails with orange hue gold line art and 3d gel art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7113372746_rjln.jpg,https://juicegels.com/images/products/il_fullxfull.7161346781_pdej.jpg,https://juicegels.com/images/products/il_fullxfull.7161346779_1asb.jpg,https://juicegels.com/images/products/il_fullxfull.7113372748_smbl.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0029?shape=Oval&length=Long,Juicegels_TangerineLuxeSet,Oval,Long\r
JUICEGELS-0427,Tangerine Luxe Set,"Almond nails with orange hue gold line art and 3d gel art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7113372746_rjln.jpg,https://juicegels.com/images/products/il_fullxfull.7161346781_pdej.jpg,https://juicegels.com/images/products/il_fullxfull.7161346779_1asb.jpg,https://juicegels.com/images/products/il_fullxfull.7113372748_smbl.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0029?shape=Stiletto&length=Short,Juicegels_TangerineLuxeSet,Stiletto,Short\r
JUICEGELS-0428,Tangerine Luxe Set,"Almond nails with orange hue gold line art and 3d gel art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7113372746_rjln.jpg,https://juicegels.com/images/products/il_fullxfull.7161346781_pdej.jpg,https://juicegels.com/images/products/il_fullxfull.7161346779_1asb.jpg,https://juicegels.com/images/products/il_fullxfull.7113372748_smbl.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0029?shape=Stiletto&length=Medium,Juicegels_TangerineLuxeSet,Stiletto,Medium\r
JUICEGELS-0429,Tangerine Luxe Set,"Almond nails with orange hue gold line art and 3d gel art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7113372746_rjln.jpg,https://juicegels.com/images/products/il_fullxfull.7161346781_pdej.jpg,https://juicegels.com/images/products/il_fullxfull.7161346779_1asb.jpg,https://juicegels.com/images/products/il_fullxfull.7113372748_smbl.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0029?shape=Stiletto&length=Long,Juicegels_TangerineLuxeSet,Stiletto,Long\r
JUICEGELS-0430,Tangerine Luxe Set,"Almond nails with orange hue gold line art and 3d gel art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7113372746_rjln.jpg,https://juicegels.com/images/products/il_fullxfull.7161346781_pdej.jpg,https://juicegels.com/images/products/il_fullxfull.7161346779_1asb.jpg,https://juicegels.com/images/products/il_fullxfull.7113372748_smbl.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0029?shape=Coffin&length=Short,Juicegels_TangerineLuxeSet,Coffin,Short\r
JUICEGELS-0431,Tangerine Luxe Set,"Almond nails with orange hue gold line art and 3d gel art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7113372746_rjln.jpg,https://juicegels.com/images/products/il_fullxfull.7161346781_pdej.jpg,https://juicegels.com/images/products/il_fullxfull.7161346779_1asb.jpg,https://juicegels.com/images/products/il_fullxfull.7113372748_smbl.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0029?shape=Coffin&length=Medium,Juicegels_TangerineLuxeSet,Coffin,Medium\r
JUICEGELS-0432,Tangerine Luxe Set,"Almond nails with orange hue gold line art and 3d gel art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7113372746_rjln.jpg,https://juicegels.com/images/products/il_fullxfull.7161346781_pdej.jpg,https://juicegels.com/images/products/il_fullxfull.7161346779_1asb.jpg,https://juicegels.com/images/products/il_fullxfull.7113372748_smbl.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0029?shape=Coffin&length=Long,Juicegels_TangerineLuxeSet,Coffin,Long\r
JUICEGELS-0433,Tangerine Luxe Set,"Almond nails with orange hue gold line art and 3d gel art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7113372746_rjln.jpg,https://juicegels.com/images/products/il_fullxfull.7161346781_pdej.jpg,https://juicegels.com/images/products/il_fullxfull.7161346779_1asb.jpg,https://juicegels.com/images/products/il_fullxfull.7113372748_smbl.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0029?shape=Almond&length=Short,Juicegels_TangerineLuxeSet,Almond,Short\r
JUICEGELS-0434,Tangerine Luxe Set,"Almond nails with orange hue gold line art and 3d gel art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7113372746_rjln.jpg,https://juicegels.com/images/products/il_fullxfull.7161346781_pdej.jpg,https://juicegels.com/images/products/il_fullxfull.7161346779_1asb.jpg,https://juicegels.com/images/products/il_fullxfull.7113372748_smbl.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0029?shape=Almond&length=Medium,Juicegels_TangerineLuxeSet,Almond,Medium\r
JUICEGELS-0435,Tangerine Luxe Set,"Almond nails with orange hue gold line art and 3d gel art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7113372746_rjln.jpg,https://juicegels.com/images/products/il_fullxfull.7161346781_pdej.jpg,https://juicegels.com/images/products/il_fullxfull.7161346779_1asb.jpg,https://juicegels.com/images/products/il_fullxfull.7113372748_smbl.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0029?shape=Almond&length=Long,Juicegels_TangerineLuxeSet,Almond,Long\r
JUICEGELS-0436,Sundown Shine Set,"1/2 of the Sunshift Duo Set, deeper set version where the sun dips but the colour still shines.  

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7161329483_2uvv.jpg,https://juicegels.com/images/products/il_fullxfull.7161329485_ro54.jpg,https://juicegels.com/images/products/il_fullxfull.7161329487_9lrm.jpg,https://juicegels.com/images/products/il_fullxfull.7161329495_m908.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0030?shape=Square&length=Short,Juicegels_SundownShineSet,Square,Short\r
JUICEGELS-0437,Sundown Shine Set,"1/2 of the Sunshift Duo Set, deeper set version where the sun dips but the colour still shines.  

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7161329483_2uvv.jpg,https://juicegels.com/images/products/il_fullxfull.7161329485_ro54.jpg,https://juicegels.com/images/products/il_fullxfull.7161329487_9lrm.jpg,https://juicegels.com/images/products/il_fullxfull.7161329495_m908.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0030?shape=Square&length=Medium,Juicegels_SundownShineSet,Square,Medium\r
JUICEGELS-0438,Sundown Shine Set,"1/2 of the Sunshift Duo Set, deeper set version where the sun dips but the colour still shines.  

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7161329483_2uvv.jpg,https://juicegels.com/images/products/il_fullxfull.7161329485_ro54.jpg,https://juicegels.com/images/products/il_fullxfull.7161329487_9lrm.jpg,https://juicegels.com/images/products/il_fullxfull.7161329495_m908.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0030?shape=Square&length=Long,Juicegels_SundownShineSet,Square,Long\r
JUICEGELS-0439,Sundown Shine Set,"1/2 of the Sunshift Duo Set, deeper set version where the sun dips but the colour still shines.  

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7161329483_2uvv.jpg,https://juicegels.com/images/products/il_fullxfull.7161329485_ro54.jpg,https://juicegels.com/images/products/il_fullxfull.7161329487_9lrm.jpg,https://juicegels.com/images/products/il_fullxfull.7161329495_m908.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0030?shape=Oval&length=Short,Juicegels_SundownShineSet,Oval,Short\r
JUICEGELS-0440,Sundown Shine Set,"1/2 of the Sunshift Duo Set, deeper set version where the sun dips but the colour still shines.  

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7161329483_2uvv.jpg,https://juicegels.com/images/products/il_fullxfull.7161329485_ro54.jpg,https://juicegels.com/images/products/il_fullxfull.7161329487_9lrm.jpg,https://juicegels.com/images/products/il_fullxfull.7161329495_m908.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0030?shape=Oval&length=Medium,Juicegels_SundownShineSet,Oval,Medium\r
JUICEGELS-0441,Sundown Shine Set,"1/2 of the Sunshift Duo Set, deeper set version where the sun dips but the colour still shines.  

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7161329483_2uvv.jpg,https://juicegels.com/images/products/il_fullxfull.7161329485_ro54.jpg,https://juicegels.com/images/products/il_fullxfull.7161329487_9lrm.jpg,https://juicegels.com/images/products/il_fullxfull.7161329495_m908.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0030?shape=Oval&length=Long,Juicegels_SundownShineSet,Oval,Long\r
JUICEGELS-0442,Sundown Shine Set,"1/2 of the Sunshift Duo Set, deeper set version where the sun dips but the colour still shines.  

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7161329483_2uvv.jpg,https://juicegels.com/images/products/il_fullxfull.7161329485_ro54.jpg,https://juicegels.com/images/products/il_fullxfull.7161329487_9lrm.jpg,https://juicegels.com/images/products/il_fullxfull.7161329495_m908.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0030?shape=Stiletto&length=Short,Juicegels_SundownShineSet,Stiletto,Short\r
JUICEGELS-0443,Sundown Shine Set,"1/2 of the Sunshift Duo Set, deeper set version where the sun dips but the colour still shines.  

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7161329483_2uvv.jpg,https://juicegels.com/images/products/il_fullxfull.7161329485_ro54.jpg,https://juicegels.com/images/products/il_fullxfull.7161329487_9lrm.jpg,https://juicegels.com/images/products/il_fullxfull.7161329495_m908.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0030?shape=Stiletto&length=Medium,Juicegels_SundownShineSet,Stiletto,Medium\r
JUICEGELS-0444,Sundown Shine Set,"1/2 of the Sunshift Duo Set, deeper set version where the sun dips but the colour still shines.  

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7161329483_2uvv.jpg,https://juicegels.com/images/products/il_fullxfull.7161329485_ro54.jpg,https://juicegels.com/images/products/il_fullxfull.7161329487_9lrm.jpg,https://juicegels.com/images/products/il_fullxfull.7161329495_m908.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0030?shape=Stiletto&length=Long,Juicegels_SundownShineSet,Stiletto,Long\r
JUICEGELS-0445,Sundown Shine Set,"1/2 of the Sunshift Duo Set, deeper set version where the sun dips but the colour still shines.  

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7161329483_2uvv.jpg,https://juicegels.com/images/products/il_fullxfull.7161329485_ro54.jpg,https://juicegels.com/images/products/il_fullxfull.7161329487_9lrm.jpg,https://juicegels.com/images/products/il_fullxfull.7161329495_m908.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0030?shape=Coffin&length=Short,Juicegels_SundownShineSet,Coffin,Short\r
JUICEGELS-0446,Sundown Shine Set,"1/2 of the Sunshift Duo Set, deeper set version where the sun dips but the colour still shines.  

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7161329483_2uvv.jpg,https://juicegels.com/images/products/il_fullxfull.7161329485_ro54.jpg,https://juicegels.com/images/products/il_fullxfull.7161329487_9lrm.jpg,https://juicegels.com/images/products/il_fullxfull.7161329495_m908.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0030?shape=Coffin&length=Medium,Juicegels_SundownShineSet,Coffin,Medium\r
JUICEGELS-0447,Sundown Shine Set,"1/2 of the Sunshift Duo Set, deeper set version where the sun dips but the colour still shines.  

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7161329483_2uvv.jpg,https://juicegels.com/images/products/il_fullxfull.7161329485_ro54.jpg,https://juicegels.com/images/products/il_fullxfull.7161329487_9lrm.jpg,https://juicegels.com/images/products/il_fullxfull.7161329495_m908.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0030?shape=Coffin&length=Long,Juicegels_SundownShineSet,Coffin,Long\r
JUICEGELS-0448,Sundown Shine Set,"1/2 of the Sunshift Duo Set, deeper set version where the sun dips but the colour still shines.  

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7161329483_2uvv.jpg,https://juicegels.com/images/products/il_fullxfull.7161329485_ro54.jpg,https://juicegels.com/images/products/il_fullxfull.7161329487_9lrm.jpg,https://juicegels.com/images/products/il_fullxfull.7161329495_m908.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0030?shape=Almond&length=Short,Juicegels_SundownShineSet,Almond,Short\r
JUICEGELS-0449,Sundown Shine Set,"1/2 of the Sunshift Duo Set, deeper set version where the sun dips but the colour still shines.  

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7161329483_2uvv.jpg,https://juicegels.com/images/products/il_fullxfull.7161329485_ro54.jpg,https://juicegels.com/images/products/il_fullxfull.7161329487_9lrm.jpg,https://juicegels.com/images/products/il_fullxfull.7161329495_m908.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0030?shape=Almond&length=Medium,Juicegels_SundownShineSet,Almond,Medium\r
JUICEGELS-0450,Sundown Shine Set,"1/2 of the Sunshift Duo Set, deeper set version where the sun dips but the colour still shines.  

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7161329483_2uvv.jpg,https://juicegels.com/images/products/il_fullxfull.7161329485_ro54.jpg,https://juicegels.com/images/products/il_fullxfull.7161329487_9lrm.jpg,https://juicegels.com/images/products/il_fullxfull.7161329495_m908.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0030?shape=Almond&length=Long,Juicegels_SundownShineSet,Almond,Long\r
JUICEGELS-0451,Sunset Haze Set,"1/2 of the Sunshift Duo Set, warmer set version wwith all the warmth of golden hour, bottled in a blooming nail set. 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7161335591_kzzx.jpg,https://juicegels.com/images/products/il_fullxfull.7161329485_ro54.jpg,https://juicegels.com/images/products/il_fullxfull.7161329487_9lrm.jpg,https://juicegels.com/images/products/il_fullxfull.7161329495_m908.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0031?shape=Square&length=Short,Juicegels_SunsetHazeSet,Square,Short\r
JUICEGELS-0452,Sunset Haze Set,"1/2 of the Sunshift Duo Set, warmer set version wwith all the warmth of golden hour, bottled in a blooming nail set. 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7161335591_kzzx.jpg,https://juicegels.com/images/products/il_fullxfull.7161329485_ro54.jpg,https://juicegels.com/images/products/il_fullxfull.7161329487_9lrm.jpg,https://juicegels.com/images/products/il_fullxfull.7161329495_m908.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0031?shape=Square&length=Medium,Juicegels_SunsetHazeSet,Square,Medium\r
JUICEGELS-0453,Sunset Haze Set,"1/2 of the Sunshift Duo Set, warmer set version wwith all the warmth of golden hour, bottled in a blooming nail set. 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7161335591_kzzx.jpg,https://juicegels.com/images/products/il_fullxfull.7161329485_ro54.jpg,https://juicegels.com/images/products/il_fullxfull.7161329487_9lrm.jpg,https://juicegels.com/images/products/il_fullxfull.7161329495_m908.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0031?shape=Square&length=Long,Juicegels_SunsetHazeSet,Square,Long\r
JUICEGELS-0454,Sunset Haze Set,"1/2 of the Sunshift Duo Set, warmer set version wwith all the warmth of golden hour, bottled in a blooming nail set. 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7161335591_kzzx.jpg,https://juicegels.com/images/products/il_fullxfull.7161329485_ro54.jpg,https://juicegels.com/images/products/il_fullxfull.7161329487_9lrm.jpg,https://juicegels.com/images/products/il_fullxfull.7161329495_m908.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0031?shape=Oval&length=Short,Juicegels_SunsetHazeSet,Oval,Short\r
JUICEGELS-0455,Sunset Haze Set,"1/2 of the Sunshift Duo Set, warmer set version wwith all the warmth of golden hour, bottled in a blooming nail set. 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7161335591_kzzx.jpg,https://juicegels.com/images/products/il_fullxfull.7161329485_ro54.jpg,https://juicegels.com/images/products/il_fullxfull.7161329487_9lrm.jpg,https://juicegels.com/images/products/il_fullxfull.7161329495_m908.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0031?shape=Oval&length=Medium,Juicegels_SunsetHazeSet,Oval,Medium\r
JUICEGELS-0456,Sunset Haze Set,"1/2 of the Sunshift Duo Set, warmer set version wwith all the warmth of golden hour, bottled in a blooming nail set. 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7161335591_kzzx.jpg,https://juicegels.com/images/products/il_fullxfull.7161329485_ro54.jpg,https://juicegels.com/images/products/il_fullxfull.7161329487_9lrm.jpg,https://juicegels.com/images/products/il_fullxfull.7161329495_m908.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0031?shape=Oval&length=Long,Juicegels_SunsetHazeSet,Oval,Long\r
JUICEGELS-0457,Sunset Haze Set,"1/2 of the Sunshift Duo Set, warmer set version wwith all the warmth of golden hour, bottled in a blooming nail set. 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7161335591_kzzx.jpg,https://juicegels.com/images/products/il_fullxfull.7161329485_ro54.jpg,https://juicegels.com/images/products/il_fullxfull.7161329487_9lrm.jpg,https://juicegels.com/images/products/il_fullxfull.7161329495_m908.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0031?shape=Stiletto&length=Short,Juicegels_SunsetHazeSet,Stiletto,Short\r
JUICEGELS-0458,Sunset Haze Set,"1/2 of the Sunshift Duo Set, warmer set version wwith all the warmth of golden hour, bottled in a blooming nail set. 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7161335591_kzzx.jpg,https://juicegels.com/images/products/il_fullxfull.7161329485_ro54.jpg,https://juicegels.com/images/products/il_fullxfull.7161329487_9lrm.jpg,https://juicegels.com/images/products/il_fullxfull.7161329495_m908.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0031?shape=Stiletto&length=Medium,Juicegels_SunsetHazeSet,Stiletto,Medium\r
JUICEGELS-0459,Sunset Haze Set,"1/2 of the Sunshift Duo Set, warmer set version wwith all the warmth of golden hour, bottled in a blooming nail set. 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7161335591_kzzx.jpg,https://juicegels.com/images/products/il_fullxfull.7161329485_ro54.jpg,https://juicegels.com/images/products/il_fullxfull.7161329487_9lrm.jpg,https://juicegels.com/images/products/il_fullxfull.7161329495_m908.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0031?shape=Stiletto&length=Long,Juicegels_SunsetHazeSet,Stiletto,Long\r
JUICEGELS-0460,Sunset Haze Set,"1/2 of the Sunshift Duo Set, warmer set version wwith all the warmth of golden hour, bottled in a blooming nail set. 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7161335591_kzzx.jpg,https://juicegels.com/images/products/il_fullxfull.7161329485_ro54.jpg,https://juicegels.com/images/products/il_fullxfull.7161329487_9lrm.jpg,https://juicegels.com/images/products/il_fullxfull.7161329495_m908.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0031?shape=Coffin&length=Short,Juicegels_SunsetHazeSet,Coffin,Short\r
JUICEGELS-0461,Sunset Haze Set,"1/2 of the Sunshift Duo Set, warmer set version wwith all the warmth of golden hour, bottled in a blooming nail set. 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7161335591_kzzx.jpg,https://juicegels.com/images/products/il_fullxfull.7161329485_ro54.jpg,https://juicegels.com/images/products/il_fullxfull.7161329487_9lrm.jpg,https://juicegels.com/images/products/il_fullxfull.7161329495_m908.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0031?shape=Coffin&length=Medium,Juicegels_SunsetHazeSet,Coffin,Medium\r
JUICEGELS-0462,Sunset Haze Set,"1/2 of the Sunshift Duo Set, warmer set version wwith all the warmth of golden hour, bottled in a blooming nail set. 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7161335591_kzzx.jpg,https://juicegels.com/images/products/il_fullxfull.7161329485_ro54.jpg,https://juicegels.com/images/products/il_fullxfull.7161329487_9lrm.jpg,https://juicegels.com/images/products/il_fullxfull.7161329495_m908.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0031?shape=Coffin&length=Long,Juicegels_SunsetHazeSet,Coffin,Long\r
JUICEGELS-0463,Sunset Haze Set,"1/2 of the Sunshift Duo Set, warmer set version wwith all the warmth of golden hour, bottled in a blooming nail set. 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7161335591_kzzx.jpg,https://juicegels.com/images/products/il_fullxfull.7161329485_ro54.jpg,https://juicegels.com/images/products/il_fullxfull.7161329487_9lrm.jpg,https://juicegels.com/images/products/il_fullxfull.7161329495_m908.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0031?shape=Almond&length=Short,Juicegels_SunsetHazeSet,Almond,Short\r
JUICEGELS-0464,Sunset Haze Set,"1/2 of the Sunshift Duo Set, warmer set version wwith all the warmth of golden hour, bottled in a blooming nail set. 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7161335591_kzzx.jpg,https://juicegels.com/images/products/il_fullxfull.7161329485_ro54.jpg,https://juicegels.com/images/products/il_fullxfull.7161329487_9lrm.jpg,https://juicegels.com/images/products/il_fullxfull.7161329495_m908.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0031?shape=Almond&length=Medium,Juicegels_SunsetHazeSet,Almond,Medium\r
JUICEGELS-0465,Sunset Haze Set,"1/2 of the Sunshift Duo Set, warmer set version wwith all the warmth of golden hour, bottled in a blooming nail set. 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.7161335591_kzzx.jpg,https://juicegels.com/images/products/il_fullxfull.7161329485_ro54.jpg,https://juicegels.com/images/products/il_fullxfull.7161329487_9lrm.jpg,https://juicegels.com/images/products/il_fullxfull.7161329495_m908.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0031?shape=Almond&length=Long,Juicegels_SunsetHazeSet,Almond,Long\r
JUICEGELS-0466,Sunlit Glaze Set,"Almond pale yellow press on set with 3d gel art and gold line art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7161323091_sdtl.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0032?shape=Square&length=Short,Juicegels_SunlitGlazeSet,Square,Short\r
JUICEGELS-0467,Sunlit Glaze Set,"Almond pale yellow press on set with 3d gel art and gold line art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7161323091_sdtl.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0032?shape=Square&length=Medium,Juicegels_SunlitGlazeSet,Square,Medium\r
JUICEGELS-0468,Sunlit Glaze Set,"Almond pale yellow press on set with 3d gel art and gold line art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7161323091_sdtl.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0032?shape=Square&length=Long,Juicegels_SunlitGlazeSet,Square,Long\r
JUICEGELS-0469,Sunlit Glaze Set,"Almond pale yellow press on set with 3d gel art and gold line art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7161323091_sdtl.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0032?shape=Oval&length=Short,Juicegels_SunlitGlazeSet,Oval,Short\r
JUICEGELS-0470,Sunlit Glaze Set,"Almond pale yellow press on set with 3d gel art and gold line art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7161323091_sdtl.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0032?shape=Oval&length=Medium,Juicegels_SunlitGlazeSet,Oval,Medium\r
JUICEGELS-0471,Sunlit Glaze Set,"Almond pale yellow press on set with 3d gel art and gold line art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7161323091_sdtl.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0032?shape=Oval&length=Long,Juicegels_SunlitGlazeSet,Oval,Long\r
JUICEGELS-0472,Sunlit Glaze Set,"Almond pale yellow press on set with 3d gel art and gold line art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7161323091_sdtl.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0032?shape=Stiletto&length=Short,Juicegels_SunlitGlazeSet,Stiletto,Short\r
JUICEGELS-0473,Sunlit Glaze Set,"Almond pale yellow press on set with 3d gel art and gold line art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7161323091_sdtl.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0032?shape=Stiletto&length=Medium,Juicegels_SunlitGlazeSet,Stiletto,Medium\r
JUICEGELS-0474,Sunlit Glaze Set,"Almond pale yellow press on set with 3d gel art and gold line art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7161323091_sdtl.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0032?shape=Stiletto&length=Long,Juicegels_SunlitGlazeSet,Stiletto,Long\r
JUICEGELS-0475,Sunlit Glaze Set,"Almond pale yellow press on set with 3d gel art and gold line art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7161323091_sdtl.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0032?shape=Coffin&length=Short,Juicegels_SunlitGlazeSet,Coffin,Short\r
JUICEGELS-0476,Sunlit Glaze Set,"Almond pale yellow press on set with 3d gel art and gold line art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7161323091_sdtl.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0032?shape=Coffin&length=Medium,Juicegels_SunlitGlazeSet,Coffin,Medium\r
JUICEGELS-0477,Sunlit Glaze Set,"Almond pale yellow press on set with 3d gel art and gold line art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7161323091_sdtl.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0032?shape=Coffin&length=Long,Juicegels_SunlitGlazeSet,Coffin,Long\r
JUICEGELS-0478,Sunlit Glaze Set,"Almond pale yellow press on set with 3d gel art and gold line art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7161323091_sdtl.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0032?shape=Almond&length=Short,Juicegels_SunlitGlazeSet,Almond,Short\r
JUICEGELS-0479,Sunlit Glaze Set,"Almond pale yellow press on set with 3d gel art and gold line art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7161323091_sdtl.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0032?shape=Almond&length=Medium,Juicegels_SunlitGlazeSet,Almond,Medium\r
JUICEGELS-0480,Sunlit Glaze Set,"Almond pale yellow press on set with 3d gel art and gold line art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.7161323091_sdtl.jpg,https://juicegels.com/images/products/il_fullxfull.7161323097_c7d7.jpg,https://juicegels.com/images/products/il_fullxfull.7113348994_bm1m.jpg,https://juicegels.com/images/products/il_fullxfull.7161323095_bdfj.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0032?shape=Almond&length=Long,Juicegels_SunlitGlazeSet,Almond,Long\r
JUICEGELS-0481,Amethyst Skies Set,"neutral based purple gradient glitter base with clouds, stars, moons and rhinestone gems 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6720390037_k2xc.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0033?shape=Square&length=Short,Juicegels_AmethystSkiesSet,Square,Short\r
JUICEGELS-0482,Amethyst Skies Set,"neutral based purple gradient glitter base with clouds, stars, moons and rhinestone gems 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6720390037_k2xc.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0033?shape=Square&length=Medium,Juicegels_AmethystSkiesSet,Square,Medium\r
JUICEGELS-0483,Amethyst Skies Set,"neutral based purple gradient glitter base with clouds, stars, moons and rhinestone gems 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6720390037_k2xc.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0033?shape=Square&length=Long,Juicegels_AmethystSkiesSet,Square,Long\r
JUICEGELS-0484,Amethyst Skies Set,"neutral based purple gradient glitter base with clouds, stars, moons and rhinestone gems 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6720390037_k2xc.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0033?shape=Oval&length=Short,Juicegels_AmethystSkiesSet,Oval,Short\r
JUICEGELS-0485,Amethyst Skies Set,"neutral based purple gradient glitter base with clouds, stars, moons and rhinestone gems 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6720390037_k2xc.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0033?shape=Oval&length=Medium,Juicegels_AmethystSkiesSet,Oval,Medium\r
JUICEGELS-0486,Amethyst Skies Set,"neutral based purple gradient glitter base with clouds, stars, moons and rhinestone gems 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6720390037_k2xc.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0033?shape=Oval&length=Long,Juicegels_AmethystSkiesSet,Oval,Long\r
JUICEGELS-0487,Amethyst Skies Set,"neutral based purple gradient glitter base with clouds, stars, moons and rhinestone gems 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6720390037_k2xc.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0033?shape=Stiletto&length=Short,Juicegels_AmethystSkiesSet,Stiletto,Short\r
JUICEGELS-0488,Amethyst Skies Set,"neutral based purple gradient glitter base with clouds, stars, moons and rhinestone gems 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6720390037_k2xc.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0033?shape=Stiletto&length=Medium,Juicegels_AmethystSkiesSet,Stiletto,Medium\r
JUICEGELS-0489,Amethyst Skies Set,"neutral based purple gradient glitter base with clouds, stars, moons and rhinestone gems 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6720390037_k2xc.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0033?shape=Stiletto&length=Long,Juicegels_AmethystSkiesSet,Stiletto,Long\r
JUICEGELS-0490,Amethyst Skies Set,"neutral based purple gradient glitter base with clouds, stars, moons and rhinestone gems 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6720390037_k2xc.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0033?shape=Coffin&length=Short,Juicegels_AmethystSkiesSet,Coffin,Short\r
JUICEGELS-0491,Amethyst Skies Set,"neutral based purple gradient glitter base with clouds, stars, moons and rhinestone gems 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6720390037_k2xc.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0033?shape=Coffin&length=Medium,Juicegels_AmethystSkiesSet,Coffin,Medium\r
JUICEGELS-0492,Amethyst Skies Set,"neutral based purple gradient glitter base with clouds, stars, moons and rhinestone gems 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6720390037_k2xc.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0033?shape=Coffin&length=Long,Juicegels_AmethystSkiesSet,Coffin,Long\r
JUICEGELS-0493,Amethyst Skies Set,"neutral based purple gradient glitter base with clouds, stars, moons and rhinestone gems 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6720390037_k2xc.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0033?shape=Almond&length=Short,Juicegels_AmethystSkiesSet,Almond,Short\r
JUICEGELS-0494,Amethyst Skies Set,"neutral based purple gradient glitter base with clouds, stars, moons and rhinestone gems 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6720390037_k2xc.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0033?shape=Almond&length=Medium,Juicegels_AmethystSkiesSet,Almond,Medium\r
JUICEGELS-0495,Amethyst Skies Set,"neutral based purple gradient glitter base with clouds, stars, moons and rhinestone gems 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6720390037_k2xc.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0033?shape=Almond&length=Long,Juicegels_AmethystSkiesSet,Almond,Long\r
JUICEGELS-0496,Blush Lace Set,"Pink pastel base with white line art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6762691522_r45l.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0034?shape=Square&length=Short,Juicegels_BlushLaceSet,Square,Short\r
JUICEGELS-0497,Blush Lace Set,"Pink pastel base with white line art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6762691522_r45l.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0034?shape=Square&length=Medium,Juicegels_BlushLaceSet,Square,Medium\r
JUICEGELS-0498,Blush Lace Set,"Pink pastel base with white line art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6762691522_r45l.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0034?shape=Square&length=Long,Juicegels_BlushLaceSet,Square,Long\r
JUICEGELS-0499,Blush Lace Set,"Pink pastel base with white line art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6762691522_r45l.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0034?shape=Oval&length=Short,Juicegels_BlushLaceSet,Oval,Short\r
JUICEGELS-0500,Blush Lace Set,"Pink pastel base with white line art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6762691522_r45l.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0034?shape=Oval&length=Medium,Juicegels_BlushLaceSet,Oval,Medium\r
JUICEGELS-0501,Blush Lace Set,"Pink pastel base with white line art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6762691522_r45l.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0034?shape=Oval&length=Long,Juicegels_BlushLaceSet,Oval,Long\r
JUICEGELS-0502,Blush Lace Set,"Pink pastel base with white line art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6762691522_r45l.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0034?shape=Stiletto&length=Short,Juicegels_BlushLaceSet,Stiletto,Short\r
JUICEGELS-0503,Blush Lace Set,"Pink pastel base with white line art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6762691522_r45l.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0034?shape=Stiletto&length=Medium,Juicegels_BlushLaceSet,Stiletto,Medium\r
JUICEGELS-0504,Blush Lace Set,"Pink pastel base with white line art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6762691522_r45l.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0034?shape=Stiletto&length=Long,Juicegels_BlushLaceSet,Stiletto,Long\r
JUICEGELS-0505,Blush Lace Set,"Pink pastel base with white line art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6762691522_r45l.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0034?shape=Coffin&length=Short,Juicegels_BlushLaceSet,Coffin,Short\r
JUICEGELS-0506,Blush Lace Set,"Pink pastel base with white line art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6762691522_r45l.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0034?shape=Coffin&length=Medium,Juicegels_BlushLaceSet,Coffin,Medium\r
JUICEGELS-0507,Blush Lace Set,"Pink pastel base with white line art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6762691522_r45l.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0034?shape=Coffin&length=Long,Juicegels_BlushLaceSet,Coffin,Long\r
JUICEGELS-0508,Blush Lace Set,"Pink pastel base with white line art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6762691522_r45l.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0034?shape=Almond&length=Short,Juicegels_BlushLaceSet,Almond,Short\r
JUICEGELS-0509,Blush Lace Set,"Pink pastel base with white line art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6762691522_r45l.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0034?shape=Almond&length=Medium,Juicegels_BlushLaceSet,Almond,Medium\r
JUICEGELS-0510,Blush Lace Set,"Pink pastel base with white line art 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6762691522_r45l.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0034?shape=Almond&length=Long,Juicegels_BlushLaceSet,Almond,Long\r
JUICEGELS-0511,Emerald Swirl Set,"Green gradient base tone with white graphic line designs 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6711031437_hibm.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0035?shape=Square&length=Short,Juicegels_EmeraldSwirlSet,Square,Short\r
JUICEGELS-0512,Emerald Swirl Set,"Green gradient base tone with white graphic line designs 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6711031437_hibm.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0035?shape=Square&length=Medium,Juicegels_EmeraldSwirlSet,Square,Medium\r
JUICEGELS-0513,Emerald Swirl Set,"Green gradient base tone with white graphic line designs 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6711031437_hibm.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0035?shape=Square&length=Long,Juicegels_EmeraldSwirlSet,Square,Long\r
JUICEGELS-0514,Emerald Swirl Set,"Green gradient base tone with white graphic line designs 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6711031437_hibm.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0035?shape=Oval&length=Short,Juicegels_EmeraldSwirlSet,Oval,Short\r
JUICEGELS-0515,Emerald Swirl Set,"Green gradient base tone with white graphic line designs 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6711031437_hibm.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0035?shape=Oval&length=Medium,Juicegels_EmeraldSwirlSet,Oval,Medium\r
JUICEGELS-0516,Emerald Swirl Set,"Green gradient base tone with white graphic line designs 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6711031437_hibm.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0035?shape=Oval&length=Long,Juicegels_EmeraldSwirlSet,Oval,Long\r
JUICEGELS-0517,Emerald Swirl Set,"Green gradient base tone with white graphic line designs 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6711031437_hibm.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0035?shape=Stiletto&length=Short,Juicegels_EmeraldSwirlSet,Stiletto,Short\r
JUICEGELS-0518,Emerald Swirl Set,"Green gradient base tone with white graphic line designs 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6711031437_hibm.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0035?shape=Stiletto&length=Medium,Juicegels_EmeraldSwirlSet,Stiletto,Medium\r
JUICEGELS-0519,Emerald Swirl Set,"Green gradient base tone with white graphic line designs 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6711031437_hibm.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0035?shape=Stiletto&length=Long,Juicegels_EmeraldSwirlSet,Stiletto,Long\r
JUICEGELS-0520,Emerald Swirl Set,"Green gradient base tone with white graphic line designs 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6711031437_hibm.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0035?shape=Coffin&length=Short,Juicegels_EmeraldSwirlSet,Coffin,Short\r
JUICEGELS-0521,Emerald Swirl Set,"Green gradient base tone with white graphic line designs 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6711031437_hibm.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0035?shape=Coffin&length=Medium,Juicegels_EmeraldSwirlSet,Coffin,Medium\r
JUICEGELS-0522,Emerald Swirl Set,"Green gradient base tone with white graphic line designs 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6711031437_hibm.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0035?shape=Coffin&length=Long,Juicegels_EmeraldSwirlSet,Coffin,Long\r
JUICEGELS-0523,Emerald Swirl Set,"Green gradient base tone with white graphic line designs 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6711031437_hibm.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0035?shape=Almond&length=Short,Juicegels_EmeraldSwirlSet,Almond,Short\r
JUICEGELS-0524,Emerald Swirl Set,"Green gradient base tone with white graphic line designs 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6711031437_hibm.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0035?shape=Almond&length=Medium,Juicegels_EmeraldSwirlSet,Almond,Medium\r
JUICEGELS-0525,Emerald Swirl Set,"Green gradient base tone with white graphic line designs 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6711031437_hibm.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0035?shape=Almond&length=Long,Juicegels_EmeraldSwirlSet,Almond,Long\r
JUICEGELS-0526,Blossom Luxe Set,"jelly white and pink base with sakura art and hints of gold 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.6647358066_mdqt.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0036?shape=Square&length=Short,Juicegels_BlossomLuxeSet,Square,Short\r
JUICEGELS-0527,Blossom Luxe Set,"jelly white and pink base with sakura art and hints of gold 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.6647358066_mdqt.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0036?shape=Square&length=Medium,Juicegels_BlossomLuxeSet,Square,Medium\r
JUICEGELS-0528,Blossom Luxe Set,"jelly white and pink base with sakura art and hints of gold 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.6647358066_mdqt.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0036?shape=Square&length=Long,Juicegels_BlossomLuxeSet,Square,Long\r
JUICEGELS-0529,Blossom Luxe Set,"jelly white and pink base with sakura art and hints of gold 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.6647358066_mdqt.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0036?shape=Oval&length=Short,Juicegels_BlossomLuxeSet,Oval,Short\r
JUICEGELS-0530,Blossom Luxe Set,"jelly white and pink base with sakura art and hints of gold 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.6647358066_mdqt.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0036?shape=Oval&length=Medium,Juicegels_BlossomLuxeSet,Oval,Medium\r
JUICEGELS-0531,Blossom Luxe Set,"jelly white and pink base with sakura art and hints of gold 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.6647358066_mdqt.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0036?shape=Oval&length=Long,Juicegels_BlossomLuxeSet,Oval,Long\r
JUICEGELS-0532,Blossom Luxe Set,"jelly white and pink base with sakura art and hints of gold 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.6647358066_mdqt.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0036?shape=Stiletto&length=Short,Juicegels_BlossomLuxeSet,Stiletto,Short\r
JUICEGELS-0533,Blossom Luxe Set,"jelly white and pink base with sakura art and hints of gold 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.6647358066_mdqt.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0036?shape=Stiletto&length=Medium,Juicegels_BlossomLuxeSet,Stiletto,Medium\r
JUICEGELS-0534,Blossom Luxe Set,"jelly white and pink base with sakura art and hints of gold 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.6647358066_mdqt.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0036?shape=Stiletto&length=Long,Juicegels_BlossomLuxeSet,Stiletto,Long\r
JUICEGELS-0535,Blossom Luxe Set,"jelly white and pink base with sakura art and hints of gold 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.6647358066_mdqt.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0036?shape=Coffin&length=Short,Juicegels_BlossomLuxeSet,Coffin,Short\r
JUICEGELS-0536,Blossom Luxe Set,"jelly white and pink base with sakura art and hints of gold 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.6647358066_mdqt.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0036?shape=Coffin&length=Medium,Juicegels_BlossomLuxeSet,Coffin,Medium\r
JUICEGELS-0537,Blossom Luxe Set,"jelly white and pink base with sakura art and hints of gold 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.6647358066_mdqt.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0036?shape=Coffin&length=Long,Juicegels_BlossomLuxeSet,Coffin,Long\r
JUICEGELS-0538,Blossom Luxe Set,"jelly white and pink base with sakura art and hints of gold 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.6647358066_mdqt.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0036?shape=Almond&length=Short,Juicegels_BlossomLuxeSet,Almond,Short\r
JUICEGELS-0539,Blossom Luxe Set,"jelly white and pink base with sakura art and hints of gold 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.6647358066_mdqt.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0036?shape=Almond&length=Medium,Juicegels_BlossomLuxeSet,Almond,Medium\r
JUICEGELS-0540,Blossom Luxe Set,"jelly white and pink base with sakura art and hints of gold 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.6647358066_mdqt.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0036?shape=Almond&length=Long,Juicegels_BlossomLuxeSet,Almond,Long\r
JUICEGELS-0541,Garden Bloom Set,"Green tips with 3d flowers and pearl accents

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,flower_nails,garden_nails",,https://juicegels.com/images/products/il_fullxfull.6692806039_lsq9.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0037?shape=Square&length=Short,Juicegels_GardenBloomSet,Square,Short\r
JUICEGELS-0542,Garden Bloom Set,"Green tips with 3d flowers and pearl accents

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,flower_nails,garden_nails",,https://juicegels.com/images/products/il_fullxfull.6692806039_lsq9.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0037?shape=Square&length=Medium,Juicegels_GardenBloomSet,Square,Medium\r
JUICEGELS-0543,Garden Bloom Set,"Green tips with 3d flowers and pearl accents

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,flower_nails,garden_nails",,https://juicegels.com/images/products/il_fullxfull.6692806039_lsq9.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0037?shape=Square&length=Long,Juicegels_GardenBloomSet,Square,Long\r
JUICEGELS-0544,Garden Bloom Set,"Green tips with 3d flowers and pearl accents

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,flower_nails,garden_nails",,https://juicegels.com/images/products/il_fullxfull.6692806039_lsq9.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0037?shape=Oval&length=Short,Juicegels_GardenBloomSet,Oval,Short\r
JUICEGELS-0545,Garden Bloom Set,"Green tips with 3d flowers and pearl accents

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,flower_nails,garden_nails",,https://juicegels.com/images/products/il_fullxfull.6692806039_lsq9.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0037?shape=Oval&length=Medium,Juicegels_GardenBloomSet,Oval,Medium\r
JUICEGELS-0546,Garden Bloom Set,"Green tips with 3d flowers and pearl accents

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,flower_nails,garden_nails",,https://juicegels.com/images/products/il_fullxfull.6692806039_lsq9.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0037?shape=Oval&length=Long,Juicegels_GardenBloomSet,Oval,Long\r
JUICEGELS-0547,Garden Bloom Set,"Green tips with 3d flowers and pearl accents

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,flower_nails,garden_nails",,https://juicegels.com/images/products/il_fullxfull.6692806039_lsq9.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0037?shape=Stiletto&length=Short,Juicegels_GardenBloomSet,Stiletto,Short\r
JUICEGELS-0548,Garden Bloom Set,"Green tips with 3d flowers and pearl accents

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,flower_nails,garden_nails",,https://juicegels.com/images/products/il_fullxfull.6692806039_lsq9.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0037?shape=Stiletto&length=Medium,Juicegels_GardenBloomSet,Stiletto,Medium\r
JUICEGELS-0549,Garden Bloom Set,"Green tips with 3d flowers and pearl accents

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,flower_nails,garden_nails",,https://juicegels.com/images/products/il_fullxfull.6692806039_lsq9.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0037?shape=Stiletto&length=Long,Juicegels_GardenBloomSet,Stiletto,Long\r
JUICEGELS-0550,Garden Bloom Set,"Green tips with 3d flowers and pearl accents

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,flower_nails,garden_nails",,https://juicegels.com/images/products/il_fullxfull.6692806039_lsq9.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0037?shape=Coffin&length=Short,Juicegels_GardenBloomSet,Coffin,Short\r
JUICEGELS-0551,Garden Bloom Set,"Green tips with 3d flowers and pearl accents

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,flower_nails,garden_nails",,https://juicegels.com/images/products/il_fullxfull.6692806039_lsq9.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0037?shape=Coffin&length=Medium,Juicegels_GardenBloomSet,Coffin,Medium\r
JUICEGELS-0552,Garden Bloom Set,"Green tips with 3d flowers and pearl accents

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,flower_nails,garden_nails",,https://juicegels.com/images/products/il_fullxfull.6692806039_lsq9.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0037?shape=Coffin&length=Long,Juicegels_GardenBloomSet,Coffin,Long\r
JUICEGELS-0553,Garden Bloom Set,"Green tips with 3d flowers and pearl accents

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,flower_nails,garden_nails",,https://juicegels.com/images/products/il_fullxfull.6692806039_lsq9.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0037?shape=Almond&length=Short,Juicegels_GardenBloomSet,Almond,Short\r
JUICEGELS-0554,Garden Bloom Set,"Green tips with 3d flowers and pearl accents

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,flower_nails,garden_nails",,https://juicegels.com/images/products/il_fullxfull.6692806039_lsq9.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0037?shape=Almond&length=Medium,Juicegels_GardenBloomSet,Almond,Medium\r
JUICEGELS-0555,Garden Bloom Set,"Green tips with 3d flowers and pearl accents

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"cute_press_on_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,flower_nails,garden_nails",,https://juicegels.com/images/products/il_fullxfull.6692806039_lsq9.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0037?shape=Almond&length=Long,Juicegels_GardenBloomSet,Almond,Long\r
JUICEGELS-0556,Buttercup Bear Set,"Yellow based set with pearls French tip and 3d bear charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6711051548_58b3.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0038?shape=Square&length=Short,Juicegels_ButtercupBearSet,Square,Short\r
JUICEGELS-0557,Buttercup Bear Set,"Yellow based set with pearls French tip and 3d bear charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6711051548_58b3.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0038?shape=Square&length=Medium,Juicegels_ButtercupBearSet,Square,Medium\r
JUICEGELS-0558,Buttercup Bear Set,"Yellow based set with pearls French tip and 3d bear charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6711051548_58b3.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0038?shape=Square&length=Long,Juicegels_ButtercupBearSet,Square,Long\r
JUICEGELS-0559,Buttercup Bear Set,"Yellow based set with pearls French tip and 3d bear charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6711051548_58b3.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0038?shape=Oval&length=Short,Juicegels_ButtercupBearSet,Oval,Short\r
JUICEGELS-0560,Buttercup Bear Set,"Yellow based set with pearls French tip and 3d bear charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6711051548_58b3.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0038?shape=Oval&length=Medium,Juicegels_ButtercupBearSet,Oval,Medium\r
JUICEGELS-0561,Buttercup Bear Set,"Yellow based set with pearls French tip and 3d bear charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6711051548_58b3.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0038?shape=Oval&length=Long,Juicegels_ButtercupBearSet,Oval,Long\r
JUICEGELS-0562,Buttercup Bear Set,"Yellow based set with pearls French tip and 3d bear charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6711051548_58b3.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0038?shape=Stiletto&length=Short,Juicegels_ButtercupBearSet,Stiletto,Short\r
JUICEGELS-0563,Buttercup Bear Set,"Yellow based set with pearls French tip and 3d bear charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6711051548_58b3.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0038?shape=Stiletto&length=Medium,Juicegels_ButtercupBearSet,Stiletto,Medium\r
JUICEGELS-0564,Buttercup Bear Set,"Yellow based set with pearls French tip and 3d bear charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6711051548_58b3.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0038?shape=Stiletto&length=Long,Juicegels_ButtercupBearSet,Stiletto,Long\r
JUICEGELS-0565,Buttercup Bear Set,"Yellow based set with pearls French tip and 3d bear charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6711051548_58b3.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0038?shape=Coffin&length=Short,Juicegels_ButtercupBearSet,Coffin,Short\r
JUICEGELS-0566,Buttercup Bear Set,"Yellow based set with pearls French tip and 3d bear charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6711051548_58b3.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0038?shape=Coffin&length=Medium,Juicegels_ButtercupBearSet,Coffin,Medium\r
JUICEGELS-0567,Buttercup Bear Set,"Yellow based set with pearls French tip and 3d bear charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6711051548_58b3.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0038?shape=Coffin&length=Long,Juicegels_ButtercupBearSet,Coffin,Long\r
JUICEGELS-0568,Buttercup Bear Set,"Yellow based set with pearls French tip and 3d bear charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6711051548_58b3.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0038?shape=Almond&length=Short,Juicegels_ButtercupBearSet,Almond,Short\r
JUICEGELS-0569,Buttercup Bear Set,"Yellow based set with pearls French tip and 3d bear charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6711051548_58b3.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0038?shape=Almond&length=Medium,Juicegels_ButtercupBearSet,Almond,Medium\r
JUICEGELS-0570,Buttercup Bear Set,"Yellow based set with pearls French tip and 3d bear charm
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",17.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6711051548_58b3.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0038?shape=Almond&length=Long,Juicegels_ButtercupBearSet,Almond,Long\r
JUICEGELS-0571,Gilded Geode Set,"Coloured jelly cat eye bases with gold lining and pearl/gold embellishments 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.6698338628_da7y.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0039?shape=Square&length=Short,Juicegels_GildedGeodeSet,Square,Short\r
JUICEGELS-0572,Gilded Geode Set,"Coloured jelly cat eye bases with gold lining and pearl/gold embellishments 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.6698338628_da7y.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0039?shape=Square&length=Medium,Juicegels_GildedGeodeSet,Square,Medium\r
JUICEGELS-0573,Gilded Geode Set,"Coloured jelly cat eye bases with gold lining and pearl/gold embellishments 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.6698338628_da7y.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0039?shape=Square&length=Long,Juicegels_GildedGeodeSet,Square,Long\r
JUICEGELS-0574,Gilded Geode Set,"Coloured jelly cat eye bases with gold lining and pearl/gold embellishments 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.6698338628_da7y.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0039?shape=Oval&length=Short,Juicegels_GildedGeodeSet,Oval,Short\r
JUICEGELS-0575,Gilded Geode Set,"Coloured jelly cat eye bases with gold lining and pearl/gold embellishments 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.6698338628_da7y.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0039?shape=Oval&length=Medium,Juicegels_GildedGeodeSet,Oval,Medium\r
JUICEGELS-0576,Gilded Geode Set,"Coloured jelly cat eye bases with gold lining and pearl/gold embellishments 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.6698338628_da7y.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0039?shape=Oval&length=Long,Juicegels_GildedGeodeSet,Oval,Long\r
JUICEGELS-0577,Gilded Geode Set,"Coloured jelly cat eye bases with gold lining and pearl/gold embellishments 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.6698338628_da7y.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0039?shape=Stiletto&length=Short,Juicegels_GildedGeodeSet,Stiletto,Short\r
JUICEGELS-0578,Gilded Geode Set,"Coloured jelly cat eye bases with gold lining and pearl/gold embellishments 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.6698338628_da7y.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0039?shape=Stiletto&length=Medium,Juicegels_GildedGeodeSet,Stiletto,Medium\r
JUICEGELS-0579,Gilded Geode Set,"Coloured jelly cat eye bases with gold lining and pearl/gold embellishments 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.6698338628_da7y.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0039?shape=Stiletto&length=Long,Juicegels_GildedGeodeSet,Stiletto,Long\r
JUICEGELS-0580,Gilded Geode Set,"Coloured jelly cat eye bases with gold lining and pearl/gold embellishments 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.6698338628_da7y.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0039?shape=Coffin&length=Short,Juicegels_GildedGeodeSet,Coffin,Short\r
JUICEGELS-0581,Gilded Geode Set,"Coloured jelly cat eye bases with gold lining and pearl/gold embellishments 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.6698338628_da7y.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0039?shape=Coffin&length=Medium,Juicegels_GildedGeodeSet,Coffin,Medium\r
JUICEGELS-0582,Gilded Geode Set,"Coloured jelly cat eye bases with gold lining and pearl/gold embellishments 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.6698338628_da7y.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0039?shape=Coffin&length=Long,Juicegels_GildedGeodeSet,Coffin,Long\r
JUICEGELS-0583,Gilded Geode Set,"Coloured jelly cat eye bases with gold lining and pearl/gold embellishments 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.6698338628_da7y.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0039?shape=Almond&length=Short,Juicegels_GildedGeodeSet,Almond,Short\r
JUICEGELS-0584,Gilded Geode Set,"Coloured jelly cat eye bases with gold lining and pearl/gold embellishments 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.6698338628_da7y.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0039?shape=Almond&length=Medium,Juicegels_GildedGeodeSet,Almond,Medium\r
JUICEGELS-0585,Gilded Geode Set,"Coloured jelly cat eye bases with gold lining and pearl/gold embellishments 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",19.5,GBP,20,"cute_press_on_nails,bear_nails,pearly_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails",,https://juicegels.com/images/products/il_fullxfull.6698338628_da7y.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0039?shape=Almond&length=Long,Juicegels_GildedGeodeSet,Almond,Long\r
JUICEGELS-0586,Blush Bloom Set,"pink gradient tone base with 3d sculpted art pearl embellishments and flower charm 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.6687537070_rpvq.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0040?shape=Square&length=Short,Juicegels_BlushBloomSet,Square,Short\r
JUICEGELS-0587,Blush Bloom Set,"pink gradient tone base with 3d sculpted art pearl embellishments and flower charm 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.6687537070_rpvq.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0040?shape=Square&length=Medium,Juicegels_BlushBloomSet,Square,Medium\r
JUICEGELS-0588,Blush Bloom Set,"pink gradient tone base with 3d sculpted art pearl embellishments and flower charm 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.6687537070_rpvq.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0040?shape=Square&length=Long,Juicegels_BlushBloomSet,Square,Long\r
JUICEGELS-0589,Blush Bloom Set,"pink gradient tone base with 3d sculpted art pearl embellishments and flower charm 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.6687537070_rpvq.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0040?shape=Oval&length=Short,Juicegels_BlushBloomSet,Oval,Short\r
JUICEGELS-0590,Blush Bloom Set,"pink gradient tone base with 3d sculpted art pearl embellishments and flower charm 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.6687537070_rpvq.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0040?shape=Oval&length=Medium,Juicegels_BlushBloomSet,Oval,Medium\r
JUICEGELS-0591,Blush Bloom Set,"pink gradient tone base with 3d sculpted art pearl embellishments and flower charm 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.6687537070_rpvq.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0040?shape=Oval&length=Long,Juicegels_BlushBloomSet,Oval,Long\r
JUICEGELS-0592,Blush Bloom Set,"pink gradient tone base with 3d sculpted art pearl embellishments and flower charm 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.6687537070_rpvq.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0040?shape=Stiletto&length=Short,Juicegels_BlushBloomSet,Stiletto,Short\r
JUICEGELS-0593,Blush Bloom Set,"pink gradient tone base with 3d sculpted art pearl embellishments and flower charm 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.6687537070_rpvq.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0040?shape=Stiletto&length=Medium,Juicegels_BlushBloomSet,Stiletto,Medium\r
JUICEGELS-0594,Blush Bloom Set,"pink gradient tone base with 3d sculpted art pearl embellishments and flower charm 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.6687537070_rpvq.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0040?shape=Stiletto&length=Long,Juicegels_BlushBloomSet,Stiletto,Long\r
JUICEGELS-0595,Blush Bloom Set,"pink gradient tone base with 3d sculpted art pearl embellishments and flower charm 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.6687537070_rpvq.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0040?shape=Coffin&length=Short,Juicegels_BlushBloomSet,Coffin,Short\r
JUICEGELS-0596,Blush Bloom Set,"pink gradient tone base with 3d sculpted art pearl embellishments and flower charm 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.6687537070_rpvq.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0040?shape=Coffin&length=Medium,Juicegels_BlushBloomSet,Coffin,Medium\r
JUICEGELS-0597,Blush Bloom Set,"pink gradient tone base with 3d sculpted art pearl embellishments and flower charm 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.6687537070_rpvq.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0040?shape=Coffin&length=Long,Juicegels_BlushBloomSet,Coffin,Long\r
JUICEGELS-0598,Blush Bloom Set,"pink gradient tone base with 3d sculpted art pearl embellishments and flower charm 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.6687537070_rpvq.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0040?shape=Almond&length=Short,Juicegels_BlushBloomSet,Almond,Short\r
JUICEGELS-0599,Blush Bloom Set,"pink gradient tone base with 3d sculpted art pearl embellishments and flower charm 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.6687537070_rpvq.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0040?shape=Almond&length=Medium,Juicegels_BlushBloomSet,Almond,Medium\r
JUICEGELS-0600,Blush Bloom Set,"pink gradient tone base with 3d sculpted art pearl embellishments and flower charm 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"cute_press_on_nails,pearl_nails,3d_gems,3d_nails,kawaii_nails,Cherry_blossom_nails,Sakura_nails,pink_nails,spring_nails",,https://juicegels.com/images/products/il_fullxfull.6687537070_rpvq.jpg,https://juicegels.com/images/products/il_fullxfull.6603451255_tg7j.jpg,https://juicegels.com/images/products/il_fullxfull.6555330384_qzf9.jpg,https://juicegels.com/images/products/il_fullxfull.6555330394_ivid.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0040?shape=Almond&length=Long,Juicegels_BlushBloomSet,Almond,Long\r
JUICEGELS-0601,Midnight Flutter Set,"Black jelly base with gold lining art of split butterfly and stars

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,arcane_nails,metallic_nails,silver_nails,blue_cat_eye,cat_eye_nails,blue_nails,metallic_silver,silver_nail,square_nails",,https://juicegels.com/images/products/il_fullxfull.6762686126_acuy.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0041?shape=Square&length=Short,Juicegels_MidnightFlutterSet,Square,Short\r
JUICEGELS-0602,Midnight Flutter Set,"Black jelly base with gold lining art of split butterfly and stars

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,arcane_nails,metallic_nails,silver_nails,blue_cat_eye,cat_eye_nails,blue_nails,metallic_silver,silver_nail,square_nails",,https://juicegels.com/images/products/il_fullxfull.6762686126_acuy.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0041?shape=Square&length=Medium,Juicegels_MidnightFlutterSet,Square,Medium\r
JUICEGELS-0603,Midnight Flutter Set,"Black jelly base with gold lining art of split butterfly and stars

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,arcane_nails,metallic_nails,silver_nails,blue_cat_eye,cat_eye_nails,blue_nails,metallic_silver,silver_nail,square_nails",,https://juicegels.com/images/products/il_fullxfull.6762686126_acuy.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0041?shape=Square&length=Long,Juicegels_MidnightFlutterSet,Square,Long\r
JUICEGELS-0604,Midnight Flutter Set,"Black jelly base with gold lining art of split butterfly and stars

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,arcane_nails,metallic_nails,silver_nails,blue_cat_eye,cat_eye_nails,blue_nails,metallic_silver,silver_nail,square_nails",,https://juicegels.com/images/products/il_fullxfull.6762686126_acuy.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0041?shape=Oval&length=Short,Juicegels_MidnightFlutterSet,Oval,Short\r
JUICEGELS-0605,Midnight Flutter Set,"Black jelly base with gold lining art of split butterfly and stars

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,arcane_nails,metallic_nails,silver_nails,blue_cat_eye,cat_eye_nails,blue_nails,metallic_silver,silver_nail,square_nails",,https://juicegels.com/images/products/il_fullxfull.6762686126_acuy.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0041?shape=Oval&length=Medium,Juicegels_MidnightFlutterSet,Oval,Medium\r
JUICEGELS-0606,Midnight Flutter Set,"Black jelly base with gold lining art of split butterfly and stars

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,arcane_nails,metallic_nails,silver_nails,blue_cat_eye,cat_eye_nails,blue_nails,metallic_silver,silver_nail,square_nails",,https://juicegels.com/images/products/il_fullxfull.6762686126_acuy.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0041?shape=Oval&length=Long,Juicegels_MidnightFlutterSet,Oval,Long\r
JUICEGELS-0607,Midnight Flutter Set,"Black jelly base with gold lining art of split butterfly and stars

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,arcane_nails,metallic_nails,silver_nails,blue_cat_eye,cat_eye_nails,blue_nails,metallic_silver,silver_nail,square_nails",,https://juicegels.com/images/products/il_fullxfull.6762686126_acuy.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0041?shape=Stiletto&length=Short,Juicegels_MidnightFlutterSet,Stiletto,Short\r
JUICEGELS-0608,Midnight Flutter Set,"Black jelly base with gold lining art of split butterfly and stars

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,arcane_nails,metallic_nails,silver_nails,blue_cat_eye,cat_eye_nails,blue_nails,metallic_silver,silver_nail,square_nails",,https://juicegels.com/images/products/il_fullxfull.6762686126_acuy.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0041?shape=Stiletto&length=Medium,Juicegels_MidnightFlutterSet,Stiletto,Medium\r
JUICEGELS-0609,Midnight Flutter Set,"Black jelly base with gold lining art of split butterfly and stars

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,arcane_nails,metallic_nails,silver_nails,blue_cat_eye,cat_eye_nails,blue_nails,metallic_silver,silver_nail,square_nails",,https://juicegels.com/images/products/il_fullxfull.6762686126_acuy.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0041?shape=Stiletto&length=Long,Juicegels_MidnightFlutterSet,Stiletto,Long\r
JUICEGELS-0610,Midnight Flutter Set,"Black jelly base with gold lining art of split butterfly and stars

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,arcane_nails,metallic_nails,silver_nails,blue_cat_eye,cat_eye_nails,blue_nails,metallic_silver,silver_nail,square_nails",,https://juicegels.com/images/products/il_fullxfull.6762686126_acuy.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0041?shape=Coffin&length=Short,Juicegels_MidnightFlutterSet,Coffin,Short\r
JUICEGELS-0611,Midnight Flutter Set,"Black jelly base with gold lining art of split butterfly and stars

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,arcane_nails,metallic_nails,silver_nails,blue_cat_eye,cat_eye_nails,blue_nails,metallic_silver,silver_nail,square_nails",,https://juicegels.com/images/products/il_fullxfull.6762686126_acuy.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0041?shape=Coffin&length=Medium,Juicegels_MidnightFlutterSet,Coffin,Medium\r
JUICEGELS-0612,Midnight Flutter Set,"Black jelly base with gold lining art of split butterfly and stars

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,arcane_nails,metallic_nails,silver_nails,blue_cat_eye,cat_eye_nails,blue_nails,metallic_silver,silver_nail,square_nails",,https://juicegels.com/images/products/il_fullxfull.6762686126_acuy.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0041?shape=Coffin&length=Long,Juicegels_MidnightFlutterSet,Coffin,Long\r
JUICEGELS-0613,Midnight Flutter Set,"Black jelly base with gold lining art of split butterfly and stars

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,arcane_nails,metallic_nails,silver_nails,blue_cat_eye,cat_eye_nails,blue_nails,metallic_silver,silver_nail,square_nails",,https://juicegels.com/images/products/il_fullxfull.6762686126_acuy.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0041?shape=Almond&length=Short,Juicegels_MidnightFlutterSet,Almond,Short\r
JUICEGELS-0614,Midnight Flutter Set,"Black jelly base with gold lining art of split butterfly and stars

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,arcane_nails,metallic_nails,silver_nails,blue_cat_eye,cat_eye_nails,blue_nails,metallic_silver,silver_nail,square_nails",,https://juicegels.com/images/products/il_fullxfull.6762686126_acuy.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0041?shape=Almond&length=Medium,Juicegels_MidnightFlutterSet,Almond,Medium\r
JUICEGELS-0615,Midnight Flutter Set,"Black jelly base with gold lining art of split butterfly and stars

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,arcane_nails,metallic_nails,silver_nails,blue_cat_eye,cat_eye_nails,blue_nails,metallic_silver,silver_nail,square_nails",,https://juicegels.com/images/products/il_fullxfull.6762686126_acuy.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0041?shape=Almond&length=Long,Juicegels_MidnightFlutterSet,Almond,Long\r
JUICEGELS-0616,Short’n’Sweet Set,"blue gel base with rhinestone heart and kiss lip art 
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6661762822_k4dr.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0042?shape=Square&length=Short,Juicegels_ShortnSweetSet,Square,Short\r
JUICEGELS-0617,Short’n’Sweet Set,"blue gel base with rhinestone heart and kiss lip art 
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6661762822_k4dr.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0042?shape=Square&length=Medium,Juicegels_ShortnSweetSet,Square,Medium\r
JUICEGELS-0618,Short’n’Sweet Set,"blue gel base with rhinestone heart and kiss lip art 
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6661762822_k4dr.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0042?shape=Square&length=Long,Juicegels_ShortnSweetSet,Square,Long\r
JUICEGELS-0619,Short’n’Sweet Set,"blue gel base with rhinestone heart and kiss lip art 
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6661762822_k4dr.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0042?shape=Oval&length=Short,Juicegels_ShortnSweetSet,Oval,Short\r
JUICEGELS-0620,Short’n’Sweet Set,"blue gel base with rhinestone heart and kiss lip art 
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6661762822_k4dr.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0042?shape=Oval&length=Medium,Juicegels_ShortnSweetSet,Oval,Medium\r
JUICEGELS-0621,Short’n’Sweet Set,"blue gel base with rhinestone heart and kiss lip art 
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6661762822_k4dr.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0042?shape=Oval&length=Long,Juicegels_ShortnSweetSet,Oval,Long\r
JUICEGELS-0622,Short’n’Sweet Set,"blue gel base with rhinestone heart and kiss lip art 
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6661762822_k4dr.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0042?shape=Stiletto&length=Short,Juicegels_ShortnSweetSet,Stiletto,Short\r
JUICEGELS-0623,Short’n’Sweet Set,"blue gel base with rhinestone heart and kiss lip art 
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6661762822_k4dr.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0042?shape=Stiletto&length=Medium,Juicegels_ShortnSweetSet,Stiletto,Medium\r
JUICEGELS-0624,Short’n’Sweet Set,"blue gel base with rhinestone heart and kiss lip art 
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6661762822_k4dr.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0042?shape=Stiletto&length=Long,Juicegels_ShortnSweetSet,Stiletto,Long\r
JUICEGELS-0625,Short’n’Sweet Set,"blue gel base with rhinestone heart and kiss lip art 
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6661762822_k4dr.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0042?shape=Coffin&length=Short,Juicegels_ShortnSweetSet,Coffin,Short\r
JUICEGELS-0626,Short’n’Sweet Set,"blue gel base with rhinestone heart and kiss lip art 
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6661762822_k4dr.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0042?shape=Coffin&length=Medium,Juicegels_ShortnSweetSet,Coffin,Medium\r
JUICEGELS-0627,Short’n’Sweet Set,"blue gel base with rhinestone heart and kiss lip art 
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6661762822_k4dr.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0042?shape=Coffin&length=Long,Juicegels_ShortnSweetSet,Coffin,Long\r
JUICEGELS-0628,Short’n’Sweet Set,"blue gel base with rhinestone heart and kiss lip art 
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6661762822_k4dr.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0042?shape=Almond&length=Short,Juicegels_ShortnSweetSet,Almond,Short\r
JUICEGELS-0629,Short’n’Sweet Set,"blue gel base with rhinestone heart and kiss lip art 
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6661762822_k4dr.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0042?shape=Almond&length=Medium,Juicegels_ShortnSweetSet,Almond,Medium\r
JUICEGELS-0630,Short’n’Sweet Set,"blue gel base with rhinestone heart and kiss lip art 
- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,blue_press_on_nails,blue_gel_nails",,https://juicegels.com/images/products/il_fullxfull.6661762822_k4dr.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0042?shape=Almond&length=Long,Juicegels_ShortnSweetSet,Almond,Long\r
JUICEGELS-0631,Stargirl Dusk Set,"Very dark brown/black base set with nude french tips and white line art stars and rhinestones

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"y2k_nails,star_nails,gel_nails,white_gel_nails,coquette_nails,press_on_nais",,https://juicegels.com/images/products/il_fullxfull.6775643061_771i.jpg,https://juicegels.com/images/products/il_fullxfull.6775619869_e1cv.jpg,https://juicegels.com/images/products/il_fullxfull.6727593348_7q61.jpg,https://juicegels.com/images/products/il_fullxfull.6775619867_jmr2.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0043?shape=Square&length=Short,Juicegels_StargirlDuskSet,Square,Short\r
JUICEGELS-0632,Stargirl Dusk Set,"Very dark brown/black base set with nude french tips and white line art stars and rhinestones

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"y2k_nails,star_nails,gel_nails,white_gel_nails,coquette_nails,press_on_nais",,https://juicegels.com/images/products/il_fullxfull.6775643061_771i.jpg,https://juicegels.com/images/products/il_fullxfull.6775619869_e1cv.jpg,https://juicegels.com/images/products/il_fullxfull.6727593348_7q61.jpg,https://juicegels.com/images/products/il_fullxfull.6775619867_jmr2.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0043?shape=Square&length=Medium,Juicegels_StargirlDuskSet,Square,Medium\r
JUICEGELS-0633,Stargirl Dusk Set,"Very dark brown/black base set with nude french tips and white line art stars and rhinestones

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"y2k_nails,star_nails,gel_nails,white_gel_nails,coquette_nails,press_on_nais",,https://juicegels.com/images/products/il_fullxfull.6775643061_771i.jpg,https://juicegels.com/images/products/il_fullxfull.6775619869_e1cv.jpg,https://juicegels.com/images/products/il_fullxfull.6727593348_7q61.jpg,https://juicegels.com/images/products/il_fullxfull.6775619867_jmr2.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0043?shape=Square&length=Long,Juicegels_StargirlDuskSet,Square,Long\r
JUICEGELS-0634,Stargirl Dusk Set,"Very dark brown/black base set with nude french tips and white line art stars and rhinestones

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"y2k_nails,star_nails,gel_nails,white_gel_nails,coquette_nails,press_on_nais",,https://juicegels.com/images/products/il_fullxfull.6775643061_771i.jpg,https://juicegels.com/images/products/il_fullxfull.6775619869_e1cv.jpg,https://juicegels.com/images/products/il_fullxfull.6727593348_7q61.jpg,https://juicegels.com/images/products/il_fullxfull.6775619867_jmr2.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0043?shape=Oval&length=Short,Juicegels_StargirlDuskSet,Oval,Short\r
JUICEGELS-0635,Stargirl Dusk Set,"Very dark brown/black base set with nude french tips and white line art stars and rhinestones

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"y2k_nails,star_nails,gel_nails,white_gel_nails,coquette_nails,press_on_nais",,https://juicegels.com/images/products/il_fullxfull.6775643061_771i.jpg,https://juicegels.com/images/products/il_fullxfull.6775619869_e1cv.jpg,https://juicegels.com/images/products/il_fullxfull.6727593348_7q61.jpg,https://juicegels.com/images/products/il_fullxfull.6775619867_jmr2.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0043?shape=Oval&length=Medium,Juicegels_StargirlDuskSet,Oval,Medium\r
JUICEGELS-0636,Stargirl Dusk Set,"Very dark brown/black base set with nude french tips and white line art stars and rhinestones

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"y2k_nails,star_nails,gel_nails,white_gel_nails,coquette_nails,press_on_nais",,https://juicegels.com/images/products/il_fullxfull.6775643061_771i.jpg,https://juicegels.com/images/products/il_fullxfull.6775619869_e1cv.jpg,https://juicegels.com/images/products/il_fullxfull.6727593348_7q61.jpg,https://juicegels.com/images/products/il_fullxfull.6775619867_jmr2.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0043?shape=Oval&length=Long,Juicegels_StargirlDuskSet,Oval,Long\r
JUICEGELS-0637,Stargirl Dusk Set,"Very dark brown/black base set with nude french tips and white line art stars and rhinestones

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"y2k_nails,star_nails,gel_nails,white_gel_nails,coquette_nails,press_on_nais",,https://juicegels.com/images/products/il_fullxfull.6775643061_771i.jpg,https://juicegels.com/images/products/il_fullxfull.6775619869_e1cv.jpg,https://juicegels.com/images/products/il_fullxfull.6727593348_7q61.jpg,https://juicegels.com/images/products/il_fullxfull.6775619867_jmr2.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0043?shape=Stiletto&length=Short,Juicegels_StargirlDuskSet,Stiletto,Short\r
JUICEGELS-0638,Stargirl Dusk Set,"Very dark brown/black base set with nude french tips and white line art stars and rhinestones

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"y2k_nails,star_nails,gel_nails,white_gel_nails,coquette_nails,press_on_nais",,https://juicegels.com/images/products/il_fullxfull.6775643061_771i.jpg,https://juicegels.com/images/products/il_fullxfull.6775619869_e1cv.jpg,https://juicegels.com/images/products/il_fullxfull.6727593348_7q61.jpg,https://juicegels.com/images/products/il_fullxfull.6775619867_jmr2.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0043?shape=Stiletto&length=Medium,Juicegels_StargirlDuskSet,Stiletto,Medium\r
JUICEGELS-0639,Stargirl Dusk Set,"Very dark brown/black base set with nude french tips and white line art stars and rhinestones

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"y2k_nails,star_nails,gel_nails,white_gel_nails,coquette_nails,press_on_nais",,https://juicegels.com/images/products/il_fullxfull.6775643061_771i.jpg,https://juicegels.com/images/products/il_fullxfull.6775619869_e1cv.jpg,https://juicegels.com/images/products/il_fullxfull.6727593348_7q61.jpg,https://juicegels.com/images/products/il_fullxfull.6775619867_jmr2.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0043?shape=Stiletto&length=Long,Juicegels_StargirlDuskSet,Stiletto,Long\r
JUICEGELS-0640,Stargirl Dusk Set,"Very dark brown/black base set with nude french tips and white line art stars and rhinestones

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"y2k_nails,star_nails,gel_nails,white_gel_nails,coquette_nails,press_on_nais",,https://juicegels.com/images/products/il_fullxfull.6775643061_771i.jpg,https://juicegels.com/images/products/il_fullxfull.6775619869_e1cv.jpg,https://juicegels.com/images/products/il_fullxfull.6727593348_7q61.jpg,https://juicegels.com/images/products/il_fullxfull.6775619867_jmr2.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0043?shape=Coffin&length=Short,Juicegels_StargirlDuskSet,Coffin,Short\r
JUICEGELS-0641,Stargirl Dusk Set,"Very dark brown/black base set with nude french tips and white line art stars and rhinestones

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"y2k_nails,star_nails,gel_nails,white_gel_nails,coquette_nails,press_on_nais",,https://juicegels.com/images/products/il_fullxfull.6775643061_771i.jpg,https://juicegels.com/images/products/il_fullxfull.6775619869_e1cv.jpg,https://juicegels.com/images/products/il_fullxfull.6727593348_7q61.jpg,https://juicegels.com/images/products/il_fullxfull.6775619867_jmr2.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0043?shape=Coffin&length=Medium,Juicegels_StargirlDuskSet,Coffin,Medium\r
JUICEGELS-0642,Stargirl Dusk Set,"Very dark brown/black base set with nude french tips and white line art stars and rhinestones

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"y2k_nails,star_nails,gel_nails,white_gel_nails,coquette_nails,press_on_nais",,https://juicegels.com/images/products/il_fullxfull.6775643061_771i.jpg,https://juicegels.com/images/products/il_fullxfull.6775619869_e1cv.jpg,https://juicegels.com/images/products/il_fullxfull.6727593348_7q61.jpg,https://juicegels.com/images/products/il_fullxfull.6775619867_jmr2.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0043?shape=Coffin&length=Long,Juicegels_StargirlDuskSet,Coffin,Long\r
JUICEGELS-0643,Stargirl Dusk Set,"Very dark brown/black base set with nude french tips and white line art stars and rhinestones

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"y2k_nails,star_nails,gel_nails,white_gel_nails,coquette_nails,press_on_nais",,https://juicegels.com/images/products/il_fullxfull.6775643061_771i.jpg,https://juicegels.com/images/products/il_fullxfull.6775619869_e1cv.jpg,https://juicegels.com/images/products/il_fullxfull.6727593348_7q61.jpg,https://juicegels.com/images/products/il_fullxfull.6775619867_jmr2.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0043?shape=Almond&length=Short,Juicegels_StargirlDuskSet,Almond,Short\r
JUICEGELS-0644,Stargirl Dusk Set,"Very dark brown/black base set with nude french tips and white line art stars and rhinestones

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"y2k_nails,star_nails,gel_nails,white_gel_nails,coquette_nails,press_on_nais",,https://juicegels.com/images/products/il_fullxfull.6775643061_771i.jpg,https://juicegels.com/images/products/il_fullxfull.6775619869_e1cv.jpg,https://juicegels.com/images/products/il_fullxfull.6727593348_7q61.jpg,https://juicegels.com/images/products/il_fullxfull.6775619867_jmr2.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0043?shape=Almond&length=Medium,Juicegels_StargirlDuskSet,Almond,Medium\r
JUICEGELS-0645,Stargirl Dusk Set,"Very dark brown/black base set with nude french tips and white line art stars and rhinestones

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"y2k_nails,star_nails,gel_nails,white_gel_nails,coquette_nails,press_on_nais",,https://juicegels.com/images/products/il_fullxfull.6775643061_771i.jpg,https://juicegels.com/images/products/il_fullxfull.6775619869_e1cv.jpg,https://juicegels.com/images/products/il_fullxfull.6727593348_7q61.jpg,https://juicegels.com/images/products/il_fullxfull.6775619867_jmr2.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0043?shape=Almond&length=Long,Juicegels_StargirlDuskSet,Almond,Long\r
JUICEGELS-0646,Stargirl Dawn Set,"White base set with nude french tips and brown line art stars and rhinestones

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"y2k_nails,star_nails,gel_nails,white_gel_nails,coquette_nails,press_on_nais",,https://juicegels.com/images/products/il_fullxfull.6727594410_nbbx.jpg,https://juicegels.com/images/products/il_fullxfull.6775619869_e1cv.jpg,https://juicegels.com/images/products/il_fullxfull.6727593348_7q61.jpg,https://juicegels.com/images/products/il_fullxfull.6775619867_jmr2.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0044?shape=Square&length=Short,Juicegels_StargirlDawnSet,Square,Short\r
JUICEGELS-0647,Stargirl Dawn Set,"White base set with nude french tips and brown line art stars and rhinestones

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"y2k_nails,star_nails,gel_nails,white_gel_nails,coquette_nails,press_on_nais",,https://juicegels.com/images/products/il_fullxfull.6727594410_nbbx.jpg,https://juicegels.com/images/products/il_fullxfull.6775619869_e1cv.jpg,https://juicegels.com/images/products/il_fullxfull.6727593348_7q61.jpg,https://juicegels.com/images/products/il_fullxfull.6775619867_jmr2.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0044?shape=Square&length=Medium,Juicegels_StargirlDawnSet,Square,Medium\r
JUICEGELS-0648,Stargirl Dawn Set,"White base set with nude french tips and brown line art stars and rhinestones

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"y2k_nails,star_nails,gel_nails,white_gel_nails,coquette_nails,press_on_nais",,https://juicegels.com/images/products/il_fullxfull.6727594410_nbbx.jpg,https://juicegels.com/images/products/il_fullxfull.6775619869_e1cv.jpg,https://juicegels.com/images/products/il_fullxfull.6727593348_7q61.jpg,https://juicegels.com/images/products/il_fullxfull.6775619867_jmr2.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0044?shape=Square&length=Long,Juicegels_StargirlDawnSet,Square,Long\r
JUICEGELS-0649,Stargirl Dawn Set,"White base set with nude french tips and brown line art stars and rhinestones

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"y2k_nails,star_nails,gel_nails,white_gel_nails,coquette_nails,press_on_nais",,https://juicegels.com/images/products/il_fullxfull.6727594410_nbbx.jpg,https://juicegels.com/images/products/il_fullxfull.6775619869_e1cv.jpg,https://juicegels.com/images/products/il_fullxfull.6727593348_7q61.jpg,https://juicegels.com/images/products/il_fullxfull.6775619867_jmr2.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0044?shape=Oval&length=Short,Juicegels_StargirlDawnSet,Oval,Short\r
JUICEGELS-0650,Stargirl Dawn Set,"White base set with nude french tips and brown line art stars and rhinestones

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"y2k_nails,star_nails,gel_nails,white_gel_nails,coquette_nails,press_on_nais",,https://juicegels.com/images/products/il_fullxfull.6727594410_nbbx.jpg,https://juicegels.com/images/products/il_fullxfull.6775619869_e1cv.jpg,https://juicegels.com/images/products/il_fullxfull.6727593348_7q61.jpg,https://juicegels.com/images/products/il_fullxfull.6775619867_jmr2.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0044?shape=Oval&length=Medium,Juicegels_StargirlDawnSet,Oval,Medium\r
JUICEGELS-0651,Stargirl Dawn Set,"White base set with nude french tips and brown line art stars and rhinestones

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"y2k_nails,star_nails,gel_nails,white_gel_nails,coquette_nails,press_on_nais",,https://juicegels.com/images/products/il_fullxfull.6727594410_nbbx.jpg,https://juicegels.com/images/products/il_fullxfull.6775619869_e1cv.jpg,https://juicegels.com/images/products/il_fullxfull.6727593348_7q61.jpg,https://juicegels.com/images/products/il_fullxfull.6775619867_jmr2.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0044?shape=Oval&length=Long,Juicegels_StargirlDawnSet,Oval,Long\r
JUICEGELS-0652,Stargirl Dawn Set,"White base set with nude french tips and brown line art stars and rhinestones

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"y2k_nails,star_nails,gel_nails,white_gel_nails,coquette_nails,press_on_nais",,https://juicegels.com/images/products/il_fullxfull.6727594410_nbbx.jpg,https://juicegels.com/images/products/il_fullxfull.6775619869_e1cv.jpg,https://juicegels.com/images/products/il_fullxfull.6727593348_7q61.jpg,https://juicegels.com/images/products/il_fullxfull.6775619867_jmr2.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0044?shape=Stiletto&length=Short,Juicegels_StargirlDawnSet,Stiletto,Short\r
JUICEGELS-0653,Stargirl Dawn Set,"White base set with nude french tips and brown line art stars and rhinestones

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"y2k_nails,star_nails,gel_nails,white_gel_nails,coquette_nails,press_on_nais",,https://juicegels.com/images/products/il_fullxfull.6727594410_nbbx.jpg,https://juicegels.com/images/products/il_fullxfull.6775619869_e1cv.jpg,https://juicegels.com/images/products/il_fullxfull.6727593348_7q61.jpg,https://juicegels.com/images/products/il_fullxfull.6775619867_jmr2.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0044?shape=Stiletto&length=Medium,Juicegels_StargirlDawnSet,Stiletto,Medium\r
JUICEGELS-0654,Stargirl Dawn Set,"White base set with nude french tips and brown line art stars and rhinestones

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"y2k_nails,star_nails,gel_nails,white_gel_nails,coquette_nails,press_on_nais",,https://juicegels.com/images/products/il_fullxfull.6727594410_nbbx.jpg,https://juicegels.com/images/products/il_fullxfull.6775619869_e1cv.jpg,https://juicegels.com/images/products/il_fullxfull.6727593348_7q61.jpg,https://juicegels.com/images/products/il_fullxfull.6775619867_jmr2.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0044?shape=Stiletto&length=Long,Juicegels_StargirlDawnSet,Stiletto,Long\r
JUICEGELS-0655,Stargirl Dawn Set,"White base set with nude french tips and brown line art stars and rhinestones

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"y2k_nails,star_nails,gel_nails,white_gel_nails,coquette_nails,press_on_nais",,https://juicegels.com/images/products/il_fullxfull.6727594410_nbbx.jpg,https://juicegels.com/images/products/il_fullxfull.6775619869_e1cv.jpg,https://juicegels.com/images/products/il_fullxfull.6727593348_7q61.jpg,https://juicegels.com/images/products/il_fullxfull.6775619867_jmr2.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0044?shape=Coffin&length=Short,Juicegels_StargirlDawnSet,Coffin,Short\r
JUICEGELS-0656,Stargirl Dawn Set,"White base set with nude french tips and brown line art stars and rhinestones

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"y2k_nails,star_nails,gel_nails,white_gel_nails,coquette_nails,press_on_nais",,https://juicegels.com/images/products/il_fullxfull.6727594410_nbbx.jpg,https://juicegels.com/images/products/il_fullxfull.6775619869_e1cv.jpg,https://juicegels.com/images/products/il_fullxfull.6727593348_7q61.jpg,https://juicegels.com/images/products/il_fullxfull.6775619867_jmr2.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0044?shape=Coffin&length=Medium,Juicegels_StargirlDawnSet,Coffin,Medium\r
JUICEGELS-0657,Stargirl Dawn Set,"White base set with nude french tips and brown line art stars and rhinestones

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"y2k_nails,star_nails,gel_nails,white_gel_nails,coquette_nails,press_on_nais",,https://juicegels.com/images/products/il_fullxfull.6727594410_nbbx.jpg,https://juicegels.com/images/products/il_fullxfull.6775619869_e1cv.jpg,https://juicegels.com/images/products/il_fullxfull.6727593348_7q61.jpg,https://juicegels.com/images/products/il_fullxfull.6775619867_jmr2.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0044?shape=Coffin&length=Long,Juicegels_StargirlDawnSet,Coffin,Long\r
JUICEGELS-0658,Stargirl Dawn Set,"White base set with nude french tips and brown line art stars and rhinestones

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"y2k_nails,star_nails,gel_nails,white_gel_nails,coquette_nails,press_on_nais",,https://juicegels.com/images/products/il_fullxfull.6727594410_nbbx.jpg,https://juicegels.com/images/products/il_fullxfull.6775619869_e1cv.jpg,https://juicegels.com/images/products/il_fullxfull.6727593348_7q61.jpg,https://juicegels.com/images/products/il_fullxfull.6775619867_jmr2.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0044?shape=Almond&length=Short,Juicegels_StargirlDawnSet,Almond,Short\r
JUICEGELS-0659,Stargirl Dawn Set,"White base set with nude french tips and brown line art stars and rhinestones

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"y2k_nails,star_nails,gel_nails,white_gel_nails,coquette_nails,press_on_nais",,https://juicegels.com/images/products/il_fullxfull.6727594410_nbbx.jpg,https://juicegels.com/images/products/il_fullxfull.6775619869_e1cv.jpg,https://juicegels.com/images/products/il_fullxfull.6727593348_7q61.jpg,https://juicegels.com/images/products/il_fullxfull.6775619867_jmr2.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0044?shape=Almond&length=Medium,Juicegels_StargirlDawnSet,Almond,Medium\r
JUICEGELS-0660,Stargirl Dawn Set,"White base set with nude french tips and brown line art stars and rhinestones

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"y2k_nails,star_nails,gel_nails,white_gel_nails,coquette_nails,press_on_nais",,https://juicegels.com/images/products/il_fullxfull.6727594410_nbbx.jpg,https://juicegels.com/images/products/il_fullxfull.6775619869_e1cv.jpg,https://juicegels.com/images/products/il_fullxfull.6727593348_7q61.jpg,https://juicegels.com/images/products/il_fullxfull.6775619867_jmr2.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0044?shape=Almond&length=Long,Juicegels_StargirlDawnSet,Almond,Long\r
JUICEGELS-0661,Cherry Kissed Pearls Set,"Short almond Cherry inspired Valentines Nails with Pearl Charms and Red French Tips

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.6628010109_li6v.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0045?shape=Square&length=Short,Juicegels_CherryKissedPearlsSet,Square,Short\r
JUICEGELS-0662,Cherry Kissed Pearls Set,"Short almond Cherry inspired Valentines Nails with Pearl Charms and Red French Tips

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.6628010109_li6v.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0045?shape=Square&length=Medium,Juicegels_CherryKissedPearlsSet,Square,Medium\r
JUICEGELS-0663,Cherry Kissed Pearls Set,"Short almond Cherry inspired Valentines Nails with Pearl Charms and Red French Tips

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.6628010109_li6v.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0045?shape=Square&length=Long,Juicegels_CherryKissedPearlsSet,Square,Long\r
JUICEGELS-0664,Cherry Kissed Pearls Set,"Short almond Cherry inspired Valentines Nails with Pearl Charms and Red French Tips

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.6628010109_li6v.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0045?shape=Oval&length=Short,Juicegels_CherryKissedPearlsSet,Oval,Short\r
JUICEGELS-0665,Cherry Kissed Pearls Set,"Short almond Cherry inspired Valentines Nails with Pearl Charms and Red French Tips

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.6628010109_li6v.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0045?shape=Oval&length=Medium,Juicegels_CherryKissedPearlsSet,Oval,Medium\r
JUICEGELS-0666,Cherry Kissed Pearls Set,"Short almond Cherry inspired Valentines Nails with Pearl Charms and Red French Tips

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.6628010109_li6v.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0045?shape=Oval&length=Long,Juicegels_CherryKissedPearlsSet,Oval,Long\r
JUICEGELS-0667,Cherry Kissed Pearls Set,"Short almond Cherry inspired Valentines Nails with Pearl Charms and Red French Tips

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.6628010109_li6v.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0045?shape=Stiletto&length=Short,Juicegels_CherryKissedPearlsSet,Stiletto,Short\r
JUICEGELS-0668,Cherry Kissed Pearls Set,"Short almond Cherry inspired Valentines Nails with Pearl Charms and Red French Tips

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.6628010109_li6v.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0045?shape=Stiletto&length=Medium,Juicegels_CherryKissedPearlsSet,Stiletto,Medium\r
JUICEGELS-0669,Cherry Kissed Pearls Set,"Short almond Cherry inspired Valentines Nails with Pearl Charms and Red French Tips

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.6628010109_li6v.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0045?shape=Stiletto&length=Long,Juicegels_CherryKissedPearlsSet,Stiletto,Long\r
JUICEGELS-0670,Cherry Kissed Pearls Set,"Short almond Cherry inspired Valentines Nails with Pearl Charms and Red French Tips

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.6628010109_li6v.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0045?shape=Coffin&length=Short,Juicegels_CherryKissedPearlsSet,Coffin,Short\r
JUICEGELS-0671,Cherry Kissed Pearls Set,"Short almond Cherry inspired Valentines Nails with Pearl Charms and Red French Tips

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.6628010109_li6v.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0045?shape=Coffin&length=Medium,Juicegels_CherryKissedPearlsSet,Coffin,Medium\r
JUICEGELS-0672,Cherry Kissed Pearls Set,"Short almond Cherry inspired Valentines Nails with Pearl Charms and Red French Tips

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.6628010109_li6v.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0045?shape=Coffin&length=Long,Juicegels_CherryKissedPearlsSet,Coffin,Long\r
JUICEGELS-0673,Cherry Kissed Pearls Set,"Short almond Cherry inspired Valentines Nails with Pearl Charms and Red French Tips

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.6628010109_li6v.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0045?shape=Almond&length=Short,Juicegels_CherryKissedPearlsSet,Almond,Short\r
JUICEGELS-0674,Cherry Kissed Pearls Set,"Short almond Cherry inspired Valentines Nails with Pearl Charms and Red French Tips

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.6628010109_li6v.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0045?shape=Almond&length=Medium,Juicegels_CherryKissedPearlsSet,Almond,Medium\r
JUICEGELS-0675,Cherry Kissed Pearls Set,"Short almond Cherry inspired Valentines Nails with Pearl Charms and Red French Tips

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",14.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.6628010109_li6v.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0045?shape=Almond&length=Long,Juicegels_CherryKissedPearlsSet,Almond,Long\r
JUICEGELS-0676,Hextech Veins Set,"blue cat eye base with metallic silver line art, inspired by the Netflix show ‘Arcane’

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,arcane_nails,metallic_nails,silver_nails,blue_cat_eye,cat_eye_nails,blue_nails,metallic_silver,silver_nail,square_nails",,https://juicegels.com/images/products/il_fullxfull.6602449376_8m7a.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0046?shape=Square&length=Short,Juicegels_HextechVeinsSet,Square,Short\r
JUICEGELS-0677,Hextech Veins Set,"blue cat eye base with metallic silver line art, inspired by the Netflix show ‘Arcane’

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,arcane_nails,metallic_nails,silver_nails,blue_cat_eye,cat_eye_nails,blue_nails,metallic_silver,silver_nail,square_nails",,https://juicegels.com/images/products/il_fullxfull.6602449376_8m7a.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0046?shape=Square&length=Medium,Juicegels_HextechVeinsSet,Square,Medium\r
JUICEGELS-0678,Hextech Veins Set,"blue cat eye base with metallic silver line art, inspired by the Netflix show ‘Arcane’

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,arcane_nails,metallic_nails,silver_nails,blue_cat_eye,cat_eye_nails,blue_nails,metallic_silver,silver_nail,square_nails",,https://juicegels.com/images/products/il_fullxfull.6602449376_8m7a.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0046?shape=Square&length=Long,Juicegels_HextechVeinsSet,Square,Long\r
JUICEGELS-0679,Hextech Veins Set,"blue cat eye base with metallic silver line art, inspired by the Netflix show ‘Arcane’

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,arcane_nails,metallic_nails,silver_nails,blue_cat_eye,cat_eye_nails,blue_nails,metallic_silver,silver_nail,square_nails",,https://juicegels.com/images/products/il_fullxfull.6602449376_8m7a.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0046?shape=Oval&length=Short,Juicegels_HextechVeinsSet,Oval,Short\r
JUICEGELS-0680,Hextech Veins Set,"blue cat eye base with metallic silver line art, inspired by the Netflix show ‘Arcane’

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,arcane_nails,metallic_nails,silver_nails,blue_cat_eye,cat_eye_nails,blue_nails,metallic_silver,silver_nail,square_nails",,https://juicegels.com/images/products/il_fullxfull.6602449376_8m7a.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0046?shape=Oval&length=Medium,Juicegels_HextechVeinsSet,Oval,Medium\r
JUICEGELS-0681,Hextech Veins Set,"blue cat eye base with metallic silver line art, inspired by the Netflix show ‘Arcane’

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,arcane_nails,metallic_nails,silver_nails,blue_cat_eye,cat_eye_nails,blue_nails,metallic_silver,silver_nail,square_nails",,https://juicegels.com/images/products/il_fullxfull.6602449376_8m7a.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0046?shape=Oval&length=Long,Juicegels_HextechVeinsSet,Oval,Long\r
JUICEGELS-0682,Hextech Veins Set,"blue cat eye base with metallic silver line art, inspired by the Netflix show ‘Arcane’

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,arcane_nails,metallic_nails,silver_nails,blue_cat_eye,cat_eye_nails,blue_nails,metallic_silver,silver_nail,square_nails",,https://juicegels.com/images/products/il_fullxfull.6602449376_8m7a.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0046?shape=Stiletto&length=Short,Juicegels_HextechVeinsSet,Stiletto,Short\r
JUICEGELS-0683,Hextech Veins Set,"blue cat eye base with metallic silver line art, inspired by the Netflix show ‘Arcane’

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,arcane_nails,metallic_nails,silver_nails,blue_cat_eye,cat_eye_nails,blue_nails,metallic_silver,silver_nail,square_nails",,https://juicegels.com/images/products/il_fullxfull.6602449376_8m7a.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0046?shape=Stiletto&length=Medium,Juicegels_HextechVeinsSet,Stiletto,Medium\r
JUICEGELS-0684,Hextech Veins Set,"blue cat eye base with metallic silver line art, inspired by the Netflix show ‘Arcane’

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,arcane_nails,metallic_nails,silver_nails,blue_cat_eye,cat_eye_nails,blue_nails,metallic_silver,silver_nail,square_nails",,https://juicegels.com/images/products/il_fullxfull.6602449376_8m7a.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0046?shape=Stiletto&length=Long,Juicegels_HextechVeinsSet,Stiletto,Long\r
JUICEGELS-0685,Hextech Veins Set,"blue cat eye base with metallic silver line art, inspired by the Netflix show ‘Arcane’

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,arcane_nails,metallic_nails,silver_nails,blue_cat_eye,cat_eye_nails,blue_nails,metallic_silver,silver_nail,square_nails",,https://juicegels.com/images/products/il_fullxfull.6602449376_8m7a.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0046?shape=Coffin&length=Short,Juicegels_HextechVeinsSet,Coffin,Short\r
JUICEGELS-0686,Hextech Veins Set,"blue cat eye base with metallic silver line art, inspired by the Netflix show ‘Arcane’

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,arcane_nails,metallic_nails,silver_nails,blue_cat_eye,cat_eye_nails,blue_nails,metallic_silver,silver_nail,square_nails",,https://juicegels.com/images/products/il_fullxfull.6602449376_8m7a.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0046?shape=Coffin&length=Medium,Juicegels_HextechVeinsSet,Coffin,Medium\r
JUICEGELS-0687,Hextech Veins Set,"blue cat eye base with metallic silver line art, inspired by the Netflix show ‘Arcane’

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,arcane_nails,metallic_nails,silver_nails,blue_cat_eye,cat_eye_nails,blue_nails,metallic_silver,silver_nail,square_nails",,https://juicegels.com/images/products/il_fullxfull.6602449376_8m7a.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0046?shape=Coffin&length=Long,Juicegels_HextechVeinsSet,Coffin,Long\r
JUICEGELS-0688,Hextech Veins Set,"blue cat eye base with metallic silver line art, inspired by the Netflix show ‘Arcane’

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,arcane_nails,metallic_nails,silver_nails,blue_cat_eye,cat_eye_nails,blue_nails,metallic_silver,silver_nail,square_nails",,https://juicegels.com/images/products/il_fullxfull.6602449376_8m7a.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0046?shape=Almond&length=Short,Juicegels_HextechVeinsSet,Almond,Short\r
JUICEGELS-0689,Hextech Veins Set,"blue cat eye base with metallic silver line art, inspired by the Netflix show ‘Arcane’

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,arcane_nails,metallic_nails,silver_nails,blue_cat_eye,cat_eye_nails,blue_nails,metallic_silver,silver_nail,square_nails",,https://juicegels.com/images/products/il_fullxfull.6602449376_8m7a.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0046?shape=Almond&length=Medium,Juicegels_HextechVeinsSet,Almond,Medium\r
JUICEGELS-0690,Hextech Veins Set,"blue cat eye base with metallic silver line art, inspired by the Netflix show ‘Arcane’

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,arcane_nails,metallic_nails,silver_nails,blue_cat_eye,cat_eye_nails,blue_nails,metallic_silver,silver_nail,square_nails",,https://juicegels.com/images/products/il_fullxfull.6602449376_8m7a.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0046?shape=Almond&length=Long,Juicegels_HextechVeinsSet,Almond,Long\r
JUICEGELS-0691,Tropical Blush Set,"yellow pink tips with 3d flower art on gradient pink and yellow back base 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6810711039_5hl8.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0047?shape=Square&length=Short,Juicegels_TropicalBlushSet,Square,Short\r
JUICEGELS-0692,Tropical Blush Set,"yellow pink tips with 3d flower art on gradient pink and yellow back base 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6810711039_5hl8.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0047?shape=Square&length=Medium,Juicegels_TropicalBlushSet,Square,Medium\r
JUICEGELS-0693,Tropical Blush Set,"yellow pink tips with 3d flower art on gradient pink and yellow back base 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6810711039_5hl8.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0047?shape=Square&length=Long,Juicegels_TropicalBlushSet,Square,Long\r
JUICEGELS-0694,Tropical Blush Set,"yellow pink tips with 3d flower art on gradient pink and yellow back base 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6810711039_5hl8.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0047?shape=Oval&length=Short,Juicegels_TropicalBlushSet,Oval,Short\r
JUICEGELS-0695,Tropical Blush Set,"yellow pink tips with 3d flower art on gradient pink and yellow back base 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6810711039_5hl8.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0047?shape=Oval&length=Medium,Juicegels_TropicalBlushSet,Oval,Medium\r
JUICEGELS-0696,Tropical Blush Set,"yellow pink tips with 3d flower art on gradient pink and yellow back base 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6810711039_5hl8.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0047?shape=Oval&length=Long,Juicegels_TropicalBlushSet,Oval,Long\r
JUICEGELS-0697,Tropical Blush Set,"yellow pink tips with 3d flower art on gradient pink and yellow back base 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6810711039_5hl8.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0047?shape=Stiletto&length=Short,Juicegels_TropicalBlushSet,Stiletto,Short\r
JUICEGELS-0698,Tropical Blush Set,"yellow pink tips with 3d flower art on gradient pink and yellow back base 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6810711039_5hl8.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0047?shape=Stiletto&length=Medium,Juicegels_TropicalBlushSet,Stiletto,Medium\r
JUICEGELS-0699,Tropical Blush Set,"yellow pink tips with 3d flower art on gradient pink and yellow back base 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6810711039_5hl8.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0047?shape=Stiletto&length=Long,Juicegels_TropicalBlushSet,Stiletto,Long\r
JUICEGELS-0700,Tropical Blush Set,"yellow pink tips with 3d flower art on gradient pink and yellow back base 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6810711039_5hl8.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0047?shape=Coffin&length=Short,Juicegels_TropicalBlushSet,Coffin,Short\r
JUICEGELS-0701,Tropical Blush Set,"yellow pink tips with 3d flower art on gradient pink and yellow back base 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6810711039_5hl8.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0047?shape=Coffin&length=Medium,Juicegels_TropicalBlushSet,Coffin,Medium\r
JUICEGELS-0702,Tropical Blush Set,"yellow pink tips with 3d flower art on gradient pink and yellow back base 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6810711039_5hl8.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0047?shape=Coffin&length=Long,Juicegels_TropicalBlushSet,Coffin,Long\r
JUICEGELS-0703,Tropical Blush Set,"yellow pink tips with 3d flower art on gradient pink and yellow back base 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6810711039_5hl8.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0047?shape=Almond&length=Short,Juicegels_TropicalBlushSet,Almond,Short\r
JUICEGELS-0704,Tropical Blush Set,"yellow pink tips with 3d flower art on gradient pink and yellow back base 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6810711039_5hl8.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0047?shape=Almond&length=Medium,Juicegels_TropicalBlushSet,Almond,Medium\r
JUICEGELS-0705,Tropical Blush Set,"yellow pink tips with 3d flower art on gradient pink and yellow back base 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"ballerina_nails,gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,pink_nails,bow_nails",,https://juicegels.com/images/products/il_fullxfull.6810711039_5hl8.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0047?shape=Almond&length=Long,Juicegels_TropicalBlushSet,Almond,Long\r
JUICEGELS-0706,Tonal Traces Set,"neutral toned matte base colours with lining overlay

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,nude_nails,neutral_nails,y2k_nails",,https://juicegels.com/images/products/il_fullxfull.6717576829_6pd8.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0048?shape=Square&length=Short,Juicegels_TonalTracesSet,Square,Short\r
JUICEGELS-0707,Tonal Traces Set,"neutral toned matte base colours with lining overlay

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,nude_nails,neutral_nails,y2k_nails",,https://juicegels.com/images/products/il_fullxfull.6717576829_6pd8.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0048?shape=Square&length=Medium,Juicegels_TonalTracesSet,Square,Medium\r
JUICEGELS-0708,Tonal Traces Set,"neutral toned matte base colours with lining overlay

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,nude_nails,neutral_nails,y2k_nails",,https://juicegels.com/images/products/il_fullxfull.6717576829_6pd8.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0048?shape=Square&length=Long,Juicegels_TonalTracesSet,Square,Long\r
JUICEGELS-0709,Tonal Traces Set,"neutral toned matte base colours with lining overlay

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,nude_nails,neutral_nails,y2k_nails",,https://juicegels.com/images/products/il_fullxfull.6717576829_6pd8.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0048?shape=Oval&length=Short,Juicegels_TonalTracesSet,Oval,Short\r
JUICEGELS-0710,Tonal Traces Set,"neutral toned matte base colours with lining overlay

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,nude_nails,neutral_nails,y2k_nails",,https://juicegels.com/images/products/il_fullxfull.6717576829_6pd8.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0048?shape=Oval&length=Medium,Juicegels_TonalTracesSet,Oval,Medium\r
JUICEGELS-0711,Tonal Traces Set,"neutral toned matte base colours with lining overlay

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,nude_nails,neutral_nails,y2k_nails",,https://juicegels.com/images/products/il_fullxfull.6717576829_6pd8.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0048?shape=Oval&length=Long,Juicegels_TonalTracesSet,Oval,Long\r
JUICEGELS-0712,Tonal Traces Set,"neutral toned matte base colours with lining overlay

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,nude_nails,neutral_nails,y2k_nails",,https://juicegels.com/images/products/il_fullxfull.6717576829_6pd8.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0048?shape=Stiletto&length=Short,Juicegels_TonalTracesSet,Stiletto,Short\r
JUICEGELS-0713,Tonal Traces Set,"neutral toned matte base colours with lining overlay

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,nude_nails,neutral_nails,y2k_nails",,https://juicegels.com/images/products/il_fullxfull.6717576829_6pd8.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0048?shape=Stiletto&length=Medium,Juicegels_TonalTracesSet,Stiletto,Medium\r
JUICEGELS-0714,Tonal Traces Set,"neutral toned matte base colours with lining overlay

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,nude_nails,neutral_nails,y2k_nails",,https://juicegels.com/images/products/il_fullxfull.6717576829_6pd8.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0048?shape=Stiletto&length=Long,Juicegels_TonalTracesSet,Stiletto,Long\r
JUICEGELS-0715,Tonal Traces Set,"neutral toned matte base colours with lining overlay

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,nude_nails,neutral_nails,y2k_nails",,https://juicegels.com/images/products/il_fullxfull.6717576829_6pd8.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0048?shape=Coffin&length=Short,Juicegels_TonalTracesSet,Coffin,Short\r
JUICEGELS-0716,Tonal Traces Set,"neutral toned matte base colours with lining overlay

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,nude_nails,neutral_nails,y2k_nails",,https://juicegels.com/images/products/il_fullxfull.6717576829_6pd8.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0048?shape=Coffin&length=Medium,Juicegels_TonalTracesSet,Coffin,Medium\r
JUICEGELS-0717,Tonal Traces Set,"neutral toned matte base colours with lining overlay

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,nude_nails,neutral_nails,y2k_nails",,https://juicegels.com/images/products/il_fullxfull.6717576829_6pd8.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0048?shape=Coffin&length=Long,Juicegels_TonalTracesSet,Coffin,Long\r
JUICEGELS-0718,Tonal Traces Set,"neutral toned matte base colours with lining overlay

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,nude_nails,neutral_nails,y2k_nails",,https://juicegels.com/images/products/il_fullxfull.6717576829_6pd8.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0048?shape=Almond&length=Short,Juicegels_TonalTracesSet,Almond,Short\r
JUICEGELS-0719,Tonal Traces Set,"neutral toned matte base colours with lining overlay

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,nude_nails,neutral_nails,y2k_nails",,https://juicegels.com/images/products/il_fullxfull.6717576829_6pd8.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0048?shape=Almond&length=Medium,Juicegels_TonalTracesSet,Almond,Medium\r
JUICEGELS-0720,Tonal Traces Set,"neutral toned matte base colours with lining overlay

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",12.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,nude_nails,neutral_nails,y2k_nails",,https://juicegels.com/images/products/il_fullxfull.6717576829_6pd8.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0048?shape=Almond&length=Long,Juicegels_TonalTracesSet,Almond,Long\r
JUICEGELS-0721,Mystic Emerald Set,"Green base with gold line art of half butterfly and gold stars with red gems

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.6750217949_4foq.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0049?shape=Square&length=Short,Juicegels_MysticEmeraldSet,Square,Short\r
JUICEGELS-0722,Mystic Emerald Set,"Green base with gold line art of half butterfly and gold stars with red gems

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.6750217949_4foq.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0049?shape=Square&length=Medium,Juicegels_MysticEmeraldSet,Square,Medium\r
JUICEGELS-0723,Mystic Emerald Set,"Green base with gold line art of half butterfly and gold stars with red gems

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.6750217949_4foq.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0049?shape=Square&length=Long,Juicegels_MysticEmeraldSet,Square,Long\r
JUICEGELS-0724,Mystic Emerald Set,"Green base with gold line art of half butterfly and gold stars with red gems

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.6750217949_4foq.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0049?shape=Oval&length=Short,Juicegels_MysticEmeraldSet,Oval,Short\r
JUICEGELS-0725,Mystic Emerald Set,"Green base with gold line art of half butterfly and gold stars with red gems

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.6750217949_4foq.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0049?shape=Oval&length=Medium,Juicegels_MysticEmeraldSet,Oval,Medium\r
JUICEGELS-0726,Mystic Emerald Set,"Green base with gold line art of half butterfly and gold stars with red gems

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.6750217949_4foq.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0049?shape=Oval&length=Long,Juicegels_MysticEmeraldSet,Oval,Long\r
JUICEGELS-0727,Mystic Emerald Set,"Green base with gold line art of half butterfly and gold stars with red gems

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.6750217949_4foq.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0049?shape=Stiletto&length=Short,Juicegels_MysticEmeraldSet,Stiletto,Short\r
JUICEGELS-0728,Mystic Emerald Set,"Green base with gold line art of half butterfly and gold stars with red gems

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.6750217949_4foq.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0049?shape=Stiletto&length=Medium,Juicegels_MysticEmeraldSet,Stiletto,Medium\r
JUICEGELS-0729,Mystic Emerald Set,"Green base with gold line art of half butterfly and gold stars with red gems

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.6750217949_4foq.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0049?shape=Stiletto&length=Long,Juicegels_MysticEmeraldSet,Stiletto,Long\r
JUICEGELS-0730,Mystic Emerald Set,"Green base with gold line art of half butterfly and gold stars with red gems

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.6750217949_4foq.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0049?shape=Coffin&length=Short,Juicegels_MysticEmeraldSet,Coffin,Short\r
JUICEGELS-0731,Mystic Emerald Set,"Green base with gold line art of half butterfly and gold stars with red gems

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.6750217949_4foq.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0049?shape=Coffin&length=Medium,Juicegels_MysticEmeraldSet,Coffin,Medium\r
JUICEGELS-0732,Mystic Emerald Set,"Green base with gold line art of half butterfly and gold stars with red gems

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.6750217949_4foq.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0049?shape=Coffin&length=Long,Juicegels_MysticEmeraldSet,Coffin,Long\r
JUICEGELS-0733,Mystic Emerald Set,"Green base with gold line art of half butterfly and gold stars with red gems

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.6750217949_4foq.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0049?shape=Almond&length=Short,Juicegels_MysticEmeraldSet,Almond,Short\r
JUICEGELS-0734,Mystic Emerald Set,"Green base with gold line art of half butterfly and gold stars with red gems

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.6750217949_4foq.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0049?shape=Almond&length=Medium,Juicegels_MysticEmeraldSet,Almond,Medium\r
JUICEGELS-0735,Mystic Emerald Set,"Green base with gold line art of half butterfly and gold stars with red gems

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",16.5,GBP,20,"gel_x_nails,press_on_nails,gel_press_on_nails,cute_nails,red_nails,cherry_nails,valentines_nails",,https://juicegels.com/images/products/il_fullxfull.6750217949_4foq.jpg,https://juicegels.com/images/products/il_fullxfull.6603590697_ihw4.jpg,https://juicegels.com/images/products/il_fullxfull.6603590695_jgea.jpg,https://juicegels.com/images/products/il_fullxfull.6603590699_lqif.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0049?shape=Almond&length=Long,Juicegels_MysticEmeraldSet,Almond,Long\r
JUICEGELS-0736,Mocha Mirage Set,"brown toned gel nails 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,brown_nails,y2k_nails,brown_aura_nails,brown_gel_nails,brown_press_on_nails",,https://juicegels.com/images/products/il_fullxfull.7113362996_1gf5.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0050?shape=Square&length=Short,Juicegels_MochaMirageSet,Square,Short\r
JUICEGELS-0737,Mocha Mirage Set,"brown toned gel nails 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,brown_nails,y2k_nails,brown_aura_nails,brown_gel_nails,brown_press_on_nails",,https://juicegels.com/images/products/il_fullxfull.7113362996_1gf5.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0050?shape=Square&length=Medium,Juicegels_MochaMirageSet,Square,Medium\r
JUICEGELS-0738,Mocha Mirage Set,"brown toned gel nails 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,brown_nails,y2k_nails,brown_aura_nails,brown_gel_nails,brown_press_on_nails",,https://juicegels.com/images/products/il_fullxfull.7113362996_1gf5.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0050?shape=Square&length=Long,Juicegels_MochaMirageSet,Square,Long\r
JUICEGELS-0739,Mocha Mirage Set,"brown toned gel nails 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,brown_nails,y2k_nails,brown_aura_nails,brown_gel_nails,brown_press_on_nails",,https://juicegels.com/images/products/il_fullxfull.7113362996_1gf5.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0050?shape=Oval&length=Short,Juicegels_MochaMirageSet,Oval,Short\r
JUICEGELS-0740,Mocha Mirage Set,"brown toned gel nails 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,brown_nails,y2k_nails,brown_aura_nails,brown_gel_nails,brown_press_on_nails",,https://juicegels.com/images/products/il_fullxfull.7113362996_1gf5.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0050?shape=Oval&length=Medium,Juicegels_MochaMirageSet,Oval,Medium\r
JUICEGELS-0741,Mocha Mirage Set,"brown toned gel nails 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,brown_nails,y2k_nails,brown_aura_nails,brown_gel_nails,brown_press_on_nails",,https://juicegels.com/images/products/il_fullxfull.7113362996_1gf5.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0050?shape=Oval&length=Long,Juicegels_MochaMirageSet,Oval,Long\r
JUICEGELS-0742,Mocha Mirage Set,"brown toned gel nails 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,brown_nails,y2k_nails,brown_aura_nails,brown_gel_nails,brown_press_on_nails",,https://juicegels.com/images/products/il_fullxfull.7113362996_1gf5.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0050?shape=Stiletto&length=Short,Juicegels_MochaMirageSet,Stiletto,Short\r
JUICEGELS-0743,Mocha Mirage Set,"brown toned gel nails 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,brown_nails,y2k_nails,brown_aura_nails,brown_gel_nails,brown_press_on_nails",,https://juicegels.com/images/products/il_fullxfull.7113362996_1gf5.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0050?shape=Stiletto&length=Medium,Juicegels_MochaMirageSet,Stiletto,Medium\r
JUICEGELS-0744,Mocha Mirage Set,"brown toned gel nails 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,brown_nails,y2k_nails,brown_aura_nails,brown_gel_nails,brown_press_on_nails",,https://juicegels.com/images/products/il_fullxfull.7113362996_1gf5.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0050?shape=Stiletto&length=Long,Juicegels_MochaMirageSet,Stiletto,Long\r
JUICEGELS-0745,Mocha Mirage Set,"brown toned gel nails 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,brown_nails,y2k_nails,brown_aura_nails,brown_gel_nails,brown_press_on_nails",,https://juicegels.com/images/products/il_fullxfull.7113362996_1gf5.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0050?shape=Coffin&length=Short,Juicegels_MochaMirageSet,Coffin,Short\r
JUICEGELS-0746,Mocha Mirage Set,"brown toned gel nails 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,brown_nails,y2k_nails,brown_aura_nails,brown_gel_nails,brown_press_on_nails",,https://juicegels.com/images/products/il_fullxfull.7113362996_1gf5.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0050?shape=Coffin&length=Medium,Juicegels_MochaMirageSet,Coffin,Medium\r
JUICEGELS-0747,Mocha Mirage Set,"brown toned gel nails 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,brown_nails,y2k_nails,brown_aura_nails,brown_gel_nails,brown_press_on_nails",,https://juicegels.com/images/products/il_fullxfull.7113362996_1gf5.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0050?shape=Coffin&length=Long,Juicegels_MochaMirageSet,Coffin,Long\r
JUICEGELS-0748,Mocha Mirage Set,"brown toned gel nails 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,brown_nails,y2k_nails,brown_aura_nails,brown_gel_nails,brown_press_on_nails",,https://juicegels.com/images/products/il_fullxfull.7113362996_1gf5.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0050?shape=Almond&length=Short,Juicegels_MochaMirageSet,Almond,Short\r
JUICEGELS-0749,Mocha Mirage Set,"brown toned gel nails 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,brown_nails,y2k_nails,brown_aura_nails,brown_gel_nails,brown_press_on_nails",,https://juicegels.com/images/products/il_fullxfull.7113362996_1gf5.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0050?shape=Almond&length=Medium,Juicegels_MochaMirageSet,Almond,Medium\r
JUICEGELS-0750,Mocha Mirage Set,"brown toned gel nails 

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",15.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,brown_nails,y2k_nails,brown_aura_nails,brown_gel_nails,brown_press_on_nails",,https://juicegels.com/images/products/il_fullxfull.7113362996_1gf5.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0050?shape=Almond&length=Long,Juicegels_MochaMirageSet,Almond,Long\r
JUICEGELS-0751,Jelly Heartburst Set,"jelly base with heart art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,valentines_nails,valentines,heart_nails,jelly_nails",,https://juicegels.com/images/products/il_fullxfull.6646179991_kllb.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0051?shape=Square&length=Short,Juicegels_JellyHeartburstSet,Square,Short\r
JUICEGELS-0752,Jelly Heartburst Set,"jelly base with heart art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,valentines_nails,valentines,heart_nails,jelly_nails",,https://juicegels.com/images/products/il_fullxfull.6646179991_kllb.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0051?shape=Square&length=Medium,Juicegels_JellyHeartburstSet,Square,Medium\r
JUICEGELS-0753,Jelly Heartburst Set,"jelly base with heart art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,valentines_nails,valentines,heart_nails,jelly_nails",,https://juicegels.com/images/products/il_fullxfull.6646179991_kllb.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0051?shape=Square&length=Long,Juicegels_JellyHeartburstSet,Square,Long\r
JUICEGELS-0754,Jelly Heartburst Set,"jelly base with heart art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,valentines_nails,valentines,heart_nails,jelly_nails",,https://juicegels.com/images/products/il_fullxfull.6646179991_kllb.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0051?shape=Oval&length=Short,Juicegels_JellyHeartburstSet,Oval,Short\r
JUICEGELS-0755,Jelly Heartburst Set,"jelly base with heart art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,valentines_nails,valentines,heart_nails,jelly_nails",,https://juicegels.com/images/products/il_fullxfull.6646179991_kllb.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0051?shape=Oval&length=Medium,Juicegels_JellyHeartburstSet,Oval,Medium\r
JUICEGELS-0756,Jelly Heartburst Set,"jelly base with heart art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,valentines_nails,valentines,heart_nails,jelly_nails",,https://juicegels.com/images/products/il_fullxfull.6646179991_kllb.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0051?shape=Oval&length=Long,Juicegels_JellyHeartburstSet,Oval,Long\r
JUICEGELS-0757,Jelly Heartburst Set,"jelly base with heart art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,valentines_nails,valentines,heart_nails,jelly_nails",,https://juicegels.com/images/products/il_fullxfull.6646179991_kllb.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0051?shape=Stiletto&length=Short,Juicegels_JellyHeartburstSet,Stiletto,Short\r
JUICEGELS-0758,Jelly Heartburst Set,"jelly base with heart art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,valentines_nails,valentines,heart_nails,jelly_nails",,https://juicegels.com/images/products/il_fullxfull.6646179991_kllb.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0051?shape=Stiletto&length=Medium,Juicegels_JellyHeartburstSet,Stiletto,Medium\r
JUICEGELS-0759,Jelly Heartburst Set,"jelly base with heart art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,valentines_nails,valentines,heart_nails,jelly_nails",,https://juicegels.com/images/products/il_fullxfull.6646179991_kllb.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0051?shape=Stiletto&length=Long,Juicegels_JellyHeartburstSet,Stiletto,Long\r
JUICEGELS-0760,Jelly Heartburst Set,"jelly base with heart art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,valentines_nails,valentines,heart_nails,jelly_nails",,https://juicegels.com/images/products/il_fullxfull.6646179991_kllb.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0051?shape=Coffin&length=Short,Juicegels_JellyHeartburstSet,Coffin,Short\r
JUICEGELS-0761,Jelly Heartburst Set,"jelly base with heart art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,valentines_nails,valentines,heart_nails,jelly_nails",,https://juicegels.com/images/products/il_fullxfull.6646179991_kllb.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0051?shape=Coffin&length=Medium,Juicegels_JellyHeartburstSet,Coffin,Medium\r
JUICEGELS-0762,Jelly Heartburst Set,"jelly base with heart art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,valentines_nails,valentines,heart_nails,jelly_nails",,https://juicegels.com/images/products/il_fullxfull.6646179991_kllb.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0051?shape=Coffin&length=Long,Juicegels_JellyHeartburstSet,Coffin,Long\r
JUICEGELS-0763,Jelly Heartburst Set,"jelly base with heart art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,valentines_nails,valentines,heart_nails,jelly_nails",,https://juicegels.com/images/products/il_fullxfull.6646179991_kllb.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0051?shape=Almond&length=Short,Juicegels_JellyHeartburstSet,Almond,Short\r
JUICEGELS-0764,Jelly Heartburst Set,"jelly base with heart art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,valentines_nails,valentines,heart_nails,jelly_nails",,https://juicegels.com/images/products/il_fullxfull.6646179991_kllb.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0051?shape=Almond&length=Medium,Juicegels_JellyHeartburstSet,Almond,Medium\r
JUICEGELS-0765,Jelly Heartburst Set,"jelly base with heart art

- Handmade
- Available shapes: square, oval, stiletto, coffin
- Please send your nail sizes using the provided measuring method for true-to-fit sizes
- Includes mini nail file & wooden cuticle pusher",13.5,GBP,20,"graphic_nails,art_nails,press_on_nails,gel_press_on_nails,valentines_nails,valentines,heart_nails,jelly_nails",,https://juicegels.com/images/products/il_fullxfull.6646179991_kllb.jpg,https://juicegels.com/images/products/il_fullxfull.6603541455_m9m9.jpg,https://juicegels.com/images/products/il_fullxfull.6603541461_qfuo.jpg,https://juicegels.com/images/products/il_fullxfull.6555421138_2my7.jpg,,,,,,,new,in stock,https://juicegels.com/#/product/JUICEGELS-0051?shape=Almond&length=Long,Juicegels_JellyHeartburstSet,Almond,Long\r
`,ad=["Square","Oval","Stiletto","Coffin","Almond"];function od(t){const a=[];let o="",r=!1;for(let c=0;c<t.length;c++){const p=t[c];p==='"'?r&&t[c+1]==='"'?(o+='"',c++):r=!r:p===","&&!r?(a.push(o),o=""):o+=p}return a.push(o),a}function G_(t){const a=[];let o="",r=!1;for(let c=0;c<t.length;c++){const p=t[c];p==='"'?(r&&t[c+1]==='"'?(o+='"',c++):r=!r,o+=p):(p===`
`||p==="\r")&&!r?(p==="\r"&&t[c+1]===`
`&&c++,o.trim()&&a.push(o),o=""):o+=p}return o.trim()&&a.push(o),a}function P_(){const t=G_(L_),a=od(t[0]).map(c=>c.trim()),o=(c,p)=>{var f;const g=a.indexOf(p);return g>=0?((f=c[g])==null?void 0:f.trim())??"":""},r=[];for(let c=1;c<t.length;c++){const p=od(t[c]),g=o(p,"id");if(!g||o(p,"availability")==="out of stock")continue;const f=o(p,"item_group_id")||g,m=o(p,"TITLE"),_=parseFloat(o(p,"PRICE"))||0,k=o(p,"DESCRIPTION").replace(/\n/g," ").replace(/\s+/g," ").trim(),J=["IMAGE1","IMAGE2","IMAGE3","IMAGE4","IMAGE5","IMAGE6","IMAGE7","IMAGE8","IMAGE9","IMAGE10"].map(C=>(o(p,C)||"").trim()).filter(Boolean),U=J[0]||"",H=J.slice(1),A=o(p,"TAGS"),q=A?A.split(",").map(C=>C.trim()).filter(Boolean):[],D=o(p,"VARIATION 1 TYPE")||o(p,"VARIATION 2 TYPE"),Q=o(p,"VARIATION 1 NAME")||o(p,"VARIATION 2 NAME"),X=o(p,"VARIATION 1 VALUES")||o(p,"VARIATION 2 VALUES");let pe=ad;Q==="Nail Shapes"&&X?pe=X.split(",").map(C=>C.trim()).filter(Boolean):(D||Q)&&(pe=ad);const re=o(p,"shape"),we=o(p,"length"),Le=we.charAt(0).toUpperCase()+we.slice(1).toLowerCase();r.push({id:g,groupId:f,name:m,price:_,description:k,image:U,extraImages:H,shapes:pe,tags:q,shape:re,length:Le})}return r}const dn={firstName:"",lastName:"",email:"",phone:"",address:"",instagram:"",city:"",postcode:"",notes:""},ud=new Set(["JUICEGELS-0301"]),Lu="meta_shops",rd="https://juicegels-v2.onrender.com",fi=P_(),J_=fi.filter((t,a,o)=>a===o.findIndex(r=>r.groupId===t.groupId));function z_(t){return t.map(a=>`${encodeURIComponent(a.product.id)}:${encodeURIComponent(String(a.quantity))}`).join(",")}function Gu(t,a){if(t.length===0)return"/basket";const o=[`products=${z_(t)}`];return a!=null&&a.includeCoupon&&o.push(a.coupon?`coupon=${encodeURIComponent(a.coupon)}`:"coupon"),a!=null&&a.cartOrigin&&o.push(`cart_origin=${encodeURIComponent(a.cartOrigin)}`),`/basket?${o.join("&")}`}function cd(t,a){return t.split(",").map(o=>{const[r,c]=o.split(":"),p=decodeURIComponent(r??"").trim(),g=Math.max(1,Number(decodeURIComponent(c??"1"))),f=a.find(m=>m.id===p);return!f||Number.isNaN(g)?null:{product:f,shape:f.shape,length:f.length,quantity:g}}).filter(Boolean)}function pd(t,a){return t.split(",").map(o=>{const[r,c,p,g]=o.split("|"),f=decodeURIComponent(r??"").trim(),m=decodeURIComponent(c??"").trim(),_=decodeURIComponent(p??"Medium"),k=Math.max(1,Number(decodeURIComponent(g??"1"))),S=a.find(J=>J.id===f);return!S||!m||Number.isNaN(k)?null:{product:S,shape:m,length:_,quantity:k}}).filter(Boolean)}function jt(){const t=Is(),a=Rd(),o=eh(),r=b.useMemo(()=>new URLSearchParams(t.search),[t.search]),c=b.useMemo(()=>t.pathname.replace(/\/+$/,"")||"/",[t.pathname]),[p,g]=b.useState("home"),[f,m]=b.useState(null),[_,k]=b.useState(""),[S,J]=b.useState("Medium"),[U,H]=b.useState([]),[A,q]=b.useState(()=>{if(typeof window>"u")return[];try{return JSON.parse(localStorage.getItem("juicegels_cart")??"[]")}catch{return[]}}),[D,Q]=b.useState(()=>{if(typeof window>"u")return dn;try{return JSON.parse(localStorage.getItem("juicegels_form")??"null")??dn}catch{return dn}}),[X,pe]=b.useState({}),[re,we]=b.useState(0),[Le,C]=b.useState(null),[be,ge]=b.useState(!1),[$e,Ee]=b.useState(!1),[He,Pe]=b.useState(""),[Se,Fe]=b.useState(null),[le,O]=b.useState(null),[V,K]=b.useState(!1),y=L=>Gu(L,{coupon:r.get("coupon"),includeCoupon:r.has("coupon")||L.length>0,cartOrigin:r.get("cart_origin")??Lu});b.useEffect(()=>{const L=(()=>{if(!t.search.startsWith("?/"))return"";const[fe]=t.search.slice(1).split("&");return fe.startsWith("/")?fe:`/${fe}`})(),$=r.get("checkout")==="success"||r.has("session_id"),he=r.get("items"),Ce=r.get("products");if(c==="/confirmation"||c==="/checkout-success"||L==="/confirmation"||L==="/checkout-success"||c==="/"&&$){if(he){const fe=pd(he,fi);fe.length>0&&q(fe)}else if(Ce){const fe=cd(Ce,fi);fe.length>0&&q(fe)}g("confirmation");return}if(c==="/basket"){const fe=new URLSearchParams(t.search),Oe=fe.get("products"),il=fe.get("items");if(Oe!==null)q(cd(Oe,fi));else if(il){const bl=pd(il,fi);bl.length>0&&q(bl)}g("basket");return}if(c==="/"){g("home");return}if(c.startsWith("/product/")&&o.id){const fe=fi.find(Oe=>Oe.id===o.id);if(fe){if(Je(fe)){m(fe),k(fe.shape),J(fe.length),we(0),g("product");return}const Oe=new URLSearchParams(t.search),il=Oe.get("shape")??"",bl=Oe.get("length")??"",Ti=dl(fe),Gs=Ls(fe),Ri=Ti.includes(il)?il:Ti[0]??"",Hl=Gs.includes(bl)?bl:Gs[0]??"Medium";m(fe),k(Ri),J(Hl),we(0),g("product");return}}g("home")},[t.search,c,o.id,fi,r]),b.useEffect(()=>{if(p!=="product"||!f||!_||!S)return;const L=new URLSearchParams(t.search),$=L.get("shape")??"",he=L.get("length")??"";$===_&&he===S||Mi(f.id,_,S)},[p,f,_,S]);const B=A.reduce((L,$)=>L+$.product.price*$.quantity,0),ie=A.reduce((L,$)=>L+$.quantity,0),de=(Se==null?void 0:Se.discountAmount)??0,xe=Math.max(0,B-de),me=V||!!le||!!Se;b.useEffect(()=>{typeof window>"u"||localStorage.setItem("juicegels_cart",JSON.stringify(A))},[A]),b.useEffect(()=>{typeof window>"u"||localStorage.setItem("juicegels_form",JSON.stringify(D))},[D]),b.useEffect(()=>{if(!be){Ee(!1);return}const L=window.setTimeout(()=>{Ee(!0)},5e3);return()=>window.clearTimeout(L)},[be]),b.useEffect(()=>{var Ce;const L=((Ce=r.get("coupon"))==null?void 0:Ce.trim())??"";if(Pe(L),!L){Fe(null),O(null),K(!1);return}if(A.length===0){Fe(null),O(null),K(!1);return}const $=new AbortController;return(async()=>{K(!0),O(null);try{const fe=await fetch(`${rd}/validate-coupon`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({coupon:L,subtotal:B}),signal:$.signal}),Oe=await fe.json();if(!fe.ok)throw new Error(Oe.error||"Coupon code could not be applied.");Fe({code:Oe.code,promotionCodeId:Oe.promotionCodeId,description:Oe.description,discountAmount:Oe.discountAmount})}catch(fe){if($.signal.aborted)return;Fe(null),O(fe instanceof Error?fe.message:"Coupon code could not be applied.")}finally{$.signal.aborted||K(!1)}})(),()=>$.abort()},[A.length,B,r]);const Ge=L=>H($=>$.includes(L)?$.filter(he=>he!==L):[...$,L]),Be=["Short","Medium","Long"],Je=L=>ud.has(L.id),dl=L=>{const $=L.shapes;return Array.isArray($)&&$.length>0?$:["Short Almond","Medium Almond","Long Almond"]},Ls=L=>{const $=L.lengths;return Array.isArray($)&&$.length>0?$:Be},Mi=(L,$,he)=>{if(ud.has(L)){a(`/product/${L}`,{replace:!0});return}const Ce=new URLSearchParams;$&&Ce.set("shape",$),he&&Ce.set("length",he),a(`/product/${L}?${Ce.toString()}`,{replace:!0})},el=L=>{const $=dl(L),he=Ls(L),Ce=Je(L)?L.shape:$[0]??"",fe=Je(L)?L.length:he[0]??"Medium";if(m(L),k(Ce),J(fe),we(0),g("product"),Je(L)){a(`/product/${L.id}`);return}a(`/product/${L.id}?shape=${encodeURIComponent(Ce)}&length=${encodeURIComponent(fe)}`)},Wl=()=>{!f||!_||!S||q(L=>{const $=L.findIndex(Ce=>Ce.product.id===f.id&&Ce.shape===_&&Ce.length===S);let he;return $>=0?(he=[...L],he[$]={...he[$],quantity:he[$].quantity+1}):he=[...L,{product:f,shape:_,length:S,quantity:1}],a(y(he)),he})},Os=(L,$,he)=>fi.find(Ce=>Ce.groupId===L&&Ce.shape===$&&Ce.length===he),ji=(L,$)=>{q(he=>{const Ce=[...he],fe=Ce[L].quantity+$;let Oe;return fe<=0?Oe=Ce.filter((il,bl)=>bl!==L):(Ce[L]={...Ce[L],quantity:fe},Oe=Ce),a(y(Oe)),Oe})},Ml=L=>{q($=>{const he=$.filter((Ce,fe)=>fe!==L);return a(y(he)),he})},Gl=(L,$)=>{Q(he=>({...he,[L]:$})),X[L]&&pe(he=>({...he,[L]:""}))},Si=()=>{const L=He.trim();O(null),a(Gu(A,{coupon:L||null,includeCoupon:!!L,cartOrigin:r.get("cart_origin")??Lu}))},fs=()=>{Pe(""),Fe(null),O(null),a(Gu(A,{includeCoupon:!1,cartOrigin:r.get("cart_origin")??Lu}))},ms=()=>{const L={};return D.firstName.trim()||(L.firstName="Required"),D.lastName.trim()||(L.lastName="Required"),(!D.email.trim()||!/\S+@\S+\.\S+/.test(D.email))&&(L.email="Valid email required"),D.phone.trim()||(L.phone="Required"),D.address.trim()||(L.address="Required"),D.city.trim()||(L.city="Required"),D.instagram.trim()||(L.instagram="Required"),D.postcode.trim()||(L.postcode="Required"),pe(L),Object.keys(L).length===0},vi=async L=>{if(L.preventDefault(),!ms())return;if(A.length===0){C("Your basket is empty.");return}C(null),Ee(!1),ge(!0);const $=`${rd}/create-checkout-session`;try{const he=await fetch($,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:A.map(fe=>({product:{id:fe.product.id,name:fe.product.name,price:fe.product.price,description:fe.product.description,image:fe.product.image},shape:fe.shape,length:fe.length,quantity:fe.quantity})),form:D,coupon:(Se==null?void 0:Se.code)??null,promotionCodeId:(Se==null?void 0:Se.promotionCodeId)??null,checkoutPath:"/confirmation"})}),Ce=await he.json();if(!he.ok||!Ce.url)throw new Error(Ce.error||"Failed to create checkout session.");window.location.href=Ce.url}catch(he){C(he instanceof Error?he.message:"Checkout failed."),Ee(!1),ge(!1)}},Hi=()=>{p==="preorder"?g("basket"):p==="basket"?g(f?"product":"home"):a("/home")};return w.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",maxWidth:430,margin:"0 auto",minHeight:"100vh",background:"var(--background)"},children:[$e&&w.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(34, 18, 25, 0.42)",display:"flex",alignItems:"center",justifyContent:"center",padding:20,zIndex:100},children:w.jsxs("div",{style:{width:"100%",maxWidth:340,background:"var(--card)",borderRadius:18,padding:"22px 20px",boxShadow:"0 20px 60px rgba(0, 0, 0, 0.18)",border:"1px solid var(--border)",textAlign:"center"},children:[w.jsx("div",{style:{width:44,height:44,borderRadius:"50%",border:"3px solid var(--border)",borderTopColor:"var(--primary)",margin:"0 auto 14px",animation:"juicegels-spin 1s linear infinite"}}),w.jsx("h3",{style:{margin:"0 0 8px",fontFamily:"'Playfair Display', serif",fontSize:22,color:"var(--foreground)"},children:"Redirecting to Stripe"}),w.jsx("p",{style:{margin:0,fontSize:13,lineHeight:1.7,color:"var(--muted-foreground)"},children:"You'll be redirected to Stripe to complete your order. Please wait a moment while we prepare your secure checkout."})]})}),w.jsx("style",{children:"@keyframes juicegels-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }"}),w.jsxs("header",{style:{background:"var(--card)",borderBottom:"1px solid var(--border)",position:"sticky",top:0,zIndex:50,padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[p!=="home"?w.jsx("button",{onClick:Hi,style:{color:"var(--primary)",background:"none",border:"none",cursor:"pointer",padding:4},"aria-label":"Back",children:w.jsx(__,{size:22})}):w.jsx("div",{style:{width:30}}),w.jsx("h1",{style:{fontFamily:"'Playfair Display', serif",color:"var(--primary)",margin:0,letterSpacing:"0.04em",fontSize:22},children:"Juice Gels"}),w.jsxs("button",{onClick:()=>a(y(A)),style:{position:"relative",background:"none",border:"none",cursor:"pointer",padding:4},"aria-label":"Basket",children:[w.jsx(nd,{size:22,style:{color:"var(--primary)"}}),ie>0&&w.jsx("span",{style:{position:"absolute",top:-4,right:-4,background:"var(--primary)",color:"#fff",borderRadius:"50%",width:17,height:17,fontSize:10,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700},children:ie})]})]}),(p==="basket"||p==="preorder"||p==="confirmation")&&w.jsx("div",{style:{display:"flex",padding:"10px 20px",gap:6,alignItems:"center",background:"var(--card)",borderBottom:"1px solid var(--border)"},children:["Basket","Details","Done"].map((L,$)=>{const he=p==="basket"&&$===0||p==="preorder"&&$===1||p==="confirmation"&&$===2,Ce=p==="preorder"&&$===0||p==="confirmation"&&$<=1;return w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,flex:$<2?1:void 0},children:[w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5},children:[w.jsx("div",{style:{width:22,height:22,borderRadius:"50%",background:Ce?"var(--primary)":he?"var(--accent)":"var(--muted)",border:`2px solid ${he||Ce?"var(--primary)":"var(--border)"}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:Ce?w.jsx(id,{size:11,color:"#fff"}):w.jsx("span",{style:{fontSize:10,color:he?"var(--foreground)":"var(--muted-foreground)",fontWeight:600},children:$+1})}),w.jsx("span",{style:{fontSize:11,color:he?"var(--foreground)":"var(--muted-foreground)",fontWeight:he?600:400},children:L})]}),$<2&&w.jsx("div",{style:{flex:1,height:1.5,background:Ce?"var(--primary)":"var(--border)",borderRadius:2}})]},L)})}),p==="home"&&w.jsxs("main",{children:[w.jsxs("div",{style:{background:"linear-gradient(160deg, #f9d5e0 0%, #fce4ea 60%, #fdf2f4 100%)",padding:"28px 20px 22px",textAlign:"center"},children:[w.jsx("p",{style:{color:"var(--muted-foreground)",margin:"0 0 5px",letterSpacing:"0.12em",fontSize:11,textTransform:"uppercase"},children:"Handmade Press-On Nails"}),w.jsx("h2",{style:{fontFamily:"'Playfair Display', serif",fontSize:30,color:"var(--foreground)",margin:"0 0 8px",lineHeight:1.2},children:"Nail the Look ✨"}),w.jsx("p",{style:{color:"var(--muted-foreground)",margin:"0 0 4px",fontSize:13,lineHeight:1.6},children:"Custom-fit gel press-ons · We will confirm your sizing after checkout"})]}),w.jsx("div",{style:{padding:"16px 14px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:J_.map(L=>w.jsxs("button",{onClick:()=>el(L),style:{background:"var(--card)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",textAlign:"left",cursor:"pointer",padding:0,position:"relative",display:"block",width:"100%"},children:[w.jsx("button",{onClick:$=>{$.stopPropagation(),Ge(L.id)},style:{position:"absolute",top:7,right:7,background:"rgba(255,255,255,0.88)",border:"none",borderRadius:"50%",width:28,height:28,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:2},"aria-label":"Wishlist",children:w.jsx(td,{size:13,fill:U.includes(L.id)?"var(--primary)":"none",stroke:U.includes(L.id)?"var(--primary)":"var(--muted-foreground)"})}),w.jsx(pn,{src:L.image,alt:L.name,style:{width:"100%",height:160,objectFit:"cover",display:"block",background:"var(--secondary)"}}),w.jsxs("div",{style:{padding:"8px 10px 10px"},children:[w.jsx("p",{style:{margin:"0 0 5px",fontSize:12,color:"var(--foreground)",lineHeight:1.3},children:L.name}),w.jsxs("span",{style:{color:"var(--primary)",fontWeight:600,fontSize:14},children:["£",L.price.toFixed(2)]})]})]},L.id))}),w.jsxs("div",{style:{margin:"4px 14px 32px",background:"var(--secondary)",borderRadius:14,padding:"16px 18px",textAlign:"center"},children:[w.jsx("p",{style:{fontFamily:"'Playfair Display', serif",color:"var(--foreground)",margin:"0 0 3px",fontSize:16},children:"Need your nail sizes?"}),w.jsx("p",{style:{color:"var(--muted-foreground)",margin:0,fontSize:12},children:"Pick up the Nail Sizing Guide — £4 deducted from your first set 🌸"})]})]}),p==="product"&&f&&w.jsxs("main",{children:[w.jsx(pn,{src:[f.image,...f.extraImages][re],alt:f.name,style:{width:"100%",height:320,objectFit:"contain",display:"block",background:"var(--secondary)"}}),f.extraImages.length>0&&w.jsx("div",{style:{display:"flex",gap:8,padding:"10px 16px 0",overflowX:"auto"},children:[f.image,...f.extraImages].map((L,$)=>w.jsx("button",{onClick:()=>we($),style:{flexShrink:0,border:`2px solid ${re===$?"var(--primary)":"var(--border)"}`,borderRadius:8,overflow:"hidden",padding:0,cursor:"pointer",background:"none"},children:w.jsx(pn,{src:L,alt:"",style:{width:52,height:52,objectFit:"contain",display:"block",background:"var(--secondary)"}})},$))}),w.jsxs("div",{style:{padding:"16px 20px 130px"},children:[w.jsx("h2",{style:{fontFamily:"'Playfair Display', serif",margin:"0 0 4px",fontSize:22,color:"var(--foreground)"},children:f.name}),w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,marginBottom:10},children:[[1,2,3,4,5].map(L=>w.jsx(k_,{size:12,fill:"var(--primary)",stroke:"none"},L)),w.jsx("span",{style:{fontSize:12,color:"var(--muted-foreground)",marginLeft:3},children:"Handmade · In stock"})]}),w.jsxs("span",{style:{fontSize:24,fontWeight:700,color:"var(--primary)"},children:["£",f.price.toFixed(2)]}),w.jsx("p",{style:{color:"var(--muted-foreground)",fontSize:13,lineHeight:1.7,margin:"12px 0 18px"},children:f.description}),Je(f)?null:w.jsxs(w.Fragment,{children:[w.jsx("p",{style:{margin:"0 0 8px",fontSize:13,fontWeight:600,color:"var(--foreground)"},children:"Nail Shape"}),w.jsx("div",{style:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:20},children:f.shapes.map(L=>w.jsx("button",{onClick:()=>{if(!f)return;const $=Os(f.groupId,L,S);$&&(m($),k(L),J($.length))},style:{border:`1.5px solid ${_===L?"var(--primary)":"var(--border)"}`,background:_===L?"var(--primary)":"var(--card)",color:_===L?"#fff":"var(--foreground)",borderRadius:8,padding:"6px 14px",fontSize:12,cursor:"pointer",transition:"all 0.15s"},children:L},L))}),w.jsx("p",{style:{margin:"0 0 8px",fontSize:13,fontWeight:600,color:"var(--foreground)"},children:"Nail Length"}),w.jsx("div",{style:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:20},children:["Short","Medium","Long"].map(L=>w.jsx("button",{onClick:()=>{if(!f)return;const $=Os(f.groupId,_,L);$&&(m($),J(L),k($.shape))},style:{border:`1.5px solid ${S===L?"var(--primary)":"var(--border)"}`,background:S===L?"var(--primary)":"var(--card)",color:S===L?"#fff":"var(--foreground)",borderRadius:8,padding:"6px 14px",fontSize:12,cursor:"pointer",transition:"all 0.15s",textTransform:"capitalize"},children:L},L))})]}),Je(f)?null:w.jsxs("div",{style:{background:"var(--muted)",borderRadius:10,padding:"10px 14px",fontSize:12,color:"var(--muted-foreground)",lineHeight:1.5},children:["You will be contacted via Instagram from ",w.jsx("strong",{children:"@juicegels"})," after payment to process your order."]})]}),w.jsxs("div",{style:{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:430,padding:"14px 18px",background:"var(--card)",borderTop:"1px solid var(--border)",display:"flex",gap:10,boxSizing:"border-box"},children:[w.jsx("button",{onClick:()=>Ge(f.id),style:{border:"1.5px solid var(--border)",background:"var(--card)",borderRadius:12,width:46,height:46,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",flexShrink:0},children:w.jsx(td,{size:17,fill:U.includes(f.id)?"var(--primary)":"none",stroke:U.includes(f.id)?"var(--primary)":"var(--muted-foreground)"})}),w.jsx("button",{onClick:Wl,disabled:!_||!S,style:{flex:1,background:_&&S?"var(--primary)":"var(--muted)",color:_&&S?"#fff":"var(--muted-foreground)",border:"none",borderRadius:12,height:46,fontWeight:600,fontSize:14,cursor:_&&S?"pointer":"not-allowed",transition:"all 0.15s"},children:_&&S?"Add to Basket":"Select shape and length"})]})]}),p==="basket"&&w.jsxs("main",{style:{padding:"16px 16px 100px"},children:[w.jsx("h2",{style:{fontFamily:"'Playfair Display', serif",fontSize:20,color:"var(--foreground)",margin:"0 0 14px"},children:"Your Basket"}),A.length===0?w.jsxs("div",{style:{textAlign:"center",padding:"48px 20px"},children:[w.jsx(nd,{size:40,style:{color:"var(--muted-foreground)",marginBottom:12}}),w.jsx("p",{style:{color:"var(--muted-foreground)",fontSize:14},children:"Your basket is empty"}),w.jsx("button",{onClick:()=>a("/"),style:{marginTop:16,background:"var(--primary)",color:"#fff",border:"none",borderRadius:10,padding:"10px 24px",fontSize:14,fontWeight:600,cursor:"pointer"},children:"Browse Sets"})]}):w.jsxs(w.Fragment,{children:[w.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10,marginBottom:16},children:A.map((L,$)=>w.jsxs("div",{style:{background:"var(--card)",border:"1px solid var(--border)",borderRadius:14,padding:"12px",display:"flex",gap:12,alignItems:"center"},children:[w.jsx(pn,{src:L.product.image,alt:L.product.name,style:{width:64,height:64,borderRadius:10,objectFit:"cover",flexShrink:0,background:"var(--secondary)"}}),w.jsxs("div",{style:{flex:1,minWidth:0},children:[w.jsx("p",{style:{margin:"0 0 2px",fontSize:13,fontWeight:500,color:"var(--foreground)",lineHeight:1.3},children:L.product.name}),w.jsxs("p",{style:{margin:"0 0 6px",fontSize:11,color:"var(--muted-foreground)"},children:["Shape: ",L.shape]}),w.jsxs("p",{style:{margin:"0 0 6px",fontSize:11,color:"var(--muted-foreground)"},children:["Length: ",L.length]}),w.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:1},children:[w.jsx("button",{onClick:()=>ji($,-1),style:{width:26,height:26,borderRadius:6,border:"1px solid var(--border)",background:"var(--muted)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:w.jsx(v_,{size:12})}),w.jsx("span",{style:{minWidth:28,textAlign:"center",fontSize:13,fontWeight:600},children:L.quantity}),w.jsx("button",{onClick:()=>ji($,1),style:{width:26,height:26,borderRadius:6,border:"1px solid var(--border)",background:"var(--muted)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:w.jsx(x_,{size:12})})]}),w.jsxs("span",{style:{color:"var(--primary)",fontWeight:700,fontSize:14},children:["£",(L.product.price*L.quantity).toFixed(2)]})]})]}),w.jsx("button",{onClick:()=>Ml($),style:{background:"none",border:"none",cursor:"pointer",padding:4,flexShrink:0},children:w.jsx(C_,{size:15,style:{color:"var(--muted-foreground)"}})})]},`${L.product.id}-${L.shape}`))}),w.jsxs("div",{style:{background:"var(--secondary)",borderRadius:14,padding:"14px 16px",marginBottom:14},children:[w.jsxs("div",{style:{display:"flex",gap:8,alignItems:"flex-end",marginBottom:12},children:[w.jsx("div",{style:{flex:1},children:w.jsx(xs,{label:"Coupon code",error:le??void 0,children:w.jsx("input",{type:"text",placeholder:"Enter coupon code",value:He,onChange:L=>{Pe(L.target.value.toUpperCase()),le&&O(null)},style:ys(!!le)})})}),w.jsx("button",{type:"button",onClick:Si,disabled:V||!He.trim(),style:{height:42,borderRadius:10,border:"1px solid var(--border)",background:"var(--card)",padding:"0 14px",cursor:V||!He.trim()?"not-allowed":"pointer",color:"var(--foreground)",fontWeight:600,opacity:V||!He.trim()?.6:1},children:V?"Checking...":"Apply"})]}),me&&w.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12,fontSize:12,background:le?"#fff1f2":Se?"#f3fbf6":"var(--card)",border:`1px solid ${le?"#f4c2cb":Se?"#b9e3c6":"var(--border)"}`,borderRadius:10,padding:"11px 12px",marginBottom:10},children:[w.jsxs("div",{children:[V&&w.jsxs(w.Fragment,{children:[w.jsx("strong",{style:{display:"block",color:"var(--foreground)",marginBottom:2},children:"Checking coupon..."}),w.jsx("span",{style:{color:"var(--muted-foreground)"},children:"Validating your discount before checkout."})]}),!V&&le&&w.jsxs(w.Fragment,{children:[w.jsx("strong",{style:{display:"block",color:"var(--destructive)",marginBottom:2},children:"Coupon not applied"}),w.jsx("span",{style:{color:"var(--destructive)"},children:le})]}),!V&&Se&&!le&&w.jsxs(w.Fragment,{children:[w.jsxs("strong",{style:{display:"block",color:"#1f6f43",marginBottom:2},children:[Se.code," applied"]}),w.jsxs("span",{style:{color:"#2f5d46"},children:[Se.description," saved you £",de.toFixed(2)," on this order."]})]})]}),Se&&!le&&!V&&w.jsx("button",{type:"button",onClick:fs,style:{background:"none",border:"none",color:"var(--primary)",cursor:"pointer",fontWeight:600,padding:0,flexShrink:0},children:"Remove"})]}),w.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,marginBottom:6},children:[w.jsxs("span",{style:{color:"var(--muted-foreground)"},children:["Subtotal (",ie," item",ie!==1?"s":"",")"]}),w.jsxs("span",{children:["£",B.toFixed(2)]})]}),Se&&de>0&&w.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,marginBottom:6},children:[w.jsxs("span",{style:{color:"var(--muted-foreground)"},children:["Discount (",Se.code,")"]}),w.jsxs("span",{style:{color:"var(--primary)"},children:["-£",de.toFixed(2)]})]}),w.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,marginBottom:8},children:[w.jsx("span",{style:{color:"var(--muted-foreground)"},children:"Delivery"}),w.jsx("span",{style:{color:"var(--primary)"},children:"Free"})]}),w.jsxs("div",{style:{borderTop:"1px solid var(--border)",paddingTop:8,display:"flex",justifyContent:"space-between",fontWeight:700,fontSize:15},children:[w.jsx("span",{children:"Total"}),w.jsxs("span",{children:["£",xe.toFixed(2)]})]})]}),w.jsxs("div",{style:{background:"var(--muted)",borderRadius:10,padding:"10px 14px",fontSize:12,color:"var(--muted-foreground)",lineHeight:1.5,marginBottom:4},children:["You will be contacted via Instagram from ",w.jsx("strong",{children:"@juicegels"})," after payment to process your order."]})]})]}),A.length>0&&p==="basket"&&w.jsxs("div",{style:{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:430,padding:"14px 18px",background:"var(--card)",borderTop:"1px solid var(--border)",display:"flex",gap:10,boxSizing:"border-box"},children:[w.jsx("button",{onClick:()=>a("/"),style:{border:"1.5px solid var(--border)",background:"var(--card)",borderRadius:12,height:46,padding:"0 16px",fontSize:13,fontWeight:500,cursor:"pointer",flexShrink:0},children:"+ Add more"}),w.jsxs("button",{onClick:()=>{Q(dn),pe({}),g("preorder")},style:{flex:1,background:"var(--primary)",color:"#fff",border:"none",borderRadius:12,height:46,fontWeight:600,fontSize:14,cursor:"pointer"},children:["Pre-order · £",xe.toFixed(2)]})]}),p==="preorder"&&w.jsxs("main",{style:{padding:"18px 18px 48px"},children:[w.jsx("h2",{style:{fontFamily:"'Playfair Display', serif",fontSize:20,color:"var(--foreground)",margin:"0 0 4px"},children:"Your Details"}),w.jsxs("p",{style:{color:"var(--muted-foreground)",fontSize:12,margin:"0 0 18px"},children:[ie," item",ie!==1?"s":""," · £",xe.toFixed(2)," total"]}),w.jsxs("form",{onSubmit:vi,noValidate:!0,style:{display:"flex",flexDirection:"column",gap:13},children:[w.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},children:[w.jsx(xs,{label:"First name",error:X.firstName,children:w.jsx("input",{type:"text",placeholder:"Sophie",value:D.firstName,onChange:L=>Gl("firstName",L.target.value),style:ys(!!X.firstName)})}),w.jsx(xs,{label:"Last name",error:X.lastName,children:w.jsx("input",{type:"text",placeholder:"Wright",value:D.lastName,onChange:L=>Gl("lastName",L.target.value),style:ys(!!X.lastName)})})]}),w.jsx(xs,{label:"Email address",error:X.email,children:w.jsx("input",{type:"email",placeholder:"sophie@example.com",value:D.email,onChange:L=>Gl("email",L.target.value),style:ys(!!X.email)})}),w.jsx(xs,{label:"Phone number",error:X.phone,children:w.jsx("input",{type:"tel",placeholder:"+44 7700 900000",value:D.phone,onChange:L=>Gl("phone",L.target.value),style:ys(!!X.phone)})}),w.jsx(xs,{label:"Delivery address",error:X.address,children:w.jsx("input",{type:"text",placeholder:"12 Petal Lane",value:D.address,onChange:L=>Gl("address",L.target.value),style:ys(!!X.address)})}),w.jsx(xs,{label:"Instagram username",error:X.instagram,children:w.jsx("input",{type:"text",placeholder:"@juicegels",value:D.instagram,onChange:L=>Gl("instagram",L.target.value),style:ys(!!X.instagram)})}),w.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},children:[w.jsx(xs,{label:"City",error:X.city,children:w.jsx("input",{type:"text",placeholder:"London",value:D.city,onChange:L=>Gl("city",L.target.value),style:ys(!!X.city)})}),w.jsx(xs,{label:"Postcode",error:X.postcode,children:w.jsx("input",{type:"text",placeholder:"SW1A 1AA",value:D.postcode,onChange:L=>Gl("postcode",L.target.value),style:ys(!!X.postcode)})})]}),w.jsx(xs,{label:"Additional notes (optional)",children:w.jsx("textarea",{placeholder:"Any special requests, colour preferences, or custom details...",value:D.notes,onChange:L=>Gl("notes",L.target.value),rows:3,style:{...ys(!1),resize:"none"}})}),w.jsxs("div",{style:{background:"var(--muted)",borderRadius:10,padding:"10px 14px",fontSize:12,color:"var(--muted-foreground)",lineHeight:1.5},children:["You will be contacted via Instagram from ",w.jsx("strong",{children:"@juicegels"})," after payment to process your order."]}),w.jsxs("div",{style:{background:"var(--secondary)",borderRadius:13,padding:"13px 15px",fontSize:13,lineHeight:1.7,color:"var(--foreground)"},children:[w.jsx("strong",{style:{display:"block",marginBottom:6},children:"Order Summary"}),A.map((L,$)=>w.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,color:"var(--muted-foreground)"},children:[w.jsxs("span",{children:[L.product.name," (",L.shape,") ×",L.quantity]}),w.jsxs("span",{children:["£",(L.product.price*L.quantity).toFixed(2)]})]},$)),w.jsxs("div",{style:{borderTop:"1px solid var(--border)",marginTop:8,paddingTop:8,display:"flex",justifyContent:"space-between",fontWeight:700},children:[w.jsx("span",{children:"Total"}),w.jsxs("span",{children:["£",xe.toFixed(2)]})]})]}),w.jsx("button",{type:"submit",disabled:be,style:{background:be?"var(--border)":"var(--primary)",color:"#fff",border:"none",borderRadius:12,height:48,fontWeight:600,fontSize:14,cursor:be?"not-allowed":"pointer",letterSpacing:"0.02em"},children:be?"Redirecting to Stripe...":"Confirm Pre-order 🌸"}),Le&&w.jsx("p",{style:{color:"var(--destructive)",fontSize:12,marginTop:10},children:Le})]})]}),p==="confirmation"&&w.jsxs("main",{style:{padding:"44px 22px",textAlign:"center"},children:[w.jsx("div",{style:{width:68,height:68,borderRadius:"50%",background:"var(--secondary)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 18px"},children:w.jsx(id,{size:30,style:{color:"var(--primary)"}})}),w.jsx("h2",{style:{fontFamily:"'Playfair Display', serif",fontSize:24,color:"var(--foreground)",margin:"0 0 8px"},children:"Order Placed!"}),w.jsxs("p",{style:{color:"var(--muted-foreground)",fontSize:13,lineHeight:1.7,margin:"0 0 6px"},children:["Thank you, ",w.jsx("strong",{children:D.firstName}),"! Your pre-order of ",ie," item",ie!==1?"s":""," is confirmed."]}),w.jsxs("p",{style:{color:"var(--muted-foreground)",fontSize:12,margin:"0 0 24px",lineHeight:1.5},children:["A confirmation will be sent to ",w.jsx("strong",{children:D.email}),".",w.jsx("br",{}),w.jsxs("span",{style:{color:"var(--primary)"},children:["You will be contacted via Instagram from ",w.jsx("strong",{children:"@juicegels"})," after payment to process your order."]})]}),w.jsxs("div",{style:{background:"var(--secondary)",borderRadius:13,padding:"14px",textAlign:"left",marginBottom:14},children:[w.jsx("p",{style:{margin:"0 0 8px",fontWeight:600,fontSize:13},children:"Items ordered"}),A.map((L,$)=>w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[w.jsx(pn,{src:L.product.image,alt:L.product.name,style:{width:40,height:40,borderRadius:7,objectFit:"cover",background:"var(--muted)"}}),w.jsxs("div",{children:[w.jsx("p",{style:{margin:0,fontSize:12,fontWeight:500,color:"var(--foreground)"},children:L.product.name}),w.jsxs("p",{style:{margin:0,fontSize:11,color:"var(--muted-foreground)"},children:[L.shape," · ×",L.quantity," · £",(L.product.price*L.quantity).toFixed(2)]})]})]},$))]}),w.jsxs("div",{style:{background:"var(--card)",border:"1px solid var(--border)",borderRadius:13,padding:"14px",textAlign:"left",marginBottom:24},children:[w.jsx("p",{style:{margin:"0 0 5px",fontWeight:600,fontSize:13},children:"Delivering to"}),w.jsxs("p",{style:{margin:0,fontSize:12,color:"var(--muted-foreground)",lineHeight:1.6},children:[D.firstName," ",D.lastName,w.jsx("br",{}),D.address,w.jsx("br",{}),D.city,", ",D.postcode]})]}),w.jsx("button",{onClick:()=>{a("/"),q([]),Q(dn)},style:{background:"var(--primary)",color:"#fff",border:"none",borderRadius:12,height:46,width:"100%",fontWeight:600,fontSize:14,cursor:"pointer"},children:"Continue Shopping"})]})]})}function xs({label:t,error:a,children:o}){return w.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[w.jsx("label",{style:{fontSize:11,fontWeight:600,color:"var(--foreground)",letterSpacing:"0.03em",textTransform:"uppercase"},children:t}),o,a&&w.jsx("span",{style:{fontSize:11,color:"var(--destructive)"},children:a})]})}function ys(t){return{background:"var(--input-background)",border:`1.5px solid ${t?"var(--destructive)":"var(--border)"}`,borderRadius:9,padding:"10px 13px",fontSize:14,color:"var(--foreground)",outline:"none",width:"100%",boxSizing:"border-box"}}const U_=Wh([{path:"/",element:w.jsx(jt,{})},{path:"/home",element:w.jsx(jt,{})},{path:"/basket",element:w.jsx(jt,{})},{path:"/product/:id",element:w.jsx(jt,{})},{path:"/confirmation",element:w.jsx(jt,{})},{path:"*",element:w.jsx(jt,{})}]);c_.createRoot(document.getElementById("root")).render(w.jsx(u_,{router:U_}));
