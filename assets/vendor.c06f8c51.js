function aa(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const zm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wm=aa(zm);function _u(t){return!!t||t===""}function ca(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Pe(r)?Ym(r):ca(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Pe(t))return t;if(be(t))return t}}const Gm=/;(?![^(]*\))/g,Qm=/:(.+)/;function Ym(t){const e={};return t.split(Gm).forEach(n=>{if(n){const r=n.split(Qm);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function la(t){let e="";if(Pe(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const r=la(t[n]);r&&(e+=r+" ")}else if(be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Jm(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Kr(t[r],e[r]);return n}function Kr(t,e){if(t===e)return!0;let n=bu(t),r=bu(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=B(t),r=B(e),n||r)return n&&r?Jm(t,e):!1;if(n=be(t),r=be(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Kr(t[o],e[o]))return!1}}return String(t)===String(e)}function ua(t,e){return t.findIndex(n=>Kr(n,e))}const bC=t=>t==null?"":B(t)||be(t)&&(t.toString===Au||!J(t.toString))?JSON.stringify(t,Iu,2):String(t),Iu=(t,e)=>e&&e.__v_isRef?Iu(t,e.value):Qn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Yn(e)?{[`Set(${e.size})`]:[...e.values()]}:be(e)&&!B(e)&&!Cu(e)?String(e):e,ue={},Gn=[],Et=()=>{},Xm=()=>!1,Zm=/^on[^a-z]/,si=t=>Zm.test(t),ha=t=>t.startsWith("onUpdate:"),je=Object.assign,Tu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ey=Object.prototype.hasOwnProperty,ne=(t,e)=>ey.call(t,e),B=Array.isArray,Qn=t=>ii(t)==="[object Map]",Yn=t=>ii(t)==="[object Set]",bu=t=>t instanceof Date,J=t=>typeof t=="function",Pe=t=>typeof t=="string",fa=t=>typeof t=="symbol",be=t=>t!==null&&typeof t=="object",Su=t=>be(t)&&J(t.then)&&J(t.catch),Au=Object.prototype.toString,ii=t=>Au.call(t),ty=t=>ii(t).slice(8,-1),Cu=t=>ii(t)==="[object Object]",da=t=>Pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,oi=aa(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ai=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ny=/-(\w)/g,bt=ai(t=>t.replace(ny,(e,n)=>n?n.toUpperCase():"")),ry=/\B([A-Z])/g,Jn=ai(t=>t.replace(ry,"-$1").toLowerCase()),ci=ai(t=>t.charAt(0).toUpperCase()+t.slice(1)),pa=ai(t=>t?`on${ci(t)}`:""),zr=(t,e)=>!Object.is(t,e),li=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ui=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},hi=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ru;const sy=()=>Ru||(Ru=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let gn;const fi=[];class iy{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&gn&&(this.parent=gn,this.index=(gn.scopes||(gn.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(fi.push(this),gn=this)}off(){this.active&&(fi.pop(),gn=fi[fi.length-1])}stop(e){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function oy(t,e){e=e||gn,e&&e.active&&e.effects.push(t)}const ga=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Nu=t=>(t.w&zt)>0,ku=t=>(t.n&zt)>0,ay=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=zt},cy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Nu(s)&&!ku(s)?s.delete(t):e[n++]=s,s.w&=~zt,s.n&=~zt}e.length=n}},ma=new WeakMap;let Wr=0,zt=1;const ya=30,Gr=[];let mn;const yn=Symbol(""),va=Symbol("");class wa{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],oy(this,r)}run(){if(!this.active)return this.fn();if(!Gr.includes(this))try{return Gr.push(mn=this),ly(),zt=1<<++Wr,Wr<=ya?ay(this):Ou(this),this.fn()}finally{Wr<=ya&&cy(this),zt=1<<--Wr,vn(),Gr.pop();const e=Gr.length;mn=e>0?Gr[e-1]:void 0}}stop(){this.active&&(Ou(this),this.onStop&&this.onStop(),this.active=!1)}}function Ou(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Xn=!0;const Ea=[];function Zn(){Ea.push(Xn),Xn=!1}function ly(){Ea.push(Xn),Xn=!0}function vn(){const t=Ea.pop();Xn=t===void 0?!0:t}function it(t,e,n){if(!Du())return;let r=ma.get(t);r||ma.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=ga()),Pu(s)}function Du(){return Xn&&mn!==void 0}function Pu(t,e){let n=!1;Wr<=ya?ku(t)||(t.n|=zt,n=!Nu(t)):n=!t.has(mn),n&&(t.add(mn),mn.deps.push(t))}function Mt(t,e,n,r,s,i){const o=ma.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?da(n)&&a.push(o.get("length")):(a.push(o.get(yn)),Qn(t)&&a.push(o.get(va)));break;case"delete":B(t)||(a.push(o.get(yn)),Qn(t)&&a.push(o.get(va)));break;case"set":Qn(t)&&a.push(o.get(yn));break}if(a.length===1)a[0]&&_a(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);_a(ga(c))}}function _a(t,e){for(const n of B(t)?t:[...t])(n!==mn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const uy=aa("__proto__,__v_isRef,__isVue"),Lu=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(fa)),hy=Ia(),fy=Ia(!1,!0),dy=Ia(!0),xu=py();function py(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=re(this);for(let i=0,o=this.length;i<o;i++)it(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(re)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Zn();const r=re(this)[e].apply(this,n);return vn(),r}}),t}function Ia(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_raw"&&i===(t?e?ky:Hu:e?qu:ju).get(r))return r;const o=B(r);if(!t&&o&&ne(xu,s))return Reflect.get(xu,s,i);const a=Reflect.get(r,s,i);return(fa(s)?Lu.has(s):uy(s))||(t||it(r,"get",s),e)?a:tt(a)?!o||!da(s)?a.value:a:be(a)?t?Ku(a):Qr(a):a}}const gy=Mu(),my=Mu(!0);function Mu(t=!1){return function(n,r,s,i){let o=n[r];if(!t&&(s=re(s),o=re(o),!B(n)&&tt(o)&&!tt(s)))return o.value=s,!0;const a=B(n)&&da(r)?Number(r)<n.length:ne(n,r),c=Reflect.set(n,r,s,i);return n===re(i)&&(a?zr(s,o)&&Mt(n,"set",r,s):Mt(n,"add",r,s)),c}}function yy(t,e){const n=ne(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Mt(t,"delete",e,void 0),r}function vy(t,e){const n=Reflect.has(t,e);return(!fa(e)||!Lu.has(e))&&it(t,"has",e),n}function wy(t){return it(t,"iterate",B(t)?"length":yn),Reflect.ownKeys(t)}const Uu={get:hy,set:gy,deleteProperty:yy,has:vy,ownKeys:wy},Ey={get:dy,set(t,e){return!0},deleteProperty(t,e){return!0}},_y=je({},Uu,{get:fy,set:my}),Ta=t=>t,di=t=>Reflect.getPrototypeOf(t);function pi(t,e,n=!1,r=!1){t=t.__v_raw;const s=re(t),i=re(e);e!==i&&!n&&it(s,"get",e),!n&&it(s,"get",i);const{has:o}=di(s),a=r?Ta:n?Aa:Yr;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function gi(t,e=!1){const n=this.__v_raw,r=re(n),s=re(t);return t!==s&&!e&&it(r,"has",t),!e&&it(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function mi(t,e=!1){return t=t.__v_raw,!e&&it(re(t),"iterate",yn),Reflect.get(t,"size",t)}function Fu(t){t=re(t);const e=re(this);return di(e).has.call(e,t)||(e.add(t),Mt(e,"add",t,t)),this}function Vu(t,e){e=re(e);const n=re(this),{has:r,get:s}=di(n);let i=r.call(n,t);i||(t=re(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?zr(e,o)&&Mt(n,"set",t,e):Mt(n,"add",t,e),this}function $u(t){const e=re(this),{has:n,get:r}=di(e);let s=n.call(e,t);s||(t=re(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Mt(e,"delete",t,void 0),i}function Bu(){const t=re(this),e=t.size!==0,n=t.clear();return e&&Mt(t,"clear",void 0,void 0),n}function yi(t,e){return function(r,s){const i=this,o=i.__v_raw,a=re(o),c=e?Ta:t?Aa:Yr;return!t&&it(a,"iterate",yn),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function vi(t,e,n){return function(...r){const s=this.__v_raw,i=re(s),o=Qn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Ta:e?Aa:Yr;return!e&&it(i,"iterate",c?va:yn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Wt(t){return function(...e){return t==="delete"?!1:this}}function Iy(){const t={get(i){return pi(this,i)},get size(){return mi(this)},has:gi,add:Fu,set:Vu,delete:$u,clear:Bu,forEach:yi(!1,!1)},e={get(i){return pi(this,i,!1,!0)},get size(){return mi(this)},has:gi,add:Fu,set:Vu,delete:$u,clear:Bu,forEach:yi(!1,!0)},n={get(i){return pi(this,i,!0)},get size(){return mi(this,!0)},has(i){return gi.call(this,i,!0)},add:Wt("add"),set:Wt("set"),delete:Wt("delete"),clear:Wt("clear"),forEach:yi(!0,!1)},r={get(i){return pi(this,i,!0,!0)},get size(){return mi(this,!0)},has(i){return gi.call(this,i,!0)},add:Wt("add"),set:Wt("set"),delete:Wt("delete"),clear:Wt("clear"),forEach:yi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=vi(i,!1,!1),n[i]=vi(i,!0,!1),e[i]=vi(i,!1,!0),r[i]=vi(i,!0,!0)}),[t,n,e,r]}const[Ty,by,Sy,Ay]=Iy();function ba(t,e){const n=e?t?Ay:Sy:t?by:Ty;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ne(n,s)&&s in r?n:r,s,i)}const Cy={get:ba(!1,!1)},Ry={get:ba(!1,!0)},Ny={get:ba(!0,!1)},ju=new WeakMap,qu=new WeakMap,Hu=new WeakMap,ky=new WeakMap;function Oy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dy(t){return t.__v_skip||!Object.isExtensible(t)?0:Oy(ty(t))}function Qr(t){return t&&t.__v_isReadonly?t:Sa(t,!1,Uu,Cy,ju)}function Py(t){return Sa(t,!1,_y,Ry,qu)}function Ku(t){return Sa(t,!0,Ey,Ny,Hu)}function Sa(t,e,n,r,s){if(!be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Dy(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function er(t){return zu(t)?er(t.__v_raw):!!(t&&t.__v_isReactive)}function zu(t){return!!(t&&t.__v_isReadonly)}function Wu(t){return er(t)||zu(t)}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function Gu(t){return ui(t,"__v_skip",!0),t}const Yr=t=>be(t)?Qr(t):t,Aa=t=>be(t)?Ku(t):t;function Qu(t){Du()&&(t=re(t),t.dep||(t.dep=ga()),Pu(t.dep))}function Yu(t,e){t=re(t),t.dep&&_a(t.dep)}function tt(t){return Boolean(t&&t.__v_isRef===!0)}function Ly(t){return Ju(t,!1)}function xy(t){return Ju(t,!0)}function Ju(t,e){return tt(t)?t:new My(t,e)}class My{constructor(e,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:Yr(e)}get value(){return Qu(this),this._value}set value(e){e=this._shallow?e:re(e),zr(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Yr(e),Yu(this))}}function Jr(t){return tt(t)?t.value:t}const Uy={get:(t,e,n)=>Jr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return tt(s)&&!tt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Xu(t){return er(t)?t:new Proxy(t,Uy)}class Fy{constructor(e,n,r){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new wa(e,()=>{this._dirty||(this._dirty=!0,Yu(this))}),this.__v_isReadonly=r}get value(){const e=re(this);return Qu(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function St(t,e){let n,r;const s=J(t);return s?(n=t,r=Et):(n=t.get,r=t.set),new Fy(n,r,s||!r)}Promise.resolve();function Vy(t,e,...n){const r=t.vnode.props||ue;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||ue;f?s=n.map(g=>g.trim()):h&&(s=n.map(hi))}let a,c=r[a=pa(e)]||r[a=pa(bt(e))];!c&&i&&(c=r[a=pa(Jn(e))]),c&&vt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,vt(l,t,6,s)}}function Zu(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!J(t)){const c=l=>{const u=Zu(l,e,!0);u&&(a=!0,je(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):(B(i)?i.forEach(c=>o[c]=null):je(o,i),r.set(t,o),o)}function Ca(t,e){return!t||!si(e)?!1:(e=e.slice(2).replace(/Once$/,""),ne(t,e[0].toLowerCase()+e.slice(1))||ne(t,Jn(e))||ne(t,e))}let mt=null,eh=null;function wi(t){const e=mt;return mt=t,eh=t&&t.type.__scopeId||null,e}function $y(t,e=mt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ch(-1);const i=wi(e),o=t(...s);return wi(i),r._d&&Ch(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Ra(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:g,ctx:y,inheritAttrs:C}=t;let v,b;const L=wi(t);try{if(n.shapeFlag&4){const z=s||r;v=kt(u.call(z,z,h,i,g,f,y)),b=c}else{const z=e;v=kt(z.length>1?z(i,{attrs:c,slots:a,emit:l}):z(i,null)),b=e.props?c:By(c)}}catch(z){Xr.length=0,Ni(z,t,1),v=ot(Nt)}let q=v;if(b&&C!==!1){const z=Object.keys(b),{shapeFlag:fe}=q;z.length&&fe&(1|6)&&(o&&z.some(ha)&&(b=jy(b,o)),q=tr(q,b))}return n.dirs&&(q.dirs=q.dirs?q.dirs.concat(n.dirs):n.dirs),n.transition&&(q.transition=n.transition),v=q,wi(L),v}const By=t=>{let e;for(const n in t)(n==="class"||n==="style"||si(n))&&((e||(e={}))[n]=t[n]);return e},jy=(t,e)=>{const n={};for(const r in t)(!ha(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function qy(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?th(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!Ca(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?th(r,o,l):!0:!!o;return!1}function th(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ca(n,i))return!0}return!1}function Hy({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Ky=t=>t.__isSuspense;function zy(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):zv(t)}function Ei(t,e){if(Ne){let n=Ne.provides;const r=Ne.parent&&Ne.parent.provides;r===n&&(n=Ne.provides=Object.create(r)),n[t]=e}}function At(t,e,n=!1){const r=Ne||mt;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&J(e)?e.call(r.proxy):e}}function Wy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ah(()=>{t.isMounted=!0}),ch(()=>{t.isUnmounting=!0}),t}const yt=[Function,Array],Gy={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:yt,onEnter:yt,onAfterEnter:yt,onEnterCancelled:yt,onBeforeLeave:yt,onLeave:yt,onAfterLeave:yt,onLeaveCancelled:yt,onBeforeAppear:yt,onAppear:yt,onAfterAppear:yt,onAppearCancelled:yt},setup(t,{slots:e}){const n=xv(),r=Wy();let s;return()=>{const i=e.default&&sh(e.default(),!0);if(!i||!i.length)return;const o=re(t),{mode:a}=o,c=i[0];if(r.isLeaving)return ka(c);const l=rh(c);if(!l)return ka(c);const u=Na(l,o,r,n);Oa(l,u);const h=n.subTree,f=h&&rh(h);let g=!1;const{getTransitionKey:y}=l.type;if(y){const C=y();s===void 0?s=C:C!==s&&(s=C,g=!0)}if(f&&f.type!==Nt&&(!In(l,f)||g)){const C=Na(f,o,r,n);if(Oa(f,C),a==="out-in")return r.isLeaving=!0,C.afterLeave=()=>{r.isLeaving=!1,n.update()},ka(c);a==="in-out"&&l.type!==Nt&&(C.delayLeave=(v,b,L)=>{const q=nh(r,f);q[String(f.key)]=f,v._leaveCb=()=>{b(),v._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=L})}return c}}},Qy=Gy;function nh(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Na(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:y,onBeforeAppear:C,onAppear:v,onAfterAppear:b,onAppearCancelled:L}=e,q=String(t.key),z=nh(n,t),fe=(Z,Te)=>{Z&&vt(Z,r,9,Te)},we={mode:i,persisted:o,beforeEnter(Z){let Te=a;if(!n.isMounted)if(s)Te=C||a;else return;Z._leaveCb&&Z._leaveCb(!0);const de=z[q];de&&In(t,de)&&de.el._leaveCb&&de.el._leaveCb(),fe(Te,[Z])},enter(Z){let Te=c,de=l,$e=u;if(!n.isMounted)if(s)Te=v||c,de=b||l,$e=L||u;else return;let Be=!1;const We=Z._enterCb=Kt=>{Be||(Be=!0,Kt?fe($e,[Z]):fe(de,[Z]),we.delayedLeave&&we.delayedLeave(),Z._enterCb=void 0)};Te?(Te(Z,We),Te.length<=1&&We()):We()},leave(Z,Te){const de=String(t.key);if(Z._enterCb&&Z._enterCb(!0),n.isUnmounting)return Te();fe(h,[Z]);let $e=!1;const Be=Z._leaveCb=We=>{$e||($e=!0,Te(),We?fe(y,[Z]):fe(g,[Z]),Z._leaveCb=void 0,z[de]===t&&delete z[de])};z[de]=t,f?(f(Z,Be),f.length<=1&&Be()):Be()},clone(Z){return Na(Z,e,n,r)}};return we}function ka(t){if(_i(t))return t=tr(t),t.children=null,t}function rh(t){return _i(t)?t.children?t.children[0]:void 0:t}function Oa(t,e){t.shapeFlag&6&&t.component?Oa(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function sh(t,e=!1){let n=[],r=0;for(let s=0;s<t.length;s++){const i=t[s];i.type===Rt?(i.patchFlag&128&&r++,n=n.concat(sh(i.children,e))):(e||i.type!==Nt)&&n.push(i)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function ih(t){return J(t)?{setup:t,name:t.name}:t}const Da=t=>!!t.type.__asyncLoader,_i=t=>t.type.__isKeepAlive;function Yy(t,e){oh(t,"a",e)}function Jy(t,e){oh(t,"da",e)}function oh(t,e,n=Ne){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}t()});if(Ii(e,r,n),n){let s=n.parent;for(;s&&s.parent;)_i(s.parent.vnode)&&Xy(r,e,n,s),s=s.parent}}function Xy(t,e,n,r){const s=Ii(e,t,r,!0);lh(()=>{Tu(r[e],s)},n)}function Ii(t,e,n=Ne,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Zn(),nr(n);const a=vt(e,n,t,o);return Tn(),vn(),a});return r?s.unshift(i):s.push(i),i}}const Ut=t=>(e,n=Ne)=>(!Ri||t==="sp")&&Ii(t,e,n),Zy=Ut("bm"),ah=Ut("m"),ev=Ut("bu"),tv=Ut("u"),ch=Ut("bum"),lh=Ut("um"),nv=Ut("sp"),rv=Ut("rtg"),sv=Ut("rtc");function iv(t,e=Ne){Ii("ec",t,e)}let Pa=!0;function ov(t){const e=fh(t),n=t.proxy,r=t.ctx;Pa=!1,e.beforeCreate&&uh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:y,activated:C,deactivated:v,beforeDestroy:b,beforeUnmount:L,destroyed:q,unmounted:z,render:fe,renderTracked:we,renderTriggered:Z,errorCaptured:Te,serverPrefetch:de,expose:$e,inheritAttrs:Be,components:We,directives:Kt,filters:Hn}=e;if(l&&av(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const pe in o){const ae=o[pe];J(ae)&&(r[pe]=ae.bind(n))}if(s){const pe=s.call(n,n);be(pe)&&(t.data=Qr(pe))}if(Pa=!0,i)for(const pe in i){const ae=i[pe],pt=J(ae)?ae.bind(n,n):J(ae.get)?ae.get.bind(n,n):Et,zn=!J(ae)&&J(ae.set)?ae.set.bind(n):Et,xt=St({get:pt,set:zn});Object.defineProperty(r,pe,{enumerable:!0,configurable:!0,get:()=>xt.value,set:It=>xt.value=It})}if(a)for(const pe in a)hh(a[pe],r,n,pe);if(c){const pe=J(c)?c.call(n):c;Reflect.ownKeys(pe).forEach(ae=>{Ei(ae,pe[ae])})}u&&uh(u,t,"c");function Re(pe,ae){B(ae)?ae.forEach(pt=>pe(pt.bind(n))):ae&&pe(ae.bind(n))}if(Re(Zy,h),Re(ah,f),Re(ev,g),Re(tv,y),Re(Yy,C),Re(Jy,v),Re(iv,Te),Re(sv,we),Re(rv,Z),Re(ch,L),Re(lh,z),Re(nv,de),B($e))if($e.length){const pe=t.exposed||(t.exposed={});$e.forEach(ae=>{Object.defineProperty(pe,ae,{get:()=>n[ae],set:pt=>n[ae]=pt})})}else t.exposed||(t.exposed={});fe&&t.render===Et&&(t.render=fe),Be!=null&&(t.inheritAttrs=Be),We&&(t.components=We),Kt&&(t.directives=Kt)}function av(t,e,n=Et,r=!1){B(t)&&(t=La(t));for(const s in t){const i=t[s];let o;be(i)?"default"in i?o=At(i.from||s,i.default,!0):o=At(i.from||s):o=At(i),tt(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function uh(t,e,n){vt(B(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function hh(t,e,n,r){const s=r.includes(".")?Hh(n,r):()=>n[r];if(Pe(t)){const i=e[t];J(i)&&Oi(s,i)}else if(J(t))Oi(s,t.bind(n));else if(be(t))if(B(t))t.forEach(i=>hh(i,e,n,r));else{const i=J(t.handler)?t.handler.bind(n):e[t.handler];J(i)&&Oi(s,i,t)}}function fh(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Ti(c,l,o,!0)),Ti(c,e,o)),i.set(e,c),c}function Ti(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ti(t,i,n,!0),s&&s.forEach(o=>Ti(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=cv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const cv={data:dh,props:wn,emits:wn,methods:wn,computed:wn,beforeCreate:Ge,created:Ge,beforeMount:Ge,mounted:Ge,beforeUpdate:Ge,updated:Ge,beforeDestroy:Ge,beforeUnmount:Ge,destroyed:Ge,unmounted:Ge,activated:Ge,deactivated:Ge,errorCaptured:Ge,serverPrefetch:Ge,components:wn,directives:wn,watch:uv,provide:dh,inject:lv};function dh(t,e){return e?t?function(){return je(J(t)?t.call(this,this):t,J(e)?e.call(this,this):e)}:e:t}function lv(t,e){return wn(La(t),La(e))}function La(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ge(t,e){return t?[...new Set([].concat(t,e))]:e}function wn(t,e){return t?je(je(Object.create(null),t),e):e}function uv(t,e){if(!t)return e;if(!e)return t;const n=je(Object.create(null),t);for(const r in e)n[r]=Ge(t[r],e[r]);return n}function hv(t,e,n,r=!1){const s={},i={};ui(i,Si,1),t.propsDefaults=Object.create(null),ph(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Py(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function fv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=re(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];const g=e[f];if(c)if(ne(i,f))g!==i[f]&&(i[f]=g,l=!0);else{const y=bt(f);s[y]=xa(c,a,y,g,t,!1)}else g!==i[f]&&(i[f]=g,l=!0)}}}else{ph(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ne(e,h)&&((u=Jn(h))===h||!ne(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=xa(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ne(e,h))&&(delete i[h],l=!0)}l&&Mt(t,"set","$attrs")}function ph(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(oi(c))continue;const l=e[c];let u;s&&ne(s,u=bt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ca(t.emitsOptions,c)||l!==r[c]&&(r[c]=l,o=!0)}if(i){const c=re(n),l=a||ue;for(let u=0;u<i.length;u++){const h=i[u];n[h]=xa(s,c,h,l[h],t,!ne(l,h))}}return o}function xa(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ne(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&J(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(nr(s),r=l[n]=c.call(null,e),Tn())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Jn(n))&&(r=!0))}return r}function gh(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!J(t)){const u=h=>{c=!0;const[f,g]=gh(h,e,!0);je(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return r.set(t,Gn),Gn;if(B(i))for(let u=0;u<i.length;u++){const h=bt(i[u]);mh(h)&&(o[h]=ue)}else if(i)for(const u in i){const h=bt(u);if(mh(h)){const f=i[u],g=o[h]=B(f)||J(f)?{type:f}:f;if(g){const y=wh(Boolean,g.type),C=wh(String,g.type);g[0]=y>-1,g[1]=C<0||y<C,(y>-1||ne(g,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function mh(t){return t[0]!=="$"}function yh(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function vh(t,e){return yh(t)===yh(e)}function wh(t,e){return B(e)?e.findIndex(n=>vh(n,t)):J(e)&&vh(e,t)?0:-1}const Eh=t=>t[0]==="_"||t==="$stable",Ma=t=>B(t)?t.map(kt):[kt(t)],dv=(t,e,n)=>{const r=$y((...s)=>Ma(e(...s)),n);return r._c=!1,r},_h=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Eh(s))continue;const i=t[s];if(J(i))e[s]=dv(s,i,r);else if(i!=null){const o=Ma(i);e[s]=()=>o}}},Ih=(t,e)=>{const n=Ma(e);t.slots.default=()=>n},pv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),ui(e,"_",n)):_h(e,t.slots={})}else t.slots={},e&&Ih(t,e);ui(t.slots,Si,1)},gv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ue;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(je(s,e),!n&&a===1&&delete s._):(i=!e.$stable,_h(e,s)),o=e}else e&&(Ih(t,e),o={default:1});if(i)for(const a in s)!Eh(a)&&!(a in o)&&delete s[a]};function SC(t,e){const n=mt;if(n===null)return t;const r=n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ue]=e[i];J(o)&&(o={mounted:o,updated:o}),o.deep&&bn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function En(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Zn(),vt(c,n,8,[t.el,a,t,e]),vn())}}function Th(){return{app:null,config:{isNativeTag:Xm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mv=0;function yv(t,e){return function(r,s=null){s!=null&&!be(s)&&(s=null);const i=Th(),o=new Set;let a=!1;const c=i.app={_uid:mv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Gv,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&J(l.install)?(o.add(l),l.install(c,...u)):J(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=ot(r,s);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,qa(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}const Qe=zy;function vv(t){return wv(t)}function wv(t,e){const n=sy();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=Et,cloneNode:y,insertStaticContent:C}=t,v=(d,p,m,I=null,_=null,R=null,k=!1,S=null,A=!!p.dynamicChildren)=>{if(d===p)return;d&&!In(d,p)&&(I=U(d),gt(d,_,R,!0),d=null),p.patchFlag===-2&&(A=!1,p.dynamicChildren=null);const{type:T,ref:F,shapeFlag:x}=p;switch(T){case Fa:b(d,p,m,I);break;case Nt:L(d,p,m,I);break;case Va:d==null&&q(p,m,I,k);break;case Rt:Kt(d,p,m,I,_,R,k,S,A);break;default:x&1?we(d,p,m,I,_,R,k,S,A):x&6?Hn(d,p,m,I,_,R,k,S,A):(x&64||x&128)&&T.process(d,p,m,I,_,R,k,S,A,ge)}F!=null&&_&&Ua(F,d&&d.ref,R,p||d,!p)},b=(d,p,m,I)=>{if(d==null)r(p.el=a(p.children),m,I);else{const _=p.el=d.el;p.children!==d.children&&l(_,p.children)}},L=(d,p,m,I)=>{d==null?r(p.el=c(p.children||""),m,I):p.el=d.el},q=(d,p,m,I)=>{[d.el,d.anchor]=C(d.children,p,m,I)},z=({el:d,anchor:p},m,I)=>{let _;for(;d&&d!==p;)_=f(d),r(d,m,I),d=_;r(p,m,I)},fe=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),s(d),d=m;s(p)},we=(d,p,m,I,_,R,k,S,A)=>{k=k||p.type==="svg",d==null?Z(p,m,I,_,R,k,S,A):$e(d,p,_,R,k,S,A)},Z=(d,p,m,I,_,R,k,S)=>{let A,T;const{type:F,props:x,shapeFlag:V,transition:W,patchFlag:te,dirs:Ee}=d;if(d.el&&y!==void 0&&te===-1)A=d.el=y(d.el);else{if(A=d.el=o(d.type,R,x&&x.is,x),V&8?u(A,d.children):V&16&&de(d.children,A,null,I,_,R&&F!=="foreignObject",k,S),Ee&&En(d,null,I,"created"),x){for(const ye in x)ye!=="value"&&!oi(ye)&&i(A,ye,null,x[ye],R,d.children,I,_,N);"value"in x&&i(A,"value",null,x.value),(T=x.onVnodeBeforeMount)&&Ct(T,I,d)}Te(A,d,d.scopeId,k,I)}Ee&&En(d,null,I,"beforeMount");const le=(!_||_&&!_.pendingBranch)&&W&&!W.persisted;le&&W.beforeEnter(A),r(A,p,m),((T=x&&x.onVnodeMounted)||le||Ee)&&Qe(()=>{T&&Ct(T,I,d),le&&W.enter(A),Ee&&En(d,null,I,"mounted")},_)},Te=(d,p,m,I,_)=>{if(m&&g(d,m),I)for(let R=0;R<I.length;R++)g(d,I[R]);if(_){let R=_.subTree;if(p===R){const k=_.vnode;Te(d,k,k.scopeId,k.slotScopeIds,_.parent)}}},de=(d,p,m,I,_,R,k,S,A=0)=>{for(let T=A;T<d.length;T++){const F=d[T]=S?Gt(d[T]):kt(d[T]);v(null,F,p,m,I,_,R,k,S)}},$e=(d,p,m,I,_,R,k)=>{const S=p.el=d.el;let{patchFlag:A,dynamicChildren:T,dirs:F}=p;A|=d.patchFlag&16;const x=d.props||ue,V=p.props||ue;let W;(W=V.onVnodeBeforeUpdate)&&Ct(W,m,p,d),F&&En(p,d,m,"beforeUpdate");const te=_&&p.type!=="foreignObject";if(T?Be(d.dynamicChildren,T,S,m,I,te,R):k||pt(d,p,S,null,m,I,te,R,!1),A>0){if(A&16)We(S,p,x,V,m,I,_);else if(A&2&&x.class!==V.class&&i(S,"class",null,V.class,_),A&4&&i(S,"style",x.style,V.style,_),A&8){const Ee=p.dynamicProps;for(let le=0;le<Ee.length;le++){const ye=Ee[le],wt=x[ye],Wn=V[ye];(Wn!==wt||ye==="value")&&i(S,ye,wt,Wn,_,d.children,m,I,N)}}A&1&&d.children!==p.children&&u(S,p.children)}else!k&&T==null&&We(S,p,x,V,m,I,_);((W=V.onVnodeUpdated)||F)&&Qe(()=>{W&&Ct(W,m,p,d),F&&En(p,d,m,"updated")},I)},Be=(d,p,m,I,_,R,k)=>{for(let S=0;S<p.length;S++){const A=d[S],T=p[S],F=A.el&&(A.type===Rt||!In(A,T)||A.shapeFlag&(6|64))?h(A.el):m;v(A,T,F,null,I,_,R,k,!0)}},We=(d,p,m,I,_,R,k)=>{if(m!==I){for(const S in I){if(oi(S))continue;const A=I[S],T=m[S];A!==T&&S!=="value"&&i(d,S,T,A,k,p.children,_,R,N)}if(m!==ue)for(const S in m)!oi(S)&&!(S in I)&&i(d,S,m[S],null,k,p.children,_,R,N);"value"in I&&i(d,"value",m.value,I.value)}},Kt=(d,p,m,I,_,R,k,S,A)=>{const T=p.el=d?d.el:a(""),F=p.anchor=d?d.anchor:a("");let{patchFlag:x,dynamicChildren:V,slotScopeIds:W}=p;W&&(S=S?S.concat(W):W),d==null?(r(T,m,I),r(F,m,I),de(p.children,m,F,_,R,k,S,A)):x>0&&x&64&&V&&d.dynamicChildren?(Be(d.dynamicChildren,V,m,_,R,k,S),(p.key!=null||_&&p===_.subTree)&&bh(d,p,!0)):pt(d,p,m,F,_,R,k,S,A)},Hn=(d,p,m,I,_,R,k,S,A)=>{p.slotScopeIds=S,d==null?p.shapeFlag&512?_.ctx.activate(p,m,I,k,A):Kn(p,m,I,_,R,k,A):Re(d,p,A)},Kn=(d,p,m,I,_,R,k)=>{const S=d.component=Lv(d,I,_);if(_i(d)&&(S.ctx.renderer=ge),Mv(S),S.asyncDep){if(_&&_.registerDep(S,pe),!d.el){const A=S.subTree=ot(Nt);L(null,A,p,m)}return}pe(S,d,p,m,_,R,k)},Re=(d,p,m)=>{const I=p.component=d.component;if(qy(d,p,m))if(I.asyncDep&&!I.asyncResolved){ae(I,p,m);return}else I.next=p,Hv(I.update),I.update();else p.component=d.component,p.el=d.el,I.vnode=p},pe=(d,p,m,I,_,R,k)=>{const S=()=>{if(d.isMounted){let{next:F,bu:x,u:V,parent:W,vnode:te}=d,Ee=F,le;A.allowRecurse=!1,F?(F.el=te.el,ae(d,F,k)):F=te,x&&li(x),(le=F.props&&F.props.onVnodeBeforeUpdate)&&Ct(le,W,F,te),A.allowRecurse=!0;const ye=Ra(d),wt=d.subTree;d.subTree=ye,v(wt,ye,h(wt.el),U(wt),d,_,R),F.el=ye.el,Ee===null&&Hy(d,ye.el),V&&Qe(V,_),(le=F.props&&F.props.onVnodeUpdated)&&Qe(()=>Ct(le,W,F,te),_)}else{let F;const{el:x,props:V}=p,{bm:W,m:te,parent:Ee}=d,le=Da(p);if(A.allowRecurse=!1,W&&li(W),!le&&(F=V&&V.onVnodeBeforeMount)&&Ct(F,Ee,p),A.allowRecurse=!0,x&&Y){const ye=()=>{d.subTree=Ra(d),Y(x,d.subTree,d,_,null)};le?p.type.__asyncLoader().then(()=>!d.isUnmounted&&ye()):ye()}else{const ye=d.subTree=Ra(d);v(null,ye,m,I,d,_,R),p.el=ye.el}if(te&&Qe(te,_),!le&&(F=V&&V.onVnodeMounted)){const ye=p;Qe(()=>Ct(F,Ee,ye),_)}p.shapeFlag&256&&d.a&&Qe(d.a,_),d.isMounted=!0,p=m=I=null}},A=new wa(S,()=>Uh(d.update),d.scope),T=d.update=A.run.bind(A);T.id=d.uid,A.allowRecurse=T.allowRecurse=!0,T()},ae=(d,p,m)=>{p.component=d;const I=d.vnode.props;d.vnode=p,d.next=null,fv(d,p.props,I,m),gv(d,p.children,m),Zn(),Wa(void 0,d.update),vn()},pt=(d,p,m,I,_,R,k,S,A=!1)=>{const T=d&&d.children,F=d?d.shapeFlag:0,x=p.children,{patchFlag:V,shapeFlag:W}=p;if(V>0){if(V&128){xt(T,x,m,I,_,R,k,S,A);return}else if(V&256){zn(T,x,m,I,_,R,k,S,A);return}}W&8?(F&16&&N(T,_,R),x!==T&&u(m,x)):F&16?W&16?xt(T,x,m,I,_,R,k,S,A):N(T,_,R,!0):(F&8&&u(m,""),W&16&&de(x,m,I,_,R,k,S,A))},zn=(d,p,m,I,_,R,k,S,A)=>{d=d||Gn,p=p||Gn;const T=d.length,F=p.length,x=Math.min(T,F);let V;for(V=0;V<x;V++){const W=p[V]=A?Gt(p[V]):kt(p[V]);v(d[V],W,m,null,_,R,k,S,A)}T>F?N(d,_,R,!0,!1,x):de(p,m,I,_,R,k,S,A,x)},xt=(d,p,m,I,_,R,k,S,A)=>{let T=0;const F=p.length;let x=d.length-1,V=F-1;for(;T<=x&&T<=V;){const W=d[T],te=p[T]=A?Gt(p[T]):kt(p[T]);if(In(W,te))v(W,te,m,null,_,R,k,S,A);else break;T++}for(;T<=x&&T<=V;){const W=d[x],te=p[V]=A?Gt(p[V]):kt(p[V]);if(In(W,te))v(W,te,m,null,_,R,k,S,A);else break;x--,V--}if(T>x){if(T<=V){const W=V+1,te=W<F?p[W].el:I;for(;T<=V;)v(null,p[T]=A?Gt(p[T]):kt(p[T]),m,te,_,R,k,S,A),T++}}else if(T>V)for(;T<=x;)gt(d[T],_,R,!0),T++;else{const W=T,te=T,Ee=new Map;for(T=te;T<=V;T++){const st=p[T]=A?Gt(p[T]):kt(p[T]);st.key!=null&&Ee.set(st.key,T)}let le,ye=0;const wt=V-te+1;let Wn=!1,vu=0;const Hr=new Array(wt);for(T=0;T<wt;T++)Hr[T]=0;for(T=W;T<=x;T++){const st=d[T];if(ye>=wt){gt(st,_,R,!0);continue}let Tt;if(st.key!=null)Tt=Ee.get(st.key);else for(le=te;le<=V;le++)if(Hr[le-te]===0&&In(st,p[le])){Tt=le;break}Tt===void 0?gt(st,_,R,!0):(Hr[Tt-te]=T+1,Tt>=vu?vu=Tt:Wn=!0,v(st,p[Tt],m,null,_,R,k,S,A),ye++)}const wu=Wn?Ev(Hr):Gn;for(le=wu.length-1,T=wt-1;T>=0;T--){const st=te+T,Tt=p[st],Eu=st+1<F?p[st+1].el:I;Hr[T]===0?v(null,Tt,m,Eu,_,R,k,S,A):Wn&&(le<0||T!==wu[le]?It(Tt,m,Eu,2):le--)}}},It=(d,p,m,I,_=null)=>{const{el:R,type:k,transition:S,children:A,shapeFlag:T}=d;if(T&6){It(d.component.subTree,p,m,I);return}if(T&128){d.suspense.move(p,m,I);return}if(T&64){k.move(d,p,m,ge);return}if(k===Rt){r(R,p,m);for(let x=0;x<A.length;x++)It(A[x],p,m,I);r(d.anchor,p,m);return}if(k===Va){z(d,p,m);return}if(I!==2&&T&1&&S)if(I===0)S.beforeEnter(R),r(R,p,m),Qe(()=>S.enter(R),_);else{const{leave:x,delayLeave:V,afterLeave:W}=S,te=()=>r(R,p,m),Ee=()=>{x(R,()=>{te(),W&&W()})};V?V(R,te,Ee):Ee()}else r(R,p,m)},gt=(d,p,m,I=!1,_=!1)=>{const{type:R,props:k,ref:S,children:A,dynamicChildren:T,shapeFlag:F,patchFlag:x,dirs:V}=d;if(S!=null&&Ua(S,null,m,d,!0),F&256){p.ctx.deactivate(d);return}const W=F&1&&V,te=!Da(d);let Ee;if(te&&(Ee=k&&k.onVnodeBeforeUnmount)&&Ct(Ee,p,d),F&6)M(d.component,m,I);else{if(F&128){d.suspense.unmount(m,I);return}W&&En(d,null,p,"beforeUnmount"),F&64?d.type.remove(d,p,m,_,ge,I):T&&(R!==Rt||x>0&&x&64)?N(T,p,m,!1,!0):(R===Rt&&x&(128|256)||!_&&F&16)&&N(A,p,m),I&&oa(d)}(te&&(Ee=k&&k.onVnodeUnmounted)||W)&&Qe(()=>{Ee&&Ct(Ee,p,d),W&&En(d,null,p,"unmounted")},m)},oa=d=>{const{type:p,el:m,anchor:I,transition:_}=d;if(p===Rt){E(m,I);return}if(p===Va){fe(d);return}const R=()=>{s(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(d.shapeFlag&1&&_&&!_.persisted){const{leave:k,delayLeave:S}=_,A=()=>k(m,R);S?S(d.el,R,A):A()}else R()},E=(d,p)=>{let m;for(;d!==p;)m=f(d),s(d),d=m;s(p)},M=(d,p,m)=>{const{bum:I,scope:_,update:R,subTree:k,um:S}=d;I&&li(I),_.stop(),R&&(R.active=!1,gt(k,d,p,m)),S&&Qe(S,p),Qe(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},N=(d,p,m,I=!1,_=!1,R=0)=>{for(let k=R;k<d.length;k++)gt(d[k],p,m,I,_)},U=d=>d.shapeFlag&6?U(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),ce=(d,p,m)=>{d==null?p._vnode&&gt(p._vnode,null,null,!0):v(p._vnode||null,d,p,null,null,null,m),$h(),p._vnode=d},ge={p:v,um:gt,m:It,r:oa,mt:Kn,mc:de,pc:pt,pbc:Be,n:U,o:t};let X,Y;return e&&([X,Y]=e(ge)),{render:ce,hydrate:X,createApp:yv(ce,X)}}function Ua(t,e,n,r,s=!1){if(B(t)){t.forEach((f,g)=>Ua(f,e&&(B(e)?e[g]:e),n,r,s));return}if(Da(r)&&!s)return;const i=r.shapeFlag&4?qa(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ue?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Pe(l)?(u[l]=null,ne(h,l)&&(h[l]=null)):tt(l)&&(l.value=null)),Pe(c)){const f=()=>{u[c]=o,ne(h,c)&&(h[c]=o)};o?(f.id=-1,Qe(f,n)):f()}else if(tt(c)){const f=()=>{c.value=o};o?(f.id=-1,Qe(f,n)):f()}else J(c)&&Qt(c,a,12,[o,u])}function Ct(t,e,n,r=null){vt(t,e,7,[n,r])}function bh(t,e,n=!1){const r=t.children,s=e.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Gt(s[i]),a.el=o.el),n||bh(o,a))}}function Ev(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const _v=t=>t.__isTeleport,Sh="components";function AC(t,e){return Tv(Sh,t,!0,e)||t}const Iv=Symbol();function Tv(t,e,n=!0,r=!1){const s=mt||Ne;if(s){const i=s.type;if(t===Sh){const a=$v(i);if(a&&(a===e||a===bt(e)||a===ci(bt(e))))return i}const o=Ah(s[t]||i[t],e)||Ah(s.appContext[t],e);return!o&&r?i:o}}function Ah(t,e){return t&&(t[e]||t[bt(e)]||t[ci(bt(e))])}const Rt=Symbol(void 0),Fa=Symbol(void 0),Nt=Symbol(void 0),Va=Symbol(void 0),Xr=[];let _n=null;function bv(t=!1){Xr.push(_n=t?null:[])}function Sv(){Xr.pop(),_n=Xr[Xr.length-1]||null}let bi=1;function Ch(t){bi+=t}function Rh(t){return t.dynamicChildren=bi>0?_n||Gn:null,Sv(),bi>0&&_n&&_n.push(t),t}function CC(t,e,n,r,s,i){return Rh(kh(t,e,n,r,s,i,!0))}function Av(t,e,n,r,s){return Rh(ot(t,e,n,r,s,!0))}function $a(t){return t?t.__v_isVNode===!0:!1}function In(t,e){return t.type===e.type&&t.key===e.key}const Si="__vInternal",Nh=({key:t})=>t!=null?t:null,Ai=({ref:t})=>t!=null?Pe(t)||tt(t)||J(t)?{i:mt,r:t}:t:null;function kh(t,e=null,n=null,r=0,s=null,i=t===Rt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Nh(e),ref:e&&Ai(e),scopeId:eh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Ba(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Pe(n)?8:16),bi>0&&!o&&_n&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&_n.push(c),c}const ot=Cv;function Cv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Iv)&&(t=Nt),$a(t)){const a=tr(t,e,!0);return n&&Ba(a,n),a}if(Bv(t)&&(t=t.__vccOpts),e){e=Rv(e);let{class:a,style:c}=e;a&&!Pe(a)&&(e.class=la(a)),be(c)&&(Wu(c)&&!B(c)&&(c=je({},c)),e.style=ca(c))}const o=Pe(t)?1:Ky(t)?128:_v(t)?64:be(t)?4:J(t)?2:0;return kh(t,e,n,r,s,o,i,!0)}function Rv(t){return t?Wu(t)||Si in t?je({},t):t:null}function tr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?kv(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Nh(a),ref:e&&e.ref?n&&s?B(s)?s.concat(Ai(e)):[s,Ai(e)]:Ai(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Rt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&tr(t.ssContent),ssFallback:t.ssFallback&&tr(t.ssFallback),el:t.el,anchor:t.anchor}}function Nv(t=" ",e=0){return ot(Fa,null,t,e)}function RC(t="",e=!1){return e?(bv(),Av(Nt,null,t)):ot(Nt,null,t)}function kt(t){return t==null||typeof t=="boolean"?ot(Nt):B(t)?ot(Rt,null,t.slice()):typeof t=="object"?Gt(t):ot(Fa,null,String(t))}function Gt(t){return t.el===null||t.memo?t:tr(t)}function Ba(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(r&(1|64)){const s=e.default;s&&(s._c&&(s._d=!1),Ba(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Si in e)?e._ctx=mt:s===3&&mt&&(mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:mt},n=32):(e=String(e),r&64?(n=16,e=[Nv(e)]):n=8);t.children=e,t.shapeFlag|=n}function kv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=la([e.class,r.class]));else if(s==="style")e.style=ca([e.style,r.style]);else if(si(s)){const i=e[s],o=r[s];i!==o&&!(B(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function NC(t,e,n,r){let s;const i=n&&n[r];if(B(t)||Pe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(be(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const ja=t=>t?Oh(t)?qa(t)||t.proxy:ja(t.parent):null,Ci=je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ja(t.parent),$root:t=>ja(t.root),$emit:t=>t.emit,$options:t=>fh(t),$forceUpdate:t=>()=>Uh(t.update),$nextTick:t=>Mh.bind(t.proxy),$watch:t=>Wv.bind(t)}),Ov={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 0:return r[e];case 1:return s[e];case 3:return n[e];case 2:return i[e]}else{if(r!==ue&&ne(r,e))return o[e]=0,r[e];if(s!==ue&&ne(s,e))return o[e]=1,s[e];if((l=t.propsOptions[0])&&ne(l,e))return o[e]=2,i[e];if(n!==ue&&ne(n,e))return o[e]=3,n[e];Pa&&(o[e]=4)}}const u=Ci[e];let h,f;if(u)return e==="$attrs"&&it(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ue&&ne(n,e))return o[e]=3,n[e];if(f=c.config.globalProperties,ne(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;if(s!==ue&&ne(s,e))s[e]=n;else if(r!==ue&&ne(r,e))r[e]=n;else if(ne(t.props,e))return!1;return e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return n[o]!==void 0||t!==ue&&ne(t,o)||e!==ue&&ne(e,o)||(a=i[0])&&ne(a,o)||ne(r,o)||ne(Ci,o)||ne(s.config.globalProperties,o)}},Dv=Th();let Pv=0;function Lv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Dv,i={uid:Pv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,update:null,scope:new iy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gh(r,s),emitsOptions:Zu(r,s),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:r.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Vy.bind(null,i),t.ce&&t.ce(i),i}let Ne=null;const xv=()=>Ne||mt,nr=t=>{Ne=t,t.scope.on()},Tn=()=>{Ne&&Ne.scope.off(),Ne=null};function Oh(t){return t.vnode.shapeFlag&4}let Ri=!1;function Mv(t,e=!1){Ri=e;const{props:n,children:r}=t.vnode,s=Oh(t);hv(t,n,s,e),pv(t,r);const i=s?Uv(t,e):void 0;return Ri=!1,i}function Uv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Gu(new Proxy(t.ctx,Ov));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Vv(t):null;nr(t),Zn();const i=Qt(r,t,0,[t.props,s]);if(vn(),Tn(),Su(i)){if(i.then(Tn,Tn),e)return i.then(o=>{Dh(t,o,e)}).catch(o=>{Ni(o,t,0)});t.asyncDep=i}else Dh(t,i,e)}else Lh(t,e)}function Dh(t,e,n){J(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:be(e)&&(t.setupState=Xu(e)),Lh(t,n)}let Ph;function Lh(t,e,n){const r=t.type;if(!t.render){if(!e&&Ph&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=je(je({isCustomElement:i,delimiters:a},o),c);r.render=Ph(s,l)}}t.render=r.render||Et}nr(t),Zn(),ov(t),vn(),Tn()}function Fv(t){return new Proxy(t.attrs,{get(e,n){return it(t,"get","$attrs"),e[n]}})}function Vv(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Fv(t))},slots:t.slots,emit:t.emit,expose:e}}function qa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Xu(Gu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ci)return Ci[n](t)}}))}function $v(t){return J(t)&&t.displayName||t.name}function Bv(t){return J(t)&&"__vccOpts"in t}function Qt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Ni(i,e,n)}return s}function vt(t,e,n,r){if(J(t)){const i=Qt(t,e,n,r);return i&&Su(i)&&i.catch(o=>{Ni(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(vt(t[i],e,n,r));return s}function Ni(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Qt(c,null,10,[t,o,a]);return}}jv(t,n,s,r)}function jv(t,e,n,r=!0){console.error(t)}let ki=!1,Ha=!1;const at=[];let Ft=0;const Zr=[];let es=null,rr=0;const ts=[];let Yt=null,sr=0;const xh=Promise.resolve();let Ka=null,za=null;function Mh(t){const e=Ka||xh;return t?e.then(this?t.bind(this):t):e}function qv(t){let e=Ft+1,n=at.length;for(;e<n;){const r=e+n>>>1;ns(at[r])<t?e=r+1:n=r}return e}function Uh(t){(!at.length||!at.includes(t,ki&&t.allowRecurse?Ft+1:Ft))&&t!==za&&(t.id==null?at.push(t):at.splice(qv(t.id),0,t),Fh())}function Fh(){!ki&&!Ha&&(Ha=!0,Ka=xh.then(Bh))}function Hv(t){const e=at.indexOf(t);e>Ft&&at.splice(e,1)}function Vh(t,e,n,r){B(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Fh()}function Kv(t){Vh(t,es,Zr,rr)}function zv(t){Vh(t,Yt,ts,sr)}function Wa(t,e=null){if(Zr.length){for(za=e,es=[...new Set(Zr)],Zr.length=0,rr=0;rr<es.length;rr++)es[rr]();es=null,rr=0,za=null,Wa(t,e)}}function $h(t){if(ts.length){const e=[...new Set(ts)];if(ts.length=0,Yt){Yt.push(...e);return}for(Yt=e,Yt.sort((n,r)=>ns(n)-ns(r)),sr=0;sr<Yt.length;sr++)Yt[sr]();Yt=null,sr=0}}const ns=t=>t.id==null?1/0:t.id;function Bh(t){Ha=!1,ki=!0,Wa(t),at.sort((n,r)=>ns(n)-ns(r));const e=Et;try{for(Ft=0;Ft<at.length;Ft++){const n=at[Ft];n&&n.active!==!1&&Qt(n,null,14)}}finally{Ft=0,at.length=0,$h(),ki=!1,Ka=null,(at.length||Zr.length||ts.length)&&Bh(t)}}const jh={};function Oi(t,e,n){return qh(t,e,n)}function qh(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ue){const a=Ne;let c,l=!1,u=!1;if(tt(t)?(c=()=>t.value,l=!!t._shallow):er(t)?(c=()=>t,r=!0):B(t)?(u=!0,l=t.some(er),c=()=>t.map(b=>{if(tt(b))return b.value;if(er(b))return bn(b);if(J(b))return Qt(b,a,2)})):J(t)?e?c=()=>Qt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),vt(t,a,3,[f])}:c=Et,e&&r){const b=c;c=()=>bn(b())}let h,f=b=>{h=v.onStop=()=>{Qt(b,a,4)}};if(Ri)return f=Et,e?n&&vt(e,a,3,[c(),u?[]:void 0,f]):c(),Et;let g=u?[]:jh;const y=()=>{if(!!v.active)if(e){const b=v.run();(r||l||(u?b.some((L,q)=>zr(L,g[q])):zr(b,g)))&&(h&&h(),vt(e,a,3,[b,g===jh?void 0:g,f]),g=b)}else v.run()};y.allowRecurse=!!e;let C;s==="sync"?C=y:s==="post"?C=()=>Qe(y,a&&a.suspense):C=()=>{!a||a.isMounted?Kv(y):y()};const v=new wa(c,C);return e?n?y():g=v.run():s==="post"?Qe(v.run.bind(v),a&&a.suspense):v.run(),()=>{v.stop(),a&&a.scope&&Tu(a.scope.effects,v)}}function Wv(t,e,n){const r=this.proxy,s=Pe(t)?t.includes(".")?Hh(r,t):()=>r[t]:t.bind(r,r);let i;J(e)?i=e:(i=e.handler,n=e);const o=Ne;nr(this);const a=qh(s,i.bind(r),n);return o?nr(o):Tn(),a}function Hh(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function bn(t,e){if(!be(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),tt(t))bn(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)bn(t[n],e);else if(Yn(t)||Qn(t))t.forEach(n=>{bn(n,e)});else if(Cu(t))for(const n in t)bn(t[n],e);return t}function Kh(t,e,n){const r=arguments.length;return r===2?be(e)&&!B(e)?$a(e)?ot(t,null,[e]):ot(t,e):ot(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&$a(n)&&(n=[n]),ot(t,e,n))}const Gv="3.2.22",Qv="http://www.w3.org/2000/svg",ir=typeof document!="undefined"?document:null,zh=new Map,Yv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?ir.createElementNS(Qv,t):ir.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ir.createTextNode(t),createComment:t=>ir.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ir.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r){const s=n?n.previousSibling:e.lastChild;let i=zh.get(t);if(!i){const o=ir.createElement("template");if(o.innerHTML=r?`<svg>${t}</svg>`:t,i=o.content,r){const a=i.firstChild;for(;a.firstChild;)i.appendChild(a.firstChild);i.removeChild(a)}zh.set(t,i)}return e.insertBefore(i.cloneNode(!0),n),[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Jv(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Xv(t,e,n){const r=t.style,s=Pe(n);if(n&&!s){for(const i in n)Ga(r,i,n[i]);if(e&&!Pe(e))for(const i in e)n[i]==null&&Ga(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Wh=/\s*!important$/;function Ga(t,e,n){if(B(n))n.forEach(r=>Ga(t,e,r));else if(e.startsWith("--"))t.setProperty(e,n);else{const r=Zv(t,e);Wh.test(n)?t.setProperty(Jn(r),n.replace(Wh,""),"important"):t[r]=n}}const Gh=["Webkit","Moz","ms"],Qa={};function Zv(t,e){const n=Qa[e];if(n)return n;let r=bt(e);if(r!=="filter"&&r in t)return Qa[e]=r;r=ci(r);for(let s=0;s<Gh.length;s++){const i=Gh[s]+r;if(i in t)return Qa[e]=i}return e}const Qh="http://www.w3.org/1999/xlink";function ew(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Qh,e.slice(6,e.length)):t.setAttributeNS(Qh,e,n);else{const i=Wm(e);n==null||i&&!_u(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function tw(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"){t._value=n;const a=n==null?"":n;t.value!==a&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=_u(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let Di=Date.now,Yh=!1;if(typeof window!="undefined"){Di()>document.createEvent("Event").timeStamp&&(Di=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Yh=!!(t&&Number(t[1])<=53)}let Ya=0;const nw=Promise.resolve(),rw=()=>{Ya=0},sw=()=>Ya||(nw.then(rw),Ya=Di());function Jt(t,e,n,r){t.addEventListener(e,n,r)}function iw(t,e,n,r){t.removeEventListener(e,n,r)}function ow(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=aw(e);if(r){const l=i[e]=cw(r,s);Jt(t,a,l,c)}else o&&(iw(t,a,o,c),i[e]=void 0)}}const Jh=/(?:Once|Passive|Capture)$/;function aw(t){let e;if(Jh.test(t)){e={};let n;for(;n=t.match(Jh);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Jn(t.slice(2)),e]}function cw(t,e){const n=r=>{const s=r.timeStamp||Di();(Yh||s>=n.attached-1)&&vt(lw(r,n.value),e,5,[r])};return n.value=t,n.attached=sw(),n}function lw(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r(s))}else return e}const Xh=/^on[a-z]/,uw=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Jv(t,r,s):e==="style"?Xv(t,n,r):si(e)?ha(e)||ow(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):hw(t,e,r,s))?tw(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ew(t,e,r,s))};function hw(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Xh.test(e)&&J(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Xh.test(e)&&Pe(n)?!1:e in t}const fw={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Qy.props;const or=t=>{const e=t.props["onUpdate:modelValue"];return B(e)?n=>li(e,n):e};function dw(t){t.target.composing=!0}function Zh(t){const e=t.target;e.composing&&(e.composing=!1,pw(e,"input"))}function pw(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const kC={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=or(s);const i=r||s.props&&s.props.type==="number";Jt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=hi(a)),t._assign(a)}),n&&Jt(t,"change",()=>{t.value=t.value.trim()}),e||(Jt(t,"compositionstart",dw),Jt(t,"compositionend",Zh),Jt(t,"change",Zh))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=or(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&hi(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},OC={deep:!0,created(t,e,n){t._assign=or(n),Jt(t,"change",()=>{const r=t._modelValue,s=rs(t),i=t.checked,o=t._assign;if(B(r)){const a=ua(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(Yn(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(nf(t,i))})},mounted:ef,beforeUpdate(t,e,n){t._assign=or(n),ef(t,e,n)}};function ef(t,{value:e,oldValue:n},r){t._modelValue=e,B(e)?t.checked=ua(e,r.props.value)>-1:Yn(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Kr(e,nf(t,!0)))}const DC={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Yn(e);Jt(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?hi(rs(o)):rs(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=or(r)},mounted(t,{value:e}){tf(t,e)},beforeUpdate(t,e,n){t._assign=or(n)},updated(t,{value:e}){tf(t,e)}};function tf(t,e){const n=t.multiple;if(!(n&&!B(e)&&!Yn(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=rs(i);if(n)B(e)?i.selected=ua(e,o)>-1:i.selected=e.has(o);else if(Kr(rs(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function rs(t){return"_value"in t?t._value:t.value}function nf(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const gw=["ctrl","shift","alt","meta"],mw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>gw.some(n=>t[`${n}Key`]&&!e.includes(n))},PC=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=mw[e[s]];if(i&&i(n,e))return}return t(n,...r)},yw=je({patchProp:uw},Yv);let rf;function vw(){return rf||(rf=vv(yw))}const LC=(...t)=>{const e=vw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ww(r);if(!s)return;const i=e._component;!J(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ww(t){return Pe(t)?document.querySelector(t):t}/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const sf=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",ar=t=>sf?Symbol(t):"_vr_"+t,Ew=ar("rvlm"),of=ar("rvd"),Pi=ar("r"),Ja=ar("rl"),Xa=ar("rvl"),cr=typeof window!="undefined";function _w(t){return t.__esModule||sf&&t[Symbol.toStringTag]==="Module"}const he=Object.assign;function Za(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const ss=()=>{},Iw=/\/$/,Tw=t=>t.replace(Iw,"");function ec(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Cw(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function bw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function af(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Sw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&lr(e.matched[r],n.matched[s])&&cf(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function lr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function cf(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Aw(t[n],e[n]))return!1;return!0}function Aw(t,e){return Array.isArray(t)?lf(t,e):Array.isArray(e)?lf(e,t):t===e}function lf(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Cw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var is;(function(t){t.pop="pop",t.push="push"})(is||(is={}));var os;(function(t){t.back="back",t.forward="forward",t.unknown=""})(os||(os={}));function Rw(t){if(!t)if(cr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Tw(t)}const Nw=/^[^#]+#/;function kw(t,e){return t.replace(Nw,"#")+e}function Ow(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Li=()=>({left:window.pageXOffset,top:window.pageYOffset});function Dw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Ow(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function uf(t,e){return(history.state?history.state.position-e:-1)+t}const tc=new Map;function Pw(t,e){tc.set(t,e)}function Lw(t){const e=tc.get(t);return tc.delete(t),e}let xw=()=>location.protocol+"//"+location.host;function hf(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),af(c,"")}return af(n,t)+r+s}function Mw(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const g=hf(t,location),y=n.value,C=e.value;let v=0;if(f){if(n.value=g,e.value=f,o&&o===y){o=null;return}v=C?f.position-C.position:0}else r(g);s.forEach(b=>{b(n.value,y,{delta:v,type:is.pop,direction:v?v>0?os.forward:os.back:os.unknown})})};function c(){o=n.value}function l(f){s.push(f);const g=()=>{const y=s.indexOf(f);y>-1&&s.splice(y,1)};return i.push(g),g}function u(){const{history:f}=window;!f.state||f.replaceState(he({},f.state,{scroll:Li()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function ff(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Li():null}}function Uw(t){const{history:e,location:n}=window,r={value:hf(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:xw()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(c,l){const u=he({},e.state,ff(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=he({},s.value,e.state,{forward:c,scroll:Li()});i(u.current,u,!0);const h=he({},ff(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function xC(t){t=Rw(t);const e=Uw(t),n=Mw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=he({location:"",base:t,go:r,createHref:kw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Fw(t){return typeof t=="string"||t&&typeof t=="object"}function df(t){return typeof t=="string"||typeof t=="symbol"}const Xt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},pf=ar("nf");var gf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(gf||(gf={}));function ur(t,e){return he(new Error,{type:t,[pf]:!0},e)}function Sn(t,e){return t instanceof Error&&pf in t&&(e==null||!!(t.type&e))}const mf="[^/]+?",Vw={sensitive:!1,strict:!1,start:!0,end:!0},$w=/[.+*?^${}()[\]/\\]/g;function Bw(t,e){const n=he({},Vw,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace($w,"\\$&"),g+=40;else if(f.type===1){const{value:y,repeatable:C,optional:v,regexp:b}=f;i.push({name:y,repeatable:C,optional:v});const L=b||mf;if(L!==mf){g+=10;try{new RegExp(`(${L})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${y}" (${L}): `+z.message)}}let q=C?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;h||(q=v&&l.length<2?`(?:/${q})`:"/"+q),v&&(q+="?"),s+=q,g+=20,v&&(g+=-8),C&&(g+=-20),L===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",y=i[f-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:y,repeatable:C,optional:v}=g,b=y in l?l[y]:"";if(Array.isArray(b)&&!C)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const L=Array.isArray(b)?b.join("/"):b;if(!L)if(v)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=L}}return u}return{re:o,score:r,keys:i,parse:a,stringify:c}}function jw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function qw(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=jw(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const Hw={type:0,value:""},Kw=/[a-zA-Z0-9_]/;function zw(t){if(!t)return[[]];if(t==="/")return[[Hw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:Kw.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Ww(t,e,n){const r=Bw(zw(t.path),n),s=he(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Gw(t,e){const n=[],r=new Map;e=vf({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const g=!f,y=Yw(u);y.aliasOf=f&&f.record;const C=vf(e,u),v=[y];if("alias"in u){const q=typeof u.alias=="string"?[u.alias]:u.alias;for(const z of q)v.push(he({},y,{components:f?f.record.components:y.components,path:z,aliasOf:f?f.record:y}))}let b,L;for(const q of v){const{path:z}=q;if(h&&z[0]!=="/"){const fe=h.record.path,we=fe[fe.length-1]==="/"?"":"/";q.path=h.record.path+(z&&we+z)}if(b=Ww(q,h,C),f?f.alias.push(b):(L=L||b,L!==b&&L.alias.push(b),g&&u.name&&!yf(b)&&o(u.name)),"children"in y){const fe=y.children;for(let we=0;we<fe.length;we++)i(fe[we],b,f&&f.children[we])}f=f||b,c(b)}return L?()=>{o(L)}:ss}function o(u){if(df(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&qw(u,n[h])>=0;)h++;n.splice(h,0,u),u.record.name&&!yf(u)&&r.set(u.record.name,u)}function l(u,h){let f,g={},y,C;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw ur(1,{location:u});C=f.record.name,g=he(Qw(h.params,f.keys.filter(L=>!L.optional).map(L=>L.name)),u.params),y=f.stringify(g)}else if("path"in u)y=u.path,f=n.find(L=>L.re.test(y)),f&&(g=f.parse(y),C=f.record.name);else{if(f=h.name?r.get(h.name):n.find(L=>L.re.test(h.path)),!f)throw ur(1,{location:u,currentLocation:h});C=f.record.name,g=he({},h.params,u.params),y=f.stringify(g)}const v=[];let b=f;for(;b;)v.unshift(b.record),b=b.parent;return{name:C,path:y,params:g,matched:v,meta:Xw(v)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Qw(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Yw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Jw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Jw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function yf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Xw(t){return t.reduce((e,n)=>he(e,n.meta),{})}function vf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const wf=/#/g,Zw=/&/g,eE=/\//g,tE=/=/g,nE=/\?/g,Ef=/\+/g,rE=/%5B/g,sE=/%5D/g,_f=/%5E/g,iE=/%60/g,If=/%7B/g,oE=/%7C/g,Tf=/%7D/g,aE=/%20/g;function nc(t){return encodeURI(""+t).replace(oE,"|").replace(rE,"[").replace(sE,"]")}function cE(t){return nc(t).replace(If,"{").replace(Tf,"}").replace(_f,"^")}function rc(t){return nc(t).replace(Ef,"%2B").replace(aE,"+").replace(wf,"%23").replace(Zw,"%26").replace(iE,"`").replace(If,"{").replace(Tf,"}").replace(_f,"^")}function lE(t){return rc(t).replace(tE,"%3D")}function uE(t){return nc(t).replace(wf,"%23").replace(nE,"%3F")}function hE(t){return t==null?"":uE(t).replace(eE,"%2F")}function xi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function fE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Ef," "),o=i.indexOf("="),a=xi(o<0?i:i.slice(0,o)),c=o<0?null:xi(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function bf(t){let e="";for(let n in t){const r=t[n];if(n=lE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&rc(i)):[r&&rc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function dE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function as(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Zt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ur(4,{from:n,to:e})):h instanceof Error?a(h):Fw(h)?a(ur(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function sc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(pE(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Zt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=_w(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Zt(f,n,r,i,o)()}))}}return s}function pE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Sf(t){const e=At(Pi),n=At(Ja),r=St(()=>e.resolve(Jr(t.to))),s=St(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(lr.bind(null,u));if(f>-1)return f;const g=Af(c[l-2]);return l>1&&Af(u)===g&&h[h.length-1].path!==g?h.findIndex(lr.bind(null,c[l-2])):f}),i=St(()=>s.value>-1&&vE(n.params,r.value.params)),o=St(()=>s.value>-1&&s.value===n.matched.length-1&&cf(n.params,r.value.params));function a(c={}){return yE(c)?e[Jr(t.replace)?"replace":"push"](Jr(t.to)).catch(ss):Promise.resolve()}return{route:r,href:St(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const gE=ih({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Sf,setup(t,{slots:e}){const n=Qr(Sf(t)),{options:r}=At(Pi),s=St(()=>({[Cf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Cf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Kh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),mE=gE;function yE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function vE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Af(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Cf=(t,e,n)=>t!=null?t:e!=null?e:n,wE=ih({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=At(Xa),s=St(()=>t.route||r.value),i=At(of,0),o=St(()=>s.value.matched[i]);Ei(of,i+1),Ei(Ew,o),Ei(Xa,s);const a=Ly();return Oi(()=>[a.value,o.value,t.name],([c,l,u],[h,f,g])=>{l&&(l.instances[u]=c,f&&f!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=f.leaveGuards),l.updateGuards.size||(l.updateGuards=f.updateGuards))),c&&l&&(!f||!lr(l,f)||!h)&&(l.enterCallbacks[u]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=s.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return Rf(n.default,{Component:u,route:c});const f=l.props[t.name],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,C=Kh(u,he({},g,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return Rf(n.default,{Component:C,route:c})||C}}});function Rf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const EE=wE;function MC(t){const e=Gw(t.routes,t),n=t.parseQuery||fE,r=t.stringifyQuery||bf,s=t.history,i=as(),o=as(),a=as(),c=xy(Xt);let l=Xt;cr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Za.bind(null,E=>""+E),h=Za.bind(null,hE),f=Za.bind(null,xi);function g(E,M){let N,U;return df(E)?(N=e.getRecordMatcher(E),U=M):U=E,e.addRoute(U,N)}function y(E){const M=e.getRecordMatcher(E);M&&e.removeRoute(M)}function C(){return e.getRoutes().map(E=>E.record)}function v(E){return!!e.getRecordMatcher(E)}function b(E,M){if(M=he({},M||c.value),typeof E=="string"){const Y=ec(n,E,M.path),d=e.resolve({path:Y.path},M),p=s.createHref(Y.fullPath);return he(Y,d,{params:f(d.params),hash:xi(Y.hash),redirectedFrom:void 0,href:p})}let N;if("path"in E)N=he({},E,{path:ec(n,E.path,M.path).path});else{const Y=he({},E.params);for(const d in Y)Y[d]==null&&delete Y[d];N=he({},E,{params:h(E.params)}),M.params=h(M.params)}const U=e.resolve(N,M),ce=E.hash||"";U.params=u(f(U.params));const ge=bw(r,he({},E,{hash:cE(ce),path:U.path})),X=s.createHref(ge);return he({fullPath:ge,hash:ce,query:r===bf?dE(E.query):E.query||{}},U,{redirectedFrom:void 0,href:X})}function L(E){return typeof E=="string"?ec(n,E,c.value.path):he({},E)}function q(E,M){if(l!==E)return ur(8,{from:M,to:E})}function z(E){return Z(E)}function fe(E){return z(he(L(E),{replace:!0}))}function we(E){const M=E.matched[E.matched.length-1];if(M&&M.redirect){const{redirect:N}=M;let U=typeof N=="function"?N(E):N;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=L(U):{path:U},U.params={}),he({query:E.query,hash:E.hash,params:E.params},U)}}function Z(E,M){const N=l=b(E),U=c.value,ce=E.state,ge=E.force,X=E.replace===!0,Y=we(N);if(Y)return Z(he(L(Y),{state:ce,force:ge,replace:X}),M||N);const d=N;d.redirectedFrom=M;let p;return!ge&&Sw(r,U,N)&&(p=ur(16,{to:d,from:U}),zn(U,U,!0,!1)),(p?Promise.resolve(p):de(d,U)).catch(m=>Sn(m)?m:pe(m,d,U)).then(m=>{if(m){if(Sn(m,2))return Z(he(L(m.to),{state:ce,force:ge,replace:X}),M||d)}else m=Be(d,U,!0,X,ce);return $e(d,U,m),m})}function Te(E,M){const N=q(E,M);return N?Promise.reject(N):Promise.resolve()}function de(E,M){let N;const[U,ce,ge]=_E(E,M);N=sc(U.reverse(),"beforeRouteLeave",E,M);for(const Y of U)Y.leaveGuards.forEach(d=>{N.push(Zt(d,E,M))});const X=Te.bind(null,E,M);return N.push(X),hr(N).then(()=>{N=[];for(const Y of i.list())N.push(Zt(Y,E,M));return N.push(X),hr(N)}).then(()=>{N=sc(ce,"beforeRouteUpdate",E,M);for(const Y of ce)Y.updateGuards.forEach(d=>{N.push(Zt(d,E,M))});return N.push(X),hr(N)}).then(()=>{N=[];for(const Y of E.matched)if(Y.beforeEnter&&!M.matched.includes(Y))if(Array.isArray(Y.beforeEnter))for(const d of Y.beforeEnter)N.push(Zt(d,E,M));else N.push(Zt(Y.beforeEnter,E,M));return N.push(X),hr(N)}).then(()=>(E.matched.forEach(Y=>Y.enterCallbacks={}),N=sc(ge,"beforeRouteEnter",E,M),N.push(X),hr(N))).then(()=>{N=[];for(const Y of o.list())N.push(Zt(Y,E,M));return N.push(X),hr(N)}).catch(Y=>Sn(Y,8)?Y:Promise.reject(Y))}function $e(E,M,N){for(const U of a.list())U(E,M,N)}function Be(E,M,N,U,ce){const ge=q(E,M);if(ge)return ge;const X=M===Xt,Y=cr?history.state:{};N&&(U||X?s.replace(E.fullPath,he({scroll:X&&Y&&Y.scroll},ce)):s.push(E.fullPath,ce)),c.value=E,zn(E,M,N,X),pt()}let We;function Kt(){We=s.listen((E,M,N)=>{const U=b(E),ce=we(U);if(ce){Z(he(ce,{replace:!0}),U).catch(ss);return}l=U;const ge=c.value;cr&&Pw(uf(ge.fullPath,N.delta),Li()),de(U,ge).catch(X=>Sn(X,4|8)?X:Sn(X,2)?(Z(X.to,U).then(Y=>{Sn(Y,4|16)&&!N.delta&&N.type===is.pop&&s.go(-1,!1)}).catch(ss),Promise.reject()):(N.delta&&s.go(-N.delta,!1),pe(X,U,ge))).then(X=>{X=X||Be(U,ge,!1),X&&(N.delta?s.go(-N.delta,!1):N.type===is.pop&&Sn(X,4|16)&&s.go(-1,!1)),$e(U,ge,X)}).catch(ss)})}let Hn=as(),Kn=as(),Re;function pe(E,M,N){pt(E);const U=Kn.list();return U.length?U.forEach(ce=>ce(E,M,N)):console.error(E),Promise.reject(E)}function ae(){return Re&&c.value!==Xt?Promise.resolve():new Promise((E,M)=>{Hn.add([E,M])})}function pt(E){Re||(Re=!0,Kt(),Hn.list().forEach(([M,N])=>E?N(E):M()),Hn.reset())}function zn(E,M,N,U){const{scrollBehavior:ce}=t;if(!cr||!ce)return Promise.resolve();const ge=!N&&Lw(uf(E.fullPath,0))||(U||!N)&&history.state&&history.state.scroll||null;return Mh().then(()=>ce(E,M,ge)).then(X=>X&&Dw(X)).catch(X=>pe(X,E,M))}const xt=E=>s.go(E);let It;const gt=new Set;return{currentRoute:c,addRoute:g,removeRoute:y,hasRoute:v,getRoutes:C,resolve:b,options:t,push:z,replace:fe,go:xt,back:()=>xt(-1),forward:()=>xt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Kn.add,isReady:ae,install(E){const M=this;E.component("RouterLink",mE),E.component("RouterView",EE),E.config.globalProperties.$router=M,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>Jr(c)}),cr&&!It&&c.value===Xt&&(It=!0,z(s.location).catch(ce=>{}));const N={};for(const ce in Xt)N[ce]=St(()=>c.value[ce]);E.provide(Pi,M),E.provide(Ja,Qr(N)),E.provide(Xa,c);const U=E.unmount;gt.add(E),E.unmount=function(){gt.delete(E),gt.size<1&&(l=Xt,We&&We(),c.value=Xt,It=!1,Re=!1),U()}}}}function hr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function _E(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>lr(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>lr(l,c))||s.push(c))}return[n,r,s]}function UC(){return At(Pi)}function FC(){return At(Ja)}/**
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
 */const IE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},TE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},bE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),r.push(n[u],n[h],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(IE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):TE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const f=i<<2|a>>4;if(r.push(f),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},SE=function(t){try{return bE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class AE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ke(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nf(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function kf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Of(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CE(){return ke().indexOf("Electron/")>=0}function Df(){const t=ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function RE(){return ke().indexOf("MSAppHost/")>=0}/**
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
 */const NE="FirebaseError";class fr extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=NE,Object.setPrototypeOf(this,fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cs.prototype.create)}}class cs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?kE(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new fr(s,a,r)}}function kE(t,e){return t.replace(OE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const OE=/\{\$([^}]+)}/g;function DE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Mi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Pf(i)&&Pf(o)){if(!Mi(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Pf(t){return t!==null&&typeof t=="object"}/**
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
 */function ls(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function us(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function hs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function PE(t,e){const n=new LE(t,e);return n.subscribe.bind(n)}class LE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ic),s.error===void 0&&(s.error=ic),s.complete===void 0&&(s.complete=ic);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ic(){}/**
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
 */function Ye(t){return t&&t._delegate?t._delegate:t}class dr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const An="[DEFAULT]";/**
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
 */class ME{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new AE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(FE(e))try{this.getOrInitializeService({instanceIdentifier:An})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=An){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=An){return this.instances.has(e)}getOptions(e=An){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:UE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=An){return this.component?this.component.multipleInstances?e:An:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function UE(t){return t===An?void 0:t}function FE(t){return t.instantiationMode==="EAGER"}/**
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
 */class VE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ME(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const $E={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},BE=se.INFO,jE={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},qE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=jE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oc{constructor(e){this.name=e,this._logLevel=BE,this._logHandler=qE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$E[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}/**
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
 */class HE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ac="@firebase/app",Lf="0.7.9";/**
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
 */const cc=new oc("@firebase/app"),zE="@firebase/app-compat",WE="@firebase/analytics-compat",GE="@firebase/analytics",QE="@firebase/app-check-compat",YE="@firebase/app-check",JE="@firebase/auth",XE="@firebase/auth-compat",ZE="@firebase/database",e_="@firebase/database-compat",t_="@firebase/functions",n_="@firebase/functions-compat",r_="@firebase/installations",s_="@firebase/installations-compat",i_="@firebase/messaging",o_="@firebase/messaging-compat",a_="@firebase/performance",c_="@firebase/performance-compat",l_="@firebase/remote-config",u_="@firebase/remote-config-compat",h_="@firebase/storage",f_="@firebase/storage-compat",d_="@firebase/firestore",p_="@firebase/firestore-compat",g_="firebase",m_="9.5.0";/**
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
 */const xf="[DEFAULT]",y_={[ac]:"fire-core",[zE]:"fire-core-compat",[GE]:"fire-analytics",[WE]:"fire-analytics-compat",[YE]:"fire-app-check",[QE]:"fire-app-check-compat",[JE]:"fire-auth",[XE]:"fire-auth-compat",[ZE]:"fire-rtdb",[e_]:"fire-rtdb-compat",[t_]:"fire-fn",[n_]:"fire-fn-compat",[r_]:"fire-iid",[s_]:"fire-iid-compat",[i_]:"fire-fcm",[o_]:"fire-fcm-compat",[a_]:"fire-perf",[c_]:"fire-perf-compat",[l_]:"fire-rc",[u_]:"fire-rc-compat",[h_]:"fire-gcs",[f_]:"fire-gcs-compat",[d_]:"fire-fst",[p_]:"fire-fst-compat","fire-js":"fire-js",[g_]:"fire-js-all"};/**
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
 */const Ui=new Map,lc=new Map;function v_(t,e){try{t.container.addComponent(e)}catch(n){cc.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fs(t){const e=t.name;if(lc.has(e))return cc.debug(`There were multiple attempts to register component ${e}.`),!1;lc.set(e,t);for(const n of Ui.values())v_(n,t);return!0}function uc(t,e){return t.container.getProvider(e)}/**
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
 */const w_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Fi=new cs("app","Firebase",w_);/**
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
 */class E_{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fi.create("app-deleted",{appName:this._name})}}/**
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
 */const ds=m_;function VC(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:xf,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Fi.create("bad-app-name",{appName:String(r)});const s=Ui.get(r);if(s){if(Mi(t,s.options)&&Mi(n,s.config))return s;throw Fi.create("duplicate-app",{appName:r})}const i=new VE(r);for(const a of lc.values())i.addComponent(a);const o=new E_(t,n,i);return Ui.set(r,o),o}function Mf(t=xf){const e=Ui.get(t);if(!e)throw Fi.create("no-app",{appName:t});return e}function en(t,e,n){var r;let s=(r=y_[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cc.warn(a.join(" "));return}fs(new dr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */function __(t){fs(new dr("platform-logger",e=>new HE(e),"PRIVATE")),en(ac,Lf,t),en(ac,Lf,"esm2017"),en("fire-js","")}__("");/*! *****************************************************************************
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
***************************************************************************** */function hc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Uf(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const I_=Uf,Ff=new cs("auth","Firebase",Uf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf=new oc("@firebase/auth");function Vi(t,...e){Vf.logLevel<=se.ERROR&&Vf.error(`Auth (${ds}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t,...e){throw fc(t,...e)}function Ot(t,...e){return fc(t,...e)}function T_(t,e,n){const r=Object.assign(Object.assign({},I_()),{[e]:n});return new cs("auth","Firebase",r).create(e,{appName:t.name})}function fc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ff.create(t,...e)}function H(t,e,...n){if(!t)throw fc(e,...n)}function Vt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vi(e),new Error(e)}function $t(t,e){t||Vt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f=new Map;function Bt(t){$t(t instanceof Function,"Expected a class definition");let e=$f.get(t);return e?($t(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$f.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(t,e){const n=uc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Mi(i,e!=null?e:{}))return s;_t(s,"already-initialized")}return n.initialize({options:e})}function S_(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Bt);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function A_(){return Bf()==="http:"||Bf()==="https:"}function Bf(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(A_()||kf()||"connection"in navigator)?navigator.onLine:!0}function R_(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n){this.shortDelay=e,this.longDelay=n,$t(n>e,"Short delay should be less than long delay!"),this.isMobile=Nf()||Of()}get(){return C_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(t,e){$t(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_=new ps(3e4,6e4);function gs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function pr(t,e,n,r,s={}){return jf(t,s,()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ls(Object.assign({key:t.config.apiKey},o)).slice(1),c=new(gc.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&c.set("X-Firebase-Locale",t.languageCode),gc.fetch()(qf(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function jf(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},N_),e);try{const s=new O_(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw mc(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw mc(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw mc(t,"email-already-in-use",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw T_(t,u,l);_t(t,u)}}catch(s){if(s instanceof fr)throw s;_t(t,"network-request-failed")}}async function ms(t,e,n,r,s={}){const i=await pr(t,e,n,r,s);return"mfaPendingCredential"in i&&_t(t,"multi-factor-auth-required",{_serverResponse:i}),i}function qf(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?pc(t.config,s):`${t.config.apiScheme}://${s}`}class O_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ot(this.auth,"timeout")),k_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ot(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D_(t,e){return pr(t,"POST","/v1/accounts:delete",e)}async function P_(t,e){return pr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function L_(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),s=vc(r);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ys(yc(s.auth_time)),issuedAtTime:ys(yc(s.iat)),expirationTime:ys(yc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function yc(t){return Number(t)*1e3}function vc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Vi("JWT malformed, contained fewer than 3 sections"),null;try{const s=SE(n);return s?JSON.parse(s):(Vi("Failed to decode base64 JWT payload"),null)}catch(s){return Vi("Caught error parsing JWT payload as JSON",s),null}}function x_(t){const e=vc(t);return H(e,"internal-error"),H(typeof e.exp!="undefined","internal-error"),H(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof fr&&M_(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function M_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ys(this.lastLoginAt),this.creationTime=ys(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $i(t){var e;const n=t.auth,r=await t.getIdToken(),s=await gr(t,P_(n,{idToken:r}));H(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=((e=i.providerUserInfo)===null||e===void 0?void 0:e.length)?$_(i.providerUserInfo):[],a=V_(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a==null?void 0:a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Hf(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function F_(t){const e=Ye(t);await $i(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function V_(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function $_(t){return t.map(e=>{var{providerId:n}=e,r=hc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B_(t,e){const n=await jf(t,{},()=>{const r=ls({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=qf(t,s,"/v1/token",`key=${i}`);return gc.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken!="undefined","internal-error"),H(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):x_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await B_(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new vs;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vs,this.toJSON())}_performRefresh(){return Vt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,e){H(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Cn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=hc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new U_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new Hf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await gr(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return L_(this,e)}reload(){return F_(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $i(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await gr(this,D_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(l=n.createdAt)!==null&&l!==void 0?l:void 0,L=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:q,emailVerified:z,isAnonymous:fe,providerData:we,stsTokenManager:Z}=n;H(q&&Z,e,"internal-error");const Te=vs.fromJSON(this.name,Z);H(typeof q=="string",e,"internal-error"),tn(h,e.name),tn(f,e.name),H(typeof z=="boolean",e,"internal-error"),H(typeof fe=="boolean",e,"internal-error"),tn(g,e.name),tn(y,e.name),tn(C,e.name),tn(v,e.name),tn(b,e.name),tn(L,e.name);const de=new Cn({uid:q,auth:e,email:f,emailVerified:z,displayName:h,isAnonymous:fe,photoURL:y,phoneNumber:g,tenantId:C,stsTokenManager:Te,createdAt:b,lastLoginAt:L});return we&&Array.isArray(we)&&(de.providerData=we.map($e=>Object.assign({},$e))),v&&(de._redirectEventId=v),de}static async _fromIdTokenResponse(e,n,r=!1){const s=new vs;s.updateFromServerResponse(n);const i=new Cn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await $i(i),i}}/**
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
 */class Kf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Kf.type="NONE";const zf=Kf;/**
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
 */function Bi(t,e,n){return`firebase:${t}:${e}:${n}`}class mr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Bi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Bi("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new mr(Bt(zf),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Bt(zf);const o=Bi(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Cn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new mr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new mr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xf(e))return"Blackberry";if(Zf(e))return"Webos";if(wc(e))return"Safari";if((e.includes("chrome/")||Qf(e))&&!e.includes("edge/"))return"Chrome";if(Jf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Gf(t=ke()){return/firefox\//i.test(t)}function wc(t=ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qf(t=ke()){return/crios\//i.test(t)}function Yf(t=ke()){return/iemobile/i.test(t)}function Jf(t=ke()){return/android/i.test(t)}function Xf(t=ke()){return/blackberry/i.test(t)}function Zf(t=ke()){return/webos/i.test(t)}function ji(t=ke()){return/iphone|ipad|ipod/i.test(t)}function j_(t=ke()){var e;return ji(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function q_(){return Df()&&document.documentMode===10}function ed(t=ke()){return ji(t)||Jf(t)||Zf(t)||Xf(t)||/windows phone/i.test(t)||Yf(t)}function H_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(t,e=[]){let n;switch(t){case"Browser":n=Wf(ke());break;case"Worker":n=`${Wf(ke())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ds}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nd(this),this.idTokenSubscription=new nd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ff,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bt(n)),this._initializationPromise=this.queue(async()=>{var r,s;this._deleted||(this.persistenceManager=await mr.create(this,e),!this._deleted&&(((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $i(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=R_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ye(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Bt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new cs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await mr.create(this,[Bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=td(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function qi(t){return Ye(t)}class nd{constructor(e){this.auth=e,this.observer=null,this.addObserver=PE(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vt("not implemented")}_getIdTokenResponse(e){return Vt("not implemented")}_linkToIdToken(e,n){return Vt("not implemented")}_getReauthenticationResolver(e){return Vt("not implemented")}}async function z_(t,e){return pr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W_(t,e){return ms(t,"POST","/v1/accounts:signInWithPassword",gs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G_(t,e){return ms(t,"POST","/v1/accounts:signInWithEmailLink",gs(t,e))}async function Q_(t,e){return ms(t,"POST","/v1/accounts:signInWithEmailLink",gs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws extends Ec{constructor(e,n,r,s=null){super("password",r);this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ws(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ws(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return W_(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return G_(e,{email:this._email,oobCode:this._password});default:_t(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return z_(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Q_(e,{idToken:n,email:this._email,oobCode:this._password});default:_t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yr(t,e){return ms(t,"POST","/v1/accounts:signInWithIdp",gs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_="http://localhost";class Rn extends Ec{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Rn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=hc(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Rn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return yr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,yr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,yr(e,n)}buildRequest(){const e={requestUri:Y_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ls(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function X_(t){const e=us(hs(t)).link,n=e?us(hs(e)).deep_link_id:null,r=us(hs(t)).deep_link_id;return(r?us(hs(r)).link:null)||r||n||e||t}class _c{constructor(e){var n,r,s,i,o,a;const c=us(hs(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=J_((s=c.mode)!==null&&s!==void 0?s:null);H(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=X_(e);try{return new _c(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(){this.providerId=vr.PROVIDER_ID}static credential(e,n){return ws._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=_c.parseLink(n);return H(r,"argument-error"),ws._fromEmailAndCode(e,r.code,r.tenantId)}}vr.PROVIDER_ID="password";vr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Es extends rd{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Es{constructor(){super("facebook.com")}static credential(e){return Rn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";nn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends Es{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Rn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rn.credential(n,r)}catch{return null}}}rn.GOOGLE_SIGN_IN_METHOD="google.com";rn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends Es{constructor(){super("github.com")}static credential(e){return Rn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.GITHUB_SIGN_IN_METHOD="github.com";sn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends Es{constructor(){super("twitter.com")}static credential(e,n){return Rn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return on.credential(n,r)}catch{return null}}}on.TWITTER_SIGN_IN_METHOD="twitter.com";on.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z_(t,e){return ms(t,"POST","/v1/accounts:signUp",gs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Cn._fromIdTokenResponse(e,r,s),o=sd(r);return new Nn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=sd(r);return new Nn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function sd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi extends fr{constructor(e,n,r,s){var i;super(n.code,n.message);this.operationType=r,this.user=s,Object.setPrototypeOf(this,Hi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Hi(e,n,r,s)}}function id(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Hi._fromErrorAndOperation(t,i,e,r):i})}async function eI(t,e,n=!1){const r=await gr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Nn._forOperation(t,"link",r)}/**
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
 */async function tI(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await gr(t,id(r,s,e,t),n);H(i.idToken,r,"internal-error");const o=vc(i.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),Nn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&_t(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function od(t,e,n=!1){const r="signIn",s=await id(t,r,e),i=await Nn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function nI(t,e){return od(qi(t),e)}async function $C(t,e,n){const r=qi(t),s=await Z_(r,{returnSecureToken:!0,email:e,password:n}),i=await Nn._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function BC(t,e,n){return nI(Ye(t),vr.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rI(t,e){return pr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jC(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ye(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await gr(r,rI(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}const Ki="__sak";/**
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
 */class ad{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ki,"1"),this.storage.removeItem(Ki),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(){const t=ke();return wc(t)||ji(t)}const iI=1e3,oI=10;class cd extends ad{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=sI()&&H_(),this.fallbackToPolling=ed(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);q_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,oI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},iI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}cd.type="LOCAL";const aI=cd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld extends ad{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ld.type="SESSION";const ud=ld;/**
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
 */function cI(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class zi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new zi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await cI(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class lI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ic("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return window}function uI(t){Dt().location.href=t}/**
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
 */function hd(){return typeof Dt().WorkerGlobalScope!="undefined"&&typeof Dt().importScripts=="function"}async function hI(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function dI(){return hd()?self:null}/**
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
 */const fd="firebaseLocalStorageDb",pI=1,Wi="firebaseLocalStorage",dd="fbase_key";class _s{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Gi(t,e){return t.transaction([Wi],e?"readwrite":"readonly").objectStore(Wi)}function gI(){const t=indexedDB.deleteDatabase(fd);return new _s(t).toPromise()}function Tc(){const t=indexedDB.open(fd,pI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wi,{keyPath:dd})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wi)?e(r):(r.close(),await gI(),e(await Tc()))})})}async function pd(t,e,n){const r=Gi(t,!0).put({[dd]:e,value:n});return new _s(r).toPromise()}async function mI(t,e){const n=Gi(t,!1).get(e),r=await new _s(n).toPromise();return r===void 0?null:r.value}function gd(t,e){const n=Gi(t,!0).delete(e);return new _s(n).toPromise()}const yI=800,vI=3;class md{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>vI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zi._getInstance(dI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hI(),!this.activeServiceWorker)return;this.sender=new lI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tc();return await pd(e,Ki,"1"),await gd(e,Ki),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>pd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>mI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Gi(s,!1).getAll();return new _s(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}md.type="LOCAL";const wI=md;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function _I(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ot("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",EI().appendChild(r)})}function II(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ps(3e4,6e4);/**
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
 */function TI(t,e){return e?Bt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class bc extends Ec{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return yr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return yr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return yr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bI(t){return od(t.auth,new bc(t),t.bypassAuthState)}function SI(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),tI(n,new bc(t),t.bypassAuthState)}async function AI(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),eI(n,new bc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bI;case"linkViaPopup":case"linkViaRedirect":return AI;case"reauthViaPopup":case"reauthViaRedirect":return SI;default:_t(this.auth,"internal-error")}}resolve(e){$t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=new ps(2e3,1e4);class wr extends yd{constructor(e,n,r,s,i){super(e,n,s,i);this.provider=r,this.authWindow=null,this.pollId=null,wr.currentPopupAction&&wr.currentPopupAction.cancel(),wr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){$t(this.filter.length===1,"Popup operations only handle one event");const e=Ic();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,CI.get())};e()}}wr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI="pendingRedirect",Sc=new Map;class NI extends yd{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=Sc.get(this.auth._key());if(!e){try{const r=await kI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Sc.set(this.auth._key(),e)}return this.bypassAuthState||Sc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kI(t,e){const n=DI(e),r=OI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function OI(t){return Bt(t._redirectPersistence)}function DI(t){return Bi(RI,t.config.apiKey,t.name)}async function PI(t,e,n=!1){const r=qi(t),s=TI(r,e),o=await new NI(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=10*60*1e3;class xI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!wd(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ot(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LI&&this.cachedEventUids.clear(),this.cachedEventUids.has(vd(e))}saveEventToCache(e){this.cachedEventUids.add(vd(e)),this.lastProcessedEventTime=Date.now()}}function vd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function wd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wd(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UI(t,e={}){return pr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VI=/^https?/;async function $I(t){if(t.config.emulator)return;const{authorizedDomains:e}=await UI(t);for(const n of e)try{if(BI(n))return}catch{}_t(t,"unauthorized-domain")}function BI(t){const e=dc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!VI.test(n))return!1;if(FI.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const jI=new ps(3e4,6e4);function Ed(){const t=Dt().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qI(t){return new Promise((e,n)=>{var r,s,i;function o(){Ed(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ed(),n(Ot(t,"network-request-failed"))},timeout:jI.get()})}if((s=(r=Dt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0?void 0:s.Iframe)e(gapi.iframes.getContext());else if((i=Dt().gapi)===null||i===void 0?void 0:i.load)o();else{const a=II("iframefcb");return Dt()[a]=()=>{gapi.load?o():n(Ot(t,"network-request-failed"))},_I(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw Qi=null,e})}let Qi=null;function HI(t){return Qi=Qi||qI(t),Qi}/**
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
 */const KI=new ps(5e3,15e3),zI="__/auth/iframe",WI="emulator/auth/iframe",GI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YI(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?pc(e,WI):`https://${t.config.authDomain}/${zI}`,r={apiKey:e.apiKey,appName:t.name,v:ds},s=QI.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ls(r).slice(1)}`}async function JI(t){const e=await HI(t),n=Dt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:YI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:GI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ot(t,"network-request-failed"),a=Dt().setTimeout(()=>{i(o)},KI.get());function c(){Dt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const XI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZI=500,eT=600,tT="_blank",nT="http://localhost";class _d{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rT(t,e,n,r=ZI,s=eT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},XI),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ke().toLowerCase();n&&(a=Qf(l)?tT:n),Gf(l)&&(e=e||nT,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(j_(l)&&a!=="_self")return sT(e||"",a),new _d(null);const h=window.open(e||"",a,u);H(h,t,"popup-blocked");try{h.focus()}catch{}return new _d(h)}function sT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const iT="__/auth/handler",oT="emulator/auth/handler";function Id(t,e,n,r,s,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ds,eventId:s};if(e instanceof rd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",DE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Es){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${aT(t)}?${ls(a).slice(1)}`}function aT({config:t}){return t.emulator?pc(t,oT):`https://${t.authDomain}/${iT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="webStorageSupport";class cT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ud,this._completeRedirectFn=PI}async _openPopup(e,n,r,s){var i;$t((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Id(e,n,r,dc(),s);return rT(e,o,Ic())}async _openRedirect(e,n,r,s){return await this._originValidation(e),uI(Id(e,n,r,dc(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):($t(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r}async initAndGetManager(e){const n=await JI(e),r=new xI(e);return n.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ac,{type:Ac},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ac];o!==void 0&&n(!!o),_t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$I(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ed()||wc()||ji()}}const lT=cT;var Td="@firebase/auth",bd="0.19.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function fT(t){fs(new dr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:i}=r.options;return(o=>{H(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),H(!(i==null?void 0:i.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:i,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:td(t)},c=new K_(o,a);return S_(c,n),c})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fs(new dr("auth-internal",e=>{const n=qi(e.getProvider("auth").getImmediate());return(r=>new uT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(Td,bd,hT(t)),en(Td,bd,"esm2017")}/**
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
 */function qC(t=Mf()){const e=uc(t,"auth");return e.isInitialized()?e.getImmediate():b_(t,{popupRedirectResolver:lT,persistence:[wI,aI,ud]})}fT("Browser");var dT=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},D,Cc=Cc||{},K=dT||self;function Yi(){}function Rc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Is(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function pT(t){return Object.prototype.hasOwnProperty.call(t,Nc)&&t[Nc]||(t[Nc]=++gT)}var Nc="closure_uid_"+(1e9*Math.random()>>>0),gT=0;function mT(t,e,n){return t.call.apply(t.bind,arguments)}function yT(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Le(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Le=mT:Le=yT,Le.apply(null,arguments)}function Ji(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function xe(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function an(){this.s=this.s,this.o=this.o}var vT=0,wT={};an.prototype.s=!1;an.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),vT!=0)){var t=pT(this);delete wT[t]}};an.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Sd=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Ad=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function ET(t){e:{var e=h0;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Cd(t){return Array.prototype.concat.apply([],arguments)}function kc(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Xi(t){return/^[\s\xa0]*$/.test(t)}var Rd=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Je(t,e){return t.indexOf(e)!=-1}function Oc(t,e){return t<e?-1:t>e?1:0}var Xe;e:{var Nd=K.navigator;if(Nd){var kd=Nd.userAgent;if(kd){Xe=kd;break e}}Xe=""}function Dc(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Od(t){const e={};for(const n in t)e[n]=t[n];return e}var Dd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Pd(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Dd.length;i++)n=Dd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Pc(t){return Pc[" "](t),t}Pc[" "]=Yi;function _T(t){var e=bT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var IT=Je(Xe,"Opera"),Er=Je(Xe,"Trident")||Je(Xe,"MSIE"),Ld=Je(Xe,"Edge"),Lc=Ld||Er,xd=Je(Xe,"Gecko")&&!(Je(Xe.toLowerCase(),"webkit")&&!Je(Xe,"Edge"))&&!(Je(Xe,"Trident")||Je(Xe,"MSIE"))&&!Je(Xe,"Edge"),TT=Je(Xe.toLowerCase(),"webkit")&&!Je(Xe,"Edge");function Md(){var t=K.document;return t?t.documentMode:void 0}var Zi;e:{var xc="",Mc=function(){var t=Xe;if(xd)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ld)return/Edge\/([\d\.]+)/.exec(t);if(Er)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(TT)return/WebKit\/(\S+)/.exec(t);if(IT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Mc&&(xc=Mc?Mc[1]:""),Er){var Uc=Md();if(Uc!=null&&Uc>parseFloat(xc)){Zi=String(Uc);break e}}Zi=xc}var bT={};function ST(){return _T(function(){let t=0;const e=Rd(String(Zi)).split("."),n=Rd("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=Oc(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||Oc(s[2].length==0,i[2].length==0)||Oc(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var Fc;if(K.document&&Er){var Ud=Md();Fc=Ud||parseInt(Zi,10)||void 0}else Fc=void 0;var AT=Fc,CT=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{K.addEventListener("test",Yi,e),K.removeEventListener("test",Yi,e)}catch{}return t}();function qe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}qe.prototype.h=function(){this.defaultPrevented=!0};function Ts(t,e){if(qe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(xd){e:{try{Pc(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:RT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ts.Z.h.call(this)}}xe(Ts,qe);var RT={2:"touch",3:"pen",4:"mouse"};Ts.prototype.h=function(){Ts.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var bs="closure_listenable_"+(1e6*Math.random()|0),NT=0;function kT(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++NT,this.ca=this.fa=!1}function eo(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function to(t){this.src=t,this.g={},this.h=0}to.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=$c(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new kT(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function Vc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Sd(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(eo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function $c(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var Bc="closure_lm_"+(1e6*Math.random()|0),jc={};function Fd(t,e,n,r,s){if(r&&r.once)return $d(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Fd(t,e[i],n,r,s);return null}return n=zc(n),t&&t[bs]?t.N(e,n,Is(r)?!!r.capture:!!r,s):Vd(t,e,n,!1,r,s)}function Vd(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Is(s)?!!s.capture:!!s,a=Hc(t);if(a||(t[Bc]=a=new to(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=OT(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)CT||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(jd(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function OT(){function t(n){return e.call(t.src,t.listener,n)}var e=DT;return t}function $d(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)$d(t,e[i],n,r,s);return null}return n=zc(n),t&&t[bs]?t.O(e,n,Is(r)?!!r.capture:!!r,s):Vd(t,e,n,!0,r,s)}function Bd(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Bd(t,e[i],n,r,s);else r=Is(r)?!!r.capture:!!r,n=zc(n),t&&t[bs]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=$c(i,n,r,s),-1<n&&(eo(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Hc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=$c(e,n,r,s)),(n=-1<t?e[t]:null)&&qc(n))}function qc(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[bs])Vc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(jd(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Hc(e))?(Vc(n,t),n.h==0&&(n.src=null,e[Bc]=null)):eo(t)}}}function jd(t){return t in jc?jc[t]:jc[t]="on"+t}function DT(t,e){if(t.ca)t=!0;else{e=new Ts(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&qc(t),t=n.call(r,e)}return t}function Hc(t){return t=t[Bc],t instanceof to?t:null}var Kc="__closure_events_fn_"+(1e9*Math.random()>>>0);function zc(t){return typeof t=="function"?t:(t[Kc]||(t[Kc]=function(e){return t.handleEvent(e)}),t[Kc])}function Oe(){an.call(this),this.i=new to(this),this.P=this,this.I=null}xe(Oe,an);Oe.prototype[bs]=!0;Oe.prototype.removeEventListener=function(t,e,n,r){Bd(this,t,e,n,r)};function Me(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new qe(e,t);else if(e instanceof qe)e.target=e.target||t;else{var s=e;e=new qe(r,t),Pd(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=no(o,r,!0,e)&&s}if(o=e.g=t,s=no(o,r,!0,e)&&s,s=no(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=no(o,r,!1,e)&&s}Oe.prototype.M=function(){if(Oe.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)eo(n[r]);delete t.g[e],t.h--}}this.I=null};Oe.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Oe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function no(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Vc(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Wc=K.JSON.stringify;function PT(){var t=Hd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class LT{constructor(){this.h=this.g=null}add(e,n){const r=qd.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var qd=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new xT,t=>t.reset());class xT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function MT(t){K.setTimeout(()=>{throw t},0)}function Gc(t,e){Qc||UT(),Yc||(Qc(),Yc=!0),Hd.add(t,e)}var Qc;function UT(){var t=K.Promise.resolve(void 0);Qc=function(){t.then(FT)}}var Yc=!1,Hd=new LT;function FT(){for(var t;t=PT();){try{t.h.call(t.g)}catch(n){MT(n)}var e=qd;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Yc=!1}function ro(t,e){Oe.call(this),this.h=t||1,this.g=e||K,this.j=Le(this.kb,this),this.l=Date.now()}xe(ro,Oe);D=ro.prototype;D.da=!1;D.S=null;D.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Me(this,"tick"),this.da&&(Jc(this),this.start()))}};D.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Jc(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}D.M=function(){ro.Z.M.call(this),Jc(this),delete this.g};function Xc(t,e,n){if(typeof t=="function")n&&(t=Le(t,n));else if(t&&typeof t.handleEvent=="function")t=Le(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function Kd(t){t.g=Xc(()=>{t.g=null,t.i&&(t.i=!1,Kd(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class VT extends an{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Kd(this)}M(){super.M(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ss(t){an.call(this),this.h=t,this.g={}}xe(Ss,an);var zd=[];function Wd(t,e,n,r){Array.isArray(n)||(n&&(zd[0]=n.toString()),n=zd);for(var s=0;s<n.length;s++){var i=Fd(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Gd(t){Dc(t.g,function(e,n){this.g.hasOwnProperty(n)&&qc(e)},t),t.g={}}Ss.prototype.M=function(){Ss.Z.M.call(this),Gd(this)};Ss.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function so(){this.g=!0}so.prototype.Aa=function(){this.g=!1};function $T(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function BT(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function _r(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+qT(t,n)+(r?" "+r:"")})}function jT(t,e){t.info(function(){return"TIMEOUT: "+e})}so.prototype.info=function(){};function qT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Wc(n)}catch{return e}}var kn={},Qd=null;function io(){return Qd=Qd||new Oe}kn.Ma="serverreachability";function Yd(t){qe.call(this,kn.Ma,t)}xe(Yd,qe);function As(t){const e=io();Me(e,new Yd(e,t))}kn.STAT_EVENT="statevent";function Jd(t,e){qe.call(this,kn.STAT_EVENT,t),this.stat=e}xe(Jd,qe);function Ze(t){const e=io();Me(e,new Jd(e,t))}kn.Na="timingevent";function Xd(t,e){qe.call(this,kn.Na,t),this.size=e}xe(Xd,qe);function Cs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var oo={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Zd={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Zc(){}Zc.prototype.h=null;function ep(t){return t.h||(t.h=t.i())}function tp(){}var Rs={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function el(){qe.call(this,"d")}xe(el,qe);function tl(){qe.call(this,"c")}xe(tl,qe);var nl;function ao(){}xe(ao,Zc);ao.prototype.g=function(){return new XMLHttpRequest};ao.prototype.i=function(){return{}};nl=new ao;function Ns(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Ss(this),this.P=HT,t=Lc?125:void 0,this.W=new ro(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new np}function np(){this.i=null,this.g="",this.h=!1}var HT=45e3,rl={},co={};D=Ns.prototype;D.setTimeout=function(t){this.P=t};function sl(t,e,n){t.K=1,t.v=po(jt(e)),t.s=n,t.U=!0,rp(t,null)}function rp(t,e){t.F=Date.now(),ks(t),t.A=jt(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),fp(n.h,"t",r),t.C=0,n=t.l.H,t.h=new np,t.g=xp(t.l,n?e:null,!t.s),0<t.O&&(t.L=new VT(Le(t.Ia,t,t.g),t.O)),Wd(t.V,t.g,"readystatechange",t.gb),e=t.H?Od(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),As(1),$T(t.j,t.u,t.A,t.m,t.X,t.s)}D.gb=function(t){t=t.target;const e=this.L;e&&qt(t)==3?e.l():this.Ia(t)};D.Ia=function(t){try{if(t==this.g)e:{const u=qt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||Lc||this.g&&(this.h.h||this.g.ga()||bp(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?As(3):As(2)),lo(this);var n=this.g.ba();this.N=n;t:if(sp(this)){var r=bp(this.g);t="";var s=r.length,i=qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){On(this),Os(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,BT(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Xi(a)){var l=a;break t}}l=null}if(n=l)_r(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,il(this,n);else{this.i=!1,this.o=3,Ze(12),On(this),Os(this);break e}}this.U?(ip(this,u,o),Lc&&this.i&&u==3&&(Wd(this.V,this.W,"tick",this.fb),this.W.start())):(_r(this.j,this.m,o,null),il(this,o)),u==4&&On(this),this.i&&!this.I&&(u==4?Op(this.l,this):(this.i=!1,ks(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ze(12)):(this.o=0,Ze(13)),On(this),Os(this)}}}catch{}finally{}};function sp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function ip(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=KT(t,n),s==co){e==4&&(t.o=4,Ze(14),r=!1),_r(t.j,t.m,null,"[Incomplete Response]");break}else if(s==rl){t.o=4,Ze(15),_r(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else _r(t.j,t.m,s,null),il(t,s);sp(t)&&s!=co&&s!=rl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ze(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ml(e),e.L=!0,Ze(11))):(_r(t.j,t.m,n,"[Invalid Chunked Response]"),On(t),Os(t))}D.fb=function(){if(this.g){var t=qt(this.g),e=this.g.ga();this.C<e.length&&(lo(this),ip(this,t,e),this.i&&t!=4&&ks(this))}};function KT(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?co:(n=Number(e.substring(n,r)),isNaN(n)?rl:(r+=1,r+n>e.length?co:(e=e.substr(r,n),t.C=r+n,e)))}D.cancel=function(){this.I=!0,On(this)};function ks(t){t.Y=Date.now()+t.P,op(t,t.P)}function op(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Cs(Le(t.eb,t),e)}function lo(t){t.B&&(K.clearTimeout(t.B),t.B=null)}D.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(jT(this.j,this.A),this.K!=2&&(As(3),Ze(17)),On(this),this.o=2,Os(this)):op(this,this.Y-t)};function Os(t){t.l.G==0||t.I||Op(t.l,t)}function On(t){lo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Jc(t.W),Gd(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function il(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||cl(n.i,t))){if(n.I=t.N,!t.J&&cl(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Eo(n),vo(n);else break e;gl(n),Ze(18)}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=Cs(Le(n.ab,n),6e3));if(1>=gp(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Ln(n,11)}else if((t.J||n.g==t)&&Eo(n),!Xi(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;!i.g&&(Je(y,"spdy")||Je(y,"quic")||Je(y,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(ll(i,i.h),i.h=null))}if(r.D){const C=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;C&&(r.sa=C,_e(r.F,r.D,C))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Lp(r,r.H?r.la:null,r.W),o.J){mp(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(lo(a),ks(a)),r.g=o}else Np(r);0<n.l.length&&wo(n)}else l[0]!="stop"&&l[0]!="close"||Ln(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ln(n,7):dl(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}As(4)}catch{}}function zT(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Rc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function ol(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Rc(t)||typeof t=="string")Ad(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Rc(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=zT(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function Ir(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Ir)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}D=Ir.prototype;D.R=function(){al(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};D.T=function(){return al(this),this.g.concat()};function al(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Dn(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],Dn(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}D.get=function(t,e){return Dn(this.h,t)?this.h[t]:e};D.set=function(t,e){Dn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};D.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function Dn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var ap=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function WT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Pn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Pn){this.g=e!==void 0?e:t.g,uo(this,t.j),this.s=t.s,ho(this,t.i),fo(this,t.m),this.l=t.l,e=t.h;var n=new Ls;n.i=e.i,e.g&&(n.g=new Ir(e.g),n.h=e.h),cp(this,n),this.o=t.o}else t&&(n=String(t).match(ap))?(this.g=!!e,uo(this,n[1]||"",!0),this.s=Ds(n[2]||""),ho(this,n[3]||"",!0),fo(this,n[4]),this.l=Ds(n[5]||"",!0),cp(this,n[6]||"",!0),this.o=Ds(n[7]||"")):(this.g=!!e,this.h=new Ls(null,this.g))}Pn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ps(e,lp,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ps(e,lp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Ps(n,n.charAt(0)=="/"?XT:JT,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ps(n,e0)),t.join("")};function jt(t){return new Pn(t)}function uo(t,e,n){t.j=n?Ds(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ho(t,e,n){t.i=n?Ds(e,!0):e}function fo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function cp(t,e,n){e instanceof Ls?(t.h=e,t0(t.h,t.g)):(n||(e=Ps(e,ZT)),t.h=new Ls(e,t.g))}function _e(t,e,n){t.h.set(e,n)}function po(t){return _e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function GT(t){return t instanceof Pn?jt(t):new Pn(t,void 0)}function QT(t,e,n,r){var s=new Pn(null,void 0);return t&&uo(s,t),e&&ho(s,e),n&&fo(s,n),r&&(s.l=r),s}function Ds(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ps(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,YT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function YT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var lp=/[#\/\?@]/g,JT=/[#\?:]/g,XT=/[#\?]/g,ZT=/[#\?@]/g,e0=/#/g;function Ls(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function cn(t){t.g||(t.g=new Ir,t.h=0,t.i&&WT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=Ls.prototype;D.add=function(t,e){cn(this),this.i=null,t=Tr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function up(t,e){cn(t),e=Tr(t,e),Dn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Dn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&al(t)))}function hp(t,e){return cn(t),e=Tr(t,e),Dn(t.g.h,e)}D.forEach=function(t,e){cn(this),this.g.forEach(function(n,r){Ad(n,function(s){t.call(e,s,r,this)},this)},this)};D.T=function(){cn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};D.R=function(t){cn(this);var e=[];if(typeof t=="string")hp(this,t)&&(e=Cd(e,this.g.get(Tr(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Cd(e,t[n])}return e};D.set=function(t,e){return cn(this),this.i=null,t=Tr(this,t),hp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function fp(t,e,n){up(t,e),0<n.length&&(t.i=null,t.g.set(Tr(t,e),kc(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function Tr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function t0(t,e){e&&!t.j&&(cn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(up(this,r),fp(this,s,n))},t)),t.j=e}var n0=class{constructor(t,e){this.h=t,this.g=e}};function dp(t){this.l=t||r0,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ea&&K.g.Ea()&&K.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var r0=10;function pp(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function gp(t){return t.h?1:t.g?t.g.size:0}function cl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ll(t,e){t.g?t.g.add(e):t.h=e}function mp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}dp.prototype.cancel=function(){if(this.i=yp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function yp(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return kc(t.i)}function ul(){}ul.prototype.stringify=function(t){return K.JSON.stringify(t,void 0)};ul.prototype.parse=function(t){return K.JSON.parse(t,void 0)};function s0(){this.g=new ul}function i0(t,e,n){const r=n||"";try{ol(t,function(s,i){let o=s;Is(s)&&(o=Wc(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function o0(t,e){const n=new so;if(K.Image){const r=new Image;r.onload=Ji(go,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ji(go,n,r,"TestLoadImage: error",!1,e),r.onabort=Ji(go,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ji(go,n,r,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function go(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function xs(t){this.l=t.$b||null,this.j=t.ib||!1}xe(xs,Zc);xs.prototype.g=function(){return new mo(this.l,this.j)};xs.prototype.i=function(t){return function(){return t}}({});function mo(t,e){Oe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=hl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}xe(mo,Oe);var hl=0;D=mo.prototype;D.open=function(t,e){if(this.readyState!=hl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Us(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||K).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ms(this)),this.readyState=hl};D.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Us(this)),this.g&&(this.readyState=3,Us(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof K.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;vp(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function vp(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}D.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ms(this):Us(this),this.readyState==3&&vp(this)}};D.Ua=function(t){this.g&&(this.response=this.responseText=t,Ms(this))};D.Ta=function(t){this.g&&(this.response=t,Ms(this))};D.ha=function(){this.g&&Ms(this)};function Ms(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Us(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Us(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(mo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var a0=K.JSON.parse;function Se(t){Oe.call(this),this.headers=new Ir,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=wp,this.K=this.L=!1}xe(Se,Oe);var wp="",c0=/^https?$/i,l0=["POST","PUT"];D=Se.prototype;D.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():nl.g(),this.C=this.u?ep(this.u):ep(nl),this.g.onreadystatechange=Le(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Ep(this,i);return}t=n||"";const s=new Ir(this.headers);r&&ol(r,function(i,o){s.set(o,i)}),r=ET(s.T()),n=K.FormData&&t instanceof K.FormData,!(0<=Sd(l0,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Tp(this),0<this.B&&((this.K=u0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Le(this.pa,this)):this.A=Xc(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Ep(this,i)}};function u0(t){return Er&&ST()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function h0(t){return t.toLowerCase()=="content-type"}D.pa=function(){typeof Cc!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Me(this,"timeout"),this.abort(8))};function Ep(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,_p(t),yo(t)}function _p(t){t.D||(t.D=!0,Me(t,"complete"),Me(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Me(this,"complete"),Me(this,"abort"),yo(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),yo(this,!0)),Se.Z.M.call(this)};D.Fa=function(){this.s||(this.F||this.v||this.l?Ip(this):this.cb())};D.cb=function(){Ip(this)};function Ip(t){if(t.h&&typeof Cc!="undefined"&&(!t.C[1]||qt(t)!=4||t.ba()!=2)){if(t.v&&qt(t)==4)Xc(t.Fa,0,t);else if(Me(t,"readystatechange"),qt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(ap)[1]||null;if(!s&&K.self&&K.self.location){var i=K.self.location.protocol;s=i.substr(0,i.length-1)}r=!c0.test(s?s.toLowerCase():"")}n=r}if(n)Me(t,"complete"),Me(t,"success");else{t.m=6;try{var o=2<qt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",_p(t)}}finally{yo(t)}}}}function yo(t,e){if(t.g){Tp(t);const n=t.g,r=t.C[0]?Yi:null;t.g=null,t.C=null,e||Me(t,"ready");try{n.onreadystatechange=r}catch{}}}function Tp(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}function qt(t){return t.g?t.g.readyState:0}D.ba=function(){try{return 2<qt(this)?this.g.status:-1}catch{return-1}};D.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),a0(e)}};function bp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case wp:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Da=function(){return this.m};D.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function f0(t){let e="";return Dc(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function fl(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=f0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):_e(t,e,n))}function Fs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Sp(t){this.za=0,this.l=[],this.h=new so,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Fs("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Fs("baseRetryDelayMs",5e3,t),this.$a=Fs("retryDelaySeedMs",1e4,t),this.Ya=Fs("forwardChannelMaxRetries",2,t),this.ra=Fs("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new dp(t&&t.concurrentRequestLimit),this.Ca=new s0,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}D=Sp.prototype;D.ma=8;D.G=1;function dl(t){if(Ap(t),t.G==3){var e=t.V++,n=jt(t.F);_e(n,"SID",t.J),_e(n,"RID",e),_e(n,"TYPE","terminate"),Vs(t,n),e=new Ns(t,t.h,e,void 0),e.K=2,e.v=po(jt(n)),n=!1,K.navigator&&K.navigator.sendBeacon&&(n=K.navigator.sendBeacon(e.v.toString(),"")),!n&&K.Image&&(new Image().src=e.v,n=!0),n||(e.g=xp(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ks(e)}Pp(t)}D.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function vo(t){t.g&&(ml(t),t.g.cancel(),t.g=null)}function Ap(t){vo(t),t.u&&(K.clearTimeout(t.u),t.u=null),Eo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function pl(t,e){t.l.push(new n0(t.Za++,e)),t.G==3&&wo(t)}function wo(t){pp(t.i)||t.m||(t.m=!0,Gc(t.Ha,t),t.C=0)}function d0(t,e){return gp(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Cs(Le(t.Ha,t,e),Dp(t,t.C)),t.C++,!0)}D.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Ns(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Od(i),Pd(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Rp(this,s,e),n=jt(this.F),_e(n,"RID",t),_e(n,"CVER",22),this.D&&_e(n,"X-HTTP-Session-Id",this.D),Vs(this,n),this.o&&i&&fl(n,this.o,i),ll(this.i,s),this.Ra&&_e(n,"TYPE","init"),this.ja?(_e(n,"$req",e),_e(n,"SID","null"),s.$=!0,sl(s,n,null)):sl(s,n,e),this.G=2}}else this.G==3&&(t?Cp(this,t):this.l.length==0||pp(this.i)||Cp(this))};function Cp(t,e){var n;e?n=e.m:n=t.V++;const r=jt(t.F);_e(r,"SID",t.J),_e(r,"RID",n),_e(r,"AID",t.U),Vs(t,r),t.o&&t.s&&fl(r,t.o,t.s),n=new Ns(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Rp(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),ll(t.i,n),sl(n,r,e)}function Vs(t,e){t.j&&ol({},function(n,r){_e(e,r,n)})}function Rp(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Le(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].h;const u=s[c].g;if(l-=i,0>l)i=Math.max(0,s[c].h-100),a=!1;else try{i0(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function Np(t){t.g||t.u||(t.Y=1,Gc(t.Ga,t),t.A=0)}function gl(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Cs(Le(t.Ga,t),Dp(t,t.A)),t.A++,!0)}D.Ga=function(){if(this.u=null,kp(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Cs(Le(this.bb,this),t)}};D.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ze(10),vo(this),kp(this))};function ml(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function kp(t){t.g=new Ns(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=jt(t.oa);_e(e,"RID","rpc"),_e(e,"SID",t.J),_e(e,"CI",t.N?"0":"1"),_e(e,"AID",t.U),Vs(t,e),_e(e,"TYPE","xmlhttp"),t.o&&t.s&&fl(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=po(jt(e)),n.s=null,n.U=!0,rp(n,t)}D.ab=function(){this.v!=null&&(this.v=null,vo(this),gl(this),Ze(19))};function Eo(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function Op(t,e){var n=null;if(t.g==e){Eo(t),ml(t),t.g=null;var r=2}else if(cl(t.i,e))n=e.D,mp(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=io(),Me(r,new Xd(r,n,e,s)),wo(t)}else Np(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&d0(t,e)||r==2&&gl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Ln(t,5);break;case 4:Ln(t,10);break;case 3:Ln(t,6);break;default:Ln(t,2)}}}function Dp(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Ln(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Le(t.jb,t);n||(n=new Pn("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||uo(n,"https"),po(n)),o0(n.toString(),r)}else Ze(2);t.G=0,t.j&&t.j.va(e),Pp(t),Ap(t)}D.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ze(2)):(this.h.info("Failed to ping google.com"),Ze(1))};function Pp(t){t.G=0,t.I=-1,t.j&&((yp(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,kc(t.l),t.l.length=0),t.j.ua())}function Lp(t,e,n){let r=GT(n);if(r.i!="")e&&ho(r,e+"."+r.i),fo(r,r.m);else{const s=K.location;r=QT(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&Dc(t.aa,function(s,i){_e(r,i,s)}),e=t.D,n=t.sa,e&&n&&_e(r,e,n),_e(r,"VER",t.ma),Vs(t,r),r}function xp(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Se(new xs({ib:!0})):new Se(t.qa),e.L=t.H,e}function Mp(){}D=Mp.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Oa=function(){};function _o(){if(Er&&!(10<=Number(AT)))throw Error("Environmental error: no available transport.")}_o.prototype.g=function(t,e){return new ct(t,e)};function ct(t,e){Oe.call(this),this.g=new Sp(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Xi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Xi(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new br(this)}xe(ct,Oe);ct.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Gc(Le(t.hb,t,e))),Ze(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Lp(t,null,t.W),wo(t)};ct.prototype.close=function(){dl(this.g)};ct.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,pl(this.g,e)}else this.v?(e={},e.__data__=Wc(t),pl(this.g,e)):pl(this.g,t)};ct.prototype.M=function(){this.g.j=null,delete this.j,dl(this.g),delete this.g,ct.Z.M.call(this)};function Up(t){el.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}xe(Up,el);function Fp(){tl.call(this),this.status=1}xe(Fp,tl);function br(t){this.g=t}xe(br,Mp);br.prototype.xa=function(){Me(this.g,"a")};br.prototype.wa=function(t){Me(this.g,new Up(t))};br.prototype.va=function(t){Me(this.g,new Fp(t))};br.prototype.ua=function(){Me(this.g,"b")};_o.prototype.createWebChannel=_o.prototype.g;ct.prototype.send=ct.prototype.u;ct.prototype.open=ct.prototype.m;ct.prototype.close=ct.prototype.close;oo.NO_ERROR=0;oo.TIMEOUT=8;oo.HTTP_ERROR=6;Zd.COMPLETE="complete";tp.EventType=Rs;Rs.OPEN="a";Rs.CLOSE="b";Rs.ERROR="c";Rs.MESSAGE="d";Oe.prototype.listen=Oe.prototype.N;Se.prototype.listenOnce=Se.prototype.O;Se.prototype.getLastError=Se.prototype.La;Se.prototype.getLastErrorCode=Se.prototype.Da;Se.prototype.getStatus=Se.prototype.ba;Se.prototype.getResponseJson=Se.prototype.Qa;Se.prototype.getResponseText=Se.prototype.ga;Se.prototype.send=Se.prototype.ea;var p0=function(){return new _o},g0=function(){return io()},yl=oo,m0=Zd,y0=kn,Vp={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},v0=xs,Io=tp,w0=Se;const $p="@firebase/firestore";/**
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
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
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
 */let Sr="9.5.0";/**
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
 */const xn=new oc("@firebase/firestore");function Bp(){return xn.logLevel}function $(t,...e){if(xn.logLevel<=se.DEBUG){const n=e.map(vl);xn.debug(`Firestore (${Sr}): ${t}`,...n)}}function ln(t,...e){if(xn.logLevel<=se.ERROR){const n=e.map(vl);xn.error(`Firestore (${Sr}): ${t}`,...n)}}function jp(t,...e){if(xn.logLevel<=se.WARN){const n=e.map(vl);xn.warn(`Firestore (${Sr}): ${t}`,...n)}}function vl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${Sr}) INTERNAL ASSERTION FAILED: `+t;throw ln(e),new Error(e)}function me(t,e){t||G()}function Q(t,e){return t}/**
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
 */class un{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class E0{constructor(e,n){this.user=n,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class _0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class I0{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new un;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new un,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{$("FirebaseCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):($("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new un)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new E0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new nt(e)}}class T0{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=nt.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},n=this.h.auth.getAuthHeaderValueForFirstParty([]);return n&&(e.Authorization=n),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class b0{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new T0(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
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
 */class wl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.g(r),this.p=r=>n.writeSequenceNumber(r))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */wl.T=-1;class qp{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=S0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function Ar(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class lt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new P(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new P(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new P(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return lt.fromMillis(Date.now())}static fromDate(e){return lt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new lt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ie(e)}static min(){return new ie(new lt(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function Hp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Mn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Kp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class $s{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return $s.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof $s?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends $s{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new P(w.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const A0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends $s{construct(e,n,r){return new rt(e,n,r)}static isValidIdentifier(e){return A0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new P(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new P(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new P(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new P(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rt(n)}static emptyPath(){return new rt([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.fields=e,e.sort(rt.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ar(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new He(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new He(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}He.EMPTY_BYTE_STRING=new He("");const C0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hn(t){if(me(!!t),typeof t=="string"){let e=0;const n=C0.exec(t);if(me(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Cr(t){return typeof t=="string"?He.fromBase64String(t):He.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Wp(t){const e=t.mapValue.fields.__previous_value__;return zp(e)?Wp(e):e}function js(t){const e=hn(t.mapValue.fields.__local_write_time__.timestampValue);return new lt(e.seconds,e.nanos)}/**
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
 */function Rr(t){return t==null}function To(t){return t===0&&1/t==-1/0}function R0(t){return typeof t=="number"&&Number.isInteger(t)&&!To(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Un(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zp(t)?4:10:G()}function Pt(t,e){const n=Un(t);if(n!==Un(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return js(t).isEqual(js(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=hn(r.timestampValue),o=hn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Cr(r.bytesValue).isEqual(Cr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Ae(r.geoPointValue.latitude)===Ae(s.geoPointValue.latitude)&&Ae(r.geoPointValue.longitude)===Ae(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Ae(r.integerValue)===Ae(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Ae(r.doubleValue),o=Ae(s.doubleValue);return i===o?To(i)===To(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Ar(t.arrayValue.values||[],e.arrayValue.values||[],Pt);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Hp(i)!==Hp(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Pt(i[a],o[a])))return!1;return!0}(t,e);default:return G()}}function qs(t,e){return(t.values||[]).find(n=>Pt(n,e))!==void 0}function Nr(t,e){const n=Un(t),r=Un(e);if(n!==r)return oe(n,r);switch(n){case 0:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Ae(s.integerValue||s.doubleValue),a=Ae(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Gp(t.timestampValue,e.timestampValue);case 4:return Gp(js(t),js(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Cr(s),a=Cr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=oe(o[c],a[c]);if(l!==0)return l}return oe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=oe(Ae(s.latitude),Ae(i.latitude));return o!==0?o:oe(Ae(s.longitude),Ae(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Nr(o[c],a[c]);if(l)return l}return oe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=oe(a[u],l[u]);if(h!==0)return h;const f=Nr(o[a[u]],c[l[u]]);if(f!==0)return f}return oe(a.length,l.length)}(t.mapValue,e.mapValue);default:throw G()}}function Gp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=hn(t),r=hn(e),s=oe(n.seconds,r.seconds);return s!==0?s:oe(n.nanos,r.nanos)}function El(t){return _l(t)}function _l(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=hn(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Cr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=_l(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${_l(r.fields[a])}`;return i+"}"}(t.mapValue):G();var e,n}function Qp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Il(t){return!!t&&"integerValue"in t}function Tl(t){return!!t&&"arrayValue"in t}function Yp(t){return!!t&&"nullValue"in t}function Jp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function bo(t){return!!t&&"mapValue"in t}function Hs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Mn(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Hs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Hs(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
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
 */class ut{constructor(e){this.value=e}static empty(){return new ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!bo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hs(n)}setAll(e){let n=rt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Hs(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());bo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Pt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];bo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Mn(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ut(Hs(this.value))}}function Xp(t){const e=[];return Mn(t.fields,(n,r)=>{const s=new rt([n]);if(bo(r)){const i=Xp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Bs(e)}/**
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
 */class Ke{constructor(e,n,r,s,i){this.key=e,this.documentType=n,this.version=r,this.data=s,this.documentState=i}static newInvalidDocument(e){return new Ke(e,0,ie.min(),ut.empty(),0)}static newFoundDocument(e,n,r){return new Ke(e,1,n,r,0)}static newNoDocument(e,n){return new Ke(e,2,n,ut.empty(),0)}static newUnknownDocument(e,n){return new Ke(e,3,n,ut.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new Ke(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class N0{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.A=null}}function Zp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new N0(t,e,n,r,s,i,o)}function bl(t){const e=Q(t);if(e.A===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>O0(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Rr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=So(e.startAt)),e.endAt&&(n+="|ub:",n+=So(e.endAt)),e.A=n}return e.A}function k0(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${El(r.value)}`;var r}).join(", ")}]`),Rr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+So(t.startAt)),t.endAt&&(e+=", endAt: "+So(t.endAt)),`Target(${e})`}function Sl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!V0(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!Pt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ng(t.startAt,e.startAt)&&ng(t.endAt,e.endAt)}function Al(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class et extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.R(e,n,r):new D0(e,n,r):n==="array-contains"?new x0(e,r):n==="in"?new M0(e,r):n==="not-in"?new U0(e,r):n==="array-contains-any"?new F0(e,r):new et(e,n,r)}static R(e,n,r){return n==="in"?new P0(e,r):new L0(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.P(Nr(n,this.value)):n!==null&&Un(this.value)===Un(n)&&this.P(Nr(n,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function O0(t){return t.field.canonicalString()+t.op.toString()+El(t.value)}class D0 extends et{constructor(e,n,r){super(e,n,r),this.key=j.fromName(r.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.P(n)}}class P0 extends et{constructor(e,n){super(e,"in",n),this.keys=eg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class L0 extends et{constructor(e,n){super(e,"not-in",n),this.keys=eg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function eg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class x0 extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Tl(n)&&qs(n.arrayValue,this.value)}}class M0 extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&qs(this.value.arrayValue,n)}}class U0 extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(qs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!qs(this.value.arrayValue,n)}}class F0 extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Tl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>qs(this.value.arrayValue,r))}}class Cl{constructor(e,n){this.position=e,this.before=n}}function So(t){return`${t.before?"b":"a"}:${t.position.map(e=>El(e)).join(",")}`}class kr{constructor(e,n="asc"){this.field=e,this.dir=n}}function V0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function tg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=Nr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return t.before?r<=0:r<0}function ng(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Pt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Or{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.V=null,this.S=null,this.startAt,this.endAt}}function $0(t,e,n,r,s,i,o,a){return new Or(t,e,n,r,s,i,o,a)}function rg(t){return new Or(t)}function Ao(t){return!Rr(t.limit)&&t.limitType==="F"}function Co(t){return!Rr(t.limit)&&t.limitType==="L"}function Rl(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Nl(t){for(const e of t.filters)if(e.v())return e.field;return null}function sg(t){return t.collectionGroup!==null}function Ks(t){const e=Q(t);if(e.V===null){e.V=[];const n=Nl(e),r=Rl(e);if(n!==null&&r===null)n.isKeyField()||e.V.push(new kr(n)),e.V.push(new kr(rt.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.V.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new kr(rt.keyField(),i))}}}return e.V}function Fn(t){const e=Q(t);if(!e.S)if(e.limitType==="F")e.S=Zp(e.path,e.collectionGroup,Ks(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Ks(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new kr(i.field,o))}const r=e.endAt?new Cl(e.endAt.position,!e.endAt.before):null,s=e.startAt?new Cl(e.startAt.position,!e.startAt.before):null;e.S=Zp(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.S}function B0(t,e,n){return new Or(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ro(t,e){return Sl(Fn(t),Fn(e))&&t.limitType===e.limitType}function ig(t){return`${bl(Fn(t))}|lt:${t.limitType}`}function kl(t){return`Query(target=${k0(Fn(t))}; limitType=${t.limitType})`}function No(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):j.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!tg(n.startAt,Ks(n),r)||n.endAt&&tg(n.endAt,Ks(n),r))}(t,e)}function og(t){return(e,n)=>{let r=!1;for(const s of Ks(t)){const i=j0(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function j0(t,e,n){const r=t.field.isKeyField()?j.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Nr(a,c):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:To(e)?"-0":e}}function cg(t){return{integerValue:""+t}}function q0(t,e){return R0(e)?cg(e):ag(t,e)}/**
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
 */class ko{constructor(){this._=void 0}}function H0(t,e,n){return t instanceof Oo?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof zs?ug(t,e):t instanceof Ws?hg(t,e):function(r,s){const i=lg(r,s),o=fg(i)+fg(r.C);return Il(i)&&Il(r.C)?cg(o):ag(r.N,o)}(t,e)}function K0(t,e,n){return t instanceof zs?ug(t,e):t instanceof Ws?hg(t,e):n}function lg(t,e){return t instanceof Do?Il(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Oo extends ko{}class zs extends ko{constructor(e){super(),this.elements=e}}function ug(t,e){const n=dg(e);for(const r of t.elements)n.some(s=>Pt(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ws extends ko{constructor(e){super(),this.elements=e}}function hg(t,e){let n=dg(e);for(const r of t.elements)n=n.filter(s=>!Pt(s,r));return{arrayValue:{values:n}}}class Do extends ko{constructor(e,n){super(),this.N=e,this.C=n}}function fg(t){return Ae(t.integerValue||t.doubleValue)}function dg(t){return Tl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function z0(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof zs&&r instanceof zs||n instanceof Ws&&r instanceof Ws?Ar(n.elements,r.elements,Pt):n instanceof Do&&r instanceof Do?Pt(n.C,r.C):n instanceof Oo&&r instanceof Oo}(t.transform,e.transform)}class W0{constructor(e,n){this.version=e,this.transformResults=n}}class fn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new fn}static exists(e){return new fn(void 0,e)}static updateTime(e){return new fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Po(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Lo{}function G0(t,e,n){t instanceof xo?function(r,s,i){const o=r.value.clone(),a=yg(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Vn?function(r,s,i){if(!Po(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=yg(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(mg(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Ol(t,e,n){t instanceof xo?function(r,s,i){if(!Po(r.precondition,s))return;const o=r.value.clone(),a=vg(r.fieldTransforms,i,s);o.setAll(a),s.convertToFoundDocument(gg(s),o).setHasLocalMutations()}(t,e,n):t instanceof Vn?function(r,s,i){if(!Po(r.precondition,s))return;const o=vg(r.fieldTransforms,i,s),a=s.data;a.setAll(mg(r)),a.setAll(o),s.convertToFoundDocument(gg(s),a).setHasLocalMutations()}(t,e,n):function(r,s){Po(r.precondition,s)&&s.convertToNoDocument(ie.min())}(t,e)}function Q0(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=lg(r.transform,s||null);i!=null&&(n==null&&(n=ut.empty()),n.set(r.field,i))}return n||null}function pg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Ar(n,r,(s,i)=>z0(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function gg(t){return t.isFoundDocument()?t.version:ie.min()}class xo extends Lo{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}}class Vn extends Lo{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}}function mg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function yg(t,e,n){const r=new Map;me(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,K0(o,a,n[s]))}return r}function vg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,H0(i,o,e))}return r}class wg extends Lo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Y0 extends Lo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class J0{constructor(e){this.count=e}}/**
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
 */var Ce,ee;function X0(t){switch(t){default:return G();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function Eg(t){if(t===void 0)return ln("GRPC error has no .code"),w.UNKNOWN;switch(t){case Ce.OK:return w.OK;case Ce.CANCELLED:return w.CANCELLED;case Ce.UNKNOWN:return w.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return w.INTERNAL;case Ce.UNAVAILABLE:return w.UNAVAILABLE;case Ce.UNAUTHENTICATED:return w.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case Ce.NOT_FOUND:return w.NOT_FOUND;case Ce.ALREADY_EXISTS:return w.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return w.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case Ce.ABORTED:return w.ABORTED;case Ce.OUT_OF_RANGE:return w.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return w.UNIMPLEMENTED;case Ce.DATA_LOSS:return w.DATA_LOSS;default:return G()}}(ee=Ce||(Ce={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ze{constructor(e,n){this.comparator=e,this.root=n||Ue.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mo(this.root,e,this.comparator,!0)}}class Mo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:Ue.RED,this.left=s!=null?s:Ue.EMPTY,this.right=i!=null?i:Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ue(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ue.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Ue(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Fe{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _g(this.data.getIterator())}getIteratorFrom(e){return new _g(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Fe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Fe(this.comparator);return n.data=e,n}}class _g{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const Z0=new ze(j.comparator);function $n(){return Z0}const eb=new ze(j.comparator);function Dl(){return eb}const tb=new ze(j.comparator);function nb(){return tb}const rb=new Fe(j.comparator);function ve(...t){let e=rb;for(const n of t)e=e.add(n);return e}const sb=new Fe(oe);function Ig(){return sb}/**
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
 */class Uo{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Gs.createSynthesizedTargetChangeForCurrentChange(e,n)),new Uo(ie.min(),r,Ig(),$n(),ve())}}class Gs{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Gs(He.EMPTY_BYTE_STRING,n,ve(),ve(),ve())}}/**
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
 */class Fo{constructor(e,n,r,s){this.k=e,this.removedTargetIds=n,this.key=r,this.$=s}}class Tg{constructor(e,n){this.targetId=e,this.O=n}}class bg{constructor(e,n,r=He.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Sg{constructor(){this.F=0,this.M=Cg(),this.L=He.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=ve(),n=ve(),r=ve();return this.M.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:G()}}),new Gs(this.L,this.B,e,n,r)}G(){this.U=!1,this.M=Cg()}H(e,n){this.U=!0,this.M=this.M.insert(e,n)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class ib{constructor(e){this.tt=e,this.et=new Map,this.nt=$n(),this.st=Ag(),this.it=new Fe(oe)}rt(e){for(const n of e.k)e.$&&e.$.isFoundDocument()?this.ot(n,e.$):this.ct(n,e.key,e.$);for(const n of e.removedTargetIds)this.ct(n,e.key,e.$)}at(e){this.forEachTarget(e,n=>{const r=this.ut(n);switch(e.state){case 0:this.ht(n)&&r.j(e.resumeToken);break;case 1:r.X(),r.q||r.G(),r.j(e.resumeToken);break;case 2:r.X(),r.q||this.removeTarget(n);break;case 3:this.ht(n)&&(r.Z(),r.j(e.resumeToken));break;case 4:this.ht(n)&&(this.lt(n),r.j(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.et.forEach((r,s)=>{this.ht(s)&&n(s)})}ft(e){const n=e.targetId,r=e.O.count,s=this.dt(n);if(s){const i=s.target;if(Al(i))if(r===0){const o=new j(i.path);this.ct(n,o,Ke.newNoDocument(o,ie.min()))}else me(r===1);else this.wt(n)!==r&&(this.lt(n),this.it=this.it.add(n))}}_t(e){const n=new Map;this.et.forEach((i,o)=>{const a=this.dt(o);if(a){if(i.current&&Al(a.target)){const c=new j(a.target.path);this.nt.get(c)!==null||this.gt(o,c)||this.ct(o,c,Ke.newNoDocument(c,e))}i.K&&(n.set(o,i.W()),i.G())}});let r=ve();this.st.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.dt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))});const s=new Uo(e,n,this.it,this.nt,r);return this.nt=$n(),this.st=Ag(),this.it=new Fe(oe),s}ot(e,n){if(!this.ht(e))return;const r=this.gt(e,n.key)?2:0;this.ut(e).H(n.key,r),this.nt=this.nt.insert(n.key,n),this.st=this.st.insert(n.key,this.yt(n.key).add(e))}ct(e,n,r){if(!this.ht(e))return;const s=this.ut(e);this.gt(e,n)?s.H(n,1):s.J(n),this.st=this.st.insert(n,this.yt(n).delete(e)),r&&(this.nt=this.nt.insert(n,r))}removeTarget(e){this.et.delete(e)}wt(e){const n=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let n=this.et.get(e);return n||(n=new Sg,this.et.set(e,n)),n}yt(e){let n=this.st.get(e);return n||(n=new Fe(oe),this.st=this.st.insert(e,n)),n}ht(e){const n=this.dt(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}dt(e){const n=this.et.get(e);return n&&n.q?null:this.tt.Tt(e)}lt(e){this.et.set(e,new Sg),this.tt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}gt(e,n){return this.tt.getRemoteKeysForTarget(e).has(n)}}function Ag(){return new ze(j.comparator)}function Cg(){return new ze(j.comparator)}/**
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
 */const ob=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ab=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class cb{constructor(e,n){this.databaseId=e,this.D=n}}function Vo(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Rg(t,e){return t.D?e.toBase64():e.toUint8Array()}function lb(t,e){return Vo(t,e.toTimestamp())}function Ht(t){return me(!!t),ie.fromTimestamp(function(e){const n=hn(e);return new lt(n.seconds,n.nanos)}(t))}function Pl(t,e){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Ng(t){const e=Ie.fromString(t);return me(xg(e)),e}function Ll(t,e){return Pl(t.databaseId,e.path)}function xl(t,e){const n=Ng(e);if(n.get(1)!==t.databaseId.projectId)throw new P(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(kg(n))}function Ml(t,e){return Pl(t.databaseId,e)}function ub(t){const e=Ng(t);return e.length===4?Ie.emptyPath():kg(e)}function Ul(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function kg(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Og(t,e,n){return{name:Ll(t,e),fields:n.value.mapValue.fields}}function hb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.D?(me(l===void 0||typeof l=="string"),He.fromBase64String(l||"")):(me(l===void 0||l instanceof Uint8Array),He.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?w.UNKNOWN:Eg(c.code);return new P(l,c.message||"")}(o);n=new bg(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=xl(t,r.document.name),i=Ht(r.document.updateTime),o=new ut({mapValue:{fields:r.document.fields}}),a=Ke.newFoundDocument(s,i,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Fo(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=xl(t,r.document),i=r.readTime?Ht(r.readTime):ie.min(),o=Ke.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Fo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=xl(t,r.document),i=r.removedTargetIds||[];n=new Fo([],i,s,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new J0(s),o=r.targetId;n=new Tg(o,i)}}return n}function fb(t,e){let n;if(e instanceof xo)n={update:Og(t,e.key,e.value)};else if(e instanceof wg)n={delete:Ll(t,e.key)};else if(e instanceof Vn)n={update:Og(t,e.key,e.data),updateMask:Ib(e.fieldMask)};else{if(!(e instanceof Y0))return G();n={verify:Ll(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Oo)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof zs)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ws)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Do)return{fieldPath:i.field.canonicalString(),increment:o.C};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:lb(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function db(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?Ht(r.updateTime):Ht(s);return i.isEqual(ie.min())&&(i=Ht(s)),new W0(i,r.transformResults||[])}(n,e))):[]}function pb(t,e){return{documents:[Ml(t,e.path)]}}function gb(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Ml(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ml(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(a){if(a.length===0)return;const c=a.map(l=>function(u){if(u.op==="=="){if(Jp(u.value))return{unaryFilter:{field:Dr(u.field),op:"IS_NAN"}};if(Yp(u.value))return{unaryFilter:{field:Dr(u.field),op:"IS_NULL"}}}else if(u.op==="!="){if(Jp(u.value))return{unaryFilter:{field:Dr(u.field),op:"IS_NOT_NAN"}};if(Yp(u.value))return{unaryFilter:{field:Dr(u.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Dr(u.field),op:wb(u.op),value:u.value}}}(l));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(a){if(a.length!==0)return a.map(c=>function(l){return{field:Dr(l.field),direction:vb(l.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(a,c){return a.D||Rr(c)?c:{value:c}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Pg(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Pg(e.endAt)),n}function mb(t){let e=ub(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){me(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Dg(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new kr(Pr(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Rr(h)?null:h}(n.limit));let c=null;n.startAt&&(c=Lg(n.startAt));let l=null;return n.endAt&&(l=Lg(n.endAt)),$0(e,s,o,i,a,"F",c,l)}function yb(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return G()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Dg(t){return t?t.unaryFilter!==void 0?[_b(t)]:t.fieldFilter!==void 0?[Eb(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Dg(e)).reduce((e,n)=>e.concat(n)):G():[]}function Pg(t){return{before:t.before,values:t.position}}function Lg(t){const e=!!t.before,n=t.values||[];return new Cl(n,e)}function vb(t){return ob[t]}function wb(t){return ab[t]}function Dr(t){return{fieldPath:t.canonicalString()}}function Pr(t){return rt.fromServerFormat(t.fieldPath)}function Eb(t){return et.create(Pr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(t.fieldFilter.op),t.fieldFilter.value)}function _b(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Pr(t.unaryFilter.field);return et.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Pr(t.unaryFilter.field);return et.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Pr(t.unaryFilter.field);return et.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Pr(t.unaryFilter.field);return et.create(s,"!=",{nullValue:"NULL_VALUE"});default:return G()}}function Ib(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function xg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}const Tb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(s=>s?O.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}}function Qs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Sb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&G0(i,e,r[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Ol(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Ol(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),s=r;this.applyToLocalView(s),r.isValidDocument()||s.convertToNoDocument(ie.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&Ar(this.mutations,e.mutations,(n,r)=>pg(n,r))&&Ar(this.baseMutations,e.baseMutations,(n,r)=>pg(n,r))}}class Fl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){me(e.mutations.length===r.length);let s=nb();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Fl(e,n,r,s)}}/**
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
 */class Bn{constructor(e,n,r,s,i=ie.min(),o=ie.min(),a=He.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Bn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class Ab{constructor(e){this.Wt=e}}function Cb(t){const e=mb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?B0(e,e.limit,"L"):e}/**
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
 */class Rb{constructor(){this.Gt=new Nb}addToCollectionParentIndex(e,n){return this.Gt.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.Gt.getEntries(n))}}class Nb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Fe(Ie.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Fe(Ie.comparator)).toArray()}}/**
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
 */class Lr{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new Lr(0)}static ie(){return new Lr(-1)}}/**
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
 */async function Ys(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==Tb)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Js{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s!==void 0){for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),!0;return!1}forEach(e){Mn(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Kp(this.inner)}}/**
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
 */class kb{constructor(){this.changes=new Js(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:ie.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:Ke.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Mg{constructor(e,n,r){this.He=e,this.In=n,this.Ht=r}An(e,n){return this.In.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Rn(e,n,r))}Rn(e,n,r){return this.He.getEntry(e,n).next(s=>{for(const i of r)i.applyToLocalView(s);return s})}bn(e,n){e.forEach((r,s)=>{for(const i of n)i.applyToLocalView(s)})}Pn(e,n){return this.He.getEntries(e,n).next(r=>this.vn(e,r).next(()=>r))}vn(e,n){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.bn(n,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return j.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.Vn(e,n.path):sg(n)?this.Sn(e,n,r):this.Dn(e,n,r)}Vn(e,n){return this.An(e,new j(n)).next(r=>{let s=Dl();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}Sn(e,n,r){const s=n.collectionGroup;let i=Dl();return this.Ht.getCollectionParents(e,s).next(o=>O.forEach(o,a=>{const c=function(l,u){return new Or(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.Dn(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}Dn(e,n,r){let s,i;return this.He.getDocumentsMatchingQuery(e,n,r).next(o=>(s=o,this.In.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(i=o,this.Cn(e,i,s).next(a=>{s=a;for(const c of i)for(const l of c.mutations){const u=l.key;let h=s.get(u);h==null&&(h=Ke.newInvalidDocument(u),s=s.insert(u,h)),Ol(l,h,c.localWriteTime),h.isFoundDocument()||(s=s.remove(u))}}))).next(()=>(s.forEach((o,a)=>{No(n,a)||(s=s.remove(o))}),s))}Cn(e,n,r){let s=ve();for(const o of n)for(const a of o.mutations)a instanceof Vn&&r.get(a.key)===null&&(s=s.add(a.key));let i=r;return this.He.getEntries(e,s).next(o=>(o.forEach((a,c)=>{c.isFoundDocument()&&(i=i.insert(a,c))}),i))}}/**
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
 */class Vl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Nn=r,this.xn=s}static kn(e,n){let r=ve(),s=ve();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Vl(e,n.fromCache,r,s)}}/**
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
 */class Ob{$n(e){this.On=e}getDocumentsMatchingQuery(e,n,r,s){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(ie.min())?this.Fn(e,n):this.On.Pn(e,s).next(i=>{const o=this.Mn(n,i);return(Ao(n)||Co(n))&&this.Ln(n.limitType,o,s,r)?this.Fn(e,n):(Bp()<=se.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),kl(n)),this.On.getDocumentsMatchingQuery(e,n,r).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}Mn(e,n){let r=new Fe(og(e));return n.forEach((s,i)=>{No(e,i)&&(r=r.add(i))}),r}Ln(e,n,r,s){if(r.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Fn(e,n){return Bp()<=se.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",kl(n)),this.On.getDocumentsMatchingQuery(e,n,ie.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e,n,r,s){this.persistence=e,this.Bn=n,this.N=s,this.Un=new ze(oe),this.qn=new Js(i=>bl(i),Sl),this.Kn=ie.min(),this.In=e.getMutationQueue(r),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new Mg(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Un))}}function Pb(t,e,n,r){return new Db(t,e,n,r)}async function Ug(t,e){const n=Q(t);let r=n.In,s=n.Qn;const i=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.In.getAllMutationBatches(o).next(c=>(a=c,r=n.persistence.getMutationQueue(e),s=new Mg(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(o))).next(c=>{const l=[],u=[];let h=ve();for(const f of a){l.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}for(const f of c){u.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}return s.Pn(o,h).next(f=>({Wn:f,removedBatchIds:l,addedBatchIds:u}))})});return n.In=r,n.Qn=s,n.Bn.$n(n.Qn),i}function Lb(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.jn.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=O.resolve();return h.forEach(g=>{f=f.next(()=>l.getEntry(a,g)).next(y=>{const C=c.docVersions.get(g);me(C!==null),y.version.compareTo(C)<0&&(u.applyToRemoteDocument(y,c),y.isValidDocument()&&l.addEntry(y,c.commitVersion))})}),f.next(()=>o.In.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.In.performConsistencyCheck(r)).next(()=>n.Qn.Pn(r,s))})}function Fg(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ze.getLastRemoteSnapshotVersion(n))}function xb(t,e){const n=Q(t),r=e.snapshotVersion;let s=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});s=n.Un;const a=[];e.targetChanges.forEach((l,u)=>{const h=s.get(u);if(!h)return;a.push(n.ze.removeMatchingKeys(i,l.removedDocuments,u).next(()=>n.ze.addMatchingKeys(i,l.addedDocuments,u)));const f=l.resumeToken;if(f.approximateByteSize()>0){const g=h.withResumeToken(f,r).withSequenceNumber(i.currentSequenceNumber);s=s.insert(u,g),function(y,C,v){return me(C.resumeToken.approximateByteSize()>0),y.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(h,g,l)&&a.push(n.ze.updateTargetData(i,g))}});let c=$n();if(e.documentUpdates.forEach((l,u)=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Mb(i,o,e.documentUpdates,r,void 0).next(l=>{c=l})),!r.isEqual(ie.min())){const l=n.ze.getLastRemoteSnapshotVersion(i).next(u=>n.ze.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return O.waitFor(a).next(()=>o.apply(i)).next(()=>n.Qn.vn(i,c)).next(()=>c)}).then(i=>(n.Un=s,i))}function Mb(t,e,n,r,s){let i=ve();return n.forEach(o=>i=i.add(o)),e.getEntries(t,i).next(o=>{let a=$n();return n.forEach((c,l)=>{const u=o.get(c),h=(s==null?void 0:s.get(c))||r;l.isNoDocument()&&l.version.isEqual(ie.min())?(e.removeEntry(c,h),a=a.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l,h),a=a.insert(c,l)):$("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),a})}function Ub(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.In.getNextMutationBatchAfterBatchId(r,e)))}function Fb(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.ze.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):n.ze.allocateTargetId(r).next(o=>(s=new Bn(e,o,0,r.currentSequenceNumber),n.ze.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Un.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Un=n.Un.insert(r.targetId,r),n.qn.set(e,r.targetId)),r})}async function $l(t,e,n){const r=Q(t),s=r.Un.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Qs(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Un=r.Un.remove(e),r.qn.delete(s.target)}function Vg(t,e,n){const r=Q(t);let s=ie.min(),i=ve();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=Q(a),h=u.qn.get(l);return h!==void 0?O.resolve(u.Un.get(h)):u.ze.getTargetData(c,l)}(r,o,Fn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Bn.getDocumentsMatchingQuery(o,e,n?s:ie.min(),n?i:ve())).next(a=>({documents:a,Gn:i})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return O.resolve(this.Yn.get(n))}saveBundleMetadata(e,n){var r;return this.Yn.set(n.id,{id:(r=n).id,version:r.version,createTime:Ht(r.createTime)}),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:Cb(r.bundledQuery),readTime:Ht(r.readTime)}}(n)),O.resolve()}}/**
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
 */class Bl{constructor(){this.Zn=new Fe(De.ts),this.es=new Fe(De.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new De(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new De(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}cs(e){const n=new j(new Ie([])),r=new De(n,e),s=new De(n,e+1),i=[];return this.es.forEachInRange([r,s],o=>{this.rs(o),i.push(o.key)}),i}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new j(new Ie([])),r=new De(n,e),s=new De(n,e+1);let i=ve();return this.es.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new De(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class De{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return j.comparator(e.key,n.key)||oe(e.ls,n.ls)}static ns(e,n){return oe(e.ls,n.ls)||j.comparator(e.key,n.key)}}/**
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
 */class $b{constructor(e,n){this.Ht=e,this.referenceDelegate=n,this.In=[],this.fs=1,this.ds=new Fe(De.ts)}checkEmpty(e){return O.resolve(this.In.length===0)}addMutationBatch(e,n,r,s){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new Sb(i,n,r,s);this.In.push(o);for(const a of s)this.ds=this.ds.add(new De(a.key,i)),this.Ht.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.ws(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this._s(r),i=s<0?0:s;return O.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(e){return O.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new De(n,0),s=new De(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([r,s],o=>{const a=this.ws(o.ls);i.push(a)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Fe(oe);return n.forEach(s=>{const i=new De(s,0),o=new De(s,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{r=r.add(a.ls)})}),O.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;j.isDocumentKey(i)||(i=i.child(""));const o=new De(new j(i),0);let a=new Fe(oe);return this.ds.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.ls)),!0)},o),O.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const s=this.ws(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){me(this.ys(n.batchId,"removed")===0),this.In.shift();let r=this.ds;return O.forEach(n.mutations,s=>{const i=new De(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ds=r})}te(e){}containsKey(e,n){const r=new De(n,0),s=this.ds.firstAfterOrEqual(r);return O.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.In.length,O.resolve()}ys(e,n){return this._s(e)}_s(e){return this.In.length===0?0:e-this.In[0].batchId}ws(e){const n=this._s(e);return n<0||n>=this.In.length?null:this.In[n]}}/**
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
 */class Bb{constructor(e,n){this.Ht=e,this.ps=n,this.docs=new ze(j.comparator),this.size=0}addEntry(e,n,r){const s=n.key,i=this.docs.get(s),o=i?i.size:0,a=this.ps(n);return this.docs=this.docs.insert(s,{document:n.clone(),size:a,readTime:r}),this.size+=a-o,this.Ht.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.clone():Ke.newInvalidDocument(n))}getEntries(e,n){let r=$n();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.clone():Ke.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r){let s=$n();const i=new j(n.path.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c,readTime:l}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;l.compareTo(r)<=0||No(n,c)&&(s=s.insert(c.key,c.clone()))}return O.resolve(s)}Ts(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new jb(this)}getSize(e){return O.resolve(this.size)}}class jb extends kb{constructor(e){super(),this.Se=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.document.isValidDocument()?n.push(this.Se.addEntry(e,s.document,this.getReadTime(r))):this.Se.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Se.getEntry(e,n)}getAllFromCache(e,n){return this.Se.getEntries(e,n)}}/**
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
 */class qb{constructor(e){this.persistence=e,this.Es=new Js(n=>bl(n),Sl),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.Is=0,this.As=new Bl,this.targetCount=0,this.Rs=Lr.se()}forEachTarget(e,n){return this.Es.forEach((r,s)=>n(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Is&&(this.Is=n),O.resolve()}ce(e){this.Es.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Lr(n),this.highestTargetId=n),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,n){return this.ce(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.ce(n),O.resolve()}removeTargetData(e,n){return this.Es.delete(n.target),this.As.cs(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Es.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Es.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.Es.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.As.cs(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.As.containsKey(n))}}/**
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
 */class Hb{constructor(e,n){this.bs={},this.Le=new wl(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new qb(this),this.Ht=new Rb,this.He=function(r,s){return new Bb(r,s)}(this.Ht,r=>this.referenceDelegate.Ps(r)),this.N=new Ab(n),this.Je=new Vb(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new $b(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const s=new Kb(this.Le.next());return this.referenceDelegate.vs(),r(s).next(i=>this.referenceDelegate.Vs(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ss(e,n){return O.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class Kb extends bb{constructor(e){super(),this.currentSequenceNumber=e}}class jl{constructor(e){this.persistence=e,this.Ds=new Bl,this.Cs=null}static Ns(e){return new jl(e)}get xs(){if(this.Cs)return this.Cs;throw G()}addReference(e,n,r){return this.Ds.addReference(r,n),this.xs.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ds.removeReference(r,n),this.xs.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ds.cs(n.targetId).forEach(s=>this.xs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.xs.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}vs(){this.Cs=new Set}Vs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.xs,r=>{const s=j.fromPath(r);return this.ks(e,s).next(i=>{i||n.removeEntry(s)})}).next(()=>(this.Cs=null,n.apply(e)))}updateLimboDocument(e,n){return this.ks(e,n).next(r=>{r?this.xs.delete(n.toString()):this.xs.add(n.toString())})}Ps(e){return 0}ks(e,n){return O.or([()=>O.resolve(this.Ds.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ss(e,n)])}}class $g{constructor(){this.activeTargetIds=Ig()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zb{constructor(){this.yi=new $g,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,n,r){this.pi[e]=n}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new $g,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class Wb{Ti(e){}shutdown(){}}/**
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
 */class Bg{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class Qb{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
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
 */class Yb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,n,r,s){const i=this.Bi(e,n);$("RestConnection","Sending: ",i,r);const o={};return this.Ui(o,s),this.qi(e,i,o,r).then(a=>($("RestConnection","Received: ",a),a),a=>{throw jp("RestConnection",`${e} failed with error: `,a,"url: ",i,"request:",r),a})}Ki(e,n,r,s){return this.Li(e,n,r,s)}Ui(e,n){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+Sr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n)for(const r in n.authHeaders)n.authHeaders.hasOwnProperty(r)&&(e[r]=n.authHeaders[r])}Bi(e,n){const r=Gb[e];return`${this.Fi}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,n,r,s){return new Promise((i,o)=>{const a=new w0;a.listenOnce(m0.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case yl.NO_ERROR:const l=a.getResponseJson();$("Connection","XHR received:",JSON.stringify(l)),i(l);break;case yl.TIMEOUT:$("Connection",'RPC "'+e+'" timed out'),o(new P(w.DEADLINE_EXCEEDED,"Request time out"));break;case yl.HTTP_ERROR:const u=a.getStatus();if($("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(y)>=0?y:w.UNKNOWN}(h.status);o(new P(f,h.message))}else o(new P(w.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new P(w.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{$("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}ji(e,n){const r=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=p0(),i=g0(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new v0({})),this.Ui(o.initMessageHeaders,n),Nf()||Of()||CE()||Df()||RE()||kf()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");$("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let l=!1,u=!1;const h=new Qb({vi:g=>{u?$("Connection","Not sending because WebChannel is closed:",g):(l||($("Connection","Opening WebChannel transport."),c.open(),l=!0),$("Connection","WebChannel sending:",g),c.send(g))},Vi:()=>c.close()}),f=(g,y,C)=>{g.listen(y,v=>{try{C(v)}catch(b){setTimeout(()=>{throw b},0)}})};return f(c,Io.EventType.OPEN,()=>{u||$("Connection","WebChannel transport opened.")}),f(c,Io.EventType.CLOSE,()=>{u||(u=!0,$("Connection","WebChannel transport closed"),h.$i())}),f(c,Io.EventType.ERROR,g=>{u||(u=!0,jp("Connection","WebChannel transport errored:",g),h.$i(new P(w.UNAVAILABLE,"The operation could not be completed")))}),f(c,Io.EventType.MESSAGE,g=>{var y;if(!u){const C=g.data[0];me(!!C);const v=C,b=v.error||((y=v[0])===null||y===void 0?void 0:y.error);if(b){$("Connection","WebChannel received error:",b);const L=b.status;let q=function(fe){const we=Ce[fe];if(we!==void 0)return Eg(we)}(L),z=b.message;q===void 0&&(q=w.INTERNAL,z="Unknown error status: "+L+" with message "+b.message),u=!0,h.$i(new P(q,z)),c.close()}else $("Connection","WebChannel received:",C),h.Oi(C)}}),f(i,y0.STAT_EVENT,g=>{g.stat===Vp.PROXY?$("Connection","Detected buffering proxy"):g.stat===Vp.NOPROXY&&$("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.ki()},0),h}}function ql(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(t){return new cb(t,!0)}class jg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Oe=e,this.timerId=n,this.Qi=r,this.Wi=s,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const n=Math.floor(this.zi+this.Zi()),r=Math.max(0,Date.now()-this.Ji),s=Math.max(0,n-r);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.zi} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,s,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
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
 */class qg{constructor(e,n,r,s,i,o,a){this.Oe=e,this.er=r,this.nr=s,this.sr=i,this.credentialsProvider=o,this.listener=a,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new jg(e,n)}ur(){return this.state===1||this.state===5||this.hr()}hr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&this.rr===null&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this._r()))}mr(e){this.gr(),this.stream.send(e)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,n){this.gr(),this.yr(),this.ar.cancel(),this.ir++,e!==4?this.ar.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(ln(n.toString()),ln("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.pr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(n)}pr(){}auth(){this.state=1;const e=this.Tr(this.ir),n=this.ir;this.credentialsProvider.getToken().then(r=>{this.ir===n&&this.Er(r)},r=>{e(()=>{const s=new P(w.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ir(s)})})}Er(e){const n=this.Tr(this.ir);this.stream=this.Ar(e),this.stream.Si(()=>{n(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,()=>(this.hr()&&(this.state=3),Promise.resolve())),this.listener.Si()))}),this.stream.Ci(r=>{n(()=>this.Ir(r))}),this.stream.onMessage(r=>{n(()=>this.onMessage(r))})}lr(){this.state=5,this.ar.Xi(async()=>{this.state=0,this.start()})}Ir(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Tr(e){return n=>{this.Oe.enqueueAndForget(()=>this.ir===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Jb extends qg{constructor(e,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i),this.N=s}Ar(e){return this.sr.ji("Listen",e)}onMessage(e){this.ar.reset();const n=hb(this.N,e),r=function(s){if(!("targetChange"in s))return ie.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?ie.min():i.readTime?Ht(i.readTime):ie.min()}(e);return this.listener.Rr(n,r)}br(e){const n={};n.database=Ul(this.N),n.addTarget=function(s,i){let o;const a=i.target;return o=Al(a)?{documents:pb(s,a)}:{query:gb(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Rg(s,i.resumeToken):i.snapshotVersion.compareTo(ie.min())>0&&(o.readTime=Vo(s,i.snapshotVersion.toTimestamp())),o}(this.N,e);const r=yb(this.N,e);r&&(n.labels=r),this.mr(n)}Pr(e){const n={};n.database=Ul(this.N),n.removeTarget=e,this.mr(n)}}class Xb extends qg{constructor(e,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i),this.N=s,this.vr=!1}get Vr(){return this.vr}start(){this.vr=!1,this.lastStreamToken=void 0,super.start()}pr(){this.vr&&this.Sr([])}Ar(e){return this.sr.ji("Write",e)}onMessage(e){if(me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.vr){this.ar.reset();const n=db(e.writeResults,e.commitTime),r=Ht(e.commitTime);return this.listener.Dr(r,n)}return me(!e.writeResults||e.writeResults.length===0),this.vr=!0,this.listener.Cr()}Nr(){const e={};e.database=Ul(this.N),this.mr(e)}Sr(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>fb(this.N,r))};this.mr(n)}}/**
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
 */class Zb extends class{}{constructor(e,n,r){super(),this.credentials=e,this.sr=n,this.N=r,this.kr=!1}$r(){if(this.kr)throw new P(w.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,n,r){return this.$r(),this.credentials.getToken().then(s=>this.sr.Li(e,n,r,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===w.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new P(w.UNKNOWN,s.toString())})}Ki(e,n,r){return this.$r(),this.credentials.getToken().then(s=>this.sr.Ki(e,n,r,s)).catch(s=>{throw s.name==="FirebaseError"?(s.code===w.UNAUTHENTICATED&&this.credentials.invalidateToken(),s):new P(w.UNKNOWN,s.toString())})}terminate(){this.kr=!0}}class eS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){this.Or===0&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve())))}qr(e){this.state==="Online"?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Br("Offline")))}set(e){this.Kr(),this.Or=0,e==="Online"&&(this.Mr=!1),this.Br(e)}Br(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ur(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?(ln(n),this.Mr=!1):$("OnlineStateTracker",n)}Kr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
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
 */class tS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=i,this.zr.Ti(o=>{r.enqueueAndForget(async()=>{jn(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Q(a);c.Wr.add(4),await Xs(c),c.Hr.set("Unknown"),c.Wr.delete(4),await Bo(c)}(this))})}),this.Hr=new eS(r,s)}}async function Bo(t){if(jn(t))for(const e of t.Gr)await e(!0)}async function Xs(t){for(const e of t.Gr)await e(!1)}function Hg(t,e){const n=Q(t);n.Qr.has(e.targetId)||(n.Qr.set(e.targetId,e),zl(n)?Kl(n):xr(n).hr()&&Hl(n,e))}function Kg(t,e){const n=Q(t),r=xr(n);n.Qr.delete(e),r.hr()&&zg(n,e),n.Qr.size===0&&(r.hr()?r.wr():jn(n)&&n.Hr.set("Unknown"))}function Hl(t,e){t.Jr.Y(e.targetId),xr(t).br(e)}function zg(t,e){t.Jr.Y(e),xr(t).Pr(e)}function Kl(t){t.Jr=new ib({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.Qr.get(e)||null}),xr(t).start(),t.Hr.Lr()}function zl(t){return jn(t)&&!xr(t).ur()&&t.Qr.size>0}function jn(t){return Q(t).Wr.size===0}function Wg(t){t.Jr=void 0}async function nS(t){t.Qr.forEach((e,n)=>{Hl(t,e)})}async function rS(t,e){Wg(t),zl(t)?(t.Hr.qr(e),Kl(t)):t.Hr.set("Unknown")}async function sS(t,e,n){if(t.Hr.set("Online"),e instanceof bg&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.Qr.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.Qr.delete(o),r.Jr.removeTarget(o))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await jo(t,r)}else if(e instanceof Fo?t.Jr.rt(e):e instanceof Tg?t.Jr.ft(e):t.Jr.at(e),!n.isEqual(ie.min()))try{const r=await Fg(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.Jr._t(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.Qr.get(c);l&&s.Qr.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.Qr.get(a);if(!c)return;s.Qr.set(a,c.withResumeToken(He.EMPTY_BYTE_STRING,c.snapshotVersion)),zg(s,a);const l=new Bn(c.target,a,1,c.sequenceNumber);Hl(s,l)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await jo(t,r)}}async function jo(t,e,n){if(!Qs(e))throw e;t.Wr.add(1),await Xs(t),t.Hr.set("Offline"),n||(n=()=>Fg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.Wr.delete(1),await Bo(t)})}function Gg(t,e){return e().catch(n=>jo(t,n,e))}async function qo(t){const e=Q(t),n=dn(e);let r=e.jr.length>0?e.jr[e.jr.length-1].batchId:-1;for(;iS(e);)try{const s=await Ub(e.localStore,r);if(s===null){e.jr.length===0&&n.wr();break}r=s.batchId,oS(e,s)}catch(s){await jo(e,s)}Qg(e)&&Yg(e)}function iS(t){return jn(t)&&t.jr.length<10}function oS(t,e){t.jr.push(e);const n=dn(t);n.hr()&&n.Vr&&n.Sr(e.mutations)}function Qg(t){return jn(t)&&!dn(t).ur()&&t.jr.length>0}function Yg(t){dn(t).start()}async function aS(t){dn(t).Nr()}async function cS(t){const e=dn(t);for(const n of t.jr)e.Sr(n.mutations)}async function lS(t,e,n){const r=t.jr.shift(),s=Fl.from(r,e,n);await Gg(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await qo(t)}async function uS(t,e){e&&dn(t).Vr&&await async function(n,r){if(s=r.code,X0(s)&&s!==w.ABORTED){const i=n.jr.shift();dn(n).dr(),await Gg(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await qo(n)}var s}(t,e),Qg(t)&&Yg(t)}async function hS(t,e){const n=Q(t);e?(n.Wr.delete(2),await Bo(n)):e||(n.Wr.add(2),await Xs(n),n.Hr.set("Unknown"))}function xr(t){return t.Yr||(t.Yr=function(e,n,r){const s=Q(e);return s.$r(),new Jb(n,s.sr,s.credentials,s.N,r)}(t.datastore,t.asyncQueue,{Si:nS.bind(null,t),Ci:rS.bind(null,t),Rr:sS.bind(null,t)}),t.Gr.push(async e=>{e?(t.Yr.dr(),zl(t)?Kl(t):t.Hr.set("Unknown")):(await t.Yr.stop(),Wg(t))})),t.Yr}function dn(t){return t.Xr||(t.Xr=function(e,n,r){const s=Q(e);return s.$r(),new Xb(n,s.sr,s.credentials,s.N,r)}(t.datastore,t.asyncQueue,{Si:aS.bind(null,t),Ci:uS.bind(null,t),Cr:cS.bind(null,t),Dr:lS.bind(null,t)}),t.Gr.push(async e=>{e?(t.Xr.dr(),await qo(t)):(await t.Xr.stop(),t.jr.length>0&&($("RemoteStore",`Stopping write stream with ${t.jr.length} pending writes`),t.jr=[]))})),t.Xr}/**
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
 */class Wl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Wl(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gl(t,e){if(ln("AsyncQueue",`${e}: ${t}`),Qs(t))return new P(w.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Mr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||j.comparator(n.key,r.key):(n,r)=>j.comparator(n.key,r.key),this.keyedMap=Dl(),this.sortedSet=new ze(this.comparator)}static emptySet(e){return new Mr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Mr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Mr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Jg{constructor(){this.Zr=new ze(j.comparator)}track(e){const n=e.doc.key,r=this.Zr.get(n);r?e.type!==0&&r.type===3?this.Zr=this.Zr.insert(n,e):e.type===3&&r.type!==1?this.Zr=this.Zr.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Zr=this.Zr.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Zr=this.Zr.remove(n):e.type===1&&r.type===2?this.Zr=this.Zr.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Zr=this.Zr.insert(n,{type:2,doc:e.doc}):G():this.Zr=this.Zr.insert(n,e)}eo(){const e=[];return this.Zr.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ur{constructor(e,n,r,s,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new Ur(e,n,Mr.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ro(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class fS{constructor(){this.no=void 0,this.listeners=[]}}class dS{constructor(){this.queries=new Js(e=>ig(e),Ro),this.onlineState="Unknown",this.so=new Set}}async function pS(t,e){const n=Q(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new fS),s)try{i.no=await n.onListen(r)}catch(o){const a=Gl(o,`Initialization of query '${kl(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.io(n.onlineState),i.no&&e.ro(i.no)&&Ql(n)}async function gS(t,e){const n=Q(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function mS(t,e){const n=Q(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.ro(s)&&(r=!0);o.no=s}}r&&Ql(n)}function yS(t,e,n){const r=Q(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Ql(t){t.so.forEach(e=>{e.next()})}class vS{constructor(e,n,r){this.query=e,this.oo=n,this.co=!1,this.ao=null,this.onlineState="Unknown",this.options=r||{}}ro(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ur(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.co?this.uo(e)&&(this.oo.next(e),n=!0):this.ho(e,this.onlineState)&&(this.lo(e),n=!0),this.ao=e,n}onError(e){this.oo.error(e)}io(e){this.onlineState=e;let n=!1;return this.ao&&!this.co&&this.ho(this.ao,e)&&(this.lo(this.ao),n=!0),n}ho(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.fo||!r)&&(!e.docs.isEmpty()||n==="Offline")}uo(e){if(e.docChanges.length>0)return!0;const n=this.ao&&this.ao.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}lo(e){e=Ur.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.oo.next(e)}}/**
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
 */class Xg{constructor(e){this.key=e}}class Zg{constructor(e){this.key=e}}class wS{constructor(e,n){this.query=e,this.po=n,this.To=null,this.current=!1,this.Eo=ve(),this.mutatedKeys=ve(),this.Io=og(e),this.Ao=new Mr(this.Io)}get Ro(){return this.po}bo(e,n){const r=n?n.Po:new Jg,s=n?n.Ao:this.Ao;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=Ao(this.query)&&s.size===this.query.limit?s.last():null,l=Co(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),g=No(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),C=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let v=!1;f&&g?f.data.isEqual(g.data)?y!==C&&(r.track({type:3,doc:g}),v=!0):this.vo(f,g)||(r.track({type:2,doc:g}),v=!0,(c&&this.Io(g,c)>0||l&&this.Io(g,l)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),v=!0):f&&!g&&(r.track({type:1,doc:f}),v=!0,(c||l)&&(a=!0)),v&&(g?(o=o.add(g),i=C?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),Ao(this.query)||Co(this.query))for(;o.size>this.query.limit;){const u=Ao(this.query)?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Ao:o,Po:r,Ln:a,mutatedKeys:i}}vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Ao;this.Ao=e.Ao,this.mutatedKeys=e.mutatedKeys;const i=e.Po.eo();i.sort((l,u)=>function(h,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return g(h)-g(f)}(l.type,u.type)||this.Io(l.doc,u.doc)),this.Vo(r);const o=n?this.So():[],a=this.Eo.size===0&&this.current?1:0,c=a!==this.To;return this.To=a,i.length!==0||c?{snapshot:new Ur(this.query,e.Ao,s,i,e.mutatedKeys,a===0,c,!1),Do:o}:{Do:o}}io(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ao:this.Ao,Po:new Jg,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{Do:[]}}Co(e){return!this.po.has(e)&&!!this.Ao.has(e)&&!this.Ao.get(e).hasLocalMutations}Vo(e){e&&(e.addedDocuments.forEach(n=>this.po=this.po.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.po=this.po.delete(n)),this.current=e.current)}So(){if(!this.current)return[];const e=this.Eo;this.Eo=ve(),this.Ao.forEach(r=>{this.Co(r.key)&&(this.Eo=this.Eo.add(r.key))});const n=[];return e.forEach(r=>{this.Eo.has(r)||n.push(new Zg(r))}),this.Eo.forEach(r=>{e.has(r)||n.push(new Xg(r))}),n}No(e){this.po=e.Gn,this.Eo=ve();const n=this.bo(e.documents);return this.applyChanges(n,!0)}xo(){return Ur.fromInitialDocuments(this.query,this.Ao,this.mutatedKeys,this.To===0)}}class ES{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class _S{constructor(e){this.key=e,this.ko=!1}}class IS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.$o={},this.Oo=new Js(a=>ig(a),Ro),this.Fo=new Map,this.Mo=new Set,this.Lo=new ze(j.comparator),this.Bo=new Map,this.Uo=new Bl,this.qo={},this.Ko=new Map,this.jo=Lr.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return this.Qo===!0}}async function TS(t,e){const n=PS(t);let r,s;const i=n.Oo.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.xo();else{const o=await Fb(n.localStore,Fn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await bS(n,e,r,a==="current"),n.isPrimaryClient&&Hg(n.remoteStore,o)}return s}async function bS(t,e,n,r){t.Wo=(u,h,f)=>async function(g,y,C,v){let b=y.view.bo(C);b.Ln&&(b=await Vg(g.localStore,y.query,!1).then(({documents:z})=>y.view.bo(z,b)));const L=v&&v.targetChanges.get(y.targetId),q=y.view.applyChanges(b,g.isPrimaryClient,L);return im(g,y.targetId,q.Do),q.snapshot}(t,u,h,f);const s=await Vg(t.localStore,e,!0),i=new wS(e,s.Gn),o=i.bo(s.documents),a=Gs.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);im(t,n,c.Do);const l=new ES(e,n,i);return t.Oo.set(e,l),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),c.snapshot}async function SS(t,e){const n=Q(t),r=n.Oo.get(e),s=n.Fo.get(r.targetId);if(s.length>1)return n.Fo.set(r.targetId,s.filter(i=>!Ro(i,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await $l(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Kg(n.remoteStore,r.targetId),Yl(n,r.targetId)}).catch(Ys)):(Yl(n,r.targetId),await $l(n.localStore,r.targetId,!0))}async function AS(t,e,n){const r=LS(t);try{const s=await function(i,o){const a=Q(i),c=lt.now(),l=o.reduce((h,f)=>h.add(f.key),ve());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Qn.Pn(h,l).next(f=>{u=f;const g=[];for(const y of o){const C=Q0(y,u.get(y.key));C!=null&&g.push(new Vn(y.key,C,Xp(C.value.mapValue),fn.exists(!0)))}return a.In.addMutationBatch(h,c,g,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.qo[i.currentUser.toKey()];c||(c=new ze(oe)),c=c.insert(o,a),i.qo[i.currentUser.toKey()]=c}(r,s.batchId,n),await Zs(r,s.changes),await qo(r.remoteStore)}catch(s){const i=Gl(s,"Failed to persist write");n.reject(i)}}async function em(t,e){const n=Q(t);try{const r=await xb(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Bo.get(i);o&&(me(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ko=!0:s.modifiedDocuments.size>0?me(o.ko):s.removedDocuments.size>0&&(me(o.ko),o.ko=!1))}),await Zs(n,r,e)}catch(r){await Ys(r)}}function tm(t,e,n){const r=Q(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Oo.forEach((i,o)=>{const a=o.view.io(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=Q(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.io(o)&&(c=!0)}),c&&Ql(a)}(r.eventManager,e),s.length&&r.$o.Rr(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function CS(t,e,n){const r=Q(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Bo.get(e),i=s&&s.key;if(i){let o=new ze(j.comparator);o=o.insert(i,Ke.newNoDocument(i,ie.min()));const a=ve().add(i),c=new Uo(ie.min(),new Map,new Fe(oe),o,a);await em(r,c),r.Lo=r.Lo.remove(i),r.Bo.delete(e),Jl(r)}else await $l(r.localStore,e,!1).then(()=>Yl(r,e,n)).catch(Ys)}async function RS(t,e){const n=Q(t),r=e.batch.batchId;try{const s=await Lb(n.localStore,e);rm(n,r,null),nm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zs(n,s)}catch(s){await Ys(s)}}async function NS(t,e,n){const r=Q(t);try{const s=await function(i,o){const a=Q(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.In.lookupMutationBatch(c,o).next(u=>(me(u!==null),l=u.keys(),a.In.removeMutationBatch(c,u))).next(()=>a.In.performConsistencyCheck(c)).next(()=>a.Qn.Pn(c,l))})}(r.localStore,e);rm(r,e,n),nm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Zs(r,s)}catch(s){await Ys(s)}}function nm(t,e){(t.Ko.get(e)||[]).forEach(n=>{n.resolve()}),t.Ko.delete(e)}function rm(t,e,n){const r=Q(t);let s=r.qo[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qo[r.currentUser.toKey()]=s}}function Yl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fo.get(e))t.Oo.delete(r),n&&t.$o.Go(r,n);t.Fo.delete(e),t.isPrimaryClient&&t.Uo.cs(e).forEach(r=>{t.Uo.containsKey(r)||sm(t,r)})}function sm(t,e){t.Mo.delete(e.path.canonicalString());const n=t.Lo.get(e);n!==null&&(Kg(t.remoteStore,n),t.Lo=t.Lo.remove(e),t.Bo.delete(n),Jl(t))}function im(t,e,n){for(const r of n)r instanceof Xg?(t.Uo.addReference(r.key,e),kS(t,r)):r instanceof Zg?($("SyncEngine","Document no longer in limbo: "+r.key),t.Uo.removeReference(r.key,e),t.Uo.containsKey(r.key)||sm(t,r.key)):G()}function kS(t,e){const n=e.key,r=n.path.canonicalString();t.Lo.get(n)||t.Mo.has(r)||($("SyncEngine","New document in limbo: "+n),t.Mo.add(r),Jl(t))}function Jl(t){for(;t.Mo.size>0&&t.Lo.size<t.maxConcurrentLimboResolutions;){const e=t.Mo.values().next().value;t.Mo.delete(e);const n=new j(Ie.fromString(e)),r=t.jo.next();t.Bo.set(r,new _S(n)),t.Lo=t.Lo.insert(n,r),Hg(t.remoteStore,new Bn(Fn(rg(n.path)),r,2,wl.T))}}async function Zs(t,e,n){const r=Q(t),s=[],i=[],o=[];r.Oo.isEmpty()||(r.Oo.forEach((a,c)=>{o.push(r.Wo(c,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),s.push(l);const u=Vl.kn(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.$o.Rr(s),await async function(a,c){const l=Q(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>O.forEach(c,h=>O.forEach(h.Nn,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>O.forEach(h.xn,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Qs(u))throw u;$("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Un.get(h),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);l.Un=l.Un.insert(h,y)}}}(r.localStore,i))}async function OS(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await Ug(n.localStore,e);n.currentUser=e,function(s,i){s.Ko.forEach(o=>{o.forEach(a=>{a.reject(new P(w.CANCELLED,i))})}),s.Ko.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zs(n,r.Wn)}}function DS(t,e){const n=Q(t),r=n.Bo.get(e);if(r&&r.ko)return ve().add(r.key);{let s=ve();const i=n.Fo.get(e);if(!i)return s;for(const o of i){const a=n.Oo.get(o);s=s.unionWith(a.view.Ro)}return s}}function PS(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=em.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=DS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=CS.bind(null,e),e.$o.Rr=mS.bind(null,e.eventManager),e.$o.Go=yS.bind(null,e.eventManager),e}function LS(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=RS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=NS.bind(null,e),e}class xS{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=$o(e.databaseInfo.databaseId),this.sharedClientState=this.Ho(e),this.persistence=this.Jo(e),await this.persistence.start(),this.gcScheduler=this.Yo(e),this.localStore=this.Xo(e)}Yo(e){return null}Xo(e){return Pb(this.persistence,new Ob,e.initialUser,this.N)}Jo(e){return new Hb(jl.Ns,this.N)}Ho(e){return new zb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class MS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>tm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=OS.bind(null,this.syncEngine),await hS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new dS}createDatastore(e){const n=$o(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new Yb(s));var s;return function(i,o,a){return new Zb(i,o,a)}(e.credentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>tm(this.syncEngine,a,0),o=Bg.bt()?new Bg:new Wb,new tS(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,l){const u=new IS(r,s,i,o,a,c);return l&&(u.Qo=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Q(e);$("RemoteStore","RemoteStore shutting down."),n.Wr.add(5),await Xs(n),n.zr.shutdown(),n.Hr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class US{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.tc(this.observer.next,e)}error(e){this.observer.error?this.tc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}ec(){this.muted=!0}tc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class FS{constructor(e,n,r){this.credentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=nt.UNAUTHENTICATED,this.clientId=qp.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(n,async s=>{$("FirestoreClient","Received user=",s.uid),await this.credentialListener(s),this.user=s})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(n){const r=Gl(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function VS(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ug(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function $S(t,e){t.asyncQueue.verifyOperationInProgress();const n=await BS(t);$("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>async function(i,o){const a=Q(i);a.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const c=jn(a);a.Wr.add(3),await Xs(a),c&&a.Hr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Wr.delete(3),await Bo(a)}(e.remoteStore,s)),t.onlineComponents=e}async function BS(t){return t.offlineComponents||($("FirestoreClient","Using default OfflineComponentProvider"),await VS(t,new xS)),t.offlineComponents}async function om(t){return t.onlineComponents||($("FirestoreClient","Using default OnlineComponentProvider"),await $S(t,new MS)),t.onlineComponents}function jS(t){return om(t).then(e=>e.syncEngine)}async function qS(t){const e=await om(t),n=e.eventManager;return n.onListen=TS.bind(null,e.syncEngine),n.onUnlisten=SS.bind(null,e.syncEngine),n}function HS(t,e,n={}){const r=new un;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const l=new US({next:h=>{i.enqueueAndForget(()=>gS(s,u)),h.fromCache&&a.source==="server"?c.reject(new P(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new vS(o,l,{includeMetadataChanges:!0,fo:!0});return pS(s,u)}(await qS(t),t.asyncQueue,e,n,r)),r.promise}class KS{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ei{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ei&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am=new Map;/**
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
 */function cm(t,e,n){if(!n)throw new P(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zS(t,e,n,r){if(e===!0&&r===!0)throw new P(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function lm(t){if(!j.isDocumentKey(t))throw new P(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function um(t){if(j.isDocumentKey(t))throw new P(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ho(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function Fr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ho(t);throw new P(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new P(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new P(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,zS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n){this._credentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hm({}),this._settingsFrozen=!1,e instanceof ei?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new P(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ei(r.options.projectId)}(e))}get app(){if(!this._app)throw new P(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new P(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hm(e),e.credentials!==void 0&&(this._credentials=function(n){if(!n)return new _0;switch(n.type){case"gapi":const r=n.client;return me(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new b0(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new P(w.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=am.get(e);n&&($("ComponentProvider","Removing Datastore"),am.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ht(this.firestore,e,this._key)}}class Vr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Vr(this.firestore,e,this._query)}}class pn extends Vr{constructor(e,n,r){super(e,n,rg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ht(this.firestore,null,new j(e))}withConverter(e){return new pn(this.firestore,e,this._path)}}function HC(t,e,...n){if(t=Ye(t),cm("collection","path",e),t instanceof Xl){const r=Ie.fromString(e,...n);return um(r),new pn(t,null,r)}{if(!(t instanceof ht||t instanceof pn))throw new P(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return um(r),new pn(t.firestore,null,r)}}function WS(t,e,...n){if(t=Ye(t),arguments.length===1&&(e=qp.I()),cm("doc","path",e),t instanceof Xl){const r=Ie.fromString(e,...n);return lm(r),new ht(t,null,new j(r))}{if(!(t instanceof ht||t instanceof pn))throw new P(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return lm(r),new ht(t.firestore,t instanceof pn?t.converter:null,new j(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new jg(this,"async_queue_retry"),this.Rc=()=>{const n=ql();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ar.tr()};const e=ql();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.bc(),this.Pc(e)}enterRestrictedMode(e){if(!this.gc){this.gc=!0,this.Ic=e||!1;const n=ql();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Rc)}}enqueue(e){if(this.bc(),this.gc)return new Promise(()=>{});const n=new un;return this.Pc(()=>this.gc&&this.Ic?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.mc.push(e),this.vc()))}async vc(){if(this.mc.length!==0){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(e){if(!Qs(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.mc.length>0&&this.ar.Xi(()=>this.vc())}}Pc(e){const n=this._c.then(()=>(this.Ec=!0,e().catch(r=>{this.Tc=r,this.Ec=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw ln("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ec=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.bc(),this.Ac.indexOf(e)>-1&&(n=0);const s=Wl.createAndSchedule(this,e,n,r,i=>this.Vc(i));return this.yc.push(s),s}bc(){this.Tc&&G()}verifyOperationInProgress(){}async Sc(){let e;do e=this._c,await e;while(e!==this._c)}Dc(e){for(const n of this.yc)if(n.timerId===e)return!0;return!1}Cc(e){return this.Sc().then(()=>{this.yc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.yc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Sc()})}Nc(e){this.Ac.push(e)}Vc(e){const n=this.yc.indexOf(e);this.yc.splice(n,1)}}class ti extends Xl{constructor(e,n){super(e,n),this.type="firestore",this._queue=new GS,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||dm(this),this._firestoreClient.terminate()}}function KC(t=Mf()){return uc(t,"firestore").getImmediate()}function fm(t){return t._firestoreClient||dm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function dm(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new KS(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new FS(t._credentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ko{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new P(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $r(He.fromBase64String(e))}catch(n){throw new P(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $r(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e){this._methodName=e}}/**
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
 */class eu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new P(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new P(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
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
 */const QS=/^__.*__$/;class YS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Vn(e,this.data,this.fieldMask,n,this.fieldTransforms):new xo(e,this.data,n,this.fieldTransforms)}}class pm{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Vn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function gm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class tu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.N=r,this.ignoreUndefinedProperties=s,i===void 0&&this.xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get kc(){return this.settings.kc}$c(e){return new tu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Oc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.$c({path:r,Fc:!1});return s.Mc(e),s}Lc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.$c({path:r,Fc:!1});return s.xc(),s}Bc(e){return this.$c({path:void 0,Fc:!0})}Uc(e){return Wo(e,this.settings.methodName,this.settings.qc||!1,this.path,this.settings.Kc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Mc(this.path.get(e))}Mc(e){if(e.length===0)throw this.Uc("Document fields must not be empty");if(gm(this.kc)&&QS.test(e))throw this.Uc('Document fields cannot begin and end with "__"')}}class JS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.N=r||$o(e)}jc(e,n,r,s=!1){return new tu({kc:e,methodName:n,Kc:r,path:rt.emptyPath(),Fc:!1,qc:s},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function nu(t){const e=t._freezeSettings(),n=$o(t._databaseId);return new JS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function XS(t,e,n,r,s,i={}){const o=t.jc(i.merge||i.mergeFields?2:0,e,n,s);ru("Data must be an object, but it was:",o,r);const a=mm(r,o);let c,l;if(i.merge)c=new Bs(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=su(e,h,n);if(!o.contains(f))throw new P(w.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);vm(u,f)||u.push(f)}c=new Bs(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new YS(new ut(a),c,l)}class zo extends Zl{_toFieldTransform(e){if(e.kc!==2)throw e.kc===1?e.Uc(`${this._methodName}() can only appear at the top level of your update data`):e.Uc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof zo}}function ZS(t,e,n,r){const s=t.jc(1,e,n);ru("Data must be an object, but it was:",s,r);const i=[],o=ut.empty();Mn(r,(c,l)=>{const u=iu(e,c,n);l=Ye(l);const h=s.Lc(u);if(l instanceof zo)i.push(u);else{const f=ni(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new Bs(i);return new pm(o,a,s.fieldTransforms)}function eA(t,e,n,r,s,i){const o=t.jc(1,e,n),a=[su(e,r,n)],c=[s];if(i.length%2!=0)throw new P(w.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(su(e,i[f])),c.push(i[f+1]);const l=[],u=ut.empty();for(let f=a.length-1;f>=0;--f)if(!vm(l,a[f])){const g=a[f];let y=c[f];y=Ye(y);const C=o.Lc(g);if(y instanceof zo)l.push(g);else{const v=ni(y,C);v!=null&&(l.push(g),u.set(g,v))}}const h=new Bs(l);return new pm(u,h,o.fieldTransforms)}function tA(t,e,n,r=!1){return ni(n,t.jc(r?4:3,e))}function ni(t,e){if(ym(t=Ye(t)))return ru("Unsupported field value:",e,t),mm(t,e);if(t instanceof Zl)return function(n,r){if(!gm(r.kc))throw r.Uc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Uc(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&e.kc!==4)throw e.Uc("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=ni(o,r.Bc(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=Ye(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return q0(r.N,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=lt.fromDate(n);return{timestampValue:Vo(r.N,s)}}if(n instanceof lt){const s=new lt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Vo(r.N,s)}}if(n instanceof eu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof $r)return{bytesValue:Rg(r.N,n._byteString)};if(n instanceof ht){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.Uc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Pl(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.Uc(`Unsupported field value: ${Ho(n)}`)}(t,e)}function mm(t,e){const n={};return Kp(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mn(t,(r,s)=>{const i=ni(s,e.Oc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function ym(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof lt||t instanceof eu||t instanceof $r||t instanceof ht||t instanceof Zl)}function ru(t,e,n){if(!ym(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Ho(n);throw r==="an object"?e.Uc(t+" a custom object"):e.Uc(t+" "+r)}}function su(t,e,n){if((e=Ye(e))instanceof Ko)return e._internalPath;if(typeof e=="string")return iu(t,e);throw Wo("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const nA=new RegExp("[~\\*/\\[\\]]");function iu(t,e,n){if(e.search(nA)>=0)throw Wo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ko(...e.split("."))._internalPath}catch{throw Wo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new P(w.INVALID_ARGUMENT,a+t+c)}function vm(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Go("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rA extends wm{data(){return super.data()}}function Go(t,e){return typeof e=="string"?iu(t,e):e instanceof Ko?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sA extends wm{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Yo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Go("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Yo extends sA{data(e={}){return super.data(e)}}class iA{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Qo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Yo(this._firestore,this._userDataWriter,r.key,r,new Qo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new P(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Yo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Qo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Yo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Qo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:oA(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function oA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(t){if(Co(t)&&t.explicitOrderBy.length===0)throw new P(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Em{}function zC(t,...e){for(const n of e)t=n._apply(t);return t}class cA extends Em{constructor(e,n,r){super(),this.Gc=e,this.zc=n,this.Hc=r,this.type="where"}_apply(e){const n=nu(e.firestore),r=function(s,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new P(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on FieldPath.documentId().`);if(l==="in"||l==="not-in"){Im(u,l);const g=[];for(const y of u)g.push(_m(a,s,y));h={arrayValue:{values:g}}}else h=_m(a,s,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Im(u,l),h=tA(o,i,u,l==="in"||l==="not-in");const f=et.create(c,l,h);return function(g,y){if(y.v()){const v=Nl(g);if(v!==null&&!v.isEqual(y.field))throw new P(w.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${v.toString()}' and '${y.field.toString()}'`);const b=Rl(g);b!==null&&Tm(g,y.field,b)}const C=function(v,b){for(const L of v.filters)if(b.indexOf(L.op)>=0)return L.op;return null}(g,function(v){switch(v){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(y.op));if(C!==null)throw C===y.op?new P(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${y.op.toString()}' filter.`):new P(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${y.op.toString()}' filters with '${C.toString()}' filters.`)}(s,f),f}(e._query,"where",n,e.firestore._databaseId,this.Gc,this.zc,this.Hc);return new Vr(e.firestore,e.converter,function(s,i){const o=s.filters.concat([i]);return new Or(s.path,s.collectionGroup,s.explicitOrderBy.slice(),o,s.limit,s.limitType,s.startAt,s.endAt)}(e._query,r))}}function WC(t,e,n){const r=e,s=Go("where",t);return new cA(s,r,n)}class lA extends Em{constructor(e,n){super(),this.Gc=e,this.Jc=n,this.type="orderBy"}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new P(w.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new P(w.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new kr(s,i);return function(a,c){if(Rl(a)===null){const l=Nl(a);l!==null&&Tm(a,l,c.field)}}(r,o),o}(e._query,this.Gc,this.Jc);return new Vr(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new Or(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function GC(t,e="asc"){const n=e,r=Go("orderBy",t);return new lA(r,n)}function _m(t,e,n){if(typeof(n=Ye(n))=="string"){if(n==="")throw new P(w.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!sg(e)&&n.indexOf("/")!==-1)throw new P(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ie.fromString(n));if(!j.isDocumentKey(r))throw new P(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Qp(t,new j(r))}if(n instanceof ht)return Qp(t,n._key);throw new P(w.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ho(n)}.`)}function Im(t,e){if(!Array.isArray(t)||t.length===0)throw new P(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new P(w.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Tm(t,e,n){if(!n.isEqual(e))throw new P(w.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{convertValue(e,n="none"){switch(Un(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Cr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){const r={};return Mn(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new eu(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Wp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(js(e));default:return null}}convertTimestamp(e){const n=hn(e);return new lt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);me(xg(r));const s=new ei(r.get(1),r.get(3)),i=new j(r.popFirst(5));return s.isEqual(n)||ln(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class fA extends uA{constructor(e){super(),this.firestore=e}convertBytes(e){return new $r(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ht(this.firestore,null,n)}}function QC(t){t=Fr(t,Vr);const e=Fr(t.firestore,ti),n=fm(e),r=new fA(e);return aA(t._query),HS(n,t._query).then(s=>new iA(e,r,t,s))}function YC(t,e,n,...r){t=Fr(t,ht);const s=Fr(t.firestore,ti),i=nu(s);let o;return o=typeof(e=Ye(e))=="string"||e instanceof Ko?eA(i,"updateDoc",t._key,e,n,r):ZS(i,"updateDoc",t._key,e),ou(s,[o.toMutation(t._key,fn.exists(!0))])}function JC(t){return ou(Fr(t.firestore,ti),[new wg(t._key,fn.none())])}function XC(t,e){const n=Fr(t.firestore,ti),r=WS(t),s=hA(t.converter,e);return ou(n,[XS(nu(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,fn.exists(!1))]).then(()=>r)}function ou(t,e){return function(n,r){const s=new un;return n.asyncQueue.enqueueAndForget(async()=>AS(await jS(n),r,s)),s.promise}(fm(t),e)}(function(t,e=!0){(function(n){Sr=n})(ds),fs(new dr("firestore",(n,{options:r})=>{const s=n.getProvider("app").getImmediate(),i=new ti(s,new I0(n.getProvider("auth-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),en($p,"3.3.1",t),en($p,"3.3.1","esm2017")})();var au={exports:{}},bm=function(e,n){return function(){for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];return e.apply(n,s)}},dA=bm,qn=Object.prototype.toString;function cu(t){return qn.call(t)==="[object Array]"}function lu(t){return typeof t=="undefined"}function pA(t){return t!==null&&!lu(t)&&t.constructor!==null&&!lu(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function gA(t){return qn.call(t)==="[object ArrayBuffer]"}function mA(t){return typeof FormData!="undefined"&&t instanceof FormData}function yA(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function vA(t){return typeof t=="string"}function wA(t){return typeof t=="number"}function Sm(t){return t!==null&&typeof t=="object"}function Jo(t){if(qn.call(t)!=="[object Object]")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function EA(t){return qn.call(t)==="[object Date]"}function _A(t){return qn.call(t)==="[object File]"}function IA(t){return qn.call(t)==="[object Blob]"}function Am(t){return qn.call(t)==="[object Function]"}function TA(t){return Sm(t)&&Am(t.pipe)}function bA(t){return typeof URLSearchParams!="undefined"&&t instanceof URLSearchParams}function SA(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function AA(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function uu(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),cu(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.call(null,t[s],s,t)}function hu(){var t={};function e(s,i){Jo(t[i])&&Jo(s)?t[i]=hu(t[i],s):Jo(s)?t[i]=hu({},s):cu(s)?t[i]=s.slice():t[i]=s}for(var n=0,r=arguments.length;n<r;n++)uu(arguments[n],e);return t}function CA(t,e,n){return uu(e,function(s,i){n&&typeof s=="function"?t[i]=dA(s,n):t[i]=s}),t}function RA(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}var ft={isArray:cu,isArrayBuffer:gA,isBuffer:pA,isFormData:mA,isArrayBufferView:yA,isString:vA,isNumber:wA,isObject:Sm,isPlainObject:Jo,isUndefined:lu,isDate:EA,isFile:_A,isBlob:IA,isFunction:Am,isStream:TA,isURLSearchParams:bA,isStandardBrowserEnv:AA,forEach:uu,merge:hu,extend:CA,trim:SA,stripBOM:RA},Br=ft;function Cm(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Rm=function(e,n,r){if(!n)return e;var s;if(r)s=r(n);else if(Br.isURLSearchParams(n))s=n.toString();else{var i=[];Br.forEach(n,function(c,l){c===null||typeof c=="undefined"||(Br.isArray(c)?l=l+"[]":c=[c],Br.forEach(c,function(h){Br.isDate(h)?h=h.toISOString():Br.isObject(h)&&(h=JSON.stringify(h)),i.push(Cm(l)+"="+Cm(h))}))}),s=i.join("&")}if(s){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e},NA=ft;function Xo(){this.handlers=[]}Xo.prototype.use=function(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1};Xo.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};Xo.prototype.forEach=function(e){NA.forEach(this.handlers,function(r){r!==null&&e(r)})};var kA=Xo,OA=ft,DA=function(e,n){OA.forEach(e,function(s,i){i!==n&&i.toUpperCase()===n.toUpperCase()&&(e[n]=s,delete e[i])})},Nm=function(e,n,r,s,i){return e.config=n,r&&(e.code=r),e.request=s,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},PA=Nm,km=function(e,n,r,s,i){var o=new Error(e);return PA(o,n,r,s,i)},LA=km,xA=function(e,n,r){var s=r.config.validateStatus;!r.status||!s||s(r.status)?e(r):n(LA("Request failed with status code "+r.status,r.config,null,r.request,r))},Zo=ft,MA=Zo.isStandardBrowserEnv()?function(){return{write:function(n,r,s,i,o,a){var c=[];c.push(n+"="+encodeURIComponent(r)),Zo.isNumber(s)&&c.push("expires="+new Date(s).toGMTString()),Zo.isString(i)&&c.push("path="+i),Zo.isString(o)&&c.push("domain="+o),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){var r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),UA=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},FA=function(e,n){return n?e.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):e},VA=UA,$A=FA,BA=function(e,n){return e&&!VA(n)?$A(e,n):n},fu=ft,jA=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],qA=function(e){var n={},r,s,i;return e&&fu.forEach(e.split(`
`),function(a){if(i=a.indexOf(":"),r=fu.trim(a.substr(0,i)).toLowerCase(),s=fu.trim(a.substr(i+1)),r){if(n[r]&&jA.indexOf(r)>=0)return;r==="set-cookie"?n[r]=(n[r]?n[r]:[]).concat([s]):n[r]=n[r]?n[r]+", "+s:s}}),n},Om=ft,HA=Om.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a"),r;function s(i){var o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){var a=Om.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function du(t){this.message=t}du.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};du.prototype.__CANCEL__=!0;var ea=du,ta=ft,KA=xA,zA=MA,WA=Rm,GA=BA,QA=qA,YA=HA,pu=km,JA=ra,XA=ea,Dm=function(e){return new Promise(function(r,s){var i=e.data,o=e.headers,a=e.responseType,c;function l(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}ta.isFormData(i)&&delete o["Content-Type"];var u=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(h+":"+f)}var g=GA(e.baseURL,e.url);u.open(e.method.toUpperCase(),WA(g,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function y(){if(!!u){var v="getAllResponseHeaders"in u?QA(u.getAllResponseHeaders()):null,b=!a||a==="text"||a==="json"?u.responseText:u.response,L={data:b,status:u.status,statusText:u.statusText,headers:v,config:e,request:u};KA(function(z){r(z),l()},function(z){s(z),l()},L),u=null}}if("onloadend"in u?u.onloadend=y:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(y)},u.onabort=function(){!u||(s(pu("Request aborted",e,"ECONNABORTED",u)),u=null)},u.onerror=function(){s(pu("Network Error",e,null,u)),u=null},u.ontimeout=function(){var b=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",L=e.transitional||JA.transitional;e.timeoutErrorMessage&&(b=e.timeoutErrorMessage),s(pu(b,e,L.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",u)),u=null},ta.isStandardBrowserEnv()){var C=(e.withCredentials||YA(g))&&e.xsrfCookieName?zA.read(e.xsrfCookieName):void 0;C&&(o[e.xsrfHeaderName]=C)}"setRequestHeader"in u&&ta.forEach(o,function(b,L){typeof i=="undefined"&&L.toLowerCase()==="content-type"?delete o[L]:u.setRequestHeader(L,b)}),ta.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&a!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(c=function(v){!u||(s(!v||v&&v.type?new XA("canceled"):v),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c))),i||(i=null),u.send(i)})},Ve=ft,Pm=DA,ZA=Nm,eC={"Content-Type":"application/x-www-form-urlencoded"};function Lm(t,e){!Ve.isUndefined(t)&&Ve.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function tC(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=Dm),t}function nC(t,e,n){if(Ve.isString(t))try{return(e||JSON.parse)(t),Ve.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}var na={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:tC(),transformRequest:[function(e,n){return Pm(n,"Accept"),Pm(n,"Content-Type"),Ve.isFormData(e)||Ve.isArrayBuffer(e)||Ve.isBuffer(e)||Ve.isStream(e)||Ve.isFile(e)||Ve.isBlob(e)?e:Ve.isArrayBufferView(e)?e.buffer:Ve.isURLSearchParams(e)?(Lm(n,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):Ve.isObject(e)||n&&n["Content-Type"]==="application/json"?(Lm(n,"application/json"),nC(e)):e}],transformResponse:[function(e){var n=this.transitional||na.transitional,r=n&&n.silentJSONParsing,s=n&&n.forcedJSONParsing,i=!r&&this.responseType==="json";if(i||s&&Ve.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(i)throw o.name==="SyntaxError"?ZA(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};Ve.forEach(["delete","get","head"],function(e){na.headers[e]={}});Ve.forEach(["post","put","patch"],function(e){na.headers[e]=Ve.merge(eC)});var ra=na,rC=ft,sC=ra,iC=function(e,n,r){var s=this||sC;return rC.forEach(r,function(o){e=o.call(s,e,n)}),e},xm=function(e){return!!(e&&e.__CANCEL__)},Mm=ft,gu=iC,oC=xm,aC=ra,cC=ea;function mu(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new cC("canceled")}var lC=function(e){mu(e),e.headers=e.headers||{},e.data=gu.call(e,e.data,e.headers,e.transformRequest),e.headers=Mm.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Mm.forEach(["delete","get","head","post","put","patch","common"],function(s){delete e.headers[s]});var n=e.adapter||aC.adapter;return n(e).then(function(s){return mu(e),s.data=gu.call(e,s.data,s.headers,e.transformResponse),s},function(s){return oC(s)||(mu(e),s&&s.response&&(s.response.data=gu.call(e,s.response.data,s.response.headers,e.transformResponse))),Promise.reject(s)})},dt=ft,Um=function(e,n){n=n||{};var r={};function s(u,h){return dt.isPlainObject(u)&&dt.isPlainObject(h)?dt.merge(u,h):dt.isPlainObject(h)?dt.merge({},h):dt.isArray(h)?h.slice():h}function i(u){if(dt.isUndefined(n[u])){if(!dt.isUndefined(e[u]))return s(void 0,e[u])}else return s(e[u],n[u])}function o(u){if(!dt.isUndefined(n[u]))return s(void 0,n[u])}function a(u){if(dt.isUndefined(n[u])){if(!dt.isUndefined(e[u]))return s(void 0,e[u])}else return s(void 0,n[u])}function c(u){if(u in n)return s(e[u],n[u]);if(u in e)return s(void 0,e[u])}var l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return dt.forEach(Object.keys(e).concat(Object.keys(n)),function(h){var f=l[h]||i,g=f(h);dt.isUndefined(g)&&f!==c||(r[h]=g)}),r},Fm={version:"0.24.0"},uC=Fm.version,yu={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){yu[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});var Vm={};yu.transitional=function(e,n,r){function s(i,o){return"[Axios v"+uC+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return function(i,o,a){if(e===!1)throw new Error(s(o," has been removed"+(n?" in "+n:"")));return n&&!Vm[o]&&(Vm[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function hC(t,e,n){if(typeof t!="object")throw new TypeError("options must be an object");for(var r=Object.keys(t),s=r.length;s-- >0;){var i=r[s],o=e[i];if(o){var a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new TypeError("option "+i+" must be "+c);continue}if(n!==!0)throw Error("Unknown option "+i)}}var fC={assertOptions:hC,validators:yu},$m=ft,dC=Rm,Bm=kA,jm=lC,sa=Um,qm=fC,jr=qm.validators;function ri(t){this.defaults=t,this.interceptors={request:new Bm,response:new Bm}}ri.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=sa(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var n=e.transitional;n!==void 0&&qm.assertOptions(n,{silentJSONParsing:jr.transitional(jr.boolean),forcedJSONParsing:jr.transitional(jr.boolean),clarifyTimeoutError:jr.transitional(jr.boolean)},!1);var r=[],s=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(e)===!1||(s=s&&f.synchronous,r.unshift(f.fulfilled,f.rejected))});var i=[];this.interceptors.response.forEach(function(f){i.push(f.fulfilled,f.rejected)});var o;if(!s){var a=[jm,void 0];for(Array.prototype.unshift.apply(a,r),a=a.concat(i),o=Promise.resolve(e);a.length;)o=o.then(a.shift(),a.shift());return o}for(var c=e;r.length;){var l=r.shift(),u=r.shift();try{c=l(c)}catch(h){u(h);break}}try{o=jm(c)}catch(h){return Promise.reject(h)}for(;i.length;)o=o.then(i.shift(),i.shift());return o};ri.prototype.getUri=function(e){return e=sa(this.defaults,e),dC(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};$m.forEach(["delete","get","head","options"],function(e){ri.prototype[e]=function(n,r){return this.request(sa(r||{},{method:e,url:n,data:(r||{}).data}))}});$m.forEach(["post","put","patch"],function(e){ri.prototype[e]=function(n,r,s){return this.request(sa(s||{},{method:e,url:n,data:r}))}});var pC=ri,gC=ea;function qr(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(s){e=s});var n=this;this.promise.then(function(r){if(!!n._listeners){var s,i=n._listeners.length;for(s=0;s<i;s++)n._listeners[s](r);n._listeners=null}}),this.promise.then=function(r){var s,i=new Promise(function(o){n.subscribe(o),s=o}).then(r);return i.cancel=function(){n.unsubscribe(s)},i},t(function(s){n.reason||(n.reason=new gC(s),e(n.reason))})}qr.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};qr.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};qr.prototype.unsubscribe=function(e){if(!!this._listeners){var n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}};qr.source=function(){var e,n=new qr(function(s){e=s});return{token:n,cancel:e}};var mC=qr,yC=function(e){return function(r){return e.apply(null,r)}},vC=function(e){return typeof e=="object"&&e.isAxiosError===!0},Hm=ft,wC=bm,ia=pC,EC=Um,_C=ra;function Km(t){var e=new ia(t),n=wC(ia.prototype.request,e);return Hm.extend(n,ia.prototype,e),Hm.extend(n,e),n.create=function(s){return Km(EC(t,s))},n}var Lt=Km(_C);Lt.Axios=ia;Lt.Cancel=ea;Lt.CancelToken=mC;Lt.isCancel=xm;Lt.VERSION=Fm.version;Lt.all=function(e){return Promise.all(e)};Lt.spread=yC;Lt.isAxiosError=vC;au.exports=Lt;au.exports.default=Lt;var ZC=au.exports,IC="firebase",TC="9.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en(IC,TC,"app");export{BC as A,WC as B,$C as C,jC as D,FC as E,Rt as F,WS as G,JC as H,MC as I,xC as J,VC as K,LC as L,zC as M,KC as O,YC as _,kh as a,AC as b,CC as c,ot as d,Av as e,RC as f,qC as g,Nv as h,HC as i,NC as j,ah as k,QC as l,ZC as m,la as n,bv as o,PC as p,SC as q,Ly as r,OC as s,bC as t,UC as u,DC as v,$y as w,XC as x,GC as y,kC as z};
