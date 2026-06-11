function kf(t,a){for(var o=0;o<a.length;o++){const r=a[o];if(typeof r!="string"&&!Array.isArray(r)){for(const c in r)if(c!=="default"&&!(c in t)){const p=Object.getOwnPropertyDescriptor(r,c);p&&Object.defineProperty(t,c,p.get?p:{enumerable:!0,get:()=>r[c]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const p of c)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&r(g)}).observe(document,{childList:!0,subtree:!0});function o(c){const p={};return c.integrity&&(p.integrity=c.integrity),c.referrerPolicy&&(p.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?p.credentials="include":c.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function r(c){if(c.ep)return;c.ep=!0;const p=o(c);fetch(c.href,p)}})();function bf(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var vu={exports:{}},Zt={},wu={exports:{}},Ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function Cf(){if(_p)return Ie;_p=1;var t=Symbol.for("react.element"),a=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),g=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),w=Symbol.iterator;function J(x){return x===null||typeof x!="object"?null:(x=w&&x[w]||x["@@iterator"],typeof x=="function"?x:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,q={};function B(x,M,ge){this.props=x,this.context=M,this.refs=q,this.updater=ge||z}B.prototype.isReactComponent={},B.prototype.setState=function(x,M){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,M,"setState")},B.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function K(){}K.prototype=B.prototype;function Q(x,M,ge){this.props=x,this.context=M,this.refs=q,this.updater=ge||z}var ie=Q.prototype=new K;ie.constructor=Q,H(ie,B.prototype),ie.isPureReactComponent=!0;var de=Array.isArray,ce=Object.prototype.hasOwnProperty,ve={current:null},Ee={key:!0,ref:!0,__self:!0,__source:!0};function L(x,M,ge){var he,k={},A=null,$=null;if(M!=null)for(he in M.ref!==void 0&&($=M.ref),M.key!==void 0&&(A=""+M.key),M)ce.call(M,he)&&!Ee.hasOwnProperty(he)&&(k[he]=M[he]);var ee=arguments.length-2;if(ee===1)k.children=ge;else if(1<ee){for(var fe=Array(ee),$e=0;$e<ee;$e++)fe[$e]=arguments[$e+2];k.children=fe}if(x&&x.defaultProps)for(he in ee=x.defaultProps,ee)k[he]===void 0&&(k[he]=ee[he]);return{$$typeof:t,type:x,key:A,ref:$,props:k,_owner:ve.current}}function ye(x,M){return{$$typeof:t,type:x.type,key:M,ref:x.ref,props:x.props,_owner:x._owner}}function ne(x){return typeof x=="object"&&x!==null&&x.$$typeof===t}function Te(x){var M={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(ge){return M[ge]})}var ke=/\/+/g;function qe(x,M){return typeof x=="object"&&x!==null&&x.key!=null?Te(""+x.key):M.toString(36)}function Le(x,M,ge,he,k){var A=typeof x;(A==="undefined"||A==="boolean")&&(x=null);var $=!1;if(x===null)$=!0;else switch(A){case"string":case"number":$=!0;break;case"object":switch(x.$$typeof){case t:case a:$=!0}}if($)return $=x,k=k($),x=he===""?"."+qe($,0):he,de(k)?(ge="",x!=null&&(ge=x.replace(ke,"$&/")+"/"),Le(k,M,ge,"",function($e){return $e})):k!=null&&(ne(k)&&(k=ye(k,ge+(!k.key||$&&$.key===k.key?"":(""+k.key).replace(ke,"$&/")+"/")+x)),M.push(k)),1;if($=0,he=he===""?".":he+":",de(x))for(var ee=0;ee<x.length;ee++){A=x[ee];var fe=he+qe(A,ee);$+=Le(A,M,ge,fe,k)}else if(fe=J(x),typeof fe=="function")for(x=fe.call(x),ee=0;!(A=x.next()).done;)A=A.value,fe=he+qe(A,ee++),$+=Le(A,M,ge,fe,k);else if(A==="object")throw M=String(x),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.");return $}function ze(x,M,ge){if(x==null)return x;var he=[],k=0;return Le(x,he,"","",function(A){return M.call(ge,A,k++)}),he}function Ne(x){if(x._status===-1){var M=x._result;M=M(),M.then(function(ge){(x._status===0||x._status===-1)&&(x._status=1,x._result=ge)},function(ge){(x._status===0||x._status===-1)&&(x._status=2,x._result=ge)}),x._status===-1&&(x._status=0,x._result=M)}if(x._status===1)return x._result.default;throw x._result}var me={current:null},F={transition:null},Y={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:F,ReactCurrentOwner:ve};function V(){throw Error("act(...) is not supported in production builds of React.")}return Ie.Children={map:ze,forEach:function(x,M,ge){ze(x,function(){M.apply(this,arguments)},ge)},count:function(x){var M=0;return ze(x,function(){M++}),M},toArray:function(x){return ze(x,function(M){return M})||[]},only:function(x){if(!ne(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},Ie.Component=B,Ie.Fragment=o,Ie.Profiler=c,Ie.PureComponent=Q,Ie.StrictMode=r,Ie.Suspense=m,Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,Ie.act=V,Ie.cloneElement=function(x,M,ge){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var he=H({},x.props),k=x.key,A=x.ref,$=x._owner;if(M!=null){if(M.ref!==void 0&&(A=M.ref,$=ve.current),M.key!==void 0&&(k=""+M.key),x.type&&x.type.defaultProps)var ee=x.type.defaultProps;for(fe in M)ce.call(M,fe)&&!Ee.hasOwnProperty(fe)&&(he[fe]=M[fe]===void 0&&ee!==void 0?ee[fe]:M[fe])}var fe=arguments.length-2;if(fe===1)he.children=ge;else if(1<fe){ee=Array(fe);for(var $e=0;$e<fe;$e++)ee[$e]=arguments[$e+2];he.children=ee}return{$$typeof:t,type:x.type,key:k,ref:A,props:he,_owner:$}},Ie.createContext=function(x){return x={$$typeof:g,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:p,_context:x},x.Consumer=x},Ie.createElement=L,Ie.createFactory=function(x){var M=L.bind(null,x);return M.type=x,M},Ie.createRef=function(){return{current:null}},Ie.forwardRef=function(x){return{$$typeof:f,render:x}},Ie.isValidElement=ne,Ie.lazy=function(x){return{$$typeof:E,_payload:{_status:-1,_result:x},_init:Ne}},Ie.memo=function(x,M){return{$$typeof:_,type:x,compare:M===void 0?null:M}},Ie.startTransition=function(x){var M=F.transition;F.transition={};try{x()}finally{F.transition=M}},Ie.unstable_act=V,Ie.useCallback=function(x,M){return me.current.useCallback(x,M)},Ie.useContext=function(x){return me.current.useContext(x)},Ie.useDebugValue=function(){},Ie.useDeferredValue=function(x){return me.current.useDeferredValue(x)},Ie.useEffect=function(x,M){return me.current.useEffect(x,M)},Ie.useId=function(){return me.current.useId()},Ie.useImperativeHandle=function(x,M,ge){return me.current.useImperativeHandle(x,M,ge)},Ie.useInsertionEffect=function(x,M){return me.current.useInsertionEffect(x,M)},Ie.useLayoutEffect=function(x,M){return me.current.useLayoutEffect(x,M)},Ie.useMemo=function(x,M){return me.current.useMemo(x,M)},Ie.useReducer=function(x,M,ge){return me.current.useReducer(x,M,ge)},Ie.useRef=function(x){return me.current.useRef(x)},Ie.useState=function(x){return me.current.useState(x)},Ie.useSyncExternalStore=function(x,M,ge){return me.current.useSyncExternalStore(x,M,ge)},Ie.useTransition=function(){return me.current.useTransition()},Ie.version="18.3.1",Ie}var jp;function Uu(){return jp||(jp=1,wu.exports=Cf()),wu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function Lf(){if(Sp)return Zt;Sp=1;var t=Uu(),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function g(f,m,_){var E,w={},J=null,z=null;_!==void 0&&(J=""+_),m.key!==void 0&&(J=""+m.key),m.ref!==void 0&&(z=m.ref);for(E in m)r.call(m,E)&&!p.hasOwnProperty(E)&&(w[E]=m[E]);if(f&&f.defaultProps)for(E in m=f.defaultProps,m)w[E]===void 0&&(w[E]=m[E]);return{$$typeof:a,type:f,key:J,ref:z,props:w,_owner:c.current}}return Zt.Fragment=o,Zt.jsx=g,Zt.jsxs=g,Zt}var vp;function If(){return vp||(vp=1,vu.exports=Lf()),vu.exports}var b=If(),C=Uu();const Gf=bf(C),Pf=kf({__proto__:null,default:Gf},[C]);/**
 * react-router v7.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var ud=t=>{throw TypeError(t)},rd=(t,a,o)=>a.has(t)||ud("Cannot "+o),Fl=(t,a,o)=>(rd(t,a,"read from private field"),o?o.call(t):a.get(t)),an=(t,a,o)=>a.has(t)?ud("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(t):a.set(t,o),ms=(t,a,o,r)=>(rd(t,a,"write to private field"),a.set(t,o),o),wp="popstate";function xp(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function Jf(t={}){function a(r,c){var _;let p=(_=c.state)==null?void 0:_.masked,{pathname:g,search:f,hash:m}=p||r.location;return cn("",{pathname:g,search:f,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default",p?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function o(r,c){return typeof c=="string"?c:Ss(c)}return Uf(a,o,null,t)}function Ce(t,a){if(t===!1||t===null||typeof t>"u")throw new Error(a)}function ll(t,a){if(!t){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function zf(){return Math.random().toString(36).substring(2,10)}function yp(t,a){return{usr:t.state,key:t.key,idx:a,masked:t.mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function cn(t,a,o=null,r,c){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof a=="string"?vs(a):a,state:o,key:a&&a.key||r||zf(),mask:c}}function Ss({pathname:t="/",search:a="",hash:o=""}){return a&&a!=="?"&&(t+=a.charAt(0)==="?"?a:"?"+a),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function vs(t){let a={};if(t){let o=t.indexOf("#");o>=0&&(a.hash=t.substring(o),t=t.substring(0,o));let r=t.indexOf("?");r>=0&&(a.search=t.substring(r),t=t.substring(0,r)),t&&(a.pathname=t)}return a}function Uf(t,a,o,r={}){let{window:c=document.defaultView,v5Compat:p=!1}=r,g=c.history,f="POP",m=null,_=E();_==null&&(_=0,g.replaceState({...g.state,idx:_},""));function E(){return(g.state||{idx:null}).idx}function w(){f="POP";let B=E(),K=B==null?null:B-_;_=B,m&&m({action:f,location:q.location,delta:K})}function J(B,K){f="PUSH";let Q=xp(B)?B:cn(q.location,B,K);_=E()+1;let ie=yp(Q,_),de=q.createHref(Q.mask||Q);try{g.pushState(ie,"",de)}catch(ce){if(ce instanceof DOMException&&ce.name==="DataCloneError")throw ce;c.location.assign(de)}p&&m&&m({action:f,location:q.location,delta:1})}function z(B,K){f="REPLACE";let Q=xp(B)?B:cn(q.location,B,K);_=E();let ie=yp(Q,_),de=q.createHref(Q.mask||Q);g.replaceState(ie,"",de),p&&m&&m({action:f,location:q.location,delta:0})}function H(B){return cd(c,B)}let q={get action(){return f},get location(){return t(c,g)},listen(B){if(m)throw new Error("A history only accepts one active listener");return c.addEventListener(wp,w),m=B,()=>{c.removeEventListener(wp,w),m=null}},createHref(B){return a(c,B)},createURL:H,encodeLocation(B){let K=H(B);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:J,replace:z,go(B){return g.go(B)}};return q}function cd(t,a,o=!1){let r="http://localhost";t&&(r=t.location.origin!=="null"?t.location.origin:t.location.href),Ce(r,"No window.location.(origin|href) available to create URL");let c=typeof a=="string"?a:Ss(a);return c=c.replace(/ $/,"%20"),!o&&c.startsWith("//")&&(c=r+c),new URL(c,r)}var on,Ep=class{constructor(t){if(an(this,on,new Map),t)for(let[a,o]of t)this.set(a,o)}get(t){if(Fl(this,on).has(t))return Fl(this,on).get(t);if(t.defaultValue!==void 0)return t.defaultValue;throw new Error("No value found for context")}set(t,a){Fl(this,on).set(t,a)}};on=new WeakMap;var qf=new Set(["lazy","caseSensitive","path","id","index","children"]);function Bf(t){return qf.has(t)}var Af=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function Mf(t){return Af.has(t)}function Hf(t){return t.index===!0}function pn(t,a,o=[],r={},c=!1){return t.map((p,g)=>{let f=[...o,String(g)],m=typeof p.id=="string"?p.id:f.join("-");if(Ce(p.index!==!0||!p.children,"Cannot specify children on an index route"),Ce(c||!r[m],`Found a route id collision on id "${m}".  Route id's must be globally unique within Data Router usages`),Hf(p)){let _={...p,id:m};return r[m]=kp(_,a(_)),_}else{let _={...p,id:m,children:void 0};return r[m]=kp(_,a(_)),p.children&&(_.children=pn(p.children,a,f,r,c)),_}})}function kp(t,a){return Object.assign(t,{...a,...typeof a.lazy=="object"&&a.lazy!=null?{lazy:{...t.lazy,...a.lazy}}:{}})}function pd(t,a,o="/"){return ns(t,a,o,!1)}function ns(t,a,o,r,c){let p=typeof a=="string"?vs(a):a,g=$l(p.pathname||"/",o);if(g==null)return null;let f=c??Pa(t),m=null,_=Xf(g);for(let E=0;m==null&&E<f.length;++E)m=Qf(f[E],_,r);return m}function Tf(t,a){let{route:o,pathname:r,params:c}=t;return{id:o.id,pathname:r,params:c,data:a[o.id],loaderData:a[o.id],handle:o.handle}}function Pa(t){let a=dd(t);return Rf(a),a}function dd(t,a=[],o=[],r="",c=!1){let p=(g,f,m=c,_)=>{let E={relativePath:_===void 0?g.path||"":_,caseSensitive:g.caseSensitive===!0,childrenIndex:f,route:g};if(E.relativePath.startsWith("/")){if(!E.relativePath.startsWith(r)&&m)return;Ce(E.relativePath.startsWith(r),`Absolute route path "${E.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),E.relativePath=E.relativePath.slice(r.length)}let w=Wl([r,E.relativePath]),J=o.concat(E);g.children&&g.children.length>0&&(Ce(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),dd(g.children,a,J,w,m)),!(g.path==null&&!g.index)&&a.push({path:w,score:Vf(w,g.index),routesMeta:J})};return t.forEach((g,f)=>{var m;if(g.path===""||!((m=g.path)!=null&&m.includes("?")))p(g,f);else for(let _ of gd(g.path))p(g,f,!0,_)}),a}function gd(t){let a=t.split("/");if(a.length===0)return[];let[o,...r]=a,c=o.endsWith("?"),p=o.replace(/\?$/,"");if(r.length===0)return c?[p,""]:[p];let g=gd(r.join("/")),f=[];return f.push(...g.map(m=>m===""?p:[p,m].join("/"))),c&&f.push(...g),f.map(m=>t.startsWith("/")&&m===""?"/":m)}function Rf(t){t.sort((a,o)=>a.score!==o.score?o.score-a.score:Kf(a.routesMeta.map(r=>r.childrenIndex),o.routesMeta.map(r=>r.childrenIndex)))}var Of=/^:[\w-]+$/,Nf=3,Ff=2,Df=1,Wf=10,$f=-2,bp=t=>t==="*";function Vf(t,a){let o=t.split("/"),r=o.length;return o.some(bp)&&(r+=$f),a&&(r+=Ff),o.filter(c=>!bp(c)).reduce((c,p)=>c+(Of.test(p)?Nf:p===""?Df:Wf),r)}function Kf(t,a){return t.length===a.length&&t.slice(0,-1).every((r,c)=>r===a[c])?t[t.length-1]-a[a.length-1]:0}function Qf(t,a,o=!1){let{routesMeta:r}=t,c={},p="/",g=[];for(let f=0;f<r.length;++f){let m=r[f],_=f===r.length-1,E=p==="/"?a:a.slice(p.length)||"/",w=qa({path:m.relativePath,caseSensitive:m.caseSensitive,end:_},E),J=m.route;if(!w&&_&&o&&!r[r.length-1].route.index&&(w=qa({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},E)),!w)return null;Object.assign(c,w.params),g.push({params:c,pathname:Wl([p,w.pathname]),pathnameBase:lm(Wl([p,w.pathnameBase])),route:J}),w.pathnameBase!=="/"&&(p=Wl([p,w.pathnameBase]))}return g}function qa(t,a){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[o,r]=Yf(t.path,t.caseSensitive,t.end),c=a.match(o);if(!c)return null;let p=c[0],g=p.replace(/(.)\/+$/,"$1"),f=c.slice(1);return{params:r.reduce((_,{paramName:E,isOptional:w},J)=>{if(E==="*"){let H=f[J]||"";g=p.slice(0,p.length-H.length).replace(/(.)\/+$/,"$1")}const z=f[J];return w&&!z?_[E]=void 0:_[E]=(z||"").replace(/%2F/g,"/"),_},{}),pathname:p,pathnameBase:g,pattern:t}}function Yf(t,a=!1,o=!0){ll(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],c="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,f,m,_,E)=>{if(r.push({paramName:f,isOptional:m!=null}),m){let w=E.charAt(_+g.length);return w&&w!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(r.push({paramName:"*"}),c+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?c+="\\/*$":t!==""&&t!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,a?void 0:"i"),r]}function Xf(t){try{return t.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return ll(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),t}}function $l(t,a){if(a==="/")return t;if(!t.toLowerCase().startsWith(a.toLowerCase()))return null;let o=a.endsWith("/")?a.length-1:a.length,r=t.charAt(o);return r&&r!=="/"?null:t.slice(o)||"/"}function Zf({basename:t,pathname:a}){return a==="/"?t:Wl([t,a])}var fd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qu=t=>fd.test(t);function em(t,a="/"){let{pathname:o,search:r="",hash:c=""}=typeof t=="string"?vs(t):t,p;return o?(o=Bu(o),o.startsWith("/")?p=Cp(o.substring(1),"/"):p=Cp(o,a)):p=a,{pathname:p,search:sm(r),hash:im(c)}}function Cp(t,a){let o=Ba(a).split("/");return t.split("/").forEach(c=>{c===".."?o.length>1&&o.pop():c!=="."&&o.push(c)}),o.length>1?o.join("/"):"/"}function xu(t,a,o,r){return`Cannot include a '${t}' character in a manually specified \`to.${a}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function md(t){return t.filter((a,o)=>o===0||a.route.path&&a.route.path.length>0)}function Aa(t){let a=md(t);return a.map((o,r)=>r===a.length-1?o.pathname:o.pathnameBase)}function gn(t,a,o,r=!1){let c;typeof t=="string"?c=vs(t):(c={...t},Ce(!c.pathname||!c.pathname.includes("?"),xu("?","pathname","search",c)),Ce(!c.pathname||!c.pathname.includes("#"),xu("#","pathname","hash",c)),Ce(!c.search||!c.search.includes("#"),xu("#","search","hash",c)));let p=t===""||c.pathname==="",g=p?"/":c.pathname,f;if(g==null)f=o;else{let w=a.length-1;if(!r&&g.startsWith("..")){let J=g.split("/");for(;J[0]==="..";)J.shift(),w-=1;c.pathname=J.join("/")}f=w>=0?a[w]:"/"}let m=em(c,f),_=g&&g!=="/"&&g.endsWith("/"),E=(p||g===".")&&o.endsWith("/");return!m.pathname.endsWith("/")&&(_||E)&&(m.pathname+="/"),m}var Bu=t=>t.replace(/\/\/+/g,"/"),Wl=t=>Bu(t.join("/")),Ba=t=>t.replace(/\/+$/,""),lm=t=>Ba(t).replace(/^\/*/,"/"),sm=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,im=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,fn=class{constructor(t,a,o,r=!1){this.status=t,this.statusText=a||"",this.internal=r,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}};function dn(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function mn(t){let a=t.map(o=>o.route.path).filter(Boolean);return Wl(a)||"/"}var hd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function _d(t,a){let o=t;if(typeof o!="string"||!fd.test(o))return{absoluteURL:void 0,isExternal:!1,to:o};let r=o,c=!1;if(hd)try{let p=new URL(window.location.href),g=o.startsWith("//")?new URL(p.protocol+o):new URL(o),f=$l(g.pathname,a);g.origin===p.origin&&f!=null?o=f+g.search+g.hash:c=!0}catch{ll(!1,`<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:c,to:o}}var ci=Symbol("Uninstrumented");function tm(t,a){let o={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};t.forEach(c=>c({id:a.id,index:a.index,path:a.path,instrument(p){let g=Object.keys(o);for(let f of g)p[f]&&o[f].push(p[f])}}));let r={};if(typeof a.lazy=="function"&&o.lazy.length>0){let c=pt(o.lazy,a.lazy,()=>{});c&&(r.lazy=c)}if(typeof a.lazy=="object"){let c=a.lazy;["middleware","loader","action"].forEach(p=>{let g=c[p],f=o[`lazy.${p}`];if(typeof g=="function"&&f.length>0){let m=pt(f,g,()=>{});m&&(r.lazy=Object.assign(r.lazy||{},{[p]:m}))}})}return["loader","action"].forEach(c=>{let p=a[c];if(typeof p=="function"&&o[c].length>0){let g=p[ci]??p,f=pt(o[c],g,(...m)=>Lp(m[0]));f&&(c==="loader"&&g.hydrate===!0&&(f.hydrate=!0),f[ci]=g,r[c]=f)}}),a.middleware&&a.middleware.length>0&&o.middleware.length>0&&(r.middleware=a.middleware.map(c=>{let p=c[ci]??c,g=pt(o.middleware,p,(...f)=>Lp(f[0]));return g?(g[ci]=p,g):c})),r}function nm(t,a){let o={navigate:[],fetch:[]};if(a.forEach(r=>r({instrument(c){let p=Object.keys(c);for(let g of p)c[g]&&o[g].push(c[g])}})),o.navigate.length>0){let r=t.navigate[ci]??t.navigate,c=pt(o.navigate,r,(...p)=>{let[g,f]=p;return{to:typeof g=="number"||typeof g=="string"?g:g?Ss(g):".",...Ip(t,f??{})}});c&&(c[ci]=r,t.navigate=c)}if(o.fetch.length>0){let r=t.fetch[ci]??t.fetch,c=pt(o.fetch,r,(...p)=>{let[g,,f,m]=p;return{href:f??".",fetcherKey:g,...Ip(t,m??{})}});c&&(c[ci]=r,t.fetch=c)}return t}function pt(t,a,o){return t.length===0?null:async(...r)=>{let c=await jd(t,o(...r),()=>a(...r),t.length-1);if(c.type==="error")throw c.value;return c.value}}async function jd(t,a,o,r){let c=t[r],p;if(c){let g,f=async()=>(g?console.error("You cannot call instrumented handlers more than once"):g=jd(t,a,o,r-1),p=await g,Ce(p,"Expected a result"),p.type==="error"&&p.value instanceof Error?{status:"error",error:p.value}:{status:"success",error:void 0});try{await c(f,a)}catch(m){console.error("An instrumentation function threw an error:",m)}g||await f(),await g}else try{p={type:"success",value:await o()}}catch(g){p={type:"error",value:g}}return p||{type:"error",value:new Error("No result assigned in instrumentation chain.")}}function Lp(t){let{request:a,context:o,params:r,pattern:c}=t;return{request:am(a),params:{...r},pattern:c,context:om(o)}}function Ip(t,a){return{currentUrl:Ss(t.state.location),..."formMethod"in a?{formMethod:a.formMethod}:{},..."formEncType"in a?{formEncType:a.formEncType}:{},..."formData"in a?{formData:a.formData}:{},..."body"in a?{body:a.body}:{}}}function am(t){return{method:t.method,url:t.url,headers:{get:(...a)=>t.headers.get(...a)}}}function om(t){if(rm(t)){let a={...t};return Object.freeze(a),a}else return{get:a=>t.get(a)}}var um=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function rm(t){if(t===null||typeof t!="object")return!1;const a=Object.getPrototypeOf(t);return a===Object.prototype||a===null||Object.getOwnPropertyNames(a).sort().join("\0")===um}var Sd=["POST","PUT","PATCH","DELETE"],cm=new Set(Sd),pm=["GET",...Sd],dm=new Set(pm),vd=new Set([301,302,303,307,308]),gm=new Set([307,308]),yu={state:"idle",location:void 0,matches:void 0,historyAction:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},fm={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},en={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},mm=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),wd="remix-router-transitions",xd=Symbol("ResetLoaderData"),Ci,ut,ui,rt,hm=class{constructor(t){an(this,Ci),an(this,ut),an(this,ui),an(this,rt),ms(this,Ci,t),ms(this,ut,Pa(t))}get stableRoutes(){return Fl(this,Ci)}get activeRoutes(){return Fl(this,ui)??Fl(this,Ci)}get branches(){return Fl(this,rt)??Fl(this,ut)}get hasHMRRoutes(){return Fl(this,ui)!=null}setRoutes(t){ms(this,Ci,t),ms(this,ut,Pa(t))}setHmrRoutes(t){ms(this,ui,t),ms(this,rt,Pa(t))}commitHmrRoutes(){Fl(this,ui)&&(ms(this,Ci,Fl(this,ui)),ms(this,ut,Fl(this,rt)),ms(this,ui,void 0),ms(this,rt,void 0))}};Ci=new WeakMap;ut=new WeakMap;ui=new WeakMap;rt=new WeakMap;function _m(t){const a=t.window?t.window:typeof window<"u"?window:void 0,o=typeof a<"u"&&typeof a.document<"u"&&typeof a.document.createElement<"u";Ce(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let r=t.hydrationRouteProperties||[],c=t.mapRouteProperties||mm,p=c;if(t.instrumentations){let j=t.instrumentations;p=v=>({...c(v),...tm(j.map(G=>G.route).filter(Boolean),v)})}let g={},f=new hm(pn(t.routes,p,void 0,g)),m=t.basename||"/";m.startsWith("/")||(m=`/${m}`);let _=t.dataStrategy||xm,E={...t.future},w=null,J=new Set,z=null,H=null,q=null,B=null,K=t.hydrationData!=null,Q=ns(f.activeRoutes,t.history.location,m,!1,f.branches),ie=!1,de=null,ce,ve;if(Q==null&&!t.patchRoutesOnNavigation){let j=Dl(404,{pathname:t.history.location.pathname}),{matches:v,route:G}=ba(f.activeRoutes);ce=!0,ve=!ce,Q=v,de={[G.id]:j}}else if(Q&&!t.hydrationData&&Ms(Q,f.activeRoutes,t.history.location.pathname).active&&(Q=null),Q)if(Q.some(j=>j.route.lazy))ce=!1,ve=!ce;else if(!Q.some(j=>Au(j.route)))ce=!0,ve=!ce;else{let j=t.hydrationData?t.hydrationData.loaderData:null,v=t.hydrationData?t.hydrationData.errors:null,G=Q;if(v){let T=Q.findIndex(R=>v[R.route.id]!==void 0);G=G.slice(0,T+1)}ve=!1,ce=!0,G.forEach(T=>{let R=yd(T.route,j,v);ve=ve||R.renderFallback,ce=ce&&!R.shouldLoad})}else{ce=!1,ve=!ce,Q=[];let j=Ms(null,f.activeRoutes,t.history.location.pathname);j.active&&j.matches&&(ie=!0,Q=j.matches)}let Ee,L={historyAction:t.history.action,location:t.history.location,matches:Q,initialized:ce,renderFallback:ve,navigation:yu,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||de,fetchers:new Map,blockers:new Map},ye="POP",ne=null,Te=!1,ke,qe=!1,Le=new Map,ze=null,Ne=!1,me=!1,F=new Set,Y=new Map,V=0,x=-1,M=new Map,ge=new Set,he=new Map,k=new Map,A=new Set,$=new Map,ee,fe=null;function $e(){if(w=t.history.listen(({action:j,location:v,delta:G})=>{if(ee){ee(),ee=void 0;return}ll($.size===0||G!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let T=xs({currentLocation:L.location,nextLocation:v,historyAction:j});if(T&&G!=null){let R=new Promise(oe=>{ee=oe});t.history.go(G*-1),Ql(T,{state:"blocked",location:v,proceed(){Ql(T,{state:"proceeding",proceed:void 0,reset:void 0,location:v}),R.then(()=>t.history.go(G))},reset(){let oe=new Map(L.blockers);oe.set(T,en),Xe({blockers:oe})}}),ne==null||ne.resolve(),ne=null;return}return Vl(j,v)}),o){Tm(a,Le);let j=()=>Rm(a,Le);a.addEventListener("pagehide",j),ze=()=>a.removeEventListener("pagehide",j)}return L.initialized||Vl("POP",L.location,{initialHydration:!0}),Ee}function ws(){w&&w(),ze&&ze(),J.clear(),ke&&ke.abort(),L.fetchers.forEach((j,v)=>Pi(L.fetchers,v)),L.blockers.forEach((j,v)=>qi(v))}function zs(j){if(J.add(j),z){let{newErrors:v}=z;z=null,j(L,{deletedFetchers:[],newErrors:v,viewTransitionOpts:void 0,flushSync:!1})}return()=>J.delete(j)}function Xe(j,v={}){j.matches&&(j.matches=j.matches.map(R=>{let oe=g[R.route.id],ue=R.route;return ue.element!==oe.element||ue.errorElement!==oe.errorElement||ue.hydrateFallbackElement!==oe.hydrateFallbackElement?{...R,route:oe}:R})),L={...L,...j};let G=[],T=[];L.fetchers.forEach((R,oe)=>{R.state==="idle"&&(A.has(oe)?G.push(oe):T.push(oe))}),A.forEach(R=>{!L.fetchers.has(R)&&!Y.has(R)&&G.push(R)}),J.size===0&&(z={newErrors:j.errors??null}),[...J].forEach(R=>R(L,{deletedFetchers:G,newErrors:j.errors??null,viewTransitionOpts:v.viewTransitionOpts,flushSync:v.flushSync===!0})),G.forEach(R=>Pi(L.fetchers,R)),T.forEach(R=>L.fetchers.delete(R))}function us(j,v,{flushSync:G}={}){var Se,be;let T=L.actionData!=null&&L.navigation.formMethod!=null&&jl(L.navigation.formMethod)&&L.navigation.state==="loading"&&((Se=j.state)==null?void 0:Se._isRedirect)!==!0,R;v.actionData?Object.keys(v.actionData).length>0?R=v.actionData:R=null:T?R=L.actionData:R=null;let oe=v.loaderData?Tp(L.loaderData,v.loaderData,v.matches||[],v.errors):L.loaderData,ue=L.blockers;ue.size>0&&(ue=new Map(ue),ue.forEach((pe,Ge)=>ue.set(Ge,en)));let xe=Ne?!1:St(j,v.matches||L.matches),X=Te===!0||L.navigation.formMethod!=null&&jl(L.navigation.formMethod)&&((be=j.state)==null?void 0:be._isRedirect)!==!0;f.commitHmrRoutes(),Ne||ye==="POP"||(ye==="PUSH"?t.history.push(j,j.state):ye==="REPLACE"&&t.history.replace(j,j.state));let re;if(ye==="POP"){let pe=Le.get(L.location.pathname);pe&&pe.has(j.pathname)?re={currentLocation:L.location,nextLocation:j}:Le.has(j.pathname)&&(re={currentLocation:j,nextLocation:L.location})}else if(qe){let pe=Le.get(L.location.pathname);pe?pe.add(j.pathname):(pe=new Set([j.pathname]),Le.set(L.location.pathname,pe)),re={currentLocation:L.location,nextLocation:j}}Xe({...v,actionData:R,loaderData:oe,historyAction:ye,location:j,initialized:!0,renderFallback:!1,navigation:yu,revalidation:"idle",restoreScrollPosition:xe,preventScrollReset:X,blockers:ue},{viewTransitionOpts:re,flushSync:G===!0}),ye="POP",Te=!1,qe=!1,Ne=!1,me=!1,ne==null||ne.resolve(),ne=null,fe==null||fe.resolve(),fe=null}async function ft(j,v){if(ne==null||ne.resolve(),ne=null,typeof j=="number"){ne||(ne=Fp());let Ae=ne.promise;return t.history.go(j),Ae}let G=Pu(L.location,L.matches,m,j,v==null?void 0:v.fromRouteId,v==null?void 0:v.relative),{path:T,submission:R,error:oe}=Gp(!1,G,v),ue;v!=null&&v.mask&&(ue={pathname:"",search:"",hash:"",...typeof v.mask=="string"?vs(v.mask):{...L.location.mask,...v.mask}});let xe=L.location,X=cn(xe,T,v&&v.state,void 0,ue);X={...X,...t.history.encodeLocation(X)};let re=v&&v.replace!=null?v.replace:void 0,Se="PUSH";re===!0?Se="REPLACE":re===!1||R!=null&&jl(R.formMethod)&&R.formAction===L.location.pathname+L.location.search&&(Se="REPLACE");let be=v&&"preventScrollReset"in v?v.preventScrollReset===!0:void 0,pe=(v&&v.flushSync)===!0,Ge=xs({currentLocation:xe,nextLocation:X,historyAction:Se});if(Ge){Ql(Ge,{state:"blocked",location:X,proceed(){Ql(Ge,{state:"proceeding",proceed:void 0,reset:void 0,location:X}),ft(j,v)},reset(){let Ae=new Map(L.blockers);Ae.set(Ge,en),Xe({blockers:Ae})}});return}await Vl(Se,X,{submission:R,pendingError:oe,preventScrollReset:be,replace:v&&v.replace,enableViewTransition:v&&v.viewTransition,flushSync:pe,callSiteDefaultShouldRevalidate:v&&v.defaultShouldRevalidate})}function jn(){fe||(fe=Fp()),As(),Xe({revalidation:"loading"});let j=fe.promise;return L.navigation.state==="submitting"?j:L.navigation.state==="idle"?(Vl(L.historyAction,L.location,{startUninterruptedRevalidation:!0}),j):(Vl(ye||L.historyAction,L.navigation.location,{overrideNavigation:L.navigation,enableViewTransition:qe===!0}),j)}async function Vl(j,v,G){ke&&ke.abort(),ke=null,ye=j,Ne=(G&&G.startUninterruptedRevalidation)===!0,En(L.location,L.matches),Te=(G&&G.preventScrollReset)===!0,qe=(G&&G.enableViewTransition)===!0;let T=f.activeRoutes,R=G!=null&&G.initialHydration&&L.matches&&L.matches.length>0&&!ie?L.matches:ns(T,v,m,!1,f.branches),oe=(G&&G.flushSync)===!0;if(R&&L.initialized&&!me&&Gm(L.location,v)&&!(G&&G.submission&&jl(G.submission.formMethod))){us(v,{matches:R},{flushSync:oe});return}let ue=Ms(R,T,v.pathname);if(ue.active&&ue.matches&&(R=ue.matches),!R){let{error:Fe,notFoundMatches:Me,route:Pe}=Bi(v.pathname);us(v,{matches:Me,loaderData:{},errors:{[Pe.id]:Fe}},{flushSync:oe});return}let xe=G&&G.overrideNavigation?{...G.overrideNavigation,matches:R,historyAction:j}:void 0;ke=new AbortController;let X=ct(t.history,v,ke.signal,G&&G.submission),re=t.getContext?await t.getContext():new Ep,Se;if(G&&G.pendingError)Se=[ri(R).route.id,{type:"error",error:G.pendingError}];else if(G&&G.submission&&jl(G.submission.formMethod)){let Fe=await Sn(X,v,G.submission,R,j,re,ue.active,G&&G.initialHydration===!0,{replace:G.replace,flushSync:oe});if(Fe.shortCircuited)return;if(Fe.pendingActionResult){let[Me,Pe]=Fe.pendingActionResult;if(ql(Pe)&&dn(Pe.error)&&Pe.error.status===404){ke=null,us(v,{matches:Fe.matches,loaderData:{},errors:{[Me]:Pe.error}});return}}R=Fe.matches||R,Se=Fe.pendingActionResult,xe=Eu(v,R,j,G.submission),oe=!1,ue.active=!1,X=ct(t.history,X.url,X.signal)}let{shortCircuited:be,matches:pe,loaderData:Ge,errors:Ae,workingFetchers:Ze}=await mt(X,v,R,j,re,ue.active,xe,G&&G.submission,G&&G.fetcherSubmission,G&&G.replace,G&&G.initialHydration===!0,oe,Se,G&&G.callSiteDefaultShouldRevalidate);be||(ke=null,us(v,{matches:pe||R,...Rp(Se),loaderData:Ge,errors:Ae,...Ze?{fetchers:Ze}:{}}))}async function Sn(j,v,G,T,R,oe,ue,xe,X={}){As();let re=Mm(v,T,R,G);if(Xe({navigation:re},{flushSync:X.flushSync===!0}),ue){let pe=await gi(T,v.pathname,j.signal);if(pe.type==="aborted")return{shortCircuited:!0};if(pe.type==="error"){if(pe.partialMatches.length===0){let{matches:Ae,route:Ze}=ba(f.activeRoutes);return{matches:Ae,pendingActionResult:[Ze.id,{type:"error",error:pe.error}]}}let Ge=ri(pe.partialMatches).route.id;return{matches:pe.partialMatches,pendingActionResult:[Ge,{type:"error",error:pe.error}]}}else if(pe.matches)T=pe.matches;else{let{notFoundMatches:Ge,error:Ae,route:Ze}=Bi(v.pathname);return{matches:Ge,pendingActionResult:[Ze.id,{type:"error",error:Ae}]}}}let Se,be=Ja(T,v);if(!be.route.action&&!be.route.lazy)Se={type:"error",error:Dl(405,{method:j.method,pathname:v.pathname,routeId:be.route.id})};else{let pe=dt(p,g,j,v,T,be,xe?[]:r,oe),Ge=await Bs(j,v,pe,oe,null);if(Se=Ge[be.route.id],!Se){for(let Ae of T)if(Ge[Ae.route.id]){Se=Ge[Ae.route.id];break}}if(j.signal.aborted)return{shortCircuited:!0}}if(Li(Se)){let pe;return X&&X.replace!=null?pe=X.replace:pe=Ap(Se.response.headers.get("Location"),new URL(j.url),m,t.history)===L.location.pathname+L.location.search,await rs(j,Se,!0,{submission:G,replace:pe}),{shortCircuited:!0}}if(ql(Se)){let pe=ri(T,be.route.id);return(X&&X.replace)!==!0&&(ye="PUSH"),{matches:T,pendingActionResult:[pe.route.id,Se,be.route.id]}}return{matches:T,pendingActionResult:[be.route.id,Se]}}async function mt(j,v,G,T,R,oe,ue,xe,X,re,Se,be,pe,Ge){let Ae=ue||Eu(v,G,T,xe),Ze=xe||X||Np(Ae),Fe=!Ne&&!Se;if(oe){if(Fe){let gl=Us(pe);Xe({navigation:Ae,...gl!==void 0?{actionData:gl}:{}},{flushSync:be})}let Je=await gi(G,v.pathname,j.signal);if(Je.type==="aborted")return{shortCircuited:!0};if(Je.type==="error"){if(Je.partialMatches.length===0){let{matches:vl,route:yl}=ba(f.activeRoutes);return{matches:vl,loaderData:{},errors:{[yl.id]:Je.error}}}let gl=ri(Je.partialMatches).route.id;return{matches:Je.partialMatches,loaderData:{},errors:{[gl]:Je.error}}}else if(Je.matches)G=Je.matches;else{let{error:gl,notFoundMatches:vl,route:yl}=Bi(v.pathname);return{matches:vl,loaderData:{},errors:{[yl.id]:gl}}}}let Me=f.activeRoutes,{dsMatches:Pe,revalidatingFetchers:pl}=Pp(j,R,p,g,t.history,L,G,Ze,v,Se?[]:r,Se===!0,me,F,A,he,ge,Me,m,t.patchRoutesOnNavigation!=null,f.branches,pe,Ge);if(x=++V,!t.dataStrategy&&!Pe.some(Je=>Je.shouldLoad)&&!Pe.some(Je=>Je.route.middleware&&Je.route.middleware.length>0)&&pl.length===0){let Je=new Map(L.fetchers),gl=zi(Je);return us(v,{matches:G,loaderData:{},errors:pe&&ql(pe[1])?{[pe[0]]:pe[1].error}:null,...Rp(pe),...gl?{fetchers:Je}:{}},{flushSync:be}),{shortCircuited:!0}}if(Fe){let Je={};if(!oe){Je.navigation=Ae;let gl=Us(pe);gl!==void 0&&(Je.actionData=gl)}pl.length>0&&(Je.fetchers=qs(pl)),Xe(Je,{flushSync:be})}pl.forEach(Je=>{Kl(Je.key),Je.controller&&Y.set(Je.key,Je.controller)});let ys=()=>pl.forEach(Je=>Kl(Je.key));ke&&ke.signal.addEventListener("abort",ys);let{loaderResults:Yl,fetcherResults:Xl}=await Gi(Pe,pl,j,v,R);if(j.signal.aborted)return{shortCircuited:!0};ke&&ke.signal.removeEventListener("abort",ys),pl.forEach(Je=>Y.delete(Je.key));let cs=Ca(Yl);if(cs)return await rs(j,cs.result,!0,{replace:re}),{shortCircuited:!0};if(cs=Ca(Xl),cs)return ge.add(cs.key),await rs(j,cs.result,!0,{replace:re}),{shortCircuited:!0};let Gl=new Map(L.fetchers),{loaderData:Ts,errors:il}=Hp(L,G,Yl,pe,pl,Xl,Gl);Se&&L.errors&&(il={...L.errors,...il});let Ai=zi(Gl),dl=Ui(x,Gl),Mi=Ai||dl||pl.length>0;return{matches:G,loaderData:Ts,errors:il,...Mi?{workingFetchers:Gl}:{}}}function Us(j){if(j&&!ql(j[1]))return{[j[0]]:j[1].data};if(L.actionData)return Object.keys(L.actionData).length===0?null:L.actionData}function qs(j){let v=new Map(L.fetchers);return j.forEach(G=>{let T=v.get(G.key),R=ln(void 0,T?T.data:void 0);v.set(G.key,R)}),v}async function ht(j,v,G,T){Kl(j);let R=(T&&T.flushSync)===!0,oe=f.activeRoutes,ue=Pu(L.location,L.matches,m,G,v,T==null?void 0:T.relative),xe=ns(oe,ue,m,!1,f.branches),X=Ms(xe,oe,ue);if(X.active&&X.matches&&(xe=X.matches),!xe){Sl(j,v,Dl(404,{pathname:ue}),{flushSync:R});return}let{path:re,submission:Se,error:be}=Gp(!0,ue,T);if(be){Sl(j,v,be,{flushSync:R});return}let pe=t.getContext?await t.getContext():new Ep,Ge=(T&&T.preventScrollReset)===!0;if(Se&&jl(Se.formMethod)){await vn(j,v,re,xe,pe,X.active,R,Ge,Se,T&&T.defaultShouldRevalidate);return}he.set(j,{routeId:v,path:re}),await wn(j,v,re,xe,pe,X.active,R,Ge,Se)}async function vn(j,v,G,T,R,oe,ue,xe,X,re){As(),he.delete(j);let Se=L.fetchers.get(j);Al(j,Hm(X,Se),{flushSync:ue});let be=new AbortController,pe=ct(t.history,G,be.signal,X);if(oe){let Re=await gi(T,new URL(pe.url).pathname,pe.signal,j);if(Re.type==="aborted")return;if(Re.type==="error"){Sl(j,v,Re.error,{flushSync:ue});return}else if(Re.matches)T=Re.matches;else{Sl(j,v,Dl(404,{pathname:G}),{flushSync:ue});return}}let Ge=Ja(T,G);if(!Ge.route.action&&!Ge.route.lazy){let Re=Dl(405,{method:X.formMethod,pathname:G,routeId:v});Sl(j,v,Re,{flushSync:ue});return}Y.set(j,be);let Ae=V,Ze=dt(p,g,pe,G,T,Ge,r,R),Fe=await Bs(pe,G,Ze,R,j),Me=Fe[Ge.route.id];if(!Me){for(let Re of Ze)if(Fe[Re.route.id]){Me=Fe[Re.route.id];break}}if(pe.signal.aborted){Y.get(j)===be&&Y.delete(j);return}if(A.has(j)){if(Li(Me)||ql(Me)){Al(j,js(void 0));return}}else{if(Li(Me))if(Y.delete(j),x>Ae){Al(j,js(void 0));return}else return ge.add(j),Al(j,ln(X)),rs(pe,Me,!1,{fetcherSubmission:X,preventScrollReset:xe});if(ql(Me)){Sl(j,v,Me.error);return}}let Pe=L.navigation.location||L.location,pl=ct(t.history,Pe,be.signal),ys=f.activeRoutes,Yl=L.navigation.state!=="idle"?ns(ys,L.navigation.location,m,!1,f.branches):L.matches;Ce(Yl,"Didn't find any matches after fetcher action");let Xl=++V;M.set(j,Xl);let{dsMatches:cs,revalidatingFetchers:Gl}=Pp(pl,R,p,g,t.history,L,Yl,X,Pe,r,!1,me,F,A,he,ge,ys,m,t.patchRoutesOnNavigation!=null,f.branches,[Ge.route.id,Me],re),Ts=ln(X,Me.data),il=new Map(L.fetchers);il.set(j,Ts),Gl.filter(Re=>Re.key!==j).forEach(Re=>{let Es=Re.key,Hi=il.get(Es),kn=ln(void 0,Hi?Hi.data:void 0);il.set(Es,kn),Kl(Es),Re.controller&&Y.set(Es,Re.controller)}),Xe({fetchers:il});let Ai=()=>Gl.forEach(Re=>Kl(Re.key));be.signal.addEventListener("abort",Ai);let{loaderResults:dl,fetcherResults:Mi}=await Gi(cs,Gl,pl,Pe,R);if(be.signal.aborted)return;be.signal.removeEventListener("abort",Ai),M.delete(j),Y.delete(j),Gl.forEach(Re=>Y.delete(Re.key));let Je=L.fetchers.has(j),gl=Re=>{if(!Je)return Re;let Es=new Map(Re.fetchers);return Es.set(j,js(Me.data)),{...Re,fetchers:Es}},vl=Ca(dl);if(vl)return L=gl(L),rs(pl,vl.result,!1,{preventScrollReset:xe});if(vl=Ca(Mi),vl)return ge.add(vl.key),L=gl(L),rs(pl,vl.result,!1,{preventScrollReset:xe});let yl=new Map(L.fetchers);Je&&yl.set(j,js(Me.data));let{loaderData:Rs,errors:Os}=Hp(L,Yl,dl,void 0,Gl,Mi,yl);Ui(Xl,yl),L.navigation.state==="loading"&&Xl>x?(Ce(ye,"Expected pending action"),ke&&ke.abort(),us(L.navigation.location,{matches:Yl,loaderData:Rs,errors:Os,fetchers:yl})):(Xe({errors:Os,loaderData:Tp(L.loaderData,Rs,Yl,Os),fetchers:yl}),me=!1)}async function wn(j,v,G,T,R,oe,ue,xe,X){let re=L.fetchers.get(j);Al(j,ln(X,re?re.data:void 0),{flushSync:ue});let Se=new AbortController,be=ct(t.history,G,Se.signal);if(oe){let Me=await gi(T,new URL(be.url).pathname,be.signal,j);if(Me.type==="aborted")return;if(Me.type==="error"){Sl(j,v,Me.error,{flushSync:ue});return}else if(Me.matches)T=Me.matches;else{Sl(j,v,Dl(404,{pathname:G}),{flushSync:ue});return}}let pe=Ja(T,G);Y.set(j,Se);let Ge=V,Ae=dt(p,g,be,G,T,pe,r,R),Ze=await Bs(be,G,Ae,R,j),Fe=Ze[pe.route.id];if(!Fe){for(let Me of T)if(Ze[Me.route.id]){Fe=Ze[Me.route.id];break}}if(Y.get(j)===Se&&Y.delete(j),!be.signal.aborted){if(A.has(j)){Al(j,js(void 0));return}if(Li(Fe))if(x>Ge){Al(j,js(void 0));return}else{ge.add(j),await rs(be,Fe,!1,{preventScrollReset:xe});return}if(ql(Fe)){Sl(j,v,Fe.error);return}Al(j,js(Fe.data))}}async function rs(j,v,G,{submission:T,fetcherSubmission:R,preventScrollReset:oe,replace:ue}={}){G||(ne==null||ne.resolve(),ne=null),v.response.headers.has("X-Remix-Revalidate")&&(me=!0);let xe=v.response.headers.get("Location");Ce(xe,"Expected a Location header on the redirect Response"),xe=Ap(xe,new URL(j.url),m,t.history);let X=cn(L.location,xe,{_isRedirect:!0});if(o){let Ae=!1;if(v.response.headers.has("X-Remix-Reload-Document"))Ae=!0;else if(qu(xe)){const Ze=cd(a,xe,!0);Ae=Ze.origin!==a.location.origin||$l(Ze.pathname,m)==null}if(Ae){ue?a.location.replace(xe):a.location.assign(xe);return}}ke=null;let re=ue===!0||v.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:Se,formAction:be,formEncType:pe}=L.navigation;!T&&!R&&Se&&be&&pe&&(T=Np(L.navigation));let Ge=T||R;if(gm.has(v.response.status)&&Ge&&jl(Ge.formMethod))await Vl(re,X,{submission:{...Ge,formAction:xe},preventScrollReset:oe||Te,enableViewTransition:G?qe:void 0});else{let Ae=Eu(X,[],re,T);await Vl(re,X,{overrideNavigation:Ae,fetcherSubmission:R,preventScrollReset:oe||Te,enableViewTransition:G?qe:void 0})}}async function Bs(j,v,G,T,R){var xe;let oe,ue={};try{oe=await Em(_,j,v,G,R,T,!1)}catch(X){return G.filter(re=>re.shouldLoad).forEach(re=>{ue[re.route.id]={type:"error",error:X}}),ue}if(j.signal.aborted)return ue;if(!jl(j.method))for(let X of G){if(((xe=oe[X.route.id])==null?void 0:xe.type)==="error")break;!oe.hasOwnProperty(X.route.id)&&!L.loaderData.hasOwnProperty(X.route.id)&&(!L.errors||!L.errors.hasOwnProperty(X.route.id))&&X.shouldCallHandler()&&(oe[X.route.id]={type:"error",result:new Error(`No result returned from dataStrategy for route ${X.route.id}`)})}for(let[X,re]of Object.entries(oe))if(Um(re)){let Se=re.result;ue[X]={type:"redirect",response:Lm(Se,j,X,G,m)}}else ue[X]=await Cm(re);return ue}async function Gi(j,v,G,T,R){let oe=Bs(G,T,j,R,null),ue=Promise.all(v.map(async re=>{if(re.matches&&re.match&&re.request&&re.controller){let be=(await Bs(re.request,re.path,re.matches,R,re.key))[re.match.route.id];return{[re.key]:be}}else return Promise.resolve({[re.key]:{type:"error",error:Dl(404,{pathname:re.path})}})})),xe=await oe,X=(await ue).reduce((re,Se)=>Object.assign(re,Se),{});return{loaderResults:xe,fetcherResults:X}}function As(){me=!0,he.forEach((j,v)=>{Y.has(v)&&F.add(v),Kl(v)})}function Al(j,v,G={}){let T=new Map(L.fetchers);T.set(j,v),Xe({fetchers:T},{flushSync:(G&&G.flushSync)===!0})}function Sl(j,v,G,T={}){let R=ri(L.matches,v),oe=new Map(L.fetchers);Pi(oe,j),Xe({errors:{[R.route.id]:G},fetchers:oe},{flushSync:(T&&T.flushSync)===!0})}function di(j){return k.set(j,(k.get(j)||0)+1),A.has(j)&&A.delete(j),L.fetchers.get(j)||fm}function Ta(j,v){Kl(j,v==null?void 0:v.reason),Al(j,js(null))}function Pi(j,v){let G=L.fetchers.get(v);Y.has(v)&&!(G&&G.state==="loading"&&M.has(v))&&Kl(v),he.delete(v),M.delete(v),ge.delete(v),A.delete(v),F.delete(v),j.delete(v)}function xn(j){let v=(k.get(j)||0)-1;v<=0?(k.delete(j),A.add(j)):k.set(j,v),Xe({fetchers:new Map(L.fetchers)})}function Kl(j,v){let G=Y.get(j);G&&(G.abort(v),Y.delete(j))}function Ji(j,v){for(let G of j){let T=v.get(G);Ce(T,`Expected fetcher: ${G}`);let R=js(T.data);v.set(G,R)}}function zi(j){let v=[],G=!1;for(let T of ge){let R=j.get(T);Ce(R,`Expected fetcher: ${T}`),R.state==="loading"&&(ge.delete(T),v.push(T),G=!0)}return Ji(v,j),G}function Ui(j,v){let G=[];for(let[T,R]of M)if(R<j){let oe=v.get(T);Ce(oe,`Expected fetcher: ${T}`),oe.state==="loading"&&(Kl(T),M.delete(T),G.push(T))}return Ji(G,v),G.length>0}function _t(j,v){let G=L.blockers.get(j)||en;return $.get(j)!==v&&$.set(j,v),G}function qi(j){L.blockers.delete(j),$.delete(j)}function Ql(j,v){let G=L.blockers.get(j)||en;Ce(G.state==="unblocked"&&v.state==="blocked"||G.state==="blocked"&&v.state==="blocked"||G.state==="blocked"&&v.state==="proceeding"||G.state==="blocked"&&v.state==="unblocked"||G.state==="proceeding"&&v.state==="unblocked",`Invalid blocker state transition: ${G.state} -> ${v.state}`);let T=new Map(L.blockers);T.set(j,v),Xe({blockers:T})}function xs({currentLocation:j,nextLocation:v,historyAction:G}){if($.size===0)return;$.size>1&&ll(!1,"A router only supports one blocker at a time");let T=Array.from($.entries()),[R,oe]=T[T.length-1],ue=L.blockers.get(R);if(!(ue&&ue.state==="proceeding")&&oe({currentLocation:j,nextLocation:v,historyAction:G}))return R}function Bi(j){let v=Dl(404,{pathname:j}),G=f.activeRoutes,{matches:T,route:R}=ba(G);return{notFoundMatches:T,route:R,error:v}}function yn(j,v,G){if(H=j,B=v,q=G||null,!K&&L.navigation===yu){K=!0;let T=St(L.location,L.matches);T!=null&&Xe({restoreScrollPosition:T})}return()=>{H=null,B=null,q=null}}function jt(j,v){return q&&q(j,v.map(T=>Tf(T,L.loaderData)))||j.key}function En(j,v){if(H&&B){let G=jt(j,v);H[G]=B()}}function St(j,v){if(H){let G=jt(j,v),T=H[G];if(typeof T=="number")return T}return null}function Ms(j,v,G){if(t.patchRoutesOnNavigation){let T=f.branches;if(j){if(Object.keys(j[0].params).length>0)return{active:!0,matches:ns(v,G,m,!0,T)}}else return{active:!0,matches:ns(v,G,m,!0,T)||[]}}return{active:!1,matches:null}}async function gi(j,v,G,T){if(!t.patchRoutesOnNavigation)return{type:"success",matches:j};let R=j;for(;;){let oe=g;try{await t.patchRoutesOnNavigation({signal:G,path:v,matches:R,fetcherKey:T,patch:(re,Se)=>{G.aborted||Jp(re,Se,f,oe,p,!1)}})}catch(re){return{type:"error",error:re,partialMatches:R}}if(G.aborted)return{type:"aborted"};let ue=f.branches,xe=ns(f.activeRoutes,v,m,!1,ue),X=null;if(xe){if(Object.keys(xe[0].params).length===0)return{type:"success",matches:xe};if(X=ns(f.activeRoutes,v,m,!0,ue),!(X&&R.length<X.length&&Hs(R,X.slice(0,R.length))))return{type:"success",matches:xe}}if(X||(X=ns(f.activeRoutes,v,m,!0,ue)),!X||Hs(R,X))return{type:"success",matches:null};R=X}}function Hs(j,v){return j.length===v.length&&j.every((G,T)=>G.route.id===v[T].route.id)}function vt(j){g={},f.setHmrRoutes(pn(j,p,void 0,g))}function fi(j,v,G=!1){Jp(j,v,f,g,p,G),f.hasHMRRoutes||Xe({})}return Ee={get basename(){return m},get future(){return E},get state(){return L},get routes(){return f.stableRoutes},get branches(){return f.branches},get manifest(){return g},get window(){return a},initialize:$e,subscribe:zs,enableScrollRestoration:yn,navigate:ft,fetch:ht,revalidate:jn,createHref:j=>t.history.createHref(j),encodeLocation:j=>t.history.encodeLocation(j),getFetcher:di,resetFetcher:Ta,deleteFetcher:xn,dispose:ws,getBlocker:_t,deleteBlocker:qi,patchRoutes:fi,_internalFetchControllers:Y,_internalSetRoutes:vt,_internalSetStateDoNotUseOrYouWillBreakYourApp(j){Xe(j)}},t.instrumentations&&(Ee=nm(Ee,t.instrumentations.map(j=>j.router).filter(Boolean))),Ee}function jm(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Pu(t,a,o,r,c,p){let g,f;if(c){g=[];for(let _ of a)if(g.push(_),_.route.id===c){f=_;break}}else g=a,f=a[a.length-1];let m=gn(r||".",Aa(g),$l(t.pathname,o)||t.pathname,p==="path");if(r==null&&(m.search=t.search,m.hash=t.hash),(r==null||r===""||r===".")&&f){let _=Hu(m.search);if(f.route.index&&!_)m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index";else if(!f.route.index&&_){let E=new URLSearchParams(m.search),w=E.getAll("index");E.delete("index"),w.filter(z=>z).forEach(z=>E.append("index",z));let J=E.toString();m.search=J?`?${J}`:""}}return o!=="/"&&(m.pathname=Zf({basename:o,pathname:m.pathname})),Ss(m)}function Gp(t,a,o){if(!o||!jm(o))return{path:a};if(o.formMethod&&!Am(o.formMethod))return{path:a,error:Dl(405,{method:o.formMethod})};let r=()=>({path:a,error:Dl(400,{type:"invalid-body"})}),p=(o.formMethod||"get").toUpperCase(),g=Gd(a);if(o.body!==void 0){if(o.formEncType==="text/plain"){if(!jl(p))return r();let w=typeof o.body=="string"?o.body:o.body instanceof FormData||o.body instanceof URLSearchParams?Array.from(o.body.entries()).reduce((J,[z,H])=>`${J}${z}=${H}
`,""):String(o.body);return{path:a,submission:{formMethod:p,formAction:g,formEncType:o.formEncType,formData:void 0,json:void 0,text:w}}}else if(o.formEncType==="application/json"){if(!jl(p))return r();try{let w=typeof o.body=="string"?JSON.parse(o.body):o.body;return{path:a,submission:{formMethod:p,formAction:g,formEncType:o.formEncType,formData:void 0,json:w,text:void 0}}}catch{return r()}}}Ce(typeof FormData=="function","FormData is not available in this environment");let f,m;if(o.formData)f=zu(o.formData),m=o.formData;else if(o.body instanceof FormData)f=zu(o.body),m=o.body;else if(o.body instanceof URLSearchParams)f=o.body,m=Mp(f);else if(o.body==null)f=new URLSearchParams,m=new FormData;else try{f=new URLSearchParams(o.body),m=Mp(f)}catch{return r()}let _={formMethod:p,formAction:g,formEncType:o&&o.formEncType||"application/x-www-form-urlencoded",formData:m,json:void 0,text:void 0};if(jl(_.formMethod))return{path:a,submission:_};let E=vs(a);return t&&E.search&&Hu(E.search)&&f.append("index",""),E.search=`?${f}`,{path:Ss(E),submission:_}}function Pp(t,a,o,r,c,p,g,f,m,_,E,w,J,z,H,q,B,K,Q,ie,de,ce){var Ne;let ve=de?ql(de[1])?de[1].error:de[1].data:void 0,Ee=c.createURL(p.location),L=c.createURL(m),ye;if(E&&p.errors){let me=Object.keys(p.errors)[0];ye=g.findIndex(F=>F.route.id===me)}else if(de&&ql(de[1])){let me=de[0];ye=g.findIndex(F=>F.route.id===me)-1}let ne=de?de[1].statusCode:void 0,Te=ne&&ne>=400,ke={currentUrl:Ee,currentParams:((Ne=p.matches[0])==null?void 0:Ne.params)||{},nextUrl:L,nextParams:g[0].params,...f,actionResult:ve,actionStatus:ne},qe=mn(g),Le=g.map((me,F)=>{let{route:Y}=me,V=null;if(ye!=null&&F>ye)V=!1;else if(Y.lazy)V=!0;else if(!Au(Y))V=!1;else if(E){let{shouldLoad:he}=yd(Y,p.loaderData,p.errors);V=he}else Sm(p.loaderData,p.matches[F],me)&&(V=!0);if(V!==null)return Ju(o,r,t,m,qe,me,_,a,V);let x=!1;typeof ce=="boolean"?x=ce:Te?x=!1:(w||Ee.pathname+Ee.search===L.pathname+L.search||Ee.search!==L.search||vm(p.matches[F],me))&&(x=!0);let M={...ke,defaultShouldRevalidate:x},ge=rn(me,M);return Ju(o,r,t,m,qe,me,_,a,ge,M,ce)}),ze=[];return H.forEach((me,F)=>{if(E||!g.some(A=>A.route.id===me.routeId)||z.has(F))return;let Y=p.fetchers.get(F),V=Y&&Y.state!=="idle"&&Y.data===void 0,x=ns(B,me.path,K??"/",!1,ie);if(!x){if(Q&&V)return;ze.push({key:F,routeId:me.routeId,path:me.path,matches:null,match:null,request:null,controller:null});return}if(q.has(F))return;let M=Ja(x,me.path),ge=new AbortController,he=ct(c,me.path,ge.signal),k=null;if(J.has(F))J.delete(F),k=dt(o,r,he,me.path,x,M,_,a);else if(V)w&&(k=dt(o,r,he,me.path,x,M,_,a));else{let A;typeof ce=="boolean"?A=ce:Te?A=!1:A=w;let $={...ke,defaultShouldRevalidate:A};rn(M,$)&&(k=dt(o,r,he,me.path,x,M,_,a,$))}k&&ze.push({key:F,routeId:me.routeId,path:me.path,matches:k,match:M,request:he,controller:ge})}),{dsMatches:Le,revalidatingFetchers:ze}}function Au(t){return t.loader!=null||t.middleware!=null&&t.middleware.length>0}function yd(t,a,o){if(t.lazy)return{shouldLoad:!0,renderFallback:!0};if(!Au(t))return{shouldLoad:!1,renderFallback:!1};let r=a!=null&&t.id in a,c=o!=null&&o[t.id]!==void 0;if(!r&&c)return{shouldLoad:!1,renderFallback:!1};if(typeof t.loader=="function"&&t.loader.hydrate===!0)return{shouldLoad:!0,renderFallback:!r};let p=!r&&!c;return{shouldLoad:p,renderFallback:p}}function Sm(t,a,o){let r=!a||o.route.id!==a.route.id,c=!t.hasOwnProperty(o.route.id);return r||c}function vm(t,a){let o=t.route.path;return t.pathname!==a.pathname||o!=null&&o.endsWith("*")&&t.params["*"]!==a.params["*"]}function rn(t,a){if(t.route.shouldRevalidate){let o=t.route.shouldRevalidate(a);if(typeof o=="boolean")return o}return a.defaultShouldRevalidate}function Jp(t,a,o,r,c,p){let g;if(t){let _=r[t];Ce(_,`No route found to patch children into: routeId = ${t}`),_.children||(_.children=[]),g=_.children}else g=o.activeRoutes;let f=[],m=[];if(a.forEach(_=>{let E=g.find(w=>Ed(_,w));E?m.push({existingRoute:E,newRoute:_}):f.push(_)}),f.length>0){let _=pn(f,c,[t||"_","patch",String((g==null?void 0:g.length)||"0")],r);g.push(..._)}if(p&&m.length>0)for(let _=0;_<m.length;_++){let{existingRoute:E,newRoute:w}=m[_],J=E,[z]=pn([w],c,[],{},!0);Object.assign(J,{element:z.element?z.element:J.element,errorElement:z.errorElement?z.errorElement:J.errorElement,hydrateFallbackElement:z.hydrateFallbackElement?z.hydrateFallbackElement:J.hydrateFallbackElement})}o.hasHMRRoutes||o.setRoutes([...o.activeRoutes])}function Ed(t,a){var o;return"id"in t&&"id"in a&&t.id===a.id?!0:t.index===a.index&&t.path===a.path&&t.caseSensitive===a.caseSensitive?(!t.children||t.children.length===0)&&(!a.children||a.children.length===0)?!0:((o=t.children)==null?void 0:o.every((r,c)=>{var p;return(p=a.children)==null?void 0:p.some(g=>Ed(r,g))}))??!1:!1}var zp=new WeakMap,kd=({key:t,route:a,manifest:o,mapRouteProperties:r})=>{let c=o[a.id];if(Ce(c,"No route found in manifest"),!c.lazy||typeof c.lazy!="object")return;let p=c.lazy[t];if(!p)return;let g=zp.get(c);g||(g={},zp.set(c,g));let f=g[t];if(f)return f;let m=(async()=>{let _=Bf(t),w=c[t]!==void 0&&t!=="hasErrorBoundary";if(_)ll(!_,"Route property "+t+" is not a supported lazy route property. This property will be ignored."),g[t]=Promise.resolve();else if(w)ll(!1,`Route "${c.id}" has a static property "${t}" defined. The lazy property will be ignored.`);else{let J=await p();J!=null&&(Object.assign(c,{[t]:J}),Object.assign(c,r(c)))}typeof c.lazy=="object"&&(c.lazy[t]=void 0,Object.values(c.lazy).every(J=>J===void 0)&&(c.lazy=void 0))})();return g[t]=m,m},Up=new WeakMap;function wm(t,a,o,r,c){let p=o[t.id];if(Ce(p,"No route found in manifest"),!t.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof t.lazy=="function"){let E=Up.get(p);if(E)return{lazyRoutePromise:E,lazyHandlerPromise:E};let w=(async()=>{Ce(typeof t.lazy=="function","No lazy route function found");let J=await t.lazy(),z={};for(let H in J){let q=J[H];if(q===void 0)continue;let B=Mf(H),Q=p[H]!==void 0&&H!=="hasErrorBoundary";B?ll(!B,"Route property "+H+" is not a supported property to be returned from a lazy route function. This property will be ignored."):Q?ll(!Q,`Route "${p.id}" has a static property "${H}" defined but its lazy function is also returning a value for this property. The lazy route property "${H}" will be ignored.`):z[H]=q}Object.assign(p,z),Object.assign(p,{...r(p),lazy:void 0})})();return Up.set(p,w),w.catch(()=>{}),{lazyRoutePromise:w,lazyHandlerPromise:w}}let g=Object.keys(t.lazy),f=[],m;for(let E of g){if(c&&c.includes(E))continue;let w=kd({key:E,route:t,manifest:o,mapRouteProperties:r});w&&(f.push(w),E===a&&(m=w))}let _=f.length>0?Promise.all(f).then(()=>{}):void 0;return _==null||_.catch(()=>{}),m==null||m.catch(()=>{}),{lazyRoutePromise:_,lazyHandlerPromise:m}}async function qp(t){let a=t.matches.filter(c=>c.shouldLoad),o={};return(await Promise.all(a.map(c=>c.resolve()))).forEach((c,p)=>{o[a[p].route.id]=c}),o}async function xm(t){return t.matches.some(a=>a.route.middleware)?bd(t,()=>qp(t)):qp(t)}function bd(t,a){return ym(t,a,r=>{if(Bm(r))throw r;return r},Jm,o);function o(r,c,p){if(p)return Promise.resolve(Object.assign(p.value,{[c]:{type:"error",result:r}}));{let{matches:g}=t,f=Math.min(Math.max(g.findIndex(_=>_.route.id===c),0),Math.max(g.findIndex(_=>_.shouldCallHandler()),0)),m=ri(g,g[f].route.id).route.id;return Promise.resolve({[m]:{type:"error",result:r}})}}}async function ym(t,a,o,r,c){let{matches:p,...g}=t,f=p.flatMap(_=>_.route.middleware?_.route.middleware.map(E=>[_.route.id,E]):[]);return await Cd(g,f,a,o,r,c)}async function Cd(t,a,o,r,c,p,g=0){let{request:f}=t;if(f.signal.aborted)throw f.signal.reason??new Error(`Request aborted: ${f.method} ${f.url}`);let m=a[g];if(!m)return await o();let[_,E]=m,w,J=async()=>{if(w)throw new Error("You may only call `next()` once per middleware");try{return w={value:await Cd(t,a,o,r,c,p,g+1)},w.value}catch(z){return w={value:await p(z,_,w)},w.value}};try{let z=await E(t,J),H=z!=null?r(z):void 0;return c(H)?H:w?H??w.value:(w={value:await J()},w.value)}catch(z){return await p(z,_,w)}}function Ld(t,a,o,r,c){let p=kd({key:"middleware",route:r.route,manifest:a,mapRouteProperties:t}),g=wm(r.route,jl(o.method)?"action":"loader",a,t,c);return{middleware:p,route:g.lazyRoutePromise,handler:g.lazyHandlerPromise}}function Ju(t,a,o,r,c,p,g,f,m,_=null,E){let w=!1,J=Ld(t,a,o,p,g);return{...p,_lazyPromises:J,shouldLoad:m,shouldRevalidateArgs:_,shouldCallHandler(z){return w=!0,_?typeof E=="boolean"?rn(p,{..._,defaultShouldRevalidate:E}):typeof z=="boolean"?rn(p,{..._,defaultShouldRevalidate:z}):rn(p,_):m},resolve(z){let{lazy:H,loader:q,middleware:B}=p.route,K=w||m||z&&!jl(o.method)&&(H||q),Q=B&&B.length>0&&!q&&!H;return K&&(jl(o.method)||!Q)?km({request:o,path:r,pattern:c,match:p,lazyHandlerPromise:J==null?void 0:J.handler,lazyRoutePromise:J==null?void 0:J.route,handlerOverride:z,scopedContext:f}):Promise.resolve({type:"data",result:void 0})}}}function dt(t,a,o,r,c,p,g,f,m=null){return c.map(_=>_.route.id!==p.route.id?{..._,shouldLoad:!1,shouldRevalidateArgs:m,shouldCallHandler:()=>!1,_lazyPromises:Ld(t,a,o,_,g),resolve:()=>Promise.resolve({type:"data",result:void 0})}:Ju(t,a,o,r,mn(c),_,g,f,!0,m))}async function Em(t,a,o,r,c,p,g){r.some(E=>{var w;return(w=E._lazyPromises)==null?void 0:w.middleware})&&await Promise.all(r.map(E=>{var w;return(w=E._lazyPromises)==null?void 0:w.middleware}));let f={request:a,url:Id(a,o),pattern:mn(r),params:r[0].params,context:p,matches:r},_=await t({...f,fetcherKey:c,runClientMiddleware:E=>{let w=f;return bd(w,()=>E({...w,fetcherKey:c,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(r.flatMap(E=>{var w,J;return[(w=E._lazyPromises)==null?void 0:w.handler,(J=E._lazyPromises)==null?void 0:J.route]}))}catch{}return _}async function km({request:t,path:a,pattern:o,match:r,lazyHandlerPromise:c,lazyRoutePromise:p,handlerOverride:g,scopedContext:f}){let m,_,E=jl(t.method),w=E?"action":"loader",J=z=>{let H,q=new Promise((Q,ie)=>H=ie);_=()=>H(),t.signal.addEventListener("abort",_);let B=Q=>typeof z!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${w}" [routeId: ${r.route.id}]`)):z({request:t,url:Id(t,a),pattern:o,params:r.params,context:f},...Q!==void 0?[Q]:[]),K=(async()=>{try{return{type:"data",result:await(g?g(ie=>B(ie)):B())}}catch(Q){return{type:"error",result:Q}}})();return Promise.race([K,q])};try{let z=E?r.route.action:r.route.loader;if(c||p)if(z){let H,[q]=await Promise.all([J(z).catch(B=>{H=B}),c,p]);if(H!==void 0)throw H;m=q}else{await c;let H=E?r.route.action:r.route.loader;if(H)[m]=await Promise.all([J(H),p]);else if(w==="action"){let q=new URL(t.url),B=q.pathname+q.search;throw Dl(405,{method:t.method,pathname:B,routeId:r.route.id})}else return{type:"data",result:void 0}}else if(z)m=await J(z);else{let H=new URL(t.url),q=H.pathname+H.search;throw Dl(404,{pathname:q})}}catch(z){return{type:"error",result:z}}finally{_&&t.signal.removeEventListener("abort",_)}return m}async function bm(t){let a=t.headers.get("Content-Type");return a&&/\bapplication\/json\b/.test(a)?t.body==null?null:t.json():t.text()}async function Cm(t){var r,c,p,g,f;let{result:a,type:o}=t;if(Mu(a)){let m;try{m=await bm(a)}catch(_){return{type:"error",error:_}}return o==="error"?{type:"error",error:new fn(a.status,a.statusText,m),statusCode:a.status,headers:a.headers}:{type:"data",data:m,statusCode:a.status,headers:a.headers}}return o==="error"?Op(a)?a.data instanceof Error?{type:"error",error:a.data,statusCode:(r=a.init)==null?void 0:r.status,headers:(c=a.init)!=null&&c.headers?new Headers(a.init.headers):void 0}:{type:"error",error:Pm(a),statusCode:dn(a)?a.status:void 0,headers:(p=a.init)!=null&&p.headers?new Headers(a.init.headers):void 0}:{type:"error",error:a,statusCode:dn(a)?a.status:void 0}:Op(a)?{type:"data",data:a.data,statusCode:(g=a.init)==null?void 0:g.status,headers:(f=a.init)!=null&&f.headers?new Headers(a.init.headers):void 0}:{type:"data",data:a}}function Lm(t,a,o,r,c){let p=t.headers.get("Location");if(Ce(p,"Redirects returned/thrown from loaders/actions must have a Location header"),!qu(p)){let g=r.slice(0,r.findIndex(f=>f.route.id===o)+1);p=Pu(new URL(a.url),g,c,p),t.headers.set("Location",p)}return t}var Bp=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Ap(t,a,o,r){if(qu(t)){let c=t,p=c.startsWith("//")?new URL(a.protocol+c):new URL(c);if(Bp.includes(p.protocol))throw new Error("Invalid redirect location");let g=$l(p.pathname,o)!=null;if(p.origin===a.origin&&g)return Bu(p.pathname)+p.search+p.hash}try{let c=r.createURL(t);if(Bp.includes(c.protocol))throw new Error("Invalid redirect location")}catch{}return t}function ct(t,a,o,r){let c=t.createURL(Gd(a)).toString(),p={signal:o};if(r&&jl(r.formMethod)){let{formMethod:g,formEncType:f}=r;p.method=g.toUpperCase(),f==="application/json"?(p.headers=new Headers({"Content-Type":f}),p.body=JSON.stringify(r.json)):f==="text/plain"?p.body=r.text:f==="application/x-www-form-urlencoded"&&r.formData?p.body=zu(r.formData):p.body=r.formData}return new Request(c,p)}function Id(t,a){let o=new URL(t.url),r=typeof a=="string"?vs(a):a;if(o.pathname=r.pathname||"/",r.search){let c=new URLSearchParams(r.search),p=c.getAll("index");c.delete("index");for(let g of p.filter(Boolean))c.append("index",g);o.search=c.size?`?${c.toString()}`:""}else o.search="";return o.hash=r.hash||"",o}function zu(t){let a=new URLSearchParams;for(let[o,r]of t.entries())a.append(o,typeof r=="string"?r:r.name);return a}function Mp(t){let a=new FormData;for(let[o,r]of t.entries())a.append(o,r);return a}function Im(t,a,o,r=!1,c=!1){let p={},g=null,f,m=!1,_={},E=o&&ql(o[1])?o[1].error:void 0;return t.forEach(w=>{if(!(w.route.id in a))return;let J=w.route.id,z=a[J];if(Ce(!Li(z),"Cannot handle redirect results in processLoaderData"),ql(z)){let H=z.error;if(E!==void 0&&(H=E,E=void 0),g=g||{},c)g[J]=H;else{let q=ri(t,J);g[q.route.id]==null&&(g[q.route.id]=H)}r||(p[J]=xd),m||(m=!0,f=dn(z.error)?z.error.status:500),z.headers&&(_[J]=z.headers)}else p[J]=z.data,z.statusCode&&z.statusCode!==200&&!m&&(f=z.statusCode),z.headers&&(_[J]=z.headers)}),E!==void 0&&o&&(g={[o[0]]:E},o[2]&&(p[o[2]]=void 0)),{loaderData:p,errors:g,statusCode:f||200,loaderHeaders:_}}function Hp(t,a,o,r,c,p,g){let{loaderData:f,errors:m}=Im(a,o,r);return c.filter(_=>!_.matches||_.matches.some(E=>E.shouldLoad)).forEach(_=>{let{key:E,match:w,controller:J}=_;if(J&&J.signal.aborted)return;let z=p[E];if(Ce(z,"Did not find corresponding fetcher result"),ql(z)){let H=ri(t.matches,w==null?void 0:w.route.id);m&&m[H.route.id]||(m={...m,[H.route.id]:z.error}),g.delete(E)}else if(Li(z))Ce(!1,"Unhandled fetcher revalidation redirect");else{let H=js(z.data);g.set(E,H)}}),{loaderData:f,errors:m}}function Tp(t,a,o,r){let c=Object.entries(a).filter(([,p])=>p!==xd).reduce((p,[g,f])=>(p[g]=f,p),{});for(let p of o){let g=p.route.id;if(!a.hasOwnProperty(g)&&t.hasOwnProperty(g)&&p.route.loader&&(c[g]=t[g]),r&&r.hasOwnProperty(g))break}return c}function Rp(t){return t?ql(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function ri(t,a){return(a?t.slice(0,t.findIndex(r=>r.route.id===a)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function ba(t){let a=t.length===1?t[0]:t.find(o=>o.index||!o.path||o.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:a}],route:a}}function Dl(t,{pathname:a,routeId:o,method:r,type:c,message:p}={}){let g="Unknown Server Error",f="Unknown @remix-run/router error";return t===400?(g="Bad Request",r&&a&&o?f=`You made a ${r} request to "${a}" but did not provide a \`loader\` for route "${o}", so there is no way to handle the request.`:c==="invalid-body"&&(f="Unable to encode submission body")):t===403?(g="Forbidden",f=`Route "${o}" does not match URL "${a}"`):t===404?(g="Not Found",f=`No route matches URL "${a}"`):t===405&&(g="Method Not Allowed",r&&a&&o?f=`You made a ${r.toUpperCase()} request to "${a}" but did not provide an \`action\` for route "${o}", so there is no way to handle the request.`:r&&(f=`Invalid request method "${r.toUpperCase()}"`)),new fn(t||500,g,new Error(f),!0)}function Ca(t){let a=Object.entries(t);for(let o=a.length-1;o>=0;o--){let[r,c]=a[o];if(Li(c))return{key:r,result:c}}}function Gd(t){let a=typeof t=="string"?vs(t):t;return Ss({...a,hash:""})}function Gm(t,a){return t.pathname!==a.pathname||t.search!==a.search?!1:t.hash===""?a.hash!=="":t.hash===a.hash?!0:a.hash!==""}function Pm(t){var a,o;return new fn(((a=t.init)==null?void 0:a.status)??500,((o=t.init)==null?void 0:o.statusText)??"Internal Server Error",t.data)}function Jm(t){return t!=null&&typeof t=="object"&&Object.entries(t).every(([a,o])=>typeof a=="string"&&zm(o))}function zm(t){return t!=null&&typeof t=="object"&&"type"in t&&"result"in t&&(t.type==="data"||t.type==="error")}function Um(t){return Mu(t.result)&&vd.has(t.result.status)}function ql(t){return t.type==="error"}function Li(t){return(t&&t.type)==="redirect"}function Op(t){return typeof t=="object"&&t!=null&&"type"in t&&"data"in t&&"init"in t&&t.type==="DataWithResponseInit"}function Mu(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function qm(t){return vd.has(t)}function Bm(t){return Mu(t)&&qm(t.status)&&t.headers.has("Location")}function Am(t){return dm.has(t.toUpperCase())}function jl(t){return cm.has(t.toUpperCase())}function Hu(t){return new URLSearchParams(t).getAll("index").some(a=>a==="")}function Ja(t,a){let o=typeof a=="string"?vs(a).search:a.search;if(t[t.length-1].route.index&&Hu(o||""))return t[t.length-1];let r=md(t);return r[r.length-1]}function Np(t){let{formMethod:a,formAction:o,formEncType:r,text:c,formData:p,json:g}=t;if(!(!a||!o||!r)){if(c!=null)return{formMethod:a,formAction:o,formEncType:r,formData:void 0,json:void 0,text:c};if(p!=null)return{formMethod:a,formAction:o,formEncType:r,formData:p,json:void 0,text:void 0};if(g!==void 0)return{formMethod:a,formAction:o,formEncType:r,formData:void 0,json:g,text:void 0}}}function Eu(t,a,o,r){return r?{state:"loading",location:t,matches:a,historyAction:o,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}:{state:"loading",location:t,matches:a,historyAction:o,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Mm(t,a,o,r){return{state:"submitting",location:t,matches:a,historyAction:o,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}}function ln(t,a){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:a}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:a}}function Hm(t,a){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:a?a.data:void 0}}function js(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Tm(t,a){try{let o=t.sessionStorage.getItem(wd);if(o){let r=JSON.parse(o);for(let[c,p]of Object.entries(r||{}))p&&Array.isArray(p)&&a.set(c,new Set(p||[]))}}catch{}}function Rm(t,a){if(a.size>0){let o={};for(let[r,c]of a)o[r]=[...c];try{t.sessionStorage.setItem(wd,JSON.stringify(o))}catch(r){ll(!1,`Failed to save applied view transitions in sessionStorage (${r}).`)}}}function Fp(){let t,a,o=new Promise((r,c)=>{t=async p=>{r(p);try{await o}catch{}},a=async p=>{c(p);try{await o}catch{}}});return{promise:o,resolve:t,reject:a}}var Ii=C.createContext(null);Ii.displayName="DataRouter";var hn=C.createContext(null);hn.displayName="DataRouterState";var Pd=C.createContext(!1);function Jd(){return C.useContext(Pd)}var Tu=C.createContext({isTransitioning:!1});Tu.displayName="ViewTransition";var zd=C.createContext(new Map);zd.displayName="Fetchers";var Om=C.createContext(null);Om.displayName="Await";var Bl=C.createContext(null);Bl.displayName="Navigation";var Ma=C.createContext(null);Ma.displayName="Location";var as=C.createContext({outlet:null,matches:[],isDataRoute:!1});as.displayName="Route";var Ru=C.createContext(null);Ru.displayName="RouteError";var Ud="REACT_ROUTER_ERROR",Nm="REDIRECT",Fm="ROUTE_ERROR_RESPONSE";function Dm(t){if(t.startsWith(`${Ud}:${Nm}:{`))try{let a=JSON.parse(t.slice(28));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.location=="string"&&typeof a.reloadDocument=="boolean"&&typeof a.replace=="boolean")return a}catch{}}function Wm(t){if(t.startsWith(`${Ud}:${Fm}:{`))try{let a=JSON.parse(t.slice(40));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string")return new fn(a.status,a.statusText,a.data)}catch{}}function $m(t,{relative:a}={}){Ce(gt(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:r}=C.useContext(Bl),{hash:c,pathname:p,search:g}=_n(t,{relative:a}),f=p;return o!=="/"&&(f=p==="/"?o:Wl([o,p])),r.createHref({pathname:f,search:g,hash:c})}function gt(){return C.useContext(Ma)!=null}function os(){return Ce(gt(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(Ma).location}var qd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Bd(t){C.useContext(Bl).static||C.useLayoutEffect(t)}function Ou(){let{isDataRoute:t}=C.useContext(as);return t?oh():Vm()}function Vm(){Ce(gt(),"useNavigate() may be used only in the context of a <Router> component.");let t=C.useContext(Ii),{basename:a,navigator:o}=C.useContext(Bl),{matches:r}=C.useContext(as),{pathname:c}=os(),p=JSON.stringify(Aa(r)),g=C.useRef(!1);return Bd(()=>{g.current=!0}),C.useCallback((m,_={})=>{if(ll(g.current,qd),!g.current)return;if(typeof m=="number"){o.go(m);return}let E=gn(m,JSON.parse(p),c,_.relative==="path");t==null&&a!=="/"&&(E.pathname=E.pathname==="/"?a:Wl([a,E.pathname])),(_.replace?o.replace:o.push)(E,_.state,_)},[a,o,p,c,t])}C.createContext(null);function Km(){let{matches:t}=C.useContext(as),a=t[t.length-1];return(a==null?void 0:a.params)??{}}function _n(t,{relative:a}={}){let{matches:o}=C.useContext(as),{pathname:r}=os(),c=JSON.stringify(Aa(o));return C.useMemo(()=>gn(t,JSON.parse(c),r,a==="path"),[t,c,r,a])}function Qm(t,a,o){Ce(gt(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=C.useContext(Bl),{matches:c}=C.useContext(as),p=c[c.length-1],g=p?p.params:{},f=p?p.pathname:"/",m=p?p.pathnameBase:"/",_=p&&p.route;{let B=_&&_.path||"";Md(f,!_||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let E=os(),w;w=E;let J=w.pathname||"/",z=J;if(m!=="/"){let B=m.replace(/^\//,"").split("/");z="/"+J.replace(/^\//,"").split("/").slice(B.length).join("/")}let H=o&&o.state.matches.length?o.state.matches.map(B=>Object.assign(B,{route:o.manifest[B.route.id]||B.route})):pd(t,{pathname:z});return ll(_||H!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),ll(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),lh(H&&H.map(B=>Object.assign({},B,{params:Object.assign({},g,B.params),pathname:Wl([m,r.encodeLocation?r.encodeLocation(B.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?m:Wl([m,r.encodeLocation?r.encodeLocation(B.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:B.pathnameBase])})),c,o)}function Ym(){let t=ah(),a=dn(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),o=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:r},p={padding:"2px 4px",backgroundColor:r},g=null;return console.error("Error handled by React Router default ErrorBoundary:",t),g=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:p},"ErrorBoundary")," or"," ",C.createElement("code",{style:p},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},a),o?C.createElement("pre",{style:c},o):null,g)}var Xm=C.createElement(Ym,null),Ad=class extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,a){return a.location!==t.location||a.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:a.error,location:a.location,revalidation:t.revalidation||a.revalidation}}componentDidCatch(t,a){this.props.onError?this.props.onError(t,a):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const o=Wm(t.digest);o&&(t=o)}let a=t!==void 0?C.createElement(as.Provider,{value:this.props.routeContext},C.createElement(Ru.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?C.createElement(Zm,{error:t},a):a}};Ad.contextType=Pd;var ku=new WeakMap;function Zm({children:t,error:a}){let{basename:o}=C.useContext(Bl);if(typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){let r=Dm(a.digest);if(r){let c=ku.get(a);if(c)throw c;let p=_d(r.location,o);if(hd&&!ku.get(a))if(p.isExternal||r.reloadDocument)window.location.href=p.absoluteURL||p.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:r.replace}));throw ku.set(a,g),g}return C.createElement("meta",{httpEquiv:"refresh",content:`0;url=${p.absoluteURL||p.to}`})}}return t}function eh({routeContext:t,match:a,children:o}){let r=C.useContext(Ii);return r&&r.static&&r.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=a.route.id),C.createElement(as.Provider,{value:t},o)}function lh(t,a=[],o){let r=o==null?void 0:o.state;if(t==null){if(!r)return null;if(r.errors)t=r.matches;else if(a.length===0&&!r.initialized&&r.matches.length>0)t=r.matches;else return null}let c=t,p=r==null?void 0:r.errors;if(p!=null){let E=c.findIndex(w=>w.route.id&&(p==null?void 0:p[w.route.id])!==void 0);Ce(E>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),c=c.slice(0,Math.min(c.length,E+1))}let g=!1,f=-1;if(o&&r){g=r.renderFallback;for(let E=0;E<c.length;E++){let w=c[E];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(f=E),w.route.id){let{loaderData:J,errors:z}=r,H=w.route.loader&&!J.hasOwnProperty(w.route.id)&&(!z||z[w.route.id]===void 0);if(w.route.lazy||H){o.isStatic&&(g=!0),f>=0?c=c.slice(0,f+1):c=[c[0]];break}}}}let m=o==null?void 0:o.onError,_=r&&m?(E,w)=>{var J,z;m(E,{location:r.location,params:((z=(J=r.matches)==null?void 0:J[0])==null?void 0:z.params)??{},pattern:mn(r.matches),errorInfo:w})}:void 0;return c.reduceRight((E,w,J)=>{let z,H=!1,q=null,B=null;r&&(z=p&&w.route.id?p[w.route.id]:void 0,q=w.route.errorElement||Xm,g&&(f<0&&J===0?(Md("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),H=!0,B=null):f===J&&(H=!0,B=w.route.hydrateFallbackElement||null)));let K=a.concat(c.slice(0,J+1)),Q=()=>{let ie;return z?ie=q:H?ie=B:w.route.Component?ie=C.createElement(w.route.Component,null):w.route.element?ie=w.route.element:ie=E,C.createElement(eh,{match:w,routeContext:{outlet:E,matches:K,isDataRoute:r!=null},children:ie})};return r&&(w.route.ErrorBoundary||w.route.errorElement||J===0)?C.createElement(Ad,{location:r.location,revalidation:r.revalidation,component:q,error:z,children:Q(),routeContext:{outlet:null,matches:K,isDataRoute:!0},onError:_}):Q()},null)}function Nu(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sh(t){let a=C.useContext(Ii);return Ce(a,Nu(t)),a}function ih(t){let a=C.useContext(hn);return Ce(a,Nu(t)),a}function th(t){let a=C.useContext(as);return Ce(a,Nu(t)),a}function Fu(t){let a=th(t),o=a.matches[a.matches.length-1];return Ce(o.route.id,`${t} can only be used on routes that contain a unique "id"`),o.route.id}function nh(){return Fu("useRouteId")}function ah(){var r;let t=C.useContext(Ru),a=ih("useRouteError"),o=Fu("useRouteError");return t!==void 0?t:(r=a.errors)==null?void 0:r[o]}function oh(){let{router:t}=sh("useNavigate"),a=Fu("useNavigate"),o=C.useRef(!1);return Bd(()=>{o.current=!0}),C.useCallback(async(c,p={})=>{ll(o.current,qd),o.current&&(typeof c=="number"?await t.navigate(c):await t.navigate(c,{fromRouteId:a,...p}))},[t,a])}var Dp={};function Md(t,a,o){!a&&!Dp[t]&&(Dp[t]=!0,ll(!1,o))}var Wp={};function $p(t,a){!t&&!Wp[a]&&(Wp[a]=!0,console.warn(a))}var uh="useOptimistic",Vp=Pf[uh],rh=()=>{};function ch(t){return Vp?Vp(t):[t,rh]}function ph(t){let a={hasErrorBoundary:t.hasErrorBoundary||t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&(t.element&&ll(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(a,{element:C.createElement(t.Component),Component:void 0})),t.HydrateFallback&&(t.hydrateFallbackElement&&ll(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(a,{hydrateFallbackElement:C.createElement(t.HydrateFallback),HydrateFallback:void 0})),t.ErrorBoundary&&(t.errorElement&&ll(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(a,{errorElement:C.createElement(t.ErrorBoundary),ErrorBoundary:void 0})),a}var dh=["HydrateFallback","hydrateFallbackElement"],gh=class{constructor(){this.status="pending",this.promise=new Promise((t,a)=>{this.resolve=o=>{this.status==="pending"&&(this.status="resolved",t(o))},this.reject=o=>{this.status==="pending"&&(this.status="rejected",a(o))}})}};function fh({router:t,flushSync:a,onError:o,useTransitions:r}){r=Jd()||r;let[p,g]=C.useState(t.state),[f,m]=ch(p),[_,E]=C.useState(),[w,J]=C.useState({isTransitioning:!1}),[z,H]=C.useState(),[q,B]=C.useState(),[K,Q]=C.useState(),ie=C.useRef(new Map),de=C.useCallback((L,{deletedFetchers:ye,newErrors:ne,flushSync:Te,viewTransitionOpts:ke})=>{ne&&o&&Object.values(ne).forEach(Le=>{var ze;return o(Le,{location:L.location,params:((ze=L.matches[0])==null?void 0:ze.params)??{},pattern:mn(L.matches)})}),L.fetchers.forEach((Le,ze)=>{Le.data!==void 0&&ie.current.set(ze,Le.data)}),ye.forEach(Le=>ie.current.delete(Le)),$p(Te===!1||a!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let qe=t.window!=null&&t.window.document!=null&&typeof t.window.document.startViewTransition=="function";if($p(ke==null||qe,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!ke||!qe){a&&Te?a(()=>g(L)):r===!1?g(L):C.startTransition(()=>{r===!0&&m(Le=>Kp(Le,L)),g(L)});return}if(a&&Te){a(()=>{q&&(z==null||z.resolve(),q.skipTransition()),J({isTransitioning:!0,flushSync:!0,currentLocation:ke.currentLocation,nextLocation:ke.nextLocation})});let Le=t.window.document.startViewTransition(()=>{a(()=>g(L))});Le.finished.finally(()=>{a(()=>{H(void 0),B(void 0),E(void 0),J({isTransitioning:!1})})}),a(()=>B(Le));return}q?(z==null||z.resolve(),q.skipTransition(),Q({state:L,currentLocation:ke.currentLocation,nextLocation:ke.nextLocation})):(E(L),J({isTransitioning:!0,flushSync:!1,currentLocation:ke.currentLocation,nextLocation:ke.nextLocation}))},[t.window,a,q,z,r,m,o]);C.useLayoutEffect(()=>t.subscribe(de),[t,de]),C.useEffect(()=>{w.isTransitioning&&!w.flushSync&&H(new gh)},[w]),C.useEffect(()=>{if(z&&_&&t.window){let L=_,ye=z.promise,ne=t.window.document.startViewTransition(async()=>{r===!1?g(L):C.startTransition(()=>{r===!0&&m(Te=>Kp(Te,L)),g(L)}),await ye});ne.finished.finally(()=>{H(void 0),B(void 0),E(void 0),J({isTransitioning:!1})}),B(ne)}},[_,z,t.window,r,m]),C.useEffect(()=>{z&&_&&f.location.key===_.location.key&&z.resolve()},[z,q,f.location,_]),C.useEffect(()=>{!w.isTransitioning&&K&&(E(K.state),J({isTransitioning:!0,flushSync:!1,currentLocation:K.currentLocation,nextLocation:K.nextLocation}),Q(void 0))},[w.isTransitioning,K]);let ce=C.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:L=>t.navigate(L),push:(L,ye,ne)=>t.navigate(L,{state:ye,preventScrollReset:ne==null?void 0:ne.preventScrollReset}),replace:(L,ye,ne)=>t.navigate(L,{replace:!0,state:ye,preventScrollReset:ne==null?void 0:ne.preventScrollReset})}),[t]),ve=t.basename||"/",Ee=C.useMemo(()=>({router:t,navigator:ce,static:!1,basename:ve,onError:o}),[t,ce,ve,o]);return C.createElement(C.Fragment,null,C.createElement(Ii.Provider,{value:Ee},C.createElement(hn.Provider,{value:f},C.createElement(zd.Provider,{value:ie.current},C.createElement(Tu.Provider,{value:w},C.createElement(jh,{basename:ve,location:f.location,navigationType:f.historyAction,navigator:ce,useTransitions:r},C.createElement(mh,{routes:t.routes,manifest:t.manifest,future:t.future,state:f,isStatic:!1,onError:o})))))),null)}function Kp(t,a){return{...t,navigation:a.navigation.state!=="idle"?a.navigation:t.navigation,revalidation:a.revalidation!=="idle"?a.revalidation:t.revalidation,actionData:a.navigation.state!=="submitting"?a.actionData:t.actionData,fetchers:a.fetchers}}var mh=C.memo(hh);function hh({routes:t,manifest:a,future:o,state:r,isStatic:c,onError:p}){return Qm(t,void 0,{manifest:a,state:r,isStatic:c,onError:p})}function _h({to:t,replace:a,state:o,relative:r}){Ce(gt(),"<Navigate> may be used only in the context of a <Router> component.");let{static:c}=C.useContext(Bl);ll(!c,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:p}=C.useContext(as),{pathname:g}=os(),f=Ou(),m=gn(t,Aa(p),g,r==="path"),_=JSON.stringify(m);return C.useEffect(()=>{f(JSON.parse(_),{replace:a,state:o,relative:r})},[f,_,r,a,o]),null}function jh({basename:t="/",children:a=null,location:o,navigationType:r="POP",navigator:c,static:p=!1,useTransitions:g}){Ce(!gt(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=t.replace(/^\/*/,"/"),m=C.useMemo(()=>({basename:f,navigator:c,static:p,useTransitions:g,future:{}}),[f,c,p,g]);typeof o=="string"&&(o=vs(o));let{pathname:_="/",search:E="",hash:w="",state:J=null,key:z="default",mask:H}=o,q=C.useMemo(()=>{let B=$l(_,f);return B==null?null:{location:{pathname:B,search:E,hash:w,state:J,key:z,mask:H},navigationType:r}},[f,_,E,w,J,z,r,H]);return ll(q!=null,`<Router basename="${f}"> is not able to match the URL "${_}${E}${w}" because it does not start with the basename, so the <Router> won't render anything.`),q==null?null:C.createElement(Bl.Provider,{value:m},C.createElement(Ma.Provider,{children:a,value:q}))}var za="get",Ua="application/x-www-form-urlencoded";function Ha(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function Sh(t){return Ha(t)&&t.tagName.toLowerCase()==="button"}function vh(t){return Ha(t)&&t.tagName.toLowerCase()==="form"}function wh(t){return Ha(t)&&t.tagName.toLowerCase()==="input"}function xh(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function yh(t,a){return t.button===0&&(!a||a==="_self")&&!xh(t)}var La=null;function Eh(){if(La===null)try{new FormData(document.createElement("form"),0),La=!1}catch{La=!0}return La}var kh=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function bu(t){return t!=null&&!kh.has(t)?(ll(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ua}"`),null):t}function bh(t,a){let o,r,c,p,g;if(vh(t)){let f=t.getAttribute("action");r=f?$l(f,a):null,o=t.getAttribute("method")||za,c=bu(t.getAttribute("enctype"))||Ua,p=new FormData(t)}else if(Sh(t)||wh(t)&&(t.type==="submit"||t.type==="image")){let f=t.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=t.getAttribute("formaction")||f.getAttribute("action");if(r=m?$l(m,a):null,o=t.getAttribute("formmethod")||f.getAttribute("method")||za,c=bu(t.getAttribute("formenctype"))||bu(f.getAttribute("enctype"))||Ua,p=new FormData(f,t),!Eh()){let{name:_,type:E,value:w}=t;if(E==="image"){let J=_?`${_}.`:"";p.append(`${J}x`,"0"),p.append(`${J}y`,"0")}else _&&p.append(_,w)}}else{if(Ha(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=za,r=null,c=Ua,g=t}return p&&c==="text/plain"&&(g=p,p=void 0),{action:r,method:o.toLowerCase(),encType:c,formData:p,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Du(t,a){if(t===!1||t===null||typeof t>"u")throw new Error(a)}function Hd(t,a,o,r){let c=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return o?c.pathname.endsWith("/")?c.pathname=`${c.pathname}_.${r}`:c.pathname=`${c.pathname}.${r}`:c.pathname==="/"?c.pathname=`_root.${r}`:a&&$l(c.pathname,a)==="/"?c.pathname=`${Ba(a)}/_root.${r}`:c.pathname=`${Ba(c.pathname)}.${r}`,c}async function Ch(t,a){if(t.id in a)return a[t.id];try{let o=await import(t.module);return a[t.id]=o,o}catch(o){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Lh(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function Ih(t,a,o){let r=await Promise.all(t.map(async c=>{let p=a.routes[c.route.id];if(p){let g=await Ch(p,o);return g.links?g.links():[]}return[]}));return zh(r.flat(1).filter(Lh).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function Qp(t,a,o,r,c,p){let g=(m,_)=>o[_]?m.route.id!==o[_].route.id:!0,f=(m,_)=>{var E;return o[_].pathname!==m.pathname||((E=o[_].route.path)==null?void 0:E.endsWith("*"))&&o[_].params["*"]!==m.params["*"]};return p==="assets"?a.filter((m,_)=>g(m,_)||f(m,_)):p==="data"?a.filter((m,_)=>{var w;let E=r.routes[m.route.id];if(!E||!E.hasLoader)return!1;if(g(m,_)||f(m,_))return!0;if(m.route.shouldRevalidate){let J=m.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((w=o[0])==null?void 0:w.params)||{},nextUrl:new URL(t,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof J=="boolean")return J}return!0}):[]}function Gh(t,a,{includeHydrateFallback:o}={}){return Ph(t.map(r=>{let c=a.routes[r.route.id];if(!c)return[];let p=[c.module];return c.clientActionModule&&(p=p.concat(c.clientActionModule)),c.clientLoaderModule&&(p=p.concat(c.clientLoaderModule)),o&&c.hydrateFallbackModule&&(p=p.concat(c.hydrateFallbackModule)),c.imports&&(p=p.concat(c.imports)),p}).flat(1))}function Ph(t){return[...new Set(t)]}function Jh(t){let a={},o=Object.keys(t).sort();for(let r of o)a[r]=t[r];return a}function zh(t,a){let o=new Set;return new Set(a),t.reduce((r,c)=>{let p=JSON.stringify(Jh(c));return o.has(p)||(o.add(p),r.push({key:p,link:c})),r},[])}function Wu(){let t=C.useContext(Ii);return Du(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Uh(){let t=C.useContext(hn);return Du(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var $u=C.createContext(void 0);$u.displayName="FrameworkContext";function Vu(){let t=C.useContext($u);return Du(t,"You must render this element inside a <HydratedRouter> element"),t}function qh(t,a){let o=C.useContext($u),[r,c]=C.useState(!1),[p,g]=C.useState(!1),{onFocus:f,onBlur:m,onMouseEnter:_,onMouseLeave:E,onTouchStart:w}=a,J=C.useRef(null);C.useEffect(()=>{if(t==="render"&&g(!0),t==="viewport"){let q=K=>{K.forEach(Q=>{g(Q.isIntersecting)})},B=new IntersectionObserver(q,{threshold:.5});return J.current&&B.observe(J.current),()=>{B.disconnect()}}},[t]),C.useEffect(()=>{if(r){let q=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(q)}}},[r]);let z=()=>{c(!0)},H=()=>{c(!1),g(!1)};return o?t!=="intent"?[p,J,{}]:[p,J,{onFocus:sn(f,z),onBlur:sn(m,H),onMouseEnter:sn(_,z),onMouseLeave:sn(E,H),onTouchStart:sn(w,z)}]:[!1,J,{}]}function sn(t,a){return o=>{t&&t(o),o.defaultPrevented||a(o)}}function Bh({page:t,...a}){let o=Jd(),{router:r}=Wu(),c=C.useMemo(()=>pd(r.routes,t,r.basename),[r.routes,t,r.basename]);return c?o?C.createElement(Mh,{page:t,matches:c,...a}):C.createElement(Hh,{page:t,matches:c,...a}):null}function Ah(t){let{manifest:a,routeModules:o}=Vu(),[r,c]=C.useState([]);return C.useEffect(()=>{let p=!1;return Ih(t,a,o).then(g=>{p||c(g)}),()=>{p=!0}},[t,a,o]),r}function Mh({page:t,matches:a,...o}){let r=os(),{future:c}=Vu(),{basename:p}=Wu(),g=C.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let f=Hd(t,p,c.v8_trailingSlashAwareDataRequests,"rsc"),m=!1,_=[];for(let E of a)typeof E.route.shouldRevalidate=="function"?m=!0:_.push(E.route.id);return m&&_.length>0&&f.searchParams.set("_routes",_.join(",")),[f.pathname+f.search]},[p,c.v8_trailingSlashAwareDataRequests,t,r,a]);return C.createElement(C.Fragment,null,g.map(f=>C.createElement("link",{key:f,rel:"prefetch",as:"fetch",href:f,...o})))}function Hh({page:t,matches:a,...o}){let r=os(),{future:c,manifest:p,routeModules:g}=Vu(),{basename:f}=Wu(),{loaderData:m,matches:_}=Uh(),E=C.useMemo(()=>Qp(t,a,_,p,r,"data"),[t,a,_,p,r]),w=C.useMemo(()=>Qp(t,a,_,p,r,"assets"),[t,a,_,p,r]),J=C.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let q=new Set,B=!1;if(a.forEach(Q=>{var de;let ie=p.routes[Q.route.id];!ie||!ie.hasLoader||(!E.some(ce=>ce.route.id===Q.route.id)&&Q.route.id in m&&((de=g[Q.route.id])!=null&&de.shouldRevalidate)||ie.hasClientLoader?B=!0:q.add(Q.route.id))}),q.size===0)return[];let K=Hd(t,f,c.v8_trailingSlashAwareDataRequests,"data");return B&&q.size>0&&K.searchParams.set("_routes",a.filter(Q=>q.has(Q.route.id)).map(Q=>Q.route.id).join(",")),[K.pathname+K.search]},[f,c.v8_trailingSlashAwareDataRequests,m,r,p,E,a,t,g]),z=C.useMemo(()=>Gh(w,p),[w,p]),H=Ah(w);return C.createElement(C.Fragment,null,J.map(q=>C.createElement("link",{key:q,rel:"prefetch",as:"fetch",href:q,...o})),z.map(q=>C.createElement("link",{key:q,rel:"modulepreload",href:q,...o})),H.map(({key:q,link:B})=>C.createElement("link",{key:q,nonce:o.nonce,...B,crossOrigin:B.crossOrigin??o.crossOrigin})))}function Th(...t){return a=>{t.forEach(o=>{typeof o=="function"?o(a):o!=null&&(o.current=a)})}}var Rh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Rh&&(window.__reactRouterVersion="7.17.0")}catch{}function Oh(t,a){return _m({basename:a==null?void 0:a.basename,getContext:a==null?void 0:a.getContext,future:a==null?void 0:a.future,history:Jf({window:a==null?void 0:a.window}),hydrationData:Nh(),routes:t,mapRouteProperties:ph,hydrationRouteProperties:dh,dataStrategy:a==null?void 0:a.dataStrategy,patchRoutesOnNavigation:a==null?void 0:a.patchRoutesOnNavigation,window:a==null?void 0:a.window,instrumentations:a==null?void 0:a.instrumentations}).initialize()}function Nh(){let t=window==null?void 0:window.__staticRouterHydrationData;return t&&t.errors&&(t={...t,errors:Fh(t.errors)}),t}function Fh(t){if(!t)return null;let a=Object.entries(t),o={};for(let[r,c]of a)if(c&&c.__type==="RouteErrorResponse")o[r]=new fn(c.status,c.statusText,c.data,c.internal===!0);else if(c&&c.__type==="Error"){if(c.__subType){let p=window[c.__subType];if(typeof p=="function")try{let g=new p(c.message);g.stack="",o[r]=g}catch{}}if(o[r]==null){let p=new Error(c.message);p.stack="",o[r]=p}}else o[r]=c;return o}var Td=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rd=C.forwardRef(function({onClick:a,discover:o="render",prefetch:r="none",relative:c,reloadDocument:p,replace:g,mask:f,state:m,target:_,to:E,preventScrollReset:w,viewTransition:J,defaultShouldRevalidate:z,...H},q){let{basename:B,navigator:K,useTransitions:Q}=C.useContext(Bl),ie=typeof E=="string"&&Td.test(E),de=_d(E,B);E=de.to;let ce=$m(E,{relative:c}),ve=os(),Ee=null;if(f){let ze=gn(f,[],ve.mask?ve.mask.pathname:"/",!0);B!=="/"&&(ze.pathname=ze.pathname==="/"?B:Wl([B,ze.pathname])),Ee=K.createHref(ze)}let[L,ye,ne]=qh(r,H),Te=Vh(E,{replace:g,mask:f,state:m,target:_,preventScrollReset:w,relative:c,viewTransition:J,defaultShouldRevalidate:z,useTransitions:Q});function ke(ze){a&&a(ze),ze.defaultPrevented||Te(ze)}let qe=!(de.isExternal||p),Le=C.createElement("a",{...H,...ne,href:(qe?Ee:void 0)||de.absoluteURL||ce,onClick:qe?ke:a,ref:Th(q,ye),target:_,"data-discover":!ie&&o==="render"?"true":void 0});return L&&!ie?C.createElement(C.Fragment,null,Le,C.createElement(Bh,{page:ce})):Le});Rd.displayName="Link";var Dh=C.forwardRef(function({"aria-current":a="page",caseSensitive:o=!1,className:r="",end:c=!1,style:p,to:g,viewTransition:f,children:m,..._},E){let w=_n(g,{relative:_.relative}),J=os(),z=C.useContext(hn),{navigator:H,basename:q}=C.useContext(Bl),B=z!=null&&Zh(w)&&f===!0,K=H.encodeLocation?H.encodeLocation(w).pathname:w.pathname,Q=J.pathname,ie=z&&z.navigation&&z.navigation.location?z.navigation.location.pathname:null;o||(Q=Q.toLowerCase(),ie=ie?ie.toLowerCase():null,K=K.toLowerCase()),ie&&q&&(ie=$l(ie,q)||ie);const de=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let ce=Q===K||!c&&Q.startsWith(K)&&Q.charAt(de)==="/",ve=ie!=null&&(ie===K||!c&&ie.startsWith(K)&&ie.charAt(K.length)==="/"),Ee={isActive:ce,isPending:ve,isTransitioning:B},L=ce?a:void 0,ye;typeof r=="function"?ye=r(Ee):ye=[r,ce?"active":null,ve?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let ne=typeof p=="function"?p(Ee):p;return C.createElement(Rd,{..._,"aria-current":L,className:ye,ref:E,style:ne,to:g,viewTransition:f},typeof m=="function"?m(Ee):m)});Dh.displayName="NavLink";var Wh=C.forwardRef(({discover:t="render",fetcherKey:a,navigate:o,reloadDocument:r,replace:c,state:p,method:g=za,action:f,onSubmit:m,relative:_,preventScrollReset:E,viewTransition:w,defaultShouldRevalidate:J,...z},H)=>{let{useTransitions:q}=C.useContext(Bl),B=Yh(),K=Xh(f,{relative:_}),Q=g.toLowerCase()==="get"?"get":"post",ie=typeof f=="string"&&Td.test(f),de=ce=>{if(m&&m(ce),ce.defaultPrevented)return;ce.preventDefault();let ve=ce.nativeEvent.submitter,Ee=(ve==null?void 0:ve.getAttribute("formmethod"))||g,L=()=>B(ve||ce.currentTarget,{fetcherKey:a,method:Ee,navigate:o,replace:c,state:p,relative:_,preventScrollReset:E,viewTransition:w,defaultShouldRevalidate:J});q&&o!==!1?C.startTransition(()=>L()):L()};return C.createElement("form",{ref:H,method:Q,action:K,onSubmit:r?m:de,...z,"data-discover":!ie&&t==="render"?"true":void 0})});Wh.displayName="Form";function $h(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Od(t){let a=C.useContext(Ii);return Ce(a,$h(t)),a}function Vh(t,{target:a,replace:o,mask:r,state:c,preventScrollReset:p,relative:g,viewTransition:f,defaultShouldRevalidate:m,useTransitions:_}={}){let E=Ou(),w=os(),J=_n(t,{relative:g});return C.useCallback(z=>{if(yh(z,a)){z.preventDefault();let H=o!==void 0?o:Ss(w)===Ss(J),q=()=>E(t,{replace:H,mask:r,state:c,preventScrollReset:p,relative:g,viewTransition:f,defaultShouldRevalidate:m});_?C.startTransition(()=>q()):q()}},[w,E,J,o,r,c,a,t,p,g,f,m,_])}var Kh=0,Qh=()=>`__${String(++Kh)}__`;function Yh(){let{router:t}=Od("useSubmit"),{basename:a}=C.useContext(Bl),o=nh(),r=t.fetch,c=t.navigate;return C.useCallback(async(p,g={})=>{let{action:f,method:m,encType:_,formData:E,body:w}=bh(p,a);if(g.navigate===!1){let J=g.fetcherKey||Qh();await r(J,o,g.action||f,{defaultShouldRevalidate:g.defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:E,body:w,formMethod:g.method||m,formEncType:g.encType||_,flushSync:g.flushSync})}else await c(g.action||f,{defaultShouldRevalidate:g.defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:E,body:w,formMethod:g.method||m,formEncType:g.encType||_,replace:g.replace,state:g.state,fromRouteId:o,flushSync:g.flushSync,viewTransition:g.viewTransition})},[r,c,a,o])}function Xh(t,{relative:a}={}){let{basename:o}=C.useContext(Bl),r=C.useContext(as);Ce(r,"useFormAction must be used inside a RouteContext");let[c]=r.matches.slice(-1),p={..._n(t||".",{relative:a})},g=os();if(t==null){p.search=g.search;let f=new URLSearchParams(p.search),m=f.getAll("index");if(m.some(E=>E==="")){f.delete("index"),m.filter(w=>w).forEach(w=>f.append("index",w));let E=f.toString();p.search=E?`?${E}`:""}}return(!t||t===".")&&c.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(p.pathname=p.pathname==="/"?o:Wl([o,p.pathname])),Ss(p)}function Zh(t,{relative:a}={}){let o=C.useContext(Tu);Ce(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Od("useViewTransitionState"),c=_n(t,{relative:a});if(!o.isTransitioning)return!1;let p=$l(o.currentLocation.pathname,r)||o.currentLocation.pathname,g=$l(o.nextLocation.pathname,r)||o.nextLocation.pathname;return qa(c.pathname,g)!=null||qa(c.pathname,p)!=null}var Cu={exports:{}},Il={},Lu={exports:{}},Iu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function e_(){return Yp||(Yp=1,(function(t){function a(F,Y){var V=F.length;F.push(Y);e:for(;0<V;){var x=V-1>>>1,M=F[x];if(0<c(M,Y))F[x]=Y,F[V]=M,V=x;else break e}}function o(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var Y=F[0],V=F.pop();if(V!==Y){F[0]=V;e:for(var x=0,M=F.length,ge=M>>>1;x<ge;){var he=2*(x+1)-1,k=F[he],A=he+1,$=F[A];if(0>c(k,V))A<M&&0>c($,k)?(F[x]=$,F[A]=V,x=A):(F[x]=k,F[he]=V,x=he);else if(A<M&&0>c($,V))F[x]=$,F[A]=V,x=A;else break e}}return Y}function c(F,Y){var V=F.sortIndex-Y.sortIndex;return V!==0?V:F.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;t.unstable_now=function(){return p.now()}}else{var g=Date,f=g.now();t.unstable_now=function(){return g.now()-f}}var m=[],_=[],E=1,w=null,J=3,z=!1,H=!1,q=!1,B=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ie(F){for(var Y=o(_);Y!==null;){if(Y.callback===null)r(_);else if(Y.startTime<=F)r(_),Y.sortIndex=Y.expirationTime,a(m,Y);else break;Y=o(_)}}function de(F){if(q=!1,ie(F),!H)if(o(m)!==null)H=!0,Ne(ce);else{var Y=o(_);Y!==null&&me(de,Y.startTime-F)}}function ce(F,Y){H=!1,q&&(q=!1,K(L),L=-1),z=!0;var V=J;try{for(ie(Y),w=o(m);w!==null&&(!(w.expirationTime>Y)||F&&!Te());){var x=w.callback;if(typeof x=="function"){w.callback=null,J=w.priorityLevel;var M=x(w.expirationTime<=Y);Y=t.unstable_now(),typeof M=="function"?w.callback=M:w===o(m)&&r(m),ie(Y)}else r(m);w=o(m)}if(w!==null)var ge=!0;else{var he=o(_);he!==null&&me(de,he.startTime-Y),ge=!1}return ge}finally{w=null,J=V,z=!1}}var ve=!1,Ee=null,L=-1,ye=5,ne=-1;function Te(){return!(t.unstable_now()-ne<ye)}function ke(){if(Ee!==null){var F=t.unstable_now();ne=F;var Y=!0;try{Y=Ee(!0,F)}finally{Y?qe():(ve=!1,Ee=null)}}else ve=!1}var qe;if(typeof Q=="function")qe=function(){Q(ke)};else if(typeof MessageChannel<"u"){var Le=new MessageChannel,ze=Le.port2;Le.port1.onmessage=ke,qe=function(){ze.postMessage(null)}}else qe=function(){B(ke,0)};function Ne(F){Ee=F,ve||(ve=!0,qe())}function me(F,Y){L=B(function(){F(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){H||z||(H=!0,Ne(ce))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ye=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return J},t.unstable_getFirstCallbackNode=function(){return o(m)},t.unstable_next=function(F){switch(J){case 1:case 2:case 3:var Y=3;break;default:Y=J}var V=J;J=Y;try{return F()}finally{J=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,Y){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var V=J;J=F;try{return Y()}finally{J=V}},t.unstable_scheduleCallback=function(F,Y,V){var x=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?x+V:x):V=x,F){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=V+M,F={id:E++,callback:Y,priorityLevel:F,startTime:V,expirationTime:M,sortIndex:-1},V>x?(F.sortIndex=V,a(_,F),o(m)===null&&F===o(_)&&(q?(K(L),L=-1):q=!0,me(de,V-x))):(F.sortIndex=M,a(m,F),H||z||(H=!0,Ne(ce))),F},t.unstable_shouldYield=Te,t.unstable_wrapCallback=function(F){var Y=J;return function(){var V=J;J=Y;try{return F.apply(this,arguments)}finally{J=V}}}})(Iu)),Iu}var Xp;function l_(){return Xp||(Xp=1,Lu.exports=e_()),Lu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function s_(){if(Zp)return Il;Zp=1;var t=Uu(),a=l_();function o(e){for(var l="https://reactjs.org/docs/error-decoder.html?invariant="+e,s=1;s<arguments.length;s++)l+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+e+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,c={};function p(e,l){g(e,l),g(e+"Capture",l)}function g(e,l){for(c[e]=l,e=0;e<l.length;e++)r.add(l[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},w={};function J(e){return m.call(w,e)?!0:m.call(E,e)?!1:_.test(e)?w[e]=!0:(E[e]=!0,!1)}function z(e,l,s,i){if(s!==null&&s.type===0)return!1;switch(typeof l){case"function":case"symbol":return!0;case"boolean":return i?!1:s!==null?!s.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function H(e,l,s,i){if(l===null||typeof l>"u"||z(e,l,s,i))return!0;if(i)return!1;if(s!==null)switch(s.type){case 3:return!l;case 4:return l===!1;case 5:return isNaN(l);case 6:return isNaN(l)||1>l}return!1}function q(e,l,s,i,n,u,d){this.acceptsBooleans=l===2||l===3||l===4,this.attributeName=i,this.attributeNamespace=n,this.mustUseProperty=s,this.propertyName=e,this.type=l,this.sanitizeURL=u,this.removeEmptyString=d}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){B[e]=new q(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var l=e[0];B[l]=new q(l,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){B[e]=new q(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){B[e]=new q(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){B[e]=new q(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){B[e]=new q(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){B[e]=new q(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){B[e]=new q(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){B[e]=new q(e,5,!1,e.toLowerCase(),null,!1,!1)});var K=/[\-:]([a-z])/g;function Q(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var l=e.replace(K,Q);B[l]=new q(l,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var l=e.replace(K,Q);B[l]=new q(l,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var l=e.replace(K,Q);B[l]=new q(l,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){B[e]=new q(e,1,!1,e.toLowerCase(),null,!1,!1)}),B.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){B[e]=new q(e,1,!1,e.toLowerCase(),null,!0,!0)});function ie(e,l,s,i){var n=B.hasOwnProperty(l)?B[l]:null;(n!==null?n.type!==0:i||!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(H(l,s,n,i)&&(s=null),i||n===null?J(l)&&(s===null?e.removeAttribute(l):e.setAttribute(l,""+s)):n.mustUseProperty?e[n.propertyName]=s===null?n.type===3?!1:"":s:(l=n.attributeName,i=n.attributeNamespace,s===null?e.removeAttribute(l):(n=n.type,s=n===3||n===4&&s===!0?"":""+s,i?e.setAttributeNS(i,l,s):e.setAttribute(l,s))))}var de=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ce=Symbol.for("react.element"),ve=Symbol.for("react.portal"),Ee=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),ye=Symbol.for("react.profiler"),ne=Symbol.for("react.provider"),Te=Symbol.for("react.context"),ke=Symbol.for("react.forward_ref"),qe=Symbol.for("react.suspense"),Le=Symbol.for("react.suspense_list"),ze=Symbol.for("react.memo"),Ne=Symbol.for("react.lazy"),me=Symbol.for("react.offscreen"),F=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,x;function M(e){if(x===void 0)try{throw Error()}catch(s){var l=s.stack.trim().match(/\n( *(at )?)/);x=l&&l[1]||""}return`
`+x+e}var ge=!1;function he(e,l){if(!e||ge)return"";ge=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(l)if(l=function(){throw Error()},Object.defineProperty(l.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(l,[])}catch(U){var i=U}Reflect.construct(e,[],l)}else{try{l.call()}catch(U){i=U}e.call(l.prototype)}else{try{throw Error()}catch(U){i=U}e()}}catch(U){if(U&&i&&typeof U.stack=="string"){for(var n=U.stack.split(`
`),u=i.stack.split(`
`),d=n.length-1,h=u.length-1;1<=d&&0<=h&&n[d]!==u[h];)h--;for(;1<=d&&0<=h;d--,h--)if(n[d]!==u[h]){if(d!==1||h!==1)do if(d--,h--,0>h||n[d]!==u[h]){var S=`
`+n[d].replace(" at new "," at ");return e.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",e.displayName)),S}while(1<=d&&0<=h);break}}}finally{ge=!1,Error.prepareStackTrace=s}return(e=e?e.displayName||e.name:"")?M(e):""}function k(e){switch(e.tag){case 5:return M(e.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 2:case 15:return e=he(e.type,!1),e;case 11:return e=he(e.type.render,!1),e;case 1:return e=he(e.type,!0),e;default:return""}}function A(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ee:return"Fragment";case ve:return"Portal";case ye:return"Profiler";case L:return"StrictMode";case qe:return"Suspense";case Le:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Te:return(e.displayName||"Context")+".Consumer";case ne:return(e._context.displayName||"Context")+".Provider";case ke:var l=e.render;return e=e.displayName,e||(e=l.displayName||l.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ze:return l=e.displayName||null,l!==null?l:A(e.type)||"Memo";case Ne:l=e._payload,e=e._init;try{return A(e(l))}catch{}}return null}function $(e){var l=e.type;switch(e.tag){case 24:return"Cache";case 9:return(l.displayName||"Context")+".Consumer";case 10:return(l._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=l.render,e=e.displayName||e.name||"",l.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return l;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return A(l);case 8:return l===L?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof l=="function")return l.displayName||l.name||null;if(typeof l=="string")return l}return null}function ee(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fe(e){var l=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(l==="checkbox"||l==="radio")}function $e(e){var l=fe(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,l),i=""+e[l];if(!e.hasOwnProperty(l)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var n=s.get,u=s.set;return Object.defineProperty(e,l,{configurable:!0,get:function(){return n.call(this)},set:function(d){i=""+d,u.call(this,d)}}),Object.defineProperty(e,l,{enumerable:s.enumerable}),{getValue:function(){return i},setValue:function(d){i=""+d},stopTracking:function(){e._valueTracker=null,delete e[l]}}}}function ws(e){e._valueTracker||(e._valueTracker=$e(e))}function zs(e){if(!e)return!1;var l=e._valueTracker;if(!l)return!0;var s=l.getValue(),i="";return e&&(i=fe(e)?e.checked?"true":"false":e.value),e=i,e!==s?(l.setValue(e),!0):!1}function Xe(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function us(e,l){var s=l.checked;return V({},l,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??e._wrapperState.initialChecked})}function ft(e,l){var s=l.defaultValue==null?"":l.defaultValue,i=l.checked!=null?l.checked:l.defaultChecked;s=ee(l.value!=null?l.value:s),e._wrapperState={initialChecked:i,initialValue:s,controlled:l.type==="checkbox"||l.type==="radio"?l.checked!=null:l.value!=null}}function jn(e,l){l=l.checked,l!=null&&ie(e,"checked",l,!1)}function Vl(e,l){jn(e,l);var s=ee(l.value),i=l.type;if(s!=null)i==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+s):e.value!==""+s&&(e.value=""+s);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}l.hasOwnProperty("value")?mt(e,l.type,s):l.hasOwnProperty("defaultValue")&&mt(e,l.type,ee(l.defaultValue)),l.checked==null&&l.defaultChecked!=null&&(e.defaultChecked=!!l.defaultChecked)}function Sn(e,l,s){if(l.hasOwnProperty("value")||l.hasOwnProperty("defaultValue")){var i=l.type;if(!(i!=="submit"&&i!=="reset"||l.value!==void 0&&l.value!==null))return;l=""+e._wrapperState.initialValue,s||l===e.value||(e.value=l),e.defaultValue=l}s=e.name,s!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,s!==""&&(e.name=s)}function mt(e,l,s){(l!=="number"||Xe(e.ownerDocument)!==e)&&(s==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+s&&(e.defaultValue=""+s))}var Us=Array.isArray;function qs(e,l,s,i){if(e=e.options,l){l={};for(var n=0;n<s.length;n++)l["$"+s[n]]=!0;for(s=0;s<e.length;s++)n=l.hasOwnProperty("$"+e[s].value),e[s].selected!==n&&(e[s].selected=n),n&&i&&(e[s].defaultSelected=!0)}else{for(s=""+ee(s),l=null,n=0;n<e.length;n++){if(e[n].value===s){e[n].selected=!0,i&&(e[n].defaultSelected=!0);return}l!==null||e[n].disabled||(l=e[n])}l!==null&&(l.selected=!0)}}function ht(e,l){if(l.dangerouslySetInnerHTML!=null)throw Error(o(91));return V({},l,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vn(e,l){var s=l.value;if(s==null){if(s=l.children,l=l.defaultValue,s!=null){if(l!=null)throw Error(o(92));if(Us(s)){if(1<s.length)throw Error(o(93));s=s[0]}l=s}l==null&&(l=""),s=l}e._wrapperState={initialValue:ee(s)}}function wn(e,l){var s=ee(l.value),i=ee(l.defaultValue);s!=null&&(s=""+s,s!==e.value&&(e.value=s),l.defaultValue==null&&e.defaultValue!==s&&(e.defaultValue=s)),i!=null&&(e.defaultValue=""+i)}function rs(e){var l=e.textContent;l===e._wrapperState.initialValue&&l!==""&&l!==null&&(e.value=l)}function Bs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gi(e,l){return e==null||e==="http://www.w3.org/1999/xhtml"?Bs(l):e==="http://www.w3.org/2000/svg"&&l==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var As,Al=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(l,s,i,n){MSApp.execUnsafeLocalFunction(function(){return e(l,s,i,n)})}:e})(function(e,l){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=l;else{for(As=As||document.createElement("div"),As.innerHTML="<svg>"+l.valueOf().toString()+"</svg>",l=As.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;l.firstChild;)e.appendChild(l.firstChild)}});function Sl(e,l){if(l){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=l;return}}e.textContent=l}var di={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ta=["Webkit","ms","Moz","O"];Object.keys(di).forEach(function(e){Ta.forEach(function(l){l=l+e.charAt(0).toUpperCase()+e.substring(1),di[l]=di[e]})});function Pi(e,l,s){return l==null||typeof l=="boolean"||l===""?"":s||typeof l!="number"||l===0||di.hasOwnProperty(e)&&di[e]?(""+l).trim():l+"px"}function xn(e,l){e=e.style;for(var s in l)if(l.hasOwnProperty(s)){var i=s.indexOf("--")===0,n=Pi(s,l[s],i);s==="float"&&(s="cssFloat"),i?e.setProperty(s,n):e[s]=n}}var Kl=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ji(e,l){if(l){if(Kl[e]&&(l.children!=null||l.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(l.dangerouslySetInnerHTML!=null){if(l.children!=null)throw Error(o(60));if(typeof l.dangerouslySetInnerHTML!="object"||!("__html"in l.dangerouslySetInnerHTML))throw Error(o(61))}if(l.style!=null&&typeof l.style!="object")throw Error(o(62))}}function zi(e,l){if(e.indexOf("-")===-1)return typeof l.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ui=null;function _t(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qi=null,Ql=null,xs=null;function Bi(e){if(e=Mt(e)){if(typeof qi!="function")throw Error(o(280));var l=e.stateNode;l&&(l=Rn(l),qi(e.stateNode,e.type,l))}}function yn(e){Ql?xs?xs.push(e):xs=[e]:Ql=e}function jt(){if(Ql){var e=Ql,l=xs;if(xs=Ql=null,Bi(e),l)for(e=0;e<l.length;e++)Bi(l[e])}}function En(e,l){return e(l)}function St(){}var Ms=!1;function gi(e,l,s){if(Ms)return e(l,s);Ms=!0;try{return En(e,l,s)}finally{Ms=!1,(Ql!==null||xs!==null)&&(St(),jt())}}function Hs(e,l){var s=e.stateNode;if(s===null)return null;var i=Rn(s);if(i===null)return null;s=i[l];e:switch(l){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(o(231,l,typeof s));return s}var vt=!1;if(f)try{var fi={};Object.defineProperty(fi,"passive",{get:function(){vt=!0}}),window.addEventListener("test",fi,fi),window.removeEventListener("test",fi,fi)}catch{vt=!1}function j(e,l,s,i,n,u,d,h,S){var U=Array.prototype.slice.call(arguments,3);try{l.apply(s,U)}catch(N){this.onError(N)}}var v=!1,G=null,T=!1,R=null,oe={onError:function(e){v=!0,G=e}};function ue(e,l,s,i,n,u,d,h,S){v=!1,G=null,j.apply(oe,arguments)}function xe(e,l,s,i,n,u,d,h,S){if(ue.apply(this,arguments),v){if(v){var U=G;v=!1,G=null}else throw Error(o(198));T||(T=!0,R=U)}}function X(e){var l=e,s=e;if(e.alternate)for(;l.return;)l=l.return;else{e=l;do l=e,(l.flags&4098)!==0&&(s=l.return),e=l.return;while(e)}return l.tag===3?s:null}function re(e){if(e.tag===13){var l=e.memoizedState;if(l===null&&(e=e.alternate,e!==null&&(l=e.memoizedState)),l!==null)return l.dehydrated}return null}function Se(e){if(X(e)!==e)throw Error(o(188))}function be(e){var l=e.alternate;if(!l){if(l=X(e),l===null)throw Error(o(188));return l!==e?null:e}for(var s=e,i=l;;){var n=s.return;if(n===null)break;var u=n.alternate;if(u===null){if(i=n.return,i!==null){s=i;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===s)return Se(n),e;if(u===i)return Se(n),l;u=u.sibling}throw Error(o(188))}if(s.return!==i.return)s=n,i=u;else{for(var d=!1,h=n.child;h;){if(h===s){d=!0,s=n,i=u;break}if(h===i){d=!0,i=n,s=u;break}h=h.sibling}if(!d){for(h=u.child;h;){if(h===s){d=!0,s=u,i=n;break}if(h===i){d=!0,i=u,s=n;break}h=h.sibling}if(!d)throw Error(o(189))}}if(s.alternate!==i)throw Error(o(190))}if(s.tag!==3)throw Error(o(188));return s.stateNode.current===s?e:l}function pe(e){return e=be(e),e!==null?Ge(e):null}function Ge(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var l=Ge(e);if(l!==null)return l;e=e.sibling}return null}var Ae=a.unstable_scheduleCallback,Ze=a.unstable_cancelCallback,Fe=a.unstable_shouldYield,Me=a.unstable_requestPaint,Pe=a.unstable_now,pl=a.unstable_getCurrentPriorityLevel,ys=a.unstable_ImmediatePriority,Yl=a.unstable_UserBlockingPriority,Xl=a.unstable_NormalPriority,cs=a.unstable_LowPriority,Gl=a.unstable_IdlePriority,Ts=null,il=null;function Ai(e){if(il&&typeof il.onCommitFiberRoot=="function")try{il.onCommitFiberRoot(Ts,e,void 0,(e.current.flags&128)===128)}catch{}}var dl=Math.clz32?Math.clz32:gl,Mi=Math.log,Je=Math.LN2;function gl(e){return e>>>=0,e===0?32:31-(Mi(e)/Je|0)|0}var vl=64,yl=4194304;function Rs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Os(e,l){var s=e.pendingLanes;if(s===0)return 0;var i=0,n=e.suspendedLanes,u=e.pingedLanes,d=s&268435455;if(d!==0){var h=d&~n;h!==0?i=Rs(h):(u&=d,u!==0&&(i=Rs(u)))}else d=s&~n,d!==0?i=Rs(d):u!==0&&(i=Rs(u));if(i===0)return 0;if(l!==0&&l!==i&&(l&n)===0&&(n=i&-i,u=l&-l,n>=u||n===16&&(u&4194240)!==0))return l;if((i&4)!==0&&(i|=s&16),l=e.entangledLanes,l!==0)for(e=e.entanglements,l&=i;0<l;)s=31-dl(l),n=1<<s,i|=e[s],l&=~n;return i}function Re(e,l){switch(e){case 1:case 2:case 4:return l+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Es(e,l){for(var s=e.suspendedLanes,i=e.pingedLanes,n=e.expirationTimes,u=e.pendingLanes;0<u;){var d=31-dl(u),h=1<<d,S=n[d];S===-1?((h&s)===0||(h&i)!==0)&&(n[d]=Re(h,l)):S<=l&&(e.expiredLanes|=h),u&=~h}}function Hi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function kn(){var e=vl;return vl<<=1,(vl&4194240)===0&&(vl=64),e}function Ra(e){for(var l=[],s=0;31>s;s++)l.push(e);return l}function wt(e,l,s){e.pendingLanes|=l,l!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,l=31-dl(l),e[l]=s}function Dd(e,l){var s=e.pendingLanes&~l;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=l,e.mutableReadLanes&=l,e.entangledLanes&=l,l=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<s;){var n=31-dl(s),u=1<<n;l[n]=0,i[n]=-1,e[n]=-1,s&=~u}}function Oa(e,l){var s=e.entangledLanes|=l;for(e=e.entanglements;s;){var i=31-dl(s),n=1<<i;n&l|e[i]&l&&(e[i]|=l),s&=~n}}var He=0;function Ku(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Qu,Na,Yu,Xu,Zu,Fa=!1,bn=[],Ns=null,Fs=null,Ds=null,xt=new Map,yt=new Map,Ws=[],Wd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function er(e,l){switch(e){case"focusin":case"focusout":Ns=null;break;case"dragenter":case"dragleave":Fs=null;break;case"mouseover":case"mouseout":Ds=null;break;case"pointerover":case"pointerout":xt.delete(l.pointerId);break;case"gotpointercapture":case"lostpointercapture":yt.delete(l.pointerId)}}function Et(e,l,s,i,n,u){return e===null||e.nativeEvent!==u?(e={blockedOn:l,domEventName:s,eventSystemFlags:i,nativeEvent:u,targetContainers:[n]},l!==null&&(l=Mt(l),l!==null&&Na(l)),e):(e.eventSystemFlags|=i,l=e.targetContainers,n!==null&&l.indexOf(n)===-1&&l.push(n),e)}function $d(e,l,s,i,n){switch(l){case"focusin":return Ns=Et(Ns,e,l,s,i,n),!0;case"dragenter":return Fs=Et(Fs,e,l,s,i,n),!0;case"mouseover":return Ds=Et(Ds,e,l,s,i,n),!0;case"pointerover":var u=n.pointerId;return xt.set(u,Et(xt.get(u)||null,e,l,s,i,n)),!0;case"gotpointercapture":return u=n.pointerId,yt.set(u,Et(yt.get(u)||null,e,l,s,i,n)),!0}return!1}function lr(e){var l=mi(e.target);if(l!==null){var s=X(l);if(s!==null){if(l=s.tag,l===13){if(l=re(s),l!==null){e.blockedOn=l,Zu(e.priority,function(){Yu(s)});return}}else if(l===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cn(e){if(e.blockedOn!==null)return!1;for(var l=e.targetContainers;0<l.length;){var s=Wa(e.domEventName,e.eventSystemFlags,l[0],e.nativeEvent);if(s===null){s=e.nativeEvent;var i=new s.constructor(s.type,s);Ui=i,s.target.dispatchEvent(i),Ui=null}else return l=Mt(s),l!==null&&Na(l),e.blockedOn=s,!1;l.shift()}return!0}function sr(e,l,s){Cn(e)&&s.delete(l)}function Vd(){Fa=!1,Ns!==null&&Cn(Ns)&&(Ns=null),Fs!==null&&Cn(Fs)&&(Fs=null),Ds!==null&&Cn(Ds)&&(Ds=null),xt.forEach(sr),yt.forEach(sr)}function kt(e,l){e.blockedOn===l&&(e.blockedOn=null,Fa||(Fa=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Vd)))}function bt(e){function l(n){return kt(n,e)}if(0<bn.length){kt(bn[0],e);for(var s=1;s<bn.length;s++){var i=bn[s];i.blockedOn===e&&(i.blockedOn=null)}}for(Ns!==null&&kt(Ns,e),Fs!==null&&kt(Fs,e),Ds!==null&&kt(Ds,e),xt.forEach(l),yt.forEach(l),s=0;s<Ws.length;s++)i=Ws[s],i.blockedOn===e&&(i.blockedOn=null);for(;0<Ws.length&&(s=Ws[0],s.blockedOn===null);)lr(s),s.blockedOn===null&&Ws.shift()}var Ti=de.ReactCurrentBatchConfig,Ln=!0;function Kd(e,l,s,i){var n=He,u=Ti.transition;Ti.transition=null;try{He=1,Da(e,l,s,i)}finally{He=n,Ti.transition=u}}function Qd(e,l,s,i){var n=He,u=Ti.transition;Ti.transition=null;try{He=4,Da(e,l,s,i)}finally{He=n,Ti.transition=u}}function Da(e,l,s,i){if(Ln){var n=Wa(e,l,s,i);if(n===null)ro(e,l,i,In,s),er(e,i);else if($d(n,e,l,s,i))i.stopPropagation();else if(er(e,i),l&4&&-1<Wd.indexOf(e)){for(;n!==null;){var u=Mt(n);if(u!==null&&Qu(u),u=Wa(e,l,s,i),u===null&&ro(e,l,i,In,s),u===n)break;n=u}n!==null&&i.stopPropagation()}else ro(e,l,i,null,s)}}var In=null;function Wa(e,l,s,i){if(In=null,e=_t(i),e=mi(e),e!==null)if(l=X(e),l===null)e=null;else if(s=l.tag,s===13){if(e=re(l),e!==null)return e;e=null}else if(s===3){if(l.stateNode.current.memoizedState.isDehydrated)return l.tag===3?l.stateNode.containerInfo:null;e=null}else l!==e&&(e=null);return In=e,null}function ir(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pl()){case ys:return 1;case Yl:return 4;case Xl:case cs:return 16;case Gl:return 536870912;default:return 16}default:return 16}}var $s=null,$a=null,Gn=null;function tr(){if(Gn)return Gn;var e,l=$a,s=l.length,i,n="value"in $s?$s.value:$s.textContent,u=n.length;for(e=0;e<s&&l[e]===n[e];e++);var d=s-e;for(i=1;i<=d&&l[s-i]===n[u-i];i++);return Gn=n.slice(e,1<i?1-i:void 0)}function Pn(e){var l=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&l===13&&(e=13)):e=l,e===10&&(e=13),32<=e||e===13?e:0}function Jn(){return!0}function nr(){return!1}function Pl(e){function l(s,i,n,u,d){this._reactName=s,this._targetInst=n,this.type=i,this.nativeEvent=u,this.target=d,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(s=e[h],this[h]=s?s(u):u[h]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Jn:nr,this.isPropagationStopped=nr,this}return V(l.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Jn)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Jn)},persist:function(){},isPersistent:Jn}),l}var Ri={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Va=Pl(Ri),Ct=V({},Ri,{view:0,detail:0}),Yd=Pl(Ct),Ka,Qa,Lt,zn=V({},Ct,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lt&&(Lt&&e.type==="mousemove"?(Ka=e.screenX-Lt.screenX,Qa=e.screenY-Lt.screenY):Qa=Ka=0,Lt=e),Ka)},movementY:function(e){return"movementY"in e?e.movementY:Qa}}),ar=Pl(zn),Xd=V({},zn,{dataTransfer:0}),Zd=Pl(Xd),eg=V({},Ct,{relatedTarget:0}),Ya=Pl(eg),lg=V({},Ri,{animationName:0,elapsedTime:0,pseudoElement:0}),sg=Pl(lg),ig=V({},Ri,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tg=Pl(ig),ng=V({},Ri,{data:0}),or=Pl(ng),ag={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},og={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ug={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rg(e){var l=this.nativeEvent;return l.getModifierState?l.getModifierState(e):(e=ug[e])?!!l[e]:!1}function Xa(){return rg}var cg=V({},Ct,{key:function(e){if(e.key){var l=ag[e.key]||e.key;if(l!=="Unidentified")return l}return e.type==="keypress"?(e=Pn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?og[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xa,charCode:function(e){return e.type==="keypress"?Pn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pg=Pl(cg),dg=V({},zn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ur=Pl(dg),gg=V({},Ct,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xa}),fg=Pl(gg),mg=V({},Ri,{propertyName:0,elapsedTime:0,pseudoElement:0}),hg=Pl(mg),_g=V({},zn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jg=Pl(_g),Sg=[9,13,27,32],Za=f&&"CompositionEvent"in window,It=null;f&&"documentMode"in document&&(It=document.documentMode);var vg=f&&"TextEvent"in window&&!It,rr=f&&(!Za||It&&8<It&&11>=It),cr=" ",pr=!1;function dr(e,l){switch(e){case"keyup":return Sg.indexOf(l.keyCode)!==-1;case"keydown":return l.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Oi=!1;function wg(e,l){switch(e){case"compositionend":return gr(l);case"keypress":return l.which!==32?null:(pr=!0,cr);case"textInput":return e=l.data,e===cr&&pr?null:e;default:return null}}function xg(e,l){if(Oi)return e==="compositionend"||!Za&&dr(e,l)?(e=tr(),Gn=$a=$s=null,Oi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(l.ctrlKey||l.altKey||l.metaKey)||l.ctrlKey&&l.altKey){if(l.char&&1<l.char.length)return l.char;if(l.which)return String.fromCharCode(l.which)}return null;case"compositionend":return rr&&l.locale!=="ko"?null:l.data;default:return null}}var yg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fr(e){var l=e&&e.nodeName&&e.nodeName.toLowerCase();return l==="input"?!!yg[e.type]:l==="textarea"}function mr(e,l,s,i){yn(i),l=Mn(l,"onChange"),0<l.length&&(s=new Va("onChange","change",null,s,i),e.push({event:s,listeners:l}))}var Gt=null,Pt=null;function Eg(e){zr(e,0)}function Un(e){var l=$i(e);if(zs(l))return e}function kg(e,l){if(e==="change")return l}var hr=!1;if(f){var eo;if(f){var lo="oninput"in document;if(!lo){var _r=document.createElement("div");_r.setAttribute("oninput","return;"),lo=typeof _r.oninput=="function"}eo=lo}else eo=!1;hr=eo&&(!document.documentMode||9<document.documentMode)}function jr(){Gt&&(Gt.detachEvent("onpropertychange",Sr),Pt=Gt=null)}function Sr(e){if(e.propertyName==="value"&&Un(Pt)){var l=[];mr(l,Pt,e,_t(e)),gi(Eg,l)}}function bg(e,l,s){e==="focusin"?(jr(),Gt=l,Pt=s,Gt.attachEvent("onpropertychange",Sr)):e==="focusout"&&jr()}function Cg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Un(Pt)}function Lg(e,l){if(e==="click")return Un(l)}function Ig(e,l){if(e==="input"||e==="change")return Un(l)}function Gg(e,l){return e===l&&(e!==0||1/e===1/l)||e!==e&&l!==l}var Zl=typeof Object.is=="function"?Object.is:Gg;function Jt(e,l){if(Zl(e,l))return!0;if(typeof e!="object"||e===null||typeof l!="object"||l===null)return!1;var s=Object.keys(e),i=Object.keys(l);if(s.length!==i.length)return!1;for(i=0;i<s.length;i++){var n=s[i];if(!m.call(l,n)||!Zl(e[n],l[n]))return!1}return!0}function vr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wr(e,l){var s=vr(e);e=0;for(var i;s;){if(s.nodeType===3){if(i=e+s.textContent.length,e<=l&&i>=l)return{node:s,offset:l-e};e=i}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=vr(s)}}function xr(e,l){return e&&l?e===l?!0:e&&e.nodeType===3?!1:l&&l.nodeType===3?xr(e,l.parentNode):"contains"in e?e.contains(l):e.compareDocumentPosition?!!(e.compareDocumentPosition(l)&16):!1:!1}function yr(){for(var e=window,l=Xe();l instanceof e.HTMLIFrameElement;){try{var s=typeof l.contentWindow.location.href=="string"}catch{s=!1}if(s)e=l.contentWindow;else break;l=Xe(e.document)}return l}function so(e){var l=e&&e.nodeName&&e.nodeName.toLowerCase();return l&&(l==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||l==="textarea"||e.contentEditable==="true")}function Pg(e){var l=yr(),s=e.focusedElem,i=e.selectionRange;if(l!==s&&s&&s.ownerDocument&&xr(s.ownerDocument.documentElement,s)){if(i!==null&&so(s)){if(l=i.start,e=i.end,e===void 0&&(e=l),"selectionStart"in s)s.selectionStart=l,s.selectionEnd=Math.min(e,s.value.length);else if(e=(l=s.ownerDocument||document)&&l.defaultView||window,e.getSelection){e=e.getSelection();var n=s.textContent.length,u=Math.min(i.start,n);i=i.end===void 0?u:Math.min(i.end,n),!e.extend&&u>i&&(n=i,i=u,u=n),n=wr(s,u);var d=wr(s,i);n&&d&&(e.rangeCount!==1||e.anchorNode!==n.node||e.anchorOffset!==n.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(l=l.createRange(),l.setStart(n.node,n.offset),e.removeAllRanges(),u>i?(e.addRange(l),e.extend(d.node,d.offset)):(l.setEnd(d.node,d.offset),e.addRange(l)))}}for(l=[],e=s;e=e.parentNode;)e.nodeType===1&&l.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<l.length;s++)e=l[s],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jg=f&&"documentMode"in document&&11>=document.documentMode,Ni=null,io=null,zt=null,to=!1;function Er(e,l,s){var i=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;to||Ni==null||Ni!==Xe(i)||(i=Ni,"selectionStart"in i&&so(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),zt&&Jt(zt,i)||(zt=i,i=Mn(io,"onSelect"),0<i.length&&(l=new Va("onSelect","select",null,l,s),e.push({event:l,listeners:i}),l.target=Ni)))}function qn(e,l){var s={};return s[e.toLowerCase()]=l.toLowerCase(),s["Webkit"+e]="webkit"+l,s["Moz"+e]="moz"+l,s}var Fi={animationend:qn("Animation","AnimationEnd"),animationiteration:qn("Animation","AnimationIteration"),animationstart:qn("Animation","AnimationStart"),transitionend:qn("Transition","TransitionEnd")},no={},kr={};f&&(kr=document.createElement("div").style,"AnimationEvent"in window||(delete Fi.animationend.animation,delete Fi.animationiteration.animation,delete Fi.animationstart.animation),"TransitionEvent"in window||delete Fi.transitionend.transition);function Bn(e){if(no[e])return no[e];if(!Fi[e])return e;var l=Fi[e],s;for(s in l)if(l.hasOwnProperty(s)&&s in kr)return no[e]=l[s];return e}var br=Bn("animationend"),Cr=Bn("animationiteration"),Lr=Bn("animationstart"),Ir=Bn("transitionend"),Gr=new Map,Pr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vs(e,l){Gr.set(e,l),p(l,[e])}for(var ao=0;ao<Pr.length;ao++){var oo=Pr[ao],zg=oo.toLowerCase(),Ug=oo[0].toUpperCase()+oo.slice(1);Vs(zg,"on"+Ug)}Vs(br,"onAnimationEnd"),Vs(Cr,"onAnimationIteration"),Vs(Lr,"onAnimationStart"),Vs("dblclick","onDoubleClick"),Vs("focusin","onFocus"),Vs("focusout","onBlur"),Vs(Ir,"onTransitionEnd"),g("onMouseEnter",["mouseout","mouseover"]),g("onMouseLeave",["mouseout","mouseover"]),g("onPointerEnter",["pointerout","pointerover"]),g("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ut="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ut));function Jr(e,l,s){var i=e.type||"unknown-event";e.currentTarget=s,xe(i,l,void 0,e),e.currentTarget=null}function zr(e,l){l=(l&4)!==0;for(var s=0;s<e.length;s++){var i=e[s],n=i.event;i=i.listeners;e:{var u=void 0;if(l)for(var d=i.length-1;0<=d;d--){var h=i[d],S=h.instance,U=h.currentTarget;if(h=h.listener,S!==u&&n.isPropagationStopped())break e;Jr(n,h,U),u=S}else for(d=0;d<i.length;d++){if(h=i[d],S=h.instance,U=h.currentTarget,h=h.listener,S!==u&&n.isPropagationStopped())break e;Jr(n,h,U),u=S}}}if(T)throw e=R,T=!1,R=null,e}function De(e,l){var s=l[ho];s===void 0&&(s=l[ho]=new Set);var i=e+"__bubble";s.has(i)||(Ur(l,e,2,!1),s.add(i))}function uo(e,l,s){var i=0;l&&(i|=4),Ur(s,e,i,l)}var An="_reactListening"+Math.random().toString(36).slice(2);function qt(e){if(!e[An]){e[An]=!0,r.forEach(function(s){s!=="selectionchange"&&(qg.has(s)||uo(s,!1,e),uo(s,!0,e))});var l=e.nodeType===9?e:e.ownerDocument;l===null||l[An]||(l[An]=!0,uo("selectionchange",!1,l))}}function Ur(e,l,s,i){switch(ir(l)){case 1:var n=Kd;break;case 4:n=Qd;break;default:n=Da}s=n.bind(null,l,s,e),n=void 0,!vt||l!=="touchstart"&&l!=="touchmove"&&l!=="wheel"||(n=!0),i?n!==void 0?e.addEventListener(l,s,{capture:!0,passive:n}):e.addEventListener(l,s,!0):n!==void 0?e.addEventListener(l,s,{passive:n}):e.addEventListener(l,s,!1)}function ro(e,l,s,i,n){var u=i;if((l&1)===0&&(l&2)===0&&i!==null)e:for(;;){if(i===null)return;var d=i.tag;if(d===3||d===4){var h=i.stateNode.containerInfo;if(h===n||h.nodeType===8&&h.parentNode===n)break;if(d===4)for(d=i.return;d!==null;){var S=d.tag;if((S===3||S===4)&&(S=d.stateNode.containerInfo,S===n||S.nodeType===8&&S.parentNode===n))return;d=d.return}for(;h!==null;){if(d=mi(h),d===null)return;if(S=d.tag,S===5||S===6){i=u=d;continue e}h=h.parentNode}}i=i.return}gi(function(){var U=u,N=_t(s),D=[];e:{var O=Gr.get(e);if(O!==void 0){var Z=Va,se=e;switch(e){case"keypress":if(Pn(s)===0)break e;case"keydown":case"keyup":Z=pg;break;case"focusin":se="focus",Z=Ya;break;case"focusout":se="blur",Z=Ya;break;case"beforeblur":case"afterblur":Z=Ya;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=ar;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=Zd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=fg;break;case br:case Cr:case Lr:Z=sg;break;case Ir:Z=hg;break;case"scroll":Z=Yd;break;case"wheel":Z=jg;break;case"copy":case"cut":case"paste":Z=tg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=ur}var te=(l&4)!==0,el=!te&&e==="scroll",I=te?O!==null?O+"Capture":null:O;te=[];for(var y=U,P;y!==null;){P=y;var W=P.stateNode;if(P.tag===5&&W!==null&&(P=W,I!==null&&(W=Hs(y,I),W!=null&&te.push(Bt(y,W,P)))),el)break;y=y.return}0<te.length&&(O=new Z(O,se,null,s,N),D.push({event:O,listeners:te}))}}if((l&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",Z=e==="mouseout"||e==="pointerout",O&&s!==Ui&&(se=s.relatedTarget||s.fromElement)&&(mi(se)||se[ks]))break e;if((Z||O)&&(O=N.window===N?N:(O=N.ownerDocument)?O.defaultView||O.parentWindow:window,Z?(se=s.relatedTarget||s.toElement,Z=U,se=se?mi(se):null,se!==null&&(el=X(se),se!==el||se.tag!==5&&se.tag!==6)&&(se=null)):(Z=null,se=U),Z!==se)){if(te=ar,W="onMouseLeave",I="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(te=ur,W="onPointerLeave",I="onPointerEnter",y="pointer"),el=Z==null?O:$i(Z),P=se==null?O:$i(se),O=new te(W,y+"leave",Z,s,N),O.target=el,O.relatedTarget=P,W=null,mi(N)===U&&(te=new te(I,y+"enter",se,s,N),te.target=P,te.relatedTarget=el,W=te),el=W,Z&&se)l:{for(te=Z,I=se,y=0,P=te;P;P=Di(P))y++;for(P=0,W=I;W;W=Di(W))P++;for(;0<y-P;)te=Di(te),y--;for(;0<P-y;)I=Di(I),P--;for(;y--;){if(te===I||I!==null&&te===I.alternate)break l;te=Di(te),I=Di(I)}te=null}else te=null;Z!==null&&qr(D,O,Z,te,!1),se!==null&&el!==null&&qr(D,el,se,te,!0)}}e:{if(O=U?$i(U):window,Z=O.nodeName&&O.nodeName.toLowerCase(),Z==="select"||Z==="input"&&O.type==="file")var ae=kg;else if(fr(O))if(hr)ae=Ig;else{ae=Cg;var _e=bg}else(Z=O.nodeName)&&Z.toLowerCase()==="input"&&(O.type==="checkbox"||O.type==="radio")&&(ae=Lg);if(ae&&(ae=ae(e,U))){mr(D,ae,s,N);break e}_e&&_e(e,O,U),e==="focusout"&&(_e=O._wrapperState)&&_e.controlled&&O.type==="number"&&mt(O,"number",O.value)}switch(_e=U?$i(U):window,e){case"focusin":(fr(_e)||_e.contentEditable==="true")&&(Ni=_e,io=U,zt=null);break;case"focusout":zt=io=Ni=null;break;case"mousedown":to=!0;break;case"contextmenu":case"mouseup":case"dragend":to=!1,Er(D,s,N);break;case"selectionchange":if(Jg)break;case"keydown":case"keyup":Er(D,s,N)}var je;if(Za)e:{switch(e){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else Oi?dr(e,s)&&(we="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(we="onCompositionStart");we&&(rr&&s.locale!=="ko"&&(Oi||we!=="onCompositionStart"?we==="onCompositionEnd"&&Oi&&(je=tr()):($s=N,$a="value"in $s?$s.value:$s.textContent,Oi=!0)),_e=Mn(U,we),0<_e.length&&(we=new or(we,e,null,s,N),D.push({event:we,listeners:_e}),je?we.data=je:(je=gr(s),je!==null&&(we.data=je)))),(je=vg?wg(e,s):xg(e,s))&&(U=Mn(U,"onBeforeInput"),0<U.length&&(N=new or("onBeforeInput","beforeinput",null,s,N),D.push({event:N,listeners:U}),N.data=je))}zr(D,l)})}function Bt(e,l,s){return{instance:e,listener:l,currentTarget:s}}function Mn(e,l){for(var s=l+"Capture",i=[];e!==null;){var n=e,u=n.stateNode;n.tag===5&&u!==null&&(n=u,u=Hs(e,s),u!=null&&i.unshift(Bt(e,u,n)),u=Hs(e,l),u!=null&&i.push(Bt(e,u,n))),e=e.return}return i}function Di(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qr(e,l,s,i,n){for(var u=l._reactName,d=[];s!==null&&s!==i;){var h=s,S=h.alternate,U=h.stateNode;if(S!==null&&S===i)break;h.tag===5&&U!==null&&(h=U,n?(S=Hs(s,u),S!=null&&d.unshift(Bt(s,S,h))):n||(S=Hs(s,u),S!=null&&d.push(Bt(s,S,h)))),s=s.return}d.length!==0&&e.push({event:l,listeners:d})}var Bg=/\r\n?/g,Ag=/\u0000|\uFFFD/g;function Br(e){return(typeof e=="string"?e:""+e).replace(Bg,`
`).replace(Ag,"")}function Hn(e,l,s){if(l=Br(l),Br(e)!==l&&s)throw Error(o(425))}function Tn(){}var co=null,po=null;function go(e,l){return e==="textarea"||e==="noscript"||typeof l.children=="string"||typeof l.children=="number"||typeof l.dangerouslySetInnerHTML=="object"&&l.dangerouslySetInnerHTML!==null&&l.dangerouslySetInnerHTML.__html!=null}var fo=typeof setTimeout=="function"?setTimeout:void 0,Mg=typeof clearTimeout=="function"?clearTimeout:void 0,Ar=typeof Promise=="function"?Promise:void 0,Hg=typeof queueMicrotask=="function"?queueMicrotask:typeof Ar<"u"?function(e){return Ar.resolve(null).then(e).catch(Tg)}:fo;function Tg(e){setTimeout(function(){throw e})}function mo(e,l){var s=l,i=0;do{var n=s.nextSibling;if(e.removeChild(s),n&&n.nodeType===8)if(s=n.data,s==="/$"){if(i===0){e.removeChild(n),bt(l);return}i--}else s!=="$"&&s!=="$?"&&s!=="$!"||i++;s=n}while(s);bt(l)}function Ks(e){for(;e!=null;e=e.nextSibling){var l=e.nodeType;if(l===1||l===3)break;if(l===8){if(l=e.data,l==="$"||l==="$!"||l==="$?")break;if(l==="/$")return null}}return e}function Mr(e){e=e.previousSibling;for(var l=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(l===0)return e;l--}else s==="/$"&&l++}e=e.previousSibling}return null}var Wi=Math.random().toString(36).slice(2),ps="__reactFiber$"+Wi,At="__reactProps$"+Wi,ks="__reactContainer$"+Wi,ho="__reactEvents$"+Wi,Rg="__reactListeners$"+Wi,Og="__reactHandles$"+Wi;function mi(e){var l=e[ps];if(l)return l;for(var s=e.parentNode;s;){if(l=s[ks]||s[ps]){if(s=l.alternate,l.child!==null||s!==null&&s.child!==null)for(e=Mr(e);e!==null;){if(s=e[ps])return s;e=Mr(e)}return l}e=s,s=e.parentNode}return null}function Mt(e){return e=e[ps]||e[ks],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $i(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function Rn(e){return e[At]||null}var _o=[],Vi=-1;function Qs(e){return{current:e}}function We(e){0>Vi||(e.current=_o[Vi],_o[Vi]=null,Vi--)}function Oe(e,l){Vi++,_o[Vi]=e.current,e.current=l}var Ys={},fl=Qs(Ys),El=Qs(!1),hi=Ys;function Ki(e,l){var s=e.type.contextTypes;if(!s)return Ys;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===l)return i.__reactInternalMemoizedMaskedChildContext;var n={},u;for(u in s)n[u]=l[u];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=n),n}function kl(e){return e=e.childContextTypes,e!=null}function On(){We(El),We(fl)}function Hr(e,l,s){if(fl.current!==Ys)throw Error(o(168));Oe(fl,l),Oe(El,s)}function Tr(e,l,s){var i=e.stateNode;if(l=l.childContextTypes,typeof i.getChildContext!="function")return s;i=i.getChildContext();for(var n in i)if(!(n in l))throw Error(o(108,$(e)||"Unknown",n));return V({},s,i)}function Nn(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ys,hi=fl.current,Oe(fl,e),Oe(El,El.current),!0}function Rr(e,l,s){var i=e.stateNode;if(!i)throw Error(o(169));s?(e=Tr(e,l,hi),i.__reactInternalMemoizedMergedChildContext=e,We(El),We(fl),Oe(fl,e)):We(El),Oe(El,s)}var bs=null,Fn=!1,jo=!1;function Or(e){bs===null?bs=[e]:bs.push(e)}function Ng(e){Fn=!0,Or(e)}function Xs(){if(!jo&&bs!==null){jo=!0;var e=0,l=He;try{var s=bs;for(He=1;e<s.length;e++){var i=s[e];do i=i(!0);while(i!==null)}bs=null,Fn=!1}catch(n){throw bs!==null&&(bs=bs.slice(e+1)),Ae(ys,Xs),n}finally{He=l,jo=!1}}return null}var Qi=[],Yi=0,Dn=null,Wn=0,Ml=[],Hl=0,_i=null,Cs=1,Ls="";function ji(e,l){Qi[Yi++]=Wn,Qi[Yi++]=Dn,Dn=e,Wn=l}function Nr(e,l,s){Ml[Hl++]=Cs,Ml[Hl++]=Ls,Ml[Hl++]=_i,_i=e;var i=Cs;e=Ls;var n=32-dl(i)-1;i&=~(1<<n),s+=1;var u=32-dl(l)+n;if(30<u){var d=n-n%5;u=(i&(1<<d)-1).toString(32),i>>=d,n-=d,Cs=1<<32-dl(l)+n|s<<n|i,Ls=u+e}else Cs=1<<u|s<<n|i,Ls=e}function So(e){e.return!==null&&(ji(e,1),Nr(e,1,0))}function vo(e){for(;e===Dn;)Dn=Qi[--Yi],Qi[Yi]=null,Wn=Qi[--Yi],Qi[Yi]=null;for(;e===_i;)_i=Ml[--Hl],Ml[Hl]=null,Ls=Ml[--Hl],Ml[Hl]=null,Cs=Ml[--Hl],Ml[Hl]=null}var Jl=null,zl=null,Ve=!1,es=null;function Fr(e,l){var s=Nl(5,null,null,0);s.elementType="DELETED",s.stateNode=l,s.return=e,l=e.deletions,l===null?(e.deletions=[s],e.flags|=16):l.push(s)}function Dr(e,l){switch(e.tag){case 5:var s=e.type;return l=l.nodeType!==1||s.toLowerCase()!==l.nodeName.toLowerCase()?null:l,l!==null?(e.stateNode=l,Jl=e,zl=Ks(l.firstChild),!0):!1;case 6:return l=e.pendingProps===""||l.nodeType!==3?null:l,l!==null?(e.stateNode=l,Jl=e,zl=null,!0):!1;case 13:return l=l.nodeType!==8?null:l,l!==null?(s=_i!==null?{id:Cs,overflow:Ls}:null,e.memoizedState={dehydrated:l,treeContext:s,retryLane:1073741824},s=Nl(18,null,null,0),s.stateNode=l,s.return=e,e.child=s,Jl=e,zl=null,!0):!1;default:return!1}}function wo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xo(e){if(Ve){var l=zl;if(l){var s=l;if(!Dr(e,l)){if(wo(e))throw Error(o(418));l=Ks(s.nextSibling);var i=Jl;l&&Dr(e,l)?Fr(i,s):(e.flags=e.flags&-4097|2,Ve=!1,Jl=e)}}else{if(wo(e))throw Error(o(418));e.flags=e.flags&-4097|2,Ve=!1,Jl=e}}}function Wr(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Jl=e}function $n(e){if(e!==Jl)return!1;if(!Ve)return Wr(e),Ve=!0,!1;var l;if((l=e.tag!==3)&&!(l=e.tag!==5)&&(l=e.type,l=l!=="head"&&l!=="body"&&!go(e.type,e.memoizedProps)),l&&(l=zl)){if(wo(e))throw $r(),Error(o(418));for(;l;)Fr(e,l),l=Ks(l.nextSibling)}if(Wr(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,l=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"){if(l===0){zl=Ks(e.nextSibling);break e}l--}else s!=="$"&&s!=="$!"&&s!=="$?"||l++}e=e.nextSibling}zl=null}}else zl=Jl?Ks(e.stateNode.nextSibling):null;return!0}function $r(){for(var e=zl;e;)e=Ks(e.nextSibling)}function Xi(){zl=Jl=null,Ve=!1}function yo(e){es===null?es=[e]:es.push(e)}var Fg=de.ReactCurrentBatchConfig;function Ht(e,l,s){if(e=s.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(o(309));var i=s.stateNode}if(!i)throw Error(o(147,e));var n=i,u=""+e;return l!==null&&l.ref!==null&&typeof l.ref=="function"&&l.ref._stringRef===u?l.ref:(l=function(d){var h=n.refs;d===null?delete h[u]:h[u]=d},l._stringRef=u,l)}if(typeof e!="string")throw Error(o(284));if(!s._owner)throw Error(o(290,e))}return e}function Vn(e,l){throw e=Object.prototype.toString.call(l),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":e))}function Vr(e){var l=e._init;return l(e._payload)}function Kr(e){function l(I,y){if(e){var P=I.deletions;P===null?(I.deletions=[y],I.flags|=16):P.push(y)}}function s(I,y){if(!e)return null;for(;y!==null;)l(I,y),y=y.sibling;return null}function i(I,y){for(I=new Map;y!==null;)y.key!==null?I.set(y.key,y):I.set(y.index,y),y=y.sibling;return I}function n(I,y){return I=ai(I,y),I.index=0,I.sibling=null,I}function u(I,y,P){return I.index=P,e?(P=I.alternate,P!==null?(P=P.index,P<y?(I.flags|=2,y):P):(I.flags|=2,y)):(I.flags|=1048576,y)}function d(I){return e&&I.alternate===null&&(I.flags|=2),I}function h(I,y,P,W){return y===null||y.tag!==6?(y=fu(P,I.mode,W),y.return=I,y):(y=n(y,P),y.return=I,y)}function S(I,y,P,W){var ae=P.type;return ae===Ee?N(I,y,P.props.children,W,P.key):y!==null&&(y.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Ne&&Vr(ae)===y.type)?(W=n(y,P.props),W.ref=Ht(I,y,P),W.return=I,W):(W=ja(P.type,P.key,P.props,null,I.mode,W),W.ref=Ht(I,y,P),W.return=I,W)}function U(I,y,P,W){return y===null||y.tag!==4||y.stateNode.containerInfo!==P.containerInfo||y.stateNode.implementation!==P.implementation?(y=mu(P,I.mode,W),y.return=I,y):(y=n(y,P.children||[]),y.return=I,y)}function N(I,y,P,W,ae){return y===null||y.tag!==7?(y=bi(P,I.mode,W,ae),y.return=I,y):(y=n(y,P),y.return=I,y)}function D(I,y,P){if(typeof y=="string"&&y!==""||typeof y=="number")return y=fu(""+y,I.mode,P),y.return=I,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ce:return P=ja(y.type,y.key,y.props,null,I.mode,P),P.ref=Ht(I,null,y),P.return=I,P;case ve:return y=mu(y,I.mode,P),y.return=I,y;case Ne:var W=y._init;return D(I,W(y._payload),P)}if(Us(y)||Y(y))return y=bi(y,I.mode,P,null),y.return=I,y;Vn(I,y)}return null}function O(I,y,P,W){var ae=y!==null?y.key:null;if(typeof P=="string"&&P!==""||typeof P=="number")return ae!==null?null:h(I,y,""+P,W);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case ce:return P.key===ae?S(I,y,P,W):null;case ve:return P.key===ae?U(I,y,P,W):null;case Ne:return ae=P._init,O(I,y,ae(P._payload),W)}if(Us(P)||Y(P))return ae!==null?null:N(I,y,P,W,null);Vn(I,P)}return null}function Z(I,y,P,W,ae){if(typeof W=="string"&&W!==""||typeof W=="number")return I=I.get(P)||null,h(y,I,""+W,ae);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case ce:return I=I.get(W.key===null?P:W.key)||null,S(y,I,W,ae);case ve:return I=I.get(W.key===null?P:W.key)||null,U(y,I,W,ae);case Ne:var _e=W._init;return Z(I,y,P,_e(W._payload),ae)}if(Us(W)||Y(W))return I=I.get(P)||null,N(y,I,W,ae,null);Vn(y,W)}return null}function se(I,y,P,W){for(var ae=null,_e=null,je=y,we=y=0,ul=null;je!==null&&we<P.length;we++){je.index>we?(ul=je,je=null):ul=je.sibling;var Be=O(I,je,P[we],W);if(Be===null){je===null&&(je=ul);break}e&&je&&Be.alternate===null&&l(I,je),y=u(Be,y,we),_e===null?ae=Be:_e.sibling=Be,_e=Be,je=ul}if(we===P.length)return s(I,je),Ve&&ji(I,we),ae;if(je===null){for(;we<P.length;we++)je=D(I,P[we],W),je!==null&&(y=u(je,y,we),_e===null?ae=je:_e.sibling=je,_e=je);return Ve&&ji(I,we),ae}for(je=i(I,je);we<P.length;we++)ul=Z(je,I,we,P[we],W),ul!==null&&(e&&ul.alternate!==null&&je.delete(ul.key===null?we:ul.key),y=u(ul,y,we),_e===null?ae=ul:_e.sibling=ul,_e=ul);return e&&je.forEach(function(oi){return l(I,oi)}),Ve&&ji(I,we),ae}function te(I,y,P,W){var ae=Y(P);if(typeof ae!="function")throw Error(o(150));if(P=ae.call(P),P==null)throw Error(o(151));for(var _e=ae=null,je=y,we=y=0,ul=null,Be=P.next();je!==null&&!Be.done;we++,Be=P.next()){je.index>we?(ul=je,je=null):ul=je.sibling;var oi=O(I,je,Be.value,W);if(oi===null){je===null&&(je=ul);break}e&&je&&oi.alternate===null&&l(I,je),y=u(oi,y,we),_e===null?ae=oi:_e.sibling=oi,_e=oi,je=ul}if(Be.done)return s(I,je),Ve&&ji(I,we),ae;if(je===null){for(;!Be.done;we++,Be=P.next())Be=D(I,Be.value,W),Be!==null&&(y=u(Be,y,we),_e===null?ae=Be:_e.sibling=Be,_e=Be);return Ve&&ji(I,we),ae}for(je=i(I,je);!Be.done;we++,Be=P.next())Be=Z(je,I,we,Be.value,W),Be!==null&&(e&&Be.alternate!==null&&je.delete(Be.key===null?we:Be.key),y=u(Be,y,we),_e===null?ae=Be:_e.sibling=Be,_e=Be);return e&&je.forEach(function(Ef){return l(I,Ef)}),Ve&&ji(I,we),ae}function el(I,y,P,W){if(typeof P=="object"&&P!==null&&P.type===Ee&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case ce:e:{for(var ae=P.key,_e=y;_e!==null;){if(_e.key===ae){if(ae=P.type,ae===Ee){if(_e.tag===7){s(I,_e.sibling),y=n(_e,P.props.children),y.return=I,I=y;break e}}else if(_e.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Ne&&Vr(ae)===_e.type){s(I,_e.sibling),y=n(_e,P.props),y.ref=Ht(I,_e,P),y.return=I,I=y;break e}s(I,_e);break}else l(I,_e);_e=_e.sibling}P.type===Ee?(y=bi(P.props.children,I.mode,W,P.key),y.return=I,I=y):(W=ja(P.type,P.key,P.props,null,I.mode,W),W.ref=Ht(I,y,P),W.return=I,I=W)}return d(I);case ve:e:{for(_e=P.key;y!==null;){if(y.key===_e)if(y.tag===4&&y.stateNode.containerInfo===P.containerInfo&&y.stateNode.implementation===P.implementation){s(I,y.sibling),y=n(y,P.children||[]),y.return=I,I=y;break e}else{s(I,y);break}else l(I,y);y=y.sibling}y=mu(P,I.mode,W),y.return=I,I=y}return d(I);case Ne:return _e=P._init,el(I,y,_e(P._payload),W)}if(Us(P))return se(I,y,P,W);if(Y(P))return te(I,y,P,W);Vn(I,P)}return typeof P=="string"&&P!==""||typeof P=="number"?(P=""+P,y!==null&&y.tag===6?(s(I,y.sibling),y=n(y,P),y.return=I,I=y):(s(I,y),y=fu(P,I.mode,W),y.return=I,I=y),d(I)):s(I,y)}return el}var Zi=Kr(!0),Qr=Kr(!1),Kn=Qs(null),Qn=null,et=null,Eo=null;function ko(){Eo=et=Qn=null}function bo(e){var l=Kn.current;We(Kn),e._currentValue=l}function Co(e,l,s){for(;e!==null;){var i=e.alternate;if((e.childLanes&l)!==l?(e.childLanes|=l,i!==null&&(i.childLanes|=l)):i!==null&&(i.childLanes&l)!==l&&(i.childLanes|=l),e===s)break;e=e.return}}function lt(e,l){Qn=e,Eo=et=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&l)!==0&&(bl=!0),e.firstContext=null)}function Tl(e){var l=e._currentValue;if(Eo!==e)if(e={context:e,memoizedValue:l,next:null},et===null){if(Qn===null)throw Error(o(308));et=e,Qn.dependencies={lanes:0,firstContext:e}}else et=et.next=e;return l}var Si=null;function Lo(e){Si===null?Si=[e]:Si.push(e)}function Yr(e,l,s,i){var n=l.interleaved;return n===null?(s.next=s,Lo(l)):(s.next=n.next,n.next=s),l.interleaved=s,Is(e,i)}function Is(e,l){e.lanes|=l;var s=e.alternate;for(s!==null&&(s.lanes|=l),s=e,e=e.return;e!==null;)e.childLanes|=l,s=e.alternate,s!==null&&(s.childLanes|=l),s=e,e=e.return;return s.tag===3?s.stateNode:null}var Zs=!1;function Io(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xr(e,l){e=e.updateQueue,l.updateQueue===e&&(l.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gs(e,l){return{eventTime:e,lane:l,tag:0,payload:null,callback:null,next:null}}function ei(e,l,s){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Ue&2)!==0){var n=i.pending;return n===null?l.next=l:(l.next=n.next,n.next=l),i.pending=l,Is(e,s)}return n=i.interleaved,n===null?(l.next=l,Lo(i)):(l.next=n.next,n.next=l),i.interleaved=l,Is(e,s)}function Yn(e,l,s){if(l=l.updateQueue,l!==null&&(l=l.shared,(s&4194240)!==0)){var i=l.lanes;i&=e.pendingLanes,s|=i,l.lanes=s,Oa(e,s)}}function Zr(e,l){var s=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,s===i)){var n=null,u=null;if(s=s.firstBaseUpdate,s!==null){do{var d={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};u===null?n=u=d:u=u.next=d,s=s.next}while(s!==null);u===null?n=u=l:u=u.next=l}else n=u=l;s={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:i.shared,effects:i.effects},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=l:e.next=l,s.lastBaseUpdate=l}function Xn(e,l,s,i){var n=e.updateQueue;Zs=!1;var u=n.firstBaseUpdate,d=n.lastBaseUpdate,h=n.shared.pending;if(h!==null){n.shared.pending=null;var S=h,U=S.next;S.next=null,d===null?u=U:d.next=U,d=S;var N=e.alternate;N!==null&&(N=N.updateQueue,h=N.lastBaseUpdate,h!==d&&(h===null?N.firstBaseUpdate=U:h.next=U,N.lastBaseUpdate=S))}if(u!==null){var D=n.baseState;d=0,N=U=S=null,h=u;do{var O=h.lane,Z=h.eventTime;if((i&O)===O){N!==null&&(N=N.next={eventTime:Z,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var se=e,te=h;switch(O=l,Z=s,te.tag){case 1:if(se=te.payload,typeof se=="function"){D=se.call(Z,D,O);break e}D=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=te.payload,O=typeof se=="function"?se.call(Z,D,O):se,O==null)break e;D=V({},D,O);break e;case 2:Zs=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,O=n.effects,O===null?n.effects=[h]:O.push(h))}else Z={eventTime:Z,lane:O,tag:h.tag,payload:h.payload,callback:h.callback,next:null},N===null?(U=N=Z,S=D):N=N.next=Z,d|=O;if(h=h.next,h===null){if(h=n.shared.pending,h===null)break;O=h,h=O.next,O.next=null,n.lastBaseUpdate=O,n.shared.pending=null}}while(!0);if(N===null&&(S=D),n.baseState=S,n.firstBaseUpdate=U,n.lastBaseUpdate=N,l=n.shared.interleaved,l!==null){n=l;do d|=n.lane,n=n.next;while(n!==l)}else u===null&&(n.shared.lanes=0);xi|=d,e.lanes=d,e.memoizedState=D}}function ec(e,l,s){if(e=l.effects,l.effects=null,e!==null)for(l=0;l<e.length;l++){var i=e[l],n=i.callback;if(n!==null){if(i.callback=null,i=s,typeof n!="function")throw Error(o(191,n));n.call(i)}}}var Tt={},ds=Qs(Tt),Rt=Qs(Tt),Ot=Qs(Tt);function vi(e){if(e===Tt)throw Error(o(174));return e}function Go(e,l){switch(Oe(Ot,l),Oe(Rt,e),Oe(ds,Tt),e=l.nodeType,e){case 9:case 11:l=(l=l.documentElement)?l.namespaceURI:Gi(null,"");break;default:e=e===8?l.parentNode:l,l=e.namespaceURI||null,e=e.tagName,l=Gi(l,e)}We(ds),Oe(ds,l)}function st(){We(ds),We(Rt),We(Ot)}function lc(e){vi(Ot.current);var l=vi(ds.current),s=Gi(l,e.type);l!==s&&(Oe(Rt,e),Oe(ds,s))}function Po(e){Rt.current===e&&(We(ds),We(Rt))}var Ke=Qs(0);function Zn(e){for(var l=e;l!==null;){if(l.tag===13){var s=l.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return l}else if(l.tag===19&&l.memoizedProps.revealOrder!==void 0){if((l.flags&128)!==0)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break;for(;l.sibling===null;){if(l.return===null||l.return===e)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var Jo=[];function zo(){for(var e=0;e<Jo.length;e++)Jo[e]._workInProgressVersionPrimary=null;Jo.length=0}var ea=de.ReactCurrentDispatcher,Uo=de.ReactCurrentBatchConfig,wi=0,Qe=null,tl=null,al=null,la=!1,Nt=!1,Ft=0,Dg=0;function ml(){throw Error(o(321))}function qo(e,l){if(l===null)return!1;for(var s=0;s<l.length&&s<e.length;s++)if(!Zl(e[s],l[s]))return!1;return!0}function Bo(e,l,s,i,n,u){if(wi=u,Qe=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,ea.current=e===null||e.memoizedState===null?Kg:Qg,e=s(i,n),Nt){u=0;do{if(Nt=!1,Ft=0,25<=u)throw Error(o(301));u+=1,al=tl=null,l.updateQueue=null,ea.current=Yg,e=s(i,n)}while(Nt)}if(ea.current=ta,l=tl!==null&&tl.next!==null,wi=0,al=tl=Qe=null,la=!1,l)throw Error(o(300));return e}function Ao(){var e=Ft!==0;return Ft=0,e}function gs(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return al===null?Qe.memoizedState=al=e:al=al.next=e,al}function Rl(){if(tl===null){var e=Qe.alternate;e=e!==null?e.memoizedState:null}else e=tl.next;var l=al===null?Qe.memoizedState:al.next;if(l!==null)al=l,tl=e;else{if(e===null)throw Error(o(310));tl=e,e={memoizedState:tl.memoizedState,baseState:tl.baseState,baseQueue:tl.baseQueue,queue:tl.queue,next:null},al===null?Qe.memoizedState=al=e:al=al.next=e}return al}function Dt(e,l){return typeof l=="function"?l(e):l}function Mo(e){var l=Rl(),s=l.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=e;var i=tl,n=i.baseQueue,u=s.pending;if(u!==null){if(n!==null){var d=n.next;n.next=u.next,u.next=d}i.baseQueue=n=u,s.pending=null}if(n!==null){u=n.next,i=i.baseState;var h=d=null,S=null,U=u;do{var N=U.lane;if((wi&N)===N)S!==null&&(S=S.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),i=U.hasEagerState?U.eagerState:e(i,U.action);else{var D={lane:N,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};S===null?(h=S=D,d=i):S=S.next=D,Qe.lanes|=N,xi|=N}U=U.next}while(U!==null&&U!==u);S===null?d=i:S.next=h,Zl(i,l.memoizedState)||(bl=!0),l.memoizedState=i,l.baseState=d,l.baseQueue=S,s.lastRenderedState=i}if(e=s.interleaved,e!==null){n=e;do u=n.lane,Qe.lanes|=u,xi|=u,n=n.next;while(n!==e)}else n===null&&(s.lanes=0);return[l.memoizedState,s.dispatch]}function Ho(e){var l=Rl(),s=l.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=e;var i=s.dispatch,n=s.pending,u=l.memoizedState;if(n!==null){s.pending=null;var d=n=n.next;do u=e(u,d.action),d=d.next;while(d!==n);Zl(u,l.memoizedState)||(bl=!0),l.memoizedState=u,l.baseQueue===null&&(l.baseState=u),s.lastRenderedState=u}return[u,i]}function sc(){}function ic(e,l){var s=Qe,i=Rl(),n=l(),u=!Zl(i.memoizedState,n);if(u&&(i.memoizedState=n,bl=!0),i=i.queue,To(ac.bind(null,s,i,e),[e]),i.getSnapshot!==l||u||al!==null&&al.memoizedState.tag&1){if(s.flags|=2048,Wt(9,nc.bind(null,s,i,n,l),void 0,null),ol===null)throw Error(o(349));(wi&30)!==0||tc(s,l,n)}return n}function tc(e,l,s){e.flags|=16384,e={getSnapshot:l,value:s},l=Qe.updateQueue,l===null?(l={lastEffect:null,stores:null},Qe.updateQueue=l,l.stores=[e]):(s=l.stores,s===null?l.stores=[e]:s.push(e))}function nc(e,l,s,i){l.value=s,l.getSnapshot=i,oc(l)&&uc(e)}function ac(e,l,s){return s(function(){oc(l)&&uc(e)})}function oc(e){var l=e.getSnapshot;e=e.value;try{var s=l();return!Zl(e,s)}catch{return!0}}function uc(e){var l=Is(e,1);l!==null&&ts(l,e,1,-1)}function rc(e){var l=gs();return typeof e=="function"&&(e=e()),l.memoizedState=l.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Dt,lastRenderedState:e},l.queue=e,e=e.dispatch=Vg.bind(null,Qe,e),[l.memoizedState,e]}function Wt(e,l,s,i){return e={tag:e,create:l,destroy:s,deps:i,next:null},l=Qe.updateQueue,l===null?(l={lastEffect:null,stores:null},Qe.updateQueue=l,l.lastEffect=e.next=e):(s=l.lastEffect,s===null?l.lastEffect=e.next=e:(i=s.next,s.next=e,e.next=i,l.lastEffect=e)),e}function cc(){return Rl().memoizedState}function sa(e,l,s,i){var n=gs();Qe.flags|=e,n.memoizedState=Wt(1|l,s,void 0,i===void 0?null:i)}function ia(e,l,s,i){var n=Rl();i=i===void 0?null:i;var u=void 0;if(tl!==null){var d=tl.memoizedState;if(u=d.destroy,i!==null&&qo(i,d.deps)){n.memoizedState=Wt(l,s,u,i);return}}Qe.flags|=e,n.memoizedState=Wt(1|l,s,u,i)}function pc(e,l){return sa(8390656,8,e,l)}function To(e,l){return ia(2048,8,e,l)}function dc(e,l){return ia(4,2,e,l)}function gc(e,l){return ia(4,4,e,l)}function fc(e,l){if(typeof l=="function")return e=e(),l(e),function(){l(null)};if(l!=null)return e=e(),l.current=e,function(){l.current=null}}function mc(e,l,s){return s=s!=null?s.concat([e]):null,ia(4,4,fc.bind(null,l,e),s)}function Ro(){}function hc(e,l){var s=Rl();l=l===void 0?null:l;var i=s.memoizedState;return i!==null&&l!==null&&qo(l,i[1])?i[0]:(s.memoizedState=[e,l],e)}function _c(e,l){var s=Rl();l=l===void 0?null:l;var i=s.memoizedState;return i!==null&&l!==null&&qo(l,i[1])?i[0]:(e=e(),s.memoizedState=[e,l],e)}function jc(e,l,s){return(wi&21)===0?(e.baseState&&(e.baseState=!1,bl=!0),e.memoizedState=s):(Zl(s,l)||(s=kn(),Qe.lanes|=s,xi|=s,e.baseState=!0),l)}function Wg(e,l){var s=He;He=s!==0&&4>s?s:4,e(!0);var i=Uo.transition;Uo.transition={};try{e(!1),l()}finally{He=s,Uo.transition=i}}function Sc(){return Rl().memoizedState}function $g(e,l,s){var i=ti(e);if(s={lane:i,action:s,hasEagerState:!1,eagerState:null,next:null},vc(e))wc(l,s);else if(s=Yr(e,l,s,i),s!==null){var n=xl();ts(s,e,i,n),xc(s,l,i)}}function Vg(e,l,s){var i=ti(e),n={lane:i,action:s,hasEagerState:!1,eagerState:null,next:null};if(vc(e))wc(l,n);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=l.lastRenderedReducer,u!==null))try{var d=l.lastRenderedState,h=u(d,s);if(n.hasEagerState=!0,n.eagerState=h,Zl(h,d)){var S=l.interleaved;S===null?(n.next=n,Lo(l)):(n.next=S.next,S.next=n),l.interleaved=n;return}}catch{}finally{}s=Yr(e,l,n,i),s!==null&&(n=xl(),ts(s,e,i,n),xc(s,l,i))}}function vc(e){var l=e.alternate;return e===Qe||l!==null&&l===Qe}function wc(e,l){Nt=la=!0;var s=e.pending;s===null?l.next=l:(l.next=s.next,s.next=l),e.pending=l}function xc(e,l,s){if((s&4194240)!==0){var i=l.lanes;i&=e.pendingLanes,s|=i,l.lanes=s,Oa(e,s)}}var ta={readContext:Tl,useCallback:ml,useContext:ml,useEffect:ml,useImperativeHandle:ml,useInsertionEffect:ml,useLayoutEffect:ml,useMemo:ml,useReducer:ml,useRef:ml,useState:ml,useDebugValue:ml,useDeferredValue:ml,useTransition:ml,useMutableSource:ml,useSyncExternalStore:ml,useId:ml,unstable_isNewReconciler:!1},Kg={readContext:Tl,useCallback:function(e,l){return gs().memoizedState=[e,l===void 0?null:l],e},useContext:Tl,useEffect:pc,useImperativeHandle:function(e,l,s){return s=s!=null?s.concat([e]):null,sa(4194308,4,fc.bind(null,l,e),s)},useLayoutEffect:function(e,l){return sa(4194308,4,e,l)},useInsertionEffect:function(e,l){return sa(4,2,e,l)},useMemo:function(e,l){var s=gs();return l=l===void 0?null:l,e=e(),s.memoizedState=[e,l],e},useReducer:function(e,l,s){var i=gs();return l=s!==void 0?s(l):l,i.memoizedState=i.baseState=l,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=$g.bind(null,Qe,e),[i.memoizedState,e]},useRef:function(e){var l=gs();return e={current:e},l.memoizedState=e},useState:rc,useDebugValue:Ro,useDeferredValue:function(e){return gs().memoizedState=e},useTransition:function(){var e=rc(!1),l=e[0];return e=Wg.bind(null,e[1]),gs().memoizedState=e,[l,e]},useMutableSource:function(){},useSyncExternalStore:function(e,l,s){var i=Qe,n=gs();if(Ve){if(s===void 0)throw Error(o(407));s=s()}else{if(s=l(),ol===null)throw Error(o(349));(wi&30)!==0||tc(i,l,s)}n.memoizedState=s;var u={value:s,getSnapshot:l};return n.queue=u,pc(ac.bind(null,i,u,e),[e]),i.flags|=2048,Wt(9,nc.bind(null,i,u,s,l),void 0,null),s},useId:function(){var e=gs(),l=ol.identifierPrefix;if(Ve){var s=Ls,i=Cs;s=(i&~(1<<32-dl(i)-1)).toString(32)+s,l=":"+l+"R"+s,s=Ft++,0<s&&(l+="H"+s.toString(32)),l+=":"}else s=Dg++,l=":"+l+"r"+s.toString(32)+":";return e.memoizedState=l},unstable_isNewReconciler:!1},Qg={readContext:Tl,useCallback:hc,useContext:Tl,useEffect:To,useImperativeHandle:mc,useInsertionEffect:dc,useLayoutEffect:gc,useMemo:_c,useReducer:Mo,useRef:cc,useState:function(){return Mo(Dt)},useDebugValue:Ro,useDeferredValue:function(e){var l=Rl();return jc(l,tl.memoizedState,e)},useTransition:function(){var e=Mo(Dt)[0],l=Rl().memoizedState;return[e,l]},useMutableSource:sc,useSyncExternalStore:ic,useId:Sc,unstable_isNewReconciler:!1},Yg={readContext:Tl,useCallback:hc,useContext:Tl,useEffect:To,useImperativeHandle:mc,useInsertionEffect:dc,useLayoutEffect:gc,useMemo:_c,useReducer:Ho,useRef:cc,useState:function(){return Ho(Dt)},useDebugValue:Ro,useDeferredValue:function(e){var l=Rl();return tl===null?l.memoizedState=e:jc(l,tl.memoizedState,e)},useTransition:function(){var e=Ho(Dt)[0],l=Rl().memoizedState;return[e,l]},useMutableSource:sc,useSyncExternalStore:ic,useId:Sc,unstable_isNewReconciler:!1};function ls(e,l){if(e&&e.defaultProps){l=V({},l),e=e.defaultProps;for(var s in e)l[s]===void 0&&(l[s]=e[s]);return l}return l}function Oo(e,l,s,i){l=e.memoizedState,s=s(i,l),s=s==null?l:V({},l,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var na={isMounted:function(e){return(e=e._reactInternals)?X(e)===e:!1},enqueueSetState:function(e,l,s){e=e._reactInternals;var i=xl(),n=ti(e),u=Gs(i,n);u.payload=l,s!=null&&(u.callback=s),l=ei(e,u,n),l!==null&&(ts(l,e,n,i),Yn(l,e,n))},enqueueReplaceState:function(e,l,s){e=e._reactInternals;var i=xl(),n=ti(e),u=Gs(i,n);u.tag=1,u.payload=l,s!=null&&(u.callback=s),l=ei(e,u,n),l!==null&&(ts(l,e,n,i),Yn(l,e,n))},enqueueForceUpdate:function(e,l){e=e._reactInternals;var s=xl(),i=ti(e),n=Gs(s,i);n.tag=2,l!=null&&(n.callback=l),l=ei(e,n,i),l!==null&&(ts(l,e,i,s),Yn(l,e,i))}};function yc(e,l,s,i,n,u,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,u,d):l.prototype&&l.prototype.isPureReactComponent?!Jt(s,i)||!Jt(n,u):!0}function Ec(e,l,s){var i=!1,n=Ys,u=l.contextType;return typeof u=="object"&&u!==null?u=Tl(u):(n=kl(l)?hi:fl.current,i=l.contextTypes,u=(i=i!=null)?Ki(e,n):Ys),l=new l(s,u),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=na,e.stateNode=l,l._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=u),l}function kc(e,l,s,i){e=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(s,i),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(s,i),l.state!==e&&na.enqueueReplaceState(l,l.state,null)}function No(e,l,s,i){var n=e.stateNode;n.props=s,n.state=e.memoizedState,n.refs={},Io(e);var u=l.contextType;typeof u=="object"&&u!==null?n.context=Tl(u):(u=kl(l)?hi:fl.current,n.context=Ki(e,u)),n.state=e.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(Oo(e,l,u,s),n.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(l=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),l!==n.state&&na.enqueueReplaceState(n,n.state,null),Xn(e,s,n,i),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308)}function it(e,l){try{var s="",i=l;do s+=k(i),i=i.return;while(i);var n=s}catch(u){n=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:l,stack:n,digest:null}}function Fo(e,l,s){return{value:e,source:null,stack:s??null,digest:l??null}}function Do(e,l){try{console.error(l.value)}catch(s){setTimeout(function(){throw s})}}var Xg=typeof WeakMap=="function"?WeakMap:Map;function bc(e,l,s){s=Gs(-1,s),s.tag=3,s.payload={element:null};var i=l.value;return s.callback=function(){da||(da=!0,au=i),Do(e,l)},s}function Cc(e,l,s){s=Gs(-1,s),s.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var n=l.value;s.payload=function(){return i(n)},s.callback=function(){Do(e,l)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(s.callback=function(){Do(e,l),typeof i!="function"&&(si===null?si=new Set([this]):si.add(this));var d=l.stack;this.componentDidCatch(l.value,{componentStack:d!==null?d:""})}),s}function Lc(e,l,s){var i=e.pingCache;if(i===null){i=e.pingCache=new Xg;var n=new Set;i.set(l,n)}else n=i.get(l),n===void 0&&(n=new Set,i.set(l,n));n.has(s)||(n.add(s),e=gf.bind(null,e,l,s),l.then(e,e))}function Ic(e){do{var l;if((l=e.tag===13)&&(l=e.memoizedState,l=l!==null?l.dehydrated!==null:!0),l)return e;e=e.return}while(e!==null);return null}function Gc(e,l,s,i,n){return(e.mode&1)===0?(e===l?e.flags|=65536:(e.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(l=Gs(-1,1),l.tag=2,ei(s,l,1))),s.lanes|=1),e):(e.flags|=65536,e.lanes=n,e)}var Zg=de.ReactCurrentOwner,bl=!1;function wl(e,l,s,i){l.child=e===null?Qr(l,null,s,i):Zi(l,e.child,s,i)}function Pc(e,l,s,i,n){s=s.render;var u=l.ref;return lt(l,n),i=Bo(e,l,s,i,u,n),s=Ao(),e!==null&&!bl?(l.updateQueue=e.updateQueue,l.flags&=-2053,e.lanes&=~n,Ps(e,l,n)):(Ve&&s&&So(l),l.flags|=1,wl(e,l,i,n),l.child)}function Jc(e,l,s,i,n){if(e===null){var u=s.type;return typeof u=="function"&&!gu(u)&&u.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(l.tag=15,l.type=u,zc(e,l,u,i,n)):(e=ja(s.type,null,i,l,l.mode,n),e.ref=l.ref,e.return=l,l.child=e)}if(u=e.child,(e.lanes&n)===0){var d=u.memoizedProps;if(s=s.compare,s=s!==null?s:Jt,s(d,i)&&e.ref===l.ref)return Ps(e,l,n)}return l.flags|=1,e=ai(u,i),e.ref=l.ref,e.return=l,l.child=e}function zc(e,l,s,i,n){if(e!==null){var u=e.memoizedProps;if(Jt(u,i)&&e.ref===l.ref)if(bl=!1,l.pendingProps=i=u,(e.lanes&n)!==0)(e.flags&131072)!==0&&(bl=!0);else return l.lanes=e.lanes,Ps(e,l,n)}return Wo(e,l,s,i,n)}function Uc(e,l,s){var i=l.pendingProps,n=i.children,u=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((l.mode&1)===0)l.memoizedState={baseLanes:0,cachePool:null,transitions:null},Oe(nt,Ul),Ul|=s;else{if((s&1073741824)===0)return e=u!==null?u.baseLanes|s:s,l.lanes=l.childLanes=1073741824,l.memoizedState={baseLanes:e,cachePool:null,transitions:null},l.updateQueue=null,Oe(nt,Ul),Ul|=e,null;l.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=u!==null?u.baseLanes:s,Oe(nt,Ul),Ul|=i}else u!==null?(i=u.baseLanes|s,l.memoizedState=null):i=s,Oe(nt,Ul),Ul|=i;return wl(e,l,n,s),l.child}function qc(e,l){var s=l.ref;(e===null&&s!==null||e!==null&&e.ref!==s)&&(l.flags|=512,l.flags|=2097152)}function Wo(e,l,s,i,n){var u=kl(s)?hi:fl.current;return u=Ki(l,u),lt(l,n),s=Bo(e,l,s,i,u,n),i=Ao(),e!==null&&!bl?(l.updateQueue=e.updateQueue,l.flags&=-2053,e.lanes&=~n,Ps(e,l,n)):(Ve&&i&&So(l),l.flags|=1,wl(e,l,s,n),l.child)}function Bc(e,l,s,i,n){if(kl(s)){var u=!0;Nn(l)}else u=!1;if(lt(l,n),l.stateNode===null)oa(e,l),Ec(l,s,i),No(l,s,i,n),i=!0;else if(e===null){var d=l.stateNode,h=l.memoizedProps;d.props=h;var S=d.context,U=s.contextType;typeof U=="object"&&U!==null?U=Tl(U):(U=kl(s)?hi:fl.current,U=Ki(l,U));var N=s.getDerivedStateFromProps,D=typeof N=="function"||typeof d.getSnapshotBeforeUpdate=="function";D||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==i||S!==U)&&kc(l,d,i,U),Zs=!1;var O=l.memoizedState;d.state=O,Xn(l,i,d,n),S=l.memoizedState,h!==i||O!==S||El.current||Zs?(typeof N=="function"&&(Oo(l,s,N,i),S=l.memoizedState),(h=Zs||yc(l,s,h,i,O,S,U))?(D||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(l.flags|=4194308)):(typeof d.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=i,l.memoizedState=S),d.props=i,d.state=S,d.context=U,i=h):(typeof d.componentDidMount=="function"&&(l.flags|=4194308),i=!1)}else{d=l.stateNode,Xr(e,l),h=l.memoizedProps,U=l.type===l.elementType?h:ls(l.type,h),d.props=U,D=l.pendingProps,O=d.context,S=s.contextType,typeof S=="object"&&S!==null?S=Tl(S):(S=kl(s)?hi:fl.current,S=Ki(l,S));var Z=s.getDerivedStateFromProps;(N=typeof Z=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==D||O!==S)&&kc(l,d,i,S),Zs=!1,O=l.memoizedState,d.state=O,Xn(l,i,d,n);var se=l.memoizedState;h!==D||O!==se||El.current||Zs?(typeof Z=="function"&&(Oo(l,s,Z,i),se=l.memoizedState),(U=Zs||yc(l,s,U,i,O,se,S)||!1)?(N||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(i,se,S),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(i,se,S)),typeof d.componentDidUpdate=="function"&&(l.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof d.componentDidUpdate!="function"||h===e.memoizedProps&&O===e.memoizedState||(l.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&O===e.memoizedState||(l.flags|=1024),l.memoizedProps=i,l.memoizedState=se),d.props=i,d.state=se,d.context=S,i=U):(typeof d.componentDidUpdate!="function"||h===e.memoizedProps&&O===e.memoizedState||(l.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&O===e.memoizedState||(l.flags|=1024),i=!1)}return $o(e,l,s,i,u,n)}function $o(e,l,s,i,n,u){qc(e,l);var d=(l.flags&128)!==0;if(!i&&!d)return n&&Rr(l,s,!1),Ps(e,l,u);i=l.stateNode,Zg.current=l;var h=d&&typeof s.getDerivedStateFromError!="function"?null:i.render();return l.flags|=1,e!==null&&d?(l.child=Zi(l,e.child,null,u),l.child=Zi(l,null,h,u)):wl(e,l,h,u),l.memoizedState=i.state,n&&Rr(l,s,!0),l.child}function Ac(e){var l=e.stateNode;l.pendingContext?Hr(e,l.pendingContext,l.pendingContext!==l.context):l.context&&Hr(e,l.context,!1),Go(e,l.containerInfo)}function Mc(e,l,s,i,n){return Xi(),yo(n),l.flags|=256,wl(e,l,s,i),l.child}var Vo={dehydrated:null,treeContext:null,retryLane:0};function Ko(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hc(e,l,s){var i=l.pendingProps,n=Ke.current,u=!1,d=(l.flags&128)!==0,h;if((h=d)||(h=e!==null&&e.memoizedState===null?!1:(n&2)!==0),h?(u=!0,l.flags&=-129):(e===null||e.memoizedState!==null)&&(n|=1),Oe(Ke,n&1),e===null)return xo(l),e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((l.mode&1)===0?l.lanes=1:e.data==="$!"?l.lanes=8:l.lanes=1073741824,null):(d=i.children,e=i.fallback,u?(i=l.mode,u=l.child,d={mode:"hidden",children:d},(i&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=d):u=Sa(d,i,0,null),e=bi(e,i,s,null),u.return=l,e.return=l,u.sibling=e,l.child=u,l.child.memoizedState=Ko(s),l.memoizedState=Vo,e):Qo(l,d));if(n=e.memoizedState,n!==null&&(h=n.dehydrated,h!==null))return ef(e,l,d,i,h,n,s);if(u){u=i.fallback,d=l.mode,n=e.child,h=n.sibling;var S={mode:"hidden",children:i.children};return(d&1)===0&&l.child!==n?(i=l.child,i.childLanes=0,i.pendingProps=S,l.deletions=null):(i=ai(n,S),i.subtreeFlags=n.subtreeFlags&14680064),h!==null?u=ai(h,u):(u=bi(u,d,s,null),u.flags|=2),u.return=l,i.return=l,i.sibling=u,l.child=i,i=u,u=l.child,d=e.child.memoizedState,d=d===null?Ko(s):{baseLanes:d.baseLanes|s,cachePool:null,transitions:d.transitions},u.memoizedState=d,u.childLanes=e.childLanes&~s,l.memoizedState=Vo,i}return u=e.child,e=u.sibling,i=ai(u,{mode:"visible",children:i.children}),(l.mode&1)===0&&(i.lanes=s),i.return=l,i.sibling=null,e!==null&&(s=l.deletions,s===null?(l.deletions=[e],l.flags|=16):s.push(e)),l.child=i,l.memoizedState=null,i}function Qo(e,l){return l=Sa({mode:"visible",children:l},e.mode,0,null),l.return=e,e.child=l}function aa(e,l,s,i){return i!==null&&yo(i),Zi(l,e.child,null,s),e=Qo(l,l.pendingProps.children),e.flags|=2,l.memoizedState=null,e}function ef(e,l,s,i,n,u,d){if(s)return l.flags&256?(l.flags&=-257,i=Fo(Error(o(422))),aa(e,l,d,i)):l.memoizedState!==null?(l.child=e.child,l.flags|=128,null):(u=i.fallback,n=l.mode,i=Sa({mode:"visible",children:i.children},n,0,null),u=bi(u,n,d,null),u.flags|=2,i.return=l,u.return=l,i.sibling=u,l.child=i,(l.mode&1)!==0&&Zi(l,e.child,null,d),l.child.memoizedState=Ko(d),l.memoizedState=Vo,u);if((l.mode&1)===0)return aa(e,l,d,null);if(n.data==="$!"){if(i=n.nextSibling&&n.nextSibling.dataset,i)var h=i.dgst;return i=h,u=Error(o(419)),i=Fo(u,i,void 0),aa(e,l,d,i)}if(h=(d&e.childLanes)!==0,bl||h){if(i=ol,i!==null){switch(d&-d){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=(n&(i.suspendedLanes|d))!==0?0:n,n!==0&&n!==u.retryLane&&(u.retryLane=n,Is(e,n),ts(i,e,n,-1))}return du(),i=Fo(Error(o(421))),aa(e,l,d,i)}return n.data==="$?"?(l.flags|=128,l.child=e.child,l=ff.bind(null,e),n._reactRetry=l,null):(e=u.treeContext,zl=Ks(n.nextSibling),Jl=l,Ve=!0,es=null,e!==null&&(Ml[Hl++]=Cs,Ml[Hl++]=Ls,Ml[Hl++]=_i,Cs=e.id,Ls=e.overflow,_i=l),l=Qo(l,i.children),l.flags|=4096,l)}function Tc(e,l,s){e.lanes|=l;var i=e.alternate;i!==null&&(i.lanes|=l),Co(e.return,l,s)}function Yo(e,l,s,i,n){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:i,tail:s,tailMode:n}:(u.isBackwards=l,u.rendering=null,u.renderingStartTime=0,u.last=i,u.tail=s,u.tailMode=n)}function Rc(e,l,s){var i=l.pendingProps,n=i.revealOrder,u=i.tail;if(wl(e,l,i.children,s),i=Ke.current,(i&2)!==0)i=i&1|2,l.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=l.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tc(e,s,l);else if(e.tag===19)Tc(e,s,l);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===l)break e;for(;e.sibling===null;){if(e.return===null||e.return===l)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(Oe(Ke,i),(l.mode&1)===0)l.memoizedState=null;else switch(n){case"forwards":for(s=l.child,n=null;s!==null;)e=s.alternate,e!==null&&Zn(e)===null&&(n=s),s=s.sibling;s=n,s===null?(n=l.child,l.child=null):(n=s.sibling,s.sibling=null),Yo(l,!1,n,s,u);break;case"backwards":for(s=null,n=l.child,l.child=null;n!==null;){if(e=n.alternate,e!==null&&Zn(e)===null){l.child=n;break}e=n.sibling,n.sibling=s,s=n,n=e}Yo(l,!0,s,null,u);break;case"together":Yo(l,!1,null,null,void 0);break;default:l.memoizedState=null}return l.child}function oa(e,l){(l.mode&1)===0&&e!==null&&(e.alternate=null,l.alternate=null,l.flags|=2)}function Ps(e,l,s){if(e!==null&&(l.dependencies=e.dependencies),xi|=l.lanes,(s&l.childLanes)===0)return null;if(e!==null&&l.child!==e.child)throw Error(o(153));if(l.child!==null){for(e=l.child,s=ai(e,e.pendingProps),l.child=s,s.return=l;e.sibling!==null;)e=e.sibling,s=s.sibling=ai(e,e.pendingProps),s.return=l;s.sibling=null}return l.child}function lf(e,l,s){switch(l.tag){case 3:Ac(l),Xi();break;case 5:lc(l);break;case 1:kl(l.type)&&Nn(l);break;case 4:Go(l,l.stateNode.containerInfo);break;case 10:var i=l.type._context,n=l.memoizedProps.value;Oe(Kn,i._currentValue),i._currentValue=n;break;case 13:if(i=l.memoizedState,i!==null)return i.dehydrated!==null?(Oe(Ke,Ke.current&1),l.flags|=128,null):(s&l.child.childLanes)!==0?Hc(e,l,s):(Oe(Ke,Ke.current&1),e=Ps(e,l,s),e!==null?e.sibling:null);Oe(Ke,Ke.current&1);break;case 19:if(i=(s&l.childLanes)!==0,(e.flags&128)!==0){if(i)return Rc(e,l,s);l.flags|=128}if(n=l.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Oe(Ke,Ke.current),i)break;return null;case 22:case 23:return l.lanes=0,Uc(e,l,s)}return Ps(e,l,s)}var Oc,Xo,Nc,Fc;Oc=function(e,l){for(var s=l.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===l)break;for(;s.sibling===null;){if(s.return===null||s.return===l)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Xo=function(){},Nc=function(e,l,s,i){var n=e.memoizedProps;if(n!==i){e=l.stateNode,vi(ds.current);var u=null;switch(s){case"input":n=us(e,n),i=us(e,i),u=[];break;case"select":n=V({},n,{value:void 0}),i=V({},i,{value:void 0}),u=[];break;case"textarea":n=ht(e,n),i=ht(e,i),u=[];break;default:typeof n.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Tn)}Ji(s,i);var d;s=null;for(U in n)if(!i.hasOwnProperty(U)&&n.hasOwnProperty(U)&&n[U]!=null)if(U==="style"){var h=n[U];for(d in h)h.hasOwnProperty(d)&&(s||(s={}),s[d]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(c.hasOwnProperty(U)?u||(u=[]):(u=u||[]).push(U,null));for(U in i){var S=i[U];if(h=n!=null?n[U]:void 0,i.hasOwnProperty(U)&&S!==h&&(S!=null||h!=null))if(U==="style")if(h){for(d in h)!h.hasOwnProperty(d)||S&&S.hasOwnProperty(d)||(s||(s={}),s[d]="");for(d in S)S.hasOwnProperty(d)&&h[d]!==S[d]&&(s||(s={}),s[d]=S[d])}else s||(u||(u=[]),u.push(U,s)),s=S;else U==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,h=h?h.__html:void 0,S!=null&&h!==S&&(u=u||[]).push(U,S)):U==="children"?typeof S!="string"&&typeof S!="number"||(u=u||[]).push(U,""+S):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(c.hasOwnProperty(U)?(S!=null&&U==="onScroll"&&De("scroll",e),u||h===S||(u=[])):(u=u||[]).push(U,S))}s&&(u=u||[]).push("style",s);var U=u;(l.updateQueue=U)&&(l.flags|=4)}},Fc=function(e,l,s,i){s!==i&&(l.flags|=4)};function $t(e,l){if(!Ve)switch(e.tailMode){case"hidden":l=e.tail;for(var s=null;l!==null;)l.alternate!==null&&(s=l),l=l.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var i=null;s!==null;)s.alternate!==null&&(i=s),s=s.sibling;i===null?l||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function hl(e){var l=e.alternate!==null&&e.alternate.child===e.child,s=0,i=0;if(l)for(var n=e.child;n!==null;)s|=n.lanes|n.childLanes,i|=n.subtreeFlags&14680064,i|=n.flags&14680064,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)s|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=i,e.childLanes=s,l}function sf(e,l,s){var i=l.pendingProps;switch(vo(l),l.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hl(l),null;case 1:return kl(l.type)&&On(),hl(l),null;case 3:return i=l.stateNode,st(),We(El),We(fl),zo(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&($n(l)?l.flags|=4:e===null||e.memoizedState.isDehydrated&&(l.flags&256)===0||(l.flags|=1024,es!==null&&(ru(es),es=null))),Xo(e,l),hl(l),null;case 5:Po(l);var n=vi(Ot.current);if(s=l.type,e!==null&&l.stateNode!=null)Nc(e,l,s,i,n),e.ref!==l.ref&&(l.flags|=512,l.flags|=2097152);else{if(!i){if(l.stateNode===null)throw Error(o(166));return hl(l),null}if(e=vi(ds.current),$n(l)){i=l.stateNode,s=l.type;var u=l.memoizedProps;switch(i[ps]=l,i[At]=u,e=(l.mode&1)!==0,s){case"dialog":De("cancel",i),De("close",i);break;case"iframe":case"object":case"embed":De("load",i);break;case"video":case"audio":for(n=0;n<Ut.length;n++)De(Ut[n],i);break;case"source":De("error",i);break;case"img":case"image":case"link":De("error",i),De("load",i);break;case"details":De("toggle",i);break;case"input":ft(i,u),De("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!u.multiple},De("invalid",i);break;case"textarea":vn(i,u),De("invalid",i)}Ji(s,u),n=null;for(var d in u)if(u.hasOwnProperty(d)){var h=u[d];d==="children"?typeof h=="string"?i.textContent!==h&&(u.suppressHydrationWarning!==!0&&Hn(i.textContent,h,e),n=["children",h]):typeof h=="number"&&i.textContent!==""+h&&(u.suppressHydrationWarning!==!0&&Hn(i.textContent,h,e),n=["children",""+h]):c.hasOwnProperty(d)&&h!=null&&d==="onScroll"&&De("scroll",i)}switch(s){case"input":ws(i),Sn(i,u,!0);break;case"textarea":ws(i),rs(i);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(i.onclick=Tn)}i=n,l.updateQueue=i,i!==null&&(l.flags|=4)}else{d=n.nodeType===9?n:n.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bs(s)),e==="http://www.w3.org/1999/xhtml"?s==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=d.createElement(s,{is:i.is}):(e=d.createElement(s),s==="select"&&(d=e,i.multiple?d.multiple=!0:i.size&&(d.size=i.size))):e=d.createElementNS(e,s),e[ps]=l,e[At]=i,Oc(e,l,!1,!1),l.stateNode=e;e:{switch(d=zi(s,i),s){case"dialog":De("cancel",e),De("close",e),n=i;break;case"iframe":case"object":case"embed":De("load",e),n=i;break;case"video":case"audio":for(n=0;n<Ut.length;n++)De(Ut[n],e);n=i;break;case"source":De("error",e),n=i;break;case"img":case"image":case"link":De("error",e),De("load",e),n=i;break;case"details":De("toggle",e),n=i;break;case"input":ft(e,i),n=us(e,i),De("invalid",e);break;case"option":n=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},n=V({},i,{value:void 0}),De("invalid",e);break;case"textarea":vn(e,i),n=ht(e,i),De("invalid",e);break;default:n=i}Ji(s,n),h=n;for(u in h)if(h.hasOwnProperty(u)){var S=h[u];u==="style"?xn(e,S):u==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,S!=null&&Al(e,S)):u==="children"?typeof S=="string"?(s!=="textarea"||S!=="")&&Sl(e,S):typeof S=="number"&&Sl(e,""+S):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(c.hasOwnProperty(u)?S!=null&&u==="onScroll"&&De("scroll",e):S!=null&&ie(e,u,S,d))}switch(s){case"input":ws(e),Sn(e,i,!1);break;case"textarea":ws(e),rs(e);break;case"option":i.value!=null&&e.setAttribute("value",""+ee(i.value));break;case"select":e.multiple=!!i.multiple,u=i.value,u!=null?qs(e,!!i.multiple,u,!1):i.defaultValue!=null&&qs(e,!!i.multiple,i.defaultValue,!0);break;default:typeof n.onClick=="function"&&(e.onclick=Tn)}switch(s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(l.flags|=4)}l.ref!==null&&(l.flags|=512,l.flags|=2097152)}return hl(l),null;case 6:if(e&&l.stateNode!=null)Fc(e,l,e.memoizedProps,i);else{if(typeof i!="string"&&l.stateNode===null)throw Error(o(166));if(s=vi(Ot.current),vi(ds.current),$n(l)){if(i=l.stateNode,s=l.memoizedProps,i[ps]=l,(u=i.nodeValue!==s)&&(e=Jl,e!==null))switch(e.tag){case 3:Hn(i.nodeValue,s,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hn(i.nodeValue,s,(e.mode&1)!==0)}u&&(l.flags|=4)}else i=(s.nodeType===9?s:s.ownerDocument).createTextNode(i),i[ps]=l,l.stateNode=i}return hl(l),null;case 13:if(We(Ke),i=l.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ve&&zl!==null&&(l.mode&1)!==0&&(l.flags&128)===0)$r(),Xi(),l.flags|=98560,u=!1;else if(u=$n(l),i!==null&&i.dehydrated!==null){if(e===null){if(!u)throw Error(o(318));if(u=l.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[ps]=l}else Xi(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;hl(l),u=!1}else es!==null&&(ru(es),es=null),u=!0;if(!u)return l.flags&65536?l:null}return(l.flags&128)!==0?(l.lanes=s,l):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(l.child.flags|=8192,(l.mode&1)!==0&&(e===null||(Ke.current&1)!==0?nl===0&&(nl=3):du())),l.updateQueue!==null&&(l.flags|=4),hl(l),null);case 4:return st(),Xo(e,l),e===null&&qt(l.stateNode.containerInfo),hl(l),null;case 10:return bo(l.type._context),hl(l),null;case 17:return kl(l.type)&&On(),hl(l),null;case 19:if(We(Ke),u=l.memoizedState,u===null)return hl(l),null;if(i=(l.flags&128)!==0,d=u.rendering,d===null)if(i)$t(u,!1);else{if(nl!==0||e!==null&&(e.flags&128)!==0)for(e=l.child;e!==null;){if(d=Zn(e),d!==null){for(l.flags|=128,$t(u,!1),i=d.updateQueue,i!==null&&(l.updateQueue=i,l.flags|=4),l.subtreeFlags=0,i=s,s=l.child;s!==null;)u=s,e=i,u.flags&=14680066,d=u.alternate,d===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=d.childLanes,u.lanes=d.lanes,u.child=d.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=d.memoizedProps,u.memoizedState=d.memoizedState,u.updateQueue=d.updateQueue,u.type=d.type,e=d.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),s=s.sibling;return Oe(Ke,Ke.current&1|2),l.child}e=e.sibling}u.tail!==null&&Pe()>at&&(l.flags|=128,i=!0,$t(u,!1),l.lanes=4194304)}else{if(!i)if(e=Zn(d),e!==null){if(l.flags|=128,i=!0,s=e.updateQueue,s!==null&&(l.updateQueue=s,l.flags|=4),$t(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Ve)return hl(l),null}else 2*Pe()-u.renderingStartTime>at&&s!==1073741824&&(l.flags|=128,i=!0,$t(u,!1),l.lanes=4194304);u.isBackwards?(d.sibling=l.child,l.child=d):(s=u.last,s!==null?s.sibling=d:l.child=d,u.last=d)}return u.tail!==null?(l=u.tail,u.rendering=l,u.tail=l.sibling,u.renderingStartTime=Pe(),l.sibling=null,s=Ke.current,Oe(Ke,i?s&1|2:s&1),l):(hl(l),null);case 22:case 23:return pu(),i=l.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(l.flags|=8192),i&&(l.mode&1)!==0?(Ul&1073741824)!==0&&(hl(l),l.subtreeFlags&6&&(l.flags|=8192)):hl(l),null;case 24:return null;case 25:return null}throw Error(o(156,l.tag))}function tf(e,l){switch(vo(l),l.tag){case 1:return kl(l.type)&&On(),e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 3:return st(),We(El),We(fl),zo(),e=l.flags,(e&65536)!==0&&(e&128)===0?(l.flags=e&-65537|128,l):null;case 5:return Po(l),null;case 13:if(We(Ke),e=l.memoizedState,e!==null&&e.dehydrated!==null){if(l.alternate===null)throw Error(o(340));Xi()}return e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 19:return We(Ke),null;case 4:return st(),null;case 10:return bo(l.type._context),null;case 22:case 23:return pu(),null;case 24:return null;default:return null}}var ua=!1,_l=!1,nf=typeof WeakSet=="function"?WeakSet:Set,le=null;function tt(e,l){var s=e.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(i){Ye(e,l,i)}else s.current=null}function Zo(e,l,s){try{s()}catch(i){Ye(e,l,i)}}var Dc=!1;function af(e,l){if(co=Ln,e=yr(),so(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var i=s.getSelection&&s.getSelection();if(i&&i.rangeCount!==0){s=i.anchorNode;var n=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{s.nodeType,u.nodeType}catch{s=null;break e}var d=0,h=-1,S=-1,U=0,N=0,D=e,O=null;l:for(;;){for(var Z;D!==s||n!==0&&D.nodeType!==3||(h=d+n),D!==u||i!==0&&D.nodeType!==3||(S=d+i),D.nodeType===3&&(d+=D.nodeValue.length),(Z=D.firstChild)!==null;)O=D,D=Z;for(;;){if(D===e)break l;if(O===s&&++U===n&&(h=d),O===u&&++N===i&&(S=d),(Z=D.nextSibling)!==null)break;D=O,O=D.parentNode}D=Z}s=h===-1||S===-1?null:{start:h,end:S}}else s=null}s=s||{start:0,end:0}}else s=null;for(po={focusedElem:e,selectionRange:s},Ln=!1,le=l;le!==null;)if(l=le,e=l.child,(l.subtreeFlags&1028)!==0&&e!==null)e.return=l,le=e;else for(;le!==null;){l=le;try{var se=l.alternate;if((l.flags&1024)!==0)switch(l.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var te=se.memoizedProps,el=se.memoizedState,I=l.stateNode,y=I.getSnapshotBeforeUpdate(l.elementType===l.type?te:ls(l.type,te),el);I.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var P=l.stateNode.containerInfo;P.nodeType===1?P.textContent="":P.nodeType===9&&P.documentElement&&P.removeChild(P.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(W){Ye(l,l.return,W)}if(e=l.sibling,e!==null){e.return=l.return,le=e;break}le=l.return}return se=Dc,Dc=!1,se}function Vt(e,l,s){var i=l.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var n=i=i.next;do{if((n.tag&e)===e){var u=n.destroy;n.destroy=void 0,u!==void 0&&Zo(l,s,u)}n=n.next}while(n!==i)}}function ra(e,l){if(l=l.updateQueue,l=l!==null?l.lastEffect:null,l!==null){var s=l=l.next;do{if((s.tag&e)===e){var i=s.create;s.destroy=i()}s=s.next}while(s!==l)}}function eu(e){var l=e.ref;if(l!==null){var s=e.stateNode;switch(e.tag){case 5:e=s;break;default:e=s}typeof l=="function"?l(e):l.current=e}}function Wc(e){var l=e.alternate;l!==null&&(e.alternate=null,Wc(l)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(l=e.stateNode,l!==null&&(delete l[ps],delete l[At],delete l[ho],delete l[Rg],delete l[Og])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $c(e){return e.tag===5||e.tag===3||e.tag===4}function Vc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lu(e,l,s){var i=e.tag;if(i===5||i===6)e=e.stateNode,l?s.nodeType===8?s.parentNode.insertBefore(e,l):s.insertBefore(e,l):(s.nodeType===8?(l=s.parentNode,l.insertBefore(e,s)):(l=s,l.appendChild(e)),s=s._reactRootContainer,s!=null||l.onclick!==null||(l.onclick=Tn));else if(i!==4&&(e=e.child,e!==null))for(lu(e,l,s),e=e.sibling;e!==null;)lu(e,l,s),e=e.sibling}function su(e,l,s){var i=e.tag;if(i===5||i===6)e=e.stateNode,l?s.insertBefore(e,l):s.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(su(e,l,s),e=e.sibling;e!==null;)su(e,l,s),e=e.sibling}var rl=null,ss=!1;function li(e,l,s){for(s=s.child;s!==null;)Kc(e,l,s),s=s.sibling}function Kc(e,l,s){if(il&&typeof il.onCommitFiberUnmount=="function")try{il.onCommitFiberUnmount(Ts,s)}catch{}switch(s.tag){case 5:_l||tt(s,l);case 6:var i=rl,n=ss;rl=null,li(e,l,s),rl=i,ss=n,rl!==null&&(ss?(e=rl,s=s.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)):rl.removeChild(s.stateNode));break;case 18:rl!==null&&(ss?(e=rl,s=s.stateNode,e.nodeType===8?mo(e.parentNode,s):e.nodeType===1&&mo(e,s),bt(e)):mo(rl,s.stateNode));break;case 4:i=rl,n=ss,rl=s.stateNode.containerInfo,ss=!0,li(e,l,s),rl=i,ss=n;break;case 0:case 11:case 14:case 15:if(!_l&&(i=s.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){n=i=i.next;do{var u=n,d=u.destroy;u=u.tag,d!==void 0&&((u&2)!==0||(u&4)!==0)&&Zo(s,l,d),n=n.next}while(n!==i)}li(e,l,s);break;case 1:if(!_l&&(tt(s,l),i=s.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=s.memoizedProps,i.state=s.memoizedState,i.componentWillUnmount()}catch(h){Ye(s,l,h)}li(e,l,s);break;case 21:li(e,l,s);break;case 22:s.mode&1?(_l=(i=_l)||s.memoizedState!==null,li(e,l,s),_l=i):li(e,l,s);break;default:li(e,l,s)}}function Qc(e){var l=e.updateQueue;if(l!==null){e.updateQueue=null;var s=e.stateNode;s===null&&(s=e.stateNode=new nf),l.forEach(function(i){var n=mf.bind(null,e,i);s.has(i)||(s.add(i),i.then(n,n))})}}function is(e,l){var s=l.deletions;if(s!==null)for(var i=0;i<s.length;i++){var n=s[i];try{var u=e,d=l,h=d;e:for(;h!==null;){switch(h.tag){case 5:rl=h.stateNode,ss=!1;break e;case 3:rl=h.stateNode.containerInfo,ss=!0;break e;case 4:rl=h.stateNode.containerInfo,ss=!0;break e}h=h.return}if(rl===null)throw Error(o(160));Kc(u,d,n),rl=null,ss=!1;var S=n.alternate;S!==null&&(S.return=null),n.return=null}catch(U){Ye(n,l,U)}}if(l.subtreeFlags&12854)for(l=l.child;l!==null;)Yc(l,e),l=l.sibling}function Yc(e,l){var s=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(is(l,e),fs(e),i&4){try{Vt(3,e,e.return),ra(3,e)}catch(te){Ye(e,e.return,te)}try{Vt(5,e,e.return)}catch(te){Ye(e,e.return,te)}}break;case 1:is(l,e),fs(e),i&512&&s!==null&&tt(s,s.return);break;case 5:if(is(l,e),fs(e),i&512&&s!==null&&tt(s,s.return),e.flags&32){var n=e.stateNode;try{Sl(n,"")}catch(te){Ye(e,e.return,te)}}if(i&4&&(n=e.stateNode,n!=null)){var u=e.memoizedProps,d=s!==null?s.memoizedProps:u,h=e.type,S=e.updateQueue;if(e.updateQueue=null,S!==null)try{h==="input"&&u.type==="radio"&&u.name!=null&&jn(n,u),zi(h,d);var U=zi(h,u);for(d=0;d<S.length;d+=2){var N=S[d],D=S[d+1];N==="style"?xn(n,D):N==="dangerouslySetInnerHTML"?Al(n,D):N==="children"?Sl(n,D):ie(n,N,D,U)}switch(h){case"input":Vl(n,u);break;case"textarea":wn(n,u);break;case"select":var O=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!u.multiple;var Z=u.value;Z!=null?qs(n,!!u.multiple,Z,!1):O!==!!u.multiple&&(u.defaultValue!=null?qs(n,!!u.multiple,u.defaultValue,!0):qs(n,!!u.multiple,u.multiple?[]:"",!1))}n[At]=u}catch(te){Ye(e,e.return,te)}}break;case 6:if(is(l,e),fs(e),i&4){if(e.stateNode===null)throw Error(o(162));n=e.stateNode,u=e.memoizedProps;try{n.nodeValue=u}catch(te){Ye(e,e.return,te)}}break;case 3:if(is(l,e),fs(e),i&4&&s!==null&&s.memoizedState.isDehydrated)try{bt(l.containerInfo)}catch(te){Ye(e,e.return,te)}break;case 4:is(l,e),fs(e);break;case 13:is(l,e),fs(e),n=e.child,n.flags&8192&&(u=n.memoizedState!==null,n.stateNode.isHidden=u,!u||n.alternate!==null&&n.alternate.memoizedState!==null||(nu=Pe())),i&4&&Qc(e);break;case 22:if(N=s!==null&&s.memoizedState!==null,e.mode&1?(_l=(U=_l)||N,is(l,e),_l=U):is(l,e),fs(e),i&8192){if(U=e.memoizedState!==null,(e.stateNode.isHidden=U)&&!N&&(e.mode&1)!==0)for(le=e,N=e.child;N!==null;){for(D=le=N;le!==null;){switch(O=le,Z=O.child,O.tag){case 0:case 11:case 14:case 15:Vt(4,O,O.return);break;case 1:tt(O,O.return);var se=O.stateNode;if(typeof se.componentWillUnmount=="function"){i=O,s=O.return;try{l=i,se.props=l.memoizedProps,se.state=l.memoizedState,se.componentWillUnmount()}catch(te){Ye(i,s,te)}}break;case 5:tt(O,O.return);break;case 22:if(O.memoizedState!==null){ep(D);continue}}Z!==null?(Z.return=O,le=Z):ep(D)}N=N.sibling}e:for(N=null,D=e;;){if(D.tag===5){if(N===null){N=D;try{n=D.stateNode,U?(u=n.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(h=D.stateNode,S=D.memoizedProps.style,d=S!=null&&S.hasOwnProperty("display")?S.display:null,h.style.display=Pi("display",d))}catch(te){Ye(e,e.return,te)}}}else if(D.tag===6){if(N===null)try{D.stateNode.nodeValue=U?"":D.memoizedProps}catch(te){Ye(e,e.return,te)}}else if((D.tag!==22&&D.tag!==23||D.memoizedState===null||D===e)&&D.child!==null){D.child.return=D,D=D.child;continue}if(D===e)break e;for(;D.sibling===null;){if(D.return===null||D.return===e)break e;N===D&&(N=null),D=D.return}N===D&&(N=null),D.sibling.return=D.return,D=D.sibling}}break;case 19:is(l,e),fs(e),i&4&&Qc(e);break;case 21:break;default:is(l,e),fs(e)}}function fs(e){var l=e.flags;if(l&2){try{e:{for(var s=e.return;s!==null;){if($c(s)){var i=s;break e}s=s.return}throw Error(o(160))}switch(i.tag){case 5:var n=i.stateNode;i.flags&32&&(Sl(n,""),i.flags&=-33);var u=Vc(e);su(e,u,n);break;case 3:case 4:var d=i.stateNode.containerInfo,h=Vc(e);lu(e,h,d);break;default:throw Error(o(161))}}catch(S){Ye(e,e.return,S)}e.flags&=-3}l&4096&&(e.flags&=-4097)}function of(e,l,s){le=e,Xc(e)}function Xc(e,l,s){for(var i=(e.mode&1)!==0;le!==null;){var n=le,u=n.child;if(n.tag===22&&i){var d=n.memoizedState!==null||ua;if(!d){var h=n.alternate,S=h!==null&&h.memoizedState!==null||_l;h=ua;var U=_l;if(ua=d,(_l=S)&&!U)for(le=n;le!==null;)d=le,S=d.child,d.tag===22&&d.memoizedState!==null?lp(n):S!==null?(S.return=d,le=S):lp(n);for(;u!==null;)le=u,Xc(u),u=u.sibling;le=n,ua=h,_l=U}Zc(e)}else(n.subtreeFlags&8772)!==0&&u!==null?(u.return=n,le=u):Zc(e)}}function Zc(e){for(;le!==null;){var l=le;if((l.flags&8772)!==0){var s=l.alternate;try{if((l.flags&8772)!==0)switch(l.tag){case 0:case 11:case 15:_l||ra(5,l);break;case 1:var i=l.stateNode;if(l.flags&4&&!_l)if(s===null)i.componentDidMount();else{var n=l.elementType===l.type?s.memoizedProps:ls(l.type,s.memoizedProps);i.componentDidUpdate(n,s.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var u=l.updateQueue;u!==null&&ec(l,u,i);break;case 3:var d=l.updateQueue;if(d!==null){if(s=null,l.child!==null)switch(l.child.tag){case 5:s=l.child.stateNode;break;case 1:s=l.child.stateNode}ec(l,d,s)}break;case 5:var h=l.stateNode;if(s===null&&l.flags&4){s=h;var S=l.memoizedProps;switch(l.type){case"button":case"input":case"select":case"textarea":S.autoFocus&&s.focus();break;case"img":S.src&&(s.src=S.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(l.memoizedState===null){var U=l.alternate;if(U!==null){var N=U.memoizedState;if(N!==null){var D=N.dehydrated;D!==null&&bt(D)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}_l||l.flags&512&&eu(l)}catch(O){Ye(l,l.return,O)}}if(l===e){le=null;break}if(s=l.sibling,s!==null){s.return=l.return,le=s;break}le=l.return}}function ep(e){for(;le!==null;){var l=le;if(l===e){le=null;break}var s=l.sibling;if(s!==null){s.return=l.return,le=s;break}le=l.return}}function lp(e){for(;le!==null;){var l=le;try{switch(l.tag){case 0:case 11:case 15:var s=l.return;try{ra(4,l)}catch(S){Ye(l,s,S)}break;case 1:var i=l.stateNode;if(typeof i.componentDidMount=="function"){var n=l.return;try{i.componentDidMount()}catch(S){Ye(l,n,S)}}var u=l.return;try{eu(l)}catch(S){Ye(l,u,S)}break;case 5:var d=l.return;try{eu(l)}catch(S){Ye(l,d,S)}}}catch(S){Ye(l,l.return,S)}if(l===e){le=null;break}var h=l.sibling;if(h!==null){h.return=l.return,le=h;break}le=l.return}}var uf=Math.ceil,ca=de.ReactCurrentDispatcher,iu=de.ReactCurrentOwner,Ol=de.ReactCurrentBatchConfig,Ue=0,ol=null,sl=null,cl=0,Ul=0,nt=Qs(0),nl=0,Kt=null,xi=0,pa=0,tu=0,Qt=null,Cl=null,nu=0,at=1/0,Js=null,da=!1,au=null,si=null,ga=!1,ii=null,fa=0,Yt=0,ou=null,ma=-1,ha=0;function xl(){return(Ue&6)!==0?Pe():ma!==-1?ma:ma=Pe()}function ti(e){return(e.mode&1)===0?1:(Ue&2)!==0&&cl!==0?cl&-cl:Fg.transition!==null?(ha===0&&(ha=kn()),ha):(e=He,e!==0||(e=window.event,e=e===void 0?16:ir(e.type)),e)}function ts(e,l,s,i){if(50<Yt)throw Yt=0,ou=null,Error(o(185));wt(e,s,i),((Ue&2)===0||e!==ol)&&(e===ol&&((Ue&2)===0&&(pa|=s),nl===4&&ni(e,cl)),Ll(e,i),s===1&&Ue===0&&(l.mode&1)===0&&(at=Pe()+500,Fn&&Xs()))}function Ll(e,l){var s=e.callbackNode;Es(e,l);var i=Os(e,e===ol?cl:0);if(i===0)s!==null&&Ze(s),e.callbackNode=null,e.callbackPriority=0;else if(l=i&-i,e.callbackPriority!==l){if(s!=null&&Ze(s),l===1)e.tag===0?Ng(ip.bind(null,e)):Or(ip.bind(null,e)),Hg(function(){(Ue&6)===0&&Xs()}),s=null;else{switch(Ku(i)){case 1:s=ys;break;case 4:s=Yl;break;case 16:s=Xl;break;case 536870912:s=Gl;break;default:s=Xl}s=pp(s,sp.bind(null,e))}e.callbackPriority=l,e.callbackNode=s}}function sp(e,l){if(ma=-1,ha=0,(Ue&6)!==0)throw Error(o(327));var s=e.callbackNode;if(ot()&&e.callbackNode!==s)return null;var i=Os(e,e===ol?cl:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||l)l=_a(e,i);else{l=i;var n=Ue;Ue|=2;var u=np();(ol!==e||cl!==l)&&(Js=null,at=Pe()+500,Ei(e,l));do try{pf();break}catch(h){tp(e,h)}while(!0);ko(),ca.current=u,Ue=n,sl!==null?l=0:(ol=null,cl=0,l=nl)}if(l!==0){if(l===2&&(n=Hi(e),n!==0&&(i=n,l=uu(e,n))),l===1)throw s=Kt,Ei(e,0),ni(e,i),Ll(e,Pe()),s;if(l===6)ni(e,i);else{if(n=e.current.alternate,(i&30)===0&&!rf(n)&&(l=_a(e,i),l===2&&(u=Hi(e),u!==0&&(i=u,l=uu(e,u))),l===1))throw s=Kt,Ei(e,0),ni(e,i),Ll(e,Pe()),s;switch(e.finishedWork=n,e.finishedLanes=i,l){case 0:case 1:throw Error(o(345));case 2:ki(e,Cl,Js);break;case 3:if(ni(e,i),(i&130023424)===i&&(l=nu+500-Pe(),10<l)){if(Os(e,0)!==0)break;if(n=e.suspendedLanes,(n&i)!==i){xl(),e.pingedLanes|=e.suspendedLanes&n;break}e.timeoutHandle=fo(ki.bind(null,e,Cl,Js),l);break}ki(e,Cl,Js);break;case 4:if(ni(e,i),(i&4194240)===i)break;for(l=e.eventTimes,n=-1;0<i;){var d=31-dl(i);u=1<<d,d=l[d],d>n&&(n=d),i&=~u}if(i=n,i=Pe()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*uf(i/1960))-i,10<i){e.timeoutHandle=fo(ki.bind(null,e,Cl,Js),i);break}ki(e,Cl,Js);break;case 5:ki(e,Cl,Js);break;default:throw Error(o(329))}}}return Ll(e,Pe()),e.callbackNode===s?sp.bind(null,e):null}function uu(e,l){var s=Qt;return e.current.memoizedState.isDehydrated&&(Ei(e,l).flags|=256),e=_a(e,l),e!==2&&(l=Cl,Cl=s,l!==null&&ru(l)),e}function ru(e){Cl===null?Cl=e:Cl.push.apply(Cl,e)}function rf(e){for(var l=e;;){if(l.flags&16384){var s=l.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var i=0;i<s.length;i++){var n=s[i],u=n.getSnapshot;n=n.value;try{if(!Zl(u(),n))return!1}catch{return!1}}}if(s=l.child,l.subtreeFlags&16384&&s!==null)s.return=l,l=s;else{if(l===e)break;for(;l.sibling===null;){if(l.return===null||l.return===e)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function ni(e,l){for(l&=~tu,l&=~pa,e.suspendedLanes|=l,e.pingedLanes&=~l,e=e.expirationTimes;0<l;){var s=31-dl(l),i=1<<s;e[s]=-1,l&=~i}}function ip(e){if((Ue&6)!==0)throw Error(o(327));ot();var l=Os(e,0);if((l&1)===0)return Ll(e,Pe()),null;var s=_a(e,l);if(e.tag!==0&&s===2){var i=Hi(e);i!==0&&(l=i,s=uu(e,i))}if(s===1)throw s=Kt,Ei(e,0),ni(e,l),Ll(e,Pe()),s;if(s===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=l,ki(e,Cl,Js),Ll(e,Pe()),null}function cu(e,l){var s=Ue;Ue|=1;try{return e(l)}finally{Ue=s,Ue===0&&(at=Pe()+500,Fn&&Xs())}}function yi(e){ii!==null&&ii.tag===0&&(Ue&6)===0&&ot();var l=Ue;Ue|=1;var s=Ol.transition,i=He;try{if(Ol.transition=null,He=1,e)return e()}finally{He=i,Ol.transition=s,Ue=l,(Ue&6)===0&&Xs()}}function pu(){Ul=nt.current,We(nt)}function Ei(e,l){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;if(s!==-1&&(e.timeoutHandle=-1,Mg(s)),sl!==null)for(s=sl.return;s!==null;){var i=s;switch(vo(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&On();break;case 3:st(),We(El),We(fl),zo();break;case 5:Po(i);break;case 4:st();break;case 13:We(Ke);break;case 19:We(Ke);break;case 10:bo(i.type._context);break;case 22:case 23:pu()}s=s.return}if(ol=e,sl=e=ai(e.current,null),cl=Ul=l,nl=0,Kt=null,tu=pa=xi=0,Cl=Qt=null,Si!==null){for(l=0;l<Si.length;l++)if(s=Si[l],i=s.interleaved,i!==null){s.interleaved=null;var n=i.next,u=s.pending;if(u!==null){var d=u.next;u.next=n,i.next=d}s.pending=i}Si=null}return e}function tp(e,l){do{var s=sl;try{if(ko(),ea.current=ta,la){for(var i=Qe.memoizedState;i!==null;){var n=i.queue;n!==null&&(n.pending=null),i=i.next}la=!1}if(wi=0,al=tl=Qe=null,Nt=!1,Ft=0,iu.current=null,s===null||s.return===null){nl=1,Kt=l,sl=null;break}e:{var u=e,d=s.return,h=s,S=l;if(l=cl,h.flags|=32768,S!==null&&typeof S=="object"&&typeof S.then=="function"){var U=S,N=h,D=N.tag;if((N.mode&1)===0&&(D===0||D===11||D===15)){var O=N.alternate;O?(N.updateQueue=O.updateQueue,N.memoizedState=O.memoizedState,N.lanes=O.lanes):(N.updateQueue=null,N.memoizedState=null)}var Z=Ic(d);if(Z!==null){Z.flags&=-257,Gc(Z,d,h,u,l),Z.mode&1&&Lc(u,U,l),l=Z,S=U;var se=l.updateQueue;if(se===null){var te=new Set;te.add(S),l.updateQueue=te}else se.add(S);break e}else{if((l&1)===0){Lc(u,U,l),du();break e}S=Error(o(426))}}else if(Ve&&h.mode&1){var el=Ic(d);if(el!==null){(el.flags&65536)===0&&(el.flags|=256),Gc(el,d,h,u,l),yo(it(S,h));break e}}u=S=it(S,h),nl!==4&&(nl=2),Qt===null?Qt=[u]:Qt.push(u),u=d;do{switch(u.tag){case 3:u.flags|=65536,l&=-l,u.lanes|=l;var I=bc(u,S,l);Zr(u,I);break e;case 1:h=S;var y=u.type,P=u.stateNode;if((u.flags&128)===0&&(typeof y.getDerivedStateFromError=="function"||P!==null&&typeof P.componentDidCatch=="function"&&(si===null||!si.has(P)))){u.flags|=65536,l&=-l,u.lanes|=l;var W=Cc(u,h,l);Zr(u,W);break e}}u=u.return}while(u!==null)}op(s)}catch(ae){l=ae,sl===s&&s!==null&&(sl=s=s.return);continue}break}while(!0)}function np(){var e=ca.current;return ca.current=ta,e===null?ta:e}function du(){(nl===0||nl===3||nl===2)&&(nl=4),ol===null||(xi&268435455)===0&&(pa&268435455)===0||ni(ol,cl)}function _a(e,l){var s=Ue;Ue|=2;var i=np();(ol!==e||cl!==l)&&(Js=null,Ei(e,l));do try{cf();break}catch(n){tp(e,n)}while(!0);if(ko(),Ue=s,ca.current=i,sl!==null)throw Error(o(261));return ol=null,cl=0,nl}function cf(){for(;sl!==null;)ap(sl)}function pf(){for(;sl!==null&&!Fe();)ap(sl)}function ap(e){var l=cp(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,l===null?op(e):sl=l,iu.current=null}function op(e){var l=e;do{var s=l.alternate;if(e=l.return,(l.flags&32768)===0){if(s=sf(s,l,Ul),s!==null){sl=s;return}}else{if(s=tf(s,l),s!==null){s.flags&=32767,sl=s;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{nl=6,sl=null;return}}if(l=l.sibling,l!==null){sl=l;return}sl=l=e}while(l!==null);nl===0&&(nl=5)}function ki(e,l,s){var i=He,n=Ol.transition;try{Ol.transition=null,He=1,df(e,l,s,i)}finally{Ol.transition=n,He=i}return null}function df(e,l,s,i){do ot();while(ii!==null);if((Ue&6)!==0)throw Error(o(327));s=e.finishedWork;var n=e.finishedLanes;if(s===null)return null;if(e.finishedWork=null,e.finishedLanes=0,s===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var u=s.lanes|s.childLanes;if(Dd(e,u),e===ol&&(sl=ol=null,cl=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||ga||(ga=!0,pp(Xl,function(){return ot(),null})),u=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||u){u=Ol.transition,Ol.transition=null;var d=He;He=1;var h=Ue;Ue|=4,iu.current=null,af(e,s),Yc(s,e),Pg(po),Ln=!!co,po=co=null,e.current=s,of(s),Me(),Ue=h,He=d,Ol.transition=u}else e.current=s;if(ga&&(ga=!1,ii=e,fa=n),u=e.pendingLanes,u===0&&(si=null),Ai(s.stateNode),Ll(e,Pe()),l!==null)for(i=e.onRecoverableError,s=0;s<l.length;s++)n=l[s],i(n.value,{componentStack:n.stack,digest:n.digest});if(da)throw da=!1,e=au,au=null,e;return(fa&1)!==0&&e.tag!==0&&ot(),u=e.pendingLanes,(u&1)!==0?e===ou?Yt++:(Yt=0,ou=e):Yt=0,Xs(),null}function ot(){if(ii!==null){var e=Ku(fa),l=Ol.transition,s=He;try{if(Ol.transition=null,He=16>e?16:e,ii===null)var i=!1;else{if(e=ii,ii=null,fa=0,(Ue&6)!==0)throw Error(o(331));var n=Ue;for(Ue|=4,le=e.current;le!==null;){var u=le,d=u.child;if((le.flags&16)!==0){var h=u.deletions;if(h!==null){for(var S=0;S<h.length;S++){var U=h[S];for(le=U;le!==null;){var N=le;switch(N.tag){case 0:case 11:case 15:Vt(8,N,u)}var D=N.child;if(D!==null)D.return=N,le=D;else for(;le!==null;){N=le;var O=N.sibling,Z=N.return;if(Wc(N),N===U){le=null;break}if(O!==null){O.return=Z,le=O;break}le=Z}}}var se=u.alternate;if(se!==null){var te=se.child;if(te!==null){se.child=null;do{var el=te.sibling;te.sibling=null,te=el}while(te!==null)}}le=u}}if((u.subtreeFlags&2064)!==0&&d!==null)d.return=u,le=d;else e:for(;le!==null;){if(u=le,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:Vt(9,u,u.return)}var I=u.sibling;if(I!==null){I.return=u.return,le=I;break e}le=u.return}}var y=e.current;for(le=y;le!==null;){d=le;var P=d.child;if((d.subtreeFlags&2064)!==0&&P!==null)P.return=d,le=P;else e:for(d=y;le!==null;){if(h=le,(h.flags&2048)!==0)try{switch(h.tag){case 0:case 11:case 15:ra(9,h)}}catch(ae){Ye(h,h.return,ae)}if(h===d){le=null;break e}var W=h.sibling;if(W!==null){W.return=h.return,le=W;break e}le=h.return}}if(Ue=n,Xs(),il&&typeof il.onPostCommitFiberRoot=="function")try{il.onPostCommitFiberRoot(Ts,e)}catch{}i=!0}return i}finally{He=s,Ol.transition=l}}return!1}function up(e,l,s){l=it(s,l),l=bc(e,l,1),e=ei(e,l,1),l=xl(),e!==null&&(wt(e,1,l),Ll(e,l))}function Ye(e,l,s){if(e.tag===3)up(e,e,s);else for(;l!==null;){if(l.tag===3){up(l,e,s);break}else if(l.tag===1){var i=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(si===null||!si.has(i))){e=it(s,e),e=Cc(l,e,1),l=ei(l,e,1),e=xl(),l!==null&&(wt(l,1,e),Ll(l,e));break}}l=l.return}}function gf(e,l,s){var i=e.pingCache;i!==null&&i.delete(l),l=xl(),e.pingedLanes|=e.suspendedLanes&s,ol===e&&(cl&s)===s&&(nl===4||nl===3&&(cl&130023424)===cl&&500>Pe()-nu?Ei(e,0):tu|=s),Ll(e,l)}function rp(e,l){l===0&&((e.mode&1)===0?l=1:(l=yl,yl<<=1,(yl&130023424)===0&&(yl=4194304)));var s=xl();e=Is(e,l),e!==null&&(wt(e,l,s),Ll(e,s))}function ff(e){var l=e.memoizedState,s=0;l!==null&&(s=l.retryLane),rp(e,s)}function mf(e,l){var s=0;switch(e.tag){case 13:var i=e.stateNode,n=e.memoizedState;n!==null&&(s=n.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(o(314))}i!==null&&i.delete(l),rp(e,s)}var cp;cp=function(e,l,s){if(e!==null)if(e.memoizedProps!==l.pendingProps||El.current)bl=!0;else{if((e.lanes&s)===0&&(l.flags&128)===0)return bl=!1,lf(e,l,s);bl=(e.flags&131072)!==0}else bl=!1,Ve&&(l.flags&1048576)!==0&&Nr(l,Wn,l.index);switch(l.lanes=0,l.tag){case 2:var i=l.type;oa(e,l),e=l.pendingProps;var n=Ki(l,fl.current);lt(l,s),n=Bo(null,l,i,e,n,s);var u=Ao();return l.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(l.tag=1,l.memoizedState=null,l.updateQueue=null,kl(i)?(u=!0,Nn(l)):u=!1,l.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,Io(l),n.updater=na,l.stateNode=n,n._reactInternals=l,No(l,i,e,s),l=$o(null,l,i,!0,u,s)):(l.tag=0,Ve&&u&&So(l),wl(null,l,n,s),l=l.child),l;case 16:i=l.elementType;e:{switch(oa(e,l),e=l.pendingProps,n=i._init,i=n(i._payload),l.type=i,n=l.tag=_f(i),e=ls(i,e),n){case 0:l=Wo(null,l,i,e,s);break e;case 1:l=Bc(null,l,i,e,s);break e;case 11:l=Pc(null,l,i,e,s);break e;case 14:l=Jc(null,l,i,ls(i.type,e),s);break e}throw Error(o(306,i,""))}return l;case 0:return i=l.type,n=l.pendingProps,n=l.elementType===i?n:ls(i,n),Wo(e,l,i,n,s);case 1:return i=l.type,n=l.pendingProps,n=l.elementType===i?n:ls(i,n),Bc(e,l,i,n,s);case 3:e:{if(Ac(l),e===null)throw Error(o(387));i=l.pendingProps,u=l.memoizedState,n=u.element,Xr(e,l),Xn(l,i,null,s);var d=l.memoizedState;if(i=d.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},l.updateQueue.baseState=u,l.memoizedState=u,l.flags&256){n=it(Error(o(423)),l),l=Mc(e,l,i,s,n);break e}else if(i!==n){n=it(Error(o(424)),l),l=Mc(e,l,i,s,n);break e}else for(zl=Ks(l.stateNode.containerInfo.firstChild),Jl=l,Ve=!0,es=null,s=Qr(l,null,i,s),l.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Xi(),i===n){l=Ps(e,l,s);break e}wl(e,l,i,s)}l=l.child}return l;case 5:return lc(l),e===null&&xo(l),i=l.type,n=l.pendingProps,u=e!==null?e.memoizedProps:null,d=n.children,go(i,n)?d=null:u!==null&&go(i,u)&&(l.flags|=32),qc(e,l),wl(e,l,d,s),l.child;case 6:return e===null&&xo(l),null;case 13:return Hc(e,l,s);case 4:return Go(l,l.stateNode.containerInfo),i=l.pendingProps,e===null?l.child=Zi(l,null,i,s):wl(e,l,i,s),l.child;case 11:return i=l.type,n=l.pendingProps,n=l.elementType===i?n:ls(i,n),Pc(e,l,i,n,s);case 7:return wl(e,l,l.pendingProps,s),l.child;case 8:return wl(e,l,l.pendingProps.children,s),l.child;case 12:return wl(e,l,l.pendingProps.children,s),l.child;case 10:e:{if(i=l.type._context,n=l.pendingProps,u=l.memoizedProps,d=n.value,Oe(Kn,i._currentValue),i._currentValue=d,u!==null)if(Zl(u.value,d)){if(u.children===n.children&&!El.current){l=Ps(e,l,s);break e}}else for(u=l.child,u!==null&&(u.return=l);u!==null;){var h=u.dependencies;if(h!==null){d=u.child;for(var S=h.firstContext;S!==null;){if(S.context===i){if(u.tag===1){S=Gs(-1,s&-s),S.tag=2;var U=u.updateQueue;if(U!==null){U=U.shared;var N=U.pending;N===null?S.next=S:(S.next=N.next,N.next=S),U.pending=S}}u.lanes|=s,S=u.alternate,S!==null&&(S.lanes|=s),Co(u.return,s,l),h.lanes|=s;break}S=S.next}}else if(u.tag===10)d=u.type===l.type?null:u.child;else if(u.tag===18){if(d=u.return,d===null)throw Error(o(341));d.lanes|=s,h=d.alternate,h!==null&&(h.lanes|=s),Co(d,s,l),d=u.sibling}else d=u.child;if(d!==null)d.return=u;else for(d=u;d!==null;){if(d===l){d=null;break}if(u=d.sibling,u!==null){u.return=d.return,d=u;break}d=d.return}u=d}wl(e,l,n.children,s),l=l.child}return l;case 9:return n=l.type,i=l.pendingProps.children,lt(l,s),n=Tl(n),i=i(n),l.flags|=1,wl(e,l,i,s),l.child;case 14:return i=l.type,n=ls(i,l.pendingProps),n=ls(i.type,n),Jc(e,l,i,n,s);case 15:return zc(e,l,l.type,l.pendingProps,s);case 17:return i=l.type,n=l.pendingProps,n=l.elementType===i?n:ls(i,n),oa(e,l),l.tag=1,kl(i)?(e=!0,Nn(l)):e=!1,lt(l,s),Ec(l,i,n),No(l,i,n,s),$o(null,l,i,!0,e,s);case 19:return Rc(e,l,s);case 22:return Uc(e,l,s)}throw Error(o(156,l.tag))};function pp(e,l){return Ae(e,l)}function hf(e,l,s,i){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nl(e,l,s,i){return new hf(e,l,s,i)}function gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _f(e){if(typeof e=="function")return gu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ke)return 11;if(e===ze)return 14}return 2}function ai(e,l){var s=e.alternate;return s===null?(s=Nl(e.tag,l,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=l,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&14680064,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,l=e.dependencies,s.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s}function ja(e,l,s,i,n,u){var d=2;if(i=e,typeof e=="function")gu(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case Ee:return bi(s.children,n,u,l);case L:d=8,n|=8;break;case ye:return e=Nl(12,s,l,n|2),e.elementType=ye,e.lanes=u,e;case qe:return e=Nl(13,s,l,n),e.elementType=qe,e.lanes=u,e;case Le:return e=Nl(19,s,l,n),e.elementType=Le,e.lanes=u,e;case me:return Sa(s,n,u,l);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ne:d=10;break e;case Te:d=9;break e;case ke:d=11;break e;case ze:d=14;break e;case Ne:d=16,i=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return l=Nl(d,s,l,n),l.elementType=e,l.type=i,l.lanes=u,l}function bi(e,l,s,i){return e=Nl(7,e,i,l),e.lanes=s,e}function Sa(e,l,s,i){return e=Nl(22,e,i,l),e.elementType=me,e.lanes=s,e.stateNode={isHidden:!1},e}function fu(e,l,s){return e=Nl(6,e,null,l),e.lanes=s,e}function mu(e,l,s){return l=Nl(4,e.children!==null?e.children:[],e.key,l),l.lanes=s,l.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},l}function jf(e,l,s,i,n){this.tag=l,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ra(0),this.expirationTimes=Ra(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ra(0),this.identifierPrefix=i,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function hu(e,l,s,i,n,u,d,h,S){return e=new jf(e,l,s,h,S),l===1?(l=1,u===!0&&(l|=8)):l=0,u=Nl(3,null,null,l),e.current=u,u.stateNode=e,u.memoizedState={element:i,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Io(u),e}function Sf(e,l,s){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ve,key:i==null?null:""+i,children:e,containerInfo:l,implementation:s}}function dp(e){if(!e)return Ys;e=e._reactInternals;e:{if(X(e)!==e||e.tag!==1)throw Error(o(170));var l=e;do{switch(l.tag){case 3:l=l.stateNode.context;break e;case 1:if(kl(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break e}}l=l.return}while(l!==null);throw Error(o(171))}if(e.tag===1){var s=e.type;if(kl(s))return Tr(e,s,l)}return l}function gp(e,l,s,i,n,u,d,h,S){return e=hu(s,i,!0,e,n,u,d,h,S),e.context=dp(null),s=e.current,i=xl(),n=ti(s),u=Gs(i,n),u.callback=l??null,ei(s,u,n),e.current.lanes=n,wt(e,n,i),Ll(e,i),e}function va(e,l,s,i){var n=l.current,u=xl(),d=ti(n);return s=dp(s),l.context===null?l.context=s:l.pendingContext=s,l=Gs(u,d),l.payload={element:e},i=i===void 0?null:i,i!==null&&(l.callback=i),e=ei(n,l,d),e!==null&&(ts(e,n,d,u),Yn(e,n,d)),d}function wa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fp(e,l){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<l?s:l}}function _u(e,l){fp(e,l),(e=e.alternate)&&fp(e,l)}function vf(){return null}var mp=typeof reportError=="function"?reportError:function(e){console.error(e)};function ju(e){this._internalRoot=e}xa.prototype.render=ju.prototype.render=function(e){var l=this._internalRoot;if(l===null)throw Error(o(409));va(e,l,null,null)},xa.prototype.unmount=ju.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var l=e.containerInfo;yi(function(){va(null,e,null,null)}),l[ks]=null}};function xa(e){this._internalRoot=e}xa.prototype.unstable_scheduleHydration=function(e){if(e){var l=Xu();e={blockedOn:null,target:e,priority:l};for(var s=0;s<Ws.length&&l!==0&&l<Ws[s].priority;s++);Ws.splice(s,0,e),s===0&&lr(e)}};function Su(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ya(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hp(){}function wf(e,l,s,i,n){if(n){if(typeof i=="function"){var u=i;i=function(){var U=wa(d);u.call(U)}}var d=gp(l,i,e,0,null,!1,!1,"",hp);return e._reactRootContainer=d,e[ks]=d.current,qt(e.nodeType===8?e.parentNode:e),yi(),d}for(;n=e.lastChild;)e.removeChild(n);if(typeof i=="function"){var h=i;i=function(){var U=wa(S);h.call(U)}}var S=hu(e,0,!1,null,null,!1,!1,"",hp);return e._reactRootContainer=S,e[ks]=S.current,qt(e.nodeType===8?e.parentNode:e),yi(function(){va(l,S,s,i)}),S}function Ea(e,l,s,i,n){var u=s._reactRootContainer;if(u){var d=u;if(typeof n=="function"){var h=n;n=function(){var S=wa(d);h.call(S)}}va(l,d,e,n)}else d=wf(s,l,e,n,i);return wa(d)}Qu=function(e){switch(e.tag){case 3:var l=e.stateNode;if(l.current.memoizedState.isDehydrated){var s=Rs(l.pendingLanes);s!==0&&(Oa(l,s|1),Ll(l,Pe()),(Ue&6)===0&&(at=Pe()+500,Xs()))}break;case 13:yi(function(){var i=Is(e,1);if(i!==null){var n=xl();ts(i,e,1,n)}}),_u(e,1)}},Na=function(e){if(e.tag===13){var l=Is(e,134217728);if(l!==null){var s=xl();ts(l,e,134217728,s)}_u(e,134217728)}},Yu=function(e){if(e.tag===13){var l=ti(e),s=Is(e,l);if(s!==null){var i=xl();ts(s,e,l,i)}_u(e,l)}},Xu=function(){return He},Zu=function(e,l){var s=He;try{return He=e,l()}finally{He=s}},qi=function(e,l,s){switch(l){case"input":if(Vl(e,s),l=s.name,s.type==="radio"&&l!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+l)+'][type="radio"]'),l=0;l<s.length;l++){var i=s[l];if(i!==e&&i.form===e.form){var n=Rn(i);if(!n)throw Error(o(90));zs(i),Vl(i,n)}}}break;case"textarea":wn(e,s);break;case"select":l=s.value,l!=null&&qs(e,!!s.multiple,l,!1)}},En=cu,St=yi;var xf={usingClientEntryPoint:!1,Events:[Mt,$i,Rn,yn,jt,cu]},Xt={findFiberByHostInstance:mi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yf={bundleType:Xt.bundleType,version:Xt.version,rendererPackageName:Xt.rendererPackageName,rendererConfig:Xt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:de.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pe(e),e===null?null:e.stateNode},findFiberByHostInstance:Xt.findFiberByHostInstance||vf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ka.isDisabled&&ka.supportsFiber)try{Ts=ka.inject(yf),il=ka}catch{}}return Il.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xf,Il.createPortal=function(e,l){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Su(l))throw Error(o(200));return Sf(e,l,null,s)},Il.createRoot=function(e,l){if(!Su(e))throw Error(o(299));var s=!1,i="",n=mp;return l!=null&&(l.unstable_strictMode===!0&&(s=!0),l.identifierPrefix!==void 0&&(i=l.identifierPrefix),l.onRecoverableError!==void 0&&(n=l.onRecoverableError)),l=hu(e,1,!1,null,null,s,!1,i,n),e[ks]=l.current,qt(e.nodeType===8?e.parentNode:e),new ju(l)},Il.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var l=e._reactInternals;if(l===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=pe(l),e=e===null?null:e.stateNode,e},Il.flushSync=function(e){return yi(e)},Il.hydrate=function(e,l,s){if(!ya(l))throw Error(o(200));return Ea(null,e,l,!0,s)},Il.hydrateRoot=function(e,l,s){if(!Su(e))throw Error(o(405));var i=s!=null&&s.hydratedSources||null,n=!1,u="",d=mp;if(s!=null&&(s.unstable_strictMode===!0&&(n=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),l=gp(l,null,e,1,s??null,n,!1,u,d),e[ks]=l.current,qt(e),i)for(e=0;e<i.length;e++)s=i[e],n=s._getVersion,n=n(s._source),l.mutableSourceEagerHydrationData==null?l.mutableSourceEagerHydrationData=[s,n]:l.mutableSourceEagerHydrationData.push(s,n);return new xa(l)},Il.render=function(e,l,s){if(!ya(l))throw Error(o(200));return Ea(null,e,l,!1,s)},Il.unmountComponentAtNode=function(e){if(!ya(e))throw Error(o(40));return e._reactRootContainer?(yi(function(){Ea(null,null,e,!1,function(){e._reactRootContainer=null,e[ks]=null})}),!0):!1},Il.unstable_batchedUpdates=cu,Il.unstable_renderSubtreeIntoContainer=function(e,l,s,i){if(!ya(s))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Ea(e,l,s,!1,i)},Il.version="18.3.1-next-f1338f8080-20240426",Il}var ed;function Nd(){if(ed)return Cu.exports;ed=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(a){console.error(a)}}return t(),Cu.exports=s_(),Cu.exports}var i_=Nd();function t_(t){return C.createElement(fh,{flushSync:i_.flushSync,...t})}var Ia={},ld;function n_(){if(ld)return Ia;ld=1;var t=Nd();return Ia.createRoot=t.createRoot,Ia.hydrateRoot=t.hydrateRoot,Ia}var a_=n_();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),u_=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,o,r)=>r?r.toUpperCase():o.toLowerCase()),sd=t=>{const a=u_(t);return a.charAt(0).toUpperCase()+a.slice(1)},Fd=(...t)=>t.filter((a,o,r)=>!!a&&a.trim()!==""&&r.indexOf(a)===o).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var r_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=C.forwardRef(({color:t="currentColor",size:a=24,strokeWidth:o=2,absoluteStrokeWidth:r,className:c="",children:p,iconNode:g,...f},m)=>C.createElement("svg",{ref:m,...r_,width:a,height:a,stroke:t,strokeWidth:r?Number(o)*24/Number(a):o,className:Fd("lucide",c),...f},[...g.map(([_,E])=>C.createElement(_,E)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=(t,a)=>{const o=C.forwardRef(({className:r,...c},p)=>C.createElement(c_,{ref:p,iconNode:a,className:Fd(`lucide-${o_(sd(t))}`,`lucide-${t}`,r),...c}));return o.displayName=sd(t),o};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],id=pi("check",p_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],g_=pi("chevron-left",d_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],td=pi("heart",f_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=[["path",{d:"M5 12h14",key:"1ays0h"}]],h_=pi("minus",m_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],j_=pi("plus",__);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]],nd=pi("shopping-bag",S_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],w_=pi("star",v_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],y_=pi("trash-2",x_),E_="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function tn(t){const[a,o]=C.useState(!1),r=()=>{o(!0)},{src:c,alt:p,style:g,className:f,...m}=t;return a?b.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${f??""}`,style:g,children:b.jsx("div",{className:"flex items-center justify-center w-full h-full",children:b.jsx("img",{src:E_,alt:"Error loading image",...m,"data-original-url":c})})}):b.jsx("img",{src:c,alt:p,className:f,style:g,...m,onError:r})}const k_=`id,TITLE,DESCRIPTION,PRICE,CURRENCY_CODE,QUANTITY,TAGS,MATERIALS,IMAGE1,IMAGE2,IMAGE3,IMAGE4,IMAGE5,IMAGE6,IMAGE7,IMAGE8,IMAGE9,IMAGE10,condition,availability,root links,item_group_id,shape,length\r
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
`,ad=["Square","Oval","Stiletto","Coffin","Almond"];function od(t){const a=[];let o="",r=!1;for(let c=0;c<t.length;c++){const p=t[c];p==='"'?r&&t[c+1]==='"'?(o+='"',c++):r=!r:p===","&&!r?(a.push(o),o=""):o+=p}return a.push(o),a}function b_(t){const a=[];let o="",r=!1;for(let c=0;c<t.length;c++){const p=t[c];p==='"'?(r&&t[c+1]==='"'?(o+='"',c++):r=!r,o+=p):(p===`
`||p==="\r")&&!r?(p==="\r"&&t[c+1]===`
`&&c++,o.trim()&&a.push(o),o=""):o+=p}return o.trim()&&a.push(o),a}function C_(){const t=b_(k_),a=od(t[0]).map(c=>c.trim()),o=(c,p)=>{var f;const g=a.indexOf(p);return g>=0?((f=c[g])==null?void 0:f.trim())??"":""},r=[];for(let c=1;c<t.length;c++){const p=od(t[c]),g=o(p,"id");if(!g||o(p,"availability")==="out of stock")continue;const f=o(p,"item_group_id")||g,m=o(p,"TITLE"),_=parseFloat(o(p,"PRICE"))||0,E=o(p,"DESCRIPTION").replace(/\n/g," ").replace(/\s+/g," ").trim(),J=["IMAGE1","IMAGE2","IMAGE3","IMAGE4","IMAGE5","IMAGE6","IMAGE7","IMAGE8","IMAGE9","IMAGE10"].map(L=>(o(p,L)||"").trim()).filter(Boolean),z=J[0]||"",H=J.slice(1),q=o(p,"TAGS"),B=q?q.split(",").map(L=>L.trim()).filter(Boolean):[],K=o(p,"VARIATION 1 TYPE")||o(p,"VARIATION 2 TYPE"),Q=o(p,"VARIATION 1 NAME")||o(p,"VARIATION 2 NAME"),ie=o(p,"VARIATION 1 VALUES")||o(p,"VARIATION 2 VALUES");let de=ad;Q==="Nail Shapes"&&ie?de=ie.split(",").map(L=>L.trim()).filter(Boolean):(K||Q)&&(de=ad);const ce=o(p,"shape"),ve=o(p,"length"),Ee=ve.charAt(0).toUpperCase()+ve.slice(1).toLowerCase();r.push({id:g,groupId:f,name:m,price:_,description:E,image:z,extraImages:H,shapes:de,tags:B,shape:ce,length:Ee})}return r}const nn={firstName:"",lastName:"",email:"",phone:"",address:"",instagram:"",city:"",postcode:"",nailSizes:"",notes:""},un=C_(),L_=un.filter((t,a,o)=>a===o.findIndex(r=>r.groupId===t.groupId));function Gu(t){return t.map(a=>[encodeURIComponent(a.product.id),encodeURIComponent(a.shape),encodeURIComponent(a.length),encodeURIComponent(String(a.quantity))].join("|")).join(",")}function I_(t,a){return t.split(",").map(o=>{const[r,c,p,g]=o.split("|"),f=decodeURIComponent(r??"").trim(),m=decodeURIComponent(c??"").trim(),_=decodeURIComponent(p??"Medium"),E=Math.max(1,Number(decodeURIComponent(g??"1"))),w=a.find(J=>J.id===f);return!w||!m||Number.isNaN(E)?null:{product:w,shape:m,length:_,quantity:E}}).filter(Boolean)}function Ga(){const t=os(),a=Ou(),o=Km(),[r,c]=C.useState("home"),[p,g]=C.useState(null),[f,m]=C.useState(""),[_,E]=C.useState("Medium"),[w,J]=C.useState([]),[z,H]=C.useState(()=>{if(typeof window>"u")return[];try{return JSON.parse(localStorage.getItem("juicegels_cart")??"[]")}catch{return[]}}),[q,B]=C.useState(()=>{if(typeof window>"u")return nn;try{return JSON.parse(localStorage.getItem("juicegels_form")??"null")??nn}catch{return nn}}),[K,Q]=C.useState({}),[ie,de]=C.useState(0),[ce,ve]=C.useState(null),[Ee,L]=C.useState(!1);C.useEffect(()=>{if(t.pathname==="/confirmation"||t.pathname==="/checkout-success"){c("confirmation");return}if(t.pathname==="/basket"){const A=new URLSearchParams(t.search).get("items");if(A){const $=I_(A,un);$.length>0&&H($)}c("basket");return}if(t.pathname==="/"){c("home");return}if(t.pathname.startsWith("/product/")&&o.id){const k=un.find(A=>A.id===o.id);if(k){const A=new URLSearchParams(t.search),$=A.get("shape")??"",ee=A.get("length")??"",fe=qe(k),$e=Le(k),ws=fe.includes($)?$:fe[0]??"",zs=$e.includes(ee)?ee:$e[0]??"Medium";g(k),m(ws),E(zs),de(0),c("product");return}}c("home")},[t.pathname,t.search,o.id,un]),C.useEffect(()=>{if(r!=="product"||!p||!f||!_)return;const k=new URLSearchParams(t.search),A=k.get("shape")??"",$=k.get("length")??"";A===f&&$===_||ze(p.id,f,_)},[r,p,f,_]);const ye=z.reduce((k,A)=>k+A.product.price*A.quantity,0),ne=z.reduce((k,A)=>k+A.quantity,0);C.useEffect(()=>{typeof window>"u"||localStorage.setItem("juicegels_cart",JSON.stringify(z))},[z]),C.useEffect(()=>{typeof window>"u"||localStorage.setItem("juicegels_form",JSON.stringify(q))},[q]);const Te=k=>J(A=>A.includes(k)?A.filter($=>$!==k):[...A,k]),ke=["Short","Medium","Long"],qe=k=>{const A=k.shapes;return Array.isArray(A)&&A.length>0?A:["Short Almond","Medium Almond","Long Almond"]},Le=k=>{const A=k.lengths;return Array.isArray(A)&&A.length>0?A:ke},ze=(k,A,$)=>{const ee=new URLSearchParams;A&&ee.set("shape",A),$&&ee.set("length",$),a(`/product/${k}?${ee.toString()}`,{replace:!0})},Ne=k=>{const A=qe(k),$=Le(k),ee=A[0]??"",fe=$[0]??"Medium";g(k),m(ee),E(fe),de(0),c("product"),a(`/product/${k.id}?shape=${encodeURIComponent(ee)}&length=${encodeURIComponent(fe)}`)},me=()=>{!p||!f||!_||H(k=>{const A=k.findIndex(fe=>fe.product.id===p.id&&fe.shape===f&&fe.length===_);let $;A>=0?($=[...k],$[A]={...$[A],quantity:$[A].quantity+1}):$=[...k,{product:p,shape:f,length:_,quantity:1}];const ee=Gu($);return a(`/basket?items=${ee}`),$})},F=(k,A,$)=>un.find(ee=>ee.groupId===k&&ee.shape===A&&ee.length===$),Y=(k,A)=>{H($=>{const ee=[...$],fe=ee[k].quantity+A;let $e;return fe<=0?$e=ee.filter((ws,zs)=>zs!==k):(ee[k]={...ee[k],quantity:fe},$e=ee),a($e.length?`/basket?items=${Gu($e)}`:"/basket"),$e})},V=k=>{H(A=>{const $=A.filter((ee,fe)=>fe!==k);return a($.length?`/basket?items=${Gu($)}`:"/basket"),$})},x=(k,A)=>{B($=>({...$,[k]:A})),K[k]&&Q($=>({...$,[k]:""}))},M=()=>{const k={};return q.firstName.trim()||(k.firstName="Required"),q.lastName.trim()||(k.lastName="Required"),(!q.email.trim()||!/\S+@\S+\.\S+/.test(q.email))&&(k.email="Valid email required"),q.phone.trim()||(k.phone="Required"),q.address.trim()||(k.address="Required"),q.city.trim()||(k.city="Required"),q.instagram.trim()||(k.instagram="Required"),q.postcode.trim()||(k.postcode="Required"),Q(k),Object.keys(k).length===0},ge=async k=>{if(k.preventDefault(),!M())return;if(z.length===0){ve("Your basket is empty.");return}ve(null),L(!0);const A="/create-checkout-session";try{const $=await fetch(A,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:z.map(fe=>({product:{id:fe.product.id,name:fe.product.name,price:fe.product.price,description:fe.product.description,image:fe.product.image},shape:fe.shape,length:fe.length,quantity:fe.quantity})),form:q,checkoutPath:"/confirmation"})}),ee=await $.json();if(!$.ok||!ee.url)throw new Error(ee.error||"Failed to create checkout session.");window.location.href=ee.url}catch($){ve($ instanceof Error?$.message:"Checkout failed."),L(!1)}},he=()=>{r==="preorder"?c("basket"):r==="basket"?c(p?"product":"home"):a("/home")};return b.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",maxWidth:430,margin:"0 auto",minHeight:"100vh",background:"var(--background)"},children:[b.jsxs("header",{style:{background:"var(--card)",borderBottom:"1px solid var(--border)",position:"sticky",top:0,zIndex:50,padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r!=="home"?b.jsx("button",{onClick:he,style:{color:"var(--primary)",background:"none",border:"none",cursor:"pointer",padding:4},"aria-label":"Back",children:b.jsx(g_,{size:22})}):b.jsx("div",{style:{width:30}}),b.jsx("h1",{style:{fontFamily:"'Playfair Display', serif",color:"var(--primary)",margin:0,letterSpacing:"0.04em",fontSize:22},children:"Juice Gels"}),b.jsxs("button",{onClick:()=>a("/basket"),style:{position:"relative",background:"none",border:"none",cursor:"pointer",padding:4},"aria-label":"Basket",children:[b.jsx(nd,{size:22,style:{color:"var(--primary)"}}),ne>0&&b.jsx("span",{style:{position:"absolute",top:-4,right:-4,background:"var(--primary)",color:"#fff",borderRadius:"50%",width:17,height:17,fontSize:10,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700},children:ne})]})]}),(r==="basket"||r==="preorder"||r==="confirmation")&&b.jsx("div",{style:{display:"flex",padding:"10px 20px",gap:6,alignItems:"center",background:"var(--card)",borderBottom:"1px solid var(--border)"},children:["Basket","Details","Done"].map((k,A)=>{const $=r==="basket"&&A===0||r==="preorder"&&A===1||r==="confirmation"&&A===2,ee=r==="preorder"&&A===0||r==="confirmation"&&A<=1;return b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,flex:A<2?1:void 0},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5},children:[b.jsx("div",{style:{width:22,height:22,borderRadius:"50%",background:ee?"var(--primary)":$?"var(--accent)":"var(--muted)",border:`2px solid ${$||ee?"var(--primary)":"var(--border)"}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:ee?b.jsx(id,{size:11,color:"#fff"}):b.jsx("span",{style:{fontSize:10,color:$?"var(--foreground)":"var(--muted-foreground)",fontWeight:600},children:A+1})}),b.jsx("span",{style:{fontSize:11,color:$?"var(--foreground)":"var(--muted-foreground)",fontWeight:$?600:400},children:k})]}),A<2&&b.jsx("div",{style:{flex:1,height:1.5,background:ee?"var(--primary)":"var(--border)",borderRadius:2}})]},k)})}),r==="home"&&b.jsxs("main",{children:[b.jsxs("div",{style:{background:"linear-gradient(160deg, #f9d5e0 0%, #fce4ea 60%, #fdf2f4 100%)",padding:"28px 20px 22px",textAlign:"center"},children:[b.jsx("p",{style:{color:"var(--muted-foreground)",margin:"0 0 5px",letterSpacing:"0.12em",fontSize:11,textTransform:"uppercase"},children:"Handmade Press-On Nails"}),b.jsx("h2",{style:{fontFamily:"'Playfair Display', serif",fontSize:30,color:"var(--foreground)",margin:"0 0 8px",lineHeight:1.2},children:"Nail the Look ✨"}),b.jsx("p",{style:{color:"var(--muted-foreground)",margin:"0 0 4px",fontSize:13,lineHeight:1.6},children:"Custom-fit gel press-ons · Send your nail sizes for a perfect fit"})]}),b.jsx("div",{style:{padding:"16px 14px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:L_.map(k=>b.jsxs("button",{onClick:()=>Ne(k),style:{background:"var(--card)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",textAlign:"left",cursor:"pointer",padding:0,position:"relative",display:"block",width:"100%"},children:[b.jsx("button",{onClick:A=>{A.stopPropagation(),Te(k.id)},style:{position:"absolute",top:7,right:7,background:"rgba(255,255,255,0.88)",border:"none",borderRadius:"50%",width:28,height:28,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:2},"aria-label":"Wishlist",children:b.jsx(td,{size:13,fill:w.includes(k.id)?"var(--primary)":"none",stroke:w.includes(k.id)?"var(--primary)":"var(--muted-foreground)"})}),b.jsx(tn,{src:k.image,alt:k.name,style:{width:"100%",height:160,objectFit:"cover",display:"block",background:"var(--secondary)"}}),b.jsxs("div",{style:{padding:"8px 10px 10px"},children:[b.jsx("p",{style:{margin:"0 0 5px",fontSize:12,color:"var(--foreground)",lineHeight:1.3},children:k.name}),b.jsxs("span",{style:{color:"var(--primary)",fontWeight:600,fontSize:14},children:["£",k.price.toFixed(2)]})]})]},k.id))}),b.jsxs("div",{style:{margin:"4px 14px 32px",background:"var(--secondary)",borderRadius:14,padding:"16px 18px",textAlign:"center"},children:[b.jsx("p",{style:{fontFamily:"'Playfair Display', serif",color:"var(--foreground)",margin:"0 0 3px",fontSize:16},children:"Need your nail sizes?"}),b.jsx("p",{style:{color:"var(--muted-foreground)",margin:0,fontSize:12},children:"Pick up the Nail Sizing Guide — £4 deducted from your first set 🌸"})]})]}),r==="product"&&p&&b.jsxs("main",{children:[b.jsx(tn,{src:[p.image,...p.extraImages][ie],alt:p.name,style:{width:"100%",height:320,objectFit:"cover",display:"block",background:"var(--secondary)"}}),p.extraImages.length>0&&b.jsx("div",{style:{display:"flex",gap:8,padding:"10px 16px 0",overflowX:"auto"},children:[p.image,...p.extraImages].map((k,A)=>b.jsx("button",{onClick:()=>de(A),style:{flexShrink:0,border:`2px solid ${ie===A?"var(--primary)":"var(--border)"}`,borderRadius:8,overflow:"hidden",padding:0,cursor:"pointer",background:"none"},children:b.jsx(tn,{src:k,alt:"",style:{width:52,height:52,objectFit:"cover",display:"block"}})},A))}),b.jsxs("div",{style:{padding:"16px 20px 130px"},children:[b.jsx("h2",{style:{fontFamily:"'Playfair Display', serif",margin:"0 0 4px",fontSize:22,color:"var(--foreground)"},children:p.name}),b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,marginBottom:10},children:[[1,2,3,4,5].map(k=>b.jsx(w_,{size:12,fill:"var(--primary)",stroke:"none"},k)),b.jsx("span",{style:{fontSize:12,color:"var(--muted-foreground)",marginLeft:3},children:"Handmade · In stock"})]}),b.jsxs("span",{style:{fontSize:24,fontWeight:700,color:"var(--primary)"},children:["£",p.price.toFixed(2)]}),b.jsx("p",{style:{color:"var(--muted-foreground)",fontSize:13,lineHeight:1.7,margin:"12px 0 18px"},children:p.description}),b.jsx("p",{style:{margin:"0 0 8px",fontSize:13,fontWeight:600,color:"var(--foreground)"},children:"Nail Shape"}),b.jsx("div",{style:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:20},children:p.shapes.map(k=>b.jsx("button",{onClick:()=>{if(!p)return;const A=F(p.groupId,k,_);A&&(g(A),m(k),E(A.length))},style:{border:`1.5px solid ${f===k?"var(--primary)":"var(--border)"}`,background:f===k?"var(--primary)":"var(--card)",color:f===k?"#fff":"var(--foreground)",borderRadius:8,padding:"6px 14px",fontSize:12,cursor:"pointer",transition:"all 0.15s"},children:k},k))}),b.jsx("p",{style:{margin:"0 0 8px",fontSize:13,fontWeight:600,color:"var(--foreground)"},children:"Nail Length"}),b.jsx("div",{style:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:20},children:["Short","Medium","Long"].map(k=>b.jsx("button",{onClick:()=>{if(!p)return;const A=F(p.groupId,f,k);A&&(g(A),E(k),m(A.shape))},style:{border:`1.5px solid ${_===k?"var(--primary)":"var(--border)"}`,background:_===k?"var(--primary)":"var(--card)",color:_===k?"#fff":"var(--foreground)",borderRadius:8,padding:"6px 14px",fontSize:12,cursor:"pointer",transition:"all 0.15s",textTransform:"capitalize"},children:k},k))}),b.jsxs("div",{style:{background:"var(--muted)",borderRadius:10,padding:"10px 14px",fontSize:12,color:"var(--muted-foreground)",lineHeight:1.5},children:["🌸 Send your nail sizes after ordering via ",b.jsx("strong",{children:"@juicegels"})," on Instagram or through your order notes."]})]}),b.jsxs("div",{style:{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:430,padding:"14px 18px",background:"var(--card)",borderTop:"1px solid var(--border)",display:"flex",gap:10,boxSizing:"border-box"},children:[b.jsx("button",{onClick:()=>Te(p.id),style:{border:"1.5px solid var(--border)",background:"var(--card)",borderRadius:12,width:46,height:46,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",flexShrink:0},children:b.jsx(td,{size:17,fill:w.includes(p.id)?"var(--primary)":"none",stroke:w.includes(p.id)?"var(--primary)":"var(--muted-foreground)"})}),b.jsx("button",{onClick:me,disabled:!f||!_,style:{flex:1,background:f&&_?"var(--primary)":"var(--muted)",color:f&&_?"#fff":"var(--muted-foreground)",border:"none",borderRadius:12,height:46,fontWeight:600,fontSize:14,cursor:f&&_?"pointer":"not-allowed",transition:"all 0.15s"},children:f&&_?"Add to Basket":"Select shape and length"})]})]}),r==="basket"&&b.jsxs("main",{style:{padding:"16px 16px 100px"},children:[b.jsx("h2",{style:{fontFamily:"'Playfair Display', serif",fontSize:20,color:"var(--foreground)",margin:"0 0 14px"},children:"Your Basket"}),z.length===0?b.jsxs("div",{style:{textAlign:"center",padding:"48px 20px"},children:[b.jsx(nd,{size:40,style:{color:"var(--muted-foreground)",marginBottom:12}}),b.jsx("p",{style:{color:"var(--muted-foreground)",fontSize:14},children:"Your basket is empty"}),b.jsx("button",{onClick:()=>a("/"),style:{marginTop:16,background:"var(--primary)",color:"#fff",border:"none",borderRadius:10,padding:"10px 24px",fontSize:14,fontWeight:600,cursor:"pointer"},children:"Browse Sets"})]}):b.jsxs(b.Fragment,{children:[b.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10,marginBottom:16},children:z.map((k,A)=>b.jsxs("div",{style:{background:"var(--card)",border:"1px solid var(--border)",borderRadius:14,padding:"12px",display:"flex",gap:12,alignItems:"center"},children:[b.jsx(tn,{src:k.product.image,alt:k.product.name,style:{width:64,height:64,borderRadius:10,objectFit:"cover",flexShrink:0,background:"var(--secondary)"}}),b.jsxs("div",{style:{flex:1,minWidth:0},children:[b.jsx("p",{style:{margin:"0 0 2px",fontSize:13,fontWeight:500,color:"var(--foreground)",lineHeight:1.3},children:k.product.name}),b.jsxs("p",{style:{margin:"0 0 6px",fontSize:11,color:"var(--muted-foreground)"},children:["Shape: ",k.shape]}),b.jsxs("p",{style:{margin:"0 0 6px",fontSize:11,color:"var(--muted-foreground)"},children:["Length: ",k.length]}),b.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:1},children:[b.jsx("button",{onClick:()=>Y(A,-1),style:{width:26,height:26,borderRadius:6,border:"1px solid var(--border)",background:"var(--muted)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:b.jsx(h_,{size:12})}),b.jsx("span",{style:{minWidth:28,textAlign:"center",fontSize:13,fontWeight:600},children:k.quantity}),b.jsx("button",{onClick:()=>Y(A,1),style:{width:26,height:26,borderRadius:6,border:"1px solid var(--border)",background:"var(--muted)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:b.jsx(j_,{size:12})})]}),b.jsxs("span",{style:{color:"var(--primary)",fontWeight:700,fontSize:14},children:["£",(k.product.price*k.quantity).toFixed(2)]})]})]}),b.jsx("button",{onClick:()=>V(A),style:{background:"none",border:"none",cursor:"pointer",padding:4,flexShrink:0},children:b.jsx(y_,{size:15,style:{color:"var(--muted-foreground)"}})})]},`${k.product.id}-${k.shape}`))}),b.jsxs("div",{style:{background:"var(--secondary)",borderRadius:14,padding:"14px 16px",marginBottom:14},children:[b.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,marginBottom:6},children:[b.jsxs("span",{style:{color:"var(--muted-foreground)"},children:["Subtotal (",ne," item",ne!==1?"s":"",")"]}),b.jsxs("span",{children:["£",ye.toFixed(2)]})]}),b.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,marginBottom:8},children:[b.jsx("span",{style:{color:"var(--muted-foreground)"},children:"Delivery"}),b.jsx("span",{style:{color:"var(--primary)"},children:"Free"})]}),b.jsxs("div",{style:{borderTop:"1px solid var(--border)",paddingTop:8,display:"flex",justifyContent:"space-between",fontWeight:700,fontSize:15},children:[b.jsx("span",{children:"Total"}),b.jsxs("span",{children:["£",ye.toFixed(2)]})]})]}),b.jsxs("div",{style:{background:"var(--muted)",borderRadius:10,padding:"10px 14px",fontSize:12,color:"var(--muted-foreground)",lineHeight:1.5,marginBottom:4},children:["💅 Remember to send your nail sizes after ordering via ",b.jsx("strong",{children:"@juicegels"})," on Instagram or in your order notes."]})]})]}),z.length>0&&r==="basket"&&b.jsxs("div",{style:{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:430,padding:"14px 18px",background:"var(--card)",borderTop:"1px solid var(--border)",display:"flex",gap:10,boxSizing:"border-box"},children:[b.jsx("button",{onClick:()=>a("/"),style:{border:"1.5px solid var(--border)",background:"var(--card)",borderRadius:12,height:46,padding:"0 16px",fontSize:13,fontWeight:500,cursor:"pointer",flexShrink:0},children:"+ Add more"}),b.jsxs("button",{onClick:()=>{B(nn),Q({}),c("preorder")},style:{flex:1,background:"var(--primary)",color:"#fff",border:"none",borderRadius:12,height:46,fontWeight:600,fontSize:14,cursor:"pointer"},children:["Pre-order · £",ye.toFixed(2)]})]}),r==="preorder"&&b.jsxs("main",{style:{padding:"18px 18px 48px"},children:[b.jsx("h2",{style:{fontFamily:"'Playfair Display', serif",fontSize:20,color:"var(--foreground)",margin:"0 0 4px"},children:"Your Details"}),b.jsxs("p",{style:{color:"var(--muted-foreground)",fontSize:12,margin:"0 0 18px"},children:[ne," item",ne!==1?"s":""," · £",ye.toFixed(2)," total"]}),b.jsxs("form",{onSubmit:ge,noValidate:!0,style:{display:"flex",flexDirection:"column",gap:13},children:[b.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},children:[b.jsx(hs,{label:"First name",error:K.firstName,children:b.jsx("input",{type:"text",placeholder:"Sophie",value:q.firstName,onChange:k=>x("firstName",k.target.value),style:_s(!!K.firstName)})}),b.jsx(hs,{label:"Last name",error:K.lastName,children:b.jsx("input",{type:"text",placeholder:"Wright",value:q.lastName,onChange:k=>x("lastName",k.target.value),style:_s(!!K.lastName)})})]}),b.jsx(hs,{label:"Email address",error:K.email,children:b.jsx("input",{type:"email",placeholder:"sophie@example.com",value:q.email,onChange:k=>x("email",k.target.value),style:_s(!!K.email)})}),b.jsx(hs,{label:"Phone number",error:K.phone,children:b.jsx("input",{type:"tel",placeholder:"+44 7700 900000",value:q.phone,onChange:k=>x("phone",k.target.value),style:_s(!!K.phone)})}),b.jsx(hs,{label:"Delivery address",error:K.address,children:b.jsx("input",{type:"text",placeholder:"12 Petal Lane",value:q.address,onChange:k=>x("address",k.target.value),style:_s(!!K.address)})}),b.jsx(hs,{label:"Instagram username",error:K.instagram,children:b.jsx("input",{type:"text",placeholder:"@juicegels",value:q.instagram,onChange:k=>x("instagram",k.target.value),style:_s(!!K.instagram)})}),b.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},children:[b.jsx(hs,{label:"City",error:K.city,children:b.jsx("input",{type:"text",placeholder:"London",value:q.city,onChange:k=>x("city",k.target.value),style:_s(!!K.city)})}),b.jsx(hs,{label:"Postcode",error:K.postcode,children:b.jsx("input",{type:"text",placeholder:"SW1A 1AA",value:q.postcode,onChange:k=>x("postcode",k.target.value),style:_s(!!K.postcode)})})]}),b.jsxs(hs,{label:"Your nail sizes (e.g. R: 3,5,4,6,4 · L: 3,5,4,6,4)",children:[b.jsx("input",{type:"text",placeholder:"Right: 3,5,4,6,4  Left: 3,5,4,6,4",value:q.nailSizes,onChange:k=>x("nailSizes",k.target.value),style:_s(!1)}),b.jsx("span",{style:{fontSize:11,color:"var(--muted-foreground)",lineHeight:1.4},children:"Not sure? Order the Nail Sizing Guide first — or send your sizes via @juicegels on Instagram after ordering."})]}),b.jsx(hs,{label:"Additional notes (optional)",children:b.jsx("textarea",{placeholder:"Any special requests, colour preferences, or custom details...",value:q.notes,onChange:k=>x("notes",k.target.value),rows:3,style:{..._s(!1),resize:"none"}})}),b.jsxs("div",{style:{background:"var(--secondary)",borderRadius:13,padding:"13px 15px",fontSize:13,lineHeight:1.7,color:"var(--foreground)"},children:[b.jsx("strong",{style:{display:"block",marginBottom:6},children:"Order Summary"}),z.map((k,A)=>b.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,color:"var(--muted-foreground)"},children:[b.jsxs("span",{children:[k.product.name," (",k.shape,") ×",k.quantity]}),b.jsxs("span",{children:["£",(k.product.price*k.quantity).toFixed(2)]})]},A)),b.jsxs("div",{style:{borderTop:"1px solid var(--border)",marginTop:8,paddingTop:8,display:"flex",justifyContent:"space-between",fontWeight:700},children:[b.jsx("span",{children:"Total"}),b.jsxs("span",{children:["£",ye.toFixed(2)]})]})]}),b.jsx("button",{type:"submit",disabled:Ee,style:{background:Ee?"var(--border)":"var(--primary)",color:"#fff",border:"none",borderRadius:12,height:48,fontWeight:600,fontSize:14,cursor:Ee?"not-allowed":"pointer",letterSpacing:"0.02em"},children:Ee?"Redirecting to Stripe...":"Confirm Pre-order 🌸"}),ce&&b.jsx("p",{style:{color:"var(--destructive)",fontSize:12,marginTop:10},children:ce})]})]}),r==="confirmation"&&b.jsxs("main",{style:{padding:"44px 22px",textAlign:"center"},children:[b.jsx("div",{style:{width:68,height:68,borderRadius:"50%",background:"var(--secondary)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 18px"},children:b.jsx(id,{size:30,style:{color:"var(--primary)"}})}),b.jsx("h2",{style:{fontFamily:"'Playfair Display', serif",fontSize:24,color:"var(--foreground)",margin:"0 0 8px"},children:"Order Placed!"}),b.jsxs("p",{style:{color:"var(--muted-foreground)",fontSize:13,lineHeight:1.7,margin:"0 0 6px"},children:["Thank you, ",b.jsx("strong",{children:q.firstName}),"! Your pre-order of ",ne," item",ne!==1?"s":""," is confirmed."]}),b.jsxs("p",{style:{color:"var(--muted-foreground)",fontSize:12,margin:"0 0 24px",lineHeight:1.5},children:["A confirmation will be sent to ",b.jsx("strong",{children:q.email}),".",b.jsx("br",{}),!q.nailSizes&&b.jsxs("span",{style:{color:"var(--primary)"},children:["📏 Don't forget to DM your nail sizes to ",b.jsx("strong",{children:"@juicegels"})," on Instagram!"]})]}),b.jsxs("div",{style:{background:"var(--secondary)",borderRadius:13,padding:"14px",textAlign:"left",marginBottom:14},children:[b.jsx("p",{style:{margin:"0 0 8px",fontWeight:600,fontSize:13},children:"Items ordered"}),z.map((k,A)=>b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[b.jsx(tn,{src:k.product.image,alt:k.product.name,style:{width:40,height:40,borderRadius:7,objectFit:"cover",background:"var(--muted)"}}),b.jsxs("div",{children:[b.jsx("p",{style:{margin:0,fontSize:12,fontWeight:500,color:"var(--foreground)"},children:k.product.name}),b.jsxs("p",{style:{margin:0,fontSize:11,color:"var(--muted-foreground)"},children:[k.shape," · ×",k.quantity," · £",(k.product.price*k.quantity).toFixed(2)]})]})]},A))]}),b.jsxs("div",{style:{background:"var(--card)",border:"1px solid var(--border)",borderRadius:13,padding:"14px",textAlign:"left",marginBottom:24},children:[b.jsx("p",{style:{margin:"0 0 5px",fontWeight:600,fontSize:13},children:"Delivering to"}),b.jsxs("p",{style:{margin:0,fontSize:12,color:"var(--muted-foreground)",lineHeight:1.6},children:[q.firstName," ",q.lastName,b.jsx("br",{}),q.address,b.jsx("br",{}),q.city,", ",q.postcode]})]}),b.jsx("button",{onClick:()=>{a("/"),H([]),B(nn)},style:{background:"var(--primary)",color:"#fff",border:"none",borderRadius:12,height:46,width:"100%",fontWeight:600,fontSize:14,cursor:"pointer"},children:"Continue Shopping"})]})]})}function hs({label:t,error:a,children:o}){return b.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[b.jsx("label",{style:{fontSize:11,fontWeight:600,color:"var(--foreground)",letterSpacing:"0.03em",textTransform:"uppercase"},children:t}),o,a&&b.jsx("span",{style:{fontSize:11,color:"var(--destructive)"},children:a})]})}function _s(t){return{background:"var(--input-background)",border:`1.5px solid ${t?"var(--destructive)":"var(--border)"}`,borderRadius:9,padding:"10px 13px",fontSize:14,color:"var(--foreground)",outline:"none",width:"100%",boxSizing:"border-box"}}const G_=Oh([{path:"/",element:b.jsx(_h,{to:"/home",replace:!0})},{path:"/home",element:b.jsx(Ga,{})},{path:"/basket",element:b.jsx(Ga,{})},{path:"/product/:id",element:b.jsx(Ga,{})},{path:"/checkout/success",element:b.jsx(Ga,{})}]);a_.createRoot(document.getElementById("root")).render(b.jsx(t_,{router:G_}));
