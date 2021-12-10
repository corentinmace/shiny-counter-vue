function ua(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Jm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Xm=ua(Jm);function _u(t){return!!t||t===""}function ha(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Pe(r)?ty(r):ha(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Pe(t))return t;if(be(t))return t}}const Zm=/;(?![^(]*\))/g,ey=/:(.+)/;function ty(t){const e={};return t.split(Zm).forEach(n=>{if(n){const r=n.split(ey);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function fa(t){let e="";if(Pe(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const r=fa(t[n]);r&&(e+=r+" ")}else if(be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function ny(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=zr(t[r],e[r]);return n}function zr(t,e){if(t===e)return!0;let n=bu(t),r=bu(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=B(t),r=B(e),n||r)return n&&r?ny(t,e):!1;if(n=be(t),r=be(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!zr(t[o],e[o]))return!1}}return String(t)===String(e)}function da(t,e){return t.findIndex(n=>zr(n,e))}const SC=t=>t==null?"":B(t)||be(t)&&(t.toString===Au||!J(t.toString))?JSON.stringify(t,Iu,2):String(t),Iu=(t,e)=>e&&e.__v_isRef?Iu(t,e.value):Yn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Jn(e)?{[`Set(${e.size})`]:[...e.values()]}:be(e)&&!B(e)&&!Cu(e)?String(e):e,ue={},Qn=[],_t=()=>{},ry=()=>!1,sy=/^on[^a-z]/,si=t=>sy.test(t),pa=t=>t.startsWith("onUpdate:"),je=Object.assign,Tu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},iy=Object.prototype.hasOwnProperty,ne=(t,e)=>iy.call(t,e),B=Array.isArray,Yn=t=>ii(t)==="[object Map]",Jn=t=>ii(t)==="[object Set]",bu=t=>t instanceof Date,J=t=>typeof t=="function",Pe=t=>typeof t=="string",ga=t=>typeof t=="symbol",be=t=>t!==null&&typeof t=="object",Su=t=>be(t)&&J(t.then)&&J(t.catch),Au=Object.prototype.toString,ii=t=>Au.call(t),oy=t=>ii(t).slice(8,-1),Cu=t=>ii(t)==="[object Object]",ma=t=>Pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,oi=ua(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ai=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ay=/-(\w)/g,At=ai(t=>t.replace(ay,(e,n)=>n?n.toUpperCase():"")),cy=/\B([A-Z])/g,Xn=ai(t=>t.replace(cy,"-$1").toLowerCase()),ci=ai(t=>t.charAt(0).toUpperCase()+t.slice(1)),ya=ai(t=>t?`on${ci(t)}`:""),Wr=(t,e)=>!Object.is(t,e),li=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ui=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},hi=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ru;const ly=()=>Ru||(Ru=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let mn;const fi=[];class uy{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&mn&&(this.parent=mn,this.index=(mn.scopes||(mn.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(fi.push(this),mn=this)}off(){this.active&&(fi.pop(),mn=fi[fi.length-1])}stop(e){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function hy(t,e){e=e||mn,e&&e.active&&e.effects.push(t)}const va=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Nu=t=>(t.w&Wt)>0,ku=t=>(t.n&Wt)>0,fy=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Wt},dy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Nu(s)&&!ku(s)?s.delete(t):e[n++]=s,s.w&=~Wt,s.n&=~Wt}e.length=n}},wa=new WeakMap;let Gr=0,Wt=1;const Ea=30,Qr=[];let yn;const vn=Symbol(""),_a=Symbol("");class Ia{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],hy(this,r)}run(){if(!this.active)return this.fn();if(!Qr.includes(this))try{return Qr.push(yn=this),py(),Wt=1<<++Gr,Gr<=Ea?fy(this):Ou(this),this.fn()}finally{Gr<=Ea&&dy(this),Wt=1<<--Gr,wn(),Qr.pop();const e=Qr.length;yn=e>0?Qr[e-1]:void 0}}stop(){this.active&&(Ou(this),this.onStop&&this.onStop(),this.active=!1)}}function Ou(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Zn=!0;const Ta=[];function er(){Ta.push(Zn),Zn=!1}function py(){Ta.push(Zn),Zn=!0}function wn(){const t=Ta.pop();Zn=t===void 0?!0:t}function at(t,e,n){if(!Du())return;let r=wa.get(t);r||wa.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=va()),Pu(s)}function Du(){return Zn&&yn!==void 0}function Pu(t,e){let n=!1;Gr<=Ea?ku(t)||(t.n|=Wt,n=!Nu(t)):n=!t.has(yn),n&&(t.add(yn),yn.deps.push(t))}function xt(t,e,n,r,s,i){const o=wa.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?ma(n)&&a.push(o.get("length")):(a.push(o.get(vn)),Yn(t)&&a.push(o.get(_a)));break;case"delete":B(t)||(a.push(o.get(vn)),Yn(t)&&a.push(o.get(_a)));break;case"set":Yn(t)&&a.push(o.get(vn));break}if(a.length===1)a[0]&&ba(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ba(va(c))}}function ba(t,e){for(const n of B(t)?t:[...t])(n!==yn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const gy=ua("__proto__,__v_isRef,__isVue"),Lu=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(ga)),my=Sa(),yy=Sa(!1,!0),vy=Sa(!0),Mu=wy();function wy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=re(this);for(let i=0,o=this.length;i<o;i++)at(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(re)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){er();const r=re(this)[e].apply(this,n);return wn(),r}}),t}function Sa(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_raw"&&i===(t?e?My:Hu:e?qu:ju).get(r))return r;const o=B(r);if(!t&&o&&ne(Mu,s))return Reflect.get(Mu,s,i);const a=Reflect.get(r,s,i);return(ga(s)?Lu.has(s):gy(s))||(t||at(r,"get",s),e)?a:tt(a)?!o||!ma(s)?a.value:a:be(a)?t?Ku(a):Yr(a):a}}const Ey=xu(),_y=xu(!0);function xu(t=!1){return function(n,r,s,i){let o=n[r];if(!t&&(s=re(s),o=re(o),!B(n)&&tt(o)&&!tt(s)))return o.value=s,!0;const a=B(n)&&ma(r)?Number(r)<n.length:ne(n,r),c=Reflect.set(n,r,s,i);return n===re(i)&&(a?Wr(s,o)&&xt(n,"set",r,s):xt(n,"add",r,s)),c}}function Iy(t,e){const n=ne(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&xt(t,"delete",e,void 0),r}function Ty(t,e){const n=Reflect.has(t,e);return(!ga(e)||!Lu.has(e))&&at(t,"has",e),n}function by(t){return at(t,"iterate",B(t)?"length":vn),Reflect.ownKeys(t)}const Uu={get:my,set:Ey,deleteProperty:Iy,has:Ty,ownKeys:by},Sy={get:vy,set(t,e){return!0},deleteProperty(t,e){return!0}},Ay=je({},Uu,{get:yy,set:_y}),Aa=t=>t,di=t=>Reflect.getPrototypeOf(t);function pi(t,e,n=!1,r=!1){t=t.__v_raw;const s=re(t),i=re(e);e!==i&&!n&&at(s,"get",e),!n&&at(s,"get",i);const{has:o}=di(s),a=r?Aa:n?Na:Jr;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function gi(t,e=!1){const n=this.__v_raw,r=re(n),s=re(t);return t!==s&&!e&&at(r,"has",t),!e&&at(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function mi(t,e=!1){return t=t.__v_raw,!e&&at(re(t),"iterate",vn),Reflect.get(t,"size",t)}function Fu(t){t=re(t);const e=re(this);return di(e).has.call(e,t)||(e.add(t),xt(e,"add",t,t)),this}function Vu(t,e){e=re(e);const n=re(this),{has:r,get:s}=di(n);let i=r.call(n,t);i||(t=re(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Wr(e,o)&&xt(n,"set",t,e):xt(n,"add",t,e),this}function $u(t){const e=re(this),{has:n,get:r}=di(e);let s=n.call(e,t);s||(t=re(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&xt(e,"delete",t,void 0),i}function Bu(){const t=re(this),e=t.size!==0,n=t.clear();return e&&xt(t,"clear",void 0,void 0),n}function yi(t,e){return function(r,s){const i=this,o=i.__v_raw,a=re(o),c=e?Aa:t?Na:Jr;return!t&&at(a,"iterate",vn),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function vi(t,e,n){return function(...r){const s=this.__v_raw,i=re(s),o=Yn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Aa:e?Na:Jr;return!e&&at(i,"iterate",c?_a:vn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Gt(t){return function(...e){return t==="delete"?!1:this}}function Cy(){const t={get(i){return pi(this,i)},get size(){return mi(this)},has:gi,add:Fu,set:Vu,delete:$u,clear:Bu,forEach:yi(!1,!1)},e={get(i){return pi(this,i,!1,!0)},get size(){return mi(this)},has:gi,add:Fu,set:Vu,delete:$u,clear:Bu,forEach:yi(!1,!0)},n={get(i){return pi(this,i,!0)},get size(){return mi(this,!0)},has(i){return gi.call(this,i,!0)},add:Gt("add"),set:Gt("set"),delete:Gt("delete"),clear:Gt("clear"),forEach:yi(!0,!1)},r={get(i){return pi(this,i,!0,!0)},get size(){return mi(this,!0)},has(i){return gi.call(this,i,!0)},add:Gt("add"),set:Gt("set"),delete:Gt("delete"),clear:Gt("clear"),forEach:yi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=vi(i,!1,!1),n[i]=vi(i,!0,!1),e[i]=vi(i,!1,!0),r[i]=vi(i,!0,!0)}),[t,n,e,r]}const[Ry,Ny,ky,Oy]=Cy();function Ca(t,e){const n=e?t?Oy:ky:t?Ny:Ry;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ne(n,s)&&s in r?n:r,s,i)}const Dy={get:Ca(!1,!1)},Py={get:Ca(!1,!0)},Ly={get:Ca(!0,!1)},ju=new WeakMap,qu=new WeakMap,Hu=new WeakMap,My=new WeakMap;function xy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Uy(t){return t.__v_skip||!Object.isExtensible(t)?0:xy(oy(t))}function Yr(t){return t&&t.__v_isReadonly?t:Ra(t,!1,Uu,Dy,ju)}function Fy(t){return Ra(t,!1,Ay,Py,qu)}function Ku(t){return Ra(t,!0,Sy,Ly,Hu)}function Ra(t,e,n,r,s){if(!be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Uy(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function tr(t){return zu(t)?tr(t.__v_raw):!!(t&&t.__v_isReactive)}function zu(t){return!!(t&&t.__v_isReadonly)}function Wu(t){return tr(t)||zu(t)}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function Gu(t){return ui(t,"__v_skip",!0),t}const Jr=t=>be(t)?Yr(t):t,Na=t=>be(t)?Ku(t):t;function Qu(t){Du()&&(t=re(t),t.dep||(t.dep=va()),Pu(t.dep))}function Yu(t,e){t=re(t),t.dep&&ba(t.dep)}function tt(t){return Boolean(t&&t.__v_isRef===!0)}function Vy(t){return Ju(t,!1)}function $y(t){return Ju(t,!0)}function Ju(t,e){return tt(t)?t:new By(t,e)}class By{constructor(e,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:Jr(e)}get value(){return Qu(this),this._value}set value(e){e=this._shallow?e:re(e),Wr(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Jr(e),Yu(this))}}function Xr(t){return tt(t)?t.value:t}const jy={get:(t,e,n)=>Xr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return tt(s)&&!tt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Xu(t){return tr(t)?t:new Proxy(t,jy)}class qy{constructor(e,n,r){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new Ia(e,()=>{this._dirty||(this._dirty=!0,Yu(this))}),this.__v_isReadonly=r}get value(){const e=re(this);return Qu(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ct(t,e){let n,r;const s=J(t);return s?(n=t,r=_t):(n=t.get,r=t.set),new qy(n,r,s||!r)}Promise.resolve();function Hy(t,e,...n){const r=t.vnode.props||ue;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||ue;f?s=n.map(g=>g.trim()):h&&(s=n.map(hi))}let a,c=r[a=ya(e)]||r[a=ya(At(e))];!c&&i&&(c=r[a=ya(Xn(e))]),c&&wt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,wt(l,t,6,s)}}function Zu(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!J(t)){const c=l=>{const u=Zu(l,e,!0);u&&(a=!0,je(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(B(i)?i.forEach(c=>o[c]=null):je(o,i),r.set(t,o),o)}function ka(t,e){return!t||!si(e)?!1:(e=e.slice(2).replace(/Once$/,""),ne(t,e[0].toLowerCase()+e.slice(1))||ne(t,Xn(e))||ne(t,e))}let ct=null,eh=null;function wi(t){const e=ct;return ct=t,eh=t&&t.type.__scopeId||null,e}function Ky(t,e=ct,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Rh(-1);const i=wi(e),o=t(...s);return wi(i),r._d&&Rh(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Oa(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:g,ctx:y,inheritAttrs:C}=t;let v,b;const L=wi(t);try{if(n.shapeFlag&4){const z=s||r;v=kt(u.call(z,z,h,i,g,f,y)),b=c}else{const z=e;v=kt(z.length>1?z(i,{attrs:c,slots:a,emit:l}):z(i,null)),b=e.props?c:zy(c)}}catch(z){Zr.length=0,ki(z,t,1),v=nt(It)}let q=v;if(b&&C!==!1){const z=Object.keys(b),{shapeFlag:fe}=q;z.length&&fe&(1|6)&&(o&&z.some(pa)&&(b=Wy(b,o)),q=nr(q,b))}return n.dirs&&(q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&(q.transition=n.transition),v=q,wi(L),v}const zy=t=>{let e;for(const n in t)(n==="class"||n==="style"||si(n))&&((e||(e={}))[n]=t[n]);return e},Wy=(t,e)=>{const n={};for(const r in t)(!pa(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Gy(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?th(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!ka(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?th(r,o,l):!0:!!o;return!1}function th(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ka(n,i))return!0}return!1}function Qy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Yy=t=>t.__isSuspense;function Jy(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):Qv(t)}function Ei(t,e){if(Ne){let n=Ne.provides;const r=Ne.parent&&Ne.parent.provides;r===n&&(n=Ne.provides=Object.create(r)),n[t]=e}}function Rt(t,e,n=!1){const r=Ne||ct;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&J(e)?e.call(r.proxy):e}}function Xy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ah(()=>{t.isMounted=!0}),ch(()=>{t.isUnmounting=!0}),t}const yt=[Function,Array],Zy={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:yt,onEnter:yt,onAfterEnter:yt,onEnterCancelled:yt,onBeforeLeave:yt,onLeave:yt,onAfterLeave:yt,onLeaveCancelled:yt,onBeforeAppear:yt,onAppear:yt,onAfterAppear:yt,onAppearCancelled:yt},setup(t,{slots:e}){const n=Fv(),r=Xy();let s;return()=>{const i=e.default&&sh(e.default(),!0);if(!i||!i.length)return;const o=re(t),{mode:a}=o,c=i[0];if(r.isLeaving)return Pa(c);const l=rh(c);if(!l)return Pa(c);const u=Da(l,o,r,n);La(l,u);const h=n.subTree,f=h&&rh(h);let g=!1;const{getTransitionKey:y}=l.type;if(y){const C=y();s===void 0?s=C:C!==s&&(s=C,g=!0)}if(f&&f.type!==It&&(!Tn(l,f)||g)){const C=Da(f,o,r,n);if(La(f,C),a==="out-in")return r.isLeaving=!0,C.afterLeave=()=>{r.isLeaving=!1,n.update()},Pa(c);a==="in-out"&&l.type!==It&&(C.delayLeave=(v,b,L)=>{const q=nh(r,f);q[String(f.key)]=f,v._leaveCb=()=>{b(),v._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=L})}return c}}},ev=Zy;function nh(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Da(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:y,onBeforeAppear:C,onAppear:v,onAfterAppear:b,onAppearCancelled:L}=e,q=String(t.key),z=nh(n,t),fe=(Z,Te)=>{Z&&wt(Z,r,9,Te)},we={mode:i,persisted:o,beforeEnter(Z){let Te=a;if(!n.isMounted)if(s)Te=C||a;else return;Z._leaveCb&&Z._leaveCb(!0);const de=z[q];de&&Tn(t,de)&&de.el._leaveCb&&de.el._leaveCb(),fe(Te,[Z])},enter(Z){let Te=c,de=l,$e=u;if(!n.isMounted)if(s)Te=v||c,de=b||l,$e=L||u;else return;let Be=!1;const We=Z._enterCb=zt=>{Be||(Be=!0,zt?fe($e,[Z]):fe(de,[Z]),we.delayedLeave&&we.delayedLeave(),Z._enterCb=void 0)};Te?(Te(Z,We),Te.length<=1&&We()):We()},leave(Z,Te){const de=String(t.key);if(Z._enterCb&&Z._enterCb(!0),n.isUnmounting)return Te();fe(h,[Z]);let $e=!1;const Be=Z._leaveCb=We=>{$e||($e=!0,Te(),We?fe(y,[Z]):fe(g,[Z]),Z._leaveCb=void 0,z[de]===t&&delete z[de])};z[de]=t,f?(f(Z,Be),f.length<=1&&Be()):Be()},clone(Z){return Da(Z,e,n,r)}};return we}function Pa(t){if(_i(t))return t=nr(t),t.children=null,t}function rh(t){return _i(t)?t.children?t.children[0]:void 0:t}function La(t,e){t.shapeFlag&6&&t.component?La(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function sh(t,e=!1){let n=[],r=0;for(let s=0;s<t.length;s++){const i=t[s];i.type===vt?(i.patchFlag&128&&r++,n=n.concat(sh(i.children,e))):(e||i.type!==It)&&n.push(i)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function ih(t){return J(t)?{setup:t,name:t.name}:t}const Ma=t=>!!t.type.__asyncLoader,_i=t=>t.type.__isKeepAlive;function tv(t,e){oh(t,"a",e)}function nv(t,e){oh(t,"da",e)}function oh(t,e,n=Ne){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}t()});if(Ii(e,r,n),n){let s=n.parent;for(;s&&s.parent;)_i(s.parent.vnode)&&rv(r,e,n,s),s=s.parent}}function rv(t,e,n,r){const s=Ii(e,t,r,!0);lh(()=>{Tu(r[e],s)},n)}function Ii(t,e,n=Ne,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;er(),rr(n);const a=wt(e,n,t,o);return bn(),wn(),a});return r?s.unshift(i):s.push(i),i}}const Ut=t=>(e,n=Ne)=>(!Ni||t==="sp")&&Ii(t,e,n),sv=Ut("bm"),ah=Ut("m"),iv=Ut("bu"),ov=Ut("u"),ch=Ut("bum"),lh=Ut("um"),av=Ut("sp"),cv=Ut("rtg"),lv=Ut("rtc");function uv(t,e=Ne){Ii("ec",t,e)}let xa=!0;function hv(t){const e=fh(t),n=t.proxy,r=t.ctx;xa=!1,e.beforeCreate&&uh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:y,activated:C,deactivated:v,beforeDestroy:b,beforeUnmount:L,destroyed:q,unmounted:z,render:fe,renderTracked:we,renderTriggered:Z,errorCaptured:Te,serverPrefetch:de,expose:$e,inheritAttrs:Be,components:We,directives:zt,filters:Kn}=e;if(l&&fv(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const pe in o){const ae=o[pe];J(ae)&&(r[pe]=ae.bind(n))}if(s){const pe=s.call(n,n);be(pe)&&(t.data=Yr(pe))}if(xa=!0,i)for(const pe in i){const ae=i[pe],gt=J(ae)?ae.bind(n,n):J(ae.get)?ae.get.bind(n,n):_t,Wn=!J(ae)&&J(ae.set)?ae.set.bind(n):_t,Mt=Ct({get:gt,set:Wn});Object.defineProperty(r,pe,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:bt=>Mt.value=bt})}if(a)for(const pe in a)hh(a[pe],r,n,pe);if(c){const pe=J(c)?c.call(n):c;Reflect.ownKeys(pe).forEach(ae=>{Ei(ae,pe[ae])})}u&&uh(u,t,"c");function Re(pe,ae){B(ae)?ae.forEach(gt=>pe(gt.bind(n))):ae&&pe(ae.bind(n))}if(Re(sv,h),Re(ah,f),Re(iv,g),Re(ov,y),Re(tv,C),Re(nv,v),Re(uv,Te),Re(lv,we),Re(cv,Z),Re(ch,L),Re(lh,z),Re(av,de),B($e))if($e.length){const pe=t.exposed||(t.exposed={});$e.forEach(ae=>{Object.defineProperty(pe,ae,{get:()=>n[ae],set:gt=>n[ae]=gt})})}else t.exposed||(t.exposed={});fe&&t.render===_t&&(t.render=fe),Be!=null&&(t.inheritAttrs=Be),We&&(t.components=We),zt&&(t.directives=zt)}function fv(t,e,n=_t,r=!1){B(t)&&(t=Ua(t));for(const s in t){const i=t[s];let o;be(i)?"default"in i?o=Rt(i.from||s,i.default,!0):o=Rt(i.from||s):o=Rt(i),tt(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function uh(t,e,n){wt(B(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function hh(t,e,n,r){const s=r.includes(".")?Wh(n,r):()=>n[r];if(Pe(t)){const i=e[t];J(i)&&Di(s,i)}else if(J(t))Di(s,t.bind(n));else if(be(t))if(B(t))t.forEach(i=>hh(i,e,n,r));else{const i=J(t.handler)?t.handler.bind(n):e[t.handler];J(i)&&Di(s,i,t)}}function fh(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Ti(c,l,o,!0)),Ti(c,e,o)),i.set(e,c),c}function Ti(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ti(t,i,n,!0),s&&s.forEach(o=>Ti(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=dv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const dv={data:dh,props:En,emits:En,methods:En,computed:En,beforeCreate:Ge,created:Ge,beforeMount:Ge,mounted:Ge,beforeUpdate:Ge,updated:Ge,beforeDestroy:Ge,beforeUnmount:Ge,destroyed:Ge,unmounted:Ge,activated:Ge,deactivated:Ge,errorCaptured:Ge,serverPrefetch:Ge,components:En,directives:En,watch:gv,provide:dh,inject:pv};function dh(t,e){return e?t?function(){return je(J(t)?t.call(this,this):t,J(e)?e.call(this,this):e)}:e:t}function pv(t,e){return En(Ua(t),Ua(e))}function Ua(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ge(t,e){return t?[...new Set([].concat(t,e))]:e}function En(t,e){return t?je(je(Object.create(null),t),e):e}function gv(t,e){if(!t)return e;if(!e)return t;const n=je(Object.create(null),t);for(const r in e)n[r]=Ge(t[r],e[r]);return n}function mv(t,e,n,r=!1){const s={},i={};ui(i,Ai,1),t.propsDefaults=Object.create(null),ph(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Fy(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function yv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=re(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];const g=e[f];if(c)if(ne(i,f))g!==i[f]&&(i[f]=g,l=!0);else{const y=At(f);s[y]=Fa(c,a,y,g,t,!1)}else g!==i[f]&&(i[f]=g,l=!0)}}}else{ph(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ne(e,h)&&((u=Xn(h))===h||!ne(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Fa(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ne(e,h))&&(delete i[h],l=!0)}l&&xt(t,"set","$attrs")}function ph(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(oi(c))continue;const l=e[c];let u;s&&ne(s,u=At(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ka(t.emitsOptions,c)||l!==r[c]&&(r[c]=l,o=!0)}if(i){const c=re(n),l=a||ue;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Fa(s,c,h,l[h],t,!ne(l,h))}}return o}function Fa(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ne(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&J(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(rr(s),r=l[n]=c.call(null,e),bn())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Xn(n))&&(r=!0))}return r}function gh(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!J(t)){const u=h=>{c=!0;const[f,g]=gh(h,e,!0);je(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return r.set(t,Qn),Qn;if(B(i))for(let u=0;u<i.length;u++){const h=At(i[u]);mh(h)&&(o[h]=ue)}else if(i)for(const u in i){const h=At(u);if(mh(h)){const f=i[u],g=o[h]=B(f)||J(f)?{type:f}:f;if(g){const y=wh(Boolean,g.type),C=wh(String,g.type);g[0]=y>-1,g[1]=C<0||y<C,(y>-1||ne(g,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function mh(t){return t[0]!=="$"}function yh(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function vh(t,e){return yh(t)===yh(e)}function wh(t,e){return B(e)?e.findIndex(n=>vh(n,t)):J(e)&&vh(e,t)?0:-1}const Eh=t=>t[0]==="_"||t==="$stable",Va=t=>B(t)?t.map(kt):[kt(t)],vv=(t,e,n)=>{const r=Ky((...s)=>Va(e(...s)),n);return r._c=!1,r},_h=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Eh(s))continue;const i=t[s];if(J(i))e[s]=vv(s,i,r);else if(i!=null){const o=Va(i);e[s]=()=>o}}},Ih=(t,e)=>{const n=Va(e);t.slots.default=()=>n},wv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),ui(e,"_",n)):_h(e,t.slots={})}else t.slots={},e&&Ih(t,e);ui(t.slots,Ai,1)},Ev=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ue;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(je(s,e),!n&&a===1&&delete s._):(i=!e.$stable,_h(e,s)),o=e}else e&&(Ih(t,e),o={default:1});if(i)for(const a in s)!Eh(a)&&!(a in o)&&delete s[a]};function AC(t,e){const n=ct;if(n===null)return t;const r=n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ue]=e[i];J(o)&&(o={mounted:o,updated:o}),o.deep&&Sn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function _n(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(er(),wt(c,n,8,[t.el,a,t,e]),wn())}}function Th(){return{app:null,config:{isNativeTag:ry,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _v=0;function Iv(t,e){return function(r,s=null){s!=null&&!be(s)&&(s=null);const i=Th(),o=new Set;let a=!1;const c=i.app={_uid:_v++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Jv,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&J(l.install)?(o.add(l),l.install(c,...u)):J(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=nt(r,s);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Ka(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}const Qe=Jy;function Tv(t){return bv(t)}function bv(t,e){const n=ly();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=_t,cloneNode:y,insertStaticContent:C}=t,v=(d,p,m,I=null,_=null,R=null,k=!1,S=null,A=!!p.dynamicChildren)=>{if(d===p)return;d&&!Tn(d,p)&&(I=U(d),mt(d,_,R,!0),d=null),p.patchFlag===-2&&(A=!1,p.dynamicChildren=null);const{type:T,ref:F,shapeFlag:M}=p;switch(T){case Ba:b(d,p,m,I);break;case It:L(d,p,m,I);break;case ja:d==null&&q(p,m,I,k);break;case vt:zt(d,p,m,I,_,R,k,S,A);break;default:M&1?we(d,p,m,I,_,R,k,S,A):M&6?Kn(d,p,m,I,_,R,k,S,A):(M&64||M&128)&&T.process(d,p,m,I,_,R,k,S,A,ge)}F!=null&&_&&$a(F,d&&d.ref,R,p||d,!p)},b=(d,p,m,I)=>{if(d==null)r(p.el=a(p.children),m,I);else{const _=p.el=d.el;p.children!==d.children&&l(_,p.children)}},L=(d,p,m,I)=>{d==null?r(p.el=c(p.children||""),m,I):p.el=d.el},q=(d,p,m,I)=>{[d.el,d.anchor]=C(d.children,p,m,I)},z=({el:d,anchor:p},m,I)=>{let _;for(;d&&d!==p;)_=f(d),r(d,m,I),d=_;r(p,m,I)},fe=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),s(d),d=m;s(p)},we=(d,p,m,I,_,R,k,S,A)=>{k=k||p.type==="svg",d==null?Z(p,m,I,_,R,k,S,A):$e(d,p,_,R,k,S,A)},Z=(d,p,m,I,_,R,k,S)=>{let A,T;const{type:F,props:M,shapeFlag:V,transition:W,patchFlag:te,dirs:Ee}=d;if(d.el&&y!==void 0&&te===-1)A=d.el=y(d.el);else{if(A=d.el=o(d.type,R,M&&M.is,M),V&8?u(A,d.children):V&16&&de(d.children,A,null,I,_,R&&F!=="foreignObject",k,S),Ee&&_n(d,null,I,"created"),M){for(const ye in M)ye!=="value"&&!oi(ye)&&i(A,ye,null,M[ye],R,d.children,I,_,N);"value"in M&&i(A,"value",null,M.value),(T=M.onVnodeBeforeMount)&&Nt(T,I,d)}Te(A,d,d.scopeId,k,I)}Ee&&_n(d,null,I,"beforeMount");const le=(!_||_&&!_.pendingBranch)&&W&&!W.persisted;le&&W.beforeEnter(A),r(A,p,m),((T=M&&M.onVnodeMounted)||le||Ee)&&Qe(()=>{T&&Nt(T,I,d),le&&W.enter(A),Ee&&_n(d,null,I,"mounted")},_)},Te=(d,p,m,I,_)=>{if(m&&g(d,m),I)for(let R=0;R<I.length;R++)g(d,I[R]);if(_){let R=_.subTree;if(p===R){const k=_.vnode;Te(d,k,k.scopeId,k.slotScopeIds,_.parent)}}},de=(d,p,m,I,_,R,k,S,A=0)=>{for(let T=A;T<d.length;T++){const F=d[T]=S?Qt(d[T]):kt(d[T]);v(null,F,p,m,I,_,R,k,S)}},$e=(d,p,m,I,_,R,k)=>{const S=p.el=d.el;let{patchFlag:A,dynamicChildren:T,dirs:F}=p;A|=d.patchFlag&16;const M=d.props||ue,V=p.props||ue;let W;(W=V.onVnodeBeforeUpdate)&&Nt(W,m,p,d),F&&_n(p,d,m,"beforeUpdate");const te=_&&p.type!=="foreignObject";if(T?Be(d.dynamicChildren,T,S,m,I,te,R):k||gt(d,p,S,null,m,I,te,R,!1),A>0){if(A&16)We(S,p,M,V,m,I,_);else if(A&2&&M.class!==V.class&&i(S,"class",null,V.class,_),A&4&&i(S,"style",M.style,V.style,_),A&8){const Ee=p.dynamicProps;for(let le=0;le<Ee.length;le++){const ye=Ee[le],Et=M[ye],Gn=V[ye];(Gn!==Et||ye==="value")&&i(S,ye,Et,Gn,_,d.children,m,I,N)}}A&1&&d.children!==p.children&&u(S,p.children)}else!k&&T==null&&We(S,p,M,V,m,I,_);((W=V.onVnodeUpdated)||F)&&Qe(()=>{W&&Nt(W,m,p,d),F&&_n(p,d,m,"updated")},I)},Be=(d,p,m,I,_,R,k)=>{for(let S=0;S<p.length;S++){const A=d[S],T=p[S],F=A.el&&(A.type===vt||!Tn(A,T)||A.shapeFlag&(6|64))?h(A.el):m;v(A,T,F,null,I,_,R,k,!0)}},We=(d,p,m,I,_,R,k)=>{if(m!==I){for(const S in I){if(oi(S))continue;const A=I[S],T=m[S];A!==T&&S!=="value"&&i(d,S,T,A,k,p.children,_,R,N)}if(m!==ue)for(const S in m)!oi(S)&&!(S in I)&&i(d,S,m[S],null,k,p.children,_,R,N);"value"in I&&i(d,"value",m.value,I.value)}},zt=(d,p,m,I,_,R,k,S,A)=>{const T=p.el=d?d.el:a(""),F=p.anchor=d?d.anchor:a("");let{patchFlag:M,dynamicChildren:V,slotScopeIds:W}=p;W&&(S=S?S.concat(W):W),d==null?(r(T,m,I),r(F,m,I),de(p.children,m,F,_,R,k,S,A)):M>0&&M&64&&V&&d.dynamicChildren?(Be(d.dynamicChildren,V,m,_,R,k,S),(p.key!=null||_&&p===_.subTree)&&bh(d,p,!0)):gt(d,p,m,F,_,R,k,S,A)},Kn=(d,p,m,I,_,R,k,S,A)=>{p.slotScopeIds=S,d==null?p.shapeFlag&512?_.ctx.activate(p,m,I,k,A):zn(p,m,I,_,R,k,A):Re(d,p,A)},zn=(d,p,m,I,_,R,k)=>{const S=d.component=Uv(d,I,_);if(_i(d)&&(S.ctx.renderer=ge),Vv(S),S.asyncDep){if(_&&_.registerDep(S,pe),!d.el){const A=S.subTree=nt(It);L(null,A,p,m)}return}pe(S,d,p,m,_,R,k)},Re=(d,p,m)=>{const I=p.component=d.component;if(Gy(d,p,m))if(I.asyncDep&&!I.asyncResolved){ae(I,p,m);return}else I.next=p,Wv(I.update),I.update();else p.component=d.component,p.el=d.el,I.vnode=p},pe=(d,p,m,I,_,R,k)=>{const S=()=>{if(d.isMounted){let{next:F,bu:M,u:V,parent:W,vnode:te}=d,Ee=F,le;A.allowRecurse=!1,F?(F.el=te.el,ae(d,F,k)):F=te,M&&li(M),(le=F.props&&F.props.onVnodeBeforeUpdate)&&Nt(le,W,F,te),A.allowRecurse=!0;const ye=Oa(d),Et=d.subTree;d.subTree=ye,v(Et,ye,h(Et.el),U(Et),d,_,R),F.el=ye.el,Ee===null&&Qy(d,ye.el),V&&Qe(V,_),(le=F.props&&F.props.onVnodeUpdated)&&Qe(()=>Nt(le,W,F,te),_)}else{let F;const{el:M,props:V}=p,{bm:W,m:te,parent:Ee}=d,le=Ma(p);if(A.allowRecurse=!1,W&&li(W),!le&&(F=V&&V.onVnodeBeforeMount)&&Nt(F,Ee,p),A.allowRecurse=!0,M&&Y){const ye=()=>{d.subTree=Oa(d),Y(M,d.subTree,d,_,null)};le?p.type.__asyncLoader().then(()=>!d.isUnmounted&&ye()):ye()}else{const ye=d.subTree=Oa(d);v(null,ye,m,I,d,_,R),p.el=ye.el}if(te&&Qe(te,_),!le&&(F=V&&V.onVnodeMounted)){const ye=p;Qe(()=>Nt(F,Ee,ye),_)}p.shapeFlag&256&&d.a&&Qe(d.a,_),d.isMounted=!0,p=m=I=null}},A=new Ia(S,()=>$h(d.update),d.scope),T=d.update=A.run.bind(A);T.id=d.uid,A.allowRecurse=T.allowRecurse=!0,T()},ae=(d,p,m)=>{p.component=d;const I=d.vnode.props;d.vnode=p,d.next=null,yv(d,p.props,I,m),Ev(d,p.children,m),er(),Qa(void 0,d.update),wn()},gt=(d,p,m,I,_,R,k,S,A=!1)=>{const T=d&&d.children,F=d?d.shapeFlag:0,M=p.children,{patchFlag:V,shapeFlag:W}=p;if(V>0){if(V&128){Mt(T,M,m,I,_,R,k,S,A);return}else if(V&256){Wn(T,M,m,I,_,R,k,S,A);return}}W&8?(F&16&&N(T,_,R),M!==T&&u(m,M)):F&16?W&16?Mt(T,M,m,I,_,R,k,S,A):N(T,_,R,!0):(F&8&&u(m,""),W&16&&de(M,m,I,_,R,k,S,A))},Wn=(d,p,m,I,_,R,k,S,A)=>{d=d||Qn,p=p||Qn;const T=d.length,F=p.length,M=Math.min(T,F);let V;for(V=0;V<M;V++){const W=p[V]=A?Qt(p[V]):kt(p[V]);v(d[V],W,m,null,_,R,k,S,A)}T>F?N(d,_,R,!0,!1,M):de(p,m,I,_,R,k,S,A,M)},Mt=(d,p,m,I,_,R,k,S,A)=>{let T=0;const F=p.length;let M=d.length-1,V=F-1;for(;T<=M&&T<=V;){const W=d[T],te=p[T]=A?Qt(p[T]):kt(p[T]);if(Tn(W,te))v(W,te,m,null,_,R,k,S,A);else break;T++}for(;T<=M&&T<=V;){const W=d[M],te=p[V]=A?Qt(p[V]):kt(p[V]);if(Tn(W,te))v(W,te,m,null,_,R,k,S,A);else break;M--,V--}if(T>M){if(T<=V){const W=V+1,te=W<F?p[W].el:I;for(;T<=V;)v(null,p[T]=A?Qt(p[T]):kt(p[T]),m,te,_,R,k,S,A),T++}}else if(T>V)for(;T<=M;)mt(d[T],_,R,!0),T++;else{const W=T,te=T,Ee=new Map;for(T=te;T<=V;T++){const ot=p[T]=A?Qt(p[T]):kt(p[T]);ot.key!=null&&Ee.set(ot.key,T)}let le,ye=0;const Et=V-te+1;let Gn=!1,vu=0;const Kr=new Array(Et);for(T=0;T<Et;T++)Kr[T]=0;for(T=W;T<=M;T++){const ot=d[T];if(ye>=Et){mt(ot,_,R,!0);continue}let St;if(ot.key!=null)St=Ee.get(ot.key);else for(le=te;le<=V;le++)if(Kr[le-te]===0&&Tn(ot,p[le])){St=le;break}St===void 0?mt(ot,_,R,!0):(Kr[St-te]=T+1,St>=vu?vu=St:Gn=!0,v(ot,p[St],m,null,_,R,k,S,A),ye++)}const wu=Gn?Sv(Kr):Qn;for(le=wu.length-1,T=Et-1;T>=0;T--){const ot=te+T,St=p[ot],Eu=ot+1<F?p[ot+1].el:I;Kr[T]===0?v(null,St,m,Eu,_,R,k,S,A):Gn&&(le<0||T!==wu[le]?bt(St,m,Eu,2):le--)}}},bt=(d,p,m,I,_=null)=>{const{el:R,type:k,transition:S,children:A,shapeFlag:T}=d;if(T&6){bt(d.component.subTree,p,m,I);return}if(T&128){d.suspense.move(p,m,I);return}if(T&64){k.move(d,p,m,ge);return}if(k===vt){r(R,p,m);for(let M=0;M<A.length;M++)bt(A[M],p,m,I);r(d.anchor,p,m);return}if(k===ja){z(d,p,m);return}if(I!==2&&T&1&&S)if(I===0)S.beforeEnter(R),r(R,p,m),Qe(()=>S.enter(R),_);else{const{leave:M,delayLeave:V,afterLeave:W}=S,te=()=>r(R,p,m),Ee=()=>{M(R,()=>{te(),W&&W()})};V?V(R,te,Ee):Ee()}else r(R,p,m)},mt=(d,p,m,I=!1,_=!1)=>{const{type:R,props:k,ref:S,children:A,dynamicChildren:T,shapeFlag:F,patchFlag:M,dirs:V}=d;if(S!=null&&$a(S,null,m,d,!0),F&256){p.ctx.deactivate(d);return}const W=F&1&&V,te=!Ma(d);let Ee;if(te&&(Ee=k&&k.onVnodeBeforeUnmount)&&Nt(Ee,p,d),F&6)x(d.component,m,I);else{if(F&128){d.suspense.unmount(m,I);return}W&&_n(d,null,p,"beforeUnmount"),F&64?d.type.remove(d,p,m,_,ge,I):T&&(R!==vt||M>0&&M&64)?N(T,p,m,!1,!0):(R===vt&&M&(128|256)||!_&&F&16)&&N(A,p,m),I&&la(d)}(te&&(Ee=k&&k.onVnodeUnmounted)||W)&&Qe(()=>{Ee&&Nt(Ee,p,d),W&&_n(d,null,p,"unmounted")},m)},la=d=>{const{type:p,el:m,anchor:I,transition:_}=d;if(p===vt){E(m,I);return}if(p===ja){fe(d);return}const R=()=>{s(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(d.shapeFlag&1&&_&&!_.persisted){const{leave:k,delayLeave:S}=_,A=()=>k(m,R);S?S(d.el,R,A):A()}else R()},E=(d,p)=>{let m;for(;d!==p;)m=f(d),s(d),d=m;s(p)},x=(d,p,m)=>{const{bum:I,scope:_,update:R,subTree:k,um:S}=d;I&&li(I),_.stop(),R&&(R.active=!1,mt(k,d,p,m)),S&&Qe(S,p),Qe(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},N=(d,p,m,I=!1,_=!1,R=0)=>{for(let k=R;k<d.length;k++)mt(d[k],p,m,I,_)},U=d=>d.shapeFlag&6?U(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),ce=(d,p,m)=>{d==null?p._vnode&&mt(p._vnode,null,null,!0):v(p._vnode||null,d,p,null,null,null,m),qh(),p._vnode=d},ge={p:v,um:mt,m:bt,r:la,mt:zn,mc:de,pc:gt,pbc:Be,n:U,o:t};let X,Y;return e&&([X,Y]=e(ge)),{render:ce,hydrate:X,createApp:Iv(ce,X)}}function $a(t,e,n,r,s=!1){if(B(t)){t.forEach((f,g)=>$a(f,e&&(B(e)?e[g]:e),n,r,s));return}if(Ma(r)&&!s)return;const i=r.shapeFlag&4?Ka(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ue?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Pe(l)?(u[l]=null,ne(h,l)&&(h[l]=null)):tt(l)&&(l.value=null)),Pe(c)){const f=()=>{u[c]=o,ne(h,c)&&(h[c]=o)};o?(f.id=-1,Qe(f,n)):f()}else if(tt(c)){const f=()=>{c.value=o};o?(f.id=-1,Qe(f,n)):f()}else J(c)&&Yt(c,a,12,[o,u])}function Nt(t,e,n,r=null){wt(t,e,7,[n,r])}function bh(t,e,n=!1){const r=t.children,s=e.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Qt(s[i]),a.el=o.el),n||bh(o,a))}}function Sv(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Av=t=>t.__isTeleport,Sh="components";function CC(t,e){return Rv(Sh,t,!0,e)||t}const Cv=Symbol();function Rv(t,e,n=!0,r=!1){const s=ct||Ne;if(s){const i=s.type;if(t===Sh){const a=qv(i);if(a&&(a===e||a===At(e)||a===ci(At(e))))return i}const o=Ah(s[t]||i[t],e)||Ah(s.appContext[t],e);return!o&&r?i:o}}function Ah(t,e){return t&&(t[e]||t[At(e)]||t[ci(At(e))])}const vt=Symbol(void 0),Ba=Symbol(void 0),It=Symbol(void 0),ja=Symbol(void 0),Zr=[];let In=null;function Ch(t=!1){Zr.push(In=t?null:[])}function Nv(){Zr.pop(),In=Zr[Zr.length-1]||null}let bi=1;function Rh(t){bi+=t}function Nh(t){return t.dynamicChildren=bi>0?In||Qn:null,Nv(),bi>0&&In&&In.push(t),t}function RC(t,e,n,r,s,i){return Nh(Dh(t,e,n,r,s,i,!0))}function kh(t,e,n,r,s){return Nh(nt(t,e,n,r,s,!0))}function Si(t){return t?t.__v_isVNode===!0:!1}function Tn(t,e){return t.type===e.type&&t.key===e.key}const Ai="__vInternal",Oh=({key:t})=>t!=null?t:null,Ci=({ref:t})=>t!=null?Pe(t)||tt(t)||J(t)?{i:ct,r:t}:t:null;function Dh(t,e=null,n=null,r=0,s=null,i=t===vt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Oh(e),ref:e&&Ci(e),scopeId:eh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(qa(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Pe(n)?8:16),bi>0&&!o&&In&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&In.push(c),c}const nt=kv;function kv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Cv)&&(t=It),Si(t)){const a=nr(t,e,!0);return n&&qa(a,n),a}if(Hv(t)&&(t=t.__vccOpts),e){e=Ov(e);let{class:a,style:c}=e;a&&!Pe(a)&&(e.class=fa(a)),be(c)&&(Wu(c)&&!B(c)&&(c=je({},c)),e.style=ha(c))}const o=Pe(t)?1:Yy(t)?128:Av(t)?64:be(t)?4:J(t)?2:0;return Dh(t,e,n,r,s,o,i,!0)}function Ov(t){return t?Wu(t)||Ai in t?je({},t):t:null}function nr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Pv(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Oh(a),ref:e&&e.ref?n&&s?B(s)?s.concat(Ci(e)):[s,Ci(e)]:Ci(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==vt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&nr(t.ssContent),ssFallback:t.ssFallback&&nr(t.ssFallback),el:t.el,anchor:t.anchor}}function Dv(t=" ",e=0){return nt(Ba,null,t,e)}function NC(t="",e=!1){return e?(Ch(),kh(It,null,t)):nt(It,null,t)}function kt(t){return t==null||typeof t=="boolean"?nt(It):B(t)?nt(vt,null,t.slice()):typeof t=="object"?Qt(t):nt(Ba,null,String(t))}function Qt(t){return t.el===null||t.memo?t:nr(t)}function qa(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(r&(1|64)){const s=e.default;s&&(s._c&&(s._d=!1),qa(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ai in e)?e._ctx=ct:s===3&&ct&&(ct.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:ct},n=32):(e=String(e),r&64?(n=16,e=[Dv(e)]):n=8);t.children=e,t.shapeFlag|=n}function Pv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=fa([e.class,r.class]));else if(s==="style")e.style=ha([e.style,r.style]);else if(si(s)){const i=e[s],o=r[s];i!==o&&!(B(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function kC(t,e,n,r){let s;const i=n&&n[r];if(B(t)||Pe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(be(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function OC(t,e,n={},r,s){if(ct.isCE)return nt("slot",e==="default"?null:{name:e},r&&r());let i=t[e];i&&i._c&&(i._d=!1),Ch();const o=i&&Ph(i(n)),a=kh(vt,{key:n.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Ph(t){return t.some(e=>Si(e)?!(e.type===It||e.type===vt&&!Ph(e.children)):!0)?t:null}const Ha=t=>t?Lh(t)?Ka(t)||t.proxy:Ha(t.parent):null,Ri=je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ha(t.parent),$root:t=>Ha(t.root),$emit:t=>t.emit,$options:t=>fh(t),$forceUpdate:t=>()=>$h(t.update),$nextTick:t=>Vh.bind(t.proxy),$watch:t=>Yv.bind(t)}),Lv={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 0:return r[e];case 1:return s[e];case 3:return n[e];case 2:return i[e]}else{if(r!==ue&&ne(r,e))return o[e]=0,r[e];if(s!==ue&&ne(s,e))return o[e]=1,s[e];if((l=t.propsOptions[0])&&ne(l,e))return o[e]=2,i[e];if(n!==ue&&ne(n,e))return o[e]=3,n[e];xa&&(o[e]=4)}}const u=Ri[e];let h,f;if(u)return e==="$attrs"&&at(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ue&&ne(n,e))return o[e]=3,n[e];if(f=c.config.globalProperties,ne(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;if(s!==ue&&ne(s,e))s[e]=n;else if(r!==ue&&ne(r,e))r[e]=n;else if(ne(t.props,e))return!1;return e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return n[o]!==void 0||t!==ue&&ne(t,o)||e!==ue&&ne(e,o)||(a=i[0])&&ne(a,o)||ne(r,o)||ne(Ri,o)||ne(s.config.globalProperties,o)}},Mv=Th();let xv=0;function Uv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Mv,i={uid:xv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,update:null,scope:new uy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gh(r,s),emitsOptions:Zu(r,s),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:r.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Hy.bind(null,i),t.ce&&t.ce(i),i}let Ne=null;const Fv=()=>Ne||ct,rr=t=>{Ne=t,t.scope.on()},bn=()=>{Ne&&Ne.scope.off(),Ne=null};function Lh(t){return t.vnode.shapeFlag&4}let Ni=!1;function Vv(t,e=!1){Ni=e;const{props:n,children:r}=t.vnode,s=Lh(t);mv(t,n,s,e),wv(t,r);const i=s?$v(t,e):void 0;return Ni=!1,i}function $v(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Gu(new Proxy(t.ctx,Lv));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?jv(t):null;rr(t),er();const i=Yt(r,t,0,[t.props,s]);if(wn(),bn(),Su(i)){if(i.then(bn,bn),e)return i.then(o=>{Mh(t,o,e)}).catch(o=>{ki(o,t,0)});t.asyncDep=i}else Mh(t,i,e)}else Uh(t,e)}function Mh(t,e,n){J(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:be(e)&&(t.setupState=Xu(e)),Uh(t,n)}let xh;function Uh(t,e,n){const r=t.type;if(!t.render){if(!e&&xh&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=je(je({isCustomElement:i,delimiters:a},o),c);r.render=xh(s,l)}}t.render=r.render||_t}rr(t),er(),hv(t),wn(),bn()}function Bv(t){return new Proxy(t.attrs,{get(e,n){return at(t,"get","$attrs"),e[n]}})}function jv(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Bv(t))},slots:t.slots,emit:t.emit,expose:e}}function Ka(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Xu(Gu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ri)return Ri[n](t)}}))}function qv(t){return J(t)&&t.displayName||t.name}function Hv(t){return J(t)&&"__vccOpts"in t}function Yt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){ki(i,e,n)}return s}function wt(t,e,n,r){if(J(t)){const i=Yt(t,e,n,r);return i&&Su(i)&&i.catch(o=>{ki(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(wt(t[i],e,n,r));return s}function ki(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Yt(c,null,10,[t,o,a]);return}}Kv(t,n,s,r)}function Kv(t,e,n,r=!0){console.error(t)}let Oi=!1,za=!1;const lt=[];let Ft=0;const es=[];let ts=null,sr=0;const ns=[];let Jt=null,ir=0;const Fh=Promise.resolve();let Wa=null,Ga=null;function Vh(t){const e=Wa||Fh;return t?e.then(this?t.bind(this):t):e}function zv(t){let e=Ft+1,n=lt.length;for(;e<n;){const r=e+n>>>1;rs(lt[r])<t?e=r+1:n=r}return e}function $h(t){(!lt.length||!lt.includes(t,Oi&&t.allowRecurse?Ft+1:Ft))&&t!==Ga&&(t.id==null?lt.push(t):lt.splice(zv(t.id),0,t),Bh())}function Bh(){!Oi&&!za&&(za=!0,Wa=Fh.then(Hh))}function Wv(t){const e=lt.indexOf(t);e>Ft&&lt.splice(e,1)}function jh(t,e,n,r){B(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Bh()}function Gv(t){jh(t,ts,es,sr)}function Qv(t){jh(t,Jt,ns,ir)}function Qa(t,e=null){if(es.length){for(Ga=e,ts=[...new Set(es)],es.length=0,sr=0;sr<ts.length;sr++)ts[sr]();ts=null,sr=0,Ga=null,Qa(t,e)}}function qh(t){if(ns.length){const e=[...new Set(ns)];if(ns.length=0,Jt){Jt.push(...e);return}for(Jt=e,Jt.sort((n,r)=>rs(n)-rs(r)),ir=0;ir<Jt.length;ir++)Jt[ir]();Jt=null,ir=0}}const rs=t=>t.id==null?1/0:t.id;function Hh(t){za=!1,Oi=!0,Qa(t),lt.sort((n,r)=>rs(n)-rs(r));const e=_t;try{for(Ft=0;Ft<lt.length;Ft++){const n=lt[Ft];n&&n.active!==!1&&Yt(n,null,14)}}finally{Ft=0,lt.length=0,qh(),Oi=!1,Wa=null,(lt.length||es.length||ns.length)&&Hh(t)}}const Kh={};function Di(t,e,n){return zh(t,e,n)}function zh(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ue){const a=Ne;let c,l=!1,u=!1;if(tt(t)?(c=()=>t.value,l=!!t._shallow):tr(t)?(c=()=>t,r=!0):B(t)?(u=!0,l=t.some(tr),c=()=>t.map(b=>{if(tt(b))return b.value;if(tr(b))return Sn(b);if(J(b))return Yt(b,a,2)})):J(t)?e?c=()=>Yt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),wt(t,a,3,[f])}:c=_t,e&&r){const b=c;c=()=>Sn(b())}let h,f=b=>{h=v.onStop=()=>{Yt(b,a,4)}};if(Ni)return f=_t,e?n&&wt(e,a,3,[c(),u?[]:void 0,f]):c(),_t;let g=u?[]:Kh;const y=()=>{if(!!v.active)if(e){const b=v.run();(r||l||(u?b.some((L,q)=>Wr(L,g[q])):Wr(b,g)))&&(h&&h(),wt(e,a,3,[b,g===Kh?void 0:g,f]),g=b)}else v.run()};y.allowRecurse=!!e;let C;s==="sync"?C=y:s==="post"?C=()=>Qe(y,a&&a.suspense):C=()=>{!a||a.isMounted?Gv(y):y()};const v=new Ia(c,C);return e?n?y():g=v.run():s==="post"?Qe(v.run.bind(v),a&&a.suspense):v.run(),()=>{v.stop(),a&&a.scope&&Tu(a.scope.effects,v)}}function Yv(t,e,n){const r=this.proxy,s=Pe(t)?t.includes(".")?Wh(r,t):()=>r[t]:t.bind(r,r);let i;J(e)?i=e:(i=e.handler,n=e);const o=Ne;rr(this);const a=zh(s,i.bind(r),n);return o?rr(o):bn(),a}function Wh(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Sn(t,e){if(!be(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),tt(t))Sn(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)Sn(t[n],e);else if(Jn(t)||Yn(t))t.forEach(n=>{Sn(n,e)});else if(Cu(t))for(const n in t)Sn(t[n],e);return t}function Gh(t,e,n){const r=arguments.length;return r===2?be(e)&&!B(e)?Si(e)?nt(t,null,[e]):nt(t,e):nt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Si(n)&&(n=[n]),nt(t,e,n))}const Jv="3.2.22",Xv="http://www.w3.org/2000/svg",or=typeof document!="undefined"?document:null,Qh=new Map,Zv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?or.createElementNS(Xv,t):or.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>or.createTextNode(t),createComment:t=>or.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>or.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r){const s=n?n.previousSibling:e.lastChild;let i=Qh.get(t);if(!i){const o=or.createElement("template");if(o.innerHTML=r?`<svg>${t}</svg>`:t,i=o.content,r){const a=i.firstChild;for(;a.firstChild;)i.appendChild(a.firstChild);i.removeChild(a)}Qh.set(t,i)}return e.insertBefore(i.cloneNode(!0),n),[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function ew(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function tw(t,e,n){const r=t.style,s=Pe(n);if(n&&!s){for(const i in n)Ya(r,i,n[i]);if(e&&!Pe(e))for(const i in e)n[i]==null&&Ya(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Yh=/\s*!important$/;function Ya(t,e,n){if(B(n))n.forEach(r=>Ya(t,e,r));else if(e.startsWith("--"))t.setProperty(e,n);else{const r=nw(t,e);Yh.test(n)?t.setProperty(Xn(r),n.replace(Yh,""),"important"):t[r]=n}}const Jh=["Webkit","Moz","ms"],Ja={};function nw(t,e){const n=Ja[e];if(n)return n;let r=At(e);if(r!=="filter"&&r in t)return Ja[e]=r;r=ci(r);for(let s=0;s<Jh.length;s++){const i=Jh[s]+r;if(i in t)return Ja[e]=i}return e}const Xh="http://www.w3.org/1999/xlink";function rw(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Xh,e.slice(6,e.length)):t.setAttributeNS(Xh,e,n);else{const i=Xm(e);n==null||i&&!_u(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function sw(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"){t._value=n;const a=n==null?"":n;t.value!==a&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=_u(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let Pi=Date.now,Zh=!1;if(typeof window!="undefined"){Pi()>document.createEvent("Event").timeStamp&&(Pi=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Zh=!!(t&&Number(t[1])<=53)}let Xa=0;const iw=Promise.resolve(),ow=()=>{Xa=0},aw=()=>Xa||(iw.then(ow),Xa=Pi());function Xt(t,e,n,r){t.addEventListener(e,n,r)}function cw(t,e,n,r){t.removeEventListener(e,n,r)}function lw(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=uw(e);if(r){const l=i[e]=hw(r,s);Xt(t,a,l,c)}else o&&(cw(t,a,o,c),i[e]=void 0)}}const ef=/(?:Once|Passive|Capture)$/;function uw(t){let e;if(ef.test(t)){e={};let n;for(;n=t.match(ef);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Xn(t.slice(2)),e]}function hw(t,e){const n=r=>{const s=r.timeStamp||Pi();(Zh||s>=n.attached-1)&&wt(fw(r,n.value),e,5,[r])};return n.value=t,n.attached=aw(),n}function fw(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r(s))}else return e}const tf=/^on[a-z]/,dw=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?ew(t,r,s):e==="style"?tw(t,n,r):si(e)?pa(e)||lw(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):pw(t,e,r,s))?sw(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),rw(t,e,r,s))};function pw(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&tf.test(e)&&J(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||tf.test(e)&&Pe(n)?!1:e in t}const gw={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ev.props;const ar=t=>{const e=t.props["onUpdate:modelValue"];return B(e)?n=>li(e,n):e};function mw(t){t.target.composing=!0}function nf(t){const e=t.target;e.composing&&(e.composing=!1,yw(e,"input"))}function yw(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const DC={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=ar(s);const i=r||s.props&&s.props.type==="number";Xt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=hi(a)),t._assign(a)}),n&&Xt(t,"change",()=>{t.value=t.value.trim()}),e||(Xt(t,"compositionstart",mw),Xt(t,"compositionend",nf),Xt(t,"change",nf))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=ar(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&hi(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},PC={deep:!0,created(t,e,n){t._assign=ar(n),Xt(t,"change",()=>{const r=t._modelValue,s=ss(t),i=t.checked,o=t._assign;if(B(r)){const a=da(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(Jn(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(of(t,i))})},mounted:rf,beforeUpdate(t,e,n){t._assign=ar(n),rf(t,e,n)}};function rf(t,{value:e,oldValue:n},r){t._modelValue=e,B(e)?t.checked=da(e,r.props.value)>-1:Jn(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=zr(e,of(t,!0)))}const LC={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Jn(e);Xt(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?hi(ss(o)):ss(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=ar(r)},mounted(t,{value:e}){sf(t,e)},beforeUpdate(t,e,n){t._assign=ar(n)},updated(t,{value:e}){sf(t,e)}};function sf(t,e){const n=t.multiple;if(!(n&&!B(e)&&!Jn(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=ss(i);if(n)B(e)?i.selected=da(e,o)>-1:i.selected=e.has(o);else if(zr(ss(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ss(t){return"_value"in t?t._value:t.value}function of(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const vw=["ctrl","shift","alt","meta"],ww={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>vw.some(n=>t[`${n}Key`]&&!e.includes(n))},MC=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=ww[e[s]];if(i&&i(n,e))return}return t(n,...r)},Ew=je({patchProp:dw},Zv);let af;function _w(){return af||(af=Tv(Ew))}const xC=(...t)=>{const e=_w().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Iw(r);if(!s)return;const i=e._component;!J(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Iw(t){return Pe(t)?document.querySelector(t):t}/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const cf=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",cr=t=>cf?Symbol(t):"_vr_"+t,Tw=cr("rvlm"),lf=cr("rvd"),Li=cr("r"),Za=cr("rl"),ec=cr("rvl"),lr=typeof window!="undefined";function bw(t){return t.__esModule||cf&&t[Symbol.toStringTag]==="Module"}const he=Object.assign;function tc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const is=()=>{},Sw=/\/$/,Aw=t=>t.replace(Sw,"");function nc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=kw(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Cw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function uf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Rw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ur(e.matched[r],n.matched[s])&&hf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ur(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function hf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Nw(t[n],e[n]))return!1;return!0}function Nw(t,e){return Array.isArray(t)?ff(t,e):Array.isArray(e)?ff(e,t):t===e}function ff(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function kw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var os;(function(t){t.pop="pop",t.push="push"})(os||(os={}));var as;(function(t){t.back="back",t.forward="forward",t.unknown=""})(as||(as={}));function Ow(t){if(!t)if(lr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Aw(t)}const Dw=/^[^#]+#/;function Pw(t,e){return t.replace(Dw,"#")+e}function Lw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Mi=()=>({left:window.pageXOffset,top:window.pageYOffset});function Mw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Lw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function df(t,e){return(history.state?history.state.position-e:-1)+t}const rc=new Map;function xw(t,e){rc.set(t,e)}function Uw(t){const e=rc.get(t);return rc.delete(t),e}let Fw=()=>location.protocol+"//"+location.host;function pf(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),uf(c,"")}return uf(n,t)+r+s}function Vw(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const g=pf(t,location),y=n.value,C=e.value;let v=0;if(f){if(n.value=g,e.value=f,o&&o===y){o=null;return}v=C?f.position-C.position:0}else r(g);s.forEach(b=>{b(n.value,y,{delta:v,type:os.pop,direction:v?v>0?as.forward:as.back:as.unknown})})};function c(){o=n.value}function l(f){s.push(f);const g=()=>{const y=s.indexOf(f);y>-1&&s.splice(y,1)};return i.push(g),g}function u(){const{history:f}=window;!f.state||f.replaceState(he({},f.state,{scroll:Mi()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function gf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Mi():null}}function $w(t){const{history:e,location:n}=window,r={value:pf(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Fw()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(c,l){const u=he({},e.state,gf(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=he({},s.value,e.state,{forward:c,scroll:Mi()});i(u.current,u,!0);const h=he({},gf(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function UC(t){t=Ow(t);const e=$w(t),n=Vw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=he({location:"",base:t,go:r,createHref:Pw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Bw(t){return typeof t=="string"||t&&typeof t=="object"}function mf(t){return typeof t=="string"||typeof t=="symbol"}const Zt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},yf=cr("nf");var vf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(vf||(vf={}));function hr(t,e){return he(new Error,{type:t,[yf]:!0},e)}function An(t,e){return t instanceof Error&&yf in t&&(e==null||!!(t.type&e))}const wf="[^/]+?",jw={sensitive:!1,strict:!1,start:!0,end:!0},qw=/[.+*?^${}()[\]/\\]/g;function Hw(t,e){const n=he({},jw,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(qw,"\\$&"),g+=40;else if(f.type===1){const{value:y,repeatable:C,optional:v,regexp:b}=f;i.push({name:y,repeatable:C,optional:v});const L=b||wf;if(L!==wf){g+=10;try{new RegExp(`(${L})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${y}" (${L}): `+z.message)}}let q=C?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;h||(q=v&&l.length<2?`(?:/${q})`:"/"+q),v&&(q+="?"),s+=q,g+=20,v&&(g+=-8),C&&(g+=-20),L===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",y=i[f-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:y,repeatable:C,optional:v}=g,b=y in l?l[y]:"";if(Array.isArray(b)&&!C)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const L=Array.isArray(b)?b.join("/"):b;if(!L)if(v)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=L}}return u}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Kw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function zw(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Kw(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const Ww={type:0,value:""},Gw=/[a-zA-Z0-9_]/;function Qw(t){if(!t)return[[]];if(t==="/")return[[Ww]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:Gw.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Yw(t,e,n){const r=Hw(Qw(t.path),n),s=he(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Jw(t,e){const n=[],r=new Map;e=_f({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const g=!f,y=Zw(u);y.aliasOf=f&&f.record;const C=_f(e,u),v=[y];if("alias"in u){const q=typeof u.alias=="string"?[u.alias]:u.alias;for(const z of q)v.push(he({},y,{components:f?f.record.components:y.components,path:z,aliasOf:f?f.record:y}))}let b,L;for(const q of v){const{path:z}=q;if(h&&z[0]!=="/"){const fe=h.record.path,we=fe[fe.length-1]==="/"?"":"/";q.path=h.record.path+(z&&we+z)}if(b=Yw(q,h,C),f?f.alias.push(b):(L=L||b,L!==b&&L.alias.push(b),g&&u.name&&!Ef(b)&&o(u.name)),"children"in y){const fe=y.children;for(let we=0;we<fe.length;we++)i(fe[we],b,f&&f.children[we])}f=f||b,c(b)}return L?()=>{o(L)}:is}function o(u){if(mf(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&zw(u,n[h])>=0;)h++;n.splice(h,0,u),u.record.name&&!Ef(u)&&r.set(u.record.name,u)}function l(u,h){let f,g={},y,C;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw hr(1,{location:u});C=f.record.name,g=he(Xw(h.params,f.keys.filter(L=>!L.optional).map(L=>L.name)),u.params),y=f.stringify(g)}else if("path"in u)y=u.path,f=n.find(L=>L.re.test(y)),f&&(g=f.parse(y),C=f.record.name);else{if(f=h.name?r.get(h.name):n.find(L=>L.re.test(h.path)),!f)throw hr(1,{location:u,currentLocation:h});C=f.record.name,g=he({},h.params,u.params),y=f.stringify(g)}const v=[];let b=f;for(;b;)v.unshift(b.record),b=b.parent;return{name:C,path:y,params:g,matched:v,meta:tE(v)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Xw(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Zw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:eE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function eE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Ef(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function tE(t){return t.reduce((e,n)=>he(e,n.meta),{})}function _f(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const If=/#/g,nE=/&/g,rE=/\//g,sE=/=/g,iE=/\?/g,Tf=/\+/g,oE=/%5B/g,aE=/%5D/g,bf=/%5E/g,cE=/%60/g,Sf=/%7B/g,lE=/%7C/g,Af=/%7D/g,uE=/%20/g;function sc(t){return encodeURI(""+t).replace(lE,"|").replace(oE,"[").replace(aE,"]")}function hE(t){return sc(t).replace(Sf,"{").replace(Af,"}").replace(bf,"^")}function ic(t){return sc(t).replace(Tf,"%2B").replace(uE,"+").replace(If,"%23").replace(nE,"%26").replace(cE,"`").replace(Sf,"{").replace(Af,"}").replace(bf,"^")}function fE(t){return ic(t).replace(sE,"%3D")}function dE(t){return sc(t).replace(If,"%23").replace(iE,"%3F")}function pE(t){return t==null?"":dE(t).replace(rE,"%2F")}function xi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function gE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Tf," "),o=i.indexOf("="),a=xi(o<0?i:i.slice(0,o)),c=o<0?null:xi(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Cf(t){let e="";for(let n in t){const r=t[n];if(n=fE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&ic(i)):[r&&ic(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function mE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function cs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function en(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(hr(4,{from:n,to:e})):h instanceof Error?a(h):Bw(h)?a(hr(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function oc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(yE(a)){const l=(a.__vccOpts||a)[e];l&&s.push(en(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=bw(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&en(f,n,r,i,o)()}))}}return s}function yE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Rf(t){const e=Rt(Li),n=Rt(Za),r=Ct(()=>e.resolve(Xr(t.to))),s=Ct(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(ur.bind(null,u));if(f>-1)return f;const g=Nf(c[l-2]);return l>1&&Nf(u)===g&&h[h.length-1].path!==g?h.findIndex(ur.bind(null,c[l-2])):f}),i=Ct(()=>s.value>-1&&_E(n.params,r.value.params)),o=Ct(()=>s.value>-1&&s.value===n.matched.length-1&&hf(n.params,r.value.params));function a(c={}){return EE(c)?e[Xr(t.replace)?"replace":"push"](Xr(t.to)).catch(is):Promise.resolve()}return{route:r,href:Ct(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const vE=ih({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Rf,setup(t,{slots:e}){const n=Yr(Rf(t)),{options:r}=Rt(Li),s=Ct(()=>({[kf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[kf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Gh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),wE=vE;function EE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function _E(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Nf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const kf=(t,e,n)=>t!=null?t:e!=null?e:n,IE=ih({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=Rt(ec),s=Ct(()=>t.route||r.value),i=Rt(lf,0),o=Ct(()=>s.value.matched[i]);Ei(lf,i+1),Ei(Tw,o),Ei(ec,s);const a=Vy();return Di(()=>[a.value,o.value,t.name],([c,l,u],[h,f,g])=>{l&&(l.instances[u]=c,f&&f!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),c&&l&&(!f||!ur(l,f)||!h)&&(l.enterCallbacks[u]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=s.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return Of(n.default,{Component:u,route:c});const f=l.props[t.name],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,C=Gh(u,he({},g,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return Of(n.default,{Component:C,route:c})||C}}});function Of(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const TE=IE;function FC(t){const e=Jw(t.routes,t),n=t.parseQuery||gE,r=t.stringifyQuery||Cf,s=t.history,i=cs(),o=cs(),a=cs(),c=$y(Zt);let l=Zt;lr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=tc.bind(null,E=>""+E),h=tc.bind(null,pE),f=tc.bind(null,xi);function g(E,x){let N,U;return mf(E)?(N=e.getRecordMatcher(E),U=x):U=E,e.addRoute(U,N)}function y(E){const x=e.getRecordMatcher(E);x&&e.removeRoute(x)}function C(){return e.getRoutes().map(E=>E.record)}function v(E){return!!e.getRecordMatcher(E)}function b(E,x){if(x=he({},x||c.value),typeof E=="string"){const Y=nc(n,E,x.path),d=e.resolve({path:Y.path},x),p=s.createHref(Y.fullPath);return he(Y,d,{params:f(d.params),hash:xi(Y.hash),redirectedFrom:void 0,href:p})}let N;if("path"in E)N=he({},E,{path:nc(n,E.path,x.path).path});else{const Y=he({},E.params);for(const d in Y)Y[d]==null&&delete Y[d];N=he({},E,{params:h(E.params)}),x.params=h(x.params)}const U=e.resolve(N,x),ce=E.hash||"";U.params=u(f(U.params));const ge=Cw(r,he({},E,{hash:hE(ce),path:U.path})),X=s.createHref(ge);return he({fullPath:ge,hash:ce,query:r===Cf?mE(E.query):E.query||{}},U,{redirectedFrom:void 0,href:X})}function L(E){return typeof E=="string"?nc(n,E,c.value.path):he({},E)}function q(E,x){if(l!==E)return hr(8,{from:x,to:E})}function z(E){return Z(E)}function fe(E){return z(he(L(E),{replace:!0}))}function we(E){const x=E.matched[E.matched.length-1];if(x&&x.redirect){const{redirect:N}=x;let U=typeof N=="function"?N(E):N;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=L(U):{path:U},U.params={}),he({query:E.query,hash:E.hash,params:E.params},U)}}function Z(E,x){const N=l=b(E),U=c.value,ce=E.state,ge=E.force,X=E.replace===!0,Y=we(N);if(Y)return Z(he(L(Y),{state:ce,force:ge,replace:X}),x||N);const d=N;d.redirectedFrom=x;let p;return!ge&&Rw(r,U,N)&&(p=hr(16,{to:d,from:U}),Wn(U,U,!0,!1)),(p?Promise.resolve(p):de(d,U)).catch(m=>An(m)?m:pe(m,d,U)).then(m=>{if(m){if(An(m,2))return Z(he(L(m.to),{state:ce,force:ge,replace:X}),x||d)}else m=Be(d,U,!0,X,ce);return $e(d,U,m),m})}function Te(E,x){const N=q(E,x);return N?Promise.reject(N):Promise.resolve()}function de(E,x){let N;const[U,ce,ge]=bE(E,x);N=oc(U.reverse(),"beforeRouteLeave",E,x);for(const Y of U)Y.leaveGuards.forEach(d=>{N.push(en(d,E,x))});const X=Te.bind(null,E,x);return N.push(X),fr(N).then(()=>{N=[];for(const Y of i.list())N.push(en(Y,E,x));return N.push(X),fr(N)}).then(()=>{N=oc(ce,"beforeRouteUpdate",E,x);for(const Y of ce)Y.updateGuards.forEach(d=>{N.push(en(d,E,x))});return N.push(X),fr(N)}).then(()=>{N=[];for(const Y of E.matched)if(Y.beforeEnter&&!x.matched.includes(Y))if(Array.isArray(Y.beforeEnter))for(const d of Y.beforeEnter)N.push(en(d,E,x));else N.push(en(Y.beforeEnter,E,x));return N.push(X),fr(N)}).then(()=>(E.matched.forEach(Y=>Y.enterCallbacks={}),N=oc(ge,"beforeRouteEnter",E,x),N.push(X),fr(N))).then(()=>{N=[];for(const Y of o.list())N.push(en(Y,E,x));return N.push(X),fr(N)}).catch(Y=>An(Y,8)?Y:Promise.reject(Y))}function $e(E,x,N){for(const U of a.list())U(E,x,N)}function Be(E,x,N,U,ce){const ge=q(E,x);if(ge)return ge;const X=x===Zt,Y=lr?history.state:{};N&&(U||X?s.replace(E.fullPath,he({scroll:X&&Y&&Y.scroll},ce)):s.push(E.fullPath,ce)),c.value=E,Wn(E,x,N,X),gt()}let We;function zt(){We=s.listen((E,x,N)=>{const U=b(E),ce=we(U);if(ce){Z(he(ce,{replace:!0}),U).catch(is);return}l=U;const ge=c.value;lr&&xw(df(ge.fullPath,N.delta),Mi()),de(U,ge).catch(X=>An(X,4|8)?X:An(X,2)?(Z(X.to,U).then(Y=>{An(Y,4|16)&&!N.delta&&N.type===os.pop&&s.go(-1,!1)}).catch(is),Promise.reject()):(N.delta&&s.go(-N.delta,!1),pe(X,U,ge))).then(X=>{X=X||Be(U,ge,!1),X&&(N.delta?s.go(-N.delta,!1):N.type===os.pop&&An(X,4|16)&&s.go(-1,!1)),$e(U,ge,X)}).catch(is)})}let Kn=cs(),zn=cs(),Re;function pe(E,x,N){gt(E);const U=zn.list();return U.length?U.forEach(ce=>ce(E,x,N)):console.error(E),Promise.reject(E)}function ae(){return Re&&c.value!==Zt?Promise.resolve():new Promise((E,x)=>{Kn.add([E,x])})}function gt(E){Re||(Re=!0,zt(),Kn.list().forEach(([x,N])=>E?N(E):x()),Kn.reset())}function Wn(E,x,N,U){const{scrollBehavior:ce}=t;if(!lr||!ce)return Promise.resolve();const ge=!N&&Uw(df(E.fullPath,0))||(U||!N)&&history.state&&history.state.scroll||null;return Vh().then(()=>ce(E,x,ge)).then(X=>X&&Mw(X)).catch(X=>pe(X,E,x))}const Mt=E=>s.go(E);let bt;const mt=new Set;return{currentRoute:c,addRoute:g,removeRoute:y,hasRoute:v,getRoutes:C,resolve:b,options:t,push:z,replace:fe,go:Mt,back:()=>Mt(-1),forward:()=>Mt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:zn.add,isReady:ae,install(E){const x=this;E.component("RouterLink",wE),E.component("RouterView",TE),E.config.globalProperties.$router=x,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>Xr(c)}),lr&&!bt&&c.value===Zt&&(bt=!0,z(s.location).catch(ce=>{}));const N={};for(const ce in Zt)N[ce]=Ct(()=>c.value[ce]);E.provide(Li,x),E.provide(Za,Yr(N)),E.provide(ec,c);const U=E.unmount;mt.add(E),E.unmount=function(){mt.delete(E),mt.size<1&&(l=Zt,We&&We(),c.value=Zt,bt=!1,Re=!1),U()}}}}function fr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function bE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>ur(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>ur(l,c))||s.push(c))}return[n,r,s]}function VC(){return Rt(Li)}function $C(){return Rt(Za)}/**
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
 */const SE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},AE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},CE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),r.push(n[u],n[h],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(SE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):AE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const f=i<<2|a>>4;if(r.push(f),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},RE=function(t){try{return CE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class NE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ke(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Df(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function Pf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Lf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kE(){return ke().indexOf("Electron/")>=0}function Mf(){const t=ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function OE(){return ke().indexOf("MSAppHost/")>=0}/**
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
 */const DE="FirebaseError";class dr extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=DE,Object.setPrototypeOf(this,dr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ls.prototype.create)}}class ls{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?PE(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new dr(s,a,r)}}function PE(t,e){return t.replace(LE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const LE=/\{\$([^}]+)}/g;function ME(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ui(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(xf(i)&&xf(o)){if(!Ui(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function xf(t){return t!==null&&typeof t=="object"}/**
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
 */function us(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function hs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function fs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function xE(t,e){const n=new UE(t,e);return n.subscribe.bind(n)}class UE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");FE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ac),s.error===void 0&&(s.error=ac),s.complete===void 0&&(s.complete=ac);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function FE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ac(){}/**
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
 */function Ye(t){return t&&t._delegate?t._delegate:t}class pr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Cn="[DEFAULT]";/**
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
 */class VE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new NE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(BE(e))try{this.getOrInitializeService({instanceIdentifier:Cn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Cn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cn){return this.instances.has(e)}getOptions(e=Cn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$E(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Cn){return this.component?this.component.multipleInstances?e:Cn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $E(t){return t===Cn?void 0:t}function BE(t){return t.instantiationMode==="EAGER"}/**
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
 */class jE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new VE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const qE={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},HE=se.INFO,KE={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},zE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=KE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cc{constructor(e){this.name=e,this._logLevel=HE,this._logHandler=zE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}/**
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
 */class WE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(GE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function GE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lc="@firebase/app",Uf="0.7.9";/**
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
 */const uc=new cc("@firebase/app"),QE="@firebase/app-compat",YE="@firebase/analytics-compat",JE="@firebase/analytics",XE="@firebase/app-check-compat",ZE="@firebase/app-check",e_="@firebase/auth",t_="@firebase/auth-compat",n_="@firebase/database",r_="@firebase/database-compat",s_="@firebase/functions",i_="@firebase/functions-compat",o_="@firebase/installations",a_="@firebase/installations-compat",c_="@firebase/messaging",l_="@firebase/messaging-compat",u_="@firebase/performance",h_="@firebase/performance-compat",f_="@firebase/remote-config",d_="@firebase/remote-config-compat",p_="@firebase/storage",g_="@firebase/storage-compat",m_="@firebase/firestore",y_="@firebase/firestore-compat",v_="firebase",w_="9.5.0";/**
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
 */const Ff="[DEFAULT]",E_={[lc]:"fire-core",[QE]:"fire-core-compat",[JE]:"fire-analytics",[YE]:"fire-analytics-compat",[ZE]:"fire-app-check",[XE]:"fire-app-check-compat",[e_]:"fire-auth",[t_]:"fire-auth-compat",[n_]:"fire-rtdb",[r_]:"fire-rtdb-compat",[s_]:"fire-fn",[i_]:"fire-fn-compat",[o_]:"fire-iid",[a_]:"fire-iid-compat",[c_]:"fire-fcm",[l_]:"fire-fcm-compat",[u_]:"fire-perf",[h_]:"fire-perf-compat",[f_]:"fire-rc",[d_]:"fire-rc-compat",[p_]:"fire-gcs",[g_]:"fire-gcs-compat",[m_]:"fire-fst",[y_]:"fire-fst-compat","fire-js":"fire-js",[v_]:"fire-js-all"};/**
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
 */const Fi=new Map,hc=new Map;function __(t,e){try{t.container.addComponent(e)}catch(n){uc.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ds(t){const e=t.name;if(hc.has(e))return uc.debug(`There were multiple attempts to register component ${e}.`),!1;hc.set(e,t);for(const n of Fi.values())__(n,t);return!0}function fc(t,e){return t.container.getProvider(e)}/**
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
 */const I_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Vi=new ls("app","Firebase",I_);/**
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
 */class T_{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vi.create("app-deleted",{appName:this._name})}}/**
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
 */const ps=w_;function BC(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ff,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Vi.create("bad-app-name",{appName:String(r)});const s=Fi.get(r);if(s){if(Ui(t,s.options)&&Ui(n,s.config))return s;throw Vi.create("duplicate-app",{appName:r})}const i=new jE(r);for(const a of hc.values())i.addComponent(a);const o=new T_(t,n,i);return Fi.set(r,o),o}function Vf(t=Ff){const e=Fi.get(t);if(!e)throw Vi.create("no-app",{appName:t});return e}function tn(t,e,n){var r;let s=(r=E_[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),uc.warn(a.join(" "));return}ds(new pr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */function b_(t){ds(new pr("platform-logger",e=>new WE(e),"PRIVATE")),tn(lc,Uf,t),tn(lc,Uf,"esm2017"),tn("fire-js","")}b_("");/*! *****************************************************************************
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
***************************************************************************** */function dc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function $f(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const S_=$f,Bf=new ls("auth","Firebase",$f());/**
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
 */const jf=new cc("@firebase/auth");function $i(t,...e){jf.logLevel<=se.ERROR&&jf.error(`Auth (${ps}): ${t}`,...e)}/**
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
 */function Tt(t,...e){throw pc(t,...e)}function Ot(t,...e){return pc(t,...e)}function A_(t,e,n){const r=Object.assign(Object.assign({},S_()),{[e]:n});return new ls("auth","Firebase",r).create(e,{appName:t.name})}function pc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Bf.create(t,...e)}function H(t,e,...n){if(!t)throw pc(e,...n)}function Vt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $i(e),new Error(e)}function $t(t,e){t||Vt(e)}/**
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
 */const qf=new Map;function Bt(t){$t(t instanceof Function,"Expected a class definition");let e=qf.get(t);return e?($t(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qf.set(t,e),e)}/**
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
 */function C_(t,e){const n=fc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ui(i,e!=null?e:{}))return s;Tt(s,"already-initialized")}return n.initialize({options:e})}function R_(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Bt);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function gc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function N_(){return Hf()==="http:"||Hf()==="https:"}function Hf(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function k_(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(N_()||Pf()||"connection"in navigator)?navigator.onLine:!0}function O_(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class gs{constructor(e,n){this.shortDelay=e,this.longDelay=n,$t(n>e,"Short delay should be less than long delay!"),this.isMobile=Df()||Lf()}get(){return k_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function mc(t,e){$t(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class yc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const D_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const P_=new gs(3e4,6e4);function ms(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gr(t,e,n,r,s={}){return Kf(t,s,()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=us(Object.assign({key:t.config.apiKey},o)).slice(1),c=new(yc.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&c.set("X-Firebase-Locale",t.languageCode),yc.fetch()(zf(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Kf(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},D_),e);try{const s=new L_(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw vc(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw vc(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw vc(t,"email-already-in-use",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw A_(t,u,l);Tt(t,u)}}catch(s){if(s instanceof dr)throw s;Tt(t,"network-request-failed")}}async function ys(t,e,n,r,s={}){const i=await gr(t,e,n,r,s);return"mfaPendingCredential"in i&&Tt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function zf(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?mc(t.config,s):`${t.config.apiScheme}://${s}`}class L_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ot(this.auth,"timeout")),P_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ot(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function M_(t,e){return gr(t,"POST","/v1/accounts:delete",e)}async function x_(t,e){return gr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function vs(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function U_(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),s=Ec(r);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:vs(wc(s.auth_time)),issuedAtTime:vs(wc(s.iat)),expirationTime:vs(wc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function wc(t){return Number(t)*1e3}function Ec(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return $i("JWT malformed, contained fewer than 3 sections"),null;try{const s=RE(n);return s?JSON.parse(s):($i("Failed to decode base64 JWT payload"),null)}catch(s){return $i("Caught error parsing JWT payload as JSON",s),null}}function F_(t){const e=Ec(t);return H(e,"internal-error"),H(typeof e.exp!="undefined","internal-error"),H(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function mr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof dr&&V_(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function V_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class $_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Wf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vs(this.lastLoginAt),this.creationTime=vs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bi(t){var e;const n=t.auth,r=await t.getIdToken(),s=await mr(t,x_(n,{idToken:r}));H(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=((e=i.providerUserInfo)===null||e===void 0?void 0:e.length)?q_(i.providerUserInfo):[],a=j_(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a==null?void 0:a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Wf(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function B_(t){const e=Ye(t);await Bi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function j_(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function q_(t){return t.map(e=>{var{providerId:n}=e,r=dc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function H_(t,e){const n=await Kf(t,{},()=>{const r=us({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=zf(t,s,"/v1/token",`key=${i}`);return yc.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ws{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken!="undefined","internal-error"),H(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):F_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await H_(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ws;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ws,this.toJSON())}_performRefresh(){return Vt("not implemented")}}/**
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
 */function nn(t,e){H(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Rn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=dc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new $_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new Wf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await mr(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return U_(this,e)}reload(){return B_(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Rn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Bi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await mr(this,M_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(l=n.createdAt)!==null&&l!==void 0?l:void 0,L=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:q,emailVerified:z,isAnonymous:fe,providerData:we,stsTokenManager:Z}=n;H(q&&Z,e,"internal-error");const Te=ws.fromJSON(this.name,Z);H(typeof q=="string",e,"internal-error"),nn(h,e.name),nn(f,e.name),H(typeof z=="boolean",e,"internal-error"),H(typeof fe=="boolean",e,"internal-error"),nn(g,e.name),nn(y,e.name),nn(C,e.name),nn(v,e.name),nn(b,e.name),nn(L,e.name);const de=new Rn({uid:q,auth:e,email:f,emailVerified:z,displayName:h,isAnonymous:fe,photoURL:y,phoneNumber:g,tenantId:C,stsTokenManager:Te,createdAt:b,lastLoginAt:L});return we&&Array.isArray(we)&&(de.providerData=we.map($e=>Object.assign({},$e))),v&&(de._redirectEventId=v),de}static async _fromIdTokenResponse(e,n,r=!1){const s=new ws;s.updateFromServerResponse(n);const i=new Rn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Bi(i),i}}/**
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
 */class Gf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Gf.type="NONE";const Qf=Gf;/**
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
 */function ji(t,e,n){return`firebase:${t}:${e}:${n}`}class yr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ji(this.userKey,s.apiKey,i),this.fullPersistenceKey=ji("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Rn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new yr(Bt(Qf),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Bt(Qf);const o=ji(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Rn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new yr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new yr(i,e,r))}}/**
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
 */function Yf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(td(e))return"Blackberry";if(nd(e))return"Webos";if(_c(e))return"Safari";if((e.includes("chrome/")||Xf(e))&&!e.includes("edge/"))return"Chrome";if(ed(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Jf(t=ke()){return/firefox\//i.test(t)}function _c(t=ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xf(t=ke()){return/crios\//i.test(t)}function Zf(t=ke()){return/iemobile/i.test(t)}function ed(t=ke()){return/android/i.test(t)}function td(t=ke()){return/blackberry/i.test(t)}function nd(t=ke()){return/webos/i.test(t)}function qi(t=ke()){return/iphone|ipad|ipod/i.test(t)}function K_(t=ke()){var e;return qi(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function z_(){return Mf()&&document.documentMode===10}function rd(t=ke()){return qi(t)||ed(t)||nd(t)||td(t)||/windows phone/i.test(t)||Zf(t)}function W_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function sd(t,e=[]){let n;switch(t){case"Browser":n=Yf(ke());break;case"Worker":n=`${Yf(ke())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ps}/${r}`}/**
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
 */class G_{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new id(this),this.idTokenSubscription=new id(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bf,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bt(n)),this._initializationPromise=this.queue(async()=>{var r,s;this._deleted||(this.persistenceManager=await yr.create(this,e),!this._deleted&&(((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Bi(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=O_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ye(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Bt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ls("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await yr.create(this,[Bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Hi(t){return Ye(t)}class id{constructor(e){this.auth=e,this.observer=null,this.addObserver=xE(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Ic{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vt("not implemented")}_getIdTokenResponse(e){return Vt("not implemented")}_linkToIdToken(e,n){return Vt("not implemented")}_getReauthenticationResolver(e){return Vt("not implemented")}}async function Q_(t,e){return gr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Y_(t,e){return ys(t,"POST","/v1/accounts:signInWithPassword",ms(t,e))}/**
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
 */async function J_(t,e){return ys(t,"POST","/v1/accounts:signInWithEmailLink",ms(t,e))}async function X_(t,e){return ys(t,"POST","/v1/accounts:signInWithEmailLink",ms(t,e))}/**
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
 */class Es extends Ic{constructor(e,n,r,s=null){super("password",r);this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Es(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Es(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Y_(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return J_(e,{email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Q_(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return X_(e,{idToken:n,email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function vr(t,e){return ys(t,"POST","/v1/accounts:signInWithIdp",ms(t,e))}/**
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
 */const Z_="http://localhost";class Nn extends Ic{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Nn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=dc(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Nn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vr(e,n)}buildRequest(){const e={requestUri:Z_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=us(n)}return e}}/**
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
 */function eI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tI(t){const e=hs(fs(t)).link,n=e?hs(fs(e)).deep_link_id:null,r=hs(fs(t)).deep_link_id;return(r?hs(fs(r)).link:null)||r||n||e||t}class Tc{constructor(e){var n,r,s,i,o,a;const c=hs(fs(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=eI((s=c.mode)!==null&&s!==void 0?s:null);H(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=tI(e);try{return new Tc(n)}catch{return null}}}/**
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
 */class wr{constructor(){this.providerId=wr.PROVIDER_ID}static credential(e,n){return Es._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Tc.parseLink(n);return H(r,"argument-error"),Es._fromEmailAndCode(e,r.code,r.tenantId)}}wr.PROVIDER_ID="password";wr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class od{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class _s extends od{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class rn extends _s{constructor(){super("facebook.com")}static credential(e){return Nn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";rn.PROVIDER_ID="facebook.com";/**
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
 */class sn extends _s{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Nn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return sn.credential(n,r)}catch{return null}}}sn.GOOGLE_SIGN_IN_METHOD="google.com";sn.PROVIDER_ID="google.com";/**
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
 */class on extends _s{constructor(){super("github.com")}static credential(e){return Nn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.GITHUB_SIGN_IN_METHOD="github.com";on.PROVIDER_ID="github.com";/**
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
 */class an extends _s{constructor(){super("twitter.com")}static credential(e,n){return Nn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return an.credential(n,r)}catch{return null}}}an.TWITTER_SIGN_IN_METHOD="twitter.com";an.PROVIDER_ID="twitter.com";/**
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
 */async function nI(t,e){return ys(t,"POST","/v1/accounts:signUp",ms(t,e))}/**
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
 */class kn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Rn._fromIdTokenResponse(e,r,s),o=ad(r);return new kn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ad(r);return new kn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ad(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ki extends dr{constructor(e,n,r,s){var i;super(n.code,n.message);this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ki.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ki(e,n,r,s)}}function cd(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ki._fromErrorAndOperation(t,i,e,r):i})}async function rI(t,e,n=!1){const r=await mr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return kn._forOperation(t,"link",r)}/**
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
 */async function sI(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await mr(t,cd(r,s,e,t),n);H(i.idToken,r,"internal-error");const o=Ec(i.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),kn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Tt(r,"user-mismatch"),i}}/**
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
 */async function ld(t,e,n=!1){const r="signIn",s=await cd(t,r,e),i=await kn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function iI(t,e){return ld(Hi(t),e)}async function jC(t,e,n){const r=Hi(t),s=await nI(r,{returnSecureToken:!0,email:e,password:n}),i=await kn._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function qC(t,e,n){return iI(Ye(t),wr.credential(e,n))}/**
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
 */async function oI(t,e){return gr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function HC(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ye(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await mr(r,oI(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}const zi="__sak";/**
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
 */class ud{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zi,"1"),this.storage.removeItem(zi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function aI(){const t=ke();return _c(t)||qi(t)}const cI=1e3,lI=10;class hd extends ud{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=aI()&&W_(),this.fallbackToPolling=rd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);z_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,lI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},cI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}hd.type="LOCAL";const uI=hd;/**
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
 */class fd extends ud{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}fd.type="SESSION";const dd=fd;/**
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
 */function hI(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Wi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Wi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await hI(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wi.receivers=[];/**
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
 */function bc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class fI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=bc("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Dt(){return window}function dI(t){Dt().location.href=t}/**
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
 */function pd(){return typeof Dt().WorkerGlobalScope!="undefined"&&typeof Dt().importScripts=="function"}async function pI(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mI(){return pd()?self:null}/**
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
 */const gd="firebaseLocalStorageDb",yI=1,Gi="firebaseLocalStorage",md="fbase_key";class Is{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qi(t,e){return t.transaction([Gi],e?"readwrite":"readonly").objectStore(Gi)}function vI(){const t=indexedDB.deleteDatabase(gd);return new Is(t).toPromise()}function Sc(){const t=indexedDB.open(gd,yI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Gi,{keyPath:md})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Gi)?e(r):(r.close(),await vI(),e(await Sc()))})})}async function yd(t,e,n){const r=Qi(t,!0).put({[md]:e,value:n});return new Is(r).toPromise()}async function wI(t,e){const n=Qi(t,!1).get(e),r=await new Is(n).toPromise();return r===void 0?null:r.value}function vd(t,e){const n=Qi(t,!0).delete(e);return new Is(n).toPromise()}const EI=800,_I=3;class wd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>_I)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wi._getInstance(mI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pI(),!this.activeServiceWorker)return;this.sender=new fI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sc();return await yd(e,zi,"1"),await vd(e,zi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>yd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>wI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Qi(s,!1).getAll();return new Is(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),EI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wd.type="LOCAL";const II=wd;/**
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
 */function TI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function bI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ot("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",TI().appendChild(r)})}function SI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new gs(3e4,6e4);/**
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
 */function AI(t,e){return e?Bt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ac extends Ic{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return vr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function CI(t){return ld(t.auth,new Ac(t),t.bypassAuthState)}function RI(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),sI(n,new Ac(t),t.bypassAuthState)}async function NI(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),rI(n,new Ac(t),t.bypassAuthState)}/**
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
 */class Ed{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CI;case"linkViaPopup":case"linkViaRedirect":return NI;case"reauthViaPopup":case"reauthViaRedirect":return RI;default:Tt(this.auth,"internal-error")}}resolve(e){$t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const kI=new gs(2e3,1e4);class Er extends Ed{constructor(e,n,r,s,i){super(e,n,s,i);this.provider=r,this.authWindow=null,this.pollId=null,Er.currentPopupAction&&Er.currentPopupAction.cancel(),Er.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){$t(this.filter.length===1,"Popup operations only handle one event");const e=bc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Er.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,kI.get())};e()}}Er.currentPopupAction=null;/**
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
 */const OI="pendingRedirect",Cc=new Map;class DI extends Ed{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=Cc.get(this.auth._key());if(!e){try{const r=await PI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Cc.set(this.auth._key(),e)}return this.bypassAuthState||Cc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PI(t,e){const n=MI(e),r=LI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function LI(t){return Bt(t._redirectPersistence)}function MI(t){return ji(OI,t.config.apiKey,t.name)}async function xI(t,e,n=!1){const r=Hi(t),s=AI(r,e),o=await new DI(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const UI=10*60*1e3;class FI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!VI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Id(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ot(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=UI&&this.cachedEventUids.clear(),this.cachedEventUids.has(_d(e))}saveEventToCache(e){this.cachedEventUids.add(_d(e)),this.lastProcessedEventTime=Date.now()}}function _d(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Id({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function VI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Id(t);default:return!1}}/**
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
 */async function $I(t,e={}){return gr(t,"GET","/v1/projects",e)}/**
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
 */const BI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jI=/^https?/;async function qI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $I(t);for(const n of e)try{if(HI(n))return}catch{}Tt(t,"unauthorized-domain")}function HI(t){const e=gc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jI.test(n))return!1;if(BI.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const KI=new gs(3e4,6e4);function Td(){const t=Dt().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zI(t){return new Promise((e,n)=>{var r,s,i;function o(){Td(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Td(),n(Ot(t,"network-request-failed"))},timeout:KI.get()})}if((s=(r=Dt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0?void 0:s.Iframe)e(gapi.iframes.getContext());else if((i=Dt().gapi)===null||i===void 0?void 0:i.load)o();else{const a=SI("iframefcb");return Dt()[a]=()=>{gapi.load?o():n(Ot(t,"network-request-failed"))},bI(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw Yi=null,e})}let Yi=null;function WI(t){return Yi=Yi||zI(t),Yi}/**
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
 */const GI=new gs(5e3,15e3),QI="__/auth/iframe",YI="emulator/auth/iframe",JI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZI(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mc(e,YI):`https://${t.config.authDomain}/${QI}`,r={apiKey:e.apiKey,appName:t.name,v:ps},s=XI.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${us(r).slice(1)}`}async function eT(t){const e=await WI(t),n=Dt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:ZI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ot(t,"network-request-failed"),a=Dt().setTimeout(()=>{i(o)},GI.get());function c(){Dt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const tT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nT=500,rT=600,sT="_blank",iT="http://localhost";class bd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oT(t,e,n,r=nT,s=rT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},tT),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ke().toLowerCase();n&&(a=Xf(l)?sT:n),Jf(l)&&(e=e||iT,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(K_(l)&&a!=="_self")return aT(e||"",a),new bd(null);const h=window.open(e||"",a,u);H(h,t,"popup-blocked");try{h.focus()}catch{}return new bd(h)}function aT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const cT="__/auth/handler",lT="emulator/auth/handler";function Sd(t,e,n,r,s,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ps,eventId:s};if(e instanceof od){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ME(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof _s){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${uT(t)}?${us(a).slice(1)}`}function uT({config:t}){return t.emulator?mc(t,lT):`https://${t.authDomain}/${cT}`}/**
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
 */const Rc="webStorageSupport";class hT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dd,this._completeRedirectFn=xI}async _openPopup(e,n,r,s){var i;$t((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Sd(e,n,r,gc(),s);return oT(e,o,bc())}async _openRedirect(e,n,r,s){return await this._originValidation(e),dI(Sd(e,n,r,gc(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):($t(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r}async initAndGetManager(e){const n=await eT(e),r=new FI(e);return n.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rc,{type:Rc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Rc];o!==void 0&&n(!!o),Tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rd()||_c()||qi()}}const fT=hT;var Ad="@firebase/auth",Cd="0.19.3";/**
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
 */class dT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function pT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gT(t){ds(new pr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:i}=r.options;return(o=>{H(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),H(!(i==null?void 0:i.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:i,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sd(t)},c=new G_(o,a);return R_(c,n),c})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ds(new pr("auth-internal",e=>{const n=Hi(e.getProvider("auth").getImmediate());return(r=>new dT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(Ad,Cd,pT(t)),tn(Ad,Cd,"esm2017")}/**
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
 */function KC(t=Vf()){const e=fc(t,"auth");return e.isInitialized()?e.getImmediate():C_(t,{popupRedirectResolver:fT,persistence:[II,uI,dd]})}gT("Browser");var mT=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},D,Nc=Nc||{},K=mT||self;function Ji(){}function kc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ts(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function yT(t){return Object.prototype.hasOwnProperty.call(t,Oc)&&t[Oc]||(t[Oc]=++vT)}var Oc="closure_uid_"+(1e9*Math.random()>>>0),vT=0;function wT(t,e,n){return t.call.apply(t.bind,arguments)}function ET(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Le(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Le=wT:Le=ET,Le.apply(null,arguments)}function Xi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Me(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function cn(){this.s=this.s,this.o=this.o}var _T=0,IT={};cn.prototype.s=!1;cn.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),_T!=0)){var t=yT(this);delete IT[t]}};cn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Rd=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Nd=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function TT(t){e:{var e=p0;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function kd(t){return Array.prototype.concat.apply([],arguments)}function Dc(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Zi(t){return/^[\s\xa0]*$/.test(t)}var Od=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Je(t,e){return t.indexOf(e)!=-1}function Pc(t,e){return t<e?-1:t>e?1:0}var Xe;e:{var Dd=K.navigator;if(Dd){var Pd=Dd.userAgent;if(Pd){Xe=Pd;break e}}Xe=""}function Lc(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Ld(t){const e={};for(const n in t)e[n]=t[n];return e}var Md="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xd(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Md.length;i++)n=Md[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Mc(t){return Mc[" "](t),t}Mc[" "]=Ji;function bT(t){var e=CT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var ST=Je(Xe,"Opera"),_r=Je(Xe,"Trident")||Je(Xe,"MSIE"),Ud=Je(Xe,"Edge"),xc=Ud||_r,Fd=Je(Xe,"Gecko")&&!(Je(Xe.toLowerCase(),"webkit")&&!Je(Xe,"Edge"))&&!(Je(Xe,"Trident")||Je(Xe,"MSIE"))&&!Je(Xe,"Edge"),AT=Je(Xe.toLowerCase(),"webkit")&&!Je(Xe,"Edge");function Vd(){var t=K.document;return t?t.documentMode:void 0}var eo;e:{var Uc="",Fc=function(){var t=Xe;if(Fd)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ud)return/Edge\/([\d\.]+)/.exec(t);if(_r)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(AT)return/WebKit\/(\S+)/.exec(t);if(ST)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Fc&&(Uc=Fc?Fc[1]:""),_r){var Vc=Vd();if(Vc!=null&&Vc>parseFloat(Uc)){eo=String(Vc);break e}}eo=Uc}var CT={};function RT(){return bT(function(){let t=0;const e=Od(String(eo)).split("."),n=Od("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=Pc(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||Pc(s[2].length==0,i[2].length==0)||Pc(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var $c;if(K.document&&_r){var $d=Vd();$c=$d||parseInt(eo,10)||void 0}else $c=void 0;var NT=$c,kT=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{K.addEventListener("test",Ji,e),K.removeEventListener("test",Ji,e)}catch{}return t}();function qe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}qe.prototype.h=function(){this.defaultPrevented=!0};function bs(t,e){if(qe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Fd){e:{try{Mc(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:OT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&bs.Z.h.call(this)}}Me(bs,qe);var OT={2:"touch",3:"pen",4:"mouse"};bs.prototype.h=function(){bs.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ss="closure_listenable_"+(1e6*Math.random()|0),DT=0;function PT(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++DT,this.ca=this.fa=!1}function to(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function no(t){this.src=t,this.g={},this.h=0}no.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=jc(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new PT(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function Bc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Rd(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(to(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function jc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var qc="closure_lm_"+(1e6*Math.random()|0),Hc={};function Bd(t,e,n,r,s){if(r&&r.once)return qd(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Bd(t,e[i],n,r,s);return null}return n=Gc(n),t&&t[Ss]?t.N(e,n,Ts(r)?!!r.capture:!!r,s):jd(t,e,n,!1,r,s)}function jd(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Ts(s)?!!s.capture:!!s,a=zc(t);if(a||(t[qc]=a=new no(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=LT(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)kT||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Kd(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function LT(){function t(n){return e.call(t.src,t.listener,n)}var e=MT;return t}function qd(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)qd(t,e[i],n,r,s);return null}return n=Gc(n),t&&t[Ss]?t.O(e,n,Ts(r)?!!r.capture:!!r,s):jd(t,e,n,!0,r,s)}function Hd(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Hd(t,e[i],n,r,s);else r=Ts(r)?!!r.capture:!!r,n=Gc(n),t&&t[Ss]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=jc(i,n,r,s),-1<n&&(to(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=zc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=jc(e,n,r,s)),(n=-1<t?e[t]:null)&&Kc(n))}function Kc(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Ss])Bc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Kd(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=zc(e))?(Bc(n,t),n.h==0&&(n.src=null,e[qc]=null)):to(t)}}}function Kd(t){return t in Hc?Hc[t]:Hc[t]="on"+t}function MT(t,e){if(t.ca)t=!0;else{e=new bs(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Kc(t),t=n.call(r,e)}return t}function zc(t){return t=t[qc],t instanceof no?t:null}var Wc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gc(t){return typeof t=="function"?t:(t[Wc]||(t[Wc]=function(e){return t.handleEvent(e)}),t[Wc])}function Oe(){cn.call(this),this.i=new no(this),this.P=this,this.I=null}Me(Oe,cn);Oe.prototype[Ss]=!0;Oe.prototype.removeEventListener=function(t,e,n,r){Hd(this,t,e,n,r)};function xe(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new qe(e,t);else if(e instanceof qe)e.target=e.target||t;else{var s=e;e=new qe(r,t),xd(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=ro(o,r,!0,e)&&s}if(o=e.g=t,s=ro(o,r,!0,e)&&s,s=ro(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=ro(o,r,!1,e)&&s}Oe.prototype.M=function(){if(Oe.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)to(n[r]);delete t.g[e],t.h--}}this.I=null};Oe.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Oe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ro(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Bc(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Qc=K.JSON.stringify;function xT(){var t=Wd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class UT{constructor(){this.h=this.g=null}add(e,n){const r=zd.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var zd=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new FT,t=>t.reset());class FT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function VT(t){K.setTimeout(()=>{throw t},0)}function Yc(t,e){Jc||$T(),Xc||(Jc(),Xc=!0),Wd.add(t,e)}var Jc;function $T(){var t=K.Promise.resolve(void 0);Jc=function(){t.then(BT)}}var Xc=!1,Wd=new UT;function BT(){for(var t;t=xT();){try{t.h.call(t.g)}catch(n){VT(n)}var e=zd;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Xc=!1}function so(t,e){Oe.call(this),this.h=t||1,this.g=e||K,this.j=Le(this.kb,this),this.l=Date.now()}Me(so,Oe);D=so.prototype;D.da=!1;D.S=null;D.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),xe(this,"tick"),this.da&&(Zc(this),this.start()))}};D.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Zc(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}D.M=function(){so.Z.M.call(this),Zc(this),delete this.g};function el(t,e,n){if(typeof t=="function")n&&(t=Le(t,n));else if(t&&typeof t.handleEvent=="function")t=Le(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function Gd(t){t.g=el(()=>{t.g=null,t.i&&(t.i=!1,Gd(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class jT extends cn{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Gd(this)}M(){super.M(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function As(t){cn.call(this),this.h=t,this.g={}}Me(As,cn);var Qd=[];function Yd(t,e,n,r){Array.isArray(n)||(n&&(Qd[0]=n.toString()),n=Qd);for(var s=0;s<n.length;s++){var i=Bd(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Jd(t){Lc(t.g,function(e,n){this.g.hasOwnProperty(n)&&Kc(e)},t),t.g={}}As.prototype.M=function(){As.Z.M.call(this),Jd(this)};As.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function io(){this.g=!0}io.prototype.Aa=function(){this.g=!1};function qT(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function HT(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Ir(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+zT(t,n)+(r?" "+r:"")})}function KT(t,e){t.info(function(){return"TIMEOUT: "+e})}io.prototype.info=function(){};function zT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Qc(n)}catch{return e}}var On={},Xd=null;function oo(){return Xd=Xd||new Oe}On.Ma="serverreachability";function Zd(t){qe.call(this,On.Ma,t)}Me(Zd,qe);function Cs(t){const e=oo();xe(e,new Zd(e,t))}On.STAT_EVENT="statevent";function ep(t,e){qe.call(this,On.STAT_EVENT,t),this.stat=e}Me(ep,qe);function Ze(t){const e=oo();xe(e,new ep(e,t))}On.Na="timingevent";function tp(t,e){qe.call(this,On.Na,t),this.size=e}Me(tp,qe);function Rs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var ao={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},np={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function tl(){}tl.prototype.h=null;function rp(t){return t.h||(t.h=t.i())}function sp(){}var Ns={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function nl(){qe.call(this,"d")}Me(nl,qe);function rl(){qe.call(this,"c")}Me(rl,qe);var sl;function co(){}Me(co,tl);co.prototype.g=function(){return new XMLHttpRequest};co.prototype.i=function(){return{}};sl=new co;function ks(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new As(this),this.P=WT,t=xc?125:void 0,this.W=new so(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ip}function ip(){this.i=null,this.g="",this.h=!1}var WT=45e3,il={},lo={};D=ks.prototype;D.setTimeout=function(t){this.P=t};function ol(t,e,n){t.K=1,t.v=go(jt(e)),t.s=n,t.U=!0,op(t,null)}function op(t,e){t.F=Date.now(),Os(t),t.A=jt(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),gp(n.h,"t",r),t.C=0,n=t.l.H,t.h=new ip,t.g=Fp(t.l,n?e:null,!t.s),0<t.O&&(t.L=new jT(Le(t.Ia,t,t.g),t.O)),Yd(t.V,t.g,"readystatechange",t.gb),e=t.H?Ld(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Cs(1),qT(t.j,t.u,t.A,t.m,t.X,t.s)}D.gb=function(t){t=t.target;const e=this.L;e&&qt(t)==3?e.l():this.Ia(t)};D.Ia=function(t){try{if(t==this.g)e:{const u=qt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||xc||this.g&&(this.h.h||this.g.ga()||Cp(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Cs(3):Cs(2)),uo(this);var n=this.g.ba();this.N=n;t:if(ap(this)){var r=Cp(this.g);t="";var s=r.length,i=qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Dn(this),Ds(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,HT(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Zi(a)){var l=a;break t}}l=null}if(n=l)Ir(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,al(this,n);else{this.i=!1,this.o=3,Ze(12),Dn(this),Ds(this);break e}}this.U?(cp(this,u,o),xc&&this.i&&u==3&&(Yd(this.V,this.W,"tick",this.fb),this.W.start())):(Ir(this.j,this.m,o,null),al(this,o)),u==4&&Dn(this),this.i&&!this.I&&(u==4?Lp(this.l,this):(this.i=!1,Os(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ze(12)):(this.o=0,Ze(13)),Dn(this),Ds(this)}}}catch{}finally{}};function ap(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function cp(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=GT(t,n),s==lo){e==4&&(t.o=4,Ze(14),r=!1),Ir(t.j,t.m,null,"[Incomplete Response]");break}else if(s==il){t.o=4,Ze(15),Ir(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ir(t.j,t.m,s,null),al(t,s);ap(t)&&s!=lo&&s!=il&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ze(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),vl(e),e.L=!0,Ze(11))):(Ir(t.j,t.m,n,"[Invalid Chunked Response]"),Dn(t),Ds(t))}D.fb=function(){if(this.g){var t=qt(this.g),e=this.g.ga();this.C<e.length&&(uo(this),cp(this,t,e),this.i&&t!=4&&Os(this))}};function GT(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?lo:(n=Number(e.substring(n,r)),isNaN(n)?il:(r+=1,r+n>e.length?lo:(e=e.substr(r,n),t.C=r+n,e)))}D.cancel=function(){this.I=!0,Dn(this)};function Os(t){t.Y=Date.now()+t.P,lp(t,t.P)}function lp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Rs(Le(t.eb,t),e)}function uo(t){t.B&&(K.clearTimeout(t.B),t.B=null)}D.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(KT(this.j,this.A),this.K!=2&&(Cs(3),Ze(17)),Dn(this),this.o=2,Ds(this)):lp(this,this.Y-t)};function Ds(t){t.l.G==0||t.I||Lp(t.l,t)}function Dn(t){uo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Zc(t.W),Jd(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function al(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ul(n.i,t))){if(n.I=t.N,!t.J&&ul(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)_o(n),wo(n);else break e;yl(n),Ze(18)}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=Rs(Le(n.ab,n),6e3));if(1>=vp(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Mn(n,11)}else if((t.J||n.g==t)&&_o(n),!Zi(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;!i.g&&(Je(y,"spdy")||Je(y,"quic")||Je(y,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(hl(i,i.h),i.h=null))}if(r.D){const C=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;C&&(r.sa=C,_e(r.F,r.D,C))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Up(r,r.H?r.la:null,r.W),o.J){wp(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(uo(a),Os(a)),r.g=o}else Dp(r);0<n.l.length&&Eo(n)}else l[0]!="stop"&&l[0]!="close"||Mn(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Mn(n,7):gl(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Cs(4)}catch{}}function QT(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(kc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function cl(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(kc(t)||typeof t=="string")Nd(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(kc(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=QT(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function Tr(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Tr)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}D=Tr.prototype;D.R=function(){ll(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};D.T=function(){return ll(this),this.g.concat()};function ll(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Pn(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],Pn(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}D.get=function(t,e){return Pn(this.h,t)?this.h[t]:e};D.set=function(t,e){Pn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};D.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function Pn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var up=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function YT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ln(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ln){this.g=e!==void 0?e:t.g,ho(this,t.j),this.s=t.s,fo(this,t.i),po(this,t.m),this.l=t.l,e=t.h;var n=new Ms;n.i=e.i,e.g&&(n.g=new Tr(e.g),n.h=e.h),hp(this,n),this.o=t.o}else t&&(n=String(t).match(up))?(this.g=!!e,ho(this,n[1]||"",!0),this.s=Ps(n[2]||""),fo(this,n[3]||"",!0),po(this,n[4]),this.l=Ps(n[5]||"",!0),hp(this,n[6]||"",!0),this.o=Ps(n[7]||"")):(this.g=!!e,this.h=new Ms(null,this.g))}Ln.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ls(e,fp,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ls(e,fp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Ls(n,n.charAt(0)=="/"?t0:e0,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ls(n,r0)),t.join("")};function jt(t){return new Ln(t)}function ho(t,e,n){t.j=n?Ps(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function fo(t,e,n){t.i=n?Ps(e,!0):e}function po(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function hp(t,e,n){e instanceof Ms?(t.h=e,s0(t.h,t.g)):(n||(e=Ls(e,n0)),t.h=new Ms(e,t.g))}function _e(t,e,n){t.h.set(e,n)}function go(t){return _e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function JT(t){return t instanceof Ln?jt(t):new Ln(t,void 0)}function XT(t,e,n,r){var s=new Ln(null,void 0);return t&&ho(s,t),e&&fo(s,e),n&&po(s,n),r&&(s.l=r),s}function Ps(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ls(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ZT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ZT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var fp=/[#\/\?@]/g,e0=/[#\?:]/g,t0=/[#\?]/g,n0=/[#\?@]/g,r0=/#/g;function Ms(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ln(t){t.g||(t.g=new Tr,t.h=0,t.i&&YT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=Ms.prototype;D.add=function(t,e){ln(this),this.i=null,t=br(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function dp(t,e){ln(t),e=br(t,e),Pn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Pn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&ll(t)))}function pp(t,e){return ln(t),e=br(t,e),Pn(t.g.h,e)}D.forEach=function(t,e){ln(this),this.g.forEach(function(n,r){Nd(n,function(s){t.call(e,s,r,this)},this)},this)};D.T=function(){ln(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};D.R=function(t){ln(this);var e=[];if(typeof t=="string")pp(this,t)&&(e=kd(e,this.g.get(br(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=kd(e,t[n])}return e};D.set=function(t,e){return ln(this),this.i=null,t=br(this,t),pp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function gp(t,e,n){dp(t,e),0<n.length&&(t.i=null,t.g.set(br(t,e),Dc(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function br(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function s0(t,e){e&&!t.j&&(ln(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(dp(this,r),gp(this,s,n))},t)),t.j=e}var i0=class{constructor(t,e){this.h=t,this.g=e}};function mp(t){this.l=t||o0,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ea&&K.g.Ea()&&K.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var o0=10;function yp(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function vp(t){return t.h?1:t.g?t.g.size:0}function ul(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function hl(t,e){t.g?t.g.add(e):t.h=e}function wp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}mp.prototype.cancel=function(){if(this.i=Ep(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ep(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Dc(t.i)}function fl(){}fl.prototype.stringify=function(t){return K.JSON.stringify(t,void 0)};fl.prototype.parse=function(t){return K.JSON.parse(t,void 0)};function a0(){this.g=new fl}function c0(t,e,n){const r=n||"";try{cl(t,function(s,i){let o=s;Ts(s)&&(o=Qc(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function l0(t,e){const n=new io;if(K.Image){const r=new Image;r.onload=Xi(mo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Xi(mo,n,r,"TestLoadImage: error",!1,e),r.onabort=Xi(mo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Xi(mo,n,r,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function mo(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function xs(t){this.l=t.$b||null,this.j=t.ib||!1}Me(xs,tl);xs.prototype.g=function(){return new yo(this.l,this.j)};xs.prototype.i=function(t){return function(){return t}}({});function yo(t,e){Oe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=dl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Me(yo,Oe);var dl=0;D=yo.prototype;D.open=function(t,e){if(this.readyState!=dl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Fs(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||K).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Us(this)),this.readyState=dl};D.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Fs(this)),this.g&&(this.readyState=3,Fs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof K.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_p(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function _p(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}D.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Us(this):Fs(this),this.readyState==3&&_p(this)}};D.Ua=function(t){this.g&&(this.response=this.responseText=t,Us(this))};D.Ta=function(t){this.g&&(this.response=t,Us(this))};D.ha=function(){this.g&&Us(this)};function Us(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Fs(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Fs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(yo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var u0=K.JSON.parse;function Se(t){Oe.call(this),this.headers=new Tr,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ip,this.K=this.L=!1}Me(Se,Oe);var Ip="",h0=/^https?$/i,f0=["POST","PUT"];D=Se.prototype;D.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():sl.g(),this.C=this.u?rp(this.u):rp(sl),this.g.onreadystatechange=Le(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Tp(this,i);return}t=n||"";const s=new Tr(this.headers);r&&cl(r,function(i,o){s.set(o,i)}),r=TT(s.T()),n=K.FormData&&t instanceof K.FormData,!(0<=Rd(f0,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ap(this),0<this.B&&((this.K=d0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Le(this.pa,this)):this.A=el(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Tp(this,i)}};function d0(t){return _r&&RT()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function p0(t){return t.toLowerCase()=="content-type"}D.pa=function(){typeof Nc!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xe(this,"timeout"),this.abort(8))};function Tp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,bp(t),vo(t)}function bp(t){t.D||(t.D=!0,xe(t,"complete"),xe(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,xe(this,"complete"),xe(this,"abort"),vo(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),vo(this,!0)),Se.Z.M.call(this)};D.Fa=function(){this.s||(this.F||this.v||this.l?Sp(this):this.cb())};D.cb=function(){Sp(this)};function Sp(t){if(t.h&&typeof Nc!="undefined"&&(!t.C[1]||qt(t)!=4||t.ba()!=2)){if(t.v&&qt(t)==4)el(t.Fa,0,t);else if(xe(t,"readystatechange"),qt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(up)[1]||null;if(!s&&K.self&&K.self.location){var i=K.self.location.protocol;s=i.substr(0,i.length-1)}r=!h0.test(s?s.toLowerCase():"")}n=r}if(n)xe(t,"complete"),xe(t,"success");else{t.m=6;try{var o=2<qt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",bp(t)}}finally{vo(t)}}}}function vo(t,e){if(t.g){Ap(t);const n=t.g,r=t.C[0]?Ji:null;t.g=null,t.C=null,e||xe(t,"ready");try{n.onreadystatechange=r}catch{}}}function Ap(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}function qt(t){return t.g?t.g.readyState:0}D.ba=function(){try{return 2<qt(this)?this.g.status:-1}catch{return-1}};D.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),u0(e)}};function Cp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ip:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Da=function(){return this.m};D.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function g0(t){let e="";return Lc(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function pl(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=g0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):_e(t,e,n))}function Vs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Rp(t){this.za=0,this.l=[],this.h=new io,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Vs("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Vs("baseRetryDelayMs",5e3,t),this.$a=Vs("retryDelaySeedMs",1e4,t),this.Ya=Vs("forwardChannelMaxRetries",2,t),this.ra=Vs("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new mp(t&&t.concurrentRequestLimit),this.Ca=new a0,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}D=Rp.prototype;D.ma=8;D.G=1;function gl(t){if(Np(t),t.G==3){var e=t.V++,n=jt(t.F);_e(n,"SID",t.J),_e(n,"RID",e),_e(n,"TYPE","terminate"),$s(t,n),e=new ks(t,t.h,e,void 0),e.K=2,e.v=go(jt(n)),n=!1,K.navigator&&K.navigator.sendBeacon&&(n=K.navigator.sendBeacon(e.v.toString(),"")),!n&&K.Image&&(new Image().src=e.v,n=!0),n||(e.g=Fp(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Os(e)}xp(t)}D.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function wo(t){t.g&&(vl(t),t.g.cancel(),t.g=null)}function Np(t){wo(t),t.u&&(K.clearTimeout(t.u),t.u=null),_o(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function ml(t,e){t.l.push(new i0(t.Za++,e)),t.G==3&&Eo(t)}function Eo(t){yp(t.i)||t.m||(t.m=!0,Yc(t.Ha,t),t.C=0)}function m0(t,e){return vp(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Rs(Le(t.Ha,t,e),Mp(t,t.C)),t.C++,!0)}D.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new ks(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Ld(i),xd(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Op(this,s,e),n=jt(this.F),_e(n,"RID",t),_e(n,"CVER",22),this.D&&_e(n,"X-HTTP-Session-Id",this.D),$s(this,n),this.o&&i&&pl(n,this.o,i),hl(this.i,s),this.Ra&&_e(n,"TYPE","init"),this.ja?(_e(n,"$req",e),_e(n,"SID","null"),s.$=!0,ol(s,n,null)):ol(s,n,e),this.G=2}}else this.G==3&&(t?kp(this,t):this.l.length==0||yp(this.i)||kp(this))};function kp(t,e){var n;e?n=e.m:n=t.V++;const r=jt(t.F);_e(r,"SID",t.J),_e(r,"RID",n),_e(r,"AID",t.U),$s(t,r),t.o&&t.s&&pl(r,t.o,t.s),n=new ks(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Op(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),hl(t.i,n),ol(n,r,e)}function $s(t,e){t.j&&cl({},function(n,r){_e(e,r,n)})}function Op(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Le(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].h;const u=s[c].g;if(l-=i,0>l)i=Math.max(0,s[c].h-100),a=!1;else try{c0(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function Dp(t){t.g||t.u||(t.Y=1,Yc(t.Ga,t),t.A=0)}function yl(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Rs(Le(t.Ga,t),Mp(t,t.A)),t.A++,!0)}D.Ga=function(){if(this.u=null,Pp(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Rs(Le(this.bb,this),t)}};D.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ze(10),wo(this),Pp(this))};function vl(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function Pp(t){t.g=new ks(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=jt(t.oa);_e(e,"RID","rpc"),_e(e,"SID",t.J),_e(e,"CI",t.N?"0":"1"),_e(e,"AID",t.U),$s(t,e),_e(e,"TYPE","xmlhttp"),t.o&&t.s&&pl(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=go(jt(e)),n.s=null,n.U=!0,op(n,t)}D.ab=function(){this.v!=null&&(this.v=null,wo(this),yl(this),Ze(19))};function _o(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function Lp(t,e){var n=null;if(t.g==e){_o(t),vl(t),t.g=null;var r=2}else if(ul(t.i,e))n=e.D,wp(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=oo(),xe(r,new tp(r,n,e,s)),Eo(t)}else Dp(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&m0(t,e)||r==2&&yl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Mn(t,5);break;case 4:Mn(t,10);break;case 3:Mn(t,6);break;default:Mn(t,2)}}}function Mp(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Mn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Le(t.jb,t);n||(n=new Ln("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||ho(n,"https"),go(n)),l0(n.toString(),r)}else Ze(2);t.G=0,t.j&&t.j.va(e),xp(t),Np(t)}D.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ze(2)):(this.h.info("Failed to ping google.com"),Ze(1))};function xp(t){t.G=0,t.I=-1,t.j&&((Ep(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Dc(t.l),t.l.length=0),t.j.ua())}function Up(t,e,n){let r=JT(n);if(r.i!="")e&&fo(r,e+"."+r.i),po(r,r.m);else{const s=K.location;r=XT(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&Lc(t.aa,function(s,i){_e(r,i,s)}),e=t.D,n=t.sa,e&&n&&_e(r,e,n),_e(r,"VER",t.ma),$s(t,r),r}function Fp(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Se(new xs({ib:!0})):new Se(t.qa),e.L=t.H,e}function Vp(){}D=Vp.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Oa=function(){};function Io(){if(_r&&!(10<=Number(NT)))throw Error("Environmental error: no available transport.")}Io.prototype.g=function(t,e){return new ut(t,e)};function ut(t,e){Oe.call(this),this.g=new Rp(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Zi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Zi(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Sr(this)}Me(ut,Oe);ut.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Yc(Le(t.hb,t,e))),Ze(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Up(t,null,t.W),Eo(t)};ut.prototype.close=function(){gl(this.g)};ut.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,ml(this.g,e)}else this.v?(e={},e.__data__=Qc(t),ml(this.g,e)):ml(this.g,t)};ut.prototype.M=function(){this.g.j=null,delete this.j,gl(this.g),delete this.g,ut.Z.M.call(this)};function $p(t){nl.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Me($p,nl);function Bp(){rl.call(this),this.status=1}Me(Bp,rl);function Sr(t){this.g=t}Me(Sr,Vp);Sr.prototype.xa=function(){xe(this.g,"a")};Sr.prototype.wa=function(t){xe(this.g,new $p(t))};Sr.prototype.va=function(t){xe(this.g,new Bp(t))};Sr.prototype.ua=function(){xe(this.g,"b")};Io.prototype.createWebChannel=Io.prototype.g;ut.prototype.send=ut.prototype.u;ut.prototype.open=ut.prototype.m;ut.prototype.close=ut.prototype.close;ao.NO_ERROR=0;ao.TIMEOUT=8;ao.HTTP_ERROR=6;np.COMPLETE="complete";sp.EventType=Ns;Ns.OPEN="a";Ns.CLOSE="b";Ns.ERROR="c";Ns.MESSAGE="d";Oe.prototype.listen=Oe.prototype.N;Se.prototype.listenOnce=Se.prototype.O;Se.prototype.getLastError=Se.prototype.La;Se.prototype.getLastErrorCode=Se.prototype.Da;Se.prototype.getStatus=Se.prototype.ba;Se.prototype.getResponseJson=Se.prototype.Qa;Se.prototype.getResponseText=Se.prototype.ga;Se.prototype.send=Se.prototype.ea;var y0=function(){return new Io},v0=function(){return oo()},wl=ao,w0=np,E0=On,jp={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},_0=xs,To=sp,I0=Se;const qp="@firebase/firestore";/**
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
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
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
 */let Ar="9.5.0";/**
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
 */const xn=new cc("@firebase/firestore");function Hp(){return xn.logLevel}function $(t,...e){if(xn.logLevel<=se.DEBUG){const n=e.map(El);xn.debug(`Firestore (${Ar}): ${t}`,...n)}}function un(t,...e){if(xn.logLevel<=se.ERROR){const n=e.map(El);xn.error(`Firestore (${Ar}): ${t}`,...n)}}function Kp(t,...e){if(xn.logLevel<=se.WARN){const n=e.map(El);xn.warn(`Firestore (${Ar}): ${t}`,...n)}}function El(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${Ar}) INTERNAL ASSERTION FAILED: `+t;throw un(e),new Error(e)}function me(t,e){t||G()}function Q(t,e){return t}/**
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
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class hn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class T0{constructor(e,n){this.user=n,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class b0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class S0{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new hn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new hn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{$("FirebaseCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):($("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new hn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new T0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new rt(e)}}class A0{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=rt.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},n=this.h.auth.getAuthHeaderValueForFirstParty([]);return n&&(e.Authorization=n),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class C0{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new A0(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
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
 */class _l{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.g(r),this.p=r=>n.writeSequenceNumber(r))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}/**
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
 */function R0(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */_l.T=-1;class zp{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=R0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function Cr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class ht{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new P(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new P(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new P(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ht.fromMillis(Date.now())}static fromDate(e){return ht.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ht(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ie(e)}static min(){return new ie(new ht(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function Wp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Un(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Gp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Bs{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Bs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Bs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends Bs{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new P(w.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const N0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends Bs{construct(e,n,r){return new st(e,n,r)}static isValidIdentifier(e){return N0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new P(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new P(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new P(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new P(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
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
 */class js{constructor(e){this.fields=e,e.sort(st.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Cr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class He{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new He(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new He(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}He.EMPTY_BYTE_STRING=new He("");const k0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fn(t){if(me(!!t),typeof t=="string"){let e=0;const n=k0.exec(t);if(me(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Rr(t){return typeof t=="string"?He.fromBase64String(t):He.fromUint8Array(t)}/**
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
 */function Qp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Yp(t){const e=t.mapValue.fields.__previous_value__;return Qp(e)?Yp(e):e}function qs(t){const e=fn(t.mapValue.fields.__local_write_time__.timestampValue);return new ht(e.seconds,e.nanos)}/**
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
 */function Nr(t){return t==null}function bo(t){return t===0&&1/t==-1/0}function O0(t){return typeof t=="number"&&Number.isInteger(t)&&!bo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(Ie.fromString(e))}static fromName(e){return new j(Ie.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new Ie(e.slice()))}}/**
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
 */function Fn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Qp(t)?4:10:G()}function Pt(t,e){const n=Fn(t);if(n!==Fn(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qs(t).isEqual(qs(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=fn(r.timestampValue),o=fn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Rr(r.bytesValue).isEqual(Rr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Ae(r.geoPointValue.latitude)===Ae(s.geoPointValue.latitude)&&Ae(r.geoPointValue.longitude)===Ae(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Ae(r.integerValue)===Ae(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Ae(r.doubleValue),o=Ae(s.doubleValue);return i===o?bo(i)===bo(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Cr(t.arrayValue.values||[],e.arrayValue.values||[],Pt);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Wp(i)!==Wp(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Pt(i[a],o[a])))return!1;return!0}(t,e);default:return G()}}function Hs(t,e){return(t.values||[]).find(n=>Pt(n,e))!==void 0}function kr(t,e){const n=Fn(t),r=Fn(e);if(n!==r)return oe(n,r);switch(n){case 0:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Ae(s.integerValue||s.doubleValue),a=Ae(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Jp(t.timestampValue,e.timestampValue);case 4:return Jp(qs(t),qs(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Rr(s),a=Rr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=oe(o[c],a[c]);if(l!==0)return l}return oe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=oe(Ae(s.latitude),Ae(i.latitude));return o!==0?o:oe(Ae(s.longitude),Ae(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=kr(o[c],a[c]);if(l)return l}return oe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=oe(a[u],l[u]);if(h!==0)return h;const f=kr(o[a[u]],c[l[u]]);if(f!==0)return f}return oe(a.length,l.length)}(t.mapValue,e.mapValue);default:throw G()}}function Jp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=fn(t),r=fn(e),s=oe(n.seconds,r.seconds);return s!==0?s:oe(n.nanos,r.nanos)}function Il(t){return Tl(t)}function Tl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=fn(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Rr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Tl(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Tl(r.fields[a])}`;return i+"}"}(t.mapValue):G();var e,n}function Xp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function bl(t){return!!t&&"integerValue"in t}function Sl(t){return!!t&&"arrayValue"in t}function Zp(t){return!!t&&"nullValue"in t}function eg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function So(t){return!!t&&"mapValue"in t}function Ks(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Un(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ks(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ks(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
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
 */class ft{constructor(e){this.value=e}static empty(){return new ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!So(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ks(n)}setAll(e){let n=st.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ks(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());So(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Pt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];So(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Un(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ft(Ks(this.value))}}function tg(t){const e=[];return Un(t.fields,(n,r)=>{const s=new st([n]);if(So(r)){const i=tg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new js(e)}/**
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
 */class Ke{constructor(e,n,r,s,i){this.key=e,this.documentType=n,this.version=r,this.data=s,this.documentState=i}static newInvalidDocument(e){return new Ke(e,0,ie.min(),ft.empty(),0)}static newFoundDocument(e,n,r){return new Ke(e,1,n,r,0)}static newNoDocument(e,n){return new Ke(e,2,n,ft.empty(),0)}static newUnknownDocument(e,n){return new Ke(e,3,n,ft.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new Ke(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class D0{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.A=null}}function ng(t,e=null,n=[],r=[],s=null,i=null,o=null){return new D0(t,e,n,r,s,i,o)}function Al(t){const e=Q(t);if(e.A===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>L0(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Nr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=Ao(e.startAt)),e.endAt&&(n+="|ub:",n+=Ao(e.endAt)),e.A=n}return e.A}function P0(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Il(r.value)}`;var r}).join(", ")}]`),Nr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Ao(t.startAt)),t.endAt&&(e+=", endAt: "+Ao(t.endAt)),`Target(${e})`}function Cl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!j0(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!Pt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ig(t.startAt,e.startAt)&&ig(t.endAt,e.endAt)}function Rl(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class et extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.R(e,n,r):new M0(e,n,r):n==="array-contains"?new F0(e,r):n==="in"?new V0(e,r):n==="not-in"?new $0(e,r):n==="array-contains-any"?new B0(e,r):new et(e,n,r)}static R(e,n,r){return n==="in"?new x0(e,r):new U0(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.P(kr(n,this.value)):n!==null&&Fn(this.value)===Fn(n)&&this.P(kr(n,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function L0(t){return t.field.canonicalString()+t.op.toString()+Il(t.value)}class M0 extends et{constructor(e,n,r){super(e,n,r),this.key=j.fromName(r.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.P(n)}}class x0 extends et{constructor(e,n){super(e,"in",n),this.keys=rg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class U0 extends et{constructor(e,n){super(e,"not-in",n),this.keys=rg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function rg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class F0 extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Sl(n)&&Hs(n.arrayValue,this.value)}}class V0 extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Hs(this.value.arrayValue,n)}}class $0 extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(Hs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Hs(this.value.arrayValue,n)}}class B0 extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Sl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Hs(this.value.arrayValue,r))}}class Nl{constructor(e,n){this.position=e,this.before=n}}function Ao(t){return`${t.before?"b":"a"}:${t.position.map(e=>Il(e)).join(",")}`}class Or{constructor(e,n="asc"){this.field=e,this.dir=n}}function j0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function sg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=kr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return t.before?r<=0:r<0}function ig(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Pt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Dr{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.V=null,this.S=null,this.startAt,this.endAt}}function q0(t,e,n,r,s,i,o,a){return new Dr(t,e,n,r,s,i,o,a)}function og(t){return new Dr(t)}function Co(t){return!Nr(t.limit)&&t.limitType==="F"}function Ro(t){return!Nr(t.limit)&&t.limitType==="L"}function kl(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ol(t){for(const e of t.filters)if(e.v())return e.field;return null}function ag(t){return t.collectionGroup!==null}function zs(t){const e=Q(t);if(e.V===null){e.V=[];const n=Ol(e),r=kl(e);if(n!==null&&r===null)n.isKeyField()||e.V.push(new Or(n)),e.V.push(new Or(st.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.V.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new Or(st.keyField(),i))}}}return e.V}function Vn(t){const e=Q(t);if(!e.S)if(e.limitType==="F")e.S=ng(e.path,e.collectionGroup,zs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of zs(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Or(i.field,o))}const r=e.endAt?new Nl(e.endAt.position,!e.endAt.before):null,s=e.startAt?new Nl(e.startAt.position,!e.startAt.before):null;e.S=ng(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.S}function H0(t,e,n){return new Dr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function No(t,e){return Cl(Vn(t),Vn(e))&&t.limitType===e.limitType}function cg(t){return`${Al(Vn(t))}|lt:${t.limitType}`}function Dl(t){return`Query(target=${P0(Vn(t))}; limitType=${t.limitType})`}function ko(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):j.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!sg(n.startAt,zs(n),r)||n.endAt&&sg(n.endAt,zs(n),r))}(t,e)}function lg(t){return(e,n)=>{let r=!1;for(const s of zs(t)){const i=K0(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function K0(t,e,n){const r=t.field.isKeyField()?j.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?kr(a,c):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
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
 */function ug(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bo(e)?"-0":e}}function hg(t){return{integerValue:""+t}}function z0(t,e){return O0(e)?hg(e):ug(t,e)}/**
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
 */class Oo{constructor(){this._=void 0}}function W0(t,e,n){return t instanceof Do?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Ws?dg(t,e):t instanceof Gs?pg(t,e):function(r,s){const i=fg(r,s),o=gg(i)+gg(r.C);return bl(i)&&bl(r.C)?hg(o):ug(r.N,o)}(t,e)}function G0(t,e,n){return t instanceof Ws?dg(t,e):t instanceof Gs?pg(t,e):n}function fg(t,e){return t instanceof Po?bl(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Do extends Oo{}class Ws extends Oo{constructor(e){super(),this.elements=e}}function dg(t,e){const n=mg(e);for(const r of t.elements)n.some(s=>Pt(s,r))||n.push(r);return{arrayValue:{values:n}}}class Gs extends Oo{constructor(e){super(),this.elements=e}}function pg(t,e){let n=mg(e);for(const r of t.elements)n=n.filter(s=>!Pt(s,r));return{arrayValue:{values:n}}}class Po extends Oo{constructor(e,n){super(),this.N=e,this.C=n}}function gg(t){return Ae(t.integerValue||t.doubleValue)}function mg(t){return Sl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Q0(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ws&&r instanceof Ws||n instanceof Gs&&r instanceof Gs?Cr(n.elements,r.elements,Pt):n instanceof Po&&r instanceof Po?Pt(n.C,r.C):n instanceof Do&&r instanceof Do}(t.transform,e.transform)}class Y0{constructor(e,n){this.version=e,this.transformResults=n}}class Ht{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ht}static exists(e){return new Ht(void 0,e)}static updateTime(e){return new Ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Mo{}function J0(t,e,n){t instanceof xo?function(r,s,i){const o=r.value.clone(),a=Eg(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof $n?function(r,s,i){if(!Lo(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=Eg(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(wg(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Pl(t,e,n){t instanceof xo?function(r,s,i){if(!Lo(r.precondition,s))return;const o=r.value.clone(),a=_g(r.fieldTransforms,i,s);o.setAll(a),s.convertToFoundDocument(vg(s),o).setHasLocalMutations()}(t,e,n):t instanceof $n?function(r,s,i){if(!Lo(r.precondition,s))return;const o=_g(r.fieldTransforms,i,s),a=s.data;a.setAll(wg(r)),a.setAll(o),s.convertToFoundDocument(vg(s),a).setHasLocalMutations()}(t,e,n):function(r,s){Lo(r.precondition,s)&&s.convertToNoDocument(ie.min())}(t,e)}function X0(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=fg(r.transform,s||null);i!=null&&(n==null&&(n=ft.empty()),n.set(r.field,i))}return n||null}function yg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Cr(n,r,(s,i)=>Q0(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function vg(t){return t.isFoundDocument()?t.version:ie.min()}class xo extends Mo{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}}class $n extends Mo{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}}function wg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Eg(t,e,n){const r=new Map;me(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,G0(o,a,n[s]))}return r}function _g(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,W0(i,o,e))}return r}class Ig extends Mo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Z0 extends Mo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class eb{constructor(e){this.count=e}}/**
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
 */var Ce,ee;function tb(t){switch(t){default:return G();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function Tg(t){if(t===void 0)return un("GRPC error has no .code"),w.UNKNOWN;switch(t){case Ce.OK:return w.OK;case Ce.CANCELLED:return w.CANCELLED;case Ce.UNKNOWN:return w.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return w.INTERNAL;case Ce.UNAVAILABLE:return w.UNAVAILABLE;case Ce.UNAUTHENTICATED:return w.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case Ce.NOT_FOUND:return w.NOT_FOUND;case Ce.ALREADY_EXISTS:return w.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return w.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case Ce.ABORTED:return w.ABORTED;case Ce.OUT_OF_RANGE:return w.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return w.UNIMPLEMENTED;case Ce.DATA_LOSS:return w.DATA_LOSS;default:return G()}}(ee=Ce||(Ce={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ze{constructor(e,n){this.comparator=e,this.root=n||Ue.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Uo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Uo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Uo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Uo(this.root,e,this.comparator,!0)}}class Uo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:Ue.RED,this.left=s!=null?s:Ue.EMPTY,this.right=i!=null?i:Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ue(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ue.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Ue(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Fe{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new bg(this.data.getIterator())}getIteratorFrom(e){return new bg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Fe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Fe(this.comparator);return n.data=e,n}}class bg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const nb=new ze(j.comparator);function Bn(){return nb}const rb=new ze(j.comparator);function Ll(){return rb}const sb=new ze(j.comparator);function ib(){return sb}const ob=new Fe(j.comparator);function ve(...t){let e=ob;for(const n of t)e=e.add(n);return e}const ab=new Fe(oe);function Sg(){return ab}/**
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
 */class Fo{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Qs.createSynthesizedTargetChangeForCurrentChange(e,n)),new Fo(ie.min(),r,Sg(),Bn(),ve())}}class Qs{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Qs(He.EMPTY_BYTE_STRING,n,ve(),ve(),ve())}}/**
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
 */class Vo{constructor(e,n,r,s){this.k=e,this.removedTargetIds=n,this.key=r,this.$=s}}class Ag{constructor(e,n){this.targetId=e,this.O=n}}class Cg{constructor(e,n,r=He.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Rg{constructor(){this.F=0,this.M=kg(),this.L=He.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=ve(),n=ve(),r=ve();return this.M.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:G()}}),new Qs(this.L,this.B,e,n,r)}G(){this.U=!1,this.M=kg()}H(e,n){this.U=!0,this.M=this.M.insert(e,n)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class cb{constructor(e){this.tt=e,this.et=new Map,this.nt=Bn(),this.st=Ng(),this.it=new Fe(oe)}rt(e){for(const n of e.k)e.$&&e.$.isFoundDocument()?this.ot(n,e.$):this.ct(n,e.key,e.$);for(const n of e.removedTargetIds)this.ct(n,e.key,e.$)}at(e){this.forEachTarget(e,n=>{const r=this.ut(n);switch(e.state){case 0:this.ht(n)&&r.j(e.resumeToken);break;case 1:r.X(),r.q||r.G(),r.j(e.resumeToken);break;case 2:r.X(),r.q||this.removeTarget(n);break;case 3:this.ht(n)&&(r.Z(),r.j(e.resumeToken));break;case 4:this.ht(n)&&(this.lt(n),r.j(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.et.forEach((r,s)=>{this.ht(s)&&n(s)})}ft(e){const n=e.targetId,r=e.O.count,s=this.dt(n);if(s){const i=s.target;if(Rl(i))if(r===0){const o=new j(i.path);this.ct(n,o,Ke.newNoDocument(o,ie.min()))}else me(r===1);else this.wt(n)!==r&&(this.lt(n),this.it=this.it.add(n))}}_t(e){const n=new Map;this.et.forEach((i,o)=>{const a=this.dt(o);if(a){if(i.current&&Rl(a.target)){const c=new j(a.target.path);this.nt.get(c)!==null||this.gt(o,c)||this.ct(o,c,Ke.newNoDocument(c,e))}i.K&&(n.set(o,i.W()),i.G())}});let r=ve();this.st.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.dt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))});const s=new Fo(e,n,this.it,this.nt,r);return this.nt=Bn(),this.st=Ng(),this.it=new Fe(oe),s}ot(e,n){if(!this.ht(e))return;const r=this.gt(e,n.key)?2:0;this.ut(e).H(n.key,r),this.nt=this.nt.insert(n.key,n),this.st=this.st.insert(n.key,this.yt(n.key).add(e))}ct(e,n,r){if(!this.ht(e))return;const s=this.ut(e);this.gt(e,n)?s.H(n,1):s.J(n),this.st=this.st.insert(n,this.yt(n).delete(e)),r&&(this.nt=this.nt.insert(n,r))}removeTarget(e){this.et.delete(e)}wt(e){const n=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let n=this.et.get(e);return n||(n=new Rg,this.et.set(e,n)),n}yt(e){let n=this.st.get(e);return n||(n=new Fe(oe),this.st=this.st.insert(e,n)),n}ht(e){const n=this.dt(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}dt(e){const n=this.et.get(e);return n&&n.q?null:this.tt.Tt(e)}lt(e){this.et.set(e,new Rg),this.tt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}gt(e,n){return this.tt.getRemoteKeysForTarget(e).has(n)}}function Ng(){return new ze(j.comparator)}function kg(){return new ze(j.comparator)}/**
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
 */const lb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ub=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class hb{constructor(e,n){this.databaseId=e,this.D=n}}function $o(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Og(t,e){return t.D?e.toBase64():e.toUint8Array()}function fb(t,e){return $o(t,e.toTimestamp())}function Kt(t){return me(!!t),ie.fromTimestamp(function(e){const n=fn(e);return new ht(n.seconds,n.nanos)}(t))}function Ml(t,e){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Dg(t){const e=Ie.fromString(t);return me(Fg(e)),e}function xl(t,e){return Ml(t.databaseId,e.path)}function Ul(t,e){const n=Dg(e);if(n.get(1)!==t.databaseId.projectId)throw new P(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(Pg(n))}function Fl(t,e){return Ml(t.databaseId,e)}function db(t){const e=Dg(t);return e.length===4?Ie.emptyPath():Pg(e)}function Vl(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Pg(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Lg(t,e,n){return{name:xl(t,e),fields:n.value.mapValue.fields}}function pb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.D?(me(l===void 0||typeof l=="string"),He.fromBase64String(l||"")):(me(l===void 0||l instanceof Uint8Array),He.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?w.UNKNOWN:Tg(c.code);return new P(l,c.message||"")}(o);n=new Cg(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ul(t,r.document.name),i=Kt(r.document.updateTime),o=new ft({mapValue:{fields:r.document.fields}}),a=Ke.newFoundDocument(s,i,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Vo(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ul(t,r.document),i=r.readTime?Kt(r.readTime):ie.min(),o=Ke.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Vo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ul(t,r.document),i=r.removedTargetIds||[];n=new Vo([],i,s,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new eb(s),o=r.targetId;n=new Ag(o,i)}}return n}function gb(t,e){let n;if(e instanceof xo)n={update:Lg(t,e.key,e.value)};else if(e instanceof Ig)n={delete:xl(t,e.key)};else if(e instanceof $n)n={update:Lg(t,e.key,e.data),updateMask:Sb(e.fieldMask)};else{if(!(e instanceof Z0))return G();n={verify:xl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Do)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ws)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Gs)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Po)return{fieldPath:i.field.canonicalString(),increment:o.C};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:fb(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function mb(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?Kt(r.updateTime):Kt(s);return i.isEqual(ie.min())&&(i=Kt(s)),new Y0(i,r.transformResults||[])}(n,e))):[]}function yb(t,e){return{documents:[Fl(t,e.path)]}}function vb(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Fl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Fl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(a){if(a.length===0)return;const c=a.map(l=>function(u){if(u.op==="=="){if(eg(u.value))return{unaryFilter:{field:Pr(u.field),op:"IS_NAN"}};if(Zp(u.value))return{unaryFilter:{field:Pr(u.field),op:"IS_NULL"}}}else if(u.op==="!="){if(eg(u.value))return{unaryFilter:{field:Pr(u.field),op:"IS_NOT_NAN"}};if(Zp(u.value))return{unaryFilter:{field:Pr(u.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pr(u.field),op:Ib(u.op),value:u.value}}}(l));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(a){if(a.length!==0)return a.map(c=>function(l){return{field:Pr(l.field),direction:_b(l.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(a,c){return a.D||Nr(c)?c:{value:c}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=xg(e.startAt)),e.endAt&&(n.structuredQuery.endAt=xg(e.endAt)),n}function wb(t){let e=db(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){me(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Mg(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Or(Lr(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Nr(h)?null:h}(n.limit));let c=null;n.startAt&&(c=Ug(n.startAt));let l=null;return n.endAt&&(l=Ug(n.endAt)),q0(e,s,o,i,a,"F",c,l)}function Eb(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return G()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Mg(t){return t?t.unaryFilter!==void 0?[bb(t)]:t.fieldFilter!==void 0?[Tb(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Mg(e)).reduce((e,n)=>e.concat(n)):G():[]}function xg(t){return{before:t.before,values:t.position}}function Ug(t){const e=!!t.before,n=t.values||[];return new Nl(n,e)}function _b(t){return lb[t]}function Ib(t){return ub[t]}function Pr(t){return{fieldPath:t.canonicalString()}}function Lr(t){return st.fromServerFormat(t.fieldPath)}function Tb(t){return et.create(Lr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(t.fieldFilter.op),t.fieldFilter.value)}function bb(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Lr(t.unaryFilter.field);return et.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Lr(t.unaryFilter.field);return et.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Lr(t.unaryFilter.field);return et.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Lr(t.unaryFilter.field);return et.create(s,"!=",{nullValue:"NULL_VALUE"});default:return G()}}function Sb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Fg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const Ab="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Cb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(s=>s?O.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}}function Ys(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Rb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&J0(i,e,r[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Pl(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Pl(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),s=r;this.applyToLocalView(s),r.isValidDocument()||s.convertToNoDocument(ie.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&Cr(this.mutations,e.mutations,(n,r)=>yg(n,r))&&Cr(this.baseMutations,e.baseMutations,(n,r)=>yg(n,r))}}class $l{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){me(e.mutations.length===r.length);let s=ib();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new $l(e,n,r,s)}}/**
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
 */class jn{constructor(e,n,r,s,i=ie.min(),o=ie.min(),a=He.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class Nb{constructor(e){this.Wt=e}}function kb(t){const e=wb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?H0(e,e.limit,"L"):e}/**
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
 */class Ob{constructor(){this.Gt=new Db}addToCollectionParentIndex(e,n){return this.Gt.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.Gt.getEntries(n))}}class Db{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Fe(Ie.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Fe(Ie.comparator)).toArray()}}/**
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
 */class Mr{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new Mr(0)}static ie(){return new Mr(-1)}}/**
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
 */async function Js(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==Ab)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Xs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s!==void 0){for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),!0;return!1}forEach(e){Un(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Gp(this.inner)}}/**
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
 */class Pb{constructor(){this.changes=new Xs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:ie.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:Ke.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Vg{constructor(e,n,r){this.He=e,this.In=n,this.Ht=r}An(e,n){return this.In.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Rn(e,n,r))}Rn(e,n,r){return this.He.getEntry(e,n).next(s=>{for(const i of r)i.applyToLocalView(s);return s})}bn(e,n){e.forEach((r,s)=>{for(const i of n)i.applyToLocalView(s)})}Pn(e,n){return this.He.getEntries(e,n).next(r=>this.vn(e,r).next(()=>r))}vn(e,n){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.bn(n,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return j.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.Vn(e,n.path):ag(n)?this.Sn(e,n,r):this.Dn(e,n,r)}Vn(e,n){return this.An(e,new j(n)).next(r=>{let s=Ll();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}Sn(e,n,r){const s=n.collectionGroup;let i=Ll();return this.Ht.getCollectionParents(e,s).next(o=>O.forEach(o,a=>{const c=function(l,u){return new Dr(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.Dn(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}Dn(e,n,r){let s,i;return this.He.getDocumentsMatchingQuery(e,n,r).next(o=>(s=o,this.In.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(i=o,this.Cn(e,i,s).next(a=>{s=a;for(const c of i)for(const l of c.mutations){const u=l.key;let h=s.get(u);h==null&&(h=Ke.newInvalidDocument(u),s=s.insert(u,h)),Pl(l,h,c.localWriteTime),h.isFoundDocument()||(s=s.remove(u))}}))).next(()=>(s.forEach((o,a)=>{ko(n,a)||(s=s.remove(o))}),s))}Cn(e,n,r){let s=ve();for(const o of n)for(const a of o.mutations)a instanceof $n&&r.get(a.key)===null&&(s=s.add(a.key));let i=r;return this.He.getEntries(e,s).next(o=>(o.forEach((a,c)=>{c.isFoundDocument()&&(i=i.insert(a,c))}),i))}}/**
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
 */class Bl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Nn=r,this.xn=s}static kn(e,n){let r=ve(),s=ve();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Bl(e,n.fromCache,r,s)}}/**
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
 */class Lb{$n(e){this.On=e}getDocumentsMatchingQuery(e,n,r,s){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(ie.min())?this.Fn(e,n):this.On.Pn(e,s).next(i=>{const o=this.Mn(n,i);return(Co(n)||Ro(n))&&this.Ln(n.limitType,o,s,r)?this.Fn(e,n):(Hp()<=se.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Dl(n)),this.On.getDocumentsMatchingQuery(e,n,r).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}Mn(e,n){let r=new Fe(lg(e));return n.forEach((s,i)=>{ko(e,i)&&(r=r.add(i))}),r}Ln(e,n,r,s){if(r.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Fn(e,n){return Hp()<=se.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Dl(n)),this.On.getDocumentsMatchingQuery(e,n,ie.min())}}/**
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
 */class Mb{constructor(e,n,r,s){this.persistence=e,this.Bn=n,this.N=s,this.Un=new ze(oe),this.qn=new Xs(i=>Al(i),Cl),this.Kn=ie.min(),this.In=e.getMutationQueue(r),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new Vg(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Un))}}function xb(t,e,n,r){return new Mb(t,e,n,r)}async function $g(t,e){const n=Q(t);let r=n.In,s=n.Qn;const i=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.In.getAllMutationBatches(o).next(c=>(a=c,r=n.persistence.getMutationQueue(e),s=new Vg(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(o))).next(c=>{const l=[],u=[];let h=ve();for(const f of a){l.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}for(const f of c){u.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}return s.Pn(o,h).next(f=>({Wn:f,removedBatchIds:l,addedBatchIds:u}))})});return n.In=r,n.Qn=s,n.Bn.$n(n.Qn),i}function Ub(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.jn.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=O.resolve();return h.forEach(g=>{f=f.next(()=>l.getEntry(a,g)).next(y=>{const C=c.docVersions.get(g);me(C!==null),y.version.compareTo(C)<0&&(u.applyToRemoteDocument(y,c),y.isValidDocument()&&l.addEntry(y,c.commitVersion))})}),f.next(()=>o.In.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.In.performConsistencyCheck(r)).next(()=>n.Qn.Pn(r,s))})}function Bg(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ze.getLastRemoteSnapshotVersion(n))}function Fb(t,e){const n=Q(t),r=e.snapshotVersion;let s=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});s=n.Un;const a=[];e.targetChanges.forEach((l,u)=>{const h=s.get(u);if(!h)return;a.push(n.ze.removeMatchingKeys(i,l.removedDocuments,u).next(()=>n.ze.addMatchingKeys(i,l.addedDocuments,u)));const f=l.resumeToken;if(f.approximateByteSize()>0){const g=h.withResumeToken(f,r).withSequenceNumber(i.currentSequenceNumber);s=s.insert(u,g),function(y,C,v){return me(C.resumeToken.approximateByteSize()>0),y.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(h,g,l)&&a.push(n.ze.updateTargetData(i,g))}});let c=Bn();if(e.documentUpdates.forEach((l,u)=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Vb(i,o,e.documentUpdates,r,void 0).next(l=>{c=l})),!r.isEqual(ie.min())){const l=n.ze.getLastRemoteSnapshotVersion(i).next(u=>n.ze.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return O.waitFor(a).next(()=>o.apply(i)).next(()=>n.Qn.vn(i,c)).next(()=>c)}).then(i=>(n.Un=s,i))}function Vb(t,e,n,r,s){let i=ve();return n.forEach(o=>i=i.add(o)),e.getEntries(t,i).next(o=>{let a=Bn();return n.forEach((c,l)=>{const u=o.get(c),h=(s==null?void 0:s.get(c))||r;l.isNoDocument()&&l.version.isEqual(ie.min())?(e.removeEntry(c,h),a=a.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l,h),a=a.insert(c,l)):$("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),a})}function $b(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.In.getNextMutationBatchAfterBatchId(r,e)))}function Bb(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.ze.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):n.ze.allocateTargetId(r).next(o=>(s=new jn(e,o,0,r.currentSequenceNumber),n.ze.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Un.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Un=n.Un.insert(r.targetId,r),n.qn.set(e,r.targetId)),r})}async function jl(t,e,n){const r=Q(t),s=r.Un.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ys(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Un=r.Un.remove(e),r.qn.delete(s.target)}function jg(t,e,n){const r=Q(t);let s=ie.min(),i=ve();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=Q(a),h=u.qn.get(l);return h!==void 0?O.resolve(u.Un.get(h)):u.ze.getTargetData(c,l)}(r,o,Vn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Bn.getDocumentsMatchingQuery(o,e,n?s:ie.min(),n?i:ve())).next(a=>({documents:a,Gn:i})))}/**
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
 */class jb{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return O.resolve(this.Yn.get(n))}saveBundleMetadata(e,n){var r;return this.Yn.set(n.id,{id:(r=n).id,version:r.version,createTime:Kt(r.createTime)}),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:kb(r.bundledQuery),readTime:Kt(r.readTime)}}(n)),O.resolve()}}/**
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
 */class ql{constructor(){this.Zn=new Fe(De.ts),this.es=new Fe(De.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new De(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new De(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}cs(e){const n=new j(new Ie([])),r=new De(n,e),s=new De(n,e+1),i=[];return this.es.forEachInRange([r,s],o=>{this.rs(o),i.push(o.key)}),i}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new j(new Ie([])),r=new De(n,e),s=new De(n,e+1);let i=ve();return this.es.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new De(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class De{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return j.comparator(e.key,n.key)||oe(e.ls,n.ls)}static ns(e,n){return oe(e.ls,n.ls)||j.comparator(e.key,n.key)}}/**
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
 */class qb{constructor(e,n){this.Ht=e,this.referenceDelegate=n,this.In=[],this.fs=1,this.ds=new Fe(De.ts)}checkEmpty(e){return O.resolve(this.In.length===0)}addMutationBatch(e,n,r,s){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new Rb(i,n,r,s);this.In.push(o);for(const a of s)this.ds=this.ds.add(new De(a.key,i)),this.Ht.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.ws(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this._s(r),i=s<0?0:s;return O.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(e){return O.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new De(n,0),s=new De(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([r,s],o=>{const a=this.ws(o.ls);i.push(a)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Fe(oe);return n.forEach(s=>{const i=new De(s,0),o=new De(s,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{r=r.add(a.ls)})}),O.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;j.isDocumentKey(i)||(i=i.child(""));const o=new De(new j(i),0);let a=new Fe(oe);return this.ds.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.ls)),!0)},o),O.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const s=this.ws(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){me(this.ys(n.batchId,"removed")===0),this.In.shift();let r=this.ds;return O.forEach(n.mutations,s=>{const i=new De(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ds=r})}te(e){}containsKey(e,n){const r=new De(n,0),s=this.ds.firstAfterOrEqual(r);return O.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.In.length,O.resolve()}ys(e,n){return this._s(e)}_s(e){return this.In.length===0?0:e-this.In[0].batchId}ws(e){const n=this._s(e);return n<0||n>=this.In.length?null:this.In[n]}}/**
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
 */class Hb{constructor(e,n){this.Ht=e,this.ps=n,this.docs=new ze(j.comparator),this.size=0}addEntry(e,n,r){const s=n.key,i=this.docs.get(s),o=i?i.size:0,a=this.ps(n);return this.docs=this.docs.insert(s,{document:n.clone(),size:a,readTime:r}),this.size+=a-o,this.Ht.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.clone():Ke.newInvalidDocument(n))}getEntries(e,n){let r=Bn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.clone():Ke.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r){let s=Bn();const i=new j(n.path.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c,readTime:l}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;l.compareTo(r)<=0||ko(n,c)&&(s=s.insert(c.key,c.clone()))}return O.resolve(s)}Ts(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Kb(this)}getSize(e){return O.resolve(this.size)}}class Kb extends Pb{constructor(e){super(),this.Se=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.document.isValidDocument()?n.push(this.Se.addEntry(e,s.document,this.getReadTime(r))):this.Se.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Se.getEntry(e,n)}getAllFromCache(e,n){return this.Se.getEntries(e,n)}}/**
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
 */class zb{constructor(e){this.persistence=e,this.Es=new Xs(n=>Al(n),Cl),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.Is=0,this.As=new ql,this.targetCount=0,this.Rs=Mr.se()}forEachTarget(e,n){return this.Es.forEach((r,s)=>n(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Is&&(this.Is=n),O.resolve()}ce(e){this.Es.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Mr(n),this.highestTargetId=n),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,n){return this.ce(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.ce(n),O.resolve()}removeTargetData(e,n){return this.Es.delete(n.target),this.As.cs(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Es.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Es.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.Es.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.As.cs(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.As.containsKey(n))}}/**
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
 */class Wb{constructor(e,n){this.bs={},this.Le=new _l(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new zb(this),this.Ht=new Ob,this.He=function(r,s){return new Hb(r,s)}(this.Ht,r=>this.referenceDelegate.Ps(r)),this.N=new Nb(n),this.Je=new jb(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new qb(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const s=new Gb(this.Le.next());return this.referenceDelegate.vs(),r(s).next(i=>this.referenceDelegate.Vs(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ss(e,n){return O.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class Gb extends Cb{constructor(e){super(),this.currentSequenceNumber=e}}class Hl{constructor(e){this.persistence=e,this.Ds=new ql,this.Cs=null}static Ns(e){return new Hl(e)}get xs(){if(this.Cs)return this.Cs;throw G()}addReference(e,n,r){return this.Ds.addReference(r,n),this.xs.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ds.removeReference(r,n),this.xs.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ds.cs(n.targetId).forEach(s=>this.xs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.xs.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}vs(){this.Cs=new Set}Vs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.xs,r=>{const s=j.fromPath(r);return this.ks(e,s).next(i=>{i||n.removeEntry(s)})}).next(()=>(this.Cs=null,n.apply(e)))}updateLimboDocument(e,n){return this.ks(e,n).next(r=>{r?this.xs.delete(n.toString()):this.xs.add(n.toString())})}Ps(e){return 0}ks(e,n){return O.or([()=>O.resolve(this.Ds.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ss(e,n)])}}class qg{constructor(){this.activeTargetIds=Sg()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Qb{constructor(){this.yi=new qg,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,n,r){this.pi[e]=n}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new qg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class Yb{Ti(e){}shutdown(){}}/**
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
 */class Hg{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Jb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class Xb{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
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
 */class Zb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,n,r,s){const i=this.Bi(e,n);$("RestConnection","Sending: ",i,r);const o={};return this.Ui(o,s),this.qi(e,i,o,r).then(a=>($("RestConnection","Received: ",a),a),a=>{throw Kp("RestConnection",`${e} failed with error: `,a,"url: ",i,"request:",r),a})}Ki(e,n,r,s){return this.Li(e,n,r,s)}Ui(e,n){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+Ar,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n)for(const r in n.authHeaders)n.authHeaders.hasOwnProperty(r)&&(e[r]=n.authHeaders[r])}Bi(e,n){const r=Jb[e];return`${this.Fi}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,n,r,s){return new Promise((i,o)=>{const a=new I0;a.listenOnce(w0.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case wl.NO_ERROR:const l=a.getResponseJson();$("Connection","XHR received:",JSON.stringify(l)),i(l);break;case wl.TIMEOUT:$("Connection",'RPC "'+e+'" timed out'),o(new P(w.DEADLINE_EXCEEDED,"Request time out"));break;case wl.HTTP_ERROR:const u=a.getStatus();if($("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(y)>=0?y:w.UNKNOWN}(h.status);o(new P(f,h.message))}else o(new P(w.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new P(w.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{$("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}ji(e,n){const r=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=y0(),i=v0(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new _0({})),this.Ui(o.initMessageHeaders,n),Df()||Lf()||kE()||Mf()||OE()||Pf()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");$("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let l=!1,u=!1;const h=new Xb({vi:g=>{u?$("Connection","Not sending because WebChannel is closed:",g):(l||($("Connection","Opening WebChannel transport."),c.open(),l=!0),$("Connection","WebChannel sending:",g),c.send(g))},Vi:()=>c.close()}),f=(g,y,C)=>{g.listen(y,v=>{try{C(v)}catch(b){setTimeout(()=>{throw b},0)}})};return f(c,To.EventType.OPEN,()=>{u||$("Connection","WebChannel transport opened.")}),f(c,To.EventType.CLOSE,()=>{u||(u=!0,$("Connection","WebChannel transport closed"),h.$i())}),f(c,To.EventType.ERROR,g=>{u||(u=!0,Kp("Connection","WebChannel transport errored:",g),h.$i(new P(w.UNAVAILABLE,"The operation could not be completed")))}),f(c,To.EventType.MESSAGE,g=>{var y;if(!u){const C=g.data[0];me(!!C);const v=C,b=v.error||((y=v[0])===null||y===void 0?void 0:y.error);if(b){$("Connection","WebChannel received error:",b);const L=b.status;let q=function(fe){const we=Ce[fe];if(we!==void 0)return Tg(we)}(L),z=b.message;q===void 0&&(q=w.INTERNAL,z="Unknown error status: "+L+" with message "+b.message),u=!0,h.$i(new P(q,z)),c.close()}else $("Connection","WebChannel received:",C),h.Oi(C)}}),f(i,E0.STAT_EVENT,g=>{g.stat===jp.PROXY?$("Connection","Detected buffering proxy"):g.stat===jp.NOPROXY&&$("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.ki()},0),h}}function Kl(){return typeof document!="undefined"?document:null}/**
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
 */function Bo(t){return new hb(t,!0)}class Kg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Oe=e,this.timerId=n,this.Qi=r,this.Wi=s,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const n=Math.floor(this.zi+this.Zi()),r=Math.max(0,Date.now()-this.Ji),s=Math.max(0,n-r);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.zi} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,s,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
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
 */class zg{constructor(e,n,r,s,i,o,a){this.Oe=e,this.er=r,this.nr=s,this.sr=i,this.credentialsProvider=o,this.listener=a,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new Kg(e,n)}ur(){return this.state===1||this.state===5||this.hr()}hr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&this.rr===null&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this._r()))}mr(e){this.gr(),this.stream.send(e)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,n){this.gr(),this.yr(),this.ar.cancel(),this.ir++,e!==4?this.ar.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(un(n.toString()),un("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.pr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(n)}pr(){}auth(){this.state=1;const e=this.Tr(this.ir),n=this.ir;this.credentialsProvider.getToken().then(r=>{this.ir===n&&this.Er(r)},r=>{e(()=>{const s=new P(w.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ir(s)})})}Er(e){const n=this.Tr(this.ir);this.stream=this.Ar(e),this.stream.Si(()=>{n(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,()=>(this.hr()&&(this.state=3),Promise.resolve())),this.listener.Si()))}),this.stream.Ci(r=>{n(()=>this.Ir(r))}),this.stream.onMessage(r=>{n(()=>this.onMessage(r))})}lr(){this.state=5,this.ar.Xi(async()=>{this.state=0,this.start()})}Ir(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Tr(e){return n=>{this.Oe.enqueueAndForget(()=>this.ir===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eS extends zg{constructor(e,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i),this.N=s}Ar(e){return this.sr.ji("Listen",e)}onMessage(e){this.ar.reset();const n=pb(this.N,e),r=function(s){if(!("targetChange"in s))return ie.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?ie.min():i.readTime?Kt(i.readTime):ie.min()}(e);return this.listener.Rr(n,r)}br(e){const n={};n.database=Vl(this.N),n.addTarget=function(s,i){let o;const a=i.target;return o=Rl(a)?{documents:yb(s,a)}:{query:vb(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Og(s,i.resumeToken):i.snapshotVersion.compareTo(ie.min())>0&&(o.readTime=$o(s,i.snapshotVersion.toTimestamp())),o}(this.N,e);const r=Eb(this.N,e);r&&(n.labels=r),this.mr(n)}Pr(e){const n={};n.database=Vl(this.N),n.removeTarget=e,this.mr(n)}}class tS extends zg{constructor(e,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i),this.N=s,this.vr=!1}get Vr(){return this.vr}start(){this.vr=!1,this.lastStreamToken=void 0,super.start()}pr(){this.vr&&this.Sr([])}Ar(e){return this.sr.ji("Write",e)}onMessage(e){if(me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.vr){this.ar.reset();const n=mb(e.writeResults,e.commitTime),r=Kt(e.commitTime);return this.listener.Dr(r,n)}return me(!e.writeResults||e.writeResults.length===0),this.vr=!0,this.listener.Cr()}Nr(){const e={};e.database=Vl(this.N),this.mr(e)}Sr(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>gb(this.N,r))};this.mr(n)}}/**
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
 */class nS extends class{}{constructor(e,n,r){super(),this.credentials=e,this.sr=n,this.N=r,this.kr=!1}$r(){if(this.kr)throw new P(w.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,n,r){return this.$r(),this.credentials.getToken().then(s=>this.sr.Li(e,n,r,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===w.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new P(w.UNKNOWN,s.toString())})}Ki(e,n,r){return this.$r(),this.credentials.getToken().then(s=>this.sr.Ki(e,n,r,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===w.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new P(w.UNKNOWN,s.toString())})}terminate(){this.kr=!0}}class rS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){this.Or===0&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve())))}qr(e){this.state==="Online"?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Br("Offline")))}set(e){this.Kr(),this.Or=0,e==="Online"&&(this.Mr=!1),this.Br(e)}Br(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ur(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?(un(n),this.Mr=!1):$("OnlineStateTracker",n)}Kr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
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
 */class sS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=i,this.zr.Ti(o=>{r.enqueueAndForget(async()=>{qn(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Q(a);c.Wr.add(4),await Zs(c),c.Hr.set("Unknown"),c.Wr.delete(4),await jo(c)}(this))})}),this.Hr=new rS(r,s)}}async function jo(t){if(qn(t))for(const e of t.Gr)await e(!0)}async function Zs(t){for(const e of t.Gr)await e(!1)}function Wg(t,e){const n=Q(t);n.Qr.has(e.targetId)||(n.Qr.set(e.targetId,e),Gl(n)?Wl(n):xr(n).hr()&&zl(n,e))}function Gg(t,e){const n=Q(t),r=xr(n);n.Qr.delete(e),r.hr()&&Qg(n,e),n.Qr.size===0&&(r.hr()?r.wr():qn(n)&&n.Hr.set("Unknown"))}function zl(t,e){t.Jr.Y(e.targetId),xr(t).br(e)}function Qg(t,e){t.Jr.Y(e),xr(t).Pr(e)}function Wl(t){t.Jr=new cb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.Qr.get(e)||null}),xr(t).start(),t.Hr.Lr()}function Gl(t){return qn(t)&&!xr(t).ur()&&t.Qr.size>0}function qn(t){return Q(t).Wr.size===0}function Yg(t){t.Jr=void 0}async function iS(t){t.Qr.forEach((e,n)=>{zl(t,e)})}async function oS(t,e){Yg(t),Gl(t)?(t.Hr.qr(e),Wl(t)):t.Hr.set("Unknown")}async function aS(t,e,n){if(t.Hr.set("Online"),e instanceof Cg&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.Qr.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.Qr.delete(o),r.Jr.removeTarget(o))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await qo(t,r)}else if(e instanceof Vo?t.Jr.rt(e):e instanceof Ag?t.Jr.ft(e):t.Jr.at(e),!n.isEqual(ie.min()))try{const r=await Bg(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.Jr._t(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.Qr.get(c);l&&s.Qr.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.Qr.get(a);if(!c)return;s.Qr.set(a,c.withResumeToken(He.EMPTY_BYTE_STRING,c.snapshotVersion)),Qg(s,a);const l=new jn(c.target,a,1,c.sequenceNumber);zl(s,l)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await qo(t,r)}}async function qo(t,e,n){if(!Ys(e))throw e;t.Wr.add(1),await Zs(t),t.Hr.set("Offline"),n||(n=()=>Bg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.Wr.delete(1),await jo(t)})}function Jg(t,e){return e().catch(n=>qo(t,n,e))}async function Ho(t){const e=Q(t),n=dn(e);let r=e.jr.length>0?e.jr[e.jr.length-1].batchId:-1;for(;cS(e);)try{const s=await $b(e.localStore,r);if(s===null){e.jr.length===0&&n.wr();break}r=s.batchId,lS(e,s)}catch(s){await qo(e,s)}Xg(e)&&Zg(e)}function cS(t){return qn(t)&&t.jr.length<10}function lS(t,e){t.jr.push(e);const n=dn(t);n.hr()&&n.Vr&&n.Sr(e.mutations)}function Xg(t){return qn(t)&&!dn(t).ur()&&t.jr.length>0}function Zg(t){dn(t).start()}async function uS(t){dn(t).Nr()}async function hS(t){const e=dn(t);for(const n of t.jr)e.Sr(n.mutations)}async function fS(t,e,n){const r=t.jr.shift(),s=$l.from(r,e,n);await Jg(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ho(t)}async function dS(t,e){e&&dn(t).Vr&&await async function(n,r){if(s=r.code,tb(s)&&s!==w.ABORTED){const i=n.jr.shift();dn(n).dr(),await Jg(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Ho(n)}var s}(t,e),Xg(t)&&Zg(t)}async function pS(t,e){const n=Q(t);e?(n.Wr.delete(2),await jo(n)):e||(n.Wr.add(2),await Zs(n),n.Hr.set("Unknown"))}function xr(t){return t.Yr||(t.Yr=function(e,n,r){const s=Q(e);return s.$r(),new eS(n,s.sr,s.credentials,s.N,r)}(t.datastore,t.asyncQueue,{Si:iS.bind(null,t),Ci:oS.bind(null,t),Rr:aS.bind(null,t)}),t.Gr.push(async e=>{e?(t.Yr.dr(),Gl(t)?Wl(t):t.Hr.set("Unknown")):(await t.Yr.stop(),Yg(t))})),t.Yr}function dn(t){return t.Xr||(t.Xr=function(e,n,r){const s=Q(e);return s.$r(),new tS(n,s.sr,s.credentials,s.N,r)}(t.datastore,t.asyncQueue,{Si:uS.bind(null,t),Ci:dS.bind(null,t),Cr:hS.bind(null,t),Dr:fS.bind(null,t)}),t.Gr.push(async e=>{e?(t.Xr.dr(),await Ho(t)):(await t.Xr.stop(),t.jr.length>0&&($("RemoteStore",`Stopping write stream with ${t.jr.length} pending writes`),t.jr=[]))})),t.Xr}/**
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
 */class Ql{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new hn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Ql(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yl(t,e){if(un("AsyncQueue",`${e}: ${t}`),Ys(t))return new P(w.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ur{constructor(e){this.comparator=e?(n,r)=>e(n,r)||j.comparator(n.key,r.key):(n,r)=>j.comparator(n.key,r.key),this.keyedMap=Ll(),this.sortedSet=new ze(this.comparator)}static emptySet(e){return new Ur(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ur)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ur;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class em{constructor(){this.Zr=new ze(j.comparator)}track(e){const n=e.doc.key,r=this.Zr.get(n);r?e.type!==0&&r.type===3?this.Zr=this.Zr.insert(n,e):e.type===3&&r.type!==1?this.Zr=this.Zr.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Zr=this.Zr.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Zr=this.Zr.remove(n):e.type===1&&r.type===2?this.Zr=this.Zr.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):G():this.Zr=this.Zr.insert(n,e)}eo(){const e=[];return this.Zr.inorderTraversal((n,r)=>{e.push(r)}),e}}class Fr{constructor(e,n,r,s,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Fr(e,n,Ur.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&No(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class gS{constructor(){this.no=void 0,this.listeners=[]}}class mS{constructor(){this.queries=new Xs(e=>cg(e),No),this.onlineState="Unknown",this.so=new Set}}async function yS(t,e){const n=Q(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new gS),s)try{i.no=await n.onListen(r)}catch(o){const a=Yl(o,`Initialization of query '${Dl(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.io(n.onlineState),i.no&&e.ro(i.no)&&Jl(n)}async function vS(t,e){const n=Q(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function wS(t,e){const n=Q(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.ro(s)&&(r=!0);o.no=s}}r&&Jl(n)}function ES(t,e,n){const r=Q(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Jl(t){t.so.forEach(e=>{e.next()})}class _S{constructor(e,n,r){this.query=e,this.oo=n,this.co=!1,this.ao=null,this.onlineState="Unknown",this.options=r||{}}ro(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Fr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.co?this.uo(e)&&(this.oo.next(e),n=!0):this.ho(e,this.onlineState)&&(this.lo(e),n=!0),this.ao=e,n}onError(e){this.oo.error(e)}io(e){this.onlineState=e;let n=!1;return this.ao&&!this.co&&this.ho(this.ao,e)&&(this.lo(this.ao),n=!0),n}ho(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.fo||!r)&&(!e.docs.isEmpty()||n==="Offline")}uo(e){if(e.docChanges.length>0)return!0;const n=this.ao&&this.ao.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}lo(e){e=Fr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.oo.next(e)}}/**
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
 */class tm{constructor(e){this.key=e}}class nm{constructor(e){this.key=e}}class IS{constructor(e,n){this.query=e,this.po=n,this.To=null,this.current=!1,this.Eo=ve(),this.mutatedKeys=ve(),this.Io=lg(e),this.Ao=new Ur(this.Io)}get Ro(){return this.po}bo(e,n){const r=n?n.Po:new em,s=n?n.Ao:this.Ao;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=Co(this.query)&&s.size===this.query.limit?s.last():null,l=Ro(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),g=ko(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),C=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let v=!1;f&&g?f.data.isEqual(g.data)?y!==C&&(r.track({type:3,doc:g}),v=!0):this.vo(f,g)||(r.track({type:2,doc:g}),v=!0,(c&&this.Io(g,c)>0||l&&this.Io(g,l)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),v=!0):f&&!g&&(r.track({type:1,doc:f}),v=!0,(c||l)&&(a=!0)),v&&(g?(o=o.add(g),i=C?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),Co(this.query)||Ro(this.query))for(;o.size>this.query.limit;){const u=Co(this.query)?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Ao:o,Po:r,Ln:a,mutatedKeys:i}}vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Ao;this.Ao=e.Ao,this.mutatedKeys=e.mutatedKeys;const i=e.Po.eo();i.sort((l,u)=>function(h,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return g(h)-g(f)}(l.type,u.type)||this.Io(l.doc,u.doc)),this.Vo(r);const o=n?this.So():[],a=this.Eo.size===0&&this.current?1:0,c=a!==this.To;return this.To=a,i.length!==0||c?{snapshot:new Fr(this.query,e.Ao,s,i,e.mutatedKeys,a===0,c,!1),Do:o}:{Do:o}}io(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ao:this.Ao,Po:new em,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{Do:[]}}Co(e){return!this.po.has(e)&&!!this.Ao.has(e)&&!this.Ao.get(e).hasLocalMutations}Vo(e){e&&(e.addedDocuments.forEach(n=>this.po=this.po.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.po=this.po.delete(n)),this.current=e.current)}So(){if(!this.current)return[];const e=this.Eo;this.Eo=ve(),this.Ao.forEach(r=>{this.Co(r.key)&&(this.Eo=this.Eo.add(r.key))});const n=[];return e.forEach(r=>{this.Eo.has(r)||n.push(new nm(r))}),this.Eo.forEach(r=>{e.has(r)||n.push(new tm(r))}),n}No(e){this.po=e.Gn,this.Eo=ve();const n=this.bo(e.documents);return this.applyChanges(n,!0)}xo(){return Fr.fromInitialDocuments(this.query,this.Ao,this.mutatedKeys,this.To===0)}}class TS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class bS{constructor(e){this.key=e,this.ko=!1}}class SS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.$o={},this.Oo=new Xs(a=>cg(a),No),this.Fo=new Map,this.Mo=new Set,this.Lo=new ze(j.comparator),this.Bo=new Map,this.Uo=new ql,this.qo={},this.Ko=new Map,this.jo=Mr.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return this.Qo===!0}}async function AS(t,e){const n=xS(t);let r,s;const i=n.Oo.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.xo();else{const o=await Bb(n.localStore,Vn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await CS(n,e,r,a==="current"),n.isPrimaryClient&&Wg(n.remoteStore,o)}return s}async function CS(t,e,n,r){t.Wo=(u,h,f)=>async function(g,y,C,v){let b=y.view.bo(C);b.Ln&&(b=await jg(g.localStore,y.query,!1).then(({documents:z})=>y.view.bo(z,b)));const L=v&&v.targetChanges.get(y.targetId),q=y.view.applyChanges(b,g.isPrimaryClient,L);return cm(g,y.targetId,q.Do),q.snapshot}(t,u,h,f);const s=await jg(t.localStore,e,!0),i=new IS(e,s.Gn),o=i.bo(s.documents),a=Qs.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);cm(t,n,c.Do);const l=new TS(e,n,i);return t.Oo.set(e,l),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),c.snapshot}async function RS(t,e){const n=Q(t),r=n.Oo.get(e),s=n.Fo.get(r.targetId);if(s.length>1)return n.Fo.set(r.targetId,s.filter(i=>!No(i,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await jl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Gg(n.remoteStore,r.targetId),Xl(n,r.targetId)}).catch(Js)):(Xl(n,r.targetId),await jl(n.localStore,r.targetId,!0))}async function NS(t,e,n){const r=US(t);try{const s=await function(i,o){const a=Q(i),c=ht.now(),l=o.reduce((h,f)=>h.add(f.key),ve());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Qn.Pn(h,l).next(f=>{u=f;const g=[];for(const y of o){const C=X0(y,u.get(y.key));C!=null&&g.push(new $n(y.key,C,tg(C.value.mapValue),Ht.exists(!0)))}return a.In.addMutationBatch(h,c,g,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.qo[i.currentUser.toKey()];c||(c=new ze(oe)),c=c.insert(o,a),i.qo[i.currentUser.toKey()]=c}(r,s.batchId,n),await ei(r,s.changes),await Ho(r.remoteStore)}catch(s){const i=Yl(s,"Failed to persist write");n.reject(i)}}async function rm(t,e){const n=Q(t);try{const r=await Fb(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Bo.get(i);o&&(me(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ko=!0:s.modifiedDocuments.size>0?me(o.ko):s.removedDocuments.size>0&&(me(o.ko),o.ko=!1))}),await ei(n,r,e)}catch(r){await Js(r)}}function sm(t,e,n){const r=Q(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Oo.forEach((i,o)=>{const a=o.view.io(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=Q(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.io(o)&&(c=!0)}),c&&Jl(a)}(r.eventManager,e),s.length&&r.$o.Rr(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function kS(t,e,n){const r=Q(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Bo.get(e),i=s&&s.key;if(i){let o=new ze(j.comparator);o=o.insert(i,Ke.newNoDocument(i,ie.min()));const a=ve().add(i),c=new Fo(ie.min(),new Map,new Fe(oe),o,a);await rm(r,c),r.Lo=r.Lo.remove(i),r.Bo.delete(e),Zl(r)}else await jl(r.localStore,e,!1).then(()=>Xl(r,e,n)).catch(Js)}async function OS(t,e){const n=Q(t),r=e.batch.batchId;try{const s=await Ub(n.localStore,e);om(n,r,null),im(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ei(n,s)}catch(s){await Js(s)}}async function DS(t,e,n){const r=Q(t);try{const s=await function(i,o){const a=Q(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.In.lookupMutationBatch(c,o).next(u=>(me(u!==null),l=u.keys(),a.In.removeMutationBatch(c,u))).next(()=>a.In.performConsistencyCheck(c)).next(()=>a.Qn.Pn(c,l))})}(r.localStore,e);om(r,e,n),im(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ei(r,s)}catch(s){await Js(s)}}function im(t,e){(t.Ko.get(e)||[]).forEach(n=>{n.resolve()}),t.Ko.delete(e)}function om(t,e,n){const r=Q(t);let s=r.qo[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qo[r.currentUser.toKey()]=s}}function Xl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fo.get(e))t.Oo.delete(r),n&&t.$o.Go(r,n);t.Fo.delete(e),t.isPrimaryClient&&t.Uo.cs(e).forEach(r=>{t.Uo.containsKey(r)||am(t,r)})}function am(t,e){t.Mo.delete(e.path.canonicalString());const n=t.Lo.get(e);n!==null&&(Gg(t.remoteStore,n),t.Lo=t.Lo.remove(e),t.Bo.delete(n),Zl(t))}function cm(t,e,n){for(const r of n)r instanceof tm?(t.Uo.addReference(r.key,e),PS(t,r)):r instanceof nm?($("SyncEngine","Document no longer in limbo: "+r.key),t.Uo.removeReference(r.key,e),t.Uo.containsKey(r.key)||am(t,r.key)):G()}function PS(t,e){const n=e.key,r=n.path.canonicalString();t.Lo.get(n)||t.Mo.has(r)||($("SyncEngine","New document in limbo: "+n),t.Mo.add(r),Zl(t))}function Zl(t){for(;t.Mo.size>0&&t.Lo.size<t.maxConcurrentLimboResolutions;){const e=t.Mo.values().next().value;t.Mo.delete(e);const n=new j(Ie.fromString(e)),r=t.jo.next();t.Bo.set(r,new bS(n)),t.Lo=t.Lo.insert(n,r),Wg(t.remoteStore,new jn(Vn(og(n.path)),r,2,_l.T))}}async function ei(t,e,n){const r=Q(t),s=[],i=[],o=[];r.Oo.isEmpty()||(r.Oo.forEach((a,c)=>{o.push(r.Wo(c,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),s.push(l);const u=Bl.kn(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.$o.Rr(s),await async function(a,c){const l=Q(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>O.forEach(c,h=>O.forEach(h.Nn,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>O.forEach(h.xn,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Ys(u))throw u;$("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Un.get(h),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);l.Un=l.Un.insert(h,y)}}}(r.localStore,i))}async function LS(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await $g(n.localStore,e);n.currentUser=e,function(s,i){s.Ko.forEach(o=>{o.forEach(a=>{a.reject(new P(w.CANCELLED,i))})}),s.Ko.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ei(n,r.Wn)}}function MS(t,e){const n=Q(t),r=n.Bo.get(e);if(r&&r.ko)return ve().add(r.key);{let s=ve();const i=n.Fo.get(e);if(!i)return s;for(const o of i){const a=n.Oo.get(o);s=s.unionWith(a.view.Ro)}return s}}function xS(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=rm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=MS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kS.bind(null,e),e.$o.Rr=wS.bind(null,e.eventManager),e.$o.Go=ES.bind(null,e.eventManager),e}function US(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=OS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=DS.bind(null,e),e}class FS{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=Bo(e.databaseInfo.databaseId),this.sharedClientState=this.Ho(e),this.persistence=this.Jo(e),await this.persistence.start(),this.gcScheduler=this.Yo(e),this.localStore=this.Xo(e)}Yo(e){return null}Xo(e){return xb(this.persistence,new Lb,e.initialUser,this.N)}Jo(e){return new Wb(Hl.Ns,this.N)}Ho(e){return new Qb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class VS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>sm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=LS.bind(null,this.syncEngine),await pS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new mS}createDatastore(e){const n=Bo(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new Zb(s));var s;return function(i,o,a){return new nS(i,o,a)}(e.credentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>sm(this.syncEngine,a,0),o=Hg.bt()?new Hg:new Yb,new sS(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,l){const u=new SS(r,s,i,o,a,c);return l&&(u.Qo=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Q(e);$("RemoteStore","RemoteStore shutting down."),n.Wr.add(5),await Zs(n),n.zr.shutdown(),n.Hr.set("Unknown")}(this.remoteStore)}}/**
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
 */class $S{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.tc(this.observer.next,e)}error(e){this.observer.error?this.tc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}ec(){this.muted=!0}tc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class BS{constructor(e,n,r){this.credentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=rt.UNAUTHENTICATED,this.clientId=zp.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(n,async s=>{$("FirestoreClient","Received user=",s.uid),await this.credentialListener(s),this.user=s})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(n){const r=Yl(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function jS(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await $g(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function qS(t,e){t.asyncQueue.verifyOperationInProgress();const n=await HS(t);$("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>async function(i,o){const a=Q(i);a.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const c=qn(a);a.Wr.add(3),await Zs(a),c&&a.Hr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Wr.delete(3),await jo(a)}(e.remoteStore,s)),t.onlineComponents=e}async function HS(t){return t.offlineComponents||($("FirestoreClient","Using default OfflineComponentProvider"),await jS(t,new FS)),t.offlineComponents}async function lm(t){return t.onlineComponents||($("FirestoreClient","Using default OnlineComponentProvider"),await qS(t,new VS)),t.onlineComponents}function KS(t){return lm(t).then(e=>e.syncEngine)}async function zS(t){const e=await lm(t),n=e.eventManager;return n.onListen=AS.bind(null,e.syncEngine),n.onUnlisten=RS.bind(null,e.syncEngine),n}function WS(t,e,n={}){const r=new hn;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const l=new $S({next:h=>{i.enqueueAndForget(()=>vS(s,u)),h.fromCache&&a.source==="server"?c.reject(new P(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new _S(o,l,{includeMetadataChanges:!0,fo:!0});return yS(s,u)}(await zS(t),t.asyncQueue,e,n,r)),r.promise}class GS{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ti{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ti&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const um=new Map;/**
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
 */function hm(t,e,n){if(!n)throw new P(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function QS(t,e,n,r){if(e===!0&&r===!0)throw new P(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fm(t){if(!j.isDocumentKey(t))throw new P(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function dm(t){if(j.isDocumentKey(t))throw new P(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ko(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function pn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ko(t);throw new P(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class pm{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new P(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new P(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,QS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class eu{constructor(e,n){this._credentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pm({}),this._settingsFrozen=!1,e instanceof ti?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new P(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ti(r.options.projectId)}(e))}get app(){if(!this._app)throw new P(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new P(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pm(e),e.credentials!==void 0&&(this._credentials=function(n){if(!n)return new b0;switch(n.type){case"gapi":const r=n.client;return me(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new C0(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new P(w.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=um.get(e);n&&($("ComponentProvider","Removing Datastore"),um.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class it{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new it(this.firestore,e,this._key)}}class Vr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Vr(this.firestore,e,this._query)}}class gn extends Vr{constructor(e,n,r){super(e,n,og(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new it(this.firestore,null,new j(e))}withConverter(e){return new gn(this.firestore,e,this._path)}}function zC(t,e,...n){if(t=Ye(t),hm("collection","path",e),t instanceof eu){const r=Ie.fromString(e,...n);return dm(r),new gn(t,null,r)}{if(!(t instanceof it||t instanceof gn))throw new P(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return dm(r),new gn(t.firestore,null,r)}}function YS(t,e,...n){if(t=Ye(t),arguments.length===1&&(e=zp.I()),hm("doc","path",e),t instanceof eu){const r=Ie.fromString(e,...n);return fm(r),new it(t,null,new j(r))}{if(!(t instanceof it||t instanceof gn))throw new P(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return fm(r),new it(t.firestore,t instanceof gn?t.converter:null,new j(r))}}/**
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
 */class JS{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new Kg(this,"async_queue_retry"),this.Rc=()=>{const n=Kl();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ar.tr()};const e=Kl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.bc(),this.Pc(e)}enterRestrictedMode(e){if(!this.gc){this.gc=!0,this.Ic=e||!1;const n=Kl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Rc)}}enqueue(e){if(this.bc(),this.gc)return new Promise(()=>{});const n=new hn;return this.Pc(()=>this.gc&&this.Ic?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.mc.push(e),this.vc()))}async vc(){if(this.mc.length!==0){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(e){if(!Ys(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.mc.length>0&&this.ar.Xi(()=>this.vc())}}Pc(e){const n=this._c.then(()=>(this.Ec=!0,e().catch(r=>{this.Tc=r,this.Ec=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw un("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ec=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.bc(),this.Ac.indexOf(e)>-1&&(n=0);const s=Ql.createAndSchedule(this,e,n,r,i=>this.Vc(i));return this.yc.push(s),s}bc(){this.Tc&&G()}verifyOperationInProgress(){}async Sc(){let e;do e=this._c,await e;while(e!==this._c)}Dc(e){for(const n of this.yc)if(n.timerId===e)return!0;return!1}Cc(e){return this.Sc().then(()=>{this.yc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.yc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Sc()})}Nc(e){this.Ac.push(e)}Vc(e){const n=this.yc.indexOf(e);this.yc.splice(n,1)}}class $r extends eu{constructor(e,n){super(e,n),this.type="firestore",this._queue=new JS,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||mm(this),this._firestoreClient.terminate()}}function WC(t=Vf()){return fc(t,"firestore").getImmediate()}function gm(t){return t._firestoreClient||mm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function mm(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new GS(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new BS(t._credentials,t._queue,r)}/**
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
 */class zo{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new P(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Br{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Br(He.fromBase64String(e))}catch(n){throw new P(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Br(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class tu{constructor(e){this._methodName=e}}/**
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
 */class nu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new P(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new P(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
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
 */const XS=/^__.*__$/;class ZS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new $n(e,this.data,this.fieldMask,n,this.fieldTransforms):new xo(e,this.data,n,this.fieldTransforms)}}class ym{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new $n(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function vm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class ru{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.N=r,this.ignoreUndefinedProperties=s,i===void 0&&this.xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get kc(){return this.settings.kc}$c(e){return new ru(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Oc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.$c({path:r,Fc:!1});return s.Mc(e),s}Lc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.$c({path:r,Fc:!1});return s.xc(),s}Bc(e){return this.$c({path:void 0,Fc:!0})}Uc(e){return Qo(e,this.settings.methodName,this.settings.qc||!1,this.path,this.settings.Kc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Mc(this.path.get(e))}Mc(e){if(e.length===0)throw this.Uc("Document fields must not be empty");if(vm(this.kc)&&XS.test(e))throw this.Uc('Document fields cannot begin and end with "__"')}}class eA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.N=r||Bo(e)}jc(e,n,r,s=!1){return new ru({kc:e,methodName:n,Kc:r,path:st.emptyPath(),Fc:!1,qc:s},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function Wo(t){const e=t._freezeSettings(),n=Bo(t._databaseId);return new eA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wm(t,e,n,r,s,i={}){const o=t.jc(i.merge||i.mergeFields?2:0,e,n,s);su("Data must be an object, but it was:",o,r);const a=Em(r,o);let c,l;if(i.merge)c=new js(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=iu(e,h,n);if(!o.contains(f))throw new P(w.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Im(u,f)||u.push(f)}c=new js(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new ZS(new ft(a),c,l)}class Go extends tu{_toFieldTransform(e){if(e.kc!==2)throw e.kc===1?e.Uc(`${this._methodName}() can only appear at the top level of your update data`):e.Uc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Go}}function tA(t,e,n,r){const s=t.jc(1,e,n);su("Data must be an object, but it was:",s,r);const i=[],o=ft.empty();Un(r,(c,l)=>{const u=ou(e,c,n);l=Ye(l);const h=s.Lc(u);if(l instanceof Go)i.push(u);else{const f=ni(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new js(i);return new ym(o,a,s.fieldTransforms)}function nA(t,e,n,r,s,i){const o=t.jc(1,e,n),a=[iu(e,r,n)],c=[s];if(i.length%2!=0)throw new P(w.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(iu(e,i[f])),c.push(i[f+1]);const l=[],u=ft.empty();for(let f=a.length-1;f>=0;--f)if(!Im(l,a[f])){const g=a[f];let y=c[f];y=Ye(y);const C=o.Lc(g);if(y instanceof Go)l.push(g);else{const v=ni(y,C);v!=null&&(l.push(g),u.set(g,v))}}const h=new js(l);return new ym(u,h,o.fieldTransforms)}function rA(t,e,n,r=!1){return ni(n,t.jc(r?4:3,e))}function ni(t,e){if(_m(t=Ye(t)))return su("Unsupported field value:",e,t),Em(t,e);if(t instanceof tu)return function(n,r){if(!vm(r.kc))throw r.Uc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Uc(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&e.kc!==4)throw e.Uc("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=ni(o,r.Bc(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=Ye(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return z0(r.N,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=ht.fromDate(n);return{timestampValue:$o(r.N,s)}}if(n instanceof ht){const s=new ht(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:$o(r.N,s)}}if(n instanceof nu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Br)return{bytesValue:Og(r.N,n._byteString)};if(n instanceof it){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.Uc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ml(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.Uc(`Unsupported field value: ${Ko(n)}`)}(t,e)}function Em(t,e){const n={};return Gp(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Un(t,(r,s)=>{const i=ni(s,e.Oc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function _m(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ht||t instanceof nu||t instanceof Br||t instanceof it||t instanceof tu)}function su(t,e,n){if(!_m(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Ko(n);throw r==="an object"?e.Uc(t+" a custom object"):e.Uc(t+" "+r)}}function iu(t,e,n){if((e=Ye(e))instanceof zo)return e._internalPath;if(typeof e=="string")return ou(t,e);throw Qo("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const sA=new RegExp("[~\\*/\\[\\]]");function ou(t,e,n){if(e.search(sA)>=0)throw Qo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zo(...e.split("."))._internalPath}catch{throw Qo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Qo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new P(w.INVALID_ARGUMENT,a+t+c)}function Im(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Tm{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new iA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Yo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class iA extends Tm{data(){return super.data()}}function Yo(t,e){return typeof e=="string"?ou(t,e):e instanceof zo?e._internalPath:e._delegate._internalPath}/**
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
 */class Jo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class oA extends Tm{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Xo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Yo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Xo extends oA{data(e={}){return super.data(e)}}class aA{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Jo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Xo(this._firestore,this._userDataWriter,r.key,r,new Jo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new P(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Xo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Jo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Xo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Jo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:cA(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function cA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
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
 */function lA(t){if(Ro(t)&&t.explicitOrderBy.length===0)throw new P(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bm{}function GC(t,...e){for(const n of e)t=n._apply(t);return t}class uA extends bm{constructor(e,n,r){super(),this.Gc=e,this.zc=n,this.Hc=r,this.type="where"}_apply(e){const n=Wo(e.firestore),r=function(s,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new P(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on FieldPath.documentId().`);if(l==="in"||l==="not-in"){Am(u,l);const g=[];for(const y of u)g.push(Sm(a,s,y));h={arrayValue:{values:g}}}else h=Sm(a,s,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Am(u,l),h=rA(o,i,u,l==="in"||l==="not-in");const f=et.create(c,l,h);return function(g,y){if(y.v()){const v=Ol(g);if(v!==null&&!v.isEqual(y.field))throw new P(w.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${v.toString()}' and '${y.field.toString()}'`);const b=kl(g);b!==null&&Cm(g,y.field,b)}const C=function(v,b){for(const L of v.filters)if(b.indexOf(L.op)>=0)return L.op;return null}(g,function(v){switch(v){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(y.op));if(C!==null)throw C===y.op?new P(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${y.op.toString()}' filter.`):new P(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${y.op.toString()}' filters with '${C.toString()}' filters.`)}(s,f),f}(e._query,"where",n,e.firestore._databaseId,this.Gc,this.zc,this.Hc);return new Vr(e.firestore,e.converter,function(s,i){const o=s.filters.concat([i]);return new Dr(s.path,s.collectionGroup,s.explicitOrderBy.slice(),o,s.limit,s.limitType,s.startAt,s.endAt)}(e._query,r))}}function QC(t,e,n){const r=e,s=Yo("where",t);return new uA(s,r,n)}class hA extends bm{constructor(e,n){super(),this.Gc=e,this.Jc=n,this.type="orderBy"}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new P(w.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new P(w.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Or(s,i);return function(a,c){if(kl(a)===null){const l=Ol(a);l!==null&&Cm(a,l,c.field)}}(r,o),o}(e._query,this.Gc,this.Jc);return new Vr(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new Dr(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function YC(t,e="asc"){const n=e,r=Yo("orderBy",t);return new hA(r,n)}function Sm(t,e,n){if(typeof(n=Ye(n))=="string"){if(n==="")throw new P(w.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!ag(e)&&n.indexOf("/")!==-1)throw new P(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ie.fromString(n));if(!j.isDocumentKey(r))throw new P(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Xp(t,new j(r))}if(n instanceof it)return Xp(t,n._key);throw new P(w.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ko(n)}.`)}function Am(t,e){if(!Array.isArray(t)||t.length===0)throw new P(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new P(w.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Cm(t,e,n){if(!n.isEqual(e))throw new P(w.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class fA{convertValue(e,n="none"){switch(Fn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Rr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){const r={};return Un(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new nu(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Yp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(qs(e));default:return null}}convertTimestamp(e){const n=fn(e);return new ht(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);me(Fg(r));const s=new ti(r.get(1),r.get(3)),i=new j(r.popFirst(5));return s.isEqual(n)||un(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Rm(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class dA extends fA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Br(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new it(this.firestore,null,n)}}function JC(t){t=pn(t,Vr);const e=pn(t.firestore,$r),n=gm(e),r=new dA(e);return lA(t._query),WS(n,t._query).then(s=>new aA(e,r,t,s))}function XC(t,e,n){t=pn(t,it);const r=pn(t.firestore,$r),s=Rm(t.converter,e,n);return Zo(r,[wm(Wo(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Ht.none())])}function ZC(t,e,n,...r){t=pn(t,it);const s=pn(t.firestore,$r),i=Wo(s);let o;return o=typeof(e=Ye(e))=="string"||e instanceof zo?nA(i,"updateDoc",t._key,e,n,r):tA(i,"updateDoc",t._key,e),Zo(s,[o.toMutation(t._key,Ht.exists(!0))])}function eR(t){return Zo(pn(t.firestore,$r),[new Ig(t._key,Ht.none())])}function tR(t,e){const n=pn(t.firestore,$r),r=YS(t),s=Rm(t.converter,e);return Zo(n,[wm(Wo(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Ht.exists(!1))]).then(()=>r)}function Zo(t,e){return function(n,r){const s=new hn;return n.asyncQueue.enqueueAndForget(async()=>NS(await KS(n),r,s)),s.promise}(gm(t),e)}(function(t,e=!0){(function(n){Ar=n})(ps),ds(new pr("firestore",(n,{options:r})=>{const s=n.getProvider("app").getImmediate(),i=new $r(s,new S0(n.getProvider("auth-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),tn(qp,"3.3.1",t),tn(qp,"3.3.1","esm2017")})();var au={exports:{}},Nm=function(e,n){return function(){for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];return e.apply(n,s)}},pA=Nm,Hn=Object.prototype.toString;function cu(t){return Hn.call(t)==="[object Array]"}function lu(t){return typeof t=="undefined"}function gA(t){return t!==null&&!lu(t)&&t.constructor!==null&&!lu(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function mA(t){return Hn.call(t)==="[object ArrayBuffer]"}function yA(t){return typeof FormData!="undefined"&&t instanceof FormData}function vA(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function wA(t){return typeof t=="string"}function EA(t){return typeof t=="number"}function km(t){return t!==null&&typeof t=="object"}function ea(t){if(Hn.call(t)!=="[object Object]")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function _A(t){return Hn.call(t)==="[object Date]"}function IA(t){return Hn.call(t)==="[object File]"}function TA(t){return Hn.call(t)==="[object Blob]"}function Om(t){return Hn.call(t)==="[object Function]"}function bA(t){return km(t)&&Om(t.pipe)}function SA(t){return typeof URLSearchParams!="undefined"&&t instanceof URLSearchParams}function AA(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function CA(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function uu(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),cu(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.call(null,t[s],s,t)}function hu(){var t={};function e(s,i){ea(t[i])&&ea(s)?t[i]=hu(t[i],s):ea(s)?t[i]=hu({},s):cu(s)?t[i]=s.slice():t[i]=s}for(var n=0,r=arguments.length;n<r;n++)uu(arguments[n],e);return t}function RA(t,e,n){return uu(e,function(s,i){n&&typeof s=="function"?t[i]=pA(s,n):t[i]=s}),t}function NA(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}var dt={isArray:cu,isArrayBuffer:mA,isBuffer:gA,isFormData:yA,isArrayBufferView:vA,isString:wA,isNumber:EA,isObject:km,isPlainObject:ea,isUndefined:lu,isDate:_A,isFile:IA,isBlob:TA,isFunction:Om,isStream:bA,isURLSearchParams:SA,isStandardBrowserEnv:CA,forEach:uu,merge:hu,extend:RA,trim:AA,stripBOM:NA},jr=dt;function Dm(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Pm=function(e,n,r){if(!n)return e;var s;if(r)s=r(n);else if(jr.isURLSearchParams(n))s=n.toString();else{var i=[];jr.forEach(n,function(c,l){c===null||typeof c=="undefined"||(jr.isArray(c)?l=l+"[]":c=[c],jr.forEach(c,function(h){jr.isDate(h)?h=h.toISOString():jr.isObject(h)&&(h=JSON.stringify(h)),i.push(Dm(l)+"="+Dm(h))}))}),s=i.join("&")}if(s){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e},kA=dt;function ta(){this.handlers=[]}ta.prototype.use=function(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1};ta.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};ta.prototype.forEach=function(e){kA.forEach(this.handlers,function(r){r!==null&&e(r)})};var OA=ta,DA=dt,PA=function(e,n){DA.forEach(e,function(s,i){i!==n&&i.toUpperCase()===n.toUpperCase()&&(e[n]=s,delete e[i])})},Lm=function(e,n,r,s,i){return e.config=n,r&&(e.code=r),e.request=s,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},LA=Lm,Mm=function(e,n,r,s,i){var o=new Error(e);return LA(o,n,r,s,i)},MA=Mm,xA=function(e,n,r){var s=r.config.validateStatus;!r.status||!s||s(r.status)?e(r):n(MA("Request failed with status code "+r.status,r.config,null,r.request,r))},na=dt,UA=na.isStandardBrowserEnv()?function(){return{write:function(n,r,s,i,o,a){var c=[];c.push(n+"="+encodeURIComponent(r)),na.isNumber(s)&&c.push("expires="+new Date(s).toGMTString()),na.isString(i)&&c.push("path="+i),na.isString(o)&&c.push("domain="+o),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){var r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),FA=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},VA=function(e,n){return n?e.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):e},$A=FA,BA=VA,jA=function(e,n){return e&&!$A(n)?BA(e,n):n},fu=dt,qA=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],HA=function(e){var n={},r,s,i;return e&&fu.forEach(e.split(`
`),function(a){if(i=a.indexOf(":"),r=fu.trim(a.substr(0,i)).toLowerCase(),s=fu.trim(a.substr(i+1)),r){if(n[r]&&qA.indexOf(r)>=0)return;r==="set-cookie"?n[r]=(n[r]?n[r]:[]).concat([s]):n[r]=n[r]?n[r]+", "+s:s}}),n},xm=dt,KA=xm.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a"),r;function s(i){var o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){var a=xm.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function du(t){this.message=t}du.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};du.prototype.__CANCEL__=!0;var ra=du,sa=dt,zA=xA,WA=UA,GA=Pm,QA=jA,YA=HA,JA=KA,pu=Mm,XA=oa,ZA=ra,Um=function(e){return new Promise(function(r,s){var i=e.data,o=e.headers,a=e.responseType,c;function l(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}sa.isFormData(i)&&delete o["Content-Type"];var u=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(h+":"+f)}var g=QA(e.baseURL,e.url);u.open(e.method.toUpperCase(),GA(g,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function y(){if(!!u){var v="getAllResponseHeaders"in u?YA(u.getAllResponseHeaders()):null,b=!a||a==="text"||a==="json"?u.responseText:u.response,L={data:b,status:u.status,statusText:u.statusText,headers:v,config:e,request:u};zA(function(z){r(z),l()},function(z){s(z),l()},L),u=null}}if("onloadend"in u?u.onloadend=y:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(y)},u.onabort=function(){!u||(s(pu("Request aborted",e,"ECONNABORTED",u)),u=null)},u.onerror=function(){s(pu("Network Error",e,null,u)),u=null},u.ontimeout=function(){var b=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",L=e.transitional||XA.transitional;e.timeoutErrorMessage&&(b=e.timeoutErrorMessage),s(pu(b,e,L.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",u)),u=null},sa.isStandardBrowserEnv()){var C=(e.withCredentials||JA(g))&&e.xsrfCookieName?WA.read(e.xsrfCookieName):void 0;C&&(o[e.xsrfHeaderName]=C)}"setRequestHeader"in u&&sa.forEach(o,function(b,L){typeof i=="undefined"&&L.toLowerCase()==="content-type"?delete o[L]:u.setRequestHeader(L,b)}),sa.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&a!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(c=function(v){!u||(s(!v||v&&v.type?new ZA("canceled"):v),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c))),i||(i=null),u.send(i)})},Ve=dt,Fm=PA,eC=Lm,tC={"Content-Type":"application/x-www-form-urlencoded"};function Vm(t,e){!Ve.isUndefined(t)&&Ve.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function nC(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=Um),t}function rC(t,e,n){if(Ve.isString(t))try{return(e||JSON.parse)(t),Ve.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}var ia={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:nC(),transformRequest:[function(e,n){return Fm(n,"Accept"),Fm(n,"Content-Type"),Ve.isFormData(e)||Ve.isArrayBuffer(e)||Ve.isBuffer(e)||Ve.isStream(e)||Ve.isFile(e)||Ve.isBlob(e)?e:Ve.isArrayBufferView(e)?e.buffer:Ve.isURLSearchParams(e)?(Vm(n,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):Ve.isObject(e)||n&&n["Content-Type"]==="application/json"?(Vm(n,"application/json"),rC(e)):e}],transformResponse:[function(e){var n=this.transitional||ia.transitional,r=n&&n.silentJSONParsing,s=n&&n.forcedJSONParsing,i=!r&&this.responseType==="json";if(i||s&&Ve.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(i)throw o.name==="SyntaxError"?eC(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};Ve.forEach(["delete","get","head"],function(e){ia.headers[e]={}});Ve.forEach(["post","put","patch"],function(e){ia.headers[e]=Ve.merge(tC)});var oa=ia,sC=dt,iC=oa,oC=function(e,n,r){var s=this||iC;return sC.forEach(r,function(o){e=o.call(s,e,n)}),e},$m=function(e){return!!(e&&e.__CANCEL__)},Bm=dt,gu=oC,aC=$m,cC=oa,lC=ra;function mu(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new lC("canceled")}var uC=function(e){mu(e),e.headers=e.headers||{},e.data=gu.call(e,e.data,e.headers,e.transformRequest),e.headers=Bm.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Bm.forEach(["delete","get","head","post","put","patch","common"],function(s){delete e.headers[s]});var n=e.adapter||cC.adapter;return n(e).then(function(s){return mu(e),s.data=gu.call(e,s.data,s.headers,e.transformResponse),s},function(s){return aC(s)||(mu(e),s&&s.response&&(s.response.data=gu.call(e,s.response.data,s.response.headers,e.transformResponse))),Promise.reject(s)})},pt=dt,jm=function(e,n){n=n||{};var r={};function s(u,h){return pt.isPlainObject(u)&&pt.isPlainObject(h)?pt.merge(u,h):pt.isPlainObject(h)?pt.merge({},h):pt.isArray(h)?h.slice():h}function i(u){if(pt.isUndefined(n[u])){if(!pt.isUndefined(e[u]))return s(void 0,e[u])}else return s(e[u],n[u])}function o(u){if(!pt.isUndefined(n[u]))return s(void 0,n[u])}function a(u){if(pt.isUndefined(n[u])){if(!pt.isUndefined(e[u]))return s(void 0,e[u])}else return s(void 0,n[u])}function c(u){if(u in n)return s(e[u],n[u]);if(u in e)return s(void 0,e[u])}var l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return pt.forEach(Object.keys(e).concat(Object.keys(n)),function(h){var f=l[h]||i,g=f(h);pt.isUndefined(g)&&f!==c||(r[h]=g)}),r},qm={version:"0.24.0"},hC=qm.version,yu={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){yu[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});var Hm={};yu.transitional=function(e,n,r){function s(i,o){return"[Axios v"+hC+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return function(i,o,a){if(e===!1)throw new Error(s(o," has been removed"+(n?" in "+n:"")));return n&&!Hm[o]&&(Hm[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function fC(t,e,n){if(typeof t!="object")throw new TypeError("options must be an object");for(var r=Object.keys(t),s=r.length;s-- >0;){var i=r[s],o=e[i];if(o){var a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new TypeError("option "+i+" must be "+c);continue}if(n!==!0)throw Error("Unknown option "+i)}}var dC={assertOptions:fC,validators:yu},Km=dt,pC=Pm,zm=OA,Wm=uC,aa=jm,Gm=dC,qr=Gm.validators;function ri(t){this.defaults=t,this.interceptors={request:new zm,response:new zm}}ri.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=aa(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var n=e.transitional;n!==void 0&&Gm.assertOptions(n,{silentJSONParsing:qr.transitional(qr.boolean),forcedJSONParsing:qr.transitional(qr.boolean),clarifyTimeoutError:qr.transitional(qr.boolean)},!1);var r=[],s=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(e)===!1||(s=s&&f.synchronous,r.unshift(f.fulfilled,f.rejected))});var i=[];this.interceptors.response.forEach(function(f){i.push(f.fulfilled,f.rejected)});var o;if(!s){var a=[Wm,void 0];for(Array.prototype.unshift.apply(a,r),a=a.concat(i),o=Promise.resolve(e);a.length;)o=o.then(a.shift(),a.shift());return o}for(var c=e;r.length;){var l=r.shift(),u=r.shift();try{c=l(c)}catch(h){u(h);break}}try{o=Wm(c)}catch(h){return Promise.reject(h)}for(;i.length;)o=o.then(i.shift(),i.shift());return o};ri.prototype.getUri=function(e){return e=aa(this.defaults,e),pC(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};Km.forEach(["delete","get","head","options"],function(e){ri.prototype[e]=function(n,r){return this.request(aa(r||{},{method:e,url:n,data:(r||{}).data}))}});Km.forEach(["post","put","patch"],function(e){ri.prototype[e]=function(n,r,s){return this.request(aa(s||{},{method:e,url:n,data:r}))}});var gC=ri,mC=ra;function Hr(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(s){e=s});var n=this;this.promise.then(function(r){if(!!n._listeners){var s,i=n._listeners.length;for(s=0;s<i;s++)n._listeners[s](r);n._listeners=null}}),this.promise.then=function(r){var s,i=new Promise(function(o){n.subscribe(o),s=o}).then(r);return i.cancel=function(){n.unsubscribe(s)},i},t(function(s){n.reason||(n.reason=new mC(s),e(n.reason))})}Hr.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};Hr.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};Hr.prototype.unsubscribe=function(e){if(!!this._listeners){var n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}};Hr.source=function(){var e,n=new Hr(function(s){e=s});return{token:n,cancel:e}};var yC=Hr,vC=function(e){return function(r){return e.apply(null,r)}},wC=function(e){return typeof e=="object"&&e.isAxiosError===!0},Qm=dt,EC=Nm,ca=gC,_C=jm,IC=oa;function Ym(t){var e=new ca(t),n=EC(ca.prototype.request,e);return Qm.extend(n,ca.prototype,e),Qm.extend(n,e),n.create=function(s){return Ym(_C(t,s))},n}var Lt=Ym(IC);Lt.Axios=ca;Lt.Cancel=ra;Lt.CancelToken=yC;Lt.isCancel=$m;Lt.VERSION=qm.version;Lt.all=function(e){return Promise.all(e)};Lt.spread=vC;Lt.isAxiosError=wC;au.exports=Lt;au.exports.default=Lt;var nR=au.exports,TC="firebase",bC="9.5.0";/**
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
 */tn(TC,bC,"app");export{DC as A,QC as B,qC as C,jC as D,HC as E,vt as F,XC as G,YS as H,$C as I,eR as J,FC as K,UC as L,GC as M,BC as N,WC as O,xC as P,ZC as _,Dh as a,CC as b,RC as c,nt as d,kh as e,NC as f,KC as g,Dv as h,zC as i,kC as j,OC as k,JC as l,ah as m,fa as n,Ch as o,nR as p,MC as q,Vy as r,AC as s,SC as t,VC as u,LC as v,Ky as w,PC as x,tR as y,YC as z};
