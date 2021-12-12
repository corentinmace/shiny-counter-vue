function ga(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const hy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fy=ga(hy);function Ru(t){return!!t||t===""}function ma(t){if(j(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Fe(r)?gy(r):ma(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Fe(t))return t;if(Ce(t))return t}}const dy=/;(?![^(]*\))/g,py=/:(.+)/;function gy(t){const e={};return t.split(dy).forEach(n=>{if(n){const r=n.split(py);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ya(t){let e="";if(Fe(t))e=t;else if(j(t))for(let n=0;n<t.length;n++){const r=ya(t[n]);r&&(e+=r+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function my(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Yr(t[r],e[r]);return n}function Yr(t,e){if(t===e)return!0;let n=Ou(t),r=Ou(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=j(t),r=j(e),n||r)return n&&r?my(t,e):!1;if(n=Ce(t),r=Ce(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Yr(t[o],e[o]))return!1}}return String(t)===String(e)}function va(t,e){return t.findIndex(n=>Yr(n,e))}const jC=t=>t==null?"":j(t)||Ce(t)&&(t.toString===Pu||!X(t.toString))?JSON.stringify(t,Nu,2):String(t),Nu=(t,e)=>e&&e.__v_isRef?Nu(t,e.value):Zn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:er(e)?{[`Set(${e.size})`]:[...e.values()]}:Ce(e)&&!j(e)&&!Lu(e)?String(e):e,de={},Xn=[],Tt=()=>{},yy=()=>!1,vy=/^on[^a-z]/,ui=t=>vy.test(t),wa=t=>t.startsWith("onUpdate:"),Ue=Object.assign,ku=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},wy=Object.prototype.hasOwnProperty,re=(t,e)=>wy.call(t,e),j=Array.isArray,Zn=t=>hi(t)==="[object Map]",er=t=>hi(t)==="[object Set]",Ou=t=>t instanceof Date,X=t=>typeof t=="function",Fe=t=>typeof t=="string",Ea=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",Du=t=>Ce(t)&&X(t.then)&&X(t.catch),Pu=Object.prototype.toString,hi=t=>Pu.call(t),Ey=t=>hi(t).slice(8,-1),Lu=t=>hi(t)==="[object Object]",_a=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fi=ga(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),di=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},_y=/-(\w)/g,Rt=di(t=>t.replace(_y,(e,n)=>n?n.toUpperCase():"")),Iy=/\B([A-Z])/g,tr=di(t=>t.replace(Iy,"-$1").toLowerCase()),pi=di(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ia=di(t=>t?`on${pi(t)}`:""),Jr=(t,e)=>!Object.is(t,e),gi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},mi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Xr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Mu;const Ty=()=>Mu||(Mu=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let En;const yi=[];class by{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&En&&(this.parent=En,this.index=(En.scopes||(En.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(yi.push(this),En=this)}off(){this.active&&(yi.pop(),En=yi[yi.length-1])}stop(e){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function Sy(t,e){e=e||En,e&&e.active&&e.effects.push(t)}const Ta=t=>{const e=new Set(t);return e.w=0,e.n=0,e},xu=t=>(t.w&Qt)>0,Uu=t=>(t.n&Qt)>0,Ay=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Qt},Cy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];xu(s)&&!Uu(s)?s.delete(t):e[n++]=s,s.w&=~Qt,s.n&=~Qt}e.length=n}},ba=new WeakMap;let Zr=0,Qt=1;const Sa=30,es=[];let _n;const In=Symbol(""),Aa=Symbol("");class Ca{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],Sy(this,r)}run(){if(!this.active)return this.fn();if(!es.includes(this))try{return es.push(_n=this),Ry(),Qt=1<<++Zr,Zr<=Sa?Ay(this):Fu(this),this.fn()}finally{Zr<=Sa&&Cy(this),Qt=1<<--Zr,Tn(),es.pop();const e=es.length;_n=e>0?es[e-1]:void 0}}stop(){this.active&&(Fu(this),this.onStop&&this.onStop(),this.active=!1)}}function Fu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let nr=!0;const Ra=[];function rr(){Ra.push(nr),nr=!1}function Ry(){Ra.push(nr),nr=!0}function Tn(){const t=Ra.pop();nr=t===void 0?!0:t}function lt(t,e,n){if(!Vu())return;let r=ba.get(t);r||ba.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ta()),$u(s)}function Vu(){return nr&&_n!==void 0}function $u(t,e){let n=!1;Zr<=Sa?Uu(t)||(t.n|=Qt,n=!xu(t)):n=!t.has(_n),n&&(t.add(_n),_n.deps.push(t))}function Vt(t,e,n,r,s,i){const o=ba.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&j(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":j(t)?_a(n)&&a.push(o.get("length")):(a.push(o.get(In)),Zn(t)&&a.push(o.get(Aa)));break;case"delete":j(t)||(a.push(o.get(In)),Zn(t)&&a.push(o.get(Aa)));break;case"set":Zn(t)&&a.push(o.get(In));break}if(a.length===1)a[0]&&Na(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Na(Ta(c))}}function Na(t,e){for(const n of j(t)?t:[...t])(n!==_n||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Ny=ga("__proto__,__v_isRef,__isVue"),Bu=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Ea)),ky=ka(),Oy=ka(!1,!0),Dy=ka(!0),ju=Py();function Py(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=se(this);for(let i=0,o=this.length;i<o;i++)lt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(se)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){rr();const r=se(this)[e].apply(this,n);return Tn(),r}}),t}function ka(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_raw"&&i===(t?e?Qy:Ju:e?Yu:Qu).get(r))return r;const o=j(r);if(!t&&o&&re(ju,s))return Reflect.get(ju,s,i);const a=Reflect.get(r,s,i);return(Ea(s)?Bu.has(s):Ny(s))||(t||lt(r,"get",s),e)?a:rt(a)?!o||!_a(s)?a.value:a:Ce(a)?t?Xu(a):ts(a):a}}const Ly=qu(),My=qu(!0);function qu(t=!1){return function(n,r,s,i){let o=n[r];if(!t&&(s=se(s),o=se(o),!j(n)&&rt(o)&&!rt(s)))return o.value=s,!0;const a=j(n)&&_a(r)?Number(r)<n.length:re(n,r),c=Reflect.set(n,r,s,i);return n===se(i)&&(a?Jr(s,o)&&Vt(n,"set",r,s):Vt(n,"add",r,s)),c}}function xy(t,e){const n=re(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Vt(t,"delete",e,void 0),r}function Uy(t,e){const n=Reflect.has(t,e);return(!Ea(e)||!Bu.has(e))&&lt(t,"has",e),n}function Fy(t){return lt(t,"iterate",j(t)?"length":In),Reflect.ownKeys(t)}const Hu={get:ky,set:Ly,deleteProperty:xy,has:Uy,ownKeys:Fy},Vy={get:Dy,set(t,e){return!0},deleteProperty(t,e){return!0}},$y=Ue({},Hu,{get:Oy,set:My}),Oa=t=>t,vi=t=>Reflect.getPrototypeOf(t);function wi(t,e,n=!1,r=!1){t=t.__v_raw;const s=se(t),i=se(e);e!==i&&!n&&lt(s,"get",e),!n&&lt(s,"get",i);const{has:o}=vi(s),a=r?Oa:n?La:ns;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Ei(t,e=!1){const n=this.__v_raw,r=se(n),s=se(t);return t!==s&&!e&&lt(r,"has",t),!e&&lt(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function _i(t,e=!1){return t=t.__v_raw,!e&&lt(se(t),"iterate",In),Reflect.get(t,"size",t)}function Ku(t){t=se(t);const e=se(this);return vi(e).has.call(e,t)||(e.add(t),Vt(e,"add",t,t)),this}function zu(t,e){e=se(e);const n=se(this),{has:r,get:s}=vi(n);let i=r.call(n,t);i||(t=se(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Jr(e,o)&&Vt(n,"set",t,e):Vt(n,"add",t,e),this}function Wu(t){const e=se(this),{has:n,get:r}=vi(e);let s=n.call(e,t);s||(t=se(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Vt(e,"delete",t,void 0),i}function Gu(){const t=se(this),e=t.size!==0,n=t.clear();return e&&Vt(t,"clear",void 0,void 0),n}function Ii(t,e){return function(r,s){const i=this,o=i.__v_raw,a=se(o),c=e?Oa:t?La:ns;return!t&&lt(a,"iterate",In),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Ti(t,e,n){return function(...r){const s=this.__v_raw,i=se(s),o=Zn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Oa:e?La:ns;return!e&&lt(i,"iterate",c?Aa:In),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Yt(t){return function(...e){return t==="delete"?!1:this}}function By(){const t={get(i){return wi(this,i)},get size(){return _i(this)},has:Ei,add:Ku,set:zu,delete:Wu,clear:Gu,forEach:Ii(!1,!1)},e={get(i){return wi(this,i,!1,!0)},get size(){return _i(this)},has:Ei,add:Ku,set:zu,delete:Wu,clear:Gu,forEach:Ii(!1,!0)},n={get(i){return wi(this,i,!0)},get size(){return _i(this,!0)},has(i){return Ei.call(this,i,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:Ii(!0,!1)},r={get(i){return wi(this,i,!0,!0)},get size(){return _i(this,!0)},has(i){return Ei.call(this,i,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:Ii(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ti(i,!1,!1),n[i]=Ti(i,!0,!1),e[i]=Ti(i,!1,!0),r[i]=Ti(i,!0,!0)}),[t,n,e,r]}const[jy,qy,Hy,Ky]=By();function Da(t,e){const n=e?t?Ky:Hy:t?qy:jy;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(re(n,s)&&s in r?n:r,s,i)}const zy={get:Da(!1,!1)},Wy={get:Da(!1,!0)},Gy={get:Da(!0,!1)},Qu=new WeakMap,Yu=new WeakMap,Ju=new WeakMap,Qy=new WeakMap;function Yy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jy(t){return t.__v_skip||!Object.isExtensible(t)?0:Yy(Ey(t))}function ts(t){return t&&t.__v_isReadonly?t:Pa(t,!1,Hu,zy,Qu)}function Xy(t){return Pa(t,!1,$y,Wy,Yu)}function Xu(t){return Pa(t,!0,Vy,Gy,Ju)}function Pa(t,e,n,r,s){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Jy(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function sr(t){return Zu(t)?sr(t.__v_raw):!!(t&&t.__v_isReactive)}function Zu(t){return!!(t&&t.__v_isReadonly)}function eh(t){return sr(t)||Zu(t)}function se(t){const e=t&&t.__v_raw;return e?se(e):t}function th(t){return mi(t,"__v_skip",!0),t}const ns=t=>Ce(t)?ts(t):t,La=t=>Ce(t)?Xu(t):t;function nh(t){Vu()&&(t=se(t),t.dep||(t.dep=Ta()),$u(t.dep))}function rh(t,e){t=se(t),t.dep&&Na(t.dep)}function rt(t){return Boolean(t&&t.__v_isRef===!0)}function Zy(t){return sh(t,!1)}function ev(t){return sh(t,!0)}function sh(t,e){return rt(t)?t:new tv(t,e)}class tv{constructor(e,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:se(e),this._value=n?e:ns(e)}get value(){return nh(this),this._value}set value(e){e=this._shallow?e:se(e),Jr(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:ns(e),rh(this))}}function rs(t){return rt(t)?t.value:t}const nv={get:(t,e,n)=>rs(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return rt(s)&&!rt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ih(t){return sr(t)?t:new Proxy(t,nv)}class rv{constructor(e,n,r){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new Ca(e,()=>{this._dirty||(this._dirty=!0,rh(this))}),this.__v_isReadonly=r}get value(){const e=se(this);return nh(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Nt(t,e){let n,r;const s=X(t);return s?(n=t,r=Tt):(n=t.get,r=t.set),new rv(n,r,s||!r)}Promise.resolve();function sv(t,e,...n){const r=t.vnode.props||de;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||de;f?s=n.map(g=>g.trim()):h&&(s=n.map(Xr))}let a,c=r[a=Ia(e)]||r[a=Ia(Rt(e))];!c&&i&&(c=r[a=Ia(tr(e))]),c&&_t(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,_t(l,t,6,s)}}function oh(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!X(t)){const c=l=>{const u=oh(l,e,!0);u&&(a=!0,Ue(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(j(i)?i.forEach(c=>o[c]=null):Ue(o,i),r.set(t,o),o)}function Ma(t,e){return!t||!ui(e)?!1:(e=e.slice(2).replace(/Once$/,""),re(t,e[0].toLowerCase()+e.slice(1))||re(t,tr(e))||re(t,e))}let ut=null,ah=null;function bi(t){const e=ut;return ut=t,ah=t&&t.type.__scopeId||null,e}function iv(t,e=ut,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&xh(-1);const i=bi(e),o=t(...s);return bi(i),r._d&&xh(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function xa(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:g,ctx:m,inheritAttrs:S}=t;let v,b;const P=bi(t);try{if(n.shapeFlag&4){const H=s||r;v=Dt(u.call(H,H,h,i,g,f,m)),b=c}else{const H=e;v=Dt(H.length>1?H(i,{attrs:c,slots:a,emit:l}):H(i,null)),b=e.props?c:ov(c)}}catch(H){ss.length=0,Mi(H,t,1),v=st(bt)}let q=v;if(b&&S!==!1){const H=Object.keys(b),{shapeFlag:le}=q;H.length&&le&(1|6)&&(o&&H.some(wa)&&(b=av(b,o)),q=ir(q,b))}return n.dirs&&(q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&(q.transition=n.transition),v=q,bi(P),v}const ov=t=>{let e;for(const n in t)(n==="class"||n==="style"||ui(n))&&((e||(e={}))[n]=t[n]);return e},av=(t,e)=>{const n={};for(const r in t)(!wa(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function cv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ch(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Ma(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ch(r,o,l):!0:!!o;return!1}function ch(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ma(n,i))return!0}return!1}function lv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const uv=t=>t.__isSuspense;function hv(t,e){e&&e.pendingBranch?j(t)?e.effects.push(...t):e.effects.push(t):cw(t)}function Si(t,e){if(Pe){let n=Pe.provides;const r=Pe.parent&&Pe.parent.provides;r===n&&(n=Pe.provides=Object.create(r)),n[t]=e}}function kt(t,e,n=!1){const r=Pe||ut;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&X(e)?e.call(r.proxy):e}}function fv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return gh(()=>{t.isMounted=!0}),mh(()=>{t.isUnmounting=!0}),t}const wt=[Function,Array],dv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:wt,onEnter:wt,onAfterEnter:wt,onEnterCancelled:wt,onBeforeLeave:wt,onLeave:wt,onAfterLeave:wt,onLeaveCancelled:wt,onBeforeAppear:wt,onAppear:wt,onAfterAppear:wt,onAppearCancelled:wt},setup(t,{slots:e}){const n=Jv(),r=fv();let s;return()=>{const i=e.default&&fh(e.default(),!0);if(!i||!i.length)return;const o=se(t),{mode:a}=o,c=i[0];if(r.isLeaving)return Fa(c);const l=hh(c);if(!l)return Fa(c);const u=Ua(l,o,r,n);Va(l,u);const h=n.subTree,f=h&&hh(h);let g=!1;const{getTransitionKey:m}=l.type;if(m){const S=m();s===void 0?s=S:S!==s&&(s=S,g=!0)}if(f&&f.type!==bt&&(!Cn(l,f)||g)){const S=Ua(f,o,r,n);if(Va(f,S),a==="out-in")return r.isLeaving=!0,S.afterLeave=()=>{r.isLeaving=!1,n.update()},Fa(c);a==="in-out"&&l.type!==bt&&(S.delayLeave=(v,b,P)=>{const q=uh(r,f);q[String(f.key)]=f,v._leaveCb=()=>{b(),v._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=P})}return c}}},lh=dv;function uh(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Ua(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:S,onAppear:v,onAfterAppear:b,onAppearCancelled:P}=e,q=String(t.key),H=uh(n,t),le=(Z,be)=>{Z&&_t(Z,r,9,be)},ge={mode:i,persisted:o,beforeEnter(Z){let be=a;if(!n.isMounted)if(s)be=S||a;else return;Z._leaveCb&&Z._leaveCb(!0);const oe=H[q];oe&&Cn(t,oe)&&oe.el._leaveCb&&oe.el._leaveCb(),le(be,[Z])},enter(Z){let be=c,oe=l,Oe=u;if(!n.isMounted)if(s)be=v||c,oe=b||l,Oe=P||u;else return;let De=!1;const U=Z._enterCb=Se=>{De||(De=!0,Se?le(Oe,[Z]):le(oe,[Z]),ge.delayedLeave&&ge.delayedLeave(),Z._enterCb=void 0)};be?(be(Z,U),be.length<=1&&U()):U()},leave(Z,be){const oe=String(t.key);if(Z._enterCb&&Z._enterCb(!0),n.isUnmounting)return be();le(h,[Z]);let Oe=!1;const De=Z._leaveCb=U=>{Oe||(Oe=!0,be(),U?le(m,[Z]):le(g,[Z]),Z._leaveCb=void 0,H[oe]===t&&delete H[oe])};H[oe]=t,f?(f(Z,De),f.length<=1&&De()):De()},clone(Z){return Ua(Z,e,n,r)}};return ge}function Fa(t){if(Ai(t))return t=ir(t),t.children=null,t}function hh(t){return Ai(t)?t.children?t.children[0]:void 0:t}function Va(t,e){t.shapeFlag&6&&t.component?Va(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function fh(t,e=!1){let n=[],r=0;for(let s=0;s<t.length;s++){const i=t[s];i.type===Et?(i.patchFlag&128&&r++,n=n.concat(fh(i.children,e))):(e||i.type!==bt)&&n.push(i)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function dh(t){return X(t)?{setup:t,name:t.name}:t}const $a=t=>!!t.type.__asyncLoader,Ai=t=>t.type.__isKeepAlive;function pv(t,e){ph(t,"a",e)}function gv(t,e){ph(t,"da",e)}function ph(t,e,n=Pe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}t()});if(Ci(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ai(s.parent.vnode)&&mv(r,e,n,s),s=s.parent}}function mv(t,e,n,r){const s=Ci(e,t,r,!0);yh(()=>{ku(r[e],s)},n)}function Ci(t,e,n=Pe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;rr(),or(n);const a=_t(e,n,t,o);return Rn(),Tn(),a});return r?s.unshift(i):s.push(i),i}}const $t=t=>(e,n=Pe)=>(!Li||t==="sp")&&Ci(t,e,n),yv=$t("bm"),gh=$t("m"),vv=$t("bu"),wv=$t("u"),mh=$t("bum"),yh=$t("um"),Ev=$t("sp"),_v=$t("rtg"),Iv=$t("rtc");function Tv(t,e=Pe){Ci("ec",t,e)}let Ba=!0;function bv(t){const e=Eh(t),n=t.proxy,r=t.ctx;Ba=!1,e.beforeCreate&&vh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:m,activated:S,deactivated:v,beforeDestroy:b,beforeUnmount:P,destroyed:q,unmounted:H,render:le,renderTracked:ge,renderTriggered:Z,errorCaptured:be,serverPrefetch:oe,expose:Oe,inheritAttrs:De,components:U,directives:Se,filters:nt}=e;if(l&&Sv(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const me in o){const ue=o[me];X(ue)&&(r[me]=ue.bind(n))}if(s){const me=s.call(n,n);Ce(me)&&(t.data=ts(me))}if(Ba=!0,i)for(const me in i){const ue=i[me],yt=X(ue)?ue.bind(n,n):X(ue.get)?ue.get.bind(n,n):Tt,Yn=!X(ue)&&X(ue.set)?ue.set.bind(n):Tt,Ft=Nt({get:yt,set:Yn});Object.defineProperty(r,me,{enumerable:!0,configurable:!0,get:()=>Ft.value,set:At=>Ft.value=At})}if(a)for(const me in a)wh(a[me],r,n,me);if(c){const me=X(c)?c.call(n):c;Reflect.ownKeys(me).forEach(ue=>{Si(ue,me[ue])})}u&&vh(u,t,"c");function Ae(me,ue){j(ue)?ue.forEach(yt=>me(yt.bind(n))):ue&&me(ue.bind(n))}if(Ae(yv,h),Ae(gh,f),Ae(vv,g),Ae(wv,m),Ae(pv,S),Ae(gv,v),Ae(Tv,be),Ae(Iv,ge),Ae(_v,Z),Ae(mh,P),Ae(yh,H),Ae(Ev,oe),j(Oe))if(Oe.length){const me=t.exposed||(t.exposed={});Oe.forEach(ue=>{Object.defineProperty(me,ue,{get:()=>n[ue],set:yt=>n[ue]=yt})})}else t.exposed||(t.exposed={});le&&t.render===Tt&&(t.render=le),De!=null&&(t.inheritAttrs=De),U&&(t.components=U),Se&&(t.directives=Se)}function Sv(t,e,n=Tt,r=!1){j(t)&&(t=ja(t));for(const s in t){const i=t[s];let o;Ce(i)?"default"in i?o=kt(i.from||s,i.default,!0):o=kt(i.from||s):o=kt(i),rt(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function vh(t,e,n){_t(j(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function wh(t,e,n,r){const s=r.includes(".")?tf(n,r):()=>n[r];if(Fe(t)){const i=e[t];X(i)&&Ui(s,i)}else if(X(t))Ui(s,t.bind(n));else if(Ce(t))if(j(t))t.forEach(i=>wh(i,e,n,r));else{const i=X(t.handler)?t.handler.bind(n):e[t.handler];X(i)&&Ui(s,i,t)}}function Eh(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Ri(c,l,o,!0)),Ri(c,e,o)),i.set(e,c),c}function Ri(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ri(t,i,n,!0),s&&s.forEach(o=>Ri(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Av[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Av={data:_h,props:bn,emits:bn,methods:bn,computed:bn,beforeCreate:Qe,created:Qe,beforeMount:Qe,mounted:Qe,beforeUpdate:Qe,updated:Qe,beforeDestroy:Qe,beforeUnmount:Qe,destroyed:Qe,unmounted:Qe,activated:Qe,deactivated:Qe,errorCaptured:Qe,serverPrefetch:Qe,components:bn,directives:bn,watch:Rv,provide:_h,inject:Cv};function _h(t,e){return e?t?function(){return Ue(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function Cv(t,e){return bn(ja(t),ja(e))}function ja(t){if(j(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Qe(t,e){return t?[...new Set([].concat(t,e))]:e}function bn(t,e){return t?Ue(Ue(Object.create(null),t),e):e}function Rv(t,e){if(!t)return e;if(!e)return t;const n=Ue(Object.create(null),t);for(const r in e)n[r]=Qe(t[r],e[r]);return n}function Nv(t,e,n,r=!1){const s={},i={};mi(i,Oi,1),t.propsDefaults=Object.create(null),Ih(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Xy(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function kv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=se(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];const g=e[f];if(c)if(re(i,f))g!==i[f]&&(i[f]=g,l=!0);else{const m=Rt(f);s[m]=qa(c,a,m,g,t,!1)}else g!==i[f]&&(i[f]=g,l=!0)}}}else{Ih(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!re(e,h)&&((u=tr(h))===h||!re(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=qa(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!re(e,h))&&(delete i[h],l=!0)}l&&Vt(t,"set","$attrs")}function Ih(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(fi(c))continue;const l=e[c];let u;s&&re(s,u=Rt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ma(t.emitsOptions,c)||l!==r[c]&&(r[c]=l,o=!0)}if(i){const c=se(n),l=a||de;for(let u=0;u<i.length;u++){const h=i[u];n[h]=qa(s,c,h,l[h],t,!re(l,h))}}return o}function qa(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=re(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&X(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(or(s),r=l[n]=c.call(null,e),Rn())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===tr(n))&&(r=!0))}return r}function Th(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!X(t)){const u=h=>{c=!0;const[f,g]=Th(h,e,!0);Ue(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return r.set(t,Xn),Xn;if(j(i))for(let u=0;u<i.length;u++){const h=Rt(i[u]);bh(h)&&(o[h]=de)}else if(i)for(const u in i){const h=Rt(u);if(bh(h)){const f=i[u],g=o[h]=j(f)||X(f)?{type:f}:f;if(g){const m=Ch(Boolean,g.type),S=Ch(String,g.type);g[0]=m>-1,g[1]=S<0||m<S,(m>-1||re(g,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function bh(t){return t[0]!=="$"}function Sh(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Ah(t,e){return Sh(t)===Sh(e)}function Ch(t,e){return j(e)?e.findIndex(n=>Ah(n,t)):X(e)&&Ah(e,t)?0:-1}const Rh=t=>t[0]==="_"||t==="$stable",Ha=t=>j(t)?t.map(Dt):[Dt(t)],Ov=(t,e,n)=>{const r=iv((...s)=>Ha(e(...s)),n);return r._c=!1,r},Nh=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Rh(s))continue;const i=t[s];if(X(i))e[s]=Ov(s,i,r);else if(i!=null){const o=Ha(i);e[s]=()=>o}}},kh=(t,e)=>{const n=Ha(e);t.slots.default=()=>n},Dv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=se(e),mi(e,"_",n)):Nh(e,t.slots={})}else t.slots={},e&&kh(t,e);mi(t.slots,Oi,1)},Pv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=de;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ue(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Nh(e,s)),o=e}else e&&(kh(t,e),o={default:1});if(i)for(const a in s)!Rh(a)&&!(a in o)&&delete s[a]};function qC(t,e){const n=ut;if(n===null)return t;const r=n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=de]=e[i];X(o)&&(o={mounted:o,updated:o}),o.deep&&Nn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function Sn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(rr(),_t(c,n,8,[t.el,a,t,e]),Tn())}}function Oh(){return{app:null,config:{isNativeTag:yy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lv=0;function Mv(t,e){return function(r,s=null){s!=null&&!Ce(s)&&(s=null);const i=Oh(),o=new Set;let a=!1;const c=i.app={_uid:Lv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:uw,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&X(l.install)?(o.add(l),l.install(c,...u)):X(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=st(r,s);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Ya(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}const Ye=hv;function xv(t){return Uv(t)}function Uv(t,e){const n=Ty();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=Tt,cloneNode:m,insertStaticContent:S}=t,v=(d,p,y,I=null,_=null,R=null,k=!1,A=null,C=!!p.dynamicChildren)=>{if(d===p)return;d&&!Cn(d,p)&&(I=F(d),vt(d,_,R,!0),d=null),p.patchFlag===-2&&(C=!1,p.dynamicChildren=null);const{type:T,ref:V,shapeFlag:M}=p;switch(T){case za:b(d,p,y,I);break;case bt:P(d,p,y,I);break;case Wa:d==null&&q(p,y,I,k);break;case Et:Se(d,p,y,I,_,R,k,A,C);break;default:M&1?ge(d,p,y,I,_,R,k,A,C):M&6?nt(d,p,y,I,_,R,k,A,C):(M&64||M&128)&&T.process(d,p,y,I,_,R,k,A,C,ye)}V!=null&&_&&Ka(V,d&&d.ref,R,p||d,!p)},b=(d,p,y,I)=>{if(d==null)r(p.el=a(p.children),y,I);else{const _=p.el=d.el;p.children!==d.children&&l(_,p.children)}},P=(d,p,y,I)=>{d==null?r(p.el=c(p.children||""),y,I):p.el=d.el},q=(d,p,y,I)=>{[d.el,d.anchor]=S(d.children,p,y,I)},H=({el:d,anchor:p},y,I)=>{let _;for(;d&&d!==p;)_=f(d),r(d,y,I),d=_;r(p,y,I)},le=({el:d,anchor:p})=>{let y;for(;d&&d!==p;)y=f(d),s(d),d=y;s(p)},ge=(d,p,y,I,_,R,k,A,C)=>{k=k||p.type==="svg",d==null?Z(p,y,I,_,R,k,A,C):Oe(d,p,_,R,k,A,C)},Z=(d,p,y,I,_,R,k,A)=>{let C,T;const{type:V,props:M,shapeFlag:$,transition:G,patchFlag:ne,dirs:_e}=d;if(d.el&&m!==void 0&&ne===-1)C=d.el=m(d.el);else{if(C=d.el=o(d.type,R,M&&M.is,M),$&8?u(C,d.children):$&16&&oe(d.children,C,null,I,_,R&&V!=="foreignObject",k,A),_e&&Sn(d,null,I,"created"),M){for(const we in M)we!=="value"&&!fi(we)&&i(C,we,null,M[we],R,d.children,I,_,N);"value"in M&&i(C,"value",null,M.value),(T=M.onVnodeBeforeMount)&&Ot(T,I,d)}be(C,d,d.scopeId,k,I)}_e&&Sn(d,null,I,"beforeMount");const fe=(!_||_&&!_.pendingBranch)&&G&&!G.persisted;fe&&G.beforeEnter(C),r(C,p,y),((T=M&&M.onVnodeMounted)||fe||_e)&&Ye(()=>{T&&Ot(T,I,d),fe&&G.enter(C),_e&&Sn(d,null,I,"mounted")},_)},be=(d,p,y,I,_)=>{if(y&&g(d,y),I)for(let R=0;R<I.length;R++)g(d,I[R]);if(_){let R=_.subTree;if(p===R){const k=_.vnode;be(d,k,k.scopeId,k.slotScopeIds,_.parent)}}},oe=(d,p,y,I,_,R,k,A,C=0)=>{for(let T=C;T<d.length;T++){const V=d[T]=A?Jt(d[T]):Dt(d[T]);v(null,V,p,y,I,_,R,k,A)}},Oe=(d,p,y,I,_,R,k)=>{const A=p.el=d.el;let{patchFlag:C,dynamicChildren:T,dirs:V}=p;C|=d.patchFlag&16;const M=d.props||de,$=p.props||de;let G;(G=$.onVnodeBeforeUpdate)&&Ot(G,y,p,d),V&&Sn(p,d,y,"beforeUpdate");const ne=_&&p.type!=="foreignObject";if(T?De(d.dynamicChildren,T,A,y,I,ne,R):k||yt(d,p,A,null,y,I,ne,R,!1),C>0){if(C&16)U(A,p,M,$,y,I,_);else if(C&2&&M.class!==$.class&&i(A,"class",null,$.class,_),C&4&&i(A,"style",M.style,$.style,_),C&8){const _e=p.dynamicProps;for(let fe=0;fe<_e.length;fe++){const we=_e[fe],It=M[we],Jn=$[we];(Jn!==It||we==="value")&&i(A,we,It,Jn,_,d.children,y,I,N)}}C&1&&d.children!==p.children&&u(A,p.children)}else!k&&T==null&&U(A,p,M,$,y,I,_);((G=$.onVnodeUpdated)||V)&&Ye(()=>{G&&Ot(G,y,p,d),V&&Sn(p,d,y,"updated")},I)},De=(d,p,y,I,_,R,k)=>{for(let A=0;A<p.length;A++){const C=d[A],T=p[A],V=C.el&&(C.type===Et||!Cn(C,T)||C.shapeFlag&(6|64))?h(C.el):y;v(C,T,V,null,I,_,R,k,!0)}},U=(d,p,y,I,_,R,k)=>{if(y!==I){for(const A in I){if(fi(A))continue;const C=I[A],T=y[A];C!==T&&A!=="value"&&i(d,A,T,C,k,p.children,_,R,N)}if(y!==de)for(const A in y)!fi(A)&&!(A in I)&&i(d,A,y[A],null,k,p.children,_,R,N);"value"in I&&i(d,"value",y.value,I.value)}},Se=(d,p,y,I,_,R,k,A,C)=>{const T=p.el=d?d.el:a(""),V=p.anchor=d?d.anchor:a("");let{patchFlag:M,dynamicChildren:$,slotScopeIds:G}=p;G&&(A=A?A.concat(G):G),d==null?(r(T,y,I),r(V,y,I),oe(p.children,y,V,_,R,k,A,C)):M>0&&M&64&&$&&d.dynamicChildren?(De(d.dynamicChildren,$,y,_,R,k,A),(p.key!=null||_&&p===_.subTree)&&Dh(d,p,!0)):yt(d,p,y,V,_,R,k,A,C)},nt=(d,p,y,I,_,R,k,A,C)=>{p.slotScopeIds=A,d==null?p.shapeFlag&512?_.ctx.activate(p,y,I,k,C):Ut(p,y,I,_,R,k,C):Ae(d,p,C)},Ut=(d,p,y,I,_,R,k)=>{const A=d.component=Yv(d,I,_);if(Ai(d)&&(A.ctx.renderer=ye),Xv(A),A.asyncDep){if(_&&_.registerDep(A,me),!d.el){const C=A.subTree=st(bt);P(null,C,p,y)}return}me(A,d,p,y,_,R,k)},Ae=(d,p,y)=>{const I=p.component=d.component;if(cv(d,p,y))if(I.asyncDep&&!I.asyncResolved){ue(I,p,y);return}else I.next=p,ow(I.update),I.update();else p.component=d.component,p.el=d.el,I.vnode=p},me=(d,p,y,I,_,R,k)=>{const A=()=>{if(d.isMounted){let{next:V,bu:M,u:$,parent:G,vnode:ne}=d,_e=V,fe;C.allowRecurse=!1,V?(V.el=ne.el,ue(d,V,k)):V=ne,M&&gi(M),(fe=V.props&&V.props.onVnodeBeforeUpdate)&&Ot(fe,G,V,ne),C.allowRecurse=!0;const we=xa(d),It=d.subTree;d.subTree=we,v(It,we,h(It.el),F(It),d,_,R),V.el=we.el,_e===null&&lv(d,we.el),$&&Ye($,_),(fe=V.props&&V.props.onVnodeUpdated)&&Ye(()=>Ot(fe,G,V,ne),_)}else{let V;const{el:M,props:$}=p,{bm:G,m:ne,parent:_e}=d,fe=$a(p);if(C.allowRecurse=!1,G&&gi(G),!fe&&(V=$&&$.onVnodeBeforeMount)&&Ot(V,_e,p),C.allowRecurse=!0,M&&J){const we=()=>{d.subTree=xa(d),J(M,d.subTree,d,_,null)};fe?p.type.__asyncLoader().then(()=>!d.isUnmounted&&we()):we()}else{const we=d.subTree=xa(d);v(null,we,y,I,d,_,R),p.el=we.el}if(ne&&Ye(ne,_),!fe&&(V=$&&$.onVnodeMounted)){const we=p;Ye(()=>Ot(V,_e,we),_)}p.shapeFlag&256&&d.a&&Ye(d.a,_),d.isMounted=!0,p=y=I=null}},C=new Ca(A,()=>Gh(d.update),d.scope),T=d.update=C.run.bind(C);T.id=d.uid,C.allowRecurse=T.allowRecurse=!0,T()},ue=(d,p,y)=>{p.component=d;const I=d.vnode.props;d.vnode=p,d.next=null,kv(d,p.props,I,y),Pv(d,p.children,y),rr(),ec(void 0,d.update),Tn()},yt=(d,p,y,I,_,R,k,A,C=!1)=>{const T=d&&d.children,V=d?d.shapeFlag:0,M=p.children,{patchFlag:$,shapeFlag:G}=p;if($>0){if($&128){Ft(T,M,y,I,_,R,k,A,C);return}else if($&256){Yn(T,M,y,I,_,R,k,A,C);return}}G&8?(V&16&&N(T,_,R),M!==T&&u(y,M)):V&16?G&16?Ft(T,M,y,I,_,R,k,A,C):N(T,_,R,!0):(V&8&&u(y,""),G&16&&oe(M,y,I,_,R,k,A,C))},Yn=(d,p,y,I,_,R,k,A,C)=>{d=d||Xn,p=p||Xn;const T=d.length,V=p.length,M=Math.min(T,V);let $;for($=0;$<M;$++){const G=p[$]=C?Jt(p[$]):Dt(p[$]);v(d[$],G,y,null,_,R,k,A,C)}T>V?N(d,_,R,!0,!1,M):oe(p,y,I,_,R,k,A,C,M)},Ft=(d,p,y,I,_,R,k,A,C)=>{let T=0;const V=p.length;let M=d.length-1,$=V-1;for(;T<=M&&T<=$;){const G=d[T],ne=p[T]=C?Jt(p[T]):Dt(p[T]);if(Cn(G,ne))v(G,ne,y,null,_,R,k,A,C);else break;T++}for(;T<=M&&T<=$;){const G=d[M],ne=p[$]=C?Jt(p[$]):Dt(p[$]);if(Cn(G,ne))v(G,ne,y,null,_,R,k,A,C);else break;M--,$--}if(T>M){if(T<=$){const G=$+1,ne=G<V?p[G].el:I;for(;T<=$;)v(null,p[T]=C?Jt(p[T]):Dt(p[T]),y,ne,_,R,k,A,C),T++}}else if(T>$)for(;T<=M;)vt(d[T],_,R,!0),T++;else{const G=T,ne=T,_e=new Map;for(T=ne;T<=$;T++){const ct=p[T]=C?Jt(p[T]):Dt(p[T]);ct.key!=null&&_e.set(ct.key,T)}let fe,we=0;const It=$-ne+1;let Jn=!1,Su=0;const Qr=new Array(It);for(T=0;T<It;T++)Qr[T]=0;for(T=G;T<=M;T++){const ct=d[T];if(we>=It){vt(ct,_,R,!0);continue}let Ct;if(ct.key!=null)Ct=_e.get(ct.key);else for(fe=ne;fe<=$;fe++)if(Qr[fe-ne]===0&&Cn(ct,p[fe])){Ct=fe;break}Ct===void 0?vt(ct,_,R,!0):(Qr[Ct-ne]=T+1,Ct>=Su?Su=Ct:Jn=!0,v(ct,p[Ct],y,null,_,R,k,A,C),we++)}const Au=Jn?Fv(Qr):Xn;for(fe=Au.length-1,T=It-1;T>=0;T--){const ct=ne+T,Ct=p[ct],Cu=ct+1<V?p[ct+1].el:I;Qr[T]===0?v(null,Ct,y,Cu,_,R,k,A,C):Jn&&(fe<0||T!==Au[fe]?At(Ct,y,Cu,2):fe--)}}},At=(d,p,y,I,_=null)=>{const{el:R,type:k,transition:A,children:C,shapeFlag:T}=d;if(T&6){At(d.component.subTree,p,y,I);return}if(T&128){d.suspense.move(p,y,I);return}if(T&64){k.move(d,p,y,ye);return}if(k===Et){r(R,p,y);for(let M=0;M<C.length;M++)At(C[M],p,y,I);r(d.anchor,p,y);return}if(k===Wa){H(d,p,y);return}if(I!==2&&T&1&&A)if(I===0)A.beforeEnter(R),r(R,p,y),Ye(()=>A.enter(R),_);else{const{leave:M,delayLeave:$,afterLeave:G}=A,ne=()=>r(R,p,y),_e=()=>{M(R,()=>{ne(),G&&G()})};$?$(R,ne,_e):_e()}else r(R,p,y)},vt=(d,p,y,I=!1,_=!1)=>{const{type:R,props:k,ref:A,children:C,dynamicChildren:T,shapeFlag:V,patchFlag:M,dirs:$}=d;if(A!=null&&Ka(A,null,y,d,!0),V&256){p.ctx.deactivate(d);return}const G=V&1&&$,ne=!$a(d);let _e;if(ne&&(_e=k&&k.onVnodeBeforeUnmount)&&Ot(_e,p,d),V&6)x(d.component,y,I);else{if(V&128){d.suspense.unmount(y,I);return}G&&Sn(d,null,p,"beforeUnmount"),V&64?d.type.remove(d,p,y,_,ye,I):T&&(R!==Et||M>0&&M&64)?N(T,p,y,!1,!0):(R===Et&&M&(128|256)||!_&&V&16)&&N(C,p,y),I&&pa(d)}(ne&&(_e=k&&k.onVnodeUnmounted)||G)&&Ye(()=>{_e&&Ot(_e,p,d),G&&Sn(d,null,p,"unmounted")},y)},pa=d=>{const{type:p,el:y,anchor:I,transition:_}=d;if(p===Et){E(y,I);return}if(p===Wa){le(d);return}const R=()=>{s(y),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(d.shapeFlag&1&&_&&!_.persisted){const{leave:k,delayLeave:A}=_,C=()=>k(y,R);A?A(d.el,R,C):C()}else R()},E=(d,p)=>{let y;for(;d!==p;)y=f(d),s(d),d=y;s(p)},x=(d,p,y)=>{const{bum:I,scope:_,update:R,subTree:k,um:A}=d;I&&gi(I),_.stop(),R&&(R.active=!1,vt(k,d,p,y)),A&&Ye(A,p),Ye(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},N=(d,p,y,I=!1,_=!1,R=0)=>{for(let k=R;k<d.length;k++)vt(d[k],p,y,I,_)},F=d=>d.shapeFlag&6?F(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),he=(d,p,y)=>{d==null?p._vnode&&vt(p._vnode,null,null,!0):v(p._vnode||null,d,p,null,null,null,y),Jh(),p._vnode=d},ye={p:v,um:vt,m:At,r:pa,mt:Ut,mc:oe,pc:yt,pbc:De,n:F,o:t};let ee,J;return e&&([ee,J]=e(ye)),{render:he,hydrate:ee,createApp:Mv(he,ee)}}function Ka(t,e,n,r,s=!1){if(j(t)){t.forEach((f,g)=>Ka(f,e&&(j(e)?e[g]:e),n,r,s));return}if($a(r)&&!s)return;const i=r.shapeFlag&4?Ya(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===de?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Fe(l)?(u[l]=null,re(h,l)&&(h[l]=null)):rt(l)&&(l.value=null)),Fe(c)){const f=()=>{u[c]=o,re(h,c)&&(h[c]=o)};o?(f.id=-1,Ye(f,n)):f()}else if(rt(c)){const f=()=>{c.value=o};o?(f.id=-1,Ye(f,n)):f()}else X(c)&&Xt(c,a,12,[o,u])}function Ot(t,e,n,r=null){_t(t,e,7,[n,r])}function Dh(t,e,n=!1){const r=t.children,s=e.children;if(j(r)&&j(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Jt(s[i]),a.el=o.el),n||Dh(o,a))}}function Fv(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Vv=t=>t.__isTeleport,Ph="components";function HC(t,e){return Bv(Ph,t,!0,e)||t}const $v=Symbol();function Bv(t,e,n=!0,r=!1){const s=ut||Pe;if(s){const i=s.type;if(t===Ph){const a=nw(i);if(a&&(a===e||a===Rt(e)||a===pi(Rt(e))))return i}const o=Lh(s[t]||i[t],e)||Lh(s.appContext[t],e);return!o&&r?i:o}}function Lh(t,e){return t&&(t[e]||t[Rt(e)]||t[pi(Rt(e))])}const Et=Symbol(void 0),za=Symbol(void 0),bt=Symbol(void 0),Wa=Symbol(void 0),ss=[];let An=null;function Mh(t=!1){ss.push(An=t?null:[])}function jv(){ss.pop(),An=ss[ss.length-1]||null}let Ni=1;function xh(t){Ni+=t}function Uh(t){return t.dynamicChildren=Ni>0?An||Xn:null,jv(),Ni>0&&An&&An.push(t),t}function KC(t,e,n,r,s,i){return Uh($h(t,e,n,r,s,i,!0))}function Fh(t,e,n,r,s){return Uh(st(t,e,n,r,s,!0))}function ki(t){return t?t.__v_isVNode===!0:!1}function Cn(t,e){return t.type===e.type&&t.key===e.key}const Oi="__vInternal",Vh=({key:t})=>t!=null?t:null,Di=({ref:t})=>t!=null?Fe(t)||rt(t)||X(t)?{i:ut,r:t}:t:null;function $h(t,e=null,n=null,r=0,s=null,i=t===Et?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Vh(e),ref:e&&Di(e),scopeId:ah,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Ga(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Fe(n)?8:16),Ni>0&&!o&&An&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&An.push(c),c}const st=qv;function qv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===$v)&&(t=bt),ki(t)){const a=ir(t,e,!0);return n&&Ga(a,n),a}if(rw(t)&&(t=t.__vccOpts),e){e=Hv(e);let{class:a,style:c}=e;a&&!Fe(a)&&(e.class=ya(a)),Ce(c)&&(eh(c)&&!j(c)&&(c=Ue({},c)),e.style=ma(c))}const o=Fe(t)?1:uv(t)?128:Vv(t)?64:Ce(t)?4:X(t)?2:0;return $h(t,e,n,r,s,o,i,!0)}function Hv(t){return t?eh(t)||Oi in t?Ue({},t):t:null}function ir(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?zv(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Vh(a),ref:e&&e.ref?n&&s?j(s)?s.concat(Di(e)):[s,Di(e)]:Di(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Et?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ir(t.ssContent),ssFallback:t.ssFallback&&ir(t.ssFallback),el:t.el,anchor:t.anchor}}function Kv(t=" ",e=0){return st(za,null,t,e)}function zC(t="",e=!1){return e?(Mh(),Fh(bt,null,t)):st(bt,null,t)}function Dt(t){return t==null||typeof t=="boolean"?st(bt):j(t)?st(Et,null,t.slice()):typeof t=="object"?Jt(t):st(za,null,String(t))}function Jt(t){return t.el===null||t.memo?t:ir(t)}function Ga(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(j(e))n=16;else if(typeof e=="object")if(r&(1|64)){const s=e.default;s&&(s._c&&(s._d=!1),Ga(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Oi in e)?e._ctx=ut:s===3&&ut&&(ut.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:ut},n=32):(e=String(e),r&64?(n=16,e=[Kv(e)]):n=8);t.children=e,t.shapeFlag|=n}function zv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ya([e.class,r.class]));else if(s==="style")e.style=ma([e.style,r.style]);else if(ui(s)){const i=e[s],o=r[s];i!==o&&!(j(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function WC(t,e,n,r){let s;const i=n&&n[r];if(j(t)||Fe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ce(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function GC(t,e,n={},r,s){if(ut.isCE)return st("slot",e==="default"?null:{name:e},r&&r());let i=t[e];i&&i._c&&(i._d=!1),Mh();const o=i&&Bh(i(n)),a=Fh(Et,{key:n.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Bh(t){return t.some(e=>ki(e)?!(e.type===bt||e.type===Et&&!Bh(e.children)):!0)?t:null}const Qa=t=>t?jh(t)?Ya(t)||t.proxy:Qa(t.parent):null,Pi=Ue(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Qa(t.parent),$root:t=>Qa(t.root),$emit:t=>t.emit,$options:t=>Eh(t),$forceUpdate:t=>()=>Gh(t.update),$nextTick:t=>Wh.bind(t.proxy),$watch:t=>lw.bind(t)}),Wv={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 0:return r[e];case 1:return s[e];case 3:return n[e];case 2:return i[e]}else{if(r!==de&&re(r,e))return o[e]=0,r[e];if(s!==de&&re(s,e))return o[e]=1,s[e];if((l=t.propsOptions[0])&&re(l,e))return o[e]=2,i[e];if(n!==de&&re(n,e))return o[e]=3,n[e];Ba&&(o[e]=4)}}const u=Pi[e];let h,f;if(u)return e==="$attrs"&&lt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==de&&re(n,e))return o[e]=3,n[e];if(f=c.config.globalProperties,re(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;if(s!==de&&re(s,e))s[e]=n;else if(r!==de&&re(r,e))r[e]=n;else if(re(t.props,e))return!1;return e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return n[o]!==void 0||t!==de&&re(t,o)||e!==de&&re(e,o)||(a=i[0])&&re(a,o)||re(r,o)||re(Pi,o)||re(s.config.globalProperties,o)}},Gv=Oh();let Qv=0;function Yv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Gv,i={uid:Qv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,update:null,scope:new by(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Th(r,s),emitsOptions:oh(r,s),emit:null,emitted:null,propsDefaults:de,inheritAttrs:r.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=sv.bind(null,i),t.ce&&t.ce(i),i}let Pe=null;const Jv=()=>Pe||ut,or=t=>{Pe=t,t.scope.on()},Rn=()=>{Pe&&Pe.scope.off(),Pe=null};function jh(t){return t.vnode.shapeFlag&4}let Li=!1;function Xv(t,e=!1){Li=e;const{props:n,children:r}=t.vnode,s=jh(t);Nv(t,n,s,e),Dv(t,r);const i=s?Zv(t,e):void 0;return Li=!1,i}function Zv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=th(new Proxy(t.ctx,Wv));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?tw(t):null;or(t),rr();const i=Xt(r,t,0,[t.props,s]);if(Tn(),Rn(),Du(i)){if(i.then(Rn,Rn),e)return i.then(o=>{qh(t,o,e)}).catch(o=>{Mi(o,t,0)});t.asyncDep=i}else qh(t,i,e)}else Kh(t,e)}function qh(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=ih(e)),Kh(t,n)}let Hh;function Kh(t,e,n){const r=t.type;if(!t.render){if(!e&&Hh&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Ue(Ue({isCustomElement:i,delimiters:a},o),c);r.render=Hh(s,l)}}t.render=r.render||Tt}or(t),rr(),bv(t),Tn(),Rn()}function ew(t){return new Proxy(t.attrs,{get(e,n){return lt(t,"get","$attrs"),e[n]}})}function tw(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=ew(t))},slots:t.slots,emit:t.emit,expose:e}}function Ya(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ih(th(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Pi)return Pi[n](t)}}))}function nw(t){return X(t)&&t.displayName||t.name}function rw(t){return X(t)&&"__vccOpts"in t}function Xt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Mi(i,e,n)}return s}function _t(t,e,n,r){if(X(t)){const i=Xt(t,e,n,r);return i&&Du(i)&&i.catch(o=>{Mi(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(_t(t[i],e,n,r));return s}function Mi(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Xt(c,null,10,[t,o,a]);return}}sw(t,n,s,r)}function sw(t,e,n,r=!0){console.error(t)}let xi=!1,Ja=!1;const ht=[];let Bt=0;const is=[];let os=null,ar=0;const as=[];let Zt=null,cr=0;const zh=Promise.resolve();let Xa=null,Za=null;function Wh(t){const e=Xa||zh;return t?e.then(this?t.bind(this):t):e}function iw(t){let e=Bt+1,n=ht.length;for(;e<n;){const r=e+n>>>1;cs(ht[r])<t?e=r+1:n=r}return e}function Gh(t){(!ht.length||!ht.includes(t,xi&&t.allowRecurse?Bt+1:Bt))&&t!==Za&&(t.id==null?ht.push(t):ht.splice(iw(t.id),0,t),Qh())}function Qh(){!xi&&!Ja&&(Ja=!0,Xa=zh.then(Xh))}function ow(t){const e=ht.indexOf(t);e>Bt&&ht.splice(e,1)}function Yh(t,e,n,r){j(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Qh()}function aw(t){Yh(t,os,is,ar)}function cw(t){Yh(t,Zt,as,cr)}function ec(t,e=null){if(is.length){for(Za=e,os=[...new Set(is)],is.length=0,ar=0;ar<os.length;ar++)os[ar]();os=null,ar=0,Za=null,ec(t,e)}}function Jh(t){if(as.length){const e=[...new Set(as)];if(as.length=0,Zt){Zt.push(...e);return}for(Zt=e,Zt.sort((n,r)=>cs(n)-cs(r)),cr=0;cr<Zt.length;cr++)Zt[cr]();Zt=null,cr=0}}const cs=t=>t.id==null?1/0:t.id;function Xh(t){Ja=!1,xi=!0,ec(t),ht.sort((n,r)=>cs(n)-cs(r));const e=Tt;try{for(Bt=0;Bt<ht.length;Bt++){const n=ht[Bt];n&&n.active!==!1&&Xt(n,null,14)}}finally{Bt=0,ht.length=0,Jh(),xi=!1,Xa=null,(ht.length||is.length||as.length)&&Xh(t)}}const Zh={};function Ui(t,e,n){return ef(t,e,n)}function ef(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=de){const a=Pe;let c,l=!1,u=!1;if(rt(t)?(c=()=>t.value,l=!!t._shallow):sr(t)?(c=()=>t,r=!0):j(t)?(u=!0,l=t.some(sr),c=()=>t.map(b=>{if(rt(b))return b.value;if(sr(b))return Nn(b);if(X(b))return Xt(b,a,2)})):X(t)?e?c=()=>Xt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),_t(t,a,3,[f])}:c=Tt,e&&r){const b=c;c=()=>Nn(b())}let h,f=b=>{h=v.onStop=()=>{Xt(b,a,4)}};if(Li)return f=Tt,e?n&&_t(e,a,3,[c(),u?[]:void 0,f]):c(),Tt;let g=u?[]:Zh;const m=()=>{if(!!v.active)if(e){const b=v.run();(r||l||(u?b.some((P,q)=>Jr(P,g[q])):Jr(b,g)))&&(h&&h(),_t(e,a,3,[b,g===Zh?void 0:g,f]),g=b)}else v.run()};m.allowRecurse=!!e;let S;s==="sync"?S=m:s==="post"?S=()=>Ye(m,a&&a.suspense):S=()=>{!a||a.isMounted?aw(m):m()};const v=new Ca(c,S);return e?n?m():g=v.run():s==="post"?Ye(v.run.bind(v),a&&a.suspense):v.run(),()=>{v.stop(),a&&a.scope&&ku(a.scope.effects,v)}}function lw(t,e,n){const r=this.proxy,s=Fe(t)?t.includes(".")?tf(r,t):()=>r[t]:t.bind(r,r);let i;X(e)?i=e:(i=e.handler,n=e);const o=Pe;or(this);const a=ef(s,i.bind(r),n);return o?or(o):Rn(),a}function tf(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Nn(t,e){if(!Ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),rt(t))Nn(t.value,e);else if(j(t))for(let n=0;n<t.length;n++)Nn(t[n],e);else if(er(t)||Zn(t))t.forEach(n=>{Nn(n,e)});else if(Lu(t))for(const n in t)Nn(t[n],e);return t}function tc(t,e,n){const r=arguments.length;return r===2?Ce(e)&&!j(e)?ki(e)?st(t,null,[e]):st(t,e):st(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ki(n)&&(n=[n]),st(t,e,n))}const uw="3.2.22",hw="http://www.w3.org/2000/svg",lr=typeof document!="undefined"?document:null,nf=new Map,fw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?lr.createElementNS(hw,t):lr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>lr.createTextNode(t),createComment:t=>lr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>lr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r){const s=n?n.previousSibling:e.lastChild;let i=nf.get(t);if(!i){const o=lr.createElement("template");if(o.innerHTML=r?`<svg>${t}</svg>`:t,i=o.content,r){const a=i.firstChild;for(;a.firstChild;)i.appendChild(a.firstChild);i.removeChild(a)}nf.set(t,i)}return e.insertBefore(i.cloneNode(!0),n),[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function dw(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function pw(t,e,n){const r=t.style,s=Fe(n);if(n&&!s){for(const i in n)nc(r,i,n[i]);if(e&&!Fe(e))for(const i in e)n[i]==null&&nc(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const rf=/\s*!important$/;function nc(t,e,n){if(j(n))n.forEach(r=>nc(t,e,r));else if(e.startsWith("--"))t.setProperty(e,n);else{const r=gw(t,e);rf.test(n)?t.setProperty(tr(r),n.replace(rf,""),"important"):t[r]=n}}const sf=["Webkit","Moz","ms"],rc={};function gw(t,e){const n=rc[e];if(n)return n;let r=Rt(e);if(r!=="filter"&&r in t)return rc[e]=r;r=pi(r);for(let s=0;s<sf.length;s++){const i=sf[s]+r;if(i in t)return rc[e]=i}return e}const of="http://www.w3.org/1999/xlink";function mw(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(of,e.slice(6,e.length)):t.setAttributeNS(of,e,n);else{const i=fy(e);n==null||i&&!Ru(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function yw(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"){t._value=n;const a=n==null?"":n;t.value!==a&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=Ru(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let Fi=Date.now,af=!1;if(typeof window!="undefined"){Fi()>document.createEvent("Event").timeStamp&&(Fi=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);af=!!(t&&Number(t[1])<=53)}let sc=0;const vw=Promise.resolve(),ww=()=>{sc=0},Ew=()=>sc||(vw.then(ww),sc=Fi());function en(t,e,n,r){t.addEventListener(e,n,r)}function _w(t,e,n,r){t.removeEventListener(e,n,r)}function Iw(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Tw(e);if(r){const l=i[e]=bw(r,s);en(t,a,l,c)}else o&&(_w(t,a,o,c),i[e]=void 0)}}const cf=/(?:Once|Passive|Capture)$/;function Tw(t){let e;if(cf.test(t)){e={};let n;for(;n=t.match(cf);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[tr(t.slice(2)),e]}function bw(t,e){const n=r=>{const s=r.timeStamp||Fi();(af||s>=n.attached-1)&&_t(Sw(r,n.value),e,5,[r])};return n.value=t,n.attached=Ew(),n}function Sw(t,e){if(j(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r(s))}else return e}const lf=/^on[a-z]/,Aw=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?dw(t,r,s):e==="style"?pw(t,n,r):ui(e)?wa(e)||Iw(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Cw(t,e,r,s))?yw(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),mw(t,e,r,s))};function Cw(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&lf.test(e)&&X(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||lf.test(e)&&Fe(n)?!1:e in t}const tn="transition",ls="animation",uf=(t,{slots:e})=>tc(lh,Rw(t),e);uf.displayName="Transition";const hf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};uf.props=Ue({},lh.props,hf);const kn=(t,e=[])=>{j(t)?t.forEach(n=>n(...e)):t&&t(...e)},ff=t=>t?j(t)?t.some(e=>e.length>1):t.length>1:!1;function Rw(t){const e={};for(const U in t)U in hf||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,m=Nw(s),S=m&&m[0],v=m&&m[1],{onBeforeEnter:b,onEnter:P,onEnterCancelled:q,onLeave:H,onLeaveCancelled:le,onBeforeAppear:ge=b,onAppear:Z=P,onAppearCancelled:be=q}=e,oe=(U,Se,nt)=>{ur(U,Se?u:a),ur(U,Se?l:o),nt&&nt()},Oe=(U,Se)=>{ur(U,g),ur(U,f),Se&&Se()},De=U=>(Se,nt)=>{const Ut=U?Z:P,Ae=()=>oe(Se,U,nt);kn(Ut,[Se,Ae]),df(()=>{ur(Se,U?c:i),nn(Se,U?u:a),ff(Ut)||pf(Se,r,S,Ae)})};return Ue(e,{onBeforeEnter(U){kn(b,[U]),nn(U,i),nn(U,o)},onBeforeAppear(U){kn(ge,[U]),nn(U,c),nn(U,l)},onEnter:De(!1),onAppear:De(!0),onLeave(U,Se){const nt=()=>Oe(U,Se);nn(U,h),Dw(),nn(U,f),df(()=>{ur(U,h),nn(U,g),ff(H)||pf(U,r,v,nt)}),kn(H,[U,nt])},onEnterCancelled(U){oe(U,!1),kn(q,[U])},onAppearCancelled(U){oe(U,!0),kn(be,[U])},onLeaveCancelled(U){Oe(U),kn(le,[U])}})}function Nw(t){if(t==null)return null;if(Ce(t))return[ic(t.enter),ic(t.leave)];{const e=ic(t);return[e,e]}}function ic(t){return Xr(t)}function nn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function ur(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function df(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let kw=0;function pf(t,e,n,r){const s=t._endId=++kw,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Ow(t,e);if(!o)return r();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,f),i()},f=g=>{g.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,f)}function Ow(t,e){const n=window.getComputedStyle(t),r=m=>(n[m]||"").split(", "),s=r(tn+"Delay"),i=r(tn+"Duration"),o=gf(s,i),a=r(ls+"Delay"),c=r(ls+"Duration"),l=gf(a,c);let u=null,h=0,f=0;e===tn?o>0&&(u=tn,h=o,f=i.length):e===ls?l>0&&(u=ls,h=l,f=c.length):(h=Math.max(o,l),u=h>0?o>l?tn:ls:null,f=u?u===tn?i.length:c.length:0);const g=u===tn&&/\b(transform|all)(,|$)/.test(n[tn+"Property"]);return{type:u,timeout:h,propCount:f,hasTransform:g}}function gf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>mf(n)+mf(t[r])))}function mf(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Dw(){return document.body.offsetHeight}const hr=t=>{const e=t.props["onUpdate:modelValue"];return j(e)?n=>gi(e,n):e};function Pw(t){t.target.composing=!0}function yf(t){const e=t.target;e.composing&&(e.composing=!1,Lw(e,"input"))}function Lw(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const QC={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=hr(s);const i=r||s.props&&s.props.type==="number";en(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=Xr(a)),t._assign(a)}),n&&en(t,"change",()=>{t.value=t.value.trim()}),e||(en(t,"compositionstart",Pw),en(t,"compositionend",yf),en(t,"change",yf))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=hr(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Xr(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},YC={deep:!0,created(t,e,n){t._assign=hr(n),en(t,"change",()=>{const r=t._modelValue,s=us(t),i=t.checked,o=t._assign;if(j(r)){const a=va(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(er(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(Ef(t,i))})},mounted:vf,beforeUpdate(t,e,n){t._assign=hr(n),vf(t,e,n)}};function vf(t,{value:e,oldValue:n},r){t._modelValue=e,j(e)?t.checked=va(e,r.props.value)>-1:er(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Yr(e,Ef(t,!0)))}const JC={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=er(e);en(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Xr(us(o)):us(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=hr(r)},mounted(t,{value:e}){wf(t,e)},beforeUpdate(t,e,n){t._assign=hr(n)},updated(t,{value:e}){wf(t,e)}};function wf(t,e){const n=t.multiple;if(!(n&&!j(e)&&!er(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=us(i);if(n)j(e)?i.selected=va(e,o)>-1:i.selected=e.has(o);else if(Yr(us(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function us(t){return"_value"in t?t._value:t.value}function Ef(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Mw=["ctrl","shift","alt","meta"],xw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Mw.some(n=>t[`${n}Key`]&&!e.includes(n))},XC=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=xw[e[s]];if(i&&i(n,e))return}return t(n,...r)},Uw=Ue({patchProp:Aw},fw);let _f;function Fw(){return _f||(_f=xv(Uw))}const ZC=(...t)=>{const e=Fw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Vw(r);if(!s)return;const i=e._component;!X(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Vw(t){return Fe(t)?document.querySelector(t):t}/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const If=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",fr=t=>If?Symbol(t):"_vr_"+t,$w=fr("rvlm"),Tf=fr("rvd"),Vi=fr("r"),oc=fr("rl"),ac=fr("rvl"),dr=typeof window!="undefined";function Bw(t){return t.__esModule||If&&t[Symbol.toStringTag]==="Module"}const pe=Object.assign;function cc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const hs=()=>{},jw=/\/$/,qw=t=>t.replace(jw,"");function lc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Ww(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Hw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function bf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Kw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&pr(e.matched[r],n.matched[s])&&Sf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function pr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Sf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!zw(t[n],e[n]))return!1;return!0}function zw(t,e){return Array.isArray(t)?Af(t,e):Array.isArray(e)?Af(e,t):t===e}function Af(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Ww(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var fs;(function(t){t.pop="pop",t.push="push"})(fs||(fs={}));var ds;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ds||(ds={}));function Gw(t){if(!t)if(dr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),qw(t)}const Qw=/^[^#]+#/;function Yw(t,e){return t.replace(Qw,"#")+e}function Jw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const $i=()=>({left:window.pageXOffset,top:window.pageYOffset});function Xw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Jw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Cf(t,e){return(history.state?history.state.position-e:-1)+t}const uc=new Map;function Zw(t,e){uc.set(t,e)}function eE(t){const e=uc.get(t);return uc.delete(t),e}let tE=()=>location.protocol+"//"+location.host;function Rf(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),bf(c,"")}return bf(n,t)+r+s}function nE(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const g=Rf(t,location),m=n.value,S=e.value;let v=0;if(f){if(n.value=g,e.value=f,o&&o===m){o=null;return}v=S?f.position-S.position:0}else r(g);s.forEach(b=>{b(n.value,m,{delta:v,type:fs.pop,direction:v?v>0?ds.forward:ds.back:ds.unknown})})};function c(){o=n.value}function l(f){s.push(f);const g=()=>{const m=s.indexOf(f);m>-1&&s.splice(m,1)};return i.push(g),g}function u(){const{history:f}=window;!f.state||f.replaceState(pe({},f.state,{scroll:$i()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function Nf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?$i():null}}function rE(t){const{history:e,location:n}=window,r={value:Rf(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:tE()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(c,l){const u=pe({},e.state,Nf(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=pe({},s.value,e.state,{forward:c,scroll:$i()});i(u.current,u,!0);const h=pe({},Nf(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function eR(t){t=Gw(t);const e=rE(t),n=nE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=pe({location:"",base:t,go:r,createHref:Yw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function sE(t){return typeof t=="string"||t&&typeof t=="object"}function kf(t){return typeof t=="string"||typeof t=="symbol"}const rn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Of=fr("nf");var Df;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Df||(Df={}));function gr(t,e){return pe(new Error,{type:t,[Of]:!0},e)}function On(t,e){return t instanceof Error&&Of in t&&(e==null||!!(t.type&e))}const Pf="[^/]+?",iE={sensitive:!1,strict:!1,start:!0,end:!0},oE=/[.+*?^${}()[\]/\\]/g;function aE(t,e){const n=pe({},iE,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(oE,"\\$&"),g+=40;else if(f.type===1){const{value:m,repeatable:S,optional:v,regexp:b}=f;i.push({name:m,repeatable:S,optional:v});const P=b||Pf;if(P!==Pf){g+=10;try{new RegExp(`(${P})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${m}" (${P}): `+H.message)}}let q=S?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||(q=v&&l.length<2?`(?:/${q})`:"/"+q),v&&(q+="?"),s+=q,g+=20,v&&(g+=-8),S&&(g+=-20),P===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",m=i[f-1];h[m.name]=g&&m.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:m,repeatable:S,optional:v}=g,b=m in l?l[m]:"";if(Array.isArray(b)&&!S)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const P=Array.isArray(b)?b.join("/"):b;if(!P)if(v)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=P}}return u}return{re:o,score:r,keys:i,parse:a,stringify:c}}function cE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function lE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=cE(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const uE={type:0,value:""},hE=/[a-zA-Z0-9_]/;function fE(t){if(!t)return[[]];if(t==="/")return[[uE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:hE.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function dE(t,e,n){const r=aE(fE(t.path),n),s=pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function pE(t,e){const n=[],r=new Map;e=Mf({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const g=!f,m=mE(u);m.aliasOf=f&&f.record;const S=Mf(e,u),v=[m];if("alias"in u){const q=typeof u.alias=="string"?[u.alias]:u.alias;for(const H of q)v.push(pe({},m,{components:f?f.record.components:m.components,path:H,aliasOf:f?f.record:m}))}let b,P;for(const q of v){const{path:H}=q;if(h&&H[0]!=="/"){const le=h.record.path,ge=le[le.length-1]==="/"?"":"/";q.path=h.record.path+(H&&ge+H)}if(b=dE(q,h,S),f?f.alias.push(b):(P=P||b,P!==b&&P.alias.push(b),g&&u.name&&!Lf(b)&&o(u.name)),"children"in m){const le=m.children;for(let ge=0;ge<le.length;ge++)i(le[ge],b,f&&f.children[ge])}f=f||b,c(b)}return P?()=>{o(P)}:hs}function o(u){if(kf(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&lE(u,n[h])>=0;)h++;n.splice(h,0,u),u.record.name&&!Lf(u)&&r.set(u.record.name,u)}function l(u,h){let f,g={},m,S;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw gr(1,{location:u});S=f.record.name,g=pe(gE(h.params,f.keys.filter(P=>!P.optional).map(P=>P.name)),u.params),m=f.stringify(g)}else if("path"in u)m=u.path,f=n.find(P=>P.re.test(m)),f&&(g=f.parse(m),S=f.record.name);else{if(f=h.name?r.get(h.name):n.find(P=>P.re.test(h.path)),!f)throw gr(1,{location:u,currentLocation:h});S=f.record.name,g=pe({},h.params,u.params),m=f.stringify(g)}const v=[];let b=f;for(;b;)v.unshift(b.record),b=b.parent;return{name:S,path:m,params:g,matched:v,meta:vE(v)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function gE(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function mE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:yE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function yE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Lf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function vE(t){return t.reduce((e,n)=>pe(e,n.meta),{})}function Mf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const xf=/#/g,wE=/&/g,EE=/\//g,_E=/=/g,IE=/\?/g,Uf=/\+/g,TE=/%5B/g,bE=/%5D/g,Ff=/%5E/g,SE=/%60/g,Vf=/%7B/g,AE=/%7C/g,$f=/%7D/g,CE=/%20/g;function hc(t){return encodeURI(""+t).replace(AE,"|").replace(TE,"[").replace(bE,"]")}function RE(t){return hc(t).replace(Vf,"{").replace($f,"}").replace(Ff,"^")}function fc(t){return hc(t).replace(Uf,"%2B").replace(CE,"+").replace(xf,"%23").replace(wE,"%26").replace(SE,"`").replace(Vf,"{").replace($f,"}").replace(Ff,"^")}function NE(t){return fc(t).replace(_E,"%3D")}function kE(t){return hc(t).replace(xf,"%23").replace(IE,"%3F")}function OE(t){return t==null?"":kE(t).replace(EE,"%2F")}function Bi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function DE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Uf," "),o=i.indexOf("="),a=Bi(o<0?i:i.slice(0,o)),c=o<0?null:Bi(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Bf(t){let e="";for(let n in t){const r=t[n];if(n=NE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&fc(i)):[r&&fc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function PE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function ps(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function sn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(gr(4,{from:n,to:e})):h instanceof Error?a(h):sE(h)?a(gr(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function dc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(LE(a)){const l=(a.__vccOpts||a)[e];l&&s.push(sn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Bw(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&sn(f,n,r,i,o)()}))}}return s}function LE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function jf(t){const e=kt(Vi),n=kt(oc),r=Nt(()=>e.resolve(rs(t.to))),s=Nt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(pr.bind(null,u));if(f>-1)return f;const g=qf(c[l-2]);return l>1&&qf(u)===g&&h[h.length-1].path!==g?h.findIndex(pr.bind(null,c[l-2])):f}),i=Nt(()=>s.value>-1&&FE(n.params,r.value.params)),o=Nt(()=>s.value>-1&&s.value===n.matched.length-1&&Sf(n.params,r.value.params));function a(c={}){return UE(c)?e[rs(t.replace)?"replace":"push"](rs(t.to)).catch(hs):Promise.resolve()}return{route:r,href:Nt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const ME=dh({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:jf,setup(t,{slots:e}){const n=ts(jf(t)),{options:r}=kt(Vi),s=Nt(()=>({[Hf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Hf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:tc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),xE=ME;function UE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function FE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function qf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Hf=(t,e,n)=>t!=null?t:e!=null?e:n,VE=dh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=kt(ac),s=Nt(()=>t.route||r.value),i=kt(Tf,0),o=Nt(()=>s.value.matched[i]);Si(Tf,i+1),Si($w,o),Si(ac,s);const a=Zy();return Ui(()=>[a.value,o.value,t.name],([c,l,u],[h,f,g])=>{l&&(l.instances[u]=c,f&&f!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),c&&l&&(!f||!pr(l,f)||!h)&&(l.enterCallbacks[u]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=s.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return Kf(n.default,{Component:u,route:c});const f=l.props[t.name],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,S=tc(u,pe({},g,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return Kf(n.default,{Component:S,route:c})||S}}});function Kf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const $E=VE;function tR(t){const e=pE(t.routes,t),n=t.parseQuery||DE,r=t.stringifyQuery||Bf,s=t.history,i=ps(),o=ps(),a=ps(),c=ev(rn);let l=rn;dr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=cc.bind(null,E=>""+E),h=cc.bind(null,OE),f=cc.bind(null,Bi);function g(E,x){let N,F;return kf(E)?(N=e.getRecordMatcher(E),F=x):F=E,e.addRoute(F,N)}function m(E){const x=e.getRecordMatcher(E);x&&e.removeRoute(x)}function S(){return e.getRoutes().map(E=>E.record)}function v(E){return!!e.getRecordMatcher(E)}function b(E,x){if(x=pe({},x||c.value),typeof E=="string"){const J=lc(n,E,x.path),d=e.resolve({path:J.path},x),p=s.createHref(J.fullPath);return pe(J,d,{params:f(d.params),hash:Bi(J.hash),redirectedFrom:void 0,href:p})}let N;if("path"in E)N=pe({},E,{path:lc(n,E.path,x.path).path});else{const J=pe({},E.params);for(const d in J)J[d]==null&&delete J[d];N=pe({},E,{params:h(E.params)}),x.params=h(x.params)}const F=e.resolve(N,x),he=E.hash||"";F.params=u(f(F.params));const ye=Hw(r,pe({},E,{hash:RE(he),path:F.path})),ee=s.createHref(ye);return pe({fullPath:ye,hash:he,query:r===Bf?PE(E.query):E.query||{}},F,{redirectedFrom:void 0,href:ee})}function P(E){return typeof E=="string"?lc(n,E,c.value.path):pe({},E)}function q(E,x){if(l!==E)return gr(8,{from:x,to:E})}function H(E){return Z(E)}function le(E){return H(pe(P(E),{replace:!0}))}function ge(E){const x=E.matched[E.matched.length-1];if(x&&x.redirect){const{redirect:N}=x;let F=typeof N=="function"?N(E):N;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=P(F):{path:F},F.params={}),pe({query:E.query,hash:E.hash,params:E.params},F)}}function Z(E,x){const N=l=b(E),F=c.value,he=E.state,ye=E.force,ee=E.replace===!0,J=ge(N);if(J)return Z(pe(P(J),{state:he,force:ye,replace:ee}),x||N);const d=N;d.redirectedFrom=x;let p;return!ye&&Kw(r,F,N)&&(p=gr(16,{to:d,from:F}),Yn(F,F,!0,!1)),(p?Promise.resolve(p):oe(d,F)).catch(y=>On(y)?y:me(y,d,F)).then(y=>{if(y){if(On(y,2))return Z(pe(P(y.to),{state:he,force:ye,replace:ee}),x||d)}else y=De(d,F,!0,ee,he);return Oe(d,F,y),y})}function be(E,x){const N=q(E,x);return N?Promise.reject(N):Promise.resolve()}function oe(E,x){let N;const[F,he,ye]=BE(E,x);N=dc(F.reverse(),"beforeRouteLeave",E,x);for(const J of F)J.leaveGuards.forEach(d=>{N.push(sn(d,E,x))});const ee=be.bind(null,E,x);return N.push(ee),mr(N).then(()=>{N=[];for(const J of i.list())N.push(sn(J,E,x));return N.push(ee),mr(N)}).then(()=>{N=dc(he,"beforeRouteUpdate",E,x);for(const J of he)J.updateGuards.forEach(d=>{N.push(sn(d,E,x))});return N.push(ee),mr(N)}).then(()=>{N=[];for(const J of E.matched)if(J.beforeEnter&&!x.matched.includes(J))if(Array.isArray(J.beforeEnter))for(const d of J.beforeEnter)N.push(sn(d,E,x));else N.push(sn(J.beforeEnter,E,x));return N.push(ee),mr(N)}).then(()=>(E.matched.forEach(J=>J.enterCallbacks={}),N=dc(ye,"beforeRouteEnter",E,x),N.push(ee),mr(N))).then(()=>{N=[];for(const J of o.list())N.push(sn(J,E,x));return N.push(ee),mr(N)}).catch(J=>On(J,8)?J:Promise.reject(J))}function Oe(E,x,N){for(const F of a.list())F(E,x,N)}function De(E,x,N,F,he){const ye=q(E,x);if(ye)return ye;const ee=x===rn,J=dr?history.state:{};N&&(F||ee?s.replace(E.fullPath,pe({scroll:ee&&J&&J.scroll},he)):s.push(E.fullPath,he)),c.value=E,Yn(E,x,N,ee),yt()}let U;function Se(){U=s.listen((E,x,N)=>{const F=b(E),he=ge(F);if(he){Z(pe(he,{replace:!0}),F).catch(hs);return}l=F;const ye=c.value;dr&&Zw(Cf(ye.fullPath,N.delta),$i()),oe(F,ye).catch(ee=>On(ee,4|8)?ee:On(ee,2)?(Z(ee.to,F).then(J=>{On(J,4|16)&&!N.delta&&N.type===fs.pop&&s.go(-1,!1)}).catch(hs),Promise.reject()):(N.delta&&s.go(-N.delta,!1),me(ee,F,ye))).then(ee=>{ee=ee||De(F,ye,!1),ee&&(N.delta?s.go(-N.delta,!1):N.type===fs.pop&&On(ee,4|16)&&s.go(-1,!1)),Oe(F,ye,ee)}).catch(hs)})}let nt=ps(),Ut=ps(),Ae;function me(E,x,N){yt(E);const F=Ut.list();return F.length?F.forEach(he=>he(E,x,N)):console.error(E),Promise.reject(E)}function ue(){return Ae&&c.value!==rn?Promise.resolve():new Promise((E,x)=>{nt.add([E,x])})}function yt(E){Ae||(Ae=!0,Se(),nt.list().forEach(([x,N])=>E?N(E):x()),nt.reset())}function Yn(E,x,N,F){const{scrollBehavior:he}=t;if(!dr||!he)return Promise.resolve();const ye=!N&&eE(Cf(E.fullPath,0))||(F||!N)&&history.state&&history.state.scroll||null;return Wh().then(()=>he(E,x,ye)).then(ee=>ee&&Xw(ee)).catch(ee=>me(ee,E,x))}const Ft=E=>s.go(E);let At;const vt=new Set;return{currentRoute:c,addRoute:g,removeRoute:m,hasRoute:v,getRoutes:S,resolve:b,options:t,push:H,replace:le,go:Ft,back:()=>Ft(-1),forward:()=>Ft(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ut.add,isReady:ue,install(E){const x=this;E.component("RouterLink",xE),E.component("RouterView",$E),E.config.globalProperties.$router=x,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>rs(c)}),dr&&!At&&c.value===rn&&(At=!0,H(s.location).catch(he=>{}));const N={};for(const he in rn)N[he]=Nt(()=>c.value[he]);E.provide(Vi,x),E.provide(oc,ts(N)),E.provide(ac,c);const F=E.unmount;vt.add(E),E.unmount=function(){vt.delete(E),vt.size<1&&(l=rn,U&&U(),c.value=rn,At=!1,Ae=!1),F()}}}}function mr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function BE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>pr(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>pr(l,c))||s.push(c))}return[n,r,s]}function nR(){return kt(Vi)}function rR(){return kt(oc)}/**
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
 */const jE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},qE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},HE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),r.push(n[u],n[h],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const f=i<<2|a>>4;if(r.push(f),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const m=l<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},KE=function(t){try{return HE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class zE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Le(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zf(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function Wf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Gf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function WE(){return Le().indexOf("Electron/")>=0}function Qf(){const t=Le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function GE(){return Le().indexOf("MSAppHost/")>=0}/**
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
 */const QE="FirebaseError";class yr extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=QE,Object.setPrototypeOf(this,yr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gs.prototype.create)}}class gs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?YE(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new yr(s,a,r)}}function YE(t,e){return t.replace(JE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const JE=/\{\$([^}]+)}/g;function XE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ji(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Yf(i)&&Yf(o)){if(!ji(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Yf(t){return t!==null&&typeof t=="object"}/**
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
 */function ms(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ys(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function vs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ZE(t,e){const n=new e_(t,e);return n.subscribe.bind(n)}class e_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");t_(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=pc),s.error===void 0&&(s.error=pc),s.complete===void 0&&(s.complete=pc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function t_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pc(){}/**
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
 */function Je(t){return t&&t._delegate?t._delegate:t}class vr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Dn="[DEFAULT]";/**
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
 */class n_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(s_(e))try{this.getOrInitializeService({instanceIdentifier:Dn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Dn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dn){return this.instances.has(e)}getOptions(e=Dn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:r_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dn){return this.component?this.component.multipleInstances?e:Dn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function r_(t){return t===Dn?void 0:t}function s_(t){return t.instantiationMode==="EAGER"}/**
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
 */class i_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new n_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const o_={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},a_=ie.INFO,c_={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},l_=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=c_[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gc{constructor(e){this.name=e,this._logLevel=a_,this._logHandler=l_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?o_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}/**
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
 */class u_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(h_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function h_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mc="@firebase/app",Jf="0.7.9";/**
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
 */const yc=new gc("@firebase/app"),f_="@firebase/app-compat",d_="@firebase/analytics-compat",p_="@firebase/analytics",g_="@firebase/app-check-compat",m_="@firebase/app-check",y_="@firebase/auth",v_="@firebase/auth-compat",w_="@firebase/database",E_="@firebase/database-compat",__="@firebase/functions",I_="@firebase/functions-compat",T_="@firebase/installations",b_="@firebase/installations-compat",S_="@firebase/messaging",A_="@firebase/messaging-compat",C_="@firebase/performance",R_="@firebase/performance-compat",N_="@firebase/remote-config",k_="@firebase/remote-config-compat",O_="@firebase/storage",D_="@firebase/storage-compat",P_="@firebase/firestore",L_="@firebase/firestore-compat",M_="firebase",x_="9.5.0";/**
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
 */const Xf="[DEFAULT]",U_={[mc]:"fire-core",[f_]:"fire-core-compat",[p_]:"fire-analytics",[d_]:"fire-analytics-compat",[m_]:"fire-app-check",[g_]:"fire-app-check-compat",[y_]:"fire-auth",[v_]:"fire-auth-compat",[w_]:"fire-rtdb",[E_]:"fire-rtdb-compat",[__]:"fire-fn",[I_]:"fire-fn-compat",[T_]:"fire-iid",[b_]:"fire-iid-compat",[S_]:"fire-fcm",[A_]:"fire-fcm-compat",[C_]:"fire-perf",[R_]:"fire-perf-compat",[N_]:"fire-rc",[k_]:"fire-rc-compat",[O_]:"fire-gcs",[D_]:"fire-gcs-compat",[P_]:"fire-fst",[L_]:"fire-fst-compat","fire-js":"fire-js",[M_]:"fire-js-all"};/**
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
 */const qi=new Map,vc=new Map;function F_(t,e){try{t.container.addComponent(e)}catch(n){yc.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ws(t){const e=t.name;if(vc.has(e))return yc.debug(`There were multiple attempts to register component ${e}.`),!1;vc.set(e,t);for(const n of qi.values())F_(n,t);return!0}function wc(t,e){return t.container.getProvider(e)}/**
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
 */const V_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Hi=new gs("app","Firebase",V_);/**
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
 */class $_{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Hi.create("app-deleted",{appName:this._name})}}/**
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
 */const Es=x_;function sR(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Xf,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Hi.create("bad-app-name",{appName:String(r)});const s=qi.get(r);if(s){if(ji(t,s.options)&&ji(n,s.config))return s;throw Hi.create("duplicate-app",{appName:r})}const i=new i_(r);for(const a of vc.values())i.addComponent(a);const o=new $_(t,n,i);return qi.set(r,o),o}function Zf(t=Xf){const e=qi.get(t);if(!e)throw Hi.create("no-app",{appName:t});return e}function on(t,e,n){var r;let s=(r=U_[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yc.warn(a.join(" "));return}ws(new vr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */function B_(t){ws(new vr("platform-logger",e=>new u_(e),"PRIVATE")),on(mc,Jf,t),on(mc,Jf,"esm2017"),on("fire-js","")}B_("");/*! *****************************************************************************
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
***************************************************************************** */function Ec(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ed(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const j_=ed,td=new gs("auth","Firebase",ed());/**
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
 */const nd=new gc("@firebase/auth");function Ki(t,...e){nd.logLevel<=ie.ERROR&&nd.error(`Auth (${Es}): ${t}`,...e)}/**
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
 */function St(t,...e){throw _c(t,...e)}function Pt(t,...e){return _c(t,...e)}function q_(t,e,n){const r=Object.assign(Object.assign({},j_()),{[e]:n});return new gs("auth","Firebase",r).create(e,{appName:t.name})}function _c(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return td.create(t,...e)}function z(t,e,...n){if(!t)throw _c(e,...n)}function jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ki(e),new Error(e)}function qt(t,e){t||jt(e)}/**
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
 */const rd=new Map;function Ht(t){qt(t instanceof Function,"Expected a class definition");let e=rd.get(t);return e?(qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rd.set(t,e),e)}/**
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
 */function H_(t,e){const n=wc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ji(i,e!=null?e:{}))return s;St(s,"already-initialized")}return n.initialize({options:e})}function K_(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ht);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Ic(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function z_(){return sd()==="http:"||sd()==="https:"}function sd(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function W_(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(z_()||Wf()||"connection"in navigator)?navigator.onLine:!0}function G_(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class _s{constructor(e,n){this.shortDelay=e,this.longDelay=n,qt(n>e,"Short delay should be less than long delay!"),this.isMobile=zf()||Gf()}get(){return W_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Tc(t,e){qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class bc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Q_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Y_=new _s(3e4,6e4);function Is(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function wr(t,e,n,r,s={}){return id(t,s,()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ms(Object.assign({key:t.config.apiKey},o)).slice(1),c=new(bc.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&c.set("X-Firebase-Locale",t.languageCode),bc.fetch()(od(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function id(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Q_),e);try{const s=new J_(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Sc(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sc(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Sc(t,"email-already-in-use",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw q_(t,u,l);St(t,u)}}catch(s){if(s instanceof yr)throw s;St(t,"network-request-failed")}}async function Ts(t,e,n,r,s={}){const i=await wr(t,e,n,r,s);return"mfaPendingCredential"in i&&St(t,"multi-factor-auth-required",{_serverResponse:i}),i}function od(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Tc(t.config,s):`${t.config.apiScheme}://${s}`}class J_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pt(this.auth,"timeout")),Y_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Sc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Pt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function X_(t,e){return wr(t,"POST","/v1/accounts:delete",e)}async function Z_(t,e){return wr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function bs(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eI(t,e=!1){const n=Je(t),r=await n.getIdToken(e),s=Cc(r);z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:bs(Ac(s.auth_time)),issuedAtTime:bs(Ac(s.iat)),expirationTime:bs(Ac(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ac(t){return Number(t)*1e3}function Cc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ki("JWT malformed, contained fewer than 3 sections"),null;try{const s=KE(n);return s?JSON.parse(s):(Ki("Failed to decode base64 JWT payload"),null)}catch(s){return Ki("Caught error parsing JWT payload as JSON",s),null}}function tI(t){const e=Cc(t);return z(e,"internal-error"),z(typeof e.exp!="undefined","internal-error"),z(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Er(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yr&&nI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class rI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ad{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bs(this.lastLoginAt),this.creationTime=bs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zi(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Er(t,Z_(n,{idToken:r}));z(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=((e=i.providerUserInfo)===null||e===void 0?void 0:e.length)?oI(i.providerUserInfo):[],a=iI(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a==null?void 0:a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ad(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function sI(t){const e=Je(t);await zi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function oI(t){return t.map(e=>{var{providerId:n}=e,r=Ec(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function aI(t,e){const n=await id(t,{},()=>{const r=ms({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=od(t,s,"/v1/token",`key=${i}`);return bc.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken!="undefined","internal-error"),z(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):tI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await aI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ss;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ss,this.toJSON())}_performRefresh(){return jt("not implemented")}}/**
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
 */function an(t,e){z(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Pn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ec(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new rI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new ad(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Er(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return eI(this,e)}reload(){return sI(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Pn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Er(this,X_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(l=n.createdAt)!==null&&l!==void 0?l:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:q,emailVerified:H,isAnonymous:le,providerData:ge,stsTokenManager:Z}=n;z(q&&Z,e,"internal-error");const be=Ss.fromJSON(this.name,Z);z(typeof q=="string",e,"internal-error"),an(h,e.name),an(f,e.name),z(typeof H=="boolean",e,"internal-error"),z(typeof le=="boolean",e,"internal-error"),an(g,e.name),an(m,e.name),an(S,e.name),an(v,e.name),an(b,e.name),an(P,e.name);const oe=new Pn({uid:q,auth:e,email:f,emailVerified:H,displayName:h,isAnonymous:le,photoURL:m,phoneNumber:g,tenantId:S,stsTokenManager:be,createdAt:b,lastLoginAt:P});return ge&&Array.isArray(ge)&&(oe.providerData=ge.map(Oe=>Object.assign({},Oe))),v&&(oe._redirectEventId=v),oe}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ss;s.updateFromServerResponse(n);const i=new Pn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await zi(i),i}}/**
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
 */class cd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cd.type="NONE";const ld=cd;/**
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
 */function Wi(t,e,n){return`firebase:${t}:${e}:${n}`}class _r{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Wi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Wi("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _r(Ht(ld),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Ht(ld);const o=Wi(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Pn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new _r(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new _r(i,e,r))}}/**
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
 */function ud(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gd(e))return"Blackberry";if(md(e))return"Webos";if(Rc(e))return"Safari";if((e.includes("chrome/")||fd(e))&&!e.includes("edge/"))return"Chrome";if(pd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hd(t=Le()){return/firefox\//i.test(t)}function Rc(t=Le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fd(t=Le()){return/crios\//i.test(t)}function dd(t=Le()){return/iemobile/i.test(t)}function pd(t=Le()){return/android/i.test(t)}function gd(t=Le()){return/blackberry/i.test(t)}function md(t=Le()){return/webos/i.test(t)}function Gi(t=Le()){return/iphone|ipad|ipod/i.test(t)}function cI(t=Le()){var e;return Gi(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function lI(){return Qf()&&document.documentMode===10}function yd(t=Le()){return Gi(t)||pd(t)||md(t)||gd(t)||/windows phone/i.test(t)||dd(t)}function uI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function vd(t,e=[]){let n;switch(t){case"Browser":n=ud(Le());break;case"Worker":n=`${ud(Le())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Es}/${r}`}/**
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
 */class hI{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wd(this),this.idTokenSubscription=new wd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=td,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ht(n)),this._initializationPromise=this.queue(async()=>{var r,s;this._deleted||(this.persistenceManager=await _r.create(this,e),!this._deleted&&(((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zi(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=G_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Je(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ht(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ht(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await _r.create(this,[Ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return z(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Qi(t){return Je(t)}class wd{constructor(e){this.auth=e,this.observer=null,this.addObserver=ZE(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Nc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jt("not implemented")}_getIdTokenResponse(e){return jt("not implemented")}_linkToIdToken(e,n){return jt("not implemented")}_getReauthenticationResolver(e){return jt("not implemented")}}async function fI(t,e){return wr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function dI(t,e){return Ts(t,"POST","/v1/accounts:signInWithPassword",Is(t,e))}/**
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
 */async function pI(t,e){return Ts(t,"POST","/v1/accounts:signInWithEmailLink",Is(t,e))}async function gI(t,e){return Ts(t,"POST","/v1/accounts:signInWithEmailLink",Is(t,e))}/**
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
 */class As extends Nc{constructor(e,n,r,s=null){super("password",r);this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new As(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new As(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return dI(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return pI(e,{email:this._email,oobCode:this._password});default:St(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return fI(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return gI(e,{idToken:n,email:this._email,oobCode:this._password});default:St(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ir(t,e){return Ts(t,"POST","/v1/accounts:signInWithIdp",Is(t,e))}/**
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
 */const mI="http://localhost";class Ln extends Nc{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Ln(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):St("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ec(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ln(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ir(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ir(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ir(e,n)}buildRequest(){const e={requestUri:mI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ms(n)}return e}}/**
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
 */function yI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vI(t){const e=ys(vs(t)).link,n=e?ys(vs(e)).deep_link_id:null,r=ys(vs(t)).deep_link_id;return(r?ys(vs(r)).link:null)||r||n||e||t}class kc{constructor(e){var n,r,s,i,o,a;const c=ys(vs(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=yI((s=c.mode)!==null&&s!==void 0?s:null);z(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=vI(e);try{return new kc(n)}catch{return null}}}/**
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
 */class Tr{constructor(){this.providerId=Tr.PROVIDER_ID}static credential(e,n){return As._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=kc.parseLink(n);return z(r,"argument-error"),As._fromEmailAndCode(e,r.code,r.tenantId)}}Tr.PROVIDER_ID="password";Tr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Tr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ed{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Cs extends Ed{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class cn extends Cs{constructor(){super("facebook.com")}static credential(e){return Ln._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cn.credential(e.oauthAccessToken)}catch{return null}}}cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";cn.PROVIDER_ID="facebook.com";/**
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
 */class ln extends Cs{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Ln._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ln.credential(n,r)}catch{return null}}}ln.GOOGLE_SIGN_IN_METHOD="google.com";ln.PROVIDER_ID="google.com";/**
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
 */class un extends Cs{constructor(){super("github.com")}static credential(e){return Ln._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.GITHUB_SIGN_IN_METHOD="github.com";un.PROVIDER_ID="github.com";/**
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
 */class hn extends Cs{constructor(){super("twitter.com")}static credential(e,n){return Ln._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return hn.credential(n,r)}catch{return null}}}hn.TWITTER_SIGN_IN_METHOD="twitter.com";hn.PROVIDER_ID="twitter.com";/**
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
 */async function wI(t,e){return Ts(t,"POST","/v1/accounts:signUp",Is(t,e))}/**
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
 */class Mn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Pn._fromIdTokenResponse(e,r,s),o=_d(r);return new Mn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=_d(r);return new Mn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function _d(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Yi extends yr{constructor(e,n,r,s){var i;super(n.code,n.message);this.operationType=r,this.user=s,Object.setPrototypeOf(this,Yi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Yi(e,n,r,s)}}function Id(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Yi._fromErrorAndOperation(t,i,e,r):i})}async function EI(t,e,n=!1){const r=await Er(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mn._forOperation(t,"link",r)}/**
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
 */async function _I(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Er(t,Id(r,s,e,t),n);z(i.idToken,r,"internal-error");const o=Cc(i.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(t.uid===a,r,"user-mismatch"),Mn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&St(r,"user-mismatch"),i}}/**
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
 */async function Td(t,e,n=!1){const r="signIn",s=await Id(t,r,e),i=await Mn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function II(t,e){return Td(Qi(t),e)}async function iR(t,e,n){const r=Qi(t),s=await wI(r,{returnSecureToken:!0,email:e,password:n}),i=await Mn._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function oR(t,e,n){return II(Je(t),Tr.credential(e,n))}/**
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
 */async function TI(t,e){return wr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function aR(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Je(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Er(r,TI(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}const Ji="__sak";/**
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
 */class bd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ji,"1"),this.storage.removeItem(Ji),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function bI(){const t=Le();return Rc(t)||Gi(t)}const SI=1e3,AI=10;class Sd extends bd{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=bI()&&uI(),this.fallbackToPolling=yd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);lI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,AI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},SI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sd.type="LOCAL";const CI=Sd;/**
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
 */class Ad extends bd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ad.type="SESSION";const Cd=Ad;/**
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
 */function RI(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Xi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Xi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await RI(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xi.receivers=[];/**
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
 */function Oc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class NI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Oc("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Lt(){return window}function kI(t){Lt().location.href=t}/**
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
 */function Rd(){return typeof Lt().WorkerGlobalScope!="undefined"&&typeof Lt().importScripts=="function"}async function OI(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function DI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function PI(){return Rd()?self:null}/**
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
 */const Nd="firebaseLocalStorageDb",LI=1,Zi="firebaseLocalStorage",kd="fbase_key";class Rs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function eo(t,e){return t.transaction([Zi],e?"readwrite":"readonly").objectStore(Zi)}function MI(){const t=indexedDB.deleteDatabase(Nd);return new Rs(t).toPromise()}function Dc(){const t=indexedDB.open(Nd,LI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Zi,{keyPath:kd})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Zi)?e(r):(r.close(),await MI(),e(await Dc()))})})}async function Od(t,e,n){const r=eo(t,!0).put({[kd]:e,value:n});return new Rs(r).toPromise()}async function xI(t,e){const n=eo(t,!1).get(e),r=await new Rs(n).toPromise();return r===void 0?null:r.value}function Dd(t,e){const n=eo(t,!0).delete(e);return new Rs(n).toPromise()}const UI=800,FI=3;class Pd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>FI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xi._getInstance(PI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await OI(),!this.activeServiceWorker)return;this.sender=new NI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||DI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dc();return await Od(e,Ji,"1"),await Dd(e,Ji),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Od(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>xI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=eo(s,!1).getAll();return new Rs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),UI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pd.type="LOCAL";const VI=Pd;/**
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
 */function $I(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function BI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Pt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",$I().appendChild(r)})}function jI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new _s(3e4,6e4);/**
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
 */function qI(t,e){return e?Ht(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Pc extends Nc{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Ir(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ir(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ir(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function HI(t){return Td(t.auth,new Pc(t),t.bypassAuthState)}function KI(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),_I(n,new Pc(t),t.bypassAuthState)}async function zI(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),EI(n,new Pc(t),t.bypassAuthState)}/**
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
 */class Ld{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return HI;case"linkViaPopup":case"linkViaRedirect":return zI;case"reauthViaPopup":case"reauthViaRedirect":return KI;default:St(this.auth,"internal-error")}}resolve(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const WI=new _s(2e3,1e4);class br extends Ld{constructor(e,n,r,s,i){super(e,n,s,i);this.provider=r,this.authWindow=null,this.pollId=null,br.currentPopupAction&&br.currentPopupAction.cancel(),br.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){qt(this.filter.length===1,"Popup operations only handle one event");const e=Oc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,br.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,WI.get())};e()}}br.currentPopupAction=null;/**
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
 */const GI="pendingRedirect",Lc=new Map;class QI extends Ld{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=Lc.get(this.auth._key());if(!e){try{const r=await YI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Lc.set(this.auth._key(),e)}return this.bypassAuthState||Lc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YI(t,e){const n=XI(e),r=JI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function JI(t){return Ht(t._redirectPersistence)}function XI(t){return Wi(GI,t.config.apiKey,t.name)}async function ZI(t,e,n=!1){const r=Qi(t),s=qI(r,e),o=await new QI(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const eT=10*60*1e3;class tT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!xd(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Md(e))}saveEventToCache(e){this.cachedEventUids.add(Md(e)),this.lastProcessedEventTime=Date.now()}}function Md(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xd(t);default:return!1}}/**
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
 */async function rT(t,e={}){return wr(t,"GET","/v1/projects",e)}/**
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
 */const sT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iT=/^https?/;async function oT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rT(t);for(const n of e)try{if(aT(n))return}catch{}St(t,"unauthorized-domain")}function aT(t){const e=Ic(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!iT.test(n))return!1;if(sT.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const cT=new _s(3e4,6e4);function Ud(){const t=Lt().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function lT(t){return new Promise((e,n)=>{var r,s,i;function o(){Ud(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ud(),n(Pt(t,"network-request-failed"))},timeout:cT.get()})}if((s=(r=Lt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0?void 0:s.Iframe)e(gapi.iframes.getContext());else if((i=Lt().gapi)===null||i===void 0?void 0:i.load)o();else{const a=jI("iframefcb");return Lt()[a]=()=>{gapi.load?o():n(Pt(t,"network-request-failed"))},BI(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw to=null,e})}let to=null;function uT(t){return to=to||lT(t),to}/**
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
 */const hT=new _s(5e3,15e3),fT="__/auth/iframe",dT="emulator/auth/iframe",pT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mT(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Tc(e,dT):`https://${t.config.authDomain}/${fT}`,r={apiKey:e.apiKey,appName:t.name,v:Es},s=gT.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ms(r).slice(1)}`}async function yT(t){const e=await uT(t),n=Lt().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:mT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pT,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Pt(t,"network-request-failed"),a=Lt().setTimeout(()=>{i(o)},hT.get());function c(){Lt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const vT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wT=500,ET=600,_T="_blank",IT="http://localhost";class Fd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TT(t,e,n,r=wT,s=ET){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},vT),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Le().toLowerCase();n&&(a=fd(l)?_T:n),hd(l)&&(e=e||IT,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[g,m])=>`${f}${g}=${m},`,"");if(cI(l)&&a!=="_self")return bT(e||"",a),new Fd(null);const h=window.open(e||"",a,u);z(h,t,"popup-blocked");try{h.focus()}catch{}return new Fd(h)}function bT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ST="__/auth/handler",AT="emulator/auth/handler";function Vd(t,e,n,r,s,i){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Es,eventId:s};if(e instanceof Ed){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",XE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Cs){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${CT(t)}?${ms(a).slice(1)}`}function CT({config:t}){return t.emulator?Tc(t,AT):`https://${t.authDomain}/${ST}`}/**
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
 */const Mc="webStorageSupport";class RT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cd,this._completeRedirectFn=ZI}async _openPopup(e,n,r,s){var i;qt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Vd(e,n,r,Ic(),s);return TT(e,o,Oc())}async _openRedirect(e,n,r,s){return await this._originValidation(e),kI(Vd(e,n,r,Ic(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(qt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r}async initAndGetManager(e){const n=await yT(e),r=new tT(e);return n.register("authEvent",s=>(z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Mc,{type:Mc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Mc];o!==void 0&&n(!!o),St(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=oT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return yd()||Rc()||Gi()}}const NT=RT;var $d="@firebase/auth",Bd="0.19.3";/**
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
 */class kT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function OT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function DT(t){ws(new vr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:i}=r.options;return(o=>{z(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),z(!(i==null?void 0:i.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:i,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vd(t)},c=new hI(o,a);return K_(c,n),c})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ws(new vr("auth-internal",e=>{const n=Qi(e.getProvider("auth").getImmediate());return(r=>new kT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),on($d,Bd,OT(t)),on($d,Bd,"esm2017")}/**
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
 */function cR(t=Zf()){const e=wc(t,"auth");return e.isInitialized()?e.getImmediate():H_(t,{popupRedirectResolver:NT,persistence:[VI,CI,Cd]})}DT("Browser");var PT=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},D,xc=xc||{},W=PT||self;function no(){}function Uc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ns(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function LT(t){return Object.prototype.hasOwnProperty.call(t,Fc)&&t[Fc]||(t[Fc]=++MT)}var Fc="closure_uid_"+(1e9*Math.random()>>>0),MT=0;function xT(t,e,n){return t.call.apply(t.bind,arguments)}function UT(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Ve(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ve=xT:Ve=UT,Ve.apply(null,arguments)}function ro(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function $e(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function fn(){this.s=this.s,this.o=this.o}var FT=0,VT={};fn.prototype.s=!1;fn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),FT!=0)){var t=LT(this);delete VT[t]}};fn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const jd=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},qd=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function $T(t){e:{var e=O0;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Hd(t){return Array.prototype.concat.apply([],arguments)}function Vc(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function so(t){return/^[\s\xa0]*$/.test(t)}var Kd=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Xe(t,e){return t.indexOf(e)!=-1}function $c(t,e){return t<e?-1:t>e?1:0}var Ze;e:{var zd=W.navigator;if(zd){var Wd=zd.userAgent;if(Wd){Ze=Wd;break e}}Ze=""}function Bc(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Gd(t){const e={};for(const n in t)e[n]=t[n];return e}var Qd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Yd(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Qd.length;i++)n=Qd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function jc(t){return jc[" "](t),t}jc[" "]=no;function BT(t){var e=HT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var jT=Xe(Ze,"Opera"),Sr=Xe(Ze,"Trident")||Xe(Ze,"MSIE"),Jd=Xe(Ze,"Edge"),qc=Jd||Sr,Xd=Xe(Ze,"Gecko")&&!(Xe(Ze.toLowerCase(),"webkit")&&!Xe(Ze,"Edge"))&&!(Xe(Ze,"Trident")||Xe(Ze,"MSIE"))&&!Xe(Ze,"Edge"),qT=Xe(Ze.toLowerCase(),"webkit")&&!Xe(Ze,"Edge");function Zd(){var t=W.document;return t?t.documentMode:void 0}var io;e:{var Hc="",Kc=function(){var t=Ze;if(Xd)return/rv:([^\);]+)(\)|;)/.exec(t);if(Jd)return/Edge\/([\d\.]+)/.exec(t);if(Sr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(qT)return/WebKit\/(\S+)/.exec(t);if(jT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Kc&&(Hc=Kc?Kc[1]:""),Sr){var zc=Zd();if(zc!=null&&zc>parseFloat(Hc)){io=String(zc);break e}}io=Hc}var HT={};function KT(){return BT(function(){let t=0;const e=Kd(String(io)).split("."),n=Kd("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=$c(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||$c(s[2].length==0,i[2].length==0)||$c(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var Wc;if(W.document&&Sr){var ep=Zd();Wc=ep||parseInt(io,10)||void 0}else Wc=void 0;var zT=Wc,WT=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{W.addEventListener("test",no,e),W.removeEventListener("test",no,e)}catch{}return t}();function Ke(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ke.prototype.h=function(){this.defaultPrevented=!0};function ks(t,e){if(Ke.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Xd){e:{try{jc(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:GT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ks.Z.h.call(this)}}$e(ks,Ke);var GT={2:"touch",3:"pen",4:"mouse"};ks.prototype.h=function(){ks.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Os="closure_listenable_"+(1e6*Math.random()|0),QT=0;function YT(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++QT,this.ca=this.fa=!1}function oo(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ao(t){this.src=t,this.g={},this.h=0}ao.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Qc(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new YT(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function Gc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=jd(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(oo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Qc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var Yc="closure_lm_"+(1e6*Math.random()|0),Jc={};function tp(t,e,n,r,s){if(r&&r.once)return rp(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)tp(t,e[i],n,r,s);return null}return n=tl(n),t&&t[Os]?t.N(e,n,Ns(r)?!!r.capture:!!r,s):np(t,e,n,!1,r,s)}function np(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Ns(s)?!!s.capture:!!s,a=Zc(t);if(a||(t[Yc]=a=new ao(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=JT(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)WT||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(ip(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function JT(){function t(n){return e.call(t.src,t.listener,n)}var e=XT;return t}function rp(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)rp(t,e[i],n,r,s);return null}return n=tl(n),t&&t[Os]?t.O(e,n,Ns(r)?!!r.capture:!!r,s):np(t,e,n,!0,r,s)}function sp(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)sp(t,e[i],n,r,s);else r=Ns(r)?!!r.capture:!!r,n=tl(n),t&&t[Os]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Qc(i,n,r,s),-1<n&&(oo(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Zc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Qc(e,n,r,s)),(n=-1<t?e[t]:null)&&Xc(n))}function Xc(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Os])Gc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(ip(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Zc(e))?(Gc(n,t),n.h==0&&(n.src=null,e[Yc]=null)):oo(t)}}}function ip(t){return t in Jc?Jc[t]:Jc[t]="on"+t}function XT(t,e){if(t.ca)t=!0;else{e=new ks(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Xc(t),t=n.call(r,e)}return t}function Zc(t){return t=t[Yc],t instanceof ao?t:null}var el="__closure_events_fn_"+(1e9*Math.random()>>>0);function tl(t){return typeof t=="function"?t:(t[el]||(t[el]=function(e){return t.handleEvent(e)}),t[el])}function Me(){fn.call(this),this.i=new ao(this),this.P=this,this.I=null}$e(Me,fn);Me.prototype[Os]=!0;Me.prototype.removeEventListener=function(t,e,n,r){sp(this,t,e,n,r)};function Be(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Ke(e,t);else if(e instanceof Ke)e.target=e.target||t;else{var s=e;e=new Ke(r,t),Yd(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=co(o,r,!0,e)&&s}if(o=e.g=t,s=co(o,r,!0,e)&&s,s=co(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=co(o,r,!1,e)&&s}Me.prototype.M=function(){if(Me.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)oo(n[r]);delete t.g[e],t.h--}}this.I=null};Me.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Me.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function co(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Gc(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var nl=W.JSON.stringify;function ZT(){var t=ap;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class e0{constructor(){this.h=this.g=null}add(e,n){const r=op.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var op=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new t0,t=>t.reset());class t0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function n0(t){W.setTimeout(()=>{throw t},0)}function rl(t,e){sl||r0(),il||(sl(),il=!0),ap.add(t,e)}var sl;function r0(){var t=W.Promise.resolve(void 0);sl=function(){t.then(s0)}}var il=!1,ap=new e0;function s0(){for(var t;t=ZT();){try{t.h.call(t.g)}catch(n){n0(n)}var e=op;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}il=!1}function lo(t,e){Me.call(this),this.h=t||1,this.g=e||W,this.j=Ve(this.kb,this),this.l=Date.now()}$e(lo,Me);D=lo.prototype;D.da=!1;D.S=null;D.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Be(this,"tick"),this.da&&(ol(this),this.start()))}};D.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ol(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}D.M=function(){lo.Z.M.call(this),ol(this),delete this.g};function al(t,e,n){if(typeof t=="function")n&&(t=Ve(t,n));else if(t&&typeof t.handleEvent=="function")t=Ve(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function cp(t){t.g=al(()=>{t.g=null,t.i&&(t.i=!1,cp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class i0 extends fn{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:cp(this)}M(){super.M(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ds(t){fn.call(this),this.h=t,this.g={}}$e(Ds,fn);var lp=[];function up(t,e,n,r){Array.isArray(n)||(n&&(lp[0]=n.toString()),n=lp);for(var s=0;s<n.length;s++){var i=tp(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function hp(t){Bc(t.g,function(e,n){this.g.hasOwnProperty(n)&&Xc(e)},t),t.g={}}Ds.prototype.M=function(){Ds.Z.M.call(this),hp(this)};Ds.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function uo(){this.g=!0}uo.prototype.Aa=function(){this.g=!1};function o0(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function a0(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Ar(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+l0(t,n)+(r?" "+r:"")})}function c0(t,e){t.info(function(){return"TIMEOUT: "+e})}uo.prototype.info=function(){};function l0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return nl(n)}catch{return e}}var xn={},fp=null;function ho(){return fp=fp||new Me}xn.Ma="serverreachability";function dp(t){Ke.call(this,xn.Ma,t)}$e(dp,Ke);function Ps(t){const e=ho();Be(e,new dp(e,t))}xn.STAT_EVENT="statevent";function pp(t,e){Ke.call(this,xn.STAT_EVENT,t),this.stat=e}$e(pp,Ke);function et(t){const e=ho();Be(e,new pp(e,t))}xn.Na="timingevent";function gp(t,e){Ke.call(this,xn.Na,t),this.size=e}$e(gp,Ke);function Ls(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){t()},e)}var fo={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},mp={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function cl(){}cl.prototype.h=null;function yp(t){return t.h||(t.h=t.i())}function vp(){}var Ms={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ll(){Ke.call(this,"d")}$e(ll,Ke);function ul(){Ke.call(this,"c")}$e(ul,Ke);var hl;function po(){}$e(po,cl);po.prototype.g=function(){return new XMLHttpRequest};po.prototype.i=function(){return{}};hl=new po;function xs(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Ds(this),this.P=u0,t=qc?125:void 0,this.W=new lo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new wp}function wp(){this.i=null,this.g="",this.h=!1}var u0=45e3,fl={},go={};D=xs.prototype;D.setTimeout=function(t){this.P=t};function dl(t,e,n){t.K=1,t.v=Eo(Kt(e)),t.s=n,t.U=!0,Ep(t,null)}function Ep(t,e){t.F=Date.now(),Us(t),t.A=Kt(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Np(n.h,"t",r),t.C=0,n=t.l.H,t.h=new wp,t.g=Xp(t.l,n?e:null,!t.s),0<t.O&&(t.L=new i0(Ve(t.Ia,t,t.g),t.O)),up(t.V,t.g,"readystatechange",t.gb),e=t.H?Gd(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ps(1),o0(t.j,t.u,t.A,t.m,t.X,t.s)}D.gb=function(t){t=t.target;const e=this.L;e&&zt(t)==3?e.l():this.Ia(t)};D.Ia=function(t){try{if(t==this.g)e:{const u=zt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||qc||this.g&&(this.h.h||this.g.ga()||Bp(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Ps(3):Ps(2)),mo(this);var n=this.g.ba();this.N=n;t:if(_p(this)){var r=Bp(this.g);t="";var s=r.length,i=zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Un(this),Fs(this);var o="";break t}this.h.i=new W.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,a0(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!so(a)){var l=a;break t}}l=null}if(n=l)Ar(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,pl(this,n);else{this.i=!1,this.o=3,et(12),Un(this),Fs(this);break e}}this.U?(Ip(this,u,o),qc&&this.i&&u==3&&(up(this.V,this.W,"tick",this.fb),this.W.start())):(Ar(this.j,this.m,o,null),pl(this,o)),u==4&&Un(this),this.i&&!this.I&&(u==4?Gp(this.l,this):(this.i=!1,Us(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,et(12)):(this.o=0,et(13)),Un(this),Fs(this)}}}catch{}finally{}};function _p(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Ip(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=h0(t,n),s==go){e==4&&(t.o=4,et(14),r=!1),Ar(t.j,t.m,null,"[Incomplete Response]");break}else if(s==fl){t.o=4,et(15),Ar(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ar(t.j,t.m,s,null),pl(t,s);_p(t)&&s!=go&&s!=fl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,et(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Sl(e),e.L=!0,et(11))):(Ar(t.j,t.m,n,"[Invalid Chunked Response]"),Un(t),Fs(t))}D.fb=function(){if(this.g){var t=zt(this.g),e=this.g.ga();this.C<e.length&&(mo(this),Ip(this,t,e),this.i&&t!=4&&Us(this))}};function h0(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?go:(n=Number(e.substring(n,r)),isNaN(n)?fl:(r+=1,r+n>e.length?go:(e=e.substr(r,n),t.C=r+n,e)))}D.cancel=function(){this.I=!0,Un(this)};function Us(t){t.Y=Date.now()+t.P,Tp(t,t.P)}function Tp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ls(Ve(t.eb,t),e)}function mo(t){t.B&&(W.clearTimeout(t.B),t.B=null)}D.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(c0(this.j,this.A),this.K!=2&&(Ps(3),et(17)),Un(this),this.o=2,Fs(this)):Tp(this,this.Y-t)};function Fs(t){t.l.G==0||t.I||Gp(t.l,t)}function Un(t){mo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ol(t.W),hp(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function pl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||yl(n.i,t))){if(n.I=t.N,!t.J&&yl(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ao(n),bo(n);else break e;bl(n),et(18)}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=Ls(Ve(n.ab,n),6e3));if(1>=Dp(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else $n(n,11)}else if((t.J||n.g==t)&&Ao(n),!so(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const m=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var i=r.i;!i.g&&(Xe(m,"spdy")||Xe(m,"quic")||Xe(m,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(vl(i,i.h),i.h=null))}if(r.D){const S=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;S&&(r.sa=S,Ie(r.F,r.D,S))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Jp(r,r.H?r.la:null,r.W),o.J){Pp(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(mo(a),Us(a)),r.g=o}else zp(r);0<n.l.length&&So(n)}else l[0]!="stop"&&l[0]!="close"||$n(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?$n(n,7):Il(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Ps(4)}catch{}}function f0(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Uc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function gl(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Uc(t)||typeof t=="string")qd(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Uc(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=f0(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function Cr(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Cr)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}D=Cr.prototype;D.R=function(){ml(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};D.T=function(){return ml(this),this.g.concat()};function ml(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Fn(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],Fn(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}D.get=function(t,e){return Fn(this.h,t)?this.h[t]:e};D.set=function(t,e){Fn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};D.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function Fn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var bp=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function d0(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Vn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Vn){this.g=e!==void 0?e:t.g,yo(this,t.j),this.s=t.s,vo(this,t.i),wo(this,t.m),this.l=t.l,e=t.h;var n=new Bs;n.i=e.i,e.g&&(n.g=new Cr(e.g),n.h=e.h),Sp(this,n),this.o=t.o}else t&&(n=String(t).match(bp))?(this.g=!!e,yo(this,n[1]||"",!0),this.s=Vs(n[2]||""),vo(this,n[3]||"",!0),wo(this,n[4]),this.l=Vs(n[5]||"",!0),Sp(this,n[6]||"",!0),this.o=Vs(n[7]||"")):(this.g=!!e,this.h=new Bs(null,this.g))}Vn.prototype.toString=function(){var t=[],e=this.j;e&&t.push($s(e,Ap,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push($s(e,Ap,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push($s(n,n.charAt(0)=="/"?v0:y0,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",$s(n,E0)),t.join("")};function Kt(t){return new Vn(t)}function yo(t,e,n){t.j=n?Vs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function vo(t,e,n){t.i=n?Vs(e,!0):e}function wo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Sp(t,e,n){e instanceof Bs?(t.h=e,_0(t.h,t.g)):(n||(e=$s(e,w0)),t.h=new Bs(e,t.g))}function Ie(t,e,n){t.h.set(e,n)}function Eo(t){return Ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function p0(t){return t instanceof Vn?Kt(t):new Vn(t,void 0)}function g0(t,e,n,r){var s=new Vn(null,void 0);return t&&yo(s,t),e&&vo(s,e),n&&wo(s,n),r&&(s.l=r),s}function Vs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function $s(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,m0),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function m0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ap=/[#\/\?@]/g,y0=/[#\?:]/g,v0=/[#\?]/g,w0=/[#\?@]/g,E0=/#/g;function Bs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function dn(t){t.g||(t.g=new Cr,t.h=0,t.i&&d0(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=Bs.prototype;D.add=function(t,e){dn(this),this.i=null,t=Rr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Cp(t,e){dn(t),e=Rr(t,e),Fn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Fn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&ml(t)))}function Rp(t,e){return dn(t),e=Rr(t,e),Fn(t.g.h,e)}D.forEach=function(t,e){dn(this),this.g.forEach(function(n,r){qd(n,function(s){t.call(e,s,r,this)},this)},this)};D.T=function(){dn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};D.R=function(t){dn(this);var e=[];if(typeof t=="string")Rp(this,t)&&(e=Hd(e,this.g.get(Rr(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Hd(e,t[n])}return e};D.set=function(t,e){return dn(this),this.i=null,t=Rr(this,t),Rp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Np(t,e,n){Cp(t,e),0<n.length&&(t.i=null,t.g.set(Rr(t,e),Vc(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function Rr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function _0(t,e){e&&!t.j&&(dn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Cp(this,r),Np(this,s,n))},t)),t.j=e}var I0=class{constructor(t,e){this.h=t,this.g=e}};function kp(t){this.l=t||T0,W.PerformanceNavigationTiming?(t=W.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(W.g&&W.g.Ea&&W.g.Ea()&&W.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var T0=10;function Op(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Dp(t){return t.h?1:t.g?t.g.size:0}function yl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function vl(t,e){t.g?t.g.add(e):t.h=e}function Pp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}kp.prototype.cancel=function(){if(this.i=Lp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Lp(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Vc(t.i)}function wl(){}wl.prototype.stringify=function(t){return W.JSON.stringify(t,void 0)};wl.prototype.parse=function(t){return W.JSON.parse(t,void 0)};function b0(){this.g=new wl}function S0(t,e,n){const r=n||"";try{gl(t,function(s,i){let o=s;Ns(s)&&(o=nl(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function A0(t,e){const n=new uo;if(W.Image){const r=new Image;r.onload=ro(_o,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ro(_o,n,r,"TestLoadImage: error",!1,e),r.onabort=ro(_o,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ro(_o,n,r,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function _o(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function js(t){this.l=t.$b||null,this.j=t.ib||!1}$e(js,cl);js.prototype.g=function(){return new Io(this.l,this.j)};js.prototype.i=function(t){return function(){return t}}({});function Io(t,e){Me.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=El,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$e(Io,Me);var El=0;D=Io.prototype;D.open=function(t,e){if(this.readyState!=El)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Hs(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||W).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qs(this)),this.readyState=El};D.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Hs(this)),this.g&&(this.readyState=3,Hs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof W.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Mp(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Mp(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}D.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?qs(this):Hs(this),this.readyState==3&&Mp(this)}};D.Ua=function(t){this.g&&(this.response=this.responseText=t,qs(this))};D.Ta=function(t){this.g&&(this.response=t,qs(this))};D.ha=function(){this.g&&qs(this)};function qs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Hs(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Hs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Io.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var C0=W.JSON.parse;function Re(t){Me.call(this),this.headers=new Cr,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=xp,this.K=this.L=!1}$e(Re,Me);var xp="",R0=/^https?$/i,N0=["POST","PUT"];D=Re.prototype;D.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():hl.g(),this.C=this.u?yp(this.u):yp(hl),this.g.onreadystatechange=Ve(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Up(this,i);return}t=n||"";const s=new Cr(this.headers);r&&gl(r,function(i,o){s.set(o,i)}),r=$T(s.T()),n=W.FormData&&t instanceof W.FormData,!(0<=jd(N0,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{$p(this),0<this.B&&((this.K=k0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ve(this.pa,this)):this.A=al(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Up(this,i)}};function k0(t){return Sr&&KT()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function O0(t){return t.toLowerCase()=="content-type"}D.pa=function(){typeof xc!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Be(this,"timeout"),this.abort(8))};function Up(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Fp(t),To(t)}function Fp(t){t.D||(t.D=!0,Be(t,"complete"),Be(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Be(this,"complete"),Be(this,"abort"),To(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),To(this,!0)),Re.Z.M.call(this)};D.Fa=function(){this.s||(this.F||this.v||this.l?Vp(this):this.cb())};D.cb=function(){Vp(this)};function Vp(t){if(t.h&&typeof xc!="undefined"&&(!t.C[1]||zt(t)!=4||t.ba()!=2)){if(t.v&&zt(t)==4)al(t.Fa,0,t);else if(Be(t,"readystatechange"),zt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(bp)[1]||null;if(!s&&W.self&&W.self.location){var i=W.self.location.protocol;s=i.substr(0,i.length-1)}r=!R0.test(s?s.toLowerCase():"")}n=r}if(n)Be(t,"complete"),Be(t,"success");else{t.m=6;try{var o=2<zt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Fp(t)}}finally{To(t)}}}}function To(t,e){if(t.g){$p(t);const n=t.g,r=t.C[0]?no:null;t.g=null,t.C=null,e||Be(t,"ready");try{n.onreadystatechange=r}catch{}}}function $p(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(W.clearTimeout(t.A),t.A=null)}function zt(t){return t.g?t.g.readyState:0}D.ba=function(){try{return 2<zt(this)?this.g.status:-1}catch{return-1}};D.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),C0(e)}};function Bp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case xp:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Da=function(){return this.m};D.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function D0(t){let e="";return Bc(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function _l(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=D0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ie(t,e,n))}function Ks(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function jp(t){this.za=0,this.l=[],this.h=new uo,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ks("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ks("baseRetryDelayMs",5e3,t),this.$a=Ks("retryDelaySeedMs",1e4,t),this.Ya=Ks("forwardChannelMaxRetries",2,t),this.ra=Ks("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new kp(t&&t.concurrentRequestLimit),this.Ca=new b0,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}D=jp.prototype;D.ma=8;D.G=1;function Il(t){if(qp(t),t.G==3){var e=t.V++,n=Kt(t.F);Ie(n,"SID",t.J),Ie(n,"RID",e),Ie(n,"TYPE","terminate"),zs(t,n),e=new xs(t,t.h,e,void 0),e.K=2,e.v=Eo(Kt(n)),n=!1,W.navigator&&W.navigator.sendBeacon&&(n=W.navigator.sendBeacon(e.v.toString(),"")),!n&&W.Image&&(new Image().src=e.v,n=!0),n||(e.g=Xp(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Us(e)}Yp(t)}D.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function bo(t){t.g&&(Sl(t),t.g.cancel(),t.g=null)}function qp(t){bo(t),t.u&&(W.clearTimeout(t.u),t.u=null),Ao(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&W.clearTimeout(t.m),t.m=null)}function Tl(t,e){t.l.push(new I0(t.Za++,e)),t.G==3&&So(t)}function So(t){Op(t.i)||t.m||(t.m=!0,rl(t.Ha,t),t.C=0)}function P0(t,e){return Dp(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Ls(Ve(t.Ha,t,e),Qp(t,t.C)),t.C++,!0)}D.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new xs(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Gd(i),Yd(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Kp(this,s,e),n=Kt(this.F),Ie(n,"RID",t),Ie(n,"CVER",22),this.D&&Ie(n,"X-HTTP-Session-Id",this.D),zs(this,n),this.o&&i&&_l(n,this.o,i),vl(this.i,s),this.Ra&&Ie(n,"TYPE","init"),this.ja?(Ie(n,"$req",e),Ie(n,"SID","null"),s.$=!0,dl(s,n,null)):dl(s,n,e),this.G=2}}else this.G==3&&(t?Hp(this,t):this.l.length==0||Op(this.i)||Hp(this))};function Hp(t,e){var n;e?n=e.m:n=t.V++;const r=Kt(t.F);Ie(r,"SID",t.J),Ie(r,"RID",n),Ie(r,"AID",t.U),zs(t,r),t.o&&t.s&&_l(r,t.o,t.s),n=new xs(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Kp(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),vl(t.i,n),dl(n,r,e)}function zs(t,e){t.j&&gl({},function(n,r){Ie(e,r,n)})}function Kp(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Ve(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].h;const u=s[c].g;if(l-=i,0>l)i=Math.max(0,s[c].h-100),a=!1;else try{S0(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function zp(t){t.g||t.u||(t.Y=1,rl(t.Ga,t),t.A=0)}function bl(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Ls(Ve(t.Ga,t),Qp(t,t.A)),t.A++,!0)}D.Ga=function(){if(this.u=null,Wp(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Ls(Ve(this.bb,this),t)}};D.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,et(10),bo(this),Wp(this))};function Sl(t){t.B!=null&&(W.clearTimeout(t.B),t.B=null)}function Wp(t){t.g=new xs(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Kt(t.oa);Ie(e,"RID","rpc"),Ie(e,"SID",t.J),Ie(e,"CI",t.N?"0":"1"),Ie(e,"AID",t.U),zs(t,e),Ie(e,"TYPE","xmlhttp"),t.o&&t.s&&_l(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Eo(Kt(e)),n.s=null,n.U=!0,Ep(n,t)}D.ab=function(){this.v!=null&&(this.v=null,bo(this),bl(this),et(19))};function Ao(t){t.v!=null&&(W.clearTimeout(t.v),t.v=null)}function Gp(t,e){var n=null;if(t.g==e){Ao(t),Sl(t),t.g=null;var r=2}else if(yl(t.i,e))n=e.D,Pp(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=ho(),Be(r,new gp(r,n,e,s)),So(t)}else zp(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&P0(t,e)||r==2&&bl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:$n(t,5);break;case 4:$n(t,10);break;case 3:$n(t,6);break;default:$n(t,2)}}}function Qp(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function $n(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Ve(t.jb,t);n||(n=new Vn("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||yo(n,"https"),Eo(n)),A0(n.toString(),r)}else et(2);t.G=0,t.j&&t.j.va(e),Yp(t),qp(t)}D.jb=function(t){t?(this.h.info("Successfully pinged google.com"),et(2)):(this.h.info("Failed to ping google.com"),et(1))};function Yp(t){t.G=0,t.I=-1,t.j&&((Lp(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Vc(t.l),t.l.length=0),t.j.ua())}function Jp(t,e,n){let r=p0(n);if(r.i!="")e&&vo(r,e+"."+r.i),wo(r,r.m);else{const s=W.location;r=g0(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&Bc(t.aa,function(s,i){Ie(r,i,s)}),e=t.D,n=t.sa,e&&n&&Ie(r,e,n),Ie(r,"VER",t.ma),zs(t,r),r}function Xp(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Re(new js({ib:!0})):new Re(t.qa),e.L=t.H,e}function Zp(){}D=Zp.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Oa=function(){};function Co(){if(Sr&&!(10<=Number(zT)))throw Error("Environmental error: no available transport.")}Co.prototype.g=function(t,e){return new ft(t,e)};function ft(t,e){Me.call(this),this.g=new jp(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!so(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!so(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Nr(this)}$e(ft,Me);ft.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),rl(Ve(t.hb,t,e))),et(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Jp(t,null,t.W),So(t)};ft.prototype.close=function(){Il(this.g)};ft.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Tl(this.g,e)}else this.v?(e={},e.__data__=nl(t),Tl(this.g,e)):Tl(this.g,t)};ft.prototype.M=function(){this.g.j=null,delete this.j,Il(this.g),delete this.g,ft.Z.M.call(this)};function eg(t){ll.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}$e(eg,ll);function tg(){ul.call(this),this.status=1}$e(tg,ul);function Nr(t){this.g=t}$e(Nr,Zp);Nr.prototype.xa=function(){Be(this.g,"a")};Nr.prototype.wa=function(t){Be(this.g,new eg(t))};Nr.prototype.va=function(t){Be(this.g,new tg(t))};Nr.prototype.ua=function(){Be(this.g,"b")};Co.prototype.createWebChannel=Co.prototype.g;ft.prototype.send=ft.prototype.u;ft.prototype.open=ft.prototype.m;ft.prototype.close=ft.prototype.close;fo.NO_ERROR=0;fo.TIMEOUT=8;fo.HTTP_ERROR=6;mp.COMPLETE="complete";vp.EventType=Ms;Ms.OPEN="a";Ms.CLOSE="b";Ms.ERROR="c";Ms.MESSAGE="d";Me.prototype.listen=Me.prototype.N;Re.prototype.listenOnce=Re.prototype.O;Re.prototype.getLastError=Re.prototype.La;Re.prototype.getLastErrorCode=Re.prototype.Da;Re.prototype.getStatus=Re.prototype.ba;Re.prototype.getResponseJson=Re.prototype.Qa;Re.prototype.getResponseText=Re.prototype.ga;Re.prototype.send=Re.prototype.ea;var L0=function(){return new Co},M0=function(){return ho()},Al=fo,x0=mp,U0=xn,ng={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},F0=js,Ro=vp,V0=Re;const rg="@firebase/firestore";/**
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
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
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
 */let kr="9.5.0";/**
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
 */const Bn=new gc("@firebase/firestore");function sg(){return Bn.logLevel}function B(t,...e){if(Bn.logLevel<=ie.DEBUG){const n=e.map(Cl);Bn.debug(`Firestore (${kr}): ${t}`,...n)}}function pn(t,...e){if(Bn.logLevel<=ie.ERROR){const n=e.map(Cl);Bn.error(`Firestore (${kr}): ${t}`,...n)}}function ig(t,...e){if(Bn.logLevel<=ie.WARN){const n=e.map(Cl);Bn.warn(`Firestore (${kr}): ${t}`,...n)}}function Cl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${kr}) INTERNAL ASSERTION FAILED: `+t;throw pn(e),new Error(e)}function ve(t,e){t||Q()}function Y(t,e){return t}/**
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
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class gn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class $0{constructor(e,n){this.user=n,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class B0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class j0{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new gn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new gn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{B("FirebaseCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(B("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new gn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string"),new $0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new it(e)}}class q0{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=it.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},n=this.h.auth.getAuthHeaderValueForFirstParty([]);return n&&(e.Authorization=n),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class H0{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new q0(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
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
 */class Rl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.g(r),this.p=r=>n.writeSequenceNumber(r))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}/**
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
 */function K0(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */Rl.T=-1;class og{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=K0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function Or(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class dt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return dt.fromMillis(Date.now())}static fromDate(e){return dt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new dt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new dt(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function ag(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function jn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function cg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ws{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ws.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ws?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends Ws{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(w.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const z0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends Ws{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return z0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new L(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new L(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new L(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new L(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
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
 */class Gs{constructor(e){this.fields=e,e.sort(ot.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Or(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new ze(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new ze(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ze.EMPTY_BYTE_STRING=new ze("");const W0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mn(t){if(ve(!!t),typeof t=="string"){let e=0;const n=W0.exec(t);if(ve(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Dr(t){return typeof t=="string"?ze.fromBase64String(t):ze.fromUint8Array(t)}/**
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
 */function lg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ug(t){const e=t.mapValue.fields.__previous_value__;return lg(e)?ug(e):e}function Qs(t){const e=mn(t.mapValue.fields.__local_write_time__.timestampValue);return new dt(e.seconds,e.nanos)}/**
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
 */function Pr(t){return t==null}function No(t){return t===0&&1/t==-1/0}function G0(t){return typeof t=="number"&&Number.isInteger(t)&&!No(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Te.fromString(e))}static fromName(e){return new K(Te.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Te(e.slice()))}}/**
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
 */function qn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?lg(t)?4:10:Q()}function Mt(t,e){const n=qn(t);if(n!==qn(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Qs(t).isEqual(Qs(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=mn(r.timestampValue),o=mn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Dr(r.bytesValue).isEqual(Dr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Ne(r.geoPointValue.latitude)===Ne(s.geoPointValue.latitude)&&Ne(r.geoPointValue.longitude)===Ne(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Ne(r.integerValue)===Ne(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Ne(r.doubleValue),o=Ne(s.doubleValue);return i===o?No(i)===No(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Or(t.arrayValue.values||[],e.arrayValue.values||[],Mt);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(ag(i)!==ag(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Mt(i[a],o[a])))return!1;return!0}(t,e);default:return Q()}}function Ys(t,e){return(t.values||[]).find(n=>Mt(n,e))!==void 0}function Lr(t,e){const n=qn(t),r=qn(e);if(n!==r)return ce(n,r);switch(n){case 0:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Ne(s.integerValue||s.doubleValue),a=Ne(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return hg(t.timestampValue,e.timestampValue);case 4:return hg(Qs(t),Qs(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Dr(s),a=Dr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ce(o[c],a[c]);if(l!==0)return l}return ce(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=ce(Ne(s.latitude),Ne(i.latitude));return o!==0?o:ce(Ne(s.longitude),Ne(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Lr(o[c],a[c]);if(l)return l}return ce(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ce(a[u],l[u]);if(h!==0)return h;const f=Lr(o[a[u]],c[l[u]]);if(f!==0)return f}return ce(a.length,l.length)}(t.mapValue,e.mapValue);default:throw Q()}}function hg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=mn(t),r=mn(e),s=ce(n.seconds,r.seconds);return s!==0?s:ce(n.nanos,r.nanos)}function Nl(t){return kl(t)}function kl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=mn(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Dr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,K.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=kl(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${kl(r.fields[a])}`;return i+"}"}(t.mapValue):Q();var e,n}function fg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ol(t){return!!t&&"integerValue"in t}function Dl(t){return!!t&&"arrayValue"in t}function dg(t){return!!t&&"nullValue"in t}function pg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ko(t){return!!t&&"mapValue"in t}function Js(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return jn(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Js(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Js(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
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
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ko(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Js(n)}setAll(e){let n=ot.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Js(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ko(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Mt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ko(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){jn(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new pt(Js(this.value))}}function gg(t){const e=[];return jn(t.fields,(n,r)=>{const s=new ot([n]);if(ko(r)){const i=gg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Gs(e)}/**
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
 */class We{constructor(e,n,r,s,i){this.key=e,this.documentType=n,this.version=r,this.data=s,this.documentState=i}static newInvalidDocument(e){return new We(e,0,ae.min(),pt.empty(),0)}static newFoundDocument(e,n,r){return new We(e,1,n,r,0)}static newNoDocument(e,n){return new We(e,2,n,pt.empty(),0)}static newUnknownDocument(e,n){return new We(e,3,n,pt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof We&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new We(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Q0{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.A=null}}function mg(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Q0(t,e,n,r,s,i,o)}function Pl(t){const e=Y(t);if(e.A===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>J0(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Pr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=Oo(e.startAt)),e.endAt&&(n+="|ub:",n+=Oo(e.endAt)),e.A=n}return e.A}function Y0(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Nl(r.value)}`;var r}).join(", ")}]`),Pr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Oo(t.startAt)),t.endAt&&(e+=", endAt: "+Oo(t.endAt)),`Target(${e})`}function Ll(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!ib(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!Mt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!wg(t.startAt,e.startAt)&&wg(t.endAt,e.endAt)}function Ml(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class tt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.R(e,n,r):new X0(e,n,r):n==="array-contains"?new tb(e,r):n==="in"?new nb(e,r):n==="not-in"?new rb(e,r):n==="array-contains-any"?new sb(e,r):new tt(e,n,r)}static R(e,n,r){return n==="in"?new Z0(e,r):new eb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.P(Lr(n,this.value)):n!==null&&qn(this.value)===qn(n)&&this.P(Lr(n,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function J0(t){return t.field.canonicalString()+t.op.toString()+Nl(t.value)}class X0 extends tt{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.P(n)}}class Z0 extends tt{constructor(e,n){super(e,"in",n),this.keys=yg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class eb extends tt{constructor(e,n){super(e,"not-in",n),this.keys=yg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function yg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class tb extends tt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Dl(n)&&Ys(n.arrayValue,this.value)}}class nb extends tt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ys(this.value.arrayValue,n)}}class rb extends tt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ys(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ys(this.value.arrayValue,n)}}class sb extends tt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Dl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ys(this.value.arrayValue,r))}}class xl{constructor(e,n){this.position=e,this.before=n}}function Oo(t){return`${t.before?"b":"a"}:${t.position.map(e=>Nl(e)).join(",")}`}class Mr{constructor(e,n="asc"){this.field=e,this.dir=n}}function ib(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function vg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=Lr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return t.before?r<=0:r<0}function wg(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Mt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class xr{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.V=null,this.S=null,this.startAt,this.endAt}}function ob(t,e,n,r,s,i,o,a){return new xr(t,e,n,r,s,i,o,a)}function Eg(t){return new xr(t)}function Do(t){return!Pr(t.limit)&&t.limitType==="F"}function Po(t){return!Pr(t.limit)&&t.limitType==="L"}function Ul(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Fl(t){for(const e of t.filters)if(e.v())return e.field;return null}function _g(t){return t.collectionGroup!==null}function Xs(t){const e=Y(t);if(e.V===null){e.V=[];const n=Fl(e),r=Ul(e);if(n!==null&&r===null)n.isKeyField()||e.V.push(new Mr(n)),e.V.push(new Mr(ot.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.V.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new Mr(ot.keyField(),i))}}}return e.V}function Hn(t){const e=Y(t);if(!e.S)if(e.limitType==="F")e.S=mg(e.path,e.collectionGroup,Xs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Xs(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Mr(i.field,o))}const r=e.endAt?new xl(e.endAt.position,!e.endAt.before):null,s=e.startAt?new xl(e.startAt.position,!e.startAt.before):null;e.S=mg(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.S}function ab(t,e,n){return new xr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Lo(t,e){return Ll(Hn(t),Hn(e))&&t.limitType===e.limitType}function Ig(t){return`${Pl(Hn(t))}|lt:${t.limitType}`}function Vl(t){return`Query(target=${Y0(Hn(t))}; limitType=${t.limitType})`}function Mo(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):K.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!vg(n.startAt,Xs(n),r)||n.endAt&&vg(n.endAt,Xs(n),r))}(t,e)}function Tg(t){return(e,n)=>{let r=!1;for(const s of Xs(t)){const i=cb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function cb(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Lr(a,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
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
 */function bg(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:No(e)?"-0":e}}function Sg(t){return{integerValue:""+t}}function lb(t,e){return G0(e)?Sg(e):bg(t,e)}/**
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
 */class xo{constructor(){this._=void 0}}function ub(t,e,n){return t instanceof Uo?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Zs?Cg(t,e):t instanceof ei?Rg(t,e):function(r,s){const i=Ag(r,s),o=Ng(i)+Ng(r.C);return Ol(i)&&Ol(r.C)?Sg(o):bg(r.N,o)}(t,e)}function hb(t,e,n){return t instanceof Zs?Cg(t,e):t instanceof ei?Rg(t,e):n}function Ag(t,e){return t instanceof Fo?Ol(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Uo extends xo{}class Zs extends xo{constructor(e){super(),this.elements=e}}function Cg(t,e){const n=kg(e);for(const r of t.elements)n.some(s=>Mt(s,r))||n.push(r);return{arrayValue:{values:n}}}class ei extends xo{constructor(e){super(),this.elements=e}}function Rg(t,e){let n=kg(e);for(const r of t.elements)n=n.filter(s=>!Mt(s,r));return{arrayValue:{values:n}}}class Fo extends xo{constructor(e,n){super(),this.N=e,this.C=n}}function Ng(t){return Ne(t.integerValue||t.doubleValue)}function kg(t){return Dl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function fb(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Zs&&r instanceof Zs||n instanceof ei&&r instanceof ei?Or(n.elements,r.elements,Mt):n instanceof Fo&&r instanceof Fo?Mt(n.C,r.C):n instanceof Uo&&r instanceof Uo}(t.transform,e.transform)}class db{constructor(e,n){this.version=e,this.transformResults=n}}class Wt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wt}static exists(e){return new Wt(void 0,e)}static updateTime(e){return new Wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class $o{}function pb(t,e,n){t instanceof Bo?function(r,s,i){const o=r.value.clone(),a=Lg(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Kn?function(r,s,i){if(!Vo(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=Lg(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Pg(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function $l(t,e,n){t instanceof Bo?function(r,s,i){if(!Vo(r.precondition,s))return;const o=r.value.clone(),a=Mg(r.fieldTransforms,i,s);o.setAll(a),s.convertToFoundDocument(Dg(s),o).setHasLocalMutations()}(t,e,n):t instanceof Kn?function(r,s,i){if(!Vo(r.precondition,s))return;const o=Mg(r.fieldTransforms,i,s),a=s.data;a.setAll(Pg(r)),a.setAll(o),s.convertToFoundDocument(Dg(s),a).setHasLocalMutations()}(t,e,n):function(r,s){Vo(r.precondition,s)&&s.convertToNoDocument(ae.min())}(t,e)}function gb(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Ag(r.transform,s||null);i!=null&&(n==null&&(n=pt.empty()),n.set(r.field,i))}return n||null}function Og(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Or(n,r,(s,i)=>fb(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Dg(t){return t.isFoundDocument()?t.version:ae.min()}class Bo extends $o{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}}class Kn extends $o{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}}function Pg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Lg(t,e,n){const r=new Map;ve(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,hb(o,a,n[s]))}return r}function Mg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,ub(i,o,e))}return r}class xg extends $o{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class mb extends $o{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class yb{constructor(e){this.count=e}}/**
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
 */var ke,te;function vb(t){switch(t){default:return Q();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function Ug(t){if(t===void 0)return pn("GRPC error has no .code"),w.UNKNOWN;switch(t){case ke.OK:return w.OK;case ke.CANCELLED:return w.CANCELLED;case ke.UNKNOWN:return w.UNKNOWN;case ke.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case ke.INTERNAL:return w.INTERNAL;case ke.UNAVAILABLE:return w.UNAVAILABLE;case ke.UNAUTHENTICATED:return w.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case ke.NOT_FOUND:return w.NOT_FOUND;case ke.ALREADY_EXISTS:return w.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return w.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case ke.ABORTED:return w.ABORTED;case ke.OUT_OF_RANGE:return w.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return w.UNIMPLEMENTED;case ke.DATA_LOSS:return w.DATA_LOSS;default:return Q()}}(te=ke||(ke={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||je.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new jo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new jo(this.root,e,this.comparator,!1)}getReverseIterator(){return new jo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new jo(this.root,e,this.comparator,!0)}}class jo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:je.RED,this.left=s!=null?s:je.EMPTY,this.right=i!=null?i:je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new je(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return je.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(t,e,n,r,s){return this}insert(t,e,n){return new je(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class qe{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Fg(this.data.getIterator())}getIteratorFrom(e){return new Fg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new qe(this.comparator);return n.data=e,n}}class Fg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const wb=new Ge(K.comparator);function zn(){return wb}const Eb=new Ge(K.comparator);function Bl(){return Eb}const _b=new Ge(K.comparator);function Ib(){return _b}const Tb=new qe(K.comparator);function Ee(...t){let e=Tb;for(const n of t)e=e.add(n);return e}const bb=new qe(ce);function Vg(){return bb}/**
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
 */class qo{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,ti.createSynthesizedTargetChangeForCurrentChange(e,n)),new qo(ae.min(),r,Vg(),zn(),Ee())}}class ti{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new ti(ze.EMPTY_BYTE_STRING,n,Ee(),Ee(),Ee())}}/**
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
 */class Ho{constructor(e,n,r,s){this.k=e,this.removedTargetIds=n,this.key=r,this.$=s}}class $g{constructor(e,n){this.targetId=e,this.O=n}}class Bg{constructor(e,n,r=ze.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class jg{constructor(){this.F=0,this.M=Hg(),this.L=ze.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=Ee(),n=Ee(),r=Ee();return this.M.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Q()}}),new ti(this.L,this.B,e,n,r)}G(){this.U=!1,this.M=Hg()}H(e,n){this.U=!0,this.M=this.M.insert(e,n)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class Sb{constructor(e){this.tt=e,this.et=new Map,this.nt=zn(),this.st=qg(),this.it=new qe(ce)}rt(e){for(const n of e.k)e.$&&e.$.isFoundDocument()?this.ot(n,e.$):this.ct(n,e.key,e.$);for(const n of e.removedTargetIds)this.ct(n,e.key,e.$)}at(e){this.forEachTarget(e,n=>{const r=this.ut(n);switch(e.state){case 0:this.ht(n)&&r.j(e.resumeToken);break;case 1:r.X(),r.q||r.G(),r.j(e.resumeToken);break;case 2:r.X(),r.q||this.removeTarget(n);break;case 3:this.ht(n)&&(r.Z(),r.j(e.resumeToken));break;case 4:this.ht(n)&&(this.lt(n),r.j(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.et.forEach((r,s)=>{this.ht(s)&&n(s)})}ft(e){const n=e.targetId,r=e.O.count,s=this.dt(n);if(s){const i=s.target;if(Ml(i))if(r===0){const o=new K(i.path);this.ct(n,o,We.newNoDocument(o,ae.min()))}else ve(r===1);else this.wt(n)!==r&&(this.lt(n),this.it=this.it.add(n))}}_t(e){const n=new Map;this.et.forEach((i,o)=>{const a=this.dt(o);if(a){if(i.current&&Ml(a.target)){const c=new K(a.target.path);this.nt.get(c)!==null||this.gt(o,c)||this.ct(o,c,We.newNoDocument(c,e))}i.K&&(n.set(o,i.W()),i.G())}});let r=Ee();this.st.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.dt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))});const s=new qo(e,n,this.it,this.nt,r);return this.nt=zn(),this.st=qg(),this.it=new qe(ce),s}ot(e,n){if(!this.ht(e))return;const r=this.gt(e,n.key)?2:0;this.ut(e).H(n.key,r),this.nt=this.nt.insert(n.key,n),this.st=this.st.insert(n.key,this.yt(n.key).add(e))}ct(e,n,r){if(!this.ht(e))return;const s=this.ut(e);this.gt(e,n)?s.H(n,1):s.J(n),this.st=this.st.insert(n,this.yt(n).delete(e)),r&&(this.nt=this.nt.insert(n,r))}removeTarget(e){this.et.delete(e)}wt(e){const n=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let n=this.et.get(e);return n||(n=new jg,this.et.set(e,n)),n}yt(e){let n=this.st.get(e);return n||(n=new qe(ce),this.st=this.st.insert(e,n)),n}ht(e){const n=this.dt(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}dt(e){const n=this.et.get(e);return n&&n.q?null:this.tt.Tt(e)}lt(e){this.et.set(e,new jg),this.tt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}gt(e,n){return this.tt.getRemoteKeysForTarget(e).has(n)}}function qg(){return new Ge(K.comparator)}function Hg(){return new Ge(K.comparator)}/**
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
 */const Ab=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Cb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Rb{constructor(e,n){this.databaseId=e,this.D=n}}function Ko(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Kg(t,e){return t.D?e.toBase64():e.toUint8Array()}function Nb(t,e){return Ko(t,e.toTimestamp())}function Gt(t){return ve(!!t),ae.fromTimestamp(function(e){const n=mn(e);return new dt(n.seconds,n.nanos)}(t))}function jl(t,e){return function(n){return new Te(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function zg(t){const e=Te.fromString(t);return ve(Xg(e)),e}function ql(t,e){return jl(t.databaseId,e.path)}function Hl(t,e){const n=zg(e);if(n.get(1)!==t.databaseId.projectId)throw new L(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(Wg(n))}function Kl(t,e){return jl(t.databaseId,e)}function kb(t){const e=zg(t);return e.length===4?Te.emptyPath():Wg(e)}function zl(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Wg(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Gg(t,e,n){return{name:ql(t,e),fields:n.value.mapValue.fields}}function Ob(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.D?(ve(l===void 0||typeof l=="string"),ze.fromBase64String(l||"")):(ve(l===void 0||l instanceof Uint8Array),ze.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?w.UNKNOWN:Ug(c.code);return new L(l,c.message||"")}(o);n=new Bg(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Hl(t,r.document.name),i=Gt(r.document.updateTime),o=new pt({mapValue:{fields:r.document.fields}}),a=We.newFoundDocument(s,i,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Ho(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Hl(t,r.document),i=r.readTime?Gt(r.readTime):ae.min(),o=We.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Ho([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Hl(t,r.document),i=r.removedTargetIds||[];n=new Ho([],i,s,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new yb(s),o=r.targetId;n=new $g(o,i)}}return n}function Db(t,e){let n;if(e instanceof Bo)n={update:Gg(t,e.key,e.value)};else if(e instanceof xg)n={delete:ql(t,e.key)};else if(e instanceof Kn)n={update:Gg(t,e.key,e.data),updateMask:jb(e.fieldMask)};else{if(!(e instanceof mb))return Q();n={verify:ql(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Uo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Zs)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ei)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Fo)return{fieldPath:i.field.canonicalString(),increment:o.C};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:Nb(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(t,e.precondition)),n}function Pb(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?Gt(r.updateTime):Gt(s);return i.isEqual(ae.min())&&(i=Gt(s)),new db(i,r.transformResults||[])}(n,e))):[]}function Lb(t,e){return{documents:[Kl(t,e.path)]}}function Mb(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Kl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Kl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(a){if(a.length===0)return;const c=a.map(l=>function(u){if(u.op==="=="){if(pg(u.value))return{unaryFilter:{field:Ur(u.field),op:"IS_NAN"}};if(dg(u.value))return{unaryFilter:{field:Ur(u.field),op:"IS_NULL"}}}else if(u.op==="!="){if(pg(u.value))return{unaryFilter:{field:Ur(u.field),op:"IS_NOT_NAN"}};if(dg(u.value))return{unaryFilter:{field:Ur(u.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ur(u.field),op:Vb(u.op),value:u.value}}}(l));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(a){if(a.length!==0)return a.map(c=>function(l){return{field:Ur(l.field),direction:Fb(l.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(a,c){return a.D||Pr(c)?c:{value:c}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Yg(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Yg(e.endAt)),n}function xb(t){let e=kb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ve(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Qg(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Mr(Fr(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Pr(h)?null:h}(n.limit));let c=null;n.startAt&&(c=Jg(n.startAt));let l=null;return n.endAt&&(l=Jg(n.endAt)),ob(e,s,o,i,a,"F",c,l)}function Ub(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Q()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Qg(t){return t?t.unaryFilter!==void 0?[Bb(t)]:t.fieldFilter!==void 0?[$b(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Qg(e)).reduce((e,n)=>e.concat(n)):Q():[]}function Yg(t){return{before:t.before,values:t.position}}function Jg(t){const e=!!t.before,n=t.values||[];return new xl(n,e)}function Fb(t){return Ab[t]}function Vb(t){return Cb[t]}function Ur(t){return{fieldPath:t.canonicalString()}}function Fr(t){return ot.fromServerFormat(t.fieldPath)}function $b(t){return tt.create(Fr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(t.fieldFilter.op),t.fieldFilter.value)}function Bb(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Fr(t.unaryFilter.field);return tt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Fr(t.unaryFilter.field);return tt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Fr(t.unaryFilter.field);return tt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Fr(t.unaryFilter.field);return tt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}function jb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Xg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const qb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Hb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(s=>s?O.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}}function ni(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Kb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&pb(i,e,r[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&$l(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&$l(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),s=r;this.applyToLocalView(s),r.isValidDocument()||s.convertToNoDocument(ae.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&Or(this.mutations,e.mutations,(n,r)=>Og(n,r))&&Or(this.baseMutations,e.baseMutations,(n,r)=>Og(n,r))}}class Wl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ve(e.mutations.length===r.length);let s=Ib();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Wl(e,n,r,s)}}/**
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
 */class Wn{constructor(e,n,r,s,i=ae.min(),o=ae.min(),a=ze.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class zb{constructor(e){this.Wt=e}}function Wb(t){const e=xb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ab(e,e.limit,"L"):e}/**
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
 */class Gb{constructor(){this.Gt=new Qb}addToCollectionParentIndex(e,n){return this.Gt.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.Gt.getEntries(n))}}class Qb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new qe(Te.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new qe(Te.comparator)).toArray()}}/**
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
 */class Vr{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new Vr(0)}static ie(){return new Vr(-1)}}/**
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
 */async function ri(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==qb)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class si{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s!==void 0){for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),!0;return!1}forEach(e){jn(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return cg(this.inner)}}/**
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
 */class Yb{constructor(){this.changes=new si(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:ae.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:We.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Zg{constructor(e,n,r){this.He=e,this.In=n,this.Ht=r}An(e,n){return this.In.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Rn(e,n,r))}Rn(e,n,r){return this.He.getEntry(e,n).next(s=>{for(const i of r)i.applyToLocalView(s);return s})}bn(e,n){e.forEach((r,s)=>{for(const i of n)i.applyToLocalView(s)})}Pn(e,n){return this.He.getEntries(e,n).next(r=>this.vn(e,r).next(()=>r))}vn(e,n){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.bn(n,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return K.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.Vn(e,n.path):_g(n)?this.Sn(e,n,r):this.Dn(e,n,r)}Vn(e,n){return this.An(e,new K(n)).next(r=>{let s=Bl();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}Sn(e,n,r){const s=n.collectionGroup;let i=Bl();return this.Ht.getCollectionParents(e,s).next(o=>O.forEach(o,a=>{const c=function(l,u){return new xr(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.Dn(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}Dn(e,n,r){let s,i;return this.He.getDocumentsMatchingQuery(e,n,r).next(o=>(s=o,this.In.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(i=o,this.Cn(e,i,s).next(a=>{s=a;for(const c of i)for(const l of c.mutations){const u=l.key;let h=s.get(u);h==null&&(h=We.newInvalidDocument(u),s=s.insert(u,h)),$l(l,h,c.localWriteTime),h.isFoundDocument()||(s=s.remove(u))}}))).next(()=>(s.forEach((o,a)=>{Mo(n,a)||(s=s.remove(o))}),s))}Cn(e,n,r){let s=Ee();for(const o of n)for(const a of o.mutations)a instanceof Kn&&r.get(a.key)===null&&(s=s.add(a.key));let i=r;return this.He.getEntries(e,s).next(o=>(o.forEach((a,c)=>{c.isFoundDocument()&&(i=i.insert(a,c))}),i))}}/**
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
 */class Gl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Nn=r,this.xn=s}static kn(e,n){let r=Ee(),s=Ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Gl(e,n.fromCache,r,s)}}/**
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
 */class Jb{$n(e){this.On=e}getDocumentsMatchingQuery(e,n,r,s){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(ae.min())?this.Fn(e,n):this.On.Pn(e,s).next(i=>{const o=this.Mn(n,i);return(Do(n)||Po(n))&&this.Ln(n.limitType,o,s,r)?this.Fn(e,n):(sg()<=ie.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Vl(n)),this.On.getDocumentsMatchingQuery(e,n,r).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}Mn(e,n){let r=new qe(Tg(e));return n.forEach((s,i)=>{Mo(e,i)&&(r=r.add(i))}),r}Ln(e,n,r,s){if(r.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Fn(e,n){return sg()<=ie.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Vl(n)),this.On.getDocumentsMatchingQuery(e,n,ae.min())}}/**
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
 */class Xb{constructor(e,n,r,s){this.persistence=e,this.Bn=n,this.N=s,this.Un=new Ge(ce),this.qn=new si(i=>Pl(i),Ll),this.Kn=ae.min(),this.In=e.getMutationQueue(r),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new Zg(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Un))}}function Zb(t,e,n,r){return new Xb(t,e,n,r)}async function em(t,e){const n=Y(t);let r=n.In,s=n.Qn;const i=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.In.getAllMutationBatches(o).next(c=>(a=c,r=n.persistence.getMutationQueue(e),s=new Zg(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(o))).next(c=>{const l=[],u=[];let h=Ee();for(const f of a){l.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}for(const f of c){u.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}return s.Pn(o,h).next(f=>({Wn:f,removedBatchIds:l,addedBatchIds:u}))})});return n.In=r,n.Qn=s,n.Bn.$n(n.Qn),i}function eS(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.jn.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=O.resolve();return h.forEach(g=>{f=f.next(()=>l.getEntry(a,g)).next(m=>{const S=c.docVersions.get(g);ve(S!==null),m.version.compareTo(S)<0&&(u.applyToRemoteDocument(m,c),m.isValidDocument()&&l.addEntry(m,c.commitVersion))})}),f.next(()=>o.In.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.In.performConsistencyCheck(r)).next(()=>n.Qn.Pn(r,s))})}function tm(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ze.getLastRemoteSnapshotVersion(n))}function tS(t,e){const n=Y(t),r=e.snapshotVersion;let s=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});s=n.Un;const a=[];e.targetChanges.forEach((l,u)=>{const h=s.get(u);if(!h)return;a.push(n.ze.removeMatchingKeys(i,l.removedDocuments,u).next(()=>n.ze.addMatchingKeys(i,l.addedDocuments,u)));const f=l.resumeToken;if(f.approximateByteSize()>0){const g=h.withResumeToken(f,r).withSequenceNumber(i.currentSequenceNumber);s=s.insert(u,g),function(m,S,v){return ve(S.resumeToken.approximateByteSize()>0),m.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(h,g,l)&&a.push(n.ze.updateTargetData(i,g))}});let c=zn();if(e.documentUpdates.forEach((l,u)=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(nS(i,o,e.documentUpdates,r,void 0).next(l=>{c=l})),!r.isEqual(ae.min())){const l=n.ze.getLastRemoteSnapshotVersion(i).next(u=>n.ze.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return O.waitFor(a).next(()=>o.apply(i)).next(()=>n.Qn.vn(i,c)).next(()=>c)}).then(i=>(n.Un=s,i))}function nS(t,e,n,r,s){let i=Ee();return n.forEach(o=>i=i.add(o)),e.getEntries(t,i).next(o=>{let a=zn();return n.forEach((c,l)=>{const u=o.get(c),h=(s==null?void 0:s.get(c))||r;l.isNoDocument()&&l.version.isEqual(ae.min())?(e.removeEntry(c,h),a=a.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l,h),a=a.insert(c,l)):B("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),a})}function rS(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.In.getNextMutationBatchAfterBatchId(r,e)))}function sS(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.ze.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):n.ze.allocateTargetId(r).next(o=>(s=new Wn(e,o,0,r.currentSequenceNumber),n.ze.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Un.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Un=n.Un.insert(r.targetId,r),n.qn.set(e,r.targetId)),r})}async function Ql(t,e,n){const r=Y(t),s=r.Un.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ni(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Un=r.Un.remove(e),r.qn.delete(s.target)}function nm(t,e,n){const r=Y(t);let s=ae.min(),i=Ee();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=Y(a),h=u.qn.get(l);return h!==void 0?O.resolve(u.Un.get(h)):u.ze.getTargetData(c,l)}(r,o,Hn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Bn.getDocumentsMatchingQuery(o,e,n?s:ae.min(),n?i:Ee())).next(a=>({documents:a,Gn:i})))}/**
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
 */class iS{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return O.resolve(this.Yn.get(n))}saveBundleMetadata(e,n){var r;return this.Yn.set(n.id,{id:(r=n).id,version:r.version,createTime:Gt(r.createTime)}),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:Wb(r.bundledQuery),readTime:Gt(r.readTime)}}(n)),O.resolve()}}/**
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
 */class Yl{constructor(){this.Zn=new qe(xe.ts),this.es=new qe(xe.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new xe(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new xe(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}cs(e){const n=new K(new Te([])),r=new xe(n,e),s=new xe(n,e+1),i=[];return this.es.forEachInRange([r,s],o=>{this.rs(o),i.push(o.key)}),i}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new K(new Te([])),r=new xe(n,e),s=new xe(n,e+1);let i=Ee();return this.es.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new xe(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class xe{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return K.comparator(e.key,n.key)||ce(e.ls,n.ls)}static ns(e,n){return ce(e.ls,n.ls)||K.comparator(e.key,n.key)}}/**
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
 */class oS{constructor(e,n){this.Ht=e,this.referenceDelegate=n,this.In=[],this.fs=1,this.ds=new qe(xe.ts)}checkEmpty(e){return O.resolve(this.In.length===0)}addMutationBatch(e,n,r,s){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new Kb(i,n,r,s);this.In.push(o);for(const a of s)this.ds=this.ds.add(new xe(a.key,i)),this.Ht.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.ws(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this._s(r),i=s<0?0:s;return O.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(e){return O.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new xe(n,0),s=new xe(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([r,s],o=>{const a=this.ws(o.ls);i.push(a)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new qe(ce);return n.forEach(s=>{const i=new xe(s,0),o=new xe(s,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{r=r.add(a.ls)})}),O.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;K.isDocumentKey(i)||(i=i.child(""));const o=new xe(new K(i),0);let a=new qe(ce);return this.ds.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.ls)),!0)},o),O.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const s=this.ws(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ve(this.ys(n.batchId,"removed")===0),this.In.shift();let r=this.ds;return O.forEach(n.mutations,s=>{const i=new xe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ds=r})}te(e){}containsKey(e,n){const r=new xe(n,0),s=this.ds.firstAfterOrEqual(r);return O.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.In.length,O.resolve()}ys(e,n){return this._s(e)}_s(e){return this.In.length===0?0:e-this.In[0].batchId}ws(e){const n=this._s(e);return n<0||n>=this.In.length?null:this.In[n]}}/**
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
 */class aS{constructor(e,n){this.Ht=e,this.ps=n,this.docs=new Ge(K.comparator),this.size=0}addEntry(e,n,r){const s=n.key,i=this.docs.get(s),o=i?i.size:0,a=this.ps(n);return this.docs=this.docs.insert(s,{document:n.clone(),size:a,readTime:r}),this.size+=a-o,this.Ht.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.clone():We.newInvalidDocument(n))}getEntries(e,n){let r=zn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.clone():We.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r){let s=zn();const i=new K(n.path.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c,readTime:l}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;l.compareTo(r)<=0||Mo(n,c)&&(s=s.insert(c.key,c.clone()))}return O.resolve(s)}Ts(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new cS(this)}getSize(e){return O.resolve(this.size)}}class cS extends Yb{constructor(e){super(),this.Se=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.document.isValidDocument()?n.push(this.Se.addEntry(e,s.document,this.getReadTime(r))):this.Se.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Se.getEntry(e,n)}getAllFromCache(e,n){return this.Se.getEntries(e,n)}}/**
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
 */class lS{constructor(e){this.persistence=e,this.Es=new si(n=>Pl(n),Ll),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.Is=0,this.As=new Yl,this.targetCount=0,this.Rs=Vr.se()}forEachTarget(e,n){return this.Es.forEach((r,s)=>n(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Is&&(this.Is=n),O.resolve()}ce(e){this.Es.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Vr(n),this.highestTargetId=n),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,n){return this.ce(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.ce(n),O.resolve()}removeTargetData(e,n){return this.Es.delete(n.target),this.As.cs(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Es.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Es.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.Es.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.As.cs(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.As.containsKey(n))}}/**
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
 */class uS{constructor(e,n){this.bs={},this.Le=new Rl(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new lS(this),this.Ht=new Gb,this.He=function(r,s){return new aS(r,s)}(this.Ht,r=>this.referenceDelegate.Ps(r)),this.N=new zb(n),this.Je=new iS(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new oS(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const s=new hS(this.Le.next());return this.referenceDelegate.vs(),r(s).next(i=>this.referenceDelegate.Vs(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ss(e,n){return O.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class hS extends Hb{constructor(e){super(),this.currentSequenceNumber=e}}class Jl{constructor(e){this.persistence=e,this.Ds=new Yl,this.Cs=null}static Ns(e){return new Jl(e)}get xs(){if(this.Cs)return this.Cs;throw Q()}addReference(e,n,r){return this.Ds.addReference(r,n),this.xs.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ds.removeReference(r,n),this.xs.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ds.cs(n.targetId).forEach(s=>this.xs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.xs.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}vs(){this.Cs=new Set}Vs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.xs,r=>{const s=K.fromPath(r);return this.ks(e,s).next(i=>{i||n.removeEntry(s)})}).next(()=>(this.Cs=null,n.apply(e)))}updateLimboDocument(e,n){return this.ks(e,n).next(r=>{r?this.xs.delete(n.toString()):this.xs.add(n.toString())})}Ps(e){return 0}ks(e,n){return O.or([()=>O.resolve(this.Ds.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ss(e,n)])}}class rm{constructor(){this.activeTargetIds=Vg()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fS{constructor(){this.yi=new rm,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,n,r){this.pi[e]=n}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new rm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class dS{Ti(e){}shutdown(){}}/**
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
 */class sm{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const pS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class gS{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
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
 */class mS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,n,r,s){const i=this.Bi(e,n);B("RestConnection","Sending: ",i,r);const o={};return this.Ui(o,s),this.qi(e,i,o,r).then(a=>(B("RestConnection","Received: ",a),a),a=>{throw ig("RestConnection",`${e} failed with error: `,a,"url: ",i,"request:",r),a})}Ki(e,n,r,s){return this.Li(e,n,r,s)}Ui(e,n){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+kr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n)for(const r in n.authHeaders)n.authHeaders.hasOwnProperty(r)&&(e[r]=n.authHeaders[r])}Bi(e,n){const r=pS[e];return`${this.Fi}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,n,r,s){return new Promise((i,o)=>{const a=new V0;a.listenOnce(x0.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Al.NO_ERROR:const l=a.getResponseJson();B("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Al.TIMEOUT:B("Connection",'RPC "'+e+'" timed out'),o(new L(w.DEADLINE_EXCEEDED,"Request time out"));break;case Al.HTTP_ERROR:const u=a.getStatus();if(B("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(m)>=0?m:w.UNKNOWN}(h.status);o(new L(f,h.message))}else o(new L(w.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new L(w.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{B("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}ji(e,n){const r=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=L0(),i=M0(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new F0({})),this.Ui(o.initMessageHeaders,n),zf()||Gf()||WE()||Qf()||GE()||Wf()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");B("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let l=!1,u=!1;const h=new gS({vi:g=>{u?B("Connection","Not sending because WebChannel is closed:",g):(l||(B("Connection","Opening WebChannel transport."),c.open(),l=!0),B("Connection","WebChannel sending:",g),c.send(g))},Vi:()=>c.close()}),f=(g,m,S)=>{g.listen(m,v=>{try{S(v)}catch(b){setTimeout(()=>{throw b},0)}})};return f(c,Ro.EventType.OPEN,()=>{u||B("Connection","WebChannel transport opened.")}),f(c,Ro.EventType.CLOSE,()=>{u||(u=!0,B("Connection","WebChannel transport closed"),h.$i())}),f(c,Ro.EventType.ERROR,g=>{u||(u=!0,ig("Connection","WebChannel transport errored:",g),h.$i(new L(w.UNAVAILABLE,"The operation could not be completed")))}),f(c,Ro.EventType.MESSAGE,g=>{var m;if(!u){const S=g.data[0];ve(!!S);const v=S,b=v.error||((m=v[0])===null||m===void 0?void 0:m.error);if(b){B("Connection","WebChannel received error:",b);const P=b.status;let q=function(le){const ge=ke[le];if(ge!==void 0)return Ug(ge)}(P),H=b.message;q===void 0&&(q=w.INTERNAL,H="Unknown error status: "+P+" with message "+b.message),u=!0,h.$i(new L(q,H)),c.close()}else B("Connection","WebChannel received:",S),h.Oi(S)}}),f(i,U0.STAT_EVENT,g=>{g.stat===ng.PROXY?B("Connection","Detected buffering proxy"):g.stat===ng.NOPROXY&&B("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.ki()},0),h}}function Xl(){return typeof document!="undefined"?document:null}/**
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
 */function zo(t){return new Rb(t,!0)}class im{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Oe=e,this.timerId=n,this.Qi=r,this.Wi=s,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const n=Math.floor(this.zi+this.Zi()),r=Math.max(0,Date.now()-this.Ji),s=Math.max(0,n-r);s>0&&B("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.zi} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,s,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
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
 */class om{constructor(e,n,r,s,i,o,a){this.Oe=e,this.er=r,this.nr=s,this.sr=i,this.credentialsProvider=o,this.listener=a,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new im(e,n)}ur(){return this.state===1||this.state===5||this.hr()}hr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&this.rr===null&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this._r()))}mr(e){this.gr(),this.stream.send(e)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,n){this.gr(),this.yr(),this.ar.cancel(),this.ir++,e!==4?this.ar.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(pn(n.toString()),pn("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.pr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(n)}pr(){}auth(){this.state=1;const e=this.Tr(this.ir),n=this.ir;this.credentialsProvider.getToken().then(r=>{this.ir===n&&this.Er(r)},r=>{e(()=>{const s=new L(w.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ir(s)})})}Er(e){const n=this.Tr(this.ir);this.stream=this.Ar(e),this.stream.Si(()=>{n(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,()=>(this.hr()&&(this.state=3),Promise.resolve())),this.listener.Si()))}),this.stream.Ci(r=>{n(()=>this.Ir(r))}),this.stream.onMessage(r=>{n(()=>this.onMessage(r))})}lr(){this.state=5,this.ar.Xi(async()=>{this.state=0,this.start()})}Ir(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Tr(e){return n=>{this.Oe.enqueueAndForget(()=>this.ir===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yS extends om{constructor(e,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i),this.N=s}Ar(e){return this.sr.ji("Listen",e)}onMessage(e){this.ar.reset();const n=Ob(this.N,e),r=function(s){if(!("targetChange"in s))return ae.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?ae.min():i.readTime?Gt(i.readTime):ae.min()}(e);return this.listener.Rr(n,r)}br(e){const n={};n.database=zl(this.N),n.addTarget=function(s,i){let o;const a=i.target;return o=Ml(a)?{documents:Lb(s,a)}:{query:Mb(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Kg(s,i.resumeToken):i.snapshotVersion.compareTo(ae.min())>0&&(o.readTime=Ko(s,i.snapshotVersion.toTimestamp())),o}(this.N,e);const r=Ub(this.N,e);r&&(n.labels=r),this.mr(n)}Pr(e){const n={};n.database=zl(this.N),n.removeTarget=e,this.mr(n)}}class vS extends om{constructor(e,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i),this.N=s,this.vr=!1}get Vr(){return this.vr}start(){this.vr=!1,this.lastStreamToken=void 0,super.start()}pr(){this.vr&&this.Sr([])}Ar(e){return this.sr.ji("Write",e)}onMessage(e){if(ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.vr){this.ar.reset();const n=Pb(e.writeResults,e.commitTime),r=Gt(e.commitTime);return this.listener.Dr(r,n)}return ve(!e.writeResults||e.writeResults.length===0),this.vr=!0,this.listener.Cr()}Nr(){const e={};e.database=zl(this.N),this.mr(e)}Sr(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Db(this.N,r))};this.mr(n)}}/**
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
 */class wS extends class{}{constructor(e,n,r){super(),this.credentials=e,this.sr=n,this.N=r,this.kr=!1}$r(){if(this.kr)throw new L(w.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,n,r){return this.$r(),this.credentials.getToken().then(s=>this.sr.Li(e,n,r,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===w.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new L(w.UNKNOWN,s.toString())})}Ki(e,n,r){return this.$r(),this.credentials.getToken().then(s=>this.sr.Ki(e,n,r,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===w.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new L(w.UNKNOWN,s.toString())})}terminate(){this.kr=!0}}class ES{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){this.Or===0&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve())))}qr(e){this.state==="Online"?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Br("Offline")))}set(e){this.Kr(),this.Or=0,e==="Online"&&(this.Mr=!1),this.Br(e)}Br(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ur(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?(pn(n),this.Mr=!1):B("OnlineStateTracker",n)}Kr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
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
 */class _S{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=i,this.zr.Ti(o=>{r.enqueueAndForget(async()=>{Gn(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Y(a);c.Wr.add(4),await ii(c),c.Hr.set("Unknown"),c.Wr.delete(4),await Wo(c)}(this))})}),this.Hr=new ES(r,s)}}async function Wo(t){if(Gn(t))for(const e of t.Gr)await e(!0)}async function ii(t){for(const e of t.Gr)await e(!1)}function am(t,e){const n=Y(t);n.Qr.has(e.targetId)||(n.Qr.set(e.targetId,e),tu(n)?eu(n):$r(n).hr()&&Zl(n,e))}function cm(t,e){const n=Y(t),r=$r(n);n.Qr.delete(e),r.hr()&&lm(n,e),n.Qr.size===0&&(r.hr()?r.wr():Gn(n)&&n.Hr.set("Unknown"))}function Zl(t,e){t.Jr.Y(e.targetId),$r(t).br(e)}function lm(t,e){t.Jr.Y(e),$r(t).Pr(e)}function eu(t){t.Jr=new Sb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.Qr.get(e)||null}),$r(t).start(),t.Hr.Lr()}function tu(t){return Gn(t)&&!$r(t).ur()&&t.Qr.size>0}function Gn(t){return Y(t).Wr.size===0}function um(t){t.Jr=void 0}async function IS(t){t.Qr.forEach((e,n)=>{Zl(t,e)})}async function TS(t,e){um(t),tu(t)?(t.Hr.qr(e),eu(t)):t.Hr.set("Unknown")}async function bS(t,e,n){if(t.Hr.set("Online"),e instanceof Bg&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.Qr.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.Qr.delete(o),r.Jr.removeTarget(o))}(t,e)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Go(t,r)}else if(e instanceof Ho?t.Jr.rt(e):e instanceof $g?t.Jr.ft(e):t.Jr.at(e),!n.isEqual(ae.min()))try{const r=await tm(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.Jr._t(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.Qr.get(c);l&&s.Qr.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.Qr.get(a);if(!c)return;s.Qr.set(a,c.withResumeToken(ze.EMPTY_BYTE_STRING,c.snapshotVersion)),lm(s,a);const l=new Wn(c.target,a,1,c.sequenceNumber);Zl(s,l)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await Go(t,r)}}async function Go(t,e,n){if(!ni(e))throw e;t.Wr.add(1),await ii(t),t.Hr.set("Offline"),n||(n=()=>tm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t.Wr.delete(1),await Wo(t)})}function hm(t,e){return e().catch(n=>Go(t,n,e))}async function Qo(t){const e=Y(t),n=yn(e);let r=e.jr.length>0?e.jr[e.jr.length-1].batchId:-1;for(;SS(e);)try{const s=await rS(e.localStore,r);if(s===null){e.jr.length===0&&n.wr();break}r=s.batchId,AS(e,s)}catch(s){await Go(e,s)}fm(e)&&dm(e)}function SS(t){return Gn(t)&&t.jr.length<10}function AS(t,e){t.jr.push(e);const n=yn(t);n.hr()&&n.Vr&&n.Sr(e.mutations)}function fm(t){return Gn(t)&&!yn(t).ur()&&t.jr.length>0}function dm(t){yn(t).start()}async function CS(t){yn(t).Nr()}async function RS(t){const e=yn(t);for(const n of t.jr)e.Sr(n.mutations)}async function NS(t,e,n){const r=t.jr.shift(),s=Wl.from(r,e,n);await hm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Qo(t)}async function kS(t,e){e&&yn(t).Vr&&await async function(n,r){if(s=r.code,vb(s)&&s!==w.ABORTED){const i=n.jr.shift();yn(n).dr(),await hm(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Qo(n)}var s}(t,e),fm(t)&&dm(t)}async function OS(t,e){const n=Y(t);e?(n.Wr.delete(2),await Wo(n)):e||(n.Wr.add(2),await ii(n),n.Hr.set("Unknown"))}function $r(t){return t.Yr||(t.Yr=function(e,n,r){const s=Y(e);return s.$r(),new yS(n,s.sr,s.credentials,s.N,r)}(t.datastore,t.asyncQueue,{Si:IS.bind(null,t),Ci:TS.bind(null,t),Rr:bS.bind(null,t)}),t.Gr.push(async e=>{e?(t.Yr.dr(),tu(t)?eu(t):t.Hr.set("Unknown")):(await t.Yr.stop(),um(t))})),t.Yr}function yn(t){return t.Xr||(t.Xr=function(e,n,r){const s=Y(e);return s.$r(),new vS(n,s.sr,s.credentials,s.N,r)}(t.datastore,t.asyncQueue,{Si:CS.bind(null,t),Ci:kS.bind(null,t),Cr:RS.bind(null,t),Dr:NS.bind(null,t)}),t.Gr.push(async e=>{e?(t.Xr.dr(),await Qo(t)):(await t.Xr.stop(),t.jr.length>0&&(B("RemoteStore",`Stopping write stream with ${t.jr.length} pending writes`),t.jr=[]))})),t.Xr}/**
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
 */class nu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new nu(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ru(t,e){if(pn("AsyncQueue",`${e}: ${t}`),ni(t))return new L(w.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Br{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Bl(),this.sortedSet=new Ge(this.comparator)}static emptySet(e){return new Br(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Br)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Br;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class pm{constructor(){this.Zr=new Ge(K.comparator)}track(e){const n=e.doc.key,r=this.Zr.get(n);r?e.type!==0&&r.type===3?this.Zr=this.Zr.insert(n,e):e.type===3&&r.type!==1?this.Zr=this.Zr.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Zr=this.Zr.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Zr=this.Zr.remove(n):e.type===1&&r.type===2?this.Zr=this.Zr.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):Q():this.Zr=this.Zr.insert(n,e)}eo(){const e=[];return this.Zr.inorderTraversal((n,r)=>{e.push(r)}),e}}class jr{constructor(e,n,r,s,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new jr(e,n,Br.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class DS{constructor(){this.no=void 0,this.listeners=[]}}class PS{constructor(){this.queries=new si(e=>Ig(e),Lo),this.onlineState="Unknown",this.so=new Set}}async function LS(t,e){const n=Y(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new DS),s)try{i.no=await n.onListen(r)}catch(o){const a=ru(o,`Initialization of query '${Vl(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.io(n.onlineState),i.no&&e.ro(i.no)&&su(n)}async function MS(t,e){const n=Y(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function xS(t,e){const n=Y(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.ro(s)&&(r=!0);o.no=s}}r&&su(n)}function US(t,e,n){const r=Y(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function su(t){t.so.forEach(e=>{e.next()})}class FS{constructor(e,n,r){this.query=e,this.oo=n,this.co=!1,this.ao=null,this.onlineState="Unknown",this.options=r||{}}ro(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new jr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.co?this.uo(e)&&(this.oo.next(e),n=!0):this.ho(e,this.onlineState)&&(this.lo(e),n=!0),this.ao=e,n}onError(e){this.oo.error(e)}io(e){this.onlineState=e;let n=!1;return this.ao&&!this.co&&this.ho(this.ao,e)&&(this.lo(this.ao),n=!0),n}ho(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.fo||!r)&&(!e.docs.isEmpty()||n==="Offline")}uo(e){if(e.docChanges.length>0)return!0;const n=this.ao&&this.ao.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}lo(e){e=jr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.oo.next(e)}}/**
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
 */class gm{constructor(e){this.key=e}}class mm{constructor(e){this.key=e}}class VS{constructor(e,n){this.query=e,this.po=n,this.To=null,this.current=!1,this.Eo=Ee(),this.mutatedKeys=Ee(),this.Io=Tg(e),this.Ao=new Br(this.Io)}get Ro(){return this.po}bo(e,n){const r=n?n.Po:new pm,s=n?n.Ao:this.Ao;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=Do(this.query)&&s.size===this.query.limit?s.last():null,l=Po(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),g=Mo(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),S=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let v=!1;f&&g?f.data.isEqual(g.data)?m!==S&&(r.track({type:3,doc:g}),v=!0):this.vo(f,g)||(r.track({type:2,doc:g}),v=!0,(c&&this.Io(g,c)>0||l&&this.Io(g,l)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),v=!0):f&&!g&&(r.track({type:1,doc:f}),v=!0,(c||l)&&(a=!0)),v&&(g?(o=o.add(g),i=S?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),Do(this.query)||Po(this.query))for(;o.size>this.query.limit;){const u=Do(this.query)?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Ao:o,Po:r,Ln:a,mutatedKeys:i}}vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Ao;this.Ao=e.Ao,this.mutatedKeys=e.mutatedKeys;const i=e.Po.eo();i.sort((l,u)=>function(h,f){const g=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return g(h)-g(f)}(l.type,u.type)||this.Io(l.doc,u.doc)),this.Vo(r);const o=n?this.So():[],a=this.Eo.size===0&&this.current?1:0,c=a!==this.To;return this.To=a,i.length!==0||c?{snapshot:new jr(this.query,e.Ao,s,i,e.mutatedKeys,a===0,c,!1),Do:o}:{Do:o}}io(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ao:this.Ao,Po:new pm,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{Do:[]}}Co(e){return!this.po.has(e)&&!!this.Ao.has(e)&&!this.Ao.get(e).hasLocalMutations}Vo(e){e&&(e.addedDocuments.forEach(n=>this.po=this.po.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.po=this.po.delete(n)),this.current=e.current)}So(){if(!this.current)return[];const e=this.Eo;this.Eo=Ee(),this.Ao.forEach(r=>{this.Co(r.key)&&(this.Eo=this.Eo.add(r.key))});const n=[];return e.forEach(r=>{this.Eo.has(r)||n.push(new mm(r))}),this.Eo.forEach(r=>{e.has(r)||n.push(new gm(r))}),n}No(e){this.po=e.Gn,this.Eo=Ee();const n=this.bo(e.documents);return this.applyChanges(n,!0)}xo(){return jr.fromInitialDocuments(this.query,this.Ao,this.mutatedKeys,this.To===0)}}class $S{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class BS{constructor(e){this.key=e,this.ko=!1}}class jS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.$o={},this.Oo=new si(a=>Ig(a),Lo),this.Fo=new Map,this.Mo=new Set,this.Lo=new Ge(K.comparator),this.Bo=new Map,this.Uo=new Yl,this.qo={},this.Ko=new Map,this.jo=Vr.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return this.Qo===!0}}async function qS(t,e){const n=ZS(t);let r,s;const i=n.Oo.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.xo();else{const o=await sS(n.localStore,Hn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await HS(n,e,r,a==="current"),n.isPrimaryClient&&am(n.remoteStore,o)}return s}async function HS(t,e,n,r){t.Wo=(u,h,f)=>async function(g,m,S,v){let b=m.view.bo(S);b.Ln&&(b=await nm(g.localStore,m.query,!1).then(({documents:H})=>m.view.bo(H,b)));const P=v&&v.targetChanges.get(m.targetId),q=m.view.applyChanges(b,g.isPrimaryClient,P);return Im(g,m.targetId,q.Do),q.snapshot}(t,u,h,f);const s=await nm(t.localStore,e,!0),i=new VS(e,s.Gn),o=i.bo(s.documents),a=ti.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);Im(t,n,c.Do);const l=new $S(e,n,i);return t.Oo.set(e,l),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),c.snapshot}async function KS(t,e){const n=Y(t),r=n.Oo.get(e),s=n.Fo.get(r.targetId);if(s.length>1)return n.Fo.set(r.targetId,s.filter(i=>!Lo(i,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ql(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),cm(n.remoteStore,r.targetId),iu(n,r.targetId)}).catch(ri)):(iu(n,r.targetId),await Ql(n.localStore,r.targetId,!0))}async function zS(t,e,n){const r=eA(t);try{const s=await function(i,o){const a=Y(i),c=dt.now(),l=o.reduce((h,f)=>h.add(f.key),Ee());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Qn.Pn(h,l).next(f=>{u=f;const g=[];for(const m of o){const S=gb(m,u.get(m.key));S!=null&&g.push(new Kn(m.key,S,gg(S.value.mapValue),Wt.exists(!0)))}return a.In.addMutationBatch(h,c,g,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.qo[i.currentUser.toKey()];c||(c=new Ge(ce)),c=c.insert(o,a),i.qo[i.currentUser.toKey()]=c}(r,s.batchId,n),await oi(r,s.changes),await Qo(r.remoteStore)}catch(s){const i=ru(s,"Failed to persist write");n.reject(i)}}async function ym(t,e){const n=Y(t);try{const r=await tS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Bo.get(i);o&&(ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ko=!0:s.modifiedDocuments.size>0?ve(o.ko):s.removedDocuments.size>0&&(ve(o.ko),o.ko=!1))}),await oi(n,r,e)}catch(r){await ri(r)}}function vm(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Oo.forEach((i,o)=>{const a=o.view.io(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=Y(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.io(o)&&(c=!0)}),c&&su(a)}(r.eventManager,e),s.length&&r.$o.Rr(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function WS(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Bo.get(e),i=s&&s.key;if(i){let o=new Ge(K.comparator);o=o.insert(i,We.newNoDocument(i,ae.min()));const a=Ee().add(i),c=new qo(ae.min(),new Map,new qe(ce),o,a);await ym(r,c),r.Lo=r.Lo.remove(i),r.Bo.delete(e),ou(r)}else await Ql(r.localStore,e,!1).then(()=>iu(r,e,n)).catch(ri)}async function GS(t,e){const n=Y(t),r=e.batch.batchId;try{const s=await eS(n.localStore,e);Em(n,r,null),wm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await oi(n,s)}catch(s){await ri(s)}}async function QS(t,e,n){const r=Y(t);try{const s=await function(i,o){const a=Y(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.In.lookupMutationBatch(c,o).next(u=>(ve(u!==null),l=u.keys(),a.In.removeMutationBatch(c,u))).next(()=>a.In.performConsistencyCheck(c)).next(()=>a.Qn.Pn(c,l))})}(r.localStore,e);Em(r,e,n),wm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await oi(r,s)}catch(s){await ri(s)}}function wm(t,e){(t.Ko.get(e)||[]).forEach(n=>{n.resolve()}),t.Ko.delete(e)}function Em(t,e,n){const r=Y(t);let s=r.qo[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qo[r.currentUser.toKey()]=s}}function iu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fo.get(e))t.Oo.delete(r),n&&t.$o.Go(r,n);t.Fo.delete(e),t.isPrimaryClient&&t.Uo.cs(e).forEach(r=>{t.Uo.containsKey(r)||_m(t,r)})}function _m(t,e){t.Mo.delete(e.path.canonicalString());const n=t.Lo.get(e);n!==null&&(cm(t.remoteStore,n),t.Lo=t.Lo.remove(e),t.Bo.delete(n),ou(t))}function Im(t,e,n){for(const r of n)r instanceof gm?(t.Uo.addReference(r.key,e),YS(t,r)):r instanceof mm?(B("SyncEngine","Document no longer in limbo: "+r.key),t.Uo.removeReference(r.key,e),t.Uo.containsKey(r.key)||_m(t,r.key)):Q()}function YS(t,e){const n=e.key,r=n.path.canonicalString();t.Lo.get(n)||t.Mo.has(r)||(B("SyncEngine","New document in limbo: "+n),t.Mo.add(r),ou(t))}function ou(t){for(;t.Mo.size>0&&t.Lo.size<t.maxConcurrentLimboResolutions;){const e=t.Mo.values().next().value;t.Mo.delete(e);const n=new K(Te.fromString(e)),r=t.jo.next();t.Bo.set(r,new BS(n)),t.Lo=t.Lo.insert(n,r),am(t.remoteStore,new Wn(Hn(Eg(n.path)),r,2,Rl.T))}}async function oi(t,e,n){const r=Y(t),s=[],i=[],o=[];r.Oo.isEmpty()||(r.Oo.forEach((a,c)=>{o.push(r.Wo(c,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),s.push(l);const u=Gl.kn(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.$o.Rr(s),await async function(a,c){const l=Y(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>O.forEach(c,h=>O.forEach(h.Nn,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>O.forEach(h.xn,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!ni(u))throw u;B("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Un.get(h),g=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(g);l.Un=l.Un.insert(h,m)}}}(r.localStore,i))}async function JS(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const r=await em(n.localStore,e);n.currentUser=e,function(s,i){s.Ko.forEach(o=>{o.forEach(a=>{a.reject(new L(w.CANCELLED,i))})}),s.Ko.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await oi(n,r.Wn)}}function XS(t,e){const n=Y(t),r=n.Bo.get(e);if(r&&r.ko)return Ee().add(r.key);{let s=Ee();const i=n.Fo.get(e);if(!i)return s;for(const o of i){const a=n.Oo.get(o);s=s.unionWith(a.view.Ro)}return s}}function ZS(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ym.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=XS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=WS.bind(null,e),e.$o.Rr=xS.bind(null,e.eventManager),e.$o.Go=US.bind(null,e.eventManager),e}function eA(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=GS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=QS.bind(null,e),e}class tA{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=zo(e.databaseInfo.databaseId),this.sharedClientState=this.Ho(e),this.persistence=this.Jo(e),await this.persistence.start(),this.gcScheduler=this.Yo(e),this.localStore=this.Xo(e)}Yo(e){return null}Xo(e){return Zb(this.persistence,new Jb,e.initialUser,this.N)}Jo(e){return new uS(Jl.Ns,this.N)}Ho(e){return new fS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class nA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=JS.bind(null,this.syncEngine),await OS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new PS}createDatastore(e){const n=zo(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new mS(s));var s;return function(i,o,a){return new wS(i,o,a)}(e.credentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>vm(this.syncEngine,a,0),o=sm.bt()?new sm:new dS,new _S(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,l){const u=new jS(r,s,i,o,a,c);return l&&(u.Qo=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Y(e);B("RemoteStore","RemoteStore shutting down."),n.Wr.add(5),await ii(n),n.zr.shutdown(),n.Hr.set("Unknown")}(this.remoteStore)}}/**
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
 */class rA{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.tc(this.observer.next,e)}error(e){this.observer.error?this.tc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}ec(){this.muted=!0}tc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class sA{constructor(e,n,r){this.credentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=it.UNAUTHENTICATED,this.clientId=og.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(n,async s=>{B("FirestoreClient","Received user=",s.uid),await this.credentialListener(s),this.user=s})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(n){const r=ru(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function iA(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await em(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function oA(t,e){t.asyncQueue.verifyOperationInProgress();const n=await aA(t);B("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>async function(i,o){const a=Y(i);a.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const c=Gn(a);a.Wr.add(3),await ii(a),c&&a.Hr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Wr.delete(3),await Wo(a)}(e.remoteStore,s)),t.onlineComponents=e}async function aA(t){return t.offlineComponents||(B("FirestoreClient","Using default OfflineComponentProvider"),await iA(t,new tA)),t.offlineComponents}async function Tm(t){return t.onlineComponents||(B("FirestoreClient","Using default OnlineComponentProvider"),await oA(t,new nA)),t.onlineComponents}function cA(t){return Tm(t).then(e=>e.syncEngine)}async function lA(t){const e=await Tm(t),n=e.eventManager;return n.onListen=qS.bind(null,e.syncEngine),n.onUnlisten=KS.bind(null,e.syncEngine),n}function uA(t,e,n={}){const r=new gn;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const l=new rA({next:h=>{i.enqueueAndForget(()=>MS(s,u)),h.fromCache&&a.source==="server"?c.reject(new L(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new FS(o,l,{includeMetadataChanges:!0,fo:!0});return LS(s,u)}(await lA(t),t.asyncQueue,e,n,r)),r.promise}class hA{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ai{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ai&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const bm=new Map;/**
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
 */function Sm(t,e,n){if(!n)throw new L(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fA(t,e,n,r){if(e===!0&&r===!0)throw new L(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Am(t){if(!K.isDocumentKey(t))throw new L(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Cm(t){if(K.isDocumentKey(t))throw new L(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Yo(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function vn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yo(t);throw new L(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Rm{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new L(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,fA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class au{constructor(e,n){this._credentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Rm({}),this._settingsFrozen=!1,e instanceof ai?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new L(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ai(r.options.projectId)}(e))}get app(){if(!this._app)throw new L(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Rm(e),e.credentials!==void 0&&(this._credentials=function(n){if(!n)return new B0;switch(n.type){case"gapi":const r=n.client;return ve(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new H0(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new L(w.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=bm.get(e);n&&(B("ComponentProvider","Removing Datastore"),bm.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class at{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new at(this.firestore,e,this._key)}}class qr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new qr(this.firestore,e,this._query)}}class wn extends qr{constructor(e,n,r){super(e,n,Eg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new at(this.firestore,null,new K(e))}withConverter(e){return new wn(this.firestore,e,this._path)}}function lR(t,e,...n){if(t=Je(t),Sm("collection","path",e),t instanceof au){const r=Te.fromString(e,...n);return Cm(r),new wn(t,null,r)}{if(!(t instanceof at||t instanceof wn))throw new L(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return Cm(r),new wn(t.firestore,null,r)}}function dA(t,e,...n){if(t=Je(t),arguments.length===1&&(e=og.I()),Sm("doc","path",e),t instanceof au){const r=Te.fromString(e,...n);return Am(r),new at(t,null,new K(r))}{if(!(t instanceof at||t instanceof wn))throw new L(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return Am(r),new at(t.firestore,t instanceof wn?t.converter:null,new K(r))}}/**
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
 */class pA{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new im(this,"async_queue_retry"),this.Rc=()=>{const n=Xl();n&&B("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ar.tr()};const e=Xl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.bc(),this.Pc(e)}enterRestrictedMode(e){if(!this.gc){this.gc=!0,this.Ic=e||!1;const n=Xl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Rc)}}enqueue(e){if(this.bc(),this.gc)return new Promise(()=>{});const n=new gn;return this.Pc(()=>this.gc&&this.Ic?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.mc.push(e),this.vc()))}async vc(){if(this.mc.length!==0){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(e){if(!ni(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.mc.length>0&&this.ar.Xi(()=>this.vc())}}Pc(e){const n=this._c.then(()=>(this.Ec=!0,e().catch(r=>{this.Tc=r,this.Ec=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw pn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ec=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.bc(),this.Ac.indexOf(e)>-1&&(n=0);const s=nu.createAndSchedule(this,e,n,r,i=>this.Vc(i));return this.yc.push(s),s}bc(){this.Tc&&Q()}verifyOperationInProgress(){}async Sc(){let e;do e=this._c,await e;while(e!==this._c)}Dc(e){for(const n of this.yc)if(n.timerId===e)return!0;return!1}Cc(e){return this.Sc().then(()=>{this.yc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.yc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Sc()})}Nc(e){this.Ac.push(e)}Vc(e){const n=this.yc.indexOf(e);this.yc.splice(n,1)}}class Hr extends au{constructor(e,n){super(e,n),this.type="firestore",this._queue=new pA,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||km(this),this._firestoreClient.terminate()}}function uR(t=Zf()){return wc(t,"firestore").getImmediate()}function Nm(t){return t._firestoreClient||km(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function km(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new hA(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new sA(t._credentials,t._queue,r)}/**
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
 */class Jo{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Kr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kr(ze.fromBase64String(e))}catch(n){throw new L(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Kr(ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class cu{constructor(e){this._methodName=e}}/**
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
 */class lu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */const gA=/^__.*__$/;class mA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Kn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Bo(e,this.data,n,this.fieldTransforms)}}class Om{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Kn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Dm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class uu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.N=r,this.ignoreUndefinedProperties=s,i===void 0&&this.xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get kc(){return this.settings.kc}$c(e){return new uu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Oc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.$c({path:r,Fc:!1});return s.Mc(e),s}Lc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.$c({path:r,Fc:!1});return s.xc(),s}Bc(e){return this.$c({path:void 0,Fc:!0})}Uc(e){return ea(e,this.settings.methodName,this.settings.qc||!1,this.path,this.settings.Kc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Mc(this.path.get(e))}Mc(e){if(e.length===0)throw this.Uc("Document fields must not be empty");if(Dm(this.kc)&&gA.test(e))throw this.Uc('Document fields cannot begin and end with "__"')}}class yA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.N=r||zo(e)}jc(e,n,r,s=!1){return new uu({kc:e,methodName:n,Kc:r,path:ot.emptyPath(),Fc:!1,qc:s},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function Xo(t){const e=t._freezeSettings(),n=zo(t._databaseId);return new yA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Pm(t,e,n,r,s,i={}){const o=t.jc(i.merge||i.mergeFields?2:0,e,n,s);hu("Data must be an object, but it was:",o,r);const a=Lm(r,o);let c,l;if(i.merge)c=new Gs(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=fu(e,h,n);if(!o.contains(f))throw new L(w.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);xm(u,f)||u.push(f)}c=new Gs(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new mA(new pt(a),c,l)}class Zo extends cu{_toFieldTransform(e){if(e.kc!==2)throw e.kc===1?e.Uc(`${this._methodName}() can only appear at the top level of your update data`):e.Uc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Zo}}function vA(t,e,n,r){const s=t.jc(1,e,n);hu("Data must be an object, but it was:",s,r);const i=[],o=pt.empty();jn(r,(c,l)=>{const u=du(e,c,n);l=Je(l);const h=s.Lc(u);if(l instanceof Zo)i.push(u);else{const f=ci(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new Gs(i);return new Om(o,a,s.fieldTransforms)}function wA(t,e,n,r,s,i){const o=t.jc(1,e,n),a=[fu(e,r,n)],c=[s];if(i.length%2!=0)throw new L(w.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(fu(e,i[f])),c.push(i[f+1]);const l=[],u=pt.empty();for(let f=a.length-1;f>=0;--f)if(!xm(l,a[f])){const g=a[f];let m=c[f];m=Je(m);const S=o.Lc(g);if(m instanceof Zo)l.push(g);else{const v=ci(m,S);v!=null&&(l.push(g),u.set(g,v))}}const h=new Gs(l);return new Om(u,h,o.fieldTransforms)}function EA(t,e,n,r=!1){return ci(n,t.jc(r?4:3,e))}function ci(t,e){if(Mm(t=Je(t)))return hu("Unsupported field value:",e,t),Lm(t,e);if(t instanceof cu)return function(n,r){if(!Dm(r.kc))throw r.Uc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Uc(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&e.kc!==4)throw e.Uc("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=ci(o,r.Bc(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=Je(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return lb(r.N,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=dt.fromDate(n);return{timestampValue:Ko(r.N,s)}}if(n instanceof dt){const s=new dt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ko(r.N,s)}}if(n instanceof lu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Kr)return{bytesValue:Kg(r.N,n._byteString)};if(n instanceof at){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.Uc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:jl(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.Uc(`Unsupported field value: ${Yo(n)}`)}(t,e)}function Lm(t,e){const n={};return cg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jn(t,(r,s)=>{const i=ci(s,e.Oc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Mm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof dt||t instanceof lu||t instanceof Kr||t instanceof at||t instanceof cu)}function hu(t,e,n){if(!Mm(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Yo(n);throw r==="an object"?e.Uc(t+" a custom object"):e.Uc(t+" "+r)}}function fu(t,e,n){if((e=Je(e))instanceof Jo)return e._internalPath;if(typeof e=="string")return du(t,e);throw ea("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const _A=new RegExp("[~\\*/\\[\\]]");function du(t,e,n){if(e.search(_A)>=0)throw ea(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Jo(...e.split("."))._internalPath}catch{throw ea(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ea(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new L(w.INVALID_ARGUMENT,a+t+c)}function xm(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Um{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new IA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ta("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class IA extends Um{data(){return super.data()}}function ta(t,e){return typeof e=="string"?du(t,e):e instanceof Jo?e._internalPath:e._delegate._internalPath}/**
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
 */class na{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class TA extends Um{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ra(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ta("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ra extends TA{data(e={}){return super.data(e)}}class bA{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new na(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ra(this._firestore,this._userDataWriter,r.key,r,new na(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new ra(r._firestore,r._userDataWriter,o.doc.key,o.doc,new na(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new ra(r._firestore,r._userDataWriter,o.doc.key,o.doc,new na(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:SA(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function SA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
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
 */function AA(t){if(Po(t)&&t.explicitOrderBy.length===0)throw new L(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fm{}function hR(t,...e){for(const n of e)t=n._apply(t);return t}class CA extends Fm{constructor(e,n,r){super(),this.Gc=e,this.zc=n,this.Hc=r,this.type="where"}_apply(e){const n=Xo(e.firestore),r=function(s,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new L(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on FieldPath.documentId().`);if(l==="in"||l==="not-in"){$m(u,l);const g=[];for(const m of u)g.push(Vm(a,s,m));h={arrayValue:{values:g}}}else h=Vm(a,s,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||$m(u,l),h=EA(o,i,u,l==="in"||l==="not-in");const f=tt.create(c,l,h);return function(g,m){if(m.v()){const v=Fl(g);if(v!==null&&!v.isEqual(m.field))throw new L(w.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${v.toString()}' and '${m.field.toString()}'`);const b=Ul(g);b!==null&&Bm(g,m.field,b)}const S=function(v,b){for(const P of v.filters)if(b.indexOf(P.op)>=0)return P.op;return null}(g,function(v){switch(v){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(m.op));if(S!==null)throw S===m.op?new L(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${m.op.toString()}' filter.`):new L(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${m.op.toString()}' filters with '${S.toString()}' filters.`)}(s,f),f}(e._query,"where",n,e.firestore._databaseId,this.Gc,this.zc,this.Hc);return new qr(e.firestore,e.converter,function(s,i){const o=s.filters.concat([i]);return new xr(s.path,s.collectionGroup,s.explicitOrderBy.slice(),o,s.limit,s.limitType,s.startAt,s.endAt)}(e._query,r))}}function fR(t,e,n){const r=e,s=ta("where",t);return new CA(s,r,n)}class RA extends Fm{constructor(e,n){super(),this.Gc=e,this.Jc=n,this.type="orderBy"}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new L(w.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new L(w.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Mr(s,i);return function(a,c){if(Ul(a)===null){const l=Fl(a);l!==null&&Bm(a,l,c.field)}}(r,o),o}(e._query,this.Gc,this.Jc);return new qr(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new xr(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function dR(t,e="asc"){const n=e,r=ta("orderBy",t);return new RA(r,n)}function Vm(t,e,n){if(typeof(n=Je(n))=="string"){if(n==="")throw new L(w.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!_g(e)&&n.indexOf("/")!==-1)throw new L(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Te.fromString(n));if(!K.isDocumentKey(r))throw new L(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return fg(t,new K(r))}if(n instanceof at)return fg(t,n._key);throw new L(w.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Yo(n)}.`)}function $m(t,e){if(!Array.isArray(t)||t.length===0)throw new L(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new L(w.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Bm(t,e,n){if(!n.isEqual(e))throw new L(w.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class NA{convertValue(e,n="none"){switch(qn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Dr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){const r={};return jn(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new lu(Ne(e.latitude),Ne(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ug(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Qs(e));default:return null}}convertTimestamp(e){const n=mn(e);return new dt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);ve(Xg(r));const s=new ai(r.get(1),r.get(3)),i=new K(r.popFirst(5));return s.isEqual(n)||pn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function jm(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class kA extends NA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new at(this.firestore,null,n)}}function pR(t){t=vn(t,qr);const e=vn(t.firestore,Hr),n=Nm(e),r=new kA(e);return AA(t._query),uA(n,t._query).then(s=>new bA(e,r,t,s))}function gR(t,e,n){t=vn(t,at);const r=vn(t.firestore,Hr),s=jm(t.converter,e,n);return sa(r,[Pm(Xo(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Wt.none())])}function mR(t,e,n,...r){t=vn(t,at);const s=vn(t.firestore,Hr),i=Xo(s);let o;return o=typeof(e=Je(e))=="string"||e instanceof Jo?wA(i,"updateDoc",t._key,e,n,r):vA(i,"updateDoc",t._key,e),sa(s,[o.toMutation(t._key,Wt.exists(!0))])}function yR(t){return sa(vn(t.firestore,Hr),[new xg(t._key,Wt.none())])}function vR(t,e){const n=vn(t.firestore,Hr),r=dA(t),s=jm(t.converter,e);return sa(n,[Pm(Xo(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Wt.exists(!1))]).then(()=>r)}function sa(t,e){return function(n,r){const s=new gn;return n.asyncQueue.enqueueAndForget(async()=>zS(await cA(n),r,s)),s.promise}(Nm(t),e)}(function(t,e=!0){(function(n){kr=n})(Es),ws(new vr("firestore",(n,{options:r})=>{const s=n.getProvider("app").getImmediate(),i=new Hr(s,new j0(n.getProvider("auth-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),on(rg,"3.3.1",t),on(rg,"3.3.1","esm2017")})();var pu={exports:{}},qm=function(e,n){return function(){for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];return e.apply(n,s)}},OA=qm,Qn=Object.prototype.toString;function gu(t){return Qn.call(t)==="[object Array]"}function mu(t){return typeof t=="undefined"}function DA(t){return t!==null&&!mu(t)&&t.constructor!==null&&!mu(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function PA(t){return Qn.call(t)==="[object ArrayBuffer]"}function LA(t){return typeof FormData!="undefined"&&t instanceof FormData}function MA(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function xA(t){return typeof t=="string"}function UA(t){return typeof t=="number"}function Hm(t){return t!==null&&typeof t=="object"}function ia(t){if(Qn.call(t)!=="[object Object]")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function FA(t){return Qn.call(t)==="[object Date]"}function VA(t){return Qn.call(t)==="[object File]"}function $A(t){return Qn.call(t)==="[object Blob]"}function Km(t){return Qn.call(t)==="[object Function]"}function BA(t){return Hm(t)&&Km(t.pipe)}function jA(t){return typeof URLSearchParams!="undefined"&&t instanceof URLSearchParams}function qA(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function HA(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function yu(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),gu(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.call(null,t[s],s,t)}function vu(){var t={};function e(s,i){ia(t[i])&&ia(s)?t[i]=vu(t[i],s):ia(s)?t[i]=vu({},s):gu(s)?t[i]=s.slice():t[i]=s}for(var n=0,r=arguments.length;n<r;n++)yu(arguments[n],e);return t}function KA(t,e,n){return yu(e,function(s,i){n&&typeof s=="function"?t[i]=OA(s,n):t[i]=s}),t}function zA(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}var gt={isArray:gu,isArrayBuffer:PA,isBuffer:DA,isFormData:LA,isArrayBufferView:MA,isString:xA,isNumber:UA,isObject:Hm,isPlainObject:ia,isUndefined:mu,isDate:FA,isFile:VA,isBlob:$A,isFunction:Km,isStream:BA,isURLSearchParams:jA,isStandardBrowserEnv:HA,forEach:yu,merge:vu,extend:KA,trim:qA,stripBOM:zA},zr=gt;function zm(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Wm=function(e,n,r){if(!n)return e;var s;if(r)s=r(n);else if(zr.isURLSearchParams(n))s=n.toString();else{var i=[];zr.forEach(n,function(c,l){c===null||typeof c=="undefined"||(zr.isArray(c)?l=l+"[]":c=[c],zr.forEach(c,function(h){zr.isDate(h)?h=h.toISOString():zr.isObject(h)&&(h=JSON.stringify(h)),i.push(zm(l)+"="+zm(h))}))}),s=i.join("&")}if(s){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e},WA=gt;function oa(){this.handlers=[]}oa.prototype.use=function(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1};oa.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};oa.prototype.forEach=function(e){WA.forEach(this.handlers,function(r){r!==null&&e(r)})};var GA=oa,QA=gt,YA=function(e,n){QA.forEach(e,function(s,i){i!==n&&i.toUpperCase()===n.toUpperCase()&&(e[n]=s,delete e[i])})},Gm=function(e,n,r,s,i){return e.config=n,r&&(e.code=r),e.request=s,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},JA=Gm,Qm=function(e,n,r,s,i){var o=new Error(e);return JA(o,n,r,s,i)},XA=Qm,ZA=function(e,n,r){var s=r.config.validateStatus;!r.status||!s||s(r.status)?e(r):n(XA("Request failed with status code "+r.status,r.config,null,r.request,r))},aa=gt,eC=aa.isStandardBrowserEnv()?function(){return{write:function(n,r,s,i,o,a){var c=[];c.push(n+"="+encodeURIComponent(r)),aa.isNumber(s)&&c.push("expires="+new Date(s).toGMTString()),aa.isString(i)&&c.push("path="+i),aa.isString(o)&&c.push("domain="+o),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){var r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),tC=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},nC=function(e,n){return n?e.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):e},rC=tC,sC=nC,iC=function(e,n){return e&&!rC(n)?sC(e,n):n},wu=gt,oC=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],aC=function(e){var n={},r,s,i;return e&&wu.forEach(e.split(`
`),function(a){if(i=a.indexOf(":"),r=wu.trim(a.substr(0,i)).toLowerCase(),s=wu.trim(a.substr(i+1)),r){if(n[r]&&oC.indexOf(r)>=0)return;r==="set-cookie"?n[r]=(n[r]?n[r]:[]).concat([s]):n[r]=n[r]?n[r]+", "+s:s}}),n},Ym=gt,cC=Ym.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a"),r;function s(i){var o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){var a=Ym.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Eu(t){this.message=t}Eu.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};Eu.prototype.__CANCEL__=!0;var ca=Eu,la=gt,lC=ZA,uC=eC,hC=Wm,fC=iC,dC=aC,pC=cC,_u=Qm,gC=ha,mC=ca,Jm=function(e){return new Promise(function(r,s){var i=e.data,o=e.headers,a=e.responseType,c;function l(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}la.isFormData(i)&&delete o["Content-Type"];var u=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(h+":"+f)}var g=fC(e.baseURL,e.url);u.open(e.method.toUpperCase(),hC(g,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function m(){if(!!u){var v="getAllResponseHeaders"in u?dC(u.getAllResponseHeaders()):null,b=!a||a==="text"||a==="json"?u.responseText:u.response,P={data:b,status:u.status,statusText:u.statusText,headers:v,config:e,request:u};lC(function(H){r(H),l()},function(H){s(H),l()},P),u=null}}if("onloadend"in u?u.onloadend=m:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(m)},u.onabort=function(){!u||(s(_u("Request aborted",e,"ECONNABORTED",u)),u=null)},u.onerror=function(){s(_u("Network Error",e,null,u)),u=null},u.ontimeout=function(){var b=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",P=e.transitional||gC.transitional;e.timeoutErrorMessage&&(b=e.timeoutErrorMessage),s(_u(b,e,P.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",u)),u=null},la.isStandardBrowserEnv()){var S=(e.withCredentials||pC(g))&&e.xsrfCookieName?uC.read(e.xsrfCookieName):void 0;S&&(o[e.xsrfHeaderName]=S)}"setRequestHeader"in u&&la.forEach(o,function(b,P){typeof i=="undefined"&&P.toLowerCase()==="content-type"?delete o[P]:u.setRequestHeader(P,b)}),la.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&a!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(c=function(v){!u||(s(!v||v&&v.type?new mC("canceled"):v),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c))),i||(i=null),u.send(i)})},He=gt,Xm=YA,yC=Gm,vC={"Content-Type":"application/x-www-form-urlencoded"};function Zm(t,e){!He.isUndefined(t)&&He.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function wC(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=Jm),t}function EC(t,e,n){if(He.isString(t))try{return(e||JSON.parse)(t),He.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}var ua={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:wC(),transformRequest:[function(e,n){return Xm(n,"Accept"),Xm(n,"Content-Type"),He.isFormData(e)||He.isArrayBuffer(e)||He.isBuffer(e)||He.isStream(e)||He.isFile(e)||He.isBlob(e)?e:He.isArrayBufferView(e)?e.buffer:He.isURLSearchParams(e)?(Zm(n,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):He.isObject(e)||n&&n["Content-Type"]==="application/json"?(Zm(n,"application/json"),EC(e)):e}],transformResponse:[function(e){var n=this.transitional||ua.transitional,r=n&&n.silentJSONParsing,s=n&&n.forcedJSONParsing,i=!r&&this.responseType==="json";if(i||s&&He.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(i)throw o.name==="SyntaxError"?yC(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};He.forEach(["delete","get","head"],function(e){ua.headers[e]={}});He.forEach(["post","put","patch"],function(e){ua.headers[e]=He.merge(vC)});var ha=ua,_C=gt,IC=ha,TC=function(e,n,r){var s=this||IC;return _C.forEach(r,function(o){e=o.call(s,e,n)}),e},ey=function(e){return!!(e&&e.__CANCEL__)},ty=gt,Iu=TC,bC=ey,SC=ha,AC=ca;function Tu(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new AC("canceled")}var CC=function(e){Tu(e),e.headers=e.headers||{},e.data=Iu.call(e,e.data,e.headers,e.transformRequest),e.headers=ty.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ty.forEach(["delete","get","head","post","put","patch","common"],function(s){delete e.headers[s]});var n=e.adapter||SC.adapter;return n(e).then(function(s){return Tu(e),s.data=Iu.call(e,s.data,s.headers,e.transformResponse),s},function(s){return bC(s)||(Tu(e),s&&s.response&&(s.response.data=Iu.call(e,s.response.data,s.response.headers,e.transformResponse))),Promise.reject(s)})},mt=gt,ny=function(e,n){n=n||{};var r={};function s(u,h){return mt.isPlainObject(u)&&mt.isPlainObject(h)?mt.merge(u,h):mt.isPlainObject(h)?mt.merge({},h):mt.isArray(h)?h.slice():h}function i(u){if(mt.isUndefined(n[u])){if(!mt.isUndefined(e[u]))return s(void 0,e[u])}else return s(e[u],n[u])}function o(u){if(!mt.isUndefined(n[u]))return s(void 0,n[u])}function a(u){if(mt.isUndefined(n[u])){if(!mt.isUndefined(e[u]))return s(void 0,e[u])}else return s(void 0,n[u])}function c(u){if(u in n)return s(e[u],n[u]);if(u in e)return s(void 0,e[u])}var l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return mt.forEach(Object.keys(e).concat(Object.keys(n)),function(h){var f=l[h]||i,g=f(h);mt.isUndefined(g)&&f!==c||(r[h]=g)}),r},ry={version:"0.24.0"},RC=ry.version,bu={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){bu[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});var sy={};bu.transitional=function(e,n,r){function s(i,o){return"[Axios v"+RC+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return function(i,o,a){if(e===!1)throw new Error(s(o," has been removed"+(n?" in "+n:"")));return n&&!sy[o]&&(sy[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function NC(t,e,n){if(typeof t!="object")throw new TypeError("options must be an object");for(var r=Object.keys(t),s=r.length;s-- >0;){var i=r[s],o=e[i];if(o){var a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new TypeError("option "+i+" must be "+c);continue}if(n!==!0)throw Error("Unknown option "+i)}}var kC={assertOptions:NC,validators:bu},iy=gt,OC=Wm,oy=GA,ay=CC,fa=ny,cy=kC,Wr=cy.validators;function li(t){this.defaults=t,this.interceptors={request:new oy,response:new oy}}li.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=fa(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var n=e.transitional;n!==void 0&&cy.assertOptions(n,{silentJSONParsing:Wr.transitional(Wr.boolean),forcedJSONParsing:Wr.transitional(Wr.boolean),clarifyTimeoutError:Wr.transitional(Wr.boolean)},!1);var r=[],s=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(e)===!1||(s=s&&f.synchronous,r.unshift(f.fulfilled,f.rejected))});var i=[];this.interceptors.response.forEach(function(f){i.push(f.fulfilled,f.rejected)});var o;if(!s){var a=[ay,void 0];for(Array.prototype.unshift.apply(a,r),a=a.concat(i),o=Promise.resolve(e);a.length;)o=o.then(a.shift(),a.shift());return o}for(var c=e;r.length;){var l=r.shift(),u=r.shift();try{c=l(c)}catch(h){u(h);break}}try{o=ay(c)}catch(h){return Promise.reject(h)}for(;i.length;)o=o.then(i.shift(),i.shift());return o};li.prototype.getUri=function(e){return e=fa(this.defaults,e),OC(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};iy.forEach(["delete","get","head","options"],function(e){li.prototype[e]=function(n,r){return this.request(fa(r||{},{method:e,url:n,data:(r||{}).data}))}});iy.forEach(["post","put","patch"],function(e){li.prototype[e]=function(n,r,s){return this.request(fa(s||{},{method:e,url:n,data:r}))}});var DC=li,PC=ca;function Gr(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(s){e=s});var n=this;this.promise.then(function(r){if(!!n._listeners){var s,i=n._listeners.length;for(s=0;s<i;s++)n._listeners[s](r);n._listeners=null}}),this.promise.then=function(r){var s,i=new Promise(function(o){n.subscribe(o),s=o}).then(r);return i.cancel=function(){n.unsubscribe(s)},i},t(function(s){n.reason||(n.reason=new PC(s),e(n.reason))})}Gr.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};Gr.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};Gr.prototype.unsubscribe=function(e){if(!!this._listeners){var n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}};Gr.source=function(){var e,n=new Gr(function(s){e=s});return{token:n,cancel:e}};var LC=Gr,MC=function(e){return function(r){return e.apply(null,r)}},xC=function(e){return typeof e=="object"&&e.isAxiosError===!0},ly=gt,UC=qm,da=DC,FC=ny,VC=ha;function uy(t){var e=new da(t),n=UC(da.prototype.request,e);return ly.extend(n,da.prototype,e),ly.extend(n,e),n.create=function(s){return uy(FC(t,s))},n}var xt=uy(VC);xt.Axios=da;xt.Cancel=ca;xt.CancelToken=LC;xt.isCancel=ey;xt.VERSION=ry.version;xt.all=function(e){return Promise.all(e)};xt.spread=MC;xt.isAxiosError=xC;pu.exports=xt;pu.exports.default=xt;var wR=pu.exports,$C="firebase",BC="9.5.0";/**
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
 */on($C,BC,"app");export{QC as A,fR as B,oR as C,iR as D,aR as E,Et as F,gR as G,dA as H,rR as I,yR as J,tR as K,eR as L,hR as M,sR as N,uR as O,ZC as P,uf as T,mR as _,$h as a,gh as b,KC as c,lR as d,HC as e,zC as f,cR as g,st as h,Fh as i,Kv as j,WC as k,pR as l,GC as m,ya as n,Mh as o,wR as p,XC as q,Zy as r,qC as s,jC as t,nR as u,JC as v,iv as w,YC as x,vR as y,dR as z};
