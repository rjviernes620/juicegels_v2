function bf(t,a){for(var o=0;o<a.length;o++){const r=a[o];if(typeof r!="string"&&!Array.isArray(r)){for(const c in r)if(c!=="default"&&!(c in t)){const p=Object.getOwnPropertyDescriptor(r,c);p&&Object.defineProperty(t,c,p.get?p:{enumerable:!0,get:()=>r[c]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const p of c)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&r(g)}).observe(document,{childList:!0,subtree:!0});function o(c){const p={};return c.integrity&&(p.integrity=c.integrity),c.referrerPolicy&&(p.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?p.credentials="include":c.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function r(c){if(c.ep)return;c.ep=!0;const p=o(c);fetch(c.href,p)}})();function Cf(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Su={exports:{}},en={},vu={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hp;function Lf(){if(hp)return Pe;hp=1;var t=Symbol.for("react.element"),a=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),g=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),S=Symbol.iterator;function J(y){return y===null||typeof y!="object"?null:(y=S&&y[S]||y["@@iterator"],typeof y=="function"?y:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,A={};function q(y,B,ge){this.props=y,this.context=B,this.refs=A,this.updater=ge||U}q.prototype.isReactComponent={},q.prototype.setState=function(y,B){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,B,"setState")},q.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function W(){}W.prototype=q.prototype;function K(y,B,ge){this.props=y,this.context=B,this.refs=A,this.updater=ge||U}var X=K.prototype=new W;X.constructor=K,H(X,q.prototype),X.isPureReactComponent=!0;var pe=Array.isArray,re=Object.prototype.hasOwnProperty,ve={current:null},Ce={key:!0,ref:!0,__self:!0,__source:!0};function L(y,B,ge){var ie,xe={},me=null,Ie=null;if(B!=null)for(ie in B.ref!==void 0&&(Ie=B.ref),B.key!==void 0&&(me=""+B.key),B)re.call(B,ie)&&!Ce.hasOwnProperty(ie)&&(xe[ie]=B[ie]);var k=arguments.length-2;if(k===1)xe.children=ge;else if(1<k){for(var R=Array(k),Z=0;Z<k;Z++)R[Z]=arguments[Z+2];xe.children=R}if(y&&y.defaultProps)for(ie in k=y.defaultProps,k)xe[ie]===void 0&&(xe[ie]=k[ie]);return{$$typeof:t,type:y,key:me,ref:Ie,props:xe,_owner:ve.current}}function Ee(y,B){return{$$typeof:t,type:y.type,key:B,ref:y.ref,props:y.props,_owner:y._owner}}function fe(y){return typeof y=="object"&&y!==null&&y.$$typeof===t}function Re(y){var B={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(ge){return B[ge]})}var Se=/\/+/g;function Ae(y,B){return typeof y=="object"&&y!==null&&y.key!=null?Re(""+y.key):B.toString(36)}function Je(y,B,ge,ie,xe){var me=typeof y;(me==="undefined"||me==="boolean")&&(y=null);var Ie=!1;if(y===null)Ie=!0;else switch(me){case"string":case"number":Ie=!0;break;case"object":switch(y.$$typeof){case t:case a:Ie=!0}}if(Ie)return Ie=y,xe=xe(Ie),y=ie===""?"."+Ae(Ie,0):ie,pe(xe)?(ge="",y!=null&&(ge=y.replace(Se,"$&/")+"/"),Je(xe,B,ge,"",function(Z){return Z})):xe!=null&&(fe(xe)&&(xe=Ee(xe,ge+(!xe.key||Ie&&Ie.key===xe.key?"":(""+xe.key).replace(Se,"$&/")+"/")+y)),B.push(xe)),1;if(Ie=0,ie=ie===""?".":ie+":",pe(y))for(var k=0;k<y.length;k++){me=y[k];var R=ie+Ae(me,k);Ie+=Je(me,B,ge,R,xe)}else if(R=J(y),typeof R=="function")for(y=R.call(y),k=0;!(me=y.next()).done;)me=me.value,R=ie+Ae(me,k++),Ie+=Je(me,B,ge,R,xe);else if(me==="object")throw B=String(y),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return Ie}function Le(y,B,ge){if(y==null)return y;var ie=[],xe=0;return Je(y,ie,"","",function(me){return B.call(ge,me,xe++)}),ie}function De(y){if(y._status===-1){var B=y._result;B=B(),B.then(function(ge){(y._status===0||y._status===-1)&&(y._status=1,y._result=ge)},function(ge){(y._status===0||y._status===-1)&&(y._status=2,y._result=ge)}),y._status===-1&&(y._status=0,y._result=B)}if(y._status===1)return y._result.default;throw y._result}var de={current:null},D={transition:null},Q={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:D,ReactCurrentOwner:ve};function V(){throw Error("act(...) is not supported in production builds of React.")}return Pe.Children={map:Le,forEach:function(y,B,ge){Le(y,function(){B.apply(this,arguments)},ge)},count:function(y){var B=0;return Le(y,function(){B++}),B},toArray:function(y){return Le(y,function(B){return B})||[]},only:function(y){if(!fe(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},Pe.Component=q,Pe.Fragment=o,Pe.Profiler=c,Pe.PureComponent=K,Pe.StrictMode=r,Pe.Suspense=m,Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,Pe.act=V,Pe.cloneElement=function(y,B,ge){if(y==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+y+".");var ie=H({},y.props),xe=y.key,me=y.ref,Ie=y._owner;if(B!=null){if(B.ref!==void 0&&(me=B.ref,Ie=ve.current),B.key!==void 0&&(xe=""+B.key),y.type&&y.type.defaultProps)var k=y.type.defaultProps;for(R in B)re.call(B,R)&&!Ce.hasOwnProperty(R)&&(ie[R]=B[R]===void 0&&k!==void 0?k[R]:B[R])}var R=arguments.length-2;if(R===1)ie.children=ge;else if(1<R){k=Array(R);for(var Z=0;Z<R;Z++)k[Z]=arguments[Z+2];ie.children=k}return{$$typeof:t,type:y.type,key:xe,ref:me,props:ie,_owner:Ie}},Pe.createContext=function(y){return y={$$typeof:g,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},y.Provider={$$typeof:p,_context:y},y.Consumer=y},Pe.createElement=L,Pe.createFactory=function(y){var B=L.bind(null,y);return B.type=y,B},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(y){return{$$typeof:f,render:y}},Pe.isValidElement=fe,Pe.lazy=function(y){return{$$typeof:E,_payload:{_status:-1,_result:y},_init:De}},Pe.memo=function(y,B){return{$$typeof:_,type:y,compare:B===void 0?null:B}},Pe.startTransition=function(y){var B=D.transition;D.transition={};try{y()}finally{D.transition=B}},Pe.unstable_act=V,Pe.useCallback=function(y,B){return de.current.useCallback(y,B)},Pe.useContext=function(y){return de.current.useContext(y)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(y){return de.current.useDeferredValue(y)},Pe.useEffect=function(y,B){return de.current.useEffect(y,B)},Pe.useId=function(){return de.current.useId()},Pe.useImperativeHandle=function(y,B,ge){return de.current.useImperativeHandle(y,B,ge)},Pe.useInsertionEffect=function(y,B){return de.current.useInsertionEffect(y,B)},Pe.useLayoutEffect=function(y,B){return de.current.useLayoutEffect(y,B)},Pe.useMemo=function(y,B){return de.current.useMemo(y,B)},Pe.useReducer=function(y,B,ge){return de.current.useReducer(y,B,ge)},Pe.useRef=function(y){return de.current.useRef(y)},Pe.useState=function(y){return de.current.useState(y)},Pe.useSyncExternalStore=function(y,B,ge){return de.current.useSyncExternalStore(y,B,ge)},Pe.useTransition=function(){return de.current.useTransition()},Pe.version="18.3.1",Pe}var _p;function zu(){return _p||(_p=1,vu.exports=Lf()),vu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function If(){if(jp)return en;jp=1;var t=zu(),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function g(f,m,_){var E,S={},J=null,U=null;_!==void 0&&(J=""+_),m.key!==void 0&&(J=""+m.key),m.ref!==void 0&&(U=m.ref);for(E in m)r.call(m,E)&&!p.hasOwnProperty(E)&&(S[E]=m[E]);if(f&&f.defaultProps)for(E in m=f.defaultProps,m)S[E]===void 0&&(S[E]=m[E]);return{$$typeof:a,type:f,key:J,ref:U,props:S,_owner:c.current}}return en.Fragment=o,en.jsx=g,en.jsxs=g,en}var Sp;function Gf(){return Sp||(Sp=1,Su.exports=If()),Su.exports}var b=Gf(),C=zu();const Pf=Cf(C),Jf=bf({__proto__:null,default:Pf},[C]);/**
 * react-router v7.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var ud=t=>{throw TypeError(t)},rd=(t,a,o)=>a.has(t)||ud("Cannot "+o),$l=(t,a,o)=>(rd(t,a,"read from private field"),o?o.call(t):a.get(t)),on=(t,a,o)=>a.has(t)?ud("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(t):a.set(t,o),hs=(t,a,o,r)=>(rd(t,a,"write to private field"),a.set(t,o),o),vp="popstate";function wp(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function zf(t={}){function a(r,c){var _;let p=(_=c.state)==null?void 0:_.masked,{pathname:g,search:f,hash:m}=p||r.location;return pn("",{pathname:g,search:f,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default",p?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function o(r,c){return typeof c=="string"?c:vs(c)}return qf(a,o,null,t)}function Ge(t,a){if(t===!1||t===null||typeof t>"u")throw new Error(a)}function tl(t,a){if(!t){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function Uf(){return Math.random().toString(36).substring(2,10)}function xp(t,a){return{usr:t.state,key:t.key,idx:a,masked:t.mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function pn(t,a,o=null,r,c){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof a=="string"?ws(a):a,state:o,key:a&&a.key||r||Uf(),mask:c}}function vs({pathname:t="/",search:a="",hash:o=""}){return a&&a!=="?"&&(t+=a.charAt(0)==="?"?a:"?"+a),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function ws(t){let a={};if(t){let o=t.indexOf("#");o>=0&&(a.hash=t.substring(o),t=t.substring(0,o));let r=t.indexOf("?");r>=0&&(a.search=t.substring(r),t=t.substring(0,r)),t&&(a.pathname=t)}return a}function qf(t,a,o,r={}){let{window:c=document.defaultView,v5Compat:p=!1}=r,g=c.history,f="POP",m=null,_=E();_==null&&(_=0,g.replaceState({...g.state,idx:_},""));function E(){return(g.state||{idx:null}).idx}function S(){f="POP";let q=E(),W=q==null?null:q-_;_=q,m&&m({action:f,location:A.location,delta:W})}function J(q,W){f="PUSH";let K=wp(q)?q:pn(A.location,q,W);_=E()+1;let X=xp(K,_),pe=A.createHref(K.mask||K);try{g.pushState(X,"",pe)}catch(re){if(re instanceof DOMException&&re.name==="DataCloneError")throw re;c.location.assign(pe)}p&&m&&m({action:f,location:A.location,delta:1})}function U(q,W){f="REPLACE";let K=wp(q)?q:pn(A.location,q,W);_=E();let X=xp(K,_),pe=A.createHref(K.mask||K);g.replaceState(X,"",pe),p&&m&&m({action:f,location:A.location,delta:0})}function H(q){return cd(c,q)}let A={get action(){return f},get location(){return t(c,g)},listen(q){if(m)throw new Error("A history only accepts one active listener");return c.addEventListener(vp,S),m=q,()=>{c.removeEventListener(vp,S),m=null}},createHref(q){return a(c,q)},createURL:H,encodeLocation(q){let W=H(q);return{pathname:W.pathname,search:W.search,hash:W.hash}},push:J,replace:U,go(q){return g.go(q)}};return A}function cd(t,a,o=!1){let r="http://localhost";t&&(r=t.location.origin!=="null"?t.location.origin:t.location.href),Ge(r,"No window.location.(origin|href) available to create URL");let c=typeof a=="string"?a:vs(a);return c=c.replace(/ $/,"%20"),!o&&c.startsWith("//")&&(c=r+c),new URL(c,r)}var un,yp=class{constructor(t){if(on(this,un,new Map),t)for(let[a,o]of t)this.set(a,o)}get(t){if($l(this,un).has(t))return $l(this,un).get(t);if(t.defaultValue!==void 0)return t.defaultValue;throw new Error("No value found for context")}set(t,a){$l(this,un).set(t,a)}};un=new WeakMap;var Bf=new Set(["lazy","caseSensitive","path","id","index","children"]);function Af(t){return Bf.has(t)}var Mf=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function Hf(t){return Mf.has(t)}function Tf(t){return t.index===!0}function dn(t,a,o=[],r={},c=!1){return t.map((p,g)=>{let f=[...o,String(g)],m=typeof p.id=="string"?p.id:f.join("-");if(Ge(p.index!==!0||!p.children,"Cannot specify children on an index route"),Ge(c||!r[m],`Found a route id collision on id "${m}".  Route id's must be globally unique within Data Router usages`),Tf(p)){let _={...p,id:m};return r[m]=Ep(_,a(_)),_}else{let _={...p,id:m,children:void 0};return r[m]=Ep(_,a(_)),p.children&&(_.children=dn(p.children,a,f,r,c)),_}})}function Ep(t,a){return Object.assign(t,{...a,...typeof a.lazy=="object"&&a.lazy!=null?{lazy:{...t.lazy,...a.lazy}}:{}})}function pd(t,a,o="/"){return us(t,a,o,!1)}function us(t,a,o,r,c){let p=typeof a=="string"?ws(a):a,g=Ql(p.pathname||"/",o);if(g==null)return null;let f=c??Ga(t),m=null,_=Zf(g);for(let E=0;m==null&&E<f.length;++E)m=Yf(f[E],_,r);return m}function Rf(t,a){let{route:o,pathname:r,params:c}=t;return{id:o.id,pathname:r,params:c,data:a[o.id],loaderData:a[o.id],handle:o.handle}}function Ga(t){let a=dd(t);return Of(a),a}function dd(t,a=[],o=[],r="",c=!1){let p=(g,f,m=c,_)=>{let E={relativePath:_===void 0?g.path||"":_,caseSensitive:g.caseSensitive===!0,childrenIndex:f,route:g};if(E.relativePath.startsWith("/")){if(!E.relativePath.startsWith(r)&&m)return;Ge(E.relativePath.startsWith(r),`Absolute route path "${E.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),E.relativePath=E.relativePath.slice(r.length)}let S=Kl([r,E.relativePath]),J=o.concat(E);g.children&&g.children.length>0&&(Ge(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${S}".`),dd(g.children,a,J,S,m)),!(g.path==null&&!g.index)&&a.push({path:S,score:Kf(S,g.index),routesMeta:J})};return t.forEach((g,f)=>{var m;if(g.path===""||!((m=g.path)!=null&&m.includes("?")))p(g,f);else for(let _ of gd(g.path))p(g,f,!0,_)}),a}function gd(t){let a=t.split("/");if(a.length===0)return[];let[o,...r]=a,c=o.endsWith("?"),p=o.replace(/\?$/,"");if(r.length===0)return c?[p,""]:[p];let g=gd(r.join("/")),f=[];return f.push(...g.map(m=>m===""?p:[p,m].join("/"))),c&&f.push(...g),f.map(m=>t.startsWith("/")&&m===""?"/":m)}function Of(t){t.sort((a,o)=>a.score!==o.score?o.score-a.score:Qf(a.routesMeta.map(r=>r.childrenIndex),o.routesMeta.map(r=>r.childrenIndex)))}var Nf=/^:[\w-]+$/,Ff=3,Df=2,Wf=1,$f=10,Vf=-2,kp=t=>t==="*";function Kf(t,a){let o=t.split("/"),r=o.length;return o.some(kp)&&(r+=Vf),a&&(r+=Df),o.filter(c=>!kp(c)).reduce((c,p)=>c+(Nf.test(p)?Ff:p===""?Wf:$f),r)}function Qf(t,a){return t.length===a.length&&t.slice(0,-1).every((r,c)=>r===a[c])?t[t.length-1]-a[a.length-1]:0}function Yf(t,a,o=!1){let{routesMeta:r}=t,c={},p="/",g=[];for(let f=0;f<r.length;++f){let m=r[f],_=f===r.length-1,E=p==="/"?a:a.slice(p.length)||"/",S=Ua({path:m.relativePath,caseSensitive:m.caseSensitive,end:_},E),J=m.route;if(!S&&_&&o&&!r[r.length-1].route.index&&(S=Ua({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},E)),!S)return null;Object.assign(c,S.params),g.push({params:c,pathname:Kl([p,S.pathname]),pathnameBase:sm(Kl([p,S.pathnameBase])),route:J}),S.pathnameBase!=="/"&&(p=Kl([p,S.pathnameBase]))}return g}function Ua(t,a){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[o,r]=Xf(t.path,t.caseSensitive,t.end),c=a.match(o);if(!c)return null;let p=c[0],g=p.replace(/(.)\/+$/,"$1"),f=c.slice(1);return{params:r.reduce((_,{paramName:E,isOptional:S},J)=>{if(E==="*"){let H=f[J]||"";g=p.slice(0,p.length-H.length).replace(/(.)\/+$/,"$1")}const U=f[J];return S&&!U?_[E]=void 0:_[E]=(U||"").replace(/%2F/g,"/"),_},{}),pathname:p,pathnameBase:g,pattern:t}}function Xf(t,a=!1,o=!0){tl(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],c="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,f,m,_,E)=>{if(r.push({paramName:f,isOptional:m!=null}),m){let S=E.charAt(_+g.length);return S&&S!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(r.push({paramName:"*"}),c+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?c+="\\/*$":t!==""&&t!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,a?void 0:"i"),r]}function Zf(t){try{return t.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return tl(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),t}}function Ql(t,a){if(a==="/")return t;if(!t.toLowerCase().startsWith(a.toLowerCase()))return null;let o=a.endsWith("/")?a.length-1:a.length,r=t.charAt(o);return r&&r!=="/"?null:t.slice(o)||"/"}function em({basename:t,pathname:a}){return a==="/"?t:Kl([t,a])}var fd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Uu=t=>fd.test(t);function lm(t,a="/"){let{pathname:o,search:r="",hash:c=""}=typeof t=="string"?ws(t):t,p;return o?(o=Bu(o),o.startsWith("/")?p=bp(o.substring(1),"/"):p=bp(o,a)):p=a,{pathname:p,search:im(r),hash:tm(c)}}function bp(t,a){let o=qa(a).split("/");return t.split("/").forEach(c=>{c===".."?o.length>1&&o.pop():c!=="."&&o.push(c)}),o.length>1?o.join("/"):"/"}function wu(t,a,o,r){return`Cannot include a '${t}' character in a manually specified \`to.${a}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function md(t){return t.filter((a,o)=>o===0||a.route.path&&a.route.path.length>0)}function qu(t){let a=md(t);return a.map((o,r)=>r===a.length-1?o.pathname:o.pathnameBase)}function Ba(t,a,o,r=!1){let c;typeof t=="string"?c=ws(t):(c={...t},Ge(!c.pathname||!c.pathname.includes("?"),wu("?","pathname","search",c)),Ge(!c.pathname||!c.pathname.includes("#"),wu("#","pathname","hash",c)),Ge(!c.search||!c.search.includes("#"),wu("#","search","hash",c)));let p=t===""||c.pathname==="",g=p?"/":c.pathname,f;if(g==null)f=o;else{let S=a.length-1;if(!r&&g.startsWith("..")){let J=g.split("/");for(;J[0]==="..";)J.shift(),S-=1;c.pathname=J.join("/")}f=S>=0?a[S]:"/"}let m=lm(c,f),_=g&&g!=="/"&&g.endsWith("/"),E=(p||g===".")&&o.endsWith("/");return!m.pathname.endsWith("/")&&(_||E)&&(m.pathname+="/"),m}var Bu=t=>t.replace(/\/\/+/g,"/"),Kl=t=>Bu(t.join("/")),qa=t=>t.replace(/\/+$/,""),sm=t=>qa(t).replace(/^\/*/,"/"),im=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,tm=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,fn=class{constructor(t,a,o,r=!1){this.status=t,this.statusText=a||"",this.internal=r,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}};function gn(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function mn(t){let a=t.map(o=>o.route.path).filter(Boolean);return Kl(a)||"/"}var hd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function _d(t,a){let o=t;if(typeof o!="string"||!fd.test(o))return{absoluteURL:void 0,isExternal:!1,to:o};let r=o,c=!1;if(hd)try{let p=new URL(window.location.href),g=o.startsWith("//")?new URL(p.protocol+o):new URL(o),f=Ql(g.pathname,a);g.origin===p.origin&&f!=null?o=f+g.search+g.hash:c=!0}catch{tl(!1,`<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:c,to:o}}var pi=Symbol("Uninstrumented");function nm(t,a){let o={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};t.forEach(c=>c({id:a.id,index:a.index,path:a.path,instrument(p){let g=Object.keys(o);for(let f of g)p[f]&&o[f].push(p[f])}}));let r={};if(typeof a.lazy=="function"&&o.lazy.length>0){let c=ft(o.lazy,a.lazy,()=>{});c&&(r.lazy=c)}if(typeof a.lazy=="object"){let c=a.lazy;["middleware","loader","action"].forEach(p=>{let g=c[p],f=o[`lazy.${p}`];if(typeof g=="function"&&f.length>0){let m=ft(f,g,()=>{});m&&(r.lazy=Object.assign(r.lazy||{},{[p]:m}))}})}return["loader","action"].forEach(c=>{let p=a[c];if(typeof p=="function"&&o[c].length>0){let g=p[pi]??p,f=ft(o[c],g,(...m)=>Cp(m[0]));f&&(c==="loader"&&g.hydrate===!0&&(f.hydrate=!0),f[pi]=g,r[c]=f)}}),a.middleware&&a.middleware.length>0&&o.middleware.length>0&&(r.middleware=a.middleware.map(c=>{let p=c[pi]??c,g=ft(o.middleware,p,(...f)=>Cp(f[0]));return g?(g[pi]=p,g):c})),r}function am(t,a){let o={navigate:[],fetch:[]};if(a.forEach(r=>r({instrument(c){let p=Object.keys(c);for(let g of p)c[g]&&o[g].push(c[g])}})),o.navigate.length>0){let r=t.navigate[pi]??t.navigate,c=ft(o.navigate,r,(...p)=>{let[g,f]=p;return{to:typeof g=="number"||typeof g=="string"?g:g?vs(g):".",...Lp(t,f??{})}});c&&(c[pi]=r,t.navigate=c)}if(o.fetch.length>0){let r=t.fetch[pi]??t.fetch,c=ft(o.fetch,r,(...p)=>{let[g,,f,m]=p;return{href:f??".",fetcherKey:g,...Lp(t,m??{})}});c&&(c[pi]=r,t.fetch=c)}return t}function ft(t,a,o){return t.length===0?null:async(...r)=>{let c=await jd(t,o(...r),()=>a(...r),t.length-1);if(c.type==="error")throw c.value;return c.value}}async function jd(t,a,o,r){let c=t[r],p;if(c){let g,f=async()=>(g?console.error("You cannot call instrumented handlers more than once"):g=jd(t,a,o,r-1),p=await g,Ge(p,"Expected a result"),p.type==="error"&&p.value instanceof Error?{status:"error",error:p.value}:{status:"success",error:void 0});try{await c(f,a)}catch(m){console.error("An instrumentation function threw an error:",m)}g||await f(),await g}else try{p={type:"success",value:await o()}}catch(g){p={type:"error",value:g}}return p||{type:"error",value:new Error("No result assigned in instrumentation chain.")}}function Cp(t){let{request:a,context:o,params:r,pattern:c}=t;return{request:om(a),params:{...r},pattern:c,context:um(o)}}function Lp(t,a){return{currentUrl:vs(t.state.location),..."formMethod"in a?{formMethod:a.formMethod}:{},..."formEncType"in a?{formEncType:a.formEncType}:{},..."formData"in a?{formData:a.formData}:{},..."body"in a?{body:a.body}:{}}}function om(t){return{method:t.method,url:t.url,headers:{get:(...a)=>t.headers.get(...a)}}}function um(t){if(cm(t)){let a={...t};return Object.freeze(a),a}else return{get:a=>t.get(a)}}var rm=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function cm(t){if(t===null||typeof t!="object")return!1;const a=Object.getPrototypeOf(t);return a===Object.prototype||a===null||Object.getOwnPropertyNames(a).sort().join("\0")===rm}var Sd=["POST","PUT","PATCH","DELETE"],pm=new Set(Sd),dm=["GET",...Sd],gm=new Set(dm),vd=new Set([301,302,303,307,308]),fm=new Set([307,308]),xu={state:"idle",location:void 0,matches:void 0,historyAction:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},mm={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ln={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},hm=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),wd="remix-router-transitions",xd=Symbol("ResetLoaderData"),Li,pt,ri,dt,_m=class{constructor(t){on(this,Li),on(this,pt),on(this,ri),on(this,dt),hs(this,Li,t),hs(this,pt,Ga(t))}get stableRoutes(){return $l(this,Li)}get activeRoutes(){return $l(this,ri)??$l(this,Li)}get branches(){return $l(this,dt)??$l(this,pt)}get hasHMRRoutes(){return $l(this,ri)!=null}setRoutes(t){hs(this,Li,t),hs(this,pt,Ga(t))}setHmrRoutes(t){hs(this,ri,t),hs(this,dt,Ga(t))}commitHmrRoutes(){$l(this,ri)&&(hs(this,Li,$l(this,ri)),hs(this,pt,$l(this,dt)),hs(this,ri,void 0),hs(this,dt,void 0))}};Li=new WeakMap;pt=new WeakMap;ri=new WeakMap;dt=new WeakMap;function jm(t){const a=t.window?t.window:typeof window<"u"?window:void 0,o=typeof a<"u"&&typeof a.document<"u"&&typeof a.document.createElement<"u";Ge(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let r=t.hydrationRouteProperties||[],c=t.mapRouteProperties||hm,p=c;if(t.instrumentations){let j=t.instrumentations;p=w=>({...c(w),...nm(j.map(G=>G.route).filter(Boolean),w)})}let g={},f=new _m(dn(t.routes,p,void 0,g)),m=t.basename||"/";m.startsWith("/")||(m=`/${m}`);let _=t.dataStrategy||ym,E={...t.future},S=null,J=new Set,U=null,H=null,A=null,q=null,W=t.hydrationData!=null,K=us(f.activeRoutes,t.history.location,m,!1,f.branches),X=!1,pe=null,re,ve;if(K==null&&!t.patchRoutesOnNavigation){let j=Vl(404,{pathname:t.history.location.pathname}),{matches:w,route:G}=ba(f.activeRoutes);re=!0,ve=!re,K=w,pe={[G.id]:j}}else if(K&&!t.hydrationData&&Hs(K,f.activeRoutes,t.history.location.pathname).active&&(K=null),K)if(K.some(j=>j.route.lazy))re=!1,ve=!re;else if(!K.some(j=>Au(j.route)))re=!0,ve=!re;else{let j=t.hydrationData?t.hydrationData.loaderData:null,w=t.hydrationData?t.hydrationData.errors:null,G=K;if(w){let M=K.findIndex(T=>w[T.route.id]!==void 0);G=G.slice(0,M+1)}ve=!1,re=!0,G.forEach(M=>{let T=yd(M.route,j,w);ve=ve||T.renderFallback,re=re&&!T.shouldLoad})}else{re=!1,ve=!re,K=[];let j=Hs(null,f.activeRoutes,t.history.location.pathname);j.active&&j.matches&&(X=!0,K=j.matches)}let Ce,L={historyAction:t.history.action,location:t.history.location,matches:K,initialized:re,renderFallback:ve,navigation:xu,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||pe,fetchers:new Map,blockers:new Map},Ee="POP",fe=null,Re=!1,Se,Ae=!1,Je=new Map,Le=null,De=!1,de=!1,D=new Set,Q=new Map,V=0,y=-1,B=new Map,ge=new Set,ie=new Map,xe=new Map,me=new Set,Ie=new Map,k,R=null;function Z(){if(S=t.history.listen(({action:j,location:w,delta:G})=>{if(k){k(),k=void 0;return}tl(Ie.size===0||G!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let M=Es({currentLocation:L.location,nextLocation:w,historyAction:j});if(M&&G!=null){let T=new Promise(ae=>{k=ae});t.history.go(G*-1),Zl(M,{state:"blocked",location:w,proceed(){Zl(M,{state:"proceeding",proceed:void 0,reset:void 0,location:w}),T.then(()=>t.history.go(G))},reset(){let ae=new Map(L.blockers);ae.set(M,ln),Oe({blockers:ae})}}),fe==null||fe.resolve(),fe=null;return}return zl(j,w)}),o){Rm(a,Je);let j=()=>Om(a,Je);a.addEventListener("pagehide",j),Le=()=>a.removeEventListener("pagehide",j)}return L.initialized||zl("POP",L.location,{initialHydration:!0}),Ce}function ke(){S&&S(),Le&&Le(),J.clear(),Se&&Se.abort(),L.fetchers.forEach((j,w)=>zi(L.fetchers,w)),L.blockers.forEach((j,w)=>Ai(w))}function He(j){if(J.add(j),U){let{newErrors:w}=U;U=null,j(L,{deletedFetchers:[],newErrors:w,viewTransitionOpts:void 0,flushSync:!1})}return()=>J.delete(j)}function Oe(j,w={}){j.matches&&(j.matches=j.matches.map(T=>{let ae=g[T.route.id],oe=T.route;return oe.element!==ae.element||oe.errorElement!==ae.errorElement||oe.hydrateFallbackElement!==ae.hydrateFallbackElement?{...T,route:ae}:T})),L={...L,...j};let G=[],M=[];L.fetchers.forEach((T,ae)=>{T.state==="idle"&&(me.has(ae)?G.push(ae):M.push(ae))}),me.forEach(T=>{!L.fetchers.has(T)&&!Q.has(T)&&G.push(T)}),J.size===0&&(U={newErrors:j.errors??null}),[...J].forEach(T=>T(L,{deletedFetchers:G,newErrors:j.errors??null,viewTransitionOpts:w.viewTransitionOpts,flushSync:w.flushSync===!0})),G.forEach(T=>zi(L.fetchers,T)),M.forEach(T=>L.fetchers.delete(T))}function kl(j,w,{flushSync:G}={}){var je,be;let M=L.actionData!=null&&L.navigation.formMethod!=null&&vl(L.navigation.formMethod)&&L.navigation.state==="loading"&&((je=j.state)==null?void 0:je._isRedirect)!==!0,T;w.actionData?Object.keys(w.actionData).length>0?T=w.actionData:T=null:M?T=L.actionData:T=null;let ae=w.loaderData?Hp(L.loaderData,w.loaderData,w.matches||[],w.errors):L.loaderData,oe=L.blockers;oe.size>0&&(oe=new Map(oe),oe.forEach((ce,ze)=>oe.set(ze,ln)));let ye=De?!1:vt(j,w.matches||L.matches),Y=Re===!0||L.navigation.formMethod!=null&&vl(L.navigation.formMethod)&&((be=j.state)==null?void 0:be._isRedirect)!==!0;f.commitHmrRoutes(),De||Ee==="POP"||(Ee==="PUSH"?t.history.push(j,j.state):Ee==="REPLACE"&&t.history.replace(j,j.state));let ue;if(Ee==="POP"){let ce=Je.get(L.location.pathname);ce&&ce.has(j.pathname)?ue={currentLocation:L.location,nextLocation:j}:Je.has(j.pathname)&&(ue={currentLocation:j,nextLocation:L.location})}else if(Ae){let ce=Je.get(L.location.pathname);ce?ce.add(j.pathname):(ce=new Set([j.pathname]),Je.set(L.location.pathname,ce)),ue={currentLocation:L.location,nextLocation:j}}Oe({...w,actionData:T,loaderData:ae,historyAction:Ee,location:j,initialized:!0,renderFallback:!1,navigation:xu,revalidation:"idle",restoreScrollPosition:ye,preventScrollReset:Y,blockers:oe},{viewTransitionOpts:ue,flushSync:G===!0}),Ee="POP",Re=!1,Ae=!1,De=!1,de=!1,fe==null||fe.resolve(),fe=null,R==null||R.resolve(),R=null}async function rs(j,w){if(fe==null||fe.resolve(),fe=null,typeof j=="number"){fe||(fe=Np());let Te=fe.promise;return t.history.go(j),Te}let G=Gu(L.location,L.matches,m,j,w==null?void 0:w.fromRouteId,w==null?void 0:w.relative),{path:M,submission:T,error:ae}=Ip(!1,G,w),oe;w!=null&&w.mask&&(oe={pathname:"",search:"",hash:"",...typeof w.mask=="string"?ws(w.mask):{...L.location.mask,...w.mask}});let ye=L.location,Y=pn(ye,M,w&&w.state,void 0,oe);Y={...Y,...t.history.encodeLocation(Y)};let ue=w&&w.replace!=null?w.replace:void 0,je="PUSH";ue===!0?je="REPLACE":ue===!1||T!=null&&vl(T.formMethod)&&T.formAction===L.location.pathname+L.location.search&&(je="REPLACE");let be=w&&"preventScrollReset"in w?w.preventScrollReset===!0:void 0,ce=(w&&w.flushSync)===!0,ze=Es({currentLocation:ye,nextLocation:Y,historyAction:je});if(ze){Zl(ze,{state:"blocked",location:Y,proceed(){Zl(ze,{state:"proceeding",proceed:void 0,reset:void 0,location:Y}),rs(j,w)},reset(){let Te=new Map(L.blockers);Te.set(ze,ln),Oe({blockers:Te})}});return}await zl(je,Y,{submission:T,pendingError:ae,preventScrollReset:be,replace:w&&w.replace,enableViewTransition:w&&w.viewTransition,flushSync:ce,callSiteDefaultShouldRevalidate:w&&w.defaultShouldRevalidate})}function Pi(){R||(R=Np()),Ms(),Oe({revalidation:"loading"});let j=R.promise;return L.navigation.state==="submitting"?j:L.navigation.state==="idle"?(zl(L.historyAction,L.location,{startUninterruptedRevalidation:!0}),j):(zl(Ee||L.historyAction,L.navigation.location,{overrideNavigation:L.navigation,enableViewTransition:Ae===!0}),j)}async function zl(j,w,G){Se&&Se.abort(),Se=null,Ee=j,De=(G&&G.startUninterruptedRevalidation)===!0,En(L.location,L.matches),Re=(G&&G.preventScrollReset)===!0,Ae=(G&&G.enableViewTransition)===!0;let M=f.activeRoutes,T=G!=null&&G.initialHydration&&L.matches&&L.matches.length>0&&!X?L.matches:us(M,w,m,!1,f.branches),ae=(G&&G.flushSync)===!0;if(T&&L.initialized&&!de&&Pm(L.location,w)&&!(G&&G.submission&&vl(G.submission.formMethod))){kl(w,{matches:T},{flushSync:ae});return}let oe=Hs(T,M,w.pathname);if(oe.active&&oe.matches&&(T=oe.matches),!T){let{error:Ve,notFoundMatches:Ne,route:Ue}=Mi(w.pathname);kl(w,{matches:Ne,loaderData:{},errors:{[Ue.id]:Ve}},{flushSync:ae});return}let ye=G&&G.overrideNavigation?{...G.overrideNavigation,matches:T,historyAction:j}:void 0;Se=new AbortController;let Y=gt(t.history,w,Se.signal,G&&G.submission),ue=t.getContext?await t.getContext():new yp,je;if(G&&G.pendingError)je=[ci(T).route.id,{type:"error",error:G.pendingError}];else if(G&&G.submission&&vl(G.submission.formMethod)){let Ve=await Sn(Y,w,G.submission,T,j,ue,oe.active,G&&G.initialHydration===!0,{replace:G.replace,flushSync:ae});if(Ve.shortCircuited)return;if(Ve.pendingActionResult){let[Ne,Ue]=Ve.pendingActionResult;if(Hl(Ue)&&gn(Ue.error)&&Ue.error.status===404){Se=null,kl(w,{matches:Ve.matches,loaderData:{},errors:{[Ne]:Ue.error}});return}}T=Ve.matches||T,je=Ve.pendingActionResult,ye=yu(w,T,j,G.submission),ae=!1,oe.active=!1,Y=gt(t.history,Y.url,Y.signal)}let{shortCircuited:be,matches:ce,loaderData:ze,errors:Te,workingFetchers:ll}=await ht(Y,w,T,j,ue,oe.active,ye,G&&G.submission,G&&G.fetcherSubmission,G&&G.replace,G&&G.initialHydration===!0,ae,je,G&&G.callSiteDefaultShouldRevalidate);be||(Se=null,kl(w,{matches:ce||T,...Tp(je),loaderData:ze,errors:Te,...ll?{fetchers:ll}:{}}))}async function Sn(j,w,G,M,T,ae,oe,ye,Y={}){Ms();let ue=Hm(w,M,T,G);if(Oe({navigation:ue},{flushSync:Y.flushSync===!0}),oe){let ce=await fi(M,w.pathname,j.signal);if(ce.type==="aborted")return{shortCircuited:!0};if(ce.type==="error"){if(ce.partialMatches.length===0){let{matches:Te,route:ll}=ba(f.activeRoutes);return{matches:Te,pendingActionResult:[ll.id,{type:"error",error:ce.error}]}}let ze=ci(ce.partialMatches).route.id;return{matches:ce.partialMatches,pendingActionResult:[ze,{type:"error",error:ce.error}]}}else if(ce.matches)M=ce.matches;else{let{notFoundMatches:ze,error:Te,route:ll}=Mi(w.pathname);return{matches:ze,pendingActionResult:[ll.id,{type:"error",error:Te}]}}}let je,be=Pa(M,w);if(!be.route.action&&!be.route.lazy)je={type:"error",error:Vl(405,{method:j.method,pathname:w.pathname,routeId:be.route.id})};else{let ce=mt(p,g,j,w,M,be,ye?[]:r,ae),ze=await As(j,w,ce,ae,null);if(je=ze[be.route.id],!je){for(let Te of M)if(ze[Te.route.id]){je=ze[Te.route.id];break}}if(j.signal.aborted)return{shortCircuited:!0}}if(Ii(je)){let ce;return Y&&Y.replace!=null?ce=Y.replace:ce=Bp(je.response.headers.get("Location"),new URL(j.url),m,t.history)===L.location.pathname+L.location.search,await cs(j,je,!0,{submission:G,replace:ce}),{shortCircuited:!0}}if(Hl(je)){let ce=ci(M,be.route.id);return(Y&&Y.replace)!==!0&&(Ee="PUSH"),{matches:M,pendingActionResult:[ce.route.id,je,be.route.id]}}return{matches:M,pendingActionResult:[be.route.id,je]}}async function ht(j,w,G,M,T,ae,oe,ye,Y,ue,je,be,ce,ze){let Te=oe||yu(w,G,M,ye),ll=ye||Y||Op(Te),Ve=!De&&!je;if(ae){if(Ve){let ml=qs(ce);Oe({navigation:Te,...ml!==void 0?{actionData:ml}:{}},{flushSync:be})}let qe=await fi(G,w.pathname,j.signal);if(qe.type==="aborted")return{shortCircuited:!0};if(qe.type==="error"){if(qe.partialMatches.length===0){let{matches:xl,route:bl}=ba(f.activeRoutes);return{matches:xl,loaderData:{},errors:{[bl.id]:qe.error}}}let ml=ci(qe.partialMatches).route.id;return{matches:qe.partialMatches,loaderData:{},errors:{[ml]:qe.error}}}else if(qe.matches)G=qe.matches;else{let{error:ml,notFoundMatches:xl,route:bl}=Mi(w.pathname);return{matches:xl,loaderData:{},errors:{[bl.id]:ml}}}}let Ne=f.activeRoutes,{dsMatches:Ue,revalidatingFetchers:gl}=Gp(j,T,p,g,t.history,L,G,ll,w,je?[]:r,je===!0,de,D,me,ie,ge,Ne,m,t.patchRoutesOnNavigation!=null,f.branches,ce,ze);if(y=++V,!t.dataStrategy&&!Ue.some(qe=>qe.shouldLoad)&&!Ue.some(qe=>qe.route.middleware&&qe.route.middleware.length>0)&&gl.length===0){let qe=new Map(L.fetchers),ml=qi(qe);return kl(w,{matches:G,loaderData:{},errors:ce&&Hl(ce[1])?{[ce[0]]:ce[1].error}:null,...Tp(ce),...ml?{fetchers:qe}:{}},{flushSync:be}),{shortCircuited:!0}}if(Ve){let qe={};if(!ae){qe.navigation=Te;let ml=qs(ce);ml!==void 0&&(qe.actionData=ml)}gl.length>0&&(qe.fetchers=Bs(gl)),Oe(qe,{flushSync:be})}gl.forEach(qe=>{Xl(qe.key),qe.controller&&Q.set(qe.key,qe.controller)});let ks=()=>gl.forEach(qe=>Xl(qe.key));Se&&Se.signal.addEventListener("abort",ks);let{loaderResults:es,fetcherResults:ls}=await Ji(Ue,gl,j,w,T);if(j.signal.aborted)return{shortCircuited:!0};Se&&Se.signal.removeEventListener("abort",ks),gl.forEach(qe=>Q.delete(qe.key));let ps=Ca(es);if(ps)return await cs(j,ps.result,!0,{replace:ue}),{shortCircuited:!0};if(ps=Ca(ls),ps)return ge.add(ps.key),await cs(j,ps.result,!0,{replace:ue}),{shortCircuited:!0};let Ul=new Map(L.fetchers),{loaderData:Rs,errors:nl}=Mp(L,G,es,ce,gl,ls,Ul);je&&L.errors&&(nl={...L.errors,...nl});let Hi=qi(Ul),fl=Bi(y,Ul),Ti=Hi||fl||gl.length>0;return{matches:G,loaderData:Rs,errors:nl,...Ti?{workingFetchers:Ul}:{}}}function qs(j){if(j&&!Hl(j[1]))return{[j[0]]:j[1].data};if(L.actionData)return Object.keys(L.actionData).length===0?null:L.actionData}function Bs(j){let w=new Map(L.fetchers);return j.forEach(G=>{let M=w.get(G.key),T=sn(void 0,M?M.data:void 0);w.set(G.key,T)}),w}async function _t(j,w,G,M){Xl(j);let T=(M&&M.flushSync)===!0,ae=f.activeRoutes,oe=Gu(L.location,L.matches,m,G,w,M==null?void 0:M.relative),ye=us(ae,oe,m,!1,f.branches),Y=Hs(ye,ae,oe);if(Y.active&&Y.matches&&(ye=Y.matches),!ye){wl(j,w,Vl(404,{pathname:oe}),{flushSync:T});return}let{path:ue,submission:je,error:be}=Ip(!0,oe,M);if(be){wl(j,w,be,{flushSync:T});return}let ce=t.getContext?await t.getContext():new yp,ze=(M&&M.preventScrollReset)===!0;if(je&&vl(je.formMethod)){await vn(j,w,ue,ye,ce,Y.active,T,ze,je,M&&M.defaultShouldRevalidate);return}ie.set(j,{routeId:w,path:ue}),await wn(j,w,ue,ye,ce,Y.active,T,ze,je)}async function vn(j,w,G,M,T,ae,oe,ye,Y,ue){Ms(),ie.delete(j);let je=L.fetchers.get(j);Tl(j,Tm(Y,je),{flushSync:oe});let be=new AbortController,ce=gt(t.history,G,be.signal,Y);if(ae){let We=await fi(M,new URL(ce.url).pathname,ce.signal,j);if(We.type==="aborted")return;if(We.type==="error"){wl(j,w,We.error,{flushSync:oe});return}else if(We.matches)M=We.matches;else{wl(j,w,Vl(404,{pathname:G}),{flushSync:oe});return}}let ze=Pa(M,G);if(!ze.route.action&&!ze.route.lazy){let We=Vl(405,{method:Y.formMethod,pathname:G,routeId:w});wl(j,w,We,{flushSync:oe});return}Q.set(j,be);let Te=V,ll=mt(p,g,ce,G,M,ze,r,T),Ve=await As(ce,G,ll,T,j),Ne=Ve[ze.route.id];if(!Ne){for(let We of ll)if(Ve[We.route.id]){Ne=Ve[We.route.id];break}}if(ce.signal.aborted){Q.get(j)===be&&Q.delete(j);return}if(me.has(j)){if(Ii(Ne)||Hl(Ne)){Tl(j,Ss(void 0));return}}else{if(Ii(Ne))if(Q.delete(j),y>Te){Tl(j,Ss(void 0));return}else return ge.add(j),Tl(j,sn(Y)),cs(ce,Ne,!1,{fetcherSubmission:Y,preventScrollReset:ye});if(Hl(Ne)){wl(j,w,Ne.error);return}}let Ue=L.navigation.location||L.location,gl=gt(t.history,Ue,be.signal),ks=f.activeRoutes,es=L.navigation.state!=="idle"?us(ks,L.navigation.location,m,!1,f.branches):L.matches;Ge(es,"Didn't find any matches after fetcher action");let ls=++V;B.set(j,ls);let{dsMatches:ps,revalidatingFetchers:Ul}=Gp(gl,T,p,g,t.history,L,es,Y,Ue,r,!1,de,D,me,ie,ge,ks,m,t.patchRoutesOnNavigation!=null,f.branches,[ze.route.id,Ne],ue),Rs=sn(Y,Ne.data),nl=new Map(L.fetchers);nl.set(j,Rs),Ul.filter(We=>We.key!==j).forEach(We=>{let bs=We.key,Ri=nl.get(bs),kn=sn(void 0,Ri?Ri.data:void 0);nl.set(bs,kn),Xl(bs),We.controller&&Q.set(bs,We.controller)}),Oe({fetchers:nl});let Hi=()=>Ul.forEach(We=>Xl(We.key));be.signal.addEventListener("abort",Hi);let{loaderResults:fl,fetcherResults:Ti}=await Ji(ps,Ul,gl,Ue,T);if(be.signal.aborted)return;be.signal.removeEventListener("abort",Hi),B.delete(j),Q.delete(j),Ul.forEach(We=>Q.delete(We.key));let qe=L.fetchers.has(j),ml=We=>{if(!qe)return We;let bs=new Map(We.fetchers);return bs.set(j,Ss(Ne.data)),{...We,fetchers:bs}},xl=Ca(fl);if(xl)return L=ml(L),cs(gl,xl.result,!1,{preventScrollReset:ye});if(xl=Ca(Ti),xl)return ge.add(xl.key),L=ml(L),cs(gl,xl.result,!1,{preventScrollReset:ye});let bl=new Map(L.fetchers);qe&&bl.set(j,Ss(Ne.data));let{loaderData:Os,errors:Ns}=Mp(L,es,fl,void 0,Ul,Ti,bl);Bi(ls,bl),L.navigation.state==="loading"&&ls>y?(Ge(Ee,"Expected pending action"),Se&&Se.abort(),kl(L.navigation.location,{matches:es,loaderData:Os,errors:Ns,fetchers:bl})):(Oe({errors:Ns,loaderData:Hp(L.loaderData,Os,es,Ns),fetchers:bl}),de=!1)}async function wn(j,w,G,M,T,ae,oe,ye,Y){let ue=L.fetchers.get(j);Tl(j,sn(Y,ue?ue.data:void 0),{flushSync:oe});let je=new AbortController,be=gt(t.history,G,je.signal);if(ae){let Ne=await fi(M,new URL(be.url).pathname,be.signal,j);if(Ne.type==="aborted")return;if(Ne.type==="error"){wl(j,w,Ne.error,{flushSync:oe});return}else if(Ne.matches)M=Ne.matches;else{wl(j,w,Vl(404,{pathname:G}),{flushSync:oe});return}}let ce=Pa(M,G);Q.set(j,je);let ze=V,Te=mt(p,g,be,G,M,ce,r,T),ll=await As(be,G,Te,T,j),Ve=ll[ce.route.id];if(!Ve){for(let Ne of M)if(ll[Ne.route.id]){Ve=ll[Ne.route.id];break}}if(Q.get(j)===je&&Q.delete(j),!be.signal.aborted){if(me.has(j)){Tl(j,Ss(void 0));return}if(Ii(Ve))if(y>ze){Tl(j,Ss(void 0));return}else{ge.add(j),await cs(be,Ve,!1,{preventScrollReset:ye});return}if(Hl(Ve)){wl(j,w,Ve.error);return}Tl(j,Ss(Ve.data))}}async function cs(j,w,G,{submission:M,fetcherSubmission:T,preventScrollReset:ae,replace:oe}={}){G||(fe==null||fe.resolve(),fe=null),w.response.headers.has("X-Remix-Revalidate")&&(de=!0);let ye=w.response.headers.get("Location");Ge(ye,"Expected a Location header on the redirect Response"),ye=Bp(ye,new URL(j.url),m,t.history);let Y=pn(L.location,ye,{_isRedirect:!0});if(o){let Te=!1;if(w.response.headers.has("X-Remix-Reload-Document"))Te=!0;else if(Uu(ye)){const ll=cd(a,ye,!0);Te=ll.origin!==a.location.origin||Ql(ll.pathname,m)==null}if(Te){oe?a.location.replace(ye):a.location.assign(ye);return}}Se=null;let ue=oe===!0||w.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:je,formAction:be,formEncType:ce}=L.navigation;!M&&!T&&je&&be&&ce&&(M=Op(L.navigation));let ze=M||T;if(fm.has(w.response.status)&&ze&&vl(ze.formMethod))await zl(ue,Y,{submission:{...ze,formAction:ye},preventScrollReset:ae||Re,enableViewTransition:G?Ae:void 0});else{let Te=yu(Y,[],ue,M);await zl(ue,Y,{overrideNavigation:Te,fetcherSubmission:T,preventScrollReset:ae||Re,enableViewTransition:G?Ae:void 0})}}async function As(j,w,G,M,T){var ye;let ae,oe={};try{ae=await km(_,j,w,G,T,M,!1)}catch(Y){return G.filter(ue=>ue.shouldLoad).forEach(ue=>{oe[ue.route.id]={type:"error",error:Y}}),oe}if(j.signal.aborted)return oe;if(!vl(j.method))for(let Y of G){if(((ye=ae[Y.route.id])==null?void 0:ye.type)==="error")break;!ae.hasOwnProperty(Y.route.id)&&!L.loaderData.hasOwnProperty(Y.route.id)&&(!L.errors||!L.errors.hasOwnProperty(Y.route.id))&&Y.shouldCallHandler()&&(ae[Y.route.id]={type:"error",result:new Error(`No result returned from dataStrategy for route ${Y.route.id}`)})}for(let[Y,ue]of Object.entries(ae))if(qm(ue)){let je=ue.result;oe[Y]={type:"redirect",response:Im(je,j,Y,G,m)}}else oe[Y]=await Lm(ue);return oe}async function Ji(j,w,G,M,T){let ae=As(G,M,j,T,null),oe=Promise.all(w.map(async ue=>{if(ue.matches&&ue.match&&ue.request&&ue.controller){let be=(await As(ue.request,ue.path,ue.matches,T,ue.key))[ue.match.route.id];return{[ue.key]:be}}else return Promise.resolve({[ue.key]:{type:"error",error:Vl(404,{pathname:ue.path})}})})),ye=await ae,Y=(await oe).reduce((ue,je)=>Object.assign(ue,je),{});return{loaderResults:ye,fetcherResults:Y}}function Ms(){de=!0,ie.forEach((j,w)=>{Q.has(w)&&D.add(w),Xl(w)})}function Tl(j,w,G={}){let M=new Map(L.fetchers);M.set(j,w),Oe({fetchers:M},{flushSync:(G&&G.flushSync)===!0})}function wl(j,w,G,M={}){let T=ci(L.matches,w),ae=new Map(L.fetchers);zi(ae,j),Oe({errors:{[T.route.id]:G},fetchers:ae},{flushSync:(M&&M.flushSync)===!0})}function gi(j){return xe.set(j,(xe.get(j)||0)+1),me.has(j)&&me.delete(j),L.fetchers.get(j)||mm}function Ha(j,w){Xl(j,w==null?void 0:w.reason),Tl(j,Ss(null))}function zi(j,w){let G=L.fetchers.get(w);Q.has(w)&&!(G&&G.state==="loading"&&B.has(w))&&Xl(w),ie.delete(w),B.delete(w),ge.delete(w),me.delete(w),D.delete(w),j.delete(w)}function xn(j){let w=(xe.get(j)||0)-1;w<=0?(xe.delete(j),me.add(j)):xe.set(j,w),Oe({fetchers:new Map(L.fetchers)})}function Xl(j,w){let G=Q.get(j);G&&(G.abort(w),Q.delete(j))}function Ui(j,w){for(let G of j){let M=w.get(G);Ge(M,`Expected fetcher: ${G}`);let T=Ss(M.data);w.set(G,T)}}function qi(j){let w=[],G=!1;for(let M of ge){let T=j.get(M);Ge(T,`Expected fetcher: ${M}`),T.state==="loading"&&(ge.delete(M),w.push(M),G=!0)}return Ui(w,j),G}function Bi(j,w){let G=[];for(let[M,T]of B)if(T<j){let ae=w.get(M);Ge(ae,`Expected fetcher: ${M}`),ae.state==="loading"&&(Xl(M),B.delete(M),G.push(M))}return Ui(G,w),G.length>0}function jt(j,w){let G=L.blockers.get(j)||ln;return Ie.get(j)!==w&&Ie.set(j,w),G}function Ai(j){L.blockers.delete(j),Ie.delete(j)}function Zl(j,w){let G=L.blockers.get(j)||ln;Ge(G.state==="unblocked"&&w.state==="blocked"||G.state==="blocked"&&w.state==="blocked"||G.state==="blocked"&&w.state==="proceeding"||G.state==="blocked"&&w.state==="unblocked"||G.state==="proceeding"&&w.state==="unblocked",`Invalid blocker state transition: ${G.state} -> ${w.state}`);let M=new Map(L.blockers);M.set(j,w),Oe({blockers:M})}function Es({currentLocation:j,nextLocation:w,historyAction:G}){if(Ie.size===0)return;Ie.size>1&&tl(!1,"A router only supports one blocker at a time");let M=Array.from(Ie.entries()),[T,ae]=M[M.length-1],oe=L.blockers.get(T);if(!(oe&&oe.state==="proceeding")&&ae({currentLocation:j,nextLocation:w,historyAction:G}))return T}function Mi(j){let w=Vl(404,{pathname:j}),G=f.activeRoutes,{matches:M,route:T}=ba(G);return{notFoundMatches:M,route:T,error:w}}function yn(j,w,G){if(H=j,q=w,A=G||null,!W&&L.navigation===xu){W=!0;let M=vt(L.location,L.matches);M!=null&&Oe({restoreScrollPosition:M})}return()=>{H=null,q=null,A=null}}function St(j,w){return A&&A(j,w.map(M=>Rf(M,L.loaderData)))||j.key}function En(j,w){if(H&&q){let G=St(j,w);H[G]=q()}}function vt(j,w){if(H){let G=St(j,w),M=H[G];if(typeof M=="number")return M}return null}function Hs(j,w,G){if(t.patchRoutesOnNavigation){let M=f.branches;if(j){if(Object.keys(j[0].params).length>0)return{active:!0,matches:us(w,G,m,!0,M)}}else return{active:!0,matches:us(w,G,m,!0,M)||[]}}return{active:!1,matches:null}}async function fi(j,w,G,M){if(!t.patchRoutesOnNavigation)return{type:"success",matches:j};let T=j;for(;;){let ae=g;try{await t.patchRoutesOnNavigation({signal:G,path:w,matches:T,fetcherKey:M,patch:(ue,je)=>{G.aborted||Pp(ue,je,f,ae,p,!1)}})}catch(ue){return{type:"error",error:ue,partialMatches:T}}if(G.aborted)return{type:"aborted"};let oe=f.branches,ye=us(f.activeRoutes,w,m,!1,oe),Y=null;if(ye){if(Object.keys(ye[0].params).length===0)return{type:"success",matches:ye};if(Y=us(f.activeRoutes,w,m,!0,oe),!(Y&&T.length<Y.length&&Ts(T,Y.slice(0,T.length))))return{type:"success",matches:ye}}if(Y||(Y=us(f.activeRoutes,w,m,!0,oe)),!Y||Ts(T,Y))return{type:"success",matches:null};T=Y}}function Ts(j,w){return j.length===w.length&&j.every((G,M)=>G.route.id===w[M].route.id)}function wt(j){g={},f.setHmrRoutes(dn(j,p,void 0,g))}function mi(j,w,G=!1){Pp(j,w,f,g,p,G),f.hasHMRRoutes||Oe({})}return Ce={get basename(){return m},get future(){return E},get state(){return L},get routes(){return f.stableRoutes},get branches(){return f.branches},get manifest(){return g},get window(){return a},initialize:Z,subscribe:He,enableScrollRestoration:yn,navigate:rs,fetch:_t,revalidate:Pi,createHref:j=>t.history.createHref(j),encodeLocation:j=>t.history.encodeLocation(j),getFetcher:gi,resetFetcher:Ha,deleteFetcher:xn,dispose:ke,getBlocker:jt,deleteBlocker:Ai,patchRoutes:mi,_internalFetchControllers:Q,_internalSetRoutes:wt,_internalSetStateDoNotUseOrYouWillBreakYourApp(j){Oe(j)}},t.instrumentations&&(Ce=am(Ce,t.instrumentations.map(j=>j.router).filter(Boolean))),Ce}function Sm(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Gu(t,a,o,r,c,p){let g,f;if(c){g=[];for(let _ of a)if(g.push(_),_.route.id===c){f=_;break}}else g=a,f=a[a.length-1];let m=Ba(r||".",qu(g),Ql(t.pathname,o)||t.pathname,p==="path");if(r==null&&(m.search=t.search,m.hash=t.hash),(r==null||r===""||r===".")&&f){let _=Hu(m.search);if(f.route.index&&!_)m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index";else if(!f.route.index&&_){let E=new URLSearchParams(m.search),S=E.getAll("index");E.delete("index"),S.filter(U=>U).forEach(U=>E.append("index",U));let J=E.toString();m.search=J?`?${J}`:""}}return o!=="/"&&(m.pathname=em({basename:o,pathname:m.pathname})),vs(m)}function Ip(t,a,o){if(!o||!Sm(o))return{path:a};if(o.formMethod&&!Mm(o.formMethod))return{path:a,error:Vl(405,{method:o.formMethod})};let r=()=>({path:a,error:Vl(400,{type:"invalid-body"})}),p=(o.formMethod||"get").toUpperCase(),g=Gd(a);if(o.body!==void 0){if(o.formEncType==="text/plain"){if(!vl(p))return r();let S=typeof o.body=="string"?o.body:o.body instanceof FormData||o.body instanceof URLSearchParams?Array.from(o.body.entries()).reduce((J,[U,H])=>`${J}${U}=${H}
`,""):String(o.body);return{path:a,submission:{formMethod:p,formAction:g,formEncType:o.formEncType,formData:void 0,json:void 0,text:S}}}else if(o.formEncType==="application/json"){if(!vl(p))return r();try{let S=typeof o.body=="string"?JSON.parse(o.body):o.body;return{path:a,submission:{formMethod:p,formAction:g,formEncType:o.formEncType,formData:void 0,json:S,text:void 0}}}catch{return r()}}}Ge(typeof FormData=="function","FormData is not available in this environment");let f,m;if(o.formData)f=Ju(o.formData),m=o.formData;else if(o.body instanceof FormData)f=Ju(o.body),m=o.body;else if(o.body instanceof URLSearchParams)f=o.body,m=Ap(f);else if(o.body==null)f=new URLSearchParams,m=new FormData;else try{f=new URLSearchParams(o.body),m=Ap(f)}catch{return r()}let _={formMethod:p,formAction:g,formEncType:o&&o.formEncType||"application/x-www-form-urlencoded",formData:m,json:void 0,text:void 0};if(vl(_.formMethod))return{path:a,submission:_};let E=ws(a);return t&&E.search&&Hu(E.search)&&f.append("index",""),E.search=`?${f}`,{path:vs(E),submission:_}}function Gp(t,a,o,r,c,p,g,f,m,_,E,S,J,U,H,A,q,W,K,X,pe,re){var De;let ve=pe?Hl(pe[1])?pe[1].error:pe[1].data:void 0,Ce=c.createURL(p.location),L=c.createURL(m),Ee;if(E&&p.errors){let de=Object.keys(p.errors)[0];Ee=g.findIndex(D=>D.route.id===de)}else if(pe&&Hl(pe[1])){let de=pe[0];Ee=g.findIndex(D=>D.route.id===de)-1}let fe=pe?pe[1].statusCode:void 0,Re=fe&&fe>=400,Se={currentUrl:Ce,currentParams:((De=p.matches[0])==null?void 0:De.params)||{},nextUrl:L,nextParams:g[0].params,...f,actionResult:ve,actionStatus:fe},Ae=mn(g),Je=g.map((de,D)=>{let{route:Q}=de,V=null;if(Ee!=null&&D>Ee)V=!1;else if(Q.lazy)V=!0;else if(!Au(Q))V=!1;else if(E){let{shouldLoad:ie}=yd(Q,p.loaderData,p.errors);V=ie}else vm(p.loaderData,p.matches[D],de)&&(V=!0);if(V!==null)return Pu(o,r,t,m,Ae,de,_,a,V);let y=!1;typeof re=="boolean"?y=re:Re?y=!1:(S||Ce.pathname+Ce.search===L.pathname+L.search||Ce.search!==L.search||wm(p.matches[D],de))&&(y=!0);let B={...Se,defaultShouldRevalidate:y},ge=cn(de,B);return Pu(o,r,t,m,Ae,de,_,a,ge,B,re)}),Le=[];return H.forEach((de,D)=>{if(E||!g.some(me=>me.route.id===de.routeId)||U.has(D))return;let Q=p.fetchers.get(D),V=Q&&Q.state!=="idle"&&Q.data===void 0,y=us(q,de.path,W??"/",!1,X);if(!y){if(K&&V)return;Le.push({key:D,routeId:de.routeId,path:de.path,matches:null,match:null,request:null,controller:null});return}if(A.has(D))return;let B=Pa(y,de.path),ge=new AbortController,ie=gt(c,de.path,ge.signal),xe=null;if(J.has(D))J.delete(D),xe=mt(o,r,ie,de.path,y,B,_,a);else if(V)S&&(xe=mt(o,r,ie,de.path,y,B,_,a));else{let me;typeof re=="boolean"?me=re:Re?me=!1:me=S;let Ie={...Se,defaultShouldRevalidate:me};cn(B,Ie)&&(xe=mt(o,r,ie,de.path,y,B,_,a,Ie))}xe&&Le.push({key:D,routeId:de.routeId,path:de.path,matches:xe,match:B,request:ie,controller:ge})}),{dsMatches:Je,revalidatingFetchers:Le}}function Au(t){return t.loader!=null||t.middleware!=null&&t.middleware.length>0}function yd(t,a,o){if(t.lazy)return{shouldLoad:!0,renderFallback:!0};if(!Au(t))return{shouldLoad:!1,renderFallback:!1};let r=a!=null&&t.id in a,c=o!=null&&o[t.id]!==void 0;if(!r&&c)return{shouldLoad:!1,renderFallback:!1};if(typeof t.loader=="function"&&t.loader.hydrate===!0)return{shouldLoad:!0,renderFallback:!r};let p=!r&&!c;return{shouldLoad:p,renderFallback:p}}function vm(t,a,o){let r=!a||o.route.id!==a.route.id,c=!t.hasOwnProperty(o.route.id);return r||c}function wm(t,a){let o=t.route.path;return t.pathname!==a.pathname||o!=null&&o.endsWith("*")&&t.params["*"]!==a.params["*"]}function cn(t,a){if(t.route.shouldRevalidate){let o=t.route.shouldRevalidate(a);if(typeof o=="boolean")return o}return a.defaultShouldRevalidate}function Pp(t,a,o,r,c,p){let g;if(t){let _=r[t];Ge(_,`No route found to patch children into: routeId = ${t}`),_.children||(_.children=[]),g=_.children}else g=o.activeRoutes;let f=[],m=[];if(a.forEach(_=>{let E=g.find(S=>Ed(_,S));E?m.push({existingRoute:E,newRoute:_}):f.push(_)}),f.length>0){let _=dn(f,c,[t||"_","patch",String((g==null?void 0:g.length)||"0")],r);g.push(..._)}if(p&&m.length>0)for(let _=0;_<m.length;_++){let{existingRoute:E,newRoute:S}=m[_],J=E,[U]=dn([S],c,[],{},!0);Object.assign(J,{element:U.element?U.element:J.element,errorElement:U.errorElement?U.errorElement:J.errorElement,hydrateFallbackElement:U.hydrateFallbackElement?U.hydrateFallbackElement:J.hydrateFallbackElement})}o.hasHMRRoutes||o.setRoutes([...o.activeRoutes])}function Ed(t,a){var o;return"id"in t&&"id"in a&&t.id===a.id?!0:t.index===a.index&&t.path===a.path&&t.caseSensitive===a.caseSensitive?(!t.children||t.children.length===0)&&(!a.children||a.children.length===0)?!0:((o=t.children)==null?void 0:o.every((r,c)=>{var p;return(p=a.children)==null?void 0:p.some(g=>Ed(r,g))}))??!1:!1}var Jp=new WeakMap,kd=({key:t,route:a,manifest:o,mapRouteProperties:r})=>{let c=o[a.id];if(Ge(c,"No route found in manifest"),!c.lazy||typeof c.lazy!="object")return;let p=c.lazy[t];if(!p)return;let g=Jp.get(c);g||(g={},Jp.set(c,g));let f=g[t];if(f)return f;let m=(async()=>{let _=Af(t),S=c[t]!==void 0&&t!=="hasErrorBoundary";if(_)tl(!_,"Route property "+t+" is not a supported lazy route property. This property will be ignored."),g[t]=Promise.resolve();else if(S)tl(!1,`Route "${c.id}" has a static property "${t}" defined. The lazy property will be ignored.`);else{let J=await p();J!=null&&(Object.assign(c,{[t]:J}),Object.assign(c,r(c)))}typeof c.lazy=="object"&&(c.lazy[t]=void 0,Object.values(c.lazy).every(J=>J===void 0)&&(c.lazy=void 0))})();return g[t]=m,m},zp=new WeakMap;function xm(t,a,o,r,c){let p=o[t.id];if(Ge(p,"No route found in manifest"),!t.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof t.lazy=="function"){let E=zp.get(p);if(E)return{lazyRoutePromise:E,lazyHandlerPromise:E};let S=(async()=>{Ge(typeof t.lazy=="function","No lazy route function found");let J=await t.lazy(),U={};for(let H in J){let A=J[H];if(A===void 0)continue;let q=Hf(H),K=p[H]!==void 0&&H!=="hasErrorBoundary";q?tl(!q,"Route property "+H+" is not a supported property to be returned from a lazy route function. This property will be ignored."):K?tl(!K,`Route "${p.id}" has a static property "${H}" defined but its lazy function is also returning a value for this property. The lazy route property "${H}" will be ignored.`):U[H]=A}Object.assign(p,U),Object.assign(p,{...r(p),lazy:void 0})})();return zp.set(p,S),S.catch(()=>{}),{lazyRoutePromise:S,lazyHandlerPromise:S}}let g=Object.keys(t.lazy),f=[],m;for(let E of g){if(c&&c.includes(E))continue;let S=kd({key:E,route:t,manifest:o,mapRouteProperties:r});S&&(f.push(S),E===a&&(m=S))}let _=f.length>0?Promise.all(f).then(()=>{}):void 0;return _==null||_.catch(()=>{}),m==null||m.catch(()=>{}),{lazyRoutePromise:_,lazyHandlerPromise:m}}async function Up(t){let a=t.matches.filter(c=>c.shouldLoad),o={};return(await Promise.all(a.map(c=>c.resolve()))).forEach((c,p)=>{o[a[p].route.id]=c}),o}async function ym(t){return t.matches.some(a=>a.route.middleware)?bd(t,()=>Up(t)):Up(t)}function bd(t,a){return Em(t,a,r=>{if(Am(r))throw r;return r},zm,o);function o(r,c,p){if(p)return Promise.resolve(Object.assign(p.value,{[c]:{type:"error",result:r}}));{let{matches:g}=t,f=Math.min(Math.max(g.findIndex(_=>_.route.id===c),0),Math.max(g.findIndex(_=>_.shouldCallHandler()),0)),m=ci(g,g[f].route.id).route.id;return Promise.resolve({[m]:{type:"error",result:r}})}}}async function Em(t,a,o,r,c){let{matches:p,...g}=t,f=p.flatMap(_=>_.route.middleware?_.route.middleware.map(E=>[_.route.id,E]):[]);return await Cd(g,f,a,o,r,c)}async function Cd(t,a,o,r,c,p,g=0){let{request:f}=t;if(f.signal.aborted)throw f.signal.reason??new Error(`Request aborted: ${f.method} ${f.url}`);let m=a[g];if(!m)return await o();let[_,E]=m,S,J=async()=>{if(S)throw new Error("You may only call `next()` once per middleware");try{return S={value:await Cd(t,a,o,r,c,p,g+1)},S.value}catch(U){return S={value:await p(U,_,S)},S.value}};try{let U=await E(t,J),H=U!=null?r(U):void 0;return c(H)?H:S?H??S.value:(S={value:await J()},S.value)}catch(U){return await p(U,_,S)}}function Ld(t,a,o,r,c){let p=kd({key:"middleware",route:r.route,manifest:a,mapRouteProperties:t}),g=xm(r.route,vl(o.method)?"action":"loader",a,t,c);return{middleware:p,route:g.lazyRoutePromise,handler:g.lazyHandlerPromise}}function Pu(t,a,o,r,c,p,g,f,m,_=null,E){let S=!1,J=Ld(t,a,o,p,g);return{...p,_lazyPromises:J,shouldLoad:m,shouldRevalidateArgs:_,shouldCallHandler(U){return S=!0,_?typeof E=="boolean"?cn(p,{..._,defaultShouldRevalidate:E}):typeof U=="boolean"?cn(p,{..._,defaultShouldRevalidate:U}):cn(p,_):m},resolve(U){let{lazy:H,loader:A,middleware:q}=p.route,W=S||m||U&&!vl(o.method)&&(H||A),K=q&&q.length>0&&!A&&!H;return W&&(vl(o.method)||!K)?bm({request:o,path:r,pattern:c,match:p,lazyHandlerPromise:J==null?void 0:J.handler,lazyRoutePromise:J==null?void 0:J.route,handlerOverride:U,scopedContext:f}):Promise.resolve({type:"data",result:void 0})}}}function mt(t,a,o,r,c,p,g,f,m=null){return c.map(_=>_.route.id!==p.route.id?{..._,shouldLoad:!1,shouldRevalidateArgs:m,shouldCallHandler:()=>!1,_lazyPromises:Ld(t,a,o,_,g),resolve:()=>Promise.resolve({type:"data",result:void 0})}:Pu(t,a,o,r,mn(c),_,g,f,!0,m))}async function km(t,a,o,r,c,p,g){r.some(E=>{var S;return(S=E._lazyPromises)==null?void 0:S.middleware})&&await Promise.all(r.map(E=>{var S;return(S=E._lazyPromises)==null?void 0:S.middleware}));let f={request:a,url:Id(a,o),pattern:mn(r),params:r[0].params,context:p,matches:r},_=await t({...f,fetcherKey:c,runClientMiddleware:E=>{let S=f;return bd(S,()=>E({...S,fetcherKey:c,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(r.flatMap(E=>{var S,J;return[(S=E._lazyPromises)==null?void 0:S.handler,(J=E._lazyPromises)==null?void 0:J.route]}))}catch{}return _}async function bm({request:t,path:a,pattern:o,match:r,lazyHandlerPromise:c,lazyRoutePromise:p,handlerOverride:g,scopedContext:f}){let m,_,E=vl(t.method),S=E?"action":"loader",J=U=>{let H,A=new Promise((K,X)=>H=X);_=()=>H(),t.signal.addEventListener("abort",_);let q=K=>typeof U!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${S}" [routeId: ${r.route.id}]`)):U({request:t,url:Id(t,a),pattern:o,params:r.params,context:f},...K!==void 0?[K]:[]),W=(async()=>{try{return{type:"data",result:await(g?g(X=>q(X)):q())}}catch(K){return{type:"error",result:K}}})();return Promise.race([W,A])};try{let U=E?r.route.action:r.route.loader;if(c||p)if(U){let H,[A]=await Promise.all([J(U).catch(q=>{H=q}),c,p]);if(H!==void 0)throw H;m=A}else{await c;let H=E?r.route.action:r.route.loader;if(H)[m]=await Promise.all([J(H),p]);else if(S==="action"){let A=new URL(t.url),q=A.pathname+A.search;throw Vl(405,{method:t.method,pathname:q,routeId:r.route.id})}else return{type:"data",result:void 0}}else if(U)m=await J(U);else{let H=new URL(t.url),A=H.pathname+H.search;throw Vl(404,{pathname:A})}}catch(U){return{type:"error",result:U}}finally{_&&t.signal.removeEventListener("abort",_)}return m}async function Cm(t){let a=t.headers.get("Content-Type");return a&&/\bapplication\/json\b/.test(a)?t.body==null?null:t.json():t.text()}async function Lm(t){var r,c,p,g,f;let{result:a,type:o}=t;if(Mu(a)){let m;try{m=await Cm(a)}catch(_){return{type:"error",error:_}}return o==="error"?{type:"error",error:new fn(a.status,a.statusText,m),statusCode:a.status,headers:a.headers}:{type:"data",data:m,statusCode:a.status,headers:a.headers}}return o==="error"?Rp(a)?a.data instanceof Error?{type:"error",error:a.data,statusCode:(r=a.init)==null?void 0:r.status,headers:(c=a.init)!=null&&c.headers?new Headers(a.init.headers):void 0}:{type:"error",error:Jm(a),statusCode:gn(a)?a.status:void 0,headers:(p=a.init)!=null&&p.headers?new Headers(a.init.headers):void 0}:{type:"error",error:a,statusCode:gn(a)?a.status:void 0}:Rp(a)?{type:"data",data:a.data,statusCode:(g=a.init)==null?void 0:g.status,headers:(f=a.init)!=null&&f.headers?new Headers(a.init.headers):void 0}:{type:"data",data:a}}function Im(t,a,o,r,c){let p=t.headers.get("Location");if(Ge(p,"Redirects returned/thrown from loaders/actions must have a Location header"),!Uu(p)){let g=r.slice(0,r.findIndex(f=>f.route.id===o)+1);p=Gu(new URL(a.url),g,c,p),t.headers.set("Location",p)}return t}var qp=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Bp(t,a,o,r){if(Uu(t)){let c=t,p=c.startsWith("//")?new URL(a.protocol+c):new URL(c);if(qp.includes(p.protocol))throw new Error("Invalid redirect location");let g=Ql(p.pathname,o)!=null;if(p.origin===a.origin&&g)return Bu(p.pathname)+p.search+p.hash}try{let c=r.createURL(t);if(qp.includes(c.protocol))throw new Error("Invalid redirect location")}catch{}return t}function gt(t,a,o,r){let c=t.createURL(Gd(a)).toString(),p={signal:o};if(r&&vl(r.formMethod)){let{formMethod:g,formEncType:f}=r;p.method=g.toUpperCase(),f==="application/json"?(p.headers=new Headers({"Content-Type":f}),p.body=JSON.stringify(r.json)):f==="text/plain"?p.body=r.text:f==="application/x-www-form-urlencoded"&&r.formData?p.body=Ju(r.formData):p.body=r.formData}return new Request(c,p)}function Id(t,a){let o=new URL(t.url),r=typeof a=="string"?ws(a):a;if(o.pathname=r.pathname||"/",r.search){let c=new URLSearchParams(r.search),p=c.getAll("index");c.delete("index");for(let g of p.filter(Boolean))c.append("index",g);o.search=c.size?`?${c.toString()}`:""}else o.search="";return o.hash=r.hash||"",o}function Ju(t){let a=new URLSearchParams;for(let[o,r]of t.entries())a.append(o,typeof r=="string"?r:r.name);return a}function Ap(t){let a=new FormData;for(let[o,r]of t.entries())a.append(o,r);return a}function Gm(t,a,o,r=!1,c=!1){let p={},g=null,f,m=!1,_={},E=o&&Hl(o[1])?o[1].error:void 0;return t.forEach(S=>{if(!(S.route.id in a))return;let J=S.route.id,U=a[J];if(Ge(!Ii(U),"Cannot handle redirect results in processLoaderData"),Hl(U)){let H=U.error;if(E!==void 0&&(H=E,E=void 0),g=g||{},c)g[J]=H;else{let A=ci(t,J);g[A.route.id]==null&&(g[A.route.id]=H)}r||(p[J]=xd),m||(m=!0,f=gn(U.error)?U.error.status:500),U.headers&&(_[J]=U.headers)}else p[J]=U.data,U.statusCode&&U.statusCode!==200&&!m&&(f=U.statusCode),U.headers&&(_[J]=U.headers)}),E!==void 0&&o&&(g={[o[0]]:E},o[2]&&(p[o[2]]=void 0)),{loaderData:p,errors:g,statusCode:f||200,loaderHeaders:_}}function Mp(t,a,o,r,c,p,g){let{loaderData:f,errors:m}=Gm(a,o,r);return c.filter(_=>!_.matches||_.matches.some(E=>E.shouldLoad)).forEach(_=>{let{key:E,match:S,controller:J}=_;if(J&&J.signal.aborted)return;let U=p[E];if(Ge(U,"Did not find corresponding fetcher result"),Hl(U)){let H=ci(t.matches,S==null?void 0:S.route.id);m&&m[H.route.id]||(m={...m,[H.route.id]:U.error}),g.delete(E)}else if(Ii(U))Ge(!1,"Unhandled fetcher revalidation redirect");else{let H=Ss(U.data);g.set(E,H)}}),{loaderData:f,errors:m}}function Hp(t,a,o,r){let c=Object.entries(a).filter(([,p])=>p!==xd).reduce((p,[g,f])=>(p[g]=f,p),{});for(let p of o){let g=p.route.id;if(!a.hasOwnProperty(g)&&t.hasOwnProperty(g)&&p.route.loader&&(c[g]=t[g]),r&&r.hasOwnProperty(g))break}return c}function Tp(t){return t?Hl(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function ci(t,a){return(a?t.slice(0,t.findIndex(r=>r.route.id===a)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function ba(t){let a=t.length===1?t[0]:t.find(o=>o.index||!o.path||o.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:a}],route:a}}function Vl(t,{pathname:a,routeId:o,method:r,type:c,message:p}={}){let g="Unknown Server Error",f="Unknown @remix-run/router error";return t===400?(g="Bad Request",r&&a&&o?f=`You made a ${r} request to "${a}" but did not provide a \`loader\` for route "${o}", so there is no way to handle the request.`:c==="invalid-body"&&(f="Unable to encode submission body")):t===403?(g="Forbidden",f=`Route "${o}" does not match URL "${a}"`):t===404?(g="Not Found",f=`No route matches URL "${a}"`):t===405&&(g="Method Not Allowed",r&&a&&o?f=`You made a ${r.toUpperCase()} request to "${a}" but did not provide an \`action\` for route "${o}", so there is no way to handle the request.`:r&&(f=`Invalid request method "${r.toUpperCase()}"`)),new fn(t||500,g,new Error(f),!0)}function Ca(t){let a=Object.entries(t);for(let o=a.length-1;o>=0;o--){let[r,c]=a[o];if(Ii(c))return{key:r,result:c}}}function Gd(t){let a=typeof t=="string"?ws(t):t;return vs({...a,hash:""})}function Pm(t,a){return t.pathname!==a.pathname||t.search!==a.search?!1:t.hash===""?a.hash!=="":t.hash===a.hash?!0:a.hash!==""}function Jm(t){var a,o;return new fn(((a=t.init)==null?void 0:a.status)??500,((o=t.init)==null?void 0:o.statusText)??"Internal Server Error",t.data)}function zm(t){return t!=null&&typeof t=="object"&&Object.entries(t).every(([a,o])=>typeof a=="string"&&Um(o))}function Um(t){return t!=null&&typeof t=="object"&&"type"in t&&"result"in t&&(t.type==="data"||t.type==="error")}function qm(t){return Mu(t.result)&&vd.has(t.result.status)}function Hl(t){return t.type==="error"}function Ii(t){return(t&&t.type)==="redirect"}function Rp(t){return typeof t=="object"&&t!=null&&"type"in t&&"data"in t&&"init"in t&&t.type==="DataWithResponseInit"}function Mu(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function Bm(t){return vd.has(t)}function Am(t){return Mu(t)&&Bm(t.status)&&t.headers.has("Location")}function Mm(t){return gm.has(t.toUpperCase())}function vl(t){return pm.has(t.toUpperCase())}function Hu(t){return new URLSearchParams(t).getAll("index").some(a=>a==="")}function Pa(t,a){let o=typeof a=="string"?ws(a).search:a.search;if(t[t.length-1].route.index&&Hu(o||""))return t[t.length-1];let r=md(t);return r[r.length-1]}function Op(t){let{formMethod:a,formAction:o,formEncType:r,text:c,formData:p,json:g}=t;if(!(!a||!o||!r)){if(c!=null)return{formMethod:a,formAction:o,formEncType:r,formData:void 0,json:void 0,text:c};if(p!=null)return{formMethod:a,formAction:o,formEncType:r,formData:p,json:void 0,text:void 0};if(g!==void 0)return{formMethod:a,formAction:o,formEncType:r,formData:void 0,json:g,text:void 0}}}function yu(t,a,o,r){return r?{state:"loading",location:t,matches:a,historyAction:o,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}:{state:"loading",location:t,matches:a,historyAction:o,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Hm(t,a,o,r){return{state:"submitting",location:t,matches:a,historyAction:o,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}}function sn(t,a){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:a}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:a}}function Tm(t,a){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:a?a.data:void 0}}function Ss(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Rm(t,a){try{let o=t.sessionStorage.getItem(wd);if(o){let r=JSON.parse(o);for(let[c,p]of Object.entries(r||{}))p&&Array.isArray(p)&&a.set(c,new Set(p||[]))}}catch{}}function Om(t,a){if(a.size>0){let o={};for(let[r,c]of a)o[r]=[...c];try{t.sessionStorage.setItem(wd,JSON.stringify(o))}catch(r){tl(!1,`Failed to save applied view transitions in sessionStorage (${r}).`)}}}function Np(){let t,a,o=new Promise((r,c)=>{t=async p=>{r(p);try{await o}catch{}},a=async p=>{c(p);try{await o}catch{}}});return{promise:o,resolve:t,reject:a}}var Gi=C.createContext(null);Gi.displayName="DataRouter";var hn=C.createContext(null);hn.displayName="DataRouterState";var Pd=C.createContext(!1);function Jd(){return C.useContext(Pd)}var Tu=C.createContext({isTransitioning:!1});Tu.displayName="ViewTransition";var zd=C.createContext(new Map);zd.displayName="Fetchers";var Nm=C.createContext(null);Nm.displayName="Await";var Yl=C.createContext(null);Yl.displayName="Navigation";var Aa=C.createContext(null);Aa.displayName="Location";var xs=C.createContext({outlet:null,matches:[],isDataRoute:!1});xs.displayName="Route";var Ru=C.createContext(null);Ru.displayName="RouteError";var Ud="REACT_ROUTER_ERROR",Fm="REDIRECT",Dm="ROUTE_ERROR_RESPONSE";function Wm(t){if(t.startsWith(`${Ud}:${Fm}:{`))try{let a=JSON.parse(t.slice(28));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.location=="string"&&typeof a.reloadDocument=="boolean"&&typeof a.replace=="boolean")return a}catch{}}function $m(t){if(t.startsWith(`${Ud}:${Dm}:{`))try{let a=JSON.parse(t.slice(40));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string")return new fn(a.status,a.statusText,a.data)}catch{}}function Vm(t,{relative:a}={}){Ge(_n(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:r}=C.useContext(Yl),{hash:c,pathname:p,search:g}=jn(t,{relative:a}),f=p;return o!=="/"&&(f=p==="/"?o:Kl([o,p])),r.createHref({pathname:f,search:g,hash:c})}function _n(){return C.useContext(Aa)!=null}function ys(){return Ge(_n(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(Aa).location}var qd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Bd(t){C.useContext(Yl).static||C.useLayoutEffect(t)}function Ad(){let{isDataRoute:t}=C.useContext(xs);return t?uh():Km()}function Km(){Ge(_n(),"useNavigate() may be used only in the context of a <Router> component.");let t=C.useContext(Gi),{basename:a,navigator:o}=C.useContext(Yl),{matches:r}=C.useContext(xs),{pathname:c}=ys(),p=JSON.stringify(qu(r)),g=C.useRef(!1);return Bd(()=>{g.current=!0}),C.useCallback((m,_={})=>{if(tl(g.current,qd),!g.current)return;if(typeof m=="number"){o.go(m);return}let E=Ba(m,JSON.parse(p),c,_.relative==="path");t==null&&a!=="/"&&(E.pathname=E.pathname==="/"?a:Kl([a,E.pathname])),(_.replace?o.replace:o.push)(E,_.state,_)},[a,o,p,c,t])}C.createContext(null);function Qm(){let{matches:t}=C.useContext(xs),a=t[t.length-1];return(a==null?void 0:a.params)??{}}function jn(t,{relative:a}={}){let{matches:o}=C.useContext(xs),{pathname:r}=ys(),c=JSON.stringify(qu(o));return C.useMemo(()=>Ba(t,JSON.parse(c),r,a==="path"),[t,c,r,a])}function Ym(t,a,o){Ge(_n(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=C.useContext(Yl),{matches:c}=C.useContext(xs),p=c[c.length-1],g=p?p.params:{},f=p?p.pathname:"/",m=p?p.pathnameBase:"/",_=p&&p.route;{let q=_&&_.path||"";Hd(f,!_||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let E=ys(),S;S=E;let J=S.pathname||"/",U=J;if(m!=="/"){let q=m.replace(/^\//,"").split("/");U="/"+J.replace(/^\//,"").split("/").slice(q.length).join("/")}let H=o&&o.state.matches.length?o.state.matches.map(q=>Object.assign(q,{route:o.manifest[q.route.id]||q.route})):pd(t,{pathname:U});return tl(_||H!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),tl(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),sh(H&&H.map(q=>Object.assign({},q,{params:Object.assign({},g,q.params),pathname:Kl([m,r.encodeLocation?r.encodeLocation(q.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?m:Kl([m,r.encodeLocation?r.encodeLocation(q.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathnameBase])})),c,o)}function Xm(){let t=oh(),a=gn(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),o=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:r},p={padding:"2px 4px",backgroundColor:r},g=null;return console.error("Error handled by React Router default ErrorBoundary:",t),g=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:p},"ErrorBoundary")," or"," ",C.createElement("code",{style:p},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},a),o?C.createElement("pre",{style:c},o):null,g)}var Zm=C.createElement(Xm,null),Md=class extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,a){return a.location!==t.location||a.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:a.error,location:a.location,revalidation:t.revalidation||a.revalidation}}componentDidCatch(t,a){this.props.onError?this.props.onError(t,a):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const o=$m(t.digest);o&&(t=o)}let a=t!==void 0?C.createElement(xs.Provider,{value:this.props.routeContext},C.createElement(Ru.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?C.createElement(eh,{error:t},a):a}};Md.contextType=Pd;var Eu=new WeakMap;function eh({children:t,error:a}){let{basename:o}=C.useContext(Yl);if(typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){let r=Wm(a.digest);if(r){let c=Eu.get(a);if(c)throw c;let p=_d(r.location,o);if(hd&&!Eu.get(a))if(p.isExternal||r.reloadDocument)window.location.href=p.absoluteURL||p.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:r.replace}));throw Eu.set(a,g),g}return C.createElement("meta",{httpEquiv:"refresh",content:`0;url=${p.absoluteURL||p.to}`})}}return t}function lh({routeContext:t,match:a,children:o}){let r=C.useContext(Gi);return r&&r.static&&r.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=a.route.id),C.createElement(xs.Provider,{value:t},o)}function sh(t,a=[],o){let r=o==null?void 0:o.state;if(t==null){if(!r)return null;if(r.errors)t=r.matches;else if(a.length===0&&!r.initialized&&r.matches.length>0)t=r.matches;else return null}let c=t,p=r==null?void 0:r.errors;if(p!=null){let E=c.findIndex(S=>S.route.id&&(p==null?void 0:p[S.route.id])!==void 0);Ge(E>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),c=c.slice(0,Math.min(c.length,E+1))}let g=!1,f=-1;if(o&&r){g=r.renderFallback;for(let E=0;E<c.length;E++){let S=c[E];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(f=E),S.route.id){let{loaderData:J,errors:U}=r,H=S.route.loader&&!J.hasOwnProperty(S.route.id)&&(!U||U[S.route.id]===void 0);if(S.route.lazy||H){o.isStatic&&(g=!0),f>=0?c=c.slice(0,f+1):c=[c[0]];break}}}}let m=o==null?void 0:o.onError,_=r&&m?(E,S)=>{var J,U;m(E,{location:r.location,params:((U=(J=r.matches)==null?void 0:J[0])==null?void 0:U.params)??{},pattern:mn(r.matches),errorInfo:S})}:void 0;return c.reduceRight((E,S,J)=>{let U,H=!1,A=null,q=null;r&&(U=p&&S.route.id?p[S.route.id]:void 0,A=S.route.errorElement||Zm,g&&(f<0&&J===0?(Hd("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),H=!0,q=null):f===J&&(H=!0,q=S.route.hydrateFallbackElement||null)));let W=a.concat(c.slice(0,J+1)),K=()=>{let X;return U?X=A:H?X=q:S.route.Component?X=C.createElement(S.route.Component,null):S.route.element?X=S.route.element:X=E,C.createElement(lh,{match:S,routeContext:{outlet:E,matches:W,isDataRoute:r!=null},children:X})};return r&&(S.route.ErrorBoundary||S.route.errorElement||J===0)?C.createElement(Md,{location:r.location,revalidation:r.revalidation,component:A,error:U,children:K(),routeContext:{outlet:null,matches:W,isDataRoute:!0},onError:_}):K()},null)}function Ou(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ih(t){let a=C.useContext(Gi);return Ge(a,Ou(t)),a}function th(t){let a=C.useContext(hn);return Ge(a,Ou(t)),a}function nh(t){let a=C.useContext(xs);return Ge(a,Ou(t)),a}function Nu(t){let a=nh(t),o=a.matches[a.matches.length-1];return Ge(o.route.id,`${t} can only be used on routes that contain a unique "id"`),o.route.id}function ah(){return Nu("useRouteId")}function oh(){var r;let t=C.useContext(Ru),a=th("useRouteError"),o=Nu("useRouteError");return t!==void 0?t:(r=a.errors)==null?void 0:r[o]}function uh(){let{router:t}=ih("useNavigate"),a=Nu("useNavigate"),o=C.useRef(!1);return Bd(()=>{o.current=!0}),C.useCallback(async(c,p={})=>{tl(o.current,qd),o.current&&(typeof c=="number"?await t.navigate(c):await t.navigate(c,{fromRouteId:a,...p}))},[t,a])}var Fp={};function Hd(t,a,o){!a&&!Fp[t]&&(Fp[t]=!0,tl(!1,o))}var Dp={};function Wp(t,a){!t&&!Dp[a]&&(Dp[a]=!0,console.warn(a))}var rh="useOptimistic",$p=Jf[rh],ch=()=>{};function ph(t){return $p?$p(t):[t,ch]}function dh(t){let a={hasErrorBoundary:t.hasErrorBoundary||t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&(t.element&&tl(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(a,{element:C.createElement(t.Component),Component:void 0})),t.HydrateFallback&&(t.hydrateFallbackElement&&tl(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(a,{hydrateFallbackElement:C.createElement(t.HydrateFallback),HydrateFallback:void 0})),t.ErrorBoundary&&(t.errorElement&&tl(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(a,{errorElement:C.createElement(t.ErrorBoundary),ErrorBoundary:void 0})),a}var gh=["HydrateFallback","hydrateFallbackElement"],fh=class{constructor(){this.status="pending",this.promise=new Promise((t,a)=>{this.resolve=o=>{this.status==="pending"&&(this.status="resolved",t(o))},this.reject=o=>{this.status==="pending"&&(this.status="rejected",a(o))}})}};function mh({router:t,flushSync:a,onError:o,useTransitions:r}){r=Jd()||r;let[p,g]=C.useState(t.state),[f,m]=ph(p),[_,E]=C.useState(),[S,J]=C.useState({isTransitioning:!1}),[U,H]=C.useState(),[A,q]=C.useState(),[W,K]=C.useState(),X=C.useRef(new Map),pe=C.useCallback((L,{deletedFetchers:Ee,newErrors:fe,flushSync:Re,viewTransitionOpts:Se})=>{fe&&o&&Object.values(fe).forEach(Je=>{var Le;return o(Je,{location:L.location,params:((Le=L.matches[0])==null?void 0:Le.params)??{},pattern:mn(L.matches)})}),L.fetchers.forEach((Je,Le)=>{Je.data!==void 0&&X.current.set(Le,Je.data)}),Ee.forEach(Je=>X.current.delete(Je)),Wp(Re===!1||a!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let Ae=t.window!=null&&t.window.document!=null&&typeof t.window.document.startViewTransition=="function";if(Wp(Se==null||Ae,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!Se||!Ae){a&&Re?a(()=>g(L)):r===!1?g(L):C.startTransition(()=>{r===!0&&m(Je=>Vp(Je,L)),g(L)});return}if(a&&Re){a(()=>{A&&(U==null||U.resolve(),A.skipTransition()),J({isTransitioning:!0,flushSync:!0,currentLocation:Se.currentLocation,nextLocation:Se.nextLocation})});let Je=t.window.document.startViewTransition(()=>{a(()=>g(L))});Je.finished.finally(()=>{a(()=>{H(void 0),q(void 0),E(void 0),J({isTransitioning:!1})})}),a(()=>q(Je));return}A?(U==null||U.resolve(),A.skipTransition(),K({state:L,currentLocation:Se.currentLocation,nextLocation:Se.nextLocation})):(E(L),J({isTransitioning:!0,flushSync:!1,currentLocation:Se.currentLocation,nextLocation:Se.nextLocation}))},[t.window,a,A,U,r,m,o]);C.useLayoutEffect(()=>t.subscribe(pe),[t,pe]),C.useEffect(()=>{S.isTransitioning&&!S.flushSync&&H(new fh)},[S]),C.useEffect(()=>{if(U&&_&&t.window){let L=_,Ee=U.promise,fe=t.window.document.startViewTransition(async()=>{r===!1?g(L):C.startTransition(()=>{r===!0&&m(Re=>Vp(Re,L)),g(L)}),await Ee});fe.finished.finally(()=>{H(void 0),q(void 0),E(void 0),J({isTransitioning:!1})}),q(fe)}},[_,U,t.window,r,m]),C.useEffect(()=>{U&&_&&f.location.key===_.location.key&&U.resolve()},[U,A,f.location,_]),C.useEffect(()=>{!S.isTransitioning&&W&&(E(W.state),J({isTransitioning:!0,flushSync:!1,currentLocation:W.currentLocation,nextLocation:W.nextLocation}),K(void 0))},[S.isTransitioning,W]);let re=C.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:L=>t.navigate(L),push:(L,Ee,fe)=>t.navigate(L,{state:Ee,preventScrollReset:fe==null?void 0:fe.preventScrollReset}),replace:(L,Ee,fe)=>t.navigate(L,{replace:!0,state:Ee,preventScrollReset:fe==null?void 0:fe.preventScrollReset})}),[t]),ve=t.basename||"/",Ce=C.useMemo(()=>({router:t,navigator:re,static:!1,basename:ve,onError:o}),[t,re,ve,o]);return C.createElement(C.Fragment,null,C.createElement(Gi.Provider,{value:Ce},C.createElement(hn.Provider,{value:f},C.createElement(zd.Provider,{value:X.current},C.createElement(Tu.Provider,{value:S},C.createElement(jh,{basename:ve,location:f.location,navigationType:f.historyAction,navigator:re,useTransitions:r},C.createElement(hh,{routes:t.routes,manifest:t.manifest,future:t.future,state:f,isStatic:!1,onError:o})))))),null)}function Vp(t,a){return{...t,navigation:a.navigation.state!=="idle"?a.navigation:t.navigation,revalidation:a.revalidation!=="idle"?a.revalidation:t.revalidation,actionData:a.navigation.state!=="submitting"?a.actionData:t.actionData,fetchers:a.fetchers}}var hh=C.memo(_h);function _h({routes:t,manifest:a,future:o,state:r,isStatic:c,onError:p}){return Ym(t,void 0,{manifest:a,state:r,isStatic:c,onError:p})}function jh({basename:t="/",children:a=null,location:o,navigationType:r="POP",navigator:c,static:p=!1,useTransitions:g}){Ge(!_n(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=t.replace(/^\/*/,"/"),m=C.useMemo(()=>({basename:f,navigator:c,static:p,useTransitions:g,future:{}}),[f,c,p,g]);typeof o=="string"&&(o=ws(o));let{pathname:_="/",search:E="",hash:S="",state:J=null,key:U="default",mask:H}=o,A=C.useMemo(()=>{let q=Ql(_,f);return q==null?null:{location:{pathname:q,search:E,hash:S,state:J,key:U,mask:H},navigationType:r}},[f,_,E,S,J,U,r,H]);return tl(A!=null,`<Router basename="${f}"> is not able to match the URL "${_}${E}${S}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:C.createElement(Yl.Provider,{value:m},C.createElement(Aa.Provider,{children:a,value:A}))}var Ja="get",za="application/x-www-form-urlencoded";function Ma(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function Sh(t){return Ma(t)&&t.tagName.toLowerCase()==="button"}function vh(t){return Ma(t)&&t.tagName.toLowerCase()==="form"}function wh(t){return Ma(t)&&t.tagName.toLowerCase()==="input"}function xh(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function yh(t,a){return t.button===0&&(!a||a==="_self")&&!xh(t)}var La=null;function Eh(){if(La===null)try{new FormData(document.createElement("form"),0),La=!1}catch{La=!0}return La}var kh=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ku(t){return t!=null&&!kh.has(t)?(tl(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${za}"`),null):t}function bh(t,a){let o,r,c,p,g;if(vh(t)){let f=t.getAttribute("action");r=f?Ql(f,a):null,o=t.getAttribute("method")||Ja,c=ku(t.getAttribute("enctype"))||za,p=new FormData(t)}else if(Sh(t)||wh(t)&&(t.type==="submit"||t.type==="image")){let f=t.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=t.getAttribute("formaction")||f.getAttribute("action");if(r=m?Ql(m,a):null,o=t.getAttribute("formmethod")||f.getAttribute("method")||Ja,c=ku(t.getAttribute("formenctype"))||ku(f.getAttribute("enctype"))||za,p=new FormData(f,t),!Eh()){let{name:_,type:E,value:S}=t;if(E==="image"){let J=_?`${_}.`:"";p.append(`${J}x`,"0"),p.append(`${J}y`,"0")}else _&&p.append(_,S)}}else{if(Ma(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Ja,r=null,c=za,g=t}return p&&c==="text/plain"&&(g=p,p=void 0),{action:r,method:o.toLowerCase(),encType:c,formData:p,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Fu(t,a){if(t===!1||t===null||typeof t>"u")throw new Error(a)}function Td(t,a,o,r){let c=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return o?c.pathname.endsWith("/")?c.pathname=`${c.pathname}_.${r}`:c.pathname=`${c.pathname}.${r}`:c.pathname==="/"?c.pathname=`_root.${r}`:a&&Ql(c.pathname,a)==="/"?c.pathname=`${qa(a)}/_root.${r}`:c.pathname=`${qa(c.pathname)}.${r}`,c}async function Ch(t,a){if(t.id in a)return a[t.id];try{let o=await import(t.module);return a[t.id]=o,o}catch(o){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Lh(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function Ih(t,a,o){let r=await Promise.all(t.map(async c=>{let p=a.routes[c.route.id];if(p){let g=await Ch(p,o);return g.links?g.links():[]}return[]}));return zh(r.flat(1).filter(Lh).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function Kp(t,a,o,r,c,p){let g=(m,_)=>o[_]?m.route.id!==o[_].route.id:!0,f=(m,_)=>{var E;return o[_].pathname!==m.pathname||((E=o[_].route.path)==null?void 0:E.endsWith("*"))&&o[_].params["*"]!==m.params["*"]};return p==="assets"?a.filter((m,_)=>g(m,_)||f(m,_)):p==="data"?a.filter((m,_)=>{var S;let E=r.routes[m.route.id];if(!E||!E.hasLoader)return!1;if(g(m,_)||f(m,_))return!0;if(m.route.shouldRevalidate){let J=m.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((S=o[0])==null?void 0:S.params)||{},nextUrl:new URL(t,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof J=="boolean")return J}return!0}):[]}function Gh(t,a,{includeHydrateFallback:o}={}){return Ph(t.map(r=>{let c=a.routes[r.route.id];if(!c)return[];let p=[c.module];return c.clientActionModule&&(p=p.concat(c.clientActionModule)),c.clientLoaderModule&&(p=p.concat(c.clientLoaderModule)),o&&c.hydrateFallbackModule&&(p=p.concat(c.hydrateFallbackModule)),c.imports&&(p=p.concat(c.imports)),p}).flat(1))}function Ph(t){return[...new Set(t)]}function Jh(t){let a={},o=Object.keys(t).sort();for(let r of o)a[r]=t[r];return a}function zh(t,a){let o=new Set;return new Set(a),t.reduce((r,c)=>{let p=JSON.stringify(Jh(c));return o.has(p)||(o.add(p),r.push({key:p,link:c})),r},[])}function Du(){let t=C.useContext(Gi);return Fu(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Uh(){let t=C.useContext(hn);return Fu(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Wu=C.createContext(void 0);Wu.displayName="FrameworkContext";function $u(){let t=C.useContext(Wu);return Fu(t,"You must render this element inside a <HydratedRouter> element"),t}function qh(t,a){let o=C.useContext(Wu),[r,c]=C.useState(!1),[p,g]=C.useState(!1),{onFocus:f,onBlur:m,onMouseEnter:_,onMouseLeave:E,onTouchStart:S}=a,J=C.useRef(null);C.useEffect(()=>{if(t==="render"&&g(!0),t==="viewport"){let A=W=>{W.forEach(K=>{g(K.isIntersecting)})},q=new IntersectionObserver(A,{threshold:.5});return J.current&&q.observe(J.current),()=>{q.disconnect()}}},[t]),C.useEffect(()=>{if(r){let A=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(A)}}},[r]);let U=()=>{c(!0)},H=()=>{c(!1),g(!1)};return o?t!=="intent"?[p,J,{}]:[p,J,{onFocus:tn(f,U),onBlur:tn(m,H),onMouseEnter:tn(_,U),onMouseLeave:tn(E,H),onTouchStart:tn(S,U)}]:[!1,J,{}]}function tn(t,a){return o=>{t&&t(o),o.defaultPrevented||a(o)}}function Bh({page:t,...a}){let o=Jd(),{router:r}=Du(),c=C.useMemo(()=>pd(r.routes,t,r.basename),[r.routes,t,r.basename]);return c?o?C.createElement(Mh,{page:t,matches:c,...a}):C.createElement(Hh,{page:t,matches:c,...a}):null}function Ah(t){let{manifest:a,routeModules:o}=$u(),[r,c]=C.useState([]);return C.useEffect(()=>{let p=!1;return Ih(t,a,o).then(g=>{p||c(g)}),()=>{p=!0}},[t,a,o]),r}function Mh({page:t,matches:a,...o}){let r=ys(),{future:c}=$u(),{basename:p}=Du(),g=C.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let f=Td(t,p,c.v8_trailingSlashAwareDataRequests,"rsc"),m=!1,_=[];for(let E of a)typeof E.route.shouldRevalidate=="function"?m=!0:_.push(E.route.id);return m&&_.length>0&&f.searchParams.set("_routes",_.join(",")),[f.pathname+f.search]},[p,c.v8_trailingSlashAwareDataRequests,t,r,a]);return C.createElement(C.Fragment,null,g.map(f=>C.createElement("link",{key:f,rel:"prefetch",as:"fetch",href:f,...o})))}function Hh({page:t,matches:a,...o}){let r=ys(),{future:c,manifest:p,routeModules:g}=$u(),{basename:f}=Du(),{loaderData:m,matches:_}=Uh(),E=C.useMemo(()=>Kp(t,a,_,p,r,"data"),[t,a,_,p,r]),S=C.useMemo(()=>Kp(t,a,_,p,r,"assets"),[t,a,_,p,r]),J=C.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let A=new Set,q=!1;if(a.forEach(K=>{var pe;let X=p.routes[K.route.id];!X||!X.hasLoader||(!E.some(re=>re.route.id===K.route.id)&&K.route.id in m&&((pe=g[K.route.id])!=null&&pe.shouldRevalidate)||X.hasClientLoader?q=!0:A.add(K.route.id))}),A.size===0)return[];let W=Td(t,f,c.v8_trailingSlashAwareDataRequests,"data");return q&&A.size>0&&W.searchParams.set("_routes",a.filter(K=>A.has(K.route.id)).map(K=>K.route.id).join(",")),[W.pathname+W.search]},[f,c.v8_trailingSlashAwareDataRequests,m,r,p,E,a,t,g]),U=C.useMemo(()=>Gh(S,p),[S,p]),H=Ah(S);return C.createElement(C.Fragment,null,J.map(A=>C.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...o})),U.map(A=>C.createElement("link",{key:A,rel:"modulepreload",href:A,...o})),H.map(({key:A,link:q})=>C.createElement("link",{key:A,nonce:o.nonce,...q,crossOrigin:q.crossOrigin??o.crossOrigin})))}function Th(...t){return a=>{t.forEach(o=>{typeof o=="function"?o(a):o!=null&&(o.current=a)})}}var Rh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Rh&&(window.__reactRouterVersion="7.17.0")}catch{}function Oh(t,a){return jm({basename:a==null?void 0:a.basename,getContext:a==null?void 0:a.getContext,future:a==null?void 0:a.future,history:zf({window:a==null?void 0:a.window}),hydrationData:Nh(),routes:t,mapRouteProperties:dh,hydrationRouteProperties:gh,dataStrategy:a==null?void 0:a.dataStrategy,patchRoutesOnNavigation:a==null?void 0:a.patchRoutesOnNavigation,window:a==null?void 0:a.window,instrumentations:a==null?void 0:a.instrumentations}).initialize()}function Nh(){let t=window==null?void 0:window.__staticRouterHydrationData;return t&&t.errors&&(t={...t,errors:Fh(t.errors)}),t}function Fh(t){if(!t)return null;let a=Object.entries(t),o={};for(let[r,c]of a)if(c&&c.__type==="RouteErrorResponse")o[r]=new fn(c.status,c.statusText,c.data,c.internal===!0);else if(c&&c.__type==="Error"){if(c.__subType){let p=window[c.__subType];if(typeof p=="function")try{let g=new p(c.message);g.stack="",o[r]=g}catch{}}if(o[r]==null){let p=new Error(c.message);p.stack="",o[r]=p}}else o[r]=c;return o}var Rd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Od=C.forwardRef(function({onClick:a,discover:o="render",prefetch:r="none",relative:c,reloadDocument:p,replace:g,mask:f,state:m,target:_,to:E,preventScrollReset:S,viewTransition:J,defaultShouldRevalidate:U,...H},A){let{basename:q,navigator:W,useTransitions:K}=C.useContext(Yl),X=typeof E=="string"&&Rd.test(E),pe=_d(E,q);E=pe.to;let re=Vm(E,{relative:c}),ve=ys(),Ce=null;if(f){let Le=Ba(f,[],ve.mask?ve.mask.pathname:"/",!0);q!=="/"&&(Le.pathname=Le.pathname==="/"?q:Kl([q,Le.pathname])),Ce=W.createHref(Le)}let[L,Ee,fe]=qh(r,H),Re=Vh(E,{replace:g,mask:f,state:m,target:_,preventScrollReset:S,relative:c,viewTransition:J,defaultShouldRevalidate:U,useTransitions:K});function Se(Le){a&&a(Le),Le.defaultPrevented||Re(Le)}let Ae=!(pe.isExternal||p),Je=C.createElement("a",{...H,...fe,href:(Ae?Ce:void 0)||pe.absoluteURL||re,onClick:Ae?Se:a,ref:Th(A,Ee),target:_,"data-discover":!X&&o==="render"?"true":void 0});return L&&!X?C.createElement(C.Fragment,null,Je,C.createElement(Bh,{page:re})):Je});Od.displayName="Link";var Dh=C.forwardRef(function({"aria-current":a="page",caseSensitive:o=!1,className:r="",end:c=!1,style:p,to:g,viewTransition:f,children:m,..._},E){let S=jn(g,{relative:_.relative}),J=ys(),U=C.useContext(hn),{navigator:H,basename:A}=C.useContext(Yl),q=U!=null&&Zh(S)&&f===!0,W=H.encodeLocation?H.encodeLocation(S).pathname:S.pathname,K=J.pathname,X=U&&U.navigation&&U.navigation.location?U.navigation.location.pathname:null;o||(K=K.toLowerCase(),X=X?X.toLowerCase():null,W=W.toLowerCase()),X&&A&&(X=Ql(X,A)||X);const pe=W!=="/"&&W.endsWith("/")?W.length-1:W.length;let re=K===W||!c&&K.startsWith(W)&&K.charAt(pe)==="/",ve=X!=null&&(X===W||!c&&X.startsWith(W)&&X.charAt(W.length)==="/"),Ce={isActive:re,isPending:ve,isTransitioning:q},L=re?a:void 0,Ee;typeof r=="function"?Ee=r(Ce):Ee=[r,re?"active":null,ve?"pending":null,q?"transitioning":null].filter(Boolean).join(" ");let fe=typeof p=="function"?p(Ce):p;return C.createElement(Od,{..._,"aria-current":L,className:Ee,ref:E,style:fe,to:g,viewTransition:f},typeof m=="function"?m(Ce):m)});Dh.displayName="NavLink";var Wh=C.forwardRef(({discover:t="render",fetcherKey:a,navigate:o,reloadDocument:r,replace:c,state:p,method:g=Ja,action:f,onSubmit:m,relative:_,preventScrollReset:E,viewTransition:S,defaultShouldRevalidate:J,...U},H)=>{let{useTransitions:A}=C.useContext(Yl),q=Yh(),W=Xh(f,{relative:_}),K=g.toLowerCase()==="get"?"get":"post",X=typeof f=="string"&&Rd.test(f),pe=re=>{if(m&&m(re),re.defaultPrevented)return;re.preventDefault();let ve=re.nativeEvent.submitter,Ce=(ve==null?void 0:ve.getAttribute("formmethod"))||g,L=()=>q(ve||re.currentTarget,{fetcherKey:a,method:Ce,navigate:o,replace:c,state:p,relative:_,preventScrollReset:E,viewTransition:S,defaultShouldRevalidate:J});A&&o!==!1?C.startTransition(()=>L()):L()};return C.createElement("form",{ref:H,method:K,action:W,onSubmit:r?m:pe,...U,"data-discover":!X&&t==="render"?"true":void 0})});Wh.displayName="Form";function $h(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Nd(t){let a=C.useContext(Gi);return Ge(a,$h(t)),a}function Vh(t,{target:a,replace:o,mask:r,state:c,preventScrollReset:p,relative:g,viewTransition:f,defaultShouldRevalidate:m,useTransitions:_}={}){let E=Ad(),S=ys(),J=jn(t,{relative:g});return C.useCallback(U=>{if(yh(U,a)){U.preventDefault();let H=o!==void 0?o:vs(S)===vs(J),A=()=>E(t,{replace:H,mask:r,state:c,preventScrollReset:p,relative:g,viewTransition:f,defaultShouldRevalidate:m});_?C.startTransition(()=>A()):A()}},[S,E,J,o,r,c,a,t,p,g,f,m,_])}var Kh=0,Qh=()=>`__${String(++Kh)}__`;function Yh(){let{router:t}=Nd("useSubmit"),{basename:a}=C.useContext(Yl),o=ah(),r=t.fetch,c=t.navigate;return C.useCallback(async(p,g={})=>{let{action:f,method:m,encType:_,formData:E,body:S}=bh(p,a);if(g.navigate===!1){let J=g.fetcherKey||Qh();await r(J,o,g.action||f,{defaultShouldRevalidate:g.defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:E,body:S,formMethod:g.method||m,formEncType:g.encType||_,flushSync:g.flushSync})}else await c(g.action||f,{defaultShouldRevalidate:g.defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:E,body:S,formMethod:g.method||m,formEncType:g.encType||_,replace:g.replace,state:g.state,fromRouteId:o,flushSync:g.flushSync,viewTransition:g.viewTransition})},[r,c,a,o])}function Xh(t,{relative:a}={}){let{basename:o}=C.useContext(Yl),r=C.useContext(xs);Ge(r,"useFormAction must be used inside a RouteContext");let[c]=r.matches.slice(-1),p={...jn(t||".",{relative:a})},g=ys();if(t==null){p.search=g.search;let f=new URLSearchParams(p.search),m=f.getAll("index");if(m.some(E=>E==="")){f.delete("index"),m.filter(S=>S).forEach(S=>f.append("index",S));let E=f.toString();p.search=E?`?${E}`:""}}return(!t||t===".")&&c.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(p.pathname=p.pathname==="/"?o:Kl([o,p.pathname])),vs(p)}function Zh(t,{relative:a}={}){let o=C.useContext(Tu);Ge(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Nd("useViewTransitionState"),c=jn(t,{relative:a});if(!o.isTransitioning)return!1;let p=Ql(o.currentLocation.pathname,r)||o.currentLocation.pathname,g=Ql(o.nextLocation.pathname,r)||o.nextLocation.pathname;return Ua(c.pathname,g)!=null||Ua(c.pathname,p)!=null}var bu={exports:{}},Jl={},Cu={exports:{}},Lu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function e_(){return Qp||(Qp=1,(function(t){function a(D,Q){var V=D.length;D.push(Q);e:for(;0<V;){var y=V-1>>>1,B=D[y];if(0<c(B,Q))D[y]=Q,D[V]=B,V=y;else break e}}function o(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var Q=D[0],V=D.pop();if(V!==Q){D[0]=V;e:for(var y=0,B=D.length,ge=B>>>1;y<ge;){var ie=2*(y+1)-1,xe=D[ie],me=ie+1,Ie=D[me];if(0>c(xe,V))me<B&&0>c(Ie,xe)?(D[y]=Ie,D[me]=V,y=me):(D[y]=xe,D[ie]=V,y=ie);else if(me<B&&0>c(Ie,V))D[y]=Ie,D[me]=V,y=me;else break e}}return Q}function c(D,Q){var V=D.sortIndex-Q.sortIndex;return V!==0?V:D.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;t.unstable_now=function(){return p.now()}}else{var g=Date,f=g.now();t.unstable_now=function(){return g.now()-f}}var m=[],_=[],E=1,S=null,J=3,U=!1,H=!1,A=!1,q=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function X(D){for(var Q=o(_);Q!==null;){if(Q.callback===null)r(_);else if(Q.startTime<=D)r(_),Q.sortIndex=Q.expirationTime,a(m,Q);else break;Q=o(_)}}function pe(D){if(A=!1,X(D),!H)if(o(m)!==null)H=!0,De(re);else{var Q=o(_);Q!==null&&de(pe,Q.startTime-D)}}function re(D,Q){H=!1,A&&(A=!1,W(L),L=-1),U=!0;var V=J;try{for(X(Q),S=o(m);S!==null&&(!(S.expirationTime>Q)||D&&!Re());){var y=S.callback;if(typeof y=="function"){S.callback=null,J=S.priorityLevel;var B=y(S.expirationTime<=Q);Q=t.unstable_now(),typeof B=="function"?S.callback=B:S===o(m)&&r(m),X(Q)}else r(m);S=o(m)}if(S!==null)var ge=!0;else{var ie=o(_);ie!==null&&de(pe,ie.startTime-Q),ge=!1}return ge}finally{S=null,J=V,U=!1}}var ve=!1,Ce=null,L=-1,Ee=5,fe=-1;function Re(){return!(t.unstable_now()-fe<Ee)}function Se(){if(Ce!==null){var D=t.unstable_now();fe=D;var Q=!0;try{Q=Ce(!0,D)}finally{Q?Ae():(ve=!1,Ce=null)}}else ve=!1}var Ae;if(typeof K=="function")Ae=function(){K(Se)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,Le=Je.port2;Je.port1.onmessage=Se,Ae=function(){Le.postMessage(null)}}else Ae=function(){q(Se,0)};function De(D){Ce=D,ve||(ve=!0,Ae())}function de(D,Q){L=q(function(){D(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){H||U||(H=!0,De(re))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ee=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return J},t.unstable_getFirstCallbackNode=function(){return o(m)},t.unstable_next=function(D){switch(J){case 1:case 2:case 3:var Q=3;break;default:Q=J}var V=J;J=Q;try{return D()}finally{J=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,Q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var V=J;J=D;try{return Q()}finally{J=V}},t.unstable_scheduleCallback=function(D,Q,V){var y=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?y+V:y):V=y,D){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=V+B,D={id:E++,callback:Q,priorityLevel:D,startTime:V,expirationTime:B,sortIndex:-1},V>y?(D.sortIndex=V,a(_,D),o(m)===null&&D===o(_)&&(A?(W(L),L=-1):A=!0,de(pe,V-y))):(D.sortIndex=B,a(m,D),H||U||(H=!0,De(re))),D},t.unstable_shouldYield=Re,t.unstable_wrapCallback=function(D){var Q=J;return function(){var V=J;J=Q;try{return D.apply(this,arguments)}finally{J=V}}}})(Lu)),Lu}var Yp;function l_(){return Yp||(Yp=1,Cu.exports=e_()),Cu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function s_(){if(Xp)return Jl;Xp=1;var t=zu(),a=l_();function o(e){for(var l="https://reactjs.org/docs/error-decoder.html?invariant="+e,s=1;s<arguments.length;s++)l+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+e+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,c={};function p(e,l){g(e,l),g(e+"Capture",l)}function g(e,l){for(c[e]=l,e=0;e<l.length;e++)r.add(l[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},S={};function J(e){return m.call(S,e)?!0:m.call(E,e)?!1:_.test(e)?S[e]=!0:(E[e]=!0,!1)}function U(e,l,s,i){if(s!==null&&s.type===0)return!1;switch(typeof l){case"function":case"symbol":return!0;case"boolean":return i?!1:s!==null?!s.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function H(e,l,s,i){if(l===null||typeof l>"u"||U(e,l,s,i))return!0;if(i)return!1;if(s!==null)switch(s.type){case 3:return!l;case 4:return l===!1;case 5:return isNaN(l);case 6:return isNaN(l)||1>l}return!1}function A(e,l,s,i,n,u,d){this.acceptsBooleans=l===2||l===3||l===4,this.attributeName=i,this.attributeNamespace=n,this.mustUseProperty=s,this.propertyName=e,this.type=l,this.sanitizeURL=u,this.removeEmptyString=d}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){q[e]=new A(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var l=e[0];q[l]=new A(l,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){q[e]=new A(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){q[e]=new A(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){q[e]=new A(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){q[e]=new A(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){q[e]=new A(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){q[e]=new A(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){q[e]=new A(e,5,!1,e.toLowerCase(),null,!1,!1)});var W=/[\-:]([a-z])/g;function K(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var l=e.replace(W,K);q[l]=new A(l,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var l=e.replace(W,K);q[l]=new A(l,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var l=e.replace(W,K);q[l]=new A(l,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){q[e]=new A(e,1,!1,e.toLowerCase(),null,!1,!1)}),q.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){q[e]=new A(e,1,!1,e.toLowerCase(),null,!0,!0)});function X(e,l,s,i){var n=q.hasOwnProperty(l)?q[l]:null;(n!==null?n.type!==0:i||!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(H(l,s,n,i)&&(s=null),i||n===null?J(l)&&(s===null?e.removeAttribute(l):e.setAttribute(l,""+s)):n.mustUseProperty?e[n.propertyName]=s===null?n.type===3?!1:"":s:(l=n.attributeName,i=n.attributeNamespace,s===null?e.removeAttribute(l):(n=n.type,s=n===3||n===4&&s===!0?"":""+s,i?e.setAttributeNS(i,l,s):e.setAttribute(l,s))))}var pe=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,re=Symbol.for("react.element"),ve=Symbol.for("react.portal"),Ce=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),Ee=Symbol.for("react.profiler"),fe=Symbol.for("react.provider"),Re=Symbol.for("react.context"),Se=Symbol.for("react.forward_ref"),Ae=Symbol.for("react.suspense"),Je=Symbol.for("react.suspense_list"),Le=Symbol.for("react.memo"),De=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),D=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=D&&e[D]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,y;function B(e){if(y===void 0)try{throw Error()}catch(s){var l=s.stack.trim().match(/\n( *(at )?)/);y=l&&l[1]||""}return`
`+y+e}var ge=!1;function ie(e,l){if(!e||ge)return"";ge=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(l)if(l=function(){throw Error()},Object.defineProperty(l.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(l,[])}catch(z){var i=z}Reflect.construct(e,[],l)}else{try{l.call()}catch(z){i=z}e.call(l.prototype)}else{try{throw Error()}catch(z){i=z}e()}}catch(z){if(z&&i&&typeof z.stack=="string"){for(var n=z.stack.split(`
`),u=i.stack.split(`
`),d=n.length-1,h=u.length-1;1<=d&&0<=h&&n[d]!==u[h];)h--;for(;1<=d&&0<=h;d--,h--)if(n[d]!==u[h]){if(d!==1||h!==1)do if(d--,h--,0>h||n[d]!==u[h]){var v=`
`+n[d].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=d&&0<=h);break}}}finally{ge=!1,Error.prepareStackTrace=s}return(e=e?e.displayName||e.name:"")?B(e):""}function xe(e){switch(e.tag){case 5:return B(e.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return e=ie(e.type,!1),e;case 11:return e=ie(e.type.render,!1),e;case 1:return e=ie(e.type,!0),e;default:return""}}function me(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ce:return"Fragment";case ve:return"Portal";case Ee:return"Profiler";case L:return"StrictMode";case Ae:return"Suspense";case Je:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Re:return(e.displayName||"Context")+".Consumer";case fe:return(e._context.displayName||"Context")+".Provider";case Se:var l=e.render;return e=e.displayName,e||(e=l.displayName||l.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Le:return l=e.displayName||null,l!==null?l:me(e.type)||"Memo";case De:l=e._payload,e=e._init;try{return me(e(l))}catch{}}return null}function Ie(e){var l=e.type;switch(e.tag){case 24:return"Cache";case 9:return(l.displayName||"Context")+".Consumer";case 10:return(l._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=l.render,e=e.displayName||e.name||"",l.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return l;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return me(l);case 8:return l===L?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof l=="function")return l.displayName||l.name||null;if(typeof l=="string")return l}return null}function k(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function R(e){var l=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(l==="checkbox"||l==="radio")}function Z(e){var l=R(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,l),i=""+e[l];if(!e.hasOwnProperty(l)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var n=s.get,u=s.set;return Object.defineProperty(e,l,{configurable:!0,get:function(){return n.call(this)},set:function(d){i=""+d,u.call(this,d)}}),Object.defineProperty(e,l,{enumerable:s.enumerable}),{getValue:function(){return i},setValue:function(d){i=""+d},stopTracking:function(){e._valueTracker=null,delete e[l]}}}}function ke(e){e._valueTracker||(e._valueTracker=Z(e))}function He(e){if(!e)return!1;var l=e._valueTracker;if(!l)return!0;var s=l.getValue(),i="";return e&&(i=R(e)?e.checked?"true":"false":e.value),e=i,e!==s?(l.setValue(e),!0):!1}function Oe(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function kl(e,l){var s=l.checked;return V({},l,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??e._wrapperState.initialChecked})}function rs(e,l){var s=l.defaultValue==null?"":l.defaultValue,i=l.checked!=null?l.checked:l.defaultChecked;s=k(l.value!=null?l.value:s),e._wrapperState={initialChecked:i,initialValue:s,controlled:l.type==="checkbox"||l.type==="radio"?l.checked!=null:l.value!=null}}function Pi(e,l){l=l.checked,l!=null&&X(e,"checked",l,!1)}function zl(e,l){Pi(e,l);var s=k(l.value),i=l.type;if(s!=null)i==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+s):e.value!==""+s&&(e.value=""+s);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}l.hasOwnProperty("value")?ht(e,l.type,s):l.hasOwnProperty("defaultValue")&&ht(e,l.type,k(l.defaultValue)),l.checked==null&&l.defaultChecked!=null&&(e.defaultChecked=!!l.defaultChecked)}function Sn(e,l,s){if(l.hasOwnProperty("value")||l.hasOwnProperty("defaultValue")){var i=l.type;if(!(i!=="submit"&&i!=="reset"||l.value!==void 0&&l.value!==null))return;l=""+e._wrapperState.initialValue,s||l===e.value||(e.value=l),e.defaultValue=l}s=e.name,s!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,s!==""&&(e.name=s)}function ht(e,l,s){(l!=="number"||Oe(e.ownerDocument)!==e)&&(s==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+s&&(e.defaultValue=""+s))}var qs=Array.isArray;function Bs(e,l,s,i){if(e=e.options,l){l={};for(var n=0;n<s.length;n++)l["$"+s[n]]=!0;for(s=0;s<e.length;s++)n=l.hasOwnProperty("$"+e[s].value),e[s].selected!==n&&(e[s].selected=n),n&&i&&(e[s].defaultSelected=!0)}else{for(s=""+k(s),l=null,n=0;n<e.length;n++){if(e[n].value===s){e[n].selected=!0,i&&(e[n].defaultSelected=!0);return}l!==null||e[n].disabled||(l=e[n])}l!==null&&(l.selected=!0)}}function _t(e,l){if(l.dangerouslySetInnerHTML!=null)throw Error(o(91));return V({},l,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vn(e,l){var s=l.value;if(s==null){if(s=l.children,l=l.defaultValue,s!=null){if(l!=null)throw Error(o(92));if(qs(s)){if(1<s.length)throw Error(o(93));s=s[0]}l=s}l==null&&(l=""),s=l}e._wrapperState={initialValue:k(s)}}function wn(e,l){var s=k(l.value),i=k(l.defaultValue);s!=null&&(s=""+s,s!==e.value&&(e.value=s),l.defaultValue==null&&e.defaultValue!==s&&(e.defaultValue=s)),i!=null&&(e.defaultValue=""+i)}function cs(e){var l=e.textContent;l===e._wrapperState.initialValue&&l!==""&&l!==null&&(e.value=l)}function As(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ji(e,l){return e==null||e==="http://www.w3.org/1999/xhtml"?As(l):e==="http://www.w3.org/2000/svg"&&l==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ms,Tl=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(l,s,i,n){MSApp.execUnsafeLocalFunction(function(){return e(l,s,i,n)})}:e})(function(e,l){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=l;else{for(Ms=Ms||document.createElement("div"),Ms.innerHTML="<svg>"+l.valueOf().toString()+"</svg>",l=Ms.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;l.firstChild;)e.appendChild(l.firstChild)}});function wl(e,l){if(l){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=l;return}}e.textContent=l}var gi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ha=["Webkit","ms","Moz","O"];Object.keys(gi).forEach(function(e){Ha.forEach(function(l){l=l+e.charAt(0).toUpperCase()+e.substring(1),gi[l]=gi[e]})});function zi(e,l,s){return l==null||typeof l=="boolean"||l===""?"":s||typeof l!="number"||l===0||gi.hasOwnProperty(e)&&gi[e]?(""+l).trim():l+"px"}function xn(e,l){e=e.style;for(var s in l)if(l.hasOwnProperty(s)){var i=s.indexOf("--")===0,n=zi(s,l[s],i);s==="float"&&(s="cssFloat"),i?e.setProperty(s,n):e[s]=n}}var Xl=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ui(e,l){if(l){if(Xl[e]&&(l.children!=null||l.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(l.dangerouslySetInnerHTML!=null){if(l.children!=null)throw Error(o(60));if(typeof l.dangerouslySetInnerHTML!="object"||!("__html"in l.dangerouslySetInnerHTML))throw Error(o(61))}if(l.style!=null&&typeof l.style!="object")throw Error(o(62))}}function qi(e,l){if(e.indexOf("-")===-1)return typeof l.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bi=null;function jt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ai=null,Zl=null,Es=null;function Mi(e){if(e=Ht(e)){if(typeof Ai!="function")throw Error(o(280));var l=e.stateNode;l&&(l=Rn(l),Ai(e.stateNode,e.type,l))}}function yn(e){Zl?Es?Es.push(e):Es=[e]:Zl=e}function St(){if(Zl){var e=Zl,l=Es;if(Es=Zl=null,Mi(e),l)for(e=0;e<l.length;e++)Mi(l[e])}}function En(e,l){return e(l)}function vt(){}var Hs=!1;function fi(e,l,s){if(Hs)return e(l,s);Hs=!0;try{return En(e,l,s)}finally{Hs=!1,(Zl!==null||Es!==null)&&(vt(),St())}}function Ts(e,l){var s=e.stateNode;if(s===null)return null;var i=Rn(s);if(i===null)return null;s=i[l];e:switch(l){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(o(231,l,typeof s));return s}var wt=!1;if(f)try{var mi={};Object.defineProperty(mi,"passive",{get:function(){wt=!0}}),window.addEventListener("test",mi,mi),window.removeEventListener("test",mi,mi)}catch{wt=!1}function j(e,l,s,i,n,u,d,h,v){var z=Array.prototype.slice.call(arguments,3);try{l.apply(s,z)}catch(N){this.onError(N)}}var w=!1,G=null,M=!1,T=null,ae={onError:function(e){w=!0,G=e}};function oe(e,l,s,i,n,u,d,h,v){w=!1,G=null,j.apply(ae,arguments)}function ye(e,l,s,i,n,u,d,h,v){if(oe.apply(this,arguments),w){if(w){var z=G;w=!1,G=null}else throw Error(o(198));M||(M=!0,T=z)}}function Y(e){var l=e,s=e;if(e.alternate)for(;l.return;)l=l.return;else{e=l;do l=e,(l.flags&4098)!==0&&(s=l.return),e=l.return;while(e)}return l.tag===3?s:null}function ue(e){if(e.tag===13){var l=e.memoizedState;if(l===null&&(e=e.alternate,e!==null&&(l=e.memoizedState)),l!==null)return l.dehydrated}return null}function je(e){if(Y(e)!==e)throw Error(o(188))}function be(e){var l=e.alternate;if(!l){if(l=Y(e),l===null)throw Error(o(188));return l!==e?null:e}for(var s=e,i=l;;){var n=s.return;if(n===null)break;var u=n.alternate;if(u===null){if(i=n.return,i!==null){s=i;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===s)return je(n),e;if(u===i)return je(n),l;u=u.sibling}throw Error(o(188))}if(s.return!==i.return)s=n,i=u;else{for(var d=!1,h=n.child;h;){if(h===s){d=!0,s=n,i=u;break}if(h===i){d=!0,i=n,s=u;break}h=h.sibling}if(!d){for(h=u.child;h;){if(h===s){d=!0,s=u,i=n;break}if(h===i){d=!0,i=u,s=n;break}h=h.sibling}if(!d)throw Error(o(189))}}if(s.alternate!==i)throw Error(o(190))}if(s.tag!==3)throw Error(o(188));return s.stateNode.current===s?e:l}function ce(e){return e=be(e),e!==null?ze(e):null}function ze(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var l=ze(e);if(l!==null)return l;e=e.sibling}return null}var Te=a.unstable_scheduleCallback,ll=a.unstable_cancelCallback,Ve=a.unstable_shouldYield,Ne=a.unstable_requestPaint,Ue=a.unstable_now,gl=a.unstable_getCurrentPriorityLevel,ks=a.unstable_ImmediatePriority,es=a.unstable_UserBlockingPriority,ls=a.unstable_NormalPriority,ps=a.unstable_LowPriority,Ul=a.unstable_IdlePriority,Rs=null,nl=null;function Hi(e){if(nl&&typeof nl.onCommitFiberRoot=="function")try{nl.onCommitFiberRoot(Rs,e,void 0,(e.current.flags&128)===128)}catch{}}var fl=Math.clz32?Math.clz32:ml,Ti=Math.log,qe=Math.LN2;function ml(e){return e>>>=0,e===0?32:31-(Ti(e)/qe|0)|0}var xl=64,bl=4194304;function Os(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ns(e,l){var s=e.pendingLanes;if(s===0)return 0;var i=0,n=e.suspendedLanes,u=e.pingedLanes,d=s&268435455;if(d!==0){var h=d&~n;h!==0?i=Os(h):(u&=d,u!==0&&(i=Os(u)))}else d=s&~n,d!==0?i=Os(d):u!==0&&(i=Os(u));if(i===0)return 0;if(l!==0&&l!==i&&(l&n)===0&&(n=i&-i,u=l&-l,n>=u||n===16&&(u&4194240)!==0))return l;if((i&4)!==0&&(i|=s&16),l=e.entangledLanes,l!==0)for(e=e.entanglements,l&=i;0<l;)s=31-fl(l),n=1<<s,i|=e[s],l&=~n;return i}function We(e,l){switch(e){case 1:case 2:case 4:return l+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bs(e,l){for(var s=e.suspendedLanes,i=e.pingedLanes,n=e.expirationTimes,u=e.pendingLanes;0<u;){var d=31-fl(u),h=1<<d,v=n[d];v===-1?((h&s)===0||(h&i)!==0)&&(n[d]=We(h,l)):v<=l&&(e.expiredLanes|=h),u&=~h}}function Ri(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function kn(){var e=xl;return xl<<=1,(xl&4194240)===0&&(xl=64),e}function Ta(e){for(var l=[],s=0;31>s;s++)l.push(e);return l}function xt(e,l,s){e.pendingLanes|=l,l!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,l=31-fl(l),e[l]=s}function Wd(e,l){var s=e.pendingLanes&~l;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=l,e.mutableReadLanes&=l,e.entangledLanes&=l,l=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<s;){var n=31-fl(s),u=1<<n;l[n]=0,i[n]=-1,e[n]=-1,s&=~u}}function Ra(e,l){var s=e.entangledLanes|=l;for(e=e.entanglements;s;){var i=31-fl(s),n=1<<i;n&l|e[i]&l&&(e[i]|=l),s&=~n}}var Fe=0;function Vu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ku,Oa,Qu,Yu,Xu,Na=!1,bn=[],Fs=null,Ds=null,Ws=null,yt=new Map,Et=new Map,$s=[],$d="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zu(e,l){switch(e){case"focusin":case"focusout":Fs=null;break;case"dragenter":case"dragleave":Ds=null;break;case"mouseover":case"mouseout":Ws=null;break;case"pointerover":case"pointerout":yt.delete(l.pointerId);break;case"gotpointercapture":case"lostpointercapture":Et.delete(l.pointerId)}}function kt(e,l,s,i,n,u){return e===null||e.nativeEvent!==u?(e={blockedOn:l,domEventName:s,eventSystemFlags:i,nativeEvent:u,targetContainers:[n]},l!==null&&(l=Ht(l),l!==null&&Oa(l)),e):(e.eventSystemFlags|=i,l=e.targetContainers,n!==null&&l.indexOf(n)===-1&&l.push(n),e)}function Vd(e,l,s,i,n){switch(l){case"focusin":return Fs=kt(Fs,e,l,s,i,n),!0;case"dragenter":return Ds=kt(Ds,e,l,s,i,n),!0;case"mouseover":return Ws=kt(Ws,e,l,s,i,n),!0;case"pointerover":var u=n.pointerId;return yt.set(u,kt(yt.get(u)||null,e,l,s,i,n)),!0;case"gotpointercapture":return u=n.pointerId,Et.set(u,kt(Et.get(u)||null,e,l,s,i,n)),!0}return!1}function er(e){var l=hi(e.target);if(l!==null){var s=Y(l);if(s!==null){if(l=s.tag,l===13){if(l=ue(s),l!==null){e.blockedOn=l,Xu(e.priority,function(){Qu(s)});return}}else if(l===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cn(e){if(e.blockedOn!==null)return!1;for(var l=e.targetContainers;0<l.length;){var s=Da(e.domEventName,e.eventSystemFlags,l[0],e.nativeEvent);if(s===null){s=e.nativeEvent;var i=new s.constructor(s.type,s);Bi=i,s.target.dispatchEvent(i),Bi=null}else return l=Ht(s),l!==null&&Oa(l),e.blockedOn=s,!1;l.shift()}return!0}function lr(e,l,s){Cn(e)&&s.delete(l)}function Kd(){Na=!1,Fs!==null&&Cn(Fs)&&(Fs=null),Ds!==null&&Cn(Ds)&&(Ds=null),Ws!==null&&Cn(Ws)&&(Ws=null),yt.forEach(lr),Et.forEach(lr)}function bt(e,l){e.blockedOn===l&&(e.blockedOn=null,Na||(Na=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Kd)))}function Ct(e){function l(n){return bt(n,e)}if(0<bn.length){bt(bn[0],e);for(var s=1;s<bn.length;s++){var i=bn[s];i.blockedOn===e&&(i.blockedOn=null)}}for(Fs!==null&&bt(Fs,e),Ds!==null&&bt(Ds,e),Ws!==null&&bt(Ws,e),yt.forEach(l),Et.forEach(l),s=0;s<$s.length;s++)i=$s[s],i.blockedOn===e&&(i.blockedOn=null);for(;0<$s.length&&(s=$s[0],s.blockedOn===null);)er(s),s.blockedOn===null&&$s.shift()}var Oi=pe.ReactCurrentBatchConfig,Ln=!0;function Qd(e,l,s,i){var n=Fe,u=Oi.transition;Oi.transition=null;try{Fe=1,Fa(e,l,s,i)}finally{Fe=n,Oi.transition=u}}function Yd(e,l,s,i){var n=Fe,u=Oi.transition;Oi.transition=null;try{Fe=4,Fa(e,l,s,i)}finally{Fe=n,Oi.transition=u}}function Fa(e,l,s,i){if(Ln){var n=Da(e,l,s,i);if(n===null)uo(e,l,i,In,s),Zu(e,i);else if(Vd(n,e,l,s,i))i.stopPropagation();else if(Zu(e,i),l&4&&-1<$d.indexOf(e)){for(;n!==null;){var u=Ht(n);if(u!==null&&Ku(u),u=Da(e,l,s,i),u===null&&uo(e,l,i,In,s),u===n)break;n=u}n!==null&&i.stopPropagation()}else uo(e,l,i,null,s)}}var In=null;function Da(e,l,s,i){if(In=null,e=jt(i),e=hi(e),e!==null)if(l=Y(e),l===null)e=null;else if(s=l.tag,s===13){if(e=ue(l),e!==null)return e;e=null}else if(s===3){if(l.stateNode.current.memoizedState.isDehydrated)return l.tag===3?l.stateNode.containerInfo:null;e=null}else l!==e&&(e=null);return In=e,null}function sr(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gl()){case ks:return 1;case es:return 4;case ls:case ps:return 16;case Ul:return 536870912;default:return 16}default:return 16}}var Vs=null,Wa=null,Gn=null;function ir(){if(Gn)return Gn;var e,l=Wa,s=l.length,i,n="value"in Vs?Vs.value:Vs.textContent,u=n.length;for(e=0;e<s&&l[e]===n[e];e++);var d=s-e;for(i=1;i<=d&&l[s-i]===n[u-i];i++);return Gn=n.slice(e,1<i?1-i:void 0)}function Pn(e){var l=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&l===13&&(e=13)):e=l,e===10&&(e=13),32<=e||e===13?e:0}function Jn(){return!0}function tr(){return!1}function ql(e){function l(s,i,n,u,d){this._reactName=s,this._targetInst=n,this.type=i,this.nativeEvent=u,this.target=d,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(s=e[h],this[h]=s?s(u):u[h]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Jn:tr,this.isPropagationStopped=tr,this}return V(l.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Jn)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Jn)},persist:function(){},isPersistent:Jn}),l}var Ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$a=ql(Ni),Lt=V({},Ni,{view:0,detail:0}),Xd=ql(Lt),Va,Ka,It,zn=V({},Lt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ya,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==It&&(It&&e.type==="mousemove"?(Va=e.screenX-It.screenX,Ka=e.screenY-It.screenY):Ka=Va=0,It=e),Va)},movementY:function(e){return"movementY"in e?e.movementY:Ka}}),nr=ql(zn),Zd=V({},zn,{dataTransfer:0}),eg=ql(Zd),lg=V({},Lt,{relatedTarget:0}),Qa=ql(lg),sg=V({},Ni,{animationName:0,elapsedTime:0,pseudoElement:0}),ig=ql(sg),tg=V({},Ni,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ng=ql(tg),ag=V({},Ni,{data:0}),ar=ql(ag),og={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ug={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cg(e){var l=this.nativeEvent;return l.getModifierState?l.getModifierState(e):(e=rg[e])?!!l[e]:!1}function Ya(){return cg}var pg=V({},Lt,{key:function(e){if(e.key){var l=og[e.key]||e.key;if(l!=="Unidentified")return l}return e.type==="keypress"?(e=Pn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ug[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ya,charCode:function(e){return e.type==="keypress"?Pn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dg=ql(pg),gg=V({},zn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),or=ql(gg),fg=V({},Lt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ya}),mg=ql(fg),hg=V({},Ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),_g=ql(hg),jg=V({},zn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sg=ql(jg),vg=[9,13,27,32],Xa=f&&"CompositionEvent"in window,Gt=null;f&&"documentMode"in document&&(Gt=document.documentMode);var wg=f&&"TextEvent"in window&&!Gt,ur=f&&(!Xa||Gt&&8<Gt&&11>=Gt),rr=" ",cr=!1;function pr(e,l){switch(e){case"keyup":return vg.indexOf(l.keyCode)!==-1;case"keydown":return l.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fi=!1;function xg(e,l){switch(e){case"compositionend":return dr(l);case"keypress":return l.which!==32?null:(cr=!0,rr);case"textInput":return e=l.data,e===rr&&cr?null:e;default:return null}}function yg(e,l){if(Fi)return e==="compositionend"||!Xa&&pr(e,l)?(e=ir(),Gn=Wa=Vs=null,Fi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(l.ctrlKey||l.altKey||l.metaKey)||l.ctrlKey&&l.altKey){if(l.char&&1<l.char.length)return l.char;if(l.which)return String.fromCharCode(l.which)}return null;case"compositionend":return ur&&l.locale!=="ko"?null:l.data;default:return null}}var Eg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gr(e){var l=e&&e.nodeName&&e.nodeName.toLowerCase();return l==="input"?!!Eg[e.type]:l==="textarea"}function fr(e,l,s,i){yn(i),l=Mn(l,"onChange"),0<l.length&&(s=new $a("onChange","change",null,s,i),e.push({event:s,listeners:l}))}var Pt=null,Jt=null;function kg(e){Jr(e,0)}function Un(e){var l=Ki(e);if(He(l))return e}function bg(e,l){if(e==="change")return l}var mr=!1;if(f){var Za;if(f){var eo="oninput"in document;if(!eo){var hr=document.createElement("div");hr.setAttribute("oninput","return;"),eo=typeof hr.oninput=="function"}Za=eo}else Za=!1;mr=Za&&(!document.documentMode||9<document.documentMode)}function _r(){Pt&&(Pt.detachEvent("onpropertychange",jr),Jt=Pt=null)}function jr(e){if(e.propertyName==="value"&&Un(Jt)){var l=[];fr(l,Jt,e,jt(e)),fi(kg,l)}}function Cg(e,l,s){e==="focusin"?(_r(),Pt=l,Jt=s,Pt.attachEvent("onpropertychange",jr)):e==="focusout"&&_r()}function Lg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Un(Jt)}function Ig(e,l){if(e==="click")return Un(l)}function Gg(e,l){if(e==="input"||e==="change")return Un(l)}function Pg(e,l){return e===l&&(e!==0||1/e===1/l)||e!==e&&l!==l}var ss=typeof Object.is=="function"?Object.is:Pg;function zt(e,l){if(ss(e,l))return!0;if(typeof e!="object"||e===null||typeof l!="object"||l===null)return!1;var s=Object.keys(e),i=Object.keys(l);if(s.length!==i.length)return!1;for(i=0;i<s.length;i++){var n=s[i];if(!m.call(l,n)||!ss(e[n],l[n]))return!1}return!0}function Sr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vr(e,l){var s=Sr(e);e=0;for(var i;s;){if(s.nodeType===3){if(i=e+s.textContent.length,e<=l&&i>=l)return{node:s,offset:l-e};e=i}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Sr(s)}}function wr(e,l){return e&&l?e===l?!0:e&&e.nodeType===3?!1:l&&l.nodeType===3?wr(e,l.parentNode):"contains"in e?e.contains(l):e.compareDocumentPosition?!!(e.compareDocumentPosition(l)&16):!1:!1}function xr(){for(var e=window,l=Oe();l instanceof e.HTMLIFrameElement;){try{var s=typeof l.contentWindow.location.href=="string"}catch{s=!1}if(s)e=l.contentWindow;else break;l=Oe(e.document)}return l}function lo(e){var l=e&&e.nodeName&&e.nodeName.toLowerCase();return l&&(l==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||l==="textarea"||e.contentEditable==="true")}function Jg(e){var l=xr(),s=e.focusedElem,i=e.selectionRange;if(l!==s&&s&&s.ownerDocument&&wr(s.ownerDocument.documentElement,s)){if(i!==null&&lo(s)){if(l=i.start,e=i.end,e===void 0&&(e=l),"selectionStart"in s)s.selectionStart=l,s.selectionEnd=Math.min(e,s.value.length);else if(e=(l=s.ownerDocument||document)&&l.defaultView||window,e.getSelection){e=e.getSelection();var n=s.textContent.length,u=Math.min(i.start,n);i=i.end===void 0?u:Math.min(i.end,n),!e.extend&&u>i&&(n=i,i=u,u=n),n=vr(s,u);var d=vr(s,i);n&&d&&(e.rangeCount!==1||e.anchorNode!==n.node||e.anchorOffset!==n.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(l=l.createRange(),l.setStart(n.node,n.offset),e.removeAllRanges(),u>i?(e.addRange(l),e.extend(d.node,d.offset)):(l.setEnd(d.node,d.offset),e.addRange(l)))}}for(l=[],e=s;e=e.parentNode;)e.nodeType===1&&l.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<l.length;s++)e=l[s],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zg=f&&"documentMode"in document&&11>=document.documentMode,Di=null,so=null,Ut=null,io=!1;function yr(e,l,s){var i=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;io||Di==null||Di!==Oe(i)||(i=Di,"selectionStart"in i&&lo(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ut&&zt(Ut,i)||(Ut=i,i=Mn(so,"onSelect"),0<i.length&&(l=new $a("onSelect","select",null,l,s),e.push({event:l,listeners:i}),l.target=Di)))}function qn(e,l){var s={};return s[e.toLowerCase()]=l.toLowerCase(),s["Webkit"+e]="webkit"+l,s["Moz"+e]="moz"+l,s}var Wi={animationend:qn("Animation","AnimationEnd"),animationiteration:qn("Animation","AnimationIteration"),animationstart:qn("Animation","AnimationStart"),transitionend:qn("Transition","TransitionEnd")},to={},Er={};f&&(Er=document.createElement("div").style,"AnimationEvent"in window||(delete Wi.animationend.animation,delete Wi.animationiteration.animation,delete Wi.animationstart.animation),"TransitionEvent"in window||delete Wi.transitionend.transition);function Bn(e){if(to[e])return to[e];if(!Wi[e])return e;var l=Wi[e],s;for(s in l)if(l.hasOwnProperty(s)&&s in Er)return to[e]=l[s];return e}var kr=Bn("animationend"),br=Bn("animationiteration"),Cr=Bn("animationstart"),Lr=Bn("transitionend"),Ir=new Map,Gr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ks(e,l){Ir.set(e,l),p(l,[e])}for(var no=0;no<Gr.length;no++){var ao=Gr[no],Ug=ao.toLowerCase(),qg=ao[0].toUpperCase()+ao.slice(1);Ks(Ug,"on"+qg)}Ks(kr,"onAnimationEnd"),Ks(br,"onAnimationIteration"),Ks(Cr,"onAnimationStart"),Ks("dblclick","onDoubleClick"),Ks("focusin","onFocus"),Ks("focusout","onBlur"),Ks(Lr,"onTransitionEnd"),g("onMouseEnter",["mouseout","mouseover"]),g("onMouseLeave",["mouseout","mouseover"]),g("onPointerEnter",["pointerout","pointerover"]),g("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bg=new Set("cancel close invalid load scroll toggle".split(" ").concat(qt));function Pr(e,l,s){var i=e.type||"unknown-event";e.currentTarget=s,ye(i,l,void 0,e),e.currentTarget=null}function Jr(e,l){l=(l&4)!==0;for(var s=0;s<e.length;s++){var i=e[s],n=i.event;i=i.listeners;e:{var u=void 0;if(l)for(var d=i.length-1;0<=d;d--){var h=i[d],v=h.instance,z=h.currentTarget;if(h=h.listener,v!==u&&n.isPropagationStopped())break e;Pr(n,h,z),u=v}else for(d=0;d<i.length;d++){if(h=i[d],v=h.instance,z=h.currentTarget,h=h.listener,v!==u&&n.isPropagationStopped())break e;Pr(n,h,z),u=v}}}if(M)throw e=T,M=!1,T=null,e}function Ke(e,l){var s=l[mo];s===void 0&&(s=l[mo]=new Set);var i=e+"__bubble";s.has(i)||(zr(l,e,2,!1),s.add(i))}function oo(e,l,s){var i=0;l&&(i|=4),zr(s,e,i,l)}var An="_reactListening"+Math.random().toString(36).slice(2);function Bt(e){if(!e[An]){e[An]=!0,r.forEach(function(s){s!=="selectionchange"&&(Bg.has(s)||oo(s,!1,e),oo(s,!0,e))});var l=e.nodeType===9?e:e.ownerDocument;l===null||l[An]||(l[An]=!0,oo("selectionchange",!1,l))}}function zr(e,l,s,i){switch(sr(l)){case 1:var n=Qd;break;case 4:n=Yd;break;default:n=Fa}s=n.bind(null,l,s,e),n=void 0,!wt||l!=="touchstart"&&l!=="touchmove"&&l!=="wheel"||(n=!0),i?n!==void 0?e.addEventListener(l,s,{capture:!0,passive:n}):e.addEventListener(l,s,!0):n!==void 0?e.addEventListener(l,s,{passive:n}):e.addEventListener(l,s,!1)}function uo(e,l,s,i,n){var u=i;if((l&1)===0&&(l&2)===0&&i!==null)e:for(;;){if(i===null)return;var d=i.tag;if(d===3||d===4){var h=i.stateNode.containerInfo;if(h===n||h.nodeType===8&&h.parentNode===n)break;if(d===4)for(d=i.return;d!==null;){var v=d.tag;if((v===3||v===4)&&(v=d.stateNode.containerInfo,v===n||v.nodeType===8&&v.parentNode===n))return;d=d.return}for(;h!==null;){if(d=hi(h),d===null)return;if(v=d.tag,v===5||v===6){i=u=d;continue e}h=h.parentNode}}i=i.return}fi(function(){var z=u,N=jt(s),F=[];e:{var O=Ir.get(e);if(O!==void 0){var ee=$a,se=e;switch(e){case"keypress":if(Pn(s)===0)break e;case"keydown":case"keyup":ee=dg;break;case"focusin":se="focus",ee=Qa;break;case"focusout":se="blur",ee=Qa;break;case"beforeblur":case"afterblur":ee=Qa;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=nr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=eg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=mg;break;case kr:case br:case Cr:ee=ig;break;case Lr:ee=_g;break;case"scroll":ee=Xd;break;case"wheel":ee=Sg;break;case"copy":case"cut":case"paste":ee=ng;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=or}var te=(l&4)!==0,sl=!te&&e==="scroll",I=te?O!==null?O+"Capture":null:O;te=[];for(var x=z,P;x!==null;){P=x;var $=P.stateNode;if(P.tag===5&&$!==null&&(P=$,I!==null&&($=Ts(x,I),$!=null&&te.push(At(x,$,P)))),sl)break;x=x.return}0<te.length&&(O=new ee(O,se,null,s,N),F.push({event:O,listeners:te}))}}if((l&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",ee=e==="mouseout"||e==="pointerout",O&&s!==Bi&&(se=s.relatedTarget||s.fromElement)&&(hi(se)||se[Cs]))break e;if((ee||O)&&(O=N.window===N?N:(O=N.ownerDocument)?O.defaultView||O.parentWindow:window,ee?(se=s.relatedTarget||s.toElement,ee=z,se=se?hi(se):null,se!==null&&(sl=Y(se),se!==sl||se.tag!==5&&se.tag!==6)&&(se=null)):(ee=null,se=z),ee!==se)){if(te=nr,$="onMouseLeave",I="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(te=or,$="onPointerLeave",I="onPointerEnter",x="pointer"),sl=ee==null?O:Ki(ee),P=se==null?O:Ki(se),O=new te($,x+"leave",ee,s,N),O.target=sl,O.relatedTarget=P,$=null,hi(N)===z&&(te=new te(I,x+"enter",se,s,N),te.target=P,te.relatedTarget=sl,$=te),sl=$,ee&&se)l:{for(te=ee,I=se,x=0,P=te;P;P=$i(P))x++;for(P=0,$=I;$;$=$i($))P++;for(;0<x-P;)te=$i(te),x--;for(;0<P-x;)I=$i(I),P--;for(;x--;){if(te===I||I!==null&&te===I.alternate)break l;te=$i(te),I=$i(I)}te=null}else te=null;ee!==null&&Ur(F,O,ee,te,!1),se!==null&&sl!==null&&Ur(F,sl,se,te,!0)}}e:{if(O=z?Ki(z):window,ee=O.nodeName&&O.nodeName.toLowerCase(),ee==="select"||ee==="input"&&O.type==="file")var ne=bg;else if(gr(O))if(mr)ne=Gg;else{ne=Lg;var he=Cg}else(ee=O.nodeName)&&ee.toLowerCase()==="input"&&(O.type==="checkbox"||O.type==="radio")&&(ne=Ig);if(ne&&(ne=ne(e,z))){fr(F,ne,s,N);break e}he&&he(e,O,z),e==="focusout"&&(he=O._wrapperState)&&he.controlled&&O.type==="number"&&ht(O,"number",O.value)}switch(he=z?Ki(z):window,e){case"focusin":(gr(he)||he.contentEditable==="true")&&(Di=he,so=z,Ut=null);break;case"focusout":Ut=so=Di=null;break;case"mousedown":io=!0;break;case"contextmenu":case"mouseup":case"dragend":io=!1,yr(F,s,N);break;case"selectionchange":if(zg)break;case"keydown":case"keyup":yr(F,s,N)}var _e;if(Xa)e:{switch(e){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else Fi?pr(e,s)&&(we="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(we="onCompositionStart");we&&(ur&&s.locale!=="ko"&&(Fi||we!=="onCompositionStart"?we==="onCompositionEnd"&&Fi&&(_e=ir()):(Vs=N,Wa="value"in Vs?Vs.value:Vs.textContent,Fi=!0)),he=Mn(z,we),0<he.length&&(we=new ar(we,e,null,s,N),F.push({event:we,listeners:he}),_e?we.data=_e:(_e=dr(s),_e!==null&&(we.data=_e)))),(_e=wg?xg(e,s):yg(e,s))&&(z=Mn(z,"onBeforeInput"),0<z.length&&(N=new ar("onBeforeInput","beforeinput",null,s,N),F.push({event:N,listeners:z}),N.data=_e))}Jr(F,l)})}function At(e,l,s){return{instance:e,listener:l,currentTarget:s}}function Mn(e,l){for(var s=l+"Capture",i=[];e!==null;){var n=e,u=n.stateNode;n.tag===5&&u!==null&&(n=u,u=Ts(e,s),u!=null&&i.unshift(At(e,u,n)),u=Ts(e,l),u!=null&&i.push(At(e,u,n))),e=e.return}return i}function $i(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ur(e,l,s,i,n){for(var u=l._reactName,d=[];s!==null&&s!==i;){var h=s,v=h.alternate,z=h.stateNode;if(v!==null&&v===i)break;h.tag===5&&z!==null&&(h=z,n?(v=Ts(s,u),v!=null&&d.unshift(At(s,v,h))):n||(v=Ts(s,u),v!=null&&d.push(At(s,v,h)))),s=s.return}d.length!==0&&e.push({event:l,listeners:d})}var Ag=/\r\n?/g,Mg=/\u0000|\uFFFD/g;function qr(e){return(typeof e=="string"?e:""+e).replace(Ag,`
`).replace(Mg,"")}function Hn(e,l,s){if(l=qr(l),qr(e)!==l&&s)throw Error(o(425))}function Tn(){}var ro=null,co=null;function po(e,l){return e==="textarea"||e==="noscript"||typeof l.children=="string"||typeof l.children=="number"||typeof l.dangerouslySetInnerHTML=="object"&&l.dangerouslySetInnerHTML!==null&&l.dangerouslySetInnerHTML.__html!=null}var go=typeof setTimeout=="function"?setTimeout:void 0,Hg=typeof clearTimeout=="function"?clearTimeout:void 0,Br=typeof Promise=="function"?Promise:void 0,Tg=typeof queueMicrotask=="function"?queueMicrotask:typeof Br<"u"?function(e){return Br.resolve(null).then(e).catch(Rg)}:go;function Rg(e){setTimeout(function(){throw e})}function fo(e,l){var s=l,i=0;do{var n=s.nextSibling;if(e.removeChild(s),n&&n.nodeType===8)if(s=n.data,s==="/$"){if(i===0){e.removeChild(n),Ct(l);return}i--}else s!=="$"&&s!=="$?"&&s!=="$!"||i++;s=n}while(s);Ct(l)}function Qs(e){for(;e!=null;e=e.nextSibling){var l=e.nodeType;if(l===1||l===3)break;if(l===8){if(l=e.data,l==="$"||l==="$!"||l==="$?")break;if(l==="/$")return null}}return e}function Ar(e){e=e.previousSibling;for(var l=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(l===0)return e;l--}else s==="/$"&&l++}e=e.previousSibling}return null}var Vi=Math.random().toString(36).slice(2),ds="__reactFiber$"+Vi,Mt="__reactProps$"+Vi,Cs="__reactContainer$"+Vi,mo="__reactEvents$"+Vi,Og="__reactListeners$"+Vi,Ng="__reactHandles$"+Vi;function hi(e){var l=e[ds];if(l)return l;for(var s=e.parentNode;s;){if(l=s[Cs]||s[ds]){if(s=l.alternate,l.child!==null||s!==null&&s.child!==null)for(e=Ar(e);e!==null;){if(s=e[ds])return s;e=Ar(e)}return l}e=s,s=e.parentNode}return null}function Ht(e){return e=e[ds]||e[Cs],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ki(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function Rn(e){return e[Mt]||null}var ho=[],Qi=-1;function Ys(e){return{current:e}}function Qe(e){0>Qi||(e.current=ho[Qi],ho[Qi]=null,Qi--)}function $e(e,l){Qi++,ho[Qi]=e.current,e.current=l}var Xs={},hl=Ys(Xs),Cl=Ys(!1),_i=Xs;function Yi(e,l){var s=e.type.contextTypes;if(!s)return Xs;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===l)return i.__reactInternalMemoizedMaskedChildContext;var n={},u;for(u in s)n[u]=l[u];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=n),n}function Ll(e){return e=e.childContextTypes,e!=null}function On(){Qe(Cl),Qe(hl)}function Mr(e,l,s){if(hl.current!==Xs)throw Error(o(168));$e(hl,l),$e(Cl,s)}function Hr(e,l,s){var i=e.stateNode;if(l=l.childContextTypes,typeof i.getChildContext!="function")return s;i=i.getChildContext();for(var n in i)if(!(n in l))throw Error(o(108,Ie(e)||"Unknown",n));return V({},s,i)}function Nn(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xs,_i=hl.current,$e(hl,e),$e(Cl,Cl.current),!0}function Tr(e,l,s){var i=e.stateNode;if(!i)throw Error(o(169));s?(e=Hr(e,l,_i),i.__reactInternalMemoizedMergedChildContext=e,Qe(Cl),Qe(hl),$e(hl,e)):Qe(Cl),$e(Cl,s)}var Ls=null,Fn=!1,_o=!1;function Rr(e){Ls===null?Ls=[e]:Ls.push(e)}function Fg(e){Fn=!0,Rr(e)}function Zs(){if(!_o&&Ls!==null){_o=!0;var e=0,l=Fe;try{var s=Ls;for(Fe=1;e<s.length;e++){var i=s[e];do i=i(!0);while(i!==null)}Ls=null,Fn=!1}catch(n){throw Ls!==null&&(Ls=Ls.slice(e+1)),Te(ks,Zs),n}finally{Fe=l,_o=!1}}return null}var Xi=[],Zi=0,Dn=null,Wn=0,Rl=[],Ol=0,ji=null,Is=1,Gs="";function Si(e,l){Xi[Zi++]=Wn,Xi[Zi++]=Dn,Dn=e,Wn=l}function Or(e,l,s){Rl[Ol++]=Is,Rl[Ol++]=Gs,Rl[Ol++]=ji,ji=e;var i=Is;e=Gs;var n=32-fl(i)-1;i&=~(1<<n),s+=1;var u=32-fl(l)+n;if(30<u){var d=n-n%5;u=(i&(1<<d)-1).toString(32),i>>=d,n-=d,Is=1<<32-fl(l)+n|s<<n|i,Gs=u+e}else Is=1<<u|s<<n|i,Gs=e}function jo(e){e.return!==null&&(Si(e,1),Or(e,1,0))}function So(e){for(;e===Dn;)Dn=Xi[--Zi],Xi[Zi]=null,Wn=Xi[--Zi],Xi[Zi]=null;for(;e===ji;)ji=Rl[--Ol],Rl[Ol]=null,Gs=Rl[--Ol],Rl[Ol]=null,Is=Rl[--Ol],Rl[Ol]=null}var Bl=null,Al=null,Ye=!1,is=null;function Nr(e,l){var s=Wl(5,null,null,0);s.elementType="DELETED",s.stateNode=l,s.return=e,l=e.deletions,l===null?(e.deletions=[s],e.flags|=16):l.push(s)}function Fr(e,l){switch(e.tag){case 5:var s=e.type;return l=l.nodeType!==1||s.toLowerCase()!==l.nodeName.toLowerCase()?null:l,l!==null?(e.stateNode=l,Bl=e,Al=Qs(l.firstChild),!0):!1;case 6:return l=e.pendingProps===""||l.nodeType!==3?null:l,l!==null?(e.stateNode=l,Bl=e,Al=null,!0):!1;case 13:return l=l.nodeType!==8?null:l,l!==null?(s=ji!==null?{id:Is,overflow:Gs}:null,e.memoizedState={dehydrated:l,treeContext:s,retryLane:1073741824},s=Wl(18,null,null,0),s.stateNode=l,s.return=e,e.child=s,Bl=e,Al=null,!0):!1;default:return!1}}function vo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wo(e){if(Ye){var l=Al;if(l){var s=l;if(!Fr(e,l)){if(vo(e))throw Error(o(418));l=Qs(s.nextSibling);var i=Bl;l&&Fr(e,l)?Nr(i,s):(e.flags=e.flags&-4097|2,Ye=!1,Bl=e)}}else{if(vo(e))throw Error(o(418));e.flags=e.flags&-4097|2,Ye=!1,Bl=e}}}function Dr(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Bl=e}function $n(e){if(e!==Bl)return!1;if(!Ye)return Dr(e),Ye=!0,!1;var l;if((l=e.tag!==3)&&!(l=e.tag!==5)&&(l=e.type,l=l!=="head"&&l!=="body"&&!po(e.type,e.memoizedProps)),l&&(l=Al)){if(vo(e))throw Wr(),Error(o(418));for(;l;)Nr(e,l),l=Qs(l.nextSibling)}if(Dr(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,l=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"){if(l===0){Al=Qs(e.nextSibling);break e}l--}else s!=="$"&&s!=="$!"&&s!=="$?"||l++}e=e.nextSibling}Al=null}}else Al=Bl?Qs(e.stateNode.nextSibling):null;return!0}function Wr(){for(var e=Al;e;)e=Qs(e.nextSibling)}function et(){Al=Bl=null,Ye=!1}function xo(e){is===null?is=[e]:is.push(e)}var Dg=pe.ReactCurrentBatchConfig;function Tt(e,l,s){if(e=s.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(o(309));var i=s.stateNode}if(!i)throw Error(o(147,e));var n=i,u=""+e;return l!==null&&l.ref!==null&&typeof l.ref=="function"&&l.ref._stringRef===u?l.ref:(l=function(d){var h=n.refs;d===null?delete h[u]:h[u]=d},l._stringRef=u,l)}if(typeof e!="string")throw Error(o(284));if(!s._owner)throw Error(o(290,e))}return e}function Vn(e,l){throw e=Object.prototype.toString.call(l),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":e))}function $r(e){var l=e._init;return l(e._payload)}function Vr(e){function l(I,x){if(e){var P=I.deletions;P===null?(I.deletions=[x],I.flags|=16):P.push(x)}}function s(I,x){if(!e)return null;for(;x!==null;)l(I,x),x=x.sibling;return null}function i(I,x){for(I=new Map;x!==null;)x.key!==null?I.set(x.key,x):I.set(x.index,x),x=x.sibling;return I}function n(I,x){return I=oi(I,x),I.index=0,I.sibling=null,I}function u(I,x,P){return I.index=P,e?(P=I.alternate,P!==null?(P=P.index,P<x?(I.flags|=2,x):P):(I.flags|=2,x)):(I.flags|=1048576,x)}function d(I){return e&&I.alternate===null&&(I.flags|=2),I}function h(I,x,P,$){return x===null||x.tag!==6?(x=gu(P,I.mode,$),x.return=I,x):(x=n(x,P),x.return=I,x)}function v(I,x,P,$){var ne=P.type;return ne===Ce?N(I,x,P.props.children,$,P.key):x!==null&&(x.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===De&&$r(ne)===x.type)?($=n(x,P.props),$.ref=Tt(I,x,P),$.return=I,$):($=ja(P.type,P.key,P.props,null,I.mode,$),$.ref=Tt(I,x,P),$.return=I,$)}function z(I,x,P,$){return x===null||x.tag!==4||x.stateNode.containerInfo!==P.containerInfo||x.stateNode.implementation!==P.implementation?(x=fu(P,I.mode,$),x.return=I,x):(x=n(x,P.children||[]),x.return=I,x)}function N(I,x,P,$,ne){return x===null||x.tag!==7?(x=Ci(P,I.mode,$,ne),x.return=I,x):(x=n(x,P),x.return=I,x)}function F(I,x,P){if(typeof x=="string"&&x!==""||typeof x=="number")return x=gu(""+x,I.mode,P),x.return=I,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case re:return P=ja(x.type,x.key,x.props,null,I.mode,P),P.ref=Tt(I,null,x),P.return=I,P;case ve:return x=fu(x,I.mode,P),x.return=I,x;case De:var $=x._init;return F(I,$(x._payload),P)}if(qs(x)||Q(x))return x=Ci(x,I.mode,P,null),x.return=I,x;Vn(I,x)}return null}function O(I,x,P,$){var ne=x!==null?x.key:null;if(typeof P=="string"&&P!==""||typeof P=="number")return ne!==null?null:h(I,x,""+P,$);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case re:return P.key===ne?v(I,x,P,$):null;case ve:return P.key===ne?z(I,x,P,$):null;case De:return ne=P._init,O(I,x,ne(P._payload),$)}if(qs(P)||Q(P))return ne!==null?null:N(I,x,P,$,null);Vn(I,P)}return null}function ee(I,x,P,$,ne){if(typeof $=="string"&&$!==""||typeof $=="number")return I=I.get(P)||null,h(x,I,""+$,ne);if(typeof $=="object"&&$!==null){switch($.$$typeof){case re:return I=I.get($.key===null?P:$.key)||null,v(x,I,$,ne);case ve:return I=I.get($.key===null?P:$.key)||null,z(x,I,$,ne);case De:var he=$._init;return ee(I,x,P,he($._payload),ne)}if(qs($)||Q($))return I=I.get(P)||null,N(x,I,$,ne,null);Vn(x,$)}return null}function se(I,x,P,$){for(var ne=null,he=null,_e=x,we=x=0,cl=null;_e!==null&&we<P.length;we++){_e.index>we?(cl=_e,_e=null):cl=_e.sibling;var Me=O(I,_e,P[we],$);if(Me===null){_e===null&&(_e=cl);break}e&&_e&&Me.alternate===null&&l(I,_e),x=u(Me,x,we),he===null?ne=Me:he.sibling=Me,he=Me,_e=cl}if(we===P.length)return s(I,_e),Ye&&Si(I,we),ne;if(_e===null){for(;we<P.length;we++)_e=F(I,P[we],$),_e!==null&&(x=u(_e,x,we),he===null?ne=_e:he.sibling=_e,he=_e);return Ye&&Si(I,we),ne}for(_e=i(I,_e);we<P.length;we++)cl=ee(_e,I,we,P[we],$),cl!==null&&(e&&cl.alternate!==null&&_e.delete(cl.key===null?we:cl.key),x=u(cl,x,we),he===null?ne=cl:he.sibling=cl,he=cl);return e&&_e.forEach(function(ui){return l(I,ui)}),Ye&&Si(I,we),ne}function te(I,x,P,$){var ne=Q(P);if(typeof ne!="function")throw Error(o(150));if(P=ne.call(P),P==null)throw Error(o(151));for(var he=ne=null,_e=x,we=x=0,cl=null,Me=P.next();_e!==null&&!Me.done;we++,Me=P.next()){_e.index>we?(cl=_e,_e=null):cl=_e.sibling;var ui=O(I,_e,Me.value,$);if(ui===null){_e===null&&(_e=cl);break}e&&_e&&ui.alternate===null&&l(I,_e),x=u(ui,x,we),he===null?ne=ui:he.sibling=ui,he=ui,_e=cl}if(Me.done)return s(I,_e),Ye&&Si(I,we),ne;if(_e===null){for(;!Me.done;we++,Me=P.next())Me=F(I,Me.value,$),Me!==null&&(x=u(Me,x,we),he===null?ne=Me:he.sibling=Me,he=Me);return Ye&&Si(I,we),ne}for(_e=i(I,_e);!Me.done;we++,Me=P.next())Me=ee(_e,I,we,Me.value,$),Me!==null&&(e&&Me.alternate!==null&&_e.delete(Me.key===null?we:Me.key),x=u(Me,x,we),he===null?ne=Me:he.sibling=Me,he=Me);return e&&_e.forEach(function(kf){return l(I,kf)}),Ye&&Si(I,we),ne}function sl(I,x,P,$){if(typeof P=="object"&&P!==null&&P.type===Ce&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case re:e:{for(var ne=P.key,he=x;he!==null;){if(he.key===ne){if(ne=P.type,ne===Ce){if(he.tag===7){s(I,he.sibling),x=n(he,P.props.children),x.return=I,I=x;break e}}else if(he.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===De&&$r(ne)===he.type){s(I,he.sibling),x=n(he,P.props),x.ref=Tt(I,he,P),x.return=I,I=x;break e}s(I,he);break}else l(I,he);he=he.sibling}P.type===Ce?(x=Ci(P.props.children,I.mode,$,P.key),x.return=I,I=x):($=ja(P.type,P.key,P.props,null,I.mode,$),$.ref=Tt(I,x,P),$.return=I,I=$)}return d(I);case ve:e:{for(he=P.key;x!==null;){if(x.key===he)if(x.tag===4&&x.stateNode.containerInfo===P.containerInfo&&x.stateNode.implementation===P.implementation){s(I,x.sibling),x=n(x,P.children||[]),x.return=I,I=x;break e}else{s(I,x);break}else l(I,x);x=x.sibling}x=fu(P,I.mode,$),x.return=I,I=x}return d(I);case De:return he=P._init,sl(I,x,he(P._payload),$)}if(qs(P))return se(I,x,P,$);if(Q(P))return te(I,x,P,$);Vn(I,P)}return typeof P=="string"&&P!==""||typeof P=="number"?(P=""+P,x!==null&&x.tag===6?(s(I,x.sibling),x=n(x,P),x.return=I,I=x):(s(I,x),x=gu(P,I.mode,$),x.return=I,I=x),d(I)):s(I,x)}return sl}var lt=Vr(!0),Kr=Vr(!1),Kn=Ys(null),Qn=null,st=null,yo=null;function Eo(){yo=st=Qn=null}function ko(e){var l=Kn.current;Qe(Kn),e._currentValue=l}function bo(e,l,s){for(;e!==null;){var i=e.alternate;if((e.childLanes&l)!==l?(e.childLanes|=l,i!==null&&(i.childLanes|=l)):i!==null&&(i.childLanes&l)!==l&&(i.childLanes|=l),e===s)break;e=e.return}}function it(e,l){Qn=e,yo=st=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&l)!==0&&(Il=!0),e.firstContext=null)}function Nl(e){var l=e._currentValue;if(yo!==e)if(e={context:e,memoizedValue:l,next:null},st===null){if(Qn===null)throw Error(o(308));st=e,Qn.dependencies={lanes:0,firstContext:e}}else st=st.next=e;return l}var vi=null;function Co(e){vi===null?vi=[e]:vi.push(e)}function Qr(e,l,s,i){var n=l.interleaved;return n===null?(s.next=s,Co(l)):(s.next=n.next,n.next=s),l.interleaved=s,Ps(e,i)}function Ps(e,l){e.lanes|=l;var s=e.alternate;for(s!==null&&(s.lanes|=l),s=e,e=e.return;e!==null;)e.childLanes|=l,s=e.alternate,s!==null&&(s.childLanes|=l),s=e,e=e.return;return s.tag===3?s.stateNode:null}var ei=!1;function Lo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yr(e,l){e=e.updateQueue,l.updateQueue===e&&(l.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Js(e,l){return{eventTime:e,lane:l,tag:0,payload:null,callback:null,next:null}}function li(e,l,s){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Be&2)!==0){var n=i.pending;return n===null?l.next=l:(l.next=n.next,n.next=l),i.pending=l,Ps(e,s)}return n=i.interleaved,n===null?(l.next=l,Co(i)):(l.next=n.next,n.next=l),i.interleaved=l,Ps(e,s)}function Yn(e,l,s){if(l=l.updateQueue,l!==null&&(l=l.shared,(s&4194240)!==0)){var i=l.lanes;i&=e.pendingLanes,s|=i,l.lanes=s,Ra(e,s)}}function Xr(e,l){var s=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,s===i)){var n=null,u=null;if(s=s.firstBaseUpdate,s!==null){do{var d={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};u===null?n=u=d:u=u.next=d,s=s.next}while(s!==null);u===null?n=u=l:u=u.next=l}else n=u=l;s={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:i.shared,effects:i.effects},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=l:e.next=l,s.lastBaseUpdate=l}function Xn(e,l,s,i){var n=e.updateQueue;ei=!1;var u=n.firstBaseUpdate,d=n.lastBaseUpdate,h=n.shared.pending;if(h!==null){n.shared.pending=null;var v=h,z=v.next;v.next=null,d===null?u=z:d.next=z,d=v;var N=e.alternate;N!==null&&(N=N.updateQueue,h=N.lastBaseUpdate,h!==d&&(h===null?N.firstBaseUpdate=z:h.next=z,N.lastBaseUpdate=v))}if(u!==null){var F=n.baseState;d=0,N=z=v=null,h=u;do{var O=h.lane,ee=h.eventTime;if((i&O)===O){N!==null&&(N=N.next={eventTime:ee,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var se=e,te=h;switch(O=l,ee=s,te.tag){case 1:if(se=te.payload,typeof se=="function"){F=se.call(ee,F,O);break e}F=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=te.payload,O=typeof se=="function"?se.call(ee,F,O):se,O==null)break e;F=V({},F,O);break e;case 2:ei=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,O=n.effects,O===null?n.effects=[h]:O.push(h))}else ee={eventTime:ee,lane:O,tag:h.tag,payload:h.payload,callback:h.callback,next:null},N===null?(z=N=ee,v=F):N=N.next=ee,d|=O;if(h=h.next,h===null){if(h=n.shared.pending,h===null)break;O=h,h=O.next,O.next=null,n.lastBaseUpdate=O,n.shared.pending=null}}while(!0);if(N===null&&(v=F),n.baseState=v,n.firstBaseUpdate=z,n.lastBaseUpdate=N,l=n.shared.interleaved,l!==null){n=l;do d|=n.lane,n=n.next;while(n!==l)}else u===null&&(n.shared.lanes=0);yi|=d,e.lanes=d,e.memoizedState=F}}function Zr(e,l,s){if(e=l.effects,l.effects=null,e!==null)for(l=0;l<e.length;l++){var i=e[l],n=i.callback;if(n!==null){if(i.callback=null,i=s,typeof n!="function")throw Error(o(191,n));n.call(i)}}}var Rt={},gs=Ys(Rt),Ot=Ys(Rt),Nt=Ys(Rt);function wi(e){if(e===Rt)throw Error(o(174));return e}function Io(e,l){switch($e(Nt,l),$e(Ot,e),$e(gs,Rt),e=l.nodeType,e){case 9:case 11:l=(l=l.documentElement)?l.namespaceURI:Ji(null,"");break;default:e=e===8?l.parentNode:l,l=e.namespaceURI||null,e=e.tagName,l=Ji(l,e)}Qe(gs),$e(gs,l)}function tt(){Qe(gs),Qe(Ot),Qe(Nt)}function ec(e){wi(Nt.current);var l=wi(gs.current),s=Ji(l,e.type);l!==s&&($e(Ot,e),$e(gs,s))}function Go(e){Ot.current===e&&(Qe(gs),Qe(Ot))}var Xe=Ys(0);function Zn(e){for(var l=e;l!==null;){if(l.tag===13){var s=l.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return l}else if(l.tag===19&&l.memoizedProps.revealOrder!==void 0){if((l.flags&128)!==0)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break;for(;l.sibling===null;){if(l.return===null||l.return===e)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var Po=[];function Jo(){for(var e=0;e<Po.length;e++)Po[e]._workInProgressVersionPrimary=null;Po.length=0}var ea=pe.ReactCurrentDispatcher,zo=pe.ReactCurrentBatchConfig,xi=0,Ze=null,al=null,ul=null,la=!1,Ft=!1,Dt=0,Wg=0;function _l(){throw Error(o(321))}function Uo(e,l){if(l===null)return!1;for(var s=0;s<l.length&&s<e.length;s++)if(!ss(e[s],l[s]))return!1;return!0}function qo(e,l,s,i,n,u){if(xi=u,Ze=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,ea.current=e===null||e.memoizedState===null?Qg:Yg,e=s(i,n),Ft){u=0;do{if(Ft=!1,Dt=0,25<=u)throw Error(o(301));u+=1,ul=al=null,l.updateQueue=null,ea.current=Xg,e=s(i,n)}while(Ft)}if(ea.current=ta,l=al!==null&&al.next!==null,xi=0,ul=al=Ze=null,la=!1,l)throw Error(o(300));return e}function Bo(){var e=Dt!==0;return Dt=0,e}function fs(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ul===null?Ze.memoizedState=ul=e:ul=ul.next=e,ul}function Fl(){if(al===null){var e=Ze.alternate;e=e!==null?e.memoizedState:null}else e=al.next;var l=ul===null?Ze.memoizedState:ul.next;if(l!==null)ul=l,al=e;else{if(e===null)throw Error(o(310));al=e,e={memoizedState:al.memoizedState,baseState:al.baseState,baseQueue:al.baseQueue,queue:al.queue,next:null},ul===null?Ze.memoizedState=ul=e:ul=ul.next=e}return ul}function Wt(e,l){return typeof l=="function"?l(e):l}function Ao(e){var l=Fl(),s=l.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=e;var i=al,n=i.baseQueue,u=s.pending;if(u!==null){if(n!==null){var d=n.next;n.next=u.next,u.next=d}i.baseQueue=n=u,s.pending=null}if(n!==null){u=n.next,i=i.baseState;var h=d=null,v=null,z=u;do{var N=z.lane;if((xi&N)===N)v!==null&&(v=v.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),i=z.hasEagerState?z.eagerState:e(i,z.action);else{var F={lane:N,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};v===null?(h=v=F,d=i):v=v.next=F,Ze.lanes|=N,yi|=N}z=z.next}while(z!==null&&z!==u);v===null?d=i:v.next=h,ss(i,l.memoizedState)||(Il=!0),l.memoizedState=i,l.baseState=d,l.baseQueue=v,s.lastRenderedState=i}if(e=s.interleaved,e!==null){n=e;do u=n.lane,Ze.lanes|=u,yi|=u,n=n.next;while(n!==e)}else n===null&&(s.lanes=0);return[l.memoizedState,s.dispatch]}function Mo(e){var l=Fl(),s=l.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=e;var i=s.dispatch,n=s.pending,u=l.memoizedState;if(n!==null){s.pending=null;var d=n=n.next;do u=e(u,d.action),d=d.next;while(d!==n);ss(u,l.memoizedState)||(Il=!0),l.memoizedState=u,l.baseQueue===null&&(l.baseState=u),s.lastRenderedState=u}return[u,i]}function lc(){}function sc(e,l){var s=Ze,i=Fl(),n=l(),u=!ss(i.memoizedState,n);if(u&&(i.memoizedState=n,Il=!0),i=i.queue,Ho(nc.bind(null,s,i,e),[e]),i.getSnapshot!==l||u||ul!==null&&ul.memoizedState.tag&1){if(s.flags|=2048,$t(9,tc.bind(null,s,i,n,l),void 0,null),rl===null)throw Error(o(349));(xi&30)!==0||ic(s,l,n)}return n}function ic(e,l,s){e.flags|=16384,e={getSnapshot:l,value:s},l=Ze.updateQueue,l===null?(l={lastEffect:null,stores:null},Ze.updateQueue=l,l.stores=[e]):(s=l.stores,s===null?l.stores=[e]:s.push(e))}function tc(e,l,s,i){l.value=s,l.getSnapshot=i,ac(l)&&oc(e)}function nc(e,l,s){return s(function(){ac(l)&&oc(e)})}function ac(e){var l=e.getSnapshot;e=e.value;try{var s=l();return!ss(e,s)}catch{return!0}}function oc(e){var l=Ps(e,1);l!==null&&os(l,e,1,-1)}function uc(e){var l=fs();return typeof e=="function"&&(e=e()),l.memoizedState=l.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:e},l.queue=e,e=e.dispatch=Kg.bind(null,Ze,e),[l.memoizedState,e]}function $t(e,l,s,i){return e={tag:e,create:l,destroy:s,deps:i,next:null},l=Ze.updateQueue,l===null?(l={lastEffect:null,stores:null},Ze.updateQueue=l,l.lastEffect=e.next=e):(s=l.lastEffect,s===null?l.lastEffect=e.next=e:(i=s.next,s.next=e,e.next=i,l.lastEffect=e)),e}function rc(){return Fl().memoizedState}function sa(e,l,s,i){var n=fs();Ze.flags|=e,n.memoizedState=$t(1|l,s,void 0,i===void 0?null:i)}function ia(e,l,s,i){var n=Fl();i=i===void 0?null:i;var u=void 0;if(al!==null){var d=al.memoizedState;if(u=d.destroy,i!==null&&Uo(i,d.deps)){n.memoizedState=$t(l,s,u,i);return}}Ze.flags|=e,n.memoizedState=$t(1|l,s,u,i)}function cc(e,l){return sa(8390656,8,e,l)}function Ho(e,l){return ia(2048,8,e,l)}function pc(e,l){return ia(4,2,e,l)}function dc(e,l){return ia(4,4,e,l)}function gc(e,l){if(typeof l=="function")return e=e(),l(e),function(){l(null)};if(l!=null)return e=e(),l.current=e,function(){l.current=null}}function fc(e,l,s){return s=s!=null?s.concat([e]):null,ia(4,4,gc.bind(null,l,e),s)}function To(){}function mc(e,l){var s=Fl();l=l===void 0?null:l;var i=s.memoizedState;return i!==null&&l!==null&&Uo(l,i[1])?i[0]:(s.memoizedState=[e,l],e)}function hc(e,l){var s=Fl();l=l===void 0?null:l;var i=s.memoizedState;return i!==null&&l!==null&&Uo(l,i[1])?i[0]:(e=e(),s.memoizedState=[e,l],e)}function _c(e,l,s){return(xi&21)===0?(e.baseState&&(e.baseState=!1,Il=!0),e.memoizedState=s):(ss(s,l)||(s=kn(),Ze.lanes|=s,yi|=s,e.baseState=!0),l)}function $g(e,l){var s=Fe;Fe=s!==0&&4>s?s:4,e(!0);var i=zo.transition;zo.transition={};try{e(!1),l()}finally{Fe=s,zo.transition=i}}function jc(){return Fl().memoizedState}function Vg(e,l,s){var i=ni(e);if(s={lane:i,action:s,hasEagerState:!1,eagerState:null,next:null},Sc(e))vc(l,s);else if(s=Qr(e,l,s,i),s!==null){var n=El();os(s,e,i,n),wc(s,l,i)}}function Kg(e,l,s){var i=ni(e),n={lane:i,action:s,hasEagerState:!1,eagerState:null,next:null};if(Sc(e))vc(l,n);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=l.lastRenderedReducer,u!==null))try{var d=l.lastRenderedState,h=u(d,s);if(n.hasEagerState=!0,n.eagerState=h,ss(h,d)){var v=l.interleaved;v===null?(n.next=n,Co(l)):(n.next=v.next,v.next=n),l.interleaved=n;return}}catch{}finally{}s=Qr(e,l,n,i),s!==null&&(n=El(),os(s,e,i,n),wc(s,l,i))}}function Sc(e){var l=e.alternate;return e===Ze||l!==null&&l===Ze}function vc(e,l){Ft=la=!0;var s=e.pending;s===null?l.next=l:(l.next=s.next,s.next=l),e.pending=l}function wc(e,l,s){if((s&4194240)!==0){var i=l.lanes;i&=e.pendingLanes,s|=i,l.lanes=s,Ra(e,s)}}var ta={readContext:Nl,useCallback:_l,useContext:_l,useEffect:_l,useImperativeHandle:_l,useInsertionEffect:_l,useLayoutEffect:_l,useMemo:_l,useReducer:_l,useRef:_l,useState:_l,useDebugValue:_l,useDeferredValue:_l,useTransition:_l,useMutableSource:_l,useSyncExternalStore:_l,useId:_l,unstable_isNewReconciler:!1},Qg={readContext:Nl,useCallback:function(e,l){return fs().memoizedState=[e,l===void 0?null:l],e},useContext:Nl,useEffect:cc,useImperativeHandle:function(e,l,s){return s=s!=null?s.concat([e]):null,sa(4194308,4,gc.bind(null,l,e),s)},useLayoutEffect:function(e,l){return sa(4194308,4,e,l)},useInsertionEffect:function(e,l){return sa(4,2,e,l)},useMemo:function(e,l){var s=fs();return l=l===void 0?null:l,e=e(),s.memoizedState=[e,l],e},useReducer:function(e,l,s){var i=fs();return l=s!==void 0?s(l):l,i.memoizedState=i.baseState=l,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=Vg.bind(null,Ze,e),[i.memoizedState,e]},useRef:function(e){var l=fs();return e={current:e},l.memoizedState=e},useState:uc,useDebugValue:To,useDeferredValue:function(e){return fs().memoizedState=e},useTransition:function(){var e=uc(!1),l=e[0];return e=$g.bind(null,e[1]),fs().memoizedState=e,[l,e]},useMutableSource:function(){},useSyncExternalStore:function(e,l,s){var i=Ze,n=fs();if(Ye){if(s===void 0)throw Error(o(407));s=s()}else{if(s=l(),rl===null)throw Error(o(349));(xi&30)!==0||ic(i,l,s)}n.memoizedState=s;var u={value:s,getSnapshot:l};return n.queue=u,cc(nc.bind(null,i,u,e),[e]),i.flags|=2048,$t(9,tc.bind(null,i,u,s,l),void 0,null),s},useId:function(){var e=fs(),l=rl.identifierPrefix;if(Ye){var s=Gs,i=Is;s=(i&~(1<<32-fl(i)-1)).toString(32)+s,l=":"+l+"R"+s,s=Dt++,0<s&&(l+="H"+s.toString(32)),l+=":"}else s=Wg++,l=":"+l+"r"+s.toString(32)+":";return e.memoizedState=l},unstable_isNewReconciler:!1},Yg={readContext:Nl,useCallback:mc,useContext:Nl,useEffect:Ho,useImperativeHandle:fc,useInsertionEffect:pc,useLayoutEffect:dc,useMemo:hc,useReducer:Ao,useRef:rc,useState:function(){return Ao(Wt)},useDebugValue:To,useDeferredValue:function(e){var l=Fl();return _c(l,al.memoizedState,e)},useTransition:function(){var e=Ao(Wt)[0],l=Fl().memoizedState;return[e,l]},useMutableSource:lc,useSyncExternalStore:sc,useId:jc,unstable_isNewReconciler:!1},Xg={readContext:Nl,useCallback:mc,useContext:Nl,useEffect:Ho,useImperativeHandle:fc,useInsertionEffect:pc,useLayoutEffect:dc,useMemo:hc,useReducer:Mo,useRef:rc,useState:function(){return Mo(Wt)},useDebugValue:To,useDeferredValue:function(e){var l=Fl();return al===null?l.memoizedState=e:_c(l,al.memoizedState,e)},useTransition:function(){var e=Mo(Wt)[0],l=Fl().memoizedState;return[e,l]},useMutableSource:lc,useSyncExternalStore:sc,useId:jc,unstable_isNewReconciler:!1};function ts(e,l){if(e&&e.defaultProps){l=V({},l),e=e.defaultProps;for(var s in e)l[s]===void 0&&(l[s]=e[s]);return l}return l}function Ro(e,l,s,i){l=e.memoizedState,s=s(i,l),s=s==null?l:V({},l,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var na={isMounted:function(e){return(e=e._reactInternals)?Y(e)===e:!1},enqueueSetState:function(e,l,s){e=e._reactInternals;var i=El(),n=ni(e),u=Js(i,n);u.payload=l,s!=null&&(u.callback=s),l=li(e,u,n),l!==null&&(os(l,e,n,i),Yn(l,e,n))},enqueueReplaceState:function(e,l,s){e=e._reactInternals;var i=El(),n=ni(e),u=Js(i,n);u.tag=1,u.payload=l,s!=null&&(u.callback=s),l=li(e,u,n),l!==null&&(os(l,e,n,i),Yn(l,e,n))},enqueueForceUpdate:function(e,l){e=e._reactInternals;var s=El(),i=ni(e),n=Js(s,i);n.tag=2,l!=null&&(n.callback=l),l=li(e,n,i),l!==null&&(os(l,e,i,s),Yn(l,e,i))}};function xc(e,l,s,i,n,u,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,u,d):l.prototype&&l.prototype.isPureReactComponent?!zt(s,i)||!zt(n,u):!0}function yc(e,l,s){var i=!1,n=Xs,u=l.contextType;return typeof u=="object"&&u!==null?u=Nl(u):(n=Ll(l)?_i:hl.current,i=l.contextTypes,u=(i=i!=null)?Yi(e,n):Xs),l=new l(s,u),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=na,e.stateNode=l,l._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=u),l}function Ec(e,l,s,i){e=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(s,i),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(s,i),l.state!==e&&na.enqueueReplaceState(l,l.state,null)}function Oo(e,l,s,i){var n=e.stateNode;n.props=s,n.state=e.memoizedState,n.refs={},Lo(e);var u=l.contextType;typeof u=="object"&&u!==null?n.context=Nl(u):(u=Ll(l)?_i:hl.current,n.context=Yi(e,u)),n.state=e.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(Ro(e,l,u,s),n.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(l=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),l!==n.state&&na.enqueueReplaceState(n,n.state,null),Xn(e,s,n,i),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308)}function nt(e,l){try{var s="",i=l;do s+=xe(i),i=i.return;while(i);var n=s}catch(u){n=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:l,stack:n,digest:null}}function No(e,l,s){return{value:e,source:null,stack:s??null,digest:l??null}}function Fo(e,l){try{console.error(l.value)}catch(s){setTimeout(function(){throw s})}}var Zg=typeof WeakMap=="function"?WeakMap:Map;function kc(e,l,s){s=Js(-1,s),s.tag=3,s.payload={element:null};var i=l.value;return s.callback=function(){da||(da=!0,nu=i),Fo(e,l)},s}function bc(e,l,s){s=Js(-1,s),s.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var n=l.value;s.payload=function(){return i(n)},s.callback=function(){Fo(e,l)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(s.callback=function(){Fo(e,l),typeof i!="function"&&(ii===null?ii=new Set([this]):ii.add(this));var d=l.stack;this.componentDidCatch(l.value,{componentStack:d!==null?d:""})}),s}function Cc(e,l,s){var i=e.pingCache;if(i===null){i=e.pingCache=new Zg;var n=new Set;i.set(l,n)}else n=i.get(l),n===void 0&&(n=new Set,i.set(l,n));n.has(s)||(n.add(s),e=ff.bind(null,e,l,s),l.then(e,e))}function Lc(e){do{var l;if((l=e.tag===13)&&(l=e.memoizedState,l=l!==null?l.dehydrated!==null:!0),l)return e;e=e.return}while(e!==null);return null}function Ic(e,l,s,i,n){return(e.mode&1)===0?(e===l?e.flags|=65536:(e.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(l=Js(-1,1),l.tag=2,li(s,l,1))),s.lanes|=1),e):(e.flags|=65536,e.lanes=n,e)}var ef=pe.ReactCurrentOwner,Il=!1;function yl(e,l,s,i){l.child=e===null?Kr(l,null,s,i):lt(l,e.child,s,i)}function Gc(e,l,s,i,n){s=s.render;var u=l.ref;return it(l,n),i=qo(e,l,s,i,u,n),s=Bo(),e!==null&&!Il?(l.updateQueue=e.updateQueue,l.flags&=-2053,e.lanes&=~n,zs(e,l,n)):(Ye&&s&&jo(l),l.flags|=1,yl(e,l,i,n),l.child)}function Pc(e,l,s,i,n){if(e===null){var u=s.type;return typeof u=="function"&&!du(u)&&u.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(l.tag=15,l.type=u,Jc(e,l,u,i,n)):(e=ja(s.type,null,i,l,l.mode,n),e.ref=l.ref,e.return=l,l.child=e)}if(u=e.child,(e.lanes&n)===0){var d=u.memoizedProps;if(s=s.compare,s=s!==null?s:zt,s(d,i)&&e.ref===l.ref)return zs(e,l,n)}return l.flags|=1,e=oi(u,i),e.ref=l.ref,e.return=l,l.child=e}function Jc(e,l,s,i,n){if(e!==null){var u=e.memoizedProps;if(zt(u,i)&&e.ref===l.ref)if(Il=!1,l.pendingProps=i=u,(e.lanes&n)!==0)(e.flags&131072)!==0&&(Il=!0);else return l.lanes=e.lanes,zs(e,l,n)}return Do(e,l,s,i,n)}function zc(e,l,s){var i=l.pendingProps,n=i.children,u=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((l.mode&1)===0)l.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(ot,Ml),Ml|=s;else{if((s&1073741824)===0)return e=u!==null?u.baseLanes|s:s,l.lanes=l.childLanes=1073741824,l.memoizedState={baseLanes:e,cachePool:null,transitions:null},l.updateQueue=null,$e(ot,Ml),Ml|=e,null;l.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=u!==null?u.baseLanes:s,$e(ot,Ml),Ml|=i}else u!==null?(i=u.baseLanes|s,l.memoizedState=null):i=s,$e(ot,Ml),Ml|=i;return yl(e,l,n,s),l.child}function Uc(e,l){var s=l.ref;(e===null&&s!==null||e!==null&&e.ref!==s)&&(l.flags|=512,l.flags|=2097152)}function Do(e,l,s,i,n){var u=Ll(s)?_i:hl.current;return u=Yi(l,u),it(l,n),s=qo(e,l,s,i,u,n),i=Bo(),e!==null&&!Il?(l.updateQueue=e.updateQueue,l.flags&=-2053,e.lanes&=~n,zs(e,l,n)):(Ye&&i&&jo(l),l.flags|=1,yl(e,l,s,n),l.child)}function qc(e,l,s,i,n){if(Ll(s)){var u=!0;Nn(l)}else u=!1;if(it(l,n),l.stateNode===null)oa(e,l),yc(l,s,i),Oo(l,s,i,n),i=!0;else if(e===null){var d=l.stateNode,h=l.memoizedProps;d.props=h;var v=d.context,z=s.contextType;typeof z=="object"&&z!==null?z=Nl(z):(z=Ll(s)?_i:hl.current,z=Yi(l,z));var N=s.getDerivedStateFromProps,F=typeof N=="function"||typeof d.getSnapshotBeforeUpdate=="function";F||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==i||v!==z)&&Ec(l,d,i,z),ei=!1;var O=l.memoizedState;d.state=O,Xn(l,i,d,n),v=l.memoizedState,h!==i||O!==v||Cl.current||ei?(typeof N=="function"&&(Ro(l,s,N,i),v=l.memoizedState),(h=ei||xc(l,s,h,i,O,v,z))?(F||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(l.flags|=4194308)):(typeof d.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=i,l.memoizedState=v),d.props=i,d.state=v,d.context=z,i=h):(typeof d.componentDidMount=="function"&&(l.flags|=4194308),i=!1)}else{d=l.stateNode,Yr(e,l),h=l.memoizedProps,z=l.type===l.elementType?h:ts(l.type,h),d.props=z,F=l.pendingProps,O=d.context,v=s.contextType,typeof v=="object"&&v!==null?v=Nl(v):(v=Ll(s)?_i:hl.current,v=Yi(l,v));var ee=s.getDerivedStateFromProps;(N=typeof ee=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==F||O!==v)&&Ec(l,d,i,v),ei=!1,O=l.memoizedState,d.state=O,Xn(l,i,d,n);var se=l.memoizedState;h!==F||O!==se||Cl.current||ei?(typeof ee=="function"&&(Ro(l,s,ee,i),se=l.memoizedState),(z=ei||xc(l,s,z,i,O,se,v)||!1)?(N||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(i,se,v),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(i,se,v)),typeof d.componentDidUpdate=="function"&&(l.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof d.componentDidUpdate!="function"||h===e.memoizedProps&&O===e.memoizedState||(l.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&O===e.memoizedState||(l.flags|=1024),l.memoizedProps=i,l.memoizedState=se),d.props=i,d.state=se,d.context=v,i=z):(typeof d.componentDidUpdate!="function"||h===e.memoizedProps&&O===e.memoizedState||(l.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&O===e.memoizedState||(l.flags|=1024),i=!1)}return Wo(e,l,s,i,u,n)}function Wo(e,l,s,i,n,u){Uc(e,l);var d=(l.flags&128)!==0;if(!i&&!d)return n&&Tr(l,s,!1),zs(e,l,u);i=l.stateNode,ef.current=l;var h=d&&typeof s.getDerivedStateFromError!="function"?null:i.render();return l.flags|=1,e!==null&&d?(l.child=lt(l,e.child,null,u),l.child=lt(l,null,h,u)):yl(e,l,h,u),l.memoizedState=i.state,n&&Tr(l,s,!0),l.child}function Bc(e){var l=e.stateNode;l.pendingContext?Mr(e,l.pendingContext,l.pendingContext!==l.context):l.context&&Mr(e,l.context,!1),Io(e,l.containerInfo)}function Ac(e,l,s,i,n){return et(),xo(n),l.flags|=256,yl(e,l,s,i),l.child}var $o={dehydrated:null,treeContext:null,retryLane:0};function Vo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mc(e,l,s){var i=l.pendingProps,n=Xe.current,u=!1,d=(l.flags&128)!==0,h;if((h=d)||(h=e!==null&&e.memoizedState===null?!1:(n&2)!==0),h?(u=!0,l.flags&=-129):(e===null||e.memoizedState!==null)&&(n|=1),$e(Xe,n&1),e===null)return wo(l),e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((l.mode&1)===0?l.lanes=1:e.data==="$!"?l.lanes=8:l.lanes=1073741824,null):(d=i.children,e=i.fallback,u?(i=l.mode,u=l.child,d={mode:"hidden",children:d},(i&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=d):u=Sa(d,i,0,null),e=Ci(e,i,s,null),u.return=l,e.return=l,u.sibling=e,l.child=u,l.child.memoizedState=Vo(s),l.memoizedState=$o,e):Ko(l,d));if(n=e.memoizedState,n!==null&&(h=n.dehydrated,h!==null))return lf(e,l,d,i,h,n,s);if(u){u=i.fallback,d=l.mode,n=e.child,h=n.sibling;var v={mode:"hidden",children:i.children};return(d&1)===0&&l.child!==n?(i=l.child,i.childLanes=0,i.pendingProps=v,l.deletions=null):(i=oi(n,v),i.subtreeFlags=n.subtreeFlags&14680064),h!==null?u=oi(h,u):(u=Ci(u,d,s,null),u.flags|=2),u.return=l,i.return=l,i.sibling=u,l.child=i,i=u,u=l.child,d=e.child.memoizedState,d=d===null?Vo(s):{baseLanes:d.baseLanes|s,cachePool:null,transitions:d.transitions},u.memoizedState=d,u.childLanes=e.childLanes&~s,l.memoizedState=$o,i}return u=e.child,e=u.sibling,i=oi(u,{mode:"visible",children:i.children}),(l.mode&1)===0&&(i.lanes=s),i.return=l,i.sibling=null,e!==null&&(s=l.deletions,s===null?(l.deletions=[e],l.flags|=16):s.push(e)),l.child=i,l.memoizedState=null,i}function Ko(e,l){return l=Sa({mode:"visible",children:l},e.mode,0,null),l.return=e,e.child=l}function aa(e,l,s,i){return i!==null&&xo(i),lt(l,e.child,null,s),e=Ko(l,l.pendingProps.children),e.flags|=2,l.memoizedState=null,e}function lf(e,l,s,i,n,u,d){if(s)return l.flags&256?(l.flags&=-257,i=No(Error(o(422))),aa(e,l,d,i)):l.memoizedState!==null?(l.child=e.child,l.flags|=128,null):(u=i.fallback,n=l.mode,i=Sa({mode:"visible",children:i.children},n,0,null),u=Ci(u,n,d,null),u.flags|=2,i.return=l,u.return=l,i.sibling=u,l.child=i,(l.mode&1)!==0&&lt(l,e.child,null,d),l.child.memoizedState=Vo(d),l.memoizedState=$o,u);if((l.mode&1)===0)return aa(e,l,d,null);if(n.data==="$!"){if(i=n.nextSibling&&n.nextSibling.dataset,i)var h=i.dgst;return i=h,u=Error(o(419)),i=No(u,i,void 0),aa(e,l,d,i)}if(h=(d&e.childLanes)!==0,Il||h){if(i=rl,i!==null){switch(d&-d){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=(n&(i.suspendedLanes|d))!==0?0:n,n!==0&&n!==u.retryLane&&(u.retryLane=n,Ps(e,n),os(i,e,n,-1))}return pu(),i=No(Error(o(421))),aa(e,l,d,i)}return n.data==="$?"?(l.flags|=128,l.child=e.child,l=mf.bind(null,e),n._reactRetry=l,null):(e=u.treeContext,Al=Qs(n.nextSibling),Bl=l,Ye=!0,is=null,e!==null&&(Rl[Ol++]=Is,Rl[Ol++]=Gs,Rl[Ol++]=ji,Is=e.id,Gs=e.overflow,ji=l),l=Ko(l,i.children),l.flags|=4096,l)}function Hc(e,l,s){e.lanes|=l;var i=e.alternate;i!==null&&(i.lanes|=l),bo(e.return,l,s)}function Qo(e,l,s,i,n){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:i,tail:s,tailMode:n}:(u.isBackwards=l,u.rendering=null,u.renderingStartTime=0,u.last=i,u.tail=s,u.tailMode=n)}function Tc(e,l,s){var i=l.pendingProps,n=i.revealOrder,u=i.tail;if(yl(e,l,i.children,s),i=Xe.current,(i&2)!==0)i=i&1|2,l.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=l.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hc(e,s,l);else if(e.tag===19)Hc(e,s,l);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===l)break e;for(;e.sibling===null;){if(e.return===null||e.return===l)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if($e(Xe,i),(l.mode&1)===0)l.memoizedState=null;else switch(n){case"forwards":for(s=l.child,n=null;s!==null;)e=s.alternate,e!==null&&Zn(e)===null&&(n=s),s=s.sibling;s=n,s===null?(n=l.child,l.child=null):(n=s.sibling,s.sibling=null),Qo(l,!1,n,s,u);break;case"backwards":for(s=null,n=l.child,l.child=null;n!==null;){if(e=n.alternate,e!==null&&Zn(e)===null){l.child=n;break}e=n.sibling,n.sibling=s,s=n,n=e}Qo(l,!0,s,null,u);break;case"together":Qo(l,!1,null,null,void 0);break;default:l.memoizedState=null}return l.child}function oa(e,l){(l.mode&1)===0&&e!==null&&(e.alternate=null,l.alternate=null,l.flags|=2)}function zs(e,l,s){if(e!==null&&(l.dependencies=e.dependencies),yi|=l.lanes,(s&l.childLanes)===0)return null;if(e!==null&&l.child!==e.child)throw Error(o(153));if(l.child!==null){for(e=l.child,s=oi(e,e.pendingProps),l.child=s,s.return=l;e.sibling!==null;)e=e.sibling,s=s.sibling=oi(e,e.pendingProps),s.return=l;s.sibling=null}return l.child}function sf(e,l,s){switch(l.tag){case 3:Bc(l),et();break;case 5:ec(l);break;case 1:Ll(l.type)&&Nn(l);break;case 4:Io(l,l.stateNode.containerInfo);break;case 10:var i=l.type._context,n=l.memoizedProps.value;$e(Kn,i._currentValue),i._currentValue=n;break;case 13:if(i=l.memoizedState,i!==null)return i.dehydrated!==null?($e(Xe,Xe.current&1),l.flags|=128,null):(s&l.child.childLanes)!==0?Mc(e,l,s):($e(Xe,Xe.current&1),e=zs(e,l,s),e!==null?e.sibling:null);$e(Xe,Xe.current&1);break;case 19:if(i=(s&l.childLanes)!==0,(e.flags&128)!==0){if(i)return Tc(e,l,s);l.flags|=128}if(n=l.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),$e(Xe,Xe.current),i)break;return null;case 22:case 23:return l.lanes=0,zc(e,l,s)}return zs(e,l,s)}var Rc,Yo,Oc,Nc;Rc=function(e,l){for(var s=l.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===l)break;for(;s.sibling===null;){if(s.return===null||s.return===l)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Yo=function(){},Oc=function(e,l,s,i){var n=e.memoizedProps;if(n!==i){e=l.stateNode,wi(gs.current);var u=null;switch(s){case"input":n=kl(e,n),i=kl(e,i),u=[];break;case"select":n=V({},n,{value:void 0}),i=V({},i,{value:void 0}),u=[];break;case"textarea":n=_t(e,n),i=_t(e,i),u=[];break;default:typeof n.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Tn)}Ui(s,i);var d;s=null;for(z in n)if(!i.hasOwnProperty(z)&&n.hasOwnProperty(z)&&n[z]!=null)if(z==="style"){var h=n[z];for(d in h)h.hasOwnProperty(d)&&(s||(s={}),s[d]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(c.hasOwnProperty(z)?u||(u=[]):(u=u||[]).push(z,null));for(z in i){var v=i[z];if(h=n!=null?n[z]:void 0,i.hasOwnProperty(z)&&v!==h&&(v!=null||h!=null))if(z==="style")if(h){for(d in h)!h.hasOwnProperty(d)||v&&v.hasOwnProperty(d)||(s||(s={}),s[d]="");for(d in v)v.hasOwnProperty(d)&&h[d]!==v[d]&&(s||(s={}),s[d]=v[d])}else s||(u||(u=[]),u.push(z,s)),s=v;else z==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,h=h?h.__html:void 0,v!=null&&h!==v&&(u=u||[]).push(z,v)):z==="children"?typeof v!="string"&&typeof v!="number"||(u=u||[]).push(z,""+v):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(c.hasOwnProperty(z)?(v!=null&&z==="onScroll"&&Ke("scroll",e),u||h===v||(u=[])):(u=u||[]).push(z,v))}s&&(u=u||[]).push("style",s);var z=u;(l.updateQueue=z)&&(l.flags|=4)}},Nc=function(e,l,s,i){s!==i&&(l.flags|=4)};function Vt(e,l){if(!Ye)switch(e.tailMode){case"hidden":l=e.tail;for(var s=null;l!==null;)l.alternate!==null&&(s=l),l=l.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var i=null;s!==null;)s.alternate!==null&&(i=s),s=s.sibling;i===null?l||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function jl(e){var l=e.alternate!==null&&e.alternate.child===e.child,s=0,i=0;if(l)for(var n=e.child;n!==null;)s|=n.lanes|n.childLanes,i|=n.subtreeFlags&14680064,i|=n.flags&14680064,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)s|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=i,e.childLanes=s,l}function tf(e,l,s){var i=l.pendingProps;switch(So(l),l.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jl(l),null;case 1:return Ll(l.type)&&On(),jl(l),null;case 3:return i=l.stateNode,tt(),Qe(Cl),Qe(hl),Jo(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&($n(l)?l.flags|=4:e===null||e.memoizedState.isDehydrated&&(l.flags&256)===0||(l.flags|=1024,is!==null&&(uu(is),is=null))),Yo(e,l),jl(l),null;case 5:Go(l);var n=wi(Nt.current);if(s=l.type,e!==null&&l.stateNode!=null)Oc(e,l,s,i,n),e.ref!==l.ref&&(l.flags|=512,l.flags|=2097152);else{if(!i){if(l.stateNode===null)throw Error(o(166));return jl(l),null}if(e=wi(gs.current),$n(l)){i=l.stateNode,s=l.type;var u=l.memoizedProps;switch(i[ds]=l,i[Mt]=u,e=(l.mode&1)!==0,s){case"dialog":Ke("cancel",i),Ke("close",i);break;case"iframe":case"object":case"embed":Ke("load",i);break;case"video":case"audio":for(n=0;n<qt.length;n++)Ke(qt[n],i);break;case"source":Ke("error",i);break;case"img":case"image":case"link":Ke("error",i),Ke("load",i);break;case"details":Ke("toggle",i);break;case"input":rs(i,u),Ke("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!u.multiple},Ke("invalid",i);break;case"textarea":vn(i,u),Ke("invalid",i)}Ui(s,u),n=null;for(var d in u)if(u.hasOwnProperty(d)){var h=u[d];d==="children"?typeof h=="string"?i.textContent!==h&&(u.suppressHydrationWarning!==!0&&Hn(i.textContent,h,e),n=["children",h]):typeof h=="number"&&i.textContent!==""+h&&(u.suppressHydrationWarning!==!0&&Hn(i.textContent,h,e),n=["children",""+h]):c.hasOwnProperty(d)&&h!=null&&d==="onScroll"&&Ke("scroll",i)}switch(s){case"input":ke(i),Sn(i,u,!0);break;case"textarea":ke(i),cs(i);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(i.onclick=Tn)}i=n,l.updateQueue=i,i!==null&&(l.flags|=4)}else{d=n.nodeType===9?n:n.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=As(s)),e==="http://www.w3.org/1999/xhtml"?s==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=d.createElement(s,{is:i.is}):(e=d.createElement(s),s==="select"&&(d=e,i.multiple?d.multiple=!0:i.size&&(d.size=i.size))):e=d.createElementNS(e,s),e[ds]=l,e[Mt]=i,Rc(e,l,!1,!1),l.stateNode=e;e:{switch(d=qi(s,i),s){case"dialog":Ke("cancel",e),Ke("close",e),n=i;break;case"iframe":case"object":case"embed":Ke("load",e),n=i;break;case"video":case"audio":for(n=0;n<qt.length;n++)Ke(qt[n],e);n=i;break;case"source":Ke("error",e),n=i;break;case"img":case"image":case"link":Ke("error",e),Ke("load",e),n=i;break;case"details":Ke("toggle",e),n=i;break;case"input":rs(e,i),n=kl(e,i),Ke("invalid",e);break;case"option":n=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},n=V({},i,{value:void 0}),Ke("invalid",e);break;case"textarea":vn(e,i),n=_t(e,i),Ke("invalid",e);break;default:n=i}Ui(s,n),h=n;for(u in h)if(h.hasOwnProperty(u)){var v=h[u];u==="style"?xn(e,v):u==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,v!=null&&Tl(e,v)):u==="children"?typeof v=="string"?(s!=="textarea"||v!=="")&&wl(e,v):typeof v=="number"&&wl(e,""+v):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(c.hasOwnProperty(u)?v!=null&&u==="onScroll"&&Ke("scroll",e):v!=null&&X(e,u,v,d))}switch(s){case"input":ke(e),Sn(e,i,!1);break;case"textarea":ke(e),cs(e);break;case"option":i.value!=null&&e.setAttribute("value",""+k(i.value));break;case"select":e.multiple=!!i.multiple,u=i.value,u!=null?Bs(e,!!i.multiple,u,!1):i.defaultValue!=null&&Bs(e,!!i.multiple,i.defaultValue,!0);break;default:typeof n.onClick=="function"&&(e.onclick=Tn)}switch(s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(l.flags|=4)}l.ref!==null&&(l.flags|=512,l.flags|=2097152)}return jl(l),null;case 6:if(e&&l.stateNode!=null)Nc(e,l,e.memoizedProps,i);else{if(typeof i!="string"&&l.stateNode===null)throw Error(o(166));if(s=wi(Nt.current),wi(gs.current),$n(l)){if(i=l.stateNode,s=l.memoizedProps,i[ds]=l,(u=i.nodeValue!==s)&&(e=Bl,e!==null))switch(e.tag){case 3:Hn(i.nodeValue,s,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hn(i.nodeValue,s,(e.mode&1)!==0)}u&&(l.flags|=4)}else i=(s.nodeType===9?s:s.ownerDocument).createTextNode(i),i[ds]=l,l.stateNode=i}return jl(l),null;case 13:if(Qe(Xe),i=l.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ye&&Al!==null&&(l.mode&1)!==0&&(l.flags&128)===0)Wr(),et(),l.flags|=98560,u=!1;else if(u=$n(l),i!==null&&i.dehydrated!==null){if(e===null){if(!u)throw Error(o(318));if(u=l.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[ds]=l}else et(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;jl(l),u=!1}else is!==null&&(uu(is),is=null),u=!0;if(!u)return l.flags&65536?l:null}return(l.flags&128)!==0?(l.lanes=s,l):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(l.child.flags|=8192,(l.mode&1)!==0&&(e===null||(Xe.current&1)!==0?ol===0&&(ol=3):pu())),l.updateQueue!==null&&(l.flags|=4),jl(l),null);case 4:return tt(),Yo(e,l),e===null&&Bt(l.stateNode.containerInfo),jl(l),null;case 10:return ko(l.type._context),jl(l),null;case 17:return Ll(l.type)&&On(),jl(l),null;case 19:if(Qe(Xe),u=l.memoizedState,u===null)return jl(l),null;if(i=(l.flags&128)!==0,d=u.rendering,d===null)if(i)Vt(u,!1);else{if(ol!==0||e!==null&&(e.flags&128)!==0)for(e=l.child;e!==null;){if(d=Zn(e),d!==null){for(l.flags|=128,Vt(u,!1),i=d.updateQueue,i!==null&&(l.updateQueue=i,l.flags|=4),l.subtreeFlags=0,i=s,s=l.child;s!==null;)u=s,e=i,u.flags&=14680066,d=u.alternate,d===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=d.childLanes,u.lanes=d.lanes,u.child=d.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=d.memoizedProps,u.memoizedState=d.memoizedState,u.updateQueue=d.updateQueue,u.type=d.type,e=d.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),s=s.sibling;return $e(Xe,Xe.current&1|2),l.child}e=e.sibling}u.tail!==null&&Ue()>ut&&(l.flags|=128,i=!0,Vt(u,!1),l.lanes=4194304)}else{if(!i)if(e=Zn(d),e!==null){if(l.flags|=128,i=!0,s=e.updateQueue,s!==null&&(l.updateQueue=s,l.flags|=4),Vt(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Ye)return jl(l),null}else 2*Ue()-u.renderingStartTime>ut&&s!==1073741824&&(l.flags|=128,i=!0,Vt(u,!1),l.lanes=4194304);u.isBackwards?(d.sibling=l.child,l.child=d):(s=u.last,s!==null?s.sibling=d:l.child=d,u.last=d)}return u.tail!==null?(l=u.tail,u.rendering=l,u.tail=l.sibling,u.renderingStartTime=Ue(),l.sibling=null,s=Xe.current,$e(Xe,i?s&1|2:s&1),l):(jl(l),null);case 22:case 23:return cu(),i=l.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(l.flags|=8192),i&&(l.mode&1)!==0?(Ml&1073741824)!==0&&(jl(l),l.subtreeFlags&6&&(l.flags|=8192)):jl(l),null;case 24:return null;case 25:return null}throw Error(o(156,l.tag))}function nf(e,l){switch(So(l),l.tag){case 1:return Ll(l.type)&&On(),e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 3:return tt(),Qe(Cl),Qe(hl),Jo(),e=l.flags,(e&65536)!==0&&(e&128)===0?(l.flags=e&-65537|128,l):null;case 5:return Go(l),null;case 13:if(Qe(Xe),e=l.memoizedState,e!==null&&e.dehydrated!==null){if(l.alternate===null)throw Error(o(340));et()}return e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 19:return Qe(Xe),null;case 4:return tt(),null;case 10:return ko(l.type._context),null;case 22:case 23:return cu(),null;case 24:return null;default:return null}}var ua=!1,Sl=!1,af=typeof WeakSet=="function"?WeakSet:Set,le=null;function at(e,l){var s=e.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(i){el(e,l,i)}else s.current=null}function Xo(e,l,s){try{s()}catch(i){el(e,l,i)}}var Fc=!1;function of(e,l){if(ro=Ln,e=xr(),lo(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var i=s.getSelection&&s.getSelection();if(i&&i.rangeCount!==0){s=i.anchorNode;var n=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{s.nodeType,u.nodeType}catch{s=null;break e}var d=0,h=-1,v=-1,z=0,N=0,F=e,O=null;l:for(;;){for(var ee;F!==s||n!==0&&F.nodeType!==3||(h=d+n),F!==u||i!==0&&F.nodeType!==3||(v=d+i),F.nodeType===3&&(d+=F.nodeValue.length),(ee=F.firstChild)!==null;)O=F,F=ee;for(;;){if(F===e)break l;if(O===s&&++z===n&&(h=d),O===u&&++N===i&&(v=d),(ee=F.nextSibling)!==null)break;F=O,O=F.parentNode}F=ee}s=h===-1||v===-1?null:{start:h,end:v}}else s=null}s=s||{start:0,end:0}}else s=null;for(co={focusedElem:e,selectionRange:s},Ln=!1,le=l;le!==null;)if(l=le,e=l.child,(l.subtreeFlags&1028)!==0&&e!==null)e.return=l,le=e;else for(;le!==null;){l=le;try{var se=l.alternate;if((l.flags&1024)!==0)switch(l.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var te=se.memoizedProps,sl=se.memoizedState,I=l.stateNode,x=I.getSnapshotBeforeUpdate(l.elementType===l.type?te:ts(l.type,te),sl);I.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var P=l.stateNode.containerInfo;P.nodeType===1?P.textContent="":P.nodeType===9&&P.documentElement&&P.removeChild(P.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch($){el(l,l.return,$)}if(e=l.sibling,e!==null){e.return=l.return,le=e;break}le=l.return}return se=Fc,Fc=!1,se}function Kt(e,l,s){var i=l.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var n=i=i.next;do{if((n.tag&e)===e){var u=n.destroy;n.destroy=void 0,u!==void 0&&Xo(l,s,u)}n=n.next}while(n!==i)}}function ra(e,l){if(l=l.updateQueue,l=l!==null?l.lastEffect:null,l!==null){var s=l=l.next;do{if((s.tag&e)===e){var i=s.create;s.destroy=i()}s=s.next}while(s!==l)}}function Zo(e){var l=e.ref;if(l!==null){var s=e.stateNode;switch(e.tag){case 5:e=s;break;default:e=s}typeof l=="function"?l(e):l.current=e}}function Dc(e){var l=e.alternate;l!==null&&(e.alternate=null,Dc(l)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(l=e.stateNode,l!==null&&(delete l[ds],delete l[Mt],delete l[mo],delete l[Og],delete l[Ng])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wc(e){return e.tag===5||e.tag===3||e.tag===4}function $c(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function eu(e,l,s){var i=e.tag;if(i===5||i===6)e=e.stateNode,l?s.nodeType===8?s.parentNode.insertBefore(e,l):s.insertBefore(e,l):(s.nodeType===8?(l=s.parentNode,l.insertBefore(e,s)):(l=s,l.appendChild(e)),s=s._reactRootContainer,s!=null||l.onclick!==null||(l.onclick=Tn));else if(i!==4&&(e=e.child,e!==null))for(eu(e,l,s),e=e.sibling;e!==null;)eu(e,l,s),e=e.sibling}function lu(e,l,s){var i=e.tag;if(i===5||i===6)e=e.stateNode,l?s.insertBefore(e,l):s.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(lu(e,l,s),e=e.sibling;e!==null;)lu(e,l,s),e=e.sibling}var pl=null,ns=!1;function si(e,l,s){for(s=s.child;s!==null;)Vc(e,l,s),s=s.sibling}function Vc(e,l,s){if(nl&&typeof nl.onCommitFiberUnmount=="function")try{nl.onCommitFiberUnmount(Rs,s)}catch{}switch(s.tag){case 5:Sl||at(s,l);case 6:var i=pl,n=ns;pl=null,si(e,l,s),pl=i,ns=n,pl!==null&&(ns?(e=pl,s=s.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)):pl.removeChild(s.stateNode));break;case 18:pl!==null&&(ns?(e=pl,s=s.stateNode,e.nodeType===8?fo(e.parentNode,s):e.nodeType===1&&fo(e,s),Ct(e)):fo(pl,s.stateNode));break;case 4:i=pl,n=ns,pl=s.stateNode.containerInfo,ns=!0,si(e,l,s),pl=i,ns=n;break;case 0:case 11:case 14:case 15:if(!Sl&&(i=s.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){n=i=i.next;do{var u=n,d=u.destroy;u=u.tag,d!==void 0&&((u&2)!==0||(u&4)!==0)&&Xo(s,l,d),n=n.next}while(n!==i)}si(e,l,s);break;case 1:if(!Sl&&(at(s,l),i=s.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=s.memoizedProps,i.state=s.memoizedState,i.componentWillUnmount()}catch(h){el(s,l,h)}si(e,l,s);break;case 21:si(e,l,s);break;case 22:s.mode&1?(Sl=(i=Sl)||s.memoizedState!==null,si(e,l,s),Sl=i):si(e,l,s);break;default:si(e,l,s)}}function Kc(e){var l=e.updateQueue;if(l!==null){e.updateQueue=null;var s=e.stateNode;s===null&&(s=e.stateNode=new af),l.forEach(function(i){var n=hf.bind(null,e,i);s.has(i)||(s.add(i),i.then(n,n))})}}function as(e,l){var s=l.deletions;if(s!==null)for(var i=0;i<s.length;i++){var n=s[i];try{var u=e,d=l,h=d;e:for(;h!==null;){switch(h.tag){case 5:pl=h.stateNode,ns=!1;break e;case 3:pl=h.stateNode.containerInfo,ns=!0;break e;case 4:pl=h.stateNode.containerInfo,ns=!0;break e}h=h.return}if(pl===null)throw Error(o(160));Vc(u,d,n),pl=null,ns=!1;var v=n.alternate;v!==null&&(v.return=null),n.return=null}catch(z){el(n,l,z)}}if(l.subtreeFlags&12854)for(l=l.child;l!==null;)Qc(l,e),l=l.sibling}function Qc(e,l){var s=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(as(l,e),ms(e),i&4){try{Kt(3,e,e.return),ra(3,e)}catch(te){el(e,e.return,te)}try{Kt(5,e,e.return)}catch(te){el(e,e.return,te)}}break;case 1:as(l,e),ms(e),i&512&&s!==null&&at(s,s.return);break;case 5:if(as(l,e),ms(e),i&512&&s!==null&&at(s,s.return),e.flags&32){var n=e.stateNode;try{wl(n,"")}catch(te){el(e,e.return,te)}}if(i&4&&(n=e.stateNode,n!=null)){var u=e.memoizedProps,d=s!==null?s.memoizedProps:u,h=e.type,v=e.updateQueue;if(e.updateQueue=null,v!==null)try{h==="input"&&u.type==="radio"&&u.name!=null&&Pi(n,u),qi(h,d);var z=qi(h,u);for(d=0;d<v.length;d+=2){var N=v[d],F=v[d+1];N==="style"?xn(n,F):N==="dangerouslySetInnerHTML"?Tl(n,F):N==="children"?wl(n,F):X(n,N,F,z)}switch(h){case"input":zl(n,u);break;case"textarea":wn(n,u);break;case"select":var O=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!u.multiple;var ee=u.value;ee!=null?Bs(n,!!u.multiple,ee,!1):O!==!!u.multiple&&(u.defaultValue!=null?Bs(n,!!u.multiple,u.defaultValue,!0):Bs(n,!!u.multiple,u.multiple?[]:"",!1))}n[Mt]=u}catch(te){el(e,e.return,te)}}break;case 6:if(as(l,e),ms(e),i&4){if(e.stateNode===null)throw Error(o(162));n=e.stateNode,u=e.memoizedProps;try{n.nodeValue=u}catch(te){el(e,e.return,te)}}break;case 3:if(as(l,e),ms(e),i&4&&s!==null&&s.memoizedState.isDehydrated)try{Ct(l.containerInfo)}catch(te){el(e,e.return,te)}break;case 4:as(l,e),ms(e);break;case 13:as(l,e),ms(e),n=e.child,n.flags&8192&&(u=n.memoizedState!==null,n.stateNode.isHidden=u,!u||n.alternate!==null&&n.alternate.memoizedState!==null||(tu=Ue())),i&4&&Kc(e);break;case 22:if(N=s!==null&&s.memoizedState!==null,e.mode&1?(Sl=(z=Sl)||N,as(l,e),Sl=z):as(l,e),ms(e),i&8192){if(z=e.memoizedState!==null,(e.stateNode.isHidden=z)&&!N&&(e.mode&1)!==0)for(le=e,N=e.child;N!==null;){for(F=le=N;le!==null;){switch(O=le,ee=O.child,O.tag){case 0:case 11:case 14:case 15:Kt(4,O,O.return);break;case 1:at(O,O.return);var se=O.stateNode;if(typeof se.componentWillUnmount=="function"){i=O,s=O.return;try{l=i,se.props=l.memoizedProps,se.state=l.memoizedState,se.componentWillUnmount()}catch(te){el(i,s,te)}}break;case 5:at(O,O.return);break;case 22:if(O.memoizedState!==null){Zc(F);continue}}ee!==null?(ee.return=O,le=ee):Zc(F)}N=N.sibling}e:for(N=null,F=e;;){if(F.tag===5){if(N===null){N=F;try{n=F.stateNode,z?(u=n.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(h=F.stateNode,v=F.memoizedProps.style,d=v!=null&&v.hasOwnProperty("display")?v.display:null,h.style.display=zi("display",d))}catch(te){el(e,e.return,te)}}}else if(F.tag===6){if(N===null)try{F.stateNode.nodeValue=z?"":F.memoizedProps}catch(te){el(e,e.return,te)}}else if((F.tag!==22&&F.tag!==23||F.memoizedState===null||F===e)&&F.child!==null){F.child.return=F,F=F.child;continue}if(F===e)break e;for(;F.sibling===null;){if(F.return===null||F.return===e)break e;N===F&&(N=null),F=F.return}N===F&&(N=null),F.sibling.return=F.return,F=F.sibling}}break;case 19:as(l,e),ms(e),i&4&&Kc(e);break;case 21:break;default:as(l,e),ms(e)}}function ms(e){var l=e.flags;if(l&2){try{e:{for(var s=e.return;s!==null;){if(Wc(s)){var i=s;break e}s=s.return}throw Error(o(160))}switch(i.tag){case 5:var n=i.stateNode;i.flags&32&&(wl(n,""),i.flags&=-33);var u=$c(e);lu(e,u,n);break;case 3:case 4:var d=i.stateNode.containerInfo,h=$c(e);eu(e,h,d);break;default:throw Error(o(161))}}catch(v){el(e,e.return,v)}e.flags&=-3}l&4096&&(e.flags&=-4097)}function uf(e,l,s){le=e,Yc(e)}function Yc(e,l,s){for(var i=(e.mode&1)!==0;le!==null;){var n=le,u=n.child;if(n.tag===22&&i){var d=n.memoizedState!==null||ua;if(!d){var h=n.alternate,v=h!==null&&h.memoizedState!==null||Sl;h=ua;var z=Sl;if(ua=d,(Sl=v)&&!z)for(le=n;le!==null;)d=le,v=d.child,d.tag===22&&d.memoizedState!==null?ep(n):v!==null?(v.return=d,le=v):ep(n);for(;u!==null;)le=u,Yc(u),u=u.sibling;le=n,ua=h,Sl=z}Xc(e)}else(n.subtreeFlags&8772)!==0&&u!==null?(u.return=n,le=u):Xc(e)}}function Xc(e){for(;le!==null;){var l=le;if((l.flags&8772)!==0){var s=l.alternate;try{if((l.flags&8772)!==0)switch(l.tag){case 0:case 11:case 15:Sl||ra(5,l);break;case 1:var i=l.stateNode;if(l.flags&4&&!Sl)if(s===null)i.componentDidMount();else{var n=l.elementType===l.type?s.memoizedProps:ts(l.type,s.memoizedProps);i.componentDidUpdate(n,s.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var u=l.updateQueue;u!==null&&Zr(l,u,i);break;case 3:var d=l.updateQueue;if(d!==null){if(s=null,l.child!==null)switch(l.child.tag){case 5:s=l.child.stateNode;break;case 1:s=l.child.stateNode}Zr(l,d,s)}break;case 5:var h=l.stateNode;if(s===null&&l.flags&4){s=h;var v=l.memoizedProps;switch(l.type){case"button":case"input":case"select":case"textarea":v.autoFocus&&s.focus();break;case"img":v.src&&(s.src=v.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(l.memoizedState===null){var z=l.alternate;if(z!==null){var N=z.memoizedState;if(N!==null){var F=N.dehydrated;F!==null&&Ct(F)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}Sl||l.flags&512&&Zo(l)}catch(O){el(l,l.return,O)}}if(l===e){le=null;break}if(s=l.sibling,s!==null){s.return=l.return,le=s;break}le=l.return}}function Zc(e){for(;le!==null;){var l=le;if(l===e){le=null;break}var s=l.sibling;if(s!==null){s.return=l.return,le=s;break}le=l.return}}function ep(e){for(;le!==null;){var l=le;try{switch(l.tag){case 0:case 11:case 15:var s=l.return;try{ra(4,l)}catch(v){el(l,s,v)}break;case 1:var i=l.stateNode;if(typeof i.componentDidMount=="function"){var n=l.return;try{i.componentDidMount()}catch(v){el(l,n,v)}}var u=l.return;try{Zo(l)}catch(v){el(l,u,v)}break;case 5:var d=l.return;try{Zo(l)}catch(v){el(l,d,v)}}}catch(v){el(l,l.return,v)}if(l===e){le=null;break}var h=l.sibling;if(h!==null){h.return=l.return,le=h;break}le=l.return}}var rf=Math.ceil,ca=pe.ReactCurrentDispatcher,su=pe.ReactCurrentOwner,Dl=pe.ReactCurrentBatchConfig,Be=0,rl=null,il=null,dl=0,Ml=0,ot=Ys(0),ol=0,Qt=null,yi=0,pa=0,iu=0,Yt=null,Gl=null,tu=0,ut=1/0,Us=null,da=!1,nu=null,ii=null,ga=!1,ti=null,fa=0,Xt=0,au=null,ma=-1,ha=0;function El(){return(Be&6)!==0?Ue():ma!==-1?ma:ma=Ue()}function ni(e){return(e.mode&1)===0?1:(Be&2)!==0&&dl!==0?dl&-dl:Dg.transition!==null?(ha===0&&(ha=kn()),ha):(e=Fe,e!==0||(e=window.event,e=e===void 0?16:sr(e.type)),e)}function os(e,l,s,i){if(50<Xt)throw Xt=0,au=null,Error(o(185));xt(e,s,i),((Be&2)===0||e!==rl)&&(e===rl&&((Be&2)===0&&(pa|=s),ol===4&&ai(e,dl)),Pl(e,i),s===1&&Be===0&&(l.mode&1)===0&&(ut=Ue()+500,Fn&&Zs()))}function Pl(e,l){var s=e.callbackNode;bs(e,l);var i=Ns(e,e===rl?dl:0);if(i===0)s!==null&&ll(s),e.callbackNode=null,e.callbackPriority=0;else if(l=i&-i,e.callbackPriority!==l){if(s!=null&&ll(s),l===1)e.tag===0?Fg(sp.bind(null,e)):Rr(sp.bind(null,e)),Tg(function(){(Be&6)===0&&Zs()}),s=null;else{switch(Vu(i)){case 1:s=ks;break;case 4:s=es;break;case 16:s=ls;break;case 536870912:s=Ul;break;default:s=ls}s=cp(s,lp.bind(null,e))}e.callbackPriority=l,e.callbackNode=s}}function lp(e,l){if(ma=-1,ha=0,(Be&6)!==0)throw Error(o(327));var s=e.callbackNode;if(rt()&&e.callbackNode!==s)return null;var i=Ns(e,e===rl?dl:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||l)l=_a(e,i);else{l=i;var n=Be;Be|=2;var u=tp();(rl!==e||dl!==l)&&(Us=null,ut=Ue()+500,ki(e,l));do try{df();break}catch(h){ip(e,h)}while(!0);Eo(),ca.current=u,Be=n,il!==null?l=0:(rl=null,dl=0,l=ol)}if(l!==0){if(l===2&&(n=Ri(e),n!==0&&(i=n,l=ou(e,n))),l===1)throw s=Qt,ki(e,0),ai(e,i),Pl(e,Ue()),s;if(l===6)ai(e,i);else{if(n=e.current.alternate,(i&30)===0&&!cf(n)&&(l=_a(e,i),l===2&&(u=Ri(e),u!==0&&(i=u,l=ou(e,u))),l===1))throw s=Qt,ki(e,0),ai(e,i),Pl(e,Ue()),s;switch(e.finishedWork=n,e.finishedLanes=i,l){case 0:case 1:throw Error(o(345));case 2:bi(e,Gl,Us);break;case 3:if(ai(e,i),(i&130023424)===i&&(l=tu+500-Ue(),10<l)){if(Ns(e,0)!==0)break;if(n=e.suspendedLanes,(n&i)!==i){El(),e.pingedLanes|=e.suspendedLanes&n;break}e.timeoutHandle=go(bi.bind(null,e,Gl,Us),l);break}bi(e,Gl,Us);break;case 4:if(ai(e,i),(i&4194240)===i)break;for(l=e.eventTimes,n=-1;0<i;){var d=31-fl(i);u=1<<d,d=l[d],d>n&&(n=d),i&=~u}if(i=n,i=Ue()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*rf(i/1960))-i,10<i){e.timeoutHandle=go(bi.bind(null,e,Gl,Us),i);break}bi(e,Gl,Us);break;case 5:bi(e,Gl,Us);break;default:throw Error(o(329))}}}return Pl(e,Ue()),e.callbackNode===s?lp.bind(null,e):null}function ou(e,l){var s=Yt;return e.current.memoizedState.isDehydrated&&(ki(e,l).flags|=256),e=_a(e,l),e!==2&&(l=Gl,Gl=s,l!==null&&uu(l)),e}function uu(e){Gl===null?Gl=e:Gl.push.apply(Gl,e)}function cf(e){for(var l=e;;){if(l.flags&16384){var s=l.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var i=0;i<s.length;i++){var n=s[i],u=n.getSnapshot;n=n.value;try{if(!ss(u(),n))return!1}catch{return!1}}}if(s=l.child,l.subtreeFlags&16384&&s!==null)s.return=l,l=s;else{if(l===e)break;for(;l.sibling===null;){if(l.return===null||l.return===e)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function ai(e,l){for(l&=~iu,l&=~pa,e.suspendedLanes|=l,e.pingedLanes&=~l,e=e.expirationTimes;0<l;){var s=31-fl(l),i=1<<s;e[s]=-1,l&=~i}}function sp(e){if((Be&6)!==0)throw Error(o(327));rt();var l=Ns(e,0);if((l&1)===0)return Pl(e,Ue()),null;var s=_a(e,l);if(e.tag!==0&&s===2){var i=Ri(e);i!==0&&(l=i,s=ou(e,i))}if(s===1)throw s=Qt,ki(e,0),ai(e,l),Pl(e,Ue()),s;if(s===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=l,bi(e,Gl,Us),Pl(e,Ue()),null}function ru(e,l){var s=Be;Be|=1;try{return e(l)}finally{Be=s,Be===0&&(ut=Ue()+500,Fn&&Zs())}}function Ei(e){ti!==null&&ti.tag===0&&(Be&6)===0&&rt();var l=Be;Be|=1;var s=Dl.transition,i=Fe;try{if(Dl.transition=null,Fe=1,e)return e()}finally{Fe=i,Dl.transition=s,Be=l,(Be&6)===0&&Zs()}}function cu(){Ml=ot.current,Qe(ot)}function ki(e,l){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;if(s!==-1&&(e.timeoutHandle=-1,Hg(s)),il!==null)for(s=il.return;s!==null;){var i=s;switch(So(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&On();break;case 3:tt(),Qe(Cl),Qe(hl),Jo();break;case 5:Go(i);break;case 4:tt();break;case 13:Qe(Xe);break;case 19:Qe(Xe);break;case 10:ko(i.type._context);break;case 22:case 23:cu()}s=s.return}if(rl=e,il=e=oi(e.current,null),dl=Ml=l,ol=0,Qt=null,iu=pa=yi=0,Gl=Yt=null,vi!==null){for(l=0;l<vi.length;l++)if(s=vi[l],i=s.interleaved,i!==null){s.interleaved=null;var n=i.next,u=s.pending;if(u!==null){var d=u.next;u.next=n,i.next=d}s.pending=i}vi=null}return e}function ip(e,l){do{var s=il;try{if(Eo(),ea.current=ta,la){for(var i=Ze.memoizedState;i!==null;){var n=i.queue;n!==null&&(n.pending=null),i=i.next}la=!1}if(xi=0,ul=al=Ze=null,Ft=!1,Dt=0,su.current=null,s===null||s.return===null){ol=1,Qt=l,il=null;break}e:{var u=e,d=s.return,h=s,v=l;if(l=dl,h.flags|=32768,v!==null&&typeof v=="object"&&typeof v.then=="function"){var z=v,N=h,F=N.tag;if((N.mode&1)===0&&(F===0||F===11||F===15)){var O=N.alternate;O?(N.updateQueue=O.updateQueue,N.memoizedState=O.memoizedState,N.lanes=O.lanes):(N.updateQueue=null,N.memoizedState=null)}var ee=Lc(d);if(ee!==null){ee.flags&=-257,Ic(ee,d,h,u,l),ee.mode&1&&Cc(u,z,l),l=ee,v=z;var se=l.updateQueue;if(se===null){var te=new Set;te.add(v),l.updateQueue=te}else se.add(v);break e}else{if((l&1)===0){Cc(u,z,l),pu();break e}v=Error(o(426))}}else if(Ye&&h.mode&1){var sl=Lc(d);if(sl!==null){(sl.flags&65536)===0&&(sl.flags|=256),Ic(sl,d,h,u,l),xo(nt(v,h));break e}}u=v=nt(v,h),ol!==4&&(ol=2),Yt===null?Yt=[u]:Yt.push(u),u=d;do{switch(u.tag){case 3:u.flags|=65536,l&=-l,u.lanes|=l;var I=kc(u,v,l);Xr(u,I);break e;case 1:h=v;var x=u.type,P=u.stateNode;if((u.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||P!==null&&typeof P.componentDidCatch=="function"&&(ii===null||!ii.has(P)))){u.flags|=65536,l&=-l,u.lanes|=l;var $=bc(u,h,l);Xr(u,$);break e}}u=u.return}while(u!==null)}ap(s)}catch(ne){l=ne,il===s&&s!==null&&(il=s=s.return);continue}break}while(!0)}function tp(){var e=ca.current;return ca.current=ta,e===null?ta:e}function pu(){(ol===0||ol===3||ol===2)&&(ol=4),rl===null||(yi&268435455)===0&&(pa&268435455)===0||ai(rl,dl)}function _a(e,l){var s=Be;Be|=2;var i=tp();(rl!==e||dl!==l)&&(Us=null,ki(e,l));do try{pf();break}catch(n){ip(e,n)}while(!0);if(Eo(),Be=s,ca.current=i,il!==null)throw Error(o(261));return rl=null,dl=0,ol}function pf(){for(;il!==null;)np(il)}function df(){for(;il!==null&&!Ve();)np(il)}function np(e){var l=rp(e.alternate,e,Ml);e.memoizedProps=e.pendingProps,l===null?ap(e):il=l,su.current=null}function ap(e){var l=e;do{var s=l.alternate;if(e=l.return,(l.flags&32768)===0){if(s=tf(s,l,Ml),s!==null){il=s;return}}else{if(s=nf(s,l),s!==null){s.flags&=32767,il=s;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ol=6,il=null;return}}if(l=l.sibling,l!==null){il=l;return}il=l=e}while(l!==null);ol===0&&(ol=5)}function bi(e,l,s){var i=Fe,n=Dl.transition;try{Dl.transition=null,Fe=1,gf(e,l,s,i)}finally{Dl.transition=n,Fe=i}return null}function gf(e,l,s,i){do rt();while(ti!==null);if((Be&6)!==0)throw Error(o(327));s=e.finishedWork;var n=e.finishedLanes;if(s===null)return null;if(e.finishedWork=null,e.finishedLanes=0,s===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var u=s.lanes|s.childLanes;if(Wd(e,u),e===rl&&(il=rl=null,dl=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||ga||(ga=!0,cp(ls,function(){return rt(),null})),u=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||u){u=Dl.transition,Dl.transition=null;var d=Fe;Fe=1;var h=Be;Be|=4,su.current=null,of(e,s),Qc(s,e),Jg(co),Ln=!!ro,co=ro=null,e.current=s,uf(s),Ne(),Be=h,Fe=d,Dl.transition=u}else e.current=s;if(ga&&(ga=!1,ti=e,fa=n),u=e.pendingLanes,u===0&&(ii=null),Hi(s.stateNode),Pl(e,Ue()),l!==null)for(i=e.onRecoverableError,s=0;s<l.length;s++)n=l[s],i(n.value,{componentStack:n.stack,digest:n.digest});if(da)throw da=!1,e=nu,nu=null,e;return(fa&1)!==0&&e.tag!==0&&rt(),u=e.pendingLanes,(u&1)!==0?e===au?Xt++:(Xt=0,au=e):Xt=0,Zs(),null}function rt(){if(ti!==null){var e=Vu(fa),l=Dl.transition,s=Fe;try{if(Dl.transition=null,Fe=16>e?16:e,ti===null)var i=!1;else{if(e=ti,ti=null,fa=0,(Be&6)!==0)throw Error(o(331));var n=Be;for(Be|=4,le=e.current;le!==null;){var u=le,d=u.child;if((le.flags&16)!==0){var h=u.deletions;if(h!==null){for(var v=0;v<h.length;v++){var z=h[v];for(le=z;le!==null;){var N=le;switch(N.tag){case 0:case 11:case 15:Kt(8,N,u)}var F=N.child;if(F!==null)F.return=N,le=F;else for(;le!==null;){N=le;var O=N.sibling,ee=N.return;if(Dc(N),N===z){le=null;break}if(O!==null){O.return=ee,le=O;break}le=ee}}}var se=u.alternate;if(se!==null){var te=se.child;if(te!==null){se.child=null;do{var sl=te.sibling;te.sibling=null,te=sl}while(te!==null)}}le=u}}if((u.subtreeFlags&2064)!==0&&d!==null)d.return=u,le=d;else e:for(;le!==null;){if(u=le,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:Kt(9,u,u.return)}var I=u.sibling;if(I!==null){I.return=u.return,le=I;break e}le=u.return}}var x=e.current;for(le=x;le!==null;){d=le;var P=d.child;if((d.subtreeFlags&2064)!==0&&P!==null)P.return=d,le=P;else e:for(d=x;le!==null;){if(h=le,(h.flags&2048)!==0)try{switch(h.tag){case 0:case 11:case 15:ra(9,h)}}catch(ne){el(h,h.return,ne)}if(h===d){le=null;break e}var $=h.sibling;if($!==null){$.return=h.return,le=$;break e}le=h.return}}if(Be=n,Zs(),nl&&typeof nl.onPostCommitFiberRoot=="function")try{nl.onPostCommitFiberRoot(Rs,e)}catch{}i=!0}return i}finally{Fe=s,Dl.transition=l}}return!1}function op(e,l,s){l=nt(s,l),l=kc(e,l,1),e=li(e,l,1),l=El(),e!==null&&(xt(e,1,l),Pl(e,l))}function el(e,l,s){if(e.tag===3)op(e,e,s);else for(;l!==null;){if(l.tag===3){op(l,e,s);break}else if(l.tag===1){var i=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ii===null||!ii.has(i))){e=nt(s,e),e=bc(l,e,1),l=li(l,e,1),e=El(),l!==null&&(xt(l,1,e),Pl(l,e));break}}l=l.return}}function ff(e,l,s){var i=e.pingCache;i!==null&&i.delete(l),l=El(),e.pingedLanes|=e.suspendedLanes&s,rl===e&&(dl&s)===s&&(ol===4||ol===3&&(dl&130023424)===dl&&500>Ue()-tu?ki(e,0):iu|=s),Pl(e,l)}function up(e,l){l===0&&((e.mode&1)===0?l=1:(l=bl,bl<<=1,(bl&130023424)===0&&(bl=4194304)));var s=El();e=Ps(e,l),e!==null&&(xt(e,l,s),Pl(e,s))}function mf(e){var l=e.memoizedState,s=0;l!==null&&(s=l.retryLane),up(e,s)}function hf(e,l){var s=0;switch(e.tag){case 13:var i=e.stateNode,n=e.memoizedState;n!==null&&(s=n.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(o(314))}i!==null&&i.delete(l),up(e,s)}var rp;rp=function(e,l,s){if(e!==null)if(e.memoizedProps!==l.pendingProps||Cl.current)Il=!0;else{if((e.lanes&s)===0&&(l.flags&128)===0)return Il=!1,sf(e,l,s);Il=(e.flags&131072)!==0}else Il=!1,Ye&&(l.flags&1048576)!==0&&Or(l,Wn,l.index);switch(l.lanes=0,l.tag){case 2:var i=l.type;oa(e,l),e=l.pendingProps;var n=Yi(l,hl.current);it(l,s),n=qo(null,l,i,e,n,s);var u=Bo();return l.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(l.tag=1,l.memoizedState=null,l.updateQueue=null,Ll(i)?(u=!0,Nn(l)):u=!1,l.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,Lo(l),n.updater=na,l.stateNode=n,n._reactInternals=l,Oo(l,i,e,s),l=Wo(null,l,i,!0,u,s)):(l.tag=0,Ye&&u&&jo(l),yl(null,l,n,s),l=l.child),l;case 16:i=l.elementType;e:{switch(oa(e,l),e=l.pendingProps,n=i._init,i=n(i._payload),l.type=i,n=l.tag=jf(i),e=ts(i,e),n){case 0:l=Do(null,l,i,e,s);break e;case 1:l=qc(null,l,i,e,s);break e;case 11:l=Gc(null,l,i,e,s);break e;case 14:l=Pc(null,l,i,ts(i.type,e),s);break e}throw Error(o(306,i,""))}return l;case 0:return i=l.type,n=l.pendingProps,n=l.elementType===i?n:ts(i,n),Do(e,l,i,n,s);case 1:return i=l.type,n=l.pendingProps,n=l.elementType===i?n:ts(i,n),qc(e,l,i,n,s);case 3:e:{if(Bc(l),e===null)throw Error(o(387));i=l.pendingProps,u=l.memoizedState,n=u.element,Yr(e,l),Xn(l,i,null,s);var d=l.memoizedState;if(i=d.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},l.updateQueue.baseState=u,l.memoizedState=u,l.flags&256){n=nt(Error(o(423)),l),l=Ac(e,l,i,s,n);break e}else if(i!==n){n=nt(Error(o(424)),l),l=Ac(e,l,i,s,n);break e}else for(Al=Qs(l.stateNode.containerInfo.firstChild),Bl=l,Ye=!0,is=null,s=Kr(l,null,i,s),l.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(et(),i===n){l=zs(e,l,s);break e}yl(e,l,i,s)}l=l.child}return l;case 5:return ec(l),e===null&&wo(l),i=l.type,n=l.pendingProps,u=e!==null?e.memoizedProps:null,d=n.children,po(i,n)?d=null:u!==null&&po(i,u)&&(l.flags|=32),Uc(e,l),yl(e,l,d,s),l.child;case 6:return e===null&&wo(l),null;case 13:return Mc(e,l,s);case 4:return Io(l,l.stateNode.containerInfo),i=l.pendingProps,e===null?l.child=lt(l,null,i,s):yl(e,l,i,s),l.child;case 11:return i=l.type,n=l.pendingProps,n=l.elementType===i?n:ts(i,n),Gc(e,l,i,n,s);case 7:return yl(e,l,l.pendingProps,s),l.child;case 8:return yl(e,l,l.pendingProps.children,s),l.child;case 12:return yl(e,l,l.pendingProps.children,s),l.child;case 10:e:{if(i=l.type._context,n=l.pendingProps,u=l.memoizedProps,d=n.value,$e(Kn,i._currentValue),i._currentValue=d,u!==null)if(ss(u.value,d)){if(u.children===n.children&&!Cl.current){l=zs(e,l,s);break e}}else for(u=l.child,u!==null&&(u.return=l);u!==null;){var h=u.dependencies;if(h!==null){d=u.child;for(var v=h.firstContext;v!==null;){if(v.context===i){if(u.tag===1){v=Js(-1,s&-s),v.tag=2;var z=u.updateQueue;if(z!==null){z=z.shared;var N=z.pending;N===null?v.next=v:(v.next=N.next,N.next=v),z.pending=v}}u.lanes|=s,v=u.alternate,v!==null&&(v.lanes|=s),bo(u.return,s,l),h.lanes|=s;break}v=v.next}}else if(u.tag===10)d=u.type===l.type?null:u.child;else if(u.tag===18){if(d=u.return,d===null)throw Error(o(341));d.lanes|=s,h=d.alternate,h!==null&&(h.lanes|=s),bo(d,s,l),d=u.sibling}else d=u.child;if(d!==null)d.return=u;else for(d=u;d!==null;){if(d===l){d=null;break}if(u=d.sibling,u!==null){u.return=d.return,d=u;break}d=d.return}u=d}yl(e,l,n.children,s),l=l.child}return l;case 9:return n=l.type,i=l.pendingProps.children,it(l,s),n=Nl(n),i=i(n),l.flags|=1,yl(e,l,i,s),l.child;case 14:return i=l.type,n=ts(i,l.pendingProps),n=ts(i.type,n),Pc(e,l,i,n,s);case 15:return Jc(e,l,l.type,l.pendingProps,s);case 17:return i=l.type,n=l.pendingProps,n=l.elementType===i?n:ts(i,n),oa(e,l),l.tag=1,Ll(i)?(e=!0,Nn(l)):e=!1,it(l,s),yc(l,i,n),Oo(l,i,n,s),Wo(null,l,i,!0,e,s);case 19:return Tc(e,l,s);case 22:return zc(e,l,s)}throw Error(o(156,l.tag))};function cp(e,l){return Te(e,l)}function _f(e,l,s,i){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wl(e,l,s,i){return new _f(e,l,s,i)}function du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jf(e){if(typeof e=="function")return du(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Se)return 11;if(e===Le)return 14}return 2}function oi(e,l){var s=e.alternate;return s===null?(s=Wl(e.tag,l,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=l,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&14680064,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,l=e.dependencies,s.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s}function ja(e,l,s,i,n,u){var d=2;if(i=e,typeof e=="function")du(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case Ce:return Ci(s.children,n,u,l);case L:d=8,n|=8;break;case Ee:return e=Wl(12,s,l,n|2),e.elementType=Ee,e.lanes=u,e;case Ae:return e=Wl(13,s,l,n),e.elementType=Ae,e.lanes=u,e;case Je:return e=Wl(19,s,l,n),e.elementType=Je,e.lanes=u,e;case de:return Sa(s,n,u,l);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fe:d=10;break e;case Re:d=9;break e;case Se:d=11;break e;case Le:d=14;break e;case De:d=16,i=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return l=Wl(d,s,l,n),l.elementType=e,l.type=i,l.lanes=u,l}function Ci(e,l,s,i){return e=Wl(7,e,i,l),e.lanes=s,e}function Sa(e,l,s,i){return e=Wl(22,e,i,l),e.elementType=de,e.lanes=s,e.stateNode={isHidden:!1},e}function gu(e,l,s){return e=Wl(6,e,null,l),e.lanes=s,e}function fu(e,l,s){return l=Wl(4,e.children!==null?e.children:[],e.key,l),l.lanes=s,l.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},l}function Sf(e,l,s,i,n){this.tag=l,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ta(0),this.expirationTimes=Ta(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ta(0),this.identifierPrefix=i,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function mu(e,l,s,i,n,u,d,h,v){return e=new Sf(e,l,s,h,v),l===1?(l=1,u===!0&&(l|=8)):l=0,u=Wl(3,null,null,l),e.current=u,u.stateNode=e,u.memoizedState={element:i,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lo(u),e}function vf(e,l,s){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ve,key:i==null?null:""+i,children:e,containerInfo:l,implementation:s}}function pp(e){if(!e)return Xs;e=e._reactInternals;e:{if(Y(e)!==e||e.tag!==1)throw Error(o(170));var l=e;do{switch(l.tag){case 3:l=l.stateNode.context;break e;case 1:if(Ll(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break e}}l=l.return}while(l!==null);throw Error(o(171))}if(e.tag===1){var s=e.type;if(Ll(s))return Hr(e,s,l)}return l}function dp(e,l,s,i,n,u,d,h,v){return e=mu(s,i,!0,e,n,u,d,h,v),e.context=pp(null),s=e.current,i=El(),n=ni(s),u=Js(i,n),u.callback=l??null,li(s,u,n),e.current.lanes=n,xt(e,n,i),Pl(e,i),e}function va(e,l,s,i){var n=l.current,u=El(),d=ni(n);return s=pp(s),l.context===null?l.context=s:l.pendingContext=s,l=Js(u,d),l.payload={element:e},i=i===void 0?null:i,i!==null&&(l.callback=i),e=li(n,l,d),e!==null&&(os(e,n,d,u),Yn(e,n,d)),d}function wa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function gp(e,l){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<l?s:l}}function hu(e,l){gp(e,l),(e=e.alternate)&&gp(e,l)}function wf(){return null}var fp=typeof reportError=="function"?reportError:function(e){console.error(e)};function _u(e){this._internalRoot=e}xa.prototype.render=_u.prototype.render=function(e){var l=this._internalRoot;if(l===null)throw Error(o(409));va(e,l,null,null)},xa.prototype.unmount=_u.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var l=e.containerInfo;Ei(function(){va(null,e,null,null)}),l[Cs]=null}};function xa(e){this._internalRoot=e}xa.prototype.unstable_scheduleHydration=function(e){if(e){var l=Yu();e={blockedOn:null,target:e,priority:l};for(var s=0;s<$s.length&&l!==0&&l<$s[s].priority;s++);$s.splice(s,0,e),s===0&&er(e)}};function ju(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ya(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function mp(){}function xf(e,l,s,i,n){if(n){if(typeof i=="function"){var u=i;i=function(){var z=wa(d);u.call(z)}}var d=dp(l,i,e,0,null,!1,!1,"",mp);return e._reactRootContainer=d,e[Cs]=d.current,Bt(e.nodeType===8?e.parentNode:e),Ei(),d}for(;n=e.lastChild;)e.removeChild(n);if(typeof i=="function"){var h=i;i=function(){var z=wa(v);h.call(z)}}var v=mu(e,0,!1,null,null,!1,!1,"",mp);return e._reactRootContainer=v,e[Cs]=v.current,Bt(e.nodeType===8?e.parentNode:e),Ei(function(){va(l,v,s,i)}),v}function Ea(e,l,s,i,n){var u=s._reactRootContainer;if(u){var d=u;if(typeof n=="function"){var h=n;n=function(){var v=wa(d);h.call(v)}}va(l,d,e,n)}else d=xf(s,l,e,n,i);return wa(d)}Ku=function(e){switch(e.tag){case 3:var l=e.stateNode;if(l.current.memoizedState.isDehydrated){var s=Os(l.pendingLanes);s!==0&&(Ra(l,s|1),Pl(l,Ue()),(Be&6)===0&&(ut=Ue()+500,Zs()))}break;case 13:Ei(function(){var i=Ps(e,1);if(i!==null){var n=El();os(i,e,1,n)}}),hu(e,1)}},Oa=function(e){if(e.tag===13){var l=Ps(e,134217728);if(l!==null){var s=El();os(l,e,134217728,s)}hu(e,134217728)}},Qu=function(e){if(e.tag===13){var l=ni(e),s=Ps(e,l);if(s!==null){var i=El();os(s,e,l,i)}hu(e,l)}},Yu=function(){return Fe},Xu=function(e,l){var s=Fe;try{return Fe=e,l()}finally{Fe=s}},Ai=function(e,l,s){switch(l){case"input":if(zl(e,s),l=s.name,s.type==="radio"&&l!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+l)+'][type="radio"]'),l=0;l<s.length;l++){var i=s[l];if(i!==e&&i.form===e.form){var n=Rn(i);if(!n)throw Error(o(90));He(i),zl(i,n)}}}break;case"textarea":wn(e,s);break;case"select":l=s.value,l!=null&&Bs(e,!!s.multiple,l,!1)}},En=ru,vt=Ei;var yf={usingClientEntryPoint:!1,Events:[Ht,Ki,Rn,yn,St,ru]},Zt={findFiberByHostInstance:hi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ef={bundleType:Zt.bundleType,version:Zt.version,rendererPackageName:Zt.rendererPackageName,rendererConfig:Zt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ce(e),e===null?null:e.stateNode},findFiberByHostInstance:Zt.findFiberByHostInstance||wf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ka.isDisabled&&ka.supportsFiber)try{Rs=ka.inject(Ef),nl=ka}catch{}}return Jl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yf,Jl.createPortal=function(e,l){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ju(l))throw Error(o(200));return vf(e,l,null,s)},Jl.createRoot=function(e,l){if(!ju(e))throw Error(o(299));var s=!1,i="",n=fp;return l!=null&&(l.unstable_strictMode===!0&&(s=!0),l.identifierPrefix!==void 0&&(i=l.identifierPrefix),l.onRecoverableError!==void 0&&(n=l.onRecoverableError)),l=mu(e,1,!1,null,null,s,!1,i,n),e[Cs]=l.current,Bt(e.nodeType===8?e.parentNode:e),new _u(l)},Jl.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var l=e._reactInternals;if(l===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=ce(l),e=e===null?null:e.stateNode,e},Jl.flushSync=function(e){return Ei(e)},Jl.hydrate=function(e,l,s){if(!ya(l))throw Error(o(200));return Ea(null,e,l,!0,s)},Jl.hydrateRoot=function(e,l,s){if(!ju(e))throw Error(o(405));var i=s!=null&&s.hydratedSources||null,n=!1,u="",d=fp;if(s!=null&&(s.unstable_strictMode===!0&&(n=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),l=dp(l,null,e,1,s??null,n,!1,u,d),e[Cs]=l.current,Bt(e),i)for(e=0;e<i.length;e++)s=i[e],n=s._getVersion,n=n(s._source),l.mutableSourceEagerHydrationData==null?l.mutableSourceEagerHydrationData=[s,n]:l.mutableSourceEagerHydrationData.push(s,n);return new xa(l)},Jl.render=function(e,l,s){if(!ya(l))throw Error(o(200));return Ea(null,e,l,!1,s)},Jl.unmountComponentAtNode=function(e){if(!ya(e))throw Error(o(40));return e._reactRootContainer?(Ei(function(){Ea(null,null,e,!1,function(){e._reactRootContainer=null,e[Cs]=null})}),!0):!1},Jl.unstable_batchedUpdates=ru,Jl.unstable_renderSubtreeIntoContainer=function(e,l,s,i){if(!ya(s))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Ea(e,l,s,!1,i)},Jl.version="18.3.1-next-f1338f8080-20240426",Jl}var Zp;function Fd(){if(Zp)return bu.exports;Zp=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(a){console.error(a)}}return t(),bu.exports=s_(),bu.exports}var i_=Fd();function t_(t){return C.createElement(mh,{flushSync:i_.flushSync,...t})}var Ia={},ed;function n_(){if(ed)return Ia;ed=1;var t=Fd();return Ia.createRoot=t.createRoot,Ia.hydrateRoot=t.hydrateRoot,Ia}var a_=n_();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),u_=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,o,r)=>r?r.toUpperCase():o.toLowerCase()),ld=t=>{const a=u_(t);return a.charAt(0).toUpperCase()+a.slice(1)},Dd=(...t)=>t.filter((a,o,r)=>!!a&&a.trim()!==""&&r.indexOf(a)===o).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var r_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=C.forwardRef(({color:t="currentColor",size:a=24,strokeWidth:o=2,absoluteStrokeWidth:r,className:c="",children:p,iconNode:g,...f},m)=>C.createElement("svg",{ref:m,...r_,width:a,height:a,stroke:t,strokeWidth:r?Number(o)*24/Number(a):o,className:Dd("lucide",c),...f},[...g.map(([_,E])=>C.createElement(_,E)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=(t,a)=>{const o=C.forwardRef(({className:r,...c},p)=>C.createElement(c_,{ref:p,iconNode:a,className:Dd(`lucide-${o_(ld(t))}`,`lucide-${t}`,r),...c}));return o.displayName=ld(t),o};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],sd=di("check",p_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],g_=di("chevron-left",d_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],id=di("heart",f_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=[["path",{d:"M5 12h14",key:"1ays0h"}]],h_=di("minus",m_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],j_=di("plus",__);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]],td=di("shopping-bag",S_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],w_=di("star",v_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],y_=di("trash-2",x_),E_="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function nn(t){const[a,o]=C.useState(!1),r=()=>{o(!0)},{src:c,alt:p,style:g,className:f,...m}=t;return a?b.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${f??""}`,style:g,children:b.jsx("div",{className:"flex items-center justify-center w-full h-full",children:b.jsx("img",{src:E_,alt:"Error loading image",...m,"data-original-url":c})})}):b.jsx("img",{src:c,alt:p,className:f,style:g,...m,onError:r})}const k_=`id,TITLE,DESCRIPTION,PRICE,CURRENCY_CODE,QUANTITY,TAGS,MATERIALS,IMAGE1,IMAGE2,IMAGE3,IMAGE4,IMAGE5,IMAGE6,IMAGE7,IMAGE8,IMAGE9,IMAGE10,condition,availability,root links,item_group_id,shape,length\r
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
`,nd=["Square","Oval","Stiletto","Coffin","Almond"];function ad(t){const a=[];let o="",r=!1;for(let c=0;c<t.length;c++){const p=t[c];p==='"'?r&&t[c+1]==='"'?(o+='"',c++):r=!r:p===","&&!r?(a.push(o),o=""):o+=p}return a.push(o),a}function b_(t){const a=[];let o="",r=!1;for(let c=0;c<t.length;c++){const p=t[c];p==='"'?(r&&t[c+1]==='"'?(o+='"',c++):r=!r,o+=p):(p===`
`||p==="\r")&&!r?(p==="\r"&&t[c+1]===`
`&&c++,o.trim()&&a.push(o),o=""):o+=p}return o.trim()&&a.push(o),a}function C_(){const t=b_(k_),a=ad(t[0]).map(c=>c.trim()),o=(c,p)=>{var f;const g=a.indexOf(p);return g>=0?((f=c[g])==null?void 0:f.trim())??"":""},r=[];for(let c=1;c<t.length;c++){const p=ad(t[c]),g=o(p,"id");if(!g||o(p,"availability")==="out of stock")continue;const f=o(p,"item_group_id")||g,m=o(p,"TITLE"),_=parseFloat(o(p,"PRICE"))||0,E=o(p,"DESCRIPTION").replace(/\n/g," ").replace(/\s+/g," ").trim(),J=["IMAGE1","IMAGE2","IMAGE3","IMAGE4","IMAGE5","IMAGE6","IMAGE7","IMAGE8","IMAGE9","IMAGE10"].map(L=>(o(p,L)||"").trim()).filter(Boolean),U=J[0]||"",H=J.slice(1),A=o(p,"TAGS"),q=A?A.split(",").map(L=>L.trim()).filter(Boolean):[],W=o(p,"VARIATION 1 TYPE")||o(p,"VARIATION 2 TYPE"),K=o(p,"VARIATION 1 NAME")||o(p,"VARIATION 2 NAME"),X=o(p,"VARIATION 1 VALUES")||o(p,"VARIATION 2 VALUES");let pe=nd;K==="Nail Shapes"&&X?pe=X.split(",").map(L=>L.trim()).filter(Boolean):(W||K)&&(pe=nd);const re=o(p,"shape"),ve=o(p,"length"),Ce=ve.charAt(0).toUpperCase()+ve.slice(1).toLowerCase();r.push({id:g,groupId:f,name:m,price:_,description:E,image:U,extraImages:H,shapes:pe,tags:q,shape:re,length:Ce})}return r}const an={firstName:"",lastName:"",email:"",phone:"",address:"",instagram:"",city:"",postcode:"",nailSizes:"",notes:""},od=new Set(["JUICEGELS-0301"]),rn=C_(),L_=rn.filter((t,a,o)=>a===o.findIndex(r=>r.groupId===t.groupId));function Iu(t){return t.map(a=>[encodeURIComponent(a.product.id),encodeURIComponent(a.shape),encodeURIComponent(a.length),encodeURIComponent(String(a.quantity))].join("|")).join(",")}function I_(t,a){return t.split(",").map(o=>{const[r,c,p,g]=o.split("|"),f=decodeURIComponent(r??"").trim(),m=decodeURIComponent(c??"").trim(),_=decodeURIComponent(p??"Medium"),E=Math.max(1,Number(decodeURIComponent(g??"1"))),S=a.find(J=>J.id===f);return!S||!m||Number.isNaN(E)?null:{product:S,shape:m,length:_,quantity:E}}).filter(Boolean)}function ct(){const t=ys(),a=Ad(),o=Qm(),r=C.useMemo(()=>new URLSearchParams(t.search),[t.search]),c=C.useMemo(()=>t.pathname.replace(/\/+$/,"")||"/",[t.pathname]),[p,g]=C.useState("home"),[f,m]=C.useState(null),[_,E]=C.useState(""),[S,J]=C.useState("Medium"),[U,H]=C.useState([]),[A,q]=C.useState(()=>{if(typeof window>"u")return[];try{return JSON.parse(localStorage.getItem("juicegels_cart")??"[]")}catch{return[]}}),[W,K]=C.useState(()=>{if(typeof window>"u")return an;try{return JSON.parse(localStorage.getItem("juicegels_form")??"null")??an}catch{return an}}),[X,pe]=C.useState({}),[re,ve]=C.useState(0),[Ce,L]=C.useState(null),[Ee,fe]=C.useState(!1);C.useEffect(()=>{const k=(()=>{if(!t.search.startsWith("?/"))return"";const[Z]=t.search.slice(1).split("&");return Z.startsWith("/")?Z:`/${Z}`})(),R=r.get("checkout")==="success"||r.has("session_id");if(c==="/confirmation"||c==="/checkout-success"||k==="/confirmation"||k==="/checkout-success"||c==="/"&&R){g("confirmation");return}if(c==="/basket"){const ke=new URLSearchParams(t.search).get("items");if(ke){const He=I_(ke,rn);He.length>0&&q(He)}g("basket");return}if(c==="/"){g("home");return}if(c.startsWith("/product/")&&o.id){const Z=rn.find(ke=>ke.id===o.id);if(Z){if(Le(Z)){m(Z),E(Z.shape),J(Z.length),ve(0),g("product");return}const ke=new URLSearchParams(t.search),He=ke.get("shape")??"",Oe=ke.get("length")??"",kl=De(Z),rs=de(Z),Pi=kl.includes(He)?He:kl[0]??"",zl=rs.includes(Oe)?Oe:rs[0]??"Medium";m(Z),E(Pi),J(zl),ve(0),g("product");return}}g("home")},[t.search,c,o.id,rn,r]),C.useEffect(()=>{if(p!=="product"||!f||!_||!S)return;const k=new URLSearchParams(t.search),R=k.get("shape")??"",Z=k.get("length")??"";R===_&&Z===S||D(f.id,_,S)},[p,f,_,S]);const Re=A.reduce((k,R)=>k+R.product.price*R.quantity,0),Se=A.reduce((k,R)=>k+R.quantity,0);C.useEffect(()=>{typeof window>"u"||localStorage.setItem("juicegels_cart",JSON.stringify(A))},[A]),C.useEffect(()=>{typeof window>"u"||localStorage.setItem("juicegels_form",JSON.stringify(W))},[W]);const Ae=k=>H(R=>R.includes(k)?R.filter(Z=>Z!==k):[...R,k]),Je=["Short","Medium","Long"],Le=k=>od.has(k.id),De=k=>{const R=k.shapes;return Array.isArray(R)&&R.length>0?R:["Short Almond","Medium Almond","Long Almond"]},de=k=>{const R=k.lengths;return Array.isArray(R)&&R.length>0?R:Je},D=(k,R,Z)=>{if(od.has(k)){a(`/product/${k}`,{replace:!0});return}const ke=new URLSearchParams;R&&ke.set("shape",R),Z&&ke.set("length",Z),a(`/product/${k}?${ke.toString()}`,{replace:!0})},Q=k=>{const R=De(k),Z=de(k),ke=Le(k)?k.shape:R[0]??"",He=Le(k)?k.length:Z[0]??"Medium";if(m(k),E(ke),J(He),ve(0),g("product"),Le(k)){a(`/product/${k.id}`);return}a(`/product/${k.id}?shape=${encodeURIComponent(ke)}&length=${encodeURIComponent(He)}`)},V=()=>{!f||!_||!S||q(k=>{const R=k.findIndex(He=>He.product.id===f.id&&He.shape===_&&He.length===S);let Z;R>=0?(Z=[...k],Z[R]={...Z[R],quantity:Z[R].quantity+1}):Z=[...k,{product:f,shape:_,length:S,quantity:1}];const ke=Iu(Z);return a(`/basket?items=${ke}`),Z})},y=(k,R,Z)=>rn.find(ke=>ke.groupId===k&&ke.shape===R&&ke.length===Z),B=(k,R)=>{q(Z=>{const ke=[...Z],He=ke[k].quantity+R;let Oe;return He<=0?Oe=ke.filter((kl,rs)=>rs!==k):(ke[k]={...ke[k],quantity:He},Oe=ke),a(Oe.length?`/basket?items=${Iu(Oe)}`:"/basket"),Oe})},ge=k=>{q(R=>{const Z=R.filter((ke,He)=>He!==k);return a(Z.length?`/basket?items=${Iu(Z)}`:"/basket"),Z})},ie=(k,R)=>{K(Z=>({...Z,[k]:R})),X[k]&&pe(Z=>({...Z,[k]:""}))},xe=()=>{const k={};return W.firstName.trim()||(k.firstName="Required"),W.lastName.trim()||(k.lastName="Required"),(!W.email.trim()||!/\S+@\S+\.\S+/.test(W.email))&&(k.email="Valid email required"),W.phone.trim()||(k.phone="Required"),W.address.trim()||(k.address="Required"),W.city.trim()||(k.city="Required"),W.instagram.trim()||(k.instagram="Required"),W.postcode.trim()||(k.postcode="Required"),pe(k),Object.keys(k).length===0},me=async k=>{if(k.preventDefault(),!xe())return;if(A.length===0){L("Your basket is empty.");return}L(null),fe(!0);const R="https://juicegels-v2.onrender.com/create-checkout-session";try{const Z=await fetch(R,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:A.map(He=>({product:{id:He.product.id,name:He.product.name,price:He.product.price,description:He.product.description,image:He.product.image},shape:He.shape,length:He.length,quantity:He.quantity})),form:W,checkoutPath:"/confirmation"})}),ke=await Z.json();if(!Z.ok||!ke.url)throw new Error(ke.error||"Failed to create checkout session.");window.location.href=ke.url}catch(Z){L(Z instanceof Error?Z.message:"Checkout failed."),fe(!1)}},Ie=()=>{p==="preorder"?g("basket"):p==="basket"?g(f?"product":"home"):a("/home")};return b.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",maxWidth:430,margin:"0 auto",minHeight:"100vh",background:"var(--background)"},children:[b.jsxs("header",{style:{background:"var(--card)",borderBottom:"1px solid var(--border)",position:"sticky",top:0,zIndex:50,padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[p!=="home"?b.jsx("button",{onClick:Ie,style:{color:"var(--primary)",background:"none",border:"none",cursor:"pointer",padding:4},"aria-label":"Back",children:b.jsx(g_,{size:22})}):b.jsx("div",{style:{width:30}}),b.jsx("h1",{style:{fontFamily:"'Playfair Display', serif",color:"var(--primary)",margin:0,letterSpacing:"0.04em",fontSize:22},children:"Juice Gels"}),b.jsxs("button",{onClick:()=>a("/basket"),style:{position:"relative",background:"none",border:"none",cursor:"pointer",padding:4},"aria-label":"Basket",children:[b.jsx(td,{size:22,style:{color:"var(--primary)"}}),Se>0&&b.jsx("span",{style:{position:"absolute",top:-4,right:-4,background:"var(--primary)",color:"#fff",borderRadius:"50%",width:17,height:17,fontSize:10,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700},children:Se})]})]}),(p==="basket"||p==="preorder"||p==="confirmation")&&b.jsx("div",{style:{display:"flex",padding:"10px 20px",gap:6,alignItems:"center",background:"var(--card)",borderBottom:"1px solid var(--border)"},children:["Basket","Details","Done"].map((k,R)=>{const Z=p==="basket"&&R===0||p==="preorder"&&R===1||p==="confirmation"&&R===2,ke=p==="preorder"&&R===0||p==="confirmation"&&R<=1;return b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,flex:R<2?1:void 0},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5},children:[b.jsx("div",{style:{width:22,height:22,borderRadius:"50%",background:ke?"var(--primary)":Z?"var(--accent)":"var(--muted)",border:`2px solid ${Z||ke?"var(--primary)":"var(--border)"}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:ke?b.jsx(sd,{size:11,color:"#fff"}):b.jsx("span",{style:{fontSize:10,color:Z?"var(--foreground)":"var(--muted-foreground)",fontWeight:600},children:R+1})}),b.jsx("span",{style:{fontSize:11,color:Z?"var(--foreground)":"var(--muted-foreground)",fontWeight:Z?600:400},children:k})]}),R<2&&b.jsx("div",{style:{flex:1,height:1.5,background:ke?"var(--primary)":"var(--border)",borderRadius:2}})]},k)})}),p==="home"&&b.jsxs("main",{children:[b.jsxs("div",{style:{background:"linear-gradient(160deg, #f9d5e0 0%, #fce4ea 60%, #fdf2f4 100%)",padding:"28px 20px 22px",textAlign:"center"},children:[b.jsx("p",{style:{color:"var(--muted-foreground)",margin:"0 0 5px",letterSpacing:"0.12em",fontSize:11,textTransform:"uppercase"},children:"Handmade Press-On Nails"}),b.jsx("h2",{style:{fontFamily:"'Playfair Display', serif",fontSize:30,color:"var(--foreground)",margin:"0 0 8px",lineHeight:1.2},children:"Nail the Look ✨"}),b.jsx("p",{style:{color:"var(--muted-foreground)",margin:"0 0 4px",fontSize:13,lineHeight:1.6},children:"Custom-fit gel press-ons · Send your nail sizes for a perfect fit"})]}),b.jsx("div",{style:{padding:"16px 14px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:L_.map(k=>b.jsxs("button",{onClick:()=>Q(k),style:{background:"var(--card)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",textAlign:"left",cursor:"pointer",padding:0,position:"relative",display:"block",width:"100%"},children:[b.jsx("button",{onClick:R=>{R.stopPropagation(),Ae(k.id)},style:{position:"absolute",top:7,right:7,background:"rgba(255,255,255,0.88)",border:"none",borderRadius:"50%",width:28,height:28,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:2},"aria-label":"Wishlist",children:b.jsx(id,{size:13,fill:U.includes(k.id)?"var(--primary)":"none",stroke:U.includes(k.id)?"var(--primary)":"var(--muted-foreground)"})}),b.jsx(nn,{src:k.image,alt:k.name,style:{width:"100%",height:160,objectFit:"cover",display:"block",background:"var(--secondary)"}}),b.jsxs("div",{style:{padding:"8px 10px 10px"},children:[b.jsx("p",{style:{margin:"0 0 5px",fontSize:12,color:"var(--foreground)",lineHeight:1.3},children:k.name}),b.jsxs("span",{style:{color:"var(--primary)",fontWeight:600,fontSize:14},children:["£",k.price.toFixed(2)]})]})]},k.id))}),b.jsxs("div",{style:{margin:"4px 14px 32px",background:"var(--secondary)",borderRadius:14,padding:"16px 18px",textAlign:"center"},children:[b.jsx("p",{style:{fontFamily:"'Playfair Display', serif",color:"var(--foreground)",margin:"0 0 3px",fontSize:16},children:"Need your nail sizes?"}),b.jsx("p",{style:{color:"var(--muted-foreground)",margin:0,fontSize:12},children:"Pick up the Nail Sizing Guide — £4 deducted from your first set 🌸"})]})]}),p==="product"&&f&&b.jsxs("main",{children:[b.jsx(nn,{src:[f.image,...f.extraImages][re],alt:f.name,style:{width:"100%",height:320,objectFit:"cover",display:"block",background:"var(--secondary)"}}),f.extraImages.length>0&&b.jsx("div",{style:{display:"flex",gap:8,padding:"10px 16px 0",overflowX:"auto"},children:[f.image,...f.extraImages].map((k,R)=>b.jsx("button",{onClick:()=>ve(R),style:{flexShrink:0,border:`2px solid ${re===R?"var(--primary)":"var(--border)"}`,borderRadius:8,overflow:"hidden",padding:0,cursor:"pointer",background:"none"},children:b.jsx(nn,{src:k,alt:"",style:{width:52,height:52,objectFit:"cover",display:"block"}})},R))}),b.jsxs("div",{style:{padding:"16px 20px 130px"},children:[b.jsx("h2",{style:{fontFamily:"'Playfair Display', serif",margin:"0 0 4px",fontSize:22,color:"var(--foreground)"},children:f.name}),b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,marginBottom:10},children:[[1,2,3,4,5].map(k=>b.jsx(w_,{size:12,fill:"var(--primary)",stroke:"none"},k)),b.jsx("span",{style:{fontSize:12,color:"var(--muted-foreground)",marginLeft:3},children:"Handmade · In stock"})]}),b.jsxs("span",{style:{fontSize:24,fontWeight:700,color:"var(--primary)"},children:["£",f.price.toFixed(2)]}),b.jsx("p",{style:{color:"var(--muted-foreground)",fontSize:13,lineHeight:1.7,margin:"12px 0 18px"},children:f.description}),Le(f)?null:b.jsxs(b.Fragment,{children:[b.jsx("p",{style:{margin:"0 0 8px",fontSize:13,fontWeight:600,color:"var(--foreground)"},children:"Nail Shape"}),b.jsx("div",{style:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:20},children:f.shapes.map(k=>b.jsx("button",{onClick:()=>{if(!f)return;const R=y(f.groupId,k,S);R&&(m(R),E(k),J(R.length))},style:{border:`1.5px solid ${_===k?"var(--primary)":"var(--border)"}`,background:_===k?"var(--primary)":"var(--card)",color:_===k?"#fff":"var(--foreground)",borderRadius:8,padding:"6px 14px",fontSize:12,cursor:"pointer",transition:"all 0.15s"},children:k},k))}),b.jsx("p",{style:{margin:"0 0 8px",fontSize:13,fontWeight:600,color:"var(--foreground)"},children:"Nail Length"}),b.jsx("div",{style:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:20},children:["Short","Medium","Long"].map(k=>b.jsx("button",{onClick:()=>{if(!f)return;const R=y(f.groupId,_,k);R&&(m(R),J(k),E(R.shape))},style:{border:`1.5px solid ${S===k?"var(--primary)":"var(--border)"}`,background:S===k?"var(--primary)":"var(--card)",color:S===k?"#fff":"var(--foreground)",borderRadius:8,padding:"6px 14px",fontSize:12,cursor:"pointer",transition:"all 0.15s",textTransform:"capitalize"},children:k},k))})]}),Le(f)?null:b.jsxs("div",{style:{background:"var(--muted)",borderRadius:10,padding:"10px 14px",fontSize:12,color:"var(--muted-foreground)",lineHeight:1.5},children:["🌸 Send your nail sizes after ordering via ",b.jsx("strong",{children:"@juicegels"})," on Instagram or through your order notes."]})]}),b.jsxs("div",{style:{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:430,padding:"14px 18px",background:"var(--card)",borderTop:"1px solid var(--border)",display:"flex",gap:10,boxSizing:"border-box"},children:[b.jsx("button",{onClick:()=>Ae(f.id),style:{border:"1.5px solid var(--border)",background:"var(--card)",borderRadius:12,width:46,height:46,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",flexShrink:0},children:b.jsx(id,{size:17,fill:U.includes(f.id)?"var(--primary)":"none",stroke:U.includes(f.id)?"var(--primary)":"var(--muted-foreground)"})}),b.jsx("button",{onClick:V,disabled:!_||!S,style:{flex:1,background:_&&S?"var(--primary)":"var(--muted)",color:_&&S?"#fff":"var(--muted-foreground)",border:"none",borderRadius:12,height:46,fontWeight:600,fontSize:14,cursor:_&&S?"pointer":"not-allowed",transition:"all 0.15s"},children:_&&S?"Add to Basket":"Select shape and length"})]})]}),p==="basket"&&b.jsxs("main",{style:{padding:"16px 16px 100px"},children:[b.jsx("h2",{style:{fontFamily:"'Playfair Display', serif",fontSize:20,color:"var(--foreground)",margin:"0 0 14px"},children:"Your Basket"}),A.length===0?b.jsxs("div",{style:{textAlign:"center",padding:"48px 20px"},children:[b.jsx(td,{size:40,style:{color:"var(--muted-foreground)",marginBottom:12}}),b.jsx("p",{style:{color:"var(--muted-foreground)",fontSize:14},children:"Your basket is empty"}),b.jsx("button",{onClick:()=>a("/"),style:{marginTop:16,background:"var(--primary)",color:"#fff",border:"none",borderRadius:10,padding:"10px 24px",fontSize:14,fontWeight:600,cursor:"pointer"},children:"Browse Sets"})]}):b.jsxs(b.Fragment,{children:[b.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10,marginBottom:16},children:A.map((k,R)=>b.jsxs("div",{style:{background:"var(--card)",border:"1px solid var(--border)",borderRadius:14,padding:"12px",display:"flex",gap:12,alignItems:"center"},children:[b.jsx(nn,{src:k.product.image,alt:k.product.name,style:{width:64,height:64,borderRadius:10,objectFit:"cover",flexShrink:0,background:"var(--secondary)"}}),b.jsxs("div",{style:{flex:1,minWidth:0},children:[b.jsx("p",{style:{margin:"0 0 2px",fontSize:13,fontWeight:500,color:"var(--foreground)",lineHeight:1.3},children:k.product.name}),b.jsxs("p",{style:{margin:"0 0 6px",fontSize:11,color:"var(--muted-foreground)"},children:["Shape: ",k.shape]}),b.jsxs("p",{style:{margin:"0 0 6px",fontSize:11,color:"var(--muted-foreground)"},children:["Length: ",k.length]}),b.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:1},children:[b.jsx("button",{onClick:()=>B(R,-1),style:{width:26,height:26,borderRadius:6,border:"1px solid var(--border)",background:"var(--muted)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:b.jsx(h_,{size:12})}),b.jsx("span",{style:{minWidth:28,textAlign:"center",fontSize:13,fontWeight:600},children:k.quantity}),b.jsx("button",{onClick:()=>B(R,1),style:{width:26,height:26,borderRadius:6,border:"1px solid var(--border)",background:"var(--muted)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:b.jsx(j_,{size:12})})]}),b.jsxs("span",{style:{color:"var(--primary)",fontWeight:700,fontSize:14},children:["£",(k.product.price*k.quantity).toFixed(2)]})]})]}),b.jsx("button",{onClick:()=>ge(R),style:{background:"none",border:"none",cursor:"pointer",padding:4,flexShrink:0},children:b.jsx(y_,{size:15,style:{color:"var(--muted-foreground)"}})})]},`${k.product.id}-${k.shape}`))}),b.jsxs("div",{style:{background:"var(--secondary)",borderRadius:14,padding:"14px 16px",marginBottom:14},children:[b.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,marginBottom:6},children:[b.jsxs("span",{style:{color:"var(--muted-foreground)"},children:["Subtotal (",Se," item",Se!==1?"s":"",")"]}),b.jsxs("span",{children:["£",Re.toFixed(2)]})]}),b.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,marginBottom:8},children:[b.jsx("span",{style:{color:"var(--muted-foreground)"},children:"Delivery"}),b.jsx("span",{style:{color:"var(--primary)"},children:"Free"})]}),b.jsxs("div",{style:{borderTop:"1px solid var(--border)",paddingTop:8,display:"flex",justifyContent:"space-between",fontWeight:700,fontSize:15},children:[b.jsx("span",{children:"Total"}),b.jsxs("span",{children:["£",Re.toFixed(2)]})]})]}),b.jsxs("div",{style:{background:"var(--muted)",borderRadius:10,padding:"10px 14px",fontSize:12,color:"var(--muted-foreground)",lineHeight:1.5,marginBottom:4},children:["💅 Remember to send your nail sizes after ordering via ",b.jsx("strong",{children:"@juicegels"})," on Instagram or in your order notes."]})]})]}),A.length>0&&p==="basket"&&b.jsxs("div",{style:{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:430,padding:"14px 18px",background:"var(--card)",borderTop:"1px solid var(--border)",display:"flex",gap:10,boxSizing:"border-box"},children:[b.jsx("button",{onClick:()=>a("/"),style:{border:"1.5px solid var(--border)",background:"var(--card)",borderRadius:12,height:46,padding:"0 16px",fontSize:13,fontWeight:500,cursor:"pointer",flexShrink:0},children:"+ Add more"}),b.jsxs("button",{onClick:()=>{K(an),pe({}),g("preorder")},style:{flex:1,background:"var(--primary)",color:"#fff",border:"none",borderRadius:12,height:46,fontWeight:600,fontSize:14,cursor:"pointer"},children:["Pre-order · £",Re.toFixed(2)]})]}),p==="preorder"&&b.jsxs("main",{style:{padding:"18px 18px 48px"},children:[b.jsx("h2",{style:{fontFamily:"'Playfair Display', serif",fontSize:20,color:"var(--foreground)",margin:"0 0 4px"},children:"Your Details"}),b.jsxs("p",{style:{color:"var(--muted-foreground)",fontSize:12,margin:"0 0 18px"},children:[Se," item",Se!==1?"s":""," · £",Re.toFixed(2)," total"]}),b.jsxs("form",{onSubmit:me,noValidate:!0,style:{display:"flex",flexDirection:"column",gap:13},children:[b.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},children:[b.jsx(_s,{label:"First name",error:X.firstName,children:b.jsx("input",{type:"text",placeholder:"Sophie",value:W.firstName,onChange:k=>ie("firstName",k.target.value),style:js(!!X.firstName)})}),b.jsx(_s,{label:"Last name",error:X.lastName,children:b.jsx("input",{type:"text",placeholder:"Wright",value:W.lastName,onChange:k=>ie("lastName",k.target.value),style:js(!!X.lastName)})})]}),b.jsx(_s,{label:"Email address",error:X.email,children:b.jsx("input",{type:"email",placeholder:"sophie@example.com",value:W.email,onChange:k=>ie("email",k.target.value),style:js(!!X.email)})}),b.jsx(_s,{label:"Phone number",error:X.phone,children:b.jsx("input",{type:"tel",placeholder:"+44 7700 900000",value:W.phone,onChange:k=>ie("phone",k.target.value),style:js(!!X.phone)})}),b.jsx(_s,{label:"Delivery address",error:X.address,children:b.jsx("input",{type:"text",placeholder:"12 Petal Lane",value:W.address,onChange:k=>ie("address",k.target.value),style:js(!!X.address)})}),b.jsx(_s,{label:"Instagram username",error:X.instagram,children:b.jsx("input",{type:"text",placeholder:"@juicegels",value:W.instagram,onChange:k=>ie("instagram",k.target.value),style:js(!!X.instagram)})}),b.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},children:[b.jsx(_s,{label:"City",error:X.city,children:b.jsx("input",{type:"text",placeholder:"London",value:W.city,onChange:k=>ie("city",k.target.value),style:js(!!X.city)})}),b.jsx(_s,{label:"Postcode",error:X.postcode,children:b.jsx("input",{type:"text",placeholder:"SW1A 1AA",value:W.postcode,onChange:k=>ie("postcode",k.target.value),style:js(!!X.postcode)})})]}),b.jsxs(_s,{label:"Your nail sizes (e.g. R: 3,5,4,6,4 · L: 3,5,4,6,4)",children:[b.jsx("input",{type:"text",placeholder:"Right: 3,5,4,6,4  Left: 3,5,4,6,4",value:W.nailSizes,onChange:k=>ie("nailSizes",k.target.value),style:js(!1)}),b.jsx("span",{style:{fontSize:11,color:"var(--muted-foreground)",lineHeight:1.4},children:"Not sure? Order the Nail Sizing Guide first — or send your sizes via @juicegels on Instagram after ordering."})]}),b.jsx(_s,{label:"Additional notes (optional)",children:b.jsx("textarea",{placeholder:"Any special requests, colour preferences, or custom details...",value:W.notes,onChange:k=>ie("notes",k.target.value),rows:3,style:{...js(!1),resize:"none"}})}),b.jsxs("div",{style:{background:"var(--secondary)",borderRadius:13,padding:"13px 15px",fontSize:13,lineHeight:1.7,color:"var(--foreground)"},children:[b.jsx("strong",{style:{display:"block",marginBottom:6},children:"Order Summary"}),A.map((k,R)=>b.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,color:"var(--muted-foreground)"},children:[b.jsxs("span",{children:[k.product.name," (",k.shape,") ×",k.quantity]}),b.jsxs("span",{children:["£",(k.product.price*k.quantity).toFixed(2)]})]},R)),b.jsxs("div",{style:{borderTop:"1px solid var(--border)",marginTop:8,paddingTop:8,display:"flex",justifyContent:"space-between",fontWeight:700},children:[b.jsx("span",{children:"Total"}),b.jsxs("span",{children:["£",Re.toFixed(2)]})]})]}),b.jsx("button",{type:"submit",disabled:Ee,style:{background:Ee?"var(--border)":"var(--primary)",color:"#fff",border:"none",borderRadius:12,height:48,fontWeight:600,fontSize:14,cursor:Ee?"not-allowed":"pointer",letterSpacing:"0.02em"},children:Ee?"Redirecting to Stripe...":"Confirm Pre-order 🌸"}),Ce&&b.jsx("p",{style:{color:"var(--destructive)",fontSize:12,marginTop:10},children:Ce})]})]}),p==="confirmation"&&b.jsxs("main",{style:{padding:"44px 22px",textAlign:"center"},children:[b.jsx("div",{style:{width:68,height:68,borderRadius:"50%",background:"var(--secondary)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 18px"},children:b.jsx(sd,{size:30,style:{color:"var(--primary)"}})}),b.jsx("h2",{style:{fontFamily:"'Playfair Display', serif",fontSize:24,color:"var(--foreground)",margin:"0 0 8px"},children:"Order Placed!"}),b.jsxs("p",{style:{color:"var(--muted-foreground)",fontSize:13,lineHeight:1.7,margin:"0 0 6px"},children:["Thank you, ",b.jsx("strong",{children:W.firstName}),"! Your pre-order of ",Se," item",Se!==1?"s":""," is confirmed."]}),b.jsxs("p",{style:{color:"var(--muted-foreground)",fontSize:12,margin:"0 0 24px",lineHeight:1.5},children:["A confirmation will be sent to ",b.jsx("strong",{children:W.email}),".",b.jsx("br",{}),!W.nailSizes&&b.jsxs("span",{style:{color:"var(--primary)"},children:["📏 Don't forget to DM your nail sizes to ",b.jsx("strong",{children:"@juicegels"})," on Instagram!"]})]}),b.jsxs("div",{style:{background:"var(--secondary)",borderRadius:13,padding:"14px",textAlign:"left",marginBottom:14},children:[b.jsx("p",{style:{margin:"0 0 8px",fontWeight:600,fontSize:13},children:"Items ordered"}),A.map((k,R)=>b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[b.jsx(nn,{src:k.product.image,alt:k.product.name,style:{width:40,height:40,borderRadius:7,objectFit:"cover",background:"var(--muted)"}}),b.jsxs("div",{children:[b.jsx("p",{style:{margin:0,fontSize:12,fontWeight:500,color:"var(--foreground)"},children:k.product.name}),b.jsxs("p",{style:{margin:0,fontSize:11,color:"var(--muted-foreground)"},children:[k.shape," · ×",k.quantity," · £",(k.product.price*k.quantity).toFixed(2)]})]})]},R))]}),b.jsxs("div",{style:{background:"var(--card)",border:"1px solid var(--border)",borderRadius:13,padding:"14px",textAlign:"left",marginBottom:24},children:[b.jsx("p",{style:{margin:"0 0 5px",fontWeight:600,fontSize:13},children:"Delivering to"}),b.jsxs("p",{style:{margin:0,fontSize:12,color:"var(--muted-foreground)",lineHeight:1.6},children:[W.firstName," ",W.lastName,b.jsx("br",{}),W.address,b.jsx("br",{}),W.city,", ",W.postcode]})]}),b.jsx("button",{onClick:()=>{a("/"),q([]),K(an)},style:{background:"var(--primary)",color:"#fff",border:"none",borderRadius:12,height:46,width:"100%",fontWeight:600,fontSize:14,cursor:"pointer"},children:"Continue Shopping"})]})]})}function _s({label:t,error:a,children:o}){return b.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[b.jsx("label",{style:{fontSize:11,fontWeight:600,color:"var(--foreground)",letterSpacing:"0.03em",textTransform:"uppercase"},children:t}),o,a&&b.jsx("span",{style:{fontSize:11,color:"var(--destructive)"},children:a})]})}function js(t){return{background:"var(--input-background)",border:`1.5px solid ${t?"var(--destructive)":"var(--border)"}`,borderRadius:9,padding:"10px 13px",fontSize:14,color:"var(--foreground)",outline:"none",width:"100%",boxSizing:"border-box"}}const G_=Oh([{path:"/",element:b.jsx(ct,{})},{path:"/home",element:b.jsx(ct,{})},{path:"/basket",element:b.jsx(ct,{})},{path:"/product/:id",element:b.jsx(ct,{})},{path:"/confirmation",element:b.jsx(ct,{})},{path:"*",element:b.jsx(ct,{})}]);a_.createRoot(document.getElementById("root")).render(b.jsx(t_,{router:G_}));
