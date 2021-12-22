function xa(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const jy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qy=xa(jy);function oh(t){return!!t||t===""}function Ma(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=qe(r)?Ky(r):Ma(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(qe(t))return t;if(Oe(t))return t}}const Hy=/;(?![^(]*\))/g,zy=/:(.+)/;function Ky(t){const e={};return t.split(Hy).forEach(n=>{if(n){const r=n.split(zy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function kn(t){let e="";if(qe(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const r=kn(t[n]);r&&(e+=r+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Wy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ds(t[r],e[r]);return n}function ds(t,e){if(t===e)return!0;let n=ch(t),r=ch(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=W(t),r=W(e),n||r)return n&&r?Wy(t,e):!1;if(n=Oe(t),r=Oe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ds(t[o],e[o]))return!1}}return String(t)===String(e)}function La(t,e){return t.findIndex(n=>ds(n,e))}const Ri=t=>t==null?"":W(t)||Oe(t)&&(t.toString===hh||!ne(t.toString))?JSON.stringify(t,ah,2):String(t),ah=(t,e)=>e&&e.__v_isRef?ah(t,e.value):dr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:pr(e)?{[`Set(${e.size})`]:[...e.values()]}:Oe(e)&&!W(e)&&!fh(e)?String(e):e,ve={},fr=[],Pt=()=>{},Gy=()=>!1,Qy=/^on[^a-z]/,Ni=t=>Qy.test(t),Ua=t=>t.startsWith("onUpdate:"),je=Object.assign,lh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Yy=Object.prototype.hasOwnProperty,le=(t,e)=>Yy.call(t,e),W=Array.isArray,dr=t=>ki(t)==="[object Map]",pr=t=>ki(t)==="[object Set]",ch=t=>t instanceof Date,ne=t=>typeof t=="function",qe=t=>typeof t=="string",Fa=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",uh=t=>Oe(t)&&ne(t.then)&&ne(t.catch),hh=Object.prototype.toString,ki=t=>hh.call(t),Jy=t=>ki(t).slice(8,-1),fh=t=>ki(t)==="[object Object]",Va=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Oi=xa(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Di=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Xy=/-(\w)/g,Vt=Di(t=>t.replace(Xy,(e,n)=>n?n.toUpperCase():"")),Zy=/\B([A-Z])/g,On=Di(t=>t.replace(Zy,"-$1").toLowerCase()),Pi=Di(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ba=Di(t=>t?`on${Pi(t)}`:""),ps=(t,e)=>!Object.is(t,e),xi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Mi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},gs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let dh;const ev=()=>dh||(dh=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Dn;const Li=[];class tv{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Dn&&(this.parent=Dn,this.index=(Dn.scopes||(Dn.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(Li.push(this),Dn=this)}off(){this.active&&(Li.pop(),Dn=Li[Li.length-1])}stop(e){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function nv(t,e){e=e||Dn,e&&e.active&&e.effects.push(t)}const $a=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ph=t=>(t.w&sn)>0,gh=t=>(t.n&sn)>0,rv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=sn},sv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];ph(s)&&!gh(s)?s.delete(t):e[n++]=s,s.w&=~sn,s.n&=~sn}e.length=n}},ja=new WeakMap;let ms=0,sn=1;const qa=30,ys=[];let Pn;const xn=Symbol(""),Ha=Symbol("");class za{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],nv(this,r)}run(){if(!this.active)return this.fn();if(!ys.includes(this))try{return ys.push(Pn=this),iv(),sn=1<<++ms,ms<=qa?rv(this):mh(this),this.fn()}finally{ms<=qa&&sv(this),sn=1<<--ms,Mn(),ys.pop();const e=ys.length;Pn=e>0?ys[e-1]:void 0}}stop(){this.active&&(mh(this),this.onStop&&this.onStop(),this.active=!1)}}function mh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let gr=!0;const Ka=[];function mr(){Ka.push(gr),gr=!1}function iv(){Ka.push(gr),gr=!0}function Mn(){const t=Ka.pop();gr=t===void 0?!0:t}function wt(t,e,n){if(!yh())return;let r=ja.get(t);r||ja.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=$a()),vh(s)}function yh(){return gr&&Pn!==void 0}function vh(t,e){let n=!1;ms<=qa?gh(t)||(t.n|=sn,n=!ph(t)):n=!t.has(Pn),n&&(t.add(Pn),Pn.deps.push(t))}function Gt(t,e,n,r,s,i){const o=ja.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&W(t))o.forEach((l,c)=>{(c==="length"||c>=r)&&a.push(l)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":W(t)?Va(n)&&a.push(o.get("length")):(a.push(o.get(xn)),dr(t)&&a.push(o.get(Ha)));break;case"delete":W(t)||(a.push(o.get(xn)),dr(t)&&a.push(o.get(Ha)));break;case"set":dr(t)&&a.push(o.get(xn));break}if(a.length===1)a[0]&&Wa(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Wa($a(l))}}function Wa(t,e){for(const n of W(t)?t:[...t])(n!==Pn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const ov=xa("__proto__,__v_isRef,__isVue"),wh=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Fa)),av=Ga(),lv=Ga(!1,!0),cv=Ga(!0),Eh=uv();function uv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ce(this);for(let i=0,o=this.length;i<o;i++)wt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ce)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){mr();const r=ce(this)[e].apply(this,n);return Mn(),r}}),t}function Ga(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_raw"&&i===(t?e?Av:Nh:e?Rh:Ch).get(r))return r;const o=W(r);if(!t&&o&&le(Eh,s))return Reflect.get(Eh,s,i);const a=Reflect.get(r,s,i);return(Fa(s)?wh.has(s):ov(s))||(t||wt(r,"get",s),e)?a:st(a)?!o||!Va(s)?a.value:a:Oe(a)?t?kh(a):yr(a):a}}const hv=_h(),fv=_h(!0);function _h(t=!1){return function(n,r,s,i){let o=n[r];if(!t&&(s=ce(s),o=ce(o),!W(n)&&st(o)&&!st(s)))return o.value=s,!0;const a=W(n)&&Va(r)?Number(r)<n.length:le(n,r),l=Reflect.set(n,r,s,i);return n===ce(i)&&(a?ps(s,o)&&Gt(n,"set",r,s):Gt(n,"add",r,s)),l}}function dv(t,e){const n=le(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Gt(t,"delete",e,void 0),r}function pv(t,e){const n=Reflect.has(t,e);return(!Fa(e)||!wh.has(e))&&wt(t,"has",e),n}function gv(t){return wt(t,"iterate",W(t)?"length":xn),Reflect.ownKeys(t)}const Ih={get:av,set:hv,deleteProperty:dv,has:pv,ownKeys:gv},mv={get:cv,set(t,e){return!0},deleteProperty(t,e){return!0}},yv=je({},Ih,{get:lv,set:fv}),Qa=t=>t,Ui=t=>Reflect.getPrototypeOf(t);function Fi(t,e,n=!1,r=!1){t=t.__v_raw;const s=ce(t),i=ce(e);e!==i&&!n&&wt(s,"get",e),!n&&wt(s,"get",i);const{has:o}=Ui(s),a=r?Qa:n?Xa:vs;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Vi(t,e=!1){const n=this.__v_raw,r=ce(n),s=ce(t);return t!==s&&!e&&wt(r,"has",t),!e&&wt(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function Bi(t,e=!1){return t=t.__v_raw,!e&&wt(ce(t),"iterate",xn),Reflect.get(t,"size",t)}function bh(t){t=ce(t);const e=ce(this);return Ui(e).has.call(e,t)||(e.add(t),Gt(e,"add",t,t)),this}function Th(t,e){e=ce(e);const n=ce(this),{has:r,get:s}=Ui(n);let i=r.call(n,t);i||(t=ce(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?ps(e,o)&&Gt(n,"set",t,e):Gt(n,"add",t,e),this}function Sh(t){const e=ce(this),{has:n,get:r}=Ui(e);let s=n.call(e,t);s||(t=ce(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Gt(e,"delete",t,void 0),i}function Ah(){const t=ce(this),e=t.size!==0,n=t.clear();return e&&Gt(t,"clear",void 0,void 0),n}function $i(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ce(o),l=e?Qa:t?Xa:vs;return!t&&wt(a,"iterate",xn),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function ji(t,e,n){return function(...r){const s=this.__v_raw,i=ce(s),o=dr(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?Qa:e?Xa:vs;return!e&&wt(i,"iterate",l?Ha:xn),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function on(t){return function(...e){return t==="delete"?!1:this}}function vv(){const t={get(i){return Fi(this,i)},get size(){return Bi(this)},has:Vi,add:bh,set:Th,delete:Sh,clear:Ah,forEach:$i(!1,!1)},e={get(i){return Fi(this,i,!1,!0)},get size(){return Bi(this)},has:Vi,add:bh,set:Th,delete:Sh,clear:Ah,forEach:$i(!1,!0)},n={get(i){return Fi(this,i,!0)},get size(){return Bi(this,!0)},has(i){return Vi.call(this,i,!0)},add:on("add"),set:on("set"),delete:on("delete"),clear:on("clear"),forEach:$i(!0,!1)},r={get(i){return Fi(this,i,!0,!0)},get size(){return Bi(this,!0)},has(i){return Vi.call(this,i,!0)},add:on("add"),set:on("set"),delete:on("delete"),clear:on("clear"),forEach:$i(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ji(i,!1,!1),n[i]=ji(i,!0,!1),e[i]=ji(i,!1,!0),r[i]=ji(i,!0,!0)}),[t,n,e,r]}const[wv,Ev,_v,Iv]=vv();function Ya(t,e){const n=e?t?Iv:_v:t?Ev:wv;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(le(n,s)&&s in r?n:r,s,i)}const bv={get:Ya(!1,!1)},Tv={get:Ya(!1,!0)},Sv={get:Ya(!0,!1)},Ch=new WeakMap,Rh=new WeakMap,Nh=new WeakMap,Av=new WeakMap;function Cv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rv(t){return t.__v_skip||!Object.isExtensible(t)?0:Cv(Jy(t))}function yr(t){return t&&t.__v_isReadonly?t:Ja(t,!1,Ih,bv,Ch)}function Nv(t){return Ja(t,!1,yv,Tv,Rh)}function kh(t){return Ja(t,!0,mv,Sv,Nh)}function Ja(t,e,n,r,s){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Rv(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function vr(t){return Oh(t)?vr(t.__v_raw):!!(t&&t.__v_isReactive)}function Oh(t){return!!(t&&t.__v_isReadonly)}function Dh(t){return vr(t)||Oh(t)}function ce(t){const e=t&&t.__v_raw;return e?ce(e):t}function Ph(t){return Mi(t,"__v_skip",!0),t}const vs=t=>Oe(t)?yr(t):t,Xa=t=>Oe(t)?kh(t):t;function xh(t){yh()&&(t=ce(t),t.dep||(t.dep=$a()),vh(t.dep))}function Mh(t,e){t=ce(t),t.dep&&Wa(t.dep)}function st(t){return Boolean(t&&t.__v_isRef===!0)}function Bt(t){return Lh(t,!1)}function kv(t){return Lh(t,!0)}function Lh(t,e){return st(t)?t:new Ov(t,e)}class Ov{constructor(e,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ce(e),this._value=n?e:vs(e)}get value(){return xh(this),this._value}set value(e){e=this._shallow?e:ce(e),ps(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:vs(e),Mh(this))}}function ws(t){return st(t)?t.value:t}const Dv={get:(t,e,n)=>ws(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return st(s)&&!st(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Uh(t){return vr(t)?t:new Proxy(t,Dv)}class Pv{constructor(e,n){this._object=e,this._key=n,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e}}function qi(t,e){const n=t[e];return st(n)?n:new Pv(t,e)}class xv{constructor(e,n,r){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new za(e,()=>{this._dirty||(this._dirty=!0,Mh(this))}),this.__v_isReadonly=r}get value(){const e=ce(this);return xh(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function we(t,e){let n,r;const s=ne(t);return s?(n=t,r=Pt):(n=t.get,r=t.set),new xv(n,r,s||!r)}Promise.resolve();function Mv(t,e,...n){const r=t.vnode.props||ve;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||ve;f?s=n.map(g=>g.trim()):h&&(s=n.map(gs))}let a,l=r[a=Ba(e)]||r[a=Ba(Vt(e))];!l&&i&&(l=r[a=Ba(On(e))]),l&&kt(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,kt(c,t,6,s)}}function Fh(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ne(t)){const l=c=>{const u=Fh(c,e,!0);u&&(a=!0,je(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(r.set(t,null),null):(W(i)?i.forEach(l=>o[l]=null):je(o,i),r.set(t,o),o)}function Za(t,e){return!t||!Ni(e)?!1:(e=e.slice(2).replace(/Once$/,""),le(t,e[0].toLowerCase()+e.slice(1))||le(t,On(e))||le(t,e))}let Et=null,Vh=null;function Hi(t){const e=Et;return Et=t,Vh=t&&t.type.__scopeId||null,e}function el(t,e=Et,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&df(-1);const i=Hi(e),o=t(...s);return Hi(i),r._d&&df(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function tl(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:g,ctx:y,inheritAttrs:E}=t;let w,C;const P=Hi(t);try{if(n.shapeFlag&4){const K=s||r;w=jt(u.call(K,K,h,i,g,f,y)),C=l}else{const K=e;w=jt(K.length>1?K(i,{attrs:l,slots:a,emit:c}):K(i,null)),C=e.props?l:Lv(l)}}catch(K){_s.length=0,to(K,t,1),w=ze(xt)}let q=w;if(C&&E!==!1){const K=Object.keys(C),{shapeFlag:he}=q;K.length&&he&(1|6)&&(o&&K.some(Ua)&&(C=Uv(C,o)),q=wr(q,C))}return n.dirs&&(q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&(q.transition=n.transition),w=q,Hi(P),w}const Lv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ni(n))&&((e||(e={}))[n]=t[n]);return e},Uv=(t,e)=>{const n={};for(const r in t)(!Ua(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Fv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Bh(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Za(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Bh(r,o,c):!0:!!o;return!1}function Bh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Za(n,i))return!0}return!1}function Vv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Bv=t=>t.__isSuspense;function $v(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):Lw(t)}function Es(t,e){if(Fe){let n=Fe.provides;const r=Fe.parent&&Fe.parent.provides;r===n&&(n=Fe.provides=Object.create(r)),n[t]=e}}function Rt(t,e,n=!1){const r=Fe||Et;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ne(e)?e.call(r.proxy):e}}function jv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return al(()=>{t.isMounted=!0}),Wh(()=>{t.isUnmounting=!0}),t}const Nt=[Function,Array],qv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Nt,onEnter:Nt,onAfterEnter:Nt,onEnterCancelled:Nt,onBeforeLeave:Nt,onLeave:Nt,onAfterLeave:Nt,onLeaveCancelled:Nt,onBeforeAppear:Nt,onAppear:Nt,onAfterAppear:Nt,onAppearCancelled:Nt},setup(t,{slots:e}){const n=vf(),r=jv();let s;return()=>{const i=e.default&&Hh(e.default(),!0);if(!i||!i.length)return;const o=ce(t),{mode:a}=o,l=i[0];if(r.isLeaving)return rl(l);const c=qh(l);if(!c)return rl(l);const u=nl(c,o,r,n);sl(c,u);const h=n.subTree,f=h&&qh(h);let g=!1;const{getTransitionKey:y}=c.type;if(y){const E=y();s===void 0?s=E:E!==s&&(s=E,g=!0)}if(f&&f.type!==xt&&(!Vn(c,f)||g)){const E=nl(f,o,r,n);if(sl(f,E),a==="out-in")return r.isLeaving=!0,E.afterLeave=()=>{r.isLeaving=!1,n.update()},rl(l);a==="in-out"&&c.type!==xt&&(E.delayLeave=(w,C,P)=>{const q=jh(r,f);q[String(f.key)]=f,w._leaveCb=()=>{C(),w._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=P})}return l}}},$h=qv;function jh(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function nl(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:y,onBeforeAppear:E,onAppear:w,onAfterAppear:C,onAppearCancelled:P}=e,q=String(t.key),K=jh(n,t),he=(te,Ie)=>{te&&kt(te,r,9,Ie)},ge={mode:i,persisted:o,beforeEnter(te){let Ie=a;if(!n.isMounted)if(s)Ie=E||a;else return;te._leaveCb&&te._leaveCb(!0);const se=K[q];se&&Vn(t,se)&&se.el._leaveCb&&se.el._leaveCb(),he(Ie,[te])},enter(te){let Ie=l,se=c,fe=u;if(!n.isMounted)if(s)Ie=w||l,se=C||c,fe=P||u;else return;let ke=!1;const V=te._enterCb=Se=>{ke||(ke=!0,Se?he(fe,[te]):he(se,[te]),ge.delayedLeave&&ge.delayedLeave(),te._enterCb=void 0)};Ie?(Ie(te,V),Ie.length<=1&&V()):V()},leave(te,Ie){const se=String(t.key);if(te._enterCb&&te._enterCb(!0),n.isUnmounting)return Ie();he(h,[te]);let fe=!1;const ke=te._leaveCb=V=>{fe||(fe=!0,Ie(),V?he(y,[te]):he(g,[te]),te._leaveCb=void 0,K[se]===t&&delete K[se])};K[se]=t,f?(f(te,ke),f.length<=1&&ke()):ke()},clone(te){return nl(te,e,n,r)}};return ge}function rl(t){if(zi(t))return t=wr(t),t.children=null,t}function qh(t){return zi(t)?t.children?t.children[0]:void 0:t}function sl(t,e){t.shapeFlag&6&&t.component?sl(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Hh(t,e=!1){let n=[],r=0;for(let s=0;s<t.length;s++){const i=t[s];i.type===Ue?(i.patchFlag&128&&r++,n=n.concat(Hh(i.children,e))):(e||i.type!==xt)&&n.push(i)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function il(t){return ne(t)?{setup:t,name:t.name}:t}const ol=t=>!!t.type.__asyncLoader,zi=t=>t.type.__isKeepAlive;function Hv(t,e){zh(t,"a",e)}function zv(t,e){zh(t,"da",e)}function zh(t,e,n=Fe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}t()});if(Ki(e,r,n),n){let s=n.parent;for(;s&&s.parent;)zi(s.parent.vnode)&&Kv(r,e,n,s),s=s.parent}}function Kv(t,e,n,r){const s=Ki(e,t,r,!0);Gh(()=>{lh(r[e],s)},n)}function Ki(t,e,n=Fe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;mr(),_r(n);const a=kt(e,n,t,o);return Bn(),Mn(),a});return r?s.unshift(i):s.push(i),i}}const Qt=t=>(e,n=Fe)=>(!eo||t==="sp")&&Ki(t,e,n),Wv=Qt("bm"),al=Qt("m"),Gv=Qt("bu"),Kh=Qt("u"),Wh=Qt("bum"),Gh=Qt("um"),Qv=Qt("sp"),Yv=Qt("rtg"),Jv=Qt("rtc");function Xv(t,e=Fe){Ki("ec",t,e)}let ll=!0;function Zv(t){const e=Jh(t),n=t.proxy,r=t.ctx;ll=!1,e.beforeCreate&&Qh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:y,activated:E,deactivated:w,beforeDestroy:C,beforeUnmount:P,destroyed:q,unmounted:K,render:he,renderTracked:ge,renderTriggered:te,errorCaptured:Ie,serverPrefetch:se,expose:fe,inheritAttrs:ke,components:V,directives:Se,filters:De}=e;if(c&&ew(c,r,null,t.appContext.config.unwrapInjectedRef),o)for(const me in o){const oe=o[me];ne(oe)&&(r[me]=oe.bind(n))}if(s){const me=s.call(n,n);Oe(me)&&(t.data=yr(me))}if(ll=!0,i)for(const me in i){const oe=i[me],nt=ne(oe)?oe.bind(n,n):ne(oe.get)?oe.get.bind(n,n):Pt,yt=!ne(oe)&&ne(oe.set)?oe.set.bind(n):Pt,Ot=we({get:nt,set:yt});Object.defineProperty(r,me,{enumerable:!0,configurable:!0,get:()=>Ot.value,set:Ct=>Ot.value=Ct})}if(a)for(const me in a)Yh(a[me],r,n,me);if(l){const me=ne(l)?l.call(n):l;Reflect.ownKeys(me).forEach(oe=>{Es(oe,me[oe])})}u&&Qh(u,t,"c");function Ae(me,oe){W(oe)?oe.forEach(nt=>me(nt.bind(n))):oe&&me(oe.bind(n))}if(Ae(Wv,h),Ae(al,f),Ae(Gv,g),Ae(Kh,y),Ae(Hv,E),Ae(zv,w),Ae(Xv,Ie),Ae(Jv,ge),Ae(Yv,te),Ae(Wh,P),Ae(Gh,K),Ae(Qv,se),W(fe))if(fe.length){const me=t.exposed||(t.exposed={});fe.forEach(oe=>{Object.defineProperty(me,oe,{get:()=>n[oe],set:nt=>n[oe]=nt})})}else t.exposed||(t.exposed={});he&&t.render===Pt&&(t.render=he),ke!=null&&(t.inheritAttrs=ke),V&&(t.components=V),Se&&(t.directives=Se)}function ew(t,e,n=Pt,r=!1){W(t)&&(t=cl(t));for(const s in t){const i=t[s];let o;Oe(i)?"default"in i?o=Rt(i.from||s,i.default,!0):o=Rt(i.from||s):o=Rt(i),st(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Qh(t,e,n){kt(W(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Yh(t,e,n,r){const s=r.includes(".")?kf(n,r):()=>n[r];if(qe(t)){const i=e[t];ne(i)&&qt(s,i)}else if(ne(t))qt(s,t.bind(n));else if(Oe(t))if(W(t))t.forEach(i=>Yh(i,e,n,r));else{const i=ne(t.handler)?t.handler.bind(n):e[t.handler];ne(i)&&qt(s,i,t)}}function Jh(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>Wi(l,c,o,!0)),Wi(l,e,o)),i.set(e,l),l}function Wi(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Wi(t,i,n,!0),s&&s.forEach(o=>Wi(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=tw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const tw={data:Xh,props:Ln,emits:Ln,methods:Ln,computed:Ln,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:Ln,directives:Ln,watch:rw,provide:Xh,inject:nw};function Xh(t,e){return e?t?function(){return je(ne(t)?t.call(this,this):t,ne(e)?e.call(this,this):e)}:e:t}function nw(t,e){return Ln(cl(t),cl(e))}function cl(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function it(t,e){return t?[...new Set([].concat(t,e))]:e}function Ln(t,e){return t?je(je(Object.create(null),t),e):e}function rw(t,e){if(!t)return e;if(!e)return t;const n=je(Object.create(null),t);for(const r in e)n[r]=it(t[r],e[r]);return n}function sw(t,e,n,r=!1){const s={},i={};Mi(i,Yi,1),t.propsDefaults=Object.create(null),Zh(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Nv(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function iw(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ce(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];const g=e[f];if(l)if(le(i,f))g!==i[f]&&(i[f]=g,c=!0);else{const y=Vt(f);s[y]=ul(l,a,y,g,t,!1)}else g!==i[f]&&(i[f]=g,c=!0)}}}else{Zh(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!le(e,h)&&((u=On(h))===h||!le(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=ul(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!le(e,h))&&(delete i[h],c=!0)}c&&Gt(t,"set","$attrs")}function Zh(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Oi(l))continue;const c=e[l];let u;s&&le(s,u=Vt(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Za(t.emitsOptions,l)||c!==r[l]&&(r[l]=c,o=!0)}if(i){const l=ce(n),c=a||ve;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ul(s,l,h,c[h],t,!le(c,h))}}return o}function ul(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=le(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&ne(l)){const{propsDefaults:c}=s;n in c?r=c[n]:(_r(s),r=c[n]=l.call(null,e),Bn())}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===On(n))&&(r=!0))}return r}function ef(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!ne(t)){const u=h=>{l=!0;const[f,g]=ef(h,e,!0);je(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return r.set(t,fr),fr;if(W(i))for(let u=0;u<i.length;u++){const h=Vt(i[u]);tf(h)&&(o[h]=ve)}else if(i)for(const u in i){const h=Vt(u);if(tf(h)){const f=i[u],g=o[h]=W(f)||ne(f)?{type:f}:f;if(g){const y=sf(Boolean,g.type),E=sf(String,g.type);g[0]=y>-1,g[1]=E<0||y<E,(y>-1||le(g,"default"))&&a.push(h)}}}const c=[o,a];return r.set(t,c),c}function tf(t){return t[0]!=="$"}function nf(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function rf(t,e){return nf(t)===nf(e)}function sf(t,e){return W(e)?e.findIndex(n=>rf(n,t)):ne(e)&&rf(e,t)?0:-1}const of=t=>t[0]==="_"||t==="$stable",hl=t=>W(t)?t.map(jt):[jt(t)],ow=(t,e,n)=>{const r=el((...s)=>hl(e(...s)),n);return r._c=!1,r},af=(t,e,n)=>{const r=t._ctx;for(const s in t){if(of(s))continue;const i=t[s];if(ne(i))e[s]=ow(s,i,r);else if(i!=null){const o=hl(i);e[s]=()=>o}}},lf=(t,e)=>{const n=hl(e);t.slots.default=()=>n},aw=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ce(e),Mi(e,"_",n)):af(e,t.slots={})}else t.slots={},e&&lf(t,e);Mi(t.slots,Yi,1)},lw=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ve;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(je(s,e),!n&&a===1&&delete s._):(i=!e.$stable,af(e,s)),o=e}else e&&(lf(t,e),o={default:1});if(i)for(const a in s)!of(a)&&!(a in o)&&delete s[a]};function cw(t,e){const n=Et;if(n===null)return t;const r=n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=ve]=e[i];ne(o)&&(o={mounted:o,updated:o}),o.deep&&jn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:c})}return t}function Un(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(mr(),kt(l,n,8,[t.el,a,t,e]),Mn())}}function cf(){return{app:null,config:{isNativeTag:Gy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uw=0;function hw(t,e){return function(r,s=null){s!=null&&!Oe(s)&&(s=null);const i=cf(),o=new Set;let a=!1;const l=i.app={_uid:uw++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Fw,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&ne(c.install)?(o.add(c),c.install(l,...u)):ne(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const f=ze(r,s);return f.appContext=i,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,wl(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l}};return l}}const ot=$v;function fw(t){return dw(t)}function dw(t,e){const n=ev();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=Pt,cloneNode:y,insertStaticContent:E}=t,w=(d,p,v,T=null,b=null,O=null,D=!1,N=null,k=!!p.dynamicChildren)=>{if(d===p)return;d&&!Vn(d,p)&&(T=M(d),rt(d,b,O,!0),d=null),p.patchFlag===-2&&(k=!1,p.dynamicChildren=null);const{type:A,ref:$,shapeFlag:F}=p;switch(A){case pl:C(d,p,v,T);break;case xt:P(d,p,v,T);break;case gl:d==null&&q(p,v,T,D);break;case Ue:Se(d,p,v,T,b,O,D,N,k);break;default:F&1?ge(d,p,v,T,b,O,D,N,k):F&6?De(d,p,v,T,b,O,D,N,k):(F&64||F&128)&&A.process(d,p,v,T,b,O,D,N,k,re)}$!=null&&b&&fl($,d&&d.ref,O,p||d,!p)},C=(d,p,v,T)=>{if(d==null)r(p.el=a(p.children),v,T);else{const b=p.el=d.el;p.children!==d.children&&c(b,p.children)}},P=(d,p,v,T)=>{d==null?r(p.el=l(p.children||""),v,T):p.el=d.el},q=(d,p,v,T)=>{[d.el,d.anchor]=E(d.children,p,v,T)},K=({el:d,anchor:p},v,T)=>{let b;for(;d&&d!==p;)b=f(d),r(d,v,T),d=b;r(p,v,T)},he=({el:d,anchor:p})=>{let v;for(;d&&d!==p;)v=f(d),s(d),d=v;s(p)},ge=(d,p,v,T,b,O,D,N,k)=>{D=D||p.type==="svg",d==null?te(p,v,T,b,O,D,N,k):fe(d,p,b,O,D,N,k)},te=(d,p,v,T,b,O,D,N)=>{let k,A;const{type:$,props:F,shapeFlag:j,transition:X,patchFlag:ae,dirs:Ce}=d;if(d.el&&y!==void 0&&ae===-1)k=d.el=y(d.el);else{if(k=d.el=o(d.type,O,F&&F.is,F),j&8?u(k,d.children):j&16&&se(d.children,k,null,T,b,O&&$!=="foreignObject",D,N),Ce&&Un(d,null,T,"created"),F){for(const be in F)be!=="value"&&!Oi(be)&&i(k,be,null,F[be],O,d.children,T,b,_);"value"in F&&i(k,"value",null,F.value),(A=F.onVnodeBeforeMount)&&$t(A,T,d)}Ie(k,d,d.scopeId,D,T)}Ce&&Un(d,null,T,"beforeMount");const ye=(!b||b&&!b.pendingBranch)&&X&&!X.persisted;ye&&X.beforeEnter(k),r(k,p,v),((A=F&&F.onVnodeMounted)||ye||Ce)&&ot(()=>{A&&$t(A,T,d),ye&&X.enter(k),Ce&&Un(d,null,T,"mounted")},b)},Ie=(d,p,v,T,b)=>{if(v&&g(d,v),T)for(let O=0;O<T.length;O++)g(d,T[O]);if(b){let O=b.subTree;if(p===O){const D=b.vnode;Ie(d,D,D.scopeId,D.slotScopeIds,b.parent)}}},se=(d,p,v,T,b,O,D,N,k=0)=>{for(let A=k;A<d.length;A++){const $=d[A]=N?an(d[A]):jt(d[A]);w(null,$,p,v,T,b,O,D,N)}},fe=(d,p,v,T,b,O,D)=>{const N=p.el=d.el;let{patchFlag:k,dynamicChildren:A,dirs:$}=p;k|=d.patchFlag&16;const F=d.props||ve,j=p.props||ve;let X;(X=j.onVnodeBeforeUpdate)&&$t(X,v,p,d),$&&Un(p,d,v,"beforeUpdate");const ae=b&&p.type!=="foreignObject";if(A?ke(d.dynamicChildren,A,N,v,T,ae,O):D||nt(d,p,N,null,v,T,ae,O,!1),k>0){if(k&16)V(N,p,F,j,v,T,b);else if(k&2&&F.class!==j.class&&i(N,"class",null,j.class,b),k&4&&i(N,"style",F.style,j.style,b),k&8){const Ce=p.dynamicProps;for(let ye=0;ye<Ce.length;ye++){const be=Ce[ye],Dt=F[be],hr=j[be];(hr!==Dt||be==="value")&&i(N,be,Dt,hr,b,d.children,v,T,_)}}k&1&&d.children!==p.children&&u(N,p.children)}else!D&&A==null&&V(N,p,F,j,v,T,b);((X=j.onVnodeUpdated)||$)&&ot(()=>{X&&$t(X,v,p,d),$&&Un(p,d,v,"updated")},T)},ke=(d,p,v,T,b,O,D)=>{for(let N=0;N<p.length;N++){const k=d[N],A=p[N],$=k.el&&(k.type===Ue||!Vn(k,A)||k.shapeFlag&(6|64))?h(k.el):v;w(k,A,$,null,T,b,O,D,!0)}},V=(d,p,v,T,b,O,D)=>{if(v!==T){for(const N in T){if(Oi(N))continue;const k=T[N],A=v[N];k!==A&&N!=="value"&&i(d,N,A,k,D,p.children,b,O,_)}if(v!==ve)for(const N in v)!Oi(N)&&!(N in T)&&i(d,N,v[N],null,D,p.children,b,O,_);"value"in T&&i(d,"value",v.value,T.value)}},Se=(d,p,v,T,b,O,D,N,k)=>{const A=p.el=d?d.el:a(""),$=p.anchor=d?d.anchor:a("");let{patchFlag:F,dynamicChildren:j,slotScopeIds:X}=p;X&&(N=N?N.concat(X):X),d==null?(r(A,v,T),r($,v,T),se(p.children,v,$,b,O,D,N,k)):F>0&&F&64&&j&&d.dynamicChildren?(ke(d.dynamicChildren,j,v,b,O,D,N),(p.key!=null||b&&p===b.subTree)&&uf(d,p,!0)):nt(d,p,v,$,b,O,D,N,k)},De=(d,p,v,T,b,O,D,N,k)=>{p.slotScopeIds=N,d==null?p.shapeFlag&512?b.ctx.activate(p,v,T,D,k):ft(p,v,T,b,O,D,k):Ae(d,p,k)},ft=(d,p,v,T,b,O,D)=>{const N=d.component=Sw(d,T,b);if(zi(d)&&(N.ctx.renderer=re),Aw(N),N.asyncDep){if(b&&b.registerDep(N,me),!d.el){const k=N.subTree=ze(xt);P(null,k,p,v)}return}me(N,d,p,v,b,O,D)},Ae=(d,p,v)=>{const T=p.component=d.component;if(Fv(d,p,v))if(T.asyncDep&&!T.asyncResolved){oe(T,p,v);return}else T.next=p,xw(T.update),T.update();else p.component=d.component,p.el=d.el,T.vnode=p},me=(d,p,v,T,b,O,D)=>{const N=()=>{if(d.isMounted){let{next:$,bu:F,u:j,parent:X,vnode:ae}=d,Ce=$,ye;k.allowRecurse=!1,$?($.el=ae.el,oe(d,$,D)):$=ae,F&&xi(F),(ye=$.props&&$.props.onVnodeBeforeUpdate)&&$t(ye,X,$,ae),k.allowRecurse=!0;const be=tl(d),Dt=d.subTree;d.subTree=be,w(Dt,be,h(Dt.el),M(Dt),d,b,O),$.el=be.el,Ce===null&&Vv(d,be.el),j&&ot(j,b),(ye=$.props&&$.props.onVnodeUpdated)&&ot(()=>$t(ye,X,$,ae),b)}else{let $;const{el:F,props:j}=p,{bm:X,m:ae,parent:Ce}=d,ye=ol(p);if(k.allowRecurse=!1,X&&xi(X),!ye&&($=j&&j.onVnodeBeforeMount)&&$t($,Ce,p),k.allowRecurse=!0,F&&z){const be=()=>{d.subTree=tl(d),z(F,d.subTree,d,b,null)};ye?p.type.__asyncLoader().then(()=>!d.isUnmounted&&be()):be()}else{const be=d.subTree=tl(d);w(null,be,v,T,d,b,O),p.el=be.el}if(ae&&ot(ae,b),!ye&&($=j&&j.onVnodeMounted)){const be=p;ot(()=>$t($,Ce,be),b)}p.shapeFlag&256&&d.a&&ot(d.a,b),d.isMounted=!0,p=v=T=null}},k=new za(N,()=>Tf(d.update),d.scope),A=d.update=k.run.bind(k);A.id=d.uid,k.allowRecurse=A.allowRecurse=!0,A()},oe=(d,p,v)=>{p.component=d;const T=d.vnode.props;d.vnode=p,d.next=null,iw(d,p.props,T,v),lw(d,p.children,v),mr(),bl(void 0,d.update),Mn()},nt=(d,p,v,T,b,O,D,N,k=!1)=>{const A=d&&d.children,$=d?d.shapeFlag:0,F=p.children,{patchFlag:j,shapeFlag:X}=p;if(j>0){if(j&128){Ot(A,F,v,T,b,O,D,N,k);return}else if(j&256){yt(A,F,v,T,b,O,D,N,k);return}}X&8?($&16&&_(A,b,O),F!==A&&u(v,F)):$&16?X&16?Ot(A,F,v,T,b,O,D,N,k):_(A,b,O,!0):($&8&&u(v,""),X&16&&se(F,v,T,b,O,D,N,k))},yt=(d,p,v,T,b,O,D,N,k)=>{d=d||fr,p=p||fr;const A=d.length,$=p.length,F=Math.min(A,$);let j;for(j=0;j<F;j++){const X=p[j]=k?an(p[j]):jt(p[j]);w(d[j],X,v,null,b,O,D,N,k)}A>$?_(d,b,O,!0,!1,F):se(p,v,T,b,O,D,N,k,F)},Ot=(d,p,v,T,b,O,D,N,k)=>{let A=0;const $=p.length;let F=d.length-1,j=$-1;for(;A<=F&&A<=j;){const X=d[A],ae=p[A]=k?an(p[A]):jt(p[A]);if(Vn(X,ae))w(X,ae,v,null,b,O,D,N,k);else break;A++}for(;A<=F&&A<=j;){const X=d[F],ae=p[j]=k?an(p[j]):jt(p[j]);if(Vn(X,ae))w(X,ae,v,null,b,O,D,N,k);else break;F--,j--}if(A>F){if(A<=j){const X=j+1,ae=X<$?p[X].el:T;for(;A<=j;)w(null,p[A]=k?an(p[A]):jt(p[A]),v,ae,b,O,D,N,k),A++}}else if(A>j)for(;A<=F;)rt(d[A],b,O,!0),A++;else{const X=A,ae=A,Ce=new Map;for(A=ae;A<=j;A++){const vt=p[A]=k?an(p[A]):jt(p[A]);vt.key!=null&&Ce.set(vt.key,A)}let ye,be=0;const Dt=j-ae+1;let hr=!1,rh=0;const fs=new Array(Dt);for(A=0;A<Dt;A++)fs[A]=0;for(A=X;A<=F;A++){const vt=d[A];if(be>=Dt){rt(vt,b,O,!0);continue}let Ft;if(vt.key!=null)Ft=Ce.get(vt.key);else for(ye=ae;ye<=j;ye++)if(fs[ye-ae]===0&&Vn(vt,p[ye])){Ft=ye;break}Ft===void 0?rt(vt,b,O,!0):(fs[Ft-ae]=A+1,Ft>=rh?rh=Ft:hr=!0,w(vt,p[Ft],v,null,b,O,D,N,k),be++)}const sh=hr?pw(fs):fr;for(ye=sh.length-1,A=Dt-1;A>=0;A--){const vt=ae+A,Ft=p[vt],ih=vt+1<$?p[vt+1].el:T;fs[A]===0?w(null,Ft,v,ih,b,O,D,N,k):hr&&(ye<0||A!==sh[ye]?Ct(Ft,v,ih,2):ye--)}}},Ct=(d,p,v,T,b=null)=>{const{el:O,type:D,transition:N,children:k,shapeFlag:A}=d;if(A&6){Ct(d.component.subTree,p,v,T);return}if(A&128){d.suspense.move(p,v,T);return}if(A&64){D.move(d,p,v,re);return}if(D===Ue){r(O,p,v);for(let F=0;F<k.length;F++)Ct(k[F],p,v,T);r(d.anchor,p,v);return}if(D===gl){K(d,p,v);return}if(T!==2&&A&1&&N)if(T===0)N.beforeEnter(O),r(O,p,v),ot(()=>N.enter(O),b);else{const{leave:F,delayLeave:j,afterLeave:X}=N,ae=()=>r(O,p,v),Ce=()=>{F(O,()=>{ae(),X&&X()})};j?j(O,ae,Ce):Ce()}else r(O,p,v)},rt=(d,p,v,T=!1,b=!1)=>{const{type:O,props:D,ref:N,children:k,dynamicChildren:A,shapeFlag:$,patchFlag:F,dirs:j}=d;if(N!=null&&fl(N,null,v,d,!0),$&256){p.ctx.deactivate(d);return}const X=$&1&&j,ae=!ol(d);let Ce;if(ae&&(Ce=D&&D.onVnodeBeforeUnmount)&&$t(Ce,p,d),$&6)R(d.component,v,T);else{if($&128){d.suspense.unmount(v,T);return}X&&Un(d,null,p,"beforeUnmount"),$&64?d.type.remove(d,p,v,b,re,T):A&&(O!==Ue||F>0&&F&64)?_(A,p,v,!1,!0):(O===Ue&&F&(128|256)||!b&&$&16)&&_(k,p,v),T&&S(d)}(ae&&(Ce=D&&D.onVnodeUnmounted)||X)&&ot(()=>{Ce&&$t(Ce,p,d),X&&Un(d,null,p,"unmounted")},v)},S=d=>{const{type:p,el:v,anchor:T,transition:b}=d;if(p===Ue){m(v,T);return}if(p===gl){he(d);return}const O=()=>{s(v),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(d.shapeFlag&1&&b&&!b.persisted){const{leave:D,delayLeave:N}=b,k=()=>D(v,O);N?N(d.el,O,k):k()}else O()},m=(d,p)=>{let v;for(;d!==p;)v=f(d),s(d),d=v;s(p)},R=(d,p,v)=>{const{bum:T,scope:b,update:O,subTree:D,um:N}=d;T&&xi(T),b.stop(),O&&(O.active=!1,rt(D,d,p,v)),N&&ot(N,p),ot(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},_=(d,p,v,T=!1,b=!1,O=0)=>{for(let D=O;D<d.length;D++)rt(d[D],p,v,T,b)},M=d=>d.shapeFlag&6?M(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),B=(d,p,v)=>{d==null?p._vnode&&rt(p._vnode,null,null,!0):w(p._vnode||null,d,p,null,null,null,v),Cf(),p._vnode=d},re={p:w,um:rt,m:Ct,r:S,mt:ft,mc:se,pc:nt,pbc:ke,n:M,o:t};let Q,z;return e&&([Q,z]=e(re)),{render:B,hydrate:Q,createApp:hw(B,Q)}}function fl(t,e,n,r,s=!1){if(W(t)){t.forEach((f,g)=>fl(f,e&&(W(e)?e[g]:e),n,r,s));return}if(ol(r)&&!s)return;const i=r.shapeFlag&4?wl(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ve?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(qe(c)?(u[c]=null,le(h,c)&&(h[c]=null)):st(c)&&(c.value=null)),qe(l)){const f=()=>{u[l]=o,le(h,l)&&(h[l]=o)};o?(f.id=-1,ot(f,n)):f()}else if(st(l)){const f=()=>{l.value=o};o?(f.id=-1,ot(f,n)):f()}else ne(l)&&ln(l,a,12,[o,u])}function $t(t,e,n,r=null){kt(t,e,7,[n,r])}function uf(t,e,n=!1){const r=t.children,s=e.children;if(W(r)&&W(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=an(s[i]),a.el=o.el),n||uf(o,a))}}function pw(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const gw=t=>t.__isTeleport,hf="components";function dl(t,e){return yw(hf,t,!0,e)||t}const mw=Symbol();function yw(t,e,n=!0,r=!1){const s=Et||Fe;if(s){const i=s.type;if(t===hf){const a=kw(i);if(a&&(a===e||a===Vt(e)||a===Pi(Vt(e))))return i}const o=ff(s[t]||i[t],e)||ff(s.appContext[t],e);return!o&&r?i:o}}function ff(t,e){return t&&(t[e]||t[Vt(e)]||t[Pi(Vt(e))])}const Ue=Symbol(void 0),pl=Symbol(void 0),xt=Symbol(void 0),gl=Symbol(void 0),_s=[];let Fn=null;function He(t=!1){_s.push(Fn=t?null:[])}function vw(){_s.pop(),Fn=_s[_s.length-1]||null}let Gi=1;function df(t){Gi+=t}function pf(t){return t.dynamicChildren=Gi>0?Fn||fr:null,vw(),Gi>0&&Fn&&Fn.push(t),t}function dt(t,e,n,r,s,i){return pf(Pe(t,e,n,r,s,i,!0))}function ml(t,e,n,r,s){return pf(ze(t,e,n,r,s,!0))}function Qi(t){return t?t.__v_isVNode===!0:!1}function Vn(t,e){return t.type===e.type&&t.key===e.key}const Yi="__vInternal",gf=({key:t})=>t!=null?t:null,Ji=({ref:t})=>t!=null?qe(t)||st(t)||ne(t)?{i:Et,r:t}:t:null;function Pe(t,e=null,n=null,r=0,s=null,i=t===Ue?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&gf(e),ref:e&&Ji(e),scopeId:Vh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(yl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=qe(n)?8:16),Gi>0&&!o&&Fn&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Fn.push(l),l}const ze=ww;function ww(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===mw)&&(t=xt),Qi(t)){const a=wr(t,e,!0);return n&&yl(a,n),a}if(Ow(t)&&(t=t.__vccOpts),e){e=Ew(e);let{class:a,style:l}=e;a&&!qe(a)&&(e.class=kn(a)),Oe(l)&&(Dh(l)&&!W(l)&&(l=je({},l)),e.style=Ma(l))}const o=qe(t)?1:Bv(t)?128:gw(t)?64:Oe(t)?4:ne(t)?2:0;return Pe(t,e,n,r,s,o,i,!0)}function Ew(t){return t?Dh(t)||Yi in t?je({},t):t:null}function wr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Xi(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&gf(a),ref:e&&e.ref?n&&s?W(s)?s.concat(Ji(e)):[s,Ji(e)]:Ji(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ue?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&wr(t.ssContent),ssFallback:t.ssFallback&&wr(t.ssFallback),el:t.el,anchor:t.anchor}}function _w(t=" ",e=0){return ze(pl,null,t,e)}function Er(t="",e=!1){return e?(He(),ml(xt,null,t)):ze(xt,null,t)}function jt(t){return t==null||typeof t=="boolean"?ze(xt):W(t)?ze(Ue,null,t.slice()):typeof t=="object"?an(t):ze(pl,null,String(t))}function an(t){return t.el===null||t.memo?t:wr(t)}function yl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(r&(1|64)){const s=e.default;s&&(s._c&&(s._d=!1),yl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Yi in e)?e._ctx=Et:s===3&&Et&&(Et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ne(e)?(e={default:e,_ctx:Et},n=32):(e=String(e),r&64?(n=16,e=[_w(e)]):n=8);t.children=e,t.shapeFlag|=n}function Xi(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=kn([e.class,r.class]));else if(s==="style")e.style=Ma([e.style,r.style]);else if(Ni(s)){const i=e[s],o=r[s];i!==o&&!(W(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function mf(t,e,n,r){let s;const i=n&&n[r];if(W(t)||qe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Oe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function Mt(t,e,n={},r,s){if(Et.isCE)return ze("slot",e==="default"?null:{name:e},r&&r());let i=t[e];i&&i._c&&(i._d=!1),He();const o=i&&yf(i(n)),a=ml(Ue,{key:n.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function yf(t){return t.some(e=>Qi(e)?!(e.type===xt||e.type===Ue&&!yf(e.children)):!0)?t:null}const vl=t=>t?wf(t)?wl(t)||t.proxy:vl(t.parent):null,Zi=je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vl(t.parent),$root:t=>vl(t.root),$emit:t=>t.emit,$options:t=>Jh(t),$forceUpdate:t=>()=>Tf(t.update),$nextTick:t=>$n.bind(t.proxy),$watch:t=>Uw.bind(t)}),Iw={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 0:return r[e];case 1:return s[e];case 3:return n[e];case 2:return i[e]}else{if(r!==ve&&le(r,e))return o[e]=0,r[e];if(s!==ve&&le(s,e))return o[e]=1,s[e];if((c=t.propsOptions[0])&&le(c,e))return o[e]=2,i[e];if(n!==ve&&le(n,e))return o[e]=3,n[e];ll&&(o[e]=4)}}const u=Zi[e];let h,f;if(u)return e==="$attrs"&&wt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ve&&le(n,e))return o[e]=3,n[e];if(f=l.config.globalProperties,le(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;if(s!==ve&&le(s,e))s[e]=n;else if(r!==ve&&le(r,e))r[e]=n;else if(le(t.props,e))return!1;return e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return n[o]!==void 0||t!==ve&&le(t,o)||e!==ve&&le(e,o)||(a=i[0])&&le(a,o)||le(r,o)||le(Zi,o)||le(s.config.globalProperties,o)}},bw=cf();let Tw=0;function Sw(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||bw,i={uid:Tw++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,update:null,scope:new tv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ef(r,s),emitsOptions:Fh(r,s),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:r.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Mv.bind(null,i),t.ce&&t.ce(i),i}let Fe=null;const vf=()=>Fe||Et,_r=t=>{Fe=t,t.scope.on()},Bn=()=>{Fe&&Fe.scope.off(),Fe=null};function wf(t){return t.vnode.shapeFlag&4}let eo=!1;function Aw(t,e=!1){eo=e;const{props:n,children:r}=t.vnode,s=wf(t);sw(t,n,s,e),aw(t,r);const i=s?Cw(t,e):void 0;return eo=!1,i}function Cw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ph(new Proxy(t.ctx,Iw));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Nw(t):null;_r(t),mr();const i=ln(r,t,0,[t.props,s]);if(Mn(),Bn(),uh(i)){if(i.then(Bn,Bn),e)return i.then(o=>{Ef(t,o,e)}).catch(o=>{to(o,t,0)});t.asyncDep=i}else Ef(t,i,e)}else If(t,e)}function Ef(t,e,n){ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=Uh(e)),If(t,n)}let _f;function If(t,e,n){const r=t.type;if(!t.render){if(!e&&_f&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=je(je({isCustomElement:i,delimiters:a},o),l);r.render=_f(s,c)}}t.render=r.render||Pt}_r(t),mr(),Zv(t),Mn(),Bn()}function Rw(t){return new Proxy(t.attrs,{get(e,n){return wt(t,"get","$attrs"),e[n]}})}function Nw(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Rw(t))},slots:t.slots,emit:t.emit,expose:e}}function wl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Uh(Ph(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Zi)return Zi[n](t)}}))}function kw(t){return ne(t)&&t.displayName||t.name}function Ow(t){return ne(t)&&"__vccOpts"in t}function ln(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){to(i,e,n)}return s}function kt(t,e,n,r){if(ne(t)){const i=ln(t,e,n,r);return i&&uh(i)&&i.catch(o=>{to(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(kt(t[i],e,n,r));return s}function to(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){ln(l,null,10,[t,o,a]);return}}Dw(t,n,s,r)}function Dw(t,e,n,r=!0){console.error(t)}let no=!1,El=!1;const _t=[];let Yt=0;const Is=[];let bs=null,Ir=0;const Ts=[];let cn=null,br=0;const bf=Promise.resolve();let _l=null,Il=null;function $n(t){const e=_l||bf;return t?e.then(this?t.bind(this):t):e}function Pw(t){let e=Yt+1,n=_t.length;for(;e<n;){const r=e+n>>>1;Ss(_t[r])<t?e=r+1:n=r}return e}function Tf(t){(!_t.length||!_t.includes(t,no&&t.allowRecurse?Yt+1:Yt))&&t!==Il&&(t.id==null?_t.push(t):_t.splice(Pw(t.id),0,t),Sf())}function Sf(){!no&&!El&&(El=!0,_l=bf.then(Rf))}function xw(t){const e=_t.indexOf(t);e>Yt&&_t.splice(e,1)}function Af(t,e,n,r){W(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Sf()}function Mw(t){Af(t,bs,Is,Ir)}function Lw(t){Af(t,cn,Ts,br)}function bl(t,e=null){if(Is.length){for(Il=e,bs=[...new Set(Is)],Is.length=0,Ir=0;Ir<bs.length;Ir++)bs[Ir]();bs=null,Ir=0,Il=null,bl(t,e)}}function Cf(t){if(Ts.length){const e=[...new Set(Ts)];if(Ts.length=0,cn){cn.push(...e);return}for(cn=e,cn.sort((n,r)=>Ss(n)-Ss(r)),br=0;br<cn.length;br++)cn[br]();cn=null,br=0}}const Ss=t=>t.id==null?1/0:t.id;function Rf(t){El=!1,no=!0,bl(t),_t.sort((n,r)=>Ss(n)-Ss(r));const e=Pt;try{for(Yt=0;Yt<_t.length;Yt++){const n=_t[Yt];n&&n.active!==!1&&ln(n,null,14)}}finally{Yt=0,_t.length=0,Cf(),no=!1,_l=null,(_t.length||Is.length||Ts.length)&&Rf(t)}}function un(t,e){return Tl(t,null,e)}const Nf={};function qt(t,e,n){return Tl(t,e,n)}function Tl(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ve){const a=Fe;let l,c=!1,u=!1;if(st(t)?(l=()=>t.value,c=!!t._shallow):vr(t)?(l=()=>t,r=!0):W(t)?(u=!0,c=t.some(vr),l=()=>t.map(C=>{if(st(C))return C.value;if(vr(C))return jn(C);if(ne(C))return ln(C,a,2)})):ne(t)?e?l=()=>ln(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),kt(t,a,3,[f])}:l=Pt,e&&r){const C=l;l=()=>jn(C())}let h,f=C=>{h=w.onStop=()=>{ln(C,a,4)}};if(eo)return f=Pt,e?n&&kt(e,a,3,[l(),u?[]:void 0,f]):l(),Pt;let g=u?[]:Nf;const y=()=>{if(!!w.active)if(e){const C=w.run();(r||c||(u?C.some((P,q)=>ps(P,g[q])):ps(C,g)))&&(h&&h(),kt(e,a,3,[C,g===Nf?void 0:g,f]),g=C)}else w.run()};y.allowRecurse=!!e;let E;s==="sync"?E=y:s==="post"?E=()=>ot(y,a&&a.suspense):E=()=>{!a||a.isMounted?Mw(y):y()};const w=new za(l,E);return e?n?y():g=w.run():s==="post"?ot(w.run.bind(w),a&&a.suspense):w.run(),()=>{w.stop(),a&&a.scope&&lh(a.scope.effects,w)}}function Uw(t,e,n){const r=this.proxy,s=qe(t)?t.includes(".")?kf(r,t):()=>r[t]:t.bind(r,r);let i;ne(e)?i=e:(i=e.handler,n=e);const o=Fe;_r(this);const a=Tl(s,i.bind(r),n);return o?_r(o):Bn(),a}function kf(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function jn(t,e){if(!Oe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),st(t))jn(t.value,e);else if(W(t))for(let n=0;n<t.length;n++)jn(t[n],e);else if(pr(t)||dr(t))t.forEach(n=>{jn(n,e)});else if(fh(t))for(const n in t)jn(t[n],e);return t}function Sl(t,e,n){const r=arguments.length;return r===2?Oe(e)&&!W(e)?Qi(e)?ze(t,null,[e]):ze(t,e):ze(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Qi(n)&&(n=[n]),ze(t,e,n))}const Fw="3.2.22",Vw="http://www.w3.org/2000/svg",Tr=typeof document!="undefined"?document:null,Of=new Map,Bw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Tr.createElementNS(Vw,t):Tr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Tr.createTextNode(t),createComment:t=>Tr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Tr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r){const s=n?n.previousSibling:e.lastChild;let i=Of.get(t);if(!i){const o=Tr.createElement("template");if(o.innerHTML=r?`<svg>${t}</svg>`:t,i=o.content,r){const a=i.firstChild;for(;a.firstChild;)i.appendChild(a.firstChild);i.removeChild(a)}Of.set(t,i)}return e.insertBefore(i.cloneNode(!0),n),[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function $w(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function jw(t,e,n){const r=t.style,s=qe(n);if(n&&!s){for(const i in n)Al(r,i,n[i]);if(e&&!qe(e))for(const i in e)n[i]==null&&Al(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Df=/\s*!important$/;function Al(t,e,n){if(W(n))n.forEach(r=>Al(t,e,r));else if(e.startsWith("--"))t.setProperty(e,n);else{const r=qw(t,e);Df.test(n)?t.setProperty(On(r),n.replace(Df,""),"important"):t[r]=n}}const Pf=["Webkit","Moz","ms"],Cl={};function qw(t,e){const n=Cl[e];if(n)return n;let r=Vt(e);if(r!=="filter"&&r in t)return Cl[e]=r;r=Pi(r);for(let s=0;s<Pf.length;s++){const i=Pf[s]+r;if(i in t)return Cl[e]=i}return e}const xf="http://www.w3.org/1999/xlink";function Hw(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(xf,e.slice(6,e.length)):t.setAttributeNS(xf,e,n);else{const i=qy(e);n==null||i&&!oh(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function zw(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"){t._value=n;const a=n==null?"":n;t.value!==a&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=oh(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let ro=Date.now,Mf=!1;if(typeof window!="undefined"){ro()>document.createEvent("Event").timeStamp&&(ro=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Mf=!!(t&&Number(t[1])<=53)}let Rl=0;const Kw=Promise.resolve(),Ww=()=>{Rl=0},Gw=()=>Rl||(Kw.then(Ww),Rl=ro());function hn(t,e,n,r){t.addEventListener(e,n,r)}function Qw(t,e,n,r){t.removeEventListener(e,n,r)}function Yw(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=Jw(e);if(r){const c=i[e]=Xw(r,s);hn(t,a,c,l)}else o&&(Qw(t,a,o,l),i[e]=void 0)}}const Lf=/(?:Once|Passive|Capture)$/;function Jw(t){let e;if(Lf.test(t)){e={};let n;for(;n=t.match(Lf);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[On(t.slice(2)),e]}function Xw(t,e){const n=r=>{const s=r.timeStamp||ro();(Mf||s>=n.attached-1)&&kt(Zw(r,n.value),e,5,[r])};return n.value=t,n.attached=Gw(),n}function Zw(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r(s))}else return e}const Uf=/^on[a-z]/,eE=(t,e,n,r,s=!1,i,o,a,l)=>{e==="class"?$w(t,r,s):e==="style"?jw(t,n,r):Ni(e)?Ua(e)||Yw(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):tE(t,e,r,s))?zw(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Hw(t,e,r,s))};function tE(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Uf.test(e)&&ne(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Uf.test(e)&&qe(n)?!1:e in t}const fn="transition",As="animation",Ff=(t,{slots:e})=>Sl($h,nE(t),e);Ff.displayName="Transition";const Vf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ff.props=je({},$h.props,Vf);const qn=(t,e=[])=>{W(t)?t.forEach(n=>n(...e)):t&&t(...e)},Bf=t=>t?W(t)?t.some(e=>e.length>1):t.length>1:!1;function nE(t){const e={};for(const V in t)V in Vf||(e[V]=t[V]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,y=rE(s),E=y&&y[0],w=y&&y[1],{onBeforeEnter:C,onEnter:P,onEnterCancelled:q,onLeave:K,onLeaveCancelled:he,onBeforeAppear:ge=C,onAppear:te=P,onAppearCancelled:Ie=q}=e,se=(V,Se,De)=>{Sr(V,Se?u:a),Sr(V,Se?c:o),De&&De()},fe=(V,Se)=>{Sr(V,g),Sr(V,f),Se&&Se()},ke=V=>(Se,De)=>{const ft=V?te:P,Ae=()=>se(Se,V,De);qn(ft,[Se,Ae]),$f(()=>{Sr(Se,V?l:i),dn(Se,V?u:a),Bf(ft)||jf(Se,r,E,Ae)})};return je(e,{onBeforeEnter(V){qn(C,[V]),dn(V,i),dn(V,o)},onBeforeAppear(V){qn(ge,[V]),dn(V,l),dn(V,c)},onEnter:ke(!1),onAppear:ke(!0),onLeave(V,Se){const De=()=>fe(V,Se);dn(V,h),oE(),dn(V,f),$f(()=>{Sr(V,h),dn(V,g),Bf(K)||jf(V,r,w,De)}),qn(K,[V,De])},onEnterCancelled(V){se(V,!1),qn(q,[V])},onAppearCancelled(V){se(V,!0),qn(Ie,[V])},onLeaveCancelled(V){fe(V),qn(he,[V])}})}function rE(t){if(t==null)return null;if(Oe(t))return[Nl(t.enter),Nl(t.leave)];{const e=Nl(t);return[e,e]}}function Nl(t){return gs(t)}function dn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Sr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function $f(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let sE=0;function jf(t,e,n,r){const s=t._endId=++sE,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=iE(t,e);if(!o)return r();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,f),i()},f=g=>{g.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,f)}function iE(t,e){const n=window.getComputedStyle(t),r=y=>(n[y]||"").split(", "),s=r(fn+"Delay"),i=r(fn+"Duration"),o=qf(s,i),a=r(As+"Delay"),l=r(As+"Duration"),c=qf(a,l);let u=null,h=0,f=0;e===fn?o>0&&(u=fn,h=o,f=i.length):e===As?c>0&&(u=As,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?fn:As:null,f=u?u===fn?i.length:l.length:0);const g=u===fn&&/\b(transform|all)(,|$)/.test(n[fn+"Property"]);return{type:u,timeout:h,propCount:f,hasTransform:g}}function qf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Hf(n)+Hf(t[r])))}function Hf(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function oE(){return document.body.offsetHeight}const Ar=t=>{const e=t.props["onUpdate:modelValue"];return W(e)?n=>xi(e,n):e};function aE(t){t.target.composing=!0}function zf(t){const e=t.target;e.composing&&(e.composing=!1,lE(e,"input"))}function lE(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const OR={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Ar(s);const i=r||s.props&&s.props.type==="number";hn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=gs(a)),t._assign(a)}),n&&hn(t,"change",()=>{t.value=t.value.trim()}),e||(hn(t,"compositionstart",aE),hn(t,"compositionend",zf),hn(t,"change",zf))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Ar(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&gs(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},DR={deep:!0,created(t,e,n){t._assign=Ar(n),hn(t,"change",()=>{const r=t._modelValue,s=Cs(t),i=t.checked,o=t._assign;if(W(r)){const a=La(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const c=[...r];c.splice(a,1),o(c)}}else if(pr(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(Gf(t,i))})},mounted:Kf,beforeUpdate(t,e,n){t._assign=Ar(n),Kf(t,e,n)}};function Kf(t,{value:e,oldValue:n},r){t._modelValue=e,W(e)?t.checked=La(e,r.props.value)>-1:pr(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=ds(e,Gf(t,!0)))}const PR={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=pr(e);hn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?gs(Cs(o)):Cs(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=Ar(r)},mounted(t,{value:e}){Wf(t,e)},beforeUpdate(t,e,n){t._assign=Ar(n)},updated(t,{value:e}){Wf(t,e)}};function Wf(t,e){const n=t.multiple;if(!(n&&!W(e)&&!pr(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=Cs(i);if(n)W(e)?i.selected=La(e,o)>-1:i.selected=e.has(o);else if(ds(Cs(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Cs(t){return"_value"in t?t._value:t.value}function Gf(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const cE=["ctrl","shift","alt","meta"],uE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>cE.some(n=>t[`${n}Key`]&&!e.includes(n))},Lt=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=uE[e[s]];if(i&&i(n,e))return}return t(n,...r)},hE={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Cr=(t,e)=>n=>{if(!("key"in n))return;const r=On(n.key);if(e.some(s=>s===r||hE[s]===r))return t(n)},fE={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Rs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Rs(t,!0),r.enter(t)):r.leave(t,()=>{Rs(t,!1)}):Rs(t,e))},beforeUnmount(t,{value:e}){Rs(t,e)}};function Rs(t,e){t.style.display=e?t._vod:"none"}const dE=je({patchProp:eE},Bw);let Qf;function pE(){return Qf||(Qf=fw(dE))}const xR=(...t)=>{const e=pE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=gE(r);if(!s)return;const i=e._component;!ne(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function gE(t){return qe(t)?document.querySelector(t):t}/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Yf=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Rr=t=>Yf?Symbol(t):"_vr_"+t,mE=Rr("rvlm"),Jf=Rr("rvd"),so=Rr("r"),kl=Rr("rl"),Ol=Rr("rvl"),Nr=typeof window!="undefined";function yE(t){return t.__esModule||Yf&&t[Symbol.toStringTag]==="Module"}const Ee=Object.assign;function Dl(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const Ns=()=>{},vE=/\/$/,wE=t=>t.replace(vE,"");function Pl(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),l=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=bE(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function EE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Xf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function _E(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&kr(e.matched[r],n.matched[s])&&Zf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function kr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Zf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!IE(t[n],e[n]))return!1;return!0}function IE(t,e){return Array.isArray(t)?ed(t,e):Array.isArray(e)?ed(e,t):t===e}function ed(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function bE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var ks;(function(t){t.pop="pop",t.push="push"})(ks||(ks={}));var Os;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Os||(Os={}));function TE(t){if(!t)if(Nr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),wE(t)}const SE=/^[^#]+#/;function AE(t,e){return t.replace(SE,"#")+e}function CE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const io=()=>({left:window.pageXOffset,top:window.pageYOffset});function RE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=CE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function td(t,e){return(history.state?history.state.position-e:-1)+t}const xl=new Map;function NE(t,e){xl.set(t,e)}function kE(t){const e=xl.get(t);return xl.delete(t),e}let OE=()=>location.protocol+"//"+location.host;function nd(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Xf(l,"")}return Xf(n,t)+r+s}function DE(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const g=nd(t,location),y=n.value,E=e.value;let w=0;if(f){if(n.value=g,e.value=f,o&&o===y){o=null;return}w=E?f.position-E.position:0}else r(g);s.forEach(C=>{C(n.value,y,{delta:w,type:ks.pop,direction:w?w>0?Os.forward:Os.back:Os.unknown})})};function l(){o=n.value}function c(f){s.push(f);const g=()=>{const y=s.indexOf(f);y>-1&&s.splice(y,1)};return i.push(g),g}function u(){const{history:f}=window;!f.state||f.replaceState(Ee({},f.state,{scroll:io()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function rd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?io():null}}function PE(t){const{history:e,location:n}=window,r={value:nd(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:OE()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(l,c){const u=Ee({},e.state,rd(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=Ee({},s.value,e.state,{forward:l,scroll:io()});i(u.current,u,!0);const h=Ee({},rd(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function MR(t){t=TE(t);const e=PE(t),n=DE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ee({location:"",base:t,go:r,createHref:AE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function xE(t){return typeof t=="string"||t&&typeof t=="object"}function sd(t){return typeof t=="string"||typeof t=="symbol"}const pn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},id=Rr("nf");var od;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(od||(od={}));function Or(t,e){return Ee(new Error,{type:t,[id]:!0},e)}function Hn(t,e){return t instanceof Error&&id in t&&(e==null||!!(t.type&e))}const ad="[^/]+?",ME={sensitive:!1,strict:!1,start:!0,end:!0},LE=/[.+*?^${}()[\]/\\]/g;function UE(t,e){const n=Ee({},ME,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(LE,"\\$&"),g+=40;else if(f.type===1){const{value:y,repeatable:E,optional:w,regexp:C}=f;i.push({name:y,repeatable:E,optional:w});const P=C||ad;if(P!==ad){g+=10;try{new RegExp(`(${P})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${y}" (${P}): `+K.message)}}let q=E?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||(q=w&&c.length<2?`(?:/${q})`:"/"+q),w&&(q+="?"),s+=q,g+=20,w&&(g+=-8),E&&(g+=-20),P===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",y=i[f-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:y,repeatable:E,optional:w}=g,C=y in c?c[y]:"";if(Array.isArray(C)&&!E)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const P=Array.isArray(C)?C.join("/"):C;if(!P)if(w)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=P}}return u}return{re:o,score:r,keys:i,parse:a,stringify:l}}function FE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function VE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=FE(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const BE={type:0,value:""},$E=/[a-zA-Z0-9_]/;function jE(t){if(!t)return[[]];if(t==="/")return[[BE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){!c||(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:l==="("?n=2:$E.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function qE(t,e,n){const r=UE(jE(t.path),n),s=Ee(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function HE(t,e){const n=[],r=new Map;e=cd({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const g=!f,y=KE(u);y.aliasOf=f&&f.record;const E=cd(e,u),w=[y];if("alias"in u){const q=typeof u.alias=="string"?[u.alias]:u.alias;for(const K of q)w.push(Ee({},y,{components:f?f.record.components:y.components,path:K,aliasOf:f?f.record:y}))}let C,P;for(const q of w){const{path:K}=q;if(h&&K[0]!=="/"){const he=h.record.path,ge=he[he.length-1]==="/"?"":"/";q.path=h.record.path+(K&&ge+K)}if(C=qE(q,h,E),f?f.alias.push(C):(P=P||C,P!==C&&P.alias.push(C),g&&u.name&&!ld(C)&&o(u.name)),"children"in y){const he=y.children;for(let ge=0;ge<he.length;ge++)i(he[ge],C,f&&f.children[ge])}f=f||C,l(C)}return P?()=>{o(P)}:Ns}function o(u){if(sd(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&VE(u,n[h])>=0;)h++;n.splice(h,0,u),u.record.name&&!ld(u)&&r.set(u.record.name,u)}function c(u,h){let f,g={},y,E;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw Or(1,{location:u});E=f.record.name,g=Ee(zE(h.params,f.keys.filter(P=>!P.optional).map(P=>P.name)),u.params),y=f.stringify(g)}else if("path"in u)y=u.path,f=n.find(P=>P.re.test(y)),f&&(g=f.parse(y),E=f.record.name);else{if(f=h.name?r.get(h.name):n.find(P=>P.re.test(h.path)),!f)throw Or(1,{location:u,currentLocation:h});E=f.record.name,g=Ee({},h.params,u.params),y=f.stringify(g)}const w=[];let C=f;for(;C;)w.unshift(C.record),C=C.parent;return{name:E,path:y,params:g,matched:w,meta:GE(w)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function zE(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function KE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:WE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function WE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function ld(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function GE(t){return t.reduce((e,n)=>Ee(e,n.meta),{})}function cd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const ud=/#/g,QE=/&/g,YE=/\//g,JE=/=/g,XE=/\?/g,hd=/\+/g,ZE=/%5B/g,e_=/%5D/g,fd=/%5E/g,t_=/%60/g,dd=/%7B/g,n_=/%7C/g,pd=/%7D/g,r_=/%20/g;function Ml(t){return encodeURI(""+t).replace(n_,"|").replace(ZE,"[").replace(e_,"]")}function s_(t){return Ml(t).replace(dd,"{").replace(pd,"}").replace(fd,"^")}function Ll(t){return Ml(t).replace(hd,"%2B").replace(r_,"+").replace(ud,"%23").replace(QE,"%26").replace(t_,"`").replace(dd,"{").replace(pd,"}").replace(fd,"^")}function i_(t){return Ll(t).replace(JE,"%3D")}function o_(t){return Ml(t).replace(ud,"%23").replace(XE,"%3F")}function a_(t){return t==null?"":o_(t).replace(YE,"%2F")}function oo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function l_(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(hd," "),o=i.indexOf("="),a=oo(o<0?i:i.slice(0,o)),l=o<0?null:oo(i.slice(o+1));if(a in e){let c=e[a];Array.isArray(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function gd(t){let e="";for(let n in t){const r=t[n];if(n=i_(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&Ll(i)):[r&&Ll(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function c_(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function Ds(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function gn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Or(4,{from:n,to:e})):h instanceof Error?a(h):xE(h)?a(Or(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(r&&r.instances[s],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Ul(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(u_(a)){const c=(a.__vccOpts||a)[e];c&&s.push(gn(c,n,r,i,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=yE(c)?c.default:c;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&gn(f,n,r,i,o)()}))}}return s}function u_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function md(t){const e=Rt(so),n=Rt(kl),r=we(()=>e.resolve(ws(t.to))),s=we(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(kr.bind(null,u));if(f>-1)return f;const g=yd(l[c-2]);return c>1&&yd(u)===g&&h[h.length-1].path!==g?h.findIndex(kr.bind(null,l[c-2])):f}),i=we(()=>s.value>-1&&p_(n.params,r.value.params)),o=we(()=>s.value>-1&&s.value===n.matched.length-1&&Zf(n.params,r.value.params));function a(l={}){return d_(l)?e[ws(t.replace)?"replace":"push"](ws(t.to)).catch(Ns):Promise.resolve()}return{route:r,href:we(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const h_=il({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:md,setup(t,{slots:e}){const n=yr(md(t)),{options:r}=Rt(so),s=we(()=>({[vd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[vd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Sl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),f_=h_;function d_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function p_(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function yd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const vd=(t,e,n)=>t!=null?t:e!=null?e:n,g_=il({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=Rt(Ol),s=we(()=>t.route||r.value),i=Rt(Jf,0),o=we(()=>s.value.matched[i]);Es(Jf,i+1),Es(mE,o),Es(Ol,s);const a=Bt();return qt(()=>[a.value,o.value,t.name],([l,c,u],[h,f,g])=>{c&&(c.instances[u]=l,f&&f!==c&&l&&l===h&&(c.leaveGuards.size||(c.leaveGuards=f.leaveGuards),c.updateGuards.size||(c.updateGuards=f.updateGuards))),l&&c&&(!f||!kr(c,f)||!h)&&(c.enterCallbacks[u]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=s.value,c=o.value,u=c&&c.components[t.name],h=t.name;if(!u)return wd(n.default,{Component:u,route:l});const f=c.props[t.name],g=f?f===!0?l.params:typeof f=="function"?f(l):f:null,E=Sl(u,Ee({},g,e,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(c.instances[h]=null)},ref:a}));return wd(n.default,{Component:E,route:l})||E}}});function wd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const m_=g_;function LR(t){const e=HE(t.routes,t),n=t.parseQuery||l_,r=t.stringifyQuery||gd,s=t.history,i=Ds(),o=Ds(),a=Ds(),l=kv(pn);let c=pn;Nr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Dl.bind(null,m=>""+m),h=Dl.bind(null,a_),f=Dl.bind(null,oo);function g(m,R){let _,M;return sd(m)?(_=e.getRecordMatcher(m),M=R):M=m,e.addRoute(M,_)}function y(m){const R=e.getRecordMatcher(m);R&&e.removeRoute(R)}function E(){return e.getRoutes().map(m=>m.record)}function w(m){return!!e.getRecordMatcher(m)}function C(m,R){if(R=Ee({},R||l.value),typeof m=="string"){const z=Pl(n,m,R.path),d=e.resolve({path:z.path},R),p=s.createHref(z.fullPath);return Ee(z,d,{params:f(d.params),hash:oo(z.hash),redirectedFrom:void 0,href:p})}let _;if("path"in m)_=Ee({},m,{path:Pl(n,m.path,R.path).path});else{const z=Ee({},m.params);for(const d in z)z[d]==null&&delete z[d];_=Ee({},m,{params:h(m.params)}),R.params=h(R.params)}const M=e.resolve(_,R),B=m.hash||"";M.params=u(f(M.params));const re=EE(r,Ee({},m,{hash:s_(B),path:M.path})),Q=s.createHref(re);return Ee({fullPath:re,hash:B,query:r===gd?c_(m.query):m.query||{}},M,{redirectedFrom:void 0,href:Q})}function P(m){return typeof m=="string"?Pl(n,m,l.value.path):Ee({},m)}function q(m,R){if(c!==m)return Or(8,{from:R,to:m})}function K(m){return te(m)}function he(m){return K(Ee(P(m),{replace:!0}))}function ge(m){const R=m.matched[m.matched.length-1];if(R&&R.redirect){const{redirect:_}=R;let M=typeof _=="function"?_(m):_;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=P(M):{path:M},M.params={}),Ee({query:m.query,hash:m.hash,params:m.params},M)}}function te(m,R){const _=c=C(m),M=l.value,B=m.state,re=m.force,Q=m.replace===!0,z=ge(_);if(z)return te(Ee(P(z),{state:B,force:re,replace:Q}),R||_);const d=_;d.redirectedFrom=R;let p;return!re&&_E(r,M,_)&&(p=Or(16,{to:d,from:M}),yt(M,M,!0,!1)),(p?Promise.resolve(p):se(d,M)).catch(v=>Hn(v)?v:me(v,d,M)).then(v=>{if(v){if(Hn(v,2))return te(Ee(P(v.to),{state:B,force:re,replace:Q}),R||d)}else v=ke(d,M,!0,Q,B);return fe(d,M,v),v})}function Ie(m,R){const _=q(m,R);return _?Promise.reject(_):Promise.resolve()}function se(m,R){let _;const[M,B,re]=y_(m,R);_=Ul(M.reverse(),"beforeRouteLeave",m,R);for(const z of M)z.leaveGuards.forEach(d=>{_.push(gn(d,m,R))});const Q=Ie.bind(null,m,R);return _.push(Q),Dr(_).then(()=>{_=[];for(const z of i.list())_.push(gn(z,m,R));return _.push(Q),Dr(_)}).then(()=>{_=Ul(B,"beforeRouteUpdate",m,R);for(const z of B)z.updateGuards.forEach(d=>{_.push(gn(d,m,R))});return _.push(Q),Dr(_)}).then(()=>{_=[];for(const z of m.matched)if(z.beforeEnter&&!R.matched.includes(z))if(Array.isArray(z.beforeEnter))for(const d of z.beforeEnter)_.push(gn(d,m,R));else _.push(gn(z.beforeEnter,m,R));return _.push(Q),Dr(_)}).then(()=>(m.matched.forEach(z=>z.enterCallbacks={}),_=Ul(re,"beforeRouteEnter",m,R),_.push(Q),Dr(_))).then(()=>{_=[];for(const z of o.list())_.push(gn(z,m,R));return _.push(Q),Dr(_)}).catch(z=>Hn(z,8)?z:Promise.reject(z))}function fe(m,R,_){for(const M of a.list())M(m,R,_)}function ke(m,R,_,M,B){const re=q(m,R);if(re)return re;const Q=R===pn,z=Nr?history.state:{};_&&(M||Q?s.replace(m.fullPath,Ee({scroll:Q&&z&&z.scroll},B)):s.push(m.fullPath,B)),l.value=m,yt(m,R,_,Q),nt()}let V;function Se(){V=s.listen((m,R,_)=>{const M=C(m),B=ge(M);if(B){te(Ee(B,{replace:!0}),M).catch(Ns);return}c=M;const re=l.value;Nr&&NE(td(re.fullPath,_.delta),io()),se(M,re).catch(Q=>Hn(Q,4|8)?Q:Hn(Q,2)?(te(Q.to,M).then(z=>{Hn(z,4|16)&&!_.delta&&_.type===ks.pop&&s.go(-1,!1)}).catch(Ns),Promise.reject()):(_.delta&&s.go(-_.delta,!1),me(Q,M,re))).then(Q=>{Q=Q||ke(M,re,!1),Q&&(_.delta?s.go(-_.delta,!1):_.type===ks.pop&&Hn(Q,4|16)&&s.go(-1,!1)),fe(M,re,Q)}).catch(Ns)})}let De=Ds(),ft=Ds(),Ae;function me(m,R,_){nt(m);const M=ft.list();return M.length?M.forEach(B=>B(m,R,_)):console.error(m),Promise.reject(m)}function oe(){return Ae&&l.value!==pn?Promise.resolve():new Promise((m,R)=>{De.add([m,R])})}function nt(m){Ae||(Ae=!0,Se(),De.list().forEach(([R,_])=>m?_(m):R()),De.reset())}function yt(m,R,_,M){const{scrollBehavior:B}=t;if(!Nr||!B)return Promise.resolve();const re=!_&&kE(td(m.fullPath,0))||(M||!_)&&history.state&&history.state.scroll||null;return $n().then(()=>B(m,R,re)).then(Q=>Q&&RE(Q)).catch(Q=>me(Q,m,R))}const Ot=m=>s.go(m);let Ct;const rt=new Set;return{currentRoute:l,addRoute:g,removeRoute:y,hasRoute:w,getRoutes:E,resolve:C,options:t,push:K,replace:he,go:Ot,back:()=>Ot(-1),forward:()=>Ot(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ft.add,isReady:oe,install(m){const R=this;m.component("RouterLink",f_),m.component("RouterView",m_),m.config.globalProperties.$router=R,Object.defineProperty(m.config.globalProperties,"$route",{enumerable:!0,get:()=>ws(l)}),Nr&&!Ct&&l.value===pn&&(Ct=!0,K(s.location).catch(B=>{}));const _={};for(const B in pn)_[B]=we(()=>l.value[B]);m.provide(so,R),m.provide(kl,yr(_)),m.provide(Ol,l);const M=m.unmount;rt.add(m),m.unmount=function(){rt.delete(m),rt.size<1&&(c=pn,V&&V(),l.value=pn,Ct=!1,Ae=!1),M()}}}}function Dr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function y_(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>kr(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>kr(c,l))||s.push(l))}return[n,r,s]}function UR(){return Rt(so)}function FR(){return Rt(kl)}/**
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
 *//**
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
 */const v_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},w_=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},E_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(f=64)),r.push(n[u],n[h],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(v_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):w_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw Error();const f=i<<2|a>>4;if(r.push(f),c!==64){const g=a<<4&240|c>>2;if(r.push(g),h!==64){const y=c<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},__=function(t){try{return E_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class I_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ve(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ed(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function _d(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Id(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function b_(){return Ve().indexOf("Electron/")>=0}function bd(){const t=Ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function T_(){return Ve().indexOf("MSAppHost/")>=0}/**
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
 */const S_="FirebaseError";class Pr extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=S_,Object.setPrototypeOf(this,Pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ps.prototype.create)}}class Ps{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?A_(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Pr(s,a,r)}}function A_(t,e){return t.replace(C_,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const C_=/\{\$([^}]+)}/g;function R_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ao(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Td(i)&&Td(o)){if(!ao(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Td(t){return t!==null&&typeof t=="object"}/**
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
 */function xs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ms(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ls(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function N_(t,e){const n=new k_(t,e);return n.subscribe.bind(n)}class k_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");O_(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Fl),s.error===void 0&&(s.error=Fl),s.complete===void 0&&(s.complete=Fl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function O_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fl(){}/**
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
 */function at(t){return t&&t._delegate?t._delegate:t}class xr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const zn="[DEFAULT]";/**
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
 */class D_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new I_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(x_(e))try{this.getOrInitializeService({instanceIdentifier:zn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zn){return this.instances.has(e)}getOptions(e=zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:P_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zn){return this.component?this.component.multipleInstances?e:zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function P_(t){return t===zn?void 0:t}function x_(t){return t.instantiationMode==="EAGER"}/**
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
 */class M_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new D_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const L_={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},U_=ue.INFO,F_={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},V_=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=F_[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vl{constructor(e){this.name=e,this._logLevel=U_,this._logHandler=V_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?L_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}/**
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
 */class B_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bl="@firebase/app",Sd="0.7.9";/**
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
 */const $l=new Vl("@firebase/app"),j_="@firebase/app-compat",q_="@firebase/analytics-compat",H_="@firebase/analytics",z_="@firebase/app-check-compat",K_="@firebase/app-check",W_="@firebase/auth",G_="@firebase/auth-compat",Q_="@firebase/database",Y_="@firebase/database-compat",J_="@firebase/functions",X_="@firebase/functions-compat",Z_="@firebase/installations",eI="@firebase/installations-compat",tI="@firebase/messaging",nI="@firebase/messaging-compat",rI="@firebase/performance",sI="@firebase/performance-compat",iI="@firebase/remote-config",oI="@firebase/remote-config-compat",aI="@firebase/storage",lI="@firebase/storage-compat",cI="@firebase/firestore",uI="@firebase/firestore-compat",hI="firebase",fI="9.5.0";/**
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
 */const Ad="[DEFAULT]",dI={[Bl]:"fire-core",[j_]:"fire-core-compat",[H_]:"fire-analytics",[q_]:"fire-analytics-compat",[K_]:"fire-app-check",[z_]:"fire-app-check-compat",[W_]:"fire-auth",[G_]:"fire-auth-compat",[Q_]:"fire-rtdb",[Y_]:"fire-rtdb-compat",[J_]:"fire-fn",[X_]:"fire-fn-compat",[Z_]:"fire-iid",[eI]:"fire-iid-compat",[tI]:"fire-fcm",[nI]:"fire-fcm-compat",[rI]:"fire-perf",[sI]:"fire-perf-compat",[iI]:"fire-rc",[oI]:"fire-rc-compat",[aI]:"fire-gcs",[lI]:"fire-gcs-compat",[cI]:"fire-fst",[uI]:"fire-fst-compat","fire-js":"fire-js",[hI]:"fire-js-all"};/**
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
 */const lo=new Map,jl=new Map;function pI(t,e){try{t.container.addComponent(e)}catch(n){$l.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Us(t){const e=t.name;if(jl.has(e))return $l.debug(`There were multiple attempts to register component ${e}.`),!1;jl.set(e,t);for(const n of lo.values())pI(n,t);return!0}function ql(t,e){return t.container.getProvider(e)}/**
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
 */const gI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},co=new Ps("app","Firebase",gI);/**
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
 */class mI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw co.create("app-deleted",{appName:this._name})}}/**
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
 */const Fs=fI;function VR(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ad,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw co.create("bad-app-name",{appName:String(r)});const s=lo.get(r);if(s){if(ao(t,s.options)&&ao(n,s.config))return s;throw co.create("duplicate-app",{appName:r})}const i=new M_(r);for(const a of jl.values())i.addComponent(a);const o=new mI(t,n,i);return lo.set(r,o),o}function Cd(t=Ad){const e=lo.get(t);if(!e)throw co.create("no-app",{appName:t});return e}function mn(t,e,n){var r;let s=(r=dI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$l.warn(a.join(" "));return}Us(new xr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */function yI(t){Us(new xr("platform-logger",e=>new B_(e),"PRIVATE")),mn(Bl,Sd,t),mn(Bl,Sd,"esm2017"),mn("fire-js","")}yI("");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Hl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Rd(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vI=Rd,Nd=new Ps("auth","Firebase",Rd());/**
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
 */const kd=new Vl("@firebase/auth");function uo(t,...e){kd.logLevel<=ue.ERROR&&kd.error(`Auth (${Fs}): ${t}`,...e)}/**
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
 */function Ut(t,...e){throw zl(t,...e)}function Ht(t,...e){return zl(t,...e)}function wI(t,e,n){const r=Object.assign(Object.assign({},vI()),{[e]:n});return new Ps("auth","Firebase",r).create(e,{appName:t.name})}function zl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Nd.create(t,...e)}function Y(t,e,...n){if(!t)throw zl(e,...n)}function Jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw uo(e),new Error(e)}function Xt(t,e){t||Jt(e)}/**
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
 */const Od=new Map;function Zt(t){Xt(t instanceof Function,"Expected a class definition");let e=Od.get(t);return e?(Xt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Od.set(t,e),e)}/**
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
 */function EI(t,e){const n=ql(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ao(i,e!=null?e:{}))return s;Ut(s,"already-initialized")}return n.initialize({options:e})}function _I(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Zt);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Kl(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function II(){return Dd()==="http:"||Dd()==="https:"}function Dd(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function bI(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(II()||_d()||"connection"in navigator)?navigator.onLine:!0}function TI(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Vs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xt(n>e,"Short delay should be less than long delay!"),this.isMobile=Ed()||Id()}get(){return bI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Wl(t,e){Xt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Gl{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const SI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const AI=new Vs(3e4,6e4);function Bs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Mr(t,e,n,r,s={}){return Pd(t,s,()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=xs(Object.assign({key:t.config.apiKey},o)).slice(1),l=new(Gl.headers());return l.set("Content-Type","application/json"),l.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&l.set("X-Firebase-Locale",t.languageCode),Gl.fetch()(xd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Pd(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},SI),e);try{const s=new CI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ql(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ql(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ql(t,"email-already-in-use",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw wI(t,u,c);Ut(t,u)}}catch(s){if(s instanceof Pr)throw s;Ut(t,"network-request-failed")}}async function $s(t,e,n,r,s={}){const i=await Mr(t,e,n,r,s);return"mfaPendingCredential"in i&&Ut(t,"multi-factor-auth-required",{_serverResponse:i}),i}function xd(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Wl(t.config,s):`${t.config.apiScheme}://${s}`}class CI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ht(this.auth,"timeout")),AI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ql(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ht(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function RI(t,e){return Mr(t,"POST","/v1/accounts:delete",e)}async function NI(t,e){return Mr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function js(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kI(t,e=!1){const n=at(t),r=await n.getIdToken(e),s=Jl(r);Y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:js(Yl(s.auth_time)),issuedAtTime:js(Yl(s.iat)),expirationTime:js(Yl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Yl(t){return Number(t)*1e3}function Jl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return uo("JWT malformed, contained fewer than 3 sections"),null;try{const s=__(n);return s?JSON.parse(s):(uo("Failed to decode base64 JWT payload"),null)}catch(s){return uo("Caught error parsing JWT payload as JSON",s),null}}function OI(t){const e=Jl(t);return Y(e,"internal-error"),Y(typeof e.exp!="undefined","internal-error"),Y(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Lr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pr&&DI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function DI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class PI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Md{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=js(this.lastLoginAt),this.creationTime=js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ho(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Lr(t,NI(n,{idToken:r}));Y(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=((e=i.providerUserInfo)===null||e===void 0?void 0:e.length)?LI(i.providerUserInfo):[],a=MI(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a==null?void 0:a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Md(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function xI(t){const e=at(t);await ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function LI(t){return t.map(e=>{var{providerId:n}=e,r=Hl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function UI(t,e){const n=await Pd(t,{},()=>{const r=xs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=xd(t,s,"/v1/token",`key=${i}`);return Gl.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class qs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken!="undefined","internal-error"),Y(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):OI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Y(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await UI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new qs;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Y(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Y(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qs,this.toJSON())}_performRefresh(){return Jt("not implemented")}}/**
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
 */function yn(t,e){Y(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Kn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Hl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new PI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new Md(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Lr(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kI(this,e)}reload(){return xI(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Kn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ho(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Lr(this,RI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,C=(c=n.createdAt)!==null&&c!==void 0?c:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:q,emailVerified:K,isAnonymous:he,providerData:ge,stsTokenManager:te}=n;Y(q&&te,e,"internal-error");const Ie=qs.fromJSON(this.name,te);Y(typeof q=="string",e,"internal-error"),yn(h,e.name),yn(f,e.name),Y(typeof K=="boolean",e,"internal-error"),Y(typeof he=="boolean",e,"internal-error"),yn(g,e.name),yn(y,e.name),yn(E,e.name),yn(w,e.name),yn(C,e.name),yn(P,e.name);const se=new Kn({uid:q,auth:e,email:f,emailVerified:K,displayName:h,isAnonymous:he,photoURL:y,phoneNumber:g,tenantId:E,stsTokenManager:Ie,createdAt:C,lastLoginAt:P});return ge&&Array.isArray(ge)&&(se.providerData=ge.map(fe=>Object.assign({},fe))),w&&(se._redirectEventId=w),se}static async _fromIdTokenResponse(e,n,r=!1){const s=new qs;s.updateFromServerResponse(n);const i=new Kn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ho(i),i}}/**
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
 */class Ld{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ld.type="NONE";const Ud=Ld;/**
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
 */function fo(t,e,n){return`firebase:${t}:${e}:${n}`}class Ur{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=fo(this.userKey,s.apiKey,i),this.fullPersistenceKey=fo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ur(Zt(Ud),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Zt(Ud);const o=fo(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Kn._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ur(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Ur(i,e,r))}}/**
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
 */function Fd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($d(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qd(e))return"Blackberry";if(Hd(e))return"Webos";if(Xl(e))return"Safari";if((e.includes("chrome/")||Bd(e))&&!e.includes("edge/"))return"Chrome";if(jd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Vd(t=Ve()){return/firefox\//i.test(t)}function Xl(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Bd(t=Ve()){return/crios\//i.test(t)}function $d(t=Ve()){return/iemobile/i.test(t)}function jd(t=Ve()){return/android/i.test(t)}function qd(t=Ve()){return/blackberry/i.test(t)}function Hd(t=Ve()){return/webos/i.test(t)}function po(t=Ve()){return/iphone|ipad|ipod/i.test(t)}function FI(t=Ve()){var e;return po(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function VI(){return bd()&&document.documentMode===10}function zd(t=Ve()){return po(t)||jd(t)||Hd(t)||qd(t)||/windows phone/i.test(t)||$d(t)}function BI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Kd(t,e=[]){let n;switch(t){case"Browser":n=Fd(Ve());break;case"Worker":n=`${Fd(Ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fs}/${r}`}/**
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
 */class $I{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wd(this),this.idTokenSubscription=new Wd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nd,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zt(n)),this._initializationPromise=this.queue(async()=>{var r,s;this._deleted||(this.persistenceManager=await Ur.create(this,e),!this._deleted&&(((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ho(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?at(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Zt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ps("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zt(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Ur.create(this,[Zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Y(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function go(t){return at(t)}class Wd{constructor(e){this.auth=e,this.observer=null,this.addObserver=N_(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Zl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Jt("not implemented")}_getIdTokenResponse(e){return Jt("not implemented")}_linkToIdToken(e,n){return Jt("not implemented")}_getReauthenticationResolver(e){return Jt("not implemented")}}async function jI(t,e){return Mr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function qI(t,e){return $s(t,"POST","/v1/accounts:signInWithPassword",Bs(t,e))}/**
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
 */async function HI(t,e){return $s(t,"POST","/v1/accounts:signInWithEmailLink",Bs(t,e))}async function zI(t,e){return $s(t,"POST","/v1/accounts:signInWithEmailLink",Bs(t,e))}/**
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
 */class Hs extends Zl{constructor(e,n,r,s=null){super("password",r);this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Hs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Hs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return qI(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return HI(e,{email:this._email,oobCode:this._password});default:Ut(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return jI(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return zI(e,{idToken:n,email:this._email,oobCode:this._password});default:Ut(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Fr(t,e){return $s(t,"POST","/v1/accounts:signInWithIdp",Bs(t,e))}/**
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
 */const KI="http://localhost";class Wn extends Zl{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Wn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Hl(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Wn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Fr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fr(e,n)}buildRequest(){const e={requestUri:KI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xs(n)}return e}}/**
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
 */function WI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function GI(t){const e=Ms(Ls(t)).link,n=e?Ms(Ls(e)).deep_link_id:null,r=Ms(Ls(t)).deep_link_id;return(r?Ms(Ls(r)).link:null)||r||n||e||t}class ec{constructor(e){var n,r,s,i,o,a;const l=Ms(Ls(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=WI((s=l.mode)!==null&&s!==void 0?s:null);Y(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=GI(e);try{return new ec(n)}catch{return null}}}/**
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
 */class Vr{constructor(){this.providerId=Vr.PROVIDER_ID}static credential(e,n){return Hs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ec.parseLink(n);return Y(r,"argument-error"),Hs._fromEmailAndCode(e,r.code,r.tenantId)}}Vr.PROVIDER_ID="password";Vr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Gd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zs extends Gd{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class vn extends zs{constructor(){super("facebook.com")}static credential(e){return Wn._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";vn.PROVIDER_ID="facebook.com";/**
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
 */class wn extends zs{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Wn._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return wn.credential(n,r)}catch{return null}}}wn.GOOGLE_SIGN_IN_METHOD="google.com";wn.PROVIDER_ID="google.com";/**
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
 */class En extends zs{constructor(){super("github.com")}static credential(e){return Wn._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
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
 */class _n extends zs{constructor(){super("twitter.com")}static credential(e,n){return Wn._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return _n.credential(n,r)}catch{return null}}}_n.TWITTER_SIGN_IN_METHOD="twitter.com";_n.PROVIDER_ID="twitter.com";/**
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
 */async function QI(t,e){return $s(t,"POST","/v1/accounts:signUp",Bs(t,e))}/**
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
 */class Gn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Kn._fromIdTokenResponse(e,r,s),o=Qd(r);return new Gn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Qd(r);return new Gn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Qd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class mo extends Pr{constructor(e,n,r,s){var i;super(n.code,n.message);this.operationType=r,this.user=s,Object.setPrototypeOf(this,mo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new mo(e,n,r,s)}}function Yd(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?mo._fromErrorAndOperation(t,i,e,r):i})}async function YI(t,e,n=!1){const r=await Lr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gn._forOperation(t,"link",r)}/**
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
 */async function JI(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Lr(t,Yd(r,s,e,t),n);Y(i.idToken,r,"internal-error");const o=Jl(i.idToken);Y(o,r,"internal-error");const{sub:a}=o;return Y(t.uid===a,r,"user-mismatch"),Gn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ut(r,"user-mismatch"),i}}/**
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
 */async function Jd(t,e,n=!1){const r="signIn",s=await Yd(t,r,e),i=await Gn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function XI(t,e){return Jd(go(t),e)}async function BR(t,e,n){const r=go(t),s=await QI(r,{returnSecureToken:!0,email:e,password:n}),i=await Gn._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function $R(t,e,n){return XI(at(t),Vr.credential(e,n))}/**
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
 */async function ZI(t,e){return Mr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function jR(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=at(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Lr(r,ZI(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}const yo="__sak";/**
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
 */class Xd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yo,"1"),this.storage.removeItem(yo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function e0(){const t=Ve();return Xl(t)||po(t)}const t0=1e3,n0=10;class Zd extends Xd{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=e0()&&BI(),this.fallbackToPolling=zd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);VI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,n0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},t0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zd.type="LOCAL";const r0=Zd;/**
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
 */class ep extends Xd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ep.type="SESSION";const tp=ep;/**
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
 */function s0(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class vo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new vo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await s0(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vo.receivers=[];/**
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
 */function tc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class i0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=tc("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function zt(){return window}function o0(t){zt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function np(){return typeof zt().WorkerGlobalScope!="undefined"&&typeof zt().importScripts=="function"}async function a0(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function l0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function c0(){return np()?self:null}/**
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
 */const rp="firebaseLocalStorageDb",u0=1,wo="firebaseLocalStorage",sp="fbase_key";class Ks{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Eo(t,e){return t.transaction([wo],e?"readwrite":"readonly").objectStore(wo)}function h0(){const t=indexedDB.deleteDatabase(rp);return new Ks(t).toPromise()}function nc(){const t=indexedDB.open(rp,u0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wo,{keyPath:sp})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wo)?e(r):(r.close(),await h0(),e(await nc()))})})}async function ip(t,e,n){const r=Eo(t,!0).put({[sp]:e,value:n});return new Ks(r).toPromise()}async function f0(t,e){const n=Eo(t,!1).get(e),r=await new Ks(n).toPromise();return r===void 0?null:r.value}function op(t,e){const n=Eo(t,!0).delete(e);return new Ks(n).toPromise()}const d0=800,p0=3;class ap{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>p0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return np()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vo._getInstance(c0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await a0(),!this.activeServiceWorker)return;this.sender=new i0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||l0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nc();return await ip(e,yo,"1"),await op(e,yo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ip(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>f0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>op(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Eo(s,!1).getAll();return new Ks(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),d0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ap.type="LOCAL";const g0=ap;/**
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
 */function m0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function y0(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ht("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",m0().appendChild(r)})}function v0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Vs(3e4,6e4);/**
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
 */function w0(t,e){return e?Zt(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class rc extends Zl{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Fr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function E0(t){return Jd(t.auth,new rc(t),t.bypassAuthState)}function _0(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),JI(n,new rc(t),t.bypassAuthState)}async function I0(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),YI(n,new rc(t),t.bypassAuthState)}/**
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
 */class lp{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return E0;case"linkViaPopup":case"linkViaRedirect":return I0;case"reauthViaPopup":case"reauthViaRedirect":return _0;default:Ut(this.auth,"internal-error")}}resolve(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const b0=new Vs(2e3,1e4);class Br extends lp{constructor(e,n,r,s,i){super(e,n,s,i);this.provider=r,this.authWindow=null,this.pollId=null,Br.currentPopupAction&&Br.currentPopupAction.cancel(),Br.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Xt(this.filter.length===1,"Popup operations only handle one event");const e=tc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Br.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ht(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,b0.get())};e()}}Br.currentPopupAction=null;/**
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
 */const T0="pendingRedirect",sc=new Map;class S0 extends lp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=sc.get(this.auth._key());if(!e){try{const r=await A0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}sc.set(this.auth._key(),e)}return this.bypassAuthState||sc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function A0(t,e){const n=R0(e),r=C0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function C0(t){return Zt(t._redirectPersistence)}function R0(t){return fo(T0,t.config.apiKey,t.name)}async function N0(t,e,n=!1){const r=go(t),s=w0(r,e),o=await new S0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const k0=10*60*1e3;class O0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!D0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!up(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ht(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=k0&&this.cachedEventUids.clear(),this.cachedEventUids.has(cp(e))}saveEventToCache(e){this.cachedEventUids.add(cp(e)),this.lastProcessedEventTime=Date.now()}}function cp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function up({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function D0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return up(t);default:return!1}}/**
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
 */async function P0(t,e={}){return Mr(t,"GET","/v1/projects",e)}/**
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
 */const x0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,M0=/^https?/;async function L0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await P0(t);for(const n of e)try{if(U0(n))return}catch{}Ut(t,"unauthorized-domain")}function U0(t){const e=Kl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!M0.test(n))return!1;if(x0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const F0=new Vs(3e4,6e4);function hp(){const t=zt().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function V0(t){return new Promise((e,n)=>{var r,s,i;function o(){hp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hp(),n(Ht(t,"network-request-failed"))},timeout:F0.get()})}if((s=(r=zt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0?void 0:s.Iframe)e(gapi.iframes.getContext());else if((i=zt().gapi)===null||i===void 0?void 0:i.load)o();else{const a=v0("iframefcb");return zt()[a]=()=>{gapi.load?o():n(Ht(t,"network-request-failed"))},y0(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw _o=null,e})}let _o=null;function B0(t){return _o=_o||V0(t),_o}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const $0=new Vs(5e3,15e3),j0="__/auth/iframe",q0="emulator/auth/iframe",H0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},z0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function K0(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wl(e,q0):`https://${t.config.authDomain}/${j0}`,r={apiKey:e.apiKey,appName:t.name,v:Fs},s=z0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${xs(r).slice(1)}`}async function W0(t){const e=await B0(t),n=zt().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:K0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:H0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ht(t,"network-request-failed"),a=zt().setTimeout(()=>{i(o)},$0.get());function l(){zt().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const G0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Q0=500,Y0=600,J0="_blank",X0="http://localhost";class fp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Z0(t,e,n,r=Q0,s=Y0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},G0),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Ve().toLowerCase();n&&(a=Bd(c)?J0:n),Vd(c)&&(e=e||X0,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(FI(c)&&a!=="_self")return eb(e||"",a),new fp(null);const h=window.open(e||"",a,u);Y(h,t,"popup-blocked");try{h.focus()}catch{}return new fp(h)}function eb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const tb="__/auth/handler",nb="emulator/auth/handler";function dp(t,e,n,r,s,i){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Fs,eventId:s};if(e instanceof Gd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",R_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(i||{}))o[l]=c}if(e instanceof zs){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${rb(t)}?${xs(a).slice(1)}`}function rb({config:t}){return t.emulator?Wl(t,nb):`https://${t.authDomain}/${tb}`}/**
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
 */const ic="webStorageSupport";class sb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tp,this._completeRedirectFn=N0}async _openPopup(e,n,r,s){var i;Xt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=dp(e,n,r,Kl(),s);return Z0(e,o,tc())}async _openRedirect(e,n,r,s){return await this._originValidation(e),o0(dp(e,n,r,Kl(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Xt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r}async initAndGetManager(e){const n=await W0(e),r=new O0(e);return n.register("authEvent",s=>(Y(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ic,{type:ic},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ic];o!==void 0&&n(!!o),Ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=L0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zd()||Xl()||po()}}const ib=sb;var pp="@firebase/auth",gp="0.19.3";/**
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
 */class ob{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ab(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function lb(t){Us(new xr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:i}=r.options;return(o=>{Y(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),Y(!(i==null?void 0:i.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:i,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kd(t)},l=new $I(o,a);return _I(l,n),l})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Us(new xr("auth-internal",e=>{const n=go(e.getProvider("auth").getImmediate());return(r=>new ob(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mn(pp,gp,ab(t)),mn(pp,gp,"esm2017")}/**
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
 */function qR(t=Cd()){const e=ql(t,"auth");return e.isInitialized()?e.getImmediate():EI(t,{popupRedirectResolver:ib,persistence:[g0,r0,tp]})}lb("Browser");var cb=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},L,oc=oc||{},J=cb||self;function Io(){}function ac(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ws(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ub(t){return Object.prototype.hasOwnProperty.call(t,lc)&&t[lc]||(t[lc]=++hb)}var lc="closure_uid_"+(1e9*Math.random()>>>0),hb=0;function fb(t,e,n){return t.call.apply(t.bind,arguments)}function db(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Ke(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ke=fb:Ke=db,Ke.apply(null,arguments)}function bo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function We(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function In(){this.s=this.s,this.o=this.o}var pb=0,gb={};In.prototype.s=!1;In.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),pb!=0)){var t=ub(this);delete gb[t]}};In.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const mp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},yp=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function mb(t){e:{var e=aT;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function vp(t){return Array.prototype.concat.apply([],arguments)}function cc(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function To(t){return/^[\s\xa0]*$/.test(t)}var wp=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function lt(t,e){return t.indexOf(e)!=-1}function uc(t,e){return t<e?-1:t>e?1:0}var ct;e:{var Ep=J.navigator;if(Ep){var _p=Ep.userAgent;if(_p){ct=_p;break e}}ct=""}function hc(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Ip(t){const e={};for(const n in t)e[n]=t[n];return e}var bp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Tp(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<bp.length;i++)n=bp[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function fc(t){return fc[" "](t),t}fc[" "]=Io;function yb(t){var e=Eb;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var vb=lt(ct,"Opera"),$r=lt(ct,"Trident")||lt(ct,"MSIE"),Sp=lt(ct,"Edge"),dc=Sp||$r,Ap=lt(ct,"Gecko")&&!(lt(ct.toLowerCase(),"webkit")&&!lt(ct,"Edge"))&&!(lt(ct,"Trident")||lt(ct,"MSIE"))&&!lt(ct,"Edge"),wb=lt(ct.toLowerCase(),"webkit")&&!lt(ct,"Edge");function Cp(){var t=J.document;return t?t.documentMode:void 0}var So;e:{var pc="",gc=function(){var t=ct;if(Ap)return/rv:([^\);]+)(\)|;)/.exec(t);if(Sp)return/Edge\/([\d\.]+)/.exec(t);if($r)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(wb)return/WebKit\/(\S+)/.exec(t);if(vb)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(gc&&(pc=gc?gc[1]:""),$r){var mc=Cp();if(mc!=null&&mc>parseFloat(pc)){So=String(mc);break e}}So=pc}var Eb={};function _b(){return yb(function(){let t=0;const e=wp(String(So)).split("."),n=wp("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=uc(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||uc(s[2].length==0,i[2].length==0)||uc(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var yc;if(J.document&&$r){var Rp=Cp();yc=Rp||parseInt(So,10)||void 0}else yc=void 0;var Ib=yc,bb=function(){if(!J.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{J.addEventListener("test",Io,e),J.removeEventListener("test",Io,e)}catch{}return t}();function Xe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Xe.prototype.h=function(){this.defaultPrevented=!0};function Gs(t,e){if(Xe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ap){e:{try{fc(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Tb[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Gs.Z.h.call(this)}}We(Gs,Xe);var Tb={2:"touch",3:"pen",4:"mouse"};Gs.prototype.h=function(){Gs.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Qs="closure_listenable_"+(1e6*Math.random()|0),Sb=0;function Ab(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++Sb,this.ca=this.fa=!1}function Ao(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Co(t){this.src=t,this.g={},this.h=0}Co.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=wc(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new Ab(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function vc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=mp(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ao(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function wc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var Ec="closure_lm_"+(1e6*Math.random()|0),_c={};function Np(t,e,n,r,s){if(r&&r.once)return Op(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Np(t,e[i],n,r,s);return null}return n=Sc(n),t&&t[Qs]?t.N(e,n,Ws(r)?!!r.capture:!!r,s):kp(t,e,n,!1,r,s)}function kp(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Ws(s)?!!s.capture:!!s,a=bc(t);if(a||(t[Ec]=a=new Co(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=Cb(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)bb||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Pp(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Cb(){function t(n){return e.call(t.src,t.listener,n)}var e=Rb;return t}function Op(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Op(t,e[i],n,r,s);return null}return n=Sc(n),t&&t[Qs]?t.O(e,n,Ws(r)?!!r.capture:!!r,s):kp(t,e,n,!0,r,s)}function Dp(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Dp(t,e[i],n,r,s);else r=Ws(r)?!!r.capture:!!r,n=Sc(n),t&&t[Qs]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=wc(i,n,r,s),-1<n&&(Ao(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=bc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=wc(e,n,r,s)),(n=-1<t?e[t]:null)&&Ic(n))}function Ic(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Qs])vc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Pp(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=bc(e))?(vc(n,t),n.h==0&&(n.src=null,e[Ec]=null)):Ao(t)}}}function Pp(t){return t in _c?_c[t]:_c[t]="on"+t}function Rb(t,e){if(t.ca)t=!0;else{e=new Gs(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Ic(t),t=n.call(r,e)}return t}function bc(t){return t=t[Ec],t instanceof Co?t:null}var Tc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sc(t){return typeof t=="function"?t:(t[Tc]||(t[Tc]=function(e){return t.handleEvent(e)}),t[Tc])}function Be(){In.call(this),this.i=new Co(this),this.P=this,this.I=null}We(Be,In);Be.prototype[Qs]=!0;Be.prototype.removeEventListener=function(t,e,n,r){Dp(this,t,e,n,r)};function Ge(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Xe(e,t);else if(e instanceof Xe)e.target=e.target||t;else{var s=e;e=new Xe(r,t),Tp(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Ro(o,r,!0,e)&&s}if(o=e.g=t,s=Ro(o,r,!0,e)&&s,s=Ro(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Ro(o,r,!1,e)&&s}Be.prototype.M=function(){if(Be.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ao(n[r]);delete t.g[e],t.h--}}this.I=null};Be.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Be.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ro(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&vc(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var Ac=J.JSON.stringify;function Nb(){var t=Mp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class kb{constructor(){this.h=this.g=null}add(e,n){const r=xp.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var xp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Ob,t=>t.reset());class Ob{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Db(t){J.setTimeout(()=>{throw t},0)}function Cc(t,e){Rc||Pb(),Nc||(Rc(),Nc=!0),Mp.add(t,e)}var Rc;function Pb(){var t=J.Promise.resolve(void 0);Rc=function(){t.then(xb)}}var Nc=!1,Mp=new kb;function xb(){for(var t;t=Nb();){try{t.h.call(t.g)}catch(n){Db(n)}var e=xp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Nc=!1}function No(t,e){Be.call(this),this.h=t||1,this.g=e||J,this.j=Ke(this.kb,this),this.l=Date.now()}We(No,Be);L=No.prototype;L.da=!1;L.S=null;L.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ge(this,"tick"),this.da&&(kc(this),this.start()))}};L.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function kc(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}L.M=function(){No.Z.M.call(this),kc(this),delete this.g};function Oc(t,e,n){if(typeof t=="function")n&&(t=Ke(t,n));else if(t&&typeof t.handleEvent=="function")t=Ke(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:J.setTimeout(t,e||0)}function Lp(t){t.g=Oc(()=>{t.g=null,t.i&&(t.i=!1,Lp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Mb extends In{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Lp(this)}M(){super.M(),this.g&&(J.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ys(t){In.call(this),this.h=t,this.g={}}We(Ys,In);var Up=[];function Fp(t,e,n,r){Array.isArray(n)||(n&&(Up[0]=n.toString()),n=Up);for(var s=0;s<n.length;s++){var i=Np(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Vp(t){hc(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ic(e)},t),t.g={}}Ys.prototype.M=function(){Ys.Z.M.call(this),Vp(this)};Ys.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ko(){this.g=!0}ko.prototype.Aa=function(){this.g=!1};function Lb(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Ub(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function jr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Vb(t,n)+(r?" "+r:"")})}function Fb(t,e){t.info(function(){return"TIMEOUT: "+e})}ko.prototype.info=function(){};function Vb(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Ac(n)}catch{return e}}var Qn={},Bp=null;function Oo(){return Bp=Bp||new Be}Qn.Ma="serverreachability";function $p(t){Xe.call(this,Qn.Ma,t)}We($p,Xe);function Js(t){const e=Oo();Ge(e,new $p(e,t))}Qn.STAT_EVENT="statevent";function jp(t,e){Xe.call(this,Qn.STAT_EVENT,t),this.stat=e}We(jp,Xe);function ut(t){const e=Oo();Ge(e,new jp(e,t))}Qn.Na="timingevent";function qp(t,e){Xe.call(this,Qn.Na,t),this.size=e}We(qp,Xe);function Xs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return J.setTimeout(function(){t()},e)}var Do={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Hp={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Dc(){}Dc.prototype.h=null;function zp(t){return t.h||(t.h=t.i())}function Kp(){}var Zs={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Pc(){Xe.call(this,"d")}We(Pc,Xe);function xc(){Xe.call(this,"c")}We(xc,Xe);var Mc;function Po(){}We(Po,Dc);Po.prototype.g=function(){return new XMLHttpRequest};Po.prototype.i=function(){return{}};Mc=new Po;function ei(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Ys(this),this.P=Bb,t=dc?125:void 0,this.W=new No(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Wp}function Wp(){this.i=null,this.g="",this.h=!1}var Bb=45e3,Lc={},xo={};L=ei.prototype;L.setTimeout=function(t){this.P=t};function Uc(t,e,n){t.K=1,t.v=Vo(en(e)),t.s=n,t.U=!0,Gp(t,null)}function Gp(t,e){t.F=Date.now(),ti(t),t.A=en(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),rg(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Wp,t.g=Ag(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Mb(Ke(t.Ia,t,t.g),t.O)),Fp(t.V,t.g,"readystatechange",t.gb),e=t.H?Ip(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Js(1),Lb(t.j,t.u,t.A,t.m,t.X,t.s)}L.gb=function(t){t=t.target;const e=this.L;e&&tn(t)==3?e.l():this.Ia(t)};L.Ia=function(t){try{if(t==this.g)e:{const u=tn(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||dc||this.g&&(this.h.h||this.g.ga()||gg(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Js(3):Js(2)),Mo(this);var n=this.g.ba();this.N=n;t:if(Qp(this)){var r=gg(this.g);t="";var s=r.length,i=tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Yn(this),ni(this);var o="";break t}this.h.i=new J.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Ub(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!To(a)){var c=a;break t}}c=null}if(n=c)jr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Fc(this,n);else{this.i=!1,this.o=3,ut(12),Yn(this),ni(this);break e}}this.U?(Yp(this,u,o),dc&&this.i&&u==3&&(Fp(this.V,this.W,"tick",this.fb),this.W.start())):(jr(this.j,this.m,o,null),Fc(this,o)),u==4&&Yn(this),this.i&&!this.I&&(u==4?Ig(this.l,this):(this.i=!1,ti(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ut(12)):(this.o=0,ut(13)),Yn(this),ni(this)}}}catch{}finally{}};function Qp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Yp(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=$b(t,n),s==xo){e==4&&(t.o=4,ut(14),r=!1),jr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Lc){t.o=4,ut(15),jr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else jr(t.j,t.m,s,null),Fc(t,s);Qp(t)&&s!=xo&&s!=Lc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ut(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Qc(e),e.L=!0,ut(11))):(jr(t.j,t.m,n,"[Invalid Chunked Response]"),Yn(t),ni(t))}L.fb=function(){if(this.g){var t=tn(this.g),e=this.g.ga();this.C<e.length&&(Mo(this),Yp(this,t,e),this.i&&t!=4&&ti(this))}};function $b(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?xo:(n=Number(e.substring(n,r)),isNaN(n)?Lc:(r+=1,r+n>e.length?xo:(e=e.substr(r,n),t.C=r+n,e)))}L.cancel=function(){this.I=!0,Yn(this)};function ti(t){t.Y=Date.now()+t.P,Jp(t,t.P)}function Jp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Xs(Ke(t.eb,t),e)}function Mo(t){t.B&&(J.clearTimeout(t.B),t.B=null)}L.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Fb(this.j,this.A),this.K!=2&&(Js(3),ut(17)),Yn(this),this.o=2,ni(this)):Jp(this,this.Y-t)};function ni(t){t.l.G==0||t.I||Ig(t.l,t)}function Yn(t){Mo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,kc(t.W),Vp(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Fc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||$c(n.i,t))){if(n.I=t.N,!t.J&&$c(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)zo(n),qo(n);else break e;Gc(n),ut(18)}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=Xs(Ke(n.ab,n),6e3));if(1>=og(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Zn(n,11)}else if((t.J||n.g==t)&&zo(n),!To(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const u=c[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=c[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;!i.g&&(lt(y,"spdy")||lt(y,"quic")||lt(y,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(jc(i,i.h),i.h=null))}if(r.D){const E=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.sa=E,Re(r.F,r.D,E))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Sg(r,r.H?r.la:null,r.W),o.J){ag(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Mo(a),ti(a)),r.g=o}else Eg(r);0<n.l.length&&Ho(n)}else c[0]!="stop"&&c[0]!="close"||Zn(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Zn(n,7):Kc(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}Js(4)}catch{}}function jb(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(ac(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Vc(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ac(t)||typeof t=="string")yp(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(ac(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=jb(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function qr(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof qr)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}L=qr.prototype;L.R=function(){Bc(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};L.T=function(){return Bc(this),this.g.concat()};function Bc(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Jn(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],Jn(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}L.get=function(t,e){return Jn(this.h,t)?this.h[t]:e};L.set=function(t,e){Jn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};L.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function Jn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Xp=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function qb(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Xn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Xn){this.g=e!==void 0?e:t.g,Lo(this,t.j),this.s=t.s,Uo(this,t.i),Fo(this,t.m),this.l=t.l,e=t.h;var n=new ii;n.i=e.i,e.g&&(n.g=new qr(e.g),n.h=e.h),Zp(this,n),this.o=t.o}else t&&(n=String(t).match(Xp))?(this.g=!!e,Lo(this,n[1]||"",!0),this.s=ri(n[2]||""),Uo(this,n[3]||"",!0),Fo(this,n[4]),this.l=ri(n[5]||"",!0),Zp(this,n[6]||"",!0),this.o=ri(n[7]||"")):(this.g=!!e,this.h=new ii(null,this.g))}Xn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(si(e,eg,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(si(e,eg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(si(n,n.charAt(0)=="/"?Gb:Wb,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",si(n,Yb)),t.join("")};function en(t){return new Xn(t)}function Lo(t,e,n){t.j=n?ri(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Uo(t,e,n){t.i=n?ri(e,!0):e}function Fo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Zp(t,e,n){e instanceof ii?(t.h=e,Jb(t.h,t.g)):(n||(e=si(e,Qb)),t.h=new ii(e,t.g))}function Re(t,e,n){t.h.set(e,n)}function Vo(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Hb(t){return t instanceof Xn?en(t):new Xn(t,void 0)}function zb(t,e,n,r){var s=new Xn(null,void 0);return t&&Lo(s,t),e&&Uo(s,e),n&&Fo(s,n),r&&(s.l=r),s}function ri(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function si(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Kb),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Kb(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var eg=/[#\/\?@]/g,Wb=/[#\?:]/g,Gb=/[#\?]/g,Qb=/[#\?@]/g,Yb=/#/g;function ii(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function bn(t){t.g||(t.g=new qr,t.h=0,t.i&&qb(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=ii.prototype;L.add=function(t,e){bn(this),this.i=null,t=Hr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function tg(t,e){bn(t),e=Hr(t,e),Jn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Jn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Bc(t)))}function ng(t,e){return bn(t),e=Hr(t,e),Jn(t.g.h,e)}L.forEach=function(t,e){bn(this),this.g.forEach(function(n,r){yp(n,function(s){t.call(e,s,r,this)},this)},this)};L.T=function(){bn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};L.R=function(t){bn(this);var e=[];if(typeof t=="string")ng(this,t)&&(e=vp(e,this.g.get(Hr(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=vp(e,t[n])}return e};L.set=function(t,e){return bn(this),this.i=null,t=Hr(this,t),ng(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function rg(t,e,n){tg(t,e),0<n.length&&(t.i=null,t.g.set(Hr(t,e),cc(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function Hr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Jb(t,e){e&&!t.j&&(bn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(tg(this,r),rg(this,s,n))},t)),t.j=e}var Xb=class{constructor(t,e){this.h=t,this.g=e}};function sg(t){this.l=t||Zb,J.PerformanceNavigationTiming?(t=J.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(J.g&&J.g.Ea&&J.g.Ea()&&J.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Zb=10;function ig(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function og(t){return t.h?1:t.g?t.g.size:0}function $c(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function jc(t,e){t.g?t.g.add(e):t.h=e}function ag(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}sg.prototype.cancel=function(){if(this.i=lg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function lg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return cc(t.i)}function qc(){}qc.prototype.stringify=function(t){return J.JSON.stringify(t,void 0)};qc.prototype.parse=function(t){return J.JSON.parse(t,void 0)};function eT(){this.g=new qc}function tT(t,e,n){const r=n||"";try{Vc(t,function(s,i){let o=s;Ws(s)&&(o=Ac(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function nT(t,e){const n=new ko;if(J.Image){const r=new Image;r.onload=bo(Bo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=bo(Bo,n,r,"TestLoadImage: error",!1,e),r.onabort=bo(Bo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=bo(Bo,n,r,"TestLoadImage: timeout",!1,e),J.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Bo(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function oi(t){this.l=t.$b||null,this.j=t.ib||!1}We(oi,Dc);oi.prototype.g=function(){return new $o(this.l,this.j)};oi.prototype.i=function(t){return function(){return t}}({});function $o(t,e){Be.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Hc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}We($o,Be);var Hc=0;L=$o.prototype;L.open=function(t,e){if(this.readyState!=Hc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,li(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||J).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ai(this)),this.readyState=Hc};L.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,li(this)),this.g&&(this.readyState=3,li(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof J.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;cg(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function cg(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}L.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ai(this):li(this),this.readyState==3&&cg(this)}};L.Ua=function(t){this.g&&(this.response=this.responseText=t,ai(this))};L.Ta=function(t){this.g&&(this.response=t,ai(this))};L.ha=function(){this.g&&ai(this)};function ai(t){t.readyState=4,t.l=null,t.j=null,t.A=null,li(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function li(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty($o.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var rT=J.JSON.parse;function xe(t){Be.call(this),this.headers=new qr,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ug,this.K=this.L=!1}We(xe,Be);var ug="",sT=/^https?$/i,iT=["POST","PUT"];L=xe.prototype;L.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Mc.g(),this.C=this.u?zp(this.u):zp(Mc),this.g.onreadystatechange=Ke(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){hg(this,i);return}t=n||"";const s=new qr(this.headers);r&&Vc(r,function(i,o){s.set(o,i)}),r=mb(s.T()),n=J.FormData&&t instanceof J.FormData,!(0<=mp(iT,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{pg(this),0<this.B&&((this.K=oT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ke(this.pa,this)):this.A=Oc(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){hg(this,i)}};function oT(t){return $r&&_b()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function aT(t){return t.toLowerCase()=="content-type"}L.pa=function(){typeof oc!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ge(this,"timeout"),this.abort(8))};function hg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,fg(t),jo(t)}function fg(t){t.D||(t.D=!0,Ge(t,"complete"),Ge(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ge(this,"complete"),Ge(this,"abort"),jo(this))};L.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),jo(this,!0)),xe.Z.M.call(this)};L.Fa=function(){this.s||(this.F||this.v||this.l?dg(this):this.cb())};L.cb=function(){dg(this)};function dg(t){if(t.h&&typeof oc!="undefined"&&(!t.C[1]||tn(t)!=4||t.ba()!=2)){if(t.v&&tn(t)==4)Oc(t.Fa,0,t);else if(Ge(t,"readystatechange"),tn(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(Xp)[1]||null;if(!s&&J.self&&J.self.location){var i=J.self.location.protocol;s=i.substr(0,i.length-1)}r=!sT.test(s?s.toLowerCase():"")}n=r}if(n)Ge(t,"complete"),Ge(t,"success");else{t.m=6;try{var o=2<tn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",fg(t)}}finally{jo(t)}}}}function jo(t,e){if(t.g){pg(t);const n=t.g,r=t.C[0]?Io:null;t.g=null,t.C=null,e||Ge(t,"ready");try{n.onreadystatechange=r}catch{}}}function pg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(J.clearTimeout(t.A),t.A=null)}function tn(t){return t.g?t.g.readyState:0}L.ba=function(){try{return 2<tn(this)?this.g.status:-1}catch{return-1}};L.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),rT(e)}};function gg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ug:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}L.Da=function(){return this.m};L.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function lT(t){let e="";return hc(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function zc(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=lT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Re(t,e,n))}function ci(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function mg(t){this.za=0,this.l=[],this.h=new ko,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ci("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ci("baseRetryDelayMs",5e3,t),this.$a=ci("retryDelaySeedMs",1e4,t),this.Ya=ci("forwardChannelMaxRetries",2,t),this.ra=ci("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new sg(t&&t.concurrentRequestLimit),this.Ca=new eT,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}L=mg.prototype;L.ma=8;L.G=1;function Kc(t){if(yg(t),t.G==3){var e=t.V++,n=en(t.F);Re(n,"SID",t.J),Re(n,"RID",e),Re(n,"TYPE","terminate"),ui(t,n),e=new ei(t,t.h,e,void 0),e.K=2,e.v=Vo(en(n)),n=!1,J.navigator&&J.navigator.sendBeacon&&(n=J.navigator.sendBeacon(e.v.toString(),"")),!n&&J.Image&&(new Image().src=e.v,n=!0),n||(e.g=Ag(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ti(e)}Tg(t)}L.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function qo(t){t.g&&(Qc(t),t.g.cancel(),t.g=null)}function yg(t){qo(t),t.u&&(J.clearTimeout(t.u),t.u=null),zo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&J.clearTimeout(t.m),t.m=null)}function Wc(t,e){t.l.push(new Xb(t.Za++,e)),t.G==3&&Ho(t)}function Ho(t){ig(t.i)||t.m||(t.m=!0,Cc(t.Ha,t),t.C=0)}function cT(t,e){return og(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Xs(Ke(t.Ha,t,e),bg(t,t.C)),t.C++,!0)}L.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new ei(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Ip(i),Tp(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=wg(this,s,e),n=en(this.F),Re(n,"RID",t),Re(n,"CVER",22),this.D&&Re(n,"X-HTTP-Session-Id",this.D),ui(this,n),this.o&&i&&zc(n,this.o,i),jc(this.i,s),this.Ra&&Re(n,"TYPE","init"),this.ja?(Re(n,"$req",e),Re(n,"SID","null"),s.$=!0,Uc(s,n,null)):Uc(s,n,e),this.G=2}}else this.G==3&&(t?vg(this,t):this.l.length==0||ig(this.i)||vg(this))};function vg(t,e){var n;e?n=e.m:n=t.V++;const r=en(t.F);Re(r,"SID",t.J),Re(r,"RID",n),Re(r,"AID",t.U),ui(t,r),t.o&&t.s&&zc(r,t.o,t.s),n=new ei(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=wg(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),jc(t.i,n),Uc(n,r,e)}function ui(t,e){t.j&&Vc({},function(n,r){Re(e,r,n)})}function wg(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Ke(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].h;const u=s[l].g;if(c-=i,0>c)i=Math.max(0,s[l].h-100),a=!1;else try{tT(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function Eg(t){t.g||t.u||(t.Y=1,Cc(t.Ga,t),t.A=0)}function Gc(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Xs(Ke(t.Ga,t),bg(t,t.A)),t.A++,!0)}L.Ga=function(){if(this.u=null,_g(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Xs(Ke(this.bb,this),t)}};L.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ut(10),qo(this),_g(this))};function Qc(t){t.B!=null&&(J.clearTimeout(t.B),t.B=null)}function _g(t){t.g=new ei(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=en(t.oa);Re(e,"RID","rpc"),Re(e,"SID",t.J),Re(e,"CI",t.N?"0":"1"),Re(e,"AID",t.U),ui(t,e),Re(e,"TYPE","xmlhttp"),t.o&&t.s&&zc(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Vo(en(e)),n.s=null,n.U=!0,Gp(n,t)}L.ab=function(){this.v!=null&&(this.v=null,qo(this),Gc(this),ut(19))};function zo(t){t.v!=null&&(J.clearTimeout(t.v),t.v=null)}function Ig(t,e){var n=null;if(t.g==e){zo(t),Qc(t),t.g=null;var r=2}else if($c(t.i,e))n=e.D,ag(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=Oo(),Ge(r,new qp(r,n,e,s)),Ho(t)}else Eg(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&cT(t,e)||r==2&&Gc(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Zn(t,5);break;case 4:Zn(t,10);break;case 3:Zn(t,6);break;default:Zn(t,2)}}}function bg(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Zn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Ke(t.jb,t);n||(n=new Xn("//www.google.com/images/cleardot.gif"),J.location&&J.location.protocol=="http"||Lo(n,"https"),Vo(n)),nT(n.toString(),r)}else ut(2);t.G=0,t.j&&t.j.va(e),Tg(t),yg(t)}L.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ut(2)):(this.h.info("Failed to ping google.com"),ut(1))};function Tg(t){t.G=0,t.I=-1,t.j&&((lg(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,cc(t.l),t.l.length=0),t.j.ua())}function Sg(t,e,n){let r=Hb(n);if(r.i!="")e&&Uo(r,e+"."+r.i),Fo(r,r.m);else{const s=J.location;r=zb(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&hc(t.aa,function(s,i){Re(r,i,s)}),e=t.D,n=t.sa,e&&n&&Re(r,e,n),Re(r,"VER",t.ma),ui(t,r),r}function Ag(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new xe(new oi({ib:!0})):new xe(t.qa),e.L=t.H,e}function Cg(){}L=Cg.prototype;L.xa=function(){};L.wa=function(){};L.va=function(){};L.ua=function(){};L.Oa=function(){};function Ko(){if($r&&!(10<=Number(Ib)))throw Error("Environmental error: no available transport.")}Ko.prototype.g=function(t,e){return new It(t,e)};function It(t,e){Be.call(this),this.g=new mg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!To(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!To(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new zr(this)}We(It,Be);It.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Cc(Ke(t.hb,t,e))),ut(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Sg(t,null,t.W),Ho(t)};It.prototype.close=function(){Kc(this.g)};It.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Wc(this.g,e)}else this.v?(e={},e.__data__=Ac(t),Wc(this.g,e)):Wc(this.g,t)};It.prototype.M=function(){this.g.j=null,delete this.j,Kc(this.g),delete this.g,It.Z.M.call(this)};function Rg(t){Pc.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}We(Rg,Pc);function Ng(){xc.call(this),this.status=1}We(Ng,xc);function zr(t){this.g=t}We(zr,Cg);zr.prototype.xa=function(){Ge(this.g,"a")};zr.prototype.wa=function(t){Ge(this.g,new Rg(t))};zr.prototype.va=function(t){Ge(this.g,new Ng(t))};zr.prototype.ua=function(){Ge(this.g,"b")};Ko.prototype.createWebChannel=Ko.prototype.g;It.prototype.send=It.prototype.u;It.prototype.open=It.prototype.m;It.prototype.close=It.prototype.close;Do.NO_ERROR=0;Do.TIMEOUT=8;Do.HTTP_ERROR=6;Hp.COMPLETE="complete";Kp.EventType=Zs;Zs.OPEN="a";Zs.CLOSE="b";Zs.ERROR="c";Zs.MESSAGE="d";Be.prototype.listen=Be.prototype.N;xe.prototype.listenOnce=xe.prototype.O;xe.prototype.getLastError=xe.prototype.La;xe.prototype.getLastErrorCode=xe.prototype.Da;xe.prototype.getStatus=xe.prototype.ba;xe.prototype.getResponseJson=xe.prototype.Qa;xe.prototype.getResponseText=xe.prototype.ga;xe.prototype.send=xe.prototype.ea;var uT=function(){return new Ko},hT=function(){return Oo()},Yc=Do,fT=Hp,dT=Qn,kg={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},pT=oi,Wo=Kp,gT=xe;const Og="@firebase/firestore";/**
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
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
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
 */let Kr="9.5.0";/**
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
 */const er=new Vl("@firebase/firestore");function Dg(){return er.logLevel}function H(t,...e){if(er.logLevel<=ue.DEBUG){const n=e.map(Jc);er.debug(`Firestore (${Kr}): ${t}`,...n)}}function Tn(t,...e){if(er.logLevel<=ue.ERROR){const n=e.map(Jc);er.error(`Firestore (${Kr}): ${t}`,...n)}}function Pg(t,...e){if(er.logLevel<=ue.WARN){const n=e.map(Jc);er.warn(`Firestore (${Kr}): ${t}`,...n)}}function Jc(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${Kr}) INTERNAL ASSERTION FAILED: `+t;throw Tn(e),new Error(e)}function _e(t,e){t||Z()}function ee(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Sn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class mT{constructor(e,n){this.user=n,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class yT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class vT{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Sn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Sn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{H("FirebaseCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(H("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Sn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(_e(typeof r.accessToken=="string"),new mT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return _e(e===null||typeof e=="string"),new pt(e)}}class wT{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=pt.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},n=this.h.auth.getAuthHeaderValueForFirstParty([]);return n&&(e.Authorization=n),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class ET{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new wT(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Xc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.g(r),this.p=r=>n.writeSequenceNumber(r))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}/**
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
 */function _T(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */Xc.T=-1;class xg{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=_T(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function pe(t,e){return t<e?-1:t>e?1:0}function Wr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class bt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return bt.fromMillis(Date.now())}static fromDate(e){return bt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new bt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class de{constructor(e){this.timestamp=e}static fromTimestamp(e){return new de(e)}static min(){return new de(new bt(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function Mg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function tr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Lg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class hi{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return hi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof hi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ne extends hi{construct(e,n,r){return new Ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const IT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends hi{construct(e,n,r){return new gt(e,n,r)}static isValidIdentifier(e){return IT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new U(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new U(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new U(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new U(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(n)}static emptyPath(){return new gt([])}}/**
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
 */class fi{constructor(e){this.fields=e,e.sort(gt.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Wr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ze(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Ze(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const bT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function An(t){if(_e(!!t),typeof t=="string"){let e=0;const n=bT.exec(t);if(_e(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Gr(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
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
 */function Ug(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Fg(t){const e=t.mapValue.fields.__previous_value__;return Ug(e)?Fg(e):e}function di(t){const e=An(t.mapValue.fields.__local_write_time__.timestampValue);return new bt(e.seconds,e.nanos)}/**
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
 */function Qr(t){return t==null}function Go(t){return t===0&&1/t==-1/0}function TT(t){return typeof t=="number"&&Number.isInteger(t)&&!Go(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Ne.fromString(e))}static fromName(e){return new G(Ne.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Ne(e.slice()))}}/**
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
 */function nr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ug(t)?4:10:Z()}function Kt(t,e){const n=nr(t);if(n!==nr(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return di(t).isEqual(di(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=An(r.timestampValue),o=An(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Gr(r.bytesValue).isEqual(Gr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Me(r.geoPointValue.latitude)===Me(s.geoPointValue.latitude)&&Me(r.geoPointValue.longitude)===Me(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Me(r.integerValue)===Me(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Me(r.doubleValue),o=Me(s.doubleValue);return i===o?Go(i)===Go(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Wr(t.arrayValue.values||[],e.arrayValue.values||[],Kt);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Mg(i)!==Mg(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Kt(i[a],o[a])))return!1;return!0}(t,e);default:return Z()}}function pi(t,e){return(t.values||[]).find(n=>Kt(n,e))!==void 0}function Yr(t,e){const n=nr(t),r=nr(e);if(n!==r)return pe(n,r);switch(n){case 0:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Me(s.integerValue||s.doubleValue),a=Me(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Vg(t.timestampValue,e.timestampValue);case 4:return Vg(di(t),di(e));case 5:return pe(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Gr(s),a=Gr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=pe(o[l],a[l]);if(c!==0)return c}return pe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=pe(Me(s.latitude),Me(i.latitude));return o!==0?o:pe(Me(s.longitude),Me(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Yr(o[l],a[l]);if(c)return c}return pe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){const o=s.fields||{},a=Object.keys(o),l=i.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=pe(a[u],c[u]);if(h!==0)return h;const f=Yr(o[a[u]],l[c[u]]);if(f!==0)return f}return pe(a.length,c.length)}(t.mapValue,e.mapValue);default:throw Z()}}function Vg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=An(t),r=An(e),s=pe(n.seconds,r.seconds);return s!==0?s:pe(n.nanos,r.nanos)}function Zc(t){return eu(t)}function eu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=An(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Gr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,G.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=eu(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${eu(r.fields[a])}`;return i+"}"}(t.mapValue):Z();var e,n}function Bg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function tu(t){return!!t&&"integerValue"in t}function nu(t){return!!t&&"arrayValue"in t}function $g(t){return!!t&&"nullValue"in t}function jg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Qo(t){return!!t&&"mapValue"in t}function gi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return tr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=gi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=gi(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
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
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Qo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=gi(n)}setAll(e){let n=gt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=gi(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Qo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Kt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Qo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){tr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Tt(gi(this.value))}}function qg(t){const e=[];return tr(t.fields,(n,r)=>{const s=new gt([n]);if(Qo(r)){const i=qg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new fi(e)}/**
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
 */class et{constructor(e,n,r,s,i){this.key=e,this.documentType=n,this.version=r,this.data=s,this.documentState=i}static newInvalidDocument(e){return new et(e,0,de.min(),Tt.empty(),0)}static newFoundDocument(e,n,r){return new et(e,1,n,r,0)}static newNoDocument(e,n){return new et(e,2,n,Tt.empty(),0)}static newUnknownDocument(e,n){return new et(e,3,n,Tt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new et(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ST{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.A=null}}function Hg(t,e=null,n=[],r=[],s=null,i=null,o=null){return new ST(t,e,n,r,s,i,o)}function ru(t){const e=ee(t);if(e.A===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>CT(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Qr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=Yo(e.startAt)),e.endAt&&(n+="|ub:",n+=Yo(e.endAt)),e.A=n}return e.A}function AT(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Zc(r.value)}`;var r}).join(", ")}]`),Qr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Yo(t.startAt)),t.endAt&&(e+=", endAt: "+Yo(t.endAt)),`Target(${e})`}function su(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!MT(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!Kt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Wg(t.startAt,e.startAt)&&Wg(t.endAt,e.endAt)}function iu(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class ht extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.R(e,n,r):new RT(e,n,r):n==="array-contains"?new OT(e,r):n==="in"?new DT(e,r):n==="not-in"?new PT(e,r):n==="array-contains-any"?new xT(e,r):new ht(e,n,r)}static R(e,n,r){return n==="in"?new NT(e,r):new kT(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.P(Yr(n,this.value)):n!==null&&nr(this.value)===nr(n)&&this.P(Yr(n,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function CT(t){return t.field.canonicalString()+t.op.toString()+Zc(t.value)}class RT extends ht{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.P(n)}}class NT extends ht{constructor(e,n){super(e,"in",n),this.keys=zg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class kT extends ht{constructor(e,n){super(e,"not-in",n),this.keys=zg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function zg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class OT extends ht{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return nu(n)&&pi(n.arrayValue,this.value)}}class DT extends ht{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&pi(this.value.arrayValue,n)}}class PT extends ht{constructor(e,n){super(e,"not-in",n)}matches(e){if(pi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!pi(this.value.arrayValue,n)}}class xT extends ht{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!nu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>pi(this.value.arrayValue,r))}}class ou{constructor(e,n){this.position=e,this.before=n}}function Yo(t){return`${t.before?"b":"a"}:${t.position.map(e=>Zc(e)).join(",")}`}class Jr{constructor(e,n="asc"){this.field=e,this.dir=n}}function MT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Kg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=Yr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return t.before?r<=0:r<0}function Wg(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Kt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Xr{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.V=null,this.S=null,this.startAt,this.endAt}}function LT(t,e,n,r,s,i,o,a){return new Xr(t,e,n,r,s,i,o,a)}function Gg(t){return new Xr(t)}function Jo(t){return!Qr(t.limit)&&t.limitType==="F"}function Xo(t){return!Qr(t.limit)&&t.limitType==="L"}function au(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function lu(t){for(const e of t.filters)if(e.v())return e.field;return null}function Qg(t){return t.collectionGroup!==null}function mi(t){const e=ee(t);if(e.V===null){e.V=[];const n=lu(e),r=au(e);if(n!==null&&r===null)n.isKeyField()||e.V.push(new Jr(n)),e.V.push(new Jr(gt.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.V.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new Jr(gt.keyField(),i))}}}return e.V}function rr(t){const e=ee(t);if(!e.S)if(e.limitType==="F")e.S=Hg(e.path,e.collectionGroup,mi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of mi(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Jr(i.field,o))}const r=e.endAt?new ou(e.endAt.position,!e.endAt.before):null,s=e.startAt?new ou(e.startAt.position,!e.startAt.before):null;e.S=Hg(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.S}function UT(t,e,n){return new Xr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Zo(t,e){return su(rr(t),rr(e))&&t.limitType===e.limitType}function Yg(t){return`${ru(rr(t))}|lt:${t.limitType}`}function cu(t){return`Query(target=${AT(rr(t))}; limitType=${t.limitType})`}function ea(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):G.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!Kg(n.startAt,mi(n),r)||n.endAt&&Kg(n.endAt,mi(n),r))}(t,e)}function Jg(t){return(e,n)=>{let r=!1;for(const s of mi(t)){const i=FT(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function FT(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),l=o.data.field(s);return a!==null&&l!==null?Yr(a,l):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
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
 */function Xg(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Go(e)?"-0":e}}function Zg(t){return{integerValue:""+t}}function VT(t,e){return TT(e)?Zg(e):Xg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ta{constructor(){this._=void 0}}function BT(t,e,n){return t instanceof na?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof yi?tm(t,e):t instanceof vi?nm(t,e):function(r,s){const i=em(r,s),o=rm(i)+rm(r.C);return tu(i)&&tu(r.C)?Zg(o):Xg(r.N,o)}(t,e)}function $T(t,e,n){return t instanceof yi?tm(t,e):t instanceof vi?nm(t,e):n}function em(t,e){return t instanceof ra?tu(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class na extends ta{}class yi extends ta{constructor(e){super(),this.elements=e}}function tm(t,e){const n=sm(e);for(const r of t.elements)n.some(s=>Kt(s,r))||n.push(r);return{arrayValue:{values:n}}}class vi extends ta{constructor(e){super(),this.elements=e}}function nm(t,e){let n=sm(e);for(const r of t.elements)n=n.filter(s=>!Kt(s,r));return{arrayValue:{values:n}}}class ra extends ta{constructor(e,n){super(),this.N=e,this.C=n}}function rm(t){return Me(t.integerValue||t.doubleValue)}function sm(t){return nu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function jT(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof yi&&r instanceof yi||n instanceof vi&&r instanceof vi?Wr(n.elements,r.elements,Kt):n instanceof ra&&r instanceof ra?Kt(n.C,r.C):n instanceof na&&r instanceof na}(t.transform,e.transform)}class qT{constructor(e,n){this.version=e,this.transformResults=n}}class nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nn}static exists(e){return new nn(void 0,e)}static updateTime(e){return new nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ia{}function HT(t,e,n){t instanceof oa?function(r,s,i){const o=r.value.clone(),a=lm(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof sr?function(r,s,i){if(!sa(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=lm(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(am(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function uu(t,e,n){t instanceof oa?function(r,s,i){if(!sa(r.precondition,s))return;const o=r.value.clone(),a=cm(r.fieldTransforms,i,s);o.setAll(a),s.convertToFoundDocument(om(s),o).setHasLocalMutations()}(t,e,n):t instanceof sr?function(r,s,i){if(!sa(r.precondition,s))return;const o=cm(r.fieldTransforms,i,s),a=s.data;a.setAll(am(r)),a.setAll(o),s.convertToFoundDocument(om(s),a).setHasLocalMutations()}(t,e,n):function(r,s){sa(r.precondition,s)&&s.convertToNoDocument(de.min())}(t,e)}function zT(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=em(r.transform,s||null);i!=null&&(n==null&&(n=Tt.empty()),n.set(r.field,i))}return n||null}function im(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Wr(n,r,(s,i)=>jT(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function om(t){return t.isFoundDocument()?t.version:de.min()}class oa extends ia{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}}class sr extends ia{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}}function am(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function lm(t,e,n){const r=new Map;_e(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,$T(o,a,n[s]))}return r}function cm(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,BT(i,o,e))}return r}class um extends ia{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class KT extends ia{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class WT{constructor(e){this.count=e}}/**
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
 */var Le,ie;function GT(t){switch(t){default:return Z();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function hm(t){if(t===void 0)return Tn("GRPC error has no .code"),I.UNKNOWN;switch(t){case Le.OK:return I.OK;case Le.CANCELLED:return I.CANCELLED;case Le.UNKNOWN:return I.UNKNOWN;case Le.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Le.INTERNAL:return I.INTERNAL;case Le.UNAVAILABLE:return I.UNAVAILABLE;case Le.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Le.NOT_FOUND:return I.NOT_FOUND;case Le.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Le.ABORTED:return I.ABORTED;case Le.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Le.DATA_LOSS:return I.DATA_LOSS;default:return Z()}}(ie=Le||(Le={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class tt{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new tt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new aa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new aa(this.root,e,this.comparator,!1)}getReverseIterator(){return new aa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new aa(this.root,e,this.comparator,!0)}}class aa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:Qe.RED,this.left=s!=null?s:Qe.EMPTY,this.right=i!=null?i:Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Qe(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Qe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Qe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ye{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new fm(this.data.getIterator())}getIteratorFrom(e){return new fm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class fm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const QT=new tt(G.comparator);function ir(){return QT}const YT=new tt(G.comparator);function hu(){return YT}const JT=new tt(G.comparator);function XT(){return JT}const ZT=new Ye(G.comparator);function Te(...t){let e=ZT;for(const n of t)e=e.add(n);return e}const eS=new Ye(pe);function dm(){return eS}/**
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
 */class la{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,wi.createSynthesizedTargetChangeForCurrentChange(e,n)),new la(de.min(),r,dm(),ir(),Te())}}class wi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new wi(Ze.EMPTY_BYTE_STRING,n,Te(),Te(),Te())}}/**
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
 */class ca{constructor(e,n,r,s){this.k=e,this.removedTargetIds=n,this.key=r,this.$=s}}class pm{constructor(e,n){this.targetId=e,this.O=n}}class gm{constructor(e,n,r=Ze.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class mm{constructor(){this.F=0,this.M=vm(),this.L=Ze.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=Te(),n=Te(),r=Te();return this.M.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Z()}}),new wi(this.L,this.B,e,n,r)}G(){this.U=!1,this.M=vm()}H(e,n){this.U=!0,this.M=this.M.insert(e,n)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class tS{constructor(e){this.tt=e,this.et=new Map,this.nt=ir(),this.st=ym(),this.it=new Ye(pe)}rt(e){for(const n of e.k)e.$&&e.$.isFoundDocument()?this.ot(n,e.$):this.ct(n,e.key,e.$);for(const n of e.removedTargetIds)this.ct(n,e.key,e.$)}at(e){this.forEachTarget(e,n=>{const r=this.ut(n);switch(e.state){case 0:this.ht(n)&&r.j(e.resumeToken);break;case 1:r.X(),r.q||r.G(),r.j(e.resumeToken);break;case 2:r.X(),r.q||this.removeTarget(n);break;case 3:this.ht(n)&&(r.Z(),r.j(e.resumeToken));break;case 4:this.ht(n)&&(this.lt(n),r.j(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.et.forEach((r,s)=>{this.ht(s)&&n(s)})}ft(e){const n=e.targetId,r=e.O.count,s=this.dt(n);if(s){const i=s.target;if(iu(i))if(r===0){const o=new G(i.path);this.ct(n,o,et.newNoDocument(o,de.min()))}else _e(r===1);else this.wt(n)!==r&&(this.lt(n),this.it=this.it.add(n))}}_t(e){const n=new Map;this.et.forEach((i,o)=>{const a=this.dt(o);if(a){if(i.current&&iu(a.target)){const l=new G(a.target.path);this.nt.get(l)!==null||this.gt(o,l)||this.ct(o,l,et.newNoDocument(l,e))}i.K&&(n.set(o,i.W()),i.G())}});let r=Te();this.st.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.dt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))});const s=new la(e,n,this.it,this.nt,r);return this.nt=ir(),this.st=ym(),this.it=new Ye(pe),s}ot(e,n){if(!this.ht(e))return;const r=this.gt(e,n.key)?2:0;this.ut(e).H(n.key,r),this.nt=this.nt.insert(n.key,n),this.st=this.st.insert(n.key,this.yt(n.key).add(e))}ct(e,n,r){if(!this.ht(e))return;const s=this.ut(e);this.gt(e,n)?s.H(n,1):s.J(n),this.st=this.st.insert(n,this.yt(n).delete(e)),r&&(this.nt=this.nt.insert(n,r))}removeTarget(e){this.et.delete(e)}wt(e){const n=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let n=this.et.get(e);return n||(n=new mm,this.et.set(e,n)),n}yt(e){let n=this.st.get(e);return n||(n=new Ye(pe),this.st=this.st.insert(e,n)),n}ht(e){const n=this.dt(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}dt(e){const n=this.et.get(e);return n&&n.q?null:this.tt.Tt(e)}lt(e){this.et.set(e,new mm),this.tt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}gt(e,n){return this.tt.getRemoteKeysForTarget(e).has(n)}}function ym(){return new tt(G.comparator)}function vm(){return new tt(G.comparator)}/**
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
 */const nS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),rS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class sS{constructor(e,n){this.databaseId=e,this.D=n}}function ua(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wm(t,e){return t.D?e.toBase64():e.toUint8Array()}function iS(t,e){return ua(t,e.toTimestamp())}function rn(t){return _e(!!t),de.fromTimestamp(function(e){const n=An(e);return new bt(n.seconds,n.nanos)}(t))}function fu(t,e){return function(n){return new Ne(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Em(t){const e=Ne.fromString(t);return _e(Am(e)),e}function du(t,e){return fu(t.databaseId,e.path)}function pu(t,e){const n=Em(e);if(n.get(1)!==t.databaseId.projectId)throw new U(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(_m(n))}function gu(t,e){return fu(t.databaseId,e)}function oS(t){const e=Em(t);return e.length===4?Ne.emptyPath():_m(e)}function mu(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function _m(t){return _e(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Im(t,e,n){return{name:du(t,e),fields:n.value.mapValue.fields}}function aS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,c){return l.D?(_e(c===void 0||typeof c=="string"),Ze.fromBase64String(c||"")):(_e(c===void 0||c instanceof Uint8Array),Ze.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?I.UNKNOWN:hm(l.code);return new U(c,l.message||"")}(o);n=new gm(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=pu(t,r.document.name),i=rn(r.document.updateTime),o=new Tt({mapValue:{fields:r.document.fields}}),a=et.newFoundDocument(s,i,o),l=r.targetIds||[],c=r.removedTargetIds||[];n=new ca(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=pu(t,r.document),i=r.readTime?rn(r.readTime):de.min(),o=et.newNoDocument(s,i),a=r.removedTargetIds||[];n=new ca([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=pu(t,r.document),i=r.removedTargetIds||[];n=new ca([],i,s,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new WT(s),o=r.targetId;n=new pm(o,i)}}return n}function lS(t,e){let n;if(e instanceof oa)n={update:Im(t,e.key,e.value)};else if(e instanceof um)n={delete:du(t,e.key)};else if(e instanceof sr)n={update:Im(t,e.key,e.data),updateMask:vS(e.fieldMask)};else{if(!(e instanceof KT))return Z();n={verify:du(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof na)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof yi)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof vi)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ra)return{fieldPath:i.field.canonicalString(),increment:o.C};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:iS(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Z()}(t,e.precondition)),n}function cS(t,e){return t&&t.length>0?(_e(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?rn(r.updateTime):rn(s);return i.isEqual(de.min())&&(i=rn(s)),new qT(i,r.transformResults||[])}(n,e))):[]}function uS(t,e){return{documents:[gu(t,e.path)]}}function hS(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=gu(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=gu(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(a){if(a.length===0)return;const l=a.map(c=>function(u){if(u.op==="=="){if(jg(u.value))return{unaryFilter:{field:Zr(u.field),op:"IS_NAN"}};if($g(u.value))return{unaryFilter:{field:Zr(u.field),op:"IS_NULL"}}}else if(u.op==="!="){if(jg(u.value))return{unaryFilter:{field:Zr(u.field),op:"IS_NOT_NAN"}};if($g(u.value))return{unaryFilter:{field:Zr(u.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zr(u.field),op:gS(u.op),value:u.value}}}(c));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(a){if(a.length!==0)return a.map(l=>function(c){return{field:Zr(c.field),direction:pS(c.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(a,l){return a.D||Qr(l)?l:{value:l}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Tm(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Tm(e.endAt)),n}function fS(t){let e=oS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){_e(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=bm(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Jr(es(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Qr(h)?null:h}(n.limit));let l=null;n.startAt&&(l=Sm(n.startAt));let c=null;return n.endAt&&(c=Sm(n.endAt)),LT(e,s,o,i,a,"F",l,c)}function dS(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Z()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function bm(t){return t?t.unaryFilter!==void 0?[yS(t)]:t.fieldFilter!==void 0?[mS(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>bm(e)).reduce((e,n)=>e.concat(n)):Z():[]}function Tm(t){return{before:t.before,values:t.position}}function Sm(t){const e=!!t.before,n=t.values||[];return new ou(n,e)}function pS(t){return nS[t]}function gS(t){return rS[t]}function Zr(t){return{fieldPath:t.canonicalString()}}function es(t){return gt.fromServerFormat(t.fieldPath)}function mS(t){return ht.create(es(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(t.fieldFilter.op),t.fieldFilter.value)}function yS(t){switch(t.unaryFilter.op){case"IS_NAN":const e=es(t.unaryFilter.field);return ht.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=es(t.unaryFilter.field);return ht.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=es(t.unaryFilter.field);return ht.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=es(t.unaryFilter.field);return ht.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}function vS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Am(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const wS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ES{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(s=>s?x.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}}function Ei(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class _S{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&HT(i,e,r[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&uu(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&uu(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),s=r;this.applyToLocalView(s),r.isValidDocument()||s.convertToNoDocument(de.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&Wr(this.mutations,e.mutations,(n,r)=>im(n,r))&&Wr(this.baseMutations,e.baseMutations,(n,r)=>im(n,r))}}class yu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){_e(e.mutations.length===r.length);let s=XT();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new yu(e,n,r,s)}}/**
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
 */class or{constructor(e,n,r,s,i=de.min(),o=de.min(),a=Ze.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new or(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class IS{constructor(e){this.Wt=e}}function bS(t){const e=fS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?UT(e,e.limit,"L"):e}/**
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
 */class TS{constructor(){this.Gt=new SS}addToCollectionParentIndex(e,n){return this.Gt.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.Gt.getEntries(n))}}class SS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ye(Ne.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ye(Ne.comparator)).toArray()}}/**
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
 */class ts{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new ts(0)}static ie(){return new ts(-1)}}/**
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
 */async function _i(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==wS)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Ii{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s!==void 0){for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),!0;return!1}forEach(e){tr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Lg(this.inner)}}/**
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
 */class AS{constructor(){this.changes=new Ii(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:de.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:et.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Cm{constructor(e,n,r){this.He=e,this.In=n,this.Ht=r}An(e,n){return this.In.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Rn(e,n,r))}Rn(e,n,r){return this.He.getEntry(e,n).next(s=>{for(const i of r)i.applyToLocalView(s);return s})}bn(e,n){e.forEach((r,s)=>{for(const i of n)i.applyToLocalView(s)})}Pn(e,n){return this.He.getEntries(e,n).next(r=>this.vn(e,r).next(()=>r))}vn(e,n){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.bn(n,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return G.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.Vn(e,n.path):Qg(n)?this.Sn(e,n,r):this.Dn(e,n,r)}Vn(e,n){return this.An(e,new G(n)).next(r=>{let s=hu();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}Sn(e,n,r){const s=n.collectionGroup;let i=hu();return this.Ht.getCollectionParents(e,s).next(o=>x.forEach(o,a=>{const l=function(c,u){return new Xr(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.Dn(e,l,r).next(c=>{c.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}Dn(e,n,r){let s,i;return this.He.getDocumentsMatchingQuery(e,n,r).next(o=>(s=o,this.In.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(i=o,this.Cn(e,i,s).next(a=>{s=a;for(const l of i)for(const c of l.mutations){const u=c.key;let h=s.get(u);h==null&&(h=et.newInvalidDocument(u),s=s.insert(u,h)),uu(c,h,l.localWriteTime),h.isFoundDocument()||(s=s.remove(u))}}))).next(()=>(s.forEach((o,a)=>{ea(n,a)||(s=s.remove(o))}),s))}Cn(e,n,r){let s=Te();for(const o of n)for(const a of o.mutations)a instanceof sr&&r.get(a.key)===null&&(s=s.add(a.key));let i=r;return this.He.getEntries(e,s).next(o=>(o.forEach((a,l)=>{l.isFoundDocument()&&(i=i.insert(a,l))}),i))}}/**
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
 */class vu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Nn=r,this.xn=s}static kn(e,n){let r=Te(),s=Te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new vu(e,n.fromCache,r,s)}}/**
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
 */class CS{$n(e){this.On=e}getDocumentsMatchingQuery(e,n,r,s){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(de.min())?this.Fn(e,n):this.On.Pn(e,s).next(i=>{const o=this.Mn(n,i);return(Jo(n)||Xo(n))&&this.Ln(n.limitType,o,s,r)?this.Fn(e,n):(Dg()<=ue.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),cu(n)),this.On.getDocumentsMatchingQuery(e,n,r).next(a=>(o.forEach(l=>{a=a.insert(l.key,l)}),a)))})}Mn(e,n){let r=new Ye(Jg(e));return n.forEach((s,i)=>{ea(e,i)&&(r=r.add(i))}),r}Ln(e,n,r,s){if(r.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Fn(e,n){return Dg()<=ue.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",cu(n)),this.On.getDocumentsMatchingQuery(e,n,de.min())}}/**
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
 */class RS{constructor(e,n,r,s){this.persistence=e,this.Bn=n,this.N=s,this.Un=new tt(pe),this.qn=new Ii(i=>ru(i),su),this.Kn=de.min(),this.In=e.getMutationQueue(r),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new Cm(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Un))}}function NS(t,e,n,r){return new RS(t,e,n,r)}async function Rm(t,e){const n=ee(t);let r=n.In,s=n.Qn;const i=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.In.getAllMutationBatches(o).next(l=>(a=l,r=n.persistence.getMutationQueue(e),s=new Cm(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(o))).next(l=>{const c=[],u=[];let h=Te();for(const f of a){c.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}for(const f of l){u.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}return s.Pn(o,h).next(f=>({Wn:f,removedBatchIds:c,addedBatchIds:u}))})});return n.In=r,n.Qn=s,n.Bn.$n(n.Qn),i}function kS(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.jn.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let f=x.resolve();return h.forEach(g=>{f=f.next(()=>c.getEntry(a,g)).next(y=>{const E=l.docVersions.get(g);_e(E!==null),y.version.compareTo(E)<0&&(u.applyToRemoteDocument(y,l),y.isValidDocument()&&c.addEntry(y,l.commitVersion))})}),f.next(()=>o.In.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.In.performConsistencyCheck(r)).next(()=>n.Qn.Pn(r,s))})}function Nm(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ze.getLastRemoteSnapshotVersion(n))}function OS(t,e){const n=ee(t),r=e.snapshotVersion;let s=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});s=n.Un;const a=[];e.targetChanges.forEach((c,u)=>{const h=s.get(u);if(!h)return;a.push(n.ze.removeMatchingKeys(i,c.removedDocuments,u).next(()=>n.ze.addMatchingKeys(i,c.addedDocuments,u)));const f=c.resumeToken;if(f.approximateByteSize()>0){const g=h.withResumeToken(f,r).withSequenceNumber(i.currentSequenceNumber);s=s.insert(u,g),function(y,E,w){return _e(E.resumeToken.approximateByteSize()>0),y.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(h,g,c)&&a.push(n.ze.updateTargetData(i,g))}});let l=ir();if(e.documentUpdates.forEach((c,u)=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,c))}),a.push(DS(i,o,e.documentUpdates,r,void 0).next(c=>{l=c})),!r.isEqual(de.min())){const c=n.ze.getLastRemoteSnapshotVersion(i).next(u=>n.ze.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(c)}return x.waitFor(a).next(()=>o.apply(i)).next(()=>n.Qn.vn(i,l)).next(()=>l)}).then(i=>(n.Un=s,i))}function DS(t,e,n,r,s){let i=Te();return n.forEach(o=>i=i.add(o)),e.getEntries(t,i).next(o=>{let a=ir();return n.forEach((l,c)=>{const u=o.get(l),h=(s==null?void 0:s.get(l))||r;c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(l,h),a=a.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c,h),a=a.insert(l,c)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),a})}function PS(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.In.getNextMutationBatchAfterBatchId(r,e)))}function xS(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.ze.getTargetData(r,e).next(i=>i?(s=i,x.resolve(s)):n.ze.allocateTargetId(r).next(o=>(s=new or(e,o,0,r.currentSequenceNumber),n.ze.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Un.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Un=n.Un.insert(r.targetId,r),n.qn.set(e,r.targetId)),r})}async function wu(t,e,n){const r=ee(t),s=r.Un.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ei(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Un=r.Un.remove(e),r.qn.delete(s.target)}function km(t,e,n){const r=ee(t);let s=de.min(),i=Te();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=ee(a),h=u.qn.get(c);return h!==void 0?x.resolve(u.Un.get(h)):u.ze.getTargetData(l,c)}(r,o,rr(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.Bn.getDocumentsMatchingQuery(o,e,n?s:de.min(),n?i:Te())).next(a=>({documents:a,Gn:i})))}/**
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
 */class MS{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return x.resolve(this.Yn.get(n))}saveBundleMetadata(e,n){var r;return this.Yn.set(n.id,{id:(r=n).id,version:r.version,createTime:rn(r.createTime)}),x.resolve()}getNamedQuery(e,n){return x.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:bS(r.bundledQuery),readTime:rn(r.readTime)}}(n)),x.resolve()}}/**
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
 */class Eu{constructor(){this.Zn=new Ye($e.ts),this.es=new Ye($e.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new $e(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new $e(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}cs(e){const n=new G(new Ne([])),r=new $e(n,e),s=new $e(n,e+1),i=[];return this.es.forEachInRange([r,s],o=>{this.rs(o),i.push(o.key)}),i}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new G(new Ne([])),r=new $e(n,e),s=new $e(n,e+1);let i=Te();return this.es.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new $e(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return G.comparator(e.key,n.key)||pe(e.ls,n.ls)}static ns(e,n){return pe(e.ls,n.ls)||G.comparator(e.key,n.key)}}/**
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
 */class LS{constructor(e,n){this.Ht=e,this.referenceDelegate=n,this.In=[],this.fs=1,this.ds=new Ye($e.ts)}checkEmpty(e){return x.resolve(this.In.length===0)}addMutationBatch(e,n,r,s){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new _S(i,n,r,s);this.In.push(o);for(const a of s)this.ds=this.ds.add(new $e(a.key,i)),this.Ht.addToCollectionParentIndex(e,a.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this.ws(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this._s(r),i=s<0?0:s;return x.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(e){return x.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),s=new $e(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([r,s],o=>{const a=this.ws(o.ls);i.push(a)}),x.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ye(pe);return n.forEach(s=>{const i=new $e(s,0),o=new $e(s,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{r=r.add(a.ls)})}),x.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;G.isDocumentKey(i)||(i=i.child(""));const o=new $e(new G(i),0);let a=new Ye(pe);return this.ds.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.ls)),!0)},o),x.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const s=this.ws(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){_e(this.ys(n.batchId,"removed")===0),this.In.shift();let r=this.ds;return x.forEach(n.mutations,s=>{const i=new $e(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ds=r})}te(e){}containsKey(e,n){const r=new $e(n,0),s=this.ds.firstAfterOrEqual(r);return x.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.In.length,x.resolve()}ys(e,n){return this._s(e)}_s(e){return this.In.length===0?0:e-this.In[0].batchId}ws(e){const n=this._s(e);return n<0||n>=this.In.length?null:this.In[n]}}/**
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
 */class US{constructor(e,n){this.Ht=e,this.ps=n,this.docs=new tt(G.comparator),this.size=0}addEntry(e,n,r){const s=n.key,i=this.docs.get(s),o=i?i.size:0,a=this.ps(n);return this.docs=this.docs.insert(s,{document:n.clone(),size:a,readTime:r}),this.size+=a-o,this.Ht.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.clone():et.newInvalidDocument(n))}getEntries(e,n){let r=ir();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.clone():et.newInvalidDocument(s))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r){let s=ir();const i=new G(n.path.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:l,readTime:c}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;c.compareTo(r)<=0||ea(n,l)&&(s=s.insert(l.key,l.clone()))}return x.resolve(s)}Ts(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new FS(this)}getSize(e){return x.resolve(this.size)}}class FS extends AS{constructor(e){super(),this.Se=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.document.isValidDocument()?n.push(this.Se.addEntry(e,s.document,this.getReadTime(r))):this.Se.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.Se.getEntry(e,n)}getAllFromCache(e,n){return this.Se.getEntries(e,n)}}/**
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
 */class VS{constructor(e){this.persistence=e,this.Es=new Ii(n=>ru(n),su),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.Is=0,this.As=new Eu,this.targetCount=0,this.Rs=ts.se()}forEachTarget(e,n){return this.Es.forEach((r,s)=>n(s)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Is&&(this.Is=n),x.resolve()}ce(e){this.Es.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new ts(n),this.highestTargetId=n),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,n){return this.ce(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.ce(n),x.resolve()}removeTargetData(e,n){return this.Es.delete(n.target),this.As.cs(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Es.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Es.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),x.waitFor(i).next(()=>s)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.Es.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),x.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.As.cs(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.As.containsKey(n))}}/**
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
 */class BS{constructor(e,n){this.bs={},this.Le=new Xc(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new VS(this),this.Ht=new TS,this.He=function(r,s){return new US(r,s)}(this.Ht,r=>this.referenceDelegate.Ps(r)),this.N=new IS(n),this.Je=new MS(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new LS(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new $S(this.Le.next());return this.referenceDelegate.vs(),r(s).next(i=>this.referenceDelegate.Vs(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ss(e,n){return x.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class $S extends ES{constructor(e){super(),this.currentSequenceNumber=e}}class _u{constructor(e){this.persistence=e,this.Ds=new Eu,this.Cs=null}static Ns(e){return new _u(e)}get xs(){if(this.Cs)return this.Cs;throw Z()}addReference(e,n,r){return this.Ds.addReference(r,n),this.xs.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.Ds.removeReference(r,n),this.xs.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),x.resolve()}removeTarget(e,n){this.Ds.cs(n.targetId).forEach(s=>this.xs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.xs.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}vs(){this.Cs=new Set}Vs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.xs,r=>{const s=G.fromPath(r);return this.ks(e,s).next(i=>{i||n.removeEntry(s)})}).next(()=>(this.Cs=null,n.apply(e)))}updateLimboDocument(e,n){return this.ks(e,n).next(r=>{r?this.xs.delete(n.toString()):this.xs.add(n.toString())})}Ps(e){return 0}ks(e,n){return x.or([()=>x.resolve(this.Ds.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ss(e,n)])}}class Om{constructor(){this.activeTargetIds=dm()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jS{constructor(){this.yi=new Om,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,n,r){this.pi[e]=n}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new Om,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class qS{Ti(e){}shutdown(){}}/**
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
 */class Dm{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const HS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class zS{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
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
 */class KS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,n,r,s){const i=this.Bi(e,n);H("RestConnection","Sending: ",i,r);const o={};return this.Ui(o,s),this.qi(e,i,o,r).then(a=>(H("RestConnection","Received: ",a),a),a=>{throw Pg("RestConnection",`${e} failed with error: `,a,"url: ",i,"request:",r),a})}Ki(e,n,r,s){return this.Li(e,n,r,s)}Ui(e,n){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+Kr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n)for(const r in n.authHeaders)n.authHeaders.hasOwnProperty(r)&&(e[r]=n.authHeaders[r])}Bi(e,n){const r=HS[e];return`${this.Fi}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,n,r,s){return new Promise((i,o)=>{const a=new gT;a.listenOnce(fT.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Yc.NO_ERROR:const c=a.getResponseJson();H("Connection","XHR received:",JSON.stringify(c)),i(c);break;case Yc.TIMEOUT:H("Connection",'RPC "'+e+'" timed out'),o(new U(I.DEADLINE_EXCEEDED,"Request time out"));break;case Yc.HTTP_ERROR:const u=a.getStatus();if(H("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(y)>=0?y:I.UNKNOWN}(h.status);o(new U(f,h.message))}else o(new U(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new U(I.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{H("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(s);a.send(n,"POST",l,r,15)})}ji(e,n){const r=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=uT(),i=hT(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new pT({})),this.Ui(o.initMessageHeaders,n),Ed()||Id()||b_()||bd()||T_()||_d()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");H("Connection","Creating WebChannel: "+a,o);const l=s.createWebChannel(a,o);let c=!1,u=!1;const h=new zS({vi:g=>{u?H("Connection","Not sending because WebChannel is closed:",g):(c||(H("Connection","Opening WebChannel transport."),l.open(),c=!0),H("Connection","WebChannel sending:",g),l.send(g))},Vi:()=>l.close()}),f=(g,y,E)=>{g.listen(y,w=>{try{E(w)}catch(C){setTimeout(()=>{throw C},0)}})};return f(l,Wo.EventType.OPEN,()=>{u||H("Connection","WebChannel transport opened.")}),f(l,Wo.EventType.CLOSE,()=>{u||(u=!0,H("Connection","WebChannel transport closed"),h.$i())}),f(l,Wo.EventType.ERROR,g=>{u||(u=!0,Pg("Connection","WebChannel transport errored:",g),h.$i(new U(I.UNAVAILABLE,"The operation could not be completed")))}),f(l,Wo.EventType.MESSAGE,g=>{var y;if(!u){const E=g.data[0];_e(!!E);const w=E,C=w.error||((y=w[0])===null||y===void 0?void 0:y.error);if(C){H("Connection","WebChannel received error:",C);const P=C.status;let q=function(he){const ge=Le[he];if(ge!==void 0)return hm(ge)}(P),K=C.message;q===void 0&&(q=I.INTERNAL,K="Unknown error status: "+P+" with message "+C.message),u=!0,h.$i(new U(q,K)),l.close()}else H("Connection","WebChannel received:",E),h.Oi(E)}}),f(i,dT.STAT_EVENT,g=>{g.stat===kg.PROXY?H("Connection","Detected buffering proxy"):g.stat===kg.NOPROXY&&H("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.ki()},0),h}}function Iu(){return typeof document!="undefined"?document:null}/**
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
 */function ha(t){return new sS(t,!0)}class Pm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Oe=e,this.timerId=n,this.Qi=r,this.Wi=s,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const n=Math.floor(this.zi+this.Zi()),r=Math.max(0,Date.now()-this.Ji),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.zi} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,s,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
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
 */class xm{constructor(e,n,r,s,i,o,a){this.Oe=e,this.er=r,this.nr=s,this.sr=i,this.credentialsProvider=o,this.listener=a,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new Pm(e,n)}ur(){return this.state===1||this.state===5||this.hr()}hr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&this.rr===null&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this._r()))}mr(e){this.gr(),this.stream.send(e)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,n){this.gr(),this.yr(),this.ar.cancel(),this.ir++,e!==4?this.ar.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(Tn(n.toString()),Tn("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.pr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(n)}pr(){}auth(){this.state=1;const e=this.Tr(this.ir),n=this.ir;this.credentialsProvider.getToken().then(r=>{this.ir===n&&this.Er(r)},r=>{e(()=>{const s=new U(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ir(s)})})}Er(e){const n=this.Tr(this.ir);this.stream=this.Ar(e),this.stream.Si(()=>{n(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,()=>(this.hr()&&(this.state=3),Promise.resolve())),this.listener.Si()))}),this.stream.Ci(r=>{n(()=>this.Ir(r))}),this.stream.onMessage(r=>{n(()=>this.onMessage(r))})}lr(){this.state=5,this.ar.Xi(async()=>{this.state=0,this.start()})}Ir(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Tr(e){return n=>{this.Oe.enqueueAndForget(()=>this.ir===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class WS extends xm{constructor(e,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i),this.N=s}Ar(e){return this.sr.ji("Listen",e)}onMessage(e){this.ar.reset();const n=aS(this.N,e),r=function(s){if(!("targetChange"in s))return de.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?de.min():i.readTime?rn(i.readTime):de.min()}(e);return this.listener.Rr(n,r)}br(e){const n={};n.database=mu(this.N),n.addTarget=function(s,i){let o;const a=i.target;return o=iu(a)?{documents:uS(s,a)}:{query:hS(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=wm(s,i.resumeToken):i.snapshotVersion.compareTo(de.min())>0&&(o.readTime=ua(s,i.snapshotVersion.toTimestamp())),o}(this.N,e);const r=dS(this.N,e);r&&(n.labels=r),this.mr(n)}Pr(e){const n={};n.database=mu(this.N),n.removeTarget=e,this.mr(n)}}class GS extends xm{constructor(e,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i),this.N=s,this.vr=!1}get Vr(){return this.vr}start(){this.vr=!1,this.lastStreamToken=void 0,super.start()}pr(){this.vr&&this.Sr([])}Ar(e){return this.sr.ji("Write",e)}onMessage(e){if(_e(!!e.streamToken),this.lastStreamToken=e.streamToken,this.vr){this.ar.reset();const n=cS(e.writeResults,e.commitTime),r=rn(e.commitTime);return this.listener.Dr(r,n)}return _e(!e.writeResults||e.writeResults.length===0),this.vr=!0,this.listener.Cr()}Nr(){const e={};e.database=mu(this.N),this.mr(e)}Sr(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>lS(this.N,r))};this.mr(n)}}/**
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
 */class QS extends class{}{constructor(e,n,r){super(),this.credentials=e,this.sr=n,this.N=r,this.kr=!1}$r(){if(this.kr)throw new U(I.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,n,r){return this.$r(),this.credentials.getToken().then(s=>this.sr.Li(e,n,r,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new U(I.UNKNOWN,s.toString())})}Ki(e,n,r){return this.$r(),this.credentials.getToken().then(s=>this.sr.Ki(e,n,r,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new U(I.UNKNOWN,s.toString())})}terminate(){this.kr=!0}}class YS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){this.Or===0&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve())))}qr(e){this.state==="Online"?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Br("Offline")))}set(e){this.Kr(),this.Or=0,e==="Online"&&(this.Mr=!1),this.Br(e)}Br(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ur(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?(Tn(n),this.Mr=!1):H("OnlineStateTracker",n)}Kr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
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
 */class JS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=i,this.zr.Ti(o=>{r.enqueueAndForget(async()=>{ar(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ee(a);l.Wr.add(4),await bi(l),l.Hr.set("Unknown"),l.Wr.delete(4),await fa(l)}(this))})}),this.Hr=new YS(r,s)}}async function fa(t){if(ar(t))for(const e of t.Gr)await e(!0)}async function bi(t){for(const e of t.Gr)await e(!1)}function Mm(t,e){const n=ee(t);n.Qr.has(e.targetId)||(n.Qr.set(e.targetId,e),Su(n)?Tu(n):ns(n).hr()&&bu(n,e))}function Lm(t,e){const n=ee(t),r=ns(n);n.Qr.delete(e),r.hr()&&Um(n,e),n.Qr.size===0&&(r.hr()?r.wr():ar(n)&&n.Hr.set("Unknown"))}function bu(t,e){t.Jr.Y(e.targetId),ns(t).br(e)}function Um(t,e){t.Jr.Y(e),ns(t).Pr(e)}function Tu(t){t.Jr=new tS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.Qr.get(e)||null}),ns(t).start(),t.Hr.Lr()}function Su(t){return ar(t)&&!ns(t).ur()&&t.Qr.size>0}function ar(t){return ee(t).Wr.size===0}function Fm(t){t.Jr=void 0}async function XS(t){t.Qr.forEach((e,n)=>{bu(t,e)})}async function ZS(t,e){Fm(t),Su(t)?(t.Hr.qr(e),Tu(t)):t.Hr.set("Unknown")}async function eA(t,e,n){if(t.Hr.set("Online"),e instanceof gm&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.Qr.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.Qr.delete(o),r.Jr.removeTarget(o))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await da(t,r)}else if(e instanceof ca?t.Jr.rt(e):e instanceof pm?t.Jr.ft(e):t.Jr.at(e),!n.isEqual(de.min()))try{const r=await Nm(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.Jr._t(i);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.Qr.get(l);c&&s.Qr.set(l,c.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const l=s.Qr.get(a);if(!l)return;s.Qr.set(a,l.withResumeToken(Ze.EMPTY_BYTE_STRING,l.snapshotVersion)),Um(s,a);const c=new or(l.target,a,1,l.sequenceNumber);bu(s,c)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await da(t,r)}}async function da(t,e,n){if(!Ei(e))throw e;t.Wr.add(1),await bi(t),t.Hr.set("Offline"),n||(n=()=>Nm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.Wr.delete(1),await fa(t)})}function Vm(t,e){return e().catch(n=>da(t,n,e))}async function pa(t){const e=ee(t),n=Cn(e);let r=e.jr.length>0?e.jr[e.jr.length-1].batchId:-1;for(;tA(e);)try{const s=await PS(e.localStore,r);if(s===null){e.jr.length===0&&n.wr();break}r=s.batchId,nA(e,s)}catch(s){await da(e,s)}Bm(e)&&$m(e)}function tA(t){return ar(t)&&t.jr.length<10}function nA(t,e){t.jr.push(e);const n=Cn(t);n.hr()&&n.Vr&&n.Sr(e.mutations)}function Bm(t){return ar(t)&&!Cn(t).ur()&&t.jr.length>0}function $m(t){Cn(t).start()}async function rA(t){Cn(t).Nr()}async function sA(t){const e=Cn(t);for(const n of t.jr)e.Sr(n.mutations)}async function iA(t,e,n){const r=t.jr.shift(),s=yu.from(r,e,n);await Vm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await pa(t)}async function oA(t,e){e&&Cn(t).Vr&&await async function(n,r){if(s=r.code,GT(s)&&s!==I.ABORTED){const i=n.jr.shift();Cn(n).dr(),await Vm(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await pa(n)}var s}(t,e),Bm(t)&&$m(t)}async function aA(t,e){const n=ee(t);e?(n.Wr.delete(2),await fa(n)):e||(n.Wr.add(2),await bi(n),n.Hr.set("Unknown"))}function ns(t){return t.Yr||(t.Yr=function(e,n,r){const s=ee(e);return s.$r(),new WS(n,s.sr,s.credentials,s.N,r)}(t.datastore,t.asyncQueue,{Si:XS.bind(null,t),Ci:ZS.bind(null,t),Rr:eA.bind(null,t)}),t.Gr.push(async e=>{e?(t.Yr.dr(),Su(t)?Tu(t):t.Hr.set("Unknown")):(await t.Yr.stop(),Fm(t))})),t.Yr}function Cn(t){return t.Xr||(t.Xr=function(e,n,r){const s=ee(e);return s.$r(),new GS(n,s.sr,s.credentials,s.N,r)}(t.datastore,t.asyncQueue,{Si:rA.bind(null,t),Ci:oA.bind(null,t),Cr:sA.bind(null,t),Dr:iA.bind(null,t)}),t.Gr.push(async e=>{e?(t.Xr.dr(),await pa(t)):(await t.Xr.stop(),t.jr.length>0&&(H("RemoteStore",`Stopping write stream with ${t.jr.length} pending writes`),t.jr=[]))})),t.Xr}/**
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
 */class Au{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Au(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cu(t,e){if(Tn("AsyncQueue",`${e}: ${t}`),Ei(t))return new U(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class rs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=hu(),this.sortedSet=new tt(this.comparator)}static emptySet(e){return new rs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof rs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new rs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class jm{constructor(){this.Zr=new tt(G.comparator)}track(e){const n=e.doc.key,r=this.Zr.get(n);r?e.type!==0&&r.type===3?this.Zr=this.Zr.insert(n,e):e.type===3&&r.type!==1?this.Zr=this.Zr.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Zr=this.Zr.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Zr=this.Zr.remove(n):e.type===1&&r.type===2?this.Zr=this.Zr.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):Z():this.Zr=this.Zr.insert(n,e)}eo(){const e=[];return this.Zr.inorderTraversal((n,r)=>{e.push(r)}),e}}class ss{constructor(e,n,r,s,i,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new ss(e,n,rs.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class lA{constructor(){this.no=void 0,this.listeners=[]}}class cA{constructor(){this.queries=new Ii(e=>Yg(e),Zo),this.onlineState="Unknown",this.so=new Set}}async function uA(t,e){const n=ee(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new lA),s)try{i.no=await n.onListen(r)}catch(o){const a=Cu(o,`Initialization of query '${cu(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.io(n.onlineState),i.no&&e.ro(i.no)&&Ru(n)}async function hA(t,e){const n=ee(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function fA(t,e){const n=ee(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.ro(s)&&(r=!0);o.no=s}}r&&Ru(n)}function dA(t,e,n){const r=ee(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Ru(t){t.so.forEach(e=>{e.next()})}class pA{constructor(e,n,r){this.query=e,this.oo=n,this.co=!1,this.ao=null,this.onlineState="Unknown",this.options=r||{}}ro(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ss(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.co?this.uo(e)&&(this.oo.next(e),n=!0):this.ho(e,this.onlineState)&&(this.lo(e),n=!0),this.ao=e,n}onError(e){this.oo.error(e)}io(e){this.onlineState=e;let n=!1;return this.ao&&!this.co&&this.ho(this.ao,e)&&(this.lo(this.ao),n=!0),n}ho(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.fo||!r)&&(!e.docs.isEmpty()||n==="Offline")}uo(e){if(e.docChanges.length>0)return!0;const n=this.ao&&this.ao.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}lo(e){e=ss.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.oo.next(e)}}/**
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
 */class qm{constructor(e){this.key=e}}class Hm{constructor(e){this.key=e}}class gA{constructor(e,n){this.query=e,this.po=n,this.To=null,this.current=!1,this.Eo=Te(),this.mutatedKeys=Te(),this.Io=Jg(e),this.Ao=new rs(this.Io)}get Ro(){return this.po}bo(e,n){const r=n?n.Po:new jm,s=n?n.Ao:this.Ao;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=Jo(this.query)&&s.size===this.query.limit?s.last():null,c=Xo(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),g=ea(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),E=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let w=!1;f&&g?f.data.isEqual(g.data)?y!==E&&(r.track({type:3,doc:g}),w=!0):this.vo(f,g)||(r.track({type:2,doc:g}),w=!0,(l&&this.Io(g,l)>0||c&&this.Io(g,c)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),w=!0):f&&!g&&(r.track({type:1,doc:f}),w=!0,(l||c)&&(a=!0)),w&&(g?(o=o.add(g),i=E?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),Jo(this.query)||Xo(this.query))for(;o.size>this.query.limit;){const u=Jo(this.query)?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Ao:o,Po:r,Ln:a,mutatedKeys:i}}vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Ao;this.Ao=e.Ao,this.mutatedKeys=e.mutatedKeys;const i=e.Po.eo();i.sort((c,u)=>function(h,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return g(h)-g(f)}(c.type,u.type)||this.Io(c.doc,u.doc)),this.Vo(r);const o=n?this.So():[],a=this.Eo.size===0&&this.current?1:0,l=a!==this.To;return this.To=a,i.length!==0||l?{snapshot:new ss(this.query,e.Ao,s,i,e.mutatedKeys,a===0,l,!1),Do:o}:{Do:o}}io(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ao:this.Ao,Po:new jm,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{Do:[]}}Co(e){return!this.po.has(e)&&!!this.Ao.has(e)&&!this.Ao.get(e).hasLocalMutations}Vo(e){e&&(e.addedDocuments.forEach(n=>this.po=this.po.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.po=this.po.delete(n)),this.current=e.current)}So(){if(!this.current)return[];const e=this.Eo;this.Eo=Te(),this.Ao.forEach(r=>{this.Co(r.key)&&(this.Eo=this.Eo.add(r.key))});const n=[];return e.forEach(r=>{this.Eo.has(r)||n.push(new Hm(r))}),this.Eo.forEach(r=>{e.has(r)||n.push(new qm(r))}),n}No(e){this.po=e.Gn,this.Eo=Te();const n=this.bo(e.documents);return this.applyChanges(n,!0)}xo(){return ss.fromInitialDocuments(this.query,this.Ao,this.mutatedKeys,this.To===0)}}class mA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class yA{constructor(e){this.key=e,this.ko=!1}}class vA{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.$o={},this.Oo=new Ii(a=>Yg(a),Zo),this.Fo=new Map,this.Mo=new Set,this.Lo=new tt(G.comparator),this.Bo=new Map,this.Uo=new Eu,this.qo={},this.Ko=new Map,this.jo=ts.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return this.Qo===!0}}async function wA(t,e){const n=NA(t);let r,s;const i=n.Oo.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.xo();else{const o=await xS(n.localStore,rr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await EA(n,e,r,a==="current"),n.isPrimaryClient&&Mm(n.remoteStore,o)}return s}async function EA(t,e,n,r){t.Wo=(u,h,f)=>async function(g,y,E,w){let C=y.view.bo(E);C.Ln&&(C=await km(g.localStore,y.query,!1).then(({documents:K})=>y.view.bo(K,C)));const P=w&&w.targetChanges.get(y.targetId),q=y.view.applyChanges(C,g.isPrimaryClient,P);return Ym(g,y.targetId,q.Do),q.snapshot}(t,u,h,f);const s=await km(t.localStore,e,!0),i=new gA(e,s.Gn),o=i.bo(s.documents),a=wi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=i.applyChanges(o,t.isPrimaryClient,a);Ym(t,n,l.Do);const c=new mA(e,n,i);return t.Oo.set(e,c),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),l.snapshot}async function _A(t,e){const n=ee(t),r=n.Oo.get(e),s=n.Fo.get(r.targetId);if(s.length>1)return n.Fo.set(r.targetId,s.filter(i=>!Zo(i,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await wu(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Lm(n.remoteStore,r.targetId),Nu(n,r.targetId)}).catch(_i)):(Nu(n,r.targetId),await wu(n.localStore,r.targetId,!0))}async function IA(t,e,n){const r=kA(t);try{const s=await function(i,o){const a=ee(i),l=bt.now(),c=o.reduce((h,f)=>h.add(f.key),Te());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Qn.Pn(h,c).next(f=>{u=f;const g=[];for(const y of o){const E=zT(y,u.get(y.key));E!=null&&g.push(new sr(y.key,E,qg(E.value.mapValue),nn.exists(!0)))}return a.In.addMutationBatch(h,l,g,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let l=i.qo[i.currentUser.toKey()];l||(l=new tt(pe)),l=l.insert(o,a),i.qo[i.currentUser.toKey()]=l}(r,s.batchId,n),await Ti(r,s.changes),await pa(r.remoteStore)}catch(s){const i=Cu(s,"Failed to persist write");n.reject(i)}}async function zm(t,e){const n=ee(t);try{const r=await OS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Bo.get(i);o&&(_e(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ko=!0:s.modifiedDocuments.size>0?_e(o.ko):s.removedDocuments.size>0&&(_e(o.ko),o.ko=!1))}),await Ti(n,r,e)}catch(r){await _i(r)}}function Km(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Oo.forEach((i,o)=>{const a=o.view.io(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=ee(i);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.io(o)&&(l=!0)}),l&&Ru(a)}(r.eventManager,e),s.length&&r.$o.Rr(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function bA(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Bo.get(e),i=s&&s.key;if(i){let o=new tt(G.comparator);o=o.insert(i,et.newNoDocument(i,de.min()));const a=Te().add(i),l=new la(de.min(),new Map,new Ye(pe),o,a);await zm(r,l),r.Lo=r.Lo.remove(i),r.Bo.delete(e),ku(r)}else await wu(r.localStore,e,!1).then(()=>Nu(r,e,n)).catch(_i)}async function TA(t,e){const n=ee(t),r=e.batch.batchId;try{const s=await kS(n.localStore,e);Gm(n,r,null),Wm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ti(n,s)}catch(s){await _i(s)}}async function SA(t,e,n){const r=ee(t);try{const s=await function(i,o){const a=ee(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.In.lookupMutationBatch(l,o).next(u=>(_e(u!==null),c=u.keys(),a.In.removeMutationBatch(l,u))).next(()=>a.In.performConsistencyCheck(l)).next(()=>a.Qn.Pn(l,c))})}(r.localStore,e);Gm(r,e,n),Wm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ti(r,s)}catch(s){await _i(s)}}function Wm(t,e){(t.Ko.get(e)||[]).forEach(n=>{n.resolve()}),t.Ko.delete(e)}function Gm(t,e,n){const r=ee(t);let s=r.qo[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qo[r.currentUser.toKey()]=s}}function Nu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fo.get(e))t.Oo.delete(r),n&&t.$o.Go(r,n);t.Fo.delete(e),t.isPrimaryClient&&t.Uo.cs(e).forEach(r=>{t.Uo.containsKey(r)||Qm(t,r)})}function Qm(t,e){t.Mo.delete(e.path.canonicalString());const n=t.Lo.get(e);n!==null&&(Lm(t.remoteStore,n),t.Lo=t.Lo.remove(e),t.Bo.delete(n),ku(t))}function Ym(t,e,n){for(const r of n)r instanceof qm?(t.Uo.addReference(r.key,e),AA(t,r)):r instanceof Hm?(H("SyncEngine","Document no longer in limbo: "+r.key),t.Uo.removeReference(r.key,e),t.Uo.containsKey(r.key)||Qm(t,r.key)):Z()}function AA(t,e){const n=e.key,r=n.path.canonicalString();t.Lo.get(n)||t.Mo.has(r)||(H("SyncEngine","New document in limbo: "+n),t.Mo.add(r),ku(t))}function ku(t){for(;t.Mo.size>0&&t.Lo.size<t.maxConcurrentLimboResolutions;){const e=t.Mo.values().next().value;t.Mo.delete(e);const n=new G(Ne.fromString(e)),r=t.jo.next();t.Bo.set(r,new yA(n)),t.Lo=t.Lo.insert(n,r),Mm(t.remoteStore,new or(rr(Gg(n.path)),r,2,Xc.T))}}async function Ti(t,e,n){const r=ee(t),s=[],i=[],o=[];r.Oo.isEmpty()||(r.Oo.forEach((a,l)=>{o.push(r.Wo(l,e,n).then(c=>{if(c){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c.fromCache?"not-current":"current"),s.push(c);const u=vu.kn(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.$o.Rr(s),await async function(a,l){const c=ee(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>x.forEach(l,h=>x.forEach(h.Nn,f=>c.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>x.forEach(h.xn,f=>c.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Ei(u))throw u;H("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const f=c.Un.get(h),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);c.Un=c.Un.insert(h,y)}}}(r.localStore,i))}async function CA(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await Rm(n.localStore,e);n.currentUser=e,function(s,i){s.Ko.forEach(o=>{o.forEach(a=>{a.reject(new U(I.CANCELLED,i))})}),s.Ko.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ti(n,r.Wn)}}function RA(t,e){const n=ee(t),r=n.Bo.get(e);if(r&&r.ko)return Te().add(r.key);{let s=Te();const i=n.Fo.get(e);if(!i)return s;for(const o of i){const a=n.Oo.get(o);s=s.unionWith(a.view.Ro)}return s}}function NA(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=zm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=RA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bA.bind(null,e),e.$o.Rr=fA.bind(null,e.eventManager),e.$o.Go=dA.bind(null,e.eventManager),e}function kA(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=TA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=SA.bind(null,e),e}class OA{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=ha(e.databaseInfo.databaseId),this.sharedClientState=this.Ho(e),this.persistence=this.Jo(e),await this.persistence.start(),this.gcScheduler=this.Yo(e),this.localStore=this.Xo(e)}Yo(e){return null}Xo(e){return NS(this.persistence,new CS,e.initialUser,this.N)}Jo(e){return new BS(_u.Ns,this.N)}Ho(e){return new jS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class DA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Km(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=CA.bind(null,this.syncEngine),await aA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new cA}createDatastore(e){const n=ha(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new KS(s));var s;return function(i,o,a){return new QS(i,o,a)}(e.credentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>Km(this.syncEngine,a,0),o=Dm.bt()?new Dm:new qS,new JS(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,l,c){const u=new vA(r,s,i,o,a,l);return c&&(u.Qo=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ee(e);H("RemoteStore","RemoteStore shutting down."),n.Wr.add(5),await bi(n),n.zr.shutdown(),n.Hr.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class PA{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.tc(this.observer.next,e)}error(e){this.observer.error?this.tc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}ec(){this.muted=!0}tc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class xA{constructor(e,n,r){this.credentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=pt.UNAUTHENTICATED,this.clientId=xg.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(n,async s=>{H("FirestoreClient","Received user=",s.uid),await this.credentialListener(s),this.user=s})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(n){const r=Cu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function MA(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Rm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function LA(t,e){t.asyncQueue.verifyOperationInProgress();const n=await UA(t);H("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>async function(i,o){const a=ee(i);a.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const l=ar(a);a.Wr.add(3),await bi(a),l&&a.Hr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Wr.delete(3),await fa(a)}(e.remoteStore,s)),t.onlineComponents=e}async function UA(t){return t.offlineComponents||(H("FirestoreClient","Using default OfflineComponentProvider"),await MA(t,new OA)),t.offlineComponents}async function Jm(t){return t.onlineComponents||(H("FirestoreClient","Using default OnlineComponentProvider"),await LA(t,new DA)),t.onlineComponents}function FA(t){return Jm(t).then(e=>e.syncEngine)}async function VA(t){const e=await Jm(t),n=e.eventManager;return n.onListen=wA.bind(null,e.syncEngine),n.onUnlisten=_A.bind(null,e.syncEngine),n}function BA(t,e,n={}){const r=new Sn;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,l){const c=new PA({next:h=>{i.enqueueAndForget(()=>hA(s,u)),h.fromCache&&a.source==="server"?l.reject(new U(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new pA(o,c,{includeMetadataChanges:!0,fo:!0});return uA(s,u)}(await VA(t),t.asyncQueue,e,n,r)),r.promise}class $A{constructor(e,n,r,s,i,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Si{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Si&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Xm=new Map;/**
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
 */function Zm(t,e,n){if(!n)throw new U(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function jA(t,e,n,r){if(e===!0&&r===!0)throw new U(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ey(t){if(!G.isDocumentKey(t))throw new U(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ty(t){if(G.isDocumentKey(t))throw new U(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ga(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function Rn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ga(t);throw new U(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class ny{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new U(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,jA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Ou{constructor(e,n){this._credentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ny({}),this._settingsFrozen=!1,e instanceof Si?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new U(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Si(r.options.projectId)}(e))}get app(){if(!this._app)throw new U(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ny(e),e.credentials!==void 0&&(this._credentials=function(n){if(!n)return new yT;switch(n.type){case"gapi":const r=n.client;return _e(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new ET(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new U(I.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Xm.get(e);n&&(H("ComponentProvider","Removing Datastore"),Xm.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class mt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mt(this.firestore,e,this._key)}}class is{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new is(this.firestore,e,this._query)}}class Nn extends is{constructor(e,n,r){super(e,n,Gg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mt(this.firestore,null,new G(e))}withConverter(e){return new Nn(this.firestore,e,this._path)}}function HR(t,e,...n){if(t=at(t),Zm("collection","path",e),t instanceof Ou){const r=Ne.fromString(e,...n);return ty(r),new Nn(t,null,r)}{if(!(t instanceof mt||t instanceof Nn))throw new U(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return ty(r),new Nn(t.firestore,null,r)}}function qA(t,e,...n){if(t=at(t),arguments.length===1&&(e=xg.I()),Zm("doc","path",e),t instanceof Ou){const r=Ne.fromString(e,...n);return ey(r),new mt(t,null,new G(r))}{if(!(t instanceof mt||t instanceof Nn))throw new U(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return ey(r),new mt(t.firestore,t instanceof Nn?t.converter:null,new G(r))}}/**
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
 */class HA{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new Pm(this,"async_queue_retry"),this.Rc=()=>{const n=Iu();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ar.tr()};const e=Iu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.bc(),this.Pc(e)}enterRestrictedMode(e){if(!this.gc){this.gc=!0,this.Ic=e||!1;const n=Iu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Rc)}}enqueue(e){if(this.bc(),this.gc)return new Promise(()=>{});const n=new Sn;return this.Pc(()=>this.gc&&this.Ic?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.mc.push(e),this.vc()))}async vc(){if(this.mc.length!==0){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(e){if(!Ei(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.mc.length>0&&this.ar.Xi(()=>this.vc())}}Pc(e){const n=this._c.then(()=>(this.Ec=!0,e().catch(r=>{this.Tc=r,this.Ec=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw Tn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ec=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.bc(),this.Ac.indexOf(e)>-1&&(n=0);const s=Au.createAndSchedule(this,e,n,r,i=>this.Vc(i));return this.yc.push(s),s}bc(){this.Tc&&Z()}verifyOperationInProgress(){}async Sc(){let e;do e=this._c,await e;while(e!==this._c)}Dc(e){for(const n of this.yc)if(n.timerId===e)return!0;return!1}Cc(e){return this.Sc().then(()=>{this.yc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.yc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Sc()})}Nc(e){this.Ac.push(e)}Vc(e){const n=this.yc.indexOf(e);this.yc.splice(n,1)}}class os extends Ou{constructor(e,n){super(e,n),this.type="firestore",this._queue=new HA,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||sy(this),this._firestoreClient.terminate()}}function zR(t=Cd()){return ql(t,"firestore").getImmediate()}function ry(t){return t._firestoreClient||sy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function sy(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new $A(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new xA(t._credentials,t._queue,r)}/**
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
 *//**
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
 */class ma{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class as{constructor(e){this._byteString=e}static fromBase64String(e){try{return new as(Ze.fromBase64String(e))}catch(n){throw new U(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new as(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Du{constructor(e){this._methodName=e}}/**
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
 */class Pu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
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
 */const zA=/^__.*__$/;class KA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new sr(e,this.data,this.fieldMask,n,this.fieldTransforms):new oa(e,this.data,n,this.fieldTransforms)}}class iy{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new sr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function oy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class xu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.N=r,this.ignoreUndefinedProperties=s,i===void 0&&this.xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get kc(){return this.settings.kc}$c(e){return new xu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Oc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.$c({path:r,Fc:!1});return s.Mc(e),s}Lc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.$c({path:r,Fc:!1});return s.xc(),s}Bc(e){return this.$c({path:void 0,Fc:!0})}Uc(e){return wa(e,this.settings.methodName,this.settings.qc||!1,this.path,this.settings.Kc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Mc(this.path.get(e))}Mc(e){if(e.length===0)throw this.Uc("Document fields must not be empty");if(oy(this.kc)&&zA.test(e))throw this.Uc('Document fields cannot begin and end with "__"')}}class WA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.N=r||ha(e)}jc(e,n,r,s=!1){return new xu({kc:e,methodName:n,Kc:r,path:gt.emptyPath(),Fc:!1,qc:s},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function ya(t){const e=t._freezeSettings(),n=ha(t._databaseId);return new WA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ay(t,e,n,r,s,i={}){const o=t.jc(i.merge||i.mergeFields?2:0,e,n,s);Mu("Data must be an object, but it was:",o,r);const a=ly(r,o);let l,c;if(i.merge)l=new fi(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=Lu(e,h,n);if(!o.contains(f))throw new U(I.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);uy(u,f)||u.push(f)}l=new fi(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new KA(new Tt(a),l,c)}class va extends Du{_toFieldTransform(e){if(e.kc!==2)throw e.kc===1?e.Uc(`${this._methodName}() can only appear at the top level of your update data`):e.Uc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof va}}function GA(t,e,n,r){const s=t.jc(1,e,n);Mu("Data must be an object, but it was:",s,r);const i=[],o=Tt.empty();tr(r,(l,c)=>{const u=Uu(e,l,n);c=at(c);const h=s.Lc(u);if(c instanceof va)i.push(u);else{const f=Ai(c,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new fi(i);return new iy(o,a,s.fieldTransforms)}function QA(t,e,n,r,s,i){const o=t.jc(1,e,n),a=[Lu(e,r,n)],l=[s];if(i.length%2!=0)throw new U(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Lu(e,i[f])),l.push(i[f+1]);const c=[],u=Tt.empty();for(let f=a.length-1;f>=0;--f)if(!uy(c,a[f])){const g=a[f];let y=l[f];y=at(y);const E=o.Lc(g);if(y instanceof va)c.push(g);else{const w=Ai(y,E);w!=null&&(c.push(g),u.set(g,w))}}const h=new fi(c);return new iy(u,h,o.fieldTransforms)}function YA(t,e,n,r=!1){return Ai(n,t.jc(r?4:3,e))}function Ai(t,e){if(cy(t=at(t)))return Mu("Unsupported field value:",e,t),ly(t,e);if(t instanceof Du)return function(n,r){if(!oy(r.kc))throw r.Uc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Uc(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&e.kc!==4)throw e.Uc("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Ai(o,r.Bc(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=at(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return VT(r.N,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=bt.fromDate(n);return{timestampValue:ua(r.N,s)}}if(n instanceof bt){const s=new bt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ua(r.N,s)}}if(n instanceof Pu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof as)return{bytesValue:wm(r.N,n._byteString)};if(n instanceof mt){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.Uc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:fu(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.Uc(`Unsupported field value: ${ga(n)}`)}(t,e)}function ly(t,e){const n={};return Lg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):tr(t,(r,s)=>{const i=Ai(s,e.Oc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function cy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof bt||t instanceof Pu||t instanceof as||t instanceof mt||t instanceof Du)}function Mu(t,e,n){if(!cy(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=ga(n);throw r==="an object"?e.Uc(t+" a custom object"):e.Uc(t+" "+r)}}function Lu(t,e,n){if((e=at(e))instanceof ma)return e._internalPath;if(typeof e=="string")return Uu(t,e);throw wa("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const JA=new RegExp("[~\\*/\\[\\]]");function Uu(t,e,n){if(e.search(JA)>=0)throw wa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ma(...e.split("."))._internalPath}catch{throw wa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new U(I.INVALID_ARGUMENT,a+t+l)}function uy(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class hy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new XA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ea("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class XA extends hy{data(){return super.data()}}function Ea(t,e){return typeof e=="string"?Uu(t,e):e instanceof ma?e._internalPath:e._delegate._internalPath}/**
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
 */class _a{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ZA extends hy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ia(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ea("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ia extends ZA{data(e={}){return super.data(e)}}class eC{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new _a(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ia(this._firestore,this._userDataWriter,r.key,r,new _a(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Ia(r._firestore,r._userDataWriter,o.doc.key,o.doc,new _a(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Ia(r._firestore,r._userDataWriter,o.doc.key,o.doc,new _a(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,c=-1;return o.type!==0&&(l=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),c=i.indexOf(o.doc.key)),{type:tC(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function tC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
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
 */function nC(t){if(Xo(t)&&t.explicitOrderBy.length===0)throw new U(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fy{}function KR(t,...e){for(const n of e)t=n._apply(t);return t}class rC extends fy{constructor(e,n,r){super(),this.Gc=e,this.zc=n,this.Hc=r,this.type="where"}_apply(e){const n=ya(e.firestore),r=function(s,i,o,a,l,c,u){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new U(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on FieldPath.documentId().`);if(c==="in"||c==="not-in"){py(u,c);const g=[];for(const y of u)g.push(dy(a,s,y));h={arrayValue:{values:g}}}else h=dy(a,s,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||py(u,c),h=YA(o,i,u,c==="in"||c==="not-in");const f=ht.create(l,c,h);return function(g,y){if(y.v()){const w=lu(g);if(w!==null&&!w.isEqual(y.field))throw new U(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${w.toString()}' and '${y.field.toString()}'`);const C=au(g);C!==null&&gy(g,y.field,C)}const E=function(w,C){for(const P of w.filters)if(C.indexOf(P.op)>=0)return P.op;return null}(g,function(w){switch(w){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(y.op));if(E!==null)throw E===y.op?new U(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${y.op.toString()}' filter.`):new U(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${y.op.toString()}' filters with '${E.toString()}' filters.`)}(s,f),f}(e._query,"where",n,e.firestore._databaseId,this.Gc,this.zc,this.Hc);return new is(e.firestore,e.converter,function(s,i){const o=s.filters.concat([i]);return new Xr(s.path,s.collectionGroup,s.explicitOrderBy.slice(),o,s.limit,s.limitType,s.startAt,s.endAt)}(e._query,r))}}function WR(t,e,n){const r=e,s=Ea("where",t);return new rC(s,r,n)}class sC extends fy{constructor(e,n){super(),this.Gc=e,this.Jc=n,this.type="orderBy"}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new U(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new U(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Jr(s,i);return function(a,l){if(au(a)===null){const c=lu(a);c!==null&&gy(a,c,l.field)}}(r,o),o}(e._query,this.Gc,this.Jc);return new is(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new Xr(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function GR(t,e="asc"){const n=e,r=Ea("orderBy",t);return new sC(r,n)}function dy(t,e,n){if(typeof(n=at(n))=="string"){if(n==="")throw new U(I.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!Qg(e)&&n.indexOf("/")!==-1)throw new U(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ne.fromString(n));if(!G.isDocumentKey(r))throw new U(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Bg(t,new G(r))}if(n instanceof mt)return Bg(t,n._key);throw new U(I.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${ga(n)}.`)}function py(t,e){if(!Array.isArray(t)||t.length===0)throw new U(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new U(I.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function gy(t,e,n){if(!n.isEqual(e))throw new U(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class iC{convertValue(e,n="none"){switch(nr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Gr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Z()}}convertObject(e,n){const r={};return tr(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Pu(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Fg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(di(e));default:return null}}convertTimestamp(e){const n=An(e);return new bt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ne.fromString(e);_e(Am(r));const s=new Si(r.get(1),r.get(3)),i=new G(r.popFirst(5));return s.isEqual(n)||Tn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function my(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class oC extends iC{constructor(e){super(),this.firestore=e}convertBytes(e){return new as(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new mt(this.firestore,null,n)}}function QR(t){t=Rn(t,is);const e=Rn(t.firestore,os),n=ry(e),r=new oC(e);return nC(t._query),BA(n,t._query).then(s=>new eC(e,r,t,s))}function YR(t,e,n){t=Rn(t,mt);const r=Rn(t.firestore,os),s=my(t.converter,e,n);return ba(r,[ay(ya(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,nn.none())])}function JR(t,e,n,...r){t=Rn(t,mt);const s=Rn(t.firestore,os),i=ya(s);let o;return o=typeof(e=at(e))=="string"||e instanceof ma?QA(i,"updateDoc",t._key,e,n,r):GA(i,"updateDoc",t._key,e),ba(s,[o.toMutation(t._key,nn.exists(!0))])}function XR(t){return ba(Rn(t.firestore,os),[new um(t._key,nn.none())])}function ZR(t,e){const n=Rn(t.firestore,os),r=qA(t),s=my(t.converter,e);return ba(n,[ay(ya(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,nn.exists(!1))]).then(()=>r)}function ba(t,e){return function(n,r){const s=new Sn;return n.asyncQueue.enqueueAndForget(async()=>IA(await FA(n),r,s)),s.promise}(ry(t),e)}(function(t,e=!0){(function(n){Kr=n})(Fs),Us(new xr("firestore",(n,{options:r})=>{const s=n.getProvider("app").getImmediate(),i=new os(s,new vT(n.getProvider("auth-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),mn(Og,"3.3.1",t),mn(Og,"3.3.1","esm2017")})();var Fu={exports:{}},yy=function(e,n){return function(){for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];return e.apply(n,s)}},aC=yy,lr=Object.prototype.toString;function Vu(t){return lr.call(t)==="[object Array]"}function Bu(t){return typeof t=="undefined"}function lC(t){return t!==null&&!Bu(t)&&t.constructor!==null&&!Bu(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function cC(t){return lr.call(t)==="[object ArrayBuffer]"}function uC(t){return typeof FormData!="undefined"&&t instanceof FormData}function hC(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function fC(t){return typeof t=="string"}function dC(t){return typeof t=="number"}function vy(t){return t!==null&&typeof t=="object"}function Ta(t){if(lr.call(t)!=="[object Object]")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function pC(t){return lr.call(t)==="[object Date]"}function gC(t){return lr.call(t)==="[object File]"}function mC(t){return lr.call(t)==="[object Blob]"}function wy(t){return lr.call(t)==="[object Function]"}function yC(t){return vy(t)&&wy(t.pipe)}function vC(t){return typeof URLSearchParams!="undefined"&&t instanceof URLSearchParams}function wC(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function EC(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function $u(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),Vu(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.call(null,t[s],s,t)}function ju(){var t={};function e(s,i){Ta(t[i])&&Ta(s)?t[i]=ju(t[i],s):Ta(s)?t[i]=ju({},s):Vu(s)?t[i]=s.slice():t[i]=s}for(var n=0,r=arguments.length;n<r;n++)$u(arguments[n],e);return t}function _C(t,e,n){return $u(e,function(s,i){n&&typeof s=="function"?t[i]=aC(s,n):t[i]=s}),t}function IC(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}var St={isArray:Vu,isArrayBuffer:cC,isBuffer:lC,isFormData:uC,isArrayBufferView:hC,isString:fC,isNumber:dC,isObject:vy,isPlainObject:Ta,isUndefined:Bu,isDate:pC,isFile:gC,isBlob:mC,isFunction:wy,isStream:yC,isURLSearchParams:vC,isStandardBrowserEnv:EC,forEach:$u,merge:ju,extend:_C,trim:wC,stripBOM:IC},ls=St;function Ey(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var _y=function(e,n,r){if(!n)return e;var s;if(r)s=r(n);else if(ls.isURLSearchParams(n))s=n.toString();else{var i=[];ls.forEach(n,function(l,c){l===null||typeof l=="undefined"||(ls.isArray(l)?c=c+"[]":l=[l],ls.forEach(l,function(h){ls.isDate(h)?h=h.toISOString():ls.isObject(h)&&(h=JSON.stringify(h)),i.push(Ey(c)+"="+Ey(h))}))}),s=i.join("&")}if(s){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e},bC=St;function Sa(){this.handlers=[]}Sa.prototype.use=function(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1};Sa.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};Sa.prototype.forEach=function(e){bC.forEach(this.handlers,function(r){r!==null&&e(r)})};var TC=Sa,SC=St,AC=function(e,n){SC.forEach(e,function(s,i){i!==n&&i.toUpperCase()===n.toUpperCase()&&(e[n]=s,delete e[i])})},Iy=function(e,n,r,s,i){return e.config=n,r&&(e.code=r),e.request=s,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},CC=Iy,by=function(e,n,r,s,i){var o=new Error(e);return CC(o,n,r,s,i)},RC=by,NC=function(e,n,r){var s=r.config.validateStatus;!r.status||!s||s(r.status)?e(r):n(RC("Request failed with status code "+r.status,r.config,null,r.request,r))},Aa=St,kC=Aa.isStandardBrowserEnv()?function(){return{write:function(n,r,s,i,o,a){var l=[];l.push(n+"="+encodeURIComponent(r)),Aa.isNumber(s)&&l.push("expires="+new Date(s).toGMTString()),Aa.isString(i)&&l.push("path="+i),Aa.isString(o)&&l.push("domain="+o),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){var r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),OC=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},DC=function(e,n){return n?e.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):e},PC=OC,xC=DC,MC=function(e,n){return e&&!PC(n)?xC(e,n):n},qu=St,LC=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],UC=function(e){var n={},r,s,i;return e&&qu.forEach(e.split(`
`),function(a){if(i=a.indexOf(":"),r=qu.trim(a.substr(0,i)).toLowerCase(),s=qu.trim(a.substr(i+1)),r){if(n[r]&&LC.indexOf(r)>=0)return;r==="set-cookie"?n[r]=(n[r]?n[r]:[]).concat([s]):n[r]=n[r]?n[r]+", "+s:s}}),n},Ty=St,FC=Ty.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a"),r;function s(i){var o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){var a=Ty.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Hu(t){this.message=t}Hu.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};Hu.prototype.__CANCEL__=!0;var Ca=Hu,Ra=St,VC=NC,BC=kC,$C=_y,jC=MC,qC=UC,HC=FC,zu=by,zC=ka,KC=Ca,Sy=function(e){return new Promise(function(r,s){var i=e.data,o=e.headers,a=e.responseType,l;function c(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}Ra.isFormData(i)&&delete o["Content-Type"];var u=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(h+":"+f)}var g=jC(e.baseURL,e.url);u.open(e.method.toUpperCase(),$C(g,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function y(){if(!!u){var w="getAllResponseHeaders"in u?qC(u.getAllResponseHeaders()):null,C=!a||a==="text"||a==="json"?u.responseText:u.response,P={data:C,status:u.status,statusText:u.statusText,headers:w,config:e,request:u};VC(function(K){r(K),c()},function(K){s(K),c()},P),u=null}}if("onloadend"in u?u.onloadend=y:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(y)},u.onabort=function(){!u||(s(zu("Request aborted",e,"ECONNABORTED",u)),u=null)},u.onerror=function(){s(zu("Network Error",e,null,u)),u=null},u.ontimeout=function(){var C=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",P=e.transitional||zC.transitional;e.timeoutErrorMessage&&(C=e.timeoutErrorMessage),s(zu(C,e,P.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",u)),u=null},Ra.isStandardBrowserEnv()){var E=(e.withCredentials||HC(g))&&e.xsrfCookieName?BC.read(e.xsrfCookieName):void 0;E&&(o[e.xsrfHeaderName]=E)}"setRequestHeader"in u&&Ra.forEach(o,function(C,P){typeof i=="undefined"&&P.toLowerCase()==="content-type"?delete o[P]:u.setRequestHeader(P,C)}),Ra.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&a!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(l=function(w){!u||(s(!w||w&&w.type?new KC("canceled"):w),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l))),i||(i=null),u.send(i)})},Je=St,Ay=AC,WC=Iy,GC={"Content-Type":"application/x-www-form-urlencoded"};function Cy(t,e){!Je.isUndefined(t)&&Je.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function QC(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=Sy),t}function YC(t,e,n){if(Je.isString(t))try{return(e||JSON.parse)(t),Je.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}var Na={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:QC(),transformRequest:[function(e,n){return Ay(n,"Accept"),Ay(n,"Content-Type"),Je.isFormData(e)||Je.isArrayBuffer(e)||Je.isBuffer(e)||Je.isStream(e)||Je.isFile(e)||Je.isBlob(e)?e:Je.isArrayBufferView(e)?e.buffer:Je.isURLSearchParams(e)?(Cy(n,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):Je.isObject(e)||n&&n["Content-Type"]==="application/json"?(Cy(n,"application/json"),YC(e)):e}],transformResponse:[function(e){var n=this.transitional||Na.transitional,r=n&&n.silentJSONParsing,s=n&&n.forcedJSONParsing,i=!r&&this.responseType==="json";if(i||s&&Je.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(i)throw o.name==="SyntaxError"?WC(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};Je.forEach(["delete","get","head"],function(e){Na.headers[e]={}});Je.forEach(["post","put","patch"],function(e){Na.headers[e]=Je.merge(GC)});var ka=Na,JC=St,XC=ka,ZC=function(e,n,r){var s=this||XC;return JC.forEach(r,function(o){e=o.call(s,e,n)}),e},Ry=function(e){return!!(e&&e.__CANCEL__)},Ny=St,Ku=ZC,eR=Ry,tR=ka,nR=Ca;function Wu(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new nR("canceled")}var rR=function(e){Wu(e),e.headers=e.headers||{},e.data=Ku.call(e,e.data,e.headers,e.transformRequest),e.headers=Ny.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Ny.forEach(["delete","get","head","post","put","patch","common"],function(s){delete e.headers[s]});var n=e.adapter||tR.adapter;return n(e).then(function(s){return Wu(e),s.data=Ku.call(e,s.data,s.headers,e.transformResponse),s},function(s){return eR(s)||(Wu(e),s&&s.response&&(s.response.data=Ku.call(e,s.response.data,s.response.headers,e.transformResponse))),Promise.reject(s)})},At=St,ky=function(e,n){n=n||{};var r={};function s(u,h){return At.isPlainObject(u)&&At.isPlainObject(h)?At.merge(u,h):At.isPlainObject(h)?At.merge({},h):At.isArray(h)?h.slice():h}function i(u){if(At.isUndefined(n[u])){if(!At.isUndefined(e[u]))return s(void 0,e[u])}else return s(e[u],n[u])}function o(u){if(!At.isUndefined(n[u]))return s(void 0,n[u])}function a(u){if(At.isUndefined(n[u])){if(!At.isUndefined(e[u]))return s(void 0,e[u])}else return s(void 0,n[u])}function l(u){if(u in n)return s(e[u],n[u]);if(u in e)return s(void 0,e[u])}var c={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l};return At.forEach(Object.keys(e).concat(Object.keys(n)),function(h){var f=c[h]||i,g=f(h);At.isUndefined(g)&&f!==l||(r[h]=g)}),r},Oy={version:"0.24.0"},sR=Oy.version,Gu={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){Gu[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});var Dy={};Gu.transitional=function(e,n,r){function s(i,o){return"[Axios v"+sR+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return function(i,o,a){if(e===!1)throw new Error(s(o," has been removed"+(n?" in "+n:"")));return n&&!Dy[o]&&(Dy[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function iR(t,e,n){if(typeof t!="object")throw new TypeError("options must be an object");for(var r=Object.keys(t),s=r.length;s-- >0;){var i=r[s],o=e[i];if(o){var a=t[i],l=a===void 0||o(a,i,t);if(l!==!0)throw new TypeError("option "+i+" must be "+l);continue}if(n!==!0)throw Error("Unknown option "+i)}}var oR={assertOptions:iR,validators:Gu},Py=St,aR=_y,xy=TC,My=rR,Oa=ky,Ly=oR,cs=Ly.validators;function Ci(t){this.defaults=t,this.interceptors={request:new xy,response:new xy}}Ci.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=Oa(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var n=e.transitional;n!==void 0&&Ly.assertOptions(n,{silentJSONParsing:cs.transitional(cs.boolean),forcedJSONParsing:cs.transitional(cs.boolean),clarifyTimeoutError:cs.transitional(cs.boolean)},!1);var r=[],s=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(e)===!1||(s=s&&f.synchronous,r.unshift(f.fulfilled,f.rejected))});var i=[];this.interceptors.response.forEach(function(f){i.push(f.fulfilled,f.rejected)});var o;if(!s){var a=[My,void 0];for(Array.prototype.unshift.apply(a,r),a=a.concat(i),o=Promise.resolve(e);a.length;)o=o.then(a.shift(),a.shift());return o}for(var l=e;r.length;){var c=r.shift(),u=r.shift();try{l=c(l)}catch(h){u(h);break}}try{o=My(l)}catch(h){return Promise.reject(h)}for(;i.length;)o=o.then(i.shift(),i.shift());return o};Ci.prototype.getUri=function(e){return e=Oa(this.defaults,e),aR(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};Py.forEach(["delete","get","head","options"],function(e){Ci.prototype[e]=function(n,r){return this.request(Oa(r||{},{method:e,url:n,data:(r||{}).data}))}});Py.forEach(["post","put","patch"],function(e){Ci.prototype[e]=function(n,r,s){return this.request(Oa(s||{},{method:e,url:n,data:r}))}});var lR=Ci,cR=Ca;function us(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(s){e=s});var n=this;this.promise.then(function(r){if(!!n._listeners){var s,i=n._listeners.length;for(s=0;s<i;s++)n._listeners[s](r);n._listeners=null}}),this.promise.then=function(r){var s,i=new Promise(function(o){n.subscribe(o),s=o}).then(r);return i.cancel=function(){n.unsubscribe(s)},i},t(function(s){n.reason||(n.reason=new cR(s),e(n.reason))})}us.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};us.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};us.prototype.unsubscribe=function(e){if(!!this._listeners){var n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}};us.source=function(){var e,n=new us(function(s){e=s});return{token:n,cancel:e}};var uR=us,hR=function(e){return function(r){return e.apply(null,r)}},fR=function(e){return typeof e=="object"&&e.isAxiosError===!0},Uy=St,dR=yy,Da=lR,pR=ky,gR=ka;function Fy(t){var e=new Da(t),n=dR(Da.prototype.request,e);return Uy.extend(n,Da.prototype,e),Uy.extend(n,e),n.create=function(s){return Fy(pR(t,s))},n}var Wt=Fy(gR);Wt.Axios=Da;Wt.Cancel=Ca;Wt.CancelToken=uR;Wt.isCancel=Ry;Wt.VERSION=Oy.version;Wt.all=function(e){return Promise.all(e)};Wt.spread=hR;Wt.isAxiosError=fR;Fu.exports=Wt;Fu.exports.default=Wt;var eN=Fu.exports;function Qu(t){return(Qu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function Vy(t){return function(e){if(Array.isArray(e))return Yu(e)}(t)||function(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}(t)||By(t)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function By(t,e){if(t){if(typeof t=="string")return Yu(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Yu(t,e):void 0}}function Yu(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function cr(t,e){var n=typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=By(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var r=0,s=function(){};return{s,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(l){throw l},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var l=n.next();return o=l.done,l},e:function(l){a=!0,i=l},f:function(){try{o||n.return==null||n.return()}finally{if(a)throw i}}}}var Ju={inheritAttrs:!1,name:"vue-input",props:{autocomplete:{required:!1,type:String},modelValue:{required:!0,type:String},placeholder:{required:!0,type:String},disabled:{required:!0,type:Boolean},tabindex:{required:!0,type:Number},autofocus:{required:!0,type:Boolean},comboboxUid:{required:!0,type:Number}},emits:["update:modelValue","input","change","focus","blur","escape"],setup:function(t,e){var n=Bt(null);return al(function(){t.autofocus&&n.value.focus()}),Kh(function(){t.autofocus&&n.value.focus()}),{handleInput:function(r){e.emit("input",r),e.emit("update:modelValue",r.target.value)},handleChange:function(r){e.emit("change",r),e.emit("update:modelValue",r.target.value)},handleFocus:function(r){e.emit("focus",r)},handleBlur:function(r){e.emit("blur",r)},input:n,handleEscape:function(r){n.value.blur(),e.emit("escape",r)}}}},mR={class:"vue-input"},yR=["autocomplete","modelValue","placeholder","disabled","tabindex","autofocus","aria-controls","aria-labelledby"];Ju.render=function(t,e,n,r,s,i){return He(),dt("div",mR,[Mt(t.$slots,"prepend"),Pe("input",{ref:"input",autocomplete:n.autocomplete,modelValue:n.modelValue,placeholder:n.placeholder,disabled:n.disabled,onInput:e[0]||(e[0]=function(){return r.handleInput&&r.handleInput.apply(r,arguments)}),onChange:e[1]||(e[1]=function(){return r.handleChange&&r.handleChange.apply(r,arguments)}),onFocus:e[2]||(e[2]=function(){return r.handleFocus&&r.handleFocus.apply(r,arguments)}),onBlur:e[3]||(e[3]=function(){return r.handleBlur&&r.handleBlur.apply(r,arguments)}),onKeyup:e[4]||(e[4]=Cr(Lt(function(){return r.handleEscape&&r.handleEscape.apply(r,arguments)},["exact"]),["esc"])),tabindex:n.tabindex,autofocus:n.autofocus,"aria-autocomplete":"list","aria-controls":"vs".concat(n.comboboxUid,"-listbox"),"aria-labelledby":"vs".concat(n.comboboxUid,"-combobox")},null,40,yR),Mt(t.$slots,"append")])},Ju.__file="src/components/input.vue";var Xu={inheritAttrs:!1,name:"vue-tags",props:{modelValue:{required:!0,type:Array,validator:function(t){return t.every(function(e){return Qu(e.key)!==void 0&&e.label!==void 0&&typeof e.selected=="boolean"})}},collapseTags:{type:Boolean}},emits:["click"],setup:function(t,e){return{dataAttrs:Rt("dataAttrs"),handleClick:function(n){e.emit("click",n)}}}};Xu.render=function(t,e,n,r,s,i){return He(),dt("ul",Xi({class:["vue-tags",{collapsed:n.collapseTags}],onMousedown:e[0]||(e[0]=Lt(function(){},["prevent"])),tabindex:"-1",onClick:e[1]||(e[1]=function(){return r.handleClick&&r.handleClick.apply(r,arguments)})},r.dataAttrs),[(He(!0),dt(Ue,null,mf(n.modelValue,function(o){return He(),dt(Ue,{key:o.key},[o.group?Er("v-if",!0):(He(),dt("li",{key:0,class:kn(["vue-tag",{selected:o.selected}])},[Mt(t.$slots,"default",{option:o},function(){return[Pe("span",null,Ri(o.label),1)]})],2))],64)}),128))],16)},Xu.__file="src/components/tags.vue";var Zu={inheritAttrs:!1,name:"vue-dropdown",props:{modelValue:{required:!0,type:Array,validator:function(t){return t.every(function(e){return Qu(e.key)!==void 0&&e.label!==void 0&&typeof e.selected=="boolean"})}},comboboxUid:{required:!0,type:Number},maxHeight:{required:!0},highlightedOriginalIndex:{required:!0}},emits:["click-item","mouseenter"],setup:function(t,e){return{dataAttrs:Rt("dataAttrs"),handleClickItem:function(n,r){r.disabled||e.emit("click-item",n,r)},handleMouseenter:function(n,r){e.emit("mouseenter",n,r)}}}},vR=["id","aria-multiselectable","aria-busy","aria-disabled"],wR=["onClick","onMouseenter","id","aria-selected","aria-disabled"];Zu.render=function(t,e,n,r,s,i){return He(),dt("ul",Xi({class:"vue-dropdown",style:{maxHeight:n.maxHeight+"px"},onMousedown:e[0]||(e[0]=Lt(function(){},["prevent"]))},r.dataAttrs,{role:"listbox",id:"vs".concat(n.comboboxUid,"-listbox"),"aria-multiselectable":r.dataAttrs["data-multiple"],"aria-busy":r.dataAttrs["data-loading"],"aria-disabled":r.dataAttrs["data-disabled"]}),[(He(!0),dt(Ue,null,mf(n.modelValue,function(o,a){return He(),dt(Ue,{key:o.key},[o.visible&&o.hidden===!1?(He(),dt("li",{key:0,onClick:function(l){return r.handleClickItem(l,o)},class:kn(["vue-dropdown-item",{selected:o.selected,disabled:o.disabled,highlighted:o.originalIndex===n.highlightedOriginalIndex,group:o.group}]),onMouseenter:function(l){return r.handleMouseenter(l,o)},role:"option",id:"vs".concat(n.comboboxUid,"-option-").concat(a),"aria-selected":!!o.selected||!!o.disabled&&void 0,"aria-disabled":o.disabled},[Mt(t.$slots,"default",{option:o},function(){return[Pe("span",null,Ri(o.label),1)]})],42,wR)):Er("v-if",!0)],64)}),128))],16,vR)},Zu.__file="src/components/dropdown.vue";var $y=function(t,e,n){var r=n.valueBy;return r(t)===r(e)},hs=function(t,e,n){var r=n.valueBy;return t.some(function(s){return $y(s,e,{valueBy:r})})},ur=function(t,e,n){var r=n.valueBy;return t.find(function(s){return r(s)===e})},eh=function(t,e,n){var r=n.max,s=n.valueBy;return hs(t,e,{valueBy:s})||t.length>=r?t:t.concat(e)},th=function(t,e,n){var r=n.min,s=n.valueBy;return hs(t,e,{valueBy:s})===!1||t.length<=r?t:t.filter(function(i){return $y(i,e,{valueBy:s})===!1})},Pa=function(t){return we(function(){return typeof t.value=="function"?t.value:typeof t.value=="string"?function(e){return t.value.split(".").reduce(function(n,r){return n[r]},e)}:function(e){return e}})},ER=function(t,e){var n=we(function(){return t.value.reduce(function(o,a){return Object.assign(o,(l={},c=a.originalIndex,u=a,c in l?Object.defineProperty(l,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):l[c]=u,l));var l,c,u},{})}),r=function(o){var a=n.value[o];return a!==void 0&&s(a)!==!1&&(e.value=o,!0)},s=function(o){return!o.disabled&&!o.hidden&&o.visible},i=we(function(){return t.value.some(function(o){return s(o)})});return un(function(){if(i.value===!1&&(e.value=null),e.value!==null&&t.value.length<=e.value){var o,a=cr(t.value.reverse());try{for(a.s();!(o=a.n()).done;){var l=o.value;if(r(l.originalIndex))break}}catch(f){a.e(f)}finally{a.f()}}if(e.value===null||s(t.value[e.value])===!1){var c,u=cr(t.value);try{for(u.s();!(c=u.n()).done;){var h=c.value;if(r(h.originalIndex))break}}catch(f){u.e(f)}finally{u.f()}}}),{pointerForward:function(){if(i.value!==!1&&e.value!==null)for(var o=e.value+1,a=0;o!==e.value&&a++<t.value.length&&(t.value.length<=o&&(o=0),!r(o));)++o},pointerBackward:function(){if(i.value!==!1&&e.value!==null)for(var o=e.value-1,a=0;o!==e.value&&a++<t.value.length&&(o<0&&(o=t.value.length-1),!r(o));)--o},pointerSet:r}},nh=il({name:"vue-select",inheritAttrs:!1,props:{modelValue:{required:!0},emptyModelValue:{},options:{required:!0,type:Array},labelBy:{type:[String,Function]},valueBy:{type:[String,Function]},disabledBy:{default:"disabled",type:[String,Function]},groupBy:{default:"group",type:[String,Function]},visibleOptions:{type:Array,default:null},multiple:{default:!1,type:Boolean},min:{default:0,type:Number},max:{default:1/0,type:Number},searchable:{default:!1,type:Boolean},searchPlaceholder:{default:"Type to search",type:String},clearOnSelect:{default:!1,type:Boolean},clearOnClose:{default:!1,type:Boolean},taggable:{default:!1,type:Boolean},collapseTags:{default:!1,type:Boolean},autocomplete:{default:"off",type:String},disabled:{default:!1,type:Boolean},loading:{default:!1,type:Boolean},closeOnSelect:{default:!1,type:Boolean},hideSelected:{default:!1,type:Boolean},placeholder:{default:"Select option",type:String},tabindex:{default:0,type:Number},autofocus:{default:!1,type:Boolean},maxHeight:{default:300,type:Number},openDirection:{type:String,validator:function(t){return["top","bottom"].includes(t)}}},emits:["selected","removed","update:modelValue","focus","blur","toggle","opened","closed","search:input","search:change","search:focus","search:blur"],setup:function(t,e){var n=function(S){var m=yr({}),R=Pa(qi(S,"labelBy"));un(function(){return m.labelBy=R.value});var _=Pa(qi(S,"valueBy"));un(function(){return m.valueBy=_.value});var M=Pa(qi(S,"disabledBy"));un(function(){return m.disabledBy=M.value});var B=Pa(qi(S,"groupBy"));un(function(){return m.groupBy=B.value});var re=we(function(){return S.multiple?S.min:Math.min(1,S.min)});un(function(){return m.min=re.value});var Q=we(function(){return S.multiple?S.max:1});return un(function(){return m.max=Q.value}),un(function(){return m.options=S.options}),m}(t),r=we(function(){var S;return(S=t.emptyModelValue)!==null&&S!==void 0?S:null}),s=vf(),i=Bt(),o=Bt(),a=Bt(),l=we(function(){var S;return(S=a.value)===null||S===void 0?void 0:S._.refs.input}),c=Bt(!1);qt(function(){return c.value},function(){c.value?(e.emit("opened"),e.emit("focus"),t.searchable?(l.value!==document.activeElement&&l.value.focus(),e.emit("search:focus")):i.value.focus()):(t.searchable?(l.value===document.activeElement&&l.value.blur(),t.clearOnClose&&te(),e.emit("search:blur")):i.value.blur(),e.emit("closed"),e.emit("blur")),e.emit("toggle")});var u=function(){t.disabled||(c.value=!0)},h=function(S){i.value.contains(S==null?void 0:S.relatedTarget)?setTimeout(function(){i.value.focus()}):c.value=!1};qt(function(){return t.disabled},function(){return h()});var f=Bt(""),g=we(function(){return new RegExp(f.value.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"i")}),y=we(function(){return f.value?n.options.filter(function(S){return g.value.test(n.labelBy(S))}):void 0}),E=Bt([]),w=we(function(){return new Set(E.value.map(function(S){return n.valueBy(S)}))}),C=function(){if(t.multiple){if(Array.isArray(t.modelValue)===!1||E.value.length!==t.modelValue.length||Object.keys(E.value).some(function(S){return E.value[S]!==ur(n.options,t.modelValue[S],{valueBy:n.valueBy})}))return!1}else if(E.value.length===0&&t.modelValue!==r.value||E.value.length===1&&t.modelValue===r.value||E.value[0]!==ur(n.options,t.modelValue,{valueBy:n.valueBy}))return!1;return!0},P=function(){if(!C()){E.value=[];var S,m=cr(t.multiple?t.modelValue:t.modelValue===r.value?[]:[t.modelValue]);try{for(m.s();!(S=m.n()).done;){var R=S.value,_=ur(n.options,R,{valueBy:n.valueBy});hs(n.options,_,{valueBy:n.valueBy})!==!1&&(E.value=eh(E.value,_,{max:1/0,valueBy:n.valueBy}))}}catch(M){m.e(M)}finally{m.f()}}};P(),qt(function(){return t.modelValue},function(){return P()},{deep:!0}),qt(function(){return n.options},function(){E.value=n.options.filter(function(S){return w.value.has(n.valueBy(S))})},{deep:!0});var q,K=function(S,m){(m=m.originalOption).value.every(function(R){var _=ur(n.options,R,{valueBy:n.valueBy});return hs(E.value,_,{valueBy:n.valueBy})})?m.value.forEach(function(R){var _=ur(n.options,R,{valueBy:n.valueBy});E.value=th(E.value,_,{min:n.min,valueBy:n.valueBy}),e.emit("removed",_)}):m.value.forEach(function(R){var _=ur(n.options,R,{valueBy:n.valueBy});hs(E.value,_,{valueBy:n.valueBy})||(E.value=eh(E.value,_,{max:n.max,valueBy:n.valueBy}),e.emit("selected",_))})},he=function(S,m){if(m=m.originalOption,hs(E.value,m,{valueBy:n.valueBy}))E.value=th(E.value,m,{min:n.min,valueBy:n.valueBy}),e.emit("removed",m);else{if(!t.multiple&&E.value.length===1){var R=E.value[0];E.value=th(E.value,E.value[0],{min:0,valueBy:n.valueBy}),e.emit("removed",R)}E.value=eh(E.value,m,{max:n.max,valueBy:n.valueBy}),e.emit("selected",m)}},ge=function(){if(!C()){var S=E.value.map(function(m){return n.valueBy(m)});t.multiple?e.emit("update:modelValue",S):S.length?e.emit("update:modelValue",S[0]):e.emit("update:modelValue",r.value)}},te=function(){l.value.value="",l.value.dispatchEvent(new Event("input")),l.value.dispatchEvent(new Event("change"))},Ie=we(function(){var S,m;return(m=(S=t.visibleOptions)!==null&&S!==void 0?S:y.value)!==null&&m!==void 0?m:n.options}),se=Bt(0),fe=we(function(){var S,m=new Set(Ie.value.map(function(B){return n.valueBy(B)})),R=n.options.map(function(B,re){var Q,z={key:n.valueBy(B),label:n.labelBy(B),group:(Q=n.groupBy(B))!==null&&Q!==void 0&&Q,originalIndex:re,originalOption:B};return z.selected=z.group?B.value.every(function(d){return w.value.has(d)}):w.value.has(n.valueBy(B)),z.disabled=z.group?n.disabledBy(B)||B.value.every(function(d){var p=ur(n.options,d,{valueBy:n.valueBy});return n.disabledBy(p)}):n.disabledBy(B),z.visible=z.group?B.value.some(function(d){return m.has(d)}):m.has(n.valueBy(B)),z.hidden=!!t.hideSelected&&(z.group?B.value.every(function(d){return w.value.has(d)}):w.value.has(n.valueBy(B))),z}),_=cr(R);try{for(_.s();!(S=_.n()).done;){var M=S.value;M.group!==!1&&M.disabled&&function(){var B=new Set(M.originalOption.value);R.filter(function(re){return B.has(n.valueBy(re.originalOption))}).forEach(function(re){return re.disabled=!0})}()}}catch(B){_.e(B)}finally{_.f()}return R}),ke=ER(fe,se),V=ke.pointerForward,Se=ke.pointerBackward,De=ke.pointerSet,ft="",Ae=/^[\w]$/,me=we(function(){var S=Vy(n.options.keys());return S.slice(se.value).concat(S.slice(0,se.value))}),oe=function(){var S,m=(S=i.value)===null||S===void 0?void 0:S.querySelector(".highlighted");if(m&&o.value){var R,_=getComputedStyle(m);for(R=0;m.offsetTop+parseFloat(_.height)+parseFloat(_.paddingTop)+parseFloat(_.paddingBottom)>o.value.$el.clientHeight+o.value.$el.scrollTop&&R++<fe.value.length;)o.value.$el.scrollTop=o.value.$el.scrollTop+parseFloat(_.height)+parseFloat(_.paddingTop)+parseFloat(_.paddingBottom);for(R=0;m.offsetTop<o.value.$el.scrollTop&&R++<fe.value.length;)o.value.$el.scrollTop=o.value.$el.scrollTop-parseFloat(_.height)-parseFloat(_.paddingTop)-parseFloat(_.paddingBottom)}};qt(function(){return[c.value,n.options,w.value]},function(S,m){(m==null?void 0:m[0])!==!0&&c.value!==!1&&E.value.length!==0&&(De(n.options.findIndex(function(R){return w.value.has(n.valueBy(R))})),$n(oe))},{deep:!0,immediate:!0});var nt=we(function(){return{"data-is-focusing":c.value,"data-visible-length":fe.value.filter(function(S){return S.visible&&S.hidden===!1}).length,"data-not-selected-length":n.options.length-fe.value.filter(function(S){return S.selected}).length,"data-selected-length":fe.value.filter(function(S){return S.selected}).length,"data-addable":fe.value.filter(function(S){return S.selected}).length<n.max,"data-removable":fe.value.filter(function(S){return S.selected}).length>n.min,"data-total-length":n.options.length,"data-multiple":t.multiple,"data-loading":t.loading,"data-disabled":t.disabled}});Es("dataAttrs",nt);var yt=we(function(){return fe.value.filter(function(S){return S.selected}).filter(function(S){return!S.group})}),Ot=we(function(){return t.multiple?yt.value.length===0?t.placeholder:yt.value.length===1?"1 option selected":yt.value.length+" options selected":yt.value.length===0?t.placeholder:yt.value[0].label+""}),Ct=we(function(){var S=yt.value.map(function(m){return m.originalOption});return t.multiple?S:S[0]||r.value}),rt=Bt();return qt(function(){return[t.openDirection,c.value]},function(){var S,m;rt.value=(m=(S=t.openDirection)!==null&&S!==void 0?S:function(){if(i.value!==void 0&&window!==void 0)return window.innerHeight-i.value.getBoundingClientRect().bottom>=t.maxHeight?"bottom":"top"}())!==null&&m!==void 0?m:"bottom"},{immediate:!0}),{instance:s,isFocusing:c,wrapper:i,dropdown:o,input:a,focus:u,blur:h,toggle:function(){c.value?h():u()},searchingInputValue:f,handleInputForInput:function(S){e.emit("search:input",S)},handleChangeForInput:function(S){e.emit("search:change",S)},handleFocusForInput:function(S){u()},handleBlurForInput:function(S){h()},optionsWithInfo:fe,addOrRemoveOption:function(S,m){t.disabled||(m.group&&t.multiple?K(S,m):he(S,m),ge(),t.closeOnSelect===!0&&(c.value=!1),t.clearOnSelect===!0&&f.value&&te())},dataAttrs:nt,innerPlaceholder:Ot,selected:Ct,highlightedOriginalIndex:se,pointerForward:function(){V(),$n(oe)},pointerBackward:function(){Se(),$n(oe)},pointerFirst:function(){var S,m=cr(n.options.keys());try{for(m.s();!(S=m.n()).done;){var R=S.value;if(De(R))break}}catch(_){m.e(_)}finally{m.f()}$n(oe)},pointerLast:function(){var S,m=cr(Vy(n.options.keys()).reverse());try{for(m.s();!(S=m.n()).done;){var R=S.value;if(De(R))break}}catch(_){m.e(_)}finally{m.f()}$n(oe)},typeAhead:function(S){var m,R;if(!t.searchable){var _=!1;if(Ae.test(S.key)?(ft+=S.key.toLowerCase(),_=!0):S.code==="Space"&&(ft+=" "),_){var M,B=cr(me.value);try{for(B.s();!(M=B.n()).done;){var re=M.value;if(((R=(m=n.labelBy(n.options[re]))===null||m===void 0?void 0:m.toLowerCase())===null||R===void 0?void 0:R.startsWith(ft))===!0&&De(re))break}}catch(Q){B.e(Q)}finally{B.f()}clearTimeout(q),q=setTimeout(function(){ft=""},500)}}},pointerSet:De,direction:rt}},components:{VInput:Ju,VTags:Xu,VDropdown:Zu}});nh.__VERSION__="2.10.2";var _R=["tabindex","id","role","aria-expanded","aria-owns","aria-activedescendant","aria-busy","aria-disabled"],IR={ref:"header",class:"vue-select-header"},bR={key:0,class:"vue-input"},TR=["placeholder","autocomplete"],SR=["onClick"],AR=Pe("span",{class:"icon loading"},[Pe("div"),Pe("div"),Pe("div")],-1),CR={key:0,class:"vue-select-input-wrapper"},RR=Pe("span",{class:"icon loading"},[Pe("div"),Pe("div"),Pe("div")],-1);nh.render=function(t,e,n,r,s,i){var o=dl("v-tags"),a=dl("v-input"),l=dl("v-dropdown");return He(),dt("div",Xi({ref:"wrapper",class:["vue-select",["direction-".concat(t.direction)]],tabindex:t.isFocusing?-1:t.tabindex,onFocus:e[9]||(e[9]=function(){return t.focus&&t.focus.apply(t,arguments)}),onBlur:e[10]||(e[10]=function(c){return!t.searchable&&t.blur(c)})},Object.assign({},t.dataAttrs,t.$attrs),{onKeypress:e[11]||(e[11]=Cr(Lt(function(){return t.highlightedOriginalIndex!==null&&t.addOrRemoveOption(t.$event,t.optionsWithInfo[t.highlightedOriginalIndex])},["prevent","exact"]),["enter"])),onKeydown:[e[12]||(e[12]=Cr(Lt(function(){return t.pointerForward&&t.pointerForward.apply(t,arguments)},["prevent","exact"]),["down"])),e[13]||(e[13]=Cr(Lt(function(){return t.pointerBackward&&t.pointerBackward.apply(t,arguments)},["prevent","exact"]),["up"])),e[14]||(e[14]=Cr(Lt(function(){return t.pointerFirst&&t.pointerFirst.apply(t,arguments)},["prevent","exact"]),["home"])),e[15]||(e[15]=Cr(Lt(function(){return t.pointerLast&&t.pointerLast.apply(t,arguments)},["prevent","exact"]),["end"])),e[16]||(e[16]=function(){return t.typeAhead&&t.typeAhead.apply(t,arguments)})],id:"vs".concat(t.instance.uid,"-combobox"),role:t.searchable?"combobox":null,"aria-expanded":t.isFocusing,"aria-haspopup":"listbox","aria-owns":"vs".concat(t.instance.uid,"-listbox"),"aria-activedescendant":t.highlightedOriginalIndex===null?null:"vs".concat(t.instance.uid,"-option-").concat(t.highlightedOriginalIndex),"aria-busy":t.loading,"aria-disabled":t.disabled}),[Pe("div",IR,[t.multiple&&t.taggable&&t.modelValue.length===0||t.searchable===!1&&t.taggable===!1?(He(),dt("div",bR,[Mt(t.$slots,"label",{selected:t.selected},function(){return[Pe("input",{placeholder:t.innerPlaceholder,autocomplete:t.autocomplete,readonly:"",onClick:e[0]||(e[0]=function(){return t.focus&&t.focus.apply(t,arguments)})},null,8,TR)]})])):Er("v-if",!0),t.multiple&&t.taggable?(He(),dt(Ue,{key:1},[ze(o,{modelValue:t.optionsWithInfo,"collapse-tags":t.collapseTags,tabindex:"-1",onClick:t.focus},{default:el(function(c){var u=c.option;return[Mt(t.$slots,"tag",{option:u.originalOption,remove:function(){return t.addOrRemoveOption(t.$event,u)}},function(){return[Pe("span",null,Ri(u.label),1),Pe("img",{src:"data:image/svg+xml;base64,PHN2ZyBpZD0iZGVsZXRlIiBkYXRhLW5hbWU9ImRlbGV0ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHRpdGxlPmRlbGV0ZTwvdGl0bGU+PHBhdGggZD0iTTI1NiwyNEMzODMuOSwyNCw0ODgsMTI4LjEsNDg4LDI1NlMzODMuOSw0ODgsMjU2LDQ4OCwyNC4wNiwzODMuOSwyNC4wNiwyNTYsMTI4LjEsMjQsMjU2LDI0Wk0wLDI1NkMwLDM5Ny4xNiwxMTQuODQsNTEyLDI1Niw1MTJTNTEyLDM5Ny4xNiw1MTIsMjU2LDM5Ny4xNiwwLDI1NiwwLDAsMTE0Ljg0LDAsMjU2WiIgZmlsbD0iIzViNWI1ZiIvPjxwb2x5Z29uIHBvaW50cz0iMzgyIDE3Mi43MiAzMzkuMjkgMTMwLjAxIDI1NiAyMTMuMjkgMTcyLjcyIDEzMC4wMSAxMzAuMDEgMTcyLjcyIDIxMy4yOSAyNTYgMTMwLjAxIDMzOS4yOCAxNzIuNzIgMzgyIDI1NiAyOTguNzEgMzM5LjI5IDM4MS45OSAzODIgMzM5LjI4IDI5OC43MSAyNTYgMzgyIDE3Mi43MiIgZmlsbD0iIzViNWI1ZiIvPjwvc3ZnPg==",alt:"delete tag",class:"icon delete",onClick:Lt(function(){return t.addOrRemoveOption(t.$event,u)},["prevent","stop"])},null,8,SR)]})]}),_:3},8,["modelValue","collapse-tags","onClick"]),Mt(t.$slots,"toggle",{isFocusing:t.isFocusing,toggle:t.toggle},function(){return[Pe("span",{class:kn(["icon arrow-downward",{active:t.isFocusing}]),onClick:e[1]||(e[1]=function(){return t.toggle&&t.toggle.apply(t,arguments)}),onMousedown:e[2]||(e[2]=Lt(function(){},["prevent","stop"]))},null,34)]})],64)):(He(),dt(Ue,{key:2},[t.searchable?(He(),ml(a,{key:0,ref:"input",modelValue:t.searchingInputValue,"onUpdate:modelValue":e[3]||(e[3]=function(c){return t.searchingInputValue=c}),disabled:t.disabled,autocomplete:t.autocomplete,placeholder:t.isFocusing?t.searchPlaceholder:t.innerPlaceholder,onInput:t.handleInputForInput,onChange:t.handleChangeForInput,onFocus:t.handleFocusForInput,onBlur:t.handleBlurForInput,onEscape:t.blur,autofocus:t.autofocus||t.taggable&&t.searchable,tabindex:t.tabindex,comboboxUid:t.instance.uid},null,8,["modelValue","disabled","autocomplete","placeholder","onInput","onChange","onFocus","onBlur","onEscape","autofocus","tabindex","comboboxUid"])):Er("v-if",!0),t.loading?Mt(t.$slots,"loading",{key:1},function(){return[AR]}):Mt(t.$slots,"toggle",{key:2,isFocusing:t.isFocusing,toggle:t.toggle},function(){return[Pe("span",{class:kn(["icon arrow-downward",{active:t.isFocusing}]),onClick:e[4]||(e[4]=function(){return t.toggle&&t.toggle.apply(t,arguments)}),onMousedown:e[5]||(e[5]=Lt(function(){},["prevent","stop"]))},null,34)]})],64))],512),t.multiple&&t.taggable&&t.searchable?(He(),dt("div",CR,[cw(ze(a,{ref:"input",modelValue:t.searchingInputValue,"onUpdate:modelValue":e[6]||(e[6]=function(c){return t.searchingInputValue=c}),disabled:t.disabled,autocomplete:t.autocomplete,placeholder:t.isFocusing?t.searchPlaceholder:t.innerPlaceholder,onInput:t.handleInputForInput,onChange:t.handleChangeForInput,onFocus:t.handleFocusForInput,onBlur:t.handleBlurForInput,onEscape:t.blur,autofocus:t.autofocus||t.taggable&&t.searchable,tabindex:t.tabindex,comboboxUid:t.instance.uid},null,8,["modelValue","disabled","autocomplete","placeholder","onInput","onChange","onFocus","onBlur","onEscape","autofocus","tabindex","comboboxUid"]),[[fE,t.isFocusing]]),t.loading?Mt(t.$slots,"loading",{key:0},function(){return[RR]}):Er("v-if",!0)])):Er("v-if",!0),ze(l,{ref:"dropdown",modelValue:t.optionsWithInfo,"onUpdate:modelValue":e[7]||(e[7]=function(c){return t.optionsWithInfo=c}),onClickItem:t.addOrRemoveOption,onMouseenter:e[8]||(e[8]=function(c,u){return t.pointerSet(u.originalIndex)}),comboboxUid:t.instance.uid,maxHeight:t.maxHeight,highlightedOriginalIndex:t.highlightedOriginalIndex},{default:el(function(c){var u=c.option;return[Mt(t.$slots,"dropdown-item",{option:u.originalOption},function(){return[Pe("span",null,Ri(u.label),1)]})]}),_:3},8,["modelValue","onClickItem","comboboxUid","maxHeight","highlightedOriginalIndex"])],16,_R)},nh.__file="src/index.vue";var NR="firebase",kR="9.5.0";/**
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
 */mn(NR,kR,"app");export{OR as A,WR as B,$R as C,BR as D,jR as E,Ue as F,YR as G,qA as H,Ma as I,FR as J,XR as K,LR as L,KR as M,MR as N,zR as O,VR as P,xR as Q,Ff as T,nh as Y,JR as _,Pe as a,al as b,dt as c,HR as d,dl as e,Er as f,qR as g,ze as h,ml as i,_w as j,mf as k,QR as l,Mt as m,kn as n,He as o,eN as p,GR as q,Bt as r,Lt as s,Ri as t,UR as u,cw as v,el as w,PR as x,DR as y,ZR as z};
