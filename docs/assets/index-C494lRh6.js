function Cf(t,a){for(var o=0;o<a.length;o++){const r=a[o];if(typeof r!="string"&&!Array.isArray(r)){for(const c in r)if(c!=="default"&&!(c in t)){const p=Object.getOwnPropertyDescriptor(r,c);p&&Object.defineProperty(t,c,p.get?p:{enumerable:!0,get:()=>r[c]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const p of c)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&r(g)}).observe(document,{childList:!0,subtree:!0});function o(c){const p={};return c.integrity&&(p.integrity=c.integrity),c.referrerPolicy&&(p.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?p.credentials="include":c.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function r(c){if(c.ep)return;c.ep=!0;const p=o(c);fetch(c.href,p)}})();function Lf(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Su={exports:{}},sn={},vu={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function If(){if(mp)return ze;mp=1;var t=Symbol.for("react.element"),a=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),g=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),S=Symbol.iterator;function J(y){return y===null||typeof y!="object"?null:(y=S&&y[S]||y["@@iterator"],typeof y=="function"?y:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,A={};function q(y,B,ce){this.props=y,this.context=B,this.refs=A,this.updater=ce||U}q.prototype.isReactComponent={},q.prototype.setState=function(y,B){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,B,"setState")},q.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function D(){}D.prototype=q.prototype;function K(y,B,ce){this.props=y,this.context=B,this.refs=A,this.updater=ce||U}var X=K.prototype=new D;X.constructor=K,H(X,q.prototype),X.isPureReactComponent=!0;var pe=Array.isArray,ue=Object.prototype.hasOwnProperty,ve={current:null},Ce={key:!0,ref:!0,__self:!0,__source:!0};function L(y,B,ce){var me,ge={},he=null,Le=null;if(B!=null)for(me in B.ref!==void 0&&(Le=B.ref),B.key!==void 0&&(he=""+B.key),B)ue.call(B,me)&&!Ce.hasOwnProperty(me)&&(ge[me]=B[me]);var qe=arguments.length-2;if(qe===1)ge.children=ce;else if(1<qe){for(var k=Array(qe),$=0;$<qe;$++)k[$]=arguments[$+2];ge.children=k}if(y&&y.defaultProps)for(me in qe=y.defaultProps,qe)ge[me]===void 0&&(ge[me]=qe[me]);return{$$typeof:t,type:y,key:he,ref:Le,props:ge,_owner:ve.current}}function ke(y,B){return{$$typeof:t,type:y.type,key:B,ref:y.ref,props:y.props,_owner:y._owner}}function fe(y){return typeof y=="object"&&y!==null&&y.$$typeof===t}function Ne(y){var B={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(ce){return B[ce]})}var xe=/\/+/g;function Ge(y,B){return typeof y=="object"&&y!==null&&y.key!=null?Ne(""+y.key):B.toString(36)}function Pe(y,B,ce,me,ge){var he=typeof y;(he==="undefined"||he==="boolean")&&(y=null);var Le=!1;if(y===null)Le=!0;else switch(he){case"string":case"number":Le=!0;break;case"object":switch(y.$$typeof){case t:case a:Le=!0}}if(Le)return Le=y,ge=ge(Le),y=me===""?"."+Ge(Le,0):me,pe(ge)?(ce="",y!=null&&(ce=y.replace(xe,"$&/")+"/"),Pe(ge,B,ce,"",function($){return $})):ge!=null&&(fe(ge)&&(ge=ke(ge,ce+(!ge.key||Le&&Le.key===ge.key?"":(""+ge.key).replace(xe,"$&/")+"/")+y)),B.push(ge)),1;if(Le=0,me=me===""?".":me+":",pe(y))for(var qe=0;qe<y.length;qe++){he=y[qe];var k=me+Ge(he,qe);Le+=Pe(he,B,ce,k,ge)}else if(k=J(y),typeof k=="function")for(y=k.call(y),qe=0;!(he=y.next()).done;)he=he.value,k=me+Ge(he,qe++),Le+=Pe(he,B,ce,k,ge);else if(he==="object")throw B=String(y),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return Le}function Me(y,B,ce){if(y==null)return y;var me=[],ge=0;return Pe(y,me,"","",function(he){return B.call(ce,he,ge++)}),me}function Oe(y){if(y._status===-1){var B=y._result;B=B(),B.then(function(ce){(y._status===0||y._status===-1)&&(y._status=1,y._result=ce)},function(ce){(y._status===0||y._status===-1)&&(y._status=2,y._result=ce)}),y._status===-1&&(y._status=0,y._result=B)}if(y._status===1)return y._result.default;throw y._result}var de={current:null},N={transition:null},Q={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:N,ReactCurrentOwner:ve};function V(){throw Error("act(...) is not supported in production builds of React.")}return ze.Children={map:Me,forEach:function(y,B,ce){Me(y,function(){B.apply(this,arguments)},ce)},count:function(y){var B=0;return Me(y,function(){B++}),B},toArray:function(y){return Me(y,function(B){return B})||[]},only:function(y){if(!fe(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},ze.Component=q,ze.Fragment=o,ze.Profiler=c,ze.PureComponent=K,ze.StrictMode=r,ze.Suspense=m,ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,ze.act=V,ze.cloneElement=function(y,B,ce){if(y==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+y+".");var me=H({},y.props),ge=y.key,he=y.ref,Le=y._owner;if(B!=null){if(B.ref!==void 0&&(he=B.ref,Le=ve.current),B.key!==void 0&&(ge=""+B.key),y.type&&y.type.defaultProps)var qe=y.type.defaultProps;for(k in B)ue.call(B,k)&&!Ce.hasOwnProperty(k)&&(me[k]=B[k]===void 0&&qe!==void 0?qe[k]:B[k])}var k=arguments.length-2;if(k===1)me.children=ce;else if(1<k){qe=Array(k);for(var $=0;$<k;$++)qe[$]=arguments[$+2];me.children=qe}return{$$typeof:t,type:y.type,key:ge,ref:he,props:me,_owner:Le}},ze.createContext=function(y){return y={$$typeof:g,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},y.Provider={$$typeof:p,_context:y},y.Consumer=y},ze.createElement=L,ze.createFactory=function(y){var B=L.bind(null,y);return B.type=y,B},ze.createRef=function(){return{current:null}},ze.forwardRef=function(y){return{$$typeof:f,render:y}},ze.isValidElement=fe,ze.lazy=function(y){return{$$typeof:E,_payload:{_status:-1,_result:y},_init:Oe}},ze.memo=function(y,B){return{$$typeof:_,type:y,compare:B===void 0?null:B}},ze.startTransition=function(y){var B=N.transition;N.transition={};try{y()}finally{N.transition=B}},ze.unstable_act=V,ze.useCallback=function(y,B){return de.current.useCallback(y,B)},ze.useContext=function(y){return de.current.useContext(y)},ze.useDebugValue=function(){},ze.useDeferredValue=function(y){return de.current.useDeferredValue(y)},ze.useEffect=function(y,B){return de.current.useEffect(y,B)},ze.useId=function(){return de.current.useId()},ze.useImperativeHandle=function(y,B,ce){return de.current.useImperativeHandle(y,B,ce)},ze.useInsertionEffect=function(y,B){return de.current.useInsertionEffect(y,B)},ze.useLayoutEffect=function(y,B){return de.current.useLayoutEffect(y,B)},ze.useMemo=function(y,B){return de.current.useMemo(y,B)},ze.useReducer=function(y,B,ce){return de.current.useReducer(y,B,ce)},ze.useRef=function(y){return de.current.useRef(y)},ze.useState=function(y){return de.current.useState(y)},ze.useSyncExternalStore=function(y,B,ce){return de.current.useSyncExternalStore(y,B,ce)},ze.useTransition=function(){return de.current.useTransition()},ze.version="18.3.1",ze}var hp;function Ju(){return hp||(hp=1,vu.exports=If()),vu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function Gf(){if(_p)return sn;_p=1;var t=Ju(),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function g(f,m,_){var E,S={},J=null,U=null;_!==void 0&&(J=""+_),m.key!==void 0&&(J=""+m.key),m.ref!==void 0&&(U=m.ref);for(E in m)r.call(m,E)&&!p.hasOwnProperty(E)&&(S[E]=m[E]);if(f&&f.defaultProps)for(E in m=f.defaultProps,m)S[E]===void 0&&(S[E]=m[E]);return{$$typeof:a,type:f,key:J,ref:U,props:S,_owner:c.current}}return sn.Fragment=o,sn.jsx=g,sn.jsxs=g,sn}var jp;function Pf(){return jp||(jp=1,Su.exports=Gf()),Su.exports}var b=Pf(),C=Ju();const Jf=Lf(C),zf=Cf({__proto__:null,default:Jf},[C]);/**
 * react-router v7.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var rd=t=>{throw TypeError(t)},cd=(t,a,o)=>a.has(t)||rd("Cannot "+o),Kl=(t,a,o)=>(cd(t,a,"read from private field"),o?o.call(t):a.get(t)),rn=(t,a,o)=>a.has(t)?rd("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(t):a.set(t,o),js=(t,a,o,r)=>(cd(t,a,"write to private field"),a.set(t,o),o),Sp="popstate";function vp(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function Uf(t={}){function a(r,c){var _;let p=(_=c.state)==null?void 0:_.masked,{pathname:g,search:f,hash:m}=p||r.location;return dn("",{pathname:g,search:f,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default",p?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function o(r,c){return typeof c=="string"?c:xs(c)}return Bf(a,o,null,t)}function Ie(t,a){if(t===!1||t===null||typeof t>"u")throw new Error(a)}function nl(t,a){if(!t){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function qf(){return Math.random().toString(36).substring(2,10)}function wp(t,a){return{usr:t.state,key:t.key,idx:a,masked:t.mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function dn(t,a,o=null,r,c){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof a=="string"?ys(a):a,state:o,key:a&&a.key||r||qf(),mask:c}}function xs({pathname:t="/",search:a="",hash:o=""}){return a&&a!=="?"&&(t+=a.charAt(0)==="?"?a:"?"+a),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function ys(t){let a={};if(t){let o=t.indexOf("#");o>=0&&(a.hash=t.substring(o),t=t.substring(0,o));let r=t.indexOf("?");r>=0&&(a.search=t.substring(r),t=t.substring(0,r)),t&&(a.pathname=t)}return a}function Bf(t,a,o,r={}){let{window:c=document.defaultView,v5Compat:p=!1}=r,g=c.history,f="POP",m=null,_=E();_==null&&(_=0,g.replaceState({...g.state,idx:_},""));function E(){return(g.state||{idx:null}).idx}function S(){f="POP";let q=E(),D=q==null?null:q-_;_=q,m&&m({action:f,location:A.location,delta:D})}function J(q,D){f="PUSH";let K=vp(q)?q:dn(A.location,q,D);_=E()+1;let X=wp(K,_),pe=A.createHref(K.mask||K);try{g.pushState(X,"",pe)}catch(ue){if(ue instanceof DOMException&&ue.name==="DataCloneError")throw ue;c.location.assign(pe)}p&&m&&m({action:f,location:A.location,delta:1})}function U(q,D){f="REPLACE";let K=vp(q)?q:dn(A.location,q,D);_=E();let X=wp(K,_),pe=A.createHref(K.mask||K);g.replaceState(X,"",pe),p&&m&&m({action:f,location:A.location,delta:0})}function H(q){return pd(c,q)}let A={get action(){return f},get location(){return t(c,g)},listen(q){if(m)throw new Error("A history only accepts one active listener");return c.addEventListener(Sp,S),m=q,()=>{c.removeEventListener(Sp,S),m=null}},createHref(q){return a(c,q)},createURL:H,encodeLocation(q){let D=H(q);return{pathname:D.pathname,search:D.search,hash:D.hash}},push:J,replace:U,go(q){return g.go(q)}};return A}function pd(t,a,o=!1){let r="http://localhost";t&&(r=t.location.origin!=="null"?t.location.origin:t.location.href),Ie(r,"No window.location.(origin|href) available to create URL");let c=typeof a=="string"?a:xs(a);return c=c.replace(/ $/,"%20"),!o&&c.startsWith("//")&&(c=r+c),new URL(c,r)}var cn,xp=class{constructor(t){if(rn(this,cn,new Map),t)for(let[a,o]of t)this.set(a,o)}get(t){if(Kl(this,cn).has(t))return Kl(this,cn).get(t);if(t.defaultValue!==void 0)return t.defaultValue;throw new Error("No value found for context")}set(t,a){Kl(this,cn).set(t,a)}};cn=new WeakMap;var Af=new Set(["lazy","caseSensitive","path","id","index","children"]);function Mf(t){return Af.has(t)}var Hf=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function Tf(t){return Hf.has(t)}function Rf(t){return t.index===!0}function gn(t,a,o=[],r={},c=!1){return t.map((p,g)=>{let f=[...o,String(g)],m=typeof p.id=="string"?p.id:f.join("-");if(Ie(p.index!==!0||!p.children,"Cannot specify children on an index route"),Ie(c||!r[m],`Found a route id collision on id "${m}".  Route id's must be globally unique within Data Router usages`),Rf(p)){let _={...p,id:m};return r[m]=yp(_,a(_)),_}else{let _={...p,id:m,children:void 0};return r[m]=yp(_,a(_)),p.children&&(_.children=gn(p.children,a,f,r,c)),_}})}function yp(t,a){return Object.assign(t,{...a,...typeof a.lazy=="object"&&a.lazy!=null?{lazy:{...t.lazy,...a.lazy}}:{}})}function dd(t,a,o="/"){return cs(t,a,o,!1)}function cs(t,a,o,r,c){let p=typeof a=="string"?ys(a):a,g=Xl(p.pathname||"/",o);if(g==null)return null;let f=c??Ga(t),m=null,_=em(g);for(let E=0;m==null&&E<f.length;++E)m=Xf(f[E],_,r);return m}function Of(t,a){let{route:o,pathname:r,params:c}=t;return{id:o.id,pathname:r,params:c,data:a[o.id],loaderData:a[o.id],handle:o.handle}}function Ga(t){let a=gd(t);return Nf(a),a}function gd(t,a=[],o=[],r="",c=!1){let p=(g,f,m=c,_)=>{let E={relativePath:_===void 0?g.path||"":_,caseSensitive:g.caseSensitive===!0,childrenIndex:f,route:g};if(E.relativePath.startsWith("/")){if(!E.relativePath.startsWith(r)&&m)return;Ie(E.relativePath.startsWith(r),`Absolute route path "${E.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),E.relativePath=E.relativePath.slice(r.length)}let S=Yl([r,E.relativePath]),J=o.concat(E);g.children&&g.children.length>0&&(Ie(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${S}".`),gd(g.children,a,J,S,m)),!(g.path==null&&!g.index)&&a.push({path:S,score:Qf(S,g.index),routesMeta:J})};return t.forEach((g,f)=>{var m;if(g.path===""||!((m=g.path)!=null&&m.includes("?")))p(g,f);else for(let _ of fd(g.path))p(g,f,!0,_)}),a}function fd(t){let a=t.split("/");if(a.length===0)return[];let[o,...r]=a,c=o.endsWith("?"),p=o.replace(/\?$/,"");if(r.length===0)return c?[p,""]:[p];let g=fd(r.join("/")),f=[];return f.push(...g.map(m=>m===""?p:[p,m].join("/"))),c&&f.push(...g),f.map(m=>t.startsWith("/")&&m===""?"/":m)}function Nf(t){t.sort((a,o)=>a.score!==o.score?o.score-a.score:Yf(a.routesMeta.map(r=>r.childrenIndex),o.routesMeta.map(r=>r.childrenIndex)))}var Ff=/^:[\w-]+$/,Df=3,Wf=2,$f=1,Vf=10,Kf=-2,Ep=t=>t==="*";function Qf(t,a){let o=t.split("/"),r=o.length;return o.some(Ep)&&(r+=Kf),a&&(r+=Wf),o.filter(c=>!Ep(c)).reduce((c,p)=>c+(Ff.test(p)?Df:p===""?$f:Vf),r)}function Yf(t,a){return t.length===a.length&&t.slice(0,-1).every((r,c)=>r===a[c])?t[t.length-1]-a[a.length-1]:0}function Xf(t,a,o=!1){let{routesMeta:r}=t,c={},p="/",g=[];for(let f=0;f<r.length;++f){let m=r[f],_=f===r.length-1,E=p==="/"?a:a.slice(p.length)||"/",S=Ua({path:m.relativePath,caseSensitive:m.caseSensitive,end:_},E),J=m.route;if(!S&&_&&o&&!r[r.length-1].route.index&&(S=Ua({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},E)),!S)return null;Object.assign(c,S.params),g.push({params:c,pathname:Yl([p,S.pathname]),pathnameBase:im(Yl([p,S.pathnameBase])),route:J}),S.pathnameBase!=="/"&&(p=Yl([p,S.pathnameBase]))}return g}function Ua(t,a){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[o,r]=Zf(t.path,t.caseSensitive,t.end),c=a.match(o);if(!c)return null;let p=c[0],g=p.replace(/(.)\/+$/,"$1"),f=c.slice(1);return{params:r.reduce((_,{paramName:E,isOptional:S},J)=>{if(E==="*"){let H=f[J]||"";g=p.slice(0,p.length-H.length).replace(/(.)\/+$/,"$1")}const U=f[J];return S&&!U?_[E]=void 0:_[E]=(U||"").replace(/%2F/g,"/"),_},{}),pathname:p,pathnameBase:g,pattern:t}}function Zf(t,a=!1,o=!0){nl(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],c="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,f,m,_,E)=>{if(r.push({paramName:f,isOptional:m!=null}),m){let S=E.charAt(_+g.length);return S&&S!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(r.push({paramName:"*"}),c+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?c+="\\/*$":t!==""&&t!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,a?void 0:"i"),r]}function em(t){try{return t.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return nl(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),t}}function Xl(t,a){if(a==="/")return t;if(!t.toLowerCase().startsWith(a.toLowerCase()))return null;let o=a.endsWith("/")?a.length-1:a.length,r=t.charAt(o);return r&&r!=="/"?null:t.slice(o)||"/"}function lm({basename:t,pathname:a}){return a==="/"?t:Yl([t,a])}var md=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zu=t=>md.test(t);function sm(t,a="/"){let{pathname:o,search:r="",hash:c=""}=typeof t=="string"?ys(t):t,p;return o?(o=qu(o),o.startsWith("/")?p=kp(o.substring(1),"/"):p=kp(o,a)):p=a,{pathname:p,search:tm(r),hash:nm(c)}}function kp(t,a){let o=qa(a).split("/");return t.split("/").forEach(c=>{c===".."?o.length>1&&o.pop():c!=="."&&o.push(c)}),o.length>1?o.join("/"):"/"}function wu(t,a,o,r){return`Cannot include a '${t}' character in a manually specified \`to.${a}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function hd(t){return t.filter((a,o)=>o===0||a.route.path&&a.route.path.length>0)}function Uu(t){let a=hd(t);return a.map((o,r)=>r===a.length-1?o.pathname:o.pathnameBase)}function Ba(t,a,o,r=!1){let c;typeof t=="string"?c=ys(t):(c={...t},Ie(!c.pathname||!c.pathname.includes("?"),wu("?","pathname","search",c)),Ie(!c.pathname||!c.pathname.includes("#"),wu("#","pathname","hash",c)),Ie(!c.search||!c.search.includes("#"),wu("#","search","hash",c)));let p=t===""||c.pathname==="",g=p?"/":c.pathname,f;if(g==null)f=o;else{let S=a.length-1;if(!r&&g.startsWith("..")){let J=g.split("/");for(;J[0]==="..";)J.shift(),S-=1;c.pathname=J.join("/")}f=S>=0?a[S]:"/"}let m=sm(c,f),_=g&&g!=="/"&&g.endsWith("/"),E=(p||g===".")&&o.endsWith("/");return!m.pathname.endsWith("/")&&(_||E)&&(m.pathname+="/"),m}var qu=t=>t.replace(/\/\/+/g,"/"),Yl=t=>qu(t.join("/")),qa=t=>t.replace(/\/+$/,""),im=t=>qa(t).replace(/^\/*/,"/"),tm=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,nm=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,mn=class{constructor(t,a,o,r=!1){this.status=t,this.statusText=a||"",this.internal=r,o instanceof Error?(this.data=o.toString(),this.error=o):this.data=o}};function fn(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function hn(t){let a=t.map(o=>o.route.path).filter(Boolean);return Yl(a)||"/"}var _d=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function jd(t,a){let o=t;if(typeof o!="string"||!md.test(o))return{absoluteURL:void 0,isExternal:!1,to:o};let r=o,c=!1;if(_d)try{let p=new URL(window.location.href),g=o.startsWith("//")?new URL(p.protocol+o):new URL(o),f=Xl(g.pathname,a);g.origin===p.origin&&f!=null?o=f+g.search+g.hash:c=!0}catch{nl(!1,`<Link to="${o}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:c,to:o}}var gi=Symbol("Uninstrumented");function am(t,a){let o={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};t.forEach(c=>c({id:a.id,index:a.index,path:a.path,instrument(p){let g=Object.keys(o);for(let f of g)p[f]&&o[f].push(p[f])}}));let r={};if(typeof a.lazy=="function"&&o.lazy.length>0){let c=_t(o.lazy,a.lazy,()=>{});c&&(r.lazy=c)}if(typeof a.lazy=="object"){let c=a.lazy;["middleware","loader","action"].forEach(p=>{let g=c[p],f=o[`lazy.${p}`];if(typeof g=="function"&&f.length>0){let m=_t(f,g,()=>{});m&&(r.lazy=Object.assign(r.lazy||{},{[p]:m}))}})}return["loader","action"].forEach(c=>{let p=a[c];if(typeof p=="function"&&o[c].length>0){let g=p[gi]??p,f=_t(o[c],g,(...m)=>bp(m[0]));f&&(c==="loader"&&g.hydrate===!0&&(f.hydrate=!0),f[gi]=g,r[c]=f)}}),a.middleware&&a.middleware.length>0&&o.middleware.length>0&&(r.middleware=a.middleware.map(c=>{let p=c[gi]??c,g=_t(o.middleware,p,(...f)=>bp(f[0]));return g?(g[gi]=p,g):c})),r}function om(t,a){let o={navigate:[],fetch:[]};if(a.forEach(r=>r({instrument(c){let p=Object.keys(c);for(let g of p)c[g]&&o[g].push(c[g])}})),o.navigate.length>0){let r=t.navigate[gi]??t.navigate,c=_t(o.navigate,r,(...p)=>{let[g,f]=p;return{to:typeof g=="number"||typeof g=="string"?g:g?xs(g):".",...Cp(t,f??{})}});c&&(c[gi]=r,t.navigate=c)}if(o.fetch.length>0){let r=t.fetch[gi]??t.fetch,c=_t(o.fetch,r,(...p)=>{let[g,,f,m]=p;return{href:f??".",fetcherKey:g,...Cp(t,m??{})}});c&&(c[gi]=r,t.fetch=c)}return t}function _t(t,a,o){return t.length===0?null:async(...r)=>{let c=await Sd(t,o(...r),()=>a(...r),t.length-1);if(c.type==="error")throw c.value;return c.value}}async function Sd(t,a,o,r){let c=t[r],p;if(c){let g,f=async()=>(g?console.error("You cannot call instrumented handlers more than once"):g=Sd(t,a,o,r-1),p=await g,Ie(p,"Expected a result"),p.type==="error"&&p.value instanceof Error?{status:"error",error:p.value}:{status:"success",error:void 0});try{await c(f,a)}catch(m){console.error("An instrumentation function threw an error:",m)}g||await f(),await g}else try{p={type:"success",value:await o()}}catch(g){p={type:"error",value:g}}return p||{type:"error",value:new Error("No result assigned in instrumentation chain.")}}function bp(t){let{request:a,context:o,params:r,pattern:c}=t;return{request:um(a),params:{...r},pattern:c,context:rm(o)}}function Cp(t,a){return{currentUrl:xs(t.state.location),..."formMethod"in a?{formMethod:a.formMethod}:{},..."formEncType"in a?{formEncType:a.formEncType}:{},..."formData"in a?{formData:a.formData}:{},..."body"in a?{body:a.body}:{}}}function um(t){return{method:t.method,url:t.url,headers:{get:(...a)=>t.headers.get(...a)}}}function rm(t){if(pm(t)){let a={...t};return Object.freeze(a),a}else return{get:a=>t.get(a)}}var cm=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function pm(t){if(t===null||typeof t!="object")return!1;const a=Object.getPrototypeOf(t);return a===Object.prototype||a===null||Object.getOwnPropertyNames(a).sort().join("\0")===cm}var vd=["POST","PUT","PATCH","DELETE"],dm=new Set(vd),gm=["GET",...vd],fm=new Set(gm),wd=new Set([301,302,303,307,308]),mm=new Set([307,308]),xu={state:"idle",location:void 0,matches:void 0,historyAction:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},hm={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},tn={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},_m=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),xd="remix-router-transitions",yd=Symbol("ResetLoaderData"),Ji,ft,ci,mt,jm=class{constructor(t){rn(this,Ji),rn(this,ft),rn(this,ci),rn(this,mt),js(this,Ji,t),js(this,ft,Ga(t))}get stableRoutes(){return Kl(this,Ji)}get activeRoutes(){return Kl(this,ci)??Kl(this,Ji)}get branches(){return Kl(this,mt)??Kl(this,ft)}get hasHMRRoutes(){return Kl(this,ci)!=null}setRoutes(t){js(this,Ji,t),js(this,ft,Ga(t))}setHmrRoutes(t){js(this,ci,t),js(this,mt,Ga(t))}commitHmrRoutes(){Kl(this,ci)&&(js(this,Ji,Kl(this,ci)),js(this,ft,Kl(this,mt)),js(this,ci,void 0),js(this,mt,void 0))}};Ji=new WeakMap;ft=new WeakMap;ci=new WeakMap;mt=new WeakMap;function Sm(t){const a=t.window?t.window:typeof window<"u"?window:void 0,o=typeof a<"u"&&typeof a.document<"u"&&typeof a.document.createElement<"u";Ie(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let r=t.hydrationRouteProperties||[],c=t.mapRouteProperties||_m,p=c;if(t.instrumentations){let j=t.instrumentations;p=w=>({...c(w),...am(j.map(G=>G.route).filter(Boolean),w)})}let g={},f=new jm(gn(t.routes,p,void 0,g)),m=t.basename||"/";m.startsWith("/")||(m=`/${m}`);let _=t.dataStrategy||Em,E={...t.future},S=null,J=new Set,U=null,H=null,A=null,q=null,D=t.hydrationData!=null,K=cs(f.activeRoutes,t.history.location,m,!1,f.branches),X=!1,pe=null,ue,ve;if(K==null&&!t.patchRoutesOnNavigation){let j=Ql(404,{pathname:t.history.location.pathname}),{matches:w,route:G}=ba(f.activeRoutes);ue=!0,ve=!ue,K=w,pe={[G.id]:j}}else if(K&&!t.hydrationData&&Ts(K,f.activeRoutes,t.history.location.pathname).active&&(K=null),K)if(K.some(j=>j.route.lazy))ue=!1,ve=!ue;else if(!K.some(j=>Bu(j.route)))ue=!0,ve=!ue;else{let j=t.hydrationData?t.hydrationData.loaderData:null,w=t.hydrationData?t.hydrationData.errors:null,G=K;if(w){let M=K.findIndex(T=>w[T.route.id]!==void 0);G=G.slice(0,M+1)}ve=!1,ue=!0,G.forEach(M=>{let T=Ed(M.route,j,w);ve=ve||T.renderFallback,ue=ue&&!T.shouldLoad})}else{ue=!1,ve=!ue,K=[];let j=Ts(null,f.activeRoutes,t.history.location.pathname);j.active&&j.matches&&(X=!0,K=j.matches)}let Ce,L={historyAction:t.history.action,location:t.history.location,matches:K,initialized:ue,renderFallback:ve,navigation:xu,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||pe,fetchers:new Map,blockers:new Map},ke="POP",fe=null,Ne=!1,xe,Ge=!1,Pe=new Map,Me=null,Oe=!1,de=!1,N=new Set,Q=new Map,V=0,y=-1,B=new Map,ce=new Set,me=new Map,ge=new Map,he=new Set,Le=new Map,qe,k=null;function $(){if(S=t.history.listen(({action:j,location:w,delta:G})=>{if(qe){qe(),qe=void 0;return}nl(Le.size===0||G!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let M=bs({currentLocation:L.location,nextLocation:w,historyAction:j});if(M&&G!=null){let T=new Promise(ne=>{qe=ne});t.history.go(G*-1),ls(M,{state:"blocked",location:w,proceed(){ls(M,{state:"proceeding",proceed:void 0,reset:void 0,location:w}),T.then(()=>t.history.go(G))},reset(){let ne=new Map(L.blockers);ne.set(M,tn),ie({blockers:ne})}}),fe==null||fe.resolve(),fe=null;return}return bl(j,w)}),o){Om(a,Pe);let j=()=>Nm(a,Pe);a.addEventListener("pagehide",j),Me=()=>a.removeEventListener("pagehide",j)}return L.initialized||bl("POP",L.location,{initialHydration:!0}),Ce}function we(){S&&S(),Me&&Me(),J.clear(),xe&&xe.abort(),L.fetchers.forEach((j,w)=>Bi(L.fetchers,w)),L.blockers.forEach((j,w)=>Ti(w))}function Je(j){if(J.add(j),U){let{newErrors:w}=U;U=null,j(L,{deletedFetchers:[],newErrors:w,viewTransitionOpts:void 0,flushSync:!1})}return()=>J.delete(j)}function ie(j,w={}){j.matches&&(j.matches=j.matches.map(T=>{let ne=g[T.route.id],ae=T.route;return ae.element!==ne.element||ae.errorElement!==ne.errorElement||ae.hydrateFallbackElement!==ne.hydrateFallbackElement?{...T,route:ne}:T})),L={...L,...j};let G=[],M=[];L.fetchers.forEach((T,ne)=>{T.state==="idle"&&(he.has(ne)?G.push(ne):M.push(ne))}),he.forEach(T=>{!L.fetchers.has(T)&&!Q.has(T)&&G.push(T)}),J.size===0&&(U={newErrors:j.errors??null}),[...J].forEach(T=>T(L,{deletedFetchers:G,newErrors:j.errors??null,viewTransitionOpts:w.viewTransitionOpts,flushSync:w.flushSync===!0})),G.forEach(T=>Bi(L.fetchers,T)),M.forEach(T=>L.fetchers.delete(T))}function Xe(j,w,{flushSync:G}={}){var Se,be;let M=L.actionData!=null&&L.navigation.formMethod!=null&&wl(L.navigation.formMethod)&&L.navigation.state==="loading"&&((Se=j.state)==null?void 0:Se._isRedirect)!==!0,T;w.actionData?Object.keys(w.actionData).length>0?T=w.actionData:T=null:M?T=L.actionData:T=null;let ne=w.loaderData?Mp(L.loaderData,w.loaderData,w.matches||[],w.errors):L.loaderData,ae=L.blockers;ae.size>0&&(ae=new Map(ae),ae.forEach((re,Ue)=>ae.set(Ue,tn)));let Ee=Oe?!1:xt(j,w.matches||L.matches),Y=Ne===!0||L.navigation.formMethod!=null&&wl(L.navigation.formMethod)&&((be=j.state)==null?void 0:be._isRedirect)!==!0;f.commitHmrRoutes(),Oe||ke==="POP"||(ke==="PUSH"?t.history.push(j,j.state):ke==="REPLACE"&&t.history.replace(j,j.state));let oe;if(ke==="POP"){let re=Pe.get(L.location.pathname);re&&re.has(j.pathname)?oe={currentLocation:L.location,nextLocation:j}:Pe.has(j.pathname)&&(oe={currentLocation:j,nextLocation:L.location})}else if(Ge){let re=Pe.get(L.location.pathname);re?re.add(j.pathname):(re=new Set([j.pathname]),Pe.set(L.location.pathname,re)),oe={currentLocation:L.location,nextLocation:j}}ie({...w,actionData:T,loaderData:ne,historyAction:ke,location:j,initialized:!0,renderFallback:!1,navigation:xu,revalidation:"idle",restoreScrollPosition:Ee,preventScrollReset:Y,blockers:ae},{viewTransitionOpts:oe,flushSync:G===!0}),ke="POP",Ne=!1,Ge=!1,Oe=!1,de=!1,fe==null||fe.resolve(),fe=null,k==null||k.resolve(),k=null}async function Tl(j,w){if(fe==null||fe.resolve(),fe=null,typeof j=="number"){fe||(fe=Op());let Re=fe.promise;return t.history.go(j),Re}let G=Iu(L.location,L.matches,m,j,w==null?void 0:w.fromRouteId,w==null?void 0:w.relative),{path:M,submission:T,error:ne}=Lp(!1,G,w),ae;w!=null&&w.mask&&(ae={pathname:"",search:"",hash:"",...typeof w.mask=="string"?ys(w.mask):{...L.location.mask,...w.mask}});let Ee=L.location,Y=dn(Ee,M,w&&w.state,void 0,ae);Y={...Y,...t.history.encodeLocation(Y)};let oe=w&&w.replace!=null?w.replace:void 0,Se="PUSH";oe===!0?Se="REPLACE":oe===!1||T!=null&&wl(T.formMethod)&&T.formAction===L.location.pathname+L.location.search&&(Se="REPLACE");let be=w&&"preventScrollReset"in w?w.preventScrollReset===!0:void 0,re=(w&&w.flushSync)===!0,Ue=bs({currentLocation:Ee,nextLocation:Y,historyAction:Se});if(Ue){ls(Ue,{state:"blocked",location:Y,proceed(){ls(Ue,{state:"proceeding",proceed:void 0,reset:void 0,location:Y}),Tl(j,w)},reset(){let Re=new Map(L.blockers);Re.set(Ue,tn),ie({blockers:Re})}});return}await bl(Se,Y,{submission:T,pendingError:ne,preventScrollReset:be,replace:w&&w.replace,enableViewTransition:w&&w.viewTransition,flushSync:re,callSiteDefaultShouldRevalidate:w&&w.defaultShouldRevalidate})}function Rl(){k||(k=Op()),Hs(),ie({revalidation:"loading"});let j=k.promise;return L.navigation.state==="submitting"?j:L.navigation.state==="idle"?(bl(L.historyAction,L.location,{startUninterruptedRevalidation:!0}),j):(bl(ke||L.historyAction,L.navigation.location,{overrideNavigation:L.navigation,enableViewTransition:Ge===!0}),j)}async function bl(j,w,G){xe&&xe.abort(),xe=null,ke=j,Oe=(G&&G.startUninterruptedRevalidation)===!0,En(L.location,L.matches),Ne=(G&&G.preventScrollReset)===!0,Ge=(G&&G.enableViewTransition)===!0;let M=f.activeRoutes,T=G!=null&&G.initialHydration&&L.matches&&L.matches.length>0&&!X?L.matches:cs(M,w,m,!1,f.branches),ne=(G&&G.flushSync)===!0;if(T&&L.initialized&&!de&&Jm(L.location,w)&&!(G&&G.submission&&wl(G.submission.formMethod))){Xe(w,{matches:T},{flushSync:ne});return}let ae=Ts(T,M,w.pathname);if(ae.active&&ae.matches&&(T=ae.matches),!T){let{error:Ve,notFoundMatches:Fe,route:Be}=Ri(w.pathname);Xe(w,{matches:Fe,loaderData:{},errors:{[Be.id]:Ve}},{flushSync:ne});return}let Ee=G&&G.overrideNavigation?{...G.overrideNavigation,matches:T,historyAction:j}:void 0;xe=new AbortController;let Y=ht(t.history,w,xe.signal,G&&G.submission),oe=t.getContext?await t.getContext():new xp,Se;if(G&&G.pendingError)Se=[di(T).route.id,{type:"error",error:G.pendingError}];else if(G&&G.submission&&wl(G.submission.formMethod)){let Ve=await mi(Y,w,G.submission,T,j,oe,ae.active,G&&G.initialHydration===!0,{replace:G.replace,flushSync:ne});if(Ve.shortCircuited)return;if(Ve.pendingActionResult){let[Fe,Be]=Ve.pendingActionResult;if(Hl(Be)&&fn(Be.error)&&Be.error.status===404){xe=null,Xe(w,{matches:Ve.matches,loaderData:{},errors:{[Fe]:Be.error}});return}}T=Ve.matches||T,Se=Ve.pendingActionResult,Ee=yu(w,T,j,G.submission),ne=!1,ae.active=!1,Y=ht(t.history,Y.url,Y.signal)}let{shortCircuited:be,matches:re,loaderData:Ue,errors:Re,workingFetchers:sl}=await hi(Y,w,T,j,oe,ae.active,Ee,G&&G.submission,G&&G.fetcherSubmission,G&&G.replace,G&&G.initialHydration===!0,ne,Se,G&&G.callSiteDefaultShouldRevalidate);be||(xe=null,Xe(w,{matches:re||T,...Hp(Se),loaderData:Ue,errors:Re,...sl?{fetchers:sl}:{}}))}async function mi(j,w,G,M,T,ne,ae,Ee,Y={}){Hs();let oe=Tm(w,M,T,G);if(ie({navigation:oe},{flushSync:Y.flushSync===!0}),ae){let re=await ji(M,w.pathname,j.signal);if(re.type==="aborted")return{shortCircuited:!0};if(re.type==="error"){if(re.partialMatches.length===0){let{matches:Re,route:sl}=ba(f.activeRoutes);return{matches:Re,pendingActionResult:[sl.id,{type:"error",error:re.error}]}}let Ue=di(re.partialMatches).route.id;return{matches:re.partialMatches,pendingActionResult:[Ue,{type:"error",error:re.error}]}}else if(re.matches)M=re.matches;else{let{notFoundMatches:Ue,error:Re,route:sl}=Ri(w.pathname);return{matches:Ue,pendingActionResult:[sl.id,{type:"error",error:Re}]}}}let Se,be=Pa(M,w);if(!be.route.action&&!be.route.lazy)Se={type:"error",error:Ql(405,{method:j.method,pathname:w.pathname,routeId:be.route.id})};else{let re=jt(p,g,j,w,M,be,Ee?[]:r,ne),Ue=await Ms(j,w,re,ne,null);if(Se=Ue[be.route.id],!Se){for(let Re of M)if(Ue[Re.route.id]){Se=Ue[Re.route.id];break}}if(j.signal.aborted)return{shortCircuited:!0}}if(zi(Se)){let re;return Y&&Y.replace!=null?re=Y.replace:re=qp(Se.response.headers.get("Location"),new URL(j.url),m,t.history)===L.location.pathname+L.location.search,await ds(j,Se,!0,{submission:G,replace:re}),{shortCircuited:!0}}if(Hl(Se)){let re=di(M,be.route.id);return(Y&&Y.replace)!==!0&&(ke="PUSH"),{matches:M,pendingActionResult:[re.route.id,Se,be.route.id]}}return{matches:M,pendingActionResult:[be.route.id,Se]}}async function hi(j,w,G,M,T,ne,ae,Ee,Y,oe,Se,be,re,Ue){let Re=ae||yu(w,G,M,Ee),sl=Ee||Y||Rp(Re),Ve=!Oe&&!Se;if(ne){if(Ve){let hl=ps(re);ie({navigation:Re,...hl!==void 0?{actionData:hl}:{}},{flushSync:be})}let Ae=await ji(G,w.pathname,j.signal);if(Ae.type==="aborted")return{shortCircuited:!0};if(Ae.type==="error"){if(Ae.partialMatches.length===0){let{matches:yl,route:Cl}=ba(f.activeRoutes);return{matches:yl,loaderData:{},errors:{[Cl.id]:Ae.error}}}let hl=di(Ae.partialMatches).route.id;return{matches:Ae.partialMatches,loaderData:{},errors:{[hl]:Ae.error}}}else if(Ae.matches)G=Ae.matches;else{let{error:hl,notFoundMatches:yl,route:Cl}=Ri(w.pathname);return{matches:yl,loaderData:{},errors:{[Cl.id]:hl}}}}let Fe=f.activeRoutes,{dsMatches:Be,revalidatingFetchers:fl}=Ip(j,T,p,g,t.history,L,G,sl,w,Se?[]:r,Se===!0,de,N,he,me,ce,Fe,m,t.patchRoutesOnNavigation!=null,f.branches,re,Ue);if(y=++V,!t.dataStrategy&&!Be.some(Ae=>Ae.shouldLoad)&&!Be.some(Ae=>Ae.route.middleware&&Ae.route.middleware.length>0)&&fl.length===0){let Ae=new Map(L.fetchers),hl=Mi(Ae);return Xe(w,{matches:G,loaderData:{},errors:re&&Hl(re[1])?{[re[0]]:re[1].error}:null,...Hp(re),...hl?{fetchers:Ae}:{}},{flushSync:be}),{shortCircuited:!0}}if(Ve){let Ae={};if(!ne){Ae.navigation=Re;let hl=ps(re);hl!==void 0&&(Ae.actionData=hl)}fl.length>0&&(Ae.fetchers=As(fl)),ie(Ae,{flushSync:be})}fl.forEach(Ae=>{es(Ae.key),Ae.controller&&Q.set(Ae.key,Ae.controller)});let Cs=()=>fl.forEach(Ae=>es(Ae.key));xe&&xe.signal.addEventListener("abort",Cs);let{loaderResults:ss,fetcherResults:is}=await qi(Be,fl,j,w,T);if(j.signal.aborted)return{shortCircuited:!0};xe&&xe.signal.removeEventListener("abort",Cs),fl.forEach(Ae=>Q.delete(Ae.key));let gs=Ca(ss);if(gs)return await ds(j,gs.result,!0,{replace:oe}),{shortCircuited:!0};if(gs=Ca(is),gs)return ce.add(gs.key),await ds(j,gs.result,!0,{replace:oe}),{shortCircuited:!0};let Ul=new Map(L.fetchers),{loaderData:Os,errors:al}=Ap(L,G,ss,re,fl,is,Ul);Se&&L.errors&&(al={...L.errors,...al});let Oi=Mi(Ul),ml=Hi(y,Ul),Ni=Oi||ml||fl.length>0;return{matches:G,loaderData:Os,errors:al,...Ni?{workingFetchers:Ul}:{}}}function ps(j){if(j&&!Hl(j[1]))return{[j[0]]:j[1].data};if(L.actionData)return Object.keys(L.actionData).length===0?null:L.actionData}function As(j){let w=new Map(L.fetchers);return j.forEach(G=>{let M=w.get(G.key),T=nn(void 0,M?M.data:void 0);w.set(G.key,T)}),w}async function St(j,w,G,M){es(j);let T=(M&&M.flushSync)===!0,ne=f.activeRoutes,ae=Iu(L.location,L.matches,m,G,w,M==null?void 0:M.relative),Ee=cs(ne,ae,m,!1,f.branches),Y=Ts(Ee,ne,ae);if(Y.active&&Y.matches&&(Ee=Y.matches),!Ee){xl(j,w,Ql(404,{pathname:ae}),{flushSync:T});return}let{path:oe,submission:Se,error:be}=Lp(!0,ae,M);if(be){xl(j,w,be,{flushSync:T});return}let re=t.getContext?await t.getContext():new xp,Ue=(M&&M.preventScrollReset)===!0;if(Se&&wl(Se.formMethod)){await vn(j,w,oe,Ee,re,Y.active,T,Ue,Se,M&&M.defaultShouldRevalidate);return}me.set(j,{routeId:w,path:oe}),await wn(j,w,oe,Ee,re,Y.active,T,Ue,Se)}async function vn(j,w,G,M,T,ne,ae,Ee,Y,oe){Hs(),me.delete(j);let Se=L.fetchers.get(j);Ol(j,Rm(Y,Se),{flushSync:ae});let be=new AbortController,re=ht(t.history,G,be.signal,Y);if(ne){let We=await ji(M,new URL(re.url).pathname,re.signal,j);if(We.type==="aborted")return;if(We.type==="error"){xl(j,w,We.error,{flushSync:ae});return}else if(We.matches)M=We.matches;else{xl(j,w,Ql(404,{pathname:G}),{flushSync:ae});return}}let Ue=Pa(M,G);if(!Ue.route.action&&!Ue.route.lazy){let We=Ql(405,{method:Y.formMethod,pathname:G,routeId:w});xl(j,w,We,{flushSync:ae});return}Q.set(j,be);let Re=V,sl=jt(p,g,re,G,M,Ue,r,T),Ve=await Ms(re,G,sl,T,j),Fe=Ve[Ue.route.id];if(!Fe){for(let We of sl)if(Ve[We.route.id]){Fe=Ve[We.route.id];break}}if(re.signal.aborted){Q.get(j)===be&&Q.delete(j);return}if(he.has(j)){if(zi(Fe)||Hl(Fe)){Ol(j,ws(void 0));return}}else{if(zi(Fe))if(Q.delete(j),y>Re){Ol(j,ws(void 0));return}else return ce.add(j),Ol(j,nn(Y)),ds(re,Fe,!1,{fetcherSubmission:Y,preventScrollReset:Ee});if(Hl(Fe)){xl(j,w,Fe.error);return}}let Be=L.navigation.location||L.location,fl=ht(t.history,Be,be.signal),Cs=f.activeRoutes,ss=L.navigation.state!=="idle"?cs(Cs,L.navigation.location,m,!1,f.branches):L.matches;Ie(ss,"Didn't find any matches after fetcher action");let is=++V;B.set(j,is);let{dsMatches:gs,revalidatingFetchers:Ul}=Ip(fl,T,p,g,t.history,L,ss,Y,Be,r,!1,de,N,he,me,ce,Cs,m,t.patchRoutesOnNavigation!=null,f.branches,[Ue.route.id,Fe],oe),Os=nn(Y,Fe.data),al=new Map(L.fetchers);al.set(j,Os),Ul.filter(We=>We.key!==j).forEach(We=>{let Ls=We.key,Fi=al.get(Ls),kn=nn(void 0,Fi?Fi.data:void 0);al.set(Ls,kn),es(Ls),We.controller&&Q.set(Ls,We.controller)}),ie({fetchers:al});let Oi=()=>Ul.forEach(We=>es(We.key));be.signal.addEventListener("abort",Oi);let{loaderResults:ml,fetcherResults:Ni}=await qi(gs,Ul,fl,Be,T);if(be.signal.aborted)return;be.signal.removeEventListener("abort",Oi),B.delete(j),Q.delete(j),Ul.forEach(We=>Q.delete(We.key));let Ae=L.fetchers.has(j),hl=We=>{if(!Ae)return We;let Ls=new Map(We.fetchers);return Ls.set(j,ws(Fe.data)),{...We,fetchers:Ls}},yl=Ca(ml);if(yl)return L=hl(L),ds(fl,yl.result,!1,{preventScrollReset:Ee});if(yl=Ca(Ni),yl)return ce.add(yl.key),L=hl(L),ds(fl,yl.result,!1,{preventScrollReset:Ee});let Cl=new Map(L.fetchers);Ae&&Cl.set(j,ws(Fe.data));let{loaderData:Ns,errors:Fs}=Ap(L,ss,ml,void 0,Ul,Ni,Cl);Hi(is,Cl),L.navigation.state==="loading"&&is>y?(Ie(ke,"Expected pending action"),xe&&xe.abort(),Xe(L.navigation.location,{matches:ss,loaderData:Ns,errors:Fs,fetchers:Cl})):(ie({errors:Fs,loaderData:Mp(L.loaderData,Ns,ss,Fs),fetchers:Cl}),de=!1)}async function wn(j,w,G,M,T,ne,ae,Ee,Y){let oe=L.fetchers.get(j);Ol(j,nn(Y,oe?oe.data:void 0),{flushSync:ae});let Se=new AbortController,be=ht(t.history,G,Se.signal);if(ne){let Fe=await ji(M,new URL(be.url).pathname,be.signal,j);if(Fe.type==="aborted")return;if(Fe.type==="error"){xl(j,w,Fe.error,{flushSync:ae});return}else if(Fe.matches)M=Fe.matches;else{xl(j,w,Ql(404,{pathname:G}),{flushSync:ae});return}}let re=Pa(M,G);Q.set(j,Se);let Ue=V,Re=jt(p,g,be,G,M,re,r,T),sl=await Ms(be,G,Re,T,j),Ve=sl[re.route.id];if(!Ve){for(let Fe of M)if(sl[Fe.route.id]){Ve=sl[Fe.route.id];break}}if(Q.get(j)===Se&&Q.delete(j),!be.signal.aborted){if(he.has(j)){Ol(j,ws(void 0));return}if(zi(Ve))if(y>Ue){Ol(j,ws(void 0));return}else{ce.add(j),await ds(be,Ve,!1,{preventScrollReset:Ee});return}if(Hl(Ve)){xl(j,w,Ve.error);return}Ol(j,ws(Ve.data))}}async function ds(j,w,G,{submission:M,fetcherSubmission:T,preventScrollReset:ne,replace:ae}={}){G||(fe==null||fe.resolve(),fe=null),w.response.headers.has("X-Remix-Revalidate")&&(de=!0);let Ee=w.response.headers.get("Location");Ie(Ee,"Expected a Location header on the redirect Response"),Ee=qp(Ee,new URL(j.url),m,t.history);let Y=dn(L.location,Ee,{_isRedirect:!0});if(o){let Re=!1;if(w.response.headers.has("X-Remix-Reload-Document"))Re=!0;else if(zu(Ee)){const sl=pd(a,Ee,!0);Re=sl.origin!==a.location.origin||Xl(sl.pathname,m)==null}if(Re){ae?a.location.replace(Ee):a.location.assign(Ee);return}}xe=null;let oe=ae===!0||w.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:Se,formAction:be,formEncType:re}=L.navigation;!M&&!T&&Se&&be&&re&&(M=Rp(L.navigation));let Ue=M||T;if(mm.has(w.response.status)&&Ue&&wl(Ue.formMethod))await bl(oe,Y,{submission:{...Ue,formAction:Ee},preventScrollReset:ne||Ne,enableViewTransition:G?Ge:void 0});else{let Re=yu(Y,[],oe,M);await bl(oe,Y,{overrideNavigation:Re,fetcherSubmission:T,preventScrollReset:ne||Ne,enableViewTransition:G?Ge:void 0})}}async function Ms(j,w,G,M,T){var Ee;let ne,ae={};try{ne=await bm(_,j,w,G,T,M,!1)}catch(Y){return G.filter(oe=>oe.shouldLoad).forEach(oe=>{ae[oe.route.id]={type:"error",error:Y}}),ae}if(j.signal.aborted)return ae;if(!wl(j.method))for(let Y of G){if(((Ee=ne[Y.route.id])==null?void 0:Ee.type)==="error")break;!ne.hasOwnProperty(Y.route.id)&&!L.loaderData.hasOwnProperty(Y.route.id)&&(!L.errors||!L.errors.hasOwnProperty(Y.route.id))&&Y.shouldCallHandler()&&(ne[Y.route.id]={type:"error",result:new Error(`No result returned from dataStrategy for route ${Y.route.id}`)})}for(let[Y,oe]of Object.entries(ne))if(Bm(oe)){let Se=oe.result;ae[Y]={type:"redirect",response:Gm(Se,j,Y,G,m)}}else ae[Y]=await Im(oe);return ae}async function qi(j,w,G,M,T){let ne=Ms(G,M,j,T,null),ae=Promise.all(w.map(async oe=>{if(oe.matches&&oe.match&&oe.request&&oe.controller){let be=(await Ms(oe.request,oe.path,oe.matches,T,oe.key))[oe.match.route.id];return{[oe.key]:be}}else return Promise.resolve({[oe.key]:{type:"error",error:Ql(404,{pathname:oe.path})}})})),Ee=await ne,Y=(await ae).reduce((oe,Se)=>Object.assign(oe,Se),{});return{loaderResults:Ee,fetcherResults:Y}}function Hs(){de=!0,me.forEach((j,w)=>{Q.has(w)&&N.add(w),es(w)})}function Ol(j,w,G={}){let M=new Map(L.fetchers);M.set(j,w),ie({fetchers:M},{flushSync:(G&&G.flushSync)===!0})}function xl(j,w,G,M={}){let T=di(L.matches,w),ne=new Map(L.fetchers);Bi(ne,j),ie({errors:{[T.route.id]:G},fetchers:ne},{flushSync:(M&&M.flushSync)===!0})}function _i(j){return ge.set(j,(ge.get(j)||0)+1),he.has(j)&&he.delete(j),L.fetchers.get(j)||hm}function Ha(j,w){es(j,w==null?void 0:w.reason),Ol(j,ws(null))}function Bi(j,w){let G=L.fetchers.get(w);Q.has(w)&&!(G&&G.state==="loading"&&B.has(w))&&es(w),me.delete(w),B.delete(w),ce.delete(w),he.delete(w),N.delete(w),j.delete(w)}function xn(j){let w=(ge.get(j)||0)-1;w<=0?(ge.delete(j),he.add(j)):ge.set(j,w),ie({fetchers:new Map(L.fetchers)})}function es(j,w){let G=Q.get(j);G&&(G.abort(w),Q.delete(j))}function Ai(j,w){for(let G of j){let M=w.get(G);Ie(M,`Expected fetcher: ${G}`);let T=ws(M.data);w.set(G,T)}}function Mi(j){let w=[],G=!1;for(let M of ce){let T=j.get(M);Ie(T,`Expected fetcher: ${M}`),T.state==="loading"&&(ce.delete(M),w.push(M),G=!0)}return Ai(w,j),G}function Hi(j,w){let G=[];for(let[M,T]of B)if(T<j){let ne=w.get(M);Ie(ne,`Expected fetcher: ${M}`),ne.state==="loading"&&(es(M),B.delete(M),G.push(M))}return Ai(G,w),G.length>0}function vt(j,w){let G=L.blockers.get(j)||tn;return Le.get(j)!==w&&Le.set(j,w),G}function Ti(j){L.blockers.delete(j),Le.delete(j)}function ls(j,w){let G=L.blockers.get(j)||tn;Ie(G.state==="unblocked"&&w.state==="blocked"||G.state==="blocked"&&w.state==="blocked"||G.state==="blocked"&&w.state==="proceeding"||G.state==="blocked"&&w.state==="unblocked"||G.state==="proceeding"&&w.state==="unblocked",`Invalid blocker state transition: ${G.state} -> ${w.state}`);let M=new Map(L.blockers);M.set(j,w),ie({blockers:M})}function bs({currentLocation:j,nextLocation:w,historyAction:G}){if(Le.size===0)return;Le.size>1&&nl(!1,"A router only supports one blocker at a time");let M=Array.from(Le.entries()),[T,ne]=M[M.length-1],ae=L.blockers.get(T);if(!(ae&&ae.state==="proceeding")&&ne({currentLocation:j,nextLocation:w,historyAction:G}))return T}function Ri(j){let w=Ql(404,{pathname:j}),G=f.activeRoutes,{matches:M,route:T}=ba(G);return{notFoundMatches:M,route:T,error:w}}function yn(j,w,G){if(H=j,q=w,A=G||null,!D&&L.navigation===xu){D=!0;let M=xt(L.location,L.matches);M!=null&&ie({restoreScrollPosition:M})}return()=>{H=null,q=null,A=null}}function wt(j,w){return A&&A(j,w.map(M=>Of(M,L.loaderData)))||j.key}function En(j,w){if(H&&q){let G=wt(j,w);H[G]=q()}}function xt(j,w){if(H){let G=wt(j,w),M=H[G];if(typeof M=="number")return M}return null}function Ts(j,w,G){if(t.patchRoutesOnNavigation){let M=f.branches;if(j){if(Object.keys(j[0].params).length>0)return{active:!0,matches:cs(w,G,m,!0,M)}}else return{active:!0,matches:cs(w,G,m,!0,M)||[]}}return{active:!1,matches:null}}async function ji(j,w,G,M){if(!t.patchRoutesOnNavigation)return{type:"success",matches:j};let T=j;for(;;){let ne=g;try{await t.patchRoutesOnNavigation({signal:G,path:w,matches:T,fetcherKey:M,patch:(oe,Se)=>{G.aborted||Gp(oe,Se,f,ne,p,!1)}})}catch(oe){return{type:"error",error:oe,partialMatches:T}}if(G.aborted)return{type:"aborted"};let ae=f.branches,Ee=cs(f.activeRoutes,w,m,!1,ae),Y=null;if(Ee){if(Object.keys(Ee[0].params).length===0)return{type:"success",matches:Ee};if(Y=cs(f.activeRoutes,w,m,!0,ae),!(Y&&T.length<Y.length&&Rs(T,Y.slice(0,T.length))))return{type:"success",matches:Ee}}if(Y||(Y=cs(f.activeRoutes,w,m,!0,ae)),!Y||Rs(T,Y))return{type:"success",matches:null};T=Y}}function Rs(j,w){return j.length===w.length&&j.every((G,M)=>G.route.id===w[M].route.id)}function yt(j){g={},f.setHmrRoutes(gn(j,p,void 0,g))}function Si(j,w,G=!1){Gp(j,w,f,g,p,G),f.hasHMRRoutes||ie({})}return Ce={get basename(){return m},get future(){return E},get state(){return L},get routes(){return f.stableRoutes},get branches(){return f.branches},get manifest(){return g},get window(){return a},initialize:$,subscribe:Je,enableScrollRestoration:yn,navigate:Tl,fetch:St,revalidate:Rl,createHref:j=>t.history.createHref(j),encodeLocation:j=>t.history.encodeLocation(j),getFetcher:_i,resetFetcher:Ha,deleteFetcher:xn,dispose:we,getBlocker:vt,deleteBlocker:Ti,patchRoutes:Si,_internalFetchControllers:Q,_internalSetRoutes:yt,_internalSetStateDoNotUseOrYouWillBreakYourApp(j){ie(j)}},t.instrumentations&&(Ce=om(Ce,t.instrumentations.map(j=>j.router).filter(Boolean))),Ce}function vm(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Iu(t,a,o,r,c,p){let g,f;if(c){g=[];for(let _ of a)if(g.push(_),_.route.id===c){f=_;break}}else g=a,f=a[a.length-1];let m=Ba(r||".",Uu(g),Xl(t.pathname,o)||t.pathname,p==="path");if(r==null&&(m.search=t.search,m.hash=t.hash),(r==null||r===""||r===".")&&f){let _=Mu(m.search);if(f.route.index&&!_)m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index";else if(!f.route.index&&_){let E=new URLSearchParams(m.search),S=E.getAll("index");E.delete("index"),S.filter(U=>U).forEach(U=>E.append("index",U));let J=E.toString();m.search=J?`?${J}`:""}}return o!=="/"&&(m.pathname=lm({basename:o,pathname:m.pathname})),xs(m)}function Lp(t,a,o){if(!o||!vm(o))return{path:a};if(o.formMethod&&!Hm(o.formMethod))return{path:a,error:Ql(405,{method:o.formMethod})};let r=()=>({path:a,error:Ql(400,{type:"invalid-body"})}),p=(o.formMethod||"get").toUpperCase(),g=Pd(a);if(o.body!==void 0){if(o.formEncType==="text/plain"){if(!wl(p))return r();let S=typeof o.body=="string"?o.body:o.body instanceof FormData||o.body instanceof URLSearchParams?Array.from(o.body.entries()).reduce((J,[U,H])=>`${J}${U}=${H}
`,""):String(o.body);return{path:a,submission:{formMethod:p,formAction:g,formEncType:o.formEncType,formData:void 0,json:void 0,text:S}}}else if(o.formEncType==="application/json"){if(!wl(p))return r();try{let S=typeof o.body=="string"?JSON.parse(o.body):o.body;return{path:a,submission:{formMethod:p,formAction:g,formEncType:o.formEncType,formData:void 0,json:S,text:void 0}}}catch{return r()}}}Ie(typeof FormData=="function","FormData is not available in this environment");let f,m;if(o.formData)f=Pu(o.formData),m=o.formData;else if(o.body instanceof FormData)f=Pu(o.body),m=o.body;else if(o.body instanceof URLSearchParams)f=o.body,m=Bp(f);else if(o.body==null)f=new URLSearchParams,m=new FormData;else try{f=new URLSearchParams(o.body),m=Bp(f)}catch{return r()}let _={formMethod:p,formAction:g,formEncType:o&&o.formEncType||"application/x-www-form-urlencoded",formData:m,json:void 0,text:void 0};if(wl(_.formMethod))return{path:a,submission:_};let E=ys(a);return t&&E.search&&Mu(E.search)&&f.append("index",""),E.search=`?${f}`,{path:xs(E),submission:_}}function Ip(t,a,o,r,c,p,g,f,m,_,E,S,J,U,H,A,q,D,K,X,pe,ue){var Oe;let ve=pe?Hl(pe[1])?pe[1].error:pe[1].data:void 0,Ce=c.createURL(p.location),L=c.createURL(m),ke;if(E&&p.errors){let de=Object.keys(p.errors)[0];ke=g.findIndex(N=>N.route.id===de)}else if(pe&&Hl(pe[1])){let de=pe[0];ke=g.findIndex(N=>N.route.id===de)-1}let fe=pe?pe[1].statusCode:void 0,Ne=fe&&fe>=400,xe={currentUrl:Ce,currentParams:((Oe=p.matches[0])==null?void 0:Oe.params)||{},nextUrl:L,nextParams:g[0].params,...f,actionResult:ve,actionStatus:fe},Ge=hn(g),Pe=g.map((de,N)=>{let{route:Q}=de,V=null;if(ke!=null&&N>ke)V=!1;else if(Q.lazy)V=!0;else if(!Bu(Q))V=!1;else if(E){let{shouldLoad:me}=Ed(Q,p.loaderData,p.errors);V=me}else wm(p.loaderData,p.matches[N],de)&&(V=!0);if(V!==null)return Gu(o,r,t,m,Ge,de,_,a,V);let y=!1;typeof ue=="boolean"?y=ue:Ne?y=!1:(S||Ce.pathname+Ce.search===L.pathname+L.search||Ce.search!==L.search||xm(p.matches[N],de))&&(y=!0);let B={...xe,defaultShouldRevalidate:y},ce=pn(de,B);return Gu(o,r,t,m,Ge,de,_,a,ce,B,ue)}),Me=[];return H.forEach((de,N)=>{if(E||!g.some(he=>he.route.id===de.routeId)||U.has(N))return;let Q=p.fetchers.get(N),V=Q&&Q.state!=="idle"&&Q.data===void 0,y=cs(q,de.path,D??"/",!1,X);if(!y){if(K&&V)return;Me.push({key:N,routeId:de.routeId,path:de.path,matches:null,match:null,request:null,controller:null});return}if(A.has(N))return;let B=Pa(y,de.path),ce=new AbortController,me=ht(c,de.path,ce.signal),ge=null;if(J.has(N))J.delete(N),ge=jt(o,r,me,de.path,y,B,_,a);else if(V)S&&(ge=jt(o,r,me,de.path,y,B,_,a));else{let he;typeof ue=="boolean"?he=ue:Ne?he=!1:he=S;let Le={...xe,defaultShouldRevalidate:he};pn(B,Le)&&(ge=jt(o,r,me,de.path,y,B,_,a,Le))}ge&&Me.push({key:N,routeId:de.routeId,path:de.path,matches:ge,match:B,request:me,controller:ce})}),{dsMatches:Pe,revalidatingFetchers:Me}}function Bu(t){return t.loader!=null||t.middleware!=null&&t.middleware.length>0}function Ed(t,a,o){if(t.lazy)return{shouldLoad:!0,renderFallback:!0};if(!Bu(t))return{shouldLoad:!1,renderFallback:!1};let r=a!=null&&t.id in a,c=o!=null&&o[t.id]!==void 0;if(!r&&c)return{shouldLoad:!1,renderFallback:!1};if(typeof t.loader=="function"&&t.loader.hydrate===!0)return{shouldLoad:!0,renderFallback:!r};let p=!r&&!c;return{shouldLoad:p,renderFallback:p}}function wm(t,a,o){let r=!a||o.route.id!==a.route.id,c=!t.hasOwnProperty(o.route.id);return r||c}function xm(t,a){let o=t.route.path;return t.pathname!==a.pathname||o!=null&&o.endsWith("*")&&t.params["*"]!==a.params["*"]}function pn(t,a){if(t.route.shouldRevalidate){let o=t.route.shouldRevalidate(a);if(typeof o=="boolean")return o}return a.defaultShouldRevalidate}function Gp(t,a,o,r,c,p){let g;if(t){let _=r[t];Ie(_,`No route found to patch children into: routeId = ${t}`),_.children||(_.children=[]),g=_.children}else g=o.activeRoutes;let f=[],m=[];if(a.forEach(_=>{let E=g.find(S=>kd(_,S));E?m.push({existingRoute:E,newRoute:_}):f.push(_)}),f.length>0){let _=gn(f,c,[t||"_","patch",String((g==null?void 0:g.length)||"0")],r);g.push(..._)}if(p&&m.length>0)for(let _=0;_<m.length;_++){let{existingRoute:E,newRoute:S}=m[_],J=E,[U]=gn([S],c,[],{},!0);Object.assign(J,{element:U.element?U.element:J.element,errorElement:U.errorElement?U.errorElement:J.errorElement,hydrateFallbackElement:U.hydrateFallbackElement?U.hydrateFallbackElement:J.hydrateFallbackElement})}o.hasHMRRoutes||o.setRoutes([...o.activeRoutes])}function kd(t,a){var o;return"id"in t&&"id"in a&&t.id===a.id?!0:t.index===a.index&&t.path===a.path&&t.caseSensitive===a.caseSensitive?(!t.children||t.children.length===0)&&(!a.children||a.children.length===0)?!0:((o=t.children)==null?void 0:o.every((r,c)=>{var p;return(p=a.children)==null?void 0:p.some(g=>kd(r,g))}))??!1:!1}var Pp=new WeakMap,bd=({key:t,route:a,manifest:o,mapRouteProperties:r})=>{let c=o[a.id];if(Ie(c,"No route found in manifest"),!c.lazy||typeof c.lazy!="object")return;let p=c.lazy[t];if(!p)return;let g=Pp.get(c);g||(g={},Pp.set(c,g));let f=g[t];if(f)return f;let m=(async()=>{let _=Mf(t),S=c[t]!==void 0&&t!=="hasErrorBoundary";if(_)nl(!_,"Route property "+t+" is not a supported lazy route property. This property will be ignored."),g[t]=Promise.resolve();else if(S)nl(!1,`Route "${c.id}" has a static property "${t}" defined. The lazy property will be ignored.`);else{let J=await p();J!=null&&(Object.assign(c,{[t]:J}),Object.assign(c,r(c)))}typeof c.lazy=="object"&&(c.lazy[t]=void 0,Object.values(c.lazy).every(J=>J===void 0)&&(c.lazy=void 0))})();return g[t]=m,m},Jp=new WeakMap;function ym(t,a,o,r,c){let p=o[t.id];if(Ie(p,"No route found in manifest"),!t.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof t.lazy=="function"){let E=Jp.get(p);if(E)return{lazyRoutePromise:E,lazyHandlerPromise:E};let S=(async()=>{Ie(typeof t.lazy=="function","No lazy route function found");let J=await t.lazy(),U={};for(let H in J){let A=J[H];if(A===void 0)continue;let q=Tf(H),K=p[H]!==void 0&&H!=="hasErrorBoundary";q?nl(!q,"Route property "+H+" is not a supported property to be returned from a lazy route function. This property will be ignored."):K?nl(!K,`Route "${p.id}" has a static property "${H}" defined but its lazy function is also returning a value for this property. The lazy route property "${H}" will be ignored.`):U[H]=A}Object.assign(p,U),Object.assign(p,{...r(p),lazy:void 0})})();return Jp.set(p,S),S.catch(()=>{}),{lazyRoutePromise:S,lazyHandlerPromise:S}}let g=Object.keys(t.lazy),f=[],m;for(let E of g){if(c&&c.includes(E))continue;let S=bd({key:E,route:t,manifest:o,mapRouteProperties:r});S&&(f.push(S),E===a&&(m=S))}let _=f.length>0?Promise.all(f).then(()=>{}):void 0;return _==null||_.catch(()=>{}),m==null||m.catch(()=>{}),{lazyRoutePromise:_,lazyHandlerPromise:m}}async function zp(t){let a=t.matches.filter(c=>c.shouldLoad),o={};return(await Promise.all(a.map(c=>c.resolve()))).forEach((c,p)=>{o[a[p].route.id]=c}),o}async function Em(t){return t.matches.some(a=>a.route.middleware)?Cd(t,()=>zp(t)):zp(t)}function Cd(t,a){return km(t,a,r=>{if(Mm(r))throw r;return r},Um,o);function o(r,c,p){if(p)return Promise.resolve(Object.assign(p.value,{[c]:{type:"error",result:r}}));{let{matches:g}=t,f=Math.min(Math.max(g.findIndex(_=>_.route.id===c),0),Math.max(g.findIndex(_=>_.shouldCallHandler()),0)),m=di(g,g[f].route.id).route.id;return Promise.resolve({[m]:{type:"error",result:r}})}}}async function km(t,a,o,r,c){let{matches:p,...g}=t,f=p.flatMap(_=>_.route.middleware?_.route.middleware.map(E=>[_.route.id,E]):[]);return await Ld(g,f,a,o,r,c)}async function Ld(t,a,o,r,c,p,g=0){let{request:f}=t;if(f.signal.aborted)throw f.signal.reason??new Error(`Request aborted: ${f.method} ${f.url}`);let m=a[g];if(!m)return await o();let[_,E]=m,S,J=async()=>{if(S)throw new Error("You may only call `next()` once per middleware");try{return S={value:await Ld(t,a,o,r,c,p,g+1)},S.value}catch(U){return S={value:await p(U,_,S)},S.value}};try{let U=await E(t,J),H=U!=null?r(U):void 0;return c(H)?H:S?H??S.value:(S={value:await J()},S.value)}catch(U){return await p(U,_,S)}}function Id(t,a,o,r,c){let p=bd({key:"middleware",route:r.route,manifest:a,mapRouteProperties:t}),g=ym(r.route,wl(o.method)?"action":"loader",a,t,c);return{middleware:p,route:g.lazyRoutePromise,handler:g.lazyHandlerPromise}}function Gu(t,a,o,r,c,p,g,f,m,_=null,E){let S=!1,J=Id(t,a,o,p,g);return{...p,_lazyPromises:J,shouldLoad:m,shouldRevalidateArgs:_,shouldCallHandler(U){return S=!0,_?typeof E=="boolean"?pn(p,{..._,defaultShouldRevalidate:E}):typeof U=="boolean"?pn(p,{..._,defaultShouldRevalidate:U}):pn(p,_):m},resolve(U){let{lazy:H,loader:A,middleware:q}=p.route,D=S||m||U&&!wl(o.method)&&(H||A),K=q&&q.length>0&&!A&&!H;return D&&(wl(o.method)||!K)?Cm({request:o,path:r,pattern:c,match:p,lazyHandlerPromise:J==null?void 0:J.handler,lazyRoutePromise:J==null?void 0:J.route,handlerOverride:U,scopedContext:f}):Promise.resolve({type:"data",result:void 0})}}}function jt(t,a,o,r,c,p,g,f,m=null){return c.map(_=>_.route.id!==p.route.id?{..._,shouldLoad:!1,shouldRevalidateArgs:m,shouldCallHandler:()=>!1,_lazyPromises:Id(t,a,o,_,g),resolve:()=>Promise.resolve({type:"data",result:void 0})}:Gu(t,a,o,r,hn(c),_,g,f,!0,m))}async function bm(t,a,o,r,c,p,g){r.some(E=>{var S;return(S=E._lazyPromises)==null?void 0:S.middleware})&&await Promise.all(r.map(E=>{var S;return(S=E._lazyPromises)==null?void 0:S.middleware}));let f={request:a,url:Gd(a,o),pattern:hn(r),params:r[0].params,context:p,matches:r},_=await t({...f,fetcherKey:c,runClientMiddleware:E=>{let S=f;return Cd(S,()=>E({...S,fetcherKey:c,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(r.flatMap(E=>{var S,J;return[(S=E._lazyPromises)==null?void 0:S.handler,(J=E._lazyPromises)==null?void 0:J.route]}))}catch{}return _}async function Cm({request:t,path:a,pattern:o,match:r,lazyHandlerPromise:c,lazyRoutePromise:p,handlerOverride:g,scopedContext:f}){let m,_,E=wl(t.method),S=E?"action":"loader",J=U=>{let H,A=new Promise((K,X)=>H=X);_=()=>H(),t.signal.addEventListener("abort",_);let q=K=>typeof U!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${S}" [routeId: ${r.route.id}]`)):U({request:t,url:Gd(t,a),pattern:o,params:r.params,context:f},...K!==void 0?[K]:[]),D=(async()=>{try{return{type:"data",result:await(g?g(X=>q(X)):q())}}catch(K){return{type:"error",result:K}}})();return Promise.race([D,A])};try{let U=E?r.route.action:r.route.loader;if(c||p)if(U){let H,[A]=await Promise.all([J(U).catch(q=>{H=q}),c,p]);if(H!==void 0)throw H;m=A}else{await c;let H=E?r.route.action:r.route.loader;if(H)[m]=await Promise.all([J(H),p]);else if(S==="action"){let A=new URL(t.url),q=A.pathname+A.search;throw Ql(405,{method:t.method,pathname:q,routeId:r.route.id})}else return{type:"data",result:void 0}}else if(U)m=await J(U);else{let H=new URL(t.url),A=H.pathname+H.search;throw Ql(404,{pathname:A})}}catch(U){return{type:"error",result:U}}finally{_&&t.signal.removeEventListener("abort",_)}return m}async function Lm(t){let a=t.headers.get("Content-Type");return a&&/\bapplication\/json\b/.test(a)?t.body==null?null:t.json():t.text()}async function Im(t){var r,c,p,g,f;let{result:a,type:o}=t;if(Au(a)){let m;try{m=await Lm(a)}catch(_){return{type:"error",error:_}}return o==="error"?{type:"error",error:new mn(a.status,a.statusText,m),statusCode:a.status,headers:a.headers}:{type:"data",data:m,statusCode:a.status,headers:a.headers}}return o==="error"?Tp(a)?a.data instanceof Error?{type:"error",error:a.data,statusCode:(r=a.init)==null?void 0:r.status,headers:(c=a.init)!=null&&c.headers?new Headers(a.init.headers):void 0}:{type:"error",error:zm(a),statusCode:fn(a)?a.status:void 0,headers:(p=a.init)!=null&&p.headers?new Headers(a.init.headers):void 0}:{type:"error",error:a,statusCode:fn(a)?a.status:void 0}:Tp(a)?{type:"data",data:a.data,statusCode:(g=a.init)==null?void 0:g.status,headers:(f=a.init)!=null&&f.headers?new Headers(a.init.headers):void 0}:{type:"data",data:a}}function Gm(t,a,o,r,c){let p=t.headers.get("Location");if(Ie(p,"Redirects returned/thrown from loaders/actions must have a Location header"),!zu(p)){let g=r.slice(0,r.findIndex(f=>f.route.id===o)+1);p=Iu(new URL(a.url),g,c,p),t.headers.set("Location",p)}return t}var Up=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function qp(t,a,o,r){if(zu(t)){let c=t,p=c.startsWith("//")?new URL(a.protocol+c):new URL(c);if(Up.includes(p.protocol))throw new Error("Invalid redirect location");let g=Xl(p.pathname,o)!=null;if(p.origin===a.origin&&g)return qu(p.pathname)+p.search+p.hash}try{let c=r.createURL(t);if(Up.includes(c.protocol))throw new Error("Invalid redirect location")}catch{}return t}function ht(t,a,o,r){let c=t.createURL(Pd(a)).toString(),p={signal:o};if(r&&wl(r.formMethod)){let{formMethod:g,formEncType:f}=r;p.method=g.toUpperCase(),f==="application/json"?(p.headers=new Headers({"Content-Type":f}),p.body=JSON.stringify(r.json)):f==="text/plain"?p.body=r.text:f==="application/x-www-form-urlencoded"&&r.formData?p.body=Pu(r.formData):p.body=r.formData}return new Request(c,p)}function Gd(t,a){let o=new URL(t.url),r=typeof a=="string"?ys(a):a;if(o.pathname=r.pathname||"/",r.search){let c=new URLSearchParams(r.search),p=c.getAll("index");c.delete("index");for(let g of p.filter(Boolean))c.append("index",g);o.search=c.size?`?${c.toString()}`:""}else o.search="";return o.hash=r.hash||"",o}function Pu(t){let a=new URLSearchParams;for(let[o,r]of t.entries())a.append(o,typeof r=="string"?r:r.name);return a}function Bp(t){let a=new FormData;for(let[o,r]of t.entries())a.append(o,r);return a}function Pm(t,a,o,r=!1,c=!1){let p={},g=null,f,m=!1,_={},E=o&&Hl(o[1])?o[1].error:void 0;return t.forEach(S=>{if(!(S.route.id in a))return;let J=S.route.id,U=a[J];if(Ie(!zi(U),"Cannot handle redirect results in processLoaderData"),Hl(U)){let H=U.error;if(E!==void 0&&(H=E,E=void 0),g=g||{},c)g[J]=H;else{let A=di(t,J);g[A.route.id]==null&&(g[A.route.id]=H)}r||(p[J]=yd),m||(m=!0,f=fn(U.error)?U.error.status:500),U.headers&&(_[J]=U.headers)}else p[J]=U.data,U.statusCode&&U.statusCode!==200&&!m&&(f=U.statusCode),U.headers&&(_[J]=U.headers)}),E!==void 0&&o&&(g={[o[0]]:E},o[2]&&(p[o[2]]=void 0)),{loaderData:p,errors:g,statusCode:f||200,loaderHeaders:_}}function Ap(t,a,o,r,c,p,g){let{loaderData:f,errors:m}=Pm(a,o,r);return c.filter(_=>!_.matches||_.matches.some(E=>E.shouldLoad)).forEach(_=>{let{key:E,match:S,controller:J}=_;if(J&&J.signal.aborted)return;let U=p[E];if(Ie(U,"Did not find corresponding fetcher result"),Hl(U)){let H=di(t.matches,S==null?void 0:S.route.id);m&&m[H.route.id]||(m={...m,[H.route.id]:U.error}),g.delete(E)}else if(zi(U))Ie(!1,"Unhandled fetcher revalidation redirect");else{let H=ws(U.data);g.set(E,H)}}),{loaderData:f,errors:m}}function Mp(t,a,o,r){let c=Object.entries(a).filter(([,p])=>p!==yd).reduce((p,[g,f])=>(p[g]=f,p),{});for(let p of o){let g=p.route.id;if(!a.hasOwnProperty(g)&&t.hasOwnProperty(g)&&p.route.loader&&(c[g]=t[g]),r&&r.hasOwnProperty(g))break}return c}function Hp(t){return t?Hl(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function di(t,a){return(a?t.slice(0,t.findIndex(r=>r.route.id===a)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function ba(t){let a=t.length===1?t[0]:t.find(o=>o.index||!o.path||o.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:a}],route:a}}function Ql(t,{pathname:a,routeId:o,method:r,type:c,message:p}={}){let g="Unknown Server Error",f="Unknown @remix-run/router error";return t===400?(g="Bad Request",r&&a&&o?f=`You made a ${r} request to "${a}" but did not provide a \`loader\` for route "${o}", so there is no way to handle the request.`:c==="invalid-body"&&(f="Unable to encode submission body")):t===403?(g="Forbidden",f=`Route "${o}" does not match URL "${a}"`):t===404?(g="Not Found",f=`No route matches URL "${a}"`):t===405&&(g="Method Not Allowed",r&&a&&o?f=`You made a ${r.toUpperCase()} request to "${a}" but did not provide an \`action\` for route "${o}", so there is no way to handle the request.`:r&&(f=`Invalid request method "${r.toUpperCase()}"`)),new mn(t||500,g,new Error(f),!0)}function Ca(t){let a=Object.entries(t);for(let o=a.length-1;o>=0;o--){let[r,c]=a[o];if(zi(c))return{key:r,result:c}}}function Pd(t){let a=typeof t=="string"?ys(t):t;return xs({...a,hash:""})}function Jm(t,a){return t.pathname!==a.pathname||t.search!==a.search?!1:t.hash===""?a.hash!=="":t.hash===a.hash?!0:a.hash!==""}function zm(t){var a,o;return new mn(((a=t.init)==null?void 0:a.status)??500,((o=t.init)==null?void 0:o.statusText)??"Internal Server Error",t.data)}function Um(t){return t!=null&&typeof t=="object"&&Object.entries(t).every(([a,o])=>typeof a=="string"&&qm(o))}function qm(t){return t!=null&&typeof t=="object"&&"type"in t&&"result"in t&&(t.type==="data"||t.type==="error")}function Bm(t){return Au(t.result)&&wd.has(t.result.status)}function Hl(t){return t.type==="error"}function zi(t){return(t&&t.type)==="redirect"}function Tp(t){return typeof t=="object"&&t!=null&&"type"in t&&"data"in t&&"init"in t&&t.type==="DataWithResponseInit"}function Au(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function Am(t){return wd.has(t)}function Mm(t){return Au(t)&&Am(t.status)&&t.headers.has("Location")}function Hm(t){return fm.has(t.toUpperCase())}function wl(t){return dm.has(t.toUpperCase())}function Mu(t){return new URLSearchParams(t).getAll("index").some(a=>a==="")}function Pa(t,a){let o=typeof a=="string"?ys(a).search:a.search;if(t[t.length-1].route.index&&Mu(o||""))return t[t.length-1];let r=hd(t);return r[r.length-1]}function Rp(t){let{formMethod:a,formAction:o,formEncType:r,text:c,formData:p,json:g}=t;if(!(!a||!o||!r)){if(c!=null)return{formMethod:a,formAction:o,formEncType:r,formData:void 0,json:void 0,text:c};if(p!=null)return{formMethod:a,formAction:o,formEncType:r,formData:p,json:void 0,text:void 0};if(g!==void 0)return{formMethod:a,formAction:o,formEncType:r,formData:void 0,json:g,text:void 0}}}function yu(t,a,o,r){return r?{state:"loading",location:t,matches:a,historyAction:o,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}:{state:"loading",location:t,matches:a,historyAction:o,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Tm(t,a,o,r){return{state:"submitting",location:t,matches:a,historyAction:o,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}}function nn(t,a){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:a}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:a}}function Rm(t,a){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:a?a.data:void 0}}function ws(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Om(t,a){try{let o=t.sessionStorage.getItem(xd);if(o){let r=JSON.parse(o);for(let[c,p]of Object.entries(r||{}))p&&Array.isArray(p)&&a.set(c,new Set(p||[]))}}catch{}}function Nm(t,a){if(a.size>0){let o={};for(let[r,c]of a)o[r]=[...c];try{t.sessionStorage.setItem(xd,JSON.stringify(o))}catch(r){nl(!1,`Failed to save applied view transitions in sessionStorage (${r}).`)}}}function Op(){let t,a,o=new Promise((r,c)=>{t=async p=>{r(p);try{await o}catch{}},a=async p=>{c(p);try{await o}catch{}}});return{promise:o,resolve:t,reject:a}}var Ui=C.createContext(null);Ui.displayName="DataRouter";var _n=C.createContext(null);_n.displayName="DataRouterState";var Jd=C.createContext(!1);function zd(){return C.useContext(Jd)}var Hu=C.createContext({isTransitioning:!1});Hu.displayName="ViewTransition";var Ud=C.createContext(new Map);Ud.displayName="Fetchers";var Fm=C.createContext(null);Fm.displayName="Await";var Zl=C.createContext(null);Zl.displayName="Navigation";var Aa=C.createContext(null);Aa.displayName="Location";var Es=C.createContext({outlet:null,matches:[],isDataRoute:!1});Es.displayName="Route";var Tu=C.createContext(null);Tu.displayName="RouteError";var qd="REACT_ROUTER_ERROR",Dm="REDIRECT",Wm="ROUTE_ERROR_RESPONSE";function $m(t){if(t.startsWith(`${qd}:${Dm}:{`))try{let a=JSON.parse(t.slice(28));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.location=="string"&&typeof a.reloadDocument=="boolean"&&typeof a.replace=="boolean")return a}catch{}}function Vm(t){if(t.startsWith(`${qd}:${Wm}:{`))try{let a=JSON.parse(t.slice(40));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string")return new mn(a.status,a.statusText,a.data)}catch{}}function Km(t,{relative:a}={}){Ie(jn(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:r}=C.useContext(Zl),{hash:c,pathname:p,search:g}=Sn(t,{relative:a}),f=p;return o!=="/"&&(f=p==="/"?o:Yl([o,p])),r.createHref({pathname:f,search:g,hash:c})}function jn(){return C.useContext(Aa)!=null}function ks(){return Ie(jn(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(Aa).location}var Bd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ad(t){C.useContext(Zl).static||C.useLayoutEffect(t)}function Md(){let{isDataRoute:t}=C.useContext(Es);return t?rh():Qm()}function Qm(){Ie(jn(),"useNavigate() may be used only in the context of a <Router> component.");let t=C.useContext(Ui),{basename:a,navigator:o}=C.useContext(Zl),{matches:r}=C.useContext(Es),{pathname:c}=ks(),p=JSON.stringify(Uu(r)),g=C.useRef(!1);return Ad(()=>{g.current=!0}),C.useCallback((m,_={})=>{if(nl(g.current,Bd),!g.current)return;if(typeof m=="number"){o.go(m);return}let E=Ba(m,JSON.parse(p),c,_.relative==="path");t==null&&a!=="/"&&(E.pathname=E.pathname==="/"?a:Yl([a,E.pathname])),(_.replace?o.replace:o.push)(E,_.state,_)},[a,o,p,c,t])}C.createContext(null);function Ym(){let{matches:t}=C.useContext(Es),a=t[t.length-1];return(a==null?void 0:a.params)??{}}function Sn(t,{relative:a}={}){let{matches:o}=C.useContext(Es),{pathname:r}=ks(),c=JSON.stringify(Uu(o));return C.useMemo(()=>Ba(t,JSON.parse(c),r,a==="path"),[t,c,r,a])}function Xm(t,a,o){Ie(jn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=C.useContext(Zl),{matches:c}=C.useContext(Es),p=c[c.length-1],g=p?p.params:{},f=p?p.pathname:"/",m=p?p.pathnameBase:"/",_=p&&p.route;{let q=_&&_.path||"";Td(f,!_||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let E=ks(),S;S=E;let J=S.pathname||"/",U=J;if(m!=="/"){let q=m.replace(/^\//,"").split("/");U="/"+J.replace(/^\//,"").split("/").slice(q.length).join("/")}let H=o&&o.state.matches.length?o.state.matches.map(q=>Object.assign(q,{route:o.manifest[q.route.id]||q.route})):dd(t,{pathname:U});return nl(_||H!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),nl(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),ih(H&&H.map(q=>Object.assign({},q,{params:Object.assign({},g,q.params),pathname:Yl([m,r.encodeLocation?r.encodeLocation(q.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?m:Yl([m,r.encodeLocation?r.encodeLocation(q.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathnameBase])})),c,o)}function Zm(){let t=uh(),a=fn(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),o=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:r},p={padding:"2px 4px",backgroundColor:r},g=null;return console.error("Error handled by React Router default ErrorBoundary:",t),g=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:p},"ErrorBoundary")," or"," ",C.createElement("code",{style:p},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},a),o?C.createElement("pre",{style:c},o):null,g)}var eh=C.createElement(Zm,null),Hd=class extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,a){return a.location!==t.location||a.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:a.error,location:a.location,revalidation:t.revalidation||a.revalidation}}componentDidCatch(t,a){this.props.onError?this.props.onError(t,a):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const o=Vm(t.digest);o&&(t=o)}let a=t!==void 0?C.createElement(Es.Provider,{value:this.props.routeContext},C.createElement(Tu.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?C.createElement(lh,{error:t},a):a}};Hd.contextType=Jd;var Eu=new WeakMap;function lh({children:t,error:a}){let{basename:o}=C.useContext(Zl);if(typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){let r=$m(a.digest);if(r){let c=Eu.get(a);if(c)throw c;let p=jd(r.location,o);if(_d&&!Eu.get(a))if(p.isExternal||r.reloadDocument)window.location.href=p.absoluteURL||p.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:r.replace}));throw Eu.set(a,g),g}return C.createElement("meta",{httpEquiv:"refresh",content:`0;url=${p.absoluteURL||p.to}`})}}return t}function sh({routeContext:t,match:a,children:o}){let r=C.useContext(Ui);return r&&r.static&&r.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=a.route.id),C.createElement(Es.Provider,{value:t},o)}function ih(t,a=[],o){let r=o==null?void 0:o.state;if(t==null){if(!r)return null;if(r.errors)t=r.matches;else if(a.length===0&&!r.initialized&&r.matches.length>0)t=r.matches;else return null}let c=t,p=r==null?void 0:r.errors;if(p!=null){let E=c.findIndex(S=>S.route.id&&(p==null?void 0:p[S.route.id])!==void 0);Ie(E>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),c=c.slice(0,Math.min(c.length,E+1))}let g=!1,f=-1;if(o&&r){g=r.renderFallback;for(let E=0;E<c.length;E++){let S=c[E];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(f=E),S.route.id){let{loaderData:J,errors:U}=r,H=S.route.loader&&!J.hasOwnProperty(S.route.id)&&(!U||U[S.route.id]===void 0);if(S.route.lazy||H){o.isStatic&&(g=!0),f>=0?c=c.slice(0,f+1):c=[c[0]];break}}}}let m=o==null?void 0:o.onError,_=r&&m?(E,S)=>{var J,U;m(E,{location:r.location,params:((U=(J=r.matches)==null?void 0:J[0])==null?void 0:U.params)??{},pattern:hn(r.matches),errorInfo:S})}:void 0;return c.reduceRight((E,S,J)=>{let U,H=!1,A=null,q=null;r&&(U=p&&S.route.id?p[S.route.id]:void 0,A=S.route.errorElement||eh,g&&(f<0&&J===0?(Td("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),H=!0,q=null):f===J&&(H=!0,q=S.route.hydrateFallbackElement||null)));let D=a.concat(c.slice(0,J+1)),K=()=>{let X;return U?X=A:H?X=q:S.route.Component?X=C.createElement(S.route.Component,null):S.route.element?X=S.route.element:X=E,C.createElement(sh,{match:S,routeContext:{outlet:E,matches:D,isDataRoute:r!=null},children:X})};return r&&(S.route.ErrorBoundary||S.route.errorElement||J===0)?C.createElement(Hd,{location:r.location,revalidation:r.revalidation,component:A,error:U,children:K(),routeContext:{outlet:null,matches:D,isDataRoute:!0},onError:_}):K()},null)}function Ru(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function th(t){let a=C.useContext(Ui);return Ie(a,Ru(t)),a}function nh(t){let a=C.useContext(_n);return Ie(a,Ru(t)),a}function ah(t){let a=C.useContext(Es);return Ie(a,Ru(t)),a}function Ou(t){let a=ah(t),o=a.matches[a.matches.length-1];return Ie(o.route.id,`${t} can only be used on routes that contain a unique "id"`),o.route.id}function oh(){return Ou("useRouteId")}function uh(){var r;let t=C.useContext(Tu),a=nh("useRouteError"),o=Ou("useRouteError");return t!==void 0?t:(r=a.errors)==null?void 0:r[o]}function rh(){let{router:t}=th("useNavigate"),a=Ou("useNavigate"),o=C.useRef(!1);return Ad(()=>{o.current=!0}),C.useCallback(async(c,p={})=>{nl(o.current,Bd),o.current&&(typeof c=="number"?await t.navigate(c):await t.navigate(c,{fromRouteId:a,...p}))},[t,a])}var Np={};function Td(t,a,o){!a&&!Np[t]&&(Np[t]=!0,nl(!1,o))}var Fp={};function Dp(t,a){!t&&!Fp[a]&&(Fp[a]=!0,console.warn(a))}var ch="useOptimistic",Wp=zf[ch],ph=()=>{};function dh(t){return Wp?Wp(t):[t,ph]}function gh(t){let a={hasErrorBoundary:t.hasErrorBoundary||t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&(t.element&&nl(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(a,{element:C.createElement(t.Component),Component:void 0})),t.HydrateFallback&&(t.hydrateFallbackElement&&nl(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(a,{hydrateFallbackElement:C.createElement(t.HydrateFallback),HydrateFallback:void 0})),t.ErrorBoundary&&(t.errorElement&&nl(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(a,{errorElement:C.createElement(t.ErrorBoundary),ErrorBoundary:void 0})),a}var fh=["HydrateFallback","hydrateFallbackElement"],mh=class{constructor(){this.status="pending",this.promise=new Promise((t,a)=>{this.resolve=o=>{this.status==="pending"&&(this.status="resolved",t(o))},this.reject=o=>{this.status==="pending"&&(this.status="rejected",a(o))}})}};function hh({router:t,flushSync:a,onError:o,useTransitions:r}){r=zd()||r;let[p,g]=C.useState(t.state),[f,m]=dh(p),[_,E]=C.useState(),[S,J]=C.useState({isTransitioning:!1}),[U,H]=C.useState(),[A,q]=C.useState(),[D,K]=C.useState(),X=C.useRef(new Map),pe=C.useCallback((L,{deletedFetchers:ke,newErrors:fe,flushSync:Ne,viewTransitionOpts:xe})=>{fe&&o&&Object.values(fe).forEach(Pe=>{var Me;return o(Pe,{location:L.location,params:((Me=L.matches[0])==null?void 0:Me.params)??{},pattern:hn(L.matches)})}),L.fetchers.forEach((Pe,Me)=>{Pe.data!==void 0&&X.current.set(Me,Pe.data)}),ke.forEach(Pe=>X.current.delete(Pe)),Dp(Ne===!1||a!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let Ge=t.window!=null&&t.window.document!=null&&typeof t.window.document.startViewTransition=="function";if(Dp(xe==null||Ge,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!xe||!Ge){a&&Ne?a(()=>g(L)):r===!1?g(L):C.startTransition(()=>{r===!0&&m(Pe=>$p(Pe,L)),g(L)});return}if(a&&Ne){a(()=>{A&&(U==null||U.resolve(),A.skipTransition()),J({isTransitioning:!0,flushSync:!0,currentLocation:xe.currentLocation,nextLocation:xe.nextLocation})});let Pe=t.window.document.startViewTransition(()=>{a(()=>g(L))});Pe.finished.finally(()=>{a(()=>{H(void 0),q(void 0),E(void 0),J({isTransitioning:!1})})}),a(()=>q(Pe));return}A?(U==null||U.resolve(),A.skipTransition(),K({state:L,currentLocation:xe.currentLocation,nextLocation:xe.nextLocation})):(E(L),J({isTransitioning:!0,flushSync:!1,currentLocation:xe.currentLocation,nextLocation:xe.nextLocation}))},[t.window,a,A,U,r,m,o]);C.useLayoutEffect(()=>t.subscribe(pe),[t,pe]),C.useEffect(()=>{S.isTransitioning&&!S.flushSync&&H(new mh)},[S]),C.useEffect(()=>{if(U&&_&&t.window){let L=_,ke=U.promise,fe=t.window.document.startViewTransition(async()=>{r===!1?g(L):C.startTransition(()=>{r===!0&&m(Ne=>$p(Ne,L)),g(L)}),await ke});fe.finished.finally(()=>{H(void 0),q(void 0),E(void 0),J({isTransitioning:!1})}),q(fe)}},[_,U,t.window,r,m]),C.useEffect(()=>{U&&_&&f.location.key===_.location.key&&U.resolve()},[U,A,f.location,_]),C.useEffect(()=>{!S.isTransitioning&&D&&(E(D.state),J({isTransitioning:!0,flushSync:!1,currentLocation:D.currentLocation,nextLocation:D.nextLocation}),K(void 0))},[S.isTransitioning,D]);let ue=C.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:L=>t.navigate(L),push:(L,ke,fe)=>t.navigate(L,{state:ke,preventScrollReset:fe==null?void 0:fe.preventScrollReset}),replace:(L,ke,fe)=>t.navigate(L,{replace:!0,state:ke,preventScrollReset:fe==null?void 0:fe.preventScrollReset})}),[t]),ve=t.basename||"/",Ce=C.useMemo(()=>({router:t,navigator:ue,static:!1,basename:ve,onError:o}),[t,ue,ve,o]);return C.createElement(C.Fragment,null,C.createElement(Ui.Provider,{value:Ce},C.createElement(_n.Provider,{value:f},C.createElement(Ud.Provider,{value:X.current},C.createElement(Hu.Provider,{value:S},C.createElement(Sh,{basename:ve,location:f.location,navigationType:f.historyAction,navigator:ue,useTransitions:r},C.createElement(_h,{routes:t.routes,manifest:t.manifest,future:t.future,state:f,isStatic:!1,onError:o})))))),null)}function $p(t,a){return{...t,navigation:a.navigation.state!=="idle"?a.navigation:t.navigation,revalidation:a.revalidation!=="idle"?a.revalidation:t.revalidation,actionData:a.navigation.state!=="submitting"?a.actionData:t.actionData,fetchers:a.fetchers}}var _h=C.memo(jh);function jh({routes:t,manifest:a,future:o,state:r,isStatic:c,onError:p}){return Xm(t,void 0,{manifest:a,state:r,isStatic:c,onError:p})}function Sh({basename:t="/",children:a=null,location:o,navigationType:r="POP",navigator:c,static:p=!1,useTransitions:g}){Ie(!jn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=t.replace(/^\/*/,"/"),m=C.useMemo(()=>({basename:f,navigator:c,static:p,useTransitions:g,future:{}}),[f,c,p,g]);typeof o=="string"&&(o=ys(o));let{pathname:_="/",search:E="",hash:S="",state:J=null,key:U="default",mask:H}=o,A=C.useMemo(()=>{let q=Xl(_,f);return q==null?null:{location:{pathname:q,search:E,hash:S,state:J,key:U,mask:H},navigationType:r}},[f,_,E,S,J,U,r,H]);return nl(A!=null,`<Router basename="${f}"> is not able to match the URL "${_}${E}${S}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:C.createElement(Zl.Provider,{value:m},C.createElement(Aa.Provider,{children:a,value:A}))}var Ja="get",za="application/x-www-form-urlencoded";function Ma(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function vh(t){return Ma(t)&&t.tagName.toLowerCase()==="button"}function wh(t){return Ma(t)&&t.tagName.toLowerCase()==="form"}function xh(t){return Ma(t)&&t.tagName.toLowerCase()==="input"}function yh(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Eh(t,a){return t.button===0&&(!a||a==="_self")&&!yh(t)}var La=null;function kh(){if(La===null)try{new FormData(document.createElement("form"),0),La=!1}catch{La=!0}return La}var bh=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ku(t){return t!=null&&!bh.has(t)?(nl(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${za}"`),null):t}function Ch(t,a){let o,r,c,p,g;if(wh(t)){let f=t.getAttribute("action");r=f?Xl(f,a):null,o=t.getAttribute("method")||Ja,c=ku(t.getAttribute("enctype"))||za,p=new FormData(t)}else if(vh(t)||xh(t)&&(t.type==="submit"||t.type==="image")){let f=t.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=t.getAttribute("formaction")||f.getAttribute("action");if(r=m?Xl(m,a):null,o=t.getAttribute("formmethod")||f.getAttribute("method")||Ja,c=ku(t.getAttribute("formenctype"))||ku(f.getAttribute("enctype"))||za,p=new FormData(f,t),!kh()){let{name:_,type:E,value:S}=t;if(E==="image"){let J=_?`${_}.`:"";p.append(`${J}x`,"0"),p.append(`${J}y`,"0")}else _&&p.append(_,S)}}else{if(Ma(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=Ja,r=null,c=za,g=t}return p&&c==="text/plain"&&(g=p,p=void 0),{action:r,method:o.toLowerCase(),encType:c,formData:p,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Nu(t,a){if(t===!1||t===null||typeof t>"u")throw new Error(a)}function Rd(t,a,o,r){let c=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return o?c.pathname.endsWith("/")?c.pathname=`${c.pathname}_.${r}`:c.pathname=`${c.pathname}.${r}`:c.pathname==="/"?c.pathname=`_root.${r}`:a&&Xl(c.pathname,a)==="/"?c.pathname=`${qa(a)}/_root.${r}`:c.pathname=`${qa(c.pathname)}.${r}`,c}async function Lh(t,a){if(t.id in a)return a[t.id];try{let o=await import(t.module);return a[t.id]=o,o}catch(o){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ih(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function Gh(t,a,o){let r=await Promise.all(t.map(async c=>{let p=a.routes[c.route.id];if(p){let g=await Lh(p,o);return g.links?g.links():[]}return[]}));return Uh(r.flat(1).filter(Ih).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function Vp(t,a,o,r,c,p){let g=(m,_)=>o[_]?m.route.id!==o[_].route.id:!0,f=(m,_)=>{var E;return o[_].pathname!==m.pathname||((E=o[_].route.path)==null?void 0:E.endsWith("*"))&&o[_].params["*"]!==m.params["*"]};return p==="assets"?a.filter((m,_)=>g(m,_)||f(m,_)):p==="data"?a.filter((m,_)=>{var S;let E=r.routes[m.route.id];if(!E||!E.hasLoader)return!1;if(g(m,_)||f(m,_))return!0;if(m.route.shouldRevalidate){let J=m.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((S=o[0])==null?void 0:S.params)||{},nextUrl:new URL(t,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof J=="boolean")return J}return!0}):[]}function Ph(t,a,{includeHydrateFallback:o}={}){return Jh(t.map(r=>{let c=a.routes[r.route.id];if(!c)return[];let p=[c.module];return c.clientActionModule&&(p=p.concat(c.clientActionModule)),c.clientLoaderModule&&(p=p.concat(c.clientLoaderModule)),o&&c.hydrateFallbackModule&&(p=p.concat(c.hydrateFallbackModule)),c.imports&&(p=p.concat(c.imports)),p}).flat(1))}function Jh(t){return[...new Set(t)]}function zh(t){let a={},o=Object.keys(t).sort();for(let r of o)a[r]=t[r];return a}function Uh(t,a){let o=new Set;return new Set(a),t.reduce((r,c)=>{let p=JSON.stringify(zh(c));return o.has(p)||(o.add(p),r.push({key:p,link:c})),r},[])}function Fu(){let t=C.useContext(Ui);return Nu(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function qh(){let t=C.useContext(_n);return Nu(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Du=C.createContext(void 0);Du.displayName="FrameworkContext";function Wu(){let t=C.useContext(Du);return Nu(t,"You must render this element inside a <HydratedRouter> element"),t}function Bh(t,a){let o=C.useContext(Du),[r,c]=C.useState(!1),[p,g]=C.useState(!1),{onFocus:f,onBlur:m,onMouseEnter:_,onMouseLeave:E,onTouchStart:S}=a,J=C.useRef(null);C.useEffect(()=>{if(t==="render"&&g(!0),t==="viewport"){let A=D=>{D.forEach(K=>{g(K.isIntersecting)})},q=new IntersectionObserver(A,{threshold:.5});return J.current&&q.observe(J.current),()=>{q.disconnect()}}},[t]),C.useEffect(()=>{if(r){let A=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(A)}}},[r]);let U=()=>{c(!0)},H=()=>{c(!1),g(!1)};return o?t!=="intent"?[p,J,{}]:[p,J,{onFocus:an(f,U),onBlur:an(m,H),onMouseEnter:an(_,U),onMouseLeave:an(E,H),onTouchStart:an(S,U)}]:[!1,J,{}]}function an(t,a){return o=>{t&&t(o),o.defaultPrevented||a(o)}}function Ah({page:t,...a}){let o=zd(),{router:r}=Fu(),c=C.useMemo(()=>dd(r.routes,t,r.basename),[r.routes,t,r.basename]);return c?o?C.createElement(Hh,{page:t,matches:c,...a}):C.createElement(Th,{page:t,matches:c,...a}):null}function Mh(t){let{manifest:a,routeModules:o}=Wu(),[r,c]=C.useState([]);return C.useEffect(()=>{let p=!1;return Gh(t,a,o).then(g=>{p||c(g)}),()=>{p=!0}},[t,a,o]),r}function Hh({page:t,matches:a,...o}){let r=ks(),{future:c}=Wu(),{basename:p}=Fu(),g=C.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let f=Rd(t,p,c.v8_trailingSlashAwareDataRequests,"rsc"),m=!1,_=[];for(let E of a)typeof E.route.shouldRevalidate=="function"?m=!0:_.push(E.route.id);return m&&_.length>0&&f.searchParams.set("_routes",_.join(",")),[f.pathname+f.search]},[p,c.v8_trailingSlashAwareDataRequests,t,r,a]);return C.createElement(C.Fragment,null,g.map(f=>C.createElement("link",{key:f,rel:"prefetch",as:"fetch",href:f,...o})))}function Th({page:t,matches:a,...o}){let r=ks(),{future:c,manifest:p,routeModules:g}=Wu(),{basename:f}=Fu(),{loaderData:m,matches:_}=qh(),E=C.useMemo(()=>Vp(t,a,_,p,r,"data"),[t,a,_,p,r]),S=C.useMemo(()=>Vp(t,a,_,p,r,"assets"),[t,a,_,p,r]),J=C.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let A=new Set,q=!1;if(a.forEach(K=>{var pe;let X=p.routes[K.route.id];!X||!X.hasLoader||(!E.some(ue=>ue.route.id===K.route.id)&&K.route.id in m&&((pe=g[K.route.id])!=null&&pe.shouldRevalidate)||X.hasClientLoader?q=!0:A.add(K.route.id))}),A.size===0)return[];let D=Rd(t,f,c.v8_trailingSlashAwareDataRequests,"data");return q&&A.size>0&&D.searchParams.set("_routes",a.filter(K=>A.has(K.route.id)).map(K=>K.route.id).join(",")),[D.pathname+D.search]},[f,c.v8_trailingSlashAwareDataRequests,m,r,p,E,a,t,g]),U=C.useMemo(()=>Ph(S,p),[S,p]),H=Mh(S);return C.createElement(C.Fragment,null,J.map(A=>C.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...o})),U.map(A=>C.createElement("link",{key:A,rel:"modulepreload",href:A,...o})),H.map(({key:A,link:q})=>C.createElement("link",{key:A,nonce:o.nonce,...q,crossOrigin:q.crossOrigin??o.crossOrigin})))}function Rh(...t){return a=>{t.forEach(o=>{typeof o=="function"?o(a):o!=null&&(o.current=a)})}}var Oh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Oh&&(window.__reactRouterVersion="7.17.0")}catch{}function Nh(t,a){return Sm({basename:a==null?void 0:a.basename,getContext:a==null?void 0:a.getContext,future:a==null?void 0:a.future,history:Uf({window:a==null?void 0:a.window}),hydrationData:Fh(),routes:t,mapRouteProperties:gh,hydrationRouteProperties:fh,dataStrategy:a==null?void 0:a.dataStrategy,patchRoutesOnNavigation:a==null?void 0:a.patchRoutesOnNavigation,window:a==null?void 0:a.window,instrumentations:a==null?void 0:a.instrumentations}).initialize()}function Fh(){let t=window==null?void 0:window.__staticRouterHydrationData;return t&&t.errors&&(t={...t,errors:Dh(t.errors)}),t}function Dh(t){if(!t)return null;let a=Object.entries(t),o={};for(let[r,c]of a)if(c&&c.__type==="RouteErrorResponse")o[r]=new mn(c.status,c.statusText,c.data,c.internal===!0);else if(c&&c.__type==="Error"){if(c.__subType){let p=window[c.__subType];if(typeof p=="function")try{let g=new p(c.message);g.stack="",o[r]=g}catch{}}if(o[r]==null){let p=new Error(c.message);p.stack="",o[r]=p}}else o[r]=c;return o}var Od=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Nd=C.forwardRef(function({onClick:a,discover:o="render",prefetch:r="none",relative:c,reloadDocument:p,replace:g,mask:f,state:m,target:_,to:E,preventScrollReset:S,viewTransition:J,defaultShouldRevalidate:U,...H},A){let{basename:q,navigator:D,useTransitions:K}=C.useContext(Zl),X=typeof E=="string"&&Od.test(E),pe=jd(E,q);E=pe.to;let ue=Km(E,{relative:c}),ve=ks(),Ce=null;if(f){let Me=Ba(f,[],ve.mask?ve.mask.pathname:"/",!0);q!=="/"&&(Me.pathname=Me.pathname==="/"?q:Yl([q,Me.pathname])),Ce=D.createHref(Me)}let[L,ke,fe]=Bh(r,H),Ne=Kh(E,{replace:g,mask:f,state:m,target:_,preventScrollReset:S,relative:c,viewTransition:J,defaultShouldRevalidate:U,useTransitions:K});function xe(Me){a&&a(Me),Me.defaultPrevented||Ne(Me)}let Ge=!(pe.isExternal||p),Pe=C.createElement("a",{...H,...fe,href:(Ge?Ce:void 0)||pe.absoluteURL||ue,onClick:Ge?xe:a,ref:Rh(A,ke),target:_,"data-discover":!X&&o==="render"?"true":void 0});return L&&!X?C.createElement(C.Fragment,null,Pe,C.createElement(Ah,{page:ue})):Pe});Nd.displayName="Link";var Wh=C.forwardRef(function({"aria-current":a="page",caseSensitive:o=!1,className:r="",end:c=!1,style:p,to:g,viewTransition:f,children:m,..._},E){let S=Sn(g,{relative:_.relative}),J=ks(),U=C.useContext(_n),{navigator:H,basename:A}=C.useContext(Zl),q=U!=null&&e_(S)&&f===!0,D=H.encodeLocation?H.encodeLocation(S).pathname:S.pathname,K=J.pathname,X=U&&U.navigation&&U.navigation.location?U.navigation.location.pathname:null;o||(K=K.toLowerCase(),X=X?X.toLowerCase():null,D=D.toLowerCase()),X&&A&&(X=Xl(X,A)||X);const pe=D!=="/"&&D.endsWith("/")?D.length-1:D.length;let ue=K===D||!c&&K.startsWith(D)&&K.charAt(pe)==="/",ve=X!=null&&(X===D||!c&&X.startsWith(D)&&X.charAt(D.length)==="/"),Ce={isActive:ue,isPending:ve,isTransitioning:q},L=ue?a:void 0,ke;typeof r=="function"?ke=r(Ce):ke=[r,ue?"active":null,ve?"pending":null,q?"transitioning":null].filter(Boolean).join(" ");let fe=typeof p=="function"?p(Ce):p;return C.createElement(Nd,{..._,"aria-current":L,className:ke,ref:E,style:fe,to:g,viewTransition:f},typeof m=="function"?m(Ce):m)});Wh.displayName="NavLink";var $h=C.forwardRef(({discover:t="render",fetcherKey:a,navigate:o,reloadDocument:r,replace:c,state:p,method:g=Ja,action:f,onSubmit:m,relative:_,preventScrollReset:E,viewTransition:S,defaultShouldRevalidate:J,...U},H)=>{let{useTransitions:A}=C.useContext(Zl),q=Xh(),D=Zh(f,{relative:_}),K=g.toLowerCase()==="get"?"get":"post",X=typeof f=="string"&&Od.test(f),pe=ue=>{if(m&&m(ue),ue.defaultPrevented)return;ue.preventDefault();let ve=ue.nativeEvent.submitter,Ce=(ve==null?void 0:ve.getAttribute("formmethod"))||g,L=()=>q(ve||ue.currentTarget,{fetcherKey:a,method:Ce,navigate:o,replace:c,state:p,relative:_,preventScrollReset:E,viewTransition:S,defaultShouldRevalidate:J});A&&o!==!1?C.startTransition(()=>L()):L()};return C.createElement("form",{ref:H,method:K,action:D,onSubmit:r?m:pe,...U,"data-discover":!X&&t==="render"?"true":void 0})});$h.displayName="Form";function Vh(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fd(t){let a=C.useContext(Ui);return Ie(a,Vh(t)),a}function Kh(t,{target:a,replace:o,mask:r,state:c,preventScrollReset:p,relative:g,viewTransition:f,defaultShouldRevalidate:m,useTransitions:_}={}){let E=Md(),S=ks(),J=Sn(t,{relative:g});return C.useCallback(U=>{if(Eh(U,a)){U.preventDefault();let H=o!==void 0?o:xs(S)===xs(J),A=()=>E(t,{replace:H,mask:r,state:c,preventScrollReset:p,relative:g,viewTransition:f,defaultShouldRevalidate:m});_?C.startTransition(()=>A()):A()}},[S,E,J,o,r,c,a,t,p,g,f,m,_])}var Qh=0,Yh=()=>`__${String(++Qh)}__`;function Xh(){let{router:t}=Fd("useSubmit"),{basename:a}=C.useContext(Zl),o=oh(),r=t.fetch,c=t.navigate;return C.useCallback(async(p,g={})=>{let{action:f,method:m,encType:_,formData:E,body:S}=Ch(p,a);if(g.navigate===!1){let J=g.fetcherKey||Yh();await r(J,o,g.action||f,{defaultShouldRevalidate:g.defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:E,body:S,formMethod:g.method||m,formEncType:g.encType||_,flushSync:g.flushSync})}else await c(g.action||f,{defaultShouldRevalidate:g.defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:E,body:S,formMethod:g.method||m,formEncType:g.encType||_,replace:g.replace,state:g.state,fromRouteId:o,flushSync:g.flushSync,viewTransition:g.viewTransition})},[r,c,a,o])}function Zh(t,{relative:a}={}){let{basename:o}=C.useContext(Zl),r=C.useContext(Es);Ie(r,"useFormAction must be used inside a RouteContext");let[c]=r.matches.slice(-1),p={...Sn(t||".",{relative:a})},g=ks();if(t==null){p.search=g.search;let f=new URLSearchParams(p.search),m=f.getAll("index");if(m.some(E=>E==="")){f.delete("index"),m.filter(S=>S).forEach(S=>f.append("index",S));let E=f.toString();p.search=E?`?${E}`:""}}return(!t||t===".")&&c.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(p.pathname=p.pathname==="/"?o:Yl([o,p.pathname])),xs(p)}function e_(t,{relative:a}={}){let o=C.useContext(Hu);Ie(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Fd("useViewTransitionState"),c=Sn(t,{relative:a});if(!o.isTransitioning)return!1;let p=Xl(o.currentLocation.pathname,r)||o.currentLocation.pathname,g=Xl(o.nextLocation.pathname,r)||o.nextLocation.pathname;return Ua(c.pathname,g)!=null||Ua(c.pathname,p)!=null}var bu={exports:{}},zl={},Cu={exports:{}},Lu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function l_(){return Kp||(Kp=1,(function(t){function a(N,Q){var V=N.length;N.push(Q);e:for(;0<V;){var y=V-1>>>1,B=N[y];if(0<c(B,Q))N[y]=Q,N[V]=B,V=y;else break e}}function o(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var Q=N[0],V=N.pop();if(V!==Q){N[0]=V;e:for(var y=0,B=N.length,ce=B>>>1;y<ce;){var me=2*(y+1)-1,ge=N[me],he=me+1,Le=N[he];if(0>c(ge,V))he<B&&0>c(Le,ge)?(N[y]=Le,N[he]=V,y=he):(N[y]=ge,N[me]=V,y=me);else if(he<B&&0>c(Le,V))N[y]=Le,N[he]=V,y=he;else break e}}return Q}function c(N,Q){var V=N.sortIndex-Q.sortIndex;return V!==0?V:N.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;t.unstable_now=function(){return p.now()}}else{var g=Date,f=g.now();t.unstable_now=function(){return g.now()-f}}var m=[],_=[],E=1,S=null,J=3,U=!1,H=!1,A=!1,q=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function X(N){for(var Q=o(_);Q!==null;){if(Q.callback===null)r(_);else if(Q.startTime<=N)r(_),Q.sortIndex=Q.expirationTime,a(m,Q);else break;Q=o(_)}}function pe(N){if(A=!1,X(N),!H)if(o(m)!==null)H=!0,Oe(ue);else{var Q=o(_);Q!==null&&de(pe,Q.startTime-N)}}function ue(N,Q){H=!1,A&&(A=!1,D(L),L=-1),U=!0;var V=J;try{for(X(Q),S=o(m);S!==null&&(!(S.expirationTime>Q)||N&&!Ne());){var y=S.callback;if(typeof y=="function"){S.callback=null,J=S.priorityLevel;var B=y(S.expirationTime<=Q);Q=t.unstable_now(),typeof B=="function"?S.callback=B:S===o(m)&&r(m),X(Q)}else r(m);S=o(m)}if(S!==null)var ce=!0;else{var me=o(_);me!==null&&de(pe,me.startTime-Q),ce=!1}return ce}finally{S=null,J=V,U=!1}}var ve=!1,Ce=null,L=-1,ke=5,fe=-1;function Ne(){return!(t.unstable_now()-fe<ke)}function xe(){if(Ce!==null){var N=t.unstable_now();fe=N;var Q=!0;try{Q=Ce(!0,N)}finally{Q?Ge():(ve=!1,Ce=null)}}else ve=!1}var Ge;if(typeof K=="function")Ge=function(){K(xe)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,Me=Pe.port2;Pe.port1.onmessage=xe,Ge=function(){Me.postMessage(null)}}else Ge=function(){q(xe,0)};function Oe(N){Ce=N,ve||(ve=!0,Ge())}function de(N,Q){L=q(function(){N(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){H||U||(H=!0,Oe(ue))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ke=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return J},t.unstable_getFirstCallbackNode=function(){return o(m)},t.unstable_next=function(N){switch(J){case 1:case 2:case 3:var Q=3;break;default:Q=J}var V=J;J=Q;try{return N()}finally{J=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,Q){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var V=J;J=N;try{return Q()}finally{J=V}},t.unstable_scheduleCallback=function(N,Q,V){var y=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?y+V:y):V=y,N){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=V+B,N={id:E++,callback:Q,priorityLevel:N,startTime:V,expirationTime:B,sortIndex:-1},V>y?(N.sortIndex=V,a(_,N),o(m)===null&&N===o(_)&&(A?(D(L),L=-1):A=!0,de(pe,V-y))):(N.sortIndex=B,a(m,N),H||U||(H=!0,Oe(ue))),N},t.unstable_shouldYield=Ne,t.unstable_wrapCallback=function(N){var Q=J;return function(){var V=J;J=Q;try{return N.apply(this,arguments)}finally{J=V}}}})(Lu)),Lu}var Qp;function s_(){return Qp||(Qp=1,Cu.exports=l_()),Cu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function i_(){if(Yp)return zl;Yp=1;var t=Ju(),a=s_();function o(e){for(var l="https://reactjs.org/docs/error-decoder.html?invariant="+e,s=1;s<arguments.length;s++)l+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+e+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,c={};function p(e,l){g(e,l),g(e+"Capture",l)}function g(e,l){for(c[e]=l,e=0;e<l.length;e++)r.add(l[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},S={};function J(e){return m.call(S,e)?!0:m.call(E,e)?!1:_.test(e)?S[e]=!0:(E[e]=!0,!1)}function U(e,l,s,i){if(s!==null&&s.type===0)return!1;switch(typeof l){case"function":case"symbol":return!0;case"boolean":return i?!1:s!==null?!s.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function H(e,l,s,i){if(l===null||typeof l>"u"||U(e,l,s,i))return!0;if(i)return!1;if(s!==null)switch(s.type){case 3:return!l;case 4:return l===!1;case 5:return isNaN(l);case 6:return isNaN(l)||1>l}return!1}function A(e,l,s,i,n,u,d){this.acceptsBooleans=l===2||l===3||l===4,this.attributeName=i,this.attributeNamespace=n,this.mustUseProperty=s,this.propertyName=e,this.type=l,this.sanitizeURL=u,this.removeEmptyString=d}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){q[e]=new A(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var l=e[0];q[l]=new A(l,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){q[e]=new A(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){q[e]=new A(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){q[e]=new A(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){q[e]=new A(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){q[e]=new A(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){q[e]=new A(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){q[e]=new A(e,5,!1,e.toLowerCase(),null,!1,!1)});var D=/[\-:]([a-z])/g;function K(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var l=e.replace(D,K);q[l]=new A(l,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var l=e.replace(D,K);q[l]=new A(l,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var l=e.replace(D,K);q[l]=new A(l,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){q[e]=new A(e,1,!1,e.toLowerCase(),null,!1,!1)}),q.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){q[e]=new A(e,1,!1,e.toLowerCase(),null,!0,!0)});function X(e,l,s,i){var n=q.hasOwnProperty(l)?q[l]:null;(n!==null?n.type!==0:i||!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(H(l,s,n,i)&&(s=null),i||n===null?J(l)&&(s===null?e.removeAttribute(l):e.setAttribute(l,""+s)):n.mustUseProperty?e[n.propertyName]=s===null?n.type===3?!1:"":s:(l=n.attributeName,i=n.attributeNamespace,s===null?e.removeAttribute(l):(n=n.type,s=n===3||n===4&&s===!0?"":""+s,i?e.setAttributeNS(i,l,s):e.setAttribute(l,s))))}var pe=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ue=Symbol.for("react.element"),ve=Symbol.for("react.portal"),Ce=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),ke=Symbol.for("react.profiler"),fe=Symbol.for("react.provider"),Ne=Symbol.for("react.context"),xe=Symbol.for("react.forward_ref"),Ge=Symbol.for("react.suspense"),Pe=Symbol.for("react.suspense_list"),Me=Symbol.for("react.memo"),Oe=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),N=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=N&&e[N]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,y;function B(e){if(y===void 0)try{throw Error()}catch(s){var l=s.stack.trim().match(/\n( *(at )?)/);y=l&&l[1]||""}return`
`+y+e}var ce=!1;function me(e,l){if(!e||ce)return"";ce=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(l)if(l=function(){throw Error()},Object.defineProperty(l.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(l,[])}catch(z){var i=z}Reflect.construct(e,[],l)}else{try{l.call()}catch(z){i=z}e.call(l.prototype)}else{try{throw Error()}catch(z){i=z}e()}}catch(z){if(z&&i&&typeof z.stack=="string"){for(var n=z.stack.split(`
`),u=i.stack.split(`
`),d=n.length-1,h=u.length-1;1<=d&&0<=h&&n[d]!==u[h];)h--;for(;1<=d&&0<=h;d--,h--)if(n[d]!==u[h]){if(d!==1||h!==1)do if(d--,h--,0>h||n[d]!==u[h]){var v=`
`+n[d].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=d&&0<=h);break}}}finally{ce=!1,Error.prepareStackTrace=s}return(e=e?e.displayName||e.name:"")?B(e):""}function ge(e){switch(e.tag){case 5:return B(e.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return e=me(e.type,!1),e;case 11:return e=me(e.type.render,!1),e;case 1:return e=me(e.type,!0),e;default:return""}}function he(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ce:return"Fragment";case ve:return"Portal";case ke:return"Profiler";case L:return"StrictMode";case Ge:return"Suspense";case Pe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ne:return(e.displayName||"Context")+".Consumer";case fe:return(e._context.displayName||"Context")+".Provider";case xe:var l=e.render;return e=e.displayName,e||(e=l.displayName||l.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Me:return l=e.displayName||null,l!==null?l:he(e.type)||"Memo";case Oe:l=e._payload,e=e._init;try{return he(e(l))}catch{}}return null}function Le(e){var l=e.type;switch(e.tag){case 24:return"Cache";case 9:return(l.displayName||"Context")+".Consumer";case 10:return(l._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=l.render,e=e.displayName||e.name||"",l.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return l;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return he(l);case 8:return l===L?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof l=="function")return l.displayName||l.name||null;if(typeof l=="string")return l}return null}function qe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function k(e){var l=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(l==="checkbox"||l==="radio")}function $(e){var l=k(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,l),i=""+e[l];if(!e.hasOwnProperty(l)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var n=s.get,u=s.set;return Object.defineProperty(e,l,{configurable:!0,get:function(){return n.call(this)},set:function(d){i=""+d,u.call(this,d)}}),Object.defineProperty(e,l,{enumerable:s.enumerable}),{getValue:function(){return i},setValue:function(d){i=""+d},stopTracking:function(){e._valueTracker=null,delete e[l]}}}}function we(e){e._valueTracker||(e._valueTracker=$(e))}function Je(e){if(!e)return!1;var l=e._valueTracker;if(!l)return!0;var s=l.getValue(),i="";return e&&(i=k(e)?e.checked?"true":"false":e.value),e=i,e!==s?(l.setValue(e),!0):!1}function ie(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xe(e,l){var s=l.checked;return V({},l,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??e._wrapperState.initialChecked})}function Tl(e,l){var s=l.defaultValue==null?"":l.defaultValue,i=l.checked!=null?l.checked:l.defaultChecked;s=qe(l.value!=null?l.value:s),e._wrapperState={initialChecked:i,initialValue:s,controlled:l.type==="checkbox"||l.type==="radio"?l.checked!=null:l.value!=null}}function Rl(e,l){l=l.checked,l!=null&&X(e,"checked",l,!1)}function bl(e,l){Rl(e,l);var s=qe(l.value),i=l.type;if(s!=null)i==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+s):e.value!==""+s&&(e.value=""+s);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}l.hasOwnProperty("value")?hi(e,l.type,s):l.hasOwnProperty("defaultValue")&&hi(e,l.type,qe(l.defaultValue)),l.checked==null&&l.defaultChecked!=null&&(e.defaultChecked=!!l.defaultChecked)}function mi(e,l,s){if(l.hasOwnProperty("value")||l.hasOwnProperty("defaultValue")){var i=l.type;if(!(i!=="submit"&&i!=="reset"||l.value!==void 0&&l.value!==null))return;l=""+e._wrapperState.initialValue,s||l===e.value||(e.value=l),e.defaultValue=l}s=e.name,s!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,s!==""&&(e.name=s)}function hi(e,l,s){(l!=="number"||ie(e.ownerDocument)!==e)&&(s==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+s&&(e.defaultValue=""+s))}var ps=Array.isArray;function As(e,l,s,i){if(e=e.options,l){l={};for(var n=0;n<s.length;n++)l["$"+s[n]]=!0;for(s=0;s<e.length;s++)n=l.hasOwnProperty("$"+e[s].value),e[s].selected!==n&&(e[s].selected=n),n&&i&&(e[s].defaultSelected=!0)}else{for(s=""+qe(s),l=null,n=0;n<e.length;n++){if(e[n].value===s){e[n].selected=!0,i&&(e[n].defaultSelected=!0);return}l!==null||e[n].disabled||(l=e[n])}l!==null&&(l.selected=!0)}}function St(e,l){if(l.dangerouslySetInnerHTML!=null)throw Error(o(91));return V({},l,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vn(e,l){var s=l.value;if(s==null){if(s=l.children,l=l.defaultValue,s!=null){if(l!=null)throw Error(o(92));if(ps(s)){if(1<s.length)throw Error(o(93));s=s[0]}l=s}l==null&&(l=""),s=l}e._wrapperState={initialValue:qe(s)}}function wn(e,l){var s=qe(l.value),i=qe(l.defaultValue);s!=null&&(s=""+s,s!==e.value&&(e.value=s),l.defaultValue==null&&e.defaultValue!==s&&(e.defaultValue=s)),i!=null&&(e.defaultValue=""+i)}function ds(e){var l=e.textContent;l===e._wrapperState.initialValue&&l!==""&&l!==null&&(e.value=l)}function Ms(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qi(e,l){return e==null||e==="http://www.w3.org/1999/xhtml"?Ms(l):e==="http://www.w3.org/2000/svg"&&l==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Hs,Ol=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(l,s,i,n){MSApp.execUnsafeLocalFunction(function(){return e(l,s,i,n)})}:e})(function(e,l){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=l;else{for(Hs=Hs||document.createElement("div"),Hs.innerHTML="<svg>"+l.valueOf().toString()+"</svg>",l=Hs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;l.firstChild;)e.appendChild(l.firstChild)}});function xl(e,l){if(l){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=l;return}}e.textContent=l}var _i={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ha=["Webkit","ms","Moz","O"];Object.keys(_i).forEach(function(e){Ha.forEach(function(l){l=l+e.charAt(0).toUpperCase()+e.substring(1),_i[l]=_i[e]})});function Bi(e,l,s){return l==null||typeof l=="boolean"||l===""?"":s||typeof l!="number"||l===0||_i.hasOwnProperty(e)&&_i[e]?(""+l).trim():l+"px"}function xn(e,l){e=e.style;for(var s in l)if(l.hasOwnProperty(s)){var i=s.indexOf("--")===0,n=Bi(s,l[s],i);s==="float"&&(s="cssFloat"),i?e.setProperty(s,n):e[s]=n}}var es=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ai(e,l){if(l){if(es[e]&&(l.children!=null||l.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(l.dangerouslySetInnerHTML!=null){if(l.children!=null)throw Error(o(60));if(typeof l.dangerouslySetInnerHTML!="object"||!("__html"in l.dangerouslySetInnerHTML))throw Error(o(61))}if(l.style!=null&&typeof l.style!="object")throw Error(o(62))}}function Mi(e,l){if(e.indexOf("-")===-1)return typeof l.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hi=null;function vt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ti=null,ls=null,bs=null;function Ri(e){if(e=Rt(e)){if(typeof Ti!="function")throw Error(o(280));var l=e.stateNode;l&&(l=Rn(l),Ti(e.stateNode,e.type,l))}}function yn(e){ls?bs?bs.push(e):bs=[e]:ls=e}function wt(){if(ls){var e=ls,l=bs;if(bs=ls=null,Ri(e),l)for(e=0;e<l.length;e++)Ri(l[e])}}function En(e,l){return e(l)}function xt(){}var Ts=!1;function ji(e,l,s){if(Ts)return e(l,s);Ts=!0;try{return En(e,l,s)}finally{Ts=!1,(ls!==null||bs!==null)&&(xt(),wt())}}function Rs(e,l){var s=e.stateNode;if(s===null)return null;var i=Rn(s);if(i===null)return null;s=i[l];e:switch(l){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(o(231,l,typeof s));return s}var yt=!1;if(f)try{var Si={};Object.defineProperty(Si,"passive",{get:function(){yt=!0}}),window.addEventListener("test",Si,Si),window.removeEventListener("test",Si,Si)}catch{yt=!1}function j(e,l,s,i,n,u,d,h,v){var z=Array.prototype.slice.call(arguments,3);try{l.apply(s,z)}catch(O){this.onError(O)}}var w=!1,G=null,M=!1,T=null,ne={onError:function(e){w=!0,G=e}};function ae(e,l,s,i,n,u,d,h,v){w=!1,G=null,j.apply(ne,arguments)}function Ee(e,l,s,i,n,u,d,h,v){if(ae.apply(this,arguments),w){if(w){var z=G;w=!1,G=null}else throw Error(o(198));M||(M=!0,T=z)}}function Y(e){var l=e,s=e;if(e.alternate)for(;l.return;)l=l.return;else{e=l;do l=e,(l.flags&4098)!==0&&(s=l.return),e=l.return;while(e)}return l.tag===3?s:null}function oe(e){if(e.tag===13){var l=e.memoizedState;if(l===null&&(e=e.alternate,e!==null&&(l=e.memoizedState)),l!==null)return l.dehydrated}return null}function Se(e){if(Y(e)!==e)throw Error(o(188))}function be(e){var l=e.alternate;if(!l){if(l=Y(e),l===null)throw Error(o(188));return l!==e?null:e}for(var s=e,i=l;;){var n=s.return;if(n===null)break;var u=n.alternate;if(u===null){if(i=n.return,i!==null){s=i;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===s)return Se(n),e;if(u===i)return Se(n),l;u=u.sibling}throw Error(o(188))}if(s.return!==i.return)s=n,i=u;else{for(var d=!1,h=n.child;h;){if(h===s){d=!0,s=n,i=u;break}if(h===i){d=!0,i=n,s=u;break}h=h.sibling}if(!d){for(h=u.child;h;){if(h===s){d=!0,s=u,i=n;break}if(h===i){d=!0,i=u,s=n;break}h=h.sibling}if(!d)throw Error(o(189))}}if(s.alternate!==i)throw Error(o(190))}if(s.tag!==3)throw Error(o(188));return s.stateNode.current===s?e:l}function re(e){return e=be(e),e!==null?Ue(e):null}function Ue(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var l=Ue(e);if(l!==null)return l;e=e.sibling}return null}var Re=a.unstable_scheduleCallback,sl=a.unstable_cancelCallback,Ve=a.unstable_shouldYield,Fe=a.unstable_requestPaint,Be=a.unstable_now,fl=a.unstable_getCurrentPriorityLevel,Cs=a.unstable_ImmediatePriority,ss=a.unstable_UserBlockingPriority,is=a.unstable_NormalPriority,gs=a.unstable_LowPriority,Ul=a.unstable_IdlePriority,Os=null,al=null;function Oi(e){if(al&&typeof al.onCommitFiberRoot=="function")try{al.onCommitFiberRoot(Os,e,void 0,(e.current.flags&128)===128)}catch{}}var ml=Math.clz32?Math.clz32:hl,Ni=Math.log,Ae=Math.LN2;function hl(e){return e>>>=0,e===0?32:31-(Ni(e)/Ae|0)|0}var yl=64,Cl=4194304;function Ns(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fs(e,l){var s=e.pendingLanes;if(s===0)return 0;var i=0,n=e.suspendedLanes,u=e.pingedLanes,d=s&268435455;if(d!==0){var h=d&~n;h!==0?i=Ns(h):(u&=d,u!==0&&(i=Ns(u)))}else d=s&~n,d!==0?i=Ns(d):u!==0&&(i=Ns(u));if(i===0)return 0;if(l!==0&&l!==i&&(l&n)===0&&(n=i&-i,u=l&-l,n>=u||n===16&&(u&4194240)!==0))return l;if((i&4)!==0&&(i|=s&16),l=e.entangledLanes,l!==0)for(e=e.entanglements,l&=i;0<l;)s=31-ml(l),n=1<<s,i|=e[s],l&=~n;return i}function We(e,l){switch(e){case 1:case 2:case 4:return l+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ls(e,l){for(var s=e.suspendedLanes,i=e.pingedLanes,n=e.expirationTimes,u=e.pendingLanes;0<u;){var d=31-ml(u),h=1<<d,v=n[d];v===-1?((h&s)===0||(h&i)!==0)&&(n[d]=We(h,l)):v<=l&&(e.expiredLanes|=h),u&=~h}}function Fi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function kn(){var e=yl;return yl<<=1,(yl&4194240)===0&&(yl=64),e}function Ta(e){for(var l=[],s=0;31>s;s++)l.push(e);return l}function Et(e,l,s){e.pendingLanes|=l,l!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,l=31-ml(l),e[l]=s}function $d(e,l){var s=e.pendingLanes&~l;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=l,e.mutableReadLanes&=l,e.entangledLanes&=l,l=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<s;){var n=31-ml(s),u=1<<n;l[n]=0,i[n]=-1,e[n]=-1,s&=~u}}function Ra(e,l){var s=e.entangledLanes|=l;for(e=e.entanglements;s;){var i=31-ml(s),n=1<<i;n&l|e[i]&l&&(e[i]|=l),s&=~n}}var De=0;function $u(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Vu,Oa,Ku,Qu,Yu,Na=!1,bn=[],Ds=null,Ws=null,$s=null,kt=new Map,bt=new Map,Vs=[],Vd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xu(e,l){switch(e){case"focusin":case"focusout":Ds=null;break;case"dragenter":case"dragleave":Ws=null;break;case"mouseover":case"mouseout":$s=null;break;case"pointerover":case"pointerout":kt.delete(l.pointerId);break;case"gotpointercapture":case"lostpointercapture":bt.delete(l.pointerId)}}function Ct(e,l,s,i,n,u){return e===null||e.nativeEvent!==u?(e={blockedOn:l,domEventName:s,eventSystemFlags:i,nativeEvent:u,targetContainers:[n]},l!==null&&(l=Rt(l),l!==null&&Oa(l)),e):(e.eventSystemFlags|=i,l=e.targetContainers,n!==null&&l.indexOf(n)===-1&&l.push(n),e)}function Kd(e,l,s,i,n){switch(l){case"focusin":return Ds=Ct(Ds,e,l,s,i,n),!0;case"dragenter":return Ws=Ct(Ws,e,l,s,i,n),!0;case"mouseover":return $s=Ct($s,e,l,s,i,n),!0;case"pointerover":var u=n.pointerId;return kt.set(u,Ct(kt.get(u)||null,e,l,s,i,n)),!0;case"gotpointercapture":return u=n.pointerId,bt.set(u,Ct(bt.get(u)||null,e,l,s,i,n)),!0}return!1}function Zu(e){var l=vi(e.target);if(l!==null){var s=Y(l);if(s!==null){if(l=s.tag,l===13){if(l=oe(s),l!==null){e.blockedOn=l,Yu(e.priority,function(){Ku(s)});return}}else if(l===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cn(e){if(e.blockedOn!==null)return!1;for(var l=e.targetContainers;0<l.length;){var s=Da(e.domEventName,e.eventSystemFlags,l[0],e.nativeEvent);if(s===null){s=e.nativeEvent;var i=new s.constructor(s.type,s);Hi=i,s.target.dispatchEvent(i),Hi=null}else return l=Rt(s),l!==null&&Oa(l),e.blockedOn=s,!1;l.shift()}return!0}function er(e,l,s){Cn(e)&&s.delete(l)}function Qd(){Na=!1,Ds!==null&&Cn(Ds)&&(Ds=null),Ws!==null&&Cn(Ws)&&(Ws=null),$s!==null&&Cn($s)&&($s=null),kt.forEach(er),bt.forEach(er)}function Lt(e,l){e.blockedOn===l&&(e.blockedOn=null,Na||(Na=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Qd)))}function It(e){function l(n){return Lt(n,e)}if(0<bn.length){Lt(bn[0],e);for(var s=1;s<bn.length;s++){var i=bn[s];i.blockedOn===e&&(i.blockedOn=null)}}for(Ds!==null&&Lt(Ds,e),Ws!==null&&Lt(Ws,e),$s!==null&&Lt($s,e),kt.forEach(l),bt.forEach(l),s=0;s<Vs.length;s++)i=Vs[s],i.blockedOn===e&&(i.blockedOn=null);for(;0<Vs.length&&(s=Vs[0],s.blockedOn===null);)Zu(s),s.blockedOn===null&&Vs.shift()}var Di=pe.ReactCurrentBatchConfig,Ln=!0;function Yd(e,l,s,i){var n=De,u=Di.transition;Di.transition=null;try{De=1,Fa(e,l,s,i)}finally{De=n,Di.transition=u}}function Xd(e,l,s,i){var n=De,u=Di.transition;Di.transition=null;try{De=4,Fa(e,l,s,i)}finally{De=n,Di.transition=u}}function Fa(e,l,s,i){if(Ln){var n=Da(e,l,s,i);if(n===null)uo(e,l,i,In,s),Xu(e,i);else if(Kd(n,e,l,s,i))i.stopPropagation();else if(Xu(e,i),l&4&&-1<Vd.indexOf(e)){for(;n!==null;){var u=Rt(n);if(u!==null&&Vu(u),u=Da(e,l,s,i),u===null&&uo(e,l,i,In,s),u===n)break;n=u}n!==null&&i.stopPropagation()}else uo(e,l,i,null,s)}}var In=null;function Da(e,l,s,i){if(In=null,e=vt(i),e=vi(e),e!==null)if(l=Y(e),l===null)e=null;else if(s=l.tag,s===13){if(e=oe(l),e!==null)return e;e=null}else if(s===3){if(l.stateNode.current.memoizedState.isDehydrated)return l.tag===3?l.stateNode.containerInfo:null;e=null}else l!==e&&(e=null);return In=e,null}function lr(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fl()){case Cs:return 1;case ss:return 4;case is:case gs:return 16;case Ul:return 536870912;default:return 16}default:return 16}}var Ks=null,Wa=null,Gn=null;function sr(){if(Gn)return Gn;var e,l=Wa,s=l.length,i,n="value"in Ks?Ks.value:Ks.textContent,u=n.length;for(e=0;e<s&&l[e]===n[e];e++);var d=s-e;for(i=1;i<=d&&l[s-i]===n[u-i];i++);return Gn=n.slice(e,1<i?1-i:void 0)}function Pn(e){var l=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&l===13&&(e=13)):e=l,e===10&&(e=13),32<=e||e===13?e:0}function Jn(){return!0}function ir(){return!1}function ql(e){function l(s,i,n,u,d){this._reactName=s,this._targetInst=n,this.type=i,this.nativeEvent=u,this.target=d,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(s=e[h],this[h]=s?s(u):u[h]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Jn:ir,this.isPropagationStopped=ir,this}return V(l.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Jn)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Jn)},persist:function(){},isPersistent:Jn}),l}var Wi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$a=ql(Wi),Gt=V({},Wi,{view:0,detail:0}),Zd=ql(Gt),Va,Ka,Pt,zn=V({},Gt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ya,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pt&&(Pt&&e.type==="mousemove"?(Va=e.screenX-Pt.screenX,Ka=e.screenY-Pt.screenY):Ka=Va=0,Pt=e),Va)},movementY:function(e){return"movementY"in e?e.movementY:Ka}}),tr=ql(zn),eg=V({},zn,{dataTransfer:0}),lg=ql(eg),sg=V({},Gt,{relatedTarget:0}),Qa=ql(sg),ig=V({},Wi,{animationName:0,elapsedTime:0,pseudoElement:0}),tg=ql(ig),ng=V({},Wi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ag=ql(ng),og=V({},Wi,{data:0}),nr=ql(og),ug={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pg(e){var l=this.nativeEvent;return l.getModifierState?l.getModifierState(e):(e=cg[e])?!!l[e]:!1}function Ya(){return pg}var dg=V({},Gt,{key:function(e){if(e.key){var l=ug[e.key]||e.key;if(l!=="Unidentified")return l}return e.type==="keypress"?(e=Pn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ya,charCode:function(e){return e.type==="keypress"?Pn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gg=ql(dg),fg=V({},zn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ar=ql(fg),mg=V({},Gt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ya}),hg=ql(mg),_g=V({},Wi,{propertyName:0,elapsedTime:0,pseudoElement:0}),jg=ql(_g),Sg=V({},zn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vg=ql(Sg),wg=[9,13,27,32],Xa=f&&"CompositionEvent"in window,Jt=null;f&&"documentMode"in document&&(Jt=document.documentMode);var xg=f&&"TextEvent"in window&&!Jt,or=f&&(!Xa||Jt&&8<Jt&&11>=Jt),ur=" ",rr=!1;function cr(e,l){switch(e){case"keyup":return wg.indexOf(l.keyCode)!==-1;case"keydown":return l.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $i=!1;function yg(e,l){switch(e){case"compositionend":return pr(l);case"keypress":return l.which!==32?null:(rr=!0,ur);case"textInput":return e=l.data,e===ur&&rr?null:e;default:return null}}function Eg(e,l){if($i)return e==="compositionend"||!Xa&&cr(e,l)?(e=sr(),Gn=Wa=Ks=null,$i=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(l.ctrlKey||l.altKey||l.metaKey)||l.ctrlKey&&l.altKey){if(l.char&&1<l.char.length)return l.char;if(l.which)return String.fromCharCode(l.which)}return null;case"compositionend":return or&&l.locale!=="ko"?null:l.data;default:return null}}var kg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dr(e){var l=e&&e.nodeName&&e.nodeName.toLowerCase();return l==="input"?!!kg[e.type]:l==="textarea"}function gr(e,l,s,i){yn(i),l=Mn(l,"onChange"),0<l.length&&(s=new $a("onChange","change",null,s,i),e.push({event:s,listeners:l}))}var zt=null,Ut=null;function bg(e){Pr(e,0)}function Un(e){var l=Xi(e);if(Je(l))return e}function Cg(e,l){if(e==="change")return l}var fr=!1;if(f){var Za;if(f){var eo="oninput"in document;if(!eo){var mr=document.createElement("div");mr.setAttribute("oninput","return;"),eo=typeof mr.oninput=="function"}Za=eo}else Za=!1;fr=Za&&(!document.documentMode||9<document.documentMode)}function hr(){zt&&(zt.detachEvent("onpropertychange",_r),Ut=zt=null)}function _r(e){if(e.propertyName==="value"&&Un(Ut)){var l=[];gr(l,Ut,e,vt(e)),ji(bg,l)}}function Lg(e,l,s){e==="focusin"?(hr(),zt=l,Ut=s,zt.attachEvent("onpropertychange",_r)):e==="focusout"&&hr()}function Ig(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Un(Ut)}function Gg(e,l){if(e==="click")return Un(l)}function Pg(e,l){if(e==="input"||e==="change")return Un(l)}function Jg(e,l){return e===l&&(e!==0||1/e===1/l)||e!==e&&l!==l}var ts=typeof Object.is=="function"?Object.is:Jg;function qt(e,l){if(ts(e,l))return!0;if(typeof e!="object"||e===null||typeof l!="object"||l===null)return!1;var s=Object.keys(e),i=Object.keys(l);if(s.length!==i.length)return!1;for(i=0;i<s.length;i++){var n=s[i];if(!m.call(l,n)||!ts(e[n],l[n]))return!1}return!0}function jr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sr(e,l){var s=jr(e);e=0;for(var i;s;){if(s.nodeType===3){if(i=e+s.textContent.length,e<=l&&i>=l)return{node:s,offset:l-e};e=i}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=jr(s)}}function vr(e,l){return e&&l?e===l?!0:e&&e.nodeType===3?!1:l&&l.nodeType===3?vr(e,l.parentNode):"contains"in e?e.contains(l):e.compareDocumentPosition?!!(e.compareDocumentPosition(l)&16):!1:!1}function wr(){for(var e=window,l=ie();l instanceof e.HTMLIFrameElement;){try{var s=typeof l.contentWindow.location.href=="string"}catch{s=!1}if(s)e=l.contentWindow;else break;l=ie(e.document)}return l}function lo(e){var l=e&&e.nodeName&&e.nodeName.toLowerCase();return l&&(l==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||l==="textarea"||e.contentEditable==="true")}function zg(e){var l=wr(),s=e.focusedElem,i=e.selectionRange;if(l!==s&&s&&s.ownerDocument&&vr(s.ownerDocument.documentElement,s)){if(i!==null&&lo(s)){if(l=i.start,e=i.end,e===void 0&&(e=l),"selectionStart"in s)s.selectionStart=l,s.selectionEnd=Math.min(e,s.value.length);else if(e=(l=s.ownerDocument||document)&&l.defaultView||window,e.getSelection){e=e.getSelection();var n=s.textContent.length,u=Math.min(i.start,n);i=i.end===void 0?u:Math.min(i.end,n),!e.extend&&u>i&&(n=i,i=u,u=n),n=Sr(s,u);var d=Sr(s,i);n&&d&&(e.rangeCount!==1||e.anchorNode!==n.node||e.anchorOffset!==n.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(l=l.createRange(),l.setStart(n.node,n.offset),e.removeAllRanges(),u>i?(e.addRange(l),e.extend(d.node,d.offset)):(l.setEnd(d.node,d.offset),e.addRange(l)))}}for(l=[],e=s;e=e.parentNode;)e.nodeType===1&&l.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<l.length;s++)e=l[s],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ug=f&&"documentMode"in document&&11>=document.documentMode,Vi=null,so=null,Bt=null,io=!1;function xr(e,l,s){var i=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;io||Vi==null||Vi!==ie(i)||(i=Vi,"selectionStart"in i&&lo(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Bt&&qt(Bt,i)||(Bt=i,i=Mn(so,"onSelect"),0<i.length&&(l=new $a("onSelect","select",null,l,s),e.push({event:l,listeners:i}),l.target=Vi)))}function qn(e,l){var s={};return s[e.toLowerCase()]=l.toLowerCase(),s["Webkit"+e]="webkit"+l,s["Moz"+e]="moz"+l,s}var Ki={animationend:qn("Animation","AnimationEnd"),animationiteration:qn("Animation","AnimationIteration"),animationstart:qn("Animation","AnimationStart"),transitionend:qn("Transition","TransitionEnd")},to={},yr={};f&&(yr=document.createElement("div").style,"AnimationEvent"in window||(delete Ki.animationend.animation,delete Ki.animationiteration.animation,delete Ki.animationstart.animation),"TransitionEvent"in window||delete Ki.transitionend.transition);function Bn(e){if(to[e])return to[e];if(!Ki[e])return e;var l=Ki[e],s;for(s in l)if(l.hasOwnProperty(s)&&s in yr)return to[e]=l[s];return e}var Er=Bn("animationend"),kr=Bn("animationiteration"),br=Bn("animationstart"),Cr=Bn("transitionend"),Lr=new Map,Ir="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qs(e,l){Lr.set(e,l),p(l,[e])}for(var no=0;no<Ir.length;no++){var ao=Ir[no],qg=ao.toLowerCase(),Bg=ao[0].toUpperCase()+ao.slice(1);Qs(qg,"on"+Bg)}Qs(Er,"onAnimationEnd"),Qs(kr,"onAnimationIteration"),Qs(br,"onAnimationStart"),Qs("dblclick","onDoubleClick"),Qs("focusin","onFocus"),Qs("focusout","onBlur"),Qs(Cr,"onTransitionEnd"),g("onMouseEnter",["mouseout","mouseover"]),g("onMouseLeave",["mouseout","mouseover"]),g("onPointerEnter",["pointerout","pointerover"]),g("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var At="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ag=new Set("cancel close invalid load scroll toggle".split(" ").concat(At));function Gr(e,l,s){var i=e.type||"unknown-event";e.currentTarget=s,Ee(i,l,void 0,e),e.currentTarget=null}function Pr(e,l){l=(l&4)!==0;for(var s=0;s<e.length;s++){var i=e[s],n=i.event;i=i.listeners;e:{var u=void 0;if(l)for(var d=i.length-1;0<=d;d--){var h=i[d],v=h.instance,z=h.currentTarget;if(h=h.listener,v!==u&&n.isPropagationStopped())break e;Gr(n,h,z),u=v}else for(d=0;d<i.length;d++){if(h=i[d],v=h.instance,z=h.currentTarget,h=h.listener,v!==u&&n.isPropagationStopped())break e;Gr(n,h,z),u=v}}}if(M)throw e=T,M=!1,T=null,e}function Ke(e,l){var s=l[mo];s===void 0&&(s=l[mo]=new Set);var i=e+"__bubble";s.has(i)||(Jr(l,e,2,!1),s.add(i))}function oo(e,l,s){var i=0;l&&(i|=4),Jr(s,e,i,l)}var An="_reactListening"+Math.random().toString(36).slice(2);function Mt(e){if(!e[An]){e[An]=!0,r.forEach(function(s){s!=="selectionchange"&&(Ag.has(s)||oo(s,!1,e),oo(s,!0,e))});var l=e.nodeType===9?e:e.ownerDocument;l===null||l[An]||(l[An]=!0,oo("selectionchange",!1,l))}}function Jr(e,l,s,i){switch(lr(l)){case 1:var n=Yd;break;case 4:n=Xd;break;default:n=Fa}s=n.bind(null,l,s,e),n=void 0,!yt||l!=="touchstart"&&l!=="touchmove"&&l!=="wheel"||(n=!0),i?n!==void 0?e.addEventListener(l,s,{capture:!0,passive:n}):e.addEventListener(l,s,!0):n!==void 0?e.addEventListener(l,s,{passive:n}):e.addEventListener(l,s,!1)}function uo(e,l,s,i,n){var u=i;if((l&1)===0&&(l&2)===0&&i!==null)e:for(;;){if(i===null)return;var d=i.tag;if(d===3||d===4){var h=i.stateNode.containerInfo;if(h===n||h.nodeType===8&&h.parentNode===n)break;if(d===4)for(d=i.return;d!==null;){var v=d.tag;if((v===3||v===4)&&(v=d.stateNode.containerInfo,v===n||v.nodeType===8&&v.parentNode===n))return;d=d.return}for(;h!==null;){if(d=vi(h),d===null)return;if(v=d.tag,v===5||v===6){i=u=d;continue e}h=h.parentNode}}i=i.return}ji(function(){var z=u,O=vt(s),F=[];e:{var R=Lr.get(e);if(R!==void 0){var Z=$a,le=e;switch(e){case"keypress":if(Pn(s)===0)break e;case"keydown":case"keyup":Z=gg;break;case"focusin":le="focus",Z=Qa;break;case"focusout":le="blur",Z=Qa;break;case"beforeblur":case"afterblur":Z=Qa;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=tr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=lg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=hg;break;case Er:case kr:case br:Z=tg;break;case Cr:Z=jg;break;case"scroll":Z=Zd;break;case"wheel":Z=vg;break;case"copy":case"cut":case"paste":Z=ag;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=ar}var se=(l&4)!==0,il=!se&&e==="scroll",I=se?R!==null?R+"Capture":null:R;se=[];for(var x=z,P;x!==null;){P=x;var W=P.stateNode;if(P.tag===5&&W!==null&&(P=W,I!==null&&(W=Rs(x,I),W!=null&&se.push(Ht(x,W,P)))),il)break;x=x.return}0<se.length&&(R=new Z(R,le,null,s,O),F.push({event:R,listeners:se}))}}if((l&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",Z=e==="mouseout"||e==="pointerout",R&&s!==Hi&&(le=s.relatedTarget||s.fromElement)&&(vi(le)||le[Is]))break e;if((Z||R)&&(R=O.window===O?O:(R=O.ownerDocument)?R.defaultView||R.parentWindow:window,Z?(le=s.relatedTarget||s.toElement,Z=z,le=le?vi(le):null,le!==null&&(il=Y(le),le!==il||le.tag!==5&&le.tag!==6)&&(le=null)):(Z=null,le=z),Z!==le)){if(se=tr,W="onMouseLeave",I="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(se=ar,W="onPointerLeave",I="onPointerEnter",x="pointer"),il=Z==null?R:Xi(Z),P=le==null?R:Xi(le),R=new se(W,x+"leave",Z,s,O),R.target=il,R.relatedTarget=P,W=null,vi(O)===z&&(se=new se(I,x+"enter",le,s,O),se.target=P,se.relatedTarget=il,W=se),il=W,Z&&le)l:{for(se=Z,I=le,x=0,P=se;P;P=Qi(P))x++;for(P=0,W=I;W;W=Qi(W))P++;for(;0<x-P;)se=Qi(se),x--;for(;0<P-x;)I=Qi(I),P--;for(;x--;){if(se===I||I!==null&&se===I.alternate)break l;se=Qi(se),I=Qi(I)}se=null}else se=null;Z!==null&&zr(F,R,Z,se,!1),le!==null&&il!==null&&zr(F,il,le,se,!0)}}e:{if(R=z?Xi(z):window,Z=R.nodeName&&R.nodeName.toLowerCase(),Z==="select"||Z==="input"&&R.type==="file")var te=Cg;else if(dr(R))if(fr)te=Pg;else{te=Ig;var _e=Lg}else(Z=R.nodeName)&&Z.toLowerCase()==="input"&&(R.type==="checkbox"||R.type==="radio")&&(te=Gg);if(te&&(te=te(e,z))){gr(F,te,s,O);break e}_e&&_e(e,R,z),e==="focusout"&&(_e=R._wrapperState)&&_e.controlled&&R.type==="number"&&hi(R,"number",R.value)}switch(_e=z?Xi(z):window,e){case"focusin":(dr(_e)||_e.contentEditable==="true")&&(Vi=_e,so=z,Bt=null);break;case"focusout":Bt=so=Vi=null;break;case"mousedown":io=!0;break;case"contextmenu":case"mouseup":case"dragend":io=!1,xr(F,s,O);break;case"selectionchange":if(Ug)break;case"keydown":case"keyup":xr(F,s,O)}var je;if(Xa)e:{switch(e){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else $i?cr(e,s)&&(ye="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(ye="onCompositionStart");ye&&(or&&s.locale!=="ko"&&($i||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&$i&&(je=sr()):(Ks=O,Wa="value"in Ks?Ks.value:Ks.textContent,$i=!0)),_e=Mn(z,ye),0<_e.length&&(ye=new nr(ye,e,null,s,O),F.push({event:ye,listeners:_e}),je?ye.data=je:(je=pr(s),je!==null&&(ye.data=je)))),(je=xg?yg(e,s):Eg(e,s))&&(z=Mn(z,"onBeforeInput"),0<z.length&&(O=new nr("onBeforeInput","beforeinput",null,s,O),F.push({event:O,listeners:z}),O.data=je))}Pr(F,l)})}function Ht(e,l,s){return{instance:e,listener:l,currentTarget:s}}function Mn(e,l){for(var s=l+"Capture",i=[];e!==null;){var n=e,u=n.stateNode;n.tag===5&&u!==null&&(n=u,u=Rs(e,s),u!=null&&i.unshift(Ht(e,u,n)),u=Rs(e,l),u!=null&&i.push(Ht(e,u,n))),e=e.return}return i}function Qi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zr(e,l,s,i,n){for(var u=l._reactName,d=[];s!==null&&s!==i;){var h=s,v=h.alternate,z=h.stateNode;if(v!==null&&v===i)break;h.tag===5&&z!==null&&(h=z,n?(v=Rs(s,u),v!=null&&d.unshift(Ht(s,v,h))):n||(v=Rs(s,u),v!=null&&d.push(Ht(s,v,h)))),s=s.return}d.length!==0&&e.push({event:l,listeners:d})}var Mg=/\r\n?/g,Hg=/\u0000|\uFFFD/g;function Ur(e){return(typeof e=="string"?e:""+e).replace(Mg,`
`).replace(Hg,"")}function Hn(e,l,s){if(l=Ur(l),Ur(e)!==l&&s)throw Error(o(425))}function Tn(){}var ro=null,co=null;function po(e,l){return e==="textarea"||e==="noscript"||typeof l.children=="string"||typeof l.children=="number"||typeof l.dangerouslySetInnerHTML=="object"&&l.dangerouslySetInnerHTML!==null&&l.dangerouslySetInnerHTML.__html!=null}var go=typeof setTimeout=="function"?setTimeout:void 0,Tg=typeof clearTimeout=="function"?clearTimeout:void 0,qr=typeof Promise=="function"?Promise:void 0,Rg=typeof queueMicrotask=="function"?queueMicrotask:typeof qr<"u"?function(e){return qr.resolve(null).then(e).catch(Og)}:go;function Og(e){setTimeout(function(){throw e})}function fo(e,l){var s=l,i=0;do{var n=s.nextSibling;if(e.removeChild(s),n&&n.nodeType===8)if(s=n.data,s==="/$"){if(i===0){e.removeChild(n),It(l);return}i--}else s!=="$"&&s!=="$?"&&s!=="$!"||i++;s=n}while(s);It(l)}function Ys(e){for(;e!=null;e=e.nextSibling){var l=e.nodeType;if(l===1||l===3)break;if(l===8){if(l=e.data,l==="$"||l==="$!"||l==="$?")break;if(l==="/$")return null}}return e}function Br(e){e=e.previousSibling;for(var l=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(l===0)return e;l--}else s==="/$"&&l++}e=e.previousSibling}return null}var Yi=Math.random().toString(36).slice(2),fs="__reactFiber$"+Yi,Tt="__reactProps$"+Yi,Is="__reactContainer$"+Yi,mo="__reactEvents$"+Yi,Ng="__reactListeners$"+Yi,Fg="__reactHandles$"+Yi;function vi(e){var l=e[fs];if(l)return l;for(var s=e.parentNode;s;){if(l=s[Is]||s[fs]){if(s=l.alternate,l.child!==null||s!==null&&s.child!==null)for(e=Br(e);e!==null;){if(s=e[fs])return s;e=Br(e)}return l}e=s,s=e.parentNode}return null}function Rt(e){return e=e[fs]||e[Is],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function Rn(e){return e[Tt]||null}var ho=[],Zi=-1;function Xs(e){return{current:e}}function Qe(e){0>Zi||(e.current=ho[Zi],ho[Zi]=null,Zi--)}function $e(e,l){Zi++,ho[Zi]=e.current,e.current=l}var Zs={},_l=Xs(Zs),Ll=Xs(!1),wi=Zs;function et(e,l){var s=e.type.contextTypes;if(!s)return Zs;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===l)return i.__reactInternalMemoizedMaskedChildContext;var n={},u;for(u in s)n[u]=l[u];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=n),n}function Il(e){return e=e.childContextTypes,e!=null}function On(){Qe(Ll),Qe(_l)}function Ar(e,l,s){if(_l.current!==Zs)throw Error(o(168));$e(_l,l),$e(Ll,s)}function Mr(e,l,s){var i=e.stateNode;if(l=l.childContextTypes,typeof i.getChildContext!="function")return s;i=i.getChildContext();for(var n in i)if(!(n in l))throw Error(o(108,Le(e)||"Unknown",n));return V({},s,i)}function Nn(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zs,wi=_l.current,$e(_l,e),$e(Ll,Ll.current),!0}function Hr(e,l,s){var i=e.stateNode;if(!i)throw Error(o(169));s?(e=Mr(e,l,wi),i.__reactInternalMemoizedMergedChildContext=e,Qe(Ll),Qe(_l),$e(_l,e)):Qe(Ll),$e(Ll,s)}var Gs=null,Fn=!1,_o=!1;function Tr(e){Gs===null?Gs=[e]:Gs.push(e)}function Dg(e){Fn=!0,Tr(e)}function ei(){if(!_o&&Gs!==null){_o=!0;var e=0,l=De;try{var s=Gs;for(De=1;e<s.length;e++){var i=s[e];do i=i(!0);while(i!==null)}Gs=null,Fn=!1}catch(n){throw Gs!==null&&(Gs=Gs.slice(e+1)),Re(Cs,ei),n}finally{De=l,_o=!1}}return null}var lt=[],st=0,Dn=null,Wn=0,Nl=[],Fl=0,xi=null,Ps=1,Js="";function yi(e,l){lt[st++]=Wn,lt[st++]=Dn,Dn=e,Wn=l}function Rr(e,l,s){Nl[Fl++]=Ps,Nl[Fl++]=Js,Nl[Fl++]=xi,xi=e;var i=Ps;e=Js;var n=32-ml(i)-1;i&=~(1<<n),s+=1;var u=32-ml(l)+n;if(30<u){var d=n-n%5;u=(i&(1<<d)-1).toString(32),i>>=d,n-=d,Ps=1<<32-ml(l)+n|s<<n|i,Js=u+e}else Ps=1<<u|s<<n|i,Js=e}function jo(e){e.return!==null&&(yi(e,1),Rr(e,1,0))}function So(e){for(;e===Dn;)Dn=lt[--st],lt[st]=null,Wn=lt[--st],lt[st]=null;for(;e===xi;)xi=Nl[--Fl],Nl[Fl]=null,Js=Nl[--Fl],Nl[Fl]=null,Ps=Nl[--Fl],Nl[Fl]=null}var Bl=null,Al=null,Ye=!1,ns=null;function Or(e,l){var s=Vl(5,null,null,0);s.elementType="DELETED",s.stateNode=l,s.return=e,l=e.deletions,l===null?(e.deletions=[s],e.flags|=16):l.push(s)}function Nr(e,l){switch(e.tag){case 5:var s=e.type;return l=l.nodeType!==1||s.toLowerCase()!==l.nodeName.toLowerCase()?null:l,l!==null?(e.stateNode=l,Bl=e,Al=Ys(l.firstChild),!0):!1;case 6:return l=e.pendingProps===""||l.nodeType!==3?null:l,l!==null?(e.stateNode=l,Bl=e,Al=null,!0):!1;case 13:return l=l.nodeType!==8?null:l,l!==null?(s=xi!==null?{id:Ps,overflow:Js}:null,e.memoizedState={dehydrated:l,treeContext:s,retryLane:1073741824},s=Vl(18,null,null,0),s.stateNode=l,s.return=e,e.child=s,Bl=e,Al=null,!0):!1;default:return!1}}function vo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wo(e){if(Ye){var l=Al;if(l){var s=l;if(!Nr(e,l)){if(vo(e))throw Error(o(418));l=Ys(s.nextSibling);var i=Bl;l&&Nr(e,l)?Or(i,s):(e.flags=e.flags&-4097|2,Ye=!1,Bl=e)}}else{if(vo(e))throw Error(o(418));e.flags=e.flags&-4097|2,Ye=!1,Bl=e}}}function Fr(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Bl=e}function $n(e){if(e!==Bl)return!1;if(!Ye)return Fr(e),Ye=!0,!1;var l;if((l=e.tag!==3)&&!(l=e.tag!==5)&&(l=e.type,l=l!=="head"&&l!=="body"&&!po(e.type,e.memoizedProps)),l&&(l=Al)){if(vo(e))throw Dr(),Error(o(418));for(;l;)Or(e,l),l=Ys(l.nextSibling)}if(Fr(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,l=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"){if(l===0){Al=Ys(e.nextSibling);break e}l--}else s!=="$"&&s!=="$!"&&s!=="$?"||l++}e=e.nextSibling}Al=null}}else Al=Bl?Ys(e.stateNode.nextSibling):null;return!0}function Dr(){for(var e=Al;e;)e=Ys(e.nextSibling)}function it(){Al=Bl=null,Ye=!1}function xo(e){ns===null?ns=[e]:ns.push(e)}var Wg=pe.ReactCurrentBatchConfig;function Ot(e,l,s){if(e=s.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(o(309));var i=s.stateNode}if(!i)throw Error(o(147,e));var n=i,u=""+e;return l!==null&&l.ref!==null&&typeof l.ref=="function"&&l.ref._stringRef===u?l.ref:(l=function(d){var h=n.refs;d===null?delete h[u]:h[u]=d},l._stringRef=u,l)}if(typeof e!="string")throw Error(o(284));if(!s._owner)throw Error(o(290,e))}return e}function Vn(e,l){throw e=Object.prototype.toString.call(l),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":e))}function Wr(e){var l=e._init;return l(e._payload)}function $r(e){function l(I,x){if(e){var P=I.deletions;P===null?(I.deletions=[x],I.flags|=16):P.push(x)}}function s(I,x){if(!e)return null;for(;x!==null;)l(I,x),x=x.sibling;return null}function i(I,x){for(I=new Map;x!==null;)x.key!==null?I.set(x.key,x):I.set(x.index,x),x=x.sibling;return I}function n(I,x){return I=ui(I,x),I.index=0,I.sibling=null,I}function u(I,x,P){return I.index=P,e?(P=I.alternate,P!==null?(P=P.index,P<x?(I.flags|=2,x):P):(I.flags|=2,x)):(I.flags|=1048576,x)}function d(I){return e&&I.alternate===null&&(I.flags|=2),I}function h(I,x,P,W){return x===null||x.tag!==6?(x=gu(P,I.mode,W),x.return=I,x):(x=n(x,P),x.return=I,x)}function v(I,x,P,W){var te=P.type;return te===Ce?O(I,x,P.props.children,W,P.key):x!==null&&(x.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===Oe&&Wr(te)===x.type)?(W=n(x,P.props),W.ref=Ot(I,x,P),W.return=I,W):(W=ja(P.type,P.key,P.props,null,I.mode,W),W.ref=Ot(I,x,P),W.return=I,W)}function z(I,x,P,W){return x===null||x.tag!==4||x.stateNode.containerInfo!==P.containerInfo||x.stateNode.implementation!==P.implementation?(x=fu(P,I.mode,W),x.return=I,x):(x=n(x,P.children||[]),x.return=I,x)}function O(I,x,P,W,te){return x===null||x.tag!==7?(x=Pi(P,I.mode,W,te),x.return=I,x):(x=n(x,P),x.return=I,x)}function F(I,x,P){if(typeof x=="string"&&x!==""||typeof x=="number")return x=gu(""+x,I.mode,P),x.return=I,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ue:return P=ja(x.type,x.key,x.props,null,I.mode,P),P.ref=Ot(I,null,x),P.return=I,P;case ve:return x=fu(x,I.mode,P),x.return=I,x;case Oe:var W=x._init;return F(I,W(x._payload),P)}if(ps(x)||Q(x))return x=Pi(x,I.mode,P,null),x.return=I,x;Vn(I,x)}return null}function R(I,x,P,W){var te=x!==null?x.key:null;if(typeof P=="string"&&P!==""||typeof P=="number")return te!==null?null:h(I,x,""+P,W);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case ue:return P.key===te?v(I,x,P,W):null;case ve:return P.key===te?z(I,x,P,W):null;case Oe:return te=P._init,R(I,x,te(P._payload),W)}if(ps(P)||Q(P))return te!==null?null:O(I,x,P,W,null);Vn(I,P)}return null}function Z(I,x,P,W,te){if(typeof W=="string"&&W!==""||typeof W=="number")return I=I.get(P)||null,h(x,I,""+W,te);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case ue:return I=I.get(W.key===null?P:W.key)||null,v(x,I,W,te);case ve:return I=I.get(W.key===null?P:W.key)||null,z(x,I,W,te);case Oe:var _e=W._init;return Z(I,x,P,_e(W._payload),te)}if(ps(W)||Q(W))return I=I.get(P)||null,O(x,I,W,te,null);Vn(x,W)}return null}function le(I,x,P,W){for(var te=null,_e=null,je=x,ye=x=0,pl=null;je!==null&&ye<P.length;ye++){je.index>ye?(pl=je,je=null):pl=je.sibling;var Te=R(I,je,P[ye],W);if(Te===null){je===null&&(je=pl);break}e&&je&&Te.alternate===null&&l(I,je),x=u(Te,x,ye),_e===null?te=Te:_e.sibling=Te,_e=Te,je=pl}if(ye===P.length)return s(I,je),Ye&&yi(I,ye),te;if(je===null){for(;ye<P.length;ye++)je=F(I,P[ye],W),je!==null&&(x=u(je,x,ye),_e===null?te=je:_e.sibling=je,_e=je);return Ye&&yi(I,ye),te}for(je=i(I,je);ye<P.length;ye++)pl=Z(je,I,ye,P[ye],W),pl!==null&&(e&&pl.alternate!==null&&je.delete(pl.key===null?ye:pl.key),x=u(pl,x,ye),_e===null?te=pl:_e.sibling=pl,_e=pl);return e&&je.forEach(function(ri){return l(I,ri)}),Ye&&yi(I,ye),te}function se(I,x,P,W){var te=Q(P);if(typeof te!="function")throw Error(o(150));if(P=te.call(P),P==null)throw Error(o(151));for(var _e=te=null,je=x,ye=x=0,pl=null,Te=P.next();je!==null&&!Te.done;ye++,Te=P.next()){je.index>ye?(pl=je,je=null):pl=je.sibling;var ri=R(I,je,Te.value,W);if(ri===null){je===null&&(je=pl);break}e&&je&&ri.alternate===null&&l(I,je),x=u(ri,x,ye),_e===null?te=ri:_e.sibling=ri,_e=ri,je=pl}if(Te.done)return s(I,je),Ye&&yi(I,ye),te;if(je===null){for(;!Te.done;ye++,Te=P.next())Te=F(I,Te.value,W),Te!==null&&(x=u(Te,x,ye),_e===null?te=Te:_e.sibling=Te,_e=Te);return Ye&&yi(I,ye),te}for(je=i(I,je);!Te.done;ye++,Te=P.next())Te=Z(je,I,ye,Te.value,W),Te!==null&&(e&&Te.alternate!==null&&je.delete(Te.key===null?ye:Te.key),x=u(Te,x,ye),_e===null?te=Te:_e.sibling=Te,_e=Te);return e&&je.forEach(function(bf){return l(I,bf)}),Ye&&yi(I,ye),te}function il(I,x,P,W){if(typeof P=="object"&&P!==null&&P.type===Ce&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case ue:e:{for(var te=P.key,_e=x;_e!==null;){if(_e.key===te){if(te=P.type,te===Ce){if(_e.tag===7){s(I,_e.sibling),x=n(_e,P.props.children),x.return=I,I=x;break e}}else if(_e.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===Oe&&Wr(te)===_e.type){s(I,_e.sibling),x=n(_e,P.props),x.ref=Ot(I,_e,P),x.return=I,I=x;break e}s(I,_e);break}else l(I,_e);_e=_e.sibling}P.type===Ce?(x=Pi(P.props.children,I.mode,W,P.key),x.return=I,I=x):(W=ja(P.type,P.key,P.props,null,I.mode,W),W.ref=Ot(I,x,P),W.return=I,I=W)}return d(I);case ve:e:{for(_e=P.key;x!==null;){if(x.key===_e)if(x.tag===4&&x.stateNode.containerInfo===P.containerInfo&&x.stateNode.implementation===P.implementation){s(I,x.sibling),x=n(x,P.children||[]),x.return=I,I=x;break e}else{s(I,x);break}else l(I,x);x=x.sibling}x=fu(P,I.mode,W),x.return=I,I=x}return d(I);case Oe:return _e=P._init,il(I,x,_e(P._payload),W)}if(ps(P))return le(I,x,P,W);if(Q(P))return se(I,x,P,W);Vn(I,P)}return typeof P=="string"&&P!==""||typeof P=="number"?(P=""+P,x!==null&&x.tag===6?(s(I,x.sibling),x=n(x,P),x.return=I,I=x):(s(I,x),x=gu(P,I.mode,W),x.return=I,I=x),d(I)):s(I,x)}return il}var tt=$r(!0),Vr=$r(!1),Kn=Xs(null),Qn=null,nt=null,yo=null;function Eo(){yo=nt=Qn=null}function ko(e){var l=Kn.current;Qe(Kn),e._currentValue=l}function bo(e,l,s){for(;e!==null;){var i=e.alternate;if((e.childLanes&l)!==l?(e.childLanes|=l,i!==null&&(i.childLanes|=l)):i!==null&&(i.childLanes&l)!==l&&(i.childLanes|=l),e===s)break;e=e.return}}function at(e,l){Qn=e,yo=nt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&l)!==0&&(Gl=!0),e.firstContext=null)}function Dl(e){var l=e._currentValue;if(yo!==e)if(e={context:e,memoizedValue:l,next:null},nt===null){if(Qn===null)throw Error(o(308));nt=e,Qn.dependencies={lanes:0,firstContext:e}}else nt=nt.next=e;return l}var Ei=null;function Co(e){Ei===null?Ei=[e]:Ei.push(e)}function Kr(e,l,s,i){var n=l.interleaved;return n===null?(s.next=s,Co(l)):(s.next=n.next,n.next=s),l.interleaved=s,zs(e,i)}function zs(e,l){e.lanes|=l;var s=e.alternate;for(s!==null&&(s.lanes|=l),s=e,e=e.return;e!==null;)e.childLanes|=l,s=e.alternate,s!==null&&(s.childLanes|=l),s=e,e=e.return;return s.tag===3?s.stateNode:null}var li=!1;function Lo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qr(e,l){e=e.updateQueue,l.updateQueue===e&&(l.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Us(e,l){return{eventTime:e,lane:l,tag:0,payload:null,callback:null,next:null}}function si(e,l,s){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(He&2)!==0){var n=i.pending;return n===null?l.next=l:(l.next=n.next,n.next=l),i.pending=l,zs(e,s)}return n=i.interleaved,n===null?(l.next=l,Co(i)):(l.next=n.next,n.next=l),i.interleaved=l,zs(e,s)}function Yn(e,l,s){if(l=l.updateQueue,l!==null&&(l=l.shared,(s&4194240)!==0)){var i=l.lanes;i&=e.pendingLanes,s|=i,l.lanes=s,Ra(e,s)}}function Yr(e,l){var s=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,s===i)){var n=null,u=null;if(s=s.firstBaseUpdate,s!==null){do{var d={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};u===null?n=u=d:u=u.next=d,s=s.next}while(s!==null);u===null?n=u=l:u=u.next=l}else n=u=l;s={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:i.shared,effects:i.effects},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=l:e.next=l,s.lastBaseUpdate=l}function Xn(e,l,s,i){var n=e.updateQueue;li=!1;var u=n.firstBaseUpdate,d=n.lastBaseUpdate,h=n.shared.pending;if(h!==null){n.shared.pending=null;var v=h,z=v.next;v.next=null,d===null?u=z:d.next=z,d=v;var O=e.alternate;O!==null&&(O=O.updateQueue,h=O.lastBaseUpdate,h!==d&&(h===null?O.firstBaseUpdate=z:h.next=z,O.lastBaseUpdate=v))}if(u!==null){var F=n.baseState;d=0,O=z=v=null,h=u;do{var R=h.lane,Z=h.eventTime;if((i&R)===R){O!==null&&(O=O.next={eventTime:Z,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var le=e,se=h;switch(R=l,Z=s,se.tag){case 1:if(le=se.payload,typeof le=="function"){F=le.call(Z,F,R);break e}F=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=se.payload,R=typeof le=="function"?le.call(Z,F,R):le,R==null)break e;F=V({},F,R);break e;case 2:li=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,R=n.effects,R===null?n.effects=[h]:R.push(h))}else Z={eventTime:Z,lane:R,tag:h.tag,payload:h.payload,callback:h.callback,next:null},O===null?(z=O=Z,v=F):O=O.next=Z,d|=R;if(h=h.next,h===null){if(h=n.shared.pending,h===null)break;R=h,h=R.next,R.next=null,n.lastBaseUpdate=R,n.shared.pending=null}}while(!0);if(O===null&&(v=F),n.baseState=v,n.firstBaseUpdate=z,n.lastBaseUpdate=O,l=n.shared.interleaved,l!==null){n=l;do d|=n.lane,n=n.next;while(n!==l)}else u===null&&(n.shared.lanes=0);Ci|=d,e.lanes=d,e.memoizedState=F}}function Xr(e,l,s){if(e=l.effects,l.effects=null,e!==null)for(l=0;l<e.length;l++){var i=e[l],n=i.callback;if(n!==null){if(i.callback=null,i=s,typeof n!="function")throw Error(o(191,n));n.call(i)}}}var Nt={},ms=Xs(Nt),Ft=Xs(Nt),Dt=Xs(Nt);function ki(e){if(e===Nt)throw Error(o(174));return e}function Io(e,l){switch($e(Dt,l),$e(Ft,e),$e(ms,Nt),e=l.nodeType,e){case 9:case 11:l=(l=l.documentElement)?l.namespaceURI:qi(null,"");break;default:e=e===8?l.parentNode:l,l=e.namespaceURI||null,e=e.tagName,l=qi(l,e)}Qe(ms),$e(ms,l)}function ot(){Qe(ms),Qe(Ft),Qe(Dt)}function Zr(e){ki(Dt.current);var l=ki(ms.current),s=qi(l,e.type);l!==s&&($e(Ft,e),$e(ms,s))}function Go(e){Ft.current===e&&(Qe(ms),Qe(Ft))}var Ze=Xs(0);function Zn(e){for(var l=e;l!==null;){if(l.tag===13){var s=l.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return l}else if(l.tag===19&&l.memoizedProps.revealOrder!==void 0){if((l.flags&128)!==0)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break;for(;l.sibling===null;){if(l.return===null||l.return===e)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var Po=[];function Jo(){for(var e=0;e<Po.length;e++)Po[e]._workInProgressVersionPrimary=null;Po.length=0}var ea=pe.ReactCurrentDispatcher,zo=pe.ReactCurrentBatchConfig,bi=0,el=null,ol=null,rl=null,la=!1,Wt=!1,$t=0,$g=0;function jl(){throw Error(o(321))}function Uo(e,l){if(l===null)return!1;for(var s=0;s<l.length&&s<e.length;s++)if(!ts(e[s],l[s]))return!1;return!0}function qo(e,l,s,i,n,u){if(bi=u,el=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,ea.current=e===null||e.memoizedState===null?Yg:Xg,e=s(i,n),Wt){u=0;do{if(Wt=!1,$t=0,25<=u)throw Error(o(301));u+=1,rl=ol=null,l.updateQueue=null,ea.current=Zg,e=s(i,n)}while(Wt)}if(ea.current=ta,l=ol!==null&&ol.next!==null,bi=0,rl=ol=el=null,la=!1,l)throw Error(o(300));return e}function Bo(){var e=$t!==0;return $t=0,e}function hs(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rl===null?el.memoizedState=rl=e:rl=rl.next=e,rl}function Wl(){if(ol===null){var e=el.alternate;e=e!==null?e.memoizedState:null}else e=ol.next;var l=rl===null?el.memoizedState:rl.next;if(l!==null)rl=l,ol=e;else{if(e===null)throw Error(o(310));ol=e,e={memoizedState:ol.memoizedState,baseState:ol.baseState,baseQueue:ol.baseQueue,queue:ol.queue,next:null},rl===null?el.memoizedState=rl=e:rl=rl.next=e}return rl}function Vt(e,l){return typeof l=="function"?l(e):l}function Ao(e){var l=Wl(),s=l.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=e;var i=ol,n=i.baseQueue,u=s.pending;if(u!==null){if(n!==null){var d=n.next;n.next=u.next,u.next=d}i.baseQueue=n=u,s.pending=null}if(n!==null){u=n.next,i=i.baseState;var h=d=null,v=null,z=u;do{var O=z.lane;if((bi&O)===O)v!==null&&(v=v.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),i=z.hasEagerState?z.eagerState:e(i,z.action);else{var F={lane:O,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};v===null?(h=v=F,d=i):v=v.next=F,el.lanes|=O,Ci|=O}z=z.next}while(z!==null&&z!==u);v===null?d=i:v.next=h,ts(i,l.memoizedState)||(Gl=!0),l.memoizedState=i,l.baseState=d,l.baseQueue=v,s.lastRenderedState=i}if(e=s.interleaved,e!==null){n=e;do u=n.lane,el.lanes|=u,Ci|=u,n=n.next;while(n!==e)}else n===null&&(s.lanes=0);return[l.memoizedState,s.dispatch]}function Mo(e){var l=Wl(),s=l.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=e;var i=s.dispatch,n=s.pending,u=l.memoizedState;if(n!==null){s.pending=null;var d=n=n.next;do u=e(u,d.action),d=d.next;while(d!==n);ts(u,l.memoizedState)||(Gl=!0),l.memoizedState=u,l.baseQueue===null&&(l.baseState=u),s.lastRenderedState=u}return[u,i]}function ec(){}function lc(e,l){var s=el,i=Wl(),n=l(),u=!ts(i.memoizedState,n);if(u&&(i.memoizedState=n,Gl=!0),i=i.queue,Ho(tc.bind(null,s,i,e),[e]),i.getSnapshot!==l||u||rl!==null&&rl.memoizedState.tag&1){if(s.flags|=2048,Kt(9,ic.bind(null,s,i,n,l),void 0,null),cl===null)throw Error(o(349));(bi&30)!==0||sc(s,l,n)}return n}function sc(e,l,s){e.flags|=16384,e={getSnapshot:l,value:s},l=el.updateQueue,l===null?(l={lastEffect:null,stores:null},el.updateQueue=l,l.stores=[e]):(s=l.stores,s===null?l.stores=[e]:s.push(e))}function ic(e,l,s,i){l.value=s,l.getSnapshot=i,nc(l)&&ac(e)}function tc(e,l,s){return s(function(){nc(l)&&ac(e)})}function nc(e){var l=e.getSnapshot;e=e.value;try{var s=l();return!ts(e,s)}catch{return!0}}function ac(e){var l=zs(e,1);l!==null&&rs(l,e,1,-1)}function oc(e){var l=hs();return typeof e=="function"&&(e=e()),l.memoizedState=l.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vt,lastRenderedState:e},l.queue=e,e=e.dispatch=Qg.bind(null,el,e),[l.memoizedState,e]}function Kt(e,l,s,i){return e={tag:e,create:l,destroy:s,deps:i,next:null},l=el.updateQueue,l===null?(l={lastEffect:null,stores:null},el.updateQueue=l,l.lastEffect=e.next=e):(s=l.lastEffect,s===null?l.lastEffect=e.next=e:(i=s.next,s.next=e,e.next=i,l.lastEffect=e)),e}function uc(){return Wl().memoizedState}function sa(e,l,s,i){var n=hs();el.flags|=e,n.memoizedState=Kt(1|l,s,void 0,i===void 0?null:i)}function ia(e,l,s,i){var n=Wl();i=i===void 0?null:i;var u=void 0;if(ol!==null){var d=ol.memoizedState;if(u=d.destroy,i!==null&&Uo(i,d.deps)){n.memoizedState=Kt(l,s,u,i);return}}el.flags|=e,n.memoizedState=Kt(1|l,s,u,i)}function rc(e,l){return sa(8390656,8,e,l)}function Ho(e,l){return ia(2048,8,e,l)}function cc(e,l){return ia(4,2,e,l)}function pc(e,l){return ia(4,4,e,l)}function dc(e,l){if(typeof l=="function")return e=e(),l(e),function(){l(null)};if(l!=null)return e=e(),l.current=e,function(){l.current=null}}function gc(e,l,s){return s=s!=null?s.concat([e]):null,ia(4,4,dc.bind(null,l,e),s)}function To(){}function fc(e,l){var s=Wl();l=l===void 0?null:l;var i=s.memoizedState;return i!==null&&l!==null&&Uo(l,i[1])?i[0]:(s.memoizedState=[e,l],e)}function mc(e,l){var s=Wl();l=l===void 0?null:l;var i=s.memoizedState;return i!==null&&l!==null&&Uo(l,i[1])?i[0]:(e=e(),s.memoizedState=[e,l],e)}function hc(e,l,s){return(bi&21)===0?(e.baseState&&(e.baseState=!1,Gl=!0),e.memoizedState=s):(ts(s,l)||(s=kn(),el.lanes|=s,Ci|=s,e.baseState=!0),l)}function Vg(e,l){var s=De;De=s!==0&&4>s?s:4,e(!0);var i=zo.transition;zo.transition={};try{e(!1),l()}finally{De=s,zo.transition=i}}function _c(){return Wl().memoizedState}function Kg(e,l,s){var i=ai(e);if(s={lane:i,action:s,hasEagerState:!1,eagerState:null,next:null},jc(e))Sc(l,s);else if(s=Kr(e,l,s,i),s!==null){var n=kl();rs(s,e,i,n),vc(s,l,i)}}function Qg(e,l,s){var i=ai(e),n={lane:i,action:s,hasEagerState:!1,eagerState:null,next:null};if(jc(e))Sc(l,n);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=l.lastRenderedReducer,u!==null))try{var d=l.lastRenderedState,h=u(d,s);if(n.hasEagerState=!0,n.eagerState=h,ts(h,d)){var v=l.interleaved;v===null?(n.next=n,Co(l)):(n.next=v.next,v.next=n),l.interleaved=n;return}}catch{}finally{}s=Kr(e,l,n,i),s!==null&&(n=kl(),rs(s,e,i,n),vc(s,l,i))}}function jc(e){var l=e.alternate;return e===el||l!==null&&l===el}function Sc(e,l){Wt=la=!0;var s=e.pending;s===null?l.next=l:(l.next=s.next,s.next=l),e.pending=l}function vc(e,l,s){if((s&4194240)!==0){var i=l.lanes;i&=e.pendingLanes,s|=i,l.lanes=s,Ra(e,s)}}var ta={readContext:Dl,useCallback:jl,useContext:jl,useEffect:jl,useImperativeHandle:jl,useInsertionEffect:jl,useLayoutEffect:jl,useMemo:jl,useReducer:jl,useRef:jl,useState:jl,useDebugValue:jl,useDeferredValue:jl,useTransition:jl,useMutableSource:jl,useSyncExternalStore:jl,useId:jl,unstable_isNewReconciler:!1},Yg={readContext:Dl,useCallback:function(e,l){return hs().memoizedState=[e,l===void 0?null:l],e},useContext:Dl,useEffect:rc,useImperativeHandle:function(e,l,s){return s=s!=null?s.concat([e]):null,sa(4194308,4,dc.bind(null,l,e),s)},useLayoutEffect:function(e,l){return sa(4194308,4,e,l)},useInsertionEffect:function(e,l){return sa(4,2,e,l)},useMemo:function(e,l){var s=hs();return l=l===void 0?null:l,e=e(),s.memoizedState=[e,l],e},useReducer:function(e,l,s){var i=hs();return l=s!==void 0?s(l):l,i.memoizedState=i.baseState=l,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=Kg.bind(null,el,e),[i.memoizedState,e]},useRef:function(e){var l=hs();return e={current:e},l.memoizedState=e},useState:oc,useDebugValue:To,useDeferredValue:function(e){return hs().memoizedState=e},useTransition:function(){var e=oc(!1),l=e[0];return e=Vg.bind(null,e[1]),hs().memoizedState=e,[l,e]},useMutableSource:function(){},useSyncExternalStore:function(e,l,s){var i=el,n=hs();if(Ye){if(s===void 0)throw Error(o(407));s=s()}else{if(s=l(),cl===null)throw Error(o(349));(bi&30)!==0||sc(i,l,s)}n.memoizedState=s;var u={value:s,getSnapshot:l};return n.queue=u,rc(tc.bind(null,i,u,e),[e]),i.flags|=2048,Kt(9,ic.bind(null,i,u,s,l),void 0,null),s},useId:function(){var e=hs(),l=cl.identifierPrefix;if(Ye){var s=Js,i=Ps;s=(i&~(1<<32-ml(i)-1)).toString(32)+s,l=":"+l+"R"+s,s=$t++,0<s&&(l+="H"+s.toString(32)),l+=":"}else s=$g++,l=":"+l+"r"+s.toString(32)+":";return e.memoizedState=l},unstable_isNewReconciler:!1},Xg={readContext:Dl,useCallback:fc,useContext:Dl,useEffect:Ho,useImperativeHandle:gc,useInsertionEffect:cc,useLayoutEffect:pc,useMemo:mc,useReducer:Ao,useRef:uc,useState:function(){return Ao(Vt)},useDebugValue:To,useDeferredValue:function(e){var l=Wl();return hc(l,ol.memoizedState,e)},useTransition:function(){var e=Ao(Vt)[0],l=Wl().memoizedState;return[e,l]},useMutableSource:ec,useSyncExternalStore:lc,useId:_c,unstable_isNewReconciler:!1},Zg={readContext:Dl,useCallback:fc,useContext:Dl,useEffect:Ho,useImperativeHandle:gc,useInsertionEffect:cc,useLayoutEffect:pc,useMemo:mc,useReducer:Mo,useRef:uc,useState:function(){return Mo(Vt)},useDebugValue:To,useDeferredValue:function(e){var l=Wl();return ol===null?l.memoizedState=e:hc(l,ol.memoizedState,e)},useTransition:function(){var e=Mo(Vt)[0],l=Wl().memoizedState;return[e,l]},useMutableSource:ec,useSyncExternalStore:lc,useId:_c,unstable_isNewReconciler:!1};function as(e,l){if(e&&e.defaultProps){l=V({},l),e=e.defaultProps;for(var s in e)l[s]===void 0&&(l[s]=e[s]);return l}return l}function Ro(e,l,s,i){l=e.memoizedState,s=s(i,l),s=s==null?l:V({},l,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var na={isMounted:function(e){return(e=e._reactInternals)?Y(e)===e:!1},enqueueSetState:function(e,l,s){e=e._reactInternals;var i=kl(),n=ai(e),u=Us(i,n);u.payload=l,s!=null&&(u.callback=s),l=si(e,u,n),l!==null&&(rs(l,e,n,i),Yn(l,e,n))},enqueueReplaceState:function(e,l,s){e=e._reactInternals;var i=kl(),n=ai(e),u=Us(i,n);u.tag=1,u.payload=l,s!=null&&(u.callback=s),l=si(e,u,n),l!==null&&(rs(l,e,n,i),Yn(l,e,n))},enqueueForceUpdate:function(e,l){e=e._reactInternals;var s=kl(),i=ai(e),n=Us(s,i);n.tag=2,l!=null&&(n.callback=l),l=si(e,n,i),l!==null&&(rs(l,e,i,s),Yn(l,e,i))}};function wc(e,l,s,i,n,u,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,u,d):l.prototype&&l.prototype.isPureReactComponent?!qt(s,i)||!qt(n,u):!0}function xc(e,l,s){var i=!1,n=Zs,u=l.contextType;return typeof u=="object"&&u!==null?u=Dl(u):(n=Il(l)?wi:_l.current,i=l.contextTypes,u=(i=i!=null)?et(e,n):Zs),l=new l(s,u),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=na,e.stateNode=l,l._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=u),l}function yc(e,l,s,i){e=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(s,i),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(s,i),l.state!==e&&na.enqueueReplaceState(l,l.state,null)}function Oo(e,l,s,i){var n=e.stateNode;n.props=s,n.state=e.memoizedState,n.refs={},Lo(e);var u=l.contextType;typeof u=="object"&&u!==null?n.context=Dl(u):(u=Il(l)?wi:_l.current,n.context=et(e,u)),n.state=e.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(Ro(e,l,u,s),n.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(l=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),l!==n.state&&na.enqueueReplaceState(n,n.state,null),Xn(e,s,n,i),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308)}function ut(e,l){try{var s="",i=l;do s+=ge(i),i=i.return;while(i);var n=s}catch(u){n=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:l,stack:n,digest:null}}function No(e,l,s){return{value:e,source:null,stack:s??null,digest:l??null}}function Fo(e,l){try{console.error(l.value)}catch(s){setTimeout(function(){throw s})}}var ef=typeof WeakMap=="function"?WeakMap:Map;function Ec(e,l,s){s=Us(-1,s),s.tag=3,s.payload={element:null};var i=l.value;return s.callback=function(){da||(da=!0,nu=i),Fo(e,l)},s}function kc(e,l,s){s=Us(-1,s),s.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var n=l.value;s.payload=function(){return i(n)},s.callback=function(){Fo(e,l)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch=="function"&&(s.callback=function(){Fo(e,l),typeof i!="function"&&(ti===null?ti=new Set([this]):ti.add(this));var d=l.stack;this.componentDidCatch(l.value,{componentStack:d!==null?d:""})}),s}function bc(e,l,s){var i=e.pingCache;if(i===null){i=e.pingCache=new ef;var n=new Set;i.set(l,n)}else n=i.get(l),n===void 0&&(n=new Set,i.set(l,n));n.has(s)||(n.add(s),e=mf.bind(null,e,l,s),l.then(e,e))}function Cc(e){do{var l;if((l=e.tag===13)&&(l=e.memoizedState,l=l!==null?l.dehydrated!==null:!0),l)return e;e=e.return}while(e!==null);return null}function Lc(e,l,s,i,n){return(e.mode&1)===0?(e===l?e.flags|=65536:(e.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(l=Us(-1,1),l.tag=2,si(s,l,1))),s.lanes|=1),e):(e.flags|=65536,e.lanes=n,e)}var lf=pe.ReactCurrentOwner,Gl=!1;function El(e,l,s,i){l.child=e===null?Vr(l,null,s,i):tt(l,e.child,s,i)}function Ic(e,l,s,i,n){s=s.render;var u=l.ref;return at(l,n),i=qo(e,l,s,i,u,n),s=Bo(),e!==null&&!Gl?(l.updateQueue=e.updateQueue,l.flags&=-2053,e.lanes&=~n,qs(e,l,n)):(Ye&&s&&jo(l),l.flags|=1,El(e,l,i,n),l.child)}function Gc(e,l,s,i,n){if(e===null){var u=s.type;return typeof u=="function"&&!du(u)&&u.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(l.tag=15,l.type=u,Pc(e,l,u,i,n)):(e=ja(s.type,null,i,l,l.mode,n),e.ref=l.ref,e.return=l,l.child=e)}if(u=e.child,(e.lanes&n)===0){var d=u.memoizedProps;if(s=s.compare,s=s!==null?s:qt,s(d,i)&&e.ref===l.ref)return qs(e,l,n)}return l.flags|=1,e=ui(u,i),e.ref=l.ref,e.return=l,l.child=e}function Pc(e,l,s,i,n){if(e!==null){var u=e.memoizedProps;if(qt(u,i)&&e.ref===l.ref)if(Gl=!1,l.pendingProps=i=u,(e.lanes&n)!==0)(e.flags&131072)!==0&&(Gl=!0);else return l.lanes=e.lanes,qs(e,l,n)}return Do(e,l,s,i,n)}function Jc(e,l,s){var i=l.pendingProps,n=i.children,u=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((l.mode&1)===0)l.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(ct,Ml),Ml|=s;else{if((s&1073741824)===0)return e=u!==null?u.baseLanes|s:s,l.lanes=l.childLanes=1073741824,l.memoizedState={baseLanes:e,cachePool:null,transitions:null},l.updateQueue=null,$e(ct,Ml),Ml|=e,null;l.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=u!==null?u.baseLanes:s,$e(ct,Ml),Ml|=i}else u!==null?(i=u.baseLanes|s,l.memoizedState=null):i=s,$e(ct,Ml),Ml|=i;return El(e,l,n,s),l.child}function zc(e,l){var s=l.ref;(e===null&&s!==null||e!==null&&e.ref!==s)&&(l.flags|=512,l.flags|=2097152)}function Do(e,l,s,i,n){var u=Il(s)?wi:_l.current;return u=et(l,u),at(l,n),s=qo(e,l,s,i,u,n),i=Bo(),e!==null&&!Gl?(l.updateQueue=e.updateQueue,l.flags&=-2053,e.lanes&=~n,qs(e,l,n)):(Ye&&i&&jo(l),l.flags|=1,El(e,l,s,n),l.child)}function Uc(e,l,s,i,n){if(Il(s)){var u=!0;Nn(l)}else u=!1;if(at(l,n),l.stateNode===null)oa(e,l),xc(l,s,i),Oo(l,s,i,n),i=!0;else if(e===null){var d=l.stateNode,h=l.memoizedProps;d.props=h;var v=d.context,z=s.contextType;typeof z=="object"&&z!==null?z=Dl(z):(z=Il(s)?wi:_l.current,z=et(l,z));var O=s.getDerivedStateFromProps,F=typeof O=="function"||typeof d.getSnapshotBeforeUpdate=="function";F||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==i||v!==z)&&yc(l,d,i,z),li=!1;var R=l.memoizedState;d.state=R,Xn(l,i,d,n),v=l.memoizedState,h!==i||R!==v||Ll.current||li?(typeof O=="function"&&(Ro(l,s,O,i),v=l.memoizedState),(h=li||wc(l,s,h,i,R,v,z))?(F||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(l.flags|=4194308)):(typeof d.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=i,l.memoizedState=v),d.props=i,d.state=v,d.context=z,i=h):(typeof d.componentDidMount=="function"&&(l.flags|=4194308),i=!1)}else{d=l.stateNode,Qr(e,l),h=l.memoizedProps,z=l.type===l.elementType?h:as(l.type,h),d.props=z,F=l.pendingProps,R=d.context,v=s.contextType,typeof v=="object"&&v!==null?v=Dl(v):(v=Il(s)?wi:_l.current,v=et(l,v));var Z=s.getDerivedStateFromProps;(O=typeof Z=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(h!==F||R!==v)&&yc(l,d,i,v),li=!1,R=l.memoizedState,d.state=R,Xn(l,i,d,n);var le=l.memoizedState;h!==F||R!==le||Ll.current||li?(typeof Z=="function"&&(Ro(l,s,Z,i),le=l.memoizedState),(z=li||wc(l,s,z,i,R,le,v)||!1)?(O||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(i,le,v),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(i,le,v)),typeof d.componentDidUpdate=="function"&&(l.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof d.componentDidUpdate!="function"||h===e.memoizedProps&&R===e.memoizedState||(l.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&R===e.memoizedState||(l.flags|=1024),l.memoizedProps=i,l.memoizedState=le),d.props=i,d.state=le,d.context=v,i=z):(typeof d.componentDidUpdate!="function"||h===e.memoizedProps&&R===e.memoizedState||(l.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&R===e.memoizedState||(l.flags|=1024),i=!1)}return Wo(e,l,s,i,u,n)}function Wo(e,l,s,i,n,u){zc(e,l);var d=(l.flags&128)!==0;if(!i&&!d)return n&&Hr(l,s,!1),qs(e,l,u);i=l.stateNode,lf.current=l;var h=d&&typeof s.getDerivedStateFromError!="function"?null:i.render();return l.flags|=1,e!==null&&d?(l.child=tt(l,e.child,null,u),l.child=tt(l,null,h,u)):El(e,l,h,u),l.memoizedState=i.state,n&&Hr(l,s,!0),l.child}function qc(e){var l=e.stateNode;l.pendingContext?Ar(e,l.pendingContext,l.pendingContext!==l.context):l.context&&Ar(e,l.context,!1),Io(e,l.containerInfo)}function Bc(e,l,s,i,n){return it(),xo(n),l.flags|=256,El(e,l,s,i),l.child}var $o={dehydrated:null,treeContext:null,retryLane:0};function Vo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ac(e,l,s){var i=l.pendingProps,n=Ze.current,u=!1,d=(l.flags&128)!==0,h;if((h=d)||(h=e!==null&&e.memoizedState===null?!1:(n&2)!==0),h?(u=!0,l.flags&=-129):(e===null||e.memoizedState!==null)&&(n|=1),$e(Ze,n&1),e===null)return wo(l),e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((l.mode&1)===0?l.lanes=1:e.data==="$!"?l.lanes=8:l.lanes=1073741824,null):(d=i.children,e=i.fallback,u?(i=l.mode,u=l.child,d={mode:"hidden",children:d},(i&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=d):u=Sa(d,i,0,null),e=Pi(e,i,s,null),u.return=l,e.return=l,u.sibling=e,l.child=u,l.child.memoizedState=Vo(s),l.memoizedState=$o,e):Ko(l,d));if(n=e.memoizedState,n!==null&&(h=n.dehydrated,h!==null))return sf(e,l,d,i,h,n,s);if(u){u=i.fallback,d=l.mode,n=e.child,h=n.sibling;var v={mode:"hidden",children:i.children};return(d&1)===0&&l.child!==n?(i=l.child,i.childLanes=0,i.pendingProps=v,l.deletions=null):(i=ui(n,v),i.subtreeFlags=n.subtreeFlags&14680064),h!==null?u=ui(h,u):(u=Pi(u,d,s,null),u.flags|=2),u.return=l,i.return=l,i.sibling=u,l.child=i,i=u,u=l.child,d=e.child.memoizedState,d=d===null?Vo(s):{baseLanes:d.baseLanes|s,cachePool:null,transitions:d.transitions},u.memoizedState=d,u.childLanes=e.childLanes&~s,l.memoizedState=$o,i}return u=e.child,e=u.sibling,i=ui(u,{mode:"visible",children:i.children}),(l.mode&1)===0&&(i.lanes=s),i.return=l,i.sibling=null,e!==null&&(s=l.deletions,s===null?(l.deletions=[e],l.flags|=16):s.push(e)),l.child=i,l.memoizedState=null,i}function Ko(e,l){return l=Sa({mode:"visible",children:l},e.mode,0,null),l.return=e,e.child=l}function aa(e,l,s,i){return i!==null&&xo(i),tt(l,e.child,null,s),e=Ko(l,l.pendingProps.children),e.flags|=2,l.memoizedState=null,e}function sf(e,l,s,i,n,u,d){if(s)return l.flags&256?(l.flags&=-257,i=No(Error(o(422))),aa(e,l,d,i)):l.memoizedState!==null?(l.child=e.child,l.flags|=128,null):(u=i.fallback,n=l.mode,i=Sa({mode:"visible",children:i.children},n,0,null),u=Pi(u,n,d,null),u.flags|=2,i.return=l,u.return=l,i.sibling=u,l.child=i,(l.mode&1)!==0&&tt(l,e.child,null,d),l.child.memoizedState=Vo(d),l.memoizedState=$o,u);if((l.mode&1)===0)return aa(e,l,d,null);if(n.data==="$!"){if(i=n.nextSibling&&n.nextSibling.dataset,i)var h=i.dgst;return i=h,u=Error(o(419)),i=No(u,i,void 0),aa(e,l,d,i)}if(h=(d&e.childLanes)!==0,Gl||h){if(i=cl,i!==null){switch(d&-d){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=(n&(i.suspendedLanes|d))!==0?0:n,n!==0&&n!==u.retryLane&&(u.retryLane=n,zs(e,n),rs(i,e,n,-1))}return pu(),i=No(Error(o(421))),aa(e,l,d,i)}return n.data==="$?"?(l.flags|=128,l.child=e.child,l=hf.bind(null,e),n._reactRetry=l,null):(e=u.treeContext,Al=Ys(n.nextSibling),Bl=l,Ye=!0,ns=null,e!==null&&(Nl[Fl++]=Ps,Nl[Fl++]=Js,Nl[Fl++]=xi,Ps=e.id,Js=e.overflow,xi=l),l=Ko(l,i.children),l.flags|=4096,l)}function Mc(e,l,s){e.lanes|=l;var i=e.alternate;i!==null&&(i.lanes|=l),bo(e.return,l,s)}function Qo(e,l,s,i,n){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:i,tail:s,tailMode:n}:(u.isBackwards=l,u.rendering=null,u.renderingStartTime=0,u.last=i,u.tail=s,u.tailMode=n)}function Hc(e,l,s){var i=l.pendingProps,n=i.revealOrder,u=i.tail;if(El(e,l,i.children,s),i=Ze.current,(i&2)!==0)i=i&1|2,l.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=l.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mc(e,s,l);else if(e.tag===19)Mc(e,s,l);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===l)break e;for(;e.sibling===null;){if(e.return===null||e.return===l)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if($e(Ze,i),(l.mode&1)===0)l.memoizedState=null;else switch(n){case"forwards":for(s=l.child,n=null;s!==null;)e=s.alternate,e!==null&&Zn(e)===null&&(n=s),s=s.sibling;s=n,s===null?(n=l.child,l.child=null):(n=s.sibling,s.sibling=null),Qo(l,!1,n,s,u);break;case"backwards":for(s=null,n=l.child,l.child=null;n!==null;){if(e=n.alternate,e!==null&&Zn(e)===null){l.child=n;break}e=n.sibling,n.sibling=s,s=n,n=e}Qo(l,!0,s,null,u);break;case"together":Qo(l,!1,null,null,void 0);break;default:l.memoizedState=null}return l.child}function oa(e,l){(l.mode&1)===0&&e!==null&&(e.alternate=null,l.alternate=null,l.flags|=2)}function qs(e,l,s){if(e!==null&&(l.dependencies=e.dependencies),Ci|=l.lanes,(s&l.childLanes)===0)return null;if(e!==null&&l.child!==e.child)throw Error(o(153));if(l.child!==null){for(e=l.child,s=ui(e,e.pendingProps),l.child=s,s.return=l;e.sibling!==null;)e=e.sibling,s=s.sibling=ui(e,e.pendingProps),s.return=l;s.sibling=null}return l.child}function tf(e,l,s){switch(l.tag){case 3:qc(l),it();break;case 5:Zr(l);break;case 1:Il(l.type)&&Nn(l);break;case 4:Io(l,l.stateNode.containerInfo);break;case 10:var i=l.type._context,n=l.memoizedProps.value;$e(Kn,i._currentValue),i._currentValue=n;break;case 13:if(i=l.memoizedState,i!==null)return i.dehydrated!==null?($e(Ze,Ze.current&1),l.flags|=128,null):(s&l.child.childLanes)!==0?Ac(e,l,s):($e(Ze,Ze.current&1),e=qs(e,l,s),e!==null?e.sibling:null);$e(Ze,Ze.current&1);break;case 19:if(i=(s&l.childLanes)!==0,(e.flags&128)!==0){if(i)return Hc(e,l,s);l.flags|=128}if(n=l.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),$e(Ze,Ze.current),i)break;return null;case 22:case 23:return l.lanes=0,Jc(e,l,s)}return qs(e,l,s)}var Tc,Yo,Rc,Oc;Tc=function(e,l){for(var s=l.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===l)break;for(;s.sibling===null;){if(s.return===null||s.return===l)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Yo=function(){},Rc=function(e,l,s,i){var n=e.memoizedProps;if(n!==i){e=l.stateNode,ki(ms.current);var u=null;switch(s){case"input":n=Xe(e,n),i=Xe(e,i),u=[];break;case"select":n=V({},n,{value:void 0}),i=V({},i,{value:void 0}),u=[];break;case"textarea":n=St(e,n),i=St(e,i),u=[];break;default:typeof n.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Tn)}Ai(s,i);var d;s=null;for(z in n)if(!i.hasOwnProperty(z)&&n.hasOwnProperty(z)&&n[z]!=null)if(z==="style"){var h=n[z];for(d in h)h.hasOwnProperty(d)&&(s||(s={}),s[d]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(c.hasOwnProperty(z)?u||(u=[]):(u=u||[]).push(z,null));for(z in i){var v=i[z];if(h=n!=null?n[z]:void 0,i.hasOwnProperty(z)&&v!==h&&(v!=null||h!=null))if(z==="style")if(h){for(d in h)!h.hasOwnProperty(d)||v&&v.hasOwnProperty(d)||(s||(s={}),s[d]="");for(d in v)v.hasOwnProperty(d)&&h[d]!==v[d]&&(s||(s={}),s[d]=v[d])}else s||(u||(u=[]),u.push(z,s)),s=v;else z==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,h=h?h.__html:void 0,v!=null&&h!==v&&(u=u||[]).push(z,v)):z==="children"?typeof v!="string"&&typeof v!="number"||(u=u||[]).push(z,""+v):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(c.hasOwnProperty(z)?(v!=null&&z==="onScroll"&&Ke("scroll",e),u||h===v||(u=[])):(u=u||[]).push(z,v))}s&&(u=u||[]).push("style",s);var z=u;(l.updateQueue=z)&&(l.flags|=4)}},Oc=function(e,l,s,i){s!==i&&(l.flags|=4)};function Qt(e,l){if(!Ye)switch(e.tailMode){case"hidden":l=e.tail;for(var s=null;l!==null;)l.alternate!==null&&(s=l),l=l.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var i=null;s!==null;)s.alternate!==null&&(i=s),s=s.sibling;i===null?l||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Sl(e){var l=e.alternate!==null&&e.alternate.child===e.child,s=0,i=0;if(l)for(var n=e.child;n!==null;)s|=n.lanes|n.childLanes,i|=n.subtreeFlags&14680064,i|=n.flags&14680064,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)s|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=i,e.childLanes=s,l}function nf(e,l,s){var i=l.pendingProps;switch(So(l),l.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sl(l),null;case 1:return Il(l.type)&&On(),Sl(l),null;case 3:return i=l.stateNode,ot(),Qe(Ll),Qe(_l),Jo(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&($n(l)?l.flags|=4:e===null||e.memoizedState.isDehydrated&&(l.flags&256)===0||(l.flags|=1024,ns!==null&&(uu(ns),ns=null))),Yo(e,l),Sl(l),null;case 5:Go(l);var n=ki(Dt.current);if(s=l.type,e!==null&&l.stateNode!=null)Rc(e,l,s,i,n),e.ref!==l.ref&&(l.flags|=512,l.flags|=2097152);else{if(!i){if(l.stateNode===null)throw Error(o(166));return Sl(l),null}if(e=ki(ms.current),$n(l)){i=l.stateNode,s=l.type;var u=l.memoizedProps;switch(i[fs]=l,i[Tt]=u,e=(l.mode&1)!==0,s){case"dialog":Ke("cancel",i),Ke("close",i);break;case"iframe":case"object":case"embed":Ke("load",i);break;case"video":case"audio":for(n=0;n<At.length;n++)Ke(At[n],i);break;case"source":Ke("error",i);break;case"img":case"image":case"link":Ke("error",i),Ke("load",i);break;case"details":Ke("toggle",i);break;case"input":Tl(i,u),Ke("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!u.multiple},Ke("invalid",i);break;case"textarea":vn(i,u),Ke("invalid",i)}Ai(s,u),n=null;for(var d in u)if(u.hasOwnProperty(d)){var h=u[d];d==="children"?typeof h=="string"?i.textContent!==h&&(u.suppressHydrationWarning!==!0&&Hn(i.textContent,h,e),n=["children",h]):typeof h=="number"&&i.textContent!==""+h&&(u.suppressHydrationWarning!==!0&&Hn(i.textContent,h,e),n=["children",""+h]):c.hasOwnProperty(d)&&h!=null&&d==="onScroll"&&Ke("scroll",i)}switch(s){case"input":we(i),mi(i,u,!0);break;case"textarea":we(i),ds(i);break;case"select":case"option":break;default:typeof u.onClick=="function"&&(i.onclick=Tn)}i=n,l.updateQueue=i,i!==null&&(l.flags|=4)}else{d=n.nodeType===9?n:n.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ms(s)),e==="http://www.w3.org/1999/xhtml"?s==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=d.createElement(s,{is:i.is}):(e=d.createElement(s),s==="select"&&(d=e,i.multiple?d.multiple=!0:i.size&&(d.size=i.size))):e=d.createElementNS(e,s),e[fs]=l,e[Tt]=i,Tc(e,l,!1,!1),l.stateNode=e;e:{switch(d=Mi(s,i),s){case"dialog":Ke("cancel",e),Ke("close",e),n=i;break;case"iframe":case"object":case"embed":Ke("load",e),n=i;break;case"video":case"audio":for(n=0;n<At.length;n++)Ke(At[n],e);n=i;break;case"source":Ke("error",e),n=i;break;case"img":case"image":case"link":Ke("error",e),Ke("load",e),n=i;break;case"details":Ke("toggle",e),n=i;break;case"input":Tl(e,i),n=Xe(e,i),Ke("invalid",e);break;case"option":n=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},n=V({},i,{value:void 0}),Ke("invalid",e);break;case"textarea":vn(e,i),n=St(e,i),Ke("invalid",e);break;default:n=i}Ai(s,n),h=n;for(u in h)if(h.hasOwnProperty(u)){var v=h[u];u==="style"?xn(e,v):u==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,v!=null&&Ol(e,v)):u==="children"?typeof v=="string"?(s!=="textarea"||v!=="")&&xl(e,v):typeof v=="number"&&xl(e,""+v):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(c.hasOwnProperty(u)?v!=null&&u==="onScroll"&&Ke("scroll",e):v!=null&&X(e,u,v,d))}switch(s){case"input":we(e),mi(e,i,!1);break;case"textarea":we(e),ds(e);break;case"option":i.value!=null&&e.setAttribute("value",""+qe(i.value));break;case"select":e.multiple=!!i.multiple,u=i.value,u!=null?As(e,!!i.multiple,u,!1):i.defaultValue!=null&&As(e,!!i.multiple,i.defaultValue,!0);break;default:typeof n.onClick=="function"&&(e.onclick=Tn)}switch(s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(l.flags|=4)}l.ref!==null&&(l.flags|=512,l.flags|=2097152)}return Sl(l),null;case 6:if(e&&l.stateNode!=null)Oc(e,l,e.memoizedProps,i);else{if(typeof i!="string"&&l.stateNode===null)throw Error(o(166));if(s=ki(Dt.current),ki(ms.current),$n(l)){if(i=l.stateNode,s=l.memoizedProps,i[fs]=l,(u=i.nodeValue!==s)&&(e=Bl,e!==null))switch(e.tag){case 3:Hn(i.nodeValue,s,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hn(i.nodeValue,s,(e.mode&1)!==0)}u&&(l.flags|=4)}else i=(s.nodeType===9?s:s.ownerDocument).createTextNode(i),i[fs]=l,l.stateNode=i}return Sl(l),null;case 13:if(Qe(Ze),i=l.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ye&&Al!==null&&(l.mode&1)!==0&&(l.flags&128)===0)Dr(),it(),l.flags|=98560,u=!1;else if(u=$n(l),i!==null&&i.dehydrated!==null){if(e===null){if(!u)throw Error(o(318));if(u=l.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[fs]=l}else it(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;Sl(l),u=!1}else ns!==null&&(uu(ns),ns=null),u=!0;if(!u)return l.flags&65536?l:null}return(l.flags&128)!==0?(l.lanes=s,l):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(l.child.flags|=8192,(l.mode&1)!==0&&(e===null||(Ze.current&1)!==0?ul===0&&(ul=3):pu())),l.updateQueue!==null&&(l.flags|=4),Sl(l),null);case 4:return ot(),Yo(e,l),e===null&&Mt(l.stateNode.containerInfo),Sl(l),null;case 10:return ko(l.type._context),Sl(l),null;case 17:return Il(l.type)&&On(),Sl(l),null;case 19:if(Qe(Ze),u=l.memoizedState,u===null)return Sl(l),null;if(i=(l.flags&128)!==0,d=u.rendering,d===null)if(i)Qt(u,!1);else{if(ul!==0||e!==null&&(e.flags&128)!==0)for(e=l.child;e!==null;){if(d=Zn(e),d!==null){for(l.flags|=128,Qt(u,!1),i=d.updateQueue,i!==null&&(l.updateQueue=i,l.flags|=4),l.subtreeFlags=0,i=s,s=l.child;s!==null;)u=s,e=i,u.flags&=14680066,d=u.alternate,d===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=d.childLanes,u.lanes=d.lanes,u.child=d.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=d.memoizedProps,u.memoizedState=d.memoizedState,u.updateQueue=d.updateQueue,u.type=d.type,e=d.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),s=s.sibling;return $e(Ze,Ze.current&1|2),l.child}e=e.sibling}u.tail!==null&&Be()>pt&&(l.flags|=128,i=!0,Qt(u,!1),l.lanes=4194304)}else{if(!i)if(e=Zn(d),e!==null){if(l.flags|=128,i=!0,s=e.updateQueue,s!==null&&(l.updateQueue=s,l.flags|=4),Qt(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Ye)return Sl(l),null}else 2*Be()-u.renderingStartTime>pt&&s!==1073741824&&(l.flags|=128,i=!0,Qt(u,!1),l.lanes=4194304);u.isBackwards?(d.sibling=l.child,l.child=d):(s=u.last,s!==null?s.sibling=d:l.child=d,u.last=d)}return u.tail!==null?(l=u.tail,u.rendering=l,u.tail=l.sibling,u.renderingStartTime=Be(),l.sibling=null,s=Ze.current,$e(Ze,i?s&1|2:s&1),l):(Sl(l),null);case 22:case 23:return cu(),i=l.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(l.flags|=8192),i&&(l.mode&1)!==0?(Ml&1073741824)!==0&&(Sl(l),l.subtreeFlags&6&&(l.flags|=8192)):Sl(l),null;case 24:return null;case 25:return null}throw Error(o(156,l.tag))}function af(e,l){switch(So(l),l.tag){case 1:return Il(l.type)&&On(),e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 3:return ot(),Qe(Ll),Qe(_l),Jo(),e=l.flags,(e&65536)!==0&&(e&128)===0?(l.flags=e&-65537|128,l):null;case 5:return Go(l),null;case 13:if(Qe(Ze),e=l.memoizedState,e!==null&&e.dehydrated!==null){if(l.alternate===null)throw Error(o(340));it()}return e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 19:return Qe(Ze),null;case 4:return ot(),null;case 10:return ko(l.type._context),null;case 22:case 23:return cu(),null;case 24:return null;default:return null}}var ua=!1,vl=!1,of=typeof WeakSet=="function"?WeakSet:Set,ee=null;function rt(e,l){var s=e.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(i){ll(e,l,i)}else s.current=null}function Xo(e,l,s){try{s()}catch(i){ll(e,l,i)}}var Nc=!1;function uf(e,l){if(ro=Ln,e=wr(),lo(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var i=s.getSelection&&s.getSelection();if(i&&i.rangeCount!==0){s=i.anchorNode;var n=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{s.nodeType,u.nodeType}catch{s=null;break e}var d=0,h=-1,v=-1,z=0,O=0,F=e,R=null;l:for(;;){for(var Z;F!==s||n!==0&&F.nodeType!==3||(h=d+n),F!==u||i!==0&&F.nodeType!==3||(v=d+i),F.nodeType===3&&(d+=F.nodeValue.length),(Z=F.firstChild)!==null;)R=F,F=Z;for(;;){if(F===e)break l;if(R===s&&++z===n&&(h=d),R===u&&++O===i&&(v=d),(Z=F.nextSibling)!==null)break;F=R,R=F.parentNode}F=Z}s=h===-1||v===-1?null:{start:h,end:v}}else s=null}s=s||{start:0,end:0}}else s=null;for(co={focusedElem:e,selectionRange:s},Ln=!1,ee=l;ee!==null;)if(l=ee,e=l.child,(l.subtreeFlags&1028)!==0&&e!==null)e.return=l,ee=e;else for(;ee!==null;){l=ee;try{var le=l.alternate;if((l.flags&1024)!==0)switch(l.tag){case 0:case 11:case 15:break;case 1:if(le!==null){var se=le.memoizedProps,il=le.memoizedState,I=l.stateNode,x=I.getSnapshotBeforeUpdate(l.elementType===l.type?se:as(l.type,se),il);I.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var P=l.stateNode.containerInfo;P.nodeType===1?P.textContent="":P.nodeType===9&&P.documentElement&&P.removeChild(P.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(W){ll(l,l.return,W)}if(e=l.sibling,e!==null){e.return=l.return,ee=e;break}ee=l.return}return le=Nc,Nc=!1,le}function Yt(e,l,s){var i=l.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var n=i=i.next;do{if((n.tag&e)===e){var u=n.destroy;n.destroy=void 0,u!==void 0&&Xo(l,s,u)}n=n.next}while(n!==i)}}function ra(e,l){if(l=l.updateQueue,l=l!==null?l.lastEffect:null,l!==null){var s=l=l.next;do{if((s.tag&e)===e){var i=s.create;s.destroy=i()}s=s.next}while(s!==l)}}function Zo(e){var l=e.ref;if(l!==null){var s=e.stateNode;switch(e.tag){case 5:e=s;break;default:e=s}typeof l=="function"?l(e):l.current=e}}function Fc(e){var l=e.alternate;l!==null&&(e.alternate=null,Fc(l)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(l=e.stateNode,l!==null&&(delete l[fs],delete l[Tt],delete l[mo],delete l[Ng],delete l[Fg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dc(e){return e.tag===5||e.tag===3||e.tag===4}function Wc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function eu(e,l,s){var i=e.tag;if(i===5||i===6)e=e.stateNode,l?s.nodeType===8?s.parentNode.insertBefore(e,l):s.insertBefore(e,l):(s.nodeType===8?(l=s.parentNode,l.insertBefore(e,s)):(l=s,l.appendChild(e)),s=s._reactRootContainer,s!=null||l.onclick!==null||(l.onclick=Tn));else if(i!==4&&(e=e.child,e!==null))for(eu(e,l,s),e=e.sibling;e!==null;)eu(e,l,s),e=e.sibling}function lu(e,l,s){var i=e.tag;if(i===5||i===6)e=e.stateNode,l?s.insertBefore(e,l):s.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(lu(e,l,s),e=e.sibling;e!==null;)lu(e,l,s),e=e.sibling}var dl=null,os=!1;function ii(e,l,s){for(s=s.child;s!==null;)$c(e,l,s),s=s.sibling}function $c(e,l,s){if(al&&typeof al.onCommitFiberUnmount=="function")try{al.onCommitFiberUnmount(Os,s)}catch{}switch(s.tag){case 5:vl||rt(s,l);case 6:var i=dl,n=os;dl=null,ii(e,l,s),dl=i,os=n,dl!==null&&(os?(e=dl,s=s.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)):dl.removeChild(s.stateNode));break;case 18:dl!==null&&(os?(e=dl,s=s.stateNode,e.nodeType===8?fo(e.parentNode,s):e.nodeType===1&&fo(e,s),It(e)):fo(dl,s.stateNode));break;case 4:i=dl,n=os,dl=s.stateNode.containerInfo,os=!0,ii(e,l,s),dl=i,os=n;break;case 0:case 11:case 14:case 15:if(!vl&&(i=s.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){n=i=i.next;do{var u=n,d=u.destroy;u=u.tag,d!==void 0&&((u&2)!==0||(u&4)!==0)&&Xo(s,l,d),n=n.next}while(n!==i)}ii(e,l,s);break;case 1:if(!vl&&(rt(s,l),i=s.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=s.memoizedProps,i.state=s.memoizedState,i.componentWillUnmount()}catch(h){ll(s,l,h)}ii(e,l,s);break;case 21:ii(e,l,s);break;case 22:s.mode&1?(vl=(i=vl)||s.memoizedState!==null,ii(e,l,s),vl=i):ii(e,l,s);break;default:ii(e,l,s)}}function Vc(e){var l=e.updateQueue;if(l!==null){e.updateQueue=null;var s=e.stateNode;s===null&&(s=e.stateNode=new of),l.forEach(function(i){var n=_f.bind(null,e,i);s.has(i)||(s.add(i),i.then(n,n))})}}function us(e,l){var s=l.deletions;if(s!==null)for(var i=0;i<s.length;i++){var n=s[i];try{var u=e,d=l,h=d;e:for(;h!==null;){switch(h.tag){case 5:dl=h.stateNode,os=!1;break e;case 3:dl=h.stateNode.containerInfo,os=!0;break e;case 4:dl=h.stateNode.containerInfo,os=!0;break e}h=h.return}if(dl===null)throw Error(o(160));$c(u,d,n),dl=null,os=!1;var v=n.alternate;v!==null&&(v.return=null),n.return=null}catch(z){ll(n,l,z)}}if(l.subtreeFlags&12854)for(l=l.child;l!==null;)Kc(l,e),l=l.sibling}function Kc(e,l){var s=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(us(l,e),_s(e),i&4){try{Yt(3,e,e.return),ra(3,e)}catch(se){ll(e,e.return,se)}try{Yt(5,e,e.return)}catch(se){ll(e,e.return,se)}}break;case 1:us(l,e),_s(e),i&512&&s!==null&&rt(s,s.return);break;case 5:if(us(l,e),_s(e),i&512&&s!==null&&rt(s,s.return),e.flags&32){var n=e.stateNode;try{xl(n,"")}catch(se){ll(e,e.return,se)}}if(i&4&&(n=e.stateNode,n!=null)){var u=e.memoizedProps,d=s!==null?s.memoizedProps:u,h=e.type,v=e.updateQueue;if(e.updateQueue=null,v!==null)try{h==="input"&&u.type==="radio"&&u.name!=null&&Rl(n,u),Mi(h,d);var z=Mi(h,u);for(d=0;d<v.length;d+=2){var O=v[d],F=v[d+1];O==="style"?xn(n,F):O==="dangerouslySetInnerHTML"?Ol(n,F):O==="children"?xl(n,F):X(n,O,F,z)}switch(h){case"input":bl(n,u);break;case"textarea":wn(n,u);break;case"select":var R=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!u.multiple;var Z=u.value;Z!=null?As(n,!!u.multiple,Z,!1):R!==!!u.multiple&&(u.defaultValue!=null?As(n,!!u.multiple,u.defaultValue,!0):As(n,!!u.multiple,u.multiple?[]:"",!1))}n[Tt]=u}catch(se){ll(e,e.return,se)}}break;case 6:if(us(l,e),_s(e),i&4){if(e.stateNode===null)throw Error(o(162));n=e.stateNode,u=e.memoizedProps;try{n.nodeValue=u}catch(se){ll(e,e.return,se)}}break;case 3:if(us(l,e),_s(e),i&4&&s!==null&&s.memoizedState.isDehydrated)try{It(l.containerInfo)}catch(se){ll(e,e.return,se)}break;case 4:us(l,e),_s(e);break;case 13:us(l,e),_s(e),n=e.child,n.flags&8192&&(u=n.memoizedState!==null,n.stateNode.isHidden=u,!u||n.alternate!==null&&n.alternate.memoizedState!==null||(tu=Be())),i&4&&Vc(e);break;case 22:if(O=s!==null&&s.memoizedState!==null,e.mode&1?(vl=(z=vl)||O,us(l,e),vl=z):us(l,e),_s(e),i&8192){if(z=e.memoizedState!==null,(e.stateNode.isHidden=z)&&!O&&(e.mode&1)!==0)for(ee=e,O=e.child;O!==null;){for(F=ee=O;ee!==null;){switch(R=ee,Z=R.child,R.tag){case 0:case 11:case 14:case 15:Yt(4,R,R.return);break;case 1:rt(R,R.return);var le=R.stateNode;if(typeof le.componentWillUnmount=="function"){i=R,s=R.return;try{l=i,le.props=l.memoizedProps,le.state=l.memoizedState,le.componentWillUnmount()}catch(se){ll(i,s,se)}}break;case 5:rt(R,R.return);break;case 22:if(R.memoizedState!==null){Xc(F);continue}}Z!==null?(Z.return=R,ee=Z):Xc(F)}O=O.sibling}e:for(O=null,F=e;;){if(F.tag===5){if(O===null){O=F;try{n=F.stateNode,z?(u=n.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none"):(h=F.stateNode,v=F.memoizedProps.style,d=v!=null&&v.hasOwnProperty("display")?v.display:null,h.style.display=Bi("display",d))}catch(se){ll(e,e.return,se)}}}else if(F.tag===6){if(O===null)try{F.stateNode.nodeValue=z?"":F.memoizedProps}catch(se){ll(e,e.return,se)}}else if((F.tag!==22&&F.tag!==23||F.memoizedState===null||F===e)&&F.child!==null){F.child.return=F,F=F.child;continue}if(F===e)break e;for(;F.sibling===null;){if(F.return===null||F.return===e)break e;O===F&&(O=null),F=F.return}O===F&&(O=null),F.sibling.return=F.return,F=F.sibling}}break;case 19:us(l,e),_s(e),i&4&&Vc(e);break;case 21:break;default:us(l,e),_s(e)}}function _s(e){var l=e.flags;if(l&2){try{e:{for(var s=e.return;s!==null;){if(Dc(s)){var i=s;break e}s=s.return}throw Error(o(160))}switch(i.tag){case 5:var n=i.stateNode;i.flags&32&&(xl(n,""),i.flags&=-33);var u=Wc(e);lu(e,u,n);break;case 3:case 4:var d=i.stateNode.containerInfo,h=Wc(e);eu(e,h,d);break;default:throw Error(o(161))}}catch(v){ll(e,e.return,v)}e.flags&=-3}l&4096&&(e.flags&=-4097)}function rf(e,l,s){ee=e,Qc(e)}function Qc(e,l,s){for(var i=(e.mode&1)!==0;ee!==null;){var n=ee,u=n.child;if(n.tag===22&&i){var d=n.memoizedState!==null||ua;if(!d){var h=n.alternate,v=h!==null&&h.memoizedState!==null||vl;h=ua;var z=vl;if(ua=d,(vl=v)&&!z)for(ee=n;ee!==null;)d=ee,v=d.child,d.tag===22&&d.memoizedState!==null?Zc(n):v!==null?(v.return=d,ee=v):Zc(n);for(;u!==null;)ee=u,Qc(u),u=u.sibling;ee=n,ua=h,vl=z}Yc(e)}else(n.subtreeFlags&8772)!==0&&u!==null?(u.return=n,ee=u):Yc(e)}}function Yc(e){for(;ee!==null;){var l=ee;if((l.flags&8772)!==0){var s=l.alternate;try{if((l.flags&8772)!==0)switch(l.tag){case 0:case 11:case 15:vl||ra(5,l);break;case 1:var i=l.stateNode;if(l.flags&4&&!vl)if(s===null)i.componentDidMount();else{var n=l.elementType===l.type?s.memoizedProps:as(l.type,s.memoizedProps);i.componentDidUpdate(n,s.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var u=l.updateQueue;u!==null&&Xr(l,u,i);break;case 3:var d=l.updateQueue;if(d!==null){if(s=null,l.child!==null)switch(l.child.tag){case 5:s=l.child.stateNode;break;case 1:s=l.child.stateNode}Xr(l,d,s)}break;case 5:var h=l.stateNode;if(s===null&&l.flags&4){s=h;var v=l.memoizedProps;switch(l.type){case"button":case"input":case"select":case"textarea":v.autoFocus&&s.focus();break;case"img":v.src&&(s.src=v.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(l.memoizedState===null){var z=l.alternate;if(z!==null){var O=z.memoizedState;if(O!==null){var F=O.dehydrated;F!==null&&It(F)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}vl||l.flags&512&&Zo(l)}catch(R){ll(l,l.return,R)}}if(l===e){ee=null;break}if(s=l.sibling,s!==null){s.return=l.return,ee=s;break}ee=l.return}}function Xc(e){for(;ee!==null;){var l=ee;if(l===e){ee=null;break}var s=l.sibling;if(s!==null){s.return=l.return,ee=s;break}ee=l.return}}function Zc(e){for(;ee!==null;){var l=ee;try{switch(l.tag){case 0:case 11:case 15:var s=l.return;try{ra(4,l)}catch(v){ll(l,s,v)}break;case 1:var i=l.stateNode;if(typeof i.componentDidMount=="function"){var n=l.return;try{i.componentDidMount()}catch(v){ll(l,n,v)}}var u=l.return;try{Zo(l)}catch(v){ll(l,u,v)}break;case 5:var d=l.return;try{Zo(l)}catch(v){ll(l,d,v)}}}catch(v){ll(l,l.return,v)}if(l===e){ee=null;break}var h=l.sibling;if(h!==null){h.return=l.return,ee=h;break}ee=l.return}}var cf=Math.ceil,ca=pe.ReactCurrentDispatcher,su=pe.ReactCurrentOwner,$l=pe.ReactCurrentBatchConfig,He=0,cl=null,tl=null,gl=0,Ml=0,ct=Xs(0),ul=0,Xt=null,Ci=0,pa=0,iu=0,Zt=null,Pl=null,tu=0,pt=1/0,Bs=null,da=!1,nu=null,ti=null,ga=!1,ni=null,fa=0,en=0,au=null,ma=-1,ha=0;function kl(){return(He&6)!==0?Be():ma!==-1?ma:ma=Be()}function ai(e){return(e.mode&1)===0?1:(He&2)!==0&&gl!==0?gl&-gl:Wg.transition!==null?(ha===0&&(ha=kn()),ha):(e=De,e!==0||(e=window.event,e=e===void 0?16:lr(e.type)),e)}function rs(e,l,s,i){if(50<en)throw en=0,au=null,Error(o(185));Et(e,s,i),((He&2)===0||e!==cl)&&(e===cl&&((He&2)===0&&(pa|=s),ul===4&&oi(e,gl)),Jl(e,i),s===1&&He===0&&(l.mode&1)===0&&(pt=Be()+500,Fn&&ei()))}function Jl(e,l){var s=e.callbackNode;Ls(e,l);var i=Fs(e,e===cl?gl:0);if(i===0)s!==null&&sl(s),e.callbackNode=null,e.callbackPriority=0;else if(l=i&-i,e.callbackPriority!==l){if(s!=null&&sl(s),l===1)e.tag===0?Dg(lp.bind(null,e)):Tr(lp.bind(null,e)),Rg(function(){(He&6)===0&&ei()}),s=null;else{switch($u(i)){case 1:s=Cs;break;case 4:s=ss;break;case 16:s=is;break;case 536870912:s=Ul;break;default:s=is}s=rp(s,ep.bind(null,e))}e.callbackPriority=l,e.callbackNode=s}}function ep(e,l){if(ma=-1,ha=0,(He&6)!==0)throw Error(o(327));var s=e.callbackNode;if(dt()&&e.callbackNode!==s)return null;var i=Fs(e,e===cl?gl:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||l)l=_a(e,i);else{l=i;var n=He;He|=2;var u=ip();(cl!==e||gl!==l)&&(Bs=null,pt=Be()+500,Ii(e,l));do try{gf();break}catch(h){sp(e,h)}while(!0);Eo(),ca.current=u,He=n,tl!==null?l=0:(cl=null,gl=0,l=ul)}if(l!==0){if(l===2&&(n=Fi(e),n!==0&&(i=n,l=ou(e,n))),l===1)throw s=Xt,Ii(e,0),oi(e,i),Jl(e,Be()),s;if(l===6)oi(e,i);else{if(n=e.current.alternate,(i&30)===0&&!pf(n)&&(l=_a(e,i),l===2&&(u=Fi(e),u!==0&&(i=u,l=ou(e,u))),l===1))throw s=Xt,Ii(e,0),oi(e,i),Jl(e,Be()),s;switch(e.finishedWork=n,e.finishedLanes=i,l){case 0:case 1:throw Error(o(345));case 2:Gi(e,Pl,Bs);break;case 3:if(oi(e,i),(i&130023424)===i&&(l=tu+500-Be(),10<l)){if(Fs(e,0)!==0)break;if(n=e.suspendedLanes,(n&i)!==i){kl(),e.pingedLanes|=e.suspendedLanes&n;break}e.timeoutHandle=go(Gi.bind(null,e,Pl,Bs),l);break}Gi(e,Pl,Bs);break;case 4:if(oi(e,i),(i&4194240)===i)break;for(l=e.eventTimes,n=-1;0<i;){var d=31-ml(i);u=1<<d,d=l[d],d>n&&(n=d),i&=~u}if(i=n,i=Be()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*cf(i/1960))-i,10<i){e.timeoutHandle=go(Gi.bind(null,e,Pl,Bs),i);break}Gi(e,Pl,Bs);break;case 5:Gi(e,Pl,Bs);break;default:throw Error(o(329))}}}return Jl(e,Be()),e.callbackNode===s?ep.bind(null,e):null}function ou(e,l){var s=Zt;return e.current.memoizedState.isDehydrated&&(Ii(e,l).flags|=256),e=_a(e,l),e!==2&&(l=Pl,Pl=s,l!==null&&uu(l)),e}function uu(e){Pl===null?Pl=e:Pl.push.apply(Pl,e)}function pf(e){for(var l=e;;){if(l.flags&16384){var s=l.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var i=0;i<s.length;i++){var n=s[i],u=n.getSnapshot;n=n.value;try{if(!ts(u(),n))return!1}catch{return!1}}}if(s=l.child,l.subtreeFlags&16384&&s!==null)s.return=l,l=s;else{if(l===e)break;for(;l.sibling===null;){if(l.return===null||l.return===e)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function oi(e,l){for(l&=~iu,l&=~pa,e.suspendedLanes|=l,e.pingedLanes&=~l,e=e.expirationTimes;0<l;){var s=31-ml(l),i=1<<s;e[s]=-1,l&=~i}}function lp(e){if((He&6)!==0)throw Error(o(327));dt();var l=Fs(e,0);if((l&1)===0)return Jl(e,Be()),null;var s=_a(e,l);if(e.tag!==0&&s===2){var i=Fi(e);i!==0&&(l=i,s=ou(e,i))}if(s===1)throw s=Xt,Ii(e,0),oi(e,l),Jl(e,Be()),s;if(s===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=l,Gi(e,Pl,Bs),Jl(e,Be()),null}function ru(e,l){var s=He;He|=1;try{return e(l)}finally{He=s,He===0&&(pt=Be()+500,Fn&&ei())}}function Li(e){ni!==null&&ni.tag===0&&(He&6)===0&&dt();var l=He;He|=1;var s=$l.transition,i=De;try{if($l.transition=null,De=1,e)return e()}finally{De=i,$l.transition=s,He=l,(He&6)===0&&ei()}}function cu(){Ml=ct.current,Qe(ct)}function Ii(e,l){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;if(s!==-1&&(e.timeoutHandle=-1,Tg(s)),tl!==null)for(s=tl.return;s!==null;){var i=s;switch(So(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&On();break;case 3:ot(),Qe(Ll),Qe(_l),Jo();break;case 5:Go(i);break;case 4:ot();break;case 13:Qe(Ze);break;case 19:Qe(Ze);break;case 10:ko(i.type._context);break;case 22:case 23:cu()}s=s.return}if(cl=e,tl=e=ui(e.current,null),gl=Ml=l,ul=0,Xt=null,iu=pa=Ci=0,Pl=Zt=null,Ei!==null){for(l=0;l<Ei.length;l++)if(s=Ei[l],i=s.interleaved,i!==null){s.interleaved=null;var n=i.next,u=s.pending;if(u!==null){var d=u.next;u.next=n,i.next=d}s.pending=i}Ei=null}return e}function sp(e,l){do{var s=tl;try{if(Eo(),ea.current=ta,la){for(var i=el.memoizedState;i!==null;){var n=i.queue;n!==null&&(n.pending=null),i=i.next}la=!1}if(bi=0,rl=ol=el=null,Wt=!1,$t=0,su.current=null,s===null||s.return===null){ul=1,Xt=l,tl=null;break}e:{var u=e,d=s.return,h=s,v=l;if(l=gl,h.flags|=32768,v!==null&&typeof v=="object"&&typeof v.then=="function"){var z=v,O=h,F=O.tag;if((O.mode&1)===0&&(F===0||F===11||F===15)){var R=O.alternate;R?(O.updateQueue=R.updateQueue,O.memoizedState=R.memoizedState,O.lanes=R.lanes):(O.updateQueue=null,O.memoizedState=null)}var Z=Cc(d);if(Z!==null){Z.flags&=-257,Lc(Z,d,h,u,l),Z.mode&1&&bc(u,z,l),l=Z,v=z;var le=l.updateQueue;if(le===null){var se=new Set;se.add(v),l.updateQueue=se}else le.add(v);break e}else{if((l&1)===0){bc(u,z,l),pu();break e}v=Error(o(426))}}else if(Ye&&h.mode&1){var il=Cc(d);if(il!==null){(il.flags&65536)===0&&(il.flags|=256),Lc(il,d,h,u,l),xo(ut(v,h));break e}}u=v=ut(v,h),ul!==4&&(ul=2),Zt===null?Zt=[u]:Zt.push(u),u=d;do{switch(u.tag){case 3:u.flags|=65536,l&=-l,u.lanes|=l;var I=Ec(u,v,l);Yr(u,I);break e;case 1:h=v;var x=u.type,P=u.stateNode;if((u.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||P!==null&&typeof P.componentDidCatch=="function"&&(ti===null||!ti.has(P)))){u.flags|=65536,l&=-l,u.lanes|=l;var W=kc(u,h,l);Yr(u,W);break e}}u=u.return}while(u!==null)}np(s)}catch(te){l=te,tl===s&&s!==null&&(tl=s=s.return);continue}break}while(!0)}function ip(){var e=ca.current;return ca.current=ta,e===null?ta:e}function pu(){(ul===0||ul===3||ul===2)&&(ul=4),cl===null||(Ci&268435455)===0&&(pa&268435455)===0||oi(cl,gl)}function _a(e,l){var s=He;He|=2;var i=ip();(cl!==e||gl!==l)&&(Bs=null,Ii(e,l));do try{df();break}catch(n){sp(e,n)}while(!0);if(Eo(),He=s,ca.current=i,tl!==null)throw Error(o(261));return cl=null,gl=0,ul}function df(){for(;tl!==null;)tp(tl)}function gf(){for(;tl!==null&&!Ve();)tp(tl)}function tp(e){var l=up(e.alternate,e,Ml);e.memoizedProps=e.pendingProps,l===null?np(e):tl=l,su.current=null}function np(e){var l=e;do{var s=l.alternate;if(e=l.return,(l.flags&32768)===0){if(s=nf(s,l,Ml),s!==null){tl=s;return}}else{if(s=af(s,l),s!==null){s.flags&=32767,tl=s;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ul=6,tl=null;return}}if(l=l.sibling,l!==null){tl=l;return}tl=l=e}while(l!==null);ul===0&&(ul=5)}function Gi(e,l,s){var i=De,n=$l.transition;try{$l.transition=null,De=1,ff(e,l,s,i)}finally{$l.transition=n,De=i}return null}function ff(e,l,s,i){do dt();while(ni!==null);if((He&6)!==0)throw Error(o(327));s=e.finishedWork;var n=e.finishedLanes;if(s===null)return null;if(e.finishedWork=null,e.finishedLanes=0,s===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var u=s.lanes|s.childLanes;if($d(e,u),e===cl&&(tl=cl=null,gl=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||ga||(ga=!0,rp(is,function(){return dt(),null})),u=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||u){u=$l.transition,$l.transition=null;var d=De;De=1;var h=He;He|=4,su.current=null,uf(e,s),Kc(s,e),zg(co),Ln=!!ro,co=ro=null,e.current=s,rf(s),Fe(),He=h,De=d,$l.transition=u}else e.current=s;if(ga&&(ga=!1,ni=e,fa=n),u=e.pendingLanes,u===0&&(ti=null),Oi(s.stateNode),Jl(e,Be()),l!==null)for(i=e.onRecoverableError,s=0;s<l.length;s++)n=l[s],i(n.value,{componentStack:n.stack,digest:n.digest});if(da)throw da=!1,e=nu,nu=null,e;return(fa&1)!==0&&e.tag!==0&&dt(),u=e.pendingLanes,(u&1)!==0?e===au?en++:(en=0,au=e):en=0,ei(),null}function dt(){if(ni!==null){var e=$u(fa),l=$l.transition,s=De;try{if($l.transition=null,De=16>e?16:e,ni===null)var i=!1;else{if(e=ni,ni=null,fa=0,(He&6)!==0)throw Error(o(331));var n=He;for(He|=4,ee=e.current;ee!==null;){var u=ee,d=u.child;if((ee.flags&16)!==0){var h=u.deletions;if(h!==null){for(var v=0;v<h.length;v++){var z=h[v];for(ee=z;ee!==null;){var O=ee;switch(O.tag){case 0:case 11:case 15:Yt(8,O,u)}var F=O.child;if(F!==null)F.return=O,ee=F;else for(;ee!==null;){O=ee;var R=O.sibling,Z=O.return;if(Fc(O),O===z){ee=null;break}if(R!==null){R.return=Z,ee=R;break}ee=Z}}}var le=u.alternate;if(le!==null){var se=le.child;if(se!==null){le.child=null;do{var il=se.sibling;se.sibling=null,se=il}while(se!==null)}}ee=u}}if((u.subtreeFlags&2064)!==0&&d!==null)d.return=u,ee=d;else e:for(;ee!==null;){if(u=ee,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:Yt(9,u,u.return)}var I=u.sibling;if(I!==null){I.return=u.return,ee=I;break e}ee=u.return}}var x=e.current;for(ee=x;ee!==null;){d=ee;var P=d.child;if((d.subtreeFlags&2064)!==0&&P!==null)P.return=d,ee=P;else e:for(d=x;ee!==null;){if(h=ee,(h.flags&2048)!==0)try{switch(h.tag){case 0:case 11:case 15:ra(9,h)}}catch(te){ll(h,h.return,te)}if(h===d){ee=null;break e}var W=h.sibling;if(W!==null){W.return=h.return,ee=W;break e}ee=h.return}}if(He=n,ei(),al&&typeof al.onPostCommitFiberRoot=="function")try{al.onPostCommitFiberRoot(Os,e)}catch{}i=!0}return i}finally{De=s,$l.transition=l}}return!1}function ap(e,l,s){l=ut(s,l),l=Ec(e,l,1),e=si(e,l,1),l=kl(),e!==null&&(Et(e,1,l),Jl(e,l))}function ll(e,l,s){if(e.tag===3)ap(e,e,s);else for(;l!==null;){if(l.tag===3){ap(l,e,s);break}else if(l.tag===1){var i=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ti===null||!ti.has(i))){e=ut(s,e),e=kc(l,e,1),l=si(l,e,1),e=kl(),l!==null&&(Et(l,1,e),Jl(l,e));break}}l=l.return}}function mf(e,l,s){var i=e.pingCache;i!==null&&i.delete(l),l=kl(),e.pingedLanes|=e.suspendedLanes&s,cl===e&&(gl&s)===s&&(ul===4||ul===3&&(gl&130023424)===gl&&500>Be()-tu?Ii(e,0):iu|=s),Jl(e,l)}function op(e,l){l===0&&((e.mode&1)===0?l=1:(l=Cl,Cl<<=1,(Cl&130023424)===0&&(Cl=4194304)));var s=kl();e=zs(e,l),e!==null&&(Et(e,l,s),Jl(e,s))}function hf(e){var l=e.memoizedState,s=0;l!==null&&(s=l.retryLane),op(e,s)}function _f(e,l){var s=0;switch(e.tag){case 13:var i=e.stateNode,n=e.memoizedState;n!==null&&(s=n.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(o(314))}i!==null&&i.delete(l),op(e,s)}var up;up=function(e,l,s){if(e!==null)if(e.memoizedProps!==l.pendingProps||Ll.current)Gl=!0;else{if((e.lanes&s)===0&&(l.flags&128)===0)return Gl=!1,tf(e,l,s);Gl=(e.flags&131072)!==0}else Gl=!1,Ye&&(l.flags&1048576)!==0&&Rr(l,Wn,l.index);switch(l.lanes=0,l.tag){case 2:var i=l.type;oa(e,l),e=l.pendingProps;var n=et(l,_l.current);at(l,s),n=qo(null,l,i,e,n,s);var u=Bo();return l.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(l.tag=1,l.memoizedState=null,l.updateQueue=null,Il(i)?(u=!0,Nn(l)):u=!1,l.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,Lo(l),n.updater=na,l.stateNode=n,n._reactInternals=l,Oo(l,i,e,s),l=Wo(null,l,i,!0,u,s)):(l.tag=0,Ye&&u&&jo(l),El(null,l,n,s),l=l.child),l;case 16:i=l.elementType;e:{switch(oa(e,l),e=l.pendingProps,n=i._init,i=n(i._payload),l.type=i,n=l.tag=Sf(i),e=as(i,e),n){case 0:l=Do(null,l,i,e,s);break e;case 1:l=Uc(null,l,i,e,s);break e;case 11:l=Ic(null,l,i,e,s);break e;case 14:l=Gc(null,l,i,as(i.type,e),s);break e}throw Error(o(306,i,""))}return l;case 0:return i=l.type,n=l.pendingProps,n=l.elementType===i?n:as(i,n),Do(e,l,i,n,s);case 1:return i=l.type,n=l.pendingProps,n=l.elementType===i?n:as(i,n),Uc(e,l,i,n,s);case 3:e:{if(qc(l),e===null)throw Error(o(387));i=l.pendingProps,u=l.memoizedState,n=u.element,Qr(e,l),Xn(l,i,null,s);var d=l.memoizedState;if(i=d.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},l.updateQueue.baseState=u,l.memoizedState=u,l.flags&256){n=ut(Error(o(423)),l),l=Bc(e,l,i,s,n);break e}else if(i!==n){n=ut(Error(o(424)),l),l=Bc(e,l,i,s,n);break e}else for(Al=Ys(l.stateNode.containerInfo.firstChild),Bl=l,Ye=!0,ns=null,s=Vr(l,null,i,s),l.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(it(),i===n){l=qs(e,l,s);break e}El(e,l,i,s)}l=l.child}return l;case 5:return Zr(l),e===null&&wo(l),i=l.type,n=l.pendingProps,u=e!==null?e.memoizedProps:null,d=n.children,po(i,n)?d=null:u!==null&&po(i,u)&&(l.flags|=32),zc(e,l),El(e,l,d,s),l.child;case 6:return e===null&&wo(l),null;case 13:return Ac(e,l,s);case 4:return Io(l,l.stateNode.containerInfo),i=l.pendingProps,e===null?l.child=tt(l,null,i,s):El(e,l,i,s),l.child;case 11:return i=l.type,n=l.pendingProps,n=l.elementType===i?n:as(i,n),Ic(e,l,i,n,s);case 7:return El(e,l,l.pendingProps,s),l.child;case 8:return El(e,l,l.pendingProps.children,s),l.child;case 12:return El(e,l,l.pendingProps.children,s),l.child;case 10:e:{if(i=l.type._context,n=l.pendingProps,u=l.memoizedProps,d=n.value,$e(Kn,i._currentValue),i._currentValue=d,u!==null)if(ts(u.value,d)){if(u.children===n.children&&!Ll.current){l=qs(e,l,s);break e}}else for(u=l.child,u!==null&&(u.return=l);u!==null;){var h=u.dependencies;if(h!==null){d=u.child;for(var v=h.firstContext;v!==null;){if(v.context===i){if(u.tag===1){v=Us(-1,s&-s),v.tag=2;var z=u.updateQueue;if(z!==null){z=z.shared;var O=z.pending;O===null?v.next=v:(v.next=O.next,O.next=v),z.pending=v}}u.lanes|=s,v=u.alternate,v!==null&&(v.lanes|=s),bo(u.return,s,l),h.lanes|=s;break}v=v.next}}else if(u.tag===10)d=u.type===l.type?null:u.child;else if(u.tag===18){if(d=u.return,d===null)throw Error(o(341));d.lanes|=s,h=d.alternate,h!==null&&(h.lanes|=s),bo(d,s,l),d=u.sibling}else d=u.child;if(d!==null)d.return=u;else for(d=u;d!==null;){if(d===l){d=null;break}if(u=d.sibling,u!==null){u.return=d.return,d=u;break}d=d.return}u=d}El(e,l,n.children,s),l=l.child}return l;case 9:return n=l.type,i=l.pendingProps.children,at(l,s),n=Dl(n),i=i(n),l.flags|=1,El(e,l,i,s),l.child;case 14:return i=l.type,n=as(i,l.pendingProps),n=as(i.type,n),Gc(e,l,i,n,s);case 15:return Pc(e,l,l.type,l.pendingProps,s);case 17:return i=l.type,n=l.pendingProps,n=l.elementType===i?n:as(i,n),oa(e,l),l.tag=1,Il(i)?(e=!0,Nn(l)):e=!1,at(l,s),xc(l,i,n),Oo(l,i,n,s),Wo(null,l,i,!0,e,s);case 19:return Hc(e,l,s);case 22:return Jc(e,l,s)}throw Error(o(156,l.tag))};function rp(e,l){return Re(e,l)}function jf(e,l,s,i){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vl(e,l,s,i){return new jf(e,l,s,i)}function du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sf(e){if(typeof e=="function")return du(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xe)return 11;if(e===Me)return 14}return 2}function ui(e,l){var s=e.alternate;return s===null?(s=Vl(e.tag,l,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=l,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&14680064,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,l=e.dependencies,s.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s}function ja(e,l,s,i,n,u){var d=2;if(i=e,typeof e=="function")du(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case Ce:return Pi(s.children,n,u,l);case L:d=8,n|=8;break;case ke:return e=Vl(12,s,l,n|2),e.elementType=ke,e.lanes=u,e;case Ge:return e=Vl(13,s,l,n),e.elementType=Ge,e.lanes=u,e;case Pe:return e=Vl(19,s,l,n),e.elementType=Pe,e.lanes=u,e;case de:return Sa(s,n,u,l);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fe:d=10;break e;case Ne:d=9;break e;case xe:d=11;break e;case Me:d=14;break e;case Oe:d=16,i=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return l=Vl(d,s,l,n),l.elementType=e,l.type=i,l.lanes=u,l}function Pi(e,l,s,i){return e=Vl(7,e,i,l),e.lanes=s,e}function Sa(e,l,s,i){return e=Vl(22,e,i,l),e.elementType=de,e.lanes=s,e.stateNode={isHidden:!1},e}function gu(e,l,s){return e=Vl(6,e,null,l),e.lanes=s,e}function fu(e,l,s){return l=Vl(4,e.children!==null?e.children:[],e.key,l),l.lanes=s,l.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},l}function vf(e,l,s,i,n){this.tag=l,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ta(0),this.expirationTimes=Ta(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ta(0),this.identifierPrefix=i,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function mu(e,l,s,i,n,u,d,h,v){return e=new vf(e,l,s,h,v),l===1?(l=1,u===!0&&(l|=8)):l=0,u=Vl(3,null,null,l),e.current=u,u.stateNode=e,u.memoizedState={element:i,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lo(u),e}function wf(e,l,s){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ve,key:i==null?null:""+i,children:e,containerInfo:l,implementation:s}}function cp(e){if(!e)return Zs;e=e._reactInternals;e:{if(Y(e)!==e||e.tag!==1)throw Error(o(170));var l=e;do{switch(l.tag){case 3:l=l.stateNode.context;break e;case 1:if(Il(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break e}}l=l.return}while(l!==null);throw Error(o(171))}if(e.tag===1){var s=e.type;if(Il(s))return Mr(e,s,l)}return l}function pp(e,l,s,i,n,u,d,h,v){return e=mu(s,i,!0,e,n,u,d,h,v),e.context=cp(null),s=e.current,i=kl(),n=ai(s),u=Us(i,n),u.callback=l??null,si(s,u,n),e.current.lanes=n,Et(e,n,i),Jl(e,i),e}function va(e,l,s,i){var n=l.current,u=kl(),d=ai(n);return s=cp(s),l.context===null?l.context=s:l.pendingContext=s,l=Us(u,d),l.payload={element:e},i=i===void 0?null:i,i!==null&&(l.callback=i),e=si(n,l,d),e!==null&&(rs(e,n,d,u),Yn(e,n,d)),d}function wa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function dp(e,l){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<l?s:l}}function hu(e,l){dp(e,l),(e=e.alternate)&&dp(e,l)}function xf(){return null}var gp=typeof reportError=="function"?reportError:function(e){console.error(e)};function _u(e){this._internalRoot=e}xa.prototype.render=_u.prototype.render=function(e){var l=this._internalRoot;if(l===null)throw Error(o(409));va(e,l,null,null)},xa.prototype.unmount=_u.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var l=e.containerInfo;Li(function(){va(null,e,null,null)}),l[Is]=null}};function xa(e){this._internalRoot=e}xa.prototype.unstable_scheduleHydration=function(e){if(e){var l=Qu();e={blockedOn:null,target:e,priority:l};for(var s=0;s<Vs.length&&l!==0&&l<Vs[s].priority;s++);Vs.splice(s,0,e),s===0&&Zu(e)}};function ju(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ya(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fp(){}function yf(e,l,s,i,n){if(n){if(typeof i=="function"){var u=i;i=function(){var z=wa(d);u.call(z)}}var d=pp(l,i,e,0,null,!1,!1,"",fp);return e._reactRootContainer=d,e[Is]=d.current,Mt(e.nodeType===8?e.parentNode:e),Li(),d}for(;n=e.lastChild;)e.removeChild(n);if(typeof i=="function"){var h=i;i=function(){var z=wa(v);h.call(z)}}var v=mu(e,0,!1,null,null,!1,!1,"",fp);return e._reactRootContainer=v,e[Is]=v.current,Mt(e.nodeType===8?e.parentNode:e),Li(function(){va(l,v,s,i)}),v}function Ea(e,l,s,i,n){var u=s._reactRootContainer;if(u){var d=u;if(typeof n=="function"){var h=n;n=function(){var v=wa(d);h.call(v)}}va(l,d,e,n)}else d=yf(s,l,e,n,i);return wa(d)}Vu=function(e){switch(e.tag){case 3:var l=e.stateNode;if(l.current.memoizedState.isDehydrated){var s=Ns(l.pendingLanes);s!==0&&(Ra(l,s|1),Jl(l,Be()),(He&6)===0&&(pt=Be()+500,ei()))}break;case 13:Li(function(){var i=zs(e,1);if(i!==null){var n=kl();rs(i,e,1,n)}}),hu(e,1)}},Oa=function(e){if(e.tag===13){var l=zs(e,134217728);if(l!==null){var s=kl();rs(l,e,134217728,s)}hu(e,134217728)}},Ku=function(e){if(e.tag===13){var l=ai(e),s=zs(e,l);if(s!==null){var i=kl();rs(s,e,l,i)}hu(e,l)}},Qu=function(){return De},Yu=function(e,l){var s=De;try{return De=e,l()}finally{De=s}},Ti=function(e,l,s){switch(l){case"input":if(bl(e,s),l=s.name,s.type==="radio"&&l!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+l)+'][type="radio"]'),l=0;l<s.length;l++){var i=s[l];if(i!==e&&i.form===e.form){var n=Rn(i);if(!n)throw Error(o(90));Je(i),bl(i,n)}}}break;case"textarea":wn(e,s);break;case"select":l=s.value,l!=null&&As(e,!!s.multiple,l,!1)}},En=ru,xt=Li;var Ef={usingClientEntryPoint:!1,Events:[Rt,Xi,Rn,yn,wt,ru]},ln={findFiberByHostInstance:vi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kf={bundleType:ln.bundleType,version:ln.version,rendererPackageName:ln.rendererPackageName,rendererConfig:ln.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=re(e),e===null?null:e.stateNode},findFiberByHostInstance:ln.findFiberByHostInstance||xf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ka.isDisabled&&ka.supportsFiber)try{Os=ka.inject(kf),al=ka}catch{}}return zl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ef,zl.createPortal=function(e,l){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ju(l))throw Error(o(200));return wf(e,l,null,s)},zl.createRoot=function(e,l){if(!ju(e))throw Error(o(299));var s=!1,i="",n=gp;return l!=null&&(l.unstable_strictMode===!0&&(s=!0),l.identifierPrefix!==void 0&&(i=l.identifierPrefix),l.onRecoverableError!==void 0&&(n=l.onRecoverableError)),l=mu(e,1,!1,null,null,s,!1,i,n),e[Is]=l.current,Mt(e.nodeType===8?e.parentNode:e),new _u(l)},zl.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var l=e._reactInternals;if(l===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=re(l),e=e===null?null:e.stateNode,e},zl.flushSync=function(e){return Li(e)},zl.hydrate=function(e,l,s){if(!ya(l))throw Error(o(200));return Ea(null,e,l,!0,s)},zl.hydrateRoot=function(e,l,s){if(!ju(e))throw Error(o(405));var i=s!=null&&s.hydratedSources||null,n=!1,u="",d=gp;if(s!=null&&(s.unstable_strictMode===!0&&(n=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),l=pp(l,null,e,1,s??null,n,!1,u,d),e[Is]=l.current,Mt(e),i)for(e=0;e<i.length;e++)s=i[e],n=s._getVersion,n=n(s._source),l.mutableSourceEagerHydrationData==null?l.mutableSourceEagerHydrationData=[s,n]:l.mutableSourceEagerHydrationData.push(s,n);return new xa(l)},zl.render=function(e,l,s){if(!ya(l))throw Error(o(200));return Ea(null,e,l,!1,s)},zl.unmountComponentAtNode=function(e){if(!ya(e))throw Error(o(40));return e._reactRootContainer?(Li(function(){Ea(null,null,e,!1,function(){e._reactRootContainer=null,e[Is]=null})}),!0):!1},zl.unstable_batchedUpdates=ru,zl.unstable_renderSubtreeIntoContainer=function(e,l,s,i){if(!ya(s))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Ea(e,l,s,!1,i)},zl.version="18.3.1-next-f1338f8080-20240426",zl}var Xp;function Dd(){if(Xp)return bu.exports;Xp=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(a){console.error(a)}}return t(),bu.exports=i_(),bu.exports}var t_=Dd();function n_(t){return C.createElement(hh,{flushSync:t_.flushSync,...t})}var Ia={},Zp;function a_(){if(Zp)return Ia;Zp=1;var t=Dd();return Ia.createRoot=t.createRoot,Ia.hydrateRoot=t.hydrateRoot,Ia}var o_=a_();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),r_=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,o,r)=>r?r.toUpperCase():o.toLowerCase()),ed=t=>{const a=r_(t);return a.charAt(0).toUpperCase()+a.slice(1)},Wd=(...t)=>t.filter((a,o,r)=>!!a&&a.trim()!==""&&r.indexOf(a)===o).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var c_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=C.forwardRef(({color:t="currentColor",size:a=24,strokeWidth:o=2,absoluteStrokeWidth:r,className:c="",children:p,iconNode:g,...f},m)=>C.createElement("svg",{ref:m,...c_,width:a,height:a,stroke:t,strokeWidth:r?Number(o)*24/Number(a):o,className:Wd("lucide",c),...f},[...g.map(([_,E])=>C.createElement(_,E)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=(t,a)=>{const o=C.forwardRef(({className:r,...c},p)=>C.createElement(p_,{ref:p,iconNode:a,className:Wd(`lucide-${u_(ed(t))}`,`lucide-${t}`,r),...c}));return o.displayName=ed(t),o};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ld=fi("check",d_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],f_=fi("chevron-left",g_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],sd=fi("heart",m_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=[["path",{d:"M5 12h14",key:"1ays0h"}]],__=fi("minus",h_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],S_=fi("plus",j_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]],id=fi("shopping-bag",v_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],x_=fi("star",w_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],E_=fi("trash-2",y_),k_="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function on(t){const[a,o]=C.useState(!1),r=()=>{o(!0)},{src:c,alt:p,style:g,className:f,...m}=t;return a?b.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${f??""}`,style:g,children:b.jsx("div",{className:"flex items-center justify-center w-full h-full",children:b.jsx("img",{src:k_,alt:"Error loading image",...m,"data-original-url":c})})}):b.jsx("img",{src:c,alt:p,className:f,style:g,...m,onError:r})}const b_=`id,TITLE,DESCRIPTION,PRICE,CURRENCY_CODE,QUANTITY,TAGS,MATERIALS,IMAGE1,IMAGE2,IMAGE3,IMAGE4,IMAGE5,IMAGE6,IMAGE7,IMAGE8,IMAGE9,IMAGE10,condition,availability,root links,item_group_id,shape,length\r
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
`,td=["Square","Oval","Stiletto","Coffin","Almond"];function nd(t){const a=[];let o="",r=!1;for(let c=0;c<t.length;c++){const p=t[c];p==='"'?r&&t[c+1]==='"'?(o+='"',c++):r=!r:p===","&&!r?(a.push(o),o=""):o+=p}return a.push(o),a}function C_(t){const a=[];let o="",r=!1;for(let c=0;c<t.length;c++){const p=t[c];p==='"'?(r&&t[c+1]==='"'?(o+='"',c++):r=!r,o+=p):(p===`
`||p==="\r")&&!r?(p==="\r"&&t[c+1]===`
`&&c++,o.trim()&&a.push(o),o=""):o+=p}return o.trim()&&a.push(o),a}function L_(){const t=C_(b_),a=nd(t[0]).map(c=>c.trim()),o=(c,p)=>{var f;const g=a.indexOf(p);return g>=0?((f=c[g])==null?void 0:f.trim())??"":""},r=[];for(let c=1;c<t.length;c++){const p=nd(t[c]),g=o(p,"id");if(!g||o(p,"availability")==="out of stock")continue;const f=o(p,"item_group_id")||g,m=o(p,"TITLE"),_=parseFloat(o(p,"PRICE"))||0,E=o(p,"DESCRIPTION").replace(/\n/g," ").replace(/\s+/g," ").trim(),J=["IMAGE1","IMAGE2","IMAGE3","IMAGE4","IMAGE5","IMAGE6","IMAGE7","IMAGE8","IMAGE9","IMAGE10"].map(L=>(o(p,L)||"").trim()).filter(Boolean),U=J[0]||"",H=J.slice(1),A=o(p,"TAGS"),q=A?A.split(",").map(L=>L.trim()).filter(Boolean):[],D=o(p,"VARIATION 1 TYPE")||o(p,"VARIATION 2 TYPE"),K=o(p,"VARIATION 1 NAME")||o(p,"VARIATION 2 NAME"),X=o(p,"VARIATION 1 VALUES")||o(p,"VARIATION 2 VALUES");let pe=td;K==="Nail Shapes"&&X?pe=X.split(",").map(L=>L.trim()).filter(Boolean):(D||K)&&(pe=td);const ue=o(p,"shape"),ve=o(p,"length"),Ce=ve.charAt(0).toUpperCase()+ve.slice(1).toLowerCase();r.push({id:g,groupId:f,name:m,price:_,description:E,image:U,extraImages:H,shapes:pe,tags:q,shape:ue,length:Ce})}return r}const un={firstName:"",lastName:"",email:"",phone:"",address:"",instagram:"",city:"",postcode:"",nailSizes:"",notes:""},ad=new Set(["JUICEGELS-0301"]),I_="meta_shops",pi=L_(),G_=pi.filter((t,a,o)=>a===o.findIndex(r=>r.groupId===t.groupId));function P_(t){return t.map(a=>`${encodeURIComponent(a.product.id)}:${encodeURIComponent(String(a.quantity))}`).join(",")}function J_(t,a){if(t.length===0)return"/basket";const o=[`products=${P_(t)}`];return a!=null&&a.includeCoupon&&o.push(a.coupon?`coupon=${encodeURIComponent(a.coupon)}`:"coupon"),a!=null&&a.cartOrigin&&o.push(`cart_origin=${encodeURIComponent(a.cartOrigin)}`),`/basket?${o.join("&")}`}function od(t,a){return t.split(",").map(o=>{const[r,c]=o.split(":"),p=decodeURIComponent(r??"").trim(),g=Math.max(1,Number(decodeURIComponent(c??"1"))),f=a.find(m=>m.id===p);return!f||Number.isNaN(g)?null:{product:f,shape:f.shape,length:f.length,quantity:g}}).filter(Boolean)}function ud(t,a){return t.split(",").map(o=>{const[r,c,p,g]=o.split("|"),f=decodeURIComponent(r??"").trim(),m=decodeURIComponent(c??"").trim(),_=decodeURIComponent(p??"Medium"),E=Math.max(1,Number(decodeURIComponent(g??"1"))),S=a.find(J=>J.id===f);return!S||!m||Number.isNaN(E)?null:{product:S,shape:m,length:_,quantity:E}}).filter(Boolean)}function gt(){const t=ks(),a=Md(),o=Ym(),r=C.useMemo(()=>new URLSearchParams(t.search),[t.search]),c=C.useMemo(()=>t.pathname.replace(/\/+$/,"")||"/",[t.pathname]),[p,g]=C.useState("home"),[f,m]=C.useState(null),[_,E]=C.useState(""),[S,J]=C.useState("Medium"),[U,H]=C.useState([]),[A,q]=C.useState(()=>{if(typeof window>"u")return[];try{return JSON.parse(localStorage.getItem("juicegels_cart")??"[]")}catch{return[]}}),[D,K]=C.useState(()=>{if(typeof window>"u")return un;try{return JSON.parse(localStorage.getItem("juicegels_form")??"null")??un}catch{return un}}),[X,pe]=C.useState({}),[ue,ve]=C.useState(0),[Ce,L]=C.useState(null),[ke,fe]=C.useState(!1),Ne=k=>J_(k,{coupon:r.get("coupon"),includeCoupon:r.has("coupon")||k.length>0,cartOrigin:r.get("cart_origin")??I_});C.useEffect(()=>{const k=(()=>{if(!t.search.startsWith("?/"))return"";const[ie]=t.search.slice(1).split("&");return ie.startsWith("/")?ie:`/${ie}`})(),$=r.get("checkout")==="success"||r.has("session_id"),we=r.get("items"),Je=r.get("products");if(c==="/confirmation"||c==="/checkout-success"||k==="/confirmation"||k==="/checkout-success"||c==="/"&&$){if(we){const ie=ud(we,pi);ie.length>0&&q(ie)}else if(Je){const ie=od(Je,pi);ie.length>0&&q(ie)}g("confirmation");return}if(c==="/basket"){const ie=new URLSearchParams(t.search),Xe=ie.get("products"),Tl=ie.get("items");if(Xe!==null)q(od(Xe,pi));else if(Tl){const Rl=ud(Tl,pi);Rl.length>0&&q(Rl)}g("basket");return}if(c==="/"){g("home");return}if(c.startsWith("/product/")&&o.id){const ie=pi.find(Xe=>Xe.id===o.id);if(ie){if(Oe(ie)){m(ie),E(ie.shape),J(ie.length),ve(0),g("product");return}const Xe=new URLSearchParams(t.search),Tl=Xe.get("shape")??"",Rl=Xe.get("length")??"",bl=de(ie),mi=N(ie),hi=bl.includes(Tl)?Tl:bl[0]??"",ps=mi.includes(Rl)?Rl:mi[0]??"Medium";m(ie),E(hi),J(ps),ve(0),g("product");return}}g("home")},[t.search,c,o.id,pi,r]),C.useEffect(()=>{if(p!=="product"||!f||!_||!S)return;const k=new URLSearchParams(t.search),$=k.get("shape")??"",we=k.get("length")??"";$===_&&we===S||Q(f.id,_,S)},[p,f,_,S]);const xe=A.reduce((k,$)=>k+$.product.price*$.quantity,0),Ge=A.reduce((k,$)=>k+$.quantity,0);C.useEffect(()=>{typeof window>"u"||localStorage.setItem("juicegels_cart",JSON.stringify(A))},[A]),C.useEffect(()=>{typeof window>"u"||localStorage.setItem("juicegels_form",JSON.stringify(D))},[D]);const Pe=k=>H($=>$.includes(k)?$.filter(we=>we!==k):[...$,k]),Me=["Short","Medium","Long"],Oe=k=>ad.has(k.id),de=k=>{const $=k.shapes;return Array.isArray($)&&$.length>0?$:["Short Almond","Medium Almond","Long Almond"]},N=k=>{const $=k.lengths;return Array.isArray($)&&$.length>0?$:Me},Q=(k,$,we)=>{if(ad.has(k)){a(`/product/${k}`,{replace:!0});return}const Je=new URLSearchParams;$&&Je.set("shape",$),we&&Je.set("length",we),a(`/product/${k}?${Je.toString()}`,{replace:!0})},V=k=>{const $=de(k),we=N(k),Je=Oe(k)?k.shape:$[0]??"",ie=Oe(k)?k.length:we[0]??"Medium";if(m(k),E(Je),J(ie),ve(0),g("product"),Oe(k)){a(`/product/${k.id}`);return}a(`/product/${k.id}?shape=${encodeURIComponent(Je)}&length=${encodeURIComponent(ie)}`)},y=()=>{!f||!_||!S||q(k=>{const $=k.findIndex(Je=>Je.product.id===f.id&&Je.shape===_&&Je.length===S);let we;return $>=0?(we=[...k],we[$]={...we[$],quantity:we[$].quantity+1}):we=[...k,{product:f,shape:_,length:S,quantity:1}],a(Ne(we)),we})},B=(k,$,we)=>pi.find(Je=>Je.groupId===k&&Je.shape===$&&Je.length===we),ce=(k,$)=>{q(we=>{const Je=[...we],ie=Je[k].quantity+$;let Xe;return ie<=0?Xe=Je.filter((Tl,Rl)=>Rl!==k):(Je[k]={...Je[k],quantity:ie},Xe=Je),a(Ne(Xe)),Xe})},me=k=>{q($=>{const we=$.filter((Je,ie)=>ie!==k);return a(Ne(we)),we})},ge=(k,$)=>{K(we=>({...we,[k]:$})),X[k]&&pe(we=>({...we,[k]:""}))},he=()=>{const k={};return D.firstName.trim()||(k.firstName="Required"),D.lastName.trim()||(k.lastName="Required"),(!D.email.trim()||!/\S+@\S+\.\S+/.test(D.email))&&(k.email="Valid email required"),D.phone.trim()||(k.phone="Required"),D.address.trim()||(k.address="Required"),D.city.trim()||(k.city="Required"),D.instagram.trim()||(k.instagram="Required"),D.postcode.trim()||(k.postcode="Required"),pe(k),Object.keys(k).length===0},Le=async k=>{if(k.preventDefault(),!he())return;if(A.length===0){L("Your basket is empty.");return}L(null),fe(!0);const $="https://juicegels-v2.onrender.com/create-checkout-session";try{const we=await fetch($,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:A.map(ie=>({product:{id:ie.product.id,name:ie.product.name,price:ie.product.price,description:ie.product.description,image:ie.product.image},shape:ie.shape,length:ie.length,quantity:ie.quantity})),form:D,checkoutPath:"/confirmation"})}),Je=await we.json();if(!we.ok||!Je.url)throw new Error(Je.error||"Failed to create checkout session.");window.location.href=Je.url}catch(we){L(we instanceof Error?we.message:"Checkout failed."),fe(!1)}},qe=()=>{p==="preorder"?g("basket"):p==="basket"?g(f?"product":"home"):a("/home")};return b.jsxs("div",{style:{fontFamily:"'DM Sans', sans-serif",maxWidth:430,margin:"0 auto",minHeight:"100vh",background:"var(--background)"},children:[b.jsxs("header",{style:{background:"var(--card)",borderBottom:"1px solid var(--border)",position:"sticky",top:0,zIndex:50,padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[p!=="home"?b.jsx("button",{onClick:qe,style:{color:"var(--primary)",background:"none",border:"none",cursor:"pointer",padding:4},"aria-label":"Back",children:b.jsx(f_,{size:22})}):b.jsx("div",{style:{width:30}}),b.jsx("h1",{style:{fontFamily:"'Playfair Display', serif",color:"var(--primary)",margin:0,letterSpacing:"0.04em",fontSize:22},children:"Juice Gels"}),b.jsxs("button",{onClick:()=>a(Ne(A)),style:{position:"relative",background:"none",border:"none",cursor:"pointer",padding:4},"aria-label":"Basket",children:[b.jsx(id,{size:22,style:{color:"var(--primary)"}}),Ge>0&&b.jsx("span",{style:{position:"absolute",top:-4,right:-4,background:"var(--primary)",color:"#fff",borderRadius:"50%",width:17,height:17,fontSize:10,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700},children:Ge})]})]}),(p==="basket"||p==="preorder"||p==="confirmation")&&b.jsx("div",{style:{display:"flex",padding:"10px 20px",gap:6,alignItems:"center",background:"var(--card)",borderBottom:"1px solid var(--border)"},children:["Basket","Details","Done"].map((k,$)=>{const we=p==="basket"&&$===0||p==="preorder"&&$===1||p==="confirmation"&&$===2,Je=p==="preorder"&&$===0||p==="confirmation"&&$<=1;return b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,flex:$<2?1:void 0},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5},children:[b.jsx("div",{style:{width:22,height:22,borderRadius:"50%",background:Je?"var(--primary)":we?"var(--accent)":"var(--muted)",border:`2px solid ${we||Je?"var(--primary)":"var(--border)"}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:Je?b.jsx(ld,{size:11,color:"#fff"}):b.jsx("span",{style:{fontSize:10,color:we?"var(--foreground)":"var(--muted-foreground)",fontWeight:600},children:$+1})}),b.jsx("span",{style:{fontSize:11,color:we?"var(--foreground)":"var(--muted-foreground)",fontWeight:we?600:400},children:k})]}),$<2&&b.jsx("div",{style:{flex:1,height:1.5,background:Je?"var(--primary)":"var(--border)",borderRadius:2}})]},k)})}),p==="home"&&b.jsxs("main",{children:[b.jsxs("div",{style:{background:"linear-gradient(160deg, #f9d5e0 0%, #fce4ea 60%, #fdf2f4 100%)",padding:"28px 20px 22px",textAlign:"center"},children:[b.jsx("p",{style:{color:"var(--muted-foreground)",margin:"0 0 5px",letterSpacing:"0.12em",fontSize:11,textTransform:"uppercase"},children:"Handmade Press-On Nails"}),b.jsx("h2",{style:{fontFamily:"'Playfair Display', serif",fontSize:30,color:"var(--foreground)",margin:"0 0 8px",lineHeight:1.2},children:"Nail the Look ✨"}),b.jsx("p",{style:{color:"var(--muted-foreground)",margin:"0 0 4px",fontSize:13,lineHeight:1.6},children:"Custom-fit gel press-ons · Send your nail sizes for a perfect fit"})]}),b.jsx("div",{style:{padding:"16px 14px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:G_.map(k=>b.jsxs("button",{onClick:()=>V(k),style:{background:"var(--card)",border:"1px solid var(--border)",borderRadius:14,overflow:"hidden",textAlign:"left",cursor:"pointer",padding:0,position:"relative",display:"block",width:"100%"},children:[b.jsx("button",{onClick:$=>{$.stopPropagation(),Pe(k.id)},style:{position:"absolute",top:7,right:7,background:"rgba(255,255,255,0.88)",border:"none",borderRadius:"50%",width:28,height:28,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:2},"aria-label":"Wishlist",children:b.jsx(sd,{size:13,fill:U.includes(k.id)?"var(--primary)":"none",stroke:U.includes(k.id)?"var(--primary)":"var(--muted-foreground)"})}),b.jsx(on,{src:k.image,alt:k.name,style:{width:"100%",height:160,objectFit:"cover",display:"block",background:"var(--secondary)"}}),b.jsxs("div",{style:{padding:"8px 10px 10px"},children:[b.jsx("p",{style:{margin:"0 0 5px",fontSize:12,color:"var(--foreground)",lineHeight:1.3},children:k.name}),b.jsxs("span",{style:{color:"var(--primary)",fontWeight:600,fontSize:14},children:["£",k.price.toFixed(2)]})]})]},k.id))}),b.jsxs("div",{style:{margin:"4px 14px 32px",background:"var(--secondary)",borderRadius:14,padding:"16px 18px",textAlign:"center"},children:[b.jsx("p",{style:{fontFamily:"'Playfair Display', serif",color:"var(--foreground)",margin:"0 0 3px",fontSize:16},children:"Need your nail sizes?"}),b.jsx("p",{style:{color:"var(--muted-foreground)",margin:0,fontSize:12},children:"Pick up the Nail Sizing Guide — £4 deducted from your first set 🌸"})]})]}),p==="product"&&f&&b.jsxs("main",{children:[b.jsx(on,{src:[f.image,...f.extraImages][ue],alt:f.name,style:{width:"100%",height:320,objectFit:"contain",display:"block",background:"var(--secondary)"}}),f.extraImages.length>0&&b.jsx("div",{style:{display:"flex",gap:8,padding:"10px 16px 0",overflowX:"auto"},children:[f.image,...f.extraImages].map((k,$)=>b.jsx("button",{onClick:()=>ve($),style:{flexShrink:0,border:`2px solid ${ue===$?"var(--primary)":"var(--border)"}`,borderRadius:8,overflow:"hidden",padding:0,cursor:"pointer",background:"none"},children:b.jsx(on,{src:k,alt:"",style:{width:52,height:52,objectFit:"contain",display:"block",background:"var(--secondary)"}})},$))}),b.jsxs("div",{style:{padding:"16px 20px 130px"},children:[b.jsx("h2",{style:{fontFamily:"'Playfair Display', serif",margin:"0 0 4px",fontSize:22,color:"var(--foreground)"},children:f.name}),b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,marginBottom:10},children:[[1,2,3,4,5].map(k=>b.jsx(x_,{size:12,fill:"var(--primary)",stroke:"none"},k)),b.jsx("span",{style:{fontSize:12,color:"var(--muted-foreground)",marginLeft:3},children:"Handmade · In stock"})]}),b.jsxs("span",{style:{fontSize:24,fontWeight:700,color:"var(--primary)"},children:["£",f.price.toFixed(2)]}),b.jsx("p",{style:{color:"var(--muted-foreground)",fontSize:13,lineHeight:1.7,margin:"12px 0 18px"},children:f.description}),Oe(f)?null:b.jsxs(b.Fragment,{children:[b.jsx("p",{style:{margin:"0 0 8px",fontSize:13,fontWeight:600,color:"var(--foreground)"},children:"Nail Shape"}),b.jsx("div",{style:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:20},children:f.shapes.map(k=>b.jsx("button",{onClick:()=>{if(!f)return;const $=B(f.groupId,k,S);$&&(m($),E(k),J($.length))},style:{border:`1.5px solid ${_===k?"var(--primary)":"var(--border)"}`,background:_===k?"var(--primary)":"var(--card)",color:_===k?"#fff":"var(--foreground)",borderRadius:8,padding:"6px 14px",fontSize:12,cursor:"pointer",transition:"all 0.15s"},children:k},k))}),b.jsx("p",{style:{margin:"0 0 8px",fontSize:13,fontWeight:600,color:"var(--foreground)"},children:"Nail Length"}),b.jsx("div",{style:{display:"flex",gap:7,flexWrap:"wrap",marginBottom:20},children:["Short","Medium","Long"].map(k=>b.jsx("button",{onClick:()=>{if(!f)return;const $=B(f.groupId,_,k);$&&(m($),J(k),E($.shape))},style:{border:`1.5px solid ${S===k?"var(--primary)":"var(--border)"}`,background:S===k?"var(--primary)":"var(--card)",color:S===k?"#fff":"var(--foreground)",borderRadius:8,padding:"6px 14px",fontSize:12,cursor:"pointer",transition:"all 0.15s",textTransform:"capitalize"},children:k},k))})]}),Oe(f)?null:b.jsxs("div",{style:{background:"var(--muted)",borderRadius:10,padding:"10px 14px",fontSize:12,color:"var(--muted-foreground)",lineHeight:1.5},children:["🌸 Send your nail sizes after ordering via ",b.jsx("strong",{children:"@juicegels"})," on Instagram or through your order notes."]})]}),b.jsxs("div",{style:{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:430,padding:"14px 18px",background:"var(--card)",borderTop:"1px solid var(--border)",display:"flex",gap:10,boxSizing:"border-box"},children:[b.jsx("button",{onClick:()=>Pe(f.id),style:{border:"1.5px solid var(--border)",background:"var(--card)",borderRadius:12,width:46,height:46,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",flexShrink:0},children:b.jsx(sd,{size:17,fill:U.includes(f.id)?"var(--primary)":"none",stroke:U.includes(f.id)?"var(--primary)":"var(--muted-foreground)"})}),b.jsx("button",{onClick:y,disabled:!_||!S,style:{flex:1,background:_&&S?"var(--primary)":"var(--muted)",color:_&&S?"#fff":"var(--muted-foreground)",border:"none",borderRadius:12,height:46,fontWeight:600,fontSize:14,cursor:_&&S?"pointer":"not-allowed",transition:"all 0.15s"},children:_&&S?"Add to Basket":"Select shape and length"})]})]}),p==="basket"&&b.jsxs("main",{style:{padding:"16px 16px 100px"},children:[b.jsx("h2",{style:{fontFamily:"'Playfair Display', serif",fontSize:20,color:"var(--foreground)",margin:"0 0 14px"},children:"Your Basket"}),A.length===0?b.jsxs("div",{style:{textAlign:"center",padding:"48px 20px"},children:[b.jsx(id,{size:40,style:{color:"var(--muted-foreground)",marginBottom:12}}),b.jsx("p",{style:{color:"var(--muted-foreground)",fontSize:14},children:"Your basket is empty"}),b.jsx("button",{onClick:()=>a("/"),style:{marginTop:16,background:"var(--primary)",color:"#fff",border:"none",borderRadius:10,padding:"10px 24px",fontSize:14,fontWeight:600,cursor:"pointer"},children:"Browse Sets"})]}):b.jsxs(b.Fragment,{children:[b.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10,marginBottom:16},children:A.map((k,$)=>b.jsxs("div",{style:{background:"var(--card)",border:"1px solid var(--border)",borderRadius:14,padding:"12px",display:"flex",gap:12,alignItems:"center"},children:[b.jsx(on,{src:k.product.image,alt:k.product.name,style:{width:64,height:64,borderRadius:10,objectFit:"cover",flexShrink:0,background:"var(--secondary)"}}),b.jsxs("div",{style:{flex:1,minWidth:0},children:[b.jsx("p",{style:{margin:"0 0 2px",fontSize:13,fontWeight:500,color:"var(--foreground)",lineHeight:1.3},children:k.product.name}),b.jsxs("p",{style:{margin:"0 0 6px",fontSize:11,color:"var(--muted-foreground)"},children:["Shape: ",k.shape]}),b.jsxs("p",{style:{margin:"0 0 6px",fontSize:11,color:"var(--muted-foreground)"},children:["Length: ",k.length]}),b.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:1},children:[b.jsx("button",{onClick:()=>ce($,-1),style:{width:26,height:26,borderRadius:6,border:"1px solid var(--border)",background:"var(--muted)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:b.jsx(__,{size:12})}),b.jsx("span",{style:{minWidth:28,textAlign:"center",fontSize:13,fontWeight:600},children:k.quantity}),b.jsx("button",{onClick:()=>ce($,1),style:{width:26,height:26,borderRadius:6,border:"1px solid var(--border)",background:"var(--muted)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:b.jsx(S_,{size:12})})]}),b.jsxs("span",{style:{color:"var(--primary)",fontWeight:700,fontSize:14},children:["£",(k.product.price*k.quantity).toFixed(2)]})]})]}),b.jsx("button",{onClick:()=>me($),style:{background:"none",border:"none",cursor:"pointer",padding:4,flexShrink:0},children:b.jsx(E_,{size:15,style:{color:"var(--muted-foreground)"}})})]},`${k.product.id}-${k.shape}`))}),b.jsxs("div",{style:{background:"var(--secondary)",borderRadius:14,padding:"14px 16px",marginBottom:14},children:[b.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,marginBottom:6},children:[b.jsxs("span",{style:{color:"var(--muted-foreground)"},children:["Subtotal (",Ge," item",Ge!==1?"s":"",")"]}),b.jsxs("span",{children:["£",xe.toFixed(2)]})]}),b.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,marginBottom:8},children:[b.jsx("span",{style:{color:"var(--muted-foreground)"},children:"Delivery"}),b.jsx("span",{style:{color:"var(--primary)"},children:"Free"})]}),b.jsxs("div",{style:{borderTop:"1px solid var(--border)",paddingTop:8,display:"flex",justifyContent:"space-between",fontWeight:700,fontSize:15},children:[b.jsx("span",{children:"Total"}),b.jsxs("span",{children:["£",xe.toFixed(2)]})]})]}),b.jsxs("div",{style:{background:"var(--muted)",borderRadius:10,padding:"10px 14px",fontSize:12,color:"var(--muted-foreground)",lineHeight:1.5,marginBottom:4},children:["💅 Remember to send your nail sizes after ordering via ",b.jsx("strong",{children:"@juicegels"})," on Instagram or in your order notes."]})]})]}),A.length>0&&p==="basket"&&b.jsxs("div",{style:{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:430,padding:"14px 18px",background:"var(--card)",borderTop:"1px solid var(--border)",display:"flex",gap:10,boxSizing:"border-box"},children:[b.jsx("button",{onClick:()=>a("/"),style:{border:"1.5px solid var(--border)",background:"var(--card)",borderRadius:12,height:46,padding:"0 16px",fontSize:13,fontWeight:500,cursor:"pointer",flexShrink:0},children:"+ Add more"}),b.jsxs("button",{onClick:()=>{K(un),pe({}),g("preorder")},style:{flex:1,background:"var(--primary)",color:"#fff",border:"none",borderRadius:12,height:46,fontWeight:600,fontSize:14,cursor:"pointer"},children:["Pre-order · £",xe.toFixed(2)]})]}),p==="preorder"&&b.jsxs("main",{style:{padding:"18px 18px 48px"},children:[b.jsx("h2",{style:{fontFamily:"'Playfair Display', serif",fontSize:20,color:"var(--foreground)",margin:"0 0 4px"},children:"Your Details"}),b.jsxs("p",{style:{color:"var(--muted-foreground)",fontSize:12,margin:"0 0 18px"},children:[Ge," item",Ge!==1?"s":""," · £",xe.toFixed(2)," total"]}),b.jsxs("form",{onSubmit:Le,noValidate:!0,style:{display:"flex",flexDirection:"column",gap:13},children:[b.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},children:[b.jsx(Ss,{label:"First name",error:X.firstName,children:b.jsx("input",{type:"text",placeholder:"Sophie",value:D.firstName,onChange:k=>ge("firstName",k.target.value),style:vs(!!X.firstName)})}),b.jsx(Ss,{label:"Last name",error:X.lastName,children:b.jsx("input",{type:"text",placeholder:"Wright",value:D.lastName,onChange:k=>ge("lastName",k.target.value),style:vs(!!X.lastName)})})]}),b.jsx(Ss,{label:"Email address",error:X.email,children:b.jsx("input",{type:"email",placeholder:"sophie@example.com",value:D.email,onChange:k=>ge("email",k.target.value),style:vs(!!X.email)})}),b.jsx(Ss,{label:"Phone number",error:X.phone,children:b.jsx("input",{type:"tel",placeholder:"+44 7700 900000",value:D.phone,onChange:k=>ge("phone",k.target.value),style:vs(!!X.phone)})}),b.jsx(Ss,{label:"Delivery address",error:X.address,children:b.jsx("input",{type:"text",placeholder:"12 Petal Lane",value:D.address,onChange:k=>ge("address",k.target.value),style:vs(!!X.address)})}),b.jsx(Ss,{label:"Instagram username",error:X.instagram,children:b.jsx("input",{type:"text",placeholder:"@juicegels",value:D.instagram,onChange:k=>ge("instagram",k.target.value),style:vs(!!X.instagram)})}),b.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},children:[b.jsx(Ss,{label:"City",error:X.city,children:b.jsx("input",{type:"text",placeholder:"London",value:D.city,onChange:k=>ge("city",k.target.value),style:vs(!!X.city)})}),b.jsx(Ss,{label:"Postcode",error:X.postcode,children:b.jsx("input",{type:"text",placeholder:"SW1A 1AA",value:D.postcode,onChange:k=>ge("postcode",k.target.value),style:vs(!!X.postcode)})})]}),b.jsxs(Ss,{label:"Your nail sizes (e.g. R: 3,5,4,6,4 · L: 3,5,4,6,4)",children:[b.jsx("input",{type:"text",placeholder:"Right: 3,5,4,6,4  Left: 3,5,4,6,4",value:D.nailSizes,onChange:k=>ge("nailSizes",k.target.value),style:vs(!1)}),b.jsx("span",{style:{fontSize:11,color:"var(--muted-foreground)",lineHeight:1.4},children:"Not sure? Order the Nail Sizing Guide first — or send your sizes via @juicegels on Instagram after ordering."})]}),b.jsx(Ss,{label:"Additional notes (optional)",children:b.jsx("textarea",{placeholder:"Any special requests, colour preferences, or custom details...",value:D.notes,onChange:k=>ge("notes",k.target.value),rows:3,style:{...vs(!1),resize:"none"}})}),b.jsxs("div",{style:{background:"var(--secondary)",borderRadius:13,padding:"13px 15px",fontSize:13,lineHeight:1.7,color:"var(--foreground)"},children:[b.jsx("strong",{style:{display:"block",marginBottom:6},children:"Order Summary"}),A.map((k,$)=>b.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,color:"var(--muted-foreground)"},children:[b.jsxs("span",{children:[k.product.name," (",k.shape,") ×",k.quantity]}),b.jsxs("span",{children:["£",(k.product.price*k.quantity).toFixed(2)]})]},$)),b.jsxs("div",{style:{borderTop:"1px solid var(--border)",marginTop:8,paddingTop:8,display:"flex",justifyContent:"space-between",fontWeight:700},children:[b.jsx("span",{children:"Total"}),b.jsxs("span",{children:["£",xe.toFixed(2)]})]})]}),b.jsx("button",{type:"submit",disabled:ke,style:{background:ke?"var(--border)":"var(--primary)",color:"#fff",border:"none",borderRadius:12,height:48,fontWeight:600,fontSize:14,cursor:ke?"not-allowed":"pointer",letterSpacing:"0.02em"},children:ke?"Redirecting to Stripe...":"Confirm Pre-order 🌸"}),Ce&&b.jsx("p",{style:{color:"var(--destructive)",fontSize:12,marginTop:10},children:Ce})]})]}),p==="confirmation"&&b.jsxs("main",{style:{padding:"44px 22px",textAlign:"center"},children:[b.jsx("div",{style:{width:68,height:68,borderRadius:"50%",background:"var(--secondary)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 18px"},children:b.jsx(ld,{size:30,style:{color:"var(--primary)"}})}),b.jsx("h2",{style:{fontFamily:"'Playfair Display', serif",fontSize:24,color:"var(--foreground)",margin:"0 0 8px"},children:"Order Placed!"}),b.jsxs("p",{style:{color:"var(--muted-foreground)",fontSize:13,lineHeight:1.7,margin:"0 0 6px"},children:["Thank you, ",b.jsx("strong",{children:D.firstName}),"! Your pre-order of ",Ge," item",Ge!==1?"s":""," is confirmed."]}),b.jsxs("p",{style:{color:"var(--muted-foreground)",fontSize:12,margin:"0 0 24px",lineHeight:1.5},children:["A confirmation will be sent to ",b.jsx("strong",{children:D.email}),".",b.jsx("br",{}),!D.nailSizes&&b.jsxs("span",{style:{color:"var(--primary)"},children:["📏 Don't forget to DM your nail sizes to ",b.jsx("strong",{children:"@juicegels"})," on Instagram!"]})]}),b.jsxs("div",{style:{background:"var(--secondary)",borderRadius:13,padding:"14px",textAlign:"left",marginBottom:14},children:[b.jsx("p",{style:{margin:"0 0 8px",fontWeight:600,fontSize:13},children:"Items ordered"}),A.map((k,$)=>b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[b.jsx(on,{src:k.product.image,alt:k.product.name,style:{width:40,height:40,borderRadius:7,objectFit:"cover",background:"var(--muted)"}}),b.jsxs("div",{children:[b.jsx("p",{style:{margin:0,fontSize:12,fontWeight:500,color:"var(--foreground)"},children:k.product.name}),b.jsxs("p",{style:{margin:0,fontSize:11,color:"var(--muted-foreground)"},children:[k.shape," · ×",k.quantity," · £",(k.product.price*k.quantity).toFixed(2)]})]})]},$))]}),b.jsxs("div",{style:{background:"var(--card)",border:"1px solid var(--border)",borderRadius:13,padding:"14px",textAlign:"left",marginBottom:24},children:[b.jsx("p",{style:{margin:"0 0 5px",fontWeight:600,fontSize:13},children:"Delivering to"}),b.jsxs("p",{style:{margin:0,fontSize:12,color:"var(--muted-foreground)",lineHeight:1.6},children:[D.firstName," ",D.lastName,b.jsx("br",{}),D.address,b.jsx("br",{}),D.city,", ",D.postcode]})]}),b.jsx("button",{onClick:()=>{a("/"),q([]),K(un)},style:{background:"var(--primary)",color:"#fff",border:"none",borderRadius:12,height:46,width:"100%",fontWeight:600,fontSize:14,cursor:"pointer"},children:"Continue Shopping"})]})]})}function Ss({label:t,error:a,children:o}){return b.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[b.jsx("label",{style:{fontSize:11,fontWeight:600,color:"var(--foreground)",letterSpacing:"0.03em",textTransform:"uppercase"},children:t}),o,a&&b.jsx("span",{style:{fontSize:11,color:"var(--destructive)"},children:a})]})}function vs(t){return{background:"var(--input-background)",border:`1.5px solid ${t?"var(--destructive)":"var(--border)"}`,borderRadius:9,padding:"10px 13px",fontSize:14,color:"var(--foreground)",outline:"none",width:"100%",boxSizing:"border-box"}}const z_=Nh([{path:"/",element:b.jsx(gt,{})},{path:"/home",element:b.jsx(gt,{})},{path:"/basket",element:b.jsx(gt,{})},{path:"/product/:id",element:b.jsx(gt,{})},{path:"/confirmation",element:b.jsx(gt,{})},{path:"*",element:b.jsx(gt,{})}]);o_.createRoot(document.getElementById("root")).render(b.jsx(n_,{router:z_}));
