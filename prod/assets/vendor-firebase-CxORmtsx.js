const ze=()=>{};var re={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be=function(t){const e=[];let r=0;for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);s<128?e[r++]=s:s<2048?(e[r++]=s>>6|192,e[r++]=s&63|128):(s&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++n)&1023),e[r++]=s>>18|240,e[r++]=s>>12&63|128,e[r++]=s>>6&63|128,e[r++]=s&63|128):(e[r++]=s>>12|224,e[r++]=s>>6&63|128,e[r++]=s&63|128)}return e},Ue=function(t){const e=[];let r=0,n=0;for(;r<t.length;){const s=t[r++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[r++];e[n++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[r++],i=t[r++],a=t[r++],c=((s&7)<<18|(o&63)<<12|(i&63)<<6|a&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const o=t[r++],i=t[r++];e[n++]=String.fromCharCode((s&15)<<12|(o&63)<<6|i&63)}}return e.join("")},q={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<t.length;s+=3){const o=t[s],i=s+1<t.length,a=i?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,p=o>>2,u=(o&3)<<4|a>>4;let v=(a&15)<<2|l>>6,R=l&63;c||(R=64,i||(v=64)),n.push(r[p],r[u],r[v],r[R])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(be(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ue(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<t.length;){const o=r[t.charAt(s++)],a=s<t.length?r[t.charAt(s)]:0;++s;const l=s<t.length?r[t.charAt(s)]:64;++s;const u=s<t.length?r[t.charAt(s)]:64;if(++s,o==null||a==null||l==null||u==null)throw new Ve;const v=o<<2|a>>4;if(n.push(v),l!==64){const R=a<<4&240|l>>2;if(n.push(R),u!==64){const Fe=l<<6&192|u;n.push(Fe)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ve extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const je=function(t){const e=be(t);return q.encodeByteArray(e,!0)},Ee=function(t){return je(t).replace(/\./g,"")},We=function(t){try{return q.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke=()=>_e().__FIREBASE_DEFAULTS__,Ge=()=>{if(typeof process>"u"||typeof re>"u")return;const t=re.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qe=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&We(t[1]);return e&&JSON.parse(e)},Je=()=>{try{return ze()||Ke()||Ge()||qe()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},we=()=>{var t;return(t=Je())==null?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,n))}}}function J(){try{return typeof indexedDB=="object"}catch{return!1}}function Xe(){return new Promise((t,e)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),r||self.indexedDB.deleteDatabase(n),t(!0)},s.onupgradeneeded=()=>{r=!1},s.onerror=()=>{var o;e(((o=s.error)==null?void 0:o.message)||"")}}catch(r){e(r)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="FirebaseError";class S extends Error{constructor(e,r,n){super(r),this.code=e,this.customData=n,this.name=Ye,Object.setPrototypeOf(this,S.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,X.prototype.create)}}class X{constructor(e,r,n){this.service=e,this.serviceName=r,this.errors=n}create(e,...r){const n=r[0]||{},s=`${this.service}/${e}`,o=this.errors[e],i=o?Ze(o,n):"Error",a=`${this.serviceName}: ${i} (${s}).`;return new S(s,a,n)}}function Ze(t,e){try{let r=0,n="";for(;r<t.length;){const s=t.indexOf("{$",r);if(s===-1){n+=t.substring(r);break}const o=t.indexOf("}",s+2);if(o===-1){n+=t.substring(r);break}const i=t.substring(s+2,o),a=e[i];n+=t.substring(r,s)+(a!=null?String(a):`<${i}?>`),r=o+1}return n}catch{return t}}function z(t,e){if(t===e)return!0;const r=Object.keys(t),n=Object.keys(e);for(const s of r){if(!n.includes(s))return!1;const o=t[s],i=e[s];if(ne(o)&&ne(i)){if(!z(o,i))return!1}else if(o!==i)return!1}for(const s of n)if(!r.includes(s))return!1;return!0}function ne(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe=1e3,et=2,tt=14400*1e3,rt=.5;function nt(t,e=Qe,r=et){const n=e*Math.pow(r,t),s=Math.round(rt*n*(Math.random()-.5)*2);return Math.min(tt,n+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t){return t&&t._delegate?t._delegate:t}class y{constructor(e,r,n){this.name=e,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const n=new I;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:r});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(at(e))try{this.getOrInitializeService({instanceIdentifier:_})}catch{}for(const[r,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(r);try{const o=this.getOrInitializeService({instanceIdentifier:s});n.resolve(o)}catch{}}}}clearInstance(e=_){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_){return this.instances.has(e)}getOptions(e=_){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:r});for(const[o,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);n===a&&i.resolve(s)}return s}onInit(e,r){const n=this.normalizeInstanceIdentifier(r),s=this.onInitCallbacks.get(n)??new Set;s.add(e),this.onInitCallbacks.set(n,s);const o=this.instances.get(n);return o&&e(o,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,r){const n=this.onInitCallbacks.get(r);if(n)for(const s of n)try{s(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:it(e),options:r}),this.instances.set(e,n),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=_){return this.component?this.component.multipleInstances?e:_:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function it(t){return t===_?void 0:t}function at(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new ot(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var h;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(h||(h={}));const lt={debug:h.DEBUG,verbose:h.VERBOSE,info:h.INFO,warn:h.WARN,error:h.ERROR,silent:h.SILENT},ht=h.INFO,dt={[h.DEBUG]:"log",[h.VERBOSE]:"log",[h.INFO]:"info",[h.WARN]:"warn",[h.ERROR]:"error"},ut=(t,e,...r)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),s=dt[e];if(s)console[s](`[${n}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ye{constructor(e){this.name=e,this._logLevel=ht,this._logHandler=ut,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in h))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,h.DEBUG,...e),this._logHandler(this,h.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,h.VERBOSE,...e),this._logHandler(this,h.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,h.INFO,...e),this._logHandler(this,h.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,h.WARN,...e),this._logHandler(this,h.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,h.ERROR,...e),this._logHandler(this,h.ERROR,...e)}}const ft=(t,e)=>e.some(r=>t instanceof r);let se,oe;function pt(){return se||(se=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gt(){return oe||(oe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ae=new WeakMap,U=new WeakMap,Ie=new WeakMap,M=new WeakMap,Y=new WeakMap;function mt(t){const e=new Promise((r,n)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{r(E(t.result)),s()},i=()=>{n(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",i)});return e.then(r=>{r instanceof IDBCursor&&Ae.set(r,t)}).catch(()=>{}),Y.set(e,t),e}function bt(t){if(U.has(t))return;const e=new Promise((r,n)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{r(),s()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)});U.set(t,e)}let V={get(t,e,r){if(t instanceof IDBTransaction){if(e==="done")return U.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ie.get(t);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return E(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Et(t){V=t(V)}function _t(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const n=t.call(N(this),e,...r);return Ie.set(n,e.sort?e.sort():[e]),E(n)}:gt().includes(t)?function(...e){return t.apply(N(this),e),E(Ae.get(this))}:function(...e){return E(t.apply(N(this),e))}}function wt(t){return typeof t=="function"?_t(t):(t instanceof IDBTransaction&&bt(t),ft(t,pt())?new Proxy(t,V):t)}function E(t){if(t instanceof IDBRequest)return mt(t);if(M.has(t))return M.get(t);const e=wt(t);return e!==t&&(M.set(t,e),Y.set(e,t)),e}const N=t=>Y.get(t);function yt(t,e,{blocked:r,upgrade:n,blocking:s,terminated:o}={}){const i=indexedDB.open(t,e),a=E(i);return n&&i.addEventListener("upgradeneeded",c=>{n(E(i.result),c.oldVersion,c.newVersion,E(i.transaction),c)}),r&&i.addEventListener("blocked",c=>r(c.oldVersion,c.newVersion,c)),a.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const At=["get","getKey","getAll","getAllKeys","count"],It=["put","add","delete","clear"],x=new Map;function ie(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(x.get(e))return x.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,s=It.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(s||At.includes(r)))return;const o=async function(i,...a){const c=this.transaction(i,s?"readwrite":"readonly");let l=c.store;return n&&(l=l.index(a.shift())),(await Promise.all([l[r](...a),s&&c.done]))[0]};return x.set(e,o),o}Et(t=>({...t,get:(e,r,n)=>ie(e,r)||t.get(e,r,n),has:(e,r)=>!!ie(e,r)||t.has(e,r)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(Ct(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function Ct(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const j="@firebase/app",ae="0.16.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m=new ye("@firebase/app"),Dt="@firebase/app-compat",kt="@firebase/analytics-compat",St="@firebase/analytics",vt="@firebase/app-check-compat",Rt="@firebase/app-check",Bt="@firebase/auth",Pt="@firebase/auth-compat",$t="@firebase/database",Ot="@firebase/data-connect",Mt="@firebase/database-compat",Nt="@firebase/functions",xt="@firebase/functions-compat",Lt="@firebase/installations",Ht="@firebase/installations-compat",Ft="@firebase/messaging",zt="@firebase/messaging-compat",Ut="@firebase/performance",Vt="@firebase/performance-compat",jt="@firebase/remote-config",Wt="@firebase/remote-config-compat",Kt="@firebase/storage",Gt="@firebase/storage-compat",qt="@firebase/firestore",Jt="@firebase/ai",Xt="@firebase/firestore-compat",Yt="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W="[DEFAULT]",Zt={[j]:"fire-core",[Dt]:"fire-core-compat",[St]:"fire-analytics",[kt]:"fire-analytics-compat",[Rt]:"fire-app-check",[vt]:"fire-app-check-compat",[Bt]:"fire-auth",[Pt]:"fire-auth-compat",[$t]:"fire-rtdb",[Ot]:"fire-data-connect",[Mt]:"fire-rtdb-compat",[Nt]:"fire-fn",[xt]:"fire-fn-compat",[Lt]:"fire-iid",[Ht]:"fire-iid-compat",[Ft]:"fire-fcm",[zt]:"fire-fcm-compat",[Ut]:"fire-perf",[Vt]:"fire-perf-compat",[jt]:"fire-rc",[Wt]:"fire-rc-compat",[Kt]:"fire-gcs",[Gt]:"fire-gcs-compat",[qt]:"fire-fst",[Xt]:"fire-fst-compat",[Jt]:"fire-vertex","fire-js":"fire-js",[Yt]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=new Map,Qt=new Map,K=new Map;function ce(t,e){try{t.container.addComponent(e)}catch(r){m.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function C(t){const e=t.name;if(K.has(e))return m.debug(`There were multiple attempts to register component ${e}.`),!1;K.set(e,t);for(const r of T.values())ce(r,t);for(const r of Qt.values())ce(r,t);return!0}function Te(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},g=new X("app","Firebase",er);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,r,n){this._isDeleted=!1,this._options={...e},this._config={...r},this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new y("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw g.create("app-deleted",{appName:this._name})}}function rr(t,e={}){let r=t;typeof e!="object"&&(e={name:e});const n={name:W,automaticDataCollectionEnabled:!0,...e},s=n.name;if(typeof s!="string"||!s)throw g.create("bad-app-name",{appName:String(s)});if(r||(r=we()),!r)throw g.create("no-options");const o=T.get(s);if(o)if(z(r,o.options)){if(z(n,o.config))return o;throw g.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(o.config),newValue:JSON.stringify(n)})}else throw g.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(o.options),newValue:JSON.stringify(r)});const i=new ct(s);for(const c of K.values())i.addComponent(c);const a=new tr(r,n,i);return T.set(s,a),a}function nr(t=W){const e=T.get(t);if(!e&&t===W&&we())return rr();if(!e)throw g.create("no-app",{appName:t});return e}function en(){return Array.from(T.values())}function A(t,e,r){let n=Zt[t]??t;r&&(n+=`-${r}`);const s=n.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const i=[`Unable to register library "${n}" with version "${e}":`];s&&i.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&o&&i.push("and"),o&&i.push(`version name "${e}" contains illegal characters (whitespace or "/")`),m.warn(i.join(" "));return}C(new y(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr="firebase-heartbeat-database",or=1,D="firebase-heartbeat-store";let L=null;function Ce(){return L||(L=yt(sr,or,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(D)}catch(r){console.warn(r)}}}}).catch(t=>{throw g.create("idb-open",{originalErrorMessage:t.message})})),L}async function ir(t){try{const r=(await Ce()).transaction(D),n=await r.objectStore(D).get(De(t));return await r.done,n}catch(e){if(e instanceof S)m.warn(e.message);else{const r=g.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});m.warn(r.message)}}}async function le(t,e){try{const n=(await Ce()).transaction(D,"readwrite");await n.objectStore(D).put(e,De(t)),await n.done}catch(r){if(r instanceof S)m.warn(r.message);else{const n=g.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});m.warn(n.message)}}}function De(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=1024,cr=30;class lr{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new dr(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,r;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=he();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)==null?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(i=>i.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>cr){const i=ur(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){m.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=he(),{heartbeatsToSend:n,unsentEntries:s}=hr(this._heartbeatsCache.heartbeats),o=Ee(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=r,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(r){return m.warn(r),""}}}function he(){return new Date().toISOString().substring(0,10)}function hr(t,e=ar){const r=[];let n=t.slice();for(const s of t){const o=r.find(i=>i.agent===s.agent);if(o){if(o.dates.push(s.date),de(r)>e){o.dates.pop();break}}else if(r.push({agent:s.agent,dates:[s.date]}),de(r)>e){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class dr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return J()?Xe().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await ir(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return le(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return le(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function de(t){return Ee(JSON.stringify({version:2,heartbeats:t})).length}function ur(t){if(t.length===0)return-1;let e=0,r=t[0].date;for(let n=1;n<t.length;n++)t[n].date<r&&(r=t[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(t){C(new y("platform-logger",e=>new Tt(e),"PRIVATE")),C(new y("heartbeat",e=>new lr(e),"PRIVATE")),A(j,ae,t),A(j,ae,"esm2020"),A("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fr("");var pr="firebase",gr="13.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */A(pr,gr,"app");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=new Map,ke={activated:!1,tokenObservers:[]},mr={initialized:!1,enabled:!1};function d(t){return G.get(t)||{...ke}}function br(t,e){return G.set(t,e),G.get(t)}function O(){return mr}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se="https://content-firebaseappcheck.googleapis.com/v1",Er="exchangeRecaptchaEnterpriseToken",_r="exchangeDebugToken",ue={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:960*1e3},wr=1440*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,r,n,s,o){if(this.operation=e,this.retryPolicy=r,this.getWaitDuration=n,this.lowerBound=s,this.upperBound=o,this.pending=null,this.nextErrorWaitInterval=s,s>o)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new I,this.pending.promise.catch(r=>{}),await Ar(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new I,this.pending.promise.catch(r=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(r){this.retryPolicy(r)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const r=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),r}}}function Ar(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},f=new X("appCheck","AppCheck",Ir);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(t=!1){var e;return t?(e=self.grecaptcha)==null?void 0:e.enterprise:self.grecaptcha}function Z(t){if(!d(t).activated)throw f.create("use-before-activation",{appName:t.name})}function ve(t){const e=Math.round(t/1e3),r=Math.floor(e/(3600*24)),n=Math.floor((e-r*3600*24)/3600),s=Math.floor((e-r*3600*24-n*3600)/60),o=e-r*3600*24-n*3600-s*60;let i="";return r&&(i+=B(r)+"d:"),n&&(i+=B(n)+"h:"),i+=B(s)+"m:"+B(o)+"s",i}function B(t){return t===0?"00":t>=10?t.toString():"0"+t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q({url:t,body:e},r){const n={"Content-Type":"application/json"},s=r.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&(n["X-Firebase-Client"]=u)}const o={method:"POST",body:JSON.stringify(e),headers:n};let i;try{i=await fetch(t,o)}catch(u){throw f.create("fetch-network-error",{originalErrorMessage:u==null?void 0:u.message})}if(i.status!==200)throw f.create("fetch-status-error",{httpStatus:i.status});let a;try{a=await i.json()}catch(u){throw f.create("fetch-parse-error",{originalErrorMessage:u==null?void 0:u.message})}const c=a.ttl.match(/^([\d.]+)(s)$/);if(!c||!c[2]||isNaN(Number(c[1])))throw f.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${a.ttl}`});const l=Number(c[1])*1e3,p=Date.now();return{token:a.token,expireTimeMillis:p+l,issuedAtTimeMillis:p}}function Tr(t,e){const{projectId:r,appId:n,apiKey:s}=t.options;return{url:`${Se}/projects/${r}/apps/${n}:${Er}?key=${s}`,body:{recaptcha_enterprise_token:e}}}function Re(t,e){const{projectId:r,appId:n,apiKey:s}=t.options;return{url:`${Se}/projects/${r}/apps/${n}:${_r}?key=${s}`,body:{debug_token:e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="firebase-app-check-database",Dr=1,k="firebase-app-check-store",Be="debug-token";let P=null;function Pe(){return P||(P=new Promise((t,e)=>{try{const r=indexedDB.open(Cr,Dr);r.onsuccess=n=>{t(n.target.result)},r.onerror=n=>{var s;e(f.create("storage-open",{originalErrorMessage:(s=n.target.error)==null?void 0:s.message}))},r.onupgradeneeded=n=>{const s=n.target.result;switch(n.oldVersion){case 0:s.createObjectStore(k,{keyPath:"compositeKey"})}}}catch(r){e(f.create("storage-open",{originalErrorMessage:r==null?void 0:r.message}))}}),P)}function kr(t){return Oe(Me(t))}function Sr(t,e){return $e(Me(t),e)}function vr(t){return $e(Be,t)}function Rr(){return Oe(Be)}async function $e(t,e){const n=(await Pe()).transaction(k,"readwrite"),o=n.objectStore(k).put({compositeKey:t,value:e});return new Promise((i,a)=>{o.onsuccess=c=>{i()},n.onerror=c=>{var l;a(f.create("storage-set",{originalErrorMessage:(l=c.target.error)==null?void 0:l.message}))}})}async function Oe(t){const r=(await Pe()).transaction(k,"readonly"),s=r.objectStore(k).get(t);return new Promise((o,i)=>{s.onsuccess=a=>{const c=a.target.result;o(c?c.value:void 0)},r.onerror=a=>{var c;i(f.create("storage-get",{originalErrorMessage:(c=a.target.error)==null?void 0:c.message}))}})}function Me(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=new ye("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Br(t){if(J()){let e;try{e=await kr(t)}catch(r){b.warn(`Failed to read token from IndexedDB. Error: ${r}`)}return e}}function H(t,e){return J()?Sr(t,e).catch(r=>{b.warn(`Failed to write token to IndexedDB. Error: ${r}`)}):Promise.resolve()}async function Pr(t){let e;try{e=await Rr()}catch{}if(e)return e;{const r=crypto.randomUUID();let n=`To use this token for app debugging, register it with your project.

Firebase App Check debug token: ${r}

`;const s=t==null?void 0:t.options.appId,o=t==null?void 0:t.options.projectId;return o&&s?n+=`You can do so in the Firebase Console:
https://console.firebase.google.com/project/${o}/appcheck/apps?selectedAppId=${s}

Or using the Firebase CLI:
firebase appcheck:debugtokens:create ${r} --project ${o} --app ${s}

`:n+=`You will need to add it to your app's App Check settings in the Firebase Console for it to work.

`,n+=`Note: To keep your project secure, please revoke and delete this token using the
Firebase Console or the CLI (\`firebase appcheck:debugtokens:delete\`) when you finish debugging.

Warning: This debug token is a secret and should not be shared or uploaded to source code.

Debug Token Guide: https://firebase.google.com/docs/app-check/web/debug-provider
Firebase CLI install instructions: https://firebase.google.com/docs/cli
`,console.log(n),vr(r).catch(i=>b.warn(`Failed to persist debug token to IndexedDB. Error: ${i}`)),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(){return O().enabled}async function te(){const t=O();if(t.enabled&&t.token)return t.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function $r(t){const e=_e(),r=O();if(r.initialized=!0,typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&e.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;r.enabled=!0;const n=new I;r.token=n,typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?n.resolve(e.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(Pr(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or={error:"UNKNOWN_ERROR"};function Mr(t){return q.encodeString(JSON.stringify(t),!1)}async function $(t,e=!1,r=!1){const n=t.app;Z(n);const s=d(n);let o=s.token,i;if(o&&!w(o)&&(s.token=void 0,o=void 0),!o){const l=await s.cachedTokenPromise;l&&(w(l)?o=l:await H(n,void 0))}if(!e&&o&&w(o))return{token:o.token};let a=!1;if(ee())try{const l=await te();s.exchangeTokenPromise||(s.exchangeTokenPromise=Q(Re(n,l),t.heartbeatServiceProvider).finally(()=>{s.exchangeTokenPromise=void 0}),a=!0);const p=await s.exchangeTokenPromise;return await H(n,p),s.token=p,{token:p.token}}catch(l){return l.code==="appCheck/throttled"||l.code==="appCheck/initial-throttle"?b.warn(l.message):r&&b.error(l),F(l)}try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),a=!0),o=await d(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"||l.code==="appCheck/initial-throttle"?b.warn(l.message):r&&b.error(l),i=l}let c;return o?i?w(o)?c={token:o.token,internalError:i}:c=F(i):(c={token:o.token},s.token=o,await H(n,o)):c=F(i),a&&Le(n,c),c}async function Nr(t){const e=t.app;Z(e);const{provider:r}=d(e);if(ee()){const n=await te(),s=Re(e,n);s.body.limited_use=!0;const{token:o}=await Q(s,t.heartbeatServiceProvider);return{token:o}}else{const{token:n}=await r.getToken(!0);return{token:n}}}function Ne(t,e,r,n){const{app:s}=t,o=d(s),i={next:r,error:n,type:e};if(o.tokenObservers=[...o.tokenObservers,i],o.token&&w(o.token)){const a=o.token;Promise.resolve().then(()=>{r({token:a.token}),pe(t)}).catch(()=>{})}o.cachedTokenPromise.then(()=>pe(t))}function xe(t,e){const r=d(t),n=r.tokenObservers.filter(s=>s.next!==e);n.length===0&&r.tokenRefresher&&r.tokenRefresher.isRunning()&&r.tokenRefresher.stop(),r.tokenObservers=n}function pe(t){const{app:e}=t,r=d(e);let n=r.tokenRefresher;n||(n=xr(t),r.tokenRefresher=n),!n.isRunning()&&r.isTokenAutoRefreshEnabled&&n.start()}function xr(t){const{app:e}=t;return new yr(async()=>{const r=d(e);let n;if(r.token?n=await $(t,!0):n=await $(t),n.error)throw n.error;if(n.internalError)throw n.internalError},()=>!0,()=>{const r=d(e);if(r.token){let n=r.token.issuedAtTimeMillis+(r.token.expireTimeMillis-r.token.issuedAtTimeMillis)*.5+3e5;const s=r.token.expireTimeMillis-300*1e3;return n=Math.min(n,s),Math.max(0,n-Date.now())}else return 0},ue.RETRIAL_MIN_WAIT,ue.RETRIAL_MAX_WAIT)}function Le(t,e){const r=d(t).tokenObservers;for(const n of r)try{n.type==="EXTERNAL"&&e.error!=null?n.error(e.error):n.next(e)}catch{}}function w(t){return t.expireTimeMillis-Date.now()>0}function F(t){return{token:Mr(Or),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,r){this.app=e,this.heartbeatServiceProvider=r}_delete(){const{tokenObservers:e}=d(this.app);for(const r of e)xe(this.app,r.next);return Promise.resolve()}}function Hr(t,e){return new Lr(t,e)}function Fr(t){return{getToken:e=>$(t,e),getLimitedUseToken:()=>Nr(t),addTokenListener:e=>Ne(t,"INTERNAL",e),removeTokenListener:e=>xe(t.app,e)}}const zr="@firebase/app-check",Ur="0.13.1",Vr="https://www.google.com/recaptcha/enterprise.js";function jr(t,e){const r=new I,n=d(t);n.reCAPTCHAState={initialized:r};const s=Wr(t),o=fe(!0);return o?ge(t,e,o,s,r):qr(()=>{const i=fe(!0);if(!i)throw new Error("no recaptcha");ge(t,e,i,s,r)}),r.promise}function ge(t,e,r,n,s){r.ready(()=>{Gr(t,e,r,n),s.resolve(r)})}function Wr(t){const e=`fire_app_check_${t.name}`,r=document.createElement("div");return r.id=e,r.style.display="none",document.body.appendChild(r),e}async function Kr(t){Z(t);const r=await d(t).reCAPTCHAState.initialized.promise;return new Promise((n,s)=>{const o=d(t).reCAPTCHAState;r.ready(()=>{n(r.execute(o.widgetId,{action:"fire_app_check"}))})})}function Gr(t,e,r,n){const s=r.render(n,{sitekey:e,size:"invisible",callback:()=>{d(t).reCAPTCHAState.succeeded=!0},"error-callback":()=>{d(t).reCAPTCHAState.succeeded=!1}}),o=d(t);o.reCAPTCHAState={...o.reCAPTCHAState,widgetId:s}}function qr(t){const e=document.createElement("script");e.src=Vr+"?render=explicit",e.onload=t,document.head.appendChild(e)}class He{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(e=!1){var s,o,i;Xr(this._throttleData);const r=await Kr(this._app).catch(a=>{throw f.create("recaptcha-error")});if(!((s=d(this._app).reCAPTCHAState)!=null&&s.succeeded))throw f.create("recaptcha-error");let n;try{const a=Tr(this._app,r);e&&(a.body.limited_use=!0),n=await Q(a,this._heartbeatServiceProvider)}catch(a){throw(o=a.code)!=null&&o.includes("fetch-status-error")?(this._throttleData=Jr(Number((i=a.customData)==null?void 0:i.httpStatus),this._throttleData),f.create("initial-throttle",{time:ve(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):a}return this._throttleData=null,n}initialize(e){this._app=e,this._heartbeatServiceProvider=Te(e,"heartbeat"),jr(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof He?this._siteKey===e._siteKey:!1}}function Jr(t,e){if(t===404||t===403)return{backoffCount:1,allowRequestsAfter:Date.now()+wr,httpStatus:t};{const r=e?e.backoffCount:0,n=nt(r,1e3,2);return{backoffCount:r+1,allowRequestsAfter:Date.now()+n,httpStatus:t}}}function Xr(t){if(t&&Date.now()-t.allowRequestsAfter<=0)throw f.create("throttled",{time:ve(t.allowRequestsAfter-Date.now()),httpStatus:t.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t=nr(),e){var s;t=st(t);const r=Te(t,"app-check");if(O().initialized||$r(t),ee()&&te().then(o=>{console.log(`Firebase App Check debug token: ${o}`)}),r.isInitialized()){const o=r.getImmediate(),i=r.getOptions();if(i&&!!i.isTokenAutoRefreshEnabled==!!e.isTokenAutoRefreshEnabled&&((s=i.provider)!=null&&s.isEqual(e.provider)))return o;throw f.create("already-initialized",{appName:t.name})}const n=r.initialize({options:e});return Yr(t,e.provider,e.isTokenAutoRefreshEnabled),d(t).isTokenAutoRefreshEnabled&&Ne(n,"INTERNAL",()=>{}),n}function Yr(t,e,r=!1){const n=br(t,{...ke});n.activated=!0,n.provider=e,n.cachedTokenPromise=Br(t).then(s=>(s&&w(s)&&(n.token=s,Le(t,{token:s.token})),s)),n.isTokenAutoRefreshEnabled=r&&t.automaticDataCollectionEnabled,!t.automaticDataCollectionEnabled&&r&&b.warn("`isTokenAutoRefreshEnabled` is true but `automaticDataCollectionEnabled` was set to false during `initializeApp()`. This blocks automatic token refresh."),n.provider.initialize(t)}async function rn(t,e){const r=await $(t,e);if(r.error)throw r.error;if(r.internalError)throw r.internalError;return{token:r.token}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr="app-check",me="app-check-internal";function Qr(){C(new y(Zr,t=>{const e=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat");return Hr(e,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider(me).initialize()})),C(new y(me,t=>{const e=t.getProvider("app-check").getImmediate();return Fr(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),A(zr,Ur)}Qr();export{He as R,nr as a,tn as b,rn as c,en as g,rr as i};
